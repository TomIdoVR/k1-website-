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
  return generatePageMetadata('publicSafetySoftwareGermany', locale)
}

export default async function PublicSafetySoftwareGermanyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-germany/`
    : `${baseUrl}/resources/public-safety-software-germany/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Alemania' : 'Public Safety Software — Germany', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Alemania?',
      answer: 'Alemania opera un sistema federal donde la seguridad pública es responsabilidad principal de los 16 Länder (estados federados). Cada estado tiene su propia fuerza policial (Landespolizei) — como la Polizei Bayern, Polizei NRW o Berliner Polizei. La Policía Federal (Bundespolizei, BPol) protege fronteras, aeropuertos y ferrocarriles. La Oficina Federal de Investigación Criminal (BKA) coordina investigaciones a nivel nacional. La coordinación entre estados se gestiona a través de la Conferencia de Ministros del Interior (IMK) y plataformas técnicas compartidas.',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Alemania y qué es el 110/112?',
      answer: 'Alemania usa dos números de emergencia: el 110 para la policía y el 112 para bomberos y servicios médicos de emergencia. Los centros de despacho (Leitstellen) operan a nivel de Landkreis (distrito) o de ciudad. Alemania tiene más de 300 Leitstellen integradas (ILS — Integrierte Leitstellen) que atienden simultáneamente llamadas de policía, bomberos y servicios médicos. Los Leitstellen usan sistemas CAD especializados para clasificar incidentes, gestionar recursos y coordinar la respuesta. El estándar BOS Digital (TETRA) conecta los sistemas de radio de las fuerzas de seguridad.',
    },
    {
      question: '¿Qué es el estándar BOS Digital y el TETRA en Alemania?',
      answer: 'BOS Digital es la red de radio digital de las organizaciones de seguridad pública en Alemania (Behörden und Organisationen mit Sicherheitsaufgaben), construida sobre el estándar TETRA. Operada por la Bundesanstalt für den Digitalfunk der Behörden und Organisationen mit Sicherheitsaufgaben (BDBOS), conecta más de 750,000 terminales de policía, bomberos y servicios de emergencia en todo el territorio alemán. Los sistemas CAD y de gestión de video deben integrarse con BOS Digital para la comunicación operativa.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Alemania?',
      answer: 'Los contratos públicos en Alemania siguen las directivas UE de contratación pública (EU Procurement Directives) y la VgV (Verordnung über die Vergabe öffentlicher Aufträge). Los procesos incluyen licitaciones abiertas (offenes Verfahren), negociadas (Verhandlungsverfahren) y concursos de diseño. El portal e-Vergabe y el DTVP (Deutsches Vergabeportal) son las plataformas principales. Para proyectos tecnológicos policiales, los contratos marco a nivel estatal (Rahmenverträge) son comunes. Los requisitos de seguridad BSI Grundschutz son obligatorios para sistemas que manejan datos policiales.',
    },
    {
      question: '¿Cuáles son los requisitos de ciberseguridad y protección de datos para software policial en Alemania?',
      answer: 'El software de seguridad pública en Alemania debe cumplir el GDPR/DSGVO (Datenschutz-Grundverordnung), la Richtlinie (EU) 2016/680 para datos policiales (implementada en el BDSG — Bundesdatenschutzgesetz) y los estándares de seguridad BSI (Bundesamt für Sicherheit in der Informationstechnik). El catálogo BSI IT-Grundschutz define los controles de seguridad para sistemas gubernamentales. Para datos policiales clasificados, se aplican requisitos adicionales de la Geheimschutzordnung. Los datos de vigilancia biométrica están sujetos a las regulaciones estatales más estrictas de Europa.',
    },
    {
      question: '¿Qué proyectos de videovigilancia existen en Alemania y cómo se regula el reconocimiento facial?',
      answer: 'Alemania tiene un enfoque más restrictivo hacia la videovigilancia que otros países europeos, fundamentado en los derechos constitucionales a la privacidad (artículo 2 de la Ley Fundamental). Las cámaras en espacios públicos requieren justificación legal (Polizeigesetze estatales). El reconocimiento facial en tiempo real está bajo escrutinio del Bundestag y las Datenschutzbeauftragten estatales. Sin embargo, proyectos como el sistema CCTV de la Berliner Polizei, la videovigilancia en estaciones ferroviarias (Deutsche Bahn + Bundespolizei) y los centros de mando de NRW demuestran uso creciente de analítica de video con IA para seguridad pública.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para las Leitstellen y fuerzas policiales alemanas?',
      answer: 'KabatOne integra las funciones que los Leitstellen alemanes gestionan en sistemas separados: despacho CAD con soporte para sistemas 110/112 simultáneos (K-Dispatch), gestión de CCTV con analítica de IA conforme al principio de minimización de datos DSGVO (K-Video) y conciencia situacional GIS para coordinación Landkreis/Landespolizei (K-Safety). La plataforma admite despliegue on-premises en infraestructura alemana y cumple los requisitos BSI IT-Grundschutz. Solicite una demostración adaptada al contexto de los Leitstellen integrados alemanes.',
    },
  ] : [
    {
      question: 'How is public safety organised in Germany?',
      answer: 'Germany operates a federal system where public safety is primarily the responsibility of the 16 Länder (federal states). Each state has its own police force (Landespolizei) — such as Polizei Bayern, Polizei NRW, or Berliner Polizei. The Federal Police (Bundespolizei, BPol) protects borders, airports, and railways. The Federal Criminal Police Office (BKA) coordinates national-level investigations. Inter-state coordination is managed through the Conference of Interior Ministers (IMK) and shared technical platforms.',
    },
    {
      question: 'How does emergency dispatch work in Germany and what is 110/112?',
      answer: 'Germany uses two emergency numbers: 110 for police and 112 for fire and emergency medical services. Dispatch centres (Leitstellen) operate at Landkreis (district) or city level. Germany has over 300 Integrated Control Centres (ILS — Integrierte Leitstellen) that simultaneously handle police, fire, and medical calls. Leitstellen use specialised CAD systems to classify incidents, manage resources, and coordinate response. The BOS Digital standard (TETRA) connects radio systems across all security forces.',
    },
    {
      question: 'What is the BOS Digital standard and TETRA in Germany?',
      answer: 'BOS Digital is the digital radio network for German public safety organisations (Behörden und Organisationen mit Sicherheitsaufgaben), built on the TETRA standard. Operated by the BDBOS (Federal Agency for the Digital Radio Network of Authorities and Organisations with Security Tasks), it connects over 750,000 police, fire, and emergency services terminals across Germany. CAD and video management systems must integrate with BOS Digital for operational communications.',
    },
    {
      question: 'How do German government agencies procure public safety software?',
      answer: 'Public contracts in Germany follow EU Procurement Directives and the VgV (Public Procurement Regulation). Processes include open tenders (offenes Verfahren), negotiated procedures (Verhandlungsverfahren), and competitive dialogues. The e-Vergabe portal and DTVP (German Procurement Portal) are the primary platforms. For police technology projects, state-level framework contracts (Rahmenverträge) are common. BSI Grundschutz security requirements are mandatory for systems handling police data.',
    },
    {
      question: 'What are the cybersecurity and data protection requirements for police software in Germany?',
      answer: 'Public safety software in Germany must comply with GDPR/DSGVO, Directive (EU) 2016/680 for police data (implemented in the BDSG — Federal Data Protection Act), and BSI (Federal Office for Information Security) security standards. The BSI IT-Grundschutz catalogue defines security controls for government systems. Classified police data also requires compliance with Geheimschutzordnung requirements. Biometric surveillance data is subject to the strictest data protection regulations in Europe.',
    },
    {
      question: 'What CCTV and video surveillance projects exist in Germany and how is facial recognition regulated?',
      answer: 'Germany takes a more restrictive approach to surveillance than other European countries, grounded in constitutional privacy rights (Article 2 of the Basic Law). Cameras in public spaces require legal justification under state police laws (Polizeigesetze). Real-time facial recognition faces scrutiny from the Bundestag and state data protection commissioners. However, projects like the Berliner Polizei CCTV system, station surveillance (Deutsche Bahn + Bundespolizei), and NRW command centres demonstrate growing use of AI video analytics for public safety.',
    },
    {
      question: 'Why is KabatOne suited for German Leitstellen and police forces?',
      answer: 'KabatOne integrates the functions German Leitstellen manage across separate systems: CAD dispatch with simultaneous 110/112 support (K-Dispatch), CCTV management with AI analytics compliant with DSGVO data minimisation principles (K-Video), and GIS situational awareness for Landkreis/Landespolizei coordination (K-Safety). The platform supports on-premises deployment on German infrastructure meeting BSI IT-Grundschutz requirements. Request a demo tailored to the German Integrierte Leitstellen context.',
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
      title: 'Sistema Federal: 16 Länder con Fuerzas Policiales Independientes',
      desc: 'Cada estado alemán opera su propia Landespolizei con sistemas, protocolos y contratos tecnológicos independientes. La coordinación para crímenes transfronterizos, eventos masivos y amenazas terroristas requiere plataformas de conciencia situacional capaces de operar entre jurisdicciones con estándares BOS Digital compartidos pero implementaciones heterogéneas.',
      color: '#3b82f6',
    },
    {
      title: 'Modernización de Leitstellen y Migración Digital',
      desc: 'Muchos de los más de 300 Leitstellen integrados de Alemania operan sistemas CAD heredados que necesitan modernización para soportar comunicaciones IP, multimedia y datos de localización mejorada. La migración debe mantener continuidad operativa 24/7 y cumplir los exigentes requisitos de seguridad BSI para infraestructura crítica.',
      color: '#06b6d4',
    },
    {
      title: 'DSGVO, BSI Grundschutz y Protección de Datos Policiales',
      desc: 'Alemania aplica las regulaciones de protección de datos más estrictas de Europa. Los sistemas policiales deben cumplir el DSGVO, la Directiva 2016/680 para datos policiales, el BSI IT-Grundschutz y las leyes estatales adicionales. El reconocimiento facial y la videovigilancia masiva enfrentan barreras constitucionales y regulatorias significativas.',
      color: '#f59e0b',
    },
    {
      title: 'Grandes Eventos y Amenaza Terrorista (KRITIS)',
      desc: 'Alemania alberga eventos masivos como el Oktoberfest (6M+ visitantes), la Bundesliga, el Carnaval de Colonia y cumbres internacionales. La infraestructura crítica (KRITIS) requiere planes de protección específicos bajo el BSI. Las grandes concentraciones requieren coordinación multiagencia entre Landespolizei, Bundespolizei, THW y servicios de salud.',
      color: '#ef4444',
    },
  ] : [
    {
      title: 'Federal System: 16 Länder with Independent Police Forces',
      desc: 'Each German state operates its own Landespolizei with independent systems, protocols, and technology contracts. Coordination for cross-border crime, mass events, and terrorist threats requires situational awareness platforms capable of operating across jurisdictions with shared BOS Digital standards but heterogeneous implementations.',
      color: '#3b82f6',
    },
    {
      title: 'Leitstellen Modernisation and Digital Migration',
      desc: 'Many of Germany\'s 300+ Integrated Leitstellen operate legacy CAD systems that need modernisation to support IP communications, multimedia, and enhanced location data. Migration must maintain 24/7 operational continuity and meet stringent BSI security requirements for critical infrastructure.',
      color: '#06b6d4',
    },
    {
      title: 'DSGVO, BSI Grundschutz, and Police Data Protection',
      desc: 'Germany enforces Europe\'s strictest data protection regulations. Police systems must comply with DSGVO, Directive 2016/680 for police data, BSI IT-Grundschutz, and additional state laws. Facial recognition and mass surveillance face significant constitutional and regulatory barriers.',
      color: '#f59e0b',
    },
    {
      title: 'Mass Events and Terrorist Threats (KRITIS)',
      desc: 'Germany hosts major mass events including Oktoberfest (6M+ visitors), Bundesliga, Cologne Carnival, and international summits. Critical infrastructure (KRITIS) requires specific protection plans under BSI. Large gatherings require multi-agency coordination between Landespolizei, Bundespolizei, THW, and health services.',
      color: '#ef4444',
    },
  ]

  return (
    <>
      <Nav />

      {/* ── Structured Data ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        articleSchema(
          es ? 'Software de Seguridad Pública para Alemania: Leitstellen, BOS Digital y DSGVO' : 'Public Safety Software for Germany: Leitstellen, BOS Digital & DSGVO',
          es ? 'Plataforma unificada para Leitstellen integrados y fuerzas policiales alemanas — despacho 110/112 con integración BOS Digital, analítica de video con IA y cumplimiento BSI IT-Grundschutz.' : 'Unified platform for German Integrated Leitstellen and police forces — 110/112 dispatch with BOS Digital integration, AI video analytics, and BSI IT-Grundschutz compliance.',
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
            <span style={{ color: 'var(--dim)' }}>{es ? 'Software de Seguridad Pública — Alemania' : 'Public Safety Software — Germany'}</span>
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
                ? 'Software de Seguridad Pública para Alemania: Leitstellen, BOS Digital y DSGVO'
                : 'Public Safety Software for Germany: Leitstellen, BOS Digital & DSGVO'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Alemania opera 16 fuerzas policiales federales independientes y más de 300 Leitstellen integrados con el estándar BOS Digital TETRA. KabatOne unifica el despacho de emergencias 110/112, la gestión de CCTV con analítica de IA y la conciencia situacional GIS en una plataforma lista para el contexto alemán con cumplimiento DSGVO y BSI IT-Grundschutz.'
                : 'Germany operates 16 independent state police forces and over 300 Integrated Leitstellen using the BOS Digital TETRA standard. KabatOne unifies 110/112 emergency dispatch, CCTV management with AI analytics, and GIS situational awareness in a single platform built for the German context with DSGVO and BSI IT-Grundschutz compliance.'}
            </p>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '40px 32px', background: 'rgba(59,130,246,0.04)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
            {(es ? [
              { value: '16', label: 'Fuerzas policiales estatales (Landespolizei)' },
              { value: '300+', label: 'Leitstellen integrados (ILS) en todo el país' },
              { value: '750K+', label: 'Terminales BOS Digital conectados' },
              { value: '83M', label: 'Habitantes — el mayor mercado UE de seguridad pública' },
            ] : [
              { value: '16', label: 'State police forces (Landespolizei)' },
              { value: '300+', label: 'Integrated Leitstellen (ILS) nationwide' },
              { value: '750K+', label: 'BOS Digital terminals connected' },
              { value: '83M', label: 'Population — largest EU public safety market' },
            ]).map((stat, i) => (
              <div key={i}>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: ACCENT, marginBottom: '6px', marginTop: 0 }}>{stat.value}</p>
                <p style={{ fontSize: '12px', fontWeight: 400, color: 'var(--muted)', lineHeight: 1.4, marginBottom: 0 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 1: Challenges ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Retos Operativos para la Seguridad Pública en Alemania' : 'Operational Challenges for Public Safety in Germany'}</h2>
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

        {/* ── SECTION 2: How KabatOne Works ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Cómo KabatOne Responde a los Requisitos de los Leitstellen Alemanes' : 'How KabatOne Addresses German Leitstellen Requirements'}</h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne está diseñado para los Leitstellen que necesitan un único dashboard para gestionar simultáneamente llamadas 110 de policía y 112 de bomberos/médicos, monitorear redes de CCTV urbanas y coordinar unidades sobre un mapa GIS — todo bajo los estrictos requisitos de seguridad y privacidad alemanes.'
                : 'KabatOne is designed for Leitstellen that need a single dashboard to simultaneously manage 110 police and 112 fire/medical calls, monitor urban CCTV networks, and coordinate units on a GIS map — all under Germany\'s strict security and privacy requirements.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {(es ? [
                { title: 'Despacho 110/112 Multiservicio', desc: 'K-Dispatch gestiona llamadas simultáneas de policía, bomberos y servicios médicos con clasificación automática de incidentes y asignación de unidades — listo para el modelo de Leitstellen integrados alemanes.' },
                { title: 'CCTV con Analítica IA conforme DSGVO', desc: 'K-Video integra redes de CCTV con analítica de IA — LPR/ANPR, detección de comportamiento, búsqueda forense — con políticas de retención de datos configurables bajo el principio de minimización DSGVO y BSI Grundschutz.' },
                { title: 'Conciencia Situacional GIS Multiagencia', desc: 'K-Safety proporciona el mapa operativo GIS compartido entre Landespolizei, Bundespolizei, THW y servicios de emergencia — con posiciones de unidades en tiempo real y gestión de incidentes para grandes eventos.' },
                { title: 'On-Premises con Cumplimiento BSI', desc: 'Despliegue on-premises en infraestructura alemana certificada. Controles de seguridad conformes al catálogo BSI IT-Grundschutz. Integración con red BOS Digital TETRA para comunicaciones operativas.' },
              ] : [
                { title: 'Multi-Service 110/112 Dispatch', desc: 'K-Dispatch manages simultaneous police, fire, and medical calls with automatic incident classification and unit assignment — ready for the German Integrierte Leitstellen model.' },
                { title: 'DSGVO-Compliant AI CCTV Analytics', desc: 'K-Video integrates CCTV networks with AI analytics — LPR/ANPR, behavioural detection, forensic search — with configurable data retention policies under DSGVO data minimisation principles and BSI Grundschutz.' },
                { title: 'Multi-Agency GIS Situational Awareness', desc: 'K-Safety provides the shared GIS operational map across Landespolizei, Bundespolizei, THW, and emergency services — with real-time unit positions and incident management for mass events.' },
                { title: 'On-Premises with BSI Compliance', desc: 'On-premises deployment on certified German infrastructure. Security controls compliant with the BSI IT-Grundschutz catalogue. Integration with BOS Digital TETRA network for operational communications.' },
              ]).map((item, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px' }}>
                  <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.03em', color: 'var(--white)', marginBottom: '10px', marginTop: 0 }}>{item.title}</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: Products ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Plataforma KabatOne' : 'KabatOne Platform'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>K-Dispatch · K-Video · K-Safety</h2>
            <p style={{ ...pStyle, marginBottom: '28px' }}>
              {es
                ? 'Los Leitstellen alemanes pueden desplegar K-Dispatch para despacho integrado 110/112, K-Video para gestión de CCTV con analítica de IA bajo DSGVO y K-Safety para conciencia situacional GIS compartida entre todas las agencias de seguridad del área.'
                : 'German Leitstellen can deploy K-Dispatch for integrated 110/112 dispatch, K-Video for CCTV management with AI analytics under DSGVO, and K-Safety for GIS situational awareness shared across all security agencies in the area.'}
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
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '32px' }}>
              {es ? 'Software de Seguridad Pública en Alemania' : 'Public Safety Software in Germany'}
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
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, marginBottom: '20px' }}>
              {es ? 'Recursos Relacionados' : 'Related Resources'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/resources/public-safety-software-united-kingdom', en: 'Public Safety Software for the United Kingdom', es: 'Software de Seguridad Pública para el Reino Unido' },
                { href: '/resources/public-safety-software-united-states', en: 'Public Safety Software for the United States', es: 'Software de Seguridad Pública para EE.UU.' },
                { href: '/resources/public-safety-software-india', en: 'Public Safety Software for India: Smart Cities & ICCC', es: 'Software de Seguridad Pública para India: Smart Cities e ICCC' },
                { href: '/resources/public-safety-software-middle-east', en: 'Public Safety Software for the Middle East', es: 'Software de Seguridad Pública para Medio Oriente' },
                { href: '/resources/what-is-video-management-software', en: 'What Is VMS Software? Video Management Guide', es: '¿Qué Es el Software VMS? Guía de Gestión de Video' },
                { href: '/resources/what-is-situational-awareness-software', en: 'What Is Situational Awareness Software?', es: '¿Qué Es el Software de Conciencia Situacional?' },
                { href: '/resources/what-is-a-real-time-crime-center', en: 'What Is a Real-Time Crime Center (RTCC)?', es: '¿Qué Es un Centro de Crimen en Tiempo Real (RTCC)?' },
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
          h2={es ? 'Solicita una Demo para tu Leitstelle o Fuerza Policial' : 'Request a Demo for Your Leitstelle or Police Force'}
          subtitle={es ? 'KabatOne integra despacho 110/112, CCTV con analítica de IA y conciencia situacional GIS en una plataforma con cumplimiento DSGVO y BSI IT-Grundschutz. Demo adaptada al contexto alemán.' : 'KabatOne integrates 110/112 dispatch, CCTV with AI analytics, and GIS situational awareness in a single platform with DSGVO and BSI IT-Grundschutz compliance. Demo tailored to the German context.'}
        />

        <Footer es={es} />
      </div>
    </>
  )
}
