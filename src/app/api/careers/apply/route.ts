/**
 * Job application intake.
 *
 * Replaces Formspree for careers: its free tier caps at 50 submissions/month,
 * has no Slack integration on any tier, and gates multiple recipients and file
 * uploads behind paid plans.
 *
 * Slack and email are delivered independently — a failure in one must not lose
 * the application, so the route reports success if any configured channel
 * accepted it, and only fails when every configured channel failed.
 *
 * Slack posting uses its own app token rather than the SEO agent's, so that
 * re-scoping or rotating the SEO token can never silently stop applications
 * arriving, and so candidate data is not handled by an app provisioned for
 * something else. SLACK_BOT_TOKEN is kept only as a fallback.
 *
 * Environment (set in Vercel):
 *   SLACK_HIRING_BOT_TOKEN     Dedicated hiring app's bot token (xoxb-).
 *                              Needs chat:write, plus files:write to attach
 *                              CVs, and the app must be a member of the
 *                              channel when that channel is private.
 *   SLACK_CAREERS_CHANNEL      Channel id or #name.
 *   SLACK_BOT_TOKEN            Fallback if the dedicated token is unset.
 *   SLACK_CAREERS_WEBHOOK_URL  Optional alternative to a bot token.
 *   RESEND_API_KEY             Email sender.
 *   CAREERS_FROM_EMAIL         Verified From address, e.g. careers@kabatone.com
 *   CAREERS_NOTIFY_EMAILS      Comma-separated recipients. A Slack channel's
 *                              own email address works here too.
 */

import { WebClient, type Block, type KnownBlock } from '@slack/web-api'
import { classifyTouch, sanitizeTouch, type Touch } from '@/lib/attribution'

export const runtime = 'nodejs'

const MAX = { short: 200, long: 5000 }
const MAX_CV_BYTES = 10 * 1024 * 1024
const ALLOWED_CV = /\.(pdf|docx?|rtf|txt)$/i

interface Application {
  name: string
  email: string
  phone: string
  linkedin: string
  location: string
  cvLink: string
  message: string
  role: string
  roleSlug: string
  locale: string
  cv?: { name: string; bytes: Buffer }
  answers: { question: string; answer: string }[]
  source: Source
}

interface Source {
  /** Channel of the most recent non-direct visit, e.g. "LinkedIn Ads". */
  channel: string
  /** Channel of the first visit, when it differs from the last. */
  firstChannel?: string
  last?: Touch
  /** What the candidate said, from "How did you hear about this role?". */
  heard: string
  /** Page the form was submitted from. */
  page: string
}

/**
 * Re-derives the channel here rather than trusting one the browser sent. The
 * raw touch is still client-supplied, so treat it as a strong hint, not proof.
 */
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
    heard: clean(body.heard, 80),
    page: clean(body.page, MAX.short),
  }
}

/** "utm_campaign · landing" detail line, empty when there is nothing to add. */
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

function clean(value: unknown, limit: number): string {
  return typeof value === 'string' ? value.trim().slice(0, limit) : ''
}

/** Slack mrkdwn requires these three escaped; nothing else. */
function slackEscape(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function htmlEscape(text: string): string {
  return text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

async function postToSlack(app: Application): Promise<boolean> {
  // Returns true when the application itself reached Slack. A CV that fails to
  // upload is logged but does not fail the submission — the details still got
  // through, and losing an application over an attachment would be worse.
  // Trimmed: a value piped into `vercel env add` can carry a trailing newline,
  // and Slack rejects "C0C2F01B2MA\n" as channel_not_found.
  const webhook = process.env.SLACK_CAREERS_WEBHOOK_URL?.trim()
  const hiringToken = process.env.SLACK_HIRING_BOT_TOKEN?.trim()
  const fallbackToken = process.env.SLACK_BOT_TOKEN?.trim()
  const token = hiringToken || fallbackToken
  const channel = process.env.SLACK_CAREERS_CHANNEL?.trim()
  if (!webhook && !(token && channel)) {
    console.error('[careers] slack not configured:', {
      webhook: Boolean(webhook),
      hiringToken: Boolean(hiringToken),
      fallbackToken: Boolean(fallbackToken),
      channel: Boolean(channel),
    })
    return false
  }

  const line = (label: string, value: string) =>
    value ? `*${label}:* ${slackEscape(value)}` : ''

  const fields = [
    line('Name', app.name),
    line('Email', app.email),
    line('Phone', app.phone),
    line('Location', app.location),
    line('LinkedIn', app.linkedin),
    line('CV link', app.cvLink),
    app.cv ? `*CV file:* ${slackEscape(app.cv.name)} _(attached in thread)_` : '',
  ].filter(Boolean).join('\n')

  const screening = app.answers
    .map((a) => `${a.answer === 'Yes' ? '✅' : '❌'} ${slackEscape(a.question)}`)
    .join('\n')

  const src = app.source
  const sourceText = [
    `*Source:* ${slackEscape(src.channel)}` +
      (src.firstChannel ? ` _(first visit: ${slackEscape(src.firstChannel)})_` : ''),
    src.heard ? `*They said:* ${slackEscape(src.heard)}` : '',
    sourceDetail(src) ? `_${slackEscape(sourceDetail(src))}_` : '',
  ].filter(Boolean).join('\n')

  const blocks: (Block | KnownBlock)[] = [
    {
      type: 'header',
      text: { type: 'plain_text' as const, text: `New application — ${app.role}`.slice(0, 150) },
    },
    { type: 'section', text: { type: 'mrkdwn' as const, text: fields || '_no details_' } },
    { type: 'section', text: { type: 'mrkdwn' as const, text: sourceText } },
  ]
  if (screening) {
    blocks.push({
      type: 'section',
      text: { type: 'mrkdwn' as const, text: `*Screening:*\n${screening}` },
    })
  }
  if (app.message) {
    blocks.push({
      type: 'section',
      text: {
        type: 'mrkdwn' as const,
        text: `*Message:*\n${slackEscape(app.message).slice(0, 2800)}`,
      },
    })
  }
  blocks.push({
    type: 'context',
    elements: [{
      type: 'mrkdwn' as const,
      text: `Role: \`${slackEscape(app.roleSlug)}\` · Locale: \`${app.locale}\``,
    }],
  })

  const payload = { text: `New application — ${app.role}`, blocks }

  try {
    if (webhook) {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      return res.ok
    }
    const client = new WebClient(token)
    const result = await client.chat.postMessage({
      channel: channel as string,
      text: payload.text,
      blocks,
    })
    if (!result.ok) {
      console.error('[careers] slack returned not-ok:', result.error)
      return false
    }
    console.log('[careers] slack posted to', channel)

    if (app.cv) {
      try {
        await client.filesUploadV2({
          channel_id: channel as string,
          thread_ts: result.ts as string,
          file: app.cv.bytes,
          filename: app.cv.name,
          initial_comment: `CV — ${app.name}`,
        })
      } catch (err) {
        // Needs files:write on the app. Surfaced, never fatal.
        const why = (err as { data?: { error?: string } })?.data?.error ?? String(err)
        console.error('[careers] cv upload failed:', why)
      }
    }
    return true
  } catch (err) {
    // The Slack SDK throws on API errors; err.data.error carries the real reason
    // (not_in_channel, channel_not_found, invalid_auth, missing_scope…).
    const reason =
      (err as { data?: { error?: string } })?.data?.error ??
      (err as Error)?.message ??
      String(err)
    console.error('[careers] slack post failed:', reason, {
      tokenSource: hiringToken ? 'SLACK_HIRING_BOT_TOKEN' : 'SLACK_BOT_TOKEN',
      tokenPrefix: token?.slice(0, 5),
      channel: JSON.stringify(channel),
    })
    return false
  }
}

async function sendEmail(app: Application): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CAREERS_FROM_EMAIL
  const to = (process.env.CAREERS_NOTIFY_EMAILS || '')
    .split(',').map((x) => x.trim()).filter(Boolean)
  if (!apiKey || !from || to.length === 0) return false

  const row = (label: string, value: string) =>
    value ? `<tr><td style="padding:6px 14px 6px 0;color:#64748b">${label}</td><td style="padding:6px 0"><strong>${htmlEscape(value)}</strong></td></tr>` : ''

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:640px">
      <h2 style="margin:0 0 4px">New application</h2>
      <p style="margin:0 0 20px;color:#475569">${htmlEscape(app.role)}</p>
      <table style="border-collapse:collapse;font-size:14px">
        ${row('Name', app.name)}${row('Email', app.email)}${row('Phone', app.phone)}
        ${row('Location', app.location)}${row('LinkedIn', app.linkedin)}${row('CV', app.cvLink)}
        ${row('Source', app.source.channel)}${row('First visit', app.source.firstChannel ?? '')}
        ${row('They said', app.source.heard)}${row('Source detail', sourceDetail(app.source))}
      </table>
      ${app.message ? `<h3 style="margin:24px 0 6px;font-size:14px">Message</h3><p style="white-space:pre-wrap;font-size:14px;line-height:1.6">${htmlEscape(app.message)}</p>` : ''}
    </div>`

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to,
        // So hitting reply in the inbox answers the candidate.
        reply_to: app.email || undefined,
        subject: `Application: ${app.role} — ${app.name}`,
        html,
      }),
    })
    if (!res.ok) console.error('[careers] resend failed:', res.status, await res.text().catch(() => ''))
    return res.ok
  } catch (err) {
    console.error('[careers] resend threw:', err)
    return false
  }
}

export async function POST(request: Request) {
  // The form posts multipart so the CV can ride along; JSON is still accepted
  // so the endpoint stays curl-testable.
  let body: Record<string, unknown>
  let cv: Application['cv']

  const contentType = request.headers.get('content-type') || ''
  if (contentType.includes('multipart/form-data')) {
    const form = await request.formData()
    body = Object.fromEntries(
      [...form.entries()].filter(([, v]) => typeof v === 'string')
    ) as Record<string, unknown>

    const file = form.get('cv')
    if (file instanceof File && file.size > 0) {
      if (file.size > MAX_CV_BYTES) {
        return Response.json({ error: 'cv_too_large' }, { status: 413 })
      }
      if (!ALLOWED_CV.test(file.name)) {
        return Response.json({ error: 'cv_type_not_allowed' }, { status: 415 })
      }
      cv = { name: file.name, bytes: Buffer.from(await file.arrayBuffer()) }
    }
  } else {
    try {
      body = await request.json()
    } catch {
      return Response.json({ error: 'invalid_json' }, { status: 400 })
    }
  }

  // Honeypot: a real person never fills a field they cannot see.
  if (clean(body.company_website, MAX.short)) {
    return Response.json({ ok: true })
  }

  const app: Application = {
    name: clean(body.name, MAX.short),
    email: clean(body.email, MAX.short),
    phone: clean(body.phone, MAX.short),
    linkedin: clean(body.linkedin, MAX.short),
    location: clean(body.location, MAX.short),
    cvLink: clean(body.cv_link, MAX.short),
    message: clean(body.message, MAX.long),
    role: clean(body.role, MAX.short) || 'General application',
    roleSlug: clean(body.role_slug, MAX.short) || 'general',
    locale: clean(body.locale, 8) || 'en',
    cv,
    // Screening answers arrive as q_<id>; the page sends a readable label for
    // each so Slack shows the question rather than a bare id.
    answers: Object.keys(body)
      .filter((k) => k.startsWith('q_'))
      .map((k) => ({
        question: clean(body[`label_${k.slice(2)}`], MAX.short) || k.slice(2),
        answer: clean(body[k], 12),
      }))
      .filter((a) => a.answer),
    source: parseSource(body),
  }

  if (!app.name || !app.email || !app.email.includes('@')) {
    return Response.json({ error: 'missing_fields' }, { status: 400 })
  }

  // One structured line per application, so submissions can be counted by
  // source from the Vercel logs even if a Slack message is deleted.
  // No name, email or phone here: logs are not the place for candidate PII.
  console.log('[careers] application', JSON.stringify({
    role: app.roleSlug,
    locale: app.locale,
    channel: app.source.channel,
    first_channel: app.source.firstChannel ?? app.source.channel,
    heard: app.source.heard || null,
    utm_source: app.source.last?.utm_source ?? null,
    utm_medium: app.source.last?.utm_medium ?? null,
    utm_campaign: app.source.last?.utm_campaign ?? null,
    utm_content: app.source.last?.utm_content ?? null,
    referrer: app.source.last?.referrer ?? null,
    click_id: app.source.last?.click_id ?? null,
  }))

  const [slackOk, emailOk] = await Promise.all([postToSlack(app), sendEmail(app)])

  if (!slackOk && !emailOk) {
    console.error('[careers] no delivery channel succeeded for', app.email)
    return Response.json({ error: 'delivery_failed' }, { status: 502 })
  }

  return Response.json({ ok: true, slack: slackOk, email: emailOk })
}
