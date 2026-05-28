import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareMauritius", locale);
}

export default async function PublicSafetySoftwareMauritiusPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Mauricio | KabatOne"
    : "Public Safety Software for Mauritius | KabatOne";

  const description = es
    ? "KabatOne apoya las fuerzas de seguridad de Mauricio — PMF, Guardia Costera, Policía Nacional — con vigilancia en tiempo real, despacho y gestión de incidentes para el estado insular del Océano Índico."
    : "KabatOne supports Mauritius security forces — PMF, Coast Guard, National Police — with real-time surveillance, dispatch, and incident management for the Indian Ocean island state.";

  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-mauritius"
    : "https://kabatone.com/resources/public-safety-software-mauritius";

  const faqs = [
    {
      question: es
        ? "¿Qué desafíos de seguridad enfrenta Mauricio?"
        : "What security challenges does Mauritius face?",
      answer: es
        ? "Mauricio enfrenta una combinación de amenazas: narcotráfico marítimo transoceánico (la isla es punto de tránsito entre Asia/América del Sur y Europa), cibercrimen creciente dado su estatus de hub financiero africano, gestión de la ZEE de 2.3 millones de km² incluyendo Rodrigues y las Islas Agalega, y riesgos naturales (ciclones del Océano Índico, tsunamis). El derrame del barco Wakashio en 2020 expuso vulnerabilidades en la respuesta a desastres marítimos."
        : "Mauritius faces a combination of threats: trans-oceanic drug trafficking (the island is a transit point between Asia/South America and Europe), growing cybercrime given its African financial hub status, management of the 2.3 million km² EEZ including Rodrigues and Agalega Islands, and natural hazards (Indian Ocean cyclones, tsunamis). The 2020 Wakashio ship grounding exposed maritime disaster response vulnerabilities.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne a las fuerzas de seguridad de Mauricio?"
        : "How does KabatOne support Mauritius security forces?",
      answer: es
        ? "KabatOne proporciona conciencia situacional unificada para la Fuerza Paramilitar de Mauricio (PMF ~2,000 efectivos), la Policía Nacional (~12,000 efectivos), la Guardia Costera y el Equipo Especial de Respuesta a Desastres (NDRRMC). La plataforma integra vigilancia marítima de la ZEE de 2.3 millones de km², despacho CAD para Port Louis y las islas exteriores, videoanalítica para el Puerto de Port Louis y el Aeropuerto Internacional Sir Seewoosagur Ramgoolam (SSR), y coordinación con la Guardia Costera de la India."
        : "KabatOne provides unified situational awareness for the Mauritius Police Force (MPF ~12,000 officers), Paramilitary Force (PMF ~2,000), Coast Guard, and National Disaster Risk Reduction and Management Centre (NDRRMC). The platform integrates maritime surveillance across the 2.3 million km² EEZ, CAD dispatch for Port Louis and outer islands, video analytics for Port Louis Harbour and Sir Seewoosagur Ramgoolam (SSR) International Airport, and coordination with the Indian Coast Guard.",
    },
    {
      question: es
        ? "¿Qué infraestructura crítica requiere protección en Mauricio?"
        : "What critical infrastructure requires protection in Mauritius?",
      answer: es
        ? "La infraestructura crítica incluye el Puerto de Port Louis (mayor transbordo del Océano Índico sudoccidental, 1.5+ millones de TEUs/año), el Aeropuerto Internacional SSR, el hub financiero offshore (200+ bancos, GAFI/FATF), el Parque Tecnológico de Ebène (hub digital africano), los complejos turísticos de lujo (~1.3 millones de turistas/año), los cables submarinos SAFE/SEAS/LION2 y las redes de la Central Electricity Board."
        : "Critical infrastructure includes Port Louis Harbour (southwestern Indian Ocean's largest transshipment hub, 1.5+ million TEUs/year), SSR International Airport, offshore financial centre (200+ banks, FATF compliance), Ebene Cybercity (African digital hub), luxury resort complexes (~1.3 million tourists/year), SAFE/SEAS/LION2 submarine cables, and Central Electricity Board networks.",
    },
    {
      question: es
        ? "¿Cómo integra KabatOne la vigilancia marítima de la amplia ZEE de Mauricio?"
        : "How does KabatOne integrate maritime surveillance across Mauritius' wide EEZ?",
      answer: es
        ? "KabatOne integra seguimiento AIS/radar de la Guardia Costera en la ZEE de 2.3 millones de km², cubriendo Mauricio principal, Rodrigues (~620 km al este), las Islas Agalega (~1,100 km al norte) y las Islas Cargados Carajos. La plataforma coordina con la Guardia Costera de la India para el patrullaje conjunto, el Centro de Coordinación de Rescate Marítimo (MRCC) de Mauricio, y MASE para la conciencia marítima regional del Océano Índico."
        : "KabatOne integrates Coast Guard AIS/radar tracking across the 2.3 million km² EEZ, covering mainland Mauritius, Rodrigues (~620 km east), Agalega Islands (~1,100 km north), and Cargados Carajos Shoals. The platform coordinates with the Indian Coast Guard for joint patrols, the Mauritius Maritime Rescue Coordination Centre (MRCC), and MASE for regional Indian Ocean maritime awareness.",
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
      name: es ? "Software de Seguridad Pública para Mauricio" : "Public Safety Software for Mauritius",
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
              {es ? "Guía de Mercado — Mauricio" : "Market Guide — Mauritius"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
            {es
              ? "Software de Seguridad Pública para Mauricio"
              : "Public Safety Software for Mauritius"}
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            {es
              ? "Conciencia situacional unificada para la PMF, Policía Nacional y Guardia Costera — vigilancia de la ZEE de 2.3 millones de km², protección del hub financiero africano, y gestión de desastres ciclónicos en el Océano Índico."
              : "Unified situational awareness for the PMF, National Police, and Coast Guard — surveillance of the 2.3 million km² EEZ, protection of Africa's financial hub, and cyclone disaster management in the Indian Ocean."}
          </p>
        </div>
      </section>

      {/* Security Forces */}
      <section className="py-20 px-6 bg-[#0f1724]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Fuerzas de Seguridad de Mauricio" : "Mauritius Security Forces"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "La Policía Nacional de Mauricio (MPF) con ~12,000 efectivos es el principal cuerpo de seguridad del país. La Fuerza Paramilitar (PMF) y la Guardia Costera complementan las capacidades de respuesta. Con ~1.3 millones de habitantes y una ZEE de 2.3 millones de km², Mauricio gestiona una de las mayores relaciones territorio/ZEE de África."
              : "The Mauritius Police Force (MPF) with ~12,000 officers is the country's primary security body. The Paramilitary Force (PMF) and Coast Guard complement response capabilities. With ~1.3 million inhabitants and a 2.3 million km² EEZ, Mauritius manages one of Africa's largest territory-to-EEZ ratios."}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {es ? "Policía Nacional y PMF" : "National Police and PMF"}
              </h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "Policía Nacional (MPF) ~12,000 efectivos — 4 divisiones geográficas" : "Mauritius Police Force (MPF) ~12,000 officers — 4 geographic divisions"}</li>
                <li>• {es ? "Fuerza Paramilitar (PMF) ~2,000 — Guardia Nacional/Respuesta Especial" : "Paramilitary Force (PMF) ~2,000 — National Guard/Special Response"}</li>
                <li>• {es ? "Unidad de Respuesta Especial (SSU) — antiterrorismo y orden público" : "Special Support Unit (SSU) — counterterrorism and public order"}</li>
                <li>• {es ? "NDRRMC — Centro Nacional de Gestión de Riesgos de Desastres" : "NDRRMC — National Disaster Risk Reduction and Management Centre"}</li>
                <li>• {es ? "ICAC — Comisión Independiente Contra la Corrupción" : "ICAC — Independent Commission Against Corruption"}</li>
                <li>• {es ? "Policía en Rodrigues e islas exteriores (Agalega/Cargados)" : "Police on Rodrigues and outer islands (Agalega/Cargados)"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {es ? "Guardia Costera y Cooperación Regional" : "Coast Guard and Regional Cooperation"}
              </h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "Guardia Costera de Mauricio — patrulleras, aviones de vigilancia" : "Mauritius Coast Guard — patrol vessels, surveillance aircraft"}</li>
                <li>• {es ? "ZEE: 2.3 millones de km² incluyendo Rodrigues y Agalega" : "EEZ: 2.3 million km² including Rodrigues and Agalega"}</li>
                <li>• {es ? "MRCC Mauricio — Centro de Coordinación Rescate Marítimo" : "MRCC Mauritius — Maritime Rescue Coordination Centre"}</li>
                <li>• {es ? "Guardia Costera India — patrullas conjuntas del Océano Índico" : "Indian Coast Guard — Indian Ocean joint patrols"}</li>
                <li>• {es ? "MASE — Sistema Regional de Alerta Marítima del Océano Índico" : "MASE — Indian Ocean Regional Maritime Awareness System"}</li>
                <li>• {es ? "COMESA/SADC/IOC — miembro; INTERPOL — cooperación policial" : "COMESA/SADC/IOC — member; INTERPOL — police cooperation"}</li>
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
                {es ? "Hub Financiero y Turismo" : "Financial Hub & Tourism"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Hub financiero africano — 200+ bancos, fondos offshore, GAFI/FATF" : "African financial hub — 200+ banks, offshore funds, FATF compliant"}</li>
                <li>• {es ? "Turismo ~25% PIB — ~1.3 millones turistas/año, resorts de lujo" : "Tourism ~25% GDP — ~1.3 million tourists/year, luxury resorts"}</li>
                <li>• {es ? "Ebène Cybercity — hub digital y TIC África subsahariana" : "Ebene Cybercity — sub-Saharan Africa digital and ICT hub"}</li>
                <li>• {es ? "Azúcar — industria histórica; textiles; servicios BPO" : "Sugar — historic industry; textiles; BPO services"}</li>
                <li>• {es ? "Moody's Baa3 — uno de los mejores ratings crediticios de África" : "Moody's Baa3 — one of Africa's best credit ratings"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">
                {es ? "Infraestructura y Conectividad" : "Infrastructure & Connectivity"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Puerto de Port Louis — 1.5M+ TEUs/año, mayor hub del Océano Índico SW" : "Port Louis Harbour — 1.5M+ TEUs/year, largest SW Indian Ocean hub"}</li>
                <li>• {es ? "Aeropuerto Internacional SSR (MRU) — hub regional; Rodrigues (RRG)" : "SSR International Airport (MRU) — regional hub; Rodrigues (RRG)"}</li>
                <li>• {es ? "Cables SAFE/SEAS/LION2 — conectividad África Oriental/Asia/Europa" : "SAFE/SEAS/LION2 cables — East Africa/Asia/Europe connectivity"}</li>
                <li>• {es ? "Emtel/Mauritius Telecom/MTML — telecomunicaciones 4G/5G" : "Emtel/Mauritius Telecom/MTML — 4G/5G telecoms"}</li>
                <li>• {es ? "Smart City Scheme — 13 proyectos en desarrollo (Moka, Beau Plan, etc.)" : "Smart City Scheme — 13 projects in development (Moka, Beau Plan)"}</li>
                <li>• {es ? "Metro Express — red tranviaria Port Louis/Curepipe/Rose Hill" : "Metro Express — tram network Port Louis/Curepipe/Rose Hill"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">
                {es ? "Marco Legal y Regulatorio" : "Legal & Regulatory Framework"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Public Procurement Act 2006 (enmendado 2015) — MCA/BOI" : "Public Procurement Act 2006 (amended 2015) — MCA/BOI"}</li>
                <li>• {es ? "Banco de Mauricio (BOM) — Rupia Mauriciana (MUR)" : "Bank of Mauritius (BOM) — Mauritius Rupee (MUR)"}</li>
                <li>• {es ? "ICTA — Autoridad de TIC — regulador telecomunicaciones" : "ICTA — Information and Communication Technologies Authority"}</li>
                <li>• {es ? "Data Protection Act 2017 — conforme con GDPR europeo" : "Data Protection Act 2017 — aligned with EU GDPR"}</li>
                <li>• {es ? "COMESA/SADC/IOC/Commonwealth/AU — membresías regionales" : "COMESA/SADC/IOC/Commonwealth/AU — regional memberships"}</li>
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
              ? "Capacidades de KabatOne para Mauricio"
              : "KabatOne Capabilities for Mauritius"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "La plataforma KabatOne ofrece una suite integrada adaptada a los retos de Mauricio como hub financiero y turístico del Océano Índico: protección de infraestructura crítica financiera, vigilancia de la ZEE más extensa de África por habitante, y gestión de desastres naturales ciclónicos."
              : "The KabatOne platform provides an integrated suite adapted to Mauritius' challenges as an Indian Ocean financial and tourism hub: critical financial infrastructure protection, surveillance of Africa's most extensive per-capita EEZ, and cyclone natural disaster management."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  title: es ? "K-Safety — Centro de Comando Smart City" : "K-Safety — Smart City Command Center",
                  desc: es
                    ? "Panel unificado para Port Louis y los 13 proyectos Smart City con visualización de incidentes en tiempo real, seguimiento de unidades MPF/PMF, gestión de emergencias ciclónicas NDRRMC y alertas de la red Metro Express."
                    : "Unified dashboard for Port Louis and 13 Smart City projects with real-time incident visualization, MPF/PMF unit tracking, NDRRMC cyclone emergency management, and Metro Express network alerts.",
                },
                {
                  title: es ? "K-Dispatch — CAD para Hub Financiero y Turístico" : "K-Dispatch — Financial Hub & Tourism CAD",
                  desc: es
                    ? "Despacho coordinado entre comisarías de Port Louis, Grand Baie, Mahebourg y Rodrigues, con protocolos especiales para incidentes en el hub financiero de Ebène, resorts de lujo y el Puerto de Port Louis."
                    : "Coordinated dispatch between Port Louis, Grand Baie, Mahebourg, and Rodrigues stations, with special protocols for incidents at the Ebene financial hub, luxury resorts, and Port Louis Harbour.",
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
                  title: es ? "K-Video — Vigilancia Portuaria, Financiera y Turística" : "K-Video — Port, Financial & Tourism Surveillance",
                  desc: es
                    ? "Gestión de vídeo para el Puerto de Port Louis, Aeropuerto SSR, Ebène Cybercity, complejos turísticos y la red Metro Express, con analítica de IA para detección de intrusiones, control de acceso y gestión de multitudes en eventos."
                    : "Video management for Port Louis Harbour, SSR Airport, Ebene Cybercity, tourist complexes, and the Metro Express network, with AI analytics for intrusion detection, access control, and crowd management at events.",
                },
                {
                  title: es ? "K-Connect — Vigilancia Marítima ZEE Ampliada" : "K-Connect — Extended EEZ Maritime Surveillance",
                  desc: es
                    ? "Fusión AIS/radar satelital para seguimiento de embarcaciones en la ZEE de 2.3 millones de km², incluyendo Rodrigues, Agalega y Cargados Carajos, con alertas de narcotráfico, detección de pesca ilegal IUU y coordinación con el MRCC y la Guardia Costera de la India."
                    : "Satellite AIS/radar fusion for vessel tracking across the 2.3 million km² EEZ, including Rodrigues, Agalega, and Cargados Carajos, with drug trafficking alerts, IUU illegal fishing detection, and coordination with MRCC Mauritius and the Indian Coast Guard.",
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
            ? "¿Listo para modernizar la seguridad pública en Mauricio?"
            : "Ready to modernize public safety in Mauritius?"
        }
        subtitle={
          es
            ? "Hable con nuestro equipo sobre cómo KabatOne puede apoyar a la MPF, la Guardia Costera y el NDRRMC en la protección del hub financiero, el turismo de lujo y la vigilancia marítima del Océano Índico."
            : "Speak with our team about how KabatOne can support the MPF, Coast Guard, and NDRRMC in protecting the financial hub, luxury tourism, and Indian Ocean maritime surveillance."
        }
      />
      <Footer es={es} />
    </>
  );
}
