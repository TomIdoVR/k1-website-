import HeroPanel from '@/components/industry-heroes/HeroPanel'

const zoneMarkers = [
  { left: '50%', top: '8%',  transform: 'translateX(-50%)', type: 'ok' as const },
  { left: '8%',  top: '50%', transform: 'translateY(-50%)', type: 'ok' as const },
  { right: '8%', top: '50%', transform: 'translateY(-50%)', type: 'warn' as const },
  { left: '50%', bottom: '8%', transform: 'translateX(-50%)', type: 'ok' as const },
  { left: '25%', top: '25%', transform: undefined, type: 'alert' as const },
  { right: '25%', bottom: '25%', transform: undefined, type: 'ok' as const },
]

const markerColors = {
  ok:    { background: '#10b981', boxShadow: '0 0 8px #10b981' },
  warn:  { background: '#f59e0b', boxShadow: '0 0 8px #f59e0b' },
  alert: { background: '#ef4444', boxShadow: '0 0 8px #ef4444' },
}

export default function StadiumCommandHero() {
  return (
    <HeroPanel label="LIVE — VENUE COMMAND">
      <style>{`
        @keyframes sch-blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .sch-warn { animation: sch-blink 1.5s ease-in-out infinite; }
        .sch-alert { animation: sch-blink 1s ease-in-out infinite; }
      `}</style>

      {/* Stadium view */}
      <div style={{
        width: '100%', aspectRatio: '4/3',
        background: 'rgba(59,130,246,0.03)',
        border: '1px solid rgba(59,130,246,0.15)',
        borderRadius: 10,
        position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.06) 1px,transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        {/* Outer oval */}
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%,-50%)',
          width: '70%', height: '75%',
          border: '1.5px solid rgba(59,130,246,0.4)',
          borderRadius: '50%',
        }} />
        {/* Inner oval */}
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%,-50%)',
          width: '50%', height: '55%',
          border: '1px solid rgba(6,182,212,0.25)',
          borderRadius: '50%',
          background: 'rgba(6,182,212,0.04)',
        }} />
        {/* Field */}
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%,-50%)',
          width: '35%', height: '40%',
          border: '1px solid rgba(6,182,212,0.3)',
          background: 'rgba(6,182,212,0.06)',
        }} />
        {/* Zone markers */}
        {zoneMarkers.map((z, i) => (
          <div
            key={i}
            className={z.type === 'warn' ? 'sch-warn' : z.type === 'alert' ? 'sch-alert' : undefined}
            style={{
              position: 'absolute',
              left: z.left, top: z.top, right: z.right, bottom: z.bottom,
              transform: z.transform,
              width: 8, height: 8, borderRadius: '50%',
              ...markerColors[z.type],
            }}
          />
        ))}
      </div>

      {/* Crowd density bar */}
      <div style={{ width: '80%', margin: '12px auto 0' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          fontFamily: 'monospace', fontSize: 9,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--muted)', marginBottom: 5,
        }}>
          <span>Crowd Density</span>
          <span>78% Capacity</span>
        </div>
        <div style={{
          height: 6, background: 'rgba(255,255,255,0.06)',
          borderRadius: 3, overflow: 'hidden',
        }}>
          <div style={{
            height: '100%', width: '78%',
            background: 'linear-gradient(90deg, var(--blue), var(--cyan))',
            borderRadius: 3,
          }} />
        </div>
      </div>

      {/* Event metrics */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 8, marginTop: 12,
      }}>
        {[
          { name: 'Attendance', val: '42,180', color: undefined },
          { name: 'Active Alerts', val: '2', color: '#ef4444' },
          { name: 'Access Points', val: 'All Open', color: '#10b981' },
          { name: 'Security Teams', val: '24', color: undefined },
        ].map((m, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid var(--border)',
            borderRadius: 8, padding: '10px 12px',
          }}>
            <div style={{
              fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4,
            }}>{m.name}</div>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: 18, color: m.color ?? 'var(--white)',
            }}>{m.val}</div>
          </div>
        ))}
      </div>
    </HeroPanel>
  )
}
