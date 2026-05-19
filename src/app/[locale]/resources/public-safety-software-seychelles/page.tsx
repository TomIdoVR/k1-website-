import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareSeychelles", locale);
}

export default async function PublicSafetySoftwareSeychellesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Seychelles | KabatOne"
    : "Public Safety Software for Seychelles | KabatOne";

  const description = es
    ? "KabatOne apoya las fuerzas de seguridad de Seychelles — SPDF, Policía Nacional, Guardia Costera — con vigilancia en tiempo real, despacho y gestión de incidentes para el archipiélago del Océano Índico."
    : "KabatOne supports Seychelles security forces — SPDF, National Police, Coast Guard — with real-time surveillance, dispatch, and incident management for the Indian Ocean archipelago.";

  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-seychelles"
    : "https://kabatone.com/resources/public-safety-software-seychelles";

  const faqs = [
    {
      question: es
        ? "¿Qué desafíos de seguridad enfrenta Seychelles?"
        : "What security challenges does Seychelles face?",
      answer: es
        ? "Seychelles enfrenta amenazas marítimas significativas en el Océano Índico occidental: piratería somalí (aunque reducida desde 2012, sigue siendo latente), narcotráfico transoceánico (rutas Colombia/Afganistán hacia Europa/Asia), y gestión de su vasta ZEE de 1.37 millones de km² con solo ~98,000 habitantes. La dependencia del turismo (~25% del PIB) hace que los incidentes de seguridad tengan impacto económico inmediato."
        : "Seychelles faces significant maritime threats in the western Indian Ocean: Somali piracy (reduced since 2012, but latent), trans-oceanic drug trafficking (Colombia/Afghanistan routes to Europe/Asia), and management of its vast 1.37 million km² EEZ with only ~98,000 inhabitants. Tourism dependency (~25% GDP) means security incidents have immediate economic impact.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne a las fuerzas de seguridad de Seychelles?"
        : "How does KabatOne support Seychelles security forces?",
      answer: es
        ? "KabatOne proporciona conciencia situacional unificada para la Fuerza de Defensa del Pueblo de Seychelles (SPDF ~500 efectivos), la Agencia Nacional de Policía (NPA), la Guardia Costera y la Agencia Nacional de Gestión de Riesgos (NDMA). La plataforma integra vigilancia marítima del Océano Índico, despacho CAD entre las ~115 islas habitadas, videoanalítica para el Puerto Victoria y el Aeropuerto Internacional de Seychelles, y coordinación con EUNAVFOR Atalanta y Combined Maritime Forces (CMF)."
        : "KabatOne provides unified situational awareness for the Seychelles People's Defence Forces (SPDF ~500 personnel), National Police Agency (NPA), Coast Guard, and National Disaster Management Agency (NDMA). The platform integrates Indian Ocean maritime surveillance, CAD dispatch across the ~115 inhabited islands, video analytics for Victoria Port and Seychelles International Airport, and coordination with EUNAVFOR Atalanta and Combined Maritime Forces (CMF).",
    },
    {
      question: es
        ? "¿Qué infraestructura crítica requiere protección en Seychelles?"
        : "What critical infrastructure requires protection in Seychelles?",
      answer: es
        ? "La infraestructura crítica incluye el Puerto Victoria (mayor puerto de transbordo del Océano Índico occidental), el Aeropuerto Internacional de Seychelles (SEZ/Mahé), los centros turísticos de lujo en Mahé/Praslin/La Digue (~350,000 turistas/año), las plantas de energía de PUC, los cables submarinos SAFE/SEAS (conectividad de África Oriental), y las instalaciones del Centro de Coordinación Regional de Fusión (RCOC) para antipiratería del Océano Índico."
        : "Critical infrastructure includes Victoria Port (western Indian Ocean's largest transshipment hub), Seychelles International Airport (SEZ/Mahe), luxury resort complexes on Mahe/Praslin/La Digue (~350,000 tourists/year), PUC energy plants, SAFE/SEAS submarine cables (East Africa connectivity), and the Regional Coordination Operations Centre (RCOC) for Indian Ocean anti-piracy.",
    },
    {
      question: es
        ? "¿Cómo gestiona KabatOne la vigilancia marítima de la vasta ZEE de Seychelles?"
        : "How does KabatOne manage maritime surveillance across Seychelles' vast EEZ?",
      answer: es
        ? "KabatOne integra el seguimiento AIS/radar satelital de la Guardia Costera de Seychelles en la ZEE de 1.37 millones de km² — la mayor por habitante del mundo. La plataforma coordina con el RCOC de Victoria, EUNAVFOR Atalanta, las Combined Maritime Forces (CTF-150/151), y el Sistema de Alerta Regional Marítima (MASE) del Océano Índico. Proporciona alertas de pesca ilegal IUU, seguimiento de buques sospechosos y protocolo de respuesta a incidentes de piratería."
        : "KabatOne integrates satellite AIS/radar tracking from the Seychelles Coast Guard across the 1.37 million km² EEZ — the world's largest per capita. The platform coordinates with the Victoria RCOC, EUNAVFOR Atalanta, Combined Maritime Forces (CTF-150/151), and the Indian Ocean Regional Maritime Awareness System (MASE). It provides IUU illegal fishing alerts, suspicious vessel tracking, and piracy incident response protocols.",
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
      name: es ? "Software de Seguridad Pública para Seychelles" : "Public Safety Software for Seychelles",
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
              {es ? "Guía de Mercado — Seychelles" : "Market Guide — Seychelles"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
            {es
              ? "Software de Seguridad Pública para Seychelles"
              : "Public Safety Software for Seychelles"}
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            {es
              ? "Conciencia situacional unificada para la SPDF, Guardia Costera y Policía Nacional — vigilancia de la mayor ZEE per cápita del mundo, protección del turismo de lujo y antipiratería en el Océano Índico."
              : "Unified situational awareness for the SPDF, Coast Guard, and National Police — surveillance of the world's largest EEZ per capita, luxury tourism protection, and Indian Ocean anti-piracy."}
          </p>
        </div>
      </section>

      {/* Security Forces */}
      <section className="py-20 px-6 bg-[#0f1724]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Fuerzas de Seguridad de Seychelles" : "Seychelles Security Forces"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "La Fuerza de Defensa del Pueblo de Seychelles (SPDF) es la fuerza militar y de guardia costera unificada del archipiélago. Con ~98,000 habitantes y 115 islas, Seychelles gestiona la mayor ZEE per cápita del mundo (~1.37 millones de km²) con capacidades limitadas pero con sólida cooperación internacional."
              : "The Seychelles People's Defence Forces (SPDF) is the unified military and coast guard force of the archipelago. With ~98,000 inhabitants and 115 islands, Seychelles manages the world's largest per capita EEZ (~1.37 million km²) with limited capacity but strong international cooperation."}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {es ? "SPDF y Policía Nacional" : "SPDF and National Police"}
              </h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "SPDF ~500 efectivos — Ejército, Armada/Guardia Costera, Fuerza Aérea" : "SPDF ~500 personnel — Army, Navy/Coast Guard, Air Wing"}</li>
                <li>• {es ? "Agencia Nacional de Policía (NPA) — Mahé, Praslin, La Digue" : "National Police Agency (NPA) — Mahe, Praslin, La Digue"}</li>
                <li>• {es ? "Servicio de Incendios y Rescate de Seychelles (SFRS)" : "Seychelles Fire and Rescue Services (SFRS)"}</li>
                <li>• {es ? "Agencia Nacional de Gestión de Riesgos (NDMA) — ciclones/tsunamis" : "National Disaster Management Agency (NDMA) — cyclones/tsunamis"}</li>
                <li>• {es ? "Servicio de Inteligencia Nacional (NIS)" : "National Intelligence Service (NIS)"}</li>
                <li>• {es ? "Agencia de Control de Drogas (NDEA) — tráfico transoceánico" : "National Drug Enforcement Agency (NDEA) — trans-oceanic trafficking"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {es ? "Seguridad Marítima y Cooperación Internacional" : "Maritime Security and International Cooperation"}
              </h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "ZEE: 1.37 millones de km² — mayor per cápita del mundo" : "EEZ: 1.37 million km² — world's largest per capita"}</li>
                <li>• {es ? "RCOC Victoria — centro regional antipiratería del Océano Índico" : "RCOC Victoria — Indian Ocean regional anti-piracy coordination centre"}</li>
                <li>• {es ? "EUNAVFOR Atalanta — coordinación antipiratería, base logística" : "EUNAVFOR Atalanta — anti-piracy coordination, logistics base"}</li>
                <li>• {es ? "Combined Maritime Forces CTF-150/151 — patrullas conjuntas" : "Combined Maritime Forces CTF-150/151 — joint patrols"}</li>
                <li>• {es ? "MASE — Sistema de Alerta Regional Marítima del Océano Índico" : "MASE — Indian Ocean Regional Maritime Awareness System"}</li>
                <li>• {es ? "India/Francia/EE.UU. — socios de capacidad marítima" : "India/France/USA — maritime capacity partners"}</li>
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
                {es ? "Turismo y Recursos Naturales" : "Tourism & Natural Resources"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Turismo ~25% PIB — resorts de lujo Mahé/Praslin/La Digue" : "Tourism ~25% GDP — luxury resorts Mahe/Praslin/La Digue"}</li>
                <li>• {es ? "~350,000 turistas/año — alta vulnerabilidad a incidentes de seguridad" : "~350,000 tourists/year — high security incident sensitivity"}</li>
                <li>• {es ? "Puerto Victoria — mayor transbordo del Océano Índico occidental" : "Victoria Port — western Indian Ocean largest transshipment hub"}</li>
                <li>• {es ? "Pesca atún — Seychelles Fishing Authority; flotas EU/Asia" : "Tuna fishing — Seychelles Fishing Authority; EU/Asia fleets"}</li>
                <li>• {es ? "Petróleo offshore prospectivo — bloques en exploración" : "Prospective offshore oil — blocks under exploration"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">
                {es ? "Infraestructura y Conectividad" : "Infrastructure & Connectivity"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Aeropuerto Internacional de Seychelles (SEZ/Mahé) — hub Océano Índico" : "Seychelles International Airport (SEZ/Mahe) — Indian Ocean hub"}</li>
                <li>• {es ? "Aeropuerto de Praslin (PRI) + aeródromos en islas menores" : "Praslin Airport (PRI) + airstrips on outer islands"}</li>
                <li>• {es ? "Cables submarinos SAFE/SEAS/EASSy — conectividad África Oriental" : "SAFE/SEAS/EASSy submarine cables — East Africa connectivity"}</li>
                <li>• {es ? "Cable2Go/Airtel/Intelvision — telecomunicaciones locales" : "Cable2Go/Airtel/Intelvision — local telecoms"}</li>
                <li>• {es ? "PUC — Public Utilities Corporation; red eléctrica/agua" : "PUC — Public Utilities Corporation; power/water grid"}</li>
                <li>• {es ? "RCOC Victoria — centro de fusión de información marítima regional" : "RCOC Victoria — regional maritime information fusion centre"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">
                {es ? "Marco Legal y Regulatorio" : "Legal & Regulatory Framework"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Public Procurement Act 2008 (revisado 2014) — POCA" : "Public Procurement Act 2008 (revised 2014) — POCA"}</li>
                <li>• {es ? "Banco Central de Seychelles (CBS) — Rupia de Seychelles (SCR)" : "Central Bank of Seychelles (CBS) — Seychelles Rupee (SCR)"}</li>
                <li>• {es ? "ICTA — regulador de TIC y telecomunicaciones" : "ICTA — ICT and telecommunications regulator"}</li>
                <li>• {es ? "Data Protection Act 2003 — marco de privacidad de datos" : "Data Protection Act 2003 — data privacy framework"}</li>
                <li>• {es ? "UA/SADC/IOC/COMESA/Commonwealth — membresías regionales" : "AU/SADC/IOC/COMESA/Commonwealth — regional memberships"}</li>
                <li>• {es ? "FMI/BM/BAfD/India/Francia/UE — socios de desarrollo" : "IMF/WB/AfDB/India/France/EU — development partners"}</li>
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
              ? "Capacidades de KabatOne para Seychelles"
              : "KabatOne Capabilities for Seychelles"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "La plataforma KabatOne ofrece una suite integrada adaptada a los retos únicos de Seychelles: gestión de la mayor ZEE per cápita del mundo, protección del turismo de lujo en 115 islas, y coordinación con los principales centros antipiratería del Océano Índico."
              : "The KabatOne platform provides an integrated suite adapted to Seychelles' unique challenges: managing the world's largest per capita EEZ, protecting luxury tourism across 115 islands, and coordinating with the Indian Ocean's leading anti-piracy centres."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  title: es ? "K-Safety — Centro de Comando Unificado" : "K-Safety — Unified Command Center",
                  desc: es
                    ? "Panel multiisla para Mahé, Praslin y La Digue con visualización de incidentes en tiempo real, seguimiento de unidades SPDF/NPA y alertas de amenazas marítimas del Océano Índico, integrado con el RCOC de Victoria."
                    : "Multi-island dashboard for Mahe, Praslin, and La Digue with real-time incident visualization, SPDF/NPA unit tracking, and Indian Ocean maritime threat alerts, integrated with the Victoria RCOC.",
                },
                {
                  title: es ? "K-Dispatch — CAD Turístico y Marítimo" : "K-Dispatch — Tourism & Maritime CAD",
                  desc: es
                    ? "Despacho coordinado entre estaciones policiales en las tres islas principales, con protocolos de respuesta rápida para incidentes turísticos en resorts de lujo e integración de emergencias de la Guardia Costera para operaciones en islas exteriores."
                    : "Coordinated dispatch between police stations on the three main islands, with rapid response protocols for tourist incidents at luxury resorts and Coast Guard emergency integration for outer island operations.",
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
                  title: es ? "K-Video — Vigilancia de Resorts y Puertos" : "K-Video — Resort & Port Surveillance",
                  desc: es
                    ? "Gestión de vídeo para el Puerto Victoria, el Aeropuerto Internacional SEZ, los complejos turísticos de lujo y las instalaciones críticas, con analítica de IA para detección de intrusiones y seguimiento de comportamientos anómalos."
                    : "Video management for Victoria Port, SEZ International Airport, luxury tourist complexes, and critical facilities, with AI analytics for intrusion detection and anomalous behavior tracking.",
                },
                {
                  title: es ? "K-Connect — Vigilancia Marítima ZEE" : "K-Connect — EEZ Maritime Surveillance",
                  desc: es
                    ? "Fusión AIS/radar satelital para seguimiento de embarcaciones en la ZEE de 1.37 millones de km², detección de piratería somalí y narcotráfico, y alertas de pesca ilegal IUU coordinadas con la Seychelles Fishing Authority y EUNAVFOR Atalanta."
                    : "Satellite AIS/radar fusion for vessel tracking across the 1.37 million km² EEZ, Somali piracy and drug trafficking detection, and IUU illegal fishing alerts coordinated with the Seychelles Fishing Authority and EUNAVFOR Atalanta.",
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
            ? "¿Listo para modernizar la seguridad pública en Seychelles?"
            : "Ready to modernize public safety in Seychelles?"
        }
        subtitle={
          es
            ? "Hable con nuestro equipo sobre cómo KabatOne puede apoyar a la SPDF, la Guardia Costera y la Policía Nacional en la protección del turismo y la vigilancia marítima del Océano Índico."
            : "Speak with our team about how KabatOne can support the SPDF, Coast Guard, and National Police in tourism protection and Indian Ocean maritime surveillance."
        }
      />
      <Footer es={es} />
    </>
  );
}
