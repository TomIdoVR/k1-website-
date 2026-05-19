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
  return generatePageMetadata('publicSafetySoftwareAustria', locale)
}

export default async function PublicSafetySoftwareAustriaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-austria/`
    : `${baseUrl}/resources/public-safety-software-austria/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Austria' : 'Public Safety Software — Austria', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Austria?',
      answer: 'Austria organiza su seguridad pública bajo el Ministerio Federal del Interior (BMI — Bundesministerium für Inneres). La Policía Federal de Austria (Bundespolizei) es la fuerza unificada creada en 2005 que fusionó la Gendarmería federal y la Policía de Seguridad. La Bundespolizei opera en 9 Direcciones de Policía Provincial (Landespolizeidirektionen, LPD), una por cada Land (Burgenland, Carintia, Baja Austria, Alta Austria, Salzburgo, Estiria, Tirol, Vorarlberg y Viena). La Oficina Federal de Investigación Criminal (BK — Bundeskriminalamt) coordina las investigaciones federales. La Dirección del Estado para la Protección de la Constitución y el Combate al Terrorismo (DSN — Direktion Staatsschutz und Nachrichtendienst) es el servicio de inteligencia interior. El Cuerpo de Bomberos (Feuerwehr) opera a nivel municipal/distrital bajo los 9 Länder. Los servicios de ambulancias (Rettungsdienst) son gestionados por la Cruz Roja, Samariterbund y Johanniter bajo supervisión de los Länder. El número unificado de emergencias es 112 (europeo), con 122 (bomberos), 133 (policía) y 144 (ambulancias) todavía en uso.',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Austria? ¿Qué son las Landeswarnzentralen y la red BOS-Funk/Tetron?',
      answer: 'Austria opera múltiples números de emergencia: 112 (europeo unificado), 133 (policía), 122 (bomberos) y 144 (ambulancias). El despacho policial se realiza desde los centros operativos de las 9 Landespolizeidirektionen. Los bomberos son despachados desde los Leitstellen (centrales de alarma) de los Länder, que también reciben las llamadas del 122. Las Landeswarnzentralen (LWZ) son los centros de alerta y coordinación de los Länder para catástrofes y protección civil. La red BOS-Funk (Behörden und Organisationen mit Sicherheitsaufgaben — Funknetze) es la red digital de radiocomunicaciones para servicios de emergencia de Austria. La red fue modernizada con tecnología TETRA (Tetron) — operada bajo contrato con el consorcio Tetron — y en 2025-2026 está en transición hacia BOS-Funk 2.0 con tecnologías 4G/5G y broadband de emergencias. Los centros integrados de despacho (Integrierte Leitstellen — ILS) existen en varios Länder para coordinar policía-bomberos-ambulancias desde un único centro.',
    },
    {
      question: '¿Qué proyectos Smart City y de digitalización están activos en Austria?',
      answer: 'Austria tiene un alto nivel de digitalización pública impulsado por el BMI y la Agencia de Digitalización del Gobierno Federal. Viena (Wien) tiene el programa Smart City Wien, uno de los más avanzados de Europa, con gestión integrada de tráfico, videovigilancia urbana conectada con la Polizei Wien, sistemas de parking inteligente y análisis de datos urbanos. El BMLV (Ministerio de Defensa) y el BMI coordinan las infraestructuras críticas (KRITIS) bajo la Ley de Protección de Infraestructuras Críticas. El proyecto ELDIS (Elektronische Dokumentation und Informationssystem) moderniza los sistemas de gestión de incidentes policiales. Austria participa activamente en el programa Galileo (GNSS europeo) para posicionamiento de recursos de emergencia. El SIAK (Sicherheitsakademie) impulsa la formación digital de la policía. Los proyectos SaferCity e ITS (Intelligent Transport Systems) integran datos de tráfico, cámaras y sensores urbanos en las plataformas de gestión de la Polizei y los Länder.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Austria?',
      answer: 'La contratación pública en Austria se rige por la Bundesvergabegesetz (BVergG — Ley Federal de Contratación Pública), implementando las directivas europeas. Los contratos se publican en las plataformas de contratación pública electrónica (e-Procurement): ANKÖ (Auftragnehmerkataster Österreich) para el registro de proveedores, y el portal federal de contratación (BMLRT). La Beschaffung Austria GmbH (BBG — Central de Compras del Estado) gestiona los contratos marco para el gobierno federal austriaco — el acuerdo marco BBG es el canal más eficiente para la administración pública. El BMI licita directamente los sistemas de la Bundespolizei. Los Länder licitan independientemente sus sistemas de bomberos y ambulancias. Los contratos grandes (>= umbrales europeos) aparecen en TED/OJEU. Austria tiene un sistema federal con 9 Länder autónomos en muchas decisiones de compra — especialmente para bomberos y ambulancias.',
    },
    {
      question: '¿Cuáles son los requisitos de protección de datos y ciberseguridad para software policial en Austria?',
      answer: 'El software de seguridad pública en Austria debe cumplir el RGPD (DSGVO — Datenschutz-Grundverordnung, implementado en el Datenschutzgesetz — DSG 2018). La autoridad supervisora es la Datenschutzbehörde (DSB). Los sistemas policiales están sujetos adicionalmente al Sicherheitspolizeigesetz (SPG — Ley de Policía de Seguridad) y al Bundesgesetz über die Verarbeitung personenbezogener Daten durch Sicherheitsbehörden (PolDVG). Para ciberseguridad, el CERT.at (Österreichisches Computer Emergency Response Team) y el GovCERT.at son los equipos de respuesta a incidentes. La NIS2 fue implementada en Austria mediante el NISG (Netz- und Informationssystemsicherheitsgesetz) y sus actualizaciones. La Rundfunk und Telekom Regulierungs-GmbH (RTR-GmbH) regula las comunicaciones electrónicas. Los sistemas del BMI y la Bundespolizei deben cumplir el marco de seguridad de la información del Bundeskanzleramt y los estándares ISO 27001 para la administración pública (Handbuch Datenschutz für Behörden).',
    },
    {
      question: '¿Qué infraestructura de videovigilancia tiene Austria y cómo se regula?',
      answer: 'Austria regula la videovigilancia mediante el Datenschutzgesetz (DSG 2018) y el RGPD, con la Datenschutzbehörde como autoridad de control. La videovigilancia policial en el espacio público requiere base legal específica bajo el Sicherheitspolizeigesetz (§54 SPG). Viena tiene la red de videovigilancia más extensa de Austria — con cámaras en el metro (U-Bahn Wien), Westbahnhof, Praterstern y centros urbanos integradas con la Polizei Wien. El sistema CÜPLA (Chemieschutz-Überwachungs- und Präventions-Leit-Anlage) protege instalaciones críticas. Las cámaras de la ASFINAG (autopistas) están integradas con sistemas de tráfico y control policial. Reconocimiento de placas (KFZ-Kennzeichenerfassung) está integrado en los sistemas de control de velocidad y puntos de control policial. Los proyectos Smart City Wien integran cámaras, sensores de tráfico y datos ambientales con analítica IA cumpliendo las directrices de la DSB.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la Bundespolizei austriaca, los Leitstellen y el BOS-Funk?',
      answer: 'KabatOne integra las capacidades que la Bundespolizei de Austria, los Leitstellen de los Länder y las Landeswarnzentralen necesitan unificadas: despacho CAD multiagencia compatible con las 9 Landespolizeidirektionen y los Leitstellen regionales — con integración BOS-Funk TETRA/Tetron y preparación para BOS-Funk 2.0 (4G/5G broadband), clasificación automática de incidentes y coordinación policía-Feuerwehr-Rettungsdienst, compatible con los centros ILS (Integrierte Leitstellen) (K-Dispatch), gestión de cámaras urbanas y ANPR/KFZ-Kennzeichenerfassung con analítica IA conforme a DSG/DSGVO/DSB — con DPIA, base legal §54 SPG y gestión de retención (K-Video), y conciencia situacional GIS compartida entre la Bundespolizei, los Länder, las Landeswarnzentralen y el BMLV/BMI para coordinación en catástrofes y grandes operaciones de seguridad — con integración Smart City Wien/ASFINAG (K-Safety). Cloud EU con cumplimiento DSGVO/DSB y NIS2/NISG/CERT.at. Compatible con los marcos de contratación BBG/BVergG. Demo adaptada al modelo federal austriaco de 9 Länder.',
    },
  ] : [
    {
      question: 'How is public safety organised in Austria?',
      answer: 'Austria organises its public safety under the Federal Ministry of the Interior (BMI — Bundesministerium für Inneres). The Austrian Federal Police (Bundespolizei) is the unified force created in 2005, merging the former Federal Gendarmerie and Security Police. The Bundespolizei operates across 9 Provincial Police Directorates (Landespolizeidirektionen, LPD), one per Land (Burgenland, Carinthia, Lower Austria, Upper Austria, Salzburg, Styria, Tyrol, Vorarlberg, and Vienna). The Federal Criminal Police Office (BK — Bundeskriminalamt) coordinates federal investigations. The State Protection and Counter-Terrorism Directorate (DSN — Direktion Staatsschutz und Nachrichtendienst) is the domestic intelligence service. Fire services (Feuerwehr) operate at municipal/district level under the 9 Länder. Ambulance services (Rettungsdienst) are managed by the Red Cross, Samariterbund, and Johanniter under Länder supervision. The unified emergency number is 112 (European), with 122 (fire), 133 (police), and 144 (ambulance) still widely used.',
    },
    {
      question: 'How does emergency dispatch work in Austria? What are the Landeswarnzentralen and the BOS-Funk/Tetron network?',
      answer: 'Austria operates multiple emergency numbers: 112 (unified European), 133 (police), 122 (fire), and 144 (ambulance). Police dispatch operates from the 9 Landespolizeidirektionen operations centres. Fire brigades are dispatched from Länder Leitstellen (alarm centres), which also receive 122 calls. The Landeswarnzentralen (LWZ) are Land-level alert and coordination centres for disasters and civil protection. The BOS-Funk network (Behörden und Organisationen mit Sicherheitsaufgaben — Safety Organisations Radio Networks) is the digital radiocommunications network for Austrian emergency services. The network was modernised with TETRA technology (Tetron) — operated under contract with the Tetron consortium — and in 2025-2026 is transitioning to BOS-Funk 2.0 with 4G/5G and emergency broadband technologies. Integrated Dispatch Centres (Integrierte Leitstellen — ILS) exist in several Länder to coordinate police-fire-ambulance from a single centre.',
    },
    {
      question: 'What Smart City and digitalisation projects are active in Austrian public safety?',
      answer: 'Austria has a high level of public sector digitalisation driven by the BMI and the Federal Government\'s digitalisation agency. Vienna (Wien) has the Smart City Wien programme, one of Europe\'s most advanced, with integrated traffic management, urban surveillance connected to Polizei Wien, smart parking, and urban data analytics. The BMLV (Ministry of Defence) and BMI coordinate critical infrastructure protection (KRITIS) under the Critical Infrastructure Protection Act. The ELDIS project (Electronic Documentation and Information System) modernises police incident management systems. Austria actively participates in the Galileo programme (European GNSS) for emergency resource positioning. SIAK (Security Academy) drives police digital training. SaferCity and ITS (Intelligent Transport Systems) projects integrate traffic data, cameras, and urban sensors into Polizei and Länder management platforms.',
    },
    {
      question: 'How is public safety software procured in Austria?',
      answer: 'Austrian public procurement is governed by the Federal Public Procurement Act (Bundesvergabegesetz — BVergG), implementing EU directives. Contracts are published on e-procurement platforms: ANKÖ (Auftragnehmerkataster Österreich) for supplier registration, and the federal procurement portal. Beschaffung Austria GmbH (BBG — Federal Procurement Agency) manages framework contracts for the Austrian federal government — the BBG framework agreement is the most efficient channel for public administration. The BMI directly procures Bundespolizei systems. Länder independently procure their fire and ambulance systems. Large contracts (at or above EU thresholds) appear on TED/OJEU. Austria is a federal system with 9 autonomous Länder in many procurement decisions — especially for fire and ambulance services.',
    },
    {
      question: 'What are the data protection and cybersecurity requirements for public safety software in Austria?',
      answer: 'Public safety software in Austria must comply with GDPR (DSGVO — Datenschutz-Grundverordnung, implemented in the Datenschutzgesetz — DSG 2018). The supervisory authority is the Datenschutzbehörde (DSB). Police systems are additionally subject to the Security Police Act (Sicherheitspolizeigesetz — SPG) and the Federal Act on Processing of Personal Data by Security Authorities (PolDVG). For cybersecurity, CERT.at (Austrian Computer Emergency Response Team) and GovCERT.at are the national incident response teams. NIS2 was implemented in Austria through the NISG (Netz- und Informationssystemsicherheitsgesetz) and its updates. The Rundfunk und Telekom Regulierungs-GmbH (RTR-GmbH) regulates electronic communications. BMI and Bundespolizei systems must meet the Federal Chancellery\'s information security framework and ISO 27001 standards for public administration.',
    },
    {
      question: 'What video surveillance infrastructure does Austria have and how is it regulated?',
      answer: 'Austria regulates video surveillance through the Datenschutzgesetz (DSG 2018) and GDPR, with the Datenschutzbehörde as the supervisory authority. Police surveillance in public spaces requires a specific legal basis under the Security Police Act (§54 SPG). Vienna has Austria\'s most extensive surveillance network — with cameras in the U-Bahn metro, Westbahnhof, Praterstern, and city centres integrated with Polizei Wien. The CÜPLA system protects critical installations. ASFINAG motorway cameras are integrated with traffic and police control systems. Plate recognition (KFZ-Kennzeichenerfassung) is integrated in speed camera systems and police checkpoints. Smart City Wien projects integrate cameras, traffic sensors, and environmental data with AI analytics compliant with DSB guidelines.',
    },
    {
      question: 'Why is KabatOne suited for Austrian Bundespolizei, Leitstellen, and BOS-Funk?',
      answer: 'KabatOne integrates the capabilities that Austria\'s Bundespolizei, Länder Leitstellen, and Landeswarnzentralen need unified: multi-agency CAD dispatch compatible with all 9 Landespolizeidirektionen and regional Leitstellen — with BOS-Funk TETRA/Tetron integration and BOS-Funk 2.0 readiness (4G/5G broadband), automatic incident classification, and police-Feuerwehr-Rettungsdienst coordination, compatible with ILS (Integrierte Leitstellen) (K-Dispatch), urban camera and ANPR/KFZ-Kennzeichenerfassung management with AI analytics compliant with DSG/DSGVO/DSB — with DPIA, §54 SPG legal basis, and retention management (K-Video), and shared GIS situational awareness across Bundespolizei, Länder, Landeswarnzentralen, and BMLV/BMI for disaster and major security operation coordination — with Smart City Wien/ASFINAG integration (K-Safety). EU cloud with DSGVO/DSB and NIS2/NISG/CERT.at compliance. Compatible with BBG/BVergG procurement frameworks. Demo adapted to Austria\'s federal 9-Länder model.',
    },
  ]

  const articleHeadline = es
    ? 'Software de Seguridad Pública para Austria: Bundespolizei, BOS-Funk/Tetron TETRA, 9 Landespolizeidirektionen, DSGVO/DSB y NIS2/NISG'
    : 'Public Safety Software for Austria: Bundespolizei, BOS-Funk/Tetron TETRA, 9 Landespolizeidirektionen, DSGVO/DSB & NIS2/NISG'

  const articleDescription = es
    ? 'Plataforma unificada para la Bundespolizei austriaca y las 9 Landespolizeidirektionen — despacho CAD integrado con BOS-Funk TETRA/Tetron (preparado para BOS-Funk 2.0), gestión de cámaras y ANPR conforme a DSGVO/DSB, y cumplimiento NIS2/NISG con procurement BBG/BVergG.'
    : 'Unified platform for Austrian Bundespolizei and 9 Landespolizeidirektionen — integrated CAD dispatch with BOS-Funk TETRA/Tetron (BOS-Funk 2.0 ready), camera and ANPR management compliant with DSGVO/DSB, and NIS2/NISG compliance with BBG/BVergG procurement.'

  const challenges = es ? [
    {
      icon: '🚔',
      title: 'Modelo federal con 9 Länder y coordinación BMI/Bundespolizei',
      desc: 'Coordinar la Bundespolizei y sus 9 Landespolizeidirektionen con los sistemas de bomberos y ambulancias de los Länder (independientes) a través de los Leitstellen e ILS — con los centros BK y DSN para operaciones de nivel federal.',
    },
    {
      icon: '📡',
      title: 'BOS-Funk TETRA/Tetron y transición BOS-Funk 2.0',
      desc: 'Integrar el despacho CAD con la red BOS-Funk TETRA/Tetron existente mientras se prepara la transición a BOS-Funk 2.0 (4G/5G broadband de emergencias) — garantizando continuidad operativa durante la migración en los 9 Länder.',
    },
    {
      icon: '📷',
      title: 'Smart City Wien, KFZ-Kennzeichenerfassung y DSGVO/DSB',
      desc: 'Gestionar las redes de videovigilancia urbana de Viena y otras ciudades y los sistemas ANPR de ASFINAG con analítica IA conforme a DSGVO/DSB — con base legal §54 SPG, DPIA y las directrices de la Datenschutzbehörde austriaca.',
    },
    {
      icon: '🔒',
      title: 'DSGVO/DSB, NIS2/NISG, SPG/PolDVG y procurement BBG',
      desc: 'Cumplir el DSGVO/DSG, la NIS2 (NISG), la base legal policial SPG/PolDVG, el marco de seguridad del Bundeskanzleramt/ISO 27001 y los requisitos de homologación BOS-Funk, con cloud UE y procurement compatible con BBG/BVergG.',
    },
  ] : [
    {
      icon: '🚔',
      title: 'Federal model with 9 Länder and BMI/Bundespolizei coordination',
      desc: 'Coordinating Bundespolizei and its 9 Landespolizeidirektionen with independent Länder fire and ambulance systems through Leitstellen and ILS centres — with BK and DSN for federal-level operations.',
    },
    {
      icon: '📡',
      title: 'BOS-Funk TETRA/Tetron and BOS-Funk 2.0 transition',
      desc: 'Integrating CAD dispatch with the existing BOS-Funk TETRA/Tetron network while preparing the transition to BOS-Funk 2.0 (4G/5G emergency broadband) — ensuring operational continuity during migration across 9 Länder.',
    },
    {
      icon: '📷',
      title: 'Smart City Wien, KFZ-Kennzeichenerfassung and DSGVO/DSB',
      desc: 'Managing Vienna and city camera surveillance networks and ASFINAG ANPR systems with AI analytics compliant with DSGVO/DSB — with §54 SPG legal basis, DPIA, and Austrian Datenschutzbehörde guidelines.',
    },
    {
      icon: '🔒',
      title: 'DSGVO/DSB, NIS2/NISG, SPG/PolDVG and BBG procurement',
      desc: 'Meeting DSGVO/DSG, NIS2 (NISG), police legal basis SPG/PolDVG, Federal Chancellery/ISO 27001 security framework, and BOS-Funk homologation requirements, with EU cloud and BBG/BVergG-compatible procurement.',
    },
  ]

  const stats = es ? [
    { value: '9', label: 'Landespolizeidirektionen' },
    { value: 'BOS-Funk', label: 'TETRA/Tetron → 2.0 (4G/5G)' },
    { value: '9.1M', label: 'Habitantes, Viena 1.9M' },
    { value: '122/133/144', label: 'Despacho 112 + Números Locales' },
  ] : [
    { value: '9', label: 'Landespolizeidirektionen' },
    { value: 'BOS-Funk', label: 'TETRA/Tetron → 2.0 (4G/5G)' },
    { value: '9.1M', label: 'People, Vienna 1.9M' },
    { value: '122/133/144', label: '112 + Local Emergency Numbers' },
  ]

  const title = es
    ? 'Software de Seguridad Pública para Austria'
    : 'Public Safety Software for Austria'

  const subtitle = es
    ? 'Bundespolizei · 9 Landespolizeidirektionen · BOS-Funk TETRA/Tetron · BK/DSN · DSGVO/DSB · NIS2/NISG · BBG/BVergG'
    : 'Bundespolizei · 9 Landespolizeidirektionen · BOS-Funk TETRA/Tetron · BK/DSN · DSGVO/DSB · NIS2/NISG · BBG/BVergG'

  const intro = es
    ? 'Austria — 9.1 millones de habitantes en una de las economías más prósperas de Europa Central — opera la Bundespolizei en 9 Landespolizeidirektionen y la red BOS-Funk TETRA/Tetron como infraestructura de radiocomunicaciones de emergencia para todos los servicios. Con Viena como capital y uno de los programas Smart City más avanzados de Europa, Austria combina un modelo federal descentralizado con requisitos estrictos de DSGVO/DSB y NIS2/NISG. KabatOne proporciona la plataforma CAD, vídeo y GIS integrada con BOS-Funk, conforme a DSGVO y preparada para la transición a BOS-Funk 2.0.'
    : 'Austria — 9.1 million people in one of Central Europe\'s most prosperous economies — operates Bundespolizei across 9 Landespolizeidirektionen and the BOS-Funk TETRA/Tetron network as the emergency radiocommunications infrastructure for all services. With Vienna as capital and one of Europe\'s most advanced Smart City programmes, Austria combines a decentralised federal model with strict DSGVO/DSB and NIS2/NISG requirements. KabatOne delivers the CAD, video, and GIS platform integrated with BOS-Funk, DSGVO-compliant, and ready for the BOS-Funk 2.0 transition.'

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleSchema(articleHeadline, articleDescription, pageUrl, '2026-05-19'),
            faqPageSchema(faqs),
            breadcrumbSchema(breadcrumbs),
          ]),
        }}
      />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%)', color: '#fff', padding: '80px 24px 60px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: '#93c5fd', marginBottom: 12 }}>
            {es ? 'Guía de Mercado · Austria' : 'Market Guide · Austria'}
          </p>
          <h1 style={{ fontSize: 'clamp(28px,5vw,48px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
            {title}
          </h1>
          <p style={{ fontSize: 16, color: '#93c5fd', marginBottom: 24, fontWeight: 500 }}>{subtitle}</p>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: '#cbd5e1', maxWidth: 720 }}>{intro}</p>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/demo" style={{ background: ACCENT, color: '#fff', padding: '12px 28px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
              {es ? 'Solicitar Demo' : 'Request Demo'}
            </Link>
            <Link href={es ? '/es/resources/' : '/resources/'} style={{ border: '1px solid #475569', color: '#cbd5e1', padding: '12px 28px', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>
              {es ? 'Ver Todos los Recursos' : 'View All Resources'}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#f8fafc', padding: '36px 24px', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 24 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: ACCENT }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section style={{ padding: '64px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>
            {es ? 'Desafíos Clave del Mercado Austriaco' : 'Key Challenges in the Austrian Market'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Los requisitos operativos únicos que definen la seguridad pública en Austria.'
              : 'The unique operational requirements that define public safety in Austria.'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {challenges.map((c) => (
              <div key={c.title} style={{ border: '1px solid #e2e8f0', borderRadius: 12, padding: '24px', background: '#f8fafc' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How KabatOne Works */}
      <section style={{ padding: '64px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>
            {es ? 'Cómo KabatOne Apoya a los Servicios Austriacos de Seguridad Pública' : 'How KabatOne Supports Austrian Public Safety Services'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Una plataforma unificada adaptada al modelo federal de 9 Länder, la red BOS-Funk TETRA y Smart City Wien.'
              : 'One unified platform adapted to the federal 9-Länder model, BOS-Funk TETRA network, and Smart City Wien.'}
          </p>
          <div style={{ display: 'grid', gap: 20 }}>
            {[
              {
                product: 'K-Dispatch',
                color: '#eff6ff',
                border: '#bfdbfe',
                icon: '🚨',
                title: es ? 'Despacho CAD 112/122/133/144 + integración BOS-Funk TETRA/Tetron' : '112/122/133/144 CAD Dispatch + BOS-Funk TETRA/Tetron Integration',
                desc: es
                  ? 'CAD multiagencia compatible con las 9 LPD y los Leitstellen de los Länder — integración BOS-Funk TETRA/Tetron con preparación para BOS-Funk 2.0 (4G/5G broadband), clasificación automática de incidentes, asignación de recursos Bundespolizei-Feuerwehr-Rettungsdienst y coordinación BK/DSN para operaciones federales. Compatible con los centros ILS (Integrierte Leitstellen) de los Länder.'
                  : 'Multi-agency CAD compatible with all 9 LPD and Länder Leitstellen — BOS-Funk TETRA/Tetron integration with BOS-Funk 2.0 readiness (4G/5G broadband), automatic incident classification, Bundespolizei-Feuerwehr-Rettungsdienst resource assignment, and BK/DSN coordination for federal operations. Compatible with Länder ILS (Integrierte Leitstellen) centres.',
              },
              {
                product: 'K-Video',
                color: '#f0fdf4',
                border: '#bbf7d0',
                icon: '📷',
                title: es ? 'Smart City Wien, KFZ-Kennzeichenerfassung y cumplimiento DSGVO/DSB' : 'Smart City Wien, KFZ-Kennzeichenerfassung and DSGVO/DSB Compliance',
                desc: es
                  ? 'Gestión unificada de cámaras urbanas de Viena (U-Bahn, Westbahnhof, Praterstern), ASFINAG y sistemas ANPR/KFZ-Kennzeichenerfassung con analítica IA. Cumplimiento nativo de DSGVO/DSG: base legal §54 SPG, DPIA, gestión de retención y acceso diferenciado por Land y fuerza policial. Compatible con la plataforma Smart City Wien y los sistemas CÜPLA de protección de infraestructuras críticas.'
                  : 'Unified management of Vienna cameras (U-Bahn, Westbahnhof, Praterstern), ASFINAG, and ANPR/KFZ-Kennzeichenerfassung systems with AI analytics. Native DSGVO/DSG compliance: §54 SPG legal basis, DPIA, retention management, and differentiated access by Land and police force. Compatible with Smart City Wien platform and CÜPLA critical infrastructure protection systems.',
              },
              {
                product: 'K-Safety',
                color: '#fefce8',
                border: '#fde68a',
                icon: '🗺️',
                title: es ? 'Conciencia situacional GIS para los 9 Länder y operaciones de catástrofes' : 'GIS Situational Awareness for 9 Länder and Disaster Operations',
                desc: es
                  ? 'Conciencia situacional GIS compartida entre la Bundespolizei, los 9 Länder, las Landeswarnzentralen (LWZ) y el BMI/BMLV — para coordinación en catástrofes alpinas (aludes, inundaciones, incendios forestales en los Alpes orientales) y operaciones de seguridad de grandes eventos (Viena Opera Ball, Nueva Año en el Graben, cumbre EU en Viena). Integración con datos ZAMG (tiempo/alertas) y los sistemas de información de catástrofes del BMI.'
                  : 'Shared GIS situational awareness across Bundespolizei, 9 Länder, Landeswarnzentralen (LWZ), and BMI/BMLV — for coordination in alpine disasters (avalanches, floods, Eastern Alps forest fires) and major event security operations (Vienna Opera Ball, New Year at the Graben, EU summits in Vienna). Integration with ZAMG weather/alert data and BMI disaster information systems.',
              },
            ].map((item) => (
              <div key={item.product} style={{ background: item.color, border: `1px solid ${item.border}`, borderRadius: 12, padding: '24px', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 32, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{ background: ACCENT, color: '#fff', borderRadius: 6, padding: '2px 10px', fontSize: 12, fontWeight: 700 }}>{item.product}</span>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', margin: 0 }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '64px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>
            {es ? 'Preguntas Frecuentes — Seguridad Pública en Austria' : 'FAQ — Public Safety in Austria'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Respuestas a las preguntas más comunes sobre el mercado austriaco de seguridad pública.'
              : 'Answers to the most common questions about the Austrian public safety market.'}
          </p>
          <div style={{ display: 'grid', gap: 16 }}>
            {faqs.map((faq) => (
              <div key={faq.question} style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: '20px 24px', background: '#f8fafc' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>{faq.question}</h3>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section style={{ padding: '48px 24px', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: '#0f172a' }}>
            {es ? 'Guías de Mercado Relacionadas' : 'Related Market Guides'}
          </h2>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              { href: es ? '/es/resources/public-safety-software-germany/' : '/resources/public-safety-software-germany/', label: es ? 'Alemania' : 'Germany' },
              { href: es ? '/es/resources/public-safety-software-switzerland/' : '/resources/public-safety-software-switzerland/', label: es ? 'Suiza' : 'Switzerland' },
              { href: es ? '/es/resources/public-safety-software-netherlands/' : '/resources/public-safety-software-netherlands/', label: es ? 'Países Bajos' : 'Netherlands' },
              { href: es ? '/es/resources/public-safety-software-belgium/' : '/resources/public-safety-software-belgium/', label: es ? 'Bélgica' : 'Belgium' },
              { href: es ? '/es/resources/public-safety-software-sweden/' : '/resources/public-safety-software-sweden/', label: es ? 'Suecia' : 'Sweden' },
              { href: es ? '/es/resources/public-safety-software-italy/' : '/resources/public-safety-software-italy/', label: es ? 'Italia' : 'Italy' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '8px 16px', fontSize: 14, color: ACCENT, fontWeight: 600, textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        es={es}
        h2={es ? 'Solicita una Demo para la Bundespolizei, los Leitstellen o el BMI de Austria' : 'Request a Demo for Austrian Bundespolizei, Leitstellen, or BMI'}
        subtitle={es ? 'KabatOne integra el despacho CAD 112/122/133/144 para las 9 Landespolizeidirektionen y los Leitstellen de los Länder austriacos — con integración BOS-Funk TETRA/Tetron y preparación BOS-Funk 2.0, gestión de cámaras/ANPR conforme a DSGVO/DSB, y conciencia situacional GIS con datos ZAMG para catástrofes alpinas y grandes eventos en Viena. Cloud EU con NIS2/NISG y procurement compatible con BBG/BVergG.' : 'KabatOne integrates 112/122/133/144 CAD dispatch for all 9 Austrian Landespolizeidirektionen and Länder Leitstellen — with BOS-Funk TETRA/Tetron integration and BOS-Funk 2.0 readiness, DSGVO/DSB-compliant camera/ANPR management, and GIS situational awareness with ZAMG data for alpine disasters and major Vienna events. EU cloud with NIS2/NISG and BBG/BVergG-compatible procurement.'}
      />
      <Footer es={es} />
    </>
  )
}
