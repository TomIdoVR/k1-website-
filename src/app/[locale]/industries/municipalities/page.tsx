import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import PageHero from '@/components/PageHero'
import MunicipalDispatchHero from '@/components/industry-heroes/MunicipalDispatchHero'
import Breadcrumb from '@/components/Breadcrumb'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('municipalities', locale)
}

export default async function MunicipalitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#06b6d4'

  /* ── content ── */
  const content = {
    eyebrow: es ? 'Industria — Municipios' : 'Industry — Municipalities',
    h1: es
      ? 'Comando Unificado y Despacho para Gobiernos Municipales'
      : 'Unified Command and Dispatch for City Governments',
    subtitle: es
      ? 'Unifica camaras, sensores, analitica, flujos de despacho y alertas de emergencia en una sola plataforma de comando — brindando a las ciudades claridad inmediata y una respuesta mas rapida y coordinada.'
      : 'Unify cameras, sensors, analytics, dispatch workflows, and emergency alerts into a single command platform — giving cities immediate clarity and faster, more coordinated response.',
    stats: es
      ? [
          { value: '40%', label: 'Respuesta Mas Rapida' },
          { value: '12.5 a 7', label: 'Min Promedio Respuesta' },
        ]
      : [
          { value: '40%', label: 'Faster Response' },
          { value: '12.5 to 7', label: 'Min Avg Response' },
        ],
    cta1: es ? 'Solicita una Demo' : 'Book a Demo',
    cta2: es ? 'Ver la Plataforma' : 'See the Platform',
  }

  /* ── benefits ── */
  const benefits = es
    ? [
        {
          icon: 'command',
          title: 'Comando Unificado',
          desc: 'Una sola imagen operativa para video, sensores, despacho y alertas — todos los equipos ven la misma informacion en tiempo real.',
        },
        {
          icon: 'integration',
          title: 'Integracion Transparente',
          desc: 'Se conecta a los sistemas existentes de la ciudad sin reemplazarlos. Funciona con camaras, sensores e infraestructura legada.',
        },
        {
          icon: 'flexible',
          title: 'Flexible y Agnostico',
          desc: 'Las ciudades se expanden a su propio ritmo con total compatibilidad. Desde un solo municipio hasta marcos estatales.',
        },
        {
          icon: 'coordination',
          title: 'Coordinacion Mas Rapida',
          desc: 'Reduce la carga del operador; acorta el tiempo de respuesta con protocolos automatizados y despacho inteligente.',
        },
        {
          icon: 'accountability',
          title: 'Rendicion de Cuentas Total',
          desc: 'Protocolos automatizados, lineas de tiempo completas de eventos y herramientas de reportes para cumplimiento y mejora continua.',
        },
      ]
    : [
        {
          icon: 'command',
          title: 'Unified Command',
          desc: 'Single operational picture for video, sensors, dispatch, and alerts — every team sees the same real-time information.',
        },
        {
          icon: 'integration',
          title: 'Seamless Integration',
          desc: 'Connects to existing city systems without replacement. Works with legacy cameras, sensors, and infrastructure.',
        },
        {
          icon: 'flexible',
          title: 'Flexible & Agnostic',
          desc: 'Cities expand at their own pace with full compatibility. From a single municipality to statewide frameworks.',
        },
        {
          icon: 'coordination',
          title: 'Faster Coordination',
          desc: 'Reduces operator workload; shortens response time with automated protocols and intelligent dispatching.',
        },
        {
          icon: 'accountability',
          title: 'Full Accountability',
          desc: 'Automated protocols, complete event timelines, and reporting tools for compliance and continuous improvement.',
        },
      ]

  /* ── capabilities (two columns) ── */
  const emergencyDispatch = es
    ? [
        'Capacidades completas C4/C5 para centros de despacho de emergencias',
        'Integracion de llamadas 911 en tiempo real y geolocalizacion del llamante',
        'Incidentes verificados por video y feeds de camaras en vivo',
        'Coordinacion multiagencia entre departamentos',
        'Deteccion automatica de eventos via motores basados en reglas',
        'App Ciudadana para reportes directos de emergencias',
      ]
    : [
        'Full C4/C5 capabilities for emergency dispatch centers',
        'Real-time 911 call integration and caller geolocation',
        'Video-verified incidents and live camera feeds',
        'Multi-agency coordination across departments',
        'Automatic event detection via Rule-Based Engines',
        'Citizen App for direct emergency reporting',
      ]

  const municipalOps = es
    ? [
        'Patrulla de camaras para monitoreo diario de espacios publicos',
        'Monitoreo de activos criticos e infraestructura',
        'Despacho de tareas para equipos de campo municipales',
        'Documentacion completa y flujos de cierre de eventos',
        'Ordenes de trabajo diarias y gestion de equipos de campo',
        'Control de accion IoT para infraestructura urbana conectada',
      ]
    : [
        'Camera patrol for daily monitoring of public spaces',
        'Monitoring of critical assets and infrastructure',
        'Task dispatch for municipal field teams',
        'Full documentation and event closure workflows',
        'Day-to-day work orders and field team management',
        'IoT Action Control for connected city infrastructure',
      ]

  /* ── products ── */
  const products = [
    { href: '/k-safety', label: 'K-Safety' },
    { href: '/k-dispatch', label: 'K-Dispatch' },
    { href: '/k-video', label: 'K-Video' },
    { href: '/k-connect', label: 'K-Connect' },
  ]

  /* ── icon helper ── */
  const icons: Record<string, React.ReactNode> = {
    command: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 10h8M10 6v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    integration: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M5 10h10M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    flexible: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    coordination: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M10 2v4M10 14v4M2 10h4M14 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    accountability: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <rect x="4" y="4" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }

  /* ── checkmark SVG reused ── */
  const checkSvg = (
    <svg width="10" height="10" fill="none" viewBox="0 0 10 10">
      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  const municipalityFaqs = es ? [
    { question: '¿Cómo ayuda KabatOne a los municipios?', answer: 'KabatOne unifica cámaras, sensores, analítica, flujos de despacho y alertas de emergencia en una sola plataforma de comando, brindando a las ciudades claridad inmediata y una respuesta más rápida y coordinada.' },
    { question: '¿Qué resultados obtienen los municipios con KabatOne?', answer: 'Los municipios que usan KabatOne han reducido los tiempos promedio de respuesta de 12.5 minutos a 7 minutos — una mejora del 40% en velocidad de respuesta a emergencias.' },
    { question: '¿Se integra KabatOne con sistemas municipales existentes?', answer: 'Sí. KabatOne se conecta a los sistemas existentes de la ciudad sin reemplazarlos, funcionando con cámaras, sensores e infraestructura legada. Las ciudades pueden expandirse a su propio ritmo con total compatibilidad.' },
  ] : [
    { question: 'How does KabatOne help municipalities?', answer: 'KabatOne unifies cameras, sensors, analytics, dispatch workflows, and emergency alerts into a single command platform, giving cities immediate clarity and faster, more coordinated response.' },
    { question: 'What results do municipalities get with KabatOne?', answer: 'Municipalities using KabatOne have reduced average response times from 12.5 minutes to 7 minutes — a 40% improvement in emergency response speed.' },
    { question: 'Does KabatOne integrate with existing municipal systems?', answer: 'Yes. KabatOne connects to existing city systems without replacement, working with legacy cameras, sensors, and infrastructure. Cities can expand at their own pace with full compatibility.' },
  ]

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: es ? 'Inicio' : 'Home', url: 'https://kabatone.com/' },
          { name: es ? 'Industrias' : 'Industries', url: 'https://kabatone.com/' },
          { name: es ? 'Municipios' : 'Municipalities', url: 'https://kabatone.com/industries/municipalities/' },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(municipalityFaqs)) }}
      />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        <Breadcrumb items={[
          { label: es ? 'Inicio' : 'Home', href: '/' },
          { label: es ? 'Industrias' : 'Industries' },
          { label: es ? 'Municipios' : 'Municipalities' },
        ]} />
        {/* ── HERO ── */}
        <PageHero
          accent={ACCENT}
          eyebrow={content.eyebrow}
          h1={content.h1}
          subtitle={content.subtitle}
          stats={content.stats}
          cta1={content.cta1}
          cta2={content.cta2}
        >
          <MunicipalDispatchHero />
        </PageHero>

        {/* ── WHY CITIES CHOOSE ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Por Que las Ciudades Eligen KabatOne' : 'Why Cities Choose KabatOne'}
            </p>
            <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.0, marginBottom: '12px' }}>
              {es ? 'Disenado para Como Realmente Trabajan los Municipios' : 'Built for How Municipalities Actually Work'}
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '52px' }}>
              {es
                ? 'Cinco ventajas fundamentales que hacen de KabatOne la plataforma preferida para operaciones de emergencia municipales en todo el mundo.'
                : 'Five core advantages that make KabatOne the platform of choice for municipal emergency operations worldwide.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '28px 24px', transition: 'border-color 0.2s' }}>
                  <div style={{
                    width: '40px', height: '40px',
                    background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.18)',
                    borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '16px', color: 'var(--cyan)',
                  }}>
                    {icons[b.icon]}
                  </div>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '0.03em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {b.title}
                  </h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7 }}>
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROOF POINT ── */}
        <section style={{ padding: '0 32px 64px' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <div style={{
              background: `${ACCENT}0d`, border: `1px solid ${ACCENT}28`,
              borderLeft: `3px solid ${ACCENT}`, borderRadius: '12px',
              padding: '32px 36px', display: 'flex', gap: '40px',
              alignItems: 'center', flexWrap: 'wrap',
            }}>
              <div style={{ flexShrink: 0, minWidth: '80px' }}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(44px, 5vw, 64px)', fontWeight: 800, color: ACCENT, lineHeight: 1 }}>
                  {'4 → 1'}
                </div>
                <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, marginTop: '4px', opacity: 0.8 }}>
                  {es ? 'Contratos de proveedor eliminados' : 'Vendor contracts eliminated'}
                </div>
              </div>
              <div style={{ borderLeft: `1px solid ${ACCENT}28`, paddingLeft: '40px', flex: 1, minWidth: '240px' }}>
                <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.25em', color: ACCENT, marginBottom: '8px', opacity: 0.8 }}>
                  {es ? 'En Práctica' : 'In Practice'}
                </p>
                <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, margin: 0 }}>
                  {es
                    ? 'Municipios en KabatOne reemplazan herramientas separadas de CAD, VMS, análisis de tráfico y despacho con una sola plataforma de mando — un contrato, una pantalla, un equipo.'
                    : 'Cities on KabatOne replace separate CAD, VMS, traffic analytics, and dispatch tools with one command platform — one contract, one screen, one team.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES (two-column) ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '80px 32px', background: 'rgba(255,255,255,0.01)' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Capacidades de la Plataforma' : 'Platform Capabilities'}
            </p>
            <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.0, marginBottom: '12px' }}>
              {es ? 'Despacho de Emergencias y Operaciones Municipales' : 'Emergency Dispatch & Municipal Operations'}
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '52px' }}>
              {es
                ? 'Dos modos operativos — una plataforma unificada para todo lo que tu ciudad necesita para gestionar operaciones diarias y respuesta a emergencias.'
                : 'Two operational modes — one unified platform for everything your city needs to manage daily operations and emergency response.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              {/* Emergency Dispatch column */}
              <div>
                <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '20px', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border)' }}>
                  {es ? 'Despacho de Emergencias' : 'Emergency Dispatch'}
                </h3>
                {emergencyDispatch.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                    <div style={{
                      width: '18px', height: '18px', borderRadius: '4px',
                      background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, marginTop: '2px', color: 'var(--cyan)',
                    }}>
                      {checkSvg}
                    </div>
                    <span style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
              {/* Municipal Operations column */}
              <div>
                <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '20px', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border)' }}>
                  {es ? 'Operaciones Municipales' : 'Municipal Operations'}
                </h3>
                {municipalOps.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                    <div style={{
                      width: '18px', height: '18px', borderRadius: '4px',
                      background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, marginTop: '2px', color: 'var(--cyan)',
                    }}>
                      {checkSvg}
                    </div>
                    <span style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Soluciones de la Plataforma' : 'Platform Solutions'}
            </p>
            <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.0, marginBottom: '12px' }}>
              {es ? 'Soluciones para Operaciones Municipales' : 'Solutions for Municipal Operations'}
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '32px' }}>
              {es
                ? 'Desplegado como suite completa o modularmente — KabatOne se adapta a las necesidades y presupuesto de cada municipio.'
                : 'Deployed as a complete suite or modularly — KabatOne fits every municipality\'s needs and budget.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {products.map((p) => (
                <Link key={p.href} href={p.href} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '6px',
                  padding: '8px 14px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'var(--dim)', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s',
                }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--cyan)' }} />
                  {p.label}
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
              <Link href="/resources/how-c5-command-centers-work" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
              }}>
                {es ? 'Cómo funcionan los centros C5' : 'How C5 Command Centers Work'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
              <Link href="/resources/public-safety-software-municipalities-mexico" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
              }}>
                {es ? 'Software de seguridad pública para México' : 'Public Safety Software for Municipalities in Mexico'}
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
              <Link href="/industries/stadiums" style={{ fontSize: '13px', color: ACCENT, textDecoration: 'none' }}>
                {es ? 'Estadios y Recintos' : 'Stadiums & Venues'}
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                {es ? 'Integraciones:' : 'Integrations:'}
              </span>
              <Link href="/integrations/panic-buttons" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Botones de Pánico' : 'Panic Buttons'}
              </Link>
              <Link href="/integrations/sensor-fusion" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Fusión de Sensores' : 'Sensor Fusion'}
              </Link>
              <Link href="/integrations/access-control" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Control de Acceso' : 'Access Control'}
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                {es ? 'Recursos:' : 'Resources:'}
              </span>
              <Link href="/resources/how-c5-command-centers-work" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? '¿Cómo Funcionan los Centros de Mando C5?' : 'How C5 Command Centers Work'}
              </Link>
              <Link href="/resources/what-is-cad-dispatch-software" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? '¿Qué Es el Software CAD de Despacho?' : 'What Is CAD Dispatch Software?'}
              </Link>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <CTASection
          es={es}
          h2={es ? 'Transforma la Respuesta de tu Municipio' : 'Transform Your Municipality\'s Response'}
          subtitle={es
            ? 'Reduce los tiempos promedio de respuesta de 12.5 a 7 minutos con la plataforma unificada de comando municipal de KabatOne.'
            : 'Reduce average response times from 12.5 minutes to 7 minutes with KabatOne\'s unified municipal command platform.'}
        />

        <Footer es={es} />

        {/* ── Responsive ── */}
        <style>{`
          @media (max-width: 768px) {
            section > div { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 640px) {
            section > div > div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
            section > div > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </>
  )
}
