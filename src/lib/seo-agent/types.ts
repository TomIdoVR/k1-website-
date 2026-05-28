export type IntentType = 'question' | 'small_fix' | 'big_change'

export interface AgentContext {
  masterPlan: string
  gscData: string
  recentCommits: string
}

export interface SmallFix {
  file: string
  description: string
  newContent: string
  commitMessage: string
}

export interface BigChange {
  summary: string
  files: Array<{
    path: string
    content: string
  }>
  commitMessage: string
}

export interface IntentResult {
  type: IntentType
  reply: string
  smallFix?: SmallFix
  bigChange?: BigChange
}
