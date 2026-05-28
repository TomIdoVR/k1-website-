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
  return generatePageMetadata('publicSafetySoftwareColombia', locale)
}

export default async function PublicSafetySoftwareColombiaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#f59e0b'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-colombia/`
    : `${baseUrl}/resources/public-safety-software-colombia/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Colombia' : 'Public Safety Software — Colombia', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Que numero de emergencia se usa en Colombia?',
      answer: 'Colombia usa el 123 para la policia, el 119 para bomberos y ambulancias, y el 112 como numero de emergencias unificado de estandar europeo. Las plataformas CAD modernas gestionan la recepcion de llamadas desde los tres canales, clasifican el incidente y asignan las unidades de respuesta adecuadas.',
    },
    {
      question: '¿Que es FONSET y como financia tecnologia de seguridad publica?',
      answer: 'FONSET — Fondo Nacional de Seguridad y Convivencia — canaliza financiamiento nacional hacia los planes de seguridad municipales. Las adquisiciones tecnologicas deben alinearse con los objetivos del PISCC (Plan Integral de Seguridad y Convivencia Ciudadana) del municipio.',
    },
    {
      question: '¿Que es un CRUM en Colombia?',
      answer: 'El CRUM — Centro Regulador de Urgencias y Emergencias — es el centro de despacho y coordinacion de urgencias medicas. Las plataformas unificadas conectan el CRUM con el despacho policial para lograr una cobertura completa de respuesta a emergencias.',
    },
    {
      question: '¿Puede KabatOne integrarse con la infraestructura de camaras existente en Colombia?',
      answer: 'Si. Cualquier camara ONVIF/RTSP se integra sin necesidad de reemplazo. Las camaras financiadas con FONSET y las transmisiones privadas compartidas se conectan de forma transparente, sin cambiar el hardware existente.',
    },
    {
      question: '¿La plataforma esta disponible en espanol con soporte en Colombia?',
      answer: 'Si. Interfaz completa en espanol, soporte en castellano y socios de integracion locales en Colombia y en toda LATAM.',
    },
    {
      question: '¿Como apoya KabatOne los objetivos PISCC de los municipios?',
      answer: 'K-Safety (GIS) + K-Dispatch (CAD) + K-Video en conjunto proporcionan los datos de incidentes en tiempo real, las metricas de respuesta y los registros de rendicion de cuentas que requiere el reporte PISCC.',
    },
  ] : [
    {
      question: 'What emergency number does Colombia use?',
      answer: 'Colombia uses 123 for police, 119 for fire and ambulance, and 112 as the unified European-standard number. Modern CAD platforms handle intake from all three, classify the incident, and automatically assign the appropriate response units.',
    },
    {
      question: 'What is FONSET and how does it fund public safety technology?',
      answer: 'FONSET — Fondo Nacional de Seguridad y Convivencia — channels national funding to municipal security plans. Technology purchases must align with PISCC (Plan Integral de Seguridad y Convivencia Ciudadana) objectives.',
    },
    {
      question: 'What is a CRUM in Colombia?',
      answer: 'Centro Regulador de Urgencias y Emergencias — the medical dispatch and coordination center. Unified platforms bridge CRUM with police dispatch for full emergency response coverage.',
    },
    {
      question: 'Can KabatOne integrate with existing Colombian camera infrastructure?',
      answer: 'Yes — any ONVIF/RTSP camera integrates without replacement. Existing FONSET-funded cameras and privately shared feeds connect seamlessly without changing any hardware.',
    },
    {
      question: 'Is the platform available in Spanish with Colombian support?',
      answer: 'Yes — full Spanish interface, Spanish-language support, and local integration partners in Colombia and broader LATAM.',
    },
    {
      question: 'How does KabatOne support municipal PISCC objectives?',
      answer: "K-Safety's GIS + K-Dispatch CAD + K-Video together provide the real-time incident data, response metrics, and accountability logs that PISCC reporting requires.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Municipios en Colombia' : 'Public Safety Software for Colombia: Government Guide',
    es
      ? 'Software de seguridad publica para municipios y gobiernos departamentales en Colombia — conectando videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa.'
      : 'Public safety software for Colombian municipalities and regional governments — connecting surveillance, emergency dispatch, GIS, and incident management in one unified operational platform.',
    pageUrl,
    '2026-04-08'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'Multiples sistemas DVR sin vista central', unified: 'VMS unificado, todas las camaras con busqueda' },
    { feature: 'Despacho de emergencias', fragmented: 'Canales separados 123/119/CRUM', unified: 'Registro unico de incidentes que conecta todas las agencias' },
    { feature: 'Coordinacion PNC', fragmented: 'Solo radio, sin pantalla compartida', unified: 'Mapa GIS compartido con vista conjunta de incidentes' },
    { feature: 'Seguimiento de respuesta', fragmented: 'Sin visibilidad GPS de unidades', unified: 'Posiciones de unidades en tiempo real en mapa operativo' },
    { feature: 'Reportes', fragmented: 'Manual o inexistente', unified: 'KPIs automatizados alineados con el PISCC' },
    { feature: 'Dependencia tecnologica', fragmented: 'Hardware propietario por fabricante', unified: 'ONVIF/RTSP, cualquier marca de camara' },
  ] : [
    { feature: 'Video', fragmented: 'Multiple DVR systems, no central view', unified: 'Unified VMS, all cameras searchable' },
    { feature: 'Emergency dispatch', fragmented: 'Separate 123/119/CRUM channels', unified: 'Single incident record bridging all agencies' },
    { feature: 'PNC coordination', fragmented: 'Radio-only, no shared screen', unified: 'Shared GIS map with joint incident view' },
    { feature: 'Response tracking', fragmented: 'No GPS visibility', unified: 'Real-time unit positions on operational map' },
    { feature: 'Reporting', fragmented: 'Manual or none', unified: 'Automated PISCC-aligned KPIs' },
    { feature: 'Technology lock-in', fragmented: 'Proprietary hardware per vendor', unified: 'ONVIF/RTSP, any camera brand' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado', text: 'Todas las camaras municipales (financiadas por FONSET y compartidas por privados) en una sola interfaz VMS con busqueda por zona, fecha y tipo de evento.' },
    { n: '02', title: 'Centro de despacho', text: 'Recepcion de llamadas 123/112, clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD.' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones de Policia Nacional, ambulancias, bomberos y seguridad local en un solo mapa operativo compartido.' },
    { n: '04', title: 'Fusion de sensores', text: 'LPR, botones de panico y sensores acusticos unificados con alertas de video en el mismo entorno operativo.' },
    { n: '05', title: 'Reportes y alineacion PISCC', text: 'KPIs automatizados de tiempos de respuesta y patrones de incidentes para los planes de seguridad municipales y la supervision departamental.' },
  ] : [
    { n: '01', title: 'Unified video', text: 'All municipal cameras (FONSET-funded and privately shared) on one VMS interface with search by zone, date, and event type.' },
    { n: '02', title: 'Dispatch center', text: '123/112 intake, incident classification, and unit assignment from one CAD platform.' },
    { n: '03', title: 'Real-time GIS', text: 'Positions of Policia Nacional, ambulances, fire, and local security on one shared operational map.' },
    { n: '04', title: 'Sensor fusion', text: 'LPR, panic buttons, and acoustic sensors unified with video alerts in the same operational environment.' },
    { n: '05', title: 'Reporting and PISCC alignment', text: 'Automated KPIs for municipal security plans and department-level oversight of response times and incident patterns.' },
  ]

  const challengeCards = es ? [
    { icon: '🔗', title: 'Coordinacion PNC / municipios', text: 'La Policia Nacional y la videovigilancia municipal operan en sistemas separados sin un mapa operativo compartido. Sin una plataforma unificada, la coordinacion depende del radio y el criterio individual, generando demoras criticas en la respuesta.' },
    { icon: '📞', title: 'Despacho de emergencias fragmentado', text: 'El CRUM gestiona urgencias medicas, pero los incidentes criminales se enrutan por separado al 123 (policia) y el 119 (bomberos). Tres canales paralelos sin un registro de incidente comun generan duplicidad y perdida de contexto.' },
    { icon: '📷', title: 'Infraestructura multi-proveedor de camaras', text: 'Anos de adquisicion separada resultan en multiples sistemas DVR incompatibles sin una capa VMS unificada. Los operadores acceden a interfaces distintas, ralentizando la respuesta y creando puntos ciegos.' },
    { icon: '📋', title: 'Rendicion de cuentas y reportes', text: 'Sin metricas estandarizadas entre municipios para tiempos de respuesta y patrones de incidentes, el cumplimiento del PISCC y la supervision departamental dependen de exportaciones manuales incompletas.' },
  ] : [
    { icon: '🔗', title: 'PNC / Local coordination', text: 'National police and municipal surveillance run on separate systems with no shared operational map. Without a unified platform, coordination relies on radio calls and individual judgment, creating critical response delays.' },
    { icon: '📞', title: 'Fragmented emergency dispatch', text: 'CRUM handles medical emergencies, but crime incidents route separately through 123 (police) and 119 (fire). Three parallel channels with no shared incident record create duplication and lost context.' },
    { icon: '📷', title: 'Multi-vendor camera infrastructure', text: 'Years of separate procurement result in multiple incompatible DVR systems with no unified VMS layer. Operators access different interfaces, slowing response and creating blind spots.' },
    { icon: '📋', title: 'Accountability and reporting', text: 'No standardized metrics across municipalities for response times or incident patterns — PISCC compliance and departmental oversight depend on incomplete manual exports.' },
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
            {es ? 'Software de Seguridad Publica — Colombia' : 'Public Safety Software — Colombia'}
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
              ? 'Software de Seguridad Publica para Colombia'
              : 'Public Safety Software for Colombia'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Guia para municipios colombianos, alcaldias y gobiernos departamentales que evaluan plataformas unificadas de seguridad publica: videovigilancia, despacho de emergencias, GIS y gestion de incidentes.'
              : 'Guide for Colombian municipalities, alcaldias, and departmental governments evaluating unified public safety platforms — video surveillance, emergency dispatch, GIS, and incident management.'}
          </p>
        </section>

        {/* -- SECTION: Colombia's Public Safety Structure -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'La Estructura de Seguridad Publica en Colombia'
                : "Colombia's Public Safety Structure"}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El sistema de seguridad publica de Colombia esta coordinado a nivel nacional por la Policia Nacional de Colombia (PNC), mientras que los gobiernos departamentales y municipales operan su propia infraestructura de vigilancia y respuesta a emergencias. Los municipios colombianos invierten a traves del Sistema General de Regalias y FONSET (Fondo Nacional de Seguridad y Convivencia Ciudadana), con las Alcaldias responsables de los Planes Integrales de Seguridad y Convivencia Ciudadana (PISCC).'
                : "Colombia's public safety system is coordinated by the Policia Nacional de Colombia (PNC) at the national level, with departmental and municipal governments operating their own surveillance and emergency response infrastructure. Colombian municipalities invest through the Sistema General de Regalias and FONSET (Fondo Nacional de Seguridad y Convivencia Ciudadana), with Alcaldias responsible for local Planes Integrales de Seguridad y Convivencia Ciudadana (PISCC)."}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Colombia ha desarrollado centros de mando a nivel de ciudad (CCTV + centros de despacho de emergencias, frecuentemente denominados CRUM — Centro Regulador de Urgencias y Emergencias — o Centros de Comando Unificado). El desafio: cada ciudad ha construido su propia infraestructura aislada, generando brechas de coordinacion entre la Policia Nacional, los sistemas de vigilancia locales y los servicios medicos de emergencia.'
                : 'Colombia has developed several city-level command centers (CCTV + emergency dispatch centers, often called CRUM — Centro Regulador de Urgencias y Emergencias, or Centros de Comando Unificado). The challenge: each city has built its own siloed infrastructure, creating coordination gaps between Policia Nacional, local surveillance systems, and emergency medical services.'}
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
                ? 'Desafios Clave para los Municipios Colombianos'
                : 'Key Challenges for Colombian Municipalities'}
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
                ? '¿Como Funciona una Plataforma Unificada para Colombia?'
                : 'How a Unified Platform Works for Colombia'}
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
                { href: '/k-safety', label: 'K-Safety', color: '#3b82f6', desc: es ? 'Conciencia situacional' : 'Situational awareness' },
                { href: '/k-dispatch', label: 'K-Dispatch', color: ACCENT, desc: es ? 'Despacho CAD / 123' : 'CAD dispatch / 123' },
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
                ? 'Fragmentado vs Plataforma Unificada para Municipios Colombianos'
                : 'Fragmented vs Unified Platform for Colombian Municipalities'}
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
                ? 'Preguntas Sobre Software de Seguridad Publica en Colombia'
                : 'Questions About Public Safety Software in Colombia'}
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
          h2={es ? 'Transforma la Seguridad Publica de Tu Municipio en Colombia' : 'Transform Public Safety in Your Colombian Municipality'}
          subtitle={es
            ? 'Conoce como KabatOne integra videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa para municipios y gobiernos departamentales colombianos.'
            : 'See how KabatOne unifies video surveillance, emergency dispatch, GIS, and incident management into one operational platform for Colombian municipalities and departmental governments.'}
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
