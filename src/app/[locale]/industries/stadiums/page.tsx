import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import PageHero from '@/components/PageHero'
import StadiumCommandHero from '@/components/industry-heroes/StadiumCommandHero'
import Breadcrumb from '@/components/Breadcrumb'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('stadiums', locale)
}

export default async function StadiumsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#ef4444'

  /* ── content ── */
  const eyebrow = es ? 'Industria — Estadios y Recintos' : 'Industry — Stadiums & Venues'
  const h1 = es
    ? 'Centro de Comando IA para Estadios y Grandes Recintos'
    : 'AI Command Center for Stadiums and Large Venues'
  const subtitle = es
    ? 'Unifica todos los sistemas del recinto en una sola plataforma — garantizando eventos más seguros y experiencias inigualables para los asistentes a través de IA, IoT y automatización inteligente.'
    : 'Unify all venue systems into a single platform — ensuring safer events and unmatched fan experiences through AI, IoT, and intelligent automation.'

  /* hero stats */
  const heroStats = es ? [
    { value: '60%', label: 'Resolución Más Rápida' },
    { value: '24/7', label: 'Monitoreo' },
    { value: '4', label: 'Zonas de Cobertura' },
  ] : [
    { value: '60%', label: 'Faster Resolution' },
    { value: '24/7', label: 'Monitoring' },
    { value: '4', label: 'Coverage Zones' },
  ]

  /* challenges */
  const challengesLabel = es ? 'Los Desafíos que Resolvemos' : 'The Challenges We Solve'
  const challengesH2 = es ? 'Lo que Hace Única la Seguridad de Estadios' : 'What Makes Stadium Security Unique'
  const challengesDesc = es
    ? 'Decenas de miles de asistentes, múltiples puntos de acceso simultáneos y cero tolerancia a fallas de seguridad — la seguridad de estadios exige un enfoque de mando unificado.'
    : 'Tens of thousands of attendees, multiple simultaneous access points, and zero tolerance for safety failures — stadium security demands a unified command approach.'

  const challenges = es ? [
    { title: 'Datos Fragmentados', desc: 'Múltiples sistemas desconectados — CCTV, control de acceso, alarmas, comunicaciones — sin interoperabilidad y creando puntos ciegos críticos.' },
    { title: 'Tiempos de Respuesta Lentos', desc: 'La falta de visibilidad unificada retrasa la atención a incidentes, donde cada segundo puede afectar la seguridad de miles de asistentes.' },
    { title: 'Altos Costos Operativos', desc: 'Duplicación de equipos, licencias y personal en sistemas que no se comunican genera gastos operativos innecesarios.' },
    { title: 'Cumplimiento Regulatorio', desc: 'Estándares de seguridad pública cada vez más exigentes requieren que los recintos demuestren protocolos de seguridad sistemáticos y documentados para cada evento.' },
  ] : [
    { title: 'Fragmented Data', desc: 'Multiple disconnected systems — CCTV, access control, alarms, communications — lacking interoperability and creating critical blind spots.' },
    { title: 'Slow Response Times', desc: "Lack of unified visibility delays attention to incidents, with each second potentially affecting thousands of attendees' safety." },
    { title: 'High Operational Costs', desc: "Equipment, license, and staffing duplication across systems that don't communicate drives unnecessary operational expense." },
    { title: 'Regulatory Compliance', desc: 'Increasingly demanding public safety standards require venues to demonstrate systematic, documented security protocols for every event.' },
  ]

  /* capabilities */
  const capLabel = es ? 'Capacidades de la Plataforma' : 'Platform Capabilities'
  const capH2 = es ? 'Cómo KabatOne Gestiona Tu Recinto' : 'How KabatOne Manages Your Venue'
  const capDesc = es
    ? 'Mando y control impulsado por IA que centraliza seguridad, comunicación y gestión de incidentes en cada metro cuadrado de tu recinto.'
    : 'AI-powered command and control that centralizes security, communication, and incident management across every square meter of your venue.'

  const capabilities = es ? [
    { num: '01', title: 'Monitoreo Total en Tiempo Real', desc: 'Analítica de video, sensores, control de acceso y apps móviles integradas brindan a los operadores conciencia situacional completa durante todo el evento.' },
    { num: '02', title: 'Gestión Automatizada de Eventos', desc: 'Protocolos digitales, alertas georreferenciadas y despacho inteligente aseguran que los recursos correctos lleguen al lugar correcto — automáticamente.' },
    { num: '03', title: 'IA y Analítica Avanzada', desc: 'Detección de anomalías de densidad de multitudes, incendios, humo, objetos sospechosos y patrones de comportamiento antes de que se conviertan en incidentes críticos.' },
    { num: '04', title: 'Coordinación Sin Fisuras', desc: 'Comunicación directa entre seguridad, médicos, policía y bomberos — todos los equipos en una plataforma con respuesta instantánea y coordinada.' },
  ] : [
    { num: '01', title: 'Total Real-Time Monitoring', desc: 'Video analytics, sensors, access control, and integrated mobile apps give operators complete situational awareness throughout the event.' },
    { num: '02', title: 'Automated Event Management', desc: 'Digital protocols, georeferenced alerts, and intelligent dispatch ensure the right resources reach the right location — automatically.' },
    { num: '03', title: 'AI & Advanced Analytics', desc: 'Detection of crowd density anomalies, fires, smoke, suspicious objects, and behavioral patterns before they become critical incidents.' },
    { num: '04', title: 'Seamless Coordination', desc: 'Direct communication across security, medical, police, and firefighters — all teams on one platform with instant, coordinated response.' },
  ]

  /* coverage zones */
  const zonesLabel = es ? 'Cobertura por Zona' : 'Coverage by Zone'
  const zonesH2 = es ? 'Cada Rincón de Tu Recinto, Cubierto' : 'Every Corner of Your Venue, Covered'
  const zonesDesc = es
    ? 'KabatOne monitorea y asegura cada zona de tu estadio — desde la primera entrada hasta la última salida.'
    : 'KabatOne monitors and secures every zone of your stadium — from first entry to last exit.'

  const zones = es ? [
    { title: 'Entradas y Acceso', features: ['Conteo de personas y gestión de flujo', 'Reconocimiento facial (opcional, según regulación)', 'Detección de objetos sospechosos', 'Control y validación de boletos en tiempo real'] },
    { title: 'Áreas de Estacionamiento', features: ['Reconocimiento de Placas Vehiculares (LPR)', 'Conteo de vehículos y seguimiento de ocupación', 'Detección de vandalismo y alertas perimetrales', 'Mapeo térmico para detección de incidentes'] },
    { title: 'Interior del Estadio', features: ['Detección de incendio, humo y agresiones', 'Análisis de densidad de multitudes y alertas de cuellos de botella', 'Monitoreo por sector con alertas georreferenciadas', 'Control de acceso y monitoreo de áreas VIP'] },
    { title: 'Centro de Comunicaciones', features: ['Integración de app y centro de llamadas para todos los equipos', 'Canales de comunicación directa equipo a equipo', 'Difusión de emergencia para asistentes', 'Reportes y analítica post-evento'] },
  ] : [
    { title: 'Entrances & Access', features: ['People counting and flow management', 'Facial recognition (optional, per regulations)', 'Suspicious object detection', 'Real-time ticket control and validation'] },
    { title: 'Parking Areas', features: ['License Plate Recognition (LPR)', 'Vehicle counting and occupancy tracking', 'Vandalism detection and perimeter alerts', 'Thermal mapping for incident detection'] },
    { title: 'Stadium Interior', features: ['Fire, smoke, and assault detection', 'Crowd density analysis and bottleneck alerts', 'Sector-based monitoring with georeferenced alerts', 'VIP area access control and monitoring'] },
    { title: 'Communications Hub', features: ['App and call center integration for all teams', 'Direct team-to-team communication channels', 'Emergency broadcast for attendees', 'Post-event reporting and analytics'] },
  ]

  /* products */
  const productsLabel = es ? 'Productos de la Plataforma' : 'Platform Products'
  const productsH2 = es ? 'El Stack Completo de Seguridad para Recintos' : 'The Full Venue Security Stack'
  const productsDesc = es
    ? 'KabatOne se integra con tus sistemas existentes — sin necesidad de reemplazar, solo inteligencia unificada.'
    : "KabatOne integrates with your existing systems — no rip-and-replace required, just unified intelligence."

  const products = [
    { name: 'K-Safety', href: '/k-safety' },
    { name: 'K-Video', href: '/k-video' },
    { name: 'K-Dispatch', href: '/k-dispatch' },
    { name: 'K-Connect', href: '/k-connect' },
  ]

  /* cta */
  const ctaH2 = es
    ? 'Haz Cada Evento Más Seguro e Inteligente'
    : 'Make Every Event Safer & Smarter'
  const ctaSub = es
    ? 'Reduce los tiempos de resolución de incidentes en un 60% mientras ofreces una mejor experiencia a los asistentes — con la plataforma de mando unificado de KabatOne.'
    : "Reduce incident resolution times by 60% while delivering a better fan experience — with KabatOne's unified venue command platform."

  /* ── shared styles ── */
  const sectionStyle = { position: 'relative' as const, zIndex: 10, padding: '80px 0', borderTop: '1px solid var(--border)' }
  const containerStyle = { maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }
  const labelStyle = { fontFamily: 'DM Mono, monospace', fontSize: '11px', fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase' as const, color: 'var(--cyan)', marginBottom: '14px' }
  const h2Style = { fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' as const, color: 'var(--white)', marginBottom: '12px' }
  const descStyle = { fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '52px' }
  const cardStyle = { background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '28px 24px' }

  const stadiumFaqs = es ? [
    { question: '¿Cómo gestiona KabatOne la seguridad de estadios?', answer: 'KabatOne unifica todos los sistemas del recinto — CCTV, control de acceso, alarmas y comunicaciones — en una sola plataforma con mando y control impulsado por IA, reduciendo los tiempos de resolución de incidentes en un 60%.' },
    { question: '¿Qué zonas cubre KabatOne en estadios?', answer: 'KabatOne cubre cuatro zonas: entradas y acceso con conteo de personas y reconocimiento facial, áreas de estacionamiento con LPR, interior del estadio con detección de incendio y análisis de multitudes, y centro de comunicaciones con coordinación entre equipos.' },
    { question: '¿Qué analítica de IA utiliza KabatOne en estadios?', answer: 'KabatOne utiliza detección de anomalías de densidad de multitudes, detección de incendios y humo, identificación de objetos sospechosos y análisis de patrones de comportamiento para prevenir incidentes críticos durante eventos.' },
    { question: '¿Se integra KabatOne con sistemas existentes del estadio?', answer: 'Sí. KabatOne se integra con los sistemas existentes del recinto sin necesidad de reemplazarlos, proporcionando inteligencia unificada sobre la infraestructura actual de CCTV, control de acceso y comunicaciones.' },
  ] : [
    { question: 'How does KabatOne manage stadium security?', answer: 'KabatOne unifies all venue systems — CCTV, access control, alarms, and communications — into a single platform with AI-powered command and control, reducing incident resolution times by 60%.' },
    { question: 'What zones does KabatOne cover in stadiums?', answer: 'KabatOne covers four zones: entrances and access with people counting and facial recognition, parking areas with LPR, stadium interior with fire detection and crowd analysis, and communications hub with team coordination.' },
    { question: 'What AI analytics does KabatOne use in stadiums?', answer: 'KabatOne uses crowd density anomaly detection, fire and smoke detection, suspicious object identification, and behavioral pattern analysis to prevent critical incidents during events.' },
    { question: 'Does KabatOne integrate with existing stadium systems?', answer: 'Yes. KabatOne integrates with existing venue systems without rip-and-replace, providing unified intelligence on top of current CCTV, access control, and communications infrastructure.' },
  ]

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: es ? 'Inicio' : 'Home', url: 'https://kabatone.com/' },
          { name: es ? 'Industrias' : 'Industries', url: 'https://kabatone.com/' },
          { name: es ? 'Estadios' : 'Stadiums', url: 'https://kabatone.com/industries/stadiums/' },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(stadiumFaqs)) }}
      />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        <Breadcrumb items={[
          { label: es ? 'Inicio' : 'Home', href: '/' },
          { label: es ? 'Industrias' : 'Industries' },
          { label: es ? 'Estadios y Recintos' : 'Stadiums & Venues' },
        ]} />
        {/* ── HERO ── */}
        <PageHero
          accent={ACCENT}
          eyebrow={eyebrow}
          h1={h1}
          subtitle={subtitle}
          stats={heroStats}
          cta1={es ? 'Solicita una Demo' : 'Book a Demo'}
          cta2={es ? 'Ver la Plataforma' : 'See the Platform'}
        >
          <StadiumCommandHero />
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
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" /></svg>
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

        {/* ── COVERAGE ZONES ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={labelStyle}>{zonesLabel}</p>
            <h2 style={h2Style}>{zonesH2}</h2>
            <p style={descStyle}>{zonesDesc}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {zones.map((z, i) => (
                <div key={i} style={{ ...cardStyle, borderLeft: '2px solid var(--cyan)', padding: '24px 24px 24px 20px' }}>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '12px' }}>{z.title}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {z.features.map((f, fi) => (
                      <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--dim)' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--cyan)', flexShrink: 0, display: 'inline-block' }} />
                        {f}
                      </div>
                    ))}
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
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                {es ? 'Industrias relacionadas:' : 'Related industries:'}
              </span>
              <Link href="/industries/public-safety" style={{ fontSize: '13px', color: ACCENT, textDecoration: 'none' }}>
                {es ? 'Seguridad Pública' : 'Public Safety'}
              </Link>
              <Link href="/industries/municipalities" style={{ fontSize: '13px', color: ACCENT, textDecoration: 'none' }}>
                {es ? 'Municipios' : 'Municipalities'}
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
