import { generatePageMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwarePhilippines', locale)
}

const faqs = [
  {
    question: "How does KabatOne support the Philippine National Police's 17 regional commands?",
    answer: "KabatOne integrates with PNP's command hierarchy across 17 regional offices, 82 provincial police offices, and 1,400+ city/municipal stations — providing unified CAD dispatch, real-time situational awareness, and IMPLAN/SOPLAN-compatible reporting aligned with DILG-NHQ protocols."
  },
  {
    question: "Can KabatOne coordinate NDRRMC multi-agency disaster response?",
    answer: "Yes. KabatOne's operations center integrates NDRRMC member agencies including PNP, BFP, PCG, and AFP — synchronizing EOC dashboards, resource tracking, and incident logs with RA 10121 (DRRM Act) protocols and PDNA workflows across all DRRM levels."
  },
  {
    question: "How does the platform handle DICT/e-Government interoperability in the Philippines?",
    answer: "KabatOne supports DICT interoperability standards and can integrate with PhilSys (national ID), eGovPH portals, and NG-112 Next Generation Emergency Call systems — enabling data sharing across national agencies per EO 2 (FOI) and the DICT ICT roadmap."
  },
  {
    question: "Is KabatOne compliant with the Philippine Data Privacy Act (RA 10173)?",
    answer: "Yes. KabatOne is designed for full DPA/NPC compliance — implementing Privacy Impact Assessments (PIAs), data subject rights management, mandatory breach notification within 72 hours, and privacy-by-design video analytics for CCTV/NatSec compliance."
  },
  {
    question: "How does KabatOne manage typhoon and flood operations in the Philippines?",
    answer: "KabatOne integrates PAGASA weather alerts, PHIVOLCS volcano/earthquake feeds, and NDRRMC situational reports — enabling pre-emptive evacuation dispatch, rescue coordination, and post-disaster damage assessment across typhoon-prone provinces."
  },
  {
    question: "Can the platform scale across Metro Manila's 16 cities and NCR policing?",
    answer: "KabatOne handles Metro Manila's multi-city complexity — coordinating NCR Regional Police Command, MMDA traffic management, Manila 911, and Quezon City 911 — with a unified operations picture for the 13+ million population National Capital Region."
  },
  {
    question: "What procurement pathway does KabatOne support under Philippine law?",
    answer: "KabatOne supports procurement through PhilGEPS (Government Electronic Procurement System) under RA 9184 (Government Procurement Reform Act) — including competitive bidding, alternative procurement modes, and DBM-approved ICT procurement for national and LGU agencies."
  }
]

const faqsEs = [
  {
    question: "¿Cómo apoya KabatOne los 17 mandos regionales de la Philippine National Police?",
    answer: "KabatOne se integra con la jerarquía de mando de la PNP en 17 oficinas regionales, 82 oficinas provinciales y más de 1,400 estaciones municipales — proporcionando despacho CAD unificado, conciencia situacional en tiempo real e informes compatibles con IMPLAN/SOPLAN alineados con protocolos DILG-NHQ."
  },
  {
    question: "¿Puede KabatOne coordinar la respuesta multiagencia ante desastres del NDRRMC?",
    answer: "Sí. La central de operaciones de KabatOne integra agencias miembro del NDRRMC incluidas PNP, BFP, PCG y AFP — sincronizando dashboards EOC, seguimiento de recursos y registros de incidentes con protocolos de la RA 10121 (Ley DRRM) y flujos PDNA."
  },
  {
    question: "¿Cómo maneja la plataforma la interoperabilidad DICT/eGobierno en Filipinas?",
    answer: "KabatOne soporta estándares de interoperabilidad DICT y puede integrarse con PhilSys (ID nacional), portales eGovPH y sistemas NG-112 de llamada de emergencia de nueva generación — permitiendo intercambio de datos entre agencias conforme a la EO 2 (FOI) y la hoja de ruta TIC del DICT."
  },
  {
    question: "¿Es KabatOne conforme con la Ley de Privacidad de Datos de Filipinas (RA 10173)?",
    answer: "Sí. KabatOne está diseñado para cumplimiento total con DPA/NPC — implementando Evaluaciones de Impacto en la Privacidad (PIA), gestión de derechos de titulares, notificación obligatoria de brechas en 72 horas y videoanalítica de privacidad-por-diseño para CCTV."
  },
  {
    question: "¿Cómo gestiona KabatOne las operaciones de tifones e inundaciones en Filipinas?",
    answer: "KabatOne integra alertas meteorológicas de PAGASA, feeds sísmicos/volcánicos de PHIVOLCS e informes situacionales del NDRRMC — habilitando despacho de evacuación preventiva, coordinación de rescate y evaluación de daños post-desastre en provincias propensas a tifones."
  },
  {
    question: "¿Puede la plataforma escalar en las 16 ciudades de Metro Manila y el NCR?",
    answer: "KabatOne gestiona la complejidad multiciudad de Metro Manila — coordinando el Mando Policial Regional NCR, gestión de tráfico MMDA, Manila 911 y Quezon City 911 — con una imagen operacional unificada para la Región Capital Nacional de más de 13 millones de habitantes."
  },
  {
    question: "¿Qué vía de contratación soporta KabatOne bajo la legislación filipina?",
    answer: "KabatOne soporta contratación a través de PhilGEPS (Sistema Electrónico de Contratación del Gobierno) bajo la RA 9184 (Ley de Reforma de Contratación) — incluyendo licitación competitiva, modos alternativos y contratación TIC aprobada por DBM para agencias nacionales y LGU."
  }
]

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const headline = es
    ? 'Software de Seguridad Pública para Filipinas: PNP, BFP/PCG, NDRRMC/PAGASA, RA 10173 y DICT/Ciberseguridad'
    : 'Public Safety Software for the Philippines: PNP, BFP/PCG, NDRRMC/PAGASA, RA 10173 & DICT Cybersecurity'
  const description = es
    ? 'Plataforma unificada para PNP, BFP y PCG de Filipinas — despacho CAD integrado para 17 regiones y coordinación de desastres NDRRMC/PAGASA, gestión de cámaras conforme a RA 10173/NPC y cumplimiento DICT con contratación PhilGEPS/RA 9184.'
    : 'Unified platform for Philippine PNP, BFP, and PCG — integrated CAD dispatch for 17 regions and NDRRMC/PAGASA disaster coordination, RA 10173/NPC-compliant camera management, and DICT cybersecurity compliance with PhilGEPS/RA 9184 procurement.'
  const url = es
    ? 'https://kabatone.com/es/resources/public-safety-software-philippines'
    : 'https://kabatone.com/resources/public-safety-software-philippines'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources' : 'https://kabatone.com/resources' },
    { name: es ? 'Filipinas' : 'Philippines', url },
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
        <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-blue-300 text-sm font-medium mb-4 uppercase tracking-wide">
              {es ? 'Guía de Mercado — Filipinas' : 'Market Guide — Philippines'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {es
                ? 'Software de Seguridad Pública para Filipinas'
                : 'Public Safety Software for the Philippines'}
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {es
                ? 'PNP, BFP, PCG, NDRRMC/PAGASA, RA 10173/NPC y contratación PhilGEPS/RA 9184'
                : 'PNP, BFP, PCG, NDRRMC/PAGASA, RA 10173/NPC & PhilGEPS/RA 9184 procurement'}
            </p>
            <div className="flex flex-wrap gap-3">
              {['PNP / BFP / PCG', 'NDRRMC / PAGASA / PHIVOLCS', 'RA 10173 / NPC', 'DICT / CICC', 'PhilGEPS / RA 9184', 'Manila 911 / Quezon City 911'].map(tag => (
                <span key={tag} className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'El Panorama de Seguridad Pública en Filipinas' : 'The Philippine Public Safety Landscape'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Filipinas es un archipiélago de más de 7,600 islas con 110+ millones de habitantes, gobernado a través de 17 regiones administrativas, 82 provincias y 1,715 municipios. La Philippine National Police (PNP) — supervisada por el DILG — cuenta con 225,000+ efectivos organizados en 17 Oficinas Regionales de Policía (RPO), la Oficina Policial Nacional de la Región Capital (NCRPO) y más de 1,400 estaciones de policía municipales y de ciudad. El Bureau of Fire Protection (BFP) gestiona la respuesta contra incendios y rescate en todo el país, mientras que la Philippine Coast Guard (PCG) patrulla más de 36,000 km de costas.'
                : 'The Philippines is an archipelago of over 7,600 islands with 110+ million people, governed through 17 administrative regions, 82 provinces, and 1,715 municipalities. The Philippine National Police (PNP) — supervised by DILG — has 225,000+ personnel organized into 17 Regional Police Offices (RPOs), the National Capital Region Police Office (NCRPO), and 1,400+ city and municipal police stations. The Bureau of Fire Protection (BFP) manages fire response and rescue nationwide, while the Philippine Coast Guard (PCG) patrols over 36,000 km of coastline.'}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'El Consejo Nacional de Reducción y Gestión del Riesgo de Desastres (NDRRMC) coordina la respuesta multiagencia bajo la RA 10121 (Ley DRRM de 2010), con PAGASA (agencia meteorológica), PHIVOLCS (volcanes y sismos) y la OCD (Defensa Civil). Filipinas es uno de los países más vulnerables a desastres del mundo: más de 20 tifones anuales, 23 volcanes activos y ubicación en el Anillo de Fuego del Pacífico. El Departamento de TIC (DICT) lidera la digitalización del gobierno a través del Plan Nacional TIC y la plataforma eGovPH.'
                : "The National Disaster Risk Reduction and Management Council (NDRRMC) coordinates multi-agency response under RA 10121 (DRRM Act of 2010), with PAGASA (weather agency), PHIVOLCS (volcanoes and earthquakes), and OCD (Civil Defense). The Philippines is among the world's most disaster-prone countries: 20+ typhoons annually, 23 active volcanoes, and location on the Pacific Ring of Fire. The Department of Information and Communications Technology (DICT) leads government digitalization through the National ICT Plan and the eGovPH platform."}
            </p>
          </div>
        </section>

        {/* Policing Structure */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Estructura Policial y de Seguridad' : 'Police and Security Structure'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Philippine National Police (PNP)' : 'Philippine National Police (PNP)'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• PHQ Camp Crame, Quezon City' : '• PHQ Camp Crame, Quezon City'}</li>
                  <li>{es ? '• 17 Oficinas Regionales de Policía (RPO)' : '• 17 Regional Police Offices (RPOs)'}</li>
                  <li>{es ? '• NCRPO: 16 ciudades de Metro Manila' : '• NCRPO: 16 Metro Manila cities'}</li>
                  <li>{es ? '• 82 oficinas provinciales, 1,400+ estaciones' : '• 82 provincial offices, 1,400+ stations'}</li>
                  <li>{es ? '• SAF (Fuerzas de Acción Especial), CIDG' : '• SAF (Special Action Force), CIDG'}</li>
                  <li>{es ? '• PNP Maritime Group / AVSEGROUP' : '• PNP Maritime Group / AVSEGROUP'}</li>
                  <li>{es ? '• PNP Highway Patrol Group (HPG)' : '• PNP Highway Patrol Group (HPG)'}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Servicios de Emergencia' : 'Emergency Services'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• BFP: Bureau of Fire Protection (bomberos)' : '• BFP: Bureau of Fire Protection (fire & rescue)'}</li>
                  <li>{es ? '• PCG: Philippine Coast Guard (17 Distritos)' : '• PCG: Philippine Coast Guard (17 Districts)'}</li>
                  <li>{es ? '• NDRRMC: coordinación multiagencia RA 10121' : '• NDRRMC: multi-agency coordination RA 10121'}</li>
                  <li>{es ? '• OCD: Defensa Civil, 17 regiones' : '• OCD: Office of Civil Defense, 17 regions'}</li>
                  <li>{es ? '• DOH: Red de Respuesta Médica (HEMS)' : '• DOH: Health Emergency Management Staff (HEMS)'}</li>
                  <li>{es ? '• AFP: apoyo militar (AFP-RSBS, WESMINCOM)' : '• AFP: military support (AFP-RSBS, WESMINCOM)'}</li>
                  <li>{es ? '• Manila 911 / Quezon City 911 / NCR Unified 911' : '• Manila 911 / Quezon City 911 / NCR Unified 911'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Disaster Management */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Gestión de Desastres: Tifones, Volcanes y Sismos' : 'Disaster Management: Typhoons, Volcanoes & Earthquakes'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Filipinas experimenta 20+ tifones anuales, incluyendo los devastadores Yolanda/Haiyan (2013, más de 6,000 fallecidos) y Odette/Rai (2021). PAGASA emite Señales de Advertencia de Tifón (PSWS 1–4) y gestiona la Red de Alerta Temprana del NDRRMC. PHIVOLCS monitorea 23 volcanes activos — incluidos Mayon (Albay), Taal (Batangas) y Kanlaon (Negros) — y la Red Sísmica Nacional (PSN). El Proyecto READY del OCD mapea zonas de riesgo en los 1,715 municipios.'
                : "The Philippines experiences 20+ typhoons annually, including the devastating Yolanda/Haiyan (2013, 6,000+ deaths) and Odette/Rai (2021). PAGASA issues Typhoon Signal Warning Scale (PSWS 1–4) advisories and manages the NDRRMC Early Warning Network. PHIVOLCS monitors 23 active volcanoes — including Mayon (Albay), Taal (Batangas), and Kanlaon (Negros) — and the Philippine Seismic Network (PSN). OCD's READY Project maps hazard zones across all 1,715 municipalities."}
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
              <h3 className="font-semibold text-yellow-900 mb-2">
                {es ? 'Integración KabatOne para Emergencias Nacionales' : 'KabatOne Integration for National Emergencies'}
              </h3>
              <ul className="space-y-1 text-yellow-800">
                <li>{es ? '• Feeds en tiempo real: PAGASA PSWS, PHIVOLCS, NDRRMC' : '• Real-time feeds: PAGASA PSWS, PHIVOLCS, NDRRMC alerts'}</li>
                <li>{es ? '• Despacho de evacuación preventiva basado en señales PSWS' : '• Pre-emptive evacuation dispatch based on PSWS signals'}</li>
                <li>{es ? '• Coordinación de rescate PCG / BFP / PNP / AFP' : '• PCG / BFP / PNP / AFP rescue coordination'}</li>
                <li>{es ? '• Evaluación de daños post-desastre PDNA integrada' : '• Integrated PDNA post-disaster damage assessment'}</li>
                <li>{es ? '• Gestión de centros de evacuación LGU' : '• LGU evacuation centre management'}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CCTV & Surveillance */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'CCTV Urbano: Safe City Manila y NCR' : 'Urban CCTV: Safe City Manila & NCR'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Metro Manila ha expandido su red de videovigilancia a través de iniciativas Safe City con más de 20,000 cámaras CCTV en la NCR, incluyendo los proyectos de la MMDA (Metropolitan Manila Development Authority) y los sistemas 911 de Quezon City. La PNP gestiona el Crime Monitoring Center nacional y cámaras ANPR en autopistas clave. Ciudades como Davao, Cebu y Cagayan de Oro han implementado sus propias redes Safe City integradas con centros de operaciones policiales.'
                : 'Metro Manila has expanded its video surveillance network through Safe City initiatives with 20,000+ CCTV cameras in the NCR, including MMDA (Metropolitan Manila Development Authority) projects and Quezon City 911 systems. PNP manages the national Crime Monitoring Center and ANPR cameras on key highways. Cities like Davao, Cebu, and Cagayan de Oro have deployed their own Safe City networks integrated with police operations centers.'}
            </p>
          </div>
        </section>

        {/* Legal & Compliance */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Marco Legal y Regulatorio' : 'Legal & Regulatory Framework'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Privacidad y Protección de Datos' : 'Privacy & Data Protection'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>RA 10173 (DPA 2012):</strong>{' '}
                    {es ? 'Ley de Privacidad de Datos: principios de tratamiento, derechos del titular, notificación de brechas en 72h' : 'Data Privacy Act: processing principles, data subject rights, 72-hour breach notification'}
                  </li>
                  <li>
                    <strong>NPC:</strong>{' '}
                    {es ? 'National Privacy Commission — autoridad supervisora; directrices de CCTV (NPC Advisory 2020-01)' : 'National Privacy Commission — supervisory authority; CCTV guidelines (NPC Advisory 2020-01)'}
                  </li>
                  <li>
                    <strong>IRR de la DPA:</strong>{' '}
                    {es ? 'Reglamento de implementación; requisitos de Oficial de Protección de Datos (DPO)' : 'Implementing Rules; Data Protection Officer (DPO) requirements'}
                  </li>
                  <li>
                    <strong>RA 11934 (2022):</strong>{' '}
                    {es ? 'Ley de Registro SIM: registro obligatorio de tarjetas SIM para trazabilidad' : 'SIM Registration Act: mandatory SIM card registration for traceability'}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Ciberseguridad y TIC' : 'Cybersecurity & ICT'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>RA 10175:</strong>{' '}
                    {es ? 'Cybercrime Prevention Act — marco de ciberdelitos; CICC (Centro de Coordinación de Investigación de Ciberdelitos)' : 'Cybercrime Prevention Act — cybercrime framework; CICC (Cybercrime Investigation and Coordinating Center)'}
                  </li>
                  <li>
                    <strong>EO 2 / FOI (2016):</strong>{' '}
                    {es ? 'Acceso a la información pública; transparencia de datos gubernamentales' : 'Freedom of Information; government data transparency'}
                  </li>
                  <li>
                    <strong>DICT National Cybersecurity Plan 2023–2028:</strong>{' '}
                    {es ? 'CERT-PH/NCERT; estándares de seguridad para infraestructura crítica' : 'CERT-PH/NCERT; security standards for critical infrastructure'}
                  </li>
                  <li>
                    <strong>PhilSys (RA 11055):</strong>{' '}
                    {es ? 'Sistema Nacional de Identificación; PhilSys Registry Office (PSA)' : 'National ID System; PhilSys Registry Office (PSA)'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Procurement */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Contratación Pública: PhilGEPS y RA 9184' : 'Public Procurement: PhilGEPS & RA 9184'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'La contratación pública filipina se rige por la RA 9184 (Ley de Reforma de Contratación Gubernamental de 2003) e implementada a través de PhilGEPS (Sistema Electrónico de Adquisiciones del Gobierno Filipino). Todas las entidades de adquisiciones gubernamentales deben publicar licitaciones, Solicitudes de Cotización (RFQ) y Avisos de Adjudicación de Contratos (CAN) en PhilGEPS. El DBM (Departamento de Presupuesto y Gestión) emite directrices para adquisiciones TIC bajo DRRM y ICT-PH. Las LGU contratan bajo sus COA (Comisión de Auditoría) y DILG-aprobadas directrices de adquisición.'
                : 'Philippine government procurement is governed by RA 9184 (Government Procurement Reform Act of 2003) and implemented through PhilGEPS (Philippine Government Electronic Procurement System). All government procuring entities must post bids, Requests for Quotation (RFQs), and Contract Award Notices (CANs) in PhilGEPS. The DBM (Department of Budget and Management) issues guidelines for ICT procurement under DRRM and ICT-PH. LGUs procure under COA (Commission on Audit) and DILG-approved procurement guidelines.'}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                {es ? 'Canales de Contratación KabatOne' : 'KabatOne Procurement Channels'}
              </h3>
              <ul className="space-y-1 text-blue-800">
                <li>{es ? '• PhilGEPS: licitaciones PNP, BFP, PCG, NDRRMC, DICT' : '• PhilGEPS: PNP, BFP, PCG, NDRRMC, DICT bids'}</li>
                <li>{es ? '• DBM-PS: Procurement Service (contratos marco para TIC)' : '• DBM-PS: Procurement Service (ICT framework agreements)'}</li>
                <li>{es ? '• LGU ICT: presupuestos municipales/de ciudad bajo DILG' : '• LGU ICT: municipal/city budgets under DILG'}</li>
                <li>{es ? '• ODA/ADB/WB: fondos de desarrollo para Safe City' : '• ODA/ADB/World Bank: development funding for Safe City'}</li>
                <li>{es ? '• DICT ICT Fund: Fondo de Equipamiento TIC para DRRM' : '• DICT ICT Fund: ICT Equipment Fund for DRRM'}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-gray-50">
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
          h2={es ? '¿Listo para modernizar la seguridad pública en Filipinas?' : 'Ready to modernize public safety in the Philippines?'}
          subtitle={es
            ? 'Conozca cómo KabatOne apoya a la PNP, BFP, PCG y NDRRMC con una plataforma unificada conforme a RA 10173/NPC y compatible con PhilGEPS.'
            : 'See how KabatOne supports PNP, BFP, PCG, and NDRRMC with a unified platform compliant with RA 10173/NPC and compatible with PhilGEPS.'}
        />
      </main>
      <Footer es={es} />
    </>
  )
}
