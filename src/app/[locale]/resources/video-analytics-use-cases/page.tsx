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
  return generatePageMetadata('videoAnalyticsUseCases', locale)
}

export default async function VideoAnalyticsUseCasesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#a855f7'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/video-analytics-use-cases/`
    : `${baseUrl}/resources/video-analytics-use-cases/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Casos de Uso de Analítica de Video' : 'Video Analytics Use Cases', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cuáles son los casos de uso más comunes de analítica de video en seguridad pública?',
      answer: 'Los casos de uso más comunes en seguridad pública son: (1) detección de intrusión perimetral — alertas cuando vehículos o personas cruzan zonas restringidas; (2) reconocimiento de placas (LPR) — identificación de vehículos robados o buscados en tiempo real; (3) conteo de aforo — monitoreo de densidad en espacios públicos y eventos masivos; (4) detección de comportamientos anómalos — merodeo, objetos abandonados, aglomeraciones; (5) análisis forense — búsqueda retroactiva de sospechosos por atributos visuales; (6) correlación con despacho CAD — vincular alertas de video directamente con la asignación de unidades.',
    },
    {
      question: '¿Cómo mejora la analítica de video el tiempo de respuesta de emergencias?',
      answer: 'La analítica de video reduce el tiempo de respuesta de dos formas: primero, detectando incidentes automáticamente antes de que alguien llame al 911 — perimeter breaches, vehículos en contramano, personas caídas — y generando alertas inmediatas al despachador. Segundo, proveyendo contexto visual al despachador en el momento del incidente: la cámara más cercana al evento se vincula automáticamente al registro de incidente en el CAD, reduciendo el tiempo de evaluación y mejorando la precisión del despacho. Los centros que integran video analytics con CAD reportan reducciones del 20-40% en tiempos de respuesta.',
    },
    {
      question: '¿Puede la analítica de video funcionar con cámaras existentes?',
      answer: 'Sí. Los sistemas de analítica de video modernos como KabatOne procesan el stream RTSP/ONVIF de cualquier cámara existente — sin necesidad de reemplazar hardware. La analítica se aplica en el servidor central (o en la nube) sobre el video ya instalado. La excepción son las funciones que requieren edge computing en la cámara (como detección a muy baja latencia) que sí necesitan cámaras con chip de IA embebido. Para la mayoría de los casos de uso en centros de mando, el procesamiento centralizado es suficiente y más flexible.',
    },
    {
      question: '¿Qué diferencia hay entre analítica de video y reconocimiento facial?',
      answer: 'La analítica de video es el término amplio que incluye todos los tipos de análisis automatizado de imágenes: detección de movimiento, conteo de personas, clasificación de objetos, seguimiento de vehículos y también reconocimiento facial. El reconocimiento facial es un subconjunto específico que identifica individuos comparando características biométricas faciales con una base de datos. Los demás tipos de analítica (LPR, detección de intrusión, análisis de comportamiento) no requieren identificar personas individualmente y tienen menos restricciones regulatorias que el reconocimiento facial.',
    },
    {
      question: '¿Qué infraestructura necesita un sistema de analítica de video a escala municipal?',
      answer: 'Para 200-500 cámaras con analítica en tiempo real se necesita: servidores GPU para procesamiento (8-16 GPU cores por cada 100 streams concurrentes), red con 2-4 Mbps por cámara a 1080p/30fps, almacenamiento para retención (30-90 días), y una plataforma de gestión que unifique alertas, mapa GIS y CAD. El dimensionamiento varía significativamente según la complejidad de los modelos de IA aplicados. KabatOne escala desde municipios pequeños con 50 cámaras hasta C5 estaduales con 10,000+ streams concurrentes.',
    },
    {
      question: '¿Cómo se integra la analítica de video con un centro C5 o CIOPS?',
      answer: 'En un C5 o CIOPS, las alertas de analítica de video no son notificaciones aisladas — se integran directamente en el mapa operativo GIS como eventos geolocalizados. El operador ve la alerta en el mapa con la cámara vinculada, evalúa el video en tiempo real, y puede despachar una unidad directamente desde la misma pantalla. KabatOne correlaciona automáticamente la alerta de video con el historial de incidentes de esa zona, los recursos disponibles más cercanos y las alertas LPR activas — entregando contexto completo en segundos.',
    },
    {
      question: '¿Cuál es el ROI de implementar analítica de video en seguridad pública?',
      answer: 'El retorno de inversión varía según la escala del despliegue, pero los centros de mando que implementan analítica de video reportan consistentemente: 30-50% reducción en el tiempo de detección de incidentes, 20-40% mejora en tiempos de respuesta de emergencia, 60-80% reducción en horas-persona dedicadas a revisión forense, y 15-25% reducción en incidentes recurrentes en zonas monitoreadas. Para un municipio con 200-500 cámaras, el punto de equilibrio típico es de 12-18 meses considerando la reducción de costos operativos y el aumento en la resolución de casos.',
    },
    {
      question: '¿Qué tan precisa es la analítica de video con IA en condiciones reales?',
      answer: 'La precisión varía significativamente según el tipo de detección y las condiciones ambientales. Los sistemas actuales logran: 95%+ de precisión en LPR durante el día (85-90% de noche con iluminación IR), 92-98% en detección de intrusión perimetral en condiciones controladas, 85-93% en conteo de personas en densidades moderadas, y 75-88% en detección de comportamientos anómalos. Los factores que más afectan la precisión son la calidad de la cámara, la iluminación, el ángulo de instalación y la calibración inicial del modelo. KabatOne permite ajustar los umbrales de sensibilidad por zona para balancear entre tasa de detección y falsos positivos.',
    },
    {
      question: '¿Puede la analítica de video funcionar sin conexión a internet?',
      answer: 'Sí, los despliegues en seguridad pública generalmente funcionan en redes cerradas (LAN/WAN privada) sin depender de internet público. El procesamiento de analítica se ejecuta en servidores GPU locales dentro del centro de mando. La arquitectura on-premise es preferida en gobierno y seguridad pública por razones de soberanía de datos y latencia. KabatOne soporta tanto despliegues completamente on-premise como arquitecturas híbridas donde el procesamiento principal es local pero la gestión y actualización de modelos de IA puede ser remota.',
    },
  ] : [
    {
      question: 'What are the most common video analytics use cases in public safety?',
      answer: 'The most common use cases in public safety are: (1) perimeter intrusion detection — alerts when vehicles or people cross restricted zones; (2) license plate recognition (LPR) — real-time identification of stolen or wanted vehicles; (3) crowd density counting — monitoring occupancy in public spaces and mass events; (4) behavioral anomaly detection — loitering, abandoned objects, crowd surges; (5) forensic analysis — retroactive search for suspects by visual attributes; (6) CAD dispatch correlation — linking video alerts directly to unit assignment in the dispatch system.',
    },
    {
      question: 'How does video analytics improve emergency response time?',
      answer: 'Video analytics reduces response time in two ways: first, by detecting incidents automatically before anyone calls 911 — perimeter breaches, wrong-way vehicles, fallen persons — and sending immediate alerts to the dispatcher. Second, by providing visual context to the dispatcher at the moment of the incident: the nearest camera to the event is automatically linked to the incident record in the CAD, reducing evaluation time and improving dispatch accuracy. Centers integrating video analytics with CAD report 20-40% reductions in response times.',
    },
    {
      question: 'Can video analytics work with existing cameras?',
      answer: "Yes. Modern video analytics systems like KabatOne process the RTSP/ONVIF stream from any existing camera — no hardware replacement needed. Analytics run on a central server (or in the cloud) on top of already-installed video infrastructure. The exception is functions requiring edge computing on the camera itself (like very low-latency detection) which do need cameras with embedded AI chips. For most command center use cases, centralized processing is sufficient and more flexible.",
    },
    {
      question: 'What is the difference between video analytics and facial recognition?',
      answer: 'Video analytics is the broad term covering all types of automated image analysis: motion detection, people counting, object classification, vehicle tracking — and facial recognition. Facial recognition is a specific subset that identifies individuals by comparing biometric facial features against a database. Other types of analytics (LPR, intrusion detection, behavioral analysis) do not require individual identification and face fewer regulatory restrictions than facial recognition.',
    },
    {
      question: 'What infrastructure does a municipal-scale video analytics system require?',
      answer: 'For 200-500 cameras with real-time analytics: GPU servers for processing (8-16 GPU cores per 100 concurrent streams), network with 2-4 Mbps per camera at 1080p/30fps, storage for retention (30-90 days), and a management platform that unifies alerts, GIS map, and CAD. Sizing varies significantly based on the complexity of AI models applied. KabatOne scales from small municipalities with 50 cameras to state-level C5 centers with 10,000+ concurrent streams.',
    },
    {
      question: 'How does video analytics integrate with a C5 or CIOPS command center?',
      answer: 'In a C5 or CIOPS, video analytics alerts are not isolated notifications — they integrate directly into the GIS operational map as geolocated events. The operator sees the alert on the map with the linked camera, reviews the live feed, and can dispatch a unit from the same screen. KabatOne automatically correlates the video alert with that zone\'s incident history, nearest available resources, and active LPR alerts — delivering complete context in seconds.',
    },
    {
      question: 'What is the ROI of implementing video analytics in public safety?',
      answer: 'ROI varies by deployment scale, but command centers implementing video analytics consistently report: 30-50% reduction in incident detection time, 20-40% improvement in emergency response times, 60-80% reduction in person-hours spent on forensic review, and 15-25% reduction in recurring incidents in monitored zones. For a municipality with 200-500 cameras, the typical breakeven point is 12-18 months considering reduced operational costs and increased case resolution rates.',
    },
    {
      question: 'How accurate is AI video analytics in real-world conditions?',
      answer: 'Accuracy varies significantly by detection type and environmental conditions. Current systems achieve: 95%+ LPR accuracy during daylight (85-90% at night with IR illumination), 92-98% in perimeter intrusion detection under controlled conditions, 85-93% in people counting at moderate densities, and 75-88% in behavioral anomaly detection. The main factors affecting accuracy are camera quality, lighting, installation angle, and initial model calibration. KabatOne allows sensitivity threshold adjustments per zone to balance detection rate against false positives.',
    },
    {
      question: 'Can video analytics work without internet connectivity?',
      answer: 'Yes, public safety deployments typically run on closed networks (private LAN/WAN) without depending on public internet. Analytics processing runs on local GPU servers within the command center. On-premise architecture is preferred in government and public safety for data sovereignty and latency reasons. KabatOne supports both fully on-premise deployments and hybrid architectures where primary processing is local but AI model management and updates can be remote.',
    },
  ]

  const artSchema = articleSchema(
    es ? 'Casos de Uso de Analítica de Video en Seguridad Pública' : 'Video Analytics Use Cases for Public Safety',
    es
      ? 'Los principales casos de uso de analítica de video en centros de mando y seguridad pública — detección de intrusión, LPR, conteo de aforo, comportamientos anómalos, análisis forense e integración con despacho CAD.'
      : 'The main video analytics use cases in command centers and public safety — intrusion detection, LPR, crowd counting, behavioral anomalies, forensic analysis, and CAD dispatch integration.',
    pageUrl,
    '2026-05-18'
  )

  const useCases = es ? [
    {
      icon: '🔒',
      title: 'Detección de Intrusión Perimetral',
      desc: 'Alertas automáticas cuando vehículos o personas cruzan líneas virtuales, entran en zonas restringidas o merodean en áreas sensibles. Aplica en aeropuertos, puertos, instalaciones críticas y perímetros municipales.',
      metric: '< 2s latencia de alerta',
    },
    {
      icon: '🚗',
      title: 'Reconocimiento de Placas (LPR)',
      desc: 'Identificación en tiempo real de vehículos robados, buscados o en lista negra al cruzar cualquier cámara de la red. Integrado con despacho CAD para asignación inmediata de unidades.',
      metric: '95%+ tasa de reconocimiento',
    },
    {
      icon: '👥',
      title: 'Conteo de Aforo y Densidad',
      desc: 'Monitoreo de ocupación en plazas, transporte público, estadios y eventos masivos. Alertas preventivas antes de que la densidad alcance niveles de riesgo. Datos en tiempo real para decisiones de despacho.',
      metric: 'Precisión ±5% en tiempo real',
    },
    {
      icon: '⚠️',
      title: 'Detección de Comportamientos Anómalos',
      desc: 'Modelos de IA entrenados para detectar merodeo prolongado, objetos abandonados, aglomeraciones repentinas, comportamiento agresivo y situaciones de riesgo antes de que escalen a incidente.',
      metric: '1-5% tasa de falsos positivos',
    },
    {
      icon: '🔍',
      title: 'Análisis Forense y Búsqueda Retroactiva',
      desc: 'Búsqueda retroactiva en horas o días de grabación por atributos visuales: color de ropa, tipo de vehículo, dirección de desplazamiento, zona geográfica. Reduce investigaciones de días a minutos.',
      metric: '10-100x más rápido que revisión manual',
    },
    {
      icon: '🚦',
      title: 'Gestión de Incidentes de Tráfico',
      desc: 'Detección automática de accidentes, vehículos detenidos, contramano e invasión de carriles exclusivos. Alertas coordinadas entre K-Traffic y K-Safety para respuesta integrada tráfico-emergencias.',
      metric: 'Detección en < 30s',
    },
    {
      icon: '🔥',
      title: 'Detección de Humo y Fuego',
      desc: 'Modelos especializados en detectar humo visible y llamas en cámaras exteriores antes de que los sensores de humo interiores se activen. Especialmente relevante para infraestructura crítica y zonas industriales.',
      metric: 'Detección temprana 2-5 min antes',
    },
    {
      icon: '📊',
      title: 'Correlación con Despacho CAD',
      desc: 'Integración directa de alertas de video con el sistema CAD — la cámara más cercana al incidente se vincula automáticamente al registro de despacho. El operador evalúa video y despacha unidades desde una sola pantalla.',
      metric: '20-40% reducción tiempo de respuesta',
    },
  ] : [
    {
      icon: '🔒',
      title: 'Perimeter Intrusion Detection',
      desc: 'Automatic alerts when vehicles or people cross virtual lines, enter restricted zones, or loiter in sensitive areas. Applies to airports, ports, critical infrastructure, and municipal perimeters.',
      metric: '< 2s alert latency',
    },
    {
      icon: '🚗',
      title: 'License Plate Recognition (LPR)',
      desc: 'Real-time identification of stolen, wanted, or blacklisted vehicles as they cross any camera in the network. Integrated with CAD dispatch for immediate unit assignment.',
      metric: '95%+ recognition rate',
    },
    {
      icon: '👥',
      title: 'Crowd Counting and Density',
      desc: 'Occupancy monitoring in plazas, public transit, stadiums, and mass events. Preventive alerts before density reaches risk levels. Real-time data for dispatch decisions.',
      metric: '±5% accuracy in real time',
    },
    {
      icon: '⚠️',
      title: 'Behavioral Anomaly Detection',
      desc: 'AI models trained to detect extended loitering, abandoned objects, sudden crowd surges, aggressive behavior, and risk situations before they escalate to incidents.',
      metric: '1-5% false positive rate',
    },
    {
      icon: '🔍',
      title: 'Forensic Analysis and Retroactive Search',
      desc: 'Retroactive search across hours or days of recordings by visual attributes: clothing color, vehicle type, direction of travel, geographic zone. Reduces investigations from days to minutes.',
      metric: '10-100x faster than manual review',
    },
    {
      icon: '🚦',
      title: 'Traffic Incident Management',
      desc: 'Automatic detection of accidents, stalled vehicles, wrong-way drivers, and lane violations. Coordinated alerts between K-Traffic and K-Safety for integrated traffic-emergency response.',
      metric: 'Detection in < 30s',
    },
    {
      icon: '🔥',
      title: 'Smoke and Fire Detection',
      desc: 'Specialized models detecting visible smoke and flames on outdoor cameras before interior smoke sensors activate. Especially relevant for critical infrastructure and industrial zones.',
      metric: 'Early detection 2-5 min ahead',
    },
    {
      icon: '📊',
      title: 'CAD Dispatch Correlation',
      desc: 'Direct integration of video alerts with the CAD system — the nearest camera to the incident is automatically linked to the dispatch record. Operator evaluates video and dispatches units from one screen.',
      metric: '20-40% response time reduction',
    },
  ]

  return (
    <>
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* BREADCRUMB */}
        <div style={{
          maxWidth: '860px', margin: '0 auto', padding: '20px 40px 0',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: 'var(--dim)' }}>{es ? 'Recursos' : 'Resources'}</span>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: ACCENT }}>{es ? 'Casos de Uso de Analítica de Video' : 'Video Analytics Use Cases'}</span>
        </div>

        {/* HERO */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 40px 64px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: '20px',
          }}>
            {es ? 'Guía Práctica' : 'Practical Guide'}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '28px',
          }}>
            {es
              ? 'Casos de Uso de Analítica de Video en Seguridad Pública'
              : 'Video Analytics Use Cases for Public Safety'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, maxWidth: '720px' }}>
            {es
              ? 'Los 8 principales casos de uso de analítica de video en centros de mando y seguridad pública — con métricas de rendimiento, requisitos de infraestructura y cómo cada uno se integra con despacho CAD y GIS.'
              : 'The 8 main video analytics use cases in command centers and public safety — with performance metrics, infrastructure requirements, and how each integrates with CAD dispatch and GIS.'}
          </p>
        </section>

        {/* WHAT IS VIDEO ANALYTICS — definition strip for head query */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '48px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '20px',
            }}>
              {es ? '¿Qué es el Software de Analítica de Video?' : 'What Is Video Analytics Software?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '16px' }}>
              {es
                ? 'El software de analítica de video utiliza inteligencia artificial y visión por computadora para analizar automáticamente flujos de video en tiempo real o grabaciones almacenadas. A diferencia de los sistemas de vigilancia tradicionales que dependen de operadores humanos revisando pantallas, la analítica de video detecta eventos, clasifica objetos, identifica patrones de comportamiento y genera alertas sin intervención manual. En seguridad pública, esto transforma las cámaras de herramientas pasivas de grabación en sensores inteligentes que alimentan directamente los flujos operativos del centro de mando.'
                : 'Video analytics software uses artificial intelligence and computer vision to automatically analyze live video streams or stored recordings. Unlike traditional surveillance systems that rely on human operators watching screens, video analytics detects events, classifies objects, identifies behavioral patterns, and generates alerts without manual intervention. In public safety, this transforms cameras from passive recording tools into intelligent sensors that feed directly into command center operational workflows.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'El mercado global de analítica de video se proyecta a superar los $20 mil millones para 2027, impulsado por la adopción en ciudades inteligentes, transporte público y seguridad ciudadana. Los sistemas modernos procesan 100+ flujos de video simultáneamente en servidores GPU centralizados, con modelos de IA especializados para cada tipo de detección — desde reconocimiento de placas (LPR) hasta análisis de multitudes.'
                : 'The global video analytics market is projected to exceed $20 billion by 2027, driven by adoption in smart cities, public transit, and citizen safety. Modern systems process 100+ video streams simultaneously on centralized GPU servers, with specialized AI models for each detection type — from license plate recognition (LPR) to crowd analysis.'}
            </p>
          </div>
        </section>

        {/* VIDEO ANALYTICS vs TRADITIONAL SURVEILLANCE */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '48px 0', background: 'rgba(168,85,247,0.02)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(24px, 3vw, 34px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Analítica de Video vs. Vigilancia Tradicional' : 'Video Analytics vs. Traditional Surveillance'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {(es ? [
                { trad: 'Operadores monitorean pantallas manualmente — fatiga visual después de 20 minutos', smart: 'IA monitorea 24/7 sin fatiga — detecta eventos que el ojo humano pierde' },
                { trad: 'Las grabaciones se revisan después del incidente (horas o días)', smart: 'Detección en tiempo real con alertas < 2 segundos al operador' },
                { trad: 'Sin contexto: el operador ve video sin datos adicionales', smart: 'Contexto integrado: historial de zona, recursos cercanos, alertas LPR activas' },
                { trad: 'Escalabilidad limitada — cada cámara adicional requiere otro operador', smart: 'Un servidor GPU procesa 100+ cámaras simultáneamente con múltiples modelos de IA' },
              ] : [
                { trad: 'Operators monitor screens manually — visual fatigue after 20 minutes', smart: 'AI monitors 24/7 without fatigue — catches events human eyes miss' },
                { trad: 'Recordings reviewed after the incident (hours or days)', smart: 'Real-time detection with < 2-second alerts to the operator' },
                { trad: 'No context: operator sees video without additional data', smart: 'Integrated context: zone history, nearby resources, active LPR alerts' },
                { trad: 'Limited scalability — each additional camera needs another operator', smart: 'One GPU server processes 100+ cameras simultaneously with multiple AI models' },
              ]).map((row, i) => (
                <div key={i} style={{ display: 'contents' }}>
                  <div style={{
                    background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)',
                    borderRadius: '10px', padding: '16px 20px',
                  }}>
                    <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ef4444', marginBottom: '8px' }}>
                      {es ? 'TRADICIONAL' : 'TRADITIONAL'}
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.6 }}>{row.trad}</p>
                  </div>
                  <div style={{
                    background: `rgba(168,85,247,0.06)`, border: `1px solid rgba(168,85,247,0.15)`,
                    borderRadius: '10px', padding: '16px 20px',
                  }}>
                    <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: ACCENT, marginBottom: '8px' }}>
                      {es ? 'CON ANALÍTICA IA' : 'WITH AI ANALYTICS'}
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.6 }}>{row.smart}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES GRID */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '36px',
            }}>
              {es
                ? '8 Casos de Uso de Analítica de Video para Centros de Mando'
                : '8 Video Analytics Use Cases for Command Centers'}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {useCases.map((uc, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '48px 1fr auto',
                  gap: '20px', alignItems: 'start',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border)',
                  borderLeft: `3px solid ${ACCENT}`,
                  borderRadius: '10px', padding: '24px 28px',
                }}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '10px',
                    background: `color-mix(in srgb, ${ACCENT} 12%, transparent)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px', flexShrink: 0,
                  }}>
                    {uc.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                      fontSize: '20px', color: 'var(--white)', marginBottom: '8px',
                    }}>
                      {uc.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>
                      {uc.desc}
                    </p>
                  </div>
                  <div style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '10px',
                    letterSpacing: '0.08em', color: ACCENT,
                    background: `color-mix(in srgb, ${ACCENT} 8%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${ACCENT} 25%, transparent)`,
                    borderRadius: '6px', padding: '6px 10px',
                    whiteSpace: 'nowrap', alignSelf: 'flex-start',
                  }}>
                    {uc.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT INTEGRATES */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0', background: `color-mix(in srgb, ${ACCENT} 3%, transparent)` }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '20px',
            }}>
              {es
                ? 'Cómo se Integra la Analítica de Video con el Sistema de Mando'
                : 'How Video Analytics Integrates with the Command System'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '32px' }}>
              {es
                ? 'En un sistema aislado, la analítica de video genera alertas que nadie revisa. En una plataforma unificada, cada alerta desencadena un flujo operativo completo: el evento se geolocaliza en el mapa GIS, la cámara más cercana se vincula al registro CAD, y el despachador tiene contexto visual completo en segundos — sin cambiar de pantalla.'
                : "In an isolated system, video analytics generates alerts that no one reviews. In a unified platform, every alert triggers a complete operational flow: the event is geolocated on the GIS map, the nearest camera is linked to the CAD record, and the dispatcher has full visual context in seconds — without switching screens."}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {[
                {
                  step: '01',
                  title: es ? 'Alerta detectada' : 'Alert detected',
                  desc: es ? 'La analítica de video detecta el evento y genera una alerta con coordenadas GPS y clip de video.' : 'Video analytics detects the event and generates an alert with GPS coordinates and video clip.',
                },
                {
                  step: '02',
                  title: es ? 'Mapa GIS actualizado' : 'GIS map updated',
                  desc: es ? 'El evento aparece en el mapa operativo del centro de mando con la cámara vinculada y el historial de la zona.' : 'The event appears on the command center operational map with the linked camera and zone history.',
                },
                {
                  step: '03',
                  title: es ? 'Despacho en una pantalla' : 'Dispatch in one screen',
                  desc: es ? 'El despachador evalúa el video, consulta recursos disponibles y despacha la unidad más cercana — todo desde K-Safety.' : 'The dispatcher reviews the video, checks available resources, and dispatches the nearest unit — all from K-Safety.',
                },
              ].map((s, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderRadius: '10px', padding: '24px',
                }}>
                  <div style={{
                    fontFamily: 'DM Mono, monospace', fontWeight: 700,
                    fontSize: '13px', color: ACCENT, marginBottom: '10px',
                  }}>
                    {s.step}
                  </div>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '17px', color: 'var(--white)', marginBottom: '8px',
                  }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.65 }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Product links */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '32px' }}>
              {[
                { href: '/k-video', label: 'K-Video', color: ACCENT, desc: es ? 'VMS + analítica IA' : 'VMS + AI analytics' },
                { href: '/k-safety', label: 'K-Safety', color: '#3b82f6', desc: es ? 'Mapa GIS operativo' : 'Operational GIS map' },
                { href: '/k-dispatch', label: 'K-Dispatch', color: '#f59e0b', desc: es ? 'Despacho CAD' : 'CAD dispatch' },
              ].map((p, i) => (
                <Link key={i} href={p.href} style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                  borderTop: `3px solid ${p.color}`, borderRadius: '10px',
                  padding: '16px', textDecoration: 'none', display: 'block',
                }}>
                  <div style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '16px', color: 'var(--white)', marginBottom: '4px',
                  }}>
                    {p.label}
                  </div>
                  <div style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '10px',
                    letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)',
                  }}>
                    {p.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px', padding: '24px 28px',
                }}>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '18px', color: 'var(--white)', marginBottom: '12px',
                  }}>
                    {faq.question}
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--dim)', lineHeight: 1.75 }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED RESOURCES */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
              fontSize: '22px', color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Recursos Relacionados' : 'Related Resources'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
              {[
                { href: '/resources/cctv-video-analytics', label: es ? '¿Qué es la Analítica de Video?' : 'What Is Video Analytics?' },
                { href: '/resources/what-is-video-management-software', label: es ? 'Guía VMS Software' : 'VMS Software Guide' },
                { href: '/resources/what-is-a-real-time-crime-center', label: es ? '¿Qué es un Centro de Control en Tiempo Real?' : 'What Is a Real-Time Crime Center?' },
                { href: '/resources/what-is-situational-awareness-software', label: es ? '¿Qué es Software de Conciencia Situacional?' : 'What Is Situational Awareness Software?' },
                { href: '/integrations/lpr', label: es ? 'Integración LPR' : 'LPR Integration' },
                { href: '/integrations/face-recognition', label: es ? 'Reconocimiento Facial' : 'Face Recognition' },
                { href: '/k-video', label: es ? 'K-Video: VMS + Analítica IA' : 'K-Video: VMS + AI Analytics' },
              ].map((link, i) => (
                <Link key={i} href={link.href} style={{
                  display: 'block', padding: '16px 20px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border)', borderRadius: '10px',
                  fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none', lineHeight: 1.5,
                }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>

      <CTASection
        es={es}
        h2={es ? 'Implementa Analítica de Video en tu Centro de Mando' : 'Deploy Video Analytics in Your Command Center'}
        subtitle={es
          ? 'KabatOne integra analítica de video con despacho CAD, GIS en tiempo real y gestión de incidentes en una sola plataforma operativa.'
          : 'KabatOne integrates video analytics with CAD dispatch, real-time GIS, and incident management in one unified operational platform.'}
        cta1={es ? 'Solicita una Demo' : 'Book a Demo'}
        cta2={es ? 'Contactar Ventas' : 'Contact Sales'}
      />

      <Footer es={es} />
    </>
  )
}
