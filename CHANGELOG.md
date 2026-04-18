# KabatOne Website — Changelog

All notable changes to the website are logged here.
Every agent or contributor making changes **must** append an entry before committing.

Format: `## [version] YYYY-MM-DD — Short title`

---

## [2.27] 2026-04-18 — Fix: TS build error (invalid `tabularNums` CSS prop)

**Fixed**
- StageScreen.tsx line 558 — replaced invalid `tabularNums: 'tabular-nums'` with `fontVariantNumeric: 'tabular-nums'` (proper React CSSProperties key). Restores Vercel build.

---

## [2.26] 2026-04-18 — Medical DETECT: full-width transcript + field chips

**Changed**
- **Medical Stage 01 DETECT** — Removed the confusing two-column splitter. Now a single full-width card:
  1. Top bar: LIVE CALL + ME-0847 + waveform + call controls (MUTE/HOLD/REC) + timer
  2. AI TRANSCRIPT heading row
  3. **Full-width transcript** — lines now span the entire width at 18px body text for maximum readability
  4. Field chips row — Incident type, Caller, Address, Priority, Call duration, Unit assigned rendered as inline pills instead of stacked form rows
  5. ACCEPT & DISPATCH / TRANSFER action strip
- Highlighted fields (CARDIAC EVENT, P1 · LIFE THREATENING) use red-tinted pill; others use neutral blue

---

## [2.25] 2026-04-18 — Medical DETECT: dominant live-call transcript

**Improved**
- **Medical Stage 01 DETECT (911 Call)** — Transcript now the clear focal point of the stage:
  - Transcript panel widened from 48% → 60% (incident form 52% → 40%)
  - Each line is a proper card: colored left-border rail (red=CALLER, blue=DISPATCH), tinted background, 10–12px padding
  - Transcript body text enlarged 11px → **16px**, line-height 1.45, brighter colors (#FFD4D4 / #D4E4FF)
  - CALLER/DISPATCH labels enlarged 8px → 10px, bolder, wider column
  - LIVE CALL header enlarged (12px + 10px glowing dot), waveform bars taller (18px → 32px)
  - New AI TRANSCRIPT heading with icon + "REAL-TIME · EN" meta, bottom border separator

---

## [2.24] 2026-04-17 — Medical UNDERSTAND: clearer map markers + bigger camera thumb

**Improved**
- **Medical Stage 02 UNDERSTAND** — Map now clearly distinguishes caller / AED / camera locations:
  - Caller marker enlarged with double pulsing ring (radius 11 + 22 + 34) for immediate visibility
  - AEDs replaced with green medical-services icon badges + permanent always-on labels (was small green dot w/ hover tooltip)
  - Non-image cameras replaced with blue videocam icon badges + permanent labels (was tiny circle)
  - Camera thumbnail "skin" enlarged from 160×100 → 220×140 (+38%) for readable live-feed preview on the map

---

## [2.23] 2026-04-17 — Demo: auto-fit flow charts — no more scroll

**Fixed**
- **DETECT** — DetectFlowPanel now uses ResizeObserver + CSS transform to auto-scale the entire flow chart to fit its container. Whole flow (5 nodes + branch) visible at once on any viewport, no internal scrolling
- **DECIDE** — DecisionTreePanel tree nodes and option cards get compact styling on ≤768px (smaller paddings, icons, and type). Tree nodes stretch full-width; options grid fits without clipping
- ProtocolPanel center panel grows to natural content height on mobile (no fixed min-height cap forcing internal scroll)

## [2.22] 2026-04-17 — Demo DECIDE: action cards no longer clipped on mobile

**Fixed**
- DecisionTreePanel "Choose an Action" cards were clipped at the bottom on mobile because the inner scroll area was squeezed into ~200px
- Decision tree panel now flows naturally on mobile (no internal scroll)
- ProtocolPanel center panel `min-height` on ≤768px bumped 400 → 620 so tree + option cards render fully

## [2.21] 2026-04-17 — Demo DETECT: flow nodes no longer clip subtitles

**Fixed**
- Detection Logic nodes (CAPTURE, BEHAVIOR ANALYSIS, THREAT RULES, AI PRIORITIZATION, RETROSPECTIVE LOG) were clipping subtitle text with ellipsis — "Aggression + weapon hi…", "Normal behavior · stor…", "3 subjects · 40+ civs" were all cut
- Node width bumped 220 → 240, height 72 → 82
- Titles and subtitles now wrap to 2 lines (line-clamp) instead of single-line ellipsis; `word-break: break-word` so long compound values wrap cleanly

## [2.20] 2026-04-16 — Demo: mobile responsiveness fixes for Stage 02 & 03

**Fixed**
- Stage 02 UNDERSTAND: three-panel cinematic row now stacks fully vertically at ≤768px instead of showing cramped 2-column layout with center panel on top
- Stage 03 DECIDE: protocol step rows now wrap on mobile — long detail text no longer clips on the right edge
- Stage 03 DECIDE: "IN PROGRESS" badge drops below step text on mobile and uses smaller type so it no longer squeezes the title/detail column
- Stage 03 DECIDE: footer data-points strip scrolls horizontally on mobile; active modules row hidden on narrow screens to stop overflow
- Left-panel step title/detail use `word-break: break-word` so long compound values ("PANIC BUTTON TRIGGERED · ...") wrap cleanly

## [2.19] 2026-04-16 — Demo Violence: replace highway images with urban plaza-area cameras

**Fixed**
- The 7 monitoring/idle tiles in the Violence video wall were showing suburban highway footage (reused from LPR) — wrong context for a downtown plaza incident
- Generated 7 new urban CCTV images: Plaza North (busy intersection), Main St (city traffic), Commerce St (storefronts + pedestrians), Parking Garage (urban structure), Plaza East (plaza perimeter), Boulevard (city boulevard), Alley West (service alley)
- Updated camera labels to match plaza surroundings instead of Houston road names

## [2.18] 2026-04-16 — Demo: scenario-specific video wall images for all 5 scenarios

**Added / Fixed**
- **School** (5 new images): generated CCTV-style images for Gym Entrance, Cafeteria, Library, Science Wing, Bus Loop — campus camera network now fully populated
- **Access Control** (5 new images): generated Parking Level 1, Lobby, Exit B, Loading Bay, Roof Access — building camera network fully populated
- **Medical + Violence**: de-duplicated camera IDs — both shared CAM-305/411/227/198/562/340/715; now each has unique IDs (Medical: CAM-81→159, Violence: CAM-21→89)

## [2.17] 2026-04-16 — Demo: full mobile responsiveness pass across all stages

**Fixed**
- **Stage 01 DETECT** (all 5 scenarios): the 50/50 `hasDetectFlow` split had zero mobile CSS — on narrow screens both halves were cramped side-by-side. Added CSS class system (`detect-bg-half`, `detect-left-area`, `detect-flow-half`, `detect-v-sep`, `detect-dp-row`) and mobile rules to stack them vertically: top 50% = camera/detect card, bottom 50% = flow panel. Separator becomes a horizontal `border-top`.
- **Stage 01 light-bg outer wrapper** (`stage-outer-lbg`): was fixed-height with no overflow — now `height: auto; overflow-y: auto` at ≤1100px so content isn't clipped on tablets.
- **Stage 03 DECIDE** (`ProtocolPanel`): stacked panels on mobile (≤768px) now have explicit `min-height` values, the left panel switches its separator from `border-right` → `border-bottom`, and `gap: 0` keeps the separators flush.

## [2.16] 2026-04-16 — Demo LEARN: thick white separators between cards, responsive stacking

**Changed**
- `LearnLayout.tsx`: replaced thin colored `borderRight` (1px green/blue tints) on Card 1 and Card 2 with thick white separator `6px solid rgba(255,255,255,0.6)` — matching the ProtocolPanel and SplitLayout separator pattern
- Responsive behavior already handled: at ≤768px the borders switch to `border-bottom: 6px solid rgba(255,255,255,0.6)` and cards stack vertically (flex-direction: column)

## [2.15] 2026-04-16 — Demo: roll out decision tree + video wall to all 4 remaining scenarios

**Added**
- Propagated the DECIDE-stage improvements from LPR to all remaining scenarios: access-control, violence, school, medical
- Each scenario's Stage 03 now has a tailored `decisionTree` (3-node situation tree + 4 action options with one AI-recommended) and a `videoWall` (9-tile 3×3 camera grid)
- **Access Control**: tree = Unauthorized Access → Identity Confirmed → Server Room at Risk. Options: Lock Down Facility (rec), Dispatch Security, Escort & Detain, Alert Police. Camera wall: 4 real building cams (server corridor, east wing, main entrance, stairwell) + 5 monitoring/idle
- **Violence**: tree = Violence Detected → Armed Subject → Civilians at Risk. Options: Tactical Response (rec), Establish Perimeter, Evacuate Zone, Request Backup. Camera wall: 2 active incident cams + 7 city road cams
- **School**: tree = Panic Button Triggered → Lockdown Activated → Threat Confirmed. Options: Dispatch SRO (rec), Full Lockdown, Evacuate Wing, Call for Backup. Camera wall: 4 real campus cams (hallway, entrance, parking, hallway 2F) + 5 monitoring/idle
- **Medical**: tree = Cardiac Arrest → Location Confirmed → Critical Response. Options: Dispatch AMB-7 (rec), Fire Rescue, Dispatch AMB-12, First Responder. Camera wall: 2 incident area cams + 7 city road cams

## [2.14] 2026-04-16 — Demo LEARN: dark backgrounds + much larger, readable text

**Changed**
- LEARN stage (Case Closed) was rendering three pale, nearly-transparent cards on a white page — hard to read at any size
- Gave all three cards solid dark backgrounds: Critical Events → `#0a1a18`, Performance → `#060e18`, Incident Analysis → `#07101c`. Outer panel → `#0B1420` with full opacity
- **Critical Events:** timestamp `9px → 12px`, event text `11.5px → 15px`, checkmark circle `15px → 22px`, connector line thicker, event padding increased
- **Incident Summary:** key labels `10px → 12px`, values `10px → 13px` bold
- **Performance:** section header `9px → 11px`, timer ring numeral `26px → 32px`, metric labels `9px → 12px`, metric values `12px → 15px`, row padding increased
- **Incident Analysis:** section header `9px → 11px`, stage label/time `11px → 14px`, progress bars `5px → 7px` tall, recs title `11.5px → 14px`, recs body `11.5px → 12px`, all icon sizes bumped, left accent border solid (not translucent)

## [2.13] 2026-04-16 — Demo DECIDE: real CCTV imagery for all 7 video wall tiles

**Added**
- Generated 7 realistic road CCTV photos (via Gemini 3.1 Flash Image) for the monitoring/idle tiles in the DECIDE video wall: Montrose Blvd, Memorial Dr, Westheimer Rd, Allen Pkwy, Kirby Dr, Shepherd Dr, Waugh Dr — saved to `/public/demo/lpr/cctv-*.jpeg` (~230–315 KB each, 16:9)
- Updated `lpr.ts` tiles 3–9 with `image` paths; VideoWall component already applies `brightness(0.55) saturate(0.5)` filter to monitoring/idle tiles so they look like inactive feeds versus the two bright LPR tracking cams

**Fixed**
- Claude Desktop MCP `nano-banana` was pinned to `gemini-2.0-flash-preview-image-generation` (deprecated, returning text-only). Updated `claude_desktop_config.json` to `gemini-2.5-flash-image` (GA stable). Restart Claude Desktop to take effect.

## [2.12] 2026-04-16 — Demo ACT: Tactical Units panel — grid of cards (not a table)

**Changed**
- The ACT stage right-side "Tactical Units" panel was rendering each unit as a full-width row (flex-column layout with `gap: 10px`). On wide screens the rows stretched ~900 px across and read like a table instead of cards. Switched the scroll container to `display: grid` with `grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))` so each unit is a tile that adapts 1 → 2 → 3 columns depending on panel width
- Breakpoint adjustments: at ≤1100 px the grid keeps the `minmax(260px, 1fr)` auto-fill behavior; at ≤768 px the grid collapses to a single column so narrow viewports still see one card per row
- No changes to the card internals — header banner, metrics grid, footer all preserved

## [2.11] 2026-04-16 — Demo DECIDE: simpler tree + visual options + 9-tile video wall

**Changed**
- DECIDE stage decision tree was too dense for non-technical viewers (horizontal funnel + score bars + weighted rankings). Replaced with a **simple 3-node vertical tree** (STOLEN VEHICLE → IN MOTION → INTERCEPT NEEDED) showing the situation at a glance, followed by **4 visual option cards** (Intercept, Roadblock, Track Only, Air Support) the dispatcher can choose from. The AI-recommended option (Intercept) has a green glow + "AI PICK" badge — no scores, no filter math, just clear choices
- Simplified `Stage.decisionTree` type: `tree[]` (2-3 nodes, each with label/detail/icon) + `options[]` (3-4 action cards with one `recommended`). Removed `candidates`, `filters[]`, `ranked[]`, and `recommendation` fields

**Added**
- New `VideoWall` component — 3x3 grid of 9 city-camera tiles restores the right column on the DECIDE stage. Two tiles show live LPR tracking (CAM-402 HIGHWAY 45 and CAM-118 INTERCHANGE) with green "TRACKING" chip + scan beam animation; the other 7 are monitoring/idle neighborhood cams (Montrose, Memorial, Westheimer, Allen, Kirby, Shepherd, Waugh) rendered as dimmed placeholder tiles with camera labels
- Rationale from user feedback: *"too much information and text… maybe a simple decision tree and then a visual representation of the different options the user can take. I would also like to return the right module — maybe nine video tiles with relevant videos inside."*
- Extended `Stage` type with optional `videoWall` (tiles with `status: 'tracking' | 'monitoring' | 'idle'`)

## [2.10] 2026-04-16 — Demo DECIDE: readable protocol + AI decision tree (LPR)

**Improved**
- Protocol steps (left column of DECIDE stage) were near-unreadable: 11px monospace body with `line-through` on completed items at 0.5 opacity. Rewrote to split each step on `—` into a **clear title** (14px, 700 weight, full white) + **detail line** (12px, dimmer). Removed strike-through. Replaced tiny monospace ID with a numbered circle / checkmark / spinner. Status shown as a colored left accent bar instead of a giant border around the whole row. `ACTIVE` pill renamed to `IN PROGRESS` for clarity.

**Added**
- New `DecisionTreePanel` component replaces the center map on the DECIDE stage when a `decisionTree` is provided. Three sections:
  1. **Horizontal filter funnel** — shows how the AI narrowed candidates (e.g. 6 available → [≤3 mi] 4 → [shift active] 3 → [skill: intercept] 3 → WINNER), with per-filter PASS / reject counts
  2. **Ranked candidate cards** — top 3 finalists with weighted AI score (0–100) as a progress bar, distance + ETA, and a one-line rationale. Winner card has a green glow + "AI PICK" trophy badge
  3. **Recommendation strip** — bolt icon + "→ DISPATCH 12-CHARLIE · Primary intercept · Lights & siren · Code 3 · ETA 2:48"
- Rationale: the demo uses maps on Stages 02/03/04 — swapping Stage 03's map for a decision-logic view makes the DECIDE stage distinct and directly visualizes the AI reasoning instead of showing a third map of the same dots
- Extended `Stage` type with optional `decisionTree` (backward compatible — if unset, the stage falls back to the old map view)
- LPR Stage 03 now ships decision tree data; other scenarios still render the legacy map until their trees are authored

## [2.09] 2026-04-16 — Demo ACT fixes: smaller camera overlay + responsive units panel

**Fixed**
- ACT stage camera overlay on the dispatch map was too large (was `clamp(240px, 28vw, 360px)` — consumed most of the map in split layout). Reduced to `clamp(170px, 16vw, 240px)` so it sits as a compact picture-in-picture without blocking the scene
- ACT stage camera image now uses `/demo/lpr/cam-intercept-lpr.jpeg` (purpose-built INTERCHANGE photo, 917KB) instead of the 8.5MB `LPR.png` — loads faster and matches the "CAM-118 · INTERCHANGE" label
- Camera overlay `<Image>` now uses `unoptimized` flag to match the rest of the demo's unoptimized image pipeline (avoids Turbopack optimizer edge cases)
- Units panel (right side of ACT split layout) was collapsing on viewports ≤1100px — parent flex lost sizing but inner `flex:1; overflow:auto` still expected a definite height, so cards didn't render as cards
- Rewrote the ≤1100px breakpoint: split-body now stacks vertically (phone → map → units) with each panel at natural height, horizontal separators replacing vertical ones, and the units scroll container becomes natural-flow so all 6 cards render fully

## [2.08] 2026-04-16 — Demo DETECT: flow panel rolled out to all scenarios

**Added**
- `detectFlow` data added to Stage 01 of all remaining scenarios — each with a scenario-specific 5-node pipeline + "no-match" retrospective branch:
  - **access-control**: Badge Scan → Identity Lookup → Access Policy Check → Anomaly Scoring → Event Triggered (branch: Access Granted Log)
  - **violence**: Capture → Behavior Analysis (YOLO) → Threat Rules → AI Prioritization → Event Triggered (branch: Normal Behavior)
  - **school**: Panic Trigger → Location Lookup → Protocol Match → Lockdown Sequence → Event Triggered (branch: Test Press / Drill)
  - **medical**: 911 Call → Live Transcription → Keyword Extraction → Priority Classify → Event Triggered (branch: Non-urgent Queue)
- StageScreen now clamps all three detectCard types (call-intake, panic-alert, access-breach) to the left 50% when a `detectFlow` is present, so the admin panel and the flow render side-by-side cleanly
- All 5 scenarios now tell the same story: *what* was detected (left) + *how* it was detected (right)

## [2.07] 2026-04-16 — Demo DETECT: n8n-style detection-logic flow panel (LPR stage 01)

**Added**
- New `DetectFlowPanel` component renders an n8n-inspired vertical flowchart that visualizes the system's detection logic: dark canvas with a faint dot-grid, rounded nodes with typed icon tiles (sensor / AI / rule / event / retro), curved bezier connectors, and a one-shot "data packet" dot that traverses the chain on stage enter
- When a detect stage carries a `detectFlow`, the cinematic panel splits 50/50 — left half keeps the existing bg image + detect-overlay + data-point/modules strip (clamped to the left half), right half renders the flow
- LPR scenario (Stage 01) now ships 5 nodes: CAPTURE → PLATE EXTRACTION → HOTLIST MATCH → AI PRIORITIZATION → EVENT TRIGGERED, plus a dashed "NO MATCH" branch to a dimmed RETROSPECTIVE LOG node
- Extended `Stage` type with optional `detectFlow` (backward compatible — other scenarios render unchanged)
- Design spec committed to `docs/2026-04-16-detect-flow-panel-design.md`
- Rollout: LPR first. Other scenarios (access-control / violence / school / medical) will get their own scenario-specific flows in a follow-up once this is approved

## [2.06] 2026-04-16 — Demo ACT: operational dispatch map with multi-unit markers + LPR camera overlay

**Added / Changed**
- Extended `DispatchMap` to render multiple colour-coded unit markers (police blue, K9 amber, EMS red, security purple, fire orange) with per-unit routes and status-aware line styling (solid for ASSIGNED/EN ROUTE, dashed for STANDBY/AVAILABLE)
- Added a floating LPR camera overlay layer on top of the map — 16:10 photo card with red alert border, camera label strip, and "LPR HIT · STOLEN VEHICLE CONFIRMED" footer
- Extended `splitMapCoords` type with optional `units[]` and `camera` fields (backward compatible — existing scenarios untouched)
- Stage 04 ACT (LPR scenario) now uses the new `LPR.png` (baked-in LPR DETECTION header) instead of the reused `lpr-hero.jpeg`, with camera label updated to `CAM-118 · INTERCHANGE`
- Swapped `splitUnits` roster: `05-ALPHA` replaced with `K9-2` (K9 unit, M. Chen & Rex) and `EMS-7` (Medic standby) added — richer multi-agency scene for the ACT map
- Six tactical units now appear on the map with coordinates: 12-CHARLIE (primary), 08-BRAVO (flanking), 04-ALPHA, K9-2, EMS-7, 11-ECHO

## [2.05] 2026-04-16 — Demo ACT: rich tactical unit cards with type, status & ETA

**Changed / Added**
- Replaced the simple unit-row list in the ACT-stage right panel with detailed unit cards
- Each card emphasizes: unit type (Police Car / Security Officer / K9 Unit / Ambulance / Fire Truck) with color-coded icon, large unit number, officer name, status pill (On Scene / Assigned / En Route / Available / Standby), ETA + distance metrics, "View on Map" action, radio channel & equipment
- Extended `splitUnits` type with optional `type`, `typeLabel`, `officer`, `badge`, `eta`, `etaLabel`, `etaSub`, `distance`, `distanceSub`, `channel`, `equipment`, `equipmentIcon` fields (backward compatible)
- Updated access-control and LPR scenarios with full card metadata for all units
- "View on Map" button dispatches a `demo:view-unit-on-map` window event for future map-panel integration

## [2.04] 2026-04-14 — Demo LPR: AI-generated photorealistic LPR camera images

**Fixed**
- Generated two photorealistic LPR camera images using Gemini 3.1 Flash (nano-banana CLI)
- cam-highway-lpr.jpeg: rear-view of BMW on rainy highway at night, green detection box on plate 7JKY442
- cam-intercept-lpr.jpeg: front-left angle SUV approaching intersection, headlights, green LPR box
- Replaced SVG placeholder drawings with actual AI-generated surveillance-style photos
- Reverted ProtocolPanel back to next/image (JPEGs work fine, SVG restriction resolved)

## [2.03] 2026-04-14 — Demo LPR: new SVG camera captures from two distinct angles

**Fixed / Added**
- Created cam-highway.svg — rear-view highway LPR capture (gantry camera, red tail lights, plate 7JKY442 in green box)
- Created cam-intercept-v2.svg — front-right quarter-view at interchange (headlights, front plate detection, different angle)
- Fixed ProtocolPanel to use plain <img> instead of next/image for camera feeds (SVGs blocked by Next.js optimizer)
- Both cameras unique: not reused from any other demo stage

## [2.02] 2026-04-14 — Demo LPR: replace flowchart camera images with real LPR detection images

**Fixed**
- Replaced `lpr-flow.jpeg` (process flowchart — unrelated) used as camera feed in DECIDE stage with `lpr-hero.jpeg` (real overhead highway LPR detection image)
- Added new `cam-intercept.svg` — a front-facing LPR camera capture from interchange angle (angle 2), replacing the blurry UI-mockup `stage-3-decide.jpg`
- Relabeled second camera to `CAM 118 · INTERCHANGE` to match the new image content
- Both cameras now marked as `alert: true` for visual consistency

## [2.01] 2026-04-14 — Demo: add 6px panel separator to UNDERSTAND stage

**Fixed**
- UNDERSTAND 3-panel layout in `StageScreen.tsx` now uses the same `border-right: 6px solid rgba(173,198,255,0.25)` separator as ProtocolPanel, SplitLayout, and LearnLayout
- Panels wrapped in a single container with `borderRadius: 12` and `overflow: hidden` (instead of individual rounded panels with gap)
- Mobile: separator removed on stacked layout, individual panel borders restored for mobile

## [2.00] 2026-04-13 — Demo: fix panel separator contrast (gap bg matches container)

**Fixed**
- Gap background in ProtocolPanel and SplitLayout changed from `#03080f` to `#162235` (matches stage container)
- Darker panel backgrounds (`#0b1622`, `#060e18`, `#07101c`) now contrast against the lighter gap, creating clearly visible separators
- Mirrors the same technique already used by the UNDERSTAND stage

## [1.99] 2026-04-13 — Demo: make panel separators clearly visible

**Fixed**
- Changed gap background from near-invisible `rgba(173,198,255,0.08)` to solid `#03080f` (deep near-black) in `SplitLayout.tsx` and `ProtocolPanel.tsx`
- Panel gaps now create a clear dark separator between modules, matching the UNDERSTAND stage treatment
- Standardised gap/padding to 8px to align with all stage layouts

## [1.98] 2026-04-13 — Demo: vertical gaps between panels on all stage layouts

**Improved**
- `ProtocolPanel.tsx` — panel columns (steps, map, cameras) updated to `border-radius: 12px` and `gap: 12px`, replacing the old `border-right` dividers. Matches the gap treatment on the UNDERSTAND stage.
- `SplitLayout.tsx` — same update: phone, map, and units panels now use `border-radius: 12px` and `gap: 12px`.
- Also synced `LearnLayout.tsx`, `StageScreen.tsx`, and `lpr.ts` to branch.

## [1.97] 2026-04-13 — Fix: sync all demo components and data files to branch

**Fixed**
- 6 component files (`DispatchMap`, `GeoPanel`, `ScenarioPlayer`, `SplitLayout`, `StageScreen`, `TopBar`) and 5 data files (`lpr`, `medical`, `school`, `types`, `violence`) were out of sync between the local working copy and the `demo-light-redesign` branch, causing cascading TypeScript build errors on Vercel. All files synced in one commit.

## [1.96] 2026-04-13 — Fix: ProtocolPanel TypeScript error on prevStage

**Fixed**
- `ProtocolPanel.tsx` — lines 353 and 410 had `prevStage.label` without optional chaining, causing a TypeScript build error (`'prevStage' is possibly 'undefined'`). Updated to `prevStage?.label`. The local file already had the fix but an older version was committed to the branch.

## [1.95] 2026-04-13 — Fix: missing map components added to branch

**Fixed**
- `UnderstandMapPanel.tsx` and `StaticMapPanel.tsx` were never committed to `demo-light-redesign`, causing a Vercel build failure ("Module not found"). Both files added to the branch.

## [1.94] 2026-04-13 — Demo: LearnLayout nav centered + prev button updated

**Fixed**
- `LearnLayout.tsx` — floating nav strip (CHOOSE SCENARIO + prev arrow) was still bottom-right. Repositioned to bottom-center to match BottomNav. Also updated the old ghost `‹` prev button to the labeled pill style introduced in v1.92.

## [1.93] 2026-04-13 — Demo: BottomNav moved to bottom-center

**Changed**
- `BottomNav.tsx` — nav strip repositioned from bottom-right to bottom-center (`left: 50%` + `translateX(-50%)`). More natural placement for a centered demo flow.

## [1.92] 2026-04-13 — Demo: BottomNav — clearer prev/next for first-time users

**Improved**
- `BottomNav.tsx` — PREV button was a tiny ghost `‹` icon at 40% opacity with no label. Replaced with a full labeled pill button (`← DETECT`) matching the NEXT button style but dimmer, so the navigation pattern is immediately obvious. Added 5-dot step progress indicator between the two buttons (active dot stretches to a pill, completed dots tint blue). Added a 2-cycle pulse ring animation on the NEXT button at first stage load to draw attention for new visitors.

## [1.91] 2026-04-13 — Demo: DECIDE camera panel fills height, no black gap

**Fixed**
- `ProtocolPanel.tsx` — camera thumbnails had a fixed `height: 104px`, leaving a large black gap below when only 2 cameras were present. Changed `.pp-camera-pip` to `flex: 1; display: flex; flex-direction: column` and `.pp-camera-img` to `flex: 1; min-height: 0` so each pip stretches to share the full panel height equally. Camera list wrapper also set to `flex: 1` to fill the space below the header.

## [1.90] 2026-04-13 — Demo: access-control DECIDE stage map panel populated

**Fixed**
- `access-control.ts` — the DECIDE stage had `layout: 'protocol'` and `protocolSteps` but no `decideMap`, causing `ProtocolPanel` to render "NO MAP DATA" on the right panel. Added `decideMap` with incident coords `[29.7362, -95.4625]`, five units (SEC-1 ASSIGNED, SEC-2 EN ROUTE, UNIT-9 EN ROUTE, UNIT-3 STANDBY, K9-2 AVAILABLE), and two camera thumbnails (cam03-server-corridor alert + cam07-east-wing). Now renders the same `DecideMapPanel` as violence and medical scenarios.

## [1.89] 2026-04-10 — Demo: UNDERSTAND left panel now scenario-specific

**Fixed**
- `StageScreen.tsx` — the left tracking panel and GIS map overlay in the UNDERSTAND stage were hardcoded with LPR scenario data (plate `7JKY442`, "ACTIVE TRACK", "Westbound I-10", etc.) and appeared on every scenario that had an `understandMap` — including violence. Added `isLprTrack` boolean (true when `dataPoints` contains `INTERCEPT ETA`) and `trackSubLabel` (derived from `stage.stageLabel`). LPR renders the existing vehicle tracking card unchanged. All other scenarios (violence) render a generic card showing the stage's actual `dataPoints`, GIS status, and unit info. Fixed in four locations: the 3-panel left panel, the right GIS panel bottom overlay (3-panel layout), the dark-bg GIS panel bottom overlay, and the dark-bg left tracking panel.

## [1.88] 2026-04-10 — Demo: Leaflet init fix + dark tiles across all scenario maps

**Fixed**
- `GeoPanel.tsx` — replaced direct `L.map()` call (which fires before flex container has real pixel dimensions) with the same `requestAnimationFrame` polling loop + `ResizeObserver` pattern used in DispatchMap and UnderstandMapPanel. Affects UNDERSTAND stage maps for school, medical, and access-control scenarios.
- `DecideMapPanel.tsx` — replaced `setTimeout(invalidateSize, 0)` + voyager tiles + CSS filter hack with RAF polling + `dark_all` CartoCDN tiles. Affects DECIDE stage maps for violence and medical scenarios. Map now renders immediately with the correct dark tactical appearance, consistent with all other maps in the demo.

## [1.87] 2026-04-10 — Demo: title emphasis across all stages

**Improved**
- `StageScreen.tsx`, `ProtocolPanel.tsx`, `SplitLayout.tsx`, `LearnLayout.tsx` — replaced the thin, low-contrast stage label with a left accent bar (3×14px `#1755c2`) + bolder tracking. Increased headline `font-size` from `clamp(1.35rem, 1.9vw, 1.85rem)` to `clamp(1.9rem, 2.6vw, 2.8rem)` and tightened `line-height` to 1.0. Description text opacity raised from 0.48 to 0.62. Changes are identical across DETECT/UNDERSTAND (StageScreen), DECIDE (ProtocolPanel), ACT (SplitLayout), and LEARN (LearnLayout).

## [1.86] 2026-04-10 — Demo: UnderstandMapPanel — fills panel, dark tiles, camera + route overlays

**Fixed / Improved**
- `UnderstandMapPanel.tsx` — replaced `setTimeout(invalidateSize, 0)` with `requestAnimationFrame` loop (same pattern as DispatchMap fix in v1.82) that waits for real container dimensions before calling `L.map()`, then attaches `ResizeObserver`. Previously the voyager tiles loaded into a collapsed height leaving large dark margins.
- Switched to `dark_all` CartoCDN tiles (matches ACT stage). Removed the `hue-rotate` brightness filter hack.
- Route now rendered as glow (10px/18% opacity) + solid line (3px/95%) in green (`#00C98A`).
- Stolen vehicle marker enlarged (36px circle, 2.5px border, larger pulse rings), plate badge background changed from semi-transparent to solid `#FF4560`.
- Intercept/unit marker redesigned as blue `#3B9EFF` crosshair with "12-CHARLIE" label.
- Added CCTV camera marker (amber `#FFB020`, video camera SVG icon, CAM 402 label) placed just east of the incident coords where the vehicle was first detected. Accepts optional `cameraCoords` prop for overrides.
- `fitBounds` now includes camera positions in the bounding box so all overlay elements are visible.

## [1.85] 2026-04-10 — Demo: LEARN nav buttons — floating fixed overlay

**Changed**
- `LearnLayout.tsx` — replaced the inline centered nav buttons (which sat below the dark panel in document flow) with a `position: fixed; bottom: 24px; right: 28px` floating overlay matching the `BottomNav` pattern used by all other stages. The "← ACT" prev button uses the same ghost pill style as `demo-float-prev`; the "Choose Scenario" button uses the green restart palette from `demo-float-restart`.

## [1.84] 2026-04-10 — Demo: DispatchMap — fix white tile background

**Fixed**
- `DispatchMap.tsx` — the v1.82 tile layer split used `dark_matter_no_labels` which is not a valid CartoCDN style name; the map rendered as white/gray with only road labels visible. Reverted to the single correct `dark_all` style which renders black background + roads + labels in one layer.

## [1.83] 2026-04-10 — Demo: UNDERSTAND — restore 3-column layout at all desktop widths

**Fixed**
- `StageScreen.tsx` — the UNDERSTAND stage was wrapping its center panel to full-width at ≤1100px (matching the old fixed-height overflow fix), which broke the three-equal-column layout on common desktop viewports. Fix: removed `flex-wrap` and `order: -1` from the ≤1100px rule; the outer now uses `min-height: calc(100vh - 200px)` instead so the columns fill the screen without a fixed height. Wrapping to the stacked layout is deferred to ≤768px (center full-width top, left+right split) and ≤540px (all three stack vertically).

## [1.82] 2026-04-10 — Demo: DispatchMap Leaflet init fix + visual improvements

**Fixed**
- `DispatchMap.tsx` — replaced `setTimeout(invalidateSize, 0)` with a `requestAnimationFrame` loop that waits for the container to have real pixel dimensions before calling `L.map()`, then attaches a `ResizeObserver` to keep Leaflet in sync with CSS layout. Previously Leaflet could initialise when the flex container still had zero height, causing blank tiles and missing markers.
- Switched base tile layer to `dark_matter_no_labels` + separate `dark_only_labels` pane so street labels render crisply on top. Added route glow (8px, 22% opacity) under the solid route line (3.5px, 95% opacity) for better visibility. Increased circle marker radius from 8→9 and added `minHeight: 280px` to the Leaflet container div.
- `SplitLayout.tsx` — added `minHeight: 300` to `demo-split-map` panel to guarantee Leaflet always has a visible container.

## [1.81] 2026-04-10 — Demo: full responsiveness applied to ACT and LEARN stages

**Fixed**
- `SplitLayout.tsx` (ACT) — removed `display: none !important` from `demo-split-units` at ≤1100px and `demo-split-map` at ≤480px; outer wrapper now scrollable at ≤1100px; units panel stacks below map at ≤768px with `min-height: 220px`; map gets `min-height: 180px` at ≤480px instead of vanishing
- `LearnLayout.tsx` (LEARN) — added `learn-outer` class to root div; new `@media (max-width: 1100px)` rule makes outer scrollable (`height: auto`); at ≤768px replaced `max-height: 35%` on card-1 (which clipped content against the fixed parent height) with `min-height: 200px`; cards 2 and 3 get `min-height: 260px` / `300px` so all content is reachable by scrolling

## [1.80] 2026-04-10 — Demo: DECIDE camera panel no longer disappears at narrow widths

**Fixed**
- `ProtocolPanel.tsx` — removed `display: none !important` from `pp-camera-panel` at ≤1100px; camera panel now stays visible at all widths and stacks at the bottom at ≤768px. Also moved `height: auto` scrollable rule to ≤1100px (was only at ≤768px) so the outer wrapper never clips content.

## [1.79] 2026-04-10 — Demo: UNDERSTAND narrow-screen fix — panels scroll instead of clipping

**Fixed**
- `StageScreen.tsx` — at ≤1100px, `understand-outer` no longer has fixed `calc(100vh - 120px)` height; switched to `height: auto` + scrollable, same as the ≤680px rule. Previously, the center panel consumed 38vh and left only ~160px for the left/right panels — the GIS TRACK right panel was clipped by `overflow: hidden` and appeared to "disappear" at medium screen widths.
- Center panel height reduced from `38vh` to `300px` at ≤1100px; left/right panels get `min-height: 260px` / `300px` respectively so all content is accessible by scrolling

## [1.77] 2026-04-10 — Demo: equal-width 3-panel layout across all scenario stages

**Changed**
- `StageScreen.tsx` (UNDERSTAND) — panels now `flex: 1` each instead of fixed 200px / flex:1 / 320px; at ≤1100px center wraps full-width, left+right share space equally
- `ProtocolPanel.tsx` (DECIDE) — steps, map, and cameras panels now `flex: 1` each instead of 36% / flex:1 / 200px; separator lines via CSS class, camera pip image uses 100% width
- `SplitLayout.tsx` (ACT) — already equalized in v1.76
- Consistent 1px `rgba(173,198,255,0.1)` separator between all panels across all three layouts

## [1.76] 2026-04-10 — Demo: floating BottomNav + 3-panel layout for all stages

**Changed**
- `ScenarioPlayer.tsx` — enabled floating `BottomNav` for all non-LEARN stages; added `paddingBottom: 80px` to main content to clear it
- `StageScreen.tsx` — UNDERSTAND stage now uses an early-return 3-panel flex layout (vehicle data | map | protocol/cameras) instead of overlapping absolute panels; map is center with `order: -1` so it appears first when wrapping; disabled internal nav (replaced by floating BottomNav)
- `ProtocolPanel.tsx` — refactored from 2 panels to 3: steps panel (36%) | map panel (flex: 1) | camera PiPs panel (200px, hidden at ≤1100px); disabled internal nav
- `SplitLayout.tsx` — refactored from nested 2-panel to flat 3-panel: phone mockup (260px) | operational map (flex: 1) | tactical units list (220px, hidden at ≤1100px); at ≤768px panels stack vertically; disabled internal nav
- `BottomNav.tsx` — cleaned up styling: `backdrop-filter: blur(20px)`, compact sizing on tablet/mobile, center teaser hidden at ≤480px

**Fixed**
- UNDERSTAND stage panels overlapping on narrow screens (was caused by 3 absolutely-positioned panels in a shared container)
- Navigation buttons appearing twice (both internal per-component nav and floating BottomNav)

## [1.75] 2026-04-10 — Demo: responsive nav buttons across all stage layouts

**Fixed**
- `StageScreen.tsx`, `ProtocolPanel.tsx`, `SplitLayout.tsx` — added `demo-stage-nav-btn`, `demo-stage-nav-sublabel`, `demo-stage-nav-mainlabel`, `demo-stage-nav-icon` CSS classes to all PREV/NEXT nav buttons
- At ≤768px: button padding reduced to `8px 16px`, sub-labels ("Proceed to next step" / "Go back") hidden, main label font shrinks to 0.78rem, icon box shrinks to 24×24
- At ≤480px: padding further reduced to `6px 12px`, main label font shrinks to 0.68rem
- Buttons now stay compact and proportional on tablet and mobile screens

## [1.74] 2026-04-10 — Demo: full responsive pass across all stage components

**Changed**
- `TopBar.tsx` — pills shrink + scroll on tablet (≤768px); entire row 2 hidden on mobile (≤480px); header row 1 shorter on mobile
- `BottomNav.tsx` — compact height on tablet/mobile; center teaser hidden on tablet; prev/next labels hidden on mobile; simplified to icon+short text only
- `ProtocolPanel.tsx` — camera PiPs shrink to 160px at 900px, 130px at 768px; layout stacks vertically at 768px; map panel hidden at 480px
- `StageScreen.tsx` — understand map panel shrinks to 340px at 900px, hidden at 680px; outer padding reduced
- `SplitLayout.tsx` — phone+map panels stack vertically at 768px; map hidden at 480px; padding reduced on mobile
- `LearnLayout.tsx` — three dashboard cards stack vertically at 768px with scroll
- `ScenarioPlayer.tsx` — `paddingTop` responsive: 120px → 88px (tablet) → 48px (mobile) matching header collapse

---

## [1.73] 2026-04-10 — Demo: TopBar stage pills — hover & active states

**Changed**
- `TopBar.tsx` — added CSS hover/active states for stage pills: inactive pills darken on hover and flash blue on press; active pill deepens blue on hover; `data-active` attribute wired for CSS targeting

---

## [1.72] 2026-04-10 — Demo: ACT stage phone panel — brighter radial background

**Changed**
- `SplitLayout.tsx` — left panel (smartphone mockup) now has a radial gradient background (`#1f3e62` center → `#0f1e2e` edges) instead of flat `#162235`, creating a subtle spotlight that makes the phone frame pop

---

## [1.71] 2026-04-10 — Demo: show all platform modules in title area, highlight active ones

**Changed**
- `StageScreen.tsx`, `ProtocolPanel.tsx`, `SplitLayout.tsx`, `LearnLayout.tsx` — module strip now renders all 9 platform modules every time; active modules for the current stage get a solid blue pill (`#1755c2` text, `rgba(0,122,255,0.1)` bg, blue border + bold weight); inactive modules are muted gray; each pill includes its Material icon
- `ALL_MODULES` imported from `TopBar` in all four layout components

---

## [1.70] 2026-04-10 — Demo: move module tags from header to stage title area

**Changed**
- `TopBar.tsx` — removed Row 3 (platform modules strip) from the fixed header; modules are already rendered inline with the stage title in each layout component (StageScreen, ProtocolPanel, SplitLayout, LearnLayout)
- All demo layout components — updated `calc(100vh - 168px)` → `calc(100vh - 120px)` to account for the shorter two-row header
- `ScenarioPlayer.tsx` — updated `paddingTop` from 168px to 120px

---

## [1.69] 2026-04-10 — Demo: TopBar nav blended into white content area

**Changed**
- `TopBar.tsx` — stage lifecycle pills (row 2) and module tags (row 3) now render on `#f1f4f8` light background matching the content area, eliminating the jarring dark-to-white transition; row 1 (logo/badge) retains dark brand chrome; pills/tags restyled with dark-on-light colors and blue active states; outer header border and shadow updated to suit light bottom edge

**Fixed**
- Map fill in UNDERSTAND stage: removed `top: 28` offset from map container in `StageScreen.tsx` so Leaflet tiles now cover the full panel rectangle; header bar, camera inset, and incident overlay float above via z-index

---

## [1.68] 2026-04-10 — Demo: white background treatment for LEARN stage + street routing on all maps

**Changed**
- `LearnLayout.tsx` — applied the same white `#f1f4f8` background treatment as DETECT/UNDERSTAND/DECIDE/ACT: stage title/description above a dark rounded panel (`#0f1e33`), resolved badge + module tags in the header row, light nav buttons (ghost PREV, dark navy "Choose Another Scenario") outside the panel
- `ScenarioPlayer.tsx` — extended `isLightBg` to include `learn` layout; passes `isLightBg` to `LearnLayout`
- `DispatchMap.tsx`, `DecideMapPanel.tsx`, `UnderstandMapPanel.tsx` — removed OSRM dependency; all three maps now use pre-computed Houston street waypoints passed via `route` prop instead of fetching external routing API (which was blocked in sandbox and causing straight-line fallback)
- `lpr.ts` — added pre-computed `route` waypoint arrays to `understandMap`, `decideMap.units` (12-Charlie + 08-Bravo), and `splitMapCoords` following Memorial Dr / Westheimer Rd / Montrose Blvd corridors
- `types.ts` — added `route?: [number, number][]` to `splitMapCoords`, `understandMap`, and `decideMap.units`
- `SplitLayout.tsx` — passes `route` prop to `DispatchMap`; `isLightBg` treatment for ACT stage (title above dark panel, light nav)
- `StageScreen.tsx` — passes `route` prop to `UnderstandMapPanel`
- `ProtocolPanel.tsx` — `isLightBg` treatment for DECIDE stage; camera PiP overlays on map (CAM 402 highway feed + GIS track)

---

## [1.67] 2026-04-10 — SEO: /vs/tyler-technologies + /vs/centralsquare comparison pages

**Added**
- `/vs/tyler-technologies/` — full EN+ES bilingual page: Tyler Technologies (largest US gov-tech vendor, Enterprise CAD/RMS) vs KabatOne unified operational depth; 9-row comparison table; 6 FAQ with breadcrumb + FAQPage schema; related resources + integration links
- `/vs/centralsquare/` — full EN+ES bilingual page: CentralSquare (Superion + TriTech + Aptean + Zuercher merger, 8,000+ agencies) vs KabatOne single cloud-native architecture; 8-row comparison table; 6 FAQ with breadcrumb + FAQPage schema; related resources + integration links
- `vsTylerTechnologies` + `vsCentralsquare` metadata keys added to EN + ES metadata files
- `sitemap.ts` — 2 new /vs/ paths (priority 0.7 each) — site now 85 unique routes × 2 locales = 170 sitemap URLs

---

## [1.66] 2026-04-09 — SEO: add 4 demo scenario pages to sitemap + metadata

**Added**
- `sitemap.ts` — added `/demo/school`, `/demo/violence`, `/demo/medical`, `/demo/access-control` (were live pages not indexed by Google)
- `demo/school/page.tsx` — added full metadata: title, description, OG tags, canonical
- `demo/access-control/page.tsx` — added full metadata: title, description, OG tags, canonical
- `data/demo/types.ts` — added `decideMap` to `Stage` interface (was used in lpr.ts + violence.ts but missing from type — pre-existing TypeScript error)

---

## [1.65] 2026-04-08 — Fix: Scenario 05 stage order — map+blueprint on understand, protocol on decide

**Changed**
- `access-control.ts` — understand stage: changed from protocol to geoPanel layout with 4 CCTV camera thumbnails + office blueprint panel
- `access-control.ts` — decide stage: now shows the unauthorized access protocol (6 steps); removed the stray duplicate decideCard placeholder stage
- `StageScreen.tsx` — added `blueprintPanel='office'` SVG: East Wing corporate floor plan — IT Ops, Conference, Security Desk (top), Server Room B ALERT + Storage + Network Hub (bottom)
- Generated 4 access-control camera images: server corridor, east wing, main entrance, stairwell B

## [1.64] 2026-04-08 — Feat: split map + blueprint on School understand stage + face card cleanup

**Changed**
- `types.ts` — added `blueprintPanel?: 'school' | 'office'` to geoPanel type
- `school.ts` — set `blueprintPanel: 'school'` on understand stage geoPanel
- `StageScreen.tsx` — geoPanel now splits into 55% street map + 45% building blueprint when `blueprintPanel` is set; school blueprint shows full floor plan with animated Room 214 alert; "STREET MAP" label on map pane
- `StageScreen.tsx` — face recognition card simplified: removed verbose sub-labels, kept "⚠ WATCHLIST MATCH" + "98.4%" only

## [1.63] 2026-04-08 — Feat: Scenario 05 — face recognition card on detect + protocol on understand

**Added**
- `StageScreen.tsx` — face recognition overlay card on access-breach CCTV panel: face image with corner detection brackets, scan-line animation, WATCHLIST MATCH label, confidence 98.4%
- `access-control.ts` — understand stage changed from geoPanel to `protocol` layout with 6 steps: badge denial logged, face recognition match, server room lockdown, badge deactivated, officers alerted, PD requested
- Generated `face-match.jpg` — AI portrait for watchlist match display

## [1.62] 2026-04-08 — Feat: Scenario 05 detect stage — new CCTV image + corporate floor plan

**Changed**
- `access-control.ts` — detect image changed to `stage-1-detect-v2.jpg` (overhead view of turnstile access gate with queuing employees), detectCard type changed to `'access-breach'`
- `types.ts` — added `'access-breach'` to detectCard type union
- `StageScreen.tsx` — new `access-breach` panel: CCTV left with ACCESS DENIED bounding box + badge reader label; right side shows architectural blueprint of East Wing Level 3 with IT Operations, Conference Room, Security Desk (top), Server Room B ALERT + Storage + Network Hub (bottom), animated pulsing badge reader at main entrance door, forced-entry door gap on Server Room B

## [1.61] 2026-04-08 — Feat: Scenario 05 — Unauthorized Access Control (v1.61)

**Added**
- `src/data/demo/access-control.ts` — full 5-stage scenario: badge denied ×3 → forced entry → Server Room B
  - detect: panic-alert card with CCTV overhead of server corridor, badge mismatch fields, 5-item alert timeline
  - understand: geoPanel with building coords, SEC-1/SEC-2 units, 4 cameras, SOS forced-entry card
  - decide: decideCard — SEC-1/SEC-2 + UNIT-9/UNIT-3/K9-2, AI score 97, full dispatch brief
  - act: splitLayout — server room CCTV, unit roster, map routing
  - learn: incident closed, intruder detained, badge deactivated
- `src/app/[locale]/demo/access-control/page.tsx` — new route
- Generated 2 Imagen 4 images: server corridor CAM-03 (detect), server room interior (act)
- `src/app/[locale]/demo/page.tsx` — scenario 05 set live, href → /demo/access-control

## [1.60] 2026-04-08 — Fix: SOS event card fully visible — moved coords + explicit z-index

**Fixed**
- `school.ts` — moved SOS coords northeast, clear of school marker and CAM-15
- `GeoPanel.tsx` — added `z-index:9999` to .sos-icon and .sos-card; larger card (12px label, wider box, bigger dot)
- `GeoPanel.tsx` — increased iconSize to 190×68 to match

## [1.59] 2026-04-08 — Fix: SOS button event card visible on map (offset coords + zIndex)

**Fixed**
- `school.ts` — moved sosEvent coords away from caller marker (were overlapping)
- `GeoPanel.tsx` — added `zIndexOffset: 2000` so SOS card renders above camera thumbnails
- `GeoPanel.tsx` — added `sosEvent` to useEffect dependency array

## [1.58] 2026-04-08 — Feat: SOS button event card marker on Understand stage map

**Added**
- `GeoPanel.tsx` — new `sosEvent` prop renders a labeled card marker (dark red card + connector line + pulsing dot) anchored to the panic button location
- `types.ts` — added `sosEvent?: { coords, label, sublabel }` to geoPanel type
- `school.ts` — wired SOS event at Room 214 coords: "⚠ SOS BUTTON EVENT · ROOM 214 · BLDG A 2F"

## [1.57] 2026-04-08 — Fix: larger CCTV thumbnails on map + rename legend label to SOS BUTTON

**Changed**
- `GeoPanel.tsx` — camera thumbnail size increased from 116×73 to 144×91px
- `StageScreen.tsx` — floor plan legend label changed from "PANIC BTN" to "SOS BUTTON"

## [1.56] 2026-04-08 — Feat: Live camera thumbnails on Understand stage map (School scenario)

**Added**
- `GeoPanel.tsx` — camera markers now render as CCTV thumbnail cards when an `image` is provided; card shows grayscale-filtered feed image, scanlines overlay, REC badge, label bar, connector line + dot anchor
- Alert camera (CAM-07) styled in red tones; normal cameras in blue
- `types.ts` — added `image?: string` and `alert?: boolean` to `geoPanel.cameras` items
- `school.ts` — wired 4 Imagen 4-generated camera images: CAM-01 entrance, CAM-07 hallway, CAM-12 parking lot, CAM-15 2F hallway
- Generated 4 CCTV-style school interior/exterior images in `public/demo/school/`

## [1.55] 2026-04-08 — Feat: School Panic Button detect stage — architectural blueprint floor plan

**Changed**
- `StageScreen.tsx` — replaced SVG floor plan on School scenario detect stage with a true architectural blueprint
- Blueprint style: dark navy background, wall hatching pattern (diagonal lines inside thick filled wall rects), proper door swing quarter-circle arcs
- Realistic school layout: Assembly Hall, Principal's Office, Registrar's Office (top); Classroom 1, Classroom 2, Teacher's Faculty Room, Classroom 214 ALERT (bottom)
- Corridor with stairwell symbols (parallel lines + diagonal cross), two camera markers
- Entrance indicator cut into bottom outer wall
- Alert room 214: pulsing red fill, red-tinted divider wall with alert hatching, animated panic button with expanding ring, ⚠ ALERT ACTIVE badge

## [1.54] 2026-04-08 — Design: K-Safety hero map restyled to blueprint aesthetic

**Changed**
- `KSafetyCommandHero.tsx` — map visualization redesigned from dark tactical to architectural blueprint style
- Deep navy blueprint background (`#071630 → #0a1e3c`)
- SVG grid rebuilt: fine `5×5` + major `20×20` pattern, major roads (`1.8px`), secondary roads (`0.8px`)
- Building footprints added as outlined SVG rectangles across all city blocks
- Grid coordinate labels (A–D / 1–4) added on top and left edges
- North arrow and 500 m scale bar added to blueprint corners
- Animated scan-line overlay for live-data feel
- Incident markers: pulsing crosshair with ring instead of plain dot
- Pending incidents: rotated diamond outline
- Unit markers: hollow triangle (SVG polygon)
- Camera markers: square bracket with translucent fill
- Legend icons updated to match new blueprint marker shapes
- Coordinate watermark added (`GRID REF: 19°26′N 99°08′W`)

## [1.53] 2026-04-08 — SEO: 3 new GEO resource pages (small cities, Colombia, best public safety)

**Added**
- `/resources/public-safety-software-small-cities/` — bilingual EN+ES guide for municipalities under 100K residents; ACCENT #16a34a; FORTASEG/SUBSEMUN LATAM context; 4 need cards, 6 eval criteria, comparison table, FAQ (GEO-022)
- `/resources/public-safety-software-colombia/` — bilingual EN+ES guide for Colombian governments; PNC/FONSET/PISCC/CRUM framework; 4 challenge cards, 5-step workflow, comparison table, FAQ (GEO-023)
- `/resources/best-public-safety-software/` — bilingual EN+ES synthesized comparison; 6 software categories, unified vs specialized editorial, 7-row comparison table, best-by-use-case cards, FAQ (GEO-024)
- Hub cards added to `/resources/page.tsx` for all 3 new pages (EN + ES sections)
- `publicSafetySoftwareSmallCities`, `publicSafetySoftwareColombia`, `bestPublicSafetySoftware` keys added to EN + ES metadata
- 3 new sitemap entries (priority 0.7 each)

## [1.52] 2026-04-07 — Fix: QA fixes — nav aria-label, remove off-brand industries, mobile hero overflow

**Fixed**
- Nav logo link: added `aria-label="KabatOne Home"` for accessibility
- Industries dropdown: removed Retail and Logistics (off-brand for B2G public safety audience)
- Mobile hero: added `overflow-x: hidden` on `.hp-hero-wrap` + `padding: 0 8px` on `.hp-sub` at mobile breakpoint to prevent text clipping on iPhone

## [1.51] 2026-04-08 — GEO: Peru guide + RTCC implementation guide + 911 call center guide (EN + ES)

**Added**
- `/resources/public-safety-software-peru/` — Peru market guide (EN + ES): serenazgo/PNP structure, CONASEC, FONIPREL, fragmented vs unified comparison table, FAQ (6 Q&A)
- `/resources/build-rtcc-implementation-guide/` — Practical RTCC implementation guide (EN + ES): 4-phase build plan, 6-step tech stack, staffing model, common mistakes, Basic vs Full RTCC comparison
- `/resources/911-call-center-software-guide/` — 911 call center software guide (EN + ES): 6 core functions, 911 vs CAD comparison, NG911 section, 6 evaluation criteria, FAQ (6 Q&A)
- Hub cards added to `/resources/` index (EN + ES) for all 3 pages
- EN + ES metadata keys: `publicSafetySoftwarePeru`, `buildRtccImplementationGuide`, `callCenterSoftwareGuide`
- Sitemap entries added (priority 0.7 / 0.7 / 0.6)

**Fixed**
- `StageScreen.tsx` line 200: `transcript` possibly undefined — added `?? []` guard

---

## [1.50] 2026-04-08 — Feat: School detect stage — CCTV image + floor plan split

**Changed**
- School Panic Button detect stage redesigned: CCTV camera feed (left 55%) + floor plan (right 45%)
- CCTV feed shows green-tinted security camera look, scanlines, bounding box over panic button area, REC indicator, camera HUD overlays
- Generated `public/demo/school/stage-1-detect.jpg` — surveillance-style image of teacher pressing panic button

## [1.49] 2026-04-08 — Feat: Scenario 04 — School Panic Button + Decide map panel

**Added**
- Scenario 04: School Panic Button — full 5-stage scenario (Lincoln Middle School, Houston TX)
- New `panic-alert` detectCard type with floor plan visualization (rooms 201–224, Room 214 highlighted), alert timeline, and system status
- `DecideMapPanel` component: Leaflet map for the Decide stage showing incident location + all unit positions with dashed routing lines and color-coded status
- Redesigned Decide stage layout: map (55%) + unit roster + AI score ring + dispatch brief (45%)
- `hubPath` prop on `LearnLayout` so "Choose Another Scenario" links back to the locale-correct `/demo` hub
- `/demo/school` route — live in hub as Scenario 04

**Fixed**
- "Choose Another Scenario" button now navigates to locale-prefixed `/en/demo` instead of bare `/demo`

## [1.48] 2026-04-08 — Fix: build failure due to NODE_ENV + analytics in root layout

**Fixed**
- Build was failing with `TypeError: Cannot read properties of null (reading 'useContext')` during prerendering of `/_global-error` and `/_not-found` when `NODE_ENV=development` was active in the shell. Root cause: non-standard NODE_ENV caused React hooks state issues during static generation.
- Moved `GoogleAnalytics`, `GoogleTagManager`, `GoogleTagManagerNoScript` from root `layout.tsx` to `[locale]/layout.tsx` — keeps analytics out of the error-rendering path (correct architecture).

**Added**
- `src/app/not-found.tsx` — custom 404 page replacing Next.js built-in (self-contained, dark KabatOne theme).

---

## [1.47] 2026-04-08 — GEO: C5 Command Centers Mexico 2026 guide + metadata optimization

**Added**
- `/resources/c5-command-centers-mexico-2026/` — Full EN + ES guide: C5 definition, 3-layer structure, 6-component tech stack, integration challenge, unified platform benefits, Legacy vs Modern C5 comparison table (7 rows), FAQ (6 Q&A)
- FAQPageSchema, ArticleSchema, BreadcrumbSchema
- EN + ES metadata key `c5CommandCentersMexico2026`, sitemap entry (priority 0.7)
- Hub cards added to `/resources/` index page (EN + ES)

**Improved**
- Metadata optimization: Home, K-Dispatch, K-Traffic, Municipalities — titles extended to 55-62 chars, descriptions to 150-160 chars (EN + ES)

---

## [1.46] 2026-04-07 — Feat: 5 new resource articles, 4 VS pages, demo scenario updates, /lp page

**Added**
- `/resources/what-is-emergency-dispatch-software` — EN + ES GEO article
- `/resources/what-is-incident-management-software` — EN + ES GEO article
- `/resources/what-is-lpr-license-plate-recognition` — EN + ES GEO article
- `/resources/what-is-sensor-fusion` — EN + ES GEO article
- `/resources/what-is-video-analytics` — EN + ES GEO article
- `/vs/avigilon`, `/vs/nice-systems`, `/vs/verint`, `/vs/verkada` — competitor comparison pages
- `/lp` — generic campaign landing page (URL param-driven: `?headline`, `?sub`, `?cta`, `?campaign`)
- `GeoPanel` demo component for scenario explorer
- Violence scenario (Scenario 02) data + 3 stage images (optimized)

**Changed**
- Demo `StageScreen` — significant updates for geo panel and scenario routing
- Demo `medical.ts` and `violence.ts` — scenario data updates
- `demo/page.tsx` — scenario hub updates
- `sitemap.ts` — new entries for all new pages
- `metadata.ts` (EN + ES) — new metadata keys for all new pages
- `resources/page.tsx` — new article cards added
- `site-manager.html` — updated
- `ModulesSection.tsx` — minor update

## [1.45] 2026-04-07 — Analytics: GTM scaffold + GA4 env var + conversion events

**Added**
- `src/components/GoogleTagManager.tsx` — GTM snippet component (activates when `NEXT_PUBLIC_GTM_ID` env var is set)
- `src/app/global-error.tsx` — Minimal global error boundary to fix Next.js prerender issue
- `generate_lead` dataLayer event on successful contact form submission
- `book_demo` dataLayer event on CTA "Book a Demo" button clicks

**Changed**
- `GoogleAnalytics.tsx` — GA4 Measurement ID now reads from `NEXT_PUBLIC_GA4_ID` env var (fallback: hardcoded `G-5MB9CK1FGS`)
- `CTASection.tsx` — converted to client component to support `book_demo` onClick tracking
- Root `layout.tsx` — GTM component added alongside existing GA4 script

---

## [1.44] 2026-04-07 — Competitor: vs Verkada comparison page (EN + ES)

**Added**
- `/vs/verkada/` — KabatOne vs Verkada comparison page, EN + ES
- Focus: cloud physical security (cameras, access, alarms) vs unified public safety platform (CAD, GIS, traffic, multi-agency)
- 9-row comparison table, 4 "why KabatOne wins" cards, FAQ (6 Q&A)
- FAQPageSchema, ArticleSchema, BreadcrumbSchema
- EN + ES metadata key `vsVerkada`, sitemap entry (priority 0.7)

---

## [1.43] 2026-04-07 — GEO: Incident management software explainer (EN + ES)

**Added**
- `/resources/what-is-incident-management-software/` — Full EN + ES GEO explainer
- 5-step incident lifecycle (detection → classification → dispatch → coordination → resolution)
- IMS vs CAD vs PSIM comparison table, 4 key capabilities cards
- FAQ (6 Q&A), FAQPageSchema, ArticleSchema, BreadcrumbSchema
- EN + ES metadata key `whatIsIncidentManagementSoftware`, sitemap entry (priority 0.6)
- Hub cards added to `/resources/` index page (EN + ES)

---

## [1.42] 2026-04-07 — Competitor: vs NICE Systems (Qognify) comparison page (EN + ES)

**Added**
- `/vs/nice-systems/` — KabatOne vs NICE Systems/Qognify comparison page, EN + ES
- Focus: PSIM + video evidence management vs unified public safety platform with native CAD, GIS, and traffic
- FAQPageSchema, ArticleSchema, BreadcrumbSchema
- EN + ES metadata key `vsNiceSystems`, sitemap entry (priority 0.7)

---

## [1.41] 2026-04-07 — Competitor: vs Verint comparison page (EN + ES)

**Added**
- `/vs/verint/` — KabatOne vs Verint comparison page, EN + ES
- Focus: video intelligence/analytics platform vs unified C5 command center platform
- FAQPageSchema, ArticleSchema, BreadcrumbSchema
- EN + ES metadata key `vsVerint`, sitemap entry (priority 0.7)

---

## [1.40] 2026-04-07 — GEO: Sensor fusion explainer (EN + ES)

**Added**
- `/resources/what-is-sensor-fusion/` — Full EN + ES GEO page explaining sensor fusion for command centers
- 6 sensor types: video, acoustic/gunshot, LPR, IoT, GPS/mobile units, citizen signals
- 4 benefit cards: unified picture, faster detection, reduced false positives, multi-layer validation
- FAQ (6 Q&A), FAQPageSchema, ArticleSchema, BreadcrumbSchema
- EN + ES metadata key `whatIsSensorFusion`, sitemap entry (priority 0.6)
- Hub cards added to `/resources/` index page (EN + ES)

---

## [1.39] 2026-04-07 — Competitor: vs Avigilon comparison page (EN + ES)

**Added**
- `/vs/avigilon/` — KabatOne vs Avigilon (Motorola Solutions VMS) comparison page, EN + ES
- Comparison: video-only VMS vs unified platform (CAD, GIS, event management, multi-agency)
- FAQPageSchema, ArticleSchema, BreadcrumbSchema
- EN + ES metadata key `vsAvigilon`, sitemap entry (priority 0.7)

---

## [1.38] 2026-04-07 — GEO: Video analytics explainer (EN + ES)

**Added**
- `/resources/what-is-video-analytics/` — GEO explainer targeting "video analytics", "AI surveillance", "VCA/IVA" keyword cluster
- Content: definition, 6 detection types (intrusion, LPR, counting, gunshot, abandoned objects, fire), edge vs server comparison table, FAQ (6 Q&A)
- FAQPageSchema, ArticleSchema, BreadcrumbSchema
- EN + ES metadata, sitemap entry (priority 0.6), resources hub cards

---

## [1.37] 2026-04-07 — GEO: LPR/ALPR explainer (EN + ES)

**Added**
- `/resources/what-is-lpr-license-plate-recognition/` — GEO explainer targeting "LPR", "ALPR", "license plate recognition" keyword cluster
- Content: definition, 4-step workflow (capture → OCR → cross-reference → alert), fixed vs mobile comparison table, 6 public safety use cases, FAQ (6 Q&A)
- FAQPageSchema, ArticleSchema, BreadcrumbSchema
- Internal links to LPR integration, sensor fusion, face recognition + RTCC, situational awareness, VMS resources
- EN + ES metadata, sitemap entry (priority 0.6), resources hub cards

---

## [1.36] 2026-04-07 — GEO: Emergency dispatch software explainer (EN + ES)

**Added**
- `/resources/what-is-emergency-dispatch-software/` — full EN+ES GEO explainer targeting "emergency dispatch software" keyword cluster (broader than CAD, higher search volume)
- Content: definition, 6-step dispatch workflow, dispatch software vs CAD comparison table, NG911 section, 6 evaluation criteria, FAQ (6 Q&A), related resources
- FAQPageSchema, ArticleSchema, BreadcrumbSchema
- Internal links: LPR, panic buttons, sensor fusion integrations + PSAP, CAD, command center, emergency management resources
- EN + ES metadata keys: `whatIsEmergencyDispatchSoftware`
- Sitemap entry: `/resources/what-is-emergency-dispatch-software` (priority 0.6)
- Resources hub: card added to ES and EN article arrays

---

## [1.35] 2026-03-31 — Feat: Scenario 03 — 911 Medical Emergency (v1.35)
**Added**
- New `/demo/medical` route — full 5-stage 911 Medical Emergency scenario (Detect → Understand → Decide → Act → Learn)
- `src/data/demo/medical.ts` — scenario config: cardiac event at 4817 Westheimer Rd, AMB-7 primary unit, Leaflet map with Houston coords
- 3 Imagen-4 generated background images in `public/demo/medical/` (call intake panel, AI caller analysis, unit assignment)
- Scenario 03 set to `live: true` on the demo hub page
**Changed**
- Demo hub scenario 03 href updated from `#` to `/demo/medical`

## [1.34] 2026-03-31 — Feat: Mobile responsiveness for demo/scenario explorer (v1.34)
**Added**
- Comprehensive mobile-responsive CSS in `DemoLayout` targeting breakpoints ≤768px and ≤480px
- `TopBar`: module strip hidden on mobile, stage pills scroll horizontally, chevrons hidden, header height reduced to ~52px
- `ScenarioPlayer`: `paddingTop` overridden to 108px on mobile (matching shorter header)
- `StageScreen`: cinematic panel adapts to `96vw` on mobile; PiP windows shrink to 110px (hidden on ≤480px); nav buttons stack vertically
- `SplitLayout`: fixed height removed on mobile — phone mockup and dispatcher console stack vertically
- `LearnLayout`: fixed height removed on mobile — timeline, metrics, and recommendations stack vertically
- Demo Hub page: nav links hidden on mobile, padding reduced

## [1.33] 2026-03-30 — Feat: Violence Detection scenario + ScenarioPlayer refactor (v1.33)
**Added**
- New `/demo/violence` route — full 5-stage Violence Detection scenario (Detect → Understand → Decide → Act → Learn)
- `src/data/demo/violence.ts` — scenario config with AI video analytics content, 3 Imagen-4 generated background images
- `src/components/demo/ScenarioPlayer.tsx` — generic scenario orchestrator extracted from LprScenario; accepts `ScenarioConfig` + `basePath` props
- Violence scenario now live on hub page (scenario 02)
**Changed**
- `LprScenario.tsx` refactored into thin wrapper around `ScenarioPlayer`

## [1.32] 2026-03-30 — Feat: /resources/what-is-a-psap — PSAP explainer article (EN + ES)
**Added**
- New `/resources/what-is-a-psap` page — full GEO-optimized explainer: what a PSAP does, technology stack (CAD/GIS/TEL/RMS/VMS/NG911), Legacy vs Modern comparison, evaluation criteria, KabatOne section with product links
- EN + ES metadata keys (`whatIsAPsap`)
- BreadcrumbSchema + ArticleSchema + FAQPageSchema (6 Q&A)
- Internal links to K-Dispatch, K-Video, K-Safety, K-Connect, sensor-fusion, panic-buttons, LPR, CAD dispatch, emergency management, command center articles
- Added to sitemap.ts (priority 0.6) and resources hub page

## [1.31] 2026-03-30 — Feat: /resources/what-is-emergency-management-software — EMS explainer article (EN + ES)
**Added**
- New `/resources/what-is-emergency-management-software` page — full GEO-optimized explainer: core capabilities, incident lifecycle, unified vs fragmented comparison, evaluation criteria, KabatOne section
- EN + ES metadata keys (`whatIsEmergencyManagementSoftware`)
- BreadcrumbSchema + ArticleSchema + FAQPageSchema (6 Q&A)
- Internal links to K-Dispatch, K-Safety, K-Video, sensor-fusion, LPR, RTCC setup guide, CAD dispatch, command center, PSAP articles
- Added to sitemap.ts (priority 0.6) and resources hub page
- Synced SEO master plan: updated site size (47→63 routes, 94→126 URLs), fixed GA4 status, added GEO-014–020, updated phase progress

## [1.30] 2026-03-28 — Feat: Scenario Explorer Phase 1 — LPR/Stolen Vehicle interactive demo
**Added**
- New `/demo` hub page (`src/app/[locale]/demo/page.tsx`) — scenario card grid listing LPR and future scenarios
- New `/demo/lpr` page (`src/app/[locale]/demo/lpr/page.tsx`) — full LPR/Stolen Vehicle interactive demo
- Custom `DemoLayout` (`src/app/[locale]/demo/layout.tsx`) — standalone dark shell, no marketing nav/footer; loads Space Mono font
- 14 new components in `src/components/demo/`: TopBar, StageNav, BottomNav, ModuleTags, PIPWindow, LiveTimestamp, StageContent, NextStagePanel, StageScreen, ProtocolPanel, SplitLayout, LearnLayout, LprScenario (orchestrator)
- `src/data/demo/types.ts` — TypeScript interfaces for scenario data (Stage, ProtocolStep, ScenarioConfig)
- `src/data/demo/lpr.ts` — Full LPR scenario config: 5 stages, all content, protocol steps, module tags
- Stage navigation via pill clicks, bottom nav buttons, and keyboard (← → 1-5 keys)
- Deep-linking: `/demo/lpr?stage=decide` loads Stage 3 directly
- Framer Motion fade transitions between stages (300ms)
- Stage 3: ProtocolPanel with 7-step LPR Hit Response Protocol checklist
- Stage 4: SplitLayout — field officer mobile app mockup (40%) + dispatcher admin console (60%)
- Stage 5: LearnLayout — Critical Events Timeline + Resolution Metrics + Trend Analysis
- PIP (picture-in-picture) window on stages 2–4 showing previous stage feed
- Static timestamps per stage (12:04:01 → 12:12:15)
- Image placeholders using existing LPR images (Stitch exports to be swapped in next iteration)

## [1.25] 2026-03-28 — New: /privacy-policy-tamaulipas — Tamaulipas Contigo privacy policy page
**Added**
- Created `/privacy-policy-tamaulipas` page under `src/app/[locale]/privacy-policy-tamaulipas/page.tsx`
- Migrated full privacy policy content for the Tamaulipas Contigo app from PDF
- Page follows existing privacy page styling (same Nav, Footer, section layout)

## [1.24] 2026-03-27 — New: /lp — Generic campaign landing page (EN + ES)

**Added**
- `src/app/[locale]/lp/page.tsx` — Generic campaign landing page with adaptable headline, subhead, and CTA via URL searchParams (`?headline=`, `?sub=`, `?cta=`, `?campaign=`). Sections: minimal header, hero, stats bar (40+ cities / 70M+ citizens / 40% faster / 72h), 3-column value props, client proof + quote, lead form, footer.
- `ContactForm.tsx` — Added optional `campaignSource` prop that injects a hidden `campaign_source` field into the Formspree submission for campaign tracking.

---

## [1.23] 2026-03-26 — New: /resources/what-is-a-command-center — C2–C5 explainer + FAQ schema

**Added**
- `src/app/[locale]/resources/what-is-a-command-center/page.tsx` — Full EN+ES command center explainer targeting "command center" / "centro de mando" / "C2 C5" keyword cluster. C1–C5 LATAM classification, unified vs fragmented comparison, 6 evaluation criteria.
- ArticleSchema, FAQPageSchema (6 Q&A), BreadcrumbSchema.
- Metadata (EN + ES), sitemap, resources hub. Site now 51 routes × 2 = 102 URLs.

---

## [1.22] 2026-03-26 — New: /resources/what-is-gunshot-detection-software + WebSite schema

**Added**
- `src/app/[locale]/resources/what-is-gunshot-detection-software/page.tsx` — Full EN+ES gunshot detection explainer. Acoustic TDOA triangulation, detection workflow, standalone vs integrated comparison, 6 evaluation criteria.
- ArticleSchema, FAQPageSchema (6 Q&A), BreadcrumbSchema.
- Metadata (EN + ES), sitemap, resources hub.
- `src/lib/schema.ts` — Added `webSiteSchema()` for brand identity.
- `src/app/[locale]/layout.tsx` — Now injects WebSite JSON-LD alongside Organization schema.

---

## [1.21] 2026-03-26 — SEO: full cross-linking audit — /vs/ + /resources/ pages

**Added**
- All 13 `/vs/` comparison pages now have "Integrations:" inline link rows pointing to relevant `/integrations/` pages.
- 7 `/vs/` pages (axon, carbyne, cad, fusus, prepared911, peregrine, rapidssos) also received new "Resources:" link rows.
- All 11 `/resources/` pages (excluding `what-is-situational-awareness-software` which already had them) now have "Integrations:" and "Resources:" inline link rows with 2–4 relevant cross-links each.
- Total: 24 pages updated with internal linking improvements.

---

## [1.20] 2026-03-26 — Simulator v2: lifecycle walkthrough redesign

**Changed**
- Complete redesign of the incident simulator from side-by-side comparison to lifecycle walkthrough
- 8 rich command-center screens: Detect → Understand (Video, GIS) → Decide (Events, Protocol) → Act (Dispatch, Responder) → Learn (BI)
- Dark tactical UI following Stitch v4 mockups (bg: #050a14, stage-colored accents)
- New components: LifecycleHeader, SideNav, StageHeader, NavigationControls, CameraFeed, AlertBanner, MapView, UnitCard, KpiCard, StatusBadge
- Auto-advance with RAF-based timer, manual prev/next, skip-to-summary
- Summary screen with KPI cards, module contributions, AI recommendations
- Removed old fragmented-vs-unified comparison (PlaybackScreen, ScorecardScreen, ModuleDeepDive)

## [1.19] 2026-03-26 — SEO internal links, new pages, simulator

**Added**
- `/resources/what-is-video-management-software` — New SEO resource article (EN+ES)
- `/resources/what-is-situational-awareness-software` — New SEO resource article (EN+ES)
- `/vs/rapidssos` — RapidSOS competitor comparison page (EN+ES)
- `/simulator` — Interactive incident simulator with scenarios, playback, and scorecard
- Internal linking (integrations + resources) on all 7 industry pages and 3 product pages
- Metadata (EN+ES) for all new pages; sitemap updated

## [1.18] 2026-03-26 — Dark hero section + module tab clip fix

**Changed**
- Hero section now uses dark background with grid overlay instead of light
- Fixed module tab buttons being clipped at container edges (added vertical padding & overflow-y visible)

## [1.17] 2026-03-26 — New: Incident Simulator (/simulator)

**Added**
- Full interactive incident simulator at `/simulator` (EN + ES)
- 4-screen experience: Entry → Split-View Playback → Scorecard → Module Deep Dive
- Playback engine with 10-step auto-advancing scenario, dual clocks, pause/resume, speed toggle (1x/2x)
- Split-view: fragmented legacy systems (left) vs unified KabatOne (right)
- Failure effects on steps 5/7/8 (typo error, missed alert, no citizen channel)
- Scorecard with time comparison (2:34 vs 0:52), bar chart, module contributions, summary table
- 3x3 expandable module deep dive grid with counterfactual descriptions
- Framer Motion for animations (badge glows, screen transitions, staggered reveals)
- Metadata (EN + ES), sitemap entry added. Site now 49 routes × 2 = 98 URLs.

---

## [1.16] 2026-03-26 — New: /resources/what-is-situational-awareness-software — GEO explainer + FAQ schema

**Added**
- `src/app/[locale]/resources/what-is-situational-awareness-software/page.tsx` — Full EN+ES explainer targeting "situational awareness software" keyword cluster. Covers core SA platform capabilities (GIS operational map, event correlation, contextual video, field unit tracking), 5-step detection-to-decision workflow, unified vs siloed comparison, 6 evaluation criteria, and KabatOne product links with internal linking.
- ArticleSchema, FAQPageSchema (6 Q&A), BreadcrumbSchema.
- Metadata (EN + ES) — added `whatIsSituationalAwarenessSoftware` key.
- Sitemap — added `/resources/what-is-situational-awareness-software` (priority 0.6). Site now 48 routes × 2 = 96 URLs.
- Resources hub — card added in both EN and ES arrays.

---

## [1.15] 2026-03-26 — Google Analytics GA4 tracking

**Added**
- `src/components/GoogleAnalytics.tsx` — GA4 component using `next/script` with `afterInteractive` strategy
- GA4 Measurement ID `G-5MB9CK1FGS` integrated into root layout for site-wide tracking

## [1.14] 2026-03-26 — New: /vs/rapidssos — RapidSOS comparison page + FAQ schema

**Added**
- `src/app/[locale]/vs/rapidssos/page.tsx` — Full EN+ES comparison page. RapidSOS as call data enrichment vs KabatOne as full response platform. Complementary framing, integration model section, 7-row comparison table, FAQPageSchema (6 Q&A), BreadcrumbSchema.
- Metadata (EN + ES), sitemap. Site now 47 routes × 2 = 94 URLs.

---

## [1.13] 2026-03-26 — SEO: internal links — industry pages → /resources/ and /integrations/

**Added**
- All 7 industry pages (`public-safety`, `municipalities`, `airport`, `retail`, `logistics`, `ports`, `stadiums`) now link to relevant /integrations/ and /resources/ pages via inline link rows matching the product page pattern from v1.11.

---

## [1.12] 2026-03-26 — New: /resources/what-is-video-management-software — VMS explainer + FAQ schema

**Added**
- `src/app/[locale]/resources/what-is-video-management-software/page.tsx` — Full EN+ES explainer targeting "video management software" keyword cluster. VMS capabilities, VMS vs NVR vs CCTV comparison table, standalone vs unified platform, 6 buyer criteria. ArticleSchema, FAQPageSchema (6 Q&A), BreadcrumbSchema.
- Metadata (EN + ES), sitemap, resources hub card. Site now 46 routes × 2 = 92 URLs.

---

## [1.11] 2026-03-26 — SEO: internal links — product pages → /integrations/

**Added**
- `k-dispatch/page.tsx` — Added "Integrations:" inline link row: Panic Buttons, Sensor Fusion, License Plate Recognition
- `k-video/page.tsx` — Added "Integrations:" inline link row: LPR, Facial Recognition, Drones, Access Control
- `k-safety/page.tsx` — Added "Integrations:" inline link row: Sensor Fusion, Panic Buttons, LPR, Access Control
- 6 integration pages were live but received no PageRank flow from core product pages. This fix connects the product → integrations link graph.

---

## [1.10] 2026-03-26 — Feat: compact solutions grid + favicon fix + terminology

**Changed / Improved**
- Replaced full-width alternating product rows with compact 3+2 card grid (no screenshots)
- Updated subtitle copy: solutions are chosen per customer needs, not "working together"
- Changed "modules" → "solutions" in hero subtitle and products section
- Fixed favicon/icon/apple-icon white corners — now transparent
- Fixed ModulesSection tab clipping on narrower viewports

## [1.09] 2026-03-25 — Feat: alternating light/dark homepage design

**Changed / Improved**
- Homepage now uses alternating light and dark sections for a modern, Yotpo-inspired look
- Light sections: Hero, How It Works, Integration Logos, Products, Industries
- Dark sections: Modules, Proof/Stats, Why KabatOne, CTA + Footer
- Added `.page-light` and `.dark-section` CSS utility classes with full variable overrides
- Replaced all hardcoded dark `rgba()` / hex colors across components with CSS variables
- Fixed Milestone logo (switched from broken external URL to local `/images/partners/milestone.svg`)
- Integration logos use `brightness(0)` filter for clean dark appearance on light background
- Nav, ContactForm, EbookDownloadForm, ModulesSection, HeroPanel all theme-aware via CSS variables

## [1.08] 2025-03-25 — Feat: production health check & auto-rollback

**Added**
- GitHub Actions workflow (`.github/workflows/health-check.yml`) — checks production health after every Vercel deploy and every 5 minutes
- Auto-rollback: if `www.kabatone.com` returns non-200, promotes the last working deployment automatically
- Incident alerts: creates a GitHub issue on failure to ensure visibility
- Verifies both EN and ES locales to catch middleware/i18n failures

## [1.07] 2026-03-24 — Fix: restore mobile swipe carousel for Modules section

**Fixed / Improved**
- `src/components/ModulesSection.tsx`: Restored mobile swipe carousel — panels were using display:none toggling with no touch support
- Added touch/swipe gesture handling (touchstart/move/end) with horizontal lock detection
- New mobile card layout: rounded cards with image on top, title + description below (Yotpo-style)
- Active dot indicator stretches into a pill shape for clear swipe affordance
- Desktop layout remains unchanged (tabs + viewer chrome)

## [1.06] 2026-03-24 — Feat: real partner logos in Integrations module panel

**Changed**
- `src/components/ModulesSection.tsx`: Replaced static placeholder image with code-based partner grid showing real logos (Milestone, Genetec, RapidSOS, Carbyne, Corsight, Motorola Solutions, iPro); responsive 4-col desktop / 3-col mobile layout
- Added `public/images/partners/` with 7 local partner logo files (SVG + PNG)
- Fixed Milestone and RapidSOS SVGs missing explicit width/height attributes

---

## [1.05] 2026-03-24 — Fix: last ES accent correction (Acción) on About page

**Fixed**
- `src/app/[locale]/about/page.tsx`: Corrected `'Accion'` → `'Acción'` in the CTA heading

---

## [1.04] 2026-03-24 — Fix: HowItWorks mobile layout + ES accent corrections on About & Contact pages

**Fixed**
- `src/components/HowItWorks.tsx`: Added CSS class names (`hiw-grid`, `hiw-step`) so the existing media query actually applies; steps now stack vertically on mobile with border-bottom instead of border-right
- `src/app/[locale]/about/page.tsx`: Corrected ~50 missing Spanish accents across all sections — mission, values, customer success, global presence, and presence cards (misión, tecnología, innovación, atención, México, Norteamérica, etc.)
- `src/app/[locale]/contact/page.tsx`: Corrected ~20 missing Spanish accents — eyebrow, subtitle, form labels, placeholders, select options, sidebar, and CTA (contáctanos, aquí, día hábil, teléfono, etc.); fixed México accent in HQ address for both locales

---

## [1.03] 2026-03-24 — Fix: Remove dev-only rewrites causing MIDDLEWARE_INVOCATION_FAILED on production

**Fixed**
- `next.config.ts`: Removed `rewrites()` block that was added as a Next.js 16 + Turbopack dev workaround. These rewrites were running in production and causing `500 MIDDLEWARE_INVOCATION_FAILED` on Vercel. The next-intl middleware handles locale routing correctly in production without these rewrites.

---

## [1.02] 2026-03-24 — Fix: Spanish (ES) content — accents, rewrites, and corrections

**Fixed**
- `src/app/[locale]/page.tsx`: corrected all missing accents and rewrites in ES content — hero, products (K-Safety, K-Dispatch, K-Traffic, K-Video, K-Connect), why-cards, industry cards, quote, and CTA section
- `src/components/HowItWorks.tsx`: fixed ES step labels, titles, and body copy (Recolección, decisión, pestañas, etc.)
- `src/components/ModulesSection.tsx`: fixed all 9 ES module blocks — accents, rewrites, and updated feature labels (Analítica, Gestión, Detección, etc.)

---

## [1.01] 2026-03-23 — Feat: KSafetyCommandHero + KTrafficCommandHero panel components

**Added**
- `src/components/industry-heroes/KSafetyCommandHero.tsx`: animated GIS command panel with street grid SVG, pulsing incident markers, unit/camera dots, metric sidebar, and incident list
- `src/components/industry-heroes/KTrafficCommandHero.tsx`: traffic control panel with city grid SVG, signal state panel, live camera feed, active incident card, and footer stats

**Changed**
- `k-safety/page.tsx`: replaced inline GIS mockup with `<KSafetyCommandHero />`
- `k-traffic/page.tsx`: replaced inline traffic mockup inside PageHero with `<KTrafficCommandHero />`

---

## [1.00] 2026-03-23 — Content: ebook page stat + quote update + PDF asset

**Changed**
- `end-of-siloed-response/page.tsx`: stat updated `73M+` → `70M+`; quote replaced with KabatOne-attributed thought leadership line
- `public/downloads/the-end-of-siloed-response.pdf`: PDF asset added

## [0.99] 2026-03-23 — Feat: PDF feedback batch — content, data, and UX updates

**Changed**
- k-safety case study: "Jalisco" → "Michoacán"; stat "10,000+ Direct reports" → "80 Operators"
- k-dispatch case study: renamed to "C5CDMX: Transforming Emergency Response in Mexico"
- k-dispatch AI Workflow cards: added emoji icons (📥 🚨 🤖 📊) to empty icon boxes
- k-video hero stat3: placeholder "IA" → "15+ AI Models"; added section eyebrow to bottom CTA
- k-connect HubDiagram inputs: replaced with Campuses, Universities, Factories, Stores, Citizens, Gov. Facilities
- Homepage agencies strip: updated to 12 clients (C5CDMX, YUC, DGO, SIN, TAM, INAMI, JAL, MICH, CHIS, PUE, NAU, NAY)
- About page regions: restructured to Mexico (HQ), Israel (R&D), United States (Commercial office)
- Stadiums hero stat: "4 Coverage Zones" → "360° Full Coverage"
- Industry pages: "Platform Products" → "Platform Solutions" in 7 pages (airport, public-safety, municipalities, logistics, ports, retail, stadiums)
- EN/ES language switcher: restyled as a segmented pill control (visually distinct from nav links)
- ModulesSection: fixed Analytics tab wrapping to second row (flex-wrap: nowrap)

**Added**
- Integration partner logo strip on homepage after ModulesSection: Milestone, Genetec, RapidSOS, Carbyne, Corsight, Motorola, iPro

---

## [0.97] 2026-03-23 — Feat: contact form connected to Formspree

**Added**
- New `ContactForm` client component (`src/components/ContactForm.tsx`) — submits to Formspree via AJAX (no page redirect)
- Loading, success, and error states; EN + ES strings fully supported

## [0.96] 2026-03-23 — Copy: rename platform "Avalon" → "K1" across 14 files

**Changed**
- Replaced all occurrences of "Avalon" (as the KabatOne platform name) with "K1" across 14 files: `HowItWorks.tsx`, `psim-vs-unified-platform/page.tsx`, `smart-city-platform-guide/page.tsx`, `how-c5-command-centers-work/page.tsx`, `vs/vms`, `vs/hexagon`, `vs/genetec`, `vs/milestone`, `vs/carbyne`, `vs/cad`, `vs/motorola`, `vs/mark43`, `about/page.tsx`, `public-safety-software-municipalities-mexico/page.tsx`
- No structural or logic changes — copy-only rename

## [0.95] 2026-03-23 — Feat: auto-detect Spanish browser language

**Added**
- `localeDetection: true` in `src/i18n/routing.ts` — visitors whose browser is set to Spanish are automatically redirected to `/es/`; preference is persisted via `NEXT_LOCALE` cookie

## [0.94] 2026-03-23 — Fix: populate benefit icon boxes + transparent integration cards + Nav logo

**Fixed**
- `k-safety`, `k-dispatch`, `k-video`: benefit card icon boxes now render emoji icons (previously empty accent squares); added `benefitIcons` arrays per page, second grid uses `i + 3` offset
- `k-safety`, `k-dispatch`, `k-video`, `k-connect`: integration cards updated from solid `#0b1628` → `rgba(255,255,255,0.03)` + `borderTop: 2px solid ACCENT` to match approved design
- `Nav.tsx`: logo `<Image>` now includes `style={{ height: 'auto' }}` to resolve Next.js aspect-ratio console warning (was firing 8× per page)

---

## [0.93] 2026-03-23 — Fix: restore original card styling across all 5 product pages

**Fixed**
- All 5 product pages (`k-safety`, `k-dispatch`, `k-video`, `k-connect`, `k-traffic`): section padding restored from `80px 32px` → `100px 40px` to match original static site
- Benefit cards across all 5 pages: background changed from solid `#0b1628` → `rgba(255,255,255,0.03)` (transparent glass effect), added `borderTop: 2px solid ACCENT`, added 40×40px accent icon box, h3 updated to Barlow Condensed 700 uppercase 17px
- `k-safety`: benefits grid changed from `repeat(4, 1fr)` → `1fr 1fr` (2-column)
- `k-connect`: benefit card icons (emoji) now rendered inside icon boxes; `borderTop` corrected from 3px → 2px
- `k-traffic`: `borderTop` corrected from 3px → 2px on benefit cards and capabilities panel
- `k-dispatch` AI workflow cards: background → transparent, `borderTop` added, number changed from filled circle → DM Mono `01/02/03/04` label, added icon box, h3 updated to Barlow Condensed uppercase

---

## [0.92] 2026-03-23 — New: /resources/what-is-a-real-time-crime-center — RTCC explainer + FAQ schema

**Added**
- `src/app/[locale]/resources/what-is-a-real-time-crime-center/page.tsx` — Full EN+ES explainer targeting "what is a real time crime center" keyword cluster. Covers RTCC capabilities (video, LPR, gunshot detection, AI analytics), 5-step incident response flow, integrated vs standalone comparison, and 6 technology evaluation criteria. ArticleSchema, FAQPageSchema (6 Q&A), BreadcrumbSchema.
- `src/content/en/metadata.ts` + `src/content/es/metadata.ts` — Added `whatIsARealTimeCrimeCenter` key.
- `src/app/sitemap.ts` — Added `/resources/what-is-a-real-time-crime-center` (priority 0.7). Site now 45 routes × 2 = 90 URLs.
- `src/app/[locale]/resources/page.tsx` — Added hub card in both EN and ES arrays (isNew: true).

---

## [0.91] 2026-03-23 — Feat: animated hub-and-spoke diagrams restored on all 5 product pages

**Added**
- `src/components/HubDiagram.tsx` — Shared animated SVG hub-and-spoke component. Accepts `uid`, `product`, `tagline`, 5 input nodes, and 3 output nodes. Each node has a label, inline SVG icon, and optional pill width. Pulses travel along spokes via SMIL `animateMotion`; hub has a pulsing outer ring and a rotating dashed inner ring.

**Changed**
- `src/app/[locale]/k-safety/page.tsx` — PROCESS section replaced with `HubDiagram uid="ks"` (Cameras / Sensors / Access Points / Mobile App / IoT SMP → Event Detection / Location / Action).
- `src/app/[locale]/k-dispatch/page.tsx` — PROCESS section replaced with `HubDiagram uid="kd"` (Voice Calls / SMS Text / Field Units / IoT Alerts / Mobile App → Responders / Coordination / Analytics).
- `src/app/[locale]/k-video/page.tsx` — PROCESS section replaced with `HubDiagram uid="kv"` (IP Cameras / RTSP Streams / Drones / Archives / AI Analytics → Live View / Event Alert / Investigation).
- `src/app/[locale]/k-traffic/page.tsx` — PROCESS section replaced with `HubDiagram uid="kt"` (IoT Sensors / Cameras / Loop Detectors / Vehicles V2X / Field Reports → Signal Control / Incident Alert / Analytics).
- `src/app/[locale]/k-connect/page.tsx` — PROCESS section replaced with `HubDiagram uid="kc"` (Cameras / Organizations / Permissions / AI Monitoring / Event Feeds → Law Enforcement / City Operations / Audit Trail).

---

## [0.90] 2026-03-23 — Fix: single CTA sitewide — remove all secondary buttons

**Changed**
- `src/components/CTASection.tsx` — Removed "or contact sales" text link. Now renders only the single primary "Book a Demo" button.
- `src/components/PageHero.tsx` — Removed ghost secondary `cta2` button. All industry and product page heroes now show only the primary CTA.
- `src/app/[locale]/k-safety/page.tsx` — Removed inline "Talk to an Expert" ghost button.
- `src/app/[locale]/k-video/page.tsx` — Removed inline "Talk to an Expert" ghost button.
- `src/app/[locale]/k-dispatch/page.tsx` — Removed inline "Talk to an Expert" ghost button.
- `src/app/[locale]/k-traffic/page.tsx` — Removed two inline "Talk to an Expert" ghost buttons.
- `src/app/[locale]/about/page.tsx` — Removed secondary "Our Mission" anchor from hero CTA row.

---

## [0.89] 2026-03-23 — Fix: homepage copy + ModulesSection + HowItWorks visuals

**Changed**
- `src/app/[locale]/page.tsx` — Reverted hero H1 to original: "The Unified Operating System for Public Safety". Section heading changed from "Five Products" to "Five Solutions" (EN/ES).
- `src/components/ModulesSection.tsx` — Section label is now static "PLATFORM MODULES" instead of the dynamic active-module name. Renamed "Analytics/BI" tab to "Analytics" to fix second-row wrapping bug.
- `src/components/HowItWorks.tsx` — Replaced small icon circles with illustrated SVGs per step (Collect / Process / Respond), each with a radial glow background. More visual and distinctive.

---

## [0.88] 2026-03-23 — Feat: Vertical proof points on all 7 industry pages

**Added**
- All 7 industry pages — inserted an "In Practice" callout block between the Challenges and Capabilities sections. Each block shows a concrete, vertical-specific metric with a one-sentence scenario:
  - **Public Safety**: `< 90s` dispatch time vs. 4–6 min on legacy CAD
  - **Airport**: `3×` faster incident escalation — one screen vs. three systems
  - **Municipalities**: `4 → 1` vendor contracts eliminated with one command platform
  - **Ports**: `< 90s` perimeter breach alert vs. 8–12 min manual CCTV review, ISPS-compliant
  - **Logistics**: `65%` reduction in gate processing time via LPR + automated bay assignment
  - **Retail**: `4×` faster incident detection — proactive alerts vs. reactive CCTV review
  - **Stadiums**: `1 screen` for 40,000+ attendees across all 4 venue coverage zones

---

## [0.87] 2026-03-23 — Feat: How It Works section + buzzword pass + footer cleanup

**Added**
- `src/components/HowItWorks.tsx` — New 3-step "From sensor to response" section (Collect → Process → Respond) with icon circles, connecting line, bilingual EN/ES copy. Added to homepage between hero and ModulesSection.

**Changed**
- `src/app/[locale]/page.tsx` — Why card 02: replaced vague "shave seconds" with specific "under 90 seconds on KabatOne vs. 4–6 minutes on legacy CAD". Why card 04: replaced AI buzzword with concrete rules engine explanation.
- `src/components/Footer.tsx` — Removed dead `href="#"` Terms and Security links. Privacy now links to `/privacy`.

---

## [0.86] 2026-03-23 — Fix: commit missing EbookDownloadForm component from v0.81

**Fixed**
- `src/components/EbookDownloadForm.tsx` — client component was built in v0.81 but never staged; added to repo

---

## [0.85] 2026-03-23 — New: /resources/what-is-cad-dispatch-software — GEO explainer + FAQ schema

**Added**
- `src/app/[locale]/resources/what-is-cad-dispatch-software/page.tsx` — Full EN+ES explainer page targeting "CAD dispatch software" keyword cluster. Covers CAD functions, 6-step dispatch workflow, CAD vs unified platform comparison, and buyer evaluation criteria. ArticleSchema, FAQPageSchema (6 Q&A), BreadcrumbSchema.
- `src/content/en/metadata.ts` + `src/content/es/metadata.ts` — Added `whatIsCadDispatchSoftware` key with keyword-targeted title and description.
- `src/app/sitemap.ts` — Added `/resources/what-is-cad-dispatch-software` (priority 0.6). Site now 44 routes × 2 = 88 URLs.
- `src/app/[locale]/resources/page.tsx` — Added hub card for new page in both EN and ES arrays (isNew: true), inserted after existing "new" articles.

**Updated**
- `SEO/kabatone-seo-master-plan.md` — Added v0.83–v0.84 log rows, new explainer to Phase 3 content table, site size to 44 routes / 88 URLs.

---

## [0.84] 2026-03-23 — Copy: hero rewrite + CTA consolidation + products framing

**Changed**
- `src/app/[locale]/page.tsx` — Hero H1 rewritten from abstract "Unified Operating System" to concrete "One screen. Every camera, dispatch call, and field unit — connected." Subtitle now opens with explicit who/what: "KabatOne is the command-and-control platform for governments and public safety agencies."
- `src/app/[locale]/page.tsx` — Products section subline updated: replaced "unified intelligence layer" buzzword with concrete "without stitching together six different vendors"
- `src/components/CTASection.tsx` — Consolidated from two equal-weight CTA buttons to one primary "Book a Demo" button + a subtle text link fallback; eliminates competing CTAs across all pages that use this component

---

## [0.83] 2026-03-23 — Fix: sitemap orphans — /privacy and /resources/end-of-siloed-response + resources hub card

**Fixed**
- `src/app/sitemap.ts` — added `/resources/end-of-siloed-response` (priority 0.7) and `/privacy` (priority 0.3), both built in v0.81 and v0.68 respectively but never added to sitemap
- `src/app/[locale]/resources/page.tsx` — added ebook card for `/resources/end-of-siloed-response` at top of both EN and ES article arrays; page was an internal orphan with no discovery path from the hub

**Updated**
- `SEO/kabatone-seo-master-plan.md` — synced agent run log (v0.78–v0.82), updated Phase 3 to 0%/Not started, Phase 4 to 30%, site size to 43 routes / 86 URLs, added /vs/peregrine to keyword map, added industry brief to Phase 3 content table

---

## [0.82] 2026-03-22 — Design: industry brief landing page visual overhaul

**Changed**
- Removed Carbyne reference from stat labels — replaced with "Market consolidation signal"
- Removed cover card from hero right column; form is now the sole focus, column narrowed to 360px
- Redesigned SVG illustration: larger viewBox (960×420), richer detail — dot grid backgrounds, red-tinted fragmented side with orange warning triangles, response time comparison bar (8m 24s vs 3m 12s), blue unified side with subtitles in each node, LIVE badge on hub, improved glow filters and animations

## [0.81] 2026-03-22 — Feat: Industry brief landing page /resources/end-of-siloed-response/

**Added**
- `/resources/end-of-siloed-response/` — EN + ES landing page for the Q2 2026 industry brief "The End of Siloed Response"
- `EbookDownloadForm` client component: 4-field lead capture form (name, email, org, role) with success state and PDF download link
- Ebook cover visual built in pure CSS/JSX — no image dependency
- 9-chapter content grid with numbered cards
- 4 key data point stats from the brief ($625M, >$3B, 83K+, 40%)
- "What's inside" checklist (7 bullets EN + ES)
- Pull quote from Chief of Operations testimonial
- Bottom CTA pointing to architecture review request
- `public/downloads/` directory for PDF hosting
- Metadata entries in EN + ES metadata files
- ArticleSchema + BreadcrumbSchema + OrganizationSchema JSON-LD
- Full bilingual support (EN + ES)

## [0.80] 2026-03-21 — Feat: KabatOne vs Peregrine comparison page /vs/peregrine/

**Added**
- `/vs/peregrine/` — EN + ES comparison page: Peregrine predictive analytics vs KabatOne unified operations platform
- 7-row comparison table (primary category, predictive analytics, CAD, video, GIS, traffic, integration model)
- 6 FAQ pairs in EN and ES with FAQPage schema + BreadcrumbSchema
- "Strategic Intelligence vs Operational Platform" positioning section
- Metadata (EN + ES) + sitemap entry
- Related links to /vs/fusus, /vs/motorola, /vs/hexagon, /resources/ai-in-public-safety

## [0.79] 2026-03-21 — Fix: sitemap orphans + SEO master plan sync

**Fixed**
- `src/app/sitemap.ts` — added 3 missing integration paths (`/integrations/access-control/`, `/integrations/drones/`, `/integrations/panic-buttons/`) that were built in v0.78 but never added to the sitemap
- `SEO/kabatone-seo-master-plan.md` — corrected site size (35 → 41 unique routes, 70 → 82 sitemap URLs); marked all 6 integration pages as Done with correct version numbers (v0.74 + v0.78)

## [0.78] 2026-03-21 — Feat: 3 new integration pages — Access Control, Drones, Panic Buttons

**Added**
- `/integrations/access-control/` — Physical access control (EN + ES): OSDP/Wiegand/REST/ONVIF protocols, 4 facility use cases, metrics strip, 6 FAQs, hero image
- `/integrations/drones/` — UAV/UAS integration (EN + ES): 6 capability cards, 4 operational scenarios, specs table, 6 FAQs, hero image
- `/integrations/panic-buttons/` — Panic button integration (EN + ES): 5-step response flow, 6 sector verticals, 6 FAQs, hero image
- Metadata (EN + ES) for all 3 pages
- Footer: 3 new integration links
- 3 hero images generated via Nano Banana

## [0.77] 2026-03-20 — Design: Integration pages visual overhaul — hero images + section illustrations

**Improved**
- Added AI-generated hero illustration to LPR, Face Recognition, and Sensor Fusion integration pages
- Added "From Plate to Alert in Under 3 Seconds" flow diagram section on LPR page
- Added correlation timeline diagram to Sensor Fusion "How the Engine Works" section
- Added 3-metric stats strip (identification rate, false positives, human confirmation) to Face Recognition privacy section
- Generated 5 illustrations via Nano Banana: lpr-hero, lpr-flow, face-hero, fusion-hero, fusion-correlation

## [0.76] 2026-03-20 — Fix: Next.js 16 dev routing + layout restructure + footer integrations

**Fixed**
- `next.config.ts` — Added `rewrites()` as dev fallback for Next.js 16 + Turbopack: middleware edge rewrites don't fire in Turbopack dev; rewrite rules map `/path` → `/en/path` to let the `[locale]` App Router match routes correctly
- `src/app/layout.tsx` — Moved `<html>/<body>` and font variables here (root layout, required by Next.js 16 Turbopack); was missing `<html>/<body>` tags causing runtime error

**Added**
- `src/components/Footer.tsx` — Integrations column: LPR, Face Recognition, Sensor Fusion links (EN + ES labels)
- `src/app/[locale]/layout.tsx` — Locale layout now sets `lang` attribute via inline script; removed `<html>/<body>` (now in root layout)

---

## [0.75] 2026-03-20 — Chore: Combined site-manager page (Dev Environment + Changelog in one tabbed file)

**Added**
- `site-manager.html` — Single internal management page with two tabs: "Dev Environment" (flow map: Mac → GitHub → Vercel/GitHub Pages → production) and "Changelog" (full timeline). Replaces `changelog.html` as the go-to management file.

---

## [0.74] 2026-03-20 — Feat: Integration pages — LPR, Face Recognition, Sensor Fusion

**Added**
- `src/app/[locale]/integrations/lpr/page.tsx` — License Plate Recognition integration page: what is LPR, how KabatOne integrates it, 4 use cases, technical specs table, FAQ (6 Q&A), ArticleSchema + FAQSchema + BreadcrumbSchema, bilingual EN/ES
- `src/app/[locale]/integrations/face-recognition/page.tsx` — Face Recognition integration page: two operational modes, 4 use cases, privacy & compliance controls section (4 controls), FAQ (6 Q&A), schemas, bilingual EN/ES
- `src/app/[locale]/integrations/sensor-fusion/page.tsx` — Sensor Fusion integration page: 6 sensor types, 5-step correlation engine flow, 3 use cases, FAQ (6 Q&A), schemas, bilingual EN/ES
- Metadata keys added to `src/content/en/metadata.ts` and `src/content/es/metadata.ts`: `integrationLpr`, `integrationFaceRecognition`, `integrationSensorFusion`

**Changed**
- `src/app/sitemap.ts` — Added 3 new paths: `/integrations/lpr`, `/integrations/face-recognition`, `/integrations/sensor-fusion` (priority 0.6 each); site now 38 routes / 76 sitemap URLs

---

## [0.73] 2026-03-20 — Feat: Resources hub + 2 new blog-style articles

**Added**
- `src/app/[locale]/resources/page.tsx` — Resources hub index page with 7 article cards (3-column responsive grid), bilingual EN/ES
- `src/app/[locale]/resources/rtcc-setup-guide/page.tsx` — "Real-Time Crime Center Setup Guide": 5 setup steps, common mistakes, metrics to track, FAQ (6 Q&A), ArticleSchema + FAQSchema + BreadcrumbSchema
- `src/app/[locale]/resources/ai-in-public-safety/page.tsx` — "AI in Public Safety: A Guide for Cities": 6 use cases, real benefits, challenges, what to look for, FAQ (6 Q&A), schemas
- Metadata keys added to `src/content/en/metadata.ts` and `src/content/es/metadata.ts`: `resources`, `rtccSetupGuide`, `aiInPublicSafety`

**Changed**
- `src/components/Nav.tsx` — Resources nav link now points to `/resources` (hub index); removed the dead Blog `href="#"` link (desktop + mobile)
- `src/app/sitemap.ts` — Added 3 new paths: `/resources` (priority 0.7), `/resources/rtcc-setup-guide`, `/resources/ai-in-public-safety`

---

## [0.72] 2026-03-20 — Chore: remove static HTML files from nextjs branch

**Removed**
- Deleted 16 static website HTML files from `nextjs` branch: `hero-mockup.html`, `about.html`, `contact.html`, `solutions.html`, 7 industry pages, 5 product pages
- Updated `CLAUDE.md` project snapshot to reflect the current Next.js stack — `main` branch is now the legacy static site only

---

## [0.71] 2026-03-20 — Perf: lazy load below-fold images, switch mockups to WebP

**Improved**
- `hero-mockup.html` — added `loading="lazy"` to 16 below-fold images: 7 integration partner logos, 5 product section icons, 4 city camera photos, footer logo
- `hero-mockup.html` — switched `k-traffic-mockup.png` and `k-connect-mockup.png` references to `.webp` (WebP files already exist in public/images/)
- Expected impact: reduces initial eager image load by ~70%, improves LCP toward 1.2–1.5s, full-load time reduced significantly

---

## [0.70] 2026-03-20 — Docs: Update SEO master plan to current state

**Updated**
- `SEO/kabatone-seo-master-plan.md` — reflects all work done through v0.69
- Stack corrected to Next.js on Vercel; all 11 /vs/ comparison pages marked Done; competitor tracking, keyword map, performance targets, and agent run log updated

---

## [0.69] 2026-03-20 — Feat: KabatOne vs Fusus and vs Prepared 911 comparison pages

**Added**
- `/vs/fusus` comparison page (EN + ES) — KabatOne vs Fusus RTCC platform; covers video intelligence vs full operations, community video, CAD, GIS, traffic, FAQ schema, breadcrumb schema
- `/vs/prepared911` comparison page (EN + ES) — KabatOne vs Prepared 911; covers NG911 call taking vs full response cycle, CAD, GIS, traffic, FAQ schema, breadcrumb schema
- Metadata registered in EN and ES metadata files (`vsFusus`, `vsPrepared911`)
- Both routes added to sitemap.ts
- Footer links added to Footer.tsx and hero-mockup.html

---

## [0.68] 2026-03-20 — Add: Privacy Policy page

**Added**
- New `/privacy` route (EN + ES) with full privacy policy content sourced from kabatone.com/privacy-policy
- Sections: scope, data collected, processing purposes, social media, cookies, security, third-party transfers, ARCO rights, minors, jurisdiction, modifications, and contact
- Metadata registered in both EN and ES metadata files

## [0.67] 2026-03-20 — Fix: Footer columns grouped and right-aligned

**Fixed**
- Company and Competitors columns are now grouped together on the right side of the footer, eliminating excess stretch between them

## [0.66] 2026-03-20 — Fix: Footer competitor links now visible in static site

**Fixed**
- Global `nav { position: fixed }` rule was causing `<nav class="footer-links">` to float up into the fixed nav bar, making links invisible in the footer. Changed footer link containers to `<div>` elements.

## [0.65] 2026-03-20 — Fix: Footer competitors column is now vertical

**Fixed**
- Restructured footer in `Footer.tsx` and `hero-mockup.html` to a multi-column layout — "Competitors" heading with links stacked vertically below, matching standard footer column pattern

## [0.64] 2026-03-20 — Fix: Move competitors to a dedicated bottom row in footer

**Fixed**
- Restructured footer in both `Footer.tsx` and `hero-mockup.html` — competitors now appear in a clear second row below the copyright/nav row, separated by a border

## [0.63] 2026-03-20 — Fix: Group competitor links under "Competitors" heading in footer

**Fixed**
- Competitor links in `Footer.tsx` (Next.js) and `hero-mockup.html` now grouped under a "Competitors" / "Competidores" label with a vertical list, instead of appearing as individual inline links

## [0.62] 2026-03-20 — Fix: Add competitor links to static footer

**Fixed**
- Added 9 competitor links (vs. Genetec through vs. CAD) to `hero-mockup.html` footer — previously only on the Next.js branch footer

## [0.61] 2026-03-19 — Feat: Batch competitor comparison pages — Motorola, Hexagon, Mark43, Axon, Carbyne, CAD
**Added**
- `/vs/motorola/` — KabatOne vs Motorola Solutions (PremierOne CAD, Avigilon, CommandCentral) — angle: the real cost of separate products vs a unified platform
- `/vs/hexagon/` — KabatOne vs Hexagon Safety (HxGN OnCall CAD) — angle: great CAD + GIS, missing video and traffic
- `/vs/mark43/` — KabatOne vs Mark43 (cloud-native CAD/RMS) — angle: cloud-native extended to full response lifecycle
- `/vs/axon/` — KabatOne vs Axon (body cameras + Evidence.com) — angle: officer-centric vs command center-centric; no hardware lock-in
- `/vs/carbyne/` — KabatOne vs Carbyne (next-gen 911) — angle: Carbyne reinvented call intake; KabatOne manages everything after
- `/vs/cad/` — KabatOne vs Traditional CAD Systems (category page, names Motorola PremierOne, Hexagon HxGN OnCall, Tyler New World, CentralSquare, Mark43)
- All 6 pages: 7-row comparison table, 6 FAQ pairs, FAQPage schema, BreadcrumbList schema, EN + ES
- Metadata entries in `en/metadata.ts` and `es/metadata.ts` for all 6 pages
- 6 new routes added to sitemap at priority 0.7
- Footer updated with all 6 new links (vs. Motorola, vs. Hexagon, vs. Mark43, vs. Axon, vs. Carbyne, vs. CAD)

## [0.60] 2026-03-20 — Feat: KabatOne vs Traditional VMS comparison page /vs/vms/
**Added**
- New category-level comparison page at `/vs/vms/` (EN + ES) — KabatOne vs Traditional VMS
- 7-row comparison table, 6 FAQ pairs with FAQPage + BreadcrumbList schema
- Angle: "The real cost of building on top of a VMS" — fragmentation, integration burden, operational delays
- Metadata, sitemap entry, footer link ("vs. VMS") added

## [0.59] 2026-03-19 — Fix: mobile hero gap — trust badges now visible above the fold
**Fixed**
- Reduced `margin-bottom` on `.hp-sub`, `.hp-cta-row`, and `.hp-badges` at ≤560px breakpoint
- SOC 2 / Uptime / 24/7 badges now visible in initial mobile viewport without scrolling

## [0.58] 2026-03-20 — Feat: KabatOne vs Milestone XProtect comparison page /vs/milestone/
**Added**
- New comparison page at `/vs/milestone/` (EN + ES) — KabatOne vs Milestone XProtect
- 7-row comparison table, 6 FAQ pairs with FAQPage schema, BreadcrumbList schema
- Metadata entries in `en/metadata.ts` and `es/metadata.ts`
- Added `/vs/milestone` to sitemap at priority 0.7
- Added "vs. Milestone" link to footer (EN + ES)

## [0.57] 2026-03-20 — Feat: add vs. Genetec link to footer
**Added**
- Added "vs. Genetec" link in the footer nav (both EN and ES) pointing to `/vs/genetec/`

## [0.56] 2026-03-19 — Perf: host logo locally — LCP 1.4s → 0.8s, score 96 → 100
**Improved**
- Downloaded KabatOne logo from CDN and hosted at `/public/images/logo.png`
- Updated `Nav.tsx` to use local path instead of `cdn.prod.website-files.com`
- Eliminates cross-origin connection for the LCP element (logo on every page, `priority`)
- Lighthouse: Performance 96 → **100/100**, LCP 1.4s → **0.8s**, all CWV green

## [0.55] 2026-03-20 — Fix: replace custom middleware with next-intl built-in middleware
**Fixed**
- Replaced hand-rolled locale middleware with `createMiddleware(routing)` from next-intl — fixes 404 on all nested EN routes (industries, resources, vs) in production
- Removed redundant `/en/:path*` redirect from `next.config.ts` (next-intl handles it natively)
- All 21 routes now return 200 in both EN and ES locales

## [0.54] 2026-03-19 — Perf: replace raw img with next/image in product carousel
**Improved**
- Replaced the only remaining raw `<img>` tag in `page.tsx` with `<Image fill>` from `next/image`
- First product (K-Safety) gets `priority={true}` — triggers browser preload for LCP candidate
- Added `sizes` hint for responsive image serving
- Lighthouse Next.js score: 96/100 (A), images 333 KB vs static HTML 91.7 MB

## [0.53] 2026-03-19 — KabatOne vs Genetec comparison page
**Added**
- New `/vs/genetec/` comparison page (EN + ES) — KabatOne vs Genetec Security Center
- 7-row comparison table: category, dispatch/CAD, GIS, traffic, community video, field ops, target market
- 6 FAQ pairs with FAQPage schema
- BreadcrumbList schema + metadata in en/metadata.ts and es/metadata.ts
- `/vs/genetec` added to sitemap.ts (priority 0.7)
- Built on positioning doc brand identity: Genetec = monitoring-first; KabatOne = end-to-end response workflow

## [0.52] 2026-03-19 — Core Web Vitals audit and fixes
**Improved**
- Performance: LCP 3.7s → 2.4s on homepage by adding `priority` to initial ModulesSection image
- Performance: Product icons moved from CDN (330KB each, unoptimized) to local paths with Next.js optimization
- Accessibility: Added `<main>` landmark to layout — fixes missing landmark audit failure
- Accessibility: Fixed color contrast — `--blue` darkened from `#3b82f6` to `#2563eb` (all CTA buttons)
- Accessibility: Module active tab text changed to `#fff`; ms-tag changed to white on colored background
- Accessibility: Carousel dot touch targets enlarged from 8px visual to 24px clickable hit area
- Accessibility: Removed opacity reduction on product chrome titles
- Lighthouse homepage: Performance 88→98, Accessibility 92→100, Best Practices 100, SEO 100

---

## [0.51] 2026-03-19 — Production-ready Vercel deployment
**Changed / Added / Fixed**
- Converted all module images from PNG to WebP (86MB → 507KB) — fixes 30s page load timeout
- Replaced raw `<img>` tags with Next.js `<Image>` for automatic optimization in ModulesSection
- Removed `unoptimized` flag from Nav logo, enabling Next.js image optimization
- Added `formats` and `deviceSizes` to next.config.ts image config
- Created 7 industry hero visualization components (city map, dispatch board, terminal map, port map, logistics tracker, store layout, stadium view) with animated CSS panels
- Wired hero visualizations into all 7 industry pages via `PageHero` children prop
- Added visible breadcrumb navigation (`Home / Industries / Page`) to all 7 industry pages
- Expanded footer with Privacy, Terms, Security placeholder links
- Added Blog placeholder link to Nav (desktop + mobile)

---

## [0.50] 2026-03-19 — GEO-012: Structured data audit and fixes
**Fixed**
- Added BreadcrumbList JSON-LD schema to 5 product pages (K-Dispatch, K-Video, K-Safety, K-Traffic, K-Connect) and About page — previously missing
- Fixed locale-specific URLs in what-is-a-public-safety-platform breadcrumb + Article schema (was hardcoded to EN, now locale-aware)
- Audited all 17+ pages: Organization, SoftwareApplication, FAQPage, Article, BreadcrumbList schemas validated

---

## [0.49] 2026-03-19 — Internal linking pass across all 17 pages
**Added**
- "Related Resources" section on all 5 product pages with 3 resource links + industry cross-links each
- "Related Resources" section on all 7 industry pages with 2-3 resource links + 2 related industry links each
- "Related Articles" cross-links on all 5 resource pages (each links to the other 4)
- All links bilingual EN/ES, placed before CTA sections for consistent UX

---

## [0.48] 2026-03-19 — GEO: 5 citeable explainer pages (GEO-003 through GEO-007)
**Added**
- 5 new `/resources/` explainer pages — bilingual EN/ES, optimized for AI citation (GEO):
  - `what-is-a-public-safety-platform` — definition, core components, legacy comparison
  - `psim-vs-unified-platform` — PSIM vs unified architecture comparison table
  - `how-c5-command-centers-work` — C5 architecture, technology, emergency workflow
  - `smart-city-platform-guide` — capabilities, evaluation criteria, deployments
  - `public-safety-software-municipalities-mexico` — Mexico requirements, C5, 911 integration
- `articleSchema()` added to `src/lib/schema.ts` for resource pages
- Article + FAQPage (6 Q&A each) + BreadcrumbList JSON-LD on all 5 pages
- Metadata entries for all 5 pages in both `en/metadata.ts` and `es/metadata.ts`
- 5 pages added to `sitemap.ts` with hreflang alternates
- "Resources" nav link added to desktop and mobile Nav
- Internal links to product pages throughout all resource content

---

## [0.47] 2026-03-18 — SEO: Schema markup, OG tags, hreflang fixes, Nav i18n, public assets
**Added**
- `src/lib/schema.ts` — JSON-LD schema builders (Organization, SoftwareApplication, FAQPage, BreadcrumbList)
- Organization schema injected globally via layout.tsx
- SoftwareApplication + FAQPage schema on all 5 product pages (bilingual EN/ES, 4-5 Q&A each)
- BreadcrumbList + FAQPage schema on all 7 industry pages (bilingual EN/ES)
- GEO entity definition block on About page (structured, citation-optimized text with 73M+ citizens stat)
- FAQPage schema on About page (4 Q&A pairs)
- OG image (1200x630) and branded K1 favicon/PWA icons generated
- Web manifest (`site.webmanifest`) for PWA support

**Fixed**
- Hreflang: changed `es-MX` to `es` in metadata.ts + sitemap.ts to match routing locale
- Hreflang: added `x-default` pointing to EN canonical on all pages
- OG tags: added `og:image`, `og:locale`, `twitter:card` (summary_large_image) on all 15 pages

**Changed**
- Nav.tsx: all labels now bilingual (Solutions/Soluciones, Industries/Industrias, About/Nosotros, Contact/Contacto)
- Nav arrays moved inside component for locale access

---

## [0.46] 2026-03-18 — Add carousel header to modules section
**Added**
- Carousel header with prev/next arrow buttons, module counter (01/09), large module name, and tagline — matching the original GitHub Pages layout
- Header name and tagline metadata for all 9 modules (EN + ES)

---

## [0.45] 2026-03-18 — Align Next.js homepage with GitHub Pages version
**Added**
- `ModulesSection.tsx` — 9-tab interactive Business Intelligence section (Video, Dispatch, Events, GIS, Integrations, Responder, Citizen, AI, BI) with auto-rotation, pause on hover, ARIA support, and animated progress bar
- Module screenshots in product cards (replacing placeholder grid pattern)
- Moved `/images/` to `/public/images/` so static assets are served correctly by Next.js

**Fixed**
- Product cards now show actual module screenshots instead of empty dark placeholders
- Hero headline no longer applies gradient to "Public Safety" — matches original all-white styling
- Section order now matches original: Hero → Modules tabs → Stats → Products → Why → Industries → CTA

---

## [0.44] 2026-03-18 — Next.js: all 15 pages ported EN+ES, sitemap, robots, shared components
**Added**
- Ported 12 remaining pages: K-Traffic, K-Connect, 7 industry pages (Public Safety, Municipalities, Airport, Retail, Logistics, Ports, Stadiums), Homepage, About, Contact
- Shared components: `Footer.tsx`, `CTASection.tsx`, `PageHero.tsx` — used across all 15 pages
- `src/app/sitemap.ts` — 30 entries (15 EN + 15 ES) with hreflang alternates
- `src/app/robots.ts` — allows all crawlers, points to sitemap
- Updated existing K-Dispatch, K-Video, K-Safety pages to use shared Footer component
- Middleware matcher updated to `/:path*` for broader compatibility; file extension skip uses `\.\w+$` regex

**Verified**
- All 30 URLs return HTTP 200
- `/sitemap.xml` returns 30 `<url>` entries
- `/robots.txt` returns correct content
- `/en/k-dispatch` returns 308 redirect
- `npm run build` → 0 TypeScript errors
- `npx tsc --noEmit` → 0 errors

## [0.43] 2026-03-18 — Fix: replace next-intl middleware with Node.js-compatible locale routing
**Fixed**
- `middleware.ts` — replaced `createMiddleware` from next-intl (which imports `negotiator` CJS, crashing in Vercel V8 edge isolate) with a pure Next.js `NextResponse` implementation; handles `/en/*` redirect, ES prefix passthrough, and EN internal rewrite with zero CJS dependencies
- `src/i18n/routing.ts` — simplified to plain config object (no `defineRouting`), keeps `localePrefix: 'as-needed'` for correct Nav URL generation
- `next.config.ts` — removed `withNextIntl` plugin and `beforeFiles` rewrites (now handled by custom middleware); kept `/en/:path*` → `/:path*` redirect
- `[locale]/layout.tsx` — explicit `locale={locale}` prop on `NextIntlClientProvider` so `useLocale()` in Nav.tsx resolves correctly without server-side plugin context
- `npm run build` → 0 errors, middleware compiled as edge proxy

## [0.42] 2026-03-18 — Fix: MIDDLEWARE_INVOCATION_FAILED on Vercel edge runtime
**Fixed**
- `middleware.ts` — wrap `createMiddleware` in explicit function; skip `/_next`, `/api`, favicon, and static file extensions before invoking intl middleware (prevents edge runtime crash on Vercel)
- No changes to `next.config.ts` or `request.ts` — already correct
- `npm run build` → 0 errors, middleware compiled as edge proxy

## [0.41] 2026-03-18 — Fix: EN at root URL, load Barlow Condensed + Space Grotesk fonts
**Fixed / Added**
- `localePrefix: 'as-needed'` — EN pages now at `/k-dispatch`, ES at `/es/k-dispatch` (no /en/ prefix visible)
- `next.config.ts` `redirects()` — `/en/:path*` → `/:path*` (308), removes redundant default locale prefix
- `next.config.ts` `rewrites(beforeFiles)` — internally maps `/k-dispatch` → `/en/k-dispatch` so App Router `[locale]` segment correctly receives 'en'
- `[locale]/layout.tsx` — Space Grotesk + Barlow Condensed loaded via `next/font/google`, CSS variables applied to `<html>`
- `globals.css` — body uses `var(--font-space-grotesk)`, h1/h2/h3 use `var(--font-barlow-condensed)`
- 0 TypeScript errors, all 6 URLs confirmed (correct lang= and page titles)

## [0.40] 2026-03-18 — Next.js: i18n routing, K-Dispatch + K-Video + K-Safety pages EN+ES
**Added**
- `src/i18n/routing.ts` — next-intl routing config (`localePrefix: 'always'`, locales: en/es)
- `src/i18n/request.ts` — `getRequestConfig` for locale detection
- `src/i18n/navigation.ts` — locale-aware `Link`, `useRouter`, `usePathname` via `createNavigation`
- `middleware.ts` — next-intl middleware at project root
- `src/app/[locale]/layout.tsx` — locale layout with `NextIntlClientProvider` and `lang` attr
- `src/app/[locale]/k-dispatch/page.tsx` — K-Dispatch page (EN+ES, all sections, red accent)
- `src/app/[locale]/k-video/page.tsx` — K-Video page (EN+ES, all sections, purple accent, camera grid)
- `src/app/[locale]/k-safety/page.tsx` — K-Safety page (EN+ES, all sections, cyan accent, GIS mockup)
- `src/components/Nav.tsx` — shared nav with dropdown menus, language switcher, mobile hamburger
**Changed**
- `next.config.ts` — wrapped with `createNextIntlPlugin`, added CDN image domain
- `src/app/globals.css` — added KabatOne design tokens (CSS custom properties)
- `src/app/layout.tsx` — replaced with pass-through root layout (locale layout is effective root)
**Fixed**
- i18n locale routing: switched from `as-needed` to `always` prefix to fix App Router `[locale]` segment matching

## [0.39] 2026-03-18 — Next.js scaffold: content structure, EN+ES metadata, metadata helper
**Added**
- New `nextjs` branch for clean Next.js 16.2.0 rebuild (TypeScript, Tailwind v4, App Router)
- Scaffolded Next.js into repo; existing HTML files untouched
- `src/content/en/metadata.ts` — English SEO metadata for all 15 pages
- `src/content/es/metadata.ts` — Spanish SEO metadata for all 15 pages
- `src/lib/metadata.ts` — `generatePageMetadata()` helper with canonical + hreflang + OG tags
- Empty content stubs for EN+ES pages (home, products ×5, industries ×7, about, contact)
- `next-intl` installed for i18n routing

## [0.37] 2026-03-18 — Fix: nav bar not full-width on mobile on all 5 product pages

**Fixed**
- Mobile nav `left: 0; right: 0` were missing `!important` on all 5 product pages (k-safety, k-dispatch, k-traffic, k-video, k-connect)
- Nav bar was clipped short on the right side on mobile — now spans full viewport width

## [0.36] 2026-03-18 — Fix: hamburger menu JS missing on all 7 industry pages

**Fixed**
- Mobile nav hamburger button had no JS on any of the 7 industry pages
- Added navToggle click handler and mobile dropdown expand/collapse script to all 7 files
- Both hamburger toggle and Solutions dropdown now work correctly on mobile

## [0.35] 2026-03-18 — Fix: move responsive CSS into head style block on all 7 industry pages

**Fixed**
- Responsive media query rules were in a body `<style>` tag which some browsers ignore
- Moved all responsive CSS into the `<head>` `<style>` block for all 7 industry pages
- Each page now has authoritative breakpoint rules (768/640/480/360px) in the proper location

## [0.34] 2026-03-18 — Fix missing grid-collapse rules on industry pages

**Fixed**
- municipalities: `.benefits-grid` (3-col) and `.features-two-col` (2-col) now collapse to 1-col at 640px
- public-safety: `.cap-grid` (2-col numbered cards) now collapses to 1-col at 640px
- logistics: `.coverage-grid` and `.cap-grid` now collapse to 1-col at 640px
- retail, stadiums: `.cap-grid` now collapses to 1-col at 640px
- stadiums: `.zones-grid` now collapses to 1-col at 640px
- ports: `.advantages-grid` (3-col) now collapses to 1-col at 640px

## [0.33] 2026-03-18 — Mobile-first responsive adaptation across all 17 pages

**Added**
- Standardized 5-point breakpoint system (360 / 480 / 640 / 768 / 1024px) applied to every HTML file
- hero-mockup.html: headline scaling (116px→30px on small phones), section padding reduction, CTA stacking at 480px, modules title/quote reduction
- 5 product pages (k-safety, k-dispatch, k-traffic, k-video, k-connect): hero-h1 scaling, section-inner padding tightening, hero-ctas and bottom-cta-btns stacking at 480px, footer stacking at 640px
- about.html: hero-h1 scaling, section padding reduction, hero-btns stacking at 480px
- solutions.html: page-headline scaling, solutions grids collapse to 1-col at 640px, CTA stacking, footer stacking
- contact.html: page-wrap padding reduction, bottom-cta tightening, footer stacking
- 7 industry pages (airport, logistics, municipalities, ports, public-safety, retail, stadiums): ind-hero-inner collapses to 1-col at 768px, challenges-grid/workflow-steps collapse, cta-btns stack, font scaling 76px→30px

## [0.32] 2026-03-18 — Improve K-Traffic hero mockup with city map and live panels

**Improved**
- Replaced basic intersection diagram in K-Traffic hero with a full city-grid SVG map
- Added color-coded traffic flow overlays (green/orange/red) on road segments
- Added animated vehicle dots traversing streets using SVG animateMotion
- Added pulsing incident markers at congested intersections
- Added camera feed panel (CAM-07 with scan lines, REC badge, speeding alert)
- Added active incident card (signal fault with location and timestamp)

## [0.31] 2026-03-18 — Add mobile layout for How It Works diagrams on all product pages
**Added**
- All 5 product pages (k-traffic, k-safety, k-dispatch, k-connect, k-video) now show a compact 3-column grid layout (inputs | hub | outputs) on mobile (≤640px) instead of the unreadable scaled-down SVG. Desktop SVG is unchanged.

## [0.30] 2026-03-18 — Fix mobile tab bar scroll + swipe hint
**Fixed**
- Module tab bar (Video, Dispatch, GIS, etc.) was only showing middle tabs on mobile due to `justify-content: center` making left-side tabs unreachable. Changed to `flex-start`, added iOS momentum scroll, and added a right-edge fade gradient to signal swipeability.

## [0.29] 2026-03-18 — Fix mobile nav full-width on all pages
**Fixed**
- Mobile nav was only covering the left portion of the header on 15 pages — `position: fixed` override was missing `left: 0; right: 0`, so the nav didn't stretch to full viewport width. Fixed across all product, industry, and content pages.

## [0.28] 2026-03-17 — Fix sticky nav on all remaining pages (solutions, about, contact, industries)
**Fixed**
- Same `position: relative` nav bug found on solutions.html, about.html, contact.html, and all 7 industry pages — all updated to `position: fixed !important`

## [0.27] 2026-03-17 — Fix sticky nav on mobile + diagram horizontal scroll on all product pages
**Fixed**
- Mobile nav was `position: relative` — changed to `position: fixed` so header stays sticky on scroll on all 5 product pages
- Hub-and-spoke diagram now horizontally scrollable on mobile (`overflow-x: auto`, `min-width: 560px`) instead of shrinking to illegible size

## [0.26] 2026-03-17 — Add animated hub-and-spoke "How It Works" diagrams to all product pages
**Added**
- SVG animated hub-and-spoke flow diagram replacing plain numbered steps in "How It Works" sections
- Diagrams feature: animated glowing dots flowing from input nodes → hub → output nodes, pulsing hub ring, and rotating dashed inner circle
- Each product has unique node labels and icons: K-Safety, K-Dispatch, K-Traffic, K-Video, K-Connect

## [0.25] 2026-03-17 — Update K-Safety hero stats to platform-wide figures
**Changed**
- Replaced single-site stats (5,400 cameras, 530 panic buttons, 40 cities) with platform-wide figures: 68 Projects, 100+ Agencies, 30+ Integrations

## [0.24] 2026-03-17 — Update K-Connect section text to match Kabatone.com
**Changed**
- Headline: "Citizen Engagement & Reporting" → "Secure community-based video sharing"
- Description and feature bullets updated to match live site copy

## [0.23] 2026-03-17 — Add real camera feeds to K-Video hero mockup
**Improved**
- Replaced empty CSS-gradient camera cells in K-Video hero with actual street camera images from CDN
- Added subtle purple/teal tint overlays per cell for surveillance aesthetic
- Reused 4 images across 6 cells with varied object-position for variety

## [0.22] 2026-03-17 — Update K-Connect mockup image
**Changed**
- Swapped k-connect-mockup.png with updated version

## [0.21] 2026-03-17 — Replace K-Connect product image on home page
**Changed**
- Replaced SVG network diagram with new local mockup image (images/k-connect-mockup.png)

## [0.20] 2026-03-17 — Replace K-Traffic product image on home page
**Changed**
- Replaced CDN-hosted K-Traffic map image with new local mockup (images/k-traffic-mockup.png)

## [0.19] 2026-03-17 — Reorder modules carousel on home page

**Changed**
- `hero-mockup.html` Modules section: reordered tabs, panels, dots, and JS `MOD_ORDER` to new sequence: Video, Dispatch, Events, GIS, Integrations, Responder, Citizens, AI Engine, Analytics/BI
- Video is now the default active module on page load (was GIS)

---

## [0.18] 2026-03-17 — Translate remaining Spanish labels to English

**Fixed**
- `hero-mockup.html` K-Safety: "C5 · Centro de Comando" → "C5 · Command Center"; "SISTEMA ACTIVO" → "SYSTEM ACTIVE"
- `hero-mockup.html` K-Traffic: "SISTEMA ACTIVO" → "SYSTEM ACTIVE"

---

## [0.17] 2026-03-17 — K-Connect: facility map + K-Traffic: simplified panel

**Improved**
- `hero-mockup.html` K-Connect: replaced abstract network diagram with a dark city GIS map showing color-coded facility markers (schools=blue, hospitals=red, factories=orange) with animated flow dots and per-type stats bar (12 Schools / 8 Hospitals / 6 Factories)
- `hero-mockup.html` K-Traffic: removed metrics side panel and legend — full width now shows real AVIF map image + floating accident camera popup only

---

## [0.16] 2026-03-17 — Product panels: real images + full English translation

**Improved**
- `hero-mockup.html` K-Traffic: replaced SVG road drawing with real `k_traffic.avif` product image from kabatone.com; translated overlay labels (CLEAR/SLOW/CONGESTED), popup text, and metrics panel to English
- `hero-mockup.html` K-Video: replaced 4 hand-drawn SVG feeds with real camera JPEG images from kabatone.com CDN (Glorieta del Ángel, Fuente de la Diana, Explanada Juárez, Autopista Urbana); AI bounding-box overlay on feed 1; translated all labels to English
- `hero-mockup.html` K-Dispatch: translated all text from Spanish to English (UNITS, ON SCENE, AVAILABLE, EN ROUTE, NEW, IN REVIEW, ASSIGNED, ON SCENE; incident types; priority badges HIGH/MED/LOW)
- `hero-mockup.html` K-Connect: translated network diagram labels (Schools, Police, Emergency, Business, City Hall, CONNECTED, SHARED, ENCRYPTED) and KPI panel header to "CITIZEN PORTAL ANALYTICS" for clarity

---

## [0.15] 2026-03-17 — K-Connect: network diagram illustration

**Improved**
- `hero-mockup.html` K-Connect: replaced phone mockup with animated network diagram adapted from k-connect.html — central KabatOne hub connected to 5 satellite nodes (Schools, Police, Emergency, Business, City Hall) with animated SVG flow dots and dashed connection lines; stats bar showing 14 connected orgs, 3 active shares, encrypted

---

## [0.14] 2026-03-17 — Product mock panel refinements

**Improved**
- `hero-mockup.html` K-Dispatch: fixed sidebar layout using new `.pmock-res2` rows (colored dot + name/status), widened to 115px; improved kanban column headers with stronger accent colors and border lines
- `hero-mockup.html` K-Traffic: replaced signal grid with SVG traffic map showing colored route lines (green/orange/red flow) and floating accident camera popup (CAM-031)
- `hero-mockup.html` K-Video: replaced blank feeds with 4 SVG-drawn street scenes including AI bounding box on accident feed; added video controls bar (Record, Pause, Stop, scrubber, Snapshot, Fullscreen)
- `hero-mockup.html` K-Connect: replaced report list with citizen phone mockup showing incident-reporting app UI (category picker, location field, description, submit button)

---

## [0.12] 2026-03-17 — About page: Customer Success & Services section

**Added**
- `about.html`: New "Customer Success & Services" section with 5 prominent service cards — 24/7 Support, Dedicated Customer Success, Training, Professional Services, and White Glove Service
- Each card has a colored accent border, icon, labeled tag, title, and description; fully responsive (5-col → 3-col → 2-col → 1-col)

---

## [0.13] 2026-03-17 — Product section HTML/CSS mock dashboards

**Improved**
- `hero-mockup.html`: Replaced all 5 static AVIF product screenshots with inline HTML/CSS operational dashboard panels inspired by the actual KabatOne admin prototype
- K-Safety: dark GIS map with SVG road grid, colored incident dots, dashed radius ring, and live "Eventos Cercanos" incident table overlay
- K-Dispatch: Kanban board with resource sidebar (7 units) and 4 workflow columns, real incident cards with priority badges (ALTA/MEDIA/BAJA)
- K-Traffic: 2×2 signal status grid with live traffic light indicators and phase counters, plus metrics side panel
- K-Video: camera list sidebar with status dots + 2×2 dark camera feed grid with REC/SIN SEÑAL labels
- K-Connect: citizen report list with status badges + KPI grid and SLA progress bars

## [0.11] 2026-03-17 — Product section chrome frame & live stat chips

**Improved**
- `hero-mockup.html`: Redesigned product card screenshots with an app chrome frame (macOS-style traffic-light dots, product title, pulsing LIVE badge) and floating stat chips overlaying each screenshot — making each product feel like a live operational view
- Each product card now shows two contextual data chips: K-Safety (247 Units Live / 18 Active Incidents), K-Dispatch (24 Active Calls / 4.2m Avg Response), K-Traffic (142 Signals / 3 Violations/hr), K-Video (1,847 Cameras / 2 AI Alerts), K-Connect (1,204 Reports / 94% Resolved)
- Added colored glow shadow per product color to reinforce brand identity on each card

## [0.10] 2026-03-17 — Gray text contrast improvements across all pages

**Fixed**
- All 17 HTML pages: increased `--muted` from `#7b9db8` to `#9dbdd0` and `--dim` from `#94a3b8` to `#b4c4d4` — secondary text, labels, nav links, and descriptions are now noticeably more readable (contrast ratio improved from ~6:1 to ~8–9:1)
- `changelog.html`: fixed `--muted` which was incorrectly set to `#4a5c7a` (only ~2.7:1 contrast, failing WCAG AA) — now matches the corrected site-wide value
- `hero-mockup.html`: raised `.mpr-feed-label` opacity from `rgba(255,255,255,0.4)` to `rgba(255,255,255,0.65)` for better readability on small text

---

## [0.9] 2026-03-17 — Mobile nav missing on industry pages + logos overflow fix

**Fixed**
- All 7 industry pages (`industry-public-safety`, `industry-municipalities`, `industry-airport`, `industry-retail`, `industry-logistics`, `industry-ports`, `industry-stadiums`): Added missing mobile nav CSS, hamburger `<button>` HTML, and JS toggle/dropdown logic — these pages were showing the full desktop nav on mobile with no hamburger
- `hero-mockup.html`: Integration logos panel (`.int-logos-wall`) — added `overflow: hidden`, reduced horizontal padding `28px` → `20px`, changed `.int-grid` `max-width` from `440px` to `100%` to prevent right-column clipping on narrow viewports

---

## [0.8] 2026-03-17 — Mobile QA pass: layout, touch, and accessibility fixes

**Fixed**
- `hero-mockup.html`: Hamburger button tap target enlarged (`padding: 8px 4px` → `14px 11px`, span width `22px` → `24px`) to meet 44×44px minimum
- `hero-mockup.html`: Stat counters now pre-populated with real values (40/70/99/24) so they don't flash "0" if JS animation is delayed
- `hero-mockup.html`: Platform pillars grid (`.why-grid`) switches to single column below 480px (was 2-col at all mobile sizes)
- `hero-mockup.html`: Quote block padding reduced from `0 48px` to `0 20px` on screens ≤480px
- `hero-mockup.html`: CTA fine-print font size raised from `10px` to `12px`
- `hero-mockup.html`: Product demo panel height increased from `220px` to `260px` on mobile to reduce image clipping
- `hero-mockup.html`: Logo link `aria-label="KabatOne — Home"` added for screen reader accessibility
- `hero-mockup.html`: Module swipe animation fixed — removed `!important` from `transform: none` and `opacity: 1` in mobile media query; the `!important` was blocking JS inline transforms, causing panels to jump instead of slide
- `hero-mockup.html`: Footer logo — added `width: auto` to prevent potential stretching

---

## [0.7] 2026-03-17 — Nav & footer link fixes on remaining pages

**Fixed**
- `contact.html`: Industries nav item expanded from plain link to full dropdown (all 7 industry pages); About link fixed to `about.html`; "Book a Demo" button moved inside `<ul>` (was incorrectly outside)
- `about.html`: Contact link in nav and footer fixed to `contact.html` (was `#`)
- All 7 industry pages (`industry-public-safety`, `industry-municipalities`, `industry-airport`, `industry-retail`, `industry-logistics`, `industry-ports`, `industry-stadiums`): Footer Contact link fixed to `contact.html` (was `#`)

---

## [0.6] 2026-03-17 — Improved mobile swipe for modules carousel

**Improved**
- `hero-mockup.html`: Replaced basic touchstart/touchend swipe with a full drag-based animation system
  - Real-time panel dragging follows finger position during the swipe
  - Axis locking: distinguishes horizontal swipe from vertical scroll before committing to drag
  - Threshold-based commit (≥50 px) or snap-back if swipe is too short
  - Smooth cubic-bezier slide animation on commit and snap-back
  - Proper cleanup and state reset after each gesture
- `.mod-panel-right` height changed from fixed `260px` to `min-height: 260px; height: auto` so taller content is no longer clipped

---

## [0.5] 2026-03-17 — Changelog page created

**Added**
- `CHANGELOG.md` — source-of-truth change log for the repo
- `changelog.html` — public-facing changelog page matching site design
- AGENTS.md rule: all agents must update CHANGELOG.md before committing

---

## [0.4] 2026-03-17 — Nav & link fixes across all pages

**Fixed**
- Logo link now points to `hero-mockup.html` on all pages (was `#`)
- Footer "Contact" link on homepage now points to `contact.html` (was `#`)
- Contact form: replaced invalid Formspree URL with a JS `mailto:` handler — clicking "Send Message" now opens the user's email client with all fields pre-filled to `info@kabatone.com`
- `about.html`, all industry pages, all solution pages: minor nav + link corrections

---

## [0.3] 2026-03-17 — Mobile responsiveness

**Added**
- Hamburger nav menu (≤768px) on all 8 pages: hero-mockup, k-safety, k-dispatch, k-traffic, k-video, k-connect, solutions, contact
- Hamburger animates to × on open; closes on outside tap
- Mobile menu shows full nav including Solutions dropdown (flat, no hover required)
- Responsive layout CSS added to all 5 solution pages:
  - 900px: hero collapses to 1 column, hero mockup hidden, grids go 2-col
  - 640px: all grids go 1 column, padding reduced for small phones

**Fixed**
- Removed broken CSS rule `.nav-links li:not(:last-child) { display: none }` that was hiding all nav links on mobile in hero-mockup.html
- Nav hamburger touch target enlarged (14px padding, 24px width)
- Nav `position: fixed` on mobile so it stays visible while scrolling
- Product screen images fill full width at tablet breakpoint

---

## [0.2] 2026-03-17 — Solutions pages, contact page, industry pages

**Added**
- `k-safety.html` — K-Safety product page (GIS & Situational Awareness, accent #3b82f6)
- `k-dispatch.html` — K-Dispatch product page (Emergency Dispatch, accent #ef4444)
- `k-traffic.html` — K-Traffic product page (Traffic Management, accent #06b6d4)
- `k-video.html` — K-Video product page (Video Intelligence, accent #a855f7)
- `k-connect.html` — K-Connect product page (Citizen Engagement, accent #22c55e)
- `solutions.html` — Solutions overview page linking to all 5 products
- `contact.html` — Contact page with form, contact details (email, phone, HQ address, US office), social links (LinkedIn, Instagram, Facebook), global presence section
- `about.html` — About page
- `industry-public-safety.html`, `industry-municipalities.html`, `industry-airport.html`, `industry-retail.html`, `industry-logistics.html`, `industry-ports.html`, `industry-stadiums.html` — 7 industry vertical pages
- Products Section added to homepage (`hero-mockup.html`) between Proof and Why sections, pulling content from the 5 solution pages with CDN product icons
- Solutions dropdown added to nav on all pages (hover on desktop, flat list on mobile)
- Industries dropdown added to homepage nav
- All "Contact" nav links updated to point to `contact.html`

---

## [0.1] 2026-03-17 — Initial commit

**Added**
- `hero-mockup.html` — Main homepage: hero, modules carousel, products section CSS, proof/logos section, Why KabatOne, industries grid, platform section, bottom CTA
- `images/modules/` — Module screenshot assets (gis, dispatch, video, citizen, etc.)
- `AGENTS.md` — Multi-agent coordination file with design system, page structure, and git workflow rules
