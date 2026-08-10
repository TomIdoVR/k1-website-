import { generatePageMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareSouthAfrica', locale)
}

const faqs = [
  {
    question: "How does KabatOne integrate with the South African Police Service (SAPS) structure?",
    answer: "KabatOne aligns with SAPS's command structure across 9 provincial commissioners, 145 police districts, 1,150+ police stations, and the National Commissioner headquarters in Pretoria — providing unified CAD dispatch, real-time situational awareness, and reporting compatible with SAPS CIMAC (Crime Intelligence Management and Analysis Centre) and 10111 command centre protocols."
  },
  {
    question: "Can KabatOne support SAPS, Metro Police, and Municipal Police integration?",
    answer: "Yes. KabatOne integrates SAPS with Metro Police Services (Johannesburg Metro Police JMPD, Tshwane Metro Police TMPD, Cape Town Metro Police CTMPD, eThekwini Metro Police) and Municipal Police Services — enabling unified command visibility, cross-jurisdictional dispatch, and incident management across all policing layers."
  },
  {
    question: "How does KabatOne handle POPIA (Protection of Personal Information Act) compliance?",
    answer: "KabatOne is designed for full POPIA (Act 4 of 2013, enforced from July 2021) compliance — implementing data subject rights (access, correction, deletion), lawful processing conditions, mandatory breach notification to the Information Regulator within 72 hours, Data Protection Impact Assessments, and Information Officer accountability frameworks."
  },
  {
    question: "Can KabatOne support Disaster Management Act operations including NDMC coordination?",
    answer: "Yes. KabatOne integrates the National Disaster Management Centre (NDMC), Provincial Disaster Management Centres (PDMCs), South African Weather Service (SAWS) alerts, and SADC Early Warning systems — supporting flood response (KwaZulu-Natal 2022 floods: 450+ deaths), fire management, and drought operations across all 9 provinces."
  },
  {
    question: "How does KabatOne support Johannesburg, Cape Town, and Durban City Safety operations?",
    answer: "KabatOne integrates City of Johannesburg CCTV Command Centre, Cape Town Law Enforcement cameras, eThekwini CCTV surveillance, and Tshwane Safe City cameras — providing AI-powered analytics, ANPR on national highways (SANRAL e-NATIS), and unified command visibility for South Africa's major metros."
  },
  {
    question: "What cybersecurity standards does KabatOne meet for South African government procurement?",
    answer: "KabatOne aligns with the Cybercrimes Act 19 of 2020, SITA (State Information Technology Agency) security standards, DPSA (Department of Public Service and Administration) ICT guidelines, and CSIRT-vGov requirements — meeting technical specifications for national and provincial government ICT procurement."
  },
  {
    question: "What procurement pathway does KabatOne support in South Africa?",
    answer: "KabatOne supports procurement through the Central Supplier Database (CSD) and Government Tender Bulletin under PFMA (Public Finance Management Act, 1999), MFMA (Municipal Finance Management Act), National Treasury SCM regulations, and CIDB (Construction Industry Development Board) for integrated infrastructure projects."
  }
]

const faqsEs = [
  {
    question: "¿Cómo se integra KabatOne con la estructura del Servicio de Policía de Sudáfrica (SAPS)?",
    answer: "KabatOne se alinea con la estructura de mando de la SAPS en 9 comisarios provinciales, 145 distritos policiales, más de 1,150 estaciones de policía y el cuartel general del Comisario Nacional en Pretoria — proporcionando despacho CAD unificado, conciencia situacional en tiempo real y reportes compatibles con CIMAC y los protocolos del centro de mando 10111."
  },
  {
    question: "¿Puede KabatOne soportar la integración de SAPS, Policía Metropolitana y Municipal?",
    answer: "Sí. KabatOne integra la SAPS con los Servicios de Policía Metropolitana (JMPD de Johannesburgo, TMPD de Tshwane, CTMPD de Ciudad del Cabo, Policía Metropolitana de eThekwini) y Servicios de Policía Municipal — habilitando visibilidad de mando unificada, despacho interjurisdiccional y gestión de incidentes en todas las capas policiales."
  },
  {
    question: "¿Cómo gestiona KabatOne el cumplimiento de POPIA (Ley de Protección de Información Personal)?",
    answer: "KabatOne está diseñado para cumplimiento total con POPIA (Ley 4 de 2013, en vigor desde julio de 2021) — implementando derechos del titular de datos, condiciones de procesamiento lícito, notificación obligatoria de brechas al Regulador de Información en 72h, Evaluaciones de Impacto en Protección de Datos y marcos de responsabilidad del Oficial de Información."
  },
  {
    question: "¿Puede KabatOne soportar operaciones de la Ley de Gestión de Desastres incluyendo la coordinación del NDMC?",
    answer: "Sí. KabatOne integra el Centro Nacional de Gestión de Desastres (NDMC), Centros Provinciales de Gestión de Desastres (PDMC), alertas del Servicio Meteorológico de Sudáfrica (SAWS) y sistemas de alerta temprana de la SADC — apoyando la respuesta ante inundaciones (KwaZulu-Natal 2022: 450+ fallecidos) y gestión de incendios en las 9 provincias."
  },
  {
    question: "¿Cómo soporta KabatOne las operaciones de seguridad urbana de Johannesburgo, Ciudad del Cabo y Durban?",
    answer: "KabatOne integra el Centro de Mando CCTV de la Ciudad de Johannesburgo, cámaras de Aplicación de la Ley de Ciudad del Cabo, vigilancia CCTV de eThekwini y cámaras Safe City de Tshwane — proporcionando analítica de IA, ANPR en autopistas nacionales (SANRAL e-NATIS) y visibilidad de mando unificada."
  },
  {
    question: "¿Qué estándares de ciberseguridad cumple KabatOne para la contratación gubernamental en Sudáfrica?",
    answer: "KabatOne se alinea con la Ley de Ciberdelitos 19 de 2020, estándares de seguridad de la SITA (Agencia de Tecnología de la Información del Estado), directrices TIC del DPSA y requisitos CSIRT-vGov — cumpliendo especificaciones técnicas para contratación TIC de gobierno nacional y provincial."
  },
  {
    question: "¿Qué vía de contratación soporta KabatOne en Sudáfrica?",
    answer: "KabatOne soporta contratación a través de la Base de Datos Central de Proveedores (CSD) y el Boletín de Licitaciones del Gobierno bajo la PFMA (Ley de Gestión de Finanzas Públicas, 1999), MFMA (Ley de Gestión de Finanzas Municipales), regulaciones SCM del Tesoro Nacional y CIDB para proyectos de infraestructura integrada."
  }
]

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const headline = es
    ? 'Software de Seguridad Pública para Sudáfrica: SAPS, NDMC/SAWS, POPIA/Regulador de Información y Ley de Ciberdelitos 2020'
    : 'Public Safety Software for South Africa: SAPS, NDMC/SAWS, POPIA/Information Regulator & Cybercrimes Act 2020'
  const description = es
    ? 'Plataforma unificada para SAPS, Metro Police y NDMC de Sudáfrica — despacho CAD integrado para 9 provincias y coordinación de desastres NDMC/SAWS, gestión de cámaras Safe City conforme a POPIA y cumplimiento Ley de Ciberdelitos con contratación CSD/PFMA.'
    : 'Unified platform for South African SAPS, Metro Police, and NDMC — integrated CAD dispatch for 9 provinces and NDMC/SAWS disaster coordination, POPIA-compliant Safe City camera management, and Cybercrimes Act compliance with CSD/PFMA procurement.'
  const url = es
    ? 'https://kabatone.com/es/resources/public-safety-software-south-africa'
    : 'https://kabatone.com/resources/public-safety-software-south-africa'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources' : 'https://kabatone.com/resources' },
    { name: es ? 'Sudáfrica' : 'South Africa', url },
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
              {es ? 'Guía de Mercado — Sudáfrica' : 'Market Guide — South Africa'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {es
                ? 'Software de Seguridad Pública para Sudáfrica'
                : 'Public Safety Software for South Africa'}
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              {es
                ? 'SAPS, JMPD/CTMPD/TMPD, NDMC/SAWS, POPIA/Regulador de Información, Ley de Ciberdelitos 2020 y contratación CSD/PFMA'
                : 'SAPS, JMPD/CTMPD/TMPD, NDMC/SAWS, POPIA/Information Regulator, Cybercrimes Act 2020 & CSD/PFMA procurement'}
            </p>
            <div className="flex flex-wrap gap-3">
              {['SAPS / Metro Police / JMPD', 'NDMC / SAWS / PDMC', 'POPIA / Information Regulator', 'Cybercrimes Act 2020 / SITA', 'CSD / PFMA / MFMA', 'Joburg CCTV / Cape Town Safe City'].map(tag => (
                <span key={tag} className="bg-green-800 text-green-100 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? "El Panorama de Seguridad Pública en Sudáfrica" : "South Africa's Public Safety Landscape"}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Sudáfrica es una república con 60+ millones de habitantes organizada en 9 provincias, 257 municipios y 8 municipios metropolitanos. El Servicio de Policía de Sudáfrica (SAPS) opera bajo el Ministerio de Seguridad Policial con 9 comisarios provinciales, 145 distritos, más de 1,150 estaciones de policía y 190,000+ miembros. Además del SAPS, los municipios metropolitanos mantienen Servicios de Policía Metropolitana (Metro Police): Johannesburg Metro Police Department (JMPD), Tshwane Metro Police Department (TMPD), City of Cape Town Metro Police Department (CTMPD), eThekwini Metro Police, Ekurhuleni Metropolitan Police Department y Buffalo City Metropolitan Police.'
                : "South Africa is a republic with 60+ million people organized into 9 provinces, 257 municipalities, and 8 metropolitan municipalities. The South African Police Service (SAPS) operates under the Ministry of Police with 9 provincial commissioners, 145 districts, 1,150+ police stations, and 190,000+ members. Beyond SAPS, metropolitan municipalities maintain Metro Police Services: Johannesburg Metro Police Department (JMPD), Tshwane Metro Police Department (TMPD), City of Cape Town Metro Police Department (CTMPD), eThekwini Metro Police, Ekurhuleni Metropolitan Police Department, and Buffalo City Metropolitan Police."}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'El Centro Nacional de Gestión de Desastres (NDMC) dentro del Departamento de Desarrollo Cooperativo y Asuntos Tradicionales (COGTA) coordina la respuesta multiagencia bajo la Ley de Gestión de Desastres 57 de 2002. Las inundaciones de KwaZulu-Natal de abril de 2022 — las peores en décadas — causaron más de 450 fallecidos y daños por R12,000 millones. Los Servicios de Salud de Emergencia (EMS) están descentralizados a los 9 departamentos provinciales de salud bajo la supervisión del Departamento Nacional de Salud. Sudáfrica es el país africano más avanzado en tecnología, con Johannesburgo como principal centro fintech y de TIC del continente.'
                : "The National Disaster Management Centre (NDMC) within the Department of Cooperative Governance and Traditional Affairs (COGTA) coordinates multi-agency response under the Disaster Management Act 57 of 2002. The April 2022 KwaZulu-Natal floods — the worst in decades — caused 450+ deaths and R12 billion in damages. Emergency Medical Services (EMS) are decentralized to the 9 provincial health departments under National Department of Health oversight. South Africa is Africa's most technologically advanced country, with Johannesburg as the continent's leading fintech and ICT hub."}
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
                  {es ? 'SAPS y Policía Metropolitana' : 'SAPS and Metro Police'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• SAPS HQ, Pretoria (Comisario Nacional)' : '• SAPS HQ, Pretoria (National Commissioner)'}</li>
                  <li>{es ? '• 9 comisarios provinciales, 145 distritos, 1,150+ estaciones' : '• 9 provincial commissioners, 145 districts, 1,150+ stations'}</li>
                  <li>{es ? '• CIMAC: Crime Intelligence Management & Analysis Centre' : '• CIMAC: Crime Intelligence Management & Analysis Centre'}</li>
                  <li>{es ? '• Hawks (DPCI): Directorate for Priority Crime Investigation' : '• Hawks (DPCI): Directorate for Priority Crime Investigation'}</li>
                  <li>{es ? '• JMPD, TMPD, CTMPD, eThekwini Metro Police' : '• JMPD, TMPD, CTMPD, eThekwini Metro Police'}</li>
                  <li>{es ? '• Private Security Industry (PSIRA): 2.5M+ guardias' : '• Private Security Industry (PSIRA): 2.5M+ guards'}</li>
                  <li>{es ? '• Border Management Authority (BMA)' : '• Border Management Authority (BMA)'}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Servicios de Emergencia' : 'Emergency Services'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• 10111: policía; 10177: ambulancia; 112: emergencias' : '• 10111: police; 10177: ambulance; 112: emergencies'}</li>
                  <li>{es ? '• EMS: 9 departamentos provinciales de salud' : '• EMS: 9 provincial health departments'}</li>
                  <li>{es ? '• NDMC: Centro Nacional de Gestión de Desastres (COGTA)' : '• NDMC: National Disaster Management Centre (COGTA)'}</li>
                  <li>{es ? '• PDMC: 9 Centros Provinciales de Gestión de Desastres' : '• PDMC: 9 Provincial Disaster Management Centres'}</li>
                  <li>{es ? '• SAWS: Servicio Meteorológico de Sudáfrica' : '• SAWS: South African Weather Service'}</li>
                  <li>{es ? '• SANDF: Fuerzas de Defensa Nacional (apoyo HADR)' : '• SANDF: National Defence Force (HADR support)'}</li>
                  <li>{es ? '• FPA/Working on Fire: gestión de incendios forestales' : '• FPA/Working on Fire: wildfire management'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Safe City & CCTV */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Safe City: Johannesburgo, Ciudad del Cabo y eThekwini' : 'Safe City: Johannesburg, Cape Town & eThekwini'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Johannesburgo opera el Joint Operations Centre (JOC) con más de 5,000 cámaras de vigilancia CCTV del sistema City Safety gestionadas por el JMPD y Joburg City Power. Ciudad del Cabo tiene el Cape Town City Safety CCTV network con más de 3,000 cámaras gestionadas por el City Law Enforcement Department y el Cape Town Traffic CCTV. eThekwini gestiona la eThekwini CCTV Command Centre con cámaras de vigilancia integradas con la Metro Police. SANRAL (South African National Roads Agency) opera cámaras ANPR y e-toll en las principales autopistas nacionales. El programa City Safety de Pretoria/Tshwane Safe City integra vigilancia con la TMPD.'
                : "Johannesburg operates the Joint Operations Centre (JOC) with 5,000+ CCTV surveillance cameras of the City Safety system managed by JMPD and Joburg City Power. Cape Town has the Cape Town City Safety CCTV network with 3,000+ cameras managed by the City Law Enforcement Department and Cape Town Traffic CCTV. eThekwini manages the eThekwini CCTV Command Centre with surveillance cameras integrated with Metro Police. SANRAL (South African National Roads Agency) operates ANPR cameras and e-toll on major national highways. Pretoria/Tshwane Safe City programme integrates surveillance with TMPD."}
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
                  {es ? 'Protección de Información Personal (POPIA)' : 'Personal Information Protection (POPIA)'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>POPIA (Act 4 of 2013):</strong>{' '}
                    {es ? 'Protection of Personal Information Act — 8 condiciones de procesamiento lícito, derechos del titular, Oficial de Información obligatorio, en vigor desde julio 2021' : 'Protection of Personal Information Act — 8 lawful processing conditions, data subject rights, mandatory Information Officer, enforced from July 2021'}
                  </li>
                  <li>
                    <strong>Information Regulator (South Africa):</strong>{' '}
                    {es ? 'Autoridad supervisora independiente — aplicación de POPIA y PAIA (Promotion of Access to Information Act), notificación de brechas' : 'Independent supervisory authority — enforcing POPIA and PAIA, breach notification'}
                  </li>
                  <li>
                    <strong>PAIA (Act 2 of 2000):</strong>{' '}
                    {es ? 'Ley de Promoción del Acceso a la Información — transparencia de datos gubernamentales' : 'Promotion of Access to Information Act — government data transparency'}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Ciberseguridad y TIC' : 'Cybersecurity & ICT'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Cybercrimes Act 19 of 2020:</strong>{' '}
                    {es ? 'Ley de Ciberdelitos — marco de ciberdelitos, obligaciones de notificación de ciberataques, intercambio de información con SAPS' : 'Cybercrimes Act — cybercrime framework, cyberattack notification obligations, information sharing with SAPS'}
                  </li>
                  <li>
                    <strong>SITA (State Information Technology Agency):</strong>{' '}
                    {es ? 'Proveedor de TIC del gobierno nacional y provincial — estándares de seguridad, contratos marco de TIC, aprobación de sistemas críticos' : 'National and provincial government ICT provider — security standards, ICT framework contracts, critical system approval'}
                  </li>
                  <li>
                    <strong>DPSA / CSIRT-vGov:</strong>{' '}
                    {es ? 'Departamento de Administración Pública — directrices de seguridad TIC; CSIRT del gobierno (CSIRT-vGov)' : 'Department of Public Service Administration — ICT security guidelines; government CSIRT (CSIRT-vGov)'}
                  </li>
                  <li>
                    <strong>NCPF (National Cybersecurity Policy Framework):</strong>{' '}
                    {es ? 'Marco de Política Nacional de Ciberseguridad 2015 — actualización en proceso; DTPS/DCDT coordinación' : 'National Cybersecurity Policy Framework 2015 — update in progress; DTPS/DCDT coordination'}
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
              {es ? 'Contratación Pública: CSD, PFMA y Reglamentos SCM' : 'Public Procurement: CSD, PFMA & SCM Regulations'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'La contratación pública en Sudáfrica se rige por la PFMA (Ley de Gestión de Finanzas Públicas 1 de 1999) para entidades nacionales y provinciales, y la MFMA (Ley de Gestión de Finanzas Municipales 56 de 2003) para municipios. Todos los proveedores deben registrarse en la Base de Datos Central de Proveedores (CSD) gestionada por el Tesoro Nacional. Las licitaciones se publican en el Government Tender Bulletin (GTB). SITA gestiona contratos marco de TIC para los tres niveles de gobierno. Los proyectos de seguridad pública pueden financiarse a través del Municipal Infrastructure Grant (MIG), City Support Programme y fondos del Banco de Desarrollo de África del Sur (DBSA) o AfDB.'
                : "South Africa's public procurement is governed by the PFMA (Public Finance Management Act 1 of 1999) for national and provincial entities, and MFMA (Municipal Finance Management Act 56 of 2003) for municipalities. All suppliers must register on the Central Supplier Database (CSD) managed by National Treasury. Tenders are published in the Government Tender Bulletin (GTB). SITA manages ICT framework contracts for all three spheres of government. Public safety projects may be financed through the Municipal Infrastructure Grant (MIG), City Support Programme, and Development Bank of Southern Africa (DBSA) or AfDB loans."}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                {es ? 'Canales de Contratación KabatOne' : 'KabatOne Procurement Channels'}
              </h3>
              <ul className="space-y-1 text-blue-800">
                <li>{es ? '• CSD/GTB: licitaciones SAPS, SITA, NDMC, Metro Police' : '• CSD/GTB: SAPS, SITA, NDMC, Metro Police tenders'}</li>
                <li>{es ? '• SITA framework: contratos TIC gobierno nacional/provincial' : '• SITA framework: national/provincial government ICT'}</li>
                <li>{es ? '• Municipal SCM: Metro Police JMPD/CTMPD/TMPD/eThekwini' : '• Municipal SCM: Metro Police JMPD/CTMPD/TMPD/eThekwini'}</li>
                <li>{es ? '• DBSA/AfDB: financiamiento Safe City y digital' : '• DBSA/AfDB: Safe City and digital financing'}</li>
                <li>{es ? '• MIG/City Support: grants infraestructura municipal' : '• MIG/City Support: municipal infrastructure grants'}</li>
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
          h2={es ? '¿Listo para modernizar la seguridad pública en Sudáfrica?' : 'Ready to modernize public safety in South Africa?'}
          subtitle={es
            ? 'Conozca cómo KabatOne apoya a la SAPS, Metro Police y NDMC con una plataforma unificada conforme a POPIA/Regulador de Información y compatible con CSD/PFMA.'
            : 'See how KabatOne supports SAPS, Metro Police, and NDMC with a unified platform compliant with POPIA/Information Regulator and compatible with CSD/PFMA procurement.'}
        />
      </main>
      <Footer es={es} />
    </>
  )
}
