import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { softwareApplicationSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HubDiagram from '@/components/HubDiagram'
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

  const safetyFaqs = es ? [
    { question: '¿Qué es K-Safety?', answer: 'K-Safety es una plataforma de seguridad pública que unifica gestión de eventos, GIS, VMS, aplicaciones móviles e integraciones de terceros en un solo centro de mando. Proporciona conciencia situacional en tiempo real para ciudades y agencias de seguridad.' },
    { question: '¿Cómo proporciona K-Safety conciencia situacional?', answer: 'K-Safety superpone incidentes, unidades y transmisiones en vivo en un mapa operativo unificado con GIS en tiempo real. Conecta cámaras, sensores, puntos de acceso, aplicaciones móviles y dispositivos IoT en una sola imagen operativa.' },
    { question: '¿Qué módulos integra K-Safety?', answer: 'K-Safety integra detección de eventos y alertas automáticas, mapeo GIS con seguimiento de unidades en vivo, integración VMS, aplicaciones móviles para respondedores de campo, red de botones de pánico y sensores IoT, y pronóstico de amenazas con IA.' },
    { question: '¿Quién usa K-Safety?', answer: 'K-Safety es utilizado por ciudades, municipios y agencias de seguridad pública. Actualmente opera en 68 proyectos activos, conectando más de 100 agencias con más de 30 integraciones de terceros.' },
    { question: '¿Cómo se compara K-Safety con los PSIM tradicionales?', answer: 'K-Safety supera a los PSIM tradicionales al ofrecer IA predictiva en tiempo real, despliegue flexible en nube o local, y escalabilidad desde una sola ciudad hasta una red nacional. Incluye automatización de eventos, despacho inteligente y analítica geoespacial integrada.' },
  ] : [
    { question: 'What is K-Safety?', answer: 'K-Safety is a public safety platform that unifies event management, GIS, VMS, mobile apps, and third-party integrations into one command center. It provides real-time situational awareness for cities and security agencies.' },
    { question: 'How does K-Safety provide situational awareness?', answer: 'K-Safety overlays incidents, units, and live streams on a unified operational map with real-time GIS. It connects cameras, sensors, access points, mobile apps, and IoT devices into a single operational picture.' },
    { question: 'What modules does K-Safety integrate?', answer: 'K-Safety integrates event detection and automated alerting, GIS mapping with live unit tracking, VMS integration, mobile apps for field responders, panic button and IoT sensor networks, and AI-powered threat forecasting.' },
    { question: 'Who uses K-Safety?', answer: 'K-Safety is used by cities, municipalities, and public safety agencies. It currently operates across 68 active projects, connecting 100+ agencies with 30+ third-party integrations.' },
    { question: 'How does K-Safety compare to traditional PSIM?', answer: 'K-Safety surpasses traditional PSIM by offering real-time predictive AI, flexible cloud or on-premises deployment, and scalability from a single city to a nationwide network. It includes event automation, smart dispatch, and integrated geospatial analytics.' },
  ]

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: 'K-Safety', url: es ? 'https://kabatone.com/es/k-safety/' : 'https://kabatone.com/k-safety/' },
  ]

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema(
          'K-Safety',
          es ? 'Plataforma de seguridad pública que unifica gestión de eventos, GIS en tiempo real, VMS y aplicaciones móviles en un solo centro de mando.' : 'Public safety platform that unifies event management, real-time GIS, VMS, and mobile apps into one command center.',
          'Public Safety Platform',
          'https://kabatone.com/k-safety'
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(safetyFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
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
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: 'DM Mono, monospace', fontSize: '11px', fontWeight: 500, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#06b6d4', marginBottom: '18px' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#06b6d4', boxShadow: '0 0 8px #06b6d4', display: 'inline-block' }}/>
              The Process
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '0' }}>{content.processH2}</h2>
            <HubDiagram
              uid="ks"
              product="K-SAFETY"
              tagline="COLLECT · ANALYZE · INTEGRATE"
              inputs={[
                { label: 'Cameras',       pillW: 100, icon: <><rect x="-10" y="-7" width="15" height="12" rx="2"/><polyline points="5,-5 14,-9 14,3 5,1"/><circle cx="-3" cy="-1" r="2.5" fill="#60a5fa" stroke="none"/></> },
                { label: 'Sensors',       pillW: 100, icon: <><path d="M-12,-10 A17,17 0 0,1 12,-10"/><path d="M-8,-4 A11,11 0 0,1 8,-4"/><path d="M-4,2 A6,6 0 0,1 4,2"/><circle cx="0" cy="7" r="2.5" fill="#60a5fa" stroke="none"/></> },
                { label: 'Access Points', pillW: 116, icon: <><rect x="-11" y="-13" width="22" height="26" rx="3"/><circle cx="-4" cy="-5" r="1.5" fill="#60a5fa" stroke="none"/><circle cx="0" cy="-5" r="1.5" fill="#60a5fa" stroke="none"/><circle cx="4" cy="-5" r="1.5" fill="#60a5fa" stroke="none"/><circle cx="-4" cy="1" r="1.5" fill="#60a5fa" stroke="none"/><circle cx="0" cy="1" r="1.5" fill="#60a5fa" stroke="none"/><circle cx="4" cy="1" r="1.5" fill="#60a5fa" stroke="none"/><rect x="-3" y="6" width="6" height="4" rx="1" fill="#60a5fa" stroke="none"/></> },
                { label: 'Mobile App',    pillW: 100, icon: <><rect x="-7" y="-13" width="14" height="26" rx="3"/><line x1="-2" y1="-8" x2="2" y2="-8"/><circle cx="0" cy="9" r="2" fill="#60a5fa" stroke="none"/></> },
                { label: 'IoT / SMP',     pillW: 100, icon: <><circle cx="0" cy="3" r="4.5" fill="#60a5fa" stroke="none"/><path d="M-9,-6 A13,13 0 0,1 9,-6"/><path d="M-14,-12 A20,20 0 0,1 14,-12"/><line x1="0" y1="7.5" x2="0" y2="13"/><line x1="-4" y1="13" x2="4" y2="13"/></> },
              ]}
              outputs={[
                { label: 'Event Detection', pillW: 118, icon: <><path d="M0,-13 C-5,-13 -10,-8 -10,-1 L-10,6 L10,6 L10,-1 C10,-8 5,-13 0,-13 Z"/><line x1="-13" y1="6" x2="13" y2="6"/><path d="M-2,8 A3,3 0 0,0 2,8"/></> },
                { label: 'Location',        pillW: 82,  icon: <><path d="M0,-14 C-8,-14 -13,-8 -13,-2 C-13,6 0,15 0,15 C0,15 13,6 13,-2 C13,-8 8,-14 0,-14 Z"/><circle cx="0" cy="-2" r="4.5"/></> },
                { label: 'Action',          pillW: 72,  icon: <><polyline points="5,-13 -4,0 5,0 -5,13"/></> },
              ]}
            />
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
              <Link href="/resources/what-is-a-public-safety-platform" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
                transition: 'border-color 0.2s',
              }}>
                {es ? '¿Qué es una plataforma de seguridad pública?' : 'What Is a Public Safety Platform?'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
              <Link href="/resources/psim-vs-unified-platform" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
                transition: 'border-color 0.2s',
              }}>
                {es ? 'PSIM vs Plataforma Unificada' : 'PSIM vs Unified Platform'}
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
            </div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                {es ? 'Ver por industria:' : 'Browse by industry:'}
              </span>
              <Link href="/industries/public-safety" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Seguridad Pública' : 'Public Safety'}
              </Link>
              <Link href="/industries/municipalities" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Municipios' : 'Municipalities'}
              </Link>
              <Link href="/industries/stadiums" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Estadios y Recintos' : 'Stadiums & Venues'}
              </Link>
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
