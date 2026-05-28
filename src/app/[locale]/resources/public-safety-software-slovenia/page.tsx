import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareSlovenia", locale);
}

export default async function PublicSafetySoftwareSloveniaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Eslovenia | KabatOne"
    : "Public Safety Software for Slovenia | KabatOne";

  const description = es
    ? "KabatOne apoya las fuerzas de seguridad de Eslovenia — Policía Nacional, Guardia de Fronteras, URSZR — con vigilancia en tiempo real, despacho y gestión de incidentes. Compatible con GDPR, estándares OTAN/UE y el sistema 112 esloveno."
    : "KabatOne supports Slovenia security forces — National Police, Border Guard, URSZR civil protection — with real-time surveillance, dispatch, and incident management. Compatible with GDPR, NATO/EU standards, and the Slovenian 112 system.";

  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-slovenia"
    : "https://kabatone.com/resources/public-safety-software-slovenia";

  const faqs = [
    {
      question: es ? "¿Qué desafíos de seguridad enfrenta Eslovenia?" : "What security challenges does Slovenia face?",
      answer: es
        ? "Eslovenia es un corredor de tránsito clave en la ruta migratoria balcánica: la frontera con Croacia (670 km), aunque es frontera interna de la UE/Schengen desde 2023, registra altos volúmenes de tránsito irregular. La frontera con el no-Schengen Bosnia Herzegovina es un punto de presión. La gestión de los Alpes Julianos (riesgos naturales: aludes, inundaciones, terremotos) y la protección del Puerto de Koper — único puerto de mar de Eslovenia y hub para Austria/Hungría/Eslovaquia — son prioritarios."
        : "Slovenia is a key transit corridor on the Balkan migration route: the border with Croatia (670 km), while an internal EU/Schengen border since 2023, records high irregular transit volumes. The border with non-Schengen Bosnia-Herzegovina is a pressure point. Managing the Julian Alps (natural hazards: avalanches, floods, earthquakes) and protecting the Port of Koper — Slovenia's only seaport and hub for Austria/Hungary/Slovakia — are priorities.",
    },
    {
      question: es ? "¿Cómo apoya KabatOne a las fuerzas de seguridad de Eslovenia?" : "How does KabatOne support Slovenia security forces?",
      answer: es
        ? "KabatOne proporciona conciencia situacional unificada para la Policía Nacional de Eslovenia (PU ~9,000 efectivos), la Administración de Protección Civil y Gestión de Catástrofes (URSZR), el Centro de Notificación de Eslovenia (operador 112), el Servicio de Información y Seguridad (SOVA), y la Defensa Nacional (SV). La plataforma se integra con el sistema 112 esloveno, cumple con GDPR y la legislación nacional de protección de datos."
        : "KabatOne provides unified situational awareness for the Slovenian National Police (PU ~9,000 officers), Administration for Civil Protection and Disaster Relief (URSZR), Slovenian Reporting Centre (112 operator), Intelligence and Security Service (SOVA), and National Defence (SV). The platform integrates with the Slovenian 112 system and complies with GDPR and national data protection legislation.",
    },
    {
      question: es ? "¿Qué infraestructura crítica requiere protección en Eslovenia?" : "What critical infrastructure requires protection in Slovenia?",
      answer: es
        ? "La infraestructura crítica incluye el Puerto de Koper (Luka Koper, ~27M t/año — puerta de entrada de los Alpes para Austria, Hungría, Eslovaquia y República Checa), el Aeropuerto Internacional Jože Pučnik de Liubliana (LJU), la Central Nuclear de Krško (NEK, 50% electricidad eslovena, operada conjuntamente con Croacia), el corredor ferroviario Divača-Koper (proyecto expansión €1.5B), los túneles del Karavanken hacia Austria, y los corredores paneuropeos V y X."
        : "Critical infrastructure includes the Port of Koper (Luka Koper, ~27M t/year — Alpine gateway for Austria, Hungary, Slovakia, Czech Republic), Ljubljana Jože Pučnik International Airport (LJU), Krško Nuclear Power Plant (NEK, 50% Slovenian electricity, jointly operated with Croatia), Divača-Koper railway corridor (€1.5B expansion project), Karavanken tunnels toward Austria, and Pan-European Corridors V and X.",
    },
    {
      question: es ? "¿Cómo gestiona KabatOne los riesgos naturales en los Alpes Eslovenos?" : "How does KabatOne manage natural hazards in the Slovenian Alps?",
      answer: es
        ? "KabatOne integra alertas sísmicas del Agencia de Medioambiente de Eslovenia (ARSO), alertas de aludes del URSZR en las estaciones de los Alpes Julianos, gestión de inundaciones del Río Sava y sus afluentes (las inundaciones de agosto 2023 causaron €500M en daños), y alertas de emergencia en los túneles del Karavanken. La plataforma coordina el despacho de rescate montaña con la Asociación de Montañeros de Eslovenia y la Guardia de Fronteras en zonas de alta altitud."
        : "KabatOne integrates seismic alerts from the Slovenian Environment Agency (ARSO), URSZR avalanche alerts at Julian Alps stations, flood management for the Sava River and tributaries (August 2023 floods caused €500M in damage), and emergency alerts in the Karavanken tunnels. The platform coordinates mountain rescue dispatch with the Alpine Association of Slovenia and Border Guard in high-altitude zones.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://kabatone.com" },
    { name: "Resources", url: "https://kabatone.com/resources" },
    { name: es ? "Software de Seguridad Pública para Eslovenia" : "Public Safety Software for Slovenia", url: canonical },
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
            <span className="text-blue-400 text-sm font-medium">{es ? "Guía de Mercado — Eslovenia" : "Market Guide — Slovenia"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Software de Seguridad Pública para Eslovenia" : "Public Safety Software for Slovenia"}
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            {es
              ? "Conciencia situacional unificada para la Policía Nacional, URSZR y Guardia de Fronteras — gestión de la ruta migratoria balcánica, protección del Puerto de Koper y la CNE de Krško, y respuesta a desastres naturales alpinos."
              : "Unified situational awareness for the National Police, URSZR, and Border Guard — Balkan migration route management, Port of Koper and Krško Nuclear Plant protection, and Alpine natural disaster response."}
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f1724]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Fuerzas de Seguridad de Eslovenia" : "Slovenia Security Forces"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "La Policía Nacional de Eslovenia (PU) con ~9,000 efectivos es el principal cuerpo de seguridad civil. Bajo el Ministerio del Interior, la Guardia de Fronteras forma parte integral de la Policía. La URSZR coordina la protección civil y gestión de catástrofes. Eslovenia es miembro de la OTAN desde 2004 y de la UE/Schengen desde 2004/2007."
              : "The Slovenian National Police (PU) with ~9,000 officers is the main civilian security body. The Border Guard is an integral part of the Police under the Ministry of Interior. URSZR coordinates civil protection and disaster management. Slovenia has been a NATO and EU/Schengen member since 2004/2007."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{es ? "Policía, Fronteras y Protección Civil" : "Police, Border, and Civil Protection"}</h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "Policía Nacional (PU) ~9,000 efectivos — 8 unidades regionales" : "National Police (PU) ~9,000 officers — 8 regional units"}</li>
                <li>• {es ? "Guardia de Fronteras — integrada en la Policía Nacional" : "Border Guard — integrated within the National Police"}</li>
                <li>• {es ? "URSZR — Protección Civil y Gestión de Catástrofes" : "URSZR — Civil Protection and Disaster Relief"}</li>
                <li>• {es ? "Centro de Notificación de Eslovenia (ReCO) — operador 112" : "Slovenian Reporting Centre (ReCO) — 112 operator"}</li>
                <li>• {es ? "SOVA — Servicio de Información y Seguridad de Eslovenia" : "SOVA — Slovenian Intelligence and Security Agency"}</li>
                <li>• {es ? "Defensa Nacional (SV) ~6,000 — misiones OTAN; batalla grupos" : "National Defence (SV) ~6,000 — NATO missions; battle groups"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{es ? "OTAN, Frontex y Gestión de Riesgos" : "NATO, Frontex, and Risk Management"}</h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "OTAN miembro desde 2004; eFP participante en Letonia" : "NATO member since 2004; eFP participant in Latvia"}</li>
                <li>• {es ? "Frontex NCC Eslovenia — ruta migratoria balcánica" : "Frontex NCC Slovenia — Balkan migration route"}</li>
                <li>• {es ? "ARSO — Agencia Medioambiente: alertas sísmica/hidro/avalanchas" : "ARSO — Environment Agency: seismic/hydro/avalanche alerts"}</li>
                <li>• {es ? "NEK Krško — central nuclear conjunta con Croacia; SNSA regulador" : "NEK Krsko — joint nuclear plant with Croatia; SNSA regulator"}</li>
                <li>• {es ? "EUROPOL — cooperación policial; INTERPOL — crimen organizado" : "EUROPOL — police cooperation; INTERPOL — organized crime"}</li>
                <li>• {es ? "Schengen miembro desde 2007; reapertura controles 2022-2023" : "Schengen member since 2007; border controls reintroduced 2022-2023"}</li>
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
              <h3 className="text-cyan-400 font-semibold mb-3">{es ? "Puerto de Koper y Economía" : "Port of Koper & Economy"}</h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Luka Koper ~27M t/año — gateway Austria/Hungría/Eslovaquia/CZ" : "Luka Koper ~27M t/year — Austria/Hungary/Slovakia/CZ gateway"}</li>
                <li>• {es ? "Automóviles: mayor puerto europeo de coches importados (~900K/año)" : "Vehicles: largest European car import port (~900K/year)"}</li>
                <li>• {es ? "Turismo Alpes/Adriático/Liubliana ~7M visitantes/año" : "Alps/Adriatic/Ljubljana tourism ~7M visitors/year"}</li>
                <li>• {es ? "Farmacéutica/química: Lek/Novartis, Krka Novo Mesto" : "Pharma/chemical: Lek/Novartis, Krka Novo Mesto"}</li>
                <li>• {es ? "PIB per cápita ~€28,000 — mayor de ex-Yugoslavia" : "GDP per capita ~€28,000 — highest of ex-Yugoslavia"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">{es ? "Infraestructura Crítica" : "Critical Infrastructure"}</h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Aeropuerto Liubliana Jože Pučnik (LJU) + Maribor (MBX)" : "Ljubljana Jože Pučnik Airport (LJU) + Maribor (MBX)"}</li>
                <li>• {es ? "NEK Krško — 50% electricidad eslovena (VVER-440 gemelo)" : "NEK Krsko — 50% Slovenian electricity (twin VVER-440)"}</li>
                <li>• {es ? "Corredor ferroviario Divača-Koper — proyecto €1.5B (TEN-T)" : "Divača-Koper railway corridor — €1.5B project (TEN-T)"}</li>
                <li>• {es ? "Túneles Karavanken — conexión Austria; capacidad crítica transporte" : "Karavanken Tunnels — Austria connection; critical transport"}</li>
                <li>• {es ? "Corredor Paneuropeo V (Venecia-Liubliana-Budapest-Uzhhorod/Kyiv)" : "Pan-European Corridor V (Venice-Ljubljana-Budapest-Uzhhorod)"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">{es ? "Marco Legal y Regulatorio" : "Legal & Regulatory Framework"}</h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Ley de Contratación Pública (ZJN-3) — DKOM supervisión" : "Public Procurement Act (ZJN-3) — DKOM supervision"}</li>
                <li>• {es ? "RGPD/GDPR + IP RS — Comisionado de Información de Eslovenia" : "GDPR + IP RS — Information Commissioner of Slovenia"}</li>
                <li>• {es ? "Ley de Ciberseguridad (SI-CERT/UKOM) / NIS2 transposición" : "Cybersecurity Act (SI-CERT/UKOM) / NIS2 transposition"}</li>
                <li>• {es ? "Banco de Eslovenia (Banka Slovenije) — Euro (EUR), zona euro 2007" : "Bank of Slovenia (Banka Slovenije) — Euro (EUR), Eurozone 2007"}</li>
                <li>• {es ? "OTAN/UE/OCDE/Espacio Schengen — membresías clave" : "NATO/EU/OECD/Schengen Area — key memberships"}</li>
                <li>• {es ? "AKOS — Agencia de Comunicaciones (regulador telecomunicaciones)" : "AKOS — Agency of Communication Networks and Services"}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f1724]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Capacidades de KabatOne para Eslovenia" : "KabatOne Capabilities for Slovenia"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "La plataforma KabatOne ofrece una suite integrada adaptada a Eslovenia: gestión de la ruta migratoria balcánica en la frontera con Croacia/Bosnia, protección del Puerto de Koper y la CNE de Krško, respuesta a desastres naturales alpinos, y coordinación con la OTAN y Frontex."
              : "The KabatOne platform provides an integrated suite adapted to Slovenia: Balkan migration route management on the Croatia/Bosnia border, Port of Koper and Krško Nuclear Plant protection, Alpine natural disaster response, and NATO and Frontex coordination."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  title: es ? "K-Safety — Centro de Comando con Alertas Alpinas" : "K-Safety — Command Center with Alpine Alerts",
                  desc: es
                    ? "Panel unificado para la Policía Nacional, Guardia de Fronteras y URSZR con visualización de incidentes en tiempo real, alertas de riesgo natural de ARSO (aludes, inundaciones, sismos), y gestión de la frontera con Croacia/Bosnia."
                    : "Unified dashboard for National Police, Border Guard, and URSZR with real-time incident visualization, ARSO natural hazard alerts (avalanches, floods, earthquakes), and Croatia/Bosnia border management.",
                },
                {
                  title: es ? "K-Dispatch — CAD integrado con 112/ReCO" : "K-Dispatch — 112/ReCO-Integrated CAD",
                  desc: es
                    ? "Despacho coordinado integrado con el ReCO (operador 112 esloveno) para Policía, Protección Civil y Bomberos en las 8 unidades regionales de Policía, con protocolos de emergencia para la CNE de Krško y los túneles alpinos."
                    : "Coordinated dispatch integrated with ReCO (Slovenian 112 operator) for Police, Civil Protection, and Fire across 8 regional police units, with emergency protocols for Krško Nuclear Plant and Alpine tunnels.",
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
                  title: es ? "K-Video — Puerto Koper y Pasos Fronterizos" : "K-Video — Port of Koper & Border Crossings",
                  desc: es
                    ? "Gestión de vídeo para el Puerto de Koper (27M t/año, 900K coches), los pasos fronterizos con Croacia y Bosnia, el Aeropuerto LJU, los túneles del Karavanken y la CNE de Krško, con analítica de IA compatible con GDPR y NIS2."
                    : "Video management for the Port of Koper (27M t/year, 900K cars), Croatia and Bosnia border crossings, LJU Airport, Karavanken tunnels, and Krško Nuclear Plant, with AI analytics compatible with GDPR and NIS2.",
                },
                {
                  title: es ? "K-Connect — Frontex, EUROSUR y Registros SI" : "K-Connect — Frontex, EUROSUR and SI Registers",
                  desc: es
                    ? "Integración con EUROSUR/Frontex NCC Eslovenia para vigilancia de la ruta balcánica, coordinación de alertas con ARSO para emergencias naturales alpinas, y conexión con los registros estatales eslovenos (CRP, MNZ) via eUprava Slovenia."
                    : "Integration with EUROSUR/Frontex NCC Slovenia for Balkan route surveillance, ARSO alert coordination for Alpine natural emergencies, and connection to Slovenian state registers (CRP, MNZ) via eUprava Slovenia.",
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
        h2={es ? "¿Listo para modernizar la seguridad pública en Eslovenia?" : "Ready to modernize public safety in Slovenia?"}
        subtitle={es
          ? "Hable con nuestro equipo sobre cómo KabatOne puede apoyar a la Policía Nacional, URSZR y la Guardia de Fronteras con una plataforma compatible con GDPR, NIS2 y los estándares de la OTAN."
          : "Speak with our team about how KabatOne can support the National Police, URSZR, and Border Guard with a platform compatible with GDPR, NIS2, and NATO standards."}
      />
      <Footer es={es} />
    </>
  );
}
