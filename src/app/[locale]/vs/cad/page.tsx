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
  return generatePageMetadata('vsCad', locale)
}

export default async function VsCadPage({
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
    { name: es ? 'KabatOne vs CAD Tradicional' : 'KabatOne vs Traditional CAD', url: es ? 'https://kabatone.com/es/vs/cad/' : 'https://kabatone.com/vs/cad/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre un sistema CAD y una plataforma de seguridad pública como KabatOne?',
      answer: 'Un sistema CAD (Computer-Aided Dispatch) fue diseñado para una función específica: ayudar a los despachadores a asignar unidades a incidentes y registrar el historial de la llamada. Sistemas como Motorola PremierOne, Hexagon HxGN OnCall, Tyler Technologies New World CAD y CentralSquare son excelentes en esa función. KabatOne es una plataforma unificada de seguridad pública que incluye CAD (K-Dispatch) y lo conecta nativamente con video (K-Video), GIS (K-Safety), tráfico (K-Traffic) y video comunitario (K-Connect) en un solo flujo de respuesta. La diferencia es el alcance del ciclo de respuesta que cada sistema cubre.',
    },
    {
      question: '¿Qué sistemas CAD reemplaza o complementa KabatOne?',
      answer: 'KabatOne puede reemplazar un stack CAD fragmentado — por ejemplo, un sistema CAD legacy como Motorola PremierOne, Hexagon HxGN OnCall, Tyler New World CAD o CentralSquare combinado con un VMS separado y un sistema de tráfico separado — con una plataforma unificada que cubre todas esas funciones nativamente. Para organizaciones con contratos CAD existentes, KabatOne puede integrarse como capa de coordinación adicional o reemplazar el stack completo en una renovación de contrato.',
    },
    {
      question: '¿KabatOne incluye software CAD de despacho?',
      answer: 'Sí. K-Dispatch es el módulo CAD de KabatOne — incluye intake de llamadas de emergencia, recomendación de unidades basada en disponibilidad y proximidad, asignación y seguimiento del estado de la unidad, logging de todas las acciones del despachador, y cierre del ciclo con documentación de campo. K-Dispatch está nativamente integrado con K-Video (video del incidente), K-Safety (GIS operacional) y K-Traffic (estado del tráfico en la ruta).',
    },
    {
      question: '¿Qué ofrece una plataforma unificada de seguridad pública más allá de un CAD tradicional?',
      answer: 'Un CAD tradicional registra incidentes y despacha unidades. Una plataforma unificada como KabatOne agrega: video de cámaras fijas de ciudad para validar incidentes antes de despachar y documentar después; GIS operacional con conciencia situacional en tiempo real de todos los incidentes y unidades activas; gestión de tráfico inteligente para coordinar semáforos durante emergencias; video comunitario y ciudadano integrado al centro de mando; y un flujo de campo para documentar el cierre del incidente. Todo en una sola interfaz, sin cambiar de aplicación.',
    },
    {
      question: '¿Puede KabatOne integrarse con un sistema CAD existente?',
      answer: 'Sí, KabatOne puede integrarse con sistemas CAD existentes vía APIs en muchos casos. Sin embargo, la propuesta de valor principal de KabatOne es eliminar la necesidad de gestionar múltiples sistemas fragmentados — CAD separado + VMS separado + sistema de tráfico separado. Para organizaciones en proceso de renovar contratos o expandir capacidades, KabatOne como plataforma unificada reemplaza ese stack con un sistema único que reduce la complejidad operativa y los costos de integración.',
    },
    {
      question: '¿Es KabatOne la elección correcta si ya tenemos un sistema CAD?',
      answer: 'Depende de lo que necesiten además del CAD. Si la organización opera solo con CAD y no necesita video, GIS avanzado ni gestión de tráfico, el CAD existente puede ser suficiente. Si el centro de mando necesita — o está evaluando agregar — video de cámaras de ciudad, conciencia situacional GIS integrada con el CAD y coordinación de tráfico durante emergencias, KabatOne unifica todas esas funciones en un solo sistema. Para centros C4/C5 en México y Latinoamérica, donde esa combinación es el modelo operativo estándar, KabatOne está especialmente diseñado.',
    },
  ] : [
    {
      question: 'What is the difference between a CAD system and a public safety platform like KabatOne?',
      answer: 'A CAD (Computer-Aided Dispatch) system was designed for a specific function: helping dispatchers assign units to incidents and log call history. Systems like Motorola PremierOne, Hexagon HxGN OnCall, Tyler Technologies New World CAD, and CentralSquare excel at that function. KabatOne is a unified public safety platform that includes CAD (K-Dispatch) and natively connects it to video (K-Video), GIS (K-Safety), traffic (K-Traffic), and community video (K-Connect) in one response workflow. The difference is the scope of the response cycle each system covers.',
    },
    {
      question: 'Which CAD systems does KabatOne replace or complement?',
      answer: 'KabatOne can replace a fragmented CAD stack — for example, a legacy CAD system like Motorola PremierOne, Hexagon HxGN OnCall, Tyler New World CAD, or CentralSquare combined with a separate VMS and a separate traffic system — with a unified platform that covers all those functions natively. For organizations with existing CAD contracts, KabatOne can integrate as an additional coordination layer or replace the full stack at contract renewal.',
    },
    {
      question: 'Does KabatOne include CAD dispatch software?',
      answer: 'Yes. K-Dispatch is KabatOne\'s CAD module — it includes emergency call intake, unit recommendation based on availability and proximity, assignment and unit status tracking, logging of all dispatcher actions, and cycle closure with field documentation. K-Dispatch is natively integrated with K-Video (incident video), K-Safety (operational GIS), and K-Traffic (traffic status on the route).',
    },
    {
      question: 'What does a unified public safety platform offer beyond traditional CAD?',
      answer: 'A traditional CAD logs incidents and dispatches units. A unified platform like KabatOne adds: city fixed-camera video to validate incidents before dispatching and document afterward; operational GIS with real-time situational awareness of all active incidents and units; intelligent traffic management to coordinate signals during emergencies; community and citizen video integrated into the command center; and a field workflow for incident closure documentation. All in one interface, without switching applications.',
    },
    {
      question: 'Can KabatOne integrate with an existing CAD system?',
      answer: 'Yes, KabatOne can integrate with existing CAD systems via APIs in many cases. However, KabatOne\'s core value proposition is eliminating the need to manage multiple fragmented systems — separate CAD + separate VMS + separate traffic system. For organizations in the process of renewing contracts or expanding capabilities, KabatOne as a unified platform replaces that stack with a single system that reduces operational complexity and integration costs.',
    },
    {
      question: 'Is KabatOne the right choice if we already have a CAD system?',
      answer: 'It depends on what you need beyond CAD. If the organization operates only on CAD and does not need video, advanced GIS, or traffic management, the existing CAD may be sufficient. If the command center needs — or is evaluating adding — city camera video, GIS situational awareness integrated with CAD, and traffic coordination during emergencies, KabatOne unifies all those functions in one system. For C4/C5 command centers in Mexico and Latin America, where that combination is the standard operational model, KabatOne is purpose-built.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Función principal',
      cad: 'Despacho de unidades y registro de llamadas',
      kabatone: 'Ciclo completo: intake → despacho → campo → video → tráfico → cierre',
    },
    {
      category: 'Videovigilancia',
      cad: 'No nativo — requiere VMS de terceros separado',
      kabatone: 'K-Video nativo, integrado con el flujo de despacho',
    },
    {
      category: 'GIS / Conciencia situacional',
      cad: 'Mapa básico con ubicación de unidades',
      kabatone: 'K-Safety — GIS operacional completo con incidentes, unidades y feeds de video',
    },
    {
      category: 'Gestión de tráfico',
      cad: 'No incluido',
      kabatone: 'K-Traffic — coordinado con la respuesta a incidentes',
    },
    {
      category: 'Video comunitario / ciudadano',
      cad: 'No incluido',
      kabatone: 'K-Connect — integración de cámaras de negocios y ciudadanos al centro de mando',
    },
    {
      category: 'Despliegue',
      cad: 'On-premise u on-premise/cloud híbrido (mayoría de sistemas legacy)',
      kabatone: 'Cloud-native desde el primer día',
    },
    {
      category: 'Modelo de integración',
      cad: 'Requiere VMS + GIS + tráfico + operaciones de campo separados',
      kabatone: 'Plataforma nativa — sin proyectos de integración entre módulos',
    },
  ] : [
    {
      category: 'Primary function',
      cad: 'Dispatching units and logging calls',
      kabatone: 'Full cycle: intake → dispatch → field → video → traffic → closure',
    },
    {
      category: 'Video surveillance',
      cad: 'Not native — requires separate third-party VMS',
      kabatone: 'K-Video native, integrated with dispatch workflow',
    },
    {
      category: 'GIS / Situational awareness',
      cad: 'Basic map with unit locations',
      kabatone: 'K-Safety — full operational GIS with incidents, units, and video feeds',
    },
    {
      category: 'Traffic management',
      cad: 'Not included',
      kabatone: 'K-Traffic — coordinated with incident response',
    },
    {
      category: 'Community / citizen video',
      cad: 'Not included',
      kabatone: 'K-Connect — business and citizen camera integration into command center',
    },
    {
      category: 'Deployment',
      cad: 'On-premise or hybrid (most legacy systems)',
      kabatone: 'Cloud-native from day one',
    },
    {
      category: 'Integration model',
      cad: 'Requires separate VMS + GIS + traffic + field operations',
      kabatone: 'Native platform — no cross-module integration projects',
    },
  ]

  const cadVendors = ['Motorola PremierOne', 'Hexagon HxGN OnCall', 'Tyler Technologies New World CAD', 'CentralSquare', 'Mark43']

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
          <span style={{ color: ACCENT }}>{es ? 'KabatOne vs CAD Tradicional' : 'KabatOne vs Traditional CAD'}</span>
        </div>

        {/* ── HERO ── */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 40px 80px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: '20px',
          }}>
            <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', background: ACCENT, marginRight: '8px', verticalAlign: 'middle', animation: 'pulse 2s infinite' }} />
            {es ? 'Comparación de Categoría' : 'Category Comparison'}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '28px',
          }}>
            {es
              ? 'KabatOne vs Sistemas CAD Tradicionales — El CAD Despacha. KabatOne Coordina Todo.'
              : 'KabatOne vs Traditional CAD Systems — CAD Dispatches. KabatOne Coordinates Everything.'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'Los sistemas CAD fueron diseñados para una función crítica: conectar despachadores con unidades. Motorola PremierOne, Hexagon HxGN OnCall, Tyler Technologies New World CAD y CentralSquare hacen esa función bien. El problema es que el ciclo de respuesta moderno va mucho más allá del despacho — incluye video de cámaras de ciudad, conciencia situacional GIS a escala municipal, coordinación de tráfico durante emergencias y documentación de campo. KabatOne integra el CAD con todo eso en un solo sistema nativo.'
              : 'CAD systems were designed for one critical function: connecting dispatchers with units. Motorola PremierOne, Hexagon HxGN OnCall, Tyler Technologies New World CAD, and CentralSquare do that function well. The problem is that the modern response cycle goes far beyond dispatch — it includes city camera video, municipal-scale GIS situational awareness, traffic coordination during emergencies, and field documentation. KabatOne integrates CAD with all of that in one native system.'}
          </p>
        </section>

        {/* ── WHAT IS TRADITIONAL CAD? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es un Sistema CAD Tradicional?' : 'What Is a Traditional CAD System?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Un sistema CAD (Computer-Aided Dispatch) es el software central de los centros de despacho 911 y centros de mando de seguridad pública. Gestiona el intake de llamadas de emergencia, registra los incidentes en una base de datos, recomienda unidades disponibles basándose en disponibilidad y proximidad, y rastrea el estado de cada unidad desde el despacho hasta el cierre. Los sistemas CAD líderes del mercado incluyen Motorola PremierOne, Hexagon HxGN OnCall, Tyler Technologies New World CAD, CentralSquare y Mark43.'
                : 'A CAD (Computer-Aided Dispatch) system is the core software in 911 dispatch centers and public safety command centers. It manages emergency call intake, logs incidents in a database, recommends available units based on availability and proximity, and tracks the status of each unit from dispatch through closure. Market-leading CAD systems include Motorola PremierOne, Hexagon HxGN OnCall, Tyler Technologies New World CAD, CentralSquare, and Mark43.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El CAD cumplió bien su función durante décadas en un entorno donde el despacho de radio y el registro de llamadas eran el núcleo de la operación. El desafío es que las operaciones de seguridad pública modernas — especialmente los centros municipales C4/C5 — han crecido para incluir videovigilancia a escala de ciudad, gestión de tráfico inteligente, integración de cámaras ciudadanas y coordinación multiagencia en tiempo real. El CAD solo no fue diseñado para cubrir ese alcance.'
                : 'CAD fulfilled its function well for decades in an environment where radio dispatch and call logging were the core of the operation. The challenge is that modern public safety operations — especially C4/C5 municipal centers — have grown to include city-scale video surveillance, intelligent traffic management, citizen camera integration, and real-time multi-agency coordination. Standalone CAD was not designed to cover that scope.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'El resultado típico es un stack fragmentado: CAD + VMS separado (Genetec, Milestone o Avigilon) + sistema de tráfico separado + GIS separado + eventualmente un PSIM encima de todo para intentar conectarlos. Cada sistema tiene su propio contrato, su propio equipo de soporte y sus propios datos que no se sincronizan perfectamente con los demás.'
                : 'The typical result is a fragmented stack: CAD + separate VMS (Genetec, Milestone, or Avigilon) + separate traffic system + separate GIS + eventually a PSIM on top of everything trying to connect them. Each system has its own contract, its own support team, and its own data that doesn\'t perfectly sync with the others.'}
            </p>

            {/* CAD vendors list */}
            <div style={{ marginTop: '32px', padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid var(--border)' }}>
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: ACCENT, marginBottom: '12px' }}>
                {es ? 'Sistemas CAD Principales en el Mercado' : 'Major CAD Systems in the Market'}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cadVendors.map((v) => (
                  <span key={v} style={{
                    fontSize: '13px', color: 'var(--dim)',
                    background: 'rgba(255,255,255,0.05)', borderRadius: '6px',
                    padding: '4px 12px', border: '1px solid var(--border)',
                  }}>{v}</span>
                ))}
              </div>
            </div>
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
                ? 'KabatOne es una plataforma unificada de seguridad pública construida para ciudades, municipios, centros de mando y agencias de respuesta. Integra despacho CAD (K-Dispatch), gestión de video con analítica IA (K-Video), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario (K-Connect) en una plataforma nativa sobre la plataforma K1. No es un CAD con módulos añadidos — es una plataforma diseñada desde el inicio para el ciclo completo de respuesta.'
                : 'KabatOne is a unified public safety platform built for cities, municipalities, command centers, and response agencies. It integrates CAD dispatch (K-Dispatch), AI-powered video management (K-Video), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video (K-Connect) in one native platform on the K1 platform. It is not a CAD with added modules — it is a platform designed from the start for the full response cycle.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos principalmente en México y Latinoamérica. Cuando un operador recibe un incidente en K-Dispatch, puede validarlo con cámaras de K-Video, rastrear la unidad respondedora en el mapa de K-Safety y monitorear el tráfico en la zona con K-Traffic — sin cambiar de aplicación, en una sola pantalla operativa.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens primarily in Mexico and Latin America. When an operator receives an incident in K-Dispatch, they can validate it with K-Video cameras, track the responding unit on the K-Safety map, and monitor traffic in the area with K-Traffic — without switching applications, in one operational screen.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Para centros C4/C5 que gestionan múltiples disciplinas de emergencia simultáneamente — seguridad, tráfico, emergencias, coordinación ciudadana — KabatOne reemplaza el stack fragmentado con un sistema único que comparte el mismo modelo de datos entre todos los módulos desde el inicio.'
                : 'For C4/C5 centers managing multiple emergency disciplines simultaneously — security, traffic, emergencies, citizen coordination — KabatOne replaces the fragmented stack with a single system that shares the same data model across all modules from the start.'}
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
              {es ? 'KabatOne vs CAD Tradicional: Diferencias Clave' : 'KabatOne vs Traditional CAD: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara KabatOne y los sistemas CAD tradicionales en siete dimensiones operativas críticas para organizaciones de seguridad pública.'
                : 'The following table compares KabatOne and traditional CAD systems across seven operational dimensions critical for public safety organizations.'}
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
                  {es ? 'CAD Tradicional' : 'Traditional CAD'}
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
                    {row.cad}
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
              {es ? 'El Costo Real de Combinar CAD con Otros Sistemas' : 'The Real Cost of Combining CAD with Other Systems'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'La arquitectura típica de un centro de mando municipal que usa CAD tradicional combina cuatro o cinco sistemas: el CAD para despacho, un VMS (como Genetec, Milestone o Avigilon) para video, un sistema GIS separado para mapeo avanzado, un sistema de gestión de tráfico independiente y — frecuentemente — una capa PSIM encima de todos para intentar presentar los datos de forma unificada. Cada sistema tiene su propio equipo de soporte, su propio ciclo de actualizaciones y su propio contrato de licencia.'
                : 'The typical architecture of a municipal command center using traditional CAD combines four or five systems: the CAD for dispatch, a VMS (such as Genetec, Milestone, or Avigilon) for video, a separate GIS system for advanced mapping, an independent traffic management system, and — frequently — a PSIM layer on top of all of them trying to present the data in a unified way. Each system has its own support team, its own update cycle, and its own license contract.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El problema no es que cada sistema sea malo — muchos son excelentes en su función. El problema es la fricción entre sistemas: cuando un incidente es registrado en el CAD, el operador debe abrir el VMS para ver las cámaras cercanas, luego abrir el GIS para ver las unidades disponibles, luego comunicarse con el centro de tráfico para coordinar la ruta. Cada transición consume tiempo y atención — recursos críticos cuando cada segundo importa.'
                : 'The problem is not that each system is bad — many are excellent at their function. The problem is the friction between systems: when an incident is logged in CAD, the operator must open the VMS to see nearby cameras, then open GIS to see available units, then communicate with the traffic center to coordinate the route. Each transition costs time and attention — critical resources when every second matters.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne elimina esa fricción. Todos los módulos — K-Dispatch, K-Video, K-Safety, K-Traffic — comparten el mismo modelo de datos. Cuando un incidente es creado en K-Dispatch, aparece automáticamente en el mapa de K-Safety con la unidad asignada, el feed de video relevante de K-Video y el estado del tráfico de K-Traffic. No hay sincronización manual, no hay ventanas adicionales y no hay latencia de integración.'
                : 'KabatOne eliminates that friction. All modules — K-Dispatch, K-Video, K-Safety, K-Traffic — share the same data model. When an incident is created in K-Dispatch, it automatically appears on the K-Safety map with the assigned unit, the relevant K-Video feed, and traffic status from K-Traffic. No manual synchronization, no additional windows, and no integration latency.'}
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
              {es ? 'KabatOne Funciona con la Infraestructura Existente' : 'KabatOne Works with Existing Infrastructure'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Una preocupación común al evaluar una plataforma unificada es el reemplazo de infraestructura existente — cámaras, radios, sensores. KabatOne está diseñado para integrarse con la infraestructura existente en lugar de forzar un reemplazo completo. K-Video soporta ONVIF, RTSP y todos los protocolos IP estándar, lo que permite integrar cámaras de cualquier fabricante. K-Dispatch se integra con redes de radio estándar de la industria.'
                : 'A common concern when evaluating a unified platform is replacing existing infrastructure — cameras, radios, sensors. KabatOne is designed to integrate with existing infrastructure rather than force a full replacement. K-Video supports ONVIF, RTSP, and all standard IP protocols, allowing cameras from any manufacturer to be integrated. K-Dispatch integrates with standard industry radio networks.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Para organizaciones que evalúan renovar un contrato de CAD o ampliar las capacidades de un centro de mando existente, KabatOne puede asumir el rol de plataforma unificada — preservando las inversiones en cámaras, radios y sensores — mientras reemplaza el stack fragmentado (CAD + VMS + tráfico) con un sistema único. La migración puede hacerse por etapas según las necesidades operativas y los ciclos de contrato.'
                : 'For organizations evaluating renewing a CAD contract or expanding the capabilities of an existing command center, KabatOne can take on the role of unified platform — preserving investments in cameras, radios, and sensors — while replacing the fragmented stack (CAD + VMS + traffic) with a single system. Migration can be done in stages according to operational needs and contract cycles.'}
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
              {es ? 'KabatOne vs CAD Tradicional: Preguntas y Respuestas' : 'KabatOne vs Traditional CAD: Questions & Answers'}
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
              {es ? 'Comparaciones Específicas' : 'Specific Comparisons'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link href="/vs/motorola" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Motorola Solutions (PremierOne CAD)' : 'KabatOne vs Motorola Solutions (PremierOne CAD)'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/vs/hexagon" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Hexagon Safety (HxGN OnCall CAD)' : 'KabatOne vs Hexagon Safety (HxGN OnCall CAD)'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/vs/mark43" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Mark43 (Cloud CAD)' : 'KabatOne vs Mark43 (Cloud CAD)'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/psim-vs-unified-platform" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'PSIM vs Plataforma Unificada — ¿Cuál Es la Diferencia?' : 'PSIM vs Unified Platform — What\'s the Difference?'}</span>
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
            ? 'Descubre cómo KabatOne unifica CAD, video, GIS y tráfico en un solo sistema de respuesta. Solicita una demo personalizada.'
            : 'See how KabatOne unifies CAD, video, GIS, and traffic in one response system. Request a personalized demo.'}
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
