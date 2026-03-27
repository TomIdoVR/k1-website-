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
  return generatePageMetadata('vsPrepared911', locale)
}

export default async function VsPrepared911Page({
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
    { name: 'KabatOne vs Prepared 911', url: es ? 'https://kabatone.com/es/vs/prepared911/' : 'https://kabatone.com/vs/prepared911/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre KabatOne y Prepared 911?',
      answer: 'Prepared 911 (ahora Prepared) es una plataforma moderna de recepción de llamadas 911 — un sistema de PSAP (Punto de Respuesta de Seguridad Pública) basado en la nube que moderniza la experiencia del operador de 911 con NG911, llamadas de video desde el teléfono del llamante, texto al 911 y despacho básico. KabatOne es la plataforma que gestiona todo lo que ocurre después de que se recibe la llamada: despacho CAD completo (K-Dispatch), video de cámaras de ciudad (K-Video), conciencia situacional GIS (K-Safety) y gestión de tráfico (K-Traffic). Prepared moderniza los primeros 60 segundos del ciclo de emergencia; KabatOne coordina la respuesta completa.',
    },
    {
      question: '¿Prepared 911 tiene sistema CAD completo?',
      answer: 'Prepared incluye funcionalidades básicas de despacho — puede crear y gestionar eventos de emergencia, asignar unidades y comunicarse con los respondedores. Sin embargo, no es un sistema CAD de grado operacional completo con recomendación de unidades basada en proximidad y disponibilidad en tiempo real, routing geoespacial avanzado, logging histórico de despacho para análisis operacional, ni integración nativa con video de ciudad, GIS y tráfico. KabatOne K-Dispatch está construido específicamente para centros de mando que coordinan operaciones complejas a escala de ciudad.',
    },
    {
      question: '¿Qué es NG911 y cómo lo maneja KabatOne?',
      answer: 'NG911 (Next Generation 911) es el estándar moderno para sistemas de respuesta a emergencias — permite que las llamadas de emergencia incluyan texto, fotos y video en tiempo real desde el teléfono del llamante, además de ubicación precisa por GPS. Prepared 911 está diseñado específicamente para PSAP NG911. KabatOne K-Dispatch integra con sistemas NG911 existentes para recibir esos datos — ubicación del llamante, tipo de emergencia, datos multimedia — y los incorpora al flujo de despacho CAD con video de cámaras de ciudad, rastreo de unidades en GIS y coordinación de tráfico.',
    },
    {
      question: '¿Puede KabatOne reemplazar a Prepared 911?',
      answer: 'KabatOne K-Dispatch gestiona el despacho y coordinación de respuesta después de que se recibe la llamada. Para organizaciones que necesitan específicamente una solución de recepción de llamadas NG911 certificada (un PSAP), Prepared es un sistema especializado. Sin embargo, K-Dispatch tiene funcionalidades de intake de llamadas integradas, y KabatOne puede funcionar como la plataforma operacional central del centro de mando. Para muchas organizaciones — especialmente en mercados internacionales donde el estándar PSAP de EE.UU. no aplica — KabatOne cubre todo el flujo operacional sin necesidad de Prepared.',
    },
    {
      question: '¿Cómo se integran Prepared 911 y KabatOne?',
      answer: 'Prepared 911 puede integrarse con sistemas CAD a través de APIs estándar. Si una organización usa Prepared para la recepción de llamadas 911, KabatOne K-Dispatch puede recibir los eventos generados por Prepared y tomar el flujo de despacho completo — asignando unidades, monitoreando el video de las cámaras de ciudad más cercanas al incidente, rastreando la respuesta en GIS y coordinando el tráfico en la ruta. En este modelo, Prepared gestiona el primer contacto; KabatOne gestiona la respuesta completa.',
    },
    {
      question: '¿Qué ofrece KabatOne que Prepared 911 no ofrece?',
      answer: 'Más allá de la recepción de llamadas, KabatOne proporciona: despacho CAD completo (K-Dispatch) con recomendación de unidades, routing geoespacial y logging operacional; video de cámaras fijas de ciudad con analítica IA (K-Video) — el operador puede ver el video de las cámaras cercanas al incidente directamente en el contexto de despacho; conciencia situacional GIS a escala de ciudad (K-Safety) con rastreo de todas las unidades e incidentes; gestión inteligente de tráfico (K-Traffic) para coordinar semáforos durante la respuesta; y video comunitario (K-Connect). Prepared se enfoca en modernizar el primer eslabón de la cadena de respuesta; KabatOne gestiona toda la cadena.',
    },
  ] : [
    {
      question: 'What is the difference between KabatOne and Prepared 911?',
      answer: 'Prepared 911 (now Prepared) is a modern 911 call-taking platform — a cloud-based PSAP (Public Safety Answering Point) system that modernizes the 911 operator experience with NG911, caller phone video calls, text-to-911, and basic dispatch. KabatOne is the platform that manages everything that happens after the call is received: full CAD dispatch (K-Dispatch), city camera video (K-Video), GIS situational awareness (K-Safety), and traffic management (K-Traffic). Prepared modernizes the first 60 seconds of the emergency cycle; KabatOne coordinates the full response.',
    },
    {
      question: 'Does Prepared 911 have a full CAD system?',
      answer: 'Prepared includes basic dispatch functionality — it can create and manage emergency events, assign units, and communicate with responders. However, it is not a full operational-grade CAD system with unit recommendation based on real-time proximity and availability, advanced geospatial routing, historical dispatch logging for operational analysis, or native integration with city video, GIS, and traffic. KabatOne K-Dispatch is built specifically for command centers coordinating complex operations at city scale.',
    },
    {
      question: 'What is NG911 and how does KabatOne handle it?',
      answer: 'NG911 (Next Generation 911) is the modern standard for emergency response systems — it enables emergency calls to include real-time text, photos, and video from the caller\'s phone, as well as precise GPS location. Prepared 911 is designed specifically for NG911 PSAPs. KabatOne K-Dispatch integrates with existing NG911 systems to receive that data — caller location, incident type, multimedia data — and incorporates it into the CAD dispatch workflow with city camera video, unit tracking in GIS, and traffic coordination.',
    },
    {
      question: 'Can KabatOne replace Prepared 911?',
      answer: 'KabatOne K-Dispatch manages dispatch and response coordination after the call is received. For organizations that specifically need a certified NG911 call-taking solution (a PSAP), Prepared is a specialized system. However, K-Dispatch has integrated call intake functionality, and KabatOne can function as the central operational platform for the command center. For many organizations — especially in international markets where the US PSAP standard does not apply — KabatOne covers the full operational workflow without requiring Prepared.',
    },
    {
      question: 'How do Prepared 911 and KabatOne integrate?',
      answer: 'Prepared 911 can integrate with CAD systems through standard APIs. If an organization uses Prepared for 911 call receipt, KabatOne K-Dispatch can receive events generated by Prepared and take over the full dispatch workflow — assigning units, monitoring the video from city cameras nearest the incident, tracking the response in GIS, and coordinating traffic on the response route. In this model, Prepared manages the first contact; KabatOne manages the complete response.',
    },
    {
      question: 'What does KabatOne offer that Prepared 911 does not?',
      answer: 'Beyond call receipt, KabatOne provides: full CAD dispatch (K-Dispatch) with unit recommendation, geospatial routing, and operational logging; city fixed camera video with AI analytics (K-Video) — the operator can see video from cameras near the incident directly in the dispatch context; city-scale GIS situational awareness (K-Safety) tracking all units and incidents; intelligent traffic management (K-Traffic) to coordinate signals during response; and community video (K-Connect). Prepared focuses on modernizing the first link in the response chain; KabatOne manages the entire chain.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Categoría principal',
      prepared: 'Plataforma PSAP moderna — recepción de llamadas NG911 basada en la nube',
      kabatone: 'Plataforma de operaciones unificada — video, CAD, GIS y tráfico',
    },
    {
      category: 'Recepción de llamadas 911',
      prepared: 'Especializado — NG911, texto al 911, video de llamante, ubicación GPS',
      kabatone: 'K-Dispatch incluye intake de llamadas — integra con sistemas NG911',
    },
    {
      category: 'Despacho / CAD',
      prepared: 'Despacho básico de emergencias integrado en el flujo PSAP',
      kabatone: 'K-Dispatch — CAD completo con recomendación de unidades, routing y logging',
    },
    {
      category: 'Videovigilancia',
      prepared: 'Video del llamante en tiempo real durante la llamada — no cámaras de ciudad',
      kabatone: 'K-Video — cámaras fijas de ciudad con analítica IA, ONVIF/RTSP',
    },
    {
      category: 'GIS / Conciencia situacional',
      prepared: 'Mapa básico con ubicación del llamante y unidades',
      kabatone: 'K-Safety — GIS operacional completo con incidentes, unidades y feeds de video',
    },
    {
      category: 'Gestión de tráfico',
      prepared: 'No incluido',
      kabatone: 'K-Traffic — gestión inteligente de semáforos e incidentes de tráfico',
    },
    {
      category: 'Alcance geográfico',
      prepared: 'Optimizado para PSAPs en EE.UU. con estándares NG911 NENA/APCO',
      kabatone: 'Desplegado en 40+ ciudades en México y Latinoamérica',
    },
  ] : [
    {
      category: 'Primary category',
      prepared: 'Modern PSAP platform — cloud-based NG911 call taking',
      kabatone: 'Unified operations platform — video, CAD, GIS, and traffic',
    },
    {
      category: '911 call receipt',
      prepared: 'Specialized — NG911, text-to-911, caller video, GPS location',
      kabatone: 'K-Dispatch includes call intake — integrates with NG911 systems',
    },
    {
      category: 'Dispatch / CAD',
      prepared: 'Basic emergency dispatch integrated in the PSAP workflow',
      kabatone: 'K-Dispatch — full CAD with unit recommendation, routing, and logging',
    },
    {
      category: 'Video surveillance',
      prepared: 'Real-time caller video during the call — no city fixed cameras',
      kabatone: 'K-Video — city fixed cameras with AI analytics, ONVIF/RTSP',
    },
    {
      category: 'GIS / Situational awareness',
      prepared: 'Basic map with caller location and units',
      kabatone: 'K-Safety — full operational GIS with incidents, units, and video feeds',
    },
    {
      category: 'Traffic management',
      prepared: 'Not included',
      kabatone: 'K-Traffic — intelligent signal and traffic incident management',
    },
    {
      category: 'Geographic focus',
      prepared: 'Optimized for US PSAPs with NENA/APCO NG911 standards',
      kabatone: 'Deployed across 40+ cities in Mexico and Latin America',
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
          <span style={{ color: ACCENT }}>KabatOne vs Prepared 911</span>
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
              ? 'KabatOne vs Prepared 911 — Más Allá de la Llamada'
              : 'KabatOne vs Prepared 911 — Beyond the Call'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'Prepared 911 modernizó la experiencia del operador de 911 — llamadas de video desde el teléfono del llamante, texto al 911, ubicación GPS precisa y una interfaz de despacho diseñada para el siglo XXI. KabatOne empieza donde termina la llamada: CAD completo, video de cámaras de ciudad, conciencia situacional GIS y gestión de tráfico — coordinando la respuesta completa desde el centro de mando.'
              : 'Prepared 911 modernized the 911 operator experience — caller phone video calls, text-to-911, precise GPS location, and a dispatch interface designed for the 21st century. KabatOne starts where the call ends: full CAD, city camera video, GIS situational awareness, and traffic management — coordinating the complete response from the command center.'}
          </p>
        </section>

        {/* ── WHAT IS PREPARED 911? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es Prepared 911?' : 'What Is Prepared 911?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Prepared (antes Prepared 911) es una plataforma de software para PSAPs (Puntos de Respuesta de Seguridad Pública) — los centros donde se reciben las llamadas al 911. Su propuesta de valor es modernizar la experiencia del operador de 911: reemplazar los sistemas de recepción de llamadas anticuados con una solución basada en la nube que soporte NG911 (Next Generation 911) — incluyendo llamadas de texto al 911, video en tiempo real desde el teléfono del llamante y ubicación GPS precisa.'
                : 'Prepared (formerly Prepared 911) is a software platform for PSAPs (Public Safety Answering Points) — the centers where 911 calls are received. Its value proposition is modernizing the 911 operator experience: replacing outdated call-taking systems with a cloud-based solution that supports NG911 (Next Generation 911) — including text-to-911, real-time video from the caller\'s phone, and precise GPS location.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'La interfaz de Prepared está diseñada para reducir el tiempo de procesamiento de llamadas y mejorar la información disponible para el operador en los primeros momentos de la emergencia — cuando la persona llama al 911, el operador puede ver su ubicación exacta en el mapa, recibir fotos o video desde su teléfono, y gestionar múltiples llamadas simultáneas en una interfaz moderna. Prepared también incluye funcionalidades básicas de despacho para asignar unidades desde la misma interfaz de recepción de llamadas.'
                : "Prepared's interface is designed to reduce call processing time and improve the information available to the operator in the first moments of the emergency — when someone calls 911, the operator can see their exact location on the map, receive photos or video from their phone, and manage multiple simultaneous calls in a modern interface. Prepared also includes basic dispatch functionality to assign units from the same call-taking interface."}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Prepared está optimizado para el mercado de PSAPs de EE.UU., donde los estándares NG911 de NENA y APCO definen los requisitos técnicos. Para centros de mando que necesitan coordinar video de cámaras de ciudad, despacho CAD completo con routing geoespacial, conciencia situacional GIS a escala de ciudad o gestión de tráfico durante emergencias, Prepared requiere sistemas adicionales para completar el flujo operacional.'
                : 'Prepared is optimized for the US PSAP market, where NENA and APCO NG911 standards define technical requirements. For command centers that need to coordinate city camera video, full CAD dispatch with geospatial routing, city-scale GIS situational awareness, or traffic management during emergencies, Prepared requires additional systems to complete the operational workflow.'}
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
                ? 'KabatOne es una plataforma unificada de seguridad pública construida para ciudades, municipios, centros de mando y agencias de respuesta. Integra gestión de video con analítica IA (K-Video), despacho CAD completo (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario (K-Connect) en una plataforma nativa. No requiere hardware propietario — se integra con las cámaras, radios y sensores que la organización ya tiene.'
                : 'KabatOne is a unified public safety platform built for cities, municipalities, command centers, and response agencies. It integrates AI-powered video management (K-Video), full CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video (K-Connect) in one native platform. It requires no proprietary hardware — it integrates with the cameras, radios, and sensors the organization already has.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Mientras Prepared se enfoca en los primeros momentos de la emergencia — la llamada al 911 — KabatOne gestiona todo el ciclo de respuesta: el operador del centro de mando recibe el evento, ve el video de las cámaras de ciudad más cercanas al incidente, asigna la unidad más adecuada basándose en proximidad y disponibilidad en tiempo real, rastrea la unidad respondedora en el GIS y coordina los semáforos en la ruta. Todo en una sola plataforma, sin cambiar de sistema.'
                : 'While Prepared focuses on the first moments of the emergency — the 911 call — KabatOne manages the entire response cycle: the command center operator receives the event, sees video from city cameras nearest the incident, assigns the most appropriate unit based on real-time proximity and availability, tracks the responding unit in GIS, and coordinates traffic signals on the route. All in one platform, without switching systems.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos, principalmente en México y Latinoamérica — mercados donde el modelo de PSAP de EE.UU. no aplica directamente, pero donde las ciudades necesitan la misma capacidad de coordinación operacional a escala de ciudad.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens, primarily in Mexico and Latin America — markets where the US PSAP model does not apply directly, but where cities need the same city-scale operational coordination capability.'}
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
              {es ? 'KabatOne vs Prepared 911: Diferencias Clave' : 'KabatOne vs Prepared 911: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara KabatOne y Prepared 911 en siete dimensiones operativas críticas para organizaciones de seguridad pública.'
                : 'The following table compares KabatOne and Prepared 911 across seven operational dimensions critical for public safety organizations.'}
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
                  Prepared 911
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
                    {row.prepared}
                  </div>
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--dim)', lineHeight: 1.55, borderLeft: '1px solid var(--border)' }}>
                    {row.kabatone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CALL RECEIPT VS FULL RESPONSE ── */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Los Primeros 60 Segundos vs el Ciclo Completo de Respuesta' : 'The First 60 Seconds vs the Full Response Cycle'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Cuando alguien llama al 911, los primeros 60 segundos son críticos: el operador necesita saber quién llama, dónde está, qué está pasando y qué recursos enviar. Prepared 911 está diseñado para optimizar exactamente esos 60 segundos — una interfaz moderna, video del llamante, ubicación GPS precisa y despacho rápido.'
                : 'When someone calls 911, the first 60 seconds are critical: the operator needs to know who is calling, where they are, what is happening, and what resources to send. Prepared 911 is designed to optimize exactly those 60 seconds — a modern interface, caller video, precise GPS location, and fast dispatch.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Pero la respuesta de emergencia continúa mucho más allá de esos primeros 60 segundos. La unidad sale — ¿cómo la rastrea el centro de mando en el GIS? Hay un incidente en la calle — ¿qué cámara de ciudad está apuntando hacia ahí? El tráfico está bloqueado en la ruta de la unidad — ¿puede el centro de mando ajustar los semáforos? Hay múltiples incidentes simultáneos — ¿cómo prioriza el despachador y coordina los recursos? Estas preguntas definen el trabajo del centro de mando después de la llamada, y KabatOne está construido para responderlas.'
                : 'But the emergency response continues far beyond those first 60 seconds. The unit deploys — how does the command center track it in GIS? There is an incident on the street — which city camera is pointing there? Traffic is blocked on the unit\'s route — can the command center adjust the signals? There are multiple simultaneous incidents — how does the dispatcher prioritize and coordinate resources? These questions define the command center\'s work after the call, and KabatOne is built to answer them.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Prepared y KabatOne son más complementarios que competidores directos. Prepared moderniza el primer eslabón de la cadena — la recepción de la llamada al 911. KabatOne gestiona toda la cadena de respuesta — desde la recepción del evento hasta la resolución del incidente, incluyendo video, despacho, GIS y tráfico. En muchos casos, las organizaciones pueden usar ambos: Prepared para la recepción NG911, KabatOne como la plataforma operacional central del centro de mando.'
                : 'Prepared and KabatOne are more complementary than direct competitors. Prepared modernizes the first link in the chain — the 911 call receipt. KabatOne manages the entire response chain — from event receipt to incident resolution, including video, dispatch, GIS, and traffic. In many cases, organizations can use both: Prepared for NG911 call receipt, KabatOne as the central operational platform of the command center.'}
            </p>
          </div>
        </section>

        {/* ── NG911 SECTION ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'KabatOne y NG911 — Integrando el Contexto del Llamante' : 'KabatOne and NG911 — Integrating Caller Context'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne K-Dispatch puede recibir datos de sistemas NG911 a través de APIs estándar — incluyendo ubicación GPS del llamante, tipo de emergencia y datos multimedia. Una vez que se recibe el evento, K-Dispatch toma el flujo de coordinación: muestra la ubicación del incidente en el GIS de K-Safety, identifica las cámaras de K-Video más cercanas, recomienda las unidades disponibles más próximas y puede coordinar K-Traffic para preparar la ruta.'
                : 'KabatOne K-Dispatch can receive data from NG911 systems through standard APIs — including caller GPS location, incident type, and multimedia data. Once the event is received, K-Dispatch takes over the coordination workflow: it shows the incident location in K-Safety GIS, identifies the nearest K-Video cameras, recommends the closest available units, and can coordinate K-Traffic to prepare the route.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Para organizaciones en mercados internacionales — donde el sistema 911 puede funcionar de manera diferente o donde el estándar NG911 de EE.UU. no aplica directamente — KabatOne K-Dispatch funciona como el sistema de recepción y coordinación central, sin depender de infraestructura PSAP de EE.UU. K-Dispatch tiene funcionalidades nativas de intake de llamadas para centros de mando que gestionan directamente la recepción de emergencias.'
                : 'For organizations in international markets — where the 911 system may work differently or where the US NG911 standard does not apply directly — KabatOne K-Dispatch functions as the central reception and coordination system, without depending on US PSAP infrastructure. K-Dispatch has native call intake functionality for command centers that directly manage emergency reception.'}
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
              {es ? 'KabatOne vs Prepared 911: Preguntas y Respuestas' : 'KabatOne vs Prepared 911: Questions & Answers'}
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
              <Link href="/vs/carbyne" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Carbyne' : 'KabatOne vs Carbyne'}</span>
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
              <Link href="/vs/motorola" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Motorola Solutions' : 'KabatOne vs Motorola Solutions'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/k-dispatch" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'K-Dispatch — Despacho CAD para Seguridad Pública' : 'K-Dispatch — CAD Dispatch for Public Safety'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={es ? '¿Listo para Ver la Diferencia?' : 'Ready to See the Difference?'}
          subtitle={es
            ? 'Descubre cómo KabatOne coordina la respuesta completa — desde la llamada hasta la resolución del incidente — con video, CAD, GIS y tráfico en un solo sistema.'
            : 'See how KabatOne coordinates the complete response — from the call to incident resolution — with video, CAD, GIS, and traffic in one system.'}
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
