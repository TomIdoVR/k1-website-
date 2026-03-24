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
  return generatePageMetadata('vsMark43', locale)
}

export default async function VsMark43Page({
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
    { name: 'KabatOne vs Mark43', url: es ? 'https://kabatone.com/es/vs/mark43/' : 'https://kabatone.com/vs/mark43/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre KabatOne y Mark43?',
      answer: 'Mark43 es una plataforma cloud-native de CAD y RMS (Records Management System) para agencias de seguridad pública, principalmente en Estados Unidos. Lleva modernidad y arquitectura en la nube a sistemas que históricamente eran on-premise. KabatOne va más allá de CAD y RMS: integra gestión de video (K-Video), CAD (K-Dispatch), GIS operacional (K-Safety), gestión de tráfico (K-Traffic) y video comunitario (K-Connect) en una sola plataforma nativa. La diferencia es de alcance: Mark43 moderniza el stack de CAD/RMS; KabatOne unifica toda la operación de respuesta.',
    },
    {
      question: '¿Mark43 incluye gestión de video?',
      answer: 'No. Mark43 se centra en CAD y RMS — no incluye un módulo de gestión de video o VMS. Las organizaciones que necesitan video de vigilancia junto con Mark43 deben implementar un VMS separado como Genetec, Milestone o Avigilon. KabatOne incluye K-Video como módulo nativo con analítica IA, integrado directamente con el flujo de despacho, GIS y tráfico.',
    },
    {
      question: '¿Cómo se compara el CAD de Mark43 con K-Dispatch de KabatOne?',
      answer: 'Mark43 CAD es moderno, intuitivo y cloud-native — una mejora significativa sobre sistemas CAD legacy. K-Dispatch de KabatOne ofrece funcionalidad CAD equivalente — intake de llamadas, recomendación de unidades, despacho y logging — con la ventaja de estar nativamente integrado con K-Video (video del incidente), K-Safety (mapa GIS con la unidad) y K-Traffic (estado del tráfico en la ruta) en la misma interfaz. Mark43 hace el CAD bien; KabatOne conecta el CAD con todo lo demás.',
    },
    {
      question: '¿Mark43 está disponible fuera de los Estados Unidos?',
      answer: 'Mark43 está principalmente orientado al mercado de seguridad pública de Estados Unidos. KabatOne está desplegado en más de 40 ciudades principalmente en México y Latinoamérica, con presencia también en Estados Unidos. Para municipios y centros de mando en México y Latinoamérica que necesitan CAD, video, GIS y tráfico en un solo sistema, KabatOne tiene la mayor presencia regional y casos de uso probados.',
    },
    {
      question: '¿Cuál es mejor para una plataforma moderna de seguridad pública — Mark43 o KabatOne?',
      answer: 'Ambas son plataformas modernas cloud-native, pero con alcances distintos. Mark43 es la opción más fuerte para agencias de ley en Estados Unidos que priorizan modernizar su stack CAD/RMS y pueden gestionar integraciones separadas para video y GIS. KabatOne es la opción más fuerte para ciudades, municipios y centros C4/C5 que necesitan video, CAD, GIS y tráfico en un solo flujo operativo — especialmente fuera de Estados Unidos.',
    },
    {
      question: '¿Qué ofrece KabatOne que Mark43 no ofrece?',
      answer: 'En comparación con Mark43, KabatOne agrega: gestión de video nativa con analítica IA (K-Video) — Mark43 no incluye VMS; GIS operacional completo (K-Safety) con mapa en tiempo real de incidentes, unidades y feeds de video — Mark43 tiene mapeo básico; gestión de tráfico inteligente (K-Traffic) con control de semáforos, detección de infracciones y coordinación de vehículos de emergencia; video comunitario (K-Connect) para integrar cámaras ciudadanas al centro de mando; y presencia probada en México y Latinoamérica.',
    },
  ] : [
    {
      question: 'What is the difference between KabatOne and Mark43?',
      answer: 'Mark43 is a cloud-native CAD and RMS (Records Management System) platform for public safety agencies, primarily in the United States. It brings modern architecture and cloud capabilities to systems that were historically on-premise. KabatOne goes beyond CAD and RMS: it integrates video management (K-Video), CAD (K-Dispatch), operational GIS (K-Safety), traffic management (K-Traffic), and community video (K-Connect) in one native platform. The difference is scope: Mark43 modernizes the CAD/RMS stack; KabatOne unifies the entire response operation.',
    },
    {
      question: 'Does Mark43 include video management?',
      answer: 'No. Mark43 focuses on CAD and RMS — it does not include a video management or VMS module. Organizations that need surveillance video alongside Mark43 must deploy a separate VMS such as Genetec, Milestone, or Avigilon. KabatOne includes K-Video as a native module with AI analytics, integrated directly into the dispatch, GIS, and traffic workflow.',
    },
    {
      question: 'How does Mark43\'s CAD compare to KabatOne\'s K-Dispatch?',
      answer: 'Mark43 CAD is modern, intuitive, and cloud-native — a significant improvement over legacy CAD systems. KabatOne\'s K-Dispatch provides equivalent CAD functionality — call intake, unit recommendation, dispatch, and logging — with the advantage of being natively integrated with K-Video (incident video), K-Safety (GIS map with the unit), and K-Traffic (traffic status on the route) in the same interface. Mark43 does CAD well; KabatOne connects CAD to everything else.',
    },
    {
      question: 'Is Mark43 available outside the United States?',
      answer: 'Mark43 is primarily oriented toward the United States public safety market. KabatOne is deployed across 40+ cities primarily in Mexico and Latin America, with a presence in the United States as well. For municipalities and command centers in Mexico and Latin America that need CAD, video, GIS, and traffic in one system, KabatOne has the strongest regional presence and proven use cases.',
    },
    {
      question: 'Which is better for a modern public safety platform — Mark43 or KabatOne?',
      answer: 'Both are modern cloud-native platforms, but with different scopes. Mark43 is the stronger choice for US law enforcement agencies that prioritize modernizing their CAD/RMS stack and can manage separate integrations for video and GIS. KabatOne is the stronger choice for cities, municipalities, and C4/C5 command centers that need video, CAD, GIS, and traffic in one operational workflow — especially outside the United States.',
    },
    {
      question: 'What does KabatOne offer that Mark43 does not?',
      answer: 'Compared to Mark43, KabatOne adds: native video management with AI analytics (K-Video) — Mark43 does not include a VMS; full operational GIS (K-Safety) with a real-time map of incidents, units, and video feeds — Mark43 has basic mapping; intelligent traffic management (K-Traffic) with signal control, violation detection, and emergency vehicle coordination; community video (K-Connect) to integrate citizen cameras into the command center; and proven deployment in Mexico and Latin America.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Categoría principal',
      mark43: 'CAD cloud-native + RMS',
      kabatone: 'Plataforma unificada de seguridad pública (video + CAD + GIS + tráfico + campo)',
    },
    {
      category: 'Videovigilancia',
      mark43: 'No incluido — requiere VMS de terceros',
      kabatone: 'K-Video nativo, con analítica IA, cualquier fabricante',
    },
    {
      category: 'Despacho / CAD',
      mark43: 'Mark43 CAD (moderno, cloud-native)',
      kabatone: 'K-Dispatch nativo, integrado con video, GIS y tráfico',
    },
    {
      category: 'Gestión de registros (RMS)',
      mark43: 'Mark43 RMS (funcional, amplio)',
      kabatone: 'Registros de ciclo de incidente nativos en el flujo de K-Dispatch',
    },
    {
      category: 'GIS / Conciencia situacional',
      mark43: 'Mapeo básico con ubicación de unidades',
      kabatone: 'K-Safety — GIS operacional completo con incidentes, unidades y feeds de video',
    },
    {
      category: 'Gestión de tráfico',
      mark43: 'No incluido',
      kabatone: 'K-Traffic — gestión inteligente de semáforos e incidentes de tráfico',
    },
    {
      category: 'Despliegue',
      mark43: 'Cloud-native ✓',
      kabatone: 'Cloud-native ✓',
    },
  ] : [
    {
      category: 'Primary category',
      mark43: 'Cloud-native CAD + RMS',
      kabatone: 'Unified public safety platform (video + CAD + GIS + traffic + field)',
    },
    {
      category: 'Video surveillance',
      mark43: 'Not included — third-party VMS required',
      kabatone: 'K-Video native, AI analytics, any manufacturer',
    },
    {
      category: 'Dispatch / CAD',
      mark43: 'Mark43 CAD (modern, cloud-native)',
      kabatone: 'K-Dispatch native, integrated with video, GIS, and traffic',
    },
    {
      category: 'Records Management (RMS)',
      mark43: 'Mark43 RMS (full-featured, strong)',
      kabatone: 'Incident lifecycle records native in K-Dispatch workflow',
    },
    {
      category: 'GIS / Situational awareness',
      mark43: 'Basic mapping with unit locations',
      kabatone: 'K-Safety — full operational GIS with incidents, units, and video feeds',
    },
    {
      category: 'Traffic management',
      mark43: 'Not included',
      kabatone: 'K-Traffic — intelligent signal and traffic incident management',
    },
    {
      category: 'Deployment',
      mark43: 'Cloud-native ✓',
      kabatone: 'Cloud-native ✓',
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
          <span style={{ color: ACCENT }}>KabatOne vs Mark43</span>
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
              ? 'KabatOne vs Mark43 — Cloud-Native CAD, Más el Flujo Completo'
              : 'KabatOne vs Mark43 — Cloud-Native CAD, Plus the Full Workflow'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'Mark43 llevó arquitectura cloud-native al mundo del CAD legacy — una mejora real para agencias que operaban con sistemas on-premise de décadas. KabatOne parte desde el mismo punto de partida cloud-native y lo extiende: video, CAD, GIS y gestión de tráfico en un solo flujo operativo, sin necesidad de sistemas adicionales para cubrir el ciclo completo de respuesta.'
              : 'Mark43 brought cloud-native architecture to the legacy CAD world — a genuine improvement for agencies running decades-old on-premise systems. KabatOne starts from that same cloud-native baseline and extends it: video, CAD, GIS, and traffic management in one operational workflow, with no additional systems required to cover the full response cycle.'}
          </p>
        </section>

        {/* ── WHAT IS MARK43? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es Mark43?' : 'What Is Mark43?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Mark43 es una empresa de software de seguridad pública fundada en 2012 que construyó una plataforma CAD (Computer-Aided Dispatch) y RMS (Records Management System) nativa en la nube — en un mercado dominado por sistemas on-premise de décadas como Motorola PremierOne y Hexagon HxGN OnCall. Su propuesta principal es modernización: UX más limpia, arquitectura en la nube, actualizaciones continuas sin interrupciones del sistema.'
                : 'Mark43 is a public safety software company founded in 2012 that built a cloud-native CAD (Computer-Aided Dispatch) and RMS (Records Management System) platform — in a market dominated by decades-old on-premise systems like Motorola PremierOne and Hexagon HxGN OnCall. Its core proposition is modernization: cleaner UX, cloud architecture, continuous updates without system downtime.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El CAD de Mark43 incluye gestión de llamadas, despacho de unidades, recomendación basada en disponibilidad y proximidad, y logging de todas las acciones del despachador. Su RMS cubre reporte de incidentes, gestión de arrestos, administración de evidencias y analítica de datos para comandancia. Está orientado principalmente a departamentos de policía en Estados Unidos.'
                : 'Mark43\'s CAD includes call management, unit dispatch, recommendation based on availability and proximity, and logging of all dispatcher actions. Its RMS covers incident reporting, arrest management, evidence administration, and data analytics for command staff. It is oriented primarily toward US police departments.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Mark43 no incluye gestión de video, GIS operacional avanzado, gestión de tráfico inteligente ni integración de video ciudadano. Para un centro de mando que necesita estas capacidades junto con CAD, cada una requiere un sistema separado de un proveedor diferente.'
                : 'Mark43 does not include video management, advanced operational GIS, intelligent traffic management, or citizen video integration. For a command center that needs these capabilities alongside CAD, each requires a separate system from a different vendor.'}
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
                ? 'KabatOne es una plataforma unificada de seguridad pública cloud-native construida para ciudades, municipios, centros de mando y agencias de respuesta. Integra gestión de video con analítica IA (K-Video), despacho CAD (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario (K-Connect) en una plataforma nativa sobre la plataforma K1.'
                : 'KabatOne is a cloud-native unified public safety platform built for cities, municipalities, command centers, and response agencies. It integrates AI-powered video management (K-Video), CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video (K-Connect) in one native platform on the K1 platform.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Al igual que Mark43, KabatOne es cloud-native desde el inicio. La diferencia es el alcance: cuando un operador recibe un incidente en K-Dispatch, el evento aparece automáticamente en el mapa de K-Safety, activa el feed de video relevante en K-Video y puede coordinar la ruta de la unidad con K-Traffic — todo en una sola pantalla, sin cambiar de aplicación.'
                : 'Like Mark43, KabatOne is cloud-native from the start. The difference is scope: when an operator receives an incident in K-Dispatch, the event automatically appears on the K-Safety map, triggers the relevant video feed in K-Video, and can coordinate the unit\'s route with K-Traffic — all in one screen, without switching applications.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos, principalmente en México y Latinoamérica. Para municipios y centros C4/C5 en la región que buscan una plataforma moderna, unificada y probada, KabatOne es la referencia del mercado.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens, primarily in Mexico and Latin America. For municipalities and C4/C5 command centers in the region looking for a modern, unified, proven platform, KabatOne is the market reference.'}
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
              {es ? 'KabatOne vs Mark43: Diferencias Clave' : 'KabatOne vs Mark43: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara KabatOne y Mark43 en siete dimensiones operativas críticas para organizaciones de seguridad pública.'
                : 'The following table compares KabatOne and Mark43 across seven operational dimensions critical for public safety organizations.'}
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
                  Mark43
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
                    {row.mark43}
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
              {es ? 'Más Allá del CAD: El Ciclo Completo de Respuesta' : 'Beyond CAD: The Full Response Cycle'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Mark43 resuelve bien un problema real: modernizar el CAD legacy. Pero un CAD — por más moderno que sea — solo cubre la parte de despacho del ciclo de respuesta. Un centro de mando también necesita validar incidentes con video antes de despachar, rastrear unidades en tiempo real sobre un mapa GIS, coordinar el tráfico durante emergencias y capturar video ciudadano de incidentes activos. Para cada una de esas necesidades, Mark43 requiere un sistema separado.'
                : 'Mark43 solves a real problem well: modernizing legacy CAD. But a CAD — however modern — only covers the dispatch portion of the response cycle. A command center also needs to validate incidents with video before dispatching, track units in real time on a GIS map, coordinate traffic during emergencies, and capture citizen video of active incidents. For each of those needs, Mark43 requires a separate system.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne cubre todo el ciclo en una plataforma nativa. Cuando un operador detecta un incidente en K-Safety o K-Video, puede validarlo, despachar una unidad desde K-Dispatch, ver la ruta de la unidad en el mapa GIS y monitorear el tráfico circundante con K-Traffic — todo sin salir de la plataforma. No hay proyectos de integración, no hay latencia entre sistemas y no hay múltiples contratos de soporte.'
                : 'KabatOne covers the entire cycle in one native platform. When an operator detects an incident in K-Safety or K-Video, they can validate it, dispatch a unit from K-Dispatch, view the unit\'s route on the GIS map, and monitor surrounding traffic with K-Traffic — all without leaving the platform. No integration projects, no latency between systems, and no multiple support contracts.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne también tiene una ventaja regional significativa para México y Latinoamérica: más de 40 despliegues activos en municipios y centros C4/C5, localization completa en español y un equipo con experiencia en los modelos operativos de centros de mando latinoamericanos. Mark43 está primordialmente orientado al mercado de Estados Unidos.'
                : 'KabatOne also has a significant regional advantage for Mexico and Latin America: 40+ active deployments in municipalities and C4/C5 centers, full Spanish localization, and a team with deep experience in Latin American command center operational models. Mark43 is primarily oriented toward the US market.'}
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
              {es ? 'KabatOne Funciona con la Infraestructura Existente' : 'KabatOne Works with Existing Infrastructure'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne está diseñado para integrarse con la infraestructura existente — cámaras de cualquier fabricante (ONVIF, RTSP), sistemas de radio estándar y sensores IoT. No requiere reemplazar hardware que ya funciona. Las organizaciones pueden incorporar KabatOne como plataforma de coordinación unificada y mantener sus inversiones en cámaras y comunicaciones existentes.'
                : 'KabatOne is designed to integrate with existing infrastructure — cameras from any manufacturer (ONVIF, RTSP), standard radio systems, and IoT sensors. It does not require replacing hardware that is already working. Organizations can bring in KabatOne as the unified coordination platform and retain their existing camera and communications investments.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Para organizaciones que actualmente evalúan Mark43 o que ya lo usan y necesitan ampliar capacidades con video y tráfico, KabatOne ofrece una plataforma integrada que reemplaza el stack fragmentado (Mark43 + VMS separado + sistema de tráfico separado) con un solo sistema nativo.'
                : 'For organizations currently evaluating Mark43 or already using it and needing to expand capabilities with video and traffic, KabatOne offers an integrated platform that replaces the fragmented stack (Mark43 + separate VMS + separate traffic system) with one native system.'}
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
              {es ? 'KabatOne vs Mark43: Preguntas y Respuestas' : 'KabatOne vs Mark43: Questions & Answers'}
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
              <Link href="/vs/hexagon" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Hexagon HxGN OnCall' : 'KabatOne vs Hexagon HxGN OnCall'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/what-is-a-public-safety-platform" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? '¿Qué Es una Plataforma de Seguridad Pública?' : 'What Is a Public Safety Platform?'}</span>
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
