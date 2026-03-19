import HeroPanel from '@/components/industry-heroes/HeroPanel'

const piers = [
  { left: '15%', top: '48%', width: '12%', height: '6%' },
  { left: '35%', top: '48%', width: '12%', height: '6%' },
  { left: '55%', top: '48%', width: '12%', height: '6%' },
  { left: '75%', top: '48%', width: '12%', height: '6%' },
]

const vessels = [
  { left: '14%', top: '57%', width: '14%', height: '5%' },
  { left: '54%', top: '57%', width: '14%', height: '5%' },
]

const markers = [
  { left: '32%', top: '68%' },
  { left: '70%', top: '75%' },
]

const stats = [
  { value: '12', label: 'Vessels', color: '#10b981' },
  { value: '847', label: 'Cameras' },
  { value: '99.9%', label: 'Uptime', color: '#10b981' },
]

export default function PortCommandHero() {
  return (
    <>
      <style>{`
        @keyframes pc-blink { 0%,100%{opacity:1} 50%{opacity:.3} }
      `}</style>
      <HeroPanel label="LIVE — PORT OPERATIONS">
        {/* Port map */}
        <div style={{
          width: '100%', aspectRatio: '4/3', position: 'relative', overflow: 'hidden',
          background: 'linear-gradient(180deg, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.08) 60%, rgba(6,182,212,0.12) 100%)',
          border: '1px solid rgba(59,130,246,0.15)', borderRadius: '10px',
        }}>
          {/* Land */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '65%',
            background: 'rgba(59,130,246,0.04)',
          }} />
          {/* Water */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
            background: 'linear-gradient(180deg, rgba(6,182,212,0.08), rgba(6,182,212,0.18))',
            borderTop: '1px solid rgba(6,182,212,0.2)',
          }} />
          {/* Piers */}
          {piers.map((p, i) => (
            <div key={i} style={{
              position: 'absolute', ...p,
              background: 'rgba(59,130,246,0.25)', border: '1px solid rgba(59,130,246,0.4)', borderRadius: '2px',
            }} />
          ))}
          {/* Vessels */}
          {vessels.map((v, i) => (
            <div key={i} style={{ position: 'absolute', ...v,
              background: 'rgba(6,182,212,0.3)', border: '1px solid rgba(6,182,212,0.5)', borderRadius: '3px',
            }}>
              <span style={{
                position: 'absolute', right: '-4px', top: '50%', transform: 'translateY(-50%)',
                width: 0, height: 0, display: 'block',
                borderLeft: '6px solid rgba(6,182,212,0.5)',
                borderTop: '4px solid transparent', borderBottom: '4px solid transparent',
              }} />
            </div>
          ))}
          {/* Radar rings */}
          <div style={{
            position: 'absolute', right: '10%', bottom: '25%',
            width: '70px', height: '70px', marginRight: '-35px', marginBottom: '-35px',
            borderRadius: '50%', border: '1px solid rgba(6,182,212,0.15)',
          }} />
          <div style={{
            position: 'absolute', right: '10%', bottom: '25%',
            width: '40px', height: '40px', marginRight: '-20px', marginBottom: '-20px',
            borderRadius: '50%', border: '1px solid rgba(6,182,212,0.15)',
          }} />
          <div style={{
            position: 'absolute', right: '10%', bottom: '25%',
            width: '8px', height: '8px', marginRight: '-4px', marginBottom: '-4px',
            borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 10px var(--cyan)',
          }} />
          {/* Vessel markers */}
          {markers.map((m, i) => (
            <div key={i} style={{
              position: 'absolute', left: m.left, top: m.top,
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#f59e0b', boxShadow: '0 0 8px #f59e0b',
              animation: 'pc-blink 2s ease-in-out infinite',
            }} />
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginTop: '12px' }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '10px 12px', textAlign: 'center',
            }}>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                fontSize: '18px', color: s.color || 'var(--white)',
              }}>{s.value}</div>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: '9px',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--muted)', marginTop: '2px',
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </HeroPanel>
    </>
  )
}
