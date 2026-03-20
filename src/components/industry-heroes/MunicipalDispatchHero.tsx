import HeroPanel from '@/components/industry-heroes/HeroPanel'

const badgeStyles: Record<string, React.CSSProperties> = {
  critical: { background: 'rgba(239,68,68,0.15)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)' },
  active:   { background: 'rgba(16,185,129,0.15)', color: '#10b981', border: '1px solid rgba(16,185,129,0.3)' },
  pending:  { background: 'rgba(245,158,11,0.15)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)' },
}

const rows = [
  { status: 'critical', label: 'Critical', type: 'Traffic Incident',     loc: 'Av. Insurgentes Sur km 14.2',  time: '00:02:14' },
  { status: 'active',   label: 'Active',   type: 'Medical Emergency',    loc: 'Plaza Central, Bloque C',      time: '00:07:41' },
  { status: 'active',   label: 'Active',   type: 'Public Disturbance',   loc: 'Mercado Municipal Norte',      time: '00:12:08' },
  { status: 'pending',  label: 'Pending',  type: 'Infrastructure Alert', loc: 'Colonia San Rafael, Sector 4', time: '00:18:53' },
]

const metrics = [
  { name: 'Units Deployed', value: '38' },
  { name: 'Avg Response', value: '7.0 min', color: '#10b981' },
]

const mono: React.CSSProperties = { fontFamily: "'DM Mono', monospace" }

export default function MunicipalDispatchHero() {
  return (
    <HeroPanel label="LIVE — MUNICIPAL DISPATCH">
      {/* Dispatch board */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {rows.map((r, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
            borderRadius: '8px', padding: '10px 14px',
          }}>
            <span style={{
              ...mono, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase',
              padding: '3px 7px', borderRadius: '4px', flexShrink: 0,
              ...badgeStyles[r.status],
            }}>{r.label}</span>
            <div style={{ flex: 1 }}>
              <div style={{
                ...mono, fontSize: '10px', letterSpacing: '0.15em',
                textTransform: 'uppercase', color: 'var(--muted)',
              }}>{r.type}</div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--white)', marginTop: '2px' }}>
                {r.loc}
              </div>
            </div>
            <div style={{ ...mono, fontSize: '10px', color: 'var(--muted)', flexShrink: 0 }}>
              {r.time}
            </div>
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
              ...mono, fontSize: '9px', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '6px',
            }}>{m.name}</div>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: '20px', color: m.color || 'var(--white)',
            }}>{m.value}</div>
          </div>
        ))}
      </div>
    </HeroPanel>
  )
}
