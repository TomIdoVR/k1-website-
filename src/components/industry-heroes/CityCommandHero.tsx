import HeroPanel from '@/components/industry-heroes/HeroPanel'

const blocks = [
  { left: '12%', top: '15%', width: '18%', height: '12%' },
  { left: '35%', top: '8%',  width: '22%', height: '15%' },
  { left: '62%', top: '12%', width: '20%', height: '10%' },
  { left: '10%', top: '38%', width: '15%', height: '20%' },
  { left: '30%', top: '35%', width: '30%', height: '18%' },
  { left: '65%', top: '32%', width: '22%', height: '14%' },
  { left: '15%', top: '68%', width: '25%', height: '16%' },
  { left: '46%', top: '62%', width: '20%', height: '18%' },
  { left: '70%', top: '58%', width: '18%', height: '20%' },
]

const incidents = [
  { left: '40%', top: '42%', alert: false },
  { left: '68%', top: '36%', alert: true },
  { left: '22%', top: '72%', alert: false },
  { left: '55%', top: '68%', alert: true },
]

const metrics = [
  { name: 'Active Units', value: '247' },
  { name: 'Open Incidents', value: '14', color: '#ef4444' },
  { name: 'Avg Response', value: '7.2', suffix: 'min' },
  { name: 'Cameras Online', value: '1,284', color: '#10b981' },
]

export default function CityCommandHero() {
  return (
    <>
      <style>{`
        @keyframes cc-pulse { 0%,100%{opacity:1} 50%{opacity:.6} }
        @keyframes cc-ring { 0%{transform:scale(1);opacity:.7} 100%{transform:scale(2.5);opacity:0} }
      `}</style>
      <HeroPanel label="LIVE — PUBLIC SAFETY COMMAND">
        {/* City Map */}
        <div style={{
          width: '100%', aspectRatio: '4/3', position: 'relative', overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(6,182,212,0.04), rgba(59,130,246,0.06))',
          border: '1px solid rgba(59,130,246,0.15)', borderRadius: '10px',
        }}>
          {/* Grid */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          {/* Blocks */}
          {blocks.map((b, i) => (
            <div key={i} style={{
              position: 'absolute', ...b,
              background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '3px',
            }} />
          ))}
          {/* Incidents */}
          {incidents.map((inc, i) => (
            <div key={i} className="cc-incident" style={{
              position: 'absolute', left: inc.left, top: inc.top,
              width: '10px', height: '10px', borderRadius: '50%',
              background: inc.alert ? '#ef4444' : 'var(--cyan)',
              boxShadow: inc.alert ? '0 0 12px #ef4444' : '0 0 12px var(--cyan)',
              animation: 'cc-pulse 2.5s ease-out infinite',
            }}>
              <span style={{
                position: 'absolute', inset: '-6px', borderRadius: '50%',
                border: `1px solid ${inc.alert ? 'rgba(239,68,68,0.4)' : 'rgba(6,182,212,0.4)'}`,
                animation: 'cc-ring 2.5s ease-out infinite', display: 'block',
              }} />
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '12px' }}>
          {metrics.map((m, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '12px 14px',
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: '9px',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--muted)', marginBottom: '6px',
              }}>{m.name}</div>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                fontSize: '20px', color: m.color || 'var(--white)', letterSpacing: '0.02em',
              }}>
                {m.value}
                {m.suffix && <span style={{ fontSize: '14px', color: 'var(--muted)' }}>{m.suffix}</span>}
              </div>
            </div>
          ))}
        </div>
      </HeroPanel>
    </>
  )
}
