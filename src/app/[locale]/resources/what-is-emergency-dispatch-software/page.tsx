import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('whatIsEmergencyDispatchSoftware', locale)
}

export default async function WhatIsEmergencyDispatchSoftwarePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#ef4444'

  /* ── FAQ data ── */
  const faqs = es
    ? [
        {
          question: '¿Qué es un software de despacho de emergencias?',
          answer:
            'Un software de despacho de emergencias es una plataforma digital que gestiona el ciclo completo de atención de una emergencia: recepción de la llamada al 911, clasificación del incidente, asignación de la unidad de respuesta más adecuada y seguimiento hasta el cierre. A diferencia del despacho manual por radio, automatiza la búsqueda de recursos disponibles, registra tiempos de cada acción y proporciona al despachador un mapa operativo en tiempo real con la ubicación de todas las unidades activas.',
        },
        {
          question: '¿Cuál es la diferencia entre software de despacho y CAD?',
          answer:
            'CAD (Computer-Aided Dispatch) es un término técnico que describe el módulo central de despacho asistido por computadora. El "software de despacho de emergencias" es el término más amplio que incluye CAD más las integraciones que lo rodean: telefonía 911, mapas GIS, gestión de video, comunicaciones de campo y reportes. Una agencia pequeña puede usar software de despacho básico sin CAD completo. Una agencia grande típicamente necesita un CAD robusto integrado con videovigilancia, sensores y sistemas de comunicación multi-agencia.',
        },
        {
          question: '¿Qué es NG911 y cómo afecta al software de despacho?',
          answer:
            'NG911 (Next Generation 911) es la evolución del sistema de emergencias de voz analógica a una infraestructura digital basada en IP. Con NG911, el software de despacho puede recibir no solo llamadas de voz sino también mensajes de texto, imágenes y videos enviados directamente por los ciudadanos. El sistema también permite el enrutamiento geográfico inteligente (la llamada va al centro de despacho más cercano al incidente, no al más cercano a la torre celular) y la transferencia de datos completa entre centros cuando se escala el incidente.',
        },
        {
          question: '¿Cómo funciona el despacho de emergencias paso a paso?',
          answer:
            'El flujo típico tiene seis pasos: (1) Recepción de la llamada — el operador contesta y el sistema registra automáticamente hora, número y ubicación aproximada. (2) Geolocalización — el sistema obtiene coordenadas GPS precisas del dispositivo del llamante. (3) Clasificación — el operador ingresa el tipo de emergencia y el sistema asigna prioridad. (4) Búsqueda de recursos — el sistema muestra las unidades disponibles más cercanas con ETA estimado. (5) Despacho — el operador selecciona y despacha; la unidad recibe alerta en su dispositivo. (6) Seguimiento — el sistema registra tiempos de llegada, actualizaciones en campo y cierre del incidente.',
        },
        {
          question: '¿Qué características debe tener un buen software de despacho de emergencias?',
          answer:
            'Los seis criterios clave son: (1) Mapa operativo en tiempo real con posición GPS de todas las unidades, (2) Integración con sistemas de video para ver cámaras cercanas al incidente antes de despachar, (3) Multi-agencia — capacidad de coordinar policía, bomberos y EMS en un solo entorno, (4) Registro automático de tiempos para cumplimiento normativo y análisis de rendimiento, (5) Disponibilidad alta (99.9%+) con redundancia ante fallos, (6) Integración con infraestructura NG911 para recibir texto, imagen y video de ciudadanos.',
        },
        {
          question: '¿Cómo apoya KabatOne el despacho de emergencias?',
          answer:
            'KabatOne K-Dispatch es el módulo de despacho de la plataforma unificada. Gestiona el ciclo completo del incidente — desde la recepción de la llamada hasta el cierre — con asignación inteligente de unidades por proximidad y disponibilidad GPS. A diferencia de los sistemas CAD aislados, K-Dispatch opera conectado a K-Video (videovigilancia) y K-Safety (GIS y conciencia situacional), permitiendo al despachador ver las cámaras cercanas al incidente al mismo tiempo que coordina el despacho. KabatOne está desplegado en más de 40 ciudades y centros C4/C5.',
        },
      ]
    : [
        {
          question: 'What is emergency dispatch software?',
          answer:
            'Emergency dispatch software is a digital platform that manages the complete emergency response lifecycle: receiving the 911 call, classifying the incident, assigning the most appropriate response unit, and tracking the incident through closure. Unlike manual radio dispatch, it automates resource lookup, logs timestamps for every action, and gives the dispatcher a real-time operational map showing the location of all active units.',
        },
        {
          question: 'What is the difference between dispatch software and CAD?',
          answer:
            'CAD (Computer-Aided Dispatch) is the technical term for the core computer-assisted dispatch module. "Emergency dispatch software" is the broader category that includes CAD plus surrounding integrations: 911 telephony, GIS maps, video management, field communications, and reporting. A small agency may use basic dispatch software without a full CAD system. A large agency typically needs a robust CAD integrated with video surveillance, sensors, and multi-agency communication systems.',
        },
        {
          question: 'What is NG911 and how does it affect dispatch software?',
          answer:
            'NG911 (Next Generation 911) is the evolution from analog voice emergency systems to an IP-based digital infrastructure. With NG911, dispatch software can receive not only voice calls but also text messages, images, and videos sent directly by citizens. The system also enables intelligent geographic routing (the call goes to the dispatch center nearest the incident, not nearest the cell tower) and full data transfer between dispatch centers when an incident is escalated.',
        },
        {
          question: 'How does emergency dispatch work step by step?',
          answer:
            'The typical flow has six steps: (1) Call intake — the operator answers and the system automatically logs the time, number, and approximate location. (2) Geolocation — the system obtains precise GPS coordinates from the caller\'s device. (3) Classification — the operator enters the emergency type and the system assigns priority. (4) Resource lookup — the system displays the nearest available units with estimated arrival time. (5) Dispatch — the operator selects and dispatches; the unit receives an alert on their device. (6) Tracking — the system records arrival times, field updates, and incident closure.',
        },
        {
          question: 'What features should good emergency dispatch software have?',
          answer:
            'The six key criteria are: (1) Real-time operational map with GPS position of all units, (2) Video integration to view cameras near the incident before dispatching, (3) Multi-agency capability — ability to coordinate police, fire, and EMS in a single environment, (4) Automatic time logging for regulatory compliance and performance analysis, (5) High availability (99.9%+) with failover redundancy, (6) NG911 integration to receive text, image, and video from citizens.',
        },
        {
          question: 'How does KabatOne support emergency dispatch?',
          answer:
            'KabatOne K-Dispatch is the dispatch module of the unified platform. It manages the complete incident lifecycle — from call intake to closure — with intelligent unit assignment by GPS proximity and availability. Unlike siloed CAD systems, K-Dispatch operates connected to K-Video (surveillance) and K-Safety (GIS and situational awareness), allowing the dispatcher to view cameras near the incident while simultaneously coordinating dispatch. KabatOne is deployed across 40+ cities and C4/C5 command centers.',
        },
      ]

  const faqSchema = faqPageSchema(faqs)

  const artSchema = articleSchema(
    es
      ? '¿Qué Es un Software de Despacho de Emergencias?'
      : 'What Is Emergency Dispatch Software?',
    es
      ? 'Guía completa sobre software de despacho de emergencias: definición, diferencia con CAD, NG911 y criterios de evaluación para centros de despacho y seguridad pública.'
      : 'Complete guide to emergency dispatch software: definition, difference from CAD, NG911 integration, and evaluation criteria for dispatch centers and public safety agencies.',
    es
      ? 'https://kabatone.com/es/resources/what-is-emergency-dispatch-software/'
      : 'https://kabatone.com/resources/what-is-emergency-dispatch-software/',
    '2026-04-07'
  )

  const bcSchema = breadcrumbSchema([
    { name: 'Home', url: 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: 'https://kabatone.com/resources/' },
    {
      name: es ? '¿Qué Es un Software de Despacho de Emergencias?' : 'What Is Emergency Dispatch Software?',
      url: es
        ? 'https://kabatone.com/es/resources/what-is-emergency-dispatch-software/'
        : 'https://kabatone.com/resources/what-is-emergency-dispatch-software/',
    },
  ])

  /* ── Comparison table data ── */
  const comparison = es
    ? {
        headers: ['Capacidad', 'Despacho Manual', 'Software de Despacho'],
        rows: [
          ['Localización de unidades', 'Mapa físico / radio', 'GPS en tiempo real'],
          ['Tiempo de asignación', '2–5 min promedio', '< 30 segundos'],
          ['Registro de tiempos', 'Manual / papel', 'Automático y auditable'],
          ['Coordinación multi-agencia', 'Llamadas de voz', 'Plataforma unificada'],
          ['Contexto visual del incidente', 'Sin acceso', 'Cámaras integradas'],
          ['NG911 (texto, video)', 'No soportado', 'Nativo en plataformas modernas'],
          ['Análisis de rendimiento', 'Reportes manuales', 'Dashboards automáticos'],
        ],
      }
    : {
        headers: ['Capability', 'Manual Dispatch', 'Dispatch Software'],
        rows: [
          ['Unit location tracking', 'Physical map / radio', 'Real-time GPS'],
          ['Assignment time', '2–5 min average', '< 30 seconds'],
          ['Time logging', 'Manual / paper', 'Automatic and auditable'],
          ['Multi-agency coordination', 'Voice calls', 'Unified platform'],
          ['Visual incident context', 'No access', 'Integrated cameras'],
          ['NG911 (text, video)', 'Not supported', 'Native in modern platforms'],
          ['Performance analytics', 'Manual reports', 'Automatic dashboards'],
        ],
      }

  /* ── Workflow steps ── */
  const steps = es
    ? [
        { n: '01', title: 'Recepción de la llamada', desc: 'El sistema registra automáticamente hora, número y ubicación aproximada del llamante en cuanto el operador contesta.' },
        { n: '02', title: 'Geolocalización del incidente', desc: 'Coordenadas GPS precisas obtenidas del dispositivo del llamante. El mapa operativo muestra el punto exacto del incidente.' },
        { n: '03', title: 'Clasificación y priorización', desc: 'El operador ingresa el tipo de emergencia. El sistema asigna prioridad automáticamente y filtra los recursos disponibles.' },
        { n: '04', title: 'Asignación de recursos', desc: 'El software muestra las unidades disponibles más cercanas con ETA. El operador selecciona la unidad óptima en segundos.' },
        { n: '05', title: 'Despacho y seguimiento en campo', desc: 'La unidad recibe la alerta en su dispositivo móvil. El sistema rastrea ubicación, tiempos de llegada y actualizaciones de estado.' },
        { n: '06', title: 'Cierre y análisis', desc: 'El incidente se cierra con registro completo de tiempos. Los datos alimentan reportes de rendimiento y cumplimiento normativo.' },
      ]
    : [
        { n: '01', title: 'Call intake', desc: 'The system automatically logs the time, number, and approximate caller location the moment the operator answers.' },
        { n: '02', title: 'Incident geolocation', desc: 'Precise GPS coordinates obtained from the caller\'s device. The operational map shows the exact incident location.' },
        { n: '03', title: 'Classification and prioritization', desc: 'The operator enters the emergency type. The system automatically assigns priority and filters available resources.' },
        { n: '04', title: 'Resource assignment', desc: 'The software displays the nearest available units with ETA. The operator selects the optimal unit in seconds.' },
        { n: '05', title: 'Dispatch and field tracking', desc: 'The unit receives the alert on their mobile device. The system tracks location, arrival times, and status updates.' },
        { n: '06', title: 'Closure and analysis', desc: 'The incident closes with a complete time log. Data feeds performance reports and regulatory compliance documentation.' },
      ]

  /* ── Evaluation criteria ── */
  const criteria = es
    ? [
        { title: 'Mapa operativo en tiempo real', desc: 'Posición GPS de todas las unidades activas visible para el despachador en todo momento.' },
        { title: 'Integración de videovigilancia', desc: 'Acceso a cámaras cercanas al incidente desde la misma pantalla de despacho, sin cambiar de sistema.' },
        { title: 'Soporte multi-agencia', desc: 'Coordinación de policía, bomberos y EMS en un solo entorno operativo compartido.' },
        { title: 'Registro automático de tiempos', desc: 'Captura automática de cada timestamp para análisis de rendimiento y cumplimiento normativo.' },
        { title: 'Alta disponibilidad', desc: 'Arquitectura con redundancia que garantiza operación continua incluso ante fallas de componentes.' },
        { title: 'Compatibilidad NG911', desc: 'Capacidad para recibir texto, imagen y video de ciudadanos y transferir datos completos entre centros.' },
      ]
    : [
        { title: 'Real-time operational map', desc: 'GPS position of all active units visible to the dispatcher at all times.' },
        { title: 'Video surveillance integration', desc: 'Access to cameras near the incident from the same dispatch screen, without switching systems.' },
        { title: 'Multi-agency support', desc: 'Coordination of police, fire, and EMS in a single shared operational environment.' },
        { title: 'Automatic time logging', desc: 'Automatic capture of every timestamp for performance analysis and regulatory compliance.' },
        { title: 'High availability', desc: 'Redundant architecture ensuring continuous operation even when individual components fail.' },
        { title: 'NG911 compatibility', desc: 'Ability to receive text, image, and video from citizens and transfer complete data between dispatch centers.' },
      ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(artSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />

      <Nav />

      <main style={{ background: '#060d18', color: '#e2e8f0', fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>

        {/* ── Hero ── */}
        <section style={{ paddingTop: '100px', paddingBottom: '60px', background: 'linear-gradient(180deg,#0a1628 0%,#060d18 100%)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: ACCENT, background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '4px', padding: '3px 10px' }}>
                {es ? 'Guía de Referencia' : 'Reference Guide'}
              </span>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', padding: '3px 10px' }}>
                K-Dispatch
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '.01em', color: '#f0f4f8', marginBottom: '20px' }}>
              {es ? '¿Qué Es un Software de Despacho de Emergencias?' : 'What Is Emergency Dispatch Software?'}
            </h1>
            <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7, maxWidth: '720px', marginBottom: '32px' }}>
              {es
                ? 'El software de despacho de emergencias coordina la recepción de llamadas al 911, la clasificación del incidente y el envío de unidades de respuesta. Esta guía explica cómo funciona, su diferencia con CAD, NG911 y los criterios para elegir la plataforma correcta.'
                : 'Emergency dispatch software coordinates 911 call intake, incident classification, and response unit assignment. This guide explains how it works, how it differs from CAD, NG911 integration, and the criteria for choosing the right platform.'}
            </p>
            {/* Internal links */}
            <div style={{ fontSize: '12px', color: '#475569', lineHeight: 2 }}>
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Integraciones:' : 'Integrations:'}</span>
              <Link href="/integrations/lpr" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>LPR</Link>
              <Link href="/integrations/panic-buttons" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>{es ? 'Botones de Pánico' : 'Panic Buttons'}</Link>
              <Link href="/integrations/sensor-fusion" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>{es ? 'Fusión de Sensores' : 'Sensor Fusion'}</Link>
              <br />
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Recursos:' : 'Resources:'}</span>
              <Link href="/resources/what-is-a-psap" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? '¿Qué Es un PSAP?' : 'What Is a PSAP?'}</Link>
              <Link href="/resources/what-is-cad-dispatch-software" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? 'Software CAD' : 'CAD Software'}</Link>
              <Link href="/resources/what-is-a-command-center" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? 'Centro de Mando' : 'Command Center'}</Link>
              <Link href="/resources/what-is-emergency-management-software" style={{ color: '#94a3b8', textDecoration: 'none' }}>{es ? 'Gestión de Emergencias' : 'Emergency Management'}</Link>
            </div>
          </div>
        </section>

        {/* ── Definition ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '16px' }}>
            {es ? 'Definición' : 'Definition'}
          </h2>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '16px' }}>
            {es
              ? 'El software de despacho de emergencias es una plataforma digital que gestiona el ciclo completo de atención de una emergencia. Cubre desde que el operador recibe la llamada al 911 hasta que la unidad de campo cierra el incidente.'
              : 'Emergency dispatch software is a digital platform that manages the complete emergency response lifecycle — from the moment an operator receives a 911 call to when the field unit closes the incident.'}
          </p>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '16px' }}>
            {es
              ? 'El término se usa con mayor frecuencia en búsquedas generales que "CAD" (Computer-Aided Dispatch), que es la denominación técnica del módulo central de despacho. En la práctica, "software de despacho de emergencias" abarca el CAD más las integraciones que lo rodean: telefonía 911, mapas GIS, gestión de video, comunicaciones de campo y reportes de rendimiento.'
              : 'The term is used more broadly in searches than "CAD" (Computer-Aided Dispatch), which is the technical name for the core dispatch module. In practice, "emergency dispatch software" covers CAD plus the integrations that surround it: 911 telephony, GIS maps, video management, field communications, and performance reporting.'}
          </p>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            {es
              ? 'Los centros de despacho modernos — incluyendo los C4/C5 en México y los PSAPs en Estados Unidos — no operan con un CAD aislado. Necesitan una plataforma que conecte el despacho con videovigilancia, GIS y coordinación multi-agencia en un solo entorno operativo.'
              : 'Modern dispatch centers — including C4/C5 centers in Mexico and PSAPs in the United States — do not operate with an isolated CAD. They need a platform that connects dispatch with video surveillance, GIS, and multi-agency coordination in a single operational environment.'}
          </p>
        </section>

        {/* ── How it works (6 steps) ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '8px' }}>
            {es ? 'Cómo Funciona el Despacho de Emergencias' : 'How Emergency Dispatch Works'}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '32px' }}>
            {es ? 'Flujo paso a paso desde la llamada al cierre del incidente' : 'Step-by-step flow from call intake to incident closure'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
            {steps.map((s) => (
              <div key={s.n} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '20px 22px', borderTop: `2px solid ${ACCENT}` }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', fontWeight: 700, color: ACCENT, letterSpacing: '.1em', marginBottom: '8px' }}>{s.n}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#f0f4f8', marginBottom: '8px' }}>{s.title}</div>
                <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CAD vs Dispatch Software ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '16px' }}>
            {es ? 'Software de Despacho vs CAD: ¿Cuál Es la Diferencia?' : 'Dispatch Software vs CAD: What Is the Difference?'}
          </h2>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '28px' }}>
            {es
              ? 'CAD es el motor técnico de despacho. El software de despacho de emergencias es el entorno completo que incluye CAD más las integraciones necesarias para operar un centro de mando moderno.'
              : 'CAD is the technical dispatch engine. Emergency dispatch software is the complete environment that includes CAD plus the integrations required to operate a modern command center.'}
          </p>
          <div style={{ overflowX: 'auto', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: 'rgba(239,68,68,0.08)' }}>
                  {comparison.headers.map((h, i) => (
                    <th key={i} style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: i === 0 ? '#64748b' : i === 1 ? '#94a3b8' : ACCENT, borderBottom: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, ri) => (
                  <tr key={ri} style={{ borderBottom: ri < comparison.rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', background: ri % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ padding: '12px 16px', color: ci === 0 ? '#94a3b8' : ci === 1 ? '#64748b' : '#f0f4f8', fontWeight: ci === 2 ? 600 : 400 }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── NG911 ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '16px' }}>
            {es ? 'NG911: La Evolución del Despacho de Emergencias' : 'NG911: The Evolution of Emergency Dispatch'}
          </h2>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '16px' }}>
            {es
              ? 'NG911 (Next Generation 911) transforma el sistema de emergencias de voz analógica a una infraestructura digital basada en IP. Para el software de despacho, esto significa tres cambios fundamentales.'
              : 'NG911 (Next Generation 911) transforms emergency systems from analog voice to an IP-based digital infrastructure. For dispatch software, this means three fundamental changes.'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px', marginBottom: '24px' }}>
            {(es
              ? [
                  { title: 'Multi-modal', desc: 'Recepción de texto, imágenes y video del ciudadano — no solo voz. El despachador ve el contexto visual antes de despachar.' },
                  { title: 'Enrutamiento inteligente', desc: 'La llamada va al centro de despacho más cercano al incidente, no al más cercano a la torre celular del llamante.' },
                  { title: 'Transferencia de datos', desc: 'Los datos completos del incidente (audio, video, GIS) se transfieren entre centros cuando se escala o se necesita apoyo.' },
                ]
              : [
                  { title: 'Multi-modal', desc: 'Receive text, images, and video from citizens — not just voice. The dispatcher sees visual context before dispatching.' },
                  { title: 'Intelligent routing', desc: 'The call goes to the dispatch center nearest the incident, not nearest the caller\'s cell tower.' },
                  { title: 'Data transfer', desc: 'Complete incident data (audio, video, GIS) transfers between centers when the incident is escalated or mutual aid is needed.' },
                ]
            ).map((item, i) => (
              <div key={i} style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: '10px', padding: '18px 20px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: ACCENT, marginBottom: '6px' }}>{item.title}</div>
                <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>
            {es
              ? 'En México, los centros C4/C5 están en proceso de transición hacia infraestructura NG911. El sistema 911 nacional, implementado en 2017, continúa expandiendo su capacidad tecnológica. Las plataformas de despacho modernas como KabatOne están diseñadas para operar en entornos NG911 desde el inicio.'
              : 'In Mexico, C4/C5 centers are in the process of transitioning to NG911 infrastructure. The national 911 system, implemented in 2017, continues expanding its technological capability. Modern dispatch platforms like KabatOne are designed to operate in NG911 environments from the start.'}
          </p>
        </section>

        {/* ── Evaluation criteria ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '8px' }}>
            {es ? 'Cómo Elegir un Software de Despacho de Emergencias' : 'How to Choose Emergency Dispatch Software'}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '28px' }}>
            {es ? '6 criterios clave para centros de mando y agencias de seguridad pública' : '6 key criteria for command centers and public safety agencies'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '14px' }}>
            {criteria.map((c, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '18px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', fontWeight: 700, color: ACCENT }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#f0f4f8' }}>{c.title}</span>
                </div>
                <p style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '28px' }}>
            {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '20px 22px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#f0f4f8', marginBottom: '10px' }}>{faq.question}</div>
                <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.7 }}>{faq.answer}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related resources ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#475569', marginBottom: '14px' }}>
            {es ? 'Recursos Relacionados' : 'Related Resources'}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              { href: '/resources/what-is-a-psap', label: es ? '¿Qué Es un PSAP?' : 'What Is a PSAP?' },
              { href: '/resources/what-is-cad-dispatch-software', label: es ? '¿Qué Es un Software CAD?' : 'What Is CAD Software?' },
              { href: '/resources/what-is-a-command-center', label: es ? '¿Qué Es un Centro de Mando?' : 'What Is a Command Center?' },
              { href: '/resources/what-is-emergency-management-software', label: es ? 'Software de Gestión de Emergencias' : 'Emergency Management Software' },
              { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Centro de Crimen en Tiempo Real' : 'Real-Time Crime Center' },
            ].map((r) => (
              <Link key={r.href} href={r.href} style={{ fontSize: '12px', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '6px 12px', textDecoration: 'none' }}>
                {r.label}
              </Link>
            ))}
          </div>
        </section>

        <div style={{ height: '60px' }} />
        <CTASection
          es={es}
          h2={es ? '¿Listo para Modernizar tu Centro de Despacho?' : 'Ready to Modernize Your Dispatch Center?'}
          subtitle={es
            ? 'Agenda una demo de K-Dispatch y ve cómo KabatOne unifica despacho, video y GIS en un solo entorno operativo.'
            : 'Schedule a K-Dispatch demo and see how KabatOne unifies dispatch, video, and GIS into a single operational environment.'}
        />
      </main>

      <Footer es={es} />
    </>
  )
}
