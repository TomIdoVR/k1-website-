import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareIvoryCoast", locale);
}

export default async function PublicSafetySoftwareIvoryCoastPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const article = articleSchema(
    es
      ? "Software de Seguridad Pública para Costa de Marfil | DGPN, FRCI y Abidjan Smart City – KabatOne"
      : "Public Safety Software for Ivory Coast | DGPN, FRCI & Abidjan Smart City – KabatOne",
    es
      ? "KabatOne ofrece plataforma unificada de mando y control, despacho IA y conciencia situacional para la Police Nationale, FRCI, gestión de emergencias y programas de ciudad inteligente en Costa de Marfil."
      : "KabatOne delivers unified command-and-control, AI-dispatch, and situational awareness for the Police Nationale, FRCI, emergency management, and smart city programs in Ivory Coast.",
    es
      ? "https://kabatone.com/es/resources/public-safety-software-ivory-coast/"
      : "https://kabatone.com/resources/public-safety-software-ivory-coast/",
    "2026-05-19"
  );

  const faqs = faqPageSchema([
    {
      question: es
        ? "¿Qué capacidades ofrece KabatOne a la Police Nationale de Costa de Marfil?"
        : "What capabilities does KabatOne offer the Police Nationale of Ivory Coast?",
      answer: es
        ? "KabatOne proporciona CAD unificado para los 31 districtos/14 regiones, despacho IA que integra el CCTV de Abidjan Safe City, gestión de incidentes transfronterizos con 5 países vecinos y cumplimiento de la Loi 2013-450 de protección de datos/ARTCI."
        : "KabatOne provides unified CAD for all 31 districts/14 regions, AI-dispatch integrating Abidjan Safe City CCTV, cross-border incident management with 5 neighboring countries, and compliance with Law 2013-450 on data protection/ARTCI.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad de infraestructura crítica en Costa de Marfil?"
        : "How does KabatOne support critical infrastructure security in Ivory Coast?",
      answer: es
        ? "La plataforma monitorea PETROCI/Foxtrot offshore, Abidjan Oil Refinery SIR, CI-Energies red eléctrica (Kossou/Taabo dams), Puerto Autónomo de Abidjan (primer puerto de África Occidental del sur), ABIDJAN-BOUAKÉ-OUANGOLODOUGOU rail y el Aeropuerto Internacional Félix-Houphouët-Boigny (ABJ)."
        : "The platform monitors PETROCI/Foxtrot offshore operations, Abidjan Oil Refinery SIR, CI-Energies power grid (Kossou/Taabo dams), Autonomous Port of Abidjan (West Africa's busiest southern port), Abidjan-Bouake-Ouangolodougou rail, and Felix-Houphouet-Boigny International Airport (ABJ).",
    },
    {
      question: es
        ? "¿Puede KabatOne integrarse con la gestión de emergencias de Costa de Marfil?"
        : "Can KabatOne integrate with emergency management in Ivory Coast?",
      answer: es
        ? "Sí. KabatOne se integra con la ONAD/ONPC para inundaciones de Abidjan/Laguna Ebrié, gestión de emergencias para la industria del cacao (1/3 de la producción mundial), alertas de CEDEAO/CEDEAO-ECOWAS y coordinación de fronteras con Liberia/Guinea/Mali/Burkina Faso/Ghana."
        : "Yes. KabatOne integrates with ONAD/ONPC for Abidjan/Ebrié Lagoon flooding, emergency management for the cocoa industry (1/3 of world production), ECOWAS/CEDEAO alerts, and border coordination with Liberia/Guinea/Mali/Burkina Faso/Ghana.",
    },
    {
      question: es
        ? "¿Cómo cumple KabatOne con la normativa de Costa de Marfil?"
        : "How does KabatOne comply with Ivory Coast's regulations?",
      answer: es
        ? "KabatOne se alinea con la Loi 2013-450 de protección de datos personales/ARTCI, la Loi 2013-451 sobre ciberseguridad, las directrices de la Autorité de Régulation des Télécommunications de Côte d'Ivoire (ARTCI) y el Décret 2017-547 sobre contratación pública."
        : "KabatOne aligns with Law 2013-450 on personal data protection/ARTCI, Law 2013-451 on cybersecurity, Autorité de Régulation des Télécommunications de Côte d'Ivoire (ARTCI) guidelines, and Decree 2017-547 on public procurement.",
    },
    {
      question: es
        ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Costa de Marfil?"
        : "What sets KabatOne apart for Ivory Coast's border management?",
      answer: es
        ? "KabatOne unifica los 5 corredores fronterizos (Liberia/Guinea/Mali/Burkina Faso/Ghana) con ANPR, listas Interpol/CEDEAO, alertas de seguridad de CEDEAO-ECOWAS y monitoreo del corredor Norte-Sur Abidjan-Bamako con gestión unificada de incidentes DGP/Gendarmerie."
        : "KabatOne unifies 5 border corridors (Liberia/Guinea/Mali/Burkina Faso/Ghana) with ANPR, Interpol/ECOWAS watchlists, ECOWAS security alerts, and monitoring of the North-South Abidjan-Bamako corridor with unified DGP/Gendarmerie incident management.",
    },
  ]);

  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    {
      name: es ? "Recursos" : "Resources",
      url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/",
    },
    {
      name: es ? "Software de Seguridad Pública Costa de Marfil" : "Public Safety Software Ivory Coast",
      url: es
        ? "https://kabatone.com/es/resources/public-safety-software-ivory-coast/"
        : "https://kabatone.com/resources/public-safety-software-ivory-coast/",
    },
  ]);

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <main className="bg-white text-gray-900">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] text-white py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#4fc3f7] text-sm font-semibold uppercase tracking-widest mb-3">
              {es
                ? "Guía de Mercado — Costa de Marfil"
                : "Market Guide — Ivory Coast (Côte d'Ivoire)"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es
                ? "Software de Seguridad Pública para Costa de Marfil"
                : "Public Safety Software for Ivory Coast"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {es
                ? "Plataforma unificada de mando y control, despacho IA y conciencia situacional para la Police Nationale, FRCI, ONPC y el programa Abidjan Smart City — el motor económico de África Occidental."
                : "Unified command-and-control, AI-dispatch, and situational awareness for the Police Nationale, FRCI, ONPC, and the Abidjan Smart City program — West Africa's economic powerhouse."}
            </p>
          </div>
        </section>

        {/* Police Nationale */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {es
              ? "Police Nationale y Gendarmerie Nationale — Seguridad en 31 Distritos"
              : "Police Nationale & Gendarmerie Nationale — Security Across 31 Districts"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "La Direction Générale de la Police Nationale (DGPN) de Costa de Marfil opera en los 31 distritos autónomos y regiones del país, con más de 25,000 efectivos policiales. La Gendarmerie Nationale cuenta con más de 15,000 gendarmes. Las Forces Républicaines de Côte d'Ivoire (FRCI), las antiguas Fuerzas de Defensa y Seguridad (FDS) unificadas tras la crisis postelectoral de 2011, integran el ejército, la armada y la fuerza aérea."
              : "Direction Générale de la Police Nationale (DGPN) of Ivory Coast operates across 31 autonomous districts and regions with over 25,000 police officers. The Gendarmerie Nationale has over 15,000 gendarmes. The Republican Forces of Côte d'Ivoire (FRCI), the former Defence and Security Forces (FDS) unified after the 2011 post-electoral crisis, integrate the army, navy, and air force."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne proporciona un CAD/gestión de incidentes unificado que integra los centros de operaciones distritales con el Centro de Mando Nacional de Abidjan y Yamoussoukro, distribución de patrullas en tiempo real y tableros de inteligencia delictiva para Abidjan, Bouaké, Daloa, San-Pédro y Korhogo."
              : "KabatOne provides unified CAD/incident management integrating district operations centers with the Abidjan and Yamoussoukro National Command Centers, real-time patrol deployment, and crime intelligence dashboards for Abidjan, Bouake, Daloa, San-Pedro, and Korhogo."}
          </p>

          {/* Abidjan Smart City */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Abidjan Smart City — CCTV, Tráfico y Centro Financiero de CEDEAO"
              : "Abidjan Smart City — CCTV, Traffic & ECOWAS Financial Hub"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Abidjan, con más de 5 millones de habitantes, es el mayor centro financiero y comercial de África Occidental francófona. El programa Abidjan Safe City opera miles de cámaras CCTV integradas con la DGPN, gestión de tráfico inteligente en las principales autopistas (A100/A3) y el Sistema de Vigilancia del Puerto Autónomo de Abidjan. La laguna Ebrié y los 10 puentes de Abidjan representan activos de infraestructura crítica."
              : "Abidjan, with over 5 million residents, is Francophone West Africa's largest financial and commercial center. The Abidjan Safe City program operates thousands of CCTV cameras integrated with DGPN, smart traffic management on major highways (A100/A3), and the Autonomous Port of Abidjan surveillance system. Ebrié Lagoon and Abidjan's 10 bridges represent critical infrastructure assets."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne se integra con el CCTV de Abidjan Safe City para conciencia situacional en tiempo real, correlaciona datos del Sistema de Transporte Inteligente (STI) para gestión de emergencias de tráfico, y apoya los eventos del Festival des Musiques Urbaines d'Anoumabo (FEMUA) y otros eventos masivos con coordinación de seguridad."
              : "KabatOne integrates with Abidjan Safe City CCTV for real-time situational awareness, correlates Intelligent Transport System (ITS) data for traffic emergency management, and supports mass events like FEMUA festival with security coordination."}
          </p>

          {/* Critical Infrastructure */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Infraestructura Crítica — Cacao, Petróleo, Energía y Puerto de Abidjan"
              : "Critical Infrastructure — Cocoa, Oil, Energy & Port of Abidjan"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Costa de Marfil es el mayor productor mundial de cacao (~2 millones de toneladas/año, ~45% del total mundial) y es el motor agrícola de la CEDEAO. PETROCI gestiona la exploración y producción de petróleo y gas, con producción offshore de ~25,000-30,000 bpd (Foxtrot/Espoir/Lion/Panthère campos). La Société Ivoirienne de Raffinage (SIR) en Abidjan procesa ~3.7 millones de toneladas/año."
              : "Ivory Coast is the world's largest cocoa producer (~2 million tonnes/year, ~45% of global total) and the ECOWAS agricultural engine. PETROCI manages oil and gas exploration and production, with offshore production of ~25,000-30,000 bpd (Foxtrot/Espoir/Lion/Panthère fields). Société Ivoirienne de Raffinage (SIR) in Abidjan processes ~3.7 million tonnes/year."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "CI-Energies gestiona la red eléctrica nacional con ~2,200 MW de capacidad instalada, incluyendo las presas hidroeléctricas de Kossou (174 MW), Taabo (210 MW), Ayamé I/II y la nueva central de gas de Azito (290 MW). El Puerto Autónomo de Abidjan (PAA) maneja ~25 millones de toneladas/año y es el primer puerto de exportación de cacao del mundo. El Aeropuerto Félix-Houphouët-Boigny (ABJ) es el hub aéreo regional de CEDEAO occidental."
              : "CI-Energies manages the national power grid with ~2,200 MW installed capacity, including Kossou (174 MW), Taabo (210 MW), Ayame I/II hydroelectric dams, and the new Azito gas plant (290 MW). Autonomous Port of Abidjan (PAA) handles ~25 million tonnes/year and is the world's top cocoa export port. Felix-Houphouet-Boigny Airport (ABJ) is the western ECOWAS regional aviation hub."}
          </p>

          {/* Border Management */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión Fronteriza — Liberia, Guinea, Mali, Burkina Faso y Ghana"
              : "Border Management — Liberia, Guinea, Mali, Burkina Faso & Ghana"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Costa de Marfil comparte fronteras con 5 países: Liberia al suroeste (Tabou/Guiglo corredores), Guinea al noroeste (Danané/Odienné corredores), Mali al norte (Ferkessédougou/Tengrela corredores), Burkina Faso al noreste (Ouangolodougou/Bobo-Dioulasso corredor), y Ghana al este (Elubo/Aboisso/Noé corredores). El corredor Abidjan–Bamako (vía Burkina Faso) es la arteria norte-sur más importante de África Occidental."
              : "Ivory Coast shares borders with 5 countries: Liberia to the southwest (Tabou/Guiglo corridors), Guinea to the northwest (Danane/Odienne corridors), Mali to the north (Ferkessedougou/Tengrela corridors), Burkina Faso to the northeast (Ouangolodougou/Bobo-Dioulasso corridor), and Ghana to the east (Elubo/Aboisso/Noe corridors). The Abidjan-Bamako corridor (via Burkina Faso) is West Africa's most important north-south artery."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne integra la Direction Générale des Douanes (DGD) y la Gendarmerie Nationale con feeds ANPR en tiempo real, listas de control compartidas con Interpol/CEDEAO, alertas de seguridad del Sahel/Burkina Faso y el sistema de seguimiento del corredor Abidjan-Lagos (CEDEAO) para gestión de incidentes de tránsito."
              : "KabatOne integrates the Direction Générale des Douanes (DGD) and Gendarmerie Nationale with real-time ANPR feeds, shared watchlists with Interpol/ECOWAS, Sahel/Burkina Faso security alerts, and the Abidjan-Lagos corridor (ECOWAS) tracking system for transit incident management."}
          </p>

          {/* Compliance */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Cumplimiento Normativo — ARTCI, Marchés Publics y Vision 2030"
              : "Regulatory Compliance — ARTCI, Marchés Publics & Vision 2030"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Costa de Marfil aplica la Loi 2013-450 du 19 juin 2013 relativa a la protección de datos personales, supervisada por l'Autorité de Protection des Données à Caractère Personnel (APDP). La Loi 2013-451 sobre delitos de la tecnología de la información establece los estándares de ciberseguridad. l'Autorité de Régulation des Télécommunications de Côte d'Ivoire (ARTCI) supervisa las telecomunicaciones de seguridad pública."
              : "Ivory Coast enforces Law 2013-450 of 19 June 2013 relating to personal data protection, overseen by the Autorité de Protection des Données à Caractère Personnel (APDP). Law 2013-451 on information technology crimes establishes cybersecurity standards. Autorité de Régulation des Télécommunications de Côte d'Ivoire (ARTCI) oversees public safety telecommunications."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "Las adquisiciones públicas se rigen por el Décret 2009-259 du 6 août 2009 portant Code des Marchés Publics, supervisado por la Direction des Marchés Publics (DMP) del Ministère du Budget y l'Autorité Nationale de Régulation des Marchés Publics (ANRMP). Costa de Marfil es miembro de la UEMOA/CEDEAO y aplica los marcos armonizados de gestión financiera pública."
              : "Public procurement follows Décret 2009-259 du 6 août 2009 portant Code des Marchés Publics, overseen by the Direction des Marchés Publics (DMP) of the Ministère du Budget and Autorité Nationale de Régulation des Marchés Publics (ANRMP). Ivory Coast is a member of UEMOA/ECOWAS and applies harmonised public financial management frameworks."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "La Vision 2030 de Costa de Marfil (Plan National de Développement PND 2021-2025) prioriza la modernización de la seguridad pública, la transformación digital del gobierno y el posicionamiento de Costa de Marfil como hub digital de CEDEAO. KabatOne se alinea como infraestructura digital de seguridad pública compatible con los estándares UEMOA/CEDEAO."
              : "Ivory Coast's Vision 2030 (Plan National de Développement PND 2021-2025) prioritises public safety modernisation, government digital transformation, and Ivory Coast's positioning as the ECOWAS digital hub. KabatOne aligns as public safety digital infrastructure compatible with UEMOA/ECOWAS standards."}
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">
              {es ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: es
                    ? "¿Qué capacidades ofrece KabatOne a la Police Nationale de Costa de Marfil?"
                    : "What capabilities does KabatOne offer the Police Nationale of Ivory Coast?",
                  a: es
                    ? "KabatOne proporciona CAD unificado para los 31 distritos/14 regiones, despacho IA con CCTV Abidjan Safe City, gestión de incidentes transfronterizos y cumplimiento Loi 2013-450/ARTCI."
                    : "KabatOne provides unified CAD for 31 districts/14 regions, AI-dispatch with Abidjan Safe City CCTV, cross-border incident management, and Law 2013-450/ARTCI compliance.",
                },
                {
                  q: es
                    ? "¿Cómo apoya KabatOne la seguridad de infraestructura crítica en Costa de Marfil?"
                    : "How does KabatOne support critical infrastructure security in Ivory Coast?",
                  a: es
                    ? "La plataforma monitorea PETROCI/Foxtrot offshore, SIR refinery, CI-Energies ~2,200 MW, Puerto Autónomo de Abidjan 25M+ toneladas (mayor puerto de cacao del mundo), ABJ Airport y el corredor RNCF Abidjan-Ouagadougou."
                    : "The platform monitors PETROCI/Foxtrot offshore, SIR refinery, CI-Energies ~2,200 MW grid, Port of Abidjan 25M+ tonnes (world's top cocoa export port), ABJ Airport, and RNCF Abidjan-Ouagadougou corridor.",
                },
                {
                  q: es
                    ? "¿Puede KabatOne integrarse con la gestión de emergencias de Costa de Marfil?"
                    : "Can KabatOne integrate with emergency management in Ivory Coast?",
                  a: es
                    ? "Sí. KabatOne integra ONAD/ONPC para inundaciones de Abidjan/Laguna Ebrié, gestión de emergencias de la cadena cacao y alertas CEDEAO/Sahel."
                    : "Yes. KabatOne integrates ONAD/ONPC for Abidjan/Ebrié Lagoon flooding, cocoa supply chain emergency management, and ECOWAS/Sahel alerts.",
                },
                {
                  q: es
                    ? "¿Cómo cumple KabatOne con la normativa de Costa de Marfil?"
                    : "How does KabatOne comply with Ivory Coast's regulations?",
                  a: es
                    ? "KabatOne se alinea con la Loi 2013-450/APDP, la Loi 2013-451 de ciberseguridad, ARTCI, el Décret 2009-259/ANRMP y marcos UEMOA/CEDEAO para proyectos de seguridad pública."
                    : "KabatOne aligns with Law 2013-450/APDP, Law 2013-451 cybersecurity, ARTCI, Décret 2009-259/ANRMP, and UEMOA/ECOWAS frameworks for public safety projects.",
                },
                {
                  q: es
                    ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Costa de Marfil?"
                    : "What sets KabatOne apart for Ivory Coast's border management?",
                  a: es
                    ? "KabatOne unifica los 5 corredores fronterizos (Liberia/Guinea/Mali/Burkina Faso/Ghana) con ANPR, listas Interpol/CEDEAO, alertas del Sahel y monitoreo del corredor Abidjan-Bamako para DGD/Gendarmerie."
                    : "KabatOne unifies 5 border corridors (Liberia/Guinea/Mali/Burkina Faso/Ghana) with ANPR, Interpol/ECOWAS watchlists, Sahel alerts, and Abidjan-Bamako corridor monitoring for DGD/Gendarmerie.",
                },
              ].map(({ q, a }, i) => (
                <details key={i} className="bg-white rounded-lg shadow-sm p-6">
                  <summary className="font-semibold text-lg cursor-pointer">{q}</summary>
                  <p className="mt-3 text-gray-700">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          es={es}
          h2={
            es
              ? "¿Listo para modernizar la seguridad pública en Costa de Marfil?"
              : "Ready to modernize public safety in Ivory Coast?"
          }
          subtitle={
            es
              ? "Hable con nuestros especialistas sobre la Police Nationale, FRCI, el Puerto de Abidjan y los programas de ciudad inteligente de CEDEAO."
              : "Speak with our specialists about the Police Nationale, FRCI, Port of Abidjan, and ECOWAS smart city programs."
          }
        />
      </main>
      <Footer es={es} />
    </>
  );
}
