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
  return generatePageMetadata('cctvVideoAnalytics', locale)
}

export default async function CctvVideoAnalyticsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#a855f7'

  const faqs = es
    ? [
        {
          question: '¿Qué es la analítica de video CCTV?',
          answer:
            'La analítica de video CCTV es la aplicación de procesamiento con inteligencia artificial sobre las cámaras de circuito cerrado (CCTV) existentes de una ciudad o instalación — para detectar automáticamente personas, vehículos, intrusiones y comportamientos sin monitoreo humano continuo. La clave es que no requiere reemplazar las cámaras: la analítica se ejecuta sobre el flujo de video de la infraestructura CCTV que ya está instalada.',
        },
        {
          question: '¿Puedo añadir analítica de IA a mis cámaras CCTV existentes?',
          answer:
            'Sí. La analítica de video moderna es agnóstica al hardware: se aplica sobre el flujo de las cámaras CCTV/IP existentes de cualquier fabricante (Hikvision, Axis, Dahua, Bosch, Hanwha, etc.) sin sustituir la infraestructura. El procesamiento puede correr en un servidor central con GPU (analítica en servidor) o en el borde mediante un chip de IA. KabatOne agrega la analítica de todas tus cámaras CCTV en una sola interfaz, sin importar la marca ni la antigüedad.',
        },
        {
          question: '¿Cuál es la diferencia entre analítica CCTV en el borde y en servidor?',
          answer:
            'La analítica en el borde (edge) procesa el video en la propia cámara o en un dispositivo cercano — baja latencia y menor uso de ancho de banda, pero limitada por el procesador del dispositivo. La analítica en servidor centraliza el procesamiento de muchas cámaras CCTV en un servidor o nube potente, permitiendo modelos de IA más complejos y correlación entre cámaras. Para despliegues CCTV a escala urbana, KabatOne combina ambas: edge para alertas inmediatas y servidor para análisis profundo y correlación.',
        },
        {
          question: '¿Qué puede detectar la analítica de video de vigilancia?',
          answer:
            'La analítica de video de vigilancia (surveillance video analytics) detecta: intrusión perimetral y cruce de líneas virtuales; conteo y aforo de personas; reconocimiento de placas (LPR) y de vehículos; comportamientos anómalos como merodeo, aglomeraciones o movimiento en contra del flujo; objetos abandonados; y eventos específicos como detección de disparos o humo. También permite búsqueda forense retroactiva por atributos (color de ropa, tipo de vehículo) en horas de grabación CCTV.',
        },
        {
          question: '¿La analítica de video CCTV reemplaza a mi VMS?',
          answer:
            'No — la complementa. El VMS (software de gestión de video) gestiona la grabación, el almacenamiento y la reproducción de las cámaras CCTV; la analítica de video añade la capa de detección inteligente sobre ese flujo. Una plataforma unificada como KabatOne integra ambas: gestiona las cámaras CCTV como un VMS y ejecuta analítica de IA sobre ellas, enviando solo los eventos relevantes al mapa operativo del centro de mando.',
        },
        {
          question: '¿Qué infraestructura necesita la analítica CCTV a escala municipal?',
          answer:
            'Para un despliegue de 200–500 cámaras CCTV con analítica de video en tiempo real se necesita: servidores con GPU o infraestructura cloud con latencia controlada; red con ancho de banda suficiente (2–4 Mbps por cámara a 1080p); almacenamiento para retención (30–90 días según normativa); y una plataforma como KabatOne que unifique la analítica de todas las cámaras con el mapa operativo. Al aprovechar el CCTV existente, el costo se concentra en el procesamiento, no en reemplazar cámaras.',
        },
        {
          question: '¿La analítica de video CCTV funciona con cámaras analógicas antiguas?',
          answer:
            'Sí, a través de un codificador (encoder) que digitaliza la señal analógica, o de un grabador (DVR/NVR) compatible. Una vez que el flujo está disponible como video IP, la analítica de IA puede procesarlo igual que el de una cámara IP moderna — aunque la precisión dependerá de la resolución y calidad de imagen de la cámara analógica. Esto permite modernizar despliegues CCTV heredados sin reemplazar todo el parque de cámaras.',
        },
      ]
    : [
        {
          question: 'What is CCTV video analytics?',
          answer:
            'CCTV video analytics is the application of AI processing to a city or facility\'s existing closed-circuit television (CCTV) cameras — to automatically detect people, vehicles, intrusions, and behaviors without continuous human monitoring. The key point is that it does not require replacing the cameras: analytics runs on the video stream from the CCTV infrastructure that is already installed.',
        },
        {
          question: 'Can I add AI analytics to my existing CCTV cameras?',
          answer:
            'Yes. Modern video analytics is hardware-agnostic: it applies to the stream from existing CCTV/IP cameras of any manufacturer (Hikvision, Axis, Dahua, Bosch, Hanwha, etc.) without replacing the infrastructure. Processing can run on a central GPU server (server-based analytics) or at the edge via an AI chip. KabatOne aggregates analytics from all your CCTV cameras into a single interface, regardless of brand or age.',
        },
        {
          question: 'What is the difference between edge and server-based CCTV analytics?',
          answer:
            'Edge analytics processes video on the camera itself or a nearby device — low latency and lower bandwidth, but limited by the device\'s processor. Server-based analytics centralizes processing of many CCTV cameras on a powerful server or cloud, enabling more complex AI models and cross-camera correlation. For city-scale CCTV deployments, KabatOne combines both: edge for immediate alerts and server for deep analysis and correlation.',
        },
        {
          question: 'What can surveillance video analytics detect?',
          answer:
            'Surveillance video analytics detects: perimeter intrusion and virtual line crossing; people counting and occupancy; license plate (LPR) and vehicle recognition; anomalous behaviors such as loitering, crowding, or wrong-way movement; abandoned objects; and specific events like gunshot or smoke detection. It also enables retroactive forensic search by attributes (clothing color, vehicle type) across hours of CCTV recordings.',
        },
        {
          question: 'Does CCTV video analytics replace my VMS?',
          answer:
            'No — it complements it. A VMS (video management software) handles recording, storage, and playback of CCTV cameras; video analytics adds the intelligent-detection layer on top of that stream. A unified platform like KabatOne integrates both: it manages CCTV cameras like a VMS and runs AI analytics on them, pushing only the relevant events to the command center operational map.',
        },
        {
          question: 'What infrastructure does CCTV analytics need at municipal scale?',
          answer:
            'For a 200–500 CCTV camera deployment with real-time video analytics you need: GPU servers or cloud infrastructure with controlled latency; a network with sufficient bandwidth (2–4 Mbps per camera at 1080p); storage for retention (30–90 days per regulation); and a platform like KabatOne that unifies analytics from all cameras with the operational map. By leveraging existing CCTV, cost concentrates on processing, not on replacing cameras.',
        },
        {
          question: 'Does CCTV video analytics work with old analog cameras?',
          answer:
            'Yes, via an encoder that digitizes the analog signal, or a compatible DVR/NVR. Once the stream is available as IP video, AI analytics can process it just like a modern IP camera — though accuracy will depend on the analog camera\'s resolution and image quality. This lets you modernize legacy CCTV deployments without replacing the entire camera fleet.',
        },
      ]

  const faqSchema = faqPageSchema(faqs)
  const artSchema = articleSchema(
    es ? 'Analítica de Video CCTV: IA para Cámaras de Vigilancia Existentes' : 'CCTV Video Analytics: AI for Existing Surveillance Cameras',
    es
      ? 'Guía sobre analítica de video CCTV: cómo añadir detección con IA a las cámaras de circuito cerrado existentes, analítica en el borde vs servidor, qué detecta la vigilancia inteligente, y despliegue a escala municipal.'
      : 'Guide to CCTV video analytics: how to add AI detection to existing closed-circuit cameras, edge vs server analytics, what surveillance analytics detects, and municipal-scale deployment.',
    es
      ? 'https://kabatone.com/es/resources/cctv-video-analytics'
      : 'https://kabatone.com/resources/cctv-video-analytics',
    '2026-07-06'
  )
  const bcSchema = breadcrumbSchema([
    { name: 'Home', url: 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: 'https://kabatone.com/resources' },
    {
      name: es ? 'Analítica de Video CCTV' : 'CCTV Video Analytics',
      url: es
        ? 'https://kabatone.com/es/resources/cctv-video-analytics'
        : 'https://kabatone.com/resources/cctv-video-analytics',
    },
  ])

  const detections = es
    ? [
        { icon: '🚧', title: 'Intrusión perimetral', desc: 'Alerta cuando una persona o vehículo cruza una línea virtual o entra en una zona restringida del CCTV.' },
        { icon: '🚗', title: 'LPR y reconocimiento de vehículos', desc: 'Lectura de placas y clasificación de vehículos sobre las cámaras CCTV existentes.' },
        { icon: '👥', title: 'Conteo y aforo', desc: 'Personas por zona y aforo en tiempo real para gestión de multitudes.' },
        { icon: '🏃', title: 'Comportamiento anómalo', desc: 'Merodeo, aglomeraciones, movimiento en contra del flujo y comportamiento agresivo.' },
        { icon: '📦', title: 'Objetos abandonados', desc: 'Equipaje u objetos sin dueño que permanecen más allá de un umbral configurable.' },
        { icon: '🔍', title: 'Búsqueda forense', desc: 'Búsqueda retroactiva en horas de grabación CCTV por color, tipo de vehículo o dirección.' },
      ]
    : [
        { icon: '🚧', title: 'Perimeter intrusion', desc: 'Alerts when a person or vehicle crosses a virtual line or enters a restricted CCTV zone.' },
        { icon: '🚗', title: 'LPR & vehicle recognition', desc: 'Plate reading and vehicle classification on existing CCTV cameras.' },
        { icon: '👥', title: 'Counting & occupancy', desc: 'People per zone and real-time occupancy for crowd management.' },
        { icon: '🏃', title: 'Anomalous behavior', desc: 'Loitering, crowding, wrong-way movement, and aggressive behavior.' },
        { icon: '📦', title: 'Abandoned objects', desc: 'Luggage or unattended objects that remain beyond a configurable threshold.' },
        { icon: '🔍', title: 'Forensic search', desc: 'Retroactive search across hours of CCTV footage by color, vehicle type, or direction.' },
      ]

  const deployment = es
    ? {
        headers: ['Enfoque', 'Analítica en el Borde (Edge)', 'Analítica en Servidor'],
        rows: [
          ['Ubicación del procesamiento', 'En la cámara / dispositivo cercano', 'Servidor o nube central'],
          ['Latencia', 'Muy baja', 'Baja–media'],
          ['Uso de ancho de banda', 'Bajo', 'Alto (transmite video)'],
          ['Complejidad del modelo IA', 'Limitada por el chip', 'Alta (GPU potente)'],
          ['Correlación entre cámaras', 'No', 'Sí'],
          ['Ideal para', 'Alertas inmediatas', 'Análisis profundo urbano'],
        ],
      }
    : {
        headers: ['Approach', 'Edge Analytics', 'Server-Based Analytics'],
        rows: [
          ['Processing location', 'On camera / nearby device', 'Central server or cloud'],
          ['Latency', 'Very low', 'Low–medium'],
          ['Bandwidth use', 'Low', 'High (streams video)'],
          ['AI model complexity', 'Limited by chip', 'High (powerful GPU)'],
          ['Cross-camera correlation', 'No', 'Yes'],
          ['Best for', 'Immediate alerts', 'Deep city-scale analysis'],
        ],
      }

  const sectionH2: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '16px' }
  const para: React.CSSProperties = { fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '16px' }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(artSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />

      <Nav />

      <main style={{ background: '#060d18', color: '#e2e8f0', fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>

        {/* ── Hero ── */}
        <section style={{ paddingTop: '100px', paddingBottom: '60px', background: 'linear-gradient(180deg,#0a1628 0%,#060d18 100%)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: ACCENT, background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: '4px', padding: '3px 10px' }}>
                {es ? 'Guía de Referencia' : 'Reference Guide'}
              </span>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', padding: '3px 10px' }}>
                K-Video · VMS
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '.01em', color: '#f0f4f8', marginBottom: '20px' }}>
              {es ? 'Analítica de Video CCTV: IA para tus Cámaras de Vigilancia Existentes' : 'CCTV Video Analytics: AI for Your Existing Surveillance Cameras'}
            </h1>
            <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7, maxWidth: '720px', marginBottom: '32px' }}>
              {es
                ? 'La analítica de video CCTV añade detección con inteligencia artificial a las cámaras de circuito cerrado que ya tienes — sin reemplazar la infraestructura. Esta guía explica cómo funciona sobre cámaras de cualquier marca, la diferencia entre analítica en el borde y en servidor, y qué puede detectar la vigilancia inteligente a escala urbana.'
                : 'CCTV video analytics adds AI detection to the closed-circuit cameras you already have — without replacing the infrastructure. This guide explains how it works across any camera brand, the difference between edge and server-based analytics, and what intelligent surveillance can detect at city scale.'}
            </p>
            <div style={{ fontSize: '12px', color: '#475569', lineHeight: 2 }}>
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Integraciones:' : 'Integrations:'}</span>
              <Link href="/integrations/lpr" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>LPR</Link>
              <Link href="/integrations/face-recognition" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>{es ? 'Reconocimiento Facial' : 'Face Recognition'}</Link>
              <Link href="/integrations/sensor-fusion" style={{ color: ACCENT, textDecoration: 'none' }}>{es ? 'Fusión de Sensores' : 'Sensor Fusion'}</Link>
              <br />
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Recursos:' : 'Resources:'}</span>
              <Link href="/resources/best-ai-video-analytics-software" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? 'Mejor Software de Analítica con IA' : 'Best AI Analytics Software'}</Link>
              <Link href="/resources/video-analytics-use-cases" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? 'Casos de Uso' : 'Use Cases'}</Link>
              <Link href="/resources/what-is-video-management-software" style={{ color: '#94a3b8', textDecoration: 'none' }}>VMS</Link>
            </div>
          </div>
        </section>

        {/* ── Definition ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={sectionH2}>{es ? '¿Qué es la analítica de video CCTV?' : 'What is CCTV video analytics?'}</h2>
          <p style={para}>
            {es
              ? 'La analítica de video CCTV es la capa de inteligencia artificial que se aplica sobre las cámaras de circuito cerrado (CCTV) existentes para detectar automáticamente eventos de interés — personas, vehículos, intrusiones, comportamientos — sin que un operador tenga que vigilar cada monitor. Su ventaja definitoria es que aprovecha la infraestructura de cámaras que ya está instalada: no hay que reemplazar el CCTV, solo añadir la analítica sobre el flujo de video.'
              : 'CCTV video analytics is the artificial-intelligence layer applied on top of existing closed-circuit television (CCTV) cameras to automatically detect events of interest — people, vehicles, intrusions, behaviors — without an operator watching every monitor. Its defining advantage is that it leverages the camera infrastructure already installed: there is no need to replace the CCTV, only to add analytics on top of the video stream.'}
          </p>
          <p style={para}>
            {es
              ? 'Esto la distingue de la videovigilancia tradicional (solo grabación) y la conecta con la '
              : 'This distinguishes it from traditional video surveillance (recording only) and connects it to '}
            <strong style={{ color: '#e2e8f0', fontWeight: 600 }}>{es ? 'analítica de video con IA' : 'AI video analytics'}</strong>
            {es ? ', que es el motor de detección subyacente.' : ', which is the underlying detection engine.'}
          </p>
        </section>

        {/* ── Add to existing CCTV ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'Añadir analítica a tu CCTV existente — sin reemplazar cámaras' : 'Adding analytics to existing CCTV — without replacing cameras'}</h2>
          <p style={para}>
            {es
              ? 'La analítica de video moderna es agnóstica al hardware. Se aplica sobre el flujo de las cámaras CCTV/IP existentes de cualquier fabricante — Hikvision, Axis, Dahua, Bosch, Hanwha — e incluso sobre cámaras analógicas mediante un codificador. Esto significa que una ciudad o instalación puede activar detección inteligente sobre cientos de cámaras ya desplegadas, concentrando la inversión en el procesamiento en lugar de en reemplazar el parque de cámaras. KabatOne agrega la analítica de todas ellas en una sola interfaz operativa.'
              : 'Modern video analytics is hardware-agnostic. It applies to the stream from existing CCTV/IP cameras of any manufacturer — Hikvision, Axis, Dahua, Bosch, Hanwha — and even to analog cameras via an encoder. This means a city or facility can turn on intelligent detection across hundreds of already-deployed cameras, concentrating investment in processing rather than replacing the camera fleet. KabatOne aggregates analytics from all of them into a single operational interface.'}
          </p>
        </section>

        {/* ── Edge vs Server table ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'Analítica CCTV: en el borde vs. en servidor' : 'CCTV analytics: edge vs. server-based'}</h2>
          <div style={{ overflowX: 'auto', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', marginTop: '8px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '520px' }}>
              <thead>
                <tr>
                  {deployment.headers.map((h, i) => (
                    <th key={i} style={{ textAlign: 'left', padding: '12px 16px', background: 'rgba(168,85,247,0.08)', color: '#f0f4f8', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {deployment.rows.map((r, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {r.map((c, j) => (
                      <td key={j} style={{ padding: '11px 16px', color: j === 0 ? '#cbd5e1' : '#94a3b8', fontWeight: j === 0 ? 600 : 400 }}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Detections grid ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'Qué detecta la analítica de video de vigilancia' : 'What surveillance video analytics detects'}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '14px', marginTop: '8px' }}>
            {detections.map((c, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '18px' }}>
                <div style={{ fontSize: '22px', marginBottom: '8px' }}>{c.icon}</div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>{c.title}</div>
                <div style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── VMS relationship ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'CCTV, analítica y VMS en una plataforma unificada' : 'CCTV, analytics, and VMS in a unified platform'}</h2>
          <p style={para}>
            {es
              ? 'La analítica de video CCTV no reemplaza a tu '
              : 'CCTV video analytics does not replace your '}
            <Link href="/resources/what-is-video-management-software" style={{ color: ACCENT, textDecoration: 'none' }}>{es ? 'software de gestión de video (VMS)' : 'video management software (VMS)'}</Link>
            {es
              ? ' — lo complementa. El VMS gestiona la grabación y el almacenamiento de las cámaras; la analítica añade la detección inteligente. KabatOne unifica ambas capas y correlaciona cada alerta de CCTV con LPR, sensores y despacho en el mapa operativo del centro de mando, convirtiendo la vigilancia pasiva en respuesta activa.'
              : ' — it complements it. The VMS handles recording and storage of the cameras; analytics adds intelligent detection. KabatOne unifies both layers and correlates every CCTV alert with LPR, sensors, and dispatch on the command center operational map, turning passive surveillance into active response.'}
          </p>
        </section>

        {/* ── FAQ ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'Preguntas frecuentes' : 'Frequently asked questions'}</h2>
          <div style={{ marginTop: '8px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '18px 0' }}>
                <div style={{ fontSize: '16px', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>{faq.question}</div>
                <div style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.7 }}>{faq.answer}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 8px' }}>
          <h2 style={{ ...sectionH2, fontSize: '20px' }}>{es ? 'Relacionado' : 'Related'}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '6px' }}>
            {[
              { href: '/resources/best-ai-video-analytics-software', label: es ? 'Mejor Software de Analítica de Video con IA' : 'Best AI Video Analytics Software' },
              { href: '/resources/video-analytics-use-cases', label: es ? 'Casos de Uso de Analítica de Video' : 'Video Analytics Use Cases' },
              { href: '/resources/what-is-video-management-software', label: es ? 'Software de Gestión de Video (VMS)' : 'Video Management Software (VMS)' },
              { href: '/k-video', label: es ? 'K-Video — Plataforma de Video con IA' : 'K-Video — AI Video Platform' },
              { href: '/integrations/lpr', label: es ? 'Reconocimiento de Placas (LPR)' : 'License Plate Recognition (LPR)' },
              { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Centro de Crimen en Tiempo Real' : 'Real-Time Crime Center' },
            ].map((r) => (
              <Link key={r.href} href={r.href} style={{ fontSize: '12px', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '6px 12px', textDecoration: 'none' }}>
                {r.label}
              </Link>
            ))}
          </div>
        </section>

        <CTASection
          es={es}
          h2={es ? '¿Listo para Activar Analítica sobre tu CCTV?' : 'Ready to Activate Analytics on Your CCTV?'}
          subtitle={es
            ? 'KabatOne añade analítica de IA a tus cámaras CCTV existentes de cualquier marca, integrada con LPR, GIS y despacho. Agenda una demo de K-Video.'
            : 'KabatOne adds AI analytics to your existing CCTV cameras of any brand, integrated with LPR, GIS and dispatch. Book a K-Video demo.'}
        />
      </main>
      <Footer es={es} />
    </>
  )
}
