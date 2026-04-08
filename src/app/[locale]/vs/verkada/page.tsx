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
  return generatePageMetadata('vsVerkada', locale)
}

export default async function VsVerkadaPage({
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
    { name: 'KabatOne vs Verkada', url: es ? 'https://kabatone.com/es/vs/verkada/' : 'https://kabatone.com/vs/verkada/' },
  ]

  const pageUrl = es ? 'https://kabatone.com/es/vs/verkada/' : 'https://kabatone.com/vs/verkada/'

  const faqs = es ? [
    {
      question: '¿Puede Verkada manejar el despacho de emergencias o coordinación de incidentes?',
      answer: 'No. Verkada es una plataforma de seguridad física gestionada en la nube — cámaras, control de acceso, alarmas y sensores ambientales. No incluye despacho CAD, gestión de incidentes operacionales ni coordinación de unidades en campo. Para organizaciones que necesitan coordinar la respuesta desde la detección hasta el despacho, Verkada requiere integrar un sistema CAD de terceros. KabatOne K-Dispatch es un sistema CAD completo nativo — recepción de llamadas, recomendación automática de unidades, logging de despacho y rastreo en tiempo real — integrado con video, GIS y tráfico en la misma plataforma.',
    },
    {
      question: '¿KabatOne requiere hardware propietario como Verkada?',
      answer: 'No. Verkada requiere sus propias cámaras y dispositivos de acceso — el hardware propietario es parte central de su modelo de negocio. KabatOne K-Video soporta ONVIF, RTSP y todos los protocolos IP estándar, lo que significa que puede gestionar cámaras de cualquier fabricante: Hikvision, Dahua, Axis, Bosch, Hanwha, y otras. Si una organización ya tiene cámaras existentes, KabatOne las integra sin reemplazarlas. No hay dependencia de hardware propietario.',
    },
    {
      question: '¿Cuál es mejor para centros de mando gubernamentales?',
      answer: 'KabatOne está diseñado específicamente para entornos de mando C5/C2 y organizaciones de seguridad pública. Incluye CAD completo (K-Dispatch), GIS operacional (K-Safety), gestión de tráfico (K-Traffic), video con IA (K-Video) y video comunitario (K-Connect) — todos nativos en una sola plataforma. Verkada es una plataforma de seguridad para instalaciones — sólida para edificios corporativos, campus y retail, pero sin las capacidades operacionales que los centros de mando gubernamentales necesitan: despacho, GIS a escala de ciudad, gestión de tráfico o coordinación multiagencia.',
    },
    {
      question: '¿Puede KabatOne integrarse con cámaras Verkada?',
      answer: 'KabatOne K-Video soporta ONVIF y RTSP — los protocolos IP estándar de la industria. La compatibilidad específica con dispositivos Verkada depende del soporte ONVIF/RTSP de Verkada para cada modelo de cámara. Para organizaciones con infraestructura Verkada existente que necesitan añadir capacidades de despacho CAD, GIS operacional y gestión de tráfico, KabatOne puede actuar como capa de gestión unificada mientras preserva las inversiones de hardware existentes donde sea técnicamente compatible.',
    },
    {
      question: '¿Qué diferencia a KabatOne de Verkada para municipios?',
      answer: 'Verkada gestiona la seguridad de instalaciones — cámaras, puertas, alarmas. Para un municipio que opera un centro de mando, eso cubre solo la capa de video y acceso físico. KabatOne cubre el flujo operacional completo: video de cámaras de ciudad (K-Video), despacho de emergencias (K-Dispatch), conciencia situacional GIS a escala de ciudad (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario compartido por ciudadanos y negocios (K-Connect). Para municipios que necesitan coordinar policía, bomberos, tráfico y video en una sola operación, KabatOne es la plataforma operacional central — no una herramienta de seguridad de instalaciones.',
    },
    {
      question: '¿Qué ofrece KabatOne que Verkada no ofrece?',
      answer: 'Más allá del video y acceso físico, KabatOne proporciona: CAD completo (K-Dispatch) con recepción de llamadas, recomendación de unidades y logging — Verkada no tiene CAD; GIS operacional (K-Safety) con conciencia situacional a escala de ciudad, rastreo de unidades y correlación con video en tiempo real — Verkada no tiene GIS operacional; gestión inteligente de tráfico (K-Traffic) para coordinar semáforos, incidentes viales y vehículos de emergencia — Verkada no incluye tráfico; video comunitario (K-Connect) para incorporar cámaras de ciudadanos y negocios sin hardware propietario; y coordinación multiagencia nativa entre todos los módulos sin integraciones adicionales.',
    },
  ] : [
    {
      question: 'Can Verkada handle emergency dispatch or incident coordination?',
      answer: 'No. Verkada is a cloud-managed physical security platform — cameras, access control, alarms, and environmental sensors. It does not include CAD dispatch, operational incident management, or field unit coordination. For organizations that need to coordinate response from detection to dispatch, Verkada requires integrating a third-party CAD system. KabatOne K-Dispatch is a native full CAD system — call intake, automatic unit recommendation, dispatch logging, and real-time tracking — integrated with video, GIS, and traffic in the same platform.',
    },
    {
      question: 'Does KabatOne require proprietary hardware like Verkada?',
      answer: 'No. Verkada requires its own cameras and access devices — proprietary hardware is a core part of its business model. KabatOne K-Video supports ONVIF, RTSP, and all standard IP protocols, which means it can manage cameras from any manufacturer: Hikvision, Dahua, Axis, Bosch, Hanwha, and others. If an organization already has existing cameras, KabatOne integrates them without replacement. There is no proprietary hardware dependency.',
    },
    {
      question: 'Which is better for government command centers?',
      answer: 'KabatOne is purpose-built for C5/C2 command environments and public safety organizations. It includes full CAD (K-Dispatch), operational GIS (K-Safety), traffic management (K-Traffic), AI video (K-Video), and community video (K-Connect) — all native in one platform. Verkada is a facility security platform — strong for corporate buildings, campuses, and retail, but without the operational capabilities government command centers need: dispatch, city-scale GIS, traffic management, or multi-agency coordination.',
    },
    {
      question: 'Can KabatOne integrate with Verkada cameras?',
      answer: 'KabatOne K-Video supports ONVIF and RTSP — the industry-standard IP protocols. Specific compatibility with Verkada devices depends on Verkada\'s ONVIF/RTSP support for each camera model. For organizations with existing Verkada infrastructure that need to add CAD dispatch, operational GIS, and traffic management capabilities, KabatOne can act as a unified management layer while preserving existing hardware investments where technically compatible.',
    },
    {
      question: 'What is the difference between KabatOne and Verkada for municipalities?',
      answer: 'Verkada manages facility security — cameras, doors, alarms. For a municipality operating a command center, that covers only the video and physical access layer. KabatOne covers the full operational workflow: city camera video (K-Video), emergency dispatch (K-Dispatch), city-scale GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video shared by citizens and businesses (K-Connect). For municipalities that need to coordinate police, fire, traffic, and video in one operation, KabatOne is the central operational platform — not a facility security tool.',
    },
    {
      question: 'What does KabatOne offer that Verkada does not?',
      answer: 'Beyond video and physical access, KabatOne provides: full CAD (K-Dispatch) with call intake, unit recommendation, and logging — Verkada has no CAD; operational GIS (K-Safety) with city-scale situational awareness, unit tracking, and real-time video correlation — Verkada has no operational GIS; intelligent traffic management (K-Traffic) to coordinate signals, road incidents, and emergency vehicles — Verkada does not include traffic; community video (K-Connect) to incorporate citizen and business cameras without proprietary hardware; and native multi-agency coordination across all modules without additional integrations.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Categoría principal',
      verkada: 'Plataforma de seguridad física gestionada en la nube (cámaras, acceso, alarmas, sensores)',
      kabatone: 'Plataforma de seguridad pública unificada (video, CAD, GIS, tráfico)',
    },
    {
      category: 'Videovigilancia / IA',
      verkada: 'Cámaras cloud propias con analítica IA integrada en el hardware Verkada',
      kabatone: 'K-Video con ONVIF/RTSP — cualquier marca, LPR, detección de eventos y analítica IA',
    },
    {
      category: 'Control de acceso',
      verkada: 'Control de acceso nativo Verkada — puertas, lectores, gestión de visitantes',
      kabatone: 'Integración con sistemas de control de acceso de terceros vía estándares IP',
    },
    {
      category: 'Despacho / CAD',
      verkada: 'No incluido',
      kabatone: 'K-Dispatch — CAD completo con recepción de llamadas y asignación de unidades',
    },
    {
      category: 'GIS / Conciencia situacional',
      verkada: 'Sin GIS operacional',
      kabatone: 'K-Safety — GIS operacional completo a escala de ciudad',
    },
    {
      category: 'Gestión de tráfico',
      verkada: 'No incluido',
      kabatone: 'K-Traffic — control de semáforos y gestión de incidentes viales',
    },
    {
      category: 'Video comunitario',
      verkada: 'No incluido',
      kabatone: 'K-Connect — video comunitario sin hardware propietario',
    },
    {
      category: 'Modelo de hardware',
      verkada: 'Hardware propietario Verkada obligatorio — dependencia de proveedor',
      kabatone: 'Cualquier cámara ONVIF/RTSP — sin dependencia de hardware propietario',
    },
    {
      category: 'Mercado objetivo',
      verkada: 'Empresas, educación, salud, instalaciones corporativas',
      kabatone: 'Gobiernos, municipios, centros de mando C5/C2, seguridad pública',
    },
  ] : [
    {
      category: 'Primary category',
      verkada: 'Cloud-managed physical security platform (cameras, access, alarms, sensors)',
      kabatone: 'Unified public safety platform (video, CAD, GIS, traffic)',
    },
    {
      category: 'Video surveillance / AI',
      verkada: 'Proprietary cloud cameras with AI analytics built into Verkada hardware',
      kabatone: 'K-Video with ONVIF/RTSP — any brand, LPR, event detection, and AI analytics',
    },
    {
      category: 'Access control',
      verkada: 'Native Verkada access control — doors, readers, visitor management',
      kabatone: 'Integration with third-party access control systems via IP standards',
    },
    {
      category: 'Dispatch / CAD',
      verkada: 'Not included',
      kabatone: 'K-Dispatch — full CAD with call intake and unit assignment',
    },
    {
      category: 'GIS / Situational awareness',
      verkada: 'No operational GIS',
      kabatone: 'K-Safety — full city-scale operational GIS',
    },
    {
      category: 'Traffic management',
      verkada: 'Not included',
      kabatone: 'K-Traffic — signal control and traffic incident management',
    },
    {
      category: 'Community video',
      verkada: 'Not included',
      kabatone: 'K-Connect — community video sharing without proprietary hardware',
    },
    {
      category: 'Hardware model',
      verkada: 'Proprietary Verkada hardware required — vendor lock-in',
      kabatone: 'Any ONVIF/RTSP camera — no proprietary hardware dependency',
    },
    {
      category: 'Target market',
      verkada: 'Enterprise, education, healthcare, corporate facilities',
      kabatone: 'Government, municipalities, C5/C2 command centers, public safety agencies',
    },
  ]

  const whyKabatoneCards = es ? [
    {
      title: 'Respuesta centrada en el despacho — no solo monitoreo',
      body: 'Verkada detecta un evento en cámara. El operador entonces necesita cambiar a un sistema CAD separado para despachar unidades. En KabatOne, una alerta de K-Video puede generar automáticamente un evento en K-Dispatch — el despachador ve el video del incidente directamente en el contexto del caso, sin cambiar de pantalla. El flujo completo de detección a respuesta ocurre en una sola plataforma.',
    },
    {
      title: 'Sin dependencia de hardware propietario',
      body: 'El modelo Verkada requiere sus propias cámaras y dispositivos de acceso — una vez que entras en el ecosistema, el costo de salida es alto. KabatOne K-Video es agnóstico de hardware: soporta ONVIF, RTSP y cualquier fabricante de cámaras IP. Las organizaciones con infraestructura existente pueden preservar su inversión. No hay lock-in, no hay renovaciones de hardware forzadas.',
    },
    {
      title: 'GIS gubernamental a escala de ciudad',
      body: 'Verkada muestra cámaras en un mapa de instalación. KabatOne K-Safety es un GIS operacional de ciudad completo: incidentes en tiempo real, rastreo de unidades de policía y bomberos, zonas de riesgo configurables, correlación de eventos con feeds de video — todo visible en el mismo mapa operativo donde trabaja el despachador. La diferencia entre un mapa de cámaras y conciencia situacional real.',
    },
    {
      title: 'Tráfico y seguridad pública en una plataforma',
      body: 'KabatOne K-Traffic gestiona semáforos, detecta incidentes viales y coordina el paso de vehículos de emergencia — integrado con el mismo sistema de despacho y GIS. Cuando ocurre un incidente, el despachador puede coordinar la ruta de la unidad más cercana, activar semáforos en verde y ver el video del sector desde la misma interfaz. Verkada no tiene estas capacidades; son herramientas de seguridad de instalaciones, no de operaciones urbanas.',
    },
  ] : [
    {
      title: 'Dispatch-centric response — not just monitoring',
      body: 'Verkada detects a camera event. The operator then needs to switch to a separate CAD system to dispatch units. In KabatOne, a K-Video alert can automatically generate an event in K-Dispatch — the dispatcher sees the incident video directly in the case context, without switching screens. The full detection-to-response workflow happens in one platform.',
    },
    {
      title: 'Hardware freedom — no vendor lock-in',
      body: 'The Verkada model requires its own cameras and access devices — once you enter the ecosystem, the exit cost is high. KabatOne K-Video is hardware-agnostic: it supports ONVIF, RTSP, and any IP camera manufacturer. Organizations with existing infrastructure can preserve their investment. No lock-in, no forced hardware refreshes.',
    },
    {
      title: 'Government-grade GIS at city scale',
      body: 'Verkada shows cameras on a facility floor plan. KabatOne K-Safety is a full city-scale operational GIS: real-time incidents, police and fire unit tracking, configurable risk zones, event correlation with video feeds — all visible in the same operational map where the dispatcher works. The difference between a camera map and real situational awareness.',
    },
    {
      title: 'Traffic and public safety in one platform',
      body: 'KabatOne K-Traffic manages signals, detects road incidents, and coordinates emergency vehicle clearance — integrated with the same dispatch system and GIS. When an incident occurs, the dispatcher can route the nearest unit, trigger green lights, and view the sector video from the same interface. Verkada has none of these capabilities; they are facility security tools, not urban operations tools.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema(
              es
                ? 'KabatOne vs Verkada — Seguridad Física en la Nube vs Plataforma de Seguridad Pública Unificada'
                : 'KabatOne vs Verkada — Cloud Physical Security vs Unified Public Safety Platform',
              es
                ? 'Verkada ofrece cámaras, control de acceso y alarmas en la nube. KabatOne agrega despacho CAD completo, GIS operacional, gestión de tráfico y coordinación multiagencia — el flujo completo desde detección hasta respuesta.'
                : 'Verkada provides cloud-managed cameras, access control, and alarms. KabatOne adds full CAD dispatch, operational GIS, traffic management, and multi-agency coordination — the complete workflow from detection to response.',
              pageUrl,
              '2026-04-07'
            )
          ),
        }}
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
          <span style={{ color: ACCENT }}>KabatOne vs Verkada</span>
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
              ? 'KabatOne vs Verkada — Seguridad Física en la Nube vs Plataforma de Seguridad Pública Unificada'
              : 'KabatOne vs Verkada — Cloud Physical Security vs Unified Public Safety Platform'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'Verkada es una plataforma de seguridad física gestionada en la nube — cámaras propias, control de acceso, alarmas y sensores ambientales con una interfaz pulida. Es una solución sólida para instalaciones corporativas, educación y salud. KabatOne añade lo que Verkada no tiene: despacho CAD completo, GIS operacional a escala de ciudad, gestión de tráfico y coordinación multiagencia — todo nativo en una plataforma diseñada para centros de mando C5 y organizaciones de seguridad pública.'
              : 'Verkada is a cloud-managed physical security platform — proprietary cameras, access control, alarms, and environmental sensors with a polished interface. It is a strong solution for corporate facilities, education, and healthcare. KabatOne adds what Verkada lacks: full CAD dispatch, city-scale operational GIS, traffic management, and multi-agency coordination — all native in a platform built for C5 command centers and public safety organizations.'}
          </p>
        </section>

        {/* ── WHAT IS VERKADA? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es Verkada?' : 'What Is Verkada?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Verkada es una empresa de seguridad física fundada en 2016 en San Mateo, California. Su modelo se basa en hardware propietario gestionado desde la nube — cámaras, lectores de control de acceso, paneles de alarma, detectores de humo y sensores ambientales que se configuran y administran desde la plataforma Verkada Command. La propuesta de valor central es la simplicidad: cámaras plug-and-play sin servidores NVR, acceso remoto inmediato desde cualquier dispositivo y analítica de IA incorporada directamente en el hardware.'
                : 'Verkada is a physical security company founded in 2016 in San Mateo, California. Its model is built on proprietary cloud-managed hardware — cameras, access control readers, alarm panels, smoke detectors, and environmental sensors that are configured and managed from the Verkada Command platform. The core value proposition is simplicity: plug-and-play cameras with no NVR servers, immediate remote access from any device, and AI analytics embedded directly in the hardware.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Verkada ha tenido una adopción rápida en mercados como educación (escuelas y universidades), salud (hospitales y clínicas), retail y instalaciones corporativas — entornos donde la facilidad de instalación, la gestión centralizada y la interfaz tipo Apple resuenan con los equipos de TI y seguridad. Su analítica de IA incluye detección de personas, reconocimiento de rostros (en mercados donde está disponible) y búsqueda forense en grabaciones.'
                : 'Verkada has grown rapidly in markets like education (schools and universities), healthcare (hospitals and clinics), retail, and corporate facilities — environments where ease of installation, centralized management, and an Apple-like interface resonate with IT and security teams. Its AI analytics includes people detection, facial recognition (where available), and forensic search across recordings.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Lo que Verkada no incluye es despacho de emergencias CAD, GIS operacional para centros de mando, gestión de tráfico o coordinación multiagencia. Es una plataforma de seguridad de instalaciones — no una plataforma de operaciones de seguridad pública. Para municipios y centros de mando que necesitan coordinar despacho, campo, GIS y tráfico junto con el video, Verkada requiere integrar múltiples sistemas externos, cada uno con su propio proveedor, contrato e interfaz.'
                : 'What Verkada does not include is CAD emergency dispatch, operational GIS for command centers, traffic management, or multi-agency coordination. It is a facility security platform — not a public safety operations platform. For municipalities and command centers that need to coordinate dispatch, field, GIS, and traffic alongside video, Verkada requires integrating multiple external systems, each with its own vendor, contract, and interface.'}
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
                ? 'KabatOne es una plataforma unificada de seguridad pública construida para ciudades, municipios, centros de mando C5/C2 y agencias de respuesta. Integra gestión de video con analítica IA (K-Video), despacho CAD completo (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario (K-Connect) en una plataforma nativa — sin hardware propietario, sin proyectos de integración entre sistemas.'
                : 'KabatOne is a unified public safety platform built for cities, municipalities, C5/C2 command centers, and response agencies. It integrates AI-powered video management (K-Video), full CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video (K-Connect) in one native platform — no proprietary hardware, no cross-system integration projects.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'K-Video de KabatOne gestiona cámaras de cualquier fabricante compatible con ONVIF o RTSP — incluyendo las cámaras más populares en entornos gubernamentales de LATAM. La plataforma aplica analítica IA sobre esos feeds: reconocimiento de placas (LPR), detección de eventos, análisis de movimiento — y conecta esas alertas directamente al flujo de despacho CAD. Una alerta de video puede generar automáticamente un evento en K-Dispatch sin que el operador cambie de sistema.'
                : 'KabatOne K-Video manages cameras from any ONVIF or RTSP-compatible manufacturer — including the most common cameras in LATAM government environments. The platform applies AI analytics to those feeds: license plate recognition (LPR), event detection, motion analysis — and connects those alerts directly to the CAD dispatch workflow. A video alert can automatically generate an event in K-Dispatch without the operator switching systems.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos, principalmente en México y América Latina. A diferencia de Verkada, que está optimizada para la gestión de instalaciones de una sola organización, KabatOne está construida para coordinar múltiples agencias, flotas y disciplinas operacionales en un solo entorno de mando — el estándar que los centros C5 y C2 requieren.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens, primarily in Mexico and Latin America. Unlike Verkada, which is optimized for single-organization facility management, KabatOne is built to coordinate multiple agencies, fleets, and operational disciplines in one command environment — the standard that C5 and C2 centers require.'}
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
              {es ? 'KabatOne vs Verkada: Diferencias Clave' : 'KabatOne vs Verkada: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara KabatOne y Verkada en nueve dimensiones operativas críticas para organizaciones de seguridad pública y centros de mando.'
                : 'The following table compares KabatOne and Verkada across nine operational dimensions critical for public safety organizations and command centers.'}
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
                  Verkada
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
                    {row.verkada}
                  </div>
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--dim)', lineHeight: 1.55, borderLeft: '1px solid var(--border)' }}>
                    {row.kabatone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY KABATONE ── */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '16px',
            }}>
              {es ? 'Ventaja Estructural' : 'Structural Advantage'}
            </p>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '40px',
            }}>
              {es ? 'Por Qué KabatOne Gana en Entornos de Seguridad Pública' : 'Why KabatOne Wins in Public Safety Environments'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {whyKabatoneCards.map((card, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                  borderRadius: '12px', padding: '28px 24px',
                  borderTop: `3px solid ${ACCENT}`,
                }}>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '18px', color: 'var(--white)', marginBottom: '12px', lineHeight: 1.3,
                  }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FACILITY SECURITY VS FULL PLATFORM ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Seguridad de Instalaciones vs Plataforma Operacional — Una Diferencia Fundamental' : 'Facility Security vs Operational Platform — A Fundamental Difference'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Verkada es excepcionalmente buena en lo que hace: simplificar la seguridad de instalaciones con hardware cloud-managed y una interfaz pulida. Para una empresa que gestiona 50 oficinas, una cadena de retail que monitorea tiendas, o una universidad que necesita control de acceso y video — Verkada es una solución sólida con bajo costo de implementación y gestión centralizada desde un único panel.'
                : 'Verkada is exceptionally good at what it does: simplifying facility security with cloud-managed hardware and a polished interface. For a company managing 50 offices, a retail chain monitoring stores, or a university needing access control and video — Verkada is a solid solution with low implementation cost and centralized management from a single pane.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El problema surge cuando la organización es un municipio, una dirección de seguridad pública, o un centro de mando C5 que necesita coordinar policía, bomberos, tráfico y video en un solo flujo operacional. En ese caso, Verkada cubre solo el video y el acceso físico — y la organización necesita un sistema CAD separado, un GIS operacional separado, un sistema de gestión de tráfico separado, y los proyectos de integración entre todos ellos. Cuatro sistemas, cuatro proveedores, cuatro contratos para el mismo centro de mando.'
                : 'The problem arises when the organization is a municipality, a public safety directorate, or a C5 command center that needs to coordinate police, fire, traffic, and video in one operational workflow. In that case, Verkada covers only video and physical access — and the organization needs a separate CAD system, a separate operational GIS, a separate traffic management system, and the integration projects between all of them. Four systems, four vendors, four contracts for the same command center.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne parte de un punto diferente: es la plataforma operacional central. Video, despacho, GIS y tráfico son módulos nativos de la misma plataforma — comparten datos en tiempo real sin proyectos de integración. Para gobiernos y centros de mando que buscan consolidar sus operaciones en un solo sistema, esa diferencia arquitectónica es la ventaja más importante — y la razón por la que KabatOne está desplegado en más de 40 ciudades en México y América Latina.'
                : 'KabatOne starts from a different point: it is the central operational platform. Video, dispatch, GIS, and traffic are native modules of the same platform — they share real-time data without integration projects. For governments and command centers looking to consolidate operations into one system, that architectural difference is the most important advantage — and the reason KabatOne is deployed across 40+ cities in Mexico and Latin America.'}
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
                  { href: '/integrations/access-control', label: es ? 'Control de Acceso' : 'Access Control' },
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
                  { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Qué es un RTCC' : 'What Is a Real-Time Crime Center' },
                  { href: '/resources/how-c5-command-centers-work', label: es ? 'Cómo funcionan los centros C5' : 'How C5 Command Centers Work' },
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
              {es ? 'KabatOne vs Verkada: Preguntas y Respuestas' : 'KabatOne vs Verkada: Questions & Answers'}
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
              <Link href="/vs/avigilon" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Avigilon' : 'KabatOne vs Avigilon'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
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
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={es ? '¿Listo para Ver la Diferencia?' : 'Ready to See the Difference?'}
          subtitle={es
            ? 'Descubre cómo KabatOne unifica video, CAD, GIS y tráfico donde Verkada se detiene. Solicita una demo con datos reales de ciudad.'
            : 'See how KabatOne unifies video, CAD, GIS, and traffic where Verkada stops. Request a demo with real city data.'}
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
