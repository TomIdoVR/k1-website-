import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('c5CommandCenters', locale)
}

export default async function C5CommandCentersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#06b6d4'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: 'https://kabatone.com' + (es ? '/es/' : '/') },
    { name: es ? 'Recursos' : 'Resources', url: 'https://kabatone.com' + (es ? '/es/resources/' : '/resources/') },
    { name: es ? 'Cómo Funcionan los Centros C5' : 'How C5 Command Centers Work', url: 'https://kabatone.com' + (es ? '/es/resources/how-c5-command-centers-work/' : '/resources/how-c5-command-centers-work/') },
  ]

  const faqs = es ? [
    {
      question: '¿Qué significa C5?',
      answer: 'C5 significa Centro de Comando, Control, Comunicaciones, Cómputo y Calidad. Es el modelo de centro de mando utilizado en México y América Latina para coordinar respuesta a emergencias, videovigilancia, tráfico y protección civil desde una sola instalación.',
    },
    {
      question: '¿Qué tecnología utilizan los centros de mando C5?',
      answer: 'Los centros C5 integran sistemas de despacho asistido por computadora (CAD), gestión de video (VMS) con miles de cámaras, sistemas de información geográfica (GIS), gestión de tráfico, analítica con inteligencia artificial y centros de llamadas 911. Todo opera desde video walls y estaciones de operadores conectadas en tiempo real.',
    },
    {
      question: '¿Cuántos centros C5 existen en México?',
      answer: 'México opera más de 30 centros C5 y C4 en sus principales áreas metropolitanas. La Ciudad de México, Guadalajara, Monterrey, Puebla, Querétaro y el Estado de México cuentan con instalaciones C5 activas. Cada centro puede monitorear desde 2,000 hasta más de 60,000 cámaras de videovigilancia.',
    },
    {
      question: '¿Cuál es la diferencia entre un C4 y un C5?',
      answer: 'Un C4 incluye Comando, Control, Comunicaciones y Cómputo. Un C5 agrega una quinta dimensión: Calidad, que incorpora métricas de desempeño, auditoría de procesos y mejora continua en las operaciones del centro de mando. El modelo C5 representa la evolución del C4 hacia estándares operativos más exigentes.',
    },
    {
      question: '¿Qué plataformas de software operan en los centros C5?',
      answer: 'Los centros C5 modernos utilizan plataformas de software unificadas que integran CAD, VMS, GIS, tráfico y analítica en un solo sistema. La plataforma K1 de KabatOne opera en más de 40 ciudades de América Latina, proporcionando conciencia situacional en tiempo real para operaciones C5.',
    },
    {
      question: '¿Cómo integran videovigilancia los centros C5?',
      answer: 'Los centros C5 integran videovigilancia mediante sistemas de gestión de video (VMS) que agregan miles de cámaras urbanas en una sola interfaz. Los operadores pueden visualizar feeds en vivo en video walls, aplicar analítica de IA para detección automática de incidentes, y correlacionar eventos de video con llamadas 911 y unidades en campo.',
    },
  ] : [
    {
      question: 'What does C5 stand for?',
      answer: 'C5 stands for Centro de Comando, Control, Comunicaciones, Cómputo y Calidad (Command, Control, Communications, Computing, and Quality). C5 centers are integrated emergency response and public safety command centers used across Mexico and Latin America to coordinate police, fire, EMS, traffic, and civil protection from a single facility.',
    },
    {
      question: 'What technology do C5 command centers use?',
      answer: 'C5 command centers integrate computer-aided dispatch (CAD), video management systems (VMS) with thousands of cameras, geographic information systems (GIS), traffic management, artificial intelligence analytics, and 911 call centers. All systems operate from video walls and operator workstations connected in real time.',
    },
    {
      question: 'How many C5 centers exist in Mexico?',
      answer: 'Mexico operates more than 30 C5 and C4 centers across its major metropolitan areas. Mexico City, Guadalajara, Monterrey, Puebla, Queretaro, and the State of Mexico all maintain active C5 facilities. Each center can monitor anywhere from 2,000 to over 60,000 surveillance cameras.',
    },
    {
      question: 'What is the difference between C4 and C5?',
      answer: 'A C4 center includes Command, Control, Communications, and Computing. A C5 center adds a fifth dimension: Quality (Calidad), which incorporates performance metrics, process auditing, and continuous improvement into command center operations. The C5 model represents the evolution of C4 toward more demanding operational standards.',
    },
    {
      question: 'What software platforms power C5 centers?',
      answer: 'Modern C5 centers use unified software platforms that integrate CAD, VMS, GIS, traffic, and analytics into a single system. KabatOne\'s K1 platform operates in over 40 cities across Latin America, providing real-time situational awareness for C5 operations.',
    },
    {
      question: 'How do C5 centers integrate video surveillance?',
      answer: 'C5 centers integrate video surveillance through video management systems (VMS) that aggregate thousands of urban cameras into a single interface. Operators can view live feeds on video walls, apply AI analytics for automatic incident detection, and correlate video events with 911 calls and field units.',
    },
  ]

  const articleData = articleSchema(
    es ? '¿Cómo Funcionan los Centros de Mando C5?' : 'How Do C5 Command Centers Work?',
    es ? 'Los centros C5 coordinan respuesta a emergencias, videovigilancia y tráfico en ciudades mexicanas. Arquitectura, tecnología y modelo operativo.' : 'C5 command centers coordinate emergency response, video surveillance, and traffic across Mexican cities. Architecture, technology stack, and operational model.',
    'https://kabatone.com' + (es ? '/es/resources/how-c5-command-centers-work/' : '/resources/how-c5-command-centers-work/'),
    '2026-03-19'
  )

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* -- BREADCRUMB -- */}
        <div style={{
          maxWidth: '820px', margin: '0 auto', padding: '20px 40px 0',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: 'var(--muted)' }}>{es ? 'Recursos' : 'Resources'}</span>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: ACCENT }}>{es ? 'Centros C5' : 'C5 Centers'}</span>
        </div>

        {/* -- HERO -- */}
        <section style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 40px 48px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: '20px',
          }}>
            {es ? 'Guía Técnica' : 'Technical Explainer'}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '28px',
          }}>
            {es ? '¿Cómo Funcionan los Centros de Mando C5?' : 'How Do C5 Command Centers Work?'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Un centro C5 es una instalación de mando integrado que coordina respuesta a emergencias, videovigilancia, despacho de unidades, gestión de tráfico y protección civil desde un solo punto de operación. México opera más de 30 centros C5 en sus principales ciudades, cada uno capaz de monitorear miles de cámaras, gestionar llamadas 911 y coordinar múltiples agencias de seguridad en tiempo real.'
              : 'A C5 command center is an integrated facility that coordinates emergency response, video surveillance, unit dispatch, traffic management, and civil protection from a single point of operation. Mexico operates more than 30 C5 centers across its major cities, each capable of monitoring thousands of cameras, managing 911 calls, and coordinating multiple public safety agencies in real time.'}
          </p>
        </section>

        {/* -- SECTION: What Does C5 Stand For? -- */}
        <section style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px 48px' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(24px, 3.5vw, 36px)', lineHeight: 1.1,
            color: 'var(--white)', marginBottom: '20px',
            borderLeft: `3px solid ${ACCENT}`, paddingLeft: '16px',
          }}>
            {es ? '¿Qué Significa C5?' : 'What Does C5 Stand For?'}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '16px' }}>
            {es
              ? 'C5 significa Centro de Comando, Control, Comunicaciones, Cómputo y Calidad. Cada componente representa una capacidad operativa específica dentro del centro de mando.'
              : 'C5 stands for Centro de Comando, Control, Comunicaciones, Cómputo y Calidad — Command, Control, Communications, Computing, and Quality. Each component represents a specific operational capability within the command center.'}
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px',
            margin: '28px 0',
          }}>
            {[
              { letter: 'C1', label: es ? 'Comando' : 'Command', desc: es ? 'Autoridad operativa y toma de decisiones centralizada' : 'Centralized operational authority and decision-making' },
              { letter: 'C2', label: 'Control', desc: es ? 'Supervisión en tiempo real de unidades y recursos' : 'Real-time oversight of units and resources' },
              { letter: 'C3', label: es ? 'Comunicaciones' : 'Communications', desc: es ? 'Radio, telefonía 911 y redes de datos' : '911 telephony, radio, and data networks' },
              { letter: 'C4', label: es ? 'Cómputo' : 'Computing', desc: es ? 'Infraestructura de software, servidores y analítica' : 'Software infrastructure, servers, and analytics' },
              { letter: 'C5', label: es ? 'Calidad' : 'Quality', desc: es ? 'Métricas, auditoría y mejora continua' : 'Metrics, auditing, and continuous improvement' },
            ].map((c, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                borderTop: `2px solid ${ACCENT}`, borderRadius: '10px', padding: '16px 14px',
              }}>
                <div style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
                  fontSize: '20px', color: ACCENT, marginBottom: '6px',
                }}>{c.letter}</div>
                <div style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                  fontSize: '15px', color: 'var(--white)', marginBottom: '6px',
                }}>{c.label}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.5 }}>{c.desc}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '16px' }}>
            {es
              ? 'El modelo C5 evolucionó a partir del C4 cuando las autoridades mexicanas añadieron Calidad como quinta dimensión obligatoria. La Calidad incorpora indicadores clave de desempeño (KPIs), auditorías de proceso y protocolos de mejora continua que aseguran que los centros de mando cumplan estándares operativos verificables.'
              : 'The C5 model evolved from C4 when Mexican authorities added Quality as a mandatory fifth dimension. Quality incorporates key performance indicators (KPIs), process audits, and continuous improvement protocols that ensure command centers meet verifiable operational standards.'}
          </p>
          <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'Ciudades como la Ciudad de México (C5 CDMX), Guadalajara (C5 Jalisco), Monterrey (C5 Nuevo León) y el Estado de México (C5 EDOMEX) operan instalaciones C5 que coordinan policía, bomberos, servicios médicos de emergencia, tránsito y protección civil desde una sola ubicación.'
              : 'Cities including Mexico City (C5 CDMX), Guadalajara (C5 Jalisco), Monterrey (C5 Nuevo Leon), and the State of Mexico (C5 EDOMEX) operate C5 facilities that coordinate police, fire, emergency medical services, traffic, and civil protection from a single location.'}
          </p>
        </section>

        {/* -- SECTION: Technology Architecture -- */}
        <section style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px 48px' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(24px, 3.5vw, 36px)', lineHeight: 1.1,
            color: 'var(--white)', marginBottom: '20px',
            borderLeft: `3px solid ${ACCENT}`, paddingLeft: '16px',
          }}>
            {es ? '¿Cuál Es la Arquitectura Tecnológica de un Centro C5?' : 'What Is the Technology Architecture of a C5 Center?'}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '16px' }}>
            {es
              ? 'La arquitectura física de un centro C5 se organiza alrededor de tres capas: la sala de operaciones con video walls y estaciones de trabajo de operadores, el centro de datos con servidores y almacenamiento, y la red de comunicaciones que conecta cámaras, sensores y unidades en campo.'
              : 'The physical architecture of a C5 center is organized around three layers: the operations room with video walls and operator workstations, the data center with servers and storage, and the communications network connecting cameras, sensors, and field units.'}
          </p>

          <h3 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
            fontSize: '20px', color: 'var(--white)', marginBottom: '12px', marginTop: '28px',
          }}>
            {es ? 'Sala de Operaciones' : 'Operations Room'}
          </h3>
          <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '16px' }}>
            {es
              ? 'La sala de operaciones de un centro C5 típico contiene entre 40 y 200 estaciones de trabajo para operadores de despacho, analistas de video y supervisores. Un video wall central — que puede medir entre 8 y 30 metros de ancho — muestra mapas GIS en tiempo real, feeds de video en vivo y dashboards operativos. Los operadores acceden a todos los subsistemas desde sus estaciones de trabajo mediante una plataforma de software unificada.'
              : 'The operations room of a typical C5 center contains between 40 and 200 workstations for dispatch operators, video analysts, and supervisors. A central video wall — which can measure between 8 and 30 meters wide — displays real-time GIS maps, live video feeds, and operational dashboards. Operators access all subsystems from their workstations through a unified software platform.'}
          </p>

          <h3 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
            fontSize: '20px', color: 'var(--white)', marginBottom: '12px', marginTop: '28px',
          }}>
            {es ? 'Centro de Datos e Infraestructura' : 'Data Center and Infrastructure'}
          </h3>
          <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'Los centros C5 operan centros de datos on-premise con redundancia N+1 para garantizar disponibilidad continua. La infraestructura de almacenamiento debe manejar petabytes de video archivado, mientras que los servidores de procesamiento ejecutan analítica de IA en tiempo real sobre los streams de video entrantes. La conectividad se sustenta en fibra óptica dedicada, redes de radio TETRA/P25 y enlaces de microondas de respaldo.'
              : 'C5 centers operate on-premise data centers with N+1 redundancy to ensure continuous availability. The storage infrastructure must handle petabytes of archived video, while processing servers run real-time AI analytics on incoming video streams. Connectivity relies on dedicated fiber optics, TETRA/P25 radio networks, and backup microwave links.'}
          </p>
        </section>

        {/* -- SECTION: Core Systems -- */}
        <section style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px 48px' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(24px, 3.5vw, 36px)', lineHeight: 1.1,
            color: 'var(--white)', marginBottom: '20px',
            borderLeft: `3px solid ${ACCENT}`, paddingLeft: '16px',
          }}>
            {es ? '¿Qué Sistemas Operan Dentro de un Centro C5?' : 'What Core Systems Operate Inside a C5 Center?'}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '24px' }}>
            {es
              ? 'Un centro C5 integra múltiples subsistemas de misión crítica en una plataforma operativa unificada. Los cinco sistemas fundamentales son despacho CAD, gestión de video, GIS, gestión de tráfico y analítica con inteligencia artificial.'
              : 'A C5 center integrates multiple mission-critical subsystems into a unified operational platform. The five foundational systems are CAD dispatch, video management, GIS, traffic management, and AI-powered analytics.'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
            {[
              {
                title: es ? 'Despacho CAD' : 'CAD Dispatch',
                href: '/k-dispatch',
                color: '#ef4444',
                desc: es
                  ? 'Gestiona llamadas 911, clasifica incidentes por prioridad, recomienda unidades disponibles y registra cada acción. El despacho CAD es el núcleo operativo del centro C5.'
                  : 'Manages 911 calls, classifies incidents by priority, recommends available units, and logs every action. CAD dispatch is the operational core of the C5 center.',
              },
              {
                title: es ? 'Gestión de Video (VMS)' : 'Video Management (VMS)',
                href: '/k-video',
                color: '#a855f7',
                desc: es
                  ? 'Agrega miles de cámaras de vigilancia urbana en una interfaz unificada. Los centros C5 más grandes gestionan más de 60,000 cámaras con detección de incidentes por IA.'
                  : 'Aggregates thousands of urban surveillance cameras into a unified interface. The largest C5 centers manage over 60,000 cameras with AI-powered incident detection.',
              },
              {
                title: es ? 'GIS y Conciencia Situacional' : 'GIS and Situational Awareness',
                href: '/k-safety',
                color: '#3b82f6',
                desc: es
                  ? 'Superpone incidentes, unidades, cámaras y sensores en un mapa georreferenciado en tiempo real. Los operadores ven la ciudad completa en una sola vista operativa.'
                  : 'Overlays incidents, units, cameras, and sensors on a georeferenced real-time map. Operators see the entire city in a single operational view.',
              },
              {
                title: es ? 'Gestión de Tráfico' : 'Traffic Management',
                href: '/k-traffic',
                color: '#06b6d4',
                desc: es
                  ? 'Controla semáforos, detecta congestión y coordina rutas prioritarias para vehículos de emergencia. Los centros C5 pueden crear corredores verdes automáticos.'
                  : 'Controls traffic signals, detects congestion, and coordinates priority routes for emergency vehicles. C5 centers can create automatic green corridors for first responders.',
              },
            ].map((sys, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                borderLeft: `3px solid ${sys.color}`, borderRadius: '10px', padding: '20px',
              }}>
                <Link href={sys.href} style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                  fontSize: '18px', color: 'var(--white)', textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px',
                }}>
                  {sys.title}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={sys.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
                <div style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.65 }}>{sys.desc}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'La analítica con inteligencia artificial opera como una capa transversal que procesa datos de todos los subsistemas. Los algoritmos de IA detectan objetos abandonados en video, identifican patrones de delito en datos históricos, predicen tiempos de respuesta y generan alertas automáticas cuando las métricas operativas caen por debajo de umbrales definidos.'
              : 'AI analytics operates as a cross-cutting layer that processes data from all subsystems. AI algorithms detect abandoned objects in video, identify crime patterns in historical data, predict response times, and generate automatic alerts when operational metrics fall below defined thresholds.'}
          </p>
        </section>

        {/* -- SECTION: Emergency Response Workflow -- */}
        <section style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px 48px' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(24px, 3.5vw, 36px)', lineHeight: 1.1,
            color: 'var(--white)', marginBottom: '20px',
            borderLeft: `3px solid ${ACCENT}`, paddingLeft: '16px',
          }}>
            {es ? '¿Cómo Coordinan los Centros C5 la Respuesta a Emergencias?' : 'How Do C5 Centers Coordinate Emergency Response?'}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '24px' }}>
            {es
              ? 'El flujo de respuesta a emergencias en un centro C5 sigue una secuencia estandarizada desde la recepción de la llamada 911 hasta la resolución del incidente. Cada paso genera datos que alimentan los indicadores de Calidad (la quinta C del modelo C5).'
              : 'The emergency response workflow in a C5 center follows a standardized sequence from 911 call reception to incident resolution. Every step generates data that feeds the Quality indicators — the fifth C in the C5 model.'}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              {
                step: '01',
                title: es ? 'Recepción de Llamada 911' : '911 Call Reception',
                desc: es
                  ? 'Un operador recibe la llamada, registra la ubicación mediante geolocalización automática y clasifica el incidente según protocolos de prioridad. El sistema CAD crea un registro de incidente con timestamp, coordenadas y categoría.'
                  : 'An operator receives the call, registers the location via automatic geolocation, and classifies the incident according to priority protocols. The CAD system creates an incident record with timestamp, coordinates, and category.',
              },
              {
                step: '02',
                title: es ? 'Verificación por Video' : 'Video Verification',
                desc: es
                  ? 'El sistema identifica automáticamente las cámaras más cercanas al incidente y muestra los feeds en vivo al operador. La verificación visual confirma la naturaleza del incidente antes de despachar unidades, reduciendo respuestas a falsos positivos.'
                  : 'The system automatically identifies the nearest cameras to the incident and displays live feeds to the operator. Visual verification confirms the nature of the incident before dispatching units, reducing false positive responses.',
              },
              {
                step: '03',
                title: es ? 'Despacho de Unidades' : 'Unit Dispatch',
                desc: es
                  ? 'El CAD recomienda las unidades más cercanas disponibles según su ubicación GPS en tiempo real, capacidades y carga de trabajo. El despachador confirma la asignación y las unidades reciben la orden en sus terminales móviles con navegación al punto del incidente.'
                  : 'The CAD recommends the nearest available units based on their real-time GPS location, capabilities, and workload. The dispatcher confirms the assignment and units receive the order on their mobile terminals with navigation to the incident point.',
              },
              {
                step: '04',
                title: es ? 'Coordinación Multiagencia' : 'Multi-Agency Coordination',
                desc: es
                  ? 'Para incidentes de alta prioridad, el C5 coordina simultáneamente policía, bomberos, servicios médicos y protección civil. El mapa GIS muestra todas las unidades en movimiento, mientras que los operadores de tráfico crean corredores de paso prioritario para vehículos de emergencia.'
                  : 'For high-priority incidents, the C5 simultaneously coordinates police, fire, medical services, and civil protection. The GIS map shows all units in motion, while traffic operators create priority corridors for emergency vehicles.',
              },
              {
                step: '05',
                title: es ? 'Resolución y Registro' : 'Resolution and Logging',
                desc: es
                  ? 'Una vez resuelto el incidente, todas las acciones, tiempos de respuesta y evidencia de video quedan registrados automáticamente. Estos datos alimentan los dashboards de Calidad (C5) y permiten auditorías posteriores y análisis de mejora continua.'
                  : 'Once the incident is resolved, all actions, response times, and video evidence are automatically logged. This data feeds the Quality (C5) dashboards and enables post-incident audits and continuous improvement analysis.',
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px', position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: `color-mix(in srgb, ${ACCENT} 18%, transparent)`,
                    border: `1px solid ${ACCENT}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'DM Mono, monospace', fontSize: '12px', fontWeight: 700, color: ACCENT,
                  }}>{item.step}</div>
                  {i < 4 && <div style={{ width: '1px', flexGrow: 1, background: 'var(--border)', minHeight: '20px' }} />}
                </div>
                <div style={{ paddingBottom: '28px' }}>
                  <div style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '18px', color: 'var(--white)', marginBottom: '8px', lineHeight: 1.3,
                  }}>{item.title}</div>
                  <div style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* -- SECTION: The Role of Software Platforms -- */}
        <section style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px 48px' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(24px, 3.5vw, 36px)', lineHeight: 1.1,
            color: 'var(--white)', marginBottom: '20px',
            borderLeft: `3px solid ${ACCENT}`, paddingLeft: '16px',
          }}>
            {es ? '¿Qué Papel Juegan las Plataformas de Software en los Centros C5 Modernos?' : 'What Role Do Software Platforms Play in Modern C5 Centers?'}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '16px' }}>
            {es
              ? 'Los primeros centros C5 funcionaban con sistemas separados para cada función — un software para despacho, otro para video, otro para GIS. Los operadores debían alternar entre múltiples pantallas y aplicaciones para gestionar un solo incidente. Esta fragmentación generaba retrasos, errores de coordinación y dificultad para mantener los estándares de Calidad.'
              : 'Early C5 centers operated with separate systems for each function — one software for dispatch, another for video, another for GIS. Operators had to switch between multiple screens and applications to manage a single incident. This fragmentation created delays, coordination errors, and difficulty maintaining Quality standards.'}
          </p>
          <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '16px' }}>
            {es
              ? 'Las plataformas de software unificadas reemplazaron este modelo de silos al integrar CAD, VMS, GIS, tráfico y analítica en una sola interfaz. Un operador de un centro C5 moderno puede recibir una llamada 911, verificar el incidente en video, despachar unidades y monitorear su respuesta desde una misma pantalla.'
              : 'Unified software platforms replaced this siloed model by integrating CAD, VMS, GIS, traffic, and analytics into a single interface. An operator in a modern C5 center can receive a 911 call, verify the incident on video, dispatch units, and monitor their response from the same screen.'}
          </p>
          <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '16px' }}>
            {es
              ? 'La plataforma K1 de KabatOne es un ejemplo de esta arquitectura unificada. K1 opera en más de 40 ciudades de América Latina, conectando módulos de despacho (K-Dispatch), gestión de video (K-Video), conciencia situacional GIS (K-Safety), gestión de tráfico (K-Traffic) y video comunitario (K-Connect) en un ecosistema integrado.'
              : 'KabatOne\'s K1 platform exemplifies this unified architecture. K1 operates in over 40 cities across Latin America, connecting dispatch modules (K-Dispatch), video management (K-Video), GIS situational awareness (K-Safety), traffic management (K-Traffic), and community video (K-Connect) into an integrated ecosystem.'}
          </p>
          <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'La transición de sistemas fragmentados a plataformas unificadas ha permitido a los centros C5 reducir tiempos de respuesta hasta en un 40%, mejorar la coordinación multiagencia y cumplir de manera consistente con los indicadores de Calidad que exige el modelo C5.'
              : 'The transition from fragmented systems to unified platforms has enabled C5 centers to reduce response times by up to 40%, improve multi-agency coordination, and consistently meet the Quality indicators required by the C5 model.'}
          </p>

          {/* ── Internal links ── */}
          <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '12px' }}>
              <span style={{ fontFamily: 'DM Mono, monospace', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {es ? 'Integraciones:' : 'Integrations:'}
              </span>
              {[
                { href: '/integrations/sensor-fusion', label: es ? 'Fusión de Sensores' : 'Sensor Fusion' },
                { href: '/integrations/lpr', label: 'LPR' },
                { href: '/integrations/panic-buttons', label: es ? 'Botones de Pánico' : 'Panic Buttons' },
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
                { href: '/resources/what-is-a-real-time-crime-center', label: es ? '¿Qué es un RTCC?' : 'What Is a Real-Time Crime Center' },
                { href: '/resources/what-is-situational-awareness-software', label: es ? 'Software de Conciencia Situacional' : 'What Is Situational Awareness Software' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ color: ACCENT, textDecoration: 'none', borderBottom: `1px solid ${ACCENT}40` }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* -- FAQ SECTION -- */}
        <section style={{
          maxWidth: '820px', margin: '0 auto', padding: '48px 40px 48px',
          borderTop: '1px solid var(--border)',
        }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: '16px',
          }}>
            {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </p>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(24px, 3.5vw, 36px)', lineHeight: 1.1,
            color: 'var(--white)', marginBottom: '32px',
          }}>
            {es ? 'Todo Sobre los Centros C5' : 'Everything About C5 Centers'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                borderRadius: '12px', padding: '24px',
              }}>
                <h3 style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                  fontSize: '18px', color: 'var(--white)', marginBottom: '10px', lineHeight: 1.3,
                }}>
                  {faq.question}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* -- RELATED ARTICLES -- */}
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
              <Link href="/resources/what-is-a-public-safety-platform" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? '¿Qué es una plataforma de seguridad pública?' : 'What Is a Public Safety Platform?'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/psim-vs-unified-platform" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'PSIM vs Plataforma Unificada' : 'PSIM vs Unified Platform'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/smart-city-platform-guide" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'Guía de plataformas de ciudad inteligente' : 'Smart City Platform Guide'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/public-safety-software-municipalities-mexico" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'Software de seguridad pública para México' : 'Public Safety Software for Mexico'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* -- CTA -- */}
        <CTASection
          es={es}
          h2={es ? 'Transforma tu Centro C5 con Tecnología Unificada' : 'Transform Your C5 Center with Unified Technology'}
          subtitle={es
            ? 'La plataforma K1 de KabatOne opera en más de 40 ciudades de América Latina. Descubre cómo una plataforma unificada puede mejorar los tiempos de respuesta y la coordinación operativa de tu centro de mando.'
            : 'KabatOne\'s K1 platform operates in over 40 cities across Latin America. Discover how a unified platform can improve response times and operational coordination at your command center.'}
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: repeat(5"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            div[style*="grid-template-columns: repeat(5"] > div:last-child {
              grid-column: 1 / -1;
            }
            div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 480px) {
            div[style*="grid-template-columns: repeat(5"] {
              grid-template-columns: 1fr !important;
            }
            div[style*="grid-template-columns: repeat(5"] > div:last-child {
              grid-column: auto;
            }
          }
        `}</style>
      </div>
    </>
  )
}
