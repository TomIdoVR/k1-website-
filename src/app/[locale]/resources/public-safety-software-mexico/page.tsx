import { generatePageMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareMexico', locale)
}

const faqs = [
  {
    question: 'How does KabatOne integrate the Guardia Nacional (GN) and SSPC across Mexico\'s 31 states and CDMX?',
    answer:
      'KabatOne unifies Guardia Nacional (GN) and SSPC operations across all 31 states and Mexico City (CDMX) — connecting GN regional commands, state public security secretariats (SSP/SSPE), municipal police forces, and C5/C4/C2 command centres into a single operational map with shared CAD, PLATAFORMA MEXICO integration, ANPR feeds, and AI incident prioritisation via the 911 National Emergency System.',
  },
  {
    question: 'How does the platform integrate Mexico\'s 911 National Emergency System and C5 command centres?',
    answer:
      'KabatOne integrates with Mexico\'s 911 Sistema Nacional de Emergencias across all states, connects to C5 (Command, Control, Communications, Computing and Citizen Services) centres in CDMX, Jalisco, Nuevo León, Estado de México, and major cities, provides unified CAD dispatch for police/fire/medical, and delivers real-time CCTV/ANPR feeds from municipal Safe City cameras to state and federal dashboards.',
  },
  {
    question: 'How does KabatOne support Mexico\'s National Civil Protection System (SINAPROC)?',
    answer:
      'KabatOne integrates with the National Civil Protection Coordination (CNPC) under SSPC and SINAPROC for multi-hazard response — earthquakes (SASMEX seismic alerts), hurricanes (Pacific/Atlantic season), volcanic activity (Popocatépetl/Colima/Pico de Orizaba), floods, and drought alerts from CONAGUA. The platform provides dashboards shared with CENAPRED, state protection civil units, and UN OCHA Mexico.',
  },
  {
    question: 'How does KabatOne comply with Mexico\'s Federal Law on Personal Data Protection (LFPDPPP) and INAI?',
    answer:
      'KabatOne implements encryption at rest and in transit, role-based access controls, data subject rights (access/rectification/cancellation/opposition — ARCO rights), and breach notification aligned with the Federal Law on Personal Data Protection in Possession of Private Parties (LFPDPPP, 2010) and the General Law on Data Protection in Possession of Obligated Subjects (LGPDPPSO, 2017), supervised by INAI — the National Institute for Transparency, Access to Information and Personal Data Protection.',
  },
  {
    question: 'Does KabatOne support SEMAR and SEDENA for military-police coordination?',
    answer:
      'Yes. KabatOne supports joint operation dashboards for SEMAR (Secretaría de Marina, coastal/port security and maritime surveillance), SEDENA (Secretaría de la Defensa Nacional, army-supported public security in states under federal security plans), and Guardia Nacional — enabling coordinated CAD dispatch, shared CCTV/ANPR feeds, and unified situational maps for Plan DN-III-E disaster response and Joint Security Operations.',
  },
  {
    question: 'How does KabatOne handle Mexico government procurement through CompraNet/MercadoPúblico?',
    answer:
      'KabatOne supports procurement under Mexico\'s Government Procurement Law (Ley de Adquisiciones, Arrendamientos y Servicios del Sector Público, LAASSP), the Public Works Law (LOPSRM), and the CompraNet/MercadoPúblico.mx federal e-procurement platform under SHCP/Secretaría de Hacienda. The platform aligns with PAIS (Plan de Apoyo e Infraestructura para la Seguridad), World Bank/IDB security sector financing, and INE/INAI compliance requirements.',
  },
  {
    question: 'How does KabatOne align with Mexico\'s National Public Security System (SNSP) and Digital Mexico strategy?',
    answer:
      'KabatOne aligns with the National Public Security System (SNSP) coordination framework under the National Public Security Council (CNSP), PLATAFORMA MEXICO national intelligence platform, Mexico Digital 2025 strategy, and the National Development Plan (PND 2019–2024) security pillars — providing AI/IoT-integrated public safety platforms for the SSPC, state SSPs, and municipal police forces.',
  },
]

const faqsEs = [
  {
    question: '¿Cómo integra KabatOne la Guardia Nacional (GN) y la SSPC en los 31 estados y la CDMX?',
    answer:
      'KabatOne unifica las operaciones de la Guardia Nacional (GN) y la SSPC en los 31 estados y la Ciudad de México (CDMX) — conectando los comandos regionales de la GN, las secretarías de seguridad pública estatales (SSP/SSPE), las policías municipales y los centros de mando C5/C4/C2 en un único mapa operativo con CAD compartido, integración con PLATAFORMA MÉXICO, alimentaciones ANPR y priorización de incidentes por IA a través del Sistema Nacional de Emergencias 911.',
  },
  {
    question: '¿Cómo integra la plataforma el Sistema Nacional de Emergencias 911 de México y los centros C5?',
    answer:
      'KabatOne se integra con el Sistema Nacional de Emergencias 911 en todos los estados, conecta con los centros C5 (Comando, Control, Comunicaciones, Cómputo y Atención Ciudadana) de la CDMX, Jalisco, Nuevo León, Estado de México y las principales ciudades, proporciona despacho CAD unificado para policía/bomberos/médicos, y distribuye alimentaciones en tiempo real de CCTV/ANPR de las cámaras del Safe City municipal a los tableros estatales y federales.',
  },
  {
    question: '¿Cómo apoya KabatOne al Sistema Nacional de Protección Civil de México (SINAPROC)?',
    answer:
      'KabatOne se integra con la Coordinación Nacional de Protección Civil (CNPC) bajo la SSPC y el SINAPROC para la respuesta ante múltiples amenazas — terremotos (alertas sísmicas SASMEX), huracanes (temporada Pacífico/Atlántico), actividad volcánica (Popocatépetl/Colima/Pico de Orizaba), inundaciones y alertas de sequía de la CONAGUA — con paneles compartidos con el CENAPRED, las unidades estatales de protección civil y OCHA México.',
  },
  {
    question: '¿Cómo cumple KabatOne con la Ley Federal de Protección de Datos Personales (LFPDPPP) y el INAI?',
    answer:
      'KabatOne implementa cifrado en reposo y en tránsito, controles de acceso basados en roles, derechos ARCO (Acceso/Rectificación/Cancelación/Oposición) de titulares de datos y notificación de brechas conforme a la LFPDPPP (2010) y la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados (LGPDPPSO, 2017), supervisadas por el INAI — el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales.',
  },
  {
    question: '¿Admite KabatOne a la SEMAR y a la SEDENA para la coordinación policial-militar?',
    answer:
      'Sí. KabatOne admite tableros de operaciones conjuntas para la SEMAR (seguridad costera/portuaria y vigilancia marítima), la SEDENA (apoyo del ejército a la seguridad pública en estados bajo planes federales de seguridad) y la Guardia Nacional — habilitando despacho CAD coordinado, alimentaciones compartidas de CCTV/ANPR y mapas de situación unificados para la respuesta a desastres del Plan DN-III-E y las Operaciones Conjuntas de Seguridad.',
  },
  {
    question: '¿Cómo gestiona KabatOne las adquisiciones del gobierno mexicano a través de CompraNet/MercadoPúblico?',
    answer:
      'KabatOne admite adquisiciones bajo la Ley de Adquisiciones, Arrendamientos y Servicios del Sector Público (LAASSP), la Ley de Obras Públicas y Servicios Relacionados con las Mismas (LOPSRM) y la plataforma federal de contratación electrónica CompraNet/MercadoPúblico.mx bajo la SHCP. La plataforma se alinea con el PAIS (Plan de Apoyo e Infraestructura para la Seguridad), el financiamiento del Banco Mundial/BID para el sector de seguridad y los requisitos de cumplimiento del INE/INAI.',
  },
  {
    question: '¿Cómo se alinea KabatOne con el Sistema Nacional de Seguridad Pública (SNSP) y la estrategia Digital México?',
    answer:
      'KabatOne se alinea con el marco de coordinación del Sistema Nacional de Seguridad Pública (SNSP) bajo el Consejo Nacional de Seguridad Pública (CNSP), la plataforma de inteligencia nacional PLATAFORMA MÉXICO, la estrategia México Digital 2025 y los pilares de seguridad del Plan Nacional de Desarrollo (PND 2019–2024) — proporcionando plataformas de seguridad pública integradas con IA/IoT para la SSPC, las SSP estatales y las policías municipales.',
  },
]

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const headline = es
    ? 'Software de Seguridad Pública para México: SSPC/Guardia Nacional, SINAPROC/CENAPRED, 911 Nacional/PLATAFORMA MÉXICO y Digital México 2025'
    : 'Public Safety Software for Mexico: SSPC/Guardia Nacional, SINAPROC/CENAPRED, 911 Nacional/PLATAFORMA MEXICO & Digital Mexico 2025'
  const description = es
    ? 'Plataforma unificada para la SSPC y Guardia Nacional de México — despacho CAD integrado con los 31 estados y CDMX a través del Sistema 911, centros C5/C4, SINAPROC multi-riesgo, SEMAR/SEDENA coordinación, LFPDPPP/LGPDPPSO/INAI y adquisición LAASSP/CompraNet.'
    : 'Unified platform for Mexico SSPC and Guardia Nacional — integrated CAD dispatch across 31 states and CDMX via 911 System, C5/C4 command centres, SINAPROC multi-hazard, SEMAR/SEDENA coordination, LFPDPPP/LGPDPPSO/INAI compliance, and LAASSP/CompraNet procurement.'
  const url = es
    ? 'https://kabatone.com/es/resources/public-safety-software-mexico/'
    : 'https://kabatone.com/resources/public-safety-software-mexico/'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    { name: es ? 'México' : 'Mexico', url },
  ]

  const activeFaqs = es ? faqsEs : faqs

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(headline, description, url, '2026-05-19')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(activeFaqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <Nav />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-green-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-green-300 text-sm font-medium mb-4 uppercase tracking-wide">
              {es ? 'Guía de Mercado — México' : 'Market Guide — Mexico'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {es
                ? 'Software de Seguridad Pública para México'
                : 'Public Safety Software for Mexico'}
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl">
              {es
                ? 'SSPC/GN 31 estados + CDMX · Sistema 911/C5 · SINAPROC/CENAPRED multi-riesgo · SEMAR/SEDENA · PLATAFORMA MÉXICO · LFPDPPP/INAI · Digital México 2025'
                : 'SSPC/GN 31 states + CDMX · 911 System/C5 · SINAPROC/CENAPRED multi-hazard · SEMAR/SEDENA · PLATAFORMA MEXICO · LFPDPPP/INAI · Digital Mexico 2025'}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              {es ? "El panorama de seguridad pública de México" : "Mexico's Public Safety Landscape"}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                {es
                  ? 'México — la segunda economía más grande de América Latina con 130 millones de habitantes, 31 estados y la Ciudad de México (CDMX) — opera un sistema de seguridad pública de tres niveles coordinado por la Secretaría de Seguridad y Protección Ciudadana (SSPC) a nivel federal, las secretarías estatales de seguridad pública (SSP/SSPE) a nivel estatal y las direcciones de seguridad pública (DSP) a nivel municipal. La Guardia Nacional (GN), creada en 2019 con más de 150,000 elementos, opera bajo la SSPC con atribuciones de policía federal, apoyada por las fuerzas armadas — SEDENA y SEMAR — en estados bajo estrategias de seguridad conjunta. El Sistema Nacional de Seguridad Pública (SNSP) coordina los tres niveles de gobierno a través del Consejo Nacional de Seguridad Pública (CNSP), con PLATAFORMA MÉXICO como infraestructura de inteligencia centralizada.'
                  : 'Mexico — Latin America\'s second largest economy with 130 million inhabitants, 31 states, and Mexico City (CDMX) — operates a three-tier public safety system coordinated by the Secretaría de Seguridad y Protección Ciudadana (SSPC) at the federal level, state security secretariats (SSP/SSPE) at state level, and municipal public security directorates (DSP) at municipal level. The Guardia Nacional (GN), created in 2019 with 150,000+ elements, operates under SSPC with federal police powers, supported by armed forces — SEDENA and SEMAR — in states under joint security strategies. The National Public Security System (SNSP) coordinates all three government tiers through the National Public Security Council (CNSP), with PLATAFORMA MEXICO as centralised intelligence infrastructure.'}
              </p>
              <p>
                {es
                  ? 'El Sistema Nacional de Emergencias 911 unifica el despacho de emergencias policiales, bomberos y médicas en todo México, con centros C5 (Comando, Control, Comunicaciones, Cómputo y Atención Ciudadana) en la CDMX, Jalisco, Nuevo León, Estado de México, Chihuahua, Sonora y otras entidades federativas dotando de capacidad de vigilancia masiva y coordinación multi-agencia. El Sistema Nacional de Protección Civil (SINAPROC) bajo la Coordinación Nacional de Protección Civil (CNPC) gestiona la respuesta ante terremotos (SASMEX/CIRES), huracanes (SMNH/CONAGUA), erupciones volcánicas (CENAPRED/POPO24) e inundaciones fluviales. México es uno de los países más afectados por desastres naturales en el mundo, con el sismo de 1985 (Ciudad de México) y el de 2017 como hitos que transformaron el sistema de protección civil.'
                  : 'The 911 National Emergency System unifies police, fire, and medical emergency dispatch across Mexico, with C5 (Command, Control, Communications, Computing and Citizen Services) centres in CDMX, Jalisco, Nuevo León, Estado de México, Chihuahua, Sonora, and other states providing mass surveillance and multi-agency coordination capacity. The National Civil Protection System (SINAPROC) under the National Civil Protection Coordination (CNPC) manages earthquake response (SASMEX/CIRES), hurricanes (SMNH/CONAGUA), volcanic eruptions (CENAPRED/POPO24), and river flooding. Mexico is one of the world\'s most disaster-prone countries, with the 1985 and 2017 CDMX earthquakes as transformative moments for its civil protection system.'}
              </p>
              <p>
                {es
                  ? 'La estrategia México Digital 2025 de la Presidencia y la Secretaría de Infraestructura, Comunicaciones y Transportes (SICT) impulsa la digitalización del sector público, mientras el INAI (Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales) supervisa el cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP, 2010) y la Ley General de Protección de Datos en Posesión de Sujetos Obligados (LGPDPPSO, 2017). Las adquisiciones gubernamentales federales se realizan mediante CompraNet/MercadoPúblico.mx bajo la Secretaría de Hacienda y Crédito Público (SHCP), con la LAASSP y la LOPSRM como marcos jurídicos.'
                  : 'Mexico Digital 2025 strategy from the Presidency and Secretaría de Infraestructura, Comunicaciones y Transportes (SICT) drives public sector digitalisation, while INAI (National Institute for Transparency, Access to Information and Personal Data Protection) supervises compliance with the Federal Law on Personal Data Protection in Possession of Private Parties (LFPDPPP, 2010) and the General Law on Data Protection in Possession of Obligated Subjects (LGPDPPSO, 2017). Federal government procurement is conducted through CompraNet/MercadoPúblico.mx under Secretaría de Hacienda y Crédito Público (SHCP), with LAASSP and LOPSRM as legal frameworks.'}
              </p>
            </div>
          </div>
        </section>

        {/* Key Agencies */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {es ? 'Agencias y marcos clave de seguridad pública' : 'Key Public Safety Agencies & Frameworks'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: es ? 'SSPC y Guardia Nacional (GN)' : 'SSPC & Guardia Nacional (GN)',
                  body: es
                    ? 'SSPC bajo el Presidente de la República; Guardia Nacional (GN) con más de 150,000 elementos y 266 coordinaciones regionales; CNPC (protección civil); Servicio de Protección Federal (SPF/OADPRS); Policía Federal Ministerial (PFM/FGR); unidades especiales: Grupos de Operaciones Especiales (GOPES), Fuerzas de Reacción Inmediata; coordinación con SEDENA/SEMAR bajo el Grupo de Coordinación para la Seguridad y Bienestar de la Población.'
                    : 'SSPC under President of the Republic; Guardia Nacional (GN) with 150,000+ elements and 266 regional coordinations; CNPC (civil protection); Servicio de Protección Federal (SPF/OADPRS); Federal Ministerial Police (PFM/FGR); special units: Grupos de Operaciones Especiales (GOPES), Immediate Reaction Forces; coordination with SEDENA/SEMAR under the Security and Population Welfare Coordination Group.',
                },
                {
                  title: es ? 'Sistema 911 y Centros C5/C4/C2' : '911 System & C5/C4/C2 Command Centres',
                  body: es
                    ? 'Sistema Nacional de Emergencias 911 en los 31 estados y CDMX — cada entidad opera su PSAP (Centro de Atención de Llamadas de Emergencia) conectado a la red nacional con despacho coordinado de policía/bomberos/ambulancias; centros C5 en CDMX (más de 10,000 cámaras Safe City), Jalisco/GDL, Nuevo León/MTY, Estado de México, Chihuahua/CUU-JRZ y Sonora/HMO; C4 en Veracruz, Oaxaca, Tabasco, Guerrero y otras entidades.'
                    : '911 National Emergency System across 31 states and CDMX — each entity operates its PSAP (Emergency Call Centre) connected to the national network with coordinated police/fire/ambulance dispatch; C5 centres in CDMX (10,000+ Safe City cameras), Jalisco/GDL, Nuevo León/MTY, Estado de México, Chihuahua/CUU-JRZ, and Sonora/HMO; C4 centres in Veracruz, Oaxaca, Tabasco, Guerrero, and other states.',
                },
                {
                  title: es ? 'CNPC/SINAPROC y CENAPRED (multi-riesgo)' : 'CNPC/SINAPROC & CENAPRED (Multi-Hazard)',
                  body: es
                    ? 'CNPC bajo la SSPC coordina el SINAPROC — 32 coordinaciones estatales de protección civil, municipales y unidades de PC; CENAPRED monitorea los volcanes Popocatépetl (POPO24, semáforo volcánico), Colima y otros; SASMEX/CIRES para alertas sísmicas en tiempo real (Sistema de Alerta Sísmica Mexicano); CONAGUA/SMN para alertas de huracanes y desbordamientos; UEPC (Unidades Estatales de Protección Civil) coordinadas con el 911.'
                    : 'CNPC under SSPC coordinates SINAPROC — 32 state civil protection coordinations, municipal PCs, and PC units; CENAPRED monitors Popocatépetl volcano (POPO24, volcanic traffic light), Colima, and others; SASMEX/CIRES for real-time seismic alerts (Sistema de Alerta Sísmica Mexicano); CONAGUA/SMN for hurricane and flood alerts; UEPC (State Civil Protection Units) coordinated with 911.',
                },
                {
                  title: es ? 'SEMAR — Secretaría de Marina (seguridad costera y marítima)' : 'SEMAR — Secretaría de Marina (Coastal & Maritime Security)',
                  body: es
                    ? 'SEMAR responsable de la seguridad marítima en el Golfo de México y el Océano Pacífico — puertos: Manzanillo (más de 3.5M TEU, el mayor de México), Lázaro Cárdenas, Veracruz, Altamira, Ensenada, Guaymas; Fuerzas Navales (FOZAN/FOPAN), Infantería de Marina, Policía Naval; coordinación con el SAT (aduanas) y la GN para la seguridad portuaria y la lucha contra el tráfico de drogas/armas en las zonas marítimas.'
                    : 'SEMAR responsible for maritime security in the Gulf of Mexico and Pacific Ocean — ports: Manzanillo (3.5M+ TEU, Mexico\'s largest), Lázaro Cárdenas, Veracruz, Altamira, Ensenada, Guaymas; Naval Forces (FOZAN/FOPAN), Naval Infantry, Naval Police; coordination with SAT (customs) and GN for port security and drug/arms trafficking combat in maritime zones.',
                },
                {
                  title: es ? 'PLATAFORMA MÉXICO e inteligencia nacional' : 'PLATAFORMA MEXICO & National Intelligence',
                  body: es
                    ? 'PLATAFORMA MÉXICO — sistema de inteligencia nacional del SNSP que integra bases de datos de la FGR (Fiscalía General de la República), el RENAPO (Registro Nacional de Población/CURP), el REPUVE (Registro Público Vehicular), AFIS biométrico (huellas/reconocimiento facial), y registros delictivos de los 31 estados — gestionado por el Secretariado Ejecutivo del SNSP (SESNSP) bajo la SSPC.'
                    : 'PLATAFORMA MEXICO — SNSP\'s national intelligence system integrating databases of FGR (Fiscalía General de la República), RENAPO (National Population Registry/CURP), REPUVE (Public Vehicle Registry), biometric AFIS (fingerprints/facial recognition), and criminal records from 31 states — managed by SNSP Executive Secretariat (SESNSP) under SSPC.',
                },
                {
                  title: es ? 'Seguridad aeroportuaria y fronteras (INM/SEDENA)' : 'Airport & Border Security (INM/SEDENA)',
                  body: es
                    ? 'Aeropuertos: AICM/NAIM-FBB (CDMX), GDL, MTY, CUN, TIJ, GDL — coordinación AFAC/GN/INM; fronteras: 3,145 km con EE. UU. (Tijuana/Mexicali/Nogales/Cd. Juárez/Nuevo Laredo/Matamoros), 1,149 km con Guatemala/Belice — INM (Instituto Nacional de Migración), GN Grupos Beta y SEDENA 53 zonas militares; monitoreo conjunto con la CBP/BP de EE. UU. y el Programa Frontera Sur.'
                    : 'Airports: AICM/NAIM-FBB (CDMX), GDL, MTY, CUN, TIJ, GDL — AFAC/GN/INM coordination; borders: 3,145 km with USA (Tijuana/Mexicali/Nogales/Cd. Juárez/Nuevo Laredo/Matamoros), 1,149 km with Guatemala/Belize — INM (National Migration Institute), GN Grupos Beta, and SEDENA 53 military zones; joint monitoring with US CBP/BP and Programa Frontera Sur.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Capabilities */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {es ? 'Capacidades de la plataforma KabatOne para México' : 'KabatOne Platform Capabilities for Mexico'}
            </h2>
            <div className="space-y-8">
              {[
                {
                  heading: es ? 'CAD unificado: Sistema 911 + GN + C5/C4 + Policías Estatales' : 'Unified CAD: 911 System + GN + C5/C4 + State Police',
                  text: es
                    ? 'KabatOne integra el despacho CAD del Sistema 911 nacional con los C5/C4/C2 estatales — unificando la GN, las policías estatales (SSP/SSPE), las policías municipales, bomberos y los SUMA/CRUM médicos en un único mapa operativo con priorización por IA, geolocalización de patrullas, tiempos de respuesta en tiempo real y panel de desbordamiento a la CNPC/CENAPRED para alertas de protección civil (SASMEX, POPO24, SMN).'
                    : 'KabatOne integrates 911 national system CAD dispatch with state C5/C4/C2 centres — unifying GN, state police (SSP/SSPE), municipal police, fire services, and SUMA/CRUM medical units on a single operational map with AI prioritisation, patrol geolocation, real-time response times, and CNPC/CENAPRED overflow dashboard for civil protection alerts (SASMEX, POPO24, SMN).',
                },
                {
                  heading: es ? 'Gestión de vídeo: Safe City CDMX/C5 y cámaras estatales' : 'Video Management: CDMX/C5 Safe City & State Cameras',
                  text: es
                    ? 'KabatOne gestiona las más de 10,000 cámaras del Safe City de la CDMX (C5-CDMX), integra los sistemas CCTV/ANPR de los C5 de Jalisco, Nuevo León, Estado de México y Chihuahua, conecta la vigilancia portuaria de la SEMAR en Manzanillo/Lázaro Cárdenas/Veracruz, y proporciona análisis de video con IA — detección de anomalías, conteo de personas, reconocimiento facial con PLATAFORMA MÉXICO — con latencia de alerta inferior a 2 segundos.'
                    : 'KabatOne manages CDMX Safe City\'s 10,000+ cameras (C5-CDMX), integrates CCTV/ANPR systems from Jalisco, Nuevo León, Estado de México, and Chihuahua C5 centres, connects SEMAR port surveillance at Manzanillo/Lázaro Cárdenas/Veracruz, and provides AI video analytics — anomaly detection, crowd counting, facial recognition with PLATAFORMA MEXICO — with sub-2-second alert latency.',
                },
                {
                  heading: es ? 'Respuesta a desastres: SINAPROC/CENAPRED/CONAGUA' : 'Disaster Response: SINAPROC/CENAPRED/CONAGUA',
                  text: es
                    ? 'KabatOne proporciona paneles de situación multi-riesgo en tiempo real para la CNPC/SINAPROC — integración de alertas sísmicas del SASMEX/CIRES (tiempo de alerta: 40–120 segundos antes de P-ondas), el semáforo volcánico del Popocatépetl (CENAPRED), alertas de ciclones del SMN/CONAGUA y pronósticos de inundación del IMTA — con escalada al Plan DN-III-E (SEDENA) y el Plan Marina (SEMAR) para respuesta a desastres mayores.'
                    : 'KabatOne provides real-time multi-hazard situational dashboards for CNPC/SINAPROC — SASMEX/CIRES seismic alert integration (warning time: 40–120 seconds before P-waves), Popocatépetl volcanic traffic light (CENAPRED), SMN/CONAGUA cyclone alerts, and IMTA flood forecasts — with escalation to Plan DN-III-E (SEDENA) and Plan Marina (SEMAR) for major disaster response.',
                },
                {
                  heading: es ? 'PLATAFORMA MÉXICO e integración de inteligencia criminal' : 'PLATAFORMA MEXICO & Criminal Intelligence Integration',
                  text: es
                    ? 'KabatOne se integra con PLATAFORMA MÉXICO del SESNSP — consultando el REPUVE (vehículos robados/ANPR), el RENAPO (validación CURP), el AFIS (biométrico), el C4 nacional (llamadas de voz al 911) y las bases de datos delictivas del SNSP — para validación automática de placas en puntos de control, alertas de personas buscadas y consultas integradas para el personal policial en campo.'
                    : 'KabatOne integrates with SESNSP\'s PLATAFORMA MEXICO — querying REPUVE (stolen vehicles/ANPR), RENAPO (CURP validation), AFIS (biometrics), national C4 (911 voice calls), and SNSP criminal databases — for automatic plate validation at checkpoints, wanted-person alerts, and integrated field officer queries.',
                },
                {
                  heading: es ? 'Cumplimiento LFPDPPP/LGPDPPSO/INAI y adquisición LAASSP' : 'LFPDPPP/LGPDPPSO/INAI Compliance & LAASSP Procurement',
                  text: es
                    ? 'KabatOne se alinea con la LFPDPPP y la LGPDPPSO supervisadas por el INAI — derechos ARCO, cifrado, avisos de privacidad, transferencias internacionales y notificación de brechas; la NOM-035-STPS y las normas técnicas de la SSPC para sistemas C5; y la adquisición federal bajo la LAASSP/LOPSRM a través de CompraNet/MercadoPúblico.mx, con soporte para financiamiento del Banco Mundial/BID para modernización de la seguridad pública.'
                    : 'KabatOne aligns with LFPDPPP and LGPDPPSO supervised by INAI — ARCO rights, encryption, privacy notices, international transfers, and breach notification; SSPC technical standards for C5 systems; and federal procurement under LAASSP/LOPSRM through CompraNet/MercadoPúblico.mx, with World Bank/IDB financing support for public safety modernisation.',
                },
              ].map(({ heading, text }) => (
                <div key={heading} className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{heading}</h3>
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {es ? 'Marco regulatorio y de adquisiciones en México' : 'Regulatory & Procurement Framework in Mexico'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  label: es ? 'Protección de datos' : 'Data Protection',
                  items: [
                    es ? 'LFPDPPP — Ley Federal de Protección de Datos (2010, sector privado)' : 'LFPDPPP — Federal Data Protection Law (2010, private sector)',
                    es ? 'LGPDPPSO — Ley General de Protección de Datos (2017, sector público)' : 'LGPDPPSO — General Data Protection Law (2017, public sector)',
                    es ? 'INAI — Instituto Nacional de Transparencia y Datos Personales' : 'INAI — National Institute for Transparency and Personal Data',
                    es ? 'Derechos ARCO · Avisos de privacidad · Transferencias internacionales' : 'ARCO rights · Privacy notices · International transfers',
                  ],
                },
                {
                  label: es ? 'Seguridad y ciberseguridad' : 'Security & Cybersecurity',
                  items: [
                    es ? 'CERT-MX — Equipo de Respuesta a Incidentes (UNAM/SCT)' : 'CERT-MX — Incident Response Team (UNAM/SCT)',
                    es ? 'SESNSP — Estándares técnicos SNSP para sistemas C5' : 'SESNSP — SNSP technical standards for C5 systems',
                    es ? 'PLATAFORMA MÉXICO — Integración bases de datos SNSP' : 'PLATAFORMA MEXICO — SNSP databases integration',
                    es ? 'Protección CI: puertos SEMAR/aeropuertos AFAC/PEMEX/CFE' : 'CI protection: SEMAR ports/AFAC airports/PEMEX/CFE',
                  ],
                },
                {
                  label: es ? 'Adquisiciones y financiamiento' : 'Procurement & Financing',
                  items: [
                    es ? 'LAASSP — Ley de Adquisiciones, Arrendamientos y Servicios' : 'LAASSP — Law on Acquisitions, Leasing and Services',
                    es ? 'CompraNet/MercadoPúblico.mx — Plataforma e-procurement federal' : 'CompraNet/MercadoPúblico.mx — Federal e-procurement platform',
                    es ? 'PAIS — Plan de Apoyo e Infraestructura para la Seguridad' : 'PAIS — Security Support and Infrastructure Plan',
                    es ? 'Banco Mundial/BID — Financiamiento modernización seguridad' : 'World Bank/IDB — Security sector modernisation financing',
                  ],
                },
              ].map(({ label, items }) => (
                <div key={label} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">{label}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {es ? 'Preguntas frecuentes' : 'Frequently Asked Questions'}
            </h2>
            <div className="space-y-6">
              {activeFaqs.map((faq) => (
                <div key={faq.question} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          es={es}
          h2={
            es
              ? '¿Listo para modernizar la seguridad pública en México?'
              : 'Ready to modernise public safety in Mexico?'
          }
          subtitle={
            es
              ? 'Descubra cómo KabatOne unifica la SSPC, la Guardia Nacional y los C5 estatales en una plataforma operativa conforme a la LFPDPPP/LGPDPPSO/INAI, integrada con PLATAFORMA MÉXICO y el Sistema Nacional de Emergencias 911.'
              : 'Discover how KabatOne unifies Mexico SSPC, Guardia Nacional, and state C5 centres into one operational platform compliant with LFPDPPP/LGPDPPSO/INAI, integrated with PLATAFORMA MEXICO and the 911 National Emergency System.'
          }
        />
      </main>
      <Footer es={es} />
    </>
  )
}
