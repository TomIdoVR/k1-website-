import { generatePageMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareQatar', locale)
}

const faqs = [
  {
    question: "How does KabatOne integrate with Qatar's Ministry of Interior (MOI) and Qatar Police?",
    answer: "KabatOne aligns with Qatar MOI's command structure — integrating with General Directorate of Prisons and Reformation, General Directorate of Public Security (Qatar Police), Border Security Force, Immigration Department, and the Joint Operations Centre (JOC) — providing unified CAD dispatch, real-time situational awareness, and reporting compatible with Qatar Police protocols and the National Command Centre (NCC)."
  },
  {
    question: "Can KabatOne support Hamad Medical Corporation (HMC) emergency and QAWS operations?",
    answer: "Yes. KabatOne integrates Qatar's national ambulance service (QAWS — Qatar Ambulance and Wellness Services), Hamad Medical Corporation Emergency Department, Qatar Fire and Rescue Service (QFRS), Qatar Red Crescent Society, and the National Command Centre — enabling unified call-taking, cross-agency dispatch, and integrated incident management for Qatar's world-class emergency response system."
  },
  {
    question: "How does KabatOne handle Qatar's Personal Data Protection Law (PDPL Law 13 of 2016) compliance?",
    answer: "KabatOne is designed for compliance with Qatar's Personal Data Protection Law No. 13 of 2016 and Ministry of Transport and Communications (MOTC/MCIT) implementing regulations — implementing data subject rights, lawful processing basis documentation, cross-border data transfer safeguards, mandatory breach notification to the designated supervisory authority, and Qatar Central Systems & Security Standards."
  },
  {
    question: "How does KabatOne integrate with Lusail Smart City and Qatar's National Vision 2030 infrastructure?",
    answer: "KabatOne integrates Lusail City's Smart City operations center, Qatar National Command Centre, FIFA 2022 legacy CCTV infrastructure (30,000+ cameras), Qatar Traffic Information Centre (QTIC/Ashghal), and Mowasalat (Karwa) transit systems — supporting Qatar National Vision 2030 digital transformation goals for integrated urban safety management."
  },
  {
    question: "What cybersecurity standards does KabatOne meet for Qatar's national security infrastructure?",
    answer: "KabatOne aligns with Qatar's National Cybersecurity Strategy (NCSS 2014, updated 2021), NCSA (National Cyber Security Agency) standards, Q-CERT (Qatar Computer Emergency Response Team) guidelines, and Qatar Digital Government Authority (MOCI/MDPS) ICT security requirements — meeting Qatar Government Cloud (QGCLOUD) and national security procurement standards."
  },
  {
    question: "Can KabatOne support Qatar's integrated operations for World Cup 2022 legacy events?",
    answer: "Yes. KabatOne can leverage Qatar's post-FIFA 2022 infrastructure investment including the 30,000+ camera national surveillance network, 8 smart stadiums with integrated security systems, Doha Safe City platforms, and the National Command Centre (NCC) — providing ongoing unified public safety operations for Qatar's growing event hosting portfolio."
  },
  {
    question: "What procurement pathway does KabatOne support in Qatar?",
    answer: "KabatOne supports procurement through the Government Procurement Portal (Etimad/MOF) under Qatar Law No. 24 of 2015 (Government Tenders and Auctions Law) — including public tender, limited tender, and direct contract for national security systems through Ministry of Interior specialized procurement and MOTC/MOCI ICT procurement channels."
  }
]

const faqsEs = [
  {
    question: "¿Cómo se integra KabatOne con el Ministerio del Interior (MOI) y la Policía de Qatar?",
    answer: "KabatOne se alinea con la estructura de mando del MOI de Qatar — integrándose con la Dirección General de Seguridad Pública (Policía de Qatar), la Fuerza de Seguridad Fronteriza, el Departamento de Inmigración y el Centro de Operaciones Conjuntas (JOC) — proporcionando despacho CAD unificado, conciencia situacional en tiempo real y reportes compatibles con los protocolos de la Policía de Qatar y el Centro de Mando Nacional (NCC)."
  },
  {
    question: "¿Puede KabatOne soportar las operaciones de emergencia de la HMC y QAWS?",
    answer: "Sí. KabatOne integra el servicio nacional de ambulancias de Qatar (QAWS), el Departamento de Emergencias de Hamad Medical Corporation, el Servicio de Bomberos y Rescate de Qatar (QFRS), la Sociedad de la Media Luna Roja de Qatar y el Centro de Mando Nacional — habilitando despacho unificado y gestión integrada de incidentes para el sistema de respuesta de emergencia de primer nivel de Qatar."
  },
  {
    question: "¿Cómo gestiona KabatOne el cumplimiento de la Ley de Protección de Datos Personales de Qatar (PDPL Ley 13 de 2016)?",
    answer: "KabatOne está diseñado para cumplimiento con la Ley N.° 13 de 2016 de Protección de Datos Personales de Qatar y los reglamentos de implementación del MOTC/MCIT — implementando derechos del titular de datos, documentación de base legal, salvaguardias de transferencia transfronteriza, notificación obligatoria de brechas y estándares de seguridad centrales de Qatar."
  },
  {
    question: "¿Cómo se integra KabatOne con Lusail Smart City y la infraestructura de la Visión Nacional de Qatar 2030?",
    answer: "KabatOne integra el centro de operaciones Smart City de Lusail, el Centro de Mando Nacional de Qatar, la infraestructura CCTV legado del FIFA 2022 (30,000+ cámaras), el Centro de Información de Tráfico de Qatar (QTIC/Ashghal) y los sistemas de tránsito Mowasalat/Karwa — apoyando los objetivos de transformación digital de la Visión Nacional de Qatar 2030."
  },
  {
    question: "¿Qué estándares de ciberseguridad cumple KabatOne para la infraestructura de seguridad nacional de Qatar?",
    answer: "KabatOne se alinea con la Estrategia Nacional de Ciberseguridad de Qatar (NCSS 2014, actualizada 2021), estándares de la NCSA (Agencia Nacional de Ciberseguridad), directrices de Q-CERT y requisitos de seguridad TIC de la Autoridad Digital del Gobierno de Qatar (MOCI/MDPS) — cumpliendo los estándares de Qatar Government Cloud (QGCLOUD) y contratación de seguridad nacional."
  },
  {
    question: "¿Puede KabatOne soportar las operaciones integradas del legado del Mundial 2022 de Qatar?",
    answer: "Sí. KabatOne puede aprovechar la infraestructura post-FIFA 2022 de Qatar incluyendo la red de vigilancia nacional de 30,000+ cámaras, 8 estadios inteligentes con sistemas de seguridad integrados, plataformas Doha Safe City y el Centro de Mando Nacional (NCC) — proporcionando operaciones continuas de seguridad pública unificada."
  },
  {
    question: "¿Qué vía de contratación soporta KabatOne en Qatar?",
    answer: "KabatOne soporta contratación a través del Portal de Contratación del Gobierno (Etimad/MOF) bajo la Ley N.° 24 de 2015 de Qatar (Ley de Licitaciones y Subastas del Gobierno) — incluyendo licitación pública, licitación limitada y contrato directo para sistemas de seguridad nacional a través del MOI y canales de contratación TIC del MOTC/MOCI."
  }
]

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const headline = es
    ? 'Software de Seguridad Pública para Qatar: MOI/Policía de Qatar, QFRS/QAWS, PDPL 2016/NCSA y Visión Nacional 2030'
    : 'Public Safety Software for Qatar: MOI/Qatar Police, QFRS/QAWS, PDPL 2016/NCSA & National Vision 2030'
  const description = es
    ? 'Plataforma unificada para MOI, Policía de Qatar y QFRS — despacho CAD integrado con el NCC y coordinación de emergencias QAWS/HMC, gestión de cámaras Doha Safe City/FIFA 2022 legado conforme a PDPL 2016 y cumplimiento NCSA/Q-CERT con contratación Etimad/Ley 24/2015.'
    : 'Unified platform for Qatar MOI, Police, and QFRS — integrated CAD dispatch with NCC and QAWS/HMC emergency coordination, Doha Safe City/FIFA 2022 legacy camera management compliant with PDPL 2016, and NCSA/Q-CERT compliance with Etimad/Law 24/2015 procurement.'
  const url = es
    ? 'https://kabatone.com/es/resources/public-safety-software-qatar/'
    : 'https://kabatone.com/resources/public-safety-software-qatar/'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    { name: 'Qatar', url },
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
        <section className="bg-gradient-to-br from-slate-900 to-red-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-red-300 text-sm font-medium mb-4 uppercase tracking-wide">
              {es ? 'Guía de Mercado — Qatar' : 'Market Guide — Qatar'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {es
                ? 'Software de Seguridad Pública para Qatar'
                : 'Public Safety Software for Qatar'}
            </h1>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              {es
                ? 'MOI/Policía de Qatar, QFRS/QAWS/HMC, PDPL Ley 13/2016, NCSA/Q-CERT, FIFA 2022 legado 30K+ cámaras y contratación Etimad/Ley 24/2015'
                : 'MOI/Qatar Police, QFRS/QAWS/HMC, PDPL Law 13/2016, NCSA/Q-CERT, FIFA 2022 legacy 30K+ cameras & Etimad/Law 24/2015 procurement'}
            </p>
            <div className="flex flex-wrap gap-3">
              {['Qatar Police / QFRS / QAWS', 'National Command Centre (NCC)', 'FIFA 2022 Legacy 30K+ cameras', 'PDPL Law 13/2016', 'NCSA / Q-CERT / QGCLOUD', 'Lusail Smart City / QNV 2030'].map(tag => (
                <span key={tag} className="bg-red-800 text-red-100 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? "El Panorama de Seguridad Pública en Qatar" : "Qatar's Public Safety Landscape"}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Qatar es un estado del Golfo con 3+ millones de habitantes (90%+ expatriados) y el PIB per cápita más alto del mundo. El Ministerio del Interior (MOI/وزارة الداخلية) controla la Policía de Qatar (General Directorate of Public Security), la Fuerza de Seguridad Fronteriza, la Guardia Nacional y el Departamento de Inmigración. El Centro de Mando Nacional (NCC) coordina todas las respuestas de emergencia — incluyendo la Policía, el Servicio de Bomberos y Rescate de Qatar (QFRS), los Servicios de Ambulancia y Bienestar de Qatar (QAWS) y los servicios de emergencia de Hamad Medical Corporation (HMC). Qatar tiene el mayor presupuesto per cápita de seguridad pública del Golfo y estándares de infraestructura mundiales.'
                : "Qatar is a Gulf state with 3+ million people (90%+ expatriates) and the world's highest GDP per capita. The Ministry of Interior (MOI/وزارة الداخلية) controls Qatar Police (General Directorate of Public Security), Border Security Force, National Guard, and Immigration Department. The National Command Centre (NCC) coordinates all emergency responses — including Police, Qatar Fire and Rescue Service (QFRS), Qatar Ambulance and Wellness Services (QAWS), and Hamad Medical Corporation (HMC) emergency services. Qatar has the Gulf's highest per-capita public safety budget and world-class infrastructure standards."}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'El FIFA World Cup Qatar 2022 fue el mayor proyecto de infraestructura de seguridad pública en la historia del país — con 30,000+ cámaras de vigilancia, 8 estadios con sistemas integrados de seguridad, el Centro de Mando Nacional y una plataforma de ciberseguridad de primer nivel. Esta infraestructura permanece operativa. Qatar National Vision 2030 (QNV 2030) incluye la transformación digital y la ciudad inteligente como prioridades nacionales, con Lusail Smart City como proyecto emblema con 300,000+ habitantes planificados y un sistema IOC integrado. La ciudad de Doha despliega la red Doha Safe City con más de 30,000 cámaras integradas con la Policía de Qatar.'
                : "FIFA World Cup Qatar 2022 was the country's largest public safety infrastructure project ever — with 30,000+ surveillance cameras, 8 stadiums with integrated security systems, National Command Centre, and world-class cybersecurity platform. This infrastructure remains operational. Qatar National Vision 2030 (QNV 2030) includes digital transformation and smart city as national priorities, with Lusail Smart City as the flagship project with 300,000+ planned residents and an integrated IOC system. Doha deploys the Doha Safe City network with 30,000+ cameras integrated with Qatar Police."}
            </p>
          </div>
        </section>

        {/* Security Structure */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Estructura de Seguridad y Emergencias' : 'Security and Emergency Structure'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'MOI y Fuerzas de Seguridad' : 'MOI and Security Forces'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• Qatar Police (GDPS): policía nacional' : '• Qatar Police (GDPS): national police'}</li>
                  <li>{es ? '• Border Security Force: fronteras terrestres y marítimas' : '• Border Security Force: land and maritime borders'}</li>
                  <li>{es ? '• Lekhwiya/State Security: seguridad del estado' : '• Lekhwiya/State Security: state security service'}</li>
                  <li>{es ? '• Qatar National Guard: fuerza paramilitar de reserva' : '• Qatar National Guard: paramilitary reserve force'}</li>
                  <li>{es ? '• Qatar Coast Guard: seguridad marítima del Golfo' : '• Qatar Coast Guard: Gulf maritime security'}</li>
                  <li>{es ? '• Immigration Department: control de fronteras' : '• Immigration Department: border control'}</li>
                  <li>{es ? '• Qatar Armed Forces: apoyo seguridad y HADR' : '• Qatar Armed Forces: security and HADR support'}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Servicios de Emergencia' : 'Emergency Services'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• 999: emergencia unificada (policía/bomberos/ambulancia)' : '• 999: unified emergency (police/fire/ambulance)'}</li>
                  <li>{es ? '• NCC: Centro de Mando Nacional (coordinación total)' : '• NCC: National Command Centre (full coordination)'}</li>
                  <li>{es ? '• QFRS: Servicio de Bomberos y Rescate de Qatar (MOI)' : '• QFRS: Qatar Fire and Rescue Service (MOI)'}</li>
                  <li>{es ? '• QAWS: Qatar Ambulance and Wellness Services (HMC)' : '• QAWS: Qatar Ambulance and Wellness Services (HMC)'}</li>
                  <li>{es ? '• HMC: Hamad Medical Corporation (urgencias/trauma)' : '• HMC: Hamad Medical Corporation (A&E/trauma)'}</li>
                  <li>{es ? '• QRCS: Qatar Red Crescent Society (apoyo humanitario)' : '• QRCS: Qatar Red Crescent Society (humanitarian)'}</li>
                  <li>{es ? '• Civil Defence Qatar: defensa civil general' : '• Civil Defence Qatar: general civil defence'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Smart City & FIFA Legacy */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Legado FIFA 2022, Doha Safe City y Lusail Smart City' : 'FIFA 2022 Legacy, Doha Safe City & Lusail Smart City'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'El legado tecnológico del FIFA World Cup 2022 ha convertido a Qatar en uno de los países más vigilados y digitalizados del mundo en seguridad pública. La red Doha Safe City incluye más de 30,000 cámaras HD integradas con el Centro de Mando Nacional, reconocimiento facial IA, ANPR en todas las principales arterias y plataformas de gestión de multitudes. El Centro de Información de Tráfico de Qatar (QTIC) gestiona el tráfico en tiempo real en toda la red de carreteras del país. Lusail Smart City — diseñada para 300,000+ residentes — cuenta con el IOC más avanzado de la región con servicios integrados de ciudad inteligente: energía, agua, transporte, seguridad y gobierno digital en una sola plataforma.'
                : "FIFA World Cup 2022's technological legacy has made Qatar one of the most surveilled and digitalized countries in the world for public safety. Doha Safe City network includes 30,000+ HD cameras integrated with the National Command Centre, AI facial recognition, ANPR on all major arterials, and crowd management platforms. Qatar Traffic Information Centre (QTIC) manages real-time traffic across the national road network. Lusail Smart City — designed for 300,000+ residents — has the region's most advanced IOC with integrated smart city services: energy, water, transport, security, and digital government in a single platform."}
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
                  {es ? 'Protección de Datos — PDPL Ley 13/2016' : 'Data Protection — PDPL Law 13/2016'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>PDPL Law No. 13 of 2016:</strong>{' '}
                    {es ? 'Ley de Protección de Datos Personales de Qatar — derechos del titular, consentimiento, obligaciones del responsable, transferencia transfronteriza' : 'Qatar Personal Data Protection Law — data subject rights, consent, controller obligations, cross-border transfer'}
                  </li>
                  <li>
                    <strong>MOTC/MCIT Implementing Regulations:</strong>{' '}
                    {es ? 'Reglamentos de implementación del PDPL — procedimientos de notificación de brechas, DPO para organizaciones, requisitos de seguridad' : 'PDPL implementing regulations — breach notification procedures, DPO for organizations, security requirements'}
                  </li>
                  <li>
                    <strong>Qatar Central Systems Security Standards:</strong>{' '}
                    {es ? 'Estándares de seguridad de sistemas centrales — requisitos de cifrado, controles de acceso, auditoría para sistemas gubernamentales' : 'Central systems security standards — encryption requirements, access controls, audit for government systems'}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Ciberseguridad y TIC' : 'Cybersecurity & ICT'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>NCSA (National Cyber Security Agency):</strong>{' '}
                    {es ? 'Agencia Nacional de Ciberseguridad — NCSS 2021, Q-CERT, protección de infraestructura crítica, certificación de sistemas gubernamentales' : 'National Cyber Security Agency — NCSS 2021, Q-CERT, critical infrastructure protection, government system certification'}
                  </li>
                  <li>
                    <strong>QGCLOUD (Qatar Government Cloud):</strong>{' '}
                    {es ? 'Qatar Government Cloud — plataforma nube gubernamental nacional; requisitos de soberanía de datos para sistemas del sector público' : 'Qatar Government Cloud — national government cloud platform; data sovereignty requirements for public sector systems'}
                  </li>
                  <li>
                    <strong>MOCI / Digital Government Authority:</strong>{' '}
                    {es ? 'Ministerio de Comunicaciones e Industria — e-Government standards, interoperabilidad, QNV 2030 Digital Transformation' : 'Ministry of Communications and Industry — e-Government standards, interoperability, QNV 2030 Digital Transformation'}
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
              {es ? 'Contratación Pública: Etimad y Ley 24 de 2015' : 'Public Procurement: Etimad & Law 24 of 2015'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'La contratación pública en Qatar se rige por la Ley N.° 24 de 2015 (Ley de Licitaciones y Subastas del Gobierno) y el portal Etimad (الاعتماد) del Ministerio de Finanzas (MOF). Los sistemas de seguridad nacional y los proyectos Smart City se contratan principalmente a través del Ministerio del Interior (MOI), el Ministerio de Comunicaciones e Industria (MOCI) y la Autoridad de Planificación Ashghal. Qatar tiene una política activa de contenido local (Qatar Investment Authority/QFZA) que favorece a los proveedores certificados en Qatar. Los proyectos de infraestructura pueden financiarse a través del Qatar Investment Authority (QIA), Qatar National Bank (QNB) y fondos de Qatar Development Bank (QDB).'
                : "Qatar's public procurement is governed by Law No. 24 of 2015 (Government Tenders and Auctions Law) and the Etimad (الاعتماد) portal under the Ministry of Finance (MOF). National security systems and Smart City projects are primarily contracted through the Ministry of Interior (MOI), Ministry of Communications and Industry (MOCI), and Ashghal Planning Authority. Qatar has an active local content policy (Qatar Investment Authority/QFZA) favouring Qatar-certified vendors. Infrastructure projects may be financed through Qatar Investment Authority (QIA), Qatar National Bank (QNB), and Qatar Development Bank (QDB) funds."}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                {es ? 'Canales de Contratación KabatOne' : 'KabatOne Procurement Channels'}
              </h3>
              <ul className="space-y-1 text-blue-800">
                <li>{es ? '• Etimad/MOF: licitaciones MOI, QFRS, MOCI, Ashghal' : '• Etimad/MOF: MOI, QFRS, MOCI, Ashghal tenders'}</li>
                <li>{es ? '• MOI direct: sistemas seguridad NCC/Policía/QFRS' : '• MOI direct: NCC/Police/QFRS security systems'}</li>
                <li>{es ? '• MOCI/DGA: contratos marco TIC e-Government' : '• MOCI/DGA: e-Government ICT framework contracts'}</li>
                <li>{es ? '• Lusail/Ashghal: Smart City IOC contratos' : '• Lusail/Ashghal: Smart City IOC contracts'}</li>
                <li>{es ? '• QDB/QNB/QIA: financiamiento infraestructura digital' : '• QDB/QNB/QIA: digital infrastructure financing'}</li>
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
          h2={es ? '¿Listo para modernizar la seguridad pública en Qatar?' : 'Ready to modernize public safety in Qatar?'}
          subtitle={es
            ? 'Conozca cómo KabatOne apoya al MOI, la Policía de Qatar y QFRS con una plataforma unificada conforme a PDPL 2016/NCSA y compatible con Etimad/Ley 24/2015.'
            : 'See how KabatOne supports Qatar MOI, Police, and QFRS with a unified platform compliant with PDPL 2016/NCSA and compatible with Etimad/Law 24/2015 procurement.'}
        />
      </main>
      <Footer es={es} />
    </>
  )
}
