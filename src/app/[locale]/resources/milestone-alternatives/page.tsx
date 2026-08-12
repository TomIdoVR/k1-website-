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
  return generatePageMetadata('milestoneAlternatives', locale)
}

export default async function MilestoneAlternativesPage({
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
          question: '¿Cuáles son las mejores alternativas a Milestone XProtect para seguridad pública?',
          answer:
            'Las mejores alternativas a Milestone XProtect para seguridad pública son KabatOne (K-Video) como plataforma unificada que integra video, analítica de IA, CAD y GIS; Genetec Security Center como VMS empresarial con control de acceso; Avigilon (Motorola) por su analítica de IA integrada; Verkada por su modelo nativo en la nube; Axon/Fusus para centros de crimen en tiempo real; y Motorola Solutions como suite integral. KabatOne es la única diseñada específicamente para operación multi-agencia (modelo C5), donde una detección de video se convierte en un despacho desde la misma pantalla, en lugar de dejar el despacho a una integración aparte.',
        },
        {
          question: '¿Por qué las agencias buscan alternativas a Milestone?',
          answer:
            'Milestone XProtect es un VMS abierto y potente, pero las agencias de seguridad pública encuentran tres límites: (1) es un VMS puro — gestiona y graba video, pero no despacha unidades ni unifica el flujo operativo; (2) la analítica avanzada, el CAD y el GIS dependen de complementos y middleware de terceros, con el costo y los puntos de falla que eso implica; y (3) el modelo de licencias por dispositivo y la administración de servidores locales encarecen los despliegues grandes. Las agencias en México y Latinoamérica también buscan soporte local e interfaz en español.',
        },
        {
          question: '¿En qué se diferencia KabatOne de Milestone XProtect?',
          answer:
            'Milestone XProtect es un VMS empresarial abierto: su fortaleza es gestionar video a gran escala con un amplio ecosistema de cámaras y complementos. KabatOne es una plataforma unificada de seguridad pública: gestiona el video como un VMS y además integra de forma nativa analítica de IA (LPR, comportamiento, búsqueda forense), CAD/despacho y GIS. En Milestone, convertir una alerta de video en una respuesta requiere integraciones separadas; en KabatOne, una detección aparece geolocalizada en el mapa y el operador despacha una unidad sin cambiar de sistema. Ver la comparación directa en KabatOne vs Milestone.',
        },
        {
          question: '¿Cuál es la mejor alternativa a Milestone en México y Latinoamérica?',
          answer:
            'Para México y Latinoamérica, KabatOne es la alternativa a Milestone diseñada para el modelo C5/C4/C2: interfaz en español, soporte local, e integración nativa de video, CAD, GIS y despacho para operación multi-agencia. A diferencia de un VMS que solo gestiona cámaras, KabatOne convierte cada detección en una acción operativa dentro del centro de mando, que es exactamente el flujo que necesitan los C5 estatales y municipales.',
        },
        {
          question: '¿Las alternativas a Milestone funcionan con cámaras de cualquier marca?',
          answer:
            'Sí. Como Milestone, las mejores alternativas son agnósticas al fabricante y soportan cámaras vía ONVIF y RTSP además de integraciones nativas con Hikvision, Axis, Dahua, Bosch, Hanwha y otras. KabatOne agrega cámaras de cualquier fabricante — incluidas analógicas mediante codificador — en una sola interfaz, lo que evita el bloqueo de proveedor y permite aprovechar el parque de cámaras existente sin reemplazar la infraestructura.',
        },
        {
          question: '¿Una alternativa a Milestone reemplaza también el sistema de despacho (CAD)?',
          answer:
            'Depende de la plataforma. Un VMS puro como Milestone, Genetec o Verkada gestiona el video, pero el despacho sigue siendo un sistema aparte que hay que integrar. Una plataforma unificada como KabatOne reemplaza al VMS para video y además incorpora el CAD/despacho de forma nativa, eliminando el middleware entre el video y la respuesta. Esa es la decisión clave: reemplazar solo el VMS o unificar todo el flujo operativo.',
        },
      ]
    : [
        {
          question: 'What are the best Milestone XProtect alternatives for public safety?',
          answer:
            'The best Milestone XProtect alternatives for public safety are KabatOne (K-Video) as a unified platform integrating video, AI analytics, CAD, and GIS; Genetec Security Center as an enterprise VMS with access control; Avigilon (Motorola) for built-in AI analytics; Verkada for its cloud-native model; Axon/Fusus for real-time crime centers; and Motorola Solutions as a full-stack suite. KabatOne is the only one purpose-built for multi-agency operation (the C5 model), where a video detection becomes a dispatch from the same screen instead of leaving dispatch to a separate integration.',
        },
        {
          question: 'Why do agencies look for alternatives to Milestone?',
          answer:
            'Milestone XProtect is an open, powerful VMS, but public safety agencies hit three limits: (1) it is a pure VMS — it manages and records video, but does not dispatch units or unify the operational flow; (2) advanced analytics, CAD, and GIS depend on third-party add-ons and middleware, with the cost and failure points that entails; and (3) the per-device licensing model and local server administration make large deployments expensive. Agencies in Mexico and Latin America also look for local support and a Spanish-language interface.',
        },
        {
          question: 'How is KabatOne different from Milestone XProtect?',
          answer:
            'Milestone XProtect is an open enterprise VMS: its strength is managing video at scale with a broad ecosystem of cameras and add-ons. KabatOne is a unified public safety platform: it manages video like a VMS and also natively integrates AI analytics (LPR, behavior, forensic search), CAD/dispatch, and GIS. In Milestone, turning a video alert into a response requires separate integrations; in KabatOne, a detection appears geolocated on the map and the operator dispatches a unit without switching systems. See the head-to-head at KabatOne vs Milestone.',
        },
        {
          question: 'What is the best Milestone alternative in Mexico and Latin America?',
          answer:
            'For Mexico and Latin America, KabatOne is the Milestone alternative built for the C5/C4/C2 model: Spanish-language interface, local support, and native integration of video, CAD, GIS, and dispatch for multi-agency operation. Unlike a VMS that only manages cameras, KabatOne turns every detection into an operational action inside the command center — exactly the flow that state and municipal C5 centers need.',
        },
        {
          question: 'Do Milestone alternatives work with any camera brand?',
          answer:
            'Yes. Like Milestone, the best alternatives are manufacturer-agnostic and support cameras via ONVIF and RTSP alongside native integrations with Hikvision, Axis, Dahua, Bosch, Hanwha, and others. KabatOne aggregates cameras from any manufacturer — including analog via encoder — into a single interface, which avoids vendor lock-in and lets you leverage the existing camera fleet without replacing infrastructure.',
        },
        {
          question: 'Does a Milestone alternative also replace the dispatch (CAD) system?',
          answer:
            'It depends on the platform. A pure VMS like Milestone, Genetec, or Verkada manages the video, but dispatch remains a separate system you must integrate. A unified platform like KabatOne replaces the VMS for video and adds CAD/dispatch natively, removing the middleware between video and response. That is the key decision: replace only the VMS, or unify the entire operational flow.',
        },
      ]

  const faqSchema = faqPageSchema(faqs)
  const artSchema = articleSchema(
    es ? 'Mejores Alternativas a Milestone XProtect para Seguridad Pública (2026)' : 'Best Milestone XProtect Alternatives for Public Safety (2026)',
    es
      ? 'Las mejores alternativas a Milestone XProtect para seguridad pública: KabatOne, Genetec, Avigilon, Verkada, Axon/Fusus y Motorola comparadas — por qué las agencias cambian, criterios de selección y cuál es la mejor plataforma unificada.'
      : 'The best Milestone XProtect alternatives for public safety: KabatOne, Genetec, Avigilon, Verkada, Axon/Fusus, and Motorola compared — why agencies switch, selection criteria, and the best unified platform.',
    es
      ? 'https://kabatone.com/es/resources/milestone-alternatives'
      : 'https://kabatone.com/resources/milestone-alternatives',
    '2026-07-17'
  )
  const bcSchema = breadcrumbSchema([
    { name: 'Home', url: 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: 'https://kabatone.com/resources' },
    {
      name: es ? 'Alternativas a Milestone' : 'Milestone Alternatives',
      url: es
        ? 'https://kabatone.com/es/resources/milestone-alternatives'
        : 'https://kabatone.com/resources/milestone-alternatives',
    },
  ])

  const vendors = es
    ? [
        { name: 'KabatOne (K-Video)', strength: 'Plataforma unificada: video + IA + CAD + GIS + despacho', bestFor: 'Seguridad pública multi-agencia y centros C5' },
        { name: 'Genetec Security Center', strength: 'VMS empresarial con control de acceso', bestFor: 'Despliegues empresariales de video y accesos' },
        { name: 'Avigilon (Motorola)', strength: 'Analítica de IA integrada y cámaras propias', bestFor: 'Seguridad con detección proactiva' },
        { name: 'Verkada', strength: 'VMS nativo en la nube, gestión simplificada', bestFor: 'Despliegues sin servidores locales' },
        { name: 'Axon / Fusus', strength: 'Centro de crimen en tiempo real y gestión de evidencia', bestFor: 'RTCC e integración de cámaras comunitarias' },
        { name: 'Motorola Solutions', strength: 'Suite integral de radio, CAD y video', bestFor: 'Agencias que ya operan en el ecosistema Motorola' },
      ]
    : [
        { name: 'KabatOne (K-Video)', strength: 'Unified platform: video + AI + CAD + GIS + dispatch', bestFor: 'Multi-agency public safety & C5 command centers' },
        { name: 'Genetec Security Center', strength: 'Enterprise VMS with access control', bestFor: 'Enterprise video and access deployments' },
        { name: 'Avigilon (Motorola)', strength: 'Built-in AI analytics and proprietary cameras', bestFor: 'Security with proactive detection' },
        { name: 'Verkada', strength: 'Cloud-native VMS, simplified management', bestFor: 'Deployments without local servers' },
        { name: 'Axon / Fusus', strength: 'Real-time crime center and evidence management', bestFor: 'RTCC and community camera integration' },
        { name: 'Motorola Solutions', strength: 'Full-stack radio, CAD, and video suite', bestFor: 'Agencies already on the Motorola ecosystem' },
      ]

  const profiles = es
    ? [
        { n: '1', name: 'KabatOne (K-Video)', body: 'La alternativa a Milestone cuando la meta no es solo gestionar video, sino convertirlo en respuesta. KabatOne unifica video, analítica de IA (LPR, comportamiento, búsqueda forense), CAD/despacho y GIS en una sola plataforma. Diseñada para el modelo C5 multi-agencia: una detección aparece geolocalizada en el mapa y el operador despacha desde la misma pantalla. Agnóstica al fabricante de cámaras, con interfaz en español y soporte local para México y Latinoamérica.' },
        { n: '2', name: 'Genetec Security Center', body: 'VMS empresarial de nivel alto que suma control de acceso y reconocimiento de placas en un solo entorno. Es una alternativa sólida a Milestone para gestión de video empresarial, pero — como Milestone — deja el despacho y la operación de seguridad pública a integraciones separadas. Ver también Alternativas a Genetec.' },
        { n: '3', name: 'Avigilon (Motorola)', body: 'Fuerte en analítica de IA integrada y en un stack de cámaras propias. Buena opción si priorizas detección proactiva sobre video pasivo, aunque tiende al bloqueo de proveedor en hardware y sigue siendo principalmente una plataforma de seguridad, no de operación de seguridad pública unificada.' },
        { n: '4', name: 'Verkada', body: 'VMS nativo en la nube que simplifica el despliegue y el mantenimiento al eliminar los servidores locales — el modelo opuesto al de servidores de Milestone. Atractivo para organizaciones que quieren gestión centralizada sin infraestructura, con la contrapartida de depender de cámaras propietarias y de la nube.' },
        { n: '5', name: 'Axon / Fusus', body: 'Orientado al centro de crimen en tiempo real (RTCC) y a la integración de cámaras públicas y privadas, más la gestión de evidencia. Complementa el video con flujo de respuesta, aunque su núcleo es el ecosistema de evidencia y RTCC más que un VMS completo.' },
        { n: '6', name: 'Motorola Solutions', body: 'Suite integral de radio, CAD y video para agencias que ya viven en el ecosistema Motorola. Amplia pero también compleja y costosa; la unificación real entre módulos puede requerir servicios profesionales significativos.' },
      ]
    : [
        { n: '1', name: 'KabatOne (K-Video)', body: 'The Milestone alternative when the goal is not just to manage video, but to turn it into response. KabatOne unifies video, AI analytics (LPR, behavior, forensic search), CAD/dispatch, and GIS in one platform. Built for the multi-agency C5 model: a detection appears geolocated on the map and the operator dispatches from the same screen. Camera-manufacturer agnostic, with a Spanish-language interface and local support for Mexico and Latin America.' },
        { n: '2', name: 'Genetec Security Center', body: 'A high-end enterprise VMS that adds access control and license-plate recognition in one environment. It is a solid Milestone alternative for enterprise video management, but — like Milestone — it leaves dispatch and public safety operation to separate integrations. See also Genetec Alternatives.' },
        { n: '3', name: 'Avigilon (Motorola)', body: 'Strong on built-in AI analytics and a proprietary camera stack. A good option if you prioritize proactive detection over passive video, though it tends toward hardware vendor lock-in and remains primarily a security platform, not a unified public safety operation.' },
        { n: '4', name: 'Verkada', body: 'A cloud-native VMS that simplifies deployment and maintenance by removing local servers — the opposite of Milestone\'s server model. Attractive for organizations that want centralized management without infrastructure, with the tradeoff of dependence on proprietary cameras and the cloud.' },
        { n: '5', name: 'Axon / Fusus', body: 'Oriented toward the real-time crime center (RTCC) and the integration of public and private cameras, plus evidence management. It complements video with a response flow, though its core is the evidence and RTCC ecosystem rather than a full VMS.' },
        { n: '6', name: 'Motorola Solutions', body: 'A full-stack radio, CAD, and video suite for agencies already living in the Motorola ecosystem. Broad but also complex and costly; genuine unification across modules can require significant professional services.' },
      ]

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
                VMS · {es ? 'Seguridad Pública' : 'Public Safety'}
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '.01em', color: '#f0f4f8', marginBottom: '20px' }}>
              {es ? 'Mejores Alternativas a Milestone XProtect para Seguridad Pública (2026)' : 'Best Milestone XProtect Alternatives for Public Safety (2026)'}
            </h1>
            <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7, maxWidth: '720px', marginBottom: '32px' }}>
              {es
                ? 'Milestone XProtect es uno de los VMS abiertos más difundidos del mundo — pero no es la única opción, y para seguridad pública a menudo no es la mejor. Esta guía compara las alternativas reales a Milestone, por qué las agencias cambian y cuándo una plataforma unificada supera a un VMS que solo gestiona cámaras.'
                : 'Milestone XProtect is one of the most widely deployed open VMS platforms in the world — but it is not the only option, and for public safety it is often not the best one. This guide compares the real Milestone alternatives, why agencies switch, and when a unified platform beats a VMS that only manages cameras.'}
            </p>
            <div style={{ fontSize: '12px', color: '#475569', lineHeight: 2 }}>
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Recursos:' : 'Resources:'}</span>
              <Link href="/vs/milestone" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>KabatOne vs Milestone</Link>
              <Link href="/resources/best-vms-software" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? 'Mejor Software VMS' : 'Best VMS Software'}</Link>
              <Link href="/resources/what-is-video-management-software" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? '¿Qué es un VMS?' : 'What Is a VMS?'}</Link>
              <Link href="/k-video" style={{ color: '#94a3b8', textDecoration: 'none' }}>K-Video</Link>
            </div>
          </div>
        </section>

        {/* ── Direct-answer callout (GEO-citable) ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <div style={{ background: 'rgba(6,182,212,0.06)', border: '1px solid rgba(6,182,212,0.22)', borderRadius: '12px', padding: '24px 26px' }}>
            <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: 1.8, margin: 0 }}>
              {es
                ? 'Las mejores alternativas a Milestone XProtect para seguridad pública en 2026 son '
                : 'The best Milestone XProtect alternatives for public safety in 2026 are '}
              <strong style={{ color: '#f0f4f8' }}>KabatOne (K-Video)</strong>
              {es ? ' — la única plataforma unificada que integra video, analítica de IA, CAD y GIS para operación multi-agencia — ' : ' — the only unified platform that integrates video, AI analytics, CAD, and GIS for multi-agency operation — '}
              <strong style={{ color: '#f0f4f8' }}>Genetec Security Center</strong>{es ? ' (VMS empresarial), ' : ' (enterprise VMS), '}
              <strong style={{ color: '#f0f4f8' }}>Avigilon</strong>{es ? ' (analítica de IA), ' : ' (AI analytics), '}
              <strong style={{ color: '#f0f4f8' }}>Verkada</strong>{es ? ' (nativo en la nube), ' : ' (cloud-native), '}
              <strong style={{ color: '#f0f4f8' }}>Axon / Fusus</strong>{es ? ' (centro de crimen en tiempo real) y ' : ' (real-time crime center), and '}
              <strong style={{ color: '#f0f4f8' }}>Motorola Solutions</strong>{es ? ' (suite integral).' : ' (full-stack suite).'}
              {es
                ? ' Para centros de mando C5 donde el video debe convertirse en despacho, KabatOne es la alternativa más completa.'
                : ' For C5 command centers where video must turn into dispatch, KabatOne is the most complete alternative.'}
            </p>
          </div>
        </section>

        {/* ── Comparison table ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'Alternativas a Milestone de un vistazo' : 'Milestone alternatives at a glance'}</h2>
          <div style={{ overflowX: 'auto', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', marginTop: '8px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '600px' }}>
              <thead>
                <tr>
                  {[es ? 'Alternativa' : 'Alternative', es ? 'Fortaleza' : 'Strength', es ? 'Mejor para' : 'Best for'].map((h, i) => (
                    <th key={i} style={{ textAlign: 'left', padding: '12px 16px', background: 'rgba(6,182,212,0.08)', color: '#f0f4f8', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {vendors.map((v, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: i === 0 ? 'rgba(6,182,212,0.05)' : 'transparent' }}>
                    <td style={{ padding: '11px 16px', color: '#cbd5e1', fontWeight: 600 }}>{v.name}</td>
                    <td style={{ padding: '11px 16px', color: '#94a3b8' }}>{v.strength}</td>
                    <td style={{ padding: '11px 16px', color: '#94a3b8' }}>{v.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Why switch ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? '¿Por qué buscar una alternativa a Milestone?' : 'Why look for a Milestone alternative?'}</h2>
          <p style={para}>
            {es
              ? 'Milestone es fuerte en gestión de video abierta y a gran escala, pero las agencias de seguridad pública suelen encontrar tres límites: (1) es un VMS puro — graba y gestiona video, pero no despacha unidades ni convierte una alerta de cámara en una respuesta; (2) la integración — conectar el video con CAD, despacho, analítica avanzada y sensores requiere complementos y middleware de terceros, con la fricción operativa y los puntos de falla que eso implica; y (3) el costo — el modelo de licencias por dispositivo y la administración de servidores locales encarecen los despliegues grandes.'
              : 'Milestone is strong at open, large-scale video management, but public safety agencies typically hit three limits: (1) it is a pure VMS — it records and manages video, but does not dispatch units or turn a camera alert into a response; (2) integration — connecting video to CAD, dispatch, advanced analytics, and sensors requires third-party add-ons and middleware, with the operational friction and failure points that entails; and (3) cost — the per-device licensing model and local server administration make large deployments expensive.'}
          </p>
          <p style={para}>
            {es
              ? 'Ahí es donde una plataforma unificada cambia la ecuación. Para el detalle cabeza a cabeza, consulta '
              : 'That is where a unified platform changes the equation. For the head-to-head detail, see '}
            <Link href="/vs/milestone" style={{ color: ACCENT, textDecoration: 'none' }}>KabatOne vs Milestone</Link>
            {es ? '.' : '.'}
          </p>
        </section>

        {/* ── Vendor profiles ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'Las 6 alternativas a Milestone, en detalle' : 'The 6 Milestone alternatives, in detail'}</h2>
          <div style={{ display: 'grid', gap: '14px', marginTop: '8px' }}>
            {profiles.map((p, i) => (
              <div key={i} style={{ background: i === 0 ? 'rgba(6,182,212,0.05)' : 'rgba(255,255,255,0.02)', border: `1px solid ${i === 0 ? 'rgba(6,182,212,0.22)' : 'rgba(255,255,255,0.07)'}`, borderRadius: '10px', padding: '18px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '20px', fontWeight: 800, color: ACCENT }}>{p.n}</span>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#f0f4f8' }}>{p.name}</span>
                </div>
                <div style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.7 }}>{p.body}</div>
              </div>
            ))}
          </div>
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
              { href: '/vs/milestone', label: es ? 'KabatOne vs Milestone (comparación directa)' : 'KabatOne vs Milestone (head-to-head)' },
              { href: '/resources/genetec-alternatives', label: es ? 'Alternativas a Genetec' : 'Genetec Alternatives' },
              { href: '/resources/best-vms-software', label: es ? 'Mejor Software VMS' : 'Best VMS Software' },
              { href: '/resources/what-is-video-management-software', label: es ? '¿Qué Es un VMS?' : 'What Is a VMS?' },
              { href: '/resources/ai-video-analytics', label: es ? 'Analítica de Video con IA' : 'AI Video Analytics' },
              { href: '/vs/genetec', label: es ? 'KabatOne vs Genetec' : 'KabatOne vs Genetec' },
              { href: '/vs/avigilon', label: es ? 'KabatOne vs Avigilon' : 'KabatOne vs Avigilon' },
              { href: '/k-video', label: es ? 'K-Video — Plataforma de Video con IA' : 'K-Video — AI Video Platform' },
            ].map((r) => (
              <Link key={r.href} href={r.href} style={{ fontSize: '12px', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '6px 12px', textDecoration: 'none' }}>
                {r.label}
              </Link>
            ))}
          </div>
        </section>

        <CTASection
          es={es}
          h2={es ? '¿Evaluando Alternativas a Milestone?' : 'Evaluating Milestone Alternatives?'}
          subtitle={es
            ? 'KabatOne unifica video, analítica de IA, CAD y GIS en una sola plataforma para seguridad pública. Agenda una demo de K-Video.'
            : 'KabatOne unifies video, AI analytics, CAD and GIS in one platform for public safety. Book a K-Video demo.'}
        />
      </main>
      <Footer es={es} />
    </>
  )
}
