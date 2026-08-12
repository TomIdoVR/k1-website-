import { generatePageMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareMalaysia', locale)
}

const faqs = [
  {
    question: "How does KabatOne integrate with the Royal Malaysia Police (PDRM) structure?",
    answer: "KabatOne aligns with PDRM's command hierarchy across 14 state police contingents (13 states + Federal Territory), 165+ police districts, and the Bukit Aman national headquarters — providing unified CAD dispatch, real-time operations center management, and reporting compatible with PDRM's Integrated Incident Management System (IIMS) standards."
  },
  {
    question: "Can KabatOne support Malaysia's integrated emergency number 999?",
    answer: "Yes. KabatOne integrates with Malaysia's single emergency number 999, which covers police (PDRM), fire (JBPM), and ambulance (SAMM/HEMS) response — enabling unified call-taking, cross-agency dispatch, and incident tracking across all 13 states and three Federal Territories."
  },
  {
    question: "How does KabatOne handle the Personal Data Protection Act (PDPA 2010) compliance?",
    answer: "KabatOne is designed for full PDPA 2010 (Act 709) compliance — implementing data subject consent management, data processing notices, retention period controls, and security safeguards aligned with the Department of Personal Data Protection (JPDP/PDPD) enforcement guidelines."
  },
  {
    question: "Does the platform support Malaysia's Jabatan Bomba dan Penyelamat (JBPM) fire and rescue?",
    answer: "Yes. KabatOne integrates JBPM's national fire and rescue command structure — supporting 15 state JBPM offices, 200+ fire stations, the National Crisis and Disaster Management Center (PKBM), and multi-agency coordination for industrial, forest fire, and flood rescue operations."
  },
  {
    question: "How does KabatOne support Malaysia's Safe City Programme and CCTV networks?",
    answer: "KabatOne integrates with Malaysia's Safe City Programme (CCTV networks in Kuala Lumpur, Putrajaya, and major urban centres), DBKL Smart City cameras, PLUS Expressways ANPR, and MyCC (Malaysia City Command) operations centers — providing AI-powered analytics and unified command visibility."
  },
  {
    question: "Can KabatOne manage flood operations in Malaysia?",
    answer: "Yes. KabatOne integrates DID (Department of Irrigation and Drainage) flood alerts, JMM/MetMalaysia weather warnings, and NADMA (National Disaster Management Agency) situation reports — enabling pre-emptive flood response dispatch, rescue coordination, and temporary shelter management across Malaysia's monsoon season flood zones."
  },
  {
    question: "What procurement pathway does KabatOne support in Malaysia?",
    answer: "KabatOne supports procurement through MyGPR (Malaysian Government Procurement Register), ePerolehan (e-procurement portal) under Treasury Circular 5/2007 and ICT Security Policy, CIDB for construction-linked systems, and Malaysia Digital Economy Corporation (MDEC) funding channels for Smart City projects."
  }
]

const faqsEs = [
  {
    question: "¿Cómo se integra KabatOne con la estructura de la Policía Real de Malasia (PDRM)?",
    answer: "KabatOne se alinea con la jerarquía de mando de la PDRM en 14 contingentes policiales estatales (13 estados + Territorio Federal), más de 165 distritos policiales y el cuartel general nacional de Bukit Aman — proporcionando despacho CAD unificado, gestión del centro de operaciones y reportes compatibles con los estándares IIMS de la PDRM."
  },
  {
    question: "¿Puede KabatOne soportar el número de emergencia integrado 999 de Malasia?",
    answer: "Sí. KabatOne se integra con el número de emergencia único 999 de Malasia, que cubre respuesta policial (PDRM), bomberos (JBPM) y ambulancia (SAMM/HEMS) — habilitando recepción de llamadas unificada, despacho multiagencia y seguimiento de incidentes en todos los 13 estados y tres Territorios Federales."
  },
  {
    question: "¿Cómo gestiona KabatOne el cumplimiento de la Ley de Protección de Datos Personales (PDPA 2010)?",
    answer: "KabatOne está diseñado para cumplimiento total con la PDPA 2010 (Ley 709) — implementando gestión del consentimiento del titular, avisos de tratamiento de datos, controles de período de retención y salvaguardias de seguridad alineadas con las directrices del Departamento de Protección de Datos Personales (JPDP/PDPD)."
  },
  {
    question: "¿Soporta la plataforma al Jabatan Bomba dan Penyelamat (JBPM) de Malasia?",
    answer: "Sí. KabatOne integra la estructura de mando nacional de bomberos y rescate de JBPM — soportando 15 oficinas JBPM estatales, más de 200 estaciones de bomberos, el Centro Nacional de Gestión de Crisis y Desastres (PKBM) y coordinación multiagencia para operaciones industriales, de incendios forestales e inundaciones."
  },
  {
    question: "¿Cómo soporta KabatOne el Programa Safe City de Malasia y las redes CCTV?",
    answer: "KabatOne se integra con el Programa Safe City de Malasia (redes CCTV en Kuala Lumpur, Putrajaya y principales centros urbanos), cámaras Smart City DBKL, ANPR de Autopistas PLUS y centros de operaciones MyCC — proporcionando analítica de IA y visibilidad de mando unificada."
  },
  {
    question: "¿Puede KabatOne gestionar las operaciones ante inundaciones en Malasia?",
    answer: "Sí. KabatOne integra alertas de inundación del DID (Departamento de Irrigación y Drenaje), avisos meteorológicos de JMM/MetMalaysia e informes situacionales de NADMA — habilitando despacho preventivo, coordinación de rescate y gestión de albergues temporales en las zonas de inundación de la temporada monzónica."
  },
  {
    question: "¿Qué vía de contratación soporta KabatOne en Malasia?",
    answer: "KabatOne soporta contratación a través de MyGPR (Registro de Adquisiciones del Gobierno Malayo), ePerolehan bajo la Circular de Tesorería 5/2007 y Política de Seguridad TIC, CIDB para sistemas vinculados a construcción y canales de financiación MDEC para proyectos de Ciudad Inteligente."
  }
]

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const headline = es
    ? 'Software de Seguridad Pública para Malasia: PDRM, JBPM, NADMA/DID, PDPA 2010 y Ciberseguridad/NACSA'
    : 'Public Safety Software for Malaysia: PDRM, JBPM, NADMA/DID, PDPA 2010 & NACSA Cybersecurity'
  const description = es
    ? 'Plataforma unificada para PDRM, JBPM y SAMM de Malasia — despacho CAD integrado para 14 contingentes y coordinación de inundaciones NADMA/DID, gestión de cámaras Safe City conforme a PDPA 2010 y cumplimiento NACSA con contratación ePerolehan/MyGPR.'
    : 'Unified platform for Malaysian PDRM, JBPM, and SAMM — integrated CAD dispatch for 14 state contingents and NADMA/DID flood coordination, Safe City camera management compliant with PDPA 2010, and NACSA cybersecurity compliance with ePerolehan/MyGPR procurement.'
  const url = es
    ? 'https://kabatone.com/es/resources/public-safety-software-malaysia'
    : 'https://kabatone.com/resources/public-safety-software-malaysia'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources' : 'https://kabatone.com/resources' },
    { name: es ? 'Malasia' : 'Malaysia', url },
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
              {es ? 'Guía de Mercado — Malasia' : 'Market Guide — Malaysia'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {es
                ? 'Software de Seguridad Pública para Malasia'
                : 'Public Safety Software for Malaysia'}
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {es
                ? 'PDRM, JBPM/PKBM, NADMA/DID, PDPA 2010/JPDP, NACSA y contratación ePerolehan/MyGPR'
                : 'PDRM, JBPM/PKBM, NADMA/DID, PDPA 2010/JPDP, NACSA & ePerolehan/MyGPR procurement'}
            </p>
            <div className="flex flex-wrap gap-3">
              {['PDRM / JBPM / SAMM', 'NADMA / DID / MetMalaysia', 'PDPA 2010 / JPDP', 'NACSA / CyberSecurity Malaysia', 'ePerolehan / MyGPR', 'Safe City / DBKL Smart'].map(tag => (
                <span key={tag} className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'El Panorama de Seguridad Pública en Malasia' : 'The Malaysian Public Safety Landscape'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Malasia es una monarquía constitucional federal con 33+ millones de habitantes, organizada en 13 estados y 3 Territorios Federales (Kuala Lumpur, Putrajaya, Labuan). La Policía Real de Malasia (Polis Diraja Malaysia / PDRM) está encabezada por el Inspector General de la Policía (IGP) desde el cuartel general de Bukit Aman, Kuala Lumpur. La PDRM cuenta con 14 contingentes policiales estatales, 165+ distritos, y unidades especializadas como UTK (Unidad Tindak Khas), VAT 69 y la Policía del Mar (APMM compartida con funciones de guardia costera). El Jabatan Bomba dan Penyelamat Malaysia (JBPM) gestiona los servicios de bomberos y rescate con 15 oficinas estatales y 200+ estaciones.'
                : "Malaysia is a constitutional monarchy with 33+ million people, organized into 13 states and 3 Federal Territories (Kuala Lumpur, Putrajaya, Labuan). The Royal Malaysia Police (Polis Diraja Malaysia / PDRM) is headed by the Inspector General of Police (IGP) from Bukit Aman headquarters in Kuala Lumpur. PDRM has 14 state police contingents, 165+ districts, and specialized units including UTK (Special Action Unit), VAT 69, and Marine Police (APMM with coast guard functions). The Jabatan Bomba dan Penyelamat Malaysia (JBPM) manages fire and rescue with 15 state offices and 200+ fire stations."}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'La Agencia Nacional de Gestión de Desastres (NADMA) coordina la respuesta multiagencia bajo el Marco Nacional de Gestión de Desastres. Malasia sufre inundaciones monzónicas anuales — las inundaciones de 2021 en Selangor/Kuala Lumpur afectaron a más de 70,000 personas y causaron pérdidas de 6,100 millones de ringgit. El Departamento de Irrigación y Drenaje (DID/JPS) gestiona la Red de Alerta de Inundaciones (Infobanjir) con más de 2,800 estaciones hidrológicas.'
                : 'The National Disaster Management Agency (NADMA) coordinates multi-agency response under the National Disaster Management Framework. Malaysia experiences annual monsoon floods — the 2021 Selangor/Kuala Lumpur floods affected 70,000+ people and caused RM 6.1 billion in losses. The Department of Irrigation and Drainage (DID/JPS) manages the Flood Alert Network (Infobanjir) with 2,800+ hydrological stations.'}
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
                  {es ? 'PDRM y Fuerzas de Seguridad' : 'PDRM and Security Forces'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• Bukit Aman HQ, Kuala Lumpur (IGP/DIGP)' : '• Bukit Aman HQ, Kuala Lumpur (IGP/DIGP)'}</li>
                  <li>{es ? '• 14 contingentes estatales (13 estados + FT KL)' : '• 14 state contingents (13 states + FT KL)'}</li>
                  <li>{es ? '• UTK (Unidad Tindak Khas): operaciones especiales' : '• UTK (Special Action Unit): special operations'}</li>
                  <li>{es ? '• VAT 69 Commando: contraterrorismo' : '• VAT 69 Commando: counter-terrorism'}</li>
                  <li>{es ? '• APMM: Agencia de Aplicación Marítima' : '• APMM: Maritime Enforcement Agency'}</li>
                  <li>{es ? '• PDRM CID, Narcotics, Commercial Crime Division' : '• PDRM CID, Narcotics, Commercial Crime Division'}</li>
                  <li>{es ? '• PDRM CCRC: Centro de Control de Comunicaciones' : '• PDRM CCRC: Communications Control Centre'}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Servicios de Emergencia' : 'Emergency Services'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• 999: número de emergencia unificado (PDRM/JBPM/SAMM)' : '• 999: unified emergency number (PDRM/JBPM/SAMM)'}</li>
                  <li>{es ? '• JBPM: Jabatan Bomba dan Penyelamat (200+ estaciones)' : '• JBPM: Fire and Rescue Dept. (200+ fire stations)'}</li>
                  <li>{es ? '• PKBM: Centro Nacional de Gestión de Crisis y Desastres' : '• PKBM: National Crisis and Disaster Management Centre'}</li>
                  <li>{es ? '• SAMM: Ambulancia/Alam Flora/hospital network' : '• SAMM: ambulance/Alam Flora/hospital network'}</li>
                  <li>{es ? '• NADMA: Agencia Nacional de Gestión de Desastres' : '• NADMA: National Disaster Management Agency'}</li>
                  <li>{es ? '• ATM: Fuerzas Armadas de Malasia (apoyo HADR)' : '• ATM: Armed Forces of Malaysia (HADR support)'}</li>
                  <li>{es ? '• DID/JPS: Infobanjir, 2,800+ estaciones hidrológicas' : '• DID/JPS: Infobanjir, 2,800+ hydrological stations'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Safe City & CCTV */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Safe City y Vigilancia Urbana' : 'Safe City & Urban Surveillance'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'El Programa Safe City de Malasia (Kuala Lumpur, Putrajaya, Petaling Jaya y otras ciudades) despliega redes de CCTV integradas con los centros de mando PDRM y los centros de operaciones de ciudades inteligentes. Dewan Bandaraya Kuala Lumpur (DBKL) gestiona más de 3,000 cámaras de videovigilancia urbana integradas con el DBKL Smart City Command Center. El sistema ANPR de PLUS Expressways cubre 1,200+ km de autopistas nacionales. El proyecto MyCC (Malaysia City Command) unifica la vigilancia de múltiples ciudades en una plataforma de mando centralizada.'
                : "Malaysia's Safe City Programme (Kuala Lumpur, Putrajaya, Petaling Jaya, and other cities) deploys CCTV networks integrated with PDRM command centres and smart city operations centers. Dewan Bandaraya Kuala Lumpur (DBKL) manages 3,000+ urban surveillance cameras integrated with the DBKL Smart City Command Center. PLUS Expressways ANPR covers 1,200+ km of national highways. The MyCC (Malaysia City Command) project unifies surveillance from multiple cities into a centralized command platform."}
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
                    <strong>PDPA 2010 (Act 709):</strong>{' '}
                    {es ? 'Ley de Protección de Datos Personales — 7 principios de protección, consentimiento, derechos del titular, salvaguardias de seguridad' : 'Personal Data Protection Act — 7 protection principles, consent, data subject rights, security safeguards'}
                  </li>
                  <li>
                    <strong>JPDP/PDPD:</strong>{' '}
                    {es ? 'Departamento de Protección de Datos Personales — autoridad supervisora bajo el Ministerio de Comunicaciones' : 'Personal Data Protection Department — supervisory authority under Ministry of Communications'}
                  </li>
                  <li>
                    <strong>{es ? 'PDPA Amendment (2024):' : 'PDPA Amendment (2024):'}</strong>{' '}
                    {es ? 'Reforma de 2024: notificación obligatoria de brechas en 72h, nuevas sanciones, DPO recomendado' : '2024 reform: mandatory 72-hour breach notification, enhanced penalties, DPO recommended'}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Ciberseguridad y TIC' : 'Cybersecurity & ICT'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>NACSA (National Cyber Security Agency):</strong>{' '}
                    {es ? 'Agencia Nacional de Ciberseguridad — estándares de infraestructura crítica de información (CIIP), RiSQ framework' : 'National Cyber Security Agency — Critical Information Infrastructure Protection (CIIP), RiSQ framework'}
                  </li>
                  <li>
                    <strong>CyberSecurity Malaysia:</strong>{' '}
                    {es ? 'Agencia técnica nacional — MyCERT, MS ISO/IEC 27001 para sistemas gubernamentales' : 'National technical agency — MyCERT, MS ISO/IEC 27001 for government systems'}
                  </li>
                  <li>
                    <strong>Computer Crimes Act 1997:</strong>{' '}
                    {es ? 'Ley de Delitos Informáticos — marco de ciberdelitos; Communications and Multimedia Act 1998' : 'Cybercrime framework; Communications and Multimedia Act 1998'}
                  </li>
                  <li>
                    <strong>MyDIGITAL / Malaysia Digital:</strong>{' '}
                    {es ? 'Hoja de ruta de transformación digital nacional 2021–2030' : 'National digital transformation roadmap 2021–2030'}
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
              {es ? 'Contratación Pública: ePerolehan y MyGPR' : 'Public Procurement: ePerolehan & MyGPR'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'La contratación pública en Malasia se rige por la Circular de Tesorería 5/2007 (y actualizaciones) y se implementa a través de ePerolehan (portal de e-procurement del gobierno federal) y MyGPR (Registro de Proveedores del Gobierno Malayo). Las adquisiciones TIC deben cumplir con la Política de Seguridad TIC del Gobierno (MAMPU), las directrices de la NACSA para infraestructura crítica y los requisitos de certificación MS ISO/IEC 27001. Los proyectos Smart City pueden financiarse a través del Ministerio de Finanzas, MDEC (Malaysia Digital Economy Corporation), fondos de AAIB y prestamos del ADB/BID para infraestructura digital urbana.'
                : "Malaysia's public procurement is governed by Treasury Circular 5/2007 (and updates) and implemented through ePerolehan (federal government e-procurement portal) and MyGPR (Malaysian Government Procurement Register). ICT procurements must comply with the Government ICT Security Policy (MAMPU), NACSA guidelines for critical infrastructure, and MS ISO/IEC 27001 certification requirements. Smart City projects may be funded through the Ministry of Finance, MDEC (Malaysia Digital Economy Corporation), AAIB funds, and ADB/IDB loans for urban digital infrastructure."}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                {es ? 'Canales de Contratación KabatOne' : 'KabatOne Procurement Channels'}
              </h3>
              <ul className="space-y-1 text-blue-800">
                <li>{es ? '• ePerolehan: licitaciones PDRM, JBPM, NADMA, KDN' : '• ePerolehan: PDRM, JBPM, NADMA, KDN bids'}</li>
                <li>{es ? '• MyGPR: registro de proveedor gubernamental federal' : '• MyGPR: federal government supplier registration'}</li>
                <li>{es ? '• MAMPU: contratos marco de nube e ICT gobierno' : '• MAMPU: government cloud and ICT framework contracts'}</li>
                <li>{es ? '• MDEC / Malaysia Digital: fondos Smart City/Digital' : '• MDEC / Malaysia Digital: Smart City/Digital funds'}</li>
                <li>{es ? '• ADB/BID/WB: financiamiento ODA para infraestructura' : '• ADB/IDB/World Bank: ODA financing for infrastructure'}</li>
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
          h2={es ? '¿Listo para modernizar la seguridad pública en Malasia?' : 'Ready to modernize public safety in Malaysia?'}
          subtitle={es
            ? 'Conozca cómo KabatOne apoya a la PDRM, JBPM y NADMA con una plataforma unificada conforme a PDPA 2010/JPDP y compatible con ePerolehan/MyGPR.'
            : 'See how KabatOne supports PDRM, JBPM, and NADMA with a unified platform compliant with PDPA 2010/JPDP and compatible with ePerolehan/MyGPR procurement.'}
        />
      </main>
      <Footer es={es} />
    </>
  )
}
