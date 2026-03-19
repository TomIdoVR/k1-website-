import HeroPanel from '@/components/industry-heroes/HeroPanel'

const gates = [
  { left: '22%', top: '30%', alert: false },
  { left: '40%', top: '20%', alert: false },
  { left: '62%', top: '35%', alert: true },
  { left: '75%', top: '55%', alert: false },
  { left: '30%', top: '65%', alert: false },
  { left: '55%', top: '70%', alert: false },
]

const zones = [
  { color: '#10b981', name: 'Terminal A — Departures', status: 'Secure' },
  { color: '#f59e0b', name: 'Gate C7 — Perimeter',    status: 'Reviewing' },
  { color: '#ef4444', name: 'Cargo Zone 3',            status: 'Alert Active' },
  { color: '#10b981', name: 'Access Control — Staff',  status: 'Normal' },
]

export default function AirportSecurityHero() {
  return (
    <>
      <style>{`
        @keyframes as-radar { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes as-blink { 0%,100%{opacity:1} 50%{opacity:.3} }
      `}</style>
      <HeroPanel label="LIVE — AIRPORT SECURITY">
        {/* Terminal map */}
        <div style={{
          width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden',
          background: 'rgba(6,182,212,0.03)', border: '1px solid rgba(59,130,246,0.15)',
          borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {/* Grid */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }} />
          {/* Terminal outline */}
          <div style={{
            position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
            width: '70%', height: '75%', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '6px',
          }} />
          {/* Radar sweep */}
          <div style={{
            position: 'absolute', left: '50%', top: '50%', width: '60%', aspectRatio: '1',
            borderRadius: '50%', border: '1px solid rgba(6,182,212,0.1)', transform: 'translate(-50%,-50%)',
            overflow: 'hidden',
          }}>
            <span style={{
              position: 'absolute', top: 0, left: '50%', width: '50%', height: '50%',
              transformOrigin: '0% 100%', display: 'block',
              background: 'linear-gradient(to right, transparent, rgba(6,182,212,0.15))',
              animation: 'as-radar 4s linear infinite',
            }} />
          </div>
          {/* Gate markers */}
          {gates.map((g, i) => (
            <div key={i} style={{
              position: 'absolute', left: g.left, top: g.top,
              width: '8px', height: '8px', borderRadius: '50%',
              background: g.alert ? '#ef4444' : 'var(--cyan)',
              boxShadow: g.alert ? '0 0 10px #ef4444' : '0 0 10px var(--cyan)',
              ...(g.alert ? { animation: 'as-blink 1.5s ease-in-out infinite' } : {}),
            }} />
          ))}
        </div>

        {/* Zone list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
          {zones.map((z, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px',
              background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '7px',
            }}>
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%', flexShrink: 0, background: z.color,
              }} />
              <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--white)', flex: 1 }}>
                {z.name}
              </span>
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: '10px',
                letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)',
              }}>{z.status}</span>
            </div>
          ))}
        </div>
      </HeroPanel>
    </>
  )
}
