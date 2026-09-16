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
 * Environment (set in Vercel):
 *   SLACK_CAREERS_WEBHOOK_URL  Slack incoming webhook, bound to one channel.
 *   SLACK_BOT_TOKEN            Alternative to the webhook, with
 *   SLACK_CAREERS_CHANNEL      the channel id or #name to post into.
 *   RESEND_API_KEY             Email sender.
 *   CAREERS_FROM_EMAIL         Verified From address, e.g. careers@kabatone.com
 *   CAREERS_NOTIFY_EMAILS      Comma-separated recipients.
 */

export const runtime = 'nodejs'

const MAX = { short: 200, long: 5000 }

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
  const webhook = process.env.SLACK_CAREERS_WEBHOOK_URL
  const token = process.env.SLACK_BOT_TOKEN
  const channel = process.env.SLACK_CAREERS_CHANNEL
  if (!webhook && !(token && channel)) return false

  const line = (label: string, value: string) =>
    value ? `*${label}:* ${slackEscape(value)}` : ''

  const fields = [
    line('Name', app.name),
    line('Email', app.email),
    line('Phone', app.phone),
    line('Location', app.location),
    line('LinkedIn', app.linkedin),
    line('CV', app.cvLink),
  ].filter(Boolean).join('\n')

  const blocks = [
    {
      type: 'header',
      text: { type: 'plain_text', text: `New application — ${app.role}`.slice(0, 150) },
    },
    { type: 'section', text: { type: 'mrkdwn', text: fields || '_no details_' } },
    ...(app.message
      ? [{
          type: 'section',
          text: { type: 'mrkdwn', text: `*Message:*\n${slackEscape(app.message).slice(0, 2800)}` },
        }]
      : []),
    {
      type: 'context',
      elements: [{ type: 'mrkdwn', text: `Role: \`${slackEscape(app.roleSlug)}\` · Locale: \`${app.locale}\`` }],
    },
  ]

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
    const res = await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ channel, ...payload }),
    })
    // Slack returns HTTP 200 with ok:false on API errors.
    const body = await res.json().catch(() => ({ ok: false }))
    if (!body.ok) console.error('[careers] slack chat.postMessage failed:', body.error)
    return Boolean(body.ok)
  } catch (err) {
    console.error('[careers] slack post threw:', err)
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
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'invalid_json' }, { status: 400 })
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
  }

  if (!app.name || !app.email || !app.email.includes('@')) {
    return Response.json({ error: 'missing_fields' }, { status: 400 })
  }

  const [slackOk, emailOk] = await Promise.all([postToSlack(app), sendEmail(app)])

  if (!slackOk && !emailOk) {
    console.error('[careers] no delivery channel succeeded for', app.email)
    return Response.json({ error: 'delivery_failed' }, { status: 502 })
  }

  return Response.json({ ok: true, slack: slackOk, email: emailOk })
}
