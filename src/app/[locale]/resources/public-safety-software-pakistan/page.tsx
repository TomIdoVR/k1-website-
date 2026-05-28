import { generatePageMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwarePakistan', locale)
}

const faqs = [
  {
    question: "How does KabatOne integrate with Pakistan's federal and provincial police structure?",
    answer: "KabatOne aligns with Pakistan's decentralized police structure — integrating with the Inspector General of Police (IGP) offices across 4 provinces (Punjab, Sindh, KPK, Balochistan), Islamabad Capital Territory Police (ICTP), Azad Jammu & Kashmir Police, and Gilgit-Baltistan Police — providing unified CAD dispatch, operations center management, and cross-agency coordination compatible with Police Order 2002 command protocols."
  },
  {
    question: "Can KabatOne support Pakistan's Rescue 1122 and emergency services?",
    answer: "Yes. KabatOne integrates Punjab Emergency Service (PES/Rescue 1122), Khyber Pakhtunkhwa Rescue 1122, Sindh Emergency Rescue Service, and Edhi Foundation emergency response — enabling unified call-taking, cross-agency dispatch, and incident tracking. The platform also supports PDMA (Provincial Disaster Management Authority) and NDMA (National Disaster Management Authority) operations centers."
  },
  {
    question: "How does KabatOne handle Pakistan Personal Data Protection Act (PDPA 2023) compliance?",
    answer: "KabatOne is designed for compliance with Pakistan's PDPA 2023 — implementing data subject rights management, lawful processing basis documentation, Data Protection Officer (DPO) accountability frameworks, mandatory breach notification to the National Commission for Personal Data Protection (NCPDP), and cross-border data transfer safeguards."
  },
  {
    question: "Can KabatOne support Safe City operations in Lahore, Karachi, and Islamabad?",
    answer: "Yes. KabatOne integrates Punjab Safe Cities Authority (PSCA) Lahore network with 8,000+ cameras, Islamabad Safe City project (ISC) with 1,900+ cameras, Karachi Safe City with 3,000+ cameras, and the Integrated Traffic Management System (ITMS) — providing AI-powered analytics, ANPR integration, and unified command visibility for Pakistan's major cities."
  },
  {
    question: "How does KabatOne manage earthquake and flood disaster operations in Pakistan?",
    answer: "KabatOne integrates NDMA situational reports, PMD (Pakistan Meteorological Department) weather alerts, PDMA operations centers, and Flash Flood Early Warning Systems (FFEWS) — supporting response to Pakistan's catastrophic floods (2022: 33 million affected, 1,700+ deaths), Karakoram/Hindu Kush glacial outbursts (GLOF), and earthquake response (Balochistan/KPK seismic zones)."
  },
  {
    question: "What cybersecurity standards does KabatOne meet for Pakistani government procurement?",
    answer: "KabatOne aligns with Pakistan Telecommunication Authority (PTA) regulations, PECA 2016 (Prevention of Electronic Crimes Act), National Cyber Security Policy 2021, and IGNITE (National Technology Fund) standards for government ICT systems — meeting requirements for procurement under PPRA (Public Procurement Regulatory Authority) rules."
  },
  {
    question: "What procurement pathway does KabatOne support in Pakistan?",
    answer: "KabatOne supports procurement through PPRA (Public Procurement Regulatory Authority) e-procurement portal under PPRA Rules 2004 (amended 2017), provincial procurement rules (SPRRA/KPPRA/BPPRA), and Safe City Authority direct procurement for security systems — including open competitive bidding, request for proposals, and single-stage bidding for emergency management systems."
  }
]

const faqsEs = [
  {
    question: "¿Cómo se integra KabatOne con la estructura policial federal y provincial de Pakistán?",
    answer: "KabatOne se alinea con la estructura policial descentralizada de Pakistán — integrándose con las oficinas del Inspector General de Policía (IGP) en 4 provincias (Punjab, Sindh, KPK, Baluchistán), la Policía del Territorio de la Capital de Islamabad (ICTP), la Policía de Azad Jammu & Cachemira y la Policía de Gilgit-Baltistán — proporcionando despacho CAD unificado compatible con los protocolos del Decreto Policial 2002."
  },
  {
    question: "¿Puede KabatOne soportar el Rescue 1122 y los servicios de emergencia de Pakistán?",
    answer: "Sí. KabatOne integra el Servicio de Emergencia del Punjab (PES/Rescue 1122), Rescue 1122 de Khyber Pakhtunkhwa, el Servicio de Rescate de Emergencia de Sindh y la respuesta de emergencia de la Fundación Edhi — habilitando despacho unificado y seguimiento de incidentes. La plataforma también soporta los centros de operaciones de PDMA y NDMA."
  },
  {
    question: "¿Cómo gestiona KabatOne el cumplimiento de la Ley de Protección de Datos Personales de Pakistán (PDPA 2023)?",
    answer: "KabatOne está diseñado para cumplimiento con la PDPA 2023 de Pakistán — implementando gestión de derechos del titular, documentación de base legal, marcos de responsabilidad del Oficial de Protección de Datos (DPO), notificación obligatoria de brechas a la NCPDP y salvaguardias de transferencia transfronteriza de datos."
  },
  {
    question: "¿Puede KabatOne soportar operaciones Safe City en Lahore, Karachi e Islamabad?",
    answer: "Sí. KabatOne integra la red de la Autoridad de Ciudades Seguras del Punjab (PSCA) en Lahore con 8,000+ cámaras, el proyecto Safe City de Islamabad (ISC) con 1,900+ cámaras, Safe City de Karachi con 3,000+ cámaras y el Sistema Integrado de Gestión de Tráfico (ITMS) — proporcionando analítica de IA, integración ANPR y visibilidad de mando unificada."
  },
  {
    question: "¿Cómo gestiona KabatOne las operaciones ante terremotos e inundaciones en Pakistán?",
    answer: "KabatOne integra informes situacionales de NDMA, alertas meteorológicas del PMD (Departamento Meteorológico de Pakistán), centros de operaciones PDMA y Sistemas de Alerta Temprana de Inundaciones Repentinas (FFEWS) — apoyando la respuesta ante las inundaciones catastróficas de 2022 (33 millones de afectados, 1,700+ fallecidos) y eventos GLOF."
  },
  {
    question: "¿Qué estándares de ciberseguridad cumple KabatOne para la contratación gubernamental en Pakistán?",
    answer: "KabatOne se alinea con las regulaciones de la PTA (Autoridad de Telecomunicaciones de Pakistán), PECA 2016 (Ley de Prevención de Delitos Electrónicos), la Política Nacional de Ciberseguridad 2021 e IGNITE — cumpliendo los requisitos para contratación bajo las reglas de la PPRA (Autoridad Reguladora de Contratación Pública)."
  },
  {
    question: "¿Qué vía de contratación soporta KabatOne en Pakistán?",
    answer: "KabatOne soporta contratación a través del portal de e-procurement de la PPRA (Autoridad Reguladora de Contratación Pública) bajo las Reglas PPRA 2004 (modificadas 2017), reglas provinciales de contratación (SPRRA/KPPRA/BPPRA) y contratación directa de autoridades Safe City — incluyendo licitación competitiva abierta, solicitudes de propuestas y licitación uniétapa para sistemas de gestión de emergencias."
  }
]

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const headline = es
    ? 'Software de Seguridad Pública para Pakistán: Policía Provincial, Rescue 1122, NDMA, PDPA 2023 y PECA/PTA'
    : 'Public Safety Software for Pakistan: Provincial Police, Rescue 1122, NDMA, PDPA 2023 & PECA/PTA'
  const description = es
    ? 'Plataforma unificada para policía provincial, Rescue 1122 y NDMA de Pakistán — despacho CAD integrado para 4 provincias y coordinación de desastres NDMA/PMD, gestión de cámaras Safe City conforme a PDPA 2023 y cumplimiento PECA/PTA con contratación PPRA 2004.'
    : 'Unified platform for Pakistan provincial police, Rescue 1122, and NDMA — integrated CAD dispatch for 4 provinces and NDMA/PMD disaster coordination, PDPA 2023-compliant Safe City camera management, and PECA/PTA cybersecurity compliance with PPRA 2004 procurement.'
  const url = es
    ? 'https://kabatone.com/es/resources/public-safety-software-pakistan/'
    : 'https://kabatone.com/resources/public-safety-software-pakistan/'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    { name: es ? 'Pakistán' : 'Pakistan', url },
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
              {es ? 'Guía de Mercado — Pakistán' : 'Market Guide — Pakistan'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {es
                ? 'Software de Seguridad Pública para Pakistán'
                : 'Public Safety Software for Pakistan'}
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              {es
                ? 'Policía Provincial (Punjab/Sindh/KPK/Baluchistán), Rescue 1122, NDMA/PDMA, PDPA 2023/NCPDP, PECA/PTA y contratación PPRA 2004'
                : 'Provincial Police (Punjab/Sindh/KPK/Balochistan), Rescue 1122, NDMA/PDMA, PDPA 2023/NCPDP, PECA/PTA & PPRA 2004 procurement'}
            </p>
            <div className="flex flex-wrap gap-3">
              {['Punjab/Sindh/KPK Police', 'Rescue 1122 / PDMA / NDMA', 'PSCA Lahore 8,000+ cameras', 'PDPA 2023 / NCPDP', 'PECA 2016 / PTA / IGNITE', 'PPRA 2004 / e-procurement'].map(tag => (
                <span key={tag} className="bg-green-800 text-green-100 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? "El Panorama de Seguridad Pública en Pakistán" : "Pakistan's Public Safety Landscape"}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Pakistán es la quinta nación más poblada del mundo con 230+ millones de habitantes, organizada como república federal con 4 provincias (Punjab, Sindh, Khyber Pakhtunkhwa/KPK, Baluchistán), el Territorio de la Capital Federal (Islamabad/ICT), Azad Jammu & Cachemira (AJK) y Gilgit-Baltistán (GB). La policía en Pakistán es principalmente un asunto provincial bajo el Decreto Policial 2002 — cada provincia tiene su propio Inspector General de Policía (IGP) con estructura de Regiones, Distritos y Círculos. Punjab Police es la mayor fuerza policial provincial con 200,000+ efectivos. La Policía de Islamabad (ICTP) está bajo el control del Ministerio del Interior federal.'
                : "Pakistan is the world's fifth most populous nation with 230+ million people, organized as a federal republic with 4 provinces (Punjab, Sindh, Khyber Pakhtunkhwa/KPK, Balochistan), the Federal Capital Territory (Islamabad/ICT), Azad Jammu & Kashmir (AJK), and Gilgit-Baltistan (GB). Policing in Pakistan is primarily a provincial matter under Police Order 2002 — each province has its own Inspector General of Police (IGP) with Regions, Districts, and Circles structure. Punjab Police is the largest provincial force with 200,000+ personnel. Islamabad Police (ICTP) is under federal Ministry of Interior control."}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'La Autoridad Nacional de Gestión de Desastres (NDMA) y las Autoridades Provinciales de Gestión de Desastres (PDMA) coordinan la respuesta multiagencia. Las inundaciones monzónicas de 2022 — las peores en la historia de Pakistán — afectaron a 33 millones de personas, causaron más de 1,700 fallecidos y daños por 30,000 millones de dólares, sumergiendo un tercio del país. El Departamento Meteorológico de Pakistán (PMD) emite alertas de ciclones y monzones. Las regiones GLOF (Glacial Lake Outburst Flood) del Karakoram tienen más de 3,000 lagos glaciares — la mayor densidad del mundo.'
                : "The National Disaster Management Authority (NDMA) and Provincial Disaster Management Authorities (PDMAs) coordinate multi-agency response. The 2022 monsoon floods — Pakistan's worst in history — affected 33 million people, caused 1,700+ deaths, and caused $30 billion in damages, submerging one-third of the country. Pakistan Meteorological Department (PMD) issues cyclone and monsoon alerts. Pakistan's Karakoram GLOF (Glacial Lake Outburst Flood) regions have 3,000+ glacial lakes — the world's highest density."}
            </p>
          </div>
        </section>

        {/* Police Structure */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Estructura Policial y de Emergencias' : 'Police and Emergency Structure'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Fuerzas Policiales Provinciales' : 'Provincial Police Forces'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• Punjab Police: IGP, 200,000+ efectivos, 9 regiones' : '• Punjab Police: IGP, 200,000+ personnel, 9 regions'}</li>
                  <li>{es ? '• Sindh Police: IGP, Karachi + 7 regiones' : '• Sindh Police: IGP, Karachi + 7 regions'}</li>
                  <li>{es ? '• KPK Police: IGP, ex-FATA merged districts' : '• KPK Police: IGP, ex-FATA merged districts'}</li>
                  <li>{es ? '• Balochistan Police: IGP, área más grande del país' : '• Balochistan Police: IGP, largest provincial area'}</li>
                  <li>{es ? '• ICTP: Policía de Islamabad (Ministerio del Interior)' : '• ICTP: Islamabad Capital Territory Police (MOI)'}</li>
                  <li>{es ? '• Rangers Punjab / Sindh Rangers: fuerzas paramilitar' : '• Rangers Punjab / Sindh Rangers: paramilitary forces'}</li>
                  <li>{es ? '• FC KPK / FC Balochistan: Frontier Corps' : '• FC KPK / FC Balochistan: Frontier Corps'}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Servicios de Emergencia' : 'Emergency Services'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• Rescue 1122: Punjab Emergency Service (PES/ambulancia/bomberos)' : '• Rescue 1122: Punjab Emergency Service (PES/EMS/fire)'}</li>
                  <li>{es ? '• Rescue 1122 KPK: servicio de emergencia de KPK' : '• Rescue 1122 KPK: KPK emergency service'}</li>
                  <li>{es ? '• NDMA: Autoridad Nacional de Gestión de Desastres' : '• NDMA: National Disaster Management Authority'}</li>
                  <li>{es ? '• PDMA: Autoridades Provinciales de Gestión de Desastres' : '• PDMA: Provincial Disaster Management Authorities'}</li>
                  <li>{es ? '• PMD: Departamento Meteorológico de Pakistán' : '• PMD: Pakistan Meteorological Department'}</li>
                  <li>{es ? '• Pakistan Army: apoyo HADR (Operación Radd-ul-Fasad)' : '• Pakistan Army: HADR support (Op Radd-ul-Fasad)'}</li>
                  <li>{es ? '• Edhi Foundation: mayor ONG de ambulancias del mundo' : '• Edhi Foundation: world largest private ambulance network'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Safe City */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Safe City: Lahore, Islamabad y Karachi' : 'Safe City: Lahore, Islamabad & Karachi'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Pakistán ha invertido masivamente en infraestructura Safe City. La Autoridad de Ciudades Seguras del Punjab (PSCA) gestiona la red de Lahore con más de 8,000 cámaras HD, reconocimiento facial, ANPR y el Centro de Mando y Control (C3) en Safe City House. El proyecto Safe City de Islamabad (ISC) despliega más de 1,900 cámaras integradas con la ICTP y el ISB Traffic Police. Karachi Safe City gestiona más de 3,000 cámaras con el Centro de Mando de la Policía de Sindh. La Autoridad de Ciudades Seguras de KPK (KSCA) ha desplegado cámaras en Peshawar y principales ciudades de KPK.'
                : "Pakistan has invested massively in Safe City infrastructure. Punjab Safe Cities Authority (PSCA) manages the Lahore network with 8,000+ HD cameras, facial recognition, ANPR, and the Command and Control Centre (C3) at Safe City House. Islamabad Safe City (ISC) deploys 1,900+ cameras integrated with ICTP and ISB Traffic Police. Karachi Safe City manages 3,000+ cameras with the Sindh Police Command Centre. KPK Safe Cities Authority (KSCA) has deployed cameras in Peshawar and major KPK cities."}
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
                  {es ? 'Protección de Datos y Privacidad' : 'Data Protection & Privacy'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>PDPA 2023 (Personal Data Protection Act):</strong>{' '}
                    {es ? 'Ley de Protección de Datos Personales de Pakistán — derechos del titular, consentimiento, transferencia transfronteriza, notificación de brechas a NCPDP' : 'Pakistan Personal Data Protection Act — data subject rights, consent, cross-border transfer, breach notification to NCPDP'}
                  </li>
                  <li>
                    <strong>NCPDP (National Commission for Personal Data Protection):</strong>{' '}
                    {es ? 'Comisión Nacional de Protección de Datos Personales — autoridad supervisora creada por PDPA 2023' : 'National supervisory authority created by PDPA 2023'}
                  </li>
                  <li>
                    <strong>PTA Data Protection:</strong>{' '}
                    {es ? 'Autoridad de Telecomunicaciones de Pakistán — directrices de protección de datos para sistemas TIC y telecomunicaciones' : 'Pakistan Telecommunication Authority — data protection guidelines for ICT and telecom systems'}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Ciberseguridad y TIC' : 'Cybersecurity & ICT'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>PECA 2016 (Prevention of Electronic Crimes Act):</strong>{' '}
                    {es ? 'Ley de Prevención de Delitos Electrónicos — marco de ciberdelitos; FIA Cybercrime Wing; PTA enforcement' : 'Prevention of Electronic Crimes Act — cybercrime framework; FIA Cybercrime Wing; PTA enforcement'}
                  </li>
                  <li>
                    <strong>National Cyber Security Policy 2021:</strong>{' '}
                    {es ? 'Política Nacional de Ciberseguridad 2021 — IGNITE, CERT-Pakistan, protección de infraestructura crítica' : 'National Cybersecurity Policy 2021 — IGNITE, CERT-Pakistan, critical infrastructure protection'}
                  </li>
                  <li>
                    <strong>IGNITE (National Technology Fund):</strong>{' '}
                    {es ? 'Fondo Nacional de Tecnología — estándares TIC y ciberseguridad para sistemas gubernamentales; NICL/NCCS' : 'National Technology Fund — ICT and cybersecurity standards for government systems; NICL/NCCS'}
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
              {es ? 'Contratación Pública: PPRA y Reglas de Contratación Provincial' : 'Public Procurement: PPRA & Provincial Procurement Rules'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'La contratación pública federal en Pakistán se rige por la PPRA (Autoridad Reguladora de Contratación Pública) bajo las Reglas PPRA 2004 (modificadas 2017) y el portal de e-procurement. Las provincias tienen sus propias autoridades: SPRRA (Sindhiaran Public Procurement Regulatory Authority), KPPRA (Khyber Pakhtunkhwa Public Procurement Regulatory Authority) y BPPRA (Balochistan Public Procurement Regulatory Authority). Las autoridades Safe City (PSCA, ISC, KSCA) tienen mandatos de contratación directa para sistemas integrados de vigilancia y seguridad. El financiamiento externo incluye préstamos del ADB, BID y Banco Mundial para modernización de infraestructura de seguridad pública.'
                : "Federal public procurement in Pakistan is governed by PPRA (Public Procurement Regulatory Authority) under PPRA Rules 2004 (amended 2017) and the e-procurement portal. Provinces have their own authorities: SPRRA (Sindh Public Procurement Regulatory Authority), KPPRA (Khyber Pakhtunkhwa Public Procurement Regulatory Authority), and BPPRA (Balochistan Public Procurement Regulatory Authority). Safe City authorities (PSCA, ISC, KSCA) have direct procurement mandates for integrated surveillance and security systems. External financing includes ADB, IDB, and World Bank loans for public safety infrastructure modernization."}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                {es ? 'Canales de Contratación KabatOne' : 'KabatOne Procurement Channels'}
              </h3>
              <ul className="space-y-1 text-blue-800">
                <li>{es ? '• PPRA portal: licitaciones NDMA, ICTP, Min. Interior federal' : '• PPRA portal: NDMA, ICTP, federal Ministry of Interior bids'}</li>
                <li>{es ? '• PSCA/ISC/KSCA: contratación directa Safe City' : '• PSCA/ISC/KSCA: direct Safe City procurement'}</li>
                <li>{es ? '• SPRRA/KPPRA/BPPRA: contratación provincial' : '• SPRRA/KPPRA/BPPRA: provincial procurement'}</li>
                <li>{es ? '• Punjab Rescue 1122 / PDMA Punjab: contratos EMS' : '• Punjab Rescue 1122 / PDMA Punjab: EMS contracts'}</li>
                <li>{es ? '• ADB/IDB/WB: financiamiento ODA modernización seguridad' : '• ADB/IDB/World Bank: ODA public safety modernization'}</li>
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
          h2={es ? '¿Listo para modernizar la seguridad pública en Pakistán?' : 'Ready to modernize public safety in Pakistan?'}
          subtitle={es
            ? 'Conozca cómo KabatOne apoya a la Policía Provincial, Rescue 1122 y NDMA de Pakistán con una plataforma unificada conforme a PDPA 2023/NCPDP y compatible con PPRA 2004.'
            : 'See how KabatOne supports Pakistan Provincial Police, Rescue 1122, and NDMA with a unified platform compliant with PDPA 2023/NCPDP and compatible with PPRA 2004 procurement.'}
        />
      </main>
      <Footer es={es} />
    </>
  )
}
