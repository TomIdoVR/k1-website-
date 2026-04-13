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
  return generatePageMetadata('callCenterSoftwareGuide', locale)
}

export default async function CallCenterSoftwareGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#ef4444'

  /* ── FAQ data ── */
  const faqs = es
    ? [
        {
          question: '¿Cuál es la diferencia entre el software 911 y el software CAD?',
          answer:
            'El software 911 gestiona la recepción de llamadas y la creación del incidente. El CAD gestiona la asignación de unidades y el despacho. Deberían estar integrados — o combinados en una plataforma unificada.',
        },
        {
          question: '¿Qué es NG911 y por qué importa?',
          answer:
            'Next Generation 911 es la infraestructura basada en IP que reemplaza los sistemas telefónicos POTS heredados. Permite llamadas de texto, video y datos junto con la voz, y mejora la precisión de la ubicación.',
        },
        {
          question: '¿Cuánto tiempo tarda actualizar el software de un centro de llamadas 911?',
          answer:
            'Una actualización típica toma entre 6 y 18 meses, incluyendo adquisición, instalación, capacitación y pruebas en paralelo. Las migraciones a NG911 suelen requerir 2 a 3 años para la transición completa.',
        },
        {
          question: '¿Puede el software 911 integrarse con un CAD de otro proveedor?',
          answer:
            'Sí, mediante APIs, pero la integración nativa (mismo proveedor o plataforma) siempre es más rápida y confiable. Los retrasos en la transferencia de datos de incluso 30 segundos son críticos en respuesta a emergencias.',
        },
        {
          question: '¿Qué es el texto al 911 y es obligatorio?',
          answer:
            'El texto al 911 permite a los ciudadanos enviar SMS al 911 — fundamental para quienes no pueden hablar. La FCC exige que las operadoras lo soporten; el software del PSAP debe ser compatible con NG911 para recibir textos.',
        },
        {
          question: '¿Cómo gestiona la plataforma de KabatOne las operaciones del centro de llamadas 911?',
          answer:
            'K-Dispatch integra la recepción de llamadas 911, el despacho CAD y GIS en una sola plataforma — eliminando el traspaso entre el receptor de llamadas y el despachador, y reduciendo significativamente el tiempo hasta el despacho.',
        },
      ]
    : [
        {
          question: 'What is the difference between 911 software and CAD software?',
          answer:
            '911 software handles call intake and incident creation. CAD manages unit assignment and dispatch. They should be integrated — or combined in a unified platform.',
        },
        {
          question: 'What is NG911 and why does it matter?',
          answer:
            'Next Generation 911 is the IP-based infrastructure replacing legacy POTS telephone systems. It enables text, video, and data calls alongside voice, and improves location accuracy.',
        },
        {
          question: 'How long does it take to upgrade 911 call center software?',
          answer:
            'Typical upgrade: 6–18 months including procurement, installation, training, and parallel testing. NG911 migrations often take 2–3 years for full transition.',
        },
        {
          question: 'Can 911 software integrate with CAD from a different vendor?',
          answer:
            'Yes via APIs, but native integration (same vendor or platform) is always faster and more reliable. Data handoff delays of even 30 seconds matter in emergency response.',
        },
        {
          question: 'What is text-to-911 and is it required?',
          answer:
            'Text-to-911 allows citizens to send SMS to 911 — critical for callers who cannot speak. FCC requires carriers to support it; PSAP software must be NG911 compatible to receive texts.',
        },
        {
          question: "How does KabatOne's platform handle 911 call center operations?",
          answer:
            'K-Dispatch integrates 911 call intake, CAD dispatch, and GIS in one platform — eliminating the handoff between call-taker and dispatcher and cutting time-to-dispatch significantly.',
        },
      ]

  const faqSchema = faqPageSchema(faqs)

  const artSchema = articleSchema(
    es
      ? 'Software para Centro de Llamadas 911: Guía de Selección | KabatOne'
      : '911 Call Center Software: Features & Selection Guide | KabatOne',
    es
      ? 'El software para centros de llamadas 911 gestiona la recepción de emergencias, clasificación de incidentes y despacho de unidades. Funciones clave, diferencia con CAD e integración con NG911.'
      : '911 call center software manages emergency call intake, incident classification, and unit dispatch. Learn the key features, how it differs from CAD, NG911 integration, and what to evaluate.',
    es
      ? 'https://kabatone.com/es/resources/911-call-center-software-guide/'
      : 'https://kabatone.com/resources/911-call-center-software-guide/',
    '2026-04-08'
  )

  const bcSchema = breadcrumbSchema([
    { name: 'Home', url: 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: 'https://kabatone.com/resources/' },
    {
      name: es
        ? 'Software para Centro de Llamadas 911: Guía de Selección'
        : '911 Call Center Software: Features & Selection Guide',
      url: es
        ? 'https://kabatone.com/es/resources/911-call-center-software-guide/'
        : 'https://kabatone.com/resources/911-call-center-software-guide/',
    },
  ])

  /* ── Core functions (6 numbered cards) ── */
  const coreFunctions = es
    ? [
        {
          n: '01',
          title: 'Recepción de llamada y ANI/ALI',
          desc: 'Identificación automática del número del llamante (ANI) y su ubicación (ALI) desde los proveedores de telecomunicaciones.',
        },
        {
          n: '02',
          title: 'Creación del incidente',
          desc: 'Abre automáticamente un registro de incidente en el sistema CAD vinculado en el momento en que se atiende la llamada.',
        },
        {
          n: '03',
          title: 'Clasificación del incidente',
          desc: 'Tipo de emergencia (incendio, médica, policial, tráfico), nivel de prioridad y sector geográfico.',
        },
        {
          n: '04',
          title: 'Enrutamiento a la agencia',
          desc: 'Dirige el incidente a la cola de despacho correcta — policía, bomberos, EMS o multiagencia.',
        },
        {
          n: '05',
          title: 'Grabación y registro de llamadas',
          desc: 'Todas las llamadas se graban, se transcriben (donde está habilitado) y se registran con marcas de tiempo.',
        },
        {
          n: '06',
          title: 'Integración NG911',
          desc: 'Acepta mensajes de texto al 911, videollamadas y datos telemáticos de vehículos conectados.',
        },
      ]
    : [
        {
          n: '01',
          title: 'Call receipt & ANI/ALI',
          desc: 'Automatic identification of caller number (ANI) and location (ALI) from telecom providers.',
        },
        {
          n: '02',
          title: 'Incident creation',
          desc: 'Automatically opens an incident record in the linked CAD system as the call is answered.',
        },
        {
          n: '03',
          title: 'Incident classification',
          desc: 'Type (fire, medical, police, traffic), priority level, and geographic sector.',
        },
        {
          n: '04',
          title: 'Agency routing',
          desc: 'Routes the incident to the correct dispatch queue — police, fire, EMS, or multi-agency.',
        },
        {
          n: '05',
          title: 'Call recording & logging',
          desc: 'All calls recorded, transcribed (where enabled), and logged with timestamps.',
        },
        {
          n: '06',
          title: 'NG911 integration',
          desc: 'Accepts text-to-911, video calls, and telematics data from connected vehicles.',
        },
      ]

  /* ── Comparison table: 911 Software vs CAD ── */
  const comparison = es
    ? {
        headers: ['Dimensión', 'Software 911', 'CAD'],
        rows: [
          ['Función principal', 'Recepción y clasificación de llamadas', 'Asignación y despacho de unidades'],
          ['Integración', 'Deben estar vinculados nativamente, pero a menudo son sistemas separados', 'Ídem — la brecha entre proveedores genera retrasos'],
          ['Rol del operador', 'El receptor atiende al ciudadano', 'El despachador coordina las unidades de campo'],
          ['Flujo de datos', 'Receptor crea el incidente → Despachador asigna unidades → Unidades responden', '←'],
          ['Plataforma unificada', 'Las plataformas modernas fusionan ambos en una sola interfaz (sin traspaso)', '←'],
        ],
      }
    : {
        headers: ['Dimension', '911 Software', 'CAD'],
        rows: [
          ['Primary function', 'Call receipt and classification', 'Unit assignment and dispatch'],
          ['Integration', 'Should be natively linked, but are often separate systems from different vendors', 'Same — the vendor gap creates handoff delay'],
          ['Operator role', 'Call-taker handles the citizen', 'CAD dispatcher handles field units'],
          ['Data flow', 'Call-taker creates incident → CAD dispatcher assigns units → field units respond', '←'],
          ['Combined platform', 'Modern unified platforms merge both into one interface (no handoff delay)', '←'],
        ],
      }

  /* ── NG911 items ── */
  const ng911Items = es
    ? [
        {
          title: 'Texto, video y voz',
          desc: 'Aceptar mensajes de texto al 911 y videollamadas junto con las llamadas de voz tradicionales.',
        },
        {
          title: 'Ubicación por GPS del dispositivo',
          desc: 'Localización automática mediante GPS del dispositivo (no solo triangulación de torres celulares).',
        },
        {
          title: 'Interoperabilidad entre PSAPs',
          desc: 'Compatibilidad con los PSAPs vecinos para desbordamiento de llamadas y ayuda mutua.',
        },
        {
          title: 'Conectividad API',
          desc: 'Integración con sensores de ciudad inteligente, detección de colisiones y plataformas de telemática.',
        },
      ]
    : [
        {
          title: 'Text, video & voice',
          desc: 'Accept text-to-911 and video calls alongside traditional voice calls.',
        },
        {
          title: 'Device GPS location',
          desc: 'Automatic location via device GPS — not just cell tower triangulation.',
        },
        {
          title: 'PSAP interoperability',
          desc: 'Interoperability with neighboring PSAPs for call overflow and mutual aid.',
        },
        {
          title: 'API connectivity',
          desc: 'Integration with smart city sensors, crash detection, and telematics platforms.',
        },
      ]

  /* ── Evaluation criteria (6 cards) ── */
  const criteria = es
    ? [
        {
          title: 'Integración con CAD',
          desc: '¿Nativa o basada en API? La integración nativa siempre es más rápida y confiable.',
        },
        {
          title: 'Preparación para NG911',
          desc: '¿Soporta ESInet, el estándar i3 y llamadas de texto/video?',
        },
        {
          title: 'Precisión de ubicación',
          desc: '¿Cómo maneja ALI desde dispositivos móviles, líneas fijas y VoIP?',
        },
        {
          title: 'Failover y redundancia',
          desc: '¿Qué ocurre cuando el servidor principal falla?',
        },
        {
          title: 'Reportes y cumplimiento normativo',
          desc: 'Reportes conformes a NENA, métricas de tiempo de respuesta y tasas de abandono.',
        },
        {
          title: 'Soporte multiagencia',
          desc: '¿Puede enrutar a diferentes colas de despacho sin configuración por llamada?',
        },
      ]
    : [
        {
          title: 'CAD integration',
          desc: 'Native or API-based? Native is always faster and more reliable.',
        },
        {
          title: 'NG911 readiness',
          desc: 'Does it support ESInet, i3 standard, and text/video calls?',
        },
        {
          title: 'Location accuracy',
          desc: 'How does it handle ALI from mobile vs landline vs VoIP?',
        },
        {
          title: 'Failover and redundancy',
          desc: 'What happens when the primary server goes down?',
        },
        {
          title: 'Reporting and compliance',
          desc: 'NENA-compliant reporting, call answer time metrics, abandonment rates.',
        },
        {
          title: 'Multi-agency support',
          desc: 'Can it route to different dispatch queues without configuration per-call?',
        },
      ]

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
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: ACCENT, background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '4px', padding: '3px 10px' }}>
                {es ? 'Guía de Referencia' : 'Reference Guide'}
              </span>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', padding: '3px 10px' }}>
                K-Dispatch
              </span>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', padding: '3px 10px' }}>
                PSAP
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '.01em', color: '#f0f4f8', marginBottom: '20px' }}>
              {es
                ? 'Software para Centros de Llamadas 911: Guía de Selección'
                : '911 Call Center Software: Features & Selection Guide'}
            </h1>
            <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7, maxWidth: '720px', marginBottom: '32px' }}>
              {es
                ? 'Guía completa sobre el software para centros de llamadas 911 — qué hace, cómo funciona, en qué se diferencia del CAD, y qué evaluar al actualizar desde sistemas heredados.'
                : 'A comprehensive guide to 911 call center software — what it does, how it works, how it differs from CAD, and what to evaluate when upgrading from legacy systems.'}
            </p>
            {/* Internal links */}
            <div style={{ fontSize: '12px', color: '#475569', lineHeight: 2 }}>
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Recursos relacionados:' : 'Related resources:'}</span>
              <Link href="/resources/what-is-emergency-dispatch-software" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>
                {es ? 'Software de Despacho' : 'Emergency Dispatch Software'}
              </Link>
              <Link href="/resources/what-is-cad-dispatch-software" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>
                {es ? 'Software CAD' : 'CAD Software'}
              </Link>
              <Link href="/resources/what-is-a-psap" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>
                {es ? '¿Qué Es un PSAP?' : 'What Is a PSAP?'}
              </Link>
              <br />
              <Link href="/resources/what-is-a-real-time-crime-center" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>
                {es ? 'Centro de Crimen en Tiempo Real' : 'Real-Time Crime Center'}
              </Link>
              <Link href="/resources/what-is-emergency-management-software" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>
                {es ? 'Gestión de Emergencias' : 'Emergency Management'}
              </Link>
              <Link href="/k-dispatch" style={{ color: '#94a3b8', textDecoration: 'none' }}>K-Dispatch</Link>
            </div>
          </div>
        </section>

        {/* ── What Is 911 Call Center Software? ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '16px' }}>
            {es ? '¿Qué Es el Software para Centros de Llamadas 911?' : 'What Is 911 Call Center Software?'}
          </h2>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '16px' }}>
            {es
              ? 'El software para centros de llamadas 911 es la capa tecnológica que gestiona la recepción de llamadas de emergencia en un Punto de Atención de Seguridad Pública (PSAP, por sus siglas en inglés) — recibiendo llamadas, identificando la ubicación del llamante, clasificando incidentes y enrutando a la agencia de respuesta correspondiente. Los sistemas modernos van más allá del enrutamiento básico de llamadas: se integran con el CAD (Computer-Aided Dispatch) para crear inmediatamente un registro de incidente, con GIS para mapear la ubicación del llamante, y con la infraestructura NG911 para aceptar textos, videos y datos junto con las llamadas de voz.'
              : '911 call center software is the technology layer that handles emergency call intake at a Public Safety Answering Point (PSAP) — receiving calls, identifying caller location, classifying incidents, and routing to the appropriate response agency. Modern systems go beyond basic call routing: they integrate with CAD (Computer-Aided Dispatch) to immediately create an incident record, with GIS to map caller location, and with NG911 infrastructure to accept text, video, and data alongside voice calls.'}
          </p>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            {es
              ? 'Los sistemas 911 heredados fueron diseñados para llamadas de voz solo a través del POTS (sistema telefónico analógico tradicional). La transición a NG911 (Next Generation 911) requiere software que pueda gestionar llamadas multimedia, identificación automática de ubicación (ALI) y flujos de datos en tiempo real desde dispositivos móviles.'
              : 'Legacy 911 systems were built for voice-only POTS (Plain Old Telephone System) calls. The transition to NG911 (Next Generation 911) requires software that can handle multimedia calls, automatic location identification (ALI), and real-time data feeds from mobile devices.'}
          </p>
        </section>

        {/* ── 6 Core Functions ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '8px' }}>
            {es
              ? '6 Funciones Clave del Software para Centros de Llamadas 911'
              : '6 Core Functions of 911 Call Center Software'}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '32px' }}>
            {es
              ? 'Lo que todo sistema moderno de atención de llamadas de emergencia debe hacer'
              : 'What every modern emergency call-handling system must do'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
            {coreFunctions.map((f) => (
              <div key={f.n} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '20px 22px', borderTop: `2px solid ${ACCENT}` }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', fontWeight: 700, color: ACCENT, letterSpacing: '.1em', marginBottom: '8px' }}>{f.n}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#f0f4f8', marginBottom: '8px' }}>{f.title}</div>
                <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 911 Software vs CAD comparison ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '16px' }}>
            {es
              ? 'Software 911 vs CAD: ¿Cuál Es la Diferencia?'
              : '911 Software vs CAD: What\'s the Difference?'}
          </h2>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '28px' }}>
            {es
              ? 'El software 911 y el CAD son componentes distintos que deberían funcionar en conjunto. Comprender la diferencia es fundamental para evaluar plataformas y tomar decisiones de adquisición.'
              : '911 software and CAD are distinct components that should operate together. Understanding the difference is critical for platform evaluation and procurement decisions.'}
          </p>
          <div style={{ overflowX: 'auto', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: 'rgba(239,68,68,0.08)' }}>
                  {comparison.headers.map((h, i) => (
                    <th key={i} style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: i === 0 ? '#64748b' : i === 1 ? ACCENT : '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, ri) => (
                  <tr key={ri} style={{ borderBottom: ri < comparison.rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', background: ri % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ padding: '12px 16px', color: ci === 0 ? '#94a3b8' : ci === 1 ? '#f0f4f8' : '#64748b', fontWeight: ci === 1 ? 600 : 400 }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── NG911 section ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '16px' }}>
            {es
              ? 'NG911: Lo Que Significa para la Selección de Software'
              : 'NG911: What It Means for Software Selection'}
          </h2>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '24px' }}>
            {es
              ? 'NG911 es la infraestructura basada en IP que reemplaza los sistemas telefónicos heredados para las comunicaciones de emergencia. Para el software, la compatibilidad con NG911 implica:'
              : 'NG911 is the IP-based infrastructure replacing legacy telephone systems for emergency communications. For software, NG911 compatibility means:'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px', marginBottom: '24px' }}>
            {ng911Items.map((item, i) => (
              <div key={i} style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: '10px', padding: '18px 20px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: ACCENT, marginBottom: '6px' }}>{item.title}</div>
                <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>
            {es
              ? 'La migración a NG911 no es solo una actualización tecnológica — es un cambio de infraestructura que requiere software compatible desde el inicio. Las plataformas que no admiten el estándar i3 o ESInet crearán deuda técnica que limitará la capacidad operativa a medida que aumente la adopción de NG911.'
              : 'Migrating to NG911 is not simply a technology upgrade — it is an infrastructure shift that requires compatible software from day one. Platforms that do not support i3 standard or ESInet will create technical debt that limits operational capability as NG911 adoption expands.'}
          </p>
        </section>

        {/* ── Evaluation criteria ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '8px' }}>
            {es
              ? '6 Criterios para Evaluar Software de Centro de Llamadas 911'
              : '6 Things to Evaluate When Selecting 911 Software'}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '28px' }}>
            {es
              ? 'Lista de verificación para directores de PSAP y equipos de TI gubernamental'
              : 'Checklist for PSAP directors and government IT evaluating NG911 and CAD upgrades'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '14px' }}>
            {criteria.map((c, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '18px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', fontWeight: 700, color: ACCENT }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#f0f4f8' }}>{c.title}</span>
                </div>
                <p style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '28px' }}>
            {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '20px 22px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#f0f4f8', marginBottom: '10px' }}>{faq.question}</div>
                <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.7 }}>{faq.answer}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related resources ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#475569', marginBottom: '14px' }}>
            {es ? 'Recursos Relacionados' : 'Related Resources'}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              { href: '/resources/what-is-emergency-dispatch-software', label: es ? 'Software de Despacho de Emergencias' : 'Emergency Dispatch Software' },
              { href: '/resources/what-is-cad-dispatch-software', label: es ? '¿Qué Es un Software CAD?' : 'What Is CAD Software?' },
              { href: '/resources/what-is-a-psap', label: es ? '¿Qué Es un PSAP?' : 'What Is a PSAP?' },
              { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Centro de Crimen en Tiempo Real' : 'Real-Time Crime Center' },
              { href: '/resources/what-is-emergency-management-software', label: es ? 'Software de Gestión de Emergencias' : 'Emergency Management Software' },
              { href: '/k-dispatch', label: 'K-Dispatch' },
            ].map((r) => (
              <Link key={r.href} href={r.href} style={{ fontSize: '12px', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '6px 12px', textDecoration: 'none' }}>
                {r.label}
              </Link>
            ))}
          </div>
        </section>

        <div style={{ height: '60px' }} />
        <CTASection
          es={es}
          h2={es
            ? '¿Listo para Modernizar tu Centro de Llamadas 911?'
            : 'Ready to Modernize Your 911 Call Center?'}
          subtitle={es
            ? 'Agenda una demo de K-Dispatch y ve cómo KabatOne unifica la recepción de llamadas 911, el despacho CAD y GIS en un solo entorno operativo.'
            : 'Schedule a K-Dispatch demo and see how KabatOne unifies 911 call intake, CAD dispatch, and GIS into a single operational environment.'}
        />
      </main>

      <Footer es={es} />
    </>
  )
}
