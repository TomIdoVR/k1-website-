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
  return generatePageMetadata('publicSafetySoftwareHungary', locale)
}

export default async function PublicSafetySoftwareHungaryPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-hungary/`
    : `${baseUrl}/resources/public-safety-software-hungary/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Hungría' : 'Public Safety Software — Hungary', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Hungría?',
      answer: 'Hungría tiene un sistema de seguridad pública centralizado bajo el Belügyminisztérium (BM — Ministerio del Interior). La Rendőrség (Policía Húngara) es la fuerza policial nacional, organizada en 19 Rendőr-főkapitányságok (Comandancias Policiales de Condado) más la Budapesti Rendőr-főkapitányság (Policía Metropolitana de Budapest) y la ORFK (Országos Rendőr-főkapitányság — Jefatura Nacional de Policía). La Katasztrófavédelem (Directorate General for Disaster Management — BM OKF) es la organización nacional que gestiona la Tűzoltóság (bomberos) y la protección civil. El Országos Mentőszolgálat (OMSZ — Servicio Nacional de Ambulancias) gestiona los servicios de ambulancias bajo el Ministerio de Sanidad. El TEK (Terrorelhárítási Központ — Centro Antiterrorista) es la unidad élite antiterrorista. El ABI (Alkotmányvédelmi Hivatal — Oficina de Protección Constitucional) es el servicio de inteligencia interior. Los números de emergencia son 107 (policía), 105 (bomberos), 104 (ambulancias) y 112 (europeo unificado).',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Hungría? ¿Qué es la red VIRTAL?',
      answer: 'Hungría opera un sistema de despacho a través del número único 112 y los números específicos 104 (OMSZ), 105 (bomberos) y 107 (policía). Los centros de despacho 112 son gestionados por el BM (Ministerio del Interior) y los centros regionales de emergencias. Los centros operativos de la Rendőrség (Rendőrségi Ügyeletkek) gestionan el despacho policial a nivel de condado y nacional. La red de radiocomunicaciones digitales de Hungría es la VIRTAL (Virtuális Nemzeti Rádió Telefon Alrendszer — Virtual National Radio Telephone Subsystem), que usa tecnología TETRA para conectar a policía, bomberos, ambulancias y otras organizaciones de seguridad. VIRTAL es operada por el gobierno y cubre todo el territorio húngaro. Hungría está evaluando la evolución de VIRTAL hacia tecnologías broadband 4G/5G para complementar la cobertura TETRA. Los Katasztrófavédelem Területi Szervei (servicios regionales de protección civil) coordinan las emergencias de nivel regional con los condados.',
    },
    {
      question: '¿Cuál es el marco de protección de datos para software de seguridad pública en Hungría?',
      answer: 'Hungría implementó el RGPD de la UE directamente como Estado miembro. La autoridad de control es la NAIH (Nemzeti Adatvédelmi és Információszabadság Hatóság — Autoridad Nacional de Protección de Datos y Libertad de Información). La ley complementaria húngara es la Infotv. (törvény az információs önrendelkezési jogról és az információszabadságról — Ley de Autodeterminación Informativa y Libertad de Información, LXIII de 2011, modificada varias veces). Los sistemas policiales están sujetos adicionalmente a la Rtv. (Rendőrségi törvény — Ley de Policía) y a las regulaciones específicas del BM sobre el tratamiento de datos en sistemas de seguridad pública. La Directiva Policial UE 2016/680 fue implementada en la legislación húngara. La videovigilancia policial en espacios públicos requiere base legal específica y DPIA bajo el RGPD. El 2024/LXXXII. törvény actualizó el marco de protección de datos húngaro para alinearlo con las nuevas directrices del CEPD.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Hungría?',
      answer: 'La contratación pública en Hungría se rige por la Kbt. (Közbeszerzési törvény — Ley de Contratación Pública, 2015. évi CXLIII. törvény), que implementa las directivas europeas. Las licitaciones se publican en el EKR (Elektronikus Közbeszerzési Rendszer — Sistema Electrónico de Contratación Pública), el portal oficial húngaro, y en la Közbeszerzési Értesítő (Boletín de Contratación Pública). El BM (Ministerio del Interior) y la ORFK licitan directamente los sistemas de la Rendőrség y el BM OKF. El OMSZ tiene su propio proceso de contratación para sistemas de despacho y ambulancias. Las contrataciones que superen los umbrales europeos aparecen en TED/OJEU. Los fondos de la UE (Kohéziós Alap — Fondo de Cohesión, ERFA — Fondo Europeo de Desarrollo Regional) co-financian la modernización de la seguridad pública húngara. El Digitális Magyarország (Digital Hungría) y el Köfop (Közigazgatási és Közszolgáltatás-fejlesztési Operatív Program) impulsan la digitalización de los servicios públicos incluida la seguridad.',
    },
    {
      question: '¿Cuáles son los requisitos de ciberseguridad para software de seguridad pública en Hungría?',
      answer: 'La ciberseguridad en Hungría está regulada por la NIS2 transpuesta mediante el 2023. évi XXIII. törvény (Ley de Ciberseguridad) y las regulaciones del SZTFH (Szabályozási Hatóság — Autoridad de Supervisión Regulatoria, también conocida como Supervisory Authority for Regulatory Affairs). El NBSZ (Nemzeti Biztonsági Szakszolgálat — Servicio Nacional de Seguridad Especializado) es el organismo nacional de seguridad de la información del gobierno. El KIBEV (Kibervédelmi Hatóság — Autoridad de Ciberdefensa) coordina la respuesta a incidentes y la protección de infraestructuras críticas. El GovCERT Hungary opera bajo supervisión del NBSZ. Los sistemas de la Rendőrség y el BM OKF están clasificados como infraestructuras críticas y deben cumplir los estándares del NBSZ. El 2021. évi LXXXIX. törvény (Ley de Inteligencia de Señales) regula los sistemas de vigilancia electrónica. Hungary-CERT es el equipo de respuesta a incidentes para el sector privado.',
    },
    {
      question: '¿Qué proyectos Smart City y de digitalización de la seguridad pública existen en Hungría?',
      answer: 'Hungría impulsa la digitalización de la seguridad pública con varios proyectos. Budapest tiene el programa Smart Budapest con integración de sistemas de videovigilancia urbana de la Rendőrség y la Policía Municipal de Budapest (BKK). El sistema HERR (Helyszíni Esemény- és Rendészeti Rendszer) gestiona los incidentes policiales con herramientas móviles. El sistema ROBOTZSARU/ROBZSARU es el sistema de información policial integrado de la Rendőrség (equivalente al POLSAG danés o el NICHE neerlandés). El proyecto KEHOP (Környezeti és Energiahatékonysági Operatív Program) financia sensores ambientales y de inundaciones integrados con los sistemas del BM OKF para la gestión de catástrofes naturales (Hungría tiene riesgo significativo de inundaciones del Danubio). El programa Digitális Magyarország 2.0 impulsa la modernización de TIC del sector público con fondos del Plan de Recuperación de la UE. El sistema ANPR/FRR (Forgalomirányítás és Rendészet Rendszere) gestiona el reconocimiento de matrículas para la Rendőrség.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la Rendőrség húngara, el BM OKF y el OMSZ?',
      answer: 'KabatOne integra las capacidades que la Rendőrség, el BM OKF (Katasztrófavédelem), el OMSZ y los centros 112 necesitan unificadas: despacho CAD multiagencia compatible con los 19 condados y la ORFK — con integración VIRTAL TETRA y preparación para broadband 4G/5G, coordinación 107/105/104/112 y gestión de emergencias de catástrofes (inundaciones, incendios forestales), compatible con los centros regionales del Katasztrófavédelem (K-Dispatch), gestión de cámaras urbanas y ANPR/FRR con analítica IA conforme a RGPD/NAIH/Infotv. — con DPIA, base legal Rtv., gestión de retención y cumplimiento NIS2/SZTFH/NBSZ (K-Video), y conciencia situacional GIS para la Rendőrség, el BM OKF, el OMSZ y el TEK — con integración Smart Budapest y sensores de inundación del Danubio para gestión de catástrofes naturales (K-Safety). Cloud EU con cumplimiento RGPD/NAIH y NIS2/SZTFH/NBSZ. Compatible con los marcos de contratación EKR/Kbt./TED. Demo adaptada al modelo centralizado húngaro de seguridad pública.',
    },
  ] : [
    {
      question: 'How is public safety organised in Hungary?',
      answer: 'Hungary has a centralised public safety system under the Belügyminisztérium (BM — Ministry of the Interior). The Rendőrség (Hungarian Police) is the national police force, organised across 19 Rendőr-főkapitányságok (County Police Headquarters) plus the Budapest Metropolitan Police and the ORFK (Országos Rendőr-főkapitányság — National Police Headquarters). The Katasztrófavédelem (BM OKF — Directorate General for Disaster Management) manages the Tűzoltóság (fire services) and civil protection nationally. The OMSZ (Országos Mentőszolgálat — National Ambulance Service) manages ambulance services under the Ministry of Health. The TEK (Terrorelhárítási Központ — Counter-Terrorism Centre) is the elite counter-terrorism unit. The ABI (Alkotmányvédelmi Hivatal — Constitutional Protection Office) is the domestic intelligence service. Emergency numbers are 107 (police), 105 (fire), 104 (ambulance), and 112 (unified European).',
    },
    {
      question: 'How does emergency dispatch work in Hungary? What is the VIRTAL network?',
      answer: 'Hungary operates a dispatch system through the unified 112 number and specific numbers 104 (OMSZ), 105 (fire), and 107 (police). The 112 dispatch centres are managed by the Ministry of the Interior and regional emergency centres. Rendőrség operations centres (Rendőrségi Ügyeletkek) handle police dispatch at county and national level. Hungary\'s national digital radiocommunications network is VIRTAL (Virtuális Nemzeti Rádió Telefon Alrendszer — Virtual National Radio Telephone Subsystem), using TETRA technology to connect police, fire, ambulance, and other security organisations. VIRTAL is government-operated and covers the entire Hungarian territory. Hungary is evaluating VIRTAL evolution towards 4G/5G broadband technologies to complement TETRA coverage. The Katasztrófavédelem regional services coordinate regional emergencies with counties.',
    },
    {
      question: 'What is the data protection framework for public safety software in Hungary?',
      answer: 'Hungary implemented EU GDPR directly as an EU member state. The supervisory authority is the NAIH (Nemzeti Adatvédelmi és Információszabadság Hatóság — National Authority for Data Protection and Freedom of Information). The complementary Hungarian law is the Infotv. (Information Self-Determination and Freedom of Information Act, Act LXIII of 2011, amended several times). Police systems are additionally subject to the Rtv. (Rendőrségi törvény — Police Act) and specific Ministry of Interior regulations on data processing in public safety systems. The EU Law Enforcement Directive 2016/680 was implemented in Hungarian law. Police video surveillance in public spaces requires a specific legal basis and DPIA under GDPR. The 2024/LXXXII Act updated the Hungarian data protection framework to align with new EDPB guidelines.',
    },
    {
      question: 'How is public safety software procured in Hungary?',
      answer: 'Hungarian public procurement is governed by the Kbt. (Közbeszerzési törvény — Public Procurement Act, Act CXLIII of 2015), implementing EU directives. Tenders are published on the EKR (Elektronikus Közbeszerzési Rendszer — Electronic Public Procurement System), the official Hungarian portal, and in the Közbeszerzési Értesítő (Public Procurement Bulletin). The Ministry of Interior and ORFK directly procure Rendőrség and BM OKF systems. OMSZ has its own procurement for dispatch and ambulance systems. Contracts above EU thresholds appear on TED/OJEU. EU funds (Cohesion Fund, ERDF) co-finance Hungarian public safety modernisation. The Digitális Magyarország (Digital Hungary) programme and Köfop (Public Administration and Public Service Development Operational Programme) drive ICT digitalisation of public services including security.',
    },
    {
      question: 'What are the cybersecurity requirements for public safety software in Hungary?',
      answer: 'Cybersecurity in Hungary is regulated by NIS2 transposed through Act XXIII of 2023 (Cybersecurity Act) and regulations of the SZTFH (Szabályozási Hatóság — Supervisory Authority for Regulatory Affairs). The NBSZ (Nemzeti Biztonsági Szakszolgálat — National Security Special Service) is the national government information security body. KIBEV (Kibervédelmi Hatóság — Cyber Defence Authority) coordinates incident response and critical infrastructure protection. GovCERT Hungary operates under NBSZ supervision. Rendőrség and BM OKF systems are classified as critical infrastructure and must comply with NBSZ standards. Hungary-CERT handles incident response for the private sector.',
    },
    {
      question: 'What Smart City and public safety digitalisation projects exist in Hungary?',
      answer: 'Hungary drives public safety digitalisation through several projects. Budapest has the Smart Budapest programme integrating Rendőrség and Municipal Police (BKK) urban surveillance systems. The HERR system manages police incidents with mobile tools. ROBOTZSARU/ROBZSARU is the Rendőrség\'s integrated police information system. The KEHOP programme funds environmental and flood sensors integrated with BM OKF systems for natural disaster management (Hungary faces significant Danube flood risk). The Digitális Magyarország 2.0 programme drives ICT modernisation of the public sector with EU Recovery Plan funds. The ANPR/FRR system manages plate recognition for the Rendőrség.',
    },
    {
      question: 'Why is KabatOne suited for Hungarian Rendőrség, BM OKF, and OMSZ?',
      answer: 'KabatOne integrates the capabilities that Rendőrség, BM OKF (Katasztrófavédelem), OMSZ, and 112 centres need unified: multi-agency CAD dispatch compatible with all 19 counties and ORFK — with VIRTAL TETRA integration and 4G/5G broadband readiness, 107/105/104/112 coordination and disaster emergency management (floods, wildfires), compatible with Katasztrófavédelem regional centres (K-Dispatch), urban camera and ANPR/FRR management with AI analytics compliant with GDPR/NAIH/Infotv. — with DPIA, Rtv. legal basis, retention management, and NIS2/SZTFH/NBSZ compliance (K-Video), and GIS situational awareness for Rendőrség, BM OKF, OMSZ, and TEK — with Smart Budapest integration and Danube flood sensors for natural disaster management (K-Safety). EU cloud with GDPR/NAIH and NIS2/SZTFH/NBSZ compliance. Compatible with EKR/Kbt./TED procurement frameworks. Demo adapted to Hungary\'s centralised public safety model.',
    },
  ]

  const articleHeadline = es
    ? 'Software de Seguridad Pública para Hungría: Rendőrség, VIRTAL TETRA, BM OKF/Katasztrófavédelem, RGPD/NAIH y NIS2/SZTFH'
    : 'Public Safety Software for Hungary: Rendőrség, VIRTAL TETRA, BM OKF/Katasztrófavédelem, GDPR/NAIH & NIS2/SZTFH'

  const articleDescription = es
    ? 'Plataforma unificada para la Rendőrség húngara y el BM OKF — despacho CAD integrado con VIRTAL TETRA y 19 condados policiales, gestión de cámaras y ANPR conforme a RGPD/NAIH, y cumplimiento NIS2/SZTFH con procurement EKR/Kbt.'
    : 'Unified platform for Hungarian Rendőrség and BM OKF — integrated CAD dispatch with VIRTAL TETRA and 19 police counties, camera and ANPR management compliant with GDPR/NAIH, and NIS2/SZTFH compliance with EKR/Kbt procurement.'

  const challenges = es ? [
    {
      icon: '🚔',
      title: '19 condados + Budapest y coordinación ORFK/BM OKF',
      desc: 'Coordinar la Rendőrség en 19 condados y Budapest con el BM OKF (Katasztrófavédelem) para la gestión de emergencias — con el OMSZ para ambulancias y el TEK para incidentes antiterroristas — a través de los centros regionales de despacho 112 del BM.',
    },
    {
      icon: '🌊',
      title: 'Gestión de inundaciones y catástrofes del Danubio',
      desc: 'Hungría enfrenta riesgo significativo de inundaciones del Danubio y el Tisza. La coordinación del BM OKF (Katasztrófavédelem) con la Rendőrség y el OMSZ durante catástrofes naturales requiere plataformas de conciencia situacional GIS con sensores de nivel de agua y alertas en tiempo real.',
    },
    {
      icon: '📡',
      title: 'Red VIRTAL TETRA y evolución hacia broadband',
      desc: 'Integrar los sistemas CAD con la red VIRTAL TETRA del BM mientras se evalúa la evolución hacia comunicaciones broadband 4G/5G — garantizando continuidad operativa en áreas rurales y zonas de frontera con Austria, Eslovaquia, Ucrania, Rumanía, Serbia y Croacia.',
    },
    {
      icon: '🔒',
      title: 'RGPD/NAIH, NIS2/SZTFH y NBSZ compliance',
      desc: 'Cumplir el RGPD (Infotv./Ley Rtv.), la Directiva Policial 2016/680, la ley de ciberseguridad húngara NIS2 (2023. évi XXIII. törvény) y los estándares del NBSZ para sistemas de infraestructura crítica de seguridad pública.',
    },
  ] : [
    {
      icon: '🚔',
      title: '19 counties + Budapest and ORFK/BM OKF coordination',
      desc: 'Coordinating Rendőrség across 19 counties and Budapest with BM OKF (Katasztrófavédelem) for emergency management — with OMSZ for ambulances and TEK for counter-terrorism incidents — through Ministry of Interior regional 112 dispatch centres.',
    },
    {
      icon: '🌊',
      title: 'Danube flood and natural disaster management',
      desc: 'Hungary faces significant Danube and Tisza flood risk. BM OKF (Katasztrófavédelem) coordination with Rendőrség and OMSZ during natural disasters requires GIS situational awareness platforms with water level sensors and real-time alerts.',
    },
    {
      icon: '📡',
      title: 'VIRTAL TETRA network and broadband evolution',
      desc: 'Integrating CAD systems with the Ministry of Interior VIRTAL TETRA network while evaluating evolution to 4G/5G broadband communications — ensuring operational continuity in rural areas and border zones with Austria, Slovakia, Ukraine, Romania, Serbia, and Croatia.',
    },
    {
      icon: '🔒',
      title: 'GDPR/NAIH, NIS2/SZTFH and NBSZ compliance',
      desc: 'Complying with GDPR (Infotv./Rtv.), EU Law Enforcement Directive 2016/680, Hungarian NIS2 cybersecurity act (Act XXIII of 2023), and NBSZ standards for public safety critical infrastructure systems.',
    },
  ]

  const stats = es ? [
    { value: '19+Bpest', label: 'Condados Rendőrség' },
    { value: '107/105/104', label: 'Números de emergencia' },
    { value: 'VIRTAL', label: 'Red TETRA nacional' },
    { value: 'NBSZ', label: 'Seguridad Info. Nacional' },
  ] : [
    { value: '19+Bpest', label: 'Rendőrség counties' },
    { value: '107/105/104', label: 'Emergency numbers' },
    { value: 'VIRTAL', label: 'National TETRA network' },
    { value: 'NBSZ', label: 'National Info Security' },
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
            {es ? 'Guía de Mercado · Hungría' : 'Market Guide · Hungary'}
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, lineHeight: 1.2, margin: '0 0 20px' }}>
            {es
              ? 'Software de Seguridad Pública para Hungría'
              : 'Public Safety Software for Hungary'}
          </h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.9, maxWidth: 680, margin: '0 auto 32px' }}>
            {es
              ? 'Rendőrség, BM OKF/Katasztrófavédelem, OMSZ, VIRTAL TETRA, RGPD/NAIH y NIS2/SZTFH — plataforma unificada para el sistema de seguridad pública húngaro.'
              : 'Rendőrség, BM OKF/Katasztrófavédelem, OMSZ, VIRTAL TETRA, GDPR/NAIH & NIS2/SZTFH — unified platform for Hungary\'s public safety system.'}
          </p>
          <Link
            href="/contact"
            style={{ background: ACCENT, color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}
          >
            {es ? 'Solicitar Demo para Hungría' : 'Request Hungary Demo'}
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
            {es ? 'Desafíos del Mercado Húngaro de Seguridad Pública' : 'Hungarian Public Safety Market Challenges'}
          </h2>
          <p style={{ color: '#475569', marginBottom: 36 }}>
            {es
              ? 'El modelo centralizado húngaro con el BM coordinando policía, bomberos y protección civil, el riesgo de inundaciones del Danubio y las exigencias de ciberseguridad del NBSZ crean un entorno exigente para los proveedores de tecnología.'
              : 'Hungary\'s centralised model with the Ministry of Interior coordinating police, fire, and civil protection, the Danube flood risk, and NBSZ cybersecurity requirements create a demanding environment for technology providers.'}
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
            {es ? 'Cómo KabatOne Unifica la Seguridad Pública Húngara' : 'How KabatOne Unifies Hungarian Public Safety'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
            {[
              {
                title: es ? 'K-Dispatch: Despacho CAD Multiagencia' : 'K-Dispatch: Multi-Agency CAD Dispatch',
                desc: es
                  ? 'Despacho integrado para los 19 condados y la ORFK — con integración VIRTAL TETRA y preparación broadband 4G/5G, coordinación 107/105/104/112, gestión de catástrofes (inundaciones del Danubio) y compatibilidad con los centros regionales del Katasztrófavédelem y el OMSZ.'
                  : 'Integrated dispatch for all 19 counties and ORFK — with VIRTAL TETRA integration and 4G/5G broadband readiness, 107/105/104/112 coordination, natural disaster management (Danube floods), and compatibility with Katasztrófavédelem regional centres and OMSZ.',
              },
              {
                title: es ? 'K-Safety: GIS y Gestión de Catástrofes' : 'K-Safety: GIS and Disaster Management',
                desc: es
                  ? 'Conciencia situacional en tiempo real integrada con sensores de inundación del Danubio/Tisza, el KEHOP (sensores ambientales), datos sísmicos y el programa Smart Budapest — con coordinación BM OKF/Katasztrófavédelem, TEK y protección civil cantonal para emergencias nacionales.'
                  : 'Real-time situational awareness integrated with Danube/Tisza flood sensors, KEHOP (environmental sensors), seismic data, and Smart Budapest programme — with BM OKF/Katasztrófavédelem, TEK, and county civil protection coordination for national emergencies.',
              },
              {
                title: es ? 'K-Video: Gestión de Cámaras conforme a RGPD/NAIH' : 'K-Video: GDPR/NAIH-Compliant Camera Management',
                desc: es
                  ? 'Gestión centralizada de cámaras urbanas y ANPR/FRR con analítica IA conforme a RGPD/NAIH/Infotv. — con DPIA, base legal Rtv./Directiva 2016/680, gestión de retención y cumplimiento NIS2/SZTFH/NBSZ para sistemas clasificados como infraestructura crítica.'
                  : 'Centralised urban camera and ANPR/FRR management with AI analytics compliant with GDPR/NAIH/Infotv. — with DPIA, Rtv./Directive 2016/680 legal basis, retention management, and NIS2/SZTFH/NBSZ compliance for systems classified as critical infrastructure.',
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
            {es ? 'Preguntas Frecuentes: Seguridad Pública en Hungría' : 'FAQ: Public Safety in Hungary'}
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
              { href: '/resources/public-safety-software-austria', label: es ? 'Austria' : 'Austria' },
              { href: '/resources/public-safety-software-czech-republic', label: es ? 'República Checa' : 'Czech Republic' },
              { href: '/resources/public-safety-software-poland', label: es ? 'Polonia' : 'Poland' },
              { href: '/resources/public-safety-software-germany', label: es ? 'Alemania' : 'Germany' },
              { href: '/resources/public-safety-software-switzerland', label: es ? 'Suiza' : 'Switzerland' },
              { href: '/resources/public-safety-software-greece', label: es ? 'Grecia' : 'Greece' },
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
        h2={es ? '¿Listo para Modernizar la Seguridad Pública en Hungría?' : 'Ready to Modernise Public Safety in Hungary?'}
        subtitle={es
          ? 'Demo personalizada para la Rendőrség húngara y el BM OKF — adaptada a los 19 condados, VIRTAL TETRA, gestión de inundaciones y cumplimiento RGPD/NAIH/NIS2/SZTFH.'
          : 'Personalised demo for Hungarian Rendőrség and BM OKF — tailored to 19 counties, VIRTAL TETRA, flood management, and GDPR/NAIH/NIS2/SZTFH compliance.'}
      />
      <Footer es={es} />
    </>
  )
}
