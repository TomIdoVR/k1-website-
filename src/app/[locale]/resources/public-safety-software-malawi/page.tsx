import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareMalawi", locale);
}

export default async function PublicSafetySoftwareMalawiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Malaui | MDF/MPS, Lago Malaui, SADC y Recursos Estratégicos – KabatOne"
    : "Public Safety Software for Malawi | MDF/MPS, Lake Malawi, SADC & Strategic Resources – KabatOne";
  const description = es
    ? "KabatOne entrega plataforma de seguridad pública para las Fuerzas de Defensa de Malaui (MDF), Servicio de Policía, seguridad del Lago Malaui, gestión de fronteras SADC y protección de recursos de uranio/té/tabaco."
    : "KabatOne delivers public safety platform for Malawi Defence Force (MDF), Police Service, Lake Malawi security, SADC border management, and protection of uranium/tea/tobacco strategic resources.";
  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-malawi"
    : "https://kabatone.com/resources/public-safety-software-malawi";

  const faqs = [
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Malaui?"
        : "What are the main security forces in Malawi?",
      answer: es
        ? "Las Fuerzas de Defensa de Malaui (MDF) cuentan con aproximadamente 10,000-12,000 efectivos (ejército, marina del lago y aviación). El Servicio de Policía de Malaui (MPS) opera en las 28 distritos/3 regiones con ~14,000 agentes. La Agencia de Inteligencia Nacional (NIA) coordina la inteligencia. El Servicio de Prisiones de Malaui (MPS-Prisons) y el Servicio de Inmigración completan el sector de seguridad. Malaui ha participado en misiones de paz de la ONU (MINUSMA, MONUSCO). El presidente Lazarus Chakwera gobierna desde 2020 (sistema presidencial)."
        : "The Malawi Defence Force (MDF) numbers approximately 10,000-12,000 personnel (army, lake navy, and air wing). The Malawi Police Service (MPS) operates across 28 districts/3 regions with ~14,000 officers. The National Intelligence Agency (NIA) coordinates intelligence. The Malawi Prisons Service and Immigration Service complete the security sector. Malawi has participated in UN peacekeeping missions (MINUSMA, MONUSCO). President Lazarus Chakwera has governed since 2020 (presidential system).",
    },
    {
      question: es
        ? "¿Cuál es la importancia estratégica del Lago Malaui?"
        : "What is the strategic importance of Lake Malawi?",
      answer: es
        ? "El Lago Malaui (Lago Nyasa) es el 9no lago más grande del mundo y el 3ro más profundo de Africa (706 m). Malaui comparte sus costas con Tanzania y Mozambique, y existe una disputa de soberanía con Tanzania sobre parte del lago. El lago sustenta la pesquería artesanal más densa del mundo por km² — chambo (tilapia) es la principal proteína del país. El transporte lacustre (MV Ilala) conecta comunidades costeras inaccesibles por carretera. El turismo en el lago (Nkhata Bay, Cape Maclear/PNUL) es creciente. El lago representa el 20% de la superficie terrestre del país."
        : "Lake Malawi (Lake Nyasa) is the world's 9th largest lake and Africa's 3rd deepest (706 m). Malawi shares its shores with Tanzania and Mozambique, and a sovereignty dispute exists with Tanzania over part of the lake. The lake sustains the world's densest artisanal fishery per km² — chambo (tilapia) is the country's main protein source. Lake transport (MV Ilala) connects coastal communities inaccessible by road. Tourism on the lake (Nkhata Bay, Cape Maclear/LMNP) is growing. The lake covers 20% of the country's land area.",
    },
    {
      question: es
        ? "¿Cuáles son los recursos económicos estratégicos de Malaui?"
        : "What are Malawi's strategic economic resources?",
      answer: es
        ? "Malaui es uno de los países más dependientes del tabaco — es el 5to exportador mundial (~150,000 ton/año, ~50-60% de divisas). El té (Thyolo/Mulanje ~50,000 ton/año) es significativo. El uranio en Kayelekera (Paladin Energy — potencialmente reanudable, depósitos +100M lb U3O8) es estratégico. El macadamia (Malaui es 3ro a nivel mundial), el café y el azúcar (Illovo Sugar) son otros cultivos de exportación. La pesca del Lago Malaui (~60,000-100,000 ton/año) es crítica para la seguridad alimentaria. El PIB per cápita es ~$600."
        : "Malawi is one of the world's most tobacco-dependent countries — it is the world's 5th largest exporter (~150,000 tons/year, ~50-60% of foreign exchange). Tea (Thyolo/Mulanje ~50,000 tons/year) is significant. Uranium at Kayelekera (Paladin Energy — potentially resumable, deposits +100M lbs U3O8) is strategic. Macadamia (Malawi is world's 3rd largest), coffee, and sugar (Illovo Sugar) are other export crops. Lake Malawi fishing (~60,000-100,000 tons/year) is critical for food security. GDP per capita is ~$600.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Malaui?"
        : "What is the legal and procurement framework in Malawi?",
      answer: es
        ? "La Public Procurement and Disposal of Assets Authority (PPDA) y la PPDA Act 2017 rigen las adquisiciones públicas. La Electronic Transactions and Cyber Security Act 2016 regula la ciberseguridad y datos. La Malawi Communications Regulatory Authority (MACRA) supervisa telecomunicaciones. La moneda es el Kwacha malaui (MWK) bajo la Reserve Bank of Malawi (RBM). Financiadores clave: Banco Mundial (IDA), AfDB, USAID, DFID/FCDO UK, UE y donantes nórdicos. Malaui es miembro de SADC y COMESA."
        : "The Public Procurement and Disposal of Assets Authority (PPDA) and PPDA Act 2017 govern public procurement. The Electronic Transactions and Cyber Security Act 2016 regulates cybersecurity and data. The Malawi Communications Regulatory Authority (MACRA) supervises telecommunications. Currency is the Malawian kwacha (MWK) under the Reserve Bank of Malawi (RBM). Key financiers: World Bank (IDA), AfDB, USAID, DFID/FCDO UK, EU, and Nordic donors. Malawi is a member of SADC and COMESA.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Malaui?"
        : "How does KabatOne support public safety in Malawi?",
      answer: es
        ? "KabatOne integra vigilancia de vídeo, despacho CAD y awareness situacional para operaciones MDF/MPS en los 28 distritos/3 regiones. Los módulos de seguridad lacustre monitorean el Lago Malaui, el transporte (MV Ilala) y la pesquería. El sistema de gestión de fronteras cubre los corredores Tanzania, Mozambique y Zambia. Los módulos de protección de recursos aseguran las operaciones de tabaco (Kamuzu Banda era exportador), té y la mina de uranio de Kayelekera. La arquitectura es adaptable a entornos de baja conectividad en zonas rurales."
        : "KabatOne integrates video surveillance, CAD dispatch, and situational awareness for MDF/MPS operations across all 28 districts/3 regions. Lake security modules monitor Lake Malawi, lake transport (MV Ilala), and the fishery. Border management system covers Tanzania, Mozambique, and Zambia corridors. Resource protection modules secure tobacco, tea, and the Kayelekera uranium mine operations. Architecture adapts to low-connectivity environments in rural areas.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources" : "https://kabatone.com/resources" },
    { name: es ? "Software de Seguridad Pública para Malaui" : "Public Safety Software for Malawi", url: canonical },
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
              {es ? "Malaui · África Austral · Lago Malaui · Tabaco · SADC" : "Malawi · Southern Africa · Lake Malawi · Tobacco · SADC"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es ? "Software de Seguridad Pública para Malaui" : "Public Safety Software for Malawi"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {es
                ? "Plataforma unificada para MDF, Servicio de Policía, seguridad del Lago Malaui y protección de recursos estratégicos de tabaco, uranio y té — el corazón de África Austral en la región SADC."
                : "Unified platform for MDF, Police Service, Lake Malawi security, and protection of tobacco, uranium, and tea strategic resources — the heart of Southern Africa in the SADC region."}
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
                  <li><strong>MDF</strong> — {es ? "~10,000-12,000 efectivos (ejército/marina lago/aviación)" : "~10,000-12,000 personnel (army/lake navy/air wing)"}</li>
                  <li><strong>MPS</strong> — {es ? "Servicio de Policía ~14,000 — 28 distritos/3 regiones" : "Police Service ~14,000 — 28 districts/3 regions"}</li>
                  <li><strong>NIA</strong> — {es ? "Agencia Nacional de Inteligencia" : "National Intelligence Agency"}</li>
                  <li>{es ? "Misiones ONU: MINUSMA, MONUSCO" : "UN missions: MINUSMA, MONUSCO"}</li>
                  <li>{es ? "Presidente Chakwera (2020) — sistema presidencial" : "President Chakwera (2020) — presidential system"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Lago Malaui Estratégico" : "Strategic Lake Malawi"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? "9no lago más grande del mundo / 3ro más profundo de Africa (706 m)" : "World's 9th largest lake / Africa's 3rd deepest (706 m)"}</li>
                  <li>{es ? "Chambo (tilapia) — principal proteína nacional" : "Chambo (tilapia) — main national protein source"}</li>
                  <li>{es ? "Disputa de soberanía con Tanzania (parte del lago)" : "Sovereignty dispute with Tanzania (part of lake)"}</li>
                  <li>{es ? "MV Ilala — transporte lacustre a comunidades aisladas" : "MV Ilala — lake transport to isolated communities"}</li>
                  <li>{es ? "Miembro SADC + COMESA" : "SADC + COMESA member"}</li>
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
                  <li>{es ? "Tabaco — 5to exportador mundial (~150K ton/año, ~55% divisas)" : "Tobacco — world's 5th exporter (~150K tons/yr, ~55% forex)"}</li>
                  <li>{es ? "Té — Thyolo/Mulanje ~50,000 ton/año" : "Tea — Thyolo/Mulanje ~50,000 tons/year"}</li>
                  <li>{es ? "Uranio — Kayelekera/Paladin (+100M lb U3O8)" : "Uranium — Kayelekera/Paladin (+100M lbs U3O8)"}</li>
                  <li>{es ? "Macadamia — 3ro mundial; azúcar Illovo" : "Macadamia — world 3rd; Illovo sugar"}</li>
                  <li>{es ? "Pesca Lago Malaui ~60,000-100,000 ton/año" : "Lake Malawi fishing ~60,000-100,000 tons/year"}</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-3">{es ? "Infraestructura" : "Infrastructure"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Puerto de Chipoka + Nkhata Bay (lago)" : "Port of Chipoka + Nkhata Bay (lake)"}</li>
                  <li>Kamuzu International Airport (LLW)</li>
                  <li>{es ? "Ferrocarril: Central East African Railway (CEAR)" : "Railway: Central East African Railway (CEAR)"}</li>
                  <li>{es ? "ESCOM — electricidad (30% cobertura)" : "ESCOM — electricity (30% coverage)"}</li>
                  <li>{es ? "Móvil: Airtel/TNM; MACRA regulador" : "Mobile: Airtel/TNM; MACRA regulator"}</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-900 mb-3">{es ? "Marco Legal" : "Legal Framework"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>PPDA — {es ? "PPDA Act 2017 (adquisiciones)" : "PPDA Act 2017 (procurement)"}</li>
                  <li>{es ? "Electronic Transactions/Cyber Security Act 2016" : "Electronic Transactions/Cyber Security Act 2016"}</li>
                  <li>RBM — {es ? "Kwacha malaui (MWK)" : "Malawian kwacha (MWK)"}</li>
                  <li>MACRA — {es ? "regulador telecomunicaciones" : "telecommunications regulator"}</li>
                  <li>{es ? "BM/AfDB/USAID/FCDO UK/UE/Nórdicos" : "WB/AfDB/USAID/FCDO UK/EU/Nordics"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne Capabilities */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Capacidades KabatOne para Malaui" : "KabatOne Capabilities for Malawi"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad del Lago y Fronteras" : "Lake Security & Border Management"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Módulos de seguridad lacustre para monitoreo del Lago Malaui, puertos de Chipoka/Nkhata Bay y control de transporte MV Ilala" : "Lake security modules for Lake Malawi monitoring, Chipoka/Nkhata Bay ports, and MV Ilala transport control"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Sistema de gestión de fronteras para corredores Tanzania (norte), Mozambique (sur/este) y Zambia (oeste)" : "Border management system for Tanzania (north), Mozambique (south/east), and Zambia (west) corridors"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Módulos de protección de recursos para la mina de uranio de Kayelekera (Paladin Energy) y plantaciones de té de Thyolo/Mulanje" : "Resource protection modules for Kayelekera uranium mine (Paladin Energy) and Thyolo/Mulanje tea estates"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Coordinación SADC para gestión regional de fronteras y marcos de seguridad de la comunidad del sur de Africa" : "SADC coordination for regional border management and Southern Africa community security frameworks"}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Nacional y Operacional" : "National & Operational Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Despacho CAD para MDF/MPS en los 28 distritos/3 regiones con gestión de incidentes y recursos" : "CAD dispatch for MDF/MPS across 28 districts/3 regions with incident and resource management"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Vigilancia de vídeo urbana para Lilongwe (capital), Blantyre (comercial) y Mzuzu (norte)" : "Urban video surveillance for Lilongwe (capital), Blantyre (commercial), and Mzuzu (north)"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Sistema de protección de mercados de tabaco (ADMARC) — control de la principal fuente de divisas del país" : "Tobacco market protection system (ADMARC) — controlling the country's main source of foreign exchange"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Arquitectura offline-capable para zonas rurales con baja conectividad (~85% rural)" : "Offline-capable architecture for rural areas with low connectivity (~85% rural)"}</span></li>
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
          h2={es ? "¿Listo para modernizar la seguridad pública en Malaui?" : "Ready to modernize public safety in Malawi?"}
          subtitle={es ? "Contáctenos para una demostración adaptada a las necesidades de seguridad de Malaui." : "Contact us for a demonstration tailored to Malawi's security needs."}
        />
      </main>
      <Footer es={es} />
    </>
  );
}
