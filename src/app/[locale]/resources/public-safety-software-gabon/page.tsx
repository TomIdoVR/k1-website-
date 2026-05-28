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
  return generatePageMetadata("publicSafetySoftwareGabon", locale);
}

export default async function PublicSafetySoftwareGabonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const article = articleSchema(
    es
      ? "Software de Seguridad Pública para Gabón | FDG/PNR, Puerto de Owendo y Seguridad de Recursos – KabatOne"
      : "Public Safety Software for Gabon | FDG/PNR, Port of Owendo & Resource Security – KabatOne",
    es
      ? "KabatOne ofrece plataforma de seguridad pública para las Fuerzas de Defensa de Gabón (FDG), la Policía Nacional Republicana (PNR), gestión del Puerto de Owendo y seguridad de los recursos de petróleo y manganeso en Gabón."
      : "KabatOne delivers public safety platform for the Gabonese Defence Forces (FDG), National Republican Police (PNR), Port of Owendo management, and security for oil and manganese resources in Gabon.",
    es
      ? "https://kabatone.com/es/resources/public-safety-software-gabon/"
      : "https://kabatone.com/resources/public-safety-software-gabon/",
    "2026-05-19"
  );

  const faq = faqPageSchema([
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Gabón?"
        : "What are the main security forces in Gabon?",
      answer: es
        ? "Las Fuerzas de Defensa de Gabón (FDG) incluyen el ejército, la marina y la fuerza aérea con aproximadamente 10,000 efectivos. Tras el golpe de agosto de 2023, el CTRI (Comité de Transición y Restauración de las Instituciones) bajo el General Brice Oligui Nguema lidera el país. La Policía Nacional Republicana (PNR) opera en las 9 provincias. La Guardia Republicana protege las instalaciones presidenciales."
        : "The Gabonese Defence Forces (FDG) include army, navy, and air force with approximately 10,000 personnel. Following the August 2023 coup, the CTRI (Committee for the Transition and Restoration of Institutions) under General Brice Oligui Nguema leads the country. The National Republican Police (PNR) operates across 9 provinces. The Republican Guard protects presidential facilities.",
    },
    {
      question: es
        ? "¿Qué recursos económicos estratégicos tiene Gabón?"
        : "What strategic economic resources does Gabon have?",
      answer: es
        ? "El petróleo representa aproximadamente el 40% del PIB; Gabon Oil Company (GOC/GabonOil) gestiona los intereses estatales, mientras que TotalEnergies, Shell y Assala Energy operan los campos offshore. Gabón es el 4.° productor mundial de manganeso (80%+ a través de Comilog/Eramet en Moanda). Los bosques tropicales cubren el 80% del territorio (certificación FSC) y el turismo en el Parque Nacional de Lopé (Patrimonio UNESCO) es creciente."
        : "Oil represents approximately 40% of GDP; Gabon Oil Company (GOC/GabonOil) manages state interests, while TotalEnergies, Shell, and Assala Energy operate offshore fields. Gabon is the world's 4th manganese producer (80%+ through Comilog/Eramet at Moanda). Tropical forests cover 80% of territory (FSC certification) and tourism at Lopé National Park (UNESCO Heritage) is growing.",
    },
    {
      question: es
        ? "¿Qué cambios políticos y de seguridad ocurrieron en 2023?"
        : "What political and security changes occurred in 2023?",
      answer: es
        ? "El 30 de agosto de 2023, las Fuerzas Armadas depusieron al presidente Ali Bongo Ondimba (familia Bongo en el poder desde 1967) en un golpe de estado. El CTRI bajo el General Brice Oligui Nguema tomó el control y suspendió la Constitución. El período de transición incluye revisión constitucional y restauración gradual de instituciones. Francia tiene una base militar histórica en Libreville (Éléments Français au Gabon — EFG ~350)."
        : "On August 30, 2023, the Armed Forces deposed President Ali Bongo Ondimba (Bongo family in power since 1967) in a coup. The CTRI under General Brice Oligui Nguema took control and suspended the Constitution. The transition period includes constitutional review and gradual institutional restoration. France maintains a historical military base in Libreville (Éléments Français au Gabon — EFG ~350).",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Gabón?"
        : "What is the legal and procurement framework in Gabon?",
      answer: es
        ? "El Code des Marchés Publics (Décret 001/PR/2012) y la Direction Générale du Budget (DGB) regulan las adquisiciones. La ARCEP (Autoridad Reguladora de Comunicaciones Electrónicas y Postales) supervisa el sector TIC. La Loi 001/2011 protección de datos personales está vigente. Francia (AFD/Cooperation) y China (EXIM Bank) son principales financiadores de infraestructura."
        : "The Code des Marchés Publics (Decree 001/PR/2012) and Direction Générale du Budget (DGB) govern procurement. ARCEP (Electronic Communications and Postal Regulatory Authority) oversees the ICT sector. Law 001/2011 on personal data protection is in force. France (AFD/Cooperation) and China (EXIM Bank) are primary infrastructure financiers.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Gabón?"
        : "How does KabatOne support public safety in Gabon?",
      answer: es
        ? "KabatOne integra sistemas de despacho para la PNR en 9 provincias, gestión de incidentes para el Puerto de Owendo y Port-Gentil, seguridad de plataformas petrolíferas offshore, coordinación del período de transición CTRI y supervisión de fronteras con Camerún, Guinea Ecuatorial, República del Congo y São Tomé."
        : "KabatOne integrates dispatch systems for PNR across 9 provinces, incident management for Port of Owendo and Port-Gentil, offshore oil platform security, CTRI transition period coordination, and border monitoring with Cameroon, Equatorial Guinea, Republic of Congo, and São Tomé.",
    },
  ]);

  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/" },
    {
      name: es ? "Software de Seguridad Pública para Gabón" : "Public Safety Software for Gabon",
      url: es ? "https://kabatone.com/es/resources/public-safety-software-gabon/" : "https://kabatone.com/resources/public-safety-software-gabon/",
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
              {es ? "Gabón · África Central · Petróleo y Manganeso" : "Gabon · Central Africa · Oil & Manganese"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {es
                ? "Software de Seguridad Pública para Gabón"
                : "Public Safety Software for Gabon"}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {es
                ? "Plataforma modular para las FDG y la Policía Nacional Republicana en 9 provincias, gestión portuaria en Owendo/Port-Gentil, seguridad de petróleo offshore y coordinación durante la transición política post-2023."
                : "Modular platform for FDG and National Republican Police across 9 provinces, port management at Owendo/Port-Gentil, offshore oil security, and coordination during the post-2023 political transition."}
            </p>
          </div>
        </section>

        {/* Security Forces */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fuerzas de Seguridad y Contexto Político" : "Security Forces & Political Context"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  {es ? "Fuerzas Nacionales" : "National Forces"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "FDG (Fuerzas de Defensa de Gabón)" : "FDG (Gabonese Defence Forces)"}</strong> — {es ? "~10,000; ejército, marina, fuerza aérea" : "~10,000; army, navy, air force"}</li>
                  <li><strong>{es ? "PNR (Policía Nacional Republicana)" : "PNR (National Republican Police)"}</strong> — {es ? "9 provincias; orden público y judicial" : "9 provinces; public order and judicial"}</li>
                  <li><strong>{es ? "Gendarmería Nacional" : "National Gendarmerie"}</strong> — {es ? "zonas rurales y pasos fronterizos" : "rural areas and border crossings"}</li>
                  <li><strong>{es ? "CTRI (post-golpe ago. 2023)" : "CTRI (post-coup Aug. 2023)"}</strong> — {es ? "Gen. Brice Oligui Nguema; transición institucional" : "Gen. Brice Oligui Nguema; institutional transition"}</li>
                  <li><strong>{es ? "Guardia Republicana" : "Republican Guard"}</strong> — {es ? "protección presidencial y de instalaciones estratégicas" : "presidential and strategic facility protection"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  {es ? "Presencia Internacional" : "International Presence"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "EFG — Éléments Français au Gabon" : "EFG — Éléments Français au Gabon"}</strong> — {es ? "~350 efectivos; base Libreville desde 1960" : "~350 personnel; Libreville base since 1960"}</li>
                  <li><strong>{es ? "CEEAC/UA — MICOPAX/CEMAC" : "ECCAS/AU — MICOPAX/CEMAC"}</strong> — {es ? "coordinación regional; Libreville HQ CEEAC" : "regional coordination; ECCAS HQ in Libreville"}</li>
                  <li><strong>{es ? "Cooperación China (EXIM/CRBC)" : "China Cooperation (EXIM/CRBC)"}</strong> — {es ? "infraestructura vial y portuaria" : "road and port infrastructure"}</li>
                  <li><strong>INTERPOL / AFRIPOL</strong> — {es ? "coordinación crimen organizado" : "organized crime coordination"}</li>
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
                  {es ? "Petróleo y Gas" : "Oil & Gas"}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{es ? "~200,000-220,000 bbl/día producción" : "~200,000-220,000 bbl/day production"}</li>
                  <li>{es ? "TotalEnergies — Anguille/Torpille/Rabi" : "TotalEnergies — Anguille/Torpille/Rabi"}</li>
                  <li>{es ? "Assala Energy — Rabi/Gamba/Toucan" : "Assala Energy — Rabi/Gamba/Toucan"}</li>
                  <li>{es ? "Shell Gabon — campos históricos" : "Shell Gabon — historical fields"}</li>
                  <li>{es ? "GOC/GabonOil — compañía nacional" : "GOC/GabonOil — national company"}</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  {es ? "Puertos y Minería" : "Ports & Mining"}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{es ? "Puerto de Owendo (Libreville) — principal" : "Port of Owendo (Libreville) — main port"}</li>
                  <li>{es ? "Puerto de Port-Gentil — hub petrolero" : "Port of Port-Gentil — oil hub"}</li>
                  <li>{es ? "Comilog/Eramet Moanda — manganeso mundial 4.°" : "Comilog/Eramet Moanda — manganese world 4th"}</li>
                  <li>{es ? "Setrag — ferrocarril trans-gabonés 649 km" : "Setrag — Trans-Gabon Railway 649 km"}</li>
                  <li>{es ? "Aéroport Libreville (LBV) — hub regional" : "Libreville Airport (LBV) — regional hub"}</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  {es ? "Energía y Medioambiente" : "Energy & Environment"}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{es ? "SEEG — Société d'Énergie et d'Eau du Gabon" : "SEEG — Société d'Énergie et d'Eau du Gabon"}</li>
                  <li>{es ? "Barrage de Kinguélé (~50 MW); Tchimbélé" : "Kinguélé Dam (~50 MW); Tchimbélé"}</li>
                  <li>{es ? "13 Parques Nacionales — 11% territorio" : "13 National Parks — 11% of territory"}</li>
                  <li>{es ? "Parque Nacional Lopé — UNESCO Patrimonio" : "Lopé National Park — UNESCO Heritage"}</li>
                  <li>{es ? "CEEAC HQ — Libreville" : "ECCAS HQ — Libreville"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Borders */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fronteras y Contexto Regional" : "Borders & Regional Context"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Fronteras Terrestres y Marítimas" : "Land & Maritime Borders"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>{es ? "Camerún — 349 km (norte)" : "Cameroon — 349 km (north)"}</strong><p className="text-sm text-gray-600">{es ? "Frontera forestal; paso Eboro/Kye-Ossi" : "Forest border; Eboro/Kye-Ossi crossing"}</p></li>
                  <li><strong>{es ? "Guinea Ecuatorial — 350 km (noroeste)" : "Equatorial Guinea — 350 km (northwest)"}</strong><p className="text-sm text-gray-600">{es ? "Disputa del archipiélago Mbanié/Conga; petróleo offshore" : "Mbanié/Conga islands dispute; offshore oil"}</p></li>
                  <li><strong>{es ? "República del Congo — 2,567 km (este/sur)" : "Republic of Congo — 2,567 km (east/south)"}</strong><p className="text-sm text-gray-600">{es ? "Frontera más extensa; forestal y minera" : "Longest border; forest and mining zones"}</p></li>
                  <li><strong>{es ? "Costa Atlántica — 885 km" : "Atlantic Coast — 885 km"}</strong><p className="text-sm text-gray-600">{es ? "ZEE petrolífera; pesca artesanal; zona offshore" : "Oil EEZ; artisanal fishing; offshore zone"}</p></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Contexto de Seguridad" : "Security Context"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>{es ? "Golpe CTRI agosto 2023" : "CTRI Coup August 2023"}</strong><p className="text-sm text-gray-600">{es ? "Transición ordenada; estabilidad institucional relativa; ningún conflicto activo" : "Orderly transition; relative institutional stability; no active conflict"}</p></li>
                  <li><strong>{es ? "Disputa Mbanié con Guinea Ecuatorial" : "Mbanié Dispute with Equatorial Guinea"}</strong><p className="text-sm text-gray-600">{es ? "Archipiélago rico en petróleo; CIJ mediación 2021" : "Oil-rich archipelago; ICJ mediation 2021"}</p></li>
                  <li><strong>{es ? "Amenaza transnacional desde RCA" : "Transnational Threat from CAR"}</strong><p className="text-sm text-gray-600">{es ? "Grupos armados indirectos; tráfico fauna" : "Indirect armed groups; wildlife trafficking"}</p></li>
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
                  <li><strong>{es ? "Code des Marchés Publics (Décret 001/PR/2012)" : "Code des Marchés Publics (Decree 001/PR/2012)"}</strong> — DGB</li>
                  <li><strong>{es ? "Loi 001/2011 — Protección de Datos Personales" : "Law 001/2011 — Personal Data Protection"}</strong></li>
                  <li><strong>ARCEP</strong> — {es ? "Autoridad Reguladora de Comunicaciones Electrónicas" : "Electronic Communications Regulatory Authority"}</li>
                  <li><strong>{es ? "Code Pétrolier (Loi 14/82)" : "Petroleum Code (Law 14/82)"}</strong> — {es ? "concesiones y participación estatal GOC" : "concessions and GOC state participation"}</li>
                  <li><strong>CEMAC / BEAC</strong> — {es ? "zona franc CFA; BVMAC mercados de capital" : "CFA franc zone; BVMAC capital markets"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Donantes y Socios" : "Donors & Partners"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "Francia (AFD / Cooperation militaire)" : "France (AFD / Military Cooperation)"}</strong> — {es ? "infraestructura y seguridad histórica" : "infrastructure and historical security"}</li>
                  <li><strong>{es ? "China (EXIM Bank / CRBC / CGC)" : "China (EXIM Bank / CRBC / CGC)"}</strong> — {es ? "Trans-Gabon Railway, carreteras, puertos" : "Trans-Gabon Railway, roads, ports"}</li>
                  <li><strong>{es ? "Banco Mundial / IDA" : "World Bank / IDA"}</strong> — {es ? "diversificación económica post-petróleo" : "post-oil economic diversification"}</li>
                  <li><strong>{es ? "FMI / BAfD" : "IMF / AfDB"}</strong> — {es ? "programas de gobernanza y reforma fiscal" : "governance and fiscal reform programs"}</li>
                  <li><strong>CEEAC</strong> — {es ? "sede en Libreville; coordinación regional" : "HQ in Libreville; regional coordination"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne */}
        <section className="py-16 px-6 bg-blue-900 text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Plataforma KabatOne para Gabón" : "KabatOne Platform for Gabon"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {es ? "Despacho PNR — 9 Provincias" : "PNR Dispatch — 9 Provinces"}
                </h3>
                <p className="text-blue-100 text-sm">
                  {es
                    ? "Centro de despacho unificado para PNR y Gendarmería en las 9 provincias, con módulos especializados para la coordinación CTRI durante el período de transición institucional post-2023."
                    : "Unified dispatch center for PNR and Gendarmerie across 9 provinces, with specialized modules for CTRI coordination during the post-2023 institutional transition period."}
                </p>
              </div>
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {es ? "Puertos y Offshore" : "Ports & Offshore"}
                </h3>
                <p className="text-blue-100 text-sm">
                  {es
                    ? "Gestión de incidentes para el Puerto de Owendo (Libreville) y Port-Gentil, seguridad de plataformas TotalEnergies/Assala/Shell offshore y coordinación marítima en la ZEE de 885 km."
                    : "Incident management for Port of Owendo (Libreville) and Port-Gentil, TotalEnergies/Assala/Shell offshore platform security, and maritime coordination across the 885 km EEZ."}
                </p>
              </div>
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {es ? "Fronteras y Recursos" : "Borders & Resources"}
                </h3>
                <p className="text-blue-100 text-sm">
                  {es
                    ? "Supervisión de fronteras con Camerún, Guinea Ecuatorial (disputa Mbanié/Conga) y República del Congo. Monitoreo del ferrocarril Trans-Gabón (Setrag) y seguridad de la mina de manganeso Comilog/Eramet en Moanda."
                    : "Border monitoring with Cameroon, Equatorial Guinea (Mbanié/Conga dispute), and Republic of Congo. Trans-Gabon Railway (Setrag) monitoring and Comilog/Eramet manganese mine security at Moanda."}
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
                  q: es ? "¿Cuáles son las principales fuerzas de seguridad en Gabón?" : "What are the main security forces in Gabon?",
                  a: es
                    ? "FDG (~10,000 efectivos: ejército/marina/fuerza aérea), PNR en 9 provincias, Gendarmería Nacional y Guardia Republicana. Tras el golpe de agosto 2023, el CTRI bajo el Gen. Oligui Nguema lidera la transición. Los EFG (~350 militares franceses) permanecen en Libreville."
                    : "FDG (~10,000 personnel: army/navy/air force), PNR across 9 provinces, National Gendarmerie, and Republican Guard. Following the August 2023 coup, CTRI under Gen. Oligui Nguema leads the transition. EFG (~350 French military) remain in Libreville.",
                },
                {
                  q: es ? "¿Qué recursos económicos estratégicos tiene Gabón?" : "What strategic economic resources does Gabon have?",
                  a: es
                    ? "Petróleo offshore ~200-220K bbl/día (TotalEnergies/Assala/Shell/GOC), manganeso Moanda (Comilog/Eramet — mundial 4.°), bosques tropicales FSC (80% territorio) y turismo ecológico en 13 Parques Nacionales (Lopé UNESCO)."
                    : "Offshore oil ~200-220K bbl/day (TotalEnergies/Assala/Shell/GOC), Moanda manganese (Comilog/Eramet — world 4th), FSC tropical forests (80% territory), and ecotourism in 13 National Parks (Lopé UNESCO).",
                },
                {
                  q: es ? "¿Qué cambios políticos ocurrieron en Gabón en 2023?" : "What political changes occurred in Gabon in 2023?",
                  a: es
                    ? "El 30 de agosto de 2023, las Fuerzas Armadas (CTRI) depusieron al presidente Ali Bongo (familia Bongo en el poder desde 1967). El Gen. Brice Oligui Nguema lidera la transición con suspensión constitucional y proceso de reforma institucional en curso."
                    : "On August 30, 2023, the Armed Forces (CTRI) deposed President Ali Bongo (Bongo family in power since 1967). Gen. Brice Oligui Nguema leads the transition with constitutional suspension and ongoing institutional reform process.",
                },
                {
                  q: es ? "¿Cuál es el marco de adquisiciones en Gabón?" : "What is the procurement framework in Gabon?",
                  a: es
                    ? "Code des Marchés Publics (Décret 001/PR/2012) y DGB regulan licitaciones. Francia (AFD), China (EXIM/CRBC) y el Banco Mundial/BAfD son principales financiadores. ARCEP supervisa el sector TIC."
                    : "Code des Marchés Publics (Decree 001/PR/2012) and DGB govern procurement. France (AFD), China (EXIM/CRBC), and World Bank/AfDB are main financiers. ARCEP oversees the ICT sector.",
                },
                {
                  q: es ? "¿Cómo apoya KabatOne la seguridad en Gabón?" : "How does KabatOne support security in Gabon?",
                  a: es
                    ? "KabatOne integra despacho PNR/Gendarmería en 9 provincias, gestión portuaria Owendo/Port-Gentil, seguridad offshore TotalEnergies/Assala, coordinación CTRI y monitoreo fronterizo con Camerún/Guinea Ecuatorial/República del Congo."
                    : "KabatOne integrates PNR/Gendarmerie dispatch across 9 provinces, Owendo/Port-Gentil port management, TotalEnergies/Assala offshore security, CTRI coordination, and border monitoring with Cameroon/Equatorial Guinea/Republic of Congo.",
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
          h2={es ? "¿Listo para modernizar la seguridad pública en Gabón?" : "Ready to modernize public safety in Gabon?"}
          subtitle={es
            ? "Contáctenos para descubrir cómo KabatOne apoya a las FDG, la PNR, las operaciones portuarias en Owendo/Port-Gentil y la seguridad de las plataformas petrolíferas offshore de Gabón."
            : "Contact us to discover how KabatOne supports FDG, PNR, port operations in Owendo/Port-Gentil, and Gabon's offshore oil platform security."}
        />
        <Footer es={es} />
      </main>
    </>
  );
}
