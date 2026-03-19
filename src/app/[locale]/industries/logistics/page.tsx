import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'
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
  return generatePageMetadata('logistics', locale)
}

export default async function LogisticsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#10b981'

  /* ── content ── */
  const eyebrow = es ? 'Industria — Seguridad Logística' : 'Industry — Logistics Security'
  const h1 = es
    ? 'Seguridad Inteligente para Logística y Cadena de Suministro'
    : 'Smart Security for Logistics and Supply Chain Operations'
  const subtitle = es
    ? 'Una plataforma que protege tu operación logística y la de tus clientes — desde el almacén hasta la entrega, desde el perímetro hasta el muelle, de principio a fin.'
    : "A platform that protects your logistics operation and your clients' — from warehouse to delivery, from perimeter to dock, start to finish."

  /* challenges */
  const challengesLabel = es ? 'Los Desafíos que Resolvemos' : 'The Challenges We Solve'
  const challengesH2 = es ? 'Demandas de Seguridad Logística' : 'Logistics Security Demands'
  const challengesDesc = es
    ? 'Las operaciones logísticas abarcan múltiples instalaciones, vehículos y personal — con cero tolerancia a fallas de seguridad o interrupciones operativas.'
    : 'Logistics operations span multiple facilities, vehicles, and personnel — with zero tolerance for security failures or operational disruptions.'

  const challenges = es ? [
    { title: 'Riesgos Físicos y Operativos', desc: 'Robo, sabotaje o daño a infraestructura y mercancía a través de múltiples puntos de distribución y rutas de transporte.' },
    { title: 'Visibilidad en Tiempo Real', desc: 'La necesidad de monitorear procesos, puntos de acceso, vehículos y personal en múltiples sitios simultáneamente y en tiempo real.' },
    { title: 'Eficiencia Bajo Presión', desc: 'Operaciones fragmentadas con múltiples sistemas no integrados que complican la toma de decisiones durante períodos pico de alta presión.' },
    { title: 'Continuidad y Cumplimiento', desc: 'Prevenir interrupciones por emergencias, fallas de energía o eventos externos que afectan niveles de servicio y cumplimiento regulatorio.' },
  ] : [
    { title: 'Physical & Operational Risks', desc: 'Theft, sabotage, or damage to infrastructure and merchandise across multiple distribution points and transport routes.' },
    { title: 'Real-Time Visibility', desc: 'The need to monitor processes, access points, vehicles, and personnel across multiple sites simultaneously and in real time.' },
    { title: 'Efficiency Under Pressure', desc: 'Fragmented operations with multiple non-integrated systems that complicate decision-making during high-pressure peak periods.' },
    { title: 'Continuity & Compliance', desc: 'Preventing interruptions due to emergencies, power failures, or external events that affect service levels and regulatory compliance.' },
  ]

  /* coverage zones */
  const coverageLabel = es ? 'Cobertura por Zona' : 'Coverage by Zone'
  const coverageH2 = es ? 'Cobertura Logística de Extremo a Extremo' : 'End-to-End Logistics Coverage'
  const coverageDesc = es
    ? 'KabatOne asegura cada punto de tu operación logística — desde el interior del almacén hasta el perímetro exterior.'
    : 'KabatOne secures every point of your logistics operation — from inside the warehouse to the outer perimeter.'

  const coverageZones = es ? [
    { zone: 'Zona 01', title: 'Interior del Almacén', desc: 'Analítica de video para monitoreo de inventario, detección de acceso no autorizado, detección de incendio y humo, y cumplimiento de seguridad laboral.' },
    { zone: 'Zona 02', title: 'Puntos de Acceso y Control', desc: 'Reconocimiento facial, reconocimiento de placas vehiculares y gestión de credenciales RFID para control preciso de todos los puntos de entrada y muelles.' },
    { zone: 'Zona 03', title: 'Patios de Maniobras y Muelles', desc: 'Seguimiento vehicular en tiempo real, gestión de bahías de carga, escaneo LPR y asignación automatizada de slots para operaciones de carga.' },
    { zone: 'Zona 04', title: 'Perímetro y Exterior', desc: 'Cámaras PTZ, detección de intrusión perimetral, imagen térmica e integración con drones para vigilancia exterior integral.' },
  ] : [
    { zone: 'Zone 01', title: 'Inside Warehouse', desc: 'Video analytics for inventory monitoring, unauthorized access detection, fire and smoke detection, and worker safety compliance.' },
    { zone: 'Zone 02', title: 'Access & Control Points', desc: 'Facial recognition, license plate recognition, and RFID credential management for precise control of all entry points and docks.' },
    { zone: 'Zone 03', title: 'Maneuvering Yards & Docks', desc: 'Real-time vehicle tracking, loading bay management, LPR scanning, and automated slot assignment for loading operations.' },
    { zone: 'Zone 04', title: 'Perimeter & Exterior', desc: 'PTZ cameras, perimeter intrusion detection, thermal imaging, and drone integration for comprehensive exterior surveillance.' },
  ]

  /* capabilities */
  const capLabel = es ? 'Capacidades de la Plataforma' : 'Platform Capabilities'
  const capH2 = es ? 'Seguridad Logística Inteligente' : 'Intelligent Logistics Security'
  const capDesc = es
    ? 'Tres capas de capacidades integradas que protegen operaciones y generan inteligencia accionable.'
    : 'Three integrated capability layers that protect operations and generate actionable intelligence.'

  const capabilities = es ? [
    { title: 'Monitoreo Inteligente', desc: 'Detección de humo, incendio, intrusiones. Seguimiento de vehículos y personal en tiempo real. Analítica de densidad y comportamiento de flujo.' },
    { title: 'Gestión de Emergencias', desc: 'Protocolos automatizados, coordinación directa de equipos y notificaciones masivas para respuesta a incidentes en todos los sitios.' },
    { title: 'Analítica Operativa', desc: 'Dashboards personalizables, análisis de tendencias de riesgo y reportes automáticos de cumplimiento para trazabilidad regulatoria y operativa.' },
  ] : [
    { title: 'Smart Monitoring', desc: 'Detection of smoke, fire, intrusions. Real-time vehicle and personnel tracking. Analytics for density and flow behavior.' },
    { title: 'Emergency Management', desc: 'Automated protocols, direct team coordination, and mass notifications for incident response across all sites.' },
    { title: 'Operational Analytics', desc: 'Customizable dashboards, risk trend analysis, and automatic compliance reports for regulatory and operational traceability.' },
  ]

  /* products */
  const productsLabel = es ? 'Productos de la Plataforma' : 'Platform Products'
  const productsH2 = es ? 'Productos para Operaciones Logísticas' : 'Products for Logistics Operations'
  const productsDesc = es
    ? 'Modular y escalable — desde una sola instalación hasta redes de distribución nacionales.'
    : 'Modular and scalable — from a single facility to nationwide distribution networks.'

  const products = [
    { name: 'K-Safety', href: '/k-safety' },
    { name: 'K-Video', href: '/k-video' },
    { name: 'K-Dispatch', href: '/k-dispatch' },
    { name: 'K-Connect', href: '/k-connect' },
  ]

  /* cta */
  const ctaH2 = es
    ? 'Asegura Toda Tu Operación Logística'
    : 'Secure Your Entire Logistics Operation'
  const ctaSub = es
    ? 'Desde el almacén hasta la última milla — KabatOne entrega visibilidad total, respuesta en tiempo real e inteligencia operativa a través de tu red logística.'
    : 'From warehouse to last mile — KabatOne delivers total visibility, real-time response, and operational intelligence across your logistics network.'

  /* ── shared styles ── */
  const sectionStyle = { position: 'relative' as const, zIndex: 10, padding: '80px 0', borderTop: '1px solid var(--border)' }
  const containerStyle = { maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }
  const labelStyle = { fontFamily: 'DM Mono, monospace', fontSize: '11px', fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase' as const, color: 'var(--cyan)', marginBottom: '14px' }
  const h2Style = { fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' as const, color: 'var(--white)', marginBottom: '12px' }
  const descStyle = { fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '52px' }
  const cardStyle = { background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '28px 24px' }

  const logisticsFaqs = es ? [
    { question: '¿Cómo protege KabatOne las operaciones logísticas?', answer: 'KabatOne asegura cada punto de la operación logística con cuatro zonas de cobertura: interior del almacén, puntos de acceso y control, patios de maniobras y muelles, y perímetro exterior. Integra analítica de video, LPR, RFID y sensores IoT.' },
    { question: '¿Qué zonas cubre KabatOne en instalaciones logísticas?', answer: 'KabatOne cubre cuatro zonas: interior del almacén con detección de incendio e intrusión, puntos de acceso con reconocimiento facial y LPR, patios de maniobras con seguimiento vehicular, y perímetro exterior con cámaras PTZ e imagen térmica.' },
    { question: '¿Escala KabatOne desde una instalación a redes nacionales?', answer: 'Sí. KabatOne es modular y escalable, protegiendo desde una sola instalación hasta redes de distribución nacionales con dashboards personalizables, análisis de tendencias de riesgo y reportes automáticos de cumplimiento.' },
  ] : [
    { question: 'How does KabatOne protect logistics operations?', answer: 'KabatOne secures every point of the logistics operation across four coverage zones: inside warehouse, access and control points, maneuvering yards and docks, and perimeter exterior. It integrates video analytics, LPR, RFID, and IoT sensors.' },
    { question: 'What zones does KabatOne cover in logistics facilities?', answer: 'KabatOne covers four zones: warehouse interior with fire and intrusion detection, access points with facial recognition and LPR, maneuvering yards with vehicle tracking, and perimeter exterior with PTZ cameras and thermal imaging.' },
    { question: 'Does KabatOne scale from single facilities to national networks?', answer: 'Yes. KabatOne is modular and scalable, protecting from a single facility to nationwide distribution networks with customizable dashboards, risk trend analysis, and automatic compliance reports.' },
  ]

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: es ? 'Inicio' : 'Home', url: 'https://kabatone.com/' },
          { name: es ? 'Industrias' : 'Industries', url: 'https://kabatone.com/' },
          { name: es ? 'Logística' : 'Logistics', url: 'https://kabatone.com/industries/logistics/' },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(logisticsFaqs)) }}
      />
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
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 2l8 4v6c0 4-4 6-8 7-4-1-8-3-8-7V6l8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
                  </div>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '0.03em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '8px' }}>{c.title}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COVERAGE ZONES ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={labelStyle}>{coverageLabel}</p>
            <h2 style={h2Style}>{coverageH2}</h2>
            <p style={descStyle}>{coverageDesc}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {coverageZones.map((z, i) => (
                <div key={i} style={{ ...cardStyle, borderTop: '2px solid var(--cyan)' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '10px' }}>{z.zone}</div>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '20px', letterSpacing: '0.03em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '8px' }}>{z.title}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7 }}>{z.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={labelStyle}>{capLabel}</p>
            <h2 style={h2Style}>{capH2}</h2>
            <p style={descStyle}>{capDesc}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {capabilities.map((c, i) => (
                <div key={i} style={{ ...cardStyle, transition: 'border-color 0.2s, background 0.2s' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: 'var(--blue-light)' }}>
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16A8 8 0 0010 2z" stroke="currentColor" strokeWidth="1.5" /><path d="M6.5 10.5l2 2 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '0.03em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '8px' }}>{c.title}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7 }}>{c.desc}</p>
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
              <Link href="/resources/psim-vs-unified-platform" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
              }}>
                {es ? 'PSIM vs Plataforma Unificada' : 'PSIM vs Unified Platform'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                {es ? 'Industrias relacionadas:' : 'Related industries:'}
              </span>
              <Link href="/industries/ports" style={{ fontSize: '13px', color: ACCENT, textDecoration: 'none' }}>
                {es ? 'Puertos' : 'Ports'}
              </Link>
              <Link href="/industries/retail" style={{ fontSize: '13px', color: ACCENT, textDecoration: 'none' }}>
                Retail
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
            section > div > div[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
