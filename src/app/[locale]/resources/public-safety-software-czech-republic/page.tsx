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
  return generatePageMetadata('publicSafetySoftwareCzechRepublic', locale)
}

export default async function PublicSafetySoftwareCzechRepublicPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-czech-republic/`
    : `${baseUrl}/resources/public-safety-software-czech-republic/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — República Checa' : 'Public Safety Software — Czech Republic', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en la República Checa?',
      answer: 'La seguridad pública en la República Checa está coordinada bajo el Ministerio del Interior (Ministerstvo vnitra — MV ČR). La Policie České republiky (Policía de la República Checa) es la fuerza policial nacional, organizada en 14 Krajská ředitelství policie (direcciones regionales de policía) más la Policejní prezidium (Presidio de la Policía) como cúpula nacional. Las fuerzas de bomberos son el Hasičský záchranný sbor ČR (HZS ČR), organizado en 14 krajských HZS (cuerpos regionales) bajo el Generální ředitelství HZS ČR. Las ambulancias son gestionadas por las Zdravotnická záchranná služba (ZZS) de cada región, 14 en total, bajo supervisión del Ministerio de Salud. El sistema de coordinación de emergencias es el Integrovaný záchranný systém (IZS — Sistema de Rescate Integrado), que coordina policía, bomberos y ambulancias. El Bezpečnostní informační služba (BIS) es el servicio de inteligencia interior. Los números de emergencia son 112 (europeo unificado), 150 (bomberos), 155 (ambulancias) y 158 (policía).',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en la República Checa? ¿Qué es PEGAS?',
      answer: 'La República Checa opera el sistema de despacho de emergencias a través de las Krajská operační střediska (KOS — centros de despacho regionales), uno por región, que gestionan las llamadas al 112 y coordinan el despacho del IZS (policía-bomberos-ambulancias). Los centros de despacho policial son los Operační střediska Policie ČR en cada región. Los bomberos tienen sus propios Krajská operační střediska HZS. La red de radiocomunicaciones digitales para los servicios de emergencia es PEGAS (Plně integrovaný a Elektronicky Garantovaný komunikační Systém), la red TETRA nacional de la República Checa, operada bajo mandato del Ministerio del Interior. PEGAS conecta a policía, bomberos, ambulancias y otros servicios de seguridad en todo el territorio nacional con comunicaciones digitales seguras y cifradas. La República Checa está evaluando la evolución de PEGAS hacia broadband 4G/5G para complementar la cobertura TETRA en zonas urbanas densas y situaciones de alto volumen de datos.',
    },
    {
      question: '¿Cuál es el marco de protección de datos para software de seguridad pública en la República Checa?',
      answer: 'La República Checa implementó el RGPD de la UE mediante la Ley de Protección de Datos Personales (zákon č. 110/2019 Sb. — o zpracování osobních údajů), que actualizó el marco legal anterior. La autoridad de control es la Úřad pro ochranu osobních údajů (ÚOOÚ — Oficina de Protección de Datos Personales). Los sistemas policiales están sujetos adicionalmente al zákon č. 273/2008 Sb. (Ley de Policía) y a regulaciones específicas sobre el tratamiento de datos por las fuerzas de seguridad. La ley del IZS (zákon č. 239/2000 Sb.) establece el marco de coordinación de emergencias. Los datos biométricos en sistemas de videovigilancia policial requieren evaluaciones de impacto (DPIA) obligatorias bajo el RGPD. La directiva Policial UE (Directiva 2016/680) fue implementada en la legislación checa, separando el tratamiento de datos policiales del RGPD general. La transferencia de datos entre sistemas del IZS requiere acuerdos de intercambio de datos conformes a la ÚOOÚ.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en la República Checa?',
      answer: 'La contratación pública en la República Checa se rige por la Ley de Contratación Pública (zákon č. 134/2016 Sb. — o zadávání veřejných zakázek), que implementa las directivas europeas. El Národní elektronický nástroj (NEN) es la plataforma electrónica de contratación pública del gobierno checo, donde se publican las licitaciones federales. El portal ISVZ (Informační systém o veřejných zakázkách) es el registro de contratos públicos. La Správa státních hmotných rezerv (SSHR — Administración de Reservas Estatales) coordina algunas adquisiciones de seguridad nacional. El Ministerio del Interior licita directamente los sistemas de la Policie ČR y el HZS ČR a nivel nacional. Las 14 regiones tienen autonomía en la adquisición de sus sistemas de ZZS y algunos sistemas de HZS regional. Los contratos que superen los umbrales europeos aparecen en TED/OJEU. La digitalizaci del Estado checo (Digital Czech v.2 / Digitální Česko) impulsa la modernización de los sistemas TIC de seguridad pública.',
    },
    {
      question: '¿Cuáles son los requisitos de ciberseguridad para software de seguridad pública en la República Checa?',
      answer: 'La ciberseguridad en la República Checa está regulada por la Ley sobre Ciberseguridad (zákon č. 181/2014 Sb. — o kybernetické bezpečnosti) y su nueva versión actualizada para transponer NIS2 (zákon č. 60/2024 Sb.). El NÚKIB (Národní úřad pro kybernetickou a informační bezpečnost — Oficina Nacional para la Ciberseguridad e Información) es la autoridad nacional de ciberseguridad, equivalente al ANSSI francés o al BSI alemán. El NÚKIB publica los requisitos de seguridad para infraestructuras críticas y sistemas de información de importancia significativa (ISVS). Los sistemas de la Policie ČR y el HZS ČR están clasificados como infraestructuras críticas y deben cumplir los estándares del NÚKIB. El GovCERT.cz (operado por el NÚKIB) gestiona la respuesta a incidentes en el sector gubernamental. La nueva ley de ciberseguridad 2024 amplió el alcance de los operadores regulados siguiendo la Directiva NIS2, con requisitos de notificación de incidentes y auditorías de seguridad.',
    },
    {
      question: '¿Qué proyectos Smart City y de digitalización de seguridad pública existen en la República Checa?',
      answer: 'La República Checa impulsa la digitalización de la seguridad pública a través de varios proyectos clave. El proyecto Chytrá policie (Policía Inteligente) del MV ČR moderniza los sistemas de gestión de incidentes de la Policie ČR con sistemas ISKP (Informační systém krizového plánování). Praga (Praha) tiene el programa Smart Prague con integración de cámaras urbanas, gestión de tráfico TRAFIS y centros de mando de la Policie Praha y la Městská policie Praha. Brno, Ostrava y Plzeň tienen programas Smart City con integración de cámaras, sensores de tráfico y sistemas de ANPR. El sistema AMDS (Automatizovaný monitorovací a diagnostický systém) gestiona la vigilancia de infraestructuras. El KASR (Koordinační a analytické středisko) apoya el análisis de inteligencia. El proyecto e-Government czechpoint moderniza los sistemas digitales de la administración pública. Los Krajský operační program impulsan la modernización de los centros de despacho del IZS en todas las regiones con fondos europeos.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la Policie ČR, el IZS y PEGAS TETRA?',
      answer: 'KabatOne integra las capacidades que la Policie ČR, el HZS ČR, la ZZS y los centros IZS necesitan unificadas: despacho CAD multiagencia compatible con los 14 Krajská operační střediska del IZS — con integración PEGAS TETRA y preparación para broadband 4G/5G, clasificación automática de incidentes y coordinación policía-bomberos-ambulancias conforme al zákon č. 239/2000 Sb. del IZS (K-Dispatch), gestión de cámaras urbanas y ANPR con analítica IA conforme a RGPD/zákon č. 110/2019 Sb. y ÚOOÚ — con DPIA, base legal zákon č. 273/2008 Sb. y gestión de retención (K-Video), y conciencia situacional GIS compartida entre la Policie ČR, el HZS ČR, la ZZS y el BIS para coordinación en crisis y grandes operaciones de seguridad — con integración Smart Prague/TRAFIS y sistemas de alerta nacional (K-Safety). Cloud EU con cumplimiento RGPD/ÚOOÚ y zákon č. 60/2024 Sb./NÚKIB/NIS2. Compatible con los marcos de contratación NEN/zákon č. 134/2016 Sb. Demo adaptada al modelo del IZS checo.',
    },
  ] : [
    {
      question: 'How is public safety organised in the Czech Republic?',
      answer: 'Public safety in the Czech Republic is coordinated under the Ministry of the Interior (Ministerstvo vnitra — MV ČR). The Policie České republiky (Police of the Czech Republic) is the national police force, organised across 14 Krajská ředitelství policie (regional police directorates) plus the Policejní prezidium (Police Presidium) as the national headquarters. Fire services are the Hasičský záchranný sbor ČR (HZS ČR — Fire Rescue Service), organised in 14 krajských HZS (regional fire brigades) under the Generální ředitelství HZS ČR. Ambulance services are managed by the Zdravotnická záchranná služba (ZZS) in each region — 14 in total — under Ministry of Health oversight. The emergency coordination system is the Integrovaný záchranný systém (IZS — Integrated Rescue System), coordinating police, fire, and ambulance. The Bezpečnostní informační služba (BIS) is the domestic intelligence service. Emergency numbers are 112 (unified European), 150 (fire), 155 (ambulance), and 158 (police).',
    },
    {
      question: 'How does emergency dispatch work in the Czech Republic? What is PEGAS?',
      answer: 'The Czech Republic operates emergency dispatch through Krajská operační střediska (KOS — regional dispatch centres), one per region, managing 112 calls and coordinating IZS dispatch (police-fire-ambulance). Police dispatch centres are the Operační střediska Policie ČR in each region. Fire brigades have their own Krajská operační střediska HZS. The digital radiocommunications network for emergency services is PEGAS (Plně integrovaný a Elektronicky Garantovaný komunikační Systém — Fully Integrated and Electronically Guaranteed Communication System), the national TETRA network of the Czech Republic, operated under Ministry of Interior mandate. PEGAS connects police, fire brigades, ambulances, and other security services across the entire national territory with secure encrypted digital communications. The Czech Republic is evaluating PEGAS evolution towards 4G/5G broadband to complement TETRA coverage in dense urban areas and high-data-volume situations.',
    },
    {
      question: 'What is the data protection framework for public safety software in the Czech Republic?',
      answer: 'The Czech Republic implemented EU GDPR through the Personal Data Processing Act (zákon č. 110/2019 Sb. — o zpracování osobních údajů), updating the previous legal framework. The supervisory authority is the Úřad pro ochranu osobních údajů (ÚOOÚ — Office for Personal Data Protection). Police systems are additionally subject to zákon č. 273/2008 Sb. (Police Act) and specific regulations on data processing by security forces. The IZS Act (zákon č. 239/2000 Sb.) establishes the emergency coordination framework. Biometric data in police surveillance systems requires mandatory Data Protection Impact Assessments (DPIA) under GDPR. The EU Law Enforcement Directive (2016/680) was implemented in Czech law, separating police data processing from general GDPR. Data sharing between IZS systems requires data exchange agreements compliant with ÚOOÚ.',
    },
    {
      question: 'How is public safety software procured in the Czech Republic?',
      answer: 'Czech public procurement is governed by the Public Procurement Act (zákon č. 134/2016 Sb. — o zadávání veřejných zakázek), implementing EU directives. The Národní elektronický nástroj (NEN) is the Czech government\'s e-procurement platform, where federal tenders are published. The ISVZ portal (Public Procurement Information System) is the contracts register. The Ministry of the Interior directly procures Policie ČR and HZS ČR systems at national level. The 14 regions have autonomy in procuring ZZS systems and some regional HZS systems. Contracts above EU thresholds appear on TED/OJEU. The Czech digital transformation programme (Digitální Česko) drives modernisation of public safety ICT systems. EU Structural Funds (Regional Operational Programmes) co-finance IZS dispatch centre modernisation across regions.',
    },
    {
      question: 'What are the cybersecurity requirements for public safety software in the Czech Republic?',
      answer: 'Cybersecurity in the Czech Republic is regulated by the Cybersecurity Act (zákon č. 181/2014 Sb. — o kybernetické bezpečnosti) and its updated version transposing NIS2 (zákon č. 60/2024 Sb.). The NÚKIB (Národní úřad pro kybernetickou a informační bezpečnost — National Office for Cyber and Information Security) is the national cybersecurity authority, equivalent to the French ANSSI or German BSI. NÚKIB publishes security requirements for critical infrastructure and significant information systems (ISVS). Policie ČR and HZS ČR systems are classified as critical infrastructure and must comply with NÚKIB standards. GovCERT.cz (operated by NÚKIB) handles incident response for the government sector. The 2024 cybersecurity act expanded the scope of regulated operators following the NIS2 Directive, with incident notification requirements and security audits.',
    },
    {
      question: 'What Smart City and public safety digitalisation projects exist in the Czech Republic?',
      answer: 'The Czech Republic drives public safety digitalisation through several key projects. The Chytrá policie (Smart Police) project of MV ČR modernises Policie ČR incident management systems with ISKP (Crisis Planning Information System). Prague (Praha) has the Smart Prague programme integrating urban cameras, TRAFIS traffic management, and command centres for Policie Praha and Městská policie Praha. Brno, Ostrava, and Plzeň have Smart City programmes with camera, traffic sensor, and ANPR integration. The AMDS system manages infrastructure surveillance. GovCERT.cz supports intelligence analysis. The e-Government czechpoint project modernises digital administrative systems. Krajský operační programs (Regional Operational Programmes) drive IZS dispatch centre modernisation in all regions with EU funding.',
    },
    {
      question: 'Why is KabatOne suited for Czech Policie ČR, IZS, and PEGAS TETRA?',
      answer: 'KabatOne integrates the capabilities that Policie ČR, HZS ČR, ZZS, and IZS centres need unified: multi-agency CAD dispatch compatible with all 14 Krajská operační střediska IZS — with PEGAS TETRA integration and 4G/5G broadband readiness, automatic incident classification, and police-fire-ambulance coordination compliant with IZS Act zákon č. 239/2000 Sb. (K-Dispatch), urban camera and ANPR management with AI analytics compliant with GDPR/zákon č. 110/2019 Sb. and ÚOOÚ — with DPIA, zákon č. 273/2008 Sb. legal basis, and retention management (K-Video), and shared GIS situational awareness across Policie ČR, HZS ČR, ZZS, and BIS for crisis coordination and major security operations — with Smart Prague/TRAFIS and national alert system integration (K-Safety). EU cloud with GDPR/ÚOOÚ and zákon č. 60/2024 Sb./NÚKIB/NIS2 compliance. Compatible with NEN/zákon č. 134/2016 Sb. procurement frameworks. Demo adapted to the Czech IZS model.',
    },
  ]

  const articleHeadline = es
    ? 'Software de Seguridad Pública para la República Checa: Policie ČR, PEGAS TETRA, IZS, RGPD/ÚOOÚ y NÚKIB/NIS2'
    : 'Public Safety Software for Czech Republic: Policie ČR, PEGAS TETRA, IZS, GDPR/ÚOOÚ & NÚKIB/NIS2'

  const articleDescription = es
    ? 'Plataforma unificada para la Policie ČR y el IZS checo — despacho CAD integrado con PEGAS TETRA y 14 Krajská operační střediska, gestión de cámaras y ANPR conforme a RGPD/ÚOOÚ, y cumplimiento NÚKIB/NIS2 con procurement NEN/zákon č. 134/2016 Sb.'
    : 'Unified platform for Czech Policie ČR and IZS — integrated CAD dispatch with PEGAS TETRA and 14 Krajská operační střediska, camera and ANPR management compliant with GDPR/ÚOOÚ, and NÚKIB/NIS2 compliance with NEN procurement.'

  const challenges = es ? [
    {
      icon: '🚔',
      title: '14 regiones del IZS y coordinación policía-HZS-ZZS',
      desc: 'Coordinar la Policie ČR, el HZS ČR y las ZZS a través de 14 Krajská operační střediska — con los centros nacionales del Policejní prezidium y el Generální ředitelství HZS ČR para incidentes de nivel nacional y operaciones transfronterizas Schengen.',
    },
    {
      icon: '📡',
      title: 'Red PEGAS TETRA y evolución hacia broadband',
      desc: 'Integrar los sistemas CAD con la red PEGAS TETRA del Ministerio del Interior mientras se evalúa la evolución hacia comunicaciones broadband 4G/5G — garantizando continuidad operativa en regiones fronterizas con Austria, Alemania, Polonia y Eslovaquia.',
    },
    {
      icon: '🔒',
      title: 'RGPD/ÚOOÚ, NÚKIB y ley de ciberseguridad NIS2 (2024)',
      desc: 'Cumplir el RGPD implementado en el zákon č. 110/2019 Sb., la Directiva Policial 2016/680, y la nueva ley de ciberseguridad zákon č. 60/2024 Sb. (NIS2) con los estándares NÚKIB para sistemas de infraestructura crítica del IZS.',
    },
    {
      icon: '🛒',
      title: 'Contratación pública NEN y fondos europeos para el IZS',
      desc: 'Navegar el sistema NEN (Národní elektronický nástroj) para licitaciones federales del MV ČR y los Krajské operační programy (fondos UE) para la modernización de los centros de despacho del IZS en las 14 regiones checas.',
    },
  ] : [
    {
      icon: '🚔',
      title: '14 IZS regions and police-HZS-ZZS coordination',
      desc: 'Coordinating Policie ČR, HZS ČR, and ZZS across 14 Krajská operační střediska — with the Policejní prezidium and Generální ředitelství HZS ČR national centres for national-level incidents and cross-border Schengen operations.',
    },
    {
      icon: '📡',
      title: 'PEGAS TETRA network and broadband evolution',
      desc: 'Integrating CAD systems with the Ministry of Interior PEGAS TETRA network while evaluating evolution to 4G/5G broadband communications — ensuring operational continuity in border regions with Austria, Germany, Poland, and Slovakia.',
    },
    {
      icon: '🔒',
      title: 'GDPR/ÚOOÚ, NÚKIB and 2024 NIS2 cybersecurity law',
      desc: 'Complying with GDPR implemented in zákon č. 110/2019 Sb., EU Law Enforcement Directive 2016/680, and the new cybersecurity act zákon č. 60/2024 Sb. (NIS2) with NÚKIB standards for IZS critical infrastructure systems.',
    },
    {
      icon: '🛒',
      title: 'NEN procurement and EU funds for IZS modernisation',
      desc: 'Navigating the NEN (Národní elektronický nástroj) system for MV ČR federal tenders and Krajské operační programy (EU funds) for IZS dispatch centre modernisation across all 14 Czech regions.',
    },
  ]

  const stats = es ? [
    { value: '14', label: 'Regiones / Krajská ředitelství' },
    { value: '112/150/155/158', label: 'Números de emergencia' },
    { value: 'PEGAS', label: 'Red TETRA nacional' },
    { value: 'IZS', label: 'Sistema integrado de rescate' },
  ] : [
    { value: '14', label: 'Regions / Krajská ředitelství' },
    { value: '112/150/155/158', label: 'Emergency numbers' },
    { value: 'PEGAS', label: 'National TETRA network' },
    { value: 'IZS', label: 'Integrated rescue system' },
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
            {es ? 'Guía de Mercado · República Checa' : 'Market Guide · Czech Republic'}
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, lineHeight: 1.2, margin: '0 0 20px' }}>
            {es
              ? 'Software de Seguridad Pública para la República Checa'
              : 'Public Safety Software for Czech Republic'}
          </h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.9, maxWidth: 680, margin: '0 auto 32px' }}>
            {es
              ? 'Policie ČR, IZS, PEGAS TETRA, 14 regiones, RGPD/ÚOOÚ y NÚKIB/NIS2 — plataforma unificada para el Sistema Integrado de Rescate checo.'
              : 'Policie ČR, IZS, PEGAS TETRA, 14 regions, GDPR/ÚOOÚ & NÚKIB/NIS2 — unified platform for the Czech Integrated Rescue System.'}
          </p>
          <Link
            href="/contact"
            style={{ background: ACCENT, color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}
          >
            {es ? 'Solicitar Demo para República Checa' : 'Request Czech Republic Demo'}
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
            {es ? 'Desafíos del Mercado Checo de Seguridad Pública' : 'Czech Public Safety Market Challenges'}
          </h2>
          <p style={{ color: '#475569', marginBottom: 36 }}>
            {es
              ? 'El modelo IZS checo con coordinación integrada de policía-bomberos-ambulancias en 14 regiones, la red PEGAS TETRA y las nuevas exigencias del NÚKIB crean un entorno exigente para los proveedores de tecnología.'
              : 'The Czech IZS model with integrated police-fire-ambulance coordination across 14 regions, the PEGAS TETRA network, and new NÚKIB requirements create a demanding environment for technology providers.'}
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
            {es ? 'Cómo KabatOne Unifica la Seguridad Pública Checa' : 'How KabatOne Unifies Czech Public Safety'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
            {[
              {
                title: es ? 'K-Dispatch: Despacho CAD IZS Multiagencia' : 'K-Dispatch: Multi-Agency IZS CAD Dispatch',
                desc: es
                  ? 'Despacho integrado para los 14 KOS del IZS — con integración PEGAS TETRA y preparación broadband 4G/5G, coordinación 112/150/155/158 y compatibilidad con los centros nacionales del Policejní prezidium y el Generální ředitelství HZS ČR.'
                  : 'Integrated dispatch for all 14 IZS KOS — with PEGAS TETRA integration and 4G/5G broadband readiness, 112/150/155/158 coordination, and compatibility with Policejní prezidium and Generální ředitelství HZS ČR national centres.',
              },
              {
                title: es ? 'K-Safety: Conciencia Situacional GIS' : 'K-Safety: GIS Situational Awareness',
                desc: es
                  ? 'Plataforma de conciencia situacional en tiempo real para la Policie ČR, HZS ČR, ZZS y el BIS — con integración Smart Prague/TRAFIS, sistemas de alerta de emergencia nacional y coordinación para eventos transfronterizos en la zona Schengen.'
                  : 'Real-time situational awareness for Policie ČR, HZS ČR, ZZS, and BIS — with Smart Prague/TRAFIS integration, national emergency alert systems, and Schengen cross-border event coordination.',
              },
              {
                title: es ? 'K-Video: Gestión de Cámaras conforme a RGPD/ÚOOÚ' : 'K-Video: GDPR/ÚOOÚ-Compliant Camera Management',
                desc: es
                  ? 'Gestión centralizada de cámaras urbanas y ANPR con analítica IA conforme al RGPD/zákon č. 110/2019 Sb. — con DPIA, base legal zákon č. 273/2008 Sb./Directiva 2016/680, gestión de retención y supervisión ÚOOÚ.'
                  : 'Centralised urban camera and ANPR management with AI analytics compliant with GDPR/zákon č. 110/2019 Sb. — with DPIA, zákon č. 273/2008 Sb./Directive 2016/680 legal basis, retention management, and ÚOOÚ oversight.',
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
            {es ? 'Preguntas Frecuentes: Seguridad Pública en la República Checa' : 'FAQ: Public Safety in Czech Republic'}
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
              { href: '/resources/public-safety-software-germany', label: es ? 'Alemania' : 'Germany' },
              { href: '/resources/public-safety-software-austria', label: es ? 'Austria' : 'Austria' },
              { href: '/resources/public-safety-software-poland', label: es ? 'Polonia' : 'Poland' },
              { href: '/resources/public-safety-software-switzerland', label: es ? 'Suiza' : 'Switzerland' },
              { href: '/resources/public-safety-software-sweden', label: es ? 'Suecia' : 'Sweden' },
              { href: '/resources/public-safety-software-norway', label: es ? 'Noruega' : 'Norway' },
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
        h2={es ? '¿Listo para Modernizar la Seguridad Pública en la República Checa?' : 'Ready to Modernise Public Safety in Czech Republic?'}
        subtitle={es
          ? 'Demo personalizada para la Policie ČR y el IZS checo — adaptada al modelo de 14 regiones, PEGAS TETRA y RGPD/NÚKIB/NIS2.'
          : 'Personalised demo for Czech Policie ČR and IZS — tailored to the 14-region model, PEGAS TETRA, and GDPR/NÚKIB/NIS2.'}
      />
      <Footer es={es} />
    </>
  )
}
