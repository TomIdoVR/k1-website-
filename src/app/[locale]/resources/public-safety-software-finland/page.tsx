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
  return generatePageMetadata('publicSafetySoftwareFinland', locale)
}

export default async function PublicSafetySoftwareFinlandPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-finland/`
    : `${baseUrl}/resources/public-safety-software-finland/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Finlandia' : 'Public Safety Software — Finland', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Finlandia?',
      answer: 'Finlandia organiza su seguridad pública bajo el Ministerio del Interior (Sisäministeriö). La Policía de Finlandia (Poliisi) opera en 11 distritos policiales (poliisilaitos) bajo la Dirección Nacional de Policía (Poliisihallitus — POHA). El Servicio de Seguridad e Inteligencia (Supo — Suojelupoliisi) gestiona el contraterrorismo. El servicio de rescate (Pelastustoimi) opera en 22 departamentos a nivel regional bajo la supervisión del Departamento de Rescate del Ministerio del Interior. Los servicios de ambulancias (ensihoitopalvelu) son gestionados por los distritos de bienestar (hyvinvointialueet) — las 21 áreas creadas en la reforma de 2023. La Agencia de Gestión de Emergencias (Hätäkeskuslaitos) opera 6 centros de emergencias (hätäkeskus) que gestionan el número único 112 para policía, bomberos y ambulancias. La red VIRVE es la red TETRA de radiocomunicaciones digitales para todos los servicios de emergencia finlandeses. Finlandia tiene una cultura de preparación civil fuerte dada su frontera de 1,340 km con Rusia.',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Finlandia? ¿Qué son el Hätäkeskuslaitos y el VIRVE?',
      answer: 'Finlandia opera el número europeo 112 a través de los 6 centros de emergencias (hätäkeskus) del Hätäkeskuslaitos (Agencia de Gestión de Emergencias). Los hätäkeskus son centros multiagencia que reciben todas las llamadas de emergencia y despachan a policía, bomberos y ambulancias — un modelo pionero de despacho integrado. El despacho policial se realiza desde los hätäkeskus en coordinación con los centros operativos de los 11 distritos policiales (poliisilaitos). La red VIRVE (VIRanomaisradioVErkko — Red de Radio de Autoridades) es la red TETRA finlandesa para todos los servicios de emergencia. El proyecto VIRVE 2.0 está en curso para modernizar la red combinando TETRA con tecnología 4G/5G, con plena capacidad prevista para 2027-2030. La reforma de distritos de bienestar de 2023 reorganizó la coordinación de la atención prehospitalaria con los nuevos hyvinvointialueet.',
    },
    {
      question: '¿Qué proyectos de digitalización y Smart City están activos en seguridad pública en Finlandia?',
      answer: 'Finlandia tiene uno de los niveles más altos de digitalización del mundo. El programa KEJO (Kenttäjohtojärjestelmä — Sistema de Mando de Campo) es el sistema de gestión de recursos en el terreno para la policía, pelastustoimi y ambulancias — integrado con el Hätäkeskuslaitos para despacho y seguimiento de unidades. La Agencia Policial Digital (Poliisiammattikorkeakoulu/POHA digital unit) impulsa la modernización TIC. El VIRVE 2.0 integrará TETRA con 4G/5G para comunicaciones broadband de emergencia. Helsinki Smart City tiene proyectos activos de videovigilancia urbana, análisis de tráfico con IA y gestión de datos abiertos. El programa Aurora AI (inteligencia artificial del Gobierno finlandés) incluye aplicaciones para servicios de emergencia. Finlandia es pionera en IA para análisis de texto legal y triage de llamadas de emergencia con IA.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Finlandia?',
      answer: 'La contratación pública en Finlandia se rige por la Ley de Contratación Pública (Laki julkisista hankinnoista ja käyttöoikeussopimuksista, 1397/2016), implementando las directivas europeas. Los contratos se publican en HILMA (hankintailmoitukset.fi), el portal nacional de contratación, y en TED/OJEU para contratos mayores. La Poliisihallitus licita los sistemas nacionales de la policía (KEJO, PATJA — sistema de registros policiales, sistemas de despacho). El Hätäkeskuslaitos licita los sistemas de los hätäkeskus. Los distritos de bienestar (hyvinvointialueet) licitan los sistemas de ambulancias. Los municipios/regiones licitan los sistemas del pelastustoimi. Hansel Oy es la central de compras del Estado finlandés — sus acuerdos marco (puitesopimukset) agilizan la adquisición de TIC para múltiples organismos. Las empresas del EEE pueden participar directamente en los procedimientos de contratación.',
    },
    {
      question: '¿Cuáles son los requisitos de protección de datos y ciberseguridad para software policial en Finlandia?',
      answer: 'El software de seguridad pública en Finlandia debe cumplir el RGPD (implementado en la Ley de Protección de Datos — Tietosuojalaki 1050/2018). La autoridad supervisora es la Oficina del Comisionado de Protección de Datos (Tietosuojavaltuutetun toimisto). Los sistemas policiales están sujetos a la Ley de Datos Personales en la Actividad Policial (Laki henkilötietojen käsittelystä poliisitoimessa 616/2019). Para ciberseguridad, el Centro de Ciberseguridad de Finlandia (Kyberturvallisuuskeskus) del Traficom (Liikenne- ja viestintävirasto) es la autoridad nacional de ciberseguridad y CERT/CC finlandés. La NIS2 se implementa en Finlandia a través de la nueva Ley de Ciberseguridad (Kyberturvallisuuslaki, en vigor 2024). Los sistemas conectados a VIRVE tienen requisitos de homologación de la Dirección Nacional de Policía (POHA). La Ley de Seguridad de la Información de la Administración del Estado (Laki julkisen hallinnon tiedonhallinnasta) impone requisitos de clasificación y almacenamiento de datos gubernamentales.',
    },
    {
      question: '¿Qué infraestructura de videovigilancia tiene Finlandia?',
      answer: 'Finlandia regula la videovigilancia mediante la Ley de Seguridad Privada (Laki yksityisistä turvallisuuspalveluista), el RGPD y las directrices del Tietosuojavaltuutettu. La videovigilancia policial en espacios públicos requiere base legal específica. Helsinki tiene la mayor red de cámaras de Finlandia — integrada en los centros operativos de la Policía de Helsinki (Helsingin poliisilaitos) y el Hätäkeskus de Helsinki. El sistema ANPR (automaattinen rekisterikilventunnistus) está integrado en las autopistas principales (Väylä) y en puntos de control policial a nivel nacional. El metro de Helsinki (HSL/HRT) y los trenes (VR) tienen sistemas de cámaras integrados con la policía. Los municipios, especialmente Helsinki, Espoo y Tampere, operan redes de cámaras urbanas para gestión de tráfico y seguridad. Helsinki Smart City integra cámaras, sensores de tráfico y datos ambientales con analítica de IA cumpliendo las directrices del Tietosuojavaltuutettu.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la Poliisi finlandesa, el Hätäkeskuslaitos y el Pelastustoimi?',
      answer: 'KabatOne integra las capacidades que la Poliisi finlandesa, los 6 hätäkeskus del Hätäkeskuslaitos y el Pelastustoimi necesitan unificadas: despacho CAD multiagencia compatible con el modelo de despacho integrado del Hätäkeskuslaitos (todos los servicios desde 6 centros 112) — con integración VIRVE TETRA y preparación VIRVE 2.0, clasificación automática de incidentes y asignación de recursos policía-pelastustoimi-ensihoito (K-Dispatch), gestión de cámaras urbanas y ANPR con analítica IA conforme a Tietosuojalaki/Tietosuojavaltuutettu — con DPIA, limitación de finalidad y base legal policial específica (K-Video), y conciencia situacional GIS compartida entre los 11 distritos policiales, 22 departamentos del pelastustoimi, 21 hyvinvointialueet y el Hätäkeskuslaitos (K-Safety). Cloud EU con cumplimiento RGPD/Tietosuojavaltuutettu y NIS2/Kyberturvallisuuskeskus. Demo adaptada al modelo integrado del Hätäkeskuslaitos y el programa KEJO.',
    },
  ] : [
    {
      question: 'How is public safety organised in Finland?',
      answer: 'Finland organises its public safety under the Ministry of the Interior (Sisäministeriö). The Finnish Police (Poliisi) operates across 11 police districts (poliisilaitos) under the National Police Board (Poliisihallitus — POHA). The Security Intelligence Service (Supo — Suojelupoliisi) handles counter-terrorism. The rescue service (Pelastustoimi) operates across 22 regional departments supervised by the Ministry of Interior\'s Rescue Department. Ambulance services (ensihoitopalvelu) are managed by the wellbeing services counties (hyvinvointialueet) — the 21 areas created in the 2023 reform. The Emergency Response Centre Administration (Hätäkeskuslaitos) operates 6 emergency centres (hätäkeskus) managing the 112 single emergency number for police, fire, and ambulance. The VIRVE network is the TETRA digital radiocommunications network for all Finnish emergency services. Finland has a strong civil preparedness culture given its 1,340 km border with Russia.',
    },
    {
      question: 'How does emergency dispatch work in Finland? What are Hätäkeskuslaitos and VIRVE?',
      answer: 'Finland operates the European 112 number through 6 emergency centres (hätäkeskus) of the Hätäkeskuslaitos (Emergency Response Centre Administration). Hätäkeskus centres are multi-agency centres receiving all emergency calls and dispatching police, fire, and ambulance — a pioneer integrated dispatch model. Police dispatch is performed from hätäkeskus in coordination with the 11 police district operations centres (poliisilaitos). The VIRVE network (VIRanomaisradioVErkko — Authorities Radio Network) is the Finnish TETRA network for all emergency services. The VIRVE 2.0 project is modernising the network by combining TETRA with 4G/5G technology, with full capacity expected by 2027-2030. The 2023 wellbeing county reform reorganised pre-hospital care coordination with the new hyvinvointialueet.',
    },
    {
      question: 'What digitalisation and Smart City projects are active in Finnish public safety?',
      answer: 'Finland has one of the world\'s highest digitalisation levels. The KEJO programme (Kenttäjohtojärjestelmä — Field Command System) is the field resource management system for police, pelastustoimi, and ambulance — integrated with Hätäkeskuslaitos for dispatch and unit tracking. POHA\'s digital unit drives ICT modernisation. VIRVE 2.0 will integrate TETRA with 4G/5G for emergency broadband communications. Helsinki Smart City has active projects for urban surveillance, AI traffic analysis, and open data management. The Aurora AI programme (Finnish Government AI initiative) includes applications for emergency services. Finland is a pioneer in AI for legal text analysis and AI-powered emergency call triage.',
    },
    {
      question: 'How is public safety software procured in Finland?',
      answer: 'Finnish public procurement is governed by the Public Procurement Act (Laki julkisista hankinnoista ja käyttöoikeussopimuksista, 1397/2016), implementing EU directives. Contracts are published on HILMA (hankintailmoitukset.fi), the national procurement portal, and on TED/OJEU for larger contracts. Poliisihallitus procures national police systems (KEJO, PATJA police records system, dispatch systems). Hätäkeskuslaitos procures hätäkeskus systems. Wellbeing services counties (hyvinvointialueet) procure ambulance systems. Municipalities/regions procure pelastustoimi systems. Hansel Oy is the Finnish State central purchasing body — its framework agreements (puitesopimukset) streamline ICT procurement across multiple agencies. EEA companies can participate directly in procurement procedures.',
    },
    {
      question: 'What are the data protection and cybersecurity requirements for public safety software in Finland?',
      answer: 'Public safety software in Finland must comply with GDPR (implemented in the Data Protection Act — Tietosuojalaki 1050/2018). The supervisory authority is the Office of the Data Protection Ombudsman (Tietosuojavaltuutetun toimisto). Police systems are additionally subject to the Act on Processing of Personal Data in Police Activities (Laki henkilötietojen käsittelystä poliisitoimessa 616/2019). For cybersecurity, the Finnish Cybersecurity Centre (Kyberturvallisuuskeskus) of Traficom (Liikenne- ja viestintävirasto) is the national cybersecurity authority and Finnish CERT/CC. NIS2 is implemented in Finland through the new Cybersecurity Act (Kyberturvallisuuslaki, in force 2024). VIRVE-connected systems have POHA homologation requirements. The Act on Information Management in Public Administration (Laki julkisen hallinnon tiedonhallinnasta) imposes classification and storage requirements for government data.',
    },
    {
      question: 'What video surveillance infrastructure does Finland have?',
      answer: 'Finland regulates video surveillance through the Private Security Services Act (Laki yksityisistä turvallisuuspalveluista), GDPR, and Tietosuojavaltuutettu guidelines. Police surveillance in public spaces requires a specific legal basis. Helsinki has Finland\'s largest camera network — integrated with Helsinki Police (Helsingin poliisilaitos) operations centres and the Helsinki Hätäkeskus. The ANPR system (automaattinen rekisterikilventunnistus) is integrated on major motorways (Väylä) and at police checkpoints nationally. Helsinki Metro (HSL/HRT) and railway (VR) camera systems are connected to police. Municipalities — especially Helsinki, Espoo, and Tampere — operate urban camera networks for traffic management and safety. Helsinki Smart City integrates cameras, traffic sensors, and environmental data with AI analytics compliant with Tietosuojavaltuutettu guidelines.',
    },
    {
      question: 'Why is KabatOne suited for Finnish Poliisi, Hätäkeskuslaitos, and Pelastustoimi?',
      answer: 'KabatOne integrates the capabilities that Finnish Poliisi, the 6 Hätäkeskuslaitos hätäkeskus centres, and Pelastustoimi need unified: multi-agency CAD dispatch compatible with the Hätäkeskuslaitos integrated dispatch model (all services from 6 × 112 centres) — with VIRVE TETRA integration and VIRVE 2.0 readiness, automatic incident classification, and police-pelastustoimi-ensihoito resource assignment (K-Dispatch), urban camera and ANPR management with AI analytics compliant with Tietosuojalaki/Tietosuojavaltuutettu — with DPIA, purpose limitation, and specific police legal basis (K-Video), and shared GIS situational awareness across 11 police districts, 22 pelastustoimi departments, 21 hyvinvointialueet, and Hätäkeskuslaitos (K-Safety). EU cloud with GDPR/Tietosuojavaltuutettu and NIS2/Kyberturvallisuuskeskus compliance. Demo adapted to the Hätäkeskuslaitos integrated model and the KEJO programme.',
    },
  ]

  const articleHeadline = es
    ? 'Software de Seguridad Pública para Finlandia: Poliisi 11 Distritos, Hätäkeskuslaitos 112, VIRVE TETRA, Pelastustoimi y Tietosuojalaki'
    : 'Public Safety Software for Finland: Poliisi 11 Districts, Hätäkeskuslaitos 112, VIRVE TETRA, Pelastustoimi & Tietosuojalaki'

  const articleDescription = es
    ? 'Plataforma unificada para los 11 distritos de la Poliisi finlandesa, los 6 centros hätäkeskus del Hätäkeskuslaitos y el Pelastustoimi — despacho CAD integrado con VIRVE TETRA/VIRVE 2.0, gestión de cámaras conforme a Tietosuojalaki/Tietosuojavaltuutettu, y cumplimiento NIS2/Kyberturvallisuuskeskus.'
    : 'Unified platform for Finland\'s 11 Poliisi districts, 6 Hätäkeskuslaitos hätäkeskus centres, and Pelastustoimi — integrated CAD dispatch with VIRVE TETRA/VIRVE 2.0, camera management compliant with Tietosuojalaki/Tietosuojavaltuutettu, and NIS2/Kyberturvallisuuskeskus compliance.'

  const challenges = es ? [
    {
      icon: '📡',
      title: 'VIRVE TETRA, VIRVE 2.0 y modelo Hätäkeskuslaitos',
      desc: 'Integrar el despacho CAD con la red VIRVE TETRA (con modernización VIRVE 2.0 a 4G/5G en curso) y el modelo pionero del Hätäkeskuslaitos — 6 centros 112 multiagencia que unifican policía-bomberos-ambulancias — garantizando continuidad operativa durante la transición.',
    },
    {
      icon: '🏙️',
      title: 'Helsinki Smart City, Aurora AI y KEJO digital',
      desc: 'Aprovechar el alto nivel de digitalización finlandés (Aurora AI, Helsinki Smart City, programa KEJO) para integrar cámaras urbanas, ANPR, sensores IoT y despacho con analítica IA — cumpliendo el marco del Tietosuojavaltuutettu y el nuevo Kyberturvallisuuslaki/NIS2.',
    },
    {
      icon: '📷',
      title: 'Videovigilancia ANPR y cumplimiento Tietosuojavaltuutettu',
      desc: 'Gestionar cámaras urbanas (Helsinki, Espoo, Tampere) y sistemas ANPR de autopistas/control bajo Tietosuojalaki/RGPD y las directrices del Tietosuojavaltuutettu — con DPIA, base legal policial específica bajo la Laki henkilötietojen käsittelystä poliisitoimessa y retención RGPD.',
    },
    {
      icon: '🔒',
      title: 'NIS2/Kyberturvallisuuslaki, Tietosuojalaki y homologación VIRVE',
      desc: 'Cumplir el nuevo Kyberturvallisuuslaki finlandés (NIS2), la Ley de Protección de Datos (Tietosuojalaki), la Laki julkisen hallinnon tiedonhallinnasta para datos gubernamentales y los requisitos de homologación POHA para sistemas VIRVE-conectados, con cloud UE.',
    },
  ] : [
    {
      icon: '📡',
      title: 'VIRVE TETRA, VIRVE 2.0 and Hätäkeskuslaitos model',
      desc: 'Integrating CAD dispatch with the VIRVE TETRA network (with ongoing VIRVE 2.0 modernisation to 4G/5G) and the pioneer Hätäkeskuslaitos model — 6 multi-agency 112 centres unifying police-fire-ambulance — ensuring operational continuity during the transition.',
    },
    {
      icon: '🏙️',
      title: 'Helsinki Smart City, Aurora AI and KEJO digitalisation',
      desc: 'Leveraging Finland\'s high digitalisation level (Aurora AI, Helsinki Smart City, KEJO programme) to integrate urban cameras, ANPR, IoT sensors, and dispatch with AI analytics — compliant with the Tietosuojavaltuutettu framework and the new Kyberturvallisuuslaki/NIS2.',
    },
    {
      icon: '📷',
      title: 'Surveillance ANPR and Tietosuojavaltuutettu compliance',
      desc: 'Managing urban cameras (Helsinki, Espoo, Tampere) and motorway/checkpoint ANPR under Tietosuojalaki/GDPR and Tietosuojavaltuutettu guidelines — with DPIA, specific police legal basis under Laki henkilötietojen käsittelystä poliisitoimessa, and GDPR retention.',
    },
    {
      icon: '🔒',
      title: 'NIS2/Kyberturvallisuuslaki, Tietosuojalaki and VIRVE homologation',
      desc: 'Meeting the new Finnish Kyberturvallisuuslaki (NIS2), the Data Protection Act (Tietosuojalaki), the Act on Information Management in Public Administration for government data, and POHA homologation requirements for VIRVE-connected systems, with EU cloud.',
    },
  ]

  const stats = es ? [
    { value: '11', label: 'Distritos Poliisi (Poliisilaitos)' },
    { value: '6', label: 'Centros Hätäkeskus (112)' },
    { value: '5.6M', label: 'Habitantes, 338K km²' },
    { value: 'VIRVE 2.0', label: 'TETRA + 4G/5G en curso' },
  ] : [
    { value: '11', label: 'Poliisi Districts (Poliisilaitos)' },
    { value: '6', label: 'Hätäkeskus Centres (112)' },
    { value: '5.6M', label: 'People, 338K km²' },
    { value: 'VIRVE 2.0', label: 'TETRA + 4G/5G ongoing' },
  ]

  const title = es
    ? 'Software de Seguridad Pública para Finlandia'
    : 'Public Safety Software for Finland'

  const subtitle = es
    ? 'Poliisi 11 Distritos · Hätäkeskuslaitos 6×112 · VIRVE TETRA/2.0 · Pelastustoimi · Tietosuojalaki/Tietosuojavaltuutettu · NIS2/Kyberturvallisuuskeskus'
    : 'Poliisi 11 Districts · Hätäkeskuslaitos 6×112 · VIRVE TETRA/2.0 · Pelastustoimi · Tietosuojalaki/Tietosuojavaltuutettu · NIS2/Kyberturvallisuuskeskus'

  const intro = es
    ? 'Finlandia — 5.6 millones de habitantes en 338,000 km² con frontera de 1,340 km con Rusia — opera la Poliisi en 11 distritos y el Hätäkeskuslaitos, el modelo de despacho 112 multiagencia más integrado de Europa con 6 centros. La red VIRVE TETRA conecta todos los servicios de emergencia mientras el proyecto VIRVE 2.0 moderniza las comunicaciones hacia 4G/5G. KabatOne proporciona la plataforma CAD, vídeo y GIS adaptada al modelo Hätäkeskuslaitos, integrada con VIRVE y conforme a Tietosuojalaki/NIS2.'
    : 'Finland — 5.6 million people across 338,000 km² with a 1,340 km border with Russia — operates Poliisi across 11 districts and the Hätäkeskuslaitos, Europe\'s most integrated 112 multi-agency dispatch model with 6 centres. The VIRVE TETRA network connects all emergency services while the VIRVE 2.0 project modernises communications toward 4G/5G. KabatOne delivers the CAD, video, and GIS platform adapted to the Hätäkeskuslaitos model, integrated with VIRVE, and compliant with Tietosuojalaki/NIS2.'

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
            {es ? 'Guía de Mercado · Finlandia' : 'Market Guide · Finland'}
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
            {es ? 'Desafíos Clave del Mercado Finlandés' : 'Key Challenges in the Finnish Market'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Los requisitos operativos únicos que definen la seguridad pública en Finlandia.'
              : 'The unique operational requirements that define public safety in Finland.'}
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
            {es ? 'Cómo KabatOne Apoya a los Servicios Finlandeses de Seguridad Pública' : 'How KabatOne Supports Finnish Public Safety Services'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Una plataforma unificada adaptada al modelo Hätäkeskuslaitos, la red VIRVE y el alto nivel de digitalización finlandés.'
              : 'One unified platform adapted to the Hätäkeskuslaitos model, VIRVE network, and Finland\'s high digitalisation standard.'}
          </p>
          <div style={{ display: 'grid', gap: 20 }}>
            {[
              {
                product: 'K-Dispatch',
                color: '#eff6ff',
                border: '#bfdbfe',
                icon: '🚨',
                title: es ? 'Despacho CAD 112 + integración VIRVE TETRA/VIRVE 2.0' : '112 CAD Dispatch + VIRVE TETRA/VIRVE 2.0 Integration',
                desc: es
                  ? 'CAD multiagencia compatible con el modelo de despacho integrado del Hätäkeskuslaitos (6 centros 112 unificados) — integración VIRVE TETRA con preparación para VIRVE 2.0 (TETRA + 4G/5G broadband), clasificación automática de incidentes y asignación de recursos policía-pelastustoimi-ensihoito. Compatible con el programa KEJO de gestión de recursos en el terreno.'
                  : 'Multi-agency CAD compatible with the Hätäkeskuslaitos integrated dispatch model (6 unified 112 centres) — VIRVE TETRA integration with VIRVE 2.0 readiness (TETRA + 4G/5G broadband), automatic incident classification, and police-pelastustoimi-ensihoito resource assignment. Compatible with the KEJO field resource management programme.',
              },
              {
                product: 'K-Video',
                color: '#f0fdf4',
                border: '#bbf7d0',
                icon: '📷',
                title: es ? 'Cámaras Smart City, ANPR y cumplimiento Tietosuojavaltuutettu' : 'Smart City Cameras, ANPR and Tietosuojavaltuutettu Compliance',
                desc: es
                  ? 'Gestión unificada de cámaras urbanas (Helsinki Smart City, redes de Espoo/Tampere) y sistemas ANPR de autopistas con analítica IA. Cumplimiento nativo de Tietosuojalaki/RGPD: DPIA integrada, base legal policial específica bajo la Laki henkilötietojen käsittelystä poliisitoimessa, gestión de retención y acceso diferenciado. Compatible con la plataforma Aurora AI del gobierno finlandés.'
                  : 'Unified management of urban cameras (Helsinki Smart City, Espoo/Tampere networks) and motorway ANPR systems with AI analytics. Native Tietosuojalaki/GDPR compliance: integrated DPIA, specific police legal basis under Laki henkilötietojen käsittelystä poliisitoimessa, retention management, and differentiated access. Compatible with the Finnish government\'s Aurora AI platform.',
              },
              {
                product: 'K-Safety',
                color: '#fefce8',
                border: '#fde68a',
                icon: '🗺️',
                title: es ? 'Conciencia situacional GIS para coordinación Hätäkeskuslaitos y preparación civil' : 'GIS Situational Awareness for Hätäkeskuslaitos Coordination and Civil Preparedness',
                desc: es
                  ? 'Conciencia situacional GIS compartida entre los 11 distritos policiales, 22 departamentos del pelastustoimi, 21 hyvinvointialueet (ensihoito) y los 6 hätäkeskus del Hätäkeskuslaitos — para coordinación en emergencias de gran escala y operaciones en las extensas zonas rurales y forestales de Finlandia. Vista de mando con posicionamiento VIRVE en tiempo real, capas de mapa del SYKE (Instituto Ambiental de Finlandia) y alertas de preparación civil.'
                  : 'Shared GIS situational awareness across 11 police districts, 22 pelastustoimi departments, 21 hyvinvointialueet (ensihoito), and 6 Hätäkeskuslaitos hätäkeskus centres — for coordination in large-scale emergencies and operations in Finland\'s extensive rural and forest areas. Command view with real-time VIRVE positioning, SYKE (Finnish Environment Institute) map layers, and civil preparedness alerts.',
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
            {es ? 'Preguntas Frecuentes — Seguridad Pública en Finlandia' : 'FAQ — Public Safety in Finland'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Respuestas a las preguntas más comunes sobre el mercado finlandés de seguridad pública.'
              : 'Answers to the most common questions about the Finnish public safety market.'}
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
              { href: es ? '/es/resources/public-safety-software-sweden/' : '/resources/public-safety-software-sweden/', label: es ? 'Suecia' : 'Sweden' },
              { href: es ? '/es/resources/public-safety-software-norway/' : '/resources/public-safety-software-norway/', label: es ? 'Noruega' : 'Norway' },
              { href: es ? '/es/resources/public-safety-software-denmark/' : '/resources/public-safety-software-denmark/', label: es ? 'Dinamarca' : 'Denmark' },
              { href: es ? '/es/resources/public-safety-software-germany/' : '/resources/public-safety-software-germany/', label: es ? 'Alemania' : 'Germany' },
              { href: es ? '/es/resources/public-safety-software-poland/' : '/resources/public-safety-software-poland/', label: es ? 'Polonia' : 'Poland' },
              { href: es ? '/es/resources/public-safety-software-netherlands/' : '/resources/public-safety-software-netherlands/', label: es ? 'Países Bajos' : 'Netherlands' },
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
        h2={es ? 'Solicita una Demo para la Poliisi, el Hätäkeskuslaitos o el Pelastustoimi de Finlandia' : 'Request a Demo for Finnish Poliisi, Hätäkeskuslaitos, or Pelastustoimi'}
        subtitle={es ? 'KabatOne integra el despacho CAD 112 compatible con el modelo integrado del Hätäkeskuslaitos (6 centros multiagencia) — con integración VIRVE TETRA y preparación VIRVE 2.0 (4G/5G), gestión de cámaras/ANPR conforme a Tietosuojalaki/Tietosuojavaltuutettu, y conciencia situacional GIS para los 11 distritos policiales, 22 departamentos de pelastustoimi y 21 hyvinvointialueet. Cloud EU con NIS2/Kyberturvallisuuslaki y HILMA/Hansel procurement.' : 'KabatOne integrates 112 CAD dispatch compatible with the Hätäkeskuslaitos integrated model (6 multi-agency centres) — with VIRVE TETRA integration and VIRVE 2.0 readiness (4G/5G), camera/ANPR management compliant with Tietosuojalaki/Tietosuojavaltuutettu, and GIS situational awareness for 11 police districts, 22 pelastustoimi departments, and 21 hyvinvointialueet. EU cloud with NIS2/Kyberturvallisuuslaki and HILMA/Hansel procurement.'}
      />
      <Footer es={es} />
    </>
  )
}
