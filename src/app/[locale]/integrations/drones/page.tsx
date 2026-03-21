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
  return generatePageMetadata('integrationDrones', locale)
}

export default async function DronesIntegrationPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#3b82f6'

  const faqs = es
    ? [
        {
          question: '¿Cómo se integra un dron con una plataforma de seguridad pública?',
          answer:
            'La integración de drones con KabatOne funciona en dos capas. La primera es telemetría: la posición GPS, altitud, velocidad, batería y estado del dron se transmiten en tiempo real al mapa GIS de K-Safety, donde el dron aparece como una unidad más junto con vehículos y personal en campo. La segunda es video: el feed de la cámara del dron se ingiere en K-Video, donde los operadores pueden acceder a él como cualquier otra cámara de la red, incluso si el dron está en movimiento.',
        },
        {
          question: '¿Qué modelos de drones son compatibles con KabatOne?',
          answer:
            'KabatOne integra drones mediante el SDK de DJI (Enterprise series: Matrice 300, Matrice 350, M30, Dock), APIs MQTT/MAVLink para sistemas basados en ArduPilot y PX4, y protocolos de streaming estándar (RTSP, WebRTC) para cualquier dron que transmita video. Los sistemas de dron-en-caja (dock stations) de DJI, Skydio, y Percepto también son compatibles mediante integración API directa con el sistema de gestión de flota.',
        },
        {
          question: '¿Puede KabatOne despachar drones automáticamente a incidentes?',
          answer:
            'Sí, cuando el dron está en una dock station (base automatizada). Cuando K-Dispatch crea un incidente en una zona cubierta por un dron disponible en dock, el sistema puede enviar automáticamente el dron a la ubicación del incidente — activación de la dock, despegue, navegación autónoma al punto de interés, transmisión de video en vivo al despachador — todo antes de que lleguen las unidades terrestres. El operador mantiene control total y puede redirigir o abortar en cualquier momento.',
        },
        {
          question: '¿Cómo se maneja el cumplimiento regulatorio con drones en espacio público?',
          answer:
            'KabatOne proporciona las herramientas de registro y documentación para cumplimiento regulatorio: log automático de cada vuelo con timestamp, coordenadas de despegue y aterrizaje, ruta volada, operador responsable, y propósito del vuelo. Para organizaciones que operan en el espacio aéreo de EE.UU., KabatOne soporta integración con LAANC (Low Altitude Authorization and Notification Capability) de la FAA. En México, el sistema genera los reportes de vuelo requeridos por la AFAC.',
        },
        {
          question: '¿Cuánto tiempo puede un dron dar soporte a una operación?',
          answer:
            'La autonomía de vuelo depende del modelo: los drones de seguridad pública más comunes (DJI M300, M350) tienen entre 45 y 55 minutos de vuelo. Para operaciones prolongadas, los sistemas de dock station permiten aterrizaje automático, carga rápida (30-45 minutos) y redespegue sin intervención humana, efectivamente creando capacidad de patrullaje continuo. KabatOne monitorea el nivel de batería en tiempo real y alerta al operador cuando el dron debe regresar a base.',
        },
        {
          question: '¿El feed de video del dron puede incluir análisis de IA?',
          answer:
            'Sí. El video del dron ingresado a K-Video puede procesar los mismos algoritmos de IA disponibles para cámaras fijas: detección de personas, reconocimiento de placas vehiculares en vuelo bajo, detección de comportamiento anómalo en multitudes, y conteo de personas en eventos masivos. La detección de placas desde el aire requiere drones con cámara de alta resolución (zoom óptico 30x o más) y vuelo a baja altitud (30-50 metros).',
        },
      ]
    : [
        {
          question: 'How does a drone integrate with a public safety platform?',
          answer:
            'Drone integration with KabatOne works on two layers. The first is telemetry: the drone\'s GPS position, altitude, speed, battery, and status are transmitted in real time to the K-Safety GIS map, where the drone appears as another unit alongside field vehicles and personnel. The second is video: the drone camera feed is ingested into K-Video, where operators can access it like any other network camera, even while the drone is in motion.',
        },
        {
          question: 'Which drone models are compatible with KabatOne?',
          answer:
            'KabatOne integrates drones via DJI SDK (Enterprise series: Matrice 300, Matrice 350, M30, Dock), MQTT/MAVLink APIs for ArduPilot and PX4-based systems, and standard streaming protocols (RTSP, WebRTC) for any drone that broadcasts video. Drone-in-a-box systems (dock stations) from DJI, Skydio, and Percepto are also compatible via direct API integration with the fleet management system.',
        },
        {
          question: 'Can KabatOne automatically dispatch drones to incidents?',
          answer:
            'Yes, when the drone is in a dock station (automated base). When K-Dispatch creates an incident in an area covered by an available docked drone, the system can automatically send the drone to the incident location — dock activation, takeoff, autonomous navigation to the point of interest, live video transmission to the dispatcher — all before ground units arrive. The operator retains full control and can redirect or abort at any time.',
        },
        {
          question: 'How is regulatory compliance handled for drones in public airspace?',
          answer:
            'KabatOne provides logging and documentation tools for regulatory compliance: automatic log of every flight with timestamp, takeoff and landing coordinates, flight path, responsible operator, and flight purpose. For organizations operating in US airspace, KabatOne supports integration with the FAA\'s LAANC (Low Altitude Authorization and Notification Capability). In Mexico, the system generates flight reports required by AFAC.',
        },
        {
          question: 'How long can a drone support an operation?',
          answer:
            'Flight endurance depends on the model: the most common public safety drones (DJI M300, M350) have 45–55 minutes of flight time. For extended operations, dock station systems enable automatic landing, fast charging (30–45 minutes), and relaunch without human intervention, effectively creating continuous patrol capability. KabatOne monitors battery levels in real time and alerts the operator when the drone must return to base.',
        },
        {
          question: 'Can the drone video feed include AI analytics?',
          answer:
            'Yes. Drone video ingested into K-Video can run the same AI algorithms available for fixed cameras: person detection, vehicle license plate recognition in low-altitude flight, abnormal behavior detection in crowds, and person counting at mass events. Airborne plate recognition requires high-resolution drones (30x optical zoom or more) and low-altitude flight (30–50 meters).',
        },
      ]

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Integraciones' : 'Integrations', url: es ? 'https://kabatone.com/es/integrations/' : 'https://kabatone.com/integrations/' },
    {
      name: es ? 'Drones (UAV/UAS)' : 'Drones (UAV/UAS)',
      url: es ? 'https://kabatone.com/es/integrations/drones/' : 'https://kabatone.com/integrations/drones/',
    },
  ]

  const sectionStyle: React.CSSProperties = { borderTop: '1px solid var(--border)', padding: '72px 32px' }
  const containerStyle: React.CSSProperties = { maxWidth: '820px', margin: '0 auto' }
  const h2Style: React.CSSProperties = {
    fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif',
    textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '20px', marginTop: '0',
  }
  const pStyle: React.CSSProperties = { fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.8, marginBottom: '20px' }

  const capabilities = es
    ? [
        { title: 'Telemetría en Tiempo Real', desc: 'Posición GPS, altitud, velocidad, batería y estado del dron transmitidos en tiempo real al mapa GIS de K-Safety. El dron aparece como una unidad operativa más junto con vehículos y personal en campo.', color: '#3b82f6' },
        { title: 'Video Aéreo en Vivo', desc: 'El feed de cámara del dron se ingiere en K-Video con latencia menor a 1 segundo. Operadores y despachadores acceden al video desde la misma interfaz que usan para cámaras fijas — sin aplicaciones separadas.', color: '#06b6d4' },
        { title: 'Despacho Automático desde Dock', desc: 'Con drones en dock station, K-Dispatch puede enviar el dron automáticamente a la ubicación de un incidente. El dron despega, navega y transmite video antes de que lleguen las unidades terrestres.', color: '#a855f7' },
        { title: 'IA Analítica sobre Video Aéreo', desc: 'Los algoritmos de K-Video operan sobre el feed del dron: detección de personas, lectura de placas en vuelo bajo, conteo de multitudes y detección de comportamiento anómalo en tiempo real desde el aire.', color: '#22c55e' },
        { title: 'Gestión de Flota Multi-Dron', desc: 'KabatOne gestiona flotas de múltiples drones desde una sola interfaz: asignación de zonas de patrullaje, programación de misiones, monitoreo de estado de batería y dock, y log completo de cada vuelo.', color: '#f59e0b' },
        { title: 'Evidencia Digital Documentada', desc: 'Cada vuelo genera registro inmutable: ruta GPS, video completo, operador, timestamps. El material es admisible como evidencia con cadena de custodia documentada — desde el momento de despacho hasta el aterrizaje.', color: '#ef4444' },
      ]
    : [
        { title: 'Real-Time Telemetry', desc: 'GPS position, altitude, speed, battery, and drone status transmitted in real time to the K-Safety GIS map. The drone appears as another operational unit alongside field vehicles and personnel.', color: '#3b82f6' },
        { title: 'Live Aerial Video', desc: 'Drone camera feed ingested into K-Video with under 1-second latency. Operators and dispatchers access the video from the same interface used for fixed cameras — no separate applications.', color: '#06b6d4' },
        { title: 'Automatic Dispatch from Dock', desc: 'With drones in dock stations, K-Dispatch can automatically send the drone to an incident location. The drone takes off, navigates, and transmits video before ground units arrive.', color: '#a855f7' },
        { title: 'AI Analytics on Aerial Video', desc: 'K-Video algorithms run on the drone feed: person detection, plate reading at low altitude, crowd counting, and real-time abnormal behavior detection from the air.', color: '#22c55e' },
        { title: 'Multi-Drone Fleet Management', desc: 'KabatOne manages multi-drone fleets from a single interface: patrol zone assignment, mission scheduling, battery and dock status monitoring, and complete flight logging.', color: '#f59e0b' },
        { title: 'Documented Digital Evidence', desc: 'Every flight generates an immutable record: GPS route, full video, operator, timestamps. Material is admissible as evidence with documented chain of custody — from dispatch to landing.', color: '#ef4444' },
      ]

  const useCases = es
    ? [
        { title: 'Apoyo en Persecuciones', desc: 'Cuando una unidad inicia una persecución vehicular, el dron disponible más cercano despega automáticamente y mantiene el vehículo en seguimiento desde el aire. El despachador tiene visión aérea continua — incluso cuando el vehículo se pierde de vista de las cámaras fijas o cuando las unidades terrestres se quedan atrás.' },
        { title: 'Búsqueda y Rescate', desc: 'En operaciones de búsqueda y rescate en áreas amplias (zonas boscosas, periferias urbanas, desastres naturales), un dron con cámara térmica puede cubrir en minutos el área que tomaría horas recorrer a pie. KabatOne integra el feed térmico del dron en el mapa de operaciones con los equipos de rescate en tierra.' },
        { title: 'Seguridad en Eventos Masivos', desc: 'Para eventos con miles de asistentes, el dron proporciona visión cenital que ninguna cámara fija puede dar: patrones de movimiento de multitud, cuellos de botella en accesos, zonas de concentración anómala. La IA de KabatOne puede contar personas en tiempo real y alertar cuando la densidad supera umbrales seguros.' },
        { title: 'Evaluación de Desastres', desc: 'Tras un terremoto, inundación o accidente industrial, el dron permite evaluar daños y acceso en minutos sin poner personal en riesgo. El video aéreo se integra directamente en el mapa de operaciones del centro de mando con posicionamiento GPS exacto de cada imagen capturada.' },
      ]
    : [
        { title: 'Pursuit Support', desc: 'When a unit initiates a vehicle pursuit, the nearest available drone automatically launches and maintains the vehicle in aerial tracking. The dispatcher has continuous aerial vision — even when the vehicle is out of sight of fixed cameras or when ground units fall behind.' },
        { title: 'Search and Rescue', desc: 'In search and rescue operations across large areas (forested zones, urban peripheries, natural disasters), a drone with thermal camera can cover in minutes what would take hours on foot. KabatOne integrates the drone\'s thermal feed into the operations map with ground rescue teams.' },
        { title: 'Mass Event Security', desc: 'For events with thousands of attendees, the drone provides an overhead view no fixed camera can match: crowd movement patterns, access bottlenecks, abnormal concentration zones. KabatOne\'s AI can count people in real time and alert when density exceeds safe thresholds.' },
        { title: 'Disaster Assessment', desc: 'After an earthquake, flood, or industrial accident, the drone allows damage and access assessment in minutes without putting personnel at risk. Aerial video integrates directly into the command center\'s operations map with exact GPS positioning of every captured image.' },
      ]

  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema(
          es ? 'Integración de Drones (UAV/UAS) para Seguridad Pública' : 'Drone (UAV/UAS) Integration for Public Safety',
          es ? 'Cómo KabatOne integra drones con video, despacho CAD y GIS para persecuciones, búsqueda y rescate, y vigilancia aérea en tiempo real.' : 'How KabatOne integrates drones with video, CAD dispatch, and GIS for pursuits, search and rescue, and real-time aerial surveillance.',
          es ? 'https://kabatone.com/es/integrations/drones/' : 'https://kabatone.com/integrations/drones/',
          '2026-03-20'
        ))
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '24px 32px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '12px', color: 'var(--muted)', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>{es ? 'Integraciones' : 'Integrations'}</span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>{es ? 'Drones (UAV/UAS)' : 'Drones (UAV/UAS)'}</span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Integración de Tecnología' : 'Technology Integration'}
            </p>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '24px' }}>
              {es ? 'Integración de Drones: El Ojo Aéreo Conectado al Centro de Mando' : 'Drone Integration: Aerial Eye Connected to Command Center'}
            </h1>
            <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.8, maxWidth: '720px', marginBottom: '40px' }}>
              {es
                ? 'Un dron sin conexión al centro de mando es solo una cámara voladora. Integrado con KabatOne, es una unidad operativa: el despachador ve el feed aéreo, el GIS muestra la posición en tiempo real, y el sistema puede despachar automáticamente el dron al siguiente incidente desde su dock.'
                : 'A drone without connection to the command center is just a flying camera. Integrated with KabatOne, it is an operational unit: the dispatcher sees the aerial feed, GIS shows its real-time position, and the system can automatically dispatch the drone to the next incident from its dock.'}
            </p>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img
                src="/images/integrations/drones-hero.jpeg"
                alt={es ? 'Interfaz de mando de drones — feed aéreo en vivo, telemetría y posición en mapa GIS' : 'Drone command interface — live aerial feed, telemetry, and GIS map position'}
                style={{ width: '100%', display: 'block' }}
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES GRID ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Capacidades de la Integración de Drones' : 'Drone Integration Capabilities'}</h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne convierte el dron de una herramienta táctica aislada en una unidad integrada de la plataforma de seguridad pública:'
                : 'KabatOne transforms the drone from an isolated tactical tool into an integrated unit of the public safety platform:'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="usecase-grid">
              {capabilities.map((cap, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', borderLeft: `3px solid ${cap.color}`, padding: '24px' }}>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '17px', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '10px', marginTop: '0' }}>
                    {cap.title}
                  </h3>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Operaciones donde el Dron Marca la Diferencia' : 'Operations Where Drones Make the Difference'}</h2>
            <p style={pStyle}>
              {es
                ? 'Los escenarios donde la capacidad aérea integrada cambia el resultado operativo:'
                : 'Scenarios where integrated aerial capability changes the operational outcome:'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {useCases.map((uc, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', borderLeft: `3px solid ${ACCENT}`, padding: '24px 28px' }}>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '10px', marginTop: '0' }}>
                    {uc.title}
                  </h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPECS ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Especificaciones de Integración' : 'Integration Specifications'}</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--dim)', fontWeight: 600, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '12px' }}>{es ? 'Capacidad' : 'Capability'}</th>
                    <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--dim)', fontWeight: 600, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '12px' }}>{es ? 'Especificación' : 'Specification'}</th>
                  </tr>
                </thead>
                <tbody>
                  {(es ? [
                    ['Latencia de video', '< 1 segundo (streaming RTSP/WebRTC)'],
                    ['Compatibilidad de drones', 'DJI Enterprise, ArduPilot, PX4, Skydio, Percepto'],
                    ['Gestión de flota', 'Múltiples drones simultáneos desde una sola interfaz'],
                    ['Telemetría', 'GPS, altitud, velocidad, batería, estado en tiempo real'],
                    ['Despacho automático', 'Con dock stations compatibles (DJI Dock, Skydio Dock)'],
                    ['Análisis de IA', 'Detección de personas, placas, multitudes sobre video aéreo'],
                    ['Cumplimiento', 'Log de vuelo para LAANC (EE.UU.) y AFAC (México)'],
                    ['Evidencia', 'Video + GPS con cadena de custodia documentada'],
                  ] : [
                    ['Video latency', '< 1 second (RTSP/WebRTC streaming)'],
                    ['Drone compatibility', 'DJI Enterprise, ArduPilot, PX4, Skydio, Percepto'],
                    ['Fleet management', 'Multiple simultaneous drones from a single interface'],
                    ['Telemetry', 'GPS, altitude, speed, battery, real-time status'],
                    ['Auto-dispatch', 'With compatible dock stations (DJI Dock, Skydio Dock)'],
                    ['AI analytics', 'Person, plate, crowd detection on aerial video'],
                    ['Compliance', 'Flight log for LAANC (US) and AFAC (Mexico)'],
                    ['Evidence', 'Video + GPS with documented chain of custody'],
                  ]).map(([cap, spec], i) => (
                    <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '14px 16px', color: 'var(--white)', fontWeight: 500 }}>{cap}</td>
                      <td style={{ padding: '14px 16px', color: 'var(--dim)', fontWeight: 300 }}>{spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── RELATED PRODUCTS ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>{es ? 'Productos Relacionados' : 'Related Products'}</p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>{es ? 'KabatOne para Operaciones con Drones' : 'KabatOne for Drone Operations'}</h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '28px' }}>
              {es ? 'Los módulos que reciben y procesan datos de drones:' : 'Modules that receive and process drone data:'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-video', label: 'K-Video', desc: es ? 'Video Aéreo + IA' : 'Aerial Video + AI', color: '#a855f7' },
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'GIS + Telemetría' : 'GIS + Telemetry', color: '#3b82f6' },
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD Dispatch', color: '#ef4444' },
              ].map((p) => (
                <Link key={p.href} href={p.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '6px', padding: '10px 16px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: p.color }} />
                  {p.label}
                  <span style={{ color: 'var(--muted)', fontSize: '10px', letterSpacing: '0.1em' }}>{p.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>{es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}</p>
            <h2 style={{ ...h2Style, marginBottom: '32px' }}>{es ? 'Preguntas Comunes sobre Integración de Drones' : 'Common Drone Integration Questions'}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: '#0b1220', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px 28px' }}>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '17px', letterSpacing: '0.02em', textTransform: 'uppercase', marginBottom: '10px', marginTop: '0', color: 'var(--white)' }}>{faq.question}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED ARTICLES ── */}
        <section style={{ padding: '64px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, marginBottom: '24px' }}>{es ? 'Artículos Relacionados' : 'Related Articles'}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { href: '/integrations/sensor-fusion', label: es ? 'Fusión de Sensores para Seguridad Pública' : 'Sensor Fusion for Public Safety' },
                { href: '/integrations/lpr', label: es ? 'Reconocimiento de Placas (LPR)' : 'License Plate Recognition (LPR)' },
                { href: '/resources/ai-in-public-safety', label: es ? 'IA en Seguridad Pública: Guía para Ciudades' : 'AI in Public Safety: A Guide for Cities' },
                { href: '/resources/rtcc-setup-guide', label: es ? 'Guía de Implementación RTCC' : 'RTCC Setup Guide' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderRadius: '8px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--dim)', fontSize: '15px' }}>
                  <span>{link.label}</span>
                  <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          es={es}
          h2={es ? 'Integra tus Drones al Centro de Mando' : 'Integrate Your Drones into Command'}
          subtitle={es
            ? 'KabatOne conecta drones DJI, Skydio y otros al mapa GIS, video y despacho CAD. Solicita una demo con tu flota de drones.'
            : 'KabatOne connects DJI, Skydio, and other drones to GIS map, video, and CAD dispatch. Request a demo with your drone fleet.'}
        />
        <Footer es={es} />

        <style>{`
          @media (max-width: 640px) {
            .usecase-grid { grid-template-columns: 1fr !important; }
            section { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </div>
    </>
  )
}
