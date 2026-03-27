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
  return generatePageMetadata('rtccSetupGuide', locale)
}

export default async function RtccSetupGuidePage({
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
          question: '¿Qué es un Centro de Crimen en Tiempo Real (RTCC)?',
          answer:
            'Un Centro de Crimen en Tiempo Real (RTCC, por sus siglas en inglés) es una instalación operativa centralizada donde analistas y supervisores monitoran feeds de video en vivo, alertas de sensores y datos de despacho para detectar y responder a incidentes criminales en tiempo real. Los RTCC integran cámaras públicas y privadas, lectores de placas vehiculares (LPR), detección de disparos y sistemas CAD en un solo entorno operativo.',
        },
        {
          question: '¿Cuántas cámaras necesita un RTCC?',
          answer:
            'No existe un número mínimo. Los RTCC eficaces operan con tan solo 50 cámaras en ciudades pequeñas y con miles en metrópolis como Ciudad de México. Lo más importante no es el número de cámaras, sino la cobertura estratégica: zonas de alto riesgo, corredores de tráfico y puntos de entrada/salida de la ciudad. Un buen análisis de brechas de cobertura antes de la implementación es más valioso que agregar cámaras sin planificación.',
        },
        {
          question: '¿Cuánto tiempo tarda implementar un RTCC?',
          answer:
            'La implementación de un RTCC básico — con 50 a 200 cámaras, software integrado y operadores capacitados — tarda entre 3 y 6 meses. Un RTCC de escala municipal completa con integraciones de múltiples agencias, LPR, detección acústica y análisis predictivo puede tardar de 12 a 18 meses. La capacitación y los procedimientos operativos estándar (SOP) son frecuentemente la parte más subestimada del proceso.',
        },
        {
          question: '¿Qué métricas debe rastrear un RTCC?',
          answer:
            'Las métricas operativas clave incluyen: tiempo de detección de incidentes (tiempo entre evento y alerta), tiempo de respuesta de unidades, tasa de resolución de incidentes, porcentaje de cobertura de cámaras activas, lecturas LPR por hora y alertas de reconocimiento facial o de comportamiento por turno. Las métricas de impacto incluyen cambios en tasas de criminalidad en zonas de cobertura RTCC versus zonas sin cobertura.',
        },
        {
          question: '¿Un RTCC puede integrarse con sistemas CAD existentes?',
          answer:
            'Sí. Los RTCC modernos se integran con sistemas CAD mediante APIs estándar. Cuando un analista del RTCC identifica un incidente, puede crear automáticamente un ticket en el sistema CAD del despachador, con la ubicación geolocalizadas y un enlace al feed de video en vivo. KabatOne K-Safety, por ejemplo, tiene integración nativa con K-Dispatch, eliminando la necesidad de middleware de terceros.',
        },
        {
          question: '¿Cuáles son los errores más comunes al implementar un RTCC?',
          answer:
            'Los errores más frecuentes son: subestimar los costos de capacitación del personal (a menudo el 30-40% del presupuesto total), no definir procedimientos operativos estándar antes de la puesta en marcha, instalar cámaras sin análisis previo de cobertura, ignorar la interoperabilidad con agencias externas (policía estatal, bomberos, protección civil), y no planificar la escalabilidad del ancho de banda de red para video en alta definición.',
        },
      ]
    : [
        {
          question: 'What is a Real-Time Crime Center (RTCC)?',
          answer:
            'A Real-Time Crime Center (RTCC) is a centralized operational facility where analysts and supervisors monitor live video feeds, sensor alerts, and dispatch data to detect and respond to criminal incidents in real time. RTCCs integrate public and private cameras, license plate readers (LPR), gunshot detection, and CAD systems into a single operational environment.',
        },
        {
          question: 'How many cameras does an RTCC need?',
          answer:
            'There is no minimum number. Effective RTCCs operate with as few as 50 cameras in small cities and thousands in major metros like Mexico City. What matters most is strategic coverage — high-risk zones, traffic corridors, and city entry/exit points — not total camera count. A coverage gap analysis before deployment is more valuable than adding cameras without planning.',
        },
        {
          question: 'How long does it take to set up an RTCC?',
          answer:
            'A basic RTCC — with 50 to 200 cameras, integrated software, and trained operators — takes 3 to 6 months to stand up. A full municipal-scale RTCC with multi-agency integrations, LPR, acoustic detection, and predictive analytics can take 12 to 18 months. Training and standard operating procedures (SOPs) are consistently the most underestimated part of the process.',
        },
        {
          question: 'What metrics should an RTCC track?',
          answer:
            'Key operational metrics include: incident detection time (time from event to alert), unit response time, incident resolution rate, active camera coverage percentage, LPR reads per hour, and facial or behavior recognition alerts per shift. Impact metrics include crime rate changes in RTCC coverage zones versus non-coverage zones.',
        },
        {
          question: 'Can an RTCC integrate with existing CAD systems?',
          answer:
            'Yes. Modern RTCCs integrate with CAD systems via standard APIs. When an RTCC analyst identifies an incident, they can automatically create a ticket in the dispatcher\'s CAD system, with the geolocated address and a link to the live video feed. KabatOne K-Safety, for example, has native integration with K-Dispatch, eliminating the need for third-party middleware.',
        },
        {
          question: 'What are the most common RTCC implementation mistakes?',
          answer:
            'The most frequent mistakes are: underestimating staff training costs (often 30–40% of total budget), failing to define standard operating procedures before go-live, installing cameras without a coverage gap analysis, ignoring interoperability with external agencies (state police, fire, civil protection), and not planning network bandwidth scalability for high-definition video.',
        },
      ]

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    {
      name: es ? 'Guía de Implementación RTCC' : 'RTCC Setup Guide',
      url: es ? 'https://kabatone.com/es/resources/rtcc-setup-guide/' : 'https://kabatone.com/resources/rtcc-setup-guide/',
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

  const steps = es
    ? [
        { num: '01', title: 'Evaluación y Análisis de Brechas', desc: 'Antes de comprar una sola cámara, realiza un análisis de cobertura completo. Mapea las zonas de mayor incidencia criminal, los corredores de tráfico clave y los puntos ciegos actuales de vigilancia. Entrevista a los despachadores y supervisores de turno para entender qué información necesitan en tiempo real que hoy no tienen. Este análisis define la arquitectura del RTCC, no al revés.' },
        { num: '02', title: 'Diseño de Infraestructura', desc: 'Un RTCC requiere tres capas de infraestructura: red (ancho de banda suficiente para streams de video HD simultáneos), cómputo (servidores para almacenamiento de video y procesamiento de IA) y espacio físico (sala de operaciones con estaciones de trabajo, monitores y redundancia eléctrica). Planifica para 3-5 años de crecimiento de cámaras desde el inicio.' },
        { num: '03', title: 'Selección e Integración de Software', desc: 'La plataforma del RTCC debe integrar: gestión de video (VMS), lectores de placas vehiculares (LPR), sistema de despacho (CAD) y mapeo GIS en una sola interfaz. Evita las soluciones de punto único que requieren cambiar de pantalla entre sistemas — cada segundo que un analista pasa buscando contexto es un segundo que no está respondiendo. Solicita una demo con datos de ciudad real, no con demos de laboratorio.' },
        { num: '04', title: 'Capacitación y Procedimientos Operativos', desc: 'Los SOPs (Procedimientos Operativos Estándar) deben estar definidos antes de la puesta en marcha, no después. Define: ¿quién puede ver qué cámara? ¿Cómo se escala un incidente de analista a despachador? ¿Cuándo se notifica a la agencia estatal? ¿Cómo se maneja el video como evidencia? La capacitación técnica es la parte más fácil; la capacitación en protocolos de decisión es la más crítica.' },
        { num: '05', title: 'Lanzamiento y Optimización Continua', desc: 'El RTCC no está "terminado" el día de la puesta en marcha. Establece un ciclo mensual de revisión de métricas: ¿Qué zonas tienen más alertas sin respuesta? ¿Qué cámaras tienen más tiempo fuera de línea? ¿Cuál es el tiempo promedio de detección de incidentes? Usa estos datos para reubicar cámaras, ajustar umbrales de IA y refinar los SOPs.' },
      ]
    : [
        { num: '01', title: 'Assessment & Gap Analysis', desc: 'Before buying a single camera, conduct a full coverage analysis. Map your highest-crime zones, key traffic corridors, and current surveillance blind spots. Interview dispatchers and shift supervisors to understand what real-time information they need but don\'t have today. This analysis defines the RTCC architecture — not the other way around.' },
        { num: '02', title: 'Infrastructure Design', desc: 'An RTCC requires three infrastructure layers: network (sufficient bandwidth for simultaneous HD video streams), compute (servers for video storage and AI processing), and physical space (operations room with workstations, monitors, and electrical redundancy). Plan for 3–5 years of camera growth from the start.' },
        { num: '03', title: 'Software Selection & Integration', desc: 'The RTCC platform must integrate video management (VMS), license plate readers (LPR), dispatch (CAD), and GIS mapping in a single interface. Avoid point solutions that require switching screens between systems — every second an analyst spends hunting for context is a second they\'re not responding. Request a demo with real city data, not lab demos.' },
        { num: '04', title: 'Training & Standard Operating Procedures', desc: 'SOPs must be defined before go-live, not after. Define: who can view which camera? How does an incident escalate from analyst to dispatcher? When is the state agency notified? How is video handled as evidence? Technical training is the easy part; decision-protocol training is the most critical.' },
        { num: '05', title: 'Launch & Continuous Optimization', desc: 'The RTCC is not "finished" on launch day. Establish a monthly metrics review cycle: which zones have the most unresponded alerts? Which cameras have the most downtime? What is the average incident detection time? Use this data to reposition cameras, tune AI thresholds, and refine SOPs.' },
      ]

  const mistakes = es
    ? [
        { title: 'Ignorar los costos de capacitación', desc: 'La capacitación del personal representa el 30–40% del presupuesto real de un RTCC, pero rara vez aparece en las propuestas iniciales. Planifícala desde el inicio.' },
        { title: 'Comprar cámaras antes del análisis', desc: 'Agregar cámaras sin un análisis de cobertura produce puntos muertos caros y zonas críticas sin vigilancia. El análisis primero, el hardware después.' },
        { title: 'Ignorar la interoperabilidad', desc: 'Un RTCC que no puede compartir información con la policía estatal, bomberos o protección civil es un silo costoso. Define los acuerdos de intercambio de datos antes de la integración técnica.' },
        { title: 'No planificar el ancho de banda', desc: '100 cámaras HD transmitiendo 24/7 requieren entre 200 Mbps y 2 Gbps dependiendo de la calidad y compresión. Subestimar esto detiene los proyectos a mitad de camino.' },
      ]
    : [
        { title: 'Ignoring training costs', desc: 'Staff training represents 30–40% of the real RTCC budget but rarely appears in initial proposals. Plan it from the start.' },
        { title: 'Buying cameras before analysis', desc: 'Adding cameras without a coverage gap analysis produces expensive blind spots and unmonitored critical zones. Analysis first, hardware second.' },
        { title: 'Ignoring interoperability', desc: 'An RTCC that cannot share information with state police, fire, or civil protection is an expensive silo. Define data-sharing agreements before technical integration.' },
        { title: 'Not planning for bandwidth', desc: '100 HD cameras streaming 24/7 require between 200 Mbps and 2 Gbps depending on quality and compression. Underestimating this stalls projects mid-implementation.' },
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
                ? 'Guía para Implementar un Centro de Crimen en Tiempo Real (RTCC)'
                : 'Real-Time Crime Center (RTCC) Setup Guide',
              es
                ? 'Guía paso a paso para planificar, construir y operar un RTCC: infraestructura, software, integración de cámaras, capacitación y métricas clave.'
                : 'Step-by-step guide to planning, building, and operating an RTCC: infrastructure, software, camera integration, training, and key metrics.',
              es ? 'https://kabatone.com/es/resources/rtcc-setup-guide/' : 'https://kabatone.com/resources/rtcc-setup-guide/',
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
              {es ? 'Guía de Implementación RTCC' : 'RTCC Setup Guide'}
            </span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Guía de Implementación' : 'Implementation Guide'}
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
                ? 'Cómo Implementar un Centro de Crimen en Tiempo Real (RTCC)'
                : 'Real-Time Crime Center (RTCC) Setup Guide'}
            </h1>
            <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.8, maxWidth: '720px', marginBottom: '0' }}>
              {es
                ? 'Un Centro de Crimen en Tiempo Real integra video en vivo, lectores de placas, análisis de IA y datos de despacho en una sala de operaciones centralizada. Cuando está bien implementado, reduce los tiempos de respuesta, aumenta la tasa de resolución de incidentes y transforma la operación policial de reactiva a preventiva. Esta guía cubre lo que necesitas saber antes de empezar.'
                : 'A Real-Time Crime Center integrates live video, license plate readers, AI analytics, and dispatch data into a centralized operations room. When implemented well, it reduces response times, increases incident resolution rates, and transforms police operations from reactive to proactive. This guide covers what you need to know before you start.'}
            </p>
          </div>
        </section>

        {/* ── WHAT IS AN RTCC ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? '¿Qué Es un RTCC y Para Qué Sirve?' : 'What Is an RTCC and What Does It Do?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Un Centro de Crimen en Tiempo Real (RTCC) es una sala de operaciones centralizada donde analistas especializados monitorean continuamente feeds de video, alertas de sensores y datos de despacho para detectar, analizar y responder a actividad criminal en tiempo real — antes de que los oficiales en campo puedan ver la escena completa.'
                : 'A Real-Time Crime Center (RTCC) is a centralized operations room where specialized analysts continuously monitor video feeds, sensor alerts, and dispatch data to detect, analyze, and respond to criminal activity in real time — before field officers can see the full scene.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'Los RTCC modernos integran múltiples capas de tecnología: cámaras de vigilancia públicas y privadas, lectores de placas vehiculares (LPR) en corredores clave, sistemas de detección de disparos (como ShotSpotter), feeds de redes sociales georeferenciados, datos de despacho CAD y análisis de IA para reconocimiento de patrones. El resultado es una imagen operativa completa de la ciudad en tiempo real.'
                : 'Modern RTCCs integrate multiple technology layers: public and private surveillance cameras, license plate readers (LPR) on key corridors, gunshot detection systems (like ShotSpotter), georeferenced social media feeds, CAD dispatch data, and AI analytics for pattern recognition. The result is a complete real-time operational picture of the city.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'La diferencia con un centro de monitoreo tradicional de CCTV es la integración y el análisis activo. En un centro de CCTV, los operadores observan pantallas esperando ver algo anormal. En un RTCC, el sistema alerta activamente a los analistas sobre eventos específicos — movimiento en una zona de exclusión, una placa vehicular con alerta activa, un patrón de comportamiento sospechoso — y el analista toma decisiones con contexto completo.'
                : 'The difference from a traditional CCTV monitoring center is integration and active analysis. In a CCTV center, operators watch screens waiting to see something abnormal. In an RTCC, the system actively alerts analysts to specific events — movement in an exclusion zone, a vehicle plate with an active alert, a suspicious behavior pattern — and the analyst makes decisions with full context.'}
            </p>
          </div>
        </section>

        {/* ── CORE COMPONENTS ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Componentes Principales de un RTCC' : 'Core Components of an RTCC'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Un RTCC efectivo no es solo un cuarto con muchas pantallas. Es una arquitectura integrada de hardware, software y personas. Los componentes que no puedes omitir:'
                : 'An effective RTCC is not just a room with many screens. It is an integrated architecture of hardware, software, and people. The components you cannot skip:'}
            </p>

            <h3 style={h3Style}>{es ? 'Red de Video' : 'Video Network'}</h3>
            <p style={pStyle}>
              {es
                ? 'La base del RTCC. Incluye cámaras fijas en puntos estratégicos, cámaras PTZ (pan-tilt-zoom) para seguimiento activo, y acceso a cámaras privadas de negocios y ciudadanos mediante programas de integración voluntaria. KabatOne K-Connect, por ejemplo, permite integrar cámaras de negocios sin costo de infraestructura adicional.'
                : 'The foundation of the RTCC. Includes fixed cameras at strategic points, PTZ (pan-tilt-zoom) cameras for active tracking, and access to private business and citizen cameras through voluntary integration programs. KabatOne K-Connect, for example, allows integrating business cameras without additional infrastructure cost.'}
            </p>

            <h3 style={h3Style}>{es ? 'Lectores de Placas Vehiculares (LPR)' : 'License Plate Readers (LPR)'}</h3>
            <p style={pStyle}>
              {es
                ? 'Los LPR registran cada vehículo que pasa por los corredores monitorizados y cruzan automáticamente con bases de datos de alertas (vehículos robados, sujetos buscados, vehículos con deuda de multas). Un RTCC con LPR bien posicionados puede rastrear los movimientos de un vehículo de interés sin necesidad de seguimiento visual manual.'
                : 'LPRs record every vehicle passing through monitored corridors and automatically cross-reference against alert databases (stolen vehicles, wanted subjects, vehicles with outstanding warrants). An RTCC with well-positioned LPRs can track the movements of a vehicle of interest without manual visual tracking.'}
            </p>

            <h3 style={h3Style}>{es ? 'Analítica de IA' : 'AI Analytics'}</h3>
            <p style={pStyle}>
              {es
                ? 'Los analistas humanos no pueden monitorear cientos de feeds simultáneamente. La IA actúa como un filtro inteligente: detecta movimiento en zonas configuradas, identifica comportamientos anómalos, reconoce placas en listas de alerta y agrupa eventos relacionados espacial y temporalmente. K-Safety de KabatOne aplica análisis de IA directamente sobre los feeds de video sin requerir hardware de cómputo adicional.'
                : 'Human analysts cannot monitor hundreds of feeds simultaneously. AI acts as an intelligent filter: detecting movement in configured zones, identifying anomalous behavior, recognizing plates on alert lists, and clustering related events spatially and temporally. KabatOne K-Safety applies AI analysis directly on video feeds without requiring additional compute hardware.'}
            </p>

            <h3 style={h3Style}>{es ? 'Integración con CAD de Despacho' : 'CAD Dispatch Integration'}</h3>
            <p style={pStyle}>
              {es
                ? 'La integración CAD convierte el RTCC de un sistema de observación a un sistema de acción. Cuando un analista confirma un incidente, puede crear directamente un ticket en el sistema CAD del despachador — con la ubicación exacta, el feed de video relevante y las notas del analista — sin hacer una llamada telefónica ni cambiar de sistema. KabatOne K-Safety tiene integración nativa bidireccional con K-Dispatch.'
                : 'CAD integration transforms the RTCC from an observation system to an action system. When an analyst confirms an incident, they can directly create a ticket in the dispatcher\'s CAD system — with the exact location, the relevant video feed, and analyst notes — without making a phone call or switching systems. KabatOne K-Safety has native bidirectional integration with K-Dispatch.'}
            </p>
          </div>
        </section>

        {/* ── SETUP STEPS ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Los 5 Pasos para Implementar un RTCC' : '5 Steps to Set Up an RTCC'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'No existe una plantilla única para todos los RTCC. El tamaño de la ciudad, el presupuesto, la estructura de las agencias y la madurez tecnológica existente determinan el camino correcto. Estos pasos aplican universalmente:'
                : 'There is no one-size-fits-all RTCC template. City size, budget, agency structure, and existing technology maturity determine the right path. These steps apply universally:'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {steps.map((step) => (
                <div
                  key={step.num}
                  style={{
                    display: 'flex',
                    gap: '24px',
                    background: '#0b1628',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    padding: '24px 28px',
                  }}
                >
                  <span style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '28px',
                    fontWeight: 500,
                    color: ACCENT,
                    opacity: 0.6,
                    lineHeight: 1,
                    flexShrink: 0,
                    marginTop: '2px',
                  }}>
                    {step.num}
                  </span>
                  <div>
                    <h3 style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 700,
                      fontSize: '18px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      marginBottom: '10px',
                      marginTop: '0',
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMMON MISTAKES ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Errores Comunes al Implementar un RTCC' : 'Common RTCC Implementation Mistakes'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'La mayoría de los proyectos RTCC que fracasan o se estancan comparten los mismos patrones de error. Conocerlos de antemano te puede ahorrar meses y millones:'
                : 'Most RTCC projects that fail or stall share the same error patterns. Knowing them in advance can save months and significant budget:'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="mistakes-grid">
              {mistakes.map((m, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0b1628',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    borderLeft: `3px solid #ef4444`,
                    padding: '20px 24px',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                    marginTop: '0',
                  }}>
                    {m.title}
                  </h3>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── METRICS ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Métricas Clave para Medir el Éxito de tu RTCC' : 'Key Metrics to Measure Your RTCC\'s Success'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Lo que no se mide no se puede mejorar. Un RTCC efectivo establece líneas base de métricas desde el día 1 y revisa los resultados mensualmente. Las métricas más importantes:'
                : 'What isn\'t measured cannot be improved. An effective RTCC establishes metric baselines from day 1 and reviews results monthly. The most important metrics:'}
            </p>
            {(es
              ? [
                  { label: 'Tiempo de detección de incidentes', desc: 'Tiempo promedio entre el inicio de un evento y la primera alerta generada por el RTCC. Target: < 90 segundos.' },
                  { label: 'Tiempo de respuesta de unidades', desc: 'Tiempo desde la creación del ticket CAD hasta la llegada de la unidad al lugar. El RTCC debe reducir este indicador en al menos 15% en el primer año.' },
                  { label: 'Tasa de disponibilidad de cámaras', desc: 'Porcentaje de cámaras en línea y transmitiendo en tiempo real. Target: > 95% en horario de operación.' },
                  { label: 'Tasa de resolución de incidentes', desc: 'Porcentaje de incidentes detectados por el RTCC que resultan en una acción policial (detención, desalojo, verificación). Mide la eficacia del proceso de análisis.' },
                  { label: 'Lecturas LPR por turno', desc: 'Volumen total de registros de placas procesadas y número de alertas positivas generadas. Indica la utilización real de la infraestructura LPR.' },
                ]
              : [
                  { label: 'Incident detection time', desc: 'Average time from event start to the first RTCC alert generated. Target: < 90 seconds.' },
                  { label: 'Unit response time', desc: 'Time from CAD ticket creation to unit arrival on scene. The RTCC should reduce this by at least 15% in the first year.' },
                  { label: 'Camera availability rate', desc: 'Percentage of cameras online and streaming in real time. Target: > 95% during operating hours.' },
                  { label: 'Incident resolution rate', desc: 'Percentage of RTCC-detected incidents that result in a police action (arrest, dispersal, verification). Measures the effectiveness of the analysis process.' },
                  { label: 'LPR reads per shift', desc: 'Total volume of plate records processed and number of positive alerts generated. Indicates real LPR infrastructure utilization.' },
                ]
            ).map((metric, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '20px',
                  paddingBottom: '20px',
                  marginBottom: '20px',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <span style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '12px',
                  color: ACCENT,
                  flexShrink: 0,
                  marginTop: '3px',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p style={{ fontSize: '15px', fontWeight: 600, marginBottom: '6px', color: 'var(--white)' }}>{metric.label}</p>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>{metric.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── RELATED PRODUCTS ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Productos Relacionados' : 'Related Products'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>
              {es ? 'KabatOne para Centros RTCC' : 'KabatOne for RTCC Operations'}
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '28px' }}>
              {es
                ? 'Los módulos de KabatOne están diseñados para operar de forma integrada en entornos RTCC — sin middleware, sin cambio de pantalla.'
                : 'KabatOne modules are designed to operate in an integrated way in RTCC environments — no middleware, no screen switching.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'GIS + RTCC' : 'Situational GIS' },
                { href: '/k-video', label: 'K-Video', desc: es ? 'Gestión de Video' : 'Video Management' },
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD Dispatch' },
                { href: '/k-connect', label: 'K-Connect', desc: es ? 'Cámaras Privadas' : 'Private Cameras' },
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

            {/* ── Internal links ── */}
            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '12px' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {es ? 'Integraciones:' : 'Integrations:'}
                </span>
                {[
                  { href: '/integrations/lpr', label: 'LPR' },
                  { href: '/integrations/facial-recognition', label: es ? 'Reconocimiento Facial' : 'Facial Recognition' },
                  { href: '/integrations/sensor-fusion', label: es ? 'Fusión de Sensores' : 'Sensor Fusion' },
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
                  { href: '/resources/what-is-a-real-time-crime-center', label: es ? '¿Qué es un RTCC?' : 'What Is a Real-Time Crime Center' },
                  { href: '/resources/what-is-video-management-software', label: es ? 'Software de Gestión de Video' : 'What Is Video Management Software' },
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
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '32px' }}>
              {es ? 'Preguntas Comunes sobre RTCCs' : 'Common Questions About RTCCs'}
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
                { href: '/resources/ai-in-public-safety', label: es ? 'IA en Seguridad Pública: Guía para Ciudades' : 'AI in Public Safety: A Guide for Cities' },
                { href: '/resources/what-is-a-public-safety-platform', label: es ? '¿Qué Es una Plataforma de Seguridad Pública?' : 'What Is a Public Safety Platform?' },
                { href: '/resources/how-c5-command-centers-work', label: es ? 'Cómo Funcionan los Centros C5' : 'How C5 Command Centers Work' },
                { href: '/resources/psim-vs-unified-platform', label: es ? 'PSIM vs Plataforma Unificada' : 'PSIM vs Unified Platform' },
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
          h2={es ? 'Implementa un RTCC con KabatOne' : 'Build Your RTCC with KabatOne'}
          subtitle={es
            ? 'KabatOne integra video, LPR, despacho CAD y GIS en una sola plataforma para centros RTCC. Solicita una demo con datos reales de ciudad.'
            : 'KabatOne integrates video, LPR, CAD dispatch, and GIS in one platform for RTCC operations. Request a demo with real city data.'}
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 640px) {
            .mistakes-grid { grid-template-columns: 1fr !important; }
            section { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </div>
    </>
  )
}
