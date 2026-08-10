import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareEquatorialGuinea", locale);
}

export default async function PublicSafetySoftwareEquatorialGuineaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Guinea Ecuatorial | FAR/PNR, Puerto de Malabo y Seguridad Petrolera – KabatOne"
    : "Public Safety Software for Equatorial Guinea | FAR/PNR, Malabo Port & Oil Security – KabatOne";
  const description = es
    ? "KabatOne entrega plataforma de seguridad pública para las Fuerzas Armadas de la República (FAR), Policía Nacional, Puerto de Malabo, y seguridad de infraestructura petrolera offshore en Guinea Ecuatorial."
    : "KabatOne delivers public safety platform for the Armed Forces of the Republic (FAR), National Police, Port of Malabo, and offshore oil infrastructure security in Equatorial Guinea.";
  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-equatorial-guinea"
    : "https://kabatone.com/resources/public-safety-software-equatorial-guinea";

  const faqs = [
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Guinea Ecuatorial?"
        : "What are the main security forces in Equatorial Guinea?",
      answer: es
        ? "Las Fuerzas Armadas de la República (FAR) incluyen ejército (~1,100), guardia costera y guardia presidencial de élite (Batallón Ligero de Infantería). La Policía Nacional opera bajo el Ministerio de Seguridad. El presidente Teodoro Obiang Nguema Mbasogo — en el poder desde 1979 — mantiene fuerzas de seguridad estrechamente controladas con unidades de protección personal."
        : "The Armed Forces of the Republic (FAR) include army (~1,100), coast guard, and elite presidential guard (Light Infantry Battalion). The National Police operates under the Ministry of Security. President Teodoro Obiang Nguema Mbasogo — in power since 1979 — maintains closely controlled security forces with personal protection units.",
    },
    {
      question: es
        ? "¿Cuáles son los recursos económicos estratégicos de Guinea Ecuatorial?"
        : "What are Equatorial Guinea's strategic economic resources?",
      answer: es
        ? "El petróleo y el gas representan más del 90% de los ingresos del gobierno. Marathon Oil, Hess, Noble Energy (ahora Chevron) y ExxonMobil operan campos en el Bloque G (Zafiro ~100,000 bbl/día), Bloque B y Bloque O. GEPetrol es la empresa nacional. El GNL se exporta a través de la planta EGLNG en Bioko Island. El Puerto de Malabo gestiona carga general y apoya operaciones offshore."
        : "Oil and gas represent over 90% of government revenue. Marathon Oil, Hess, Noble Energy (now Chevron), and ExxonMobil operate fields in Block G (Zafiro ~100,000 bbl/day), Block B, and Block O. GEPetrol is the national company. LNG exports through the EGLNG plant on Bioko Island. Malabo Port handles general cargo and supports offshore operations.",
    },
    {
      question: es
        ? "¿Cuál es el contexto geopolítico de seguridad en Guinea Ecuatorial?"
        : "What is the security geopolitical context in Equatorial Guinea?",
      answer: es
        ? "Guinea Ecuatorial tiene territorio discontinuo: Bioko Island (capital Malabo), Río Muni (ciudad de Bata, zona continental), Annobón y Corisco. La disputa de las islas Mbanié/Conga con Gabón sigue sin resolverse. La fuerza naval española FNGE entrenó a la guardia costera. La CEMAC y la CEEAC tienen presencia regional. Bata es el mayor centro comercial y la ciudad más poblada. La nueva capital Ciudad de la Paz/Oyala está en desarrollo."
        : "Equatorial Guinea has discontinuous territory: Bioko Island (capital Malabo), Rio Muni (Bata city, mainland), Annobon, and Corisco. The Mbanié/Conga islands dispute with Gabon remains unresolved. Spanish FNGE trained the coast guard. CEMAC and CEEAC have regional presence. Bata is the largest commercial center. The planned new capital Ciudad de la Paz/Oyala is under development.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Guinea Ecuatorial?"
        : "What is the legal and procurement framework in Equatorial Guinea?",
      answer: es
        ? "La Ley de Contratación Pública rige las adquisiciones del gobierno. La Ley de Protección de Datos sigue el modelo CEMAC. SONAGEF gestiona las finanzas públicas. Los contratos de exploración petrolera siguen la Ley de Hidrocarburos. España (cooperación histórica), China EXIM Bank (infraestructura Bata/Malabo), Banco Africano de Desarrollo y Banco Mundial son financiadores externos activos."
        : "The Public Procurement Law governs government acquisitions. Personal Data Law follows the CEMAC model. SONAGEF manages public finances. Oil exploration contracts follow the Hydrocarbons Law. Spain (historical cooperation), China EXIM Bank (Bata/Malabo infrastructure), African Development Bank, and World Bank are active external financiers.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Guinea Ecuatorial?"
        : "How does KabatOne support public safety in Equatorial Guinea?",
      answer: es
        ? "KabatOne integra vigilancia de vídeo, despacho CAD y awareness situacional para operaciones FAR/PNR en Bioko y Río Muni. Los módulos de seguridad marítima respaldan la guardia costera y protegen plataformas offshore de ExxonMobil/GEPetrol. El sistema de despacho coordina respuesta de emergencia entre Malabo y Bata. La arquitectura cloud-native se adapta a entornos de conectividad limitada."
        : "KabatOne integrates video surveillance, CAD dispatch, and situational awareness for FAR/PNR operations across Bioko and Rio Muni. Maritime security modules support the coast guard and protect ExxonMobil/GEPetrol offshore platforms. Dispatch system coordinates emergency response between Malabo and Bata. Cloud-native architecture adapts to limited-connectivity environments.",
    },
  ];

  const article = articleSchema(
    title,
    description,
    canonical,
    "2026-05-19"
  );
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources" : "https://kabatone.com/resources" },
    { name: es ? "Software de Seguridad Pública para Guinea Ecuatorial" : "Public Safety Software for Equatorial Guinea", url: canonical },
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
              {es ? "Guinea Ecuatorial · África Central · Petróleo y Gas" : "Equatorial Guinea · Central Africa · Oil & Gas"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es
                ? "Software de Seguridad Pública para Guinea Ecuatorial"
                : "Public Safety Software for Equatorial Guinea"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {es
                ? "Plataforma unificada para FAR, Policía Nacional, guardia costera y seguridad de infraestructura petrolera offshore en Bioko Island y Río Muni."
                : "Unified platform for FAR, National Police, coast guard, and offshore oil infrastructure security across Bioko Island and Rio Muni."}
            </p>
          </div>
        </section>

        {/* Security Forces */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fuerzas de Seguridad y Contexto Operacional" : "Security Forces & Operational Context"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Fuerzas Armadas y Policía" : "Armed Forces & Police"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "FAR (Fuerzas Armadas de la República)" : "FAR (Armed Forces of the Republic)"}</strong> — {es ? "~1,100 efectivos; ejército, guardia costera, fuerza aérea" : "~1,100 personnel; army, coast guard, air force"}</li>
                  <li><strong>{es ? "Policía Nacional" : "National Police"}</strong> — {es ? "Ministerio de Seguridad; operaciones en Malabo y Bata" : "Ministry of Security; operations across Malabo and Bata"}</li>
                  <li><strong>{es ? "Guardia Presidencial / Batallón Ligero" : "Presidential Guard / Light Battalion"}</strong> — {es ? "Unidad de élite, protección del presidente Obiang" : "Elite unit, protection of President Obiang"}</li>
                  <li><strong>{es ? "Guardia Costera" : "Coast Guard"}</strong> — {es ? "Patrullaje del EEZ; entrenamiento naval español (FNGE)" : "EEZ patrol; Spanish FNGE naval training"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Contexto Político y Regional" : "Political & Regional Context"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? "Presidente Teodoro Obiang Nguema Mbasogo — en el poder desde 1979" : "President Teodoro Obiang Nguema Mbasogo — in power since 1979"}</li>
                  <li>{es ? "Territorio discontinuo: Bioko (Malabo), Río Muni (Bata), Annobón, Corisco" : "Discontinuous territory: Bioko (Malabo), Rio Muni (Bata), Annobon, Corisco"}</li>
                  <li>{es ? "Disputa islas Mbanié/Conga con Gabón — sin resolver" : "Mbanié/Conga islands dispute with Gabon — unresolved"}</li>
                  <li>{es ? "Ciudad de la Paz / Oyala — nueva capital en desarrollo" : "Ciudad de la Paz/Oyala — planned new capital under development"}</li>
                  <li>{es ? "Miembro CEMAC, CEEAC; salida provisional OPEC 2023" : "Member CEMAC, CEEAC; provisional OPEC exit 2023"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Economic Infrastructure */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Infraestructura Económica y Seguridad de Recursos" : "Economic Infrastructure & Resource Security"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">{es ? "Industria Petrolera" : "Oil Industry"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Block G / Zafiro — ~100,000 bbl/day</li>
                  <li>ExxonMobil, Marathon Oil, Hess, Chevron</li>
                  <li>GEPetrol — {es ? "empresa nacional" : "national company"}</li>
                  <li>EGLNG / Atlantic LNG — {es ? "planta GNL Bioko Island" : "LNG plant Bioko Island"}</li>
                  <li>{es ? "Refinería Punta Europa" : "Punta Europa refinery"}</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-3">{es ? "Infraestructura de Transporte" : "Transport Infrastructure"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Puerto de Malabo — carga general + offshore" : "Malabo Port — general cargo + offshore"}</li>
                  <li>{es ? "Puerto de Bata — principal puerto continental" : "Bata Port — main mainland port"}</li>
                  <li>SSG Malabo International Airport</li>
                  <li>Bata Airport (BSG)</li>
                  <li>{es ? "Carretera Bata-Mongomo (tierra firme)" : "Bata-Mongomo highway (mainland)"}</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-900 mb-3">{es ? "Marco Legal" : "Legal Framework"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Ley de Hidrocarburos — contratos exploración" : "Hydrocarbons Law — exploration contracts"}</li>
                  <li>{es ? "Ley de Protección de Datos (modelo CEMAC)" : "Data Protection Law (CEMAC model)"}</li>
                  <li>SONAGEF — {es ? "finanzas públicas" : "public finance"}</li>
                  <li>{es ? "Ley de Contratación Pública" : "Public Procurement Law"}</li>
                  <li>{es ? "China EXIM Bank / AfDB / Banco Mundial" : "China EXIM Bank / AfDB / World Bank"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne Capabilities */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Capacidades KabatOne para Guinea Ecuatorial" : "KabatOne Capabilities for Equatorial Guinea"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Operacional" : "Operational Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Despacho CAD integrado para Malabo y Bata con coordinación cross-island" : "Integrated CAD dispatch for Malabo and Bata with cross-island coordination"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Vigilancia de vídeo para puertos, plataformas offshore y fronteras marítimas" : "Video surveillance for ports, offshore platforms, and maritime boundaries"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Awareness situacional para operaciones FAR y guardia costera" : "Situational awareness for FAR operations and coast guard"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Monitoreo de infraestructura crítica: GEPetrol, EGLNG, Punta Europa" : "Critical infrastructure monitoring: GEPetrol, EGLNG, Punta Europa"}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Integración Regional" : "Regional Integration"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Coordinación con vecinos CEMAC: Gabón, Camerún, República del Congo" : "Coordination with CEMAC neighbors: Gabon, Cameroon, Republic of Congo"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Módulos multilingües español/francés para contextos de cooperación regional" : "Bilingual Spanish/French modules for regional cooperation contexts"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Arquitectura cloud-native adaptable a entornos de conectividad limitada" : "Cloud-native architecture adaptable to limited-connectivity environments"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Integración con marcos de financiamiento AfDB y China EXIM Bank" : "Integration with AfDB and China EXIM Bank financing frameworks"}</span></li>
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
          h2={es ? "¿Listo para modernizar la seguridad pública en Guinea Ecuatorial?" : "Ready to modernize public safety in Equatorial Guinea?"}
          subtitle={es ? "Contáctenos para una demostración adaptada a las necesidades de seguridad de Guinea Ecuatorial." : "Contact us for a demonstration tailored to Equatorial Guinea's security needs."}
        />
      </main>
      <Footer es={es} />
    </>
  );
}
