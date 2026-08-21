import { generatePageMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareEgypt', locale)
}

const faqs = [
  {
    question: "How does KabatOne integrate with the Egyptian Ministry of Interior (MOI) police structure?",
    answer: "KabatOne aligns with Egypt's MOI command hierarchy — integrating with the General Directorate of Operations (GDO), 27 governorate security directorates, Cairo Security Directorate, Alexandria Security Directorate, and specialized central security sectors — providing unified CAD dispatch, real-time situational awareness, and reporting compatible with Egyptian Police protocols and the National Security Command Centre (NSCC)."
  },
  {
    question: "Can KabatOne support Egypt's Civil Protection Service and emergency coordination?",
    answer: "Yes. KabatOne integrates the Civil Protection Service (CPS/Ḥimāya Madaniyya), the National Authority for Remote Sensing and Space Sciences (NARSS) for disaster monitoring, Egyptian Meteorological Authority (EMA) alerts, and National Disaster Risk Reduction Platform — enabling unified multi-agency coordination for Nile floods, Red Sea cyclones, and desert storm events."
  },
  {
    question: "How does KabatOne handle Egypt's Personal Data Protection Law (PDPL 2020) compliance?",
    answer: "KabatOne is designed for full compliance with Egypt's Personal Data Protection Law (Law No. 151 of 2020) — implementing data subject rights (access, correction, erasure), lawful processing conditions, Data Protection Officer (DPO) requirements, mandatory breach notification to the Personal Data Protection Centre (PDPC/Centre National), and cross-border data transfer restrictions."
  },
  {
    question: "Can KabatOne support Cairo Safe City and Egypt's Smart City surveillance?",
    answer: "Yes. KabatOne integrates Cairo's national CCTV surveillance network (100,000+ cameras including Huawei Safe City partnership), Sphinx Smart City operations, New Administrative Capital (NAC) Integrated Operations Centre, and Egyptian Traffic Police ANPR systems on highways — providing AI-powered analytics and unified command visibility across Egypt's major urban centers."
  },
  {
    question: "How does KabatOne support Egypt Vision 2030 digital transformation goals?",
    answer: "KabatOne aligns with Egypt's Vision 2030 Digital Transformation pillar and the Digital Egypt Strategy — supporting the Ministry of Communications and Information Technology (MCIT) e-Government portal integration, Smart Police Stations initiative (150+ deployed), and the New Administrative Capital's fully digital Integrated Operations Centre."
  },
  {
    question: "What cybersecurity compliance does KabatOne offer for Egyptian government systems?",
    answer: "KabatOne aligns with Egypt's Cybersecurity Law (Law No. 175 of 2018), National Cybersecurity Authority (NCSA/EG-CERT) standards, and Supreme Cybersecurity Council requirements — meeting procurement and certification standards for national security ICT systems under MCIT and NTRA (National Telecom Regulatory Authority) frameworks."
  },
  {
    question: "What procurement pathway does KabatOne support in Egypt?",
    answer: "KabatOne supports procurement through Egypt's Government Procurement Portal under the New Public Procurement Law (Law No. 182 of 2018) administered by the General Authority for Government Services (GAGS) — including open competition, limited competition, direct contracting for national security systems, and MOI specialized procurement under the Presidential Decree framework."
  }
]

const faqsEs = [
  {
    question: "¿Cómo se integra KabatOne con la estructura policial del Ministerio del Interior de Egipto (MOI)?",
    answer: "KabatOne se alinea con la jerarquía de mando del MOI de Egipto — integrándose con la Dirección General de Operaciones (GDO), 27 direcciones de seguridad de gobernaciones, la Dirección de Seguridad de El Cairo, la Dirección de Seguridad de Alejandría y sectores de seguridad central especializados — proporcionando despacho CAD unificado y reportes compatibles con los protocolos de la Policía Egipcia y el Centro de Mando de Seguridad Nacional (NSCC)."
  },
  {
    question: "¿Puede KabatOne soportar el Servicio de Protección Civil de Egipto y la coordinación de emergencias?",
    answer: "Sí. KabatOne integra el Servicio de Protección Civil (CPS/Ḥimāya Madaniyya), la Autoridad Nacional de Teledetección y Ciencias del Espacio (NARSS) para monitoreo de desastres, alertas de la Autoridad Meteorológica Egipcia (EMA) y la Plataforma Nacional de Reducción del Riesgo de Desastres — habilitando coordinación multiagencia para inundaciones del Nilo, ciclones del Mar Rojo y tormentas de arena."
  },
  {
    question: "¿Cómo gestiona KabatOne el cumplimiento de la Ley de Protección de Datos Personales de Egipto (PDPL 2020)?",
    answer: "KabatOne está diseñado para cumplimiento total con la Ley de Protección de Datos Personales de Egipto (Ley N.° 151 de 2020) — implementando derechos del titular (acceso, rectificación, borrado), condiciones de procesamiento lícito, requisitos de Oficial de Protección de Datos (DPO), notificación obligatoria de brechas al PDPC/Centro Nacional y restricciones de transferencia transfronteriza."
  },
  {
    question: "¿Puede KabatOne soportar el Safe City de El Cairo y la vigilancia de las Ciudades Inteligentes de Egipto?",
    answer: "Sí. KabatOne integra la red nacional de videovigilancia de El Cairo (100,000+ cámaras incluyendo la asociación Huawei Safe City), operaciones de la Ciudad Inteligente Sphinx, el Centro de Operaciones Integradas de la Nueva Capital Administrativa (NAC) y los sistemas ANPR de la Policía de Tráfico Egipcia en autopistas — proporcionando analítica de IA y visibilidad de mando unificada."
  },
  {
    question: "¿Cómo soporta KabatOne los objetivos de transformación digital de la Visión Egipto 2030?",
    answer: "KabatOne se alinea con el pilar de Transformación Digital de la Visión Egipto 2030 y la Estrategia Digital Egipto — soportando integración con el portal de eGobierno del MCIT, la iniciativa de Estaciones de Policía Inteligentes (150+ desplegadas) y el Centro de Operaciones Integradas totalmente digital de la Nueva Capital Administrativa."
  },
  {
    question: "¿Qué cumplimiento de ciberseguridad ofrece KabatOne para sistemas gubernamentales egipcios?",
    answer: "KabatOne se alinea con la Ley de Ciberseguridad de Egipto (Ley N.° 175 de 2018), estándares de la Autoridad Nacional de Ciberseguridad (NCSA/EG-CERT) y requisitos del Consejo Supremo de Ciberseguridad — cumpliendo estándares de contratación y certificación para sistemas TIC de seguridad nacional bajo los marcos del MCIT y la NTRA."
  },
  {
    question: "¿Qué vía de contratación soporta KabatOne en Egipto?",
    answer: "KabatOne soporta contratación a través del Portal de Contratación Gubernamental bajo la Nueva Ley de Contratación Pública (Ley N.° 182 de 2018) administrada por la GAGS — incluyendo competencia abierta, competencia limitada, contratación directa para sistemas de seguridad nacional y contratación especializada del MOI bajo el marco del Decreto Presidencial."
  }
]

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const headline = es
    ? 'Software de Seguridad Pública para Egipto: MOI/Policía Egipcia, CPS, PDPL 2020/PDPC y Ley de Ciberseguridad 2018'
    : 'Public Safety Software for Egypt: MOI/Egyptian Police, CPS, PDPL 2020/PDPC & Cybersecurity Law 2018'
  const description = es
    ? 'Plataforma unificada para MOI, Policía Egipcia y CPS — despacho CAD integrado para 27 gobernaciones y coordinación de emergencias EMA/NARSS, gestión de cámaras Cairo Safe City conforme a PDPL 2020 y cumplimiento NCSA/EG-CERT con contratación GAGS/Ley 182/2018.'
    : 'Unified platform for Egyptian MOI, Police, and CPS — integrated CAD dispatch for 27 governorates and EMA/NARSS emergency coordination, Cairo Safe City camera management compliant with PDPL 2020, and NCSA/EG-CERT compliance with GAGS/Law 182/2018 procurement.'
  const url = es
    ? 'https://kabatone.com/es/resources/public-safety-software-egypt'
    : 'https://kabatone.com/resources/public-safety-software-egypt'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources' : 'https://kabatone.com/resources' },
    { name: es ? 'Egipto' : 'Egypt', url },
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
        <section className="bg-gradient-to-br from-slate-900 to-amber-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-amber-300 text-sm font-medium mb-4 uppercase tracking-wide">
              {es ? 'Guía de Mercado — Egipto' : 'Market Guide — Egypt'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {es
                ? 'Software de Seguridad Pública para Egipto'
                : 'Public Safety Software for Egypt'}
            </h1>
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              {es
                ? 'MOI/Policía Egipcia, CPS/EMA, PDPL 2020/PDPC, Ley de Ciberseguridad 2018/NCSA, Cairo Safe City 100K+ cámaras y contratación GAGS/Ley 182'
                : 'MOI/Egyptian Police, CPS/EMA, PDPL 2020/PDPC, Cybersecurity Law 2018/NCSA, Cairo Safe City 100K+ cameras & GAGS/Law 182 procurement'}
            </p>
            <div className="flex flex-wrap gap-3">
              {['MOI / Egyptian Police / GDO', 'CPS / EMA / NARSS', 'Cairo Safe City 100K+ cameras', 'PDPL 2020 / PDPC', 'NCSA / EG-CERT', 'NAC IOC / Smart Sphinx City'].map(tag => (
                <span key={tag} className="bg-amber-800 text-amber-100 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? "El Panorama de Seguridad Pública en Egipto" : "Egypt's Public Safety Landscape"}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Egipto es la nación árabe más poblada con 105+ millones de habitantes, organizada en 27 gobernaciones (محافظات). El Ministerio del Interior (وزارة الداخلية / MOI) controla la Policía Egipcia — la mayor fuerza policial de África y el mundo árabe — con la Dirección General de Operaciones (GDO), 27 Direcciones de Seguridad de Gobernaciones, la Seguridad Central (CS/Amn Markazi), la Seguridad del Estado (SS/Amn ad-Dawla) y la Policía de Tráfico. El Servicio de Protección Civil (Ḥimāya Madaniyya) gestiona bomberos y rescate bajo el MOI con presencia en todas las gobernaciones. Egipto está implementando ambiciosas iniciativas de seguridad Smart City en el marco de la Visión Egipto 2030.'
                : "Egypt is the Arab world's most populous nation with 105+ million people, organized into 27 governorates (محافظات). The Ministry of Interior (وزارة الداخلية / MOI) controls the Egyptian Police — Africa's and the Arab world's largest police force — with the General Directorate of Operations (GDO), 27 governorate security directorates, Central Security (CS/Amn Markazi), State Security (SS/Amn ad-Dawla), and Traffic Police. The Civil Protection Service (Ḥimāya Madaniyya) manages fire and rescue under MOI with presence in all governorates. Egypt is implementing ambitious Smart City security initiatives under Egypt Vision 2030."}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'La Nueva Capital Administrativa (NAC) — el mayor proyecto de ciudad nueva del mundo — está siendo construida a 45 km de El Cairo con un Centro de Operaciones Integradas (IOC) de última generación que gestionará todos los servicios gubernamentales con IA y Big Data. El proyecto Cairo Safe City incluye más de 100,000 cámaras de vigilancia integradas con la plataforma Huawei Safe City. La Autoridad Nacional de Ciberseguridad (NCSA/EG-CERT) fue creada en 2017 para gestionar la ciberseguridad nacional y la protección de infraestructura crítica.'
                : "The New Administrative Capital (NAC) — the world's largest new city project — is being built 45 km from Cairo with a next-generation Integrated Operations Centre (IOC) that will manage all government services with AI and Big Data. The Cairo Safe City project includes 100,000+ surveillance cameras integrated with the Huawei Safe City platform. The National Cybersecurity Authority (NCSA/EG-CERT) was created in 2017 to manage national cybersecurity and critical infrastructure protection."}
            </p>
          </div>
        </section>

        {/* Police Structure */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Estructura Policial y de Seguridad' : 'Police and Security Structure'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Ministerio del Interior y Policía' : 'Ministry of Interior and Police'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• MOI HQ, El Cairo (Ministro del Interior)' : '• MOI HQ, Cairo (Minister of Interior)'}</li>
                  <li>{es ? '• GDO: Dirección General de Operaciones (centro de mando)' : '• GDO: General Directorate of Operations (command centre)'}</li>
                  <li>{es ? '• 27 Direcciones de Seguridad de Gobernaciones' : '• 27 Governorate Security Directorates'}</li>
                  <li>{es ? '• Seguridad Central (CS): fuerzas de orden público' : '• Central Security (CS): public order forces'}</li>
                  <li>{es ? '• Policía de Tráfico: ANPR en autopistas nacionales' : '• Traffic Police: ANPR on national highways'}</li>
                  <li>{es ? '• Seguridad Turística (TS): protección de sitios turísticos' : '• Tourist Security (TS): tourist site protection'}</li>
                  <li>{es ? '• Fuerzas Especiales (NSSA): antiterrorismo' : '• Special Forces (NSSA): counter-terrorism'}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Servicios de Emergencia' : 'Emergency Services'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• 122: policía; 180: bomberos; 123: ambulancia (SCM)' : '• 122: police; 180: fire; 123: ambulance (SCM)'}</li>
                  <li>{es ? '• CPS/Ḥimāya Madaniyya: bomberos y rescate (MOI)' : '• CPS/Ḥimāya Madaniyya: fire and rescue (MOI)'}</li>
                  <li>{es ? '• SCM: Servicio Central de Ambulancias (MOH)' : '• SCM: Central Ambulance Service (MOH)'}</li>
                  <li>{es ? '• EMA: Autoridad Meteorológica Egipcia (alertas)' : '• EMA: Egyptian Meteorological Authority (alerts)'}</li>
                  <li>{es ? '• NARSS: teledetección y vigilancia de desastres' : '• NARSS: remote sensing and disaster monitoring'}</li>
                  <li>{es ? '• Ejército Egipcio: apoyo HADR y seguridad nacional' : '• Egyptian Armed Forces: HADR and national security'}</li>
                  <li>{es ? '• Guardia Costera Egipcia: Mediterráneo/Mar Rojo' : '• Egyptian Coast Guard: Mediterranean/Red Sea'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Smart City */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Cairo Safe City, NAC y Smart Egypt' : 'Cairo Safe City, NAC & Smart Egypt'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'El Cairo es una de las ciudades más vigiladas del mundo con más de 100,000 cámaras integradas en la plataforma Huawei Safe City. El sistema de la Policía de Tráfico Egipcia cubre las principales autopistas con ANPR, reconocimiento facial y analítica de tráfico en tiempo real. La Nueva Capital Administrativa (NAC) — diseñada para 6.5 millones de habitantes — cuenta con el IOC más avanzado de Africa y el Medio Oriente con 6,000+ cámaras CCTV, sensores IoT, gestión de energía inteligente y plataforma de gobierno digital integrada. Las iniciativas Smart Stations de la Policía Egipcia han digitalizado más de 150 estaciones de policía con gestión de incidentes en línea.'
                : "Cairo is one of the world's most surveilled cities with 100,000+ cameras integrated in the Huawei Safe City platform. The Egyptian Traffic Police system covers major highways with ANPR, facial recognition, and real-time traffic analytics. The New Administrative Capital (NAC) — designed for 6.5 million people — has Africa and the Middle East's most advanced IOC with 6,000+ CCTV cameras, IoT sensors, smart energy management, and integrated digital government platform. Egyptian Police Smart Stations initiatives have digitized 150+ police stations with online incident management."}
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
                  {es ? 'Protección de Datos Personales' : 'Personal Data Protection'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>PDPL — Law No. 151 of 2020:</strong>{' '}
                    {es ? 'Ley de Protección de Datos Personales — derechos del titular, consentimiento, transferencia transfronteriza, notificación de brechas, DPO obligatorio para organizaciones grandes' : 'Personal Data Protection Law — data subject rights, consent, cross-border transfer, breach notification, mandatory DPO for large organizations'}
                  </li>
                  <li>
                    <strong>PDPC (Personal Data Protection Centre):</strong>{' '}
                    {es ? 'Centro Nacional de Protección de Datos Personales — autoridad supervisora; reglamento ejecutivo en vigor' : 'National Personal Data Protection Centre — supervisory authority; implementing regulation in force'}
                  </li>
                  <li>
                    <strong>{es ? 'Executive Regulations 2020:' : 'Executive Regulations 2020:'}</strong>{' '}
                    {es ? 'Reglamento ejecutivo de la PDPL — especificaciones técnicas de seguridad, plazos de notificación, registros de tratamiento' : 'PDPL implementing regulations — technical security specifications, notification timelines, processing records'}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Ciberseguridad y TIC' : 'Cybersecurity & ICT'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Cybersecurity Law No. 175 of 2018:</strong>{' '}
                    {es ? 'Ley de Ciberseguridad — protección de infraestructura crítica de información, requisitos de seguridad para proveedores de servicios, NCSA/EG-CERT' : 'Cybersecurity Law — critical information infrastructure protection, security requirements for service providers, NCSA/EG-CERT'}
                  </li>
                  <li>
                    <strong>NCSA (National Cybersecurity Authority):</strong>{' '}
                    {es ? 'Autoridad Nacional de Ciberseguridad — regulación, acreditación de sistemas gubernamentales, EG-CERT, Consejo Supremo de Ciberseguridad' : 'National Cybersecurity Authority — regulation, government system accreditation, EG-CERT, Supreme Cybersecurity Council'}
                  </li>
                  <li>
                    <strong>NTRA / Telecom Law:</strong>{' '}
                    {es ? 'Autoridad Nacional de Regulación de Telecomunicaciones — redes de emergencia, interoperabilidad, requisitos de localización de datos' : 'National Telecom Regulatory Authority — emergency networks, interoperability, data localization requirements'}
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
              {es ? 'Contratación Pública: GAGS y Ley 182 de 2018' : 'Public Procurement: GAGS & Law 182 of 2018'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'La contratación pública en Egipto se rige por la Nueva Ley de Contratación Pública (Ley N.° 182 de 2018) administrada por la Autoridad General de Servicios Gubernamentales (GAGS) a través del portal de e-procurement. Los sistemas de seguridad pública y TIC sensibles pueden contratarse bajo el mecanismo de Decreto Presidencial o licitación MOI directa para sistemas clasificados. Los proyectos Smart City de la NAC se contratan directamente a través de la Autoridad Administrativa para la Nueva Capital Administrativa (AAC). El financiamiento externo incluye préstamos del Banco Mundial, ADB, JAICA, AIIB y fondos de la Unión Europea para modernización de seguridad pública.'
                : "Egypt's public procurement is governed by the New Public Procurement Law (Law No. 182 of 2018) administered by the General Authority for Government Services (GAGS) through the e-procurement portal. Sensitive public security and ICT systems may be contracted under the Presidential Decree mechanism or direct MOI tender for classified systems. NAC Smart City projects are contracted directly through the Administrative Authority for the New Administrative Capital (AAC). External financing includes World Bank, ADB, JAICA, AIIB, and EU loans for public safety modernization."}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                {es ? 'Canales de Contratación KabatOne' : 'KabatOne Procurement Channels'}
              </h3>
              <ul className="space-y-1 text-blue-800">
                <li>{es ? '• GAGS e-procurement: licitaciones MOI, CPS, EMA' : '• GAGS e-procurement: MOI, CPS, EMA tenders'}</li>
                <li>{es ? '• MOI direct: sistemas de seguridad especializados' : '• MOI direct: specialized security system contracts'}</li>
                <li>{es ? '• AAC/NAC: contratos Smart City NAC directos' : '• AAC/NAC: direct NAC Smart City contracts'}</li>
                <li>{es ? '• WB/ADB/AIIB/EU: financiamiento multilateral modernización' : '• WB/ADB/AIIB/EU: multilateral modernization financing'}</li>
                <li>{es ? '• MCIT/ITIDA: contratos marco digitalización gobierno' : '• MCIT/ITIDA: government digitalization framework'}</li>
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
          h2={es ? '¿Listo para modernizar la seguridad pública en Egipto?' : 'Ready to modernize public safety in Egypt?'}
          subtitle={es
            ? 'Conozca cómo KabatOne apoya al MOI, la Policía Egipcia y CPS con una plataforma unificada conforme a PDPL 2020/PDPC y compatible con la Ley 182/2018 de Contratación Pública.'
            : 'See how KabatOne supports Egyptian MOI, Police, and CPS with a unified platform compliant with PDPL 2020/PDPC and compatible with Law 182/2018 Public Procurement.'}
        />
      </main>
      <Footer es={es} />
    </>
  )
}
