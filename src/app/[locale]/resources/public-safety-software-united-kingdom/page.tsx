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
  return generatePageMetadata('publicSafetySoftwareUnitedKingdom', locale)
}

export default async function PublicSafetySoftwareUnitedKingdomPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-united-kingdom/`
    : `${baseUrl}/resources/public-safety-software-united-kingdom/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Reino Unido' : 'Public Safety Software — United Kingdom', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está estructurado el sistema de seguridad pública en el Reino Unido?',
      answer: 'El Reino Unido opera 43 fuerzas de policía en Inglaterra y Gales, más la Policía de Escocia, el Servicio de Policía de Irlanda del Norte y la Policía de Transporte Británico. Los servicios de emergencias incluyen los tres blue-light services: policía, brigadas de bomberos y servicios de ambulancia del NHS. La coordinación se realiza a través de salas de control (control rooms) regionales que manejan las llamadas 999. La supervisión nacional está a cargo del NPCC (Consejo Nacional de Jefes de Policía) y del Ministerio del Interior (Home Office).',
    },
    {
      question: '¿Qué es NG112/NG999 y cómo afecta a las salas de control en el Reino Unido?',
      answer: 'La Próxima Generación 999 (NG999/NG112) es el programa del gobierno británico para modernizar la infraestructura de comunicaciones de emergencias de analógico a IP. El programa incluye llamadas de voz en banda ancha, mensajes de texto de emergencia, video llamadas y datos de localización mejorados. El software CAD de las salas de control debe actualizarse para manejar llamadas multimedia basadas en IP y nuevos protocolos de enrutamiento. El Ministerio del Interior supervisa la transición a través del programa Emergency Services Mobile Communications Programme (ESMCP) y ESN (Emergency Services Network).',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en el Reino Unido?',
      answer: 'Las fuerzas policiales y autoridades locales en el Reino Unido adquieren tecnología a través de varios mecanismos: el Crown Commercial Service (CCS) con marcos de contratos como G-Cloud y Digital Marketplace, licitaciones OJEU (ahora Find a Tender Service post-Brexit), acuerdos de asociación regional entre fuerzas adyacentes, y en algunos casos a través de Blue Light Commercial. Los proyectos mayores requieren evaluaciones de impacto de protección de datos (DPIA) bajo el UK GDPR antes de la selección de proveedor.',
    },
    {
      question: '¿Cuáles son los requisitos de protección de datos para software de vigilancia en el Reino Unido?',
      answer: 'El software de vigilancia en el Reino Unido debe cumplir el UK GDPR (UK General Data Protection Regulation), la Ley de Protección de Datos 2018, el Código de Práctica del Comisionado de Cámaras de Vigilancia (Surveillance Camera Commissioner) y, para fuerzas del orden, la Parte 3 de la Ley de Protección de Datos 2018. Las organizaciones que gestionan datos biométricos o video de vigilancia deben nombrar un Data Protection Officer (DPO), realizar evaluaciones DPIA y mantener registros de actividades de procesamiento. KabatOne admite configuraciones de soberanía de datos para despliegues on-premises o en la nube UK.',
    },
    {
      question: '¿Cómo se gestiona la seguridad en grandes eventos en el Reino Unido?',
      answer: 'Los grandes eventos en el Reino Unido — el Carnaval de Notting Hill, Wimbledon, partidos de la Premier League, el Desfile del Trooping the Colour — requieren coordinación multiagencia entre policía, autoridades locales, servicios de ambulancia y servicios de seguridad privada. Las operaciones se gestionan desde salas de control conjuntas (Gold/Silver/Bronze command structure) con análisis de video en vivo, comunicaciones de radio y despacho CAD integrados. KabatOne K-Safety soporta el mando conjunto y permite a los comandantes de Oro/Plata/Bronce ver el estado operativo en un mapa compartido en tiempo real.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para fuerzas policiales y salas de control CCTV en el Reino Unido?',
      answer: 'KabatOne integra las funciones que las salas de control del Reino Unido gestionan en sistemas separados: despacho CAD (K-Dispatch), gestión de video y analítica de IA (K-Video) y conciencia situacional GIS (K-Safety) en una sola plataforma. La plataforma es agnóstica al fabricante de cámaras — compatible con ONVIF, RTSP y los principales fabricantes de CCTV usados en el Reino Unido — y admite despliegue on-premises o en nubes privadas para cumplir los requisitos UK GDPR y del Comisionado de Cámaras de Vigilancia. Puede solicitar una demostración adaptada al contexto de mando estructurado Oro/Plata/Bronce.',
    },
  ] : [
    {
      question: 'How is UK public safety technology structured across police forces?',
      answer: 'The United Kingdom operates 43 police forces in England and Wales, plus Police Scotland, the Police Service of Northern Ireland, and British Transport Police. Emergency services include the three blue-light services: police, fire and rescue services, and NHS ambulance services. Coordination happens through regional control rooms handling 999 calls. National oversight comes from the NPCC (National Police Chiefs\' Council) and the Home Office.',
    },
    {
      question: 'What is NG112/NG999 and how does it affect UK control rooms?',
      answer: 'Next Generation 999 (NG999/NG112) is the UK government programme to modernise emergency communications infrastructure from analogue to IP. The programme includes broadband voice calls, emergency text messaging, video calling, and enhanced location data. CAD software in control rooms must be upgraded to handle IP-based multimedia calls and new routing protocols. The Home Office oversees the transition through the Emergency Services Mobile Communications Programme (ESMCP) and Emergency Services Network (ESN).',
    },
    {
      question: 'How do UK police forces and councils procure public safety software?',
      answer: 'Police forces and local authorities in the UK procure technology through several mechanisms: Crown Commercial Service (CCS) frameworks such as G-Cloud and Digital Marketplace, post-Brexit Find a Tender Service procurement, regional collaboration agreements between neighbouring forces, and in some cases through Blue Light Commercial. Larger projects require Data Protection Impact Assessments (DPIA) under UK GDPR before vendor selection.',
    },
    {
      question: 'What are the UK data protection requirements for surveillance software?',
      answer: 'Surveillance software in the UK must comply with the UK GDPR, the Data Protection Act 2018, the Surveillance Camera Commissioner\'s Code of Practice, and for law enforcement, Part 3 of the Data Protection Act 2018. Organisations handling biometric data or surveillance video must appoint a Data Protection Officer (DPO), conduct DPIAs, and maintain records of processing activities. KabatOne supports data sovereignty configurations for on-premises or UK cloud deployments.',
    },
    {
      question: 'How is major event security managed in the UK?',
      answer: 'Major events in the UK — Notting Hill Carnival, Wimbledon, Premier League matches, the Trooping the Colour parade — require multi-agency coordination between police, local authorities, ambulance services, and private security. Operations are managed from joint control rooms using a Gold/Silver/Bronze command structure with live video analysis, radio communications, and integrated CAD dispatch. KabatOne K-Safety supports the joint command structure, allowing Gold/Silver/Bronze commanders to view operational status on a shared real-time map.',
    },
    {
      question: 'Why is KabatOne suited for UK police forces and local authority CCTV control rooms?',
      answer: 'KabatOne integrates the functions UK control rooms manage across separate systems — CAD dispatch (K-Dispatch), video management and AI analytics (K-Video), and GIS situational awareness (K-Safety) — into a single platform. The platform is camera-manufacturer agnostic, compatible with ONVIF, RTSP, and major CCTV brands used across UK, and supports on-premises or private cloud deployment to meet UK GDPR and Surveillance Camera Commissioner requirements. Request a demo tailored to the Gold/Silver/Bronze structured command context.',
    },
  ]

  const sectionStyle: React.CSSProperties = { borderTop: '1px solid var(--border)', padding: '72px 32px' }
  const containerStyle: React.CSSProperties = { maxWidth: '860px', margin: '0 auto' }
  const h2Style: React.CSSProperties = {
    fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif',
    textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '20px', marginTop: '0',
  }
  const pStyle: React.CSSProperties = { fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.8, marginBottom: '20px' }

  const challenges = es ? [
    {
      title: 'Digitalización Fragmentada: 43+ Fuerzas Independientes',
      desc: 'Cada fuerza policial en Inglaterra y Gales opera su propia infraestructura tecnológica con diferentes sistemas CAD, VMS y de radio. Los proyectos de colaboración regional (como los consorcios de policías del norte de Inglaterra) requieren interoperabilidad entre plataformas que históricamente no han sido diseñadas para trabajar juntas.',
      color: '#3b82f6',
    },
    {
      title: 'Transición NG999/NG112 e ESN',
      desc: 'La modernización de las comunicaciones de emergencias a IP (NG999) y la nueva red ESN para los servicios de emergencias (sustituyendo TETRA/Airwave) requieren que las salas de control actualicen su software CAD para manejar llamadas multimedia, datos de localización mejorados y comunicaciones LTE.',
      color: '#06b6d4',
    },
    {
      title: 'UK GDPR y Código del Comisionado de Cámaras',
      desc: 'El Reino Unido tiene uno de los marcos de privacidad de videovigilancia más estrictos del mundo. El Código de Práctica del Comisionado de Cámaras de Vigilancia, el UK GDPR y la DPA 2018 Parte 3 imponen requisitos de DPIA, gestión de retención de datos y restricciones sobre reconocimiento facial en espacios públicos.',
      color: '#f59e0b',
    },
    {
      title: 'Grandes Eventos y Seguridad Antiterrorista',
      desc: 'El Reino Unido gestiona eventos masivos de alta seguridad (grandes finales de la Premier League, Carnaval de Notting Hill, desfiles reales) bajo la estrategia CONTEST. La coordinación Oro/Plata/Bronce entre múltiples agencias requiere un mapa operativo compartido en tiempo real, no llamadas de radio entre salas de control separadas.',
      color: '#ef4444',
    },
  ] : [
    {
      title: 'Fragmented Digitalisation: 43+ Independent Forces',
      desc: 'Each police force in England and Wales operates its own technology infrastructure with different CAD, VMS, and radio systems. Regional collaboration projects (such as northern England police consortia) require interoperability between platforms historically not designed to work together.',
      color: '#3b82f6',
    },
    {
      title: 'NG999/NG112 and ESN Transition',
      desc: 'Modernising emergency communications to IP (NG999) and the new ESN network for emergency services (replacing TETRA/Airwave) require control rooms to upgrade CAD software to handle multimedia calls, enhanced location data, and LTE communications.',
      color: '#06b6d4',
    },
    {
      title: 'UK GDPR and Surveillance Camera Commissioner Code',
      desc: 'The UK has one of the world\'s strictest surveillance privacy frameworks. The Surveillance Camera Commissioner\'s Code of Practice, UK GDPR, and DPA 2018 Part 3 impose DPIA requirements, data retention management, and restrictions on facial recognition in public spaces.',
      color: '#f59e0b',
    },
    {
      title: 'Major Events and Counter-Terrorism Security',
      desc: 'The UK manages high-security mass events (Premier League finals, Notting Hill Carnival, royal parades) under the CONTEST strategy. Gold/Silver/Bronze coordination across multiple agencies requires a shared real-time operational map, not radio calls between separate control rooms.',
      color: '#ef4444',
    },
  ]

  const keyProjects = es ? [
    { name: 'Metropolitan Police / BTP — Londres', detail: 'La Met y British Transport Police gestionan 13,000+ oficiales y una red de CCTV que supera las 900,000 cámaras registradas en Londres. Las salas de control de la Met procesan miles de incidentes diarios con video, despacho y coordinación multiagencia.' },
    { name: 'West Midlands Police — Safe City Birmingham', detail: 'West Midlands Police opera uno de los programas de Safe City más avanzados del Reino Unido, integrando ANPR (reconocimiento automático de placas), CCTV municipal y sistemas de despacho CAD para cubrir una región de 2.9 millones de habitantes.' },
    { name: 'Greater Manchester Police (GMP)', detail: 'GMP gestiona la seguridad de una de las regiones metropolitanas más densas de Inglaterra, incluyendo grandes eventos en el Etihad Stadium y el Old Trafford, con coordinación entre policía, bomberos y NHS ambulance.' },
    { name: 'National Counter Terrorism Policing Network (CTPN)', detail: 'La red CTPN coordina operaciones antiterroristas entre el MI5, la Met y fuerzas regionales, requiriendo salas de control capaces de manejar inteligencia en tiempo real, video analítico y coordinación multiagencia bajo la estrategia CONTEST.' },
  ] : [
    { name: 'Metropolitan Police / BTP — London', detail: 'The Met and British Transport Police manage 13,000+ officers and a CCTV network exceeding 900,000 registered cameras in London. Met control rooms process thousands of daily incidents with video, dispatch, and multi-agency coordination.' },
    { name: 'West Midlands Police — Safe City Birmingham', detail: 'West Midlands Police operates one of the UK\'s most advanced Safe City programmes, integrating ANPR (automatic number plate recognition), municipal CCTV, and CAD dispatch systems to cover a region of 2.9 million residents.' },
    { name: 'Greater Manchester Police (GMP)', detail: 'GMP manages security across one of England\'s densest metropolitan regions, including major events at the Etihad Stadium and Old Trafford, with coordination between police, fire services, and NHS ambulance.' },
    { name: 'National Counter Terrorism Policing Network (CTPN)', detail: 'The CTPN coordinates counter-terrorism operations between MI5, the Met, and regional forces, requiring control rooms capable of handling real-time intelligence, video analytics, and multi-agency coordination under the CONTEST strategy.' },
  ]

  return (
    <>
      <Nav />

      {/* ── Structured Data ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        articleSchema(
          es ? 'Software de Seguridad Pública para el Reino Unido: Salas de Control, 999 y Safe City' : 'Public Safety Software for the United Kingdom: Control Rooms, 999 & Safe City',
          es ? 'Plataforma unificada para fuerzas policiales del Reino Unido, salas de control 999 y programas Safe City — despacho CAD con soporte NG999, analítica de video y cumplimiento UK GDPR.' : 'Unified platform for UK police forces, 999 control rooms, and Safe City programmes — CAD dispatch with NG999 support, video analytics, and UK GDPR compliance.',
          pageUrl,
          '2026-05-18'
        )
      ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── BREADCRUMB ── */}
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '24px 32px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '12px', color: 'var(--muted)', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/resources" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Recursos' : 'Resources'}</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>{es ? 'Software de Seguridad Pública — Reino Unido' : 'Public Safety Software — United Kingdom'}</span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Guía de Mercado' : 'Market Guide'}
            </p>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '24px' }}>
              {es
                ? 'Software de Seguridad Pública para el Reino Unido: Salas de Control, 999 y Programas Safe City'
                : 'Public Safety Software for the United Kingdom: Control Rooms, 999 & Safe City Programmes'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'El Reino Unido opera 43+ fuerzas policiales independientes, una de las redes de CCTV más densas del mundo y un marco de privacidad de videovigilancia entre los más estrictos. KabatOne unifica el despacho 999, la gestión de video con analítica de IA y la conciencia situacional en una sola plataforma — con soporte para cumplimiento UK GDPR y el Código del Comisionado de Cámaras de Vigilancia.'
                : 'The United Kingdom operates 43+ independent police forces, one of the world\'s densest CCTV networks, and one of the strictest surveillance privacy frameworks globally. KabatOne unifies 999 dispatch, video management with AI analytics, and situational awareness in a single platform — with UK GDPR compliance and Surveillance Camera Commissioner Code support.'}
            </p>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '40px 32px', background: 'rgba(59,130,246,0.04)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
            {(es ? [
              { value: '43+', label: 'Fuerzas policiales en Inglaterra y Gales' },
              { value: '47M+', label: 'Llamadas al 999 por año' },
              { value: '6M+', label: 'Cámaras CCTV estimadas en el Reino Unido' },
              { value: '3', label: 'Blue-light services coordinados (Policía, Bomberos, NHS)' },
            ] : [
              { value: '43+', label: 'Police forces in England & Wales' },
              { value: '47M+', label: '999 calls per year' },
              { value: '6M+', label: 'Estimated CCTV cameras in the UK' },
              { value: '3', label: 'Blue-light services coordinated (Police, Fire, NHS)' },
            ]).map((stat, i) => (
              <div key={i}>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: ACCENT, marginBottom: '6px', marginTop: 0 }}>{stat.value}</p>
                <p style={{ fontSize: '12px', fontWeight: 400, color: 'var(--muted)', lineHeight: 1.4, marginBottom: 0 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 1: Key Projects ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Operaciones de Seguridad Pública Clave en el Reino Unido' : 'Key UK Public Safety Operations'}</h2>
            <p style={pStyle}>
              {es
                ? 'Las principales fuerzas policiales y programas Safe City del Reino Unido están modernizando sus salas de control para manejar incidentes complejos, grandes eventos y operaciones antiterroristas desde un entorno unificado.'
                : 'The UK\'s leading police forces and Safe City programmes are modernising their control rooms to handle complex incidents, major events, and counter-terrorism operations from a unified environment.'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {keyProjects.map((project, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '10px', border: '1px solid var(--border)', padding: '20px 24px' }}>
                  <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.03em', color: 'var(--white)', marginBottom: '8px', marginTop: 0 }}>{project.name}</p>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: 0 }}>{project.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 2: Challenges ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Retos Operativos para las Salas de Control del Reino Unido' : 'Operational Challenges for UK Control Rooms'}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
              {challenges.map((c, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: `1px solid ${c.color}30`, padding: '24px' }}>
                  <div style={{ width: '32px', height: '3px', background: c.color, borderRadius: '2px', marginBottom: '14px' }} />
                  <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--white)', marginBottom: '10px', marginTop: 0 }}>{c.title}</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: How KabatOne Works for UK ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Cómo KabatOne Responde a los Requisitos del Reino Unido' : 'How KabatOne Addresses UK Requirements'}</h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne está diseñado para operar en entornos donde múltiples agencias independientes deben coordinarse en tiempo real desde salas de control que históricamente han operado sistemas separados.'
                : 'KabatOne is designed to operate in environments where multiple independent agencies must coordinate in real time from control rooms that have historically run separate systems.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {(es ? [
                { title: 'Despacho 999 Multiagencia', desc: 'K-Dispatch maneja llamadas de voz y multimedia de emergencias con triage automático, priorización de incidentes y coordinación simultánea entre policía, bomberos y NHS ambulance desde una sola interfaz.' },
                { title: 'CCTV y Analítica de Video con IA', desc: 'K-Video integra cámaras de cualquier fabricante (ONVIF, RTSP, Axis, Hikvision, Bosch) con analítica de IA en tiempo real — ANPR/LPR, detección de comportamiento, búsqueda forense — cumpliendo el Código del Comisionado de Cámaras de Vigilancia.' },
                { title: 'Comando Estructurado Oro/Plata/Bronce', desc: 'K-Safety proporciona el mapa operativo GIS compartido que permite a los comandantes de Oro/Plata/Bronce ver incidentes, posiciones de unidades y alertas en tiempo real — sin depender de llamadas de radio entre salas de control.' },
                { title: 'Conformidad UK GDPR y Soberanía de Datos', desc: 'Despliegue on-premises o en nube privada del Reino Unido. Configuración de retención de datos conforme al UK GDPR y DPA 2018. Soporte para DPIA y registro de actividades de procesamiento requerido por el ICO.' },
              ] : [
                { title: 'Multi-Agency 999 Dispatch', desc: 'K-Dispatch handles voice and multimedia emergency calls with automatic triage, incident prioritisation, and simultaneous coordination across police, fire, and NHS ambulance from a single interface.' },
                { title: 'CCTV and AI Video Analytics', desc: 'K-Video integrates cameras from any manufacturer (ONVIF, RTSP, Axis, Hikvision, Bosch) with real-time AI analytics — ANPR/LPR, behavioural detection, forensic search — meeting the Surveillance Camera Commissioner\'s Code of Practice.' },
                { title: 'Gold/Silver/Bronze Structured Command', desc: 'K-Safety provides the shared GIS operational map allowing Gold/Silver/Bronze commanders to see incidents, unit positions, and alerts in real time — without relying on radio calls between separate control rooms.' },
                { title: 'UK GDPR Compliance and Data Sovereignty', desc: 'On-premises or UK private cloud deployment. Data retention configuration compliant with UK GDPR and DPA 2018. Support for DPIAs and processing activity records required by the ICO.' },
              ]).map((item, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px' }}>
                  <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.03em', color: 'var(--white)', marginBottom: '10px', marginTop: 0 }}>{item.title}</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: Products ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Plataforma KabatOne' : 'KabatOne Platform'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>
              {es ? 'K-Dispatch · K-Video · K-Safety' : 'K-Dispatch · K-Video · K-Safety'}
            </h2>
            <p style={{ ...pStyle, marginBottom: '28px' }}>
              {es
                ? 'Las salas de control del Reino Unido pueden desplegar K-Dispatch para gestión de llamadas 999 y despacho CAD, K-Video para gestión de CCTV con analítica de IA y K-Safety para el mapa operativo GIS compartido — todo en una sola plataforma que elimina la necesidad de sistemas separados de diferentes proveedores.'
                : 'UK control rooms can deploy K-Dispatch for 999 call handling and CAD dispatch, K-Video for CCTV management with AI analytics, and K-Safety for the shared GIS operational map — all on a single platform that eliminates the need for separate systems from different vendors.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD Dispatch' },
                { href: '/k-video', label: 'K-Video', desc: es ? 'Gestión de CCTV' : 'CCTV Management' },
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'Conciencia Situacional' : 'Situational Awareness' },
              ].map((p) => (
                <Link key={p.href} href={p.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '6px', padding: '10px 16px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: ACCENT }} />
                  {p.label}
                  <span style={{ color: 'var(--muted)', fontSize: '10px', letterSpacing: '0.1em' }}>{p.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '32px' }}>
              {es ? 'Software de Seguridad Pública en el Reino Unido' : 'Public Safety Software in the United Kingdom'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px 28px' }}>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '17px', letterSpacing: '0.02em', textTransform: 'uppercase', marginBottom: '10px', marginTop: '0', color: 'var(--white)' }}>{faq.question}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED RESOURCES ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, marginBottom: '20px' }}>
              {es ? 'Recursos Relacionados' : 'Related Resources'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/resources/public-safety-software-united-states', en: 'Public Safety Software for the United States', es: 'Software de Seguridad Pública para EE.UU.' },
                { href: '/resources/public-safety-software-canada', en: 'Public Safety Software for Canada', es: 'Software de Seguridad Pública para Canadá' },
                { href: '/resources/public-safety-software-middle-east', en: 'Public Safety Software for the Middle East', es: 'Software de Seguridad Pública para Medio Oriente' },
                { href: '/resources/what-is-video-management-software', en: 'What Is VMS Software? Video Management Guide', es: '¿Qué Es el Software VMS? Guía de Gestión de Video' },
                { href: '/resources/what-is-a-real-time-crime-center', en: 'What Is a Real-Time Crime Center (RTCC)?', es: '¿Qué Es un Centro de Crimen en Tiempo Real (RTCC)?' },
                { href: '/resources/what-is-situational-awareness-software', en: 'What Is Situational Awareness Software?', es: '¿Qué Es el Software de Conciencia Situacional?' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderRadius: '8px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--dim)', fontSize: '15px' }}>
                  <span>{es ? link.es : link.en}</span>
                  <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={es ? 'Solicita una Demo para tu Sala de Control' : 'Request a Demo for Your Control Room'}
          subtitle={es ? 'KabatOne integra despacho 999, CCTV con analítica de IA y mando Oro/Plata/Bronce en una sola plataforma. Demo adaptada al contexto del Reino Unido.' : 'KabatOne integrates 999 dispatch, CCTV with AI analytics, and Gold/Silver/Bronze command in a single platform. Demo tailored to the UK context.'}
        />

        <Footer es={es} />
      </div>
    </>
  )
}
