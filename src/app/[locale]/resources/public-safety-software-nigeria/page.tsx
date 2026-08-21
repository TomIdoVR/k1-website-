import { generatePageMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareNigeria', locale)
}

const faqs = [
  {
    question: "How does KabatOne integrate with the Nigeria Police Force (NPF) federal structure?",
    answer: "KabatOne aligns with NPF's command structure across 36 state commands and the FCT command, 1,400+ police divisions, and the Nigeria Police Force Headquarters (NPHQ) in Abuja — providing unified CAD dispatch, real-time situational awareness, and reporting compatible with IGP/NPF operational protocols across all six geo-political zones."
  },
  {
    question: "Can KabatOne support the Nigeria Security and Civil Defence Corps (NSCDC) and other agencies?",
    answer: "Yes. KabatOne integrates multi-agency operations including NPF, NSCDC, Federal Fire Service (FFS), State Fire Services, Federal Road Safety Corps (FRSC), and NEMA (National Emergency Management Agency) — enabling unified command visibility and resource coordination across Nigeria's complex security ecosystem."
  },
  {
    question: "How does KabatOne handle Nigeria Data Protection Act (NDPA 2023) compliance?",
    answer: "KabatOne is designed for full NDPA 2023 compliance — implementing data subject rights management, mandatory breach notification to NDPC (Nigeria Data Protection Commission), lawful basis documentation, and Data Protection Impact Assessments (DPIAs) aligned with NDPC enforcement guidelines."
  },
  {
    question: "Can KabatOne support Safe City operations in Lagos, Abuja, and Port Harcourt?",
    answer: "Yes. KabatOne integrates Lagos State Security Trust Fund (LSSTF) CCTV networks, Abuja Integrated Security System, Eko Safe City cameras, and state government command centers — providing AI-powered analytics, ANPR integration, and unified situational awareness for Nigeria's major urban agglomerations."
  },
  {
    question: "How does KabatOne manage multi-agency disaster response in Nigeria?",
    answer: "KabatOne integrates NEMA's National Emergency Coordination Centre (NECC), State Emergency Management Agencies (SEMAs), Nigerian Meteorological Agency (NiMet), and NIHSA (National Inland Waterways Safety Authority) — supporting flood coordination, oil spill response in the Niger Delta, and north-east security operations."
  },
  {
    question: "What cybersecurity compliance does KabatOne meet for Nigerian government procurement?",
    answer: "KabatOne aligns with Nigeria Cybersecurity Act 2024, NITDA guidelines, ncfrmi/NCC sector regulations, and Central Bank of Nigeria (CBN) digital infrastructure standards — meeting requirements for government ICT procurement under NITDA approval processes."
  },
  {
    question: "What procurement pathway does KabatOne support in Nigeria?",
    answer: "KabatOne supports procurement through the Bureau of Public Procurement (BPP) e-procurement portal under the Public Procurement Act 2007, State Procurement Laws, and Nigerian Content Development Act for technology systems — including open competitive bidding, selective tendering, and direct procurement for security/emergency systems."
  }
]

const faqsEs = [
  {
    question: "¿Cómo se integra KabatOne con la estructura federal de la Policía de Nigeria (NPF)?",
    answer: "KabatOne se alinea con la estructura de mando de la NPF en 36 mandos estatales y el mando del FCT, más de 1,400 divisiones policiales y el Cuartel General de la Policía de Nigeria (NPHQ) en Abuja — proporcionando despacho CAD unificado, conciencia situacional en tiempo real y reportes compatibles con los protocolos operativos del IGP/NPF."
  },
  {
    question: "¿Puede KabatOne soportar el Cuerpo de Seguridad y Defensa Civil de Nigeria (NSCDC) y otras agencias?",
    answer: "Sí. KabatOne integra operaciones multiagencia incluyendo NPF, NSCDC, Servicio Federal de Bomberos (FFS), servicios estatales de bomberos, FRSC y NEMA — habilitando visibilidad de mando unificada y coordinación de recursos en el complejo ecosistema de seguridad de Nigeria."
  },
  {
    question: "¿Cómo gestiona KabatOne el cumplimiento de la Ley de Protección de Datos de Nigeria (NDPA 2023)?",
    answer: "KabatOne está diseñado para cumplimiento total con la NDPA 2023 — implementando gestión de derechos de titulares, notificación obligatoria de brechas a la NDPC (Comisión de Protección de Datos de Nigeria), documentación de base legal y Evaluaciones de Impacto en Protección de Datos (DPIA) alineadas con las directrices de la NDPC."
  },
  {
    question: "¿Puede KabatOne soportar operaciones Safe City en Lagos, Abuja y Port Harcourt?",
    answer: "Sí. KabatOne integra las redes CCTV del Fondo de Confianza de Seguridad del Estado de Lagos (LSSTF), el Sistema Integrado de Seguridad de Abuja, cámaras Eko Safe City y centros de mando de gobiernos estatales — proporcionando analítica de IA, integración ANPR y conciencia situacional unificada."
  },
  {
    question: "¿Cómo gestiona KabatOne la respuesta multiagencia ante desastres en Nigeria?",
    answer: "KabatOne integra el Centro Nacional de Coordinación de Emergencias (NECC) de NEMA, Agencias Estatales de Gestión de Emergencias (SEMA), la Agencia Meteorológica de Nigeria (NiMet) y NIHSA — apoyando coordinación de inundaciones, respuesta a derrames en el Delta del Níger y operaciones de seguridad en el noreste."
  },
  {
    question: "¿Qué cumplimiento de ciberseguridad ofrece KabatOne para contratación gubernamental en Nigeria?",
    answer: "KabatOne se alinea con la Ley de Ciberseguridad de Nigeria 2024, directrices NITDA, regulaciones sectoriales NCC y estándares de infraestructura digital del CBN — cumpliendo con los requisitos de contratación TIC gubernamental bajo los procesos de aprobación NITDA."
  },
  {
    question: "¿Qué vía de contratación soporta KabatOne en Nigeria?",
    answer: "KabatOne soporta contratación a través del portal de e-procurement de la Oficina de Contratación Pública (BPP) bajo la Ley de Contratación Pública de 2007, leyes estatales de contratación y la Ley de Desarrollo de Contenido Nigeriano para sistemas tecnológicos — incluyendo licitación competitiva abierta y adquisición directa para sistemas de seguridad."
  }
]

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const headline = es
    ? 'Software de Seguridad Pública para Nigeria: NPF, NSCDC/NEMA, NDPA 2023 y Ley de Ciberseguridad 2024'
    : 'Public Safety Software for Nigeria: NPF, NSCDC/NEMA, NDPA 2023 & Cybersecurity Act 2024'
  const description = es
    ? 'Plataforma unificada para NPF, NSCDC y FFS de Nigeria — despacho CAD integrado para 36 mandos estatales y coordinación de desastres NEMA/NiMet, gestión de cámaras Safe City conforme a NDPA 2023 y cumplimiento de Ley de Ciberseguridad con contratación BPP/APP 2007.'
    : 'Unified platform for Nigerian NPF, NSCDC, and FFS — integrated CAD dispatch for 36 state commands and NEMA/NiMet disaster coordination, NDPA 2023-compliant Safe City camera management, and Cybersecurity Act compliance with BPP/PPA 2007 procurement.'
  const url = es
    ? 'https://kabatone.com/es/resources/public-safety-software-nigeria'
    : 'https://kabatone.com/resources/public-safety-software-nigeria'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources' : 'https://kabatone.com/resources' },
    { name: 'Nigeria', url },
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
        <section className="bg-gradient-to-br from-slate-900 to-green-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-green-300 text-sm font-medium mb-4 uppercase tracking-wide">
              {es ? 'Guía de Mercado — Nigeria' : 'Market Guide — Nigeria'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {es
                ? 'Software de Seguridad Pública para Nigeria'
                : 'Public Safety Software for Nigeria'}
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              {es
                ? 'NPF, NSCDC, FFS/NEMA, NDPA 2023/NDPC, Ley de Ciberseguridad 2024 y contratación BPP/APP 2007'
                : 'NPF, NSCDC, FFS/NEMA, NDPA 2023/NDPC, Cybersecurity Act 2024 & BPP/PPA 2007 procurement'}
            </p>
            <div className="flex flex-wrap gap-3">
              {['NPF / NSCDC / FFS', 'NEMA / NiMet / NIHSA', 'NDPA 2023 / NDPC', 'Cybersecurity Act 2024 / NITDA', 'BPP / PPA 2007', 'Lagos Safe City / Eko CCTV'].map(tag => (
                <span key={tag} className="bg-green-800 text-green-100 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? "El Panorama de Seguridad Pública en Nigeria" : "Nigeria's Public Safety Landscape"}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Nigeria es la nación más poblada de África con 220+ millones de habitantes, organizada como república federal con 36 estados y el Territorio de la Capital Federal (FCT, Abuja). La Policía de Nigeria (Nigeria Police Force / NPF) — bajo el mando del Inspector General de la Policía (IGP) — opera desde el NPHQ de Abuja con 36 mandos estatales, el mando del FCT, más de 1,400 divisiones policiales y 320,000+ efectivos. El Cuerpo de Seguridad y Defensa Civil de Nigeria (NSCDC) protege la infraestructura crítica con más de 65,000 efectivos. El Servicio Federal de Bomberos (FFS) y los servicios estatales de bomberos gestionan la respuesta contra incendios y rescate en todo el país.'
                : "Nigeria is Africa's most populous nation with 220+ million people, organized as a federal republic with 36 states and the Federal Capital Territory (FCT, Abuja). The Nigeria Police Force (NPF) — under the Inspector General of Police (IGP) — operates from Abuja's NPHQ with 36 state commands, FCT command, 1,400+ police divisions, and 320,000+ personnel. The Nigeria Security and Civil Defence Corps (NSCDC) protects critical infrastructure with 65,000+ personnel. The Federal Fire Service (FFS) and state fire services manage fire response and rescue nationwide."}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'La Agencia Nacional de Gestión de Emergencias (NEMA) coordina la respuesta ante desastres con ocho Agencias Estatales de Gestión de Emergencias (SEMA) zonales. Nigeria enfrenta inundaciones anuales graves (inundaciones de 2022: más de 600 fallecidos, 1.4 millones de desplazados), desafíos de seguridad en el noreste (Borno/Yobe/Adamawa), inseguridad comunitaria en el cinturón medio, y retos ambientales en el Delta del Níger. Lagos y Abuja han implementado iniciativas Safe City con redes CCTV extensas.'
                : 'The National Emergency Management Agency (NEMA) coordinates disaster response with eight zonal State Emergency Management Agencies (SEMAs). Nigeria faces severe annual flooding (2022 floods: 600+ deaths, 1.4 million displaced), north-east security challenges (Borno/Yobe/Adamawa), community security across the Middle Belt, and environmental challenges in the Niger Delta. Lagos and Abuja have implemented Safe City initiatives with extensive CCTV networks.'}
            </p>
          </div>
        </section>

        {/* Security Structure */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Estructura de Seguridad y Servicios de Emergencia' : 'Security Structure & Emergency Services'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Fuerzas de Seguridad' : 'Security Forces'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• NPF: 36 mandos estatales + FCT, 320,000+ efectivos' : '• NPF: 36 state commands + FCT, 320,000+ personnel'}</li>
                  <li>{es ? '• NSCDC: protección infraestructura crítica, 65,000+' : '• NSCDC: critical infrastructure protection, 65,000+'}</li>
                  <li>{es ? '• DSS: Servicio Estatal de Seguridad (inteligencia doméstica)' : '• DSS: Department of State Services (domestic intel)'}</li>
                  <li>{es ? '• NIA: Agencia de Inteligencia de Nigeria (exterior)' : '• NIA: National Intelligence Agency (foreign intel)'}</li>
                  <li>{es ? '• Nigerian Army/Navy/Air Force: apoyo HADR' : '• Nigerian Army/Navy/Air Force: HADR support'}</li>
                  <li>{es ? '• FRSC: Federal Road Safety Corps (seguridad vial)' : '• FRSC: Federal Road Safety Corps (road safety)'}</li>
                  <li>{es ? '• NCS: Nigerian Correctional Service' : '• NCS: Nigerian Correctional Service'}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Servicios de Emergencia' : 'Emergency Services'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• FFS: Servicio Federal de Bomberos + servicios estatales' : '• FFS: Federal Fire Service + state fire services'}</li>
                  <li>{es ? '• NEMA: 8 centros zonales de emergencia (NECC)' : '• NEMA: 8 zonal emergency centres (NECC)'}</li>
                  <li>{es ? '• SEMA: Agencias Estatales de Gestión de Emergencias' : '• SEMA: State Emergency Management Agencies'}</li>
                  <li>{es ? '• NiMet: Agencia Meteorológica de Nigeria (pronósticos)' : '• NiMet: Nigerian Meteorological Agency (forecasts)'}</li>
                  <li>{es ? '• NIHSA: Autoridad de Seguridad de Vías Navegables' : '• NIHSA: National Inland Waterways Safety Authority'}</li>
                  <li>{es ? '• NAFDAC/NCDC: respuesta a emergencias de salud' : '• NAFDAC/NCDC: health emergency response'}</li>
                  <li>{es ? '• 112: número de emergencia unificado (en proceso)' : '• 112: unified emergency number (rolling out)'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Safe City */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Safe City: Lagos, Abuja y Eko Safe City' : 'Safe City: Lagos, Abuja & Eko Safe City'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Lagos — con más de 20 millones de habitantes — ha implementado el proyecto Eko Safe City con más de 2,000 cámaras de vigilancia integradas con el Lagos Command and Control Centre (LC3), el LSSTF (Fondo de Confianza de Seguridad del Estado de Lagos) y el sistema integrado de seguridad de la LASG. Abuja cuenta con el Abuja Integrated Security System (AISS) gestionado por la FCTA (Federal Capital Territory Administration). Port Harcourt y otras ciudades petroleras han aumentado la inversión en vigilancia ante amenazas de seguridad en el Delta del Níger.'
                : "Lagos — with 20+ million people — has deployed the Eko Safe City project with 2,000+ surveillance cameras integrated with the Lagos Command and Control Centre (LC3), LSSTF (Lagos State Security Trust Fund), and LASG integrated security system. Abuja has the Abuja Integrated Security System (AISS) managed by the FCTA (Federal Capital Territory Administration). Port Harcourt and other oil cities have increased surveillance investment in response to Niger Delta security threats."}
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
                    <strong>NDPA 2023 (Nigeria Data Protection Act):</strong>{' '}
                    {es ? 'Ley de Protección de Datos de Nigeria — derechos del titular, bases legales, transferencia transfronteriza, notificación de brechas' : 'Nigeria Data Protection Act — data subject rights, lawful bases, cross-border transfer, breach notification'}
                  </li>
                  <li>
                    <strong>NDPC (Nigeria Data Protection Commission):</strong>{' '}
                    {es ? 'Comisión independiente de protección de datos (creada por NDPA 2023) — sustituyó a NITDA como autoridad DPA' : 'Independent data protection commission (created by NDPA 2023) — replaced NITDA as DPA authority'}
                  </li>
                  <li>
                    <strong>NDPR 2019 (precedente):</strong>{' '}
                    {es ? 'Reglamento de Protección de Datos de Nigeria — base para NDPA 2023, Data Protection Compliance Officers (DPCOs)' : 'Nigeria Data Protection Regulation — foundation for NDPA 2023, Data Protection Compliance Officers (DPCOs)'}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Ciberseguridad y TIC' : 'Cybersecurity & ICT'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Cybercrime Act 2015 + Amendment 2024:</strong>{' '}
                    {es ? 'Marco de ciberdelitos; Ley de Ciberseguridad 2024 — infraestructura crítica, respuesta a incidentes, CSIRT nacional' : 'Cybercrime framework; Cybersecurity Act 2024 — critical infrastructure, incident response, national CSIRT'}
                  </li>
                  <li>
                    <strong>NITDA (National IT Development Agency):</strong>{' '}
                    {es ? 'Aprobación de sistemas TIC gubernamentales; directrices de seguridad de infraestructura; accreditación de proveedores' : 'Government ICT system approval; infrastructure security guidelines; vendor accreditation'}
                  </li>
                  <li>
                    <strong>NCC (Nigerian Communications Commission):</strong>{' '}
                    {es ? 'Regulación de telecomunicaciones; interoperabilidad de redes de emergencia' : 'Telecommunications regulation; emergency network interoperability'}
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
              {es ? 'Contratación Pública: BPP y Ley de Contratación Pública 2007' : 'Public Procurement: BPP & Public Procurement Act 2007'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'La contratación pública en Nigeria se rige por la Ley de Contratación Pública de 2007 (PPA 2007) e implementada por la Oficina de Contratación Pública (Bureau of Public Procurement / BPP) a través del portal de e-procurement. Todas las adquisiciones por encima del umbral (≥NGN 100M para servicios) requieren aprobación del BPP. Los sistemas de seguridad TIC deben cumplir con las directrices de NITDA y la Ley de Contenido Nigeriano (Local Content Act). Los gobiernos estatales contratan bajo sus propias leyes de contratación (Estado de Lagos: Open Contracting Portal / OCP). Financiamiento internacional disponible a través del ADB, Banco Mundial y fondos de la Unión Africana para infraestructura de seguridad pública.'
                : "Nigeria's public procurement is governed by the Public Procurement Act 2007 (PPA 2007) and implemented by the Bureau of Public Procurement (BPP) through the e-procurement portal. All procurements above threshold (≥NGN 100M for services) require BPP approval. ICT security systems must comply with NITDA guidelines and the Nigerian Content Development Act. State governments procure under their own procurement laws (Lagos State: Open Contracting Portal / OCP). International financing available through ADB, World Bank, and African Union funds for public safety infrastructure."}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                {es ? 'Canales de Contratación KabatOne' : 'KabatOne Procurement Channels'}
              </h3>
              <ul className="space-y-1 text-blue-800">
                <li>{es ? '• BPP portal: licitaciones NPF, NSCDC, FFS, NEMA' : '• BPP portal: NPF, NSCDC, FFS, NEMA bids'}</li>
                <li>{es ? '• NITDA accreditation: aprobación de sistemas TIC federales' : '• NITDA accreditation: federal ICT system approval'}</li>
                <li>{es ? '• Lagos OCP / State Procurement: contratos estatales' : '• Lagos OCP / State Procurement: state contracts'}</li>
                <li>{es ? '• LSSTF / LASG: fondos de seguridad del Estado de Lagos' : '• LSSTF / LASG: Lagos State security funds'}</li>
                <li>{es ? '• ADB/WB/AU: financiamiento multilateral para Safe City' : '• ADB/World Bank/AU: multilateral Safe City financing'}</li>
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
          h2={es ? '¿Listo para modernizar la seguridad pública en Nigeria?' : 'Ready to modernize public safety in Nigeria?'}
          subtitle={es
            ? 'Conozca cómo KabatOne apoya a la NPF, NSCDC y NEMA con una plataforma unificada conforme a NDPA 2023/NDPC y compatible con BPP/PPA 2007.'
            : 'See how KabatOne supports NPF, NSCDC, and NEMA with a unified platform compliant with NDPA 2023/NDPC and compatible with BPP/PPA 2007 procurement.'}
        />
      </main>
      <Footer es={es} />
    </>
  )
}
