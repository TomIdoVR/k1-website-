import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { softwareApplicationSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HubDiagram from '@/components/HubDiagram'
import CTASection from '@/components/CTASection'
import PageHero from '@/components/PageHero'
import KTrafficCommandHero from '@/components/industry-heroes/KTrafficCommandHero'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('kTraffic', locale)
}

export default async function KTrafficPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#06b6d4'

  /* ── Content Strings ── */
  const content = {
    eyebrow: es ? 'Tráfico Inteligente · K-Traffic' : 'Smart Traffic · K-Traffic',
    h1: es
      ? 'Gestión de Tráfico Inteligente y Optimización con IA'
      : 'AI-Powered Traffic Management and Optimization',
    subtitle: es
      ? 'Optimiza el flujo, detecta infracciones y responde a incidentes antes de que se conviertan en colapsos. K-Traffic conecta semáforos, sensores y aplicación de normas en un sistema adaptativo.'
      : 'Connects traffic signals, cameras, sensors, and control centers into one intelligent platform — reducing congestion, detecting incidents, and optimizing city mobility in real time.',
    stat1: { value: '150+', label: es ? 'Intersecciones Gestionadas' : 'Intersections Managed' },
    stat2: { value: '12', label: es ? 'Ciudades Conectadas' : 'Cities Connected' },
    stat3: { value: '40%', label: es ? 'Reducción de Congestión' : 'Congestion Reduction' },
    cta1: es ? 'Solicita una Demo' : 'Book a Demo',
    cta2: es ? 'Habla con un Experto' : 'Talk to an Expert',
    benefitsLabel: es ? 'Por qué K-Traffic' : 'Why K-Traffic',
    benefitsH2: es ? 'Tráfico más Inteligente para Ciudades más Inteligentes' : 'Smarter Traffic for Smarter Cities',
    processH2: es
      ? 'Orquestación de Tráfico Basada en Datos con Inteligencia IA en Tiempo Real'
      : 'Data-Driven Traffic Orchestration with Real-Time AI Insights',
    capLabel: es ? 'Capacidades' : 'Capabilities',
    capH2: es
      ? 'Una Solución Integral para la Gestión Inteligente de Tráfico'
      : 'An All-in-One Solution for Smarter Traffic Management',
    intH2: es
      ? 'Mejora la Gestión de Tráfico con Integraciones Perfectas'
      : 'Enhance Traffic Management with Seamless Integrations',
    ctaH2: es ? '¿Listo para Transformar la Gestión de Tráfico?' : 'Ready to Transform Traffic Management?',
    ctaSub: es
      ? 'Descubre cómo K-Traffic puede reducir la congestión y mejorar la seguridad en tu ciudad.'
      : 'See how K-Traffic can reduce congestion and improve safety across your city.',
  }

  /* ── Benefits (4 cards — 2x2 grid) ── */
  const benefits = es ? [
    { icon: '\u25D4', title: 'Monitoreo de Tráfico en Tiempo Real', desc: 'Observación continua de las condiciones viales en todas las intersecciones, corredores y autopistas monitoreadas.' },
    { icon: '\u2699', title: 'Optimización Impulsada por IA', desc: 'Analítica predictiva y control adaptativo de semáforos para mejorar el flujo, reducir la congestión y acortar tiempos de viaje.' },
    { icon: '\u26A0', title: 'Gestión Optimizada de Eventos', desc: 'Detección instantánea de incidentes, alertas automatizadas y respuesta coordinada entre operaciones de tráfico y seguridad pública.' },
    { icon: '\u221E', title: 'Integración Perfecta', desc: 'Se conecta con la infraestructura de transporte existente, sensores IoT y plataformas de seguridad pública.' },
  ] : [
    { icon: '\u25D4', title: 'Real-Time Traffic Monitoring', desc: 'Continuous observation of road conditions across all monitored intersections, corridors, and highways.' },
    { icon: '\u2699', title: 'AI-Driven Optimization', desc: 'Predictive analytics and adaptive signal control to improve flow, reduce congestion, and cut travel times.' },
    { icon: '\u26A0', title: 'Optimized Event Management', desc: 'Instant incident detection, automated alerts, and coordinated response across traffic operations and public safety.' },
    { icon: '\u221E', title: 'Seamless Integration', desc: 'Connects with existing transportation infrastructure, IoT sensors, and public safety platforms.' },
  ]

  /* ── Process Diagram Inputs / Outputs ── */
  const processInputs = es
    ? ['Sensores IoT', 'Cámaras', 'Detectores de Lazo', 'Vehículos / V2X', 'Reportes de Campo']
    : ['IoT Sensors', 'Cameras', 'Loop Detectors', 'Vehicles / V2X', 'Field Reports']
  const processOutputs = es
    ? ['Control de Semáforos', 'Alerta de Incidentes', 'Analítica']
    : ['Signal Control', 'Incident Alert', 'Analytics']

  /* ── Capabilities Checklist ── */
  const capabilities = es ? [
    'Control Adaptativo de Semáforos',
    'Detección de incidentes en tiempo real y alertas',
    'Analítica Predictiva de Tráfico y Modelado con IA',
    'GIS y Mapeo para Optimización de Flujo',
    'Soporte Automatizado de Decisiones para Operaciones Viales',
    'Integraciones perfectas con infraestructura existente',
  ] : [
    'Traffic Signal & Adaptive Control',
    'Real-time incident detection and alerts',
    'Predictive Traffic Analytics and AI Modeling',
    'GIS & Mapping for Traffic Flow Optimization',
    'Automated Decision Support for Roadway Operations',
    'Seamless integrations with existing infrastructure',
  ]

  /* ── Capability Performance Bars ── */
  const perfBars = es ? [
    { label: 'Tiempo de Respuesta de Señal', value: '98%', width: '98%' },
    { label: 'Reducción de Congestión', value: '34%', width: '34%' },
    { label: 'Tasa de Detección de Incidentes', value: '91%', width: '91%' },
    { label: 'Disponibilidad de Plataforma', value: '99.9%', width: '99%' },
    { label: 'Precisión del Modelo IA', value: '87%', width: '87%' },
  ] : [
    { label: 'Signal Response Time', value: '98%', width: '98%' },
    { label: 'Congestion Reduction', value: '34%', width: '34%' },
    { label: 'Incident Detection Rate', value: '91%', width: '91%' },
    { label: 'Platform Uptime', value: '99.9%', width: '99%' },
    { label: 'AI Model Accuracy', value: '87%', width: '87%' },
  ]

  /* ── Integrations (4 cards) ── */
  const integrations = es ? [
    { icon: '\uD83D\uDCE1', title: 'IoT y Redes de Sensores', desc: 'Control de túneles, cámaras de velocidad, semáforos inteligentes, lazos inductivos.' },
    { icon: '\uD83E\uDDE0', title: 'IA y Analítica', desc: 'Modelos predictivos de tráfico, ajustes automáticos de semáforos, clasificación de incidentes.' },
    { icon: '\uD83D\uDCCA', title: 'Transporte de Terceros', desc: 'Conectado con las principales plataformas de gestión de transporte y ciudad.' },
    { icon: '\uD83D\uDEA8', title: 'Operaciones de Tráfico y Coordinación de Incidentes', desc: 'Enlace con despacho de seguridad pública, servicios de emergencia y cuadrillas viales.' },
  ] : [
    { icon: '\uD83D\uDCE1', title: 'IoT & Sensor Networks', desc: 'Tunnel control, speed cameras, smart signals, inductive loops.' },
    { icon: '\uD83E\uDDE0', title: 'AI & Analytics', desc: 'Traffic prediction models, automated signal adjustments, incident classification.' },
    { icon: '\uD83D\uDCCA', title: 'Third-Party Transportation', desc: 'Connected with major transportation management and city platforms.' },
    { icon: '\uD83D\uDEA8', title: 'Traffic Operations & Incident Coordination', desc: 'Links to public safety dispatch, emergency services, road crews.' },
  ]

  const trafficFaqs = es ? [
    { question: '¿Qué es K-Traffic?', answer: 'K-Traffic es una plataforma de gestión de tráfico inteligente que conecta semáforos, cámaras, sensores y centros de control en un sistema integrado. Reduce la congestión, detecta incidentes y optimiza la movilidad urbana en tiempo real.' },
    { question: '¿Cómo gestiona K-Traffic los semáforos?', answer: 'K-Traffic utiliza control adaptativo de señales con un tiempo de respuesta del 98%. La plataforma ajusta automáticamente los ciclos de semáforos basándose en datos en tiempo real de sensores IoT, cámaras y detectores de lazo inductivo.' },
    { question: '¿Soporta K-Traffic control adaptativo de señales?', answer: 'Sí. K-Traffic incluye analítica predictiva y control adaptativo de semáforos que mejora el flujo vehicular, reduce la congestión en un 34% y acorta los tiempos de viaje utilizando modelos de IA con 87% de precisión.' },
    { question: '¿Con qué sensores se integra K-Traffic?', answer: 'K-Traffic se integra con sensores IoT, cámaras de velocidad, lazos inductivos, sistemas V2X, control de túneles y semáforos inteligentes. También se conecta con plataformas de despacho de seguridad pública y servicios de emergencia.' },
  ] : [
    { question: 'What is K-Traffic?', answer: 'K-Traffic is an intelligent traffic management platform that connects traffic signals, cameras, sensors, and control centers into one integrated system. It reduces congestion, detects incidents, and optimizes city mobility in real time.' },
    { question: 'How does K-Traffic manage traffic signals?', answer: 'K-Traffic uses adaptive signal control with 98% signal response time. The platform automatically adjusts signal cycles based on real-time data from IoT sensors, cameras, and inductive loop detectors.' },
    { question: 'Does K-Traffic support adaptive signal control?', answer: 'Yes. K-Traffic includes predictive analytics and adaptive signal control that improves traffic flow, reduces congestion by 34%, and cuts travel times using AI models with 87% accuracy.' },
    { question: 'What sensors does K-Traffic integrate with?', answer: 'K-Traffic integrates with IoT sensors, speed cameras, inductive loops, V2X systems, tunnel control, and smart signals. It also connects with public safety dispatch platforms and emergency services.' },
  ]

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: 'K-Traffic', url: es ? 'https://kabatone.com/es/k-traffic/' : 'https://kabatone.com/k-traffic/' },
  ]

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema(
          'K-Traffic',
          es ? 'Plataforma de gestión de tráfico inteligente que conecta semáforos, cámaras y sensores para reducir la congestión y optimizar la movilidad urbana.' : 'Intelligent traffic management platform connecting signals, cameras, and sensors to reduce congestion and optimize city mobility.',
          'Traffic Management Software',
          'https://kabatone.com/k-traffic'
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(trafficFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <PageHero
          accent={ACCENT}
          eyebrow={content.eyebrow}
          h1={content.h1}
          subtitle={content.subtitle}
          stats={[content.stat1, content.stat2, content.stat3]}
          cta1={content.cta1}
          cta2={content.cta2}
        >
          <KTrafficCommandHero />
        </PageHero>

        {/* ── BENEFITS ── */}
        <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '100px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, marginBottom: '12px' }}>{content.benefitsLabel}</p>
              <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}>{content.benefitsH2}</h2>
              <div style={{ width: '64px', height: '3px', background: ACCENT, borderRadius: '2px', margin: '18px auto 0' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {benefits.map((b, i) => (
                <div key={i} style={{
                  background: 'rgba(11,18,32,0.7)', borderRadius: '14px',
                  border: '1px solid var(--border)', borderTop: `2px solid ${ACCENT}`,
                  padding: '28px 30px',
                }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '9px',
                    background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '16px', color: ACCENT, fontSize: '17px',
                  }}>{b.icon}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '10px', letterSpacing: '0.02em' }}>{b.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.65 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS / HOW IT WORKS ── */}
        <section style={{ padding: '100px 40px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: 'DM Mono, monospace', fontSize: '11px', fontWeight: 500, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#06b6d4', marginBottom: '18px' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#06b6d4', boxShadow: '0 0 8px #06b6d4', display: 'inline-block' }}/>
              The Process
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', marginBottom: '0' }}>{content.processH2}</h2>
            <HubDiagram
              uid="kt"
              product="K-TRAFFIC"
              tagline="MONITOR · OPTIMIZE · ALERT"
              inputs={[
                { label: 'IoT Sensors',    pillW: 100, icon: <><circle cx="0" cy="3" r="4.5" fill="#60a5fa" stroke="none"/><path d="M-9,-6 A13,13 0 0,1 9,-6"/><path d="M-14,-12 A20,20 0 0,1 14,-12"/><line x1="0" y1="7.5" x2="0" y2="13"/><line x1="-4" y1="13" x2="4" y2="13"/></> },
                { label: 'Cameras',        pillW: 88,  icon: <><rect x="-10" y="-7" width="15" height="12" rx="2"/><polyline points="5,-5 14,-9 14,3 5,1"/><circle cx="-3" cy="-1" r="2.5" fill="#60a5fa" stroke="none"/></> },
                { label: 'Loop Detectors', pillW: 112, icon: <><rect x="-13" y="-8" width="26" height="16" rx="2"/><line x1="-8" y1="-8" x2="-8" y2="-14"/><line x1="8" y1="-8" x2="8" y2="-14"/><line x1="-8" y1="8" x2="-8" y2="14"/><line x1="8" y1="8" x2="8" y2="14"/><line x1="-13" y1="0" x2="-20" y2="0"/><line x1="13" y1="0" x2="20" y2="0"/></> },
                { label: 'Vehicles / V2X', pillW: 112, icon: <><rect x="-13" y="-5" width="26" height="12" rx="4"/><path d="M-8,-5 L-5,-13 L5,-13 L8,-5"/><circle cx="-8" cy="7" r="3"/><circle cx="8" cy="7" r="3"/></> },
                { label: 'Field Reports',  pillW: 104, icon: <><rect x="-10" y="-13" width="20" height="26" rx="2"/><line x1="-5" y1="-6" x2="5" y2="-6"/><line x1="-5" y1="0" x2="5" y2="0"/><line x1="-5" y1="6" x2="2" y2="6"/></> },
              ]}
              outputs={[
                { label: 'Signal Control',  pillW: 110, icon: <><rect x="-7" y="-15" width="14" height="30" rx="3"/><circle cx="0" cy="-8" r="3.5" fill="#ff4444" stroke="none"/><circle cx="0" cy="0" r="3.5" fill="#ffaa00" stroke="none"/><circle cx="0" cy="8" r="3.5" fill="#06d6a0" stroke="#06d6a0"/></> },
                { label: 'Incident Alert',  pillW: 110, icon: <><path d="M0,-14 L12,8 L-12,8 Z"/><line x1="0" y1="-6" x2="0" y2="0"/><circle cx="0" cy="4" r="1.5" fill="#06b6d4" stroke="none"/></> },
                { label: 'Analytics',       pillW: 82,  icon: <><rect x="-13" y="-13" width="26" height="26" rx="2"/><line x1="-8" y1="6" x2="-8" y2="-2"/><line x1="-2" y1="6" x2="-2" y2="-6"/><line x1="4" y1="6" x2="4" y2="0"/><line x1="10" y1="6" x2="10" y2="-8"/></> },
              ]}
            />
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '100px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              {/* Left: heading + checklist */}
              <div>
                <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, marginBottom: '12px' }}>{content.capLabel}</p>
                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', marginBottom: '28px' }}>{content.capH2}</h2>
                <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', padding: 0, margin: 0 }}>
                  {capabilities.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--dim)', lineHeight: 1.5 }}>
                      <span style={{ color: ACCENT, fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>{'\u2713'}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right: Performance Visual */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  background: 'rgba(11,18,32,0.7)', border: '1px solid var(--border)',
                  borderRadius: '14px', borderTop: `2px solid ${ACCENT}`, padding: '28px', width: '100%', maxWidth: '360px',
                }}>
                  <div style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, marginBottom: '20px' }}>
                    {es ? 'Rendimiento del Sistema' : 'System Performance'}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {perfBars.map((bar, i) => (
                      <div key={i}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: '10px', color: 'var(--dim)', letterSpacing: '0.08em', marginBottom: '5px' }}>
                          <span>{bar.label}</span>
                          <span style={{ color: ACCENT }}>{bar.value}</span>
                        </div>
                        <div style={{ height: '5px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', borderRadius: '3px', background: `linear-gradient(90deg, ${ACCENT}, rgba(6,182,212,0.5))`, width: bar.width }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── INTEGRATIONS ── */}
        <section style={{ padding: '100px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, marginBottom: '12px' }}>{es ? 'Integraciones' : 'Integrations'}</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}>{content.intH2}</h2>
              <div style={{ width: '64px', height: '3px', background: ACCENT, borderRadius: '2px', margin: '18px auto 0' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {integrations.map((int, i) => (
                <div key={i} style={{
                  background: 'rgba(11,18,32,0.7)', border: '1px solid var(--border)',
                  borderRadius: '12px', padding: '24px 20px',
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '14px', fontSize: '16px',
                  }}>{int.icon}</div>
                  <h4 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--white)', marginBottom: '8px', letterSpacing: '0.04em' }}>{int.title}</h4>
                  <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--dim)' }}>{int.desc}</p>
                </div>
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
              color: 'var(--cyan)', marginBottom: '24px',
            }}>
              {es ? 'Recursos Relacionados' : 'Related Resources'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <Link href="/resources/smart-city-platform-guide" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
                transition: 'border-color 0.2s',
              }}>
                {es ? 'Guía de plataformas de ciudad inteligente' : 'Smart City Platform Guide'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
              <Link href="/resources/how-c5-command-centers-work" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
                transition: 'border-color 0.2s',
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
                transition: 'border-color 0.2s',
              }}>
                {es ? 'Software de seguridad pública para México' : 'Public Safety Software for Mexico'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                {es ? 'Ver por industria:' : 'Browse by industry:'}
              </span>
              <Link href="/industries/municipalities" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Municipios' : 'Municipalities'}
              </Link>
              <Link href="/industries/airport" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Aeropuertos' : 'Airports'}
              </Link>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <CTASection
          es={es}
          h2={content.ctaH2}
          subtitle={content.ctaSub}
          cta1={content.cta1}
          cta2={es ? 'Contactar Ventas' : 'Contact Sales'}
        />

        <Footer es={es} />

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          @media (max-width: 900px) {
            section > div { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 768px) {
            section > div { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </>
  )
}
