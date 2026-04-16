# Detect-stage Flow Panel — Design

**Date:** 2026-04-16
**Scope:** Split the Stage 01 DETECT cinematic panel into two halves. Left half keeps the current background-image + detection overlay. Right half renders an n8n-style flowchart describing the system's detection logic for that scenario.

**Rollout plan:** Build + ship for the **LPR scenario** first. Once approved, add scenario-specific flows to `access-control`, `violence`, `school`, and `medical`.

---

## Goals

- Make the DETECT stage tell a second story: *how* the system detected the event, not just *what* it detected.
- Custom flow per scenario (approved direction — not a shared generic flow).
- Visual language inspired by n8n (dark canvas, faint dot-grid, rounded nodes with icons, curved bezier connectors, a single animated "data packet" dot traversing the path on stage enter).

## Non-goals

- No user interactivity. Nodes are not clickable.
- No editor / controls.
- No loop animation — one-shot on first render.

---

## Visual spec

- **Canvas:** `#0a1520` background, radial dot-grid overlay (`rgba(173,198,255,0.08)`, 24 px spacing).
- **Nodes:** 180×68 px rounded rectangles, `rgba(255,255,255,0.04)` fill, `1 px rgba(173,198,255,0.18)` border. Active / highlighted node: border → `rgba(59,158,255,0.8)`, glow `0 0 24 px rgba(59,158,255,0.25)`.
- **Layout:** vertical — nodes stack top-to-bottom to fit the tall right-panel aspect. Connector from bottom-center of each node to top-center of the next.
- **Connectors:** SVG cubic bezier paths, stroke `#3B9EFF`, width 2 px, opacity 0.8. A single 4 px circle packet travels from node 1 → final node once on stage enter (no loop).
- **Branch:** the "no match" exit from the rule-match node is a dashed grey path to a dimmed "retrospective log" node.
- **Terminal edge:** final node has an outgoing arrow labeled `→ STAGE 02: UNDERSTAND` in the same muted blue the stage nav uses.

## Node anatomy

Each node has:
- Left: 40×40 icon tile (Material Symbols Outlined, colored per node type).
- Right: two lines — bold uppercase title (letter-spacing `0.08em`, 10 px) + subtitle (mono, 9 px, `rgba(173,198,255,0.6)`).
- Optional right-edge accent bar when the node is "active" in the packet animation.

## LPR scenario flow (first rollout)

| # | Title              | Subtitle                       | Icon                | Type    |
|---|--------------------|--------------------------------|---------------------|---------|
| 1 | CAPTURE            | CAM 402 · Live feed 30 fps     | videocam            | sensor  |
| 2 | PLATE EXTRACTION   | OCR · 7JKY442                  | document_scanner    | ai      |
| 3 | HOTLIST MATCH      | Regional stolen DB · 4.2M rec  | database            | rule    |
| 4 | AI PRIORITIZATION  | Threat · HIGH · Case TX-2024-8821 | auto_awesome     | ai      |
| 5 | EVENT TRIGGERED    | → STAGE 02: UNDERSTAND          | bolt                | event   |

Plus one branch off node 3 (no match): dimmed node `RETROSPECTIVE LOG — stored for later analysis`, dashed grey connector, packet never travels this edge.

## Architecture

```
SplitLayout.tsx / understand panels ─ (unchanged)

StageScreen.tsx
  └── cinematic panel (line ~388)
       ├── if (isFirst && stage.detectFlow)                ← new branch
       │     ├── LEFT  — current bg-image + detectOverlay (50% width)
       │     └── RIGHT — <DetectFlowPanel flow={stage.detectFlow}/> (50% width)
       └── else                                            ← existing code path
             └── full-width bg-image + overlays
```

### New files

- `src/components/demo/DetectFlowPanel.tsx` — the flowchart renderer. Self-contained. Takes a `DetectFlow` data shape and draws nodes + connectors + animation.

### Modified files

- `src/data/demo/types.ts` — add optional `detectFlow?: DetectFlow` to `Stage`. `DetectFlow` = `{ nodes: Node[]; branch?: Node; connectorColor?: string }` where `Node = { id; title; subtitle; icon; type: 'sensor'|'ai'|'rule'|'event'|'retro' }`.
- `src/components/demo/StageScreen.tsx` — when `isFirst && stage.detectFlow`, render the panel as a 2-column grid (left: existing overlay stack, right: `<DetectFlowPanel/>`). Mobile: stacks vertically (flow below bg).
- `src/data/demo/lpr.ts` — add `detectFlow` for Stage 01 with the 5 LPR nodes above + `retro` branch.

### Follow-up (after LPR ships & is approved)

- Add `detectFlow` to Stage 01 of `access-control.ts`, `violence.ts`, `school.ts`, `medical.ts` — scenario-specific nodes (different sources, different rule engines, different event types).

## Responsive behaviour

- ≥ 900 px viewport: 50 / 50 split.
- 600–900 px: 60 / 40 (bg gets a bit more, flow stays readable).
- < 600 px: stacked — bg on top at original aspect, flow below.

## Animation timeline (stage enter, one-shot, no loop)

| t (ms) | event                                               |
|--------|-----------------------------------------------------|
| 0      | Left panel renders (existing bg + overlay)          |
| 200    | Flow canvas fades in                                |
| 400    | Node 1 fades in                                     |
| 700    | Node 2 fades in + connector 1→2 draws               |
| 1000   | Node 3 fades in + connector 2→3 draws               |
| 1200   | Branch + retro node fade in (dimmed)                |
| 1300   | Node 4 fades in + connector 3→4 draws               |
| 1600   | Node 5 fades in + connector 4→5 draws + pulse       |
| 1800   | Packet dot traverses node 1 → 5 once (~1200 ms)     |
| 3000   | Final arrow to `→ STAGE 02: UNDERSTAND` pulses once |

## Testing

- Manual visual check on the LPR `/demo` route at full desktop and mobile widths.
- Verify existing scenarios (that have no `detectFlow` set) render unchanged.
- Typecheck passes.

## Out of scope

- No changes to DETECT stages that use `detectCard` (call-intake, panic-alert, access-breach) — those already have rich right-side UI.
- No changes to Stage 02+ layouts.
