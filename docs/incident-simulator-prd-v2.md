# KabatOne Incident Simulator — PRD v3.0

## Passive-First: "Watch the Proof"

---

## 1. Executive Summary

### 1.1 Purpose

Build an auto-playing web-based simulation that:

1. **Proves the thesis visually** — The system runs the same incident under two architectures simultaneously (fragmented vs. unified), and the viewer sees the outcome difference in real time
2. **Teaches the platform passively** — As each of KabatOne's 9 modules activates during the scenario, it lights up with a brief tooltip — no manual exploration required
3. **Offers optional depth** — Engaged viewers can pause, rewind, tap a module, or explore details — but it is never required

This is not a game. It is not a demo. It is a **decision-making instrument** that requires exactly one user action: pick a scenario and click Run.

### 1.2 One-Line Pitch

**Same operator. Same incident. Completely different outcome.**

### 1.3 The Experience

| Layer | Experience | Duration | Goal |
|-------|-----------|----------|------|
| **The Showdown** | Side-by-side auto-playing comparison — Fragmented (left) vs. Unified (right) | 2–3 min | Visual proof. The hook. |
| **Module Highlights** | Modules glow and show tooltips passively during playback | Built into the showdown | Platform education. Woven in. |
| **Optional Depth** | Pause, rewind, tap a module for details, explore module cards | User-driven | Deeper understanding for engaged viewers. |

The Showdown proves. The modules educate passively. The scorecard closes.

### 1.4 Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Demo-to-meeting conversion | 25%+ of completions → booked demo | CRM tracking via embedded form |
| Watch-through rate | 80%+ of users who click Run watch to the scorecard | Funnel analytics |
| Average engagement time | 2–3 min (auto-play), 5–8 min (with optional exploration) | Analytics event tracking |
| Module engagement | 40%+ of viewers tap at least one module tooltip during or after playback | Click tracking |
| Sales team adoption | Used in 80%+ of prospect meetings within 60 days | Sales team survey |
| Social shareability | 10%+ of completers share results | Share button click tracking |

---

## 2. The 9 Modules

Every action in the simulator maps to a specific KabatOne module. During playback, the viewer sees *which module* is responsible for *which capability* through glowing badges and auto-appearing tooltips.

| # | Module | Name | Color | Role in Incident Response |
|---|--------|------|-------|--------------------------|
| 1 | **Video** | Surveillance & Analytics | `#06b6d4` | Live camera feeds, AI object detection, facial recognition, behavioral anomaly alerts |
| 2 | **Dispatch** | 911 & Dispatch | `#ef4444` | NG911 call taking, intelligent unit routing, CAD integration, real-time unit status |
| 3 | **Events** | Event Management | `#f97316` | Incident lifecycle tracking, audit trails, SLA monitoring, multi-agency coordination |
| 4 | **GIS** | Situational Awareness | `#3b82f6` | Real-time operational map, live unit GPS tracking, geofence alerts, threat zone overlays |
| 5 | **Integrations** | Open API Platform | `#22c55e` | REST/WebSocket APIs, CAD/RMS connectors, IoT sensor ingestion, smart city mesh |
| 6 | **Responder** | Field Operations | `#eab308` | iOS/Android field apps, offline capability, push-to-talk radio, digital incident forms |
| 7 | **Citizen** | Community Safety | `#60a5fa` | One-tap SOS button, push safety alerts, anonymous reporting, real-time public updates |
| 8 | **AI Engine** | Predictive Intelligence | `#06b6d4` | Predictive threat scoring, anomaly detection, NLP call analysis, auto decision support |
| 9 | **BI** | Business Intelligence | `#a855f7` | Real-time KPI dashboards, response time trends, resource utilization, executive reporting |

---

## 3. User Experience Flow

```
┌─────────────────────────────────────────────────────────┐
│                    ENTRY / LANDING                       │
│    Choose a scenario card · Choose language (EN/ES)      │
│    Click "RUN SCENARIO"                                  │
└──────────────────────┬──────────────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────────────┐
│          SPLIT-VIEW PLAYBACK (core experience)           │
│                                                          │
│  ┌─────────────┐          ┌─────────────┐               │
│  │ FRAGMENTED  │          │   UNIFIED   │               │
│  │   (left)    │          │   (right)   │               │
│  │ struggling  │    vs    │   flowing   │               │
│  │ ⏱ 01:42    │          │  ⏱ 00:38   │               │
│  └─────────────┘          └─────────────┘               │
│                                                          │
│  Both run simultaneously · Auto-advancing steps          │
│  3–5 sec per step · Module badges glow on right          │
│  Playback controls: ⏸ Pause  ⏪ Rewind  2x Speed       │
└──────────────────────┬──────────────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────────────┐
│                  SCORECARD / RESULTS                     │
│   Side-by-side comparison · Root cause breakdown         │
│   Module contribution map · KPI deltas                   │
│   "Same incident. The architecture made the difference." │
└──────────────────────┬──────────────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────────────┐
│          OPTIONAL: MODULE DEEP DIVE                      │
│   Grid of 9 module cards · tap any for details           │
│   See each module's role in this scenario                │
│   "What would happen without this module?"               │
└──────────────────────┬──────────────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────────────┐
│                    CTA / EXIT                            │
│   Book Architecture Review · Download Results PDF        │
│   Share results · Try another scenario                   │
└─────────────────────────────────────────────────────────┘
```

**Key design decision:** Fragmented and unified run **simultaneously on one screen**, not sequentially. There is no transition animation between modes — both are always visible. The contrast is immediate and visceral.

---

## 4. Scenario Design

### 4.1 Scenario A (Launch): Crowd Disturbance Escalation

A real-time incident that evolves quickly: a disturbance near a public event escalates from detection to multi-unit response.

**Why this scenario:** It requires all 9 modules to resolve properly. It's realistic, non-political, and resonates with both LATAM and US audiences.

#### Step-by-Step with Module Mapping

| Step | What Happens | Fragmented Side (what viewer sees) | Unified Side (what viewer sees) | Timing (F / U) | Module(s) |
|------|-------------|-----------------------------------|--------------------------------|-----------------|-----------|
| 1. Detection | AI detects crowd anomaly on camera | VMS panel blinks with alert among many feeds; operator avatar scans multiple screens, hesitates | AI Engine auto-surfaces alert with threat score; Video panel auto-focuses on relevant camera | 5s / 2s | **AI Engine** + **Video** |
| 2. Verification | Operator confirms the incident is real | Operator switches to VMS (1.2s delay animation), searches camera grid, zooms in manually | One-click confirm — video already showing, AI bounding boxes highlight subjects | 4s / 1.5s | **Video** |
| 3. Location | Plot incident on map | Operator switches to GIS (1.2s delay), manually types address — cursor animation | GIS auto-plots incident from camera GPS coordinates, shows nearby units and cameras | 6s / 1s | **GIS** |
| 4. Context | Check nearby units and resources | Operator switches to CAD (1.2s delay), looks up available units, cross-references with GIS manually | Map already shows 3 nearest available units ranked by distance, status visible | 5s / 1s | **GIS** + **Dispatch** |
| 5. Create record | Open incident in CAD system | Operator types incident details into CAD — fields populate slowly, manual data entry | Event auto-created with all fields pre-populated from detection data | 6s / 1s | **Events** + **Dispatch** |
| 6. Dispatch | Assign and dispatch unit | Operator selects unit, confirms dispatch, initiates radio contact on separate panel | Pre-ranked unit selected (brief decision pause), dispatch confirmed, responder app notified | 5s / 2s | **Dispatch** + **Responder** |
| 7. Escalation | Second camera detects related activity | ⚠ **FAILURE**: Alert flashes in VMS corner while operator is in CAD — missed. Red counter: +25s | AI auto-correlates, links to existing incident, GIS updates with expanded threat zone | 8s / 2s | **AI Engine** + **Video** + **GIS** |
| 8. Citizen input | Nearby citizen sends SOS | ⚠ **FAILURE**: "No citizen channel" ghost overlay. Information never arrives. | SOS appears on map, attached to incident, additional context for responders | 3s / 2s | **Citizen** |
| 9. Field response | Unit arrives, needs details | Operator scrambles to radio briefing — context is scattered across 4 systems | Full incident brief on mobile app: video, map, event history, related alerts | 5s / 1.5s | **Responder** |
| 10. Resolution | Incident resolved, audit trail | Manual close in CAD, no unified timeline, operator begins export from 4 separate systems | One-click resolution, automatic audit trail, BI dashboard updates in real time | 5s / 1.5s | **Events** + **BI** |
| — | Data flow | Each system is an island — no shared data layer | All data flows through Integrations layer (persistent subtle glow) | — | **Integrations** (always active) |

**Total estimated playback time:** Fragmented ~52s, Unified ~15.5s (displayed as accelerated clocks with ~2:34 and ~0:52 in-scenario time)

#### Failure & Risk Moments (Fragmented Side — Animated)

These are NOT exaggerated. They are realistic consequences of fragmented architecture, shown as visual events:

1. **Step 7 — Missed escalation:** The second camera alert flashes briefly in the VMS corner while the operator avatar is in the CAD panel. A red pulse and counter appears: *"Alert missed — operator was in a different system. +25 sec."* The viewer watches the operator eventually switch back, find the alert, and re-correlate.

2. **Step 5 — Data re-entry error:** As the operator types the address, a subtle typo appears (transposed digits). A yellow flash shows: *"Typo in address — unit dispatched to incorrect sector. Correcting..."* The clock adds 30 seconds while the correction plays out.

3. **Step 8 — Citizen input lost:** On the fragmented side, a ghost overlay fades in and out: *"A citizen tried to report. No intake channel available."* On the unified side, the SOS pings on the map simultaneously — the contrast is immediate.

### 4.2 Scenario B (Phase 2): Multi-Vehicle Traffic Accident

Focuses on multi-agency coordination: police + ambulance + fire. Highlights K-Traffic, Integrations, and cross-agency Dispatch.

### 4.3 Scenario C (Phase 2): Stadium Event — 40,000 Attendees

Focuses on pre-event planning, crowd analytics, and real-time response at scale. Highlights AI Engine, Video at scale, BI dashboards.

---

## 5. Detailed Screen Layouts

### 5.1 Entry Screen

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│              ● KabatOne                              │
│                                                      │
│         THE INCIDENT SIMULATOR                       │
│                                                      │
│    Same operator. Same incident.                     │
│    Completely different outcome.                     │
│                                                      │
│    CHOOSE A SCENARIO:                                │
│                                                      │
│    ┌──────────────┐  ┌──────────────┐                │
│    │   [icon]      │  │   [icon]      │                │
│    │   Crowd       │  │   Active      │                │
│    │   Disturbance │  │   Shooter     │                │
│    │              │  │   Coming Soon │                │
│    └──────────────┘  └──────────────┘                │
│    ┌──────────────┐                                  │
│    │   [icon]      │                                  │
│    │   Natural     │                                  │
│    │   Disaster    │                                  │
│    │   Coming Soon │                                  │
│    └──────────────┘                                  │
│                                                      │
│    ┌──────────────────────────────────┐              │
│    │  ▶  RUN SCENARIO                │              │
│    └──────────────────────────────────┘              │
│                                                      │
│    Language: EN / ES      ~2 min · Just watch        │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### 5.2 Split-View Playback (Core Screen)

```
┌──────────────────────────────────────────────────────────┐
│  INCIDENT SIMULATOR    Step 4/10    ⏸ ⏪ ⏩   1x ▼     │
│  Scenario: Crowd Disturbance                              │
├────────────────────────────┬─────────────────────────────┤
│  FRAGMENTED                │  UNIFIED — KabatOne          │
│  ── Legacy Systems ──      │  ── Command Center ──        │
│                            │                              │
│  ┌────────┐ ┌────────┐    │  ┌──────────────────────┐   │
│  │  VMS   │ │  GIS   │    │  │                      │   │
│  │ [cam   │ │ [map   │    │  │    GIS MAP (center)  │   │
│  │  grid] │ │  empty]│    │  │  🔴 Incident         │   │
│  │        │ │ ⚡typ- │    │  │  🔵 Unit-14  2.1km  │   │
│  │        │ │  ing.. │    │  │  🔵 Unit-07  3.4km  │   │
│  ├────────┤ ├────────┤    │  │  📹 Cam coverage     │   │
│  │  CAD   │ │ RADIO  │    │  └──────────────────────┘   │
│  │ [wait- │ │ CH1: ● │    │                              │
│  │  ing]  │ │ CH2: ○ │    │  [Video✦][Dispatch✦][GIS✦]  │
│  │        │ │ CH3: ○ │    │  [AI✦][Events][Resp][Cit]   │
│  └────────┘ └────────┘    │  ✦ = currently active        │
│                            │                              │
│  ⏱ 01:42                  │  ⏱ 00:38                    │
│  Errors: 2 │ Missed: 1    │  Errors: 0 │ Missed: 0      │
├────────────────────────────┴─────────────────────────────┤
│  STEP 4: Location — Plot incident on map                  │
│  Left: operator manually enters address (12 sec delay)    │
│  Right: GIS auto-plots from camera GPS (2 sec)           │
│  Active modules: [GIS 🔵] [Dispatch 🔴]                 │
└──────────────────────────────────────────────────────────┘
```

**Key UX details:**
- **Top bar:** Step counter, playback controls (pause/play, rewind, forward, speed 1x/2x)
- **Left half (Fragmented):** Simplified 4-panel representation. The "active" panel is highlighted; others are dimmed. Delay animations show panel-switching lag. Errors flash red. Missed alerts ghost in and out.
- **Right half (Unified):** Simplified command center. Module badges glow when their module activates. Data flow lines animate between panels. Decision points show a brief 1-second pause (operator confirms/selects).
- **Bottom bar:** Current step description comparing both sides. Active module badges with colors.
- **Dual clocks:** Each side has an independent running clock. Fragmented clock accelerates; unified clock stays efficient.
- **KPI counters:** Error count and missed alerts, updating live on each side.
- **Module tooltips:** When a module activates on the unified side, a tooltip auto-appears for 2 seconds showing what it did, then fades. Viewers can tap any badge for more detail.

### 5.3 Scorecard / Results

```
┌──────────────────────────────────────────────────────┐
│                   THE EVIDENCE                        │
│  ─────────────────────────────────────────────────── │
│                                                      │
│  ┌─────────────┐     ┌─────────────┐                │
│  │ FRAGMENTED  │     │  UNIFIED    │                │
│  │  2:34       │     │  0:52       │                │
│  │  total      │     │  total      │                │
│  │  response   │     │  response   │                │
│  └─────────────┘     └─────────────┘                │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │ WHERE TIME WAS LOST (Fragmented)             │   │
│  │ ████████████████░░░░  42% System switching   │   │
│  │ ████████████░░░░░░░░  31% Manual data entry  │   │
│  │ ████████░░░░░░░░░░░░  19% Correlation effort │   │
│  │ ███░░░░░░░░░░░░░░░░░   8% Confirmation delay│   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │ MODULE CONTRIBUTION                          │   │
│  │ AI Engine ──── Saved 38 sec (auto-detection) │   │
│  │ GIS ───────── Saved 25 sec (auto-locate)     │   │
│  │ Dispatch ──── Saved 18 sec (pre-ranked units)│   │
│  │ Events ────── Saved 12 sec (auto-record)     │   │
│  │ Citizen ───── Added context (SOS report)     │   │
│  │ Responder ─── Eliminated radio briefing      │   │
│  │ BI ────────── Real-time KPI (no manual audit)│   │
│  │ Integrations  Data layer (zero re-entry)     │   │
│  │ Video ─────── AI + auto-focus (no search)    │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │ FRAGMENTED        │  UNIFIED                 │   │
│  │ 10 manual steps   │  3 decisions             │   │
│  │ 4 screens         │  1 canvas                │   │
│  │ 3 data re-entries │  0 re-entries            │   │
│  │ 1 missed alert    │  0 missed alerts         │   │
│  │ 1 dispatch error  │  0 errors                │   │
│  │ No citizen input  │  SOS received            │   │
│  │ Manual audit      │  Automatic audit trail   │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  Same incident. Same operator.                       │
│  The architecture made the difference.               │
│                                                      │
│  [EXPLORE MODULES]  [BOOK ARCHITECTURE REVIEW]       │
│  [DOWNLOAD PDF]     [SHARE RESULTS]                  │
│  [TRY ANOTHER SCENARIO]                              │
└──────────────────────────────────────────────────────┘
```

### 5.4 Module Deep Dive (Optional)

```
┌──────────────────────────────────────────────────────┐
│  HOW EACH MODULE CONTRIBUTED                         │
├──────────────────────────────────────────────────────┤
│                                                      │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐     │
│  │Video │ │Disp  │ │Events│ │ GIS  │ │Integ │     │
│  │-38s  │ │-18s  │ │-12s  │ │-25s  │ │always│     │
│  │St1,2 │ │St4-6 │ │St5,10│ │St3,4 │ │active│     │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘     │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐               │
│  │Resp  │ │Citiz │ │  AI  │ │  BI  │               │
│  │St 9  │ │St 8  │ │-38s  │ │St 10 │               │
│  │      │ │(new) │ │St1,7 │ │      │               │
│  └──────┘ └──────┘ └──────┘ └──────┘               │
│                                                      │
│  [Tap any module to learn more]                      │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │ AI ENGINE — Predictive Intelligence          │   │
│  │                                              │   │
│  │ ● Detected crowd anomaly at Step 1           │   │
│  │   (0.91 threat score)                        │   │
│  │ ● Auto-correlated 2nd camera at Step 7       │   │
│  │ ● Total time saved: 38 seconds               │   │
│  │                                              │   │
│  │ Without this module:                         │   │
│  │ Operator must manually monitor all camera    │   │
│  │ feeds — average detection delay: 45 sec      │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  [← BACK TO RESULTS]    [BOOK ARCHITECTURE REVIEW]   │
└──────────────────────────────────────────────────────┘
```

---

## 6. Design Principles

### 6.1 Contrast Over Explanation

Do not explain differences. Let the viewer see them. The split-view format creates immediate, visceral contrast — fragmented struggling on the left, unified flowing on the right. The proof builds with every step.

### 6.2 Visible Friction (Fragmented Side)

The frustration of fragmented systems is shown, not felt:
- Panel-switching delays animated with a brief loading spinner (1.2s)
- Missed alerts flash briefly in an inactive panel corner — the viewer watches them appear and fade
- The operator avatar visually hesitates, searches, re-types
- Error moments pulse red with a time-cost counter
- The fragmented clock visibly races ahead

### 6.3 Visible Flow (Unified Side)

The unified side shows how the system assists the operator:
- Decision points are highlighted as brief 1-second pauses (the operator confirms, selects, approves)
- The viewer sees that operator agency is preserved while cognitive load is eliminated
- Module badges glow when they activate — showing what just happened and which module did it
- Data flow lines animate between panels, showing the single-data-layer advantage
- The unified clock advances slowly — the system is doing the work

### 6.4 Passive-First Philosophy

- The default experience requires exactly **ONE user action**: pick a scenario and click Run
- Everything else auto-plays
- Optional depth is available but **never required**: pause, rewind, tap a module, explore details
- Design for the executive who has 2 minutes, not the analyst who has 20
- The product is a **proof**, not a game

### 6.5 Credibility Over Perfection

- Realistic operations, not oversimplified flows
- Operator agency preserved in both modes (decision points visible on unified side)
- Failure moments on the fragmented side are subtle and realistic, not exaggerated
- No competitor names — only "fragmented architecture" vs. "unified architecture"

### 6.6 Module Visibility

Every automated action on the unified side shows a **module badge** — a small colored tag indicating which KabatOne module handled it. Badges glow for 2 seconds when a module activates, with an auto-appearing tooltip explaining what it did. Then they fade. Viewers can tap any badge at any time for more detail — but they don't have to.

---

## 7. Technical Architecture

### 7.1 Stack

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| Framework | **React + Vite** (standalone SPA) | Fast, lightweight, no SSR needed, offline-capable |
| State management | **Zustand** | Simple, drives playback state machine |
| Animations | **Framer Motion** | Panel transitions, data flow lines, badge glows, failure effects |
| Map | **Stylized SVG/Canvas** | No external dependency (Mapbox), works offline, faster load |
| Styling | **Tailwind CSS** or CSS-in-JS | Match kabatone.com design system |
| Typography | Barlow Condensed + Space Grotesk + DM Mono | Same as ebook and website |
| Audio (optional) | Web Audio API | Radio chatter ambient on fragmented side |
| Analytics | **Posthog** or GA4 | Event tracking, funnel, watch-through rate |
| Deployment | **Vercel** (standalone) + **iframe embed** (website) | demo.kabatone.com + widget on kabatone.com |

### 7.2 Architecture

```
src/
├── app/                      # Entry, routing (EN/ES)
├── components/
│   ├── entry/                # Landing screen + scenario selector cards
│   ├── playback/             # Core split-view auto-play experience
│   │   ├── SplitView.tsx         # Main container: left/right halves
│   │   ├── FragmentedSide.tsx    # Animated fragmented 4 panels
│   │   ├── UnifiedSide.tsx       # Animated command center
│   │   ├── StepNarrator.tsx      # Bottom bar: step description
│   │   ├── PlaybackControls.tsx  # Pause/play, rewind, speed toggle
│   │   ├── ModuleBadge.tsx       # Glowing module indicator + tooltip
│   │   ├── KPICounter.tsx        # Running clock + error counters
│   │   └── DataFlowLine.tsx      # Animated connection lines
│   ├── panels/               # Shared panel components
│   │   ├── VMSPanel.tsx
│   │   ├── GISPanel.tsx
│   │   ├── CADPanel.tsx
│   │   ├── RadioPanel.tsx
│   │   ├── CommandCenter.tsx
│   │   ├── VideoWall.tsx
│   │   ├── DispatchPanel.tsx
│   │   ├── EventsTimeline.tsx
│   │   ├── AIAlerts.tsx
│   │   ├── ResponderCards.tsx
│   │   ├── CitizenReports.tsx
│   │   └── BIDashboard.tsx
│   ├── results/              # Scorecard + module deep dive
│   │   ├── Scorecard.tsx
│   │   ├── ModuleGrid.tsx
│   │   ├── ModuleCard.tsx
│   │   └── ComparisonTable.tsx
│   └── shared/               # Timer display, badges, tooltips
├── engine/
│   ├── playback.ts           # Auto-play state machine (timer-driven)
│   ├── timeline.ts           # Step timing, parallel execution controller
│   └── scoring.ts            # Results calculation
├── scenarios/
│   ├── crowd-disturbance.ts  # Step definitions with timing + animations
│   ├── traffic-accident.ts   # Phase 2
│   └── stadium-event.ts      # Phase 2
├── i18n/
│   ├── en.ts
│   └── es.ts
└── styles/
    └── design-tokens.ts      # Colors, fonts matching kabatone.com
```

### 7.3 Playback Engine (Auto-Play State Machine)

Each scenario is a sequence of **steps** that auto-advance on a timer. No user input is required to progress.

```typescript
interface ScenarioStep {
  id: string
  label: { en: string; es: string }
  description: { en: string; es: string }    // Plain-language for narrator bar
  modules: ModuleKey[]                        // Which modules activate

  fragmented: {
    panels: PanelState[]                      // What each of the 4 panels shows
    activePanel: 'vms' | 'gis' | 'cad' | 'radio'
    animationDuration: number                 // Seconds this step takes
    switchingDelay: number                    // Visible panel-switch lag (ms)
    failureEvent?: FailureAnimation           // Optional animated failure
    narration: { en: string; es: string }     // Step narrator text
  }

  unified: {
    panelUpdates: PanelUpdate[]               // What updates on the command center
    animationDuration: number                 // Seconds this step takes (shorter)
    autoActions: AutoAction[]                 // Visual system actions
    decisionPoint?: DecisionPoint             // Brief pause: operator decides
    narration: { en: string; es: string }
  }
}

interface FailureAnimation {
  type: 'missed_alert' | 'data_error' | 'no_channel' | 'wrong_dispatch'
  visualEffect: string                        // CSS animation class
  message: { en: string; es: string }
  timePenalty: number                          // Seconds added to fragmented clock
}

interface DecisionPoint {
  type: 'confirm' | 'select' | 'approve'
  label: { en: string; es: string }
  duration: number                            // Pause duration (1–2 sec)
  // Shows operator still decides — just faster and with better context
}

interface AutoAction {
  module: ModuleKey
  description: { en: string; es: string }
  visual: 'badge_glow' | 'data_flow_line' | 'panel_update' | 'tooltip_popup'
}

// Playback controller
interface PlaybackState {
  status: 'idle' | 'playing' | 'paused' | 'completed'
  currentStep: number
  speed: 1 | 2                                // Normal or 2x
  fragmentedClock: number                     // Cumulative seconds (left)
  unifiedClock: number                        // Cumulative seconds (right)
  fragmentedErrors: number
  fragmentedMissed: number
  activeModules: ModuleKey[]                  // Currently glowing
}

// Engine API
interface PlaybackEngine {
  play(): void
  pause(): void
  seekToStep(stepIndex: number): void
  setSpeed(speed: 1 | 2): void
  onStepChange(callback: (step: number) => void): void
  onComplete(callback: (results: ScenarioResults) => void): void
}
```

Steps advance via `requestAnimationFrame` / `setInterval` based on each step's `animationDuration`. The fragmented and unified sides animate in parallel, each with their own clock.

### 7.4 Deployment

| Version | URL | Scope | Notes |
|---------|-----|-------|-------|
| **Standalone** | `demo.kabatone.com` | Full experience: all scenarios + scorecard + module deep dive | Primary product |
| **Embedded widget** | `kabatone.com` (homepage or `/simulator`) | Compressed 3–4 step auto-playing preview | "See the full scenario →" CTA |
| **Trade show kiosk** | Offline PWA | Auto-looping demo — cycles through scenarios continuously | Works without internet, touch to pause |
| **Sales link** | `demo.kabatone.com?ref=sales&scenario=crowd` | Shareable link with tracking params | For email/LinkedIn outreach |

### 7.5 Performance Requirements

- **First paint:** < 1.5 seconds
- **Scenario load:** < 500ms
- **Animation frame rate:** 60fps (both sides simultaneously)
- **Step transitions:** < 100ms latency between steps
- **Total bundle size:** < 500KB (no heavy dependencies)
- **Offline capable:** Service worker for trade show use
- **Responsive:** Desktop-first, but functional on tablet (minimum 1024px)
- **Mobile:** Entry screen, scorecard, and module cards — split-view playback requires desktop width

---

## 8. Embedded Website Version

### 8.1 Widget Spec

A lightweight component embedded on kabatone.com that shows a compressed auto-playing preview:

1. Same split-view layout as full experience, but only 3–4 key steps
2. Fragmented (left) vs. unified (right) running simultaneously
3. Fragmented side visibly struggling — unified side flowing smoothly
4. Dual clocks counting up on both sides
5. At the end: "Fragmented: 2:34 · Unified: 0:52"
6. CTA: **"See the full scenario →"** (links to demo.kabatone.com)

The transition from widget to full experience is seamless — the full version shows the same scenario with all 10 steps.

### 8.2 Integration with kabatone.com

The widget could replace or supplement the current Modules section carousel — or live on a new `/simulator` page under the `[locale]` routing.

---

## 9. i18n — English & Spanish

All text in the simulator must be available in EN and ES, matching the kabatone.com bilingual approach:

- Entry screen labels and scenario descriptions
- Step narrator text (both sides, every step)
- Failure moment messages
- Module tooltips and badge labels
- Scorecard text and comparison data
- Module deep-dive descriptions
- CTA copy

Implementation: Simple key-value i18n object (no heavy framework needed).

---

## 10. Business Impact

Use government-native framing, not generic ROI:

### 10.1 Key Outcomes

- Meets national response SLA thresholds
- Reduces operator-dependent variability
- Enables full post-incident auditability
- Improves coordination across agencies

### 10.2 Operational Impact

- Faster unit arrival time
- Reduced escalation probability
- Better supervisor visibility
- Lower training dependency (one system, not four)

---

## 11. Competitive Positioning

### 11.1 Core Position

**KabatOne is not just unified. It is demonstrably unified.**

### 11.2 Strategic Statement

KabatOne is the only platform that can prove unified response in real time, because it operates on a single data layer and workflow engine. This simulator is the proof.

### 11.3 Market Contrast

Others:
- Demonstrate features
- Present integrations
- Show isolated workflows
- Require training to understand the value

KabatOne:
- Demonstrates end-to-end response under pressure
- Lets the prospect **see** the evidence — no training, no instructions, no effort required
- Proves the architecture, not just the interface
- Proves the difference in 2 minutes with zero user effort

---

## 12. Phased Build Plan

### Phase 1 — Auto-Playing MVP (2–3 weeks)

- Entry screen with scenario selector cards
- Split-view playback screen (core new component)
- Playback engine: auto-advancing state machine with step timing
- Fragmented side: 4 animated panels, delay effects, running clock
- Unified side: command center with module badge glows, running clock
- 10-step Crowd Disturbance scenario (full auto-play)
- Scorecard with side-by-side comparison + root cause breakdown
- Playback controls: pause/play, speed toggle (1x/2x)
- EN only
- Deploy to demo.kabatone.com

### Phase 2 — Polish + Depth (2 weeks)

- Module deep-dive cards (tap to expand after scorecard)
- Failure animations in fragmented side (missed alert, typo, wrong dispatch)
- Rewind / seek-to-step functionality
- Module tooltips during playback (auto-appearing, 2-second fade)
- ES language support
- Analytics tracking (Posthog/GA4)

### Phase 3 — Embedded + Distribution (1–2 weeks)

- Embedded widget for kabatone.com (compressed 3–4 step version)
- Trade show kiosk mode (auto-loop PWA, touch to pause)
- Share results as image/PDF
- CTA integration (Calendly/HubSpot booking link)
- Additional scenarios (traffic accident, stadium event)

### Phase 4 — Optional Interactivity + Optimization (ongoing)

- "What if?" module toggle: disable a module and see the impact on the scenario
- Benchmark: "This scenario typically shows X% improvement"
- A/B test entry screen messaging
- Heatmap tracking of where viewers drop off
- Sales team feedback loop

---

## 13. Key Insight

> This product does not explain KabatOne — it demonstrates it. The viewer picks a scenario, clicks once, and watches the proof unfold side-by-side. No instructions. No learning curve. No effort.
>
> The Showdown proves. The modules educate passively. The scorecard closes.
>
> Designed for the executive with 2 minutes, not the analyst with 20.

---

*KabatOne Incident Simulator PRD v3.0 — Passive-First*
*March 2026*
