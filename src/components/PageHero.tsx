import { Link } from '@/i18n/navigation'

interface PageHeroProps {
  accent: string
  eyebrow: string
  h1: string
  subtitle: string
  stats: { value: string; label: string }[]
  cta1: string
  cta2: string
  children?: React.ReactNode
}

export default function PageHero({ accent, eyebrow, h1, subtitle, stats, cta1, cta2, children }: PageHeroProps) {
  return (
    <section style={{
      maxWidth: '1200px', margin: '0 auto', padding: '96px 32px 80px',
      display: 'grid', gridTemplateColumns: children ? '1fr 1fr' : '1fr', gap: '64px', alignItems: 'center',
    }}>
      <div>
        <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.26em', color: accent, marginBottom: '20px' }}>
          <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', background: accent, marginRight: '8px', verticalAlign: 'middle' }} />
          {eyebrow}
        </p>
        <h1 style={{ fontSize: 'clamp(38px, 4.5vw, 60px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '0.01em', marginBottom: '24px', fontFamily: 'Barlow Condensed, sans-serif' }}>
          {h1}
        </h1>
        <p style={{ fontSize: '17px', fontWeight: 300, lineHeight: 1.75, color: 'var(--dim)', marginBottom: '40px' }}>
          {subtitle}
        </p>
        {stats.length > 0 && (
          <div style={{ display: 'flex', gap: '32px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ borderLeft: i > 0 ? '1px solid var(--border)' : 'none', paddingLeft: i > 0 ? '32px' : 0 }}>
                <div style={{ fontSize: '28px', fontWeight: 700, color: accent, fontFamily: 'Barlow Condensed, sans-serif' }}>{s.value}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        )}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{
            background: 'var(--blue)', color: '#fff', padding: '14px 28px',
            borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px',
            boxShadow: '0 0 24px rgba(59,130,246,0.4)',
          }}>{cta1}</Link>
          <Link href="/contact" style={{
            background: 'transparent', color: 'var(--white)', padding: '14px 28px',
            borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px',
            border: '1px solid var(--border-b)',
          }}>{cta2}</Link>
        </div>
      </div>
      {children}
    </section>
  )
}
