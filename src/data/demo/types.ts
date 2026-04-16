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

// n8n-style flow describing the detection logic for a Stage 01 (DETECT) panel.
// When present on a detect-stage, the cinematic panel splits 50/50 and renders
// the flow on the right half.
export type DetectFlowNodeType = 'sensor' | 'ai' | 'rule' | 'event' | 'retro'

export interface DetectFlowNode {
  id: string
  title: string          // e.g. "HOTLIST MATCH"
  subtitle: string       // e.g. "Regional Stolen DB · 4.2M rec"
  icon: string           // Material Symbols Outlined name
  type: DetectFlowNodeType
}

export interface DetectFlow {
  nodes: DetectFlowNode[]             // linear top-to-bottom chain
  branch?: {                           // optional "no-match" branch off a rule-type node
    fromNodeId: string                 // id of the source node to branch from
    node: DetectFlowNode               // dimmed retrospective node
  }
  terminalLabel?: string               // text on the final arrow (default: "→ STAGE 02")
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
  // Optional n8n-style flowchart rendered on the right half of the detect panel
  // (splits the cinematic panel 50/50 — left keeps bg + overlay, right shows flow)
  detectFlow?: DetectFlow
  // Optional inline admin panel rendered instead of a background image
  detectCard?: {
    type: 'call-intake' | 'panic-alert' | 'access-breach'
    fields: Array<{ key: string; value: string; highlight?: boolean }>
    transcript?: string[]
    alertTimeline?: Array<{ time: string; event: string; done: boolean }>
    cameraImage?: string   // CCTV feed image for panic-alert type
    cameraLabel?: string   // e.g. "CAM-07 · BUILDING A HALLWAY"
  }
  // Optional decide map (unit positions + cameras on protocol-layout decide stage)
  decideMap?: {
    incidentCoords: [number, number]
    units: Array<{ id: string; status: string; active: boolean; coords: [number, number]; route?: [number, number][] }>
    cameras?: Array<{ label: string; image?: string; alert?: boolean }>
  }
  // Optional decide panel (unit assignment + AI scoring + map)
  decideCard?: {
    incidentCoords: [number, number]
    units: Array<{ id: string; role: string; status: string; distance: string; eta: string; active: boolean; coords: [number, number] }>
    aiScore: number
    briefItems: string[]
    dispatchedTo: string
  }
  // Optional mini map for understand stages showing incident/vehicle location
  understandMap?: {
    incidentCoords: [number, number]
    label?: string
    unitCoords?: [number, number]
    unitLabel?: string
    route?: [number, number][]   // pre-computed street waypoints [lat, lng]
  }
  // Optional geo-analysis panel (replaces background image for understand-type stages)
  geoPanel?: {
    caller: { coords: [number, number]; label: string }
    aeds: Array<{ coords: [number, number]; label: string }>
    cameras: Array<{ coords: [number, number]; label: string; image?: string; alert?: boolean }>
    tags: string[]
    analysisRows: Array<{ key: string; value: string; color?: string }>
    // Optional 911 call transcript lines shown in the sidebar
    transcript?: Array<{ speaker: 'CALLER' | 'DISPATCH'; text: string }>
    // Optional SOS / panic event card shown at the incident coords
    sosEvent?: { coords: [number, number]; label: string; sublabel?: string }
    // When set, shows a building blueprint panel to the right of the street map
    blueprintPanel?: 'school' | 'office'
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
  splitUnits?: Array<{
    id: string
    role: string
    status: string
    active: boolean
    // Rich-card metadata (optional; enables detailed unit card rendering)
    type?: 'police' | 'security' | 'k9' | 'ems' | 'fire'
    typeLabel?: string      // e.g. "Police Car", "Security Officer", "Ambulance"
    officer?: string        // e.g. "T. Reyes" or "M. Chen & Rex"
    badge?: string          // e.g. "Badge #4471", "Engine 4"
    eta?: string            // e.g. "1:24"
    etaLabel?: string       // e.g. "ETA to Event" or "ETA if dispatched"
    etaSub?: string         // e.g. "arriving soon", "on foot · 3 floors"
    distance?: string       // e.g. "0.3 mi", "150 ft"
    distanceSub?: string    // e.g. "from target"
    channel?: string        // e.g. "CH-1"
    equipment?: string      // e.g. "Body Cam", "Cruiser"
    equipmentIcon?: string  // material symbol, e.g. "videocam", "directions_car"
  }>
  splitMapCoords?: {
    incident: [number, number]
    unit: [number, number]
    route?: [number, number][]   // pre-computed street waypoints [lat, lng]
    // Optional: multiple units on the map (richer than single unit/route)
    units?: Array<{
      id: string
      coords: [number, number]
      type?: 'police' | 'security' | 'k9' | 'ems' | 'fire'
      status?: string               // 'ASSIGNED' | 'EN ROUTE' | 'STANDBY' | 'AVAILABLE'
      route?: [number, number][]    // optional street waypoints to incident
    }>
    // Optional floating camera preview rendered on top of the map
    camera?: {
      image: string                 // /public/ path to camera still
      label: string                 // e.g. "CAM-118 · INTERCHANGE"
      sublabel?: string             // e.g. "I-10 @ Montrose · LPR hit · 98.4%"
      alertText?: string            // footer strip text, e.g. "LPR HIT · STOLEN VEHICLE CONFIRMED"
      // Position on map (percentages of map container); default is upper-left quadrant
      pos?: { left?: string; top?: string; right?: string; bottom?: string }
    }
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
