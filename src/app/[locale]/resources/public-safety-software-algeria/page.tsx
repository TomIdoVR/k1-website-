import { generatePageMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareAlgeria', locale)
}

const faqs = [
  {
    question: 'How does KabatOne integrate the Direction Générale de la Sûreté Nationale (DGSN) across Algeria\'s 58 wilayas?',
    answer:
      'KabatOne unifies DGSN operations across all 58 wilayas — including Algiers, Oran, Constantine, Annaba, Blida, Sétif, Tlemcen, Béjaïa, and Ouargla — into a single operational map with shared CAD, CCTV/ANPR feeds, and coordination with the Gendarmerie Nationale (GN) responsible for rural and border security under the Ministry of National Defence (MDN).',
  },
  {
    question: 'How does the platform support the Direction Générale de la Protection Civile (DGPC)?',
    answer:
      'KabatOne connects DGPC fire and civil protection units across 58 wilayas, coordinates 14/15 emergency CAD dispatch with Mustapha Bacha/Parnet hospitals in Algiers and regional teaching hospitals, and integrates response at SONATRACH oil/gas installations, Arzew LNG terminal, Skikda refinery, and Houari Boumediene International Airport (ALG).',
  },
  {
    question: 'How does KabatOne support Algeria\'s oil and gas infrastructure security?',
    answer:
      'KabatOne provides perimeter monitoring and incident management for SONATRACH critical assets: Hassi Messaoud oilfield (primary production hub), Hassi R\'Mel gas field (largest in Africa), In Amenas gas complex (Tiguentourine, post-2013 attack security upgrade), Arzew/Bethioua LNG complexes, Skikda refinery/LNG, and the Trans-Mediterranean Pipeline (Transmed) and Medgaz interconnectors — with Gendarmerie Nationale coordination and ANSC alert integration.',
  },
  {
    question: 'How does KabatOne comply with Algeria\'s Personal Data Protection Law (Law 18-07/ANPDP)?',
    answer:
      'KabatOne implements encryption at rest and in transit, role-based access controls, data subject rights management, and breach notification aligned with Algerian Law 18-07 on Personal Data Protection supervised by the Autorité Nationale de Protection des Données à Caractère Personnel (ANPDP). The platform aligns with SGSI (Secrétariat Général des Services de Sécurité Informatique) cybersecurity directives for government systems and CERT-DZ incident response frameworks.',
  },
  {
    question: 'Does KabatOne support Algiers Safe City and the Algerian Safe City programme?',
    answer:
      'Yes. KabatOne provides centralised video management for DGSN CCTV/ANPR cameras across Algiers — Grande-Aglommération d\'Alger, N1/N5/N11 national roads, the Périphérique, Houari Boumediene Airport (ALG), port of Algiers, and metro/tramway transit network — plus similar integration for Oran, Constantine, and Annaba, with AI analytics and real-time sharing with CNCLAT and DCSI operational centres.',
  },
  {
    question: 'How does KabatOne handle Algeria border security and Sahel monitoring?',
    answer:
      'KabatOne integrates Gendarmerie Nationale border posts across Algeria\'s 6,343 km of land borders — Libya (982 km), Niger (956 km), Mali (1,376 km), Mauritania (463 km), Morocco (1,900 km+), Tunisia (965 km) — with CCTV/radar sensor fusion, vehicle ANPR, and real-time alert sharing between GN, DSS (Direction de la Sécurité et des Systèmes), and CNCLAT for Sahel-threat monitoring.',
  },
  {
    question: 'How does KabatOne handle Algeria government procurement under the Code des marchés publics?',
    answer:
      'KabatOne supports procurement under the Algerian Code des marchés publics (Décret présidentiel 15-247, amended 2020), ARMP (Autorité de Régulation des Marchés Publics et des Délégations de Service Public), Ministry of Finance e-procurement (SIGMAP), and SONATRACH direct procurement frameworks, with French/Arabic bilingual documentation and DZ-localised contract structures.',
  },
]

const faqsEs = [
  {
    question: '¿Cómo integra KabatOne la Direction Générale de la Sûreté Nationale (DGSN) en las 58 wilayas de Argelia?',
    answer:
      'KabatOne unifica las operaciones de la DGSN en las 58 wilayas — incluidas Argel, Orán, Constantina, Annaba, Blida, Sétif, Tlemcen, Béjaïa y Ouargla — en un solo mapa operativo con CAD compartido, cámaras CCTV/ANPR y coordinación con la Gendarmería Nacional (GN), responsable de la seguridad rural y fronteriza bajo el Ministerio de Defensa Nacional (MDN).',
  },
  {
    question: '¿Cómo admite la plataforma la Direction Générale de la Protection Civile (DGPC)?',
    answer:
      'KabatOne conecta las unidades de protección civil y bomberos de la DGPC en las 58 wilayas, coordina el despacho de emergencias 14/15 con los hospitales Mustapha Bacha/Parnet en Argel y hospitales universitarios regionales, e integra la respuesta ante incidentes en instalaciones de SONATRACH, la terminal GNL de Arzew, la refinería de Skikda y el Aeropuerto Internacional Houari Boumediene (ALG).',
  },
  {
    question: '¿Cómo admite KabatOne la seguridad de la infraestructura de petróleo y gas de Argelia?',
    answer:
      'KabatOne proporciona monitoreo perimetral y gestión de incidentes para los activos críticos de SONATRACH: yacimiento de Hassi Messaoud (centro de producción principal), campo de gas de Hassi R\'Mel (el mayor de África), complejo de gas de In Amenas (Tiguentourine, mejoras de seguridad post-atentado 2013), complejos GNL de Arzew/Bethioua, refinería/GNL de Skikda, y los gasoductos Transmed y Medgaz — con coordinación de la Gendarmería Nacional e integración de alertas ANSC.',
  },
  {
    question: '¿Cómo cumple KabatOne con la Ley de Protección de Datos Personales de Argelia (Ley 18-07/ANPDP)?',
    answer:
      'KabatOne implementa cifrado en reposo y en tránsito, controles de acceso basados en roles, gestión de derechos de sujetos de datos y notificación de brechas conforme a la Ley 18-07 de Protección de Datos Personales de Argelia supervisada por la ANPDP. La plataforma se alinea con las directivas de ciberseguridad del SGSI (Secrétariat Général des Services de Sécurité Informatique) para sistemas gubernamentales y los marcos de respuesta a incidentes del CERT-DZ.',
  },
  {
    question: '¿Admite KabatOne el Argel Safe City y el programa de Ciudades Seguras argelino?',
    answer:
      'Sí. KabatOne proporciona gestión de video centralizada para las cámaras CCTV/ANPR de la DGSN en Argel — Grand-Aglommération d\'Alger, carreteras nacionales N1/N5/N11, el Périphérique, Aeropuerto Houari Boumediene (ALG), puerto de Argel y la red de metro/tranvía — más integración similar para Orán, Constantina y Annaba, con análisis IA y compartición en tiempo real con el CNCLAT y los centros operativos del DCSI.',
  },
  {
    question: '¿Cómo gestiona KabatOne la seguridad fronteriza y el monitoreo del Sahel en Argelia?',
    answer:
      'KabatOne integra los puestos fronterizos de la Gendarmería Nacional en los 6,343 km de fronteras terrestres de Argelia — Libia (982 km), Níger (956 km), Malí (1,376 km), Mauritania (463 km), Marruecos (más de 1,900 km), Túnez (965 km) — con fusión de sensores CCTV/radar, ANPR de vehículos y compartición de alertas en tiempo real entre GN, DSS y CNCLAT para el monitoreo de amenazas sahélianas.',
  },
  {
    question: '¿Cómo gestiona KabatOne las adquisiciones del gobierno argelino bajo el Code des marchés publics?',
    answer:
      'KabatOne admite adquisiciones bajo el Código de Contratos Públicos de Argelia (Decreto Presidencial 15-247, modificado 2020), la ARMP (Autorité de Régulation des Marchés Publics), el sistema e-procurement del Ministerio de Finanzas (SIGMAP) y los marcos de adquisición directa de SONATRACH, con documentación bilingüe francés/árabe y estructuras contractuales adaptadas al marco jurídico argelino.',
  },
]

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const headline = es
    ? 'Software de Seguridad Pública para Argelia: DGSN/Gendarmería Nacional, DGPC, SONATRACH, Ley 18-07/ANPDP y Visión Argelia 2035'
    : 'Public Safety Software for Algeria: DGSN/Gendarmerie Nationale, DGPC, SONATRACH, Law 18-07/ANPDP & Algeria Vision 2035'
  const description = es
    ? 'Plataforma unificada para la DGSN y DGPC de Argelia — despacho CAD integrado en 58 wilayas, Argel Safe City, seguridad de infraestructura SONATRACH (Hassi Messaoud/Hassi R\'Mel/In Amenas/Arzew), fronteras del Sahel, Ley 18-07/ANPDP/CERT-DZ y adquisición bajo el Decreto 15-247.'
    : 'Unified platform for Algeria DGSN and DGPC — integrated CAD dispatch across 58 wilayas, Algiers Safe City, SONATRACH infrastructure security (Hassi Messaoud/Hassi R\'Mel/In Amenas/Arzew), Sahel border monitoring, Law 18-07/ANPDP/CERT-DZ compliance, and Décret 15-247 procurement.'
  const url = es
    ? 'https://kabatone.com/es/resources/public-safety-software-algeria/'
    : 'https://kabatone.com/resources/public-safety-software-algeria/'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    { name: es ? 'Argelia' : 'Algeria', url },
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
              {es ? 'Guía de Mercado — Argelia' : 'Market Guide — Algeria'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {es
                ? 'Software de Seguridad Pública para Argelia'
                : 'Public Safety Software for Algeria'}
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl">
              {es
                ? 'DGSN/GN 58 wilayas · DGPC respuesta unificada · SONATRACH Hassi Messaoud/In Amenas · Arzew/Skikda GNL · Fronteras Sahel 6,343 km · Ley 18-07/ANPDP · Visión 2035'
                : 'DGSN/GN 58 wilayas · DGPC unified response · SONATRACH Hassi Messaoud/In Amenas · Arzew/Skikda LNG · Sahel borders 6,343 km · Law 18-07/ANPDP · Vision 2035'}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              {es ? "El panorama de seguridad pública de Argelia" : "Algeria's Public Safety Landscape"}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                {es
                  ? 'Argelia — el país más grande de África con 45 millones de habitantes y 58 wilayas — opera un ecosistema de seguridad pública dual bajo la Direction Générale de la Sûreté Nationale (DGSN), responsable de la seguridad urbana en las 58 wilayas bajo el Ministerio del Interior, y la Gendarmería Nacional (GN) bajo el Ministerio de Defensa Nacional (MDN), responsable de las zonas rurales y fronterizas. La Direction Générale de la Protection Civile (DGPC) gestiona los servicios de bomberos y protección civil coordinados con los números de emergencia 14/15, con hospitales de referencia como Mustapha Bacha y Parnet en Argel y centros universitarios regionales en Orán, Constantina y Annaba.'
                  : 'Algeria — Africa\'s largest country with 45 million inhabitants and 58 wilayas — operates a dual public safety ecosystem under the Direction Générale de la Sûreté Nationale (DGSN), responsible for urban security across 58 wilayas under the Ministry of Interior, and the Gendarmerie Nationale (GN) under the Ministry of National Defence (MDN), responsible for rural and border zones. The Direction Générale de la Protection Civile (DGPC) manages fire and civil protection services coordinated with 14/15 emergency numbers, with reference hospitals including Mustapha Bacha and Parnet in Algiers and regional university centres in Oran, Constantine, and Annaba.'}
              </p>
              <p>
                {es
                  ? 'La infraestructura energética de Argelia es estratégicamente crítica para Europa y África. SONATRACH — la empresa más grande de África y principal exportadora de gas del Mediterráneo — opera los megacampos de Hassi Messaoud (petróleo, principal hub de producción) y Hassi R\'Mel (gas, el mayor campo de gas de África), el complejo de gas de In Amenas/Tiguentourine (actualizado tras el atentado yihadista de enero 2013), y los terminales de exportación de GNL de Arzew/Bethioua y Skikda, así como los gasoductos internacionales Transmed (Italia), Medgaz (España) y GME (Marruecos-España). La seguridad de esta infraestructura involucra a la Gendarmería Nacional, el Ejército Nacional Popular (ANP) y el Département du Renseignement et de la Sécurité (DRS, renombrado DSS en 2016).'
                  : 'Algeria\'s energy infrastructure is strategically critical for Europe and Africa. SONATRACH — Africa\'s largest company and leading Mediterranean gas exporter — operates mega-fields at Hassi Messaoud (oil, primary production hub) and Hassi R\'Mel (gas, Africa\'s largest gas field), In Amenas/Tiguentourine gas complex (upgraded following January 2013 jihadist attack), Arzew/Bethioua and Skikda LNG export terminals, and international pipelines Transmed (Italy), Medgaz (Spain), and GME (Morocco-Spain). Security of this infrastructure involves Gendarmerie Nationale, Armée Nationale Populaire (ANP), and Département du Renseignement et de la Sécurité (DRS, renamed DSS in 2016).'}
              </p>
              <p>
                {es
                  ? 'La Visión Argelia 2035 impulsa la digitalización del gobierno y la modernización de la seguridad pública a través del programa e-Algérie y la estrategia nacional de ciberseguridad coordinada por el SGSI. El marco legal de protección de datos se basa en la Ley 18-07 de junio de 2018 sobre la Protección de Datos Personales, supervisada por la ANPDP, mientras que el CERT-DZ gestiona la ciberseguridad nacional. Las licitaciones del gobierno se rigen por el Decreto Presidencial 15-247 (Code des marchés publics, modificado en 2020) y la plataforma SIGMAP del Ministerio de Finanzas.'
                  : 'Algeria Vision 2035 drives government digitalisation and public safety modernisation through the e-Algérie programme and national cybersecurity strategy coordinated by the SGSI. The data protection legal framework rests on Law 18-07 of June 2018 on Personal Data Protection, supervised by the ANPDP, while CERT-DZ manages national cybersecurity. Government tenders are governed by Presidential Decree 15-247 (Code des marchés publics, amended 2020) and the SIGMAP platform of the Ministry of Finance.'}
              </p>
            </div>
          </div>
        </section>

        {/* Key Agencies */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {es ? 'Agencias y marcos clave de seguridad pública' : 'Key Public Safety Agencies & Frameworks'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: es ? 'DGSN — Direction Générale de la Sûreté Nationale' : 'DGSN — Direction Générale de la Sûreté Nationale',
                  body: es
                    ? '58 wilayas; unidades especiales: BRI (Brigades de Recherche et d\'Intervention), BMPJ (Brigade Mobile de Police Judiciaire), Police des Frontières (PAF), Renseignements Généraux (RG), Service de la Répression des Atteintes aux Personnes et aux Biens (SRPA); coordinación con la DSS (Direction des Services de Sécurité, antigua DRS) para contraterrorismo y contrainteligencia; el Comandante de la DGSN reporta al Ministro del Interior y Colectividades Locales.'
                    : '58 wilayas; specialised units: BRI (Brigades de Recherche et d\'Intervention), BMPJ (Brigade Mobile de Police Judiciaire), Police des Frontières (PAF), Renseignements Généraux (RG), Service de la Répression des Atteintes aux Personnes et aux Biens (SRPA); coordination with DSS (Direction des Services de Sécurité, former DRS) for counterterrorism and counterintelligence; DGSN Commander reports to Minister of Interior and Local Communities.',
                },
                {
                  title: es ? 'Gendarmería Nacional (GN/MDN)' : 'Gendarmerie Nationale (GN/MDN)',
                  body: es
                    ? 'Bajo el Ministerio de Defensa Nacional (MDN) y el ANP; responsable de zonas rurales, fronteras y seguridad de infraestructura crítica; brigadas de Gendarmería en los 58 wilayas con unidades especiales: Groupements d\'Intervention Rapide (GIR), Unités de Sécurité de l\'Infrastructure Pétrolière (USIP) para instalaciones de SONATRACH, y Gendarmerie de l\'Air (aeropuertos); coordinación con el CNCLAT para amenazas terroristas.'
                    : 'Under Ministry of National Defence (MDN) and ANP; responsible for rural zones, borders, and critical infrastructure security; Gendarmerie brigades in all 58 wilayas with specialised units: Groupements d\'Intervention Rapide (GIR), Unités de Sécurité de l\'Infrastructure Pétrolière (USIP) for SONATRACH facilities, and Gendarmerie de l\'Air (airports); coordination with CNCLAT for terrorist threats.',
                },
                {
                  title: es ? 'DGPC — Dirección General de Protección Civil' : 'DGPC — Direction Générale de la Protection Civile',
                  body: es
                    ? 'Protección civil y bomberos en las 58 wilayas bajo el Ministerio del Interior; respuesta en infraestructura SONATRACH (Hassi Messaoud/In Amenas/Arzew), plataformas de perforación offshore, Aeropuerto Houari Boumediene (ALG), puertos de Argel/Oran/Béjaïa/Skikda y zonas industriales; coordinación SAR con la Armada Nacional Argelina (MNA) para incidentes en el Mediterráneo.'
                    : 'Civil protection and fire services across 58 wilayas under Ministry of Interior; incident response at SONATRACH infrastructure (Hassi Messaoud/In Amenas/Arzew), offshore drilling platforms, Houari Boumediene Airport (ALG), ports of Algiers/Oran/Béjaïa/Skikda, and industrial zones; SAR coordination with Algerian National Navy (MNA) for Mediterranean incidents.',
                },
                {
                  title: es ? 'Seguridad SONATRACH: Hassi Messaoud/In Amenas/Arzew' : 'SONATRACH Security: Hassi Messaoud/In Amenas/Arzew',
                  body: es
                    ? 'SONATRACH opera el mayor complejo energético de África: Hassi Messaoud (hub principal, más de 200 pozos de producción), Hassi R\'Mel (mayor campo de gas de África, producción de condensado), In Amenas/Tiguentourine (complejo de gas, seguridad intensificada post-2013 con GN/USIP/ANP), terminales GNL de Arzew GL1Z/GL2Z/GL3Z y Skikda GL1K, gasoductos Transmed (1,400 km a Italia)/Medgaz (750 km a España).'
                    : 'SONATRACH operates Africa\'s largest energy complex: Hassi Messaoud (primary hub, 200+ production wells), Hassi R\'Mel (Africa\'s largest gas field, condensate production), In Amenas/Tiguentourine (gas complex, intensified security post-2013 with GN/USIP/ANP), Arzew GL1Z/GL2Z/GL3Z and Skikda GL1K LNG terminals, Transmed pipeline (1,400 km to Italy)/Medgaz (750 km to Spain).',
                },
                {
                  title: es ? 'Seguridad fronteriza del Sahel — 6,343 km' : 'Sahel Border Security — 6,343 km',
                  body: es
                    ? 'Argelia comparte 6,343 km de fronteras terrestres con 6 países: Libia (982 km), Níger (956 km), Malí (1,376 km), Mauritania (463 km), Marruecos (más de 1,900 km, cerrado desde 1994), Túnez (965 km) — gestionadas por la GN con CCTV/radar, puestos avanzados del ANP para amenazas del Sahel (AQIM/GSPC), y el centro de fusión de datos del CNCLAT para coordinación contraterrorista con Argelia como hub regional del G5 Sahel y la iniciativa CEMOC.'
                    : 'Algeria shares 6,343 km of land borders with 6 countries: Libya (982 km), Niger (956 km), Mali (1,376 km), Mauritania (463 km), Morocco (1,900+ km, closed since 1994), Tunisia (965 km) — managed by GN with CCTV/radar, ANP forward posts for Sahel threats (AQIM/GSPC), and CNCLAT data fusion centre for counterterrorism coordination with Algeria as G5 Sahel and CEMOC regional hub.',
                },
                {
                  title: es ? 'Puertos y aeropuertos: Argel/Oran/ALG/Annaba' : 'Ports & Airports: Algiers/Oran/ALG/Annaba',
                  body: es
                    ? 'Aeropuerto Houari Boumediene (ALG, principal hub internacional), Aeropuerto de Es-Sénia (Oran), Aeropuerto de Mohamed Boudiaf (Constantina) — gestionados por EGSA con la Gendarmerie de l\'Air; puertos: Argel (principal, 8M+ toneladas), Oran/Béjaïa/Annaba/Skikda/Ghazaouet — administrados por EPE Port con la Policía de Fronteras de la DGSN y control aduanero de las Douanes Algériennes.'
                    : 'Houari Boumediene Airport (ALG, main international hub), Es-Sénia Airport (Oran), Mohamed Boudiaf Airport (Constantine) — managed by EGSA with Gendarmerie de l\'Air; ports: Algiers (main, 8M+ tonnes), Oran/Béjaïa/Annaba/Skikda/Ghazaouet — administered by EPE Port with DGSN Border Police and Douanes Algériennes customs control.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Capabilities */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {es ? 'Capacidades de la plataforma KabatOne para Argelia' : 'KabatOne Platform Capabilities for Algeria'}
            </h2>
            <div className="space-y-8">
              {[
                {
                  heading: es ? 'CAD unificado para DGSN 58 wilayas + GN + DGPC' : 'Unified CAD for DGSN 58 Wilayas + GN + DGPC',
                  text: es
                    ? 'Despacho integrado con gestión de recursos en tiempo real para las 58 direcciones de wilaya de la DGSN, brigadas de la GN, unidades de la DGPC y ambulancias del SAMU — sobre el mismo mapa operativo con integración de los números de emergencia 14/15/17, priorización por IA y panel de desbordamiento al CNCLAT para amenazas terroristas activas y el DSS para incidentes de contrainteligencia.'
                    : 'Integrated dispatch with real-time resource management for DGSN\'s 58 wilaya directorates, GN brigades, DGPC units, and SAMU ambulances — on the same operational map with 14/15/17 emergency integration, AI-driven incident prioritisation, and CNCLAT overflow dashboard for active terrorist threats and DSS for counterintelligence incidents.',
                },
                {
                  heading: es ? 'Gestión de video DGSN: Argel/Orán/Constantina/58 wilayas' : 'DGSN Video Management: Algiers/Oran/Constantine/58 Wilayas',
                  text: es
                    ? 'KabatOne gestiona las cámaras CCTV/ANPR de la DGSN en las 58 wilayas — incluidas las cámaras del Safe City de Argel en el Périphérique/N1/N5/N11, el metro y el tranvía — integra la vigilancia del ALG y los puertos de Argel/Oran/Béjaïa, conecta el video de las instalaciones de SONATRACH, y proporciona análisis de video con IA — detección de anomalías, conteo de personas, identificación de vehículos — con latencia de alerta inferior a 2 segundos.'
                    : 'KabatOne manages DGSN CCTV/ANPR cameras across 58 wilayas — including Algiers Safe City cameras on the Périphérique/N1/N5/N11, metro, and tramway — integrates ALG Airport and Algiers/Oran/Béjaïa port surveillance, connects SONATRACH facility video, and provides AI video analytics — anomaly detection, crowd counting, vehicle identification — with sub-2-second alert latency.',
                },
                {
                  heading: es ? 'Seguridad infraestructura SONATRACH post-In Amenas' : 'SONATRACH Infrastructure Security Post-In Amenas',
                  text: es
                    ? 'KabatOne proporciona monitoreo perimetral en tiempo real para todos los activos críticos de SONATRACH — Hassi Messaoud (hub principal, zona de seguridad multicapa), In Amenas/Tiguentourine (protocolo de seguridad reforzado USIP/GN/ANP), Hassi R\'Mel, Arzew/Bethioua y Skikda — con detección de intrusión, integración de video PTZ, SIEM para alertas de la GN, y procedimientos de escalada al CNCLAT para incidentes de seguridad críticos.'
                    : 'KabatOne provides real-time perimeter monitoring for all SONATRACH critical assets — Hassi Messaoud (primary hub, multi-layer security zone), In Amenas/Tiguentourine (enhanced USIP/GN/ANP security protocol), Hassi R\'Mel, Arzew/Bethioua, and Skikda — with intrusion detection, PTZ video integration, SIEM for GN alerts, and CNCLAT escalation procedures for critical security incidents.',
                },
                {
                  heading: es ? 'Monitoreo de fronteras del Sahel y sensor fusion' : 'Sahel Border Monitoring & Sensor Fusion',
                  text: es
                    ? 'KabatOne integra los puestos fronterizos de la GN en los 6,343 km de fronteras terrestres de Argelia con CCTV, radar de vigilancia terrestre, ANPR y drones (UAV) — proporcionando un mapa de conciencia situacional unificado para el CNCLAT, el ANP y el DSS, con alertas de cruce no autorizado, datos de inteligencia transfronteriza (AQIM/GSPC) y compatibilidad con los marcos de coordinación del G5 Sahel y Interpol.'
                    : 'KabatOne integrates GN border posts across Algeria\'s 6,343 km land borders with CCTV, ground surveillance radar, ANPR, and UAV drones — providing a unified situational awareness map for CNCLAT, ANP, and DSS, with unauthorised crossing alerts, cross-border intelligence data (AQIM/GSPC), and compatibility with G5 Sahel and Interpol coordination frameworks.',
                },
                {
                  heading: es ? 'Cumplimiento Ley 18-07/ANPDP, CERT-DZ y Code des marchés publics' : 'Law 18-07/ANPDP, CERT-DZ & Code des marchés publics Compliance',
                  text: es
                    ? 'KabatOne se alinea con la Ley 18-07 supervisada por la ANPDP — cifrado, gestión del consentimiento, derechos de acceso y notificación de brechas; las directivas de ciberseguridad del SGSI para sistemas gubernamentales; los estándares de respuesta a incidentes del CERT-DZ; y la documentación bilingüe francés/árabe para licitaciones bajo el Decreto Presidencial 15-247 y el sistema SIGMAP del Ministerio de Finanzas.'
                    : 'KabatOne aligns with Law 18-07 supervised by ANPDP — encryption, consent management, data subject access rights, and breach notification; SGSI cybersecurity directives for government systems; CERT-DZ incident response standards; and bilingual French/Arabic documentation for tenders under Presidential Decree 15-247 and Ministry of Finance SIGMAP system.',
                },
              ].map(({ heading, text }) => (
                <div key={heading} className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{heading}</h3>
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {es ? 'Marco regulatorio y de adquisiciones en Argelia' : 'Regulatory & Procurement Framework in Algeria'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  label: es ? 'Protección de datos' : 'Data Protection',
                  items: [
                    es ? 'Ley 18-07 — Ley de Protección de Datos Personales (junio 2018)' : 'Law 18-07 — Personal Data Protection Law (June 2018)',
                    es ? 'ANPDP — Autorité Nationale de Protection des Données à Caractère Personnel' : 'ANPDP — Autorité Nationale de Protection des Données à Caractère Personnel',
                    es ? 'Notificación de brechas · Localización de datos' : 'Breach notification · Data localisation',
                    es ? 'Ley 15-04 — Régimen general de Archivos y Documentación' : 'Law 15-04 — General Archives and Documentation regime',
                  ],
                },
                {
                  label: es ? 'Ciberseguridad' : 'Cybersecurity',
                  items: [
                    es ? 'SGSI — Secrétariat Général des Services de Sécurité Informatique' : 'SGSI — Secrétariat Général des Services de Sécurité Informatique',
                    es ? 'CERT-DZ — Equipo de Respuesta a Incidentes de Ciberseguridad' : 'CERT-DZ — Cybersecurity Incident Response Team',
                    es ? 'DSS — Direction des Services de Sécurité (directrices CI)' : 'DSS — Direction des Services de Sécurité (CI guidelines)',
                    es ? 'Protección CI: SONATRACH/In Amenas/Arzew/Hassi Messaoud' : 'CI protection: SONATRACH/In Amenas/Arzew/Hassi Messaoud',
                  ],
                },
                {
                  label: es ? 'Adquisiciones' : 'Procurement',
                  items: [
                    es ? 'Decreto 15-247 — Code des marchés publics (modificado 2020)' : 'Decree 15-247 — Code des marchés publics (amended 2020)',
                    es ? 'ARMP — Autorité de Régulation des Marchés Publics' : 'ARMP — Autorité de Régulation des Marchés Publics',
                    es ? 'SIGMAP — Sistema e-Procurement del Ministerio de Finanzas' : 'SIGMAP — Ministry of Finance e-Procurement system',
                    es ? 'SONATRACH — Adquisición directa para infraestructura energética' : 'SONATRACH — Direct procurement for energy infrastructure',
                  ],
                },
              ].map(({ label, items }) => (
                <div key={label} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">{label}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {es ? 'Preguntas frecuentes' : 'Frequently Asked Questions'}
            </h2>
            <div className="space-y-6">
              {activeFaqs.map((faq) => (
                <div key={faq.question} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          es={es}
          h2={
            es
              ? '¿Listo para modernizar la seguridad pública en Argelia?'
              : 'Ready to modernise public safety in Algeria?'
          }
          subtitle={
            es
              ? 'Descubra cómo KabatOne unifica la DGSN, la Gendarmería Nacional y la DGPC en una plataforma operativa conforme a la Ley 18-07/ANPDP, diseñada para proteger la infraestructura energética crítica de SONATRACH y las fronteras del Sahel de Argelia.'
              : 'Discover how KabatOne unifies Algeria DGSN, Gendarmerie Nationale, and DGPC into one operational platform compliant with Law 18-07/ANPDP, designed to protect SONATRACH critical energy infrastructure and Algeria\'s Sahel borders.'
          }
        />
      </main>
      <Footer es={es} />
    </>
  )
}
