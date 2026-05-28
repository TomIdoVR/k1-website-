import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareLatvia", locale);
}

export default async function PublicSafetySoftwareLatviaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Letonia | KabatOne"
    : "Public Safety Software for Latvia | KabatOne";

  const description = es
    ? "KabatOne apoya las fuerzas de seguridad de Letonia — Policía Estatal, Guardia de Fronteras, KNAB — con vigilancia en tiempo real, despacho y gestión de incidentes. Compatible con GDPR, estándares de la OTAN y el sistema 112 letón."
    : "KabatOne supports Latvia security forces — State Police, Border Guard, KNAB — with real-time surveillance, dispatch, and incident management. Compatible with GDPR, NATO standards, and the Latvian 112 system.";

  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-latvia"
    : "https://kabatone.com/resources/public-safety-software-latvia";

  const faqs = [
    {
      question: es
        ? "¿Qué desafíos de seguridad enfrenta Letonia?"
        : "What security challenges does Latvia face?",
      answer: es
        ? "Letonia enfrenta presiones de seguridad en el flanco oriental de la OTAN: frontera con Rusia (276 km) y Bielorrusia (172 km), con flujos migratorios instrumentalizados por Minsk desde 2021. El Puerto de Riga y el Aeropuerto de Riga son infraestructuras críticas para el suministro de la OTAN. La influencia de la comunidad rusófona (~25% de la población) y los riesgos de desinformación requieren vigilancia de orden público. Rail Baltica conecta Letonia con el corredor de defensa aliado."
        : "Latvia faces security pressures on the NATO Eastern Flank: borders with Russia (276 km) and Belarus (172 km), with migration flows instrumentalized by Minsk since 2021. Riga Port and Riga Airport are critical infrastructure for NATO supply. The Russian-speaking community (~25% of population) and disinformation risks require public order surveillance. Rail Baltica connects Latvia with the allied defence corridor.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne a las fuerzas de seguridad de Letonia?"
        : "How does KabatOne support Latvia security forces?",
      answer: es
        ? "KabatOne proporciona conciencia situacional unificada para la Policía Estatal (VP), la Guardia de Fronteras del Estado (VRS), el Servicio de Bomberos y Rescate del Estado (VUGD), la Guardia Nacional (Zemessardze ~8,000 reservistas), y el servicio de contrainteligencia SAB. La plataforma se integra con el sistema 112 de Letonia (operado por VUGD), cumple con el RGPD y los estándares de seguridad de la información de la UE/OTAN, y soporta la coordinación con Frontex."
        : "KabatOne provides unified situational awareness for the State Police (VP), State Border Guard (VRS), State Fire and Rescue Service (VUGD), National Guard (Zemessardze ~8,000 reservists), and counterintelligence service SAB. The platform integrates with Latvia's 112 system (operated by VUGD), complies with GDPR and EU/NATO information security standards, and supports Frontex coordination.",
    },
    {
      question: es
        ? "¿Qué infraestructura crítica requiere protección en Letonia?"
        : "What critical infrastructure requires protection in Latvia?",
      answer: es
        ? "La infraestructura crítica incluye el Puerto de Riga (mayor puerto del Báltico oriental por volumen de carga), el Aeropuerto Internacional de Riga (RIX), el corredor Rail Baltica (Tallin-Varsovia), la refinería de Mozyr/Nafta (suministro combustible), las interconexiones eléctricas NordBalt y EstLink hacia Escandinavia, los cables submarinos del Báltico, y el Cuartel General de la División Multinacional OTAN-Norte en Adazi."
        : "Critical infrastructure includes the Port of Riga (largest eastern Baltic port by cargo volume), Riga International Airport (RIX), the Rail Baltica corridor (Tallinn-Warsaw), Mozyr/Nafta refinery (fuel supply), NordBalt and EstLink electrical interconnections to Scandinavia, Baltic submarine cables, and the NATO Multinational Division North HQ in Adazi.",
    },
    {
      question: es
        ? "¿Cómo cumple KabatOne con las regulaciones de seguridad y datos de Letonia/UE?"
        : "How does KabatOne comply with Latvia/EU security and data regulations?",
      answer: es
        ? "KabatOne cumple con el RGPD/GDPR y las directrices de la Inspección de Protección de Datos de Letonia (DVI). La plataforma implementa los estándares ISO 27001 requeridos por las instituciones estatales letones, cumple con la Directiva NIS2 de la UE para infraestructura crítica, y se alinea con los requerimientos de la Ley de Seguridad de la Información de Letonia. La arquitectura puede desplegarse en los centros de datos del gobierno letón o en la nube soberana de la UE."
        : "KabatOne complies with GDPR and Latvia Data Inspectorate (DVI) guidelines. The platform implements ISO 27001 standards required by Latvian state institutions, meets the EU NIS2 Directive for critical infrastructure, and aligns with Latvia's Information Security Law requirements. The architecture can be deployed in Latvian government data centres or EU sovereign cloud.",
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
      name: es ? "Software de Seguridad Pública para Letonia" : "Public Safety Software for Latvia",
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
              {es ? "Guía de Mercado — Letonia" : "Market Guide — Latvia"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
            {es
              ? "Software de Seguridad Pública para Letonia"
              : "Public Safety Software for Latvia"}
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            {es
              ? "Conciencia situacional unificada para la Policía Estatal, Guardia de Fronteras y VUGD — compatible con GDPR y estándares OTAN, integrado con el sistema 112, y adaptado a las necesidades de seguridad del flanco oriental de la Alianza."
              : "Unified situational awareness for the State Police, Border Guard, and VUGD — compatible with GDPR and NATO standards, integrated with the 112 system, and adapted to the security needs of the Alliance's Eastern Flank."}
          </p>
        </div>
      </section>

      {/* Security Forces */}
      <section className="py-20 px-6 bg-[#0f1724]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Fuerzas de Seguridad de Letonia" : "Latvia Security Forces"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "Letonia tiene un sistema de seguridad orientado al flanco oriental de la OTAN. La Policía Estatal (VP) y la Guardia de Fronteras (VRS) son los cuerpos civiles principales. Las Fuerzas Armadas Nacionales (NBS) y la Guardia Nacional Zemessardze complementan la defensa. Letonia alberga el Cuartel General de la División Multinacional OTAN-Norte en Adazi."
              : "Latvia has a security system oriented toward the NATO Eastern Flank. The State Police (VP) and Border Guard (VRS) are the main civilian bodies. The National Armed Forces (NBS) and National Guard Zemessardze complement defence. Latvia hosts the NATO Multinational Division North HQ in Adazi."}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {es ? "Policía, Fronteras y Rescate" : "Police, Border, and Rescue"}
              </h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "Policía Estatal (VP) — orden público, investigación criminal" : "State Police (VP) — public order, criminal investigation"}</li>
                <li>• {es ? "Guardia de Fronteras del Estado (VRS) — frontera Rusia/Bielorrusia" : "State Border Guard (VRS) — Russia/Belarus border"}</li>
                <li>• {es ? "Servicio de Bomberos y Rescate del Estado (VUGD) — operador 112" : "State Fire and Rescue Service (VUGD) — 112 operator"}</li>
                <li>• {es ? "KNAB — Oficina de Prevención y Lucha contra la Corrupción" : "KNAB — Corruption Prevention and Combating Bureau"}</li>
                <li>• {es ? "SAB — Oficina de Protección de la Constitución (contrainteligencia)" : "SAB — Constitution Protection Bureau (counterintelligence)"}</li>
                <li>• {es ? "Zemessardze (Guardia Nacional) ~8,000 reservistas voluntarios" : "Zemessardze (National Guard) ~8,000 volunteer reservists"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {es ? "Cooperación OTAN/UE y Frontex" : "NATO/EU Cooperation and Frontex"}
              </h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "División Multinacional OTAN-Norte HQ — Adazi (Letonia)" : "NATO Multinational Division North HQ — Adazi (Latvia)"}</li>
                <li>• {es ? "eFP OTAN — Presencia Mejorada, batallón multinacional en Adazi" : "NATO eFP — Enhanced Forward Presence, multinational battalion Adazi"}</li>
                <li>• {es ? "Frontex — coordinación gestión fronteriza UE (Rusia/Bielorrusia)" : "Frontex — EU border management coordination (Russia/Belarus)"}</li>
                <li>• {es ? "EUROPOL — cooperación policial europea anticorrupción/crimen" : "EUROPOL — European police cooperation anti-corruption/crime"}</li>
                <li>• {es ? "Operación EULEX — experiencia en fronteras UE exteriores" : "EULEX experience — EU external border management"}</li>
                <li>• {es ? "Baltic Defence College (BALTDEFCOL) — Tartu, Estonia" : "Baltic Defence College (BALTDEFCOL) — Tartu, Estonia"}</li>
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
                {es ? "Puerto de Riga y Economía" : "Port of Riga & Economy"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Puerto Libre de Riga — mayor puerto Báltico oriental, 25+ M t/año" : "Freeport of Riga — largest eastern Baltic port, 25+ M t/year"}</li>
                <li>• {es ? "Puerto de Ventspils — petróleo y productos químicos" : "Ventspils Port — oil and chemical products"}</li>
                <li>• {es ? "Puerto de Liepāja — Hub naval OTAN; puerto comercial/militar" : "Liepaja Port — NATO naval hub; commercial/military port"}</li>
                <li>• {es ? "Turismo Riga ~2M visitantes/año (ciudad hanseática UNESCO)" : "Riga tourism ~2M visitors/year (UNESCO Hanseatic city)"}</li>
                <li>• {es ? "Airbaltic — aerolínea nacional; hub Riga para Bálticos/CIS" : "airBaltic — national airline; Riga hub for Baltics/CIS"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">
                {es ? "Infraestructura Crítica" : "Critical Infrastructure"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Aeropuerto Internacional de Riga (RIX) — hub principal Bálticos" : "Riga International Airport (RIX) — main Baltic hub"}</li>
                <li>• {es ? "Rail Baltica — corredor ferroviario UE Tallinn-Varsovia por Riga" : "Rail Baltica — EU railway corridor Tallinn-Warsaw through Riga"}</li>
                <li>• {es ? "NordBalt cable — interconexión eléctrica Letonia-Suecia" : "NordBalt cable — Latvia-Sweden electrical interconnection"}</li>
                <li>• {es ? "Gasoducto Conexión Inčukalns — almacenamiento subterráneo gas" : "Inčukalns Underground Gas Storage — regional strategic reserve"}</li>
                <li>• {es ? "Cable Balticconnector — conectividad Báltico/Nórdica" : "Balticconnector cable — Baltic/Nordic connectivity"}</li>
                <li>• {es ? "Valla electrónica fronteriza — instalación progresiva Rusia/Bielorrusia" : "Electronic border fence — progressive installation Russia/Belarus"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">
                {es ? "Marco Legal y Regulatorio" : "Legal & Regulatory Framework"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Ley de Contratación Pública de Letonia (MK noteikumi) — IUB" : "Latvia Public Procurement Law — Central Finance and Contracting Agency (CFCA)"}</li>
                <li>• {es ? "RGPD/GDPR + DVI — Inspección de Protección de Datos de Letonia" : "GDPR + DVI — Latvia Data State Inspectorate"}</li>
                <li>• {es ? "Ley de Seguridad de la Información (NIS2 transposición 2024)" : "Information Security Law (NIS2 transposition 2024)"}</li>
                <li>• {es ? "Banco de Letonia (Latvijas Banka) — Euro (EUR), zona euro 2014" : "Bank of Latvia (Latvijas Banka) — Euro (EUR), Eurozone 2014"}</li>
                <li>• {es ? "OTAN/UE/OCDE/Espacio Schengen — membresías clave" : "NATO/EU/OECD/Schengen Area — key memberships"}</li>
                <li>• {es ? "Autoridad Reguladora de los Servicios Públicos (SPRK) — TIC" : "Public Utilities Regulatory Commission (SPRK) — ICT regulator"}</li>
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
              ? "Capacidades de KabatOne para Letonia"
              : "KabatOne Capabilities for Latvia"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "La plataforma KabatOne ofrece una suite integrada adaptada a las necesidades de Letonia como nación del flanco oriental de la OTAN: gestión de fronteras con Rusia y Bielorrusia, protección de la infraestructura portuaria del Báltico, vigilancia urbana en Riga, y coordinación con las misiones de la OTAN en Adazi."
              : "The KabatOne platform provides an integrated suite adapted to Latvia's needs as a NATO Eastern Flank nation: border management with Russia and Belarus, Baltic port infrastructure protection, urban surveillance in Riga, and coordination with NATO missions in Adazi."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  title: es ? "K-Safety — Centro de Comando Nacional" : "K-Safety — National Command Center",
                  desc: es
                    ? "Panel unificado para la VP, VRS y VUGD con visualización de incidentes en tiempo real, seguimiento de unidades Zemessardze, alertas de intrusión fronteriza Rusia/Bielorrusia, y gestión de eventos públicos en Riga."
                    : "Unified dashboard for VP, VRS, and VUGD with real-time incident visualization, Zemessardze unit tracking, Russia/Belarus border intrusion alerts, and public event management in Riga.",
                },
                {
                  title: es ? "K-Dispatch — CAD integrado con 112/VUGD" : "K-Dispatch — 112/VUGD-Integrated CAD",
                  desc: es
                    ? "Despacho coordinado integrado con el sistema 112 operado por VUGD para Policía, Bomberos y Ambulancia, con soporte para las 9 regiones administrativas de Letonia y gestión de emergencias en las islas (Kolkasrags/Saaremaa)."
                    : "Coordinated dispatch integrated with the VUGD-operated 112 system for Police, Fire, and Ambulance, with support for Latvia's 9 administrative regions and emergency management on the islands.",
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
                  title: es ? "K-Video — Vigilancia Portuaria y Fronteriza" : "K-Video — Port & Border Surveillance",
                  desc: es
                    ? "Gestión de vídeo para el Puerto Libre de Riga, Ventspils, Liepāja Naval Hub OTAN, Aeropuerto RIX y los puestos fronterizos de Rusia/Bielorrusia, con analítica de IA compatible con GDPR y estándares NIS2."
                    : "Video management for the Freeport of Riga, Ventspils, Liepaja NATO Naval Hub, RIX Airport, and Russia/Belarus border crossings, with AI analytics compatible with GDPR and NIS2 standards.",
                },
                {
                  title: es ? "K-Connect — Integración de Sistemas Estatales Letones" : "K-Connect — Latvian State System Integration",
                  desc: es
                    ? "Integración con los registros estatales de Letonia (PMLP — Registro de Población, CSDD — Vehículos/Conductores, VID — Hacienda), compatibilidad con la identidad eID letona, y soporte para la coordinación con Frontex y Europol."
                    : "Integration with Latvian state registers (PMLP — Population, CSDD — Vehicles/Drivers, VID — Revenue Service), compatibility with the Latvian eID identity, and support for Frontex and Europol coordination.",
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
            ? "¿Listo para modernizar la seguridad pública en Letonia?"
            : "Ready to modernize public safety in Latvia?"
        }
        subtitle={
          es
            ? "Hable con nuestro equipo sobre cómo KabatOne puede apoyar a la Policía Estatal, la Guardia de Fronteras y el VUGD con una plataforma compatible con GDPR, NIS2 y los estándares de la OTAN."
            : "Speak with our team about how KabatOne can support the State Police, Border Guard, and VUGD with a platform compatible with GDPR, NIS2, and NATO standards."
        }
      />
      <Footer es={es} />
    </>
  );
}
