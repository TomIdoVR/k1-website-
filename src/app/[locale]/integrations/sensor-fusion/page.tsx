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
  return generatePageMetadata('integrationSensorFusion', locale)
}

export default async function SensorFusionIntegrationPage({
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
          question: '¿Qué es la fusión de sensores en seguridad pública?',
          answer:
            'La fusión de sensores es el proceso de combinar datos de múltiples fuentes heterogéneas — cámaras de video, sensores de gunshot detection, sensores IoT ambientales, sismógrafos, lectores de placas, datos de redes sociales georeferenciadas — para crear una imagen operativa más completa y confiable que la que cualquier sensor individual puede proveer. El término viene de tecnología militar y aeronáutica, donde combinar radar, sonar e imagen infrarroja daba una "conciencia situacional" mucho más precisa que cualquier tecnología individual.',
        },
        {
          question: '¿Qué tipos de sensores puede integrar KabatOne?',
          answer:
            'KabatOne integra sensores mediante APIs estándar y protocolos IoT. Los tipos de sensores más comunes integrados en implementaciones actuales incluyen: detectores de gunshots acústicos (ShotSpotter, SST, Sentri), sensores de calidad del aire, sensores de nivel de agua para alertas de inundación, sismógrafos urbanos, sensores de temperatura y humedad para alertas de calor extremo, lectores de placas vehiculares (LPR), cámaras de video con análisis de IA, y feeds de redes sociales con geolocalización. Si el sensor tiene API o genera datos en formato estándar, puede integrarse.',
        },
        {
          question: '¿Cómo reduce la fusión de sensores los falsos positivos?',
          answer:
            'Los sistemas individuales tienen tasas de falso positivo que pueden ser manejables en aislamiento pero problemáticas en volumen. Un detector de gunshots puede generar alertas por fuegos artificiales, neumáticos reventados o puertas de metal. Un sensor de movimiento puede activarse por animales o personal autorizado. Cuando múltiples sensores independientes generan alertas relacionadas en el mismo lugar y tiempo — gunshot + cámara detecta movimiento anormal + LPR ve un vehículo sospechoso — la probabilidad de que sea un evento real aumenta dramáticamente. KabatOne aplica motor de correlación configurable que solo genera alertas de alta prioridad cuando múltiples fuentes confirman el evento.',
        },
        {
          question: '¿Qué tan rápido puede correlacionar eventos el sistema?',
          answer:
            'El motor de correlación de KabatOne procesa eventos en tiempo real con latencia menor a 500 milisegundos desde la recepción del primer evento. La correlación temporal es configurable: el sistema puede agrupar eventos que ocurran dentro de una ventana de 30 segundos a 5 minutos y dentro de un radio geográfico de 50 a 500 metros, dependiendo de los protocolos operativos del organismo. Para eventos de alta prioridad como gunshots, la alerta consolidada llega al operador en menos de 2 segundos.',
        },
        {
          question: '¿La fusión de sensores requiere infraestructura especial?',
          answer:
            'No. KabatOne está diseñado para funcionar con la infraestructura de red existente. Los sensores se conectan a través de internet o redes privadas usando protocolos estándar (MQTT, HTTP/REST, ONVIF). El procesamiento ocurre en la plataforma KabatOne, que puede estar en la nube, en servidores on-premise del municipio, o en configuración híbrida. Para sensores IoT de bajo consumo en áreas remotas, KabatOne soporta conectividad LoRaWAN y LTE/4G para transmitir datos a la plataforma central.',
        },
        {
          question: '¿Puede el sistema aprender y mejorar con el tiempo?',
          answer:
            'Sí. El motor de correlación de KabatOne incluye capacidades de aprendizaje adaptativo: el sistema registra qué correlaciones resultaron en incidentes reales confirmados y cuáles fueron falsos positivos, y ajusta automáticamente los pesos y umbrales de confianza. Con 3-6 meses de operación en un entorno específico, la tasa de falsos positivos en alertas consolidadas puede reducirse hasta un 60% respecto a los valores iniciales. Los operadores también pueden retroalimentar manualmente el sistema marcando alertas como válidas o inválidas.',
        },
      ]
    : [
        {
          question: 'What is sensor fusion in public safety?',
          answer:
            'Sensor fusion is the process of combining data from multiple heterogeneous sources — video cameras, gunshot detection sensors, environmental IoT sensors, seismographs, license plate readers, georeferenced social media data — to create a more complete and reliable operational picture than any single sensor can provide. The term comes from military and aeronautical technology, where combining radar, sonar, and infrared imaging gave much more accurate "situational awareness" than any individual technology.',
        },
        {
          question: 'What types of sensors can KabatOne integrate?',
          answer:
            'KabatOne integrates sensors via standard APIs and IoT protocols. The most common sensor types integrated in current deployments include: acoustic gunshot detectors (ShotSpotter, SST, Sentri), air quality sensors, water level sensors for flood alerts, urban seismographs, temperature and humidity sensors for extreme heat alerts, license plate readers (LPR), video cameras with AI analytics, and georeferenced social media feeds. If the sensor has an API or generates data in a standard format, it can be integrated.',
        },
        {
          question: 'How does sensor fusion reduce false positives?',
          answer:
            'Individual systems have false positive rates that can be manageable in isolation but problematic at volume. A gunshot detector may generate alerts for fireworks, blown tires, or slamming metal doors. A motion sensor may trigger for animals or authorized personnel. When multiple independent sensors generate related alerts at the same location and time — gunshot + camera detects abnormal movement + LPR sees a suspicious vehicle — the probability that it is a real event increases dramatically. KabatOne applies a configurable correlation engine that only generates high-priority alerts when multiple sources confirm the event.',
        },
        {
          question: 'How fast can the system correlate events?',
          answer:
            'KabatOne\'s correlation engine processes events in real time with latency under 500 milliseconds from receipt of the first event. Temporal correlation is configurable: the system can group events occurring within a 30-second to 5-minute window and within a geographic radius of 50 to 500 meters, depending on the agency\'s operational protocols. For high-priority events like gunshots, the consolidated alert reaches the operator in under 2 seconds.',
        },
        {
          question: 'Does sensor fusion require special infrastructure?',
          answer:
            'No. KabatOne is designed to work with existing network infrastructure. Sensors connect via internet or private networks using standard protocols (MQTT, HTTP/REST, ONVIF). Processing happens in the KabatOne platform, which can be in the cloud, on the municipality\'s on-premise servers, or in a hybrid configuration. For low-power IoT sensors in remote areas, KabatOne supports LoRaWAN and LTE/4G connectivity to transmit data to the central platform.',
        },
        {
          question: 'Can the system learn and improve over time?',
          answer:
            'Yes. KabatOne\'s correlation engine includes adaptive learning capabilities: the system records which correlations resulted in confirmed real incidents and which were false positives, and automatically adjusts weights and confidence thresholds. With 3–6 months of operation in a specific environment, the false positive rate in consolidated alerts can be reduced by up to 60% from initial values. Operators can also manually provide feedback by marking alerts as valid or invalid.',
        },
      ]

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Integraciones' : 'Integrations', url: es ? 'https://kabatone.com/es/integrations/' : 'https://kabatone.com/integrations/' },
    {
      name: es ? 'Fusión de Sensores' : 'Sensor Fusion',
      url: es ? 'https://kabatone.com/es/integrations/sensor-fusion/' : 'https://kabatone.com/integrations/sensor-fusion/',
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
  const pStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 300,
    color: 'var(--dim)',
    lineHeight: 1.8,
    marginBottom: '20px',
  }

  const sensorTypes = es
    ? [
        { label: 'Detección de Disparos', desc: 'Detectores acústicos que triangular el origen de disparos en segundos. Integración con ShotSpotter, SST Sentri, Shotpoint y sistemas compatibles.', color: '#ef4444' },
        { label: 'Sensores Ambientales IoT', desc: 'Calidad del aire (PM2.5, CO, NO2), temperatura, humedad, nivel de agua. Alertas automáticas por umbrales configurables por zona.', color: '#22c55e' },
        { label: 'Sismógrafos Urbanos', desc: 'Detección temprana de sismos y monitoreo de vibraciones en infraestructura crítica. Integración con redes sismológicas nacionales y locales.', color: '#f59e0b' },
        { label: 'Video con IA', desc: 'Cámaras con análisis integrado que generan eventos estructurados: persona en zona restringida, vehículo detenido en carril, multitud anormal.', color: '#a855f7' },
        { label: 'LPR y Biometría', desc: 'Lectores de placas vehiculares y cámaras con reconocimiento facial o de comportamiento integrados en el flujo de correlación de sensores.', color: '#06b6d4' },
        { label: 'Datos Sociales Georeferenciados', desc: 'Monitoreo de redes sociales con geolocalización para detección temprana de disturbios, accidentes o emergencias reportados por ciudadanos.', color: '#3b82f6' },
      ]
    : [
        { label: 'Gunshot Detection', desc: 'Acoustic detectors that triangulate the origin of gunshots in seconds. Integration with ShotSpotter, SST Sentri, Shotpoint, and compatible systems.', color: '#ef4444' },
        { label: 'Environmental IoT Sensors', desc: 'Air quality (PM2.5, CO, NO2), temperature, humidity, water level. Automatic alerts by configurable thresholds per zone.', color: '#22c55e' },
        { label: 'Urban Seismographs', desc: 'Early earthquake detection and vibration monitoring in critical infrastructure. Integration with national and local seismological networks.', color: '#f59e0b' },
        { label: 'AI Video', desc: 'Cameras with integrated analytics that generate structured events: person in restricted zone, stopped vehicle in lane, abnormal crowd.', color: '#a855f7' },
        { label: 'LPR & Biometrics', desc: 'License plate readers and cameras with facial or behavioral recognition integrated into the sensor correlation flow.', color: '#06b6d4' },
        { label: 'Georeferenced Social Data', desc: 'Social media monitoring with geolocation for early detection of disturbances, accidents, or emergencies reported by citizens.', color: '#3b82f6' },
      ]

  const useCases = es
    ? [
        { title: 'Respuesta a Disparos', desc: 'El detector acústico identifica disparos y alerta al sistema. En menos de 2 segundos, K-Safety activa automáticamente las cámaras más cercanas a la ubicación triangulada, K-Dispatch notifica a las unidades disponibles, y el analista tiene un video en vivo del área — todo antes de que llegue la primera llamada al 911.' },
        { title: 'Intrusión de Perímetro', desc: 'En instalaciones críticas — subestaciones, centros de datos, instalaciones portuarias — los sensores de movimiento, cámaras de video y lectores de acceso vehicular trabajan juntos. Un movimiento detectado por sensor se confirma con video, y si el vehículo no está en la lista de acceso autorizado, se genera una alerta consolidada de alta prioridad.' },
        { title: 'Emergencias Ambientales', desc: 'Un aumento anormal en las lecturas de CO en un barrio, combinado con múltiples reportes en redes sociales mencionando un olor extraño, puede indicar una fuga de gas. La correlación de sensor IoT + datos sociales permite una detección más temprana que esperar llamadas al 911, posibilitando una respuesta preventiva.' },
      ]
    : [
        { title: 'Gunshot Response', desc: 'The acoustic detector identifies gunshots and alerts the system. In under 2 seconds, K-Safety automatically activates the nearest cameras to the triangulated location, K-Dispatch notifies available units, and the analyst has live video of the area — all before the first 911 call arrives.' },
        { title: 'Perimeter Intrusion', desc: 'At critical facilities — substations, data centers, port installations — motion sensors, video cameras, and vehicle access readers work together. Movement detected by sensor is confirmed with video, and if the vehicle is not on the authorized access list, a high-priority consolidated alert is generated.' },
        { title: 'Environmental Emergencies', desc: 'An abnormal spike in CO readings in a neighborhood, combined with multiple social media reports mentioning a strange smell, may indicate a gas leak. IoT sensor + social data correlation enables earlier detection than waiting for 911 calls, enabling a preventive response.' },
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
                ? 'Fusión de Sensores para Seguridad Pública'
                : 'Sensor Fusion Platform for Public Safety',
              es
                ? 'Cómo KabatOne integra detección de disparos, sensores IoT, datos ambientales y video en una sola vista de conciencia situacional.'
                : 'How KabatOne fuses gunshot detection, IoT sensors, environmental data, and video into a single situational awareness view.',
              es ? 'https://kabatone.com/es/integrations/sensor-fusion/' : 'https://kabatone.com/integrations/sensor-fusion/',
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
            <span style={{ color: 'var(--dim)' }}>
              {es ? 'Integraciones' : 'Integrations'}
            </span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>
              {es ? 'Fusión de Sensores' : 'Sensor Fusion'}
            </span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Integración de Tecnología' : 'Technology Integration'}
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
                ? 'Fusión de Sensores: Conciencia Situacional Unificada desde Cada Fuente'
                : 'Sensor Fusion: Unified Situational Awareness from Every Input'}
            </h1>
            <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.8, maxWidth: '720px', marginBottom: '0' }}>
              {es
                ? 'Un disparo aislado, un sensor de calidad del aire fuera de rango, y tres reportes en redes sociales sobre un incidente en el mismo bloque. Por separado, son alertas individuales. Juntos, son evidencia de una emergencia. KabatOne correlaciona automáticamente múltiples fuentes de sensores para darte la imagen completa — no fragmentos.'
                : 'An isolated gunshot, an out-of-range air quality sensor, and three social media reports about an incident on the same block. Separately, they are individual alerts. Together, they are evidence of an emergency. KabatOne automatically correlates multiple sensor sources to give you the complete picture — not fragments.'}
            </p>
          </div>
        </section>

        {/* ── WHAT IS SENSOR FUSION ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? '¿Qué Es la Fusión de Sensores?' : 'What Is Sensor Fusion?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'La fusión de sensores es la integración y correlación automatizada de datos de múltiples fuentes heterogéneas para crear una imagen operativa más completa y confiable que cualquier sensor individual. El principio es simple: ningún sensor individual es perfecto. Las cámaras no "escuchan". Los detectores de gunshots no "ven". Los sensores ambientales no detectan comportamiento sospechoso. Pero cuando todos trabajan juntos y sus datos se correlacionan en tiempo real, el resultado es una comprensión situacional cualitativamente diferente.'
                : 'Sensor fusion is the automated integration and correlation of data from multiple heterogeneous sources to create a more complete and reliable operational picture than any single sensor. The principle is simple: no single sensor is perfect. Cameras don\'t "hear." Gunshot detectors don\'t "see." Environmental sensors don\'t detect suspicious behavior. But when they all work together and their data is correlated in real time, the result is a qualitatively different situational understanding.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'En operaciones de seguridad pública, la fusión de sensores reduce los tiempos de detección y respuesta porque el sistema identifica patrones que los humanos no podrían detectar manualmente. Un solo disparo puede ser ambiguo — fuegos artificiales, un neumático que revienta. Pero un disparo acústico confirmado + movimiento anormal en la cámara del área + un vehículo con alerta activa que pasa por el LPR cercano — ese patrón compuesto es inequívoco, y KabatOne puede generar una alerta consolidada en menos de 2 segundos.'
                : 'In public safety operations, sensor fusion reduces detection and response times because the system identifies patterns that humans could not manually detect. A single gunshot can be ambiguous — fireworks, a tire blowing out. But an acoustic gunshot confirmation + abnormal movement on the area camera + a vehicle with an active alert passing the nearby LPR — that composite pattern is unambiguous, and KabatOne can generate a consolidated alert in under 2 seconds.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'A diferencia de los sistemas PSIM (Physical Security Information Management) que simplemente agregan alarmas de sistemas silados, KabatOne aplica correlación inteligente: los eventos solo se consolidan en una alerta cuando múltiples fuentes independientes los confirman, con pesos de confianza y ventanas temporales configurables. Esto reduce dramáticamente los falsos positivos sin perder los eventos reales.'
                : 'Unlike PSIM (Physical Security Information Management) systems that simply aggregate alarms from siloed systems, KabatOne applies intelligent correlation: events are only consolidated into an alert when multiple independent sources confirm them, with configurable confidence weights and time windows. This dramatically reduces false positives without missing real events.'}
            </p>
          </div>
        </section>

        {/* ── SENSOR TYPES ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Sensores que KabatOne Integra' : 'Sensors KabatOne Integrates'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne conecta sensores mediante APIs estándar (REST, MQTT, ONVIF) y protocolos IoT. Los tipos de sensores más comunes en implementaciones actuales:'
                : 'KabatOne connects sensors via standard APIs (REST, MQTT, ONVIF) and IoT protocols. The most common sensor types in current deployments:'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="sensor-grid">
              {sensorTypes.map((sensor, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0b1628',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    borderLeft: `3px solid ${sensor.color}`,
                    padding: '20px 24px',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    marginBottom: '8px',
                    marginTop: '0',
                    color: 'var(--white)',
                  }}>
                    {sensor.label}
                  </h3>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>
                    {sensor.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW FUSION WORKS ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Cómo Funciona el Motor de Correlación' : 'How the Correlation Engine Works'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'El motor de correlación de KabatOne procesa todos los eventos de sensores en tiempo real y aplica reglas de correlación configurables:'
                : 'KabatOne\'s correlation engine processes all sensor events in real time and applies configurable correlation rules:'}
            </p>
            {(es
              ? [
                  { step: '01', title: 'Ingestión en Tiempo Real', desc: 'Todos los eventos de sensores llegan al motor de correlación con latencia inferior a 500 ms. Cada evento incluye timestamp, coordenadas geográficas, tipo de sensor y nivel de confianza del sensor de origen.' },
                  { step: '02', title: 'Normalización y Enriquecimiento', desc: 'Los datos de sensores heterogéneos se normalizan a un formato común. Cada evento se enriquece automáticamente con contexto geográfico: zona de la ciudad, radio de cobertura LPR cercano, cámaras más próximas.' },
                  { step: '03', title: 'Correlación Espacio-Temporal', desc: 'El motor agrupa eventos dentro de ventanas configurables de tiempo (ej: 60 segundos) y distancia (ej: 200 metros). Eventos de múltiples sensores que se solapan temporal y espacialmente se correlacionan automáticamente.' },
                  { step: '04', title: 'Puntuación de Confianza', desc: 'Cada correlación recibe una puntuación compuesta basada en: número de sensores confirming, tipos de sensores involucrados, y precisión histórica de cada sensor en esa zona. Las correlaciones por encima del umbral configurado generan alertas.' },
                  { step: '05', title: 'Alerta Consolidada al Operador', desc: 'El operador recibe una sola alerta consolidada con toda la información relevante: qué sensores confirmaron el evento, el mapa con la ubicación exacta, el video en vivo del área, y las unidades disponibles más cercanas.' },
                ]
              : [
                  { step: '01', title: 'Real-Time Ingestion', desc: 'All sensor events arrive at the correlation engine with latency under 500 ms. Each event includes timestamp, geographic coordinates, sensor type, and confidence level from the source sensor.' },
                  { step: '02', title: 'Normalization & Enrichment', desc: 'Heterogeneous sensor data is normalized to a common format. Each event is automatically enriched with geographic context: city zone, nearby LPR coverage radius, closest cameras.' },
                  { step: '03', title: 'Spatio-Temporal Correlation', desc: 'The engine groups events within configurable windows of time (e.g., 60 seconds) and distance (e.g., 200 meters). Events from multiple sensors that overlap temporally and spatially are automatically correlated.' },
                  { step: '04', title: 'Confidence Scoring', desc: 'Each correlation receives a composite score based on: number of confirming sensors, types of sensors involved, and historical precision of each sensor in that zone. Correlations above the configured threshold generate alerts.' },
                  { step: '05', title: 'Consolidated Alert to Operator', desc: 'The operator receives a single consolidated alert with all relevant information: which sensors confirmed the event, the map with exact location, live video of the area, and the closest available units.' },
                ]
            ).map((s) => (
              <div
                key={s.step}
                style={{
                  display: 'flex',
                  gap: '24px',
                  background: '#0b1628',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  padding: '24px 28px',
                  marginBottom: '16px',
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
                  {s.step}
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
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Casos de Uso en Operaciones Reales' : 'Real-World Operational Use Cases'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Cómo la fusión de sensores mejora la respuesta operativa en escenarios reales:'
                : 'How sensor fusion improves operational response in real-world scenarios:'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {useCases.map((uc, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0b1628',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    borderLeft: `3px solid ${ACCENT}`,
                    padding: '24px 28px',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    marginBottom: '10px',
                    marginTop: '0',
                  }}>
                    {uc.title}
                  </h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>
                    {uc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED PRODUCTS ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Productos Relacionados' : 'Related Products'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>
              {es ? 'KabatOne para Operaciones de Fusión de Sensores' : 'KabatOne for Sensor Fusion Operations'}
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '28px' }}>
              {es
                ? 'Los módulos de KabatOne que reciben y procesan datos de sensores fusionados:'
                : 'KabatOne modules that receive and process fused sensor data:'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'GIS + Correlación' : 'GIS + Correlation', color: '#3b82f6' },
                { href: '/k-video', label: 'K-Video', desc: es ? 'Video + IA' : 'Video + AI', color: '#a855f7' },
                { href: '/k-traffic', label: 'K-Traffic', desc: es ? 'Tráfico + Sensores' : 'Traffic + Sensors', color: '#06b6d4' },
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD Dispatch', color: '#ef4444' },
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
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: p.color }} />
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
              {es ? 'Preguntas Comunes sobre Fusión de Sensores' : 'Common Sensor Fusion Questions'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: '#0b1220', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px 28px' }}>
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
                { href: '/integrations/lpr', label: es ? 'Integración de Reconocimiento de Placas (LPR)' : 'License Plate Recognition (LPR) Integration' },
                { href: '/integrations/face-recognition', label: es ? 'Integración de Reconocimiento Facial' : 'Face Recognition Integration' },
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
          h2={es ? 'Conecta Todos tus Sensores en una Sola Vista' : 'Connect All Your Sensors in One View'}
          subtitle={es
            ? 'KabatOne integra sensores de gunshot, IoT, video y LPR en una plataforma de conciencia situacional unificada. Solicita una demo con datos de ciudad real.'
            : 'KabatOne integrates gunshot, IoT, video, and LPR sensors in a unified situational awareness platform. Request a demo with real city data.'}
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 640px) {
            .sensor-grid { grid-template-columns: 1fr !important; }
            section { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </div>
    </>
  )
}
