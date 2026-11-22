/**
 * Browser side of the site's own lead intake (/api/leads).
 *
 * Adds what every lead form should send but no form should have to remember:
 * which form it was, the page, the visitor's stored attribution (first and
 * last touch, see lib/attribution), the locale, and how long the form was open
 * (a spam signal checked server side).
 */

import { getAttribution } from '@/lib/attribution'

export const LEADS_URL = '/api/leads'

export type LeadFormId = 'contact' | 'cad' | 'download'

export async function submitLead(
  formData: FormData,
  opts: { form: LeadFormId; startedAt: number; locale: 'en' | 'es' },
): Promise<boolean> {
  formData.set('form', opts.form)
  formData.set('page', window.location.pathname)
  formData.set('locale', opts.locale)
  formData.set('elapsed_ms', String(Date.now() - opts.startedAt))
  try {
    formData.set('attribution', JSON.stringify(getAttribution()))
  } catch { /* storage blocked: the lead still goes through */ }

  try {
    const res = await fetch(LEADS_URL, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })
    return res.ok
  } catch {
    return false
  }
}
