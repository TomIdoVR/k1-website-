# SEO Slack Agent — Design Spec
**Date:** 2026-05-12
**Status:** Approved for implementation

---

## Overview

An interactive Slack bot (`@SEO`) that gives Omer and the KabatOne team a daily audit-fix loop for the website. It lives in the existing Next.js repo, deployed on Vercel, and is reachable via @mention in any Slack channel.

**Daily workflow:**
1. @SEO audit the homepage meta tags
2. Bot replies with findings + proposed fix
3. Small fix → auto-committed to staging in ~10s
4. Big fix → preview shown in Slack, fires CCR agent on approval
5. Repeat until done

---

## Architecture

Three layers:

```
Slack @mention
      ↓
[ Webhook Layer ]   src/app/api/slack/events/route.ts
  Verify HMAC signature → ACK 200 → background processing
      ↓
[ Intelligence Layer ]   Claude API (claude-sonnet-4-6)
  Context assembly → Intent classification → Response/fix generation
      ↓
[ Execution Layer ]
  Question       → Slack thread reply
  Small fix      → GitHub API file patch → staging deploy notification
  Big change     → Slack interactive preview → CCR trigger on ✅
```

---

## Context Assembly

On every @mention, the agent receives:

| Source | Data |
|---|---|
| `SEO/kabatone-seo-master-plan.md` | Full strategy, pending pages, completed work |
| GSC API (live) | Last 7 days: top queries, pages, CTR, avg position |
| GitHub API | Last 20 commits — what changed recently |
| Slack thread history | Prior messages in the same thread (conversational memory) |

All injected as the system prompt. Stateless per request, context-rich.

---

## Intent Classification

Claude classifies every incoming message into one of three intents:

**`question`** — No code change needed. Reply in thread.
- Examples: "what's our best performing page?", "which keywords should we target for Mexico City?"

**`small_fix`** — Single-file change, safe to auto-commit to staging.
- Meta title / description edits
- Copy tweaks on existing pages
- Internal link additions
- Schema markup fixes
- `<head>` tag changes

**`big_change`** — Multi-file or structural. Show preview first, fire CCR on ✅.
- New pages (touches page.tsx + metadata.ts + sitemap + schema.ts)
- New sections on existing pages
- Navigation/structure changes
- Anything touching 3+ files

---

## Execution Paths

### Question path
Claude generates a grounded answer using the assembled context. Posted as a thread reply in Slack. Response time: ~3–5s.

### Small fix path
1. Claude identifies the file + exact change
2. `github.ts` fetches current file via GitHub Contents API
3. Claude generates the patched content
4. GitHub API commits the change to the `nextjs` branch
5. Vercel auto-deploys to staging
6. Bot posts: `✅ Fixed — [staging.kabatone.com/en/...](url) — commit abc123`

Response time: ~10–15s.

### Big change path
1. Claude generates a full description of the change + files affected
2. Bot posts an interactive Slack message:
   ```
   🔨 New page: /en/resources/cad-software-cdmx/
   Files: page.tsx, metadata.ts, sitemap, schema.ts
   Preview: [summary of content]
   ✅ Build it   ❌ Cancel
   ```
3. On ✅: fires a dedicated CCR build agent (new routine, separate from the weekly SEO report) with the full spec as the prompt
4. CCR commits + posts completion link back to Slack thread

Response time: ~2–5 min for CCR execution.

---

## File Structure

```
src/
  app/
    api/
      slack/
        events/
          route.ts          — webhook handler (signature verify, ACK, dispatch)
        interactive/
          route.ts          — handles ✅/❌ button clicks
  lib/
    seo-agent/
      context.ts            — assembles GSC + master plan + git context
      intent.ts             — Claude API call to classify + plan the response
      github.ts             — GitHub Contents API file patcher
      ccr.ts                — fires CCR remote agent for big changes
      slack.ts              — Slack Web API helpers (reply, interactive blocks)
scripts/
  seo_weekly.py             — existing GSC data fetcher (context.ts spawns it via child_process)
```

---

## Environment Variables

| Variable | Source | Purpose |
|---|---|---|
| `SLACK_BOT_TOKEN` | Slack app settings | Post messages, read thread history |
| `SLACK_SIGNING_SECRET` | Slack app settings | Verify webhook authenticity |
| `ANTHROPIC_API_KEY` | Anthropic console | Claude API calls |
| `GITHUB_TOKEN` | GitHub PAT (fine-grained, contents:write on k1-website) | Read + patch files |
| `GSC_CLIENT_ID` | Already exists | GSC OAuth |
| `GSC_CLIENT_SECRET` | Already exists | GSC OAuth |
| `GSC_REFRESH_TOKEN` | Already exists | GSC OAuth |

---

## Slack App Configuration

At api.slack.com:
- **Bot Token Scopes:** `app_mentions:read`, `chat:write`, `channels:history`, `groups:history`
- **Event Subscriptions:** `app_mention`
- **Interactive Components:** enabled (for ✅/❌ buttons)
- **Request URL:** `https://staging.kabatone.com/api/slack/events`

---

## Constraints & Edge Cases

- **Slack 3s timeout:** Webhook must ACK within 3s. All processing is async (use `waitUntil` or background fetch).
- **Duplicate events:** Slack may retry. Deduplicate by `event_id`.
- **Only staging commits:** The bot never touches `main`. All changes go to `nextjs` branch → staging.kabatone.com.
- **Rate limits:** GSC API has a quota. Cache the last fetch per 1h to avoid exhausting it on busy days.
- **Thread replies only:** Bot always replies in-thread, never in the main channel.

---

## What It Will NOT Do (v1 scope)

- No analytics dashboard or charts
- No scheduled audits (that's the weekly CCR routine)
- No multi-language content generation (EN only in v1, ES manually reviewed)
- No direct `main` branch pushes
