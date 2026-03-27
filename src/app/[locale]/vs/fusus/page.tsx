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
  return generatePageMetadata('vsFusus', locale)
}

export default async function VsFususPage({
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
    { name: 'KabatOne vs Fusus', url: es ? 'https://kabatone.com/es/vs/fusus/' : 'https://kabatone.com/vs/fusus/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre KabatOne y Fusus?',
      answer: 'Fusus es una plataforma de centro de crimen en tiempo real (RTCC) que agrega feeds de video de cámaras públicas y privadas — incluyendo cámaras residenciales y comerciales conectadas voluntariamente — para dar a las agencias de ley contexto visual durante incidentes. KabatOne es una plataforma operacional completa: además de la gestión de video con analítica IA (K-Video), incluye despacho CAD (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario (K-Connect). Fusus es una capa de inteligencia de video; KabatOne es la plataforma de operaciones de ciudad completa.',
    },
    {
      question: '¿Fusus tiene sistema de despacho CAD?',
      answer: 'No. Fusus se centra en agregar y visualizar video de múltiples fuentes durante incidentes — es una herramienta de inteligencia de video en tiempo real, no un sistema de despacho. Fusus se integra con sistemas CAD existentes para recibir alertas de incidentes, pero no reemplaza al CAD. KabatOne K-Dispatch es un sistema CAD completo con intake de llamadas, recomendación de unidades basada en disponibilidad y proximidad, logging de despacho y seguimiento de unidades — nativo e integrado con video, GIS y tráfico.',
    },
    {
      question: '¿Qué es el modelo de cámara privada de Fusus y cómo se compara con KabatOne?',
      answer: 'El modelo diferenciador de Fusus es el "hub" — un dispositivo pequeño que conecta cámaras privadas (residenciales, comerciales) a la plataforma policial, permitiendo que las agencias accedan a esas cámaras durante incidentes con consentimiento previo del propietario. KabatOne K-Connect tiene un enfoque similar para video comunitario — permite que ciudadanos y negocios compartan acceso a sus cámaras con el centro de mando. Ambas plataformas abordan la conectividad de video privado, pero KabatOne lo integra dentro de una plataforma operacional más amplia que incluye CAD, GIS y tráfico.',
    },
    {
      question: '¿Fusus tiene analítica de IA para video?',
      answer: 'Sí, Fusus incluye capacidades de analítica de video con IA — incluyendo reconocimiento de matrículas (LPR) y alertas basadas en detección de objetos. KabatOne K-Video también incluye analítica IA: detección de eventos, reconocimiento de matrículas, análisis de movimiento y correlación de incidentes con feeds de video. La diferencia clave es que en KabatOne, la analítica de video está directamente conectada al flujo de despacho CAD — una alerta de video puede convertirse automáticamente en un evento de despacho sin cambiar de sistema.',
    },
    {
      question: '¿Puede KabatOne reemplazar a Fusus?',
      answer: 'Para organizaciones que buscan una plataforma unificada, KabatOne puede cubrir las funciones centrales de Fusus — gestión de video de cámaras fijas con IA, video comunitario (K-Connect) — y además proporcionar CAD completo, GIS operacional y gestión de tráfico. Para agencias que dependen específicamente del programa de registro voluntario de cámaras privadas de Fusus (su red de dispositivos hub), las dos plataformas pueden ser complementarias.',
    },
    {
      question: '¿Qué ofrece KabatOne que Fusus no ofrece?',
      answer: 'Más allá de la gestión de video, KabatOne proporciona: CAD completo (K-Dispatch) con intake de llamadas, recomendación de unidades y logging — Fusus no tiene CAD; GIS operacional (K-Safety) con conciencia situacional a escala de ciudad, rastreo de unidades y correlación de incidentes — Fusus no tiene un GIS operacional nativo; gestión inteligente de tráfico (K-Traffic) para coordinar semáforos y respuesta de emergencia — Fusus no incluye tráfico. KabatOne también gestiona cámaras fijas de ciudad y cámaras comunitarias sin depender de un dispositivo hub propietario — soporta ONVIF, RTSP y todos los protocolos IP estándar.',
    },
  ] : [
    {
      question: 'What is the difference between KabatOne and Fusus?',
      answer: 'Fusus is a real-time crime center (RTCC) platform that aggregates video feeds from public and private cameras — including voluntarily connected residential and commercial cameras — to give law enforcement agencies visual context during incidents. KabatOne is a complete operational platform: in addition to AI-powered video management (K-Video), it includes CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video (K-Connect). Fusus is a video intelligence layer; KabatOne is the full city operations platform.',
    },
    {
      question: 'Does Fusus have a CAD dispatch system?',
      answer: 'No. Fusus focuses on aggregating and visualizing video from multiple sources during incidents — it is a real-time video intelligence tool, not a dispatch system. Fusus integrates with existing CAD systems to receive incident alerts, but does not replace CAD. KabatOne K-Dispatch is a full CAD system with call intake, unit recommendation based on availability and proximity, dispatch logging, and unit tracking — native and integrated with video, GIS, and traffic.',
    },
    {
      question: 'What is the Fusus private camera model and how does it compare to KabatOne?',
      answer: "Fusus's differentiating model is the \"hub\" — a small device that connects private cameras (residential, commercial) to the police platform, allowing agencies to access those cameras during incidents with prior owner consent. KabatOne K-Connect has a similar approach to community video — it allows citizens and businesses to share camera access with the command center. Both platforms address private video connectivity, but KabatOne integrates it within a broader operational platform that includes CAD, GIS, and traffic.",
    },
    {
      question: 'Does Fusus have AI video analytics?',
      answer: 'Yes, Fusus includes AI video analytics capabilities — including license plate recognition (LPR) and object-detection-based alerts. KabatOne K-Video also includes AI analytics: event detection, license plate recognition, motion analysis, and incident correlation with video feeds. The key difference is that in KabatOne, video analytics are directly connected to the CAD dispatch workflow — a video alert can automatically become a dispatch event without switching systems.',
    },
    {
      question: 'Can KabatOne replace Fusus?',
      answer: "For organizations seeking a unified platform, KabatOne can cover Fusus's core functions — AI fixed-camera video management, community video (K-Connect) — and additionally provide full CAD, operational GIS, and traffic management. For agencies that specifically depend on Fusus's voluntary private camera registration program (its hub device network), the two platforms can be complementary.",
    },
    {
      question: 'What does KabatOne offer that Fusus does not?',
      answer: 'Beyond video management, KabatOne provides: full CAD (K-Dispatch) with call intake, unit recommendation, and logging — Fusus has no CAD; operational GIS (K-Safety) with city-scale situational awareness, unit tracking, and incident correlation — Fusus has no native operational GIS; intelligent traffic management (K-Traffic) to coordinate signals and emergency response — Fusus does not include traffic. KabatOne also manages city fixed cameras and community cameras without relying on a proprietary hub device — it supports ONVIF, RTSP, and all standard industry IP protocols.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Categoría principal',
      fusus: 'Plataforma RTCC — agregación de video de cámaras públicas y privadas',
      kabatone: 'Plataforma de operaciones unificada — video, CAD, GIS y tráfico',
    },
    {
      category: 'Videovigilancia / IA',
      fusus: 'Agregación de video con IA, LPR y alertas de detección de objetos',
      kabatone: 'K-Video — cámaras fijas, ONVIF/RTSP, IA nativa con LPR y detección de eventos',
    },
    {
      category: 'Despacho / CAD',
      fusus: 'No incluido — se integra con CAD de terceros',
      kabatone: 'K-Dispatch — CAD completo con intake, recomendación de unidades y logging',
    },
    {
      category: 'Gestión de tráfico',
      fusus: 'No incluido',
      kabatone: 'K-Traffic — gestión inteligente de semáforos e incidentes de tráfico',
    },
    {
      category: 'GIS / Conciencia situacional',
      fusus: 'Mapa de incidentes básico — sin GIS operacional nativo',
      kabatone: 'K-Safety — GIS operacional completo con incidentes, unidades y feeds de video',
    },
    {
      category: 'Video comunitario',
      fusus: 'Hub propietario para conectar cámaras privadas voluntarias',
      kabatone: 'K-Connect — portal de video comunitario sin hardware propietario',
    },
    {
      category: 'Modelo de integración',
      fusus: 'Se integra sobre sistemas CAD/RMS existentes',
      kabatone: 'Plataforma nativa — todos los módulos comparten datos en tiempo real',
    },
  ] : [
    {
      category: 'Primary category',
      fusus: 'RTCC platform — aggregation of video from public and private cameras',
      kabatone: 'Unified operations platform — video, CAD, GIS, and traffic',
    },
    {
      category: 'Video surveillance / AI',
      fusus: 'Video aggregation with AI, LPR, and object detection alerts',
      kabatone: 'K-Video — fixed cameras, ONVIF/RTSP, native AI with LPR and event detection',
    },
    {
      category: 'Dispatch / CAD',
      fusus: 'Not included — integrates with third-party CAD',
      kabatone: 'K-Dispatch — full CAD with intake, unit recommendation, and logging',
    },
    {
      category: 'Traffic management',
      fusus: 'Not included',
      kabatone: 'K-Traffic — intelligent signal and traffic incident management',
    },
    {
      category: 'GIS / Situational awareness',
      fusus: 'Basic incident map — no native operational GIS',
      kabatone: 'K-Safety — full operational GIS with incidents, units, and video feeds',
    },
    {
      category: 'Community video',
      fusus: 'Proprietary hub device to connect voluntary private cameras',
      kabatone: 'K-Connect — community video portal without proprietary hardware',
    },
    {
      category: 'Integration model',
      fusus: 'Layers on top of existing CAD/RMS systems',
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
          <span style={{ color: ACCENT }}>KabatOne vs Fusus</span>
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
              ? 'KabatOne vs Fusus — Inteligencia de Video vs Operaciones Completas'
              : 'KabatOne vs Fusus — Video Intelligence vs Full Operations'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'Fusus creó la categoría de centros de crimen en tiempo real (RTCC) — plataformas que agregan video de cámaras públicas y privadas para dar a las agencias de ley conciencia situacional visual durante incidentes. KabatOne extiende esa visión: video de cámaras fijas con analítica IA, despacho CAD completo, GIS operacional y gestión de tráfico — todo nativo, sin depender de dispositivos hub propietarios.'
              : 'Fusus created the real-time crime center (RTCC) category — platforms that aggregate video from public and private cameras to give law enforcement agencies visual situational awareness during incidents. KabatOne extends that vision: fixed camera video with AI analytics, full CAD dispatch, operational GIS, and traffic management — all native, without proprietary hub devices.'}
          </p>
        </section>

        {/* ── WHAT IS FUSUS? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es Fusus?' : 'What Is Fusus?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Fusus es una plataforma de centro de crimen en tiempo real (RTCC) fundada en Atlanta y adquirida por Axon en 2023. Su propuesta central es el "Fusus hub" — un dispositivo pequeño que conecta cámaras privadas (residenciales y comerciales) a la plataforma policial, permitiendo que los oficiales accedan a esos feeds de video durante incidentes activos con el consentimiento previo del propietario. Esto crea una red de inteligencia de video que va más allá de las cámaras municipales instaladas por la ciudad.'
                : 'Fusus is a real-time crime center (RTCC) platform founded in Atlanta and acquired by Axon in 2023. Its central proposition is the "Fusus hub" — a small device that connects private cameras (residential and commercial) to the police platform, allowing officers to access those video feeds during active incidents with prior owner consent. This creates a video intelligence network that extends beyond city-installed municipal cameras.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Fusus agrega feeds de video de múltiples fuentes — cámaras de ciudad, cámaras conectadas a través de hubs, sistemas de reconocimiento de matrículas (LPR) — en una sola interfaz con un mapa. Las agencias pueden ver en tiempo real qué cámaras están cerca de un incidente activo y acceder directamente a los feeds más relevantes. La analítica de IA de Fusus puede alertar automáticamente a los oficiales cuando se detecta una matrícula específica o un vehículo de interés en cualquier cámara conectada.'
                : 'Fusus aggregates video feeds from multiple sources — city cameras, hub-connected cameras, license plate recognition (LPR) systems — into a single interface with a map. Agencies can see in real time which cameras are near an active incident and directly access the most relevant feeds. Fusus AI analytics can automatically alert officers when a specific license plate or vehicle of interest is detected on any connected camera.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Fusus no incluye sistema de despacho CAD, gestión de tráfico, ni GIS operacional nativo. Es una capa de inteligencia de video que se integra con los sistemas CAD y RMS existentes de la agencia — no los reemplaza. Para centros de mando que necesitan coordinar despacho, video, tráfico e incidentes en un solo flujo operacional, Fusus requiere sistemas adicionales para completar la imagen.'
                : 'Fusus does not include a CAD dispatch system, traffic management, or native operational GIS. It is a video intelligence layer that integrates with the agency\'s existing CAD and RMS systems — it does not replace them. For command centers that need to coordinate dispatch, video, traffic, and incidents in one operational workflow, Fusus requires additional systems to complete the picture.'}
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
                ? 'K-Video de KabatOne gestiona cámaras fijas de ciudad con analítica IA — reconocimiento de matrículas, detección de eventos, análisis de movimiento — y conecta directamente esas alertas al flujo de despacho CAD. K-Connect permite que ciudadanos y negocios registren sus cámaras y las compartan con el centro de mando durante emergencias — una función similar al modelo hub de Fusus, pero sin dispositivo propietario: KabatOne soporta ONVIF, RTSP y todos los protocolos IP estándar.'
                : 'KabatOne K-Video manages city fixed cameras with AI analytics — license plate recognition, event detection, motion analysis — and directly connects those alerts to the CAD dispatch workflow. K-Connect allows citizens and businesses to register their cameras and share them with the command center during emergencies — a function similar to the Fusus hub model, but without proprietary hardware: KabatOne supports ONVIF, RTSP, and all standard IP protocols.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos, principalmente en México y Latinoamérica. A diferencia de Fusus, que actúa como capa sobre sistemas existentes, KabatOne es la plataforma operacional central del centro de mando — donde convergen el despacho, el video, el GIS y el tráfico en un solo flujo de trabajo.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens, primarily in Mexico and Latin America. Unlike Fusus, which acts as a layer on top of existing systems, KabatOne is the central operational platform of the command center — where dispatch, video, GIS, and traffic converge in one workflow.'}
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
              {es ? 'KabatOne vs Fusus: Diferencias Clave' : 'KabatOne vs Fusus: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara KabatOne y Fusus en siete dimensiones operativas críticas para organizaciones de seguridad pública.'
                : 'The following table compares KabatOne and Fusus across seven operational dimensions critical for public safety organizations.'}
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
                  Fusus
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
                    {row.fusus}
                  </div>
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--dim)', lineHeight: 1.55, borderLeft: '1px solid var(--border)' }}>
                    {row.kabatone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RTCC vs FULL PLATFORM ── */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Capa de Inteligencia vs Plataforma Operacional' : 'Intelligence Layer vs Operational Platform'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Fusus está diseñado como una capa de inteligencia sobre sistemas existentes — toma video de múltiples fuentes y lo presenta en una interfaz unificada para que los oficiales puedan ver rápidamente qué está pasando en el campo durante un incidente. Es una herramienta valiosa para agencias que ya tienen CAD y quieren añadir inteligencia de video en tiempo real sin reemplazar su infraestructura.'
                : 'Fusus is designed as an intelligence layer on top of existing systems — it takes video from multiple sources and presents it in a unified interface so officers can quickly see what is happening in the field during an incident. It is a valuable tool for agencies that already have CAD and want to add real-time video intelligence without replacing their infrastructure.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne parte de un punto diferente: es la plataforma operacional central. En lugar de añadir inteligencia de video sobre un CAD existente, KabatOne construye el CAD, el video, el GIS y el tráfico como módulos nativos de una misma plataforma. Una alerta de reconocimiento de matrícula en K-Video puede generar automáticamente un evento en K-Dispatch. El despachador ve el video de la cámara más cercana directamente en el contexto del incidente. K-Traffic puede ajustar semáforos en la ruta de la unidad respondedora sin salir del flujo de despacho.'
                : 'KabatOne starts from a different point: it is the central operational platform. Rather than adding video intelligence on top of an existing CAD, KabatOne builds CAD, video, GIS, and traffic as native modules of the same platform. A license plate recognition alert in K-Video can automatically generate an event in K-Dispatch. The dispatcher sees the nearest camera video directly in the incident context. K-Traffic can adjust signals on the responding unit\'s route without leaving the dispatch workflow.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Para organizaciones que están construyendo o modernizando su centro de mando desde cero — o que quieren consolidar múltiples sistemas en uno — KabatOne es la plataforma diseñada para ese caso de uso. Para organizaciones con CAD maduro que solo quieren añadir inteligencia de video, Fusus puede ser una capa complementaria. Pero a medida que las organizaciones crecen en complejidad operacional, la fragmentación entre sistemas se convierte en el problema central — y ahí es donde una plataforma nativa como KabatOne tiene ventaja estructural.'
                : 'For organizations building or modernizing their command center from scratch — or looking to consolidate multiple systems into one — KabatOne is the platform designed for that use case. For organizations with mature CAD that only want to add video intelligence, Fusus can be a complementary layer. But as organizations grow in operational complexity, fragmentation between systems becomes the central problem — and that is where a native platform like KabatOne has a structural advantage.'}
            </p>
          </div>
        </section>

        {/* ── COMMUNITY VIDEO SECTION ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Video Comunitario — Sin Hardware Propietario' : 'Community Video — Without Proprietary Hardware'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El modelo hub de Fusus requiere que los propietarios de cámaras instalen un dispositivo Fusus para conectar sus cámaras a la plataforma policial. Esto crea una barrera de adopción — el propietario necesita recibir e instalar hardware — y crea dependencia de los dispositivos Fusus para mantener la conectividad.'
                : "Fusus's hub model requires camera owners to install a Fusus device to connect their cameras to the police platform. This creates an adoption barrier — the owner needs to receive and install hardware — and creates dependency on Fusus devices to maintain connectivity."}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne K-Connect permite que ciudadanos y negocios registren sus cámaras a través de un portal web — sin hardware adicional. Las cámaras con ONVIF o RTSP se integran directamente, y el centro de mando puede solicitar acceso durante emergencias. Los propietarios mantienen control total de cuándo y a quién dan acceso.'
                : 'KabatOne K-Connect allows citizens and businesses to register their cameras through a web portal — no additional hardware. Cameras with ONVIF or RTSP integrate directly, and the command center can request access during emergencies. Owners maintain full control over when and to whom they grant access.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Además, K-Video de KabatOne gestiona las cámaras fijas de ciudad — la infraestructura principal de videovigilancia municipal — sin requerir dispositivos adicionales. Soporta ONVIF, RTSP y todos los protocolos IP estándar, lo que permite integrar cámaras de cualquier fabricante: Hikvision, Dahua, Axis, Bosch, Samsung, Hanwha y muchos otros.'
                : 'Additionally, KabatOne K-Video manages city fixed cameras — the primary municipal video surveillance infrastructure — without requiring additional devices. It supports ONVIF, RTSP, and all standard IP protocols, allowing cameras from any manufacturer to be integrated: Hikvision, Dahua, Axis, Bosch, Samsung, Hanwha, and many others.'}
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
                  { href: '/integrations/facial-recognition', label: es ? 'Reconocimiento Facial' : 'Facial Recognition' },
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
                  { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Qué es un RTCC' : 'What Is a Real-Time Crime Center' },
                  { href: '/resources/what-is-video-management-software', label: es ? 'Qué es un VMS' : 'What Is Video Management Software' },
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
              {es ? 'KabatOne vs Fusus: Preguntas y Respuestas' : 'KabatOne vs Fusus: Questions & Answers'}
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
              <Link href="/vs/axon" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Axon' : 'KabatOne vs Axon'}</span>
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
              <Link href="/vs/vms" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs VMS Tradicional' : 'KabatOne vs Traditional VMS'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/k-video" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'K-Video — Gestión de Video para Seguridad Pública' : 'K-Video — Video Management for Public Safety'}</span>
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
