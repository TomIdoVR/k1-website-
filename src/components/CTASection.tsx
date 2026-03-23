import { Link } from '@/i18n/navigation'

interface CTASectionProps {
  es: boolean
  h2: string
  subtitle: string
  cta1?: string
  cta2?: string
}

export default function CTASection({ es, h2, subtitle, cta1, cta2 }: CTASectionProps) {
  return (
    <section style={{ padding: '96px 32px', textAlign: 'center' }}>
      <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--cyan)', marginBottom: '16px' }}>
        {es ? 'Comenzar' : 'Get Started'}
      </p>
      <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '16px' }}>{h2}</h2>
      <p style={{ fontSize: '16px', color: 'var(--dim)', marginBottom: '40px' }}>{subtitle}</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <Link href="/contact" style={{ background: 'var(--blue)', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', boxShadow: '0 0 24px rgba(59,130,246,0.4)' }}>
          {cta1 || (es ? 'Solicita una Demo' : 'Book a Demo')}
        </Link>
        <Link href="/contact" style={{ color: 'var(--dim)', textDecoration: 'none', fontSize: '13px' }}>
          {cta2 || (es ? 'o contactar a ventas' : 'or contact sales')}
        </Link>
      </div>
    </section>
  )
}
