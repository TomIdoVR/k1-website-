import HeroPanel from '@/components/industry-heroes/HeroPanel'

const shelves = [
  { left: '8%',  top: '15%', width: '20%', height: '8%' },
  { left: '8%',  top: '28%', width: '20%', height: '8%' },
  { left: '8%',  top: '41%', width: '20%', height: '8%' },
  { left: '35%', top: '15%', width: '20%', height: '8%' },
  { left: '35%', top: '28%', width: '20%', height: '8%' },
  { left: '35%', top: '41%', width: '20%', height: '8%' },
  { left: '62%', top: '15%', width: '20%', height: '60%' },
]

const heatZones = [
  { left: '55%', top: '40%', width: '30%', height: '40%', color: '#ef4444' },
  { left: '25%', top: '50%', width: '25%', height: '35%', color: '#f59e0b' },
  { left: '5%',  top: '55%', width: '20%', height: '25%', color: '#06b6d4' },
]

const cameras = [
  { left: '3%',  top: '5%' },
  { left: '45%', top: '5%' },
  { left: '87%', top: '5%' },
  { left: '3%',  top: '85%' },
  { left: '87%', top: '85%' },
]

export default function RetailAnalyticsHero() {
  return (
    <HeroPanel label="LIVE — RETAIL ANALYTICS">
      <style>{`
        @keyframes rah-heat { 0%,100%{opacity:0.25} 50%{opacity:0.35} }
        .rah-heat { animation: rah-heat 3s ease-in-out infinite; }
      `}</style>

      {/* Store floor layout */}
      <div style={{
        width: '100%', aspectRatio: '4/3',
        background: 'rgba(6,182,212,0.03)',
        border: '1px solid rgba(59,130,246,0.15)',
        borderRadius: 10, position: 'relative', overflow: 'hidden',
      }}>
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.07) 1px,transparent 1px)',
          backgroundSize: '28px 28px',
        }} />

        {/* Shelves */}
        {shelves.map((s, i) => (
          <div key={i} style={{
            position: 'absolute', ...s,
            background: 'rgba(59,130,246,0.18)',
            border: '1px solid rgba(59,130,246,0.3)',
            borderRadius: 2,
          }} />
        ))}

        {/* Heatmap zones */}
        {heatZones.map((z, i) => (
          <div key={i} className="rah-heat" style={{
            position: 'absolute',
            left: z.left, top: z.top, width: z.width, height: z.height,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${z.color}, transparent 70%)`,
          }} />
        ))}

        {/* Camera icons */}
        {cameras.map((c, i) => (
          <div key={i} style={{
            position: 'absolute', left: c.left, top: c.top,
            width: 10, height: 10,
            background: 'var(--cyan)',
            clipPath: 'polygon(0 25%, 60% 25%, 60% 0, 100% 50%, 60% 100%, 60% 75%, 0 75%)',
          }} />
        ))}
      </div>

      {/* Analytics metrics row */}
      <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
        {[
          { name: 'Footfall Today', val: '2,847', color: '#10b981' },
          { name: 'Incidents', val: '3', color: '#ef4444' },
          { name: 'Cameras Active', val: '64', color: undefined },
        ].map((m, i) => (
          <div key={i} style={{
            flex: 1,
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid var(--border)',
            borderRadius: 8, padding: '12px 14px',
          }}>
            <div style={{
              fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6,
            }}>{m.name}</div>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: 20, color: m.color ?? 'var(--white)',
            }}>{m.val}</div>
          </div>
        ))}
      </div>
    </HeroPanel>
  )
}
