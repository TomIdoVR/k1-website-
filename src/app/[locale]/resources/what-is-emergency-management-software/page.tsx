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
  return generatePageMetadata('whatIsEmergencyManagementSoftware', locale)
}

export default async function WhatIsEmergencyManagementSoftwarePage({
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
          question: '¿Qué es un software de gestión de emergencias?',
          answer: 'Un software de gestión de emergencias es una plataforma digital que coordina todo el ciclo de vida de un incidente: desde la detección y recepción de la alerta, pasando por la clasificación, el despacho de recursos, la coordinación en campo y la resolución final. Reemplaza los flujos de trabajo manuales — llamadas de radio, hojas de cálculo y registros en papel — con una plataforma digital integrada que conecta despachadores, operadores del centro de mando, unidades de campo y analistas.',
        },
        {
          question: '¿Cuál es la diferencia entre un software de gestión de emergencias y un sistema CAD?',
          answer: 'Un sistema CAD (Despacho Asistido por Computadora) se enfoca principalmente en la recepción de llamadas al 911 y el despacho de unidades. Un software de gestión de emergencias es más amplio: incluye el CAD como componente, pero también abarca la gestión del incidente completo — videovigilancia, mapas GIS operativos, coordinación interinstitucional, comunicaciones de campo, análisis posterior al incidente y reporteo. El CAD es una pieza del rompecabezas; la gestión de emergencias es el rompecabezas completo.',
        },
        {
          question: '¿Qué módulos incluye un software de gestión de emergencias?',
          answer: 'Los módulos principales incluyen: despacho CAD (recepción de llamadas, clasificación, asignación de unidades), gestión de video (VMS con miles de cámaras y analítica de IA), mapa GIS operativo (posiciones de unidades, incidentes activos, zonas de interés), comunicaciones (radio, telefonía, mensajería), aplicaciones móviles de campo (para unidades despachadas), gestión de eventos (flujos de trabajo, escalación, coordinación multi-agencia), y análisis de datos (tiempos de respuesta, patrones, KPIs operativos).',
        },
        {
          question: '¿Quién usa software de gestión de emergencias?',
          answer: 'Los usuarios principales son centros de mando municipales y estatales (C2, C4, C5), centros de llamadas 911, departamentos de policía, departamentos de bomberos, servicios de emergencia médica (EMS), agencias de protección civil, y organizaciones de gestión de desastres. En LATAM, los centros C4 y C5 son los principales usuarios, gestionando la coordinación de seguridad pública a nivel estatal y metropolitano.',
        },
        {
          question: '¿Cómo reduce el software de gestión de emergencias los tiempos de respuesta?',
          answer: 'El software reduce los tiempos de respuesta de tres formas: primero, elimina la transferencia manual de información entre sistemas (el operador ya no necesita copiar datos del VMS al CAD al GIS manualmente). Segundo, automatiza la asignación de recursos basada en ubicación, disponibilidad y tipo de incidente. Tercero, proporciona a las unidades de campo información completa del incidente — video, mapa, instrucciones — en su dispositivo móvil antes de llegar a la escena. Las organizaciones que implementan plataformas unificadas reportan reducciones del 30% al 40% en el tiempo entre la detección del incidente y la llegada de la primera unidad.',
        },
        {
          question: '¿Cómo apoya KabatOne la gestión de emergencias?',
          answer: 'KabatOne es una plataforma unificada de gestión de emergencias que integra todos los módulos en un solo entorno operativo. K-Dispatch maneja el despacho CAD completo con asignación inteligente. K-Video gestiona miles de cámaras con analítica de IA. K-Safety provee el mapa GIS operativo con incidentes y unidades en tiempo real. K-Traffic coordina la gestión de tráfico y semaforización. Todo opera desde una sola interfaz, eliminando la fragmentación entre sistemas de distintos proveedores. KabatOne está desplegado en más de 40 ciudades protegiendo a 73 millones de ciudadanos.',
        },
      ]
    : [
        {
          question: 'What is emergency management software?',
          answer: 'Emergency management software is a digital platform that coordinates the full lifecycle of an incident: from detection and alert intake through classification, resource dispatch, field coordination, and final resolution. It replaces manual workflows — radio calls, spreadsheets, and paper logs — with an integrated digital platform connecting dispatchers, command center operators, field units, and analysts.',
        },
        {
          question: 'What is the difference between emergency management software and a CAD system?',
          answer: 'A CAD (Computer-Aided Dispatch) system focuses primarily on 911 call intake and unit dispatch. Emergency management software is broader: it includes CAD as a component but also covers full incident management — video surveillance, operational GIS maps, inter-agency coordination, field communications, post-incident analysis, and reporting. CAD is one piece of the puzzle; emergency management software is the full puzzle.',
        },
        {
          question: 'What modules does emergency management software include?',
          answer: 'Core modules include: CAD dispatch (call intake, classification, unit assignment), video management (VMS with thousands of cameras and AI analytics), operational GIS map (unit positions, active incidents, zones of interest), communications (radio, telephony, messaging), field mobile applications (for dispatched units), event management (workflows, escalation, multi-agency coordination), and data analytics (response times, patterns, operational KPIs).',
        },
        {
          question: 'Who uses emergency management software?',
          answer: 'Primary users include municipal and state command centers (C2, C4, C5), 911 call centers, police departments, fire departments, emergency medical services (EMS), civil protection agencies, and disaster management organizations. In Latin America, C4 and C5 centers are the primary users, managing public safety coordination at state and metropolitan levels.',
        },
        {
          question: 'How does emergency management software reduce response times?',
          answer: 'The software reduces response times in three ways: first, it eliminates manual information transfer between systems (operators no longer need to copy data from VMS to CAD to GIS manually). Second, it automates resource assignment based on location, availability, and incident type. Third, it provides field units with complete incident information — video, map, instructions — on their mobile device before arriving on scene. Organizations that deploy unified platforms report 30% to 40% reductions in the time between incident detection and first unit arrival.',
        },
        {
          question: 'How does KabatOne support emergency management?',
          answer: 'KabatOne is a unified emergency management platform that integrates all modules into a single operational environment. K-Dispatch handles full CAD dispatch with intelligent assignment. K-Video manages thousands of cameras with AI analytics. K-Safety provides the operational GIS map with real-time incidents and units. K-Traffic coordinates traffic management and signal control. Everything runs from a single interface, eliminating fragmentation between systems from different vendors. KabatOne is deployed across 40+ cities protecting 73 million citizens.',
        },
      ]

  /* ── Breadcrumbs ── */
  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    {
      name: es ? '¿Qué Es un Software de Gestión de Emergencias?' : 'What Is Emergency Management Software?',
      url: es
        ? 'https://kabatone.com/es/resources/what-is-emergency-management-software/'
        : 'https://kabatone.com/resources/what-is-emergency-management-software/',
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
                ? '¿Qué Es un Software de Gestión de Emergencias? Guía Completa'
                : 'What Is Emergency Management Software? Complete Guide',
              es
                ? 'Un software de gestión de emergencias coordina el ciclo completo del incidente: detección, despacho, coordinación en campo y resolución. Guía con módulos, beneficios y criterios de evaluación.'
                : 'Emergency management software coordinates the full incident lifecycle: detection, dispatch, field coordination, and resolution. Guide covering modules, benefits, and evaluation criteria.',
              es
                ? 'https://kabatone.com/es/resources/what-is-emergency-management-software/'
                : 'https://kabatone.com/resources/what-is-emergency-management-software/',
              '2026-03-30'
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
              {es ? '¿Qué Es un Software de Gestión de Emergencias?' : 'What Is Emergency Management Software?'}
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
                ? '¿Qué Es un Software de Gestión de Emergencias?'
                : 'What Is Emergency Management Software?'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Un software de gestión de emergencias es una plataforma digital que coordina el ciclo completo de un incidente — desde la detección y recepción de la alerta hasta la resolución y el análisis posterior. Integra despacho CAD, videovigilancia, mapas GIS, comunicaciones y aplicaciones móviles de campo en un solo entorno operativo, reemplazando los flujos de trabajo fragmentados que ralentizan la respuesta y generan errores de coordinación.'
                : 'Emergency management software is a digital platform that coordinates the full incident lifecycle — from detection and alert intake through resolution and post-incident analysis. It integrates CAD dispatch, video surveillance, GIS mapping, communications, and field mobile applications into a single operational environment, replacing fragmented workflows that slow response and create coordination errors.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 1: Core Capabilities ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? '¿Qué Hace un Software de Gestión de Emergencias?' : 'What Does Emergency Management Software Do?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Un software de gestión de emergencias cubre cinco funciones operativas que juntas permiten una respuesta coordinada, rápida y documentada a cualquier tipo de incidente.'
                : 'Emergency management software covers five operational functions that together enable coordinated, fast, and documented response to any incident type.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Recepción y Clasificación de Alertas' : 'Alert Intake and Classification'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'La plataforma recibe alertas de múltiples fuentes: llamadas al 911, sensores IoT (detectores de disparos, botones de pánico, sensores ambientales), analítica de video con inteligencia artificial, lectores de placas vehiculares (LPR), y reportes ciudadanos. Cada alerta se clasifica automáticamente por tipo, gravedad y ubicación, creando un expediente de incidente estructurado que se asigna al flujo de trabajo correcto.'
                : 'The platform receives alerts from multiple sources: 911 calls, IoT sensors (gunshot detectors, panic buttons, environmental sensors), AI video analytics, license plate readers (LPR), and citizen reports. Each alert is automatically classified by type, severity, and location, creating a structured incident record assigned to the correct workflow.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Despacho y Asignación de Recursos' : 'Dispatch and Resource Assignment'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'El módulo de despacho CAD es el motor operativo de la plataforma. Identifica las unidades disponibles más cercanas — policía, bomberos, ambulancias, protección civil — y recomienda la asignación óptima basándose en ubicación, tipo de incidente y capacidades de la unidad. El despachador confirma o ajusta la recomendación con un clic, y la unidad recibe la asignación instantáneamente en su dispositivo móvil con mapa, instrucciones y contexto del incidente.'
                : 'The CAD dispatch module is the operational engine of the platform. It identifies the nearest available units — police, fire, ambulance, civil protection — and recommends optimal assignment based on location, incident type, and unit capabilities. The dispatcher confirms or adjusts the recommendation with one click, and the unit receives the assignment instantly on their mobile device with map, instructions, and incident context.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Conciencia Situacional en Tiempo Real' : 'Real-Time Situational Awareness'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'El mapa GIS operativo muestra en tiempo real la posición de todas las unidades de campo, los incidentes activos, las cámaras de vigilancia, los sensores y las zonas de interés. Los operadores pueden hacer clic en cualquier incidente para ver el video de las cámaras cercanas, el historial de eventos en esa ubicación y el estado de los recursos asignados. Esta visión integrada permite tomar decisiones con información completa, no con fragmentos parciales de distintos sistemas.'
                : 'The operational GIS map shows in real time the position of all field units, active incidents, surveillance cameras, sensors, and zones of interest. Operators can click any incident to see nearby camera video, event history at that location, and assigned resource status. This integrated view enables decisions based on complete information, not partial fragments from separate systems.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Coordinación en Campo' : 'Field Coordination'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'Las aplicaciones móviles de campo cierran el ciclo entre el centro de mando y las unidades despachadas. Los oficiales y respondedores reciben la información del incidente en su dispositivo: ubicación en mapa, video de cámaras cercanas, instrucciones del operador y actualizaciones en tiempo real. Pueden reportar su estado, enviar fotos y video desde la escena, y actualizar el expediente del incidente directamente desde el campo.'
                : 'Field mobile applications close the loop between the command center and dispatched units. Officers and responders receive incident information on their device: map location, nearby camera video, operator instructions, and real-time updates. They can report their status, send photos and video from the scene, and update the incident record directly from the field.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Análisis y Reporteo' : 'Analysis and Reporting'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'Cada incidente genera datos estructurados: tiempos de respuesta por fase (detección, despacho, llegada, resolución), recursos utilizados, tipos de evento, ubicaciones y resoluciones. Los tableros de inteligencia de negocios permiten a los directores de seguridad identificar patrones, zonas de alta incidencia, métricas de desempeño y oportunidades de mejora. Los datos alimentan tanto la gestión operativa diaria como la planificación estratégica a largo plazo.'
                : 'Every incident generates structured data: response times by phase (detection, dispatch, arrival, resolution), resources used, event types, locations, and resolutions. Business intelligence dashboards enable security directors to identify patterns, high-incidence zones, performance metrics, and improvement opportunities. The data feeds both daily operational management and long-term strategic planning.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 2: Incident Lifecycle ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? 'El Ciclo de Vida del Incidente: De la Detección a la Resolución'
                : 'The Incident Lifecycle: From Detection to Resolution'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Un software de gestión de emergencias gestiona cada fase del ciclo de vida del incidente. La diferencia entre sistemas fragmentados y una plataforma unificada se mide en minutos — y en vidas.'
                : 'Emergency management software manages every phase of the incident lifecycle. The difference between fragmented systems and a unified platform is measured in minutes — and in lives.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {(es
                ? [
                    { step: '01', title: 'Detectar', desc: 'Una cámara con analítica de IA detecta una persona en el piso. Un sensor acústico registra un posible disparo. Un ciudadano llama al 911. Un botón de pánico se activa. La plataforma recibe la alerta, la geolocaliza y crea un expediente de incidente automáticamente.' },
                    { step: '02', title: 'Evaluar', desc: 'El operador revisa el video de las cámaras cercanas, verifica la ubicación en el mapa GIS, consulta el historial de eventos en esa zona y clasifica el incidente por tipo y gravedad. Toda la información está en una sola pantalla — no necesita cambiar entre sistemas.' },
                    { step: '03', title: 'Despachar', desc: 'El sistema CAD recomienda las unidades más cercanas y apropiadas. El despachador confirma la asignación. Las unidades reciben la orden en su dispositivo móvil con mapa, video de la escena e instrucciones específicas. El tiempo entre la evaluación y el despacho se reduce de minutos a segundos.' },
                    { step: '04', title: 'Coordinar', desc: 'Mientras las unidades se desplazan, el centro de mando monitorea su posición en tiempo real, comparte actualizaciones de video, coordina con otras agencias si es necesario, y gestiona recursos adicionales. Las unidades de campo reportan su estado y evidencia directamente desde la aplicación móvil.' },
                    { step: '05', title: 'Resolver', desc: 'El incidente se cierra con un expediente digital completo: línea de tiempo con cada acción, video asociado, comunicaciones, recursos utilizados, tiempos por fase y resolución. Los datos alimentan automáticamente los tableros de análisis para mejorar las operaciones futuras.' },
                  ]
                : [
                    { step: '01', title: 'Detect', desc: 'An AI-powered camera detects a person down. An acoustic sensor registers a possible gunshot. A citizen calls 911. A panic button activates. The platform receives the alert, geolocates it, and creates an incident record automatically.' },
                    { step: '02', title: 'Assess', desc: 'The operator reviews video from nearby cameras, verifies the location on the GIS map, checks the event history for that zone, and classifies the incident by type and severity. All information is on one screen — no switching between systems.' },
                    { step: '03', title: 'Dispatch', desc: 'The CAD system recommends the nearest and most appropriate units. The dispatcher confirms the assignment. Units receive the order on their mobile device with map, scene video, and specific instructions. Time from assessment to dispatch drops from minutes to seconds.' },
                    { step: '04', title: 'Coordinate', desc: 'While units are en route, the command center monitors their position in real time, shares video updates, coordinates with other agencies as needed, and manages additional resources. Field units report status and evidence directly from the mobile app.' },
                    { step: '05', title: 'Resolve', desc: 'The incident closes with a complete digital record: timeline of every action, associated video, communications, resources used, times by phase, and resolution. Data automatically feeds analytics dashboards to improve future operations.' },
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

        {/* ── SECTION 3: Unified vs Fragmented ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? 'Gestión de Emergencias Unificada vs Fragmentada'
                : 'Unified vs Fragmented Emergency Management'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'La mayoría de las organizaciones de seguridad pública ya tienen un sistema CAD, cámaras y algún sistema de mapas. El problema no es la falta de herramientas — es que cada herramienta opera como un silo independiente.'
                : 'Most public safety organizations already have a CAD system, cameras, and some mapping system. The problem is not a lack of tools — it is that each tool operates as an independent silo.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '32px' }}>
              {(es
                ? [
                    {
                      label: 'Gestión Fragmentada',
                      items: [
                        'El despachador recibe la llamada en un sistema, abre el mapa en otro, busca video en un tercero',
                        'Cada sistema tiene su propia base de datos — no comparten información automáticamente',
                        'Las unidades de campo reciben instrucciones por radio sin contexto visual ni video',
                        'El reporte posterior al incidente requiere recopilar datos de 4–6 sistemas distintos manualmente',
                        'Los tiempos de respuesta se inflan por la fricción operativa entre sistemas',
                        'No hay correlación automática entre alerta de sensor, video y despacho',
                      ],
                    },
                    {
                      label: 'Gestión Unificada',
                      items: [
                        'La alerta aparece con video, mapa y opciones de despacho en una sola pantalla',
                        'Todos los datos convergen en un expediente de incidente único y compartido',
                        'Las unidades de campo reciben video, mapa e instrucciones en su dispositivo móvil',
                        'El expediente digital se genera automáticamente con cada acción registrada',
                        'Respuesta 30%–40% más rápida por eliminación de cambio de contexto entre aplicaciones',
                        'Eventos multi-sensor se correlacionan automáticamente en un solo incidente',
                      ],
                    },
                  ]
                : [
                    {
                      label: 'Fragmented Management',
                      items: [
                        'Dispatcher takes the call in one system, opens the map in another, searches video in a third',
                        'Each system has its own database — they do not share information automatically',
                        'Field units receive radio instructions with no visual context or video',
                        'Post-incident reporting requires gathering data from 4–6 different systems manually',
                        'Response times inflated by operational friction between systems',
                        'No automatic correlation between sensor alert, video, and dispatch',
                      ],
                    },
                    {
                      label: 'Unified Management',
                      items: [
                        'Alert appears with video, map, and dispatch options on one screen',
                        'All data converges into a single, shared incident record',
                        'Field units receive video, map, and instructions on their mobile device',
                        'Digital record generated automatically with every action logged',
                        '30%–40% faster response by eliminating context-switching between applications',
                        'Multi-sensor events correlated automatically into a single incident',
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
                ? 'Criterios de Evaluación para Software de Gestión de Emergencias'
                : 'Evaluation Criteria for Emergency Management Software'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Al evaluar plataformas de gestión de emergencias para un centro de mando o agencia de seguridad pública, estos son los criterios que separan las soluciones reales de las promesas de marketing.'
                : 'When evaluating emergency management platforms for a command center or public safety agency, these are the criteria that separate real solutions from marketing promises.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
              {(es
                ? [
                    { title: 'CAD + Video + GIS Nativos', desc: 'El despacho CAD, la gestión de video y el mapa GIS deben ser parte integral de la plataforma — no integraciones superficiales con productos de terceros. Cuando estos módulos son nativos, la información fluye sin fricción y el operador trabaja desde una sola interfaz.' },
                    { title: 'Integración con Infraestructura Existente', desc: 'La plataforma debe conectarse con las cámaras, sensores, radios y sistemas que ya están instalados. Una solución que requiere reemplazar toda la infraestructura existente no es viable para la mayoría de las organizaciones de seguridad pública.' },
                    { title: 'Aplicaciones Móviles de Campo', desc: 'Las unidades despachadas necesitan recibir la información completa del incidente en su dispositivo: mapa, video de cámaras cercanas, instrucciones y actualizaciones en tiempo real. La comunicación debe ser bidireccional — campo reporta estado y evidencia al centro de mando.' },
                    { title: 'Coordinación Multi-Agencia', desc: 'Los incidentes graves involucran policía, bomberos, EMS, protección civil y otras dependencias. La plataforma debe soportar coordinación entre agencias con visibilidad compartida del incidente, asignación de recursos cruzada y comunicaciones integradas.' },
                    { title: 'Escalabilidad', desc: 'La solución debe escalar desde un centro municipal con 200 cámaras hasta un centro estatal con 20,000 dispositivos conectados. La arquitectura debe soportar múltiples sitios, replicación de datos y operación distribuida sin degradar el rendimiento.' },
                    { title: 'Análisis Operativo y BI', desc: 'La plataforma debe generar automáticamente métricas de desempeño: tiempos de respuesta por fase, carga de trabajo por operador, tipos de incidente por zona, tendencias históricas y KPIs operativos. Los datos deben ser exportables y consumibles por sistemas de BI externos.' },
                  ]
                : [
                    { title: 'Native CAD + Video + GIS', desc: 'CAD dispatch, video management, and GIS mapping must be integral parts of the platform — not superficial integrations with third-party products. When these modules are native, information flows without friction and the operator works from a single interface.' },
                    { title: 'Integration with Existing Infrastructure', desc: 'The platform must connect with cameras, sensors, radios, and systems already installed. A solution that requires replacing all existing infrastructure is not viable for most public safety organizations.' },
                    { title: 'Field Mobile Applications', desc: 'Dispatched units need to receive complete incident information on their device: map, nearby camera video, instructions, and real-time updates. Communication must be bidirectional — field reports status and evidence back to the command center.' },
                    { title: 'Multi-Agency Coordination', desc: 'Serious incidents involve police, fire, EMS, civil protection, and other agencies. The platform must support inter-agency coordination with shared incident visibility, cross-agency resource assignment, and integrated communications.' },
                    { title: 'Scalability', desc: 'The solution must scale from a municipal center with 200 cameras to a state center with 20,000 connected devices. The architecture must support multiple sites, data replication, and distributed operation without performance degradation.' },
                    { title: 'Operational Analytics and BI', desc: 'The platform must automatically generate performance metrics: response times by phase, workload per operator, incident types by zone, historical trends, and operational KPIs. Data should be exportable and consumable by external BI systems.' },
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

        {/* ── SECTION 5: KabatOne Platform ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'KabatOne para Gestión de Emergencias' : 'KabatOne for Emergency Management'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>
              {es ? 'Una Plataforma Unificada de Gestión de Emergencias' : 'One Unified Emergency Management Platform'}
            </h2>
            <p style={{ ...pStyle, marginBottom: '28px' }}>
              {es
                ? 'KabatOne integra todos los módulos de gestión de emergencias en un solo entorno operativo. K-Dispatch maneja el despacho CAD completo con asignación inteligente de recursos. K-Video gestiona miles de cámaras con analítica de IA integrada. K-Safety provee el mapa GIS operativo con incidentes y unidades en tiempo real. K-Traffic coordina semaforización y flujo vehicular para vehículos de emergencia. Todo opera desde una sola interfaz, integrándose con la infraestructura existente. KabatOne está desplegado en más de 40 ciudades protegiendo a 73 millones de ciudadanos en Latinoamérica y Estados Unidos.'
                : 'KabatOne integrates all emergency management modules into a single operational environment. K-Dispatch handles full CAD dispatch with intelligent resource assignment. K-Video manages thousands of cameras with integrated AI analytics. K-Safety provides the operational GIS map with real-time incidents and units. K-Traffic coordinates signal control and vehicle flow for emergency vehicles. Everything runs from a single interface, integrating with existing infrastructure. KabatOne is deployed across 40+ cities protecting 73 million citizens in Latin America and the United States.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD Dispatch' },
                { href: '/k-video', label: 'K-Video', desc: es ? 'Videovigilancia + IA' : 'Video + AI Analytics' },
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'Mapa Operativo GIS' : 'GIS Operational Map' },
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
                  { href: '/integrations/drones', label: es ? 'Drones (UAV)' : 'Drones (UAV)' },
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
                  { href: '/resources/what-is-cad-dispatch-software', label: es ? 'Qué Es un Software CAD' : 'What Is CAD Dispatch Software' },
                  { href: '/resources/what-is-a-command-center', label: es ? 'Qué Es un Centro de Mando' : 'What Is a Command Center' },
                  { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Qué Es un RTCC' : 'What Is an RTCC' },
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
                ? 'Preguntas Comunes sobre Software de Gestión de Emergencias'
                : 'Common Questions About Emergency Management Software'}
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
          h2={es ? '¿Listo para Unificar la Gestión de Emergencias?' : 'Ready to Unify Emergency Management?'}
          subtitle={es
            ? 'Agenda una demo personalizada y descubre cómo KabatOne integra despacho CAD, videovigilancia, GIS y operaciones de campo en una sola plataforma de gestión de emergencias.'
            : 'Schedule a personalized demo and see how KabatOne integrates CAD dispatch, video surveillance, GIS, and field operations into one emergency management platform.'}
        />
      </div>

      <Footer es={es} />
    </>
  )
}
