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
  return generatePageMetadata('whatIsCadDispatchSoftware', locale)
}

export default async function WhatIsCadDispatchSoftwarePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#3b82f6'

  /* ── FAQ data ── */
  const faqs = es
    ? [
        {
          question: '¿Qué es el software CAD de despacho?',
          answer:
            'El software CAD (Computer-Aided Dispatch) de despacho es un sistema digital que gestiona la recepción de llamadas de emergencia, la clasificación de incidentes y el despacho de unidades de respuesta. Reemplaza los registros manuales en papel y las comunicaciones por radio no coordinadas con flujos de trabajo automatizados que asignan la unidad más cercana disponible en segundos y registran cada acción para auditoría completa.',
        },
        {
          question: '¿Cómo funciona el software CAD?',
          answer:
            'Cuando un operador de 911 recibe una llamada, el software CAD captura la dirección del incidente, clasifica el tipo de emergencia y busca automáticamente las unidades disponibles más cercanas por GPS. El sistema genera una recomendación de despacho en segundos. El operador confirma el despacho, la unidad recibe la alerta en su dispositivo móvil, y el CAD registra los tiempos exactos de cada paso para análisis de rendimiento posterior.',
        },
        {
          question: '¿Cuál es la diferencia entre CAD y despacho tradicional?',
          answer:
            'El despacho tradicional depende de mapas físicos, registros de papel y comunicación manual por radio. El operador debe localizar manualmente las unidades disponibles y coordinar por voz. El software CAD automatiza la búsqueda de unidades, recomienda el mejor recurso disponible basándose en proximidad GPS y tipo de incidente, y registra automáticamente todos los tiempos de respuesta, eliminando errores humanos y reduciendo el tiempo de despacho hasta en un 60%.',
        },
        {
          question: '¿Puede el software CAD integrarse con sistemas de video y GIS?',
          answer:
            'Sí. Los sistemas CAD modernos se integran con gestión de video (VMS) para mostrar automáticamente cámaras cercanas al incidente, con GIS para visualizar unidades en un mapa operativo en tiempo real, y con sistemas de comunicación para alertas automáticas. KabatOne K-Dispatch opera como parte de una plataforma unificada que conecta CAD, video, GIS y operaciones de campo en un solo entorno.',
        },
        {
          question: '¿Qué es el despacho 911 asistido por computadora?',
          answer:
            'El despacho 911 asistido por computadora (CAD) es la versión del software CAD diseñada específicamente para centros de atención de llamadas de emergencia 911. Gestiona el flujo completo desde la recepción de la llamada hasta el despacho de unidades, con funcionalidades específicas como integración con ANI/ALI (identificación automática de número y ubicación), manejo de llamadas silenciosas y priorización automática de incidentes según protocolos de la agencia.',
        },
        {
          question: '¿Qué agencias usan software CAD?',
          answer:
            'El software CAD es utilizado por centros de comunicaciones policiales (C2, C3, C4, C5), servicios de emergencias médicas (EMS), departamentos de bomberos, guardias costeras y organizaciones de gestión de emergencias municipales. En México, los centros de mando C5 (Comando, Control, Comunicaciones, Cómputo y Contacto Ciudadano) representan la implementación más completa, integrando CAD con videovigilancia, GIS y tráfico en un solo centro de operaciones.',
        },
      ]
    : [
        {
          question: 'What is CAD dispatch software?',
          answer:
            'CAD (Computer-Aided Dispatch) software is a digital system that manages emergency call intake, incident classification, and the dispatch of response units. It replaces manual paper logs and uncoordinated radio communications with automated workflows that assign the nearest available unit in seconds and log every action for complete audit trails.',
        },
        {
          question: 'How does CAD software work?',
          answer:
            'When a 911 operator receives a call, CAD software captures the incident address, classifies the emergency type, and automatically searches for the nearest available units by GPS. The system generates a dispatch recommendation within seconds. The operator confirms dispatch, the unit receives the alert on their mobile device, and the CAD logs exact timestamps of every step for post-incident performance analysis.',
        },
        {
          question: 'What is the difference between CAD and traditional dispatch?',
          answer:
            'Traditional dispatch relies on physical maps, paper logs, and manual radio coordination. Operators must manually locate available units and coordinate by voice. CAD software automates unit search, recommends the best available resource based on GPS proximity and incident type, and automatically records all response times — eliminating human error and reducing dispatch time by up to 60%.',
        },
        {
          question: 'Can CAD software integrate with video and GIS systems?',
          answer:
            'Yes. Modern CAD systems integrate with video management (VMS) to automatically display nearby cameras at an incident, with GIS to visualize units on a real-time operational map, and with communications systems for automatic alerts. KabatOne K-Dispatch operates as part of a unified platform that connects CAD, video, GIS, and field operations in a single environment.',
        },
        {
          question: 'What is computer-aided 911 dispatch?',
          answer:
            'Computer-aided 911 dispatch (CAD) is the version of dispatch software designed specifically for emergency 911 call centers. It manages the complete workflow from call receipt to unit dispatch, with specific features including ANI/ALI integration (automatic number and location identification), silent call handling, and automatic incident prioritization based on agency protocols.',
        },
        {
          question: 'What agencies use CAD software?',
          answer:
            'CAD software is used by police communications centers (C2, C3, C4, C5), emergency medical services (EMS), fire departments, coast guards, and municipal emergency management organizations. In Mexico, C5 command centers (Comando, Control, Comunicaciones, Cómputo y Contacto Ciudadano) represent the most complete implementation, integrating CAD with video surveillance, GIS, and traffic in a single operations center.',
        },
      ]

  /* ── Breadcrumb items ── */
  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    {
      name: es ? '¿Qué Es el Software CAD de Despacho?' : 'What Is CAD Dispatch Software?',
      url: es ? 'https://kabatone.com/es/resources/what-is-cad-dispatch-software/' : 'https://kabatone.com/resources/what-is-cad-dispatch-software/',
    },
  ]

  /* ── Shared styles ── */
  const sectionStyle: React.CSSProperties = {
    borderTop: '1px solid var(--border)',
    padding: '72px 32px',
  }
  const containerStyle: React.CSSProperties = {
    maxWidth: '820px',
    margin: '0 auto',
  }
  const h2Style: React.CSSProperties = {
    fontSize: 'clamp(24px, 3vw, 36px)',
    fontWeight: 800,
    fontFamily: 'Barlow Condensed, sans-serif',
    textTransform: 'uppercase',
    lineHeight: 1.1,
    marginBottom: '20px',
    marginTop: '0',
  }
  const h3Style: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 700,
    fontFamily: 'Barlow Condensed, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
    lineHeight: 1.2,
    marginBottom: '12px',
    marginTop: '40px',
  }
  const pStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 300,
    color: 'var(--dim)',
    lineHeight: 1.8,
    marginBottom: '20px',
  }

  return (
    <>
      <Nav />

      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(breadcrumbs)
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema(
              es
                ? '¿Qué Es el Software CAD de Despacho? Guía para Agencias de Seguridad Pública'
                : 'What Is CAD Dispatch Software? A Guide for Public Safety Agencies',
              es
                ? 'El software CAD de despacho gestiona la recepción de llamadas de emergencia, la clasificación de incidentes y el despacho de unidades. Aprende cómo funciona y qué buscar en un sistema moderno.'
                : 'CAD dispatch software manages emergency call intake, incident classification, and unit dispatch. Learn how it works, what modern systems include, and how to choose the right platform.',
              es ? 'https://kabatone.com/es/resources/what-is-cad-dispatch-software/' : 'https://kabatone.com/resources/what-is-cad-dispatch-software/',
              '2026-03-23'
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── BREADCRUMB ── */}
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '24px 32px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '12px', color: 'var(--muted)', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              {es ? 'Inicio' : 'Home'}
            </Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/resources" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              {es ? 'Recursos' : 'Resources'}
            </Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>
              {es ? '¿Qué Es el Software CAD de Despacho?' : 'What Is CAD Dispatch Software?'}
            </span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Guía de Referencia' : 'Reference Guide'}
            </p>
            <h1 style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 800,
              fontFamily: 'Barlow Condensed, sans-serif',
              textTransform: 'uppercase',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}>
              {es
                ? '¿Qué Es el Software CAD de Despacho?'
                : 'What Is CAD Dispatch Software?'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'El software CAD (Computer-Aided Dispatch) de despacho es un sistema digital que gestiona el flujo completo de una emergencia, desde la recepción de la llamada de 911 hasta el despacho de la unidad de respuesta. Reemplaza los registros en papel, los mapas de pared y la coordinación manual por radio con flujos de trabajo automatizados: el operador recibe la llamada, el sistema localiza las unidades disponibles más cercanas por GPS, recomienda el mejor recurso y despacha en segundos. Cada acción queda registrada con marca de tiempo para auditoría, análisis de rendimiento y cumplimiento regulatorio.'
                : 'CAD dispatch software — Computer-Aided Dispatch — is a digital system that manages the complete emergency workflow from 911 call intake to unit dispatch. It replaces paper logs, wall maps, and manual radio coordination with automated workflows: an operator receives the call, the system locates the nearest available units by GPS, recommends the best resource, and dispatches in seconds. Every action is time-stamped and logged for audit, performance analysis, and regulatory compliance.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 1: Core Functions ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? '¿Qué Hace un Sistema CAD?'
                : 'What Does a CAD System Do?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Un sistema CAD moderno cubre cuatro funciones operativas que antes requerían procesos manuales separados: recepción de llamadas, clasificación de incidentes, gestión de recursos y registro de respuesta.'
                : 'A modern CAD system covers four operational functions that previously required separate manual processes: call intake, incident classification, resource management, and response logging.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Recepción de Llamadas de Emergencia' : 'Emergency Call Intake'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'Cuando entra una llamada al centro de despacho, el sistema CAD captura automáticamente la información del llamante — número de teléfono, ubicación por ANI/ALI, historial previo del número — y presenta al operador una pantalla estructurada para ingresar el tipo de incidente. Los sistemas integrados con NG911 también reciben texto, video y datos de sensores de vehículos conectados. El tiempo de captura de datos se reduce de varios minutos a segundos.'
                : 'When a call enters the dispatch center, the CAD system automatically captures caller information — phone number, location via ANI/ALI, prior call history for that number — and presents the operator a structured screen to enter the incident type. Systems integrated with NG911 also receive text, video, and data from connected vehicle sensors. Data capture time is reduced from several minutes to seconds.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Clasificación y Priorización de Incidentes' : 'Incident Classification and Prioritization'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'El sistema clasifica cada incidente según protocolos predefinidos por la agencia — robo, accidente vehicular, incendio, emergencia médica — y le asigna un nivel de prioridad. Los incidentes de alta prioridad se marcan visualmente y ascienden automáticamente en la cola de despacho. Los sistemas avanzados sugieren protocolos de respuesta basados en el tipo de incidente, la hora del día y el historial de incidentes similares en esa ubicación.'
                : 'The system classifies each incident according to agency-defined protocols — robbery, vehicle accident, fire, medical emergency — and assigns a priority level. High-priority incidents are visually flagged and automatically elevated in the dispatch queue. Advanced systems suggest response protocols based on incident type, time of day, and the history of similar incidents at that location.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Gestión y Despacho de Recursos' : 'Resource Management and Dispatch'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'El motor de gestión de recursos rastrea en tiempo real el estado y la ubicación GPS de todas las unidades disponibles — patrullas, ambulancias, unidades de bomberos, recursos de respaldo. Cuando el operador confirma un incidente, el sistema recomienda automáticamente la unidad más cercana disponible y compatible con el tipo de incidente. El despacho se confirma con un clic, la unidad recibe la alerta en su dispositivo móvil y el CAD registra el tiempo exacto de despacho. KabatOne K-Dispatch procesa el flujo completo desde la llamada hasta el despacho en segundos.'
                : 'The resource management engine tracks in real time the status and GPS location of all available units — patrol cars, ambulances, fire units, backup resources. When the operator confirms an incident, the system automatically recommends the nearest available unit compatible with the incident type. Dispatch is confirmed in one click, the unit receives the alert on their mobile device, and the CAD logs the exact dispatch time. KabatOne K-Dispatch processes the full flow from call to dispatch in seconds.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Registro y Auditoría de Respuesta' : 'Response Logging and Audit'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'Cada acción en el ciclo de vida de un incidente — recepción de llamada, clasificación, despacho, llegada de unidad, resolución, cierre — queda registrada automáticamente con marca de tiempo. Este registro genera el historial completo del incidente para análisis de rendimiento, revisión post-incidente, procesos legales y cumplimiento regulatorio. Las ciudades con software CAD moderno reducen el tiempo de generación de reportes de incidentes de horas a minutos.'
                : 'Every action in an incident lifecycle — call receipt, classification, dispatch, unit arrival, resolution, closure — is automatically logged with a timestamp. This log generates the complete incident history for performance analysis, post-incident review, legal proceedings, and regulatory compliance. Cities with modern CAD software reduce incident report generation time from hours to minutes.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 2: How Dispatch Works Step by Step ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? '¿Cómo Funciona el Despacho CAD Paso a Paso?'
                : 'How Does CAD Dispatch Work Step by Step?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'El flujo operativo de un sistema CAD sigue una secuencia definida que conecta al llamante con la unidad de respuesta en el menor tiempo posible.'
                : 'The operational flow of a CAD system follows a defined sequence that connects the caller to the response unit in the shortest possible time.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {(es
                ? [
                    { step: '01', title: 'Llamada entra al sistema', desc: 'El centro 911 recibe la llamada. El CAD captura automáticamente el número, la ubicación por GPS y el historial del llamante. El operador ve una pantalla estructurada para ingresar el tipo de incidente.' },
                    { step: '02', title: 'Clasificación del incidente', desc: 'El operador selecciona el tipo de incidente en el menú del sistema. El CAD asigna prioridad automáticamente según los protocolos de la agencia y sugiere el nivel de respuesta recomendado.' },
                    { step: '03', title: 'Búsqueda de recursos', desc: 'El motor de recursos busca en tiempo real las unidades disponibles más cercanas con el equipamiento correcto para el tipo de incidente. Las unidades se muestran en el mapa con su distancia al incidente.' },
                    { step: '04', title: 'Despacho confirmado', desc: 'El operador selecciona la unidad recomendada (o elige otra) y confirma el despacho. El CAD registra el tiempo exacto de despacho y actualiza el estado de la unidad a "en ruta".' },
                    { step: '05', title: 'Unidad notificada', desc: 'La unidad recibe la alerta en su dispositivo móvil con la dirección del incidente, el tipo y cualquier información adicional. El CAD rastrea el movimiento GPS de la unidad hacia el incidente.' },
                    { step: '06', title: 'Registro de cierre', desc: 'Al resolver el incidente, la unidad actualiza su estado desde el campo. El CAD cierra el incidente, registra el tiempo de resolución y genera el registro completo para análisis posterior.' },
                  ]
                : [
                    { step: '01', title: 'Call enters the system', desc: 'The 911 center receives the call. The CAD automatically captures the number, GPS location via ANI/ALI, and caller history. The operator sees a structured screen to enter the incident type.' },
                    { step: '02', title: 'Incident classification', desc: 'The operator selects the incident type from the system menu. The CAD automatically assigns priority based on agency protocols and suggests the recommended response level.' },
                    { step: '03', title: 'Resource search', desc: 'The resource engine searches in real time for the nearest available units with the correct equipment for the incident type. Units appear on the map with their distance to the incident.' },
                    { step: '04', title: 'Dispatch confirmed', desc: 'The operator selects the recommended unit (or chooses another) and confirms dispatch. The CAD logs the exact dispatch timestamp and updates the unit status to "en route".' },
                    { step: '05', title: 'Unit notified', desc: 'The unit receives the alert on their mobile device with the incident address, type, and any additional information. The CAD tracks the unit\'s GPS movement toward the incident.' },
                    { step: '06', title: 'Closure logged', desc: 'When the incident is resolved, the unit updates their status from the field. The CAD closes the incident, records the resolution time, and generates the complete log for later analysis.' },
                  ]
              ).map((item) => (
                <div
                  key={item.step}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                    background: '#0b1628',
                    borderRadius: '10px',
                    border: '1px solid var(--border)',
                    padding: '20px 24px',
                  }}
                >
                  <span style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: ACCENT,
                    minWidth: '28px',
                    paddingTop: '2px',
                  }}>
                    {item.step}
                  </span>
                  <div>
                    <p style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      color: 'var(--white)',
                      marginBottom: '6px',
                      marginTop: '0',
                    }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: CAD vs Unified Platform ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? '¿Cuándo el CAD Solo No Es Suficiente?'
                : 'When Is CAD Alone Not Enough?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'El software CAD resuelve el problema de la coordinación de despacho, pero el incidente no termina cuando la unidad llega. El comandante en el centro necesita ver lo que ocurre en el lugar — video de cámaras cercanas, posición exacta de todas las unidades, estado del tráfico en las rutas de acceso. Un CAD aislado no proporciona esta visión.'
                : 'CAD software solves the dispatch coordination problem, but the incident does not end when the unit arrives. The commander at the center needs to see what is happening on the scene — video from nearby cameras, exact position of all units, traffic status on access routes. A standalone CAD does not provide this view.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'Las agencias que operan con CAD aislado deben cambiar entre tres o cuatro sistemas para obtener la imagen completa: el CAD para el estado de las unidades, el VMS para el video, el GIS para la posición en el mapa y el radio para coordinación de campo. Este cambio constante entre interfaces aumenta el tiempo de respuesta y el riesgo de error en el momento más crítico.'
                : 'Agencies operating with standalone CAD must switch between three or four systems to get the complete picture: the CAD for unit status, the VMS for video, the GIS for map position, and radio for field coordination. This constant interface switching increases response time and error risk at the most critical moment.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'Las plataformas unificadas de seguridad pública como KabatOne integran CAD, video, GIS y operaciones de campo en un solo entorno. Cuando el operador crea un incidente en K-Dispatch, las cámaras cercanas aparecen automáticamente en K-Video, la posición del incidente se marca en el mapa de K-Safety y las unidades reciben la alerta en su aplicación móvil — todo sin cambiar de sistema.'
                : 'Unified public safety platforms like KabatOne integrate CAD, video, GIS, and field operations into a single environment. When an operator creates an incident in K-Dispatch, nearby cameras automatically appear in K-Video, the incident position is marked on the K-Safety map, and units receive the alert on their mobile app — all without switching systems.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '32px' }}>
              {(es
                ? [
                    { label: 'CAD Aislado', items: ['Gestiona despacho de unidades', 'No tiene video integrado', 'Sin mapa operativo en tiempo real', 'Requiere sistemas adicionales', 'Cambio constante entre interfaces'] },
                    { label: 'Plataforma Unificada', items: ['CAD + video + GIS en un entorno', 'Cámaras cercanas automáticas al incidente', 'Mapa operativo con unidades en vivo', 'Sin integración intermedia', 'Una sola interfaz para el operador'] },
                  ]
                : [
                    { label: 'Standalone CAD', items: ['Manages unit dispatch', 'No integrated video', 'No real-time operational map', 'Requires additional systems', 'Constant interface switching'] },
                    { label: 'Unified Platform', items: ['CAD + video + GIS in one environment', 'Nearby cameras auto-appear at incident', 'Operational map with live units', 'No middleware integration', 'Single interface for the operator'] },
                  ]
              ).map((col, i) => (
                <div
                  key={i}
                  style={{
                    background: i === 1 ? 'rgba(59,130,246,0.05)' : '#0b1628',
                    borderRadius: '10px',
                    border: i === 1 ? `1px solid ${ACCENT}40` : '1px solid var(--border)',
                    padding: '24px',
                  }}
                >
                  <p style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: i === 1 ? ACCENT : 'var(--muted)',
                    marginBottom: '16px',
                    marginTop: '0',
                  }}>
                    {col.label}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {col.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.5 }}>
                        <span style={{ color: i === 1 ? ACCENT : 'var(--muted)', minWidth: '12px', marginTop: '1px' }}>
                          {i === 1 ? '✓' : '—'}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: What to Look For ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? '¿Qué Buscar en un Software CAD Moderno?'
                : 'What to Look for in Modern CAD Software?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Las agencias que evalúan software CAD para su centro de mando o punto de actualización deben priorizar estos criterios.'
                : 'Agencies evaluating CAD software for their command center or upgrade cycle should prioritize these criteria.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
              {(es
                ? [
                    { title: 'Geolocalización GPS en Tiempo Real', desc: 'Las unidades deben aparecer en el mapa operativo en tiempo real. El motor de recomendación de despacho depende de datos GPS precisos y actualizados para sugerir la unidad correcta.' },
                    { title: 'Integración con Video y GIS', desc: 'El CAD debe conectarse nativamente con la gestión de video y el mapa GIS. La integración profunda elimina el cambio de interfaces; la integración superficial solo agrega una capa de complejidad.' },
                    { title: 'Soporte para NG911', desc: 'El sistema debe soportar texto, video y datos de llamadas de vehículos conectados, además de voz. El Next Generation 911 es el estándar futuro y la migración a él es inevitable.' },
                    { title: 'Protocolo de Despacho Configurable', desc: 'Los protocolos de priorización y los niveles de respuesta deben ser configurables por la agencia, no fijos por el proveedor. Las necesidades operativas de una ciudad de 100,000 habitantes difieren de las de una metrópolis de 5 millones.' },
                    { title: 'Aplicación Móvil para Unidades de Campo', desc: 'Las unidades en campo necesitan recibir alertas, actualizar su estado y acceder a la información del incidente desde su dispositivo móvil, sin depender de radio de voz solamente.' },
                    { title: 'Registros Auditables y Reportes', desc: 'Cada acción debe registrarse automáticamente. El sistema debe generar reportes de tiempos de respuesta, rendimiento por turno y análisis de incidentes sin exportación manual de datos.' },
                  ]
                : [
                    { title: 'Real-Time GPS Geolocation', desc: 'Units must appear on the operational map in real time. The dispatch recommendation engine depends on accurate, live GPS data to suggest the right unit.' },
                    { title: 'Video and GIS Integration', desc: 'The CAD must connect natively with video management and the GIS map. Deep integration eliminates interface switching; shallow integration only adds a layer of complexity.' },
                    { title: 'NG911 Support', desc: 'The system must support text, video, and connected vehicle call data in addition to voice. Next Generation 911 is the future standard and migration to it is inevitable.' },
                    { title: 'Configurable Dispatch Protocol', desc: 'Prioritization protocols and response levels must be configurable by the agency, not fixed by the vendor. The operational needs of a 100,000-person city differ from a 5-million metropolitan area.' },
                    { title: 'Mobile App for Field Units', desc: 'Field units need to receive alerts, update their status, and access incident information from their mobile device — not relying on voice radio alone.' },
                    { title: 'Auditable Logs and Reporting', desc: 'Every action must be automatically logged. The system must generate response time reports, shift performance analysis, and incident analytics without manual data export.' },
                  ]
              ).map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0b1628',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    padding: '24px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                      marginTop: '0',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: Related Product ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Explora los Productos' : 'Explore the Products'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>
              {es ? 'KabatOne K-Dispatch' : 'KabatOne K-Dispatch'}
            </h2>
            <p style={{ ...pStyle, marginBottom: '28px' }}>
              {es
                ? 'K-Dispatch es el módulo de despacho CAD de KabatOne. Opera de forma nativa con K-Video (gestión de video), K-Safety (GIS y conciencia situacional) y K-Traffic (gestión de tráfico) en una sola plataforma unificada.'
                : 'K-Dispatch is KabatOne\'s CAD dispatch module. It operates natively with K-Video (video management), K-Safety (GIS and situational awareness), and K-Traffic (traffic management) in a single unified platform.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD Dispatch' },
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'Conciencia Situacional' : 'Situational Awareness' },
                { href: '/k-video', label: 'K-Video', desc: es ? 'Gestión de Video' : 'Video Management' },
                { href: '/k-traffic', label: 'K-Traffic', desc: es ? 'Gestión de Tráfico' : 'Traffic Management' },
              ].map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                    padding: '10px 16px',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--dim)',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: ACCENT }} />
                  {p.label}
                  <span style={{ color: 'var(--muted)', fontSize: '10px', letterSpacing: '0.1em' }}>
                    {p.desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '32px' }}>
              {es
                ? 'Preguntas Comunes sobre Software CAD de Despacho'
                : 'Common Questions About CAD Dispatch Software'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0b1628',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    padding: '24px 28px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 700,
                      fontSize: '17px',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                      marginTop: '0',
                      color: 'var(--white)',
                    }}
                  >
                    {faq.question}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: 300,
                      color: 'var(--dim)',
                      lineHeight: 1.7,
                      marginBottom: '0',
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED ARTICLES ── */}
        <section style={{ padding: '64px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '24px',
            }}>
              {es ? 'Artículos Relacionados' : 'Related Articles'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link href="/resources/rtcc-setup-guide" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'Cómo implementar un RTCC' : 'Real-Time Crime Center Setup Guide'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/what-is-a-public-safety-platform" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? '¿Qué es una plataforma de seguridad pública?' : 'What Is a Public Safety Platform?'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/ai-in-public-safety" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'IA en Seguridad Pública: Guía para Ciudades' : 'AI in Public Safety: A Guide for Cities'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/how-c5-command-centers-work" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'Cómo funcionan los centros C5' : 'How C5 Command Centers Work'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={
            es
              ? 'Ve K-Dispatch en Acción en tu Ciudad'
              : 'See K-Dispatch in Action for Your City'
          }
          subtitle={
            es
              ? 'KabatOne K-Dispatch gestiona despacho CAD, video, GIS y tráfico en una sola plataforma. Solicita una demostración con datos reales de ciudad.'
              : 'KabatOne K-Dispatch manages CAD dispatch, video, GIS, and traffic in one unified platform. Request a live demo with real city data.'
          }
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 768px) {
            section > div > div[style*="grid-template-columns: repeat(2"] {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 640px) {
            section {
              padding-left: 20px !important;
              padding-right: 20px !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
