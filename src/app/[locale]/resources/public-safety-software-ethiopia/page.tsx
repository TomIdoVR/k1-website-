import { generatePageMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareEthiopia', locale)
}

const faqs = [
  {
    question: 'How does KabatOne integrate the Ethiopian Federal Police Commission (EFPC) across all regions and city administrations?',
    answer:
      'KabatOne unifies Ethiopian Federal Police Commission (EFPC) operations across the 12 regional states and 2 city administrations — Addis Ababa and Dire Dawa — alongside regional police commissions (Oromia, Amhara, Tigray, SNNP, Somali, Benishangul-Gumuz, Afar, Harari, Gambela, Sidama, South West, Central Ethiopia) into a single operational map with shared CAD, CCTV integration, and coordination with the National Intelligence and Security Service (NISS).',
  },
  {
    question: 'How does the platform support Ethiopia\'s Addis Ababa Safe City programme?',
    answer:
      'KabatOne provides centralised video management for Addis Ababa Safe City camera networks, integrating CCTV/ANPR across the ring roads, Bole International Airport (ADD), major intersections and Addis Ababa Light Rail Transit (LRT) stations — with AI analytics for crowd monitoring at Meskel Square, Merkato market, and major protest-prone corridors, plus real-time sharing with EFPC command and city administration.',
  },
  {
    question: 'How does KabatOne support Ethiopia\'s National Disaster Risk Management Commission (NDRMC)?',
    answer:
      'KabatOne integrates with the National Disaster Risk Management Commission (NDRMC) under the Ministry of Peace for multi-hazard coordination — drought/famine alerts (Tigray/Amhara/Afar/Somali regions), flash floods (Blue Nile/Awash basin), locust swarms, and civil unrest mass displacement. The platform provides situational dashboards shared with IGAD Conflict Early Warning and Response Mechanism (CEWARN) and UN OCHA Ethiopia.',
  },
  {
    question: 'Does KabatOne support Ethiopian border security and cross-border coordination?',
    answer:
      'Yes. KabatOne integrates Ethiopian Immigration and Nationality Service and Federal Police border operations at major crossings — Moyale (Kenya), Tog Wajale/Dewele (Somalia), Metema (Sudan), Humera (Sudan/Eritrea corridor), and Galafi (Djibouti) — with biometric integration, ANPR, and real-time alert sharing with the NISS and regional security commands for cross-border insurgency monitoring (OLA/TPLF/ASM).',
  },
  {
    question: 'How does KabatOne comply with Ethiopia\'s data protection and cybersecurity requirements?',
    answer:
      'KabatOne aligns with Ethiopia\'s Computer Crime Proclamation (No. 958/2016), the Cybersecurity Strategy of 2022 coordinated by the Information Network Security Administration (INSA), and the Personal Data Protection Proclamation (No. 1321/2024). The platform supports air-gapped deployment for NISS classified networks and implements IHL-compliant data handling for UN/NGO coordination during armed conflict phases.',
  },
  {
    question: 'How does KabatOne handle Ethiopia government procurement?',
    answer:
      'KabatOne supports procurement under the Ethiopian Public Procurement and Property Administration Agency (PPAA) framework (Proclamation No. 649/2009 and amendments), the Public Financial Management Proclamation, and development financing from World Bank, AfDB (African Development Bank), EU, USAID, and bilateral donors (China/Turkey/Israel) for security sector modernisation.',
  },
  {
    question: 'How does KabatOne align with Ethiopia\'s Digital Ethiopia 2025 strategy?',
    answer:
      'KabatOne aligns with Digital Ethiopia 2025 and the 10-Year Perspective Development Plan (2021–2030) by providing AI/IoT-integrated public safety platforms that support Ministry of Peace (EFPC/NDRMC) and Addis Ababa City Administration digitalisation goals, INSA cybersecurity frameworks, and IGAD/AU Silence the Guns continental peace architecture.',
  },
]

const faqsEs = [
  {
    question: '¿Cómo integra KabatOne la Comisión Federal de Policía de Etiopía (EFPC) en todas las regiones y administraciones de ciudades?',
    answer:
      'KabatOne unifica las operaciones de la Comisión Federal de Policía de Etiopía (EFPC) en los 12 estados regionales y 2 administraciones de ciudades — Adís Abeba y Dire Dawa — junto con las comisiones de policía regionales (Oromia, Amhara, Tigray, SNNP, Somalí, Benishangul-Gumuz, Afar, Harari, Gambela, Sidama, Suroeste, Etiopía Central) en un único mapa operativo con CAD compartido, integración CCTV y coordinación con el Servicio Nacional de Inteligencia y Seguridad (NISS).',
  },
  {
    question: '¿Cómo admite la plataforma el programa Addis Abeba Safe City de Etiopía?',
    answer:
      'KabatOne proporciona gestión de video centralizada para las redes de cámaras del Addis Abeba Safe City, integrando CCTV/ANPR en los anillos viales, el Aeropuerto Internacional Bole (ADD), las principales intersecciones y las estaciones del Tren Ligero de Adís Abeba (LRT) — con análisis IA para monitoreo de multitudes en la Plaza Meskel, el mercado Merkato y los principales corredores con historial de protestas, más compartición en tiempo real con el comando de la EFPC y la administración de la ciudad.',
  },
  {
    question: '¿Cómo apoya KabatOne la Comisión Nacional de Gestión del Riesgo de Desastres de Etiopía (NDRMC)?',
    answer:
      'KabatOne se integra con la Comisión Nacional de Gestión del Riesgo de Desastres (NDRMC) bajo el Ministerio de Paz para la coordinación de múltiples amenazas — alertas de sequía/hambruna (regiones de Tigray/Amhara/Afar/Somalí), inundaciones repentinas (cuenca del Nilo Azul/Awash), plagas de langosta y desplazamiento masivo por conflictos civiles — con paneles de situación compartidos con el CEWARN del IGAD y la OCHA de la ONU en Etiopía.',
  },
  {
    question: '¿Admite KabatOne la seguridad fronteriza y la coordinación transfronteriza de Etiopía?',
    answer:
      'Sí. KabatOne integra el Servicio de Inmigración y Nacionalidad de Etiopía y las operaciones de la Policía Federal en los principales pasos fronterizos — Moyale (Kenia), Tog Wajale/Dewele (Somalia), Metema (Sudán), Humera (corredor Sudán/Eritrea) y Galafi (Yibuti) — con integración biométrica, ANPR y compartición de alertas en tiempo real con el NISS y los comandos de seguridad regionales.',
  },
  {
    question: '¿Cómo cumple KabatOne con los requisitos de protección de datos y ciberseguridad de Etiopía?',
    answer:
      'KabatOne se alinea con la Proclamación de Delitos Informáticos de Etiopía (N.º 958/2016), la Estrategia de Ciberseguridad de 2022 coordinada por la Administración de Seguridad de Redes de Información (INSA) y la Proclamación de Protección de Datos Personales (N.º 1321/2024). La plataforma admite implementación en red aislada para las redes clasificadas del NISS e implementa gestión de datos conforme al DIH para la coordinación con ONU/ONG durante las fases de conflicto armado.',
  },
  {
    question: '¿Cómo gestiona KabatOne las adquisiciones del gobierno etíope?',
    answer:
      'KabatOne admite adquisiciones bajo el marco de la Agencia de Administración de Adquisiciones y Propiedades Públicas de Etiopía (PPAA, Proclamación N.º 649/2009 y modificaciones), la Proclamación de Gestión Financiera Pública y el financiamiento de desarrollo del Banco Mundial, el BAD (Banco Africano de Desarrollo), la UE, USAID y donantes bilaterales (China/Turquía/Israel) para la modernización del sector de seguridad.',
  },
  {
    question: '¿Cómo se alinea KabatOne con la estrategia Digital Etiopía 2025?',
    answer:
      'KabatOne se alinea con Digital Etiopía 2025 y el Plan de Desarrollo de Perspectiva de 10 Años (2021–2030), proporcionando plataformas de seguridad pública integradas con IA/IoT que apoyan los objetivos de digitalización del Ministerio de Paz (EFPC/NDRMC) y la Administración de la Ciudad de Adís Abeba, los marcos de ciberseguridad del INSA y la arquitectura continental de paz IGAD/UA "Silenciar las Armas".',
  },
]

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const headline = es
    ? 'Software de Seguridad Pública para Etiopía: EFPC/NDRMC, Addis Abeba Safe City, INSA/Proc. 1321/2024 y Digital Etiopía 2025'
    : 'Public Safety Software for Ethiopia: EFPC/NDRMC, Addis Ababa Safe City, INSA/Proc. 1321/2024 & Digital Ethiopia 2025'
  const description = es
    ? 'Plataforma unificada para la EFPC y el NDRMC de Etiopía — despacho CAD integrado en 12 estados regionales, Addis Abeba Safe City/LRT, fronteras Moyale/Tog Wajale/Galafi, IGAD/CEWARN gestión de crisis, Proclamación 1321/2024/INSA y adquisición PPAA/Banco Mundial.'
    : 'Unified platform for Ethiopia EFPC and NDRMC — integrated CAD dispatch across 12 regional states, Addis Ababa Safe City/LRT, Moyale/Tog Wajale/Galafi border crossings, IGAD/CEWARN crisis management, Proclamation 1321/2024/INSA compliance, and PPAA/World Bank procurement.'
  const url = es
    ? 'https://kabatone.com/es/resources/public-safety-software-ethiopia/'
    : 'https://kabatone.com/resources/public-safety-software-ethiopia/'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    { name: es ? 'Etiopía' : 'Ethiopia', url },
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
              {es ? 'Guía de Mercado — Etiopía' : 'Market Guide — Ethiopia'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {es
                ? 'Software de Seguridad Pública para Etiopía'
                : 'Public Safety Software for Ethiopia'}
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl">
              {es
                ? 'EFPC 12 estados regionales · Addis Abeba Safe City/LRT · NDRMC gestión de desastres · Fronteras 5 países · IGAD/CEWARN · INSA/Proc. 1321/2024 · Digital Etiopía 2025'
                : 'EFPC 12 regional states · Addis Ababa Safe City/LRT · NDRMC disaster management · 5-country borders · IGAD/CEWARN · INSA/Proc. 1321/2024 · Digital Ethiopia 2025'}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              {es ? "El panorama de seguridad pública de Etiopía" : "Ethiopia's Public Safety Landscape"}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                {es
                  ? 'Etiopía — el segundo país más poblado de África con más de 126 millones de habitantes — opera un sistema de seguridad pública federalizado con la Comisión Federal de Policía de Etiopía (EFPC) bajo el Ministerio de Paz coordinando la seguridad a nivel federal y las comisiones de policía de los 12 estados regionales: Oromia, Amhara, Tigray, SNNP (Pueblos del Sur, Naciones y Nacionalidades), Somalí, Benishangul-Gumuz, Afar, Harari, Gambela, Sidama, Etiopía Suroeste y Etiopía Central. El Servicio Nacional de Inteligencia y Seguridad (NISS) coordina la contrainteligencia y el monitoreo de amenazas transfronterizas.'
                  : 'Ethiopia — Africa\'s second most populous country with 126M+ inhabitants — operates a federalised public safety system with the Ethiopian Federal Police Commission (EFPC) under the Ministry of Peace coordinating federal-level security and the police commissions of 12 regional states: Oromia, Amhara, Tigray, SNNP (Southern Nations, Nationalities and Peoples), Somali, Benishangul-Gumuz, Afar, Harari, Gambela, Sidama, South West Ethiopia, and Central Ethiopia. The National Intelligence and Security Service (NISS) coordinates counterintelligence and cross-border threat monitoring.'}
              </p>
              <p>
                {es
                  ? 'Adís Abeba — la capital política de África y sede de la Unión Africana (UA) — tiene más de 4.5 millones de habitantes y alberga el programa Safe City más ambicioso del continente, con redes CCTV integradas con el Tren Ligero de Adís Abeba (primera línea de metro de África subsahariana), el Aeropuerto Internacional Bole (ADD) y el corredor de la Autopista de Acceso Este. La Comisión Nacional de Gestión del Riesgo de Desastres (NDRMC) gestiona la respuesta a múltiples amenazas naturales: sequías en el Cuerno de África, inundaciones del Nilo Azul/Awash, erupciones volcánicas en el Valle del Rift y la plaga de langosta del desierto de 2020.'
                  : 'Addis Ababa — Africa\'s political capital and seat of the African Union (AU) — has 4.5M+ inhabitants and hosts the continent\'s most ambitious Safe City programme, with CCTV networks integrated with the Addis Ababa Light Rail Transit (LRT, first metro in sub-Saharan Africa), Bole International Airport (ADD), and Eastern Access Highway corridor. The National Disaster Risk Management Commission (NDRMC) manages multi-hazard response: Horn of Africa droughts, Blue Nile/Awash floods, Rift Valley volcanic activity, and 2020 Desert Locust outbreak.'}
              </p>
              <p>
                {es
                  ? 'Etiopía ocupa una posición geoestratégica única como hub del Cuerno de África, con fronteras terrestres con Somalia, Kenia, Sudán del Sur, Sudán, Eritrea y Yibuti. La Autoridad Intergubernamental para el Desarrollo (IGAD) — con sede en Yibuti — tiene a Etiopía como su miembro más influyente, con el Mecanismo de Alerta Temprana y Respuesta a Conflictos del IGAD (CEWARN) coordinando la respuesta transfronteriza. La estrategia Digital Etiopía 2025 y el Plan de Desarrollo de Perspectiva de 10 Años (2021–2030) impulsan la modernización de los servicios públicos, incluyendo la seguridad, la gestión de emergencias y la infraestructura digital.'
                  : 'Ethiopia holds a unique geostrategic position as a Horn of Africa hub, with land borders sharing with Somalia, Kenya, South Sudan, Sudan, Eritrea, and Djibouti. The Intergovernmental Authority on Development (IGAD) — headquartered in Djibouti — has Ethiopia as its most influential member, with IGAD\'s Conflict Early Warning and Response Mechanism (CEWARN) coordinating cross-border response. Digital Ethiopia 2025 strategy and the 10-Year Perspective Development Plan (2021–2030) drive modernisation of public services including security, emergency management, and digital infrastructure.'}
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
                  title: es ? 'EFPC — Comisión Federal de Policía de Etiopía' : 'EFPC — Ethiopian Federal Police Commission',
                  body: es
                    ? 'Bajo el Ministerio de Paz; coordinación de las comisiones de policía de los 12 estados regionales; unidades especiales: Fuerza Especial Federal (FSF), Unidades de Control de Disturbios (CRU), Policía de Fronteras, Unidades de Antiterrorismo — con el NISS para amenazas de seguridad nacional (OLA/TPLF/ASM/ONLF); la EFPC coordina directamente la seguridad en las 2 administraciones de ciudades (Adís Abeba/Dire Dawa).'
                    : 'Under Ministry of Peace; coordination of 12 regional state police commissions; specialised units: Federal Special Force (FSF), Civil Disturbance Control Units (CRU), Border Police, Counter-Terrorism Units — with NISS for national security threats (OLA/TPLF/ASM/ONLF); EFPC directly coordinates security in 2 city administrations (Addis Ababa/Dire Dawa).',
                },
                {
                  title: es ? 'Addis Abeba Safe City y Administración de la Ciudad' : 'Addis Ababa Safe City & City Administration',
                  body: es
                    ? 'Programa Safe City de la Administración de la Ciudad de Adís Abeba con cámaras CCTV/ANPR en los anillos viales, la Autopista de Acceso Este/Oeste, 3 líneas del LRT (Línea E-W y N-S), estaciones del Aeropuerto Bole (ADD) y el centro histórico/embajadas; integración con la Autoridad de Tráfico y Transporte de Adís Abeba (AACRA) para la gestión de tráfico inteligente y respuesta a incidentes.'
                    : 'Addis Ababa City Administration Safe City programme with CCTV/ANPR cameras on ring roads, Eastern/Western Access Highway, 3 LRT lines (E-W and N-S line), Bole Airport (ADD) stations, and historic centre/embassies; integration with Addis Ababa City Roads Authority (AACRA) for smart traffic management and incident response.',
                },
                {
                  title: es ? 'NDRMC — Comisión Nacional de Gestión del Riesgo de Desastres' : 'NDRMC — National Disaster Risk Management Commission',
                  body: es
                    ? 'Bajo el Ministerio de Paz; coordina la respuesta multi-hazard a nivel federal y regional para sequías (Tigray/Amhara/Afar/Somalí), inundaciones del Nilo Azul/Awash, terremotos del Valle del Rift/Dire Dawa, crisis de refugiados (7M+ desplazados internos, el mayor número de África), actividad volcánica del Erta Ale; integración con IGAD/CEWARN, WFP/OCHA y el Comité de Emergencias Humanitarias de la UA.'
                    : 'Under Ministry of Peace; coordinates multi-hazard federal and regional response for droughts (Tigray/Amhara/Afar/Somali), Blue Nile/Awash floods, Rift Valley/Dire Dawa earthquakes, refugee crises (7M+ IDPs, Africa\'s largest), Erta Ale volcanic activity; integration with IGAD/CEWARN, WFP/OCHA, and AU Humanitarian Emergency Committee.',
                },
                {
                  title: es ? 'INSA — Administración de Seguridad de Redes de Información' : 'INSA — Information Network Security Administration',
                  body: es
                    ? 'Autoridad principal de ciberseguridad bajo el Ministerio de Ciencia e Innovación; responsable de proteger la infraestructura digital crítica del gobierno etíope — ETHIO TELECOM (operador nacional), Ethiopian Airlines (séptima aerolínea del mundo por ingresos), Grand Ethiopian Renaissance Dam (GERD), Comisión de Energía Eléctrica de Etiopía (EEP/EEU) — con el CERT-ET y los marcos de gestión de incidentes cibernéticos.'
                    : 'Primary cybersecurity authority under Ministry of Science and Innovation; responsible for protecting Ethiopia\'s critical government digital infrastructure — Ethio Telecom (national operator), Ethiopian Airlines (world\'s 7th airline by revenue), Grand Ethiopian Renaissance Dam (GERD), Ethiopian Electric Power/Utility (EEP/EEU) — with CERT-ET and cybersecurity incident management frameworks.',
                },
                {
                  title: es ? 'Fronteras con 6 países y seguridad IGAD' : 'Borders with 6 Countries & IGAD Security',
                  body: es
                    ? 'Etiopía comparte fronteras con Somalia (Moyale/Tog Wajale/Dewele), Kenia (Moyale), Sudán del Sur (Gambela/Akobo), Sudán (Metema/Humera), Eritrea (actualmente cerrada/no oficial) y Yibuti (Galafi/Dewele) — con ANPR, biometría y cámaras CCTV en los pasos principales; coordinación IGAD/CEWARN para el monitoreo de la Zona Fronteriza Ogaden/Somalí y la amenaza Al-Shabaab/OLA transfronteriza.'
                    : 'Ethiopia shares borders with Somalia (Moyale/Tog Wajale/Dewele), Kenya (Moyale), South Sudan (Gambela/Akobo), Sudan (Metema/Humera), Eritrea (currently closed/informal), and Djibouti (Galafi/Dewele) — with ANPR, biometrics, and CCTV at major crossings; IGAD/CEWARN coordination for Ogaden/Somali borderzone and cross-border Al-Shabaab/OLA threat monitoring.',
                },
                {
                  title: es ? 'Infraestructura crítica: GERD/Ethiopian Airlines/Ethio Telecom' : 'Critical Infrastructure: GERD/Ethiopian Airlines/Ethio Telecom',
                  body: es
                    ? 'Grand Ethiopian Renaissance Dam (GERD) — la mayor presa de África, 6,450 MW en el Nilo Azul/Benishangul-Gumuz, seguridad bajo el ANE y la EFPC; Ethiopian Airlines hub en Bole (ADD, 50M+ pasajeros/año, la mayor aerolínea de África); Ethio Telecom (infraestructura de telecomunicaciones nacional, 60M+ abonados); refinería Dire Dawa y corredor ferroviario Addis Abeba–Djibouti (ADL) bajo seguridad coordinada.'
                    : 'Grand Ethiopian Renaissance Dam (GERD) — Africa\'s largest dam, 6,450 MW on Blue Nile/Benishangul-Gumuz, security under ANE and EFPC; Ethiopian Airlines hub at Bole (ADD, 50M+ passengers/year, Africa\'s largest airline); Ethio Telecom (national telecom infrastructure, 60M+ subscribers); Dire Dawa refinery and Addis Ababa–Djibouti Rail corridor (ADL) under coordinated security.',
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
              {es ? 'Capacidades de la plataforma KabatOne para Etiopía' : 'KabatOne Platform Capabilities for Ethiopia'}
            </h2>
            <div className="space-y-8">
              {[
                {
                  heading: es ? 'CAD unificado para EFPC federal + 12 estados regionales' : 'Unified CAD for Federal EFPC + 12 Regional States',
                  text: es
                    ? 'Despacho integrado con gestión de recursos en tiempo real para la EFPC federal, las 12 comisiones de policía estatales, la Fuerza Especial Federal (FSF), unidades de bomberos del Ministerio de Paz y ambulancias del Ministerio de Salud — sobre el mismo mapa operativo con integración del número de emergencia 907/911, priorización por IA y panel de desbordamiento al NDRMC para emergencias nacionales y al NISS para amenazas de seguridad de alto nivel.'
                    : 'Integrated dispatch with real-time resource management for federal EFPC, 12 state police commissions, Federal Special Force (FSF), Ministry of Peace fire units, and Ministry of Health ambulances — on the same operational map with 907/911 emergency integration, AI-driven prioritisation, and NDRMC overflow dashboard for national emergencies and NISS for high-level security threats.',
                },
                {
                  heading: es ? 'Gestión de vídeo Addis Abeba Safe City y LRT' : 'Addis Ababa Safe City Video Management & LRT',
                  text: es
                    ? 'KabatOne gestiona las cámaras CCTV/ANPR del Addis Abeba Safe City en los 10 sub-ciudades (subcities), integra la vigilancia del ADD y las estaciones del LRT, conecta el video del Meskel Square y el Merkato, y proporciona análisis de video con IA — detección de aglomeraciones, análisis de comportamiento de multitudes, identificación de vehículos — con latencia de alerta inferior a 2 segundos y compartición de transmisiones con la EFPC y la Administración de la Ciudad.'
                    : 'KabatOne manages Addis Ababa Safe City CCTV/ANPR cameras across 10 sub-cities, integrates ADD Airport and LRT station surveillance, connects Meskel Square and Merkato video, and provides AI video analytics — crowd density detection, mass gathering behaviour analysis, vehicle identification — with sub-2-second alert latency and stream sharing with EFPC and City Administration.',
                },
                {
                  heading: es ? 'Coordinación NDRMC y conciencia situacional multi-amenaza' : 'NDRMC Coordination & Multi-Hazard Situational Awareness',
                  text: es
                    ? 'KabatOne proporciona paneles de situación multi-amenaza en tiempo real para el NDRMC — integración de datos meteorológicos del Servicio Meteorológico Nacional (NMS) para sequías/inundaciones, alertas sísmicas del Instituto Etíope de Geofísica (IGSSA), datos de movimiento de refugiados del ACNUR/IOM, y feeds del CEWARN del IGAD para incidentes transfronterizos — con escalada de respuesta a la UA y UN OCHA para crisis humanitarias mayores.'
                    : 'KabatOne provides real-time multi-hazard situational dashboards for NDRMC — National Meteorological Service (NMS) weather data for droughts/floods, Ethiopian Institute of Geophysics (IGSSA) seismic alerts, UNHCR/IOM refugee movement data, and IGAD CEWARN feeds for cross-border incidents — with AU and UN OCHA escalation for major humanitarian crises.',
                },
                {
                  heading: es ? 'Seguridad fronteriza y monitoreo de amenazas IGAD' : 'Border Security & IGAD Threat Monitoring',
                  text: es
                    ? 'KabatOne integra los puestos fronterizos de la EFPC/Inmigración en los 6 países limítrofes con CCTV, ANPR, biometría y — en zonas de alta amenaza (frontera Somalí, Gambela/Sudán del Sur, Tigray/Eritrea) — sensores radar y UAVs; proporciona alertas en tiempo real sobre movimientos de Al-Shabaab/OLA/TPLF, y el panel IGAD/CEWARN para coordinación multinacional de respuesta en el Cuerno de África.'
                    : 'KabatOne integrates EFPC/Immigration border posts across 6 bordering countries with CCTV, ANPR, biometrics, and — in high-threat zones (Somali border, Gambela/South Sudan, Tigray/Eritrea) — radar sensors and UAVs; provides real-time Al-Shabaab/OLA/TPLF movement alerts, and the IGAD/CEWARN dashboard for multinational Horn of Africa response coordination.',
                },
                {
                  heading: es ? 'Cumplimiento INSA/Proc. 1321/2024 y adquisición PPAA' : 'INSA/Proc. 1321/2024 Compliance & PPAA Procurement',
                  text: es
                    ? 'KabatOne se alinea con la Proclamación de Protección de Datos Personales de Etiopía (N.º 1321/2024), la Estrategia de Ciberseguridad INSA de 2022, la Proclamación de Delitos Informáticos (N.º 958/2016) y el CERT-ET; admite adquisición bajo el marco PPAA (Proc. N.º 649/2009), el financiamiento de desarrollo del Banco Mundial/BAD/UE/USAID/donantes bilaterales, y los marcos de procurement de la UA para proyectos continentales.'
                    : 'KabatOne aligns with Ethiopia Personal Data Protection Proclamation (No. 1321/2024), INSA Cybersecurity Strategy 2022, Computer Crime Proclamation (No. 958/2016), and CERT-ET; supports procurement under PPAA framework (Proc. No. 649/2009), World Bank/AfDB/EU/USAID/bilateral donor development financing, and AU procurement frameworks for continental projects.',
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
              {es ? 'Marco regulatorio y de adquisiciones en Etiopía' : 'Regulatory & Procurement Framework in Ethiopia'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  label: es ? 'Protección de datos' : 'Data Protection',
                  items: [
                    es ? 'Proclamación N.º 1321/2024 — Protección de Datos Personales' : 'Proclamation No. 1321/2024 — Personal Data Protection',
                    es ? 'Proclamación N.º 958/2016 — Delitos Informáticos' : 'Proclamation No. 958/2016 — Computer Crime',
                    es ? 'INSA — Administración de Seguridad de Redes de Información' : 'INSA — Information Network Security Administration',
                    es ? 'CERT-ET — Marco de respuesta a incidentes cibernéticos' : 'CERT-ET — Cybersecurity incident response framework',
                  ],
                },
                {
                  label: es ? 'Ciberseguridad' : 'Cybersecurity',
                  items: [
                    es ? 'Estrategia Nacional de Ciberseguridad INSA 2022' : 'INSA National Cybersecurity Strategy 2022',
                    es ? 'Protección CI: GERD/Ethiopian Airlines/Ethio Telecom/EEP' : 'CI protection: GERD/Ethiopian Airlines/Ethio Telecom/EEP',
                    es ? 'Despliegue en red aislada para redes NISS clasificadas' : 'Air-gapped deployment for NISS classified networks',
                    es ? 'DIH — Gestión de datos para coordinación ONU/ONG en conflictos' : 'IHL — Data handling for UN/NGO coordination in conflicts',
                  ],
                },
                {
                  label: es ? 'Adquisiciones y financiamiento' : 'Procurement & Financing',
                  items: [
                    es ? 'PPAA — Proc. N.º 649/2009 Adquisición Pública de Etiopía' : 'PPAA — Proc. No. 649/2009 Ethiopia Public Procurement',
                    es ? 'Banco Mundial/BAD — Financiamiento sector seguridad' : 'World Bank/AfDB — Security sector financing',
                    es ? 'UE/USAID/donantes bilaterales — Modernización PSP' : 'EU/USAID/bilateral donors — PSP modernisation',
                    es ? 'UA — Marcos de adquisición para proyectos continentales' : 'AU — Procurement frameworks for continental projects',
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
              ? '¿Listo para modernizar la seguridad pública en Etiopía?'
              : 'Ready to modernise public safety in Ethiopia?'
          }
          subtitle={
            es
              ? 'Descubra cómo KabatOne unifica la EFPC, el NDRMC y la Administración de Addis Abeba en una plataforma operativa conforme a INSA/Proc. 1321/2024, diseñada para el Cuerno de África y alineada con Digital Etiopía 2025.'
              : 'Discover how KabatOne unifies Ethiopia EFPC, NDRMC, and Addis Ababa City Administration into one operational platform compliant with INSA/Proc. 1321/2024, designed for the Horn of Africa and aligned with Digital Ethiopia 2025.'
          }
        />
      </main>
      <Footer es={es} />
    </>
  )
}
