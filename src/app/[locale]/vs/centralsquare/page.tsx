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
  return generatePageMetadata('vsCentralsquare', locale)
}

export default async function VsCentralsquarePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#8b5cf6'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Comparaciones' : 'Compare', url: es ? 'https://kabatone.com/es/vs/' : 'https://kabatone.com/vs/' },
    { name: 'KabatOne vs CentralSquare', url: es ? 'https://kabatone.com/es/vs/centralsquare/' : 'https://kabatone.com/vs/centralsquare/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre KabatOne y CentralSquare?',
      answer: 'CentralSquare Technologies es el resultado de la fusión en 2018 de Superion, TriTech Software Systems, Aptean Public Sector y Zuercher Technologies. Opera un portafolio amplio de CAD, RMS, gestión de incidentes, jail management, ERP municipal y módulos administrativos, con más de 8,000 agencias clientes en Estados Unidos y Canadá. KabatOne es una plataforma unificada de seguridad pública nativa en la nube que integra video con IA (K-Video), CAD (K-Dispatch), GIS operacional (K-Safety), gestión de tráfico (K-Traffic) y video comunitario (K-Connect) en una sola plataforma. La diferencia está en la arquitectura y el alcance: CentralSquare tiene amplitud histórica; KabatOne tiene profundidad operativa unificada.',
    },
    {
      question: '¿CentralSquare CAD incluye gestión de video?',
      answer: 'No. El portafolio de seguridad pública de CentralSquare (CAD, RMS, jail management, análisis) no incluye un módulo VMS nativo. Las agencias que usan CentralSquare y necesitan videovigilancia deben contratar un VMS separado de Genetec, Milestone, Avigilon o Verkada, e integrarlo mediante middleware o desarrollos a medida. KabatOne incluye K-Video como módulo nativo con analítica IA, integrado directamente con el mapa operacional de K-Safety y el flujo de despacho de K-Dispatch.',
    },
    {
      question: '¿El stack de CentralSquare es cloud-native o legacy?',
      answer: 'El portafolio de CentralSquare proviene de cuatro empresas fusionadas con productos diversos — algunos on-premise tradicionales, otros en proceso de modernización hacia arquitectura en la nube. La experiencia del cliente varía significativamente según el producto específico y la antigüedad del despliegue. KabatOne es cloud-native desde el inicio, con una sola arquitectura, una sola plataforma y el mismo código base para todos los clientes.',
    },
    {
      question: '¿CentralSquare está disponible en México y Latinoamérica?',
      answer: 'CentralSquare opera principalmente en Estados Unidos y Canadá, con presencia limitada en Latinoamérica. KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos, principalmente en México y Latinoamérica, con localización completa en español y experiencia directa en modelos operativos de centros C4/C5 multiagencia.',
    },
    {
      question: '¿Qué pasa con el modelo C4/C5 de México con CentralSquare?',
      answer: 'Los centros C4/C5 en México son operaciones multiagencia que combinan llamadas 911, miles de cámaras urbanas, botones de pánico, LPR, sensores IoT y coordinación entre policía municipal, estatal, Guardia Nacional, bomberos y protección civil. CentralSquare no tiene productos construidos específicamente para este modelo. KabatOne está diseñado desde cero para centros C4/C5: K-Safety unifica el mapa operacional, K-Dispatch soporta despacho multiagencia, K-Video integra miles de cámaras y K-Traffic coordina semáforos.',
    },
    {
      question: '¿Qué ofrece KabatOne que CentralSquare no ofrece?',
      answer: 'En comparación con CentralSquare, KabatOne agrega: gestión de video nativa con analítica IA (K-Video) — CentralSquare no incluye VMS; GIS operacional completo (K-Safety) con mapa en tiempo real de incidentes, unidades, cámaras y sensores; gestión inteligente de tráfico (K-Traffic) con control de semáforos y detección de infracciones; video comunitario (K-Connect) para cámaras ciudadanas; arquitectura cloud-native unificada desde el inicio; y despliegues probados en México y Latinoamérica con localización nativa en español.',
    },
  ] : [
    {
      question: 'What is the difference between KabatOne and CentralSquare?',
      answer: 'CentralSquare Technologies was formed in 2018 by merging Superion, TriTech Software Systems, Aptean Public Sector, and Zuercher Technologies. It operates a broad portfolio of CAD, RMS, incident management, jail management, municipal ERP, and administrative modules, with more than 8,000 agency customers in the United States and Canada. KabatOne is a cloud-native unified public safety platform that integrates AI video (K-Video), CAD (K-Dispatch), operational GIS (K-Safety), traffic management (K-Traffic), and community video (K-Connect) in one platform. The difference is architecture and scope: CentralSquare has historical breadth; KabatOne has unified operational depth.',
    },
    {
      question: 'Does CentralSquare CAD include video management?',
      answer: 'No. CentralSquare\'s public safety portfolio (CAD, RMS, jail management, analytics) does not include a native VMS module. Agencies running CentralSquare that need video surveillance must contract a separate VMS from Genetec, Milestone, Avigilon, or Verkada, and integrate it through middleware or custom development. KabatOne includes K-Video as a native module with AI analytics, directly integrated with the K-Safety operational map and the K-Dispatch workflow.',
    },
    {
      question: 'Is CentralSquare\'s stack cloud-native or legacy?',
      answer: 'CentralSquare\'s portfolio comes from four merged companies with diverse products — some traditional on-premise, others in the process of modernizing toward cloud architecture. The customer experience varies significantly depending on the specific product and deployment vintage. KabatOne is cloud-native from the start, with one architecture, one platform, and the same codebase for all customers.',
    },
    {
      question: 'Is CentralSquare available in Mexico and Latin America?',
      answer: 'CentralSquare operates primarily in the United States and Canada, with limited presence in Latin America. KabatOne is deployed across 40+ cities protecting over 73 million citizens, primarily in Mexico and Latin America, with full Spanish localization and direct experience in multi-agency C4/C5 command center operational models.',
    },
    {
      question: 'What about Mexico\'s C4/C5 model with CentralSquare?',
      answer: 'C4/C5 command centers in Mexico are multi-agency operations combining 911 calls, thousands of urban cameras, panic buttons, LPR, IoT sensors, and coordination across municipal police, state police, National Guard, fire, and civil protection. CentralSquare does not have products built specifically for this model. KabatOne is designed from the ground up for C4/C5 centers: K-Safety unifies the operational map, K-Dispatch supports multi-agency dispatch, K-Video integrates thousands of cameras, and K-Traffic coordinates traffic signals.',
    },
    {
      question: 'What does KabatOne offer that CentralSquare does not?',
      answer: 'Compared to CentralSquare, KabatOne adds: native video management with AI analytics (K-Video) — CentralSquare does not include a VMS; full operational GIS (K-Safety) with a real-time map of incidents, units, cameras, and sensors; intelligent traffic management (K-Traffic) with signal control and violation detection; community video (K-Connect) for citizen cameras; unified cloud-native architecture from the start; and proven deployment in Mexico and Latin America with native Spanish localization.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Categoría principal',
      centralsquare: 'Portafolio gubernamental amplio (CAD, RMS, ERP, jail, analítica)',
      kabatone: 'Plataforma unificada de seguridad pública (video + CAD + GIS + tráfico)',
    },
    {
      category: 'Origen del stack',
      centralsquare: 'Fusión 2018: Superion + TriTech + Aptean + Zuercher',
      kabatone: 'Plataforma única cloud-native desde el inicio',
    },
    {
      category: 'Videovigilancia',
      centralsquare: 'No incluido — requiere VMS de terceros',
      kabatone: 'K-Video nativo, con analítica IA, cualquier fabricante',
    },
    {
      category: 'Despacho / CAD',
      centralsquare: 'CentralSquare CAD (múltiples variantes heredadas)',
      kabatone: 'K-Dispatch nativo, integrado con video, GIS y tráfico',
    },
    {
      category: 'GIS / Conciencia situacional',
      centralsquare: 'Mapeo básico con ubicación de unidades',
      kabatone: 'K-Safety — GIS operacional con incidentes, unidades, cámaras y sensores',
    },
    {
      category: 'Gestión de tráfico',
      centralsquare: 'No incluido',
      kabatone: 'K-Traffic — gestión inteligente de semáforos',
    },
    {
      category: 'Arquitectura',
      centralsquare: 'Mezcla on-premise + cloud (migración en progreso)',
      kabatone: 'Cloud-native desde el inicio, mismo código para todos ✓',
    },
    {
      category: 'Presencia en LATAM',
      centralsquare: 'Limitada — enfoque primordial en EE.UU. y Canadá',
      kabatone: '40+ ciudades, localización completa en español, modelo C4/C5',
    },
  ] : [
    {
      category: 'Primary category',
      centralsquare: 'Broad government portfolio (CAD, RMS, ERP, jail, analytics)',
      kabatone: 'Unified public safety platform (video + CAD + GIS + traffic)',
    },
    {
      category: 'Stack origin',
      centralsquare: '2018 merger: Superion + TriTech + Aptean + Zuercher',
      kabatone: 'Single cloud-native platform from the start',
    },
    {
      category: 'Video surveillance',
      centralsquare: 'Not included — third-party VMS required',
      kabatone: 'K-Video native, AI analytics, any manufacturer',
    },
    {
      category: 'Dispatch / CAD',
      centralsquare: 'CentralSquare CAD (multiple legacy variants)',
      kabatone: 'K-Dispatch native, integrated with video, GIS, and traffic',
    },
    {
      category: 'GIS / Situational awareness',
      centralsquare: 'Basic mapping with unit locations',
      kabatone: 'K-Safety — operational GIS with incidents, units, cameras, and sensors',
    },
    {
      category: 'Traffic management',
      centralsquare: 'Not included',
      kabatone: 'K-Traffic — intelligent signal management',
    },
    {
      category: 'Architecture',
      centralsquare: 'Mixed on-premise + cloud (migration in progress)',
      kabatone: 'Cloud-native from the start, same codebase for all ✓',
    },
    {
      category: 'LATAM presence',
      centralsquare: 'Limited — primarily US and Canada focus',
      kabatone: '40+ cities, full Spanish localization, C4/C5 model',
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
          <span style={{ color: ACCENT }}>KabatOne vs CentralSquare</span>
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
              ? 'KabatOne vs CentralSquare — Stack Heredado Fusionado vs Plataforma Unificada'
              : 'KabatOne vs CentralSquare — Merged Legacy Stack vs Unified Platform'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'CentralSquare es el resultado de fusionar cuatro empresas de software gubernamental — Superion, TriTech, Aptean Public Sector y Zuercher — en una cartera amplia pero heterogénea de productos CAD, RMS y ERP municipal. KabatOne ofrece el camino opuesto: una sola plataforma cloud-native, un solo código base, que unifica video, CAD, GIS y tráfico en el flujo operativo de respuesta — probada en 40+ ciudades de Latinoamérica.'
              : 'CentralSquare is the result of merging four government software companies — Superion, TriTech, Aptean Public Sector, and Zuercher — into a broad but heterogeneous portfolio of CAD, RMS, and municipal ERP products. KabatOne offers the opposite path: one cloud-native platform, one codebase, unifying video, CAD, GIS, and traffic in the response operational workflow — proven in 40+ cities across Latin America.'}
          </p>
        </section>

        {/* ── WHAT IS CENTRALSQUARE? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es CentralSquare?' : 'What Is CentralSquare?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'CentralSquare Technologies fue formada en 2018 por la fusión de cuatro empresas de software gubernamental estadounidenses: Superion, TriTech Software Systems, Aptean Public Sector y Zuercher Technologies. Respaldada por el fondo de private equity Bain Capital, la fusión consolidó uno de los portafolios más amplios de software de seguridad pública y gobierno local en Estados Unidos, con más de 8,000 agencias clientes.'
                : 'CentralSquare Technologies was formed in 2018 by merging four US government software companies: Superion, TriTech Software Systems, Aptean Public Sector, and Zuercher Technologies. Backed by private equity firm Bain Capital, the merger consolidated one of the broadest portfolios of public safety and local government software in the United States, with more than 8,000 agency customers.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El portafolio de CentralSquare incluye CAD, RMS, gestión de incidentes, jail management, análisis de datos, gestión financiera municipal, servicios ciudadanos y permisos. En seguridad pública específicamente, CentralSquare opera productos heredados de cada una de las empresas fusionadas — cada uno con arquitectura, UX y modelo de despliegue propios.'
                : 'CentralSquare\'s portfolio includes CAD, RMS, incident management, jail management, data analytics, municipal financial management, citizen services, and permits. In public safety specifically, CentralSquare operates legacy products from each of the merged companies — each with its own architecture, UX, and deployment model.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'CentralSquare no incluye gestión de video de vigilancia, GIS operacional avanzado, gestión de tráfico inteligente ni integración de video ciudadano. Un centro de mando moderno que use CentralSquare debe contratar VMS, GIS y sistemas de tráfico separados, con los costos y complejidad de integración que esto implica.'
                : 'CentralSquare does not include surveillance video management, advanced operational GIS, intelligent traffic management, or citizen video integration. A modern command center running CentralSquare must contract separate VMS, GIS, and traffic systems — with the cost and integration complexity that this entails.'}
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
                ? 'KabatOne es una plataforma unificada de seguridad pública cloud-native construida para ciudades, municipios, centros de mando C4/C5 y agencias de respuesta multiagencia. Integra gestión de video con analítica IA (K-Video), despacho CAD (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario (K-Connect) en una sola plataforma nativa.'
                : 'KabatOne is a cloud-native unified public safety platform built for cities, municipalities, C4/C5 command centers, and multi-agency response organizations. It integrates AI-powered video management (K-Video), CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video (K-Connect) in one native platform.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'A diferencia de CentralSquare, KabatOne no es el resultado de fusionar múltiples productos heredados. Es una sola plataforma, construida desde el inicio como un sistema unificado. Esto se traduce en una sola interfaz, un solo modelo de datos, un solo ciclo de actualizaciones y una sola contraparte de soporte — en lugar de cuatro o cinco sistemas independientes unidos por integraciones.'
                : 'Unlike CentralSquare, KabatOne is not the result of merging multiple legacy products. It is one platform, built from the start as a unified system. This translates to one interface, one data model, one update cycle, and one support counterpart — instead of four or five independent systems held together by integrations.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos, principalmente en México y Latinoamérica. Para municipios y centros C4/C5 en la región que buscan evitar la complejidad de stacks heredados fusionados, KabatOne es la alternativa cloud-native nativamente unificada.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens, primarily in Mexico and Latin America. For municipalities and C4/C5 command centers in the region looking to avoid the complexity of merged legacy stacks, KabatOne is the natively unified cloud-native alternative.'}
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
              {es ? 'KabatOne vs CentralSquare: Diferencias Clave' : 'KabatOne vs CentralSquare: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara KabatOne y CentralSquare en ocho dimensiones operativas críticas para organizaciones de seguridad pública.'
                : 'The following table compares KabatOne and CentralSquare across eight operational dimensions critical for public safety organizations.'}
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
                  CentralSquare
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
                    {row.centralsquare}
                  </div>
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--dim)', lineHeight: 1.55, borderLeft: '1px solid var(--border)' }}>
                    {row.kabatone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MERGER DEBT SECTION ── */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'La Deuda Técnica de una Fusión de Cuatro Productos' : 'The Technical Debt of a Four-Product Merger'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Fusionar cuatro empresas de software en una sola entidad legal es un evento corporativo; fusionar cuatro productos en una sola plataforma coherente es un proyecto de ingeniería de varios años — y la mayoría de las fusiones nunca lo completan del todo. El portafolio de CentralSquare todavía refleja ese origen: diferentes UIs, diferentes modelos de datos, diferentes ciclos de actualización y diferentes equipos de soporte dependiendo de cuál producto heredado tengas.'
                : 'Merging four software companies into a single legal entity is a corporate event; merging four products into a single coherent platform is a multi-year engineering project — and most mergers never fully complete it. CentralSquare\'s portfolio still reflects that origin: different UIs, different data models, different update cycles, and different support teams depending on which legacy product you run.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Para el cliente, esto se traduce en fricción operativa: cuando un incidente cruza módulos (por ejemplo, de CAD a RMS a analítica), la data viaja entre sistemas que nunca fueron diseñados juntos. Cuando se necesita una integración con video, GIS o tráfico, cada módulo heredado requiere su propio proyecto. Cuando hay una actualización, puede afectar un producto y no otro.'
                : 'For the customer, this translates to operational friction: when an incident crosses modules (e.g., from CAD to RMS to analytics), data travels between systems that were never designed together. When a video, GIS, or traffic integration is needed, each legacy module requires its own project. When there is an update, it may affect one product but not another.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne evita esta deuda técnica por construcción. Es una sola plataforma, un solo código base, una sola interfaz operativa y un solo ciclo de actualizaciones. Cuando un operador pasa de ver video en K-Video a despachar desde K-Dispatch, no está cambiando de sistema — está usando la misma plataforma.'
                : 'KabatOne avoids this technical debt by construction. It is one platform, one codebase, one operational interface, and one update cycle. When an operator moves from viewing video in K-Video to dispatching from K-Dispatch, they are not switching systems — they are using the same platform.'}
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
              {es ? 'KabatOne vs CentralSquare: Preguntas y Respuestas' : 'KabatOne vs CentralSquare: Questions & Answers'}
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
        <section style={{ background: 'var(--bg-2)', padding: '64px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '24px',
            }}>
              {es ? 'Artículos Relacionados' : 'Related Resources'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link href="/vs/tyler-technologies" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Tyler Technologies' : 'KabatOne vs Tyler Technologies'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/vs/mark43" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Mark43' : 'KabatOne vs Mark43'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/vs/cad" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Sistemas CAD Tradicionales' : 'KabatOne vs Traditional CAD Systems'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/what-is-cad-dispatch-software" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? '¿Qué Es el Software CAD de Despacho?' : 'What Is CAD Dispatch Software?'}</span>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '12px', marginTop: '12px' }}>
              <span style={{ fontFamily: 'DM Mono, monospace', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {es ? 'Integraciones:' : 'Integrations:'}
              </span>
              {[
                { href: '/integrations/lpr', label: 'LPR' },
                { href: '/integrations/face-recognition', label: es ? 'Reconocimiento Facial' : 'Face Recognition' },
                { href: '/integrations/sensor-fusion', label: es ? 'Fusión de Sensores' : 'Sensor Fusion' },
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
            ? 'Descubre cómo KabatOne conecta video, CAD, GIS y tráfico en un solo flujo de respuesta. Solicita una demo personalizada.'
            : 'See how KabatOne connects video, CAD, GIS, and traffic in one response workflow. Request a personalized demo.'}
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
