import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareIreland", locale);
}

export default async function PublicSafetySoftwareIrelandPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Irlanda | KabatOne"
    : "Public Safety Software for Ireland | KabatOne";

  const description = es
    ? "KabatOne apoya las fuerzas de seguridad de Irlanda — An Garda Síochána, Servicio de Ambulancias Nacional, Brigadas de Bomberos — con vigilancia en tiempo real, despacho y gestión de incidentes compatible con GDPR y los estándares de la Comisión de Información."
    : "KabatOne supports Ireland security forces — An Garda Síochána, National Ambulance Service, Fire Brigades — with real-time surveillance, dispatch, and incident management compatible with GDPR and the Data Protection Commission standards.";

  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-ireland"
    : "https://kabatone.com/resources/public-safety-software-ireland";

  const faqs = [
    {
      question: es
        ? "¿Qué desafíos de seguridad enfrenta Irlanda?"
        : "What security challenges does Ireland face?",
      answer: es
        ? "Irlanda enfrenta un conjunto único de desafíos: como único estado de la UE con frontera terrestre con el Reino Unido (la Frontera de Irlanda del Norte post-Brexit), gestiona flujos de personas y mercancías sin controles físicos bajo el Acuerdo de Viernes Santo. El crimen organizado transnacional (carteles de drogas Dublin/Kinahan), los incidentes de extremismo en aumento, la gestión de los grandes eventos del estadio Aviva y el turismo masivo (~10M visitantes/año) requieren capacidades avanzadas de seguridad pública."
        : "Ireland faces a unique set of challenges: as the only EU state with a land border with the UK (the Northern Ireland border post-Brexit), it manages people and goods flows without physical checks under the Good Friday Agreement. Transnational organized crime (Dublin/Kinahan drug cartels), increasing extremism incidents, management of large events at the Aviva Stadium, and mass tourism (~10M visitors/year) require advanced public safety capabilities.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne a las fuerzas de seguridad de Irlanda?"
        : "How does KabatOne support Ireland security forces?",
      answer: es
        ? "KabatOne proporciona conciencia situacional unificada para An Garda Síochána (~15,000 efectivos), el Servicio de Ambulancias Nacional (NAS), las Brigadas de Bomberos de los 26 condados, el Servicio de Guardia Costera de Irlanda (IRCG), y el Servicio de Prisiones de Irlanda. La plataforma se integra con el sistema de llamadas de emergencia 999/112 de Irlanda, cumple con el RGPD y las directrices de la Comisión de Protección de Datos (DPC), y soporta la interoperabilidad con el PSNI de Irlanda del Norte para incidentes transfronterizos."
        : "KabatOne provides unified situational awareness for An Garda Síochána (~15,000 officers), the National Ambulance Service (NAS), Fire Brigades across 26 counties, the Irish Coast Guard (IRCG), and the Irish Prison Service. The platform integrates with Ireland's 999/112 emergency call system, complies with GDPR and Data Protection Commission (DPC) guidelines, and supports interoperability with PSNI in Northern Ireland for cross-border incidents.",
    },
    {
      question: es
        ? "¿Qué infraestructura crítica requiere protección en Irlanda?"
        : "What critical infrastructure requires protection in Ireland?",
      answer: es
        ? "La infraestructura crítica incluye el Aeropuerto de Dublín (DUB, ~35M pasajeros/año, 2º más concurrido de Irlanda/RU por pasajeros), el Puerto de Dublín (mayor puerto isla de Irlanda), los centros de datos hiperescala (Microsoft/Google/Meta/Amazon, 70+ en Irlanda), los cables submarinos transatlánticos (AEConnect/HAVFRUE/Grace Hopper), y las instalaciones de la Guardia Costera para búsqueda y rescate marítimo en el Atlántico Norte."
        : "Critical infrastructure includes Dublin Airport (DUB, ~35M passengers/year, 2nd busiest on the island), Dublin Port (largest port on the island of Ireland), hyperscale data centres (Microsoft/Google/Meta/Amazon, 70+ in Ireland), transatlantic submarine cables (AEConnect/HAVFRUE/Grace Hopper), and Irish Coast Guard facilities for North Atlantic search and rescue.",
    },
    {
      question: es
        ? "¿Cómo gestiona KabatOne la cooperación transfronteriza con Irlanda del Norte?"
        : "How does KabatOne manage cross-border cooperation with Northern Ireland?",
      answer: es
        ? "KabatOne soporta los protocolos de interoperabilidad entre An Garda Síochána (República de Irlanda) y el Police Service of Northern Ireland (PSNI/RU), con gestión de incidentes transfronterizos bajo el marco del Acuerdo de Viernes Santo, comunicaciones seguras entre ambas jurisdicciones, y coordinación de la Guardia Costera conjunta Irlanda/RU para el Canal de San Jorge, el Mar de Irlanda y el Atlántico Norte."
        : "KabatOne supports interoperability protocols between An Garda Síochána (Republic of Ireland) and the Police Service of Northern Ireland (PSNI/UK), with cross-border incident management under the Good Friday Agreement framework, secure communications between both jurisdictions, and joint Ireland/UK Coast Guard coordination for St. George's Channel, the Irish Sea, and North Atlantic.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://kabatone.com" },
    { name: "Resources", url: "https://kabatone.com/resources" },
    { name: es ? "Software de Seguridad Pública para Irlanda" : "Public Safety Software for Ireland", url: canonical },
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
            <span className="text-blue-400 text-sm font-medium">{es ? "Guía de Mercado — Irlanda" : "Market Guide — Ireland"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Software de Seguridad Pública para Irlanda" : "Public Safety Software for Ireland"}
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            {es
              ? "Conciencia situacional unificada para An Garda Síochána, Guardia Costera y Brigadas de Bomberos — gestión de la frontera post-Brexit con Irlanda del Norte, protección de los 70+ centros de datos hiperescala, y respuesta de emergencias en el Atlántico Norte."
              : "Unified situational awareness for An Garda Síochána, Irish Coast Guard, and Fire Brigades — post-Brexit border management with Northern Ireland, protection of 70+ hyperscale data centres, and North Atlantic emergency response."}
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f1724]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Fuerzas de Seguridad de Irlanda" : "Ireland Security Forces"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "An Garda Síochána es la fuerza policial única de la República de Irlanda, con competencia tanto civil como de seguridad nacional. Con ~15,000 gardaí y una estructura descentralizada en 28 divisiones, opera en estrecha coordinación con el Servicio de Ambulancias Nacional y las brigadas de bomberos municipales y de condado."
              : "An Garda Síochána is the sole police force of the Republic of Ireland, with both civil and national security competence. With ~15,000 gardaí and a decentralized structure across 28 divisions, it operates in close coordination with the National Ambulance Service and municipal and county fire brigades."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{es ? "Garda, Ambulancias y Bomberos" : "Garda, Ambulance, and Fire"}</h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "An Garda Síochána ~15,000 gardaí — 28 divisiones, 6 regiones" : "An Garda Síochána ~15,000 gardaí — 28 divisions, 6 regions"}</li>
                <li>• {es ? "Servicio de Ambulancias Nacional (NAS) — respuesta médica de emergencia" : "National Ambulance Service (NAS) — medical emergency response"}</li>
                <li>• {es ? "Brigadas de Bomberos — 27 autoridades locales, ~3,500 bomberos" : "Fire Brigades — 27 local authorities, ~3,500 firefighters"}</li>
                <li>• {es ? "Garda Special Detective Unit (SDU) — antiterrorismo" : "Garda Special Detective Unit (SDU) — counterterrorism"}</li>
                <li>• {es ? "Unidad de Crimen Organizado Garda (GOCB) — narcotráfico" : "Garda Organised Crime Bureau (GOCB) — drug trafficking"}</li>
                <li>• {es ? "Defence Forces Irlanda ~9,000 — apoyo civil en emergencias" : "Irish Defence Forces ~9,000 — civil emergency support"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{es ? "Guardia Costera y Cooperación" : "Coast Guard and Cooperation"}</h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "Guardia Costera de Irlanda (IRCG) — búsqueda y rescate Atlántico Norte" : "Irish Coast Guard (IRCG) — North Atlantic search and rescue"}</li>
                <li>• {es ? "Servicio Naval de Irlanda — 8 patrulleras, ZEE 880,000 km²" : "Irish Naval Service — 8 patrol vessels, EEZ 880,000 km²"}</li>
                <li>• {es ? "PSNI — Police Service of Northern Ireland (cooperación transfronteriza)" : "PSNI — Police Service of Northern Ireland (cross-border cooperation)"}</li>
                <li>• {es ? "Europol/Interpol — crimen organizado transnacional" : "Europol/Interpol — transnational organised crime"}</li>
                <li>• {es ? "Revenue Commissioners — control aduanero ports/aeropuertos" : "Revenue Commissioners — customs control ports/airports"}</li>
                <li>• {es ? "NCC — Centro Nacional de Ciberseguridad de Irlanda" : "NCSC — National Cyber Security Centre Ireland"}</li>
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
              <h3 className="text-cyan-400 font-semibold mb-3">{es ? "Hub Tecnológico y Digital" : "Tech & Digital Hub"}</h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "70+ centros de datos hiperescala — Microsoft/Google/Meta/Amazon" : "70+ hyperscale data centres — Microsoft/Google/Meta/Amazon"}</li>
                <li>• {es ? "EMEA HQ Apple/Google/Meta/LinkedIn/Twitter — hub europeo TIC" : "EMEA HQ Apple/Google/Meta/LinkedIn/Twitter — European ICT hub"}</li>
                <li>• {es ? "Cables submarinos AEConnect/HAVFRUE/Grace Hopper (transatlánticos)" : "AEConnect/HAVFRUE/Grace Hopper submarine cables (transatlantic)"}</li>
                <li>• {es ? "Farmacéutica/biopharma — Pfizer/J&J/AbbVie/Roche/Novartis" : "Pharma/biopharma — Pfizer/J&J/AbbVie/Roche/Novartis"}</li>
                <li>• {es ? "IDA Ireland — inversión extranjera directa; €20B+ exportaciones TIC" : "IDA Ireland — FDI attraction; €20B+ ICT exports"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">{es ? "Infraestructura de Transporte" : "Transport Infrastructure"}</h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Aeropuerto Dublín (DUB) ~35M pasajeros/año — 2ª isla" : "Dublin Airport (DUB) ~35M passengers/year — 2nd on island"}</li>
                <li>• {es ? "Puerto de Dublín — mayor puerto isla; Roll-on/Roll-off (RoRo)" : "Dublin Port — largest island port; Roll-on/Roll-off (RoRo)"}</li>
                <li>• {es ? "Puerto de Cork, Shannon/Foynes, Rosslare Europort" : "Cork Port, Shannon/Foynes, Rosslare Europort"}</li>
                <li>• {es ? "Frontera RU/UE — único punto terrestre isla Gran Bretaña/Irlanda" : "UK/EU border — only land point island Great Britain/Ireland"}</li>
                <li>• {es ? "Red viaria M50/N11/N7 — autopistas Dublin y corredores" : "M50/N11/N7 road network — Dublin motorways and corridors"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">{es ? "Marco Legal y Regulatorio" : "Legal & Regulatory Framework"}</h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Ley de Contratos Públicos (OGP) — Office of Government Procurement" : "Public Procurement Law (OGP) — Office of Government Procurement"}</li>
                <li>• {es ? "RGPD/GDPR + DPC — Comisión de Protección de Datos (lead GDPR UE)" : "GDPR + DPC — Data Protection Commission (EU GDPR lead regulator)"}</li>
                <li>• {es ? "Ley de Ciberseguridad 2024 / Transposición NIS2 — NCSC" : "Cybersecurity Act 2024 / NIS2 transposition — NCSC"}</li>
                <li>• {es ? "Banco Central de Irlanda (CBI) — Euro (EUR), zona euro 1999" : "Central Bank of Ireland (CBI) — Euro (EUR), Eurozone 1999"}</li>
                <li>• {es ? "UE/OCDE/Espacio Schengen (parcial)/Commonwealth — membresías" : "EU/OECD/Schengen (partial)/Commonwealth — memberships"}</li>
                <li>• {es ? "ComReg — regulador de comunicaciones y espectro de Irlanda" : "ComReg — Ireland communications and spectrum regulator"}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f1724]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Capacidades de KabatOne para Irlanda" : "KabatOne Capabilities for Ireland"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "La plataforma KabatOne ofrece una suite integrada adaptada a Irlanda: gestión del corredor fronterizo post-Brexit con Irlanda del Norte, protección de los centros de datos hiperescala y cables transatlánticos, respuesta de emergencias en el Atlántico Norte, y gestión de grandes eventos en el Estadio Aviva y el área metropolitana de Dublín."
              : "The KabatOne platform provides an integrated suite adapted to Ireland: post-Brexit border corridor management with Northern Ireland, hyperscale data centre and transatlantic cable protection, North Atlantic emergency response, and large event management at the Aviva Stadium and Dublin metropolitan area."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  title: es ? "K-Safety — Centro de Comando Nacional Unificado" : "K-Safety — Unified National Command Center",
                  desc: es
                    ? "Panel unificado para las 6 regiones de An Garda Síochána, NAS y Brigadas de Bomberos con visualización de incidentes en tiempo real, gestión de eventos en el Estadio Aviva y Croke Park, y coordinación transfronteriza con el PSNI."
                    : "Unified dashboard for An Garda Síochána's 6 regions, NAS, and Fire Brigades with real-time incident visualization, event management at Aviva Stadium and Croke Park, and cross-border coordination with PSNI.",
                },
                {
                  title: es ? "K-Dispatch — CAD integrado con 999/112" : "K-Dispatch — 999/112-Integrated CAD",
                  desc: es
                    ? "Despacho coordinado integrado con el sistema 999/112 para Garda, Ambulancias y Bomberos en las 28 divisiones y 26 condados de Irlanda, con soporte para incidentes en zonas fronterizas con Irlanda del Norte."
                    : "Coordinated dispatch integrated with the 999/112 system for Garda, Ambulance, and Fire across Ireland's 28 divisions and 26 counties, with support for incidents in border zones with Northern Ireland.",
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
                  title: es ? "K-Video — Aeropuerto Dublín y Centros de Datos" : "K-Video — Dublin Airport & Data Centres",
                  desc: es
                    ? "Gestión de vídeo para el Aeropuerto de Dublín, Puerto de Dublín, centros de datos hiperescala de Microsoft/Google/Meta y sitios de infraestructura crítica de cables submarinos, con analítica de IA conforme a GDPR y DPC."
                    : "Video management for Dublin Airport, Dublin Port, Microsoft/Google/Meta hyperscale data centres, and critical submarine cable infrastructure sites, with AI analytics compliant with GDPR and DPC.",
                },
                {
                  title: es ? "K-Connect — Guardia Costera e IRCG" : "K-Connect — Coast Guard and IRCG",
                  desc: es
                    ? "Fusión AIS/radar para el Servicio Naval de Irlanda en la ZEE de 880,000 km², coordinación con el IRCG para operaciones SAR en el Atlántico Norte, y alertas de gestión de tráfico marítimo en el Puerto de Dublín y Rosslare Europort."
                    : "AIS/radar fusion for the Irish Naval Service across the 880,000 km² EEZ, coordination with IRCG for North Atlantic SAR operations, and maritime traffic management alerts for Dublin Port and Rosslare Europort.",
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
        h2={es ? "¿Listo para modernizar la seguridad pública en Irlanda?" : "Ready to modernize public safety in Ireland?"}
        subtitle={es
          ? "Hable con nuestro equipo sobre cómo KabatOne puede apoyar a An Garda Síochána, la Guardia Costera y las Brigadas de Bomberos con una plataforma compatible con GDPR, DPC y NIS2."
          : "Speak with our team about how KabatOne can support An Garda Síochána, the Irish Coast Guard, and Fire Brigades with a platform compatible with GDPR, DPC, and NIS2."}
      />
      <Footer es={es} />
    </>
  );
}
