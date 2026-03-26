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
  return generatePageMetadata('whatIsSituationalAwarenessSoftware', locale)
}

export default async function WhatIsSituationalAwarenessSoftwarePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#06b6d4'

  /* ── FAQ data ── */
  const faqs = es
    ? [
        {
          question: '¿Qué es un software de conciencia situacional?',
          answer:
            'Un software de conciencia situacional es una plataforma que agrega datos de múltiples fuentes — cámaras, sensores IoT, sistemas de despacho, GPS de unidades de campo y bases de datos policiales — en un mapa operativo unificado. Permite que los operadores y comandantes vean en tiempo real qué está ocurriendo, dónde, y con qué recursos se cuenta para responder. A diferencia de un simple mapa GIS, una plataforma de conciencia situacional correlaciona eventos automáticamente y genera alertas cuando los patrones indican una amenaza.',
        },
        {
          question: '¿Cuál es la diferencia entre conciencia situacional y un sistema GIS?',
          answer:
            'Un sistema GIS (Sistema de Información Geográfica) visualiza datos sobre un mapa. Una plataforma de conciencia situacional va más allá: correlaciona datos en tiempo real de múltiples fuentes, genera alertas automatizadas basadas en reglas, muestra el estado operativo de unidades y recursos, y proporciona el contexto completo de un incidente en una sola vista. El GIS es una capa de visualización; la conciencia situacional es una capa operativa que habilita decisiones de respuesta.',
        },
        {
          question: '¿Qué tipos de datos integra una plataforma de conciencia situacional?',
          answer:
            'Una plataforma completa integra: feeds de video en vivo (cámaras fijas, móviles, drones), datos CAD de despacho e incidentes, posiciones GPS de unidades de campo en tiempo real, alertas de sensores IoT (detectores de disparos, sensores ambientales, botones de pánico), lecturas de LPR/ALPR, datos de tráfico y señalización, y en despliegues avanzados, datos de reconocimiento facial y analítica de comportamiento. Toda esta información converge en un mapa operativo donde los analistas y comandantes toman decisiones con visibilidad completa.',
        },
        {
          question: '¿Quién necesita una plataforma de conciencia situacional?',
          answer:
            'Las plataformas de conciencia situacional son utilizadas por centros de mando C2/C3/C4/C5 en México y Latinoamérica, centros de operaciones de emergencia (EOC), departamentos de policía municipal y estatal, agencias de protección civil, centros de operaciones de seguridad corporativa (SOC) para infraestructura crítica, y autoridades portuarias y aeroportuarias. Cualquier organización que coordine respuestas a incidentes con múltiples unidades y fuentes de información se beneficia de una plataforma de conciencia situacional unificada.',
        },
        {
          question: '¿Cómo se diferencia una plataforma unificada de herramientas separadas?',
          answer:
            'Las herramientas separadas obligan a los operadores a cambiar entre múltiples sistemas — el VMS en un monitor, el CAD en otro, el GIS en un tercero. Cada sistema tiene su propia interfaz, su propia base de datos y sus propias alertas. Una plataforma unificada muestra video, posición de unidades, estado de incidentes y alertas de sensores en una sola pantalla. Los estudios muestran que la integración nativa reduce los tiempos de respuesta entre 30% y 40% comparado con sistemas aislados, porque elimina la fricción de cambio de contexto entre aplicaciones.',
        },
        {
          question: '¿Cómo ayuda KabatOne con la conciencia situacional?',
          answer:
            'KabatOne provee la plataforma unificada de conciencia situacional: K-Safety es el mapa operativo GIS que muestra incidentes, unidades de campo y alertas en tiempo real. K-Video agrega video en vivo con analítica de IA. K-Dispatch maneja el despacho CAD integrado. K-Traffic monitorea señalización y flujo vehicular. Todo en una sola interfaz. Los operadores del centro de mando ven el video, las posiciones de unidades y el estado del incidente en una pantalla — sin cambiar entre sistemas de diferentes proveedores.',
        },
      ]
    : [
        {
          question: 'What is situational awareness software?',
          answer:
            'Situational awareness software is a platform that aggregates data from multiple sources — cameras, IoT sensors, dispatch systems, field unit GPS, and law enforcement databases — into a unified operational map. It enables operators and commanders to see in real time what is happening, where, and what resources are available to respond. Unlike a simple GIS map, a situational awareness platform automatically correlates events and generates alerts when patterns indicate a threat.',
        },
        {
          question: 'What is the difference between situational awareness and a GIS system?',
          answer:
            'A GIS (Geographic Information System) visualizes data on a map. A situational awareness platform goes further: it correlates real-time data from multiple sources, generates automated rule-based alerts, displays the operational status of units and resources, and provides the complete context of an incident in a single view. GIS is a visualization layer; situational awareness is an operational layer that enables response decisions.',
        },
        {
          question: 'What types of data does a situational awareness platform integrate?',
          answer:
            'A complete platform integrates: live video feeds (fixed, mobile, and drone cameras), CAD dispatch and incident data, real-time GPS positions of field units, IoT sensor alerts (gunshot detectors, environmental sensors, panic buttons), LPR/ALPR reads, traffic and signal data, and in advanced deployments, facial recognition data and behavioral analytics. All this information converges on an operational map where analysts and commanders make decisions with full visibility.',
        },
        {
          question: 'Who needs a situational awareness platform?',
          answer:
            'Situational awareness platforms are used by C2/C3/C4/C5 command centers in Mexico and Latin America, emergency operations centers (EOC), municipal and state police departments, civil protection agencies, corporate security operations centers (SOC) for critical infrastructure, and port and airport authorities. Any organization that coordinates incident response across multiple units and information sources benefits from a unified situational awareness platform.',
        },
        {
          question: 'How does a unified platform differ from separate tools?',
          answer:
            'Separate tools force operators to switch between multiple systems — VMS on one monitor, CAD on another, GIS on a third. Each system has its own interface, its own database, and its own alerts. A unified platform displays video, unit positions, incident status, and sensor alerts on a single screen. Studies show that native integration reduces response times by 30% to 40% compared to siloed systems because it eliminates the context-switching friction between applications.',
        },
        {
          question: 'How does KabatOne support situational awareness?',
          answer:
            'KabatOne provides the unified situational awareness platform: K-Safety is the GIS operational map showing incidents, field units, and alerts in real time. K-Video aggregates live video with AI analytics. K-Dispatch handles integrated CAD dispatch. K-Traffic monitors signalization and vehicle flow. All in one interface. Command center operators see video, unit positions, and incident status on one screen — without switching between systems from different vendors.',
        },
      ]

  /* ── Breadcrumbs ── */
  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    {
      name: es ? '¿Qué Es un Software de Conciencia Situacional?' : 'What Is Situational Awareness Software?',
      url: es
        ? 'https://kabatone.com/es/resources/what-is-situational-awareness-software/'
        : 'https://kabatone.com/resources/what-is-situational-awareness-software/',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema(
              es
                ? '¿Qué Es un Software de Conciencia Situacional? Guía Completa'
                : 'What Is Situational Awareness Software? Complete Guide',
              es
                ? 'Un software de conciencia situacional agrega cámaras, sensores, despacho y datos GIS en un mapa operativo unificado para mejorar los tiempos de respuesta y la coordinación.'
                : 'Situational awareness software aggregates cameras, sensors, dispatch, and GIS data into a unified operational map to improve response times and coordination.',
              es
                ? 'https://kabatone.com/es/resources/what-is-situational-awareness-software/'
                : 'https://kabatone.com/resources/what-is-situational-awareness-software/',
              '2026-03-26'
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
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
              {es ? '¿Qué Es un Software de Conciencia Situacional?' : 'What Is Situational Awareness Software?'}
            </span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
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
                ? '¿Qué Es un Software de Conciencia Situacional?'
                : 'What Is Situational Awareness Software?'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Un software de conciencia situacional agrega datos de cámaras, sensores IoT, sistemas de despacho CAD y GPS de unidades de campo en un mapa operativo unificado. Los operadores ven en tiempo real qué está ocurriendo, dónde, y con qué recursos se cuenta para responder — convirtiendo datos dispersos en inteligencia operativa que acelera la toma de decisiones.'
                : 'Situational awareness software aggregates data from cameras, IoT sensors, CAD dispatch systems, and field unit GPS into a unified operational map. Operators see in real time what is happening, where, and what resources are available to respond — turning scattered data into operational intelligence that accelerates decision-making.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 1: Core Capabilities ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? '¿Qué Hace una Plataforma de Conciencia Situacional?' : 'What Does a Situational Awareness Platform Do?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Una plataforma de conciencia situacional no es solo un mapa con puntos. Es una capa operativa que conecta todas las fuentes de información de una organización de seguridad y las presenta de forma contextualizada para la toma de decisiones en tiempo real.'
                : 'A situational awareness platform is not just a map with dots. It is an operational layer that connects all information sources within a security organization and presents them contextualized for real-time decision-making.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Mapa Operativo GIS en Tiempo Real' : 'Real-Time GIS Operational Map'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'El mapa operativo GIS es la columna vertebral de la plataforma. Muestra capas superpuestas de información: posiciones de unidades de campo actualizadas por GPS cada pocos segundos, ubicación de cámaras activas, alertas de sensores geolocalizadas, incidentes abiertos del sistema CAD, y zonas de interés definidas por los operadores. A diferencia de un mapa estático, el mapa operativo refleja el estado del mundo en tiempo real — si un vehículo patrulla se mueve, el punto en el mapa se mueve con él.'
                : 'The GIS operational map is the backbone of the platform. It displays overlapping layers of information: field unit positions updated by GPS every few seconds, active camera locations, geolocated sensor alerts, open incidents from the CAD system, and operator-defined zones of interest. Unlike a static map, the operational map reflects the state of the world in real time — if a patrol vehicle moves, the point on the map moves with it.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Correlación Automática de Eventos' : 'Automatic Event Correlation'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'Cuando ocurren múltiples eventos relacionados — un sensor de disparos se activa, una cámara cercana detecta movimiento inusual, y una llamada al 911 reporta el mismo incidente — la plataforma los correlaciona automáticamente en un solo evento compuesto. El operador no necesita conectar manualmente los puntos: el sistema le presenta el incidente con toda la información relevante ya vinculada. Esto reduce el tiempo de evaluación de minutos a segundos.'
                : 'When multiple related events occur — a gunshot sensor activates, a nearby camera detects unusual motion, and a 911 call reports the same incident — the platform automatically correlates them into a single compound event. The operator does not need to manually connect the dots: the system presents the incident with all relevant information already linked. This reduces assessment time from minutes to seconds.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Integración de Video en Contexto' : 'Contextual Video Integration'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'La conciencia situacional efectiva requiere video, no solo datos de texto y coordenadas. Cuando un analista selecciona un incidente en el mapa, la plataforma muestra automáticamente las cámaras más cercanas al punto del evento. El analista no necesita buscar manualmente entre cientos o miles de cámaras — el sistema presenta las que son relevantes para la situación actual. En plataformas avanzadas, el video incluye analítica de IA superpuesta: detección de comportamiento, conteo de personas y reconocimiento de placas en tiempo real.'
                : 'Effective situational awareness requires video, not just text data and coordinates. When an analyst selects an incident on the map, the platform automatically displays the cameras closest to the event point. The analyst does not need to manually search through hundreds or thousands of cameras — the system surfaces the ones relevant to the current situation. In advanced platforms, the video includes overlaid AI analytics: behavior detection, people counting, and real-time license plate recognition.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Seguimiento de Recursos y Unidades de Campo' : 'Resource and Field Unit Tracking'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'Cada unidad de campo — patrullas, ambulancias, bomberos, agentes a pie — se muestra en el mapa con su estado operativo actualizado: disponible, en ruta, en escena, fuera de servicio. Cuando un operador necesita despachar la unidad más cercana a un incidente, la plataforma calcula automáticamente las distancias y tiempos estimados de llegada. Esto elimina las conjeturas y asegura que la unidad más apropiada sea asignada a cada incidente.'
                : 'Every field unit — patrols, ambulances, fire trucks, officers on foot — is displayed on the map with updated operational status: available, en route, on scene, off duty. When an operator needs to dispatch the nearest unit to an incident, the platform automatically calculates distances and estimated arrival times. This eliminates guesswork and ensures the most appropriate unit is assigned to each incident.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 2: From Data to Decision ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? 'De Datos Dispersos a Decisión Coordinada'
                : 'From Scattered Data to Coordinated Decision'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Sin conciencia situacional unificada, los centros de mando operan con información fragmentada. Con una plataforma integrada, cada dato se convierte en contexto que acelera la respuesta.'
                : 'Without unified situational awareness, command centers operate with fragmented information. With an integrated platform, every piece of data becomes context that accelerates response.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {(es
                ? [
                    { step: '01', title: 'Detección', desc: 'Un sensor, cámara, llamada al 911 o botón de pánico genera una alerta. El sistema la geolocaliza automáticamente en el mapa operativo y clasifica el tipo de evento.' },
                    { step: '02', title: 'Contexto automático', desc: 'La plataforma vincula todas las fuentes de información relacionadas: cámaras cercanas, lecturas recientes de LPR en la zona, historial de incidentes en la misma ubicación, y unidades de campo disponibles en las proximidades.' },
                    { step: '03', title: 'Evaluación visual', desc: 'El operador abre el incidente y ve el video en vivo de las cámaras relevantes, la posición de las unidades cercanas y el historial de la zona — todo en una sola vista, sin cambiar de sistema.' },
                    { step: '04', title: 'Despacho informado', desc: 'El operador despacha la unidad óptima con toda la información del incidente: video, ubicación exacta, tipo de evento, recursos cercanos. La unidad de campo recibe la información directamente en su dispositivo móvil.' },
                    { step: '05', title: 'Seguimiento y cierre', desc: 'La plataforma registra automáticamente toda la línea de tiempo del incidente: alertas, video, comunicaciones, decisiones de despacho, tiempos de llegada y resolución. Este registro queda disponible para revisión posterior y análisis estadístico.' },
                  ]
                : [
                    { step: '01', title: 'Detection', desc: 'A sensor, camera, 911 call, or panic button generates an alert. The system automatically geolocates it on the operational map and classifies the event type.' },
                    { step: '02', title: 'Automatic context', desc: 'The platform links all related information sources: nearby cameras, recent LPR reads in the area, incident history at the same location, and available field units in the vicinity.' },
                    { step: '03', title: 'Visual assessment', desc: 'The operator opens the incident and sees live video from relevant cameras, positions of nearby units, and zone history — all in a single view, without switching systems.' },
                    { step: '04', title: 'Informed dispatch', desc: 'The operator dispatches the optimal unit with full incident information: video, exact location, event type, nearby resources. The field unit receives the information directly on their mobile device.' },
                    { step: '05', title: 'Tracking and closure', desc: 'The platform automatically logs the entire incident timeline: alerts, video, communications, dispatch decisions, arrival times, and resolution. This record is available for post-incident review and statistical analysis.' },
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

        {/* ── SECTION 3: Unified vs Siloed ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? 'Plataforma Unificada vs Sistemas Aislados'
                : 'Unified Platform vs Siloed Systems'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'La mayoría de los centros de mando ya tienen cámaras, despacho y algún sistema GIS. La pregunta no es si tienen los componentes — es si están conectados.'
                : 'Most command centers already have cameras, dispatch, and some form of GIS. The question is not whether they have the components — it is whether they are connected.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '32px' }}>
              {(es
                ? [
                    {
                      label: 'Sistemas Aislados',
                      items: [
                        'VMS en un monitor, CAD en otro, GIS en un tercero',
                        'El operador abre el video manualmente para cada incidente',
                        'No hay correlación automática entre alertas de diferentes sensores',
                        'Las unidades de campo reciben solo texto, sin video ni mapa',
                        'La evidencia queda dispersa en 4–5 plataformas diferentes',
                        'El cambio de contexto entre sistemas agrega 2–5 minutos por incidente',
                      ],
                    },
                    {
                      label: 'Plataforma Unificada',
                      items: [
                        'Video, despacho, GIS y alertas en una sola pantalla',
                        'Un clic en el incidente muestra las cámaras más cercanas',
                        'Eventos de múltiples sensores se correlacionan automáticamente',
                        'Las unidades de campo ven video, mapa e instrucciones en su dispositivo',
                        'Toda la evidencia se vincula automáticamente al expediente',
                        'Respuesta entre 30% y 40% más rápida por eliminación de fricción',
                      ],
                    },
                  ]
                : [
                    {
                      label: 'Siloed Systems',
                      items: [
                        'VMS on one monitor, CAD on another, GIS on a third',
                        'Operator manually opens video for each incident',
                        'No automatic correlation between alerts from different sensors',
                        'Field units receive text only, no video or map',
                        'Evidence scattered across 4–5 different platforms',
                        'Context-switching between systems adds 2–5 minutes per incident',
                      ],
                    },
                    {
                      label: 'Unified Platform',
                      items: [
                        'Video, dispatch, GIS, and alerts on one screen',
                        'One click on incident shows nearest cameras',
                        'Events from multiple sensors correlated automatically',
                        'Field units see video, map, and instructions on their device',
                        'All evidence auto-linked to incident file',
                        '30%–40% faster response by eliminating friction',
                      ],
                    },
                  ]
              ).map((col, i) => (
                <div
                  key={i}
                  style={{
                    background: i === 1 ? 'rgba(6,182,212,0.04)' : '#0b1628',
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

        {/* ── SECTION 4: Evaluation Criteria ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? 'Criterios de Evaluación para una Plataforma de Conciencia Situacional'
                : 'Evaluation Criteria for a Situational Awareness Platform'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Al evaluar plataformas de conciencia situacional, estos son los criterios que determinan la efectividad operativa de la solución.'
                : 'When evaluating situational awareness platforms, these are the criteria that determine the operational effectiveness of the solution.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
              {(es
                ? [
                    { title: 'Integración Nativa de Video', desc: 'La plataforma debe gestionar video en vivo directamente — no redirigir a un VMS externo. El operador debe pasar de la alerta al video de la cámara más cercana con un solo clic, sin abrir una aplicación separada.' },
                    { title: 'Despacho CAD Integrado', desc: 'Las alertas generadas por sensores o analítica deben convertirse automáticamente en incidentes en la cola de despacho. El operador no debería necesitar copiar manualmente la información de un sistema al otro.' },
                    { title: 'GPS de Unidades en Tiempo Real', desc: 'Las posiciones de unidades de campo deben actualizarse cada pocos segundos con precisión GPS. La plataforma debe calcular automáticamente la unidad más cercana y estimar tiempos de llegada.' },
                    { title: 'Correlación Multi-Sensor', desc: 'Cuando un sensor de disparos, una cámara y una llamada al 911 reportan el mismo incidente, la plataforma debe correlacionarlos automáticamente en un solo evento, no crear tres alertas separadas.' },
                    { title: 'Aplicaciones Móviles de Campo', desc: 'Las unidades de campo deben recibir la información del incidente directamente en su dispositivo: ubicación, video, instrucciones. La comunicación bidireccional permite que el campo actualice el estado directamente.' },
                    { title: 'Registro Auditable Completo', desc: 'Toda la línea de tiempo del incidente — alertas, video, decisiones de despacho, comunicaciones — debe registrarse automáticamente para revisión posterior, análisis estadístico y cadena de custodia de evidencia.' },
                  ]
                : [
                    { title: 'Native Video Integration', desc: 'The platform should manage live video directly — not redirect to an external VMS. The operator should go from alert to nearest camera video with a single click, without opening a separate application.' },
                    { title: 'Integrated CAD Dispatch', desc: 'Alerts generated by sensors or analytics should automatically become incidents in the dispatch queue. The operator should not need to manually copy information from one system to another.' },
                    { title: 'Real-Time Unit GPS', desc: 'Field unit positions should update every few seconds with GPS precision. The platform should automatically calculate the nearest unit and estimate arrival times.' },
                    { title: 'Multi-Sensor Correlation', desc: 'When a gunshot sensor, a camera, and a 911 call report the same incident, the platform should automatically correlate them into a single event — not create three separate alerts.' },
                    { title: 'Field Mobile Applications', desc: 'Field units should receive incident information directly on their device: location, video, instructions. Bidirectional communication allows the field to update status directly.' },
                    { title: 'Complete Auditable Record', desc: 'The entire incident timeline — alerts, video, dispatch decisions, communications — should be automatically logged for post-incident review, statistical analysis, and evidence chain of custody.' },
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
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                    marginTop: '0',
                  }}>
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

        {/* ── SECTION 5: Related Products ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'KabatOne para Conciencia Situacional' : 'KabatOne for Situational Awareness'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>
              {es ? 'Una Sola Plataforma para Conciencia Situacional Completa' : 'One Platform for Complete Situational Awareness'}
            </h2>
            <p style={{ ...pStyle, marginBottom: '28px' }}>
              {es
                ? 'KabatOne unifica todas las capas de conciencia situacional en una sola plataforma: K-Safety provee el mapa operativo GIS con unidades en tiempo real, K-Video gestiona la videovigilancia con analítica de IA, K-Dispatch maneja el despacho CAD integrado, y K-Traffic monitorea señalización y flujo vehicular. Los operadores del centro de mando trabajan desde una sola interfaz sin cambiar entre sistemas de diferentes proveedores.'
                : 'KabatOne unifies all situational awareness layers into a single platform: K-Safety provides the GIS operational map with real-time units, K-Video manages video surveillance with AI analytics, K-Dispatch handles integrated CAD dispatch, and K-Traffic monitors signalization and vehicle flow. Command center operators work from a single interface without switching between systems from different vendors.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'Mapa Operativo GIS' : 'GIS Operational Map' },
                { href: '/k-video', label: 'K-Video', desc: es ? 'Videovigilancia + IA' : 'Video + AI Analytics' },
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD Dispatch' },
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

            {/* ── Internal links ── */}
            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '12px' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {es ? 'Integraciones:' : 'Integrations:'}
                </span>
                {[
                  { href: '/integrations/sensor-fusion', label: es ? 'Fusión de Sensores' : 'Sensor Fusion' },
                  { href: '/integrations/panic-buttons', label: es ? 'Botones de Pánico' : 'Panic Buttons' },
                  { href: '/integrations/lpr', label: 'LPR' },
                  { href: '/integrations/drones', label: 'Drones' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} style={{ color: ACCENT, textDecoration: 'none', borderBottom: `1px solid ${ACCENT}40` }}>
                    {link.label}
                  </Link>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '12px' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {es ? 'Recursos:' : 'Resources:'}
                </span>
                {[
                  { href: '/resources/what-is-a-public-safety-platform', label: es ? 'Qué es una Plataforma de Seguridad Pública' : 'What Is a Public Safety Platform' },
                  { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Qué es un RTCC' : 'What Is an RTCC' },
                  { href: '/resources/rtcc-setup-guide', label: es ? 'Guía de RTCC' : 'RTCC Setup Guide' },
                  { href: '/resources/ai-in-public-safety', label: es ? 'IA en Seguridad Pública' : 'AI in Public Safety' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} style={{ color: ACCENT, textDecoration: 'none', borderBottom: `1px solid ${ACCENT}40` }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '32px' }}>
              {es
                ? 'Preguntas Comunes sobre Conciencia Situacional'
                : 'Common Questions About Situational Awareness Software'}
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
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    marginTop: '0',
                    marginBottom: '10px',
                    color: 'var(--white)',
                  }}>
                    {faq.question}
                  </h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={es ? '¿Listo para Unificar tu Conciencia Situacional?' : 'Ready to Unify Your Situational Awareness?'}
          subtitle={es
            ? 'Agenda una demo personalizada y descubre cómo KabatOne conecta video, despacho, GIS y sensores en una sola plataforma operativa.'
            : 'Schedule a personalized demo and see how KabatOne connects video, dispatch, GIS, and sensors into one operational platform.'}
        />
      </div>

      <Footer es={es} />
    </>
  )
}
