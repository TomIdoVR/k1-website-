/* ── Simulator Types (v2 — Lifecycle Walkthrough) ── */

export type ModuleKey = 'video' | 'dispatch' | 'events' | 'gis' | 'integrations' | 'responder' | 'citizen' | 'ai' | 'bi'

export type LifecycleStage = 'detect' | 'understand' | 'decide' | 'act' | 'learn'

export type LifecycleScreenId =
  | '01-detect'
  | '02a-understand-video'
  | '02b-understand-gis'
  | '03a-decide-events'
  | '03b-decide-protocol'
  | '04a-act-dispatch'
  | '04b-act-responder'
  | '05-learn-bi'

export type Screen = 'entry' | 'lifecycle' | 'summary'

export type PlaybackStatus = 'idle' | 'playing' | 'paused' | 'completed'

export interface I18nString {
  en: string
  es: string
}

export interface SideNavItem {
  icon: string
  label: I18nString
  active: boolean
}

export interface LifecycleScreenDef {
  id: LifecycleScreenId
  stage: LifecycleStage
  stageNumber: string
  stageLabel: I18nString
  title: I18nString
  subtitle: I18nString
  modules: ModuleKey[]
  durationSec: number
  sideNav: SideNavItem[]
}

export interface ModuleContribution {
  moduleId: ModuleKey
  label: I18nString
  description: I18nString
}

export interface ScenarioSummary {
  totalResponseTime: string
  unitsDeployed: number
  slaCompliance: string
  aiRecommendations: I18nString[]
  moduleContributions: ModuleContribution[]
}

export interface Scenario {
  id: string
  name: I18nString
  description: I18nString
  icon: string
  duration: I18nString
  available: boolean
  screens: LifecycleScreenDef[]
  summary: ScenarioSummary
}

export interface LifecycleState {
  status: PlaybackStatus
  currentScreenIndex: number
  autoAdvance: boolean
  autoAdvanceTimer: number
}

export interface SimulatorState {
  screen: Screen
  selectedScenario: string | null
  lifecycle: LifecycleState
}

export type SimulatorAction =
  | { type: 'SELECT_SCENARIO'; scenarioId: string }
  | { type: 'START_LIFECYCLE' }
  | { type: 'NEXT_SCREEN'; scenario: Scenario }
  | { type: 'PREV_SCREEN' }
  | { type: 'GO_TO_SCREEN'; index: number }
  | { type: 'TOGGLE_AUTO_ADVANCE' }
  | { type: 'PAUSE' }
  | { type: 'RESUME' }
  | { type: 'AUTO_ADVANCE_TICK'; deltaMs: number; scenario: Scenario }
  | { type: 'GO_TO_SUMMARY' }
  | { type: 'GO_TO_ENTRY' }
