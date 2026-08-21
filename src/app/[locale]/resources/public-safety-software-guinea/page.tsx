import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareGuinea", locale);
}

export default async function PublicSafetySoftwareGuineaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Guinea | FAG/PNF, Puerto de Conakry y Seguridad Minera – KabatOne"
    : "Public Safety Software for Guinea | FAG/PNF, Port of Conakry & Mining Security – KabatOne";
  const description = es
    ? "KabatOne entrega plataforma de seguridad pública para las Fuerzas Armadas de Guinea (FAG), Policía Nacional, Puerto de Conakry y seguridad de la mayor reserva mundial de bauxita y yacimientos de hierro."
    : "KabatOne delivers public safety platform for the Guinean Armed Forces (FAG), National Police, Port of Conakry, and security for the world's largest bauxite reserves and iron ore deposits.";
  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-guinea"
    : "https://kabatone.com/resources/public-safety-software-guinea";

  const faqs = [
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Guinea?"
        : "What are the main security forces in Guinea?",
      answer: es
        ? "Las Fuerzas Armadas de Guinea (FAG) cuentan con aproximadamente 12,000-15,000 efectivos (ejército, guardia marina, fuerza aérea). La Policía Nacional de Guinea (PNF) y la Gendarmería Nacional operan en 7 regiones administrativas y 33 prefecturas. El Bataillon Autonome des Forces Spéciales (BAFS) es la unidad de élite antiterrorista. Tras el golpe de estado del 5 de septiembre de 2021, el CNRD (Comité Nacional de Reagrupamiento y Desarrollo) bajo el coronel Mamadi Doumbouya gobierna el país."
        : "The Guinean Armed Forces (FAG) number approximately 12,000-15,000 personnel (army, navy, air force). The Guinean National Police (PNF) and National Gendarmerie operate across 7 administrative regions and 33 prefectures. The Autonomous Special Forces Battalion (BAFS) is the elite counterterrorism unit. Following the September 5, 2021 coup, the CNRD (National Rally and Development Committee) under Colonel Mamadi Doumbouya governs the country.",
    },
    {
      question: es
        ? "¿Cuáles son los recursos minerales estratégicos de Guinea?"
        : "What are Guinea's strategic mineral resources?",
      answer: es
        ? "Guinea posee las mayores reservas mundiales de bauxita (más del 25% de las reservas globales) con operaciones de CBG (Compagnie des Bauxites de Guinée — Alcoa/Rio Tinto/Halco Mining), CBK (Compagnie des Bauxites de Kindia), GAC (Guinea Alumina Corporation — Emirates Global Aluminium) y SMB-Winning Consortium. El Projet Simandou (Rio Tinto/SMB-Winning) es el mayor yacimiento de hierro sin explotar del mundo (~2,000 Mt). Guinea también tiene importantes yacimientos de oro (Siguiri/AngloGold Ashanti), diamantes y tierras raras."
        : "Guinea holds the world's largest bauxite reserves (over 25% of global reserves) with operations by CBG (Compagnie des Bauxites de Guinée — Alcoa/Rio Tinto/Halco Mining), CBK (Compagnie des Bauxites de Kindia), GAC (Guinea Alumina Corporation — Emirates Global Aluminium), and SMB-Winning Consortium. The Simandou Project (Rio Tinto/SMB-Winning) is the world's largest untapped iron ore deposit (~2,000 Mt). Guinea also has significant gold (Siguiri/AngloGold Ashanti), diamond, and rare earth deposits.",
    },
    {
      question: es
        ? "¿Cuál es el contexto político y de seguridad en Guinea post-golpe 2021?"
        : "What is Guinea's post-2021 coup political and security context?",
      answer: es
        ? "El golpe del CNRD en septiembre 2021 derrocó al presidente Alpha Condé tras protestas masivas. El coronel Mamadi Doumbouya lidera la transición. Los principales desafíos de seguridad incluyen: tensiones en el Fouta Djallon (región Peul), violencia electoral histórica (masacre Estadio Conakry 2009 — 157 muertos), control del tráfico de drogas por la costa atlántica (ruta África Occidental hacia Europa), desafíos en fronteras con Mali, Sierra Leona, Liberia y Guinea-Bissau, y presencia potencial de grupos armados regionales."
        : "The CNRD coup in September 2021 ousted President Alpha Condé following massive protests. Colonel Mamadi Doumbouya leads the transition. Key security challenges include: tensions in the Fouta Djallon (Peul region), historical electoral violence (2009 Conakry Stadium massacre — 157 killed), drug trafficking control via the Atlantic coast (West Africa to Europe route), challenges along borders with Mali, Sierra Leone, Liberia, and Guinea-Bissau, and potential presence of regional armed groups.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Guinea?"
        : "What is the legal and procurement framework in Guinea?",
      answer: es
        ? "El Code des Marchés Publics (Décret D/2012/050/PRG) y la DNMP (Direction Nationale des Marchés Publics) rigen las adquisiciones. El Code Minier (2011/2013/2019 revisiones) regula el sector minero con participación del estado (15%). La Loi L/2016/037/AN sobre cybersécurité establece el marco digital. Los contratos mineros se negocian directamente con el gobierno. Los financiadores incluyen el FMI, Banco Mundial, China EXIM Bank (Simandou), AfDB y cooperación francesa."
        : "The Code des Marchés Publics (Decree D/2012/050/PRG) and DNMP (National Directorate of Public Markets) govern acquisitions. The Mining Code (2011/2013/2019 revisions) regulates the mining sector with state participation (15%). Loi L/2016/037/AN on cybersecurity establishes the digital framework. Mining contracts are negotiated directly with the government. Financiers include IMF, World Bank, China EXIM Bank (Simandou), AfDB, and French cooperation.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Guinea?"
        : "How does KabatOne support public safety in Guinea?",
      answer: es
        ? "KabatOne integra vigilancia de vídeo, despacho CAD y awareness situacional para operaciones FAG/PNF en las 7 regiones y 33 prefecturas. La plataforma de seguridad minera protege operaciones de CBG, GAC, SMB-Winning y el proyecto Simandou. El sistema de seguridad portuaria cubre el Puerto de Conakry. Los módulos de gestión de fronteras apoyan el control de fronteras con los 6 países vecinos. La arquitectura es adaptable a entornos de baja conectividad."
        : "KabatOne integrates video surveillance, CAD dispatch, and situational awareness for FAG/PNF operations across 7 regions and 33 prefectures. Mining security platform protects CBG, GAC, SMB-Winning operations, and the Simandou project. Port security system covers the Port of Conakry. Border management modules support control of borders with 6 neighboring countries. Architecture adapts to low-connectivity environments.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources" : "https://kabatone.com/resources" },
    { name: es ? "Software de Seguridad Pública para Guinea" : "Public Safety Software for Guinea", url: canonical },
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
              {es ? "Guinea · África Occidental · Bauxita · Hierro Simandou · Conakry" : "Guinea · West Africa · Bauxite · Simandou Iron Ore · Conakry"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es ? "Software de Seguridad Pública para Guinea" : "Public Safety Software for Guinea"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {es
                ? "Plataforma unificada para FAG/CNRD, Policía Nacional, Puerto de Conakry y seguridad de la mayor reserva mundial de bauxita y proyecto Simandou."
                : "Unified platform for FAG/CNRD, National Police, Port of Conakry, and security for the world's largest bauxite reserves and Simandou iron ore project."}
            </p>
          </div>
        </section>

        {/* Security Forces */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fuerzas de Seguridad y Contexto Post-Golpe" : "Security Forces & Post-Coup Context"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Estructura de Seguridad Nacional" : "National Security Structure"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>FAG</strong> — {es ? "~12,000-15,000 efectivos (ejército/marina/aire)" : "~12,000-15,000 personnel (army/navy/air force)"}</li>
                  <li><strong>PNF + {es ? "Gendarmería" : "Gendarmerie"}</strong> — {es ? "7 regiones / 33 prefecturas" : "7 regions / 33 prefectures"}</li>
                  <li><strong>BAFS</strong> — {es ? "Bataillon Autonome des Forces Spéciales" : "Autonomous Special Forces Battalion"}</li>
                  <li><strong>CNRD</strong> — {es ? "Junta militar desde sept. 2021 (Cnel. Doumbouya)" : "Military junta since Sept. 2021 (Col. Doumbouya)"}</li>
                  <li><strong>{es ? "Guardia Costera" : "Coast Guard"}</strong> — {es ? "Puerto de Conakry / costas atlánticas" : "Port of Conakry / Atlantic coastlines"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Desafíos de Seguridad" : "Security Challenges"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? "Transición post-golpe 2021 — inestabilidad institucional" : "Post-2021 coup transition — institutional instability"}</li>
                  <li>{es ? "Tensiones étnicas Fouta Djallon (región Peul)" : "Ethnic tensions Fouta Djallon (Peul region)"}</li>
                  <li>{es ? "Tráfico de drogas ruta atlántica África Occidental-Europa" : "Drug trafficking West Africa-Europe Atlantic route"}</li>
                  <li>{es ? "Seguridad minera — minería ilegal CBG/GAC/Simandou" : "Mining security — illegal mining CBG/GAC/Simandou"}</li>
                  <li>{es ? "6 fronteras terrestres: Mali/Sierra Leona/Liberia/Guinea-Bissau/Senegal/Costa de Marfil" : "6 land borders: Mali/Sierra Leone/Liberia/Guinea-Bissau/Senegal/Ivory Coast"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Economic Infrastructure */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Recursos Minerales e Infraestructura Estratégica" : "Mineral Resources & Strategic Infrastructure"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">{es ? "Minería (>25% Reservas Mundiales Bauxita)" : "Mining (>25% World Bauxite Reserves)"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>CBG — Alcoa / Rio Tinto / Halco Mining</li>
                  <li>GAC — Emirates Global Aluminium</li>
                  <li>SMB-Winning Consortium</li>
                  <li>CBK — {es ? "Compagnie des Bauxites de Kindia" : "Compagnie des Bauxites de Kindia"}</li>
                  <li>Simandou — {es ? "mayor hierro sin explotar ~2,000 Mt" : "largest untapped iron ore ~2,000 Mt"}</li>
                  <li>Siguiri — AngloGold Ashanti ({es ? "oro" : "gold"})</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-3">{es ? "Infraestructura de Transporte" : "Transport Infrastructure"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Puerto de Conakry — principal puerto nacional" : "Port of Conakry — main national port"}</li>
                  <li>Conakry International Airport (CKY)</li>
                  <li>{es ? "Ferrocarril Conakry-Kankan (en rehabilitación)" : "Conakry-Kankan railway (rehabilitation)"}</li>
                  <li>{es ? "Simandou — ferrocarril 650 km + puerto Morebaya (en desarrollo)" : "Simandou — 650 km railway + Morebaya port (dev)"}</li>
                  <li>{es ? "Complejo hidroeléctrico Kaleta + Souapiti" : "Kaleta + Souapiti hydropower complex"}</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-900 mb-3">{es ? "Marco Legal" : "Legal Framework"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>DNMP — {es ? "Décret D/2012/050 contratación" : "Décret D/2012/050 procurement"}</li>
                  <li>{es ? "Code Minier 2011/2019 — 15% estado" : "Mining Code 2011/2019 — 15% state"}</li>
                  <li>{es ? "Loi cybersécurité L/2016/037" : "Cybersecurity Law L/2016/037"}</li>
                  <li>{es ? "China EXIM Bank (Simandou) / AfDB / BM" : "China EXIM Bank (Simandou) / AfDB / WB"}</li>
                  <li>ECOWAS / {es ? "Franco guineano (GNF)" : "Guinean franc (GNF)"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne Capabilities */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Capacidades KabatOne para Guinea" : "KabatOne Capabilities for Guinea"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Nacional y Minera" : "National & Mining Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Vigilancia de vídeo para Puerto de Conakry, terminales CBG/GAC y zona Simandou" : "Video surveillance for Port of Conakry, CBG/GAC terminals, and Simandou zone"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Despacho CAD para FAG/PNF en 7 regiones y 33 prefecturas" : "CAD dispatch for FAG/PNF across 7 regions and 33 prefectures"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Seguridad perimetral para operaciones mineras CBG, GAC y SMB-Winning" : "Perimeter security for CBG, GAC, and SMB-Winning mining operations"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Monitoreo infraestructura Kaleta/Souapiti y ferrocarril Simandou" : "Kaleta/Souapiti infrastructure monitoring and Simandou railway"}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Gestión de Fronteras y Seguridad Marítima" : "Border Management & Maritime Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Control de 6 fronteras terrestres: Mali/Sierra Leona/Liberia/Guinea-Bissau/Senegal/Costa de Marfil" : "Control of 6 land borders: Mali/Sierra Leone/Liberia/Guinea-Bissau/Senegal/Ivory Coast"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Módulos marítimos para guardia costera y monitoreo de tráfico atlántico" : "Maritime modules for coast guard and Atlantic traffic monitoring"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Coordinación ECOWAS/CEDEAO con países vecinos" : "ECOWAS coordination with neighboring countries"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Adaptable a zonas de baja conectividad del interior (Fouta Djallon, Simandou)" : "Adaptable to low-connectivity interior zones (Fouta Djallon, Simandou)"}</span></li>
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
          h2={es ? "¿Listo para modernizar la seguridad pública en Guinea?" : "Ready to modernize public safety in Guinea?"}
          subtitle={es ? "Contáctenos para una demostración adaptada a las necesidades de seguridad de Guinea." : "Contact us for a demonstration tailored to Guinea's security needs."}
        />
      </main>
      <Footer es={es} />
    </>
  );
}
