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

  const jsonMatch = text.match(/```json\s*([\s\S]*?)```/) ||
    text.match(/(\{[\s\S]*\})/)
  if (!jsonMatch) throw new Error(`Intent classifier returned non-JSON: ${text.slice(0, 200)}`)

  const raw = jsonMatch[1] ?? jsonMatch[0]
  return JSON.parse(raw) as IntentResult
}
