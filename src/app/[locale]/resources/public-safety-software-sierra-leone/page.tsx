import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareSierraLeone", locale);
}

export default async function PublicSafetySoftwareSierraLeonePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Sierra Leona | RSLAF/SLP, Puerto de Freetown y Seguridad Minera – KabatOne"
    : "Public Safety Software for Sierra Leone | RSLAF/SLP, Freetown Port & Mining Security – KabatOne";
  const description = es
    ? "KabatOne entrega plataforma de seguridad pública para la República de Sierra Leona Fuerzas Armadas (RSLAF), Policía (SLP), Puerto de Freetown y seguridad de recursos minerales estratégicos."
    : "KabatOne delivers public safety platform for the Republic of Sierra Leone Armed Forces (RSLAF), Police (SLP), Port of Freetown, and security for strategic mineral resources.";
  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-sierra-leone"
    : "https://kabatone.com/resources/public-safety-software-sierra-leone";

  const faqs = [
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Sierra Leona?"
        : "What are the main security forces in Sierra Leone?",
      answer: es
        ? "La República de Sierra Leona Fuerzas Armadas (RSLAF) cuenta con aproximadamente 13,000 efectivos. La Policía de Sierra Leona (SLP) cubre 5 regiones y más de 150 distritos policiales. El Servicio de Inteligencia y Seguridad de Sierra Leona (SSIS) coordina inteligencia. La Sierra Leone Coast Guard protege las costas atlánticas y el Puerto de Freetown. Sierra Leona fue devastada por una guerra civil (1991-2002) y se reconstruye institucionalmente con apoyo de UNAMSIL/UNMISS y Reino Unido."
        : "The Republic of Sierra Leone Armed Forces (RSLAF) number approximately 13,000 personnel. Sierra Leone Police (SLP) covers 5 regions and over 150 police districts. The Sierra Leone Security and Intelligence Service (SSIS) coordinates intelligence. Sierra Leone Coast Guard protects Atlantic coastlines and Freetown Port. Sierra Leone was devastated by civil war (1991-2002) and is rebuilding institutionally with UNAMSIL/UNMISS and UK support.",
    },
    {
      question: es
        ? "¿Cuáles son los recursos estratégicos de Sierra Leona?"
        : "What are Sierra Leone's strategic resources?",
      answer: es
        ? "Sierra Leona tiene importantes reservas de diamantes (certificación Kimberley Process — DACPA), hierro (Tonkolili/African Minerals, Londres/Bumbuna-II), rutilo/ilmenita (Sierra Rutile/Iluka Resources — mayor productor mundial de rutilo natural), bauxita, oro y cromo. El Puerto de Freetown (Queen Elizabeth II Quay) gestiona exportaciones mineras. La refinería de Marampa Iron Ore y las operaciones de African Industries Group son económicamente críticas."
        : "Sierra Leone has significant diamond reserves (Kimberley Process certification — DACPA), iron ore (Tonkolili/African Minerals, Bumbuna-II), rutile/ilmenite (Sierra Rutile/Iluka Resources — world's largest natural rutile producer), bauxite, gold, and chrome. Freetown Port (Queen Elizabeth II Quay) handles mining exports. Marampa Iron Ore refinery and African Industries Group operations are economically critical.",
    },
    {
      question: es
        ? "¿Cuáles son los desafíos de seguridad en Sierra Leona?"
        : "What are Sierra Leone's security challenges?",
      answer: es
        ? "Aunque Sierra Leona no enfrenta conflicto activo, los desafíos incluyen: seguridad minera (minería ilegal, comercio de diamantes de conflicto potencial), crimen organizado y tráfico de drogas por la costa atlántica, piratería en el Golfo de Guinea, tensiones políticas post-elecciones 2023 (SLPP vs APC), pandillas juveniles en Freetown (Poda Poda y otras), y riesgos de inundaciones/deslizamientos (Freetown 2017, mudslide 1,000+ muertos)."
        : "Though Sierra Leone faces no active conflict, challenges include: mining security (illegal mining, potential conflict diamond trade), organized crime and drug trafficking via the Atlantic coast, Gulf of Guinea piracy, political tensions post-2023 elections (SLPP vs APC), youth gangs in Freetown (Poda Poda and others), and flood/landslide risks (Freetown 2017 mudslide killed 1,000+).",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Sierra Leona?"
        : "What is the legal and procurement framework in Sierra Leone?",
      answer: es
        ? "La Ley de Adquisiciones Públicas (NPPA Act 2016) y la NPPA (National Public Procurement Authority) rigen las compras del gobierno. La Ley de Protección de Datos de Sierra Leona (2022) establece el marco de privacidad. La Comisión Anticorrupción (ACC) tiene jurisdicción de cumplimiento. Los financiadores incluyen el Banco Mundial (DFIL), AfDB, UE, DFID/FCDO del Reino Unido y USAID. Sierra Leona es miembro de ECOWAS/CEDEAO."
        : "The Public Procurement Act (NPPA Act 2016) and NPPA (National Public Procurement Authority) govern government purchases. Sierra Leone Data Protection Act (2022) establishes privacy framework. Anti-Corruption Commission (ACC) has compliance jurisdiction. Financiers include World Bank (DFIL), AfDB, EU, UK DFID/FCDO, and USAID. Sierra Leone is an ECOWAS member.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Sierra Leona?"
        : "How does KabatOne support public safety in Sierra Leone?",
      answer: es
        ? "KabatOne integra vigilancia de vídeo, despacho CAD y awareness situacional para operaciones RSLAF/SLP en las 5 regiones. La plataforma de seguridad portuaria protege el Queen Elizabeth II Quay de Freetown. Los módulos de seguridad minera monitorean operaciones en Tonkolili, Sierra Rutile y Marampa. El sistema de respuesta a emergencias gestiona riesgos de inundaciones/deslizamientos en Freetown. La arquitectura es adaptable a entornos de baja conectividad."
        : "KabatOne integrates video surveillance, CAD dispatch, and situational awareness for RSLAF/SLP operations across all 5 regions. Port security platform protects Freetown's Queen Elizabeth II Quay. Mining security modules monitor operations at Tonkolili, Sierra Rutile, and Marampa. Emergency response system manages flood/landslide risks in Freetown. Architecture adapts to low-connectivity environments.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources" : "https://kabatone.com/resources" },
    { name: es ? "Software de Seguridad Pública para Sierra Leona" : "Public Safety Software for Sierra Leone", url: canonical },
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
              {es ? "Sierra Leona · África Occidental · Diamantes · Rutilo · Hierro" : "Sierra Leone · West Africa · Diamonds · Rutile · Iron Ore"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es ? "Software de Seguridad Pública para Sierra Leona" : "Public Safety Software for Sierra Leone"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {es
                ? "Plataforma unificada para RSLAF, Policía SLP, Puerto de Freetown y seguridad de recursos minerales estratégicos — diamantes, rutilo e hierro."
                : "Unified platform for RSLAF, SLP Police, Freetown Port, and security for strategic mineral resources — diamonds, rutile, and iron ore."}
            </p>
          </div>
        </section>

        {/* Security Forces */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fuerzas de Seguridad y Contexto Institucional" : "Security Forces & Institutional Context"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Estructura de Seguridad" : "Security Structure"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>RSLAF</strong> — {es ? "~13,000 efectivos (ejército/marina/fuerza aérea)" : "~13,000 personnel (army/navy/air force)"}</li>
                  <li><strong>SLP (Sierra Leone Police)</strong> — {es ? "5 regiones / 150+ distritos" : "5 regions / 150+ districts"}</li>
                  <li><strong>SSIS</strong> — {es ? "Servicio de Inteligencia y Seguridad" : "Security and Intelligence Service"}</li>
                  <li><strong>{es ? "Guardia Costera" : "Coast Guard"}</strong> — {es ? "Costas atlánticas / Puerto de Freetown" : "Atlantic coastline / Freetown Port"}</li>
                  <li>{es ? "Apoyo histórico: UNAMSIL → UNMISS / UK IMATT" : "Historical support: UNAMSIL → UNMISS / UK IMATT"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Contexto Post-Conflicto y Desafíos" : "Post-Conflict Context & Challenges"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? "Guerra civil 1991-2002 — reconstrucción institucional en curso" : "Civil war 1991-2002 — ongoing institutional reconstruction"}</li>
                  <li>{es ? "Minería ilegal y tráfico de diamantes — DACPA/Kimberley Process" : "Illegal mining and diamond trafficking — DACPA/Kimberley Process"}</li>
                  <li>{es ? "Inundaciones/deslizamientos Freetown — riesgo catastrófico (2017: 1,000+)" : "Freetown floods/landslides — catastrophic risk (2017: 1,000+"}</li>
                  <li>{es ? "Pandillas juveniles en Freetown — seguridad urbana" : "Youth gangs in Freetown — urban security"}</li>
                  <li>{es ? "Piratería Golfo de Guinea — operaciones marítimas" : "Gulf of Guinea piracy — maritime operations"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Economic Infrastructure */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Recursos Estratégicos e Infraestructura" : "Strategic Resources & Infrastructure"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">{es ? "Recursos Minerales" : "Mineral Resources"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Diamantes — DACPA / Kimberley Process" : "Diamonds — DACPA / Kimberley Process"}</li>
                  <li>{es ? "Rutilo/ilmenita — Sierra Rutile/Iluka (mayor productor mundial natural)" : "Rutile/ilmenite — Sierra Rutile/Iluka (world's largest natural)"}</li>
                  <li>{es ? "Hierro — Tonkolili / African Minerals / Marampa" : "Iron ore — Tonkolili / African Minerals / Marampa"}</li>
                  <li>{es ? "Bauxita, oro, cromo" : "Bauxite, gold, chrome"}</li>
                  <li>{es ? "Bumbuna-II hydropower (550 MW potencial)" : "Bumbuna-II hydropower (550 MW potential)"}</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-3">{es ? "Infraestructura de Transporte" : "Transport Infrastructure"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Puerto de Freetown — Queen Elizabeth II Quay" : "Freetown Port — Queen Elizabeth II Quay"}</li>
                  <li>{es ? "Puerto de Pepel — exportaciones hierro" : "Pepel Port — iron ore exports"}</li>
                  <li>Lungi International Airport (FNA)</li>
                  <li>{es ? "Ferry Freetown-Lungi (conexión crítica)" : "Freetown-Lungi ferry (critical connection)"}</li>
                  <li>{es ? "Carretera Freetown-Bo-Kenema (principal corredor)" : "Freetown-Bo-Kenema road (main corridor)"}</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-900 mb-3">{es ? "Marco Legal" : "Legal Framework"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>NPPA — {es ? "Ley Adquisiciones 2016" : "Procurement Act 2016"}</li>
                  <li>{es ? "Ley Protección de Datos 2022" : "Data Protection Act 2022"}</li>
                  <li>ACC — {es ? "Comisión Anticorrupción" : "Anti-Corruption Commission"}</li>
                  <li>{es ? "UK FCDO / Banco Mundial / AfDB / USAID" : "UK FCDO / World Bank / AfDB / USAID"}</li>
                  <li>ECOWAS / {es ? "zona Leone (SLL)" : "Leone currency (SLL)"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne Capabilities */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Capacidades KabatOne para Sierra Leona" : "KabatOne Capabilities for Sierra Leone"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Nacional y Minera" : "National & Mining Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Vigilancia de vídeo para Puerto de Freetown (QEII Quay), Pepel y zonas mineras" : "Video surveillance for Freetown Port (QEII Quay), Pepel, and mining zones"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Despacho CAD para SLP en 5 regiones y 150+ distritos policiales" : "CAD dispatch for SLP across 5 regions and 150+ police districts"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Monitoreo Sierra Rutile/Iluka, Tonkolili y operaciones Marampa" : "Monitoring of Sierra Rutile/Iluka, Tonkolili, and Marampa operations"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Sistema de respuesta a emergencias para inundaciones/deslizamientos en Freetown" : "Emergency response system for Freetown floods/landslides"}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Marítima y Urbana" : "Maritime & Urban Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Módulos marítimos para guardia costera y anti-piratería Golfo de Guinea" : "Maritime modules for coast guard and anti-piracy Gulf of Guinea"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Gestión de seguridad urbana en Freetown y ciudades principales" : "Urban security management in Freetown and major cities"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Coordinación ECOWAS con vecinos Guinea, Liberia, Guinea-Bissau" : "ECOWAS coordination with neighbors Guinea, Liberia, Guinea-Bissau"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Integración con sistemas de alerta temprana de gestión de desastres" : "Integration with disaster management early warning systems"}</span></li>
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
          h2={es ? "¿Listo para modernizar la seguridad pública en Sierra Leona?" : "Ready to modernize public safety in Sierra Leone?"}
          subtitle={es ? "Contáctenos para una demostración adaptada a las necesidades de seguridad de Sierra Leona." : "Contact us for a demonstration tailored to Sierra Leone's security needs."}
        />
      </main>
      <Footer es={es} />
    </>
  );
}
