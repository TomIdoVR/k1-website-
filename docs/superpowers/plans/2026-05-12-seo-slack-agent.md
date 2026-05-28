# SEO Slack Agent Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an interactive Slack bot (`@SEO`) that answers SEO questions, auto-commits small fixes (meta tags, copy), and handles big changes (new pages) via a ✅ approval flow — all powered by Claude API with live GSC context.

**Architecture:** Next.js App Router API routes handle Slack webhooks. Claude API classifies intent and generates fixes. Small fixes go directly through the GitHub Contents API. Big changes use GitHub's Git Data API for atomic multi-file commits after Slack ✅ approval.

**Tech Stack:** Next.js 16 App Router, `@anthropic-ai/sdk`, `@slack/web-api`, GitHub REST API (fetch, no SDK), TypeScript strict.

---

## File Map

```
src/
  app/
    api/
      slack/
        events/route.ts       — POST webhook: verify sig, ACK, dispatch via after()
        interactive/route.ts  — POST webhook: handle ✅/❌ button clicks
  lib/
    seo-agent/
      slack-verify.ts         — HMAC-SHA256 signature verification
      slack.ts                — Slack Web API helpers (reply, interactive blocks)
      context.ts              — Assemble GSC + master plan + GitHub commits
      intent.ts               — Claude API: classify + generate response/fix
      github.ts               — GitHub API: single-file patch + multi-file tree commit
      types.ts                — Shared types (IntentResult, AgentContext, etc.)
```

---

## Task 1: Install dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install packages**

```bash
cd "k1 Website"
npm install @anthropic-ai/sdk @slack/web-api
```

- [ ] **Step 2: Verify install**

```bash
node -e "require('@anthropic-ai/sdk'); require('@slack/web-api'); console.log('OK')"
```

Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "Chore: add anthropic and slack-web-api dependencies"
```

---

## Task 2: Shared types

**Files:**
- Create: `src/lib/seo-agent/types.ts`

- [ ] **Step 1: Create types file**

```typescript
// src/lib/seo-agent/types.ts

export type IntentType = 'question' | 'small_fix' | 'big_change'

export interface AgentContext {
  masterPlan: string
  gscData: string
  recentCommits: string
}

export interface SmallFix {
  file: string           // repo-relative path, e.g. "src/content/en/metadata.ts"
  description: string    // human-readable, shown in Slack
  newContent: string     // full new file content (not a diff)
  commitMessage: string  // e.g. "SEO: update homepage meta description"
}

export interface BigChange {
  summary: string        // Slack preview message (markdown)
  files: Array<{
    path: string         // repo-relative path
    content: string      // full file content
  }>
  commitMessage: string  // single commit message for all files
}

export interface IntentResult {
  type: IntentType
  reply: string          // Slack reply (markdown, always present)
  smallFix?: SmallFix    // present when type === 'small_fix'
  bigChange?: BigChange  // present when type === 'big_change'
}
```

- [ ] **Step 2: Verify TypeScript is happy**

```bash
npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors related to `src/lib/seo-agent/types.ts`

- [ ] **Step 3: Commit**

```bash
git add src/lib/seo-agent/types.ts
git commit -m "Feat: add SEO agent shared types"
```

---

## Task 3: Slack signature verification

**Files:**
- Create: `src/lib/seo-agent/slack-verify.ts`

This module verifies that incoming webhooks actually come from Slack (HMAC-SHA256). Must also reject replayed requests older than 5 minutes.

- [ ] **Step 1: Create the module**

```typescript
// src/lib/seo-agent/slack-verify.ts
import { createHmac, timingSafeEqual } from 'crypto'

export function verifySlackSignature(
  signingSecret: string,
  signature: string,   // from X-Slack-Signature header
  timestamp: string,   // from X-Slack-Request-Timestamp header
  rawBody: string      // raw request body string
): boolean {
  // Reject if timestamp is older than 5 minutes (replay attack prevention)
  const now = Math.floor(Date.now() / 1000)
  if (Math.abs(now - parseInt(timestamp, 10)) > 300) return false

  const sigBase = `v0:${timestamp}:${rawBody}`
  const hmac = createHmac('sha256', signingSecret)
  hmac.update(sigBase)
  const expected = `v0=${hmac.digest('hex')}`

  try {
    return timingSafeEqual(Buffer.from(expected), Buffer.from(signature))
  } catch {
    return false
  }
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/seo-agent/slack-verify.ts
git commit -m "Feat: add Slack HMAC signature verification"
```

---

## Task 4: Slack Web API helper

**Files:**
- Create: `src/lib/seo-agent/slack.ts`

- [ ] **Step 1: Create the module**

```typescript
// src/lib/seo-agent/slack.ts
import { WebClient, type Block, type KnownBlock } from '@slack/web-api'

function getClient(): WebClient {
  return new WebClient(process.env.SLACK_BOT_TOKEN)
}

/** Reply in a thread. Always use thread_ts so we stay in-thread. */
export async function replyInThread(
  channel: string,
  threadTs: string,
  text: string
): Promise<void> {
  await getClient().chat.postMessage({ channel, thread_ts: threadTs, text })
}

/** Post an interactive approval message with ✅/❌ buttons. */
export async function postApprovalMessage(
  channel: string,
  threadTs: string,
  summary: string,
  /** Unique ID stored in button values — used to retrieve the pending change on click */
  actionId: string
): Promise<void> {
  const blocks: (Block | KnownBlock)[] = [
    {
      type: 'section',
      text: { type: 'mrkdwn', text: summary },
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: { type: 'plain_text', text: '✅ Build it', emoji: true },
          style: 'primary',
          action_id: 'approve_big_change',
          value: actionId,
        },
        {
          type: 'button',
          text: { type: 'plain_text', text: '❌ Cancel', emoji: true },
          style: 'danger',
          action_id: 'cancel_big_change',
          value: actionId,
        },
      ],
    },
  ]

  await getClient().chat.postMessage({
    channel,
    thread_ts: threadTs,
    text: summary,
    blocks,
  })
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/seo-agent/slack.ts
git commit -m "Feat: add Slack Web API reply and interactive message helpers"
```

---

## Task 5: Context assembler

**Files:**
- Create: `src/lib/seo-agent/context.ts`

Assembles three data sources: SEO master plan (local file), live GSC data (Python script), recent commits (GitHub API).

- [ ] **Step 1: Create the module**

```typescript
// src/lib/seo-agent/context.ts
import { execSync } from 'child_process'
import { readFileSync } from 'fs'
import { join } from 'path'
import type { AgentContext } from './types'

interface GithubCommit {
  sha: string
  commit: { message: string }
}

export async function assembleContext(): Promise<AgentContext> {
  // 1. SEO master plan (always available — it's in the repo)
  const masterPlan = readFileSync(
    join(process.cwd(), 'SEO/kabatone-seo-master-plan.md'),
    'utf-8'
  )

  // 2. Live GSC data via the existing Python script
  let gscData = 'GSC data unavailable this run.'
  try {
    gscData = execSync(
      [
        `GSC_CLIENT_ID=${process.env.GSC_CLIENT_ID}`,
        `GSC_CLIENT_SECRET=${process.env.GSC_CLIENT_SECRET}`,
        `GSC_REFRESH_TOKEN=${process.env.GSC_REFRESH_TOKEN}`,
        'python3 scripts/seo_weekly.py',
      ].join(' '),
      { encoding: 'utf-8', timeout: 30_000 }
    )
  } catch (err) {
    gscData = `GSC fetch error: ${String(err)}`
  }

  // 3. Recent commits from GitHub API
  let recentCommits = 'Commit history unavailable.'
  try {
    const res = await fetch(
      'https://api.github.com/repos/TomIdoVR/k1-website-/commits?sha=nextjs&per_page=20',
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github+json',
        },
      }
    )
    const commits = (await res.json()) as GithubCommit[]
    recentCommits = commits
      .map((c) => `${c.sha.slice(0, 7)} ${c.commit.message.split('\n')[0]}`)
      .join('\n')
  } catch (err) {
    recentCommits = `GitHub error: ${String(err)}`
  }

  return { masterPlan, gscData, recentCommits }
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/seo-agent/context.ts
git commit -m "Feat: add SEO agent context assembler (GSC + master plan + commits)"
```

---

## Task 6: Intent classifier

**Files:**
- Create: `src/lib/seo-agent/intent.ts`

Calls Claude API with the full assembled context. Returns a structured `IntentResult` with type, reply, and optional fix/bigChange details.

- [ ] **Step 1: Create the module**

```typescript
// src/lib/seo-agent/intent.ts
import Anthropic from '@anthropic-ai/sdk'
import type { AgentContext, IntentResult } from './types'

const SYSTEM_PROMPT = (ctx: AgentContext) => `You are the KabatOne SEO agent embedded in Slack. \
You have full context about kabatone.com — a B2B public safety software site targeting LATAM municipalities, \
primary focus Mexico. Products: K-Safety, K-911/K-Dispatch (CAD), K-Traffic.

## SEO Master Plan
${ctx.masterPlan}

## Live GSC Data (last 7 days)
${ctx.gscData}

## Recent Commits (nextjs branch)
${ctx.recentCommits}

## Response Rules
Always respond with valid JSON matching this exact shape:

For a question:
{"type":"question","reply":"markdown answer"}

For a single-file fix (meta tags, copy, schema, internal links — ONE file only):
{"type":"small_fix","reply":"brief confirmation","smallFix":{"file":"src/content/en/metadata.ts","description":"Updated homepage meta description","newContent":"<full new file content>","commitMessage":"SEO: update homepage meta description"}}

For multi-file changes (new pages, new sections, structural changes):
{"type":"big_change","reply":"brief preview","bigChange":{"summary":"🔨 *New page: /en/resources/example/*\\nFiles: page.tsx, metadata.ts (EN+ES)\\nKeyword: example keyword","files":[{"path":"src/app/[locale]/resources/example/page.tsx","content":"<full file content>"},{"path":"src/content/en/metadata.ts","content":"<full updated file content>"},{"path":"src/content/es/metadata.ts","content":"<full updated file content>"}],"commitMessage":"Feat: add /resources/example/ page"}}

Rules:
- newContent and content fields must be the COMPLETE file, not a diff or snippet
- Never touch the main branch — only nextjs branch
- For metadata.ts files: include ALL existing entries plus the new one
- Staging URL after deploy: staging.kabatone.com`

export async function classifyIntent(
  userMessage: string,
  context: AgentContext,
  threadHistory: string
): Promise<IntentResult> {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 8192,
    system: SYSTEM_PROMPT(context),
    messages: [
      {
        role: 'user',
        content: threadHistory
          ? `Previous thread:\n${threadHistory}\n\nLatest message: ${userMessage}`
          : userMessage,
      },
    ],
  })

  const text =
    response.content[0].type === 'text' ? response.content[0].text : ''

  // Extract JSON — Claude sometimes wraps it in ```json``` fences
  const jsonMatch = text.match(/```json\s*([\s\S]*?)```/) ||
    text.match(/(\{[\s\S]*\})/)
  if (!jsonMatch) throw new Error(`Intent classifier returned non-JSON: ${text.slice(0, 200)}`)

  const raw = jsonMatch[1] ?? jsonMatch[0]
  return JSON.parse(raw) as IntentResult
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/seo-agent/intent.ts
git commit -m "Feat: add SEO agent intent classifier (Claude API)"
```

---

## Task 7: GitHub file patcher

**Files:**
- Create: `src/lib/seo-agent/github.ts`

Two functions: `patchFile` for single-file fast path, `commitFiles` for atomic multi-file commits using the Git Data API.

- [ ] **Step 1: Create the module**

```typescript
// src/lib/seo-agent/github.ts

const REPO = 'TomIdoVR/k1-website-'
const BRANCH = 'nextjs'
const BASE = `https://api.github.com/repos/${REPO}`

function headers() {
  return {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
  }
}

interface FileEntry {
  path: string
  content: string // full file content (not base64)
}

/** Single-file fast path. Returns the commit SHA. */
export async function patchFile(
  filePath: string,
  newContent: string,
  commitMessage: string
): Promise<string> {
  // Get current SHA if file exists (required for updates, omit for new files)
  let sha: string | undefined
  const getRes = await fetch(`${BASE}/contents/${filePath}?ref=${BRANCH}`, {
    headers: headers(),
  })
  if (getRes.ok) {
    const current = (await getRes.json()) as { sha: string }
    sha = current.sha
  }

  const body: Record<string, unknown> = {
    message: commitMessage,
    content: Buffer.from(newContent).toString('base64'),
    branch: BRANCH,
  }
  if (sha) body.sha = sha

  const putRes = await fetch(`${BASE}/contents/${filePath}`, {
    method: 'PUT',
    headers: headers(),
    body: JSON.stringify(body),
  })

  if (!putRes.ok) {
    const err = await putRes.text()
    throw new Error(`GitHub patchFile failed for ${filePath}: ${err}`)
  }

  const result = (await putRes.json()) as { commit: { sha: string } }
  return result.commit.sha
}

/** Multi-file atomic commit using Git Data API. Returns the commit SHA. */
export async function commitFiles(
  files: FileEntry[],
  commitMessage: string
): Promise<string> {
  // 1. Get latest commit SHA on branch
  const refRes = await fetch(`${BASE}/git/refs/heads/${BRANCH}`, {
    headers: headers(),
  })
  if (!refRes.ok) throw new Error(`Failed to get branch ref: ${await refRes.text()}`)
  const ref = (await refRes.json()) as { object: { sha: string } }
  const latestCommitSha = ref.object.sha

  // 2. Get base tree SHA from latest commit
  const commitRes = await fetch(`${BASE}/git/commits/${latestCommitSha}`, {
    headers: headers(),
  })
  if (!commitRes.ok) throw new Error(`Failed to get commit: ${await commitRes.text()}`)
  const commit = (await commitRes.json()) as { tree: { sha: string } }
  const baseTreeSha = commit.tree.sha

  // 3. Create new tree with all changed files
  const treeRes = await fetch(`${BASE}/git/trees`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      base_tree: baseTreeSha,
      tree: files.map((f) => ({
        path: f.path,
        mode: '100644',
        type: 'blob',
        content: f.content,
      })),
    }),
  })
  if (!treeRes.ok) throw new Error(`Failed to create tree: ${await treeRes.text()}`)
  const tree = (await treeRes.json()) as { sha: string }

  // 4. Create new commit
  const newCommitRes = await fetch(`${BASE}/git/commits`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      message: commitMessage,
      tree: tree.sha,
      parents: [latestCommitSha],
    }),
  })
  if (!newCommitRes.ok) throw new Error(`Failed to create commit: ${await newCommitRes.text()}`)
  const newCommit = (await newCommitRes.json()) as { sha: string }

  // 5. Update branch ref
  const updateRes = await fetch(`${BASE}/git/refs/heads/${BRANCH}`, {
    method: 'PATCH',
    headers: headers(),
    body: JSON.stringify({ sha: newCommit.sha }),
  })
  if (!updateRes.ok) throw new Error(`Failed to update ref: ${await updateRes.text()}`)

  return newCommit.sha
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/seo-agent/github.ts
git commit -m "Feat: add GitHub API file patcher and multi-file tree commit"
```

---

## Task 8: Pending change store

**Files:**
- Create: `src/lib/seo-agent/pending-store.ts`

When the bot posts a big-change approval message, it needs to remember the change details until the user clicks ✅. This module uses an in-memory Map (sufficient for low-traffic internal tool; resets on cold start).

- [ ] **Step 1: Create the module**

```typescript
// src/lib/seo-agent/pending-store.ts
import type { BigChange } from './types'

// In-memory store keyed by actionId.
// Sufficient for an internal low-traffic bot. Resets on Vercel cold start.
const store = new Map<string, BigChange & { channel: string; threadTs: string }>()

export function savePending(
  actionId: string,
  change: BigChange,
  channel: string,
  threadTs: string
): void {
  store.set(actionId, { ...change, channel, threadTs })
}

export function getPending(
  actionId: string
): (BigChange & { channel: string; threadTs: string }) | undefined {
  return store.get(actionId)
}

export function deletePending(actionId: string): void {
  store.delete(actionId)
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/seo-agent/pending-store.ts
git commit -m "Feat: add in-memory pending change store for big-change approval flow"
```

---

## Task 9: Main events webhook

**Files:**
- Create: `src/app/api/slack/events/route.ts`

Handles all incoming Slack events. ACKs within 3s using `after()`, then processes in the background.

- [ ] **Step 1: Create the route**

```typescript
// src/app/api/slack/events/route.ts
import { after } from 'next/server'
import { verifySlackSignature } from '@/lib/seo-agent/slack-verify'
import { assembleContext } from '@/lib/seo-agent/context'
import { classifyIntent } from '@/lib/seo-agent/intent'
import { patchFile } from '@/lib/seo-agent/github'
import { replyInThread, postApprovalMessage } from '@/lib/seo-agent/slack'
import { savePending } from '@/lib/seo-agent/pending-store'
import { randomUUID } from 'crypto'

// Deduplicate Slack retries
const seenEvents = new Set<string>()

export async function POST(req: Request): Promise<Response> {
  const rawBody = await req.text()
  const signature = req.headers.get('x-slack-signature') ?? ''
  const timestamp = req.headers.get('x-slack-request-timestamp') ?? ''

  // Verify signature
  if (
    !verifySlackSignature(
      process.env.SLACK_SIGNING_SECRET!,
      signature,
      timestamp,
      rawBody
    )
  ) {
    return new Response('Unauthorized', { status: 401 })
  }

  const body = JSON.parse(rawBody) as SlackEventPayload

  // Handle Slack URL verification challenge (one-time during app setup)
  if (body.type === 'url_verification') {
    return Response.json({ challenge: body.challenge })
  }

  // Deduplicate
  const eventId = body.event_id ?? body.event?.event_ts ?? ''
  if (seenEvents.has(eventId)) {
    return new Response('OK', { status: 200 })
  }
  seenEvents.add(eventId)
  if (seenEvents.size > 1000) {
    const first = seenEvents.values().next().value
    if (first) seenEvents.delete(first)
  }

  // ACK immediately — Slack requires a response within 3s
  after(async () => {
    await handleEvent(body)
  })

  return new Response('OK', { status: 200 })
}

async function handleEvent(body: SlackEventPayload): Promise<void> {
  const event = body.event
  if (!event || event.type !== 'app_mention') return

  const channel = event.channel
  const threadTs = event.thread_ts ?? event.ts
  const userText = event.text.replace(/<@[A-Z0-9]+>/g, '').trim() // strip @mention

  try {
    const context = await assembleContext()

    // Fetch thread history so the bot remembers prior messages in the same thread
    let threadHistory = ''
    if (event.thread_ts) {
      try {
        const { WebClient } = await import('@slack/web-api')
        const slack = new WebClient(process.env.SLACK_BOT_TOKEN)
        const replies = await slack.conversations.replies({
          channel,
          ts: event.thread_ts,
          limit: 10,
        })
        threadHistory = (replies.messages ?? [])
          .slice(0, -1) // exclude the current message
          .map((m) => m.text ?? '')
          .filter(Boolean)
          .join('\n')
      } catch {
        // non-fatal — proceed without history
      }
    }

    const result = await classifyIntent(userText, context, threadHistory)

    if (result.type === 'question') {
      await replyInThread(channel, threadTs, result.reply)
      return
    }

    if (result.type === 'small_fix' && result.smallFix) {
      const { file, newContent, commitMessage, description } = result.smallFix
      const sha = await patchFile(file, newContent, commitMessage)
      await replyInThread(
        channel,
        threadTs,
        `✅ *Fixed* — ${description}\nCommit \`${sha.slice(0, 7)}\` deployed to staging.kabatone.com`
      )
      return
    }

    if (result.type === 'big_change' && result.bigChange) {
      const actionId = randomUUID()
      savePending(actionId, result.bigChange, channel, threadTs)
      await postApprovalMessage(channel, threadTs, result.bigChange.summary, actionId)
      return
    }
  } catch (err) {
    console.error('SEO agent error:', err)
    await replyInThread(
      channel,
      threadTs,
      `⚠️ Something went wrong: ${String(err)}`
    ).catch(() => {})
  }
}

// Minimal Slack event types
interface SlackEventPayload {
  type: string
  challenge?: string
  event_id?: string
  event?: {
    type: string
    text: string
    channel: string
    ts: string
    thread_ts?: string
    event_ts: string
  }
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/api/slack/events/route.ts
git commit -m "Feat: add Slack events webhook (ACK + background processing)"
```

---

## Task 10: Interactive webhook (✅/❌ buttons)

**Files:**
- Create: `src/app/api/slack/interactive/route.ts`

Handles button clicks from the big-change approval messages.

- [ ] **Step 1: Create the route**

```typescript
// src/app/api/slack/interactive/route.ts
import { after } from 'next/server'
import { verifySlackSignature } from '@/lib/seo-agent/slack-verify'
import { commitFiles } from '@/lib/seo-agent/github'
import { replyInThread } from '@/lib/seo-agent/slack'
import { getPending, deletePending } from '@/lib/seo-agent/pending-store'

export async function POST(req: Request): Promise<Response> {
  const rawBody = await req.text()
  const signature = req.headers.get('x-slack-signature') ?? ''
  const timestamp = req.headers.get('x-slack-request-timestamp') ?? ''

  if (
    !verifySlackSignature(
      process.env.SLACK_SIGNING_SECRET!,
      signature,
      timestamp,
      rawBody
    )
  ) {
    return new Response('Unauthorized', { status: 401 })
  }

  // Slack sends interactive payloads as URL-encoded form data
  const params = new URLSearchParams(rawBody)
  const payloadStr = params.get('payload')
  if (!payloadStr) return new Response('Bad Request', { status: 400 })

  const payload = JSON.parse(payloadStr) as SlackInteractivePayload
  const action = payload.actions?.[0]
  if (!action) return new Response('OK', { status: 200 })

  const actionId = action.value
  const isApprove = action.action_id === 'approve_big_change'

  // ACK immediately
  after(async () => {
    const channel = payload.channel?.id
    const threadTs = payload.message?.thread_ts ?? payload.message?.ts
    if (!channel || !threadTs) return

    const pending = getPending(actionId)
    deletePending(actionId)

    if (!isApprove) {
      await replyInThread(channel, threadTs, '❌ Cancelled.')
      return
    }

    if (!pending) {
      await replyInThread(channel, threadTs, '⚠️ Change expired (bot restarted). Re-request it.')
      return
    }

    try {
      await replyInThread(channel, threadTs, '⏳ Building… committing files to staging.')
      const sha = await commitFiles(pending.files, pending.commitMessage)
      await replyInThread(
        channel,
        threadTs,
        `✅ *Done* — ${pending.commitMessage}\nCommit \`${sha.slice(0, 7)}\` → staging.kabatone.com`
      )
    } catch (err) {
      await replyInThread(channel, threadTs, `⚠️ Build failed: ${String(err)}`)
    }
  })

  return new Response('OK', { status: 200 })
}

interface SlackInteractivePayload {
  actions?: Array<{ action_id: string; value: string }>
  channel?: { id: string }
  message?: { ts: string; thread_ts?: string }
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/api/slack/interactive/route.ts
git commit -m "Feat: add Slack interactive webhook for big-change approval"
```

---

## Task 11: Environment variables

**Files:**
- Modify: `.env.local` (local dev only, gitignored)
- Add to Vercel project settings

- [ ] **Step 1: Create local .env.local**

```bash
cat >> .env.local << 'EOF'
SLACK_BOT_TOKEN=xoxb-YOUR-BOT-TOKEN
SLACK_SIGNING_SECRET=YOUR-SIGNING-SECRET
ANTHROPIC_API_KEY=sk-ant-YOUR-KEY
GITHUB_TOKEN=github_pat_YOUR-TOKEN
GSC_CLIENT_ID=YOUR_GSC_CLIENT_ID
GSC_CLIENT_SECRET=YOUR_GSC_CLIENT_SECRET
GSC_REFRESH_TOKEN=YOUR_GSC_REFRESH_TOKEN
EOF
```

Fill in `SLACK_BOT_TOKEN`, `SLACK_SIGNING_SECRET`, `ANTHROPIC_API_KEY`, and `GITHUB_TOKEN` with real values (see Task 12 for how to get them).

- [ ] **Step 2: Add all 7 env vars to Vercel**

```bash
# Run for each variable — Vercel CLI prompts for the value
npx vercel env add SLACK_BOT_TOKEN production preview
npx vercel env add SLACK_SIGNING_SECRET production preview
npx vercel env add ANTHROPIC_API_KEY production preview
npx vercel env add GITHUB_TOKEN production preview
npx vercel env add GSC_CLIENT_ID production preview
npx vercel env add GSC_CLIENT_SECRET production preview
npx vercel env add GSC_REFRESH_TOKEN production preview
```

- [ ] **Step 3: Verify .env.local is gitignored**

```bash
grep ".env.local" .gitignore
```

Expected: `.env.local` appears in the output.

---

## Task 12: Slack app creation

Do this at [api.slack.com/apps](https://api.slack.com/apps). Takes ~10 minutes.

- [ ] **Step 1: Create the app**

1. Click **Create New App** → **From scratch**
2. Name: `SEO Agent` | Workspace: KabatOne
3. Click **Create App**

- [ ] **Step 2: Add bot token scopes**

Go to **OAuth & Permissions** → **Bot Token Scopes** → Add:
- `app_mentions:read`
- `chat:write`
- `channels:history`
- `groups:history`

- [ ] **Step 3: Enable Events API**

Go to **Event Subscriptions** → toggle **Enable Events** ON.

Request URL: `https://staging.kabatone.com/api/slack/events`

**Important:** This URL must be live before Slack can verify it. Deploy first (Task 13), then come back here.

Subscribe to bot event: `app_mention`

- [ ] **Step 4: Enable Interactive Components**

Go to **Interactivity & Shortcuts** → toggle ON.

Request URL: `https://staging.kabatone.com/api/slack/interactive`

- [ ] **Step 5: Install app to workspace**

Go to **OAuth & Permissions** → **Install to Workspace** → Allow.

Copy the **Bot User OAuth Token** (`xoxb-...`) → set as `SLACK_BOT_TOKEN`.

Go to **Basic Information** → **Signing Secret** → copy → set as `SLACK_SIGNING_SECRET`.

- [ ] **Step 6: Create a GitHub fine-grained PAT**

Go to [github.com/settings/tokens](https://github.com/settings/tokens) → **Fine-grained tokens** → **Generate new token**.

- Repository: `TomIdoVR/k1-website-`
- Permissions: **Contents** → Read and write

Copy token → set as `GITHUB_TOKEN`.

---

## Task 13: Deploy and test

- [ ] **Step 1: Push to staging**

```bash
git push
```

Vercel auto-deploys `nextjs` branch to `staging.kabatone.com`. Watch the deployment at the Vercel dashboard.

- [ ] **Step 2: Verify the routes exist**

```bash
curl -s -o /dev/null -w "%{http_code}" https://staging.kabatone.com/api/slack/events -X POST -d '{"type":"url_verification","challenge":"test123"}' -H "Content-Type: application/json"
```

Expected: `200` (even without a valid signature, the challenge response shape is correct — Slack will verify after you add the signing secret to Vercel env).

- [ ] **Step 3: Complete Slack app setup**

Go back to the Slack app's **Event Subscriptions** page. Slack will now be able to verify the URL. Save the event subscription.

Do the same for **Interactivity & Shortcuts**.

- [ ] **Step 4: Invite the bot to #marketing**

In Slack: `/invite @SEO Agent` in `#marketing`.

- [ ] **Step 5: Test — question**

Type in #marketing:
```
@SEO Agent what are our top 3 performing pages right now?
```

Expected: A thread reply with data from GSC within ~5s.

- [ ] **Step 6: Test — small fix**

Type in #marketing:
```
@SEO Agent update the meta description for the homepage to be more compelling for Mexican municipalities
```

Expected: Thread reply `✅ Fixed — ... deployed to staging.kabatone.com`

Verify at: `https://staging.kabatone.com/en` → View Source → check `<meta name="description">`.

- [ ] **Step 7: Test — big change**

Type in #marketing:
```
@SEO Agent create a new resources page targeting "software CAD despacho CDMX"
```

Expected: Interactive message with ✅/❌ buttons and a summary of the proposed page.

Click ✅. Expected: `✅ Done — Feat: add /resources/... → staging.kabatone.com`

---

## Task 14: Final commit and changelog

- [ ] **Step 1: Update CHANGELOG.md**

Add a new entry at the top (after the `---` line):

```markdown
## [2.53] 2026-05-12 — Feat: SEO Slack agent (@SEO bot)

**Added**
- `/api/slack/events` webhook — receives @SEO mentions, processes intent via Claude API
- `/api/slack/interactive` webhook — handles ✅/❌ approval buttons for big changes
- `src/lib/seo-agent/` — intent classifier, context assembler, GitHub patcher, Slack helpers, pending store
- Small fixes (meta tags, copy) auto-commit to staging via GitHub Contents API
- Big changes (new pages) use GitHub Git Data API for atomic multi-file commits after Slack approval
```

- [ ] **Step 2: Update changelog.html**

Add a matching `<div class="tl-entry feat">` block at the top of `<div class="timeline">` in `changelog.html`.

- [ ] **Step 3: Final commit**

```bash
git add CHANGELOG.md changelog.html
git commit -m "Feat: SEO Slack agent - @SEO bot with intent classification and auto-fix (v2.53)"
git push
```
