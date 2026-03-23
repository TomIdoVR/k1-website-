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
  return generatePageMetadata('vsCarbyne', locale)
}

export default async function VsCarbyneePage({
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
    { name: 'KabatOne vs Carbyne', url: es ? 'https://kabatone.com/es/vs/carbyne/' : 'https://kabatone.com/vs/carbyne/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre KabatOne y Carbyne?',
      answer: 'Carbyne es una plataforma de next-gen 911 especializada en la recepción de llamadas de emergencia — entrega ubicación en tiempo real del llamante, video desde el teléfono del ciudadano y soporte de texto-a-911. Es una excelente solución para modernizar la experiencia del PSAP (Public Safety Answering Point). KabatOne cubre el ciclo completo: desde la recepción de la llamada hasta el despacho, el seguimiento de unidades en campo y el cierre del incidente. Carbyne mejora el punto de entrada del 911; KabatOne gestiona todo lo que ocurre después.',
    },
    {
      question: '¿Carbyne incluye software de despacho CAD?',
      answer: 'No. Carbyne se especializa en el manejo de llamadas de emergencia — enriquecimiento de datos del llamante, ubicación precisa y video en tiempo real. No incluye un módulo CAD para despachar unidades, rastrear respondedores en un mapa GIS ni gestionar el ciclo de vida del incidente. Las agencias que usan Carbyne necesitan un sistema CAD separado — como Motorola PremierOne o Hexagon HxGN OnCall — para el despacho. KabatOne incluye K-Dispatch como módulo CAD nativo.',
    },
    {
      question: '¿Qué pasa después de la llamada en Carbyne vs KabatOne?',
      answer: 'En Carbyne, el operador recibe la llamada con datos enriquecidos del llamante — ubicación, video, historial — pero el despacho de una unidad y el seguimiento del respondedor requieren un sistema CAD separado. En KabatOne, el operador recibe el incidente en K-Dispatch, despacha la unidad, la rastrea en tiempo real en el mapa GIS de K-Safety, puede validar con cámaras de K-Video y coordinar el tráfico con K-Traffic — todo en un solo flujo, sin cambiar de sistema.',
    },
    {
      question: '¿Puede KabatOne integrarse con Carbyne para recepción de llamadas 911?',
      answer: 'Sí, en principio los sistemas de recepción de llamadas pueden integrarse con plataformas CAD vía APIs estándar. KabatOne K-Dispatch está diseñado para recibir eventos de incidente desde múltiples fuentes y puede integrarse con sistemas de recepción NG911 como Carbyne. Sin embargo, para nuevas implementaciones, KabatOne provee recepción de llamadas integrada como parte del flujo nativo de K-Dispatch.',
    },
    {
      question: '¿Cuál es mejor para un centro de mando — Carbyne o KabatOne?',
      answer: 'Carbyne y KabatOne atienden partes distintas del ciclo de respuesta. Carbyne es la opción más fuerte para modernizar la experiencia de recepción de llamadas 911 — la ubicación del llamante y el video desde el teléfono son capacidades genuinamente innovadoras. KabatOne es la plataforma más fuerte para el centro de mando completo: video de cámaras fijas, despacho CAD, GIS, tráfico y coordinación de campo en un flujo unificado. Un centro de mando moderno podría usar ambos — Carbyne para el intake, KabatOne para todo lo demás.',
    },
    {
      question: '¿Qué ofrece KabatOne que Carbyne no ofrece?',
      answer: 'En comparación con Carbyne, KabatOne ofrece: despacho CAD completo (K-Dispatch) con recomendación de unidades, asignación y logging; conciencia situacional GIS a escala de ciudad (K-Safety) con mapa en tiempo real de todos los incidentes y unidades respondedoras; video persistente de cámaras fijas de ciudad (K-Video) — Carbyne solo tiene video temporal del teléfono del llamante; gestión de tráfico inteligente (K-Traffic); y video comunitario (K-Connect). KabatOne cubre el ciclo completo de respuesta; Carbyne cubre el punto de entrada.',
    },
  ] : [
    {
      question: 'What is the difference between KabatOne and Carbyne?',
      answer: 'Carbyne is a next-gen 911 platform specialized in emergency call intake — it delivers real-time caller location, video from the citizen\'s phone, and text-to-911 support. It is an excellent solution for modernizing the PSAP (Public Safety Answering Point) experience. KabatOne covers the full cycle: from call intake through dispatch, field unit tracking, and incident closure. Carbyne improves the 911 intake point; KabatOne manages everything that happens after.',
    },
    {
      question: 'Does Carbyne include CAD dispatch software?',
      answer: 'No. Carbyne specializes in emergency call handling — caller data enrichment, precise location, and real-time video. It does not include a CAD module for dispatching units, tracking responders on a GIS map, or managing the incident lifecycle. Agencies using Carbyne need a separate CAD system — such as Motorola PremierOne or Hexagon HxGN OnCall — for dispatch. KabatOne includes K-Dispatch as a native CAD module.',
    },
    {
      question: 'What happens after the call in Carbyne vs KabatOne?',
      answer: 'In Carbyne, the operator receives the call with enriched caller data — location, video, history — but dispatching a unit and tracking the responder require a separate CAD system. In KabatOne, the operator receives the incident in K-Dispatch, dispatches the unit, tracks it in real time on the K-Safety GIS map, can validate with K-Video cameras, and coordinate traffic with K-Traffic — all in one workflow, without switching systems.',
    },
    {
      question: 'Can KabatOne integrate with Carbyne for 911 call intake?',
      answer: 'Yes, in principle call intake systems can integrate with CAD platforms via standard APIs. KabatOne K-Dispatch is designed to receive incident events from multiple sources and can integrate with NG911 intake systems like Carbyne. However, for new deployments, KabatOne provides integrated call intake as part of the native K-Dispatch workflow.',
    },
    {
      question: 'Which is better for a command center — Carbyne or KabatOne?',
      answer: 'Carbyne and KabatOne address different parts of the response cycle. Carbyne is the stronger choice for modernizing the 911 call intake experience — caller location and phone video are genuinely innovative capabilities. KabatOne is the stronger platform for the full command center: fixed camera video, CAD dispatch, GIS, traffic, and field coordination in a unified workflow. A modern command center could use both — Carbyne for intake, KabatOne for everything after.',
    },
    {
      question: 'What does KabatOne offer that Carbyne does not?',
      answer: 'Compared to Carbyne, KabatOne provides: full CAD dispatch (K-Dispatch) with unit recommendation, assignment, and logging; city-scale GIS situational awareness (K-Safety) with a real-time map of all incidents and responding units; persistent city fixed-camera video (K-Video) — Carbyne only has temporary caller-phone video; intelligent traffic management (K-Traffic); and community video (K-Connect). KabatOne covers the full response cycle; Carbyne covers the intake point.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Categoría principal',
      carbyne: 'Plataforma next-gen 911 — recepción de llamadas y datos del llamante',
      kabatone: 'Plataforma de operaciones completa (intake → despacho → campo → cierre)',
    },
    {
      category: '911 / Recepción de emergencias',
      carbyne: 'Excelente: ubicación en tiempo real, video del teléfono, texto-a-911',
      kabatone: 'Recepción de llamadas integrada en el flujo CAD de K-Dispatch',
    },
    {
      category: 'Despacho / CAD',
      carbyne: 'No incluido — solo enriquecimiento de datos del llamante',
      kabatone: 'K-Dispatch — CAD completo: recomendación, asignación y logging',
    },
    {
      category: 'Videovigilancia',
      carbyne: 'Video del teléfono del llamante (en vivo durante la llamada, no persistente)',
      kabatone: 'K-Video — cámaras fijas persistentes con analítica IA e historial de incidentes',
    },
    {
      category: 'Gestión de tráfico',
      carbyne: 'No incluido',
      kabatone: 'K-Traffic — gestión inteligente de semáforos e incidentes de tráfico',
    },
    {
      category: 'GIS / Conciencia situacional',
      carbyne: 'Pin de ubicación del llamante en mapa',
      kabatone: 'K-Safety — mapa operativo completo con todos los incidentes y unidades respondedoras',
    },
    {
      category: 'Completitud de la plataforma',
      carbyne: 'Componente de intake 911 — requiere stack CAD completo adicional',
      kabatone: 'Plataforma completa: desde intake 911 hasta cierre de unidad en campo',
    },
  ] : [
    {
      category: 'Primary category',
      carbyne: 'Next-gen 911 platform — call intake and caller data',
      kabatone: 'Complete operations platform (intake → dispatch → field → closure)',
    },
    {
      category: '911 / Emergency intake',
      carbyne: 'Excellent: real-time location, caller phone video, text-to-911',
      kabatone: 'Call intake integrated in K-Dispatch CAD workflow',
    },
    {
      category: 'Dispatch / CAD',
      carbyne: 'Not included — caller data enrichment only',
      kabatone: 'K-Dispatch — full CAD: recommendation, assignment, and logging',
    },
    {
      category: 'Video surveillance',
      carbyne: 'Caller phone video (live during call, not persistent)',
      kabatone: 'K-Video — persistent fixed cameras with AI analytics and incident archive',
    },
    {
      category: 'Traffic management',
      carbyne: 'Not included',
      kabatone: 'K-Traffic — intelligent signal and traffic incident management',
    },
    {
      category: 'GIS / Situational awareness',
      carbyne: 'Caller location pin on map',
      kabatone: 'K-Safety — full operational map with all incidents and responding units',
    },
    {
      category: 'Platform completeness',
      carbyne: '911 intake component — complete CAD stack required alongside',
      kabatone: 'Complete platform: 911 intake through field unit closure in one workflow',
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
          <span style={{ color: ACCENT }}>KabatOne vs Carbyne</span>
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
              ? 'KabatOne vs Carbyne — Carbyne Reinventó el 911. KabatOne Gestiona Todo lo que Sigue.'
              : 'KabatOne vs Carbyne — Carbyne Reinvented 911 Intake. KabatOne Manages Everything After.'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'Carbyne es una de las innovaciones más importantes en tecnología de 911 de la última década — ubicación precisa del llamante, video desde el teléfono del ciudadano y texto-a-911 en una plataforma de next-gen 911. KabatOne comienza donde termina la llamada: despacho CAD, conciencia situacional GIS, video de cámaras fijas de ciudad y gestión de tráfico en un flujo de respuesta unificado desde el centro de mando.'
              : 'Carbyne is one of the most important innovations in 911 technology in the past decade — precise caller location, video from the citizen\'s phone, and text-to-911 in a next-gen 911 platform. KabatOne starts where the call ends: CAD dispatch, GIS situational awareness, city fixed-camera video, and traffic management in a unified response workflow from the command center.'}
          </p>
        </section>

        {/* ── WHAT IS CARBYNE? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es Carbyne?' : 'What Is Carbyne?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Carbyne es una empresa israelí-estadounidense de tecnología de seguridad pública fundada en 2014 y especializada en plataformas de next-gen 911 (NG911). Su producto principal, Carbyne Command, permite a los PSAPs (Public Safety Answering Points) recibir la ubicación exacta del llamante en tiempo real — incluso en interiores — y ver video en vivo desde el teléfono del ciudadano durante la llamada de emergencia. También incluye soporte de texto-a-911 y capacidades de transferencia de llamadas entre centros con datos completos del incidente.'
                : 'Carbyne is an Israeli-American public safety technology company founded in 2014 and specialized in next-gen 911 (NG911) platforms. Its primary product, Carbyne Command, allows PSAPs (Public Safety Answering Points) to receive the caller\'s exact location in real time — even indoors — and see live video from the citizen\'s phone during the emergency call. It also includes text-to-911 support and call transfer capabilities between centers with full incident data.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'La propuesta de Carbyne es genuinamente valiosa: el sistema 911 tradicional fue diseñado para teléfonos fijos y tiene serias limitaciones con teléfonos celulares, especialmente en ubicación precisa. Carbyne resuelve ese problema con tecnología de geolocalización avanzada que supera la ubicación de torre de celular tradicional. Para centros 911 que manejan grandes volúmenes de llamadas desde teléfonos móviles, Carbyne mejora significativamente la calidad de la información en el punto de contacto.'
                : 'Carbyne\'s proposition is genuinely valuable: the traditional 911 system was designed for landlines and has serious limitations with mobile phones, especially in precise location. Carbyne solves that problem with advanced geolocation technology that surpasses traditional cell tower location. For 911 centers handling large volumes of mobile calls, Carbyne significantly improves information quality at the point of contact.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Sin embargo, Carbyne se enfoca exclusivamente en el manejo de la llamada de entrada — no incluye CAD para despacho de unidades, no tiene GIS operacional para seguimiento de respondedores, no incluye video persistente de cámaras fijas de ciudad ni gestión de tráfico. Es un componente de mejora del punto de entrada que requiere un stack CAD completo adicional para el resto del flujo de respuesta.'
                : 'However, Carbyne focuses exclusively on incoming call handling — it does not include CAD for unit dispatch, does not have operational GIS for responder tracking, does not include persistent city fixed-camera video, and does not include traffic management. It is an intake point enhancement component that requires a complete additional CAD stack for the rest of the response workflow.'}
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
                ? 'KabatOne es una plataforma unificada de seguridad pública construida para ciudades, municipios, centros de mando y agencias de respuesta. Integra gestión de video con analítica IA (K-Video), despacho CAD (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario (K-Connect) en una plataforma nativa sobre la plataforma K1.'
                : 'KabatOne is a unified public safety platform built for cities, municipalities, command centers, and response agencies. It integrates AI-powered video management (K-Video), CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video (K-Connect) in one native platform on the K1 platform.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne cubre el ciclo completo de respuesta a emergencias — desde la recepción del incidente hasta el cierre en campo. Cuando un operador recibe un incidente en K-Dispatch, puede validarlo con cámaras de K-Video, despacharlo, rastrear la unidad respondedora en el mapa GIS de K-Safety, y coordinar el tráfico con K-Traffic — sin salir de la plataforma. KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos.'
                : 'KabatOne covers the full emergency response cycle — from incident intake through field closure. When an operator receives an incident in K-Dispatch, they can validate it with K-Video cameras, dispatch it, track the responding unit on the K-Safety GIS map, and coordinate traffic with K-Traffic — without leaving the platform. KabatOne is deployed across 40+ cities protecting over 73 million citizens.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Carbyne y KabatOne no son necesariamente mutuamente excluyentes — Carbyne puede mejorar la calidad de la llamada de entrada, mientras KabatOne gestiona todo el flujo de respuesta posterior. Pero como plataforma central del centro de mando, KabatOne cubre un alcance significativamente mayor que Carbyne.'
                : 'Carbyne and KabatOne are not necessarily mutually exclusive — Carbyne can improve incoming call quality while KabatOne manages the entire subsequent response workflow. But as the core command center platform, KabatOne covers a significantly broader scope than Carbyne.'}
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
              {es ? 'KabatOne vs Carbyne: Diferencias Clave' : 'KabatOne vs Carbyne: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara KabatOne y Carbyne en siete dimensiones operativas críticas para organizaciones de seguridad pública.'
                : 'The following table compares KabatOne and Carbyne across seven operational dimensions critical for public safety organizations.'}
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
                  Carbyne
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
                    {row.carbyne}
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
              {es ? 'La Llamada Termina — El Trabajo Continúa' : 'The Call Ends — The Work Continues'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Carbyne resuelve brillantemente el problema de los primeros segundos del 911: ¿dónde está exactamente el llamante? ¿Puedo ver lo que está viendo? Esas son preguntas críticas que Carbyne responde mejor que cualquier otro sistema del mercado. Pero la llamada de 911 es el inicio del ciclo de respuesta, no el ciclo completo.'
                : 'Carbyne brilliantly solves the problem of the first seconds of 911: where exactly is the caller? Can I see what they\'re seeing? Those are critical questions that Carbyne answers better than any other system in the market. But the 911 call is the start of the response cycle, not the full cycle.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Una vez que el operador ha recibido la llamada con datos enriquecidos de Carbyne, necesita: despachar la unidad correcta (CAD), rastrear esa unidad en tiempo real sobre un mapa de ciudad (GIS), ver las cámaras fijas en la zona del incidente (video), y coordinar los semáforos para que la ambulancia llegue más rápido (tráfico). Ninguna de esas funciones está en Carbyne. KabatOne cubre todas en un solo flujo nativo.'
                : 'Once the operator has received the call with Carbyne\'s enriched data, they need to: dispatch the right unit (CAD), track that unit in real time on a city map (GIS), see the fixed cameras in the incident zone (video), and coordinate traffic signals so the ambulance arrives faster (traffic). None of those functions are in Carbyne. KabatOne covers all of them in one native workflow.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Para centros de mando que buscan modernizar el ciclo completo — no solo el punto de entrada — KabatOne es la plataforma diseñada para ese objetivo. Para centros que ya tienen un stack CAD y necesitan mejorar específicamente la calidad de la recepción de llamadas móviles, Carbyne puede ser un componente valioso en el ecosistema.'
                : 'For command centers looking to modernize the full cycle — not just the intake point — KabatOne is the platform designed for that goal. For centers that already have a CAD stack and specifically need to improve the quality of mobile call intake, Carbyne can be a valuable component in the ecosystem.'}
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
              {es ? 'KabatOne: Video Persistente de Ciudad, No Solo Video de la Llamada' : 'KabatOne: Persistent City Video, Not Just Call Video'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El video de Carbyne está disponible durante la llamada activa — el operador puede ver lo que el llamante ve desde su teléfono mientras el incidente está siendo reportado. Esto es valioso para evaluar la gravedad del incidente en el momento del contacto. Sin embargo, una vez que la llamada termina, ese video no está disponible para el seguimiento del incidente.'
                : 'Carbyne\'s video is available during the active call — the operator can see what the caller sees from their phone while the incident is being reported. This is valuable for assessing incident severity at the moment of contact. However, once the call ends, that video is not available for incident tracking.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'K-Video de KabatOne gestiona video de cámaras fijas de ciudad — las cámaras instaladas en calles, intersecciones, parques y edificios. Ese video es persistente: disponible antes del incidente, durante y después, con capacidad de búsqueda y archivo. Para la validación de incidentes, el seguimiento de vehículos y la documentación de evidencia, el video de cámaras fijas es complementario — y frecuentemente superior — al video temporal del teléfono del llamante.'
                : 'KabatOne K-Video manages city fixed-camera video — cameras installed on streets, intersections, parks, and buildings. That video is persistent: available before the incident, during, and after, with search and archive capabilities. For incident validation, vehicle tracking, and evidence documentation, fixed camera video is complementary to — and frequently superior to — temporary caller phone video.'}
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
              {es ? 'KabatOne vs Carbyne: Preguntas y Respuestas' : 'KabatOne vs Carbyne: Questions & Answers'}
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
              <Link href="/vs/cad" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Sistemas CAD Tradicionales' : 'KabatOne vs Traditional CAD Systems'}</span>
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
              <Link href="/resources/how-c5-command-centers-work" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'Cómo Funcionan los Centros C5' : 'How C5 Command Centers Work'}</span>
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
            ? 'Descubre cómo KabatOne gestiona el ciclo completo de respuesta — desde el intake hasta el cierre en campo. Solicita una demo.'
            : 'See how KabatOne manages the full response cycle — from intake through field closure. Request a demo.'}
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
