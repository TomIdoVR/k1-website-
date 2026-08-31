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
  return generatePageMetadata('publicSafetySoftwareUnitedStates', locale)
}

export default async function PublicSafetySoftwareUSAPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-united-states/`
    : `${baseUrl}/resources/public-safety-software-united-states/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Estados Unidos' : 'Public Safety Software — United States', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cuáles son los principales programas de financiamiento federal para tecnología de seguridad pública en EE.UU.?',
      answer: 'Los programas principales son: COPS Technology Grants (hasta $750,000 por agencia para CAD y software de seguridad), Byrne JAG (Edward Byrne Memorial Justice Assistance Grant — fondos flexibles para tecnología policial), UASI (Urban Area Security Initiative — para ciudades de alta densidad), y los grants de modernización NG911 de la NTIA. Las agencias también pueden acceder a fondos de la FEMA BRIC (Building Resilient Infrastructure) para centros de mando y comunicaciones de emergencia.',
    },
    {
      question: '¿Qué es NG911 y cómo afecta a los centros PSAP en EE.UU.?',
      answer: 'NG911 (Next Generation 911) es el mandato federal de la FCC para modernizar la infraestructura 911 de EE.UU. de sistemas analógicos a IP. Bajo NG911, los PSAPs reciben llamadas de voz, texto, video y datos de localización en tiempo real a través de redes ESInet (Emergency Services IP Networks). La transición a NG911 requiere actualizar CAD, equipos de consola y software de gestión de incidentes para procesar multimedia. KabatOne integra con ESInet y soporta intake de video de llamante vía protocolos i3 de NENA.',
    },
    {
      question: '¿Puede KabatOne integrarse con sistemas CAD existentes (PremierOne, Tyler CAD, CentralSquare) en EE.UU.?',
      answer: 'KabatOne se integra con los principales sistemas CAD vía APIs estándar (REST/JSON) y protocolos CAD-to-CAD de APCO. No reemplaza el CAD existente — agrega video analytics en tiempo real (K-Video), gestión del mapa operativo (K-Safety) y capacidades avanzadas de despacho (K-Dispatch) sobre la infraestructura CAD actual. Para agencias en proceso de modernización de CAD, K-Dispatch puede operar como CAD primario con soporte para flujos de trabajo APCO ANS 1.101.',
    },
    {
      question: '¿Cómo apoya KabatOne la interoperabilidad multiagencia requerida en EE.UU.?',
      answer: 'La interoperabilidad multiagencia en EE.UU. es mandatoria bajo el NIMS (National Incident Management System). KabatOne K-Safety provee un Common Operating Picture (COP) compartido entre policía, bomberos y EMS — con unidades de cada agencia visibles en el mismo mapa GIS en tiempo real. K-Dispatch soporta transferencia CAD-to-CAD entre PSAPs bajo protocolos APCO y NENA i3. La plataforma opera en nube privada, pública (AWS GovCloud) o híbrida, según los requisitos CJIS de cada agencia.',
    },
    {
      question: '¿Qué certificaciones de seguridad cumple KabatOne para agencias de seguridad pública en EE.UU.?',
      answer: 'KabatOne está diseñado para alinearse con los requerimientos de la CJIS Security Policy (Criminal Justice Information Services) del FBI, incluyendo autenticación multifactor (MFA), cifrado AES-256 en tránsito y en reposo, audit logging completo y controles de acceso basados en roles (RBAC). La plataforma puede desplegarse en AWS GovCloud o infraestructura on-premise para cumplir con requisitos de soberanía de datos de agencias federales y estatales.',
    },
    {
      question: '¿Cómo se adquiere KabatOne en EE.UU.? ¿Está disponible en el GSA Schedule?',
      answer: 'KabatOne está disponible para agencias públicas en EE.UU. a través de proceso de RFP/RFQ estándar. Para contratos de nivel federal o de grandes ciudades, KabatOne trabaja con integradores de sistemas que poseen GSA Schedule 70 (IT Solutions). Las agencias estatales y municipales pueden procurar la plataforma directamente o a través de contratos cooperativos como NASPO ValuePoint y Sourcewell. Contacta a nuestro equipo de ventas gubernamentales para CAGE Code, UEI SAM.gov y documentación de requisitos.',
    },
  ] : [
    {
      question: 'What are the main federal funding programs for public safety technology in the US?',
      answer: 'Key programs include: COPS Technology Grants (up to $750,000 per agency for CAD and safety software), Byrne JAG (Edward Byrne Memorial Justice Assistance Grant — flexible funding for law enforcement technology), UASI (Urban Area Security Initiative — for high-density cities), and NTIA NG911 modernization grants. Agencies can also access FEMA BRIC (Building Resilient Infrastructure and Communities) funds for command centers and emergency communications infrastructure.',
    },
    {
      question: 'What is NG911 and how does it affect PSAP operations in the US?',
      answer: 'NG911 (Next Generation 911) is the FCC\'s federal mandate to modernize US 911 infrastructure from analog to IP-based systems. Under NG911, PSAPs receive voice calls, text, video, and real-time location data over ESInet (Emergency Services IP Networks). The transition requires updating CAD, console equipment, and incident management software to handle multimedia intake. KabatOne integrates with ESInet and supports caller video intake via NENA i3 protocols.',
    },
    {
      question: 'Can KabatOne integrate with existing CAD systems (PremierOne, Tyler CAD, CentralSquare) in the US?',
      answer: 'KabatOne integrates with major CAD systems via standard APIs (REST/JSON) and APCO CAD-to-CAD protocols. It does not replace existing CAD — it adds real-time video analytics (K-Video), operational map management (K-Safety), and advanced dispatch capabilities (K-Dispatch) on top of current CAD infrastructure. For agencies modernizing their CAD, K-Dispatch can operate as the primary CAD with support for APCO ANS 1.101 workflows.',
    },
    {
      question: 'How does KabatOne support multi-agency interoperability required in the US?',
      answer: 'Multi-agency interoperability is mandated under the NIMS (National Incident Management System). KabatOne K-Safety provides a shared Common Operating Picture (COP) across law enforcement, fire, and EMS — with units from each agency visible on the same real-time GIS map. K-Dispatch supports CAD-to-CAD transfer between PSAPs under APCO and NENA i3 protocols. The platform runs on private cloud, public cloud (AWS GovCloud), or hybrid infrastructure depending on each agency\'s CJIS requirements.',
    },
    {
      question: 'What security certifications does KabatOne meet for US public safety agencies?',
      answer: 'KabatOne is designed to align with the FBI\'s CJIS Security Policy, including multi-factor authentication (MFA), AES-256 encryption at rest and in transit, full audit logging, and role-based access controls (RBAC). The platform can be deployed on AWS GovCloud or on-premise infrastructure to meet data sovereignty requirements of federal and state agencies.',
    },
    {
      question: 'How do US agencies procure KabatOne? Is it available on the GSA Schedule?',
      answer: 'KabatOne is available for US public agencies through standard RFP/RFQ processes. For federal-level or major city contracts, KabatOne works with system integrators holding GSA Schedule 70 (IT Solutions) contracts. State and municipal agencies can procure directly or through cooperative contracts such as NASPO ValuePoint and Sourcewell. Contact our government sales team for CAGE Code, UEI SAM.gov registration, and requirements documentation.',
    },
  ]

  const challenges = es ? [
    {
      icon: '📞',
      title: 'Modernización de PSAP y NG911',
      desc: 'Más de 5,800 PSAPs en EE.UU. operan con sistemas CAD legacy. El mandato federal NG911 requiere migración a infraestructura IP-multimedia para 2028. KabatOne K-Dispatch se integra con ESInet y soporta flujos NENA i3 sin reemplazar hardware de consola existente.',
    },
    {
      icon: '🗺️',
      title: 'Coordinación Multiagencia y COP Compartido',
      desc: 'Los incidentes mayores requieren coordinación entre policía, bomberos, EMS, guardias nacionales y agencias federales. El NIMS exige un Common Operating Picture unificado. K-Safety provee el COP en tiempo real con unidades de todas las agencias en un solo mapa GIS.',
    },
    {
      icon: '📹',
      title: 'Integración de Video: RTCCs y Cámaras Municipales',
      desc: 'Las ciudades de EE.UU. invierten en Real-Time Crime Centers con miles de cámaras. K-Video agrega cámaras ONVIF/RTSP de cualquier fabricante, añade analítica de IA (LPR, detección de anomalías, búsqueda forense) y conecta alertas directamente con el despacho CAD.',
    },
    {
      icon: '🔒',
      title: 'Cumplimiento CJIS y Seguridad de Datos',
      desc: 'Las agencias de seguridad pública en EE.UU. deben cumplir con la CJIS Security Policy del FBI. KabatOne opera en AWS GovCloud o infraestructura on-premise con MFA, cifrado AES-256 y audit logging completo para cumplir los requisitos de datos criminales y de emergencias.',
    },
  ] : [
    {
      icon: '📞',
      title: 'PSAP Modernization and NG911 Transition',
      desc: 'Over 5,800 PSAPs across the US operate on legacy CAD systems. The federal NG911 mandate requires migration to IP-multimedia infrastructure by 2028. KabatOne K-Dispatch integrates with ESInet and supports NENA i3 workflows without replacing existing console hardware.',
    },
    {
      icon: '🗺️',
      title: 'Multi-Agency Coordination and Shared COP',
      desc: 'Major incidents require coordination across law enforcement, fire, EMS, National Guard, and federal agencies. NIMS mandates a unified Common Operating Picture. K-Safety delivers a real-time COP with units from all agencies on a single GIS map — with each agency maintaining its own workflow.',
    },
    {
      icon: '📹',
      title: 'Video Integration: RTCCs and Municipal Cameras',
      desc: 'US cities invest heavily in Real-Time Crime Centers with thousands of surveillance cameras. K-Video aggregates ONVIF/RTSP cameras from any manufacturer, adds AI analytics (LPR, anomaly detection, forensic search), and routes alerts directly into CAD dispatch.',
    },
    {
      icon: '🔒',
      title: 'CJIS Compliance and Data Security',
      desc: 'US public safety agencies must comply with the FBI\'s CJIS Security Policy. KabatOne runs on AWS GovCloud or on-premise infrastructure with MFA, AES-256 encryption, and full audit logging — meeting criminal and emergency data security requirements.',
    },
  ]

  const stats = [
    { value: '5,800+', label: es ? 'PSAPs en EE.UU.' : 'PSAPs across the US' },
    { value: '240M+', label: es ? 'Llamadas 911 / Año' : '911 Calls / Year' },
    { value: '18,000+', label: es ? 'Agencias de Seguridad Pública' : 'Law Enforcement Agencies' },
    { value: '$2.5B+', label: es ? 'Inversión Federal Anual' : 'Annual Federal Tech Investment' },
  ]

  const products = [
    {
      name: 'K-Dispatch',
      href: '/k-dispatch',
      desc: es
        ? 'Sistema CAD con despacho 911, soporte NENA i3 y coordinación multiagencia en tiempo real.'
        : 'CAD dispatch system with 911 intake, NENA i3 support, and real-time multi-agency coordination.',
    },
    {
      name: 'K-Safety',
      href: '/k-safety',
      desc: es
        ? 'Common Operating Picture (COP) GIS que unifica unidades de policía, bomberos y EMS en un solo mapa.'
        : 'GIS Common Operating Picture (COP) unifying law enforcement, fire, and EMS units on one operational map.',
    },
    {
      name: 'K-Video',
      href: '/k-video',
      desc: es
        ? 'VMS con analítica de IA que conecta cámaras municipales con el despacho CAD de forma directa.'
        : 'AI-powered VMS connecting municipal cameras directly to CAD dispatch for faster threat response.',
    },
  ]

  const articleHeadline = es
    ? 'Software de Seguridad Pública para Ciudades de EE.UU.: Guía de Centros de Mando y 911'
    : 'Public Safety Software for US Cities: Command Centers, 911 & RTCC Guide'
  const articleDescription = es
    ? 'Guía de tecnología de seguridad pública para agencias en EE.UU.: NG911, CAD, RTCC y plataformas unificadas para PSAPs, departamentos de policía y centros de mando municipales.'
    : 'Technology guide for US public safety agencies: NG911, CAD dispatch, RTCC, and unified platforms for PSAPs, law enforcement, and municipal command centers.'

  return (
    <>
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(articleHeadline, articleDescription, pageUrl, '2026-05-18')) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />

      <main style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '64px 32px 56px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

            {/* Breadcrumb */}
            <nav style={{ fontSize: '12px', color: 'var(--dim)', marginBottom: '32px', display: 'flex', gap: '6px', alignItems: 'center' }}>
              <Link href="/" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link>
              <span>/</span>
              <Link href="/resources" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Recursos' : 'Resources'}</Link>
              <span>/</span>
              <span style={{ color: 'var(--white)' }}>{es ? 'EE.UU.' : 'United States'}</span>
            </nav>

            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, background: 'rgba(59,130,246,0.1)', padding: '4px 12px', borderRadius: '4px' }}>
                {es ? 'Guía de Mercado' : 'Market Guide'}
              </span>
              <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '4px 12px', borderRadius: '4px' }}>
                🇺🇸 {es ? 'Estados Unidos' : 'United States'}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 60px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '24px' }}>
              {es
                ? 'Software de Seguridad Pública para Ciudades de EE.UU.'
                : 'Public Safety Software for US Cities and Agencies'}
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--dim)', lineHeight: 1.7, maxWidth: '740px', marginBottom: '32px' }}>
              {es
                ? 'Plataforma unificada para PSAPs, departamentos de policía y centros de mando municipales en EE.UU. — despacho CAD con soporte NG911, video analytics para RTCCs y GIS operativo para coordinación multiagencia bajo NIMS.'
                : 'Unified platform for US PSAPs, law enforcement agencies, and municipal command centers — CAD dispatch with NG911 support, video analytics for Real-Time Crime Centers, and operational GIS for multi-agency coordination under NIMS.'}
            </p>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }} className="stats-grid">
              {stats.map((s, i) => (
                <div key={i} style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.18)', borderRadius: '10px', padding: '20px 16px', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', color: '#60a5fa', marginBottom: '4px' }}>{s.value}</div>
                  <div style={{ fontSize: '11px', color: 'var(--dim)', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── US PUBLIC SAFETY LANDSCAPE ── */}
        <section style={{ padding: '64px 32px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', marginBottom: '24px' }}>
              {es ? 'La Estructura de Seguridad Pública en EE.UU.' : 'The US Public Safety Technology Landscape'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
              <div>
                <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8, marginBottom: '20px' }}>
                  {es
                    ? 'EE.UU. opera más de 5,800 PSAPs (Public Safety Answering Points) que reciben las 240 millones de llamadas al 911 anuales. La respuesta a emergencias involucra tres niveles: federal (DHS, FEMA, FBI), estatal (State Police, EMAs) y municipal (PD, Fire, EMS). Cada nivel requiere tecnología compatible con los demás bajo el marco NIMS/ICS.'
                    : 'The US operates over 5,800 PSAPs (Public Safety Answering Points) receiving 240+ million 911 calls annually. Emergency response involves three levels: federal (DHS, FEMA, FBI), state (State Police, EMAs), and municipal (PD, Fire, EMS). Each level requires technology compatible with the others under the NIMS/ICS framework.'}
                </p>
                <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8 }}>
                  {es
                    ? 'El mercado de software de seguridad pública en EE.UU. está dominado por proveedores legacy: Motorola PremierOne, Tyler Technologies, CentralSquare y Hexagon Safety. La transición a NG911, la adopción de RTCCs (Real-Time Crime Centers) y la demanda de analítica de video IA están creando demanda de plataformas más modernas e integradas.'
                    : 'The US public safety software market is dominated by legacy providers: Motorola PremierOne, Tyler Technologies, CentralSquare, and Hexagon Safety. The NG911 transition, RTCC adoption, and AI video analytics demand are creating openings for more modern, integrated platforms.'}
                </p>
              </div>
              <div>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px' }}>
                  <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: ACCENT, marginBottom: '16px' }}>
                    {es ? 'Tecnología Clave del Ecosistema EE.UU.' : 'Key US Ecosystem Technology'}
                  </p>
                  {[
                    { label: 'CAD / 911 Dispatch', desc: es ? 'PremierOne, Tyler CAD, CentralSquare, Hexagon' : 'PremierOne, Tyler CAD, CentralSquare, Hexagon' },
                    { label: 'NG911 / ESInet', desc: es ? 'NENA i3, FirstNet, AT&T, Intrado' : 'NENA i3, FirstNet, AT&T, Intrado' },
                    { label: 'RTCC / Video Analytics', desc: es ? 'Fusus, Axon, Avigilon, Motorola Ava' : 'Fusus, Axon, Avigilon, Motorola Ava' },
                    { label: 'GIS / Mapping', desc: es ? 'Esri ArcGIS, Google Maps Platform' : 'Esri ArcGIS, Google Maps Platform' },
                    { label: 'Body Cameras / Evidence', desc: es ? 'Axon, Motorola, Getac' : 'Axon, Motorola, Getac' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', padding: '10px 0', borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--white)', minWidth: '160px', flexShrink: 0 }}>{item.label}</span>
                      <span style={{ fontSize: '13px', color: 'var(--dim)' }}>{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHALLENGES ── */}
        <section style={{ padding: '64px 32px', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', marginBottom: '8px' }}>
              {es ? '4 Desafíos Tecnológicos para Agencias de EE.UU.' : '4 Technology Challenges for US Public Safety Agencies'}
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--dim)', marginBottom: '40px', lineHeight: 1.7 }}>
              {es
                ? 'Las agencias de EE.UU. enfrentan presiones únicas: mandatos federales de NG911, transición de CAD legacy, requisitos CJIS y presupuestos que compiten con décadas de infraestructura desactualizada.'
                : 'US agencies face unique pressures: federal NG911 mandates, legacy CAD transitions, CJIS requirements, and budgets competing with decades of outdated infrastructure.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {challenges.map((c, i) => (
                <div key={i} style={{ background: '#0b1628', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px' }}>
                  <div style={{ fontSize: '28px', marginBottom: '12px' }}>{c.icon}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '10px', color: 'var(--white)' }}>{c.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FUNDING LANDSCAPE ── */}
        <section style={{ padding: '64px 32px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', marginBottom: '24px' }}>
              {es ? 'Financiamiento Federal para Tecnología de Seguridad Pública' : 'Federal Funding for Public Safety Technology'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8, maxWidth: '780px', marginBottom: '32px' }}>
              {es
                ? 'Las agencias de EE.UU. tienen acceso a múltiples fuentes de financiamiento federal para modernizar tecnología de seguridad pública. Los tres fondos más relevantes para plataformas de CAD, video analytics y gestión de incidentes son:'
                : 'US agencies have access to multiple federal funding streams to modernize public safety technology. The three most relevant for CAD platforms, video analytics, and incident management are:'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {(es ? [
                { name: 'COPS Technology', amount: 'Hasta $750K/agencia', desc: 'Grants del DOJ para tecnología policial — CAD, software de gestión de incidentes, cámaras corporales y video analytics para reducción de crimen.' },
                { name: 'Byrne JAG', amount: '$350M+ / año', desc: 'Fondos flexibles del DOJ para tecnología de aplicación de la ley. Cubre CAD, RTCC, software de gestión de evidencias y sistemas de comunicación.' },
                { name: 'UASI / BRIC', amount: 'Varía por ciudad', desc: 'FEMA Homeland Security grants para centros de mando, comunicaciones de emergencia e infraestructura de seguridad para áreas urbanas de alto riesgo.' },
              ] : [
                { name: 'COPS Technology', amount: 'Up to $750K / agency', desc: 'DOJ grants for law enforcement technology — CAD, incident management software, body cameras, and video analytics for crime reduction.' },
                { name: 'Byrne JAG', amount: '$350M+ / year', desc: 'Flexible DOJ funding for law enforcement technology. Covers CAD, RTCC infrastructure, evidence management, and communications systems.' },
                { name: 'UASI / BRIC', amount: 'Varies by city', desc: 'FEMA Homeland Security grants for command centers, emergency communications, and security infrastructure in high-risk urban areas.' },
              ]).map((grant, i) => (
                <div key={i} style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.18)', borderRadius: '10px', padding: '24px' }}>
                  <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#60a5fa', marginBottom: '8px' }}>{grant.name}</p>
                  <p style={{ fontSize: '22px', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--white)', marginBottom: '10px' }}>{grant.amount}</p>
                  <p style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.6 }}>{grant.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section style={{ padding: '64px 32px', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', marginBottom: '8px' }}>
              {es ? 'La Plataforma KabatOne para Agencias de EE.UU.' : 'KabatOne Platform for US Agencies'}
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--dim)', marginBottom: '32px', lineHeight: 1.7 }}>
              {es
                ? 'Tres productos integrados nativamente — sin middleware de terceros — que cubren video, despacho y operaciones de campo para PSAPs y departamentos de policía en EE.UU.'
                : 'Three natively integrated products — no third-party middleware — covering video, dispatch, and field operations for US PSAPs and law enforcement agencies.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {products.map((p, i) => (
                <Link key={i} href={p.href} style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: '#0b1628', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px', textDecoration: 'none', color: 'inherit' }}>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#60a5fa' }}>{p.name}</span>
                  <span style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.65 }}>{p.desc}</span>
                  <span style={{ fontSize: '13px', color: ACCENT, marginTop: 'auto' }}>{es ? 'Ver producto →' : 'View product →'}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section style={{ padding: '64px 32px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', marginBottom: '32px' }}>
              {es ? 'Preguntas Frecuentes — EE.UU.' : 'Frequently Asked Questions — US Market'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--white)', marginBottom: '10px', lineHeight: 1.5 }}>{faq.question}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.75 }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--dim)', marginBottom: '16px' }}>
              {es ? 'Recursos Relacionados' : 'Related Resources'}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[
                { href: '/resources/public-safety-software-canada', label: es ? 'Software Seguridad Pública Canadá' : 'Public Safety Software — Canada' },
                { href: '/resources/public-safety-software-united-kingdom', label: es ? 'Software Seguridad Pública Reino Unido' : 'Public Safety Software — United Kingdom' },
                { href: '/resources/public-safety-software-australia', label: es ? 'Software Seguridad Pública Australia' : 'Public Safety Software — Australia' },
                { href: '/resources/public-safety-software-middle-east', label: es ? 'Software Seguridad Pública Medio Oriente' : 'Public Safety Software — Middle East' },
                { href: '/resources/best-cad-dispatch-software', label: es ? 'Mejor Software CAD 2026' : 'Best CAD Dispatch Software 2026' },
                { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Centro de Crimen en Tiempo Real' : 'Real-Time Crime Center' },
                { href: '/resources/what-is-a-psap', label: es ? '¿Qué es un PSAP?' : 'What Is a PSAP?' },
                { href: '/resources/911-call-center-software-guide', label: es ? 'Software Centro 911' : '911 Call Center Software' },
                { href: '/resources/cctv-video-analytics', label: es ? 'Analítica de Video con IA' : 'AI Video Analytics' },
                { href: '/resources/what-is-situational-awareness-software', label: es ? 'Conciencia Situacional' : 'Situational Awareness' },
                { href: '/resources/what-is-cad-dispatch-software', label: es ? 'Software CAD de Despacho' : 'CAD Dispatch Software' },
              ].map((r) => (
                <Link key={r.href} href={r.href} style={{ fontSize: '12px', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '6px 12px', textDecoration: 'none' }}>
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          es={es}
          h2={es ? 'Moderniza tu Centro de Seguridad Pública en EE.UU.' : 'Modernize Your US Public Safety Operations'}
          subtitle={es
            ? 'KabatOne integra CAD, video y GIS en una sola plataforma. Agenda una demo con nuestro equipo de ventas gubernamentales.'
            : 'KabatOne unifies CAD, video, and GIS in one platform built for public safety agencies. Schedule a demo with our government sales team.'}
          cta1={es ? 'Solicitar Demo' : 'Book a Demo'}
          cta2={es ? 'Contactar Ventas Gov.' : 'Contact Gov. Sales'}
        />

      </main>

      <Footer es={es} />

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
