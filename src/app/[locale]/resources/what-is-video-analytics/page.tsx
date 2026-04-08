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
  return generatePageMetadata('whatIsVideoAnalytics', locale)
}

export default async function WhatIsVideoAnalyticsPage({
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
          question: '¿Qué es la analítica de video?',
          answer:
            'La analítica de video es el proceso de analizar automáticamente las imágenes de las cámaras de vigilancia para detectar eventos, objetos, comportamientos o anomalías sin intervención humana continua. Los sistemas modernos utilizan inteligencia artificial y redes neuronales entrenadas para identificar personas, vehículos, objetos abandonados, intrusiones perimetrales, aglomeraciones de personas y otros eventos de interés en tiempo real, generando alertas automáticas cuando se detectan condiciones predefinidas.',
        },
        {
          question: '¿Cuál es la diferencia entre analítica de video basada en servidor y en cámara?',
          answer:
            'La analítica en cámara (edge analytics) procesa las imágenes directamente en el chip de la cámara — tiene baja latencia y no requiere transmitir video de alta resolución a un servidor central, pero está limitada por la capacidad de procesamiento del chip. La analítica en servidor centraliza el procesamiento de múltiples cámaras en un servidor o nube potente, permitiendo modelos de IA más complejos y correlación entre cámaras. Los sistemas avanzados como KabatOne usan ambas: edge para alertas inmediatas, servidor para correlación y análisis profundo.',
        },
        {
          question: '¿Qué tipos de eventos puede detectar la analítica de video?',
          answer:
            'Las categorías principales son: (1) Detección de intrusión — personas o vehículos que cruzan líneas virtuales o entran en zonas restringidas. (2) Conteo de objetos — personas por zona, vehículos por carril, aforo en tiempo real. (3) Reconocimiento — de placas vehiculares (LPR), de rostros, de tipos de vehículo. (4) Comportamientos anómalos — objetos abandonados, merodeo, aglomeraciones, comportamiento agresivo. (5) Eventos específicos — detección de disparos (acústica + video), humo o fuego, caídas de personas. (6) Análisis forense — búsqueda retroactiva por atributos (color de ropa, tipo de vehículo).',
        },
        {
          question: '¿Cuál es la tasa de falsos positivos en analítica de video con IA?',
          answer:
            'Los sistemas maduros de analítica de video con IA entrenados en condiciones reales logran tasas de falsos positivos de 1-5% para eventos simples como intrusión perimetral, y 5-15% para comportamientos complejos como detección de agresividad. Los factores que más afectan la precisión son: calidad de imagen (resolución, iluminación), variabilidad de condiciones (clima, oclusión), calidad del dataset de entrenamiento y ajuste del umbral de confianza. KabatOne aplica filtros de confirmación configurables para reducir alertas irrelevantes antes de notificar al operador.',
        },
        {
          question: '¿Cómo se integra la analítica de video en un centro de mando?',
          answer:
            'En un centro de mando unificado, las alertas de analítica de video no llegan como notificaciones aisladas — se integran en el mapa operativo GIS como eventos geolocalizados. El operador ve la alerta en el mapa, abre la cámara correspondiente con un clic, y puede despachar una unidad directamente desde la misma interfaz. KabatOne correlaciona alertas de video con datos de LPR, sensores IoT y el estado de las unidades de campo para proporcionar contexto completo antes de que el operador tome una decisión.',
        },
        {
          question: '¿Qué infraestructura necesita la analítica de video a escala municipal?',
          answer:
            'Para un despliegue municipal de 200-500 cámaras con analítica de video en tiempo real, se necesita: servidores con GPUs para procesamiento (o infraestructura cloud con latencia controlada), red de transmisión con ancho de banda suficiente (mínimo 2-4 Mbps por cámara a 1080p), almacenamiento para retención de video (30-90 días según normativa), y una plataforma de gestión como KabatOne que unifique las alertas de analítica con el mapa operativo. El dimensionamiento depende de si se usa edge analytics en las cámaras o procesamiento centralizado.',
        },
      ]
    : [
        {
          question: 'What is video analytics?',
          answer:
            'Video analytics is the process of automatically analyzing surveillance camera footage to detect events, objects, behaviors, or anomalies without continuous human monitoring. Modern systems use artificial intelligence and neural networks trained to identify people, vehicles, abandoned objects, perimeter intrusions, crowd gatherings, and other events of interest in real time, generating automatic alerts when predefined conditions are detected.',
        },
        {
          question: 'What is the difference between server-based and camera-based video analytics?',
          answer:
            'Edge analytics processes images directly on the camera chip — it has low latency and does not require transmitting high-resolution video to a central server, but is limited by the chip\'s processing capacity. Server-based analytics centralizes processing from multiple cameras on a powerful server or cloud, enabling more complex AI models and cross-camera correlation. Advanced systems like KabatOne use both: edge for immediate alerts, server for correlation and deep analysis.',
        },
        {
          question: 'What types of events can video analytics detect?',
          answer:
            'The main categories are: (1) Intrusion detection — people or vehicles crossing virtual lines or entering restricted zones. (2) Object counting — people per zone, vehicles per lane, real-time occupancy. (3) Recognition — license plates (LPR), faces, vehicle types. (4) Anomalous behavior — abandoned objects, loitering, crowd gatherings, aggressive behavior. (5) Specific events — gunshot detection (acoustic + video), smoke or fire, person falls. (6) Forensic search — retroactive search by attributes (clothing color, vehicle type).',
        },
        {
          question: 'What is the false positive rate in AI video analytics?',
          answer:
            'Mature AI video analytics systems trained on real-world conditions achieve false positive rates of 1–5% for simple events like perimeter intrusion, and 5–15% for complex behaviors like aggression detection. The factors that most affect accuracy are: image quality (resolution, lighting), condition variability (weather, occlusion), training dataset quality, and confidence threshold tuning. KabatOne applies configurable confirmation filters to reduce irrelevant alerts before notifying the operator.',
        },
        {
          question: 'How does video analytics integrate into a command center?',
          answer:
            'In a unified command center, video analytics alerts do not arrive as isolated notifications — they integrate into the operational GIS map as geolocated events. The operator sees the alert on the map, opens the corresponding camera with one click, and can dispatch a unit directly from the same interface. KabatOne correlates video alerts with LPR data, IoT sensors, and field unit status to provide complete context before the operator makes a decision.',
        },
        {
          question: 'What infrastructure does video analytics require at municipal scale?',
          answer:
            'For a municipal deployment of 200–500 cameras with real-time video analytics, you need: GPU-equipped servers for processing (or cloud infrastructure with controlled latency), a transmission network with sufficient bandwidth (minimum 2–4 Mbps per camera at 1080p), storage for video retention (30–90 days per regulation), and a management platform like KabatOne that unifies analytics alerts with the operational map. Sizing depends on whether edge analytics is used at the cameras or centralized processing.',
        },
      ]

  const faqSchema = faqPageSchema(faqs)
  const artSchema = articleSchema(
    es ? '¿Qué Es la Analítica de Video con IA?' : 'What Is Video Analytics?',
    es
      ? 'Guía completa sobre analítica de video: cómo funciona, tipos de detección (intrusión, LPR, comportamiento, fuego), diferencia entre edge y servidor, tasas de falsos positivos e integración en centros de mando.'
      : 'Complete guide to video analytics: how it works, detection types (intrusion, LPR, behavior, fire), edge vs server analytics, false positive rates, and integration into command centers.',
    es
      ? 'https://kabatone.com/es/resources/what-is-video-analytics/'
      : 'https://kabatone.com/resources/what-is-video-analytics/',
    '2026-04-07'
  )
  const bcSchema = breadcrumbSchema([
    { name: 'Home', url: 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: 'https://kabatone.com/resources/' },
    {
      name: es ? '¿Qué Es la Analítica de Video?' : 'What Is Video Analytics?',
      url: es
        ? 'https://kabatone.com/es/resources/what-is-video-analytics/'
        : 'https://kabatone.com/resources/what-is-video-analytics/',
    },
  ])

  const detectionTypes = es
    ? [
        { icon: '🚧', title: 'Intrusión perimetral', desc: 'Detección de personas o vehículos que cruzan líneas virtuales o entran en zonas restringidas definidas en el mapa.' },
        { icon: '🚗', title: 'Reconocimiento de placas (LPR)', desc: 'Lectura automática de matrículas y cotejo en tiempo real contra bases de datos de alertas.' },
        { icon: '👥', title: 'Conteo y aforo', desc: 'Conteo de personas por zona, densidad de multitudes, detección de aglomeraciones y merodeo.' },
        { icon: '🔫', title: 'Detección de disparos', desc: 'Correlación de audio (sensor acústico) con movimiento en video para confirmación de eventos de armas de fuego.' },
        { icon: '📦', title: 'Objetos abandonados', desc: 'Detección de objetos que permanecen sin dueño en una zona durante un tiempo configurable.' },
        { icon: '🔥', title: 'Humo y fuego', desc: 'Detección temprana de humo o llamas en el frame de video para alertas de incendio antes de que los sensores físicos activen.' },
      ]
    : [
        { icon: '🚧', title: 'Perimeter intrusion', desc: 'Detection of people or vehicles crossing virtual lines or entering restricted zones defined on the map.' },
        { icon: '🚗', title: 'License plate recognition (LPR)', desc: 'Automatic plate reading and real-time cross-reference against alert databases.' },
        { icon: '👥', title: 'Counting & occupancy', desc: 'People count per zone, crowd density, crowd gathering detection, and loitering.' },
        { icon: '🔫', title: 'Gunshot detection', desc: 'Correlation of audio (acoustic sensor) with video motion for firearms event confirmation.' },
        { icon: '📦', title: 'Abandoned objects', desc: 'Detection of objects left unattended in a zone for a configurable period of time.' },
        { icon: '🔥', title: 'Smoke & fire', desc: 'Early detection of smoke or flames in the video frame for fire alerts before physical sensors activate.' },
      ]

  const edgeVsServer = es
    ? {
        headers: ['Característica', 'Edge (En Cámara)', 'Servidor / Cloud'],
        rows: [
          ['Procesamiento', 'Chip de la cámara', 'GPU server o cloud'],
          ['Latencia de alerta', 'Muy baja (< 100ms)', 'Baja (100–500ms)'],
          ['Complejidad del modelo IA', 'Limitada', 'Alta — modelos profundos'],
          ['Correlación entre cámaras', 'No', 'Sí'],
          ['Ancho de banda requerido', 'Bajo', 'Alto (video HD al servidor)'],
          ['Escalabilidad', 'Por cámara', 'Centralizada — más eficiente'],
          ['Caso de uso ideal', 'Alertas locales simples', 'Análisis complejo multi-cámara'],
        ],
      }
    : {
        headers: ['Feature', 'Edge (On-Camera)', 'Server / Cloud'],
        rows: [
          ['Processing', 'Camera chip', 'GPU server or cloud'],
          ['Alert latency', 'Very low (< 100ms)', 'Low (100–500ms)'],
          ['AI model complexity', 'Limited', 'High — deep models'],
          ['Cross-camera correlation', 'No', 'Yes'],
          ['Bandwidth required', 'Low', 'High (HD video to server)'],
          ['Scalability', 'Per camera', 'Centralized — more efficient'],
          ['Ideal use case', 'Simple local alerts', 'Complex multi-camera analysis'],
        ],
      }

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
                K-Video · K-Safety
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '.01em', color: '#f0f4f8', marginBottom: '20px' }}>
              {es ? '¿Qué Es la Analítica de Video con IA?' : 'What Is Video Analytics?'}
            </h1>
            <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7, maxWidth: '720px', marginBottom: '32px' }}>
              {es
                ? 'La analítica de video usa inteligencia artificial para detectar automáticamente eventos, comportamientos y objetos en las imágenes de cámaras de vigilancia, sin monitoreo humano continuo. Esta guía explica cómo funciona, qué detecta, edge vs servidor, y su integración en centros de mando.'
                : 'Video analytics uses artificial intelligence to automatically detect events, behaviors, and objects in surveillance camera footage — without continuous human monitoring. This guide explains how it works, what it detects, edge vs server processing, and integration into command centers.'}
            </p>
            <div style={{ fontSize: '12px', color: '#475569', lineHeight: 2 }}>
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Integraciones:' : 'Integrations:'}</span>
              <Link href="/integrations/lpr" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>LPR</Link>
              <Link href="/integrations/sensor-fusion" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>{es ? 'Fusión de Sensores' : 'Sensor Fusion'}</Link>
              <Link href="/integrations/face-recognition" style={{ color: ACCENT, textDecoration: 'none' }}>{es ? 'Reconocimiento Facial' : 'Face Recognition'}</Link>
              <br />
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Recursos:' : 'Resources:'}</span>
              <Link href="/resources/what-is-video-management-software" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>VMS</Link>
              <Link href="/resources/what-is-a-real-time-crime-center" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>RTCC</Link>
              <Link href="/resources/what-is-gunshot-detection-software" style={{ color: '#94a3b8', textDecoration: 'none' }}>{es ? 'Detección de Disparos' : 'Gunshot Detection'}</Link>
            </div>
          </div>
        </section>

        {/* ── Definition ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '16px' }}>
            {es ? 'Definición' : 'Definition'}
          </h2>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '16px' }}>
            {es
              ? 'La analítica de video (también llamada VCA — Video Content Analysis, o IVA — Intelligent Video Analytics) es el uso de algoritmos de inteligencia artificial para extraer información útil de las imágenes de video de vigilancia de forma automática y en tiempo real.'
              : 'Video analytics (also called VCA — Video Content Analysis, or IVA — Intelligent Video Analytics) is the use of artificial intelligence algorithms to automatically extract actionable information from surveillance video footage in real time.'}
          </p>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '16px' }}>
            {es
              ? 'El monitoreo humano de cámaras de seguridad es ineficiente a escala: estudios muestran que un operador pierde el 95% de la actividad relevante después de 22 minutos de monitoreo continuo. La analítica de video resuelve este problema — el sistema monitorea todas las cámaras simultáneamente, las 24 horas, y solo llama la atención del operador cuando detecta un evento predefinido.'
              : 'Human monitoring of security cameras is inefficient at scale: studies show operators miss 95% of relevant activity after 22 minutes of continuous monitoring. Video analytics solves this — the system monitors all cameras simultaneously, 24 hours a day, and only calls the operator\'s attention when a predefined event is detected.'}
          </p>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            {es
              ? 'En el contexto de seguridad pública, la analítica de video es más valiosa cuando está integrada en una plataforma unificada que correlaciona sus alertas con datos de LPR, sensores, despacho y GIS — no cuando opera como sistema aislado.'
              : 'In the context of public safety, video analytics is most valuable when integrated into a unified platform that correlates its alerts with LPR data, sensors, dispatch, and GIS — not when operating as an isolated system.'}
          </p>
        </section>

        {/* ── Detection types ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '8px' }}>
            {es ? 'Tipos de Detección' : 'Detection Types'}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '28px' }}>
            {es ? 'Categorías de eventos que la analítica de video detecta automáticamente' : 'Categories of events that video analytics detects automatically'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px' }}>
            {detectionTypes.map((d, i) => (
              <div key={i} style={{ background: 'rgba(168,85,247,0.05)', border: '1px solid rgba(168,85,247,0.15)', borderRadius: '10px', padding: '18px 20px' }}>
                <div style={{ fontSize: '20px', marginBottom: '8px' }}>{d.icon}</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#f0f4f8', marginBottom: '6px' }}>{d.title}</div>
                <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.6 }}>{d.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Edge vs Server ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '16px' }}>
            {es ? 'Edge vs Servidor: ¿Dónde Procesar la Analítica?' : 'Edge vs Server: Where to Process Analytics?'}
          </h2>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '24px' }}>
            {es
              ? 'La analítica de video puede procesarse en el chip de la cámara (edge) o en un servidor centralizado. Los despliegues maduros combinan ambos enfoques.'
              : 'Video analytics can be processed on the camera chip (edge) or on a centralized server. Mature deployments combine both approaches.'}
          </p>
          <div style={{ overflowX: 'auto', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: 'rgba(168,85,247,0.08)' }}>
                  {edgeVsServer.headers.map((h, i) => (
                    <th key={i} style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: i === 0 ? '#64748b' : i === 1 ? '#94a3b8' : ACCENT, borderBottom: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {edgeVsServer.rows.map((row, ri) => (
                  <tr key={ri} style={{ borderBottom: ri < edgeVsServer.rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', background: ri % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ padding: '12px 16px', color: ci === 0 ? '#94a3b8' : '#f0f4f8', fontWeight: ci === 2 ? 600 : 400 }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '28px' }}>
            {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '20px 22px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#f0f4f8', marginBottom: '10px' }}>{faq.question}</div>
                <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.7 }}>{faq.answer}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#475569', marginBottom: '14px' }}>
            {es ? 'Recursos Relacionados' : 'Related Resources'}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              { href: '/resources/what-is-video-management-software', label: es ? 'Software de Gestión de Video' : 'Video Management Software' },
              { href: '/resources/what-is-lpr-license-plate-recognition', label: es ? 'Reconocimiento de Placas (LPR)' : 'License Plate Recognition (LPR)' },
              { href: '/resources/what-is-gunshot-detection-software', label: es ? 'Detección de Disparos' : 'Gunshot Detection' },
              { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Centro de Crimen en Tiempo Real' : 'Real-Time Crime Center' },
              { href: '/resources/what-is-situational-awareness-software', label: es ? 'Conciencia Situacional' : 'Situational Awareness' },
            ].map((r) => (
              <Link key={r.href} href={r.href} style={{ fontSize: '12px', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '6px 12px', textDecoration: 'none' }}>
                {r.label}
              </Link>
            ))}
          </div>
        </section>

        <div style={{ height: '60px' }} />
        <CTASection
          es={es}
          h2={es ? '¿Listo para Activar Analítica de Video en tu Operación?' : 'Ready to Activate Video Analytics in Your Operation?'}
          subtitle={es
            ? 'KabatOne integra analítica de video con LPR, GIS y despacho en una sola plataforma. Agenda una demo de K-Video.'
            : 'KabatOne integrates video analytics with LPR, GIS, and dispatch in a single platform. Schedule a K-Video demo.'}
        />
      </main>

      <Footer es={es} />
    </>
  )
}
