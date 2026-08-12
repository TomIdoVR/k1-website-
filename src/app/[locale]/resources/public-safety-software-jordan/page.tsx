import { generatePageMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareJordan', locale)
}

const faqs = [
  {
    question: 'How does KabatOne integrate the Public Security Directorate (PSD) across Jordan\'s 12 governorates?',
    answer:
      'KabatOne unifies Public Security Directorate (PSD) operations across all 12 governorates — Amman, Zarqa, Irbid, Balqa, Madaba, Karak, Tafilah, Ma\'an, Aqaba, Mafraq, Jerash, and Ajloun — into a single operational map with shared CAD, ANPR camera feeds, and integration of specialised units (CID, Border Guard, Anti-Narcotics, Traffic Police, Gendarmerie/GADSA).',
  },
  {
    question: 'How does the platform support Jordan Civil Defence Directorate (CDD)?',
    answer:
      'KabatOne connects Civil Defence Directorate (CDD) stations across all 12 governorates, coordinates 911 unified CAD dispatch with King Hussein Medical Center/Jordan University Hospital/Prince Hamzah Hospital for patient transfers, and integrates fire response at JEPCO/NEPCO power facilities, Jordan Petroleum Refinery Company (JPRC), Aqaba Port, and Queen Alia International Airport (AMM).',
  },
  {
    question: 'Does KabatOne support Amman Safe City and Jordan\'s CCTV network?',
    answer:
      'Yes. KabatOne provides centralised video management for Amman Safe City cameras and PSD CCTV/ANPR across the Greater Amman Municipality (GAM) road network — including Highways 35/40/65, the Desert Highway, Jordan Valley Highway, Amman Ring Road, and Queen Alia International Airport (AMM) — with AI video analytics and real-time alerts shared with the National Centre for Security and Crisis Management (NCSCM).',
  },
  {
    question: 'How does KabatOne comply with Jordan Personal Data Protection Law (Law 24/2023) and NITC requirements?',
    answer:
      'KabatOne implements encryption at rest and in transit, role-based access controls, data subject rights management, and breach notification aligned with Jordan\'s Personal Data Protection Law (Law 24/2023) supervised by the Ministry of Digital Economy and Entrepreneurship (MODEE). The platform aligns with National Information Technology Center (NITC) cybersecurity standards and Jordan CERT (CERT.jo) incident response frameworks.',
  },
  {
    question: 'How does KabatOne support Aqaba Special Economic Zone and Port of Aqaba security?',
    answer:
      'KabatOne integrates Aqaba Port (Jordan\'s only sea outlet, handling 26M+ tonnes/year), Aqaba Special Economic Zone Authority (ASEZA) industrial zones, and the port\'s CCTV/access control into unified situational dashboards with AIS maritime radar, ANPR gates, and coordination between PSD Aqaba branch, CDD, and Jordan Armed Forces (JAF) for border security along the Gulf of Aqaba.',
  },
  {
    question: 'How does KabatOne handle Jordan border security and crossing management?',
    answer:
      'KabatOne connects the Jordan Border Guard Corps across all major crossings — King Hussein Bridge/Allenby (West Bank), Sheikh Hussein Bridge (north), Wadi Araba/Yitzhak Rabin (south), Jaber/Nassib (Syria), Al-Karama/Al-Omari (Iraq), and Aqaba/Durra (Saudi Arabia) — providing ANPR, biometric access integration, and real-time incident escalation to GID and NCSCM.',
  },
  {
    question: 'How does KabatOne align with Jordan Vision 2030 and digital transformation?',
    answer:
      'KabatOne aligns with Jordan Economic Modernisation Vision 2025/2033 pillars — Digital Jordan, Smart City Amman (GAM), NITC e-Government framework, and CERT.jo cybersecurity roadmap — by providing AI/IoT public safety platforms that modernise PSD, CDD, and NCSCM operations compliant with Law 24/2023 and Regulation 32/1994 government procurement rules.',
  },
]

const faqsEs = [
  {
    question: '¿Cómo integra KabatOne la Dirección de Seguridad Pública (PSD) en los 12 gobernados de Jordania?',
    answer:
      'KabatOne unifica las operaciones de la Dirección de Seguridad Pública (PSD) en los 12 gobernados — Amán, Zarqa, Irbid, Balqa, Madaba, Karak, Tafilah, Ma\'an, Aqaba, Mafraq, Jerash y Ajloun — en un solo mapa operativo con CAD compartido, cámaras ANPR e integración de unidades especializadas (CID, Guardia Fronteriza, Antinarcóticos, Policía de Tráfico, Gendarmería/GADSA).',
  },
  {
    question: '¿Cómo admite la plataforma la Dirección de Defensa Civil de Jordania (CDD)?',
    answer:
      'KabatOne conecta las estaciones de la Dirección de Defensa Civil (CDD) en los 12 gobernados, coordina el despacho CAD unificado del 911 con el Centro Médico Rey Hussein/Hospital de la Universidad de Jordania/Hospital Príncipe Hamzah para traslados de pacientes, e integra la respuesta de incendios en instalaciones JEPCO/NEPCO, la Compañía de Refinería de Petróleo de Jordania (JPRC), el Puerto de Aqaba y el Aeropuerto Internacional Reina Alía (AMM).',
  },
  {
    question: '¿Admite KabatOne la Ciudad Segura de Amán y la red de CCTV de Jordania?',
    answer:
      'Sí. KabatOne proporciona gestión de video centralizada para las cámaras del Amman Safe City y el CCTV/ANPR de la PSD en la red vial del Gran Municipio de Amán (GAM) — incluidas las Carreteras 35/40/65, la Autopista del Desierto, la Autopista del Valle del Jordán, el Anillo Vial de Amán y el Aeropuerto Internacional Reina Alía (AMM) — con análisis de video IA y alertas en tiempo real compartidas con el NCSCM.',
  },
  {
    question: '¿Cómo cumple KabatOne con la Ley de Protección de Datos Personales de Jordania (Ley 24/2023) y los requisitos del NITC?',
    answer:
      'KabatOne implementa cifrado en reposo y en tránsito, controles de acceso basados en roles, gestión de derechos de sujetos de datos y notificación de brechas conforme a la Ley de Protección de Datos Personales de Jordania (Ley 24/2023) supervisada por el MODEE. La plataforma se alinea con los estándares de ciberseguridad del Centro Nacional de Tecnología de la Información (NITC) y los marcos de respuesta a incidentes del CERT.jo.',
  },
  {
    question: '¿Cómo apoya KabatOne la seguridad de la Zona Económica Especial de Aqaba y el Puerto de Aqaba?',
    answer:
      'KabatOne integra el Puerto de Aqaba (única salida al mar de Jordania, más de 26M toneladas/año), las zonas industriales de la Autoridad de la Zona Económica Especial de Aqaba (ASEZA) y el CCTV/control de acceso del puerto en paneles de situación unificados con radar AIS marítimo, portales ANPR y coordinación entre la sucursal de la PSD en Aqaba, la CDD y las Fuerzas Armadas de Jordania (JAF).',
  },
  {
    question: '¿Cómo gestiona KabatOne la seguridad fronteriza y los pasos fronterizos de Jordania?',
    answer:
      'KabatOne conecta el Cuerpo de la Guardia Fronteriza de Jordania en todos los pasos principales — Puente Rey Hussein/Allenby (Cisjordania), Puente Sheikh Hussein (norte), Wadi Araba/Yitzhak Rabin (sur), Jaber/Nassib (Siria), Al-Karama/Al-Omari (Iraq) y Aqaba/Durra (Arabia Saudí) — proporcionando ANPR, integración biométrica y escalada de incidentes en tiempo real hacia el GID y el NCSCM.',
  },
  {
    question: '¿Cómo se alinea KabatOne con la Visión Jordania 2030 y la transformación digital?',
    answer:
      'KabatOne se alinea con los pilares de la Visión de Modernización Económica de Jordania 2025/2033 — Digital Jordan, Smart City Amán (GAM), marco de gobierno electrónico del NITC y hoja de ruta de ciberseguridad de CERT.jo — proporcionando plataformas de seguridad pública integradas con IA/IoT que modernizan las operaciones de la PSD, CDD y NCSCM conforme a la Ley 24/2023 y las normas de adquisición pública del Reglamento 32/1994.',
  },
]

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const headline = es
    ? 'Software de Seguridad Pública para Jordania: PSD/CDD, NCSCM, Ley 24/2023/NITC y Visión Económica 2033'
    : 'Public Safety Software for Jordan: PSD/CDD, NCSCM, Law 24/2023/NITC & Economic Modernisation Vision 2033'
  const description = es
    ? 'Plataforma unificada para la PSD y CDD de Jordania — despacho CAD integrado en 12 gobernados, Amman Safe City/GAM, seguridad portuaria Aqaba/ASEZA, fronteras King Hussein/Sheikh Hussein/Jaber, Ley 24/2023/NITC/CERT.jo y adquisición Reglamento 32/1994.'
    : 'Unified platform for Jordan PSD and CDD — integrated CAD dispatch across 12 governorates, Amman Safe City/GAM, Aqaba Port/ASEZA security, King Hussein/Sheikh Hussein/Jaber border crossings, Law 24/2023/NITC/CERT.jo compliance, and Regulation 32/1994 procurement.'
  const url = es
    ? 'https://kabatone.com/es/resources/public-safety-software-jordan'
    : 'https://kabatone.com/resources/public-safety-software-jordan'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources' : 'https://kabatone.com/resources' },
    { name: es ? 'Jordania' : 'Jordan', url },
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
              {es ? 'Guía de Mercado — Jordania' : 'Market Guide — Jordan'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {es
                ? 'Software de Seguridad Pública para Jordania'
                : 'Public Safety Software for Jordan'}
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl">
              {es
                ? 'PSD 12 gobernados · CDD respuesta unificada · Amman Safe City/GAM · Puerto Aqaba/ASEZA · Fronteras 6 cruces · Ley 24/2023/NITC/CERT.jo · Visión 2033'
                : 'PSD 12 governorates · CDD unified response · Amman Safe City/GAM · Aqaba Port/ASEZA · 6 border crossings · Law 24/2023/NITC/CERT.jo · Vision 2033'}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              {es ? "El panorama de seguridad pública de Jordania" : "Jordan's Public Safety Landscape"}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                {es
                  ? 'Jordania — con 10.8 millones de habitantes y 12 gobernados — opera un ecosistema de seguridad pública centralizado bajo la Dirección de Seguridad Pública (PSD), una fuerza policial civil bajo el Ministerio del Interior que cubre los 12 gobernados: Amán, Zarqa, Irbid, Balqa, Madaba, Karak, Tafilah, Ma\'an, Aqaba, Mafraq, Jerash y Ajloun. Unidades especializadas incluyen el Departamento de Investigación Criminal (CID), la Dirección de Lucha Antinarcóticos, la Policía de Tráfico y la Guardia Fronteriza. La Gendarmería (GADSA) opera bajo las Fuerzas Armadas Jordanas (JAF) para seguridad de infraestructura crítica y grandes eventos.'
                  : 'Jordan — with 10.8 million inhabitants across 12 governorates — operates a centralised public safety ecosystem under the Public Security Directorate (PSD), a civil police force under the Ministry of Interior covering all 12 governorates: Amman, Zarqa, Irbid, Balqa, Madaba, Karak, Tafilah, Ma\'an, Aqaba, Mafraq, Jerash, and Ajloun. Specialised units include the Criminal Investigation Department (CID), Anti-Narcotics Directorate, Traffic Police, and Border Guard Corps. The Gendarmerie (GADSA) operates under the Jordan Armed Forces (JAF) for critical infrastructure security and major events.'}
              </p>
              <p>
                {es
                  ? 'La Dirección de Defensa Civil (CDD) gestiona la respuesta ante incendios y emergencias médicas coordinada a través del número de emergencias unificado 911, con hospitales como el Centro Médico Rey Hussein, el Hospital de la Universidad de Jordania y el Hospital Príncipe Hamzah. El Centro Nacional para la Seguridad y Gestión de Crisis (NCSCM), bajo la Presidencia del Consejo de Ministros, coordina la respuesta nacional a desastres — inundaciones repentinas en wadis, terremotos (falla del Valle del Rift/Mar Muerto), ciberataques y emergencias de afluencia de refugiados.'
                  : 'The Civil Defence Directorate (CDD) manages fire and medical emergency response coordinated through unified 911 emergency number, with hospitals including King Hussein Medical Center, Jordan University Hospital, and Prince Hamzah Hospital. The National Centre for Security and Crisis Management (NCSCM), under the Council of Ministers Presidency, coordinates national disaster response — flash floods in wadis, earthquakes (Rift Valley/Dead Sea fault), cyberattacks, and refugee influx emergencies.'}
              </p>
              <p>
                {es
                  ? 'Jordania ocupa una posición estratégica como hub de conectividad regional con 6 cruces fronterizos activos — King Hussein Bridge/Allenby (Cisjordania/Israel), Sheikh Hussein/Jordan River Bridge (Israel norte), Wadi Araba/Yitzhak Rabin (Israel sur), Jaber/Nassib (Siria), Al-Karama/Al-Omari (Iraq) y Aqaba/Durra (Arabia Saudí). El Puerto de Aqaba es la única salida al mar de Jordania y maneja más de 26 millones de toneladas anuales bajo la supervisión de la Autoridad de la Zona Económica Especial de Aqaba (ASEZA). La Visión de Modernización Económica de Jordania (2025–2033) y el marco eGovernment del NITC impulsan la digitalización de los servicios de seguridad pública.'
                  : 'Jordan holds a strategic position as a regional connectivity hub with 6 active border crossings — King Hussein Bridge/Allenby (West Bank/Israel), Sheikh Hussein/Jordan River Bridge (northern Israel), Wadi Araba/Yitzhak Rabin (southern Israel), Jaber/Nassib (Syria), Al-Karama/Al-Omari (Iraq), and Aqaba/Durra (Saudi Arabia). Aqaba Port is Jordan\'s only sea outlet, handling 26M+ tonnes annually under the Aqaba Special Economic Zone Authority (ASEZA). The Jordan Economic Modernisation Vision (2025–2033) and NITC eGovernment framework drive digitalisation of public safety services.'}
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
                  title: es ? 'Dirección de Seguridad Pública (PSD)' : 'Public Security Directorate (PSD)',
                  body: es
                    ? '12 gobernados operativos; unidades especiales: CID, Guardia Fronteriza, Dirección Antinarcóticos, Policía de Tráfico, Unidades de Intervención Rápida (RIU), Policía Turística, Policía de Fronteras — bajo el Director General de Seguridad Pública, dependiente del Ministerio del Interior; coordinación con la Inteligencia General (GID/Mukhabarat) para amenazas terroristas y contrainteligencia.'
                    : '12 operational governorates; specialised units: CID, Border Guard Corps, Anti-Narcotics Directorate, Traffic Police, Rapid Intervention Units (RIU), Tourism Police, Border Police — under Director General of Public Security reporting to Ministry of Interior; coordination with General Intelligence Directorate (GID/Mukhabarat) for terrorist threats and counterintelligence.',
                },
                {
                  title: es ? 'CDD — Dirección de Defensa Civil' : 'CDD — Civil Defence Directorate',
                  body: es
                    ? 'Estaciones de bomberos y ambulancias en los 12 gobernados bajo el Ministerio del Interior; respuesta en infraestructura crítica: JPRC Zarqa (refinería), NEPCO/JEPCO subestaciones, AMM Aeropuerto Reina Alía, Puerto de Aqaba, KEMAPCO/JPC instalaciones industriales; coordinación SAR con la Aviación del Ejército Real Jordano (RJAF) para rescates en montaña/valle de wadis.'
                    : 'Fire and ambulance stations across 12 governorates under Ministry of Interior; critical infrastructure response: JPRC Zarqa refinery, NEPCO/JEPCO substations, Queen Alia International Airport (AMM), Aqaba Port, KEMAPCO/JPC industrial facilities; SAR coordination with Royal Jordanian Air Force (RJAF) for mountain/wadi rescue.',
                },
                {
                  title: es ? 'NCSCM — Centro Nacional de Seguridad y Gestión de Crisis' : 'NCSCM — National Centre for Security and Crisis Management',
                  body: es
                    ? 'Bajo la Presidencia del Consejo de Ministros; coordina la respuesta multi-agencial para inundaciones repentinas (wadis de Amán/Zarqa/Sur de Jordania), terremotos (falla del Mar Muerto), ciberataques, emergencias de refugiados (más de 1.3M sirios registrados/UNHCR) y contingencias de fronteras con Siria/Iraq; integración con el Sistema de Alerta Temprana del Departamento Meteorológico de Jordania (JMD).'
                    : 'Under Council of Ministers Presidency; coordinates multi-agency response for flash floods (Amman/Zarqa/Southern Jordan wadis), earthquakes (Dead Sea fault), cyberattacks, refugee emergencies (1.3M+ registered Syrians/UNHCR), and Syria/Iraq border contingencies; integration with Jordan Meteorological Department (JMD) Early Warning System.',
                },
                {
                  title: es ? 'Amman Safe City y red CCTV de la PSD' : 'Amman Safe City & PSD CCTV Network',
                  body: es
                    ? 'Proyecto Amman Safe City del Gran Municipio de Amán (GAM) con cámaras CCTV/ANPR de la PSD en carreteras principales (Autopistas 35/40/65, Autopista del Desierto, Anillo Vial de Amán), AMM, centros comerciales y pasos peatonales; coordinación con los Servicios de Transporte de Amán (ATS) y la plataforma de movilidad inteligente de Amán para la gestión de tráfico en tiempo real.'
                    : 'Greater Amman Municipality (GAM) Amman Safe City project with PSD CCTV/ANPR on major roads (Highways 35/40/65, Desert Highway, Amman Ring Road), AMM Airport, malls, and pedestrian zones; coordination with Amman Transport Services (ATS) and Amman smart mobility platform for real-time traffic management.',
                },
                {
                  title: es ? 'Puerto de Aqaba y Zona Económica Especial (ASEZA)' : 'Aqaba Port & Special Economic Zone (ASEZA)',
                  body: es
                    ? 'Puerto de Aqaba — única salida al mar de Jordania, 26M+ toneladas/año — con Aqaba Container Terminal (ACT), Aqaba Industrial Estate (AIE) y el corredor de exportación de fosfatos/potasa (APC/JPMC); seguridad bajo la PSD de Aqaba y JAF; vigilancia marítima en el Golfo de Aqaba con coordinación de la Armada Real Jordana (RJN) y Autoridad Portuaria de Aqaba (APA).'
                    : 'Aqaba Port — Jordan\'s only sea outlet, 26M+ tonnes/year — with Aqaba Container Terminal (ACT), Aqaba Industrial Estate (AIE), and phosphate/potash export corridor (APC/JPMC); security under PSD Aqaba branch and JAF; maritime surveillance in Gulf of Aqaba with Royal Jordanian Navy (RJN) and Aqaba Port Authority (APA) coordination.',
                },
                {
                  title: es ? 'Gestión de fronteras — 6 pasos activos' : 'Border Management — 6 Active Crossings',
                  body: es
                    ? 'Puente Rey Hussein/Allenby (Cisjordania, mayor volumen de pasajeros), Sheikh Hussein/Jordan River Bridge (norte), Wadi Araba/Yitzhak Rabin (sur), Jaber/Nassib (Siria, ruta de carga principal), Al-Karama/Al-Omari (Iraq) y Aqaba/Durra (Arabia Saudí) — gestionados por la Guardia Fronteriza de la PSD, el GID y los agentes de la Aduana Jordana (JCA) con integración biométrica e INTERPOL.'
                    : 'King Hussein Bridge/Allenby (West Bank, highest passenger volume), Sheikh Hussein/Jordan River Bridge (north), Wadi Araba/Yitzhak Rabin (south), Jaber/Nassib (Syria, main cargo route), Al-Karama/Al-Omari (Iraq), and Aqaba/Durra (Saudi Arabia) — managed by PSD Border Guard Corps, GID, and Jordan Customs Authority (JCA) with biometric integration and INTERPOL.',
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
              {es ? 'Capacidades de la plataforma KabatOne para Jordania' : 'KabatOne Platform Capabilities for Jordan'}
            </h2>
            <div className="space-y-8">
              {[
                {
                  heading: es ? 'CAD unificado para PSD 12 gobernados + CDD' : 'Unified CAD for PSD 12 Governorates + CDD',
                  text: es
                    ? 'Despacho integrado con gestión de recursos en tiempo real para las 12 divisiones regionales de la PSD, estaciones de la CDD, unidades de ambulancia del Ministerio de Salud y unidades de la Gendarmería (GADSA) — sobre el mismo mapa operativo con integración del número unificado 911, priorización por IA y seguimiento de recursos hasta nivel de agente individual, con panel de desbordamiento al NCSCM para emergencias nacionales y coordinación con el GID para amenazas de alta prioridad.'
                    : 'Integrated dispatch with real-time resource management for PSD\'s 12 regional divisions, CDD stations, Ministry of Health ambulance units, and Gendarmerie (GADSA) units — on the same operational map with unified 911 integration, AI-driven incident prioritisation, and resource tracking to individual officer level, with NCSCM overflow dashboard for national emergencies and GID coordination for high-priority threats.',
                },
                {
                  heading: es ? 'Gestión de vídeo Amman Safe City y cámaras PSD' : 'Amman Safe City Video Management & PSD Cameras',
                  text: es
                    ? 'KabatOne gestiona las cámaras CCTV/ANPR de la PSD y el GAM Amman Safe City en los 12 gobernados, integra la vigilancia del AMM y el Puerto de Aqaba/ASEZA, conecta el video de las instalaciones de la JPRC/NEPCO, y proporciona análisis de video con IA — detección de anomalías, conteo de personas, análisis de comportamiento — con latencia de alerta inferior a 2 segundos y compartición de transmisiones en tiempo real con el NCSCM y el GID.'
                    : 'KabatOne manages PSD and GAM Amman Safe City CCTV/ANPR across 12 governorates, integrates AMM and Aqaba Port/ASEZA surveillance, connects JPRC/NEPCO facility video, and provides AI video analytics — anomaly detection, crowd counting, behavioural analysis — with sub-2-second alert latency and real-time stream sharing with NCSCM and GID.',
                },
                {
                  heading: es ? 'Gestión de fronteras y cruces: 6 pasos activos' : 'Border & Crossing Management: 6 Active Crossings',
                  text: es
                    ? 'KabatOne proporciona gestión de incidentes en tiempo real en los 6 cruces fronterizos activos de Jordania — integración biométrica con los sistemas de la Guardia Fronteriza de la PSD, ANPR para vehículos de carga/pasajeros, coordinación de flujo de refugiados (UNHCR/UNHCR SynergyApp), alertas de listas de vigilancia del GID, y paneles de gestión de crisis del NCSCM con acceso de las Fuerzas Armadas Jordanas (JAF).'
                    : 'KabatOne provides real-time incident management at all 6 active Jordan border crossings — biometric integration with PSD Border Guard systems, ANPR for freight/passenger vehicles, refugee flow coordination (UNHCR/SynergyApp), GID watchlist alerts, and NCSCM crisis management dashboards with Jordan Armed Forces (JAF) access.',
                },
                {
                  heading: es ? 'Cumplimiento Ley 24/2023/NITC y CERT.jo' : 'Law 24/2023/NITC & CERT.jo Cybersecurity Compliance',
                  text: es
                    ? 'KabatOne se alinea con la Ley de Protección de Datos Personales de Jordania (Ley 24/2023) supervisada por el MODEE — cifrado, gestión del consentimiento, derechos de acceso de sujetos de datos y notificación de brechas; el marco de ciberseguridad del NITC para sistemas gubernamentales; los estándares de respuesta a incidentes del CERT.jo; y los requisitos del Centro de Gobierno Electrónico de Jordania (e-Government Gateway) para sistemas integrados del sector público.'
                    : 'KabatOne aligns with Jordan Personal Data Protection Law (Law 24/2023) supervised by MODEE — encryption, consent management, data subject access rights, and breach notification; NITC cybersecurity framework for government systems; CERT.jo incident response standards; and Jordan e-Government Gateway requirements for integrated public sector systems.',
                },
                {
                  heading: es ? 'Adquisición Reglamento 32/1994 y Visión Económica 2033' : 'Regulation 32/1994 Procurement & Economic Modernisation Vision 2033',
                  text: es
                    ? 'KabatOne admite licitaciones bajo el Reglamento de Adquisiciones del Gobierno (Reglamento 32/1994 y modificaciones), el Sistema de Contratación Electrónica del Gobierno de Jordania (e-Procurement/ISTISHARA), los marcos ASEZA para proyectos en la Zona Económica de Aqaba, y los mecanismos de cofinanciamiento de la Cuenta de Desafío del Milenio (MCC)/USAID para modernización de infraestructura de seguridad.'
                    : 'KabatOne supports tenders under Government Procurement Regulation (Regulation 32/1994 and amendments), Jordan Government e-Procurement system (ISTISHARA), ASEZA frameworks for Aqaba Economic Zone projects, and Millennium Challenge Corporation (MCC)/USAID co-financing mechanisms for security infrastructure modernisation.',
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
              {es ? 'Marco regulatorio y de adquisiciones en Jordania' : 'Regulatory & Procurement Framework in Jordan'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  label: es ? 'Protección de datos' : 'Data Protection',
                  items: [
                    es ? 'Ley 24/2023 — Ley de Protección de Datos Personales de Jordania' : 'Law 24/2023 — Jordan Personal Data Protection Law',
                    es ? 'MODEE — Ministerio de Economía Digital y Emprendimiento (supervisor)' : 'MODEE — Ministry of Digital Economy and Entrepreneurship (supervisor)',
                    es ? 'Notificación de brechas · Derechos de sujetos de datos' : 'Breach notification · Data subject rights',
                    es ? 'Ley de Transacciones Electrónicas 15/2015 (Marco Digital)' : 'Electronic Transactions Law 15/2015 (Digital Framework)',
                  ],
                },
                {
                  label: es ? 'Ciberseguridad' : 'Cybersecurity',
                  items: [
                    es ? 'CERT.jo — Equipo de Respuesta a Emergencias Informáticas de Jordania' : 'CERT.jo — Jordan Computer Emergency Response Team',
                    es ? 'NITC — Marco de Ciberseguridad del Centro Nacional de TI' : 'NITC — National IT Centre Cybersecurity Framework',
                    es ? 'GID — Directrices de Ciberseguridad de la Inteligencia General' : 'GID — General Intelligence Directorate Cybersecurity Guidelines',
                    es ? 'Protección CI: JPRC/NEPCO/AMM/Puerto de Aqaba' : 'CI protection: JPRC/NEPCO/AMM/Aqaba Port',
                  ],
                },
                {
                  label: es ? 'Adquisiciones' : 'Procurement',
                  items: [
                    es ? 'Reglamento 32/1994 — Licitaciones y Adquisiciones del Gobierno' : 'Regulation 32/1994 — Government Tenders & Procurement',
                    es ? 'ISTISHARA — Sistema de Contratación Electrónica del Gobierno' : 'ISTISHARA — Jordan Government e-Procurement System',
                    es ? 'ASEZA — Reglas de adquisición Zona Económica de Aqaba' : 'ASEZA — Aqaba Economic Zone procurement rules',
                    es ? 'MCC/USAID — Cofinanciamiento infraestructura de seguridad' : 'MCC/USAID — Security infrastructure co-financing',
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
              ? '¿Listo para modernizar la seguridad pública en Jordania?'
              : 'Ready to modernise public safety in Jordan?'
          }
          subtitle={
            es
              ? 'Descubra cómo KabatOne unifica la PSD, la CDD y el NCSCM de Jordania en una plataforma operativa conforme a la Ley 24/2023/NITC y alineada con la Visión de Modernización Económica 2033.'
              : 'Discover how KabatOne unifies Jordan PSD, CDD, and NCSCM into one operational platform compliant with Law 24/2023/NITC and aligned with Jordan Economic Modernisation Vision 2033.'
          }
        />
      </main>
      <Footer es={es} />
    </>
  )
}
