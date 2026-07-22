/**
 * Lightweight client-side analytics helper.
 *
 * Why this exists: GA4 is loaded directly via gtag (see components/GoogleAnalytics.tsx).
 * Pushing `{ event: 'generate_lead' }` to window.dataLayer only reaches GA4 if GTM is
 * present AND has a tag configured to forward it — which it is not. So historically every
 * lead event fell into a void and GA4 reported zero conversions.
 *
 * trackLead() fires the event through gtag('event', ...) so it reaches GA4 for certain,
 * and also pushes to dataLayer so any future GTM-side tag can pick it up. It attaches the
 * visit's UTM parameters so each lead carries its source/medium/campaign into GA4.
 */

type GtagFn = (
  command: 'event',
  eventName: string,
  params?: Record<string, unknown>,
) => void

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const

/** Read UTM params from the current URL. Returns only the ones present. */
export function getUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const out: Record<string, string> = {}
  for (const key of UTM_KEYS) {
    const value = params.get(key)
    if (value) out[key] = value
  }
  return out
}

/**
 * Fire a conversion / lead event to GA4 (and dataLayer for GTM).
 *
 * @param eventName GA4 event name, e.g. 'generate_lead' or 'book_demo'
 * @param params    extra event params (form id, region, campaign source, etc.)
 */
export function trackLead(
  eventName: string,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === 'undefined') return

  const w = window as Window & {
    gtag?: GtagFn
    dataLayer?: Record<string, unknown>[]
  }

  const payload = { ...getUtmParams(), ...params }

  // Primary path: straight to GA4 via gtag. Reliable regardless of GTM config.
  if (typeof w.gtag === 'function') {
    w.gtag('event', eventName, payload)
  }

  // Secondary path: leave it on the dataLayer for any GTM-side / server tags.
  // (No double-count today — GTM has no forwarding tag for these events.)
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event: eventName, ...payload })
}
