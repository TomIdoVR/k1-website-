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
  return generatePageMetadata('vsMilestone', locale)
}

export default async function VsMilestonePage({
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
    { name: 'KabatOne vs Milestone', url: es ? 'https://kabatone.com/es/vs/milestone/' : 'https://kabatone.com/vs/milestone/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es la diferencia entre KabatOne y Milestone XProtect?',
      answer: 'Milestone XProtect es una plataforma de gestión de video (VMS) de arquitectura abierta diseñada para gestionar grandes redes de cámaras e integrarse con analítica de terceros. KabatOne es una plataforma unificada de seguridad pública que combina gestión de video con IA (K-Video), despacho CAD (K-Dispatch), conciencia situacional GIS (K-Safety), gestión de tráfico inteligente (K-Traffic) y video comunitario (K-Connect) en un solo sistema operativo. Milestone gestiona lo que ven las cámaras; KabatOne coordina lo que sucede después de que se detecta un incidente.',
    },
    {
      question: '¿Milestone XProtect incluye software de despacho CAD?',
      answer: 'No. Milestone XProtect es exclusivamente una plataforma VMS y no incluye despacho CAD, gestión de incidentes de emergencia ni flujos de trabajo para responders en campo. Las organizaciones que utilizan Milestone y necesitan despacho CAD deben integrar un sistema separado de terceros. KabatOne incluye K-Dispatch como módulo nativo, integrando recepción de llamadas, recomendación de unidades y registro de despacho directamente con video y GIS en una sola plataforma.',
    },
    {
      question: '¿KabatOne puede integrarse con cámaras Milestone existentes?',
      answer: 'Sí. KabatOne K-Video soporta ONVIF, RTSP y protocolos IP estándar de la industria, lo que permite agregar feeds de cámaras de instalaciones Milestone XProtect junto con cámaras de cualquier otro fabricante. Esto permite a las organizaciones con infraestructura Milestone existente incorporar las capacidades de despacho, GIS y tráfico de KabatOne sin reemplazar sus cámaras.',
    },
    {
      question: '¿Es KabatOne una alternativa a Milestone para seguridad pública?',
      answer: 'KabatOne y Milestone XProtect atienden necesidades distintas que se superponen en la capa de video. Milestone es la elección más fuerte para organizaciones cuya necesidad principal es gestión de video a gran escala con amplia integración de analítica de terceros. KabatOne es la elección más fuerte para operaciones de seguridad pública — municipios, centros de mando y agencias de emergencia — que necesitan el flujo completo de respuesta: video, despacho, GIS, tráfico y coordinación de campo en un solo sistema.',
    },
    {
      question: '¿Cuál es mejor para centros de mando C5 — Milestone o KabatOne?',
      answer: 'KabatOne está diseñado específicamente para operaciones de centros de mando C4 y C5 en México y Latinoamérica. Los centros C5 requieren integración en tiempo real de múltiples disciplinas — videovigilancia, despacho CAD, gestión de tráfico y reporte ciudadano — en una sola vista operativa. Milestone XProtect cubre únicamente la capa de video. KabatOne cubre el flujo completo de respuesta desde la detección hasta el cierre en campo, y está desplegado en más de 40 ciudades con estructuras C5 o similares en Latinoamérica.',
    },
    {
      question: '¿Qué ofrece KabatOne que Milestone XProtect no ofrece?',
      answer: 'En comparación con Milestone XProtect, KabatOne agrega: software CAD/despacho nativo (K-Dispatch) para coordinación de emergencias; conciencia situacional GIS (K-Safety) con seguimiento de incidentes y unidades en tiempo real; gestión inteligente de tráfico (K-Traffic) con control de semáforos y detección de infracciones; video comunitario (K-Connect) para integrar cámaras ciudadanas y de negocios al centro de mando; y flujos de trabajo para equipos de respuesta en campo. KabatOne está diseñado para el flujo de respuesta de extremo a extremo — Milestone está diseñado para el monitoreo de video.',
    },
  ] : [
    {
      question: 'What is the difference between KabatOne and Milestone XProtect?',
      answer: 'Milestone XProtect is an open-platform video management system (VMS) built to manage large camera networks and integrate with third-party analytics. KabatOne is a unified public safety platform that combines AI-powered video management (K-Video), CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video sharing (K-Connect) in one operational system. Milestone manages what cameras see; KabatOne coordinates what happens after an incident is detected.',
    },
    {
      question: 'Does Milestone XProtect include CAD dispatch software?',
      answer: 'No. Milestone XProtect is exclusively a VMS platform and does not include CAD dispatch, emergency incident management, or field responder workflows. Organizations using Milestone that need CAD dispatch must integrate a separate third-party system. KabatOne includes K-Dispatch as a native module, integrating call intake, unit recommendation, and dispatch logging directly with video and GIS in one platform.',
    },
    {
      question: 'Can KabatOne integrate with existing Milestone cameras?',
      answer: 'Yes. KabatOne K-Video supports ONVIF, RTSP, and standard industry IP protocols, which allows it to aggregate camera feeds from Milestone XProtect installations alongside cameras from any other manufacturer. This enables organizations with existing Milestone infrastructure to add KabatOne\'s dispatch, GIS, and traffic capabilities without replacing their cameras.',
    },
    {
      question: 'Is KabatOne a Milestone alternative for public safety?',
      answer: 'KabatOne and Milestone XProtect serve overlapping but distinct needs. Milestone is the stronger choice for organizations whose primary need is large-scale video management with broad third-party analytics integration. KabatOne is the stronger choice for public safety operations — municipalities, command centers, and emergency agencies — that need the full response workflow: video, dispatch, GIS, traffic, and field coordination in one system.',
    },
    {
      question: 'Which is better for C5 command centers — Milestone or KabatOne?',
      answer: 'KabatOne is purpose-built for C4 and C5 command center operations in Mexico and Latin America. C5 command centers require real-time integration of multiple disciplines — video surveillance, CAD dispatch, traffic management, and citizen reporting — in one operational view. Milestone XProtect covers only the video layer. KabatOne covers the full response workflow from detection to field closure, and is deployed across 40+ cities with C5 or similar command center structures in Latin America.',
    },
    {
      question: 'What does KabatOne offer that Milestone XProtect does not?',
      answer: 'Compared to Milestone XProtect, KabatOne adds: native CAD/dispatch software (K-Dispatch) for emergency coordination; GIS situational awareness (K-Safety) with live incident and unit tracking; intelligent traffic management (K-Traffic) with signal control and violation detection; community video (K-Connect) for integrating citizen and business cameras into the command center; and field responder workflows for managing units after dispatch. KabatOne is designed for the end-to-end response workflow — Milestone is designed for video monitoring.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Categoría principal',
      milestone: 'Plataforma VMS de arquitectura abierta',
      kabatone: 'Plataforma unificada de seguridad pública',
    },
    {
      category: 'Despacho / CAD',
      milestone: 'No incluido — requiere integración CAD de terceros',
      kabatone: 'K-Dispatch — módulo CAD nativo con recepción, despacho y registro',
    },
    {
      category: 'GIS / Conciencia situacional',
      milestone: 'Vista de mapa básica via integraciones de socios',
      kabatone: 'K-Safety — GIS completo con seguimiento de incidentes y unidades en tiempo real',
    },
    {
      category: 'Gestión de tráfico',
      milestone: 'No disponible — requiere sistema externo',
      kabatone: 'K-Traffic — gestión inteligente de tráfico y semáforos',
    },
    {
      category: 'Video comunitario / ciudadano',
      milestone: 'Requiere integración con socios',
      kabatone: 'K-Connect — compartición nativa de video público-privado',
    },
    {
      category: 'Flujo de respuesta en campo',
      milestone: 'No incluido',
      kabatone: 'Flujos nativos para responders: asignación, seguimiento y cierre',
    },
    {
      category: 'Mercado principal',
      milestone: 'Empresas, ciudades, transporte, utilities, retail',
      kabatone: 'Municipios, centros de mando C4/C5, agencias de seguridad pública',
    },
  ] : [
    {
      category: 'Primary category',
      milestone: 'Open-platform VMS',
      kabatone: 'Unified public safety platform',
    },
    {
      category: 'Dispatch / CAD',
      milestone: 'Not included — requires third-party CAD integration',
      kabatone: 'K-Dispatch — native CAD with intake, dispatch, and logging',
    },
    {
      category: 'GIS / Situational awareness',
      milestone: 'Basic map view via partner integrations',
      kabatone: 'K-Safety — full GIS with live incident and unit tracking',
    },
    {
      category: 'Traffic management',
      milestone: 'Not available — requires external system',
      kabatone: 'K-Traffic — intelligent traffic and signal management',
    },
    {
      category: 'Community / citizen video',
      milestone: 'Requires partner integration',
      kabatone: 'K-Connect — native public-private video sharing',
    },
    {
      category: 'Field response workflow',
      milestone: 'Not included',
      kabatone: 'Native responder workflows: assignment, tracking, and closure',
    },
    {
      category: 'Primary market',
      milestone: 'Enterprise, cities, transportation, utilities, retail',
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
          <span style={{ color: ACCENT }}>KabatOne vs Milestone</span>
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
              ? 'KabatOne vs Milestone XProtect — ¿Cuál Plataforma Es la Correcta para Seguridad Pública?'
              : 'KabatOne vs Milestone XProtect — Which Platform Is Right for Public Safety?'}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'Milestone XProtect es una de las plataformas VMS más desplegadas del mundo, reconocida por su arquitectura abierta y su amplio ecosistema de integraciones. KabatOne es una plataforma unificada de seguridad pública que conecta video, despacho CAD, GIS, gestión de tráfico y operaciones de campo en un flujo de respuesta coordinada. Ambas plataformas gestionan video — pero Milestone se detiene ahí, mientras KabatOne conecta el flujo completo desde la detección hasta la ejecución en campo.'
              : 'Milestone XProtect is one of the world\'s most widely deployed VMS platforms, recognized for its open architecture and broad integration ecosystem. KabatOne is a unified public safety platform that connects video, CAD dispatch, GIS, traffic management, and field operations into one coordinated response workflow. Both platforms handle video — but Milestone stops there, while KabatOne connects the full chain from detection through field execution.'}
          </p>
        </section>

        {/* ── WHAT IS MILESTONE? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Qué Es Milestone XProtect?' : 'What Is Milestone XProtect?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Milestone Systems, subsidiaria de Canon, es uno de los mayores proveedores de software VMS del mundo. Su producto principal, XProtect, es una plataforma de gestión de video de arquitectura abierta que soporta cámaras de más de 13,000 dispositivos de más de 200 fabricantes. XProtect Corporate — su versión para grandes instalaciones — está ampliamente utilizada en ciudades, aeropuertos, transporte público, hospitales, retail y entornos industriales alrededor del mundo.'
                : 'Milestone Systems, a subsidiary of Canon, is one of the world\'s largest VMS software vendors. Its flagship product, XProtect, is an open-platform video management system that supports cameras from over 13,000 devices across more than 200 manufacturers. XProtect Corporate — its large-installation tier — is widely deployed in cities, airports, public transit, hospitals, retail, and industrial environments worldwide.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'La fortaleza de Milestone es su ecosistema abierto: integraciones con cientos de proveedores de analítica de video, control de acceso y sistemas de gestión de edificios. A través del Milestone Marketplace, las organizaciones pueden agregar módulos de análisis de comportamiento, detección de rostros, análisis de multitudes y más — siempre como capas separadas que se conectan al VMS central.'
                : 'Milestone\'s strength is its open ecosystem: integrations with hundreds of video analytics, access control, and building management vendors. Through the Milestone Marketplace, organizations can add behavior analysis, face detection, crowd analytics, and more — always as separate layers connecting back to the central VMS.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Milestone XProtect no incluye software de despacho CAD, gestión de tráfico inteligente, conciencia situacional GIS nativa ni flujos de trabajo para operaciones de campo de respuesta a emergencias. Estas capacidades requieren sistemas separados de terceros que deben integrarse y mantenerse independientemente del VMS.'
                : 'Milestone XProtect does not include CAD dispatch software, intelligent traffic management, native GIS situational awareness, or field operations workflows for emergency response. These capabilities require separate third-party systems that must be integrated and maintained independently from the VMS.'}
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
                ? 'KabatOne es una plataforma unificada de seguridad pública construida específicamente para ciudades, municipios, centros de mando y agencias de respuesta a emergencias. KabatOne integra gestión de video con analítica IA (K-Video), despacho CAD (K-Dispatch), conciencia situacional GIS (K-Safety), gestión inteligente de tráfico (K-Traffic) y video comunitario compartido (K-Connect) en una plataforma nativa sobre la base Avalon.'
                : 'KabatOne is a unified public safety platform purpose-built for cities, municipalities, command centers, and emergency response agencies. KabatOne integrates AI-powered video management (K-Video), CAD dispatch (K-Dispatch), GIS situational awareness (K-Safety), intelligent traffic management (K-Traffic), and community video sharing (K-Connect) in one native platform on the Avalon foundation.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne está desplegado en más de 40 ciudades protegiendo a más de 73 millones de ciudadanos principalmente en Latinoamérica y los Estados Unidos. A diferencia de las plataformas de ecosistema abierto que requieren integrar módulos de múltiples proveedores, KabatOne ofrece el flujo completo de respuesta en una sola plataforma nativa: cuando un operador detecta un incidente en K-Safety o K-Video, puede validarlo, crear un evento CAD en K-Dispatch, rastrear las unidades respondedoras en el mapa GIS y cerrar el ciclo con documentación de campo — sin salir de la plataforma y sin cambiar entre sistemas de diferentes fabricantes.'
                : 'KabatOne is deployed across 40+ cities protecting over 73 million citizens primarily in Latin America and the United States. Unlike open-ecosystem platforms that require integrating modules from multiple vendors, KabatOne delivers the full response workflow in one native platform: when an operator detects an incident in K-Safety or K-Video, they can validate it, create a CAD event in K-Dispatch, track responding units on the GIS map, and close the loop with field documentation — without leaving the platform or switching between systems from different vendors.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne se posiciona como una plataforma de seguridad pública unificada — distinta de los sistemas VMS empresariales como Milestone, las capas PSIM y los productos CAD independientes. Está construida para reemplazar múltiples sistemas fragmentados con un flujo operativo único y reducir la carga de integración y mantenimiento que enfrentan los municipios que operan stacks tecnológicos complejos.'
                : 'KabatOne positions as a unified public safety platform — distinct from enterprise VMS systems like Milestone, PSIM layers, and standalone CAD products. It is built to replace multiple fragmented systems with one operational workflow and reduce the integration and maintenance burden faced by municipalities operating complex technology stacks.'}
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
              {es ? 'KabatOne vs Milestone XProtect: Diferencias Clave' : 'KabatOne vs Milestone XProtect: Key Differences'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara KabatOne y Milestone XProtect en siete dimensiones operativas críticas para organizaciones de seguridad pública.'
                : 'The following table compares KabatOne and Milestone XProtect across seven operational dimensions critical for public safety organizations.'}
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
                  Milestone XProtect
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
                    {row.milestone}
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
                ? 'Milestone XProtect es excelente en lo que fue diseñado para hacer: gestionar grandes redes de cámaras de múltiples fabricantes con un amplio ecosistema de analítica de terceros. Es la plataforma VMS de referencia en muchas ciudades del mundo precisamente porque su arquitectura abierta permite conectar casi cualquier cámara o módulo de analítica. Esa apertura tiene un costo: ninguna de esas integraciones es nativa. Cada módulo de análisis de comportamiento, cada capa GIS, cada sistema CAD es un contrato separado, una interfaz separada y un punto de falla separado.'
                : 'Milestone XProtect is excellent at what it was designed to do: manage large, multi-manufacturer camera networks with a broad third-party analytics ecosystem. It is the reference VMS platform in many cities precisely because its open architecture allows connecting nearly any camera or analytics module. That openness has a cost: none of those integrations are native. Every behavior analytics module, every GIS layer, every CAD system is a separate contract, a separate interface, and a separate point of failure.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Para operaciones de seguridad pública que gestionan cientos de eventos diarios, la fragmentación del sistema tiene un costo operativo real. Un operador que detecta un incidente en la pantalla de Milestone debe cambiar a su sistema CAD para despachar una unidad, abrir su capa GIS separada para rastrear a los respondedores y coordinar por radio. Cada transición entre sistemas es tiempo perdido cuando cada segundo importa. KabatOne conecta todos esos pasos en un solo flujo de trabajo sin interrupciones — desde la detección del incidente hasta el cierre en campo.'
                : 'For public safety operations managing hundreds of events per day, system fragmentation has a real operational cost. An operator who detects an incident on the Milestone screen must switch to their CAD system to dispatch a unit, open a separate GIS layer to track responders, and coordinate over radio. Every system switch is time lost when every second matters. KabatOne connects all of those steps in one uninterrupted workflow — from incident detection through field closure.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne también agrega capacidades que no existen en el ecosistema de Milestone: gestión de tráfico inteligente con control adaptativo de semáforos (K-Traffic), integración de video ciudadano y empresarial en el centro de mando (K-Connect), y flujos de trabajo completos para responders en campo después del despacho. Estas capacidades son específicas para operaciones de seguridad pública — no están disponibles como módulos estándar de Milestone y requieren integraciones adicionales costosas.'
                : 'KabatOne also adds capabilities that do not exist in the Milestone ecosystem: intelligent traffic management with adaptive signal control (K-Traffic), integration of citizen and business cameras into the command center (K-Connect), and complete field responder workflows after dispatch. These capabilities are specific to public safety operations — they are not available as standard Milestone modules and require costly additional integrations.'}
            </p>
          </div>
        </section>

        {/* ── CAN KABATONE WORK WITH MILESTONE? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Puede KabatOne Trabajar con Infraestructura Milestone Existente?' : 'Can KabatOne Work with Existing Milestone Infrastructure?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Sí. El módulo K-Video de KabatOne soporta ONVIF, RTSP y protocolos IP estándar de la industria, lo que permite agregar feeds de cámaras de instalaciones Milestone XProtect junto con cámaras de cualquier otro fabricante. Dado que XProtect en sí mismo está basado en estándares abiertos, las cámaras integradas con Milestone son en su mayoría compatibles con los protocolos que KabatOne soporta. Esto significa que las organizaciones con infraestructura Milestone pueden incorporar las capacidades de despacho, GIS y tráfico de KabatOne sin reemplazar su hardware de cámaras.'
                : 'Yes. KabatOne\'s K-Video module supports ONVIF, RTSP, and standard industry IP protocols, which allows it to aggregate camera feeds from Milestone XProtect installations alongside cameras from any other manufacturer. Since XProtect itself is based on open standards, cameras integrated with Milestone are largely compatible with the protocols KabatOne supports. This means organizations with Milestone infrastructure can add KabatOne\'s dispatch, GIS, and traffic capabilities without replacing their camera hardware.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne está diseñado para integrarse con la infraestructura de video existente en lugar de forzar un reemplazo completo. Las ciudades y municipios que han construido una red de cámaras sobre Milestone pueden incorporar a KabatOne como la capa de coordinación de respuesta — añadiendo las capacidades de despacho, GIS y tráfico que las plataformas VMS por sí solas no proporcionan, sin perder su inversión en hardware y licencias de cámaras.'
                : 'KabatOne is designed to integrate with existing video infrastructure rather than force a full replacement. Cities and municipalities that have built a camera network on Milestone can bring KabatOne in as the response coordination layer — adding the dispatch, GIS, and traffic capabilities that VMS platforms alone do not provide, without abandoning their investment in camera hardware and licenses.'}
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

        {/* ── FAQ ── */}
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
              {es ? 'KabatOne vs Milestone: Preguntas y Respuestas' : 'KabatOne vs Milestone: Questions & Answers'}
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
              <Link href="/vs/genetec" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Genetec Security Center' : 'KabatOne vs Genetec Security Center'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
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
