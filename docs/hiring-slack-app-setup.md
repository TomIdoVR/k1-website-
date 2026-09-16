# Hiring Slack app — setup

The careers form posts applications into Slack through its own app, not the SEO
Agent's. Two reasons: re-scoping or rotating the SEO token must never silently
stop applications arriving, and candidate data should not flow through an app
provisioned for something else.

Unlike the SEO Agent, this app only posts outbound. It needs no Events API, no
Interactivity, and no request URLs — so there is nothing to keep deployed for it
to work.

## 1. Create the app

At [api.slack.com/apps](https://api.slack.com/apps):

1. **Create New App** → **From scratch**
2. Name: `KabatOne Hiring` | Workspace: KabatOne
3. **Create App**

## 2. Add the one scope it needs

**OAuth & Permissions** → **Bot Token Scopes** → Add:

- `chat:write`

That is the whole list. Do not add read scopes — this app never reads Slack.

## 3. Install and copy the token

**OAuth & Permissions** → **Install to Workspace** → Allow.

Copy the **Bot User OAuth Token** (`xoxb-…`).

## 4. Put the token in Vercel

Add it yourself rather than pasting it into a chat or a file — a bot token that
reaches a transcript has to be rotated.

```bash
vercel env add SLACK_HIRING_BOT_TOKEN production
vercel env add SLACK_HIRING_BOT_TOKEN preview nextjs
```

Or Vercel dashboard → Project → Settings → Environment Variables. Set it for
**Production** and **Preview**, since staging runs on a preview deployment.

## 5. Invite the app to the channel

`#hiring` is private, so the app must be a member — a bot cannot post into a
private channel it has not joined, and Slack reports that as `channel_not_found`
rather than a permission error.

In `#hiring`:

```
/invite @KabatOne Hiring
```

## 6. Redeploy

Environment variables are bound at build time, so the route only sees the new
token after a fresh deployment. Any push to `nextjs` does it.

## Verifying

```bash
curl -X POST https://staging.kabatone.com/api/careers/apply \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test","email":"you@kabatone.com","cv_link":"https://example.com/cv.pdf","role":"Test","role_slug":"test","locale":"en"}'
```

- `{"ok":true,"slack":true,...}` — posted; check `#hiring`.
- `{"error":"delivery_failed"}` — read the reason in the runtime logs, which
  name the actual Slack error:

```bash
vercel logs --follow   # or the Vercel dashboard → Logs
```

| Slack error | Meaning |
|---|---|
| `channel_not_found` | App is not in the channel, or the id is wrong |
| `not_in_channel` | App knows the channel but has not joined it |
| `invalid_auth` | Token wrong, revoked, or not yet redeployed |
| `missing_scope` | `chat:write` was not granted |

## Channel

`#hiring` — `C0C2F01B2MA`, already set as `SLACK_CAREERS_CHANNEL` in Production
and Preview. To move applications to a different channel, change that variable
and redeploy; no code change.
