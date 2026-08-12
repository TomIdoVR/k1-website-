import { generatePageMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareOman', locale)
}

const faqs = [
  {
    question: 'How does KabatOne integrate the Royal Oman Police (ROP) across all 11 governorates?',
    answer:
      'KabatOne unifies Royal Oman Police (ROP) operations across all 11 governorates — Muscat, Dhofar, Al Batinah North/South, Al Dakhiliyah, Al Buraimi, Al Wusta, Ash Sharqiyah North/South, Al Dhahirah, and Musandam — into a single operational map with shared CAD, ANPR camera feeds, and integration of specialised units (CID, Border Guard, Coastguard, Traffic Police).',
  },
  {
    question: 'How does the platform support the Civil Defence and Ambulance Authority (CDAA)?',
    answer:
      'KabatOne connects Civil Defence and Ambulance Authority (CDAA) stations across all 11 governorates, coordinates 999/9999 CAD dispatch with Sultan Qaboos University Hospital/Royal Hospital/Khoula Hospital for patient transfers, and integrates fire response at PDO oilfields, Port of Salalah, Muscat International Airport (MCT), and industrial zones in Duqm/Sohar.',
  },
  {
    question: 'Does KabatOne support Oman port and oil infrastructure security?',
    answer:
      'Yes. KabatOne integrates Port of Salalah (top regional transshipment hub, 4M+ TEU/year), Sultan Qaboos Port, Duqm Port/SEZ, and Sohar Port/Freezone into unified situational dashboards with CCTV, AIS radar, and ANPR access management. For petroleum infrastructure, the platform monitors PDO oilfields, OQ Saih Nihayda/Saih Rawl, and the Mina Al-Fahal export terminal.',
  },
  {
    question: 'How does KabatOne comply with Oman Personal Data Protection Law (Royal Decree 6/2022) and ITA/OCERT requirements?',
    answer:
      'KabatOne implements encryption at rest and in transit, role-based access controls, data subject rights management, and breach notification aligned with Royal Decree 6/2022 PDPPL timelines supervised by the ITA. The platform aligns with Oman National CERT (OCERT) incident response frameworks and ITA cybersecurity standards for critical national infrastructure.',
  },
  {
    question: 'How does KabatOne support Muscat Integrated Security Operations Centre (ISOC) and Safe City initiatives?',
    answer:
      'KabatOne provides centralised video management for Muscat ISOC, integrating ROP CCTV/ANPR cameras on highways (Routes 1/15/17/18/40), Muscat International Airport (MCT), and Muscat Expressway — with AI video analytics for anomaly detection, crowd monitoring at Muttrah Corniche, and real-time dashboard sharing between ROP, CDAA, and National Emergency Management Committee (NEMC).',
  },
  {
    question: 'How does KabatOne handle Oman government procurement through ITA/MOCI tenders?',
    answer:
      'KabatOne supports procurement under the Oman Tendering Law (Royal Decree 36/2008 and amendments), the National Centre for Statistics and Information (NCSI), and ITA/eOman digital government frameworks. The platform integrates with Etimad-compatible documentation, Oman Investment Authority (OIA) financing mechanisms, and special economic zone procurement rules for Duqm/Sohar/Salalah.',
  },
  {
    question: 'How does KabatOne align with Oman Vision 2040 and digital transformation?',
    answer:
      'KabatOne aligns with Oman Vision 2040 pillars — Digital Oman Strategy, Smart City Muscat, ITA e-Government framework, and OCERT cybersecurity roadmap — by providing AI/IoT-integrated public safety platforms that modernise ROP, CDAA, and NEMC operations under the National Emergency Management Committee framework and Oman 2040 smart infrastructure priorities.',
  },
]

const faqsEs = [
  {
    question: '¿Cómo integra KabatOne la Policía Real de Omán (ROP) en los 11 gobernados?',
    answer:
      'KabatOne unifica las operaciones de la Policía Real de Omán (ROP) en los 11 gobernados — Mascate, Dhofar, Al Batinah Norte/Sur, Al Dakhiliyah, Al Buraimi, Al Wusta, Ash Sharqiyah Norte/Sur, Al Dhahirah y Musandam — en un solo mapa operativo con CAD compartido, cámaras ANPR y unidades especializadas (CID, Guardia Fronteriza, Guardia Costera, Policía de Tráfico).',
  },
  {
    question: '¿Cómo admite la plataforma la Autoridad de Defensa Civil y Ambulancias (CDAA)?',
    answer:
      'KabatOne conecta las estaciones de la Autoridad de Defensa Civil y Ambulancias (CDAA) en los 11 gobernados, coordina el despacho CAD del 999/9999 con el Hospital de la Universidad Sultan Qaboos/Hospital Real/Hospital Khoula para traslados de pacientes, e integra respuesta de incendios en instalaciones PDO, Puerto de Salalah, Aeropuerto Internacional de Mascate (MCT) y zonas industriales en Duqm/Sohar.',
  },
  {
    question: '¿Admite KabatOne la seguridad de puertos e infraestructura petrolera de Omán?',
    answer:
      'Sí. KabatOne integra el Puerto de Salalah (hub regional de transbordo líder, más de 4M TEU/año), Puerto Sultan Qaboos, Puerto Duqm/ZEE y Puerto Sohar/Zona Franca en paneles de situación unificados con CCTV, radar AIS y control de acceso ANPR. Para infraestructura petrolera, la plataforma monitorea yacimientos de la PDO, OQ Saih Nihayda/Saih Rawl y la terminal de exportación de Mina Al-Fahal.',
  },
  {
    question: '¿Cómo cumple KabatOne con la Ley de Protección de Datos Personales de Omán (Decreto Real 6/2022) y los requisitos de ITA/OCERT?',
    answer:
      'KabatOne implementa cifrado en reposo y en tránsito, controles de acceso basados en roles, gestión de derechos de sujetos de datos y notificación de brechas alineada con los plazos del PDPPL del Decreto Real 6/2022 supervisado por la ITA. La plataforma se alinea con los marcos de respuesta a incidentes del OCERT y los estándares de ciberseguridad de la ITA para infraestructura crítica nacional.',
  },
  {
    question: '¿Cómo apoya KabatOne el Centro de Operaciones de Seguridad Integrada de Mascate (ISOC) y las iniciativas Safe City?',
    answer:
      'KabatOne proporciona gestión de video centralizada para el ISOC de Mascate, integrando cámaras CCTV/ANPR de la ROP en carreteras (Rutas 1/15/17/18/40), Aeropuerto Internacional de Mascate (MCT) y Autopista de Mascate — con análisis de video IA para detección de anomalías, monitoreo de multitudes en el Corniche de Muttrah y compartición de paneles en tiempo real entre ROP, CDAA y el NEMC.',
  },
  {
    question: '¿Cómo gestiona KabatOne las adquisiciones del gobierno de Omán a través de licitaciones ITA/MOCI?',
    answer:
      'KabatOne admite las adquisiciones bajo la Ley de Licitaciones de Omán (Decreto Real 36/2008 y modificaciones), el Centro Nacional de Estadística e Información (NCSI) y los marcos de gobierno digital ITA/eOman. La plataforma se integra con documentación compatible con Etimad, mecanismos de financiamiento de la Autoridad de Inversiones de Omán (OIA) y reglas de adquisición de las zonas económicas especiales de Duqm/Sohar/Salalah.',
  },
  {
    question: '¿Cómo se alinea KabatOne con la Visión Omán 2040 y la transformación digital?',
    answer:
      'KabatOne se alinea con los pilares de la Visión Omán 2040 — Estrategia Digital Omán, Smart City Mascate, marco de gobierno electrónico ITA y hoja de ruta de ciberseguridad OCERT — proporcionando plataformas de seguridad pública integradas con IA/IoT que modernizan las operaciones de la ROP, CDAA y NEMC bajo el marco del Comité Nacional de Gestión de Emergencias y las prioridades de infraestructura inteligente Omán 2040.',
  },
]

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const headline = es
    ? 'Software de Seguridad Pública para Omán: ROP/CDAA, NEMC, Decreto Real 6/2022/ITA y Visión 2040'
    : 'Public Safety Software for Oman: ROP/CDAA, NEMC, Royal Decree 6/2022/ITA & Vision 2040'
  const description = es
    ? 'Plataforma unificada para la Policía Real de Omán (ROP) y CDAA — despacho CAD integrado en 11 gobernados, ISOC de Mascate, seguridad portuaria Salalah/Duqm/Sohar, infraestructura PDO/OQ, Decreto Real 6/2022/ITA/OCERT y adquisición mediante Decreto Real 36/2008.'
    : 'Unified platform for Royal Oman Police (ROP) and CDAA — integrated CAD dispatch across 11 governorates, Muscat ISOC, Port of Salalah/Duqm/Sohar security, PDO/OQ infrastructure, Royal Decree 6/2022/ITA/OCERT compliance, and Royal Decree 36/2008 procurement.'
  const url = es
    ? 'https://kabatone.com/es/resources/public-safety-software-oman'
    : 'https://kabatone.com/resources/public-safety-software-oman'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources' : 'https://kabatone.com/resources' },
    { name: es ? 'Omán' : 'Oman', url },
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
              {es ? 'Guía de Mercado — Omán' : 'Market Guide — Oman'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {es
                ? 'Software de Seguridad Pública para Omán'
                : 'Public Safety Software for Oman'}
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl">
              {es
                ? 'ROP 11 gobernados · CDAA respuesta unificada · ISOC Mascate · Puerto Salalah/Duqm/Sohar · DR 6/2022/ITA/OCERT · Visión Omán 2040'
                : 'ROP 11 governorates · CDAA unified response · Muscat ISOC · Port Salalah/Duqm/Sohar · RD 6/2022/ITA/OCERT · Oman Vision 2040'}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              {es ? "El panorama de seguridad pública de Omán" : "Oman's Public Safety Landscape"}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                {es
                  ? 'Omán — con 4.9 millones de habitantes repartidos en 11 gobernados — opera un ecosistema de seguridad pública centralizado bajo la Policía Real de Omán (ROP), una fuerza unificada que combina las funciones de policía, guardacostas, guardia fronteriza y policía de tráfico bajo el Ministerio Real. La ROP está organizada en 11 gobernados: Mascate, Dhofar, Al Batinah Norte/Sur, Al Dakhiliyah, Al Buraimi, Al Wusta, Ash Sharqiyah Norte/Sur, Al Dhahirah y Musandam. La Autoridad de Defensa Civil y Ambulancias (CDAA) gestiona las respuestas contra incendios y emergencias médicas, coordinadas a través del número unificado de emergencias 999/9999.'
                  : 'Oman — with 4.9 million inhabitants across 11 governorates — operates a centralised public safety ecosystem under the Royal Oman Police (ROP), a unified force combining police, coastguard, border guard, and traffic police functions under the Royal Office. ROP is organised across 11 governorates: Muscat, Dhofar, Al Batinah North/South, Al Dakhiliyah, Al Buraimi, Al Wusta, Ash Sharqiyah North/South, Al Dhahirah, and Musandam. The Civil Defence and Ambulance Authority (CDAA) manages fire and medical emergency response, coordinated through unified 999/9999 emergency numbers.'}
              </p>
              <p>
                {es
                  ? 'El Comité Nacional de Gestión de Emergencias (NEMC) bajo la Presidencia del Consejo de Ministros coordina la respuesta ante desastres para ciclones (Gonu/Shaheen), inundaciones repentinas estacionales, derrames petroleros en el Golfo de Omán y el Mar Arábigo, y emergencias en instalaciones críticas. El Centro de Operaciones de Seguridad Integrada (ISOC) de Mascate unifica las transmisiones CCTV/ANPR de la ROP en carreteras principales, el Aeropuerto Internacional de Mascate (MCT) y zonas comerciales — con análisis de video IA centralizado.'
                  : 'The National Emergency Management Committee (NEMC) under the Council of Ministers Presidency coordinates disaster response for cyclones (Gonu/Shaheen), seasonal flash floods, oil spills in the Gulf of Oman and Arabian Sea, and critical facility emergencies. The Muscat Integrated Security Operations Centre (ISOC) unifies ROP CCTV/ANPR feeds across major roads, Muscat International Airport (MCT), and commercial districts — with centralised AI video analytics.'}
              </p>
              <p>
                {es
                  ? 'Omán Vision 2040 impulsa la digitalización del gobierno a través de la Autoridad de Tecnología de la Información (ITA) y la iniciativa eOman. El marco legal de seguridad de datos se basa en el Decreto Real 6/2022 (Ley de Protección de Datos Personales/PDPPL), supervisado por la ITA, mientras que el CERT Nacional de Omán (OCERT) gestiona la ciberseguridad de infraestructura crítica, incluidas las instalaciones de Petroleum Development Oman (PDO), OQ Group (antes Oman Oil/Orpic) y los puertos de Salalah/Duqm/Sohar.'
                  : 'Oman Vision 2040 drives government digitalisation through the Information Technology Authority (ITA) and eOman initiative. The data security legal framework rests on Royal Decree 6/2022 (Personal Data Protection Law/PDPPL), supervised by the ITA, while the Oman National CERT (OCERT) manages cybersecurity for critical infrastructure including Petroleum Development Oman (PDO), OQ Group (formerly Oman Oil/Orpic) facilities, and Port of Salalah/Duqm/Sohar.'}
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
                  title: es ? 'Policía Real de Omán (ROP)' : 'Royal Oman Police (ROP)',
                  body: es
                    ? '11 gobernados operativos con unidades: CID (Departamento de Investigación Criminal), Guardia Fronteriza, Guardia Costera, Policía de Tráfico, Narcóticos, Inmigración y Pasaportes, Fuerzas Especiales — con el Inspector General de Policía y Aduanas como máxima autoridad operativa bajo el Ministro del Interior.'
                    : '11 operational governorates with specialised units: CID (Criminal Investigation Department), Border Guard, Coastguard, Traffic Police, Narcotics, Immigration & Passports, Special Forces — under the Inspector General of Police and Customs as the top operational authority below the Minister of Interior.',
                },
                {
                  title: es ? 'CDAA — Autoridad de Defensa Civil y Ambulancias' : 'CDAA — Civil Defence and Ambulance Authority',
                  body: es
                    ? 'Estaciones de bomberos y ambulancias en los 11 gobernados bajo el Ministerio del Interior; respuesta en infraestructura crítica: instalaciones PDO/OQ, Puerto de Salalah/Duqm, MCT y zonas industriales de Sohar; coordinación marino-SAR con la Guardia Costera de la ROP y la Marina Real de Omán (RNO).'
                    : 'Fire and ambulance stations across 11 governorates under Ministry of Interior; incident response at critical infrastructure: PDO/OQ facilities, Port of Salalah/Duqm, MCT, and Sohar industrial zones; marine SAR coordination with ROP Coastguard and Royal Navy of Oman (RNO).',
                },
                {
                  title: es ? 'NEMC — Comité Nacional de Gestión de Emergencias' : 'NEMC — National Emergency Management Committee',
                  body: es
                    ? 'Bajo la Presidencia del Consejo de Ministros; coordina la respuesta multi-agencial para ciclones (clasificados por JTWC), inundaciones en wadis, derrames de petróleo en el Golfo de Omán/Mar Arábigo, emergencias NBQ y evacuaciones de expatriados — con integración del Sistema de Alerta Meteorológica de la Autoridad de Aviación Civil (CAA) y el Centro de Meteorología Aeronáutica (AMC).'
                    : 'Under Council of Ministers Presidency; coordinates multi-agency response for cyclones (classified by JTWC), wadi flash floods, oil spills in Gulf of Oman/Arabian Sea, NBC emergencies, and expatriate evacuations — with Civil Aviation Authority (CAA) and Aeronautical Meteorology Centre (AMC) weather alert integration.',
                },
                {
                  title: es ? 'ISOC Mascate y cámaras Safe City de la ROP' : 'Muscat ISOC & ROP Safe City Cameras',
                  body: es
                    ? 'Centro de Operaciones de Seguridad Integrada de Mascate con CCTV/ANPR de la ROP en autopistas (Rutas 1/15/17/18/40), Autopista de Mascate, MCT, Corniche de Muttrah, centros comerciales y pasos fronterizos de Wajajah/Buraimi/Khatmat Malaha — con análisis de IA y alertas de velocidad/placa de la Policía de Tráfico.'
                    : 'Muscat Integrated Security Operations Centre with ROP CCTV/ANPR on highways (Routes 1/15/17/18/40), Muscat Expressway, MCT, Muttrah Corniche, malls, and border crossings (Wajajah/Buraimi/Khatmat Malaha) — with AI analytics and Traffic Police speed/plate alerts.',
                },
                {
                  title: es ? 'Seguridad de puertos y zonas económicas' : 'Port & Special Economic Zone Security',
                  body: es
                    ? 'Puerto de Salalah (4M+ TEU/año, hub de transbordo del Índico), Puerto Sultan Qaboos (Mascate), Puerto Duqm/ZEE, Puerto Sohar/Zona Franca — con video CCTV, AIS radar, control de acceso ANPR y coordinación con Oman Shipping Company, Oman Ports Authority y Royal Navy of Oman (RNO) para vigilancia marítima.'
                    : 'Port of Salalah (4M+ TEU/year, Indian Ocean transshipment hub), Sultan Qaboos Port (Muscat), Duqm Port/SEZ, Sohar Port/Freezone — with CCTV video, AIS radar, ANPR access control, and coordination with Oman Shipping Company, Oman Ports Authority, and Royal Navy of Oman (RNO) for maritime surveillance.',
                },
                {
                  title: es ? 'Infraestructura PDO/OQ y Mina Al-Fahal' : 'PDO/OQ Infrastructure & Mina Al-Fahal',
                  body: es
                    ? 'Petroleum Development Oman (PDO) — principal productor con más de 600,000 bpd en los yacimientos de Fahud/Yibal/Lekhwair/Al Huwaisah — más refinería de Mina Al-Fahal (100K bpd), instalaciones OQ Saih Nihayda/Saih Rawl y LNG de Qalhat (3 trenes, 10.4 Mtpa) — monitoreo perimetral, PTZ y coordinación de respuesta CDAA.'
                    : 'Petroleum Development Oman (PDO) — primary producer at 600,000+ bpd across Fahud/Yibal/Lekhwair/Al Huwaisah fields — plus Mina Al-Fahal refinery (100K bpd), OQ Saih Nihayda/Saih Rawl facilities, and Qalhat LNG (3 trains, 10.4 Mtpa) — perimeter monitoring, PTZ cameras, and CDAA response coordination.',
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
              {es ? 'Capacidades de la plataforma KabatOne para Omán' : 'KabatOne Platform Capabilities for Oman'}
            </h2>
            <div className="space-y-8">
              {[
                {
                  heading: es ? 'CAD unificado para ROP 11 gobernados + CDAA' : 'Unified CAD for ROP 11 Governorates + CDAA',
                  text: es
                    ? 'Despacho integrado con gestión de recursos en tiempo real para las 11 divisiones regionales de la ROP, estaciones de la CDAA, unidades de ambulancia y Royal Navy of Oman (RNO) — sobre el mismo mapa operativo con integración del número unificado 999/9999, priorización por IA y seguimiento de recursos hasta nivel de agente individual, con panel de desbordamiento al NEMC para emergencias nacionales.'
                    : 'Integrated dispatch with real-time resource management for ROP\'s 11 regional divisions, CDAA stations, ambulance units, and Royal Navy of Oman (RNO) — on the same operational map with unified 999/9999 integration, AI-driven incident prioritisation, and resource tracking to individual officer level, with NEMC overflow dashboard for national emergencies.',
                },
                {
                  heading: es ? 'Gestión de vídeo ISOC Mascate y cámaras ROP' : 'Muscat ISOC Video Management & ROP Cameras',
                  text: es
                    ? 'KabatOne gestiona las transmisiones CCTV/ANPR de la ROP de los 11 gobernados, integra la vigilancia del MCT y el Corniche de Muttrah, conecta el video de los puertos de Salalah/Duqm/Sohar/Sultan Qaboos, y proporciona análisis de video con IA — detección de anomalías, conteo de personas, análisis de comportamiento — con latencia de alerta inferior a 2 segundos y uso compartido de transmisiones en tiempo real con el NEMC.'
                    : 'KabatOne manages ROP CCTV/ANPR feeds across 11 governorates, integrates MCT and Muttrah Corniche surveillance, connects Port of Salalah/Duqm/Sohar/Sultan Qaboos video, and provides AI video analytics — anomaly detection, crowd counting, behavioural analysis — with sub-2-second alert latency and real-time stream sharing with NEMC.',
                },
                {
                  heading: es ? 'Protección de infraestructura crítica: PDO/OQ/LNG' : 'Critical Infrastructure Protection: PDO/OQ/LNG',
                  text: es
                    ? 'KabatOne proporciona monitoreo perimetral continuo de los campos PDO (Fahud/Yibal/Lekhwair/Al Huwaisah), instalaciones OQ (Saih Nihayda/Saih Rawl/Muscat Refinery), complejo LNG de Qalhat (3 trenes, 10.4 Mtpa) y terminal de exportación de Mina Al-Fahal — con alertas de violación de perímetro, integración de video PTZ y coordinación con la CDAA y la Guardia Costera de la ROP.'
                    : 'KabatOne provides continuous perimeter monitoring of PDO oilfields (Fahud/Yibal/Lekhwair/Al Huwaisah), OQ facilities (Saih Nihayda/Saih Rawl/Muscat Refinery), Qalhat LNG complex (3 trains, 10.4 Mtpa), and Mina Al-Fahal export terminal — with perimeter breach alerts, PTZ video integration, and coordination with CDAA and ROP Coastguard.',
                },
                {
                  heading: es ? 'Cumplimiento DR 6/2022/ITA y OCERT' : 'Royal Decree 6/2022/ITA & OCERT Cybersecurity Compliance',
                  text: es
                    ? 'KabatOne se alinea con la PDPPL del Decreto Real 6/2022 supervisada por la ITA — cifrado, gestión del consentimiento, derechos de acceso de sujetos de datos y notificación de brechas; marcos de ciberseguridad OCERT y estándares de seguridad de la ITA para infraestructura crítica nacional; y requisitos de continuidad de negocio del eOman/ITA para sistemas gubernamentales.'
                    : 'KabatOne aligns with Royal Decree 6/2022 PDPPL supervised by ITA — encryption, consent management, data subject access rights, and breach notification; OCERT cybersecurity frameworks and ITA security standards for critical national infrastructure; and eOman/ITA business continuity requirements for government systems.',
                },
                {
                  heading: es ? 'Adquisición DR 36/2008 y Digital Oman 2040' : 'Royal Decree 36/2008 Procurement & Digital Oman 2040',
                  text: es
                    ? 'KabatOne admite licitaciones bajo la Ley de Adquisiciones del Gobierno (Decreto Real 36/2008 y modificaciones), los marcos de adquisición del ITA/eOman y las reglas de ZEE para Duqm/Sohar/Salalah Free Zone; apoya las prioridades Smart City y Digital Oman de la Visión 2040; y se alinea con los mecanismos de financiamiento de la Autoridad de Inversiones de Omán (OIA) para la modernización del sector público.'
                    : 'KabatOne supports tenders under Government Procurement Law (Royal Decree 36/2008 and amendments), ITA/eOman procurement frameworks, and SEZ rules for Duqm/Sohar/Salalah Free Zone; supports Vision 2040 Smart City and Digital Oman priorities; and aligns with Oman Investment Authority (OIA) financing mechanisms for public sector modernisation.',
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
              {es ? 'Marco regulatorio y de adquisiciones en Omán' : 'Regulatory & Procurement Framework in Oman'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  label: es ? 'Protección de datos' : 'Data Protection',
                  items: [
                    es ? 'PDPPL — Decreto Real 6/2022 (Ley de Protección de Datos Personales)' : 'PDPPL — Royal Decree 6/2022 (Personal Data Protection Law)',
                    es ? 'ITA — Autoridad de Tecnología de la Información (supervisora)' : 'ITA — Information Technology Authority (supervisory body)',
                    es ? 'Notificación de brechas · Localización de datos' : 'Breach notification · Data localisation',
                    es ? 'Decreto Real 12/2011 — Marco de Transacciones Electrónicas' : 'Royal Decree 12/2011 — Electronic Transactions Framework',
                  ],
                },
                {
                  label: es ? 'Ciberseguridad' : 'Cybersecurity',
                  items: [
                    es ? 'OCERT — CERT Nacional de Omán (respuesta a incidentes)' : 'OCERT — Oman National CERT (incident response)',
                    es ? 'Estándares de Ciberseguridad ITA para infraestructura crítica' : 'ITA Cybersecurity Standards for critical infrastructure',
                    es ? 'Marco de Gestión de Riesgos de TI de eOman' : 'eOman IT Risk Management Framework',
                    es ? 'Protección CI: PDO/OQ/Puertos/MCT' : 'CI protection: PDO/OQ/Ports/MCT',
                  ],
                },
                {
                  label: es ? 'Adquisiciones' : 'Procurement',
                  items: [
                    es ? 'Decreto Real 36/2008 — Ley de Licitaciones y Adquisiciones del Gobierno' : 'Royal Decree 36/2008 — Government Tenders & Procurement Law',
                    es ? 'ITA/eOman — Marco de Adquisiciones Digitales' : 'ITA/eOman — Digital Procurement Framework',
                    es ? 'OIA — Autoridad de Inversiones de Omán (financiamiento)' : 'OIA — Oman Investment Authority (financing)',
                    es ? 'Reglas de adquisición ZEE: Duqm/Sohar/Salalah' : 'SEZ procurement rules: Duqm/Sohar/Salalah',
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
              ? '¿Listo para modernizar la seguridad pública en Omán?'
              : 'Ready to modernise public safety in Oman?'
          }
          subtitle={
            es
              ? 'Descubra cómo KabatOne unifica la ROP, la CDAA y el NEMC en una plataforma operativa conforme al Decreto Real 6/2022/ITA y alineada con la Visión Omán 2040.'
              : 'Discover how KabatOne unifies Oman ROP, CDAA, and NEMC into one operational platform compliant with Royal Decree 6/2022/ITA and aligned with Oman Vision 2040.'
          }
        />
      </main>
      <Footer es={es} />
    </>
  )
}
