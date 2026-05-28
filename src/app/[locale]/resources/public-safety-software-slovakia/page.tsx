import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareSlovakia", locale);
}

export default async function PublicSafetySoftwareSlovakiaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Eslovaquia | KabatOne"
    : "Public Safety Software for Slovakia | KabatOne";

  const description = es
    ? "KabatOne apoya las fuerzas de seguridad de Eslovaquia — Policía de Eslovaquia, Guardia de Fronteras y Extranjería, HaZZ — con vigilancia en tiempo real, despacho y gestión de incidentes. Compatible con GDPR, estándares OTAN/UE y el sistema 112 eslovaco."
    : "KabatOne supports Slovakia security forces — Police of Slovakia, Border and Alien Police, HaZZ fire service — with real-time surveillance, dispatch, and incident management. Compatible with GDPR, NATO/EU standards, and the Slovak 112 system.";

  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-slovakia"
    : "https://kabatone.com/resources/public-safety-software-slovakia";

  const faqs = [
    {
      question: es ? "¿Qué desafíos de seguridad enfrenta Eslovaquia?" : "What security challenges does Slovakia face?",
      answer: es
        ? "Eslovaquia enfrenta desafíos en el flanco oriental de la OTAN: frontera con Ucrania (98 km) que gestiona el tránsito de refugiados (1M+ cruzaron en 2022-2023) y el flujo de ayuda militar. La frontera con Hungría es relevante por los flujos migratorios de la ruta balcánica. Como corredor de tránsito de gas ruso hacia Europa occidental (gasoducto TBG/Eustream), la seguridad energética es prioritaria. También enfrenta polarización política interna y riesgos de desinformación."
        : "Slovakia faces challenges on the NATO Eastern Flank: border with Ukraine (98 km) managing refugee transit (1M+ crossed in 2022-2023) and military aid flows. The border with Hungary is relevant for Balkan migration route flows. As a transit corridor for Russian gas to Western Europe (TBG/Eustream pipeline), energy security is a priority. It also faces internal political polarization and disinformation risks.",
    },
    {
      question: es ? "¿Cómo apoya KabatOne a las fuerzas de seguridad de Eslovaquia?" : "How does KabatOne support Slovakia security forces?",
      answer: es
        ? "KabatOne proporciona conciencia situacional unificada para la Policía de Eslovaquia (PZ ~20,000 efectivos), la Guardia de Fronteras y Extranjería (ÚHCP), el Cuerpo de Bomberos y Rescate de Eslovaquia (HaZZ), el Servicio de Inteligencia (SIS), y el Centro de Operaciones del Sistema de Seguridad Nacional (KRIZOVÝ ŠTÁB). La plataforma se integra con el sistema 112 eslovaco (operado por la Operadora del Sistema de Emergencias), cumple con GDPR y la legislación eslovaca de protección de datos."
        : "KabatOne provides unified situational awareness for the Police of Slovakia (PZ ~20,000 officers), Border and Alien Police (ÚHCP), Fire and Rescue Corps (HaZZ), Intelligence Service (SIS), and the National Security System Operations Centre (KRIZOVÝ ŠTÁB). The platform integrates with Slovakia's 112 system, complies with GDPR and Slovak data protection legislation.",
    },
    {
      question: es ? "¿Qué infraestructura crítica requiere protección en Eslovaquia?" : "What critical infrastructure requires protection in Slovakia?",
      answer: es
        ? "La infraestructura crítica incluye la Central Nuclear de Mochovce (4 reactores VVER-440, ~50% electricidad eslovaca), el Aeropuerto Internacional de Bratislava (BTS) y el de Košice (KSC), el corredor de gas Eustream (gasoducto TBG — 87.8 bcm/año capacidad, principal ruta gas ruso→Europa), el Puerto fluvial de Bratislava en el Danubio, las plantas de VW/Stellantis/Kia (mayor concentración plantas de automóviles per cápita del mundo), y los cuarteles de la OTAN en Eslovaquia."
        : "Critical infrastructure includes Mochovce Nuclear Power Plant (4 VVER-440 reactors, ~50% Slovak electricity), Bratislava International Airport (BTS) and Košice Airport (KSC), Eustream gas corridor (TBG pipeline — 87.8 bcm/year capacity, main Russian gas→Europe route), Bratislava riverport on the Danube, VW/Stellantis/Kia plants (world's largest car plant concentration per capita), and NATO barracks in Slovakia.",
    },
    {
      question: es ? "¿Cómo apoya KabatOne la gestión de la frontera con Ucrania?" : "How does KabatOne support the Ukraine border management?",
      answer: es
        ? "KabatOne integra la videovigilancia de los pasos fronterizos eslovaco-ucranianos, el seguimiento de unidades de la Guardia de Fronteras y Extranjería, el monitoreo de flujos de refugiados en los 4 puntos de paso principales (Vyšné Nemecké, Ubľa, Veľké Slemence, Čierna nad Tisou), y la coordinación con Frontex y el Centro de Control de Crisis de la UE para la gestión de desplazamientos masivos. La plataforma gestiona también el control de equipos militares y ayuda humanitaria en tránsito."
        : "KabatOne integrates video surveillance at Slovak-Ukrainian border crossings, Border and Alien Police unit tracking, refugee flow monitoring at the 4 main crossing points (Vyšné Nemecké, Ubľa, Veľké Slemence, Čierna nad Tisou), and coordination with Frontex and the EU Crisis Control Centre for mass displacement management. The platform also manages military equipment and humanitarian aid in transit.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://kabatone.com" },
    { name: "Resources", url: "https://kabatone.com/resources" },
    { name: es ? "Software de Seguridad Pública para Eslovaquia" : "Public Safety Software for Slovakia", url: canonical },
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
            <span className="text-blue-400 text-sm font-medium">{es ? "Guía de Mercado — Eslovaquia" : "Market Guide — Slovakia"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Software de Seguridad Pública para Eslovaquia" : "Public Safety Software for Slovakia"}
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            {es
              ? "Conciencia situacional unificada para la Policía de Eslovaquia, Guardia de Fronteras y HaZZ — gestión de la frontera con Ucrania y refugiados, protección de Mochovce y el corredor Eustream, y coordinación con la OTAN en el flanco oriental."
              : "Unified situational awareness for Slovakia Police, Border Guard, and HaZZ — Ukraine border and refugee management, Mochovce and Eustream corridor protection, and NATO Eastern Flank coordination."}
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f1724]">
        <div className="max-w-5xl mx-alone">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Fuerzas de Seguridad de Eslovaquia" : "Slovakia Security Forces"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "La Policía de Eslovaquia (PZ) con ~20,000 efectivos es el principal cuerpo de seguridad civil. Bajo el Ministerio del Interior, también operan la Guardia de Fronteras (ÚHCP), el Cuerpo de Bomberos (HaZZ) y la Policía Ferroviaria. Las Fuerzas Armadas (OS SR) apoyan en emergencias mayores y participan en misiones OTAN."
              : "The Police of Slovakia (PZ) with ~20,000 officers is the main civilian security body. Under the Ministry of Interior, the Border and Alien Police (ÚHCP), Fire and Rescue Corps (HaZZ), and Railway Police also operate. The Armed Forces (OS SR) support major emergencies and participate in NATO missions."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{es ? "Policía, Fronteras y HaZZ" : "Police, Border, and HaZZ"}</h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "Policía de Eslovaquia (PZ) ~20,000 efectivos — 8 regiones" : "Police of Slovakia (PZ) ~20,000 officers — 8 regions"}</li>
                <li>• {es ? "ÚHCP — Guardia de Fronteras y Extranjería — frontera UA/HU/PL" : "ÚHCP — Border and Alien Police — UA/HU/PL borders"}</li>
                <li>• {es ? "HaZZ — Cuerpo de Bomberos y Rescate de Eslovaquia" : "HaZZ — Fire and Rescue Corps of Slovakia"}</li>
                <li>• {es ? "SIS — Servicio de Inteligencia de Eslovaquia" : "SIS — Slovak Intelligence Service"}</li>
                <li>• {es ? "NBÚ — Oficina Nacional de Seguridad (ciberseguridad)" : "NBÚ — National Security Authority (cybersecurity)"}</li>
                <li>• {es ? "Fuerzas Armadas OS SR — misiones OTAN, eFP Polonia" : "Armed Forces OS SR — NATO missions, eFP Poland"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{es ? "OTAN, Frontex y Energía" : "NATO, Frontex, and Energy"}</h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "OTAN miembro desde 2004 — participación eFP Lituania/Polonia" : "NATO member since 2004 — eFP Lithuania/Poland participation"}</li>
                <li>• {es ? "Frontex NCC Eslovaquia — gestión frontera Ucrania/Hungría" : "Frontex NCC Slovakia — Ukraine/Hungary border management"}</li>
                <li>• {es ? "Eustream — operador gasoducto TBG, corredor gas ruso→Europa" : "Eustream — TBG pipeline operator, Russian gas→Europe corridor"}</li>
                <li>• {es ? "Mochovce — central nuclear 4 reactores VVER-440; JASR regulador" : "Mochovce — nuclear plant 4 VVER-440 reactors; JASR regulator"}</li>
                <li>• {es ? "Danubio — corredor fluvial Bratislava→Mar Negro (Corredor VII)" : "Danube — Bratislava→Black Sea river corridor (Corridor VII)"}</li>
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
              <h3 className="text-cyan-400 font-semibold mb-3">{es ? "Industria y Economía" : "Industry & Economy"}</h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Mayor producción coches per cápita del mundo — VW/Stellantis/Kia" : "World largest car production per capita — VW/Stellantis/Kia"}</li>
                <li>• {es ? "~1.1M coches/año (VW Bratislava, Stellantis Trnava, KIA Žilina)" : "~1.1M cars/year (VW Bratislava, Stellantis Trnava, KIA Zilina)"}</li>
                <li>• {es ? "Mochovce — 50% electricidad eslovaca; exportador neto energía" : "Mochovce — 50% Slovak electricity; net energy exporter"}</li>
                <li>• {es ? "Eustream — 87.8 bcm/año capacidad; corredor gas crítico" : "Eustream — 87.8 bcm/year capacity; critical gas corridor"}</li>
                <li>• {es ? "Turismo Tatras/Bratislava ~10M visitantes/año" : "Tatras/Bratislava tourism ~10M visitors/year"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">{es ? "Infraestructura Crítica" : "Critical Infrastructure"}</h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Aeropuerto Bratislava (BTS) + Košice (KSC) + Poprad (TAT)" : "Bratislava Airport (BTS) + Kosice (KSC) + Poprad (TAT)"}</li>
                <li>• {es ? "Puerto de Bratislava (Danubio) — conexión Múnich→Mar Negro" : "Bratislava Port (Danube) — Munich→Black Sea connection"}</li>
                <li>• {es ? "Red ferroviaria ŽSR — Corredor Rin-Danubio (TEN-T)" : "ZSR rail network — Rhine-Danube Corridor (TEN-T)"}</li>
                <li>• {es ? "Koridor VA — carretera E65 Brno→Bratislava→Budapest" : "Corridor VA — E65 road Brno→Bratislava→Budapest"}</li>
                <li>• {es ? "Cable SPE (Slovak Power Engineering) — red eléctrica interconectada" : "Slovak power grid — ENTSO-E synchronized interconnection"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">{es ? "Marco Legal y Regulatorio" : "Legal & Regulatory Framework"}</h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Ley de Contratación Pública (Zákon o VO 343/2015) — ÚVO" : "Public Procurement Act (343/2015) — Public Procurement Office (UVO)"}</li>
                <li>• {es ? "RGPD/GDPR + ÚOOÚ — Oficina de Protección de Datos Personales" : "GDPR + ÚOOÚ — Office for Personal Data Protection"}</li>
                <li>• {es ? "Ley de Ciberseguridad (NBÚ) / Directiva NIS2 transposición" : "Cybersecurity Act (NBÚ) / NIS2 Directive transposition"}</li>
                <li>• {es ? "Banco Nacional de Eslovaquia (NBS) — Euro (EUR), zona euro 2009" : "National Bank of Slovakia (NBS) — Euro (EUR), Eurozone 2009"}</li>
                <li>• {es ? "OTAN/UE/OCDE/Espacio Schengen — membresías clave" : "NATO/EU/OECD/Schengen Area — key memberships"}</li>
                <li>• {es ? "RÚ — Regulačný Úrad — regulador telecomunicaciones (RÚDO)" : "RÚDO — Regulatory Office for Electronic Communications"}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f1724]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Capacidades de KabatOne para Eslovaquia" : "KabatOne Capabilities for Slovakia"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "La plataforma KabatOne ofrece una suite integrada adaptada a Eslovaquia: gestión de la frontera con Ucrania y flujos de refugiados, protección de la Central Nuclear de Mochovce y el corredor Eustream, vigilancia de las plantas de producción de automóviles, y coordinación con la OTAN en el flanco oriental."
              : "The KabatOne platform provides an integrated suite adapted to Slovakia: Ukraine border and refugee flow management, Mochovce Nuclear Plant and Eustream corridor protection, automotive plant surveillance, and NATO Eastern Flank coordination."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  title: es ? "K-Safety — Centro de Comando Nacional" : "K-Safety — National Command Center",
                  desc: es
                    ? "Panel unificado para la Policía de Eslovaquia, ÚHCP y HaZZ con visualización en tiempo real, alertas de la frontera con Ucrania y Hungría, gestión de flujos de refugiados, y coordinación con el KRIZOVÝ ŠTÁB del Ministerio del Interior."
                    : "Unified dashboard for Slovakia Police, ÚHCP, and HaZZ with real-time visualization, Ukraine and Hungary border alerts, refugee flow management, and coordination with the Ministry of Interior KRIZOVÝ ŠTÁB.",
                },
                {
                  title: es ? "K-Dispatch — CAD integrado con 112" : "K-Dispatch — 112-Integrated CAD",
                  desc: es
                    ? "Despacho coordinado integrado con el sistema 112 eslovaco para Policía, Bomberos y Ambulancias en las 8 regiones de Eslovaquia, con protocolos especiales para incidentes en la Central de Mochovce y los pasos fronterizos ucranianos."
                    : "Coordinated dispatch integrated with Slovakia's 112 system for Police, Fire, and Ambulance across 8 regions, with special protocols for Mochovce Nuclear Plant incidents and Ukrainian border crossings.",
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
                  title: es ? "K-Video — Frontera Ucrania y Plantas Industriales" : "K-Video — Ukraine Border & Industrial Plants",
                  desc: es
                    ? "Gestión de vídeo para los 4 pasos fronterizos ucranianos, las plantas VW/Stellantis/KIA, el Aeropuerto de Bratislava BTS, el Puerto del Danubio y la Central de Mochovce, con analítica de IA compatible con GDPR y NIS2."
                    : "Video management for the 4 Ukrainian border crossings, VW/Stellantis/KIA automotive plants, Bratislava BTS Airport, Danube Port, and Mochovce Nuclear Plant, with AI analytics compatible with GDPR and NIS2.",
                },
                {
                  title: es ? "K-Connect — Frontex y Registros Estatales SK" : "K-Connect — Frontex and SK State Registers",
                  desc: es
                    ? "Integración con Frontex NCC Eslovaquia para gestión de fronteras exteriores UE, coordinación con el sistema EUROSUR, y conexión con los registros estatales de Eslovaquia (Registro de Población, Vehículos MVSR) a través del portal eGov sk."
                    : "Integration with Frontex NCC Slovakia for EU external border management, EUROSUR system coordination, and connection to Slovak state registers (Population Register, Vehicles MVSR) through the eGov sk portal.",
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
        h2={es ? "¿Listo para modernizar la seguridad pública en Eslovaquia?" : "Ready to modernize public safety in Slovakia?"}
        subtitle={es
          ? "Hable con nuestro equipo sobre cómo KabatOne puede apoyar a la Policía de Eslovaquia, ÚHCP y HaZZ con una plataforma compatible con GDPR, NIS2 y los estándares de la OTAN."
          : "Speak with our team about how KabatOne can support Slovakia Police, ÚHCP, and HaZZ with a platform compatible with GDPR, NIS2, and NATO standards."}
      />
      <Footer es={es} />
    </>
  );
}
