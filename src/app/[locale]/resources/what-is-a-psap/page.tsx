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
  return generatePageMetadata('whatIsAPsap', locale)
}

export default async function WhatIsAPsapPage({
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
          question: '¿Qué es un PSAP?',
          answer: 'Un PSAP (Public Safety Answering Point, o Punto de Respuesta de Seguridad Pública) es la instalación donde se reciben las llamadas de emergencia al 911 y se despachan las unidades de respuesta. Es el primer punto de contacto entre un ciudadano que reporta una emergencia y el sistema de seguridad pública. En un PSAP trabajan operadores de llamadas (call-takers), despachadores de policía, bomberos y servicios de emergencia médica. En México, esta función la cumplen los centros C4 y C5 que atienden llamadas al 911 y coordinan el despacho.',
        },
        {
          question: '¿Cuál es la diferencia entre un PSAP primario y uno secundario?',
          answer: 'Un PSAP primario es el punto donde la llamada al 911 llega inicialmente — el operador contesta, obtiene la información de la emergencia y clasifica el incidente. Un PSAP secundario recibe la llamada transferida del primario cuando el incidente requiere una agencia específica (por ejemplo, bomberos o ambulancias de un municipio vecino). En sistemas grandes, el PSAP primario filtra y clasifica, mientras los secundarios manejan el despacho especializado.',
        },
        {
          question: '¿Qué tecnología usa un PSAP moderno?',
          answer: 'Un PSAP moderno opera con software de despacho asistido por computadora (CAD) para gestionar incidentes y asignar unidades, sistemas de telefonía que reciben llamadas de voz, texto y video, mapas GIS que geolocalizan las llamadas automáticamente, grabación de llamadas y pantallas para cumplimiento normativo, acceso a bases de datos de antecedentes y vehículos, y cada vez más, integración con cámaras de videovigilancia y sensores IoT que proporcionan contexto visual antes de que las unidades lleguen a la escena.',
        },
        {
          question: '¿Qué es NG911 y cómo cambia los PSAPs?',
          answer: 'NG911 (Next Generation 911) es la evolución del sistema de emergencias basado en voz a una infraestructura digital basada en IP. Con NG911, los PSAPs pueden recibir no solo llamadas de voz sino también mensajes de texto, fotos, videos y datos de sensores directamente de los ciudadanos. NG911 también permite enrutamiento geográfico inteligente (la llamada va al PSAP más cercano al incidente, no al más cercano a la torre celular), transferencia de datos entre PSAPs, y redundancia automática si un centro se satura o falla.',
        },
        {
          question: '¿Cuántos PSAPs existen en Estados Unidos y México?',
          answer: 'En Estados Unidos operan aproximadamente 6,000 PSAPs que colectivamente manejan más de 240 millones de llamadas al 911 por año. La cifra ha disminuido conforme las jurisdicciones consolidan centros pequeños en operaciones regionales más grandes. En México, los centros C4 y C5 cumplen la función de PSAP, con al menos un centro por estado que atiende llamadas al 911. El sistema 911 nacional de México se implementó en 2017 y continúa expandiéndose en capacidad tecnológica.',
        },
        {
          question: '¿Cómo apoya KabatOne a los PSAPs?',
          answer: 'KabatOne provee la plataforma operativa que los PSAPs necesitan para ir más allá de la recepción de llamadas. K-Dispatch maneja el despacho CAD completo — desde la recepción de la llamada hasta el cierre del incidente — con asignación inteligente de unidades. K-Video permite a los operadores del PSAP ver las cámaras cercanas al incidente antes de despachar, proporcionando contexto visual que mejora la clasificación. K-Safety muestra todas las unidades y incidentes activos en un mapa GIS operativo. KabatOne se integra con la infraestructura telefónica existente del PSAP y está desplegado en más de 40 ciudades.',
        },
      ]
    : [
        {
          question: 'What is a PSAP?',
          answer: 'A PSAP (Public Safety Answering Point) is the facility where 911 emergency calls are received and response units are dispatched. It is the first point of contact between a citizen reporting an emergency and the public safety system. PSAPs are staffed by call-takers, police dispatchers, fire dispatchers, and EMS dispatchers. In the United States, there are approximately 6,000 PSAPs handling over 240 million 911 calls per year. In Mexico, C4 and C5 command centers serve the PSAP function, receiving 911 calls and coordinating dispatch.',
        },
        {
          question: 'What is the difference between a primary and secondary PSAP?',
          answer: 'A primary PSAP is where the 911 call initially arrives — the operator answers, gathers emergency information, and classifies the incident. A secondary PSAP receives the call transferred from the primary when the incident requires a specific agency (for example, fire or EMS from a neighboring municipality). In large systems, the primary PSAP filters and classifies while secondary PSAPs handle specialized dispatch.',
        },
        {
          question: 'What technology does a modern PSAP use?',
          answer: 'A modern PSAP operates with computer-aided dispatch (CAD) software to manage incidents and assign units, telephony systems that receive voice, text, and video calls, GIS maps that automatically geolocate calls, call recording and screen capture for compliance, access to criminal and vehicle databases, and increasingly, integration with video surveillance cameras and IoT sensors that provide visual context before units arrive on scene.',
        },
        {
          question: 'What is NG911 and how does it change PSAPs?',
          answer: 'NG911 (Next Generation 911) is the evolution from voice-based emergency systems to an IP-based digital infrastructure. With NG911, PSAPs can receive not only voice calls but also text messages, photos, videos, and sensor data directly from citizens. NG911 also enables intelligent geographic routing (the call goes to the PSAP nearest to the incident, not nearest to the cell tower), data transfer between PSAPs, and automatic redundancy if a center becomes overloaded or fails.',
        },
        {
          question: 'How many PSAPs exist in the United States and Mexico?',
          answer: 'The United States operates approximately 6,000 PSAPs that collectively handle over 240 million 911 calls per year. The number has been declining as jurisdictions consolidate smaller centers into larger regional operations. In Mexico, C4 and C5 centers serve the PSAP function, with at least one center per state handling 911 calls. Mexico\'s national 911 system was implemented in 2017 and continues expanding in technological capability.',
        },
        {
          question: 'How does KabatOne support PSAPs?',
          answer: 'KabatOne provides the operational platform PSAPs need to go beyond call-taking. K-Dispatch handles full CAD dispatch — from call intake to incident closure — with intelligent unit assignment. K-Video lets PSAP operators view cameras near the incident before dispatching, providing visual context that improves classification. K-Safety displays all active units and incidents on an operational GIS map. KabatOne integrates with the PSAP\'s existing telephony infrastructure and is deployed across 40+ cities.',
        },
      ]

  /* ── Breadcrumbs ── */
  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    {
      name: es ? '¿Qué Es un PSAP?' : 'What Is a PSAP?',
      url: es
        ? 'https://kabatone.com/es/resources/what-is-a-psap/'
        : 'https://kabatone.com/resources/what-is-a-psap/',
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
                ? '¿Qué Es un PSAP? Guía sobre Centros de Recepción de Emergencias 911'
                : 'What Is a PSAP? Guide to Public Safety Answering Points',
              es
                ? 'Un PSAP (Public Safety Answering Point) es la instalación donde se reciben las llamadas al 911 y se despachan las unidades de emergencia. Guía completa con tecnología, NG911 y criterios de evaluación.'
                : 'A PSAP (Public Safety Answering Point) is the facility where 911 calls are received and emergency units dispatched. Complete guide covering technology, NG911, and evaluation criteria.',
              es
                ? 'https://kabatone.com/es/resources/what-is-a-psap/'
                : 'https://kabatone.com/resources/what-is-a-psap/',
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
              {es ? '¿Qué Es un PSAP?' : 'What Is a PSAP?'}
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
                ? '¿Qué Es un PSAP?'
                : 'What Is a PSAP?'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Un PSAP (Public Safety Answering Point) es la instalación donde operadores reciben las llamadas de emergencia al 911, clasifican el incidente y despachan las unidades de respuesta — policía, bomberos y servicios de emergencia médica. Es el primer eslabón de la cadena de respuesta a emergencias y el punto donde la velocidad y precisión del sistema se definen. En Estados Unidos operan aproximadamente 6,000 PSAPs que manejan más de 240 millones de llamadas al año. En México, los centros C4 y C5 cumplen esta función.'
                : 'A PSAP (Public Safety Answering Point) is the facility where operators receive 911 emergency calls, classify the incident, and dispatch response units — police, fire, and emergency medical services. It is the first link in the emergency response chain and the point where system speed and accuracy are defined. The United States operates approximately 6,000 PSAPs handling over 240 million calls per year. In Mexico, C4 and C5 command centers serve this function.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 1: What Does a PSAP Do? ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? '¿Qué Hace un PSAP?' : 'What Does a PSAP Do?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Un PSAP gestiona cuatro funciones operativas que determinan la velocidad y calidad de la respuesta a emergencias de una ciudad o región.'
                : 'A PSAP manages four operational functions that determine the speed and quality of emergency response for a city or region.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Recepción de Llamadas (Call-Taking)' : 'Call-Taking'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'Los operadores de llamadas (call-takers) son el primer contacto con el ciudadano en emergencia. Contestan la llamada al 911, obtienen la información crítica — qué sucedió, dónde, cuántas personas están involucradas, si hay armas o heridos — y crean el registro de incidente en el sistema CAD. Un call-taker experimentado completa este proceso en 60 a 90 segundos. Con NG911, los operadores también pueden recibir mensajes de texto, fotos y video directamente del ciudadano.'
                : 'Call-takers are the first contact with the citizen in an emergency. They answer the 911 call, gather critical information — what happened, where, how many people are involved, whether there are weapons or injuries — and create the incident record in the CAD system. An experienced call-taker completes this process in 60 to 90 seconds. With NG911, operators can also receive text messages, photos, and video directly from the citizen.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Clasificación y Priorización' : 'Classification and Prioritization'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'Cada incidente se clasifica por tipo (robo, accidente vehicular, incendio, emergencia médica) y por prioridad (código 1 a código 4, donde código 1 requiere respuesta inmediata con luces y sirena). La clasificación determina qué tipo de unidades se despachan, cuántas, y con qué urgencia. Los sistemas CAD modernos asisten al operador con protocolos estandarizados que guían las preguntas y la clasificación, reduciendo la variabilidad entre operadores.'
                : 'Each incident is classified by type (robbery, vehicle accident, fire, medical emergency) and by priority (code 1 through code 4, where code 1 requires immediate response with lights and sirens). The classification determines which types of units are dispatched, how many, and with what urgency. Modern CAD systems assist the operator with standardized protocols that guide questions and classification, reducing variability between operators.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Despacho de Unidades' : 'Unit Dispatch'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'El despachador asigna las unidades de respuesta basándose en ubicación, disponibilidad y tipo de incidente. El sistema CAD recomienda las unidades más cercanas y apropiadas — la patrulla más próxima para un robo en progreso, la ambulancia más cercana con paramédicos para una emergencia médica. El despachador transmite la asignación por radio y a través de terminales móviles en los vehículos de las unidades. Desde el momento de la clasificación hasta el despacho, el objetivo es menos de 60 segundos.'
                : 'The dispatcher assigns response units based on location, availability, and incident type. The CAD system recommends the nearest and most appropriate units — the closest patrol car for a robbery in progress, the nearest ambulance with paramedics for a medical emergency. The dispatcher transmits the assignment via radio and through mobile terminals in unit vehicles. From classification to dispatch, the target is under 60 seconds.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Seguimiento y Coordinación' : 'Tracking and Coordination'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'Una vez despachadas las unidades, el PSAP monitorea su progreso: en camino, en escena, necesita apoyo, incidente resuelto. Si el incidente escala — por ejemplo, un robo se convierte en una persecución vehicular — el despachador coordina unidades adicionales, cierre de vialidades, y comunicación con otras agencias. El PSAP también gestiona las comunicaciones entre unidades, retransmitiendo actualizaciones y coordinando recursos hasta que el incidente se cierra formalmente.'
                : 'Once units are dispatched, the PSAP monitors their progress: en route, on scene, needs backup, incident resolved. If the incident escalates — for example, a robbery becomes a vehicle pursuit — the dispatcher coordinates additional units, road closures, and communication with other agencies. The PSAP also manages inter-unit communications, relaying updates and coordinating resources until the incident is formally closed.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 2: PSAP Technology Stack ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? 'La Tecnología de un PSAP Moderno'
                : 'The Technology Stack of a Modern PSAP'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Un PSAP moderno opera con múltiples sistemas tecnológicos que, idealmente, deben estar integrados en una plataforma unificada para minimizar los tiempos de respuesta y los errores de coordinación.'
                : 'A modern PSAP operates with multiple technology systems that, ideally, should be integrated into a unified platform to minimize response times and coordination errors.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {(es
                ? [
                    { step: 'CAD', title: 'Despacho Asistido por Computadora', desc: 'El sistema central del PSAP. Gestiona la recepción de llamadas, creación de incidentes, clasificación por protocolo, asignación de unidades, rastreo de estado y cierre del incidente. Todos los demás sistemas alimentan o consumen datos del CAD.' },
                    { step: 'GIS', title: 'Sistema de Información Geográfica', desc: 'Muestra la ubicación de las llamadas, las unidades disponibles y las rutas de respuesta en un mapa operativo. Permite geolocalización automática de llamadas de teléfonos celulares y fijos, y visualización de cámaras, sensores y zonas de interés cercanas al incidente.' },
                    { step: 'TEL', title: 'Telefonía y Comunicaciones', desc: 'El sistema telefónico del PSAP recibe llamadas de la red 911, gestiona colas de espera, enruta llamadas al operador correcto, graba todas las conversaciones y, con NG911, acepta mensajes de texto, video y datos multimedia.' },
                    { step: 'RMS', title: 'Sistema de Gestión de Registros', desc: 'Almacena el historial de incidentes, reportes policiales, registros de detención y datos estadísticos. Los operadores consultan el RMS para verificar antecedentes de direcciones y personas durante la llamada.' },
                    { step: 'VMS', title: 'Gestión de Video', desc: 'Cada vez más PSAPs integran acceso a cámaras de videovigilancia. El operador puede ver la escena del incidente antes de despachar, verificar la información del ciudadano visualmente, y proporcionar a las unidades de campo contexto visual en tiempo real.' },
                    { step: 'NG911', title: 'Infraestructura de Nueva Generación', desc: 'La evolución a redes IP permite recibir multimedia del ciudadano, enrutar llamadas geográficamente (no por torre celular), transferir incidentes completos entre PSAPs, y mantener redundancia automática ante fallas o saturación.' },
                  ]
                : [
                    { step: 'CAD', title: 'Computer-Aided Dispatch', desc: 'The central system of the PSAP. Manages call intake, incident creation, protocol-based classification, unit assignment, status tracking, and incident closure. All other systems feed or consume data from CAD.' },
                    { step: 'GIS', title: 'Geographic Information System', desc: 'Displays call locations, available units, and response routes on an operational map. Enables automatic geolocation of calls from cell phones and landlines, and visualization of cameras, sensors, and zones of interest near the incident.' },
                    { step: 'TEL', title: 'Telephony and Communications', desc: 'The PSAP phone system receives calls from the 911 network, manages hold queues, routes calls to the correct operator, records all conversations, and with NG911, accepts text messages, video, and multimedia data.' },
                    { step: 'RMS', title: 'Records Management System', desc: 'Stores incident history, police reports, arrest records, and statistical data. Operators query the RMS to check address and person history during the call.' },
                    { step: 'VMS', title: 'Video Management', desc: 'Increasingly, PSAPs integrate access to video surveillance cameras. The operator can view the incident scene before dispatching, visually verify the citizen\'s information, and provide field units with real-time visual context.' },
                    { step: 'NG911', title: 'Next Generation Infrastructure', desc: 'The evolution to IP networks enables receiving multimedia from citizens, geographic call routing (not by cell tower), transferring complete incidents between PSAPs, and maintaining automatic redundancy during failures or overload.' },
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
                    minWidth: '40px',
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

        {/* ── SECTION 3: Legacy vs Modern PSAP ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? 'PSAP Tradicional vs PSAP Moderno'
                : 'Legacy PSAP vs Modern PSAP'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'La mayoría de los PSAPs fueron diseñados para recibir llamadas de voz y despachar por radio. La tecnología y las expectativas de los ciudadanos han cambiado — los PSAPs que no evolucionan operan con desventajas medibles en tiempo de respuesta y calidad de la información.'
                : 'Most PSAPs were designed to receive voice calls and dispatch by radio. Technology and citizen expectations have changed — PSAPs that do not evolve operate with measurable disadvantages in response time and information quality.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '32px' }}>
              {(es
                ? [
                    {
                      label: 'PSAP Tradicional',
                      items: [
                        'Solo recibe llamadas de voz — no acepta texto, fotos ni video del ciudadano',
                        'El CAD opera aislado del VMS, GIS y bases de datos — el operador cambia entre pantallas',
                        'Geolocalización imprecisa basada en torre celular (puede tener error de 100+ metros)',
                        'Las unidades reciben instrucciones solo por radio — sin video ni contexto visual',
                        'Transferencia entre PSAPs requiere re-explicar el incidente verbalmente',
                        'Si el PSAP se satura, las llamadas van a cola de espera sin redireccionamiento',
                      ],
                    },
                    {
                      label: 'PSAP Moderno (NG911)',
                      items: [
                        'Recibe voz, texto, fotos, video y datos de sensores del ciudadano',
                        'CAD, VMS, GIS y bases de datos integrados en una interfaz operativa unificada',
                        'Geolocalización precisa por GPS y triangulación — error menor a 50 metros',
                        'Las unidades reciben video, mapa e instrucciones en su dispositivo móvil',
                        'Transferencia digital del incidente completo entre PSAPs — sin repetir información',
                        'Enrutamiento automático a PSAPs vecinos cuando hay saturación o falla',
                      ],
                    },
                  ]
                : [
                    {
                      label: 'Legacy PSAP',
                      items: [
                        'Voice calls only — cannot accept text, photos, or video from citizens',
                        'CAD operates in isolation from VMS, GIS, and databases — operator switches between screens',
                        'Imprecise geolocation based on cell tower (can have 100+ meter error)',
                        'Units receive instructions by radio only — no video or visual context',
                        'Transfer between PSAPs requires verbally re-explaining the incident',
                        'If the PSAP is overloaded, calls queue with no automatic rerouting',
                      ],
                    },
                    {
                      label: 'Modern PSAP (NG911)',
                      items: [
                        'Receives voice, text, photos, video, and sensor data from citizens',
                        'CAD, VMS, GIS, and databases integrated into one unified operational interface',
                        'Precise geolocation via GPS and triangulation — error under 50 meters',
                        'Units receive video, map, and instructions on their mobile device',
                        'Digital transfer of the complete incident between PSAPs — no repeating information',
                        'Automatic routing to neighboring PSAPs during overload or failure',
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
                ? 'Criterios de Evaluación para Plataformas de PSAP'
                : 'Evaluation Criteria for PSAP Platforms'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Al evaluar plataformas tecnológicas para un PSAP, estos son los criterios que determinan si la solución puede soportar operaciones de despacho de emergencias a escala.'
                : 'When evaluating technology platforms for a PSAP, these are the criteria that determine whether the solution can support emergency dispatch operations at scale.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
              {(es
                ? [
                    { title: 'CAD Nativo con Protocolos', desc: 'El sistema CAD debe soportar protocolos de clasificación estandarizados (APCO, IAED), asignación automática de unidades por proximidad y tipo, rastreo de estado en tiempo real, y generación automática del expediente de incidente. Un CAD nativo (no integrado de terceros) elimina la latencia entre la clasificación y el despacho.' },
                    { title: 'Integración con Video', desc: 'El operador del PSAP debe poder ver las cámaras cercanas al incidente desde la misma interfaz donde recibe la llamada. El contexto visual antes del despacho mejora la clasificación, reduce los falsos positivos, y permite dar instrucciones más precisas a las unidades de campo.' },
                    { title: 'GIS Operativo Integrado', desc: 'El mapa debe mostrar la ubicación de la llamada, las unidades disponibles más cercanas, las rutas de respuesta, y las cámaras y sensores en la zona. La geolocalización automática de llamadas celulares (con precisión NG911) es esencial para el despacho eficiente.' },
                    { title: 'Preparación para NG911', desc: 'La plataforma debe soportar recepción multimedia (texto, fotos, video), enrutamiento geográfico inteligente, transferencia digital de incidentes entre PSAPs, y redundancia automática. Los PSAPs que no están preparados para NG911 quedarán obsoletos en los próximos 3-5 años.' },
                    { title: 'Aplicaciones Móviles de Campo', desc: 'Las unidades despachadas necesitan recibir la información completa del incidente en su dispositivo: ubicación en mapa, video de cámaras cercanas, protocolo de respuesta e instrucciones del operador. La comunicación bidireccional campo-PSAP reduce las llamadas de radio y mejora la documentación.' },
                    { title: 'Alta Disponibilidad (99.999%)', desc: 'Un PSAP no puede tener tiempo de inactividad. La plataforma debe ofrecer redundancia geográfica, failover automático, y capacidad de operación degradada si un componente falla. El estándar de la industria para PSAPs es 99.999% de disponibilidad (menos de 5 minutos de inactividad por año).' },
                  ]
                : [
                    { title: 'Native CAD with Protocols', desc: 'The CAD system must support standardized classification protocols (APCO, IAED), automatic unit assignment by proximity and type, real-time status tracking, and automatic incident record generation. A native CAD (not third-party integrated) eliminates latency between classification and dispatch.' },
                    { title: 'Video Integration', desc: 'The PSAP operator must be able to view cameras near the incident from the same interface where the call is received. Visual context before dispatch improves classification, reduces false positives, and allows more precise instructions to field units.' },
                    { title: 'Integrated Operational GIS', desc: 'The map must show call location, nearest available units, response routes, and cameras and sensors in the area. Automatic geolocation of cell calls (with NG911 precision) is essential for efficient dispatch.' },
                    { title: 'NG911 Readiness', desc: 'The platform must support multimedia reception (text, photos, video), intelligent geographic routing, digital incident transfer between PSAPs, and automatic redundancy. PSAPs not prepared for NG911 will become obsolete within 3-5 years.' },
                    { title: 'Field Mobile Applications', desc: 'Dispatched units need to receive complete incident information on their device: map location, nearby camera video, response protocol, and operator instructions. Bidirectional field-PSAP communication reduces radio calls and improves documentation.' },
                    { title: 'High Availability (99.999%)', desc: 'A PSAP cannot have downtime. The platform must offer geographic redundancy, automatic failover, and degraded operation capability if a component fails. The industry standard for PSAPs is 99.999% availability (less than 5 minutes of downtime per year).' },
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

        {/* ── SECTION 5: KabatOne for PSAPs ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'KabatOne para PSAPs' : 'KabatOne for PSAPs'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>
              {es ? 'Del 911 a la Resolución en una Sola Plataforma' : 'From 911 to Resolution in One Platform'}
            </h2>
            <p style={{ ...pStyle, marginBottom: '28px' }}>
              {es
                ? 'KabatOne convierte el PSAP de un centro de recepción de llamadas en un centro de operaciones completo. K-Dispatch maneja el ciclo completo del despacho — desde la recepción de la llamada al 911 hasta el cierre del incidente — con asignación inteligente de unidades y protocolos de clasificación. K-Video permite a los operadores ver las cámaras cercanas a la emergencia antes de despachar, proporcionando contexto visual que reduce errores de clasificación. K-Safety muestra todas las unidades activas y los incidentes en un mapa GIS operativo en tiempo real. KabatOne se integra con la infraestructura telefónica existente y está desplegado en más de 40 ciudades protegiendo a 73 millones de ciudadanos.'
                : 'KabatOne transforms the PSAP from a call-receiving center into a complete operations center. K-Dispatch handles the full dispatch cycle — from 911 call intake to incident closure — with intelligent unit assignment and classification protocols. K-Video lets operators view cameras near the emergency before dispatching, providing visual context that reduces classification errors. K-Safety displays all active units and incidents on a real-time operational GIS map. KabatOne integrates with existing telephony infrastructure and is deployed across 40+ cities protecting 73 million citizens.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD Dispatch' },
                { href: '/k-video', label: 'K-Video', desc: es ? 'Videovigilancia + IA' : 'Video + AI Analytics' },
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'Mapa Operativo GIS' : 'GIS Operational Map' },
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
                  { href: '/resources/what-is-emergency-management-software', label: es ? 'Qué Es un Software de Gestión de Emergencias' : 'What Is Emergency Management Software' },
                  { href: '/resources/what-is-a-command-center', label: es ? 'Qué Es un Centro de Mando' : 'What Is a Command Center' },
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
                ? 'Preguntas Comunes sobre PSAPs'
                : 'Common Questions About PSAPs'}
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
          h2={es ? '¿Listo para Modernizar tu PSAP?' : 'Ready to Modernize Your PSAP?'}
          subtitle={es
            ? 'Agenda una demo personalizada y descubre cómo KabatOne transforma el PSAP de un centro de llamadas en un centro de operaciones completo con despacho CAD, video integrado y GIS operativo.'
            : 'Schedule a personalized demo and see how KabatOne transforms the PSAP from a call center into a complete operations center with CAD dispatch, integrated video, and operational GIS.'}
        />
      </div>

      <Footer es={es} />
    </>
  )
}
