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
  return generatePageMetadata('whatIsACommandCenter', locale)
}

export default async function WhatIsACommandCenterPage({
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
          question: '¿Qué es un centro de mando?',
          answer:
            'Un centro de mando es una instalación centralizada donde operadores, analistas y coordinadores gestionan la seguridad pública de una ciudad o región. Integra sistemas de videovigilancia, despacho CAD, comunicaciones de radio, GIS y datos de sensores IoT en un entorno operativo unificado. Desde el centro de mando, los operadores detectan incidentes, coordinan la respuesta de unidades en campo y supervisan las operaciones en tiempo real.',
        },
        {
          question: '¿Cuál es la diferencia entre un C2 y un C5?',
          answer:
            'Un C2 (Centro de Comando y Control) opera a nivel municipal con funciones básicas de videovigilancia y despacho policial. Un C5 (Centro de Comando, Control, Comunicaciones, Cómputo y Contacto Ciudadano) integra todas las capas operativas: videovigilancia con analítica, despacho CAD multi-agencia, GIS operativo, gestión de tráfico, atención ciudadana y coordinación interinstitucional. El C5 representa la máxima capacidad de integración tecnológica y coordinación entre dependencias de seguridad pública.',
        },
        {
          question: '¿Qué tecnologías integra un centro de mando?',
          answer:
            'Un centro de mando moderno integra: sistemas de videovigilancia (VMS) con miles de cámaras, software de despacho CAD para asignar y rastrear unidades, mapas GIS operativos en tiempo real, comunicaciones de radio y telefonía, sensores IoT (detectores de disparos, botones de pánico, sensores ambientales), lectores de placas vehiculares (LPR), gestión de tráfico y semaforización, analítica de video con inteligencia artificial, y líneas de atención ciudadana como 911.',
        },
        {
          question: '¿Quién opera los centros de mando?',
          answer:
            'Los centros de mando son operados por gobiernos municipales, estatales y federales. El personal incluye operadores de monitoreo de video, despachadores que asignan unidades policiales, de bomberos y ambulancias, analistas de inteligencia que correlacionan información, coordinadores interinstitucionales, y supervisores operativos. En México, los centros C4 y C5 generalmente dependen de la Secretaría de Seguridad estatal o municipal.',
        },
        {
          question: '¿Cómo mejora una plataforma unificada las operaciones de un centro de mando?',
          answer:
            'Una plataforma unificada elimina la fragmentación entre sistemas. En lugar de que el operador cambie entre 4-6 aplicaciones distintas (VMS, CAD, GIS, radio, bases de datos), toda la información converge en una sola interfaz. Esto reduce los tiempos de respuesta entre 30% y 40%, elimina errores de transcripción entre sistemas, permite correlación automática de eventos multi-sensor, y genera un expediente digital completo de cada incidente con video, comunicaciones y línea de tiempo.',
        },
        {
          question: '¿Cómo apoya KabatOne a los centros de mando?',
          answer:
            'KabatOne provee la plataforma operativa unificada para centros de mando: K-Safety es el mapa GIS operativo con posición de unidades en tiempo real e incidentes activos. K-Video gestiona miles de cámaras con analítica de IA integrada. K-Dispatch maneja el despacho CAD completo con asignación inteligente de unidades. K-Traffic monitorea semaforización y flujo vehicular. Todo opera desde una sola interfaz, sin cambiar entre sistemas de diferentes proveedores. KabatOne se integra con la infraestructura existente del centro de mando.',
        },
      ]
    : [
        {
          question: 'What is a command center?',
          answer:
            'A command center is a centralized facility where operators, analysts, and coordinators manage public safety for a city or region. It integrates video surveillance systems, CAD dispatch, radio communications, GIS, and IoT sensor data into a unified operational environment. From the command center, operators detect incidents, coordinate field unit response, and oversee operations in real time.',
        },
        {
          question: 'What is the difference between C2 and C5?',
          answer:
            'A C2 (Command and Control Center) operates at municipal level with basic video surveillance and police dispatch functions. A C5 (Command, Control, Communications, Computing, and Citizen Contact Center) integrates all operational layers: video surveillance with analytics, multi-agency CAD dispatch, operational GIS, traffic management, citizen services, and inter-agency coordination. The C5 represents the highest level of technology integration and coordination across public safety agencies.',
        },
        {
          question: 'What technologies does a command center integrate?',
          answer:
            'A modern command center integrates: video management systems (VMS) with thousands of cameras, CAD dispatch software for assigning and tracking units, real-time operational GIS maps, radio and telephony communications, IoT sensors (gunshot detectors, panic buttons, environmental sensors), license plate readers (LPR), traffic management and signal control, AI-powered video analytics, and citizen hotlines such as 911.',
        },
        {
          question: 'Who operates command centers?',
          answer:
            'Command centers are operated by municipal, state, and federal governments. Staff includes video monitoring operators, dispatchers who assign police, fire, and ambulance units, intelligence analysts who correlate information, inter-agency coordinators, and operations supervisors. In Mexico, C4 and C5 centers typically report to the state or municipal Secretary of Public Safety.',
        },
        {
          question: 'How does a unified platform improve command center operations?',
          answer:
            'A unified platform eliminates fragmentation between systems. Instead of operators switching between 4-6 separate applications (VMS, CAD, GIS, radio, databases), all information converges in a single interface. This reduces response times by 30% to 40%, eliminates transcription errors between systems, enables automatic multi-sensor event correlation, and generates a complete digital record of each incident with video, communications, and timeline.',
        },
        {
          question: 'How does KabatOne support command centers?',
          answer:
            'KabatOne provides the unified operational platform for command centers: K-Safety is the operational GIS map with real-time unit positions and active incidents. K-Video manages thousands of cameras with integrated AI analytics. K-Dispatch handles full CAD dispatch with intelligent unit assignment. K-Traffic monitors signalization and vehicle flow. Everything runs from a single interface without switching between systems from different vendors. KabatOne integrates with the command center\'s existing infrastructure.',
        },
      ]

  /* ── Breadcrumbs ── */
  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    {
      name: es ? '¿Qué Es un Centro de Mando?' : 'What Is a Command Center?',
      url: es
        ? 'https://kabatone.com/es/resources/what-is-a-command-center/'
        : 'https://kabatone.com/resources/what-is-a-command-center/',
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
                ? '¿Qué Es un Centro de Mando? Guía C2–C5 para Seguridad Pública'
                : 'What Is a Command Center? C2–C5 Guide for Public Safety',
              es
                ? 'Un centro de mando es una instalación centralizada que coordina videovigilancia, despacho, GIS y respuesta en campo. Guía completa sobre clasificación C1–C5 y plataformas unificadas.'
                : 'A command center is a centralized facility that coordinates video surveillance, dispatch, GIS, and field response. Complete guide to C1–C5 classification and unified platforms.',
              es
                ? 'https://kabatone.com/es/resources/what-is-a-command-center/'
                : 'https://kabatone.com/resources/what-is-a-command-center/',
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
              {es ? '¿Qué Es un Centro de Mando?' : 'What Is a Command Center?'}
            </span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
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
                ? '¿Qué Es un Centro de Mando?'
                : 'What Is a Command Center?'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Un centro de mando (C2/C3/C4/C5) es una instalación centralizada donde operadores coordinan la respuesta a emergencias, videovigilancia, despacho y operaciones de campo en una ciudad o región. Integra múltiples sistemas — cámaras, sensores, CAD, GIS, comunicaciones de radio y aplicaciones móviles — en un solo entorno operativo que permite detectar, evaluar y responder a incidentes de forma coordinada.'
                : 'A command center (C2/C3/C4/C5) is a centralized facility where operators coordinate emergency response, video surveillance, dispatch, and field operations across a city or region. It integrates multiple systems — cameras, sensors, CAD, GIS, radio communications, and mobile apps — into a single operational environment that enables coordinated incident detection, assessment, and response.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 1: What Does a Command Center Do? ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? '¿Qué Hace un Centro de Mando?' : 'What Does a Command Center Do?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Un centro de mando moderno cumple cuatro funciones operativas fundamentales que, en conjunto, permiten la gestión integral de la seguridad pública y la respuesta a emergencias.'
                : 'A modern command center fulfills four core operational functions that, together, enable comprehensive public safety management and emergency response.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Monitoreo Centralizado' : 'Centralized Monitoring'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'El centro de mando agrega feeds de video en vivo de cientos o miles de cámaras distribuidas en la ciudad, alertas de sensores IoT (detectores de disparos, botones de pánico, sensores ambientales), datos de lectores de placas vehiculares (LPR) y telemetría de dispositivos conectados. Los operadores monitorean estos flujos de información desde videomuros y estaciones de trabajo, con analítica de IA que prioriza automáticamente las alertas que requieren atención inmediata.'
                : 'The command center aggregates live video feeds from hundreds or thousands of cameras distributed across the city, IoT sensor alerts (gunshot detectors, panic buttons, environmental sensors), license plate reader (LPR) data, and telemetry from connected devices. Operators monitor these information streams from video walls and workstations, with AI analytics that automatically prioritize alerts requiring immediate attention.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Coordinación de Incidentes' : 'Incident Coordination'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'Cuando se detecta un incidente, el centro de mando coordina la respuesta entre múltiples agencias: policía, bomberos, servicios de emergencia médica, protección civil y dependencias municipales. El sistema asigna recursos de acuerdo a la naturaleza y gravedad del evento, gestiona la comunicación entre las unidades involucradas, y mantiene un seguimiento en tiempo real del estado de la respuesta. En centros C4 y C5, esta coordinación abarca múltiples municipios y niveles de gobierno.'
                : 'When an incident is detected, the command center coordinates the response across multiple agencies: police, fire, emergency medical services, civil protection, and municipal departments. The system allocates resources based on event nature and severity, manages communication between involved units, and maintains real-time tracking of response status. In C4 and C5 centers, this coordination spans multiple municipalities and government levels.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Despacho y Comunicación' : 'Dispatch and Communication'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'El software de despacho asistido por computadora (CAD) es el motor operativo del centro de mando. Recibe llamadas de emergencia al 911, genera incidentes, asigna unidades de campo basándose en proximidad y disponibilidad, y rastrea el estado de cada recurso despachado. Las comunicaciones fluyen a través de radio, telefonía y aplicaciones móviles que permiten a las unidades de campo recibir instrucciones, reportar actualizaciones y compartir evidencia directamente desde el terreno.'
                : 'Computer-aided dispatch (CAD) software is the operational engine of the command center. It receives 911 emergency calls, generates incidents, assigns field units based on proximity and availability, and tracks the status of each dispatched resource. Communications flow through radio, telephony, and mobile applications that allow field units to receive instructions, report updates, and share evidence directly from the field.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Análisis de Datos y Reporteo' : 'Data Analysis and Reporting'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'Cada incidente genera datos: tiempos de respuesta, ubicaciones, tipos de evento, recursos utilizados, resoluciones. El centro de mando analiza estas tendencias históricas para identificar patrones de criminalidad, zonas de alta incidencia, horarios críticos y métricas de desempeño operativo. Los tableros de inteligencia de negocios (BI) permiten a los directores de seguridad tomar decisiones basadas en datos para la distribución de patrullas, asignación de recursos y estrategias de prevención.'
                : 'Every incident generates data: response times, locations, event types, resources used, resolutions. The command center analyzes these historical trends to identify crime patterns, high-incidence zones, critical time periods, and operational performance metrics. Business intelligence (BI) dashboards enable security directors to make data-driven decisions for patrol distribution, resource allocation, and prevention strategies.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 2: C1–C5 Classification ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? 'Clasificación de Centros de Mando: C1 a C5'
                : 'Command Center Classification: C1 to C5'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'En México y Latinoamérica, los centros de mando se clasifican según su nivel de integración tecnológica, alcance geográfico y capacidad de coordinación interinstitucional. Esta clasificación va del C1 (nivel más básico) al C5 (integración completa).'
                : 'In Mexico and Latin America, command centers are classified by their level of technology integration, geographic reach, and inter-agency coordination capability. This classification ranges from C1 (most basic) to C5 (full integration).'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {(es
                ? [
                    {
                      step: 'C1',
                      title: 'Estación de Policía Local',
                      desc: 'Nivel básico de operación policial. Funciona como punto de contacto local con radio, telefonía y registros manuales o digitales básicos. No cuenta con videovigilancia centralizada ni despacho CAD. Es el primer eslabón de la cadena de seguridad pública a nivel de colonia o delegación.',
                    },
                    {
                      step: 'C2',
                      title: 'Centro de Mando Municipal',
                      desc: 'Opera a nivel ciudad con capacidades de videovigilancia (cientos de cámaras), despacho policial básico y monitoreo de puntos estratégicos. Es el nivel más común en municipios medianos. Típicamente gestiona cámaras de vigilancia, patrullas y comunicaciones de radio dentro del territorio municipal.',
                    },
                    {
                      step: 'C3',
                      title: 'Centro de Coordinación Multi-Agencia',
                      desc: 'Agrega la capacidad de coordinación entre múltiples dependencias: policía municipal, tránsito, protección civil y servicios de emergencia. Opera con sistemas de despacho más sofisticados y comunicación inter-agencia. Cubre la coordinación regional entre municipios vecinos o dentro de una zona metropolitana.',
                    },
                    {
                      step: 'C4',
                      title: 'Centro Estatal de Mando',
                      desc: 'Supervisión a nivel estatal con videovigilancia de amplio alcance, coordinación de fuerzas estatales y municipales, integración de inteligencia criminal, y analítica avanzada. El C4 gestiona miles de cámaras, múltiples sistemas de despacho, y coordina operativos que abarcan todo el territorio estatal.',
                    },
                    {
                      step: 'C5',
                      title: 'Integración Completa',
                      desc: 'El máximo nivel de integración: Comando, Control, Comunicaciones, Cómputo y Contacto Ciudadano. Unifica videovigilancia con analítica de IA, despacho CAD multi-agencia, GIS operativo, gestión de tráfico y semaforización, atención ciudadana (911, 089), y coordinación interinstitucional en una sola plataforma operativa. El C5 representa la visión completa de un centro de mando unificado.',
                    },
                  ]
                : [
                    {
                      step: 'C1',
                      title: 'Local Police Station',
                      desc: 'Basic level of police operations. Functions as a local contact point with radio, telephony, and basic manual or digital records. No centralized video surveillance or CAD dispatch. It is the first link in the public safety chain at the neighborhood or district level.',
                    },
                    {
                      step: 'C2',
                      title: 'Municipal Command Center',
                      desc: 'Operates at city level with video surveillance capabilities (hundreds of cameras), basic police dispatch, and monitoring of strategic points. This is the most common level in mid-sized municipalities. Typically manages surveillance cameras, patrol units, and radio communications within municipal boundaries.',
                    },
                    {
                      step: 'C3',
                      title: 'Multi-Agency Coordination Center',
                      desc: 'Adds multi-agency coordination capability: municipal police, traffic, civil protection, and emergency services. Operates with more sophisticated dispatch systems and inter-agency communication. Covers regional coordination between neighboring municipalities or within a metropolitan area.',
                    },
                    {
                      step: 'C4',
                      title: 'State-Level Command Center',
                      desc: 'State-wide oversight with broad video surveillance, coordination of state and municipal forces, criminal intelligence integration, and advanced analytics. The C4 manages thousands of cameras, multiple dispatch systems, and coordinates operations spanning the entire state territory.',
                    },
                    {
                      step: 'C5',
                      title: 'Full Integration',
                      desc: 'The highest level of integration: Command, Control, Communications, Computing, and Citizen Contact. Unifies video surveillance with AI analytics, multi-agency CAD dispatch, operational GIS, traffic management and signal control, citizen services (911, tip lines), and inter-agency coordination in a single operational platform. The C5 represents the complete vision of a unified command center.',
                    },
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
                ? 'Centro de Mando Unificado vs Fragmentado'
                : 'Unified vs Fragmented Command Centers'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'La mayoría de los centros de mando ya cuentan con cámaras, despacho y algún sistema de mapas. El problema no es la ausencia de tecnología — es la falta de integración entre los sistemas.'
                : 'Most command centers already have cameras, dispatch, and some form of mapping. The problem is not the absence of technology — it is the lack of integration between systems.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '32px' }}>
              {(es
                ? [
                    {
                      label: 'Centro Fragmentado',
                      items: [
                        'VMS en un monitor, CAD en otro, GIS en un tercero, radio en una consola separada',
                        'El operador cambia entre 4–6 sistemas para gestionar un solo incidente',
                        'No hay correlación automática entre alerta de sensor, video y llamada al 911',
                        'Las unidades de campo reciben solo coordenadas por radio, sin video ni contexto visual',
                        'La evidencia queda fragmentada: video en un servidor, CAD en otro, reportes en un tercero',
                        'El cambio de contexto entre sistemas agrega 2–5 minutos por incidente',
                      ],
                    },
                    {
                      label: 'Centro Unificado',
                      items: [
                        'Video, despacho, GIS, alertas y comunicaciones en una sola interfaz operativa',
                        'Un clic en el incidente muestra video de cámaras cercanas, unidades disponibles y contexto completo',
                        'Eventos de múltiples sensores se correlacionan automáticamente en un solo expediente',
                        'Las unidades de campo reciben video, mapa, instrucciones y actualizaciones en su dispositivo móvil',
                        'Toda la evidencia se vincula automáticamente al expediente del incidente',
                        'Respuesta entre 30% y 40% más rápida por eliminación de fricción operativa',
                      ],
                    },
                  ]
                : [
                    {
                      label: 'Fragmented Center',
                      items: [
                        'VMS on one monitor, CAD on another, GIS on a third, radio on a separate console',
                        'Operator switches between 4–6 systems to manage a single incident',
                        'No automatic correlation between sensor alert, video, and 911 call',
                        'Field units receive coordinates by radio only, no video or visual context',
                        'Evidence scattered: video on one server, CAD on another, reports on a third',
                        'Context-switching between systems adds 2–5 minutes per incident',
                      ],
                    },
                    {
                      label: 'Unified Center',
                      items: [
                        'Video, dispatch, GIS, alerts, and communications in one operational interface',
                        'One click on incident shows nearby camera video, available units, and full context',
                        'Events from multiple sensors correlated automatically into a single record',
                        'Field units receive video, map, instructions, and updates on their mobile device',
                        'All evidence auto-linked to the incident record',
                        '30%–40% faster response by eliminating operational friction',
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
                ? 'Criterios de Evaluación para Plataformas de Centro de Mando'
                : 'Evaluation Criteria for Command Center Platforms'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Al evaluar plataformas para un centro de mando, estos son los criterios que determinan si la solución puede soportar operaciones reales a escala.'
                : 'When evaluating platforms for a command center, these are the criteria that determine whether the solution can support real operations at scale.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
              {(es
                ? [
                    { title: 'Integración Multi-Sensor', desc: 'La plataforma debe conectar cámaras de video, detectores de disparos, botones de pánico, sensores ambientales, lectores de placas y dispositivos IoT en una sola capa operativa. Las alertas de diferentes sensores deben correlacionarse automáticamente cuando corresponden al mismo evento.' },
                    { title: 'Despacho CAD Nativo', desc: 'El sistema de despacho asistido por computadora debe ser parte integral de la plataforma — no una integración superficial con un CAD de terceros. El operador debe poder generar un incidente, asignar unidades y dar seguimiento sin salir del entorno operativo principal.' },
                    { title: 'Mapa GIS Operativo', desc: 'El mapa debe ser más que una visualización: debe mostrar en tiempo real la posición de unidades de campo, incidentes activos, cámaras, sensores y zonas de interés. Debe soportar capas dinámicas y permitir interacción directa con los objetos del mapa para ver video o detalles del incidente.' },
                    { title: 'Aplicaciones Móviles de Campo', desc: 'Las unidades de campo necesitan recibir la información del incidente en su dispositivo móvil: ubicación en mapa, video de cámaras cercanas, instrucciones del operador y actualizaciones en tiempo real. La comunicación debe ser bidireccional para que el campo reporte estado y evidencia.' },
                    { title: 'Escalabilidad (Ciudad a Nivel Nacional)', desc: 'La plataforma debe escalar desde un centro municipal con cientos de cámaras hasta un centro estatal o nacional con decenas de miles de dispositivos. La arquitectura debe soportar múltiples sitios, replicación de datos y operación distribuida sin degradar el rendimiento.' },
                    { title: 'Cumplimiento Normativo (ISPS, Requisitos C5)', desc: 'La solución debe cumplir con los estándares de seguridad de la información, requisitos técnicos de centros C5, normatividad de cadena de custodia de evidencia, y regulaciones de protección de datos personales aplicables en la jurisdicción de operación.' },
                  ]
                : [
                    { title: 'Multi-Sensor Integration', desc: 'The platform must connect video cameras, gunshot detectors, panic buttons, environmental sensors, license plate readers, and IoT devices into a single operational layer. Alerts from different sensors should automatically correlate when they correspond to the same event.' },
                    { title: 'Native CAD Dispatch', desc: 'The computer-aided dispatch system must be an integral part of the platform — not a superficial integration with a third-party CAD. The operator should be able to generate an incident, assign units, and track progress without leaving the main operational environment.' },
                    { title: 'Operational GIS Map', desc: 'The map must be more than a visualization: it should display real-time field unit positions, active incidents, cameras, sensors, and zones of interest. It must support dynamic layers and allow direct interaction with map objects to view video or incident details.' },
                    { title: 'Field Mobile Applications', desc: 'Field units need to receive incident information on their mobile device: map location, nearby camera video, operator instructions, and real-time updates. Communication must be bidirectional so the field can report status and evidence.' },
                    { title: 'Scalability (City to Nationwide)', desc: 'The platform must scale from a municipal center with hundreds of cameras to a state or national center with tens of thousands of devices. The architecture must support multiple sites, data replication, and distributed operation without degrading performance.' },
                    { title: 'Compliance (ISPS, C5 Requirements)', desc: 'The solution must meet information security standards, C5 center technical requirements, evidence chain-of-custody regulations, and personal data protection regulations applicable in the operating jurisdiction.' },
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
              {es ? 'KabatOne para Centros de Mando' : 'KabatOne for Command Centers'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>
              {es ? 'Una Sola Plataforma para el Centro de Mando Completo' : 'One Platform for the Complete Command Center'}
            </h2>
            <p style={{ ...pStyle, marginBottom: '28px' }}>
              {es
                ? 'KabatOne provee la plataforma operativa unificada que los centros de mando C2 a C5 necesitan: K-Safety es el mapa GIS operativo con posición de unidades e incidentes en tiempo real. K-Video gestiona miles de cámaras con analítica de IA integrada. K-Dispatch maneja el despacho CAD completo con asignación inteligente de recursos. K-Traffic monitorea semaforización y flujo vehicular. Todo opera desde una sola interfaz, integrándose con la infraestructura existente del centro de mando.'
                : 'KabatOne provides the unified operational platform that C2 through C5 command centers need: K-Safety is the operational GIS map with real-time unit positions and incidents. K-Video manages thousands of cameras with integrated AI analytics. K-Dispatch handles full CAD dispatch with intelligent resource assignment. K-Traffic monitors signalization and vehicle flow. Everything runs from a single interface, integrating with the command center\'s existing infrastructure.'}
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
                  { href: '/integrations/access-control', label: es ? 'Control de Acceso' : 'Access Control' },
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
                  { href: '/resources/what-is-situational-awareness-software', label: es ? 'Qué Es un Software de Conciencia Situacional' : 'What Is Situational Awareness Software' },
                  { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Qué Es un RTCC' : 'What Is an RTCC' },
                  { href: '/resources/how-c5-command-centers-work', label: es ? 'Cómo Funcionan los Centros de Mando C5' : 'How C5 Command Centers Work' },
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
                ? 'Preguntas Comunes sobre Centros de Mando'
                : 'Common Questions About Command Centers'}
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
          h2={es ? '¿Listo para Unificar tu Centro de Mando?' : 'Ready to Unify Your Command Center?'}
          subtitle={es
            ? 'Agenda una demo personalizada y descubre cómo KabatOne integra videovigilancia, despacho CAD, GIS y operaciones de campo en una sola plataforma para centros C2 a C5.'
            : 'Schedule a personalized demo and see how KabatOne integrates video surveillance, CAD dispatch, GIS, and field operations into one platform for C2 through C5 centers.'}
        />
      </div>

      <Footer es={es} />
    </>
  )
}
