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
  return generatePageMetadata('aiInPublicSafety', locale)
}

export default async function AiInPublicSafetyPage({
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
          question: '¿Qué es la inteligencia artificial en seguridad pública?',
          answer:
            'La inteligencia artificial en seguridad pública es la aplicación de algoritmos de aprendizaje automático (machine learning) y visión computacional para automatizar tareas operativas que anteriormente requerían atención humana constante: detectar movimiento en zonas específicas, identificar vehículos en listas de alerta, analizar patrones de criminalidad histórica y recomendar asignaciones de recursos. El objetivo no es reemplazar a los operadores humanos, sino amplificar su capacidad para procesar información y responder más rápido.',
        },
        {
          question: '¿Es precisa la IA en videovigilancia?',
          answer:
            'La precisión depende del modelo de IA, la calidad de los datos de entrenamiento y las condiciones de operación (iluminación, resolución de cámara, ángulo). Los sistemas modernos de reconocimiento de placas vehiculares alcanzan tasas de exactitud del 95–99% en condiciones controladas. La detección de comportamiento anómalo tiene tasas más variables — típicamente entre el 70–85% — con más falsos positivos que el reconocimiento de placas. La revisión humana de alertas generadas por IA es siempre necesaria antes de tomar acción.',
        },
        {
          question: '¿Cuáles son las limitaciones de la IA en seguridad pública?',
          answer:
            'Las principales limitaciones son: sesgo en los datos de entrenamiento (si los datos históricos reflejan sesgos de aplicación, el modelo los amplificará), dependencia de condiciones de imagen (la IA funciona peor con cámaras de baja resolución, mala iluminación o ángulos desfavorables), falta de contexto (la IA puede detectar un comportamiento como "sospechoso" sin entender el contexto cultural o situacional), y el problema del "oráculo" (los operadores pueden confiar excesivamente en las recomendaciones de la IA sin aplicar juicio crítico).',
        },
        {
          question: '¿La IA en seguridad pública viola la privacidad?',
          answer:
            'El uso de IA en seguridad pública plantea preguntas legítimas de privacidad, especialmente el reconocimiento facial en espacios públicos. Las regulaciones varían por país y estado. Los sistemas bien implementados aplican principios de minimización de datos (solo capturar lo necesario), acceso por roles (solo personal autorizado accede a ciertos datos), retención limitada (videos eliminados automáticamente después de un período definido) y auditoría completa de quién accedió a qué información. KabatOne incluye controles de privacidad y auditoría completa en su plataforma.',
        },
        {
          question: '¿Cuánto mejora la IA los tiempos de respuesta?',
          answer:
            'Las ciudades que han implementado plataformas de seguridad pública con IA reportan reducciones de tiempo de respuesta del 20–40% en los primeros 12 meses. La mejora más significativa viene de la detección automática de incidentes (elimina el tiempo entre que ocurre un evento y que un operador lo nota) y del enrutamiento óptimo de unidades (la IA recomienda la unidad más cercana disponible con la habilidad correcta, reduciendo el tiempo de selección del despachador de minutos a segundos).',
        },
        {
          question: '¿Qué debo buscar en una plataforma de IA para seguridad pública?',
          answer:
            'Los criterios clave son: integración nativa con CAD y VMS (no middleware de terceros), transparencia del modelo (puedes ver qué detectó la IA y por qué), personalización de umbrales (ajustar la sensibilidad según el contexto operativo), auditoría completa de alertas y acciones, soporte para cámaras de múltiples fabricantes (no propietario de hardware), y SLA de disponibilidad del 99.9% o superior. Solicita siempre una demo con datos reales de tu ciudad, no con datos de demostración.',
        },
      ]
    : [
        {
          question: 'What is AI in public safety?',
          answer:
            'AI in public safety is the application of machine learning algorithms and computer vision to automate operational tasks that previously required constant human attention: detecting movement in specific zones, identifying vehicles on alert lists, analyzing historical crime patterns, and recommending resource assignments. The goal is not to replace human operators but to amplify their capacity to process information and respond faster.',
        },
        {
          question: 'How accurate is AI in video surveillance?',
          answer:
            'Accuracy depends on the AI model, data quality, and operating conditions (lighting, camera resolution, angle). Modern license plate recognition systems achieve 95–99% accuracy in controlled conditions. Anomalous behavior detection has more variable rates — typically 70–85% — with more false positives than plate recognition. Human review of AI-generated alerts is always necessary before taking action.',
        },
        {
          question: 'What are the limitations of AI in public safety?',
          answer:
            'The main limitations are: bias in training data (if historical data reflects enforcement biases, the model will amplify them), dependence on image conditions (AI performs worse with low-resolution cameras, poor lighting, or unfavorable angles), lack of context (AI may flag behavior as "suspicious" without understanding the cultural or situational context), and the "oracle problem" (operators may over-rely on AI recommendations without applying critical judgment).',
        },
        {
          question: 'Does AI in public safety violate privacy?',
          answer:
            'AI use in public safety raises legitimate privacy questions, especially facial recognition in public spaces. Regulations vary by country and state. Well-implemented systems apply data minimization (only capture what is necessary), role-based access (only authorized personnel access certain data), limited retention (videos automatically deleted after a defined period), and full audit trails of who accessed what information. KabatOne includes privacy controls and complete audit trails in its platform.',
        },
        {
          question: 'How much does AI improve response times?',
          answer:
            'Cities that have deployed AI-powered public safety platforms report response time reductions of 20–40% in the first 12 months. The most significant improvement comes from automated incident detection (eliminates the time between an event occurring and an operator noticing it) and optimal unit routing (AI recommends the nearest available unit with the right capability, reducing dispatcher selection time from minutes to seconds).',
        },
        {
          question: 'What should I look for in an AI platform for public safety?',
          answer:
            'Key criteria: native integration with CAD and VMS (no third-party middleware), model transparency (you can see what the AI detected and why), threshold customization (adjust sensitivity based on operational context), full audit trail of alerts and actions, support for cameras from multiple manufacturers (no hardware lock-in), and 99.9%+ uptime SLA. Always request a demo with real data from your city, not demonstration data.',
        },
      ]

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    {
      name: es ? 'IA en Seguridad Pública' : 'AI in Public Safety',
      url: es ? 'https://kabatone.com/es/resources/ai-in-public-safety/' : 'https://kabatone.com/resources/ai-in-public-safety/',
    },
  ]

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

  const useCases = es
    ? [
        {
          title: 'Analítica de Video con IA',
          desc: 'Los sistemas de IA analizan continuamente los feeds de video buscando eventos específicos: personas en zonas restringidas, vehículos detenidos en lugares prohibidos, objetos abandonados, comportamientos anómalos como correr en áreas no destinadas a eso. En lugar de que los operadores monitoreen cientos de pantallas simultáneamente, la IA actúa como un primer nivel de detección que genera alertas solo cuando hay algo que revisar.',
        },
        {
          title: 'Reconocimiento de Placas Vehiculares (LPR)',
          desc: 'Los algoritmos LPR identifican automáticamente los caracteres de una matrícula vehicular en video y los comparan contra bases de datos de alerta en milisegundos. Casos de uso: vehículos robados en tránsito, vehículos asociados a sujetos buscados, seguimiento de rutas de vehículos de interés en investigaciones activas. La precisión de los LPR modernos supera el 95% en condiciones de operación normales.',
        },
        {
          title: 'Enrutamiento Inteligente de Despacho',
          desc: 'Los algoritmos de optimización de rutas en plataformas CAD modernas calculan en tiempo real cuál es la unidad más apropiada para cada incidente considerando: distancia GPS, estado actual de la unidad (disponible/ocupada/en tránsito), tipo de incidente, nivel de prioridad y tráfico en la ruta. Esto reduce el tiempo de selección del despachador de 2–3 minutos a segundos.',
        },
        {
          title: 'Análisis Predictivo de Criminalidad',
          desc: 'Los modelos de análisis predictivo procesan datos históricos de incidentes, patrones temporales (hora del día, día de la semana, eventos especiales) y variables contextuales para generar mapas de calor de riesgo. Esto permite a los comandantes distribuir unidades de patrulla de forma proactiva hacia zonas con mayor probabilidad de actividad criminal, en lugar de esperar que los incidentes ocurran.',
        },
        {
          title: 'Fusión de Sensores',
          desc: 'La IA integra datos de múltiples sensores heterogéneos — cámaras, detectores acústicos, sensores de tráfico, datos de llamadas 911, redes sociales georeferenciadas — en una sola imagen operativa. Cuando múltiples sensores reportan eventos correlacionados en el mismo espacio y tiempo, la probabilidad de que sea un incidente real aumenta significativamente, reduciendo falsos positivos.',
        },
        {
          title: 'Despacho por Voz con IA',
          answer: 'Los sistemas de reconocimiento de voz aplicados a la recepción de llamadas 911 pueden transcribir automáticamente la llamada, extraer la dirección y el tipo de incidente, y pre-llenar el formulario CAD del despachador antes de que termine la llamada. Esto reduce el tiempo de captura de datos en despacho y libera al despachador para enfocarse en la conversación con el llamante.',
        },
      ]
    : [
        {
          title: 'AI Video Analytics',
          desc: 'AI systems continuously analyze video feeds looking for specific events: people in restricted zones, vehicles stopped in prohibited areas, abandoned objects, anomalous behaviors like running in areas not intended for it. Instead of operators monitoring hundreds of screens simultaneously, AI acts as a first detection layer that generates alerts only when there is something to review.',
        },
        {
          title: 'License Plate Recognition (LPR)',
          desc: 'LPR algorithms automatically identify license plate characters in video and compare them against alert databases in milliseconds. Use cases: stolen vehicles in transit, vehicles associated with wanted subjects, tracking routes of vehicles of interest in active investigations. Modern LPR accuracy exceeds 95% under normal operating conditions.',
        },
        {
          title: 'AI-Powered Dispatch Routing',
          desc: 'Route optimization algorithms in modern CAD platforms calculate in real time which unit is most appropriate for each incident, considering: GPS distance, current unit status (available/occupied/in transit), incident type, priority level, and route traffic. This reduces dispatcher selection time from 2–3 minutes to seconds.',
        },
        {
          title: 'Predictive Crime Analysis',
          desc: 'Predictive analysis models process historical incident data, temporal patterns (time of day, day of week, special events), and contextual variables to generate risk heat maps. This allows commanders to proactively distribute patrol units toward zones with higher probability of criminal activity, instead of waiting for incidents to occur.',
        },
        {
          title: 'Sensor Fusion',
          desc: 'AI integrates data from multiple heterogeneous sensors — cameras, acoustic detectors, traffic sensors, 911 call data, georeferenced social media — into a single operational picture. When multiple sensors report correlated events in the same space and time, the probability of a real incident increases significantly, reducing false positives.',
        },
        {
          title: 'Voice-to-CAD Dispatch',
          desc: 'Speech recognition systems applied to 911 call intake can automatically transcribe the call, extract the address and incident type, and pre-fill the dispatcher\'s CAD form before the call ends. This reduces data capture time in dispatch and frees the dispatcher to focus on the conversation with the caller.',
        },
      ]

  const benefits = es
    ? [
        { stat: '40%', label: 'Reducción en tiempo de respuesta', note: 'Promedio en ciudades con plataformas IA integradas' },
        { stat: '3×', label: 'Más incidentes detectados proactivamente', note: 'vs. centros de monitoreo CCTV tradicional' },
        { stat: '95%+', label: 'Precisión en reconocimiento LPR', note: 'En condiciones de operación estándar' },
        { stat: '60%', label: 'Reducción en tiempo de resolución', note: 'En centros con integración CAD + Video + GIS' },
      ]
    : [
        { stat: '40%', label: 'Response time reduction', note: 'Average across cities with integrated AI platforms' },
        { stat: '3×', label: 'More proactively detected incidents', note: 'vs. traditional CCTV monitoring centers' },
        { stat: '95%+', label: 'LPR recognition accuracy', note: 'Under standard operating conditions' },
        { stat: '60%', label: 'Resolution time reduction', note: 'In centers with CAD + Video + GIS integration' },
      ]

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
                ? 'Inteligencia Artificial en Seguridad Pública: Guía para Ciudades'
                : 'AI in Public Safety: A Guide for Cities',
              es
                ? 'Cómo la inteligencia artificial está transformando la respuesta a emergencias, la videovigilancia y el despacho. Casos de uso reales, beneficios, limitaciones y qué buscar en una plataforma IA.'
                : 'How artificial intelligence is transforming emergency response, video surveillance, and dispatch. Real use cases, benefits, limitations, and what to look for in an AI platform.',
              es ? 'https://kabatone.com/es/resources/ai-in-public-safety/' : 'https://kabatone.com/resources/ai-in-public-safety/',
              '2026-03-20'
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
              {es ? 'IA en Seguridad Pública' : 'AI in Public Safety'}
            </span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Guía Tecnológica' : 'Technology Guide'}
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
                ? 'Inteligencia Artificial en Seguridad Pública: Guía para Ciudades'
                : 'AI in Public Safety: A Guide for Cities'}
            </h1>
            <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.8, maxWidth: '720px', marginBottom: '0' }}>
              {es
                ? 'La inteligencia artificial no reemplaza a los operadores de seguridad pública — amplifica su capacidad de detectar, analizar y responder. Las ciudades que han integrado IA en sus plataformas operativas reportan reducciones de tiempo de respuesta del 20–40% y un aumento significativo en la detección proactiva de incidentes. Esta guía explica cómo funciona la IA en seguridad pública, qué resultados se pueden esperar y qué limitaciones tener en cuenta.'
                : 'Artificial intelligence does not replace public safety operators — it amplifies their ability to detect, analyze, and respond. Cities that have integrated AI into their operational platforms report response time reductions of 20–40% and a significant increase in proactive incident detection. This guide explains how AI works in public safety, what results to expect, and what limitations to keep in mind.'}
            </p>
          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="stats-grid">
              {benefits.map((b, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '28px 24px' }}>
                  <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '48px', fontWeight: 800, color: ACCENT, lineHeight: 1, marginBottom: '8px' }}>
                    {b.stat}
                  </p>
                  <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--white)', marginBottom: '6px' }}>{b.label}</p>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.5, marginBottom: '0' }}>{b.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Casos de Uso Principales de la IA en Seguridad Pública' : 'Key AI Use Cases in Public Safety'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'La IA no es un producto único sino un conjunto de tecnologías especializadas, cada una diseñada para una función operativa específica. Los casos de uso más maduros y de mayor impacto en operaciones de seguridad pública son:'
                : 'AI is not a single product but a set of specialized technologies, each designed for a specific operational function. The most mature and highest-impact use cases in public safety operations are:'}
            </p>
            {useCases.map((uc, i) => (
              <div key={i}>
                <h3 style={h3Style}>{uc.title}</h3>
                <p style={pStyle}>{uc.desc || (uc as { desc?: string; answer?: string }).answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── REAL BENEFITS ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Beneficios Reales que Están Viendo las Ciudades' : 'Real Benefits Cities Are Seeing'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Más allá de las estadísticas generales, los impactos más concretos que reportan las ciudades con plataformas de IA integradas en seguridad pública son:'
                : 'Beyond general statistics, the most concrete impacts reported by cities with integrated AI public safety platforms are:'}
            </p>
            {(es
              ? [
                  { title: 'Detección automática de incidentes', desc: 'El mayor impacto no es la velocidad de respuesta — es la detección. En sistemas CCTV tradicionales, los incidentes son detectados por operadores humanos que monitorean pantallas, con tiempos promedio de detección de 5–15 minutos. Con IA, el sistema detecta el evento en segundos. Este tiempo ahorrado en detección impacta directamente la probabilidad de prevenir el incidente o capturar al responsable.' },
                  { title: 'Reducción de carga operativa en despachadores', desc: 'Los despachadores manejan hasta 200 llamadas por turno en ciudades medianas. Las herramientas de IA que pre-clasifican incidentes, sugieren la unidad óptima y pre-llenan formularios CAD reducen la carga cognitiva del despachador, disminuyendo el riesgo de errores en condiciones de alta presión.' },
                  { title: 'Inteligencia accionable para comandantes', desc: 'Los mapas de calor predictivos y los reportes de tendencias de criminalidad permiten a los directores de seguridad pública tomar decisiones de asignación de recursos basadas en datos históricos reales, no en intuición o tradición. Esto es especialmente valioso para justificar presupuestos de seguridad frente a consejos municipales.' },
                ]
              : [
                  { title: 'Automatic incident detection', desc: 'The biggest impact is not response speed — it is detection. In traditional CCTV systems, incidents are detected by human operators watching screens, with average detection times of 5–15 minutes. With AI, the system detects the event in seconds. This saved detection time directly impacts the probability of preventing the incident or apprehending the perpetrator.' },
                  { title: 'Reduced dispatcher workload', desc: 'Dispatchers handle up to 200 calls per shift in mid-size cities. AI tools that pre-classify incidents, suggest the optimal unit, and pre-fill CAD forms reduce dispatcher cognitive load, decreasing the risk of errors under high-pressure conditions.' },
                  { title: 'Actionable intelligence for commanders', desc: 'Predictive heat maps and crime trend reports allow public safety directors to make resource allocation decisions based on real historical data, not intuition or tradition. This is especially valuable for justifying security budgets before municipal councils.' },
                ]
            ).map((item, i) => (
              <div key={i} style={{ marginBottom: '32px' }}>
                <h3 style={{ ...h3Style, marginTop: i === 0 ? '0' : '40px' }}>{item.title}</h3>
                <p style={pStyle}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CHALLENGES ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Desafíos y Limitaciones de la IA en Seguridad Pública' : 'Challenges and Limitations of AI in Public Safety'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Una evaluación honesta de la IA en seguridad pública requiere reconocer sus limitaciones actuales. Ignorarlas lleva a expectativas no realistas y proyectos fallidos:'
                : 'An honest assessment of AI in public safety requires acknowledging its current limitations. Ignoring them leads to unrealistic expectations and failed projects:'}
            </p>
            {(es
              ? [
                  { title: 'Sesgo algorítmico', desc: 'Los modelos de IA aprenden de datos históricos. Si los patrones históricos de aplicación de la ley reflejan sesgos — por ejemplo, mayor presencia policial en ciertos barrios — el modelo aprenderá y amplificará esos patrones. La mitigación requiere auditorías regulares de los modelos, diversidad en los equipos de datos y supervisión humana activa de los resultados.' },
                  { title: 'Dependencia de calidad de imagen', desc: 'La IA funciona bien con cámaras HD bien posicionadas e iluminadas. Con cámaras de baja resolución, ángulos desfavorables o mala iluminación nocturna, la precisión cae significativamente. Muchas ciudades descubren este problema después de instalar la IA, cuando sus cámaras existentes no son adecuadas para el análisis automático.' },
                  { title: 'Exceso de confianza en la IA', desc: 'Los operadores y comandantes pueden desarrollar un sesgo de automatización — aceptar las recomendaciones de la IA sin aplicar juicio crítico. La IA debe ser una herramienta de apoyo a la decisión humana, no un sustituto. Los protocolos operativos deben requerir explícitamente revisión humana antes de cualquier acción basada en una alerta de IA.' },
                ]
              : [
                  { title: 'Algorithmic bias', desc: 'AI models learn from historical data. If historical law enforcement patterns reflect biases — for example, higher police presence in certain neighborhoods — the model will learn and amplify those patterns. Mitigation requires regular model audits, diversity in data teams, and active human oversight of outputs.' },
                  { title: 'Image quality dependence', desc: 'AI works well with well-positioned and well-lit HD cameras. With low-resolution cameras, unfavorable angles, or poor nighttime lighting, accuracy drops significantly. Many cities discover this problem after deploying AI, when their existing cameras are inadequate for automated analysis.' },
                  { title: 'Over-reliance on AI', desc: 'Operators and commanders can develop automation bias — accepting AI recommendations without applying critical judgment. AI should be a decision-support tool, not a substitute for human judgment. Operational protocols must explicitly require human review before any action based on an AI alert.' },
                ]
            ).map((item, i) => (
              <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', borderLeft: '3px solid #f59e0b', padding: '24px 28px', marginBottom: '16px' }}>
                <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', marginBottom: '10px', marginTop: '0' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHAT TO LOOK FOR ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Qué Buscar en una Plataforma de IA para Seguridad Pública' : 'What to Look for in an AI Public Safety Platform'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'No todas las plataformas de IA son iguales. Los criterios que más importan cuando evalúas una solución para tu ciudad:'
                : 'Not all AI platforms are equal. The criteria that matter most when evaluating a solution for your city:'}
            </p>
            {(es
              ? [
                  { label: 'Integración nativa, sin middleware', desc: 'La IA debe estar integrada directamente en la plataforma operativa (CAD, VMS, GIS), no como una capa separada conectada mediante APIs de terceros. Cada capa adicional añade latencia, puntos de falla y costos de integración.' },
                  { label: 'Transparencia del modelo', desc: 'Debes poder ver qué detectó la IA y por qué generó una alerta específica. Los sistemas de "caja negra" que solo producen una alerta sin explicación son inaceptables en entornos de seguridad pública donde las decisiones tienen consecuencias legales.' },
                  { label: 'Umbrales configurables', desc: 'La sensibilidad de la IA debe ser ajustable por zona, hora del día y tipo de evento. Una plaza pública tiene criterios diferentes a una zona industrial en la madrugada. Los sistemas con umbrales fijos generan demasiados falsos positivos en contextos dinámicos.' },
                  { label: 'Soporte multi-fabricante de cámaras', desc: 'Tu ciudad ya tiene cámaras de múltiples marcas. La plataforma de IA debe ser agnóstica al fabricante y soportar ONVIF, RTSP y los principales protocolos propietarios. Evita soluciones que requieren reemplazar tu infraestructura de video existente.' },
                  { label: 'Auditoría completa', desc: 'Cada alerta generada, cada acción del operador y cada despacho debe quedar registrado con marca de tiempo, usuario y contexto. Esto es esencial para la rendición de cuentas, el análisis post-incidente y el cumplimiento regulatorio.' },
                ]
              : [
                  { label: 'Native integration, no middleware', desc: 'AI must be integrated directly into the operational platform (CAD, VMS, GIS), not as a separate layer connected via third-party APIs. Each additional layer adds latency, failure points, and integration costs.' },
                  { label: 'Model transparency', desc: 'You must be able to see what the AI detected and why it generated a specific alert. "Black box" systems that only produce an alert without explanation are unacceptable in public safety environments where decisions have legal consequences.' },
                  { label: 'Configurable thresholds', desc: 'AI sensitivity must be adjustable by zone, time of day, and event type. A public plaza has different criteria than an industrial zone at 3 AM. Systems with fixed thresholds generate too many false positives in dynamic contexts.' },
                  { label: 'Multi-manufacturer camera support', desc: 'Your city already has cameras from multiple brands. The AI platform must be manufacturer-agnostic and support ONVIF, RTSP, and the main proprietary protocols. Avoid solutions that require replacing your existing video infrastructure.' },
                  { label: 'Full audit trail', desc: 'Every generated alert, every operator action, and every dispatch must be logged with a timestamp, user, and context. This is essential for accountability, post-incident analysis, and regulatory compliance.' },
                ]
            ).map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px', paddingBottom: '20px', marginBottom: '20px', borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', color: ACCENT, flexShrink: 0, marginTop: '3px' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p style={{ fontSize: '15px', fontWeight: 600, marginBottom: '6px', color: 'var(--white)' }}>{item.label}</p>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── RELATED PRODUCTS ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'IA Integrada en KabatOne' : 'AI Built into KabatOne'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>
              {es ? 'Módulos con Analítica de IA' : 'Modules with AI Analytics'}
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '28px' }}>
              {es
                ? 'KabatOne integra IA directamente en cada módulo operativo — sin middleware, sin configuración adicional.'
                : 'KabatOne integrates AI directly into each operational module — no middleware, no additional configuration.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'IA + GIS' : 'AI Situational' },
                { href: '/k-video', label: 'K-Video', desc: es ? 'Analítica de Video' : 'Video Analytics' },
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho IA' : 'AI Dispatch' },
                { href: '/k-traffic', label: 'K-Traffic', desc: es ? 'Tráfico Inteligente' : 'Smart Traffic' },
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
              {es ? 'Preguntas Comunes sobre IA en Seguridad Pública' : 'Common Questions About AI in Public Safety'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px 28px' }}>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '17px', letterSpacing: '0.02em', textTransform: 'uppercase', marginBottom: '10px', marginTop: '0', color: 'var(--white)' }}>
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

        {/* ── RELATED ARTICLES ── */}
        <section style={{ padding: '64px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, marginBottom: '24px' }}>
              {es ? 'Artículos Relacionados' : 'Related Articles'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { href: '/resources/rtcc-setup-guide', label: es ? 'Guía de Implementación RTCC' : 'RTCC Setup Guide' },
                { href: '/resources/what-is-a-public-safety-platform', label: es ? '¿Qué Es una Plataforma de Seguridad Pública?' : 'What Is a Public Safety Platform?' },
                { href: '/resources/smart-city-platform-guide', label: es ? 'Guía de Plataformas de Ciudad Inteligente' : 'Smart City Platform Guide' },
                { href: '/resources/how-c5-command-centers-work', label: es ? 'Cómo Funcionan los Centros C5' : 'How C5 Command Centers Work' },
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
          h2={es ? 'Ve la IA de KabatOne en Acción' : 'See KabatOne\'s AI in Action'}
          subtitle={es
            ? 'KabatOne integra analítica de IA en video, despacho y GIS en una sola plataforma. Solicita una demo con datos reales de ciudad.'
            : 'KabatOne integrates AI analytics across video, dispatch, and GIS in one platform. Request a demo with real city data.'}
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 640px) {
            .stats-grid { grid-template-columns: 1fr !important; }
            section { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </div>
    </>
  )
}
