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
  return generatePageMetadata('vsShotSpotter', locale)
}

export default async function VsShotSpotterPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#10b981'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Comparaciones' : 'Compare', url: es ? 'https://kabatone.com/es/vs/' : 'https://kabatone.com/vs/' },
    { name: 'KabatOne vs ShotSpotter', url: es ? 'https://kabatone.com/es/vs/shotspotter/' : 'https://kabatone.com/vs/shotspotter/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre KabatOne y ShotSpotter?',
      answer: 'ShotSpotter (ahora SoundThinking) es un sistema de detección acústica de disparos — sensores de audio instalados en postes y edificios que detectan detonaciones, trianglan la ubicación y envían alertas a las unidades de campo. Es un sensor de entrada, no una plataforma operativa. KabatOne es una plataforma unificada de seguridad pública que puede integrar ShotSpotter u otros sistemas de detección de disparos como una fuente de datos más, y conectar automáticamente esa alerta con el flujo de respuesta: video del área, asignación de unidades, protocolo de despacho CAD y coordinación de tráfico, todo en una sola pantalla.',
    },
    {
      question: '¿KabatOne puede integrarse con ShotSpotter?',
      answer: 'Sí. KabatOne puede recibir alertas de ShotSpotter u otros sistemas de detección de disparos vía API y mostrarlas automáticamente en el mapa de K-Safety, activar las cámaras más cercanas en K-Video y generar un incidente en K-Dispatch. La alerta de disparo se convierte en un flujo operativo completo — no solo en una notificación.',
    },
    {
      question: '¿Qué hace ShotSpotter exactamente?',
      answer: 'ShotSpotter (SoundThinking) despliega sensores acústicos en áreas urbanas para detectar sonidos de disparos. El sistema triangula la ubicación aproximada, filtra falsos positivos con revisión humana y envía alertas georreferenciadas a policías y centros de despacho en 60 segundos o menos. Cubre principalmente el mercado de ciudades de EE.UU., con algunos despliegues en otras regiones. No gestiona video, no despacha unidades, no coordina tráfico ni proporciona un mapa operativo unificado.',
    },
    {
      question: '¿Es ShotSpotter suficiente para un centro de mando moderno?',
      answer: 'No. ShotSpotter resuelve un problema específico: la detección temprana de disparos. Pero una vez que llega la alerta, el centro de mando necesita verificar con video, despachar la unidad más cercana, comunicarse con el campo, coordinar la ruta de emergencia y gestionar el incidente con un protocolo estructurado. Para todo eso, necesitas una plataforma operativa completa. ShotSpotter puede ser uno de los muchos sensores que alimentan a KabatOne.',
    },
    {
      question: '¿Hay alternativas a ShotSpotter para detección de disparos?',
      answer: 'Sí. Entre las alternativas están SST (ShotSpotter comprado por SoundThinking), Motorola Solutions con tecnología similar, Shooter Detection Systems (integrado en Genetec y otros VMS), y cámaras con analítica IA de audio integrada. KabatOne puede integrarse con cualquiera de estas fuentes — la clave es que la detección de disparos es una entrada al flujo operativo, no el destino final.',
    },
    {
      question: '¿KabatOne tiene detección de disparos nativa?',
      answer: 'KabatOne puede integrarse con sensores de detección de disparos de terceros. Adicionalmente, K-Video incluye analítica IA aplicada al feed de video y audio de cámaras existentes, que puede detectar anomalías sonoras en entornos donde ya se tienen cámaras instaladas. Esto permite a municipios con infraestructura de cámaras urbanas agregar capacidad de detección sin desplegar sensores adicionales.',
    },
  ] : [
    {
      question: 'What is the difference between KabatOne and ShotSpotter?',
      answer: 'ShotSpotter (now SoundThinking) is an acoustic gunshot detection system — audio sensors installed on poles and buildings that detect gunfire, triangulate the location, and send alerts to field units. It is an input sensor, not an operational platform. KabatOne is a unified public safety platform that can integrate ShotSpotter or other gunshot detection systems as one data source, and automatically connect that alert to the full response workflow: area video, unit assignment, CAD dispatch protocol, and traffic coordination — all in one screen.',
    },
    {
      question: 'Can KabatOne integrate with ShotSpotter?',
      answer: 'Yes. KabatOne can receive alerts from ShotSpotter or other gunshot detection systems via API and automatically display them on the K-Safety map, trigger the nearest cameras in K-Video, and generate an incident in K-Dispatch. The gunshot alert becomes a complete operational workflow — not just a notification.',
    },
    {
      question: 'What does ShotSpotter actually do?',
      answer: 'ShotSpotter (SoundThinking) deploys acoustic sensors across urban areas to detect gunshot sounds. The system triangulates an approximate location, filters false positives with human review, and sends geo-referenced alerts to officers and dispatch centers within 60 seconds or less. It primarily serves the US city market, with some deployments in other regions. It does not manage video, dispatch units, coordinate traffic, or provide a unified operational map.',
    },
    {
      question: 'Is ShotSpotter enough for a modern command center?',
      answer: 'No. ShotSpotter solves a specific problem: early gunshot detection. But once the alert arrives, the command center needs to verify with video, dispatch the nearest unit, communicate with the field, coordinate the emergency route, and manage the incident with a structured protocol. For all of that, you need a complete operational platform. ShotSpotter can be one of many sensors feeding into KabatOne.',
    },
    {
      question: 'Are there alternatives to ShotSpotter for gunshot detection?',
      answer: 'Yes. Alternatives include SST (ShotSpotter acquired by SoundThinking), Motorola Solutions with similar technology, Shooter Detection Systems (integrated into Genetec and other VMS), and cameras with integrated AI audio analytics. KabatOne can integrate with any of these sources — the key is that gunshot detection is an input to the operational workflow, not the final destination.',
    },
    {
      question: 'Does KabatOne have native gunshot detection?',
      answer: 'KabatOne can integrate with third-party gunshot detection sensors. Additionally, K-Video includes AI analytics applied to the video and audio feeds of existing cameras, which can detect sonic anomalies in environments that already have cameras installed. This allows municipalities with urban camera infrastructure to add detection capability without deploying additional sensors.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Tipo de solución',
      shotspotter: 'Sensor de detección acústica de disparos',
      kabatone: 'Plataforma unificada de seguridad pública (video + CAD + GIS + tráfico)',
    },
    {
      category: 'Función principal',
      shotspotter: 'Detectar y alertar sobre disparos en tiempo real',
      kabatone: 'Integrar sensores, cámaras, despacho y campo en un flujo unificado',
    },
    {
      category: 'Detección de disparos',
      shotspotter: 'Nativa — sensores acústicos dedicados con revisión humana',
      kabatone: 'Vía integración con ShotSpotter, Shooter Detection Systems u otros',
    },
    {
      category: 'Gestión de video',
      shotspotter: 'No incluida',
      kabatone: 'K-Video nativo — cualquier fabricante, analítica IA',
    },
    {
      category: 'Despacho / CAD',
      shotspotter: 'No incluido — envía alerta al CAD existente',
      kabatone: 'K-Dispatch nativo, integrado con video, GIS y sensores',
    },
    {
      category: 'GIS / Mapa operacional',
      shotspotter: 'Mapa de alertas básico',
      kabatone: 'K-Safety — GIS operacional completo con cámaras, unidades y sensores',
    },
    {
      category: 'Respuesta automatizada',
      shotspotter: 'No — envía alerta; la coordinación es manual',
      kabatone: 'Sí — la alerta activa el flujo: video, CAD, unidades, protocolo',
    },
    {
      category: 'Cobertura geográfica',
      shotspotter: 'Principalmente EE.UU.',
      kabatone: '40+ ciudades en México y Latinoamérica, más EE.UU.',
    },
    {
      category: 'Modelo de despliegue',
      shotspotter: 'Sensores físicos instalados en la ciudad',
      kabatone: 'Cloud-native SaaS — sin hardware propietario',
    },
  ] : [
    {
      category: 'Solution type',
      shotspotter: 'Acoustic gunshot detection sensor',
      kabatone: 'Unified public safety platform (video + CAD + GIS + traffic)',
    },
    {
      category: 'Primary function',
      shotspotter: 'Detect and alert on gunshots in real time',
      kabatone: 'Integrate sensors, cameras, dispatch, and field into a unified workflow',
    },
    {
      category: 'Gunshot detection',
      shotspotter: 'Native — dedicated acoustic sensors with human review',
      kabatone: 'Via integration with ShotSpotter, Shooter Detection Systems, or others',
    },
    {
      category: 'Video management',
      shotspotter: 'Not included',
      kabatone: 'K-Video native — any manufacturer, AI analytics',
    },
    {
      category: 'Dispatch / CAD',
      shotspotter: 'Not included — sends alert to existing CAD',
      kabatone: 'K-Dispatch native, integrated with video, GIS, and sensors',
    },
    {
      category: 'GIS / Operational map',
      shotspotter: 'Basic alert map',
      kabatone: 'K-Safety — full operational GIS with cameras, units, and sensors',
    },
    {
      category: 'Automated response',
      shotspotter: 'No — sends alert; coordination is manual',
      kabatone: 'Yes — alert triggers workflow: video, CAD, units, protocol',
    },
    {
      category: 'Geographic coverage',
      shotspotter: 'Primarily US',
      kabatone: '40+ cities in Mexico and Latin America, plus US',
    },
    {
      category: 'Deployment model',
      shotspotter: 'Physical sensors installed in the city',
      kabatone: 'Cloud-native SaaS — no proprietary hardware',
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
          <span style={{ color: ACCENT }}>KabatOne vs ShotSpotter</span>
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
              ? 'KabatOne vs ShotSpotter — Detección de Disparos vs Plataforma de Respuesta Unificada'
              : 'KabatOne vs ShotSpotter — Gunshot Detection vs Unified Response Platform'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'ShotSpotter (SoundThinking) detecta disparos. Es muy bueno en eso. Pero detectar un disparo es solo el primer segundo del incidente — lo que pasa en los siguientes 90 segundos determina el resultado. KabatOne integra la alerta de ShotSpotter con el flujo operativo completo: verificación de video, asignación de unidad, despacho CAD y coordinación de tráfico, todo en una sola pantalla.'
              : 'ShotSpotter (SoundThinking) detects gunshots. It is very good at that. But detecting a gunshot is only the first second of the incident — what happens in the next 90 seconds determines the outcome. KabatOne integrates the ShotSpotter alert with the full operational workflow: video verification, unit assignment, CAD dispatch, and traffic coordination — all in one screen.'}
          </p>
        </section>

        {/* ── WHAT IS SHOTSPOTTER? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es ShotSpotter / SoundThinking?' : 'What Is ShotSpotter / SoundThinking?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'ShotSpotter, rebautizado como SoundThinking en 2023, es el proveedor de detección acústica de disparos más conocido del mercado. Despliega una red de micrófonos de precisión en postes de luz, edificios y otras estructuras urbanas que escuchan continuamente en busca de detonaciones. Cuando se detecta un sonido, algoritmos de IA filtran falsos positivos (fuegos artificiales, explosiones de neumáticos) y analistas humanos revisan la alerta antes de enviarla al centro de despacho.'
                : 'ShotSpotter, rebranded as SoundThinking in 2023, is the best-known acoustic gunshot detection provider on the market. It deploys a network of precision microphones on light poles, buildings, and other urban structures that continuously listen for gunfire. When a sound is detected, AI algorithms filter false positives (fireworks, tire blowouts) and human analysts review the alert before sending it to the dispatch center.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El sistema triangula la ubicación del disparo con una precisión de aproximadamente 25 metros y envía la alerta georreferenciada en 60 segundos o menos. ShotSpotter está desplegado en más de 150 ciudades principalmente en Estados Unidos, y ha sido adoptado por departamentos de policía de ciudades como Chicago, Nueva York y Oakland. En 2023, SoundThinking amplió su portafolio adquiriendo SafePointe (detección en interiores) y CivicEye (gestión de datos comunitarios).'
                : 'The system triangulates the shot location with approximately 25-meter accuracy and sends the geo-referenced alert within 60 seconds or less. ShotSpotter is deployed in more than 150 cities, primarily in the United States, and has been adopted by police departments in cities like Chicago, New York, and Oakland. In 2023, SoundThinking expanded its portfolio by acquiring SafePointe (indoor detection) and CivicEye (community data management).'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'ShotSpotter no gestiona video, no despacha unidades, no proporciona un mapa operativo unificado y no coordina la respuesta entre agencias. Envía una alerta a los sistemas que el departamento ya tenga — CAD, radio, app móvil. Si esos sistemas son dispares y no están integrados, la coordinación de la respuesta sigue siendo manual y fragmentada.'
                : 'ShotSpotter does not manage video, dispatch units, provide a unified operational map, or coordinate inter-agency response. It sends an alert to whatever systems the department already has — CAD, radio, mobile app. If those systems are disparate and unintegrated, response coordination remains manual and fragmented.'}
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
                ? 'KabatOne es una plataforma unificada de seguridad pública cloud-native construida para ciudades, municipios y centros de mando C4/C5. Integra gestión de video con analítica IA (K-Video), despacho CAD (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario (K-Connect) en una sola plataforma.'
                : 'KabatOne is a cloud-native unified public safety platform built for cities, municipalities, and C4/C5 command centers. It integrates AI-powered video management (K-Video), CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video (K-Connect) in one platform.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Cuando un sistema de detección de disparos — ShotSpotter, Shooter Detection Systems, o analítica de audio en cámaras existentes — genera una alerta, KabatOne la recibe vía API y ejecuta automáticamente el flujo de respuesta: muestra la ubicación en K-Safety, abre el feed de las cámaras más cercanas en K-Video, crea el incidente en K-Dispatch con el protocolo de disparos activos, y notifica a las unidades más cercanas. En lugar de un operador corriendo entre sistemas, todo ocurre en una pantalla.'
                : 'When a gunshot detection system — ShotSpotter, Shooter Detection Systems, or audio analytics on existing cameras — generates an alert, KabatOne receives it via API and automatically executes the response workflow: displays the location on K-Safety, opens the nearest camera feeds in K-Video, creates the incident in K-Dispatch with the active shooter protocol, and notifies the nearest units. Instead of an operator running between systems, everything happens in one screen.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos en México y Latinoamérica. Para municipios que ya tienen o planean desplegar detección de disparos, KabatOne es la capa operativa que convierte esa señal en una respuesta coordinada.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens in Mexico and Latin America. For municipalities that already have or plan to deploy gunshot detection, KabatOne is the operational layer that turns that signal into a coordinated response.'}
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
              {es ? 'KabatOne vs ShotSpotter: Diferencias Clave' : 'KabatOne vs ShotSpotter: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'ShotSpotter y KabatOne no son competidores directos — uno es un sensor de entrada, el otro es la plataforma operativa que usa esa señal.'
                : 'ShotSpotter and KabatOne are not direct competitors — one is an input sensor, the other is the operational platform that acts on that signal.'}
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
                  ShotSpotter / SoundThinking
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
                    {row.shotspotter}
                  </div>
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--dim)', lineHeight: 1.55, borderLeft: '1px solid var(--border)' }}>
                    {row.kabatone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SENSOR VS PLATFORM ── */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Sensor vs Plataforma: El Error de Concepto Más Común' : 'Sensor vs Platform: The Most Common Misconception'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El error más frecuente en los proyectos de seguridad pública es confundir la detección con la respuesta. ShotSpotter resuelve la detección — saber que ocurrió un disparo, en qué calle, hace 45 segundos. Pero la respuesta requiere saber: ¿qué hay en la cámara más cercana? ¿Qué unidades están disponibles? ¿Cuál llega primero? ¿Qué protocolo aplica? ¿Cómo coordino el tráfico para dejar paso a la ambulancia?'
                : 'The most common mistake in public safety projects is confusing detection with response. ShotSpotter solves detection — knowing that a gunshot occurred, on which street, 45 seconds ago. But response requires knowing: what is on the nearest camera? Which units are available? Which arrives first? What protocol applies? How do I coordinate traffic to clear the way for the ambulance?'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Ninguna de esas preguntas las responde ShotSpotter. Las responde una plataforma operativa. Y si esa plataforma no existe o está fragmentada en 4 sistemas distintos, el operador pierde tiempo valioso coordinando manualmente lo que debería ocurrir automáticamente.'
                : 'ShotSpotter answers none of those questions. An operational platform does. And if that platform does not exist or is fragmented across 4 different systems, the operator loses valuable time manually coordinating what should happen automatically.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'La combinación correcta es: ShotSpotter como sensor de detección + KabatOne como plataforma operativa de respuesta. La alerta entra por la API, KabatOne la convierte en un flujo de respuesta completo, y el operador actúa — no coordina sistemas.'
                : 'The right combination is: ShotSpotter as the detection sensor + KabatOne as the operational response platform. The alert comes in through the API, KabatOne turns it into a complete response workflow, and the operator acts — not coordinates systems.'}
            </p>
          </div>
        </section>

        {/* ── LATAM SECTION ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Detección de Disparos en Ciudades de Latinoamérica' : 'Gunshot Detection in Latin American Cities'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'En México, Colombia, Perú y otros países de Latinoamérica, la necesidad de detección de disparos existe pero el modelo de despliegue es diferente al estadounidense. Las ciudades de la región tienen densidades poblacionales distintas, entornos acústicos más ruidosos (motores, música, tráfico), y — lo más importante — ya tienen redes de cámaras urbanas instaladas que raramente se explotan al máximo.'
                : 'In Mexico, Colombia, Peru, and other Latin American countries, the need for gunshot detection exists but the deployment model is different from the US. Cities in the region have different population densities, noisier acoustic environments (engines, music, traffic), and — most importantly — already have installed urban camera networks that are rarely fully leveraged.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne puede integrar detección acústica de disparos de terceros en ciudades donde ya esté desplegada, o trabajar con la analítica de audio de K-Video en cámaras existentes para añadir capacidad de detección sin infraestructura adicional. El objetivo no es reemplazar ShotSpotter donde funciona bien — es proporcionar una plataforma operativa que maximice el valor de cualquier sensor de detección que la ciudad ya tenga o decida adoptar.'
                : 'KabatOne can integrate third-party acoustic gunshot detection in cities where it is already deployed, or leverage K-Video audio analytics on existing cameras to add detection capability without additional infrastructure. The goal is not to replace ShotSpotter where it works well — it is to provide an operational platform that maximizes the value of whatever detection sensor the city already has or decides to adopt.'}
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

        {/* ── FAQ SECTION ── */}
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
              {es ? 'KabatOne vs ShotSpotter: Preguntas y Respuestas' : 'KabatOne vs ShotSpotter: Questions & Answers'}
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
              {es ? 'Artículos Relacionados' : 'Related Resources'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link href="/resources/what-is-a-real-time-crime-center" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? '¿Qué Es un Centro de Crimen en Tiempo Real?' : 'What Is a Real-Time Crime Center?'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/what-is-gunshot-detection-software" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? '¿Qué Es el Software de Detección de Disparos?' : 'What Is Gunshot Detection Software?'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/vs/fusus" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Fusus' : 'KabatOne vs Fusus'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/vs/motorola" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Motorola Solutions' : 'KabatOne vs Motorola Solutions'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/integrations/sensor-fusion" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'Fusión de Sensores en KabatOne' : 'Sensor Fusion in KabatOne'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={es ? '¿Listo para Ver el Flujo Completo de Respuesta?' : 'Ready to See the Full Response Workflow?'}
          subtitle={es
            ? 'Ve cómo KabatOne convierte una alerta de disparo en una respuesta coordinada en menos de 90 segundos. Solicita una demo personalizada.'
            : 'See how KabatOne turns a gunshot alert into a coordinated response in under 90 seconds. Request a personalized demo.'}
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
