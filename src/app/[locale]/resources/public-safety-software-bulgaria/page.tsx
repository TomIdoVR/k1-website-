import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareBulgaria", locale);
}

export default async function PublicSafetySoftwareBulgariaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Bulgaria | KabatOne"
    : "Public Safety Software for Bulgaria | KabatOne";

  const description = es
    ? "KabatOne apoya las fuerzas de seguridad de Bulgaria — MVR (Ministerio del Interior), GDBOP, Guardia de Fronteras — con vigilancia en tiempo real, despacho y gestión de incidentes. Compatible con GDPR, estándares de la OTAN y el sistema 112 búlgaro."
    : "KabatOne supports Bulgaria security forces — MVR (Ministry of Interior), GDBOP, Border Police — with real-time surveillance, dispatch, and incident management. Compatible with GDPR, NATO standards, and the Bulgarian 112 system.";

  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-bulgaria"
    : "https://kabatone.com/resources/public-safety-software-bulgaria";

  const faqs = [
    {
      question: es ? "¿Qué desafíos de seguridad enfrenta Bulgaria?" : "What security challenges does Bulgaria face?",
      answer: es
        ? "Bulgaria enfrenta presiones en sus fronteras exteriores de la UE con Turquía (259 km) y Serbia, siendo el principal punto de entrada de la ruta migratoria de los Balcanes. Más de 300,000 cruces irregulares se registraron en 2022-2023. La proximidad al conflicto de Ucrania, la gestión de la diáspora rusófona, y el crimen organizado transnacional (tráfico de personas/drogas a través de la ruta balcánica) son amenazas persistentes. Bulgaria también alberga instalaciones de la OTAN como la Base Aérea de Graf Ignatievo."
        : "Bulgaria faces pressure on its EU external borders with Turkey (259 km) and Serbia, being the main entry point of the Balkan migration route. Over 300,000 irregular crossings were recorded in 2022-2023. Proximity to the Ukraine conflict, management of the Russian-speaking diaspora, and transnational organized crime (human/drug trafficking via the Balkan route) are persistent threats. Bulgaria also hosts NATO facilities such as Graf Ignatievo Air Base.",
    },
    {
      question: es ? "¿Cómo apoya KabatOne a las fuerzas de seguridad de Bulgaria?" : "How does KabatOne support Bulgaria security forces?",
      answer: es
        ? "KabatOne proporciona conciencia situacional unificada para la Policía Nacional de Bulgaria (GDNP), la Dirección General de Lucha contra el Crimen Organizado (GDBOP), la Policía de Fronteras (GDGP), la Dirección General de Bomberos y Protección Civil (GDBZN), y el Servicio Estatal de Seguridad (DANS). La plataforma se integra con el sistema 112 búlgaro (operado por EEMS), cumple con el RGPD y la legislación de protección de datos de Bulgaria, y soporta la coordinación con Frontex para la gestión de la ruta balcánica."
        : "KabatOne provides unified situational awareness for the Bulgarian National Police (GDNP), Directorate General for Combating Organized Crime (GDBOP), Border Police (GDGP), Fire Safety and Civil Protection Directorate (GDBZN), and State Security Agency (DANS). The platform integrates with Bulgaria's 112 system (operated by EEMS), complies with GDPR and Bulgarian data protection legislation, and supports Frontex coordination for Balkan route management.",
    },
    {
      question: es ? "¿Qué infraestructura crítica requiere protección en Bulgaria?" : "What critical infrastructure requires protection in Bulgaria?",
      answer: es
        ? "La infraestructura crítica incluye la Central Nuclear de Kozloduy (2 reactores VVER-1000, 40% de la electricidad búlgara), el Aeropuerto Internacional de Sofía (SOF), el Puerto de Varna y el Puerto de Burgas en el Mar Negro, el corredor de gas Trans-Balkan Pipeline, los oleoductos Burgas-Alexandroupolis, y los cuarteles de la OTAN en Graf Ignatievo y Bezmer. Bulgaria también alberga el Centro de Coordinación de Frontex para la ruta mediterránea oriental."
        : "Critical infrastructure includes Kozloduy Nuclear Power Plant (2 VVER-1000 reactors, 40% of Bulgarian electricity), Sofia International Airport (SOF), Varna Port and Burgas Port on the Black Sea, Trans-Balkan Pipeline gas corridor, Burgas-Alexandroupolis oil pipeline, and NATO bases at Graf Ignatievo and Bezmer. Bulgaria also hosts the Frontex Coordination Centre for the eastern Mediterranean route.",
    },
    {
      question: es ? "¿Cómo gestiona KabatOne la vigilancia de fronteras en Bulgaria?" : "How does KabatOne manage border surveillance in Bulgaria?",
      answer: es
        ? "KabatOne integra los sistemas de vigilancia EUROSUR de la frontera turca (259 km), el seguimiento de unidades de la Policía de Fronteras, y la videoanalítica de las barreras de alambre de espino y cámaras térmicas instaladas en la frontera búlgaro-turca. La plataforma coordina con el Centro de Coordinación Nacional de Frontex, el EUBAM (Misión de Asistencia Fronteriza UE) y Europol para la inteligencia sobre la ruta balcánica."
        : "KabatOne integrates EUROSUR surveillance systems on the Turkish border (259 km), Border Police unit tracking, and video analytics from barbed wire barriers and thermal cameras installed on the Bulgarian-Turkish border. The platform coordinates with the Frontex National Coordination Centre, EUBAM (EU Border Assistance Mission), and Europol for Balkan route intelligence.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://kabatone.com" },
    { name: "Resources", url: "https://kabatone.com/resources" },
    { name: es ? "Software de Seguridad Pública para Bulgaria" : "Public Safety Software for Bulgaria", url: canonical },
  ]);

  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section style={{ background: "linear-gradient(135deg,#0f1724 0%,#1a2744 100%)" }} className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-blue-400 text-sm font-medium">{es ? "Guía de Mercado — Bulgaria" : "Market Guide — Bulgaria"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Software de Seguridad Pública para Bulgaria" : "Public Safety Software for Bulgaria"}
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            {es
              ? "Conciencia situacional unificada para la Policía Nacional, Guardia de Fronteras y Bomberos — gestión de la ruta migratoria balcánica, protección de la Central Nuclear de Kozloduy, y coordinación con la OTAN en el Mar Negro."
              : "Unified situational awareness for the National Police, Border Police, and Fire Services — Balkan migration route management, Kozloduy Nuclear Power Plant protection, and NATO coordination in the Black Sea."}
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f1724]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Fuerzas de Seguridad de Bulgaria" : "Bulgaria Security Forces"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "El Ministerio del Interior de Bulgaria (MVR) es el organismo rector de la seguridad civil, con una estructura que incluye la Policía Nacional (GDNP), la Policía de Fronteras (GDGP), la Gendarmería (GDNZO) y la Dirección de Bomberos (GDBZN). Bulgaria es miembro de la OTAN desde 2004 y gestiona la mayor presión migratoria de la frontera externa oriental de la UE."
              : "Bulgaria's Ministry of Interior (MVR) is the governing body for civilian security, with a structure including the National Police (GDNP), Border Police (GDGP), Gendarmerie (GDNZO), and Fire Directorate (GDBZN). Bulgaria has been a NATO member since 2004 and manages the largest migration pressure on the EU's eastern external border."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{es ? "MVR — Policía, Fronteras y Bomberos" : "MVR — Police, Border, and Fire"}</h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "GDNP — Dirección General Policía Nacional ~30,000 efectivos" : "GDNP — General Directorate National Police ~30,000 officers"}</li>
                <li>• {es ? "GDGP — Dirección General Guardia de Fronteras ~12,000 efectivos" : "GDGP — General Directorate Border Police ~12,000 personnel"}</li>
                <li>• {es ? "GDBZN — Dirección General Bomberos y Protección Civil" : "GDBZN — General Directorate Fire Safety and Civil Protection"}</li>
                <li>• {es ? "GDBOP — Dirección General Lucha Crimen Organizado" : "GDBOP — General Directorate Combating Organised Crime"}</li>
                <li>• {es ? "GDNZO — Gendarmería Nacional — orden público" : "GDNZO — National Gendarmerie — public order"}</li>
                <li>• {es ? "DANS — Agencia Estatal Seguridad Nacional (contrainteligencia)" : "DANS — State Agency for National Security (counterintelligence)"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{es ? "OTAN y Cooperación Frontex/UE" : "NATO and Frontex/EU Cooperation"}</h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "Base Aérea Graf Ignatievo — F-16 búlgaros + misiones OTAN" : "Graf Ignatievo Air Base — Bulgarian F-16s + NATO missions"}</li>
                <li>• {es ? "Base Aérea Bezmer — misiones OTAN Flanco Sur" : "Bezmer Air Base — NATO Southern Flank missions"}</li>
                <li>• {es ? "Frontex NCC Bulgaria — coordinación ruta migratoria balcánica" : "Frontex NCC Bulgaria — Balkan migration route coordination"}</li>
                <li>• {es ? "EUROSUR — sistema vigilancia fronteras exteriores UE" : "EUROSUR — EU external border surveillance system"}</li>
                <li>• {es ? "BSF — Fuerza Naval del Mar Negro; patrullas OTAN Mar Negro" : "BSF — Black Sea Naval Force; NATO Black Sea patrols"}</li>
                <li>• {es ? "EUROPOL/SELEC — crimen organizado balcánico/transregional" : "EUROPOL/SELEC — Balkan/transregional organized crime"}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#111c2e" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Economía, Infraestructura y Marco Legal" : "Economy, Infrastructure & Legal Framework"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">{es ? "Energía y Recursos" : "Energy & Resources"}</h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Central Nuclear Kozloduy — 40% electricidad búlgara (VVER-1000)" : "Kozloduy Nuclear Plant — 40% Bulgarian electricity (VVER-1000)"}</li>
                <li>• {es ? "Trans-Balkan Pipeline — corredor gas Turquía→Europa Central" : "Trans-Balkan Pipeline — Turkey→Central Europe gas corridor"}</li>
                <li>• {es ? "Puerto de Varna/Burgas — terminales Mar Negro, carbón/grano" : "Varna/Burgas Ports — Black Sea terminals, coal/grain"}</li>
                <li>• {es ? "Turismo Mar Negro — Varna/Sunny Beach ~8M turistas/año" : "Black Sea tourism — Varna/Sunny Beach ~8M tourists/year"}</li>
                <li>• {es ? "Agricultura — mayor productor girasol/trigo sureste Europa" : "Agriculture — largest sunflower/wheat producer SE Europe"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">{es ? "Infraestructura de Transporte" : "Transport Infrastructure"}</h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Aeropuerto Internacional Sofía (SOF) — ~7M pasajeros/año" : "Sofia International Airport (SOF) — ~7M passengers/year"}</li>
                <li>• {es ? "Corredor Paneuropeo VIII — Sofía-Skopje-Tirana" : "Pan-European Corridor VIII — Sofia-Skopje-Tirana"}</li>
                <li>• {es ? "Corredor Paneuropeo IV — Budapest-Sofía-Estambul (Síntra)" : "Pan-European Corridor IV — Budapest-Sofia-Istanbul"}</li>
                <li>• {es ? "Puente de Kalotina — frontera Serbia, principal paso Balcanes" : "Kalotina Bridge — Serbian border, main Balkan crossing"}</li>
                <li>• {es ? "Cruce Kapitan Andreevo — principal frontera turca (flujos migratorios)" : "Kapitan Andreevo — main Turkish border (migration flows)"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">{es ? "Marco Legal y Regulatorio" : "Legal & Regulatory Framework"}</h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Ley de Contratación Pública (ZOP 2016) — CPCPA supervisión" : "Public Procurement Act (ZOP 2016) — CPCPA supervision"}</li>
                <li>• {es ? "RGPD/GDPR + CPDP — Comisión de Protección de Datos Personal" : "GDPR + CPDP — Commission for Personal Data Protection"}</li>
                <li>• {es ? "Ley de Ciberseguridad 2018 / NIS2 transposición 2024" : "Cybersecurity Act 2018 / NIS2 transposition 2024"}</li>
                <li>• {es ? "Banco Nacional de Bulgaria (BNB) — Lev Búlgaro (BGN) fijado EUR" : "Bulgarian National Bank (BNB) — Bulgarian Lev (BGN) pegged EUR"}</li>
                <li>• {es ? "OTAN/UE/OCDE/Espacio Schengen (pendiente) — membresías" : "NATO/EU/OECD/Schengen (pending) — memberships"}</li>
                <li>• {es ? "CRC — Comisión de Regulación de las Comunicaciones (regulador TIC)" : "CRC — Communications Regulation Commission (ICT regulator)"}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f1724]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Capacidades de KabatOne para Bulgaria" : "KabatOne Capabilities for Bulgaria"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "La plataforma KabatOne ofrece una suite integrada adaptada a Bulgaria: gestión de la ruta migratoria balcánica en la frontera turca, protección de la Central Nuclear de Kozloduy, vigilancia portuaria en el Mar Negro, y coordinación con las misiones de la OTAN en las bases de Graf Ignatievo y Bezmer."
              : "The KabatOne platform provides an integrated suite adapted to Bulgaria: Balkan migration route management on the Turkish border, Kozloduy Nuclear Power Plant protection, Black Sea port surveillance, and coordination with NATO missions at Graf Ignatievo and Bezmer bases."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  title: es ? "K-Safety — Centro de Comando Nacional" : "K-Safety — National Command Center",
                  desc: es
                    ? "Panel unificado para la Policía Nacional, Guardia de Fronteras y Bomberos con visualización de incidentes en tiempo real, alertas de cruce irregular en la frontera turca, y gestión de emergencias en Kozloduy."
                    : "Unified dashboard for National Police, Border Police, and Fire Services with real-time incident visualization, irregular crossing alerts on the Turkish border, and Kozloduy emergency management.",
                },
                {
                  title: es ? "K-Dispatch — CAD integrado con 112/EEMS" : "K-Dispatch — 112/EEMS-Integrated CAD",
                  desc: es
                    ? "Despacho coordinado integrado con el sistema 112 búlgaro (EEMS) para Policía, Bomberos y Ambulancias en las 28 regiones administrativas, con soporte para incidentes en la frontera turca y en los puertos del Mar Negro."
                    : "Coordinated dispatch integrated with Bulgaria's 112 system (EEMS) for Police, Fire, and Ambulance across 28 administrative regions, with support for Turkish border and Black Sea port incidents.",
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
                  title: es ? "K-Video — Frontera Turca y Puertos Mar Negro" : "K-Video — Turkish Border & Black Sea Ports",
                  desc: es
                    ? "Gestión de vídeo para la valla fronteriza turca, los puestos de Kapitan Andreevo, los puertos de Varna y Burgas, el Aeropuerto de Sofía y la Central Nuclear de Kozloduy, con analítica de IA compatible con GDPR y NIS2."
                    : "Video management for the Turkish border fence, Kapitan Andreevo crossings, Varna and Burgas ports, Sofia Airport, and Kozloduy Nuclear Power Plant, with AI analytics compatible with GDPR and NIS2.",
                },
                {
                  title: es ? "K-Connect — EUROSUR y Frontex Integration" : "K-Connect — EUROSUR and Frontex Integration",
                  desc: es
                    ? "Integración con EUROSUR para la vigilancia de la frontera exterior de la UE con Turquía, coordinación con el NCC Frontex Bulgaria, gestión de flujos migratorios en tiempo real, y conexión con los registros estatales búlgaros (GRAO, MPS) via eGov Bulgaria."
                    : "Integration with EUROSUR for EU external border surveillance with Turkey, coordination with Frontex NCC Bulgaria, real-time migration flow management, and connection to Bulgarian state registers (GRAO, MPS) via eGov Bulgaria.",
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
        h2={es ? "¿Listo para modernizar la seguridad pública en Bulgaria?" : "Ready to modernize public safety in Bulgaria?"}
        subtitle={es
          ? "Hable con nuestro equipo sobre cómo KabatOne puede apoyar al MVR, la Guardia de Fronteras y GDBZN con una plataforma compatible con GDPR, NIS2, EUROSUR y los estándares de la OTAN."
          : "Speak with our team about how KabatOne can support MVR, Border Police, and GDBZN with a platform compatible with GDPR, NIS2, EUROSUR, and NATO standards."}
      />
      <Footer es={es} />
    </>
  );
}
