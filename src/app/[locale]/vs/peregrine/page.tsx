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
  return generatePageMetadata('vsPeregrine', locale)
}

export default async function VsPeregrinePage({
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
    { name: 'KabatOne vs Peregrine', url: es ? 'https://kabatone.com/es/vs/peregrine/' : 'https://kabatone.com/vs/peregrine/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre KabatOne y Peregrine?',
      answer: 'Peregrine es una plataforma de analítica de seguridad pública que agrega datos de múltiples sistemas — CAD, RMS, cámaras, sensores — para producir análisis predictivos, informes de crimen y dashboards de inteligencia para líderes policiales. KabatOne es una plataforma operacional completa: incluye despacho CAD (K-Dispatch), gestión de video con IA (K-Video), conciencia situacional GIS (K-Safety), gestión de tráfico (K-Traffic) y video comunitario (K-Connect). Peregrine es una capa de inteligencia analítica; KabatOne es el sistema donde ocurre la operación.',
    },
    {
      question: '¿Peregrine tiene sistema de despacho CAD?',
      answer: 'No. Peregrine no incluye un sistema CAD propio. Se integra con los sistemas CAD y RMS existentes de la agencia para extraer datos y generar análisis, pero no gestiona el despacho de unidades en tiempo real. KabatOne K-Dispatch es un sistema CAD completo con intake de llamadas, recomendación de unidades, logging de despacho y seguimiento de unidades — nativo e integrado con video, GIS y tráfico.',
    },
    {
      question: '¿Qué tipo de analítica predictiva ofrece Peregrine?',
      answer: 'Peregrine ofrece análisis de patrones de crimen, mapas de calor, predicción de zonas de riesgo, análisis de despliegue de recursos y dashboards para líderes de agencias. Estas herramientas ayudan a los directores de policía a tomar decisiones estratégicas sobre patrullaje y asignación de recursos. KabatOne se centra en la operación en tiempo real — K-Safety proporciona conciencia situacional en vivo con incidentes, unidades y video en un mapa operacional, pero no incluye análisis predictivos de largo plazo como los de Peregrine.',
    },
    {
      question: '¿Peregrine tiene gestión de video o cámaras?',
      answer: 'No. Peregrine puede conectarse a datos de sistemas de video existentes para incorporarlos en sus análisis, pero no es un sistema de gestión de video (VMS). No gestiona cámaras fijas de ciudad, no incluye analítica de video con IA, ni LPR nativo. KabatOne K-Video gestiona cámaras de cualquier fabricante (Hikvision, Axis, Dahua, Bosch, etc.), incluye detección de eventos con IA, reconocimiento de matrículas y correlación de video con incidentes de despacho.',
    },
    {
      question: '¿Puede KabatOne reemplazar a Peregrine?',
      answer: 'Para organizaciones que buscan una plataforma unificada de operaciones, KabatOne cubre las operaciones en tiempo real que Peregrine no incluye — CAD, video, GIS operacional y tráfico. Sin embargo, Peregrine está especializado en análisis estratégico y predicción a largo plazo — capacidades que KabatOne no replica en la misma profundidad. Las dos plataformas pueden ser complementarias: KabatOne para la operación diaria y Peregrine para el análisis estratégico.',
    },
    {
      question: '¿Qué ofrece KabatOne que Peregrine no ofrece?',
      answer: 'KabatOne proporciona: despacho CAD completo (K-Dispatch) con gestión de llamadas en tiempo real, recomendación de unidades y logging — Peregrine no tiene CAD operacional; gestión de video con IA (K-Video) con LPR, detección de eventos y correlación con incidentes — Peregrine no incluye gestión de video; GIS operacional en tiempo real (K-Safety) con posición de unidades y feeds de video en vivo — Peregrine ofrece dashboards analíticos pero no un GIS operacional nativo; gestión de tráfico (K-Traffic) para coordinar semáforos y respuesta de emergencia.',
    },
  ] : [
    {
      question: 'What is the difference between KabatOne and Peregrine?',
      answer: 'Peregrine is a public safety analytics platform that aggregates data from multiple systems — CAD, RMS, cameras, sensors — to produce predictive analysis, crime reporting, and intelligence dashboards for police leadership. KabatOne is a full operational platform: it includes CAD dispatch (K-Dispatch), AI-powered video management (K-Video), GIS situational awareness (K-Safety), traffic management (K-Traffic), and community video (K-Connect). Peregrine is an analytical intelligence layer; KabatOne is the system where the operation actually happens.',
    },
    {
      question: 'Does Peregrine have a CAD dispatch system?',
      answer: 'No. Peregrine does not include its own CAD system. It integrates with the agency\'s existing CAD and RMS systems to extract data and generate analysis, but it does not manage real-time unit dispatch. KabatOne K-Dispatch is a full CAD system with call intake, unit recommendation, dispatch logging, and unit tracking — native and integrated with video, GIS, and traffic.',
    },
    {
      question: 'What kind of predictive analytics does Peregrine offer?',
      answer: 'Peregrine offers crime pattern analysis, heat maps, risk zone prediction, resource deployment analysis, and dashboards for agency leadership. These tools help police directors make strategic decisions about patrol and resource allocation. KabatOne focuses on real-time operations — K-Safety provides live situational awareness with incidents, units, and video on an operational map — but does not include the long-range predictive analytics that Peregrine specializes in.',
    },
    {
      question: 'Does Peregrine have video management or camera capabilities?',
      answer: 'No. Peregrine can connect to data from existing video systems to incorporate into its analysis, but it is not a video management system (VMS). It does not manage city fixed cameras, does not include native AI video analytics, and does not provide LPR. KabatOne K-Video manages cameras from any manufacturer (Hikvision, Axis, Dahua, Bosch, etc.), includes AI event detection, license plate recognition, and correlates video directly with dispatch incidents.',
    },
    {
      question: 'Can KabatOne replace Peregrine?',
      answer: 'For organizations seeking a unified operational platform, KabatOne covers the real-time operations that Peregrine does not include — CAD, video, operational GIS, and traffic. However, Peregrine specializes in strategic analytics and long-range prediction — capabilities KabatOne does not replicate in the same depth. The two platforms can be complementary: KabatOne for day-to-day operations and Peregrine for strategic analysis.',
    },
    {
      question: 'What does KabatOne offer that Peregrine does not?',
      answer: 'KabatOne provides: full CAD dispatch (K-Dispatch) with real-time call management, unit recommendation, and logging — Peregrine has no operational CAD; AI video management (K-Video) with LPR, event detection, and incident correlation — Peregrine has no video management; real-time operational GIS (K-Safety) with live unit positions and video feeds — Peregrine offers analytical dashboards but no native operational GIS; traffic management (K-Traffic) to coordinate signals and emergency response.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Categoría principal',
      peregrine: 'Analítica predictiva de seguridad pública — inteligencia estratégica para líderes policiales',
      kabatone: 'Plataforma de operaciones unificada — video, CAD, GIS y tráfico en tiempo real',
    },
    {
      category: 'Analítica predictiva',
      peregrine: 'Predicción de zonas de riesgo, mapas de calor, análisis de patrones de crimen',
      kabatone: 'Conciencia situacional en tiempo real — no analítica predictiva de largo plazo',
    },
    {
      category: 'Despacho / CAD',
      peregrine: 'No incluido — se integra con CAD de terceros para extraer datos',
      kabatone: 'K-Dispatch — CAD completo con intake, recomendación de unidades y logging',
    },
    {
      category: 'Videovigilancia / IA',
      peregrine: 'Sin gestión de video nativa — acceso a datos de video vía integraciones',
      kabatone: 'K-Video — cámaras fijas, ONVIF/RTSP, IA nativa con LPR y detección de eventos',
    },
    {
      category: 'GIS / Conciencia situacional',
      peregrine: 'Dashboards de crimen y mapas analíticos — sin GIS operacional en tiempo real',
      kabatone: 'K-Safety — GIS operacional completo con incidentes, unidades y feeds de video en vivo',
    },
    {
      category: 'Gestión de tráfico',
      peregrine: 'No incluido',
      kabatone: 'K-Traffic — gestión inteligente de semáforos e incidentes de tráfico',
    },
    {
      category: 'Modelo de integración',
      peregrine: 'Capa analítica sobre sistemas CAD/RMS/datos existentes',
      kabatone: 'Plataforma nativa — todos los módulos comparten datos en tiempo real',
    },
  ] : [
    {
      category: 'Primary category',
      peregrine: 'Predictive public safety analytics — strategic intelligence for police leadership',
      kabatone: 'Unified operations platform — video, CAD, GIS, and real-time traffic',
    },
    {
      category: 'Predictive analytics',
      peregrine: 'Risk zone prediction, heat maps, crime pattern analysis',
      kabatone: 'Real-time situational awareness — no long-range predictive analytics',
    },
    {
      category: 'Dispatch / CAD',
      peregrine: 'Not included — integrates with third-party CAD to extract data',
      kabatone: 'K-Dispatch — full CAD with intake, unit recommendation, and logging',
    },
    {
      category: 'Video surveillance / AI',
      peregrine: 'No native video management — video data access via integrations',
      kabatone: 'K-Video — fixed cameras, ONVIF/RTSP, native AI with LPR and event detection',
    },
    {
      category: 'GIS / Situational awareness',
      peregrine: 'Crime dashboards and analytical maps — no real-time operational GIS',
      kabatone: 'K-Safety — full operational GIS with incidents, units, and live video feeds',
    },
    {
      category: 'Traffic management',
      peregrine: 'Not included',
      kabatone: 'K-Traffic — intelligent signal and traffic incident management',
    },
    {
      category: 'Integration model',
      peregrine: 'Analytics layer on top of existing CAD/RMS/data systems',
      kabatone: 'Native platform — all modules share real-time data',
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
          <span style={{ color: ACCENT }}>KabatOne vs Peregrine</span>
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
              ? 'KabatOne vs Peregrine — Analítica Predictiva vs Operaciones Unificadas'
              : 'KabatOne vs Peregrine — Predictive Analytics vs Unified Operations'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'Peregrine ofrece analítica predictiva de seguridad pública — inteligencia basada en datos para que los líderes policiales optimicen el despliegue de recursos y anticipen patrones de crimen. KabatOne construye la plataforma operacional donde esa respuesta ocurre: despacho CAD completo, video con IA, GIS operacional y gestión de tráfico — todo nativo en un solo sistema.'
              : 'Peregrine offers predictive public safety analytics — data-driven intelligence for police leaders to optimize resource deployment and anticipate crime patterns. KabatOne builds the operational platform where that response actually happens: full CAD dispatch, AI video, operational GIS, and traffic management — all native in one system.'}
          </p>
        </section>

        {/* ── WHAT IS PEREGRINE? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es Peregrine?' : 'What Is Peregrine?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Peregrine es una plataforma de analítica e inteligencia de seguridad pública diseñada para ayudar a los líderes de agencias policiales a tomar mejores decisiones estratégicas. Su propuesta central es la agregación de datos de múltiples sistemas — CAD, RMS, sistemas de video, bases de datos de crimen, redes de sensores — en una capa de inteligencia unificada que produce análisis predictivos, mapas de calor, identificación de zonas de riesgo y dashboards de gestión para directores y jefes de policía.'
                : 'Peregrine is a public safety analytics and intelligence platform designed to help law enforcement agency leaders make better strategic decisions. Its central proposition is aggregating data from multiple systems — CAD, RMS, video systems, crime databases, sensor networks — into a unified intelligence layer that produces predictive analysis, heat maps, risk zone identification, and management dashboards for police directors and chiefs.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Peregrine conecta con los sistemas existentes de la agencia para extraer datos históricos y en tiempo real, aplica modelos de machine learning para identificar patrones y predecir dónde es probable que ocurran incidentes, y presenta esa inteligencia en dashboards que los líderes usan para planificar el despliegue de patrullas, asignar recursos y evaluar el desempeño operacional de su agencia.'
                : 'Peregrine connects with the agency\'s existing systems to extract historical and real-time data, applies machine learning models to identify patterns and predict where incidents are likely to occur, and presents that intelligence in dashboards that leaders use to plan patrol deployment, allocate resources, and evaluate their agency\'s operational performance.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Peregrine no incluye un sistema CAD propio, no gestiona cámaras de video, y no tiene módulos de gestión de tráfico. Es una plataforma de inteligencia analítica — no una plataforma operacional. Para que funcione, la agencia necesita CAD, RMS y otros sistemas operacionales ya instalados; Peregrine consume sus datos para producir análisis, pero no los reemplaza.'
                : 'Peregrine does not include its own CAD system, does not manage video cameras, and has no traffic management modules. It is an analytical intelligence platform — not an operational platform. For it to work, the agency needs CAD, RMS, and other operational systems already in place; Peregrine consumes their data to produce analysis, but does not replace them.'}
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
                ? 'KabatOne es una plataforma unificada de seguridad pública construida para ciudades, municipios, centros de mando y agencias de respuesta. Integra gestión de video con analítica IA (K-Video), despacho CAD completo (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario (K-Connect) en una plataforma nativa — donde todos los módulos comparten datos en tiempo real sin proyectos de integración entre sistemas.'
                : 'KabatOne is a unified public safety platform built for cities, municipalities, command centers, and response agencies. It integrates AI-powered video management (K-Video), full CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video (K-Connect) in one native platform — where all modules share real-time data without cross-system integration projects.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Donde Peregrine ayuda a los líderes a planificar el despliegue de patrullas con análisis predictivos, KabatOne gestiona la ejecución operacional de esa respuesta: K-Dispatch despacha unidades con recomendación automatizada basada en disponibilidad y proximidad; K-Video conecta alertas de cámara directamente al flujo de despacho; K-Safety muestra la posición de cada unidad y cada incidente activo en un mapa operacional en tiempo real; K-Traffic coordina semáforos en la ruta de la unidad respondedora.'
                : 'Where Peregrine helps leaders plan patrol deployment with predictive analysis, KabatOne manages the operational execution of that response: K-Dispatch dispatches units with automated recommendation based on availability and proximity; K-Video connects camera alerts directly to the dispatch workflow; K-Safety shows every unit position and active incident on a real-time operational map; K-Traffic coordinates signals on the responding unit\'s route.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos, principalmente en México y Latinoamérica. A diferencia de Peregrine, que requiere que la agencia ya tenga CAD y sistemas operacionales en funcionamiento, KabatOne puede ser la plataforma operacional central del centro de mando — el sistema donde convergen el despacho, el video, el GIS y el tráfico desde el primer día.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens, primarily in Mexico and Latin America. Unlike Peregrine, which requires the agency to already have CAD and operational systems in place, KabatOne can be the central operational platform of the command center — the system where dispatch, video, GIS, and traffic converge from day one.'}
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
              {es ? 'KabatOne vs Peregrine: Diferencias Clave' : 'KabatOne vs Peregrine: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara KabatOne y Peregrine en siete dimensiones operativas críticas para organizaciones de seguridad pública.'
                : 'The following table compares KabatOne and Peregrine across seven operational dimensions critical for public safety organizations.'}
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
                  Peregrine
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
                    {row.peregrine}
                  </div>
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--dim)', lineHeight: 1.55, borderLeft: '1px solid var(--border)' }}>
                    {row.kabatone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ANALYTICS vs OPERATIONS ── */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Inteligencia Estratégica vs Plataforma Operacional' : 'Strategic Intelligence vs Operational Platform'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Peregrine y KabatOne atacan problemas diferentes en el ciclo de seguridad pública. Peregrine responde a la pregunta estratégica: ¿dónde debería desplegar mis patrullas mañana? ¿Qué zonas tienen mayor riesgo? ¿Cómo mejoró mi agencia en los últimos seis meses? Son preguntas que los directores y jefes de policía necesitan responder para planificar, presupuestar y rendir cuentas a sus jurisdicciones.'
                : 'Peregrine and KabatOne attack different problems in the public safety cycle. Peregrine answers the strategic question: where should I deploy my patrols tomorrow? Which zones are at highest risk? How has my agency improved over the last six months? These are questions police directors and chiefs need to answer to plan, budget, and report to their jurisdictions.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne responde la pregunta operacional: un incidente está ocurriendo ahora — ¿cuál es la unidad disponible más cercana? ¿Qué cámaras están en el área? ¿El sospechoso coincide con alguna matrícula en la lista de búsqueda? ¿El semáforo en la ruta de la unidad respondedora está en verde? Estas preguntas se responden en segundos, no en dashboards — en el calor de la respuesta, no en el análisis posterior.'
                : 'KabatOne answers the operational question: an incident is happening right now — which is the closest available unit? Which cameras are in the area? Does the suspect match any plate on the lookout list? Is the signal on the responding unit\'s route green? These questions are answered in seconds, not in dashboards — in the heat of response, not in after-action analysis.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Para organizaciones que necesitan primero construir la capacidad operacional — un centro de mando funcional con CAD, video, GIS y tráfico integrados — KabatOne es la plataforma de punto de partida. Para organizaciones con operaciones maduras que quieren añadir una capa de inteligencia estratégica sobre sus datos históricos, Peregrine puede ser complementario. Pero sin la infraestructura operacional, el análisis predictivo de Peregrine no tiene sistema de ejecución detrás.'
                : 'For organizations that first need to build operational capability — a functional command center with integrated CAD, video, GIS, and traffic — KabatOne is the starting platform. For organizations with mature operations that want to add a strategic intelligence layer on top of their historical data, Peregrine can be complementary. But without the operational infrastructure, Peregrine\'s predictive analysis has no execution system behind it.'}
            </p>
          </div>
        </section>

        {/* ── MODULE LINKS ── */}
        <section style={{ background: 'var(--bg-2)', padding: '64px 40px', borderTop: '1px solid var(--border)' }}>
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
                  { href: '/integrations/sensor-fusion', label: es ? 'Fusión de Sensores' : 'Sensor Fusion' },
                  { href: '/integrations/lpr', label: 'LPR' },
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
                  { href: '/resources/what-is-situational-awareness-software', label: es ? 'Qué es Software de Conciencia Situacional' : 'What Is Situational Awareness Software' },
                  { href: '/resources/ai-in-public-safety', label: es ? 'IA en Seguridad Pública' : 'AI in Public Safety' },
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
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
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
              {es ? 'KabatOne vs Peregrine: Preguntas y Respuestas' : 'KabatOne vs Peregrine: Questions & Answers'}
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
              <Link href="/vs/hexagon" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Hexagon Safety' : 'KabatOne vs Hexagon Safety'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/ai-in-public-safety" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'IA en Seguridad Pública — Guía Completa' : 'AI in Public Safety — Complete Guide'}</span>
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
            ? 'Descubre cómo KabatOne unifica video, CAD, GIS y tráfico en un solo sistema operacional. Solicita una demo.'
            : 'See how KabatOne unifies video, CAD, GIS, and traffic in one operational system. Request a demo.'}
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
