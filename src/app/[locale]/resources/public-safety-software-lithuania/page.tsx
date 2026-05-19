import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareLithuania", locale);
}

export default async function PublicSafetySoftwareLithuaniaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Lituania | KabatOne"
    : "Public Safety Software for Lithuania | KabatOne";

  const description = es
    ? "KabatOne apoya las fuerzas de seguridad de Lituania — Policía, Guardia de Fronteras, SBGS — con vigilancia en tiempo real, despacho y gestión de incidentes. Compatible con GDPR, estándares OTAN y el sistema 112 lituano."
    : "KabatOne supports Lithuania security forces — Police, State Border Guard Service, SBGS — with real-time surveillance, dispatch, and incident management. Compatible with GDPR, NATO standards, and the Lithuanian 112 system.";

  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-lithuania"
    : "https://kabatone.com/resources/public-safety-software-lithuania";

  const faqs = [
    {
      question: es
        ? "¿Qué desafíos de seguridad enfrenta Lituania?"
        : "What security challenges does Lithuania face?",
      answer: es
        ? "Lituania es el país más vulnerable del flanco oriental de la OTAN por el Corredor de Suwałki: un corredor terrestre de 104 km entre Polonia y Lituania que separa el exclave ruso de Kaliningrado de Bielorrusia. Si este corredor fuera cortado, los países bálticos quedarían aislados por tierra. Lituania también gestiona la mayor frontera con Bielorrusia (679 km), experimentando la crisis migratoria instrumentalizada por Lukashenko desde 2021 (+4,000 cruces ilegales/año). La OTAN mantiene la División Multinacional Nordeste con HQ en Lituania."
        : "Lithuania is the most vulnerable NATO Eastern Flank country due to the Suwalki Gap: a 104 km land corridor between Poland and Lithuania separating the Russian Kaliningrad exclave from Belarus. If this corridor were cut, the Baltic states would be isolated by land. Lithuania also manages the longest Belarus border (679 km), experiencing the migration crisis instrumentalized by Lukashenko since 2021 (+4,000 illegal crossings/year). NATO maintains the Multinational Division Northeast HQ in Lithuania.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne a las fuerzas de seguridad de Lituania?"
        : "How does KabatOne support Lithuania security forces?",
      answer: es
        ? "KabatOne proporciona conciencia situacional unificada para la Policía Lituania (~12,000 efectivos), el Servicio de Guardafronteras del Estado (VSAT), el Servicio de Bomberos y Rescate del Departamento de Protección contra Incendios (PRIEŠGAISRINĖ), el Servicio de Seguridad del Estado (VSD) y la Guardia Nacional (Šaulių sąjunga). La plataforma se integra con el sistema 112 del Centro de Comunicaciones de Emergencia (BPT) y cumple con el RGPD y los estándares de seguridad NIS2/ISO 27001."
        : "KabatOne provides unified situational awareness for the Lithuanian Police (~12,000 officers), State Border Guard Service (VSAT), Fire and Rescue Department, State Security Department (VSD), and National Riflemen Union (Šaulių sąjunga). The platform integrates with the 112 system of the Emergency Communications Centre (BPT) and complies with GDPR and NIS2/ISO 27001 security standards.",
    },
    {
      question: es
        ? "¿Qué infraestructura crítica requiere protección en Lituania?"
        : "What critical infrastructure requires protection in Lithuania?",
      answer: es
        ? "La infraestructura crítica incluye el corredor de Suwałki (prioridad estratégica OTAN), el Puerto de Klaipėda (único puerto sin hielo del Báltico oriental, terminal GNL), el Aeropuerto Internacional de Vilnius (VNO), la central de energía nuclear de Ignalina (desmantelada), las interconexiones eléctricas LitPol Link/NordBalt para desconexión BRELL en 2025, el Terminal GNL de Klaipėda (Independencia), y el Cuartel General de la División Multinacional Nordeste OTAN en Vilnius/Ruklai."
        : "Critical infrastructure includes the Suwalki Corridor (NATO strategic priority), Klaipeda Port (the only ice-free eastern Baltic port, LNG terminal), Vilnius International Airport (VNO), Ignalina Nuclear Power Plant (decommissioned), LitPol Link/NordBalt electrical interconnections for BRELL disconnection in 2025, Klaipeda LNG Terminal (Independence), and NATO Multinational Division Northeast HQ in Vilnius/Ruklai.",
    },
    {
      question: es
        ? "¿Cómo gestiona KabatOne la seguridad de la frontera con Bielorrusia?"
        : "How does KabatOne manage Belarus border security?",
      answer: es
        ? "KabatOne integra la videovigilancia de la valla inteligente fronteriza lituano-bielorrusa (679 km en construcción), el seguimiento de unidades VSAT, y los datos de sensores de movimiento/térmicos para detección de cruces ilegales. La plataforma coordina con Frontex para el despliegue de recursos, gestiona el sistema de alertas de zona de exclusión, y proporciona un flujo de trabajo de documentación de incidentes conforme al Código de Fronteras Schengen y el estándar EUROSUR para la vigilancia de fronteras exteriores de la UE."
        : "KabatOne integrates video surveillance from the Lithuanian-Belarusian smart border fence (679 km under construction), VSAT unit tracking, and motion/thermal sensor data for illegal crossing detection. The platform coordinates with Frontex for resource deployment, manages exclusion zone alert systems, and provides an incident documentation workflow compliant with the Schengen Border Code and EUROSUR standard for EU external border surveillance.",
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
      name: es ? "Software de Seguridad Pública para Lituania" : "Public Safety Software for Lithuania",
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
              {es ? "Guía de Mercado — Lituania" : "Market Guide — Lithuania"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
            {es
              ? "Software de Seguridad Pública para Lituania"
              : "Public Safety Software for Lithuania"}
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            {es
              ? "Conciencia situacional unificada para la Policía Lituania, VSAT y Bomberos — gestión del Corredor de Suwałki, vigilancia de la frontera con Bielorrusia, y coordinación con la División Multinacional OTAN-Nordeste."
              : "Unified situational awareness for the Lithuanian Police, VSAT, and Fire Services — Suwalki Corridor management, Belarus border surveillance, and coordination with the NATO Multinational Division Northeast."}
          </p>
        </div>
      </section>

      {/* Security Forces */}
      <section className="py-20 px-6 bg-[#0f1724]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Fuerzas de Seguridad de Lituania" : "Lithuania Security Forces"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "Lituania mantiene las fuerzas de seguridad más robustas de los países bálticos en términos de inversión en defensa (~2.5% del PIB). La Policía Lituania con ~12,000 efectivos y el Servicio de Guardafronteras del Estado (VSAT) con ~5,000 son los principales cuerpos civiles. El Ejército Lituano y la Unión de Tiradores Nacionales (Šaulių sąjunga ~15,000) refuerzan las capacidades."
              : "Lithuania maintains the most robust security forces of the Baltic states in terms of defence investment (~2.5% GDP). The Lithuanian Police with ~12,000 officers and State Border Guard Service (VSAT) with ~5,000 are the main civilian bodies. The Lithuanian Army and National Riflemen Union (Šaulių sąjunga ~15,000) reinforce capabilities."}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {es ? "Policía, Fronteras y Rescate" : "Police, Border, and Rescue"}
              </h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "Policía Lituania ~12,000 efectivos — 10 comisarías de condado" : "Lithuanian Police ~12,000 officers — 10 county police stations"}</li>
                <li>• {es ? "VSAT — Servicio de Guardafronteras del Estado ~5,000 efectivos" : "VSAT — State Border Guard Service ~5,000 personnel"}</li>
                <li>• {es ? "Departamento de Bomberos y Rescate — protección civil nacional" : "Fire and Rescue Department — national civil protection"}</li>
                <li>• {es ? "BPT — Centro de Comunicaciones de Emergencia, operador 112" : "BPT — Emergency Communications Centre, 112 operator"}</li>
                <li>• {es ? "VSD — Departamento de Seguridad del Estado (contrainteligencia)" : "VSD — State Security Department (counterintelligence)"}</li>
                <li>• {es ? "Šaulių sąjunga — Unión de Tiradores Nacionales ~15,000 reservistas" : "Šaulių sąjunga — National Riflemen Union ~15,000 reservists"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {es ? "OTAN y Corredor de Suwałki" : "NATO and the Suwalki Corridor"}
              </h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "División Multinacional OTAN-Nordeste HQ — Vilnius/Ruklai" : "NATO Multinational Division Northeast HQ — Vilnius/Ruklai"}</li>
                <li>• {es ? "eFP OTAN — Presencia Mejorada, batallón Alemania en Ruklai" : "NATO eFP — Enhanced Forward Presence, Germany battalion Ruklai"}</li>
                <li>• {es ? "Corredor de Suwałki — 104 km vulnerabilidad estratégica OTAN" : "Suwalki Corridor — 104 km NATO strategic vulnerability"}</li>
                <li>• {es ? "Frontex — gestión crisis migratoria frontera Bielorrusia" : "Frontex — Belarus border migration crisis management"}</li>
                <li>• {es ? "EUROSUR — sistema europeo vigilancia fronteras exteriores" : "EUROSUR — European external border surveillance system"}</li>
                <li>• {es ? "Terminal GNL Klaipėda — independencia energética del gas ruso" : "Klaipeda LNG Terminal — energy independence from Russian gas"}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Economy, Infrastructure, Legal */}
      <section className="py-20 px-6" style={{ background: "#111c2e" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Economía, Infraestructura y Marco Legal" : "Economy, Infrastructure & Legal Framework"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">
                {es ? "Puertos, Energía y Economía" : "Ports, Energy & Economy"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Puerto de Klaipėda — único puerto sin hielo Báltico oriental" : "Klaipeda Port — only ice-free eastern Baltic port"}</li>
                <li>• {es ? "Terminal GNL Klaipėda (Independence) — independencia energética" : "Klaipeda LNG Terminal (Independence) — energy independence"}</li>
                <li>• {es ? "Refinería ORLEN Lietuva (Mažeikiai) — 11M t/año" : "ORLEN Lietuva Refinery (Mazeikiai) — 11M t/year"}</li>
                <li>• {es ? "Turismo Vilnius/Trakai/Curonian Spit ~3M visitantes/año" : "Tourism Vilnius/Trakai/Curonian Spit ~3M visitors/year"}</li>
                <li>• {es ? "Tecnología — Vilnius hub startups, 6 unicornios nacidos" : "Technology — Vilnius startup hub, 6 unicorns born"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">
                {es ? "Infraestructura Crítica" : "Critical Infrastructure"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Aeropuerto Internacional de Vilnius (VNO) — hub principal" : "Vilnius International Airport (VNO) — main hub"}</li>
                <li>• {es ? "Rail Baltica — corredor Tallinn-Varsovia, Kaunas junction" : "Rail Baltica — Tallinn-Warsaw corridor, Kaunas junction"}</li>
                <li>• {es ? "LitPol Link — interconexión eléctrica Lituania-Polonia (ENTSO-E)" : "LitPol Link — Lithuania-Poland electrical interconnection (ENTSO-E)"}</li>
                <li>• {es ? "Valla fronteriza inteligente Bielorrusia — 679 km en construcción" : "Smart border fence Belarus — 679 km under construction"}</li>
                <li>• {es ? "Fibra óptica + 5G Telia/Tele2/Bite — cobertura nacional" : "Fiber + 5G Telia/Tele2/Bite — national coverage"}</li>
                <li>• {es ? "Base aérea Šiauliai — HQ OTAN Air Policing Báltico" : "Siauliai Air Base — NATO Baltic Air Policing HQ"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">
                {es ? "Marco Legal y Regulatorio" : "Legal & Regulatory Framework"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Ley de Contratos Públicos de Lituania — Portal CVP IS" : "Law on Public Procurement of Lithuania — CVP IS portal"}</li>
                <li>• {es ? "RGPD/GDPR + ADA — Inspección de Protección de Datos de Lituania" : "GDPR + ADA — State Data Protection Inspectorate (VDAI)"}</li>
                <li>• {es ? "Ley de Ciberseguridad 2018 / NIS2 transposición 2024" : "Cybersecurity Law 2018 / NIS2 transposition 2024"}</li>
                <li>• {es ? "Banco de Lituania (Lietuvos bankas) — Euro (EUR), zona euro 2015" : "Bank of Lithuania (Lietuvos bankas) — Euro (EUR), Eurozone 2015"}</li>
                <li>• {es ? "OTAN/UE/OCDE/Espacio Schengen — membresías clave" : "NATO/EU/OECD/Schengen Area — key memberships"}</li>
                <li>• {es ? "RRT — Comisión de Comunicaciones de la República (regulador TIC)" : "RRT — Communications Regulatory Authority (ICT regulator)"}</li>
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
              ? "Capacidades de KabatOne para Lituania"
              : "KabatOne Capabilities for Lithuania"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "La plataforma KabatOne ofrece una suite integrada adaptada a las prioridades estratégicas de Lituania: gestión del Corredor de Suwałki, vigilancia de la valla fronteriza con Bielorrusia, protección del Puerto y Terminal GNL de Klaipėda, y coordinación con la División Multinacional OTAN-Nordeste."
              : "The KabatOne platform provides an integrated suite adapted to Lithuania's strategic priorities: Suwalki Corridor management, Belarus border fence surveillance, Klaipeda Port and LNG Terminal protection, and coordination with the NATO Multinational Division Northeast."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  title: es ? "K-Safety — Centro de Comando Nacional y OTAN" : "K-Safety — National and NATO Command Center",
                  desc: es
                    ? "Panel unificado para la Policía Lituania, VSAT y Bomberos con visualización de incidentes en tiempo real, alertas del Corredor de Suwałki, gestión de la frontera con Bielorrusia y coordinación con las unidades OTAN en Ruklai/Base Aérea Šiauliai."
                    : "Unified dashboard for Lithuanian Police, VSAT, and Fire Services with real-time incident visualization, Suwalki Corridor alerts, Belarus border management, and coordination with NATO units in Ruklai/Siauliai Air Base.",
                },
                {
                  title: es ? "K-Dispatch — CAD integrado con 112/BPT" : "K-Dispatch — 112/BPT-Integrated CAD",
                  desc: es
                    ? "Despacho coordinado integrado con el Centro de Comunicaciones de Emergencia BPT (112) para Policía, Bomberos y Ambulancia en los 10 condados de Lituania, con protocolos especiales de respuesta para incidentes en el Corredor de Suwałki y la frontera bielorrusa."
                    : "Coordinated dispatch integrated with the BPT Emergency Communications Centre (112) for Police, Fire, and Ambulance across Lithuania's 10 counties, with special response protocols for Suwalki Corridor and Belarus border incidents.",
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
                  title: es ? "K-Video — Valla Fronteriza y Puerto Klaipėda" : "K-Video — Border Fence & Klaipeda Port",
                  desc: es
                    ? "Gestión de vídeo para la valla fronteriza inteligente con Bielorrusia (679 km), el Puerto de Klaipėda, la Terminal GNL, el Aeropuerto VNO y la Base Aérea Šiauliai OTAN, con analítica de IA para detección de intrusiones conforme a GDPR/NIS2."
                    : "Video management for the smart border fence with Belarus (679 km), Klaipeda Port, LNG Terminal, VNO Airport, and NATO Siauliai Air Base, with AI intrusion detection analytics compliant with GDPR/NIS2.",
                },
                {
                  title: es ? "K-Connect — EUROSUR y Frontex Integration" : "K-Connect — EUROSUR and Frontex Integration",
                  desc: es
                    ? "Integración con EUROSUR para la vigilancia de fronteras exteriores de la UE, coordinación operativa con Frontex en despliegues de respuesta rápida, y conexión con los registros estatales lituanos (RC — Registro de Residentes, REGITRA — Vehículos) via eID lituano."
                    : "Integration with EUROSUR for EU external border surveillance, operational coordination with Frontex rapid response deployments, and connection to Lithuanian state registers (RC — Residents Register, REGITRA — Vehicles) via Lithuanian eID.",
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
            ? "¿Listo para modernizar la seguridad pública en Lituania?"
            : "Ready to modernize public safety in Lithuania?"
        }
        subtitle={
          es
            ? "Hable con nuestro equipo sobre cómo KabatOne puede apoyar a la Policía Lituania, VSAT y Bomberos con una plataforma compatible con GDPR, NIS2 y los estándares de la OTAN para la seguridad del flanco oriental."
            : "Speak with our team about how KabatOne can support Lithuanian Police, VSAT, and Fire Services with a platform compatible with GDPR, NIS2, and NATO standards for Eastern Flank security."
        }
      />
      <Footer es={es} />
    </>
  );
}
