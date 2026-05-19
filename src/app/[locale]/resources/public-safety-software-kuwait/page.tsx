import { generatePageMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareKuwait', locale)
}

const faqs = [
  {
    question: 'How does KabatOne integrate Kuwait Police (MOI/KNP) across 6 security districts?',
    answer:
      'KabatOne unifies all 6 Kuwait National Police (KNP) security districts — Kuwait City/Hawalli/Farwaniya/Ahmadi/Jahra/Mubarak Al-Kabeer — into a single operational map with shared CAD, ANPR, and integration of special units (SWAT/Coast Guard/Border Patrol).',
  },
  {
    question: 'How does the platform support Kuwait fire and emergency medical services?',
    answer:
      'KabatOne connects MOI General Directorate of Fire Services (DGFD) with 50+ stations across 6 governorates, coordinates 112 CAD dispatch with MOH Ambulance Service, and links response times with Kuwait Hospital/Mubarak Hospital/Jaber Al-Ahmad Hospital for real-time patient transfers.',
  },
  {
    question: 'Does the platform support Kuwait port and coastal security operations?',
    answer:
      'Yes. KabatOne integrates Mina Al-Ahmadi Port (largest oil export terminal in the Gulf), Shuwaikh/Shuaiba/Abdullah Ports, and MOI Coast Guard/Border Patrol into unified situational dashboards with CCTV video, AIS radar, and ANPR access management.',
  },
  {
    question: 'How does KabatOne comply with Kuwait Personal Data Protection Law (Law 22/2023) and CITRA?',
    answer:
      'KabatOne implements encryption at rest and in transit, role-based access controls, consent management, and breach notification within Law 22/2023 timelines supervised by CITRA, with data localisation support aligned with Kuwait 2040 digital sovereignty requirements.',
  },
  {
    question: 'How does KabatOne support Kuwait Safe City and Kuwait City CCTV cameras?',
    answer:
      'KabatOne provides centralised video management for the 70,000+ CCTV cameras of the Kuwait Safe City Project (KSCP), including General Directorate of Traffic (GDT) ANPR/ALPR cameras on MOW highways and JKIA, with AI video analytics and real-time anomaly alerts.',
  },
  {
    question: 'How does KabatOne handle Kuwait government procurement through CAPT/MoF?',
    answer:
      'KabatOne supports Kuwait Central Agency for Public Tenders (CAPT) under MoF, Government Procurement Law (Decree 37bis/1964 and amendments), CSSP (Central Security Procurement Policy), and financing frameworks from Kuwait Fund for Arab Economic Development (KFAED) and KIA.',
  },
  {
    question: 'How does KabatOne align with Kuwait Vision 2035 "New Kuwait" and digital transformation?',
    answer:
      'KabatOne aligns with "New Kuwait" Vision 2035 pillars — Smart City (MOCI/Digital Kuwait), KOC/KNPC critical infrastructure security, State Cybersecurity Law/CITRA/KU-CERT, CSC/MOF digital government, and MOCI Smart Government Initiative to modernise public safety with AI/IoT.',
  },
]

const faqsEs = [
  {
    question: '¿Cómo integra KabatOne la Policía de Kuwait (MOI/KNP) y los 6 distritos de seguridad?',
    answer:
      'KabatOne unifica los 6 distritos de seguridad de la Policía Nacional de Kuwait (KNP) — Kuwait City/Hawalli/Farwaniya/Ahmadi/Jahra/Mubarak Al-Kabeer — en un solo mapa operativo con CAD compartido, ANPR e integración de unidades especiales (SWAT/Guardia Costera/Patrulla de Fronteras).',
  },
  {
    question: '¿Cómo admite la plataforma los servicios de bomberos y emergencias médicas de Kuwait?',
    answer:
      'KabatOne conecta la Dirección General de Bomberos del MOI (DGFD) con más de 50 estaciones distribuidas en 6 gobernaciones, coordina el despacho CAD del 112 con el Servicio de Ambulancias del MOH, y vincula los tiempos de respuesta con los Hospitales de Kuwait/Hospital Mubarak/Jaber Al-Ahmad para transferencias de pacientes en tiempo real.',
  },
  {
    question: '¿Admite la plataforma las operaciones de seguridad portuaria y costera de Kuwait?',
    answer:
      'Sí. KabatOne integra las operaciones del Puerto Mina Al-Ahmadi (mayor exportador de petróleo del Golfo), el Puerto Shuwaikh/Shuaiba/Abdullah y la Guardia Costera/Patrulla de Fronteras del MOI en paneles de situación unificados con video CCTV, radar AIS y gestión de acceso ANPR.',
  },
  {
    question: '¿Cómo cumple KabatOne con la Ley de Protección de Datos Personales de Kuwait (Ley 22/2023) y la CITRA?',
    answer:
      'KabatOne implementa cifrado en reposo y en tránsito, controles de acceso basados en roles, gestión de consentimiento y notificación de brechas dentro de los plazos de la Ley 22/2023 supervisada por la CITRA, y soporte de localización de datos en línea con los requisitos de soberanía digital de Kuwait 2040.',
  },
  {
    question: '¿Cómo apoya KabatOne el Kuwait Safe City y las cámaras CCTV de la Ciudad de Kuwait?',
    answer:
      'KabatOne proporciona gestión de video centralizada para las más de 70,000 cámaras CCTV del Kuwait Safe City Project (KSCP), incluidas cámaras ANPR/ALPR de la GDT en autopistas del MOW y el JKIA, con análisis de video IA y alertas de anomalías en tiempo real.',
  },
  {
    question: '¿Cómo maneja KabatOne las adquisiciones del gobierno de Kuwait a través de la CAPT/MoF?',
    answer:
      'KabatOne admite el Portal de Licitaciones Centrales de Kuwait (CAPT) bajo el MoF, la Ley de Licitaciones y Adquisiciones del Gobierno (Decreto 37bis/1964 y modificaciones), la CSSP y marcos de financiamiento del KFAED y el KIA.',
  },
  {
    question: '¿Cómo se alinea KabatOne con Kuwait Vision 2035 "Nueva Kuwait" y la transformación digital?',
    answer:
      'KabatOne se alinea con los pilares de la Visión 2035 "Nueva Kuwait" — Smart City (MOCI/Digital Kuwait), seguridad de infraestructura crítica del KOC/KNPC, Ley de Ciberseguridad del Estado/CITRA/KU-CERT, gobierno digital del CSC/MOF y Smart Government Initiative del MOCI para modernizar la seguridad pública con IA/IoT.',
  },
]

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const headline = es
    ? 'Software de Seguridad Pública para Kuwait: MOI/KNP, DGFD, Ley 22/2023/CITRA y Visión 2035'
    : 'Public Safety Software for Kuwait: MOI/KNP, DGFD, Law 22/2023/CITRA & Vision 2035'
  const description = es
    ? 'Plataforma unificada para MOI de Kuwait, KNP y DGFD — despacho CAD integrado para 6 distritos de seguridad, Kuwait Safe City/KSCP 70K+ cámaras, seguridad portuaria Mina Al-Ahmadi/JKIA, Ley 22/2023/CITRA, KU-CERT y adquisición CAPT/MoF.'
    : 'Unified platform for Kuwait MOI, KNP, and DGFD — integrated CAD dispatch for 6 security districts, Kuwait Safe City/KSCP 70K+ cameras, Mina Al-Ahmadi/JKIA port security, Law 22/2023/CITRA, KU-CERT compliance, and CAPT/MoF procurement.'
  const url = es
    ? 'https://kabatone.com/es/resources/public-safety-software-kuwait/'
    : 'https://kabatone.com/resources/public-safety-software-kuwait/'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    { name: 'Kuwait', url },
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
              {es ? 'Guía de Mercado — Kuwait' : 'Market Guide — Kuwait'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {es
                ? 'Software de Seguridad Pública para Kuwait'
                : 'Public Safety Software for Kuwait'}
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl">
              {es
                ? 'MOI/KNP 6 distritos · DGFD 50+ estaciones · Kuwait Safe City 70K+ cámaras · Ley 22/2023/CITRA · Visión 2035 "Nueva Kuwait"'
                : 'MOI/KNP 6 districts · DGFD 50+ stations · Kuwait Safe City 70K+ cameras · Law 22/2023/CITRA · Vision 2035 "New Kuwait"'}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              {es ? "El panorama de seguridad pública de Kuwait" : "Kuwait's Public Safety Landscape"}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                {es
                  ? 'Kuwait — con 4.9 millones de habitantes en la Ciudad de Kuwait y 6 gobernaciones — opera un ecosistema de seguridad pública centralizado bajo el Ministerio del Interior (MOI) con la Policía Nacional de Kuwait (KNP) organizada en 6 distritos de seguridad: Kuwait City, Hawalli, Farwaniya, Ahmadi, Jahra y Mubarak Al-Kabeer. Las unidades especiales incluyen la Guardia Nacional, SWAT, Guardia Costera, Patrulla de Fronteras y la Policía Militar. Los bomberos operan bajo la Dirección General de Bomberos del MOI (DGFD) con más de 50 estaciones, mientras que el MOH gestiona el Servicio de Ambulancias coordinado con el número unificado de emergencias 112.'
                  : 'Kuwait — with 4.9 million inhabitants across Kuwait City and 6 governorates — operates a centralised public safety ecosystem under the Ministry of Interior (MOI) with Kuwait National Police (KNP) organised into 6 security districts: Kuwait City, Hawalli, Farwaniya, Ahmadi, Jahra, and Mubarak Al-Kabeer. Special units include National Guard, SWAT, Coast Guard, Border Patrol, and Military Police. Fire services operate under MOI General Directorate of Fire Services (DGFD) with 50+ stations, and MOH manages the Ambulance Service coordinated via unified 112 emergency number.'}
              </p>
              <p>
                {es
                  ? 'El Kuwait Safe City Project (KSCP) desplegó más de 70,000 cámaras CCTV en toda la capital, incluyendo cámaras ANPR/ALPR de la Dirección General de Tráfico (GDT) en autopistas del MOW y el Aeropuerto Internacional de Kuwait (JKIA). Los puertos del Golfo — Mina Al-Ahmadi (mayor terminal de exportación de petróleo del Golfo con más de 1.7M bpd), Shuwaikh, Shuaiba y Abdullah — son infraestructuras críticas protegidas por la Guardia Costera del MOI y la Kuwait Oil Tankers Company (KOTC) con coordinación de seguridad marítima.'
                  : 'Kuwait Safe City Project (KSCP) deployed 70,000+ CCTV cameras across the capital, including General Directorate of Traffic (GDT) ANPR/ALPR cameras on MOW highways and Kuwait International Airport (JKIA). Gulf ports — Mina Al-Ahmadi (largest oil export terminal in Gulf, 1.7M+ bpd), Shuwaikh, Shuaiba, and Abdullah — are critical infrastructure protected by MOI Coast Guard and Kuwait Oil Tankers Company (KOTC) with maritime security coordination.'}
              </p>
              <p>
                {es
                  ? 'Kuwait Vision 2035 "Nueva Kuwait" impulsa la transformación digital del gobierno a través del MOCI/Digital Kuwait, con la Smart Government Initiative exigiendo plataformas de seguridad pública modernas que integren IA/IoT, cumplan la Ley de Protección de Datos Personales (Ley 22/2023) supervisada por la CITRA, y se alineen con la Ley de Ciberseguridad del Estado y el marco KU-CERT para la protección de la infraestructura crítica del KOC/KNPC.'
                  : 'Kuwait Vision 2035 "New Kuwait" drives government digital transformation through MOCI/Digital Kuwait, with Smart Government Initiative requiring modern public safety platforms that integrate AI/IoT, comply with Personal Data Protection Law (Law 22/2023) supervised by CITRA, and align with State Cybersecurity Law and KU-CERT framework for KOC/KNPC critical infrastructure protection.'}
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
                  title: es ? 'Policía Nacional de Kuwait (KNP/MOI)' : 'Kuwait National Police (KNP/MOI)',
                  body: es
                    ? '6 distritos de seguridad (Kuwait City/Hawalli/Farwaniya/Ahmadi/Jahra/Mubarak Al-Kabeer), unidades especiales: SWAT, Guardia Costera, Patrulla de Fronteras, Policía de Tráfico (GDT), Departamento de Investigación Criminal (CID), Policía Militar, Policía de Narcóticos — con el MOI como coordinador central bajo el Ministro del Interior.'
                    : '6 security districts (Kuwait City/Hawalli/Farwaniya/Ahmadi/Jahra/Mubarak Al-Kabeer), special units: SWAT, Coast Guard, Border Patrol, Traffic Police (GDT), Criminal Investigation Department (CID), Military Police, Narcotics Police — with MOI as central coordinator under Minister of Interior.',
                },
                {
                  title: es ? 'DGFD — Dirección General de Bomberos' : 'DGFD — General Directorate of Fire Services',
                  body: es
                    ? 'Más de 50 estaciones en 6 gobernaciones bajo el MOI; respuesta en puertos (Mina Al-Ahmadi/KNPC), campos del KOC (Ratqa/Abdali), instalaciones industriales de EQUATE/KPC y búsqueda y rescate marino con la Guardia Costera y la Guardia Nacional.'
                    : '50+ stations across 6 governorates under MOI; incident response at ports (Mina Al-Ahmadi/KNPC), KOC oilfields (Ratqa/Abdali), EQUATE/KPC industrial facilities, and marine search-and-rescue coordination with Coast Guard and National Guard.',
                },
                {
                  title: es ? 'Guardia Nacional de Kuwait (KNG)' : 'Kuwait National Guard (KNG)',
                  body: es
                    ? 'Fuerza militar independiente bajo la Presidencia del Estado, coordinada con MOI/KNP para grandes eventos, amenazas a infraestructura crítica (KOC/KNPC/KIPIC), protección de fronteras (Safwan/Nuwaiseeb con Iraq, Nauwa con Arabia Saudí) y emergencias nacionales bajo el NCECC.'
                    : 'Independent military force under State Presidency, coordinated with MOI/KNP for major events, critical infrastructure threats (KOC/KNPC/KIPIC), border protection (Safwan/Nuwaiseeb with Iraq, Nauwa with Saudi Arabia), and national emergencies under NCECC.',
                },
                {
                  title: es ? 'Kuwait Safe City Project (KSCP) y GDT' : 'Kuwait Safe City Project (KSCP) & GDT',
                  body: es
                    ? 'Más de 70,000 cámaras CCTV en Kuwait City y área metropolitana; ANPR/ALPR de la GDT en el Anillo Periférico/Autopista del Golfo/Autopistas MOW 40/50/70/80, JKIA, centros comerciales principales y puntos de cruce fronterizo; plataforma gestionada por la Dirección General de Información del MOI con análisis de IA.'
                    : '70,000+ CCTV cameras across Kuwait City and metro area; GDT ANPR/ALPR on Peripheral Ring/Gulf Motorway/MOW Highways 40/50/70/80, JKIA, major malls, and border crossings; platform managed by MOI General Directorate of Information with AI analytics.',
                },
                {
                  title: es ? 'NCECC — Centro Nacional de Control de Emergencias y Crisis' : 'NCECC — National Crisis and Emergency Management Centre',
                  body: es
                    ? 'Bajo el Consejo de Ministros; coordina la respuesta multi-agencial para inundaciones repentinas, tormentas de arena (Shamal), accidentes marítimos en el Golfo, emergencias en instalaciones del KOC/KNPC y ejercicios de respuesta NBQ; enlace con el Sistema Nacional de Alerta Meteorológica de la KMA.'
                    : 'Under Council of Ministers; coordinates multi-agency response for flash floods, sandstorms (Shamal), Gulf maritime accidents, KOC/KNPC facility emergencies, and NBC response exercises; liaising with KMA National Weather Warning System.',
                },
                {
                  title: es ? 'Seguridad de puertos y petróleo' : 'Port & Oil Infrastructure Security',
                  body: es
                    ? 'Mina Al-Ahmadi (mayor terminal petrolífera del Golfo, 1.7M+ bpd), Shuwaikh/Shuaiba/Abdullah Ports, KOC Greater Burgan (mayor campo petrolífero de Kuwait), refinerías KNPC Mina Abdullah/Mina Al-Ahmadi/Shuaiba, instalaciones KIPIC — con coordinación de seguridad bajo la KNSF y la Guardia Costera del MOI.'
                    : 'Mina Al-Ahmadi (Gulf\'s largest oil terminal, 1.7M+ bpd), Shuwaikh/Shuaiba/Abdullah Ports, KOC Greater Burgan (Kuwait\'s largest oilfield), KNPC Mina Abdullah/Mina Al-Ahmadi/Shuaiba refineries, KIPIC facilities — security coordination under KNSF and MOI Coast Guard.',
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
              {es ? 'Capacidades de la plataforma KabatOne para Kuwait' : 'KabatOne Platform Capabilities for Kuwait'}
            </h2>
            <div className="space-y-8">
              {[
                {
                  heading: es ? 'CAD unificado para 6 distritos KNP + DGFD' : 'Unified CAD for 6 KNP Districts + DGFD',
                  text: es
                    ? 'Despacho integrado con gestión de recursos en tiempo real para los 6 distritos de seguridad de la KNP, más de 50 estaciones de la DGFD, unidades de ambulancia del MOH y unidades de la Guardia Nacional — sobre el mismo mapa operativo con integración del número unificado 112, priorización por IA y seguimiento de recursos hasta el nivel de agente individual.'
                    : 'Integrated dispatch with real-time resource management for KNP\'s 6 security districts, DGFD\'s 50+ fire stations, MOH Ambulance units, and National Guard units — on the same operational map with unified 112 integration, AI-driven incident prioritisation, and resource tracking down to individual officer level.',
                },
                {
                  heading: es ? 'Gestión de vídeo KSCP — 70,000+ cámaras' : 'KSCP Video Management — 70,000+ Cameras',
                  text: es
                    ? 'KabatOne maneja las más de 70,000 cámaras del KSCP, integra alimentaciones ANPR/ALPR de la GDT de todas las autopistas principales y el JKIA, conecta con el video de los puertos de Mina Al-Ahmadi/Shuwaikh/Shuaiba/Abdullah, y proporciona análisis de video con IA — detección de anomalías, conteo de personas, análisis de comportamiento — con latencia de alerta inferior a 2 segundos.'
                    : 'KabatOne handles 70,000+ KSCP cameras, integrates GDT ANPR/ALPR feeds from all major motorways and JKIA, connects with Mina Al-Ahmadi/Shuwaikh/Shuaiba/Abdullah port video, and provides AI video analytics — anomaly detection, crowd counting, behavioural analysis — with sub-2-second alert latency.',
                },
                {
                  heading: es ? 'Protección de infraestructura crítica: KOC/KNPC/KIPIC' : 'Critical Infrastructure Protection: KOC/KNPC/KIPIC',
                  text: es
                    ? 'KabatOne proporciona monitoreo perimetral continuo de los campos del KOC (Greater Burgan/Raudhatain/Sabriya/Minagish/Umm Gudair), refinerías del KNPC (Mina Abdullah/Mina Al-Ahmadi/Shuaiba), instalaciones del KIPIC y el corredor de exportación de Mina Al-Ahmadi — con alertas de violación de perímetro, integración de video PTZ y coordinación con la KNSF/Guardia Costera.'
                    : 'KabatOne provides continuous perimeter monitoring of KOC oilfields (Greater Burgan/Raudhatain/Sabriya/Minagish/Umm Gudair), KNPC refineries (Mina Abdullah/Mina Al-Ahmadi/Shuaiba), KIPIC facilities, and Mina Al-Ahmadi export corridor — with perimeter breach alerts, PTZ video integration, and KNSF/Coast Guard coordination.',
                },
                {
                  heading: es ? 'Cumplimiento Ley 22/2023/CITRA y KU-CERT' : 'Law 22/2023/CITRA & KU-CERT Cybersecurity Compliance',
                  text: es
                    ? 'KabatOne se alinea con la Ley 22/2023 supervisada por la CITRA con cifrado, gestión de consentimiento, derechos de acceso de sujetos de datos y notificación de brechas; la Ley de Ciberseguridad del Estado y los marcos del KU-CERT; los Estándares de Seguridad de Sistemas Centrales de Kuwait; y los requisitos de continuidad del negocio del CIED/MOCI.'
                    : 'KabatOne aligns with Law 22/2023 supervised by CITRA with encryption, consent management, data subject access rights, and breach notification; State Cybersecurity Law and KU-CERT frameworks; Kuwait Central Systems Security Standards; and CIED/MOCI business continuity requirements.',
                },
                {
                  heading: es ? 'Adquisición CAPT/MoF y Digital Kuwait 2035' : 'CAPT/MoF Procurement & Digital Kuwait 2035',
                  text: es
                    ? 'KabatOne se integra con la CAPT bajo el MoF, la Ley de Adquisiciones del Gobierno (Decreto 37bis/1964), la CSSP y los marcos de subvención del KFAED; apoya las iniciativas de Smart Government del MOCI/Digital Kuwait bajo Kuwait Vision 2035; y se alinea con las prioridades del KIA para la modernización del sector público.'
                    : 'KabatOne integrates with CAPT under MoF, Government Procurement Law (Decree 37bis/1964), CSSP, and KFAED grant frameworks; supports MOCI/Digital Kuwait Smart Government initiatives under Kuwait Vision 2035; and aligns with KIA investment priorities for public sector modernisation.',
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
              {es ? 'Marco regulatorio y de adquisiciones en Kuwait' : 'Regulatory & Procurement Framework in Kuwait'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  label: es ? 'Protección de datos' : 'Data Protection',
                  items: [
                    es ? 'Ley de Protección de Datos Personales — Ley 22/2023' : 'Personal Data Protection Law — Law 22/2023',
                    es ? 'CITRA — Autoridad de Regulación de Comunicaciones e Información' : 'CITRA — Communications and IT Regulatory Authority',
                    es ? 'Notificación de brechas · Localización de datos' : 'Breach notification · Data localisation',
                    es ? 'Estándares de Seguridad de Sistemas Centrales de Kuwait' : 'Kuwait Central Systems Security Standards',
                  ],
                },
                {
                  label: es ? 'Ciberseguridad' : 'Cybersecurity',
                  items: [
                    es ? 'Ley de Ciberseguridad del Estado de Kuwait' : 'Kuwait State Cybersecurity Law',
                    es ? 'KU-CERT — Equipo de Respuesta a Emergencias Cibernéticas' : 'KU-CERT — Kuwait Computer Emergency Response Team',
                    es ? 'CITRA Marco de Seguridad Nacional de TIC' : 'CITRA National ICT Security Framework',
                    es ? 'Protección de infraestructura crítica: KOC/KNPC/KIPIC' : 'Critical infrastructure protection: KOC/KNPC/KIPIC',
                  ],
                },
                {
                  label: es ? 'Adquisiciones' : 'Procurement',
                  items: [
                    es ? 'CAPT — Agencia Central de Licitaciones Públicas (bajo MoF)' : 'CAPT — Central Agency for Public Tenders (under MoF)',
                    es ? 'Decreto 37bis/1964 — Ley de Adquisiciones del Gobierno' : 'Decree 37bis/1964 — Government Procurement Law',
                    es ? 'CSSP — Política de Adquisiciones de Seguridad Central' : 'CSSP — Central Security Procurement Policy',
                    es ? 'KFAED · KIA · Financiamiento Kuwait Fund' : 'KFAED · KIA · Kuwait Fund financing',
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
              ? '¿Listo para modernizar la seguridad pública en Kuwait?'
              : 'Ready to modernise public safety in Kuwait?'
          }
          subtitle={
            es
              ? 'Descubra cómo KabatOne unifica el MOI/KNP, la DGFD y el Kuwait Safe City Project en una plataforma operativa conforme a la Ley 22/2023/CITRA y alineada con Kuwait Vision 2035.'
              : 'Discover how KabatOne unifies Kuwait MOI/KNP, DGFD, and Kuwait Safe City Project into one operational platform compliant with Law 22/2023/CITRA and aligned with Kuwait Vision 2035.'
          }
        />
      </main>
      <Footer es={es} />
    </>
  )
}
