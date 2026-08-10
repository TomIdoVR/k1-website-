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
  return generatePageMetadata("publicSafetySoftwareRepublicOfCongo", locale);
}

export default async function PublicSafetySoftwareRepublicOfCongoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const article = articleSchema(
    es
      ? "Software de Seguridad Pública para República del Congo | FAC/PNR, Puerto de Pointe-Noire y Seguridad Petrolera – KabatOne"
      : "Public Safety Software for Republic of Congo | FAC/PNR, Port of Pointe-Noire & Oil Security – KabatOne",
    es
      ? "KabatOne ofrece plataforma de seguridad pública para las Fuerzas Armadas Congolesas (FAC), la Policía Nacional Republicana (PNR), gestión del Puerto de Pointe-Noire y seguridad de la infraestructura petrolera del Congo."
      : "KabatOne delivers public safety platform for the Congolese Armed Forces (FAC), National Republican Police (PNR), Port of Pointe-Noire management, and oil infrastructure security in the Republic of Congo.",
    es
      ? "https://kabatone.com/es/resources/public-safety-software-republic-of-congo"
      : "https://kabatone.com/resources/public-safety-software-republic-of-congo",
    "2026-05-19"
  );

  const faq = faqPageSchema([
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en la República del Congo?"
        : "What are the main security forces in the Republic of Congo?",
      answer: es
        ? "Las Fuerzas Armadas Congolesas (FAC) con aproximadamente 10,000 efectivos incluyen el ejército, la marina y la fuerza aérea. La Policía Nacional Republicana (PNR) opera en los 12 departamentos. La Gendarmería Nacional cubre zonas rurales. El Departamento de Vigilancia del Territorio (DVT) se encarga de la inteligencia interna. La Guardia Presidencial y la Guardia Republicana protegen las instalaciones estatales."
        : "The Congolese Armed Forces (FAC) with approximately 10,000 personnel include army, navy, and air force. The National Republican Police (PNR) operates across 12 departments. The National Gendarmerie covers rural areas. The Territorial Surveillance Department (DVT) handles internal intelligence. The Presidential Guard and Republican Guard protect state facilities.",
    },
    {
      question: es
        ? "¿Qué infraestructura económica tiene la República del Congo?"
        : "What economic infrastructure does the Republic of Congo have?",
      answer: es
        ? "El Congo es un productor de petróleo significativo con campos offshore (TotalEnergies/ENI/Perenco) produciendo aproximadamente 300,000 barriles/día. El Puerto de Pointe-Noire es el segundo puerto más grande de África central con más de 5 millones de toneladas anuales. La SNPC (Société Nationale des Pétroles du Congo) gestiona los intereses petrolíferos estatales. La explotación maderera y potasa (ICB/K-UTEC en Holle) son sectores adicionales."
        : "Congo is a significant oil producer with offshore fields (TotalEnergies/ENI/Perenco) producing approximately 300,000 barrels/day. Port of Pointe-Noire is Central Africa's second largest port with over 5 million tonnes annually. SNPC (Société Nationale des Pétroles du Congo) manages state oil interests. Timber exploitation and potash (ICB/K-UTEC at Holle) are additional sectors.",
    },
    {
      question: es
        ? "¿Qué riesgos de seguridad enfrenta la República del Congo?"
        : "What security risks does the Republic of Congo face?",
      answer: es
        ? "La región del Pool (sur de Brazzaville) experimentó una insurgencia del grupo Ninjas/Nsilulu (2016–2017) con un acuerdo de paz en 2019. Los conflictos inter-comunitarios en el norte (tribu vs. tribu) son recurrentes. El cruce del río Congo con la RDC genera riesgos de contrabando y tráfico. Los posibles conflictos ambientales por explotación forestal en el norte son latentes."
        : "The Pool region (south of Brazzaville) experienced a Ninjas/Nsilulu group insurgency (2016–2017) with a 2019 peace agreement. Inter-communal conflicts in the north are recurrent. The Congo River crossing with DRC generates smuggling and trafficking risks. Potential environmental conflicts from northern forestry exploitation are latent.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en la República del Congo?"
        : "What is the legal and procurement framework in the Republic of Congo?",
      answer: es
        ? "El Code des Marchés Publics (Loi 11-2009) y la Autorité de Régulation des Marchés Publics (ARMP) regulan las licitaciones. La ARPCE (Autoridad Reguladora de las Comunicaciones Electrónicas) supervisa las telecomunicaciones. La Loi 9-2009 sobre protección de datos personales es el marco de privacidad. Los proyectos principales son financiados por el Banco Mundial, la AFD (Agence Française de Développement) y China (EXIM Bank/CRBC)."
        : "The Code des Marchés Publics (Law 11-2009) and ARMP (Public Procurement Regulatory Authority) govern tendering. ARPCE (Electronic Communications Regulatory Authority) oversees telecom. Law 9-2009 on personal data protection is the privacy framework. Major projects are financed by the World Bank, AFD (French Development Agency), and China (EXIM Bank/CRBC).",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en la República del Congo?"
        : "How does KabatOne support public safety in the Republic of Congo?",
      answer: es
        ? "KabatOne integra despacho para la PNR y la Gendarmería en 12 departamentos, gestión de incidentes para el Puerto de Pointe-Noire, seguridad de las plataformas petrolíferas offshore (TotalEnergies/ENI), supervisión de fronteras con RDC/CAR/Camerún/Gabón/Angola y alerta temprana en la región del Pool."
        : "KabatOne integrates dispatch for PNR and Gendarmerie across 12 departments, incident management for Port of Pointe-Noire, offshore oil platform security (TotalEnergies/ENI), border monitoring with DRC/CAR/Cameroon/Gabon/Angola, and Pool region early warning.",
    },
  ]);

  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources" : "https://kabatone.com/resources" },
    {
      name: es ? "Software de Seguridad Pública para República del Congo" : "Public Safety Software for Republic of Congo",
      url: es ? "https://kabatone.com/es/resources/public-safety-software-republic-of-congo" : "https://kabatone.com/resources/public-safety-software-republic-of-congo",
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
              {es ? "República del Congo · África Central · Petróleo Atlántico" : "Republic of Congo · Central Africa · Atlantic Oil"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {es
                ? "Software de Seguridad Pública para República del Congo"
                : "Public Safety Software for Republic of Congo"}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {es
                ? "Plataforma modular para las FAC y la Policía Nacional Republicana (PNR) en 12 departamentos, gestión del Puerto de Pointe-Noire, seguridad offshore de petróleo (TotalEnergies/ENI) y fronteras con 5 países vecinos."
                : "Modular platform for FAC and National Republican Police (PNR) across 12 departments, Port of Pointe-Noire management, offshore oil security (TotalEnergies/ENI), and borders with 5 neighboring countries."}
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
                  {es ? "Fuerzas Nacionales" : "National Forces"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "FAC (Fuerzas Armadas Congolesas)" : "FAC (Congolese Armed Forces)"}</strong> — {es ? "~10,000 efectivos; ejército, marina, fuerza aérea" : "~10,000 personnel; army, navy, air force"}</li>
                  <li><strong>{es ? "PNR (Policía Nacional Republicana)" : "PNR (National Republican Police)"}</strong> — {es ? "12 departamentos; orden público y judicial" : "12 departments; public order and judicial"}</li>
                  <li><strong>{es ? "Gendarmería Nacional" : "National Gendarmerie"}</strong> — {es ? "zonas rurales y pasos fronterizos" : "rural areas and border crossings"}</li>
                  <li><strong>DVT</strong> — {es ? "Departamento de Vigilancia del Territorio (inteligencia)" : "Territorial Surveillance Department (intelligence)"}</li>
                  <li><strong>{es ? "Guardia Presidencial / Guardia Republicana" : "Presidential Guard / Republican Guard"}</strong></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  {es ? "Estructura Geográfica" : "Geographic Structure"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "Brazzaville (capital)" : "Brazzaville (capital)"}</strong> — {es ? "2M+ habitantes; sede del BEAC; puertos fluviales" : "2M+ population; BEAC HQ; river ports"}</li>
                  <li><strong>{es ? "Pointe-Noire (capital económica)" : "Pointe-Noire (economic capital)"}</strong> — {es ? "principal puerto; instalaciones petrolíferas; aeropuerto AGO" : "main port; oil facilities; AGO airport"}</li>
                  <li><strong>{es ? "Región del Pool" : "Pool Region"}</strong> — {es ? "sur de Brazzaville; acuerdo de paz 2019 post-Ninjas" : "south of Brazzaville; 2019 peace deal post-Ninjas"}</li>
                  <li><strong>{es ? "Región de Sangha/Likouala (norte)" : "Sangha/Likouala Region (north)"}</strong> — {es ? "selva tropical; fronteras RCA/RDC/Camerún" : "tropical forest; CAR/DRC/Cameroon borders"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Infraestructura Crítica y Económica" : "Critical & Economic Infrastructure"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  {es ? "Puerto de Pointe-Noire" : "Port of Pointe-Noire"}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{es ? "2do puerto de África Central" : "2nd largest port in Central Africa"}</li>
                  <li>{es ? "+5 millones de toneladas/año" : "+5 million tonnes/year"}</li>
                  <li>{es ? "Terminal contenedores Bolloré/DP World" : "Bolloré/DP World container terminal"}</li>
                  <li>{es ? "Base de la marina FAC" : "FAC naval base"}</li>
                  <li>{es ? "Corredor a RCA/RDC sin litoral" : "Corridor to landlocked CAR/DRC"}</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  {es ? "Petróleo y Gas" : "Oil & Gas"}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{es ? "~300,000 bbl/día producción offshore" : "~300,000 bbl/day offshore production"}</li>
                  <li>{es ? "TotalEnergies — Moho-Bilondo/Likouf" : "TotalEnergies — Moho-Bilondo/Likouf"}</li>
                  <li>{es ? "ENI Congo — Marine XII" : "ENI Congo — Marine XII"}</li>
                  <li>{es ? "Perenco — campos Kitina/Tchibeli" : "Perenco — Kitina/Tchibeli fields"}</li>
                  <li>{es ? "SNPC — Société Nationale des Pétroles du Congo" : "SNPC — Société Nationale des Pétroles du Congo"}</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  {es ? "Aviación y Ferrocarril" : "Aviation & Rail"}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{es ? "Aeropuerto Maya-Maya Brazzaville (BZV)" : "Maya-Maya Airport Brazzaville (BZV)"}</li>
                  <li>{es ? "Aeropuerto Agostinho Neto Pointe-Noire (PNR)" : "Agostinho Neto Airport Pointe-Noire (PNR)"}</li>
                  <li>{es ? "CFCO — ferrocarril Brazzaville–Pointe-Noire 510 km" : "CFCO — Brazzaville–Pointe-Noire railway 510 km"}</li>
                  <li>{es ? "BEAC — Banco Central de los Estados de África Central (HQ)" : "BEAC — Central Bank of Central African States (HQ)"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Borders */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fronteras y Seguridad Regional" : "Borders & Regional Security"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Fronteras Terrestres" : "Land Borders"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>{es ? "RDC — 2,410 km (río Congo/Ubangi)" : "DRC — 2,410 km (Congo/Ubangi River)"}</strong><p className="text-sm text-gray-600">{es ? "Frontera fluvial; Brazzaville-Kinshasa; ferry cruce del Congo" : "River border; Brazzaville-Kinshasa; Congo River ferry crossing"}</p></li>
                  <li><strong>{es ? "RCA — 467 km (río Sangha)" : "CAR — 467 km (Sangha River)"}</strong><p className="text-sm text-gray-600">{es ? "Zona forestal norte; tráfico de madera/fauna" : "Northern forest zone; timber/wildlife trafficking"}</p></li>
                  <li><strong>{es ? "Camerún — 523 km" : "Cameroon — 523 km"}</strong><p className="text-sm text-gray-600">{es ? "Corredor comercial noroeste; ganadería y madera" : "Northwest trade corridor; livestock and timber"}</p></li>
                  <li><strong>{es ? "Gabón — 2,567 km" : "Gabon — 2,567 km"}</strong><p className="text-sm text-gray-600">{es ? "Frontera suroeste más extensa; minerales y madera" : "Longest southwest border; minerals and timber"}</p></li>
                  <li><strong>{es ? "Angola (Cabinda) — 231 km" : "Angola (Cabinda) — 231 km"}</strong><p className="text-sm text-gray-600">{es ? "Enclave angoleño; petróleo offshore compartido" : "Angolan enclave; shared offshore oil"}</p></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Riesgos Operacionales" : "Operational Risks"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>{es ? "Insurgencia del Pool (Ninjas 2016–2017)" : "Pool Insurgency (Ninjas 2016–2017)"}</strong><p className="text-sm text-gray-600">{es ? "Conflicto Nsilulu/Ninjas; paz 2019; zona sensible" : "Nsilulu/Ninjas conflict; 2019 peace; sensitive zone"}</p></li>
                  <li><strong>{es ? "Contrabando Congo-Kinshasa" : "Congo-Kinshasa Smuggling"}</strong><p className="text-sm text-gray-600">{es ? "Cruce fluvial con RDC; tráfico de mercancías y personas" : "River crossing with DRC; goods and human trafficking"}</p></li>
                  <li><strong>{es ? "Inundaciones Brazzaville" : "Brazzaville Flooding"}</strong><p className="text-sm text-gray-600">{es ? "Ríos Congo/Djoué; zonas bajas de Brazzaville" : "Congo/Djoue rivers; low-lying Brazzaville areas"}</p></li>
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
                  <li><strong>{es ? "Code des Marchés Publics (Loi 11-2009)" : "Code des Marchés Publics (Law 11-2009)"}</strong> — ARMP</li>
                  <li><strong>{es ? "Loi 9-2009 — Protección de Datos Personales" : "Law 9-2009 — Personal Data Protection"}</strong></li>
                  <li><strong>ARPCE</strong> — {es ? "Autoridad Reguladora de Comunicaciones Electrónicas" : "Electronic Communications Regulatory Authority"}</li>
                  <li><strong>{es ? "Code Pétrolier (Loi 24-94)" : "Petroleum Code (Law 24-94)"}</strong> — {es ? "concesiones offshore" : "offshore concessions"}</li>
                  <li><strong>CEMAC / BEAC</strong> — {es ? "integración regional zona franc CFA" : "regional integration CFA franc zone"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Donantes y Socios" : "Donors & Partners"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "Banco Mundial / IDA" : "World Bank / IDA"}</strong> — {es ? "infraestructura y gobernanza" : "infrastructure and governance"}</li>
                  <li><strong>AFD</strong> — {es ? "Agence Française de Développement; proyectos urbanos" : "French Development Agency; urban projects"}</li>
                  <li><strong>{es ? "China (EXIM Bank / CRBC)" : "China (EXIM Bank / CRBC)"}</strong> — {es ? "infraestructura vial y portuaria" : "road and port infrastructure"}</li>
                  <li><strong>{es ? "FMI / Artículo IV" : "IMF / Article IV"}</strong> — {es ? "programa de estabilización fiscal" : "fiscal stabilization program"}</li>
                  <li><strong>CEEAC / UA</strong> — {es ? "coordinación regional seguridad" : "regional security coordination"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne */}
        <section className="py-16 px-6 bg-blue-900 text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Plataforma KabatOne para la República del Congo" : "KabatOne Platform for the Republic of Congo"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {es ? "Despacho PNR — 12 Departamentos" : "PNR Dispatch — 12 Departments"}
                </h3>
                <p className="text-blue-100 text-sm">
                  {es
                    ? "Centro de despacho unificado para PNR y Gendarmería en los 12 departamentos, con cobertura de las regiones del Pool, Sangha, Likouala y Kouilou con comunicaciones resilientes en zonas forestales."
                    : "Unified dispatch center for PNR and Gendarmerie across 12 departments, covering Pool, Sangha, Likouala, and Kouilou regions with resilient communications in forest zones."}
                </p>
              </div>
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {es ? "Puerto y Plataformas Offshore" : "Port & Offshore Platforms"}
                </h3>
                <p className="text-blue-100 text-sm">
                  {es
                    ? "Gestión de incidentes para el Puerto de Pointe-Noire (terminal Bolloré/DP World), seguridad de plataformas TotalEnergies/ENI/Perenco y base naval FAC en Pointe-Noire."
                    : "Incident management for Port of Pointe-Noire (Bolloré/DP World terminal), TotalEnergies/ENI/Perenco platform security, and FAC naval base at Pointe-Noire."}
                </p>
              </div>
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {es ? "Fronteras y Río Congo" : "Borders & Congo River"}
                </h3>
                <p className="text-blue-100 text-sm">
                  {es
                    ? "Supervisión de los cruces fluviales Brazzaville-Kinshasa y frontera fluvial RCA, monitoreo de fronteras terrestres con Camerún/Gabón/Angola (Cabinda) y alerta temprana en la región del Pool."
                    : "Monitoring of Brazzaville-Kinshasa river crossings and CAR river border, land border monitoring with Cameroon/Gabon/Angola (Cabinda), and Pool region early warning."}
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
                  q: es ? "¿Cuáles son las principales fuerzas de seguridad en la República del Congo?" : "What are the main security forces in the Republic of Congo?",
                  a: es
                    ? "FAC (~10,000 efectivos), PNR en 12 departamentos, Gendarmería Nacional en zonas rurales, DVT inteligencia interna y Guardia Presidencial/Republicana. La marina FAC opera en Pointe-Noire."
                    : "FAC (~10,000 personnel), PNR across 12 departments, National Gendarmerie in rural areas, DVT internal intelligence, and Presidential/Republican Guard. FAC navy operates from Pointe-Noire.",
                },
                {
                  q: es ? "¿Qué infraestructura económica tiene la República del Congo?" : "What economic infrastructure does the Republic of Congo have?",
                  a: es
                    ? "Puerto de Pointe-Noire (+5M toneladas/año, Bolloré/DP World), petróleo offshore ~300,000 bbl/día (TotalEnergies/ENI/Perenco/SNPC), ferrocarril CFCO Brazzaville-Pointe-Noire 510 km y BEAC sede en Brazzaville."
                    : "Port of Pointe-Noire (+5M tonnes/year, Bolloré/DP World), offshore oil ~300,000 bbl/day (TotalEnergies/ENI/Perenco/SNPC), CFCO railway Brazzaville-Pointe-Noire 510 km, and BEAC HQ in Brazzaville.",
                },
                {
                  q: es ? "¿Qué riesgos de seguridad enfrenta la República del Congo?" : "What security risks does the Republic of Congo face?",
                  a: es
                    ? "Región del Pool post-Ninjas (acuerdo de paz 2019), contrabando en el cruce fluvial Congo-Kinshasa con la RDC, conflictos inter-comunitarios en el norte e inundaciones en Brazzaville por los ríos Congo/Djoué."
                    : "Post-Ninjas Pool region (2019 peace deal), Congo-Kinshasa river crossing smuggling with DRC, inter-communal conflicts in the north, and Brazzaville flooding from Congo/Djoue rivers.",
                },
                {
                  q: es ? "¿Cuál es el marco de adquisiciones en la República del Congo?" : "What is the procurement framework in the Republic of Congo?",
                  a: es
                    ? "Code des Marchés Publics (Loi 11-2009) y ARMP regulan adquisiciones. Los proyectos son financiados por el Banco Mundial, AFD, China EXIM Bank/CRBC y el FMI. La ARPCE supervisa el sector TIC."
                    : "Code des Marchés Publics (Law 11-2009) and ARMP govern procurement. Projects are financed by World Bank, AFD, China EXIM Bank/CRBC, and IMF. ARPCE oversees the ICT sector.",
                },
                {
                  q: es ? "¿Cómo apoya KabatOne la seguridad en la República del Congo?" : "How does KabatOne support security in the Republic of Congo?",
                  a: es
                    ? "KabatOne integra despacho PNR/Gendarmería en 12 departamentos, gestión de incidentes en Pointe-Noire (puerto/plataformas offshore), supervisión de fronteras con 5 vecinos y alertas en la región del Pool."
                    : "KabatOne integrates PNR/Gendarmerie dispatch across 12 departments, incident management in Pointe-Noire (port/offshore platforms), 5-neighbor border monitoring, and Pool region alerts.",
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
          h2={es ? "¿Listo para modernizar la seguridad pública en la República del Congo?" : "Ready to modernize public safety in the Republic of Congo?"}
          subtitle={es
            ? "Contáctenos para descubrir cómo KabatOne apoya a las FAC, la PNR, la seguridad portuaria en Pointe-Noire y la protección de las plataformas petrolíferas offshore."
            : "Contact us to discover how KabatOne supports FAC, PNR, port security in Pointe-Noire, and offshore oil platform protection."}
        />
        <Footer es={es} />
      </main>
    </>
  );
}
