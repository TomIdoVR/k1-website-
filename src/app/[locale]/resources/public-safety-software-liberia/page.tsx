import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareLiberia", locale);
}

export default async function PublicSafetySoftwareLeiberiaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Liberia | AFL/LNP, Puerto de Monrovia y Seguridad Minera – KabatOne"
    : "Public Safety Software for Liberia | AFL/LNP, Port of Monrovia & Mining Security – KabatOne";
  const description = es
    ? "KabatOne entrega plataforma de seguridad pública para las Fuerzas Armadas de Liberia (AFL), Policía Nacional (LNP), Puerto de Monrovia y seguridad de hierro, caucho y recursos minerales."
    : "KabatOne delivers public safety platform for the Armed Forces of Liberia (AFL), National Police (LNP), Port of Monrovia, and security for iron ore, rubber, and mineral resources.";
  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-liberia"
    : "https://kabatone.com/resources/public-safety-software-liberia";

  const faqs = [
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Liberia?"
        : "What are the main security forces in Liberia?",
      answer: es
        ? "Las Fuerzas Armadas de Liberia (AFL) cuentan con aproximadamente 2,000 efectivos (ejército y elementos navales), reconstruidas con apoyo de UNMIL/EE.UU. tras las guerras civiles (1989-96, 1999-2003). La Policía Nacional de Liberia (LNP) opera en 15 condados. La Agencia de Seguridad Nacional (NSA) coordina inteligencia. La Guardia Costera protege las costas atlánticas y el Puerto de Monrovia. El gobierno del presidente Joseph Boakai (elegido 2023) continúa la reforma del sector seguridad."
        : "The Armed Forces of Liberia (AFL) number approximately 2,000 personnel (army and naval elements), rebuilt with UNMIL/US support following civil wars (1989-96, 1999-2003). The Liberia National Police (LNP) operates across 15 counties. The National Security Agency (NSA) coordinates intelligence. The Coast Guard protects Atlantic coastlines and Port of Monrovia. President Joseph Boakai's government (elected 2023) continues security sector reform.",
    },
    {
      question: es
        ? "¿Cuáles son los recursos estratégicos de Liberia?"
        : "What are Liberia's strategic resources?",
      answer: es
        ? "El hierro es el principal recurso exportado, con minas en Nimba (ArcelorMittal — 4+ millones toneladas/año), Bong Mines y Bomi Hills. El caucho natural (Firestone/Bridgestone Liberia, Salala Rubber) es el segundo mayor exportador africano. La madera/tala controlada (FSC) y el oro (New Liberty Gold Mine/Atlantic Gold) son significativos. El Puerto de Buchanan gestiona exportaciones de hierro. La costa atlántica de 570 km tiene potencial pesquero y de hidrocarburos offshore (prospección activa por ExxonMobil/Anadarko)."
        : "Iron ore is the primary export resource, with mines at Nimba (ArcelorMittal — 4+ million tons/year), Bong Mines, and Bomi Hills. Natural rubber (Firestone/Bridgestone Liberia, Salala Rubber) makes Liberia Africa's second largest rubber exporter. Timber/logging (FSC controlled) and gold (New Liberty Gold Mine/Atlantic Gold) are significant. Buchanan Port handles iron ore exports. The 570 km Atlantic coast has fishing and offshore hydrocarbon potential (active prospecting by ExxonMobil/Anadarko).",
    },
    {
      question: es
        ? "¿Cuáles son los desafíos de seguridad en Liberia?"
        : "What are Liberia's security challenges?",
      answer: es
        ? "El mayor desafío es la fragilidad institucional post-guerra civil. Los problemas incluyen: capacidad limitada de AFL/LNP (UNMIL retirada 2018), corrupción sistémica (bajos rangos Transparencia Internacional), tráfico de drogas (cocaína/heroína) por la ruta del Atlántico, conflictos por tierras (comunidades vs. concesiones mineras/caucho), inseguridad en fronteras con Guinea, Sierra Leona y Costa de Marfil (legado guerra), y crimen organizado en Monrovia. Las protestas de 2023-2024 post-elecciones requirieron respuesta policial."
        : "The greatest challenge is post-civil war institutional fragility. Problems include: limited AFL/LNP capacity (UNMIL withdrew 2018), systemic corruption (low Transparency International rankings), drug trafficking (cocaine/heroin) via the Atlantic route, land conflicts (communities vs. mining/rubber concessions), border insecurity with Guinea, Sierra Leone, and Ivory Coast (war legacy), and organized crime in Monrovia. 2023-2024 post-election protests required police response.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Liberia?"
        : "What is the legal and procurement framework in Liberia?",
      answer: es
        ? "La Ley de Adquisiciones y Concesiones Públicas (PPCC Act 2010) y la PPCC (Public Procurement and Concessions Commission) rigen las compras gubernamentales. La Ley de Protección de Datos Personales (2021) establece el marco de privacidad. El Centro de Regulación de Telecomunicaciones (LTA) supervisa el sector TIC. Los financiadores incluyen el Banco Mundial, AfDB, USAID, UE, FMI y el gobierno de EE.UU. (apoyo histórico desde fundación 1847). Liberia usa el dólar liberiano y el dólar estadounidense como monedas de curso legal."
        : "The Public Procurement and Concessions Commission Act (PPCC Act 2010) and PPCC govern government purchases. The Personal Data Protection Act (2021) establishes the privacy framework. The Liberia Telecommunications Authority (LTA) oversees the ICT sector. Financiers include World Bank, AfDB, USAID, EU, IMF, and the US government (historical support since 1847 founding). Liberia uses both Liberian dollar and US dollar as legal tender.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Liberia?"
        : "How does KabatOne support public safety in Liberia?",
      answer: es
        ? "KabatOne integra vigilancia de vídeo, despacho CAD y awareness situacional para operaciones AFL/LNP en los 15 condados. La plataforma de seguridad portuaria protege los puertos de Monrovia y Buchanan. Los módulos de seguridad minera monitorean operaciones ArcelorMittal/Nimba y Firestone. El sistema soporta la gestión de fronteras con Guinea, Sierra Leona y Costa de Marfil. La arquitectura cloud-native es adaptable a entornos de conectividad limitada en zonas rurales."
        : "KabatOne integrates video surveillance, CAD dispatch, and situational awareness for AFL/LNP operations across all 15 counties. Port security platform protects Monrovia and Buchanan ports. Mining security modules monitor ArcelorMittal/Nimba and Firestone operations. System supports border management with Guinea, Sierra Leone, and Ivory Coast. Cloud-native architecture adapts to limited-connectivity rural environments.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources" : "https://kabatone.com/resources" },
    { name: es ? "Software de Seguridad Pública para Liberia" : "Public Safety Software for Liberia", url: canonical },
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
              {es ? "Liberia · África Occidental · Hierro · Caucho · Puerto de Monrovia" : "Liberia · West Africa · Iron Ore · Rubber · Port of Monrovia"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es ? "Software de Seguridad Pública para Liberia" : "Public Safety Software for Liberia"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {es
                ? "Plataforma unificada para AFL, Policía LNP, Puerto de Monrovia y seguridad de recursos — hierro ArcelorMittal/Nimba, caucho Firestone y prospección offshore."
                : "Unified platform for AFL, LNP Police, Port of Monrovia, and resource security — ArcelorMittal/Nimba iron ore, Firestone rubber, and offshore prospecting."}
            </p>
          </div>
        </section>

        {/* Security Forces */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fuerzas de Seguridad y Contexto Post-Conflicto" : "Security Forces & Post-Conflict Context"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Estructura de Seguridad Nacional" : "National Security Structure"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>AFL</strong> — {es ? "~2,000 efectivos, reconstruidas post-UNMIL" : "~2,000 personnel, rebuilt post-UNMIL"}</li>
                  <li><strong>LNP (Liberia National Police)</strong> — {es ? "15 condados" : "15 counties"}</li>
                  <li><strong>NSA</strong> — {es ? "Agencia de Seguridad Nacional / inteligencia" : "National Security Agency / intelligence"}</li>
                  <li><strong>{es ? "Guardia Costera" : "Coast Guard"}</strong> — {es ? "570 km costas atlánticas / Puerto Monrovia" : "570 km Atlantic coastline / Port Monrovia"}</li>
                  <li>{es ? "Pres. Joseph Boakai (2023) — reforma sector seguridad" : "Pres. Joseph Boakai (2023) — security sector reform"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Desafíos de Seguridad" : "Security Challenges"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? "Fragilidad institucional post-guerras civiles (1989-96, 1999-2003)" : "Institutional fragility post-civil wars (1989-96, 1999-2003)"}</li>
                  <li>{es ? "Capacidad limitada AFL/LNP — UNMIL retirada 2018" : "Limited AFL/LNP capacity — UNMIL withdrew 2018"}</li>
                  <li>{es ? "Tráfico drogas ruta atlántica + crimen Monrovia" : "Atlantic drug route trafficking + Monrovia crime"}</li>
                  <li>{es ? "Conflictos de tierras: comunidades vs. concesiones" : "Land conflicts: communities vs. concessions"}</li>
                  <li>{es ? "Fronteras porosas Guinea/Sierra Leona/Costa de Marfil" : "Porous borders Guinea/Sierra Leone/Ivory Coast"}</li>
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
                <h3 className="font-semibold text-blue-900 mb-3">{es ? "Recursos Naturales" : "Natural Resources"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>ArcelorMittal Nimba — {es ? "4+ M toneladas hierro/año" : "4+ M tons iron ore/year"}</li>
                  <li>Firestone/Bridgestone — {es ? "2do exportador caucho África" : "2nd Africa rubber exporter"}</li>
                  <li>New Liberty Gold Mine / Atlantic Gold</li>
                  <li>{es ? "Madera FSC — tala controlada" : "FSC timber — controlled logging"}</li>
                  <li>{es ? "Offshore: ExxonMobil/Anadarko (prospección)" : "Offshore: ExxonMobil/Anadarko (prospecting)"}</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-3">{es ? "Infraestructura de Transporte" : "Transport Infrastructure"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Puerto de Monrovia — principal puerto nacional" : "Port of Monrovia — main national port"}</li>
                  <li>{es ? "Puerto de Buchanan — exportaciones hierro" : "Buchanan Port — iron ore exports"}</li>
                  <li>Roberts International Airport (ROB)</li>
                  <li>{es ? "Ferrocarril minero Nimba-Buchanan (ArcelorMittal)" : "Nimba-Buchanan mining railway (ArcelorMittal)"}</li>
                  <li>{es ? "Red de carreteras (rehabilitación post-conflicto)" : "Road network (post-conflict rehabilitation)"}</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-900 mb-3">{es ? "Marco Legal" : "Legal Framework"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>PPCC Act 2010 — {es ? "adquisiciones públicas" : "public procurement"}</li>
                  <li>{es ? "Ley Protección Datos Personales 2021" : "Personal Data Protection Act 2021"}</li>
                  <li>LTA — {es ? "regulador telecomunicaciones" : "telecom regulator"}</li>
                  <li>{es ? "USAID / Banco Mundial / AfDB / UE / FMI" : "USAID / World Bank / AfDB / EU / IMF"}</li>
                  <li>{es ? "Moneda: Dólar liberiano + USD (curso legal)" : "Currency: Liberian dollar + USD (legal tender)"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne Capabilities */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Capacidades KabatOne para Liberia" : "KabatOne Capabilities for Liberia"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Nacional y de Recursos" : "National & Resource Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Vigilancia de vídeo para Puerto de Monrovia, Buchanan y corredores mineros Nimba" : "Video surveillance for Monrovia Port, Buchanan, and Nimba mining corridors"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Despacho CAD para LNP en los 15 condados con priorización por nivel de amenaza" : "CAD dispatch for LNP across 15 counties with threat-level prioritization"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Seguridad perimetral ArcelorMittal/Nimba y plantaciones Firestone" : "Perimeter security for ArcelorMittal/Nimba and Firestone plantations"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Centro de comando AFL con awareness situacional nacional" : "AFL command center with national situational awareness"}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Gestión de Fronteras y Marítima" : "Border & Maritime Management"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Control de fronteras con Guinea, Sierra Leona y Costa de Marfil" : "Border control with Guinea, Sierra Leone, and Ivory Coast"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Módulos marítimos para guardia costera y anti-piratería atlántica" : "Maritime modules for coast guard and Atlantic anti-piracy"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Integración con marcos ECOWAS de seguridad regional" : "Integration with ECOWAS regional security frameworks"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Adaptable a zonas rurales con conectividad limitada (interior Nimba/Lofa)" : "Adaptable to rural zones with limited connectivity (Nimba/Lofa interior)"}</span></li>
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
          h2={es ? "¿Listo para modernizar la seguridad pública en Liberia?" : "Ready to modernize public safety in Liberia?"}
          subtitle={es ? "Contáctenos para una demostración adaptada a las necesidades de seguridad de Liberia." : "Contact us for a demonstration tailored to Liberia's security needs."}
        />
      </main>
      <Footer es={es} />
    </>
  );
}
