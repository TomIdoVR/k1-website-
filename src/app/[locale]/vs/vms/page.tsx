import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { faqPageSchema, breadcrumbSchema } from '@/lib/schema'
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
  return generatePageMetadata('vsVms', locale)
}

export default async function VsVmsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#2563eb'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Comparaciones' : 'Compare', url: es ? 'https://kabatone.com/es/vs/' : 'https://kabatone.com/vs/' },
    { name: es ? 'KabatOne vs VMS Tradicional' : 'KabatOne vs Traditional VMS', url: es ? 'https://kabatone.com/es/vs/vms/' : 'https://kabatone.com/vs/vms/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre un VMS y una plataforma de seguridad pública?',
      answer: 'Un sistema de gestión de video (VMS) está diseñado para gestionar cámaras — grabación, reproducción, alertas de video y, en algunos casos, analítica. Una plataforma de seguridad pública como KabatOne agrega las capas que suceden después de que se detecta un incidente en cámara: despacho CAD para coordinar unidades, GIS para rastrear respondedores en tiempo real, gestión de tráfico para adaptar el entorno urbano a la emergencia, y flujos de trabajo para campo. El VMS te dice qué está pasando; la plataforma de seguridad pública coordina la respuesta.',
    },
    {
      question: '¿Por qué un VMS no es suficiente para operaciones de seguridad pública?',
      answer: 'El VMS fue diseñado para el monitoreo, no para la respuesta. Un operador que detecta un incidente en un VMS típico debe luego cambiar a un sistema CAD separado para despachar una unidad, abrir una capa GIS separada para rastrear a los respondedores, y gestionar la coordinación por radio. Cada cambio de sistema consume tiempo y aumenta la probabilidad de error humano. Para centros de mando que gestionan cientos de incidentes diarios, esta fragmentación tiene un costo operativo real. Una plataforma de seguridad pública unificada conecta todos estos pasos en un solo flujo.',
    },
    {
      question: '¿KabatOne puede reemplazar el VMS existente de una ciudad?',
      answer: 'KabatOne K-Video es un módulo de gestión de video completo con analítica IA que puede reemplazar un VMS independiente. Sin embargo, KabatOne también puede funcionar junto a la infraestructura de cámaras existente — K-Video soporta ONVIF, RTSP y protocolos IP estándar de la industria, lo que permite agregar feeds de cámaras de cualquier fabricante y VMS. Las ciudades pueden incorporar KabatOne como la capa de coordinación de respuesta sin necesidad de reemplazar su hardware de cámaras.',
    },
    {
      question: '¿Qué capacidades agrega KabatOne que un VMS estándar no tiene?',
      answer: 'KabatOne agrega cuatro capas que no existen en un VMS estándar: (1) K-Dispatch — despacho CAD nativo con recepción de llamadas, recomendación de unidades y registro de incidentes; (2) K-Safety — conciencia situacional GIS con seguimiento en tiempo real de incidentes, unidades y activos en toda la ciudad; (3) K-Traffic — gestión inteligente de tráfico con control adaptativo de semáforos, detección de infracciones y coordinación de corredor de emergencia; (4) K-Connect — integración de video ciudadano y empresarial en el centro de mando. Estas capacidades son específicas para operaciones de seguridad pública.',
    },
    {
      question: '¿Un VMS con analítica de terceros es equivalente a KabatOne?',
      answer: 'No. Los VMS con ecosistemas de analítica de terceros permiten agregar módulos de detección de comportamiento, reconocimiento facial o análisis de multitudes — pero estas son capas de detección adicionales, no capacidades de respuesta. El despacho CAD, la gestión GIS de respondedores en tiempo real, el control de tráfico y los flujos de trabajo de campo son sistemas operativos complejos, no módulos de analítica. Integrarlos sobre un VMS requiere proyectos de integración costosos y mantener contratos y actualizaciones independientes para cada sistema. KabatOne ofrece todo esto de forma nativa.',
    },
    {
      question: '¿Para qué organizaciones es más adecuado KabatOne frente a un VMS estándar?',
      answer: 'KabatOne es la opción más fuerte para organizaciones de seguridad pública que gestionan respuesta operativa a incidentes: municipios con centros de mando C4/C5, agencias de gestión de emergencias, puertos, aeropuertos y estadios con operaciones de seguridad activas. Un VMS estándar es más adecuado para organizaciones cuya necesidad principal es grabación de video y monitoreo sin despacho activo de recursos de respuesta. Si tu operación necesita coordinar quién responde, cómo llega y qué hace al llegar, necesitas más que un VMS.',
    },
  ] : [
    {
      question: 'What is the difference between a VMS and a public safety platform?',
      answer: 'A video management system (VMS) is designed to manage cameras — recording, playback, video alerts, and in some cases analytics. A public safety platform like KabatOne adds the layers that happen after an incident is detected on camera: CAD dispatch to coordinate units, GIS to track responders in real time, traffic management to adapt the urban environment to the emergency, and field workflows. The VMS tells you what is happening; the public safety platform coordinates the response.',
    },
    {
      question: 'Why is a VMS not enough for public safety operations?',
      answer: 'A VMS was designed for monitoring, not for response. An operator who detects an incident in a typical VMS must then switch to a separate CAD system to dispatch a unit, open a separate GIS layer to track responders, and manage coordination over radio. Every system switch costs time and increases the probability of human error. For command centers managing hundreds of incidents per day, this fragmentation has a real operational cost. A unified public safety platform connects all of those steps in one workflow.',
    },
    {
      question: 'Can KabatOne replace a city\'s existing VMS?',
      answer: 'KabatOne K-Video is a full video management module with AI analytics that can replace a standalone VMS. However, KabatOne can also work alongside existing camera infrastructure — K-Video supports ONVIF, RTSP, and standard industry IP protocols, which allows aggregating camera feeds from any manufacturer and VMS. Cities can bring KabatOne in as the response coordination layer without needing to replace their camera hardware.',
    },
    {
      question: 'What capabilities does KabatOne add that a standard VMS does not have?',
      answer: 'KabatOne adds four layers that do not exist in a standard VMS: (1) K-Dispatch — native CAD dispatch with call intake, unit recommendation, and incident logging; (2) K-Safety — GIS situational awareness with real-time tracking of incidents, units, and assets across the city; (3) K-Traffic — intelligent traffic management with adaptive signal control, violation detection, and emergency corridor coordination; (4) K-Connect — integration of citizen and business cameras into the command center. These capabilities are specific to public safety operations.',
    },
    {
      question: 'Is a VMS with third-party analytics equivalent to KabatOne?',
      answer: 'No. VMS platforms with third-party analytics ecosystems allow adding behavior detection, facial recognition, or crowd analysis modules — but these are additional detection layers, not response capabilities. CAD dispatch, real-time GIS responder management, traffic control, and field workflows are complex operational systems, not analytics modules. Integrating them on top of a VMS requires costly integration projects and maintaining separate contracts and updates for each system. KabatOne delivers all of this natively.',
    },
    {
      question: 'Which organizations are best suited for KabatOne vs a standard VMS?',
      answer: 'KabatOne is the stronger choice for public safety organizations that manage active incident response: municipalities with C4/C5 command centers, emergency management agencies, ports, airports, and stadiums with active security operations. A standard VMS is better suited for organizations whose primary need is video recording and monitoring without active dispatch of response resources. If your operation needs to coordinate who responds, how they get there, and what they do when they arrive — you need more than a VMS.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Propósito principal',
      vms: 'Monitoreo y grabación de video',
      kabatone: 'Plataforma unificada de respuesta a incidentes',
    },
    {
      category: 'Despacho / CAD',
      vms: 'No incluido — requiere sistema CAD externo',
      kabatone: 'K-Dispatch — módulo CAD nativo integrado con video y GIS',
    },
    {
      category: 'GIS / Conciencia situacional',
      vms: 'Vista de mapa limitada o ausente',
      kabatone: 'K-Safety — GIS completo con seguimiento de incidentes y unidades en tiempo real',
    },
    {
      category: 'Gestión de tráfico',
      vms: 'No disponible',
      kabatone: 'K-Traffic — control de semáforos, detección de infracciones y corredor de emergencia',
    },
    {
      category: 'Video comunitario / ciudadano',
      vms: 'No disponible de forma nativa',
      kabatone: 'K-Connect — integración nativa de video público-privado',
    },
    {
      category: 'Flujo de respuesta en campo',
      vms: 'No incluido',
      kabatone: 'Flujos nativos para responders: asignación, seguimiento y cierre de incidente',
    },
    {
      category: 'Modelo de integración',
      vms: 'Ecosistema abierto: cada capacidad requiere integración de terceros',
      kabatone: 'Plataforma nativa: todas las capacidades integradas de fábrica',
    },
  ] : [
    {
      category: 'Primary purpose',
      vms: 'Video monitoring and recording',
      kabatone: 'Unified incident response platform',
    },
    {
      category: 'Dispatch / CAD',
      vms: 'Not included — requires external CAD system',
      kabatone: 'K-Dispatch — native CAD integrated with video and GIS',
    },
    {
      category: 'GIS / Situational awareness',
      vms: 'Limited or no map view',
      kabatone: 'K-Safety — full GIS with live incident and unit tracking',
    },
    {
      category: 'Traffic management',
      vms: 'Not available',
      kabatone: 'K-Traffic — signal control, violation detection, emergency corridors',
    },
    {
      category: 'Community / citizen video',
      vms: 'Not available natively',
      kabatone: 'K-Connect — native public-private video integration',
    },
    {
      category: 'Field response workflow',
      vms: 'Not included',
      kabatone: 'Native responder workflows: assignment, tracking, incident closure',
    },
    {
      category: 'Integration model',
      vms: 'Open ecosystem: each capability requires third-party integration',
      kabatone: 'Native platform: all capabilities integrated out of the box',
    },
  ]

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── BREADCRUMB ── */}
        <div style={{
          maxWidth: '1160px', margin: '0 auto', padding: '20px 40px 0',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: 'var(--muted)' }}>{es ? 'Comparaciones' : 'Compare'}</span>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: ACCENT }}>{es ? 'KabatOne vs VMS Tradicional' : 'KabatOne vs Traditional VMS'}</span>
        </div>

        {/* ── HERO ── */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 40px 80px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: '20px',
          }}>
            <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', background: ACCENT, marginRight: '8px', verticalAlign: 'middle', animation: 'pulse 2s infinite' }} />
            {es ? 'Comparación de Plataformas' : 'Platform Comparison'}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '28px',
          }}>
            {es
              ? 'KabatOne vs VMS Tradicional — Más Allá del Monitoreo de Video'
              : 'KabatOne vs Traditional VMS — Beyond Video Monitoring'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'Los sistemas de gestión de video (VMS) son excelentes para lo que fueron diseñados: gestionar cámaras, almacenar grabaciones y alertar sobre eventos de video. Para los municipios, centros de mando y agencias de seguridad pública que necesitan coordinar la respuesta — no solo monitorear — un VMS es el punto de partida, no la solución completa. KabatOne es la plataforma unificada que conecta video con despacho CAD, GIS, gestión de tráfico y operaciones de campo en un solo flujo operativo.'
              : 'Video management systems (VMS) are excellent at what they were designed to do: manage cameras, store recordings, and alert on video events. For municipalities, command centers, and public safety agencies that need to coordinate response — not just monitor — a VMS is the starting point, not the complete solution. KabatOne is the unified platform that connects video with CAD dispatch, GIS, traffic management, and field operations in one operational workflow.'}
          </p>
        </section>

        {/* ── WHAT IS A VMS? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es un VMS y Para Qué Fue Diseñado?' : 'What Is a VMS and What Was It Designed For?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Un sistema de gestión de video (VMS) es una plataforma de software diseñada para centralizar el control de cámaras de seguridad IP. Gestiona la ingestión de video en vivo, el almacenamiento de grabaciones, la reproducción, el movimiento PTZ de cámaras y las alertas basadas en eventos de video. Los principales VMS del mercado — incluyendo Milestone XProtect, Genetec Security Center, Avigilon Control Center y Hanwha Wisenet WAVE — son herramientas robustas para gestionar grandes redes de cámaras con integraciones de analítica de terceros.'
                : 'A video management system (VMS) is a software platform designed to centralize control of IP security cameras. It manages live video ingestion, recording storage, playback, PTZ camera control, and alerts based on video events. The leading VMS platforms on the market — including Milestone XProtect, Genetec Security Center, Avigilon Control Center, and Hanwha Wisenet WAVE — are robust tools for managing large camera networks with third-party analytics integrations.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El VMS evolucionó del entorno de CCTV analógico y fue diseñado principalmente para operaciones de seguridad física en entornos empresariales: vigilar instalaciones, detectar intrusiones, investigar eventos después del hecho y controlar el acceso físico. Es una herramienta de monitoreo, no una plataforma de respuesta operativa.'
                : 'The VMS evolved from the analog CCTV environment and was designed primarily for physical security operations in enterprise settings: watching facilities, detecting intrusions, investigating events after the fact, and controlling physical access. It is a monitoring tool, not an operational response platform.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Para las organizaciones de seguridad pública, el VMS resuelve la mitad del problema — la mitad de detección. Lo que sucede después de que se detecta un incidente — despachar una unidad, rastrear respondedores en el mapa, gestionar el tráfico alrededor del incidente, documentar la respuesta — requiere un conjunto completamente distinto de capacidades que los VMS no incluyen de forma nativa.'
                : 'For public safety organizations, the VMS solves half of the problem — the detection half. What happens after an incident is detected — dispatching a unit, tracking responders on the map, managing traffic around the incident, documenting the response — requires an entirely different set of capabilities that VMS platforms do not include natively.'}
            </p>
          </div>
        </section>

        {/* ── WHAT IS KABATONE? ── */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es KabatOne?' : 'What Is KabatOne?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne es una plataforma unificada de seguridad pública construida específicamente para ciudades, municipios, centros de mando y agencias de respuesta a emergencias. KabatOne integra gestión de video con analítica IA (K-Video), despacho CAD (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario compartido (K-Connect) en una plataforma nativa sobre la plataforma K1.'
                : 'KabatOne is a unified public safety platform purpose-built for cities, municipalities, command centers, and emergency response agencies. KabatOne integrates AI-powered video management (K-Video), CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video sharing (K-Connect) in one native platform on the K1 platform.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos principalmente en Latinoamérica y los Estados Unidos. El diseño central de KabatOne es el flujo de respuesta completo en una sola plataforma: cuando un operador detecta un incidente en K-Safety o K-Video, puede validarlo, crear un evento CAD en K-Dispatch, rastrear las unidades respondedoras en el mapa GIS en tiempo real, adaptar el tráfico con K-Traffic y cerrar el ciclo con documentación de campo — sin salir de la plataforma y sin depender de integraciones de terceros para cada paso.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens primarily in Latin America and the United States. The core design of KabatOne is the complete response workflow in one platform: when an operator detects an incident in K-Safety or K-Video, they can validate it, create a CAD event in K-Dispatch, track responding units on the GIS map in real time, adapt traffic with K-Traffic, and close the loop with field documentation — without leaving the platform and without depending on third-party integrations for every step.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'La diferencia fundamental no es que KabatOne tenga un mejor VMS — es que KabatOne fue diseñado desde el principio para la respuesta a incidentes, no para el monitoreo de activos. El video es el punto de partida, no el producto final.'
                : 'The fundamental difference is not that KabatOne has a better VMS — it is that KabatOne was designed from the ground up for incident response, not asset monitoring. Video is the starting point, not the end product.'}
            </p>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '16px',
            }}>
              {es ? 'VMS Tradicional vs KabatOne: Diferencias Clave' : 'Traditional VMS vs KabatOne: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara las capacidades de un VMS estándar frente a KabatOne en siete dimensiones operativas críticas para organizaciones de seguridad pública.'
                : 'The following table compares a standard VMS against KabatOne across seven operational dimensions critical for public safety organizations.'}
            </p>

            <div style={{ borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
              <div style={{
                display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr',
                background: `${ACCENT}15`, borderBottom: '1px solid var(--border)',
              }}>
                <div style={{ padding: '16px 20px', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.08em', textTransform: 'uppercase', color: ACCENT }}>
                  {es ? 'Dimensión' : 'Dimension'}
                </div>
                <div style={{ padding: '16px 20px', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', borderLeft: '1px solid var(--border)' }}>
                  {es ? 'VMS Tradicional' : 'Traditional VMS'}
                </div>
                <div style={{ padding: '16px 20px', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.08em', textTransform: 'uppercase', color: ACCENT, borderLeft: '1px solid var(--border)' }}>
                  KabatOne
                </div>
              </div>
              {comparisonRows.map((row, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr',
                  borderBottom: i < comparisonRows.length - 1 ? '1px solid var(--border)' : 'none',
                  background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)',
                }}>
                  <div style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 600, color: 'var(--white)' }}>
                    {row.category}
                  </div>
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--dim)', lineHeight: 1.55, borderLeft: '1px solid var(--border)' }}>
                    {row.vms}
                  </div>
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--dim)', lineHeight: 1.55, borderLeft: '1px solid var(--border)' }}>
                    {row.kabatone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE FRAGMENTATION COST ── */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'El Costo Real de Construir sobre un VMS' : 'The Real Cost of Building on Top of a VMS'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Muchos municipios intentan resolver las limitaciones del VMS agregando sistemas de terceros encima: un CAD de un proveedor, una capa GIS de otro, un sistema de gestión de tráfico de un tercero. En papel, parece que la cobertura es completa. En operaciones reales, el resultado es un stack tecnológico fragmentado donde cada sistema tiene su propia interfaz, sus propios datos y su propia lógica de actualización. El operador debe cambiar entre pantallas para gestionar un incidente. El dato del incidente existe en sistemas separados que no se sincronizan en tiempo real. Y el equipo de TI municipal carga con el mantenimiento y actualización de múltiples integraciones a la vez.'
                : 'Many municipalities try to solve VMS limitations by adding third-party systems on top: a CAD from one vendor, a GIS layer from another, a traffic management system from a third. On paper, it looks like full coverage. In real operations, the result is a fragmented technology stack where every system has its own interface, its own data, and its own update cadence. The operator must switch between screens to manage one incident. The incident data exists in separate systems that do not sync in real time. And the municipal IT team carries the maintenance and upgrade burden of multiple integrations simultaneously.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Cada punto de integración es también un punto de falla potencial. Cuando el CAD no se comunica correctamente con el VMS, o cuando la actualización de un sistema rompe la integración con otro, la respuesta operativa se ve afectada. Para centros C5 que gestionan emergencias en tiempo real, esta fragilidad tiene consecuencias directas en la seguridad de los ciudadanos.'
                : 'Each integration point is also a potential failure point. When the CAD does not communicate correctly with the VMS, or when a system update breaks an integration with another, operational response is affected. For C5 command centers managing real-time emergencies, this fragility has direct consequences for citizen safety.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne elimina este costo de integración. Todas las capacidades — video, despacho, GIS, tráfico y campo — son módulos nativos que comparten la misma base de datos de incidentes, el mismo mapa operativo y el mismo contexto de usuario. Cuando un operador crea un evento CAD en K-Dispatch, el incidente aparece automáticamente en K-Safety. Cuando una unidad es despachada, su trayectoria aparece en el mapa. No hay integración que mantener porque no hay separación.'
                : 'KabatOne eliminates this integration cost. All capabilities — video, dispatch, GIS, traffic, and field — are native modules that share the same incident database, the same operational map, and the same user context. When an operator creates a CAD event in K-Dispatch, the incident automatically appears in K-Safety. When a unit is dispatched, its route appears on the map. There is no integration to maintain because there is no separation.'}
            </p>
          </div>
        </section>

        {/* ── WORKS WITH EXISTING CAMERAS ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'KabatOne Funciona con las Cámaras que Ya Tienes' : 'KabatOne Works with the Cameras You Already Have'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Adoptar KabatOne no requiere reemplazar la infraestructura de cámaras existente. K-Video soporta ONVIF, RTSP y protocolos IP estándar de la industria, lo que permite conectar cámaras de cualquier fabricante — Axis, Hanwha, Bosch, Dahua, Hikvision, y otros — directamente a la plataforma. Las ciudades que han invertido en redes de cámaras sobre cualquier VMS pueden incorporar KabatOne como la capa de coordinación de respuesta sin perder esa inversión.'
                : 'Adopting KabatOne does not require replacing existing camera infrastructure. K-Video supports ONVIF, RTSP, and standard industry IP protocols, which allows connecting cameras from any manufacturer — Axis, Hanwha, Bosch, Dahua, Hikvision, and others — directly to the platform. Cities that have invested in camera networks on any VMS can bring KabatOne in as the response coordination layer without abandoning that investment.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'El objetivo no es reemplazar el hardware de cámaras — es reemplazar la fragmentación operativa. Las cámaras son sensores. KabatOne es el sistema operativo que convierte lo que esos sensores detectan en acción coordinada: despacho, seguimiento, control de tráfico y cierre de incidente.'
                : 'The goal is not to replace camera hardware — it is to replace operational fragmentation. Cameras are sensors. KabatOne is the operating system that turns what those sensors detect into coordinated action: dispatch, tracking, traffic control, and incident closure.'}
            </p>
          </div>
        </section>

        {/* ── MODULE LINKS ── */}
        <section style={{ padding: '64px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '10px',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '16px',
            }}>
              {es ? 'Módulos de KabatOne' : 'KabatOne Modules'}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {[
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'GIS y conciencia situacional' : 'GIS & situational awareness', color: '#06b6d4' },
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD de emergencias' : 'Emergency CAD dispatch', color: '#ef4444' },
                { href: '/k-video', label: 'K-Video', desc: es ? 'Gestión de video con IA' : 'AI video management', color: '#a855f7' },
                { href: '/k-traffic', label: 'K-Traffic', desc: es ? 'Gestión de tráfico inteligente' : 'Intelligent traffic management', color: '#06b6d4' },
                { href: '/k-connect', label: 'K-Connect', desc: es ? 'Video comunitario' : 'Community video', color: '#22c55e' },
              ].map((mod) => (
                <Link key={mod.href} href={mod.href} style={{
                  display: 'flex', flexDirection: 'column', gap: '2px',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                  borderRadius: '8px', padding: '12px 16px', textDecoration: 'none',
                  minWidth: '140px', flex: '1 1 140px',
                }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: mod.color }}>{mod.label}</span>
                  <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{mod.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '16px',
            }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </p>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '40px',
            }}>
              {es ? 'VMS vs Plataforma de Seguridad Pública: Preguntas y Respuestas' : 'VMS vs Public Safety Platform: Questions & Answers'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderRadius: '12px', padding: '24px 28px',
                }}>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '18px', color: 'var(--white)', marginBottom: '12px', lineHeight: 1.3,
                  }}>
                    {faq.question}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED ── */}
        <section style={{ padding: '64px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '24px',
            }}>
              {es ? 'Comparaciones Relacionadas' : 'Related Comparisons'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link href="/vs/genetec" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Genetec Security Center' : 'KabatOne vs Genetec Security Center'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/vs/milestone" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Milestone XProtect' : 'KabatOne vs Milestone XProtect'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/psim-vs-unified-platform" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'PSIM vs Plataforma Unificada — ¿Cuál Es la Diferencia?' : 'PSIM vs Unified Platform — What\'s the Difference?'}</span>
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
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '12px', marginTop: '12px' }}>
              <span style={{ fontFamily: 'DM Mono, monospace', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {es ? 'Integraciones:' : 'Integrations:'}
              </span>
              {[
                { href: '/integrations/lpr', label: 'LPR' },
                { href: '/integrations/facial-recognition', label: es ? 'Reconocimiento Facial' : 'Facial Recognition' },
                { href: '/integrations/access-control', label: es ? 'Control de Acceso' : 'Access Control' },
                { href: '/integrations/sensor-fusion', label: es ? 'Fusion de Sensores' : 'Sensor Fusion' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ color: '#06b6d4', textDecoration: 'none', borderBottom: '1px solid rgba(6,182,212,0.25)' }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={es ? '¿Listo para Ir Más Allá del Monitoreo?' : 'Ready to Go Beyond Monitoring?'}
          subtitle={es
            ? 'Descubre cómo KabatOne conecta video, despacho y GIS en un solo flujo de respuesta. Solicita una demo personalizada.'
            : 'See how KabatOne connects video, dispatch, and GIS in one response workflow. Request a personalized demo.'}
        />

        <Footer es={es} />

        <style>{`
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
          @media (max-width: 768px) {
            section > div > div[style*="grid-template-columns: 1.2fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
