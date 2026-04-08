import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { faqPageSchema, breadcrumbSchema, articleSchema } from '@/lib/schema'
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
  return generatePageMetadata('vsNiceSystems', locale)
}

export default async function VsNiceSystemsPage({
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
    { name: 'KabatOne vs NICE Systems', url: es ? 'https://kabatone.com/es/vs/nice-systems/' : 'https://kabatone.com/vs/nice-systems/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre KabatOne y NICE Systems (Qognify)?',
      answer: 'NICE Systems — a través de su adquisición de Qognify — proporciona gestión de evidencia de video, PSIM y grabación de cumplimiento para gobiernos y grandes empresas. Su enfoque está en la captura forense, gestión de evidencia y cumplimiento regulatorio. KabatOne es una plataforma operacional unificada en tiempo real: integra video con analítica IA, despacho CAD completo (K-Dispatch), conciencia situacional GIS (K-Safety) y gestión inteligente de tráfico (K-Traffic) en una sola plataforma nativa. NICE/Qognify es fuerte en evidencia post-incidente; KabatOne está diseñado para la coordinación y respuesta operacional en tiempo real.',
    },
    {
      question: '¿NICE Qognify tiene despacho CAD nativo?',
      answer: 'No. NICE Qognify no incluye un sistema CAD nativo. Su enfoque es el PSIM (gestión física de información de seguridad) y la gestión de evidencia de video — captura, almacenamiento y recuperación de video para investigaciones forenses y cumplimiento. Para organizaciones que necesitan despacho, deben integrar un sistema CAD separado. KabatOne K-Dispatch es un sistema CAD completo con intake de llamadas, recomendación de unidades, logging de despacho y seguimiento de unidades — totalmente integrado con video, GIS y tráfico en la misma plataforma.',
    },
    {
      question: '¿Qué es PSIM y en qué se diferencia del enfoque de KabatOne?',
      answer: 'PSIM (Physical Security Information Management) es una categoría de software que agrega feeds de múltiples sistemas de seguridad — video, control de acceso, alarmas, sensores — en una sola interfaz de visualización. NICE Qognify es un proveedor de PSIM reconocido. El PSIM tradicional es fuerte en agregación e integración de alertas, pero su arquitectura generalmente no incluye CAD nativo ni gestión de tráfico, y las integraciones pueden ser complejas y costosas. KabatOne va más allá del PSIM: no solo agrega y visualiza — también despacha, coordina respuesta en campo y gestiona tráfico de forma nativa en una sola plataforma.',
    },
    {
      question: '¿Puede KabatOne reemplazar a NICE Qognify en un entorno de centro de mando?',
      answer: 'Para centros de mando que necesitan una plataforma operacional unificada — video en tiempo real, despacho CAD, GIS operacional y gestión de tráfico — KabatOne cubre y supera el caso de uso central de Qognify. KabatOne incluye grabación y gestión de video, analítica IA, y conectividad a cámaras ONVIF/RTSP de cualquier fabricante. Para organizaciones con requerimientos muy específicos de gestión de evidencia forense o cumplimiento regulatorio de grabación en entornos empresariales (banca, aeropuertos grandes), Qognify puede seguir siendo relevante en esa capa específica.',
    },
    {
      question: '¿KabatOne soporta la misma cantidad de cámaras y escala que NICE Qognify?',
      answer: 'KabatOne está diseñado para entornos de ciudad y municipio — desde decenas hasta miles de cámaras por despliegue. Está activo en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos. NICE Qognify también está posicionado para escala enterprise. La diferencia clave no es la escala de cámaras sino el alcance funcional: KabatOne unifica video con CAD, GIS y tráfico, mientras que Qognify se enfoca en video y evidencia, requiriendo sistemas adicionales para completar el flujo operacional.',
    },
  ] : [
    {
      question: 'What is the difference between KabatOne and NICE Systems (Qognify)?',
      answer: 'NICE Systems — through its acquisition of Qognify — provides video evidence management, PSIM, and compliance recording for governments and large enterprises. Their focus is on forensic capture, evidence management, and regulatory compliance. KabatOne is a unified real-time operational platform: it integrates AI-powered video management, full CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), and intelligent traffic management (K-Traffic) in one native platform. NICE/Qognify is strong in post-incident evidence; KabatOne is built for real-time operational coordination and response.',
    },
    {
      question: 'Does NICE Qognify have native CAD dispatch?',
      answer: 'No. NICE Qognify does not include a native CAD system. Its focus is PSIM (physical security information management) and video evidence management — capturing, storing, and retrieving video for forensic investigations and compliance. Organizations that need dispatch must integrate a separate CAD system. KabatOne K-Dispatch is a full CAD system with call intake, unit recommendation, dispatch logging, and unit tracking — fully integrated with video, GIS, and traffic in the same platform.',
    },
    {
      question: 'What is PSIM and how does it differ from KabatOne\'s approach?',
      answer: 'PSIM (Physical Security Information Management) is a software category that aggregates feeds from multiple security systems — video, access control, alarms, sensors — into a single viewing interface. NICE Qognify is a recognized PSIM vendor. Traditional PSIM is strong at aggregation and alert integration, but its architecture typically does not include native CAD or traffic management, and integrations can be complex and expensive. KabatOne goes beyond PSIM: it does not just aggregate and display — it also dispatches, coordinates field response, and manages traffic natively in one platform.',
    },
    {
      question: 'Can KabatOne replace NICE Qognify in a command center environment?',
      answer: 'For command centers that need a unified operational platform — real-time video, CAD dispatch, operational GIS, and traffic management — KabatOne covers and extends the core Qognify use case. KabatOne includes video recording and management, AI analytics, and connectivity to ONVIF/RTSP cameras from any manufacturer. For organizations with very specific forensic evidence management or regulatory compliance recording requirements in enterprise environments (banking, large airports), Qognify may remain relevant in that specific layer.',
    },
    {
      question: 'Does KabatOne support the same camera scale as NICE Qognify?',
      answer: 'KabatOne is designed for city and municipal environments — from tens to thousands of cameras per deployment. It is active across 40+ cities protecting over 73 million citizens. NICE Qognify is also positioned for enterprise scale. The key difference is not camera scale but functional scope: KabatOne unifies video with CAD, GIS, and traffic, while Qognify focuses on video and evidence, requiring additional systems to complete the operational workflow.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Categoría principal',
      nice: 'PSIM y gestión de evidencia de video — captura, almacenamiento y cumplimiento',
      kabatone: 'Plataforma de operaciones unificada — video, CAD, GIS y tráfico en tiempo real',
    },
    {
      category: 'Videovigilancia / IA',
      nice: 'VMS con grabación y gestión de evidencia forense, analítica limitada',
      kabatone: 'K-Video — cámaras ONVIF/RTSP, IA nativa con LPR, detección de eventos y análisis de movimiento',
    },
    {
      category: 'Despacho / CAD',
      nice: 'No incluido — requiere integración con CAD de terceros',
      kabatone: 'K-Dispatch — CAD completo con intake, recomendación de unidades y logging',
    },
    {
      category: 'Gestión de tráfico',
      nice: 'No incluido',
      kabatone: 'K-Traffic — gestión inteligente de semáforos e incidentes de tráfico',
    },
    {
      category: 'GIS / Conciencia situacional',
      nice: 'Visualización básica de mapa — sin GIS operacional nativo',
      kabatone: 'K-Safety — GIS operacional completo con incidentes, unidades y feeds de video',
    },
    {
      category: 'Integración de sistemas',
      nice: 'PSIM con conectores a múltiples sistemas de terceros — integraciones complejas y costosas',
      kabatone: 'Módulos nativos compartiendo datos en tiempo real — sin proyectos de integración',
    },
    {
      category: 'Mercado objetivo',
      nice: 'Grandes empresas y gobiernos en mercados desarrollados — foco en cumplimiento y evidencia',
      kabatone: 'Ciudades, municipios y centros C5/C2 — optimizado para LATAM y seguridad pública',
    },
    {
      category: 'Hardware propietario',
      nice: 'Enfoque enterprise con licencias y hardware de grabación específico',
      kabatone: 'Sin hardware propietario — soporta ONVIF, RTSP y todos los protocolos IP estándar',
    },
  ] : [
    {
      category: 'Primary category',
      nice: 'PSIM and video evidence management — capture, storage, and compliance',
      kabatone: 'Unified operations platform — video, CAD, GIS, and traffic in real time',
    },
    {
      category: 'Video surveillance / AI',
      nice: 'VMS with forensic recording and evidence management, limited native AI analytics',
      kabatone: 'K-Video — ONVIF/RTSP cameras, native AI with LPR, event detection, and motion analysis',
    },
    {
      category: 'Dispatch / CAD',
      nice: 'Not included — requires integration with third-party CAD',
      kabatone: 'K-Dispatch — full CAD with intake, unit recommendation, and logging',
    },
    {
      category: 'Traffic management',
      nice: 'Not included',
      kabatone: 'K-Traffic — intelligent signal and traffic incident management',
    },
    {
      category: 'GIS / Situational awareness',
      nice: 'Basic map visualization — no native operational GIS',
      kabatone: 'K-Safety — full operational GIS with incidents, units, and video feeds',
    },
    {
      category: 'System integration',
      nice: 'PSIM with connectors to multiple third-party systems — complex and expensive integrations',
      kabatone: 'Native modules sharing real-time data — no cross-system integration projects',
    },
    {
      category: 'Target market',
      nice: 'Large enterprises and governments in developed markets — focus on compliance and evidence',
      kabatone: 'Cities, municipalities, and C5/C2 command centers — optimized for LATAM and public safety',
    },
    {
      category: 'Proprietary hardware',
      nice: 'Enterprise focus with specific recording hardware and licensing',
      kabatone: 'No proprietary hardware — supports ONVIF, RTSP, and all standard IP protocols',
    },
  ]

  const articleSchemaData = articleSchema(
    es ? 'KabatOne vs NICE Systems (Qognify) — Comparación de Plataformas de Seguridad Pública' : 'KabatOne vs NICE Systems (Qognify) — Public Safety Platform Comparison',
    es
      ? 'Comparación detallada entre KabatOne y NICE Systems/Qognify: despacho CAD, GIS operacional, gestión de video y tráfico para municipios y centros de mando en LATAM.'
      : 'Detailed comparison between KabatOne and NICE Systems/Qognify: CAD dispatch, operational GIS, video management, and traffic for municipalities and command centers.',
    es ? 'https://kabatone.com/es/vs/nice-systems/' : 'https://kabatone.com/vs/nice-systems/',
    '2026-04-07',
  )

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaData) }}
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
          <span style={{ color: ACCENT }}>KabatOne vs NICE Systems</span>
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
              ? 'KabatOne vs NICE Systems — Gestión de Evidencia vs Operaciones Unificadas'
              : 'KabatOne vs NICE Systems — Evidence Management vs Unified Operations'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'NICE Systems adquirió Qognify para reforzar su cartera de seguridad pública con gestión de evidencia de video, PSIM y grabación de cumplimiento para gobiernos y grandes empresas. KabatOne parte desde un enfoque diferente: una plataforma operacional nativa donde video con analítica IA, despacho CAD completo, GIS operacional y gestión de tráfico funcionan juntos sin integraciones complejas ni hardware propietario.'
              : 'NICE Systems acquired Qognify to strengthen its public safety portfolio with video evidence management, PSIM, and compliance recording for governments and large enterprises. KabatOne starts from a different position: a native operational platform where AI-powered video, full CAD dispatch, operational GIS, and traffic management work together without complex integrations or proprietary hardware.'}
          </p>
        </section>

        {/* ── WHAT IS NICE SYSTEMS? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es NICE Systems / Qognify?' : 'What Is NICE Systems / Qognify?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'NICE Ltd. (anteriormente NICE Systems) es una empresa israelí de software enterprise con operaciones globales. Su portafolio abarca gestión de experiencia del cliente (CX), workforce management y — a través de su división de seguridad pública — soluciones de gestión de evidencia digital, PSIM y grabación de cumplimiento. En 2018, NICE adquirió Qognify, un proveedor especializado en PSIM y VMS para seguridad física, utilizado por gobiernos, aeropuertos, transporte y grandes instalaciones industriales.'
                : 'NICE Ltd. (formerly NICE Systems) is an Israeli enterprise software company with global operations. Its portfolio spans customer experience (CX) management, workforce management, and — through its public safety division — digital evidence management, PSIM, and compliance recording solutions. In 2018, NICE acquired Qognify, a specialist in PSIM and VMS for physical security, used by governments, airports, transportation, and large industrial facilities.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'La plataforma Qognify de NICE está posicionada principalmente en gestión de video a escala enterprise: grabación, almacenamiento, recuperación y análisis de evidencia de video para investigaciones forenses y cumplimiento regulatorio. Su capa PSIM permite que los operadores vean alertas de múltiples sistemas de seguridad — video, control de acceso, sensores — en una sola interfaz, priorizando eventos y guiando procedimientos de respuesta.'
                : 'The NICE Qognify platform is positioned primarily in enterprise-scale video management: recording, storage, retrieval, and analysis of video evidence for forensic investigations and regulatory compliance. Its PSIM layer allows operators to view alerts from multiple security systems — video, access control, sensors — in a single interface, prioritizing events and guiding response procedures.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Lo que NICE Qognify no incluye es despacho CAD nativo, gestión operacional de tráfico ni GIS operacional en tiempo real para coordinación de respuesta de campo. Es una plataforma enterprise orientada a la captura y gestión de evidencia — fuerte en lo que ocurre después de un incidente, menos diseñada para coordinar la respuesta en tiempo real. Para centros de mando municipales que necesitan operar, despachar y coordinar en un solo flujo, NICE Qognify requiere sistemas adicionales de terceros para completar la operación.'
                : 'What NICE Qognify does not include is native CAD dispatch, operational traffic management, or real-time operational GIS for field response coordination. It is an enterprise platform oriented toward evidence capture and management — strong in what happens after an incident, less designed for coordinating real-time response. For municipal command centers that need to operate, dispatch, and coordinate in one workflow, NICE Qognify requires additional third-party systems to complete the operation.'}
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
                ? 'A diferencia de NICE Qognify, que actúa como una capa PSIM sobre sistemas existentes, KabatOne es la plataforma operacional central del centro de mando. Una alerta de reconocimiento de matrícula en K-Video puede generar automáticamente un evento en K-Dispatch. El despachador ve el video de la cámara más cercana directamente en el contexto del incidente. K-Traffic puede ajustar semáforos en la ruta de la unidad respondedora sin salir del flujo de despacho.'
                : 'Unlike NICE Qognify, which acts as a PSIM layer on top of existing systems, KabatOne is the central operational platform of the command center. A license plate recognition alert in K-Video can automatically generate an event in K-Dispatch. The dispatcher sees the nearest camera video directly in the incident context. K-Traffic can adjust signals on the responding unit route without leaving the dispatch workflow.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos, principalmente en México y Latinoamérica. Sin hardware propietario y con soporte nativo para ONVIF, RTSP y todos los protocolos IP estándar, KabatOne integra cámaras de cualquier fabricante — Hikvision, Dahua, Axis, Bosch, Hanwha y muchos otros — y funciona con la infraestructura existente del cliente sin reemplazarla.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens, primarily in Mexico and Latin America. With no proprietary hardware and native support for ONVIF, RTSP, and all standard IP protocols, KabatOne integrates cameras from any manufacturer — Hikvision, Dahua, Axis, Bosch, Hanwha, and many others — and works with the customer\'s existing infrastructure without replacing it.'}
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
              {es ? 'KabatOne vs NICE Systems: Diferencias Clave' : 'KabatOne vs NICE Systems: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara KabatOne y NICE Systems/Qognify en ocho dimensiones operativas críticas para organizaciones de seguridad pública y centros de mando.'
                : 'The following table compares KabatOne and NICE Systems/Qognify across eight operational dimensions critical for public safety organizations and command centers.'}
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
                  NICE / Qognify
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
                    {row.nice}
                  </div>
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--dim)', lineHeight: 1.55, borderLeft: '1px solid var(--border)' }}>
                    {row.kabatone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PSIM vs UNIFIED PLATFORM ── */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'PSIM vs Plataforma Operacional Unificada' : 'PSIM vs Unified Operational Platform'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El PSIM tradicional — la categoría donde NICE Qognify opera — nació para resolver un problema real: los centros de seguridad tenían demasiados sistemas separados y necesitaban una capa de agregación que unificara las alertas en una sola pantalla. El enfoque funciona como integrador de visualización: conecta video, control de acceso, alarmas y sensores, y presenta todo en una interfaz con procedimientos de respuesta.'
                : 'Traditional PSIM — the category where NICE Qognify operates — was created to solve a real problem: security centers had too many separate systems and needed an aggregation layer to unify alerts in one screen. The approach works as a visualization integrator: it connects video, access control, alarms, and sensors, and presents everything in one interface with response procedures.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El problema estructural del PSIM es la dependencia de integraciones. Cada sistema que se conecta requiere un conector, un proyecto de integración y mantenimiento continuo. Las organizaciones terminan pagando por licencias de múltiples sistemas más el PSIM como capa encima. Cuando un sistema subyacente cambia, la integración puede romperse. La complejidad crece con cada nuevo sistema añadido.'
                : 'The structural problem with PSIM is integration dependency. Every connected system requires a connector, an integration project, and ongoing maintenance. Organizations end up paying for multiple system licenses plus the PSIM layer on top. When an underlying system changes, the integration can break. Complexity grows with every new system added.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne resuelve esto desde la arquitectura: video, despacho CAD, GIS y tráfico son módulos nativos de la misma plataforma. No hay integraciones que mantener entre módulos — comparten el mismo modelo de datos en tiempo real. Para municipios y centros C5 en LATAM, esto significa un tiempo de implementación menor, menores costos de propiedad a largo plazo y una curva de adopción más simple para los operadores.'
                : 'KabatOne solves this at the architecture level: video, CAD dispatch, GIS, and traffic are native modules of the same platform. There are no cross-module integrations to maintain — they share the same real-time data model. For municipalities and C5 centers in LATAM, this means shorter implementation time, lower long-term ownership costs, and a simpler adoption curve for operators.'}
            </p>
          </div>
        </section>

        {/* ── WHY KABATONE WINS SECTION ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '16px',
            }}>
              {es ? 'Ventajas Clave' : 'Key Advantages'}
            </p>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '40px',
            }}>
              {es ? 'Por Qué KabatOne Gana en Entornos C5 y Municipales' : 'Why KabatOne Wins in C5 and Municipal Environments'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {[
                {
                  title: es ? 'CAD Nativo — Sin Integración' : 'Native CAD — No Integration Required',
                  body: es
                    ? 'NICE Qognify no tiene CAD. KabatOne K-Dispatch es CAD nativo integrado con video, GIS y tráfico en tiempo real — sin proyectos de integración costosos ni dependencias de terceros.'
                    : 'NICE Qognify has no CAD. KabatOne K-Dispatch is native CAD integrated with video, GIS, and traffic in real time — no costly integration projects or third-party dependencies.',
                },
                {
                  title: es ? 'Propósito Municipal, No Enterprise Genérico' : 'Municipal Purpose-Built, Not Generic Enterprise',
                  body: es
                    ? 'NICE está diseñado para enterprise global con requerimientos de cumplimiento y evidencia forense. KabatOne está construido específicamente para operaciones municipales y centros C5 — la prioridad es la respuesta operacional, no la evidencia post-incidente.'
                    : 'NICE is designed for global enterprise with compliance and forensic evidence requirements. KabatOne is built specifically for municipal operations and C5 centers — the priority is operational response, not post-incident evidence.',
                },
                {
                  title: es ? 'Sin Hardware Propietario' : 'No Proprietary Hardware',
                  body: es
                    ? 'KabatOne soporta ONVIF, RTSP y todos los protocolos IP estándar — integra cámaras de cualquier fabricante sin hardware adicional. Funciona con la infraestructura existente del cliente.'
                    : 'KabatOne supports ONVIF, RTSP, and all standard IP protocols — integrates cameras from any manufacturer without additional hardware. It works with the customer\'s existing infrastructure.',
                },
                {
                  title: es ? 'Experiencia Real en LATAM' : 'Real LATAM Deployment Experience',
                  body: es
                    ? 'KabatOne está activo en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos en México y LATAM. NICE Qognify tiene presencia principalmente en mercados desarrollados con ciclos de venta y soporte enterprise que no están optimizados para el contexto municipal latinoamericano.'
                    : 'KabatOne is active across 40+ cities protecting over 73 million citizens in Mexico and LATAM. NICE Qognify operates primarily in developed markets with enterprise sales and support cycles not optimized for the Latin American municipal context.',
                },
              ].map((card, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderRadius: '12px', padding: '28px',
                }}>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '20px', color: ACCENT, marginBottom: '12px', lineHeight: 1.2,
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
                  {es ? 'Recursos:' : 'Resources:'}
                </span>
                {[
                  { href: '/resources/psim-vs-unified-platform', label: es ? 'PSIM vs Plataforma Unificada' : 'PSIM vs Unified Platform' },
                  { href: '/resources/what-is-video-management-software', label: es ? 'Qué es un VMS' : 'What Is Video Management Software' },
                  { href: '/resources/what-is-a-command-center', label: es ? 'Qué es un Centro de Mando' : 'What Is a Command Center' },
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
              {es ? 'KabatOne vs NICE Systems: Preguntas y Respuestas' : 'KabatOne vs NICE Systems: Questions & Answers'}
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
              {[
                { href: '/vs/verint', label: es ? 'KabatOne vs Verint' : 'KabatOne vs Verint' },
                { href: '/vs/avigilon', label: es ? 'KabatOne vs Avigilon' : 'KabatOne vs Avigilon' },
                { href: '/vs/genetec', label: es ? 'KabatOne vs Genetec' : 'KabatOne vs Genetec' },
                { href: '/vs/motorola', label: es ? 'KabatOne vs Motorola Solutions' : 'KabatOne vs Motorola Solutions' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '16px 20px', borderRadius: '8px',
                  border: '1px solid var(--border)', textDecoration: 'none',
                  color: 'var(--dim)', fontSize: '15px',
                }}>
                  <span>{link.label}</span>
                  <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
                </Link>
              ))}
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
