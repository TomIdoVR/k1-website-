import { generatePageMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareKenya', locale)
}

const faqs = [
  {
    question: "How does KabatOne integrate with the National Police Service (NPS) Kenya structure?",
    answer: "KabatOne aligns with NPS's command structure across 47 county commands, 290+ police stations, and the National Police Service Commission (NPSC) oversight framework — providing unified CAD dispatch, real-time situational awareness, and reporting compatible with Inspector General/NPS operational protocols across Kenya Police Service and Administration Police Service."
  },
  {
    question: "Can KabatOne support Kenya's integrated emergency services including NYS and KFS?",
    answer: "Yes. KabatOne integrates NPS, Kenya Fire and Rescue Service (KFRS), National Youth Service (NYS), Kenya Forest Service (KFS) for wildfire response, Kenya Red Cross, and the National Disaster Operations Centre (NDOC) — enabling unified command visibility and resource coordination across Kenya's emergency ecosystem."
  },
  {
    question: "How does KabatOne handle Kenya Data Protection Act (DPA 2019) compliance?",
    answer: "KabatOne is designed for full DPA 2019 compliance — implementing data subject rights (access, erasure, portability), Data Protection Impact Assessments (DPIAs), lawful basis documentation, mandatory breach notification to the Office of the Data Protection Commissioner (ODPC), and cross-border transfer safeguards."
  },
  {
    question: "Can KabatOne support Nairobi's Safe City and command centre operations?",
    answer: "Yes. KabatOne integrates Nairobi City County CCTV networks, National Traffic Management Centre (NTMC) cameras, Kenya Police ANPR on highways, and Nairobi Metropolitan Services (NMS) command infrastructure — providing AI-powered analytics and unified situational awareness for the 5+ million population Greater Nairobi metro area."
  },
  {
    question: "How does KabatOne support drought and flood disaster operations in Kenya?",
    answer: "KabatOne integrates Kenya Meteorological Department (KMD) weather alerts, National Drought Management Authority (NDMA) early warning systems, NDOC situational reports, and Kenya Red Cross field operations — enabling pre-emptive response dispatch across Kenya's Arid and Semi-Arid Lands (ASAL) and flash flood corridors."
  },
  {
    question: "What cybersecurity standards does KabatOne meet for Kenyan government procurement?",
    answer: "KabatOne aligns with Kenya's Computer Misuse and Cybercrimes Act 2018, KNOC (Kenya National Cyber Coordination Center/KE-CIRT/CC), and ICT Authority standards for government systems — meeting technical specifications under Kenya ICT Action Plan and the Kenya Digital Economy Blueprint."
  },
  {
    question: "What procurement pathway does KabatOne support in Kenya?",
    answer: "KabatOne supports procurement through the Government Procurement Portal (GPP) under the Public Procurement and Asset Disposal Act (PPADA 2015) and PPOA (Public Procurement and Oversight Authority) regulations — including open tender, restricted tender, and direct procurement for security/emergency management systems at both national and county government levels."
  }
]

const faqsEs = [
  {
    question: "¿Cómo se integra KabatOne con la estructura del Servicio Nacional de Policía (NPS) de Kenia?",
    answer: "KabatOne se alinea con la estructura de mando de la NPS en 47 mandos de condado, más de 290 estaciones de policía y el marco de supervisión de la Comisión del Servicio Nacional de Policía (NPSC) — proporcionando despacho CAD unificado, conciencia situacional en tiempo real y reportes compatibles con los protocolos del Inspector General/NPS."
  },
  {
    question: "¿Puede KabatOne soportar los servicios integrados de emergencia de Kenia incluyendo NYS y KFS?",
    answer: "Sí. KabatOne integra NPS, el Servicio de Bomberos y Rescate de Kenia (KFRS), el Servicio Nacional de la Juventud (NYS), el Servicio Forestal de Kenia (KFS) para incendios forestales, la Cruz Roja de Kenia y el Centro Nacional de Operaciones de Desastres (NDOC) — habilitando visibilidad de mando unificada."
  },
  {
    question: "¿Cómo gestiona KabatOne el cumplimiento de la Ley de Protección de Datos de Kenia (DPA 2019)?",
    answer: "KabatOne está diseñado para cumplimiento total con la DPA 2019 — implementando derechos del titular de datos (acceso, borrado, portabilidad), Evaluaciones de Impacto en Protección de Datos (DPIA), documentación de base legal, notificación obligatoria de brechas a la ODPC y salvaguardias de transferencia transfronteriza."
  },
  {
    question: "¿Puede KabatOne soportar el Safe City de Nairobi y las operaciones del centro de mando?",
    answer: "Sí. KabatOne integra las redes CCTV del Condado de la Ciudad de Nairobi, cámaras del Centro Nacional de Gestión de Tráfico (NTMC), ANPR de la Policía de Kenia en autopistas e infraestructura de mando de los Servicios Metropolitanos de Nairobi (NMS) — proporcionando analítica de IA para el área metropolitana del Gran Nairobi con más de 5 millones de habitantes."
  },
  {
    question: "¿Cómo soporta KabatOne las operaciones ante sequías e inundaciones en Kenia?",
    answer: "KabatOne integra alertas meteorológicas del Departamento Meteorológico de Kenia (KMD), sistemas de alerta temprana de la Autoridad Nacional de Gestión de Sequías (NDMA), informes situacionales del NDOC y operaciones de campo de la Cruz Roja de Kenia — habilitando despacho de respuesta preventiva en las Tierras Áridas y Semiáridas (ASAL) de Kenia."
  },
  {
    question: "¿Qué estándares de ciberseguridad cumple KabatOne para contratación gubernamental en Kenia?",
    answer: "KabatOne se alinea con la Ley de Uso Indebido de Computadoras y Ciberdelitos de Kenia de 2018, KNOC (Kenya National Cyber Coordination Center/KE-CIRT/CC) y estándares de la Autoridad TIC para sistemas gubernamentales — cumpliendo especificaciones técnicas bajo el Plan de Acción TIC de Kenia."
  },
  {
    question: "¿Qué vía de contratación soporta KabatOne en Kenia?",
    answer: "KabatOne soporta contratación a través del Portal de Contratación del Gobierno (GPP) bajo la Ley de Contratación Pública y Disposición de Activos (PPADA 2015) y regulaciones PPOA — incluyendo licitación abierta, restringida y contratación directa para sistemas de seguridad y gestión de emergencias a nivel nacional y de condado."
  }
]

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const headline = es
    ? 'Software de Seguridad Pública para Kenia: NPS, KFRS/NDOC, DPA 2019/ODPC y Ley de Ciberdelitos 2018'
    : 'Public Safety Software for Kenya: NPS, KFRS/NDOC, DPA 2019/ODPC & Cybercrimes Act 2018'
  const description = es
    ? 'Plataforma unificada para NPS, KFRS y NYS de Kenia — despacho CAD integrado para 47 mandos de condado y coordinación de desastres NDMA/KMD, gestión de cámaras Nairobi Safe City conforme a DPA 2019 y cumplimiento KE-CIRT con contratación GPP/PPADA 2015.'
    : 'Unified platform for Kenyan NPS, KFRS, and NYS — integrated CAD dispatch for 47 county commands and NDMA/KMD disaster coordination, Nairobi Safe City camera management compliant with DPA 2019, and KE-CIRT/CC cybersecurity compliance with GPP/PPADA 2015 procurement.'
  const url = es
    ? 'https://kabatone.com/es/resources/public-safety-software-kenya'
    : 'https://kabatone.com/resources/public-safety-software-kenya'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources' : 'https://kabatone.com/resources' },
    { name: es ? 'Kenia' : 'Kenya', url },
  ]

  const activeFaqs = es ? faqsEs : faqs

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(headline, description, url, '2026-05-18')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(activeFaqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <Nav />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-red-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-red-300 text-sm font-medium mb-4 uppercase tracking-wide">
              {es ? 'Guía de Mercado — Kenia' : 'Market Guide — Kenya'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {es
                ? 'Software de Seguridad Pública para Kenia'
                : 'Public Safety Software for Kenya'}
            </h1>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              {es
                ? 'NPS/Kenya Police/APS, KFRS/NDOC/NDMA, DPA 2019/ODPC, KE-CIRT/CC y contratación GPP/PPADA 2015'
                : 'NPS/Kenya Police/APS, KFRS/NDOC/NDMA, DPA 2019/ODPC, KE-CIRT/CC & GPP/PPADA 2015 procurement'}
            </p>
            <div className="flex flex-wrap gap-3">
              {['NPS / Kenya Police / APS', 'KFRS / NYS / KFS', 'NDOC / NDMA / KMD', 'DPA 2019 / ODPC', 'KE-CIRT/CC / ICT Authority', 'Nairobi Safe City / NTMC'].map(tag => (
                <span key={tag} className="bg-red-800 text-red-100 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'El Panorama de Seguridad Pública en Kenia' : "Kenya's Public Safety Landscape"}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Kenia es una república con 55+ millones de habitantes, organizada bajo el sistema de gobierno devuelto con 47 condados establecidos por la Constitución de 2010. El Servicio Nacional de Policía (NPS) comprende el Servicio de Policía de Kenia (KPS) y el Servicio de Policía de Administración (APS), supervisados por la Comisión del Servicio Nacional de Policía (NPSC) e independientes bajo la Oficina del Inspector General de la Policía (IG). El NPS opera 47 mandos de condado, más de 290 estaciones de policía y unidades especializadas incluyendo el Grupo de Respuesta a la Fusión (FRG), el Escuadrón de Vuelo, el Servicio General de la Policía (GPS) y el Directorate of Criminal Investigations (DCI).'
                : "Kenya is a republic with 55+ million people, organized under the devolved governance system with 47 counties established by the 2010 Constitution. The National Police Service (NPS) comprises the Kenya Police Service (KPS) and Administration Police Service (APS), overseen by the National Police Service Commission (NPSC) and independent under the Inspector General's Office (IG). NPS operates 47 county commands, 290+ police stations, and specialized units including the Fusion Response Group (FRG), Police Air Wing, General Service Unit (GSU), and Directorate of Criminal Investigations (DCI)."}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Kenia es uno de los principales centros tecnológicos de África (Silicon Savannah, Nairobi). El gobierno ha priorizado la transformación digital a través de la Huawei Safe City de Nairobi, el Centro Nacional de Gestión de Tráfico (NTMC) y la estrategia Digital Economy Blueprint 2019. La Autoridad Nacional de Gestión de Sequías (NDMA) gestiona los sistemas de alerta temprana para las regiones ASAL (60% del territorio), y el Centro Nacional de Operaciones de Desastres (NDOC) coordina la respuesta multiagencia.'
                : "Kenya is one of Africa's leading tech hubs (Silicon Savannah, Nairobi). The government has prioritized digital transformation through the Huawei Nairobi Safe City, National Traffic Management Centre (NTMC), and Digital Economy Blueprint 2019. The National Drought Management Authority (NDMA) manages early warning systems for ASAL regions (60% of the territory), and the National Disaster Operations Centre (NDOC) coordinates multi-agency response."}
            </p>
          </div>
        </section>

        {/* Police & Security Structure */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Estructura Policial y de Seguridad' : 'Police and Security Structure'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Servicio Nacional de Policía (NPS)' : 'National Police Service (NPS)'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• NPS HQ, Vigilance House, Nairobi' : '• NPS HQ, Vigilance House, Nairobi'}</li>
                  <li>{es ? '• 47 mandos de condado (KPS + APS)' : '• 47 county commands (KPS + APS)'}</li>
                  <li>{es ? '• DCI: Directorate of Criminal Investigations' : '• DCI: Directorate of Criminal Investigations'}</li>
                  <li>{es ? '• GSU: General Service Unit (fuerzas especiales)' : '• GSU: General Service Unit (special forces)'}</li>
                  <li>{es ? '• FRG: Fusion Response Group (antiterrorismo)' : '• FRG: Fusion Response Group (counter-terrorism)'}</li>
                  <li>{es ? '• Police Air Wing: helicópteros y vigilancia aérea' : '• Police Air Wing: helicopters and aerial surveillance'}</li>
                  <li>{es ? '• National Police Reservists (NPR): apoyo comunitario' : '• National Police Reservists (NPR): community support'}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Servicios de Emergencia' : 'Emergency Services'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• 999 / 112: números de emergencia nacionales' : '• 999 / 112: national emergency numbers'}</li>
                  <li>{es ? '• KFRS: Servicio de Bomberos y Rescate de Kenia' : '• KFRS: Kenya Fire and Rescue Service'}</li>
                  <li>{es ? '• NYS: Servicio Nacional de la Juventud (rescate/desastres)' : '• NYS: National Youth Service (rescue/disasters)'}</li>
                  <li>{es ? '• NDOC: Centro Nacional de Operaciones de Desastres' : '• NDOC: National Disaster Operations Centre'}</li>
                  <li>{es ? '• NDMA: alerta temprana ASAL, sequías' : '• NDMA: ASAL early warning, drought response'}</li>
                  <li>{es ? '• KMD: Departamento Meteorológico de Kenia' : '• KMD: Kenya Meteorological Department'}</li>
                  <li>{es ? '• KDF: Fuerzas de Defensa de Kenia (apoyo HADR)' : '• KDF: Kenya Defence Forces (HADR support)'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Safe City */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Safe City Nairobi y Vigilancia Urbana' : 'Nairobi Safe City & Urban Surveillance'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Nairobi ha implementado el proyecto Huawei Safe City con más de 1,800 cámaras de vigilancia HD integradas con el Centro de Mando y Control del Gobierno del Condado de Nairobi (NCC) y el Centro Nacional de Gestión de Tráfico (NTMC). El sistema incluye reconocimiento facial, analítica de ANPR en carreteras principales y videovigilancia integrada con el NPS. Mombasa y Kisumu han iniciado proyectos similares de Safe City. El Kenya Highways Authority (KeNHA) gestiona cámaras ANPR en las principales rutas nacionales. Los Servicios Metropolitanos de Nairobi (NMS) han expandido la infraestructura de vigilancia urbana en la Gran Nairobi.'
                : "Nairobi has deployed the Huawei Safe City project with 1,800+ HD surveillance cameras integrated with Nairobi City County Command and Control Centre (NCC) and the National Traffic Management Centre (NTMC). The system includes facial recognition, ANPR analytics on main roads, and video surveillance integrated with NPS. Mombasa and Kisumu have initiated similar Safe City projects. Kenya Highways Authority (KeNHA) manages ANPR cameras on major national routes. Nairobi Metropolitan Services (NMS) has expanded urban surveillance infrastructure across Greater Nairobi."}
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
                    <strong>DPA 2019 (Data Protection Act):</strong>{' '}
                    {es ? 'Ley de Protección de Datos — derechos del titular, obligaciones del responsable/encargado, DPIAs para procesamiento de alto riesgo' : 'Data Protection Act — data subject rights, controller/processor obligations, DPIAs for high-risk processing'}
                  </li>
                  <li>
                    <strong>ODPC (Office of the Data Protection Commissioner):</strong>{' '}
                    {es ? 'Autoridad supervisora independiente — registro de responsables, aplicación, transferencia transfronteriza' : 'Independent supervisory authority — controller registration, enforcement, cross-border transfer'}
                  </li>
                  <li>
                    <strong>{es ? 'DPA Regulations 2021:' : 'DPA Regulations 2021:'}</strong>{' '}
                    {es ? 'Reglamentos de implementación — notificación de brechas en 72h, protección de datos de menores, derechos de portabilidad' : 'Implementing regulations — 72-hour breach notification, children data protection, portability rights'}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Ciberseguridad y TIC' : 'Cybersecurity & ICT'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Computer Misuse and Cybercrimes Act 2018:</strong>{' '}
                    {es ? 'Ley de Ciberdelitos — marco de infracciones cibernéticas, órdenes judiciales de preservación/divulgación de datos' : 'Cybercrimes Act — cybercrime framework, judicial data preservation/disclosure orders'}
                  </li>
                  <li>
                    <strong>KE-CIRT/CC (Kenya National Cyber Coordination Centre):</strong>{' '}
                    {es ? 'CERT nacional (CA/ICT Authority) — respuesta a incidentes, KNOC, estándares de ciberseguridad para sistemas gubernamentales' : 'National CERT (CA/ICT Authority) — incident response, KNOC, cybersecurity standards for government systems'}
                  </li>
                  <li>
                    <strong>ICT Authority Standards:</strong>{' '}
                    {es ? 'Estándares técnicos para sistemas gubernamentales; Digital Economy Blueprint 2019; Kenya National Digital Master Plan' : 'Technical standards for government systems; Digital Economy Blueprint 2019; Kenya National Digital Master Plan'}
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
              {es ? 'Contratación Pública: GPP y PPADA 2015' : 'Public Procurement: GPP & PPADA 2015'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'La contratación pública en Kenia se rige por la Ley de Contratación Pública y Disposición de Activos (PPADA 2015) e implementada por la PPOA (Autoridad de Supervisión de Contratación Pública) y el Government Procurement Portal (GPP/Mygov). Los sistemas de seguridad TIC requieren aprobación de la ICT Authority y cumplimiento de las directrices de seguridad de la CA (Communications Authority). Los gobiernos de condado contratan bajo sus propias comisiones de adquisición con supervisión del Controller of Budget. Los proyectos Smart City en Kenia pueden financiarse a través de préstamos del Banco Mundial, fondos JICA, financiamiento del Banco Africano de Desarrollo (AfDB) y el presupuesto nacional de capital.'
                : "Kenya's public procurement is governed by the Public Procurement and Asset Disposal Act (PPADA 2015) and implemented by the PPOA (Public Procurement and Oversight Authority) and Government Procurement Portal (GPP/Mygov). ICT security systems require ICT Authority approval and Communications Authority (CA) security guideline compliance. County governments procure under their own procurement committees with Controller of Budget oversight. Smart City projects in Kenya may be financed through World Bank loans, JICA funds, African Development Bank (AfDB) financing, and the national capital budget."}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                {es ? 'Canales de Contratación KabatOne' : 'KabatOne Procurement Channels'}
              </h3>
              <ul className="space-y-1 text-blue-800">
                <li>{es ? '• GPP/Mygov: licitaciones NPS, KFRS, NDMA, NTSA' : '• GPP/Mygov: NPS, KFRS, NDMA, NTSA bids'}</li>
                <li>{es ? '• ICT Authority: aprobación sistemas TIC gubernamentales' : '• ICT Authority: government ICT system approval'}</li>
                <li>{es ? '• Condado NCC/Nairobi: contratos Smart City' : '• NCC/Nairobi County: Smart City contracts'}</li>
                <li>{es ? '• AfDB/WB/JICA: financiamiento multilateral Safe City' : '• AfDB/World Bank/JICA: multilateral Safe City financing'}</li>
                <li>{es ? '• KNEC/Dev. Finance: fondos infraestructura digital' : '• KNEC/Development Finance: digital infrastructure funds'}</li>
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
          h2={es ? '¿Listo para modernizar la seguridad pública en Kenia?' : 'Ready to modernize public safety in Kenya?'}
          subtitle={es
            ? 'Conozca cómo KabatOne apoya al NPS, KFRS y NDOC de Kenia con una plataforma unificada conforme a DPA 2019/ODPC y compatible con GPP/PPADA 2015.'
            : 'See how KabatOne supports Kenyan NPS, KFRS, and NDOC with a unified platform compliant with DPA 2019/ODPC and compatible with GPP/PPADA 2015 procurement.'}
        />
      </main>
      <Footer es={es} />
    </>
  )
}
