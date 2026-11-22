/**
 * Website lead intake: the contact form, the CAD/C5 lead forms and the gated
 * downloads.
 *
 * Replaces Formspree for leads, as the careers route already did for
 * applications: Formspree's free tier caps submissions per month and holds the
 * rest, routes only to one inbox, and charges for more. Here every lead is kept
 * and sent to the people who work it, with no cap and no fee.
 *
 * Three independent channels, so no single failure loses a lead:
 *   1. Store   - appended to a Redis list (Upstash, via Vercel). This is the
 *                record: it survives a deleted Slack message or a lost email.
 *   2. Slack   - posted to the channel the team already triages
 *                (#website-form-submissions).
 *   3. Email   - sent to the owners (Omer and David), reply-to the lead.
 * The route reports success if any channel accepted the lead, and fails only
 * when every configured channel failed. In that last case the full lead is
 * written to the function log as a final fallback, so it can still be
 * recovered by hand.
 *
 * Spam protection, no outside service needed:
 *   - honeypot field (company_website): filled means a bot; accepted silently,
 *     nothing stored or sent.
 *   - fill time: a form submitted under MIN_FILL_MS after it rendered is
 *     flagged as possible spam, not dropped, so a fast human is never lost.
 *   - links: a message with many links is flagged the same way.
 * Flagged leads are still stored and posted, labelled so they can be ignored.
 *
 * Environment (set in Vercel; every group is optional, at least one is needed):
 *   KV_REST_API_URL / KV_REST_API_TOKEN
 *                       Upstash Redis REST endpoint and token. The Vercel
 *                       Marketplace Upstash integration sets these names;
 *                       UPSTASH_REDIS_REST_URL / _TOKEN are accepted too.
 *   LEADS_REDIS_KEY     List name. Default "leads".
 *   SLACK_LEADS_WEBHOOK_URL
 *                       Incoming webhook for #website-form-submissions.
 *                       Simplest option; preferred.
 *   SLACK_LEADS_BOT_TOKEN + SLACK_LEADS_CHANNEL
 *                       Alternative to the webhook: a bot token with
 *                       chat:write, and a channel id or #name the bot is in.
 *   RESEND_API_KEY      Email sender (shared with careers).
 *   LEADS_FROM_EMAIL    Verified From address, e.g. leads@kabatone.com
 *   LEADS_NOTIFY_EMAILS Comma-separated recipients.
 */

import { WebClient, type Block, type KnownBlock } from '@slack/web-api'
import { classifyTouch, sanitizeTouch, type Touch } from '@/lib/attribution'

export const runtime = 'nodejs'

const MAX = { short: 200, long: 5000 }
/** Below this, a human is unlikely to have typed the form. */
const MIN_FILL_MS = 2500
const MAX_LINKS = 3

/** Known forms. Anything else is recorded as "unknown" rather than trusted. */
const FORMS = {
  contact: 'Contact form',
  cad: 'CAD / C5 lead form',
  download: 'Gated download',
} as const
type FormId = keyof typeof FORMS | 'unknown'

interface Lead {
  id: string
  receivedAt: string
  form: FormId
  name: string
  email: string
  company: string
  phone: string
  role: string
  region: string
  interest: string
  message: string
  /** Page tag set by the page, e.g. "best-cad" (the old campaign_source). */
  campaignSource: string
  /** For downloads: which file. */
  asset: string
  locale: string
  source: Source
  spam: string[]
}

interface Source {
  channel: string
  firstChannel?: string
  last?: Touch
  page: string
}

function clean(value: unknown, limit: number): string {
  return typeof value === 'string' ? value.trim().slice(0, limit) : ''
}

function slackEscape(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function htmlEscape(text: string): string {
  return text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** Same approach as careers: re-derive the channel server side. */
function parseSource(body: Record<string, unknown>): Source {
  let raw: { first?: unknown; last?: unknown } = {}
  const json = typeof body.attribution === 'string' ? body.attribution.slice(0, 4000) : ''
  try {
    if (json) raw = JSON.parse(json)
  } catch { /* malformed: fall through to unknown */ }
  const first = sanitizeTouch(raw.first)
  const last = sanitizeTouch(raw.last) ?? first
  const channel = classifyTouch(last)
  const firstChannel = classifyTouch(first)
  return {
    channel,
    firstChannel: first && firstChannel !== channel ? firstChannel : undefined,
    last,
    page: clean(body.page, MAX.short),
  }
}

function sourceDetail(src: Source): string {
  const t = src.last
  if (!t) return ''
  return [
    t.utm_campaign && `campaign ${t.utm_campaign}`,
    t.utm_content && `ad ${t.utm_content}`,
    (t.utm_source || t.utm_medium) && `${t.utm_source ?? '-'} / ${t.utm_medium ?? '-'}`,
    t.referrer && `from ${t.referrer}`,
    t.landing && `landed on ${t.landing}`,
  ].filter(Boolean).join(' · ')
}

function spamSignals(body: Record<string, unknown>, message: string): string[] {
  const out: string[] = []
  const elapsed = Number(clean(body.elapsed_ms, 12))
  // Missing elapsed_ms is normal for a no-JS submission, so it is not a signal.
  if (Number.isFinite(elapsed) && elapsed > 0 && elapsed < MIN_FILL_MS) {
    out.push(`filled in ${Math.round(elapsed / 100) / 10}s`)
  }
  const links = (message.match(/https?:\/\/|www\./gi) || []).length
  if (links > MAX_LINKS) out.push(`${links} links in message`)
  return out
}

function title(lead: Lead): string {
  const what = FORMS[lead.form as keyof typeof FORMS] ?? 'Website lead'
  const who = lead.company || lead.name
  return `${lead.spam.length ? '[possible spam] ' : ''}${what}: ${who}`.slice(0, 150)
}

// ---------------------------------------------------------------- channels

async function store(lead: Lead): Promise<boolean> {
  const url = (process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL)?.trim()
  const token = (process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN)?.trim()
  if (!url || !token) return false
  const key = process.env.LEADS_REDIS_KEY?.trim() || 'leads'
  try {
    // Upstash REST: POST the command as a JSON array.
    const res = await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(['LPUSH', key, JSON.stringify(lead)]),
    })
    if (!res.ok) console.error('[leads] store failed:', res.status, await res.text().catch(() => ''))
    return res.ok
  } catch (err) {
    console.error('[leads] store threw:', err)
    return false
  }
}

async function postToSlack(lead: Lead): Promise<boolean> {
  const webhook = process.env.SLACK_LEADS_WEBHOOK_URL?.trim()
  const token = process.env.SLACK_LEADS_BOT_TOKEN?.trim()
  const channel = process.env.SLACK_LEADS_CHANNEL?.trim()
  if (!webhook && !(token && channel)) return false

  const line = (label: string, value: string) =>
    value ? `*${label}:* ${slackEscape(value)}` : ''

  const fields = [
    line('Name', lead.name),
    line('Organization', lead.company),
    line('Role', lead.role),
    line('Email', lead.email),
    line('Phone', lead.phone),
    line('Region', lead.region),
    line('Interest', lead.interest),
    line('Download', lead.asset),
  ].filter(Boolean).join('\n')

  const src = lead.source
  const sourceText = [
    `*Source:* ${slackEscape(src.channel)}` +
      (src.firstChannel ? ` _(first visit: ${slackEscape(src.firstChannel)})_` : ''),
    src.page ? `*Page:* ${slackEscape(src.page)}` : '',
    sourceDetail(src) ? `_${slackEscape(sourceDetail(src))}_` : '',
  ].filter(Boolean).join('\n')

  const blocks: (Block | KnownBlock)[] = [
    { type: 'header', text: { type: 'plain_text' as const, text: title(lead) } },
    { type: 'section', text: { type: 'mrkdwn' as const, text: fields || '_no details_' } },
    { type: 'section', text: { type: 'mrkdwn' as const, text: sourceText } },
  ]
  if (lead.message) {
    blocks.push({
      type: 'section',
      text: { type: 'mrkdwn' as const, text: `*Message:*\n${slackEscape(lead.message).slice(0, 2800)}` },
    })
  }
  blocks.push({
    type: 'context',
    elements: [{
      type: 'mrkdwn' as const,
      text: [
        `Lead \`${lead.id}\``,
        `Locale \`${lead.locale}\``,
        lead.campaignSource && `Tag \`${slackEscape(lead.campaignSource)}\``,
        lead.spam.length && `Flags: ${slackEscape(lead.spam.join(', '))}`,
      ].filter(Boolean).join(' · '),
    }],
  })

  const payload = { text: title(lead), blocks }
  try {
    if (webhook) {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) console.error('[leads] slack webhook failed:', res.status)
      return res.ok
    }
    const result = await new WebClient(token).chat.postMessage({
      channel: channel as string,
      text: payload.text,
      blocks,
    })
    if (!result.ok) console.error('[leads] slack returned not-ok:', result.error)
    return Boolean(result.ok)
  } catch (err) {
    const reason = (err as { data?: { error?: string } })?.data?.error ?? String(err)
    console.error('[leads] slack post failed:', reason)
    return false
  }
}

async function sendEmail(lead: Lead): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from = process.env.LEADS_FROM_EMAIL?.trim()
  const to = (process.env.LEADS_NOTIFY_EMAILS || '')
    .split(',').map((x) => x.trim()).filter(Boolean)
  if (!apiKey || !from || to.length === 0) return false

  const row = (label: string, value: string) =>
    value ? `<tr><td style="padding:6px 14px 6px 0;color:#64748b">${label}</td><td style="padding:6px 0"><strong>${htmlEscape(value)}</strong></td></tr>` : ''

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:640px">
      <h2 style="margin:0 0 4px">${htmlEscape(title(lead))}</h2>
      <p style="margin:0 0 20px;color:#475569">Hit reply to answer the lead directly.</p>
      <table style="border-collapse:collapse;font-size:14px">
        ${row('Name', lead.name)}${row('Organization', lead.company)}${row('Role', lead.role)}
        ${row('Email', lead.email)}${row('Phone', lead.phone)}${row('Region', lead.region)}
        ${row('Interest', lead.interest)}${row('Download', lead.asset)}
        ${row('Source', lead.source.channel)}${row('First visit', lead.source.firstChannel ?? '')}
        ${row('Page', lead.source.page)}${row('Source detail', sourceDetail(lead.source))}
        ${row('Tag', lead.campaignSource)}${row('Flags', lead.spam.join(', '))}
        ${row('Lead id', lead.id)}
      </table>
      ${lead.message ? `<h3 style="margin:24px 0 6px;font-size:14px">Message</h3><p style="white-space:pre-wrap;font-size:14px;line-height:1.6">${htmlEscape(lead.message)}</p>` : ''}
    </div>`

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to,
        reply_to: lead.email || undefined,
        subject: title(lead),
        html,
      }),
    })
    if (!res.ok) console.error('[leads] resend failed:', res.status, await res.text().catch(() => ''))
    return res.ok
  } catch (err) {
    console.error('[leads] resend threw:', err)
    return false
  }
}

// ---------------------------------------------------------------- handler

/** Plain-HTML reply for a browser that posted the form without JavaScript. */
function noJsReply(ok: boolean, locale: string, page: string): Response {
  const es = locale === 'es'
  // Same-site paths only: "//host" and "/\\host" would leave the site.
  const back = /^\/(?![/\\])[^\s]*$/.test(page) ? page : es ? '/es' : '/'
  const msg = ok
    ? es ? 'Gracias. Nuestro equipo le responderá dentro de un día hábil.' : 'Thank you. Our team will get back to you within one business day.'
    : es ? 'Algo salió mal. Escríbanos a info@kabatone.com.' : 'Something went wrong. Please email us at info@kabatone.com.'
  const html = `<!doctype html><html lang="${es ? 'es' : 'en'}"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Kabat One</title><body style="font-family:system-ui,sans-serif;max-width:560px;margin:15vh auto;padding:0 20px;line-height:1.6"><p>${htmlEscape(msg)}</p><p><a href="${htmlEscape(back)}">${es ? 'Volver' : 'Back'}</a></p></body></html>`
  return new Response(html, { status: ok ? 200 : 502, headers: { 'Content-Type': 'text/html; charset=utf-8' } })
}

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type') || ''
  const wantsJson = (request.headers.get('accept') || '').includes('application/json')

  let body: Record<string, unknown>
  if (contentType.includes('application/json')) {
    try {
      body = await request.json()
    } catch {
      return Response.json({ error: 'invalid_json' }, { status: 400 })
    }
  } else {
    try {
      const form = await request.formData()
      body = Object.fromEntries(
        [...form.entries()].filter(([, v]) => typeof v === 'string')
      ) as Record<string, unknown>
    } catch {
      return Response.json({ error: 'invalid_form' }, { status: 400 })
    }
  }

  // Honeypot: a real person never fills a field they cannot see.
  if (clean(body.company_website, MAX.short)) {
    console.log('[leads] honeypot hit, dropped')
    return wantsJson ? Response.json({ ok: true }) : noJsReply(true, 'en', '')
  }

  const formRaw = clean(body.form, 20)
  const message = clean(body.message, MAX.long)
  const lead: Lead = {
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    form: formRaw in FORMS ? (formRaw as FormId) : 'unknown',
    name: clean(body.name, MAX.short),
    email: clean(body.email, MAX.short),
    // The contact form calls it company, the download form organization.
    company: clean(body.company, MAX.short) || clean(body.organization, MAX.short),
    phone: clean(body.phone, MAX.short),
    role: clean(body.role, MAX.short),
    region: clean(body.region, 40),
    interest: clean(body.interest, 60),
    message,
    campaignSource: clean(body.campaign_source, 60),
    asset: clean(body.asset, MAX.short),
    locale: clean(body.locale, 8) === 'es' ? 'es' : 'en',
    source: parseSource(body),
    spam: spamSignals(body, message),
  }

  if (!lead.name || !lead.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return wantsJson
      ? Response.json({ error: 'missing_fields' }, { status: 400 })
      : noJsReply(false, lead.locale, lead.source.page)
  }

  // One structured line per lead, for counting by source from the logs.
  // No name, email or phone here.
  console.log('[leads] lead', JSON.stringify({
    id: lead.id,
    form: lead.form,
    locale: lead.locale,
    tag: lead.campaignSource || null,
    page: lead.source.page || null,
    channel: lead.source.channel,
    first_channel: lead.source.firstChannel ?? lead.source.channel,
    utm_source: lead.source.last?.utm_source ?? null,
    utm_medium: lead.source.last?.utm_medium ?? null,
    utm_campaign: lead.source.last?.utm_campaign ?? null,
    referrer: lead.source.last?.referrer ?? null,
    spam: lead.spam.length ? lead.spam : null,
  }))

  const [stored, slackOk, emailOk] = await Promise.all([store(lead), postToSlack(lead), sendEmail(lead)])
  const ok = stored || slackOk || emailOk

  if (!ok) {
    // Last resort: nothing accepted the lead, so keep it in the function log
    // where it can be recovered by hand. This is the only place lead details
    // are logged.
    console.error('[leads] NO CHANNEL ACCEPTED LEAD, full record follows', JSON.stringify(lead))
  }

  if (!wantsJson) return noJsReply(ok, lead.locale, lead.source.page)
  return ok
    ? Response.json({ ok: true, stored, slack: slackOk, email: emailOk })
    : Response.json({ error: 'delivery_failed' }, { status: 502 })
}
