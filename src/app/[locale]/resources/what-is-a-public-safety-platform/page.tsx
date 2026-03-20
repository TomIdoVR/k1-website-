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
  return generatePageMetadata('whatIsPublicSafetyPlatform', locale)
}

export default async function WhatIsPublicSafetyPlatformPage({
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
          question: '¿Que es una plataforma de seguridad publica?',
          answer:
            'Una plataforma de seguridad publica es un sistema de software unificado que conecta despacho CAD, gestion de video, sistemas de informacion geografica (GIS) y operaciones de campo en una sola interfaz operativa. Reemplaza los sistemas heredados aislados con conciencia situacional en tiempo real para ciudades, municipios y centros de mando.',
        },
        {
          question: '¿Que componentes incluye una plataforma de seguridad publica?',
          answer:
            'Los componentes principales incluyen despacho asistido por computadora (CAD), gestion de video (VMS) con analitica de IA, mapeo GIS con seguimiento de unidades en vivo, herramientas de operaciones de campo movil, motores de analitica predictiva y tableros de mando operativo. Plataformas como KabatOne integran los cinco modulos en un sistema unico.',
        },
        {
          question: '¿En que se diferencia una plataforma de seguridad publica de un PSIM?',
          answer:
            'Un PSIM (Physical Security Information Management) agrega alarmas de sistemas de terceros sin reemplazarlos. Una plataforma de seguridad publica unificada reemplaza los silos por completo, ejecutando despacho, video, GIS y analitica de forma nativa en una sola base de codigo. Esto elimina la latencia de integracion y reduce la complejidad operativa.',
        },
        {
          question: '¿Que ciudades utilizan plataformas de seguridad publica?',
          answer:
            'Las plataformas de seguridad publica estan desplegadas en mas de 40 ciudades a nivel mundial. En America Latina, las ciudades mexicanas operan centros de mando C5 que utilizan plataformas unificadas como KabatOne para coordinar respuesta a emergencias, vigilancia y gestion de trafico protegiendo a mas de 73 millones de ciudadanos.',
        },
        {
          question: '¿Puede una plataforma de seguridad publica integrarse con camaras existentes?',
          answer:
            'Si. Las plataformas modernas de seguridad publica son agnosticas al fabricante de camaras y soportan ONVIF, RTSP y protocolos propietarios. KabatOne K-Video, por ejemplo, agrega camaras de cualquier fabricante en una sola vista con capacidad de busqueda y agrega analitica de IA sin necesidad de reemplazar hardware existente.',
        },
        {
          question: '¿Que es la conciencia situacional en tiempo real?',
          answer:
            'La conciencia situacional en tiempo real es la capacidad de monitorear, analizar y responder a eventos a medida que ocurren. En seguridad publica, esto significa superponer feeds de video en vivo, ubicaciones de unidades, datos de sensores y alertas de incidentes en un mapa operativo unificado, permitiendo a los comandantes tomar decisiones informadas en segundos.',
        },
      ]
    : [
        {
          question: 'What is a public safety platform?',
          answer:
            'A public safety platform is a unified software system that connects computer-aided dispatch (CAD), video management, geographic information systems (GIS), and field operations into a single operational interface. It replaces siloed legacy systems with real-time situational awareness for cities, municipalities, and command centers.',
        },
        {
          question: 'What components does a public safety platform include?',
          answer:
            'Core components include computer-aided dispatch (CAD), video management (VMS) with AI analytics, GIS mapping with live unit tracking, mobile field operations tools, predictive analytics engines, and operational dashboards. Platforms like KabatOne integrate all five modules into a single system.',
        },
        {
          question: 'How is a public safety platform different from PSIM?',
          answer:
            'A PSIM (Physical Security Information Management) aggregates alarms from third-party systems without replacing them. A unified public safety platform replaces the silos entirely, running dispatch, video, GIS, and analytics natively on a single codebase. This eliminates integration latency and reduces operational complexity.',
        },
        {
          question: 'What cities use public safety platforms?',
          answer:
            'Public safety platforms are deployed in over 40 cities worldwide. In Latin America, Mexican cities operate C5 command centers that use unified platforms like KabatOne to coordinate emergency response, surveillance, and traffic management protecting over 73 million citizens.',
        },
        {
          question: 'Can a public safety platform integrate with existing cameras?',
          answer:
            'Yes. Modern public safety platforms are camera-manufacturer agnostic and support ONVIF, RTSP, and proprietary protocols. KabatOne K-Video, for example, aggregates cameras from any brand into a single searchable view and adds AI analytics without requiring existing hardware replacement.',
        },
        {
          question: 'What is real-time situational awareness?',
          answer:
            'Real-time situational awareness is the ability to monitor, analyze, and respond to events as they happen. In public safety, this means overlaying live video feeds, unit locations, sensor data, and incident alerts on a unified operational map, enabling commanders to make informed decisions within seconds.',
        },
      ]

  /* ── Breadcrumb items ── */
  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    {
      name: es ? '¿Que Es una Plataforma de Seguridad Publica?' : 'What Is a Public Safety Platform?',
      url: es ? 'https://kabatone.com/es/resources/what-is-a-public-safety-platform/' : 'https://kabatone.com/resources/what-is-a-public-safety-platform/',
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
  const linkStyle: React.CSSProperties = {
    color: ACCENT,
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
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
                ? '¿Que Es una Plataforma de Seguridad Publica? Definicion y Guia'
                : 'What Is a Public Safety Platform? Definition & Guide',
              es
                ? 'Una plataforma de seguridad publica unifica despacho CAD, gestion de video, GIS y operaciones de campo. Aprende como las ciudades protegen a sus ciudadanos.'
                : 'A public safety platform unifies CAD dispatch, video management, GIS, and field operations into one system. Learn how cities use unified platforms to protect citizens.',
              es ? 'https://kabatone.com/es/resources/what-is-a-public-safety-platform/' : 'https://kabatone.com/resources/what-is-a-public-safety-platform/',
              '2026-03-19'
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
            <span style={{ color: 'var(--muted)' }}>
              {es ? 'Recursos' : 'Resources'}
            </span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>
              {es ? '¿Que Es una Plataforma de Seguridad Publica?' : 'What Is a Public Safety Platform?'}
            </span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Guia de Referencia' : 'Reference Guide'}
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
                ? '¿Que Es una Plataforma de Seguridad Publica?'
                : 'What Is a Public Safety Platform?'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Una plataforma de seguridad publica es un sistema de software unificado que conecta despacho de emergencias, gestion de video, informacion geografica y operaciones de campo en una sola interfaz operativa. Reemplaza los sistemas heredados aislados que las ciudades han utilizado durante decadas — CAD independiente, servidores de video separados, mapas desconectados — con una base de codigo unica y conciencia situacional en tiempo real. El objetivo es reducir los tiempos de respuesta, mejorar la coordinacion entre agencias y proporcionar a los tomadores de decisiones una imagen operativa completa en cualquier momento.'
                : 'A public safety platform is a unified software system that connects emergency dispatch, video management, geographic information, and field operations into a single operational interface. It replaces the siloed legacy systems that cities have relied on for decades — standalone CAD, separate video servers, disconnected maps — with a single codebase and real-time situational awareness. The goal is to reduce response times, improve coordination across agencies, and give decision-makers a complete operational picture at any moment.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 1: Core Components ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? '¿Cuales Son los Componentes Principales de una Plataforma de Seguridad Publica?'
                : 'What Are the Core Components of a Public Safety Platform?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Una plataforma de seguridad publica consta de cinco modulos interconectados que operan como un solo sistema. Cada modulo maneja una funcion operativa especifica, pero comparte datos, alertas y contexto con los demas en tiempo real.'
                : 'A public safety platform consists of five interconnected modules that operate as a single system. Each module handles a specific operational function but shares data, alerts, and context with the others in real time.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Despacho Asistido por Computadora (CAD)' : 'Computer-Aided Dispatch (CAD)'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'El modulo CAD gestiona la recepcion de llamadas de emergencia, la clasificacion de incidentes y el despacho de unidades. Los sistemas modernos de CAD recomiendan automaticamente la unidad mas cercana disponible basandose en ubicacion GPS, estado de la unidad y tipo de incidente. KabatOne K-Dispatch, por ejemplo, procesa la recepcion de llamadas 911 hasta el despacho de unidades en segundos y registra cada accion para auditoria y analisis posterior.'
                : 'The CAD module manages emergency call intake, incident classification, and unit dispatch. Modern CAD systems automatically recommend the nearest available unit based on GPS location, unit status, and incident type. KabatOne K-Dispatch, for example, processes 911 call intake through unit dispatch in seconds and logs every action for audit and post-incident analysis.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Gestion de Video (VMS)' : 'Video Management (VMS)'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'La gestion de video agrega feeds de camaras de multiples fabricantes y protocolos en una sola vista con capacidad de busqueda. Las plataformas avanzadas agregan analitica de IA — deteccion de objetos, reconocimiento de placas vehiculares, analisis de comportamiento — directamente al flujo de video. KabatOne K-Video soporta camaras de cualquier marca mediante ONVIF, RTSP y protocolos propietarios, eliminando la dependencia de un solo fabricante.'
                : 'Video management aggregates camera feeds from multiple manufacturers and protocols into a single searchable view. Advanced platforms add AI analytics — object detection, license plate recognition, behavior analysis — directly to the video pipeline. KabatOne K-Video supports cameras from any brand via ONVIF, RTSP, and proprietary protocols, eliminating single-vendor lock-in.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Sistemas de Informacion Geografica (GIS)' : 'Geographic Information Systems (GIS)'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'El componente GIS proporciona el mapa operativo donde se visualizan todos los demas datos — incidentes activos, posiciones de unidades, feeds de camaras, zonas de sensores y alertas de trafico. Este mapa permite a los comandantes ver relaciones espaciales entre eventos y desplegar recursos de manera estrategica. KabatOne K-Safety superpone todos estos datos en un solo mapa interactivo.'
                : 'The GIS component provides the operational map where all other data is visualized — active incidents, unit positions, camera feeds, sensor zones, and traffic alerts. This map allows commanders to see spatial relationships between events and deploy resources strategically. KabatOne K-Safety overlays all of this data onto a single interactive map.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Operaciones de Campo Movil' : 'Mobile Field Operations'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'Los oficiales y equipos de primera respuesta en campo necesitan acceso movil a la misma informacion disponible en el centro de mando. Las aplicaciones de campo de la plataforma transmiten actualizaciones de incidentes, navegacion y alertas en tiempo real a dispositivos moviles, permitiendo que las unidades en campo y los comandantes operen con la misma imagen operativa.'
                : 'Officers and first responders in the field need mobile access to the same information available at the command center. Platform field apps stream incident updates, navigation, and alerts in real time to mobile devices, enabling field units and commanders to operate from the same operational picture.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Analitica y Reportes' : 'Analytics and Reporting'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'Los motores de analitica procesan datos historicos y en tiempo real para identificar patrones de criminalidad, medir tiempos de respuesta y generar reportes de desempeno operativo. La analitica predictiva permite a las ciudades anticipar puntos criticos de riesgo antes de que ocurran incidentes, transformando la seguridad publica de reactiva a preventiva.'
                : 'Analytics engines process historical and real-time data to identify crime patterns, measure response times, and generate operational performance reports. Predictive analytics allow cities to anticipate risk hotspots before incidents occur, transforming public safety from reactive to preventive.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 2: Legacy Systems ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? '¿Como se Diferencian las Plataformas de Seguridad Publica de los Sistemas Heredados?'
                : 'How Do Public Safety Platforms Differ from Legacy Systems?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Los sistemas heredados de seguridad publica fueron disenados como herramientas independientes. Una ciudad tipica opera un sistema CAD de un proveedor, un VMS de otro, software GIS separado y hojas de calculo para reportes. Cada sistema almacena datos en su propio formato, requiere su propia capacitacion y no comparte informacion con los demas sin integracion personalizada costosa.'
                : 'Legacy public safety systems were designed as standalone tools. A typical city operates a CAD system from one vendor, a VMS from another, separate GIS software, and spreadsheets for reporting. Each system stores data in its own format, requires its own training, and does not share information with the others without expensive custom integration.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'Una plataforma unificada de seguridad publica elimina estos silos ejecutando todos los modulos en una sola base de codigo. Cuando un operador crea un incidente en el modulo de despacho, el mapa GIS se actualiza instantaneamente, las camaras cercanas se muestran automaticamente y la aplicacion de campo del oficial recibe la alerta — todo sin integracion intermedia. Esta arquitectura reduce la latencia operativa de minutos a segundos.'
                : 'A unified public safety platform eliminates these silos by running all modules on a single codebase. When an operator creates an incident in the dispatch module, the GIS map updates instantly, nearby cameras appear automatically, and the field officer app receives the alert — all without middleware integration. This architecture reduces operational latency from minutes to seconds.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'La distincion entre PSIM (Physical Security Information Management) y una plataforma unificada es significativa. Un PSIM conecta sistemas existentes mediante APIs y middleware, pero los sistemas subyacentes permanecen separados. Una plataforma unificada como KabatOne reemplaza los silos por completo, eliminando la complejidad de integracion y la deuda tecnica acumulada.'
                : 'The distinction between PSIM (Physical Security Information Management) and a unified platform is significant. A PSIM connects existing systems via APIs and middleware, but the underlying systems remain separate. A unified platform like KabatOne replaces the silos entirely, eliminating integration complexity and accumulated technical debt.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 3: Who Uses ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? '¿Quien Utiliza Plataformas de Seguridad Publica?'
                : 'Who Uses Public Safety Platforms?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Las plataformas de seguridad publica son utilizadas por gobiernos municipales, cuerpos policiales, servicios de emergencias medicas (EMS), departamentos de bomberos y centros de comando interinstitucional. En America Latina, los centros de mando C5 (Comando, Control, Comunicaciones, Computo y Contacto Ciudadano) representan la implementacion mas avanzada de este modelo, coordinando todas las agencias de seguridad de una ciudad desde una sola sala de operaciones.'
                : 'Public safety platforms are used by municipal governments, law enforcement agencies, emergency medical services (EMS), fire departments, and inter-agency command centers. In Latin America, C5 command centers (Comando, Control, Comunicaciones, Computo y Contacto Ciudadano) represent the most advanced implementation of this model, coordinating all of a city\'s security agencies from a single operations room.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'KabatOne opera en mas de 40 ciudades protegiendo a mas de 73 millones de ciudadanos, con despliegues activos en Mexico, Colombia, Chile y los Estados Unidos. Los usuarios tipicos incluyen operadores de despacho 911, analistas de videovigilancia, comandantes de incidentes, oficiales de transito y directores de seguridad publica municipal.'
                : 'KabatOne operates in over 40 cities protecting more than 73 million citizens, with active deployments in Mexico, Colombia, Chile, and the United States. Typical users include 911 dispatch operators, video surveillance analysts, incident commanders, traffic officers, and municipal public safety directors.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'Otros sectores que adoptan plataformas de seguridad publica incluyen aeropuertos, puertos maritimos, estadios y operadores de infraestructura critica, donde la coordinacion entre multiples equipos de seguridad y la conciencia situacional en tiempo real son igualmente esenciales.'
                : 'Other sectors adopting public safety platforms include airports, seaports, stadiums, and critical infrastructure operators, where coordination among multiple security teams and real-time situational awareness are equally essential.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 4: Key Benefits ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? '¿Cuales Son los Beneficios Clave para Ciudades y Municipios?'
                : 'What Are the Key Benefits for Cities and Municipalities?'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
              {(es
                ? [
                    { title: 'Tiempos de Respuesta Reducidos', desc: 'El despacho automatizado y la geolocalizacion de unidades en tiempo real reducen los tiempos de respuesta a emergencias hasta en un 40%. Cada segundo cuenta en incidentes criticos, y la eliminacion de pasos manuales entre sistemas acelera todo el flujo de trabajo.' },
                    { title: 'Coordinacion Interinstitucional', desc: 'Policia, bomberos, EMS y transito comparten una sola imagen operativa. Los incidentes se escalan automaticamente entre agencias sin necesidad de llamadas telefonicas o radios separados, eliminando brechas de comunicacion en momentos criticos.' },
                    { title: 'Costos Operativos Menores', desc: 'Una sola plataforma reemplaza multiples licencias de software, contratos de mantenimiento y programas de capacitacion. Las ciudades que migran de sistemas heredados a plataformas unificadas reportan una reduccion significativa en costos totales de propiedad (TCO) a lo largo de cinco anos.' },
                    { title: 'Toma de Decisiones Basada en Datos', desc: 'La analitica integrada transforma datos operativos historicos en inteligencia accionable. Los directores de seguridad publica pueden identificar patrones de criminalidad, optimizar rutas de patrullaje y medir el impacto de las politicas de seguridad con datos reales en lugar de estimaciones.' },
                  ]
                : [
                    { title: 'Reduced Response Times', desc: 'Automated dispatch and real-time unit geolocation reduce emergency response times by up to 40%. Every second matters in critical incidents, and eliminating manual steps between systems accelerates the entire workflow.' },
                    { title: 'Inter-Agency Coordination', desc: 'Police, fire, EMS, and traffic share a single operational picture. Incidents escalate automatically across agencies without separate phone calls or radio channels, eliminating communication gaps in critical moments.' },
                    { title: 'Lower Operating Costs', desc: 'A single platform replaces multiple software licenses, maintenance contracts, and training programs. Cities migrating from legacy systems to unified platforms report significant reduction in total cost of ownership (TCO) over five years.' },
                    { title: 'Data-Driven Decision Making', desc: 'Integrated analytics transform historical operational data into actionable intelligence. Public safety directors can identify crime patterns, optimize patrol routes, and measure the impact of security policies with real data instead of estimates.' },
                  ]
              ).map((benefit, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0b1628',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    padding: '28px 24px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 700,
                      fontSize: '18px',
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                      marginTop: '0',
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

            <p style={pStyle}>
              {es
                ? 'Las ciudades tambien se benefician de una mejor rendicion de cuentas y transparencia. Cada accion de operador, despacho de unidad y resolucion de incidente queda registrada automaticamente, generando un historial auditable completo que fortalece la confianza ciudadana y cumple con requisitos regulatorios.'
                : 'Cities also benefit from improved accountability and transparency. Every operator action, unit dispatch, and incident resolution is automatically logged, generating a complete auditable trail that strengthens citizen trust and meets regulatory requirements.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 5: Related Products ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Explora los Productos' : 'Explore the Products'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>
              {es ? 'Componentes de la Plataforma KabatOne' : 'KabatOne Platform Components'}
            </h2>
            <p style={{ ...pStyle, marginBottom: '28px' }}>
              {es
                ? 'Cada modulo de KabatOne corresponde a un componente principal de una plataforma de seguridad publica.'
                : 'Each KabatOne module corresponds to a core component of a public safety platform.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'Conciencia Situacional' : 'Situational Awareness' },
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD Dispatch' },
                { href: '/k-video', label: 'K-Video', desc: es ? 'Gestion de Video' : 'Video Management' },
                { href: '/k-traffic', label: 'K-Traffic', desc: es ? 'Gestion de Trafico' : 'Traffic Management' },
                { href: '/k-connect', label: 'K-Connect', desc: es ? 'Video Comunitario' : 'Community Video' },
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
                    transition: 'border-color 0.2s, color 0.2s',
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
                ? 'Preguntas Comunes sobre Plataformas de Seguridad Publica'
                : 'Common Questions About Public Safety Platforms'}
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
              <Link href="/resources/psim-vs-unified-platform" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'PSIM vs Plataforma Unificada' : 'PSIM vs Unified Platform'}</span>
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

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={
            es
              ? 'Descubre Como Funciona una Plataforma de Seguridad Publica en tu Ciudad'
              : 'See How a Public Safety Platform Works for Your City'
          }
          subtitle={
            es
              ? 'KabatOne protege a mas de 73 millones de ciudadanos en mas de 40 ciudades. Solicita una demostracion con datos reales de ciudad.'
              : 'KabatOne protects over 73 million citizens across 40+ cities. Request a live demo with real city data.'
          }
        />

        <Footer es={es} />

        {/* ── Responsive ── */}
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
