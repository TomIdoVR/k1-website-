import HeroPanel from '@/components/industry-heroes/HeroPanel'

const trackItems = [
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
        <rect x="1" y="3" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1.3" />
        <path d="M11 6l4 2v3h-4V6z" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="4" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="12" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    zone: 'Loading Dock A',
    status: 'Truck TRK-2847 — Outbound',
    badge: 'Cleared',
    badgeType: 'ok' as const,
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
        <rect x="2" y="2" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 8h6M8 5v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    zone: 'Access Control Gate 3',
    status: 'Unauthorized attempt detected',
    badge: 'Alert',
    badgeType: 'alert' as const,
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
        <path d="M8 1a7 7 0 100 14A7 7 0 008 1z" stroke="currentColor" strokeWidth="1.3" />
        <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    zone: 'Warehouse Zone B',
    status: 'Perimeter patrol — Scheduled',
    badge: 'Normal',
    badgeType: 'ok' as const,
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
        <path d="M2 12l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    zone: 'Maneuvering Yard',
    status: 'LPR scan — 3 vehicles pending',
    badge: 'Pending',
    badgeType: 'warn' as const,
  },
]

const badgeStyles = {
  ok:    { background: 'rgba(16,185,129,0.15)', color: '#10b981', border: '1px solid rgba(16,185,129,0.3)' },
  warn:  { background: 'rgba(245,158,11,0.15)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)' },
  alert: { background: 'rgba(239,68,68,0.15)',  color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)' },
}

export default function LogisticsOpsHero() {
  return (
    <HeroPanel label="LIVE — LOGISTICS OPERATIONS">
      <style>{`
        @keyframes loh-pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        .loh-alert-badge { animation: loh-pulse 1.8s ease-in-out infinite; }
      `}</style>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {trackItems.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '10px 12px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid var(--border)',
            borderRadius: 8,
          }}>
            <div style={{
              width: 32, height: 32,
              background: 'rgba(6,182,212,0.08)',
              border: '1px solid rgba(6,182,212,0.2)',
              borderRadius: 6,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, color: 'var(--cyan)',
            }}>
              {item.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'var(--muted)',
              }}>{item.zone}</div>
              <div style={{
                fontSize: 13, fontWeight: 500, color: 'var(--white)', marginTop: 2,
              }}>{item.status}</div>
            </div>
            <span
              className={item.badgeType === 'alert' ? 'loh-alert-badge' : undefined}
              style={{
                fontFamily: 'monospace', fontSize: 9, padding: '3px 7px',
                borderRadius: 4, flexShrink: 0,
                ...badgeStyles[item.badgeType],
              }}
            >{item.badge}</span>
          </div>
        ))}
      </div>

      {/* Metrics bar */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 10 }}>
        {[
          { name: 'Vehicles Monitored', val: '142', accent: true },
          { name: 'Sites Active', val: '8', accent: false },
        ].map((m, i) => (
          <div key={i} style={{
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
              fontSize: 20, color: m.accent ? '#10b981' : 'var(--white)',
            }}>{m.val}</div>
          </div>
        ))}
      </div>
    </HeroPanel>
  )
}
