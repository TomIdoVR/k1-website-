import HeroPanel from '@/components/industry-heroes/HeroPanel'

const mapMarkers = {
  incidents: [
    { x: '31%', y: '53%', active: true },
    { x: '67%', y: '34%', active: false },
  ],
  units: [
    { x: '47%', y: '44%' },
    { x: '72%', y: '62%' },
    { x: '21%', y: '27%' },
  ],
  cameras: [
    { x: '18%', y: '15%' },
    { x: '54%', y: '8%' },
    { x: '82%', y: '48%' },
    { x: '38%', y: '68%' },
    { x: '62%', y: '22%' },
  ],
}

const incidents = [
  { id: '#4821', type: 'Armed Robbery', status: 'ACTIVE', color: '#ef4444' },
  { id: '#4822', type: 'Traffic Collision', status: 'DISPATCH', color: '#3b82f6' },
  { id: '#4819', type: 'Perimeter Alert', status: 'PENDING', color: '#f97316' },
]

const metrics = [
  { label: 'Incidents', val: '12', color: '#ef4444' },
  { label: 'Cameras', val: '5.4K', color: '#06b6d4' },
  { label: 'Units', val: '94', color: '#22c55e' },
  { label: 'Uptime', val: '99.9%', color: '#a855f7' },
]

export default function KSafetyCommandHero() {
  return (
    <HeroPanel label="LIVE — K-SAFETY COMMAND">
      <style>{`
        @keyframes ksc-pulse { 0%,100%{opacity:1;transform:translate(-50%,-50%) scale(1)} 50%{opacity:0.6;transform:translate(-50%,-50%) scale(1.6)} }
        @keyframes ksc-ping  { 0%{transform:translate(-50%,-50%) scale(1);opacity:0.8} 100%{transform:translate(-50%,-50%) scale(3.2);opacity:0} }
        @keyframes ksc-scan  { 0%{transform:translateY(-100%)} 100%{transform:translateY(500%)} }
        .ksc-dot-active { animation: ksc-pulse 1.2s ease-in-out infinite; }
        .ksc-dot-ping   { animation: ksc-ping  1.5s ease-out infinite; }
        .ksc-scan-line  { animation: ksc-scan  3s linear infinite; }
      `}</style>

      {/* Map + sidebar */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 88px', gap: 10 }}>

        {/* Blueprint Map */}
        <div style={{
          aspectRatio: '4/3',
          background: 'linear-gradient(160deg, #071630 0%, #0a1e3c 60%, #071630 100%)',
          borderRadius: 8,
          border: '1px solid rgba(147,197,253,0.25)',
          position: 'relative', overflow: 'hidden',
        }}>

          {/* Blueprint SVG — grid, roads, buildings, annotations */}
          <svg
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            viewBox="0 0 120 90"
            preserveAspectRatio="none"
          >
            {/* Fine background grid */}
            <defs>
              <pattern id="bp-fine" width="5" height="5" patternUnits="userSpaceOnUse">
                <path d="M5,0 L0,0 0,5" fill="none" stroke="rgba(147,197,253,0.06)" strokeWidth="0.3"/>
              </pattern>
              <pattern id="bp-major" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M20,0 L0,0 0,20" fill="none" stroke="rgba(147,197,253,0.14)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="120" height="90" fill="url(#bp-fine)" />
            <rect width="120" height="90" fill="url(#bp-major)" />

            {/* Major roads — thick white lines */}
            <g stroke="rgba(191,219,254,0.55)" strokeWidth="1.8" strokeLinecap="round">
              {/* Horizontal roads */}
              <line x1="0" y1="22" x2="120" y2="22" />
              <line x1="0" y1="45" x2="120" y2="45" />
              <line x1="0" y1="68" x2="120" y2="68" />
              {/* Vertical roads */}
              <line x1="30" y1="0" x2="30" y2="90" />
              <line x1="60" y1="0" x2="60" y2="90" />
              <line x1="90" y1="0" x2="90" y2="90" />
            </g>

            {/* Secondary roads — thinner */}
            <g stroke="rgba(147,197,253,0.28)" strokeWidth="0.8">
              <line x1="0" y1="11" x2="120" y2="11" />
              <line x1="0" y1="33" x2="120" y2="33" />
              <line x1="0" y1="56" x2="120" y2="56" />
              <line x1="0" y1="79" x2="120" y2="79" />
              <line x1="15" y1="0" x2="15" y2="90" />
              <line x1="45" y1="0" x2="45" y2="90" />
              <line x1="75" y1="0" x2="75" y2="90" />
              <line x1="105" y1="0" x2="105" y2="90" />
            </g>

            {/* Building footprints — blueprint outlines */}
            <g fill="rgba(147,197,253,0.06)" stroke="rgba(147,197,253,0.3)" strokeWidth="0.5">
              <rect x="3"   y="3"   width="10" height="6"  rx="0.5"/>
              <rect x="3"   y="14"  width="9"  height="5"  rx="0.5"/>
              <rect x="17"  y="3"   width="11" height="7"  rx="0.5"/>
              <rect x="17"  y="14"  width="7"  height="5"  rx="0.5"/>
              <rect x="32"  y="3"   width="12" height="8"  rx="0.5"/>
              <rect x="32"  y="14"  width="8"  height="5"  rx="0.5"/>
              <rect x="47"  y="3"   width="11" height="6"  rx="0.5"/>
              <rect x="47"  y="14"  width="10" height="5"  rx="0.5"/>
              <rect x="62"  y="3"   width="10" height="7"  rx="0.5"/>
              <rect x="62"  y="14"  width="8"  height="5"  rx="0.5"/>
              <rect x="77"  y="3"   width="11" height="7"  rx="0.5"/>
              <rect x="77"  y="14"  width="9"  height="5"  rx="0.5"/>
              <rect x="93"  y="3"   width="12" height="8"  rx="0.5"/>
              <rect x="93"  y="14"  width="7"  height="5"  rx="0.5"/>
              <rect x="108" y="3"   width="9"  height="7"  rx="0.5"/>

              <rect x="3"   y="25"  width="10" height="6"  rx="0.5"/>
              <rect x="3"   y="35"  width="9"  height="7"  rx="0.5"/>
              <rect x="17"  y="25"  width="11" height="5"  rx="0.5"/>
              <rect x="17"  y="35"  width="8"  height="7"  rx="0.5"/>
              <rect x="32"  y="25"  width="10" height="6"  rx="0.5"/>
              <rect x="32"  y="35"  width="11" height="7"  rx="0.5"/>
              <rect x="47"  y="25"  width="11" height="6"  rx="0.5"/>
              <rect x="47"  y="35"  width="9"  height="8"  rx="0.5"/>
              <rect x="62"  y="25"  width="10" height="5"  rx="0.5"/>
              <rect x="62"  y="35"  width="11" height="7"  rx="0.5"/>
              <rect x="77"  y="25"  width="11" height="6"  rx="0.5"/>
              <rect x="77"  y="35"  width="8"  height="7"  rx="0.5"/>
              <rect x="93"  y="25"  width="10" height="5"  rx="0.5"/>
              <rect x="93"  y="35"  width="12" height="7"  rx="0.5"/>
              <rect x="108" y="25"  width="9"  height="6"  rx="0.5"/>
              <rect x="108" y="35"  width="8"  height="7"  rx="0.5"/>

              <rect x="3"   y="48"  width="10" height="6"  rx="0.5"/>
              <rect x="3"   y="59"  width="9"  height="6"  rx="0.5"/>
              <rect x="17"  y="48"  width="11" height="7"  rx="0.5"/>
              <rect x="17"  y="59"  width="8"  height="5"  rx="0.5"/>
              <rect x="32"  y="48"  width="10" height="6"  rx="0.5"/>
              <rect x="32"  y="59"  width="11" height="7"  rx="0.5"/>
              <rect x="47"  y="48"  width="11" height="5"  rx="0.5"/>
              <rect x="47"  y="59"  width="9"  height="6"  rx="0.5"/>
              <rect x="62"  y="48"  width="10" height="6"  rx="0.5"/>
              <rect x="62"  y="59"  width="11" height="7"  rx="0.5"/>
              <rect x="77"  y="48"  width="11" height="5"  rx="0.5"/>
              <rect x="77"  y="59"  width="8"  height="6"  rx="0.5"/>
              <rect x="93"  y="48"  width="12" height="6"  rx="0.5"/>
              <rect x="93"  y="59"  width="9"  height="5"  rx="0.5"/>
              <rect x="108" y="48"  width="9"  height="6"  rx="0.5"/>
              <rect x="108" y="59"  width="8"  height="7"  rx="0.5"/>

              <rect x="3"   y="71"  width="10" height="7"  rx="0.5"/>
              <rect x="3"   y="81"  width="9"  height="6"  rx="0.5"/>
              <rect x="17"  y="71"  width="11" height="5"  rx="0.5"/>
              <rect x="17"  y="81"  width="8"  height="6"  rx="0.5"/>
              <rect x="32"  y="71"  width="10" height="7"  rx="0.5"/>
              <rect x="32"  y="81"  width="11" height="6"  rx="0.5"/>
              <rect x="47"  y="71"  width="11" height="6"  rx="0.5"/>
              <rect x="47"  y="81"  width="9"  height="7"  rx="0.5"/>
              <rect x="62"  y="71"  width="10" height="7"  rx="0.5"/>
              <rect x="62"  y="81"  width="8"  height="6"  rx="0.5"/>
              <rect x="77"  y="71"  width="11" height="5"  rx="0.5"/>
              <rect x="77"  y="81"  width="9"  height="6"  rx="0.5"/>
              <rect x="93"  y="71"  width="12" height="7"  rx="0.5"/>
              <rect x="93"  y="81"  width="7"  height="6"  rx="0.5"/>
              <rect x="108" y="71"  width="9"  height="7"  rx="0.5"/>
              <rect x="108" y="81"  width="8"  height="6"  rx="0.5"/>
            </g>

            {/* Grid coordinate labels — top */}
            <g fill="rgba(147,197,253,0.4)" fontFamily="monospace" fontSize="3.2" textAnchor="middle">
              <text x="15" y="2">A</text>
              <text x="45" y="2">B</text>
              <text x="75" y="2">C</text>
              <text x="105" y="2">D</text>
            </g>
            {/* Grid coordinate labels — left */}
            <g fill="rgba(147,197,253,0.4)" fontFamily="monospace" fontSize="3.2" textAnchor="end">
              <text x="2" y="11.5">1</text>
              <text x="2" y="34">2</text>
              <text x="2" y="56.5">3</text>
              <text x="2" y="79">4</text>
            </g>

            {/* North arrow — top right */}
            <g transform="translate(113,6)">
              <line x1="0" y1="5" x2="0" y2="-5" stroke="rgba(147,197,253,0.7)" strokeWidth="0.7"/>
              <polygon points="0,-5 -1.5,0 0,-2 1.5,0" fill="rgba(147,197,253,0.7)"/>
              <text x="0" y="8" textAnchor="middle" fontFamily="monospace" fontSize="3" fill="rgba(147,197,253,0.6)">N</text>
            </g>

            {/* Scale bar — bottom right */}
            <g transform="translate(88,85)">
              <line x1="0" y1="0" x2="20" y2="0" stroke="rgba(147,197,253,0.5)" strokeWidth="0.6"/>
              <line x1="0" y1="-1.5" x2="0" y2="1.5" stroke="rgba(147,197,253,0.5)" strokeWidth="0.6"/>
              <line x1="20" y1="-1.5" x2="20" y2="1.5" stroke="rgba(147,197,253,0.5)" strokeWidth="0.6"/>
              <text x="10" y="-2" textAnchor="middle" fontFamily="monospace" fontSize="2.5" fill="rgba(147,197,253,0.45)">500 m</text>
            </g>

            {/* Scan line effect */}
            <rect className="ksc-scan-line" x="0" y="0" width="120" height="3"
              fill="url(#bp-scan-grad)" opacity="0.12" />
            <defs>
              <linearGradient id="bp-scan-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#93c5fd" stopOpacity="0"/>
                <stop offset="50%" stopColor="#93c5fd" stopOpacity="1"/>
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>

          {/* Active incident — pulsing crosshair */}
          {mapMarkers.incidents.filter(m => m.active).map((m, i) => (
            <div key={i} style={{ position: 'absolute', left: m.x, top: m.y }}>
              {/* Ping ring */}
              <div className="ksc-dot-ping" style={{ position: 'absolute', width: 14, height: 14, borderRadius: '50%', border: '1.5px solid #ef4444', zIndex: 1 }} />
              {/* Core dot */}
              <div className="ksc-dot-active" style={{ position: 'absolute', width: 6, height: 6, borderRadius: '50%', background: '#ef4444', boxShadow: '0 0 10px #ef4444, 0 0 20px rgba(239,68,68,0.4)', zIndex: 2 }} />
              {/* Crosshair lines */}
              <div style={{ position: 'absolute', left: 3, top: -8, width: '1px', height: '6px', background: 'rgba(239,68,68,0.6)', transform: 'translateX(-50%)' }} />
              <div style={{ position: 'absolute', left: 3, top: 5, width: '1px', height: '6px', background: 'rgba(239,68,68,0.6)', transform: 'translateX(-50%)' }} />
              <div style={{ position: 'absolute', left: -8, top: 3, width: '6px', height: '1px', background: 'rgba(239,68,68,0.6)', transform: 'translateY(-50%)' }} />
              <div style={{ position: 'absolute', left: 5, top: 3, width: '6px', height: '1px', background: 'rgba(239,68,68,0.6)', transform: 'translateY(-50%)' }} />
            </div>
          ))}

          {/* Pending incident — diamond marker */}
          {mapMarkers.incidents.filter(m => !m.active).map((m, i) => (
            <div key={i} style={{ position: 'absolute', left: m.x, top: m.y, transform: 'translate(-50%,-50%) rotate(45deg)', width: 7, height: 7, border: '1.5px solid #f97316', boxShadow: '0 0 6px rgba(249,115,22,0.5)' }} />
          ))}

          {/* Units — triangle markers */}
          {mapMarkers.units.map((u, i) => (
            <div key={i} style={{ position: 'absolute', left: u.x, top: u.y, transform: 'translate(-50%,-50%)' }}>
              <svg width="9" height="9" viewBox="0 0 9 9">
                <polygon points="4.5,1 8,8 1,8" fill="none" stroke="#22c55e" strokeWidth="1.2" style={{ filter: 'drop-shadow(0 0 3px #22c55e)' }} />
              </svg>
            </div>
          ))}

          {/* Cameras — square bracket markers */}
          {mapMarkers.cameras.map((c, i) => (
            <div key={i} style={{ position: 'absolute', left: c.x, top: c.y, transform: 'translate(-50%,-50%)', width: 7, height: 7, border: '1px solid #06b6d4', boxShadow: '0 0 4px rgba(6,182,212,0.5)' }}>
              <div style={{ position: 'absolute', inset: '1.5px', background: 'rgba(6,182,212,0.15)' }} />
            </div>
          ))}

          {/* Blueprint watermark label */}
          <div style={{ position: 'absolute', top: 5, left: 7, fontFamily: 'monospace', fontSize: 6, color: 'rgba(147,197,253,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            GRID REF: 19°26′N 99°08′W
          </div>

          {/* Legend */}
          <div style={{ position: 'absolute', bottom: 6, left: 8, display: 'flex', gap: 8 }}>
            {([['#ef4444','INC'],['#22c55e','UNIT'],['#06b6d4','CAM']] as [string,string][]).map(([c,l]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <div style={{ width: 5, height: 5, border: `1px solid ${c}`, background: 'transparent' }} />
                <span style={{ fontFamily: 'monospace', fontSize: 7, color: 'rgba(147,197,253,0.45)', letterSpacing: '0.08em' }}>{l}</span>
              </div>
            ))}
          </div>

          <div style={{ position: 'absolute', top: 5, right: 22, fontFamily: 'monospace', fontSize: 7.5, color: '#22c55e', letterSpacing: '0.1em' }}>
            94 UNITS
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {metrics.map((m) => (
            <div key={m.label} style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border)',
              borderLeft: `2px solid ${m.color}`,
              borderRadius: 6, padding: '7px 9px',
            }}>
              <div style={{ fontFamily: 'monospace', fontSize: 7.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 2 }}>{m.label}</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 15, color: m.color }}>{m.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Incident list */}
      <div style={{ marginTop: 10 }}>
        {incidents.map((inc) => (
          <div key={inc.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: inc.color, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 11, fontWeight: 600 }}>{inc.type}</div>
                <div style={{ fontSize: 9, color: 'var(--muted)', fontFamily: 'monospace' }}>{inc.id}</div>
              </div>
            </div>
            <span style={{ fontSize: 9, fontWeight: 700, color: inc.color, fontFamily: 'monospace', letterSpacing: '0.08em' }}>{inc.status}</span>
          </div>
        ))}
      </div>
    </HeroPanel>
  )
}
