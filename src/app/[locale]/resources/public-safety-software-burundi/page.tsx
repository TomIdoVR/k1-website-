import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareBurundi", locale);
}

export default async function PublicSafetySoftwareBurundiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Burundi | FDN/PNB, Lago Tanganica, AMISOM/ATMIS y Gestión de Crisis – KabatOne"
    : "Public Safety Software for Burundi | FDN/PNB, Lake Tanganyika, AMISOM/ATMIS & Crisis Management – KabatOne";
  const description = es
    ? "KabatOne entrega plataforma de seguridad pública para la Fuerza de Defensa Nacional de Burundi (FDN), Policía Nacional, misiones de paz de la UA, control del Lago Tanganica y gestión de crisis en una de las regiones más volátiles de los Grandes Lagos."
    : "KabatOne delivers public safety platform for Burundi's National Defence Force (FDN), National Police, AU peacekeeping missions, Lake Tanganyika monitoring, and crisis management in one of the Great Lakes' most volatile regions.";
  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-burundi/"
    : "https://kabatone.com/resources/public-safety-software-burundi/";

  const faqs = [
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Burundi?"
        : "What are the main security forces in Burundi?",
      answer: es
        ? "La Fuerza de Defensa Nacional (FDN) cuenta con aproximadamente 20,000-25,000 efectivos. La Policía Nacional de Burundi (PNB) opera en las 18 provincias. La Agencia Nacional de Inteligencia (SNR) coordina la inteligencia. Los Imbonerakure (liga de jóvenes del partido CNDD-FDD) actúan como milicia paramilitar. Burundi ha sido un importante contribuidor a las misiones de paz de la UA: AMISOM en Somalia (donde jugó un papel clave) y la sucesora ATMIS. La crisis política de 2015 (rechazo a 3er mandato de Nkurunziza) dejó ~400,000 desplazados."
        : "The National Defence Force (FDN) numbers approximately 20,000-25,000 personnel. The Burundi National Police (PNB) operates across 18 provinces. The National Intelligence Agency (SNR) coordinates intelligence. The Imbonerakure (CNDD-FDD party youth league) acts as a paramilitary militia. Burundi has been a major contributor to AU peacekeeping missions: AMISOM in Somalia (where it played a key role) and successor ATMIS. The 2015 political crisis (rejection of Nkurunziza's 3rd term) displaced ~400,000 people.",
    },
    {
      question: es
        ? "¿Cuál es la importancia estratégica del Lago Tanganica para Burundi?"
        : "What is the strategic importance of Lake Tanganyika for Burundi?",
      answer: es
        ? "El Lago Tanganica es el 2do lago más profundo del mundo (1,470 m) y el 2do por volumen de agua dulce. Burundi comparte sus costas con Tanzania, DRC y Zambia. El lago es vital para la pesca (fuente de proteína principal), el transporte lacustre y las exportaciones a través del Puerto de Bujumbura. Las milicias rebeldes de la DRC (ADF, FDLR) usan las aguas para movimientos transfronterizos. La inestabilidad en el este de la DRC afecta directamente la seguridad del lago y la frontera oeste de Burundi (900 km con DRC). La piratería lacustre es una amenaza emergente."
        : "Lake Tanganyika is the world's 2nd deepest lake (1,470 m) and 2nd by freshwater volume. Burundi shares its shores with Tanzania, DRC, and Zambia. The lake is vital for fishing (main protein source), lake transport, and exports through Port of Bujumbura. DRC rebel militias (ADF, FDLR) use the waters for cross-border movements. Instability in eastern DRC directly affects lake security and Burundi's western border (900 km with DRC). Lake piracy is an emerging threat.",
    },
    {
      question: es
        ? "¿Cuáles son los recursos económicos de Burundi?"
        : "What are Burundi's economic resources?",
      answer: es
        ? "Burundi es uno de los países más pobres del mundo (PIB per cápita ~$270). El café representa ~70% de las divisas de exportación (producción ~30,000 ton/año). El té (~5,000 ton/año) es el segundo exportador agrícola. El oro y la casiterita (estaño) son recursos mineros significativos. El níquel tiene depósitos evaluados en >300 Mt (Musongati — uno de los mayores del mundo, sin explotar). El Lago Tanganica aporta importantes capturas pesqueras. La dependencia de ayuda internacional es alta — CNUCED, UE, WFP/PMA son actores clave."
        : "Burundi is one of the world's poorest countries (GDP per capita ~$270). Coffee represents ~70% of export earnings (production ~30,000 tons/year). Tea (~5,000 tons/year) is the second agricultural exporter. Gold and cassiterite (tin) are significant mining resources. Nickel has deposits estimated at >300 Mt (Musongati — one of the world's largest, unexploited). Lake Tanganyika provides important fish catches. Aid dependency is high — UNCTAD, EU, WFP are key actors.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Burundi?"
        : "What is the legal and procurement framework in Burundi?",
      answer: es
        ? "El Code des marchés publics (Décret n°100/203) y la ARMP (Autorité de Régulation des Marchés Publics) rigen las adquisiciones. La Loi n°1/13 de 2021 establece el marco de protección de datos personales. La ARCT regula las telecomunicaciones. La moneda es el Franco burundés (BIF) — bajo la supervisión de la Banque de la République du Burundi (BRB). Financiadores clave: Banco Mundial, AfDB, Fondo Árabe de Desarrollo (AFESD), China EXIM Bank y UE. Burundi es miembro de la EAC (Comunidad de África Oriental) y CEPGL."
        : "The Code des marchés publics (Decree n°100/203) and ARMP (Public Markets Regulatory Authority) govern procurement. Law n°1/13 of 2021 establishes the personal data protection framework. ARCT regulates telecommunications. Currency is the Burundian franc (BIF) — supervised by the Banque de la République du Burundi (BRB). Key financiers: World Bank, AfDB, Arab Fund for Economic and Social Development (AFESD), China EXIM Bank, and EU. Burundi is a member of EAC (East African Community) and CEPGL.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Burundi?"
        : "How does KabatOne support public safety in Burundi?",
      answer: es
        ? "KabatOne integra vigilancia de vídeo, despacho CAD y awareness situacional para operaciones FDN/PNB en las 18 provincias. Los módulos de seguridad lacustre monitorean el Lago Tanganica, el Puerto de Bujumbura y los movimientos de milicias transfronterizas DRC/Burundi. El sistema de gestión de fronteras cubre los 900 km de frontera con DRC y los cruces con Tanzania/Rwanda. Los módulos de gestión de crisis coordinan la respuesta humanitaria (ACNUR, OCHA, WFP). La arquitectura es adaptable a entornos de baja conectividad para zonas rurales."
        : "KabatOne integrates video surveillance, CAD dispatch, and situational awareness for FDN/PNB operations across all 18 provinces. Lake security modules monitor Lake Tanganyika, Port of Bujumbura, and cross-border militia movements DRC/Burundi. Border management system covers the 900 km DRC border and crossings with Tanzania/Rwanda. Crisis management modules coordinate humanitarian response (UNHCR, OCHA, WFP). Architecture adapts to low-connectivity environments for rural areas.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/" },
    { name: es ? "Software de Seguridad Pública para Burundi" : "Public Safety Software for Burundi", url: canonical },
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
              {es ? "Burundi · Grandes Lagos · Lago Tanganica · AMISOM/ATMIS · Frontera DRC" : "Burundi · Great Lakes · Lake Tanganyika · AMISOM/ATMIS · DRC Border"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es ? "Software de Seguridad Pública para Burundi" : "Public Safety Software for Burundi"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {es
                ? "Plataforma unificada para FDN, Policía Nacional, seguridad del Lago Tanganica y gestión de crisis en los Grandes Lagos — importante contribuidor de fuerzas a misiones de paz de la UA en Somalia."
                : "Unified platform for FDN, National Police, Lake Tanganyika security, and Great Lakes crisis management — major contributor of forces to AU peacekeeping missions in Somalia."}
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
                  <li><strong>FDN</strong> — {es ? "~20,000-25,000 efectivos" : "~20,000-25,000 personnel"}</li>
                  <li><strong>PNB</strong> — {es ? "Policía Nacional — 18 provincias" : "National Police — 18 provinces"}</li>
                  <li><strong>SNR</strong> — {es ? "Agencia Nacional de Inteligencia" : "National Intelligence Agency"}</li>
                  <li><strong>Imbonerakure</strong> — {es ? "milicia paramilitar CNDD-FDD" : "CNDD-FDD paramilitary militia"}</li>
                  <li>{es ? "Contribuidor clave AMISOM/ATMIS — Somalia (misiones UA)" : "Key AMISOM/ATMIS contributor — Somalia (AU missions)"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Contexto Geopolítico" : "Geopolitical Context"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? "Crisis 2015 (3er mandato) — ~400,000 desplazados" : "2015 crisis (3rd term) — ~400,000 displaced"}</li>
                  <li>{es ? "Frontera 900 km con DRC — milicias ADF/FDLR" : "900 km border with DRC — ADF/FDLR militias"}</li>
                  <li>{es ? "Lago Tanganica — 2do lago más profundo (1,470 m)" : "Lake Tanganyika — 2nd deepest lake (1,470 m)"}</li>
                  <li>{es ? "Miembro EAC + CEPGL (Grandes Lagos)" : "EAC + CEPGL (Great Lakes) member"}</li>
                  <li>{es ? "~6M desplazados internos/refugiados en región Grandes Lagos" : "~6M IDPs/refugees in Great Lakes region"}</li>
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
                  <li>{es ? "Café — ~70% divisas de exportación (~30K ton/año)" : "Coffee — ~70% export earnings (~30K tons/year)"}</li>
                  <li>{es ? "Té — ~5,000 ton/año" : "Tea — ~5,000 tons/year"}</li>
                  <li>{es ? "Níquel — Musongati >300 Mt (uno de los mayores, sin explotar)" : "Nickel — Musongati >300 Mt (among largest, unexploited)"}</li>
                  <li>{es ? "Oro + casiterita (estaño)" : "Gold + cassiterite (tin)"}</li>
                  <li>{es ? "Pesca — Lago Tanganica (principal proteína)" : "Fishing — Lake Tanganyika (main protein source)"}</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-3">{es ? "Infraestructura" : "Infrastructure"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Puerto de Bujumbura — lago Tanganica (exportaciones)" : "Port of Bujumbura — Lake Tanganyika (exports)"}</li>
                  <li>Bujumbura International Airport (BJM)</li>
                  <li>{es ? "Red vial 12,322 km (mayormente sin pavimentar)" : "Road network 12,322 km (mostly unpaved)"}</li>
                  <li>{es ? "Electricidad: REGIDESO — cobertura ~12%" : "Electricity: REGIDESO — ~12% coverage"}</li>
                  <li>{es ? "Móvil: Econet Leo/Lumitel/Onatel" : "Mobile: Econet Leo/Lumitel/Onatel"}</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-900 mb-3">{es ? "Marco Legal" : "Legal Framework"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>ARMP — {es ? "Décret n°100/203 (marchés publics)" : "Decree n°100/203 (public procurement)"}</li>
                  <li>{es ? "Ley n°1/13 2021 — protección de datos" : "Law n°1/13 2021 — data protection"}</li>
                  <li>ARCT — {es ? "regulación telecomunicaciones" : "telecommunications regulator"}</li>
                  <li>BRB — {es ? "Franco burundés (BIF)" : "Burundian franc (BIF)"}</li>
                  <li>{es ? "BM/AfDB/AFESD/China EXIM/UE" : "WB/AfDB/AFESD/China EXIM/EU"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne Capabilities */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Capacidades KabatOne para Burundi" : "KabatOne Capabilities for Burundi"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad del Lago y Gestión de Crisis" : "Lake Security & Crisis Management"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Módulos de seguridad lacustre para monitoreo del Lago Tanganica, Puerto de Bujumbura y control de movimientos de milicias transfronterizas DRC" : "Lake security modules for Lake Tanganyika monitoring, Port of Bujumbura, and cross-border DRC militia movement control"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Gestión de crisis humanitaria — coordinación ACNUR/OCHA/WFP para campo de refugiados y desplazados internos" : "Humanitarian crisis management — UNHCR/OCHA/WFP coordination for refugee camps and IDPs"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Sistema de gestión de fronteras para los 900 km de frontera con DRC (milicias ADF/FDLR) y corredores Tanzania/Rwanda" : "Border management system for 900 km DRC border (ADF/FDLR militias) and Tanzania/Rwanda corridors"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Integración con marcos EAC y CEPGL de gestión de crisis regionales de los Grandes Lagos" : "Integration with EAC and CEPGL Great Lakes regional crisis management frameworks"}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Nacional y Operacional" : "National & Operational Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Despacho CAD para FDN/PNB en las 18 provincias con gestión de incidentes y recursos" : "CAD dispatch for FDN/PNB across 18 provinces with incident and resource management"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Vigilancia de vídeo urbana para Bujumbura (capital) y Gitega (capital política)" : "Urban video surveillance for Bujumbura (capital) and Gitega (political capital)"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Módulos de seguridad para minas: Musongati (níquel), operaciones de casiterita y oro artesanal" : "Security modules for mines: Musongati (nickel), cassiterite, and artisanal gold operations"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Arquitectura offline-capable para zonas rurales con baja conectividad (~88% rural)" : "Offline-capable architecture for rural areas with low connectivity (~88% rural)"}</span></li>
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
          h2={es ? "¿Listo para modernizar la seguridad pública en Burundi?" : "Ready to modernize public safety in Burundi?"}
          subtitle={es ? "Contáctenos para una demostración adaptada a las necesidades de seguridad de Burundi." : "Contact us for a demonstration tailored to Burundi's security needs."}
        />
      </main>
      <Footer es={es} />
    </>
  );
}
