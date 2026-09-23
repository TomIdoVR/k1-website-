/**
 * Visit attribution: where a visitor came from, kept until they convert.
 *
 * Why not read the URL at submit time (as getUtmParams in analytics.ts does):
 * a candidate who lands on a job page from a LinkedIn ad and then reads the
 * homepage first has lost the UTMs by the time they apply. So the landing is
 * captured once, on the first page of the visit, and stored.
 *
 * Two touches are kept:
 *   first — the first visit that carried any signal. Never overwritten.
 *   last  — the most recent visit that carried a signal. A plain direct visit
 *           does not overwrite it ("last non-direct"), so someone who clicks
 *           an ad and returns by typing the URL still credits the ad.
 *
 * The classifier is pure and runs on the server too: the route re-derives the
 * channel from the raw touch rather than trusting a label the client sent.
 */

export interface Touch {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  /** Ad click id and which network set it, e.g. { click_id: 'li_fat_id' }. */
  click_id?: string
  /** Explicit referral code: ?ref=dana or ?source=meetup. */
  ref?: string
  /** Referring hostname, only when it is another site. */
  referrer?: string
  /** Path the visit landed on. */
  landing?: string
  /** ISO timestamp of the landing. */
  at?: string
}

export interface Attribution {
  first?: Touch
  last?: Touch
}

const STORAGE_KEY = 'k1_attr'
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const
/** LinkedIn, Google, Meta, Microsoft. Only the name is kept, never the value. */
const CLICK_IDS = ['li_fat_id', 'gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'] as const
const TOUCH_KEYS: (keyof Touch)[] = [...UTM_KEYS, 'click_id', 'ref', 'referrer', 'landing', 'at']

/** This page load's view, so a blocked localStorage does not lose the visit. */
let memory: Attribution | null = null
/** A direct visitor's landing, kept for this page load only. */
let sessionLanding: Touch | null = null

function hasSignal(t: Touch): boolean {
  return Boolean(t.utm_source || t.utm_medium || t.utm_campaign || t.click_id || t.ref || t.referrer)
}

/** Read the current landing into a Touch. Client only. */
function readLanding(): Touch {
  const params = new URLSearchParams(window.location.search)
  const t: Touch = { landing: window.location.pathname, at: new Date().toISOString() }
  for (const key of UTM_KEYS) {
    const v = params.get(key)
    if (v) t[key] = v.slice(0, 120)
  }
  const click = CLICK_IDS.find((k) => params.get(k))
  if (click) t.click_id = click
  const ref = params.get('ref') || params.get('source')
  if (ref) t.ref = ref.slice(0, 80)
  try {
    const host = document.referrer ? new URL(document.referrer).hostname : ''
    if (host && host !== window.location.hostname) t.referrer = host
  } catch { /* malformed referrer: ignore */ }
  return t
}

function load(): Attribution {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Attribution) : {}
  } catch {
    return {}
  }
}

/**
 * Record this visit's landing. Call once per full page load; client-side
 * navigations keep the same referrer and query, so they add nothing.
 */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return
  const touch = readLanding()
  const stored = load()
  if (!hasSignal(touch)) {
    // Direct visit: keep the session's touch in memory for this visit only,
    // so a direct visitor still reports their landing page on submit.
    if (!stored.first) sessionLanding = touch
    return
  }
  const next: Attribution = { first: stored.first ?? touch, last: touch }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch { /* storage blocked: the in-memory copy still covers this visit */ }
  memory = next
}

/** What the visitor's attribution is right now, for attaching to a submission. */
export function getAttribution(): Attribution {
  if (typeof window === 'undefined') return {}
  const stored = memory ?? load()
  if (stored.first || stored.last) return stored
  return sessionLanding ? { first: sessionLanding, last: sessionLanding } : {}
}

/** Keep only known keys, as short strings. For untrusted input on the server. */
export function sanitizeTouch(input: unknown): Touch | undefined {
  if (!input || typeof input !== 'object') return undefined
  const out: Touch = {}
  for (const key of TOUCH_KEYS) {
    const v = (input as Record<string, unknown>)[key]
    if (typeof v === 'string' && v.trim()) out[key] = v.trim().slice(0, 160)
  }
  return Object.keys(out).length ? out : undefined
}

const PAID_MEDIUM = /(^|[_-])(cpc|ppc|paid|ads?|sponsored|display|paidsocial|paid_social|cpm)([_-]|$)/i

const JOB_BOARDS: [RegExp, string][] = [
  [/indeed\./, 'Indeed'],
  [/glassdoor\./, 'Glassdoor'],
  [/computrabajo\./, 'Computrabajo'],
  [/occ\.com\.mx$/, 'OCC Mundial'],
  [/bumeran\./, 'Bumeran'],
  [/alljobs\.co\.il$/, 'AllJobs'],
  [/drushim\.co\.il$/, 'Drushim'],
  [/jobmaster\.co\.il$/, 'JobMaster'],
  [/(wellfound|angel)\.co$/, 'Wellfound'],
]

/**
 * One human-readable channel for a touch, e.g. "LinkedIn Ads" or
 * "Job board — Indeed". Order matters: paid signals beat referrers, because a
 * LinkedIn ad and a LinkedIn post both arrive from linkedin.com.
 */
export function classifyTouch(t: Touch | undefined): string {
  if (!t) return 'Direct / unknown'
  const src = (t.utm_source || '').toLowerCase()
  const med = (t.utm_medium || '').toLowerCase()
  const host = (t.referrer || '').toLowerCase()
  const paid = PAID_MEDIUM.test(med)
  const isLinkedIn = src.includes('linkedin') || /(^|\.)linkedin\.com$|(^|\.)lnkd\.in$/.test(host)

  if (t.click_id === 'li_fat_id' || (src.includes('linkedin') && paid)) return 'LinkedIn Ads'
  if (isLinkedIn) return 'LinkedIn (organic)'
  if (['gclid', 'gbraid', 'wbraid'].includes(t.click_id || '') || (src.includes('google') && paid)) return 'Google Ads'
  if (t.click_id === 'fbclid' && paid) return 'Meta Ads'
  if (/facebook|instagram|meta/.test(src) || /(facebook|instagram)\.com$/.test(host)) {
    return paid ? 'Meta Ads' : 'Facebook / Instagram'
  }
  if (t.click_id === 'msclkid') return 'Microsoft Ads'
  if (t.ref) return `Referral — ${t.ref}`
  for (const [re, name] of JOB_BOARDS) {
    if (re.test(host) || src.includes(name.toLowerCase().split(' ')[0])) return `Job board — ${name}`
  }
  if (med === 'email' || src.includes('mail')) return 'Email'
  if (/(chatgpt\.com|openai\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com)$/.test(host)) {
    return 'AI assistant'
  }
  if (/(^|\.)(google|bing|duckduckgo|yahoo|yandex|ecosia)\./.test(host)) return 'Search (organic)'
  if (src) return med ? `${t.utm_source} / ${t.utm_medium}` : t.utm_source as string
  if (host) return `Referral — ${host}`
  return 'Direct / unknown'
}
