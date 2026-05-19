import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareNamibia", locale);
}

export default async function PublicSafetySoftwareNamibiaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Namibia | NDF/NPF, Uranio Rossing/Husab, Costa Atlántica y SADC – KabatOne"
    : "Public Safety Software for Namibia | NDF/NPF, Rossing/Husab Uranium, Atlantic Coast & SADC – KabatOne";
  const description = es
    ? "KabatOne entrega plataforma de seguridad pública para la Fuerza de Defensa de Namibia (NDF), Policía Nacional, protección de minas de uranio Rossing/Husab, seguridad marítima del Atlántico y gestión de fronteras SADC."
    : "KabatOne delivers public safety platform for Namibia Defence Force (NDF), National Police, Rossing/Husab uranium mine protection, Atlantic maritime security, and SADC border management.";
  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-namibia/"
    : "https://kabatone.com/resources/public-safety-software-namibia/";

  const faqs = [
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Namibia?"
        : "What are the main security forces in Namibia?",
      answer: es
        ? "La Fuerza de Defensa de Namibia (NDF) cuenta con aproximadamente 9,000-10,000 efectivos (ejército, marina y aviación). La Policía Nacional de Namibia (NPF) opera en 14 regiones. La Agencia Central de Inteligencia (NIS) coordina la inteligencia. El Servicio de Inmigración, Aduanas e Impuestos Especiales (NISS/NAMRA) controla las fronteras. Namibia fue independiente de Sudáfrica en 1990 y ha mantenido estabilidad democrática desde entonces. El presidente Netumbo Nandi-Ndaitwah fue elegida en 2024 (primera presidenta mujer de Namibia y de Africa del Sur)."
        : "The Namibia Defence Force (NDF) numbers approximately 9,000-10,000 personnel (army, navy, and air force). The Namibia Police Force (NPF) operates across 14 regions. The Namibia Central Intelligence Service (NIS) coordinates intelligence. The Immigration, Customs and Excise Service (NISS/NAMRA) manages borders. Namibia achieved independence from South Africa in 1990 and has maintained democratic stability since. President Netumbo Nandi-Ndaitwah was elected in 2024 (Namibia's and Southern Africa's first female president).",
    },
    {
      question: es
        ? "¿Por qué el uranio es estratégico para Namibia?"
        : "Why is uranium strategic for Namibia?",
      answer: es
        ? "Namibia es el 4to productor mundial de uranio (~5,000-6,000 ton U3O8/año). Las principales minas son: Rossing (Rio Tinto — la mina de uranio a cielo abierto más antigua del mundo, en operación desde 1976), Husab (Swakop Uranium/CGNPC China — la 2da mina de uranio más grande del mundo por capacidad), y Langer Heinrich (Paladin Energy — potencialmente reanudable). El uranio representa ~20-25% de las exportaciones. La Autoridad de Minería Nuclear de Namibia (NNRA) regula el sector. La protección de las instalaciones nucleares/mineras es crítica para la seguridad nacional."
        : "Namibia is the world's 4th largest uranium producer (~5,000-6,000 tons U3O8/year). Main mines: Rossing (Rio Tinto — the world's oldest open-pit uranium mine, operating since 1976), Husab (Swakop Uranium/CGNPC China — the world's 2nd largest uranium mine by capacity), and Langer Heinrich (Paladin Energy — potentially resumable). Uranium represents ~20-25% of exports. The Namibian Uranium Association (NUA) and Nuclear Regulatory Authority (NNRA) regulate the sector. Protection of nuclear/mining facilities is critical for national security.",
    },
    {
      question: es
        ? "¿Cuáles son los otros recursos estratégicos y desafíos de seguridad de Namibia?"
        : "What are Namibia's other strategic resources and security challenges?",
      answer: es
        ? "Namibia posee importantes reservas de diamantes marinos (Namdeb Diamond Corporation — joint venture gobierno/De Beers, y Debmarine Namibia para minería submarina). El cobre (Tsumeb), el manganeso y el zinc son importantes. El Puerto de Walvis Bay es el hub regional de transporte para SADC — punto de acceso para Zambia, Zimbabwe, Botsuana y DRC. El gas natural offshore en el Cuenca Orange (TotalEnergies/Shell — descubrimiento 2022 de ~11,000 millones de barriles de petróleo equivalente) es una oportunidad transformacional. La pesca (ZEE de 200 nm — 1.5M ton/año) es significativa. El turismo (Namib, Etosha) es creciente."
        : "Namibia has significant marine diamond reserves (Namdeb Diamond Corporation — government/De Beers joint venture, and Debmarine Namibia for undersea mining). Copper (Tsumeb), manganese, and zinc are important. The Port of Walvis Bay is the regional transport hub for SADC — access point for Zambia, Zimbabwe, Botswana, and DRC. Offshore natural gas in the Orange Basin (TotalEnergies/Shell — 2022 discovery of ~11 billion barrels oil equivalent) is a transformational opportunity. Fishing (200 nm EEZ — 1.5M tons/year) is significant. Tourism (Namib, Etosha) is growing.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Namibia?"
        : "What is the legal and procurement framework in Namibia?",
      answer: es
        ? "La Public Procurement Act 15 de 2015 y la Agencia de Adquisiciones del Gobierno Central (CPA) rigen las adquisiciones públicas. La Ley de Protección de Información Personal (POPIA-equivalente en proceso) y la Ley de Comunicaciones Electrónicas y Transacciones (ECT Act) regulan datos y ciberseguridad. La CRAN (Communications Regulatory Authority of Namibia) supervisa telecomunicaciones. La moneda es el Dólar namibio (NAD) vinculado al Rand sudafricano (ZAR) bajo el Banco de Namibia (BoN). Namibia es miembro de SADC y del Área Monetaria Común (CMA)."
        : "The Public Procurement Act 15 of 2015 and Central Procurement Agency (CPA) govern public procurement. The Personal Information Protection Act (POPIA-equivalent in progress) and Electronic Communications and Transactions (ECT) Act regulate data and cybersecurity. CRAN (Communications Regulatory Authority of Namibia) supervises telecommunications. Currency is the Namibian dollar (NAD) pegged to the South African rand (ZAR) under the Bank of Namibia (BoN). Namibia is a member of SADC and the Common Monetary Area (CMA).",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Namibia?"
        : "How does KabatOne support public safety in Namibia?",
      answer: es
        ? "KabatOne integra vigilancia de vídeo, despacho CAD y awareness situacional para operaciones NDF/NPF en las 14 regiones. Los módulos de seguridad nuclear/minera protegen las instalaciones de Rossing y Husab con vigilancia perimetral avanzada. El sistema de seguridad portuaria cubre el Puerto de Walvis Bay (hub SADC). Los módulos de seguridad marítima monitoran la ZEE de 200 nm y las operaciones offshore de gas del Cuenca Orange. El sistema anti-caza furtiva protege rinocerontes y elefantes en Etosha y áreas de conservación. La gestión de fronteras cubre los corredores Sudáfrica, Botsuana, Zambia, Angola y Zimbabwe."
        : "KabatOne integrates video surveillance, CAD dispatch, and situational awareness for NDF/NPF operations across all 14 regions. Nuclear/mining security modules protect Rossing and Husab facilities with advanced perimeter surveillance. Port security system covers Port of Walvis Bay (SADC hub). Maritime security modules monitor the 200 nm EEZ and Orange Basin offshore gas operations. Anti-poaching system protects rhinos and elephants in Etosha and conservation areas. Border management covers South Africa, Botswana, Zambia, Angola, and Zimbabwe corridors.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/" },
    { name: es ? "Software de Seguridad Pública para Namibia" : "Public Safety Software for Namibia", url: canonical },
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
              {es ? "Namibia · Africa Austral · Uranio · Diamantes Marinos · Walvis Bay Hub · SADC" : "Namibia · Southern Africa · Uranium · Marine Diamonds · Walvis Bay Hub · SADC"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es ? "Software de Seguridad Pública para Namibia" : "Public Safety Software for Namibia"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {es
                ? "Plataforma unificada para NDF, Policía Nacional, protección de minas de uranio Rossing/Husab y seguridad del Puerto de Walvis Bay — hub de transporte SADC y 4to productor mundial de uranio."
                : "Unified platform for NDF, National Police, Rossing/Husab uranium mine protection, and Port of Walvis Bay security — SADC transport hub and world's 4th largest uranium producer."}
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
                  <li><strong>NDF</strong> — {es ? "~9,000-10,000 efectivos (ejército/marina/aviación)" : "~9,000-10,000 personnel (army/navy/air force)"}</li>
                  <li><strong>NPF</strong> — {es ? "Policía Nacional — 14 regiones" : "National Police Force — 14 regions"}</li>
                  <li><strong>NIS</strong> — {es ? "Servicio Central de Inteligencia" : "Central Intelligence Service"}</li>
                  <li><strong>NAMRA</strong> — {es ? "Aduanas + NISS Inmigración" : "Customs + NISS Immigration"}</li>
                  <li>{es ? "Presidenta Nandi-Ndaitwah (2024) — 1ra mujer presidenta SADC" : "President Nandi-Ndaitwah (2024) — 1st female SADC president"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Posición Estratégica" : "Strategic Position"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? "4to productor mundial de uranio (~5,000-6,000 ton U3O8/año)" : "World's 4th largest uranium producer (~5,000-6,000 tons U3O8/year)"}</li>
                  <li>{es ? "Puerto de Walvis Bay — hub de transporte SADC para landlocked" : "Port of Walvis Bay — SADC transport hub for landlocked states"}</li>
                  <li>{es ? "Cuenca Orange — petróleo ~11,000M bbl eq. (TotalEnergies/Shell)" : "Orange Basin — oil ~11B bbl eq. (TotalEnergies/Shell)"}</li>
                  <li>{es ? "ZEE 200 nm — pesca ~1.5M ton/año" : "200 nm EEZ — fishing ~1.5M tons/year"}</li>
                  <li>{es ? "Miembro SADC + CMA (Rand monetario)" : "SADC + CMA (Rand monetary area) member"}</li>
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
                  <li>{es ? "Uranio — Rossing (Rio Tinto)/Husab (CGNPC) — 4to mundial" : "Uranium — Rossing (Rio Tinto)/Husab (CGNPC) — world 4th"}</li>
                  <li>{es ? "Diamantes marinos — Namdeb/Debmarine (govt/De Beers)" : "Marine diamonds — Namdeb/Debmarine (govt/De Beers)"}</li>
                  <li>{es ? "Gas offshore — Cuenca Orange TotalEnergies/Shell ~11B bbl eq." : "Offshore gas — Orange Basin TotalEnergies/Shell ~11B bbl eq."}</li>
                  <li>{es ? "Cobre/manganeso/zinc — Tsumeb" : "Copper/manganese/zinc — Tsumeb"}</li>
                  <li>{es ? "Pesca — ZEE 200 nm ~1.5M ton/año" : "Fishing — 200 nm EEZ ~1.5M tons/year"}</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-3">{es ? "Infraestructura" : "Infrastructure"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Puerto de Walvis Bay — hub SADC (landlocked access)" : "Port of Walvis Bay — SADC hub (landlocked access)"}</li>
                  <li>Hosea Kutako International Airport (WDH)</li>
                  <li>{es ? "TransNamib Railway + Trans-Kalahari Corridor" : "TransNamib Railway + Trans-Kalahari Corridor"}</li>
                  <li>{es ? "NamPower — electricidad + red SAPP/SADC" : "NamPower — electricity + SAPP/SADC grid"}</li>
                  <li>{es ? "Móvil: MTC/Telecom Namibia/TN Mobile; CRAN" : "Mobile: MTC/Telecom Namibia/TN Mobile; CRAN"}</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-900 mb-3">{es ? "Marco Legal" : "Legal Framework"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>CPA — {es ? "Public Procurement Act 15/2015" : "Public Procurement Act 15/2015"}</li>
                  <li>NNRA — {es ? "Autoridad Nuclear Namibia" : "Nuclear Regulatory Authority"}</li>
                  <li>CRAN — {es ? "regulación telecomunicaciones" : "telecommunications regulator"}</li>
                  <li>BoN — {es ? "Dólar namibio (NAD) vinculado ZAR" : "Namibian dollar (NAD) pegged to ZAR"}</li>
                  <li>{es ? "BM/AfDB/USAID/UE; miembro SADC/CMA" : "WB/AfDB/USAID/EU; SADC/CMA member"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne Capabilities */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Capacidades KabatOne para Namibia" : "KabatOne Capabilities for Namibia"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Nuclear-Minera y Portuaria" : "Nuclear-Mining & Port Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Módulos de seguridad nuclear para minas Rossing (Rio Tinto) y Husab (CGNPC) — vigilancia perimetral IA, control de acceso y detección de intrusión avanzada" : "Nuclear security modules for Rossing (Rio Tinto) and Husab (CGNPC) mines — AI perimeter surveillance, access control, and advanced intrusion detection"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Sistema de seguridad portuaria para el Puerto de Walvis Bay — hub de transporte SADC para Zambia, Zimbabwe, Botsuana y DRC" : "Port security system for Port of Walvis Bay — SADC transport hub for Zambia, Zimbabwe, Botswana, and DRC"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Plataforma marítima para ZEE 200 nm, operaciones offshore gas Cuenca Orange y seguridad minería submarina Debmarine" : "Maritime platform for 200 nm EEZ, Orange Basin offshore gas operations, and Debmarine undersea mining security"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Gestión de fronteras para corredores Angola (norte), Sudáfrica, Botsuana y Zambia — control Trans-Kalahari Corridor" : "Border management for Angola (north), South Africa, Botswana, and Zambia corridors — Trans-Kalahari Corridor control"}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Nacional y Ambiental" : "National & Environmental Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Despacho CAD para NDF/NPF en las 14 regiones con gestión de incidentes, recursos y respuesta de emergencia" : "CAD dispatch for NDF/NPF across 14 regions with incident, resource, and emergency response management"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Vigilancia de vídeo para Windhoek (capital), Walvis Bay, Swakopmund y corredores de transporte TransNamib" : "Video surveillance for Windhoek (capital), Walvis Bay, Swakopmund, and TransNamib transport corridors"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Sistema anti-caza furtiva para rinocerontes negros (Namibia tiene la mayor población silvestre) y elefantes en Etosha y áreas de conservación communal" : "Anti-poaching system for black rhinos (Namibia has the largest wild population) and elephants in Etosha and communal conservancies"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Plataforma cumple con NNRA (regulación nuclear), Public Procurement Act 2015 y ECT Act de ciberseguridad" : "Platform complies with NNRA (nuclear regulation), Public Procurement Act 2015, and ECT Act cybersecurity"}</span></li>
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
          h2={es ? "¿Listo para modernizar la seguridad pública en Namibia?" : "Ready to modernize public safety in Namibia?"}
          subtitle={es ? "Contáctenos para una demostración adaptada a las necesidades de seguridad de Namibia." : "Contact us for a demonstration tailored to Namibia's security needs."}
        />
      </main>
      <Footer es={es} />
    </>
  );
}
