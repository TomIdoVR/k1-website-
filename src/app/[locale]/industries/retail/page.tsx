import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import PageHero from '@/components/PageHero'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('retail', locale)
}

export default async function RetailPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#f59e0b'

  /* ── content ── */
  const eyebrow = es ? 'Industria — Seguridad Retail' : 'Industry — Retail Security'
  const h1 = es
    ? 'Seguridad Retail e Inteligencia de Negocio 360\u00B0'
    : '360\u00B0 Retail Security and Business Intelligence'
  const subtitle = es
    ? 'Protege tus activos con analítica en tiempo real. Lidera la industria a través de inteligencia de negocio avanzada que protege personas, previene pérdidas y optimiza operaciones.'
    : 'Protect your assets with real-time analytics. Lead the industry through advanced business intelligence that protects people, prevents loss, and optimizes operations.'

  /* challenges */
  const challengesLabel = es ? 'Los Desafíos que Resolvemos' : 'The Challenges We Solve'
  const challengesH2 = es ? 'Seguridad Retail a Gran Escala' : 'Retail Security at Scale'
  const challengesDesc = es
    ? 'Los entornos retail modernos enfrentan desafíos de seguridad y operaciones cada vez más complejos que requieren soluciones inteligentes e integradas.'
    : 'Modern retail environments face compounding security and operational challenges that require intelligent, integrated solutions.'

  const challenges = es ? [
    { title: 'Protección de Clientes y Personal', desc: 'Prevenir robos, vandalismo o incidentes dentro de las tiendas manteniendo un ambiente acogedor para compradores y empleados.' },
    { title: 'Prevención de Pérdidas y Fraude', desc: 'Monitorear tráfico peatonal, detectar aglomeraciones y reducir riesgos durante horas pico con analítica de video avanzada.' },
    { title: 'Gestión de Multitudes', desc: 'Control de acceso preciso, conteo de clientes y detección de comportamiento sospechoso — especialmente durante eventos de alto tráfico.' },
    { title: 'Optimización Operativa', desc: 'Integrar todos los sistemas — CCTV, control de acceso, alarmas, IoT — en una sola plataforma que impulsa la inteligencia de negocio.' },
  ] : [
    { title: 'Customer & Staff Protection', desc: 'Preventing theft, vandalism, or incidents inside stores while maintaining a welcoming environment for shoppers and staff.' },
    { title: 'Loss & Fraud Prevention', desc: 'Monitoring foot traffic, detecting overcrowding, and reducing risks during peak hours with advanced video analytics.' },
    { title: 'Crowd Management', desc: 'Accurate access control, customer counting, and detection of suspicious behavior — especially during high-traffic events.' },
    { title: 'Operational Optimization', desc: 'Integrating all systems — CCTV, access control, alarms, IoT — into a single platform that drives business intelligence.' },
  ]

  /* capabilities */
  const capLabel = es ? 'Capacidades de la Plataforma' : 'Platform Capabilities'
  const capH2 = es ? 'Cómo KabatOne Potencia la Seguridad Retail' : 'How KabatOne Powers Retail Security'
  const capDesc = es
    ? 'Cobertura integral desde la entrada de la tienda hasta la oficina — protegiendo activos mientras genera inteligencia operativa.'
    : 'Comprehensive coverage from store entrance to back office — protecting assets while generating operational intelligence.'

  const capabilities = es ? [
    { num: '01', title: 'Prevención', desc: 'Detección de violencia, objetos desatendidos, comportamiento inusual y aglomeraciones. Alertas impulsadas por IA antes de que los incidentes escalen.' },
    { num: '02', title: 'Gestión de Incidentes', desc: 'Registro, clasificación, asignación de recursos y generación automática de reportes para cada evento de seguridad.' },
    { num: '03', title: 'Control de Acceso Inteligente', desc: 'Reconocimiento facial, conteo de clientes y monitoreo de entrada/salida con analítica de acceso en tiempo real y registros de auditoría.' },
    { num: '04', title: 'Inteligencia de Negocio', desc: 'Mapas de calor, analítica de flujo y dashboards que impulsan decisiones operativas — convirtiendo datos de seguridad en ventaja competitiva.' },
  ] : [
    { num: '01', title: 'Prevention', desc: 'Detection of violence, unattended objects, unusual behavior, and overcrowding. AI-driven alerts before incidents escalate.' },
    { num: '02', title: 'Incident Management', desc: 'Logging, classification, resource allocation, and automatic report generation for every security event.' },
    { num: '03', title: 'Smart Access Control', desc: 'Facial recognition, customer counting, and entrance/exit monitoring with real-time access analytics and audit trails.' },
    { num: '04', title: 'Business Intelligence', desc: 'Heat maps, flow analytics, and dashboards that drive operational decisions — turning security data into competitive advantage.' },
  ]

  /* products */
  const productsLabel = es ? 'Productos de la Plataforma' : 'Platform Products'
  const productsH2 = es ? 'El Stack de Seguridad Retail' : 'The Retail Security Stack'
  const productsDesc = es
    ? 'La plataforma modular de KabatOne despliega exactamente lo que tu entorno retail necesita.'
    : "KabatOne's modular platform deploys exactly what your retail environment needs."

  const products = [
    { name: 'K-Video', href: '/k-video' },
    { name: 'K-Safety', href: '/k-safety' },
    { name: 'K-Connect', href: '/k-connect' },
  ]

  /* cta */
  const ctaH2 = es
    ? 'Asegura Tus Operaciones Retail Hoy'
    : 'Secure Your Retail Operations Today'
  const ctaSub = es
    ? 'Desde tiendas individuales hasta cadenas nacionales — KabatOne entrega la plataforma de seguridad inteligente que protege activos e impulsa el crecimiento del negocio.'
    : 'From single stores to nationwide chains — KabatOne delivers the intelligent security platform that protects assets and drives business growth.'

  /* ── shared styles ── */
  const sectionStyle = { position: 'relative' as const, zIndex: 10, padding: '80px 0', borderTop: '1px solid var(--border)' }
  const containerStyle = { maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }
  const labelStyle = { fontFamily: 'DM Mono, monospace', fontSize: '11px', fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase' as const, color: 'var(--cyan)', marginBottom: '14px' }
  const h2Style = { fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' as const, color: 'var(--white)', marginBottom: '12px' }
  const descStyle = { fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '52px' }
  const cardStyle = { background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '28px 24px' }

  return (
    <>
      <Nav />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <PageHero
          accent={ACCENT}
          eyebrow={eyebrow}
          h1={h1}
          subtitle={subtitle}
          stats={[]}
          cta1={es ? 'Solicita una Demo' : 'Book a Demo'}
          cta2={es ? 'Ver la Plataforma' : 'See the Platform'}
        />

        {/* ── CHALLENGES ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={labelStyle}>{challengesLabel}</p>
            <h2 style={h2Style}>{challengesH2}</h2>
            <p style={descStyle}>{challengesDesc}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {challenges.map((c, i) => (
                <div key={i} style={{ ...cardStyle, transition: 'border-color 0.2s, background 0.2s' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.18)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: 'var(--cyan)' }}>
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16A8 8 0 0010 2z" stroke="currentColor" strokeWidth="1.5" /><path d="M10 8v4M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </div>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '0.03em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '8px' }}>{c.title}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={labelStyle}>{capLabel}</p>
            <h2 style={h2Style}>{capH2}</h2>
            <p style={descStyle}>{capDesc}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {capabilities.map((c, i) => (
                <div key={i} style={{ ...cardStyle, display: 'flex', gap: '20px', padding: '32px 28px' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '36px', color: 'rgba(59,130,246,0.25)', lineHeight: 1, flexShrink: 0, width: '48px' }}>{c.num}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '20px', letterSpacing: '0.03em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '8px' }}>{c.title}</h3>
                    <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7 }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={labelStyle}>{productsLabel}</p>
            <h2 style={h2Style}>{productsH2}</h2>
            <p style={descStyle}>{productsDesc}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
              {products.map((p) => (
                <Link key={p.name} href={p.href} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                  borderRadius: '6px', padding: '8px 14px',
                  fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none',
                }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--cyan)', display: 'inline-block' }} />
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection es={es} h2={ctaH2} subtitle={ctaSub} />

        <Footer es={es} />

        <style>{`
          @media (max-width: 768px) {
            section > div { padding-left: 24px !important; padding-right: 24px !important; }
          }
          @media (max-width: 640px) {
            section > div > div[style*="grid-template-columns: repeat(2"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
