import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareMadagascar", locale);
}

export default async function PublicSafetySoftwareMadagascarPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Madagascar | FAM/GN, Puerto de Toamasina y Seguridad del Océano Índico – KabatOne"
    : "Public Safety Software for Madagascar | FAM/GN, Port of Toamasina & Indian Ocean Security – KabatOne";
  const description = es
    ? "KabatOne entrega plataforma de seguridad pública para las Fuerzas Armadas de Madagascar (FAM), Gendarmerie Nationale, Puerto de Toamasina y gestión de desastres por ciclones en el Océano Índico."
    : "KabatOne delivers public safety platform for Madagascar Armed Forces (FAM), Gendarmerie Nationale, Port of Toamasina, and cyclone disaster management in the Indian Ocean.";
  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-madagascar"
    : "https://kabatone.com/resources/public-safety-software-madagascar";

  const faqs = [
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Madagascar?"
        : "What are the main security forces in Madagascar?",
      answer: es
        ? "Las Fuerzas Armadas de Madagascar (FAM) cuentan con aproximadamente 13,500 efectivos (ejército, marina, aviación) distribuidos en 6 regionas militares. La Gendarmerie Nationale (GN) opera en 25 regiones/119 distritos con ~9,000 efectivos. La Police Nationale y el FIGN (Fuerzas de Intervención de la Gendarmerie) son las fuerzas principales de orden interior. Madagascar ha experimentado crisis políticas recurrentes — la última gran crisis fue el golpe de estado de 2009. El presidente Andry Rajoelina fue reelegido en 2023."
        : "Madagascar Armed Forces (FAM) number approximately 13,500 personnel (army, navy, air force) across 6 military regions. The Gendarmerie Nationale (GN) operates across 25 regions/119 districts with ~9,000 personnel. The National Police and FIGN (Gendarmerie Intervention Forces) are the main internal security forces. Madagascar has experienced recurring political crises — the last major crisis was the 2009 coup. President Andry Rajoelina was re-elected in 2023.",
    },
    {
      question: es
        ? "¿Por qué Madagascar es estratégicamente importante en el Océano Índico?"
        : "Why is Madagascar strategically important in the Indian Ocean?",
      answer: es
        ? "Madagascar es la 4ta isla más grande del mundo (587,041 km²) con ~35M habitantes. Su posición en el Canal de Mozambique — por donde transita una parte significativa del comercio marítimo mundial — la hace estratégicamente crítica. El Puerto de Toamasina (MICTSL) es el mayor puerto del país manejando ~5M toneladas/año. Madagascar es miembro de la Comisión del Océano Índico (COI/IOC) y SADC. La amenaza de piratería del Océano Índico (derivada de Somalia) afecta sus aguas. Doce a quince ciclones tropicales impactan la isla anualmente."
        : "Madagascar is the world's 4th largest island (587,041 km²) with ~35M inhabitants. Its position in the Mozambique Channel — through which a significant share of global maritime trade transits — makes it strategically critical. Port of Toamasina (MICTSL) is the country's main port handling ~5M tons/year. Madagascar is a member of the Indian Ocean Commission (IOC/COI) and SADC. The Indian Ocean piracy threat (derived from Somalia) affects its waters. Twelve to fifteen tropical cyclones impact the island annually.",
    },
    {
      question: es
        ? "¿Cuáles son los recursos económicos estratégicos de Madagascar?"
        : "What are Madagascar's strategic economic resources?",
      answer: es
        ? "Madagascar produce ~80% de la vainilla mundial (principal exportador global). La minería incluye ilmenita/titanio (QMM/Rio Tinto en Fort Dauphin), cobalto/níquel (Ambatovy/Sherritt, 2do mayor depósito mundial), cromita (Kraomita Malagasy) y zafiros (principal productor mundial). El sector pesquero (ZEE de 1.2M km²) tiene gran potencial. El turismo (biodiversidad endémica — 90% de fauna única) y la producción de clavo de olor, pimienta y aceites esenciales completan la economía. El PIB per cápita es ~$500 — uno de los más bajos del mundo."
        : "Madagascar produces ~80% of the world's vanilla (leading global exporter). Mining includes ilmenite/titanium (QMM/Rio Tinto in Fort Dauphin), cobalt/nickel (Ambatovy/Sherritt, world's 2nd largest deposit), chromite (Kraomita Malagasy), and sapphires (world's leading producer). The fishing sector (1.2M km² EEZ) has great potential. Tourism (endemic biodiversity — 90% unique fauna) and production of cloves, pepper, and essential oils round out the economy. GDP per capita is ~$500 — among the world's lowest.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Madagascar?"
        : "What is the legal and procurement framework in Madagascar?",
      answer: es
        ? "El Code des marchés publics y la ARMP (Autorité de Régulation des Marchés Publics) rigen las adquisiciones públicas. La Loi n°2014-006 establece el marco de protección de datos. La ARTEC regula telecomunicaciones. Los financiadores principales incluyen el FMI (Enhanced Credit Facility), Banco Mundial (IDA), AfDB, Unión Europea y Francia (AFD). La moneda es el Ariary malgache (MGA). Madagascar es miembro de la SADC, COI y COMESA. El sector bancario es supervisado por la CSBF (Commission de Supervision Bancaire et Financière)."
        : "The Code des marchés publics and ARMP (Public Markets Regulatory Authority) govern public procurement. Law n°2014-006 establishes the data protection framework. ARTEC regulates telecommunications. Main financiers include IMF (Enhanced Credit Facility), World Bank (IDA), AfDB, European Union, and France (AFD). Currency is the Malagasy Ariary (MGA). Madagascar is a member of SADC, IOC, and COMESA. The banking sector is supervised by the CSBF (Banking and Financial Supervision Commission).",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Madagascar?"
        : "How does KabatOne support public safety in Madagascar?",
      answer: es
        ? "KabatOne integra vigilancia de vídeo, despacho CAD y awareness situacional para operaciones FAM/GN en las 25 regiones. Los módulos de gestión de desastres coordinan la respuesta a ciclones (12-15/año) entre FAM, BNGRC (Buró Nacional de Gestión de Riesgos y Catástrofes), Cruz Roja y equipos internacionales. El sistema de seguridad portuaria protege el Puerto de Toamasina. Los módulos de seguridad minera monitorean operaciones QMM/Ambatovy. La plataforma marítima apoya la gestión de la ZEE de 1.2M km² contra pesca ilegal y piratería."
        : "KabatOne integrates video surveillance, CAD dispatch, and situational awareness for FAM/GN operations across all 25 regions. Disaster management modules coordinate cyclone response (12-15/year) between FAM, BNGRC (National Disaster Risk Management Bureau), Red Cross, and international teams. Port security system protects Port of Toamasina. Mining security modules monitor QMM/Ambatovy operations. Maritime platform supports management of the 1.2M km² EEZ against illegal fishing and piracy.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources" : "https://kabatone.com/resources" },
    { name: es ? "Software de Seguridad Pública para Madagascar" : "Public Safety Software for Madagascar", url: canonical },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Nav />
      <main className="bg-white text-gray-900">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0a0f1e] to-[#1a2744] text-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-blue-400 mb-3">
              {es ? "Madagascar · Océano Índico · Canal de Mozambique · Vainilla · Cobalto" : "Madagascar · Indian Ocean · Mozambique Channel · Vanilla · Cobalt"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es ? "Software de Seguridad Pública para Madagascar" : "Public Safety Software for Madagascar"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {es
                ? "Plataforma unificada para FAM, Gendarmerie Nationale, Puerto de Toamasina y gestión de desastres por ciclones — 4ta isla más grande del mundo, posición estratégica en el Canal de Mozambique."
                : "Unified platform for FAM, Gendarmerie Nationale, Port of Toamasina, and cyclone disaster management — world's 4th largest island, strategic position in the Mozambique Channel."}
            </p>
          </div>
        </section>

        {/* Security Forces */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fuerzas de Seguridad y Contexto Estratégico" : "Security Forces & Strategic Context"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Estructura de Seguridad" : "Security Structure"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>FAM</strong> — {es ? "~13,500 efectivos — 6 regiones militares (ejército/marina/aviación)" : "~13,500 personnel — 6 military regions (army/navy/air force)"}</li>
                  <li><strong>GN</strong> — {es ? "Gendarmerie Nationale ~9,000 — 25 regiones/119 distritos" : "Gendarmerie Nationale ~9,000 — 25 regions/119 districts"}</li>
                  <li><strong>FIGN</strong> — {es ? "Fuerzas de Intervención de la Gendarmerie (élite)" : "Gendarmerie Intervention Forces (elite)"}</li>
                  <li><strong>{es ? "Police Nationale" : "National Police"}</strong> — {es ? "principales zonas urbanas" : "main urban areas"}</li>
                  <li>{es ? "Presidente Rajoelina (reelecto 2023) — sistema semipresidencial" : "President Rajoelina (re-elected 2023) — semi-presidential system"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Posición Estratégica" : "Strategic Position"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? "4ta isla más grande del mundo — 587,041 km² / ~35M hab." : "World's 4th largest island — 587,041 km² / ~35M pop."}</li>
                  <li>{es ? "Canal de Mozambique — tránsito marítimo mundial crítico" : "Mozambique Channel — critical global maritime transit"}</li>
                  <li>{es ? "ZEE 1.2M km² — amenaza piratería/pesca ilegal" : "1.2M km² EEZ — piracy/illegal fishing threat"}</li>
                  <li>{es ? "12-15 ciclones tropicales/año — mayor riesgo climático" : "12-15 tropical cyclones/year — major climate risk"}</li>
                  <li>{es ? "Miembro IOC/COI + SADC + COMESA" : "IOC/COI + SADC + COMESA member"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Economic Infrastructure */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Economía, Recursos y Marco Legal" : "Economy, Resources & Legal Framework"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">{es ? "Recursos Estratégicos" : "Strategic Resources"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Vainilla — ~80% producción mundial (exportador líder global)" : "Vanilla — ~80% world production (leading global exporter)"}</li>
                  <li>{es ? "Ilmenita/titanio — QMM/Rio Tinto (Fort Dauphin)" : "Ilmenite/titanium — QMM/Rio Tinto (Fort Dauphin)"}</li>
                  <li>{es ? "Cobalto/níquel — Ambatovy/Sherritt (2do depósito mundial)" : "Cobalt/nickel — Ambatovy/Sherritt (world's 2nd largest deposit)"}</li>
                  <li>{es ? "Cromita — Kraomita Malagasy" : "Chromite — Kraomita Malagasy"}</li>
                  <li>{es ? "Zafiros — principal productor mundial" : "Sapphires — world's leading producer"}</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-3">{es ? "Infraestructura" : "Infrastructure"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Puerto Toamasina (MICTSL) — ~5M t/año (puerto principal)" : "Port of Toamasina (MICTSL) — ~5M t/year (main port)"}</li>
                  <li>{es ? "Puerto Mahajanga + Puerto Toliara (secundarios)" : "Port of Mahajanga + Port of Toliara (secondary)"}</li>
                  <li>Ivato International Airport (TNR)</li>
                  <li>{es ? "Red ferroviaria MADARAIL (limitada)" : "MADARAIL railway network (limited)"}</li>
                  <li>{es ? "Conectividad móvil: Telma/Airtel/Orange" : "Mobile connectivity: Telma/Airtel/Orange"}</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-900 mb-3">{es ? "Marco Legal" : "Legal Framework"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>ARMP — {es ? "Code des marchés publics" : "Code des marchés publics"}</li>
                  <li>{es ? "Ley n°2014-006 — protección de datos" : "Law n°2014-006 — data protection"}</li>
                  <li>ARTEC — {es ? "regulación telecomunicaciones" : "telecommunications regulator"}</li>
                  <li>CSBF — {es ? "supervisión bancaria" : "banking supervision"}</li>
                  <li>{es ? "FMI/BM/AfDB/UE/Francia AFD" : "IMF/WB/AfDB/EU/France AFD"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne Capabilities */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Capacidades KabatOne para Madagascar" : "KabatOne Capabilities for Madagascar"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Gestión de Desastres y Seguridad Marítima" : "Disaster Management & Maritime Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Módulos de gestión de desastres para coordinación de respuesta a ciclones entre FAM, BNGRC y organismos internacionales" : "Disaster management modules for cyclone response coordination between FAM, BNGRC, and international agencies"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Plataforma marítima para monitoreo de ZEE 1.2M km² contra piratería y pesca ilegal (IUU Fishing)" : "Maritime platform for monitoring 1.2M km² EEZ against piracy and illegal fishing (IUU Fishing)"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Sistema de seguridad portuaria integrado para Puerto de Toamasina (MICTSL), Mahajanga y Toliara" : "Integrated port security system for Port of Toamasina (MICTSL), Mahajanga, and Toliara"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Integración con sistemas IOC/COI de alerta marítima temprana y gestión de crisis regionales" : "Integration with IOC/COI early maritime warning systems and regional crisis management"}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Nacional y Minera" : "National & Mining Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Despacho CAD para GN/FAM en las 25 regiones/119 distritos con gestión de incidentes" : "CAD dispatch for GN/FAM across 25 regions/119 districts with incident management"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Módulos de seguridad minera para operaciones QMM/Rio Tinto (ilmenita) y Ambatovy/Sherritt (cobalto/níquel)" : "Mining security modules for QMM/Rio Tinto (ilmenite) and Ambatovy/Sherritt (cobalt/nickel) operations"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Vigilancia de vídeo urbana para Antananarivo, Toamasina y principales centros urbanos" : "Urban video surveillance for Antananarivo, Toamasina, and major urban centers"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Arquitectura offline-capable para zonas rurales y aisladas (Madagascar tiene ~87% de ruralidad)" : "Offline-capable architecture for rural and isolated areas (Madagascar has ~87% rural population)"}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">
              {es ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
            </h2>
            <div className="space-y-6">
              {faqs.map((faqItem, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold mb-2">{faqItem.question}</h3>
                  <p className="text-gray-600">{faqItem.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          es={es}
          h2={es ? "¿Listo para modernizar la seguridad pública en Madagascar?" : "Ready to modernize public safety in Madagascar?"}
          subtitle={es ? "Contáctenos para una demostración adaptada a las necesidades de seguridad de Madagascar." : "Contact us for a demonstration tailored to Madagascar's security needs."}
        />
      </main>
      <Footer es={es} />
    </>
  );
}
