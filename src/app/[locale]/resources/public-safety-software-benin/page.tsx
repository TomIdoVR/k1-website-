import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareBenin", locale);
}

export default async function PublicSafetySoftwareBeninPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Benin | FAB/PNB, Puerto de Cotonou y Seguridad del Sahel – KabatOne"
    : "Public Safety Software for Benin | FAB/PNB, Port of Cotonou & Sahel Security – KabatOne";
  const description = es
    ? "KabatOne entrega plataforma de seguridad pública para las Fuerzas Armadas de Benin (FAB), Policía Nacional, Puerto de Cotonou y seguridad ante amenaza yihadista en el norte del país."
    : "KabatOne delivers public safety platform for the Beninese Armed Forces (FAB), National Police, Port of Cotonou, and security against jihadist threats in the country's north.";
  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-benin/"
    : "https://kabatone.com/resources/public-safety-software-benin/";

  const faqs = [
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Benin?"
        : "What are the main security forces in Benin?",
      answer: es
        ? "Las Fuerzas Armadas de Benin (FAB) cuentan con aproximadamente 7,250 efectivos (ejército, marina, fuerza aérea). La Policía Nacional de Benin (PNB) y la Gendarmería Nacional operan en 12 departamentos. La Unidad Especial de Intervención de la Policía (UISP) actúa como fuerza antiterrorista. La Force Spéciale Interarmées (FSI), creada en 2022, coordina operaciones norte contra yihadistas GSIM/JNIM en las regiones Atacora y Alibori."
        : "The Beninese Armed Forces (FAB) number approximately 7,250 personnel (army, navy, air force). The Benin National Police (PNB) and National Gendarmerie operate across 12 departments. The Special Police Intervention Unit (UISP) acts as counterterrorism force. The Force Spéciale Interarmées (FSI), created in 2022, coordinates northern operations against GSIM/JNIM jihadists in Atacora and Alibori regions.",
    },
    {
      question: es
        ? "¿Cuál es la importancia estratégica del Puerto de Cotonou?"
        : "What is the strategic importance of the Port of Cotonou?",
      answer: es
        ? "El Puerto Autónomo de Cotonou (PAC) es el principal puerto de África Occidental francófona y maneja aproximadamente 12 millones de toneladas anuales. Es hub logístico crítico para Niger, Burkina Faso y Mali (países sin litoral). El terminal de contenedores es operado por Bolloré/MSC Benin Terminal. La marina nacional patrulla la ZEE de 200 nm en el Golfo de Guinea. Cotonou compite con Tema (Ghana) y Lomé (Togo) como puerto de tránsito regional."
        : "The Autonomous Port of Cotonou (PAC) is the main port in francophone West Africa, handling approximately 12 million tons annually. It is the critical logistics hub for Niger, Burkina Faso, and Mali (landlocked countries). The container terminal is operated by Bolloré/MSC Benin Terminal. The national navy patrols the 200 nm EEZ in the Gulf of Guinea. Cotonou competes with Tema (Ghana) and Lomé (Togo) as a regional transit port.",
    },
    {
      question: es
        ? "¿Cuáles son los desafíos de seguridad en Benin?"
        : "What are Benin's security challenges?",
      answer: es
        ? "La amenaza yihadista en el norte es el mayor desafío: GSIM/JNIM y Estado Islámico en el Gran Sáhara (EIGS) han extendido su presencia desde Mali/Burkina Faso. Los ataques en Atacora y Alibori se multiplicaron entre 2021-2024 con decenas de muertos. La Triple frontera Benin/Burkina Faso/Níger es zona de alto riesgo. La piratería en el Golfo de Guinea afecta operaciones marítimas. El tráfico de combustible desde Nigeria (patchwork) es un reto de seguridad económica."
        : "The jihadist threat in the north is the biggest challenge: GSIM/JNIM and Islamic State in the Greater Sahara (EIGS) have expanded from Mali/Burkina Faso. Attacks in Atacora and Alibori multiplied between 2021-2024 with dozens killed. The Benin/Burkina Faso/Niger triple border is a high-risk zone. Gulf of Guinea piracy affects maritime operations. Fuel smuggling from Nigeria (patchwork) is an economic security challenge.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Benin?"
        : "What is the legal and procurement framework in Benin?",
      answer: es
        ? "La Loi 2009-02 sur les Marchés Publics y la DNCMP (Direction Nationale de Contrôle des Marchés Publics) rigen las adquisiciones. La Loi 2017-20 sobre el Código del Numériqu rige protección de datos. La CRIET (Cour de Répression des Infractions Économiques) incluye jurisdicción cibernética. Los financiadores activos incluyen el Banco Mundial, AfDB, UE, CEDEAO/UEMOA y la Agence Française de Développement. La plataforma digital Bénin Révélé impulsa la transformación digital."
        : "Loi 2009-02 on Public Procurement and DNCMP (National Directorate for Control of Public Markets) govern acquisitions. Loi 2017-20 on the Digital Code governs data protection. CRIET (Economic Crimes Court) includes cyber jurisdiction. Active financiers include World Bank, AfDB, EU, ECOWAS/UEMOA, and Agence Française de Développement. The Bénin Révélé digital platform drives digital transformation.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Benin?"
        : "How does KabatOne support public safety in Benin?",
      answer: es
        ? "KabatOne integra vigilancia de vídeo, despacho CAD y awareness situacional para operaciones FAB/PNB en los 12 departamentos. Los módulos de gestión de fronteras apoyan la FSI en las regiones norte de Atacora y Alibori. La plataforma de seguridad portuaria protege el Puerto de Cotonou y la ZEE del Golfo de Guinea. El sistema es adaptable a entornos de baja conectividad en zonas rurales del norte."
        : "KabatOne integrates video surveillance, CAD dispatch, and situational awareness for FAB/PNB operations across all 12 departments. Border management modules support FSI in northern Atacora and Alibori regions. Port security platform protects the Port of Cotonou and Gulf of Guinea EEZ. System adapts to low-connectivity environments in rural northern zones.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/" },
    { name: es ? "Software de Seguridad Pública para Benin" : "Public Safety Software for Benin", url: canonical },
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
              {es ? "Benin · África Occidental · Puerto de Cotonou · Sahel" : "Benin · West Africa · Port of Cotonou · Sahel"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es ? "Software de Seguridad Pública para Benin" : "Public Safety Software for Benin"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {es
                ? "Plataforma unificada para FAB, Policía Nacional, FSI operaciones norte y seguridad del Puerto de Cotonou — hub logístico para países sin litoral del Sahel."
                : "Unified platform for FAB, National Police, FSI northern operations, and Port of Cotonou security — logistics hub for Sahel landlocked countries."}
            </p>
          </div>
        </section>

        {/* Security Forces */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fuerzas de Seguridad y Amenazas Operacionales" : "Security Forces & Operational Threats"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Estructura de Seguridad Nacional" : "National Security Structure"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>FAB</strong> — {es ? "~7,250 efectivos (ejército/marina/fuerza aérea)" : "~7,250 personnel (army/navy/air force)"}</li>
                  <li><strong>PNB + {es ? "Gendarmería Nacional" : "National Gendarmerie"}</strong> — {es ? "12 departamentos" : "12 departments"}</li>
                  <li><strong>FSI</strong> — {es ? "Force Spéciale Interarmées (2022) — operaciones norte" : "Force Spéciale Interarmées (2022) — northern ops"}</li>
                  <li><strong>UISP</strong> — {es ? "Unidad Especial de Intervención Policial antiterrorista" : "Special Police Intervention Unit counterterrorism"}</li>
                  <li><strong>{es ? "Marina Nacional" : "National Navy"}</strong> — {es ? "ZEE 200 nm Golfo de Guinea" : "200 nm EEZ Gulf of Guinea"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Principales Amenazas" : "Key Threats"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? "GSIM/JNIM + EIGS — Atacora/Alibori desde 2021" : "GSIM/JNIM + EIGS — Atacora/Alibori since 2021"}</li>
                  <li>{es ? "Triple frontera Benin/Burkina Faso/Níger" : "Benin/Burkina Faso/Niger triple border zone"}</li>
                  <li>{es ? "Piratería Golfo de Guinea — operaciones marítimas" : "Gulf of Guinea piracy — maritime operations"}</li>
                  <li>{es ? "Tráfico combustible desde Nigeria (patchwork)" : "Fuel smuggling from Nigeria (patchwork)"}</li>
                  <li>{es ? "Desplazados internos del norte (PDIs)" : "Internal displacement in the north (IDPs)"}</li>
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
                <h3 className="font-semibold text-blue-900 mb-3">{es ? "Puerto de Cotonou (PAC)" : "Port of Cotonou (PAC)"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Principal puerto francófono África Occidental" : "Main port in francophone West Africa"}</li>
                  <li>{es ? "~12 millones toneladas/año" : "~12 million tons/year"}</li>
                  <li>{es ? "Hub: Níger, Burkina Faso, Mali" : "Hub: Niger, Burkina Faso, Mali"}</li>
                  <li>Bolloré / MSC Benin Terminal</li>
                  <li>{es ? "Terminal petrolera / productos derivados" : "Petroleum terminal / derivatives"}</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-3">{es ? "Economía y Recursos" : "Economy & Resources"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Algodón — principal exportación agrícola" : "Cotton — main agricultural export"}</li>
                  <li>Cotonou Airport (COO)</li>
                  <li>{es ? "Re-exportación a Nigeria (mercado informal)" : "Re-export to Nigeria (informal market)"}</li>
                  <li>{es ? "Cashew / anacardo — exportación creciente" : "Cashew — growing export"}</li>
                  <li>BCEAO / UEMOA — {es ? "zona CFA" : "CFA franc zone"}</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-900 mb-3">{es ? "Marco Legal" : "Legal Framework"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>DNCMP — {es ? "Loi 2009-02 contratación" : "Loi 2009-02 procurement"}</li>
                  <li>{es ? "Loi 2017-20 Código Digital / datos" : "Loi 2017-20 Digital Code / data"}</li>
                  <li>CRIET — {es ? "jurisdicción cibernética" : "cyber jurisdiction"}</li>
                  <li>{es ? "Bénin Révélé — transformación digital" : "Bénin Révélé — digital transformation"}</li>
                  <li>{es ? "AFD / Banco Mundial / AfDB / UE / CEDEAO" : "AFD / World Bank / AfDB / EU / ECOWAS"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne Capabilities */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Capacidades KabatOne para Benin" : "KabatOne Capabilities for Benin"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Nacional y Portuaria" : "National & Port Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Vigilancia de vídeo para Puerto de Cotonou (PAC), terminal Bolloré/MSC y accesos" : "Video surveillance for Port of Cotonou (PAC), Bolloré/MSC terminal, and access points"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Despacho CAD integrado para PNB/Gendarmería en los 12 departamentos" : "Integrated CAD dispatch for PNB/Gendarmerie across 12 departments"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Gestión de fronteras norte — FSI operaciones Atacora/Alibori" : "Northern border management — FSI operations Atacora/Alibori"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "C4 centro de comando para coordinación FAB/FSI/UISP" : "C4 command center for FAB/FSI/UISP coordination"}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Marítima y Regional" : "Maritime & Regional Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Módulos marítimos para ZEE del Golfo de Guinea y anti-piratería" : "Maritime modules for Gulf of Guinea EEZ and anti-piracy"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Integración con CRESMAO y arquitectura de seguridad marítima CEDEAO" : "Integration with CRESMAO and ECOWAS maritime security architecture"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Coordinación con vecinos Nigeria, Togo, Burkina Faso, Níger" : "Coordination with neighbors Nigeria, Togo, Burkina Faso, Niger"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Gestión de desplazados internos y alertas tempranas en zonas norte" : "IDP management and early warning in northern zones"}</span></li>
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
          h2={es ? "¿Listo para modernizar la seguridad pública en Benin?" : "Ready to modernize public safety in Benin?"}
          subtitle={es ? "Contáctenos para una demostración adaptada a las necesidades de seguridad de Benin." : "Contact us for a demonstration tailored to Benin's security needs."}
        />
      </main>
      <Footer es={es} />
    </>
  );
}
