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
  return generatePageMetadata('vsTylerTechnologies', locale)
}

export default async function VsTylerTechnologiesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#0ea5e9'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Comparaciones' : 'Compare', url: es ? 'https://kabatone.com/es/vs/' : 'https://kabatone.com/vs/' },
    { name: 'KabatOne vs Tyler Technologies', url: es ? 'https://kabatone.com/es/vs/tyler-technologies/' : 'https://kabatone.com/vs/tyler-technologies/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre KabatOne y Tyler Technologies?',
      answer: 'Tyler Technologies es el proveedor de software gubernamental más grande de Estados Unidos, con una suite amplia que incluye CAD empresarial (Enterprise CAD, antes New World CAD), RMS, gestión de tribunales, ERP municipal, tesorería y cientos de otros módulos administrativos. KabatOne es una plataforma unificada de seguridad pública nativa en la nube que integra gestión de video con IA (K-Video), CAD de despacho (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario (K-Connect) en un solo sistema operativo. La diferencia es de enfoque: Tyler cubre la amplitud del software gubernamental; KabatOne cubre la profundidad del flujo operativo de respuesta.',
    },
    {
      question: '¿El CAD Empresarial de Tyler incluye gestión de video?',
      answer: 'No. Enterprise CAD (y el portafolio heredado de New World Public Safety) se enfoca en intake de llamadas, despacho, RMS y movilidad de campo — no incluye un módulo VMS. Las agencias que usan Tyler y necesitan video de vigilancia deben implementar un VMS separado (Genetec, Milestone, Avigilon, Verkada) e integrarlo vía middleware. KabatOne incluye K-Video como módulo nativo, con analítica IA, integrado directamente al mapa de K-Safety y al flujo de K-Dispatch.',
    },
    {
      question: '¿Tyler Technologies está disponible fuera de Estados Unidos?',
      answer: 'Tyler Technologies opera principalmente en el mercado de gobiernos estatales y locales de Estados Unidos — con más de 40,000 clientes en agencias gubernamentales de Norteamérica. Su presencia en México y Latinoamérica es limitada. KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos, principalmente en México y Latinoamérica, con localización completa en español y experiencia operativa en modelos de centro de mando C4/C5.',
    },
    {
      question: '¿Tyler Enterprise CAD es cloud-native o legacy?',
      answer: 'Tyler ha estado migrando su portafolio de seguridad pública hacia arquitectura en la nube (Enterprise Justice, Enterprise Supervisor, etc.), pero el stack histórico incluye instalaciones on-premise significativas y el proceso de modernización a SaaS es gradual. KabatOne es cloud-native desde el inicio — una sola plataforma, entrega SaaS, actualizaciones continuas sin downtime, y el mismo código base para todos los clientes.',
    },
    {
      question: '¿Qué pasa con los centros de mando C4 y C5 en México?',
      answer: 'Los centros C4 y C5 en México tienen un modelo operativo específico: respuesta multiagencia (policía, bomberos, protección civil, tránsito), integración masiva de cámaras urbanas, botones de pánico, LPR y sensores IoT, y coordinación con la Guardia Nacional. Tyler Technologies no tiene presencia significativa en este mercado. KabatOne está construido para este modelo: K-Safety unifica el mapa operacional, K-Dispatch soporta despacho multiagencia, K-Video integra miles de cámaras urbanas y K-Traffic coordina semáforos y vehículos de emergencia.',
    },
    {
      question: '¿Qué ofrece KabatOne que Tyler no ofrece?',
      answer: 'En comparación con Tyler Technologies, KabatOne agrega: gestión de video nativa con analítica IA (K-Video) — Tyler no incluye VMS; GIS operacional completo (K-Safety) con mapa en tiempo real de incidentes, unidades, cámaras y sensores en una sola pantalla; gestión inteligente de tráfico (K-Traffic) con control de semáforos y detección de infracciones; video comunitario (K-Connect) para integrar cámaras ciudadanas; arquitectura cloud-native unificada desde el inicio; y presencia probada en México y Latinoamérica con localización nativa en español.',
    },
  ] : [
    {
      question: 'What is the difference between KabatOne and Tyler Technologies?',
      answer: 'Tyler Technologies is the largest government software provider in the United States, with a broad suite that includes Enterprise CAD (formerly New World CAD), RMS, courts, municipal ERP, treasury, and hundreds of other administrative modules. KabatOne is a cloud-native unified public safety platform that integrates AI video management (K-Video), CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video (K-Connect) in one operational system. The difference is focus: Tyler covers the breadth of government software; KabatOne covers the depth of the response operational workflow.',
    },
    {
      question: 'Does Tyler Enterprise CAD include video management?',
      answer: 'No. Enterprise CAD (and the legacy New World Public Safety portfolio) focuses on call intake, dispatch, RMS, and field mobility — it does not include a VMS module. Agencies running Tyler that need surveillance video must deploy a separate VMS (Genetec, Milestone, Avigilon, Verkada) and integrate it through middleware. KabatOne includes K-Video as a native module with AI analytics, directly integrated into the K-Safety map and K-Dispatch workflow.',
    },
    {
      question: 'Is Tyler Technologies available outside the United States?',
      answer: 'Tyler Technologies operates primarily in the US state and local government market — with 40,000+ customers in North American government agencies. Its presence in Mexico and Latin America is limited. KabatOne is deployed across 40+ cities protecting over 73 million citizens, primarily in Mexico and Latin America, with full Spanish localization and operational experience in C4/C5 command center models.',
    },
    {
      question: 'Is Tyler Enterprise CAD cloud-native or legacy?',
      answer: 'Tyler has been migrating its public safety portfolio toward cloud architecture (Enterprise Justice, Enterprise Supervisor, etc.), but the historical stack includes significant on-premise installations and the modernization process to full SaaS is gradual. KabatOne is cloud-native from the ground up — one platform, SaaS delivery, continuous updates with no downtime, and the same codebase for all customers.',
    },
    {
      question: 'What about C4 and C5 command centers in Mexico?',
      answer: 'C4 and C5 command centers in Mexico have a specific operational model: multi-agency response (police, fire, civil protection, traffic), massive integration of urban cameras, panic buttons, LPR, and IoT sensors, plus coordination with the National Guard. Tyler Technologies has no significant presence in this market. KabatOne is built for this model: K-Safety unifies the operational map, K-Dispatch supports multi-agency dispatch, K-Video integrates thousands of urban cameras, and K-Traffic coordinates signals and emergency vehicles.',
    },
    {
      question: 'What does KabatOne offer that Tyler does not?',
      answer: 'Compared to Tyler Technologies, KabatOne adds: native video management with AI analytics (K-Video) — Tyler does not include a VMS; full operational GIS (K-Safety) with a real-time map of incidents, units, cameras, and sensors in one screen; intelligent traffic management (K-Traffic) with signal control and violation detection; community video (K-Connect) to integrate citizen cameras; unified cloud-native architecture from the ground up; and proven deployment in Mexico and Latin America with native Spanish localization.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Categoría principal',
      tyler: 'Suite gubernamental amplia (CAD, RMS, ERP, tribunales, tesorería)',
      kabatone: 'Plataforma unificada de seguridad pública (video + CAD + GIS + tráfico + campo)',
    },
    {
      category: 'Enfoque principal',
      tyler: 'Amplitud del software gubernamental',
      kabatone: 'Profundidad del flujo operativo de respuesta',
    },
    {
      category: 'Videovigilancia',
      tyler: 'No incluido — requiere VMS de terceros (Genetec, Milestone, etc.)',
      kabatone: 'K-Video nativo, con analítica IA, cualquier fabricante',
    },
    {
      category: 'Despacho / CAD',
      tyler: 'Enterprise CAD (antes New World CAD) — robusto, probado',
      kabatone: 'K-Dispatch nativo, integrado con video, GIS y tráfico',
    },
    {
      category: 'GIS / Conciencia situacional',
      tyler: 'Mapeo básico con ubicación de unidades',
      kabatone: 'K-Safety — GIS operacional completo con incidentes, unidades, cámaras y sensores',
    },
    {
      category: 'Gestión de tráfico',
      tyler: 'No incluido',
      kabatone: 'K-Traffic — gestión inteligente de semáforos y detección de infracciones',
    },
    {
      category: 'Video comunitario',
      tyler: 'No incluido',
      kabatone: 'K-Connect — integración de cámaras ciudadanas',
    },
    {
      category: 'Arquitectura',
      tyler: 'Migración gradual a cloud — mezcla SaaS + on-premise',
      kabatone: 'Cloud-native desde el inicio ✓',
    },
    {
      category: 'Presencia en LATAM',
      tyler: 'Limitada — enfoque primordial en EE.UU.',
      kabatone: '40+ ciudades, localización completa en español, modelo C4/C5',
    },
  ] : [
    {
      category: 'Primary category',
      tyler: 'Broad government suite (CAD, RMS, ERP, courts, treasury)',
      kabatone: 'Unified public safety platform (video + CAD + GIS + traffic + field)',
    },
    {
      category: 'Primary focus',
      tyler: 'Breadth of government software',
      kabatone: 'Depth of the response operational workflow',
    },
    {
      category: 'Video surveillance',
      tyler: 'Not included — third-party VMS required (Genetec, Milestone, etc.)',
      kabatone: 'K-Video native, AI analytics, any manufacturer',
    },
    {
      category: 'Dispatch / CAD',
      tyler: 'Enterprise CAD (formerly New World CAD) — robust, proven',
      kabatone: 'K-Dispatch native, integrated with video, GIS, and traffic',
    },
    {
      category: 'GIS / Situational awareness',
      tyler: 'Basic mapping with unit locations',
      kabatone: 'K-Safety — full operational GIS with incidents, units, cameras, and sensors',
    },
    {
      category: 'Traffic management',
      tyler: 'Not included',
      kabatone: 'K-Traffic — intelligent signal control and violation detection',
    },
    {
      category: 'Community video',
      tyler: 'Not included',
      kabatone: 'K-Connect — citizen camera integration',
    },
    {
      category: 'Architecture',
      tyler: 'Gradual cloud migration — mixed SaaS + on-premise',
      kabatone: 'Cloud-native from the ground up ✓',
    },
    {
      category: 'LATAM presence',
      tyler: 'Limited — primarily US-focused',
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
          <span style={{ color: ACCENT }}>KabatOne vs Tyler Technologies</span>
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
              ? 'KabatOne vs Tyler Technologies — Amplitud de Software Gubernamental vs Profundidad Operativa'
              : 'KabatOne vs Tyler Technologies — Government Software Breadth vs Operational Depth'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'Tyler Technologies es el proveedor de software gubernamental más grande de Estados Unidos — una suite amplia que cubre CAD, RMS, ERP municipal, tribunales, tesorería y decenas de otros módulos administrativos. KabatOne no compite en amplitud: compite en profundidad operativa. Una sola plataforma cloud-native que une video, CAD, GIS y tráfico en el flujo de respuesta, construida y probada en los centros de mando más exigentes de Latinoamérica.'
              : 'Tyler Technologies is the largest government software provider in the United States — a broad suite covering CAD, RMS, municipal ERP, courts, treasury, and dozens of other administrative modules. KabatOne does not compete on breadth: it competes on operational depth. A single cloud-native platform that unifies video, CAD, GIS, and traffic in the response workflow — built and proven in Latin America\'s most demanding command centers.'}
          </p>
        </section>

        {/* ── WHAT IS TYLER? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es Tyler Technologies?' : 'What Is Tyler Technologies?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Tyler Technologies es el proveedor de software más grande enfocado exclusivamente en el sector público en Estados Unidos, con más de 40,000 instalaciones en gobiernos estatales, locales y federales en Norteamérica. Fundada en 1966 y con sede en Plano, Texas, Tyler ofrece una suite amplia de software gubernamental que cubre prácticamente todos los procesos administrativos de una agencia pública.'
                : 'Tyler Technologies is the largest software provider focused exclusively on the US public sector, with more than 40,000 installations across state, local, and federal government agencies in North America. Founded in 1966 and headquartered in Plano, Texas, Tyler offers a broad suite of government software covering virtually every administrative process of a public agency.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'En seguridad pública específicamente, Tyler opera el portafolio heredado de New World Public Safety (adquirido en 2015 por aproximadamente $670 millones), que incluye Enterprise CAD, Enterprise Supervisor (RMS), Enterprise Justice, gestión de tribunales y movilidad de campo. Tyler ha estado modernizando gradualmente este portafolio hacia arquitectura en la nube, pero muchos despliegues siguen siendo on-premise.'
                : 'In public safety specifically, Tyler operates the legacy New World Public Safety portfolio (acquired in 2015 for approximately $670 million), which includes Enterprise CAD, Enterprise Supervisor (RMS), Enterprise Justice, court management, and field mobility. Tyler has been gradually modernizing this portfolio toward cloud architecture, but many deployments remain on-premise.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Tyler no incluye gestión de video de vigilancia, GIS operacional avanzado, gestión de tráfico inteligente ni integración de video ciudadano. Un centro de mando que use Tyler y necesite estas capacidades debe contratar sistemas separados de proveedores adicionales — típicamente un VMS como Genetec o Milestone, un GIS empresarial como ESRI, y un sistema de tráfico separado.'
                : 'Tyler does not include surveillance video management, advanced operational GIS, intelligent traffic management, or citizen video integration. A command center running Tyler that needs these capabilities must contract separate systems from additional vendors — typically a VMS like Genetec or Milestone, an enterprise GIS like ESRI, and a separate traffic system.'}
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
                ? 'KabatOne es una plataforma unificada de seguridad pública cloud-native construida para ciudades, municipios, centros de mando C4/C5 y agencias de respuesta multiagencia. Integra gestión de video con analítica IA (K-Video), despacho CAD (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario (K-Connect) en una sola plataforma nativa sobre el sistema operativo K1.'
                : 'KabatOne is a cloud-native unified public safety platform built for cities, municipalities, C4/C5 command centers, and multi-agency response organizations. It integrates AI-powered video management (K-Video), CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video (K-Connect) in one native platform on the K1 operating system.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'La diferencia con Tyler es el enfoque: KabatOne no intenta cubrir ERP municipal, tesorería o gestión de tribunales. Se concentra en la profundidad del flujo operativo de respuesta — el trabajo real de un centro de mando moderno — y lo resuelve en una sola plataforma. Cuando un operador recibe un incidente, el evento aparece automáticamente en el mapa de K-Safety, activa el feed de video relevante de K-Video y permite coordinar ruta y tráfico con K-Traffic, todo en una pantalla.'
                : 'The difference with Tyler is focus: KabatOne does not try to cover municipal ERP, treasury, or court management. It concentrates on the depth of the response operational workflow — the actual work of a modern command center — and solves it in one platform. When an operator receives an incident, the event automatically appears on the K-Safety map, triggers the relevant video feed in K-Video, and enables route and traffic coordination with K-Traffic, all in one screen.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos, principalmente en México y Latinoamérica. Para municipios y centros C4/C5 en la región que buscan una plataforma operativa moderna, unificada y probada en modelos multiagencia, KabatOne es la referencia del mercado.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens, primarily in Mexico and Latin America. For municipalities and C4/C5 command centers in the region looking for a modern, unified operational platform proven in multi-agency models, KabatOne is the market reference.'}
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
              {es ? 'KabatOne vs Tyler Technologies: Diferencias Clave' : 'KabatOne vs Tyler Technologies: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara KabatOne y Tyler Technologies en nueve dimensiones operativas críticas para organizaciones de seguridad pública.'
                : 'The following table compares KabatOne and Tyler Technologies across nine operational dimensions critical for public safety organizations.'}
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
                  Tyler
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
                    {row.tyler}
                  </div>
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--dim)', lineHeight: 1.55, borderLeft: '1px solid var(--border)' }}>
                    {row.kabatone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BREADTH VS DEPTH ── */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Amplitud vs Profundidad: Dos Estrategias Distintas' : 'Breadth vs Depth: Two Different Strategies'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'La comparación entre KabatOne y Tyler no es realmente una comparación de productos equivalentes — es una comparación de dos estrategias distintas. Tyler es la respuesta a la pregunta "¿cómo administramos todos los procesos digitales de un gobierno local?". KabatOne es la respuesta a la pregunta "¿cómo operamos un centro de mando moderno de seguridad pública?". Ambas son preguntas válidas, y una agencia grande puede necesitar ambas soluciones simultáneamente.'
                : 'The comparison between KabatOne and Tyler is not really a comparison of equivalent products — it is a comparison of two different strategies. Tyler is the answer to "how do we administer all the digital processes of a local government?". KabatOne is the answer to "how do we operate a modern public safety command center?". Both are valid questions, and a large agency may need both solutions simultaneously.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'La trampa es intentar usar la suite amplia de Tyler para resolver el problema de profundidad operativa. Enterprise CAD es un CAD sólido, pero cubre solo la parte de intake y despacho — no integra video, no unifica GIS operacional con sensores en tiempo real, no coordina tráfico y no tiene los modelos C4/C5. Para un centro de mando moderno, esto significa comprar 4 o 5 sistemas adicionales y gastar meses en proyectos de integración que nunca quedan del todo bien.'
                : 'The trap is trying to use Tyler\'s broad suite to solve the operational depth problem. Enterprise CAD is a solid CAD, but it only covers intake and dispatch — it does not integrate video, does not unify operational GIS with real-time sensors, does not coordinate traffic, and does not have the C4/C5 models. For a modern command center, this means purchasing 4 or 5 additional systems and spending months on integration projects that never quite come together.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne resuelve el problema de profundidad operativa nativamente. Si una agencia grande ya tiene Tyler para ERP municipal y tribunales, KabatOne coexiste perfectamente — se conecta via API al CAD de Tyler cuando es necesario y opera el centro de mando con su stack unificado de video, GIS y tráfico.'
                : 'KabatOne solves the operational depth problem natively. If a large agency already runs Tyler for municipal ERP and courts, KabatOne coexists perfectly — it connects via API to Tyler\'s CAD when needed and operates the command center with its unified video, GIS, and traffic stack.'}
            </p>
          </div>
        </section>

        {/* ── LATAM / C5 SECTION ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Centros C4/C5 en México y Latinoamérica' : 'C4/C5 Command Centers in Mexico and Latin America'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Los centros C4 y C5 en México tienen un modelo operativo que no existe como tal en el mercado estadounidense. Son centros de coordinación multiagencia que reciben llamadas 911, integran miles de cámaras urbanas, botones de pánico ciudadanos, LPR, sensores acústicos y feeds de tráfico en una sola operación — y coordinan respuesta entre policía municipal, estatal, Guardia Nacional, bomberos y protección civil. Ninguna suite gubernamental estadounidense está construida para este modelo.'
                : 'C4 and C5 command centers in Mexico have an operational model that does not exist as such in the US market. They are multi-agency coordination centers that receive 911 calls, integrate thousands of urban cameras, citizen panic buttons, LPR, acoustic sensors, and traffic feeds in one operation — and coordinate response across municipal police, state police, National Guard, fire, and civil protection. No US government suite is built for this model.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne está construido para este modelo desde el inicio. K-Safety unifica el mapa operacional con cámaras, unidades, incidentes y sensores, K-Dispatch soporta jerarquías de despacho multiagencia, K-Video maneja miles de cámaras urbanas con analítica IA, K-Traffic integra con semáforos de la ciudad, y K-Connect permite incorporar cámaras ciudadanas al centro de mando. Está localizado al 100% en español y el equipo tiene experiencia directa en los modelos operativos de C4/C5 en México, Perú, Colombia y Guatemala.'
                : 'KabatOne is built for this model from the start. K-Safety unifies the operational map with cameras, units, incidents, and sensors; K-Dispatch supports multi-agency dispatch hierarchies; K-Video handles thousands of urban cameras with AI analytics; K-Traffic integrates with city traffic signals; and K-Connect brings citizen cameras into the command center. It is 100% Spanish-localized and the team has direct experience with C4/C5 operational models in Mexico, Peru, Colombia, and Guatemala.'}
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
              {es ? 'KabatOne vs Tyler Technologies: Preguntas y Respuestas' : 'KabatOne vs Tyler Technologies: Questions & Answers'}
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
              <Link href="/vs/mark43" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Mark43' : 'KabatOne vs Mark43'}</span>
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
                { href: '/integrations/panic-buttons', label: es ? 'Botones de Pánico' : 'Panic Buttons' },
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
