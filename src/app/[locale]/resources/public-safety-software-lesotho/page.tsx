import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareLesotho", locale);
}

export default async function PublicSafetySoftwareLesothoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Lesoto | LDF/LMPS, Agua LHWP, Diamantes Letseng y Seguridad Montañosa – KabatOne"
    : "Public Safety Software for Lesotho | LDF/LMPS, LHWP Water, Letseng Diamonds & Mountain Security – KabatOne";
  const description = es
    ? "KabatOne entrega plataforma de seguridad pública para la Fuerza de Defensa de Lesoto (LDF), Servicio de Policía Montada, proyecto hídrico LHWP, mina de diamantes Letseng y seguridad en las montañas del Drakensberg — completamente rodeado por Sudáfrica."
    : "KabatOne delivers public safety platform for Lesotho Defence Force (LDF), Mounted Police Service, LHWP water project, Letseng diamond mine, and Drakensberg mountain security — entirely surrounded by South Africa.";
  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-lesotho"
    : "https://kabatone.com/resources/public-safety-software-lesotho";

  const faqs = [
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Lesoto?"
        : "What are the main security forces in Lesotho?",
      answer: es
        ? "La Fuerza de Defensa de Lesoto (LDF) cuenta con aproximadamente 2,000-2,500 efectivos. El Servicio de Policía Montada de Lesoto (LMPS) opera en los 10 distritos con ~5,000 agentes. El Servicio de Seguridad Nacional de Lesoto (LNSS) coordina la inteligencia. Lesoto es una monarquía constitucional — el rey Letsie III es el jefe de Estado y el primer ministro encabeza el gobierno. La política de Lesoto ha sido históricamente inestable con múltiples golpes de estado y crisis militares (1986, 1994, 1998, 2014, 2017, 2022). La SADC ha mediado repetidamente en crisis políticas."
        : "The Lesotho Defence Force (LDF) numbers approximately 2,000-2,500 personnel. The Lesotho Mounted Police Service (LMPS) operates across 10 districts with ~5,000 officers. The Lesotho National Security Service (LNSS) coordinates intelligence. Lesotho is a constitutional monarchy — King Letsie III is head of state and the prime minister leads the government. Lesotho's politics have been historically unstable with multiple coups and military crises (1986, 1994, 1998, 2014, 2017, 2022). SADC has repeatedly mediated political crises.",
    },
    {
      question: es
        ? "¿Por qué el agua es el recurso estratégico más importante de Lesoto?"
        : "Why is water Lesotho's most important strategic resource?",
      answer: es
        ? "El Proyecto Hídrico de las Tierras Altas de Lesoto (LHWP) es uno de los proyectos de ingeniería más grandes de Africa — un sistema de embalses, túneles y represas que vende agua a Sudáfrica (principalmente Gauteng/Johannesburgo). El Tratado del Agua de 1986 (revisado en 2021) establece el marco legal para las transferencias de agua. La Fase 1 (presas Katse, Mohale y Matsoku) exporta ~790 millones de m³/año. La Fase 2 (presa Polihali en construcción) añadirá ~490 millones de m³/año adicionales. Los royalties del agua representan ~10-15% de los ingresos del gobierno. Lesoto es literalmente el único país del mundo completamente rodeado por otro país (Sudáfrica)."
        : "The Lesotho Highlands Water Project (LHWP) is one of Africa's largest engineering projects — a system of reservoirs, tunnels, and dams that sells water to South Africa (mainly Gauteng/Johannesburg). The 1986 Water Treaty (revised in 2021) establishes the legal framework for water transfers. Phase 1 (Katse, Mohale, and Matsoku dams) exports ~790 million m³/year. Phase 2 (Polihali dam under construction) will add ~490 million m³/year. Water royalties represent ~10-15% of government revenues. Lesotho is literally the only country in the world completely surrounded by another country (South Africa).",
    },
    {
      question: es
        ? "¿Cuáles son los otros recursos estratégicos de Lesoto?"
        : "What are Lesotho's other strategic resources?",
      answer: es
        ? "La mina de diamantes de Letseng (Gem Diamonds/Letšeng Diamonds — govt 30%) es la mina de diamantes de mayor altitud del mundo (3,100 m) y produce algunos de los diamantes más grandes y valiosos del mundo — incluyendo el Star of Lesotho (601 quilates, 2018), el Spirit of the Great Elephant (910 quilates, 2021) y el Lesotho Legend (910 quilates, 2018). Los diamantes representan ~60-70% de las exportaciones. La manufactura textil (Lesotho es el mayor exportador textil de Africa al mercado estadounidense bajo AGOA) es significativa. El turismo de montaña (esquí en Afriski, senderismo) es emergente."
        : "The Letseng diamond mine (Gem Diamonds/Letšeng Diamonds — govt 30%) is the world's highest altitude diamond mine (3,100 m) and produces some of the world's largest and most valuable diamonds — including the Star of Lesotho (601 carats, 2018), the Spirit of the Great Elephant (910 carats, 2021), and the Lesotho Legend (910 carats, 2018). Diamonds represent ~60-70% of exports. Textile manufacturing (Lesotho is Africa's largest textile exporter to the US market under AGOA) is significant. Mountain tourism (skiing at Afriski, hiking) is emerging.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Lesoto?"
        : "What is the legal and procurement framework in Lesotho?",
      answer: es
        ? "La Public Procurement Act (Order 10 de 2006) y la Public Procurement Unit (PPU) rigen las adquisiciones públicas. La Data Protection Act de 2012 establece el marco de protección de datos. La Lesotho Communications Authority (LCA) regula las telecomunicaciones. La moneda es el Loti de Lesoto (LSL) vinculado al Rand sudafricano (ZAR) bajo el Banco Central de Lesoto (CBL). Lesoto es miembro de SACU (y recibe ~60-65% de sus ingresos fiscales de SACU), SADC y COMESA. Los financiadores clave incluyen el Banco Mundial (IDA), AfDB, USAID y el MCC (Millennium Challenge Corporation)."
        : "The Public Procurement Act (Order 10 of 2006) and Public Procurement Unit (PPU) govern public procurement. The Data Protection Act of 2012 establishes the data protection framework. The Lesotho Communications Authority (LCA) regulates telecommunications. Currency is the Lesotho loti (LSL) pegged to the South African rand (ZAR) under the Central Bank of Lesotho (CBL). Lesotho is a member of SACU (receiving ~60-65% of tax revenues from SACU), SADC, and COMESA. Key financiers include World Bank (IDA), AfDB, USAID, and MCC (Millennium Challenge Corporation).",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Lesoto?"
        : "How does KabatOne support public safety in Lesotho?",
      answer: es
        ? "KabatOne integra vigilancia de vídeo, despacho CAD y awareness situacional para operaciones LDF/LMPS en los 10 distritos. Los módulos de protección de infraestructura crítica aseguran las instalaciones del LHWP (presas Katse, Mohale, Polihali) — activos estratégicos para Sudáfrica. El sistema de seguridad minera protege la mina de diamantes de Letseng (3,100 m de altitud, Gem Diamonds). Los módulos de gestión de crisis apoyan la coordinación política en contextos de inestabilidad recurrente. La arquitectura funciona en entornos de alta altitud y terreno montañoso con conectividad limitada."
        : "KabatOne integrates video surveillance, CAD dispatch, and situational awareness for LDF/LMPS operations across all 10 districts. Critical infrastructure protection modules secure LHWP facilities (Katse, Mohale, Polihali dams) — strategic assets for South Africa. Mining security system protects Letseng diamond mine (3,100 m altitude, Gem Diamonds). Crisis management modules support political coordination in recurring instability contexts. Architecture operates in high-altitude mountain terrain with limited connectivity.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources" : "https://kabatone.com/resources" },
    { name: es ? "Software de Seguridad Pública para Lesoto" : "Public Safety Software for Lesotho", url: canonical },
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
              {es ? "Lesoto · Africa Austral · Agua LHWP · Diamantes Letseng · Montañas Drakensberg · SACU" : "Lesotho · Southern Africa · LHWP Water · Letseng Diamonds · Drakensberg Mountains · SACU"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es ? "Software de Seguridad Pública para Lesoto" : "Public Safety Software for Lesotho"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {es
                ? "Plataforma unificada para LDF, Policía Montada, protección de infraestructura hídrica LHWP y mina de diamantes Letseng — único país del mundo completamente enclavado dentro de Sudáfrica."
                : "Unified platform for LDF, Mounted Police, LHWP water infrastructure protection, and Letseng diamond mine — the only country in the world entirely enclosed within South Africa."}
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
                  <li><strong>LDF</strong> — {es ? "~2,000-2,500 efectivos" : "~2,000-2,500 personnel"}</li>
                  <li><strong>LMPS</strong> — {es ? "Policía Montada ~5,000 — 10 distritos" : "Mounted Police ~5,000 — 10 districts"}</li>
                  <li><strong>LNSS</strong> — {es ? "Servicio Nacional de Seguridad" : "National Security Service"}</li>
                  <li>{es ? "Rey Letsie III — monarquía constitucional" : "King Letsie III — constitutional monarchy"}</li>
                  <li>{es ? "Múltiples golpes/crisis militares (1986/94/98/2014/17/22) — mediación SADC recurrente" : "Multiple coups/military crises (1986/94/98/2014/17/22) — recurring SADC mediation"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Posición Geoestrategica Única" : "Unique Geostrategic Position"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? "Único país del mundo completamente enclavado dentro de otro (Sudáfrica)" : "Only country in the world entirely enclosed within another (South Africa)"}</li>
                  <li>{es ? "LHWP — vende agua a Gauteng/Johannesburgo (royalties ~10-15% ingresos govt)" : "LHWP — sells water to Gauteng/Johannesburg (royalties ~10-15% govt revenues)"}</li>
                  <li>{es ? "Letseng — mina de diamantes de mayor altitud mundial (3,100 m)" : "Letseng — world's highest altitude diamond mine (3,100 m)"}</li>
                  <li>{es ? "Mayor exportador textil de Africa a EE.UU. bajo AGOA" : "Africa's largest textile exporter to US under AGOA"}</li>
                  <li>{es ? "SACU ~60-65% ingresos fiscales; miembro SADC/COMESA" : "SACU ~60-65% tax revenues; SADC/COMESA member"}</li>
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
                  <li>{es ? "LHWP — agua Presas Katse/Mohale/Polihali (en construcción) → Gauteng" : "LHWP — water Katse/Mohale/Polihali dams (under construction) → Gauteng"}</li>
                  <li>{es ? "Diamantes Letseng (Gem Diamonds/govt 30%) — Star of Lesotho 601 qt" : "Letseng diamonds (Gem Diamonds/govt 30%) — Star of Lesotho 601 ct"}</li>
                  <li>{es ? "Textil — mayor exportador Africa a EE.UU. (AGOA)" : "Textile — Africa largest US exporter (AGOA)"}</li>
                  <li>{es ? "Lana de mohair/angora — calidad premium internacional" : "Mohair/angora wool — premium international quality"}</li>
                  <li>{es ? "Turismo montaña — Afriski (esquí), senderismo Drakensberg" : "Mountain tourism — Afriski (ski), Drakensberg hiking"}</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-3">{es ? "Infraestructura" : "Infrastructure"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Moshoeshoe I International Airport (MSU)</li>
                  <li>{es ? "Red vial limitada — montañas Drakensberg dificultan acceso" : "Limited road network — Drakensberg mountains impede access"}</li>
                  <li>{es ? "Sin ferrocarril propio — usa red sudafricana (Transnet)" : "No own railway — uses South African network (Transnet)"}</li>
                  <li>{es ? "LEC — Lesotho Electricity Company (SAPP)" : "LEC — Lesotho Electricity Company (SAPP)"}</li>
                  <li>{es ? "Móvil: Econet Telecom/Vodacom; LCA regulador" : "Mobile: Econet Telecom/Vodacom; LCA regulator"}</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-900 mb-3">{es ? "Marco Legal" : "Legal Framework"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>PPU — {es ? "Public Procurement Act Order 10/2006" : "Public Procurement Act Order 10/2006"}</li>
                  <li>{es ? "Data Protection Act 2012" : "Data Protection Act 2012"}</li>
                  <li>LCA — {es ? "regulador telecomunicaciones" : "telecommunications regulator"}</li>
                  <li>CBL — {es ? "Loti (LSL) vinculado ZAR" : "Loti (LSL) pegged to ZAR"}</li>
                  <li>{es ? "BM (IDA)/AfDB/USAID/MCC; SACU/SADC/COMESA" : "WB (IDA)/AfDB/USAID/MCC; SACU/SADC/COMESA"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne Capabilities */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Capacidades KabatOne para Lesoto" : "KabatOne Capabilities for Lesotho"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Protección de Infraestructura Crítica" : "Critical Infrastructure Protection"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Módulos de protección de infraestructura crítica para las presas LHWP (Katse, Mohale, Polihali en construcción) — activos estratégicos compartidos con Sudáfrica bajo el Tratado del Agua" : "Critical infrastructure protection modules for LHWP dams (Katse, Mohale, Polihali under construction) — strategic assets shared with South Africa under the Water Treaty"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Sistema de seguridad minera para la mina de diamantes de Letseng (3,100 m de altitud, Gem Diamonds) con vigilancia de alta altitud y control de acceso" : "Mining security system for Letseng diamond mine (3,100 m altitude, Gem Diamonds) with high-altitude surveillance and access control"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Módulos de gestión de crisis política para coordinación LDF/LMPS en contextos de inestabilidad recurrente — integración con marcos de mediación SADC" : "Political crisis management modules for LDF/LMPS coordination in recurring instability contexts — integration with SADC mediation frameworks"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Sistema de gestión de fronteras para todos los puntos de cruce con Sudáfrica — principal vía de comercio exterior dada la condición de enclave" : "Border management system for all crossing points with South Africa — main external trade route given the enclave condition"}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Nacional y Montañosa" : "National & Mountain Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Despacho CAD para LDF/LMPS en los 10 distritos con gestión de incidentes — incluyendo zonas rurales montañosas de difícil acceso" : "CAD dispatch for LDF/LMPS across 10 districts with incident management — including hard-to-access rural mountain areas"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Vigilancia de vídeo para Maseru (capital), Maputsoe y principales corredores industriales textiles" : "Video surveillance for Maseru (capital), Maputsoe, and main textile industrial corridors"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Protección de fábricas textiles AGOA — principal fuente de empleo formal del país con ~40,000 trabajadores" : "AGOA textile factory protection — country's main source of formal employment with ~40,000 workers"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Arquitectura offline-capable para zonas montañosas rurales con conectividad muy limitada (Lesoto tiene una de las topografías más difíciles de Africa)" : "Offline-capable architecture for rural mountain areas with very limited connectivity (Lesotho has one of Africa's most challenging topographies)"}</span></li>
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
          h2={es ? "¿Listo para modernizar la seguridad pública en Lesoto?" : "Ready to modernize public safety in Lesotho?"}
          subtitle={es ? "Contáctenos para una demostración adaptada a las necesidades de seguridad de Lesoto." : "Contact us for a demonstration tailored to Lesotho's security needs."}
        />
      </main>
      <Footer es={es} />
    </>
  );
}
