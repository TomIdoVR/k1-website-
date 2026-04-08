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
  backgroundFit?: 'cover' | 'contain'
  // Optional bounding-box overlay shown on the detect stage cinematic panel
  detectOverlay?: {
    label: string        // e.g. "Stolen Vehicle Alert"
    tagKey: string       // e.g. "License Plate"
    tagValue: string     // e.g. "7JKY442"
  }
  // Optional inline admin panel rendered instead of a background image
  detectCard?: {
    type: 'call-intake' | 'panic-alert'
    fields: Array<{ key: string; value: string; highlight?: boolean }>
    transcript?: string[]
    alertTimeline?: Array<{ time: string; event: string; done: boolean }>
  }
  // Optional decide panel (unit assignment + AI scoring + map)
  decideCard?: {
    incidentCoords: [number, number]
    units: Array<{ id: string; role: string; status: string; distance: string; eta: string; active: boolean; coords: [number, number] }>
    aiScore: number
    briefItems: string[]
    dispatchedTo: string
  }
  // Optional geo-analysis panel (replaces background image for understand-type stages)
  geoPanel?: {
    caller: { coords: [number, number]; label: string }
    aeds: Array<{ coords: [number, number]; label: string }>
    cameras: Array<{ coords: [number, number]; label: string }>
    tags: string[]
    analysisRows: Array<{ key: string; value: string; color?: string }>
  }
  pipImage?: string
  pipLabel?: string
  pip2Image?: string
  pip2Label?: string
  layout: StageLayout
  protocolSteps?: ProtocolStep[]
  // SplitLayout (act stage) overrides
  splitCameraImage?: string
  splitCameraLabel?: string
  splitIncidentBadge?: string
  splitIncidentDot?: string
  splitUnitDot?: string
  splitPhoneRows?: DataPoint[]
  splitUnits?: Array<{ id: string; role: string; status: string; active: boolean }>
  splitMapCoords?: {
    incident: [number, number]
    unit: [number, number]
  }
}

export interface ScenarioConfig {
  id: string
  incidentId: string
  incidentType: string
  badgeText: string
  caseNumber: string
  stages: Stage[]
}
