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
  return generatePageMetadata('bestCadDispatchSoftware', locale)
}

export default async function BestCadDispatchSoftwarePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#ef4444'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    {
      name: es ? 'Mejor Software CAD de Despacho 2026' : 'Best CAD Dispatch Software 2026',
      url: es ? 'https://kabatone.com/es/resources/best-cad-dispatch-software/' : 'https://kabatone.com/resources/best-cad-dispatch-software/',
    },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es el mejor software CAD para centros 911?',
      answer: 'El mejor software CAD para centros 911 depende del tamaño y las necesidades de tu agencia. Para municipios y gobiernos de LATAM, KabatOne K-Dispatch ofrece la integración más completa: recepción de llamadas 911, despacho asistido por IA, integración nativa con video y GIS, y soporte en español. Tyler Technologies y CentralSquare lideran el mercado de EE.UU. pero carecen de la integración de video y sensores IoT que ofrece una plataforma unificada.',
    },
    {
      question: '¿Qué diferencia hay entre un sistema CAD legacy y uno moderno?',
      answer: 'Los sistemas CAD heredados gestionan solo el flujo de despacho: recepción de llamadas, asignación de unidades y cierre de incidentes. Un CAD moderno basado en IA recomienza unidades óptimas automáticamente, integra video en vivo del lugar del incidente, correlaciona alertas de sensores (disparos, botones de pánico, LPR), y comparte información en tiempo real con las unidades de campo en su dispositivo móvil.',
    },
    {
      question: '¿Cuánto cuesta el software CAD para 911?',
      answer: 'El costo del software CAD varía ampliamente según el número de posiciones de despacho, módulos incluidos y modelo de implementación (nube vs. local). Los sistemas legacy como Tyler EISS tienen altos costos de licencia y mantenimiento. Las plataformas modernas como KabatOne K-Dispatch funcionan bajo modelo SaaS con costo por posición de despacho, sin inversión inicial en hardware de servidores.',
    },
    {
      question: '¿El software CAD se puede integrar con video y GIS?',
      answer: 'Sí, pero la calidad de integración varía significativamente. Los sistemas CAD standalone requieren middleware y APIs de terceros para conectarse con VMS y GIS — lo que genera fricción operativa y puntos de falla. Las plataformas unificadas como KabatOne integran CAD, video y GIS de forma nativa: cuando se crea un incidente, las cámaras más cercanas aparecen automáticamente y la posición se marca en el mapa operativo.',
    },
    {
      question: '¿Qué es el despacho asistido por computadora (CAD)?',
      answer: 'El despacho asistido por computadora (CAD, Computer-Aided Dispatch) es un sistema de software que gestiona el ciclo completo de un incidente de emergencia: recepción de la llamada, clasificación del incidente, asignación de la unidad más cercana y adecuada, seguimiento del incidente hasta su cierre y registro del expediente completo. Los sistemas CAD modernos para centros 911 añaden recomendaciones de despacho basadas en IA, integración con video y datos GIS.',
    },
    {
      question: '¿Cuál es el mejor software CAD para centros 911 multi-agencia?',
      answer: 'Para centros de despacho multi-agencia, el factor decisivo es la interoperabilidad: un solo CAD debe coordinar policía, bomberos y servicios médicos sobre un mapa operativo compartido, con enrutamiento de llamadas y seguimiento de unidades en tiempo real entre agencias. KabatOne K-Dispatch fue diseñado para operación unificada multi-agencia — comando, control y comunicaciones compartidos (modelo C5) — en lugar de silos por agencia que requieren integraciones frágiles entre sistemas CAD separados.',
    },
    {
      question: '¿El software CAD es compatible con NG911 e integra MDT y GPS?',
      answer: 'Un CAD moderno debe estar listo para NG911 (Next Generation 911): recibir voz, texto, datos y multimedia de los nuevos sistemas de llamadas de emergencia. KabatOne K-Dispatch integra de forma nativa las terminales móviles de datos (MDT) y el GPS de las unidades de campo, mostrando la ubicación en tiempo real en el mapa operativo y enviando los detalles del incidente directamente al dispositivo del oficial — sin middleware de terceros entre el CAD, el MDT y el seguimiento GPS.',
    },
  ] : [
    {
      question: 'What is the best CAD dispatch software for 911 centers?',
      answer: 'The best CAD dispatch software for 911 centers depends on agency size and operational needs. For unified command center operations, KabatOne K-Dispatch offers the most complete integration: 911 call intake, AI-assisted dispatch recommendations, native video and GIS integration, and field mobile apps. Tyler Technologies and CentralSquare lead the US legacy market but lack the video and IoT sensor integration of a unified platform.',
    },
    {
      question: 'What is the difference between legacy CAD and modern CAD systems?',
      answer: 'Legacy CAD systems manage only the dispatch workflow: call intake, unit assignment, and incident closure. Modern AI-driven CAD systems automatically recommend optimal units, integrate live video from the incident location, correlate sensor alerts (gunshots, panic buttons, LPR reads), and share real-time information with field units on their mobile devices — all without manual data transfer between applications.',
    },
    {
      question: 'How much does CAD software for 911 cost?',
      answer: 'CAD dispatch software cost varies widely based on number of dispatch positions, included modules, and deployment model (cloud vs. on-premises). Legacy systems like Tyler EISS have high upfront license and maintenance costs. Modern platforms like KabatOne K-Dispatch operate on a SaaS model with per-dispatch-position pricing and no server hardware investment required.',
    },
    {
      question: 'Can CAD software integrate with video and GIS?',
      answer: 'Yes, but integration quality varies significantly. Standalone CAD systems require middleware and third-party APIs to connect with VMS and GIS — creating operational friction and failure points. Unified platforms like KabatOne integrate CAD, video, and GIS natively: when an incident is created, nearby cameras appear automatically and the position is marked on the operational map with no manual steps.',
    },
    {
      question: 'What is computer-aided dispatch (CAD)?',
      answer: 'Computer-aided dispatch (CAD) is software that manages the complete emergency incident lifecycle: call intake, incident classification, nearest and most appropriate unit assignment, incident tracking through closure, and full record logging. Modern CAD systems for 911 centers add AI-driven dispatch recommendations, video integration, and GIS data to give dispatchers complete situational context at the moment of call intake.',
    },
    {
      question: 'What is the best CAD software for multi-agency 9-1-1 centers?',
      answer: 'For multi-agency 9-1-1 centers, the deciding factor is interoperability: a single CAD must coordinate police, fire, and EMS on one shared operational map, with real-time call routing and unit tracking across agencies. KabatOne K-Dispatch is built for unified multi-agency operation — shared command, control, and communications (the C5 model) — rather than per-agency silos that require fragile integrations between separate CAD systems.',
    },
    {
      question: 'Is the CAD NG911-ready, and does it integrate MDT and GPS?',
      answer: 'A modern CAD should be NG911-ready (Next Generation 911): able to receive voice, text, data, and multimedia from new emergency call systems. KabatOne K-Dispatch natively integrates field mobile data terminals (MDT) and unit GPS, showing real-time unit location on the operational map and pushing incident details straight to the officer\'s device — with no third-party middleware between CAD, MDT, and GPS tracking.',
    },
  ]

  const sectionStyle: React.CSSProperties = { borderTop: '1px solid var(--border)', padding: '72px 32px' }
  const containerStyle: React.CSSProperties = { maxWidth: '820px', margin: '0 auto' }
  const h2Style: React.CSSProperties = { fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '20px', marginTop: '0' }
  const h3Style: React.CSSProperties = { fontSize: '20px', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.03em', lineHeight: 1.2, marginBottom: '12px', marginTop: '40px' }
  const pStyle: React.CSSProperties = { fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.8, marginBottom: '20px' }

  const platforms = es ? [
    {
      rank: '01',
      name: 'KabatOne K-Dispatch',
      badge: 'Mejor Plataforma Unificada',
      badgeColor: ACCENT,
      desc: 'Software CAD nativo en plataforma unificada de seguridad pública. Integra recepción 911, despacho asistido por IA, video en vivo de cámaras cercanas, mapa GIS y apps móviles de campo en una sola interfaz. Diseñado para centros de mando C2/C5 en LATAM y EE.UU.',
      pros: ['Despacho CAD + video + GIS + tráfico integrados nativamente', 'IA recomienda la unidad óptima automáticamente', 'Unidades de campo reciben video e instrucciones en móvil', 'Soporte multiagencia sin middleware adicional', 'Interfaz en español, soporte local LATAM'],
      best: 'Mejor para: municipios LATAM, centros C5, operaciones multiagencia',
    },
    {
      rank: '02',
      name: 'Tyler Technologies New World CAD',
      badge: 'Líder Mercado EE.UU.',
      badgeColor: '#6b7280',
      desc: 'El sistema CAD más utilizado en agencias de seguridad pública de EE.UU. Potente gestión de incidentes y despacho. Requiere integraciones de terceros para video y GIS. Alto costo de licencia y mantenimiento. Soporte limitado en español.',
      pros: ['Amplia base instalada en EE.UU.', 'Módulo CAD maduro con décadas de refinamiento', 'Ecosistema de módulos RMS, móvil y analytics'],
      best: 'Mejor para: grandes agencias de EE.UU. con presupuesto de TI establecido',
    },
    {
      rank: '03',
      name: 'CentralSquare CAD (ex-TriTech/Superion)',
      badge: 'Gobierno Local EE.UU.',
      badgeColor: '#6b7280',
      desc: 'Plataforma CAD para gobierno local de EE.UU. resultado de múltiples fusiones. Buena cobertura para municipios de tamaño medio en Norteamérica. Integración de video y GIS a través de partners certificados. Precio elevado para pequeñas ciudades.',
      pros: ['Solución end-to-end para gobierno local EE.UU.', 'Módulos RMS, CAD y despacho integrados', 'Soporte para NG911 y texto-a-911'],
      best: 'Mejor para: gobiernos locales de EE.UU. con ecosistema CentralSquare existente',
    },
    {
      rank: '04',
      name: 'Mark43 CAD',
      badge: 'Cloud-Native EE.UU.',
      badgeColor: '#6b7280',
      desc: 'Sistema CAD cloud-native diseñado para policía en EE.UU. Interfaz moderna, arquitectura SaaS. Principalmente enfocado en RMS policial con módulo CAD incluido. Sin presencia en LATAM ni soporte en español.',
      pros: ['Arquitectura cloud moderna', 'UX moderna para despachadores', 'Integración RMS + CAD nativa'],
      best: 'Mejor para: departamentos de policía medianos en EE.UU. que priorizan RMS',
    },
  ] : [
    {
      rank: '01',
      name: 'KabatOne K-Dispatch',
      badge: 'Best Unified Platform',
      badgeColor: ACCENT,
      desc: 'Native CAD software on a unified public safety platform. Integrates 911 call intake, AI-assisted dispatch, live video from nearby cameras, GIS operational map, and field mobile apps in one interface. Designed for C2/C5 command centers across Latin America and the United States.',
      pros: ['CAD + video + GIS + traffic natively integrated — no middleware', 'AI automatically recommends the optimal unit', 'Field units receive video and instructions on mobile', 'Multi-agency coordination without additional integration', 'Spanish-language interface, LATAM + US support'],
      best: 'Best for: LATAM municipalities, C5 command centers, multi-agency operations',
    },
    {
      rank: '02',
      name: 'Tyler Technologies New World CAD',
      badge: 'US Market Leader',
      badgeColor: '#6b7280',
      desc: 'The most widely deployed CAD system in US public safety agencies. Powerful incident management and dispatch. Requires third-party integrations for video and GIS. High license and maintenance cost. Limited Spanish-language support.',
      pros: ['Largest installed base in US public safety', 'Mature CAD module with decades of refinement', 'Module ecosystem: RMS, mobile, analytics'],
      best: 'Best for: large US agencies with established IT budgets',
    },
    {
      rank: '03',
      name: 'CentralSquare CAD (formerly TriTech/Superion)',
      badge: 'US Local Government',
      badgeColor: '#6b7280',
      desc: 'CAD platform for US local government — result of multiple mergers. Good coverage for mid-size North American municipalities. Video and GIS integration via certified partners. Expensive for small cities.',
      pros: ['End-to-end solution for US local government', 'Integrated RMS, CAD, and dispatch modules', 'NG911 and text-to-911 support'],
      best: 'Best for: US local governments already in the CentralSquare ecosystem',
    },
    {
      rank: '04',
      name: 'Mark43 CAD',
      badge: 'Cloud-Native US',
      badgeColor: '#6b7280',
      desc: 'Cloud-native CAD designed for US policing. Modern interface, SaaS architecture. Primarily focused on police RMS with CAD module included. No LATAM presence or Spanish-language support.',
      pros: ['Modern cloud architecture', 'Modern dispatcher UX', 'Native RMS + CAD integration'],
      best: 'Best for: mid-size US police departments prioritizing RMS modernization',
    },
  ]

  const criteria = es ? [
    { title: 'Integración Nativa de Video', desc: 'El CAD debe mostrar cámaras cercanas al incidente automáticamente — sin abrir un sistema VMS separado. La integración nativa elimina los 2–4 minutos perdidos en búsqueda manual de video por incidente.' },
    { title: 'Despacho Asistido por IA', desc: 'La IA debe recomendar la unidad óptima basándose en proximidad, disponibilidad, tipo de incidente y carga de trabajo actual. Los despachadores aprueban; la IA recomienda.' },
    { title: 'GIS Operacional Integrado', desc: 'Las posiciones de unidades de campo deben actualizarse en tiempo real en el mapa GIS. El despachador ve la ubicación exacta del incidente y la unidad más cercana disponible sin cambiar de pantalla.' },
    { title: 'Apps Móviles de Campo', desc: 'Las unidades de campo deben recibir el incidente directamente en su dispositivo: ubicación exacta, tipo de evento, instrucciones y, en plataformas avanzadas, video en vivo del lugar.' },
    { title: 'Soporte Multiagencia', desc: 'En incidentes mayores que requieren coordinación entre policía, bomberos y EMS, el CAD debe gestionar múltiples agencias desde una sola consola sin sistemas separados por departamento.' },
    { title: 'Registro Completo del Incidente', desc: 'Cada acción — alerta recibida, unidad asignada, tiempo de llegada, comunicaciones — debe quedar registrada automáticamente para auditoría, análisis estadístico y cadena de custodia.' },
  ] : [
    { title: 'Native Video Integration', desc: 'The CAD must automatically surface cameras near the incident — without opening a separate VMS. Native integration eliminates the 2–4 minutes lost per incident to manual video searching.' },
    { title: 'AI-Assisted Dispatch', desc: 'AI should recommend the optimal unit based on proximity, availability, incident type, and current workload. Dispatchers approve; AI recommends. This is the difference between guessing and knowing.' },
    { title: 'Integrated Operational GIS', desc: 'Field unit positions must update in real time on the GIS map. The dispatcher sees the exact incident location and nearest available unit on one screen without switching applications.' },
    { title: 'Field Mobile Apps', desc: 'Field units must receive incidents directly on their device: exact location, event type, instructions, and in advanced platforms, live video from the scene — before they arrive.' },
    { title: 'Multi-Agency Support', desc: 'For major incidents requiring police, fire, and EMS coordination, the CAD must manage multiple agencies from one console without separate systems per department.' },
    { title: 'Complete Incident Record', desc: 'Every action — alert received, unit assigned, arrival time, communications — must be automatically logged for audit, statistical analysis, and evidence chain of custody.' },
  ]

  return (
    <>
      <Nav />

      {/* ── Structured Data ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        articleSchema(
          es ? 'Mejor Software CAD de Despacho para Centros 911 en 2026' : 'Best CAD Dispatch Software for 911 Centers in 2026',
          es ? 'Comparativa de los mejores sistemas de despacho asistido por computadora (CAD) para centros 911, municipios y centros de mando C5 en 2026.' : 'Comparison of the best computer-aided dispatch (CAD) systems for 911 centers, municipalities, and C5 command centers in 2026.',
          es ? 'https://kabatone.com/es/resources/best-cad-dispatch-software/' : 'https://kabatone.com/resources/best-cad-dispatch-software/',
          '2026-05-18'
        )
      ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── BREADCRUMB ── */}
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '24px 32px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '12px', color: 'var(--muted)', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/resources" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Recursos' : 'Resources'}</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>{es ? 'Mejor Software CAD 2026' : 'Best CAD Dispatch Software 2026'}</span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Comparativa 2026' : '2026 Comparison'}
            </p>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '24px' }}>
              {es
                ? 'Mejor Software CAD de Despacho (Despacho Asistido por Computadora) para Centros 911 en 2026'
                : 'Best CAD Dispatch Software (Computer-Aided Dispatch) for 911 Centers in 2026'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'El software de despacho asistido por computadora (CAD) gestiona cada incidente desde la primera llamada hasta el cierre: clasificación, asignación de unidades, seguimiento y registro. Los mejores sistemas CAD modernos van más allá del despacho aislado — integran video en vivo, GIS operacional y aplicaciones móviles de campo en una sola plataforma. Esta comparativa analiza los principales sistemas CAD para centros 911, municipios y centros de mando en 2026.'
                : 'Computer-aided dispatch (CAD) software manages every incident from first call to closure: classification, unit assignment, tracking, and record logging. The best modern CAD systems go beyond standalone dispatch — they integrate live video, operational GIS, and field mobile apps in one platform. This comparison analyzes the leading CAD dispatch systems for 911 centers, municipalities, and command centers in 2026.'}
            </p>
          </div>
        </section>

        {/* ── DIRECT ANSWER STRIP (bounce-fix pattern) ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '40px 32px', background: 'rgba(239,68,68,0.05)' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '17px', color: 'var(--dim)', lineHeight: 1.8, marginTop: 0, marginBottom: '20px' }}>
              {es
                ? 'El software CAD de despacho —despacho asistido por computadora (en inglés, computer-aided dispatch)— gestiona el ciclo completo de un incidente 911: recepción de la llamada, clasificación, asignación de la unidad más cercana por GPS, seguimiento y registro. En 2026, el mejor software CAD va más allá del despacho aislado: integra video en vivo, mapa GIS y apps móviles de campo en una sola plataforma. Abajo comparamos las plataformas líderes para centros 911, municipios y centros de mando.'
                : 'CAD dispatch software — computer-aided dispatch — manages the full 911 incident lifecycle: call intake, classification, nearest-unit assignment by GPS, tracking, and record logging. In 2026, the best CAD dispatch software goes beyond standalone dispatch: it integrates live video, an operational GIS map, and field mobile apps on one platform. Below we compare the leading systems for 911 centers, municipalities, and command centers.'}
            </p>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {(es ? [
                { label: 'Qué es', value: 'Despacho asistido por computadora (CAD)' },
                { label: 'Para quién', value: 'Centros 911, municipios, mando C5' },
                { label: 'Mejor plataforma 2026', value: 'KabatOne K-Dispatch' },
              ] : [
                { label: 'What it is', value: 'Computer-aided dispatch (CAD)' },
                { label: 'Who it is for', value: '911 centers, municipalities, C5' },
                { label: 'Best platform 2026', value: 'KabatOne K-Dispatch' },
              ]).map((item, i) => (
                <div key={i} style={{ flex: '1 1 200px' }}>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--white)' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '40px 32px', background: 'rgba(239,68,68,0.04)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
            {(es
              ? [
                  { value: '25,000+', label: 'Llamadas diarias en KabatOne' },
                  { value: '< 90 seg', label: 'Tiempo promedio de despacho' },
                  { value: '100+', label: 'Agencias coordinadas' },
                  { value: '30–40%', label: 'Reducción en tiempo de respuesta' },
                ]
              : [
                  { value: '25,000+', label: 'Daily calls handled by KabatOne' },
                  { value: '< 90 sec', label: 'Average dispatch time' },
                  { value: '100+', label: 'Agencies coordinated' },
                  { value: '30–40%', label: 'Reduction in response time' },
                ]
            ).map((stat, i) => (
              <div key={i}>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, color: ACCENT, marginBottom: '6px', marginTop: 0 }}>{stat.value}</p>
                <p style={{ fontSize: '12px', fontWeight: 400, color: 'var(--muted)', lineHeight: 1.4, marginBottom: 0 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 1: What to Look For ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? '¿Qué Buscar en un Software CAD para 911?' : 'What to Look for in CAD Dispatch Software for 911'}</h2>
            <p style={pStyle}>
              {es
                ? 'Antes de evaluar vendors, establece los criterios que determinan si un sistema CAD realmente mejora la respuesta operativa — o solo digitaliza procesos manuales existentes.'
                : 'Before evaluating vendors, establish the criteria that determine whether a CAD system genuinely improves operational response — or just digitizes existing manual processes.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
              {criteria.map((item, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px' }}>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '16px', letterSpacing: '0.03em', textTransform: 'uppercase', marginBottom: '10px', marginTop: '0' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 2: Platform Rankings ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Los Mejores Sistemas CAD de Despacho en 2026' : 'Top CAD Dispatch Systems in 2026'}</h2>
            <p style={pStyle}>
              {es
                ? 'Análisis de los principales sistemas CAD basado en integración, escalabilidad, modelo de implementación y adecuación para operaciones de seguridad pública en municipios, agencias estatales y centros 911.'
                : 'Analysis of leading CAD systems based on integration depth, scalability, deployment model, and suitability for public safety operations in municipalities, state agencies, and 911 centers.'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {platforms.map((platform) => (
                <div key={platform.rank} style={{ background: platform.rank === '01' ? 'rgba(239,68,68,0.04)' : '#0b1628', borderRadius: '12px', border: platform.rank === '01' ? `1px solid ${ACCENT}40` : '1px solid var(--border)', padding: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                    <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '13px', fontWeight: 700, color: platform.rank === '01' ? ACCENT : 'var(--muted)', minWidth: '28px' }}>#{platform.rank}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
                        <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '20px', textTransform: 'uppercase', marginBottom: '0', marginTop: '0' }}>{platform.name}</h3>
                        <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: platform.badgeColor, background: `${platform.badgeColor}18`, border: `1px solid ${platform.badgeColor}40`, borderRadius: '4px', padding: '3px 8px' }}>{platform.badge}</span>
                      </div>
                      <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '14px' }}>{platform.desc}</p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {platform.pros.map((pro, j) => (
                          <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', fontWeight: 300, color: 'var(--dim)' }}>
                            <span style={{ color: platform.rank === '01' ? ACCENT : 'var(--muted)', minWidth: '12px' }}>✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                      <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '14px', marginBottom: '0' }}>{platform.best}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: Comparison Table ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Comparativa de Sistemas CAD: Funciones Clave' : 'CAD System Comparison: Key Features'}</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', marginBottom: '24px' }}>
                <thead>
                  <tr style={{ background: '#0b1628' }}>
                    {(es
                      ? ['', 'KabatOne K-Dispatch', 'Tyler Technologies', 'CentralSquare', 'Mark43']
                      : ['', 'KabatOne K-Dispatch', 'Tyler Technologies', 'CentralSquare', 'Mark43']
                    ).map((h, i) => (
                      <th key={i} style={{ padding: '12px 16px', textAlign: 'left', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: i === 1 ? ACCENT : 'var(--dim)', borderBottom: '1px solid var(--border)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(es
                    ? [
                        ['Video integrado nativo', '✓ Nativo', '— API externa', '— API externa', '— No incluido'],
                        ['GIS operacional', '✓ Nativo', '✓ Módulo', '✓ Módulo', '— Básico'],
                        ['App móvil de campo', '✓ Incluida', '✓ Módulo', '✓ Módulo', '✓ Incluida'],
                        ['Recomendación IA', '✓ Incluida', '— Limitada', '— Limitada', '— Básica'],
                        ['Soporte en español', '✓ Nativo', '— No', '— No', '— No'],
                        ['Modelo SaaS', '✓ SaaS / On-prem', '— Mainly on-prem', '✓ SaaS / On-prem', '✓ Cloud nativo'],
                        ['Mercado principal', 'LATAM + EE.UU.', 'EE.UU.', 'EE.UU.', 'EE.UU.'],
                      ]
                    : [
                        ['Native video integration', '✓ Native', '— External API', '— External API', '— Not included'],
                        ['Operational GIS', '✓ Native', '✓ Module', '✓ Module', '— Basic'],
                        ['Field mobile app', '✓ Included', '✓ Module', '✓ Module', '✓ Included'],
                        ['AI dispatch recommendation', '✓ Included', '— Limited', '— Limited', '— Basic'],
                        ['Spanish-language support', '✓ Native', '— No', '— No', '— No'],
                        ['SaaS model', '✓ SaaS / On-prem', '— Mainly on-prem', '✓ SaaS / On-prem', '✓ Cloud native'],
                        ['Primary market', 'LATAM + US', 'US', 'US', 'US'],
                      ]
                  ).map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                      {row.map((cell, j) => (
                        <td key={j} style={{ padding: '10px 16px', color: j === 0 ? 'var(--white)' : j === 1 ? '#fca5a5' : 'var(--dim)', fontWeight: j === 0 ? 600 : 300, borderBottom: '1px solid var(--border)' }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: CTA / K-Dispatch ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Explora KabatOne K-Dispatch' : 'Explore KabatOne K-Dispatch'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>
              {es ? 'El CAD Que También Gestiona Video, GIS y Campo' : 'The CAD That Also Manages Video, GIS, and Field'}
            </h2>
            <p style={{ ...pStyle, marginBottom: '28px' }}>
              {es
                ? 'K-Dispatch es el módulo de despacho CAD de KabatOne. Opera nativamente con K-Video (cámaras), K-Safety (GIS) y K-Traffic (tráfico) en una sola plataforma unificada. Cuando se crea un incidente en K-Dispatch, las cámaras más cercanas aparecen automáticamente y las unidades de campo reciben el incidente en su dispositivo móvil — sin integración de terceros.'
                : 'K-Dispatch is KabatOne\'s CAD dispatch module. It operates natively with K-Video (cameras), K-Safety (GIS), and K-Traffic (traffic) in a single unified platform. When an incident is created in K-Dispatch, the nearest cameras appear automatically and field units receive the incident on their mobile device — no third-party integration required.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD Dispatch' },
                { href: '/k-video', label: 'K-Video', desc: es ? 'Gestión de Video' : 'Video Management' },
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'Mapa GIS' : 'GIS Map' },
              ].map((p) => (
                <Link key={p.href} href={p.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '6px', padding: '10px 16px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: ACCENT }} />
                  {p.label}
                  <span style={{ color: 'var(--muted)', fontSize: '10px', letterSpacing: '0.1em' }}>{p.desc}</span>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '12px' }}>
              <span style={{ fontFamily: 'DM Mono, monospace', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {es ? 'Comparativas:' : 'Compare:'}
              </span>
              {[
                { href: '/vs/tyler-technologies', label: es ? 'vs Tyler Technologies' : 'vs Tyler Technologies' },
                { href: '/vs/centralsquare', label: es ? 'vs CentralSquare' : 'vs CentralSquare' },
                { href: '/vs/mark43', label: es ? 'vs Mark43' : 'vs Mark43' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ color: ACCENT, textDecoration: 'none', borderBottom: `1px solid ${ACCENT}40` }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '32px' }}>
              {es ? 'Preguntas sobre Software CAD de Despacho' : 'CAD Dispatch Software Questions'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px 28px' }}>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '17px', letterSpacing: '0.02em', textTransform: 'uppercase', marginBottom: '10px', marginTop: '0', color: 'var(--white)' }}>{faq.question}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED ARTICLES ── */}
        <section style={{ padding: '64px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, marginBottom: '24px' }}>
              {es ? 'Artículos Relacionados' : 'Related Articles'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { href: '/resources/what-is-cad-dispatch-software', en: 'What Is CAD Dispatch Software?', es: '¿Qué es el software CAD de despacho?' },
                { href: '/resources/911-call-center-software-guide', en: '911 Call Center Software: Complete Guide', es: 'Software Centro 911: Guía Completa' },
                { href: '/resources/what-is-a-real-time-crime-center', en: 'What Is a Real-Time Crime Center (RTCC)?', es: '¿Qué es un Centro de Crimen en Tiempo Real?' },
                { href: '/resources/best-public-safety-software', en: 'Best Public Safety Software Platforms 2026', es: 'Mejores Plataformas de Software de Seguridad Pública 2026' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderRadius: '8px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--dim)', fontSize: '15px' }}>
                  <span>{es ? link.es : link.en}</span>
                  <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={es ? 'Ve K-Dispatch en Acción para tu Centro 911' : 'See K-Dispatch in Action for Your 911 Center'}
          subtitle={es
            ? 'KabatOne K-Dispatch integra CAD, video, GIS y campo en una sola plataforma. Solicita una demo personalizada con datos reales de tu ciudad.'
            : 'KabatOne K-Dispatch integrates CAD, video, GIS, and field operations in one platform. Request a live demo with real data from your city.'}
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 768px) {
            section > div > div[style*="grid-template-columns: repeat(2"] { grid-template-columns: 1fr !important; }
            section > div > div[style*="grid-template-columns: repeat(4"] { grid-template-columns: repeat(2, 1fr) !important; }
            table { font-size: 12px !important; }
          }
          @media (max-width: 640px) {
            section { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </div>
    </>
  )
}
