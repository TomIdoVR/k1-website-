import { generatePageMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareIraq', locale)
}

const faqs = [
  {
    question: 'How does KabatOne integrate the Iraqi Federal Police (IFP) and Ministry of Interior across 18 governorates?',
    answer:
      'KabatOne unifies Iraqi Federal Police (IFP) and Ministry of Interior operations across all 18 governorates — Baghdad, Basra, Nineveh, Erbil (KRI), Sulaymaniyah, Duhok, Kirkuk, Diyala, Anbar, Karbala, Najaf, Babylon, Wasit, Dhi Qar, Muthanna, Qadisiyyah, Maysan, and Salah ad-Din — into a single operational map with shared CAD, CCTV integration, and coordination between IFP, Counter-Terrorism Service (CTS), and Kurdistan Region Security Council (KRSC).',
  },
  {
    question: 'How does the platform support Iraq Civil Defence and emergency management?',
    answer:
      'KabatOne connects Iraqi Civil Defence Directorate stations across 18 governorates, coordinates 122/115 emergency dispatch with major hospitals (Medical City Baghdad/Basra Teaching Hospital/Erbil Emergency Hospital), and integrates incident response at oil installations (Rumaila, West Qurna, Kirkuk fields), Umm Qasr Port, and Baghdad International Airport (BGW).',
  },
  {
    question: 'How does KabatOne support Baghdad Safe City and major urban security programmes?',
    answer:
      'KabatOne provides centralised video management for Baghdad Safe City camera networks and MOI CCTV/ANPR across the Baghdad Ring Road, Expressways, and major checkpoints — integrating video from Green Zone/IZ security perimeter, Baghdad International Airport (BGW), and the city\'s 9 districts (qadhas) with AI analytics, crowd monitoring, and real-time alert sharing with the National Operations Centre (NOC).',
  },
  {
    question: 'Does KabatOne support Kurdistan Region Security Council (KRSC) and Peshmerga security operations?',
    answer:
      'Yes. KabatOne supports Kurdistan Region of Iraq (KRI) security architecture — Kurdistan Region Security Council (KRSC), Asayish (internal security), Peshmerga coordination with Iraqi Security Forces (ISF) under JCCC frameworks, Erbil/Sulaymaniyah/Duhok governorate operations, and KRI-specific data sovereignty requirements separate from Baghdad-managed systems.',
  },
  {
    question: 'How does KabatOne support Iraq oil infrastructure security?',
    answer:
      'KabatOne provides perimeter monitoring and incident management for Iraq\'s critical oil infrastructure: Rumaila oilfield (1.4M+ bpd, Basra), West Qurna 1 & 2 (ExxonMobil/Lukoil), Majnoon (Shell), Kirkuk oilfields (INOC/KAR Group), Basra Oil Terminal (ABOT/KAAOT), Umm Qasr Port and Khor al-Zubair — with Oil Police Directorate (INOC) and MOI coordination, PTZ camera integration, and SIEM alert escalation.',
  },
  {
    question: 'How does KabatOne comply with Iraq data protection and cybersecurity requirements?',
    answer:
      'KabatOne aligns with Iraqi Communications and Media Commission (CMC) data governance guidelines, Ministry of Communications encryption requirements, and National Information Technology Authority (NITA-Iraq) cybersecurity standards. The platform supports air-gapped deployment for classified MOI/CTS networks and implements INTERPOL-compatible data handling for cross-border law enforcement coordination with Jordan, Kuwait, Turkey, and Iran.',
  },
  {
    question: 'How does KabatOne handle Iraq government procurement through the PMAC/GCB?',
    answer:
      'KabatOne supports procurement under Iraq Government Contracting Board (GCB/PMO) regulations, Public Financial Management Law, and Iraqi procurement frameworks for federal ministries. The platform aligns with World Bank/UN-supported security sector reform financing, US DoS/DoD ITACSS programme procurement, EU civilian mission (EUAM Iraq) requirements, and KRG (Kurdistan Regional Government) separate procurement rules.',
  },
]

const faqsEs = [
  {
    question: '¿Cómo integra KabatOne la Policía Federal de Iraq (IFP) y el Ministerio del Interior en los 18 gobernados?',
    answer:
      'KabatOne unifica las operaciones de la Policía Federal de Iraq (IFP) y el Ministerio del Interior en los 18 gobernados — Bagdad, Basra, Nínive, Erbil (KRI), Suleimanía, Dohuk, Kirkuk, Diyala, Anbar, Karbala, Nayaf, Babilonia, Wasit, Dhi Qar, Muthanna, Qadisiyya, Maisán y Salah ad-Din — en un solo mapa operativo con CAD compartido, integración CCTV y coordinación entre IFP, Servicio Antiterrorista (CTS) y el Consejo de Seguridad de la Región del Kurdistán (KRSC).',
  },
  {
    question: '¿Cómo admite la plataforma la Defensa Civil de Iraq y la gestión de emergencias?',
    answer:
      'KabatOne conecta las estaciones de la Dirección de Defensa Civil de Iraq en los 18 gobernados, coordina el despacho de emergencias 122/115 con los principales hospitales (Ciudad Médica de Bagdad/Hospital Universitario de Basra/Hospital de Emergencias de Erbil), e integra la respuesta ante incidentes en instalaciones petroleras (Rumaila, West Qurna, yacimientos de Kirkuk), Puerto Umm Qasr y el Aeropuerto Internacional de Bagdad (BGW).',
  },
  {
    question: '¿Cómo apoya KabatOne la Ciudad Segura de Bagdad y los principales programas de seguridad urbana?',
    answer:
      'KabatOne proporciona gestión de video centralizada para las redes de cámaras del Baghdad Safe City y el CCTV/ANPR del MOI en el Anillo Vial de Bagdad, autopistas y puntos de control principales — integrando video del perímetro de la Zona Verde/IZ, el Aeropuerto Internacional de Bagdad (BGW) y los 9 distritos (qadhas) de la ciudad, con análisis IA, monitoreo de multitudes y compartición de alertas en tiempo real con el Centro Nacional de Operaciones (NOC).',
  },
  {
    question: '¿Admite KabatOne las operaciones de seguridad del Consejo de Seguridad de la Región del Kurdistán (KRSC) y los Peshmerga?',
    answer:
      'Sí. KabatOne admite la arquitectura de seguridad de la Región del Kurdistán de Iraq (KRI) — Consejo de Seguridad de la Región del Kurdistán (KRSC), Asayish (seguridad interior), coordinación Peshmerga con las Fuerzas de Seguridad de Iraq (ISF) bajo marcos JCCC, operaciones en los gobernados de Erbil/Suleimanía/Dohuk y requisitos de soberanía de datos específicos del KRI, independientes de los sistemas gestionados desde Bagdad.',
  },
  {
    question: '¿Cómo admite KabatOne la seguridad de la infraestructura petrolera de Iraq?',
    answer:
      'KabatOne proporciona monitoreo perimetral y gestión de incidentes para la infraestructura petrolera crítica de Iraq: yacimiento de Rumaila (+1.4M bpd, Basra), West Qurna 1 y 2 (ExxonMobil/Lukoil), Majnoon (Shell), yacimientos de Kirkuk (INOC/KAR Group), Terminal Petrolera de Basra (ABOT/KAAOT), Puerto Umm Qasr y Khor al-Zubair — con coordinación de la Dirección de Policía Petrolera (INOC) y MOI, integración de cámaras PTZ y escalada de alertas SIEM.',
  },
  {
    question: '¿Cómo cumple KabatOne con los requisitos de protección de datos y ciberseguridad en Iraq?',
    answer:
      'KabatOne se alinea con las directrices de gobernanza de datos de la Comisión de Comunicaciones y Medios de Iraq (CMC), los requisitos de cifrado del Ministerio de Comunicaciones y los estándares de ciberseguridad de la Autoridad Nacional de Tecnología de la Información (NITA-Iraq). La plataforma admite implementación en red aislada para redes clasificadas del MOI/CTS e implementa gestión de datos compatible con INTERPOL para coordinación policial transfronteriza con Jordania, Kuwait, Turquía e Irán.',
  },
  {
    question: '¿Cómo gestiona KabatOne las adquisiciones del gobierno de Iraq a través del PMAC/GCB?',
    answer:
      'KabatOne admite adquisiciones bajo las regulaciones del Consejo de Contratación del Gobierno de Iraq (GCB/PMO), la Ley de Gestión Financiera Pública y los marcos de adquisición para ministerios federales. La plataforma se alinea con el financiamiento de reforma del sector de seguridad respaldado por el Banco Mundial/ONU, el programa ITACSS del DoS/DoD de EE. UU., los requisitos de la misión civil de la UE (EUAM Iraq) y las normas de adquisición separadas del GRK (Gobierno Regional del Kurdistán).',
  },
]

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const headline = es
    ? 'Software de Seguridad Pública para Iraq: IFP/CTS, KRSC/Peshmerga, NOC, Infraestructura Petrolera y Reconstrucción de Nínive/Mosul'
    : 'Public Safety Software for Iraq: IFP/CTS, KRSC/Peshmerga, NOC, Oil Infrastructure & Mosul/Nineveh Reconstruction'
  const description = es
    ? 'Plataforma unificada para la Policía Federal de Iraq (IFP) y el MOI — despacho CAD en 18 gobernados, Baghdad Safe City/NOC, KRSC/Asayish Región del Kurdistán, seguridad de campos Rumaila/West Qurna/Kirkuk, Puerto Umm Qasr/ABOT, CMC/NITA-Iraq y adquisición GCB/PMO.'
    : 'Unified platform for Iraq Federal Police (IFP) and MOI — integrated CAD dispatch across 18 governorates, Baghdad Safe City/NOC, KRSC/Asayish Kurdistan Region, Rumaila/West Qurna/Kirkuk oilfield security, Umm Qasr Port/ABOT, CMC/NITA-Iraq compliance, and GCB/PMO procurement.'
  const url = es
    ? 'https://kabatone.com/es/resources/public-safety-software-iraq'
    : 'https://kabatone.com/resources/public-safety-software-iraq'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources' : 'https://kabatone.com/resources' },
    { name: 'Iraq', url },
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
              {es ? 'Guía de Mercado — Iraq' : 'Market Guide — Iraq'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {es
                ? 'Software de Seguridad Pública para Iraq'
                : 'Public Safety Software for Iraq'}
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl">
              {es
                ? 'IFP/CTS 18 gobernados · KRSC/Asayish Kurdistan · Baghdad Safe City/NOC · Rumaila/West Qurna/Kirkuk · Puerto Umm Qasr/ABOT · CMC/NITA-Iraq'
                : 'IFP/CTS 18 governorates · KRSC/Asayish Kurdistan · Baghdad Safe City/NOC · Rumaila/West Qurna/Kirkuk · Umm Qasr Port/ABOT · CMC/NITA-Iraq'}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              {es ? "El panorama de seguridad pública de Iraq" : "Iraq's Public Safety Landscape"}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                {es
                  ? 'Iraq — con 42 millones de habitantes y 18 gobernados — opera un ecosistema de seguridad pública complejo bajo el Ministerio del Interior (MOI) con la Policía Federal de Iraq (IFP) como fuerza policial principal. Unidades especializadas incluyen el Servicio Antiterrorista (CTS/Quwwat al-Takhassus), la Policía de Fronteras, la Policía Federal (Interior y Exterior), la Policía de Aeropuertos, la Policía Petrolera (INOC), la Policía de Instalaciones y el Comando de Operaciones de Bagdad (BOC). La Región del Kurdistán de Iraq (KRI) opera un aparato de seguridad separado bajo el Consejo de Seguridad de la Región del Kurdistán (KRSC) con las fuerzas Asayish (seguridad interior) y Peshmerga coordinadas con las ISF bajo el marco de la Comisión Conjunta de Coordinación y Cooperación (JCCC).'
                  : 'Iraq — with 42 million inhabitants across 18 governorates — operates a complex public safety ecosystem under the Ministry of Interior (MOI) with the Iraqi Federal Police (IFP) as the primary police force. Specialised units include the Counter-Terrorism Service (CTS/Quwwat al-Takhassus), Border Police, Federal Police (Interior and Exterior), Airport Police, Oil Police (INOC), Facilities Police, and Baghdad Operations Command (BOC). The Kurdistan Region of Iraq (KRI) operates a separate security apparatus under the Kurdistan Region Security Council (KRSC) with Asayish (internal security) forces and Peshmerga coordinated with ISF under the Joint Coordination and Cooperation Committee (JCCC) framework.'}
              </p>
              <p>
                {es
                  ? 'El Centro Nacional de Operaciones (NOC) bajo el Ministerio del Interior coordina la respuesta multi-agencial para incidentes terroristas, disturbios civiles y emergencias de infraestructura crítica. La Defensa Civil opera a nivel de gobernado coordinada con el sistema de emergencias 122, mientras el Ministerio de Salud gestiona el servicio de ambulancias bajo el número 115. La reconstrucción post-ISIS en la Gobernación de Nínive (Mosul) y las provincias de Anbar/Kirkuk/Diyala demanda modernos sistemas de vigilancia, CAD integrado y gestión de eventos masivos para el retorno de la población desplazada y el restablecimiento del orden público.'
                  : 'The National Operations Centre (NOC) under the Ministry of Interior coordinates multi-agency response for terrorist incidents, civil unrest, and critical infrastructure emergencies. Civil Defence operates at governorate level coordinated with 122 emergency system, while Ministry of Health manages ambulance services under 115 number. Post-ISIS reconstruction in Nineveh Governorate (Mosul) and Anbar/Kirkuk/Diyala provinces demands modern surveillance systems, integrated CAD, and mass event management for returnee population and public order restoration.'}
              </p>
              <p>
                {es
                  ? 'Iraq produce más de 4.5 millones de barriles de petróleo diarios — el 90% de los ingresos gubernamentales — con megacampos operados por BP (Rumaila, 1.4M+ bpd), ExxonMobil/PetroChina (West Qurna-1), Lukoil (West Qurna-2) y Shell (Majnoon). La Terminal Petrolera de Basra (ABOT/KAAOT) en el Golfo Pérsico es la infraestructura de exportación más crítica de Iraq. La seguridad de estas instalaciones, junto con el Puerto de Umm Qasr y Khor al-Zubair, es gestionada por la Policía Petrolera del INOC con apoyo de la Policía Federal y coordinación con las fuerzas de la Guardia Costera de Iraq.'
                  : 'Iraq produces 4.5M+ barrels of oil per day — 90% of government revenues — with mega-fields operated by BP (Rumaila, 1.4M+ bpd), ExxonMobil/PetroChina (West Qurna-1), Lukoil (West Qurna-2), and Shell (Majnoon). Basra Oil Terminal (ABOT/KAAOT) in the Persian Gulf is Iraq\'s most critical export infrastructure. Security of these facilities, along with Umm Qasr Port and Khor al-Zubair, is managed by INOC Oil Police with Federal Police support and Iraq Coastguard coordination.'}
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
                  title: es ? 'Policía Federal de Iraq (IFP) y MOI' : 'Iraqi Federal Police (IFP) & MOI',
                  body: es
                    ? '18 gobernados; unidades especiales: CTS (Servicio Antiterrorista), Policía de Fronteras, Policía Federal (Interior/Exterior), Policía de Aeropuertos, Policía Petrolera (INOC), Policía de Instalaciones, BOC (Comando de Operaciones de Bagdad); coordinación con las Fuerzas de Movilización Popular (PMF/Hashd al-Shaabi) bajo el Primer Ministro para amenazas de seguridad nacional.'
                    : '18 governorates; specialised units: CTS (Counter-Terrorism Service), Border Police, Federal Police (Interior/Exterior), Airport Police, Oil Police (INOC), Facilities Police, BOC (Baghdad Operations Command); coordination with Popular Mobilisation Forces (PMF/Hashd al-Shaabi) under Prime Minister for national security threats.',
                },
                {
                  title: es ? 'KRSC — Consejo de Seguridad de la Región del Kurdistán' : 'KRSC — Kurdistan Region Security Council',
                  body: es
                    ? 'KRI opera seguridad bajo el KRSC con fuerzas Asayish (interior/Erbil/Suleimanía/Dohuk) y Peshmerga (defensa) coordinadas con ISF bajo JCCC; la Policía de la Región del Kurdistán cubre Erbil, Suleimanía y Dohuk; gobernados disputados (Kirkuk/Khanaqin/Sinjar) requieren coordinación dual ISF-KRI; Erbil cuenta con un centro de operaciones de seguridad integrado (ESOC).'
                    : 'KRI operates security under KRSC with Asayish forces (interior/Erbil/Sulaymaniyah/Duhok) and Peshmerga (defence) coordinated with ISF under JCCC; Kurdistan Region Police covers Erbil, Sulaymaniyah, and Duhok; disputed territories (Kirkuk/Khanaqin/Sinjar) require dual ISF-KRI coordination; Erbil has an integrated security operations centre (ESOC).',
                },
                {
                  title: es ? 'NOC — Centro Nacional de Operaciones y BOC' : 'NOC — National Operations Centre & BOC',
                  body: es
                    ? 'El NOC bajo el MOI coordina la respuesta multi-agencial en tiempo real para Bagdad y a nivel federal — integrando IFP, CTS, Defensa Civil, Ministerio de Salud (ambulancias), Fuerzas Aéreas, PMF y el Ejército de Iraq (IA) para amenazas críticas; el BOC gestiona los 9 distritos (qadhas) de Bagdad con cámaras del Baghdad Safe City y puntos de control ANPR en las principales arterias.'
                    : 'NOC under MOI coordinates real-time multi-agency response for Baghdad and federally — integrating IFP, CTS, Civil Defence, Ministry of Health (ambulances), Air Forces, PMF, and Iraqi Army (IA) for critical threats; BOC manages Baghdad\'s 9 districts (qadhas) with Baghdad Safe City cameras and ANPR checkpoints on major arteries.',
                },
                {
                  title: es ? 'Seguridad de campos petroleros: Rumaila/West Qurna/Kirkuk' : 'Oilfield Security: Rumaila/West Qurna/Kirkuk',
                  body: es
                    ? 'Policía Petrolera INOC en Rumaila (BP, 1.4M+ bpd)/West Qurna 1 (ExxonMobil/PetroChina)/West Qurna 2 (Lukoil)/Majnoon (Shell)/Nahr Bin Omar; yacimientos de Kirkuk (INOC/KAR Group, disputado ISF-KRI); monitoreo de oleoducto Kirkuk-Ceyhan (KAP, 450K bpd), con cámaras PTZ, SIEM y coordinación de la Policía Federal para incidentes graves.'
                    : 'INOC Oil Police at Rumaila (BP, 1.4M+ bpd)/West Qurna 1 (ExxonMobil/PetroChina)/West Qurna 2 (Lukoil)/Majnoon (Shell)/Nahr Bin Omar; Kirkuk fields (INOC/KAR Group, disputed ISF-KRI); Kirkuk-Ceyhan pipeline (KAP, 450K bpd) monitoring, with PTZ cameras, SIEM, and Federal Police coordination for major incidents.',
                },
                {
                  title: es ? 'Puerto Umm Qasr, ABOT/KAAOT y Basra' : 'Umm Qasr Port, ABOT/KAAOT & Basra',
                  body: es
                    ? 'Puerto Umm Qasr — principal puerto de importación de Iraq (bienes/grano/combustible), Terminal de Contenedores de Khor al-Zubair, Terminal Petrolera Árabe (ABOT) y Terminal de Petróleo de Al-Faw (KAAOT) en el Golfo Pérsico; seguridad bajo MOI/INOC y coordinación con la Guardia Costera de Iraq (ICG), la Armada de Iraq y la Base Naval de Basra para vigilancia marítima del Shatt al-Arab.'
                    : 'Umm Qasr Port — Iraq\'s primary import port (goods/grain/fuel), Khor al-Zubair Container Terminal, Arab Oil Terminal (ABOT), and Khor al-Amaya Oil Terminal (KAAOT) in Persian Gulf; security under MOI/INOC and coordination with Iraq Coastguard (ICG), Iraqi Navy, and Basra Naval Base for Shatt al-Arab maritime surveillance.',
                },
                {
                  title: es ? 'Reconstrucción de Nínive/Mosul y Bagdad Smart City' : 'Nineveh/Mosul Reconstruction & Baghdad Smart City',
                  body: es
                    ? 'Gobernación de Nínive (Mosul) en reconstrucción post-ISIS bajo el UNDP/UNOPS — nuevas comisarías, centros de emergencia y redes de CCTV; Gobernación de Anbar (Ramadi/Fallujah) con sistemas de seguridad modernizados financiados por UE/Banco Mundial; iniciativa de Smart City de Bagdad del Municipio/MOI para integrar cámaras Safe City, semáforos inteligentes y plataforma de gestión de incidentes unificada.'
                    : 'Nineveh Governorate (Mosul) post-ISIS reconstruction under UNDP/UNOPS — new police stations, emergency centres, and CCTV networks; Anbar Governorate (Ramadi/Fallujah) with EU/World Bank-financed modernised security systems; Baghdad Municipality/MOI Smart City initiative to integrate Safe City cameras, intelligent traffic lights, and unified incident management platform.',
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
              {es ? 'Capacidades de la plataforma KabatOne para Iraq' : 'KabatOne Platform Capabilities for Iraq'}
            </h2>
            <div className="space-y-8">
              {[
                {
                  heading: es ? 'CAD unificado para IFP 18 gobernados + KRI + Defensa Civil' : 'Unified CAD for IFP 18 Governorates + KRI + Civil Defence',
                  text: es
                    ? 'Despacho integrado para las 18 divisiones regionales de la IFP, estaciones de Defensa Civil, unidades de ambulancia del Ministerio de Salud, unidades CTS y la Policía Regional del Kurdistán (KRI) — sobre el mismo mapa operativo con integración de los números de emergencia 122/115, priorización por IA, panel de desbordamiento al NOC/BOC para incidentes nacionales y coordinación JCCC para operaciones conjuntas ISF-Peshmerga en territorios disputados.'
                    : 'Integrated dispatch for IFP\'s 18 regional divisions, Civil Defence stations, Ministry of Health ambulance units, CTS units, and Kurdistan Region Police (KRI) — on the same operational map with 122/115 emergency integration, AI-driven incident prioritisation, NOC/BOC overflow dashboard for national incidents, and JCCC coordination for joint ISF-Peshmerga operations in disputed territories.',
                },
                {
                  heading: es ? 'Baghdad Safe City y gestión de video CCTV' : 'Baghdad Safe City Video Management & CCTV',
                  text: es
                    ? 'KabatOne gestiona las cámaras del Baghdad Safe City y los puntos de control ANPR del BOC en los 9 distritos de Bagdad, integra la vigilancia del BGW y los checkpoints de la Zona Verde/IZ, conecta el video de las instalaciones del INOC/ABOT, y proporciona análisis de video con IA — detección de coches bomba, conteo de personas, análisis de comportamiento — con latencia de alerta inferior a 2 segundos y compartición de transmisiones con el NOC, CTS y el BOC.'
                    : 'KabatOne manages Baghdad Safe City cameras and BOC ANPR checkpoints across 9 Baghdad districts, integrates BGW Airport and Green Zone/IZ perimeter surveillance, connects INOC/ABOT facility video, and provides AI video analytics — VBIED detection, crowd counting, behavioural analysis — with sub-2-second alert latency and stream sharing with NOC, CTS, and BOC.',
                },
                {
                  heading: es ? 'Seguridad de infraestructura petrolera y portuaria' : 'Oil & Port Infrastructure Security',
                  text: es
                    ? 'KabatOne proporciona monitoreo perimetral en tiempo real de los megacampos de Basra (Rumaila/West Qurna 1-2/Majnoon), los yacimientos de Kirkuk (ISF+KRI coordinados), la Terminal de Basra (ABOT/KAAOT), el Puerto de Umm Qasr y las terminales de Khor al-Zubair — con alertas SIEM de la Policía Petrolera INOC, cámaras PTZ, integración AIS para vigilancia marítima Shatt al-Arab/Golfo Pérsico y escalada a la Guardia Costera de Iraq (ICG).'
                    : 'KabatOne provides real-time perimeter monitoring of Basra mega-fields (Rumaila/West Qurna 1-2/Majnoon), Kirkuk oilfields (ISF+KRI coordinated), Basra Terminal (ABOT/KAAOT), Umm Qasr Port, and Khor al-Zubair terminals — with INOC Oil Police SIEM alerts, PTZ cameras, AIS integration for Shatt al-Arab/Persian Gulf maritime surveillance, and escalation to Iraq Coastguard (ICG).',
                },
                {
                  heading: es ? 'Seguridad de la Región del Kurdistán (KRSC/Asayish/Peshmerga)' : 'Kurdistan Region Security (KRSC/Asayish/Peshmerga)',
                  text: es
                    ? 'KabatOne admite la arquitectura dual de seguridad del KRI — paneles separados para las operaciones del KRSC/Asayish de Erbil/Suleimanía/Dohuk con soberanía de datos independiente del MOI federal, integración de los puntos de control del ESOC de Erbil, coordinación JCCC para zonas disputadas (Kirkuk/Sinjar/Khanaqin) y alertas de frontera para los pasos Iraq-Turquía (Ibrahim Khalil/Fishkhabur) e Iraq-Irán (Parwiz Khan/Bashmakh).'
                    : 'KabatOne supports KRI\'s dual security architecture — separate dashboards for KRSC/Asayish operations in Erbil/Sulaymaniyah/Duhok with data sovereignty independent of federal MOI, Erbil ESOC checkpoint integration, JCCC coordination for disputed zones (Kirkuk/Sinjar/Khanaqin), and border alerts for Iraq-Turkey (Ibrahim Khalil/Fishkhabur) and Iraq-Iran (Parwiz Khan/Bashmakh) crossings.',
                },
                {
                  heading: es ? 'Cumplimiento CMC/NITA-Iraq y adquisición GCB/PMO' : 'CMC/NITA-Iraq Compliance & GCB/PMO Procurement',
                  text: es
                    ? 'KabatOne se alinea con las directrices de gobernanza de datos de la CMC, los estándares de ciberseguridad del NITA-Iraq y los requisitos de cifrado del Ministerio de Comunicaciones; admite implementación en red aislada para redes clasificadas del CTS/MOI; soporta adquisición bajo el GCB/PMO federal, los marcos de financiamiento del Banco Mundial/PNUD/UNOPS para reconstrucción de Nínive/Anbar, el programa ITACSS del DoS/DoD de EE. UU. y los marcos separados del GRK para proyectos en el KRI.'
                    : 'KabatOne aligns with CMC data governance guidelines, NITA-Iraq cybersecurity standards, and Ministry of Communications encryption requirements; supports air-gapped deployment for CTS/MOI classified networks; procurement under federal GCB/PMO, World Bank/UNDP/UNOPS financing frameworks for Nineveh/Anbar reconstruction, US DoS/DoD ITACSS programme, and separate KRG frameworks for KRI projects.',
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
              {es ? 'Marco regulatorio y de adquisiciones en Iraq' : 'Regulatory & Procurement Framework in Iraq'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  label: es ? 'Datos y privacidad' : 'Data & Privacy',
                  items: [
                    es ? 'CMC — Comisión de Comunicaciones y Medios (directrices TIC)' : 'CMC — Communications & Media Commission (ICT guidelines)',
                    es ? 'NITA-Iraq — Estándares de ciberseguridad para sistemas de gobierno' : 'NITA-Iraq — Cybersecurity standards for government systems',
                    es ? 'MOC — Requisitos de cifrado Ministerio de Comunicaciones' : 'MOC — Ministry of Communications encryption requirements',
                    es ? 'Soberanía de datos KRI/KRG independiente del MOI federal' : 'KRI/KRG data sovereignty independent from federal MOI',
                  ],
                },
                {
                  label: es ? 'Ciberseguridad' : 'Cybersecurity',
                  items: [
                    es ? 'NITA-Iraq — Marco de ciberseguridad para infraestructura crítica' : 'NITA-Iraq — Cybersecurity framework for critical infrastructure',
                    es ? 'Despliegue en red aislada para redes CTS/MOI clasificadas' : 'Air-gapped deployment for CTS/MOI classified networks',
                    es ? 'Compatibilidad INTERPOL para coordinación transfronteriza' : 'INTERPOL compatibility for cross-border law enforcement',
                    es ? 'Protección CI: INOC/ABOT/KAAOT/Umm Qasr/BGW' : 'CI protection: INOC/ABOT/KAAOT/Umm Qasr/BGW',
                  ],
                },
                {
                  label: es ? 'Adquisiciones y financiamiento' : 'Procurement & Financing',
                  items: [
                    es ? 'GCB/PMO — Reglamento de Contratación del Gobierno Federal de Iraq' : 'GCB/PMO — Iraq Federal Government Contracting Regulations',
                    es ? 'Banco Mundial/PNUD/UNOPS — Reconstrucción Nínive/Anbar' : 'World Bank/UNDP/UNOPS — Nineveh/Anbar reconstruction',
                    es ? 'DoS/DoD EE. UU. — Programa ITACSS (Sector de Seguridad)' : 'US DoS/DoD — ITACSS Security Sector programme',
                    es ? 'KRG — Reglas de adquisición separadas para proyectos KRI' : 'KRG — Separate procurement rules for KRI projects',
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
              ? '¿Listo para modernizar la seguridad pública en Iraq?'
              : 'Ready to modernise public safety in Iraq?'
          }
          subtitle={
            es
              ? 'Descubra cómo KabatOne unifica la IFP, el KRSC y el NOC de Iraq en una plataforma operativa que protege infraestructura petrolera crítica, puertos del Golfo Pérsico y ciudades en reconstrucción conforme a CMC/NITA-Iraq.'
              : 'Discover how KabatOne unifies Iraq IFP, KRSC, and NOC into one operational platform protecting critical oil infrastructure, Persian Gulf ports, and rebuilding cities — compliant with CMC/NITA-Iraq standards.'
          }
        />
      </main>
      <Footer es={es} />
    </>
  )
}
