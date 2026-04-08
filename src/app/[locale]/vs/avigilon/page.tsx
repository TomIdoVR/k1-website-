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
  return generatePageMetadata('vsAvigilon', locale)
}

export default async function VsAvigilonPage({
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
    { name: 'KabatOne vs Avigilon', url: es ? 'https://kabatone.com/es/vs/avigilon/' : 'https://kabatone.com/vs/avigilon/' },
  ]

  const pageUrl = es ? 'https://kabatone.com/es/vs/avigilon/' : 'https://kabatone.com/vs/avigilon/'

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre KabatOne y Avigilon?',
      answer: 'Avigilon (de Motorola Solutions) es un sistema de gestión de video (VMS) premium con analítica de video de autoaprendizaje y hardware de cámaras propio. Es una solución sólida para gestión de video empresarial, pero no incluye despacho CAD, GIS operacional, ni gestión de tráfico. KabatOne es una plataforma de seguridad pública unificada: además de gestión de video con analítica IA (K-Video), incluye despacho CAD completo (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario (K-Connect) — todo nativo en un solo sistema.',
    },
    {
      question: '¿Avigilon tiene sistema de despacho CAD o coordinación de emergencias?',
      answer: 'No. Avigilon es un VMS — gestiona cámaras, almacena video y aplica analítica de IA sobre los feeds. No incluye despacho de emergencias, gestión de incidentes operacionales ni coordinación de unidades en campo. Avigilon puede integrarse con sistemas de despacho de terceros a través de APIs, pero no reemplaza un CAD. KabatOne K-Dispatch es un sistema CAD completo con recepción de llamadas, recomendación automática de unidades, logging de despacho y rastreo de unidades en tiempo real — nativo e integrado con video, GIS y tráfico.',
    },
    {
      question: '¿Qué es Avigilon Alta y en qué se diferencia del VMS tradicional de Avigilon?',
      answer: 'Avigilon Alta (anteriormente Avigilon Unity) es la evolución cloud-managed de Avigilon — un VMS administrado desde la nube con analítica de video de autoaprendizaje, acceso remoto y gestión de dispositivos desde la plataforma de Motorola Solutions. El VMS tradicional de Avigilon era on-premise. En ambos casos, el enfoque es video: cámaras, analítica de video, control de acceso. Ninguna versión de Avigilon incluye despacho CAD, GIS operacional para centros de mando, ni gestión de tráfico — las capacidades que KabatOne añade nativamente a la gestión de video.',
    },
    {
      question: '¿KabatOne puede reemplazar a Avigilon?',
      answer: 'Para organizaciones que necesitan una plataforma unificada de seguridad pública, KabatOne puede reemplazar a Avigilon como sistema de gestión de video y agregar las capacidades que Avigilon no tiene: CAD completo, GIS operacional y gestión de tráfico. KabatOne K-Video soporta ONVIF, RTSP y todos los protocolos IP estándar — puede integrarse con cámaras existentes, incluyendo hardware de Avigilon. Para organizaciones con una instalación de cámaras Avigilon y sin intención de reemplazar el hardware, KabatOne puede actuar como capa de gestión unificada sobre esas cámaras mientras añade las capacidades operacionales que faltan.',
    },
    {
      question: '¿Qué ofrece KabatOne que Avigilon no ofrece?',
      answer: 'Más allá de la gestión de video, KabatOne proporciona: CAD completo (K-Dispatch) con recepción de llamadas, recomendación de unidades y logging — Avigilon no tiene CAD; GIS operacional (K-Safety) con conciencia situacional a escala de ciudad, rastreo de unidades y correlación de incidentes con video — Avigilon no tiene GIS operacional nativo para centros de mando; gestión inteligente de tráfico (K-Traffic) para coordinar semáforos y vehículos de emergencia — Avigilon no incluye tráfico; coordinación multiagencia nativa — despacho, video, GIS y tráfico comparten datos en tiempo real sin proyectos de integración. KabatOne también no requiere hardware propietario — soporta cámaras de cualquier fabricante.',
    },
  ] : [
    {
      question: 'What is the difference between KabatOne and Avigilon?',
      answer: 'Avigilon (by Motorola Solutions) is a premium video management system (VMS) with self-learning video analytics and proprietary camera hardware. It is a strong enterprise video management solution, but it does not include CAD dispatch, operational GIS, or traffic management. KabatOne is a unified public safety platform: in addition to AI-powered video management (K-Video), it includes full CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video (K-Connect) — all native in one system.',
    },
    {
      question: 'Does Avigilon have a CAD dispatch system or emergency coordination capabilities?',
      answer: 'No. Avigilon is a VMS — it manages cameras, stores video, and applies AI analytics to feeds. It does not include emergency dispatch, operational incident management, or field unit coordination. Avigilon can integrate with third-party dispatch systems via APIs, but it does not replace a CAD. KabatOne K-Dispatch is a full CAD system with call intake, automatic unit recommendation, dispatch logging, and real-time unit tracking — native and integrated with video, GIS, and traffic.',
    },
    {
      question: 'What is Avigilon Alta and how does it differ from traditional Avigilon VMS?',
      answer: 'Avigilon Alta (formerly Avigilon Unity) is the cloud-managed evolution of Avigilon — a VMS administered from the cloud with self-learning video analytics, remote access, and device management from the Motorola Solutions platform. Traditional Avigilon VMS was on-premise. In both cases, the focus is video: cameras, video analytics, access control. Neither version of Avigilon includes CAD dispatch, operational GIS for command centers, or traffic management — the capabilities that KabatOne adds natively to video management.',
    },
    {
      question: 'Can KabatOne replace Avigilon?',
      answer: 'For organizations that need a unified public safety platform, KabatOne can replace Avigilon as the video management system and add the capabilities Avigilon lacks: full CAD, operational GIS, and traffic management. KabatOne K-Video supports ONVIF, RTSP, and all standard IP protocols — it can integrate with existing cameras, including Avigilon hardware. For organizations with an existing Avigilon camera installation and no intent to replace the hardware, KabatOne can act as the unified management layer over those cameras while adding the missing operational capabilities.',
    },
    {
      question: 'What does KabatOne offer that Avigilon does not?',
      answer: 'Beyond video management, KabatOne provides: full CAD (K-Dispatch) with call intake, unit recommendation, and logging — Avigilon has no CAD; operational GIS (K-Safety) with city-scale situational awareness, unit tracking, and incident correlation with video — Avigilon has no native operational GIS for command centers; intelligent traffic management (K-Traffic) to coordinate signals and emergency vehicles — Avigilon does not include traffic; native multi-agency coordination — dispatch, video, GIS, and traffic share real-time data without integration projects. KabatOne also requires no proprietary hardware — it supports cameras from any manufacturer.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Categoría principal',
      avigilon: 'VMS premium con analítica de video de autoaprendizaje (Motorola Solutions)',
      kabatone: 'Plataforma de seguridad pública unificada — video, CAD, GIS y tráfico',
    },
    {
      category: 'Analítica de video / IA',
      avigilon: 'Analítica de autoaprendizaje con detección de objetos, LPR y búsqueda forense',
      kabatone: 'K-Video — IA nativa con LPR, detección de eventos, análisis de movimiento y correlación con despacho',
    },
    {
      category: 'Despacho / CAD',
      avigilon: 'No incluido — se integra con sistemas CAD de terceros',
      kabatone: 'K-Dispatch — CAD completo con recepción de llamadas, recomendación de unidades y logging',
    },
    {
      category: 'GIS / Conciencia situacional',
      avigilon: 'Sin GIS operacional nativo para centros de mando',
      kabatone: 'K-Safety — GIS operacional completo con incidentes, unidades y feeds de video en tiempo real',
    },
    {
      category: 'Coordinación multiagencia',
      avigilon: 'Sin coordinación operacional nativa entre agencias',
      kabatone: 'Coordinación nativa entre despacho, video, GIS y tráfico en una sola plataforma',
    },
    {
      category: 'Gestión de tráfico',
      avigilon: 'No incluido',
      kabatone: 'K-Traffic — gestión inteligente de semáforos e incidentes de tráfico',
    },
    {
      category: 'Flexibilidad de integración',
      avigilon: 'Hardware propietario de Avigilon + ONVIF limitado; ecosistema Motorola',
      kabatone: 'ONVIF, RTSP y todos los protocolos IP estándar — cualquier fabricante de cámaras',
    },
    {
      category: 'Despliegue en LATAM',
      avigilon: 'Presencia de canal de ventas; sin referencia de despliegue operacional en C5/C2 LATAM',
      kabatone: 'Más de 40 ciudades activas protegiendo 73 millones+ de ciudadanos en México y LATAM',
    },
    {
      category: 'Modelo de precio',
      avigilon: 'Licencia de VMS + hardware de cámaras Avigilon; cloud-managed en Alta',
      kabatone: 'Plataforma modular unificada; sin hardware propietario obligatorio',
    },
  ] : [
    {
      category: 'Primary category',
      avigilon: 'Premium VMS with self-learning video analytics (Motorola Solutions)',
      kabatone: 'Unified public safety platform — video, CAD, GIS, and traffic',
    },
    {
      category: 'Video analytics / AI',
      avigilon: 'Self-learning analytics with object detection, LPR, and forensic search',
      kabatone: 'K-Video — native AI with LPR, event detection, motion analysis, and dispatch correlation',
    },
    {
      category: 'Dispatch / CAD',
      avigilon: 'Not included — integrates with third-party CAD systems',
      kabatone: 'K-Dispatch — full CAD with call intake, unit recommendation, and logging',
    },
    {
      category: 'GIS / Situational awareness',
      avigilon: 'No native operational GIS for command centers',
      kabatone: 'K-Safety — full operational GIS with real-time incidents, units, and video feeds',
    },
    {
      category: 'Multi-agency coordination',
      avigilon: 'No native operational coordination across agencies',
      kabatone: 'Native coordination across dispatch, video, GIS, and traffic in one platform',
    },
    {
      category: 'Traffic management',
      avigilon: 'Not included',
      kabatone: 'K-Traffic — intelligent signal and traffic incident management',
    },
    {
      category: 'Integration flexibility',
      avigilon: 'Proprietary Avigilon hardware + limited ONVIF; Motorola ecosystem',
      kabatone: 'ONVIF, RTSP, and all standard IP protocols — any camera manufacturer',
    },
    {
      category: 'LATAM deployment',
      avigilon: 'Sales channel presence; no C5/C2 operational deployment record in LATAM',
      kabatone: '40+ active cities protecting 73M+ citizens in Mexico and LATAM',
    },
    {
      category: 'Pricing model',
      avigilon: 'VMS license + Avigilon camera hardware; cloud-managed in Alta',
      kabatone: 'Unified modular platform; no mandatory proprietary hardware',
    },
  ]

  const whyKabatoneCards = es ? [
    {
      title: 'Del video al despacho — sin cambiar de sistema',
      body: 'En Avigilon, una alerta de video es el final del flujo. El operador necesita cambiar a otro sistema para despachar unidades. En KabatOne, una alerta de K-Video genera automáticamente un evento en K-Dispatch. El despachador ve el video más cercano directamente en el contexto del incidente. Sin cambios de sistema, sin pérdida de tiempo.',
    },
    {
      title: 'GIS operacional nativo — no solo un mapa de cámaras',
      body: 'Avigilon muestra cámaras en un mapa. KabatOne K-Safety es un GIS operacional completo: incidentes en tiempo real, rastreo de unidades, correlación de eventos con feeds de video, y zonas de riesgo configurables — todo en la misma vista donde el despachador trabaja. Conciencia situacional real, no solo geografía de cámaras.',
    },
    {
      title: 'Sin hardware propietario obligatorio',
      body: 'Avigilon empuja hacia su propio hardware de cámaras para maximizar las capacidades de analítica. KabatOne K-Video soporta ONVIF, RTSP y todos los protocolos IP estándar — puede gestionar cámaras de Hikvision, Dahua, Axis, Bosch, Hanwha y cualquier otro fabricante. Si ya tienes cámaras Avigilon, KabatOne las integra sin reemplazarlas.',
    },
    {
      title: 'Trayectoria probada en C5 y centros de mando en LATAM',
      body: 'KabatOne está desplegado en más de 40 ciudades en México y América Latina — principalmente en entornos C5 y C2 donde convergen despacho, video, GIS y tráfico en operaciones reales. Avigilon no tiene un registro de referencia equivalente en centros de mando gubernamentales LATAM. Para compradores de gobierno que necesitan confianza en el proveedor, el historial de despliegue importa.',
    },
  ] : [
    {
      title: 'From video alert to dispatch — without switching systems',
      body: 'In Avigilon, a video alert is the end of the workflow. The operator must switch to another system to dispatch units. In KabatOne, a K-Video alert automatically generates an event in K-Dispatch. The dispatcher sees the nearest camera video directly in the incident context. No system switching, no time lost.',
    },
    {
      title: 'Native operational GIS — not just a camera map',
      body: 'Avigilon shows cameras on a map. KabatOne K-Safety is a full operational GIS: real-time incidents, unit tracking, event correlation with video feeds, and configurable risk zones — all in the same view where the dispatcher works. Real situational awareness, not just camera geography.',
    },
    {
      title: 'No mandatory proprietary hardware',
      body: 'Avigilon pushes toward its own camera hardware to maximize analytics capabilities. KabatOne K-Video supports ONVIF, RTSP, and all standard IP protocols — it can manage cameras from Hikvision, Dahua, Axis, Bosch, Hanwha, and any other manufacturer. If you already have Avigilon cameras, KabatOne integrates them without replacement.',
    },
    {
      title: 'Proven track record in C5 and command centers across LATAM',
      body: 'KabatOne is deployed across 40+ cities in Mexico and Latin America — primarily in C5 and C2 environments where dispatch, video, GIS, and traffic converge in real operations. Avigilon has no equivalent reference record in LATAM government command centers. For government buyers who need supplier confidence, deployment history matters.',
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
                ? 'KabatOne vs Avigilon — VMS Premium vs Plataforma de Seguridad Pública Unificada'
                : 'KabatOne vs Avigilon — Premium VMS vs Unified Public Safety Platform',
              es
                ? 'Avigilon de Motorola Solutions es un VMS premium con analítica de video de autoaprendizaje. KabatOne agrega despacho CAD completo, GIS operacional y gestión de tráfico — conectando el flujo completo de respuesta en una sola plataforma.'
                : 'Avigilon by Motorola Solutions is a premium VMS with self-learning video analytics. KabatOne adds full CAD dispatch, operational GIS, and traffic management — connecting the complete response workflow in one platform.',
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
          <span style={{ color: ACCENT }}>KabatOne vs Avigilon</span>
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
              ? 'KabatOne vs Avigilon — VMS Premium vs Plataforma de Seguridad Pública Unificada'
              : 'KabatOne vs Avigilon — Premium VMS vs Unified Public Safety Platform'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'Avigilon es el VMS premium de Motorola Solutions — hardware de cámaras, almacenamiento de video y analítica de autoaprendizaje. Es una solución fuerte para gestión de video empresarial. KabatOne añade lo que Avigilon no tiene: despacho CAD completo, GIS operacional y gestión de tráfico — todo nativo en una plataforma diseñada para centros de mando C5 y organizaciones de seguridad pública.'
              : 'Avigilon is Motorola Solutions\' premium VMS — camera hardware, video storage, and self-learning analytics. It is a strong solution for enterprise video management. KabatOne adds what Avigilon lacks: full CAD dispatch, operational GIS, and traffic management — all native in a platform built for C5 command centers and public safety organizations.'}
          </p>
        </section>

        {/* ── WHAT IS AVIGILON? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es Avigilon?' : 'What Is Avigilon?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Avigilon es la marca de videovigilancia de Motorola Solutions — un VMS premium combinado con hardware de cámaras propio y analítica de video de autoaprendizaje. Fundada en Vancouver en 2004 y adquirida por Motorola Solutions en 2018, Avigilon se posicionó durante años como la referencia de calidad en video de alta resolución y analítica inteligente para entornos empresariales y gubernamentales. Su tecnología de analítica de autoaprendizaje — comercializada bajo el nombre Appearance Search y otras marcas — permite a los operadores buscar personas o vehículos en grabaciones usando características visuales sin necesidad de etiquetado previo.'
                : 'Avigilon is Motorola Solutions\' video surveillance brand — a premium VMS combined with proprietary camera hardware and self-learning video analytics. Founded in Vancouver in 2004 and acquired by Motorola Solutions in 2018, Avigilon positioned itself for years as the quality reference in high-resolution video and intelligent analytics for enterprise and government environments. Its self-learning analytics technology — marketed under the Appearance Search name and other brands — allows operators to search for people or vehicles in recordings using visual characteristics without prior tagging.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Avigilon Alta es la evolución cloud-managed de la plataforma — un VMS administrado desde la nube que integra las capacidades de analítica de Avigilon con la gestión de dispositivos y el ecosistema de Motorola Solutions. Alta permite a las organizaciones gestionar cámaras, revisar video y recibir alertas sin infraestructura de servidor on-premise. También incluye integración con control de acceso, complementando el video con la gestión de entradas.'
                : 'Avigilon Alta is the cloud-managed evolution of the platform — a VMS administered from the cloud that integrates Avigilon\'s analytics capabilities with Motorola Solutions\' device management and ecosystem. Alta allows organizations to manage cameras, review video, and receive alerts without on-premise server infrastructure. It also includes access control integration, complementing video with entry management.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Lo que Avigilon no incluye en ninguna de sus versiones — clásica o Alta — es despacho de emergencias CAD, GIS operacional para centros de mando, gestión de tráfico o coordinación multiagencia. Es una plataforma de video con analítica avanzada. Para organizaciones que necesitan coordinar despacho, campo, GIS y tráfico en el mismo flujo operacional que el video, Avigilon requiere integrar sistemas adicionales de terceros.'
                : 'What Avigilon does not include in any of its versions — classic or Alta — is CAD emergency dispatch, operational GIS for command centers, traffic management, or multi-agency coordination. It is a video platform with advanced analytics. For organizations that need to coordinate dispatch, field, GIS, and traffic in the same operational workflow as video, Avigilon requires integrating additional third-party systems.'}
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
                ? 'K-Video de KabatOne gestiona cámaras fijas de ciudad con analítica IA — reconocimiento de placas (LPR), detección de eventos, análisis de movimiento — y conecta directamente esas alertas al flujo de despacho CAD. Una alerta de video puede generar automáticamente un evento en K-Dispatch sin que el operador cambie de sistema. K-Safety superpone incidentes, unidades y feeds de video en un mapa GIS operacional — el mismo mapa donde trabaja el despachador.'
                : 'KabatOne K-Video manages city fixed cameras with AI analytics — license plate recognition (LPR), event detection, motion analysis — and directly connects those alerts to the CAD dispatch workflow. A video alert can automatically generate an event in K-Dispatch without the operator switching systems. K-Safety overlays incidents, units, and video feeds on an operational GIS map — the same map where the dispatcher works.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos, principalmente en México y América Latina. A diferencia de Avigilon, que es una capa de video que requiere sistemas adicionales para completar las operaciones de un centro de mando, KabatOne es la plataforma operacional central — donde convergen el despacho, el video, el GIS y el tráfico en un solo flujo de trabajo.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens, primarily in Mexico and Latin America. Unlike Avigilon, which is a video layer that requires additional systems to complete command center operations, KabatOne is the central operational platform — where dispatch, video, GIS, and traffic converge in one workflow.'}
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
              {es ? 'KabatOne vs Avigilon: Diferencias Clave' : 'KabatOne vs Avigilon: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara KabatOne y Avigilon en nueve dimensiones operativas críticas para organizaciones de seguridad pública y centros de mando.'
                : 'The following table compares KabatOne and Avigilon across nine operational dimensions critical for public safety organizations and command centers.'}
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
                  Avigilon
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
                    {row.avigilon}
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
              {es ? 'Ventaja Estructural' : 'Structural Advantage'}
            </p>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '40px',
            }}>
              {es ? 'Por Qué KabatOne Gana en Entornos C5' : 'Why KabatOne Wins in C5 Environments'}
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

        {/* ── VMS VS FULL PLATFORM ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'VMS vs Plataforma Operacional — Una Diferencia Fundamental' : 'VMS vs Operational Platform — A Fundamental Difference'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Avigilon es excepcionalmente bueno en lo que hace: gestionar video, aplicar analítica de autoaprendizaje y entregar imágenes de alta resolución en múltiples pantallas. Para organizaciones cuya necesidad central es gestión de video — instalaciones corporativas, campus universitarios, aeropuertos con sus propios sistemas de despacho — Avigilon es una opción sólida dentro del ecosistema Motorola Solutions.'
                : 'Avigilon is exceptionally good at what it does: managing video, applying self-learning analytics, and delivering high-resolution images to multiple screens. For organizations whose central need is video management — corporate facilities, university campuses, airports with their own dispatch systems — Avigilon is a solid choice within the Motorola Solutions ecosystem.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El problema surge cuando la organización es un centro de mando C5, una dirección de seguridad pública municipal, o una agencia que necesita coordinar despacho, video, GIS y tráfico en un solo flujo operacional. En ese caso, Avigilon es una pieza del puzzle — y la organización necesita integrar PremierOne CAD (otro producto de Motorola), un GIS operacional y un sistema de tráfico para completar el cuadro. Tres sistemas, tres proyectos de integración, tres proveedores para la misma organización.'
                : 'The problem arises when the organization is a C5 command center, a municipal public safety directorate, or an agency that needs to coordinate dispatch, video, GIS, and traffic in one operational workflow. In that case, Avigilon is one piece of the puzzle — and the organization needs to integrate PremierOne CAD (another Motorola product), an operational GIS, and a traffic system to complete the picture. Three systems, three integration projects, three vendors for the same organization.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne parte de un punto diferente: es la plataforma operacional central. Video, despacho, GIS y tráfico son módulos nativos de la misma plataforma — comparten datos en tiempo real sin proyectos de integración. Para centros de mando que buscan consolidar sus operaciones en un solo sistema, esa diferencia arquitectónica es la ventaja más importante.'
                : 'KabatOne starts from a different point: it is the central operational platform. Video, dispatch, GIS, and traffic are native modules of the same platform — they share real-time data without integration projects. For command centers looking to consolidate operations into one system, that architectural difference is the most important advantage.'}
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
              {es ? 'KabatOne vs Avigilon: Preguntas y Respuestas' : 'KabatOne vs Avigilon: Questions & Answers'}
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
              <Link href="/vs/motorola" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Motorola Solutions' : 'KabatOne vs Motorola Solutions'}</span>
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
              <Link href="/vs/vms" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs VMS Tradicional' : 'KabatOne vs Traditional VMS'}</span>
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
            ? 'Descubre cómo KabatOne unifica video, CAD, GIS y tráfico donde Avigilon se detiene. Solicita una demo con datos reales de ciudad.'
            : 'See how KabatOne unifies video, CAD, GIS, and traffic where Avigilon stops. Request a demo with real city data.'}
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
