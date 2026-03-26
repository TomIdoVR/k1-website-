import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import PageHero from '@/components/PageHero'
import RetailAnalyticsHero from '@/components/industry-heroes/RetailAnalyticsHero'
import Breadcrumb from '@/components/Breadcrumb'
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
  const productsLabel = es ? 'Soluciones de la Plataforma' : 'Platform Solutions'
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

  const retailFaqs = es ? [
    { question: '¿Cómo protege KabatOne los entornos retail?', answer: 'KabatOne integra CCTV, control de acceso, alarmas e IoT en una sola plataforma que protege activos mientras genera inteligencia de negocio. Utiliza IA para detección de violencia, objetos desatendidos y comportamiento sospechoso.' },
    { question: '¿Qué analítica de negocio ofrece KabatOne para retail?', answer: 'KabatOne proporciona mapas de calor, analítica de flujo peatonal, conteo de clientes y dashboards operativos que convierten datos de seguridad en ventaja competitiva para retailers.' },
    { question: '¿Se adapta KabatOne desde tiendas individuales a cadenas nacionales?', answer: 'Sí. La plataforma modular de KabatOne despliega exactamente lo que cada entorno retail necesita, escalando desde tiendas individuales hasta cadenas nacionales con gestión centralizada.' },
  ] : [
    { question: 'How does KabatOne protect retail environments?', answer: 'KabatOne integrates CCTV, access control, alarms, and IoT into a single platform that protects assets while generating business intelligence. It uses AI for violence detection, unattended objects, and suspicious behavior.' },
    { question: 'What business analytics does KabatOne offer for retail?', answer: 'KabatOne provides heat maps, foot traffic analytics, customer counting, and operational dashboards that turn security data into competitive advantage for retailers.' },
    { question: 'Does KabatOne scale from single stores to national chains?', answer: 'Yes. KabatOne\'s modular platform deploys exactly what each retail environment needs, scaling from single stores to nationwide chains with centralized management.' },
  ]

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: es ? 'Inicio' : 'Home', url: 'https://kabatone.com/' },
          { name: es ? 'Industrias' : 'Industries', url: 'https://kabatone.com/' },
          { name: 'Retail', url: 'https://kabatone.com/industries/retail/' },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(retailFaqs)) }}
      />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        <Breadcrumb items={[
          { label: es ? 'Inicio' : 'Home', href: '/' },
          { label: es ? 'Industrias' : 'Industries' },
          { label: 'Retail' },
        ]} />
        {/* ── HERO ── */}
        <PageHero
          accent={ACCENT}
          eyebrow={eyebrow}
          h1={h1}
          subtitle={subtitle}
          stats={[]}
          cta1={es ? 'Solicita una Demo' : 'Book a Demo'}
          cta2={es ? 'Ver la Plataforma' : 'See the Platform'}
        >
          <RetailAnalyticsHero />
        </PageHero>

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

        {/* ── PROOF POINT ── */}
        <section style={{ padding: '0 40px 64px' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <div style={{
              background: `${ACCENT}0d`, border: `1px solid ${ACCENT}28`,
              borderLeft: `3px solid ${ACCENT}`, borderRadius: '12px',
              padding: '32px 36px', display: 'flex', gap: '40px',
              alignItems: 'center', flexWrap: 'wrap',
            }}>
              <div style={{ flexShrink: 0, minWidth: '80px' }}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(44px, 5vw, 64px)', fontWeight: 800, color: ACCENT, lineHeight: 1 }}>
                  {'4×'}
                </div>
                <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, marginTop: '4px', opacity: 0.8 }}>
                  {es ? 'Detección más rápida de incidentes' : 'Faster incident detection'}
                </div>
              </div>
              <div style={{ borderLeft: `1px solid ${ACCENT}28`, paddingLeft: '40px', flex: 1, minWidth: '240px' }}>
                <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.25em', color: ACCENT, marginBottom: '8px', opacity: 0.8 }}>
                  {es ? 'En Práctica' : 'In Practice'}
                </p>
                <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, margin: 0 }}>
                  {es
                    ? 'Los equipos de seguridad retail que usan la analítica conductual de KabatOne detectan incidentes de robo antes de que los artículos salgan de la tienda — alertas proactivas en tiempo real en lugar de revisión reactiva de CCTV.'
                    : 'Retail security teams using KabatOne\'s behavioral analytics detect shoplifting incidents before items leave the store — proactive real-time alerts instead of reactive CCTV review.'}
                </p>
              </div>
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

        {/* ── RELATED RESOURCES ── */}
        <section style={{ padding: '64px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '24px',
            }}>
              {es ? 'Recursos Relacionados' : 'Related Resources'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <Link href="/resources/smart-city-platform-guide" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
              }}>
                {es ? 'Guía de plataformas de ciudad inteligente' : 'Smart City Platform Guide'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
              <Link href="/resources/what-is-a-public-safety-platform" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
              }}>
                {es ? '¿Qué es una plataforma de seguridad pública?' : 'What Is a Public Safety Platform?'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                {es ? 'Industrias relacionadas:' : 'Related industries:'}
              </span>
              <Link href="/industries/logistics" style={{ fontSize: '13px', color: ACCENT, textDecoration: 'none' }}>
                {es ? 'Logística' : 'Logistics'}
              </Link>
              <Link href="/industries/stadiums" style={{ fontSize: '13px', color: ACCENT, textDecoration: 'none' }}>
                {es ? 'Estadios y Recintos' : 'Stadiums & Venues'}
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                {es ? 'Integraciones:' : 'Integrations:'}
              </span>
              <Link href="/integrations/face-recognition" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Reconocimiento Facial' : 'Face Recognition'}
              </Link>
              <Link href="/integrations/lpr" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Reconocimiento de Placas (LPR)' : 'License Plate Recognition'}
              </Link>
              <Link href="/integrations/access-control" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Control de Acceso' : 'Access Control'}
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                {es ? 'Recursos:' : 'Resources:'}
              </span>
              <Link href="/resources/what-is-video-management-software" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? '¿Qué Es el Software de Gestión de Video?' : 'What Is Video Management Software?'}
              </Link>
              <Link href="/resources/ai-in-public-safety" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'IA en Seguridad Pública' : 'AI in Public Safety'}
              </Link>
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
