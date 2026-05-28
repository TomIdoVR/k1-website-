'use client'

interface Unit {
  id: string
  status: string
  active: boolean
  coords: [number, number]
}

interface StaticMapPanelProps {
  incidentCoords: [number, number]
  units: Unit[]
}

function statusColor(status: string): string {
  if (status === 'ASSIGNED') return '#00C98A'
  if (status === 'EN ROUTE') return '#3B9EFF'
  if (status === 'STANDBY')  return '#f0c040'
  return 'rgba(193,198,215,0.45)'
}

/** Project [lat,lng] to SVG coords given bounding box */
function project(
  lat: number, lng: number,
  minLat: number, maxLat: number, minLng: number, maxLng: number,
  w: number, h: number, pad: number,
): [number, number] {
  const usableW = w - pad * 2
  const usableH = h - pad * 2
  const x = pad + ((lng - minLng) / (maxLng - minLng || 1)) * usableW
  // lat increases upward, svg y increases downward
  const y = pad + ((maxLat - lat) / (maxLat - minLat || 1)) * usableH
  return [x, y]
}

export default function StaticMapPanel({ incidentCoords, units }: StaticMapPanelProps) {
  const W = 600
  const H = 460
  const PAD = 56

  // Compute bounding box
  const allLats = [incidentCoords[0], ...units.map(u => u.coords[0])]
  const allLngs = [incidentCoords[1], ...units.map(u => u.coords[1])]
  const minLat = Math.min(...allLats)
  const maxLat = Math.max(...allLats)
  const minLng = Math.min(...allLngs)
  const maxLng = Math.max(...allLngs)

  // Expand bbox slightly so markers aren't on the edge
  const latPad = (maxLat - minLat) * 0.18 || 0.005
  const lngPad = (maxLng - minLng) * 0.18 || 0.005

  const proj = (lat: number, lng: number) =>
    project(lat, lng, minLat - latPad, maxLat + latPad, minLng - lngPad, maxLng + lngPad, W, H, PAD)

  const [ix, iy] = proj(...incidentCoords)

  return (
    <div style={{ width: '100%', height: '100%', background: '#0a131d', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes smp-pulse { 0%{transform:scale(1);opacity:0.8} 100%{transform:scale(2.4);opacity:0} }
        @keyframes smp-active { 0%{transform:scale(1);opacity:0.7} 100%{transform:scale(2.2);opacity:0} }
      `}</style>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height="100%"
        style={{ display: 'block', pointerEvents: 'none' }}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Dark map background with subtle grid */}
        <defs>
          <pattern id="smp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
          </pattern>
          <radialGradient id="smp-vignette" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="transparent"/>
            <stop offset="100%" stopColor="rgba(0,0,0,0.55)"/>
          </radialGradient>
          <filter id="smp-glow-red">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="smp-glow-blue">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="smp-glow-green">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <rect width={W} height={H} fill="#0a1520"/>
        <rect width={W} height={H} fill="url(#smp-grid)"/>

        {/* Subtle "road" lines as decorative background elements */}
        {units.map((u, i) => {
          const [ux, uy] = proj(...u.coords)
          // Generate a slightly curved road between units (decorative)
          const mx = (ux + ix) / 2 + (i % 2 === 0 ? 15 : -15)
          const my = (uy + iy) / 2 + (i % 2 === 0 ? -10 : 10)
          return (
            <path
              key={`road-${u.id}`}
              d={`M ${ux} ${uy} Q ${mx} ${my} ${ix} ${iy}`}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          )
        })}

        {/* Connection lines from units to incident */}
        {units.map((u) => {
          const [ux, uy] = proj(...u.coords)
          const c = statusColor(u.status)
          return (
            <line
              key={`line-${u.id}`}
              x1={ux} y1={uy} x2={ix} y2={iy}
              stroke={u.active ? c : 'rgba(255,255,255,0.08)'}
              strokeWidth={u.active ? 1.5 : 1}
              strokeDasharray={u.active ? '6 4' : '3 6'}
              opacity={u.active ? 0.65 : 0.2}
            />
          )
        })}

        {/* Vignette overlay */}
        <rect width={W} height={H} fill="url(#smp-vignette)"/>

        {/* Unit markers */}
        {units.map((u) => {
          const [ux, uy] = proj(...u.coords)
          const c = statusColor(u.status)
          return (
            <g key={`unit-${u.id}`}>
              {/* Active pulse ring */}
              {u.active && (
                <>
                  <circle cx={ux} cy={uy} r="14" fill="none" stroke={c} strokeWidth="1" opacity="0.3"/>
                  <circle cx={ux} cy={uy} r="8" fill={`${c}18`} stroke="none"/>
                </>
              )}
              {/* Unit dot */}
              <circle
                cx={ux} cy={uy} r="5"
                fill={c}
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="1.5"
                filter={u.active ? (u.status === 'EN ROUTE' ? 'url(#smp-glow-blue)' : 'url(#smp-glow-green)') : undefined}
              />
              {/* Label */}
              <rect
                x={ux - 28} y={uy - 20}
                width="56" height="12"
                rx="2"
                fill="rgba(8,16,26,0.88)"
                stroke={u.active ? c : 'rgba(255,255,255,0.12)'}
                strokeWidth="0.5"
              />
              <text
                x={ux} y={uy - 11}
                textAnchor="middle"
                fontSize="7"
                fontFamily="monospace"
                fontWeight="700"
                letterSpacing="0.1em"
                fill={u.active ? c : 'rgba(193,198,215,0.6)'}
              >
                {u.id}
              </text>
            </g>
          )
        })}

        {/* Incident marker */}
        <g>
          <circle cx={ix} cy={iy} r="20" fill="rgba(255,95,95,0.08)" stroke="rgba(255,95,95,0.25)" strokeWidth="1"/>
          <circle cx={ix} cy={iy} r="6" fill="#FF5F5F" stroke="white" strokeWidth="2" filter="url(#smp-glow-red)"/>
          {/* Incident label */}
          <rect x={ix - 34} y={iy - 28} width="68" height="13" rx="2" fill="rgba(255,95,95,0.15)" stroke="rgba(255,95,95,0.45)" strokeWidth="0.75"/>
          <text x={ix} y={iy - 18} textAnchor="middle" fontSize="8" fontFamily="monospace" fontWeight="800" letterSpacing="0.18em" fill="#FF8C8C">
            INCIDENT
          </text>
        </g>
      </svg>
    </div>
  )
}
