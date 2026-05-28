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
  return generatePageMetadata("publicSafetySoftwareCentralAfricanRepublic", locale);
}

export default async function PublicSafetySoftwareCentralAfricanRepublicPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const article = articleSchema(
    es
      ? "Software de Seguridad Pública para República Centroafricana | FACA/MINUSCA, Gestión Post-Conflicto y Recursos Estratégicos – KabatOne"
      : "Public Safety Software for Central African Republic | FACA/MINUSCA, Post-Conflict Management & Strategic Resources – KabatOne",
    es
      ? "KabatOne ofrece plataforma de seguridad pública para las Fuerzas Armadas Centroafricanas (FACA), coordinación con MINUSCA (ONU), gestión de recursos de diamantes/oro/uranio y reconstrucción de la seguridad pública en la RCA."
      : "KabatOne delivers public safety platform for the Central African Armed Forces (FACA), coordination with MINUSCA (UN), management of diamond/gold/uranium resources, and public safety reconstruction in the CAR.",
    es
      ? "https://kabatone.com/es/resources/public-safety-software-central-african-republic/"
      : "https://kabatone.com/resources/public-safety-software-central-african-republic/",
    "2026-05-19"
  );

  const faq = faqPageSchema([
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en la República Centroafricana?"
        : "What are the main security forces in the Central African Republic?",
      answer: es
        ? "Las Fuerzas Armadas Centroafricanas (FACA) con aproximadamente 10,000–15,000 efectivos están siendo reestructuradas con asistencia rusa (Wagner/AFRIK/instructores RF). La Policía Nacional (DPSR) y la Gendarmería Nacional operan en Bangui y las 7 prefecturas económicas. MINUSCA (Misión Integrada Multidimensional de Estabilización de la ONU) despliega aproximadamente 14,000 cascos azules y policías."
        : "The Central African Armed Forces (FACA) with approximately 10,000–15,000 personnel are being restructured with Russian assistance (Wagner/AFRIK/RF instructors). The National Police (DPSR) and National Gendarmerie operate in Bangui and 7 economic prefectures. MINUSCA (UN Multidimensional Integrated Stabilization Mission) deploys approximately 14,000 peacekeepers and police.",
    },
    {
      question: es
        ? "¿Qué recursos estratégicos tiene la República Centroafricana?"
        : "What strategic resources does the Central African Republic have?",
      answer: es
        ? "La RCA posee significativas reservas de diamantes (MBAIKI y zona sudoeste), oro, uranio (Bakouma — Areva/Orano concesión), madera tropical y petróleo potencial. La Autoridad Nacional de Diamantes y Certificación (ANDPC) regula el sector bajo el Proceso de Kimberley. El oleoducto Chad-Camerún bordea el país y el corredor fluvial del Sangha/Ubangi conecta con la RDC y Congo-Brazzaville."
        : "The CAR possesses significant diamond reserves (MBAIKI and southwest zone), gold, uranium (Bakouma — Areva/Orano concession), tropical timber, and potential oil. The National Diamond and Certification Authority (ANDPC) regulates the sector under the Kimberley Process. The Chad-Cameroon pipeline borders the country and the Sangha/Ubangi river corridor connects to DRC and Congo-Brazzaville.",
    },
    {
      question: es
        ? "¿Qué grupos armados operan en la República Centroafricana?"
        : "What armed groups operate in the Central African Republic?",
      answer: es
        ? "La Coalición de Patriotas por el Cambio (CPC) reúne a múltiples grupos armados (FPRC/UPC/MPC). La CPC controla partes del norte y este. FACA/Wagner/MINUSCA operan contra ellos. Además, la Seleka (disuelta formalmente) y sus derivados, así como los Anti-Balaka (milicias de autodefensa) continúan operando en zonas rurales."
        : "The Coalition of Patriots for Change (CPC) unites multiple armed groups (FPRC/UPC/MPC) controlling parts of the north and east. FACA/Wagner/MINUSCA operate against them. Additionally, Seleka (formally disbanded) and its offshoots, plus Anti-Balaka self-defense militias, continue operating in rural areas.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en la RCA?"
        : "What is the legal and procurement framework in the CAR?",
      answer: es
        ? "El Code des Marchés Publics (Loi 09-004) y la Unidad de Coordinación y Gestión de Proyectos (UCGP) regulan las adquisiciones. Los proyectos principales son financiados por el Banco Mundial, el PNUD, la UE y la UA. El acuerdo de paz APPR (Acuerdo Político para la Paz y la Reconciliación) 2019 define el marco político. Rusia (Wagner/AFRIK) tiene contratos directos con el gobierno para apoyo a seguridad."
        : "The Code des Marchés Publics (Law 09-004) and UCGP (Project Coordination and Management Unit) govern procurement. Major projects are financed by the World Bank, UNDP, EU, and AU. The APPR peace agreement (2019) defines the political framework. Russia (Wagner/AFRIK) has direct government contracts for security support.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en la RCA?"
        : "How does KabatOne support public safety in the CAR?",
      answer: es
        ? "KabatOne integra sistemas de comando y control para FACA y la Policía Nacional en Bangui y las prefecturas, coordinación de incidentes con MINUSCA, supervisión de rutas de extracción de recursos (diamantes/oro/madera) y gestión de fronteras con Chad, Sudán, Sudan del Sur, RDC, Congo y Camerún."
        : "KabatOne integrates command-and-control systems for FACA and National Police in Bangui and prefectures, incident coordination with MINUSCA, monitoring of resource extraction routes (diamonds/gold/timber), and border management with Chad, Sudan, South Sudan, DRC, Congo, and Cameroon.",
    },
  ]);

  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/" },
    {
      name: es ? "Software de Seguridad Pública para República Centroafricana" : "Public Safety Software for Central African Republic",
      url: es ? "https://kabatone.com/es/resources/public-safety-software-central-african-republic/" : "https://kabatone.com/resources/public-safety-software-central-african-republic/",
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
              {es ? "República Centroafricana · África Central · MINUSCA" : "Central African Republic · Central Africa · MINUSCA"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {es
                ? "Software de Seguridad Pública para República Centroafricana"
                : "Public Safety Software for Central African Republic"}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {es
                ? "Plataforma modular de comando y control para las FACA, coordinación con MINUSCA (14,000 cascos azules), gestión de recursos estratégicos (diamantes/oro/uranio) y reconstrucción de la seguridad pública post-conflicto."
                : "Modular command-and-control platform for FACA, coordination with MINUSCA (14,000 peacekeepers), strategic resource management (diamonds/gold/uranium), and post-conflict public safety reconstruction."}
            </p>
          </div>
        </section>

        {/* Security Forces */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fuerzas de Seguridad y Misiones Internacionales" : "Security Forces & International Missions"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  {es ? "Fuerzas Nacionales" : "National Forces"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "FACA (Fuerzas Armadas Centroafricanas)" : "FACA (Central African Armed Forces)"}</strong> — {es ? "10,000–15,000 efectivos; reestructuración con asistencia rusa" : "10,000–15,000 personnel; restructuring with Russian assistance"}</li>
                  <li><strong>{es ? "Policía Nacional (DPSR)" : "National Police (DPSR)"}</strong> — {es ? "Bangui y prefecturas; unidades de orden público" : "Bangui and prefectures; public order units"}</li>
                  <li><strong>{es ? "Gendarmería Nacional" : "National Gendarmerie"}</strong> — {es ? "zonas rurales; 7 prefecturas económicas" : "rural zones; 7 economic prefectures"}</li>
                  <li><strong>{es ? "USRAP (Unidad Especial Anti-Rebelde)" : "USRAP (Special Anti-Rebel Unit)"}</strong></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  {es ? "Presencia Internacional" : "International Presence"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>MINUSCA</strong> — {es ? "~14,000 cascos azules/policías ONU; Bangui/Bossangoa/Bambari" : "~14,000 UN peacekeepers/police; Bangui/Bossangoa/Bambari"}</li>
                  <li><strong>{es ? "Wagner/AFRIK (Rusia)" : "Wagner/AFRIK (Russia)"}</strong> — {es ? "instructores y fuerzas especiales ruso-africanas" : "Russian-African special forces and instructors"}</li>
                  <li><strong>{es ? "EUFOR RCA / EUMAM RCA (UE)" : "EUFOR RCA / EUMAM RCA (EU)"}</strong> — {es ? "misión de entrenamiento militar de la UE" : "EU military training mission"}</li>
                  <li><strong>{es ? "Fuerza Francesa (Sangaris — finalizada 2016)" : "French Force (Sangaris — ended 2016)"}</strong></li>
                  <li><strong>{es ? "MISCA → MINUSCA (UA/ONU)" : "MISCA → MINUSCA (AU/UN)"}</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Resources & Infrastructure */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Recursos Estratégicos e Infraestructura" : "Strategic Resources & Infrastructure"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  {es ? "Diamantes y Metales" : "Diamonds & Metals"}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{es ? "Diamantes — MBAIKI/zona sudoeste; Proceso Kimberley" : "Diamonds — MBAIKI/southwest zone; Kimberley Process"}</li>
                  <li>{es ? "Oro — Ndassima (Axmin/sanciones) y artesanal" : "Gold — Ndassima (Axmin/sanctions) and artisanal"}</li>
                  <li>{es ? "Uranio Bakouma (Orano/Areva concesión)" : "Uranium Bakouma (Orano/Areva concession)"}</li>
                  <li>{es ? "Coltan/casiterita en noreste" : "Coltan/cassiterite in northeast"}</li>
                  <li>{es ? "ANDPC — Autoridad Nacional Diamantes y Certificación" : "ANDPC — National Diamond and Certification Authority"}</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  {es ? "Infraestructura de Transporte" : "Transport Infrastructure"}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{es ? "Aeropuerto Internacional Bangui M'Poko (BGF)" : "Bangui M'Poko International Airport (BGF)"}</li>
                  <li>{es ? "Río Ubangi — vía navegable hacia RDC/Congo" : "Ubangi River — navigable waterway to DRC/Congo"}</li>
                  <li>{es ? "Río Sangha — norte del país; tráfico fluvial" : "Sangha River — northern zone; river traffic"}</li>
                  <li>{es ? "Corredor Bangui-Douala (Camerún) 1,400 km" : "Bangui-Douala Corridor (Cameroon) 1,400 km"}</li>
                  <li>{es ? "Carretera Bangui-N'Djamena (Chad)" : "Bangui-N'Djamena Road (Chad)"}</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  {es ? "Asistencia Humanitaria" : "Humanitarian Assistance"}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{es ? "730,000+ desplazados internos (UNHCR 2024)" : "730,000+ internally displaced (UNHCR 2024)"}</li>
                  <li>{es ? "625,000+ refugiados centroafricanos en vecinos" : "625,000+ CAR refugees in neighboring countries"}</li>
                  <li>{es ? "WFP/OCHA/UNICEF operaciones activas" : "WFP/OCHA/UNICEF active operations"}</li>
                  <li>{es ? "MSF/CICR/NRC presencia humanitaria" : "MSF/ICRC/NRC humanitarian presence"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Borders */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fronteras y Dinámica Regional" : "Borders & Regional Dynamics"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Fronteras Terrestres (6 países)" : "Land Borders (6 countries)"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "Camerún — 901 km" : "Cameroon — 901 km"}</strong> — {es ? "corredor comercial Bangui-Douala; refugiados" : "Bangui-Douala trade corridor; refugees"}</li>
                  <li><strong>{es ? "RDC — 1,577 km (río Ubangi)" : "DRC — 1,577 km (Ubangi River)"}</strong> — {es ? "frontera fluvial; contrabando minería artesanal" : "river border; artisanal mining smuggling"}</li>
                  <li><strong>{es ? "Sudan del Sur — 990 km" : "South Sudan — 990 km"}</strong> — {es ? "flujos de refugiados y grupos armados" : "refugee flows and armed group crossings"}</li>
                  <li><strong>{es ? "Sudán — 174 km" : "Sudan — 174 km"}</strong> — {es ? "FPRC armado en frontera noreste" : "FPRC armed group on northeast border"}</li>
                  <li><strong>{es ? "Chad — 1,197 km" : "Chad — 1,197 km"}</strong> — {es ? "corredor Bangui-N'Djamena; mercenarios transaharianos" : "Bangui-N'Djamena corridor; trans-Saharan mercenaries"}</li>
                  <li><strong>{es ? "Congo (Brazzaville) — 467 km" : "Congo (Brazzaville) — 467 km"}</strong> — {es ? "río Sangha; tráfico de madera" : "Sangha River; timber trafficking"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Actores Armados No Estatales" : "Non-State Armed Actors"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "CPC — Coalición de Patriotas para el Cambio" : "CPC — Coalition of Patriots for Change"}</strong> — {es ? "FPRC/UPC/MPC; controla norte/este" : "FPRC/UPC/MPC; controls north/east"}</li>
                  <li><strong>{es ? "UPC (Unidad para la Paz en Centroáfrica)" : "UPC (Union for Peace in CAR)"}</strong> — {es ? "Ali Darassa; zona este" : "Ali Darassa; eastern zone"}</li>
                  <li><strong>{es ? "Anti-Balaka" : "Anti-Balaka"}</strong> — {es ? "milicias de autodefensa; zonas rurales del oeste" : "self-defense militias; western rural areas"}</li>
                  <li><strong>APPR 2019</strong> — {es ? "Acuerdo Político para la Paz y la Reconciliación" : "Political Agreement for Peace and Reconciliation"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Legal */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Marco Legal y Adquisiciones" : "Legal & Procurement Framework"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Legislación" : "Legislation"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "Code des Marchés Publics (Loi 09-004)" : "Code des Marchés Publics (Law 09-004)"}</strong></li>
                  <li><strong>UCGP</strong> — {es ? "Unidad de Coordinación y Gestión de Proyectos" : "Project Coordination and Management Unit"}</li>
                  <li><strong>{es ? "Código Minero (Loi 09-005)" : "Mining Code (Law 09-005)"}</strong> — {es ? "concesiones de diamantes/uranio/oro" : "diamond/uranium/gold concessions"}</li>
                  <li><strong>ARCT</strong> — {es ? "Autoridad de Regulación de Telecomunicaciones" : "Telecommunications Regulatory Authority"}</li>
                  <li><strong>APPR 2019</strong> — {es ? "marco de paz con grupos armados" : "peace framework with armed groups"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Donantes y Financiadores" : "Donors & Funders"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "Banco Mundial / IDA" : "World Bank / IDA"}</strong> — {es ? "reconstrucción y gobernanza" : "reconstruction and governance"}</li>
                  <li><strong>PNUD / MINUSCA</strong> — {es ? "apoyo a instituciones de seguridad" : "security institution support"}</li>
                  <li><strong>{es ? "Unión Europea — EUMAM RCA / FED" : "European Union — EUMAM RCA / EDF"}</strong></li>
                  <li><strong>{es ? "Rusia — Wagner/AFRIK contratos directos" : "Russia — Wagner/AFRIK direct contracts"}</strong></li>
                  <li><strong>{es ? "USAID / Estado (diplomacia)" : "USAID / State Dept (diplomacy)"}</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne */}
        <section className="py-16 px-6 bg-blue-900 text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Plataforma KabatOne para la RCA" : "KabatOne Platform for the CAR"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {es ? "Comando FACA y Policía" : "FACA & Police Command"}
                </h3>
                <p className="text-blue-100 text-sm">
                  {es
                    ? "Centro de comando integrado para FACA, DPSR y Gendarmería en Bangui y las 7 prefecturas, con interoperabilidad con los canales de comunicación seguros de MINUSCA."
                    : "Integrated command center for FACA, DPSR, and Gendarmerie in Bangui and 7 prefectures, with interoperability with MINUSCA secure communication channels."}
                </p>
              </div>
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {es ? "Recursos y Rutas de Extracción" : "Resources & Extraction Routes"}
                </h3>
                <p className="text-blue-100 text-sm">
                  {es
                    ? "Supervisión de sitios de extracción de diamantes/oro/uranio, seguimiento del corredor Bangui-Douala (1,400 km), alertas de tráfico fluvial en el Ubangi/Sangha y monitoreo anti-contrabando."
                    : "Monitoring of diamond/gold/uranium extraction sites, tracking the Bangui-Douala corridor (1,400 km), Ubangi/Sangha river traffic alerts, and anti-smuggling monitoring."}
                </p>
              </div>
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {es ? "Fronteras y Humanitario" : "Borders & Humanitarian"}
                </h3>
                <p className="text-blue-100 text-sm">
                  {es
                    ? "Gestión de los 6 pasos fronterizos (Camerún/RDC/Sudan del Sur/Sudán/Chad/Congo), coordinación con WFP/OCHA/UNHCR para 730,000+ desplazados y alerta temprana de movimientos de grupos armados."
                    : "Management of 6 border crossings (Cameroon/DRC/South Sudan/Sudan/Chad/Congo), coordination with WFP/OCHA/UNHCR for 730,000+ displaced, and armed group movement early warning."}
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
                  q: es ? "¿Cuáles son las principales fuerzas de seguridad en la RCA?" : "What are the main security forces in the CAR?",
                  a: es
                    ? "FACA (10,000–15,000 efectivos con apoyo ruso Wagner/AFRIK), Policía Nacional (DPSR), Gendarmería Nacional y MINUSCA (~14,000 cascos azules/policías ONU). EUMAM RCA proporciona entrenamiento militar de la UE."
                    : "FACA (10,000–15,000 with Russian Wagner/AFRIK support), National Police (DPSR), National Gendarmerie, and MINUSCA (~14,000 UN peacekeepers/police). EUMAM RCA provides EU military training.",
                },
                {
                  q: es ? "¿Qué recursos estratégicos tiene la RCA?" : "What strategic resources does the CAR have?",
                  a: es
                    ? "Diamantes (MBAIKI, Proceso Kimberley), oro (Ndassima), uranio (Bakouma/Orano), coltan/casiterita en el noreste, madera tropical y petróleo potencial. ANDPC regula el sector de diamantes."
                    : "Diamonds (MBAIKI, Kimberley Process), gold (Ndassima), uranium (Bakouma/Orano), coltan/cassiterite in northeast, tropical timber, and potential oil. ANDPC regulates the diamond sector.",
                },
                {
                  q: es ? "¿Qué grupos armados operan en la RCA?" : "What armed groups operate in the CAR?",
                  a: es
                    ? "La Coalición CPC (FPRC/UPC/MPC) controla partes del norte/este. Anti-Balaka opera en el oeste. FACA/Wagner/MINUSCA contrarrestan su influencia. El APPR 2019 es el acuerdo de paz de referencia."
                    : "The CPC Coalition (FPRC/UPC/MPC) controls parts of north/east. Anti-Balaka operates in the west. FACA/Wagner/MINUSCA counter their influence. APPR 2019 is the reference peace agreement.",
                },
                {
                  q: es ? "¿Cuál es el marco de adquisiciones en la RCA?" : "What is the procurement framework in the CAR?",
                  a: es
                    ? "El Code des Marchés Publics (Loi 09-004) y la UCGP regulan adquisiciones. Los proyectos principales son financiados por el Banco Mundial, PNUD/MINUSCA y la UE (EUMAM/FED). Rusia tiene contratos directos Wagner/AFRIK."
                    : "The Code des Marchés Publics (Law 09-004) and UCGP govern procurement. Major projects are funded by World Bank, UNDP/MINUSCA, and EU (EUMAM/EDF). Russia has direct Wagner/AFRIK contracts.",
                },
                {
                  q: es ? "¿Cómo apoya KabatOne la seguridad en la RCA?" : "How does KabatOne support security in the CAR?",
                  a: es
                    ? "KabatOne integra comando FACA/DPSR/Gendarmería en Bangui y 7 prefecturas, interoperabilidad con MINUSCA, supervisión de sitios de extracción de recursos, seguimiento del corredor Bangui-Douala y gestión de 6 fronteras."
                    : "KabatOne integrates FACA/DPSR/Gendarmerie command in Bangui and 7 prefectures, MINUSCA interoperability, resource extraction site monitoring, Bangui-Douala corridor tracking, and 6-border management.",
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
          h2={es ? "¿Listo para apoyar la reconstrucción de la seguridad pública en la RCA?" : "Ready to support public safety reconstruction in the CAR?"}
          subtitle={es
            ? "Contáctenos para descubrir cómo KabatOne apoya a las FACA, MINUSCA, la Policía Nacional y la gestión de recursos estratégicos en la República Centroafricana."
            : "Contact us to discover how KabatOne supports FACA, MINUSCA, the National Police, and strategic resource management in the Central African Republic."}
        />
        <Footer es={es} />
      </main>
    </>
  );
}
