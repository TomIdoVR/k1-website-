import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareBotswana", locale);
}

export default async function PublicSafetySoftwareBotswanaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Botsuana | BDF/BPS, Diamantes De Beers, Kalahari y SADC – KabatOne"
    : "Public Safety Software for Botswana | BDF/BPS, De Beers Diamonds, Kalahari & SADC – KabatOne";
  const description = es
    ? "KabatOne entrega plataforma de seguridad pública para la Fuerza de Defensa de Botsuana (BDF), Servicio de Policía, protección de las minas de diamantes De Beers/Debswana, gestión del Kalahari y coordinación SADC."
    : "KabatOne delivers public safety platform for Botswana Defence Force (BDF), Police Service, De Beers/Debswana diamond mine protection, Kalahari management, and SADC coordination.";
  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-botswana/"
    : "https://kabatone.com/resources/public-safety-software-botswana/";

  const faqs = [
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Botsuana?"
        : "What are the main security forces in Botswana?",
      answer: es
        ? "La Fuerza de Defensa de Botsuana (BDF) cuenta con aproximadamente 9,000-10,000 efectivos y es considerada una de las fuerzas más profesionales de Africa subsahariana. El Servicio de Policía y Gestión de Prisiones de Botsuana (BPPS) opera en los 16 distritos. La Agencia de Inteligencia y Seguridad (DISS) coordina la inteligencia nacional. La Guardia de Fronteras (Border Control) y el Servicio de Aduanas e Impuestos (BURS) controlan los corredores transfronterizos. Botsuana es una democracia multipartidista estable — el presidente Duma Boko fue elegido en 2024."
        : "The Botswana Defence Force (BDF) numbers approximately 9,000-10,000 personnel and is considered one of sub-Saharan Africa's most professional forces. The Botswana Police and Prison Service (BPPS) operates across 16 districts. The Directorate of Intelligence and Security Services (DISS) coordinates national intelligence. Border Control and the Botswana Unified Revenue Service (BURS) manage cross-border corridors. Botswana is a stable multiparty democracy — President Duma Boko was elected in 2024.",
    },
    {
      question: es
        ? "¿Por qué los diamantes son críticos para la seguridad de Botsuana?"
        : "Why are diamonds critical to Botswana's security?",
      answer: es
        ? "Botsuana es el mayor productor mundial de diamantes por valor — los diamantes representan ~70-80% de las exportaciones y ~40% del PIB. La empresa Debswana (50/50 gobierno/De Beers) opera las principales minas: Jwaneng (la mina de diamantes más valiosa del mundo), Orapa, Letlhakane y Damtshaa. La mina de Jwaneng sola produce ~7-8 millones de quilates/año. El Rough Diamond Trading Company (DTCB) y el Okavango Diamond Company (ODC) son entidades estatales de comercialización. La seguridad de las instalaciones mineras es crítica para la economía nacional y requiere vigilancia sofisticada."
        : "Botswana is the world's largest diamond producer by value — diamonds represent ~70-80% of exports and ~40% of GDP. Debswana (50/50 government/De Beers) operates the main mines: Jwaneng (world's most valuable diamond mine), Orapa, Letlhakane, and Damtshaa. The Jwaneng mine alone produces ~7-8 million carats/year. The Diamond Trading Company Botswana (DTCB) and Okavango Diamond Company (ODC) are state marketing entities. Security of mining facilities is critical to the national economy and requires sophisticated surveillance.",
    },
    {
      question: es
        ? "¿Cuáles son los otros recursos estratégicos y desafíos de seguridad de Botsuana?"
        : "What are Botswana's other strategic resources and security challenges?",
      answer: es
        ? "El cobre-níquel de Selebi Phikwe (BCL — ahora cerrada, en proceso de reestructuración) y el carbón de Mmamabula/Morupule son importantes. El turismo de vida silvestre (Delta del Okavango — Patrimonio UNESCO, Chobe) representa ~10% del PIB y requiere protección anti-caza furtiva. El marfil y la caza furtiva de elefantes (Botsuana tiene ~130,000 elefantes — la mayor población mundial) es un desafío creciente. La frontera con Zimbabwe (834 km) presenta presiones migratorias. Los corredores de tráfico de drogas de la región SADC atraviesan el territorio."
        : "Copper-nickel from Selebi Phikwe (BCL — now closed, being restructured) and coal from Mmamabula/Morupule are important. Wildlife tourism (Okavango Delta — UNESCO World Heritage, Chobe) represents ~10% of GDP and requires anti-poaching protection. Ivory and elephant poaching (Botswana has ~130,000 elephants — world's largest population) is a growing challenge. The Zimbabwe border (834 km) presents migration pressures. SADC region drug trafficking corridors cross the territory.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Botsuana?"
        : "What is the legal and procurement framework in Botswana?",
      answer: es
        ? "La Public Procurement and Asset Disposal Board (PPADB) y el Public Procurement and Asset Disposal Act (PPADA) rigen las adquisiciones. La Data Protection Act 2018 establece el marco de protección de datos personales. La BOCRA (Botswana Communications Regulatory Authority) supervisa telecomunicaciones. La moneda es el Pula botsuanés (BWP) bajo el Banco de Botsuana (BoB). Botsuana tiene una de las mejores calificaciones crediticias de Africa (Moody's Baa3). Financiadores: Banco Mundial (IBRD), AfDB, y principalmente inversión privada dada la solvencia del país."
        : "The Public Procurement and Asset Disposal Board (PPADB) and Public Procurement and Asset Disposal Act (PPADA) govern procurement. The Data Protection Act 2018 establishes the personal data protection framework. BOCRA (Botswana Communications Regulatory Authority) supervises telecommunications. Currency is the Botswana pula (BWP) under the Bank of Botswana (BoB). Botswana has one of Africa's best credit ratings (Moody's Baa3). Financiers: World Bank (IBRD), AfDB, and primarily private investment given the country's solvency.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Botsuana?"
        : "How does KabatOne support public safety in Botswana?",
      answer: es
        ? "KabatOne integra vigilancia de vídeo, despacho CAD y awareness situacional para operaciones BDF/BPPS en los 16 distritos. Los módulos de seguridad minera protegen las instalaciones de Debswana (Jwaneng, Orapa, Letlhakane) con vigilancia perimetral avanzada y control de acceso. El sistema anti-caza furtiva integra cámaras, analítica de IA y coordinación con rangers del DWNP en el Delta del Okavango y Chobe. El sistema de gestión de fronteras cubre los corredores Zimbabwe, Sudáfrica, Namibia y Zambia. La plataforma cumple con la Data Protection Act 2018."
        : "KabatOne integrates video surveillance, CAD dispatch, and situational awareness for BDF/BPPS operations across all 16 districts. Mining security modules protect Debswana facilities (Jwaneng, Orapa, Letlhakane) with advanced perimeter surveillance and access control. The anti-poaching system integrates cameras, AI analytics, and coordination with DWNP rangers in the Okavango Delta and Chobe. Border management system covers Zimbabwe, South Africa, Namibia, and Zambia corridors. Platform complies with the Data Protection Act 2018.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/" },
    { name: es ? "Software de Seguridad Pública para Botsuana" : "Public Safety Software for Botswana", url: canonical },
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
              {es ? "Botsuana · Africa Austral · Diamantes Debswana · Kalahari · Okavango · SADC" : "Botswana · Southern Africa · Debswana Diamonds · Kalahari · Okavango · SADC"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es ? "Software de Seguridad Pública para Botsuana" : "Public Safety Software for Botswana"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {es
                ? "Plataforma unificada para BDF, Policía, protección de minas de diamantes Debswana y anti-caza furtiva en el Delta del Okavango — el mayor productor mundial de diamantes por valor."
                : "Unified platform for BDF, Police, Debswana diamond mine protection, and anti-poaching in the Okavango Delta — world's largest diamond producer by value."}
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
                  <li><strong>BDF</strong> — {es ? "~9,000-10,000 efectivos — una de las fuerzas más profesionales de Africa" : "~9,000-10,000 personnel — one of Africa's most professional forces"}</li>
                  <li><strong>BPPS</strong> — {es ? "Servicio de Policía y Prisiones — 16 distritos" : "Police and Prison Service — 16 districts"}</li>
                  <li><strong>DISS</strong> — {es ? "Dirección de Inteligencia y Seguridad" : "Directorate of Intelligence and Security Services"}</li>
                  <li><strong>BURS</strong> — {es ? "Aduanas e Impuestos + Control Fronteras" : "Customs Revenue + Border Control"}</li>
                  <li>{es ? "Democracia estable — presidente Duma Boko (2024)" : "Stable democracy — President Duma Boko (2024)"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Diamantes y Economía" : "Diamonds & Economy"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? "Debswana — mayor productor mundial por valor (~70-80% exportaciones)" : "Debswana — world's largest producer by value (~70-80% exports)"}</li>
                  <li>{es ? "Jwaneng — mina de diamantes más valiosa del mundo" : "Jwaneng — world's most valuable diamond mine"}</li>
                  <li>{es ? "~130,000 elefantes — mayor población mundial (caza furtiva crítica)" : "~130,000 elephants — world's largest population (critical poaching threat)"}</li>
                  <li>{es ? "Delta Okavango — Patrimonio UNESCO + turismo ~10% PIB" : "Okavango Delta — UNESCO Heritage + tourism ~10% GDP"}</li>
                  <li>{es ? "Mejor calificación crediticia de Africa (Moody's Baa3)" : "Africa's best credit rating (Moody's Baa3)"}</li>
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
                  <li>{es ? "Diamantes Debswana — Jwaneng/Orapa/Letlhakane/Damtshaa" : "Debswana diamonds — Jwaneng/Orapa/Letlhakane/Damtshaa"}</li>
                  <li>{es ? "Carbón — Morupule/Mmamabula (central eléctrica BPC)" : "Coal — Morupule/Mmamabula (BPC power station)"}</li>
                  <li>{es ? "Cobre-níquel — Selebi Phikwe (BCL en reestructuración)" : "Copper-nickel — Selebi Phikwe (BCL restructuring)"}</li>
                  <li>{es ? "Turismo wildlife — Okavango Delta/Chobe/CKGR" : "Wildlife tourism — Okavango Delta/Chobe/CKGR"}</li>
                  <li>{es ? "Ganado vacuno — exportaciones carne UE (BAMB)" : "Beef cattle — EU meat exports (BAMB)"}</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-3">{es ? "Infraestructura" : "Infrastructure"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Sir Seretse Khama Airport (GBE)</li>
                  <li>{es ? "Red vial excelente para Africa (~25,000 km pavimentados)" : "Excellent road network for Africa (~25,000 km paved)"}</li>
                  <li>{es ? "Ferrocarril: Botswana Railways (Ramokgwebana-Lobatse)" : "Railway: Botswana Railways (Ramokgwebana-Lobatse)"}</li>
                  <li>{es ? "BPC — electricidad (red interconectada SAPP/SADC)" : "BPC — electricity (SAPP/SADC interconnected grid)"}</li>
                  <li>{es ? "Móvil: Mascom/Orange/BTC; BOCRA regulador" : "Mobile: Mascom/Orange/BTC; BOCRA regulator"}</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-900 mb-3">{es ? "Marco Legal" : "Legal Framework"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>PPADB — {es ? "PPADA (adquisiciones públicas)" : "PPADA (public procurement)"}</li>
                  <li>{es ? "Data Protection Act 2018" : "Data Protection Act 2018"}</li>
                  <li>BOCRA — {es ? "regulación telecomunicaciones" : "telecommunications regulator"}</li>
                  <li>BoB — {es ? "Pula botsuanés (BWP)" : "Botswana pula (BWP)"}</li>
                  <li>{es ? "BM (IBRD)/AfDB + inversión privada" : "WB (IBRD)/AfDB + private investment"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne Capabilities */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Capacidades KabatOne para Botsuana" : "KabatOne Capabilities for Botswana"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Protección Minera y Anti-Caza Furtiva" : "Mining Protection & Anti-Poaching"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Módulos de seguridad minera para minas Debswana (Jwaneng, Orapa, Letlhakane) con vigilancia perimetral IA y control de acceso avanzado" : "Mining security modules for Debswana mines (Jwaneng, Orapa, Letlhakane) with AI perimeter surveillance and advanced access control"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Sistema anti-caza furtiva integrado con cámaras, analítica IA y coordinación en tiempo real con rangers del DWNP en Okavango Delta y Chobe" : "Anti-poaching system integrating cameras, AI analytics, and real-time coordination with DWNP rangers in Okavango Delta and Chobe"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Gestión de fronteras SADC para corredores Zimbabwe (834 km), Sudáfrica, Namibia y Zambia — control de tráfico de drogas y contrabando" : "SADC border management for Zimbabwe (834 km), South Africa, Namibia, and Zambia corridors — drug trafficking and smuggling control"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Protección de infraestructura crítica: tuberías, BPC/Morupule Central Eléctrica, Botswana Railways, Sir Seretse Khama Airport" : "Critical infrastructure protection: pipelines, BPC/Morupule power station, Botswana Railways, Sir Seretse Khama Airport"}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Nacional y Operacional" : "National & Operational Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Despacho CAD para BDF/BPPS en los 16 distritos con gestión de incidentes, recursos y respuesta de emergencia" : "CAD dispatch for BDF/BPPS across 16 districts with incident, resource, and emergency response management"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Vigilancia de vídeo urbana para Gaborone (capital), Francistown, Maun (gateway Okavango) y Kasane (Chobe)" : "Urban video surveillance for Gaborone (capital), Francistown, Maun (Okavango gateway), and Kasane (Chobe)"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Plataforma de inteligencia criminal para DISS — análisis de amenazas transfronterizas SADC y corredores de tráfico de drogas" : "Criminal intelligence platform for DISS — analysis of SADC cross-border threats and drug trafficking corridors"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Plataforma cumple con Data Protection Act 2018 y marcos de ciberseguridad del gobierno de Botsuana" : "Platform complies with Data Protection Act 2018 and Botswana government cybersecurity frameworks"}</span></li>
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
          h2={es ? "¿Listo para modernizar la seguridad pública en Botsuana?" : "Ready to modernize public safety in Botswana?"}
          subtitle={es ? "Contáctenos para una demostración adaptada a las necesidades de seguridad de Botsuana." : "Contact us for a demonstration tailored to Botswana's security needs."}
        />
      </main>
      <Footer es={es} />
    </>
  );
}
