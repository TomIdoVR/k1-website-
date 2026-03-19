import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('kSafety', locale)
}

export default async function KSafetyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#06b6d4'

  const content = {
    eyebrow: es ? 'Seguridad Pública · K-Safety' : 'Public Safety · K-Safety',
    h1: es
      ? 'Plataforma de Seguridad Pública en Tiempo Real'
      : 'Real-Time GIS Situational Awareness for Public Safety',
    subtitle: es
      ? 'Convierte datos de ubicación en inteligencia operativa. K-Safety superpone incidentes, unidades y transmisiones en vivo en un mapa operativo unificado.'
      : 'K-Safety unifies public safety operations by integrating event management, GIS, VMS, mobile apps, and seamless third-party integrations into one command center.',
    stat1: { value: '68', label: es ? 'Proyectos' : 'Projects' },
    stat2: { value: '100+', label: es ? 'Agencias' : 'Agencies' },
    stat3: { value: '30+', label: es ? 'Integraciones' : 'Integrations' },
    cta1: es ? 'Solicita una Demo' : 'Book a Demo',
    cta2: es ? 'Ver la Plataforma' : 'Talk to an Expert',
    benefitsLabel: es ? 'Por qué K-Safety' : 'Why K-Safety',
    benefitsH2: es ? 'Conciencia Situacional GIS en Tiempo Real' : 'Smarter, Connected Public Safety Operations',
    processH2: es ? 'De Datos en Bruto a Incidente Resuelto' : 'From Raw Data to Resolved Incident',
    capH2: es ? 'Plataforma de Mando de Seguridad Pública Todo en Uno' : 'An All-in-One Public Safety Command Platform',
    intH2: es ? 'Conecta K-Safety a tu Infraestructura Existente' : 'Connect K-Safety to Your Existing Infrastructure',
    caseTag: es ? 'Caso de Éxito' : 'Case Study',
    caseH2: es ? 'Transformando la Seguridad Pública en Jalisco, México' : 'Transforming Public Safety in Jalisco, Mexico',
    caseBody: es
      ? 'K-Safety impulsa uno de los centros de mando de seguridad pública más avanzados de América Latina — integrando miles de cámaras, botones de pánico y analítica con IA para proteger a millones de ciudadanos en todo el estado de Jalisco.'
      : 'K-Safety powers one of Latin America\'s most advanced public safety command centers — integrating thousands of cameras, panic buttons, and AI-driven analytics to protect millions of citizens across the state of Jalisco.',
    ctaH2: es ? '¿Listo para Transformar la Seguridad Pública?' : 'Ready to Transform Public Safety?',
    ctaSub: es
      ? 'Agenda una demo personalizada y descubre cómo K-Safety puede proteger tu ciudad.'
      : 'Schedule a personalized demo and see how K-Safety can protect your city.',
    ctaContact: es ? 'Contactar Ventas' : 'Contact Sales',
  }

  const benefits = es ? [
    { title: 'Gestión de Seguridad', desc: 'Automatiza el manejo de eventos desde la detección hasta la resolución, reduciendo tiempos de respuesta y coordinación manual.' },
    { title: 'Ecosistema Conectado', desc: 'Se integra perfectamente con las principales tecnologías de seguridad pública: VMS, LPR, sensores IoT, sistemas de radio.' },
    { title: 'IA Predictiva y en Tiempo Real', desc: 'Pronostica amenazas, optimiza tiempos de respuesta y proporciona información estratégica para tomadores de decisiones.' },
    { title: 'Escalable y Flexible', desc: 'Despliegue en nube o local. Escala desde una sola ciudad hasta una red nacional.' },
  ] : [
    { title: 'Safety Management', desc: 'Automates event handling from detection to resolution, reducing response times and manual coordination.' },
    { title: 'Connected Ecosystem', desc: 'Seamlessly integrates with leading public safety technologies — VMS, LPR, IoT sensors, radio systems.' },
    { title: 'Predictive & Real-Time AI', desc: 'Forecasts threats, optimizes response times, and provides strategic insights for decision-makers.' },
    { title: 'Scalable & Flexible', desc: 'Cloud or on-premises deployment. Scales from a single city to a nationwide network.' },
  ]

  const capabilities = es ? [
    'Detección de eventos y alertas automáticas',
    'Mapeo GIS con seguimiento de unidades en vivo',
    'Integración con Sistema de Gestión de Video (VMS)',
    'Aplicaciones móviles para respondedores de campo',
    'Red de botones de pánico y sensores IoT',
    'Pronóstico de amenazas con IA',
  ] : [
    'Event detection & automated alerting',
    'GIS mapping with live unit tracking',
    'Video Management System (VMS) integration',
    'Mobile apps for field responders',
    'Panic button & IoT sensor network',
    'AI-powered threat forecasting',
  ]

  const integrations = es ? [
    { title: 'Infraestructura Crítica e IoT', desc: 'Radares, sensores de incendio, cercas inteligentes, monitores ambientales.' },
    { title: 'Comunicación y Despacho', desc: 'Sistemas de radio, plataformas CAD, herramientas de comunicación interagencial.' },
    { title: 'Sistemas de Gestión de Video', desc: 'CCTV, cámaras IP, body cams, feeds de drones.' },
    { title: 'IA y Análisis', desc: 'Reconocimiento facial, LPR, detección de disparos, analítica de comportamiento.' },
    { title: 'Herramientas de Respuesta a Emergencias', desc: 'Botones de pánico, CAD 911, apps móviles para respondedores, sensores.' },
    { title: 'GIS y Mapeo', desc: 'Mapeo en tiempo real, enrutamiento, gestión de zonas, geocercas.' },
  ] : [
    { title: 'Critical Infrastructure & IoT', desc: 'Radars, fire sensors, smart fences, environmental monitors.' },
    { title: 'Communication & Dispatch', desc: 'Radio systems, CAD platforms, inter-agency communication tools.' },
    { title: 'Video Management Systems', desc: 'CCTV, IP cameras, body cams, drone feeds.' },
    { title: 'AI & Analytics', desc: 'Facial recognition, LPR, gunshot detection, behavioral analytics.' },
    { title: 'Emergency Response Tools', desc: 'Panic buttons, 911 CAD, mobile responder apps, sensors.' },
    { title: 'GIS & Mapping', desc: 'Real-time mapping, routing, zone management, geofencing.' },
  ]

  const processInputs = es
    ? ['Cámaras', 'Sensores', 'Puntos de Acceso', 'App Móvil', 'IoT / SMP']
    : ['Cameras', 'Sensors', 'Access Points', 'Mobile App', 'IoT / SMP']
  const processOutputs = es
    ? ['Detección de Evento', 'Localización', 'Acción']
    : ['Event Detection', 'Location', 'Action']

  return (
    <>
      <Nav />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{
          maxWidth: '1200px', margin: '0 auto', padding: '96px 32px 80px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center',
        }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.26em', color: ACCENT, marginBottom: '20px' }}>
              <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', background: ACCENT, marginRight: '8px', verticalAlign: 'middle', animation: 'pulse 2s infinite' }} />
              {content.eyebrow}
            </p>
            <h1 style={{ fontSize: 'clamp(38px, 4.5vw, 60px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '0.01em', marginBottom: '24px', fontFamily: 'Barlow Condensed, sans-serif' }}>
              {content.h1}
            </h1>
            <p style={{ fontSize: '17px', fontWeight: 300, lineHeight: 1.75, color: 'var(--dim)', marginBottom: '40px' }}>
              {content.subtitle}
            </p>
            <div style={{ display: 'flex', gap: '32px', marginBottom: '40px' }}>
              {[content.stat1, content.stat2, content.stat3].map((s, i) => (
                <div key={i} style={{ borderLeft: i > 0 ? '1px solid var(--border)' : 'none', paddingLeft: i > 0 ? '32px' : 0 }}>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: ACCENT, fontFamily: 'Barlow Condensed, sans-serif' }}>{s.value}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ background: 'var(--blue)', color: '#fff', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', boxShadow: '0 0 24px rgba(59,130,246,0.4)' }}>{content.cta1}</Link>
              <Link href="/contact" style={{ background: 'transparent', color: 'var(--white)', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', border: '1px solid var(--border-b)' }}>{content.cta2}</Link>
            </div>
          </div>

          {/* GIS Command Center Mockup */}
          <div style={{ background: '#0b1628', borderRadius: '16px', border: `1px solid ${ACCENT}55`, overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.5)' }}>
            <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 600 }}>{es ? 'Centro de Mando K-Safety' : 'K-Safety Command Center'}</span>
              <span style={{ fontSize: '10px', fontWeight: 700, background: '#22c55e', color: '#fff', padding: '2px 8px', borderRadius: '4px', letterSpacing: '0.1em' }}>LIVE</span>
            </div>
            {/* GIS Map placeholder */}
            <div style={{ height: '180px', background: 'linear-gradient(135deg, #0d1f35 0%, #0b2840 50%, #091c30 100%)', position: 'relative', overflow: 'hidden' }}>
              {/* Grid lines */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.2 }}>
                {[20, 40, 60, 80].map(p => <line key={`h${p}`} x1="0" y1={`${p}%`} x2="100%" y2={`${p}%`} stroke="#3b82f6" strokeWidth="0.5" />)}
                {[16, 33, 50, 66, 83].map(p => <line key={`v${p}`} x1={`${p}%`} y1="0" x2={`${p}%`} y2="100%" stroke="#3b82f6" strokeWidth="0.5" />)}
              </svg>
              {/* Incident dots */}
              {[
                { x: '30%', y: '40%', color: '#ef4444', size: 12 },
                { x: '55%', y: '60%', color: '#f97316', size: 10 },
                { x: '70%', y: '30%', color: '#3b82f6', size: 10 },
                { x: '20%', y: '70%', color: '#22c55e', size: 8 },
              ].map((dot, i) => (
                <div key={i} style={{
                  position: 'absolute', left: dot.x, top: dot.y,
                  width: dot.size, height: dot.size,
                  borderRadius: '50%', background: dot.color,
                  transform: 'translate(-50%, -50%)',
                  boxShadow: `0 0 ${dot.size * 2}px ${dot.color}`,
                }} />
              ))}
              {/* Map label */}
              <div style={{ position: 'absolute', bottom: '8px', left: '12px', fontSize: '10px', color: ACCENT, fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                GIS {es ? 'Vista Operativa' : 'Operational View'}
              </div>
            </div>
            {/* Incident list */}
            <div style={{ padding: '8px 20px' }}>
              {[
                { id: '#INC-4821', name: es ? 'Robo a Mano Armada' : 'Armed Robbery', status: 'ACTIVE', color: '#ef4444' },
                { id: '#INC-4822', name: es ? 'Colisión de Tráfico' : 'Traffic Collision', status: 'PENDING', color: '#f97316' },
                { id: '#INC-4820', name: es ? 'Alerta Perimetral' : 'Perimeter Alert', status: 'DISPATCH', color: '#3b82f6' },
              ].map((inc) => (
                <div key={inc.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600 }}>{inc.name}</div>
                    <div style={{ fontSize: '10px', color: 'var(--muted)', fontFamily: 'monospace' }}>{inc.id}</div>
                  </div>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: inc.color, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{inc.status}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: '12px 20px', display: 'flex', gap: '20px' }}>
              <span style={{ fontSize: '11px', color: 'var(--white)' }}>94 {es ? 'Incidentes Activos' : 'Active Incidents'}</span>
              <span style={{ fontSize: '11px', color: ACCENT }}>12 {es ? 'Despachados' : 'Dispatched'}</span>
              <span style={{ fontSize: '11px', color: '#22c55e' }}>98.2% Uptime</span>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, marginBottom: '12px' }}>{content.benefitsLabel}</p>
            <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '48px' }}>{content.benefitsH2}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '28px 24px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '10px' }}>{b.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.65 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section style={{ padding: '80px 32px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '48px' }}>{content.processH2}</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {processInputs.map((inp) => (
                  <div key={inp} style={{ background: '#0b1628', border: '1px solid var(--border)', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', color: 'var(--muted)', textAlign: 'center' }}>{inp}</div>
                ))}
              </div>
              <div style={{ fontSize: '24px', color: ACCENT }}>→</div>
              <div style={{ background: `${ACCENT}18`, border: `2px solid ${ACCENT}`, borderRadius: '16px', padding: '24px 32px', textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: 800, color: ACCENT, fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}>K-SAFETY</div>
                <div style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.2em', marginTop: '4px' }}>
                  {es ? 'RECOPILAR · ANALIZAR · INTEGRAR' : 'COLLECT · ANALYZE · INTEGRATE'}
                </div>
              </div>
              <div style={{ fontSize: '24px', color: ACCENT }}>→</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {processOutputs.map((out) => (
                  <div key={out} style={{ background: '#0b1628', border: `1px solid ${ACCENT}55`, borderRadius: '8px', padding: '8px 16px', fontSize: '13px', color: ACCENT, textAlign: 'center', fontWeight: 600 }}>{out}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '48px', textAlign: 'center' }}>{content.capH2}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {capabilities.map((cap, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#0b1628', borderRadius: '10px', border: '1px solid var(--border)', padding: '16px 20px' }}>
                  <span style={{ color: ACCENT, fontSize: '18px', flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: '15px', color: 'var(--white)', lineHeight: 1.4 }}>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTEGRATIONS ── */}
        <section style={{ padding: '80px 32px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '48px', textAlign: 'center' }}>{content.intH2}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {integrations.map((int, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '28px 24px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '10px' }}>{int.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.65 }}>{int.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDY ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 32px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, border: `1px solid ${ACCENT}55`, borderRadius: '4px', padding: '4px 12px' }}>{content.caseTag}</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginTop: '24px', marginBottom: '24px' }}>{content.caseH2}</h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}>{content.caseBody}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {[
                { value: '5,400+', label: es ? 'Cámaras activas' : 'Active cameras' },
                { value: '530+', label: es ? 'Botones de pánico' : 'Panic buttons' },
                { value: '100+', label: es ? 'Cámaras de reconocimiento facial' : 'Facial recognition cameras' },
                { value: '10,000+', label: es ? 'Reportes directos' : 'Direct reports' },
              ].map((s, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px 16px' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: ACCENT, fontFamily: 'Barlow Condensed, sans-serif' }}>{s.value}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '6px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section style={{ padding: '96px 32px', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--cyan)', marginBottom: '16px' }}>{es ? 'Comenzar' : 'Get Started'}</p>
          <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '16px' }}>{content.ctaH2}</h2>
          <p style={{ fontSize: '16px', color: 'var(--dim)', marginBottom: '40px' }}>{content.ctaSub}</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: 'var(--blue)', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', boxShadow: '0 0 24px rgba(59,130,246,0.4)' }}>{content.cta1}</Link>
            <Link href="/contact" style={{ background: 'transparent', color: 'var(--white)', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', border: '1px solid var(--border-b)' }}>{content.ctaContact}</Link>
          </div>
        </section>

        <Footer es={es} />

        <style>{`
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
          @media (max-width: 768px) {
            section > div { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </>
  )
}
