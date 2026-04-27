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
  return generatePageMetadata('publicSafetySoftwareChile', locale)
}

export default async function PublicSafetySoftwareChilePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-chile/`
    : `${baseUrl}/resources/public-safety-software-chile/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Chile' : 'Public Safety Software — Chile', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cuales son los numeros de emergencia en Chile?',
      answer: 'Chile opera cuatro numeros de emergencia principales: 133 (Carabineros de Chile), 131 (SAMU — Servicio de Atencion Medica de Urgencia), 132 (Bomberos) y 149 (PDI — Policia de Investigaciones). Las plataformas CAD modernas unifican la recepcion de llamadas desde los cuatro canales en un solo registro de incidente, eliminando duplicidades y acelerando el despacho.',
    },
    {
      question: '¿Como financia Chile tecnologia de seguridad publica municipal?',
      answer: 'Los municipios chilenos acceden a financiamiento a traves del FNDR (Fondo Nacional de Desarrollo Regional) administrado por SUBDERE, y mediante licitaciones publicadas en ChileCompra (Mercado Publico). Los Gobiernos Regionales (GORE) cofinancian proyectos de seguridad publica estrategicos. Las adquisiciones deben alinearse con el Plan Comunal de Seguridad Publica de cada municipio.',
    },
    {
      question: '¿Que es el CCTV municipal en Chile y como se integra con Carabineros?',
      answer: 'Los municipios chilenos operan sus propios sistemas CCTV financiados por FNDR, separados de las camaras y sistemas de despacho de Carabineros. Una plataforma unificada conecta ambas infraestructuras sin reemplazar el hardware existente — cualquier camara ONVIF/RTSP se integra directamente, creando una vista operacional compartida entre el municipio y la comisaria local.',
    },
    {
      question: '¿Puede KabatOne integrarse con la infraestructura de camaras existente en Chile?',
      answer: 'Si. KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Las camaras financiadas por FNDR instaladas en municipios chilenos se conectan directamente a la plataforma. Los paneles de control de acceso, lectores LPR y sensores existentes tambien se integran sin cambiar infraestructura.',
    },
    {
      question: '¿Como apoya KabatOne la coordinacion entre Carabineros y la seguridad municipal?',
      answer: 'K-Safety proporciona un mapa GIS compartido donde tanto los operadores municipales como los comandos de Carabineros ven posiciones de unidades, incidentes activos y feeds de video en tiempo real. K-Dispatch unifica el despacho 133/SAMU en un solo sistema, y K-Video centraliza el video municipal y las camaras privadas compartidas en una interfaz VMS con busqueda por zona y fecha.',
    },
    {
      question: '¿Como se alinea KabatOne con ChileCompra y los procesos de licitacion chilenos?',
      answer: 'KabatOne se comercializa a traves de distribuidores e integradores locales con registro en ChileCompra. La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada, adaptandose a los marcos presupuestarios municipales y a los requisitos de licitacion del Mercado Publico.',
    },
  ] : [
    {
      question: 'What are the emergency numbers in Chile?',
      answer: 'Chile operates four primary emergency numbers: 133 (Carabineros de Chile), 131 (SAMU — Servicio de Atención Médica de Urgencia), 132 (Bomberos), and 149 (PDI — Policía de Investigaciones). Modern CAD platforms unify intake from all four channels into a single incident record, eliminating duplication and accelerating dispatch.',
    },
    {
      question: 'How does Chile fund municipal public safety technology?',
      answer: 'Chilean municipalities access funding through the FNDR (Fondo Nacional de Desarrollo Regional) administered by SUBDERE, and through tenders published on ChileCompra (Mercado Público). Regional Governments (GORE) co-fund strategic public safety projects. Purchases must align with each municipality\'s Plan Comunal de Seguridad Pública.',
    },
    {
      question: 'What is municipal CCTV in Chile and how does it integrate with Carabineros?',
      answer: 'Chilean municipalities operate their own FNDR-funded CCTV systems, separate from Carabineros cameras and dispatch infrastructure. A unified platform connects both infrastructures without replacing existing hardware — any ONVIF/RTSP camera integrates directly, creating a shared operational view between the municipality and the local comisaría.',
    },
    {
      question: 'Can KabatOne integrate with existing camera infrastructure in Chile?',
      answer: 'Yes. KabatOne integrates any ONVIF/RTSP camera without hardware replacement. FNDR-funded cameras installed across Chilean municipalities connect directly to the platform. Existing access control panels, LPR readers, and sensors also integrate without changing infrastructure.',
    },
    {
      question: 'How does KabatOne support coordination between Carabineros and municipal security?',
      answer: 'K-Safety provides a shared GIS map where both municipal operators and Carabineros command posts see unit positions, active incidents, and live video feeds in real time. K-Dispatch unifies 133/SAMU intake into one system, and K-Video centralizes municipal and privately shared cameras in a searchable VMS with zone and date-based search.',
    },
    {
      question: 'How does KabatOne align with ChileCompra and Chilean procurement processes?',
      answer: 'KabatOne is marketed through local distributors and integrators registered on ChileCompra. The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform, adapting to municipal budget frameworks and Mercado Público procurement requirements.',
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Municipios en Chile' : 'Public Safety Software for Chile: Government Guide',
    es
      ? 'Software de seguridad publica para municipios y gobiernos regionales en Chile — conectando videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa.'
      : 'Public safety software for Chilean municipalities and regional governments — connecting surveillance, emergency dispatch, GIS, and incident management in one unified operational platform.',
    pageUrl,
    '2026-04-27'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'CCTV municipal y camaras de Carabineros en sistemas separados', unified: 'VMS unificado, todas las camaras buscables por zona y fecha' },
    { feature: 'Despacho de emergencias', fragmented: 'Cuatro canales separados 133/131/132/149', unified: 'Registro unico de incidente que conecta todas las agencias' },
    { feature: 'Coordinacion Carabineros / PDI', fragmented: 'Solo radio, sin pantalla compartida', unified: 'Mapa GIS compartido con posiciones de unidades en tiempo real' },
    { feature: 'Integracion FNDR', fragmented: 'Camaras municipales aisladas por proyecto', unified: 'Todas las camaras FNDR integradas en una sola plataforma' },
    { feature: 'Reportes para SUBDERE', fragmented: 'Exportacion manual de datos incompletos', unified: 'KPIs automatizados de tiempos de respuesta y cobertura' },
    { feature: 'Dependencia tecnologica', fragmented: 'Hardware propietario por proveedor', unified: 'ONVIF/RTSP, cualquier marca de camara' },
  ] : [
    { feature: 'Video', fragmented: 'Municipal CCTV and Carabineros cameras on separate systems', unified: 'Unified VMS, all cameras searchable by zone and date' },
    { feature: 'Emergency dispatch', fragmented: 'Four separate channels 133/131/132/149', unified: 'Single incident record bridging all agencies' },
    { feature: 'Carabineros / PDI coordination', fragmented: 'Radio-only, no shared screen', unified: 'Shared GIS map with real-time unit positions' },
    { feature: 'FNDR integration', fragmented: 'Municipal cameras siloed by project', unified: 'All FNDR-funded cameras integrated in one platform' },
    { feature: 'SUBDERE reporting', fragmented: 'Manual export of incomplete data', unified: 'Automated KPIs for response times and coverage' },
    { feature: 'Technology lock-in', fragmented: 'Proprietary hardware per vendor', unified: 'ONVIF/RTSP, any camera brand' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado', text: 'Todas las camaras municipales (financiadas por FNDR) y los feeds privados compartidos en una sola interfaz VMS con busqueda por zona, fecha y tipo de evento.' },
    { n: '02', title: 'Centro de despacho unificado', text: 'Recepcion de llamadas 133/131/132, clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD. Tiempos de despacho promedio inferiores a 90 segundos.' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones de Carabineros, SAMU, Bomberos y PDI en un solo mapa operativo compartido. Vista conjunta entre comisaria y centro de mando municipal.' },
    { n: '04', title: 'Fusion de sensores', text: 'LPR, botones de panico y alertas acusticas unificados con video en el mismo entorno operativo — sin multiples pantallas o sistemas.' },
    { n: '05', title: 'Reportes para SUBDERE y GORE', text: 'KPIs automatizados de tiempos de respuesta, incidentes por zona y cobertura de camaras para los planes comunales de seguridad y la supervision regional.' },
  ] : [
    { n: '01', title: 'Unified video', text: 'All municipal cameras (FNDR-funded) and privately shared feeds on one VMS interface with search by zone, date, and event type.' },
    { n: '02', title: 'Unified dispatch center', text: '133/131/132 intake, incident classification, and unit assignment from one CAD platform. Average dispatch time under 90 seconds.' },
    { n: '03', title: 'Real-time GIS', text: 'Positions of Carabineros, SAMU, Bomberos, and PDI on one shared operational map — joint view between comisaría and municipal command center.' },
    { n: '04', title: 'Sensor fusion', text: 'LPR, panic buttons, and acoustic alerts unified with video in the same operational environment — no multiple screens or systems.' },
    { n: '05', title: 'Reporting for SUBDERE and GORE', text: 'Automated KPIs for response times, zone-level incident counts, and camera coverage to support Plan Comunal reporting and regional oversight.' },
  ]

  const challengeCards = es ? [
    { icon: '🔗', title: 'Coordinacion Carabineros / municipal', text: 'Carabineros y los sistemas CCTV municipales operan en plataformas separadas sin un mapa operativo compartido. Sin una plataforma unificada, la coordinacion depende del radio y el juicio individual, generando demoras en la respuesta.' },
    { icon: '📞', title: 'Cuatro numeros de emergencia sin despacho unificado', text: 'Chile opera 133 (Carabineros), 131 (SAMU), 132 (Bomberos) y 149 (PDI) como canales separados. Sin un registro de incidente comun, los incidentes que involucran multiples agencias generan duplicidad y perdida de contexto operacional.' },
    { icon: '📷', title: 'Camara municipales FNDR aisladas', text: 'Anos de proyectos FNDR independientes resultan en camaras municipales sin una capa VMS unificada. Los operadores acceden a multiples interfaces, ralentizando la busqueda de footage y creando puntos ciegos operativos.' },
    { icon: '📋', title: 'Reportes para SUBDERE y GORE', text: 'Sin metricas estandarizadas de tiempos de respuesta e incidentes por zona, el cumplimiento con SUBDERE y la supervision del GORE dependen de exportaciones manuales incompletas de cada sistema aislado.' },
  ] : [
    { icon: '🔗', title: 'Carabineros / Municipal coordination', text: 'Carabineros and municipal CCTV systems operate on separate platforms with no shared operational map. Without a unified platform, coordination relies on radio and individual judgment, creating response delays.' },
    { icon: '📞', title: 'Four emergency numbers without unified dispatch', text: 'Chile operates 133 (Carabineros), 131 (SAMU), 132 (Bomberos), and 149 (PDI) as separate channels. Without a shared incident record, multi-agency incidents create duplication and lost operational context.' },
    { icon: '📷', title: 'Siloed FNDR municipal cameras', text: 'Years of independent FNDR projects result in municipal cameras with no unified VMS layer. Operators access multiple interfaces, slowing footage retrieval and creating operational blind spots.' },
    { icon: '📋', title: 'SUBDERE and GORE reporting', text: 'Without standardized response-time and zone-level incident metrics, SUBDERE compliance and GORE oversight depend on incomplete manual exports from each siloed system.' },
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
            {es ? 'Software de Seguridad Publica — Chile' : 'Public Safety Software — Chile'}
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
              ? 'Software de Seguridad Publica para Chile'
              : 'Public Safety Software for Chile'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Guia para municipios chilenos, alcaldias y gobiernos regionales que evaluan plataformas unificadas de seguridad publica: videovigilancia, despacho de emergencias, GIS y gestion de incidentes.'
              : 'Guide for Chilean municipalities, alcaldías, and regional governments evaluating unified public safety platforms — video surveillance, emergency dispatch, GIS, and incident management.'}
          </p>
        </section>

        {/* -- SECTION: Chile's Public Safety Structure -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'La Estructura de Seguridad Publica en Chile'
                : "Chile's Public Safety Structure"}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El sistema de seguridad publica de Chile esta coordinado por Carabineros de Chile (policia uniformada) y la PDI (Policia de Investigaciones de Chile), ambas bajo el Ministerio del Interior y Seguridad Publica. Los municipios operan su propia infraestructura de vigilancia, financiada principalmente a traves del FNDR (Fondo Nacional de Desarrollo Regional) administrado por SUBDERE. Con 16 regiones y mas de 345 comunas, Chile ha desarrollado un ecosistema de seguridad descentralizado donde cada municipio construye y administra su propia red CCTV.'
                : "Chile's public safety system is coordinated by Carabineros de Chile (uniformed police) and the PDI (Policía de Investigaciones de Chile), both under the Ministry of the Interior and Public Security. Municipalities operate their own surveillance infrastructure, primarily funded through the FNDR (Fondo Nacional de Desarrollo Regional) administered by SUBDERE. With 16 regions and over 345 comunas, Chile has developed a decentralized public safety ecosystem where each municipality builds and administers its own CCTV network."}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Chile protege aproximadamente 19.5 millones de ciudadanos. La region Metropolitana de Santiago concentra el mayor numero de camaras de vigilancia municipal del pais, mientras que ciudades como Valparaiso, Concepcion y Antofagasta han implementado centros de mando de seguridad a nivel de ciudad. El desafio comun es la falta de integracion entre los sistemas CCTV municipales y la infraestructura operacional de Carabineros, generando brechas de coordinacion en la respuesta a emergencias.'
                : 'Chile protects approximately 19.5 million citizens. The Santiago Metropolitan Region concentrates the highest number of municipal surveillance cameras in the country, while cities such as Valparaíso, Concepción, and Antofagasta have implemented city-level security command centers. The common challenge is the lack of integration between municipal CCTV systems and Carabineros operational infrastructure, creating coordination gaps in emergency response.'}
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
                ? 'Desafios Clave para los Municipios Chilenos'
                : 'Key Challenges for Chilean Municipalities'}
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
                ? '¿Como Funciona una Plataforma Unificada para Chile?'
                : 'How a Unified Platform Works for Chile'}
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
                { href: '/k-dispatch', label: 'K-Dispatch', color: '#f59e0b', desc: es ? 'Despacho CAD / 133' : 'CAD dispatch / 133' },
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
                ? 'Fragmentado vs Plataforma Unificada para Municipios Chilenos'
                : 'Fragmented vs Unified Platform for Chilean Municipalities'}
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
                  { href: '/resources/what-is-situational-awareness-software', label: es ? 'Software de Conciencia Situacional' : 'What Is Situational Awareness Software' },
                  { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Centro de Crimen en Tiempo Real' : 'What Is a Real-Time Crime Center' },
                  { href: '/resources/public-safety-software-municipalities-mexico', label: es ? 'Seguridad Publica — Mexico' : 'Public Safety Software — Mexico' },
                  { href: '/resources/public-safety-software-colombia', label: es ? 'Seguridad Publica — Colombia' : 'Public Safety Software — Colombia' },
                  { href: '/resources/public-safety-software-peru', label: es ? 'Seguridad Publica — Peru' : 'Public Safety Software — Peru' },
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
                ? 'Preguntas Sobre Software de Seguridad Publica en Chile'
                : 'Questions About Public Safety Software in Chile'}
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
                  href: '/resources/what-is-cad-dispatch-software',
                  en: 'What Is CAD Dispatch Software?',
                  es: '¿Que es el software de despacho CAD?',
                },
                {
                  href: '/resources/what-is-situational-awareness-software',
                  en: 'What Is Situational Awareness Software?',
                  es: '¿Que es el software de conciencia situacional?',
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
                  href: '/resources/public-safety-software-peru',
                  en: 'Public Safety Software for Peru',
                  es: 'Software de Seguridad Publica para Peru',
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
          h2={es ? 'Transforma la Seguridad Publica de Tu Municipio en Chile' : 'Transform Public Safety in Your Chilean Municipality'}
          subtitle={es
            ? 'Conoce como KabatOne integra videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa para municipios y gobiernos regionales chilenos.'
            : 'See how KabatOne unifies video surveillance, emergency dispatch, GIS, and incident management into one operational platform for Chilean municipalities and regional governments.'}
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
