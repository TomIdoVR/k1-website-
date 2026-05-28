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
  return generatePageMetadata('publicSafetySoftwarePeru', locale)
}

export default async function PublicSafetySoftwarePeruPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#dc2626'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-peru/`
    : `${baseUrl}/resources/public-safety-software-peru/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica para Peru' : 'Public Safety Software for Peru', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cual es la diferencia entre el serenazgo y la PNP en Peru?',
      answer: 'El serenazgo son agentes auxiliares de seguridad contratados por los municipios; la PNP (Policia Nacional del Peru) es la fuerza policial nacional. Los sistemas modernos de seguridad publica integran ambas instituciones en un mismo cuadro operativo, permitiendo coordinacion en tiempo real entre las unidades de serenazgo y los efectivos de la PNP.',
    },
    {
      question: '¿Que numero de emergencia se usa en Peru para el despacho?',
      answer: 'Peru utiliza el 105 para la policia y el 116 para los bomberos. Las plataformas CAD modernas gestionan la recepcion de llamadas de ambos servicios, clasifican el incidente y asignan las unidades de respuesta adecuadas de forma automatica.',
    },
    {
      question: '¿Que es el CONASEC y como se relaciona con el software de seguridad publica?',
      answer: 'El CONASEC (Consejo Nacional de Seguridad Ciudadana) coordina la politica de seguridad ciudadana a nivel nacional. Los municipios que reciben financiamiento del CONASEC lo destinan frecuentemente a camaras de videovigilancia y centros de control. Contar con una plataforma que integre estos activos facilita el cumplimiento de los requisitos del programa.',
    },
    {
      question: '¿Puede una plataforma unificada funcionar con las camaras existentes en municipios peruanos?',
      answer: 'Si. Las plataformas modernas como KabatOne son compatibles con camaras ONVIF/RTSP de cualquier fabricante. Esto permite integrar la infraestructura de videovigilancia ya instalada sin reemplazar equipos, reduciendo costos y acelerando el despliegue.',
    },
    {
      question: '¿Como apoya KabatOne los despliegues en gobiernos peruanos?',
      answer: 'La plataforma de KabatOne unifica el GPS del serenazgo, video de vigilancia, despacho de emergencias y gestion de incidentes en un solo entorno operativo. El sistema es desplegable sobre infraestructura existente y no requiere hardware propietario, lo que facilita la adopcion en municipios con presupuesto acotado.',
    },
    {
      question: '¿Que presupuesto se requiere tipicamente para un centro de mando municipal en Peru?',
      answer: 'Los costos varian desde USD 200,000 para un centro de integracion basico hasta USD 1.5 millones o mas para un despliegue completo tipo C4. Los programas FONIPREL y PROINVERSION pueden cofinanciar la infraestructura tecnologica en el marco de proyectos de inversion publica.',
    },
  ] : [
    {
      question: 'What is the difference between serenazgo and PNP in Peru?',
      answer: 'Serenazgo are municipal auxiliary security officers hired by local governments; the PNP (Policia Nacional del Peru) is the national police force. Modern public safety platforms bridge both institutions into a single operational picture, enabling real-time coordination between serenazgo units and PNP officers.',
    },
    {
      question: 'What emergency number does Peru use for dispatch?',
      answer: 'Peru uses 105 for police and 116 for firefighters. Modern CAD platforms manage intake from both services, classify the incident, and automatically assign the appropriate response units.',
    },
    {
      question: 'What is CONASEC and how does it relate to public safety software?',
      answer: 'CONASEC (Consejo Nacional de Seguridad Ciudadana) coordinates citizen security policy at the national level. Municipalities that receive CONASEC funding often use it for surveillance cameras and control centers. Having a platform that integrates these assets facilitates compliance with program requirements.',
    },
    {
      question: 'Can a unified platform work with existing cameras in Peruvian municipalities?',
      answer: 'Yes. Modern platforms like KabatOne are compatible with ONVIF/RTSP cameras from any manufacturer. This allows municipalities to integrate already-installed surveillance infrastructure without replacing equipment, reducing costs and accelerating deployment.',
    },
    {
      question: 'How does KabatOne support Peruvian government deployments?',
      answer: "KabatOne's platform unifies serenazgo GPS, surveillance video, emergency dispatch, and incident management in a single operational environment. The system is deployable on existing infrastructure and requires no proprietary hardware, making adoption accessible for municipalities with constrained budgets.",
    },
    {
      question: 'What budget is typically needed for a municipal command center in Peru?',
      answer: 'Costs range from USD 200,000 for a basic integration center to USD 1.5 million or more for a full C4 deployment. FONIPREL and PROINVERSION programs can co-fund technology infrastructure within public investment project frameworks.',
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Municipios en Peru' : 'Public Safety Software for Peru: Government Guide',
    es ? 'Software de seguridad publica para municipios y gobiernos regionales en Peru — conectando videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa.' : 'Public safety software for Peruvian municipalities and regional governments — connecting video surveillance, emergency dispatch, GIS, and incident management in one operational platform.',
    pageUrl,
    '2026-04-08'
  )

  const comparisonRows = es ? [
    { feature: 'Gestion de video', fragmented: 'Multiples DVR sin vista centralizada', unified: 'VMS unificado, todas las camaras con busqueda' },
    { feature: 'Despacho del serenazgo', fragmented: 'Solo radio, sin visibilidad GPS', unified: 'Despacho CAD con rastreo de unidades en tiempo real' },
    { feature: 'Coordinacion con PNP', fragmented: 'Canales separados, sin pantalla compartida', unified: 'Mapa operativo compartido, puente de incidentes' },
    { feature: 'Respuesta a emergencias', fragmented: 'Registro manual, escalamiento tardio', unified: 'Clasificacion y enrutamiento automatico de incidentes' },
    { feature: 'Registro de auditoria', fragmented: 'Sin registros estandarizados', unified: 'Log completo por operador e incidente con marca de tiempo' },
    { feature: 'Reportes', fragmented: 'Exportaciones manuales a Excel', unified: 'Dashboards de KPIs automatizados' },
  ] : [
    { feature: 'Video management', fragmented: 'Multiple DVR systems, no central view', unified: 'Unified VMS, all cameras searchable' },
    { feature: 'Serenazgo dispatch', fragmented: 'Radio-only, no GPS visibility', unified: 'CAD dispatch with real-time unit tracking' },
    { feature: 'PNP coordination', fragmented: 'Separate channels, no shared screen', unified: 'Shared operational map, incident bridge' },
    { feature: 'Emergency response', fragmented: 'Manual logging, delayed escalation', unified: 'Automated incident classification and routing' },
    { feature: 'Audit trail', fragmented: 'No standardized records', unified: 'Full timestamp log per operator and incident' },
    { feature: 'Reporting', fragmented: 'Manual Excel exports', unified: 'Automated KPI dashboards' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Gestion unificada de video', text: 'Todas las camaras (municipales, financiadas por CONASEC, privadas) en una sola pantalla con busqueda por zona, fecha y tipo de evento.' },
    { n: '02', title: 'Despacho de emergencias', text: 'Recepcion de llamadas 105/116, clasificacion de incidentes y asignacion de unidades del serenazgo y la PNP con visualizacion GPS.' },
    { n: '03', title: 'Mapa GIS en tiempo real', text: 'Posiciones de todas las unidades, camaras activas e incidentes en curso sobre un mapa operativo compartido.' },
    { n: '04', title: 'Integracion de sensores', text: 'Lectores LPR, botones de panico, deteccion de disparos (donde esten desplegados) y otros sensores integrados en el mismo entorno.' },
    { n: '05', title: 'Reportes y rendicion de cuentas', text: 'KPIs de tiempo de respuesta, registros de incidentes y trail de auditoria por operador para revision post-incidente y cumplimiento institucional.' },
  ] : [
    { n: '01', title: 'Unified video management', text: 'All cameras (municipal, CONASEC-funded, private) on one screen with search by zone, date, and event type.' },
    { n: '02', title: 'Emergency dispatch', text: '105/116 call intake, incident classification, and serenazgo/PNP unit assignment with GPS tracking.' },
    { n: '03', title: 'Real-time GIS map', text: 'Positions of all units, active cameras, and live incidents on a shared operational map.' },
    { n: '04', title: 'Sensor integration', text: 'LPR readers, panic buttons, gunshot detection (where deployed), and other sensors unified into the same environment.' },
    { n: '05', title: 'Reporting and accountability', text: 'Response time KPIs, incident logs, and per-operator audit trail for post-incident review and institutional compliance.' },
  ]

  const challengeCards = es ? [
    { icon: '⚡', title: 'Coordinacion serenazgo-PNP', text: 'Los agentes municipales auxiliares y la policia nacional no comparten un cuadro operativo comun. Sin una plataforma unificada, la coordinacion depende de llamadas de radio y criterios individuales, generando demoras criticas en la respuesta.' },
    { icon: '📷', title: 'Infraestructura de camaras fragmentada', text: 'Camaras de diferentes fabricantes y epocas sin una capa de gestion unificada. Los operadores deben acceder a multiples interfaces para revisar video, lo que ralentiza la respuesta y genera puntos ciegos.' },
    { icon: '📞', title: 'Despacho de emergencias 105/911', text: 'La mayoria de los municipios carece de sistemas CAD modernos integrados con el GPS de las unidades de campo, lo que dificulta la asignacion optima de recursos y el seguimiento de tiempos de respuesta.' },
    { icon: '📋', title: 'Evidencia y trail de auditoria', text: 'Sin registro estandarizado por operador e incidente, la revision post-evento y la rendicion de cuentas institucional se vuelven procesos manuales, incompletos y dificilmente auditables.' },
  ] : [
    { icon: '⚡', title: 'Serenazgo-PNP coordination', text: 'Local auxiliary units and national police do not share a common operational picture. Without a unified platform, coordination relies on radio calls and individual judgment, creating critical response delays.' },
    { icon: '📷', title: 'Fragmented camera infrastructure', text: 'Cameras from different vendors and eras with no unified management layer. Operators must access multiple interfaces to review footage, slowing response and creating blind spots.' },
    { icon: '📞', title: '105/911 emergency dispatch', text: 'Most municipalities lack modern CAD systems integrated with field unit GPS, making optimal resource assignment and response time tracking difficult.' },
    { icon: '📋', title: 'Evidence and audit trail', text: 'Without standardized per-operator and per-incident logging, post-event review and institutional accountability become manual, incomplete, and difficult to audit.' },
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
            {es ? 'Software de Seguridad Publica — Peru' : 'Public Safety Software — Peru'}
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
              ? 'Software de Seguridad Publica para Peru'
              : 'Public Safety Software for Peru'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Guia para municipios peruanos y gobiernos regionales que evaluan plataformas unificadas de seguridad publica: videovigilancia, despacho de emergencias, GIS y gestion de incidentes.'
              : 'A guide for Peruvian municipalities and regional governments evaluating unified public safety platforms — video surveillance, emergency dispatch, GIS, and incident management.'}
          </p>
        </section>

        {/* -- SECTION: Peru's Public Safety Landscape -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'El Panorama de la Seguridad Publica en Peru'
                : "Peru's Public Safety Landscape"}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Peru opera una estructura de seguridad descentralizada: el MININTER (Ministerio del Interior) supervisa a la Policia Nacional del Peru (PNP), mientras que los gobiernos municipales gestionan el serenazgo local (agentes auxiliares de seguridad) y los sistemas de videovigilancia propios. El problema central es que el serenazgo y la PNP operan de forma separada, con sistemas distintos y sin un cuadro operativo compartido. El resultado: coordinacion lenta y ventanas de respuesta perdidas.'
                : 'Peru operates a decentralized security structure with MININTER (Ministerio del Interior) overseeing the national police (PNP), while municipal governments manage local serenazgo (auxiliary security officers) and local surveillance systems. The core challenge: local serenazgo and PNP operate separately, using different systems, with no shared operational picture. The result is slow coordination and missed response windows.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Los municipios peruanos modernos estan invirtiendo en centros de mando integrados — frecuentemente denominados Centrales de Emergencias o Centros de Gestion de Seguridad Ciudadana — que consolidan camaras de vigilancia, seguimiento GPS de unidades del serenazgo y coordinacion de emergencias en una sola plataforma operativa.'
                : 'Modern Peruvian municipalities are investing in integrated command centers — often called Centrales de Emergencias or Centros de Gestion de Seguridad Ciudadana — that consolidate surveillance cameras, GPS tracking of serenazgo units, and emergency coordination into a single operational platform.'}
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
                ? 'Desafios Clave para los Municipios Peruanos'
                : 'Key Challenges for Peruvian Municipalities'}
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

        {/* -- SECTION: What Modern Software Provides (5-step flow) -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0', background: `color-mix(in srgb, ${ACCENT} 3%, transparent)` }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? '¿Que Proporciona el Software Moderno de Seguridad Publica?'
                : 'What Modern Public Safety Software Provides'}
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
                { href: '/k-dispatch', label: 'K-Dispatch', color: ACCENT, desc: es ? 'Despacho CAD / 105' : 'CAD dispatch / 105' },
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
                ? 'Fragmentado vs Plataforma Unificada para Municipios Peruanos'
                : 'Fragmented vs Unified Platform for Peruvian Municipalities'}
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
                  { href: '/resources/what-is-video-management-software', label: es ? 'Software de Gestion de Video' : 'What Is Video Management Software' },
                  { href: '/resources/public-safety-software-municipalities-mexico', label: es ? 'Seguridad Publica — Mexico' : 'Public Safety Software — Mexico' },
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
                ? 'Preguntas Sobre Software de Seguridad Publica en Peru'
                : 'Questions About Public Safety Software in Peru'}
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
                  href: '/resources/what-is-video-management-software',
                  en: 'What Is Video Management Software?',
                  es: '¿Que es el software de gestion de video?',
                },
                {
                  href: '/resources/public-safety-software-municipalities-mexico',
                  en: 'Public Safety Software for Municipalities in Mexico',
                  es: 'Software de Seguridad Publica para Municipios en Mexico',
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
          h2={es ? 'Transforma la Seguridad Publica de Tu Municipio en Peru' : 'Transform Public Safety in Your Peruvian Municipality'}
          subtitle={es
            ? 'Conoce como KabatOne integra serenazgo, videovigilancia, despacho de emergencias y gestion de incidentes en una sola plataforma operativa.'
            : 'See how KabatOne unifies serenazgo GPS, surveillance video, emergency dispatch, and incident management into one operational platform.'}
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
