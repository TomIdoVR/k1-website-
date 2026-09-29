/* The hero art's motion layer.

   The art is one flat render, and it is the LCP element, so it stays exactly
   as it is — this is a separate SVG laid over it, drawn in the render's own
   pixel space (viewBox 0 0 1536 1024) and fitted with xMaxYMax/meet, which is
   what `object-fit: contain; object-position: right bottom` does to the <img>.
   The two share one box (.hsplit-frame), so every mark below lands on the
   feature it animates at any viewport. Coordinates were read off the file.

   Nothing here carries meaning — the layer is aria-hidden with its parent —
   and it is all CSS animation (home-motion.css), so reduced motion simply
   leaves it invisible.

   Moving marks sit at the origin and are placed by their keyframes through
   --x0/--y0 → --x1/--y1, so one keyframe rule serves every path. */

import type { CSSProperties } from 'react'

type P = [number, number]
const at = ([x0, y0]: P, [x1, y1]: P, delay = 0): CSSProperties =>
  ({ '--x0': `${x0}px`, '--y0': `${y0}px`, '--x1': `${x1}px`, '--y1': `${y1}px`, animationDelay: `${delay}s` }) as CSSProperties
const d = (s: number): CSSProperties => ({ animationDelay: `${s}s` })

/* The four floating glass panels, as quads — the glint is clipped to them. */
const PANELS = [
  '922,95 1495,82 1470,240 925,232',
  '890,255 1465,262 1440,440 885,405',
  '860,425 1430,462 1405,610 850,560',
  '835,575 1400,628 1380,770 830,705',
]

/* Units closing on the incident on the route map, from both ends. */
const ROUTE: [P, P, number][] = [
  [[1003, 527], [1104, 512], 0],
  [[1286, 533], [1140, 512], 1.4],
]

/* Light running down the connectors that join the panels to each other and
   the bottom one to the beacon on the ground. */
const LINKS: [P, P, number][] = [
  [[1160, 238], [1160, 262], 0],
  [[1135, 412], [1135, 438], 0.5],
  [[1112, 566], [1112, 596], 1],
  [[1013, 735], [1013, 782], 1.5],
]

/* Progress creeping along each unit's timeline toward its marker. */
const TRACKS: [P, P, number][] = [
  [[1082, 629], [1210, 643], 0],
  [[1076, 668], [1202, 684], 0.9],
  [[1069, 707], [1195, 725], 1.8],
]

/* Incidents surfacing across the city. Under the scrim, so deliberately
   faint — texture that says "live", not a second focal point. */
const PINGS: [number, number, string, number][] = [
  [520, 430, '#ef4444', 0],
  [690, 505, '#2563eb', 1.8],
  [612, 612, '#ef4444', 3.6],
  [782, 380, '#2563eb', 5.4],
  [468, 560, '#2563eb', 7.2],
]

const GLOW = { blue: '#2563eb', cyan: '#38bdf8' }

export default function HeroArtFx() {
  return (
    <svg className="hfx" viewBox="0 0 1536 1024" preserveAspectRatio="xMaxYMax meet" aria-hidden="true" focusable="false">
      <defs>
        {/* One gradient per colour: a stop's currentColor resolves where the
            gradient is defined, not where it is used. */}
        {Object.entries(GLOW).map(([k, c]) => (
          <radialGradient id={`hfx-glow-${k}`} key={k}>
            <stop offset="0" stopColor="#fff" stopOpacity="1" />
            <stop offset="0.35" stopColor={c} stopOpacity="0.9" />
            <stop offset="1" stopColor={c} stopOpacity="0" />
          </radialGradient>
        ))}
        <linearGradient id="hfx-glint" x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="hfx-panels">
          {PANELS.map((p) => <polygon key={p} points={p} />)}
        </clipPath>
      </defs>

      {/* glass glint across the panels */}
      <g clipPath="url(#hfx-panels)">
        {/* skew on the rect, travel on the group: a CSS transform on the rect
            itself would replace its skewX attribute */}
        <g className="hfx-glint">
          <rect x="-90" y="60" width="90" height="740" fill="url(#hfx-glint)" transform="skewX(-18)" />
        </g>
      </g>

      {/* city pings */}
      {PINGS.map(([x, y, c, s]) => (
        <g key={`${x}-${y}`} style={{ color: c }}>
          <circle className="hfx-ping-ring" cx={x} cy={y} r="14" fill="none" stroke="currentColor" strokeWidth="2" style={d(s)} />
          <circle className="hfx-ping-dot" cx={x} cy={y} r="4" fill="currentColor" style={d(s)} />
        </g>
      ))}

      {/* incident on the top map */}
      <circle className="hfx-radar" cx="1322" cy="160" r="30" fill="#ef4444" />
      <circle className="hfx-radar" cx="1322" cy="160" r="30" fill="#ef4444" style={d(1.2)} />

      {/* incident on the route map, and the units converging on it */}
      <circle className="hfx-radar hfx-radar--sm" cx="1122" cy="509" r="24" fill="#ef4444" style={d(0.6)} />
      {ROUTE.map(([a, b, s]) => (
        <circle key={`r${a}`} className="hfx-mover hfx-route" r="7" fill="url(#hfx-glow-blue)" style={at(a, b, s)} />
      ))}

      {/* connector pulses */}
      {LINKS.map(([a, b, s]) => (
        <circle key={`l${a}`} className="hfx-mover hfx-link" r="5" fill="url(#hfx-glow-cyan)" style={at(a, b, s)} />
      ))}

      {/* unit timelines */}
      {TRACKS.map(([a, b, s]) => (
        <circle key={`t${a}`} className="hfx-mover hfx-track" r="4.5" fill="url(#hfx-glow-blue)" style={at(a, b, s)} />
      ))}

      {/* ground beacon under the panels */}
      <ellipse className="hfx-beacon" cx="1012" cy="785" rx="20" ry="7" fill="none" stroke="#ef4444" strokeWidth="2" />
      <ellipse className="hfx-beacon" cx="1012" cy="785" rx="20" ry="7" fill="none" stroke="#ef4444" strokeWidth="2" style={d(1.2)} />

      {/* SOS on the phone */}
      <circle className="hfx-sos" cx="580" cy="740" r="24" fill="none" stroke="#ef4444" strokeWidth="3" />
    </svg>
  )
}
