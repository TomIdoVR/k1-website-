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
  return generatePageMetadata('whatIsVideoManagementSoftware', locale)
}

export default async function WhatIsVideoManagementSoftwarePage({
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
          question: '¿Qué es el software de gestión de video (VMS)?',
          answer:
            'El software de gestión de video (VMS) es una plataforma que agrega, graba, organiza y reproduce feeds de cámaras de videovigilancia. Los sistemas VMS modernos para seguridad pública agregan analítica de inteligencia artificial — detección de objetos, reconocimiento de placas vehiculares (LPR), análisis de comportamiento — directamente al flujo de video, convirtiendo las cámaras de dispositivos pasivos de grabación en sensores activos de detección.',
        },
        {
          question: '¿Cuántas cámaras puede gestionar un VMS?',
          answer:
            'Los sistemas VMS de nivel empresarial gestionan desde cientos hasta decenas de miles de cámaras simultáneamente. KabatOne K-Video, por ejemplo, agrega cámaras de cualquier fabricante y protocolo (ONVIF, RTSP, propietarios) en una sola vista con capacidad de búsqueda, sin límite práctico de dispositivos.',
        },
        {
          question: '¿Un VMS funciona con cámaras de cualquier marca?',
          answer:
            'Los VMS modernos son agnósticos al fabricante de cámaras y soportan protocolos estándar como ONVIF y RTSP, además de protocolos propietarios de los principales fabricantes. Esto elimina la dependencia de un solo proveedor y permite a las agencias agregar cámaras existentes sin reemplazar hardware.',
        },
        {
          question: '¿Cuál es la diferencia entre VMS y NVR?',
          answer:
            'Un NVR (Network Video Recorder) es un dispositivo de hardware que graba video de un conjunto limitado de cámaras. Un VMS es una plataforma de software que gestiona miles de cámaras de múltiples fabricantes, agrega analítica de IA, permite búsqueda forense y se integra con otros sistemas operativos como despacho CAD y GIS. El NVR es un grabador; el VMS es un sistema de inteligencia de video.',
        },
        {
          question: '¿Un VMS puede integrarse con despacho y GIS?',
          answer:
            'Sí. Los VMS avanzados se integran con despacho CAD para mostrar automáticamente cámaras cercanas al incidente, con GIS para visualizar la cobertura de cámaras en el mapa operativo, y con sistemas de campo para compartir video en tiempo real con unidades en terreno. KabatOne K-Video opera nativamente con K-Dispatch y K-Safety en una sola plataforma unificada.',
        },
        {
          question: '¿Qué analítica de IA incluye un VMS moderno?',
          answer:
            'Los VMS de última generación incluyen detección y clasificación de objetos (personas, vehículos, armas), reconocimiento de placas vehiculares (LPR/ALPR), reconocimiento facial, análisis de comportamiento (merodeo, intrusión perimetral, abandono de objeto), conteo de personas, mapas de calor y detección de audio (disparos, gritos). Estas capacidades transforman el video de registro pasivo a detección activa en tiempo real.',
        },
      ]
    : [
        {
          question: 'What is video management software (VMS)?',
          answer:
            'Video management software (VMS) is a platform that aggregates, records, organizes, and plays back video surveillance camera feeds. Modern VMS systems for public safety add artificial intelligence analytics — object detection, license plate recognition (LPR), behavioral analysis — directly to the video pipeline, turning cameras from passive recording devices into active detection sensors.',
        },
        {
          question: 'How many cameras can a VMS manage?',
          answer:
            'Enterprise-grade VMS systems manage from hundreds to tens of thousands of cameras simultaneously. KabatOne K-Video, for example, aggregates cameras from any manufacturer and protocol (ONVIF, RTSP, proprietary) into a single searchable view, with no practical device limit.',
        },
        {
          question: 'Does a VMS work with cameras from any brand?',
          answer:
            'Modern VMS platforms are camera-manufacturer agnostic and support standard protocols like ONVIF and RTSP, plus proprietary protocols from major manufacturers. This eliminates single-vendor lock-in and allows agencies to aggregate existing cameras without hardware replacement.',
        },
        {
          question: 'What is the difference between VMS and NVR?',
          answer:
            'An NVR (Network Video Recorder) is a hardware device that records video from a limited set of cameras. A VMS is a software platform that manages thousands of cameras from multiple manufacturers, adds AI analytics, enables forensic search, and integrates with other operational systems like CAD dispatch and GIS. The NVR is a recorder; the VMS is a video intelligence system.',
        },
        {
          question: 'Can a VMS integrate with dispatch and GIS?',
          answer:
            'Yes. Advanced VMS platforms integrate with CAD dispatch to automatically display nearby cameras at an incident, with GIS to visualize camera coverage on the operational map, and with field systems to share real-time video with units on the ground. KabatOne K-Video operates natively with K-Dispatch and K-Safety in a single unified platform.',
        },
        {
          question: 'What AI analytics does a modern VMS include?',
          answer:
            'State-of-the-art VMS systems include object detection and classification (people, vehicles, weapons), license plate recognition (LPR/ALPR), facial recognition, behavioral analysis (loitering, perimeter intrusion, abandoned object), people counting, heat maps, and audio detection (gunshots, screaming). These capabilities transform video from passive recording to active real-time detection.',
        },
      ]

  /* ── Breadcrumb items ── */
  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    {
      name: es ? '¿Qué Es el Software de Gestión de Video (VMS)?' : 'What Is Video Management Software (VMS)?',
      url: es ? 'https://kabatone.com/es/resources/what-is-video-management-software/' : 'https://kabatone.com/resources/what-is-video-management-software/',
    },
  ]

  /* ── Shared styles ── */
  const sectionStyle: React.CSSProperties = { borderTop: '1px solid var(--border)', padding: '72px 32px' }
  const containerStyle: React.CSSProperties = { maxWidth: '820px', margin: '0 auto' }
  const h2Style: React.CSSProperties = { fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '20px', marginTop: '0' }
  const h3Style: React.CSSProperties = { fontSize: '20px', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.03em', lineHeight: 1.2, marginBottom: '12px', marginTop: '40px' }
  const pStyle: React.CSSProperties = { fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.8, marginBottom: '20px' }

  return (
    <>
      <Nav />

      {/* ── Structured Data ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        articleSchema(
          es ? '¿Qué Es el Software de Gestión de Video (VMS)? Guía para Seguridad Pública' : 'What Is Video Management Software (VMS)? A Guide for Public Safety',
          es ? 'El software VMS agrega cámaras de cualquier fabricante, añade analítica de IA y se integra con despacho y GIS. Guía completa para agencias de seguridad pública.' : 'VMS software aggregates cameras from any manufacturer, adds AI analytics, and integrates with dispatch and GIS. Complete guide for public safety agencies.',
          es ? 'https://kabatone.com/es/resources/what-is-video-management-software/' : 'https://kabatone.com/resources/what-is-video-management-software/',
          '2026-03-26'
        )
      ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── BREADCRUMB ── */}
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '24px 32px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '12px', color: 'var(--muted)', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/resources" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Recursos' : 'Resources'}</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>{es ? '¿Qué Es el Software VMS?' : 'What Is Video Management Software?'}</span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Guía de Referencia' : 'Reference Guide'}
            </p>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '24px' }}>
              {es ? '¿Qué Es el Software de Gestión de Video?' : 'What Is Video Management Software?'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'El software de gestión de video (VMS) es una plataforma que agrega feeds de cámaras de videovigilancia de cualquier fabricante y protocolo en una sola interfaz unificada. Graba, organiza, reproduce y analiza video de forma centralizada. Los sistemas VMS modernos para seguridad pública van más allá de la simple grabación: agregan analítica de inteligencia artificial — detección de objetos, reconocimiento de placas vehiculares (LPR), análisis de comportamiento — directamente al flujo de video. Esto transforma las cámaras de dispositivos pasivos de registro a sensores activos de detección que alertan a los operadores en tiempo real cuando ocurre un evento relevante.'
                : 'Video management software (VMS) is a platform that aggregates video surveillance camera feeds from any manufacturer and protocol into a single unified interface. It records, organizes, plays back, and analyzes video centrally. Modern VMS systems for public safety go beyond simple recording: they add artificial intelligence analytics — object detection, license plate recognition (LPR), behavioral analysis — directly to the video pipeline. This transforms cameras from passive recording devices into active detection sensors that alert operators in real time when a relevant event occurs.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 1: Core Capabilities ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? '¿Qué Hace un VMS?' : 'What Does a VMS Do?'}</h2>
            <p style={pStyle}>
              {es
                ? 'Un sistema VMS moderno cubre cinco funciones operativas que las soluciones heredadas de CCTV no pueden ofrecer como una sola plataforma.'
                : 'A modern VMS covers five operational functions that legacy CCTV solutions cannot deliver as a single platform.'}
            </p>

            <h3 style={h3Style}>{es ? 'Agregación de Cámaras Multi-Fabricante' : 'Multi-Manufacturer Camera Aggregation'}</h3>
            <p style={pStyle}>
              {es
                ? 'Un VMS agrega cámaras de cualquier fabricante — Axis, Hikvision, Dahua, Bosch, Hanwha, Pelco — usando protocolos estándar como ONVIF y RTSP, además de protocolos propietarios. Esto permite a las agencias de seguridad pública desplegar y mantener cámaras de múltiples marcas sin estar atados a un solo proveedor. KabatOne K-Video soporta cámaras de cualquier marca en una sola vista con capacidad de búsqueda.'
                : 'A VMS aggregates cameras from any manufacturer — Axis, Hikvision, Dahua, Bosch, Hanwha, Pelco — using standard protocols like ONVIF and RTSP, plus proprietary protocols. This allows public safety agencies to deploy and maintain cameras from multiple brands without single-vendor lock-in. KabatOne K-Video supports cameras from any brand in a single searchable view.'}
            </p>

            <h3 style={h3Style}>{es ? 'Grabación y Almacenamiento' : 'Recording and Storage'}</h3>
            <p style={pStyle}>
              {es
                ? 'El VMS gestiona la grabación continua, programada o por detección de movimiento, y administra el almacenamiento en disco, NAS o nube. Los sistemas avanzados ofrecen retención configurable por cámara — 30 días para cámaras generales, 90 días para zonas críticas — y eliminación automática para cumplir con políticas de retención de datos.'
                : 'The VMS manages continuous, scheduled, or motion-triggered recording and administers storage on disk, NAS, or cloud. Advanced systems offer configurable retention per camera — 30 days for general cameras, 90 days for critical zones — and automatic deletion to comply with data retention policies.'}
            </p>

            <h3 style={h3Style}>{es ? 'Analítica de IA en Tiempo Real' : 'Real-Time AI Analytics'}</h3>
            <p style={pStyle}>
              {es
                ? 'Los VMS de última generación ejecutan modelos de IA directamente sobre el flujo de video: detección y clasificación de objetos (personas, vehículos, armas), reconocimiento de placas vehiculares (LPR/ALPR), reconocimiento facial, análisis de comportamiento (merodeo, intrusión perimetral, abandono de objeto), conteo de personas y mapas de calor. Cada detección genera una alerta automática al operador con la imagen del evento y la ubicación de la cámara en el mapa.'
                : 'State-of-the-art VMS systems run AI models directly on the video stream: object detection and classification (people, vehicles, weapons), license plate recognition (LPR/ALPR), facial recognition, behavioral analysis (loitering, perimeter intrusion, abandoned object), people counting, and heat maps. Each detection generates an automatic alert to the operator with the event image and the camera location on the map.'}
            </p>

            <h3 style={h3Style}>{es ? 'Búsqueda Forense' : 'Forensic Search'}</h3>
            <p style={pStyle}>
              {es
                ? 'Cuando ocurre un incidente, los investigadores necesitan encontrar video relevante entre miles de horas de grabación. Un VMS moderno permite búsqueda forense por atributos: "vehículo rojo entre las 14:00 y 16:00 en la zona norte", "persona con mochila en la entrada principal ayer". Esta capacidad reduce el tiempo de investigación de horas a minutos.'
                : 'When an incident occurs, investigators need to find relevant video across thousands of hours of recordings. A modern VMS enables forensic search by attributes: "red vehicle between 2pm and 4pm in the north zone", "person with backpack at the main entrance yesterday". This capability reduces investigation time from hours to minutes.'}
            </p>

            <h3 style={h3Style}>{es ? 'Integración con Sistemas Operativos' : 'Operational System Integration'}</h3>
            <p style={pStyle}>
              {es
                ? 'El VMS no opera de forma aislada. Se integra con despacho CAD para mostrar automáticamente cámaras cercanas al incidente, con GIS para visualizar la cobertura de cámaras en el mapa operativo, con control de acceso para verificar visualmente las alertas de acceso, y con aplicaciones de campo para compartir video en tiempo real con unidades en terreno.'
                : 'The VMS does not operate in isolation. It integrates with CAD dispatch to automatically display nearby cameras at an incident, with GIS to visualize camera coverage on the operational map, with access control to visually verify access alerts, and with field apps to share real-time video with units on the ground.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 2: VMS vs NVR vs Legacy CCTV ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'VMS vs NVR vs CCTV Tradicional' : 'VMS vs NVR vs Legacy CCTV'}</h2>
            <p style={pStyle}>
              {es
                ? 'Las agencias de seguridad pública a menudo confunden tres tecnologías de video que cumplen roles muy diferentes.'
                : 'Public safety agencies often confuse three video technologies that serve very different roles.'}
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', marginBottom: '24px' }}>
                <thead>
                  <tr style={{ background: '#0b1628' }}>
                    {(es ? ['', 'CCTV Tradicional', 'NVR', 'VMS Moderno'] : ['', 'Legacy CCTV', 'NVR', 'Modern VMS']).map((h, i) => (
                      <th key={i} style={{ padding: '12px 16px', textAlign: 'left', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: i === 3 ? ACCENT : 'var(--dim)', borderBottom: '1px solid var(--border)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(es
                    ? [
                        ['Cámaras soportadas', '4–16 analógicas', '8–64 IP', 'Miles, cualquier marca'],
                        ['Analítica de IA', 'No', 'Básica', 'Completa (LPR, facial, comportamiento)'],
                        ['Búsqueda forense', 'Manual', 'Por fecha/hora', 'Por atributos de IA'],
                        ['Integración CAD/GIS', 'No', 'No', 'Nativa o API'],
                        ['Escalabilidad', 'Limitada por hardware', 'Limitada por hardware', 'Ilimitada por software'],
                        ['Costo por cámara', 'Bajo', 'Medio', 'Bajo a medio (software)'],
                      ]
                    : [
                        ['Cameras supported', '4–16 analog', '8–64 IP', 'Thousands, any brand'],
                        ['AI analytics', 'No', 'Basic', 'Full (LPR, facial, behavioral)'],
                        ['Forensic search', 'Manual', 'By date/time', 'By AI attributes'],
                        ['CAD/GIS integration', 'No', 'No', 'Native or API'],
                        ['Scalability', 'Hardware-limited', 'Hardware-limited', 'Software-unlimited'],
                        ['Cost per camera', 'Low', 'Medium', 'Low to medium (software)'],
                      ]
                  ).map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                      {row.map((cell, j) => (
                        <td key={j} style={{ padding: '10px 16px', color: j === 0 ? 'var(--white)' : j === 3 ? '#93c5fd' : 'var(--dim)', fontWeight: j === 0 ? 600 : 300, borderBottom: '1px solid var(--border)' }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: VMS vs Unified Platform ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? '¿Cuándo un VMS Solo No Es Suficiente?' : 'When Is a VMS Alone Not Enough?'}</h2>
            <p style={pStyle}>
              {es
                ? 'Un VMS resuelve la gestión de video, pero el video es solo una fuente de información durante un incidente. El comandante en el centro también necesita ver el estado de las unidades despachadas, la posición exacta del incidente en el mapa GIS, el estado del tráfico en las rutas de acceso y las alertas de otros sensores. Un VMS aislado no proporciona esta visión integrada.'
                : 'A VMS solves video management, but video is only one information source during an incident. The commander at the center also needs to see the status of dispatched units, the exact incident position on the GIS map, traffic status on access routes, and alerts from other sensors. A standalone VMS does not provide this integrated view.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'Las plataformas unificadas de seguridad pública como KabatOne integran VMS, despacho CAD, GIS y operaciones de campo en un solo entorno. Cuando un operador crea un incidente en K-Dispatch, las cámaras cercanas aparecen automáticamente en K-Video, la posición se marca en el mapa de K-Safety y las unidades reciben la alerta en su dispositivo móvil — todo sin cambiar de sistema ni depender de integración middleware.'
                : 'Unified public safety platforms like KabatOne integrate VMS, CAD dispatch, GIS, and field operations into a single environment. When an operator creates an incident in K-Dispatch, nearby cameras automatically appear in K-Video, the position is marked on the K-Safety map, and units receive the alert on their mobile device — all without switching systems or relying on middleware integration.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 4: What to Look For ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? '¿Qué Buscar en un VMS para Seguridad Pública?' : 'What to Look for in a VMS for Public Safety?'}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
              {(es
                ? [
                    { title: 'Soporte Multi-Protocolo', desc: 'ONVIF, RTSP y protocolos propietarios. Sin dependencia de un solo fabricante de cámaras.' },
                    { title: 'Analítica de IA Integrada', desc: 'LPR, reconocimiento facial, detección de objetos y análisis de comportamiento ejecutados directamente sobre el flujo de video.' },
                    { title: 'Búsqueda Forense por Atributos', desc: 'Capacidad de buscar video por color de vehículo, tipo de objeto, placa vehicular o rango horario — no solo reproducción lineal.' },
                    { title: 'Integración con CAD y GIS', desc: 'Conexión nativa con despacho y mapa operativo. Las cámaras deben aparecer automáticamente al crear un incidente.' },
                    { title: 'Escalabilidad sin Hardware', desc: 'Arquitectura de software que escala de 100 a 10,000 cámaras sin reemplazar infraestructura central.' },
                    { title: 'Video en Campo para Unidades', desc: 'Las unidades en terreno deben ver video en vivo desde su dispositivo móvil durante la respuesta a un incidente.' },
                  ]
                : [
                    { title: 'Multi-Protocol Support', desc: 'ONVIF, RTSP, and proprietary protocols. No single-vendor camera lock-in.' },
                    { title: 'Integrated AI Analytics', desc: 'LPR, facial recognition, object detection, and behavioral analysis running directly on the video stream.' },
                    { title: 'Attribute-Based Forensic Search', desc: 'Ability to search video by vehicle color, object type, license plate, or time range — not just linear playback.' },
                    { title: 'CAD and GIS Integration', desc: 'Native connection to dispatch and operational map. Cameras must auto-appear when an incident is created.' },
                    { title: 'Hardware-Free Scalability', desc: 'Software architecture that scales from 100 to 10,000 cameras without replacing core infrastructure.' },
                    { title: 'Field Video for Units', desc: 'Field units must see live video from their mobile device during incident response.' },
                  ]
              ).map((item, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px' }}>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '16px', letterSpacing: '0.03em', textTransform: 'uppercase', marginBottom: '10px', marginTop: '0' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>{item.desc}</p>
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
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>KabatOne K-Video</h2>
            <p style={{ ...pStyle, marginBottom: '28px' }}>
              {es
                ? 'K-Video es el módulo VMS de KabatOne. Opera nativamente con K-Dispatch (despacho CAD), K-Safety (GIS y conciencia situacional) y K-Traffic (gestión de tráfico) en una sola plataforma unificada.'
                : 'K-Video is KabatOne\'s VMS module. It operates natively with K-Dispatch (CAD dispatch), K-Safety (GIS and situational awareness), and K-Traffic (traffic management) in a single unified platform.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-video', label: 'K-Video', desc: es ? 'Gestión de Video' : 'Video Management' },
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD Dispatch' },
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'Conciencia Situacional' : 'Situational Awareness' },
                { href: '/k-traffic', label: 'K-Traffic', desc: es ? 'Gestión de Tráfico' : 'Traffic Management' },
              ].map((p) => (
                <Link key={p.href} href={p.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '6px', padding: '10px 16px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: ACCENT }} />
                  {p.label}
                  <span style={{ color: 'var(--muted)', fontSize: '10px', letterSpacing: '0.1em' }}>{p.desc}</span>
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
              {es ? 'Preguntas Comunes sobre Software VMS' : 'Common Questions About VMS Software'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px 28px' }}>
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
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, marginBottom: '24px' }}>
              {es ? 'Artículos Relacionados' : 'Related Articles'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { href: '/resources/what-is-cad-dispatch-software', en: 'What Is CAD Dispatch Software?', es: '¿Qué es el software CAD de despacho?' },
                { href: '/resources/what-is-a-public-safety-platform', en: 'What Is a Public Safety Platform?', es: '¿Qué es una plataforma de seguridad pública?' },
                { href: '/resources/what-is-a-real-time-crime-center', en: 'What Is a Real-Time Crime Center (RTCC)?', es: '¿Qué es un centro de crimen en tiempo real (RTCC)?' },
                { href: '/resources/ai-in-public-safety', en: 'AI in Public Safety: A Guide for Cities', es: 'IA en Seguridad Pública: Guía para Ciudades' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderRadius: '8px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--dim)', fontSize: '15px' }}>
                  <span>{es ? link.es : link.en}</span>
                  <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={es ? 'Ve K-Video en Acción en tu Ciudad' : 'See K-Video in Action for Your City'}
          subtitle={es ? 'KabatOne K-Video agrega cámaras de cualquier marca con analítica de IA en una sola plataforma. Solicita una demostración con datos reales.' : 'KabatOne K-Video aggregates cameras from any brand with AI analytics in one unified platform. Request a live demo with real data.'}
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 768px) {
            section > div > div[style*="grid-template-columns: repeat(2"] { grid-template-columns: 1fr !important; }
            table { font-size: 12px !important; }
          }
          @media (max-width: 640px) {
            section { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </div>
    </>
  )
}
