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
  return generatePageMetadata('vsMotorola', locale)
}

export default async function VsMotorolaPage({
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
    { name: 'KabatOne vs Motorola Solutions', url: es ? 'https://kabatone.com/es/vs/motorola/' : 'https://kabatone.com/vs/motorola/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre KabatOne y Motorola Solutions?',
      answer: 'Motorola Solutions es una empresa de comunicaciones y seguridad pública conocida por sus radios LMR, PremierOne CAD, CommandCentral y la plataforma de video Avigilon — cada uno como un producto separado. KabatOne es una plataforma unificada que integra video (K-Video), despacho CAD (K-Dispatch), conciencia situacional GIS (K-Safety) y gestión de tráfico (K-Traffic) en un solo flujo de trabajo operativo. La diferencia principal es la integración: Motorola vende capacidades individuales que deben conectarse entre sí; KabatOne entrega todo de forma nativa en una plataforma.',
    },
    {
      question: '¿Motorola Solutions incluye CAD y video en una sola plataforma?',
      answer: 'No directamente. PremierOne CAD es el sistema de despacho de Motorola, Avigilon es su plataforma de video inteligente y CommandCentral Aware es su solución de conciencia situacional — cada uno es un producto con licencia independiente que requiere integración. KabatOne, en cambio, integra video, CAD, GIS y gestión de tráfico como módulos nativos en una sola plataforma sobre la plataforma K1, eliminando la necesidad de conectar múltiples sistemas.',
    },
    {
      question: '¿Puede KabatOne trabajar con infraestructura de radio Motorola existente?',
      answer: 'Sí. KabatOne es agnóstico en cuanto a radio. K-Dispatch se integra con los sistemas de radio existentes — incluidas las redes APX y ASTRO 25 de Motorola — a través de interfaces estándar. Las ciudades y municipios con infraestructura de radio Motorola pueden incorporar KabatOne como capa de coordinación de operaciones sin reemplazar su infraestructura de comunicaciones.',
    },
    {
      question: '¿Es KabatOne una alternativa a Motorola Solutions para operaciones de seguridad pública?',
      answer: 'KabatOne y Motorola Solutions atienden necesidades que se superponen pero con enfoques distintos. Motorola es la opción dominante para agencias que priorizan las comunicaciones por radio y ya tienen Avigilon o PremierOne implementados. KabatOne es la opción más fuerte para ciudades y municipios que necesitan un flujo de respuesta unificado — video, despacho CAD, GIS y tráfico — en un solo sistema sin gestionar múltiples contratos y proveedores.',
    },
    {
      question: '¿Cuál es mejor para centros de mando — Motorola o KabatOne?',
      answer: 'Ambas plataformas sirven a centros de mando, pero con diferente arquitectura. Un centro de mando Motorola típicamente combina PremierOne CAD + CommandCentral Aware + Avigilon + radio APX — cuatro productos que requieren integración y mantenimiento separados. KabatOne entrega todas esas funciones en una sola plataforma nativa. Para centros de mando C4/C5 en México y Latinoamérica que gestionan múltiples disciplinas de emergencia, la arquitectura unificada de KabatOne reduce la complejidad operativa y los costos de integración.',
    },
    {
      question: '¿Qué ofrece KabatOne que Motorola Solutions no ofrece?',
      answer: 'KabatOne ofrece: gestión de tráfico inteligente nativa (K-Traffic) — semáforos adaptativos, detección de infracciones, coordinación de vehículos de emergencia — que no existe en el ecosistema de Motorola; video comunitario (K-Connect) para integrar cámaras de ciudadanos y negocios al centro de mando; y un flujo de respuesta de extremo a extremo — desde detección hasta cierre de incidente en campo — en una sola interfaz. Motorola ofrece productos poderosos individualmente; KabatOne los conecta todos de forma nativa.',
    },
  ] : [
    {
      question: 'What is the difference between KabatOne and Motorola Solutions?',
      answer: 'Motorola Solutions is a public safety communications and technology company known for LMR radios, PremierOne CAD, CommandCentral, and the Avigilon video platform — each as a separate product. KabatOne is a unified platform that integrates video management (K-Video), CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), and traffic management (K-Traffic) in one operational workflow. The core difference is integration: Motorola sells individual capabilities that must be connected together; KabatOne delivers everything natively in one platform.',
    },
    {
      question: 'Does Motorola Solutions include CAD and video in one platform?',
      answer: 'Not directly. PremierOne CAD is Motorola\'s dispatch system, Avigilon is its intelligent video platform, and CommandCentral Aware is its situational awareness solution — each is an independently licensed product requiring integration. KabatOne, in contrast, integrates video, CAD, GIS, and traffic management as native modules in one platform on the K1 platform, eliminating the need to stitch together multiple systems.',
    },
    {
      question: 'Can KabatOne work with existing Motorola radio infrastructure?',
      answer: 'Yes. KabatOne is radio-agnostic. K-Dispatch integrates with existing radio systems — including Motorola APX and ASTRO 25 networks — through standard interfaces. Cities and municipalities with Motorola radio infrastructure can bring in KabatOne as the operations coordination layer without replacing their communications infrastructure.',
    },
    {
      question: 'Is KabatOne an alternative to Motorola Solutions for public safety operations?',
      answer: 'KabatOne and Motorola Solutions serve overlapping needs with different approaches. Motorola is the dominant choice for agencies that prioritize radio communications and already have Avigilon or PremierOne deployed. KabatOne is the stronger choice for cities and municipalities that need a unified response workflow — video, CAD dispatch, GIS, and traffic — in one system without managing multiple contracts and vendors.',
    },
    {
      question: 'Which is better for command center operations — Motorola or KabatOne?',
      answer: 'Both platforms serve command centers, but with different architecture. A typical Motorola command center combines PremierOne CAD + CommandCentral Aware + Avigilon + APX radio — four products requiring separate integration and maintenance. KabatOne delivers all of those functions in one native platform. For C4/C5 command centers in Mexico and Latin America managing multiple emergency disciplines, KabatOne\'s unified architecture reduces operational complexity and integration costs.',
    },
    {
      question: 'What does KabatOne offer that Motorola Solutions does not?',
      answer: 'KabatOne provides: native intelligent traffic management (K-Traffic) — adaptive signals, violation detection, emergency vehicle coordination — which does not exist in the Motorola ecosystem; community video (K-Connect) to bring citizen and business cameras into the command center; and an end-to-end response workflow — from detection through field incident closure — in one interface. Motorola offers powerful individual products; KabatOne connects them all natively.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Categoría principal',
      motorola: 'Comunicaciones LMR + video + CAD (productos separados)',
      kabatone: 'Plataforma unificada de seguridad pública (flujo único nativo)',
    },
    {
      category: 'Videovigilancia',
      motorola: 'Avigilon (producto separado, licencia adicional)',
      kabatone: 'K-Video — nativo en la plataforma, IA incluida',
    },
    {
      category: 'Despacho / CAD',
      motorola: 'PremierOne CAD (maduro, ampliamente desplegado)',
      kabatone: 'K-Dispatch — nativo, integrado con video, GIS y tráfico',
    },
    {
      category: 'GIS / Conciencia situacional',
      motorola: 'CommandCentral Aware (producto separado, costo adicional)',
      kabatone: 'K-Safety — nativo, mapa operativo en tiempo real con todos los incidentes',
    },
    {
      category: 'Gestión de tráfico',
      motorola: 'No incluido — requiere integración de terceros',
      kabatone: 'K-Traffic — gestión inteligente de semáforos y tráfico',
    },
    {
      category: 'Dependencia de hardware',
      motorola: 'Ecosistema construido alrededor de radios/LMR Motorola',
      kabatone: 'Software nativo — funciona con cualquier radio y cámaras existentes',
    },
    {
      category: 'Modelo de integración',
      motorola: 'Múltiples productos, cada uno con licencia independiente',
      kabatone: 'Plataforma única — video, CAD, GIS y tráfico en un solo flujo',
    },
  ] : [
    {
      category: 'Primary category',
      motorola: 'LMR comms + video + CAD (separate products)',
      kabatone: 'Unified public safety platform (single native workflow)',
    },
    {
      category: 'Video surveillance',
      motorola: 'Avigilon (separate product — additional license)',
      kabatone: 'K-Video — native in platform, AI included',
    },
    {
      category: 'Dispatch / CAD',
      motorola: 'PremierOne CAD (mature, widely deployed)',
      kabatone: 'K-Dispatch — native, integrated with video, GIS, and traffic',
    },
    {
      category: 'GIS / Situational awareness',
      motorola: 'CommandCentral Aware (separate product, additional cost)',
      kabatone: 'K-Safety — native, real-time operational map with all incidents',
    },
    {
      category: 'Traffic management',
      motorola: 'Not included — third-party integration required',
      kabatone: 'K-Traffic — intelligent signal and traffic management',
    },
    {
      category: 'Hardware dependency',
      motorola: 'Core ecosystem built around Motorola radio/LMR infrastructure',
      kabatone: 'Software-native — works with any radio and existing cameras',
    },
    {
      category: 'Integration model',
      motorola: 'Multiple products, each independently licensed',
      kabatone: 'Single platform — video, CAD, GIS, and traffic in one workflow',
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
          <span style={{ color: ACCENT }}>KabatOne vs Motorola Solutions</span>
        </div>

        {/* ── HERO ── */}
        <section style={{
          maxWidth: '800px', margin: '0 auto', padding: '64px 40px 80px',
        }}>
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
              ? 'KabatOne vs Motorola Solutions — Más Allá de las Comunicaciones'
              : 'KabatOne vs Motorola Solutions — Beyond Communications'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, marginBottom: '0',
          }}>
            {es
              ? 'Motorola Solutions domina las comunicaciones de seguridad pública — radios LMR, PremierOne CAD, CommandCentral Aware y Avigilon son líderes del mercado. El desafío es que cada uno es un producto separado con su propia licencia, integración y contrato de mantenimiento. KabatOne integra video, despacho CAD, GIS y gestión de tráfico en un flujo de respuesta nativo desde el primer día — sin proyectos de integración entre sistemas.'
              : 'Motorola Solutions dominates public safety communications — LMR radios, PremierOne CAD, CommandCentral Aware, and Avigilon are all market leaders. The challenge is that each is a separate product with its own license, integration effort, and maintenance contract. KabatOne integrates video, CAD dispatch, GIS, and traffic management into one native response workflow from day one — no cross-system integration projects required.'}
          </p>
        </section>

        {/* ── WHAT IS MOTOROLA SOLUTIONS? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es Motorola Solutions?' : 'What Is Motorola Solutions?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Motorola Solutions es el proveedor dominante de tecnología de comunicaciones para seguridad pública. Su cartera cubre radios LMR (Land Mobile Radio) de la serie APX, redes de misión crítica ASTRO 25, el sistema CAD PremierOne para centros de despacho 911, la plataforma de conciencia situacional CommandCentral Aware, y la plataforma de video inteligente Avigilon — adquirida en 2018.'
                : 'Motorola Solutions is the dominant public safety communications technology provider. Its portfolio covers APX-series LMR (Land Mobile Radio), ASTRO 25 mission-critical networks, the PremierOne CAD system for 911 dispatch centers, the CommandCentral Aware situational awareness platform, and the Avigilon intelligent video platform — acquired in 2018.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'La fortaleza de Motorola está en las comunicaciones de misión crítica: sus radios APX son el estándar de facto en agencias de ley, bomberos y EMS en Estados Unidos, y PremierOne CAD tiene una base instalada masiva en las mayores ciudades del país. CommandCentral Aware agrega una vista de mapa de conciencia situacional que conecta datos de incidentes de PremierOne con video de Avigilon.'
                : 'Motorola\'s strength lies in mission-critical communications: APX radios are the de facto standard in US law enforcement, fire, and EMS agencies, and PremierOne CAD has a massive installed base in major US cities. CommandCentral Aware adds a situational awareness map view that connects PremierOne incident data with Avigilon video.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'El desafío es que la cartera de Motorola está construida a través de adquisiciones — PremierOne, Avigilon y CommandCentral son plataformas distintas que se integran entre sí, pero cada una requiere su propia licencia, implementación y equipo de soporte. La gestión de tráfico inteligente no está disponible en ninguno de estos productos.'
                : 'The challenge is that Motorola\'s portfolio is built through acquisitions — PremierOne, Avigilon, and CommandCentral are distinct platforms that integrate with each other, but each requires its own license, deployment, and support team. Intelligent traffic management is not available in any of these products.'}
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
                ? 'KabatOne es una plataforma unificada de seguridad pública construida específicamente para ciudades, municipios, centros de mando y agencias de respuesta a emergencias. Integra gestión de video con analítica IA (K-Video), despacho CAD (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario compartido (K-Connect) en una plataforma nativa sobre la plataforma K1.'
                : 'KabatOne is a unified public safety platform purpose-built for cities, municipalities, command centers, and emergency response agencies. It integrates AI-powered video management (K-Video), CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video sharing (K-Connect) in one native platform on the K1 platform.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos principalmente en Latinoamérica y los Estados Unidos. Cuando un operador detecta un incidente en K-Safety o K-Video, puede validarlo, crear un evento CAD en K-Dispatch, rastrear las unidades respondedoras en el mapa GIS y cerrar el ciclo con documentación de campo — sin salir de la plataforma.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens primarily in Latin America and the United States. When an operator detects an incident in K-Safety or K-Video, they can validate it, create a CAD event in K-Dispatch, track responding units on the GIS map, and close the loop with field documentation — without leaving the platform.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'A diferencia de los ecosistemas construidos a través de adquisiciones, KabatOne fue diseñado como una plataforma unificada desde el inicio. No hay proyectos de integración entre módulos, no hay duplicidad de datos y no hay múltiples contratos de soporte — es un flujo de respuesta operativa de extremo a extremo.'
                : 'Unlike ecosystems built through acquisitions, KabatOne was designed as a unified platform from the start. There are no cross-module integration projects, no data duplication, and no multiple support contracts — it is one end-to-end operational response workflow.'}
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
              {es ? 'KabatOne vs Motorola Solutions: Diferencias Clave' : 'KabatOne vs Motorola Solutions: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara KabatOne y Motorola Solutions en siete dimensiones operativas críticas para organizaciones de seguridad pública.'
                : 'The following table compares KabatOne and Motorola Solutions across seven operational dimensions critical for public safety organizations.'}
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
                  Motorola Solutions
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
                    {row.motorola}
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
              {es ? 'El Costo Real de Múltiples Productos' : 'The Real Cost of Multiple Products'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Un centro de mando típico basado en el ecosistema de Motorola Solutions combina PremierOne CAD para despacho, CommandCentral Aware para conciencia situacional, Avigilon para video y radios APX para comunicaciones. Cada producto tiene su propio ciclo de implementación, equipo de soporte, contrato de licencia y cronograma de actualización. Conectar estos sistemas para que compartan datos en tiempo real requiere proyectos de integración que pueden durar meses y costar más que los productos mismos.'
                : 'A typical command center built on the Motorola Solutions ecosystem combines PremierOne CAD for dispatch, CommandCentral Aware for situational awareness, Avigilon for video, and APX radios for communications. Each product has its own deployment cycle, support team, license contract, and upgrade schedule. Connecting these systems to share data in real time requires integration projects that can take months and cost more than the products themselves.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne elimina esa fricción. Video, CAD, GIS y tráfico comparten el mismo modelo de datos desde el inicio — cuando un incidente es creado en K-Dispatch, aparece automáticamente en el mapa de K-Safety con la unidad asignada y el video correspondiente de K-Video. No hay sincronización de datos, no hay mapeo de campos entre sistemas y no hay retrasos por latencia de integración.'
                : 'KabatOne eliminates that friction. Video, CAD, GIS, and traffic share the same data model from the start — when an incident is created in K-Dispatch, it appears automatically on the K-Safety map with the assigned unit and corresponding K-Video feed. There is no data synchronization, no field mapping between systems, and no latency from integration middleware.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne también agrega gestión de tráfico inteligente (K-Traffic) — control adaptativo de semáforos, detección de infracciones vehiculares, coordinación de vehículos de emergencia — una capacidad que no existe en el portafolio de Motorola Solutions y que requeriría un cuarto o quinto proveedor en un despliegue tradicional.'
                : 'KabatOne also adds intelligent traffic management (K-Traffic) — adaptive signal control, vehicle violation detection, emergency vehicle coordination — a capability that does not exist in the Motorola Solutions portfolio and would require a fourth or fifth vendor in a traditional deployment.'}
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
              {es ? '¿Puede KabatOne Trabajar con Infraestructura Motorola Existente?' : 'Can KabatOne Work with Existing Motorola Infrastructure?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Sí. KabatOne está diseñado para integrarse con la infraestructura existente. K-Dispatch se integra con redes de radio estándar — incluyendo APX y ASTRO 25 de Motorola — a través de interfaces estándar de la industria. K-Video soporta ONVIF, RTSP y protocolos IP estándar, lo que permite agregar cámaras de Avigilon junto con cámaras de cualquier otro fabricante.'
                : 'Yes. KabatOne is designed to integrate with existing infrastructure. K-Dispatch integrates with standard radio networks — including Motorola APX and ASTRO 25 — through industry-standard interfaces. K-Video supports ONVIF, RTSP, and standard IP protocols, allowing it to aggregate Avigilon cameras alongside cameras from any other manufacturer.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Esto permite a las organizaciones con inversiones existentes en hardware Motorola incorporar KabatOne como la capa de coordinación de respuesta unificada — aprovechando sus radios, cámaras y datos existentes — mientras eliminan la complejidad de gestionar múltiples sistemas de software. KabatOne no requiere reemplazar infraestructura de radio o de cámaras que ya funciona.'
                : 'This allows organizations with existing Motorola hardware investments to bring in KabatOne as the unified response coordination layer — leveraging their existing radios, cameras, and data — while eliminating the complexity of managing multiple software systems. KabatOne does not require replacing radio or camera infrastructure that is already working.'}
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
              {es ? 'KabatOne vs Motorola Solutions: Preguntas y Respuestas' : 'KabatOne vs Motorola Solutions: Questions & Answers'}
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
              <Link href="/vs/genetec" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Genetec Security Center' : 'KabatOne vs Genetec Security Center'}</span>
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
            ? 'Descubre cómo KabatOne unifica video, despacho y GIS en un solo flujo de respuesta. Solicita una demo personalizada.'
            : 'See how KabatOne unifies video, dispatch, and GIS in one response workflow. Request a personalized demo.'}
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
