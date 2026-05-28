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
  return generatePageMetadata('publicSafetySoftwareNetherlands', locale)
}

export default async function PublicSafetySoftwareNetherlandsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-netherlands/`
    : `${baseUrl}/resources/public-safety-software-netherlands/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Países Bajos' : 'Public Safety Software — Netherlands', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en los Países Bajos?',
      answer: 'En 2013, los Países Bajos consolidaron 26 fuerzas policiales regionales en una única fuerza nacional — la Politie — con 10 Eenheden (unidades regionales) y una Landelijke Eenheid (Unidad Nacional) para crimen organizado, terrorismo y operaciones especiales. La Politie cuenta con más de 65,000 efectivos y su sistema de TI es gestionado de forma centralizada por la VtsPN (Voorzieningen voor de Politie Nederland). La Brandweer (bomberos) opera a nivel municipal y de veiligheidsregio (25 regiones de seguridad). La respuesta médica de emergencias (ambulancias y GHOR) está organizada por las mismas 25 veiligheidsregio. La coordinación multiagencia se realiza en los Veiligheidsregio, que son la estructura fundamental para la respuesta a grandes incidentes y protección civil.',
    },
    {
      question: '¿Cómo funciona el 112 en los Países Bajos y qué es el Meldkamer NL?',
      answer: 'Los Países Bajos adoptaron el 112 como número único de emergencias. Las llamadas son recibidas por los Meldkamers — centros de despacho conjuntos de Politie, Brandweer y Ambulancia. El proyecto Meldkamer NL busca consolidar los Meldkamers en Gezamenlijke Meldkamers (GMK) — centros integrados donde los operadores de los tres servicios trabajan en el mismo espacio físico con sistemas compartidos. El sistema CAD actual de la Politie (BVH — Basisvoorziening Handhaving) está siendo reemplazado por el proyecto CAD 2.0 para modernizar el despacho y mejorar la interoperabilidad entre Politie, Brandweer y GHOR bajo la arquitectura GMK.',
    },
    {
      question: '¿Qué es C2000 y cómo afecta a la tecnología de seguridad pública en los Países Bajos?',
      answer: 'C2000 es la red nacional de radio digital para los servicios de seguridad pública de los Países Bajos (Politie, Brandweer, Ambulancia y Defensie), construida sobre el estándar TETRA. Gestiona más de 50,000 terminales en todo el país. El sistema P2000 de buscapersonas (pagers) sigue siendo complementario para las alertas de Brandweer. Una actualización importante del core de C2000 se completó en los últimos años para ampliar la capacidad y la seguridad del sistema. Los sistemas CAD, de videovigilancia y de conciencia situacional que se integren en el ecosistema de seguridad pública neerlandés deben ser interoperables con C2000 para las comunicaciones operativas.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en los Países Bajos?',
      answer: 'La contratación pública en los Países Bajos sigue la Aanbestedingswet 2012 (modificada) y las directivas UE. TenderNed es el portal oficial de publicación de licitaciones. PIANOo es el centro de expertise del gobierno neerlandés en contratación pública, con guías específicas para TI y tecnología. Para la Politie, las licitaciones son gestionadas centralmente por el Bestuursdepartement (Ministerio de Justicia y Seguridad) o la VtsPN para contratos de TI. Las veiligheidsregio y municipios lican de forma independiente para sus sistemas de Brandweer y cameratoezicht. Los contratos marco (raamovereenkomst) con la Rijksdienst voor Ondernemend Nederland (RVO) o la Haagse Inkoop Samenwerking (HIS) son frecuentes para tecnología gubernamental.',
    },
    {
      question: '¿Cuáles son los requisitos de protección de datos para software policial en los Países Bajos?',
      answer: 'El software de seguridad pública en los Países Bajos debe cumplir tres marcos normativos simultáneamente: la AVG (Algemene Verordening Gegevensbescherming, el RGPD neerlandés), la WPG (Wet Politiegegevens, la Ley de Datos Policiales, que transpone la Directiva 2016/680 con requisitos más estrictos que el RGPD para datos policiales específicos) y la BIO (Baseline Informatiebeveiliging Overheid, el marco de ciberseguridad obligatorio para toda la administración pública neerlandesa). La AP (Autoriteit Persoonsgegevens) es la autoridad supervisora, con historial de sanciones significativas. El NCSC (Nationaal Cyber Security Centrum) coordina la respuesta a incidentes cibernéticos en infraestructuras críticas.',
    },
    {
      question: '¿Qué sistemas de videovigilancia y cameratoezicht usa la Politie y las ciudades neerlandesas?',
      answer: 'Los Países Bajos tienen un ecosistema de cameratoezicht (videovigilancia) distribuido: los municipios gestionan las redes de CCTV en espacios públicos bajo la Gemeentewet y la AVG, mientras que la Politie accede a las imágenes con base legal específica. Ciudades como Ámsterdam, Rotterdam y La Haya tienen extensas redes de cámaras municipales integradas con las salas de operaciones de la Politie. El uso de analítica de video con IA (incluyendo reconocimiento facial) está bajo escrutinio del AP y requiere una evaluación de impacto de protección de datos (DPIA/PIA) previa. El sistema ANPR (kentekenherkenning) es operado por de Politie en carreteras y accesos urbanos principales.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la Politie, Brandweer y los Meldkamers neerlandeses?',
      answer: 'KabatOne integra las funciones que la Politie, Brandweer y los Meldkamers gestionan en plataformas separadas: despacho CAD compatible con la arquitectura GMK del proyecto Meldkamer NL y los flujos de trabajo 112 multiagencia (K-Dispatch), gestión unificada de redes de cameratoezicht con analítica de IA — kentekenherkenning ANPR, detección de comportamientos, búsqueda forense — conforme a la AVG, la WPG y las directrices del AP (K-Video), y conciencia situacional GIS compartida entre Politie Eenheden, Brandweer, GHOR y veiligheidsregio (K-Safety). Despliegue on-premises con cumplimiento BIO y requisitos NCSC. Demo adaptada al contexto del Meldkamer NL y las veiligheidsregio neerlandesas.',
    },
  ] : [
    {
      question: 'How is public safety organised in the Netherlands?',
      answer: 'In 2013, the Netherlands consolidated 26 regional police forces into a single national force — the Politie — with 10 Eenheden (regional units) and a Landelijke Eenheid (National Unit) for organised crime, terrorism, and special operations. The Politie has over 65,000 officers and its IT is centrally managed by the VtsPN (National Police IT Services). The Brandweer (fire services) operates at municipal and veiligheidsregio (25 safety regions) level. Emergency medical response (ambulances and GHOR) is organised by the same 25 veiligheidsregio. Multi-agency coordination takes place within Veiligheidsregio, which form the fundamental structure for major incident response and civil protection.',
    },
    {
      question: 'How does 112 work in the Netherlands and what is Meldkamer NL?',
      answer: 'The Netherlands adopted 112 as its single emergency number. Calls are received by Meldkamers — joint dispatch centres for Politie, Brandweer, and Ambulance. The Meldkamer NL project aims to consolidate Meldkamers into Gezamenlijke Meldkamers (GMK) — integrated centres where operators from all three services work in the same physical space with shared systems. The Politie\'s current CAD system (BVH — Basisvoorziening Handhaving) is being replaced by the CAD 2.0 project to modernise dispatch and improve interoperability between Politie, Brandweer, and GHOR under the GMK architecture.',
    },
    {
      question: 'What is C2000 and how does it affect public safety technology in the Netherlands?',
      answer: 'C2000 is the national digital radio network for Dutch public safety services (Politie, Brandweer, Ambulance, and Defensie), built on the TETRA standard. It manages over 50,000 terminals nationwide. The P2000 pager system remains complementary for Brandweer alerting. A major C2000 core upgrade was completed in recent years to expand capacity and system security. CAD, video surveillance, and situational awareness systems integrated into the Dutch public safety ecosystem must be interoperable with C2000 for operational communications.',
    },
    {
      question: 'How do Dutch government agencies procure public safety software?',
      answer: 'Public procurement in the Netherlands follows the Aanbestedingswet 2012 (amended) and EU directives. TenderNed is the official tender publication portal. PIANOo is the Dutch government\'s procurement expertise centre with specific IT and technology guides. For the Politie, tenders are managed centrally by the Ministry of Justice and Security or VtsPN for IT contracts. Veiligheidsregio and municipalities tender independently for Brandweer and cameratoezicht systems. Framework agreements (raamovereenkomst) with the RVO or Haagse Inkoop Samenwerking (HIS) are common for government technology.',
    },
    {
      question: 'What are the data protection requirements for police software in the Netherlands?',
      answer: 'Public safety software in the Netherlands must comply with three regulatory frameworks simultaneously: the AVG (Algemene Verordening Gegevensbescherming — Dutch GDPR), the WPG (Wet Politiegegevens — Police Data Act, transposing Directive 2016/680 with stricter requirements than GDPR for specific police data), and the BIO (Baseline Informatiebeveiliging Overheid — the mandatory cybersecurity baseline for all Dutch public administration). The AP (Autoriteit Persoonsgegevens) is the supervisory authority with an active enforcement history. The NCSC (National Cyber Security Centre) coordinates cyber incident response for critical infrastructure.',
    },
    {
      question: 'What CCTV and cameratoezicht systems does the Politie and Dutch cities use?',
      answer: 'The Netherlands has a distributed cameratoezicht (video surveillance) ecosystem: municipalities manage public space CCTV networks under the Gemeentewet and AVG, while the Politie accesses footage with specific legal basis. Cities including Amsterdam, Rotterdam, and The Hague have extensive municipal camera networks integrated with Politie operations rooms. AI video analytics (including facial recognition) is under AP scrutiny and requires a prior Data Protection Impact Assessment (DPIA). The ANPR system (kentekenherkenning) is operated by the Politie on main roads and urban access points.',
    },
    {
      question: 'Why is KabatOne suited for Dutch Politie, Brandweer, and Meldkamer operations?',
      answer: 'KabatOne integrates the functions Politie, Brandweer, and Meldkamers manage across separate platforms: CAD dispatch compatible with the GMK architecture of the Meldkamer NL project and 112 multi-agency workflows (K-Dispatch), unified management of cameratoezicht networks with AI analytics — ANPR kentekenherkenning, behavioural detection, forensic search — compliant with AVG, WPG, and AP guidelines (K-Video), and GIS situational awareness shared across Politie Eenheden, Brandweer, GHOR, and veiligheidsregio (K-Safety). On-premises deployment with BIO compliance and NCSC requirements. Request a demo tailored to the Dutch Meldkamer NL and veiligheidsregio context.',
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
      title: 'Één Politie: Centralización Nacional con 10 Eenheden Regionales',
      desc: 'La consolidación de la Politie en 2013 creó la mayor fuerza policial integrada de Europa por tamaño relativo. La estandarización nacional de TI (VtsPN) coexiste con las necesidades operativas locales de cada Eenheid. Los sistemas de despacho y conciencia situacional deben equilibrar el mando centralizado con la flexibilidad regional para emergencias, grandes eventos y operaciones de larga duración.',
      color: '#3b82f6',
    },
    {
      title: 'Meldkamer NL y CAD 2.0: Modernización del Despacho Conjunto',
      desc: 'El proyecto Meldkamer NL está transformando el modelo de despacho — consolidando centros de Politie, Brandweer y Ambulancia en Gezamenlijke Meldkamers con sistemas CAD compartidos. La migración del sistema BVH actual al CAD 2.0 requiere plataformas que soporten workflows multiagencia, transferencia de datos de incidente y comunicación con C2000 TETRA en tiempo real.',
      color: '#06b6d4',
    },
    {
      title: 'AVG, WPG y BIO: Triple Marco de Cumplimiento para Datos Policiales',
      desc: 'Los Países Bajos exigen cumplimiento simultáneo del RGPD/AVG, la WPG (Ley de Datos Policiales, más estricta que el RGPD para datos específicos de policía) y la BIO (Baseline de Seguridad de la Información para las administraciones públicas). La AP es una de las autoridades de protección de datos más activas de Europa, con sanciones notables en los últimos años.',
      color: '#f59e0b',
    },
    {
      title: 'Cameratoezicht, ANPR y Smart City en un Entorno AVG Estricto',
      desc: 'Las ciudades neerlandesas gestionan extensas redes de cameratoezicht que requieren integración con las salas de operaciones de la Politie. El despliegue de analítica de video con IA — incluyendo kentekenherkenning ANPR y reconocimiento de comportamientos — requiere DPIA previa y justificación legal estricta bajo la AVG y las directrices del AP, lo que convierte el cumplimiento normativo en un diferenciador clave en la selección de plataformas.',
      color: '#ef4444',
    },
  ] : [
    {
      title: 'Één Politie: National Centralisation with 10 Regional Eenheden',
      desc: 'The 2013 Politie consolidation created one of Europe\'s largest integrated police forces by relative size. National IT standardisation (VtsPN) coexists with the local operational needs of each Eenheid. Dispatch and situational awareness systems must balance centralised command with regional flexibility for emergencies, major events, and sustained operations.',
      color: '#3b82f6',
    },
    {
      title: 'Meldkamer NL and CAD 2.0: Joint Dispatch Modernisation',
      desc: 'The Meldkamer NL project is transforming the dispatch model — consolidating Politie, Brandweer, and Ambulance centres into Gezamenlijke Meldkamers with shared CAD systems. Migration from the current BVH system to CAD 2.0 requires platforms that support multi-agency workflows, incident data transfer, and real-time C2000 TETRA communications.',
      color: '#06b6d4',
    },
    {
      title: 'AVG, WPG, and BIO: Triple Compliance Framework for Police Data',
      desc: 'The Netherlands requires simultaneous compliance with GDPR/AVG, the WPG (Police Data Act — stricter than GDPR for specific police data), and the BIO (Government Information Security Baseline). The AP is one of Europe\'s most active data protection authorities with notable recent enforcement actions.',
      color: '#f59e0b',
    },
    {
      title: 'Cameratoezicht, ANPR, and Smart City in a Strict AVG Environment',
      desc: 'Dutch cities manage extensive cameratoezicht networks requiring integration with Politie operations rooms. Deploying AI video analytics — including ANPR kentekenherkenning and behavioural recognition — requires prior DPIA and strict legal justification under AVG and AP guidelines, making regulatory compliance a key platform selection differentiator.',
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
          es ? 'Software de Seguridad Pública para los Países Bajos: Politie, Meldkamer NL, C2000 y AVG' : 'Public Safety Software for the Netherlands: Politie, Meldkamer NL, C2000 & AVG',
          es ? 'Plataforma unificada para la Politie, Brandweer y Meldkamers neerlandeses — despacho CAD compatible con GMK/CAD 2.0, analítica de cameratoezicht con IA y cumplimiento AVG/WPG/BIO.' : 'Unified platform for Dutch Politie, Brandweer, and Meldkamers — CAD dispatch compatible with GMK/CAD 2.0, AI cameratoezicht analytics, and AVG/WPG/BIO compliance.',
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
            <span style={{ color: 'var(--dim)' }}>{es ? 'Software de Seguridad Pública — Países Bajos' : 'Public Safety Software — Netherlands'}</span>
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
                ? 'Software de Seguridad Pública para los Países Bajos: Politie, Meldkamer NL, C2000 y AVG'
                : 'Public Safety Software for the Netherlands: Politie, Meldkamer NL, C2000 & AVG'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Los Países Bajos consolidaron 26 fuerzas regionales en una única Politie nacional con 10 Eenheden, y están modernizando el despacho de emergencias bajo el proyecto Meldkamer NL hacia Gezamenlijke Meldkamers integrados. KabatOne unifica el despacho CAD compatible con CAD 2.0/GMK, la gestión de cameratoezicht con analítica de IA y la conciencia situacional GIS en una plataforma con cumplimiento AVG, WPG y BIO.'
                : 'The Netherlands consolidated 26 regional forces into a single national Politie with 10 Eenheden, and is modernising emergency dispatch under the Meldkamer NL project towards integrated Gezamenlijke Meldkamers. KabatOne unifies CAD dispatch compatible with CAD 2.0/GMK, cameratoezicht management with AI analytics, and GIS situational awareness in a single platform with AVG, WPG, and BIO compliance.'}
            </p>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '40px 32px', background: 'rgba(59,130,246,0.04)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
            {(es ? [
              { value: '10', label: 'Eenheden regionales de la Politie + Landelijke Eenheid' },
              { value: '65K+', label: 'Efectivos de la Politie nacional única' },
              { value: '25', label: 'Veiligheidsregio para coordinación multiagencia' },
              { value: '17.9M', label: 'Habitantes — mercado europeo de alta densidad tecnológica' },
            ] : [
              { value: '10', label: 'Politie regional Eenheden + Landelijke Eenheid' },
              { value: '65K+', label: 'Officers in the single national Politie' },
              { value: '25', label: 'Veiligheidsregio for multi-agency coordination' },
              { value: '17.9M', label: 'Population — high-density tech-forward EU market' },
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
            <h2 style={h2Style}>{es ? 'Retos Operativos para la Seguridad Pública en los Países Bajos' : 'Operational Challenges for Public Safety in the Netherlands'}</h2>
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
            <h2 style={h2Style}>{es ? 'Cómo KabatOne Responde a los Requisitos de los Meldkamers y Politie Eenheden' : 'How KabatOne Addresses Dutch Meldkamer and Politie Eenheid Requirements'}</h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne está diseñado para los Meldkamers y salas de operaciones de la Politie que necesitan un único dashboard para gestionar llamadas 112 multiagencia, monitorear redes de cameratoezicht y coordinar unidades de Politie, Brandweer y GHOR sobre un mapa GIS — todo bajo el triple marco de cumplimiento AVG/WPG/BIO de los sistemas de información de seguridad pública neerlandeses.'
                : 'KabatOne is designed for Dutch Meldkamers and Politie operations rooms that need a single dashboard to manage 112 multi-agency calls, monitor cameratoezicht networks, and coordinate Politie, Brandweer, and GHOR units on a GIS map — all under the triple AVG/WPG/BIO compliance framework for Dutch public safety information systems.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {(es ? [
                { title: 'Despacho CAD GMK Compatible con Meldkamer NL', desc: 'K-Dispatch gestiona llamadas 112 simultáneas de Politie, Brandweer y Ambulancia con clasificación automática de incidentes y asignación de recursos — compatible con la arquitectura GMK del proyecto Meldkamer NL y el reemplazo del sistema BVH por CAD 2.0.' },
                { title: 'Cameratoezicht con Analítica IA Conforme a AVG/WPG', desc: 'K-Video integra redes de cameratoezicht municipales y provinciales con analítica de IA — kentekenherkenning ANPR, detección de comportamientos, búsqueda forense — con DPIA integrada, políticas de retención configurables y cumplimiento de las directrices del AP sobre videovigilancia.' },
                { title: 'Conciencia Situacional GIS Multi-Veiligheidsregio', desc: 'K-Safety proporciona el mapa operativo GIS compartido entre Politie Eenheden, Brandweer, GHOR y las 25 veiligheidsregio — con posiciones de unidades en tiempo real, gestión de incidentes GRIP (Gecoördineerde Regionale Incidentenbestrijdingsprocedure) y coordinación para grandes eventos.' },
                { title: 'On-Premises con Cumplimiento BIO y NCSC', desc: 'Despliegue on-premises en infraestructura neerlandesa certificada. Controles de seguridad conformes a la BIO (Baseline Informatiebeveiliging Overheid). Cumplimiento AVG y WPG para datos policiales. Integración con la red C2000 TETRA para comunicaciones operativas.' },
              ] : [
                { title: 'GMK-Compatible CAD Dispatch for Meldkamer NL', desc: 'K-Dispatch manages simultaneous 112 calls from Politie, Brandweer, and Ambulance with automatic incident classification and resource assignment — compatible with the GMK architecture of the Meldkamer NL project and the BVH replacement by CAD 2.0.' },
                { title: 'AVG/WPG-Compliant AI Cameratoezicht Analytics', desc: 'K-Video integrates municipal and provincial cameratoezicht networks with AI analytics — ANPR kentekenherkenning, behavioural detection, forensic search — with integrated DPIA, configurable retention policies, and compliance with AP video surveillance guidelines.' },
                { title: 'Multi-Veiligheidsregio GIS Situational Awareness', desc: 'K-Safety provides the shared GIS operational map across Politie Eenheden, Brandweer, GHOR, and the 25 veiligheidsregio — with real-time unit positions, GRIP incident management (Gecoördineerde Regionale Incidentenbestrijdingsprocedure), and major event coordination.' },
                { title: 'On-Premises with BIO and NCSC Compliance', desc: 'On-premises deployment on certified Dutch infrastructure. Security controls compliant with the BIO (Baseline Informatiebeveiliging Overheid). AVG and WPG compliance for police data. Integration with the C2000 TETRA network for operational communications.' },
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
                ? 'Los Meldkamers y salas de operaciones de la Politie neerlandesa pueden desplegar K-Dispatch para despacho integrado 112/GMK, K-Video para gestión de cameratoezicht con analítica de IA bajo AVG/WPG y K-Safety para conciencia situacional GIS compartida entre Politie, Brandweer, GHOR y veiligheidsregio.'
                : 'Dutch Meldkamers and Politie operations rooms can deploy K-Dispatch for integrated 112/GMK dispatch, K-Video for cameratoezicht management with AI analytics under AVG/WPG, and K-Safety for GIS situational awareness shared across Politie, Brandweer, GHOR, and veiligheidsregio.'}
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
              {es ? 'Software de Seguridad Pública en los Países Bajos' : 'Public Safety Software in the Netherlands'}
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
                { href: '/resources/public-safety-software-germany', en: 'Public Safety Software for Germany: Leitstellen, BOS Digital & DSGVO', es: 'Software de Seguridad Pública para Alemania: Leitstellen, BOS Digital y DSGVO' },
                { href: '/resources/public-safety-software-france', en: 'Public Safety Software for France: Police Nationale, Gendarmerie & RGPD', es: 'Software de Seguridad Pública para Francia: Police Nationale, Gendarmerie y RGPD' },
                { href: '/resources/public-safety-software-spain', en: 'Public Safety Software for Spain: CNP, Guardia Civil, Mossos & ENS', es: 'Software de Seguridad Pública para España: CNP, Guardia Civil, Mossos y ENS' },
                { href: '/resources/public-safety-software-united-kingdom', en: 'Public Safety Software for the United Kingdom', es: 'Software de Seguridad Pública para el Reino Unido' },
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
          h2={es ? 'Solicita una Demo para tu Meldkamer, Politie Eenheid o Veiligheidsregio' : 'Request a Demo for Your Meldkamer, Politie Eenheid, or Veiligheidsregio'}
          subtitle={es ? 'KabatOne integra despacho 112/GMK, cameratoezicht con analítica de IA y conciencia situacional GIS en una plataforma con cumplimiento AVG, WPG y BIO. Demo adaptada al contexto del Meldkamer NL y las veiligheidsregio neerlandesas.' : 'KabatOne integrates 112/GMK dispatch, AI cameratoezicht analytics, and GIS situational awareness in a single platform with AVG, WPG, and BIO compliance. Demo tailored to the Dutch Meldkamer NL and veiligheidsregio context.'}
        />

        <Footer es={es} />
      </div>
    </>
  )
}
