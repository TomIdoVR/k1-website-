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
  return generatePageMetadata('publicSafetySoftwareArgentina', locale)
}

export default async function PublicSafetySoftwareArgentinaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-argentina/`
    : `${baseUrl}/resources/public-safety-software-argentina/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Argentina' : 'Public Safety Software — Argentina', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cuales son los numeros de emergencia en Argentina?',
      answer: 'Argentina opera un sistema de emergencias federalizado. El 911 es el numero unificado de emergencias en la mayoria de las provincias desde 2017. Adicionalmente: 101 (Policia Federal Argentina), 107 (SAME — Servicio de Atencion Medica de Emergencias, en Buenos Aires), 100 (Bomberos) y 134 (Gendarmeria Nacional). CABA opera su propio sistema integrado a traves del Centro de Monitoreo Urbano, donde la Policia de la Ciudad coordina junto al SAME.',
    },
    {
      question: '¿Como financia Argentina tecnologia de seguridad publica provincial y municipal?',
      answer: 'El financiamiento es descentralizado por la estructura federal. A nivel nacional, el Ministerio de Seguridad asigna fondos via FODES (Fondo de Seguridad) y programas del Plan Nacional de Seguridad. Las provincias gestionan sus propios presupuestos de seguridad. CABA utiliza BAC (Buenos Aires Compras) para licitaciones locales. Las contrataciones nacionales y muchas provinciales usan el sistema Argentina Compra (compr.ar), administrado por la Oficina Nacional de Contrataciones.',
    },
    {
      question: '¿Que es el Centro de Monitoreo Urbano de CABA y como funciona?',
      answer: 'El Centro de Monitoreo Urbano (CMU) de la Ciudad de Buenos Aires opera mas de 14.000 camaras de vigilancia integradas con el sistema de emergencias de la Policia de la Ciudad. Es uno de los sistemas de videovigilancia urbana mas extensos de America Latina. El CMU centraliza el monitoreo en tiempo real, coordina el despacho de unidades y genera alertas automaticas. Una plataforma unificada como KabatOne se integra directamente con la infraestructura ONVIF/RTSP existente del CMU y de municipios del GBA, anadiendo CAD, GIS y analitica sobre las camaras ya instaladas.',
    },
    {
      question: '¿Puede KabatOne integrarse con la infraestructura de camaras existente en Argentina?',
      answer: 'Si. KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Las camaras del CMU de CABA, los sistemas provinciales de Cordoba, Mendoza, Rosario y otros municipios del GBA se conectan directamente a la plataforma. Los paneles de control de acceso, lectores LPR y sensores acusticos existentes tambien se integran sin cambiar infraestructura.',
    },
    {
      question: '¿Como apoya KabatOne la coordinacion entre PFA, policia provincial y seguridad municipal?',
      answer: 'K-Safety provee un mapa GIS compartido donde los operadores municipales, la Policia de la Ciudad y los comandos provinciales ven posiciones de unidades, incidentes activos y feeds de video en tiempo real. K-Dispatch unifica la recepcion 911/101/107 en un solo registro de incidente, y K-Video centraliza camaras municipales y privadas compartidas en un VMS con busqueda por zona, fecha y tipo de evento.',
    },
    {
      question: '¿Como se alinea KabatOne con Argentina Compra y BAC para licitaciones?',
      answer: 'KabatOne se comercializa a traves de distribuidores e integradores locales con registro en Argentina Compra (compr.ar) y BAC (Buenos Aires Compras). La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada, adaptandose a los marcos presupuestarios provinciales y municipales y a los requisitos de los pliegos de licitacion de la ONC.',
    },
  ] : [
    {
      question: 'What are the emergency numbers in Argentina?',
      answer: 'Argentina operates a federalized emergency system. 911 is the unified emergency number in most provinces since 2017. Additional numbers include: 101 (Policía Federal Argentina), 107 (SAME — Servicio de Atención Médica de Emergencias, in Buenos Aires), 100 (Bomberos), and 134 (Gendarmería Nacional). CABA operates its own integrated system through the Centro de Monitoreo Urbano, where Policía de la Ciudad coordinates with SAME.',
    },
    {
      question: 'How does Argentina fund public safety technology at the provincial and municipal level?',
      answer: "Funding is decentralized by federal structure. At the national level, the Ministry of Security allocates funds via FODES (Fondo de Seguridad) and Plan Nacional de Seguridad programs. Provinces manage their own security budgets. CABA uses BAC (Buenos Aires Compras) for local tenders. National and many provincial contracts use Argentina Compra (compr.ar), administered by the Oficina Nacional de Contrataciones.",
    },
    {
      question: "What is CABA's Centro de Monitoreo Urbano and how does it work?",
      answer: "Buenos Aires City's Centro de Monitoreo Urbano (CMU) operates over 14,000 surveillance cameras integrated with the Policía de la Ciudad emergency response system — one of the most extensive urban video surveillance networks in Latin America. The CMU centralizes real-time monitoring, coordinates unit dispatch, and generates automatic alerts. A unified platform like KabatOne integrates directly with existing ONVIF/RTSP infrastructure from the CMU and GBA municipalities, adding CAD, GIS, and analytics on top of cameras already installed.",
    },
    {
      question: 'Can KabatOne integrate with existing camera infrastructure in Argentina?',
      answer: "Yes. KabatOne integrates any ONVIF/RTSP camera without hardware replacement. CABA's CMU cameras, provincial systems in Córdoba, Mendoza, Rosario, and other GBA municipalities connect directly to the platform. Existing access control panels, LPR readers, and acoustic sensors also integrate without changing infrastructure.",
    },
    {
      question: 'How does KabatOne support coordination between PFA, provincial police, and municipal security?',
      answer: 'K-Safety provides a shared GIS map where municipal operators, Policía de la Ciudad, and provincial commands see unit positions, active incidents, and live video feeds in real time. K-Dispatch unifies 911/101/107 intake into one incident record, and K-Video centralizes municipal and privately shared cameras in a searchable VMS with zone, date, and event-type search.',
    },
    {
      question: 'How does KabatOne align with Argentina Compra and BAC procurement processes?',
      answer: 'KabatOne is marketed through local distributors and integrators registered on Argentina Compra (compr.ar) and BAC (Buenos Aires Compras). The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform, adapting to provincial and municipal budget frameworks and ONC tender requirements.',
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Municipios y Provincias en Argentina' : 'Public Safety Software for Argentina: Government Guide',
    es
      ? 'Software de seguridad publica para municipios, provincias y la Ciudad de Buenos Aires — conectando videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa.'
      : 'Public safety software for Argentine municipalities, provinces, and Buenos Aires City — connecting surveillance, emergency dispatch, GIS, and incident management in one unified operational platform.',
    pageUrl,
    '2026-05-11'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'CMU de CABA, camaras provinciales y municipales en sistemas aislados sin capa VMS compartida', unified: 'VMS unificado, todas las camaras buscables por zona, fecha y tipo de evento' },
    { feature: 'Despacho de emergencias', fragmented: '911/101/107 como canales separados sin registro comun de incidente', unified: 'Registro unico de incidente que conecta todas las agencias de respuesta' },
    { feature: 'Coordinacion PFA / policia provincial', fragmented: 'Solo radio, sin pantalla ni mapa compartido', unified: 'Mapa GIS compartido con posiciones de unidades en tiempo real' },
    { feature: 'Estructura federal', fragmented: '24 provincias + CABA con sistemas incompatibles entre si', unified: 'Plataforma modular que se adapta a cada jurisdiccion sin reemplazar infraestructura' },
    { feature: 'Reportes para el Ministerio de Seguridad', fragmented: 'Exportacion manual de datos incompletos de cada sistema aislado', unified: 'KPIs automatizados de tiempos de respuesta, incidentes por zona y cobertura de camaras' },
    { feature: 'Dependencia tecnologica', fragmented: 'Hardware propietario por proveedor y por jurisdiccion', unified: 'ONVIF/RTSP, cualquier marca de camara ya instalada' },
  ] : [
    { feature: 'Video', fragmented: "CABA's CMU, provincial and municipal cameras on separate systems with no shared VMS layer", unified: 'Unified VMS, all cameras searchable by zone, date, and event type' },
    { feature: 'Emergency dispatch', fragmented: '911/101/107 as separate channels with no shared incident record', unified: 'Single incident record bridging all response agencies' },
    { feature: 'PFA / provincial police coordination', fragmented: 'Radio-only, no shared screen or map', unified: 'Shared GIS map with real-time unit positions' },
    { feature: 'Federal structure', fragmented: '24 provinces + CABA with incompatible systems across jurisdictions', unified: 'Modular platform that adapts to each jurisdiction without replacing infrastructure' },
    { feature: 'Ministry of Security reporting', fragmented: 'Manual export of incomplete data from each siloed system', unified: 'Automated KPIs for response times, zone-level incident counts, and camera coverage' },
    { feature: 'Technology lock-in', fragmented: 'Proprietary hardware per vendor and per jurisdiction', unified: 'ONVIF/RTSP, any camera brand already installed' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado', text: 'Todas las camaras — CMU de CABA, sistemas provinciales de Cordoba, Mendoza, Rosario y camaras municipales del GBA — en una sola interfaz VMS con busqueda por zona, fecha y tipo de evento.' },
    { n: '02', title: 'Centro de despacho unificado', text: 'Recepcion 911/101/107, clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD. Tiempos de despacho promedio inferiores a 90 segundos.' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones de PFA, Policia Provincial, Policia de la Ciudad, SAME y Bomberos en un solo mapa operativo compartido. Vista conjunta entre comisaria y centro de mando.' },
    { n: '04', title: 'Fusion de sensores', text: 'LPR, botones de panico y alertas acusticas unificados con video en el mismo entorno operativo — sin multiples pantallas ni sistemas fragmentados por jurisdiccion.' },
    { n: '05', title: 'Reportes para el Ministerio de Seguridad', text: 'KPIs automatizados de tiempos de respuesta, incidentes por zona y cobertura de camaras para reportes federales, provinciales y municipales — sin exportacion manual.' },
  ] : [
    { n: '01', title: 'Unified video', text: "All cameras — CABA's CMU, provincial systems in Córdoba, Mendoza, Rosario, and GBA municipal cameras — on one VMS interface with search by zone, date, and event type." },
    { n: '02', title: 'Unified dispatch center', text: '911/101/107 intake, incident classification, and unit assignment from one CAD platform. Average dispatch time under 90 seconds.' },
    { n: '03', title: 'Real-time GIS', text: 'Positions of PFA, Provincial Police, Policía de la Ciudad, SAME, and Bomberos on one shared operational map — joint view between comisaría and command center.' },
    { n: '04', title: 'Sensor fusion', text: 'LPR, panic buttons, and acoustic alerts unified with video in the same operational environment — no multiple screens or systems fragmented by jurisdiction.' },
    { n: '05', title: 'Ministry of Security reporting', text: 'Automated KPIs for response times, zone-level incident counts, and camera coverage for federal, provincial, and municipal reporting — no manual export.' },
  ]

  const challengeCards = es ? [
    { icon: '🏛️', title: 'Estructura federal fragmentada', text: 'Argentina tiene 23 provincias mas la Ciudad Autonoma de Buenos Aires, cada una con su propia policia, presupuesto y sistemas tecnologicos. Sin una plataforma que se adapte a cada jurisdiccion, la coordinacion entre fuerzas depende de acuerdos informales y comunicacion por radio.' },
    { icon: '📞', title: 'Multiples numeros de emergencia sin despacho unificado', text: 'El 911 unificado coexiste con el 101 (PFA), el 107 (SAME en CABA) y el 100 (Bomberos). Sin un registro comun de incidente, los eventos que involucran multiples agencias generan duplicacion de respuesta y perdida de contexto operacional.' },
    { icon: '📷', title: 'CMU y camaras municipales aisladas', text: 'El CMU de CABA opera mas de 14.000 camaras, pero las fuerzas provinciales, el GBA y los municipios del interior gestionan sus propios sistemas sin integracion. Los operadores acceden a multiples interfaces, ralentizando la respuesta y creando puntos ciegos entre jurisdicciones.' },
    { icon: '📋', title: 'Reportes para el Ministerio de Seguridad', text: 'Sin metricas estandarizadas de tiempos de respuesta e incidentes por zona, los reportes federales y provinciales dependen de exportaciones manuales incompletas. Cada jurisdiccion genera datos incompatibles que dificultan la evaluacion del Plan Nacional de Seguridad.' },
  ] : [
    { icon: '🏛️', title: 'Fragmented federal structure', text: "Argentina has 23 provinces plus the Autonomous City of Buenos Aires, each with its own police force, budget, and technology systems. Without a platform that adapts to each jurisdiction, coordination between forces depends on informal agreements and radio communication." },
    { icon: '📞', title: 'Multiple emergency numbers without unified dispatch', text: 'The unified 911 coexists with 101 (PFA), 107 (SAME in CABA), and 100 (Bomberos). Without a shared incident record, multi-agency events create duplicate responses and lost operational context.' },
    { icon: '📷', title: 'CMU and siloed municipal cameras', text: "CABA's CMU operates over 14,000 cameras, but provincial forces, GBA, and interior municipalities manage their own systems without integration. Operators access multiple interfaces, slowing response and creating blind spots across jurisdictions." },
    { icon: '📋', title: 'Ministry of Security reporting', text: 'Without standardized response-time and zone-level incident metrics, federal and provincial reports depend on incomplete manual exports. Each jurisdiction generates incompatible data that makes Plan Nacional de Seguridad evaluation difficult.' },
  ]

  return (
    <>
      <Nav />

      {/* JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* -- BREADCRUMB -- */}
        <div style={{
          maxWidth: '860px', margin: '0 auto', padding: '20px 40px 0',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
            {es ? 'Inicio' : 'Home'}
          </Link>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: 'var(--dim)' }}>{es ? 'Recursos' : 'Resources'}</span>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: ACCENT }}>
            {es ? 'Software de Seguridad Publica — Argentina' : 'Public Safety Software — Argentina'}
          </span>
        </div>

        {/* -- HERO -- */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 40px 64px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: '20px',
          }}>
            {es ? 'Guia de Referencia' : 'Reference Guide'}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '28px',
          }}>
            {es
              ? 'Software de Seguridad Publica para Argentina'
              : 'Public Safety Software for Argentina'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Guia para provincias argentinas, municipios del GBA y la Ciudad de Buenos Aires que evaluan plataformas unificadas de seguridad publica: videovigilancia, despacho de emergencias, GIS y gestion de incidentes.'
              : 'Guide for Argentine provinces, GBA municipalities, and Buenos Aires City evaluating unified public safety platforms — video surveillance, emergency dispatch, GIS, and incident management.'}
          </p>
        </section>

        {/* -- SECTION: Argentina's Public Safety Structure -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'La Estructura de Seguridad Publica en Argentina'
                : "Argentina's Public Safety Structure"}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Argentina es una republica federal compuesta por 23 provincias y la Ciudad Autonoma de Buenos Aires (CABA). Cada jurisdiccion opera su propia policia y sistema de emergencias de manera independiente. A nivel federal, la Policia Federal Argentina (PFA) tiene jurisdiccion en los territorios federales y en ciertos delitos nacionales, mientras que la Gendarmeria Nacional y la Prefectura Naval cubren fronteras y vias navegables. CABA cuenta con la Policia de la Ciudad, creada en 2016, que absorbio las funciones de la ex Policia Metropolitana.'
                : "Argentina is a federal republic composed of 23 provinces and the Autonomous City of Buenos Aires (CABA). Each jurisdiction operates its own police force and emergency system independently. At the federal level, the Policía Federal Argentina (PFA) has jurisdiction over federal territories and certain national crimes, while the Gendarmería Nacional and Prefectura Naval cover borders and waterways. CABA has the Policía de la Ciudad, created in 2016, which absorbed the functions of the former Policía Metropolitana."}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Argentina protege aproximadamente 46 millones de ciudadanos. El Gran Buenos Aires (GBA) concentra mas de 10 millones de personas en 24 municipios que coordinan con la Policia Bonaerense. CABA opera el Centro de Monitoreo Urbano (CMU) con mas de 14.000 camaras, uno de los sistemas de videovigilancia urbana mas extensos de America Latina. Ciudades como Cordoba, Rosario y Mendoza han desarrollado sus propios centros de monitoreo integrado. El principal desafio es la falta de interoperabilidad entre sistemas provinciales, municipales y federales, creando brechas de coordinacion en incidentes que cruzan jurisdicciones.'
                : 'Argentina protects approximately 46 million citizens. Greater Buenos Aires (GBA) concentrates over 10 million people across 24 municipalities that coordinate with the Policía Bonaerense. CABA operates the Centro de Monitoreo Urbano (CMU) with over 14,000 cameras — one of the most extensive urban surveillance networks in Latin America. Cities like Córdoba, Rosario, and Mendoza have developed their own integrated monitoring centers. The key challenge is the lack of interoperability between provincial, municipal, and federal systems, creating coordination gaps in cross-jurisdictional incidents.'}
            </p>
          </div>
        </section>

        {/* -- SECTION: Key Challenges -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '28px',
            }}>
              {es
                ? 'Desafios Clave para Municipios y Provincias Argentinas'
                : 'Key Challenges for Argentine Municipalities and Provinces'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {challengeCards.map((card, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderRadius: '12px', padding: '28px',
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: `color-mix(in srgb, ${ACCENT} 14%, transparent)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '14px', fontSize: '16px',
                  }}>
                    {card.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '19px', color: 'var(--white)', marginBottom: '10px',
                  }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- SECTION: 5-Step Unified Workflow -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0', background: `color-mix(in srgb, ${ACCENT} 3%, transparent)` }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? '¿Como Funciona una Plataforma Unificada para Argentina?'
                : 'How a Unified Platform Works for Argentina'}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {workflowSteps.map((step, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '24px', alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderLeft: `3px solid ${ACCENT}`,
                  borderRadius: '10px', padding: '24px 28px',
                }}>
                  <div style={{
                    fontFamily: 'DM Mono, monospace', fontWeight: 700,
                    fontSize: '13px', color: ACCENT, letterSpacing: '0.05em',
                    minWidth: '28px', paddingTop: '2px',
                  }}>
                    {step.n}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                      fontSize: '18px', color: ACCENT, marginBottom: '8px',
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '15px', color: 'var(--dim)', lineHeight: 1.7 }}>
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Product links */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '40px' }}>
              {[
                { href: '/k-safety', label: 'K-Safety', color: ACCENT, desc: es ? 'Conciencia situacional' : 'Situational awareness' },
                { href: '/k-dispatch', label: 'K-Dispatch', color: '#f59e0b', desc: es ? 'Despacho CAD / 911' : 'CAD dispatch / 911' },
                { href: '/k-video', label: 'K-Video', color: '#a855f7', desc: es ? 'Gestion de video' : 'Video management' },
              ].map((product, i) => (
                <Link key={i} href={product.href} style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                  borderTop: `3px solid ${product.color}`,
                  borderRadius: '10px', padding: '20px 16px',
                  textDecoration: 'none', display: 'block',
                }}>
                  <div style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '17px', color: 'var(--white)', marginBottom: '6px',
                  }}>
                    {product.label}
                  </div>
                  <div style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '10px',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--muted)',
                  }}>
                    {product.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* -- SECTION: Comparison Table -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'Fragmentado vs Plataforma Unificada para Jurisdicciones Argentinas'
                : 'Fragmented vs Unified Platform for Argentine Jurisdictions'}
            </h2>

            <div style={{
              border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden',
            }}>
              {/* Header */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                background: 'rgba(255,255,255,0.04)',
                borderBottom: '1px solid var(--border)',
                padding: '14px 20px',
              }}>
                {[
                  es ? 'Capacidad' : 'Capability',
                  es ? 'Sistemas Fragmentados' : 'Fragmented Systems',
                  es ? 'Plataforma Unificada' : 'Unified Platform',
                ].map((h, i) => (
                  <span key={i} style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '10px',
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: i === 0 ? 'var(--muted)' : i === 1 ? '#ef4444' : '#22c55e',
                  }}>
                    {h}
                  </span>
                ))}
              </div>

              {/* Rows */}
              {comparisonRows.map((row, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                  padding: '16px 20px',
                  borderBottom: i < comparisonRows.length - 1 ? '1px solid var(--border)' : undefined,
                  background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                }}>
                  <span style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
                    fontSize: '15px', color: 'var(--white)',
                  }}>
                    {row.feature}
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.55, paddingRight: '12px' }}>
                    {row.fragmented}
                  </span>
                  <span style={{ fontSize: '13px', color: '#86efac', lineHeight: 1.55 }}>
                    {row.unified}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- SECTION: Internal Resource Links -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '48px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '12px' }}>
                <span style={{
                  fontFamily: 'DM Mono, monospace', fontWeight: 600,
                  color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase',
                }}>
                  {es ? 'Recursos relacionados:' : 'Related resources:'}
                </span>
                {[
                  { href: '/resources/what-is-cad-dispatch-software', label: es ? 'Software de Despacho CAD' : 'What Is CAD Dispatch Software' },
                  { href: '/resources/cad-dispatch-software-latin-america', label: es ? 'Software CAD para America Latina' : 'CAD Dispatch Software for Latin America' },
                  { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Centro de Crimen en Tiempo Real' : 'What Is a Real-Time Crime Center' },
                  { href: '/resources/public-safety-software-municipalities-mexico', label: es ? 'Seguridad Publica — Mexico' : 'Public Safety Software — Mexico' },
                  { href: '/resources/public-safety-software-colombia', label: es ? 'Seguridad Publica — Colombia' : 'Public Safety Software — Colombia' },
                  { href: '/resources/public-safety-software-chile', label: es ? 'Seguridad Publica — Chile' : 'Public Safety Software — Chile' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} style={{
                    color: ACCENT, textDecoration: 'none',
                    borderBottom: `1px solid ${ACCENT}40`,
                  }}>
                    {link.label}
                  </Link>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '12px' }}>
                <span style={{
                  fontFamily: 'DM Mono, monospace', fontWeight: 600,
                  color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase',
                }}>
                  {es ? 'Productos:' : 'Products:'}
                </span>
                {[
                  { href: '/k-safety', label: 'K-Safety' },
                  { href: '/k-dispatch', label: 'K-Dispatch' },
                  { href: '/k-video', label: 'K-Video' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} style={{
                    color: ACCENT, textDecoration: 'none',
                    borderBottom: `1px solid ${ACCENT}40`,
                  }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* -- FAQ SECTION -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '16px',
            }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </p>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'Preguntas Sobre Software de Seguridad Publica en Argentina'
                : 'Questions About Public Safety Software in Argentina'}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderRadius: '12px', padding: '24px 28px',
                }}>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '18px', color: 'var(--white)', marginBottom: '10px',
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

        {/* -- RELATED ARTICLES -- */}
        <section style={{ padding: '64px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '24px',
            }}>
              {es ? 'Articulos Relacionados' : 'Related Articles'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  href: '/resources/cad-dispatch-software-latin-america',
                  en: 'CAD Dispatch Software for Latin America',
                  es: 'Software CAD de Despacho para America Latina',
                },
                {
                  href: '/resources/what-is-cad-dispatch-software',
                  en: 'What Is CAD Dispatch Software?',
                  es: '¿Que es el software de despacho CAD?',
                },
                {
                  href: '/resources/what-is-a-real-time-crime-center',
                  en: 'What Is a Real-Time Crime Center?',
                  es: '¿Que es un Centro de Crimen en Tiempo Real?',
                },
                {
                  href: '/resources/public-safety-software-municipalities-mexico',
                  en: 'Public Safety Software for Municipalities in Mexico',
                  es: 'Software de Seguridad Publica para Municipios en Mexico',
                },
                {
                  href: '/resources/public-safety-software-colombia',
                  en: 'Public Safety Software for Colombia',
                  es: 'Software de Seguridad Publica para Colombia',
                },
                {
                  href: '/resources/public-safety-software-chile',
                  en: 'Public Safety Software for Chile',
                  es: 'Software de Seguridad Publica para Chile',
                },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '16px 20px', borderRadius: '8px',
                  border: '1px solid var(--border)', textDecoration: 'none',
                  color: 'var(--dim)', fontSize: '15px',
                }}>
                  <span>{es ? link.es : link.en}</span>
                  <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* -- CTA -- */}
        <CTASection
          es={es}
          h2={es ? 'Transforma la Seguridad Publica de Tu Provincia o Municipio en Argentina' : 'Transform Public Safety in Your Argentine Province or Municipality'}
          subtitle={es
            ? 'Conoce como KabatOne integra videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa para jurisdicciones argentinas — desde CABA hasta municipios del interior.'
            : 'See how KabatOne unifies video surveillance, emergency dispatch, GIS, and incident management into one operational platform for Argentine jurisdictions — from CABA to interior municipalities.'}
          cta1={es ? 'Solicita una Demo' : 'Book a Demo'}
          cta2={es ? 'Contactar Ventas' : 'Contact Sales'}
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: 1fr 1fr"],
            div[style*="grid-template-columns: repeat(3"],
            div[style*="grid-template-columns: 1.2fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
