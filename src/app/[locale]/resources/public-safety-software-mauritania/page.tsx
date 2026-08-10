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
  return generatePageMetadata("publicSafetySoftwareMauritania", locale);
}

export default async function PublicSafetySoftwareMauritaniaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const article = articleSchema(
    es
      ? "Software de Seguridad Pública para Mauritania | PN/GSN, Fronteras Saharianas y Seguridad Marítima – KabatOne"
      : "Public Safety Software for Mauritania | PN/GSN, Saharan Borders & Maritime Security – KabatOne",
    es
      ? "KabatOne ofrece plataforma de seguridad pública para la Policía Nacional de Mauritania, la Gendarmería Nacional (GSN), gestión del Puerto de Nouakchott, fronteras saharianas y coordinación contra el GSIM/Al-Qaeda en el Sahel."
      : "KabatOne delivers public safety platform for the Mauritania National Police, National Gendarmerie (GSN), Port of Nouakchott management, Saharan border control, and coordination against GSIM/Al-Qaeda in the Sahel.",
    es
      ? "https://kabatone.com/es/resources/public-safety-software-mauritania"
      : "https://kabatone.com/resources/public-safety-software-mauritania",
    "2026-05-19"
  );

  const faq = faqPageSchema([
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Mauritania?"
        : "What are the main security forces in Mauritania?",
      answer: es
        ? "La Policía Nacional (Direction Générale de la Sûreté Nationale) opera en los 15 wilayas. La Gendarmería Nacional (GSN) cubre zonas rurales y fronteras. El Ejército Nacional (ANM) con aproximadamente 20,000 efectivos incluye unidades especiales de contraterrorismo (GSIGN). La Guardia Nacional y el servicio de inteligencia DGED completan el sistema."
        : "The National Police (Direction Générale de la Sûreté Nationale) operates across 15 wilayas. The National Gendarmerie (GSN) covers rural areas and borders. The National Army (ANM) with approximately 20,000 personnel includes special counterterrorism units (GSIGN). The National Guard and DGED intelligence service complete the system.",
    },
    {
      question: es
        ? "¿Qué amenazas de seguridad enfrenta Mauritania?"
        : "What security threats does Mauritania face?",
      answer: es
        ? "El GSIM (Grupo de Apoyo al Islam y a los Musulmanes) — rama de Al-Qaeda en el Sahel — opera en la frontera con Mali y Burkina Faso. Mauritania ha mantenido relativa estabilidad debido a la lucha activa contra el terrorismo, pero las rutas de tráfico de personas hacia el norte de África y España (Islas Canarias) representan desafíos continuos. El pastoreo transfronterizo y los conflictos por recursos generan tensiones con Senegal y Mali."
        : "GSIM (Jama'at Nusrat al-Islam wal-Muslimin) — Al-Qaeda's Sahel branch — operates along the Mali and Burkina Faso borders. Mauritania has maintained relative stability through active counterterrorism, but human trafficking routes to North Africa and Spain (Canary Islands) remain ongoing challenges. Cross-border herding and resource conflicts generate tensions with Senegal and Mali.",
    },
    {
      question: es
        ? "¿Qué infraestructura económica tiene Mauritania?"
        : "What economic infrastructure does Mauritania have?",
      answer: es
        ? "El Puerto Autónomo de Nouakchott (PAN) es el principal puerto con acceso al Atlántico. El Puerto de Nouadhibou sirve para la exportación de mineral de hierro (SNIM — Société Nationale Industrielle et Minière, 10+ millones de toneladas/año). El campo de petróleo offshore Chinguetti/Tiof y el proyecto GNL Greater Tortue Ahmeyim (BP/Kosmos Energy) representan inversiones estratégicas. La minería de oro y cobre en Tasiast (Kinross) y Akjoujt (MCM) también es significativa."
        : "Port Autonome de Nouakchott (PAN) is the main Atlantic access port. Port of Nouadhibou serves iron ore export (SNIM — Société Nationale Industrielle et Minière, 10+ million tonnes/year). Offshore oil fields Chinguetti/Tiof and the Greater Tortue Ahmeyim LNG project (BP/Kosmos Energy) represent strategic investments. Gold and copper mining at Tasiast (Kinross) and Akjoujt (MCM) is also significant.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Mauritania?"
        : "What is the legal and procurement framework in Mauritania?",
      answer: es
        ? "El Code des Marchés Publics (Décret 2011-242) y la Autoridad de Regulación de los Contratos Públicos (ARMP) regulan las licitaciones. La Agence de Promotion de l'Accès Universel au Service (APAUS) y la Autorité de Régulation (ARE) supervisan el sector TIC. Mauritania trabaja con el Banco Mundial, el FMI, la UE, USAID y el G5 Sahel para proyectos de seguridad."
        : "The Code des Marchés Publics (Décret 2011-242) and ARMP (Public Procurement Regulatory Authority) govern tendering. APAUS (universal service agency) and ARE (regulatory authority) oversee the ICT sector. Mauritania works with the World Bank, IMF, EU, USAID, and G5 Sahel for security projects.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Mauritania?"
        : "How does KabatOne support public safety in Mauritania?",
      answer: es
        ? "KabatOne integra sistemas de despacho para la Policía Nacional y la Gendarmería en 15 wilayas, gestión de incidentes para los puertos de Nouakchott y Nouadhibou, supervisión de fronteras saharianas con Mali, Senegal, Argelia y el Sahara Occidental, y coordinación con el G5 Sahel."
        : "KabatOne integrates dispatch systems for the National Police and Gendarmerie across 15 wilayas, incident management for Nouakchott and Nouadhibou ports, Saharan border monitoring with Mali, Senegal, Algeria, and Western Sahara, and G5 Sahel coordination.",
    },
  ]);

  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources" : "https://kabatone.com/resources" },
    {
      name: es ? "Software de Seguridad Pública para Mauritania" : "Public Safety Software for Mauritania",
      url: es ? "https://kabatone.com/es/resources/public-safety-software-mauritania" : "https://kabatone.com/resources/public-safety-software-mauritania",
    },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Nav />
      <main className="bg-white text-gray-900">

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] text-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-3">
              {es ? "Mauritania · Sahel y Magreb · Atlántico" : "Mauritania · Sahel & Maghreb · Atlantic"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {es
                ? "Software de Seguridad Pública para Mauritania"
                : "Public Safety Software for Mauritania"}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {es
                ? "Plataforma modular para la Policía Nacional, la Gendarmería (GSN), puertos de Nouakchott/Nouadhibou, fronteras saharianas y coordinación contra el GSIM/Al-Qaeda en el G5 Sahel."
                : "Modular platform for the National Police, Gendarmerie (GSN), Nouakchott/Nouadhibou ports, Saharan border control, and coordination against GSIM/Al-Qaeda within the G5 Sahel."}
            </p>
          </div>
        </section>

        {/* Security Forces */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fuerzas de Seguridad" : "Security Forces"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  {es ? "Seguridad Nacional" : "National Security"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "Policía Nacional (DGSN)" : "National Police (DGSN)"}</strong> — {es ? "15 wilayas; unidades de orden público y judicial" : "15 wilayas; public order and judicial units"}</li>
                  <li><strong>{es ? "Gendarmería Nacional (GSN)" : "National Gendarmerie (GSN)"}</strong> — {es ? "zonas rurales, fronteras y carreteras desérticas" : "rural areas, borders, and desert highways"}</li>
                  <li><strong>{es ? "Ejército Nacional de Mauritania (ANM)" : "Mauritania National Army (ANM)"}</strong> — {es ? "~20,000 efectivos; GSIGN contraterrorismo" : "~20,000 personnel; GSIGN counterterrorism"}</li>
                  <li><strong>{es ? "Guardia Nacional" : "National Guard"}</strong> — {es ? "protección de infraestructuras críticas" : "critical infrastructure protection"}</li>
                  <li><strong>DGED</strong> — {es ? "Dirección General de Estudios y Documentación (inteligencia)" : "Directorate General of Studies and Documentation (intelligence)"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  {es ? "Coordinación Regional" : "Regional Coordination"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "G5 Sahel — Fuerza Conjunta (FC-G5S)" : "G5 Sahel — Joint Force (FC-G5S)"}</strong> — {es ? "operaciones anti-GSIM con Mali/Níger/Burkina/Chad" : "anti-GSIM operations with Mali/Niger/Burkina/Chad"}</li>
                  <li><strong>{es ? "CEMOC (Argelia)" : "CEMOC (Algeria)"}</strong> — {es ? "Centro de Coordinación Operacional del Sahel" : "Sahel Operational Coordination Center"}</li>
                  <li><strong>MINUSMA/AFISMA</strong> — {es ? "coordinación con misiones ONU en Mali" : "coordination with UN missions in Mali"}</li>
                  <li><strong>INTERPOL / AFRIPOL</strong> — {es ? "coordinación regional de crimen organizado" : "regional organized crime coordination"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Infraestructura Económica y Portuaria" : "Economic & Port Infrastructure"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  {es ? "Puerto de Nouakchott (PAN)" : "Port of Nouakchott (PAN)"}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{es ? "Principal puerto Atlántico de Mauritania" : "Main Atlantic port of Mauritania"}</li>
                  <li>{es ? "Expansión China (CHEC/CRBC) 2019–2022" : "Chinese expansion (CHEC/CRBC) 2019–2022"}</li>
                  <li>{es ? "Terminal de contenedores y graneles" : "Container and bulk terminal"}</li>
                  <li>{es ? "Corredor hacia Mali interior" : "Corridor to landlocked Mali"}</li>
                  <li>{es ? "Base de pesca artesanal (200M USD sector pesquero)" : "Artisanal fishing base (200M USD fisheries sector)"}</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  {es ? "Puerto de Nouadhibou" : "Port of Nouadhibou"}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{es ? "Exportación mineral de hierro SNIM — 10M+ toneladas/año" : "SNIM iron ore export — 10M+ tonnes/year"}</li>
                  <li>{es ? "Tren de mineral SNIM (700 km hacia Zouérate)" : "SNIM ore train (700 km to Zouerate)"}</li>
                  <li>{es ? "Zona Franca de Nouadhibou (ZFN)" : "Nouadhibou Free Zone (ZFN)"}</li>
                  <li>{es ? "Base de la Guardia Costera Norte" : "Northern Coast Guard base"}</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  {es ? "Energía y Minería" : "Energy & Mining"}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{es ? "GNL Greater Tortue Ahmeyim (BP/Kosmos/SMHPM)" : "Greater Tortue Ahmeyim LNG (BP/Kosmos/SMHPM)"}</li>
                  <li>{es ? "Petróleo offshore Chinguetti/Tiof/Banda" : "Offshore oil Chinguetti/Tiof/Banda"}</li>
                  <li>{es ? "Mina de oro Tasiast (Kinross) — 8+ Moz reservas" : "Tasiast gold mine (Kinross) — 8+ Moz reserves"}</li>
                  <li>{es ? "Cobre/cobalto Akjoujt (MCM/First Quantum)" : "Akjoujt copper/cobalt (MCM/First Quantum)"}</li>
                  <li>{es ? "Hierro Zouérate (SNIM) — reservas mundiales top 5" : "Zouerate iron (SNIM) — top 5 world reserves"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Borders */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fronteras Saharianas y Seguridad" : "Saharan Borders & Security"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Fronteras Terrestres" : "Land Borders"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>{es ? "Mali — 2,237 km" : "Mali — 2,237 km"}</strong><p className="text-sm text-gray-600">{es ? "Principal amenaza GSIM; Nara/Néma/Timbedra corredores" : "Main GSIM threat; Nara/Nema/Timbedra corridors"}</p></li>
                  <li><strong>{es ? "Senegal — 813 km (Rosso/Diama)" : "Senegal — 813 km (Rosso/Diama)"}</strong><p className="text-sm text-gray-600">{es ? "Río Senegal frontera; puente Rosso; OMVS gestión hídrica" : "Senegal River border; Rosso bridge; OMVS water management"}</p></li>
                  <li><strong>{es ? "Argelia — 463 km (Tin Zaouatine)" : "Algeria — 463 km (Tin Zaouatine)"}</strong><p className="text-sm text-gray-600">{es ? "Frontera desértica; CEMOC coordinación anti-GSIM" : "Desert border; CEMOC anti-GSIM coordination"}</p></li>
                  <li><strong>{es ? "Sahara Occidental — 1,561 km" : "Western Sahara — 1,561 km"}</strong><p className="text-sm text-gray-600">{es ? "Territorio disputado; berm marroquí; minas terrestres" : "Disputed territory; Moroccan berm; land mines"}</p></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Amenazas y Gestión" : "Threats & Management"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>{es ? "GSIM/Al-Qaeda en el Sahel" : "GSIM/Al-Qaeda in the Sahel"}</strong><p className="text-sm text-gray-600">{es ? "Presencia en frontera Mali; 15 ataques 2015–2021; estabilidad relativa post-2021" : "Mali border presence; 15 attacks 2015–2021; relative stability post-2021"}</p></li>
                  <li><strong>{es ? "Tráfico de Personas — Islas Canarias" : "Human Trafficking — Canary Islands"}</strong><p className="text-sm text-gray-600">{es ? "Ruta Atlántica de África Occidental; 40,000+ llegadas 2023; Frontex/UE" : "West Africa Atlantic route; 40,000+ arrivals 2023; Frontex/EU"}</p></li>
                  <li><strong>{es ? "Sequías — Sahel y Sahara" : "Droughts — Sahel and Sahara"}</strong><p className="text-sm text-gray-600">{es ? "Desierto cubre 90% del territorio; CSA/AGRHYMET alertas" : "Desert covers 90% of territory; CSA/AGRHYMET alerts"}</p></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Legal */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Marco Legal, TIC y Adquisiciones" : "Legal, ICT & Procurement Framework"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Legislación Clave" : "Key Legislation"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "Décret 2011-242 — Code des Marchés Publics" : "Décret 2011-242 — Code des Marchés Publics"}</strong> — {es ? "ARMP — Autoridad Reguladora" : "ARMP — Regulatory Authority"}</li>
                  <li><strong>{es ? "Loi 2013-025 — Lucha contra el Terrorismo" : "Loi 2013-025 — Counter-Terrorism Law"}</strong> — {es ? "poderes de arresto y vigilancia" : "arrest and surveillance powers"}</li>
                  <li><strong>ARE</strong> — {es ? "Autoridad Reguladora de los Sectores de Electricidad y Agua" : "Regulatory Authority for Electricity and Water"}</li>
                  <li><strong>APAUS</strong> — {es ? "Agencia para el Acceso Universal a los Servicios" : "Agency for Universal Service Access"}</li>
                  <li><strong>Mauripost / Mauritel</strong> — {es ? "operadores de telecomunicaciones regulados" : "regulated telecommunications operators"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Donantes y Socios" : "Donors & Partners"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "Banco Mundial / IDA" : "World Bank / IDA"}</strong> — {es ? "gobernanza, seguridad marítima" : "governance, maritime security"}</li>
                  <li><strong>{es ? "FMI" : "IMF"}</strong> — {es ? "Artículo IV; programa económico" : "Article IV; economic program"}</li>
                  <li><strong>{es ? "Unión Europea — EUCAP Sahel Mali/Níger" : "European Union — EUCAP Sahel Mali/Niger"}</strong> — {es ? "capacitación de fuerzas de seguridad" : "security forces capacity building"}</li>
                  <li><strong>USAID / AFRICOM</strong> — {es ? "programas de contraterrorismo" : "counterterrorism programs"}</li>
                  <li><strong>{es ? "G5 Sahel / UA / CEDEAO" : "G5 Sahel / AU / ECOWAS"}</strong> — {es ? "coordinación regional de seguridad" : "regional security coordination"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne */}
        <section className="py-16 px-6 bg-blue-900 text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Plataforma KabatOne para Mauritania" : "KabatOne Platform for Mauritania"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {es ? "Despacho 15 Wilayas" : "15-Wilaya Dispatch"}
                </h3>
                <p className="text-blue-100 text-sm">
                  {es
                    ? "Centro de despacho unificado para DGSN y GSN en los 15 wilayas, con comunicaciones encriptadas en zonas desérticas y cobertura de la red de puestos de Gendarmería en carreteras saharianas."
                    : "Unified dispatch center for DGSN and GSN across 15 wilayas, with encrypted communications in desert zones and coverage of Gendarmerie posts on Saharan highways."}
                </p>
              </div>
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {es ? "Puertos y Energía" : "Ports & Energy"}
                </h3>
                <p className="text-blue-100 text-sm">
                  {es
                    ? "Gestión de incidentes para PAN (Nouakchott) y Nouadhibou, supervisión del ferrocarril SNIM Zouérate–Nouadhibou, y seguridad de las plataformas GNL Greater Tortue Ahmeyim."
                    : "Incident management for PAN (Nouakchott) and Nouadhibou, SNIM Zouerate–Nouadhibou railway monitoring, and security for Greater Tortue Ahmeyim LNG platforms."}
                </p>
              </div>
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {es ? "Fronteras y G5 Sahel" : "Borders & G5 Sahel"}
                </h3>
                <p className="text-blue-100 text-sm">
                  {es
                    ? "Monitoreo de fronteras con Mali (GSIM), Senegal (Rosso/Diama), Argelia y el Sahara Occidental. Interoperabilidad con la Fuerza Conjunta del G5 Sahel (FC-G5S) y CEMOC Argelia."
                    : "Border monitoring with Mali (GSIM), Senegal (Rosso/Diama), Algeria, and Western Sahara. Interoperability with G5 Sahel Joint Force (FC-G5S) and CEMOC Algeria."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">
              {es ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: es ? "¿Cuáles son las principales fuerzas de seguridad en Mauritania?" : "What are the main security forces in Mauritania?",
                  a: es
                    ? "La Policía Nacional (DGSN) en 15 wilayas, la Gendarmería Nacional (GSN) en zonas rurales y fronteras, el Ejército Nacional (ANM ~20,000) con GSIGN contraterrorismo, la Guardia Nacional y el servicio de inteligencia DGED."
                    : "The National Police (DGSN) across 15 wilayas, National Gendarmerie (GSN) in rural areas and borders, National Army (ANM ~20,000) with GSIGN counterterrorism, National Guard, and DGED intelligence service.",
                },
                {
                  q: es ? "¿Qué amenazas de seguridad enfrenta Mauritania?" : "What security threats does Mauritania face?",
                  a: es
                    ? "El GSIM/Al-Qaeda en el Sahel opera en la frontera con Mali. La ruta Atlántica de tráfico de personas hacia las Islas Canarias (40,000+ llegadas 2023). Sequías en el Sahel y el Sahara que afectan al 90% del territorio desértico."
                    : "GSIM/Al-Qaeda in the Sahel operates along the Mali border. The Atlantic human trafficking route to the Canary Islands (40,000+ arrivals 2023). Sahel and Sahara droughts affecting the 90% desert territory.",
                },
                {
                  q: es ? "¿Qué infraestructura económica tiene Mauritania?" : "What economic infrastructure does Mauritania have?",
                  a: es
                    ? "Puerto PAN (Nouakchott), Puerto de Nouadhibou/SNIM mineral hierro 10M+ toneladas/año, GNL Greater Tortue Ahmeyim (BP/Kosmos), petróleo offshore Chinguetti/Tiof, oro Tasiast (Kinross) y hierro Zouérate (SNIM top 5 mundial)."
                    : "Port PAN (Nouakchott), Nouadhibou Port/SNIM iron ore 10M+ tonnes/year, Greater Tortue Ahmeyim LNG (BP/Kosmos), offshore oil Chinguetti/Tiof, Tasiast gold (Kinross), and Zouerate iron (SNIM top 5 global).",
                },
                {
                  q: es ? "¿Cuál es el marco de adquisiciones en Mauritania?" : "What is the procurement framework in Mauritania?",
                  a: es
                    ? "El Code des Marchés Publics (Décret 2011-242) y la ARMP regulan licitaciones. Mauritania trabaja con el Banco Mundial, FMI, UE (EUCAP Sahel), USAID/AFRICOM y el G5 Sahel para proyectos de seguridad."
                    : "The Code des Marchés Publics (Décret 2011-242) and ARMP regulate procurement. Mauritania works with World Bank, IMF, EU (EUCAP Sahel), USAID/AFRICOM, and G5 Sahel for security projects.",
                },
                {
                  q: es ? "¿Cómo apoya KabatOne la seguridad en Mauritania?" : "How does KabatOne support security in Mauritania?",
                  a: es
                    ? "KabatOne integra despacho DGSN/GSN en 15 wilayas, gestión de incidentes portuarios en Nouakchott/Nouadhibou, supervisión fronteriza con Mali/Senegal/Argelia/Sahara Occidental e interoperabilidad con la Fuerza Conjunta del G5 Sahel."
                    : "KabatOne integrates DGSN/GSN dispatch across 15 wilayas, port incident management in Nouakchott/Nouadhibou, border monitoring with Mali/Senegal/Algeria/Western Sahara, and G5 Sahel Joint Force interoperability.",
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{q}</h3>
                  <p className="text-gray-700">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          es={es}
          h2={es ? "¿Listo para modernizar la seguridad pública en Mauritania?" : "Ready to modernize public safety in Mauritania?"}
          subtitle={es
            ? "Contáctenos para descubrir cómo KabatOne apoya a la DGSN, GSN, operaciones portuarias en Nouakchott/Nouadhibou y coordinación fronteriza en el G5 Sahel."
            : "Contact us to discover how KabatOne supports DGSN, GSN, port operations in Nouakchott/Nouadhibou, and border coordination within the G5 Sahel."}
        />
        <Footer es={es} />
      </main>
    </>
  );
}
