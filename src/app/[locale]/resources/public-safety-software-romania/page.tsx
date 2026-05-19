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
  return generatePageMetadata('publicSafetySoftwareRomania', locale)
}

export default async function PublicSafetySoftwareRomaniaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-romania/`
    : `${baseUrl}/resources/public-safety-software-romania/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Rumanía' : 'Public Safety Software — Romania', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Rumanía?',
      answer: 'Rumanía tiene un sistema de seguridad pública centralizado bajo el Ministerul Afacerilor Interne (MAI — Ministerio de Asuntos Internos). La Poliția Română es la fuerza policial nacional, organizada en 41 Inspectorate Județene de Poliție (Inspectorados de Policía de Condado) más el IGPR (Inspectoratul General al Poliției Române — Inspectorado General de la Policía Rumana) como cúpula nacional. La Jandarmeria Română (Gendarmería) es la fuerza paramilitar bajo el MAI responsable del orden público y la seguridad rural. El ISU (Inspectoratul General pentru Situații de Urgență) es el organismo nacional que coordina la respuesta a emergencias, fusionando los bomberos (Pompieri) y el SMURD (Serviciul Mobil de Urgență, Reanimare și Descarcerare — el servicio HEMS/paramédico de alta capacitación). Los servicios de ambulancias pre-hospitalarias son los SAJ (Serviciu de Ambulanță Județean — uno por condado) y el SABIF para Bucarest. El SRI (Serviciul Român de Informații) es el servicio de inteligencia interior/contraterrorismo. El número unificado de emergencias es 112.',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Rumanía? ¿Qué es la red TETRA rumana?',
      answer: 'Rumanía opera un número único de emergencias: 112, gestionado por el STS (Serviciul de Telecomunicații Speciale — Servicio de Telecomunicaciones Especiales). Los Dispecerate Integrate de Urgență (DIU — centros integrados de despacho de urgencias) son los centros que coordinan el despacho de policía, bomberos/SMURD y ambulancias en cada județ/condado. El STS opera la infraestructura de telecomunicaciones de emergencia incluyendo la red TETRA rumana para los servicios del MAI, ISU y SMURD. El ROIIS (Romanian Integrated Information System) es la red digital TETRA operada por el STS para todos los servicios de seguridad pública rumanos. El STS también opera el sistema de alertas de emergencias MESAJ RO (RO-ALERT), equivalente al sistema Cell Broadcast para alertar a la población en emergencias. Rumanía está en proceso de modernización de sus infraestructuras de comunicaciones de emergencia con fondos del PNRR (Plan Nacional de Recuperación y Resiliencia).',
    },
    {
      question: '¿Cuál es el marco de protección de datos para software de seguridad pública en Rumanía?',
      answer: 'Rumanía implementó el RGPD de la UE directamente como Estado miembro. La autoridad de control es la ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal — Autoridad Nacional de Supervisión del Tratamiento de Datos de Carácter Personal). La Ley 190/2018 complementa el RGPD en la legislación rumana. Los sistemas policiales están sujetos adicionalmente a la Ley 218/2002 (Ley Orgánica de la Policía Rumana) y a las regulaciones específicas del MAI sobre el tratamiento de datos en sistemas de seguridad pública. La Directiva Policial UE 2016/680 fue implementada en la legislación rumana mediante el Decreto Ley 3/2018. La videovigilancia en espacios públicos se rige por la Ley 333/2003 (modificada) y las directrices de la ANSPDCP sobre el uso de sistemas de vigilancia. La transferencia de datos entre los sistemas del MAI, ISU, STS y SAJ requiere acuerdos de intercambio de datos conformes a la ANSPDCP.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Rumanía?',
      answer: 'La contratación pública en Rumanía se rige por la Ley 98/2016 (Legea achizițiilor publice — Ley de Contratación Pública), que implementa las directivas europeas. Las licitaciones se publican en el SICAP (Sistemul Informatic Colaborativ pentru Achiziții Publice — Sistema Informático Colaborativo para Compras Públicas), el portal electrónico de contratación pública rumano, anteriormente conocido como SEAP. El MAI y el IGPR licitan directamente los sistemas de la Poliția Română. El ISU licita sus sistemas de bomberos/SMURD. El STS licita la infraestructura TETRA y de telecomunicaciones. Los SAJ (41 condados + SABIF) tienen autonomía en la adquisición de sus sistemas de despacho de ambulancias. Los contratos grandes (>= umbrales europeos) aparecen en TED/OJEU. Los fondos del PNRR (Planul Național de Redresare și Reziliență — Plan Nacional de Recuperación y Resiliencia) y los Fondos Estructurales UE co-financian la modernización de la seguridad pública rumana.',
    },
    {
      question: '¿Cuáles son los requisitos de ciberseguridad para software de seguridad pública en Rumanía?',
      answer: 'La ciberseguridad en Rumanía está regulada por el DNSC (Directoratul Național de Securitate Cibernetică — Directorio Nacional de Ciberseguridad), que transpone la Directiva NIS2 de la UE. La Ley 362/2018 y sus actualizaciones implementan los requisitos NIS para operadores de servicios esenciales e infraestructuras digitales. El CERT-RO (Romanian Computer Emergency Response Team) es el equipo de respuesta a incidentes nacionales bajo el DNSC. El STS gestiona la seguridad de las comunicaciones de emergencia y la infraestructura TETRA del gobierno. Los sistemas del MAI, el ISU y el STS están clasificados como infraestructuras críticas y deben cumplir los estándares del DNSC. La Ley 51/1991 (Seguridad Nacional) y las regulaciones del CSAT (Consiliul Suprem de Apărare a Țării — Consejo Supremo de Defensa) establecen el marco de seguridad para sistemas de información gubernamental clasificados. El SRI (inteligencia interior) coordina la ciberseguridad de los sistemas clasificados.',
    },
    {
      question: '¿Qué proyectos Smart City y de digitalización de la seguridad pública existen en Rumanía?',
      answer: 'Rumanía impulsa la digitalización de la seguridad pública principalmente con fondos europeos. El proyecto IM (Investiție în modernizarea Sistemului Informatic al Poliției Române) moderniza los sistemas de información de la Poliția Română con fondos PNRR. El proyecto Smart Cluj-Napoca integra cámaras de tráfico, ANPR y datos del ISU con el centro de control urbano. Timișoara y București también tienen programas Smart City con integración de cámaras urbanas y datos de emergencias. El sistema 112-RO del STS está siendo modernizado con capacidades de Next Generation 112 (NG112/eCall) para recibir alertas automáticas de vehículos y datos multimedia. El programa SMURD Digital moderniza los sistemas de despacho y telemetría médica del SMURD. El proyecto RO-ALERT (sistema de alertas de emergencias) cubre todo el territorio con alertas Cell Broadcast para sismos (Rumanía tiene alta sismicidad — zona Vrancea), inundaciones e incidentes CBRN.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la Poliția Română, el ISU/SMURD y los SAJ?',
      answer: 'KabatOne integra las capacidades que la Poliția Română, la Jandarmeria, el ISU/SMURD y los SAJ necesitan unificadas: despacho CAD multiagencia compatible con los 41 condados y el IGPR — con integración TETRA/ROIIS del STS y preparación NG112/broadband, coordinación 112 y gestión de emergencias sísmicas (zona Vrancea) e inundaciones, compatible con los DIU (centros integrados de despacho) (K-Dispatch), gestión de cámaras urbanas y ANPR con analítica IA conforme a RGPD/ANSPDCP/Ley 190/2018 y Ley 333/2003 — con DPIA, base legal MAI/Ley 218/2002 y gestión de retención (K-Video), y conciencia situacional GIS integrada con RO-ALERT, datos sísmicos, sensores de inundación y centros de control Smart City (Cluj, Timișoara, București) (K-Safety). Cloud EU con cumplimiento RGPD/ANSPDCP y DNSC/CERT-RO/NIS2. Compatible con los marcos de contratación SICAP/Ley 98/2016 y fondos PNRR/UE. Demo adaptada al modelo del MAI rumano y al contexto sísmico.',
    },
  ] : [
    {
      question: 'How is public safety organised in Romania?',
      answer: 'Romania has a centralised public safety system under the Ministerul Afacerilor Interne (MAI — Ministry of Internal Affairs). The Poliția Română is the national police force, organised across 41 Inspectorate Județene de Poliție (County Police Inspectorates) plus the IGPR (Inspectoratul General al Poliției Române — General Inspectorate of the Romanian Police) as the national headquarters. The Jandarmeria Română (Gendarmerie) is the paramilitary force under MAI responsible for public order and rural security. The ISU (Inspectoratul General pentru Situații de Urgență — General Inspectorate for Emergency Situations) is the national body coordinating emergency response, merging fire brigades (Pompieri) and SMURD (Serviciul Mobil de Urgență, Reanimare și Descarcerare — the high-capability HEMS/paramedic service). Pre-hospital ambulance services are the SAJ (Serviciu de Ambulanță Județean — one per county) and SABIF for Bucharest. The SRI (Serviciul Român de Informații) is the domestic intelligence/counter-terrorism service. The unified emergency number is 112.',
    },
    {
      question: 'How does emergency dispatch work in Romania? What is the Romanian TETRA network?',
      answer: 'Romania operates a single unified emergency number: 112, managed by the STS (Serviciul de Telecomunicații Speciale — Special Telecommunications Service). The Dispecerate Integrate de Urgență (DIU — integrated emergency dispatch centres) coordinate police, fire/SMURD, and ambulance dispatch in each județ/county. The STS operates the emergency telecommunications infrastructure including the Romanian TETRA network for MAI, ISU, and SMURD services. The ROIIS (Romanian Integrated Information System) is the digital TETRA network operated by STS for all Romanian public safety services. STS also operates the RO-ALERT emergency alert system (Cell Broadcast equivalent) for notifying the population during emergencies. Romania is modernising its emergency communications infrastructure with PNRR (National Recovery and Resilience Plan) funds.',
    },
    {
      question: 'What is the data protection framework for public safety software in Romania?',
      answer: 'Romania implemented EU GDPR directly as an EU member state. The supervisory authority is the ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal — National Authority for the Supervision of Personal Data Processing). Law 190/2018 complements GDPR in Romanian legislation. Police systems are additionally subject to Law 218/2002 (Organic Law of the Romanian Police) and specific MAI regulations on data processing in public safety systems. The EU Law Enforcement Directive 2016/680 was implemented in Romanian law through Emergency Ordinance 3/2018. Video surveillance in public spaces is governed by Law 333/2003 (amended) and ANSPDCP surveillance guidelines. Data sharing between MAI, ISU, STS, and SAJ systems requires ANSPDCP-compliant data exchange agreements.',
    },
    {
      question: 'How is public safety software procured in Romania?',
      answer: 'Romanian public procurement is governed by Law 98/2016 (Legea achizițiilor publice — Public Procurement Law), implementing EU directives. Tenders are published on SICAP (Sistemul Informatic Colaborativ pentru Achiziții Publice — Collaborative IT System for Public Procurement), the Romanian e-procurement portal, formerly known as SEAP. MAI and IGPR directly procure Poliția Română systems. ISU procures its fire/SMURD systems. STS procures TETRA and telecommunications infrastructure. The 41 SAJ counties plus SABIF have autonomy in procuring ambulance dispatch systems. Large contracts (above EU thresholds) appear on TED/OJEU. PNRR (National Recovery and Resilience Plan) funds and EU Structural Funds co-finance Romanian public safety modernisation.',
    },
    {
      question: 'What are the cybersecurity requirements for public safety software in Romania?',
      answer: 'Cybersecurity in Romania is regulated by the DNSC (Directoratul Național de Securitate Cibernetică — National Directorate for Cybersecurity), transposing the EU NIS2 Directive. Law 362/2018 and its updates implement NIS requirements for essential service operators and digital infrastructure. CERT-RO (Romanian Computer Emergency Response Team) handles national incident response under DNSC. STS manages emergency communications and government TETRA infrastructure security. MAI, ISU, and STS systems are classified as critical infrastructure and must comply with DNSC standards. Law 51/1991 (National Security) and CSAT regulations govern classified government information systems. SRI coordinates cybersecurity for classified systems.',
    },
    {
      question: 'What Smart City and public safety digitalisation projects exist in Romania?',
      answer: 'Romania drives public safety digitalisation primarily with EU funds. The IM project modernises Poliția Română information systems with PNRR funds. Smart Cluj-Napoca integrates traffic cameras, ANPR, and ISU data with the urban control centre. Timișoara and Bucharest also have Smart City programmes integrating urban cameras and emergency data. The STS 112-RO system is being modernised with Next Generation 112 (NG112/eCall) capabilities to receive automatic vehicle alerts and multimedia data. The SMURD Digital programme modernises SMURD dispatch and medical telemetry systems. The RO-ALERT Cell Broadcast system covers the entire territory for seismic alerts (Romania has high seismicity — Vrancea zone), floods, and CBRN incidents.',
    },
    {
      question: 'Why is KabatOne suited for Romanian Poliția Română, ISU/SMURD, and SAJ?',
      answer: 'KabatOne integrates the capabilities that Poliția Română, Jandarmeria, ISU/SMURD, and SAJ need unified: multi-agency CAD dispatch compatible with all 41 counties and IGPR — with STS TETRA/ROIIS integration and NG112/broadband readiness, 112 coordination and seismic (Vrancea zone) and flood emergency management, compatible with DIU integrated dispatch centres (K-Dispatch), urban camera and ANPR management with AI analytics compliant with GDPR/ANSPDCP/Law 190/2018 and Law 333/2003 — with DPIA, MAI/Law 218/2002 legal basis, and retention management (K-Video), and GIS situational awareness integrated with RO-ALERT, seismic data, flood sensors, and Smart City control centres (Cluj, Timișoara, Bucharest) (K-Safety). EU cloud with GDPR/ANSPDCP and DNSC/CERT-RO/NIS2 compliance. Compatible with SICAP/Law 98/2016 and PNRR/EU funds procurement frameworks. Demo adapted to Romania\'s MAI model and seismic context.',
    },
  ]

  const articleHeadline = es
    ? 'Software de Seguridad Pública para Rumanía: Poliția Română, ISU/SMURD, TETRA/ROIIS, RGPD/ANSPDCP y DNSC/NIS2'
    : 'Public Safety Software for Romania: Poliția Română, ISU/SMURD, TETRA/ROIIS, GDPR/ANSPDCP & DNSC/NIS2'

  const articleDescription = es
    ? 'Plataforma unificada para la Poliția Română, el ISU/SMURD y los SAJ — despacho CAD integrado con TETRA/ROIIS del STS y DIU en 41 condados, gestión de cámaras conforme a RGPD/ANSPDCP, y cumplimiento DNSC/NIS2 con fondos PNRR/SICAP.'
    : 'Unified platform for Romanian Poliția Română, ISU/SMURD, and SAJ — integrated CAD dispatch with STS TETRA/ROIIS and DIU in 41 counties, camera management compliant with GDPR/ANSPDCP, and DNSC/NIS2 compliance with PNRR/SICAP funding.'

  const challenges = es ? [
    {
      icon: '🚔',
      title: '41 condados y coordinación MAI/ISU/STS/SAJ',
      desc: 'Coordinar la Poliția Română y la Jandarmeria en 41 condados y Bucarest con el ISU/SMURD, los SAJ y la infraestructura TETRA del STS — a través de los DIU (centros integrados de despacho) del MAI y los centros 112 del STS, con interoperabilidad entre cuatro organismos diferentes bajo el MAI.',
    },
    {
      icon: '🌍',
      title: 'Gestión sísmica (Vrancea) e inundaciones',
      desc: 'Rumanía es uno de los países europeos con mayor riesgo sísmico (zona Vrancea — magnitudes históricas superiores a 7.0) y riesgo de inundaciones en los ríos Danubio, Siret, Prut y Olt. La coordinación del ISU/SMURD y la Poliția Română durante desastres naturales requiere plataformas de conciencia situacional en tiempo real integradas con RO-ALERT.',
    },
    {
      icon: '📡',
      title: 'Red TETRA/ROIIS del STS y modernización NG112',
      desc: 'Integrar los sistemas CAD con la red TETRA/ROIIS del STS mientras se moderniza hacia NG112/eCall y broadband — con fondos PNRR para la modernización de las comunicaciones de emergencia y la ampliación de la cobertura en áreas rurales y montañosas de los Cárpatos.',
    },
    {
      icon: '🔒',
      title: 'RGPD/ANSPDCP, Ley 333/2003 y DNSC/NIS2',
      desc: 'Cumplir el RGPD (Ley 190/2018), la Ley 218/2002, Ley 333/2003 (videovigilancia), la Directiva Policial 2016/680, y los requisitos del DNSC/CERT-RO (NIS2) para sistemas clasificados como infraestructura crítica del MAI, ISU y STS.',
    },
  ] : [
    {
      icon: '🚔',
      title: '41 counties and MAI/ISU/STS/SAJ coordination',
      desc: 'Coordinating Poliția Română and Jandarmeria across 41 counties and Bucharest with ISU/SMURD, SAJ ambulances, and STS TETRA infrastructure — through MAI DIU integrated dispatch centres and STS 112 centres, with interoperability between four different agencies under MAI.',
    },
    {
      icon: '🌍',
      title: 'Seismic management (Vrancea zone) and floods',
      desc: 'Romania is one of Europe\'s highest seismic risk countries (Vrancea zone — historical magnitudes above 7.0) and faces flood risk from the Danube, Siret, Prut, and Olt rivers. ISU/SMURD and Poliția Română coordination during natural disasters requires real-time situational awareness platforms integrated with RO-ALERT.',
    },
    {
      icon: '📡',
      title: 'STS TETRA/ROIIS network and NG112 modernisation',
      desc: 'Integrating CAD systems with the STS TETRA/ROIIS network while modernising towards NG112/eCall and broadband — with PNRR funds for emergency communications modernisation and coverage expansion in rural and Carpathian mountain areas.',
    },
    {
      icon: '🔒',
      title: 'GDPR/ANSPDCP, Law 333/2003 and DNSC/NIS2',
      desc: 'Complying with GDPR (Law 190/2018), Law 218/2002, Law 333/2003 (video surveillance), EU Law Enforcement Directive 2016/680, and DNSC/CERT-RO (NIS2) requirements for systems classified as critical infrastructure under MAI, ISU, and STS.',
    },
  ]

  const stats = es ? [
    { value: '41+Bcr', label: 'Condados Poliția Română' },
    { value: '112', label: 'Número único de emergencia' },
    { value: 'ROIIS', label: 'Red TETRA nacional (STS)' },
    { value: 'PNRR', label: 'Plan EU modernización' },
  ] : [
    { value: '41+Buc', label: 'Poliția Română counties' },
    { value: '112', label: 'Single emergency number' },
    { value: 'ROIIS', label: 'National TETRA (STS)' },
    { value: 'PNRR', label: 'EU modernisation plan' },
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
            {es ? 'Guía de Mercado · Rumanía' : 'Market Guide · Romania'}
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, lineHeight: 1.2, margin: '0 0 20px' }}>
            {es
              ? 'Software de Seguridad Pública para Rumanía'
              : 'Public Safety Software for Romania'}
          </h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.9, maxWidth: 680, margin: '0 auto 32px' }}>
            {es
              ? 'Poliția Română, ISU/SMURD, Jandarmeria, TETRA/ROIIS del STS, RGPD/ANSPDCP y DNSC/NIS2 — plataforma unificada para el MAI rumano.'
              : 'Poliția Română, ISU/SMURD, Jandarmeria, STS TETRA/ROIIS, GDPR/ANSPDCP & DNSC/NIS2 — unified platform for the Romanian MAI.'}
          </p>
          <Link
            href="/contact"
            style={{ background: ACCENT, color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}
          >
            {es ? 'Solicitar Demo para Rumanía' : 'Request Romania Demo'}
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
            {es ? 'Desafíos del Mercado Rumano de Seguridad Pública' : 'Romanian Public Safety Market Challenges'}
          </h2>
          <p style={{ color: '#475569', marginBottom: 36 }}>
            {es
              ? 'El modelo del MAI rumano con coordinación de policía, gendarmería, ISU/SMURD y STS en 41 condados, el riesgo sísmico de Vrancea y las oportunidades de modernización del PNRR crean un entorno dinámico para los proveedores de tecnología.'
              : 'Romania\'s MAI model with police, gendarmerie, ISU/SMURD, and STS coordination across 41 counties, the Vrancea seismic risk, and PNRR modernisation opportunities create a dynamic environment for technology providers.'}
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
            {es ? 'Cómo KabatOne Unifica la Seguridad Pública Rumana' : 'How KabatOne Unifies Romanian Public Safety'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
            {[
              {
                title: es ? 'K-Dispatch: Despacho CAD MAI/ISU/STS' : 'K-Dispatch: MAI/ISU/STS CAD Dispatch',
                desc: es
                  ? 'Despacho integrado para los 41 condados y el IGPR — con integración TETRA/ROIIS del STS y preparación NG112/eCall/broadband, coordinación 112, gestión de catástrofes sísmicas (Vrancea) e inundaciones, y compatibilidad con los DIU del MAI y el SMURD.'
                  : 'Integrated dispatch for all 41 counties and IGPR — with STS TETRA/ROIIS integration and NG112/eCall/broadband readiness, 112 coordination, seismic (Vrancea) and flood disaster management, and compatibility with MAI DIU centres and SMURD.',
              },
              {
                title: es ? 'K-Safety: Sismos, Inundaciones y RO-ALERT' : 'K-Safety: Seismic, Floods and RO-ALERT',
                desc: es
                  ? 'Conciencia situacional en tiempo real integrada con RO-ALERT (Cell Broadcast), datos sísmicos del INFP (Instituto Nacional de Física de la Tierra), sensores de inundación y centros de control Smart City (Cluj, Timișoara, București) — con coordinación ISU/SMURD, SRI y protección civil județeană.'
                  : 'Real-time situational awareness integrated with RO-ALERT (Cell Broadcast), INFP seismic data (National Institute for Earth Physics), flood sensors, and Smart City control centres (Cluj, Timișoara, Bucharest) — with ISU/SMURD, SRI, and county civil protection coordination.',
              },
              {
                title: es ? 'K-Video: Gestión conforme a RGPD/ANSPDCP' : 'K-Video: GDPR/ANSPDCP-Compliant Management',
                desc: es
                  ? 'Gestión centralizada de cámaras urbanas y ANPR con analítica IA conforme a RGPD/ANSPDCP/Ley 190/2018 y Ley 333/2003 — con DPIA, base legal MAI/Ley 218/2002, gestión de retención y cumplimiento DNSC/CERT-RO/NIS2 para sistemas clasificados como infraestructura crítica.'
                  : 'Centralised urban camera and ANPR management with AI analytics compliant with GDPR/ANSPDCP/Law 190/2018 and Law 333/2003 — with DPIA, MAI/Law 218/2002 legal basis, retention management, and DNSC/CERT-RO/NIS2 compliance for critical infrastructure systems.',
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
            {es ? 'Preguntas Frecuentes: Seguridad Pública en Rumanía' : 'FAQ: Public Safety in Romania'}
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
              { href: '/resources/public-safety-software-hungary', label: es ? 'Hungría' : 'Hungary' },
              { href: '/resources/public-safety-software-czech-republic', label: es ? 'República Checa' : 'Czech Republic' },
              { href: '/resources/public-safety-software-poland', label: es ? 'Polonia' : 'Poland' },
              { href: '/resources/public-safety-software-greece', label: es ? 'Grecia' : 'Greece' },
              { href: '/resources/public-safety-software-turkey', label: es ? 'Turquía' : 'Türkiye' },
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
        h2={es ? '¿Listo para Modernizar la Seguridad Pública en Rumanía?' : 'Ready to Modernise Public Safety in Romania?'}
        subtitle={es
          ? 'Demo personalizada para la Poliția Română y el MAI rumano — adaptada a los 41 condados, TETRA/ROIIS del STS, gestión sísmica Vrancea y fondos PNRR/RGPD/ANSPDCP/DNSC.'
          : 'Personalised demo for Romanian Poliția Română and MAI — tailored to 41 counties, STS TETRA/ROIIS, Vrancea seismic management, and PNRR/GDPR/ANSPDCP/DNSC compliance.'}
      />
      <Footer es={es} />
    </>
  )
}
