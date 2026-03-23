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
  return generatePageMetadata('vsGenetec', locale)
}

export default async function VsGenetecPage({
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
    { name: 'KabatOne vs Genetec', url: es ? 'https://kabatone.com/es/vs/genetec/' : 'https://kabatone.com/vs/genetec/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre KabatOne y Genetec Security Center?',
      answer: 'Genetec Security Center es una plataforma de seguridad empresarial centrada en gestión de video, control de acceso y reconocimiento de placas. KabatOne es una plataforma unificada de seguridad pública que agrega despacho CAD (K-Dispatch), conciencia situacional GIS (K-Safety), gestión de tráfico (K-Traffic) y video comunitario (K-Connect) a la gestión de video — conectando toda la cadena de respuesta en un solo sistema. La diferencia central es de alcance: Genetec gestiona activos de seguridad física; KabatOne coordina el flujo completo de respuesta a incidentes.',
    },
    {
      question: '¿Genetec incluye software de despacho CAD?',
      answer: 'Genetec Security Center no incluye un módulo de despacho CAD nativo. Las organizaciones que necesitan CAD o despacho de emergencias junto con Genetec deben integrar un sistema CAD de terceros por separado. KabatOne incluye K-Dispatch como módulo nativo, integrando recepción de llamadas, recomendación de unidades y registro de despacho directamente con video y GIS en una sola plataforma.',
    },
    {
      question: '¿KabatOne puede integrarse con cámaras Genetec existentes?',
      answer: 'Sí. KabatOne K-Video soporta ONVIF, RTSP y protocolos IP estándar de la industria, lo que permite agregar feeds de cámaras de despliegues Genetec junto con cámaras de otros fabricantes. Esto permite a las organizaciones con infraestructura Genetec existente incorporar las capacidades de despacho, GIS y tráfico de KabatOne sin reemplazar su infraestructura de cámaras.',
    },
    {
      question: '¿Es KabatOne una alternativa a Genetec para seguridad pública?',
      answer: 'KabatOne y Genetec atienden casos de uso distintos que se superponen parcialmente. Genetec es la opción más fuerte para entornos empresariales donde la necesidad principal es gestión de video a gran escala y control de acceso. KabatOne es la opción más fuerte para operaciones de seguridad pública — municipios, centros de mando y agencias de emergencia — que necesitan el flujo completo de respuesta: video, despacho, GIS, tráfico y coordinación de campo en un solo sistema.',
    },
    {
      question: '¿Cuál es mejor para centros de mando C5 — Genetec o KabatOne?',
      answer: 'KabatOne está diseñado específicamente para operaciones de centros de mando C4 y C5 en México y Latinoamérica. Los centros C5 requieren integración en tiempo real de múltiples disciplinas de emergencia — videovigilancia, despacho CAD, gestión de tráfico y reporte ciudadano de incidentes — en una sola vista operativa. Los módulos K-Safety, K-Dispatch, K-Video y K-Traffic de KabatOne están diseñados específicamente para este modelo operativo. KabatOne opera en más de 40 ciudades con estructuras de centros de mando C5 o similares en Latinoamérica.',
    },
    {
      question: '¿Qué ofrece KabatOne que Genetec no ofrece?',
      answer: 'En comparación con Genetec Security Center, KabatOne agrega: software CAD/despacho (K-Dispatch) para coordinación de emergencias; conciencia situacional GIS nativa (K-Safety) con seguimiento en vivo de incidentes en toda la ciudad; gestión inteligente de tráfico (K-Traffic) para control de semáforos y detección de infracciones; compartición de video comunitario (K-Connect) para integración de video público-privado; y soporte de flujo de trabajo para responders en campo. KabatOne está diseñado específicamente para el flujo de respuesta de extremo a extremo, no solo para monitoreo de activos.',
    },
  ] : [
    {
      question: 'What is the difference between KabatOne and Genetec Security Center?',
      answer: 'Genetec Security Center is an enterprise IP security platform focused on video management, access control, and license plate recognition. KabatOne is a unified public safety platform that adds CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), traffic management (K-Traffic), and community video sharing (K-Connect) to video management — connecting the full incident response chain in one system. The core difference is scope: Genetec manages physical security assets; KabatOne coordinates the full response workflow.',
    },
    {
      question: 'Does Genetec include CAD dispatch software?',
      answer: 'Genetec Security Center does not include a native CAD dispatch module. Organizations that need CAD or emergency dispatch alongside Genetec must integrate a separate third-party CAD system. KabatOne includes K-Dispatch as a native module, integrating call intake, unit recommendation, and dispatch logging directly with video and GIS in one platform.',
    },
    {
      question: 'Can KabatOne integrate with existing Genetec cameras?',
      answer: 'Yes. KabatOne K-Video supports ONVIF, RTSP, and standard IP camera protocols, which allows it to aggregate camera feeds from Genetec deployments alongside cameras from other manufacturers. This enables organizations with existing Genetec camera infrastructure to add KabatOne\'s dispatch, GIS, and traffic capabilities without replacing their cameras.',
    },
    {
      question: 'Is KabatOne a Genetec alternative for public safety?',
      answer: 'KabatOne and Genetec serve overlapping but distinct use cases. Genetec is the stronger choice for enterprise environments where the primary need is large-scale camera management and access control. KabatOne is the stronger choice for public safety operations — municipalities, command centers, and emergency agencies — that need the full response workflow: video, dispatch, GIS, traffic, and field coordination in one system.',
    },
    {
      question: 'Which is better for C5 command centers — Genetec or KabatOne?',
      answer: 'KabatOne is purpose-built for C4 and C5 command center operations in Mexico and Latin America. C5 command centers require real-time integration of multiple emergency disciplines — video surveillance, CAD dispatch, traffic management, and citizen incident reporting — in one operational view. KabatOne\'s K-Safety, K-Dispatch, K-Video, and K-Traffic modules are designed specifically for this operational model. KabatOne operates in 40+ cities with C5 or similar command center structures across Latin America.',
    },
    {
      question: 'What does KabatOne offer that Genetec does not?',
      answer: 'Compared to Genetec Security Center, KabatOne adds: CAD/dispatch software (K-Dispatch) for emergency coordination; native GIS situational awareness (K-Safety) with live incident tracking across the city; intelligent traffic management (K-Traffic) for signal control and violation detection; community camera sharing (K-Connect) for public-private video integration; and field responder workflow support for managing units after dispatch. KabatOne is specifically designed for the end-to-end response workflow, not just asset monitoring.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Categoría principal',
      genetec: 'Plataforma empresarial de VMS y control de acceso',
      kabatone: 'Plataforma unificada de seguridad pública',
    },
    {
      category: 'Despacho / CAD',
      genetec: 'No incluido — requiere integración CAD de terceros',
      kabatone: 'K-Dispatch — módulo CAD nativo con recepción, despacho y registro',
    },
    {
      category: 'GIS / Conciencia situacional',
      genetec: 'Vista de mapa básica (Genetec Mission Control)',
      kabatone: 'K-Safety — GIS completo con seguimiento de incidentes y unidades en tiempo real',
    },
    {
      category: 'Gestión de tráfico',
      genetec: 'No disponible',
      kabatone: 'K-Traffic — gestión inteligente de tráfico y semáforos',
    },
    {
      category: 'Video comunitario / ciudadano',
      genetec: 'Requiere integración con socios',
      kabatone: 'K-Connect — compartición nativa de video público-privado',
    },
    {
      category: 'Flujo de respuesta en campo',
      genetec: 'No incluido',
      kabatone: 'Flujos nativos para responders: asignación, seguimiento y cierre',
    },
    {
      category: 'Mercado principal',
      genetec: 'Empresas, retail, aeropuertos, campus universitarios',
      kabatone: 'Municipios, centros de mando C4/C5, agencias de seguridad pública',
    },
  ] : [
    {
      category: 'Primary category',
      genetec: 'Enterprise VMS and access control platform',
      kabatone: 'Unified public safety platform',
    },
    {
      category: 'Dispatch / CAD',
      genetec: 'Not included — requires third-party CAD integration',
      kabatone: 'K-Dispatch — native CAD with intake, dispatch, and logging',
    },
    {
      category: 'GIS / Situational awareness',
      genetec: 'Basic map view (Genetec Mission Control)',
      kabatone: 'K-Safety — full GIS with live incident and unit tracking',
    },
    {
      category: 'Traffic management',
      genetec: 'Not available',
      kabatone: 'K-Traffic — intelligent traffic and signal management',
    },
    {
      category: 'Community / citizen video',
      genetec: 'Requires partner integration',
      kabatone: 'K-Connect — native public-private video sharing',
    },
    {
      category: 'Field response workflow',
      genetec: 'Not included',
      kabatone: 'Native responder workflows: assignment, tracking, and closure',
    },
    {
      category: 'Primary market',
      genetec: 'Enterprise, retail, airports, university campuses',
      kabatone: 'Municipalities, C4/C5 command centers, public safety agencies',
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
          <span style={{ color: ACCENT }}>KabatOne vs Genetec</span>
        </div>

        {/* ── HERO ── */}
        <section style={{
          maxWidth: '800px', margin: '0 auto', padding: '64px 40px 80px',
        }}>
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
              ? 'KabatOne vs Genetec — ¿Cuál Plataforma Es la Correcta para Seguridad Pública?'
              : 'KabatOne vs Genetec — Which Platform Is Right for Public Safety?'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, marginBottom: '0',
          }}>
            {es
              ? 'Genetec Security Center es una plataforma de seguridad empresarial construida alrededor de gestión de video, control de acceso y reconocimiento de placas vehiculares. KabatOne es una plataforma unificada de seguridad pública que conecta video, despacho CAD, GIS, gestión de tráfico y operaciones de campo en un flujo de respuesta coordinada. Ambas plataformas gestionan cámaras, pero la comparación termina ahí: Genetec está construido para gestionar activos de seguridad física; KabatOne está construido para coordinar el flujo completo de respuesta desde la detección hasta la ejecución en campo.'
              : 'Genetec Security Center is an enterprise security platform built around video management, access control, and license plate recognition. KabatOne is a unified public safety platform that connects video, CAD dispatch, GIS, traffic management, and field operations into a coordinated response workflow. Both platforms handle cameras, but the comparison ends there: Genetec is built to manage physical security assets, while KabatOne is built to coordinate the full response workflow from detection through field execution.'}
          </p>
        </section>

        {/* ── WHAT IS GENETEC? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es Genetec Security Center?' : 'What Is Genetec Security Center?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Genetec Security Center es una plataforma unificada de seguridad IP que combina gestión de video (Omnicast), control de acceso (Synergis) y reconocimiento automático de placas (AutoVu) en una sola interfaz. Genetec es ampliamente utilizado en aeropuertos, universidades, retail y entornos empresariales alrededor del mundo. Su principal fortaleza es la gestión integral de cámaras, la integración con dispositivos de terceros y el control de acceso a gran escala.'
                : 'Genetec Security Center is a unified IP security platform that combines video management (Omnicast), access control (Synergis), and automatic license plate recognition (AutoVu) in one interface. Genetec is widely deployed in airports, universities, retail, and enterprise environments around the world. Its core strength is comprehensive camera management, third-party device integration, and access control at scale.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Genetec también ofrece Genetec Mission Control, un módulo de gestión de incidentes construido sobre Security Center que agrega correlación de eventos, procedimientos operativos y una vista de mapa. Mission Control está diseñado para operadores de seguridad que necesitan gestionar alarmas de múltiples sistemas desde una sola pantalla.'
                : 'Genetec also offers Genetec Mission Control, an incident management module built on top of Security Center that adds event correlation, operational procedures, and a map view. Mission Control is designed for security operators who need to manage alarms from multiple systems from a single screen.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Genetec no incluye software de despacho CAD, gestión de tráfico inteligente ni flujos de trabajo para operaciones de campo de respuesta a emergencias. Estas capacidades requieren sistemas separados de terceros en un despliegue típico de Genetec.'
                : 'Genetec does not include CAD dispatch software, intelligent traffic management, or field operations workflows for emergency response. These capabilities require separate third-party systems in a typical Genetec deployment.'}
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
                ? 'KabatOne es una plataforma unificada de seguridad pública construida específicamente para ciudades, municipios, centros de mando y agencias de respuesta a emergencias. KabatOne integra gestión de video con analítica IA (K-Video), despacho CAD (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario compartido (K-Connect) en una plataforma nativa sobre la plataforma K1.'
                : 'KabatOne is a unified public safety platform purpose-built for cities, municipalities, command centers, and emergency response agencies. KabatOne integrates AI-powered video management (K-Video), CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video sharing (K-Connect) in one native platform on the K1 platform.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos principalmente en Latinoamérica y los Estados Unidos. A diferencia de las plataformas construidas alrededor de gestión de activos, KabatOne está diseñado para el flujo completo de respuesta a incidentes: cuando un operador detecta un incidente en K-Safety o K-Video, puede validarlo, crear un evento CAD en K-Dispatch, rastrear las unidades respondedoras en el mapa GIS y cerrar el ciclo con documentación de campo — sin salir de la plataforma.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens primarily in Latin America and the United States. Unlike platforms built around asset management, KabatOne is designed for the full incident response workflow: when an operator detects an incident in K-Safety or K-Video, they can validate it, create a CAD event in K-Dispatch, track responding units on the GIS map, and close the loop with field documentation — without leaving the platform.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne se posiciona como una plataforma de seguridad pública unificada — distinta de los sistemas VMS empresariales, las capas PSIM y los productos CAD independientes. Está construida para reemplazar múltiples sistemas fragmentados con un flujo operativo único.'
                : 'KabatOne positions as a unified public safety platform — distinct from enterprise VMS systems, PSIM layers, and standalone CAD products. It is built to replace multiple fragmented systems with one operational workflow.'}
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
              {es ? 'KabatOne vs Genetec: Diferencias Clave' : 'KabatOne vs Genetec: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara KabatOne y Genetec Security Center en siete dimensiones operativas críticas para organizaciones de seguridad pública.'
                : 'The following table compares KabatOne and Genetec Security Center across seven operational dimensions critical for public safety organizations.'}
            </p>

            <div style={{ borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
              {/* Table header */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr',
                background: `${ACCENT}15`, borderBottom: '1px solid var(--border)',
              }}>
                <div style={{ padding: '16px 20px', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.08em', textTransform: 'uppercase', color: ACCENT }}>
                  {es ? 'Dimensión' : 'Dimension'}
                </div>
                <div style={{ padding: '16px 20px', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', borderLeft: '1px solid var(--border)' }}>
                  Genetec
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
                    {row.genetec}
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
              {es ? '¿En Qué Va Más Allá KabatOne?' : 'Where Does KabatOne Go Further?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Genetec es excelente en lo que hace: gestionar grandes redes de cámaras, integrar control de acceso y presentar alarmas en una interfaz unificada. Donde las dos plataformas divergen es en el flujo de respuesta. Un operador de Genetec que detecta un incidente en cámara debe luego cambiar a un sistema CAD separado para despachar una unidad, abrir una capa GIS separada para rastrear los respondedores y coordinar por radio. Cada transición consume tiempo cuando cada segundo importa.'
                : 'Genetec is excellent at what it does: managing large camera networks, integrating access control, and presenting alarms in a unified interface. Where the two platforms diverge is in the response workflow. A Genetec operator who detects an incident on camera must then switch to a separate CAD system to dispatch a unit, open a separate GIS layer to track responders, and coordinate over radio. Each transition costs time when every second matters.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne conecta todos esos pasos en un solo flujo de trabajo. En el momento en que un incidente es detectado en K-Safety o K-Video, el operador puede validarlo, crear un evento CAD en K-Dispatch, rastrear las unidades respondedoras en el mapa GIS en tiempo real y cerrar el ciclo con documentación de campo — sin salir de la plataforma. Para los centros de mando C4 y C5 en México que gestionan cientos de eventos diarios, esta diferencia operativa es fundamental.'
                : 'KabatOne connects all of those steps in one workflow. The moment an incident is detected in K-Safety or K-Video, the operator can validate it, create a CAD event in K-Dispatch, track responding units on the GIS map in real time, and close the loop with field documentation — without leaving the platform. For C4 and C5 command centers in Mexico managing hundreds of events per day, this operational difference is fundamental.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne también agrega capacidades que no existen en el ecosistema de Genetec: gestión de tráfico inteligente con control de semáforos adaptativos (K-Traffic), integración de cámaras ciudadanas y de negocios en el centro de mando (K-Connect), y flujos de trabajo completos para equipos de respuesta en campo. Estas capacidades son específicas para operaciones de seguridad pública — no están disponibles como módulos estándar de Genetec.'
                : 'KabatOne also adds capabilities that do not exist in the Genetec ecosystem: intelligent traffic management with adaptive signal control (K-Traffic), integration of citizen and business cameras into the command center (K-Connect), and complete workflows for field response teams. These capabilities are specific to public safety operations — they are not available as standard Genetec modules.'}
            </p>
          </div>
        </section>

        {/* ── CAN KABATONE WORK WITH GENETEC? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Puede KabatOne Trabajar con Infraestructura Genetec Existente?' : 'Can KabatOne Work with Existing Genetec Infrastructure?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Sí. El módulo K-Video de KabatOne soporta ONVIF, RTSP y protocolos IP estándar de la industria, lo que permite agregar feeds de cámaras de despliegues Genetec junto con cámaras de cualquier otro fabricante. Esto significa que las organizaciones con inversiones existentes en infraestructura de cámaras Genetec pueden incorporar las capacidades de despacho, GIS y tráfico de KabatOne sin reemplazar sus cámaras.'
                : 'Yes. KabatOne\'s K-Video module supports ONVIF, RTSP, and standard industry IP protocols, which allows it to aggregate camera feeds from Genetec deployments alongside cameras from any other manufacturer. This means organizations with existing Genetec camera infrastructure can add KabatOne\'s dispatch, GIS, and traffic capabilities without replacing their cameras.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne está diseñado para integrarse con la infraestructura existente en lugar de forzar un reemplazo completo. Las ciudades y municipios que han invertido en cámaras compatibles con Genetec o cualquier otro fabricante pueden incorporar a KabatOne como la capa de coordinación de respuesta, aprovechando el hardware existente mientras añaden las capacidades de despacho, GIS y tráfico que las plataformas VMS por sí solas no proporcionan.'
                : 'KabatOne is designed to integrate with existing infrastructure rather than force a full rip-and-replace. Cities and municipalities that have invested in Genetec-compatible cameras or any other manufacturer can bring KabatOne in as the response coordination layer, leveraging existing hardware while adding the dispatch, GIS, and traffic capabilities that VMS platforms alone do not provide.'}
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
              {es ? 'KabatOne vs Genetec: Preguntas y Respuestas' : 'KabatOne vs Genetec: Questions & Answers'}
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
                <span>{es ? 'PSIM vs Plataforma Unificada — ¿Cuál Es la Diferencia?' : 'PSIM vs Unified Platform — What\'s the Difference?'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/what-is-a-public-safety-platform" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? '¿Qué es una plataforma de seguridad pública?' : 'What Is a Public Safety Platform?'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/how-c5-command-centers-work" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'Cómo funcionan los centros C5' : 'How C5 Command Centers Work'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/k-video" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'K-Video — Gestión de Video para Seguridad Pública' : 'K-Video — Video Management for Public Safety'}</span>
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
            ? 'Descubre cómo KabatOne conecta video, despacho y GIS en un solo flujo de respuesta. Solicita una demo personalizada.'
            : 'See how KabatOne connects video, dispatch, and GIS in one response workflow. Request a personalized demo.'}
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
