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
  return generatePageMetadata('vsRapidsos', locale)
}

export default async function VsRapidsosPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#2563eb'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Comparaciones' : 'Compare', url: es ? 'https://kabatone.com/es/vs/' : 'https://kabatone.com/vs/' },
    { name: 'KabatOne vs RapidSOS', url: es ? 'https://kabatone.com/es/vs/rapidssos/' : 'https://kabatone.com/vs/rapidssos/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre KabatOne y RapidSOS?',
      answer: 'RapidSOS es una plataforma de datos que enriquece la fase de recepción de llamadas 911 — entrega ubicación precisa del llamante, datos de salud de wearables, datos de impacto vehicular y contexto multimedia al centro de despacho (PSAP). KabatOne es una plataforma de operaciones unificada que gestiona todo el ciclo de respuesta después de que se recibe la información: despacho CAD completo (K-Dispatch), video de cámaras de ciudad (K-Video), conciencia situacional GIS (K-Safety) y gestión de tráfico (K-Traffic). RapidSOS enriquece los datos de la llamada; KabatOne coordina la respuesta.',
    },
    {
      question: '¿RapidSOS tiene despacho CAD o gestión de video?',
      answer: 'No. RapidSOS no es un sistema de despacho, ni gestiona video de cámaras de ciudad, ni proporciona GIS operacional ni gestión de tráfico. RapidSOS se enfoca exclusivamente en enriquecer los datos que llegan al centro de despacho durante la recepción de la llamada — ubicación del dispositivo, datos de salud, información de vehículos conectados y datos multimedia del llamante. Para gestionar la respuesta operacional — despacho de unidades, monitoreo de video, rastreo GIS y coordinación de tráfico — se necesita una plataforma como KabatOne.',
    },
    {
      question: '¿Puede KabatOne integrarse con datos de RapidSOS?',
      answer: 'Sí. KabatOne puede consumir datos enriquecidos del llamante como fuente de entrada. Si un centro de mando recibe datos de ubicación, salud o contexto vehicular a través de RapidSOS, KabatOne K-Dispatch puede incorporar esa información al flujo de despacho CAD — mostrando la ubicación precisa del llamante en el GIS de K-Safety, activando las cámaras más cercanas en K-Video y recomendando las unidades disponibles más próximas. RapidSOS enriquece la entrada; KabatOne gestiona la acción.',
    },
    {
      question: '¿RapidSOS reemplaza a KabatOne o son complementarios?',
      answer: 'Son complementarios. RapidSOS mejora la calidad de los datos que llegan durante la fase de recepción de la llamada al 911 — proporciona mejor ubicación, contexto del dispositivo y datos de salud. KabatOne es la plataforma donde se ejecuta la respuesta operacional: despacho de unidades, coordinación de video de cámaras de ciudad, GIS a escala de ciudad y gestión de tráfico. Usar ambos significa tener mejor información de entrada (RapidSOS) gestionada por una plataforma operacional completa (KabatOne).',
    },
    {
      question: '¿Qué tipos de datos proporciona RapidSOS?',
      answer: 'RapidSOS entrega datos de ubicación mejorados desde dispositivos móviles (más precisos que la ubicación de red celular tradicional), datos de salud de wearables como Apple Watch y Fitbit, datos de impacto vehicular de automóviles conectados, información de viajes compartidos desde aplicaciones como Uber y Lyft, y datos multimedia del llamante. Estos datos llegan al PSAP en tiempo real para que el operador tenga mejor contexto al crear el evento de emergencia. KabatOne toma ese evento y gestiona todo lo que sigue.',
    },
    {
      question: '¿Qué ofrece KabatOne que RapidSOS no ofrece?',
      answer: 'KabatOne proporciona capacidades que RapidSOS no cubre: despacho CAD completo (K-Dispatch) con recomendación de unidades basada en proximidad y disponibilidad; gestión de video de cámaras fijas de ciudad con analítica IA (K-Video); conciencia situacional GIS a escala de ciudad (K-Safety) con rastreo de todas las unidades e incidentes; gestión inteligente de tráfico (K-Traffic) para coordinar semáforos durante la respuesta; y video comunitario (K-Connect). RapidSOS enriquece un eslabón de la cadena — los datos de la llamada. KabatOne gestiona toda la cadena de respuesta.',
    },
  ] : [
    {
      question: 'What is the difference between KabatOne and RapidSOS?',
      answer: 'RapidSOS is a data platform that enriches the 911 call intake phase — it delivers precise caller location, health data from wearables, connected vehicle crash data, and multimedia context to the dispatch center (PSAP). KabatOne is a unified operations platform that manages the entire response cycle after the information is received: full CAD dispatch (K-Dispatch), city camera video (K-Video), GIS situational awareness (K-Safety), and traffic management (K-Traffic). RapidSOS enriches the call data; KabatOne coordinates the response.',
    },
    {
      question: 'Does RapidSOS have CAD dispatch or video management?',
      answer: 'No. RapidSOS is not a dispatch system, does not manage city camera video, and does not provide operational GIS or traffic management. RapidSOS focuses exclusively on enriching the data that reaches the dispatch center during call intake — device location, health data, connected vehicle information, and caller multimedia. To manage the operational response — unit dispatch, video monitoring, GIS tracking, and traffic coordination — a platform like KabatOne is required.',
    },
    {
      question: 'Can KabatOne integrate with RapidSOS data?',
      answer: 'Yes. KabatOne can consume enriched caller data as an input source. If a command center receives location, health, or vehicle context data through RapidSOS, KabatOne K-Dispatch can incorporate that information into the CAD dispatch workflow — displaying the precise caller location in K-Safety GIS, activating the nearest cameras in K-Video, and recommending the closest available units. RapidSOS enriches the input; KabatOne manages the action.',
    },
    {
      question: 'Does RapidSOS replace KabatOne, or are they complementary?',
      answer: 'They are complementary. RapidSOS improves the quality of data arriving during the 911 call intake phase — it provides better location, device context, and health data. KabatOne is the platform where the operational response is executed: unit dispatch, city camera video coordination, city-scale GIS, and traffic management. Using both means having better input data (RapidSOS) managed by a complete operational platform (KabatOne).',
    },
    {
      question: 'What types of data does RapidSOS provide?',
      answer: 'RapidSOS delivers enhanced location data from mobile devices (more precise than traditional cell tower location), health data from wearables such as Apple Watch and Fitbit, crash data from connected vehicles, ride-share trip information from apps like Uber and Lyft, and caller multimedia data. This data arrives at the PSAP in real time so the operator has better context when creating the emergency event. KabatOne takes that event and manages everything that follows.',
    },
    {
      question: 'What does KabatOne offer that RapidSOS does not?',
      answer: 'KabatOne provides capabilities that RapidSOS does not cover: full CAD dispatch (K-Dispatch) with unit recommendation based on proximity and availability; city fixed camera video management with AI analytics (K-Video); city-scale GIS situational awareness (K-Safety) tracking all units and incidents; intelligent traffic management (K-Traffic) to coordinate signals during response; and community video (K-Connect). RapidSOS enriches one link in the chain — the call data. KabatOne manages the entire response chain.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Categoria principal',
      rapidsos: 'Plataforma de datos de emergencia — enriquecimiento de datos del llamante para PSAPs',
      kabatone: 'Plataforma de operaciones unificada — video, CAD, GIS y tráfico',
    },
    {
      category: 'Datos del llamante',
      rapidsos: 'Especializado — ubicación precisa, datos de salud, datos vehiculares, multimedia',
      kabatone: 'K-Dispatch integra datos enriquecidos del llamante desde fuentes como RapidSOS',
    },
    {
      category: 'Despacho / CAD',
      rapidsos: 'No incluido — RapidSOS entrega datos al CAD existente, no despacha unidades',
      kabatone: 'K-Dispatch — CAD completo con recomendación de unidades, routing y logging',
    },
    {
      category: 'Videovigilancia',
      rapidsos: 'No incluido — no gestiona cámaras de ciudad ni video fijo',
      kabatone: 'K-Video — cámaras fijas de ciudad con analítica IA, ONVIF/RTSP',
    },
    {
      category: 'GIS / Conciencia situacional',
      rapidsos: 'Proporciona ubicación precisa del dispositivo — no GIS operacional',
      kabatone: 'K-Safety — GIS operacional completo con incidentes, unidades y feeds de video',
    },
    {
      category: 'Gestión de tráfico',
      rapidsos: 'No incluido',
      kabatone: 'K-Traffic — gestión inteligente de semáforos e incidentes de tráfico',
    },
    {
      category: 'Modelo de integración',
      rapidsos: 'Fuente de datos que alimenta al CAD existente — se conecta con Apple, Google, Uber',
      kabatone: 'Plataforma operacional que consume datos de múltiples fuentes, incluyendo RapidSOS',
    },
  ] : [
    {
      category: 'Primary category',
      rapidsos: 'Emergency data platform — caller data enrichment for PSAPs',
      kabatone: 'Unified operations platform — video, CAD, GIS, and traffic',
    },
    {
      category: 'Caller data',
      rapidsos: 'Specialized — precise location, health data, vehicle data, multimedia',
      kabatone: 'K-Dispatch integrates enriched caller data from sources like RapidSOS',
    },
    {
      category: 'Dispatch / CAD',
      rapidsos: 'Not included — RapidSOS delivers data to existing CAD, does not dispatch units',
      kabatone: 'K-Dispatch — full CAD with unit recommendation, routing, and logging',
    },
    {
      category: 'Video surveillance',
      rapidsos: 'Not included — does not manage city cameras or fixed video',
      kabatone: 'K-Video — city fixed cameras with AI analytics, ONVIF/RTSP',
    },
    {
      category: 'GIS / Situational awareness',
      rapidsos: 'Provides precise device location — not operational GIS',
      kabatone: 'K-Safety — full operational GIS with incidents, units, and video feeds',
    },
    {
      category: 'Traffic management',
      rapidsos: 'Not included',
      kabatone: 'K-Traffic — intelligent signal and traffic incident management',
    },
    {
      category: 'Integration model',
      rapidsos: 'Data source feeding existing CAD — connects with Apple, Google, Uber',
      kabatone: 'Operational platform consuming data from multiple sources, including RapidSOS',
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

        {/* -- BREADCRUMB -- */}
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
          <span style={{ color: ACCENT }}>KabatOne vs RapidSOS</span>
        </div>

        {/* -- HERO -- */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 40px 80px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: '20px',
          }}>
            <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', background: ACCENT, marginRight: '8px', verticalAlign: 'middle', animation: 'pulse 2s infinite' }} />
            {es ? 'Comparacion de Plataformas' : 'Platform Comparison'}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '28px',
          }}>
            {es
              ? 'KabatOne vs RapidSOS — Datos de Llamada vs Respuesta Completa'
              : 'KabatOne vs RapidSOS — Call Data vs Full Response'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'RapidSOS enriquece la fase de recepcion de llamadas 911 con ubicacion precisa del llamante, datos de salud y contexto del dispositivo. KabatOne gestiona todo lo que sigue despues de que se recibe la informacion: despacho CAD completo, video de camaras de ciudad, conciencia situacional GIS y gestion de trafico. Son complementarios — RapidSOS mejora los datos de entrada, KabatOne coordina la respuesta operacional.'
              : 'RapidSOS enriches the 911 call intake phase with precise caller location, health data, and device context. KabatOne manages everything that follows after the information is received: full CAD dispatch, city camera video, GIS situational awareness, and traffic management. They are complementary — RapidSOS improves the input data, KabatOne coordinates the operational response.'}
          </p>
        </section>

        {/* -- WHAT IS RAPIDSOS? -- */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Que Es RapidSOS?' : 'What Is RapidSOS?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'RapidSOS es una plataforma de datos de emergencia que conecta datos del llamante con centros de despacho 911 (PSAPs). Su producto principal, RapidSOS Portal, entrega ubicacion precisa del dispositivo, datos de salud de wearables como Apple Watch, datos de impacto vehicular de automoviles conectados e informacion de viajes compartidos directamente al operador del 911. RapidSOS se asocia con Apple, Google, Uber y otros proveedores de datos para canalizar contexto del llamante en tiempo real al PSAP.'
                : 'RapidSOS is an emergency data platform that connects caller data with 911 dispatch centers (PSAPs). Its main product, RapidSOS Portal, delivers precise device location, health data from wearables like Apple Watch, crash data from connected vehicles, and ride-share trip information directly to the 911 operator. RapidSOS partners with Apple, Google, Uber, and other data providers to pipe real-time caller context into the PSAP.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'La propuesta de valor de RapidSOS es mejorar la calidad de la informacion disponible durante los primeros momentos de una emergencia. En lugar de depender unicamente de la ubicacion por torres celulares, RapidSOS entrega coordenadas GPS precisas desde el dispositivo, datos del perfil de salud del llamante (alergias, condiciones medicas) y, en casos de accidentes vehiculares, datos del impacto como severidad y numero de ocupantes.'
                : "RapidSOS's value proposition is improving the quality of information available during the first moments of an emergency. Instead of relying solely on cell tower location, RapidSOS delivers precise GPS coordinates from the device, caller health profile data (allergies, medical conditions), and in vehicle crash cases, impact data such as severity and number of occupants."}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'RapidSOS no despacha unidades, no gestiona video de camaras de ciudad, no proporciona GIS operacional y no coordina trafico. Opera como una capa de enriquecimiento de datos que alimenta al sistema CAD o PSAP existente del centro de despacho. Para todo lo que ocurre despues de que se recibe la llamada — la coordinacion de la respuesta operacional — se necesitan sistemas adicionales.'
                : 'RapidSOS does not dispatch units, does not manage city camera video, does not provide operational GIS, and does not coordinate traffic. It operates as a data enrichment layer that feeds into the dispatch center\'s existing CAD or PSAP system. For everything that happens after the call is received — the coordination of the operational response — additional systems are required.'}
            </p>
          </div>
        </section>

        {/* -- WHAT IS KABATONE? -- */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Que Es KabatOne?' : 'What Is KabatOne?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne es una plataforma unificada de seguridad publica construida para ciudades, municipios, centros de mando y agencias de respuesta. Integra gestion de video con analitica IA (K-Video), despacho CAD completo (K-Dispatch), conciencia situacional GIS (K-Safety), gestion inteligente de trafico (K-Traffic) y video comunitario (K-Connect) en una plataforma nativa. No requiere hardware propietario — se integra con las camaras, radios y sensores que la organizacion ya tiene.'
                : 'KabatOne is a unified public safety platform built for cities, municipalities, command centers, and response agencies. It integrates AI-powered video management (K-Video), full CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video (K-Connect) in one native platform. It requires no proprietary hardware — it integrates with the cameras, radios, and sensors the organization already has.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Mientras RapidSOS mejora los datos que llegan al centro de despacho durante la fase de llamada, KabatOne gestiona todo el ciclo de respuesta: el operador del centro de mando recibe el evento con los datos enriquecidos, ve el video de las camaras de ciudad mas cercanas al incidente, asigna la unidad mas adecuada basandose en proximidad y disponibilidad en tiempo real, rastrea la unidad respondedora en el GIS y coordina los semaforos en la ruta. Todo en una sola plataforma, sin cambiar de sistema.'
                : 'While RapidSOS improves the data arriving at the dispatch center during the call phase, KabatOne manages the entire response cycle: the command center operator receives the event with enriched data, sees video from city cameras nearest the incident, assigns the most appropriate unit based on real-time proximity and availability, tracks the responding unit in GIS, and coordinates traffic signals on the route. All in one platform, without switching systems.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne esta desplegado en mas de 40 ciudades protegiendo a mas de 73 millones de ciudadanos, principalmente en Mexico y Latinoamerica — mercados donde las ciudades necesitan capacidad de coordinacion operacional a escala de ciudad, y donde los datos enriquecidos del llamante pueden alimentar directamente al flujo de despacho CAD de KabatOne.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens, primarily in Mexico and Latin America — markets where cities need city-scale operational coordination capability, and where enriched caller data can feed directly into KabatOne\'s CAD dispatch workflow.'}
            </p>
          </div>
        </section>

        {/* -- COMPARISON TABLE -- */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '16px',
            }}>
              {es ? 'KabatOne vs RapidSOS: Diferencias Clave' : 'KabatOne vs RapidSOS: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara KabatOne y RapidSOS en siete dimensiones operativas. RapidSOS es una plataforma de datos; KabatOne es una plataforma de operaciones. Operan en fases diferentes del ciclo de respuesta a emergencias.'
                : 'The following table compares KabatOne and RapidSOS across seven operational dimensions. RapidSOS is a data platform; KabatOne is an operations platform. They operate in different phases of the emergency response cycle.'}
            </p>

            <div style={{ borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
              <div style={{
                display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr',
                background: `${ACCENT}15`, borderBottom: '1px solid var(--border)',
              }}>
                <div style={{ padding: '16px 20px', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.08em', textTransform: 'uppercase', color: ACCENT }}>
                  {es ? 'Dimension' : 'Dimension'}
                </div>
                <div style={{ padding: '16px 20px', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', borderLeft: '1px solid var(--border)' }}>
                  RapidSOS
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
                    {row.rapidsos}
                  </div>
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--dim)', lineHeight: 1.55, borderLeft: '1px solid var(--border)' }}>
                    {row.kabatone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- DATA ENRICHMENT VS FULL RESPONSE -- */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Enriquecimiento de Datos vs Coordinacion de Respuesta' : 'Data Enrichment vs Response Coordination'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El ciclo de respuesta a emergencias tiene dos fases fundamentales: la fase de recepcion de informacion y la fase de respuesta operacional. RapidSOS opera en la primera fase — mejora la calidad de los datos que llegan al centro de despacho. Cuando alguien llama al 911, RapidSOS puede entregar la ubicacion GPS exacta del dispositivo, datos del perfil de salud del llamante, y si hay un accidente vehicular, datos del impacto desde el automovil conectado.'
                : 'The emergency response cycle has two fundamental phases: the information intake phase and the operational response phase. RapidSOS operates in the first phase — it improves the quality of data arriving at the dispatch center. When someone calls 911, RapidSOS can deliver the exact GPS location of the device, caller health profile data, and if there is a vehicle crash, impact data from the connected car.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Pero saber donde esta el llamante y que le sucede es solo el inicio. La respuesta operacional requiere despachar la unidad mas adecuada, monitorear las camaras de ciudad cercanas al incidente, rastrear la unidad respondedora en el GIS, coordinar el trafico en la ruta de respuesta y gestionar multiples incidentes simultaneos. Estas capacidades no las proporciona una plataforma de datos — las proporciona una plataforma de operaciones como KabatOne.'
                : 'But knowing where the caller is and what happened to them is only the beginning. The operational response requires dispatching the most appropriate unit, monitoring city cameras near the incident, tracking the responding unit in GIS, coordinating traffic on the response route, and managing multiple simultaneous incidents. These capabilities are not provided by a data platform — they are provided by an operations platform like KabatOne.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'RapidSOS y KabatOne son complementarios por diseno. RapidSOS enriquece la fase de entrada con mejores datos del llamante. KabatOne toma esos datos y los convierte en respuesta coordinada — despacho, video, GIS y trafico. Un centro de mando que usa ambos tiene mejor informacion de entrada y una plataforma operacional completa para actuar sobre esa informacion.'
                : 'RapidSOS and KabatOne are complementary by design. RapidSOS enriches the intake phase with better caller data. KabatOne takes that data and turns it into coordinated response — dispatch, video, GIS, and traffic. A command center using both has better input information and a complete operational platform to act on that information.'}
            </p>
          </div>
        </section>

        {/* -- INTEGRATION MODEL -- */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Como Funcionan Juntos RapidSOS y KabatOne' : 'How RapidSOS and KabatOne Work Together'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'RapidSOS funciona como una fuente de datos que alimenta al sistema de despacho. KabatOne K-Dispatch puede recibir datos enriquecidos del llamante a traves de APIs estandar — ubicacion GPS precisa, tipo de emergencia, datos de salud del llamante y contexto del dispositivo. Una vez que K-Dispatch recibe esa informacion, toma el flujo de coordinacion operacional.'
                : 'RapidSOS functions as a data source that feeds into the dispatch system. KabatOne K-Dispatch can receive enriched caller data through standard APIs — precise GPS location, incident type, caller health data, and device context. Once K-Dispatch receives that information, it takes over the operational coordination workflow.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'En la practica, esto significa que cuando llega un evento de emergencia con datos de RapidSOS, K-Dispatch muestra la ubicacion del incidente en el GIS de K-Safety, identifica automaticamente las camaras de K-Video mas cercanas, recomienda las unidades disponibles mas proximas basandose en ubicacion GPS y disponibilidad en tiempo real, y puede coordinar K-Traffic para optimizar la ruta de respuesta.'
                : 'In practice, this means that when an emergency event arrives with RapidSOS data, K-Dispatch displays the incident location in K-Safety GIS, automatically identifies the nearest K-Video cameras, recommends the closest available units based on GPS location and real-time availability, and can coordinate K-Traffic to optimize the response route.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Para organizaciones en mercados internacionales — como Mexico y Latinoamerica, donde el ecosistema de datos de emergencia puede funcionar de manera diferente — KabatOne K-Dispatch tiene funcionalidades nativas de intake de llamadas que no dependen de RapidSOS ni de infraestructura PSAP de EE.UU. K-Dispatch gestiona directamente la recepcion y coordinacion de emergencias, y puede enriquecerse con datos de RapidSOS cuando estan disponibles.'
                : 'For organizations in international markets — such as Mexico and Latin America, where the emergency data ecosystem may work differently — KabatOne K-Dispatch has native call intake functionality that does not depend on RapidSOS or US PSAP infrastructure. K-Dispatch directly manages emergency reception and coordination, and can be enriched with RapidSOS data when available.'}
            </p>
          </div>
        </section>

        {/* -- MODULE LINKS -- */}
        <section style={{ padding: '64px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '10px',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '16px',
            }}>
              {es ? 'Modulos de KabatOne' : 'KabatOne Modules'}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {[
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'GIS y conciencia situacional' : 'GIS & situational awareness', color: '#06b6d4' },
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD de emergencias' : 'Emergency CAD dispatch', color: '#ef4444' },
                { href: '/k-video', label: 'K-Video', desc: es ? 'Gestion de video con IA' : 'AI video management', color: '#a855f7' },
                { href: '/k-traffic', label: 'K-Traffic', desc: es ? 'Gestion de trafico inteligente' : 'Intelligent traffic management', color: '#06b6d4' },
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

            {/* ── Internal links ── */}
            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '12px' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {es ? 'Integraciones:' : 'Integrations:'}
                </span>
                {[
                  { href: '/integrations/panic-buttons', label: es ? 'Botones de Pánico' : 'Panic Buttons' },
                  { href: '/integrations/sensor-fusion', label: es ? 'Fusión de Sensores' : 'Sensor Fusion' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} style={{ color: '#06b6d4', textDecoration: 'none', borderBottom: '1px solid rgba(6,182,212,0.25)' }}>
                    {link.label}
                  </Link>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '12px' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {es ? 'Recursos:' : 'Resources:'}
                </span>
                {[
                  { href: '/resources/what-is-cad-dispatch-software', label: es ? 'Qué es Software CAD' : 'What Is CAD Dispatch Software' },
                  { href: '/resources/what-is-a-public-safety-platform', label: es ? 'Qué es una Plataforma' : 'What Is a Platform' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} style={{ color: '#06b6d4', textDecoration: 'none', borderBottom: '1px solid rgba(6,182,212,0.25)' }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* -- FAQ SECTION -- */}
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
              {es ? 'KabatOne vs RapidSOS: Preguntas y Respuestas' : 'KabatOne vs RapidSOS: Questions & Answers'}
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

        {/* -- RELATED -- */}
        <section style={{ padding: '64px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '24px',
            }}>
              {es ? 'Articulos Relacionados' : 'Related Resources'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link href="/vs/carbyne" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Carbyne' : 'KabatOne vs Carbyne'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/vs/prepared911" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Prepared 911' : 'KabatOne vs Prepared 911'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/vs/cad" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Sistemas CAD Tradicionales' : 'KabatOne vs Traditional CAD Systems'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/k-dispatch" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'K-Dispatch — Despacho CAD para Seguridad Publica' : 'K-Dispatch — CAD Dispatch for Public Safety'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* -- CTA -- */}
        <CTASection
          es={es}
          h2={es ? '¿Listo para Ver la Diferencia?' : 'Ready to See the Difference?'}
          subtitle={es
            ? 'Descubre como KabatOne coordina la respuesta completa — desde los datos del llamante hasta la resolucion del incidente — con video, CAD, GIS y trafico en un solo sistema.'
            : 'See how KabatOne coordinates the complete response — from caller data to incident resolution — with video, CAD, GIS, and traffic in one system.'}
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
