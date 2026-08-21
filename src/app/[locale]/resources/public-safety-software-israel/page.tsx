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
  return generatePageMetadata('publicSafetySoftwareIsrael', locale)
}

export default async function PublicSafetySoftwareIsraelPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-israel/`
    : `${baseUrl}/resources/public-safety-software-israel/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Israel' : 'Public Safety Software — Israel', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Israel?',
      answer: 'Israel tiene un sistema de seguridad pública centralizado bajo el Ministerio de Seguridad Pública (משרד לביטחון הפנים). La משטרת ישראל (Policía de Israel) es la fuerza policial nacional, organizada en 6 distritos policiales (מחוזות). El Magen David Adom (מגן דוד אדום — MDA) es la única organización nacional de ambulancias y primeros auxilios de Israel, con estatus equivalente al de la Cruz Roja internacional — y opera los centros de despacho nacionales para emergencias médicas (101). Los servicios de bomberos y rescate (כיבוי אש והצלה) son operados por las autoridades locales bajo la supervisión del Comando Nacional de Bomberos (פיקוד ארצי לכיבוי אש). La Guardia de Fronteras (משמר הגבול — Magav) es la unidad de policía fronteriza de la Policía de Israel. Las unidades de élite incluyen YAMAM (יחידת מיוחדת של המשטרה — antiterrorismo policial) y YAMAS (יחידת מיסטרבים). El Shin Bet (שב"כ — Servicio General de Seguridad) es el servicio de inteligencia interior. Los números de emergencia son 100 (policía), 101 (ambulancias MDA), 102 (bomberos) y 112 (europeo, disponible).',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Israel? ¿Qué son los centros de mando y control?',
      answer: 'Israel opera un sistema de despacho a través de los números 100 (policía), 101 (MDA/ambulancias), 102 (bomberos) y 112. Los מרכזי שליטה ובקרה (centros de mando y control) de la Policía de Israel son los centros de despacho policial, con un centro nacional y centros distritales en los 6 distritos. El MDA opera el מוקד ארצי (centro nacional MDA) y mókdim regionales para el despacho de ambulancias. Los centros de bomberos operan a nivel de autoridad local, con coordinación del Comando Nacional. Israel tiene un alto nivel de integración entre los sistemas de seguridad policial y de emergencias médicas, especialmente para incidentes de masa (MCEI — Mass Casualty Events). La red de radiocomunicaciones de la Policía de Israel utiliza tecnología digital TETRA. Israel está impulsando la integración de sistemas de despacho con plataformas de Smart City y analítica en tiempo real a través de la Autoridad de TIC gubernamental (ממשלה דיגיטלית — Gobierno Digital).',
    },
    {
      question: '¿Cuál es el marco de protección de datos y privacidad para software de seguridad pública en Israel?',
      answer: 'Israel tiene una legislación de protección de datos basada en la Ley de Protección de la Privacidad de 1981 (חוק הגנת הפרטיות, תשמ"א-1981). La autoridad de control es la Autoridad de Protección de la Privacidad (רשות הגנת הפרטיות — PPA/Reshut HaGanat HaPratiyut). La reforma significativa de esta ley — Enmienda 13 (תיקון 13) — fue aprobada en 2023 y entró en vigor progresivamente en 2024-2025, modernizando los requisitos de protección de datos, incluyendo notificación obligatoria de brechas, evaluaciones de impacto (Privacy Impact Assessments), nombramiento de DPO para bases de datos de alto riesgo y fuertes sanciones. Israel fue reconocido por la Unión Europea con una decisión de adecuación, facilitando la transferencia de datos entre Israel y la UE. Los sistemas policiales están sujetos a regulaciones específicas del Ministerio de Seguridad Pública y restricciones adicionales para datos clasificados. El Registro de Bases de Datos (מרשם מאגרי מידע) de la PPA requiere el registro de bases de datos personales de las autoridades públicas.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Israel?',
      answer: 'La contratación pública en Israel se rige por las regulaciones de licitaciones gubernamentales (תקנות חובת המכרזים). Las licitaciones se publican en el portal oficial de licitaciones del gobierno israelí (מכרז.gov.il). El Ministerio de Seguridad Pública y la Policía de Israel publican sus propias licitaciones de sistemas tecnológicos. La רשות הממשלתית למחשוב ולטכנולוגיית המידע (ICT Authority — רמ"ט/ITTA) del Ministerio de Finanzas coordina los acuerdos marco de TIC para el gobierno israelí — similar al G-Cloud británico. Israel tiene un ecosistema de startups de seguridad tecnológica (CyberSpark Beer Sheva, Shin Bet-affiliated companies) muy activo, lo que crea competencia local intensa. El gobierno israelí impulsa políticas de preferencia por tecnología local (Startup Nation) en algunas categorías. Las Smart Cities (Haifa, Tel Aviv, Be\'er Sheva, Netanya) tienen presupuestos propios de innovación tecnológica para sistemas de seguridad urbana.',
    },
    {
      question: '¿Cuáles son los requisitos de ciberseguridad para software de seguridad pública en Israel?',
      answer: 'Israel es uno de los líderes mundiales en ciberseguridad, con un marco regulatorio maduro. El מערך הסייבר הלאומי (INCD — Directorio Nacional de Ciberespacio de Israel) es la autoridad nacional de ciberseguridad, dependiente de la Oficina del Primer Ministro. El INCD publica guías de seguridad y regulaciones obligatorias para operadores de infraestructuras críticas. La Directiva 3.2 del INCD establece los requisitos de ciberseguridad para los ministerios del gobierno israelí. El Israel Security Authority (ISA — רשב"א, parte del Shin Bet) es responsable de la seguridad de los sistemas de información clasificados del gobierno. Los sistemas de la Policía de Israel y el MDA están sujetos a auditorías de seguridad periódicas por el INCD/ISA. CyberSpark en Be\'er Sheva concentra el ecosistema de ciberseguridad israelí (unidades de inteligencia 8200, startups, universidades — Ben-Gurion University/Cyber@BGU). El Israel Cert (IL-CERT) es el equipo de respuesta a incidentes bajo el INCD.',
    },
    {
      question: '¿Qué proyectos Smart City y de digitalización de la seguridad pública existen en Israel?',
      answer: 'Israel tiene varios proyectos líderes de digitalización de la seguridad pública y Smart City. Tel Aviv tiene el programa Digital Tel Aviv con un centro de control urbano (מרכז שליטה עירוני) integrado con cámaras, sensores de tráfico, datos del MDA y la Policía de Israel. Be\'er Sheva es el hub nacional de CyberSpark y tiene integración de sistemas de seguridad urbana con la Ben-Gurion University. Haifa tiene el programa Smart Haifa con gestión integrada de emergencias portuarias e industriales. El sistema TAMAS (מערכת TAMAS) gestiona el ANPR nacional de la Policía de Israel para control de placas de vehículos. El proyecto ממ"ג (GIS nacional) integra capas geoespaciales para la policía, MDA y bomberos. La Plataforma Digital del Gobierno de Israel (plataforma.gov.il) impulsa la interoperabilidad de datos entre los sistemas del Ministerio de Seguridad Pública, el MDA y las autoridades locales. El programa Ir Bilti Mehicha (עיר בלתי מחיחה — ciudad sin espera) integra datos de emergencias médicas en tiempo real.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la Policía de Israel, el MDA y los bomberos?',
      answer: 'KabatOne integra las capacidades que la Policía de Israel, el MDA y los bomberos necesitan unificadas: despacho CAD multiagencia compatible con los 6 distritos de la Policía de Israel y los mókdim del MDA — con integración TETRA digital y preparación para IP-based broadband, coordinación de Eventos de Múltiples Bajas (MCEI) y protocolos de seguridad nacional (K-Dispatch), gestión de cámaras urbanas y ANPR/TAMAS con analítica IA conforme a la Ley de Protección de la Privacidad/תיקון 13/PPA — con Privacy Impact Assessment, base legal policial y gestión de retención (K-Video), y conciencia situacional GIS integrada con ממ"ג y centros de control urbano de Smart City (Tel Aviv, Haifa, Be\'er Sheva) — con datos sísmicos, alertas de incidentes de masa y coordinación Magav/YAMAM para incidentes de seguridad (K-Safety). Cloud con cumplimiento de la Ley de Privacidad/תיקון 13/PPA y estándares INCD/ISA/Directiva 3.2. Compatible con los marcos de contratación gubernamental israelí/מכרז.gov.il e ITTA. Demo adaptada al modelo de seguridad pública israelí, incluyendo MCEI y contexto de seguridad nacional.',
    },
  ] : [
    {
      question: 'How is public safety organised in Israel?',
      answer: 'Israel has a centralised public safety system under the Ministry of Public Security (משרד לביטחון הפנים). The Israel Police (משטרת ישראל) is the national police force, organised across 6 police districts (מחוזות). Magen David Adom (מגן דוד אדום — MDA) is Israel\'s sole national ambulance and first-aid organisation, with Red Cross equivalent status internationally — operating national dispatch centres for medical emergencies (101). Fire and rescue services (כיבוי אש והצלה) are operated by local authorities under the National Fire Command (פיקוד ארצי לכיבוי אש) oversight. The Border Guard (משמר הגבול — Magav) is the border police unit of Israel Police. Elite units include YAMAM (counter-terrorism police) and YAMAS. The Shin Bet (שב"כ — General Security Service) is the domestic intelligence service. Emergency numbers are 100 (police), 101 (MDA ambulances), 102 (fire), and 112 (European, available).',
    },
    {
      question: 'How does emergency dispatch work in Israel? What are the command and control centres?',
      answer: 'Israel operates a dispatch system through 100 (police), 101 (MDA/ambulances), 102 (fire), and 112. The Israel Police מרכזי שליטה ובקרה (command and control centres) are the police dispatch centres, with a national centre and district centres in each of the 6 districts. MDA operates the national MDA centre (מוקד ארצי) and regional mókdim for ambulance dispatch. Fire centres operate at local authority level, coordinated by the National Command. Israel has a high level of integration between police security and medical emergency systems, especially for Mass Casualty Events (MCEI). The Israel Police radiocommunications network uses digital TETRA technology. Israel is driving integration of dispatch systems with Smart City platforms and real-time analytics through the governmental ICT Authority (ממשלה דיגיטלית — Digital Government).',
    },
    {
      question: 'What is the data protection and privacy framework for public safety software in Israel?',
      answer: 'Israel\'s data protection legislation is based on the Privacy Protection Law of 1981 (חוק הגנת הפרטיות, תשמ"א-1981). The supervisory authority is the Privacy Protection Authority (רשות הגנת הפרטיות — PPA/Reshut HaGanat HaPratiyut). The significant reform — Amendment 13 (תיקון 13) — was approved in 2023 and came into force progressively in 2024-2025, modernising data protection requirements including mandatory breach notification, Privacy Impact Assessments, DPO appointment for high-risk databases, and strong penalties. Israel has been recognised by the European Union with an adequacy decision, facilitating data transfers between Israel and the EU. Police systems are subject to specific Ministry of Public Security regulations and additional restrictions for classified data. The Database Registry (מרשם מאגרי מידע) of the PPA requires registration of personal databases held by public authorities.',
    },
    {
      question: 'How is public safety software procured in Israel?',
      answer: 'Israeli public procurement is governed by the Government Tender Regulations (תקנות חובת המכרזים). Tenders are published on the official Israeli government tender portal (מכרז.gov.il). The Ministry of Public Security and Israel Police publish their own technology system tenders. The ICT Authority (רמ"ט/ITTA) of the Ministry of Finance coordinates ICT framework agreements for the Israeli government — similar to the UK G-Cloud. Israel has a highly active security-tech startup ecosystem (CyberSpark Be\'er Sheva, Shin Bet-affiliated companies), creating intense local competition. The Israeli government drives local technology preference policies (Startup Nation) in some categories. Smart Cities (Haifa, Tel Aviv, Be\'er Sheva, Netanya) have their own technology innovation budgets for urban security systems.',
    },
    {
      question: 'What are the cybersecurity requirements for public safety software in Israel?',
      answer: 'Israel is a global cybersecurity leader with a mature regulatory framework. The INCD (מערך הסייבר הלאומי — Israel National Cyber Directorate) is the national cybersecurity authority, under the Prime Minister\'s Office. INCD publishes security guidelines and mandatory regulations for critical infrastructure operators. INCD Directive 3.2 sets cybersecurity requirements for Israeli government ministries. The Israel Security Authority (ISA — רשב"א, part of Shin Bet) is responsible for security of classified government information systems. Israel Police and MDA systems are subject to periodic security audits by INCD/ISA. CyberSpark in Be\'er Sheva concentrates Israel\'s cybersecurity ecosystem (Unit 8200, startups, universities — Ben-Gurion University/Cyber@BGU). IL-CERT is the incident response team under INCD.',
    },
    {
      question: 'What Smart City and public safety digitalisation projects exist in Israel?',
      answer: 'Israel has several leading public safety digitalisation and Smart City projects. Tel Aviv has the Digital Tel Aviv programme with an integrated urban control centre (מרכז שליטה עירוני) integrating cameras, traffic sensors, MDA data, and Israel Police data. Be\'er Sheva is the national CyberSpark hub with urban security system integration with Ben-Gurion University. Haifa has the Smart Haifa programme with integrated port and industrial emergency management. The TAMAS system manages the Israel Police national ANPR for vehicle plate control. The ממ"ג national GIS project integrates geospatial layers for police, MDA, and fire services. The Digital Government Platform (plataforma.gov.il) drives data interoperability between the Ministry of Public Security, MDA, and local authorities. The Ir Bilti Mehicha programme (עיר בלתי מחיחה — city without delay) integrates real-time medical emergency data.',
    },
    {
      question: 'Why is KabatOne suited for Israel Police, MDA, and fire services?',
      answer: 'KabatOne integrates the capabilities that Israel Police, MDA, and fire services need unified: multi-agency CAD dispatch compatible with all 6 Israel Police districts and MDA mókdim — with digital TETRA integration and IP-based broadband readiness, Mass Casualty Event (MCEI) coordination, and national security protocols (K-Dispatch), urban camera and ANPR/TAMAS management with AI analytics compliant with the Privacy Protection Law/Amendment 13/PPA — with Privacy Impact Assessment, police legal basis, and retention management (K-Video), and GIS situational awareness integrated with ממ"ג and Smart City control centres (Tel Aviv, Haifa, Be\'er Sheva) — with seismic data, mass incident alerts, and Magav/YAMAM coordination for security incidents (K-Safety). Cloud compliant with Privacy Protection Law/Amendment 13/PPA and INCD/ISA/Directive 3.2 standards. Compatible with Israeli government procurement/מכרז.gov.il and ITTA frameworks. Demo adapted to the Israeli public safety model, including MCEI and national security context.',
    },
  ]

  const articleHeadline = es
    ? 'Software de Seguridad Pública para Israel: Policía de Israel, MDA, TETRA, Ley de Privacidad/תיקון 13 y INCD/Ciberseguridad'
    : 'Public Safety Software for Israel: Israel Police, MDA, TETRA, Privacy Law/Amendment 13 & INCD Cybersecurity'

  const articleDescription = es
    ? 'Plataforma unificada para la Policía de Israel, el Magen David Adom y los bomberos — despacho CAD integrado con TETRA digital y gestión de MCEI, conforme a la Ley de Privacidad/תיקון 13/PPA y estándares INCD/ISA.'
    : 'Unified platform for Israel Police, Magen David Adom, and fire services — integrated CAD dispatch with digital TETRA and MCEI management, compliant with Privacy Protection Law/Amendment 13/PPA and INCD/ISA standards.'

  const challenges = es ? [
    {
      icon: '🚑',
      title: 'MDA único proveedor nacional de ambulancias y MCEI',
      desc: 'El MDA es la única organización nacional de ambulancias de Israel, con un sistema de despacho integrado para el 101. La coordinación de Eventos de Múltiples Bajas (MCEI) entre MDA, Policía de Israel, bomberos y unidades militares (OKETZ, HAGA) requiere plataformas de despacho multiagencia con protocolos específicos de seguridad nacional.',
    },
    {
      icon: '🛡️',
      title: 'Contexto de seguridad nacional y Magav/YAMAM',
      desc: 'Israel combina seguridad pública civil con elementos de seguridad nacional. La coordinación entre la Policía de Israel, Magav (Guardia de Fronteras), YAMAM (antiterrorismo), el Shin Bet y el ejército (IDF) en incidentes de seguridad requiere sistemas de gestión multiagencia con niveles de acceso y clasificación diferenciados.',
    },
    {
      icon: '🔒',
      title: 'Ley de Privacidad תיקון 13 (2024) y INCD/Directiva 3.2',
      desc: 'Cumplir la Ley de Privacidad de Israel (con la Enmienda 13 de 2023-2024), los requisitos de la PPA para bases de datos de alto riesgo, y los estándares de ciberseguridad del INCD (Directiva 3.2) y el ISA/Shin Bet para sistemas gubernamentales clasificados.',
    },
    {
      icon: '🏙️',
      title: 'Ecosistema Startup Nation y Smart City competitivo',
      desc: 'El ecosistema de ciberseguridad y GovTech israelí (CyberSpark Beer Sheva, Unidad 8200 alumni, Ben-Gurion University) crea un mercado altamente competitivo. La integración con plataformas Smart City existentes (Tel Aviv Digital Twin, Smart Haifa) y los sistemas TAMAS/ANPR de la Policía es un diferenciador clave.',
    },
  ] : [
    {
      icon: '🚑',
      title: 'MDA sole national ambulance provider and MCEI',
      desc: 'MDA is Israel\'s sole national ambulance organisation, with an integrated dispatch system for 101. Mass Casualty Event (MCEI) coordination between MDA, Israel Police, fire services, and military units (OKETZ, HAGA) requires multi-agency dispatch platforms with specific national security protocols.',
    },
    {
      icon: '🛡️',
      title: 'National security context and Magav/YAMAM',
      desc: 'Israel combines civilian public safety with national security elements. Coordination between Israel Police, Magav (Border Guard), YAMAM (counter-terrorism), Shin Bet, and the IDF during security incidents requires multi-agency management systems with differentiated access levels and classification.',
    },
    {
      icon: '🔒',
      title: 'Privacy Law Amendment 13 (2024) and INCD/Directive 3.2',
      desc: 'Complying with Israel\'s Privacy Protection Law (Amendment 13 of 2023-2024), PPA requirements for high-risk databases, and INCD cybersecurity standards (Directive 3.2) and ISA/Shin Bet requirements for classified government systems.',
    },
    {
      icon: '🏙️',
      title: 'Startup Nation ecosystem and competitive Smart City market',
      desc: 'Israel\'s cybersecurity and GovTech ecosystem (CyberSpark Be\'er Sheva, Unit 8200 alumni, Ben-Gurion University) creates a highly competitive market. Integration with existing Smart City platforms (Tel Aviv Digital Twin, Smart Haifa) and Israel Police TAMAS/ANPR systems is a key differentiator.',
    },
  ]

  const stats = es ? [
    { value: '6', label: 'Distritos Policía de Israel' },
    { value: '100/101/102', label: 'Números de emergencia' },
    { value: 'TETRA', label: 'Red radio digital policial' },
    { value: 'INCD', label: 'Directorio Nacional Cyber' },
  ] : [
    { value: '6', label: 'Israel Police Districts' },
    { value: '100/101/102', label: 'Emergency numbers' },
    { value: 'TETRA', label: 'Digital police radio network' },
    { value: 'INCD', label: 'National Cyber Directorate' },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      articleSchema(articleHeadline, articleDescription, pageUrl, '2026-05-18'),
      faqPageSchema(faqs),
      breadcrumbSchema(breadcrumbs),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Nav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#1e3a5f 0%,#2d6a9f 100%)', color: '#fff', padding: '80px 24px 60px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.75, marginBottom: 14 }}>
            {es ? 'Guía de Mercado · Israel' : 'Market Guide · Israel'}
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, lineHeight: 1.2, margin: '0 0 20px' }}>
            {es
              ? 'Software de Seguridad Pública para Israel'
              : 'Public Safety Software for Israel'}
          </h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.9, maxWidth: 680, margin: '0 auto 32px' }}>
            {es
              ? 'Policía de Israel, MDA, TETRA digital, Ley de Privacidad/תיקון 13 e INCD — plataforma unificada para el ecosistema de seguridad pública israelí.'
              : 'Israel Police, MDA, digital TETRA, Privacy Law/Amendment 13 & INCD — unified platform for the Israeli public safety ecosystem.'}
          </p>
          <Link
            href="/contact"
            style={{ background: ACCENT, color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}
          >
            {es ? 'Solicitar Demo para Israel' : 'Request Israel Demo'}
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '28px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px 48px' }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.7rem', fontWeight: 800, color: ACCENT }}>{s.value}</div>
              <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section style={{ padding: '64px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: 12 }}>
            {es ? 'Desafíos del Mercado Israelí de Seguridad Pública' : 'Israeli Public Safety Market Challenges'}
          </h2>
          <p style={{ color: '#475569', marginBottom: 36 }}>
            {es
              ? 'Israel combina un ecosistema GovTech altamente competitivo (Startup Nation) con exigencias únicas de seguridad nacional, el modelo MDA-único para ambulancias y las nuevas regulaciones de privacidad de la Enmienda 13.'
              : 'Israel combines a highly competitive GovTech ecosystem (Startup Nation) with unique national security demands, the MDA-only ambulance model, and the new privacy regulations of Amendment 13.'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
            {challenges.map((c) => (
              <div key={c.title} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: '24px 20px' }}>
                <div style={{ fontSize: '2rem', marginBottom: 10 }}>{c.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How KabatOne helps */}
      <section style={{ padding: '64px 24px', background: '#f1f5f9' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: 32 }}>
            {es ? 'Cómo KabatOne Unifica la Seguridad Pública Israelí' : 'How KabatOne Unifies Israeli Public Safety'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
            {[
              {
                title: es ? 'K-Dispatch: Despacho CAD Multiagencia y MCEI' : 'K-Dispatch: Multi-Agency CAD Dispatch & MCEI',
                desc: es
                  ? 'Despacho integrado para los 6 distritos de la Policía de Israel y los mókdim del MDA — con integración TETRA digital y preparación broadband, protocolos MCEI (Eventos de Múltiples Bajas), coordinación Magav/YAMAM y interoperabilidad con sistemas del Ministerio de Seguridad Pública.'
                  : 'Integrated dispatch for all 6 Israel Police districts and MDA mókdim — with digital TETRA integration and broadband readiness, MCEI (Mass Casualty Event) protocols, Magav/YAMAM coordination, and Ministry of Public Security system interoperability.',
              },
              {
                title: es ? 'K-Safety: Smart City y Conciencia Situacional ממ"ג' : 'K-Safety: Smart City & ממ"ג Situational Awareness',
                desc: es
                  ? 'Conciencia situacional en tiempo real integrada con ממ"ג (GIS nacional) y centros de control urbano de Smart City (Tel Aviv Digital Twin, Smart Haifa, CyberSpark Be\'er Sheva) — con datos del MDA, sistema TAMAS/ANPR y alertas de seguridad nacional.'
                  : 'Real-time situational awareness integrated with ממ"ג (national GIS) and Smart City urban control centres (Tel Aviv Digital Twin, Smart Haifa, CyberSpark Be\'er Sheva) — with MDA data, TAMAS/ANPR system, and national security alerts.',
              },
              {
                title: es ? 'K-Video: Gestión conforme a Ley Privacidad/תיקון 13' : 'K-Video: Privacy Law/Amendment 13-Compliant Management',
                desc: es
                  ? 'Gestión centralizada de cámaras urbanas y ANPR/TAMAS con analítica IA conforme a la Ley de Privacidad/תיקון 13/PPA — con Privacy Impact Assessment, registro de bases de datos PPA, base legal policial, gestión de retención y cumplimiento INCD/ISA/Directiva 3.2.'
                  : 'Centralised urban camera and ANPR/TAMAS management with AI analytics compliant with Privacy Protection Law/Amendment 13/PPA — with Privacy Impact Assessment, PPA database registry, police legal basis, retention management, and INCD/ISA/Directive 3.2 compliance.',
              },
            ].map((item) => (
              <div key={item.title} style={{ background: '#fff', borderRadius: 12, padding: '24px 20px', boxShadow: '0 1px 4px rgba(0,0,0,.06)' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: ACCENT, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '64px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: 36 }}>
            {es ? 'Preguntas Frecuentes: Seguridad Pública en Israel' : 'FAQ: Public Safety in Israel'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {faqs.map((faq) => (
              <div key={faq.question} style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20 }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 8 }}>{faq.question}</h3>
                <p style={{ fontSize: '0.92rem', color: '#475569', margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section style={{ padding: '48px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 24 }}>
            {es ? 'Guías de Mercado Relacionadas' : 'Related Market Guides'}
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {[
              { href: '/resources/public-safety-software-uae', label: es ? 'EAU' : 'UAE' },
              { href: '/resources/public-safety-software-middle-east', label: es ? 'Oriente Medio' : 'Middle East' },
              { href: '/resources/public-safety-software-turkey', label: es ? 'Turquía' : 'Türkiye' },
              { href: '/resources/public-safety-software-singapore', label: es ? 'Singapur' : 'Singapore' },
              { href: '/resources/public-safety-software-united-kingdom', label: es ? 'Reino Unido' : 'UK' },
              { href: '/resources/public-safety-software-germany', label: es ? 'Alemania' : 'Germany' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '8px 18px', fontSize: '0.9rem', color: ACCENT, textDecoration: 'none', fontWeight: 600 }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        es={es}
        h2={es ? '¿Listo para Modernizar la Seguridad Pública en Israel?' : 'Ready to Modernise Public Safety in Israel?'}
        subtitle={es
          ? 'Demo personalizada para la Policía de Israel y el MDA — adaptada al modelo MCEI, TETRA digital, Smart City israelí y cumplimiento Ley de Privacidad/תיקון 13/INCD.'
          : 'Personalised demo for Israel Police and MDA — tailored to the MCEI model, digital TETRA, Israeli Smart City ecosystem, and Privacy Law/Amendment 13/INCD compliance.'}
      />
      <Footer es={es} />
    </>
  )
}
