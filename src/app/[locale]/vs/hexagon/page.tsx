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
  return generatePageMetadata('vsHexagon', locale)
}

export default async function VsHexagonPage({
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
    { name: 'KabatOne vs Hexagon Safety', url: es ? 'https://kabatone.com/es/vs/hexagon/' : 'https://kabatone.com/vs/hexagon/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre KabatOne y Hexagon Safety?',
      answer: 'Hexagon Safety & Infrastructure, a través de su producto HxGN OnCall CAD, ofrece uno de los sistemas CAD más maduros del mercado, respaldado por la experiencia geoespacial del grupo Hexagon AB. Su fortaleza está en despacho y GIS. KabatOne integra esas mismas capacidades — más gestión de video (K-Video) y gestión de tráfico (K-Traffic) — en una plataforma unificada nativa. La diferencia principal es el alcance: Hexagon hace CAD y GIS de forma excelente; KabatOne hace CAD, GIS, video y tráfico en un solo flujo sin proyectos de integración.',
    },
    {
      question: '¿HxGN OnCall incluye gestión de video?',
      answer: 'No. HxGN OnCall CAD de Hexagon no incluye un módulo nativo de gestión de video. Las organizaciones que necesitan video de vigilancia junto con Hexagon CAD deben integrar un VMS de terceros por separado — lo que añade costos de licencia, complejidad de integración y un equipo de soporte adicional. KabatOne incluye K-Video como módulo nativo con analítica IA, integrando video directamente con el flujo de despacho CAD.',
    },
    {
      question: '¿Cómo se compara el GIS de Hexagon con K-Safety de KabatOne?',
      answer: 'Hexagon AB es una de las empresas de geoespacial más grandes del mundo, y HxGN OnCall refleja esa fortaleza en CAD con mapeo avanzado, AVL y routing de unidades. K-Safety de KabatOne ofrece capacidades comparables de conciencia situacional GIS — mapa operativo en tiempo real, seguimiento de incidentes y unidades, integración de feeds de video — con la ventaja de estar nativamente integrado con K-Dispatch, K-Video y K-Traffic sin requerir un sistema GIS separado.',
    },
    {
      question: '¿Puede KabatOne trabajar junto a un despliegue de Hexagon CAD existente?',
      answer: 'Sí, en principio KabatOne puede integrarse con sistemas CAD existentes vía APIs. Sin embargo, la propuesta de valor de KabatOne es reemplazar el stack fragmentado (CAD separado + VMS separado + GIS separado) con una plataforma unificada. Para nuevas implementaciones o renovaciones de contrato, KabatOne entrega todas esas capacidades — incluyendo video y tráfico que Hexagon no incluye — en un solo sistema.',
    },
    {
      question: '¿Cuál es mejor para centros de mando — Hexagon o KabatOne?',
      answer: 'Hexagon HxGN OnCall es excelente para agencias que priorizan CAD maduro con capacidades GIS avanzadas y pueden gestionar integraciones separadas para video y tráfico. KabatOne es la opción más fuerte para centros de mando C4/C5 y municipios que necesitan video, CAD, GIS y tráfico en un solo flujo operativo — especialmente en México y Latinoamérica, donde KabatOne tiene más de 40 despliegues activos con esa estructura.',
    },
    {
      question: '¿Qué ofrece KabatOne que Hexagon Safety no ofrece?',
      answer: 'En comparación con Hexagon HxGN OnCall, KabatOne agrega: gestión de video nativa con analítica IA (K-Video) — Hexagon requiere VMS de terceros; gestión de tráfico inteligente (K-Traffic) con control de semáforos, detección de infracciones y coordinación de vehículos de emergencia; video comunitario y ciudadano integrado al centro de mando (K-Connect); y arquitectura cloud-native desde el inicio, frente a la implementación on-premise/híbrida típica de Hexagon.',
    },
  ] : [
    {
      question: 'What is the difference between KabatOne and Hexagon Safety?',
      answer: 'Hexagon Safety & Infrastructure, through its HxGN OnCall CAD product, offers one of the most mature CAD systems in the market, backed by the geospatial expertise of the Hexagon AB group. Its strength is in dispatch and GIS. KabatOne integrates those same capabilities — plus video management (K-Video) and traffic management (K-Traffic) — in one native unified platform. The core difference is scope: Hexagon does CAD and GIS very well; KabatOne does CAD, GIS, video, and traffic in one workflow without integration projects.',
    },
    {
      question: 'Does HxGN OnCall include video management?',
      answer: 'No. Hexagon HxGN OnCall CAD does not include a native video management module. Organizations that need surveillance video alongside Hexagon CAD must integrate a separate third-party VMS — adding licensing costs, integration complexity, and an additional support team. KabatOne includes K-Video as a native module with AI analytics, integrating video directly into the CAD dispatch workflow.',
    },
    {
      question: 'How does Hexagon\'s GIS compare to KabatOne\'s K-Safety?',
      answer: 'Hexagon AB is one of the world\'s largest geospatial companies, and HxGN OnCall reflects that strength with advanced mapping, AVL, and unit routing in CAD. KabatOne\'s K-Safety offers comparable situational awareness GIS capabilities — real-time operational map, incident and unit tracking, video feed integration — with the advantage of being natively integrated with K-Dispatch, K-Video, and K-Traffic without requiring a separate GIS system.',
    },
    {
      question: 'Can KabatOne work alongside an existing Hexagon CAD deployment?',
      answer: 'Yes, KabatOne can integrate with existing CAD systems via APIs in principle. However, KabatOne\'s core value proposition is replacing the fragmented stack (separate CAD + separate VMS + separate GIS) with a unified platform. For new deployments or contract renewals, KabatOne delivers all those capabilities — including video and traffic that Hexagon does not include — in one system.',
    },
    {
      question: 'Which is better for command centers — Hexagon or KabatOne?',
      answer: 'Hexagon HxGN OnCall is excellent for agencies that prioritize mature CAD with advanced GIS capabilities and can manage separate integrations for video and traffic. KabatOne is the stronger choice for C4/C5 command centers and municipalities that need video, CAD, GIS, and traffic in one operational workflow — especially in Mexico and Latin America, where KabatOne has 40+ active deployments with that structure.',
    },
    {
      question: 'What does KabatOne offer that Hexagon Safety does not?',
      answer: 'Compared to Hexagon HxGN OnCall, KabatOne adds: native video management with AI analytics (K-Video) — Hexagon requires a third-party VMS; intelligent traffic management (K-Traffic) with signal control, violation detection, and emergency vehicle coordination; community and citizen video integration into the command center (K-Connect); and cloud-native architecture from day one, versus the typical on-premise or hybrid Hexagon deployment.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Categoría principal',
      hexagon: 'CAD + GIS (líder geoespacial)',
      kabatone: 'Plataforma unificada de seguridad pública (video + CAD + GIS + tráfico + campo)',
    },
    {
      category: 'Videovigilancia',
      hexagon: 'No nativo — requiere integración VMS de terceros',
      kabatone: 'K-Video nativo, con analítica IA incluida',
    },
    {
      category: 'Despacho / CAD',
      hexagon: 'HxGN OnCall CAD (maduro, amplio conjunto de funciones)',
      kabatone: 'K-Dispatch nativo, integrado con video, GIS y tráfico',
    },
    {
      category: 'GIS / Conciencia situacional',
      hexagon: 'Excelente (Hexagon AB es líder mundial en geoespacial)',
      kabatone: 'K-Safety nativo — conciencia situacional completa con video y unidades en tiempo real',
    },
    {
      category: 'Gestión de tráfico',
      hexagon: 'No incluido',
      kabatone: 'K-Traffic — gestión inteligente de semáforos e intersecciones',
    },
    {
      category: 'Operaciones de campo',
      hexagon: 'Estado de unidades y AVL básicos',
      kabatone: 'Flujo de campo completo: asignación, seguimiento, documentación y cierre',
    },
    {
      category: 'Despliegue',
      hexagon: 'On-premise / híbrido (implementaciones enterprise complejas)',
      kabatone: 'Cloud-native desde el primer día',
    },
  ] : [
    {
      category: 'Primary category',
      hexagon: 'CAD + GIS (geospatial leader)',
      kabatone: 'Unified public safety platform (video + CAD + GIS + traffic + field)',
    },
    {
      category: 'Video surveillance',
      hexagon: 'Not native — third-party VMS integration required',
      kabatone: 'K-Video native, AI analytics included',
    },
    {
      category: 'Dispatch / CAD',
      hexagon: 'HxGN OnCall CAD (mature, full feature set)',
      kabatone: 'K-Dispatch native, integrated with video, GIS, and traffic',
    },
    {
      category: 'GIS / Situational awareness',
      hexagon: 'Excellent (Hexagon AB is the world\'s leading geospatial company)',
      kabatone: 'K-Safety native — full situational awareness with video and real-time units',
    },
    {
      category: 'Traffic management',
      hexagon: 'Not included',
      kabatone: 'K-Traffic — intelligent signal and intersection management',
    },
    {
      category: 'Field operations',
      hexagon: 'Basic unit status and AVL',
      kabatone: 'Full field workflow: assignment, tracking, documentation, and closure',
    },
    {
      category: 'Deployment',
      hexagon: 'On-premise / hybrid (complex enterprise deployments)',
      kabatone: 'Cloud-native from day one',
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
          <span style={{ color: ACCENT }}>KabatOne vs Hexagon Safety</span>
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
              ? 'KabatOne vs Hexagon Safety — CAD y GIS, Más el Resto'
              : 'KabatOne vs Hexagon Safety — CAD and GIS, Plus the Rest'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'Hexagon HxGN OnCall es uno de los sistemas CAD más maduros del mercado, respaldado por el liderazgo geoespacial de Hexagon AB. KabatOne incluye capacidades de CAD y GIS equivalentes y las combina con gestión de video nativa (K-Video) y gestión de tráfico inteligente (K-Traffic) — conectando el flujo completo de respuesta en un solo sistema sin requerir integraciones adicionales.'
              : 'Hexagon HxGN OnCall is one of the most mature CAD systems in the market, backed by Hexagon AB\'s geospatial leadership. KabatOne includes equivalent CAD and GIS capabilities and combines them with native video management (K-Video) and intelligent traffic management (K-Traffic) — connecting the full response workflow in one system without additional integrations.'}
          </p>
        </section>

        {/* ── WHAT IS HEXAGON SAFETY? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es Hexagon Safety & Infrastructure?' : 'What Is Hexagon Safety & Infrastructure?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Hexagon Safety & Infrastructure es una división de Hexagon AB, uno de los grupos de tecnología geoespacial y de sensores más grandes del mundo. Su producto principal para seguridad pública es HxGN OnCall CAD — un sistema de despacho ampliamente desplegado en agencias de policía, bomberos y EMS en Estados Unidos, Reino Unido, Australia y otros países. HxGN OnCall integra despacho de llamadas, gestión de recursos, routing de unidades y mapeo GIS en una plataforma para centros de despacho 911.'
                : 'Hexagon Safety & Infrastructure is a division of Hexagon AB, one of the world\'s largest geospatial and sensor technology groups. Its primary public safety product is HxGN OnCall CAD — a widely deployed dispatch system for police, fire, and EMS agencies in the United States, United Kingdom, Australia, and other countries. HxGN OnCall integrates call dispatch, resource management, unit routing, and GIS mapping in one platform for 911 dispatch centers.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'La fortaleza de Hexagon está en la combinación de un CAD maduro con capacidades geoespaciales de clase mundial — el grupo Hexagon AB produce algunas de las tecnologías de mapeo y geoespacial más avanzadas del mercado, incluyendo MapInfo y herramientas de análisis geoespacial. Esto se traduce en un CAD con capacidades GIS profundas: análisis de zonas de cobertura, routing óptimo de unidades, análisis de patrones de incidentes.'
                : 'Hexagon\'s strength lies in combining mature CAD with world-class geospatial capabilities — the Hexagon AB group produces some of the most advanced mapping and geospatial technologies on the market, including MapInfo and geospatial analysis tools. This translates into a CAD with deep GIS capabilities: coverage zone analysis, optimal unit routing, incident pattern analysis.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Hexagon HxGN OnCall no incluye gestión de video nativa, gestión de tráfico inteligente ni capacidades de video comunitario. Las organizaciones que necesitan estas funcionalidades deben integrar sistemas separados, lo que añade complejidad y costo a la implementación.'
                : 'Hexagon HxGN OnCall does not include native video management, intelligent traffic management, or community video capabilities. Organizations that need these functions must integrate separate systems, adding complexity and cost to the deployment.'}
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
                ? 'KabatOne es una plataforma unificada de seguridad pública construida para ciudades, municipios, centros de mando y agencias de respuesta a emergencias. Integra gestión de video con analítica IA (K-Video), despacho CAD (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario compartido (K-Connect) en una plataforma nativa sobre la plataforma K1.'
                : 'KabatOne is a unified public safety platform built for cities, municipalities, command centers, and emergency response agencies. It integrates AI-powered video management (K-Video), CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video sharing (K-Connect) in one native platform on the K1 platform.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos. K-Safety ofrece capacidades comparables a las de HxGN OnCall en cuanto a GIS y conciencia situacional — mapa operativo en tiempo real, tracking de unidades, análisis de incidentes — con la ventaja de que están nativamente integradas con video, despacho y tráfico en un solo flujo de trabajo.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens. K-Safety offers capabilities comparable to HxGN OnCall in terms of GIS and situational awareness — real-time operational map, unit tracking, incident analysis — with the advantage that they are natively integrated with video, dispatch, and traffic in one workflow.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'La diferencia clave es que KabatOne no requiere un proyecto de integración entre sus módulos. Cuando un incidente es creado en K-Dispatch, se refleja automáticamente en K-Safety con la unidad asignada, el feed de video relevante de K-Video y el estado del tráfico circundante de K-Traffic — todo sin configuración adicional.'
                : 'The key difference is that KabatOne requires no integration project between its modules. When an incident is created in K-Dispatch, it automatically appears in K-Safety with the assigned unit, the relevant K-Video feed, and surrounding traffic status from K-Traffic — all without additional configuration.'}
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
              {es ? 'KabatOne vs Hexagon Safety: Diferencias Clave' : 'KabatOne vs Hexagon Safety: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara KabatOne y Hexagon HxGN OnCall en siete dimensiones operativas críticas para organizaciones de seguridad pública.'
                : 'The following table compares KabatOne and Hexagon HxGN OnCall across seven operational dimensions critical for public safety organizations.'}
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
                  Hexagon Safety
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
                    {row.hexagon}
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
              {es ? 'CAD y GIS Excelentes — Más el Flujo Completo de Respuesta' : 'Excellent CAD and GIS — Plus the Full Response Workflow'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Hexagon HxGN OnCall tiene una base sólida: CAD maduro con GIS avanzado. Para agencias cuya necesidad principal es despacho y mapeo, es una opción fuerte. El desafío aparece cuando el centro de mando necesita también gestión de video en tiempo real, control de tráfico durante emergencias y coordinar video ciudadano con incidentes activos — capacidades que Hexagon no incluye y que requieren integrar sistemas adicionales.'
                : 'Hexagon HxGN OnCall has a strong foundation: mature CAD with advanced GIS. For agencies whose primary need is dispatch and mapping, it is a strong choice. The challenge appears when the command center also needs real-time video management, traffic control during emergencies, and coordinating citizen video with active incidents — capabilities that Hexagon does not include and that require integrating additional systems.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne fue diseñado para ese escenario. K-Safety ofrece la misma profundidad de GIS operacional que HxGN OnCall — mapa en tiempo real, AVL, routing de unidades, análisis de zonas — pero conectado nativamente con K-Video para validar incidentes con cámaras y con K-Dispatch para crear el evento CAD sin cambiar de aplicación. Para centros C4/C5 que gestionan múltiples disciplinas simultáneamente, este flujo unificado reduce el tiempo de respuesta y la carga cognitiva del operador.'
                : 'KabatOne was designed for that scenario. K-Safety provides the same depth of operational GIS as HxGN OnCall — real-time map, AVL, unit routing, zone analysis — but natively connected to K-Video to validate incidents with cameras and to K-Dispatch to create the CAD event without switching applications. For C4/C5 centers managing multiple disciplines simultaneously, this unified workflow reduces response time and operator cognitive load.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne también incluye K-Traffic — gestión inteligente de semáforos y tráfico urbano integrada directamente con el flujo de respuesta a emergencias. Cuando una unidad es despachada en K-Dispatch, K-Traffic puede coordinar los semáforos en la ruta. Esta capacidad no existe en el ecosistema de Hexagon y requeriría un cuarto sistema en un despliegue tradicional.'
                : 'KabatOne also includes K-Traffic — intelligent signal and urban traffic management integrated directly with the emergency response workflow. When a unit is dispatched in K-Dispatch, K-Traffic can coordinate signals on the route. This capability does not exist in the Hexagon ecosystem and would require a fourth system in a traditional deployment.'}
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
              {es ? 'KabatOne Funciona con la Infraestructura que Ya Tienes' : 'KabatOne Works with the Infrastructure You Already Have'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne está diseñado para integrarse con la infraestructura existente en lugar de forzar un reemplazo completo. K-Video soporta ONVIF, RTSP y protocolos IP estándar — lo que permite agregar cámaras de cualquier fabricante al centro de mando sin comprar hardware nuevo. K-Dispatch se integra con redes de radio estándar de la industria.'
                : 'KabatOne is designed to integrate with existing infrastructure rather than force a full replacement. K-Video supports ONVIF, RTSP, and standard IP protocols — allowing cameras from any manufacturer to be added to the command center without purchasing new hardware. K-Dispatch integrates with standard industry radio networks.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Para organizaciones que evalúan reemplazar Hexagon HxGN OnCall o ampliar sus capacidades actuales, KabatOne puede asumir el rol de plataforma unificada — preservando las inversiones en cámaras y hardware de comunicaciones existentes mientras se añaden video, tráfico y coordinación de campo nativa que Hexagon no provee.'
                : 'For organizations evaluating replacing Hexagon HxGN OnCall or expanding their current capabilities, KabatOne can take on the role of unified platform — preserving investments in existing cameras and communications hardware while adding native video, traffic, and field coordination that Hexagon does not provide.'}
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
              {es ? 'KabatOne vs Hexagon: Preguntas y Respuestas' : 'KabatOne vs Hexagon: Questions & Answers'}
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
              <Link href="/resources/psim-vs-unified-platform" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'PSIM vs Plataforma Unificada' : 'PSIM vs Unified Platform'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/k-safety" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'K-Safety — GIS y Conciencia Situacional' : 'K-Safety — GIS & Situational Awareness'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '12px', marginTop: '12px' }}>
              <span style={{ fontFamily: 'DM Mono, monospace', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {es ? 'Integraciones:' : 'Integrations:'}
              </span>
              {[
                { href: '/integrations/lpr', label: 'LPR' },
                { href: '/integrations/sensor-fusion', label: es ? 'Fusion de Sensores' : 'Sensor Fusion' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ color: '#06b6d4', textDecoration: 'none', borderBottom: '1px solid rgba(6,182,212,0.25)' }}>
                  {link.label}
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
            ? 'Descubre cómo KabatOne conecta CAD, GIS, video y tráfico en un solo flujo de respuesta. Solicita una demo personalizada.'
            : 'See how KabatOne connects CAD, GIS, video, and traffic in one response workflow. Request a personalized demo.'}
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
