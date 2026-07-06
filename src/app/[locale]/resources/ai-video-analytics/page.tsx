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
  return generatePageMetadata('aiVideoAnalytics', locale)
}

export default async function AiVideoAnalyticsPage({
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
          question: '¿Qué es la analítica de video con IA?',
          answer:
            'La analítica de video con IA (también llamada analítica de video inteligente o IVA) usa redes neuronales y aprendizaje profundo para interpretar automáticamente las imágenes de las cámaras — en lugar de reglas fijas basadas en movimiento. Distingue una persona de un animal, clasifica tipos de vehículo, lee placas (LPR), reconoce rostros y detecta comportamientos como merodeo o aglomeraciones, con tasas de falsos positivos mucho menores que la analítica tradicional. En KabatOne, la analítica de video con IA corre sobre cámaras de cualquier fabricante y envía solo los eventos relevantes al mapa operativo del centro de mando.',
        },
        {
          question: '¿Cómo funciona la analítica de video con IA?',
          answer:
            'Un modelo de analítica de video con IA se entrena con millones de imágenes etiquetadas hasta que aprende a reconocer patrones visuales — personas, vehículos, armas, comportamientos. En producción, el modelo procesa cada fotograma del video en vivo (a través de una GPU en servidor o un chip de IA en la cámara), clasifica lo que ve, y genera una alerta cuando detecta una condición predefinida. A diferencia de la analítica basada en reglas, el modelo generaliza a condiciones nuevas (clima, iluminación, ángulos) sin reprogramación manual.',
        },
        {
          question: '¿Cuál es la diferencia entre analítica de video con IA y la tradicional basada en reglas?',
          answer:
            'La analítica tradicional (basada en reglas o detección de movimiento) dispara una alerta cada vez que cambian los píxeles — por lo que un árbol movido por el viento, una sombra o un animal generan falsas alarmas constantes. La analítica de video con IA entiende el contenido de la escena: sabe que eso es un árbol, no una persona. El resultado es una reducción drástica de falsos positivos (de 30–50% a menudo por debajo de 5%) y la capacidad de detectar eventos complejos — merodeo, objetos abandonados, comportamiento agresivo — que las reglas simples no pueden capturar.',
        },
        {
          question: '¿Qué es la analítica de video inteligente (IVA)?',
          answer:
            'La analítica de video inteligente (IVA, Intelligent Video Analytics) es sinónimo de analítica de video con IA: describe sistemas que usan visión por computadora y aprendizaje profundo para analizar video de forma autónoma. El término "inteligente" la distingue de la analítica de movimiento básica. Una plataforma IVA moderna detecta, clasifica, cuenta y correlaciona eventos entre múltiples cámaras — y en un contexto de seguridad pública, integra esas detecciones con LPR, sensores y despacho.',
        },
        {
          question: '¿Qué tan precisa es la analítica de video con IA?',
          answer:
            'Los sistemas maduros de analítica de video con IA logran precisiones del 95–99% para eventos simples (intrusión perimetral, conteo de personas) y del 85–95% para comportamientos complejos (detección de agresividad, objetos abandonados). La precisión depende de la calidad de la imagen, la variabilidad de las condiciones y la calidad del dataset de entrenamiento. KabatOne aplica filtros de confirmación configurables y correlación multi-sensor para reducir aún más las alertas irrelevantes antes de notificar al operador.',
        },
        {
          question: '¿La analítica de video con IA funciona con mis cámaras CCTV existentes?',
          answer:
            'Sí. La analítica de video con IA moderna es agnóstica al hardware: se aplica sobre el flujo de video de cámaras CCTV/IP existentes de cualquier fabricante (Hikvision, Axis, Dahua, Bosch, etc.) sin reemplazar la infraestructura. El procesamiento puede ejecutarse en un servidor central con GPU o en el borde (chip de IA de la cámara). KabatOne agrega la analítica de todas tus cámaras en una sola interfaz, sin importar la marca.',
        },
        {
          question: '¿Cuál es la diferencia entre analítica de video con IA y visión por computadora?',
          answer:
            'La visión por computadora es el campo científico general que permite a las máquinas "ver" e interpretar imágenes; la analítica de video con IA es su aplicación específica al video de vigilancia en tiempo real. En otras palabras, la analítica de video con IA usa técnicas de visión por computadora (detección de objetos, seguimiento, clasificación) empaquetadas en un sistema operativo que genera alertas accionables para operadores de seguridad.',
        },
      ]
    : [
        {
          question: 'What is AI video analytics?',
          answer:
            'AI video analytics (also called intelligent video analytics, or IVA) uses neural networks and deep learning to automatically interpret camera footage — instead of fixed motion-based rules. It tells a person from an animal, classifies vehicle types, reads license plates (LPR), recognizes faces, and detects behaviors like loitering or crowding, with far lower false-positive rates than traditional analytics. In KabatOne, AI video analytics runs on cameras from any manufacturer and pushes only the relevant events to the command center operational map.',
        },
        {
          question: 'How does AI video analytics work?',
          answer:
            'An AI video analytics model is trained on millions of labeled images until it learns to recognize visual patterns — people, vehicles, weapons, behaviors. In production, the model processes each frame of the live video (via a GPU on a server or an AI chip on the camera), classifies what it sees, and raises an alert when it detects a predefined condition. Unlike rule-based analytics, the model generalizes to new conditions (weather, lighting, angles) without manual reprogramming.',
        },
        {
          question: 'What is the difference between AI video analytics and traditional rule-based analytics?',
          answer:
            'Traditional analytics (rule-based or motion detection) fires an alert whenever pixels change — so a tree moving in the wind, a shadow, or an animal triggers constant false alarms. AI video analytics understands the content of the scene: it knows that is a tree, not a person. The result is a dramatic reduction in false positives (from 30–50% often down to under 5%) and the ability to detect complex events — loitering, abandoned objects, aggressive behavior — that simple rules cannot capture.',
        },
        {
          question: 'What is intelligent video analytics (IVA)?',
          answer:
            'Intelligent video analytics (IVA) is synonymous with AI video analytics: it describes systems that use computer vision and deep learning to analyze video autonomously. The word "intelligent" distinguishes it from basic motion analytics. A modern IVA platform detects, classifies, counts, and correlates events across multiple cameras — and in a public safety context, integrates those detections with LPR, sensors, and dispatch.',
        },
        {
          question: 'How accurate is AI video analytics?',
          answer:
            'Mature AI video analytics systems achieve 95–99% accuracy for simple events (perimeter intrusion, people counting) and 85–95% for complex behaviors (aggression detection, abandoned objects). Accuracy depends on image quality, condition variability, and training-dataset quality. KabatOne applies configurable confirmation filters and multi-sensor correlation to further reduce irrelevant alerts before notifying the operator.',
        },
        {
          question: 'Does AI video analytics work with my existing CCTV cameras?',
          answer:
            'Yes. Modern AI video analytics is hardware-agnostic: it applies to the video stream from existing CCTV/IP cameras of any manufacturer (Hikvision, Axis, Dahua, Bosch, etc.) without replacing the infrastructure. Processing can run on a central GPU server or at the edge (camera AI chip). KabatOne aggregates analytics from all your cameras into a single interface, regardless of brand.',
        },
        {
          question: 'What is the difference between AI video analytics and computer vision?',
          answer:
            'Computer vision is the general scientific field that lets machines "see" and interpret images; AI video analytics is its specific application to real-time surveillance video. In other words, AI video analytics uses computer-vision techniques (object detection, tracking, classification) packaged into an operational system that produces actionable alerts for security operators.',
        },
      ]

  const faqSchema = faqPageSchema(faqs)
  const artSchema = articleSchema(
    es ? 'Analítica de Video con IA: Cómo Funciona la Analítica Inteligente' : 'AI Video Analytics: How Intelligent Video Analytics Works',
    es
      ? 'Guía sobre analítica de video con IA: cómo funcionan las redes neuronales y el aprendizaje profundo en video, IA vs analítica tradicional basada en reglas, precisión, y aplicación en seguridad pública.'
      : 'Guide to AI video analytics: how neural networks and deep learning work on video, AI vs traditional rule-based analytics, accuracy, and application in public safety.',
    es
      ? 'https://kabatone.com/es/resources/ai-video-analytics/'
      : 'https://kabatone.com/resources/ai-video-analytics/',
    '2026-07-02'
  )
  const bcSchema = breadcrumbSchema([
    { name: 'Home', url: 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: 'https://kabatone.com/resources/' },
    {
      name: es ? 'Analítica de Video con IA' : 'AI Video Analytics',
      url: es
        ? 'https://kabatone.com/es/resources/ai-video-analytics/'
        : 'https://kabatone.com/resources/ai-video-analytics/',
    },
  ])

  const capabilities = es
    ? [
        { icon: '🧠', title: 'Clasificación de objetos', desc: 'Redes neuronales distinguen personas, vehículos, animales y objetos — eliminando las falsas alarmas de la detección de movimiento.' },
        { icon: '🚗', title: 'Reconocimiento de placas (LPR)', desc: 'Lectura automática de matrículas con IA y cotejo en tiempo real contra listas de alerta.' },
        { icon: '🏃', title: 'Análisis de comportamiento', desc: 'Detección de merodeo, aglomeraciones, movimiento en contra del flujo y comportamiento agresivo mediante modelos entrenados.' },
        { icon: '👤', title: 'Reconocimiento facial', desc: 'Cotejo de rostros contra bases de datos autorizadas para identificación de personas de interés.' },
        { icon: '📦', title: 'Objetos abandonados', desc: 'Detección de equipaje u objetos sin dueño que permanecen en una zona más allá de un umbral configurable.' },
        { icon: '🔍', title: 'Búsqueda forense por atributos', desc: 'Búsqueda retroactiva en horas de video por color de ropa, tipo de vehículo o dirección de movimiento.' },
      ]
    : [
        { icon: '🧠', title: 'Object classification', desc: 'Neural networks distinguish people, vehicles, animals, and objects — eliminating the false alarms of motion detection.' },
        { icon: '🚗', title: 'License plate recognition (LPR)', desc: 'AI-powered automatic plate reading with real-time cross-reference against alert lists.' },
        { icon: '🏃', title: 'Behavior analysis', desc: 'Detection of loitering, crowding, wrong-way movement, and aggressive behavior via trained models.' },
        { icon: '👤', title: 'Facial recognition', desc: 'Matching faces against authorized databases to identify persons of interest.' },
        { icon: '📦', title: 'Abandoned objects', desc: 'Detection of luggage or unattended objects that remain in a zone beyond a configurable threshold.' },
        { icon: '🔍', title: 'Forensic attribute search', desc: 'Retroactive search across hours of video by clothing color, vehicle type, or direction of movement.' },
      ]

  const aiVsTraditional = es
    ? {
        headers: ['Característica', 'Tradicional (Basada en Reglas)', 'IA (Aprendizaje Profundo)'],
        rows: [
          ['Método de detección', 'Cambio de píxeles / movimiento', 'Reconocimiento de contenido'],
          ['Falsos positivos', 'Altos (30–50%)', 'Bajos (< 5%)'],
          ['Distingue persona vs. animal', 'No', 'Sí'],
          ['Detecta comportamientos complejos', 'No', 'Sí (merodeo, agresión)'],
          ['Se adapta a nuevas condiciones', 'Requiere reprogramación', 'Generaliza automáticamente'],
          ['Búsqueda forense por atributos', 'No', 'Sí'],
        ],
      }
    : {
        headers: ['Feature', 'Traditional (Rule-Based)', 'AI (Deep Learning)'],
        rows: [
          ['Detection method', 'Pixel change / motion', 'Content recognition'],
          ['False positives', 'High (30–50%)', 'Low (< 5%)'],
          ['Distinguishes person vs. animal', 'No', 'Yes'],
          ['Detects complex behavior', 'No', 'Yes (loitering, aggression)'],
          ['Adapts to new conditions', 'Needs reprogramming', 'Generalizes automatically'],
          ['Forensic attribute search', 'No', 'Yes'],
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
                K-Video · K-Safety
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '.01em', color: '#f0f4f8', marginBottom: '20px' }}>
              {es ? 'Analítica de Video con IA: Cómo Funciona la Analítica de Video Inteligente' : 'AI Video Analytics: How Intelligent Video Analytics Works'}
            </h1>
            <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7, maxWidth: '720px', marginBottom: '32px' }}>
              {es
                ? 'La analítica de video con IA usa redes neuronales y aprendizaje profundo para reconocer personas, vehículos y comportamientos en video de vigilancia — con una fracción de los falsos positivos de la analítica tradicional. Esta guía explica cómo funciona, en qué se diferencia de los sistemas basados en reglas, y cómo se aplica en seguridad pública.'
                : 'AI video analytics uses neural networks and deep learning to recognize people, vehicles, and behaviors in surveillance video — with a fraction of the false positives of traditional analytics. This guide explains how it works, how it differs from rule-based systems, and how it applies in public safety.'}
            </p>
            <div style={{ fontSize: '12px', color: '#475569', lineHeight: 2 }}>
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Integraciones:' : 'Integrations:'}</span>
              <Link href="/integrations/lpr" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>LPR</Link>
              <Link href="/integrations/face-recognition" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>{es ? 'Reconocimiento Facial' : 'Face Recognition'}</Link>
              <Link href="/integrations/sensor-fusion" style={{ color: ACCENT, textDecoration: 'none' }}>{es ? 'Fusión de Sensores' : 'Sensor Fusion'}</Link>
              <br />
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Recursos:' : 'Resources:'}</span>
              <Link href="/resources/what-is-video-analytics" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? 'Analítica de Video' : 'Video Analytics'}</Link>
              <Link href="/resources/what-is-video-management-software" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>VMS</Link>
              <Link href="/k-video" style={{ color: '#94a3b8', textDecoration: 'none' }}>K-Video</Link>
            </div>
          </div>
        </section>

        {/* ── Definition ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={sectionH2}>{es ? '¿Qué es la analítica de video con IA?' : 'What is AI video analytics?'}</h2>
          <p style={para}>
            {es
              ? 'La analítica de video con IA — también llamada analítica de video inteligente (IVA) — es el uso de redes neuronales de aprendizaje profundo para interpretar automáticamente las imágenes de las cámaras de vigilancia. En lugar de disparar una alerta cada vez que cambia un píxel (como hace la detección de movimiento tradicional), un modelo de IA reconoce lo que realmente hay en la escena: una persona, un vehículo, un arma, un comportamiento.'
              : 'AI video analytics — also called intelligent video analytics (IVA) — is the use of deep-learning neural networks to automatically interpret surveillance camera footage. Instead of firing an alert whenever a pixel changes (as traditional motion detection does), an AI model recognizes what is actually in the scene: a person, a vehicle, a weapon, a behavior.'}
          </p>
          <p style={para}>
            {es
              ? 'Esta distinción es la razón por la que la analítica de video con IA reduce los falsos positivos de un 30–50% típico a menudo por debajo del 5% — y por la que puede detectar eventos complejos (merodeo, objetos abandonados, agresión) que las reglas simples nunca podrían capturar. Es la tecnología central de las plataformas modernas de videovigilancia inteligente.'
              : 'This distinction is why AI video analytics cuts false positives from a typical 30–50% to often under 5% — and why it can detect complex events (loitering, abandoned objects, aggression) that simple rules could never capture. It is the core technology of modern intelligent surveillance platforms.'}
          </p>
        </section>

        {/* ── How it works ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'Cómo funciona: redes neuronales y aprendizaje profundo' : 'How it works: neural networks & deep learning'}</h2>
          <p style={para}>
            {es
              ? 'Un modelo de analítica de video con IA se entrena con millones de imágenes etiquetadas hasta que aprende los patrones visuales de cada categoría. Una vez entrenado, procesa cada fotograma del video en vivo — en una GPU de servidor o en un chip de IA dentro de la cámara (edge) — clasifica lo que ve y genera una alerta solo cuando se cumple una condición definida. Como el modelo aprende de ejemplos, generaliza a condiciones nuevas (clima, iluminación, ángulos) sin necesidad de reprogramación manual.'
              : 'An AI video analytics model is trained on millions of labeled images until it learns the visual patterns of each category. Once trained, it processes each frame of the live video — on a server GPU or on an AI chip inside the camera (edge) — classifies what it sees, and raises an alert only when a defined condition is met. Because the model learns from examples, it generalizes to new conditions (weather, lighting, angles) without manual reprogramming.'}
          </p>
        </section>

        {/* ── AI vs Traditional table ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'IA vs. analítica tradicional basada en reglas' : 'AI vs. traditional rule-based analytics'}</h2>
          <div style={{ overflowX: 'auto', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', marginTop: '8px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '520px' }}>
              <thead>
                <tr>
                  {aiVsTraditional.headers.map((h, i) => (
                    <th key={i} style={{ textAlign: 'left', padding: '12px 16px', background: 'rgba(168,85,247,0.08)', color: '#f0f4f8', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {aiVsTraditional.rows.map((r, i) => (
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

        {/* ── Capabilities grid ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'Qué detecta la analítica de video con IA' : 'What AI video analytics detects'}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '14px', marginTop: '8px' }}>
            {capabilities.map((c, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '18px' }}>
                <div style={{ fontSize: '22px', marginBottom: '8px' }}>{c.icon}</div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>{c.title}</div>
                <div style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── In a unified platform ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'La IA es más valiosa dentro de una plataforma unificada' : 'AI is most valuable inside a unified platform'}</h2>
          <p style={para}>
            {es
              ? 'La analítica de video con IA aislada solo genera alertas. Su valor se multiplica cuando las detecciones se integran en un centro de mando unificado: una alerta de IA aparece geolocalizada en el mapa GIS, correlacionada con LPR, sensores y el estado de las unidades — y el operador puede despachar una unidad desde la misma pantalla. KabatOne aplica analítica de video con IA sobre cámaras de cualquier fabricante y convierte cada detección en una acción operativa.'
              : 'AI video analytics on its own only generates alerts. Its value multiplies when detections are integrated into a unified command center: an AI alert appears geolocated on the GIS map, correlated with LPR, sensors, and unit status — and the operator can dispatch a unit from the same screen. KabatOne applies AI video analytics across cameras from any manufacturer and turns every detection into an operational action.'}
          </p>
          <p style={para}>
            {es
              ? 'Para entender la capa de gestión que hace esto posible, consulta la guía de '
              : 'To understand the management layer that makes this possible, see the '}
            <Link href="/resources/what-is-video-management-software" style={{ color: ACCENT, textDecoration: 'none' }}>{es ? 'software de gestión de video (VMS)' : 'video management software (VMS)'}</Link>
            {es ? ' y la guía general de ' : ' guide and the general '}
            <Link href="/resources/what-is-video-analytics" style={{ color: ACCENT, textDecoration: 'none' }}>{es ? 'analítica de video' : 'video analytics'}</Link>
            {es ? '.' : ' guide.'}
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
              { href: '/resources/what-is-video-analytics', label: es ? 'Analítica de Video (guía general)' : 'Video Analytics (general guide)' },
              { href: '/resources/what-is-video-management-software', label: es ? 'Software de Gestión de Video (VMS)' : 'Video Management Software (VMS)' },
              { href: '/k-video', label: es ? 'K-Video — Plataforma de Video con IA' : 'K-Video — AI Video Platform' },
              { href: '/integrations/lpr', label: es ? 'Reconocimiento de Placas (LPR)' : 'License Plate Recognition (LPR)' },
              { href: '/integrations/face-recognition', label: es ? 'Reconocimiento Facial' : 'Face Recognition' },
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
          h2={es ? '¿Listo para Activar Analítica de Video con IA?' : 'Ready to Activate AI Video Analytics in Your Operation?'}
          subtitle={es
            ? 'KabatOne ejecuta analítica de video con IA sobre cámaras de cualquier fabricante, integrada con LPR, GIS y despacho. Agenda una demo de K-Video.'
            : 'KabatOne runs AI video analytics on cameras from any manufacturer, integrated with LPR, GIS and dispatch. Book a K-Video demo.'}
        />
      </main>
      <Footer es={es} />
    </>
  )
}
