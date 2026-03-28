export type StageId = 'detect' | 'understand' | 'decide' | 'act' | 'learn'

export type StageLayout = 'default' | 'protocol' | 'split' | 'learn'

export interface DataPoint {
  key: string
  value: string
}

export interface ProtocolStep {
  id: number
  text: string
  status: 'complete' | 'active' | 'pending'
}

export interface Stage {
  id: StageId
  number: string          // "01", "02", ...
  label: string           // "DETECT", "UNDERSTAND", ...
  stageLabel: string      // "STAGE 01: DETECT — INITIAL MATCH"
  timestamp: string       // "12:04:01"
  headline: string
  description: string
  dataPoints: DataPoint[]
  modules: string[]
  nextStageTeaser: string
  backgroundImage?: string
  pipImage?: string
  pipLabel?: string
  layout: StageLayout
  protocolSteps?: ProtocolStep[]
}

export interface ScenarioConfig {
  id: string
  incidentId: string
  incidentType: string
  badgeText: string
  caseNumber: string
  stages: Stage[]
}
