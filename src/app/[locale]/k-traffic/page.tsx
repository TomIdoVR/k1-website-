import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { softwareApplicationSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'
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
          {/* Traffic Control Center Mockup */}
          <div style={{
            background: '#0b1628', borderRadius: '16px', border: '1px solid var(--border-b)',
            overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
            borderTop: `3px solid ${ACCENT}`,
          }}>
            {/* Header */}
            <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--dim)', fontFamily: 'monospace', letterSpacing: '0.12em', textTransform: 'uppercase' }}>K-Traffic Control Center</span>
              <span style={{ fontSize: '10px', fontWeight: 700, background: 'rgba(6,182,212,0.1)', color: ACCENT, padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.16em', border: '1px solid rgba(6,182,212,0.25)', fontFamily: 'monospace' }}>LIVE</span>
            </div>
            {/* Signal + Map Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', minHeight: '220px' }}>
              {/* Signal Panel */}
              <div style={{ borderRight: '1px solid var(--border)', padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '9px', letterSpacing: '0.12em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '2px' }}>
                  {es ? 'Señales' : 'Signals'}
                </div>
                {[
                  { color: '#22c55e', name: 'Main &\n1st Ave' },
                  { color: '#ef4444', name: 'Elm &\nHarbor' },
                  { color: '#eab308', name: 'Central\nLoop' },
                  { color: ACCENT, name: 'Route\n7 North' },
                ].map((sig, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: sig.color, boxShadow: `0 0 10px ${sig.color}88` }} />
                    <div style={{ fontFamily: 'monospace', fontSize: '8px', color: 'var(--muted)', textAlign: 'center', letterSpacing: '0.08em', whiteSpace: 'pre-line', lineHeight: 1.3 }}>{sig.name}</div>
                  </div>
                ))}
              </div>
              {/* Map Area */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Mini city grid */}
                <div style={{ flex: 1, background: '#060d18', position: 'relative', overflow: 'hidden', minHeight: '140px' }}>
                  {/* Simplified city grid with colored overlays */}
                  <svg viewBox="0 0 278 138" style={{ width: '100%', height: '100%', display: 'block' }}>
                    <rect width="278" height="138" fill="#060d18"/>
                    <rect x="0" y="0" width="77" height="59" fill="#0c1826"/>
                    <rect x="89" y="0" width="81" height="59" fill="#0c1826"/>
                    <rect x="182" y="0" width="96" height="59" fill="#0c1826"/>
                    <rect x="0" y="71" width="77" height="67" fill="#0c1826"/>
                    <rect x="89" y="71" width="81" height="67" fill="#0c1826"/>
                    <rect x="182" y="71" width="96" height="67" fill="#0c1826"/>
                    <rect x="77" y="0" width="12" height="138" fill="#101c2c"/>
                    <rect x="170" y="0" width="12" height="138" fill="#101c2c"/>
                    <rect x="0" y="59" width="278" height="12" fill="#101c2c"/>
                    <line x1="83" y1="2" x2="83" y2="59" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="5,5"/>
                    <line x1="83" y1="71" x2="83" y2="136" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="5,5"/>
                    <line x1="176" y1="2" x2="176" y2="59" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="5,5"/>
                    <line x1="176" y1="71" x2="176" y2="136" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="5,5"/>
                    <line x1="2" y1="65" x2="77" y2="65" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="5,5"/>
                    <line x1="89" y1="65" x2="170" y2="65" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="5,5"/>
                    <line x1="182" y1="65" x2="276" y2="65" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="5,5"/>
                    {/* Traffic flow overlays */}
                    <rect x="0" y="59" width="77" height="6" fill="rgba(249,115,22,0.6)"/>
                    <rect x="89" y="59" width="81" height="6" fill="rgba(239,68,68,0.55)"/>
                    <rect x="182" y="59" width="96" height="6" fill="rgba(34,197,94,0.5)"/>
                    <rect x="77" y="0" width="5" height="138" fill="rgba(34,197,94,0.4)"/>
                    <rect x="170" y="0" width="5" height="59" fill="rgba(239,68,68,0.5)"/>
                    <rect x="170" y="71" width="5" height="67" fill="rgba(234,179,8,0.45)"/>
                    {/* Intersection tints */}
                    <rect x="170" y="59" width="12" height="12" fill="rgba(239,68,68,0.2)"/>
                    <rect x="77" y="59" width="12" height="12" fill="rgba(249,115,22,0.2)"/>
                    {/* Building dots */}
                    <circle cx="28" cy="20" r="2" fill="rgba(6,182,212,0.22)"/>
                    <circle cx="56" cy="42" r="1.5" fill="rgba(6,182,212,0.16)"/>
                    <circle cx="120" cy="16" r="2" fill="rgba(6,182,212,0.22)"/>
                    <circle cx="222" cy="24" r="2" fill="rgba(6,182,212,0.22)"/>
                    <circle cx="28" cy="96" r="2" fill="rgba(6,182,212,0.18)"/>
                    <circle cx="118" cy="104" r="2" fill="rgba(6,182,212,0.18)"/>
                    <circle cx="222" cy="92" r="2" fill="rgba(6,182,212,0.18)"/>
                    {/* Incident pulse */}
                    <circle cx="176" cy="65" r="3" fill="#ef4444" opacity="0.9"/>
                    <circle cx="83" cy="65" r="2.5" fill="#eab308" opacity="0.9"/>
                    {/* Street labels */}
                    <text x="3" y="9" fontFamily="monospace" fontSize="5.5" fill="rgba(6,182,212,0.45)" letterSpacing="0.08em">MAIN ST</text>
                    <text x="92" y="9" fontFamily="monospace" fontSize="5.5" fill="rgba(6,182,212,0.4)" letterSpacing="0.07em">ELM AVE</text>
                    <text x="185" y="9" fontFamily="monospace" fontSize="5.5" fill="rgba(6,182,212,0.4)" letterSpacing="0.07em">HARBOR</text>
                    <rect width="278" height="138" fill="none" stroke="rgba(6,182,212,0.1)" strokeWidth="1"/>
                  </svg>
                </div>
                {/* Bottom panels */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid var(--border)' }}>
                  {/* Camera Feed */}
                  <div style={{ borderRight: '1px solid var(--border)' }}>
                    <div style={{ background: 'linear-gradient(180deg, #050b14 0%, #0e1e2f 35%, #162439 55%, #0e1e2f 75%, #050b14 100%)', padding: '5px 7px', minHeight: '50px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontFamily: 'monospace', fontSize: '8px', color: 'rgba(6,182,212,0.75)', letterSpacing: '0.1em' }}>CAM-07</span>
                        <span style={{ fontFamily: 'monospace', fontSize: '7px', color: '#ef4444', letterSpacing: '0.08em' }}>● REC</span>
                      </div>
                      <span style={{ fontFamily: 'monospace', fontSize: '7.5px', color: '#eab308', background: 'rgba(234,179,8,0.12)', border: '1px solid rgba(234,179,8,0.28)', padding: '2px 5px', borderRadius: '3px', letterSpacing: '0.09em', alignSelf: 'flex-start' }}>
                        {es ? '▲ EXCESO VEL.' : '▲ SPEEDING'}
                      </span>
                    </div>
                    <div style={{ padding: '4px 8px', fontFamily: 'monospace', fontSize: '7.5px', color: 'var(--muted)', letterSpacing: '0.07em', borderTop: '1px solid var(--border)' }}>
                      Route 7 North — Highway
                    </div>
                  </div>
                  {/* Incident Card */}
                  <div style={{ padding: '10px 11px', display: 'flex', flexDirection: 'column', gap: '3px', justifyContent: 'center' }}>
                    <div style={{ fontFamily: 'monospace', fontSize: '8px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ef4444', marginBottom: '1px' }}>
                      {es ? '⚠ INCIDENTE ACTIVO' : '⚠ ACTIVE INCIDENT'}
                    </div>
                    <div style={{ fontFamily: 'monospace', fontSize: '8.5px', color: 'var(--white)', letterSpacing: '0.05em' }}>
                      Main St × Central Blvd
                    </div>
                    <div style={{ fontSize: '8.5px', color: 'var(--dim)', lineHeight: 1.4 }}>
                      {es ? 'Falla de señal — anulación manual activa' : 'Signal fault — manual override active'}
                    </div>
                    <div style={{ fontFamily: 'monospace', fontSize: '7.5px', color: 'rgba(6,182,212,0.5)', letterSpacing: '0.07em', marginTop: '1px' }}>
                      {es ? 'Hace 2 min' : '2 min ago'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--border)' }}>
              {[
                { val: '247', label: es ? 'Intersecciones Monitoreadas' : 'Monitored Intersections' },
                { val: '3', label: es ? 'Incidentes Activos' : 'Active Incidents', color: '#ef4444' },
                { val: '42 km/h', label: es ? 'Vel. Promedio' : 'Avg Speed' },
              ].map((ms, i) => (
                <div key={i} style={{ padding: '12px 14px', borderRight: i < 2 ? '1px solid var(--border)' : 'none', fontFamily: 'monospace' }}>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: ms.color || 'var(--white)', letterSpacing: '0.02em' }}>{ms.val}</div>
                  <div style={{ fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '2px' }}>{ms.label}</div>
                </div>
              ))}
            </div>
          </div>
        </PageHero>

        {/* ── BENEFITS ── */}
        <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 32px' }}>
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
                  border: '1px solid var(--border)', borderTop: `3px solid ${ACCENT}`,
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
        <section style={{ padding: '80px 32px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '56px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, marginBottom: '12px' }}>{es ? 'El Proceso' : 'The Process'}</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' }}>{content.processH2}</h2>
              <div style={{ width: '64px', height: '3px', background: ACCENT, borderRadius: '2px', margin: '18px auto 0' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              {/* Inputs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {processInputs.map((inp) => (
                  <div key={inp} style={{ background: '#0b1628', border: '1px solid var(--border)', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', color: 'var(--muted)', textAlign: 'center' }}>{inp}</div>
                ))}
              </div>
              {/* Arrow */}
              <div style={{ fontSize: '24px', color: ACCENT }}>{'\u2192'}</div>
              {/* Hub */}
              <div style={{ background: `${ACCENT}18`, border: `2px solid ${ACCENT}`, borderRadius: '16px', padding: '24px 32px', textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: 800, color: ACCENT, fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}>K-TRAFFIC</div>
                <div style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.2em', marginTop: '4px' }}>
                  {es ? 'DETECTAR \u00B7 GESTIONAR \u00B7 OPTIMIZAR' : 'DETECT \u00B7 MANAGE \u00B7 OPTIMIZE'}
                </div>
              </div>
              {/* Arrow */}
              <div style={{ fontSize: '24px', color: ACCENT }}>{'\u2192'}</div>
              {/* Outputs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {processOutputs.map((out) => (
                  <div key={out} style={{ background: '#0b1628', border: `1px solid ${ACCENT}55`, borderRadius: '8px', padding: '8px 16px', fontSize: '13px', color: ACCENT, textAlign: 'center', fontWeight: 600 }}>{out}</div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: '48px' }}>
              <Link href="/contact" style={{
                background: 'transparent', color: 'var(--dim)', padding: '15px 34px',
                borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px',
                border: '1px solid var(--border-b)', display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}>{content.cta2}</Link>
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 32px' }}>
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
                <div style={{ marginTop: '32px' }}>
                  <Link href="/contact" style={{
                    background: 'transparent', color: 'var(--dim)', padding: '15px 34px',
                    borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px',
                    border: '1px solid var(--border-b)', display: 'inline-flex', alignItems: 'center', gap: '8px',
                  }}>{content.cta2}</Link>
                </div>
              </div>
              {/* Right: Performance Visual */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  background: 'rgba(11,18,32,0.7)', border: '1px solid var(--border)',
                  borderRadius: '14px', borderTop: `3px solid ${ACCENT}`, padding: '28px', width: '100%', maxWidth: '360px',
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
        <section style={{ padding: '80px 32px' }}>
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
