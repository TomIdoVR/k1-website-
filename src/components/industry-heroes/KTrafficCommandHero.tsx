import HeroPanel from '@/components/industry-heroes/HeroPanel'

const ACCENT = '#06b6d4'

const signals = [
  { color: '#22c55e', name: 'Main &\n1st Ave' },
  { color: '#ef4444', name: 'Elm &\nHarbor' },
  { color: '#eab308', name: 'Central\nLoop' },
  { color: ACCENT,   name: 'Route\n7 North' },
]

const footerStats = [
  { val: '247', label: 'Monitored Intersections' },
  { val: '3',   label: 'Active Incidents', color: '#ef4444' },
  { val: '42 km/h', label: 'Avg Speed' },
]

export default function KTrafficCommandHero() {
  return (
    <HeroPanel label="LIVE — K-TRAFFIC COMMAND">
      <style>{`
        @keyframes ktc-blink { 0%,100%{opacity:1} 50%{opacity:0.35} }
        @keyframes ktc-pulse { 0%{transform:scale(1);opacity:0.7} 100%{transform:scale(2.6);opacity:0} }
        .ktc-inc { animation: ktc-blink 1.1s ease-in-out infinite; }
        .ktc-ping { animation: ktc-pulse 1.4s ease-out infinite; }
      `}</style>

      {/* Signal + Map grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr' }}>

        {/* Signal Panel */}
        <div style={{ borderRight: '1px solid var(--border)', padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: '13px' }}>
          <div style={{ fontFamily: 'monospace', fontSize: '8px', letterSpacing: '0.12em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '2px' }}>
            Signals
          </div>
          {signals.map((sig, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '13px', height: '13px', borderRadius: '50%', background: sig.color, boxShadow: `0 0 9px ${sig.color}aa` }} />
              <div style={{ fontFamily: 'monospace', fontSize: '7.5px', color: 'var(--muted)', textAlign: 'center', letterSpacing: '0.07em', whiteSpace: 'pre-line', lineHeight: 1.3 }}>{sig.name}</div>
            </div>
          ))}
        </div>

        {/* Map Area */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>

          {/* SVG City Grid */}
          <div style={{ flex: 1, background: '#060d18', position: 'relative', overflow: 'hidden' }}>
            <svg viewBox="0 0 278 138" style={{ width: '100%', height: '100%', display: 'block' }}>
              <rect width="278" height="138" fill="#060d18"/>
              {/* City blocks */}
              <rect x="0"   y="0"  width="77"  height="59" fill="#0c1826"/>
              <rect x="89"  y="0"  width="81"  height="59" fill="#0c1826"/>
              <rect x="182" y="0"  width="96"  height="59" fill="#0c1826"/>
              <rect x="0"   y="71" width="77"  height="67" fill="#0c1826"/>
              <rect x="89"  y="71" width="81"  height="67" fill="#0c1826"/>
              <rect x="182" y="71" width="96"  height="67" fill="#0c1826"/>
              {/* Roads */}
              <rect x="77"  y="0"  width="12" height="138" fill="#101c2c"/>
              <rect x="170" y="0"  width="12" height="138" fill="#101c2c"/>
              <rect x="0"   y="59" width="278" height="12" fill="#101c2c"/>
              {/* Center dashes */}
              <line x1="83"  y1="2"  x2="83"  y2="59"  stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="5,5"/>
              <line x1="83"  y1="71" x2="83"  y2="136" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="5,5"/>
              <line x1="176" y1="2"  x2="176" y2="59"  stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="5,5"/>
              <line x1="176" y1="71" x2="176" y2="136" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="5,5"/>
              <line x1="2"   y1="65" x2="77"  y2="65"  stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="5,5"/>
              <line x1="89"  y1="65" x2="170" y2="65"  stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="5,5"/>
              <line x1="182" y1="65" x2="276" y2="65"  stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="5,5"/>
              {/* Traffic flow overlays */}
              <rect x="0"   y="59" width="77" height="6"  fill="rgba(249,115,22,0.6)"/>
              <rect x="89"  y="59" width="81" height="6"  fill="rgba(239,68,68,0.55)"/>
              <rect x="182" y="59" width="96" height="6"  fill="rgba(34,197,94,0.5)"/>
              <rect x="77"  y="0"  width="5"  height="138" fill="rgba(34,197,94,0.4)"/>
              <rect x="170" y="0"  width="5"  height="59"  fill="rgba(239,68,68,0.5)"/>
              <rect x="170" y="71" width="5"  height="67"  fill="rgba(234,179,8,0.45)"/>
              {/* Intersection tints */}
              <rect x="170" y="59" width="12" height="12" fill="rgba(239,68,68,0.2)"/>
              <rect x="77"  y="59" width="12" height="12" fill="rgba(249,115,22,0.2)"/>
              {/* Building accent dots */}
              <circle cx="28"  cy="20"  r="2"   fill="rgba(6,182,212,0.22)"/>
              <circle cx="56"  cy="42"  r="1.5" fill="rgba(6,182,212,0.16)"/>
              <circle cx="120" cy="16"  r="2"   fill="rgba(6,182,212,0.22)"/>
              <circle cx="222" cy="24"  r="2"   fill="rgba(6,182,212,0.22)"/>
              <circle cx="28"  cy="96"  r="2"   fill="rgba(6,182,212,0.18)"/>
              <circle cx="118" cy="104" r="2"   fill="rgba(6,182,212,0.18)"/>
              <circle cx="222" cy="92"  r="2"   fill="rgba(6,182,212,0.18)"/>
              {/* Incident pulses (drawn twice: ping ring + solid) */}
              <circle cx="176" cy="65" r="8" fill="rgba(239,68,68,0.12)" className="ktc-ping"/>
              <circle cx="176" cy="65" r="3" fill="#ef4444" opacity="0.9" className="ktc-inc"/>
              <circle cx="83"  cy="65" r="2.5" fill="#eab308" opacity="0.9"/>
              {/* Street labels */}
              <text x="3"   y="9" fontFamily="monospace" fontSize="5.5" fill="rgba(6,182,212,0.45)" letterSpacing="0.08em">MAIN ST</text>
              <text x="92"  y="9" fontFamily="monospace" fontSize="5.5" fill="rgba(6,182,212,0.4)"  letterSpacing="0.07em">ELM AVE</text>
              <text x="185" y="9" fontFamily="monospace" fontSize="5.5" fill="rgba(6,182,212,0.4)"  letterSpacing="0.07em">HARBOR</text>
              <rect width="278" height="138" fill="none" stroke="rgba(6,182,212,0.1)" strokeWidth="1"/>
            </svg>
          </div>

          {/* Bottom panels */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid var(--border)' }}>
            {/* Camera feed */}
            <div style={{ borderRight: '1px solid var(--border)' }}>
              <div style={{ background: 'linear-gradient(180deg,#050b14 0%,#0e1e2f 40%,#162439 60%,#050b14 100%)', padding: '5px 7px', minHeight: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '8px', color: 'rgba(6,182,212,0.75)', letterSpacing: '0.1em' }}>CAM-07</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '7px', color: '#ef4444', letterSpacing: '0.08em' }}>● REC</span>
                </div>
                <span style={{ fontFamily: 'monospace', fontSize: '7.5px', color: '#eab308', background: 'rgba(234,179,8,0.12)', border: '1px solid rgba(234,179,8,0.28)', padding: '2px 5px', borderRadius: '3px', letterSpacing: '0.09em', alignSelf: 'flex-start' }}>
                  ▲ SPEEDING
                </span>
              </div>
              <div style={{ padding: '4px 8px', fontFamily: 'monospace', fontSize: '7.5px', color: 'var(--muted)', letterSpacing: '0.07em', borderTop: '1px solid var(--border)' }}>
                Route 7 North — Highway
              </div>
            </div>
            {/* Incident card */}
            <div style={{ padding: '10px 11px', display: 'flex', flexDirection: 'column', gap: '3px', justifyContent: 'center' }}>
              <div style={{ fontFamily: 'monospace', fontSize: '8px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ef4444', marginBottom: '1px' }}>
                ⚠ ACTIVE INCIDENT
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: '8.5px', color: 'var(--white)', letterSpacing: '0.05em' }}>
                Main St × Central Blvd
              </div>
              <div style={{ fontSize: '8.5px', color: 'var(--dim)', lineHeight: 1.4 }}>
                Signal fault — manual override active
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: '7.5px', color: 'rgba(6,182,212,0.5)', letterSpacing: '0.07em', marginTop: '1px' }}>
                2 min ago
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--border)', marginTop: 0 }}>
        {footerStats.map((s, i) => (
          <div key={i} style={{ padding: '10px 12px', borderRight: i < 2 ? '1px solid var(--border)' : 'none', fontFamily: 'monospace' }}>
            <div style={{ fontSize: '13px', fontWeight: 500, color: s.color || 'var(--white)', letterSpacing: '0.02em' }}>{s.val}</div>
            <div style={{ fontSize: '8.5px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '2px' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </HeroPanel>
  )
}
