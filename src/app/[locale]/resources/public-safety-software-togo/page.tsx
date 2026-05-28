import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareTogo", locale);
}

export default async function PublicSafetySoftwareTogoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Togo | FAT/PNT, Puerto de Lomé y Seguridad Marítima – KabatOne"
    : "Public Safety Software for Togo | FAT/PNT, Port of Lomé & Maritime Security – KabatOne";
  const description = es
    ? "KabatOne entrega plataforma de seguridad pública para las Fuerzas Armadas de Togo (FAT), Policía Nacional, gestión del Puerto de Lomé y seguridad marítima en el Golfo de Guinea."
    : "KabatOne delivers public safety platform for the Togolese Armed Forces (FAT), National Police, Port of Lomé management, and maritime security in the Gulf of Guinea.";
  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-togo/"
    : "https://kabatone.com/resources/public-safety-software-togo/";

  const faqs = [
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Togo?"
        : "What are the main security forces in Togo?",
      answer: es
        ? "Las Fuerzas Armadas de Togo (FAT) cuentan con aproximadamente 8,550 efectivos (ejército, marina, fuerza aérea, gendarmería). La Policía Nacional de Togo (PNT) opera en 5 regiones administrativas. La Dirección General de Documentación Nacional (DGDN) coordina inteligencia. El Grupo de Acción Rápida Vigilance et Intervention de Togo (GRIT) es una unidad antiterrorista de élite. El presidente Faure Gnassingbé — en el poder desde 2005 (familia Gnassingbé desde 1967) — mantiene control político."
        : "The Togolese Armed Forces (FAT) number approximately 8,550 personnel (army, navy, air force, gendarmerie). The Togo National Police (PNT) operates across 5 administrative regions. The DGDN coordinates intelligence. GRIT (Rapid Action Group for Vigilance and Intervention) is an elite counterterrorism unit. President Faure Gnassingbé — in power since 2005 (Gnassingbé family since 1967) — maintains political control.",
    },
    {
      question: es
        ? "¿Cuál es la importancia estratégica del Puerto de Lomé?"
        : "What is the strategic importance of the Port of Lomé?",
      answer: es
        ? "El Puerto de Lomé es el único puerto de aguas profundas en África Occidental que permite acceso directo a barcos Post-Panamax sin dragado. Gestiona más de 1.5 millones de TEU anuales y es hub logístico para países sin litoral: Burkina Faso, Mali, Níger. El Terminal Polyvalent de Lomé (LCT/MSC y Bolloré) gestiona contenedores. Es punto de importación para Benin, Ghana competencia. La marina nacional patrulla la ZEE de 200 nm en el Golfo de Guinea contra piratería y tráfico ilícito."
        : "The Port of Lomé is the only deep-water port in West Africa allowing direct access to Post-Panamax vessels without dredging. It handles over 1.5 million TEUs annually and is the logistics hub for landlocked countries: Burkina Faso, Mali, Niger. The Lomé Container Terminal (LCT/MSC and Bolloré) manages containers. The national navy patrols the 200 nm EEZ in the Gulf of Guinea against piracy and illicit trafficking.",
    },
    {
      question: es
        ? "¿Cuáles son los desafíos de seguridad en Togo?"
        : "What are Togo's security challenges?",
      answer: es
        ? "Togo enfrenta amenaza terrorista creciente en la región norte (triple frontera Burkina Faso/Ghana/Togo) de grupos GSIM/JNIM y Estado Islámico en el Gran Sáhara (EIGS). Los ataques en Savanes (norte) se han intensificado desde 2021. La piratería en el Golfo de Guinea es amenaza marítima persistente. El tráfico de drogas y armas a través de fronteras porosas con Ghana y Benin es significativo. La corrupción policial y protestas políticas suponen retos internos."
        : "Togo faces growing terrorist threat in the northern region (Burkina Faso/Ghana/Togo triple border) from GSIM/JNIM and Islamic State in the Greater Sahara (EIGS). Attacks in Savanes (north) have intensified since 2021. Gulf of Guinea piracy is a persistent maritime threat. Drug and arms trafficking through porous borders with Ghana and Benin is significant. Police corruption and political protests pose internal challenges.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Togo?"
        : "What is the legal and procurement framework in Togo?",
      answer: es
        ? "La Loi sur les Marchés Publics (Loi 2009-013) y la ARMP (Autorité de Régulation des Marchés Publics) rigen las adquisiciones. La Loi 2019-014 sobre protección de datos y la HAAC regulan el espacio digital. El Código de Telecomunicaciones rige el sector TIC. Los financiadores activos incluyen el Banco Mundial, AfDB, UE (fondo de paz), UEMOA/CEDEAO y cooperación bilateral francesa (Agence Française de Développement)."
        : "The Public Procurement Law (Loi 2009-013) and ARMP (Public Procurement Regulatory Authority) govern acquisitions. Loi 2019-014 on data protection and HAAC regulate the digital space. The Telecommunications Code governs the ICT sector. Active financiers include World Bank, AfDB, EU (Peace Fund), UEMOA/ECOWAS, and French bilateral cooperation (Agence Française de Développement).",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Togo?"
        : "How does KabatOne support public safety in Togo?",
      answer: es
        ? "KabatOne integra vigilancia de vídeo, despacho CAD y awareness situacional para operaciones FAT/PNT a lo largo de las 5 regiones. Los módulos de seguridad marítima apoyan la marina en el Golfo de Guinea y protegen las operaciones del Puerto de Lomé. Las capacidades de gestión de fronteras respaldan el control de la triple frontera norte. El sistema es adaptable a entornos de conectividad limitada en zonas rurales de la región Savanes."
        : "KabatOne integrates video surveillance, CAD dispatch, and situational awareness for FAT/PNT operations across all 5 regions. Maritime security modules support the navy in the Gulf of Guinea and protect Port of Lomé operations. Border management capabilities support control of the northern triple-border area. System adapts to limited-connectivity environments in rural Savanes region.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/" },
    { name: es ? "Software de Seguridad Pública para Togo" : "Public Safety Software for Togo", url: canonical },
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
              {es ? "Togo · África Occidental · Puerto de Lomé · Golfo de Guinea" : "Togo · West Africa · Port of Lomé · Gulf of Guinea"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es ? "Software de Seguridad Pública para Togo" : "Public Safety Software for Togo"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {es
                ? "Plataforma unificada para FAT, Policía Nacional, marina del Golfo de Guinea y gestión del Puerto de Lomé — hub logístico regional para países sin litoral."
                : "Unified platform for FAT, National Police, Gulf of Guinea navy, and Port of Lomé management — the regional logistics hub for landlocked countries."}
            </p>
          </div>
        </section>

        {/* Security Forces */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fuerzas de Seguridad y Desafíos Operacionales" : "Security Forces & Operational Challenges"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Estructura de Seguridad Nacional" : "National Security Structure"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>FAT</strong> — {es ? "~8,550 efectivos (ejército/marina/fuerza aérea/gendarmería)" : "~8,550 personnel (army/navy/air force/gendarmerie)"}</li>
                  <li><strong>PNT (Policía Nacional de Togo)</strong> — {es ? "5 regiones administrativas" : "5 administrative regions"}</li>
                  <li><strong>GRIT</strong> — {es ? "Grupo de Acción Rápida antiterrorista" : "Rapid Action Group counterterrorism unit"}</li>
                  <li><strong>DGDN</strong> — {es ? "Documentación Nacional / inteligencia" : "National Documentation / intelligence"}</li>
                  <li><strong>{es ? "Marina Nacional" : "National Navy"}</strong> — {es ? "Patrullaje ZEE 200 nm Golfo de Guinea" : "200 nm EEZ patrol Gulf of Guinea"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Amenazas de Seguridad" : "Security Threats"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? "GSIM/JNIM — ataques región Savanes (norte) desde 2021" : "GSIM/JNIM — attacks in Savanes region (north) since 2021"}</li>
                  <li>{es ? "Triple frontera Burkina Faso/Ghana/Togo — zona de riesgo" : "Burkina Faso/Ghana/Togo triple border — risk zone"}</li>
                  <li>{es ? "Piratería Golfo de Guinea — amenaza marítima persistente" : "Gulf of Guinea piracy — persistent maritime threat"}</li>
                  <li>{es ? "Tráfico de drogas/armas — fronteras porosas Ghana/Benin" : "Drug/arms trafficking — porous borders with Ghana/Benin"}</li>
                  <li>{es ? "Protestas políticas — oposición al régimen Gnassingbé" : "Political protests — opposition to Gnassingbé regime"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Infrastructure */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Infraestructura Estratégica" : "Strategic Infrastructure"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">{es ? "Puerto de Lomé" : "Port of Lomé"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Único puerto aguas profundas Post-Panamax en África Occidental" : "Only Post-Panamax deep-water port in West Africa"}</li>
                  <li>{es ? "+1.5 millones TEU anuales" : "+1.5 million TEUs annually"}</li>
                  <li>{es ? "Hub logístico: Burkina Faso, Mali, Níger" : "Logistics hub: Burkina Faso, Mali, Niger"}</li>
                  <li>LCT — MSC + {es ? "Bolloré Terminal" : "Bolloré Terminal"}</li>
                  <li>{es ? "Terminal petrolera Lomé" : "Lomé petroleum terminal"}</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-3">{es ? "Economía y Recursos" : "Economy & Resources"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Fosfato — 3er productor africano (OCP competencia)" : "Phosphate — 3rd African producer"}</li>
                  <li>Lomé International Airport (LFW)</li>
                  <li>{es ? "Zona Franca Industrial de Lomé (SAZOF)" : "Lomé Industrial Free Zone (SAZOF)"}</li>
                  <li>ClintonLME — {es ? "logística regional" : "regional logistics"}</li>
                  <li>{es ? "Sector financiero / BCEAO zona UEMOA" : "Financial sector / BCEAO UEMOA zone"}</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-900 mb-3">{es ? "Marco Legal" : "Legal Framework"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>ARMP — {es ? "Loi 2009-013 contratación pública" : "Loi 2009-013 public procurement"}</li>
                  <li>{es ? "Loi 2019-014 protección de datos / HAAC" : "Loi 2019-014 data protection / HAAC"}</li>
                  <li>UEMOA / CEDEAO / {es ? "zona franca CFA" : "CFA franc zone"}</li>
                  <li>AFD — {es ? "cooperación francesa" : "French cooperation"}</li>
                  <li>{es ? "Banco Mundial / AfDB / UE Fondo de Paz" : "World Bank / AfDB / EU Peace Fund"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne Capabilities */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Capacidades KabatOne para Togo" : "KabatOne Capabilities for Togo"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Terrestre y Portuaria" : "Land & Port Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Vigilancia de vídeo para Puerto de Lomé, terminal LCT y zonas francas" : "Video surveillance for Port of Lomé, LCT terminal, and free zones"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Despacho CAD integrado para PNT en las 5 regiones" : "Integrated CAD dispatch for PNT across all 5 regions"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Gestión de fronteras norte — triple frontera Burkina/Ghana/Togo" : "Northern border management — Burkina/Ghana/Togo triple border"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Centro de comando C4 para GRIT y operaciones FAT" : "C4 command center for GRIT and FAT operations"}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Marítima y Regional" : "Maritime & Regional Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Módulos marítimos para patrullaje ZEE y anti-piratería Golfo de Guinea" : "Maritime modules for EEZ patrol and anti-piracy Gulf of Guinea"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Integración con arquitectura CRESMAO (Centro Regional de Seguridad Marítima)" : "Integration with CRESMAO (Regional Maritime Security Center) architecture"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Coordinación CEDEAO con vecinos Ghana, Benin, Burkina Faso" : "ECOWAS coordination with neighbors Ghana, Benin, Burkina Faso"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Adaptable a zonas rurales del norte con conectividad limitada" : "Adaptable to rural northern zones with limited connectivity"}</span></li>
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
          h2={es ? "¿Listo para modernizar la seguridad pública en Togo?" : "Ready to modernize public safety in Togo?"}
          subtitle={es ? "Contáctenos para una demostración adaptada a las necesidades de seguridad de Togo." : "Contact us for a demonstration tailored to Togo's security needs."}
        />
      </main>
      <Footer es={es} />
    </>
  );
}
