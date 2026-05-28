import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareSaoTomeAndPrincipe", locale);
}

export default async function PublicSafetySoftwareSaoTomeAndPrincipePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Santo Tomé y Príncipe | KabatOne"
    : "Public Safety Software for São Tomé and Príncipe | KabatOne";

  const description = es
    ? "KabatOne apoya las fuerzas de seguridad de Santo Tomé y Príncipe — FASTP, Policía Nacional, Guardia Costera — con vigilancia en tiempo real, despacho y gestión de incidentes para el archipiélago del Golfo de Guinea."
    : "KabatOne supports São Tomé and Príncipe security forces — FASTP, National Police, Coast Guard — with real-time surveillance, dispatch, and incident management for the Gulf of Guinea archipelago.";

  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-sao-tome-and-principe"
    : "https://kabatone.com/resources/public-safety-software-sao-tome-and-principe";

  const faqs = [
    {
      question: es
        ? "¿Qué desafíos de seguridad enfrenta Santo Tomé y Príncipe?"
        : "What security challenges does São Tomé and Príncipe face?",
      answer: es
        ? "Santo Tomé y Príncipe enfrenta múltiples amenazas: el Golfo de Guinea es una de las zonas de piratería más activas del mundo, con más de 130 incidentes anuales documentados por el IMB. La Zona de Desarrollo Conjunto (ZDC) con Nigeria requiere coordinación marítima para la seguridad petrolera. El país también enfrenta tráfico de drogas transoceánico (Colombia–Europa) y gestión de su ZEE de ~160,000 km² con capacidades limitadas."
        : "São Tomé and Príncipe faces multiple threats: the Gulf of Guinea is one of the world's most active piracy zones, with 130+ annual incidents documented by the IMB. The Joint Development Zone (JDZ) with Nigeria requires maritime coordination for oil security. The country also faces trans-oceanic drug trafficking (Colombia–Europe) and management of its ~160,000 km² EEZ with limited capacity.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne a las fuerzas de seguridad de Santo Tomé y Príncipe?"
        : "How does KabatOne support São Tomé and Príncipe security forces?",
      answer: es
        ? "KabatOne proporciona conciencia situacional unificada para la FASTP (~400-500 efectivos), la Policía Nacional (PNSTP) y la Guardia Costera. La plataforma integra vigilancia marítima del Golfo de Guinea, despacho CAD entre la isla de São Tomé y la isla de Príncipe, videoanalítica para el Puerto de São Tomé y el Aeropuerto Internacional, y coordinación con la arquitectura CRESMAO/Zona F de la CEDEAO para antipiratería."
        : "KabatOne provides unified situational awareness for the FASTP (~400-500 personnel), National Police (PNSTP), and Coast Guard. The platform integrates Gulf of Guinea maritime surveillance, CAD dispatch between São Tomé island and Príncipe island, video analytics for the Port of São Tomé and International Airport, and coordination with the CRESMAO/Zone F ECOWAS architecture for anti-piracy.",
    },
    {
      question: es
        ? "¿Qué infraestructura crítica requiere protección en Santo Tomé y Príncipe?"
        : "What critical infrastructure requires protection in São Tomé and Príncipe?",
      answer: es
        ? "La infraestructura crítica incluye el Puerto de São Tomé (principal punto de entrada), el Aeropuerto Internacional de São Tomé (TMS), las instalaciones de la Zona de Desarrollo Conjunto (ZDC) con Nigeria en Block 1, las plantaciones de cacao de exportación (Claudio Corallo, marca mundial), las redes de CSTL (telecomunicaciones) y EMAE (energía), y los resorts turísticos en crecimiento en ambas islas."
        : "Critical infrastructure includes the Port of São Tomé (main entry point), São Tomé International Airport (TMS), Joint Development Zone (JDZ) installations with Nigeria on Block 1, cocoa export plantations (Claudio Corallo, globally renowned), CSTL telecom and EMAE energy networks, and growing eco-tourism resorts across both islands.",
    },
    {
      question: es
        ? "¿Cómo gestiona KabatOne la coordinación marítima interinsular?"
        : "How does KabatOne manage inter-island maritime coordination?",
      answer: es
        ? "KabatOne integra el seguimiento AIS/radar de la Guardia Costera de Santo Tomé y Príncipe entre las dos islas principales (~150 km de separación), coordina con la Marina de Nigeria en la ZDC, y proporciona alertas de zonas de exclusión para pesca ilegal IUU en la ZEE de 160,000 km². La plataforma soporta comunicaciones multicanal entre la comisaría central de São Tomé y el destacamento de la isla de Príncipe."
        : "KabatOne integrates AIS/radar tracking from the Coast Guard between the two main islands (~150 km apart), coordinates with the Nigerian Navy in the JDZ, and provides exclusion zone alerts for IUU illegal fishing across the 160,000 km² EEZ. The platform supports multi-channel communications between the central police station in São Tomé and the Príncipe island detachment.",
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
    { name: "Home", url: "https://kabatone.com" },
    { name: "Resources", url: "https://kabatone.com/resources" },
    {
      name: es ? "Software de Seguridad Pública para Santo Tomé y Príncipe" : "Public Safety Software for São Tomé and Príncipe",
      url: canonical,
    },
  ]);

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section
        style={{ background: "linear-gradient(135deg,#0f1724 0%,#1a2744 100%)" }}
        className="pt-32 pb-20 px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-blue-400 text-sm font-medium">
              {es ? "Guía de Mercado — Santo Tomé y Príncipe" : "Market Guide — São Tomé and Príncipe"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
            {es
              ? "Software de Seguridad Pública para Santo Tomé y Príncipe"
              : "Public Safety Software for São Tomé and Príncipe"}
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            {es
              ? "Conciencia situacional unificada para la FASTP, Policía Nacional y Guardia Costera — antipiratería en el Golfo de Guinea, seguridad de la ZDC petrolífera con Nigeria, y coordinación interinsular."
              : "Unified situational awareness for the FASTP, National Police, and Coast Guard — Gulf of Guinea anti-piracy, Nigeria JDZ oil security, and inter-island coordination."}
          </p>
        </div>
      </section>

      {/* Security Forces */}
      <section className="py-20 px-6 bg-[#0f1724]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Fuerzas de Seguridad de Santo Tomé y Príncipe" : "São Tomé and Príncipe Security Forces"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "Las Fuerzas Armadas de Santo Tomé y Príncipe (FASTP) cuentan con ~400-500 efectivos y mantienen funciones militares, de guardia costera y de apoyo policial. El país es uno de los más pequeños de África, pero enfrenta desafíos marítimos desproporcionados en el Golfo de Guinea."
              : "The Armed Forces of São Tomé and Príncipe (FASTP) number ~400-500 personnel and maintain military, coast guard, and police support functions. The country is one of Africa's smallest, yet faces disproportionate maritime security challenges in the Gulf of Guinea."}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {es ? "FASTP y Policía Nacional" : "FASTP and National Police"}
              </h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "FASTP ~400-500 efectivos — Exército, Guarda Nacional e Marinha" : "FASTP ~400-500 personnel — Army, National Guard, and Navy"}</li>
                <li>• {es ? "Policía Nacional (PNSTP) — ~500 agentes, 7 distritos" : "National Police (PNSTP) — ~500 officers, 7 districts"}</li>
                <li>• {es ? "Guardia Costera — patrulleras ligeras en el Golfo de Guinea" : "Coast Guard — light patrol vessels in the Gulf of Guinea"}</li>
                <li>• {es ? "SIC — Serviço de Inteligência e Segurança do Estado" : "SIC — State Intelligence and Security Service"}</li>
                <li>• {es ? "Destacamento de la isla de Príncipe (~150 km norte)" : "Príncipe island detachment (~150 km north)"}</li>
                <li>• {es ? "Policía de Fronteiras — control aeroportuario y portuario" : "Border Police — airport and port control"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {es ? "Seguridad Marítima y Cooperación Regional" : "Maritime Security and Regional Cooperation"}
              </h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "ZEE: ~160,000 km² en el Golfo de Guinea" : "EEZ: ~160,000 km² in the Gulf of Guinea"}</li>
                <li>• {es ? "CRESMAO — Centro de Coordinación Regional (Zona F CEDEAO)" : "CRESMAO — Regional Coordination Centre (ECOWAS Zone F)"}</li>
                <li>• {es ? "Marina de Nigeria — coordinación ZDC Block 1 petróleo" : "Nigerian Navy — JDZ Block 1 oil coordination"}</li>
                <li>• {es ? "Arquitectura de Lomé — Código de Conducta CEDEAO/CEEAC 2013" : "Lome Architecture — ECOWAS/ECCAS Code of Conduct 2013"}</li>
                <li>• {es ? "IMB/ICC piratería — Golfo de Guinea zona de alto riesgo" : "IMB/ICC piracy — Gulf of Guinea high-risk zone"}</li>
                <li>• {es ? "Portugal/UE — apoyo CPLP a la capacidad marítima" : "Portugal/EU — CPLP maritime capacity support"}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Economy, Resources, Legal */}
      <section className="py-20 px-6" style={{ background: "#111c2e" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Economía, Recursos e Infraestructura" : "Economy, Resources & Infrastructure"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">
                {es ? "Recursos Naturales y Exportaciones" : "Natural Resources & Exports"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Cacao — variedades Forastero/Trinitario, marca Claudio Corallo mundial" : "Cocoa — Forastero/Trinitario varieties, Claudio Corallo world brand"}</li>
                <li>• {es ? "ZDC/JDZ — Zona de Desarrollo Conjunto con Nigeria, Block 1 Oando" : "JDZ — Joint Development Zone with Nigeria, Block 1 Oando"}</li>
                <li>• {es ? "Pesca artesanal — atún, pez espada; ZEE 160,000 km²" : "Artisanal fishing — tuna, swordfish; 160,000 km² EEZ"}</li>
                <li>• {es ? "Ecoturismo en crecimiento — selva ecuatorial, fauna única" : "Growing ecotourism — equatorial forest, unique fauna"}</li>
                <li>• {es ? "Petróleo offshore prospectivo — más allá de la ZDC" : "Prospective offshore oil — beyond the JDZ"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">
                {es ? "Infraestructura y Transporte" : "Infrastructure & Transport"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Aeropuerto Internacional de São Tomé (TMS) — hub regional" : "São Tomé International Airport (TMS) — regional hub"}</li>
                <li>• {es ? "Aeropuerto de Príncipe (PCP) — isla autónoma" : "Príncipe Airport (PCP) — autonomous island"}</li>
                <li>• {es ? "Puerto de São Tomé — principal acceso marítimo, muelle de 400 m" : "Port of São Tomé — main maritime access, 400 m quay"}</li>
                <li>• {es ? "CSTL — operador telecomunicaciones (Portugal Telecom/Altice)" : "CSTL — telecom operator (Portugal Telecom/Altice)"}</li>
                <li>• {es ? "EMAE — Empresa de Água e Electricidade, déficit energético" : "EMAE — Water and Electricity Company, energy deficit"}</li>
                <li>• {es ? "Cable submarino WACS — conectividad internacional" : "WACS submarine cable — international connectivity"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">
                {es ? "Marco Legal y Regulatorio" : "Legal & Regulatory Framework"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Lei de Contratação Pública — ARAP (autoridad de regulación)" : "Public Procurement Law — ARAP (regulatory authority)"}</li>
                <li>• {es ? "Banco Central de São Tomé e Príncipe (BCSTP) — Dobra (STN)" : "Central Bank (BCSTP) — São Tomé Dobra (STN), pegged to EUR"}</li>
                <li>• {es ? "ANARC — regulador de telecomunicaciones y frecuencias" : "ANARC — telecoms and frequency regulator"}</li>
                <li>• {es ? "CPLP — Comunidade dos Países de Língua Portuguesa" : "CPLP — Community of Portuguese Language Countries"}</li>
                <li>• {es ? "CEDEAO/ECOWAS — miembro pleno desde 1975" : "ECOWAS — full member since 1975"}</li>
                <li>• {es ? "FMI/BM/BAfD/Portugal/UE/China — socios de desarrollo" : "IMF/WB/AfDB/Portugal/EU/China — development partners"}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KabatOne Capabilities */}
      <section className="py-20 px-6 bg-[#0f1724]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {es
              ? "Capacidades de KabatOne para Santo Tomé y Príncipe"
              : "KabatOne Capabilities for São Tomé and Príncipe"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "La plataforma KabatOne ofrece una suite integrada adaptada a los retos del archipiélago de Santo Tomé y Príncipe, desde la vigilancia antipiratería en el Golfo de Guinea hasta la coordinación entre las dos islas y la seguridad de la Zona de Desarrollo Conjunto con Nigeria."
              : "The KabatOne platform provides an integrated suite adapted to São Tomé and Príncipe's archipelago challenges, from Gulf of Guinea anti-piracy surveillance to inter-island coordination and Joint Development Zone security with Nigeria."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  title: es ? "K-Safety — Centro de Comando Unificado" : "K-Safety — Unified Command Center",
                  desc: es
                    ? "Panel interinsular para São Tomé y Príncipe con visualización de incidentes en tiempo real, seguimiento de unidades FASTP/PNSTP y alertas de intrusión marítima en el Golfo de Guinea."
                    : "Inter-island dashboard for São Tomé and Príncipe with real-time incident visualization, FASTP/PNSTP unit tracking, and Gulf of Guinea maritime intrusion alerts.",
                },
                {
                  title: es ? "K-Dispatch — CAD Marítimo e Interinsular" : "K-Dispatch — Maritime & Inter-Island CAD",
                  desc: es
                    ? "Despacho coordinado entre la comisaría central de São Tomé y el destacamento de Príncipe, con integración a la Guardia Costera y CRESMAO para cobertura de la Zona F del Golfo de Guinea."
                    : "Coordinated dispatch between the São Tomé central station and the Príncipe detachment, with Coast Guard and CRESMAO integration for Gulf of Guinea Zone F coverage.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-blue-100/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                {
                  title: es ? "K-Video — Videovigilancia Portuaria y Aeroportuaria" : "K-Video — Port & Airport Video Surveillance",
                  desc: es
                    ? "Gestión de vídeo para el Puerto de São Tomé, el Aeropuerto Internacional TMS y el Aeropuerto de Príncipe PCP, con analítica de IA para detección de intrusiones y control de acceso en zonas críticas."
                    : "Video management for the Port of São Tomé, TMS International Airport, and PCP Príncipe Airport, with AI analytics for intrusion detection and access control at critical zones.",
                },
                {
                  title: es ? "K-Connect — Integración de Sensores Marítimos" : "K-Connect — Maritime Sensor Integration",
                  desc: es
                    ? "Fusión AIS/radar para seguimiento de embarcaciones en la ZEE de 160,000 km², detección de piratería en el Golfo de Guinea, y alertas de seguridad en las instalaciones de la ZDC con Nigeria para exploración del Block 1."
                    : "AIS/radar fusion for vessel tracking across the 160,000 km² EEZ, piracy detection in the Gulf of Guinea, and security alerts at JDZ installations with Nigeria for Block 1 oil exploration.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-blue-100/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: "#111c2e" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                <p className="text-blue-100/70 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        es={es}
        h2={
          es
            ? "¿Listo para modernizar la seguridad pública en Santo Tomé y Príncipe?"
            : "Ready to modernize public safety in São Tomé and Príncipe?"
        }
        subtitle={
          es
            ? "Hable con nuestro equipo sobre cómo KabatOne puede apoyar a la FASTP, la Guardia Costera y la Policía Nacional en el archipiélago del Golfo de Guinea."
            : "Speak with our team about how KabatOne can support the FASTP, Coast Guard, and National Police across the Gulf of Guinea archipelago."
        }
      />
      <Footer es={es} />
    </>
  );
}
