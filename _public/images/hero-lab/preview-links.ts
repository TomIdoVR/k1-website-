/* Keeps navigation inside the redesign while it lives under /hero-lab.

   Without this, every link between redesigned pages — the nav, the footer, the
   Solutions accordion CTAs, the homepage hero — points at the canonical route
   (/k-safety, /, …) and drops you onto the OLD live page mid-review. That made
   the preview impossible to browse as a coherent site.

   Only the six routes that actually have a redesigned counterpart are
   remapped. Industries, integrations, comparisons and company links have no
   redesign yet, so they correctly continue to the live pages.

   ON PROMOTION: set PREVIEW_BASE to '' and every link becomes canonical
   again — no other edit needed. */

export const PREVIEW_BASE = '/hero-lab'

/** Routes that exist in both the live site and the redesign. */
const REDESIGNED = new Set(['/', '/k-safety', '/k-dispatch', '/k-video', '/k-traffic', '/k-connect'])

export function pv(href: string): string {
  if (!PREVIEW_BASE) return href
  if (!REDESIGNED.has(href)) return href
  return href === '/' ? PREVIEW_BASE : `${PREVIEW_BASE}${href}`
}
