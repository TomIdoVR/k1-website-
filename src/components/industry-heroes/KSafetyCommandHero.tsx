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
        @keyframes ksc-pulse { 0%,100%{opacity:1;transform:translate(-50%,-50%) scale(1)} 50%{opacity:0.5;transform:translate(-50%,-50%) scale(1.5)} }
        @keyframes ksc-ping  { 0%{transform:translate(-50%,-50%) scale(1);opacity:0.7} 100%{transform:translate(-50%,-50%) scale(2.8);opacity:0} }
        .ksc-dot-active { animation: ksc-pulse 1.2s ease-in-out infinite; }
        .ksc-dot-ping   { animation: ksc-ping  1.5s ease-out infinite; }
      `}</style>

      {/* Map + sidebar */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 88px', gap: 10 }}>

        {/* GIS Map */}
        <div style={{
          aspectRatio: '4/3',
          background: 'linear-gradient(145deg, #050e1f 0%, #071527 100%)',
          borderRadius: 8, border: '1px solid rgba(6,182,212,0.15)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Street grid */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 100 75" preserveAspectRatio="none">
            <g stroke="rgba(59,130,246,0.18)" strokeWidth="2.5">
              <line x1="0" y1="25" x2="100" y2="25" />
              <line x1="0" y1="50" x2="100" y2="50" />
              <line x1="33" y1="0" x2="33" y2="75" />
              <line x1="66" y1="0" x2="66" y2="75" />
            </g>
            <g stroke="rgba(59,130,246,0.07)" strokeWidth="1">
              <line x1="0" y1="12" x2="100" y2="12" />
              <line x1="0" y1="37" x2="100" y2="37" />
              <line x1="0" y1="62" x2="100" y2="62" />
              <line x1="17" y1="0" x2="17" y2="75" />
              <line x1="50" y1="0" x2="50" y2="75" />
              <line x1="83" y1="0" x2="83" y2="75" />
            </g>
          </svg>

          {/* Active incident (pulsing + ping ring) */}
          {mapMarkers.incidents.filter(m => m.active).map((m, i) => (
            <div key={i} style={{ position: 'absolute', left: m.x, top: m.y }}>
              <div className="ksc-dot-ping" style={{ position: 'absolute', width: 10, height: 10, borderRadius: '50%', background: '#ef4444', zIndex: 1 }} />
              <div className="ksc-dot-active" style={{ position: 'absolute', width: 10, height: 10, borderRadius: '50%', background: '#ef4444', boxShadow: '0 0 8px #ef4444', zIndex: 2 }} />
            </div>
          ))}
          {/* Pending incident */}
          {mapMarkers.incidents.filter(m => !m.active).map((m, i) => (
            <div key={i} style={{ position: 'absolute', left: m.x, top: m.y, width: 8, height: 8, borderRadius: '50%', background: '#f97316', boxShadow: '0 0 6px #f97316', transform: 'translate(-50%,-50%)' }} />
          ))}
          {/* Units */}
          {mapMarkers.units.map((u, i) => (
            <div key={i} style={{ position: 'absolute', left: u.x, top: u.y, width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 5px #22c55e', transform: 'translate(-50%,-50%)' }} />
          ))}
          {/* Cameras */}
          {mapMarkers.cameras.map((c, i) => (
            <div key={i} style={{ position: 'absolute', left: c.x, top: c.y, width: 5, height: 4, borderRadius: '1px', background: '#06b6d4', boxShadow: '0 0 4px #06b6d4', transform: 'translate(-50%,-50%)' }} />
          ))}

          {/* Legend */}
          <div style={{ position: 'absolute', bottom: 6, left: 8, display: 'flex', gap: 8 }}>
            {[['#ef4444','INC'],['#22c55e','UNIT'],['#06b6d4','CAM']].map(([c,l]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: c }} />
                <span style={{ fontFamily: 'monospace', fontSize: 7, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}>{l}</span>
              </div>
            ))}
          </div>
          <div style={{ position: 'absolute', top: 6, right: 8, fontFamily: 'monospace', fontSize: 8, color: '#22c55e', letterSpacing: '0.1em' }}>
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
