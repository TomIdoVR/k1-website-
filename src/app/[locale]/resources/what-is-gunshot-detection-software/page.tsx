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
  return generatePageMetadata('whatIsGunshotDetectionSoftware', locale)
}

export default async function WhatIsGunshotDetectionSoftwarePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#06b6d4'

  /* ── FAQ data ── */
  const faqs = es
    ? [
        {
          question: '¿Qué es un software de detección de disparos?',
          answer:
            'Un software de detección de disparos es un sistema que utiliza sensores acústicos instalados en postes, edificios y otras estructuras urbanas para detectar automáticamente el sonido de disparos de arma de fuego, triangular su ubicación exacta y alertar a los centros de mando en segundos — sin depender de que alguien llame al 911. El sistema clasifica el tipo de evento (disparo único, ráfaga, tipo de arma estimado) y geolocaliza el origen con precisión de metros.',
        },
        {
          question: '¿Cuál es la diferencia entre detección de disparos y vigilancia por video?',
          answer:
            'La vigilancia por video depende de que una cámara esté apuntando al lugar exacto del disparo y de que un operador lo detecte visualmente o la analítica de IA reconozca el evento. La detección acústica de disparos funciona independientemente de la línea de visión — detecta el sonido del disparo incluso si no hay cámaras en la zona, de noche, o en condiciones de visibilidad reducida. La combinación de ambos sistemas es la más efectiva: el sensor acústico detecta y localiza, y las cámaras cercanas se activan automáticamente para verificar visualmente.',
        },
        {
          question: '¿Cómo funciona la triangulación acústica?',
          answer:
            'Los sensores acústicos se instalan en una red distribuida por la ciudad, típicamente a intervalos de 300–500 metros. Cuando ocurre un disparo, múltiples sensores detectan la onda sonora en momentos ligeramente diferentes. El software calcula la diferencia de tiempo de llegada (TDOA — Time Difference of Arrival) entre los sensores para triangular el punto de origen del disparo con una precisión típica de 10–25 metros. Todo el proceso — detección, triangulación y alerta — ocurre en menos de 60 segundos.',
        },
        {
          question: '¿Qué precisión tienen estos sistemas?',
          answer:
            'Los sistemas modernos de detección de disparos reportan tasas de detección del 90–97% para disparos al aire libre, con tasas de falsos positivos por debajo del 5% en entornos urbanos bien calibrados. La precisión de geolocalización es típicamente de 10–25 metros, suficiente para dirigir las cámaras cercanas al punto exacto y guiar a las unidades de respuesta. Los factores que afectan la precisión incluyen la densidad de sensores, los edificios altos que crean ecos, y el ruido ambiental de la zona.',
        },
        {
          question: '¿Qué ciudades utilizan detección de disparos?',
          answer:
            'Los sistemas de detección de disparos están desplegados en más de 150 ciudades a nivel mundial. En Estados Unidos, ciudades como Chicago, Nueva York, Washington D.C. y Detroit operan redes extensas. En Latinoamérica, ciudades en México, Colombia y Brasil han implementado sistemas similares como parte de sus centros de mando C4 y C5. La tecnología es particularmente relevante en zonas urbanas con alta incidencia de violencia armada donde las llamadas al 911 reportan menos del 20% de los incidentes con arma de fuego.',
        },
        {
          question: '¿Cómo integra KabatOne la detección de disparos?',
          answer:
            'KabatOne integra los sensores de detección de disparos a través de K-Safety, su plataforma de conciencia situacional GIS. Cuando un sensor detecta un disparo, la alerta aparece automáticamente en el mapa operativo con la ubicación exacta. K-Video activa las cámaras más cercanas al punto del disparo para verificación visual inmediata. K-Dispatch genera automáticamente un incidente en la cola de despacho para enviar unidades. Todo ocurre en una sola interfaz — el operador no necesita cambiar entre sistemas.',
        },
      ]
    : [
        {
          question: 'What is gunshot detection software?',
          answer:
            'Gunshot detection software is a system that uses acoustic sensors installed on poles, buildings, and other urban structures to automatically detect the sound of gunfire, triangulate its exact location, and alert command centers within seconds — without relying on someone calling 911. The system classifies the event type (single shot, burst, estimated weapon type) and geolocates the origin with meter-level precision.',
        },
        {
          question: 'What is the difference between gunshot detection and video surveillance?',
          answer:
            'Video surveillance depends on a camera pointing at the exact location of the gunshot and either an operator visually detecting it or AI analytics recognizing the event. Acoustic gunshot detection works independently of line of sight — it detects the sound of gunfire even if there are no cameras in the area, at night, or in reduced visibility conditions. The combination of both systems is most effective: the acoustic sensor detects and locates, and nearby cameras automatically activate for visual verification.',
        },
        {
          question: 'How does acoustic triangulation work?',
          answer:
            'Acoustic sensors are installed in a distributed network across the city, typically at 300–500 meter intervals. When a gunshot occurs, multiple sensors detect the sound wave at slightly different times. The software calculates the Time Difference of Arrival (TDOA) between sensors to triangulate the origin point of the gunshot with typical precision of 10–25 meters. The entire process — detection, triangulation, and alert — occurs in under 60 seconds.',
        },
        {
          question: 'How accurate are these systems?',
          answer:
            'Modern gunshot detection systems report detection rates of 90–97% for outdoor gunshots, with false positive rates below 5% in well-calibrated urban environments. Geolocation precision is typically 10–25 meters, sufficient to direct nearby cameras to the exact point and guide response units. Factors affecting accuracy include sensor density, tall buildings creating echoes, and ambient noise in the area.',
        },
        {
          question: 'Which cities use gunshot detection?',
          answer:
            'Gunshot detection systems are deployed in over 150 cities worldwide. In the United States, cities like Chicago, New York, Washington D.C., and Detroit operate extensive networks. In Latin America, cities in Mexico, Colombia, and Brazil have implemented similar systems as part of their C4 and C5 command centers. The technology is particularly relevant in urban areas with high gun violence incidence where 911 calls report fewer than 20% of firearm incidents.',
        },
        {
          question: 'How does KabatOne integrate gunshot detection?',
          answer:
            'KabatOne integrates gunshot detection sensors through K-Safety, its GIS situational awareness platform. When a sensor detects a gunshot, the alert appears automatically on the operational map with the exact location. K-Video activates the nearest cameras to the shot point for immediate visual verification. K-Dispatch automatically generates an incident in the dispatch queue to send units. Everything happens in one interface — the operator does not need to switch between systems.',
        },
      ]

  /* ── Breadcrumbs ── */
  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    {
      name: es ? '¿Qué Es un Software de Detección de Disparos?' : 'What Is Gunshot Detection Software?',
      url: es
        ? 'https://kabatone.com/es/resources/what-is-gunshot-detection-software/'
        : 'https://kabatone.com/resources/what-is-gunshot-detection-software/',
    },
  ]

  /* ── Shared styles ── */
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
                ? '¿Qué Es un Software de Detección de Disparos? Guía Completa'
                : 'What Is Gunshot Detection Software? Complete Guide',
              es
                ? 'Un software de detección de disparos usa sensores acústicos para detectar automáticamente disparos, triangular su ubicación y alertar a los centros de mando en segundos.'
                : 'Gunshot detection software uses acoustic sensors to automatically detect gunfire, triangulate its location, and alert command centers within seconds.',
              es
                ? 'https://kabatone.com/es/resources/what-is-gunshot-detection-software/'
                : 'https://kabatone.com/resources/what-is-gunshot-detection-software/',
              '2026-03-26'
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
              {es ? '¿Qué Es un Software de Detección de Disparos?' : 'What Is Gunshot Detection Software?'}
            </span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Guía de Referencia' : 'Reference Guide'}
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
                ? '¿Qué Es un Software de Detección de Disparos?'
                : 'What Is Gunshot Detection Software?'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Un software de detección de disparos utiliza redes de sensores acústicos para detectar automáticamente el sonido de disparos de arma de fuego, triangular su ubicación exacta y alertar a los centros de mando en segundos — eliminando la dependencia de las llamadas al 911 y proporcionando a los operadores la ubicación precisa del incidente antes de que llegue cualquier reporte manual.'
                : 'Gunshot detection software uses acoustic sensor networks to automatically detect the sound of gunfire, triangulate its exact location, and alert command centers within seconds — eliminating dependence on 911 calls and giving operators the precise incident location before any manual report arrives.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 1: How It Works ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? '¿Cómo Funciona la Detección Acústica de Disparos?' : 'How Does Acoustic Gunshot Detection Work?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Los sistemas de detección de disparos combinan hardware (sensores acústicos) con software (algoritmos de clasificación y triangulación) para convertir ondas sonoras en alertas geolocalizadas que llegan al centro de mando en tiempo real.'
                : 'Gunshot detection systems combine hardware (acoustic sensors) with software (classification and triangulation algorithms) to convert sound waves into geolocated alerts that reach the command center in real time.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Sensores Acústicos' : 'Acoustic Sensors'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'Los sensores se instalan en postes de alumbrado, edificios y otras estructuras urbanas en una red distribuida con cobertura típica de 300–500 metros entre sensores. Cada sensor contiene micrófonos de alta sensibilidad y un procesador local que realiza un filtrado inicial del sonido ambiental. Los sensores operan 24/7, en cualquier condición climática, y están diseñados para distinguir disparos de otros sonidos urbanos fuertes como fuegos artificiales, escapes de vehículos o construcción.'
                : 'Sensors are installed on light poles, buildings, and other urban structures in a distributed network with typical coverage of 300–500 meters between sensors. Each sensor contains high-sensitivity microphones and a local processor that performs initial filtering of ambient sound. Sensors operate 24/7, in any weather condition, and are designed to distinguish gunfire from other loud urban sounds like fireworks, vehicle backfires, or construction.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Clasificación de Audio' : 'Audio Classification'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'Cuando un sensor detecta un sonido que coincide con el perfil acústico de un disparo, el software clasifica el evento: disparo único, ráfaga automática, estimación del calibre del arma, y número de tiradores. Los algoritmos modernos utilizan machine learning entrenado con miles de muestras de audio de disparos reales para distinguir con alta precisión entre disparos y otros sonidos impulsivos.'
                : 'When a sensor detects a sound matching the acoustic profile of a gunshot, the software classifies the event: single shot, automatic burst, estimated weapon caliber, and number of shooters. Modern algorithms use machine learning trained on thousands of real gunshot audio samples to distinguish with high accuracy between gunfire and other impulsive sounds.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Triangulación y Geolocalización' : 'Triangulation and Geolocation'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'Cuando múltiples sensores detectan el mismo disparo, el software calcula la diferencia de tiempo de llegada (TDOA) de la onda sonora a cada sensor. Con tres o más sensores, el sistema triangula el punto de origen con precisión típica de 10–25 metros. La alerta geolocalizada se transmite al centro de mando con la ubicación exacta en el mapa operativo, junto con los metadatos del evento: hora, clasificación y nivel de confianza.'
                : 'When multiple sensors detect the same gunshot, the software calculates the Time Difference of Arrival (TDOA) of the sound wave at each sensor. With three or more sensors, the system triangulates the origin point with typical precision of 10–25 meters. The geolocated alert is transmitted to the command center with the exact location on the operational map, along with event metadata: time, classification, and confidence level.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Respuesta Automatizada' : 'Automated Response'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'En un sistema integrado, la alerta de disparo no solo aparece en el mapa — desencadena una secuencia automatizada de respuesta: las cámaras más cercanas al punto del disparo se orientan automáticamente hacia la zona (si son PTZ), el sistema genera un incidente en la cola de despacho CAD, y el operador recibe video en vivo del área afectada junto con la alerta. Todo en menos de 60 segundos desde el momento del disparo.'
                : 'In an integrated system, the gunshot alert does not just appear on the map — it triggers an automated response sequence: the nearest cameras to the shot point automatically orient toward the area (if PTZ-capable), the system generates an incident in the CAD dispatch queue, and the operator receives live video of the affected area alongside the alert. All within 60 seconds of the gunshot.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 2: Detection Workflow ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? 'Del Disparo a la Respuesta en 60 Segundos'
                : 'From Gunshot to Response in 60 Seconds'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'La secuencia completa desde la detección hasta la respuesta coordinada ocurre sin intervención manual en las etapas iniciales.'
                : 'The complete sequence from detection to coordinated response occurs without manual intervention in the initial stages.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {(es
                ? [
                    { step: '01', title: 'Detección acústica', desc: 'Múltiples sensores detectan la onda sonora del disparo. El procesador local en cada sensor confirma que el perfil acústico coincide con un disparo y no con ruido ambiental.' },
                    { step: '02', title: 'Clasificación y triangulación', desc: 'El software central recibe datos de todos los sensores, clasifica el evento (tipo de arma, número de disparos) y triangula el punto de origen con precisión de 10–25 metros.' },
                    { step: '03', title: 'Alerta geolocalizada', desc: 'La alerta aparece en el mapa operativo del centro de mando con la ubicación exacta, clasificación del evento y nivel de confianza. Las cámaras cercanas se activan automáticamente.' },
                    { step: '04', title: 'Verificación visual', desc: 'El operador ve video en vivo de las cámaras cercanas al punto del disparo. Si las cámaras son PTZ, el sistema las orienta automáticamente hacia la zona del evento.' },
                    { step: '05', title: 'Despacho informado', desc: 'Con la ubicación exacta y el video en vivo, el operador despacha unidades con información completa: tipo de evento, ubicación precisa, y descripción visual de la escena.' },
                  ]
                : [
                    { step: '01', title: 'Acoustic detection', desc: 'Multiple sensors detect the gunshot sound wave. The local processor on each sensor confirms the acoustic profile matches gunfire and not ambient noise.' },
                    { step: '02', title: 'Classification and triangulation', desc: 'The central software receives data from all sensors, classifies the event (weapon type, number of shots), and triangulates the origin point with 10–25 meter precision.' },
                    { step: '03', title: 'Geolocated alert', desc: 'The alert appears on the command center operational map with exact location, event classification, and confidence level. Nearby cameras activate automatically.' },
                    { step: '04', title: 'Visual verification', desc: 'The operator sees live video from cameras near the shot point. If cameras are PTZ-capable, the system automatically orients them toward the event area.' },
                    { step: '05', title: 'Informed dispatch', desc: 'With exact location and live video, the operator dispatches units with complete information: event type, precise location, and visual description of the scene.' },
                  ]
              ).map((item) => (
                <div
                  key={item.step}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                    background: '#0b1628',
                    borderRadius: '10px',
                    border: '1px solid var(--border)',
                    padding: '20px 24px',
                  }}
                >
                  <span style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: ACCENT,
                    minWidth: '28px',
                    paddingTop: '2px',
                  }}>
                    {item.step}
                  </span>
                  <div>
                    <p style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      color: 'var(--white)',
                      marginBottom: '6px',
                      marginTop: '0',
                    }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: Standalone vs Integrated ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? 'Detección Aislada vs Integrada en Plataforma'
                : 'Standalone Detection vs Platform-Integrated'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Los sensores de detección de disparos son más efectivos cuando están integrados en una plataforma operativa que conecta video, despacho y mapa GIS. Sin integración, la alerta llega pero el operador debe buscar manualmente las cámaras y crear el incidente en otro sistema.'
                : 'Gunshot detection sensors are most effective when integrated into an operational platform that connects video, dispatch, and GIS map. Without integration, the alert arrives but the operator must manually search for cameras and create the incident in another system.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '32px' }}>
              {(es
                ? [
                    {
                      label: 'Detección Aislada',
                      items: [
                        'Alerta llega a un dashboard separado del VMS y CAD',
                        'Operador busca manualmente las cámaras cercanas',
                        'El incidente se crea manualmente en otro sistema',
                        'Sin correlación automática con otros sensores',
                        'Sin historial integrado de eventos en la zona',
                        'Tiempo de respuesta incrementado por cambio de sistemas',
                      ],
                    },
                    {
                      label: 'Integrada en Plataforma',
                      items: [
                        'Alerta aparece directamente en el mapa operativo',
                        'Cámaras cercanas se activan automáticamente',
                        'Incidente se genera en la cola de despacho CAD',
                        'Correlación con LPR, video y otros sensores',
                        'Historial completo de eventos en la zona disponible',
                        'Respuesta en segundos sin cambiar de sistema',
                      ],
                    },
                  ]
                : [
                    {
                      label: 'Standalone Detection',
                      items: [
                        'Alert arrives on a dashboard separate from VMS and CAD',
                        'Operator manually searches for nearby cameras',
                        'Incident manually created in another system',
                        'No automatic correlation with other sensors',
                        'No integrated event history for the zone',
                        'Response time increased by system switching',
                      ],
                    },
                    {
                      label: 'Platform-Integrated',
                      items: [
                        'Alert appears directly on the operational map',
                        'Nearby cameras activate automatically',
                        'Incident generated in the CAD dispatch queue',
                        'Correlation with LPR, video, and other sensors',
                        'Complete zone event history available',
                        'Response in seconds without switching systems',
                      ],
                    },
                  ]
              ).map((col, i) => (
                <div
                  key={i}
                  style={{
                    background: i === 1 ? 'rgba(6,182,212,0.04)' : '#0b1628',
                    borderRadius: '10px',
                    border: i === 1 ? `1px solid ${ACCENT}40` : '1px solid var(--border)',
                    padding: '24px',
                  }}
                >
                  <p style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: i === 1 ? ACCENT : 'var(--muted)',
                    marginBottom: '16px',
                    marginTop: '0',
                  }}>
                    {col.label}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {col.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.5 }}>
                        <span style={{ color: i === 1 ? ACCENT : 'var(--muted)', minWidth: '12px', marginTop: '1px' }}>
                          {i === 1 ? '✓' : '—'}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: Evaluation Criteria ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? 'Criterios de Evaluación para Detección de Disparos'
                : 'Evaluation Criteria for Gunshot Detection'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Al evaluar sistemas de detección de disparos para una ciudad o centro de mando, estos son los factores técnicos que determinan la efectividad operativa.'
                : 'When evaluating gunshot detection systems for a city or command center, these are the technical factors that determine operational effectiveness.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
              {(es
                ? [
                    { title: 'Tasa de Detección', desc: 'El sistema debe detectar al menos el 90% de los disparos al aire libre con una tasa de falsos positivos inferior al 5%. Solicita datos verificados de pruebas de campo, no solo especificaciones de laboratorio.' },
                    { title: 'Precisión de Geolocalización', desc: 'La triangulación debe localizar el punto de origen con precisión de 25 metros o menos, suficiente para dirigir automáticamente las cámaras PTZ y guiar a las unidades de campo.' },
                    { title: 'Latencia de Alerta', desc: 'El tiempo total desde el disparo hasta que la alerta aparece en el centro de mando debe ser inferior a 60 segundos. Los sistemas de clase premium logran menos de 30 segundos.' },
                    { title: 'Integración con VMS y CAD', desc: 'El sistema debe conectarse nativamente con la plataforma de video (para activar cámaras automáticamente) y con el CAD de despacho (para crear incidentes sin intervención manual).' },
                    { title: 'Resistencia Ambiental', desc: 'Los sensores deben operar en temperaturas extremas, lluvia, humedad alta y ambientes urbanos ruidosos. Busca certificaciones IP66 o superior para los sensores de exterior.' },
                    { title: 'Clasificación de Eventos', desc: 'El sistema debe distinguir entre disparo único, ráfaga, y sonidos similares (fuegos artificiales, explosiones). La clasificación por tipo de arma (pistola vs rifle) es un diferenciador avanzado.' },
                  ]
                : [
                    { title: 'Detection Rate', desc: 'The system should detect at least 90% of outdoor gunshots with a false positive rate below 5%. Request verified data from field tests, not just lab specifications.' },
                    { title: 'Geolocation Precision', desc: 'Triangulation should locate the origin point with 25-meter precision or better, sufficient to automatically direct PTZ cameras and guide field units.' },
                    { title: 'Alert Latency', desc: 'Total time from gunshot to alert appearing in the command center should be under 60 seconds. Premium-class systems achieve under 30 seconds.' },
                    { title: 'VMS and CAD Integration', desc: 'The system must connect natively with the video platform (to activate cameras automatically) and with the dispatch CAD (to create incidents without manual intervention).' },
                    { title: 'Environmental Resistance', desc: 'Sensors must operate in extreme temperatures, rain, high humidity, and noisy urban environments. Look for IP66 or higher certifications for outdoor sensors.' },
                    { title: 'Event Classification', desc: 'The system should distinguish between single shot, burst, and similar sounds (fireworks, explosions). Weapon type classification (handgun vs rifle) is an advanced differentiator.' },
                  ]
              ).map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0b1628',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    padding: '24px',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                    marginTop: '0',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: Related Products ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'KabatOne para Detección de Disparos' : 'KabatOne for Gunshot Detection'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>
              {es ? 'Una Sola Plataforma que Integra los Sensores' : 'One Platform That Integrates the Sensors'}
            </h2>
            <p style={{ ...pStyle, marginBottom: '28px' }}>
              {es
                ? 'KabatOne integra los sensores de detección de disparos dentro de su plataforma unificada: K-Safety muestra las alertas en el mapa operativo GIS, K-Video activa las cámaras cercanas automáticamente, K-Dispatch genera el incidente en la cola de despacho, y K-Traffic gestiona las rutas de respuesta. El operador ve todo en una sola interfaz.'
                : 'KabatOne integrates gunshot detection sensors into its unified platform: K-Safety displays alerts on the GIS operational map, K-Video activates nearby cameras automatically, K-Dispatch generates the incident in the dispatch queue, and K-Traffic manages response routes. The operator sees everything in one interface.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'Mapa Operativo GIS' : 'GIS Operational Map' },
                { href: '/k-video', label: 'K-Video', desc: es ? 'Videovigilancia + IA' : 'Video + AI Analytics' },
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD Dispatch' },
                { href: '/k-traffic', label: 'K-Traffic', desc: es ? 'Gestión de Tráfico' : 'Traffic Management' },
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
                  <span style={{ color: 'var(--muted)', fontSize: '10px', letterSpacing: '0.1em' }}>
                    {p.desc}
                  </span>
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
                  { href: '/integrations/sensor-fusion', label: es ? 'Fusión de Sensores' : 'Sensor Fusion' },
                  { href: '/integrations/lpr', label: 'LPR' },
                  { href: '/integrations/panic-buttons', label: es ? 'Botones de Pánico' : 'Panic Buttons' },
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
                  { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Qué es un RTCC' : 'What Is an RTCC' },
                  { href: '/resources/what-is-situational-awareness-software', label: es ? 'Conciencia Situacional' : 'Situational Awareness' },
                  { href: '/resources/ai-in-public-safety', label: es ? 'IA en Seguridad Pública' : 'AI in Public Safety' },
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
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '32px' }}>
              {es
                ? 'Preguntas Comunes sobre Detección de Disparos'
                : 'Common Questions About Gunshot Detection'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0b1628',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    padding: '24px 28px',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    marginTop: '0',
                    marginBottom: '10px',
                    color: 'var(--white)',
                  }}>
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

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={es ? '¿Listo para Integrar Detección de Disparos?' : 'Ready to Integrate Gunshot Detection?'}
          subtitle={es
            ? 'Agenda una demo y descubre cómo KabatOne conecta sensores acústicos con video, despacho y GIS en una sola plataforma operativa.'
            : 'Schedule a demo and see how KabatOne connects acoustic sensors with video, dispatch, and GIS in one operational platform.'}
        />
      </div>

      <Footer es={es} />
    </>
  )
}
