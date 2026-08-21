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
  return generatePageMetadata('bestVmsSoftware', locale)
}

export default async function BestVmsSoftwarePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#a855f7'

  const faqs = es
    ? [
        {
          question: '¿Cuál es el mejor software VMS (gestión de video)?',
          answer:
            'El mejor software VMS depende del tamaño del despliegue y de si necesitas solo grabación o también analítica e integración operativa. Para seguridad pública y operación multi-cámara a escala urbana, KabatOne (K-Video) ofrece la integración más completa: agrega cámaras de cualquier fabricante, añade analítica de video con IA (LPR, comportamiento, búsqueda forense) e integra el video con CAD, GIS y despacho. Milestone XProtect y Genetec Security Center lideran el mercado empresarial de VMS puro, mientras que Avigilon y Verkada destacan en analítica y nube respectivamente. La decisión clave es si quieres un VMS aislado o una plataforma unificada.',
        },
        {
          question: '¿Qué debo buscar al elegir una plataforma de gestión de video?',
          answer:
            'Los criterios decisivos son: (1) compatibilidad con cámaras de cualquier fabricante (evita el bloqueo de proveedor); (2) escalabilidad — de decenas a miles de cámaras sin degradación; (3) analítica de video con IA integrada, no como módulo de terceros; (4) integración operativa con CAD, GIS y sensores; (5) modelo de despliegue (nube, local o híbrido); (6) costo total (licencias por cámara + mantenimiento + hardware de servidores). Un VMS que solo graba resuelve el almacenamiento pero deja la detección al operador humano.',
        },
        {
          question: '¿Cuál es la diferencia entre un VMS y una plataforma de video unificada?',
          answer:
            'Un VMS (Video Management System/Software) tradicional gestiona la grabación, el almacenamiento y la reproducción de las cámaras. Una plataforma de video unificada añade capas encima: analítica de video con IA sobre el flujo en vivo, correlación con LPR y sensores, y — de forma decisiva — integración con el despacho (CAD) y el mapa operativo (GIS). KabatOne es una plataforma unificada: gestiona el video como un VMS y además convierte cada detección en una acción operativa dentro del centro de mando.',
        },
        {
          question: '¿Cuánto cuesta el software VMS?',
          answer:
            'El costo del software VMS varía según el número de cámaras, los módulos incluidos (grabación, analítica, integración) y el modelo de despliegue. Los VMS empresariales tradicionales cobran licencias por canal/cámara más mantenimiento anual, y a menudo requieren inversión en servidores. Las plataformas modernas como KabatOne operan por suscripción (SaaS) con costo por cámara o por sitio, incluyendo analítica e integración sin inversión inicial en hardware. Para un presupuesto preciso, dimensiona el número de cámaras y define si necesitas analítica de IA e integración con despacho.',
        },
        {
          question: '¿Un VMS funciona con cámaras de cualquier marca?',
          answer:
            'Los mejores VMS son agnósticos al fabricante y soportan cámaras vía ONVIF y RTSP además de integraciones nativas con Hikvision, Axis, Dahua, Bosch, Hanwha y otras. Esto evita el bloqueo de proveedor y permite aprovechar el parque de cámaras existente. KabatOne agrega cámaras de cualquier fabricante — incluidas analógicas mediante codificador — en una sola interfaz, lo que es esencial para despliegues municipales con infraestructura heterogénea.',
        },
        {
          question: '¿Cuál es el mejor VMS para seguridad pública y centros de mando?',
          answer:
            'Para seguridad pública, el mejor VMS no es solo un VMS: es una plataforma que unifica video, analítica de IA, CAD y GIS. Un VMS empresarial estándar (Milestone, Genetec) gestiona el video pero requiere integraciones de terceros para conectarse con el despacho — generando fricción operativa. KabatOne fue diseñado para operación de seguridad pública multi-agencia (modelo C5), donde una alerta de video aparece geolocalizada en el mapa y el operador puede despachar una unidad desde la misma pantalla.',
        },
      ]
    : [
        {
          question: 'What is the best VMS (video management) software?',
          answer:
            'The best VMS software depends on deployment size and whether you need recording only or also analytics and operational integration. For public safety and city-scale multi-camera operation, KabatOne (K-Video) offers the most complete integration: it aggregates cameras from any manufacturer, adds AI video analytics (LPR, behavior, forensic search), and integrates video with CAD, GIS, and dispatch. Milestone XProtect and Genetec Security Center lead the enterprise pure-VMS market, while Avigilon and Verkada stand out for analytics and cloud respectively. The key decision is whether you want a standalone VMS or a unified platform.',
        },
        {
          question: 'What should I look for when choosing a video management platform?',
          answer:
            'The deciding criteria are: (1) any-manufacturer camera support (avoid vendor lock-in); (2) scalability — from dozens to thousands of cameras without degradation; (3) built-in AI video analytics, not a third-party bolt-on; (4) operational integration with CAD, GIS, and sensors; (5) deployment model (cloud, on-premises, or hybrid); (6) total cost (per-camera licensing + maintenance + server hardware). A VMS that only records solves storage but leaves detection to the human operator.',
        },
        {
          question: 'What is the difference between a VMS and a unified video platform?',
          answer:
            'A traditional VMS (Video Management System/Software) manages recording, storage, and playback of cameras. A unified video platform adds layers on top: AI video analytics on the live stream, correlation with LPR and sensors, and — decisively — integration with dispatch (CAD) and the operational map (GIS). KabatOne is a unified platform: it manages video like a VMS and turns every detection into an operational action inside the command center.',
        },
        {
          question: 'How much does VMS software cost?',
          answer:
            'VMS software cost varies by number of cameras, included modules (recording, analytics, integration), and deployment model. Traditional enterprise VMS charges per-channel/camera licenses plus annual maintenance, and often requires server investment. Modern platforms like KabatOne operate on subscription (SaaS) with per-camera or per-site pricing, including analytics and integration with no upfront hardware investment. For accurate budgeting, size the camera count and decide whether you need AI analytics and dispatch integration.',
        },
        {
          question: 'Does a VMS work with any camera brand?',
          answer:
            'The best VMS platforms are manufacturer-agnostic and support cameras via ONVIF and RTSP alongside native integrations with Hikvision, Axis, Dahua, Bosch, Hanwha, and others. This avoids vendor lock-in and lets you leverage the existing camera fleet. KabatOne aggregates cameras from any manufacturer — including analog via encoder — into a single interface, which is essential for municipal deployments with heterogeneous infrastructure.',
        },
        {
          question: 'What is the best VMS for public safety and command centers?',
          answer:
            'For public safety, the best VMS is not just a VMS: it is a platform that unifies video, AI analytics, CAD, and GIS. A standard enterprise VMS (Milestone, Genetec) manages video but requires third-party integrations to connect with dispatch — creating operational friction. KabatOne is built for multi-agency public safety operation (the C5 model), where a video alert appears geolocated on the map and the operator can dispatch a unit from the same screen.',
        },
      ]

  const faqSchema = faqPageSchema(faqs)
  const artSchema = articleSchema(
    es ? 'Mejor Software VMS: Guía para Elegir una Plataforma de Gestión de Video' : 'Best VMS Software: How to Choose a Video Management Platform',
    es
      ? 'Guía de compra del mejor software VMS (gestión de video): qué buscar, VMS vs plataforma unificada, compatibilidad de cámaras, costos y las mejores plataformas para seguridad pública en 2026.'
      : 'Buyer\'s guide to the best VMS (video management) software: what to look for, VMS vs unified platform, camera compatibility, cost, and the best platforms for public safety in 2026.',
    es
      ? 'https://kabatone.com/es/resources/best-vms-software'
      : 'https://kabatone.com/resources/best-vms-software',
    '2026-07-07'
  )
  const bcSchema = breadcrumbSchema([
    { name: 'Home', url: 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: 'https://kabatone.com/resources' },
    {
      name: es ? 'Mejor Software VMS' : 'Best VMS Software',
      url: es
        ? 'https://kabatone.com/es/resources/best-vms-software'
        : 'https://kabatone.com/resources/best-vms-software',
    },
  ])

  const criteria = es
    ? [
        { icon: '🎥', title: 'Cualquier fabricante', desc: 'Soporte ONVIF/RTSP + integraciones nativas — sin bloqueo de proveedor, aprovecha las cámaras existentes.' },
        { icon: '📈', title: 'Escalabilidad', desc: 'De decenas a miles de cámaras sin degradación de rendimiento ni reconstrucción de arquitectura.' },
        { icon: '🧠', title: 'Analítica de IA integrada', desc: 'Detección de IA nativa (LPR, comportamiento, búsqueda forense), no un módulo de terceros.' },
        { icon: '🗺️', title: 'Integración operativa', desc: 'Conexión nativa con CAD, GIS y sensores para convertir alertas en respuesta, no solo grabación.' },
        { icon: '☁️', title: 'Modelo de despliegue', desc: 'Nube, local o híbrido según normativa de retención y capacidad de infraestructura.' },
        { icon: '💰', title: 'Costo total', desc: 'Licencias por cámara + mantenimiento + hardware. El modelo SaaS elimina la inversión inicial en servidores.' },
      ]
    : [
        { icon: '🎥', title: 'Any manufacturer', desc: 'ONVIF/RTSP support + native integrations — no vendor lock-in, leverages existing cameras.' },
        { icon: '📈', title: 'Scalability', desc: 'From dozens to thousands of cameras with no performance degradation or architecture rebuild.' },
        { icon: '🧠', title: 'Built-in AI analytics', desc: 'Native AI detection (LPR, behavior, forensic search), not a third-party bolt-on.' },
        { icon: '🗺️', title: 'Operational integration', desc: 'Native CAD, GIS, and sensor integration to turn alerts into response, not just recording.' },
        { icon: '☁️', title: 'Deployment model', desc: 'Cloud, on-premises, or hybrid per retention regulation and infrastructure capacity.' },
        { icon: '💰', title: 'Total cost', desc: 'Per-camera licensing + maintenance + hardware. SaaS removes the upfront server investment.' },
      ]

  const vmsTypes = es
    ? {
        headers: ['Tipo', 'Qué hace', 'Mejor para'],
        rows: [
          ['VMS empresarial (Milestone, Genetec)', 'Grabación, gestión y reproducción a escala', 'Grandes despliegues de video puro'],
          ['VMS en la nube (Verkada, Eagle Eye)', 'Gestión de video como servicio', 'Despliegues sin servidores locales'],
          ['VMS + analítica (Avigilon)', 'Video con analítica de IA integrada', 'Seguridad con detección proactiva'],
          ['Plataforma unificada (KabatOne)', 'VMS + IA + CAD + GIS + despacho', 'Seguridad pública y centros de mando'],
        ],
      }
    : {
        headers: ['Type', 'What it does', 'Best for'],
        rows: [
          ['Enterprise VMS (Milestone, Genetec)', 'Recording, management, playback at scale', 'Large pure-video deployments'],
          ['Cloud VMS (Verkada, Eagle Eye)', 'Video management as a service', 'Deployments without local servers'],
          ['VMS + analytics (Avigilon)', 'Video with built-in AI analytics', 'Security with proactive detection'],
          ['Unified platform (KabatOne)', 'VMS + AI + CAD + GIS + dispatch', 'Public safety & command centers'],
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
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: ACCENT, background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: '4px', padding: '3px 10px' }}>
                {es ? 'Guía de Compra' : 'Buyer\'s Guide'}
              </span>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', padding: '3px 10px' }}>
                K-Video · VMS
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '.01em', color: '#f0f4f8', marginBottom: '20px' }}>
              {es ? 'Mejor Software VMS: Cómo Elegir una Plataforma de Gestión de Video' : 'Best VMS Software: How to Choose a Video Management Platform'}
            </h1>
            <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7, maxWidth: '720px', marginBottom: '32px' }}>
              {es
                ? 'Elegir el mejor software VMS (gestión de video) no se trata solo de grabación — se trata de qué haces con el video. Esta guía compara los tipos de plataforma VMS, los criterios que importan (cámaras de cualquier marca, analítica de IA, integración con despacho) y cuándo un VMS estándar no es suficiente para seguridad pública.'
                : 'Choosing the best VMS (video management) software is not just about recording — it is about what you do with the video. This guide compares VMS platform types, the criteria that matter (any-brand cameras, AI analytics, dispatch integration), and when a standard VMS is not enough for public safety.'}
            </p>
            <div style={{ fontSize: '12px', color: '#475569', lineHeight: 2 }}>
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Recursos:' : 'Resources:'}</span>
              <Link href="/resources/what-is-video-management-software" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>{es ? '¿Qué es un VMS?' : 'What Is a VMS?'}</Link>
              <Link href="/resources/what-is-video-analytics" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? 'Analítica de Video' : 'Video Analytics'}</Link>
              <Link href="/resources/ai-video-analytics" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? 'Analítica con IA' : 'AI Video Analytics'}</Link>
              <Link href="/k-video" style={{ color: '#94a3b8', textDecoration: 'none' }}>K-Video</Link>
            </div>
          </div>
        </section>

        {/* ── Intro ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={sectionH2}>{es ? '¿Cuál es el mejor software VMS?' : 'What is the best VMS software?'}</h2>
          <p style={para}>
            {es
              ? 'No hay un único "mejor VMS" — hay el mejor para tu caso. Un VMS empresarial como Milestone XProtect o Genetec Security Center es excelente para gestión de video puro a gran escala. Verkada y Eagle Eye lideran en la nube. Avigilon destaca en analítica. Pero para seguridad pública y centros de mando, la pregunta correcta no es "¿qué VMS graba mejor?" sino "¿qué plataforma convierte el video en respuesta operativa?".'
              : 'There is no single "best VMS" — there is the best one for your case. An enterprise VMS like Milestone XProtect or Genetec Security Center excels at large-scale pure video management. Verkada and Eagle Eye lead in cloud. Avigilon stands out in analytics. But for public safety and command centers, the right question is not "which VMS records best?" but "which platform turns video into operational response?".'}
          </p>
          <p style={para}>
            {es
              ? 'Si aún estás definiendo qué es un VMS y qué hace, empieza por la guía '
              : 'If you are still defining what a VMS is and does, start with the '}
            <Link href="/resources/what-is-video-management-software" style={{ color: ACCENT, textDecoration: 'none' }}>{es ? 'software de gestión de video (VMS)' : 'video management software (VMS)'}</Link>
            {es ? '.' : ' guide.'}
          </p>
        </section>

        {/* ── VMS types table ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'Tipos de plataforma VMS' : 'Types of VMS platform'}</h2>
          <div style={{ overflowX: 'auto', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', marginTop: '8px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '560px' }}>
              <thead>
                <tr>
                  {vmsTypes.headers.map((h, i) => (
                    <th key={i} style={{ textAlign: 'left', padding: '12px 16px', background: 'rgba(168,85,247,0.08)', color: '#f0f4f8', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {vmsTypes.rows.map((r, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: i === 3 ? 'rgba(168,85,247,0.05)' : 'transparent' }}>
                    {r.map((c, j) => (
                      <td key={j} style={{ padding: '11px 16px', color: j === 0 ? '#cbd5e1' : '#94a3b8', fontWeight: j === 0 ? 600 : 400 }}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Criteria grid ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? '6 criterios para elegir un VMS' : '6 criteria for choosing a VMS'}</h2>
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

        {/* ── When VMS isn't enough ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'Cuándo un VMS estándar no es suficiente' : 'When a standard VMS is not enough'}</h2>
          <p style={para}>
            {es
              ? 'Un VMS gestiona el video, pero no despacha unidades ni correlaciona una alerta de cámara con una llamada al 911. En seguridad pública, ese vacío obliga a integrar el VMS con sistemas de despacho (CAD), GIS y sensores mediante middleware de terceros — con la fricción operativa y los puntos de falla que eso implica. KabatOne cierra el vacío: es un VMS con analítica de IA que además integra de forma nativa CAD, GIS y despacho, de modo que una detección de video se convierte en una unidad en camino desde una sola interfaz.'
              : 'A VMS manages the video, but it does not dispatch units or correlate a camera alert with a 911 call. In public safety, that gap forces you to integrate the VMS with dispatch (CAD), GIS, and sensors via third-party middleware — with the operational friction and failure points that entails. KabatOne closes the gap: it is a VMS with AI analytics that also natively integrates CAD, GIS, and dispatch, so a video detection becomes a unit en route from a single interface.'}
          </p>
          <p style={para}>
            {es
              ? 'Para ver esa capa de analítica en detalle, consulta '
              : 'To see that analytics layer in detail, see '}
            <Link href="/resources/ai-video-analytics" style={{ color: ACCENT, textDecoration: 'none' }}>{es ? 'analítica de video con IA' : 'AI video analytics'}</Link>
            {es ? ' y ' : ' and '}
            <Link href="/vs/vms" style={{ color: ACCENT, textDecoration: 'none' }}>{es ? 'KabatOne vs VMS tradicional' : 'KabatOne vs traditional VMS'}</Link>
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
              { href: '/resources/what-is-video-management-software', label: es ? '¿Qué Es un VMS? (guía general)' : 'What Is a VMS? (general guide)' },
              { href: '/resources/ai-video-analytics', label: es ? 'Analítica de Video con IA' : 'AI Video Analytics' },
              { href: '/resources/cctv-video-analytics', label: es ? 'Analítica de Video CCTV' : 'CCTV Video Analytics' },
              { href: '/vs/vms', label: es ? 'KabatOne vs VMS Tradicional' : 'KabatOne vs Traditional VMS' },
              { href: '/vs/avigilon', label: es ? 'KabatOne vs Avigilon' : 'KabatOne vs Avigilon' },
              { href: '/k-video', label: es ? 'K-Video — Plataforma de Video con IA' : 'K-Video — AI Video Platform' },
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
          h2={es ? '¿Buscas un VMS que Haga Más que Grabar?' : 'Looking for a VMS That Does More Than Record?'}
          subtitle={es
            ? 'KabatOne unifica gestión de video, analítica de IA, CAD y GIS en una sola plataforma. Agenda una demo de K-Video.'
            : 'KabatOne unifies video management, AI analytics, CAD and GIS in one platform. Book a K-Video demo.'}
        />
      </main>
      <Footer es={es} />
    </>
  )
}
