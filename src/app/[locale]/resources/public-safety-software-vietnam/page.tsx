import { generatePageMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareVietnam', locale)
}

const faqs = [
  {
    question: "How does KabatOne integrate with Vietnam's Ministry of Public Security (MPS/Bộ Công an) structure?",
    answer: "KabatOne aligns with Vietnam's MPS command hierarchy — integrating with the General Department of Police, 63 provincial police departments (Công an tỉnh/thành phố), and district/commune stations. The platform provides unified CAD dispatch and operations center management compatible with C06/C09 technical standards."
  },
  {
    question: "Can KabatOne support Vietnam's national emergency number 113/114/115 dispatch?",
    answer: "Yes. KabatOne integrates Vietnam's tri-service emergency numbers: 113 (police/Công an), 114 (fire/Cảnh sát PCCC), and 115 (medical/VSATTP) — enabling unified call-taking, cross-agency dispatch, and incident tracking from a single operations center."
  },
  {
    question: "How does KabatOne handle Vietnam's Personal Data Protection Decree (Nghị định 13/2023)?",
    answer: "KabatOne is designed for compliance with Decree 13/2023/NĐ-CP — implementing data subject consent management, data processing logs, cross-border data transfer controls, and mandatory breach notification aligned with the Ministry of Public Security enforcement framework."
  },
  {
    question: "Does KabatOne support flood and typhoon operations in Vietnam?",
    answer: "Yes. KabatOne integrates VNMHA weather alerts, NCHMF typhoon tracks, and Central Steering Committee for Natural Disaster Prevention (Ban Chỉ đạo TW về PCTT) situation reports — enabling pre-emptive evacuation dispatch and rescue coordination for the Mekong Delta and Central Coast typhoon corridors."
  },
  {
    question: "Can the platform connect to Vietnam's national surveillance and camera networks?",
    answer: "KabatOne integrates with Hanoi and Ho Chi Minh City Smart City CCTV networks, ANPR systems on national highways (VEC/VECE), and MPS crime prevention camera networks — providing AI-powered analytics compliant with Vietnam's cybersecurity law (Luật An ninh mạng 2018)."
  },
  {
    question: "How does KabatOne support procurement through Vietnam's national e-procurement system?",
    answer: "KabatOne supports procurement through the National Procurement Network (Hệ thống mạng đấu thầu quốc gia / muasamcong.mpi.gov.vn) under the Bidding Law (Luật Đấu thầu) and MPS/MOST/MOF guidelines for ICT security systems, including direct procurement under Circular 58/2016/TT-BTC."
  },
  {
    question: "Is KabatOne suitable for Vietnam's Smart City initiatives in Hanoi and Ho Chi Minh City?",
    answer: "Yes. KabatOne aligns with Vietnam's National Smart City Program (Decision 950/QĐ-TTg, 2018) — providing integrated public safety operations center capabilities for urban command centers in Hanoi's IOC (Integrated Operations Center) and Ho Chi Minh City's TTGS (Supervisory Center)."
  }
]

const faqsEs = [
  {
    question: "¿Cómo se integra KabatOne con la estructura del Ministerio de Seguridad Pública de Vietnam (MPS/Bộ Công an)?",
    answer: "KabatOne se alinea con la jerarquía de mando del MPS — integrándose con el Departamento General de Policía, 63 departamentos provinciales de policía (Công an tỉnh/thành phố) y estaciones distritales. La plataforma proporciona despacho CAD unificado y gestión del centro de operaciones compatible con los estándares técnicos C06/C09."
  },
  {
    question: "¿Puede KabatOne apoyar el despacho de emergencias nacionales 113/114/115 de Vietnam?",
    answer: "Sí. KabatOne integra los tres números de emergencia de Vietnam: 113 (policía/Công an), 114 (bomberos/Cảnh sát PCCC) y 115 (médico/VSATTP) — habilitando recepción de llamadas unificada, despacho multiagencia y seguimiento de incidentes desde un único centro de operaciones."
  },
  {
    question: "¿Cómo gestiona KabatOne el Decreto de Protección de Datos Personales de Vietnam (Nghị định 13/2023)?",
    answer: "KabatOne está diseñado para cumplimiento con el Decreto 13/2023/NĐ-CP — implementando gestión de consentimiento de titulares, registros de tratamiento de datos, controles de transferencia transfronteriza y notificación de brechas alineada con el marco de aplicación del Ministerio de Seguridad Pública."
  },
  {
    question: "¿Soporta KabatOne operaciones ante inundaciones y tifones en Vietnam?",
    answer: "Sí. KabatOne integra alertas meteorológicas de VNMHA, rutas de tifones del NCHMF e informes del Comité Central de Prevención de Desastres Naturales (Ban Chỉ đạo TW về PCTT) — habilitando despacho de evacuación preventiva y coordinación de rescate para el Delta del Mekong y el corredor de tifones de la Costa Central."
  },
  {
    question: "¿Puede la plataforma conectarse a las redes nacionales de vigilancia y cámaras de Vietnam?",
    answer: "KabatOne se integra con las redes CCTV Smart City de Hanói y Ciudad Ho Chi Minh, sistemas ANPR en autopistas nacionales (VEC/VECE) y redes de cámaras de prevención del crimen del MPS — proporcionando analítica de IA conforme a la Ley de Ciberseguridad de Vietnam (Luật An ninh mạng 2018)."
  },
  {
    question: "¿Cómo soporta KabatOne la contratación a través del sistema nacional de e-procurement de Vietnam?",
    answer: "KabatOne soporta contratación a través de la Red Nacional de Adquisiciones (muasamcong.mpi.gov.vn) bajo la Ley de Licitaciones (Luật Đấu thầu) y directrices MPS/MOST/MOF para sistemas de seguridad TIC, incluyendo contratación directa bajo la Circular 58/2016/TT-BTC."
  },
  {
    question: "¿Es KabatOne adecuado para las iniciativas de Ciudad Inteligente de Hanói y Ciudad Ho Chi Minh?",
    answer: "Sí. KabatOne se alinea con el Programa Nacional de Ciudad Inteligente de Vietnam (Decisión 950/QĐ-TTg, 2018) — proporcionando capacidades integradas de centro de operaciones de seguridad pública para los IOC de Hanói y el Centro de Supervisión (TTGS) de Ciudad Ho Chi Minh."
  }
]

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const headline = es
    ? 'Software de Seguridad Pública para Vietnam: MPS/Bộ Công an, PCCC, Nghị định 13/2023 y Luật An ninh mạng'
    : 'Public Safety Software for Vietnam: MPS/Bộ Công an, PCCC/Fire, Decree 13/2023 & Cybersecurity Law'
  const description = es
    ? 'Plataforma unificada para el MPS y la Công an de Vietnam — despacho CAD integrado para 63 Công an provinciales y coordinación de desastres VNMHA/NCHMF, gestión de cámaras conforme al Decreto 13/2023 y cumplimiento con Luật An ninh mạng con contratación muasamcong/Luật Đấu thầu.'
    : 'Unified platform for Vietnam MPS and Công an — integrated CAD dispatch for 63 provincial police departments and VNMHA/NCHMF disaster coordination, Decree 13/2023-compliant camera management, and Cybersecurity Law compliance with muasamcong/Bidding Law procurement.'
  const url = es
    ? 'https://kabatone.com/es/resources/public-safety-software-vietnam/'
    : 'https://kabatone.com/resources/public-safety-software-vietnam/'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    { name: es ? 'Vietnam' : 'Vietnam', url },
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
              {es ? 'Guía de Mercado — Vietnam' : 'Market Guide — Vietnam'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {es
                ? 'Software de Seguridad Pública para Vietnam'
                : 'Public Safety Software for Vietnam'}
            </h1>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              {es
                ? 'MPS/Bộ Công an, PCCC/Cảnh sát PCCC, Nghị định 13/2023 y Luật An ninh mạng 2018'
                : 'MPS/Bộ Công an, PCCC/Fire Police, Decree 13/2023 & Cybersecurity Law 2018'}
            </p>
            <div className="flex flex-wrap gap-3">
              {['MPS / Công an / PCCC', 'VNMHA / NCHMF', 'Nghị định 13/2023', 'Luật An ninh mạng', 'muasamcong / Luật Đấu thầu', 'Hanoi IOC / HCMC TTGS'].map(tag => (
                <span key={tag} className="bg-red-800 text-red-100 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'El Panorama de Seguridad Pública en Vietnam' : 'The Vietnamese Public Safety Landscape'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Vietnam es un Estado de partido único con 97+ millones de habitantes, organizado en 63 unidades administrativas provinciales (tỉnh y thành phố trực thuộc trung ương). El Ministerio de Seguridad Pública (Bộ Công an / MPS) controla la Policía Popular de Vietnam (Cảnh sát Nhân dân), la Policía de Bomberos y Prevención de Incendios (Cảnh sát Phòng cháy chữa cháy / PCCC), la Policía de Seguridad Interna y el Departamento de Ciberseguridad (Cục An ninh mạng). Bajo la Ley de Policía Popular de 2018, el MPS ha integrado el Ministerio de Seguridad Pública con el antiguo Ministerio del Interior para crear una fuerza policial de más de 300,000 efectivos.'
                : "Vietnam is a single-party state with 97+ million people, organized into 63 provincial-level administrative units (tỉnh and thành phố trực thuộc trung ương). The Ministry of Public Security (Bộ Công an / MPS) controls the Vietnam People's Police (Cảnh sát Nhân dân), the Fire Prevention and Fighting Police (Cảnh sát Phòng cháy chữa cháy / PCCC), the Internal Security Police, and the Department of Cybersecurity (Cục An ninh mạng). Under the 2018 Law on People's Police, MPS merged with the former Ministry of Interior to create a police force of 300,000+ personnel."}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Vietnam sufre inundaciones estacionales graves en el Delta del Mekong (9 provincias, 17 millones de hectáreas) y tifones en la Costa Central (12–16 tifones anuales en el Mar del Sur de China). El Comité Central de Prevención de Desastres Naturales (Ban Chỉ đạo TW về PCTT) coordina la respuesta multiagencia bajo la Ley de Desastres Naturales de 2013. La Administración Hidrometeorológica de Vietnam (VNMHA) y el Centro Nacional de Pronóstico Hidrometeorológico (NCHMF) emiten alertas de tifones y lluvias extremas.'
                : 'Vietnam experiences severe seasonal flooding in the Mekong Delta (9 provinces, 17 million hectares) and typhoons on the Central Coast (12–16 typhoons annually in the South China Sea). The Central Steering Committee for Natural Disaster Prevention and Control (Ban Chỉ đạo TW về PCTT) coordinates multi-agency response under the 2013 Law on Natural Disasters. The Vietnam Meteorological and Hydrological Administration (VNMHA) and National Centre for Hydro-Meteorological Forecasting (NCHMF) issue typhoon and heavy rain alerts.'}
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
                  {es ? 'MPS y Policía Popular' : 'MPS and People\'s Police'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• Bộ Công an (MPS): sede en Hanói' : '• Bộ Công an (MPS): headquarters Hanoi'}</li>
                  <li>{es ? '• 63 Công an tỉnh/thành phố (policía provincial)' : '• 63 Công an tỉnh/thành phố (provincial police)'}</li>
                  <li>{es ? '• Policía de Hanói (CATP Hà Nội) y HCMC (CATP TPHCM)' : '• Hanoi Police (CATP Hà Nội) and HCMC (CATP TPHCM)'}</li>
                  <li>{es ? '• PCCC: Cảnh sát Phòng cháy chữa cháy (bomberos)' : '• PCCC: Fire Prevention and Fighting Police'}</li>
                  <li>{es ? '• Cục An ninh mạng (C05): ciberseguridad' : '• Cục An ninh mạng (C05): cybersecurity'}</li>
                  <li>{es ? '• C06: Gestión de Residencia y Datos Nacionales' : '• C06: National Data and Residence Management'}</li>
                  <li>{es ? '• Bộ đội Biên phòng: Guardia Fronteriza' : '• Bộ đội Biên phòng: Border Guard'}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Servicios de Emergencia' : 'Emergency Services'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• 113: Policía / Công an' : '• 113: Police / Công an'}</li>
                  <li>{es ? '• 114: Bomberos / Cảnh sát PCCC' : '• 114: Fire / Cảnh sát PCCC'}</li>
                  <li>{es ? '• 115: Ambulancia / Trung tâm cấp cứu 115' : '• 115: Ambulance / Trung tâm cấp cứu 115'}</li>
                  <li>{es ? '• Trung tâm chỉ huy thông tin MPS: centro de mando' : '• Trung tâm chỉ huy thông tin MPS: command centre'}</li>
                  <li>{es ? '• Bộ Y tế / Cục Y tế dự phòng: salud pública' : '• Ministry of Health / NIHE: public health emergency'}</li>
                  <li>{es ? '• Quân đội Nhân dân (QĐND): apoyo militar' : '• Vietnam People\'s Army (QĐND): military support'}</li>
                  <li>{es ? '• Cảnh sát biển Việt Nam (VCG): guardia costera' : '• Vietnam Coast Guard (VCG): maritime security'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Smart City & CCTV */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Ciudad Inteligente: IOC Hanói y TTGS Ciudad Ho Chi Minh' : 'Smart City: Hanoi IOC & Ho Chi Minh City TTGS'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Vietnam ha invertido fuertemente en infraestructura de Ciudad Inteligente bajo la Decisión 950/QĐ-TTg (2018). Hanói opera el Centro de Operaciones Integradas (IOC) en el Edificio Administrativo de Hanói con más de 10,000 cámaras CCTV urbanas. Ciudad Ho Chi Minh gestiona el Centro de Supervisión (Trung tâm Giám sát / TTGS) coordinando vigilancia de tráfico, seguridad pública y respuesta de emergencia. Los sistemas ANPR de VEC (Vietnam Expressway Corporation) y VECE cubren más de 1,600 km de autopistas nacionales.'
                : "Vietnam has invested heavily in Smart City infrastructure under Decision 950/QĐ-TTg (2018). Hanoi operates the Integrated Operations Center (IOC) at the Hanoi Administrative Building with 10,000+ urban CCTV cameras. Ho Chi Minh City manages the Supervisory Center (Trung tâm Giám sát / TTGS) coordinating traffic surveillance, public security, and emergency response. VEC (Vietnam Expressway Corporation) and VECE ANPR systems cover 1,600+ km of national expressways."}
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
                    <strong>Nghị định 13/2023/NĐ-CP:</strong>{' '}
                    {es ? 'Decreto de Protección de Datos Personales — consentimiento, derechos de titulares, transferencia transfronteriza, notificación de brechas' : 'Personal Data Protection Decree — consent, data subject rights, cross-border transfer, breach notification'}
                  </li>
                  <li>
                    <strong>{es ? 'MPS — Enforcement Authority:' : 'MPS — Enforcement Authority:'}</strong>{' '}
                    {es ? 'El Ministerio de Seguridad Pública aplica el Decreto 13 y gestiona el Departamento de Datos Nacionales (C06)' : 'Ministry of Public Security enforces Decree 13 and manages the National Data Department (C06)'}
                  </li>
                  <li>
                    <strong>Luật Căn cước (2023):</strong>{' '}
                    {es ? 'Ley de Identificación Nacional — base de datos biométrica nacional (C06/VNEID)' : 'National Identification Law — national biometric database (C06/VNEID)'}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Ciberseguridad y TIC' : 'Cybersecurity & ICT'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Luật An ninh mạng 2018:</strong>{' '}
                    {es ? 'Ley de Ciberseguridad — localización de datos, supervisión MPS/C05, requisitos de proveedores de plataformas' : 'Cybersecurity Law — data localization, MPS/C05 oversight, platform provider requirements'}
                  </li>
                  <li>
                    <strong>Luật An toàn thông tin mạng 2015:</strong>{' '}
                    {es ? 'Ley de Seguridad de la Información — protección de infraestructura crítica (BTTTT/MIC)' : 'Network Information Security Law — critical infrastructure protection (BTTTT/MIC)'}
                  </li>
                  <li>
                    <strong>VNCERT/CC:</strong>{' '}
                    {es ? 'Centro Nacional de Respuesta a Emergencias de Ciberseguridad (BTTTT)' : 'National Cyber Security Emergency Response Center (BTTTT/MIC)'}
                  </li>
                  <li>
                    <strong>Nghị định 85/2016:</strong>{' '}
                    {es ? 'Seguridad de sistemas de información por niveles (4 niveles de seguridad)' : 'Information system security by levels (4 security tiers)'}
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
              {es ? 'Contratación Pública: muasamcong y Luật Đấu thầu' : 'Public Procurement: muasamcong & Bidding Law'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'La contratación pública en Vietnam se rige por la Ley de Licitaciones (Luật Đấu thầu) y sus decretos de implementación (Nghị định 24/2024). Las adquisiciones gubernamentales deben publicarse en el Sistema Nacional de Adquisiciones (muasamcong.mpi.gov.vn), gestionado por el MPI (Ministerio de Planificación e Inversión). Para sistemas de seguridad TIC, las directrices específicas del MPS, BTTTT y MOF regulan los procesos de evaluación técnica. Los proyectos Smart City pueden financiarse a través de ODA (JICA, ADB, Banco Mundial) y el programa de Inversión Pública del Gobierno de Vietnam.'
                : "Vietnam's public procurement is governed by the Bidding Law (Luật Đấu thầu) and its implementing decrees (Nghị định 24/2024). Government procurement must be published on the National Procurement System (muasamcong.mpi.gov.vn), managed by MPI (Ministry of Planning and Investment). For ICT security systems, specific guidelines from MPS, BTTTT, and MOF regulate technical evaluation processes. Smart City projects may be financed through ODA (JICA, ADB, World Bank) and Vietnam Government's Public Investment Program."}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                {es ? 'Canales de Contratación KabatOne' : 'KabatOne Procurement Channels'}
              </h3>
              <ul className="space-y-1 text-blue-800">
                <li>{es ? '• muasamcong: licitaciones MPS, Công an tỉnh, PCCC' : '• muasamcong: MPS, Công an tỉnh, PCCC bids'}</li>
                <li>{es ? '• MPS/C06 framework: contratos técnicos directos' : '• MPS/C06 framework: direct technical contracts'}</li>
                <li>{es ? '• UBND tỉnh/thành phố: presupuestos Smart City LGU' : '• UBND tỉnh/thành phố: LGU Smart City budgets'}</li>
                <li>{es ? '• ODA: JICA, ADB, WB para proyectos Safe City' : '• ODA: JICA, ADB, World Bank for Safe City projects'}</li>
                <li>{es ? '• Chương trình đầu tư công: Fondo de Inversión Pública' : '• Chương trình đầu tư công: Public Investment Program'}</li>
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
          h2={es ? '¿Listo para modernizar la seguridad pública en Vietnam?' : 'Ready to modernize public safety in Vietnam?'}
          subtitle={es
            ? 'Conozca cómo KabatOne apoya al MPS/Công an y PCCC de Vietnam con una plataforma unificada conforme al Decreto 13/2023 y compatible con muasamcong/Luật Đấu thầu.'
            : 'See how KabatOne supports Vietnam MPS/Công an and PCCC with a unified platform compliant with Decree 13/2023 and compatible with muasamcong/Bidding Law procurement.'}
        />
      </main>
      <Footer es={es} />
    </>
  )
}
