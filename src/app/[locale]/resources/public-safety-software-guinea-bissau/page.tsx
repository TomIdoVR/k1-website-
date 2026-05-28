import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareGuineaBissau", locale);
}

export default async function PublicSafetySoftwareGuineaBissauPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Guinea-Bisáu | FARP/POP, Puerto de Bissau y Seguridad Marítima – KabatOne"
    : "Public Safety Software for Guinea-Bissau | FARP/POP, Port of Bissau & Maritime Security – KabatOne";
  const description = es
    ? "KabatOne entrega plataforma de seguridad pública para las Fuerzas Armadas de Guinea-Bisáu (FARP), Policía de Orden Público, Puerto de Bissau y control de las rutas de narcotráfico atlántico."
    : "KabatOne delivers public safety platform for the Guinea-Bissau Armed Forces (FARP), Public Order Police, Port of Bissau, and control of Atlantic drug trafficking routes.";
  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-guinea-bissau/"
    : "https://kabatone.com/resources/public-safety-software-guinea-bissau/";

  const faqs = [
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Guinea-Bisáu?"
        : "What are the main security forces in Guinea-Bissau?",
      answer: es
        ? "Las Fuerzas Armadas de Guinea-Bisáu (FARP) cuentan con aproximadamente 4,000-5,000 efectivos (ejército, marina, guardia nacional). La Policía de Orden Público (POP) opera en las 8 regiones. El Serviço de Informação e Segurança do Estado (SISE) coordina inteligencia. La Guardia Nacional y la Guardia Costera patrullan el archipiélago Bijagós (88 islas). Guinea-Bisáu ha sufrido 9 golpes de estado o intentos desde la independencia (1974), el más reciente en 2022."
        : "The Guinea-Bissau Armed Forces (FARP) number approximately 4,000-5,000 personnel (army, navy, national guard). The Public Order Police (POP) operates across 8 regions. The State Security and Intelligence Service (SISE) coordinates intelligence. The National Guard and Coast Guard patrol the Bijagos Archipelago (88 islands). Guinea-Bissau has experienced 9 coups or coup attempts since independence (1974), the most recent in 2022.",
    },
    {
      question: es
        ? "¿Por qué Guinea-Bisáu es crítica en el narcotráfico atlántico?"
        : "Why is Guinea-Bissau critical in Atlantic drug trafficking?",
      answer: es
        ? "Guinea-Bisáu es considerada el primer narco-estado africano por la DEA y UNODC. Las 88 islas del archipiélago Bijagós sirven como punto de transbordo de cocaína sudamericana (Colombia/Venezuela) hacia Europa. La debilidad institucional, la corrupción militar y política, y las costas prácticamente no vigiladas hacen imposible el control sin tecnología. Se estiman varios centenares de toneladas de cocaína transitando anualmente. La INTERPOL, UE (EUBAM Bissau) y EE.UU./DEA mantienen presencia en el país."
        : "Guinea-Bissau is considered Africa's first narco-state by the DEA and UNODC. The 88 Bijagos Archipelago islands serve as transshipment points for South American cocaine (Colombia/Venezuela) to Europe. Institutional weakness, military/political corruption, and virtually unmonitored coastlines make control impossible without technology. Hundreds of tons of cocaine are estimated to transit annually. INTERPOL, EU (EUBAM Bissau), and US/DEA maintain presence in the country.",
    },
    {
      question: es
        ? "¿Cuáles son los recursos económicos de Guinea-Bisáu?"
        : "What are Guinea-Bissau's economic resources?",
      answer: es
        ? "La economía depende principalmente del anacardo/marañón (cashew nuts) — Guinea-Bisáu es el 5to exportador mundial con ~250,000 toneladas anuales. El fosfato (yacimientos de Farim no desarrollados) tiene potencial. La pesca (ZEE de 200 nm) es significativa con acuerdos con la UE y China. El Puerto de Bissau gestiona exportaciones de anacardo. El turismo en el archipiélago Bijagós (UNESCO Reserva de Biosfera) tiene potencial. La economía es una de las más pobres del mundo (PIB per cápita ~$700)."
        : "The economy depends mainly on cashew nuts — Guinea-Bissau is the world's 5th largest exporter with ~250,000 tons annually. Phosphate deposits (undeveloped Farim deposits) have potential. Fishing (200 nm EEZ) is significant with EU and China agreements. Bissau Port handles cashew exports. Tourism in the Bijagos Archipelago (UNESCO Biosphere Reserve) has potential. The economy is one of the world's poorest (GDP per capita ~$700).",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Guinea-Bisáu?"
        : "What is the legal and procurement framework in Guinea-Bissau?",
      answer: es
        ? "El Code des Marchés Publics y la ARMP (Autoridade Reguladora dos Mercados Públicos) rigen las adquisiciones públicas. El marco de protección de datos sigue el modelo de la CEDEAO/UEMOA. El sector financiero está bajo el BCEAO (Banco Central de los Estados de África Occidental). Los financiadores principales incluyen el FMI (programas de emergencia frecuentes), Banco Mundial, AfDB, UE (EUBAM Bissau) y cooperación portuguesa (IPAD/Camões). Guinea-Bisáu usa el Franco CFA (XOF) y es miembro UEMOA."
        : "The Code des Marchés Publics and ARMP (Public Markets Regulatory Authority) govern public procurement. Data protection framework follows the ECOWAS/UEMOA model. The financial sector is under BCEAO (Central Bank of West African States). Main financiers include IMF (frequent emergency programs), World Bank, AfDB, EU (EUBAM Bissau), and Portuguese cooperation (IPAD/Camões). Guinea-Bissau uses CFA franc (XOF) and is a UEMOA member.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Guinea-Bisáu?"
        : "How does KabatOne support public safety in Guinea-Bissau?",
      answer: es
        ? "KabatOne integra vigilancia de vídeo, despacho CAD y awareness situacional para operaciones FARP/POP en las 8 regiones. Los módulos de seguridad marítima apoyan la guardia costera en el monitoreo del archipiélago Bijagós y la ZEE de 200 nm. El sistema de gestión de puertos cubre el Puerto de Bissau. La plataforma de inteligencia marítima se integra con INTERPOL y UNODC para seguimiento de embarcaciones sospechosas. La arquitectura es adaptable a entornos de baja conectividad."
        : "KabatOne integrates video surveillance, CAD dispatch, and situational awareness for FARP/POP operations across all 8 regions. Maritime security modules support the coast guard in monitoring the Bijagos Archipelago and 200 nm EEZ. Port management system covers Port of Bissau. Maritime intelligence platform integrates with INTERPOL and UNODC for suspicious vessel tracking. Architecture adapts to low-connectivity environments.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/" },
    { name: es ? "Software de Seguridad Pública para Guinea-Bisáu" : "Public Safety Software for Guinea-Bissau", url: canonical },
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
              {es ? "Guinea-Bisáu · África Occidental · Bijagós · Narcotráfico Atlántico" : "Guinea-Bissau · West Africa · Bijagos · Atlantic Drug Trafficking"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es ? "Software de Seguridad Pública para Guinea-Bisáu" : "Public Safety Software for Guinea-Bissau"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {es
                ? "Plataforma unificada para FARP, Policía POP, Puerto de Bissau y control marítimo del archipiélago Bijagós — nodo crítico en rutas de narcotráfico atlántico."
                : "Unified platform for FARP, POP Police, Port of Bissau, and maritime control of the Bijagos Archipelago — critical node in Atlantic drug trafficking routes."}
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
                  <li><strong>FARP</strong> — {es ? "~4,000-5,000 efectivos (ejército/marina/guardia)" : "~4,000-5,000 personnel (army/navy/national guard)"}</li>
                  <li><strong>POP</strong> — {es ? "Policía de Orden Público — 8 regiones" : "Public Order Police — 8 regions"}</li>
                  <li><strong>SISE</strong> — {es ? "Serviço de Informação e Segurança do Estado" : "State Security and Intelligence Service"}</li>
                  <li><strong>{es ? "Guardia Costera" : "Coast Guard"}</strong> — {es ? "Archipiélago Bijagós 88 islas / ZEE 200 nm" : "Bijagos Archipelago 88 islands / 200 nm EEZ"}</li>
                  <li>{es ? "9 golpes o intentos desde 1974 — inestabilidad política" : "9 coups or attempts since 1974 — political instability"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Desafío Narcotráfico Atlántico" : "Atlantic Drug Trafficking Challenge"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? "DEA/UNODC: 1er narco-estado de África" : "DEA/UNODC: Africa's 1st narco-state"}</li>
                  <li>{es ? "Bijagós — transbordo cocaína Colombia/Venezuela → Europa" : "Bijagos — cocaine transshipment Colombia/Venezuela → Europe"}</li>
                  <li>{es ? "Cientos de toneladas/año estimadas en tránsito" : "Hundreds of tons/year estimated in transit"}</li>
                  <li>{es ? "INTERPOL + EUBAM Bissau (UE) presentes" : "INTERPOL + EUBAM Bissau (EU) present"}</li>
                  <li>{es ? "Corrupción militar/política sistémica" : "Systemic military/political corruption"}</li>
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
                <h3 className="font-semibold text-blue-900 mb-3">{es ? "Economía y Recursos" : "Economy & Resources"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Anacardo — 5to exportador mundial (~250K ton/año)" : "Cashew — world 5th exporter (~250K tons/year)"}</li>
                  <li>{es ? "Fosfato Farim — yacimiento no desarrollado" : "Farim phosphate — undeveloped deposit"}</li>
                  <li>{es ? "Pesca — ZEE 200 nm; acuerdos UE y China" : "Fishing — 200 nm EEZ; EU and China agreements"}</li>
                  <li>{es ? "Bijagós — Reserva Biosfera UNESCO (turismo)" : "Bijagos — UNESCO Biosphere Reserve (tourism)"}</li>
                  <li>{es ? "PIB per cápita ~$700 — uno de los más bajos" : "GDP per capita ~$700 — among world's lowest"}</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-3">{es ? "Infraestructura" : "Infrastructure"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Puerto de Bissau — exportaciones anacardo" : "Port of Bissau — cashew exports"}</li>
                  <li>Osvaldo Vieira Airport (OXB)</li>
                  <li>{es ? "Red vial limitada — zona costera principal" : "Limited road network — main coastal zone"}</li>
                  <li>{es ? "Planta energía Bissau + generadores privados" : "Bissau power plant + private generators"}</li>
                  <li>{es ? "Cobertura móvil: MTN/Orange principalmente en Bissau" : "Mobile coverage: MTN/Orange mainly in Bissau"}</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-900 mb-3">{es ? "Marco Legal" : "Legal Framework"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>ARMP — {es ? "Code des Marchés Publics" : "Code des Marchés Publics"}</li>
                  <li>{es ? "Marco datos CEDEAO/UEMOA" : "ECOWAS/UEMOA data framework"}</li>
                  <li>BCEAO — {es ? "Franco CFA (XOF) / UEMOA" : "CFA franc (XOF) / UEMOA"}</li>
                  <li>{es ? "FMI / BM / AfDB / UE (EUBAM)" : "IMF / WB / AfDB / EU (EUBAM Bissau)"}</li>
                  <li>{es ? "Cooperación Portugal (IPAD/Camões)" : "Portugal cooperation (IPAD/Camões)"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne Capabilities */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Capacidades KabatOne para Guinea-Bisáu" : "KabatOne Capabilities for Guinea-Bissau"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Marítima y Anti-Narcotráfico" : "Maritime Security & Anti-Drug Trafficking"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Módulos marítimos para monitoreo del archipiélago Bijagós — 88 islas / ZEE 200 nm" : "Maritime modules for Bijagos Archipelago monitoring — 88 islands / 200 nm EEZ"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Plataforma de inteligencia marítima integrable con INTERPOL/UNODC para seguimiento de embarcaciones" : "Maritime intelligence platform integrable with INTERPOL/UNODC for vessel tracking"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Vigilancia de vídeo para Puerto de Bissau y zonas de trasbordo costeras" : "Video surveillance for Port of Bissau and coastal transshipment zones"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Coordinación EUBAM Bissau y marcos CEDEAO anti-narcotráfico" : "EUBAM Bissau and ECOWAS anti-drug framework coordination"}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Nacional y Operacional" : "National & Operational Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Despacho CAD para POP/FARP en las 8 regiones con gestión de incidentes" : "CAD dispatch for POP/FARP across 8 regions with incident management"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Gestión de fronteras con Guinea, Senegal y Guinea-Bisáu continental" : "Border management with Guinea, Senegal, and continental Guinea-Bissau"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Arquitectura offline-capable para zonas sin conectividad (islas Bijagós, zonas rurales)" : "Offline-capable architecture for no-connectivity zones (Bijagos islands, rural areas)"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Módulos de gestión de crisis para estabilidad institucional durante transiciones políticas" : "Crisis management modules for institutional stability during political transitions"}</span></li>
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
          h2={es ? "¿Listo para modernizar la seguridad pública en Guinea-Bisáu?" : "Ready to modernize public safety in Guinea-Bissau?"}
          subtitle={es ? "Contáctenos para una demostración adaptada a las necesidades de seguridad de Guinea-Bisáu." : "Contact us for a demonstration tailored to Guinea-Bissau's security needs."}
        />
      </main>
      <Footer es={es} />
    </>
  );
}
