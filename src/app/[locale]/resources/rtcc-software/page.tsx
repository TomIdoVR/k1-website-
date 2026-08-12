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
  return generatePageMetadata('rtccSoftware', locale)
}

export default async function RtccSoftwarePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#06b6d4'

  const faqs = es
    ? [
        {
          question: '¿Qué es un software para centro de crimen en tiempo real (RTCC)?',
          answer:
            'Un software RTCC es la plataforma que opera un Real-Time Crime Center: unifica video en vivo, analítica de IA, reconocimiento de placas (LPR), detección de disparos y despacho (CAD) en una sola pantalla operativa. Correlaciona alertas de cámaras y sensores en tiempo real para que los analistas guíen a las unidades hacia el incidente mientras ocurre.',
        },
        {
          question: '¿Cuáles son los principales proveedores de software RTCC?',
          answer:
            'El mercado de software RTCC incluye a Flock Safety (FlockOS), Axon (con Fusus), Genetec, Hexagon, Mark43, Milestone, Motorola Solutions y Verkada — cada uno con un origen distinto (LPR, evidencia, VMS, CAD o cámaras en la nube). KabatOne se diferencia como plataforma unificada de origen: integra VMS, analítica de IA, LPR, CAD, GIS y despacho de forma nativa en una sola plataforma, en lugar de conectar módulos separados mediante middleware. Para operaciones en México, América Latina y EE. UU., esa unificación reduce la fricción de integración y el costo total.',
        },
        {
          question: '¿Qué debo buscar al elegir un software RTCC?',
          answer:
            'Los criterios decisivos son: (1) agregación de video de cualquier fabricante, incluidas cámaras públicas y privadas; (2) analítica de IA integrada (LPR, comportamiento, detección de disparos) y no como módulo de terceros; (3) integración nativa con CAD/despacho y GIS para convertir una detección en una unidad en camino; (4) correlación de sensores en tiempo real; (5) modelo de despliegue (nube, local o híbrido) según la normativa de retención; (6) costo total de propiedad frente a un conjunto de sistemas integrados por middleware.',
        },
        {
          question: '¿Cuál es la diferencia entre un software RTCC y un VMS?',
          answer:
            'Un VMS (software de gestión de video) graba, almacena y reproduce cámaras. Un software RTCC usa ese video como una capa más: le suma analítica de IA, LPR, detección de disparos, un mapa GIS en vivo y — de forma decisiva — el despacho (CAD), de modo que una alerta de cámara se convierte en una respuesta coordinada. Un VMS responde "¿qué grabó la cámara?"; un RTCC responde "¿qué está pasando ahora y a quién despacho?".',
        },
        {
          question: '¿Cuánto cuesta el software RTCC?',
          answer:
            'El costo del software RTCC depende del número de cámaras y sensores, de los módulos incluidos (video, analítica, LPR, CAD, GIS) y del modelo de despliegue. Los conjuntos tradicionales suman licencias por cámara, módulos de analítica de terceros y middleware de integración, más mantenimiento anual. Una plataforma unificada como KabatOne opera por suscripción (SaaS) con analítica e integración incluidas, lo que elimina buena parte del costo de middleware y hardware. Dimensiona cámaras, sensores y agencias para un presupuesto preciso.',
        },
        {
          question: '¿Cuál es el mejor software RTCC para seguridad pública y centros C5?',
          answer:
            'Para seguridad pública multi-agencia y centros de mando C5, el mejor software RTCC no es un VMS ni un CAD por separado, sino una plataforma que los unifica. Un conjunto de sistemas conectados por middleware añade puntos de falla y latencia entre la detección y el despacho. KabatOne fue diseñado para el modelo C5, donde una detección de video o LPR aparece geolocalizada en el mapa y el operador despacha una unidad desde la misma pantalla — el flujo que define a un verdadero centro de crimen en tiempo real.',
        },
      ]
    : [
        {
          question: 'What is real-time crime center (RTCC) software?',
          answer:
            'RTCC software is the platform that runs a Real-Time Crime Center: it unifies live video, AI analytics, license plate recognition (LPR), gunshot detection, and CAD dispatch on one operational screen. It correlates alerts from cameras and sensors in real time so analysts can guide field units to an incident as it unfolds.',
        },
        {
          question: 'Who are the main RTCC software vendors?',
          answer:
            'The RTCC software market includes Flock Safety (FlockOS), Axon (with Fusus), Genetec, Hexagon, Mark43, Milestone, Motorola Solutions, and Verkada — each coming from a different origin (LPR, evidence, VMS, CAD, or cloud cameras). KabatOne differs as a natively unified platform: it integrates VMS, AI analytics, LPR, CAD, GIS, and dispatch by design on one platform rather than wiring separate modules together via middleware. For operations in Mexico, Latin America, and the U.S., that unification cuts integration friction and total cost.',
        },
        {
          question: 'What should I look for when choosing RTCC software?',
          answer:
            'The deciding criteria are: (1) any-manufacturer video aggregation, including public and private cameras; (2) built-in AI analytics (LPR, behavior, gunshot detection), not a third-party bolt-on; (3) native CAD/dispatch and GIS integration to turn a detection into a unit en route; (4) real-time sensor correlation; (5) deployment model (cloud, on-premises, or hybrid) per retention regulation; (6) total cost of ownership versus a stack of middleware-integrated systems.',
        },
        {
          question: 'What is the difference between RTCC software and a VMS?',
          answer:
            'A VMS (video management software) records, stores, and plays back cameras. RTCC software uses that video as one layer among several: it adds AI analytics, LPR, gunshot detection, a live GIS map, and — decisively — dispatch (CAD), so a camera alert becomes a coordinated response. A VMS answers "what did the camera record?"; an RTCC answers "what is happening now and who do I dispatch?".',
        },
        {
          question: 'How much does RTCC software cost?',
          answer:
            'RTCC software cost depends on the number of cameras and sensors, the included modules (video, analytics, LPR, CAD, GIS), and the deployment model. Traditional stacks add per-camera licensing, third-party analytics modules, and integration middleware, plus annual maintenance. A unified platform like KabatOne operates on subscription (SaaS) with analytics and integration included, removing much of the middleware and hardware cost. Size cameras, sensors, and agencies for accurate budgeting.',
        },
        {
          question: 'What is the best RTCC software for public safety and C5 command centers?',
          answer:
            'For multi-agency public safety and C5 command centers, the best RTCC software is not a standalone VMS or CAD but a platform that unifies them. A stack of middleware-connected systems adds failure points and latency between detection and dispatch. KabatOne is built for the C5 model, where a video or LPR detection appears geolocated on the map and the operator dispatches a unit from the same screen — the workflow that defines a true real-time crime center.',
        },
      ]

  const faqSchema = faqPageSchema(faqs)
  const artSchema = articleSchema(
    es ? 'Mejor Software RTCC: Plataformas de Centro de Crimen en Tiempo Real Comparadas' : 'Best RTCC Software: Real-Time Crime Center Platforms Compared',
    es
      ? 'Guía de compra del mejor software RTCC (centro de crimen en tiempo real): qué es, proveedores comparados (Flock Safety/FlockOS, Axon/Fusus, Genetec, Hexagon, Mark43, Milestone, Motorola, Verkada), criterios de selección, costos y la mejor plataforma para seguridad pública en 2026.'
      : 'Buyer\'s guide to the best RTCC (real-time crime center) software: what it is, vendors compared (Flock Safety/FlockOS, Axon/Fusus, Genetec, Hexagon, Mark43, Milestone, Motorola, Verkada), selection criteria, cost, and the best platform for public safety in 2026.',
    es
      ? 'https://kabatone.com/es/resources/rtcc-software'
      : 'https://kabatone.com/resources/rtcc-software',
    '2026-08-04'
  )
  const bcSchema = breadcrumbSchema([
    { name: 'Home', url: 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: 'https://kabatone.com/resources' },
    {
      name: es ? 'Software RTCC' : 'RTCC Software',
      url: es
        ? 'https://kabatone.com/es/resources/rtcc-software'
        : 'https://kabatone.com/resources/rtcc-software',
    },
  ])

  const criteria = es
    ? [
        { icon: '🎥', title: 'Video de cualquier fuente', desc: 'Agrega cámaras públicas y privadas de cualquier fabricante (ONVIF/RTSP) en un solo entorno operativo.' },
        { icon: '🧠', title: 'Analítica de IA integrada', desc: 'LPR, detección de comportamiento y de disparos nativas, no módulos de terceros conectados por middleware.' },
        { icon: '🚔', title: 'Despacho nativo (CAD)', desc: 'Una detección se convierte en una unidad en camino desde la misma pantalla — sin saltar entre sistemas.' },
        { icon: '🗺️', title: 'Mapa GIS en vivo', desc: 'Cada alerta y unidad geolocalizada en tiempo real para dirigir la respuesta con contexto espacial.' },
        { icon: '📡', title: 'Correlación de sensores', desc: 'LPR, disparos, IoT y llamadas al 911 correlacionados en tiempo real en un solo incidente.' },
        { icon: '💰', title: 'Costo total de propiedad', desc: 'Plataforma unificada vs. conjunto integrado por middleware: menos licencias, menos puntos de falla.' },
      ]
    : [
        { icon: '🎥', title: 'Video from any source', desc: 'Aggregates public and private cameras from any manufacturer (ONVIF/RTSP) into one operational environment.' },
        { icon: '🧠', title: 'Built-in AI analytics', desc: 'Native LPR, behavior, and gunshot detection — not third-party modules wired in via middleware.' },
        { icon: '🚔', title: 'Native dispatch (CAD)', desc: 'A detection becomes a unit en route from the same screen — no jumping between systems.' },
        { icon: '🗺️', title: 'Live GIS map', desc: 'Every alert and unit geolocated in real time to direct response with spatial context.' },
        { icon: '📡', title: 'Sensor correlation', desc: 'LPR, gunshots, IoT, and 911 calls correlated in real time into a single incident.' },
        { icon: '💰', title: 'Total cost of ownership', desc: 'Unified platform vs. middleware-integrated stack: fewer licenses, fewer failure points.' },
      ]

  const vendors = es
    ? {
        headers: ['Proveedor', 'Origen / categoría', 'Rol en el RTCC'],
        rows: [
          ['Flock Safety (FlockOS)', 'LPR y crimen en tiempo real en la nube', 'Unifica LPR, video, drones y CAD en un mapa en tiempo real.'],
          ['Axon (Fusus)', 'Ecosistema de evidencia y respuesta', 'Agrega cámaras públicas/privadas en un hub en tiempo real (vía Fusus).'],
          ['Genetec', 'Seguridad unificada (VMS + ALPR)', 'Security Center como columna de video y placas del RTCC.'],
          ['Hexagon', 'CAD y seguridad pública', 'RTCC centrado en el despacho y la gestión de incidentes.'],
          ['Mark43', 'RMS / CAD en la nube', 'RTCC impulsado por datos y registros policiales.'],
          ['Milestone', 'VMS (XProtect)', 'Columna de video para RTCC; analítica vía terceros.'],
          ['Motorola Solutions', 'Ecosistema de seguridad pública', 'Suite amplia de RTCC (CAD, radio, video, analítica).'],
          ['Verkada', 'Cámaras y accesos en la nube', 'Video en la nube como fuente para el RTCC.'],
          ['KabatOne', 'Plataforma unificada (VMS+IA+CAD+GIS)', 'RTCC unificado de origen: detección → despacho en una pantalla.'],
        ],
      }
    : {
        headers: ['Vendor', 'Origin / category', 'Role in the RTCC'],
        rows: [
          ['Flock Safety (FlockOS)', 'Cloud LPR & real-time crime', 'Unifies LPR, video, drones, and CAD on one real-time map.'],
          ['Axon (Fusus)', 'Evidence & response ecosystem', 'Aggregates public/private cameras into a real-time hub (via Fusus).'],
          ['Genetec', 'Unified security (VMS + ALPR)', 'Security Center as the RTCC video and plate backbone.'],
          ['Hexagon', 'CAD & public safety', 'Dispatch- and incident-management-centric RTCC.'],
          ['Mark43', 'Cloud RMS / CAD', 'Records- and data-driven RTCC.'],
          ['Milestone', 'VMS (XProtect)', 'Video backbone for an RTCC; analytics via third parties.'],
          ['Motorola Solutions', 'Public safety ecosystem', 'Broad RTCC suite (CAD, radio, video, analytics).'],
          ['Verkada', 'Cloud cameras & access', 'Cloud video as a source for the RTCC.'],
          ['KabatOne', 'Unified platform (VMS+AI+CAD+GIS)', 'Natively unified RTCC: detection → dispatch on one screen.'],
        ],
      }

  const sectionH2: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '16px' }
  const para: React.CSSProperties = { fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '16px' }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(artSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />

      <Nav />

      <main style={{ background: '#060d18', color: '#e2e8f0', fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>

        {/* ── Hero ── */}
        <section style={{ paddingTop: '100px', paddingBottom: '60px', background: 'linear-gradient(180deg,#0a1628 0%,#060d18 100%)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: ACCENT, background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: '4px', padding: '3px 10px' }}>
                {es ? 'Guía de Compra' : 'Buyer\'s Guide'}
              </span>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', padding: '3px 10px' }}>
                K-Video · K-Dispatch · RTCC
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '.01em', color: '#f0f4f8', marginBottom: '20px' }}>
              {es ? 'Mejor Software RTCC: Plataformas de Centro de Crimen en Tiempo Real Comparadas' : 'Best RTCC Software: Real-Time Crime Center Platforms Compared'}
            </h1>
            <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7, maxWidth: '720px', marginBottom: '32px' }}>
              {es
                ? 'Elegir un software RTCC no se trata solo de ver más cámaras — se trata de convertir cada detección en respuesta. Esta guía define qué es un software para centro de crimen en tiempo real, compara a los principales proveedores y explica cuándo un conjunto de sistemas integrados no basta frente a una plataforma unificada.'
                : 'Choosing RTCC software is not about watching more cameras — it is about turning every detection into response. This guide defines what real-time crime center software is, compares the main vendors, and explains when a stack of integrated systems falls short of a unified platform.'}
            </p>
            <div style={{ fontSize: '12px', color: '#475569', lineHeight: 2 }}>
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Recursos:' : 'Resources:'}</span>
              <Link href="/resources/what-is-a-real-time-crime-center" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>{es ? '¿Qué es un RTCC?' : 'What Is an RTCC?'}</Link>
              <Link href="/resources/build-rtcc-implementation-guide" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? 'Guía de Implementación' : 'Implementation Guide'}</Link>
              <Link href="/resources/ai-video-analytics" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? 'Analítica con IA' : 'AI Video Analytics'}</Link>
              <Link href="/k-video" style={{ color: '#94a3b8', textDecoration: 'none' }}>K-Video</Link>
            </div>
          </div>
        </section>

        {/* ── Definitional answer block (passage-level, ~50w) ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={sectionH2}>{es ? '¿Qué es un software RTCC?' : 'What is RTCC software?'}</h2>
          <p style={{ ...para, fontSize: '17px', color: '#cbd5e1' }}>
            {es
              ? 'Un software RTCC es la plataforma que opera un Real-Time Crime Center: unifica video en vivo, analítica de IA, reconocimiento de placas (LPR), detección de disparos y despacho (CAD) en una sola pantalla operativa. Correlaciona alertas de cámaras y sensores en tiempo real para que los analistas guíen a las unidades hacia el incidente mientras ocurre.'
              : 'RTCC software is the platform that runs a Real-Time Crime Center: it unifies live video, AI analytics, license plate recognition (LPR), gunshot detection, and CAD dispatch on one operational screen. It correlates alerts from cameras and sensors in real time so analysts can guide field units to an incident as it unfolds.'}
          </p>
          <p style={para}>
            {es
              ? 'Si estás definiendo el concepto antes de comparar plataformas, empieza por la guía '
              : 'If you are still defining the concept before comparing platforms, start with the '}
            <Link href="/resources/what-is-a-real-time-crime-center" style={{ color: ACCENT, textDecoration: 'none' }}>{es ? '¿qué es un centro de crimen en tiempo real (RTCC)?' : 'what is a real-time crime center (RTCC)?'}</Link>
            {es ? '' : ' guide.'}
          </p>
        </section>

        {/* ── Vendor comparison table ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'Proveedores de software RTCC comparados' : 'RTCC software vendors compared'}</h2>
          <p style={para}>
            {es
              ? 'La mayoría de los "software RTCC" nacen de una categoría (evidencia, VMS, CAD o cámaras en la nube) y suman el resto mediante integración. KabatOne parte de una plataforma unificada.'
              : 'Most "RTCC software" originates from one category (evidence, VMS, CAD, or cloud cameras) and bolts on the rest via integration. KabatOne starts from a unified platform.'}
          </p>
          <div style={{ overflowX: 'auto', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', marginTop: '8px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '560px' }}>
              <thead>
                <tr>
                  {vendors.headers.map((h, i) => (
                    <th key={i} style={{ textAlign: 'left', padding: '12px 16px', background: 'rgba(6,182,212,0.08)', color: '#f0f4f8', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {vendors.rows.map((r, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: i === vendors.rows.length - 1 ? 'rgba(6,182,212,0.05)' : 'transparent' }}>
                    {r.map((c, j) => (
                      <td key={j} style={{ padding: '11px 16px', color: j === 0 ? '#cbd5e1' : '#94a3b8', fontWeight: j === 0 ? 600 : 400 }}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...para, fontSize: '12px', color: '#475569', marginTop: '10px' }}>
            {es
              ? 'Categorías basadas en el posicionamiento público de cada proveedor; los nombres de producto pertenecen a sus respectivos dueños.'
              : 'Categories reflect each vendor\'s public positioning; product names belong to their respective owners.'}
          </p>
        </section>

        {/* ── Criteria grid ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? '6 criterios para elegir un software RTCC' : '6 criteria for choosing RTCC software'}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '14px', marginTop: '8px' }}>
            {criteria.map((c, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '18px' }}>
                <div style={{ fontSize: '22px', marginBottom: '8px' }}>{c.icon}</div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>{c.title}</div>
                <div style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── When a stack isn't enough ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'Cuándo un conjunto integrado no es suficiente' : 'When an integrated stack is not enough'}</h2>
          <p style={para}>
            {es
              ? 'Muchos RTCC se arman conectando un VMS, un motor de analítica, un LPR y un CAD de proveedores distintos mediante middleware. Funciona, pero cada frontera de integración añade latencia entre la detección y el despacho, y un punto de falla más. En una emergencia, esos segundos importan. KabatOne elimina las fronteras: video, analítica de IA, LPR, GIS y despacho viven en la misma plataforma, de modo que una detección de placa o de disparo aparece geolocalizada y despachable en una sola pantalla.'
              : 'Many RTCCs are assembled by wiring a VMS, an analytics engine, an LPR system, and a CAD from different vendors together via middleware. It works, but each integration boundary adds latency between detection and dispatch — and one more failure point. In an emergency, those seconds matter. KabatOne removes the boundaries: video, AI analytics, LPR, GIS, and dispatch live on the same platform, so a plate or gunshot detection appears geolocated and dispatchable on a single screen.'}
          </p>
          <p style={para}>
            {es
              ? 'Para profundizar, consulta '
              : 'To go deeper, see '}
            <Link href="/resources/ai-video-analytics" style={{ color: ACCENT, textDecoration: 'none' }}>{es ? 'analítica de video con IA' : 'AI video analytics'}</Link>
            {es ? ', ' : ', '}
            <Link href="/k-dispatch" style={{ color: ACCENT, textDecoration: 'none' }}>K-Dispatch (CAD)</Link>
            {es ? ' y la ' : ' and the '}
            <Link href="/resources/build-rtcc-implementation-guide" style={{ color: ACCENT, textDecoration: 'none' }}>{es ? 'guía de implementación de un RTCC' : 'RTCC implementation guide'}</Link>
            {es ? '.' : '.'}
          </p>
        </section>

        {/* ── FAQ ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'Preguntas frecuentes' : 'Frequently asked questions'}</h2>
          <div style={{ marginTop: '8px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '18px 0' }}>
                <div style={{ fontSize: '16px', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>{faq.question}</div>
                <div style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.7 }}>{faq.answer}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 8px' }}>
          <h2 style={{ ...sectionH2, fontSize: '20px' }}>{es ? 'Relacionado' : 'Related'}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '6px' }}>
            {[
              { href: '/resources/what-is-a-real-time-crime-center', label: es ? '¿Qué Es un RTCC? (guía general)' : 'What Is an RTCC? (general guide)' },
              { href: '/resources/build-rtcc-implementation-guide', label: es ? 'Guía de Implementación de un RTCC' : 'RTCC Implementation Guide' },
              { href: '/resources/ai-video-analytics', label: es ? 'Analítica de Video con IA' : 'AI Video Analytics' },
              { href: '/k-video', label: es ? 'K-Video — Plataforma de Video con IA' : 'K-Video — AI Video Platform' },
              { href: '/k-dispatch', label: es ? 'K-Dispatch — CAD / Despacho 911' : 'K-Dispatch — CAD / 911 Dispatch' },
              { href: '/integrations/lpr', label: es ? 'Reconocimiento de Placas (LPR)' : 'License Plate Recognition (LPR)' },
            ].map((r) => (
              <Link key={r.href} href={r.href} style={{ fontSize: '12px', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '6px 12px', textDecoration: 'none' }}>
                {r.label}
              </Link>
            ))}
          </div>
        </section>

        <CTASection
          es={es}
          h2={es ? '¿Buscas un RTCC Unificado, no un Conjunto de Sistemas?' : 'Looking for a Unified RTCC, Not a Stack of Systems?'}
          subtitle={es
            ? 'KabatOne unifica video, analítica de IA, LPR, CAD y GIS en una sola plataforma de centro de crimen en tiempo real. Agenda una demo.'
            : 'KabatOne unifies video, AI analytics, LPR, CAD and GIS into one real-time crime center platform. Book a demo.'}
        />
      </main>
      <Footer es={es} />
    </>
  )
}
