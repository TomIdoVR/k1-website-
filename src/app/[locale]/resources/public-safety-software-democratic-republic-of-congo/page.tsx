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
  return generatePageMetadata("publicSafetySoftwareDRC", locale);
}

export default async function PublicSafetySoftwareDRCPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const article = articleSchema(
    es
      ? "Software de Seguridad Pública para RDC | PNC, FARDC y Gestión de Crisis – KabatOne"
      : "Public Safety Software for DRC | PNC, FARDC & Crisis Management – KabatOne",
    es
      ? "KabatOne ofrece plataforma unificada de mando y control, despacho IA y conciencia situacional para la Policía Nacional Congolesa, FARDC, gestión de desastres y programas de ciudad inteligente en la República Democrática del Congo."
      : "KabatOne delivers unified command-and-control, AI-dispatch, and situational awareness for the Congolese National Police, FARDC, disaster management, and smart city programs in the Democratic Republic of Congo.",
    es
      ? "https://kabatone.com/es/resources/public-safety-software-democratic-republic-of-congo/"
      : "https://kabatone.com/resources/public-safety-software-democratic-republic-of-congo/",
    "2026-05-19"
  );

  const faqs = faqPageSchema([
    {
      question: es
        ? "¿Qué capacidades ofrece KabatOne a la Policía Nacional Congolesa (PNC)?"
        : "What capabilities does KabatOne offer the Congolese National Police (PNC)?",
      answer: es
        ? "KabatOne proporciona CAD unificado para las 26 provincias, despacho IA que integra circuitos CCTV de Kinshasa/Lubumbashi, gestión de incidentes transfronterizos con 9 países vecinos y cumplimiento de la Ley 20/017 de protección de datos."
        : "KabatOne provides unified CAD for all 26 provinces, AI-dispatch integrating Kinshasa/Lubumbashi CCTV networks, cross-border incident management with 9 neighboring countries, and compliance with Law 20/017 on data protection.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad de los recursos minerales de la RDC?"
        : "How does KabatOne support security for DRC's mineral resources?",
      answer: es
        ? "La plataforma monitorea las zonas mineras de cobalto/cobre del Katanga (Glencore/Tenke Fungurume/Kamoa-Kakula), Kivu oro/coltán, y los sitios de extracción del casiterita/wolframita con gestión unificada de activos y alertas geofence."
        : "The platform monitors Katanga cobalt/copper mining zones (Glencore/Tenke Fungurume/Kamoa-Kakula), Kivu gold/coltan, and cassiterite/wolframite extraction sites with unified asset management and geofence alerts.",
    },
    {
      question: es
        ? "¿Puede KabatOne integrarse con la gestión de desastres en la RDC?"
        : "Can KabatOne integrate with disaster management in the DRC?",
      answer: es
        ? "Sí. KabatOne se integra con OCHA/MONUSCO alertas humanitarias, erupciones del Nyiragongo/Nyamulagira (Virunga), inundaciones del río Congo/Lualaba, y protocolos OCHA de desplazamiento interno con los 6+ millones de PDI en el este del país."
        : "Yes. KabatOne integrates with OCHA/MONUSCO humanitarian alerts, Nyiragongo/Nyamulagira eruptions (Virunga), Congo/Lualaba river flooding, and OCHA internal displacement protocols with the 6+ million IDPs in eastern DRC.",
    },
    {
      question: es
        ? "¿Cómo cumple KabatOne con la normativa de la RDC?"
        : "How does KabatOne comply with DRC regulations?",
      answer: es
        ? "KabatOne se alinea con la Ley 20/017 de protección de datos, las directrices de la Autoridad de Regulación de Correos y Telecomunicaciones (ARPTC) y el marco de la Agencia Nacional de Seguridad Informática (ANSSI-RDC) para sistemas de seguridad pública."
        : "KabatOne aligns with Law 20/017 on data protection, Post and Telecommunications Regulatory Authority (ARPTC) guidelines, and the National Information Security Agency (ANSSI-RDC) framework for public safety systems.",
    },
    {
      question: es
        ? "¿Qué diferencia a KabatOne en la gestión fronteriza de la RDC?"
        : "What sets KabatOne apart for DRC's border management?",
      answer: es
        ? "KabatOne unifica los 9 corredores fronterizos (Congo/Brazzaville, República Centroafricana, Sudán del Sur, Uganda, Rwanda, Burundi, Tanzania, Zambia, Angola) con ANPR, listas de control compartidas con Interpol/SADC/CEEAC y alertas humanitarias de MONUSCO."
        : "KabatOne unifies 9 border corridors (Congo/Brazzaville, CAR, South Sudan, Uganda, Rwanda, Burundi, Tanzania, Zambia, Angola) with ANPR, shared watchlists with Interpol/SADC/ECCAS, and MONUSCO humanitarian alerts.",
    },
  ]);

  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    {
      name: es ? "Recursos" : "Resources",
      url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/",
    },
    {
      name: es ? "Software de Seguridad Pública RDC" : "Public Safety Software DRC",
      url: es
        ? "https://kabatone.com/es/resources/public-safety-software-democratic-republic-of-congo/"
        : "https://kabatone.com/resources/public-safety-software-democratic-republic-of-congo/",
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
                ? "Guía de Mercado — República Democrática del Congo"
                : "Market Guide — Democratic Republic of Congo"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es
                ? "Software de Seguridad Pública para la República Democrática del Congo"
                : "Public Safety Software for the Democratic Republic of Congo"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {es
                ? "Plataforma unificada de mando y control, despacho IA y conciencia situacional para la PNC, FARDC, OCHA/MONUSCO y programas de ciudad inteligente en Kinshasa, Lubumbashi y el este del país."
                : "Unified command-and-control, AI-dispatch, and situational awareness for PNC, FARDC, OCHA/MONUSCO, and smart city programs in Kinshasa, Lubumbashi, and eastern DRC."}
            </p>
          </div>
        </section>

        {/* PNC */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {es
              ? "Policía Nacional Congolesa (PNC) — Mando Unificado en 26 Provincias"
              : "Congolese National Police (PNC) — Unified Command Across 26 Provinces"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "La Policía Nacional Congolesa (PNC) opera en las 26 provincias de la RDC con más de 120,000 efectivos. Sus unidades especializadas incluyen la Policía de Intervención Rapide (PIR), la Brigada Anti-Émeute (BAE), la Brigade Spéciale de Recherche et d'Arrestation (BSRA) y la policía de fronteras DGM (Direction Générale de Migration)."
              : "The Congolese National Police (PNC) operates across the DRC's 26 provinces with over 120,000 officers. Specialized units include the Rapid Intervention Police (PIR), Anti-Riot Brigade (BAE), Special Research and Arrest Brigade (BSRA), and border police DGM (Direction Générale de Migration)."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne proporciona un CAD/gestión de incidentes unificado que integra los centros de operaciones provinciales con el Centro de Mando Nacional de Kinshasa, distribución de patrullas en tiempo real para Kinshasa/Lubumbashi/Goma/Bukavu y tableros de inteligencia delictiva."
              : "KabatOne provides unified CAD/incident management integrating provincial operations centers with the Kinshasa National Command Center, real-time patrol deployment for Kinshasa/Lubumbashi/Goma/Bukavu, and crime intelligence dashboards."}
          </p>

          {/* FARDC */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "FARDC — Fuerzas Armadas y Operaciones en el Este"
              : "FARDC — Armed Forces & Eastern DRC Operations"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Las Forces Armées de la République Démocratique du Congo (FARDC), con más de 130,000 efectivos, conducen operaciones contra grupos armados en los Kivus (M23/FDLR/ADF/Maï-Maï), el Ituri, el Maniema y el Tanganyika. La FARDC trabaja en coordinación con MONUSCO (Misión de la ONU, actualmente en retirada gradual), las Fuerzas Regionales de la EAC y las Forces de la Communauté d'Afrique de l'Est."
              : "Forces Armées de la République Démocratique du Congo (FARDC), with over 130,000 troops, conduct operations against armed groups in the Kivus (M23/FDLR/ADF/Mai-Mai), Ituri, Maniema, and Tanganyika. FARDC coordinates with MONUSCO (UN mission, currently phasing out), EAC Regional Force, and East African Community forces."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne apoya las funciones de C2 de las FARDC con mapas operativos georreferenciados de los teatros del este, coordinación multiagencia con PNC/ANR/DEMIAP, comunicaciones seguras cifradas y gestión de logística para el seguimiento de convoys humanitarios en colaboración con OCHA."
              : "KabatOne supports FARDC C2 functions with georeferenced operational maps of eastern theaters, multi-agency coordination with PNC/ANR/DEMIAP, encrypted secure communications, and logistics management for humanitarian convoy tracking in collaboration with OCHA."}
          </p>

          {/* Mining Security */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Seguridad Minera — Cobalto, Cobre, Coltán y Recursos Estratégicos"
              : "Mining Security — Cobalt, Copper, Coltan & Strategic Resources"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "La RDC posee el 70% de las reservas mundiales de cobalto y es uno de los mayores productores de cobre. Los proyectos clave incluyen: Kamoa-Kakula (Ivanhoe Mines, ~620,000 toneladas de cobre/año), Tenke Fungurume/CMOC, Mutanda/Glencore, Kamoto Copper/KCC, y los yacimientos de coltán del Kivu Norte/Kivu Sur. La Société Minière de Bakwanga (MIBA) opera la mayor mina de diamantes del mundo en Mbuji-Mayi."
              : "DRC holds 70% of global cobalt reserves and is one of the largest copper producers. Key projects include Kamoa-Kakula (Ivanhoe Mines, ~620,000 tonnes copper/year), Tenke Fungurume/CMOC, Mutanda/Glencore, Kamoto Copper/KCC, and North/South Kivu coltan deposits. Société Minière de Bakwanga (MIBA) operates the world's largest diamond mine in Mbuji-Mayi."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne proporciona seguridad perimetral georreferenciada para sitios mineros, alertas de intrusión en zonas de exclusión, monitoreo de corredores de transporte mineral (Lobito Corridor/Dar es Salaam/Durban), y cumplimiento del Programa iTSCi/OCDE para la cadena de custodia de minerales de conflicto."
              : "KabatOne provides georeferenced perimeter security for mining sites, exclusion zone intrusion alerts, mineral transport corridor monitoring (Lobito Corridor/Dar es Salaam/Durban), and iTSCi/OECD conflict minerals chain-of-custody compliance."}
          </p>

          {/* Disaster Management */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión de Desastres — Volcanes Virunga, Inundaciones y Desplazamiento"
              : "Disaster Management — Virunga Volcanoes, Flooding & Displacement"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "El Observatorio Volcanológico de Goma (OVG) monitorea el Nyiragongo (activo, 3,470 m) — que entró en erupción en 2021 amenazando la ciudad de Goma (600,000+ habitantes) — y el Nyamulagira. La RDC registra más de 6.9 millones de desplazados internos (PDI), la mayor crisis de desplazamiento del mundo. La Cuenca del Congo es el segundo bosque tropical más grande del planeta y enfrenta riesgos de inundaciones estacionales del río Congo/Lualaba."
              : "Goma Volcanological Observatory (OVG) monitors Nyiragongo (active, 3,470 m) — which erupted in 2021 threatening Goma city (600,000+ residents) — and Nyamulagira. DRC has over 6.9 million internally displaced persons (IDPs), the world's largest displacement crisis. The Congo Basin is the second largest tropical forest and faces seasonal flooding risks from the Congo/Lualaba rivers."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne integra alertas sísmicas/volcánicas del OVG, monitoreo hidrológico del río Congo, feeds humanitarios de OCHA/UNHCR para los 6.9M PDI, coordinación de corredores humanitarios con MSF/CICR y planes de evacuación de Goma/Butembo/Beni con protocolos de respuesta PNC-FARDC-ONU."
              : "KabatOne integrates OVG seismic/volcanic alerts, Congo river hydrological monitoring, OCHA/UNHCR humanitarian feeds for 6.9M IDPs, humanitarian corridor coordination with MSF/ICRC, and Goma/Butembo/Beni evacuation plans with PNC-FARDC-UN response protocols."}
          </p>

          {/* Infrastructure */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Infraestructura Crítica — Inga, Puertos y Corredores de Transporte"
              : "Critical Infrastructure — Inga Dam, Ports & Transport Corridors"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "La Presa de Grand Inga en el río Congo tiene potencial para 44,000 MW (la mayor en el mundo si se construye totalmente); las actuales Inga I (351 MW) e Inga II (1,424 MW) son gestionadas por la Société Nationale d'Électricité (SNEL). El Puerto de Matadi/Boma sobre el río Congo es el principal puerto marítimo de la RDC, con acceso a Kinshasa por vía fluvial. El Aeropuerto Internacional de N'Djili (FIH, Kinshasa) y el Aeropuerto de Lubumbashi (FBM) son los principales puntos de entrada aéreos."
              : "The Grand Inga Dam on the Congo River has potential for 44,000 MW (the world's largest if fully built); current Inga I (351 MW) and Inga II (1,424 MW) are managed by Société Nationale d'Électricité (SNEL). Matadi/Boma Port on the Congo River is DRC's main seaport, with river access to Kinshasa. N'Djili International Airport (FIH, Kinshasa) and Lubumbashi Airport (FBM) are the main air entry points."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "El Corredor de Lobito (Lobito Angola–Kolwezi RDC–Dar es Salaam, financiado por EU/US/AfDB) emerge como el principal corredor de exportación de minerales críticos. KabatOne monitorea el transporte ferroviario SNCC (Société Nationale des Chemins de Fer du Congo), las rutas de navegación del río Congo/Kasaï y los corredores CEMAC/SADC con gestión unificada de incidentes."
              : "The Lobito Corridor (Lobito Angola–Kolwezi DRC–Dar es Salaam, EU/US/AfDB-funded) emerges as the primary critical minerals export corridor. KabatOne monitors SNCC rail transport (Société Nationale des Chemins de Fer du Congo), Congo/Kasai river navigation routes, and CEMAC/SADC corridors with unified incident management."}
          </p>

          {/* Border Management */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión Fronteriza — 9 Países Vecinos y DGM"
              : "Border Management — 9 Neighboring Countries & DGM"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "La RDC comparte 10,744 km de fronteras con 9 países: República del Congo (Brazzaville/Pool Malebo), República Centroafricana, Sudán del Sur, Uganda (Mahagi/Aru/Kasindi), Rwanda (Goma/Gisenyi, Bukavu/Cyangugu), Burundi (Uvira/Gatumba), Tanzania (Kalemie/Uvira), Zambia (Kasumbalesa/Mokambo) y Angola (Kasumbi/Luvo). La DGM (Direction Générale de Migration) controla los pasos fronterizos y la inmigración."
              : "DRC shares 10,744 km of borders with 9 countries: Republic of Congo (Brazzaville/Pool Malebo), Central African Republic, South Sudan, Uganda (Mahagi/Aru/Kasindi), Rwanda (Goma/Gisenyi, Bukavu/Cyangugu), Burundi (Uvira/Gatumba), Tanzania (Kalemie/Uvira), Zambia (Kasumbalesa/Mokambo), and Angola (Kasumbi/Luvo). DGM (Direction Générale de Migration) controls border posts and immigration."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne integra la DGM con feeds ANPR en tiempo real, listas de vigilancia compartidas con Interpol/SADC/CEEAC, alertas humanitarias de OCHA/MONUSCO para gestión de flujos de refugiados, y el Sistema de Control de Tráfico de Mercancías para el seguimiento de exportaciones de minerales."
              : "KabatOne integrates DGM with real-time ANPR feeds, shared watchlists with Interpol/SADC/ECCAS, OCHA/MONUSCO humanitarian alerts for refugee flow management, and the Cargo Traffic Control System for mineral export tracking."}
          </p>

          {/* Compliance */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Cumplimiento Normativo — Protección de Datos, ARPTC y Adquisiciones"
              : "Regulatory Compliance — Data Protection, ARPTC & Procurement"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "La RDC aplica la Ley 20/017 del 25 de noviembre de 2020 sobre las Telecomunicaciones y las TIC, que incluye disposiciones de protección de datos. La Autoridad de Regulación de Correos y Telecomunicaciones (ARPTC) supervisa las telecomunicaciones de seguridad pública. La Agencia Nacional de Seguridad Informática (ANSSI-RDC) establece los estándares de ciberseguridad para los sistemas del gobierno."
              : "DRC enforces Law 20/017 of 25 November 2020 on Telecommunications and ICT, which includes data protection provisions. The Post and Telecommunications Regulatory Authority (ARPTC) oversees public safety telecommunications. The National Information Security Agency (ANSSI-RDC) sets cybersecurity standards for government systems."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "Las adquisiciones públicas se rigen por la Loi 10/010 du 27 avril 2010 relative aux marchés publics y son supervisadas por la Direction Générale du Contrôle des Marchés Publics (DGCMP), utilizando el sistema de la Autorité de Régulation des Marchés Publics (ARMP-DRC). Los proyectos financiados por el Banco Mundial/AfDB/BID siguen sus marcos de adquisiciones respectivos."
              : "Public procurement follows Loi 10/010 du 27 avril 2010 relative aux marchés publics, overseen by Direction Générale du Contrôle des Marchés Publics (DGCMP), using the Autorité de Régulation des Marchés Publics (ARMP-DRC) system. World Bank/AfDB/IDB-funded projects follow their respective procurement frameworks."}
          </p>

          {/* Vision */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Plan National Stratégique de Développement 2019-2023 y Agenda 2063"
              : "Plan National Stratégique de Développement 2019-2023 & Agenda 2063"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "El Plan National Stratégique de Développement (PNSD 2019-2023) de la RDC prioriza la estabilización del este del país, la diversificación económica más allá de los minerales, la digitalización del sector público y la modernización de la seguridad pública. La RDC es miembro de la Comunidad Económica de los Estados de África Central (CEEAC/ECCAS), la SADC, la EAC y la Comunidad Económica de los Grandes Lagos (CEPGL)."
              : "DRC's Plan National Stratégique de Développement (PNSD 2019-2023) prioritises eastern DRC stabilisation, economic diversification beyond minerals, public sector digitalization, and public safety modernisation. DRC is a member of ECCAS (Economic Community of Central African States), SADC, EAC, and the Economic Community of the Great Lakes Countries (CEPGL)."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne se alinea con el PNSD y la Agenda 2063 de la UA como infraestructura digital de seguridad pública de próxima generación, interoperable con los sistemas de gestión de emergencias de la CEEAC/SADC, los protocolos humanitarios de OCHA/MONUSCO y los estándares de protección de infraestructuras críticas del Corredor de Lobito."
              : "KabatOne aligns with PNSD and AU Agenda 2063 as next-generation public safety digital infrastructure, interoperable with ECCAS/SADC emergency management systems, OCHA/MONUSCO humanitarian protocols, and Lobito Corridor critical infrastructure protection standards."}
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
                    ? "¿Qué capacidades ofrece KabatOne a la PNC?"
                    : "What capabilities does KabatOne offer the PNC?",
                  a: es
                    ? "KabatOne proporciona CAD unificado para las 26 provincias, despacho IA que integra CCTV de Kinshasa/Lubumbashi, gestión de incidentes transfronterizos con 9 países vecinos y cumplimiento de la Ley 20/017 de protección de datos."
                    : "KabatOne provides unified CAD for all 26 provinces, AI-dispatch integrating Kinshasa/Lubumbashi CCTV networks, cross-border incident management with 9 neighboring countries, and compliance with Law 20/017 on data protection.",
                },
                {
                  q: es
                    ? "¿Cómo apoya KabatOne la seguridad minera en la RDC?"
                    : "How does KabatOne support mining security in DRC?",
                  a: es
                    ? "La plataforma monitorea las zonas mineras de cobalto/cobre del Katanga (Kamoa-Kakula/Tenke Fungurume/Mutanda), coltán/oro del Kivu y diamantes de Mbuji-Mayi con gestión unificada de activos y alertas geofence."
                    : "The platform monitors Katanga cobalt/copper mining zones (Kamoa-Kakula/Tenke Fungurume/Mutanda), Kivu coltan/gold, and Mbuji-Mayi diamonds with unified asset management and geofence alerts.",
                },
                {
                  q: es
                    ? "¿Puede KabatOne integrarse con la gestión de desastres en la RDC?"
                    : "Can KabatOne integrate with disaster management in DRC?",
                  a: es
                    ? "Sí. KabatOne integra alertas sísmicas del OVG (Nyiragongo/Nyamulagira), monitoreo hidrológico del río Congo, feeds humanitarios OCHA/UNHCR para 6.9M PDI y coordinación de corredores humanitarios MSF/CICR."
                    : "Yes. KabatOne integrates OVG seismic alerts (Nyiragongo/Nyamulagira), Congo river hydrological monitoring, OCHA/UNHCR humanitarian feeds for 6.9M IDPs, and MSF/ICRC humanitarian corridor coordination.",
                },
                {
                  q: es
                    ? "¿Cómo cumple KabatOne con la normativa de la RDC?"
                    : "How does KabatOne comply with DRC regulations?",
                  a: es
                    ? "KabatOne se alinea con la Ley 20/017 de telecomunicaciones/datos, directrices ARPTC, estándares ANSSI-RDC y procedimientos de adquisición ARMP-DRC/DGCMP para contratos de seguridad pública."
                    : "KabatOne aligns with Law 20/017 on telecommunications/data, ARPTC guidelines, ANSSI-RDC standards, and ARMP-DRC/DGCMP procurement procedures for public safety contracts.",
                },
                {
                  q: es
                    ? "¿Qué diferencia a KabatOne en la gestión fronteriza de la RDC?"
                    : "What sets KabatOne apart for DRC's border management?",
                  a: es
                    ? "KabatOne unifica los 9 corredores fronterizos (Rep. Congo/CAR/Sudán del Sur/Uganda/Rwanda/Burundi/Tanzania/Zambia/Angola) con ANPR, listas Interpol/SADC/CEEAC y alertas humanitarias MONUSCO."
                    : "KabatOne unifies all 9 border corridors (Rep. Congo/CAR/South Sudan/Uganda/Rwanda/Burundi/Tanzania/Zambia/Angola) with ANPR, Interpol/SADC/ECCAS watchlists, and MONUSCO humanitarian alerts.",
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
              ? "¿Listo para modernizar la seguridad pública en la RDC?"
              : "Ready to modernize public safety in the DRC?"
          }
          subtitle={
            es
              ? "Hable con nuestros especialistas sobre PNC, FARDC, OCHA/MONUSCO y los programas de ciudad inteligente en Kinshasa y Lubumbashi."
              : "Speak with our specialists about PNC, FARDC, OCHA/MONUSCO, and smart city programs in Kinshasa and Lubumbashi."
          }
        />
      </main>
      <Footer es={es} />
    </>
  );
}
