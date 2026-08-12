import { generatePageMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareMorocco', locale)
}

const faqs = [
  {
    question: "How does KabatOne integrate with the Royal Gendarmerie and Sûreté Nationale in Morocco?",
    answer: "KabatOne aligns with Morocco's dual policing structure — integrating with the Direction Générale de la Sûreté Nationale (DGSN) for urban areas and the Gendarmerie Royale for rural and highway zones — providing unified CAD dispatch, real-time operations center management, and reporting compatible with the Ministry of Interior (MdI) command protocols across Morocco's 12 regions and 75 prefectures/provinces."
  },
  {
    question: "Can KabatOne support Morocco's Protection Civile emergency response?",
    answer: "Yes. KabatOne integrates the Direction Générale de la Protection Civile (DGPC) with 120+ fire and rescue stations, Direction Générale de la Météorologie (DGM) weather alerts, Agence du Bassin Hydraulique (ABH) flood monitoring, and ONSSA (earthquake/disaster) coordination — enabling unified multi-agency dispatch and incident management across all 12 regions."
  },
  {
    question: "How does KabatOne handle Morocco's personal data protection under Law 09-08 and CNDP?",
    answer: "KabatOne is designed for compliance with Morocco's Law 09-08 on Personal Data Protection — implementing data subject rights (access, rectification, opposition), mandatory registration with CNDP (Commission Nationale de contrôle de la protection des Données à caractère Personnel), lawful processing conditions, and cross-border transfer authorizations aligned with CNDP guidelines."
  },
  {
    question: "Can KabatOne support Morocco's Safe City initiatives including Rabat and Casablanca?",
    answer: "Yes. KabatOne integrates Casablanca Safe City CCTV network (15,000+ cameras), Rabat Integrated Security Centre cameras, Gendarmerie Royale ANPR on highways, and DGSN surveillance systems — providing AI-powered analytics and unified command visibility for Morocco's urban centers as part of the Smart Morocco and Digital Morocco 2030 strategy."
  },
  {
    question: "How does KabatOne support Morocco's 2030 FIFA World Cup and mega-event security planning?",
    answer: "KabatOne supports FIFA 2030 World Cup security operations by providing integrated command center capabilities for Morocco's 6 host cities (Casablanca, Rabat, Marrakech, Fez, Tangier, Agadir), multi-agency coordination between DGSN, Gendarmerie, Protection Civile, and venue security, and real-time situational awareness for millions of international visitors."
  },
  {
    question: "What cybersecurity compliance does KabatOne offer for Moroccan government systems?",
    answer: "KabatOne aligns with Morocco's Law 05-20 on Cybersecurity (2020), Directive Nationale de la Sécurité des Systèmes d'Information (DNSSI 2014), DGSSI (Direction Générale de la Sécurité des Systèmes d'Information/maCERT) standards, and NIP (Normes et Indicateurs de Performance) for critical infrastructure — meeting requirements for national and regional government ICT procurement."
  },
  {
    question: "What procurement pathway does KabatOne support in Morocco?",
    answer: "KabatOne supports procurement through the portail des marchés publics (marchespublics.gov.ma) under Décret n° 2-12-349 (Public Procurement Decree 2013, updated 2022) — including appel d'offres ouvert, appel d'offres restreint, and bon de commande for security/emergency systems, with Ministry of Interior specialized procurement channels for national security ICT."
  }
]

const faqsEs = [
  {
    question: "¿Cómo se integra KabatOne con la Gendarmería Real y la Sûreté Nationale de Marruecos?",
    answer: "KabatOne se alinea con la estructura policial dual de Marruecos — integrándose con la Dirección General de Seguridad Nacional (DGSN) para áreas urbanas y la Gendarmería Real para zonas rurales y de autopistas — proporcionando despacho CAD unificado, gestión del centro de operaciones y reportes compatibles con los protocolos de mando del Ministerio del Interior en 12 regiones y 75 prefecturas/provincias."
  },
  {
    question: "¿Puede KabatOne soportar la respuesta de emergencia de la Protection Civile de Marruecos?",
    answer: "Sí. KabatOne integra la Dirección General de Protección Civil (DGPC) con más de 120 estaciones de bomberos y rescate, alertas meteorológicas de la DGM, monitoreo de inundaciones del ABH y coordinación sísmica/desastres — habilitando despacho multiagencia unificado y gestión de incidentes en las 12 regiones."
  },
  {
    question: "¿Cómo gestiona KabatOne la protección de datos personales bajo la Ley 09-08 y la CNDP de Marruecos?",
    answer: "KabatOne está diseñado para cumplimiento con la Ley 09-08 de Protección de Datos Personales de Marruecos — implementando derechos del titular (acceso, rectificación, oposición), registro obligatorio ante la CNDP, condiciones de procesamiento lícito y autorizaciones de transferencia transfronteriza alineadas con las directrices de la CNDP."
  },
  {
    question: "¿Puede KabatOne soportar las iniciativas Safe City de Marruecos incluyendo Rabat y Casablanca?",
    answer: "Sí. KabatOne integra la red CCTV Safe City de Casablanca (15,000+ cámaras), las cámaras del Centro de Seguridad Integrado de Rabat, el ANPR de la Gendarmería Real en autopistas y los sistemas de vigilancia de la DGSN — proporcionando analítica de IA y visibilidad de mando unificada en el marco de la estrategia Smart Morocco y Maroc Digital 2030."
  },
  {
    question: "¿Cómo soporta KabatOne la planificación de seguridad para el Mundial de Fútbol 2030 de Marruecos?",
    answer: "KabatOne apoya las operaciones de seguridad del Mundial FIFA 2030 proporcionando capacidades de centro de mando integrado para las 6 ciudades sede de Marruecos (Casablanca, Rabat, Marrakech, Fez, Tánger, Agadir), coordinación multiagencia DGSN/Gendarmería/Protection Civile y conciencia situacional en tiempo real para millones de visitantes internacionales."
  },
  {
    question: "¿Qué cumplimiento de ciberseguridad ofrece KabatOne para sistemas gubernamentales marroquíes?",
    answer: "KabatOne se alinea con la Ley 05-20 sobre Ciberseguridad de Marruecos (2020), la Directiva Nacional de Seguridad de Sistemas de Información (DNSSI 2014), estándares de la DGSSI (maCERT) e indicadores NIP para infraestructura crítica — cumpliendo los requisitos de contratación TIC gubernamental nacional y regional."
  },
  {
    question: "¿Qué vía de contratación soporta KabatOne en Marruecos?",
    answer: "KabatOne soporta contratación a través del portail des marchés publics (marchespublics.gov.ma) bajo el Decreto N.° 2-12-349 (Decreto de Contratación Pública 2013, actualizado 2022) — incluyendo convocatoria abierta, convocatoria restringida y bon de commande para sistemas de seguridad/emergencia, con canales especializados del Ministerio del Interior para TIC de seguridad nacional."
  }
]

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const headline = es
    ? 'Software de Seguridad Pública para Marruecos: DGSN/Gendarmería Real, DGPC, Ley 09-08/CNDP y Ley de Ciberseguridad 05-20'
    : 'Public Safety Software for Morocco: DGSN/Royal Gendarmerie, DGPC, Law 09-08/CNDP & Cybersecurity Law 05-20'
  const description = es
    ? 'Plataforma unificada para DGSN, Gendarmería Real y DGPC de Marruecos — despacho CAD integrado para 12 regiones y coordinación de emergencias DGM/ABH, gestión de cámaras Casablanca Safe City conforme a Ley 09-08/CNDP y cumplimiento DGSSI/maCERT con contratación marchespublics/Decreto 2-12-349.'
    : 'Unified platform for Moroccan DGSN, Royal Gendarmerie, and DGPC — integrated CAD dispatch for 12 regions and DGM/ABH emergency coordination, Casablanca Safe City camera management compliant with Law 09-08/CNDP, and DGSSI/maCERT compliance with marchespublics/Decree 2-12-349 procurement.'
  const url = es
    ? 'https://kabatone.com/es/resources/public-safety-software-morocco'
    : 'https://kabatone.com/resources/public-safety-software-morocco'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources' : 'https://kabatone.com/resources' },
    { name: es ? 'Marruecos' : 'Morocco', url },
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
              {es ? 'Guía de Mercado — Marruecos' : 'Market Guide — Morocco'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {es
                ? 'Software de Seguridad Pública para Marruecos'
                : 'Public Safety Software for Morocco'}
            </h1>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              {es
                ? 'DGSN/Gendarmería Real, DGPC/DGM, Ley 09-08/CNDP, Ley 05-20/DGSSI, Casablanca Safe City 15K+ cámaras y contratación marchespublics/Decreto 2-12-349'
                : 'DGSN/Royal Gendarmerie, DGPC/DGM, Law 09-08/CNDP, Law 05-20/DGSSI, Casablanca Safe City 15K+ cameras & marchespublics/Decree 2-12-349 procurement'}
            </p>
            <div className="flex flex-wrap gap-3">
              {['DGSN / Gendarmerie Royale', 'DGPC / DGM / ABH', 'Casablanca Safe City 15K+', 'Loi 09-08 / CNDP', 'Loi 05-20 / DGSSI / maCERT', 'FIFA 2030 / Smart Morocco'].map(tag => (
                <span key={tag} className="bg-red-800 text-red-100 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? "El Panorama de Seguridad Pública en Marruecos" : "Morocco's Public Safety Landscape"}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Marruecos es una monarquía constitucional con 37+ millones de habitantes, organizada en 12 regiones, 75 prefecturas y provincias, y 1,503 comunas. El país cuenta con una estructura policial dual: la Direction Générale de la Sûreté Nationale (DGSN) que cubre las zonas urbanas bajo el Ministerio del Interior, y la Gendarmerie Royale que patrulla zonas rurales, autopistas y fronteras. La DGSN tiene más de 60,000 efectivos con presencia en todas las ciudades de más de 35,000 habitantes. La Gendarmerie Royale tiene más de 50,000 miembros organizados en Grupos Territoriales, Grupos Móviles y unidades especializadas. La Direction Générale de la Protection Civile (DGPC) gestiona los servicios de bomberos y rescate con 120+ centros en todo el reino.'
                : "Morocco is a constitutional monarchy with 37+ million people, organized into 12 regions, 75 prefectures and provinces, and 1,503 communes. The country has a dual policing structure: Direction Générale de la Sûreté Nationale (DGSN) covering urban areas under the Ministry of Interior, and the Gendarmerie Royale patrolling rural areas, highways, and borders. DGSN has 60,000+ personnel with presence in all cities over 35,000 population. Gendarmerie Royale has 50,000+ members organized into Territorial Groups, Mobile Groups, and specialized units. Direction Générale de la Protection Civile (DGPC) manages fire and rescue with 120+ centres across the kingdom."}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Marruecos es el mayor mercado público de seguridad de África del Norte y uno de los más dinámicos de la región. La estrategia Maroc Digital 2030 y Smart Morocco impulsan la digitalización de la administración pública, incluyendo seguridad ciudadana y Smart Cities. El terremoto de Al Haouz (septiembre 2023, Mw 6.8, más de 2,900 fallecidos) impulsó reformas en los sistemas de gestión de emergencias y alerta temprana. Marruecos será sede del Mundial de Fútbol FIFA 2030 con España y Portugal — una de las mayores inversiones en seguridad pública de su historia.'
                : "Morocco is North Africa's largest public security market and one of the region's most dynamic. The Maroc Digital 2030 and Smart Morocco strategy drives digitalization of public administration, including urban security and Smart Cities. The Al Haouz earthquake (September 2023, Mw 6.8, 2,900+ deaths) spurred reforms in emergency management and early warning systems. Morocco will co-host the FIFA 2030 World Cup with Spain and Portugal — one of the largest public safety investments in its history."}
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
                  {es ? 'DGSN y Gendarmería Real' : 'DGSN and Royal Gendarmerie'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• DGSN: policía urbana, 60,000+ efectivos' : '• DGSN: urban police, 60,000+ personnel'}</li>
                  <li>{es ? '• Gendarmerie Royale: rural, autopistas, fronteras 50,000+' : '• Gendarmerie Royale: rural, highways, borders 50,000+'}</li>
                  <li>{es ? '• BNPJ: Brigade Nationale de la Police Judiciaire' : '• BNPJ: Brigade Nationale de la Police Judiciaire'}</li>
                  <li>{es ? '• DGST: Direction Générale de la Surveillance du Territoire' : '• DGST: Direction Générale de la Surveillance du Territoire'}</li>
                  <li>{es ? '• BCIJ: Bureau Central des Investigations Judiciaires' : '• BCIJ: Bureau Central des Investigations Judiciaires'}</li>
                  <li>{es ? '• Forces Auxiliaires: apoyo orden público' : '• Forces Auxiliaires: public order support'}</li>
                  <li>{es ? '• Marine Royale: guardia costera y litoral' : '• Marine Royale: coast guard and maritime'}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Servicios de Emergencia' : 'Emergency Services'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? '• 19: policía; 15: bomberos/DGPC; 15: SAMU/ambulancia' : '• 19: police; 15: DGPC fire/rescue; 15: SAMU ambulance'}</li>
                  <li>{es ? '• DGPC: Dirección General de Protección Civil (120+ centros)' : '• DGPC: Dir. Générale Protection Civile (120+ centres)'}</li>
                  <li>{es ? '• SAMU/SMUR: Servicios de urgencias médicas (MIN Santé)' : '• SAMU/SMUR: medical emergency services (Min. Santé)'}</li>
                  <li>{es ? '• DGM: Dirección General de Meteorología (alertas)' : '• DGM: Dir. Générale Météorologie (weather alerts)'}</li>
                  <li>{es ? '• ABH: Agencias de Cuenca Hidráulica (alertas inundaciones)' : '• ABH: hydraulic basin agencies (flood alerts)'}</li>
                  <li>{es ? '• FAR: Fuerzas Armadas Reales (apoyo HADR)' : '• FAR: Forces Armées Royales (HADR support)'}</li>
                  <li>{es ? '• CENAD: Centre National pour la Réduction des Risques' : '• CENAD: Centre National pour la Réduction des Risques'}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Safe City & FIFA 2030 */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es ? 'Safe City y Mundial FIFA 2030' : 'Safe City & FIFA World Cup 2030'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'Casablanca Safe City es la mayor red de vigilancia de África del Norte con más de 15,000 cámaras integradas con el Centro de Supervisión e Intervención de la DGSN. Rabat ha implementado un Centro de Seguridad Integrado con redes CCTV de múltiples agencias coordinadas. La Gendarmerie Royale gestiona cámaras ANPR en los 1,800+ km de autopistas del royaume. El Municipal de Casablanca, Marrakech y otras ciudades han desplegado Safe City integradas con la policía municipal. El Mundial FIFA 2030 (Casablanca, Rabat, Marrakech, Fez, Tánger, Agadir) requerirá la mayor inversión en seguridad pública de la historia de Marruecos.'
                : "Casablanca Safe City is North Africa's largest surveillance network with 15,000+ cameras integrated with the DGSN Supervision and Intervention Centre. Rabat has deployed an Integrated Security Centre with multi-agency coordinated CCTV networks. Gendarmerie Royale manages ANPR cameras on 1,800+ km of national highways. Casablanca, Marrakech, and other municipalities have deployed Safe City integrated with municipal police. FIFA 2030 World Cup (Casablanca, Rabat, Marrakech, Fez, Tangier, Agadir) will require the largest public safety investment in Morocco's history."}
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
                  {es ? 'Protección de Datos — Loi 09-08' : 'Data Protection — Loi 09-08'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Loi 09-08 (2009):</strong>{' '}
                    {es ? 'Ley relativa a la protección de las personas físicas respecto al tratamiento de datos de carácter personal — derechos del titular, registro ante CNDP' : 'Law on personal data protection — data subject rights, mandatory CNDP registration for processing activities'}
                  </li>
                  <li>
                    <strong>CNDP:</strong>{' '}
                    {es ? 'Commission Nationale de contrôle de la protection des Données à caractère Personnel — autoridad supervisora independiente; declaraciones y autorizaciones previas' : 'National Data Protection Commission — independent supervisory authority; prior declarations and authorizations'}
                  </li>
                  <li>
                    <strong>{es ? 'Décret n° 2-09-165 (2009):' : 'Décret n° 2-09-165 (2009):'}</strong>{' '}
                    {es ? 'Reglamento de aplicación de la Ley 09-08 — formalidades ante CNDP, categorías especiales, videovigilancia' : 'Law 09-08 implementing decree — CNDP formalities, special categories, video surveillance'}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {es ? 'Ciberseguridad — Loi 05-20' : 'Cybersecurity — Loi 05-20'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Loi 05-20 (2020):</strong>{' '}
                    {es ? 'Ley de Ciberseguridad — protección de sistemas de información críticos, requisitos de seguridad, DGSSI/maCERT' : 'Cybersecurity Law — critical information system protection, security requirements, DGSSI/maCERT'}
                  </li>
                  <li>
                    <strong>DGSSI (Direction Générale de la Sécurité des Systèmes d&apos;Information):</strong>{' '}
                    {es ? 'Dirección de seguridad de sistemas de información — maCERT, DNSSI 2014, certificación de sistemas gubernamentales, NIP' : 'Information systems security directorate — maCERT, DNSSI 2014, government system certification, NIP standards'}
                  </li>
                  <li>
                    <strong>DNSSI 2014:</strong>{' '}
                    {es ? 'Directiva Nacional de Seguridad de Sistemas de Información — normas de seguridad para organismos públicos y operadores de infraestructura crítica' : 'National Directive on Information Systems Security — security standards for public bodies and critical infrastructure operators'}
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
              {es ? 'Contratación Pública: marchespublics y Decreto 2-12-349' : 'Public Procurement: marchespublics & Decree 2-12-349'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {es
                ? 'La contratación pública en Marruecos se rige por el Decreto N.° 2-12-349 relativo a los mercados públicos (2013, actualizado 2022) y el portal marchespublics.gov.ma. Los sistemas de seguridad pública y TIC del Ministerio del Interior (DGSN, Gendarmerie, DGPC) se contratan con canales especializados de seguridad nacional. Los proyectos Smart City/Safe City pueden financiarse a través del Fondo de Equipamiento Comunal (FEC), préstamos de la Agencia Francesa de Desarrollo (AFD), Banco Europeo de Inversiones (BEI), Banco Africano de Desarrollo (BAD) y el Fondo Hassan II para el Desarrollo Económico y Social. Los proyectos FIFA 2030 tienen asignación presupuestaria estatal específica.'
                : "Morocco's public procurement is governed by Decree No. 2-12-349 on public procurement (2013, updated 2022) and the marchespublics.gov.ma portal. Ministry of Interior public security and ICT systems (DGSN, Gendarmerie, DGPC) are contracted through specialized national security channels. Smart City/Safe City projects may be financed through the Fonds d'Équipement Communal (FEC), Agence Française de Développement (AFD) loans, European Investment Bank (EIB), African Development Bank (AfDB), and Hassan II Fund for Economic and Social Development. FIFA 2030 projects have specific state budget allocation."}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                {es ? 'Canales de Contratación KabatOne' : 'KabatOne Procurement Channels'}
              </h3>
              <ul className="space-y-1 text-blue-800">
                <li>{es ? '• marchespublics.gov.ma: licitaciones DGSN, DGPC, MdI' : '• marchespublics.gov.ma: DGSN, DGPC, MdI tenders'}</li>
                <li>{es ? '• Gendarmerie Royale: contratación especializada seguridad' : '• Gendarmerie Royale: specialized security procurement'}</li>
                <li>{es ? '• FEC/communes: proyectos Safe City municipal' : '• FEC/communes: municipal Safe City projects'}</li>
                <li>{es ? '• AFD/BEI/BAD: financiamiento europeo/africano Smart City' : '• AFD/EIB/AfDB: European/African Smart City financing'}</li>
                <li>{es ? '• FIFA 2030: presupuesto seguridad evento específico' : '• FIFA 2030: event-specific security budget'}</li>
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
          h2={es ? '¿Listo para modernizar la seguridad pública en Marruecos?' : 'Ready to modernize public safety in Morocco?'}
          subtitle={es
            ? 'Conozca cómo KabatOne apoya a la DGSN, Gendarmería Real y DGPC de Marruecos con una plataforma unificada conforme a Loi 09-08/CNDP y lista para el Mundial FIFA 2030.'
            : 'See how KabatOne supports Moroccan DGSN, Royal Gendarmerie, and DGPC with a unified platform compliant with Loi 09-08/CNDP and ready for FIFA 2030 World Cup security.'}
        />
      </main>
      <Footer es={es} />
    </>
  )
}
