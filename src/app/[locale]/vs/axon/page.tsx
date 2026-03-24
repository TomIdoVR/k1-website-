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
  return generatePageMetadata('vsAxon', locale)
}

export default async function VsAxonPage({
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
    { name: 'KabatOne vs Axon', url: es ? 'https://kabatone.com/es/vs/axon/' : 'https://kabatone.com/vs/axon/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre KabatOne y Axon?',
      answer: 'Axon es principalmente una empresa de hardware de seguridad pública — cámaras corporales, TASER y drones — con una plataforma cloud complementaria (Evidence.com, Axon Records, Axon Respond) construida alrededor de ese ecosistema de hardware. KabatOne es software nativo: no requiere hardware propietario de Axon y está construido para coordinar operaciones de ciudad — video de cámaras fijas, despacho CAD, GIS y gestión de tráfico — en una sola plataforma. Axon está centrado en el oficial en campo; KabatOne está centrado en el operador de centro de mando.',
    },
    {
      question: '¿Axon incluye software de despacho CAD?',
      answer: 'Axon tiene Axon Respond, una herramienta de operaciones en tiempo real que muestra ubicaciones de unidades y permite comunicación. Sin embargo, Axon Respond no es un sistema CAD completo — no incluye intake de llamadas estructurado, recomendación de unidades basada en disponibilidad y proximidad, ni logging de despacho al nivel de un sistema CAD maduro. KabatOne K-Dispatch es un CAD completo integrado nativamente con video, GIS y tráfico.',
    },
    {
      question: '¿Puede KabatOne trabajar con cámaras y hardware que no son Axon?',
      answer: 'Sí. KabatOne es agnóstico en cuanto a hardware. K-Video soporta ONVIF, RTSP y todos los protocolos IP estándar de la industria — lo que permite integrar cámaras de cualquier fabricante (Hikvision, Dahua, Axis, Bosch, Samsung y muchos otros) sin requerir hardware propietario. Esto contrasta con el modelo de Axon, cuyo valor aumenta con el uso de cámaras corporales y TASER Axon.',
    },
    {
      question: '¿Cómo se compara Evidence.com de Axon con la gestión de video de KabatOne?',
      answer: 'Evidence.com de Axon está diseñado para gestionar evidencia digital — video de cámaras corporales, archivos de audio y documentos — con enfoque en cadena de custodia, intercambio con fiscales y cumplimiento legal. K-Video de KabatOne está diseñado para monitoreo en tiempo real de cámaras fijas de ciudad — videovigilancia, detección de incidentes con IA y validación de eventos de despacho. Son casos de uso distintos: Evidence.com gestiona evidencia post-incidente; K-Video gestiona operaciones en tiempo real.',
    },
    {
      question: '¿Cuál es mejor para operaciones de centro de mando — Axon o KabatOne?',
      answer: 'Para operaciones de centro de mando de ciudad — coordinar múltiples unidades, monitorear video de cámaras fijas, gestionar tráfico durante emergencias y mantener conciencia situacional a escala de ciudad — KabatOne es la opción más fuerte. Axon está diseñado principalmente para el flujo de trabajo centrado en el oficial: equipar oficiales con cámaras corporales, gestionar evidencia y mejorar la transparencia en uso de la fuerza. Son plataformas complementarias con focos muy distintos.',
    },
    {
      question: '¿Qué ofrece KabatOne que Axon no ofrece?',
      answer: 'En comparación con el ecosistema de Axon, KabatOne ofrece: monitoreo de cámaras fijas de ciudad en tiempo real con analítica IA (K-Video) — Axon está orientado a cámaras corporales; CAD completo (K-Dispatch) con intake de llamadas, recomendación de unidades y logging; conciencia situacional GIS a escala de ciudad (K-Safety) con seguimiento de todos los incidentes; gestión de tráfico inteligente (K-Traffic); y video comunitario (K-Connect). Además, KabatOne no requiere hardware propietario — trabaja con la infraestructura de cámaras existente.',
    },
  ] : [
    {
      question: 'What is the difference between KabatOne and Axon?',
      answer: 'Axon is primarily a public safety hardware company — body cameras, TASER, and drones — with a complementary cloud platform (Evidence.com, Axon Records, Axon Respond) built around that hardware ecosystem. KabatOne is software-native: it does not require proprietary Axon hardware and is built to coordinate city operations — fixed camera video, CAD dispatch, GIS, and traffic management — in one platform. Axon is officer-centric; KabatOne is command center operator-centric.',
    },
    {
      question: 'Does Axon include CAD dispatch software?',
      answer: 'Axon has Axon Respond, a real-time operations tool that shows unit locations and enables communication. However, Axon Respond is not a full CAD system — it does not include structured call intake, unit recommendation based on availability and proximity, or dispatch logging at the level of a mature CAD system. KabatOne K-Dispatch is a full CAD natively integrated with video, GIS, and traffic.',
    },
    {
      question: 'Can KabatOne work with non-Axon cameras and hardware?',
      answer: 'Yes. KabatOne is hardware-agnostic. K-Video supports ONVIF, RTSP, and all standard industry IP protocols — allowing cameras from any manufacturer (Hikvision, Dahua, Axis, Bosch, Samsung, and many others) to be integrated without proprietary hardware. This contrasts with the Axon model, whose value increases with the use of Axon body cameras and TASER.',
    },
    {
      question: 'How does Axon Evidence.com compare to KabatOne\'s video management?',
      answer: 'Axon Evidence.com is designed to manage digital evidence — body camera video, audio files, and documents — with a focus on chain of custody, sharing with prosecutors, and legal compliance. KabatOne K-Video is designed for real-time monitoring of city fixed cameras — video surveillance, AI incident detection, and dispatch event validation. These are distinct use cases: Evidence.com manages post-incident evidence; K-Video manages real-time operations.',
    },
    {
      question: 'Which is better for command center operations — Axon or KabatOne?',
      answer: 'For city command center operations — coordinating multiple units, monitoring fixed camera video, managing traffic during emergencies, and maintaining situational awareness at city scale — KabatOne is the stronger choice. Axon is primarily designed for the officer-centric workflow: equipping officers with body cameras, managing evidence, and improving use-of-force transparency. They are complementary platforms with very different focuses.',
    },
    {
      question: 'What does KabatOne offer that Axon does not?',
      answer: 'Compared to the Axon ecosystem, KabatOne provides: real-time city fixed-camera monitoring with AI analytics (K-Video) — Axon is oriented toward body cameras; full CAD (K-Dispatch) with call intake, unit recommendation, and logging; city-scale GIS situational awareness (K-Safety) tracking all incidents; intelligent traffic management (K-Traffic); and community video (K-Connect). Additionally, KabatOne requires no proprietary hardware — it works with existing camera infrastructure.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Categoría principal',
      axon: 'Hardware-first (cámaras corporales + TASER) con plataforma cloud complementaria',
      kabatone: 'Software nativo — plataforma unificada de operaciones (agnóstica de hardware)',
    },
    {
      category: 'Videovigilancia',
      axon: 'Evidence.com para video corporal; soporte de cámaras fijas en crecimiento',
      kabatone: 'K-Video para cámaras fijas de ciudad — ONVIF/RTSP, cualquier fabricante',
    },
    {
      category: 'Despacho / CAD',
      axon: 'Axon Respond (operaciones en tiempo real, no CAD completo)',
      kabatone: 'K-Dispatch — CAD completo con intake, recomendación de unidades y logging',
    },
    {
      category: 'Gestión de tráfico',
      axon: 'No incluido',
      kabatone: 'K-Traffic — gestión inteligente de semáforos e incidentes de tráfico',
    },
    {
      category: 'GIS / Conciencia situacional',
      axon: 'Ubicación básica en tiempo real en Axon Respond',
      kabatone: 'K-Safety — GIS operacional completo con incidentes, unidades y feeds de video',
    },
    {
      category: 'Dependencia de hardware',
      axon: 'Valor central en cámaras corporales y TASER Axon',
      kabatone: 'Sin hardware propietario — funciona con cámaras y radios existentes',
    },
    {
      category: 'Enfoque de mercado',
      axon: 'Centrado en el oficial (cámara corporal, uso de fuerza, evidencia)',
      kabatone: 'Centrado en el operador de centro de mando (coordinación a escala de ciudad)',
    },
  ] : [
    {
      category: 'Primary category',
      axon: 'Hardware-first (body cameras + TASER) with complementary cloud platform',
      kabatone: 'Software-native — unified operations platform (hardware-agnostic)',
    },
    {
      category: 'Video surveillance',
      axon: 'Evidence.com for body camera video; growing fixed camera support',
      kabatone: 'K-Video for city fixed cameras — ONVIF/RTSP, any manufacturer',
    },
    {
      category: 'Dispatch / CAD',
      axon: 'Axon Respond (real-time operations, not a full CAD)',
      kabatone: 'K-Dispatch — full CAD with intake, unit recommendation, and logging',
    },
    {
      category: 'Traffic management',
      axon: 'Not included',
      kabatone: 'K-Traffic — intelligent signal and traffic incident management',
    },
    {
      category: 'GIS / Situational awareness',
      axon: 'Basic real-time location in Axon Respond',
      kabatone: 'K-Safety — full operational GIS with incidents, units, and video feeds',
    },
    {
      category: 'Hardware dependency',
      axon: 'Core value in Axon body cameras and TASER',
      kabatone: 'No proprietary hardware — works with existing cameras and radios',
    },
    {
      category: 'Market focus',
      axon: 'Officer-centric (body camera, use-of-force, evidence management)',
      kabatone: 'Command center operator-centric (city-scale coordination)',
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
          <span style={{ color: ACCENT }}>KabatOne vs Axon</span>
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
              ? 'KabatOne vs Axon — Más Allá de las Cámaras Corporales'
              : 'KabatOne vs Axon — Beyond Body Cameras'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'Axon construyó un ecosistema poderoso alrededor de cámaras corporales y TASER, con Evidence.com para gestión de evidencia y Axon Respond para operaciones en tiempo real. KabatOne parte de un punto diferente: es software nativo sin dependencia de hardware propietario, construido para coordinar operaciones de ciudad — cámaras fijas, despacho CAD, GIS y gestión de tráfico — desde el centro de mando.'
              : 'Axon built a powerful ecosystem around body cameras and TASER, with Evidence.com for evidence management and Axon Respond for real-time operations. KabatOne starts from a different point: it is software-native with no proprietary hardware dependency, built to coordinate city operations — fixed cameras, CAD dispatch, GIS, and traffic management — from the command center.'}
          </p>
        </section>

        {/* ── WHAT IS AXON? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es Axon?' : 'What Is Axon?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Axon Enterprise (antes TASER International) es la empresa dominante en cámaras corporales para agencias de ley en Estados Unidos. Su plataforma Axon Body es la cámara corporal más desplegada en departamentos de policía de EE.UU. Evidence.com es su plataforma cloud para gestión de evidencia digital — video corporal, audio, fotografías — con enfoque en cadena de custodia e integración con sistemas judiciales.'
                : 'Axon Enterprise (formerly TASER International) is the dominant body camera company for US law enforcement agencies. Its Axon Body platform is the most widely deployed body camera in US police departments. Evidence.com is its cloud platform for digital evidence management — body video, audio, photographs — with a focus on chain of custody and judicial system integration.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'En los últimos años, Axon ha expandido su portafolio de software: Axon Records (RMS), Axon Respond (operaciones en tiempo real con ubicación de unidades y comunicación de despacho), y Axon Air (drones). Esta expansión busca convertir a Axon en una plataforma más completa, más allá del hardware. Sin embargo, el núcleo del negocio — y la mayor parte del valor del ecosistema — sigue siendo el hardware de cámara corporal y TASER.'
                : 'In recent years, Axon has expanded its software portfolio: Axon Records (RMS), Axon Respond (real-time operations with unit location and dispatch communication), and Axon Air (drones). This expansion aims to make Axon a more complete platform beyond hardware. However, the core business — and most of the ecosystem\'s value — remains body camera and TASER hardware.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Axon no incluye gestión de video de cámaras fijas de ciudad (su foco está en cámaras corporales), no tiene un CAD completo con intake de llamadas y recomendación de unidades, y no incluye gestión de tráfico inteligente. Para un centro de mando municipal que necesita coordinar operaciones a escala de ciudad, estas capacidades son críticas.'
                : 'Axon does not include fixed city-camera video management (its focus is body cameras), does not have a full CAD with call intake and unit recommendation, and does not include intelligent traffic management. For a municipal command center that needs to coordinate operations at city scale, these capabilities are critical.'}
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
                ? 'KabatOne es una plataforma unificada de seguridad pública construida para ciudades, municipios, centros de mando y agencias de respuesta. No requiere hardware propietario — se integra con las cámaras, radios y sensores que la organización ya tiene. Integra gestión de video con analítica IA (K-Video), despacho CAD (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario (K-Connect) en una plataforma nativa.'
                : 'KabatOne is a unified public safety platform built for cities, municipalities, command centers, and response agencies. It requires no proprietary hardware — it integrates with the cameras, radios, and sensors the organization already has. It integrates AI-powered video management (K-Video), CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video (K-Connect) in one native platform.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos, principalmente en México y Latinoamérica. Su foco es el operador de centro de mando que necesita coordinar múltiples unidades, monitorear miles de cámaras, gestionar el tráfico durante emergencias y mantener conciencia situacional a escala de ciudad — todo en una sola pantalla.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens, primarily in Mexico and Latin America. Its focus is the command center operator who needs to coordinate multiple units, monitor thousands of cameras, manage traffic during emergencies, and maintain situational awareness at city scale — all in one screen.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Axon y KabatOne pueden ser complementarios: Axon equipa al oficial en campo con cámaras corporales y TASER; KabatOne coordina las operaciones desde el centro de mando con video de cámaras fijas, CAD, GIS y tráfico. Pero para la función de centro de mando, KabatOne es la plataforma especializada.'
                : 'Axon and KabatOne can be complementary: Axon equips the field officer with body cameras and TASER; KabatOne coordinates operations from the command center with fixed camera video, CAD, GIS, and traffic. But for the command center function, KabatOne is the purpose-built platform.'}
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
              {es ? 'KabatOne vs Axon: Diferencias Clave' : 'KabatOne vs Axon: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara KabatOne y Axon en siete dimensiones operativas críticas para organizaciones de seguridad pública.'
                : 'The following table compares KabatOne and Axon across seven operational dimensions critical for public safety organizations.'}
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
                  Axon
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
                    {row.axon}
                  </div>
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--dim)', lineHeight: 1.55, borderLeft: '1px solid var(--border)' }}>
                    {row.kabatone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHERE KABATONE GOES FURTHER ── */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Centrado en el Oficial vs Centrado en el Centro de Mando' : 'Officer-Centric vs Command Center-Centric'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'La diferencia fundamental entre Axon y KabatOne es el punto de vista de diseño. Axon fue construido desde la perspectiva del oficial en campo: equipa al policía con la mejor cámara corporal del mercado, graba cada interacción y facilita el flujo de evidencia desde la calle hasta el tribunal. Es un sistema excelente para lo que hace.'
                : 'The fundamental difference between Axon and KabatOne is the design perspective. Axon was built from the field officer\'s perspective: equip the officer with the best body camera on the market, record every interaction, and facilitate the evidence flow from the street to the courtroom. It is an excellent system for what it does.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne fue construido desde la perspectiva del operador de centro de mando: ¿cómo coordina el despachador múltiples incidentes simultáneos, qué cámaras fijas de ciudad están mostrando actividad relevante, cómo se mueve el tráfico en la zona del incidente y cómo se rastrea la unidad respondedora en el mapa? Esas preguntas requieren video de cámaras fijas, no cámaras corporales — y requieren CAD, GIS y tráfico conectados en un solo flujo.'
                : 'KabatOne was built from the command center operator\'s perspective: how does the dispatcher coordinate multiple simultaneous incidents, what city fixed cameras are showing relevant activity, how is traffic moving in the incident area, and how is the responding unit tracked on the map? Those questions require fixed camera video, not body cameras — and they require CAD, GIS, and traffic connected in one workflow.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Axon y KabatOne son más complementarios que competidores directos. Pero cuando una organización necesita elegir una plataforma de coordinación de operaciones de ciudad, KabatOne — con su CAD completo, video de cámaras fijas, GIS operacional y gestión de tráfico — es la plataforma diseñada para ese caso de uso.'
                : 'Axon and KabatOne are more complementary than direct competitors. But when an organization needs to choose a city operations coordination platform, KabatOne — with its full CAD, fixed camera video, operational GIS, and traffic management — is the platform designed for that use case.'}
            </p>
          </div>
        </section>

        {/* ── INTEGRATION SECTION ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Sin Lock-In de Hardware — KabatOne Funciona con lo que Ya Tienes' : 'No Hardware Lock-In — KabatOne Works with What You Already Have'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne K-Video soporta ONVIF, RTSP y todos los protocolos IP estándar de la industria. Esto significa que cualquier cámara con protocolos IP estándar — de Hikvision, Dahua, Axis, Bosch, Samsung, Hanwha, Vivotek o cualquier otro fabricante — se puede integrar en la plataforma sin hardware adicional. Las ciudades con cientos o miles de cámaras instaladas pueden incorporar KabatOne sin un proyecto de sustitución de hardware.'
                : 'KabatOne K-Video supports ONVIF, RTSP, and all standard industry IP protocols. This means any camera with standard IP protocols — from Hikvision, Dahua, Axis, Bosch, Samsung, Hanwha, Vivotek, or any other manufacturer — can be integrated into the platform without additional hardware. Cities with hundreds or thousands of installed cameras can bring in KabatOne without a hardware replacement project.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Este modelo contrasta con el ecosistema de Axon, donde el valor de las capacidades de video está vinculado al uso de cámaras corporales Axon. Para operaciones de centro de mando que dependen de cámaras fijas de ciudad — que representan la gran mayoría de la infraestructura de videovigilancia municipal — KabatOne ofrece integración completa sin restricciones de marca.'
                : 'This model contrasts with the Axon ecosystem, where the value of video capabilities is tied to the use of Axon body cameras. For command center operations that depend on city fixed cameras — which represent the vast majority of municipal video surveillance infrastructure — KabatOne offers full integration without brand restrictions.'}
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
              {es ? 'KabatOne vs Axon: Preguntas y Respuestas' : 'KabatOne vs Axon: Questions & Answers'}
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
              <Link href="/vs/vms" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs VMS Tradicional' : 'KabatOne vs Traditional VMS'}</span>
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
              <Link href="/resources/what-is-a-public-safety-platform" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? '¿Qué Es una Plataforma de Seguridad Pública?' : 'What Is a Public Safety Platform?'}</span>
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
            ? 'Descubre cómo KabatOne coordina operaciones de ciudad con video, CAD, GIS y tráfico en un solo sistema. Solicita una demo.'
            : 'See how KabatOne coordinates city operations with video, CAD, GIS, and traffic in one system. Request a demo.'}
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
