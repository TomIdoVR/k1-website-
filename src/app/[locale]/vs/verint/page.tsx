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
  return generatePageMetadata('vsVerint', locale)
}

export default async function VsVerintPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Comparaciones' : 'Compare', url: es ? 'https://kabatone.com/es/vs/' : 'https://kabatone.com/vs/' },
    { name: 'KabatOne vs Verint', url: es ? 'https://kabatone.com/es/vs/verint/' : 'https://kabatone.com/vs/verint/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre KabatOne y Verint?',
      answer: 'Verint es una plataforma de inteligencia de seguridad que se especializa en gestión de video, analítica de IA, gestión de situaciones y software de investigación para gobiernos, aeropuertos y grandes empresas. Es fuerte en inteligencia de video y flujos de trabajo de investigación, pero no ofrece despacho CAD nativo ni es una plataforma de mando y control verdadera para entornos C5. KabatOne es una plataforma de operaciones completa: video con IA (K-Video), despacho CAD (K-Dispatch), conciencia situacional GIS (K-Safety), gestión de tráfico (K-Traffic) y video comunitario (K-Connect) — todo nativo, sin hardware propietario requerido.',
    },
    {
      question: '¿Verint tiene sistema de despacho CAD?',
      answer: 'No. Verint se centra en vigilancia de video, analítica de IA, gestión de situaciones e inteligencia de investigaciones — no incluye un sistema de despacho CAD. Para organizaciones que necesitan coordinar el ciclo completo desde la detección hasta la respuesta en campo, Verint requiere integrarse con sistemas CAD de terceros. KabatOne K-Dispatch es un CAD completo con recepción de llamadas, recomendación de unidades por disponibilidad y proximidad, registro de despacho y seguimiento en tiempo real — nativo e integrado con video, GIS y tráfico.',
    },
    {
      question: '¿Es Verint adecuado para centros de mando C5?',
      answer: 'Verint cubre algunos de los requisitos de un centro C5 — gestión de video a escala, analítica de IA y gestión de situaciones — pero no cubre el flujo completo de operaciones C5. Un C5 requiere coordinación unificada de video, CAD, GIS y tráfico en una sola plataforma operativa. KabatOne está diseñado específicamente para este caso de uso: todos los módulos comparten datos en tiempo real, una alerta de video puede convertirse en un evento de despacho automáticamente, y el centro de mando puede gestionar semáforos, unidades en campo e incidentes desde una sola interfaz.',
    },
    {
      question: '¿KabatOne requiere hardware propietario como Verint?',
      answer: 'No. KabatOne es una plataforma de software que funciona con la infraestructura de cámaras existente — soporta ONVIF, RTSP y todos los protocolos IP estándar, permitiendo integrar cámaras de cualquier fabricante: Hikvision, Dahua, Axis, Bosch, Hanwha y muchos otros. Verint históricamente ha tenido integraciones más estrechas con su propio hardware y el de socios selectos. KabatOne elimina la dependencia de hardware propietario.',
    },
    {
      question: '¿Qué ventajas tiene KabatOne frente a Verint en LATAM?',
      answer: 'KabatOne tiene más de 40 despliegues activos en ciudades de México y América Latina — experiencia operativa real en entornos municipales de LATAM, incluyendo centros C5 y C2. Entiende los requisitos de licitación gubernamental, los marcos regulatorios locales y las necesidades específicas de coordinación multiagencia en la región. Verint no tiene presencia operativa comparable en LATAM. Además, KabatOne ofrece soporte y capacitación en español como parte estándar de su modelo de entrega.',
    },
  ] : [
    {
      question: 'What is the difference between KabatOne and Verint?',
      answer: 'Verint is an intelligence-driven security platform specializing in video surveillance management, AI analytics, situation management, and investigation software for governments, airports, and large enterprises. It is strong in video intelligence and investigation workflows, but does not offer native CAD dispatch and is not a true command-and-control platform for C5 environments. KabatOne is a complete operations platform: AI-powered video (K-Video), CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), traffic management (K-Traffic), and community video (K-Connect) — all native, with no proprietary hardware required.',
    },
    {
      question: 'Does Verint have a CAD dispatch system?',
      answer: 'No. Verint focuses on video surveillance, AI analytics, situation management, and investigation intelligence — it does not include a CAD dispatch system. For organizations that need to coordinate the full cycle from detection to field response, Verint requires integration with third-party CAD systems. KabatOne K-Dispatch is a full CAD with call intake, unit recommendation by availability and proximity, dispatch logging, and real-time unit tracking — native and integrated with video, GIS, and traffic.',
    },
    {
      question: 'Is Verint suitable for C5 command center environments?',
      answer: 'Verint covers some C5 requirements — large-scale video management, AI analytics, and situation management — but does not cover the full C5 operations workflow. A C5 command center requires unified coordination of video, CAD, GIS, and traffic in one operational platform. KabatOne is designed specifically for this use case: all modules share real-time data, a video alert can automatically become a dispatch event, and the command center can manage traffic signals, field units, and incidents from a single interface.',
    },
    {
      question: 'Does KabatOne require proprietary hardware like Verint?',
      answer: 'No. KabatOne is a software platform that works with existing camera infrastructure — it supports ONVIF, RTSP, and all standard IP protocols, allowing cameras from any manufacturer to be integrated: Hikvision, Dahua, Axis, Bosch, Hanwha, and many others. Verint has historically had tighter integrations with its own hardware and select partner hardware. KabatOne eliminates dependency on proprietary hardware.',
    },
    {
      question: 'What advantages does KabatOne have over Verint in LATAM?',
      answer: 'KabatOne has 40+ active deployments in cities across Mexico and Latin America — real operational experience in LATAM municipal environments, including C5 and C2 command centers. It understands government procurement requirements, local regulatory frameworks, and the specific multi-agency coordination needs of the region. Verint does not have comparable operational presence in LATAM. Additionally, KabatOne provides Spanish-language support and training as a standard part of its delivery model.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Categoría principal',
      verint: 'Plataforma de inteligencia de seguridad — video, analítica IA e investigaciones',
      kabatone: 'Plataforma de operaciones unificada — video, CAD, GIS y tráfico',
    },
    {
      category: 'Videovigilancia / IA',
      verint: 'Gestión de video a escala con analítica IA avanzada para vigilancia e investigación',
      kabatone: 'K-Video — cámaras fijas, ONVIF/RTSP, IA nativa con LPR y detección de eventos',
    },
    {
      category: 'Despacho / CAD',
      verint: 'No incluido — requiere integración con CAD de terceros',
      kabatone: 'K-Dispatch — CAD completo con intake, recomendación de unidades y logging',
    },
    {
      category: 'Gestión de tráfico',
      verint: 'No incluido',
      kabatone: 'K-Traffic — gestión inteligente de semáforos e incidentes de tráfico',
    },
    {
      category: 'GIS / Conciencia situacional',
      verint: 'Gestión de situaciones con mapa — sin GIS operacional nativo de ciudad',
      kabatone: 'K-Safety — GIS operacional completo con incidentes, unidades y feeds de video',
    },
    {
      category: 'Preparación para C5',
      verint: 'Cubre video y situaciones; no cubre el flujo operacional C5 completo',
      kabatone: 'Diseñado para C2/C5 — todos los módulos comparten datos en tiempo real',
    },
    {
      category: 'Hardware requerido',
      verint: 'Integraciones más estrechas con hardware propio y socios selectos',
      kabatone: 'Sin hardware propietario — soporta ONVIF, RTSP y todos los protocolos IP',
    },
    {
      category: 'Presencia en LATAM',
      verint: 'Presencia comercial limitada en LATAM',
      kabatone: 'Más de 40 ciudades en México y América Latina — soporte en español',
    },
  ] : [
    {
      category: 'Primary category',
      verint: 'Intelligence-driven security platform — video, AI analytics, and investigations',
      kabatone: 'Unified operations platform — video, CAD, GIS, and traffic',
    },
    {
      category: 'Video surveillance / AI',
      verint: 'Large-scale video management with advanced AI analytics for surveillance and investigation',
      kabatone: 'K-Video — fixed cameras, ONVIF/RTSP, native AI with LPR and event detection',
    },
    {
      category: 'Dispatch / CAD',
      verint: 'Not included — requires integration with third-party CAD systems',
      kabatone: 'K-Dispatch — full CAD with intake, unit recommendation, and logging',
    },
    {
      category: 'Traffic management',
      verint: 'Not included',
      kabatone: 'K-Traffic — intelligent signal and traffic incident management',
    },
    {
      category: 'GIS / Situational awareness',
      verint: 'Situation management with map view — no native city-scale operational GIS',
      kabatone: 'K-Safety — full operational GIS with incidents, units, and video feeds',
    },
    {
      category: 'C5 command center readiness',
      verint: 'Covers video and situation management; does not cover the full C5 workflow',
      kabatone: 'Designed for C2/C5 — all modules share real-time data natively',
    },
    {
      category: 'Hardware requirements',
      verint: 'Tighter integrations with proprietary hardware and select partner devices',
      kabatone: 'No proprietary hardware — supports ONVIF, RTSP, and all standard IP protocols',
    },
    {
      category: 'LATAM presence',
      verint: 'Limited operational presence in LATAM',
      kabatone: '40+ cities in Mexico and Latin America — Spanish-language support',
    },
  ]

  const wins = es ? [
    {
      title: 'CAD y Video en un Solo Flujo',
      body: 'Verint ofrece inteligencia de video potente, pero no tiene CAD. KabatOne conecta una alerta de video directamente con el despacho — sin cambio de sistema, sin demora operativa.',
    },
    {
      title: 'Preparado para C5 por Diseño',
      body: 'KabatOne integra video, GIS, CAD y tráfico en un solo entorno operativo. Es la plataforma base del centro C5, no una capa adicional encima de un CAD existente.',
    },
    {
      title: 'Sin Lock-in de Hardware Propietario',
      body: 'KabatOne soporta ONVIF, RTSP y todos los protocolos IP estándar. Los municipios pueden usar la infraestructura de cámaras existente sin reemplazar equipos ni depender de un proveedor de hardware.',
    },
    {
      title: 'Track Record en LATAM',
      body: 'Más de 40 ciudades en México y América Latina operan con KabatOne. Conocemos los procesos de licitación, los marcos regulatorios y las necesidades de coordinación en la región.',
    },
  ] : [
    {
      title: 'CAD and Video in One Workflow',
      body: 'Verint delivers powerful video intelligence, but has no CAD. KabatOne connects a video alert directly to dispatch — no system switching, no operational delay.',
    },
    {
      title: 'C5 Command Center Ready by Design',
      body: 'KabatOne integrates video, GIS, CAD, and traffic in one operational environment. It is the command center base platform, not an additional layer on top of an existing CAD.',
    },
    {
      title: 'No Proprietary Hardware Lock-in',
      body: 'KabatOne supports ONVIF, RTSP, and all standard IP protocols. Municipalities can use existing camera infrastructure without replacing equipment or depending on a specific hardware vendor.',
    },
    {
      title: 'Proven LATAM Deployment Track Record',
      body: '40+ cities in Mexico and Latin America operate on KabatOne. We understand procurement processes, regulatory frameworks, and the coordination requirements specific to the region.',
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema(
              es ? 'KabatOne vs Verint — Inteligencia de Video vs Plataforma de Operaciones Unificada' : 'KabatOne vs Verint — Video Intelligence vs Unified Operations Platform',
              es ? 'Verint gestiona video a escala con analítica IA. KabatOne agrega despacho CAD, GIS operacional y gestión de tráfico — la plataforma de operaciones completa para centros de mando C5.' : 'Verint manages video at scale with AI analytics. KabatOne adds CAD dispatch, operational GIS, and traffic management — the complete operations platform for C5 command centers.',
              es ? 'https://kabatone.com/es/vs/verint/' : 'https://kabatone.com/vs/verint/',
              '2026-04-07'
            )
          ),
        }}
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
          <span style={{ color: ACCENT }}>KabatOne vs Verint</span>
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
              ? 'KabatOne vs Verint — Inteligencia de Video vs Operaciones Unificadas'
              : 'KabatOne vs Verint — Video Intelligence vs Unified Operations'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'Verint es una plataforma de inteligencia de seguridad reconocida — fuerte en gestión de video, analítica de IA y flujos de trabajo de investigación para gobiernos y aeropuertos. Pero no tiene despacho CAD, no tiene GIS operacional y no está diseñada para el flujo de operaciones C5 completo. KabatOne conecta video, CAD, GIS y tráfico en un solo entorno operativo — sin hardware propietario, con más de 40 despliegues activos en LATAM.'
              : 'Verint is a recognized intelligence-driven security platform — strong in video management, AI analytics, and investigation workflows for governments and airports. But it has no CAD dispatch, no operational GIS, and is not designed for the full C5 operations workflow. KabatOne connects video, CAD, GIS, and traffic in one operational environment — no proprietary hardware, with 40+ active deployments across LATAM.'}
          </p>
        </section>

        {/* ── WHAT IS VERINT? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es Verint?' : 'What Is Verint?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Verint Systems es una empresa de software con sede en Nueva York especializada en inteligencia de seguridad, analítica de comportamiento y gestión de experiencia del cliente. En el ámbito de la seguridad pública y la vigilancia, Verint ofrece gestión de video a escala, analítica de video con IA — incluyendo reconocimiento de matrículas, análisis de comportamiento y detección de anomalías — y software de gestión de situaciones que permite a los operadores coordinar la respuesta a incidentes desde un centro de mando.'
                : 'Verint Systems is a New York-based software company specializing in security intelligence, behavioral analytics, and customer engagement management. In the public safety and surveillance space, Verint offers large-scale video management, AI-powered video analytics — including license plate recognition, behavioral analysis, and anomaly detection — and situation management software that allows operators to coordinate incident response from a command center.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Verint es utilizado por gobiernos, agencias de ley, aeropuertos y grandes empresas principalmente en mercados anglosajones y europeos. Sus capacidades de analítica de video son maduras y su plataforma de gestión de situaciones permite a los operadores gestionar múltiples feeds de video e incidentes en paralelo. Para flujos de trabajo de investigación — revisar grabaciones, buscar vehículos de interés en múltiples cámaras, generar evidencia — Verint es una herramienta sólida.'
                : 'Verint is used by governments, law enforcement agencies, airports, and large enterprises primarily in English-speaking and European markets. Its video analytics capabilities are mature, and its situation management platform allows operators to manage multiple video feeds and incidents in parallel. For investigation workflows — reviewing recordings, searching for vehicles of interest across multiple cameras, generating evidence — Verint is a capable tool.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Sin embargo, Verint no incluye despacho CAD, gestión de tráfico ni GIS operacional nativo. Es una plataforma de inteligencia y vigilancia que se integra con los sistemas CAD y de campo existentes — no los reemplaza. Para centros de mando que necesitan coordinar video, despacho, tráfico e incidentes en un solo flujo operacional — como los centros C5 en México — Verint requiere sistemas adicionales para completar el caso de uso. Además, Verint tiene presencia operativa limitada en América Latina.'
                : 'However, Verint does not include CAD dispatch, traffic management, or native operational GIS. It is an intelligence and surveillance platform that integrates with existing CAD and field systems — it does not replace them. For command centers that need to coordinate video, dispatch, traffic, and incidents in one operational workflow — such as C5 centers in Mexico — Verint requires additional systems to complete the use case. Additionally, Verint has limited operational presence in Latin America.'}
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
                ? 'KabatOne es una plataforma unificada de seguridad pública construida para ciudades, municipios, centros de mando y agencias de respuesta. Integra gestión de video con analítica IA (K-Video), despacho CAD completo (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario (K-Connect) en una plataforma nativa — sin hardware propietario, sin proyectos de integración entre sistemas.'
                : 'KabatOne is a unified public safety platform built for cities, municipalities, command centers, and response agencies. It integrates AI-powered video management (K-Video), full CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video (K-Connect) in one native platform — no proprietary hardware, no cross-system integration projects.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'A diferencia de Verint, que es una plataforma de inteligencia de video que se integra con sistemas CAD de terceros, KabatOne es la plataforma operacional central del centro de mando. Una alerta de reconocimiento de matrícula en K-Video puede generar automáticamente un evento en K-Dispatch. El despachador ve el video de la cámara más cercana directamente en el contexto del incidente. K-Traffic puede ajustar semáforos en la ruta de la unidad respondedora — todo sin salir del flujo de trabajo.'
                : 'Unlike Verint, which is a video intelligence platform that integrates with third-party CAD systems, KabatOne is the central operational platform of the command center. A license plate recognition alert in K-Video can automatically generate an event in K-Dispatch. The dispatcher sees the nearest camera video directly in the incident context. K-Traffic can adjust signals on the responding unit\'s route — all without leaving the workflow.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos, principalmente en México y Latinoamérica. Es una plataforma software-first que soporta ONVIF, RTSP y todos los protocolos IP estándar — sin lock-in de hardware propietario. Para centros C5 y C2 en LATAM que necesitan una plataforma operacional completa con soporte local y experiencia en la región, KabatOne es la elección natural.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens, primarily in Mexico and Latin America. It is a software-first platform that supports ONVIF, RTSP, and all standard IP protocols — no proprietary hardware lock-in. For C5 and C2 command centers in LATAM that need a complete operational platform with local support and regional experience, KabatOne is the natural choice.'}
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
              {es ? 'KabatOne vs Verint: Diferencias Clave' : 'KabatOne vs Verint: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara KabatOne y Verint en ocho dimensiones operativas críticas para organizaciones de seguridad pública.'
                : 'The following table compares KabatOne and Verint across eight operational dimensions critical for public safety organizations.'}
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
                  Verint
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
                    {row.verint}
                  </div>
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--dim)', lineHeight: 1.55, borderLeft: '1px solid var(--border)' }}>
                    {row.kabatone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY KABATONE WINS ── */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '16px',
            }}>
              {es ? 'Por Qué KabatOne Gana' : 'Why KabatOne Wins'}
            </p>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '40px',
            }}>
              {es
                ? 'Cuatro Ventajas Estructurales Frente a Verint'
                : 'Four Structural Advantages Over Verint'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {wins.map((win, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderRadius: '12px', padding: '28px 24px',
                }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '8px',
                    background: `${ACCENT}20`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '16px',
                  }}>
                    <span style={{ color: ACCENT, fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '16px' }}>
                      {i + 1}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '20px', color: 'var(--white)', marginBottom: '10px', lineHeight: 1.2,
                  }}>
                    {win.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>
                    {win.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VIDEO INTELLIGENCE VS FULL PLATFORM ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Inteligencia de Video vs Plataforma Operacional' : 'Video Intelligence vs Operational Platform'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Verint está diseñado como una plataforma de inteligencia de seguridad — toma video de múltiples fuentes, aplica analítica de IA y presenta la información en una interfaz para que los operadores puedan investigar incidentes, buscar vehículos de interés y gestionar situaciones. Es una herramienta valiosa para agencias con CAD maduro que necesitan inteligencia de video avanzada encima de sus sistemas existentes.'
                : 'Verint is designed as an intelligence-driven security platform — it takes video from multiple sources, applies AI analytics, and presents information in an interface so operators can investigate incidents, search for vehicles of interest, and manage situations. It is a valuable tool for agencies with mature CAD systems that need advanced video intelligence layered on top of their existing infrastructure.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne parte de un punto diferente: es la plataforma operacional central. En lugar de añadir inteligencia de video sobre un CAD existente, KabatOne construye el CAD, el video, el GIS y el tráfico como módulos nativos de una misma plataforma. El resultado es un flujo de operaciones sin fricciones: detección en video, alerta automática al despachador, despacho de unidad, ajuste de semáforos en la ruta, seguimiento de la unidad en GIS — todo en una sola pantalla sin cambio de sistema.'
                : 'KabatOne starts from a different point: it is the central operational platform. Rather than adding video intelligence on top of an existing CAD, KabatOne builds CAD, video, GIS, and traffic as native modules of the same platform. The result is a frictionless operations workflow: video detection, automatic alert to dispatcher, unit dispatch, signal adjustment on the route, unit tracking on GIS — all in one screen without switching systems.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Para centros C5 y C2 que están construyendo o modernizando su infraestructura operacional — especialmente en México y América Latina — KabatOne ofrece la plataforma diseñada para ese caso de uso específico: un solo entorno donde video, despacho, GIS y tráfico convergen en un flujo de trabajo unificado, con experiencia de despliegue real en la región.'
                : 'For C5 and C2 command centers building or modernizing their operational infrastructure — especially in Mexico and Latin America — KabatOne provides the platform designed for that specific use case: a single environment where video, dispatch, GIS, and traffic converge in a unified workflow, with real deployment experience in the region.'}
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
                  { href: '/integrations/lpr', label: 'LPR' },
                  { href: '/integrations/sensor-fusion', label: es ? 'Fusión de Sensores' : 'Sensor Fusion' },
                  { href: '/integrations/facial-recognition', label: es ? 'Reconocimiento Facial' : 'Facial Recognition' },
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
                  { href: '/resources/what-is-a-command-center', label: es ? 'Qué es un Centro de Mando C5' : 'What Is a C5 Command Center' },
                  { href: '/resources/what-is-video-analytics', label: es ? 'Qué es la Analítica de Video' : 'What Is Video Analytics' },
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
              {es ? 'KabatOne vs Verint: Preguntas y Respuestas' : 'KabatOne vs Verint: Questions & Answers'}
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
              <Link href="/vs/genetec" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Genetec' : 'KabatOne vs Genetec'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/vs/milestone" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Milestone XProtect' : 'KabatOne vs Milestone XProtect'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/vs/avigilon" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Avigilon' : 'KabatOne vs Avigilon'}</span>
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
