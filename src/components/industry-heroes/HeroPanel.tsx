interface HeroPanelProps {
  label: string
  children: React.ReactNode
}

export default function HeroPanel({ label, children }: HeroPanelProps) {
  return (
    <div style={{
      background: 'var(--card-bg)',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      overflow: 'hidden',
      backdropFilter: 'blur(8px)',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 16px',
        borderBottom: '1px solid var(--border)',
        background: 'var(--card-bg)',
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF5F57' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFBD2E' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#28C840' }} />
        </div>
        <span style={{
          fontFamily: 'monospace',
          fontSize: '10px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginLeft: 'auto',
        }}>{label}</span>
      </div>
      <div style={{ padding: '20px' }}>
        {children}
      </div>
    </div>
  )
}
