import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareCroatia", locale);
}

export default async function PublicSafetySoftwareCroatiaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Croacia | KabatOne"
    : "Public Safety Software for Croatia | KabatOne";

  const description = es
    ? "KabatOne apoya las fuerzas de seguridad de Croacia — Policía Nacional, Guardia de Fronteras, DUZS — con vigilancia en tiempo real, despacho y gestión de incidentes. Compatible con GDPR, estándares OTAN/UE y el sistema 112 croata."
    : "KabatOne supports Croatia security forces — National Police, Border Guard, DUZS civil protection — with real-time surveillance, dispatch, and incident management. Compatible with GDPR, NATO/EU standards, and the Croatian 112 system.";

  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-croatia"
    : "https://kabatone.com/resources/public-safety-software-croatia";

  const faqs = [
    {
      question: es ? "¿Qué desafíos de seguridad enfrenta Croacia?" : "What security challenges does Croatia face?",
      answer: es
        ? "Croacia gestiona la frontera exterior de Schengen más larga de los Balcanes con Bosnia Herzegovina y Serbia (1,009 km), siendo el principal punto de entrada de la ruta migratoria balcánica hacia la UE. La costa del Adriático (~6,000 km con 1,246 islas) requiere vigilancia marítima intensa. La inclusión en la zona Schengen en 2023 aumentó la presión. La central nuclear compartida de Krško con Eslovenia, los riesgos sísmicos en Dalmacia, y la gestión turística (~20M visitantes/año) son también prioridades."
        : "Croatia manages the longest Schengen external border in the Balkans with Bosnia-Herzegovina and Serbia (1,009 km), being the main entry point of the Balkan migration route into the EU. The Adriatic coast (~6,000 km with 1,246 islands) requires intensive maritime surveillance. Joining Schengen in 2023 increased pressure. The jointly operated Krško Nuclear Plant with Slovenia, seismic risks in Dalmatia, and tourism management (~20M visitors/year) are also priorities.",
    },
    {
      question: es ? "¿Cómo apoya KabatOne a las fuerzas de seguridad de Croacia?" : "How does KabatOne support Croatia security forces?",
      answer: es
        ? "KabatOne proporciona conciencia situacional unificada para la Policía Nacional de Croacia (MUP ~20,000 efectivos), la Guardia de Fronteras (GR), la Dirección Nacional de Protección Civil y Bomberos (DUZS), la Guardia Costera de Croacia (OBP), y el Servicio de Seguridad e Inteligencia (SOA). La plataforma se integra con el sistema 112 croata, cumple con GDPR y la legislación de protección de datos de Croacia, y soporta la coordinación con Frontex para la gestión de la ruta balcánica."
        : "KabatOne provides unified situational awareness for Croatia National Police (MUP ~20,000 officers), Border Guard (GR), National Civil Protection and Fire Protection Directorate (DUZS), Croatian Coast Guard (OBP), and Security and Intelligence Agency (SOA). The platform integrates with Croatia's 112 system, complies with GDPR and Croatian data protection legislation, and supports Frontex coordination for Balkan route management.",
    },
    {
      question: es ? "¿Qué infraestructura crítica requiere protección en Croacia?" : "What critical infrastructure requires protection in Croatia?",
      answer: es
        ? "La infraestructura crítica incluye el Puerto de Rijeka (mayor puerto croata, hub de contenedores para Europa Central), el Aeropuerto Internacional Franjo Tuđman de Zagreb (ZAG), la Central Nuclear de Krško (compartida con Eslovenia, 50% energía croata), el corredor de gas LNG terminal Krk (independencia del gas ruso), los gasoductos Janaf/INA, los puertos turísticos del Adriático (Split, Dubrovnik, Zadar), y la Base Naval OTAN en Split."
        : "Critical infrastructure includes the Port of Rijeka (Croatia's largest port, container hub for Central Europe), Zagreb Franjo Tuđman International Airport (ZAG), Krško Nuclear Power Plant (jointly operated with Slovenia, 50% Croatian energy), Krk LNG terminal gas corridor (Russian gas independence), Janaf/INA pipelines, Adriatic tourist ports (Split, Dubrovnik, Zadar), and NATO Naval Base in Split.",
    },
    {
      question: es ? "¿Cómo gestiona KabatOne la vigilancia costera del Adriático?" : "How does KabatOne manage Adriatic coastal surveillance?",
      answer: es
        ? "KabatOne integra el seguimiento AIS/radar de la Guardia Costera croata en los ~6,000 km de costa y las 1,246 islas, gestiona el tráfico de cruceros de lujo (Dubrovnik ~1M pasajeros/año de crucero), y coordina con la Marina de la OTAN en el Adriático. La plataforma provee alertas de migración irregular por mar (ruta Bosnia→islas croatas), gestión de emergencias marítimas y búsqueda y rescate con el MRCC Split."
        : "KabatOne integrates AIS/radar tracking from the Croatian Coast Guard across ~6,000 km of coastline and 1,246 islands, manages luxury cruise traffic (Dubrovnik ~1M cruise passengers/year), and coordinates with NATO Navy in the Adriatic. The platform provides irregular sea migration alerts (Bosnia→Croatian islands route), maritime emergency management, and search and rescue coordination with MRCC Split.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://kabatone.com" },
    { name: "Resources", url: "https://kabatone.com/resources" },
    { name: es ? "Software de Seguridad Pública para Croacia" : "Public Safety Software for Croatia", url: canonical },
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
            <span className="text-blue-400 text-sm font-medium">{es ? "Guía de Mercado — Croacia" : "Market Guide — Croatia"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Software de Seguridad Pública para Croacia" : "Public Safety Software for Croatia"}
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            {es
              ? "Conciencia situacional unificada para la Policía Nacional, Guardia Costera y DUZS — gestión de la frontera Schengen con Bosnia/Serbia, vigilancia costera del Adriático con 1,246 islas, y protección del turismo de 20 millones de visitantes."
              : "Unified situational awareness for the National Police, Coast Guard, and DUZS — Schengen border management with Bosnia/Serbia, Adriatic coastal surveillance across 1,246 islands, and protection of 20 million tourists."}
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f1724]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Fuerzas de Seguridad de Croacia" : "Croatia Security Forces"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "La Policía Nacional de Croacia (MUP) con ~20,000 efectivos es el principal cuerpo de seguridad civil. La Guardia Costera (OBP) y la DUZS (protección civil y bomberos) complementan las capacidades. Croacia es miembro de la OTAN desde 2009 y de la UE/Schengen desde 2013/2023."
              : "Croatia National Police (MUP) with ~20,000 officers is the main civilian security body. The Coast Guard (OBP) and DUZS (civil protection and fire) complement capabilities. Croatia has been a NATO member since 2009 and EU/Schengen since 2013/2023."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{es ? "Policía, Bomberos y Protección Civil" : "Police, Fire, and Civil Protection"}</h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "Policía Nacional (MUP) ~20,000 efectivos — 20 policías de condado" : "National Police (MUP) ~20,000 officers — 20 county police forces"}</li>
                <li>• {es ? "Guardia de Fronteras (GR) — frontera BiH/Serbia/Eslovenia" : "Border Guard (GR) — BiH/Serbia/Slovenia border"}</li>
                <li>• {es ? "DUZS — Dirección Nacional Protección Civil y Bomberos" : "DUZS — National Civil Protection and Fire Protection Directorate"}</li>
                <li>• {es ? "SOA — Agencia de Seguridad e Inteligencia de Croacia" : "SOA — Croatian Security and Intelligence Agency"}</li>
                <li>• {es ? "UVNS — Consejo Nacional de Seguridad (coordinación)" : "UVNS — National Security Council (coordination)"}</li>
                <li>• {es ? "Fuerzas Armadas (OSRH) ~15,000 — misiones OTAN" : "Armed Forces (OSRH) ~15,000 — NATO missions"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{es ? "Guardia Costera y OTAN" : "Coast Guard and NATO"}</h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "Guardia Costera OBP — ~6,000 km costa, 1,246 islas" : "Coast Guard OBP — ~6,000 km coastline, 1,246 islands"}</li>
                <li>• {es ? "MRCC Split — Centro de Coordinación Rescate Marítimo Adriático" : "MRCC Split — Adriatic Maritime Rescue Coordination Centre"}</li>
                <li>• {es ? "Base Naval OTAN Split — plataforma logística Adriático" : "NATO Naval Base Split — Adriatic logistics platform"}</li>
                <li>• {es ? "Frontex NCC Croacia — ruta migratoria balcánica/Adriático" : "Frontex NCC Croatia — Balkan/Adriatic migration route"}</li>
                <li>• {es ? "EUROSUR — sistema vigilancia fronteras exteriores UE" : "EUROSUR — EU external border surveillance system"}</li>
                <li>• {es ? "EUROPOL/INTERPOL — crimen organizado balcánico" : "EUROPOL/INTERPOL — Balkan organized crime"}</li>
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
              <h3 className="text-cyan-400 font-semibold mb-3">{es ? "Turismo y Puertos Adriáticos" : "Tourism & Adriatic Ports"}</h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Turismo ~20M visitantes/año — ~20% PIB; Dubrovnik/Split/Hvar" : "Tourism ~20M visitors/year — ~20% GDP; Dubrovnik/Split/Hvar"}</li>
                <li>• {es ? "Puerto de Rijeka — mayor puerto croata, hub Europa Central" : "Port of Rijeka — Croatia largest port, Central Europe hub"}</li>
                <li>• {es ? "Terminal de Cruceros Dubrovnik ~1M pasajeros/año" : "Dubrovnik Cruise Terminal ~1M passengers/year"}</li>
                <li>• {es ? "Terminal GNL Krk (Plinarica) — independencia gas ruso" : "Krk LNG Terminal (Plinarica) — Russian gas independence"}</li>
                <li>• {es ? "Corredor de petróleo Janaf — ~9M t/año Budapest/Bratislava/Viena" : "Janaf oil pipeline — ~9M t/year Budapest/Bratislava/Vienna"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">{es ? "Infraestructura Crítica" : "Critical Infrastructure"}</h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Aeropuerto Zagreb Franjo Tuđman (ZAG) ~3.5M pasajeros/año" : "Zagreb Franjo Tuđman Airport (ZAG) ~3.5M passengers/year"}</li>
                <li>• {es ? "NEK Krško — central nuclear compartida con Eslovenia 50% energía" : "NEK Krsko — shared nuclear plant Slovenia 50% Croatian energy"}</li>
                <li>• {es ? "HEP — operador eléctrico; hidro Plitvice/Krka (UNESCO)" : "HEP — electricity operator; hydro Plitvice/Krka (UNESCO)"}</li>
                <li>• {es ? "Autopistas HAC — corredor Paneuropeo X Zagreb-Split-Dubrovnik" : "HAC motorways — Corridor X Zagreb-Split-Dubrovnik"}</li>
                <li>• {es ? "Rail Baltica conexión — proyectada integración red TEN-T" : "Rail Baltica connection — planned TEN-T network integration"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">{es ? "Marco Legal y Regulatorio" : "Legal & Regulatory Framework"}</h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Ley de Contratos Públicos (ZJN 2017) — DKOM supervisión" : "Public Procurement Act (ZJN 2017) — DKOM supervision"}</li>
                <li>• {es ? "RGPD/GDPR + AZOP — Agencia de Protección de Datos de Croacia" : "GDPR + AZOP — Croatian Personal Data Protection Agency"}</li>
                <li>• {es ? "Ley de Ciberseguridad (SOA/MVEP) / NIS2 transposición" : "Cybersecurity Act (SOA/MVEP) / NIS2 transposition"}</li>
                <li>• {es ? "Banco Nacional de Croacia (HNB) — Euro (EUR), zona euro 2023" : "Croatian National Bank (HNB) — Euro (EUR), Eurozone 2023"}</li>
                <li>• {es ? "OTAN/UE/OCDE/Espacio Schengen (2023) — membresías clave" : "NATO/EU/OECD/Schengen Area (2023) — key memberships"}</li>
                <li>• {es ? "HAKOM — regulador comunicaciones electrónicas y TIC" : "HAKOM — Electronic Communications and ICT Regulator"}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f1724]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Capacidades de KabatOne para Croacia" : "KabatOne Capabilities for Croatia"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "La plataforma KabatOne ofrece una suite integrada adaptada a Croacia: gestión de la frontera Schengen más larga de los Balcanes, vigilancia de la costa adriática con 1,246 islas, protección del turismo masivo en Dubrovnik/Split/Hvar, y coordinación con la OTAN en la Base Naval de Split."
              : "The KabatOne platform provides an integrated suite adapted to Croatia: management of the Balkans' longest Schengen border, surveillance of the Adriatic coast with 1,246 islands, mass tourism protection in Dubrovnik/Split/Hvar, and coordination with NATO at Split Naval Base."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  title: es ? "K-Safety — Centro de Comando Nacional y Turístico" : "K-Safety — National and Tourism Command Center",
                  desc: es
                    ? "Panel unificado para MUP, Guardia Costera y DUZS con visualización de incidentes en tiempo real, gestión de aglomeraciones turísticas en Dubrovnik/Split, y alertas de la frontera con Bosnia Herzegovina y Serbia."
                    : "Unified dashboard for MUP, Coast Guard, and DUZS with real-time incident visualization, tourist crowd management in Dubrovnik/Split, and Bosnia-Herzegovina and Serbia border alerts.",
                },
                {
                  title: es ? "K-Dispatch — CAD integrado con 112" : "K-Dispatch — 112-Integrated CAD",
                  desc: es
                    ? "Despacho coordinado integrado con el sistema 112 croata para Policía, Bomberos y Ambulancias en los 20 condados, con protocolos de respuesta para incidentes turísticos en la costa adriática e islas."
                    : "Coordinated dispatch integrated with Croatia's 112 system for Police, Fire, and Ambulance across 20 counties, with response protocols for tourist incidents on the Adriatic coast and islands.",
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
                  title: es ? "K-Video — Dubrovnik, Rijeka y Pasos Fronterizos" : "K-Video — Dubrovnik, Rijeka & Border Crossings",
                  desc: es
                    ? "Gestión de vídeo para el Casco Antiguo de Dubrovnik (UNESCO, 1M+ cruceristas), Puerto de Rijeka, Aeropuerto ZAG, y los pasos fronterizos con Bosnia y Serbia, con analítica de IA compatible con GDPR y NIS2."
                    : "Video management for Dubrovnik Old Town (UNESCO, 1M+ cruisers), Port of Rijeka, ZAG Airport, and Bosnia and Serbia border crossings, with AI analytics compatible with GDPR and NIS2.",
                },
                {
                  title: es ? "K-Connect — Guardia Costera y EUROSUR" : "K-Connect — Coast Guard and EUROSUR",
                  desc: es
                    ? "Fusión AIS/radar para la Guardia Costera en 6,000 km de costa y 1,246 islas, integración EUROSUR/Frontex para migración irregular, y MRCC Split para SAR en el Adriático. Alertas de tráfico marítimo para el Terminal de Cruceros de Dubrovnik."
                    : "AIS/radar fusion for Coast Guard across 6,000 km coastline and 1,246 islands, EUROSUR/Frontex integration for irregular migration, and MRCC Split for Adriatic SAR. Maritime traffic alerts for Dubrovnik Cruise Terminal.",
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
        h2={es ? "¿Listo para modernizar la seguridad pública en Croacia?" : "Ready to modernize public safety in Croatia?"}
        subtitle={es
          ? "Hable con nuestro equipo sobre cómo KabatOne puede apoyar al MUP, la Guardia Costera y la DUZS con una plataforma compatible con GDPR, NIS2 y los estándares de la OTAN."
          : "Speak with our team about how KabatOne can support MUP, the Coast Guard, and DUZS with a platform compatible with GDPR, NIS2, and NATO standards."}
      />
      <Footer es={es} />
    </>
  );
}
