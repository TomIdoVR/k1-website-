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
  return generatePageMetadata('publicSafetySoftwareNorway', locale)
}

export default async function PublicSafetySoftwareNorwayPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-norway/`
    : `${baseUrl}/resources/public-safety-software-norway/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Noruega' : 'Public Safety Software — Norway', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Noruega?',
      answer: 'Noruega organiza su seguridad pública bajo el Ministerio de Justicia y Seguridad Pública (Justis- og beredskapsdepartementet). La Policía de Noruega (Politiet) es la fuerza principal, reorganizada en 2016 en 12 distritos policiales (politidistrikt) bajo la Dirección Nacional de Policía (Politidirektoratet — POD). El Servicio de Seguridad de la Policía (PST — Politiets sikkerhetstjeneste) es el servicio de inteligencia/contraterrorismo. El Cuerpo de Bomberos y Rescate (brann- og redningsvesenet) opera a nivel municipal bajo la Dirección de Gestión de Emergencias (DSB — Direktoratet for samfunnssikkerhet og beredskap). Los servicios de ambulancias (ambulansetjenesten) son gestionados por las autoridades regionales de salud (helseforetak). La Guardia Nacional (Heimevernet) y las Fuerzas Armadas (Forsvaret) tienen roles de apoyo en seguridad civil bajo el NSM (Nasjonal sikkerhetsmyndighet). Noruega tiene un sistema de preparación civil muy desarrollado dado su geografía extensa (385,000 km²) y dispersión poblacional.',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Noruega? ¿Qué son los AMK, 110 y el Nødnett?',
      answer: 'Noruega opera tres números de emergencia: 110 (bomberos / brann), 112 (policía), 113 (médico/ambulancia). Los Centros de Coordinación Médica (AMK — Akuttmedisinsk kommunikasjonssentral) coordinan el despacho de ambulancias a nivel regional (20 AMK). Los centros 110 (brannvesenets kommunikasjonssentral) despachan bomberos — 19 centros regionales. Los centros 112 de la policía operan a través de los Centros Operativos de la Policía (politioperasjonssentral), uno por cada uno de los 12 distritos. El Nødnett es la red nacional de radiocomunicaciones digitales (TETRA) para todos los servicios de emergencia noruegos — una de las más avanzadas de Europa, con ~67,000 usuarios activos y cobertura en todo el país, incluyendo zonas remotas y costeras. La reforma policial de 2016 (Nærpolitireformen) consolidó y modernizó los centros operativos para mejorar tiempos de respuesta.',
    },
    {
      question: '¿Qué es el DSB y qué papel juega en la resiliencia civil de Noruega?',
      answer: 'El DSB (Direktoratet for samfunnssikkerhet og beredskap — Directorado para la Seguridad Civil y la Preparación para Emergencias) es la agencia gubernamental bajo el Ministerio de Justicia responsable de la preparación civil, protección contra incendios y gestión de riesgos nacionales. El DSB supervisa a los servicios de bomberos municipales, la inspección de instalaciones peligrosas (EMAS/SEVESO), la coordinación de respuesta a catástrofes naturales (avalanchas, inundaciones — relevantes dado el terreno noruego) y la planificación de continuidad de servicios esenciales (NKT). El NSM (Nasjonal sikkerhetsmyndighet) es la autoridad nacional de ciberseguridad y protección de infraestructuras críticas, con el NorCERT/NCSC-N como CERT nacional. La combinación DSB + NSM define los requisitos de resiliencia y ciberseguridad para sistemas de seguridad pública en Noruega.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Noruega?',
      answer: 'La contratación pública en Noruega se rige por la Ley de Adquisiciones Públicas (lov om offentlige anskaffelser — LOA) y su reglamento (FOA), armonizados con las directivas europeas de la UE (Noruega es miembro del EEE). Los contratos se publican en Doffin (Database for offentlige innkjøp — doffin.no), el portal nacional de contratación, y en TED/OJEU para contratos mayores. La Dirección Nacional de Policía (POD) licita los sistemas de la policía a nivel nacional. Los 12 distritos pueden licitar sistemas complementarios. Los municipios licitan los sistemas de bomberos (brannvesen). Las Autoridades Regionales de Salud licitan los sistemas AMK. Anskaffelser.no y la Agencia Noruega de Gestión Pública (DFØ — Direktoratet for forvaltning og økonomistyring) publican marcos de acuerdo que simplifican la adquisición de tecnología para múltiples organismos. La pertenencia al EEE permite a empresas no noruegas participar directamente.',
    },
    {
      question: '¿Cuáles son los requisitos de protección de datos y ciberseguridad para software policial en Noruega?',
      answer: 'Noruega implementa el RGPD a través de la Ley de Datos Personales (personopplysningsloven) de 2018. La autoridad de control es Datatilsynet, una de las más activas de Europa. Los sistemas policiales están sujetos adicionalmente a la Ley de Registros Policiales (politiregisterloven) y su reglamento, que imponen controles específicos sobre datos de investigación criminal. Para ciberseguridad, el NSM (Nasjonal sikkerhetsmyndighet) establece el marco de seguridad para sistemas de información clasificados y de infraestructura crítica — el NSM ICT Security Principles y las normas derivadas del ISF/ISO 27001. La NIS2 se implementa en Noruega vía el marco del EEE — la Ley de Seguridad de las Redes (ekomloven) y las regulaciones del NSM. El NorCERT/NCSC-N gestiona los incidentes cibernéticos nacionales. Los sistemas conectados al Nødnett tienen requisitos de homologación del Departamento de Dirección y TIC de la Policía (PDMT — Politiets data- og materielltjeneste).',
    },
    {
      question: '¿Qué infraestructura de videovigilancia tiene Noruega?',
      answer: 'Noruega tiene una regulación relativamente restrictiva para la videovigilancia en el espacio público, basada en el RGPD (personopplysningsloven) y las directrices del Datatilsynet. La vigilancia policial en espacios públicos requiere base legal específica y evaluación de impacto (DPIA). Las ciudades más grandes — Oslo, Bergen, Trondheim — tienen sistemas de cámaras de tráfico e integradas en los centros operativos de la policía local. El sistema ANPR (automatisk nummerplategjenkjenning) está integrado en las autopistas y puntos de control nacional. La Policía Nacional utiliza sistemas de reconocimiento de vehículos en investigaciones específicas bajo supervisión judicial. El sistema de cámaras del metro de Oslo (T-banen/Ruter) está integrado con el centro de operaciones de la policía de Oslo. Los proyectos de Smart City (Oslo Smart City, Bergen Digital) incluyen sensores urbanos y cámaras con restricciones de datos RGPD estrictas. La tendencia es hacia integración de datos de múltiples fuentes (tráfico, cámaras, sensores) con analítica IA cumpliendo el marco del Datatilsynet.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para los 12 distritos policiales de Noruega, los centros AMK/110 y el Nødnett?',
      answer: 'KabatOne integra las capacidades que la Politiet noruega, los centros AMK/110/112 y el DSB necesitan unificadas: despacho CAD multiagencia compatible con los 12 centros operativos policiales (politioperasjonssentral) y los centros 110/AMK — con integración Nødnett TETRA, clasificación automática de incidentes y asignación de recursos (K-Dispatch), gestión de cámaras urbanas y ANPR con analítica IA conforme a personopplysningsloven/Datatilsynet — incluyendo gestión de retención RGPD y DPIAs (K-Video), y conciencia situacional GIS compartida entre distritos policiales, brannvesen, AMK y el DSB para coordinación en catástrofes naturales (avalanchas, inundaciones) y operaciones en terreno remoto noruego (K-Safety). Cloud EU/EEE con cumplimiento RGPD/Datatilsynet y NSM/NIS2. Integración Nødnett. Demo adaptada al modelo de los 12 distritos y la reforma Nærpolitireformen.',
    },
  ] : [
    {
      question: 'How is public safety organised in Norway?',
      answer: 'Norway organises its public safety under the Ministry of Justice and Public Security (Justis- og beredskapsdepartementet). The Norwegian Police Service (Politiet) is the primary force, reorganised in 2016 into 12 police districts (politidistrikt) under the National Police Directorate (Politidirektoratet — POD). The Police Security Service (PST — Politiets sikkerhetstjeneste) handles intelligence/counter-terrorism. The Fire and Rescue Service (brann- og redningsvesenet) operates at municipal level under the Directorate for Civil Protection (DSB — Direktoratet for samfunnssikkerhet og beredskap). Ambulance services (ambulansetjenesten) are managed by regional health authorities (helseforetak). The Home Guard (Heimevernet) and Armed Forces (Forsvaret) have civil security support roles under the NSM (Nasjonal sikkerhetsmyndighet). Norway has a highly developed civil preparedness system given its extensive geography (385,000 km²) and dispersed population.',
    },
    {
      question: 'How does emergency dispatch work in Norway? What are AMK, 110 centres, and the Nødnett?',
      answer: 'Norway operates three emergency numbers: 110 (fire / brann), 112 (police), 113 (medical/ambulance). Medical Coordination Centres (AMK — Akuttmedisinsk kommunikasjonssentral) coordinate ambulance dispatch at regional level (20 AMK centres). Fire 110 centres (brannvesenets kommunikasjonssentral) dispatch fire brigades — 19 regional centres. Police 112 centres operate through Police Operations Centres (politioperasjonssentral), one per each of the 12 districts. Nødnett is the national digital radiocommunications network (TETRA) for all Norwegian emergency services — one of Europe\'s most advanced, with ~67,000 active users and full national coverage including remote and coastal areas. The 2016 police reform (Nærpolitireformen) consolidated and modernised operations centres to improve response times.',
    },
    {
      question: 'What is the DSB and what role does it play in Norwegian civil resilience?',
      answer: 'The DSB (Direktoratet for samfunnssikkerhet og beredskap — Directorate for Civil Protection and Emergency Planning) is the government agency under the Ministry of Justice responsible for civil preparedness, fire protection, and national risk management. DSB supervises municipal fire services, inspects hazardous facilities (EMAS/SEVESO), coordinates responses to natural disasters (avalanches, floods — critical given Norway\'s terrain), and plans continuity of essential services (NKT). The NSM (Nasjonal sikkerhetsmyndighet) is the national cybersecurity and critical infrastructure protection authority, with NorCERT/NCSC-N as the national CERT. The DSB + NSM combination defines resilience and cybersecurity requirements for public safety systems in Norway.',
    },
    {
      question: 'How is public safety software procured in Norway?',
      answer: 'Norwegian public procurement is governed by the Public Procurement Act (lov om offentlige anskaffelser — LOA) and its regulations (FOA), harmonised with EU directives (Norway is an EEA member). Contracts are published on Doffin (Database for offentlige innkjøp — doffin.no), the national procurement portal, and on TED/OJEU for larger contracts. The National Police Directorate (POD) procures police systems nationally. The 12 districts may procure supplementary systems. Municipalities procure fire service (brannvesen) systems. Regional Health Authorities procure AMK systems. Anskaffelser.no and the Norwegian Agency for Public and Financial Management (DFØ) publish framework agreements that simplify technology procurement across multiple agencies. EEA membership allows non-Norwegian companies to participate directly.',
    },
    {
      question: 'What are the data protection and cybersecurity requirements for public safety software in Norway?',
      answer: 'Norway implements GDPR through the Personal Data Act (personopplysningsloven) of 2018. The supervisory authority is Datatilsynet, one of Europe\'s most active. Police systems are additionally subject to the Police Records Act (politiregisterloven) and its regulations, imposing specific controls on criminal investigation data. For cybersecurity, the NSM (Nasjonal sikkerhetsmyndighet) sets the security framework for classified information and critical infrastructure systems — the NSM ICT Security Principles and standards derived from ISF/ISO 27001. NIS2 is implemented in Norway via the EEA framework — the Electronic Communications Act (ekomloven) and NSM regulations. NorCERT/NCSC-N manages national cyber incidents. Systems connected to Nødnett have homologation requirements from the Police ICT Directorate (PDMT — Politiets data- og materielltjeneste).',
    },
    {
      question: 'What video surveillance infrastructure does Norway have?',
      answer: 'Norway has relatively restrictive regulation for public space surveillance, based on GDPR (personopplysningsloven) and Datatilsynet guidelines. Police surveillance in public spaces requires a specific legal basis and impact assessment (DPIA). Norway\'s largest cities — Oslo, Bergen, Trondheim — have traffic and integrated camera systems connected to local police operations centres. The ANPR system (automatisk nummerplategjenkjenning) is integrated into motorways and national checkpoints. The National Police uses vehicle recognition systems in specific investigations under judicial oversight. Oslo metro (T-banen/Ruter) camera systems are integrated with the Oslo police operations centre. Smart City projects (Oslo Smart City, Bergen Digital) include urban sensors and cameras with strict GDPR data constraints. The trend is toward integrating data from multiple sources (traffic, cameras, sensors) with AI analytics compliant with the Datatilsynet framework.',
    },
    {
      question: 'Why is KabatOne suited for Norway\'s 12 police districts, AMK/110 centres, and Nødnett?',
      answer: 'KabatOne integrates the capabilities that Norwegian Politiet, AMK/110/112 centres, and DSB need unified: multi-agency CAD dispatch compatible with all 12 police operations centres (politioperasjonssentral) and 110/AMK centres — with Nødnett TETRA integration, automatic incident classification, and resource assignment (K-Dispatch), urban camera and ANPR management with AI analytics compliant with personopplysningsloven/Datatilsynet — including GDPR retention management and DPIAs (K-Video), and shared GIS situational awareness across police districts, brannvesen, AMK, and DSB for coordination during natural disasters (avalanches, floods) and operations in Norway\'s remote terrain (K-Safety). EU/EEA cloud with GDPR/Datatilsynet and NSM/NIS2 compliance. Nødnett integration. Demo adapted to the 12-district model and the Nærpolitireformen.',
    },
  ]

  const articleHeadline = es
    ? 'Software de Seguridad Pública para Noruega: Politiet 12 Distritos, Nødnett TETRA, AMK/110, DSB/NSM y Datatilsynet'
    : 'Public Safety Software for Norway: Politiet 12 Districts, Nødnett TETRA, AMK/110, DSB/NSM & Datatilsynet'

  const articleDescription = es
    ? 'Plataforma unificada para los 12 distritos policiales de Noruega, centros AMK/110/112 y el DSB — despacho CAD integrado con Nødnett TETRA, gestión de cámaras urbanas y ANPR conforme a personopplysningsloven/Datatilsynet, y cumplimiento NIS2/NSM.'
    : 'Unified platform for Norway\'s 12 police districts, AMK/110/112 centres, and DSB — integrated CAD dispatch with Nødnett TETRA, urban camera and ANPR management compliant with personopplysningsloven/Datatilsynet, and NIS2/NSM compliance.'

  const challenges = es ? [
    {
      icon: '📡',
      title: 'Nødnett TETRA y despacho multicentro',
      desc: 'Integrar el despacho CAD con el Nødnett TETRA (67,000+ usuarios) y coordinar los 12 centros operativos policiales, 19 centros 110 de bomberos y 20 centros AMK de ambulancias en un sistema unificado de respuesta multiagencia.',
    },
    {
      icon: '🏔️',
      title: 'Geografía remota y resiliencia DSB',
      desc: 'Operar en un país de 385,000 km² con comunidades dispersas, zonas costeras, fiordos y condiciones árticas — con requisitos de resiliencia y continuidad operativa del DSB para catástrofes naturales como avalanchas, inundaciones y tormentas.',
    },
    {
      icon: '📷',
      title: 'ANPR, Smart City y cumplimiento Datatilsynet',
      desc: 'Gestionar sistemas ANPR de autopistas y cámaras urbanas (Oslo, Bergen, Trondheim) con estricto cumplimiento de personopplysningsloven/Datatilsynet — una de las autoridades de protección de datos más activas de Europa — con DPIA, limitación de finalidad y retención RGPD.',
    },
    {
      icon: '🔒',
      title: 'NSM/NIS2, politiregisterloven y homologación Nødnett',
      desc: 'Cumplir los requisitos de ciberseguridad NSM, la NIS2 vía EEE, la Ley de Registros Policiales (politiregisterloven) y los estándares de homologación PDMT para sistemas conectados al Nødnett, con cloud EU/EEE.',
    },
  ] : [
    {
      icon: '📡',
      title: 'Nødnett TETRA and multi-centre dispatch',
      desc: 'Integrating CAD dispatch with Nødnett TETRA (67,000+ users) and coordinating 12 police operations centres, 19 fire 110 centres, and 20 AMK ambulance centres in a unified multi-agency response system.',
    },
    {
      icon: '🏔️',
      title: 'Remote geography and DSB resilience',
      desc: 'Operating across a 385,000 km² country with dispersed communities, coastal areas, fjords, and arctic conditions — meeting DSB resilience and operational continuity requirements for natural disasters like avalanches, floods, and storms.',
    },
    {
      icon: '📷',
      title: 'ANPR, Smart City and Datatilsynet compliance',
      desc: 'Managing motorway ANPR systems and urban cameras (Oslo, Bergen, Trondheim) with strict personopplysningsloven/Datatilsynet compliance — one of Europe\'s most active data protection authorities — with DPIA, purpose limitation, and GDPR retention.',
    },
    {
      icon: '🔒',
      title: 'NSM/NIS2, politiregisterloven and Nødnett homologation',
      desc: 'Meeting NSM cybersecurity requirements, NIS2 via EEA, the Police Records Act (politiregisterloven), and PDMT homologation standards for Nødnett-connected systems, with EU/EEA cloud.',
    },
  ]

  const stats = es ? [
    { value: '12', label: 'Distritos Policiales' },
    { value: '67K+', label: 'Usuarios Nødnett TETRA' },
    { value: '5.5M', label: 'Habitantes en 385,000 km²' },
    { value: '110/112/113', label: 'Despacho Multiagencia' },
  ] : [
    { value: '12', label: 'Police Districts' },
    { value: '67K+', label: 'Nødnett TETRA Users' },
    { value: '5.5M', label: 'People across 385,000 km²' },
    { value: '110/112/113', label: 'Multi-Agency Dispatch' },
  ]

  const title = es
    ? 'Software de Seguridad Pública para Noruega'
    : 'Public Safety Software for Norway'

  const subtitle = es
    ? 'Politiet 12 Distritos · Nødnett TETRA · AMK/110/112 · DSB/NSM · personopplysningsloven/Datatilsynet · NIS2/NSM'
    : 'Politiet 12 Districts · Nødnett TETRA · AMK/110/112 · DSB/NSM · personopplysningsloven/Datatilsynet · NIS2/NSM'

  const intro = es
    ? 'Noruega — 5.5 millones de habitantes repartidos en 385,000 km² de fiordos, montañas y costa ártica — opera la Politiet en 12 distritos modernizados y el Nødnett, una de las redes TETRA de emergencias más avanzadas de Europa con 67,000+ usuarios activos. Los centros AMK, 110 y 112 coordinan la respuesta multiagencia mientras el DSB y el NSM marcan los requisitos de resiliencia y ciberseguridad. KabatOne proporciona la plataforma CAD, vídeo y GIS integrada con Nødnett, conforme a personopplysningsloven/Datatilsynet y certificada para el entorno EEE/NSM.'
    : 'Norway — 5.5 million people spread across 385,000 km² of fjords, mountains, and arctic coastline — operates Politiet across 12 modernised districts and Nødnett, one of Europe\'s most advanced TETRA emergency networks with 67,000+ active users. AMK, 110, and 112 centres coordinate multi-agency response while DSB and NSM set resilience and cybersecurity requirements. KabatOne delivers the CAD, video, and GIS platform integrated with Nødnett, compliant with personopplysningsloven/Datatilsynet, and certified for the EEA/NSM environment.'

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
            {es ? 'Guía de Mercado · Noruega' : 'Market Guide · Norway'}
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
            {es ? 'Desafíos Clave del Mercado Noruego' : 'Key Challenges in the Norwegian Market'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Los requisitos operativos únicos que definen la seguridad pública en Noruega.'
              : 'The unique operational requirements that define public safety in Norway.'}
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
            {es ? 'Cómo KabatOne Apoya a los Servicios Noruegos de Seguridad Pública' : 'How KabatOne Supports Norwegian Public Safety Services'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Una plataforma unificada adaptada a los 12 distritos, el Nødnett TETRA y la geografía remota noruega.'
              : 'One unified platform adapted to the 12 districts, Nødnett TETRA, and Norway\'s remote geography.'}
          </p>
          <div style={{ display: 'grid', gap: 20 }}>
            {[
              {
                product: 'K-Dispatch',
                color: '#eff6ff',
                border: '#bfdbfe',
                icon: '🚨',
                title: es ? 'Despacho CAD 110/112/113 + integración Nødnett' : '110/112/113 CAD Dispatch + Nødnett Integration',
                desc: es
                  ? 'CAD multiagencia compatible con los 12 centros operativos policiales (politioperasjonssentral) y los centros 110/AMK — integración nativa con el Nødnett TETRA, clasificación automática de incidentes, asignación de recursos policía-bomberos-ambulancias y coordinación GIS en tiempo real. Adaptado a la geografía remota noruega con soporte para operaciones en zonas de cobertura limitada.'
                  : 'Multi-agency CAD compatible with all 12 police operations centres (politioperasjonssentral) and 110/AMK centres — native Nødnett TETRA integration, automatic incident classification, police-fire-ambulance resource assignment, and real-time GIS coordination. Adapted to Norway\'s remote geography with support for operations in limited coverage areas.',
              },
              {
                product: 'K-Video',
                color: '#f0fdf4',
                border: '#bbf7d0',
                icon: '📷',
                title: es ? 'Cámaras urbanas, ANPR y cumplimiento Datatilsynet' : 'Urban Cameras, ANPR and Datatilsynet Compliance',
                desc: es
                  ? 'Gestión unificada de cámaras urbanas (Oslo, Bergen, Trondheim) y sistemas ANPR de autopistas con analítica IA — reconocimiento de matrículas, detección de comportamientos, búsqueda forense. Cumplimiento nativo de personopplysningsloven: gestión de DPIA integrada, limitación de finalidad, retención RGPD y controles de acceso para datos de investigación criminal bajo politiregisterloven. Compatible con los requisitos del Datatilsynet.'
                  : 'Unified management of urban cameras (Oslo, Bergen, Trondheim) and motorway ANPR systems with AI analytics — licence plate recognition, behaviour detection, forensic search. Native personopplysningsloven compliance: integrated DPIA management, purpose limitation, GDPR retention, and access controls for criminal investigation data under politiregisterloven. Compatible with Datatilsynet requirements.',
              },
              {
                product: 'K-Safety',
                color: '#fefce8',
                border: '#fde68a',
                icon: '🗺️',
                title: es ? 'Conciencia situacional GIS para catástrofes naturales y operaciones remotas' : 'GIS Situational Awareness for Natural Disasters and Remote Operations',
                desc: es
                  ? 'Conciencia situacional GIS compartida entre los 12 distritos policiales, brannvesen, AMK y el DSB — esencial para la coordinación en avalanchas, inundaciones, tormentas costeras y emergencias en zonas remotas noruegas. Vista de mando con capas de mapa topográfico, posicionamiento en tiempo real de recursos Nødnett y alertas meteorológicas integradas del Meteorologisk institutt.'
                  : 'Shared GIS situational awareness across the 12 police districts, brannvesen, AMK, and DSB — essential for coordinating avalanche, flood, coastal storm, and remote area emergency responses. Command view with topographic map layers, real-time Nødnett resource positioning, and integrated weather alerts from Meteorologisk institutt.',
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
            {es ? 'Preguntas Frecuentes — Seguridad Pública en Noruega' : 'FAQ — Public Safety in Norway'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Respuestas a las preguntas más comunes sobre el mercado noruego de seguridad pública.'
              : 'Answers to the most common questions about the Norwegian public safety market.'}
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
              { href: es ? '/es/resources/public-safety-software-denmark/' : '/resources/public-safety-software-denmark/', label: es ? 'Dinamarca' : 'Denmark' },
              { href: es ? '/es/resources/public-safety-software-germany/' : '/resources/public-safety-software-germany/', label: es ? 'Alemania' : 'Germany' },
              { href: es ? '/es/resources/public-safety-software-netherlands/' : '/resources/public-safety-software-netherlands/', label: es ? 'Países Bajos' : 'Netherlands' },
              { href: es ? '/es/resources/public-safety-software-united-kingdom/' : '/resources/public-safety-software-united-kingdom/', label: es ? 'Reino Unido' : 'United Kingdom' },
              { href: es ? '/es/resources/public-safety-software-belgium/' : '/resources/public-safety-software-belgium/', label: es ? 'Bélgica' : 'Belgium' },
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
        h2={es ? 'Solicita una Demo para la Politiet, los Centros AMK/110 o el DSB de Noruega' : 'Request a Demo for Norwegian Politiet, AMK/110 Centres, or DSB'}
        subtitle={es ? 'KabatOne integra el despacho CAD multiagencia compatible con los 12 centros operativos policiales noruegos y los centros 110/AMK — con integración Nødnett TETRA, gestión de cámaras urbanas/ANPR conforme a personopplysningsloven/Datatilsynet, y conciencia situacional GIS para operaciones en terreno remoto y catástrofes naturales. Cloud EU/EEE con cumplimiento NSM/NIS2.' : 'KabatOne integrates multi-agency CAD dispatch compatible with all 12 Norwegian police operations centres and 110/AMK centres — with Nødnett TETRA integration, urban camera/ANPR management compliant with personopplysningsloven/Datatilsynet, and GIS situational awareness for remote terrain operations and natural disasters. EU/EEA cloud with NSM/NIS2 compliance.'}
      />
      <Footer es={es} />
    </>
  )
}
