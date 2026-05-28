import { generatePageMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareBangladesh', locale)
}

const faqs = [
  {
    question: "How does KabatOne integrate with Bangladesh Police's district and metropolitan structure?",
    answer: "KabatOne aligns with Bangladesh Police's command hierarchy — integrating with the Inspector General of Police (IGP) at PHQ Dhaka, 8 Police Ranges covering 64 districts, Metropolitan Police Services (DMP/CMP/KMP/RMP/SMP/BMP/NRMP), and 650+ police stations — providing unified CAD dispatch, real-time situational awareness, and reporting compatible with Bangladesh Police protocols."
  },
  {
    question: "Can KabatOne support Bangladesh Fire Service and Civil Defence (FSCD) operations?",
    answer: "Yes. KabatOne integrates Bangladesh Fire Service and Civil Defence (FSCD) across 64 districts and 8 divisions, the Department of Disaster Management (DDM), Bangladesh Meteorological Department (BMD), and District/Upazila Disaster Management Committees — enabling unified command visibility and multi-agency coordination for cyclone response, floods, and fire emergencies."
  },
  {
    question: "How does KabatOne handle Bangladesh Digital Security Act and data protection compliance?",
    answer: "KabatOne is designed for compliance with Bangladesh's Digital Security Act 2018, the Data Protection Bill (pending), and existing ICT Act 2006 provisions — implementing access controls, audit logs, data handling procedures, and cybersecurity frameworks aligned with Bangladesh Telecommunication Regulatory Commission (BTRC) and Digital Bangladesh guidelines."
  },
  {
    question: "Can KabatOne support cyclone and flood disaster operations in Bangladesh?",
    answer: "Yes. KabatOne integrates BMD cyclone alerts, Bangladesh Flood Forecasting and Warning Centre (BFFWC/FFWC) flood data, Cyclone Preparedness Programme (CPP) volunteer networks, and DDM situation reports — supporting pre-emptive evacuation dispatch to 2,000+ cyclone shelters and the world-class Bangladesh disaster management system that has reduced cyclone deaths from 500,000 (1970) to near zero."
  },
  {
    question: "How does KabatOne support Dhaka Metropolitan Police operations and Safe City?",
    answer: "KabatOne integrates Dhaka Metropolitan Police (DMP) Command and Control Centre, Dhaka Safe City CCTV network, Bangladesh Road Transport Authority (BRTA) traffic cameras, and Dhaka Transport Coordination Authority (DTCA) — providing AI-powered analytics, ANPR integration, and unified situational awareness for greater Dhaka's 22+ million population."
  },
  {
    question: "What cybersecurity standards does KabatOne meet for Bangladeshi government procurement?",
    answer: "KabatOne aligns with Bangladesh CIRT (Computer Incident Response Team) standards under BGD e-GOV CIRT, Digital Security Act 2018, National Cybersecurity Strategy, and Bangladesh Computer Council (BCC) ICT infrastructure guidelines — meeting e-Government standards under the a2i (Access to Information) and Smart Bangladesh programme."
  },
  {
    question: "What procurement pathway does KabatOne support in Bangladesh?",
    answer: "KabatOne supports procurement through the Central Procurement Technical Unit (CPTU) e-GP (e-Government Procurement) portal under the Public Procurement Act 2006 and Public Procurement Rules 2008 — including open tendering, limited tendering, and direct procurement for emergency management systems at national, divisional, and district levels."
  }
]

const faqsEs = [
  {
    question: "¿Cómo se integra KabatOne con la estructura distrital y metropolitana de la Policía de Bangladesh?",
    answer: "KabatOne se alinea con la jerarquía de mando de la Policía de Bangladesh — integrándose con el Inspector General de la Policía (IGP) en el PHQ de Dhaka, 8 Rangos Policiales que cubren 64 distritos, Servicios de Policía Metropolitana (DMP/CMP/KMP/RMP/SMP/BMP/NRMP) y más de 650 estaciones de policía — proporcionando despacho CAD unificado y conciencia situacional en tiempo real."
  },
  {
    question: "¿Puede KabatOne soportar las operaciones del Servicio de Bomberos y Defensa Civil de Bangladesh (FSCD)?",
    answer: "Sí. KabatOne integra el FSCD de Bangladesh en 64 distritos y 8 divisiones, el Departamento de Gestión de Desastres (DDM), el Departamento Meteorológico de Bangladesh (BMD) y los Comités de Gestión de Desastres de Distrito/Upazila — habilitando visibilidad de mando unificada y coordinación multiagencia para respuesta ante ciclones, inundaciones e incendios."
  },
  {
    question: "¿Cómo gestiona KabatOne el cumplimiento de la Ley de Seguridad Digital de Bangladesh y la protección de datos?",
    answer: "KabatOne está diseñado para cumplimiento con la Ley de Seguridad Digital 2018 de Bangladesh, el Proyecto de Ley de Protección de Datos (pendiente) y las disposiciones vigentes de la Ley TIC 2006 — implementando controles de acceso, registros de auditoría y marcos de ciberseguridad alineados con la BTRC y las directrices de Bangladesh Digital."
  },
  {
    question: "¿Puede KabatOne soportar operaciones ante ciclones e inundaciones en Bangladesh?",
    answer: "Sí. KabatOne integra alertas de ciclones del BMD, datos de inundaciones del BFFWC/FFWC, redes de voluntarios del Programa de Preparación ante Ciclones (CPP) e informes situacionales del DDM — apoyando el despacho de evacuación preventiva a más de 2,000 refugios anticiclónicos y el sistema de gestión de desastres de Bangladesh reconocido mundialmente."
  },
  {
    question: "¿Cómo soporta KabatOne las operaciones de la Policía Metropolitana de Dhaka y el Safe City?",
    answer: "KabatOne integra el Centro de Mando y Control de la Policía Metropolitana de Dhaka (DMP), la red CCTV Safe City de Dhaka, cámaras de tráfico de la BRTA y la DTCA — proporcionando analítica de IA, integración ANPR y visibilidad de mando unificada para la Gran Dhaka con más de 22 millones de habitantes."
  },
  {
    question: "¿Qué estándares de ciberseguridad cumple KabatOne para la contratación gubernamental en Bangladesh?",
    answer: "KabatOne se alinea con los estándares del CIRT de Bangladesh (BGD e-GOV CIRT), la Ley de Seguridad Digital 2018, la Estrategia Nacional de Ciberseguridad y las directrices de infraestructura TIC del BCC — cumpliendo los estándares de eGobierno bajo los programas a2i y Smart Bangladesh."
  },
  {
    question: "¿Qué vía de contratación soporta KabatOne en Bangladesh?",
    answer: "KabatOne soporta contratación a través del portal e-GP (e-Government Procurement) de la CPTU (Unidad Técnica Central de Adquisiciones) bajo la Ley de Contratación Pública 2006 y las Normas de Contratación Pública 2008 — incluyendo licitación abierta, restringida y contratación directa para sistemas de gestión de emergencias a nivel nacional, divisional y distrital."
  }
]

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const headline = es
    ? 'Software de Seguridad Pública para Bangladesh: Policía de Bangladesh/DMP, FSCD, DDM/BMD, Ley de Seguridad Digital 2018 y e-GP'
    : 'Public Safety Software for Bangladesh: Bangladesh Police/DMP, FSCD, DDM/BMD, Digital Security Act 2018 & e-GP'
  const description = es
    ? 'Plataforma unificada para Policía de Bangladesh, FSCD y DDM — despacho CAD integrado para 64 distritos y coordinación de ciclones/inundaciones DDM/BMD, gestión de cámaras Dhaka Safe City conforme a Ley de Seguridad Digital y cumplimiento BGD e-GOV CIRT con contratación e-GP/APP 2006.'
    : 'Unified platform for Bangladesh Police, FSCD, and DDM — integrated CAD dispatch for 64 districts and DDM/BMD cyclone/flood coordination, Dhaka Safe City camera management compliant with Digital Security Act, and BGD e-GOV CIRT compliance with e-GP/PPA 2006 procurement.'
  const url = es
    ? 'https://kabatone.com/es/resources/public-safety-software-bangladesh/'
    : 'https://kabatone.com/resources/public-safety-software-bangladesh/'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    { name: 'Bangladesh', url },
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
              {es ? 'Guía de Mercado — Bangladesh' : 'Market Guide — Bangladesh'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {es
                ? 'Software de Seguridad Pública para Bangladesh'
                : 'Public Safety Software for Bangladesh'}
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              {es
                ? 'Policía de Bangladesh/DMP, FSCD, DDM/BMD/CPP, Ley de Seguridad Digital 2018/BGD e-GOV CIRT y contratación e-GP/APP 2006'
                : 'Bangladesh Police/DMP, FSCD, DDM/BMD/CPP, Digital Security Act 2018/BGD e-GOV CIRT & e-GP/PPA 2006 procurement'}
            </p>
            <div className="flex flex-wrap gap-3">
              {['Bangladesh Police / DMP', 'FSCD / DDM / BMD / CPP', 'Cyclone Shelters 2,000+', 'Digital Security Act 2018', 'BGD e-GOV CIRT / BCC', 'e-GP / CPTU / PPA 2006'].map(tag => (
                <span key={tag} className="bg-green-800 text-green-100 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? "El Panorama de Seguridad Pública en Bangladesh" : "Bangladesh's Public Safety Landscape"}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Bangladesh es la octava nación más poblada del mundo con 170+ millones de habitantes — una de las densidades de población más altas del planeta — organizada en 8 divisiones, 64 distritos y 495 upazilas. La Policía de Bangladesh opera desde la Sede de la Policía (PHQ) en Dhaka con 8 Rangos Policiales que cubren los 64 distritos, múltiples Servicios de Policía Metropolitana (DMP en Dhaka, CMP en Chittagong, KMP en Khulna, RMP en Rajshahi, SMP en Sylhet, BMP en Barishal, NRMP en Mymensingh) y más de 650 thanas (estaciones de policía). El Servicio de Bomberos y Defensa Civil (FSCD) opera en todos los distritos con respuesta coordinada de bomberos y gestión de desastres civiles.'
                : "Bangladesh is the world's eighth most populous nation with 170+ million people — one of the planet's highest population densities — organized into 8 divisions, 64 districts, and 495 upazilas. Bangladesh Police operates from Police Headquarters (PHQ) in Dhaka with 8 Police Ranges covering 64 districts, multiple Metropolitan Police Services (DMP in Dhaka, CMP in Chittagong, KMP in Khulna, RMP in Rajshahi, SMP in Sylhet, BMP in Barishal, NRMP in Mymensingh), and 650+ thanas (police stations). Fire Service and Civil Defence (FSCD) operates across all districts with coordinated fire response and civil disaster management."}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Bangladesh es uno de los países más vulnerables al clima del mundo — delta del Ganges-Brahmaputra-Meghna con el 10% del territorio por debajo de 1 metro sobre el nivel del mar. Sin embargo, ha transformado la gestión de desastres con el Programa de Preparación ante Ciclones (CPP) con 55,000+ voluntarios y 2,000+ refugios anticiclónicos, reduciendo muertes por ciclones de 500,000 en 1970 a cientos en el siglo XXI. El Departamento de Meteorología de Bangladesh (BMD) y el BFFWC/FFWC emiten alertas de ciclones e inundaciones. El programa Digital Bangladesh (ahora Smart Bangladesh) ha acelerado la digitalización gubernamental.'
                : "Bangladesh is one of the world's most climate-vulnerable countries — Ganges-Brahmaputra-Meghna delta with 10% of territory below 1 metre above sea level. However, it has transformed disaster management with the Cyclone Preparedness Programme (CPP) with 55,000+ volunteers and 2,000+ cyclone shelters, reducing cyclone deaths from 500,000 in 1970 to hundreds in the 21st century. Bangladesh Meteorological Department (BMD) and BFFWC/FFWC issue cyclone and flood alerts. Digital Bangladesh (now Smart Bangladesh) programme has accelerated government digitalization."}
            </p>
          </div>
        </section>

        {/* Police & Emergency Structure */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Estructura Policial y de Emergencias' : 'Police and Emergency Structure'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Policía de Bangladesh' : 'Bangladesh Police'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• PHQ Dhaka: Inspector General de la Policía (IGP)' : '• PHQ Dhaka: Inspector General of Police (IGP)'}</li>
                  <li>{es ? '• 8 Rangos Policiales, 64 distritos, 650+ thanas' : '• 8 Police Ranges, 64 districts, 650+ thanas'}</li>
                  <li>{es ? '• DMP: Policía Metropolitana de Dhaka (mayor fuerza)' : '• DMP: Dhaka Metropolitan Police (largest force)'}</li>
                  <li>{es ? '• CMP/KMP/RMP/SMP/BMP/NRMP: Metro Police' : '• CMP/KMP/RMP/SMP/BMP/NRMP: Metro Police forces'}</li>
                  <li>{es ? '• RAB: Rapid Action Battalion (contraterrorismo)' : '• RAB: Rapid Action Battalion (counter-terrorism)'}</li>
                  <li>{es ? '• SWADS: Special Weapons and Tactics Division' : '• SWADS: Special Weapons and Tactics Division'}</li>
                  <li>{es ? '• CID: Departamento de Investigación Criminal' : '• CID: Criminal Investigation Department'}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Servicios de Emergencia y Desastres' : 'Emergency & Disaster Services'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• 999: emergencia unificada (policía/bomberos/ambulancia)' : '• 999: unified emergency (police/fire/ambulance)'}</li>
                  <li>{es ? '• FSCD: Servicio de Bomberos y Defensa Civil (64 distritos)' : '• FSCD: Fire Service and Civil Defence (64 districts)'}</li>
                  <li>{es ? '• DDM: Departamento de Gestión de Desastres' : '• DDM: Department of Disaster Management'}</li>
                  <li>{es ? '• CPP: Programa de Preparación ante Ciclones (55,000+ voluntarios)' : '• CPP: Cyclone Preparedness Programme (55,000+ volunteers)'}</li>
                  <li>{es ? '• BMD: Departamento Meteorológico de Bangladesh' : '• BMD: Bangladesh Meteorological Department'}</li>
                  <li>{es ? '• BFFWC/FFWC: Centro de Pronóstico y Alerta de Inundaciones' : '• BFFWC/FFWC: Flood Forecasting and Warning Centre'}</li>
                  <li>{es ? '• Bangladesh Army/Navy: apoyo HADR' : '• Bangladesh Army/Navy: HADR support'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Safe City */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Safe City Dhaka y Vigilancia Urbana' : 'Dhaka Safe City & Urban Surveillance'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Dhaka — con más de 22 millones de habitantes en el área metropolitana — ha implementado una red CCTV Safe City integrada con el Centro de Mando y Control de la DMP. La Autoridad de Tráfico de Dhaka (DTCA) y la BRTA (Bangladesh Road Transport Authority) gestionan cámaras de control de tráfico en las principales arterias. El proyecto Dhaka Safe City incluye reconocimiento facial y analítica ANPR. Chittagong (CMP), Khulna (KMP) y otras ciudades metropolitanas están expandiendo sus infraestructuras de vigilancia. El gobierno digital Smart Bangladesh y el programa Digital Economy Plan impulsan la modernización de infraestructura de seguridad pública.'
                : "Dhaka — with 22+ million people in the metro area — has deployed a Safe City CCTV network integrated with DMP Command and Control Centre. The Dhaka Transport Coordination Authority (DTCA) and BRTA (Bangladesh Road Transport Authority) manage traffic control cameras on major arterials. The Dhaka Safe City project includes facial recognition and ANPR analytics. Chittagong (CMP), Khulna (KMP), and other metropolitan cities are expanding surveillance infrastructure. The Smart Bangladesh digital government and Digital Economy Plan drive public safety infrastructure modernization."}
            </p>
          </div>
        </section>

        {/* Legal & Compliance */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Marco Legal y Regulatorio' : 'Legal & Regulatory Framework'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Seguridad Digital y Protección de Datos' : 'Digital Security & Data Protection'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Digital Security Act 2018:</strong>{' '}
                    {es ? 'Ley de Seguridad Digital — marco de ciberdelitos, controles de contenido digital, cooperación de agencias' : 'Digital Security Act — cybercrime framework, digital content controls, agency cooperation'}
                  </li>
                  <li>
                    <strong>{es ? 'Data Protection Bill (pending):' : 'Data Protection Bill (pending):'}</strong>{' '}
                    {es ? 'Proyecto de Ley de Protección de Datos — en proceso legislativo; provee marco de derechos del titular y obligaciones del responsable' : 'Data Protection Bill in legislative process — will provide data subject rights framework and controller obligations'}
                  </li>
                  <li>
                    <strong>ICT Act 2006 (amended 2013):</strong>{' '}
                    {es ? 'Ley de TIC — marco de delitos informáticos existente; BTRC regulación telecomunicaciones' : 'ICT Act — existing computer crimes framework; BTRC telecommunications regulation'}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Ciberseguridad y TIC' : 'Cybersecurity & ICT'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>BGD e-GOV CIRT:</strong>{' '}
                    {es ? 'Equipo de Respuesta a Incidentes de Ciberseguridad del Gobierno de Bangladesh — BCC/MoPT; respuesta a incidentes, estándares de seguridad gubernamental' : 'Bangladesh Government Cybersecurity Incident Response Team — BCC/MoPT; incident response, government security standards'}
                  </li>
                  <li>
                    <strong>BCC (Bangladesh Computer Council):</strong>{' '}
                    {es ? 'Consejo Informático de Bangladesh — infraestructura TIC gubernamental, e-GOV estándares, Smart Bangladesh' : 'Bangladesh Computer Council — government ICT infrastructure, e-GOV standards, Smart Bangladesh'}
                  </li>
                  <li>
                    <strong>National Cybersecurity Strategy:</strong>{' '}
                    {es ? 'Estrategia Nacional de Ciberseguridad — protección infraestructura crítica, CERT-BD, a2i Digital Bangladesh' : 'National Cybersecurity Strategy — critical infrastructure protection, CERT-BD, a2i Digital Bangladesh'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Procurement */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Contratación Pública: e-GP y APP 2006' : 'Public Procurement: e-GP & PPA 2006'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'La contratación pública en Bangladesh se rige por la Ley de Contratación Pública 2006 (APP 2006) y las Normas de Contratación Pública 2008, implementadas por la CPTU (Unidad Técnica Central de Contratación) bajo el IMED (Ministerio de Planificación). El portal e-GP (e-Government Procurement) gestiona todas las licitaciones gubernamentales en línea. Los sistemas de seguridad pública y TIC requieren cumplimiento BCC y aprobación del BGD e-GOV CIRT. Los proyectos Smart City/Safe City pueden financiarse a través del ADB, Banco Mundial, JICA y fondos de desarrollo bilateral (China CEPA, Japón ODA). El Banco de Desarrollo de Bangladesh (BDB) y el Bangladesh Infrastructure Finance Fund Limited (BIFFL) también financian proyectos de seguridad urbana.'
                : "Bangladesh's public procurement is governed by the Public Procurement Act 2006 (PPA 2006) and Public Procurement Rules 2008, implemented by CPTU (Central Procurement Technical Unit) under IMED (Ministry of Planning). The e-GP (e-Government Procurement) portal manages all government bids online. Public security and ICT systems require BCC compliance and BGD e-GOV CIRT approval. Smart City/Safe City projects may be financed through ADB, World Bank, JICA, and bilateral development funds (China CEPA, Japan ODA). Bangladesh Development Bank (BDB) and Bangladesh Infrastructure Finance Fund Limited (BIFFL) also finance urban security projects."}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                {es ? 'Canales de Contratación KabatOne' : 'KabatOne Procurement Channels'}
              </h3>
              <ul className="space-y-1 text-blue-800">
                <li>{es ? '• e-GP portal: licitaciones Bangladesh Police, FSCD, DDM' : '• e-GP portal: Bangladesh Police, FSCD, DDM bids'}</li>
                <li>{es ? '• BCC/Smart Bangladesh: contratos marco TIC gobierno' : '• BCC/Smart Bangladesh: government ICT framework'}</li>
                <li>{es ? '• DMP Safe City: contratación directa policía metropolitana' : '• DMP Safe City: direct metro police procurement'}</li>
                <li>{es ? '• ADB/WB/JICA: financiamiento ODA Safe City/Smart City' : '• ADB/World Bank/JICA: ODA Safe City/Smart City'}</li>
                <li>{es ? '• China CEPA/Japan ODA: fondos bilaterales infraestructura' : '• China CEPA/Japan ODA: bilateral infrastructure funds'}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </h2>
            <div className="space-y-6">
              {activeFaqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          es={es}
          h2={es ? '¿Listo para modernizar la seguridad pública en Bangladesh?' : 'Ready to modernize public safety in Bangladesh?'}
          subtitle={es
            ? 'Conozca cómo KabatOne apoya a la Policía de Bangladesh, FSCD y DDM con una plataforma unificada conforme a la Ley de Seguridad Digital 2018 y compatible con e-GP/APP 2006.'
            : 'See how KabatOne supports Bangladesh Police, FSCD, and DDM with a unified platform compliant with Digital Security Act 2018 and compatible with e-GP/PPA 2006 procurement.'}
        />
      </main>
      <Footer es={es} />
    </>
  )
}
