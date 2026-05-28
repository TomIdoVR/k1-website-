import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareComoros", locale);
}

export default async function PublicSafetySoftwareComorosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Comoras | KabatOne"
    : "Public Safety Software for Comoros | KabatOne";

  const description = es
    ? "KabatOne apoya las fuerzas de seguridad de Comoras — FNDF, Gendarmería, Guardia Costera — con vigilancia en tiempo real, despacho y gestión de incidentes para el archipiélago del Océano Índico."
    : "KabatOne supports Comoros security forces — FNDF, Gendarmerie, Coast Guard — with real-time surveillance, dispatch, and incident management for the Indian Ocean archipelago.";

  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-comoros"
    : "https://kabatone.com/resources/public-safety-software-comoros";

  const faqs = [
    {
      question: es
        ? "¿Qué desafíos de seguridad enfrenta Comoras?"
        : "What security challenges does Comoros face?",
      answer: es
        ? "Comoras ha sufrido más de 20 golpes de estado o intentos desde la independencia en 1975, el récord mundial. Los desafíos incluyen seguridad marítima en el Canal de Mozambique, gestión de fronteras entre las tres islas principales (Grande Comore, Anjouan, Mohéli) más Mayotte administrada por Francia, y la amenaza de radicalización yihadista desde la crisis de Mozambique."
        : "Comoros has experienced more than 20 coups or coup attempts since independence in 1975 — the world record. Challenges include maritime security in the Mozambique Channel, border management between the three main islands (Grande Comore, Anjouan, Moheli) plus French-administered Mayotte, and jihadist radicalization threats from the Mozambique crisis.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne a las fuerzas de seguridad de Comoras?"
        : "How does KabatOne support Comoros security forces?",
      answer: es
        ? "KabatOne proporciona conciencia situacional unificada para la FNDF (~800 efectivos), la Gendarmería Nacional y la Guardia Costera. La plataforma integra vigilancia marítima del Canal de Mozambique, despacho CAD interisleño, videoanalítica para el Puerto de Moroni, y coordinación con la misión EUNAVFOR Atalanta."
        : "KabatOne provides unified situational awareness for the FNDF (~800 personnel), National Gendarmerie, and Coast Guard. The platform integrates Mozambique Channel maritime surveillance, inter-island CAD dispatch, video analytics for the Port of Moroni, and coordination with the EUNAVFOR Atalanta mission.",
    },
    {
      question: es
        ? "¿Qué infraestructura crítica requiere protección en Comoras?"
        : "What critical infrastructure requires protection in Comoros?",
      answer: es
        ? "La infraestructura crítica incluye el Puerto de Moroni (principal puerto de entrada), el Aeropuerto Internacional Príncipe Saïd Ibrahim (HAH/Moroni), las plantas de energía geotérmica del volcán Karthala, las redes de telecomunicaciones de Comores Telecom/Telma, y los cultivos de ylang-ylang (Comoras suministra ~80% de la producción mundial)."
        : "Critical infrastructure includes the Port of Moroni (main entry point), Prince Said Ibrahim International Airport (HAH/Moroni), geothermal energy plants near Karthala volcano, Comores Telecom/Telma networks, and ylang-ylang crop security (Comoros supplies ~80% of world production).",
    },
    {
      question: es
        ? "¿Cómo gestiona KabatOne la coordinación marítima interisleña?"
        : "How does KabatOne manage inter-island maritime coordination?",
      answer: es
        ? "KabatOne integra el seguimiento AIS/radar de la Guardia Costera de Comoras a través de los tres principales grupos de islas, coordina con la Marina francesa en Mayotte, y proporciona alertas de zonas de exclusión para la pesca ilegal (IUU) en la ZEE de 320,000 km². La plataforma soporta comunicaciones multicanal entre las comisarías de Moroni, Mutsamudu y Fomboni."
        : "KabatOne integrates AIS/radar tracking from the Comorian Coast Guard across the three main island groups, coordinates with the French Navy in Mayotte, and provides exclusion zone alerts for illegal fishing (IUU) in the 320,000 km² EEZ. The platform supports multi-channel communications between police stations in Moroni, Mutsamudu, and Fomboni.",
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
      name: es ? "Software de Seguridad Pública para Comoras" : "Public Safety Software for Comoros",
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
              {es ? "Guía de Mercado — Comoras" : "Market Guide — Comoros"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
            {es
              ? "Software de Seguridad Pública para Comoras"
              : "Public Safety Software for Comoros"}
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            {es
              ? "Conciencia situacional unificada para la FNDF, Gendarmería y Guardia Costera — gestión del archipiélago, vigilancia del Canal de Mozambique y coordinación interisleña."
              : "Unified situational awareness for the FNDF, Gendarmerie, and Coast Guard — archipelago management, Mozambique Channel surveillance, and inter-island coordination."}
          </p>
        </div>
      </section>

      {/* Security Forces */}
      <section className="py-20 px-6 bg-[#0f1724]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Fuerzas de Seguridad de Comoras" : "Comoros Security Forces"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "Las Fuerzas Nacionales de Desarrollo y Defensa (FNDF) son el único cuerpo de seguridad unificado de Comoras, reuniendo funciones militares y policiales. El archipiélago ha sufrido más de 20 golpes o intentos desde 1975."
              : "The National Defence and Development Forces (FNDF) serve as Comoros' unified security body, combining military and police functions. The archipelago has experienced over 20 coups or coup attempts since 1975."}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {es ? "FNDF — Fuerzas de Tierra" : "FNDF — Land Forces"}
              </h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "~800 efectivos totales (Ejército/Gendarmería/GS)" : "~800 total personnel (Army/Gendarmerie/GS)"}</li>
                <li>• {es ? "3 batallones insulares: Grande Comore, Anjouan, Mohéli" : "3 island battalions: Grande Comore, Anjouan, Moheli"}</li>
                <li>• {es ? "Gendarmería Nacional — orden público y zonas rurales" : "National Gendarmerie — public order and rural zones"}</li>
                <li>• {es ? "Guardia de Seguridad Presidencial (GS)" : "Presidential Security Guard (GS)"}</li>
                <li>• {es ? "Policía Nacional — comisarías en Moroni/Mutsamudu/Fomboni" : "National Police — stations in Moroni/Mutsamudu/Fomboni"}</li>
                <li>• {es ? "Dirección General de Documentación y Seguridad del Territorio (DGDST)" : "General Directorate of Documentation and Territorial Security (DGDST)"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {es ? "Guardia Costera y Marina" : "Coast Guard and Maritime"}
              </h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "Guardia Costera de Comoras — patrulleras ligeras" : "Comorian Coast Guard — light patrol vessels"}</li>
                <li>• {es ? "ZEE: ~320,000 km² en el Canal de Mozambique" : "EEZ: ~320,000 km² in the Mozambique Channel"}</li>
                <li>• {es ? "Frontera marítima con Mayotte (Francia/UE)" : "Maritime border with Mayotte (France/EU)"}</li>
                <li>• {es ? "Coordinación con EUNAVFOR Atalanta (Océano Índico)" : "Coordination with EUNAVFOR Atalanta (Indian Ocean)"}</li>
                <li>• {es ? "Puerto de Moroni — principal acceso marítimo" : "Port of Moroni — main maritime access"}</li>
                <li>• {es ? "Pesca ilegal IUU — principal amenaza a la ZEE" : "Illegal fishing IUU — main EEZ threat"}</li>
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
                {es ? "Agricultura y Exportaciones" : "Agriculture & Exports"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Ylang-ylang: ~80% producción mundial (perfumería Chanel/Dior)" : "Ylang-ylang: ~80% world production (Chanel/Dior perfumes)"}</li>
                <li>• {es ? "Vainilla: 2ª África; clavo de olor; canela" : "Vanilla: 2nd Africa; cloves; cinnamon"}</li>
                <li>• {es ? "Pesca artesanal — base de subsistencia costera" : "Artisanal fishing — coastal subsistence base"}</li>
                <li>• {es ? "Cacao y copra en Anjouan y Mohéli" : "Cocoa and copra in Anjouan and Moheli"}</li>
                <li>• {es ? "Remesas diáspora ~25% PIB (Francia/Reunión/Mayotte)" : "Diaspora remittances ~25% GDP (France/Reunion/Mayotte)"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">
                {es ? "Infraestructura y Transporte" : "Infrastructure & Transport"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Aeropuerto Internacional Príncipe Saïd Ibrahim (HAH/Moroni)" : "Prince Said Ibrahim International Airport (HAH/Moroni)"}</li>
                <li>• {es ? "Aeropuerto de Ouani (AJN/Anjouan) + Bandaressalam (NWA/Mohéli)" : "Ouani Airport (AJN/Anjouan) + Bandaressalam (NWA/Moheli)"}</li>
                <li>• {es ? "Puerto de Moroni — principal; Puerto de Mutsamudu (Anjouan)" : "Port of Moroni — main; Port of Mutsamudu (Anjouan)"}</li>
                <li>• {es ? "Volcán Karthala (2,361 m) — geotérmico activo" : "Karthala volcano (2,361 m) — active geothermal"}</li>
                <li>• {es ? "Comores Telecom/Telma — cobertura 3G/4G limitada" : "Comores Telecom/Telma — limited 3G/4G coverage"}</li>
                <li>• {es ? "SONELEC electricidad — déficit energético crónico" : "SONELEC electricity — chronic energy deficit"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">
                {es ? "Marco Legal y Regulatorio" : "Legal & Regulatory Framework"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Código de Contratos Públicos — ARMP Comoras" : "Public Procurement Code — ARMP Comoros"}</li>
                <li>• {es ? "Constitución 2018 — unión de tres islas autónomas" : "Constitution 2018 — union of three autonomous islands"}</li>
                <li>• {es ? "Banco Central de Comoras (BCC) — franco comorense (KMF)" : "Central Bank of Comoros (BCC) — Comorian franc (KMF)"}</li>
                <li>• {es ? "ANRTIC — regulador de telecomunicaciones" : "ANRTIC — telecommunications regulator"}</li>
                <li>• {es ? "OCI/OIC, UA/AU, Lusofrancofonía árabe — miembro" : "OIC, AU, Arab-Francophonie — member"}</li>
                <li>• {es ? "FMI/BM/BAfD/Francia/UE — socios de desarrollo" : "IMF/WB/AfDB/France/EU — development partners"}</li>
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
              ? "Capacidades de KabatOne para Comoras"
              : "KabatOne Capabilities for Comoros"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "La plataforma KabatOne ofrece una suite integrada adaptada a los retos del archipiélago comorense, desde la vigilancia marítima del Canal de Mozambique hasta la coordinación interisleña y la gestión de riesgos volcánicos."
              : "The KabatOne platform provides an integrated suite adapted to Comorian archipelago challenges, from Mozambique Channel maritime surveillance to inter-island coordination and volcanic risk management."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  title: es ? "K-Safety — Centro de Comando Unificado" : "K-Safety — Unified Command Center",
                  desc: es
                    ? "Panel interisleño para las tres islas principales con visualización de incidentes en tiempo real, seguimiento de unidades FNDF/Gendarmería y alertas volcánicas del Karthala."
                    : "Inter-island dashboard for the three main islands with real-time incident visualization, FNDF/Gendarmerie unit tracking, and Karthala volcanic eruption alerts.",
                },
                {
                  title: es ? "K-Dispatch — CAD Marítimo e Interisleño" : "K-Dispatch — Maritime & Inter-Island CAD",
                  desc: es
                    ? "Despacho coordinado entre las comisarías de Moroni, Mutsamudu y Fomboni, con integración a la Guardia Costera y EUNAVFOR Atalanta para cobertura del Canal de Mozambique."
                    : "Coordinated dispatch between Moroni, Mutsamudu, and Fomboni stations, with Coast Guard and EUNAVFOR Atalanta integration for Mozambique Channel coverage.",
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
                  title: es ? "K-Video — Videovigilancia Portuaria e Insular" : "K-Video — Port & Island Video Surveillance",
                  desc: es
                    ? "Gestión de vídeo para el Puerto de Moroni, Mutsamudu y los aeropuertos internacionales, con analítica de IA para detección de intrusiones y control de acceso en zonas críticas."
                    : "Video management for the Port of Moroni, Mutsamudu, and international airports, with AI analytics for intrusion detection and access control at critical zones.",
                },
                {
                  title: es ? "K-Connect — Integración de Sensores Marítimos" : "K-Connect — Maritime Sensor Integration",
                  desc: es
                    ? "Fusión AIS/radar para seguimiento de embarcaciones en la ZEE de 320,000 km², detección de pesca ilegal IUU, y alertas de cruce de frontera marítima con Mayotte."
                    : "AIS/radar fusion for vessel tracking across the 320,000 km² EEZ, IUU illegal fishing detection, and maritime border crossing alerts with Mayotte.",
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
            ? "¿Listo para modernizar la seguridad pública en Comoras?"
            : "Ready to modernize public safety in Comoros?"
        }
        subtitle={
          es
            ? "Hable con nuestro equipo sobre cómo KabatOne puede apoyar a la FNDF, la Guardia Costera y la Policía Nacional en el archipiélago comorense."
            : "Speak with our team about how KabatOne can support the FNDF, Coast Guard, and National Police across the Comorian archipelago."
        }
      />
      <Footer es={es} />
    </>
  );
}
