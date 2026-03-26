/* ── Simulator Types ── */

export type ModuleKey = 'video' | 'dispatch' | 'events' | 'gis' | 'integrations' | 'responder' | 'citizen' | 'ai' | 'bi'

export type PanelId = 'vms' | 'gis' | 'cad' | 'radio'

export type Screen = 'entry' | 'playback' | 'scorecard' | 'deep-dive'

export type PlaybackStatus = 'idle' | 'playing' | 'paused' | 'completed'

export type SpeedMultiplier = 1 | 2

export interface I18nString {
  en: string
  es: string
}

export interface FailureEvent {
  type: 'typo' | 'missed_alert' | 'no_channel'
  message: I18nString
  timePenalty: number // seconds added to fragmented display clock
}

export interface ScenarioStep {
  id: number
  name: I18nString
  fragmentedDuration: number // seconds at 1x
  unifiedDuration: number    // seconds at 1x
  modules: ModuleKey[]
  fragmented: {
    description: I18nString
    activePanel: PanelId
    failure?: FailureEvent
  }
  unified: {
    description: I18nString
    dataFlows: Array<{ from: ModuleKey; to: ModuleKey }>
  }
}

export interface TimeLostCategory {
  category: I18nString
  percentage: number
}

export interface ModuleContribution {
  moduleId: ModuleKey
  timeSaved: I18nString
  description: I18nString
  stepsInvolved: number[]
}

export interface Scenario {
  id: string
  name: I18nString
  description: I18nString
  icon: string
  duration: I18nString
  available: boolean
  steps: ScenarioStep[]
  totalFragmentedTime: number  // display seconds (including penalties)
  totalUnifiedTime: number     // display seconds
  timeLostBreakdown: TimeLostCategory[]
  moduleContributions: ModuleContribution[]
}

export interface PlaybackState {
  status: PlaybackStatus
  currentStep: number          // 0-indexed
  speed: SpeedMultiplier
  fragmentedElapsed: number    // ms elapsed on fragmented side
  unifiedElapsed: number       // ms elapsed on unified side
  errorCount: number
  missedCount: number
  activeModules: ModuleKey[]   // currently glowing on unified side
  stepPhase: 'running' | 'transitioning'
}

export interface SimulatorState {
  screen: Screen
  selectedScenario: string | null
  playback: PlaybackState
}

export type SimulatorAction =
  | { type: 'SELECT_SCENARIO'; scenarioId: string }
  | { type: 'START_PLAYBACK' }
  | { type: 'PAUSE' }
  | { type: 'RESUME' }
  | { type: 'REWIND' }
  | { type: 'SET_SPEED'; speed: SpeedMultiplier }
  | { type: 'TICK'; deltaMs: number; scenario: Scenario }
  | { type: 'ADVANCE_STEP'; scenario: Scenario }
  | { type: 'COMPLETE_PLAYBACK' }
  | { type: 'GO_TO_SCORECARD' }
  | { type: 'GO_TO_DEEP_DIVE' }
  | { type: 'GO_TO_ENTRY' }
