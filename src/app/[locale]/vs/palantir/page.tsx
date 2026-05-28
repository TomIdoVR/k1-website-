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
  return generatePageMetadata('vsPalantir', locale)
}

export default async function VsPalantirPage({
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
    { name: 'KabatOne vs Palantir', url: es ? 'https://kabatone.com/es/vs/palantir/' : 'https://kabatone.com/vs/palantir/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre KabatOne y Palantir Gotham?',
      answer: 'Palantir Gotham es una plataforma de inteligencia y análisis de datos — agrega fuentes de información heterogéneas, construye grafos de relaciones, detecta patrones y apoya el análisis de investigación criminal y contraterrorismo. Es una herramienta de analistas e investigadores. KabatOne es una plataforma de operaciones en tiempo real — conecta cámaras, sensores, CAD de despacho y unidades de campo en un flujo operativo unificado para centros de mando. Palantir pregunta "¿qué está pasando?"; KabatOne ejecuta la respuesta.',
    },
    {
      question: '¿KabatOne reemplaza a Palantir?',
      answer: 'No son sustitutos directos. Palantir Gotham opera en el tiempo de la inteligencia — análisis retrospectivo, identificación de patrones, investigación criminal. KabatOne opera en el tiempo de la respuesta — los próximos 90 segundos de un incidente activo. Una agencia grande puede usar ambos: Palantir para análisis predictivo e investigación, KabatOne para operaciones en tiempo real y coordinación de respuesta. Para ciudades y municipios que no tienen (y no pueden pagar) Palantir, KabatOne cubre las necesidades operativas de un centro de mando moderno.',
    },
    {
      question: '¿Qué hace Palantir Gotham?',
      answer: 'Palantir Gotham es la plataforma de inteligencia operativa de Palantir Technologies, orientada a agencias de seguridad, defensa e inteligencia. Integra datos de múltiples fuentes heterogéneas (bases de datos de crimen, intercepción de comunicaciones, registros financieros, feeds de sensores), construye grafos de entidades y relaciones, y permite a los analistas visualizar conexiones no obvias para apoyar investigaciones complejas. Es una herramienta de alto precio y alta complejidad, diseñada para agencias con equipos dedicados de analistas de inteligencia.',
    },
    {
      question: '¿Palantir es adecuado para municipios y centros C4/C5?',
      answer: 'Palantir Gotham está orientado a agencias nacionales de inteligencia, grandes fuerzas de seguridad federal y clientes de defensa. El precio, la complejidad de implementación y el perfil de usuario (analistas de inteligencia especializados) lo hacen poco práctico para la mayoría de municipios. KabatOne está construido específicamente para el modelo operativo de ciudades y centros C4/C5 — despacho 911, gestión de cámaras urbanas, botones de pánico, LPR, coordinación multiagencia — con localización en español y experiencia directa en el mercado LATAM.',
    },
    {
      question: '¿KabatOne tiene capacidades analíticas?',
      answer: 'KabatOne incluye analítica IA dentro del flujo operativo: K-Video aplica analítica de video para detectar objetos, comportamientos y anomalías en tiempo real; K-Safety cruza incidentes, unidades y sensores en el mapa operacional; K-Dispatch analiza la disponibilidad y proximidad de unidades para recomendar el mejor recurso. No es una plataforma de investigación retroactiva como Palantir, sino analítica aplicada directamente al flujo de respuesta.',
    },
    {
      question: '¿Cuál es el precio de Palantir vs KabatOne?',
      answer: 'Palantir no publica precios públicamente; los contratos típicos de Palantir Gotham con agencias gubernamentales van desde millones de dólares al año, con costos de implementación, entrenamiento especializado y equipos de ingeniería dedicados. KabatOne opera como SaaS con precios adaptados al tamaño y capacidades del municipio, sin hardware propietario y con implementación asistida. Para ciudades de tamaño medio en Latinoamérica, KabatOne ofrece capacidades operativas de clase mundial a una fracción del costo de una plataforma de inteligencia de nivel federal.',
    },
  ] : [
    {
      question: 'What is the difference between KabatOne and Palantir Gotham?',
      answer: 'Palantir Gotham is an intelligence and data analytics platform — it aggregates heterogeneous information sources, builds relationship graphs, detects patterns, and supports criminal investigation and counterterrorism analysis. It is a tool for analysts and investigators. KabatOne is a real-time operations platform — it connects cameras, sensors, CAD dispatch, and field units in a unified operational workflow for command centers. Palantir asks "what is happening?"; KabatOne executes the response.',
    },
    {
      question: 'Does KabatOne replace Palantir?',
      answer: 'They are not direct substitutes. Palantir Gotham operates in intelligence time — retrospective analysis, pattern identification, criminal investigation. KabatOne operates in response time — the next 90 seconds of an active incident. A large agency can use both: Palantir for predictive analytics and investigation, KabatOne for real-time operations and response coordination. For cities and municipalities that do not have (and cannot afford) Palantir, KabatOne covers the operational needs of a modern command center.',
    },
    {
      question: 'What does Palantir Gotham do?',
      answer: 'Palantir Gotham is the operational intelligence platform from Palantir Technologies, oriented toward security agencies, defense, and intelligence. It integrates data from multiple heterogeneous sources (crime databases, communication intercepts, financial records, sensor feeds), builds entity and relationship graphs, and enables analysts to visualize non-obvious connections to support complex investigations. It is a high-price, high-complexity tool designed for agencies with dedicated teams of intelligence analysts.',
    },
    {
      question: 'Is Palantir suitable for municipalities and C4/C5 centers?',
      answer: 'Palantir Gotham is oriented toward national intelligence agencies, large federal security forces, and defense clients. The price, implementation complexity, and user profile (specialized intelligence analysts) make it impractical for most municipalities. KabatOne is built specifically for the operational model of cities and C4/C5 centers — 911 dispatch, urban camera management, panic buttons, LPR, multi-agency coordination — with Spanish localization and direct experience in the LATAM market.',
    },
    {
      question: 'Does KabatOne have analytics capabilities?',
      answer: 'KabatOne includes AI analytics within the operational workflow: K-Video applies video analytics to detect objects, behaviors, and anomalies in real time; K-Safety cross-references incidents, units, and sensors on the operational map; K-Dispatch analyzes unit availability and proximity to recommend the best resource. It is not a retroactive investigation platform like Palantir, but analytics applied directly to the response workflow.',
    },
    {
      question: 'What is the price of Palantir vs KabatOne?',
      answer: 'Palantir does not publish public pricing; typical Palantir Gotham contracts with government agencies run from millions of dollars per year, with implementation costs, specialized training, and dedicated engineering teams. KabatOne operates as SaaS with pricing adapted to municipality size and capabilities, with no proprietary hardware and assisted implementation. For mid-size cities in Latin America, KabatOne delivers world-class operational capabilities at a fraction of the cost of a federal-level intelligence platform.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Tipo de plataforma',
      palantir: 'Inteligencia y análisis de datos (retrospectivo)',
      kabatone: 'Operaciones en tiempo real y respuesta a incidentes',
    },
    {
      category: 'Usuario principal',
      palantir: 'Analistas de inteligencia e investigadores',
      kabatone: 'Operadores de centro de mando, despachadores, supervisores',
    },
    {
      category: 'Tiempo de operación',
      palantir: 'Análisis retrospectivo y predictivo',
      kabatone: 'Los próximos 90 segundos — respuesta en tiempo real',
    },
    {
      category: 'Gestión de video',
      palantir: 'No incluida — integración de datos de video posible',
      kabatone: 'K-Video nativo — cualquier fabricante, analítica IA',
    },
    {
      category: 'Despacho / CAD',
      palantir: 'No incluido',
      kabatone: 'K-Dispatch nativo, integrado con video, GIS y tráfico',
    },
    {
      category: 'GIS / Mapa operacional',
      palantir: 'Visualización geoespacial de datos de inteligencia',
      kabatone: 'K-Safety — GIS operacional con incidentes, unidades y sensores en vivo',
    },
    {
      category: 'Mercado objetivo',
      palantir: 'Agencias federales, defensa, inteligencia nacional',
      kabatone: 'Municipios, ciudades, centros C4/C5, aeropuertos, estadios',
    },
    {
      category: 'Presencia LATAM',
      palantir: 'Algunos contratos federales — no en municipios',
      kabatone: '40+ ciudades, localización completa en español, modelo C4/C5',
    },
    {
      category: 'Modelo de precio',
      palantir: 'Contratos multi-millonarios anuales',
      kabatone: 'SaaS adaptado al municipio — sin hardware propietario',
    },
  ] : [
    {
      category: 'Platform type',
      palantir: 'Intelligence and data analytics (retrospective)',
      kabatone: 'Real-time operations and incident response',
    },
    {
      category: 'Primary user',
      palantir: 'Intelligence analysts and investigators',
      kabatone: 'Command center operators, dispatchers, supervisors',
    },
    {
      category: 'Operating timeframe',
      palantir: 'Retrospective and predictive analysis',
      kabatone: 'The next 90 seconds — real-time response',
    },
    {
      category: 'Video management',
      palantir: 'Not included — video data integration possible',
      kabatone: 'K-Video native — any manufacturer, AI analytics',
    },
    {
      category: 'Dispatch / CAD',
      palantir: 'Not included',
      kabatone: 'K-Dispatch native, integrated with video, GIS, and traffic',
    },
    {
      category: 'GIS / Operational map',
      palantir: 'Geospatial visualization of intelligence data',
      kabatone: 'K-Safety — operational GIS with live incidents, units, and sensors',
    },
    {
      category: 'Target market',
      palantir: 'Federal agencies, defense, national intelligence',
      kabatone: 'Municipalities, cities, C4/C5 centers, airports, stadiums',
    },
    {
      category: 'LATAM presence',
      palantir: 'Some federal contracts — not in municipalities',
      kabatone: '40+ cities, full Spanish localization, C4/C5 model',
    },
    {
      category: 'Pricing model',
      palantir: 'Multi-million dollar annual contracts',
      kabatone: 'SaaS adapted to municipality size — no proprietary hardware',
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
          <span style={{ color: ACCENT }}>KabatOne vs Palantir</span>
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
              ? 'KabatOne vs Palantir Gotham — Operaciones en Tiempo Real vs Plataforma de Inteligencia'
              : 'KabatOne vs Palantir Gotham — Real-Time Operations vs Intelligence Platform'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'Palantir Gotham analiza lo que ocurrió — agrega datos, construye grafos de relaciones y apoya la inteligencia investigativa. KabatOne coordina lo que está ocurriendo ahora — conecta cámaras, sensores, CAD y unidades en el flujo de respuesta de los próximos 90 segundos. Son capas diferentes, pero complementarias, de la seguridad pública moderna.'
              : 'Palantir Gotham analyzes what happened — it aggregates data, builds relationship graphs, and supports investigative intelligence. KabatOne coordinates what is happening right now — it connects cameras, sensors, CAD, and units in the response workflow of the next 90 seconds. They are different, but complementary, layers of modern public safety.'}
          </p>
        </section>

        {/* ── WHAT IS PALANTIR? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es Palantir Gotham?' : 'What Is Palantir Gotham?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Palantir Technologies fue fundada en 2003 con capital inicial de la CIA y se convirtió en el proveedor de software de análisis de inteligencia de referencia para agencias federales de EE.UU., OTAN y gobiernos aliados. Palantir Gotham es su plataforma para operaciones de seguridad e inteligencia — diseñada para integrar y fusionar grandes volúmenes de datos de fuentes heterogéneas y permitir a los analistas descubrir patrones, conexiones y amenazas ocultas.'
                : 'Palantir Technologies was founded in 2003 with initial CIA funding and became the reference provider of intelligence analysis software for US federal agencies, NATO, and allied governments. Palantir Gotham is its platform for security and intelligence operations — designed to integrate and fuse large volumes of data from heterogeneous sources and enable analysts to discover hidden patterns, connections, and threats.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El caso de uso central de Palantir Gotham es el análisis de inteligencia: tomar registros criminales, intercepción de comunicaciones, datos financieros, informes de campo e inteligencia de fuentes abiertas, fusionarlos en un grafo de entidades y relaciones, y presentarlos a analistas que buscan conexiones entre actores de amenazas. También tiene casos de uso en contraterrorismo, análisis de redes criminales y apoyo a operaciones militares.'
                : 'The core use case for Palantir Gotham is intelligence analysis: taking criminal records, communication intercepts, financial data, field reports, and open-source intelligence, fusing them into an entity and relationship graph, and presenting them to analysts looking for connections between threat actors. It also has use cases in counterterrorism, criminal network analysis, and military operations support.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Palantir Gotham no gestiona operaciones en tiempo real de centros de mando municipales, no despacha unidades, no maneja feeds de video de cámaras urbanas, no coordina tráfico y no tiene la interfaz operativa de un despachador de emergencias. Para ciudades que necesitan operar un centro de mando con respuesta en segundos, Palantir no es la capa correcta.'
                : 'Palantir Gotham does not manage real-time operations of municipal command centers, dispatch units, handle video feeds from urban cameras, coordinate traffic, or have the operational interface of an emergency dispatcher. For cities that need to operate a command center with second-level response, Palantir is not the right layer.'}
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
                ? 'KabatOne es una plataforma unificada de seguridad pública cloud-native construida para la capa de operaciones en tiempo real. Integra gestión de video con analítica IA (K-Video), despacho CAD (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario (K-Connect) en una sola plataforma operativa.'
                : 'KabatOne is a cloud-native unified public safety platform built for the real-time operations layer. It integrates AI-powered video management (K-Video), CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video (K-Connect) in one operational platform.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Cuando llega una llamada al 911, KabatOne integra el intake en K-Dispatch, muestra el incidente en el mapa de K-Safety, abre las cámaras del área en K-Video, recomienda la unidad más cercana con su ETA y permite coordinar la ruta de emergencia con K-Traffic — todo en una pantalla, en segundos. Para un operador de centro de mando, esto es lo que importa: velocidad, integración y claridad en el momento del incidente activo.'
                : 'When a 911 call comes in, KabatOne integrates the intake in K-Dispatch, shows the incident on the K-Safety map, opens the area cameras in K-Video, recommends the nearest unit with its ETA, and enables emergency route coordination with K-Traffic — all in one screen, in seconds. For a command center operator, this is what matters: speed, integration, and clarity at the moment of the active incident.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos en México y Latinoamérica. Para ciudades que necesitan la capa de operaciones en tiempo real — no la capa de inteligencia — KabatOne es la plataforma de referencia en el mercado LATAM.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens in Mexico and Latin America. For cities that need the real-time operations layer — not the intelligence layer — KabatOne is the reference platform in the LATAM market.'}
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
              {es ? 'KabatOne vs Palantir Gotham: Diferencias Clave' : 'KabatOne vs Palantir Gotham: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'Palantir opera en el tiempo de la inteligencia; KabatOne opera en el tiempo de la respuesta. Son capas complementarias, no competidoras directas.'
                : 'Palantir operates in intelligence time; KabatOne operates in response time. They are complementary layers, not direct competitors.'}
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
                  Palantir Gotham
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
                    {row.palantir}
                  </div>
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--dim)', lineHeight: 1.55, borderLeft: '1px solid var(--border)' }}>
                    {row.kabatone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTELLIGENCE VS OPERATIONS ── */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Inteligencia vs Operaciones: Dos Capas Distintas' : 'Intelligence vs Operations: Two Distinct Layers'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Un error conceptual frecuente es asumir que una plataforma de inteligencia cubre también las necesidades operativas de un centro de mando. La inteligencia responde preguntas históricas: ¿quiénes son los actores de amenazas? ¿Cuáles son los patrones de crimen en este barrio? ¿Qué relaciones hay entre estos individuos? Las operaciones responden preguntas de tiempo real: ¿qué está pasando en la cámara 27? ¿Cuál unidad llega antes? ¿Cómo libero el corredor de emergencia?'
                : 'A common conceptual error is assuming that an intelligence platform also covers the operational needs of a command center. Intelligence answers historical questions: who are the threat actors? What are the crime patterns in this neighborhood? What relationships exist between these individuals? Operations answers real-time questions: what is happening on camera 27? Which unit arrives first? How do I clear the emergency corridor?'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Palantir es excelente en la capa de inteligencia. Pero un despachador de 911 no usa Palantir — usa un CAD, un VMS y un GIS operacional. Si esos tres sistemas no están integrados, el operador pierde tiempo valioso coordinando manualmente lo que debería ocurrir automáticamente.'
                : 'Palantir excels at the intelligence layer. But a 911 dispatcher does not use Palantir — they use a CAD, a VMS, and an operational GIS. If those three systems are not integrated, the operator loses valuable time manually coordinating what should happen automatically.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'La arquitectura correcta para una agencia grande puede incluir ambas capas: Palantir o una herramienta de análisis similar para el ciclo de inteligencia, y KabatOne para el ciclo de respuesta operativa. Para ciudades y municipios que necesitan resolver las operaciones del centro de mando sin la complejidad y el costo de una plataforma federal de inteligencia, KabatOne cubre la capa operativa de forma completa.'
                : 'The right architecture for a large agency may include both layers: Palantir or a similar analytics tool for the intelligence cycle, and KabatOne for the operational response cycle. For cities and municipalities that need to solve command center operations without the complexity and cost of a federal intelligence platform, KabatOne fully covers the operational layer.'}
            </p>
          </div>
        </section>

        {/* ── LATAM SECTION ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'La Capa de Operaciones que Falta en LATAM' : 'The Missing Operations Layer in LATAM'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'En México, Colombia, Perú y otros países de la región, la conversación en los centros C4 y C5 rara vez es sobre inteligencia predictiva al estilo Palantir. El reto operativo inmediato es más básico pero igual de crítico: integrar cámaras urbanas con el despacho 911, gestionar incidentes multiagencia en tiempo real y reducir el tiempo de respuesta.'
                : 'In Mexico, Colombia, Peru, and other countries in the region, the conversation in C4 and C5 centers is rarely about Palantir-style predictive intelligence. The immediate operational challenge is more basic but equally critical: integrating urban cameras with 911 dispatch, managing multi-agency incidents in real time, and reducing response times.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne cubre esa brecha operativa. Está construido para el modelo de los centros C4/C5 en Latinoamérica — con localización nativa en español, experiencia directa en los modelos operativos de México, Perú y Colombia, y precio adaptado a municipios de la región. Para la capa de inteligencia, las agencias que lo necesiten pueden integrar herramientas analíticas vía API. Para la capa de operaciones en tiempo real, KabatOne es la referencia del mercado.'
                : 'KabatOne fills that operational gap. It is built for the C4/C5 center model in Latin America — with native Spanish localization, direct experience in operational models from Mexico, Peru, and Colombia, and pricing adapted to municipalities in the region. For the intelligence layer, agencies that need it can integrate analytical tools via API. For the real-time operations layer, KabatOne is the market reference.'}
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
              {es ? 'KabatOne vs Palantir: Preguntas y Respuestas' : 'KabatOne vs Palantir: Questions & Answers'}
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
              <Link href="/resources/psim-vs-unified-platform" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'PSIM vs Plataforma Unificada' : 'PSIM vs Unified Platform'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/what-is-a-real-time-crime-center" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? '¿Qué Es un Centro de Crimen en Tiempo Real?' : 'What Is a Real-Time Crime Center?'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/vs/hexagon" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Hexagon (HxGN OnCall)' : 'KabatOne vs Hexagon (HxGN OnCall)'}</span>
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
              <Link href="/resources/build-rtcc-implementation-guide" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'Guía para Construir un RTCC' : 'RTCC Implementation Guide'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={es ? '¿Listo para Ver la Capa de Operaciones en Acción?' : 'Ready to See the Operations Layer in Action?'}
          subtitle={es
            ? 'Ve cómo KabatOne conecta video, CAD, GIS y tráfico en un flujo de respuesta unificado. Solicita una demo personalizada.'
            : 'See how KabatOne connects video, CAD, GIS, and traffic in a unified response workflow. Request a personalized demo.'}
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
