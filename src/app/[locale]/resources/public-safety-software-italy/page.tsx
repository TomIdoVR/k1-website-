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
  return generatePageMetadata('publicSafetySoftwareItaly', locale)
}

export default async function PublicSafetySoftwareItalyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-italy/`
    : `${baseUrl}/resources/public-safety-software-italy/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Italia' : 'Public Safety Software — Italy', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Italia?',
      answer: 'Italia opera un sistema de seguridad pública multi-fuerza. La Polizia di Stato (bajo el Ministerio del Interior) es la fuerza policial civil principal, responsable de orden público en ciudades y zonas urbanas. Los Carabinieri (Arma dei Carabinieri) son una fuerza policial militar bajo el Ministerio de Defensa con competencias de policía judicial y control del territorio en zonas rurales y pequeñas ciudades. La Guardia di Finanza (GdF) tiene funciones de policía económica, aduanera y fronteriza. La Polizia Locale (o Polizia Municipale) es gestionada por los 7,000+ Comuni y se ocupa de seguridad vial, comercio y orden local. La coordinación operativa entre fuerzas se realiza a través de las Prefetture a nivel provincial.',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Italia y qué es el NUE 112?',
      answer: 'Italia históricamente usa múltiples números de emergencia: el 112 para los Carabinieri, el 113 para la Polizia di Stato, el 115 para los Vigili del Fuoco (bomberos) y el 118 para el Servicio de Emergencias Médicas (SUEM). El proyecto NUE 112 (Numero Unico di Emergenza) busca unificar la respuesta inicial bajo el 112 europeo, con centrales SOREU (Sale Operative Regionali Emergenza Urgenza) que reciben todas las llamadas y las redirigen al cuerpo competente. Las regiones de Lombardía, Piemonte y Toscana lideran la implementación. Las Centrali Operative de Polizia y Carabinieri y los COAU de bomberos coordinan el despacho de unidades.',
    },
    {
      question: '¿Qué sistemas de videovigilancia existen en Italia y cómo se gestionan?',
      answer: 'Italia cuenta con extensas redes de videovigilancia en sus principales ciudades. Milano opera uno de los sistemas de CCTV urbano más avanzados de Europa, con miles de cámaras conectadas a la Sala Operativa de la Questura. Roma, Napoli y Torino también tienen grandes redes municipales gestionadas entre Questure y Comuni. El sistema de lettori automatici di targhe (LPR/ANPR) — operado por Polizia, Carabinieri y Polizia Locale — cubre principales autopistas y accesos urbanos. Los proyectos "Mille occhi sulla città" y "Sicurezza urbana integrata" han impulsado la integración de CCTV municipal con centros operativos provinciales. El reconocimiento facial está regulado por el Garante Privacy bajo el GDPR.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Italia?',
      answer: 'La contratación pública en Italia sigue el Codice dei Contratti Pubblici (D.Lgs. 36/2023, vigente desde julio 2023) y las directivas UE. CONSIP es la centrale di committenza nacional que gestiona contratti quadro y acuerdos marco a los que puede adherirse cualquier administración pública. El MEPA (Mercato Elettronico della Pubblica Amministrazione) es la plataforma de compras electrónicas para contratos bajo umbral. La Banca Dati Nazionale dei Contratti Pubblici (BDNCP) gestiona el CIG (Codice Identificativo Gara) obligatorio para toda licitación. ANAC supervisa la transparencia y anticorrupción en la contratación. Para proyectos tecnológicos de seguridad pública, la Direzione Centrale dei Servizi Tecnico-Logistici del Ministero dell\'Interno gestiona las grandes licitaciones.',
    },
    {
      question: '¿Cuáles son los requisitos de protección de datos para software policial en Italia?',
      answer: 'El software de seguridad pública en Italia debe cumplir el GDPR (Regolamento UE 2016/679) y el Codice della Privacy italiano (D.Lgs. 196/2003, modificado por D.Lgs. 101/2018 y D.Lgs. 51/2018 — que transpone la Directiva 2016/680 para datos policiales). El Garante per la protezione dei dati personali (Garante Privacy) es la autoridad supervisora nacional — una de las más activas en la UE, con historial de sanciones significativas. Los sistemas de reconocimiento facial en espacios públicos requieren base jurídica específica. La videovigilancia por parte de la Polizia Locale requiere ordenanza municipal y conformidad con las Linee guida del Garante sobre videovigilanza. La ACN (Agenzia per la Cybersicurezza Nazionale) establece los requisitos de ciberseguridad para infraestructuras críticas nacionales.',
    },
    {
      question: '¿Qué es el proyecto NUE 112 y cómo afecta la gestión de emergencias en Italia?',
      answer: 'El NUE 112 (Numero Unico di Emergenza) es el proyecto nacional para adoptar el número europeo único 112 como punto de entrada para todas las emergencias en Italia. Las centrales NUE 112 — llamadas SOREU (Sale Operative Regionali Emergenza Urgenza) en Lombardía — reciben todas las llamadas, identifican la emergencia y redirigen al cuerpo competente (Carabinieri, Polizia, VVF, SUEM). La implementación es progresiva por región. Este proyecto requiere plataformas de despacho CAD que soporten transferencia de llamadas con datos de incidente (CTI) entre centrales NUE y salas operativas de cada cuerpo. Los sistemas tecnológicos deben integrarse con el protocolo EENA/ETSI para el intercambio de datos de emergencia.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la Polizia di Stato, Carabinieri y Polizia Locale italianos?',
      answer: 'KabatOne integra las funciones que las distintas fuerzas de seguridad italianas gestionan en plataformas separadas: despacho CAD compatible con los flujos NUE 112/SOREU y las salas operativas de Questure y Carabinieri (K-Dispatch), gestión unificada de redes CCTV municipales y provinciales con analítica de IA — LPR/ANPR, reconocimiento de comportamientos, búsqueda forense — conforme al GDPR y las directrices del Garante Privacy (K-Video), y conciencia situacional GIS compartida entre Prefettura, Questura, Comandi dei Carabinieri y Polizia Locale (K-Safety). Despliegue on-premises con cumplimiento GDPR y requisitos ACN. Solicite una demo adaptada al contexto de las sale operative provinciali italianas.',
    },
  ] : [
    {
      question: 'How is public safety organised in Italy?',
      answer: 'Italy operates a multi-force public safety system. The Polizia di Stato (under the Ministry of the Interior) is the main civil police force, responsible for public order in cities and urban areas. The Carabinieri (Arma dei Carabinieri) are a military police force under the Ministry of Defence with judicial police functions and territorial control in rural and smaller areas. The Guardia di Finanza handles economic, customs, and border policing. The Polizia Locale (or Polizia Municipale) is managed by Italy\'s 7,000+ Comuni and handles traffic safety, commerce, and local order. Operational coordination between forces takes place through Prefetture at the provincial level.',
    },
    {
      question: 'How does emergency dispatch work in Italy and what is NUE 112?',
      answer: 'Italy historically uses multiple emergency numbers: 112 for the Carabinieri, 113 for the Polizia di Stato, 115 for the Vigili del Fuoco (fire services), and 118 for medical emergency services (SUEM). The NUE 112 project (Numero Unico di Emergenza) aims to unify initial response under the European 112 number, with SOREU centres (Sale Operative Regionali Emergenza Urgenza) receiving all calls and routing them to the competent body. Lombardy, Piedmont, and Tuscany lead implementation. Police and Carabinieri Centrali Operative and fire COAU centres coordinate unit dispatch.',
    },
    {
      question: 'What surveillance and CCTV systems does Italy use?',
      answer: 'Italy has extensive surveillance networks in its major cities. Milan operates one of Europe\'s most advanced urban CCTV systems, with thousands of cameras connected to the Questura\'s Sala Operativa. Rome, Naples, and Turin also have large municipal networks jointly managed by Questure and Comuni. The lettori automatici di targhe (LPR/ANPR) system — operated by Polizia, Carabinieri, and Polizia Locale — covers major motorways and urban access points. Projects like "Mille occhi sulla città" and "Sicurezza urbana integrata" have driven integration of municipal CCTV with provincial operations centres. Facial recognition is regulated by the Garante Privacy under GDPR.',
    },
    {
      question: 'How do Italian government agencies procure public safety software?',
      answer: 'Public procurement in Italy follows the Codice dei Contratti Pubblici (D.Lgs. 36/2023, in force since July 2023) and EU directives. CONSIP is the national central purchasing body managing framework contracts (contratti quadro) that any public administration can join. MEPA (Mercato Elettronico della Pubblica Amministrazione) is the e-procurement platform for below-threshold contracts. The BDNCP manages the mandatory CIG (Codice Identificativo Gara) for all tenders. ANAC supervises procurement transparency and anti-corruption. For public safety technology, the Direzione Centrale dei Servizi Tecnico-Logistici of the Ministry of the Interior manages major tenders.',
    },
    {
      question: 'What are the data protection requirements for police software in Italy?',
      answer: 'Public safety software in Italy must comply with GDPR (EU Regulation 2016/679) and the Italian Privacy Code (D.Lgs. 196/2003, amended by D.Lgs. 101/2018 and D.Lgs. 51/2018 — transposing Directive 2016/680 for police data). The Garante per la protezione dei dati personali (Garante Privacy) is the national supervisory authority — one of the EU\'s most active, with a history of significant sanctions. Facial recognition in public spaces requires a specific legal basis. CCTV by Polizia Locale requires a municipal ordinance and compliance with the Garante\'s video surveillance guidelines. The ACN (Agenzia per la Cybersicurezza Nazionale) sets cybersecurity requirements for national critical infrastructure.',
    },
    {
      question: 'What is the NUE 112 project and how does it affect emergency management in Italy?',
      answer: 'The NUE 112 (Numero Unico di Emergenza) is Italy\'s national project to adopt the European 112 number as the single entry point for all emergencies. NUE 112 centres — known as SOREU (Sale Operative Regionali Emergenza Urgenza) in Lombardy — receive all calls, identify the emergency type, and route to the competent body (Carabinieri, Polizia, VVF, SUEM). Implementation is rolling out region by region. This requires CAD dispatch platforms that support call transfer with incident data (CTI) between NUE centres and each force\'s own operational rooms. Technology systems must integrate with EENA/ETSI protocols for emergency data exchange.',
    },
    {
      question: 'Why is KabatOne suited for Italy\'s Polizia di Stato, Carabinieri, and Polizia Locale?',
      answer: 'KabatOne integrates the functions Italy\'s security forces manage across separate platforms: CAD dispatch compatible with NUE 112/SOREU flows and the operational rooms of Questure and Carabinieri commands (K-Dispatch), unified management of municipal and provincial CCTV networks with AI analytics — LPR/ANPR, behavioural detection, forensic search — compliant with GDPR and Garante Privacy guidelines (K-Video), and GIS situational awareness shared across Prefetture, Questure, Carabinieri commands, and Polizia Locale (K-Safety). On-premises deployment with GDPR compliance and ACN requirements. Request a demo tailored to the Italian sala operativa provinciale context.',
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
      title: 'Sistema Multi-Fuerza: Polizia, Carabinieri, GdF y Polizia Locale con TI Separados',
      desc: 'Italia opera cuatro cuerpos de seguridad principales con mandatos, ministerios tutelares y sistemas tecnológicos distintos. La coordinación operativa entre la Polizia di Stato, los Carabinieri, la Guardia di Finanza y las 7,000+ Polizie Locali requiere plataformas de conciencia situacional capaces de operar a través de jurisdicciones con datos en tiempo real de múltiples fuentes institucionales.',
      color: '#3b82f6',
    },
    {
      title: 'Reforma del Despacho: 112/113/115/118 hacia el NUE 112 Nacional',
      desc: 'Los cuatro números de emergencia históricos operan en salas operativas independientes con flujos de datos no integrados. El proyecto NUE 112 está transformando el modelo de respuesta inicial, pero la interoperabilidad técnica entre las SOREU/NUE y las Centrali Operative de cada cuerpo requiere plataformas CAD con soporte para transferencia de llamadas, datos CTI y protocolos EENA/ETSI.',
      color: '#06b6d4',
    },
    {
      title: 'GDPR, Garante Privacy y Regulación de la Videovigilancia',
      desc: 'El Garante per la protezione dei dati personali es una de las autoridades de protección de datos más activas de Europa, con sanciones significativas en múltiples sectores. Los sistemas de videovigilancia y reconocimiento facial para la Polizia Locale requieren ordenanza municipal, base jurídica GDPR y cumplimiento de las Linee guida del Garante. La cybersicurezza nazionale está regulada por la ACN.',
      color: '#f59e0b',
    },
    {
      title: 'Criminalidad Organizada, Turismo Masivo y Grandes Eventos',
      desc: 'Italia gestiona amenazas de seguridad complejas: crimen organizado (Mafia siciliana, Camorra, Ndrangheta) que requiere coordinación multi-agencia e inteligencia en tiempo real; flujos turísticos masivos en ciudades patrimoniales (Roma, Venecia, Florencia); y grandes eventos internacionales que requieren centros de mando temporales interoperables entre Polizia, Carabinieri y Vigili del Fuoco.',
      color: '#ef4444',
    },
  ] : [
    {
      title: 'Multi-Force System: Polizia, Carabinieri, GdF & Polizia Locale with Separate IT',
      desc: 'Italy operates four major security forces with distinct mandates, supervising ministries, and technology systems. Operational coordination across Polizia di Stato, Carabinieri, Guardia di Finanza, and 7,000+ Polizie Locali requires situational awareness platforms capable of operating across jurisdictions with real-time data from multiple institutional sources.',
      color: '#3b82f6',
    },
    {
      title: 'Dispatch Reform: 112/113/115/118 Moving to NUE 112 Nationally',
      desc: 'Four historical emergency numbers operate in independent operational rooms with unintegrated data flows. The NUE 112 project is transforming the initial response model, but technical interoperability between SOREU/NUE centres and each force\'s Centrali Operative requires CAD platforms with call transfer support, CTI data, and EENA/ETSI protocol compliance.',
      color: '#06b6d4',
    },
    {
      title: 'GDPR, Garante Privacy, and Surveillance Regulation',
      desc: 'The Garante per la protezione dei dati personali is one of Europe\'s most active data protection authorities, with significant enforcement history across multiple sectors. CCTV and facial recognition systems for Polizia Locale require a municipal ordinance, GDPR legal basis, and compliance with Garante video surveillance guidelines. National cybersecurity is regulated by the ACN (Agenzia per la Cybersicurezza Nazionale).',
      color: '#f59e0b',
    },
    {
      title: 'Organised Crime, Mass Tourism, and Major Events',
      desc: 'Italy manages complex security threats: organised crime (Sicilian Mafia, Camorra, Ndrangheta) requiring multi-agency coordination and real-time intelligence; massive tourist flows in heritage cities (Rome, Venice, Florence); and major international events requiring interoperable temporary command centres across Polizia, Carabinieri, and Vigili del Fuoco.',
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
          es ? 'Software de Seguridad Pública para Italia: Polizia, Carabinieri, NUE 112 y GDPR' : 'Public Safety Software for Italy: Polizia, Carabinieri, NUE 112 & GDPR',
          es ? 'Plataforma unificada para la Polizia di Stato, Carabinieri y Polizia Locale — despacho CAD con soporte NUE 112/SOREU, analítica de CCTV con IA y cumplimiento GDPR/Garante Privacy.' : 'Unified platform for Polizia di Stato, Carabinieri, and Polizia Locale — CAD dispatch with NUE 112/SOREU support, AI CCTV analytics, and GDPR/Garante Privacy compliance.',
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
            <span style={{ color: 'var(--dim)' }}>{es ? 'Software de Seguridad Pública — Italia' : 'Public Safety Software — Italy'}</span>
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
                ? 'Software de Seguridad Pública para Italia: Polizia, Carabinieri, NUE 112 y GDPR'
                : 'Public Safety Software for Italy: Polizia, Carabinieri, NUE 112 & GDPR'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Italia opera un sistema de seguridad pública multi-fuerza — Polizia di Stato, Carabinieri, Guardia di Finanza y 7,000+ Polizie Locali — con un proyecto nacional NUE 112 que moderniza el despacho de emergencias. KabatOne unifica el despacho CAD con soporte SOREU/NUE, la gestión de CCTV con analítica de IA y la conciencia situacional GIS en una plataforma con cumplimiento GDPR y requisitos ACN.'
                : 'Italy operates a multi-force public safety system — Polizia di Stato, Carabinieri, Guardia di Finanza, and 7,000+ Polizie Locali — with a national NUE 112 project modernising emergency dispatch. KabatOne unifies CAD dispatch with SOREU/NUE support, CCTV management with AI analytics, and GIS situational awareness in a single platform with GDPR compliance and ACN requirements.'}
            </p>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '40px 32px', background: 'rgba(59,130,246,0.04)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
            {(es ? [
              { value: '20', label: 'Regiones con estructuras de seguridad propias' },
              { value: '300K+', label: 'Efectivos Polizia y Carabinieri combinados' },
              { value: '7,000+', label: 'Comuni con Polizia Locale propia' },
              { value: '59M', label: 'Habitantes — cuarto mayor mercado UE de seguridad' },
            ] : [
              { value: '20', label: 'Regions with dedicated security structures' },
              { value: '300K+', label: 'Combined Polizia and Carabinieri officers' },
              { value: '7,000+', label: 'Comuni with their own Polizia Locale' },
              { value: '59M', label: 'Population — fourth largest EU public safety market' },
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
            <h2 style={h2Style}>{es ? 'Retos Operativos para la Seguridad Pública en Italia' : 'Operational Challenges for Public Safety in Italy'}</h2>
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
            <h2 style={h2Style}>{es ? 'Cómo KabatOne Responde a los Requisitos de las Sale Operative Italiane' : 'How KabatOne Addresses Italian Sala Operativa Requirements'}</h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne está diseñado para las sale operative provinciali y centros de mando municipales que necesitan un único dashboard para gestionar llamadas NUE 112/113 simultáneas, monitorear redes de CCTV provinciales y municipales, y coordinar unidades de múltiples cuerpos sobre un mapa GIS — todo bajo los exigentes requisitos de privacidad del Garante e infraestructura de la ACN.'
                : 'KabatOne is designed for Italian sale operative provinciali and municipal command centres that need a single dashboard to manage simultaneous NUE 112/113 calls, monitor provincial and municipal CCTV networks, and coordinate units from multiple forces on a GIS map — all under the Garante\'s demanding privacy requirements and ACN infrastructure standards.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {(es ? [
                { title: 'Despacho CAD Multi-Cuerpo con Soporte NUE 112', desc: 'K-Dispatch gestiona llamadas simultáneas de Polizia, Carabinieri, VVF y SUEM con clasificación automática de incidentes y asignación de unidades — compatible con los flujos de trabajo SOREU/NUE 112 y los protocolos CTI de transferencia de llamadas.' },
                { title: 'CCTV Unificado con Analítica IA Conforme al Garante', desc: 'K-Video integra redes de CCTV municipales y provinciales con analítica de IA — LPR/ANPR (lettori automatici di targhe), detección de comportamientos, búsqueda forense — con políticas de retención conformes al GDPR y las Linee guida del Garante Privacy sobre videovigilanza.' },
                { title: 'Conciencia Situacional GIS Multi-Agencia', desc: 'K-Safety proporciona el mapa operativo GIS compartido entre Prefettura, Questura, Comandi dei Carabinieri y Polizia Locale — con posiciones de unidades en tiempo real, gestión de incidentes y coordinación para grandes eventos y situaciones de crimen organizado.' },
                { title: 'On-Premises con Cumplimiento GDPR y ACN', desc: 'Despliegue on-premises en infraestructura italiana certificada. Controles de seguridad conformes a los requisitos ACN para infraestructuras críticas nacionales. Políticas de datos auditables para cumplimiento con el Garante Privacy y D.Lgs. 51/2018.' },
              ] : [
                { title: 'Multi-Force CAD Dispatch with NUE 112 Support', desc: 'K-Dispatch manages simultaneous Polizia, Carabinieri, VVF, and SUEM calls with automatic incident classification and unit assignment — compatible with SOREU/NUE 112 workflows and CTI call transfer protocols.' },
                { title: 'Unified CCTV with Garante-Compliant AI Analytics', desc: 'K-Video integrates municipal and provincial CCTV networks with AI analytics — LPR/ANPR (lettori automatici di targhe), behavioural detection, forensic search — with retention policies compliant with GDPR and the Garante Privacy\'s video surveillance guidelines.' },
                { title: 'Multi-Agency GIS Situational Awareness', desc: 'K-Safety provides the shared GIS operational map across Prefetture, Questure, Carabinieri commands, and Polizia Locale — with real-time unit positions, incident management, and coordination for major events and organised crime situations.' },
                { title: 'On-Premises with GDPR and ACN Compliance', desc: 'On-premises deployment on certified Italian infrastructure. Security controls aligned with ACN requirements for national critical infrastructure. Auditable data policies for Garante Privacy and D.Lgs. 51/2018 compliance.' },
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
                ? 'Las sale operative provinciali y centros de mando municipales italianos pueden desplegar K-Dispatch para despacho integrado NUE 112/113, K-Video para gestión de CCTV con analítica de IA bajo GDPR/Garante y K-Safety para conciencia situacional GIS compartida entre Polizia, Carabinieri, VVF y Polizia Locale.'
                : 'Italian sale operative provinciali and municipal command centres can deploy K-Dispatch for integrated NUE 112/113 dispatch, K-Video for CCTV management with AI analytics under GDPR/Garante, and K-Safety for GIS situational awareness shared across Polizia, Carabinieri, VVF, and Polizia Locale.'}
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
              {es ? 'Software de Seguridad Pública en Italia' : 'Public Safety Software in Italy'}
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
                { href: '/resources/public-safety-software-france', en: 'Public Safety Software for France: Police Nationale, Gendarmerie & RGPD', es: 'Software de Seguridad Pública para Francia: Police Nationale, Gendarmerie y RGPD' },
                { href: '/resources/public-safety-software-germany', en: 'Public Safety Software for Germany: Leitstellen, BOS Digital & DSGVO', es: 'Software de Seguridad Pública para Alemania: Leitstellen, BOS Digital y DSGVO' },
                { href: '/resources/public-safety-software-united-kingdom', en: 'Public Safety Software for the United Kingdom', es: 'Software de Seguridad Pública para el Reino Unido' },
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
          h2={es ? 'Solicita una Demo para tu Questura, Comando o Polizia Locale' : 'Request a Demo for Your Questura, Comando, or Polizia Locale'}
          subtitle={es ? 'KabatOne integra despacho NUE 112/113, CCTV con analítica de IA y conciencia situacional GIS en una plataforma con cumplimiento GDPR y requisitos ACN. Demo adaptada al contexto de las sale operative italiane.' : 'KabatOne integrates NUE 112/113 dispatch, CCTV with AI analytics, and GIS situational awareness in a single platform with GDPR compliance and ACN requirements. Demo tailored to the Italian sala operativa context.'}
        />

        <Footer es={es} />
      </div>
    </>
  )
}
