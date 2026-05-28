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
  return generatePageMetadata("publicSafetySoftwareCameroon", locale);
}

export default async function PublicSafetySoftwareCameroonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const article = articleSchema(
    es
      ? "Software de Seguridad Pública para Camerún | SNP, BIR y Gestión de Crisis – KabatOne"
      : "Public Safety Software for Cameroon | SNP, BIR & Crisis Management – KabatOne",
    es
      ? "KabatOne ofrece plataforma unificada de mando y control, despacho IA y conciencia situacional para la Sûreté Nationale, BIR, protección de infraestructuras críticas y programas de ciudad inteligente en Camerún."
      : "KabatOne delivers unified command-and-control, AI-dispatch, and situational awareness for the Sûreté Nationale, BIR, critical infrastructure protection, and smart city programs in Cameroon.",
    es
      ? "https://kabatone.com/es/resources/public-safety-software-cameroon/"
      : "https://kabatone.com/resources/public-safety-software-cameroon/",
    "2026-05-19"
  );

  const faqs = faqPageSchema([
    {
      question: es
        ? "¿Qué capacidades ofrece KabatOne a la Sûreté Nationale y la Gendarmerie Nationale de Camerún?"
        : "What capabilities does KabatOne offer the Sûreté Nationale and Gendarmerie Nationale of Cameroon?",
      answer: es
        ? "KabatOne proporciona CAD unificado para las 10 regiones/58 departamentos, despacho IA que integra los CCTV de Yaoundé/Douala, gestión de incidentes del Noroeste/Suroeste (crisis anglófona) y cumplimiento de la Loi 2010/012 sobre comunicaciones electrónicas."
        : "KabatOne provides unified CAD for all 10 regions/58 departments, AI-dispatch integrating Yaounde/Douala CCTV networks, Northwest/Southwest incident management (Anglophone crisis), and compliance with Law 2010/012 on electronic communications.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad de infraestructura crítica en Camerún?"
        : "How does KabatOne support critical infrastructure security in Cameroon?",
      answer: es
        ? "La plataforma monitorea SNH/COTCO-TOTCO oleoducto Chad-Camerún, la plataforma offshore de Kribi, Sonara refinery, AES Sonel/ENEO red eléctrica, Lom Pangar Dam 30 MW/Song Loulou, Puerto de Douala (primer puerto de CEMAC) y el Aeropuerto Internacional de Douala (DLA)."
        : "The platform monitors SNH/COTCO-TOTCO Chad-Cameroon pipeline, Kribi offshore platform, Sonara refinery, AES Sonel/ENEO power grid, Lom Pangar Dam/Song Loulou, Port of Douala (CEMAC's busiest port), and Douala International Airport (DLA).",
    },
    {
      question: es
        ? "¿Puede KabatOne integrarse con la gestión de emergencias de Camerún?"
        : "Can KabatOne integrate with Cameroon's emergency management?",
      answer: es
        ? "Sí. KabatOne se integra con el MINATD/OCHA para gestión de inundaciones del Monte Camerún/Yaoundé, alerta temprana del Lago Nyos/Manoun (emisiones volcánicas de CO₂), crisis del Noroeste/Suroeste y monitoreo de las fronteras con Nigeria/Chad/CAR/DRC/Congo."
        : "Yes. KabatOne integrates with MINATD/OCHA for Mount Cameroon/Yaounde flooding management, Lake Nyos/Manoun early warning (volcanic CO₂ emissions), Northwest/Southwest crisis coordination, and Nigeria/Chad/CAR/DRC/Congo border monitoring.",
    },
    {
      question: es
        ? "¿Cómo cumple KabatOne con la normativa de Camerún?"
        : "How does KabatOne comply with Cameroon's regulations?",
      answer: es
        ? "KabatOne se alinea con la Loi 2010/012 sobre comunicaciones electrónicas, las directrices del Agence Nationale des Technologies de l'Information et de la Communication (ANTIC), el Code des Marchés Publics y los estándares del Comité Technique de Sécurité Informatique (CTSI)."
        : "KabatOne aligns with Law 2010/012 on electronic communications, Agence Nationale des Technologies de l'Information et de la Communication (ANTIC) guidelines, the Code des Marchés Publics, and Comité Technique de Sécurité Informatique (CTSI) standards.",
    },
    {
      question: es
        ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Camerún?"
        : "What sets KabatOne apart for Cameroon's border management?",
      answer: es
        ? "KabatOne unifica los 6 corredores fronterizos (Nigeria/Chad/CAR/DRC/Congo Brazzaville/Guinea Ecuatorial) con ANPR, listas de control Interpol/CEMAC/MNJTF y alertas del Lago Chad/Boko Haram, con gestión unificada de incidentes en el BIR/DGRE."
        : "KabatOne unifies 6 border corridors (Nigeria/Chad/CAR/DRC/Congo Brazzaville/Equatorial Guinea) with ANPR, Interpol/CEMAC/MNJTF watchlists, and Lake Chad/Boko Haram alerts, with unified incident management across BIR/DGRE.",
    },
  ]);

  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    {
      name: es ? "Recursos" : "Resources",
      url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/",
    },
    {
      name: es ? "Software de Seguridad Pública Camerún" : "Public Safety Software Cameroon",
      url: es
        ? "https://kabatone.com/es/resources/public-safety-software-cameroon/"
        : "https://kabatone.com/resources/public-safety-software-cameroon/",
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
              {es ? "Guía de Mercado — Camerún" : "Market Guide — Cameroon"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es
                ? "Software de Seguridad Pública para Camerún"
                : "Public Safety Software for Cameroon"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {es
                ? "Plataforma unificada de mando y control, despacho IA y conciencia situacional para la Sûreté Nationale, Gendarmerie Nationale, BIR y programas de ciudad inteligente en Yaoundé y Douala — el corazón de África."
                : "Unified command-and-control, AI-dispatch, and situational awareness for the Sûreté Nationale, Gendarmerie Nationale, BIR, and smart city programs in Yaounde and Douala — the heart of Africa."}
            </p>
          </div>
        </section>

        {/* Law Enforcement */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {es
              ? "Sûreté Nationale y Gendarmerie Nationale — Seguridad en 10 Regiones"
              : "Sûreté Nationale & Gendarmerie Nationale — Security Across 10 Regions"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "La Sûreté Nationale de Camerún (DGSN) y la Gendarmerie Nationale operan en las 10 regiones y 58 departamentos del país, con más de 35,000 efectivos de policía y más de 20,000 gendarmes. Las unidades especializadas incluyen la Brigade Anti-Criminalité (BAC), el Groupe d'Intervention de la Gendarmerie Nationale (GIGN-Camerún), la Garde Présidentielle, y la Délégation Générale à la Sûreté Nationale (DGSN)."
              : "Cameroon's Sûreté Nationale (DGSN) and Gendarmerie Nationale operate across 10 regions and 58 departments with over 35,000 police officers and over 20,000 gendarmes. Specialized units include the Brigade Anti-Criminalité (BAC), Groupe d'Intervention de la Gendarmerie Nationale (GIGN-Cameroon), Presidential Guard, and the Délégation Générale à la Sûreté Nationale (DGSN)."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne proporciona un CAD/gestión de incidentes unificado que integra los centros de operaciones regionales con el Centro de Mando Nacional de Yaoundé y el centro de Douala, distribución de patrullas en tiempo real y tableros de inteligencia delictiva para Yaoundé, Douala, Bafoussam, Garoua y Maroua."
              : "KabatOne provides unified CAD/incident management integrating regional operations centers with the Yaounde National Command Center and Douala center, real-time patrol deployment, and crime intelligence dashboards for Yaounde, Douala, Bafoussam, Garoua, and Maroua."}
          </p>

          {/* BIR */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "BIR — Bataillón de Intervención Rápida y Operaciones en el Norte"
              : "BIR — Rapid Intervention Battalion & Northern Operations"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "El Bataillon d'Intervention Rapide (BIR), fuerza élite de 6,000+ efectivos, lidera las operaciones antiterroristas contra Boko Haram y ISWAP en las regiones del Extremo Norte y Norte, protege las instalaciones petrolíferas y gasísticas de SNH, y apoya las misiones de la CEEAC/MNJTF. El BIR opera en coordinación con la Multinational Joint Task Force (MNJTF, compuesta por Nigeria/Chad/Níger/Camerún/Benín) en la cuenca del Lago Chad."
              : "The Bataillon d'Intervention Rapide (BIR), elite force of 6,000+ troops, leads counter-terrorism operations against Boko Haram and ISWAP in the Far North and North regions, protects SNH oil and gas installations, and supports ECCAS/MNJTF missions. BIR operates in coordination with the Multinational Joint Task Force (MNJTF, comprising Nigeria/Chad/Niger/Cameroon/Benin) in the Lake Chad basin."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne apoya las funciones de C2 del BIR con mapas operativos georreferenciados del teatro norte (Extrême-Nord/Nord/Adamaoua), coordinación con MNJTF/CEEAC, comunicaciones seguras cifradas, y gestión de logística para las unidades desplegadas en zonas remotas de la frontera con Nigeria y Chad."
              : "KabatOne supports BIR C2 functions with georeferenced operational maps of the northern theater (Extrême-Nord/Nord/Adamaoua), coordination with MNJTF/ECCAS, encrypted secure communications, and logistics management for units deployed in remote Nigeria and Chad border zones."}
          </p>

          {/* Anglophone Crisis */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Crisis Anglófona — Regiones Noroeste y Suroeste"
              : "Anglophone Crisis — Northwest & Southwest Regions"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Las regiones del Noroeste y Suroeste (anglófonas) de Camerún experimentan desde 2016 un conflicto interno entre las fuerzas de seguridad del gobierno y los grupos separatistas armados Ambazonia. La crisis ha desplazado a más de 700,000 personas internamente y generado más de 60,000 refugiados en Nigeria. Ciudades como Bamenda, Buea y Kumba requieren gestión de incidentes especializada y coordinación humanitaria."
              : "Cameroon's Northwest and Southwest (Anglophone) regions have experienced since 2016 an internal conflict between government security forces and Ambazonia armed separatist groups. The crisis has displaced over 700,000 people internally and generated over 60,000 refugees in Nigeria. Cities like Bamenda, Buea, and Kumba require specialized incident management and humanitarian coordination."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne integra la gestión de incidentes de las regiones NW/SW con feeds humanitarios OCHA/UNHCR para los 700,000 PDI, coordinación de corredores humanitarios con CICR/MSF, protocolos de evacuación para Bamenda/Buea/Kumba y monitoreo de la frontera Nigeria/Camerún sur."
              : "KabatOne integrates NW/SW region incident management with OCHA/UNHCR humanitarian feeds for 700,000 IDPs, humanitarian corridor coordination with ICRC/MSF, evacuation protocols for Bamenda/Buea/Kumba, and southern Nigeria/Cameroon border monitoring."}
          </p>

          {/* Critical Infrastructure */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Infraestructura Crítica — Petróleo, Gas, Energía y Puerto de Douala"
              : "Critical Infrastructure — Oil, Gas, Energy & Port of Douala"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "La Société Nationale des Hydrocarbures (SNH) gestiona la producción de petróleo y gas de Camerún (~70,000-80,000 bpd), incluyendo el offshore Rio del Rey Basin y la plataforma Kribi Gas Complex. El oleoducto Chad-Camerún (COTCO/TOTCO, 1,070 km desde Doba Chad hasta el terminal Kome-Kribi 1) exporta petróleo de Chad a través de Camerún. La Sonara refinery (Limbé) procesa ~2.1 millones de toneladas/año."
              : "Société Nationale des Hydrocarbures (SNH) manages Cameroon's oil and gas production (~70,000-80,000 bpd), including offshore Rio del Rey Basin and the Kribi Gas Complex platform. The Chad-Cameroon pipeline (COTCO/TOTCO, 1,070 km from Doba Chad to Kome-Kribi 1 terminal) exports Chadian oil through Cameroon. Sonara refinery (Limbe) processes ~2.1 million tonnes/year."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "ENEO (AES Sonel) gestiona la red eléctrica nacional con una capacidad instalada de ~1,700 MW. Las presas clave incluyen Song Loulou (384 MW), Edéa (263 MW) y la nueva Lom Pangar (30 MW reguladora). El Puerto de Douala es el más grande de África Central y sirve a toda la zona CEMAC (Chad, CAR, Gabón, Congo, Guinea Ecuatorial). KabatOne monitorea toda esta infraestructura crítica con gestión unificada de activos."
              : "ENEO (AES Sonel) manages the national power grid with ~1,700 MW installed capacity. Key dams include Song Loulou (384 MW), Edea (263 MW), and the new Lom Pangar (30 MW regulating dam). Port of Douala is Central Africa's largest port and serves the entire CEMAC zone (Chad, CAR, Gabon, Congo, Equatorial Guinea). KabatOne monitors all this critical infrastructure with unified asset management."}
          </p>

          {/* Smart Cities */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Ciudades Inteligentes — Yaoundé, Douala y Kribi"
              : "Smart Cities — Yaounde, Douala & Kribi"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Yaoundé, capital política, y Douala, capital económica con más de 4 millones de habitantes, son los principales centros urbanos de Camerún. El programa Safe City de Douala opera miles de cámaras CCTV integradas con la Sûreté Nationale y la Gendarmerie. El nuevo Puerto Autónomo de Kribi (PAK, capacidad 350,000 TEU/fase 1) es el puerto de aguas profundas más moderno de África Central, con la Zona Económica Especial de Kribi (ZIEK) adyacente."
              : "Yaounde, the political capital, and Douala, the economic capital with over 4 million residents, are Cameroon's main urban centers. Douala's Safe City program operates thousands of CCTV cameras integrated with the Sûreté Nationale and Gendarmerie. The new Autonomous Port of Kribi (PAK, 350,000 TEU capacity/phase 1) is Central Africa's most modern deep-water port, with the adjacent Kribi Special Economic Zone (ZIEK)."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne se integra con el CCTV de las Safe Cities de Yaoundé/Douala para conciencia situacional en tiempo real, correlaciona datos de tráfico inteligente para gestión de emergencias, y apoya los eventos de la Copa Africana de Naciones (AFCON) con coordinación de seguridad de estadios en los 6 estadios construidos para AFCON 2022."
              : "KabatOne integrates with Yaounde/Douala Safe City CCTV for real-time situational awareness, correlates smart traffic data for emergency management, and supports Africa Cup of Nations (AFCON) events with stadium security coordination across the 6 stadiums built for AFCON 2022."}
          </p>

          {/* Border Management */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión Fronteriza — Nigeria, Chad, CAR, DRC, Congo y Guinea Ecuatorial"
              : "Border Management — Nigeria, Chad, CAR, DRC, Congo & Equatorial Guinea"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Camerún comparte fronteras con 6 países: Nigeria al noroeste/oeste (frontera de 1,690 km, incluyendo Ngaoundéré/Garoua/Maroua corredores), Chad al noreste (lago Chad y corredor de Kousseri/N'Djaména), República Centroafricana al este (Bertoua/Ngaoundéré corredor), Congo Brazzaville y Gabón al sur, DRC al sureste, y Guinea Ecuatorial al suroeste."
              : "Cameroon shares borders with 6 countries: Nigeria to the northwest/west (1,690 km border, including Ngaoundere/Garoua/Maroua corridors), Chad to the northeast (Lake Chad and Kousséri/N'Djamena corridor), Central African Republic to the east (Bertoua/Ngaoundere corridor), Congo Brazzaville and Gabon to the south, DRC to the southeast, and Equatorial Guinea to the southwest."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne integra la Délégation Générale à la Sûreté Nationale (DGSN) y la Gendarmerie con feeds ANPR en tiempo real, listas de control compartidas con Interpol/CEEAC/MNJTF, alertas de Boko Haram/ISWAP del norte, y el sistema de monitoreo del oleoducto Chad-Camerún con protocolos de respuesta a derrames."
              : "KabatOne integrates the DGSN and Gendarmerie with real-time ANPR feeds, shared watchlists with Interpol/ECCAS/MNJTF, northern Boko Haram/ISWAP alerts, and the Chad-Cameroon pipeline monitoring system with spill response protocols."}
          </p>

          {/* Compliance */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Cumplimiento Normativo — ANTIC, Code des Marchés y Vision 2035"
              : "Regulatory Compliance — ANTIC, Code des Marchés & Vision 2035"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Camerún aplica la Loi 2010/012 du 21 décembre 2010 sobre las comunicaciones electrónicas y la Loi 2010/013 sobre las comunicaciones electrónicas (protección de datos), supervisadas por el Agence Nationale des Technologies de l'Information et de la Communication (ANTIC) y el Comité Technique de Sécurité Informatique (CTSI)."
              : "Cameroon enforces Law 2010/012 of 21 December 2010 on electronic communications and Law 2010/013 on electronic communications (data protection), overseen by the Agence Nationale des Technologies de l'Information et de la Communication (ANTIC) and Comité Technique de Sécurité Informatique (CTSI)."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "Las adquisiciones públicas se rigen por el Décret n° 2018/366 du 20 juin 2018 portant Code des Marchés Publics y son supervisadas por l'Agence de Régulation des Marchés Publics (ARMP) y la Direction des Marchés Publics (DMP). Camerún es miembro de la CEEAC/CEMAC y se adhiere a los marcos de adquisiciones del Banco Mundial/AfDB para proyectos financiados por donantes."
              : "Public procurement follows Décret n° 2018/366 du 20 juin 2018 portant Code des Marchés Publics, overseen by the Agence de Régulation des Marchés Publics (ARMP) and Direction des Marchés Publics (DMP). Cameroon is a member of ECCAS/CEMAC and adheres to World Bank/AfDB procurement frameworks for donor-funded projects."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "La Vision 2035 de Camerún y la Stratégie Nationale de Développement (SND30 2020-2030) priorizan la modernización de la seguridad pública, la digitalización del sector público y el desarrollo del Puerto de Kribi/ZIEK como motor de crecimiento económico regional. KabatOne se alinea como infraestructura digital de seguridad pública de próxima generación compatible con los estándares CEMAC."
              : "Cameroon's Vision 2035 and National Development Strategy (SND30 2020-2030) prioritise public safety modernisation, public sector digitalisation, and Kribi Port/ZIEK development as regional economic growth engines. KabatOne aligns as next-generation public safety digital infrastructure compatible with CEMAC standards."}
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
                    ? "¿Qué capacidades ofrece KabatOne a la Sûreté Nationale y Gendarmerie de Camerún?"
                    : "What capabilities does KabatOne offer the Sûreté Nationale and Gendarmerie of Cameroon?",
                  a: es
                    ? "KabatOne proporciona CAD unificado para las 10 regiones/58 departamentos, despacho IA con CCTV Yaoundé/Douala, gestión de la crisis anglófona NW/SW y cumplimiento de la Loi 2010/012/ANTIC."
                    : "KabatOne provides unified CAD for 10 regions/58 departments, AI-dispatch with Yaounde/Douala CCTV, NW/SW Anglophone crisis management, and Law 2010/012/ANTIC compliance.",
                },
                {
                  q: es
                    ? "¿Cómo apoya KabatOne la seguridad de infraestructura crítica en Camerún?"
                    : "How does KabatOne support critical infrastructure security in Cameroon?",
                  a: es
                    ? "La plataforma monitorea oleoducto Chad-Camerún/SNH, Sonara refinery, ENEO ~1,700 MW, Puerto de Douala (mayor de África Central), PAK Kribi y DLA/NSI aeropuertos con gestión unificada de activos."
                    : "The platform monitors Chad-Cameroon pipeline/SNH, Sonara refinery, ENEO ~1,700 MW grid, Port of Douala (Central Africa's largest), PAK Kribi, and DLA/NSI airports with unified asset management.",
                },
                {
                  q: es
                    ? "¿Puede KabatOne integrarse con la gestión de emergencias de Camerún?"
                    : "Can KabatOne integrate with Cameroon's emergency management?",
                  a: es
                    ? "Sí. KabatOne integra MINATD/OCHA para inundaciones Monte Camerún/Yaoundé, alertas Lago Nyos/Manoun (emisiones CO₂), crisis NW/SW 700K PDI y MNJTF/Boko Haram."
                    : "Yes. KabatOne integrates MINATD/OCHA for Mount Cameroon/Yaounde flooding, Lake Nyos/Manoun CO₂ alerts, NW/SW crisis 700K IDPs, and MNJTF/Boko Haram coordination.",
                },
                {
                  q: es
                    ? "¿Cómo cumple KabatOne con la normativa de Camerún?"
                    : "How does KabatOne comply with Cameroon's regulations?",
                  a: es
                    ? "KabatOne se alinea con la Loi 2010/012/ANTIC, CTSI ciberseguridad, Code des Marchés Publics 2018/ARMP/DMP y marcos de adquisición Banco Mundial/AfDB para proyectos de seguridad pública."
                    : "KabatOne aligns with Law 2010/012/ANTIC, CTSI cybersecurity, Code des Marchés Publics 2018/ARMP/DMP, and World Bank/AfDB procurement frameworks for public safety projects.",
                },
                {
                  q: es
                    ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Camerún?"
                    : "What sets KabatOne apart for Cameroon's border management?",
                  a: es
                    ? "KabatOne unifica los 6 corredores fronterizos (Nigeria/Chad/CAR/DRC/Congo/Guinea Ecuatorial) con ANPR, listas Interpol/CEEAC/MNJTF y alertas Boko Haram/ISWAP para el BIR y la Gendarmerie."
                    : "KabatOne unifies 6 border corridors (Nigeria/Chad/CAR/DRC/Congo/Equatorial Guinea) with ANPR, Interpol/ECCAS/MNJTF watchlists, and Boko Haram/ISWAP alerts for BIR and Gendarmerie.",
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
              ? "¿Listo para modernizar la seguridad pública en Camerún?"
              : "Ready to modernize public safety in Cameroon?"
          }
          subtitle={
            es
              ? "Hable con nuestros especialistas sobre la Sûreté Nationale, BIR, MNJTF y los programas de ciudad inteligente en Yaoundé y Douala."
              : "Speak with our specialists about the Sûreté Nationale, BIR, MNJTF, and smart city programs in Yaounde and Douala."
          }
        />
      </main>
      <Footer es={es} />
    </>
  );
}
