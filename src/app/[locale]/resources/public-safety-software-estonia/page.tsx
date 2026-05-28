import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareEstonia", locale);
}

export default async function PublicSafetySoftwareEstoniaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Estonia | KabatOne"
    : "Public Safety Software for Estonia | KabatOne";

  const description = es
    ? "KabatOne apoya las fuerzas de seguridad de Estonia — Policía y Guardia de Fronteras, KAPO, Rescate — con vigilancia en tiempo real, despacho y gestión de incidentes. Solución compatible con los altos estándares de ciberseguridad de la nación digital líder de Europa."
    : "KabatOne supports Estonia security forces — Police and Border Guard Board, KAPO, Rescue Board — with real-time surveillance, dispatch, and incident management. Solution compatible with the cybersecurity standards of Europe's leading digital nation.";

  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-estonia"
    : "https://kabatone.com/resources/public-safety-software-estonia";

  const faqs = [
    {
      question: es
        ? "¿Qué desafíos de seguridad enfrenta Estonia?"
        : "What security challenges does Estonia face?",
      answer: es
        ? "Estonia enfrenta una combinación única de amenazas: como la nación más digitalizada del mundo (e-Residency, i-Voting, X-Road), es un objetivo prioritario de ciberataques (el ataque cibernético ruso de 2007 fue el primero de su tipo en el mundo). La proximidad a Rusia (~150 km de San Petersburgo) y la frontera compartida generan presión de inteligencia constante. El corredor de Suwałki y la defensa del flanco oriental de la OTAN son prioridades. También gestionan flujos migratorios en la frontera este."
        : "Estonia faces a unique combination of threats: as the world's most digitized nation (e-Residency, i-Voting, X-Road), it is a priority target for cyberattacks (the 2007 Russian cyberattack was the world's first of its kind). Proximity to Russia (~150 km from St. Petersburg) and the shared border create constant intelligence pressure. The Suwalki Corridor and NATO Eastern Flank defense are priorities. They also manage migration flows on the eastern border.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne a las fuerzas de seguridad de Estonia?"
        : "How does KabatOne support Estonia security forces?",
      answer: es
        ? "KabatOne proporciona conciencia situacional unificada para la Junta de Policía y Guardia de Fronteras (PPA), la Junta de Rescate (PäästAmet), la Policía de Seguridad Interior (KAPO) y la Liga de Defensa (Kaitseliit). La plataforma se integra con los estándares de interoperabilidad estatal de Estonia (X-Road/RIHA), el sistema de llamadas de emergencia 112 (Häirekeskus), y los requerimientos de datos soberanos de ISKE (estándar nacional de seguridad de la información)."
        : "KabatOne provides unified situational awareness for the Police and Border Guard Board (PPA), Rescue Board (PäästAmet), Internal Security Service (KAPO), and Defence League (Kaitseliit). The platform integrates with Estonia's state interoperability standards (X-Road/RIHA), the 112 emergency call system (Häirekeskus), and ISKE (national information security standard) sovereign data requirements.",
    },
    {
      question: es
        ? "¿Qué infraestructura crítica requiere protección en Estonia?"
        : "What critical infrastructure requires protection in Estonia?",
      answer: es
        ? "La infraestructura crítica incluye el Centro de Datos del Gobierno en Tallinn (e-Estonia backbone), el Puerto de Tallinn (2ª terminal de pasajeros más grande del Báltico), el Aeropuerto Internacional Lennart Meri Tallinn (TLL), las instalaciones de la OTAN (Centro de Excelencia en Ciberdefensa Cooperativa de la OTAN en Tallinn), la red Elering de transmisión eléctrica (en proceso de desconexión de la red rusa BRELL hacia el sistema europeo ENTSO-E en 2025), y los cables submarinos del Báltico."
        : "Critical infrastructure includes the Government Data Centre in Tallinn (e-Estonia backbone), Port of Tallinn (2nd largest Baltic passenger terminal), Lennart Meri Tallinn International Airport (TLL), NATO facilities (NATO Cooperative Cyber Defence Centre of Excellence in Tallinn), Elering electricity transmission network (transitioning from Russian BRELL grid to European ENTSO-E system in 2025), and Baltic submarine cables.",
    },
    {
      question: es
        ? "¿Cómo cumple KabatOne con las regulaciones de protección de datos de Estonia/UE?"
        : "How does KabatOne comply with Estonia/EU data protection regulations?",
      answer: es
        ? "KabatOne cumple con el RGPD/GDPR europeo y las directrices de la Autoridad de Protección de Datos de Estonia (AKI). La plataforma implementa los principios de soberanía de datos de X-Road, cumple con el estándar nacional de seguridad de la información ISKE (3 niveles H/M/L), soporta la Directiva NIS2 de la UE para infraestructura crítica, y se alinea con los requerimientos de la Ley de Ciberseguridad de Estonia. Los datos pueden alojarse en el Centro Nacional de Datos o en la nube de la UE."
        : "KabatOne complies with EU GDPR and Estonia Data Protection Inspectorate (AKI) guidelines. The platform implements X-Road data sovereignty principles, meets the ISKE national information security standard (3 levels H/M/L), supports the EU NIS2 Directive for critical infrastructure, and aligns with Estonia's Cybersecurity Act requirements. Data can be hosted at the National Data Centre or EU cloud.",
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
      name: es ? "Software de Seguridad Pública para Estonia" : "Public Safety Software for Estonia",
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
              {es ? "Guía de Mercado — Estonia" : "Market Guide — Estonia"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-barlow)" }}>
            {es
              ? "Software de Seguridad Pública para Estonia"
              : "Public Safety Software for Estonia"}
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            {es
              ? "Conciencia situacional unificada para la PPA, Junta de Rescate y KAPO — compatible con X-Road e ISKE, integrado con el sistema 112 de Häirekeskus, y adaptado a las exigencias de ciberseguridad de la nación digital líder de Europa."
              : "Unified situational awareness for the PPA, Rescue Board, and KAPO — compatible with X-Road and ISKE, integrated with the Häirekeskus 112 system, and adapted to the cybersecurity demands of Europe's leading digital nation."}
          </p>
        </div>
      </section>

      {/* Security Forces */}
      <section className="py-20 px-6 bg-[#0f1724]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Fuerzas de Seguridad de Estonia" : "Estonia Security Forces"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "Estonia mantiene un sistema de seguridad integrado con la Junta de Policía y Guardia de Fronteras (PPA) como eje central. El país es miembro fundador del Centro de Excelencia en Ciberdefensa Cooperativa de la OTAN (CCDCOE) en Tallinn y lidera la ciberdefensa aliada global. La Liga de Defensa (Kaitseliit) con ~25,000 reservistas complementa las capacidades."
              : "Estonia maintains an integrated security system with the Police and Border Guard Board (PPA) as the central axis. The country is a founding member of the NATO Cooperative Cyber Defence Centre of Excellence (CCDCOE) in Tallinn and leads global allied cyber defence. The Defence League (Kaitseliit) with ~25,000 reservists complements capabilities."}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {es ? "PPA, Rescate y KAPO" : "PPA, Rescue Board, and KAPO"}
              </h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "Junta de Policía y Guardia de Fronteras (PPA) — civil y fronteras" : "Police and Border Guard Board (PPA) — civil and border security"}</li>
                <li>• {es ? "Junta de Rescate (PäästAmet) — bomberos, RES, gestión desastres" : "Rescue Board (PäästAmet) — fire, EMS, disaster management"}</li>
                <li>• {es ? "KAPO — Policía de Seguridad Interior (contrainteligencia/CT)" : "KAPO — Internal Security Service (counterintelligence/CT)"}</li>
                <li>• {es ? "Häirekeskus — Centro de Alarma, operador único 112 nacional" : "Häirekeskus — Alarm Centre, national 112 operator"}</li>
                <li>• {es ? "Liga de Defensa (Kaitseliit) ~25,000 reservistas voluntarios" : "Defence League (Kaitseliit) ~25,000 volunteer reservists"}</li>
                <li>• {es ? "Fuerzas de Defensa (Kaitsevägi) — servicio militar obligatorio" : "Defence Forces (Kaitsevägi) — mandatory military service"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {es ? "Ciberdefensa y Cooperación OTAN/UE" : "Cyber Defence and NATO/EU Cooperation"}
              </h3>
              <ul className="space-y-2 text-blue-100/70 text-sm">
                <li>• {es ? "NATO CCDCOE Tallinn — Centro de Excelencia Ciberdefensa Aliada" : "NATO CCDCOE Tallinn — Allied Cyber Defence Centre of Excellence"}</li>
                <li>• {es ? "Autoridad del Sistema de Información del Estado (RIA) — ciberseguridad" : "State Information System Authority (RIA) — cybersecurity"}</li>
                <li>• {es ? "CERT-EE — equipo de respuesta a emergencias informáticas" : "CERT-EE — computer emergency response team"}</li>
                <li>• {es ? "Frontex — participación activa en vigilancia fronteriza UE" : "Frontex — active participation in EU border surveillance"}</li>
                <li>• {es ? "eFP NATO — presencia mejorada en flanco oriental (batallon OTAN)" : "NATO eFP — Enhanced Forward Presence (NATO battalion)"}</li>
                <li>• {es ? "ENISA/EUROPOL — cooperación en cibercrimen e inteligencia" : "ENISA/EUROPOL — cybercrime and intelligence cooperation"}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Economy, Digital Infrastructure, Legal */}
      <section className="py-20 px-6" style={{ background: "#111c2e" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10" style={{ fontFamily: "var(--font-barlow)" }}>
            {es ? "Infraestructura Digital, Economía y Marco Legal" : "Digital Infrastructure, Economy & Legal Framework"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">
                {es ? "Nación Digital y e-Governance" : "Digital Nation & e-Governance"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "e-Residency — 100,000+ e-residentes globales, 22,000+ empresas" : "e-Residency — 100,000+ global e-residents, 22,000+ companies"}</li>
                <li>• {es ? "X-Road — plataforma de interoperabilidad estatal, modelo mundial" : "X-Road — state interoperability platform, global model"}</li>
                <li>• {es ? "i-Voting — voto electrónico vinculante desde 2005" : "i-Voting — binding digital voting since 2005"}</li>
                <li>• {es ? "e-Tax, e-Health, e-Court — 99% servicios públicos online" : "e-Tax, e-Health, e-Court — 99% public services online"}</li>
                <li>• {es ? "Sector TIC ~7% PIB; unicornios: Skype, TransferWise/Wise, Bolt" : "ICT sector ~7% GDP; unicorns: Skype, Wise, Bolt, Pipedrive"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">
                {es ? "Infraestructura Crítica" : "Critical Infrastructure"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Puerto de Tallinn — 2ª terminal pasajeros más grande del Báltico" : "Port of Tallinn — 2nd largest Baltic passenger terminal"}</li>
                <li>• {es ? "Aeropuerto TLL Lennart Meri — hub Báltico; vuelos NATO" : "Lennart Meri Airport (TLL) — Baltic hub; NATO flights"}</li>
                <li>• {es ? "Rail Baltica — línea ferroviaria UE Tallinn–Varsovia (2030)" : "Rail Baltica — EU Tallinn–Warsaw railway (2030)"}</li>
                <li>• {es ? "Elering — red ENTSO-E desde 2025 (desconexión BRELL rusa)" : "Elering — ENTSO-E grid from 2025 (BRELL Russian disconnection)"}</li>
                <li>• {es ? "Cables submarinos Baltic Connector/EstLink — interconexiones" : "Baltic Connector/EstLink submarine cables — interconnections"}</li>
                <li>• {es ? "Gasoducto Baltic Connector (Finlandia) — dañado oct. 2023" : "Baltic Connector pipeline (Finland) — damaged Oct. 2023"}</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-cyan-400 font-semibold mb-3">
                {es ? "Marco Legal y Regulatorio" : "Legal & Regulatory Framework"}
              </h3>
              <ul className="space-y-1 text-blue-100/70 text-sm">
                <li>• {es ? "Ley de Contratos Públicos (RiHS 2017) — Registro de Contratos Públicos" : "Public Procurement Act (RiHS 2017) — Public Procurement Register"}</li>
                <li>• {es ? "ISKE — estándar seguridad información estatal (3 niveles H/M/L)" : "ISKE — state information security standard (3 levels H/M/L)"}</li>
                <li>• {es ? "RGPD/GDPR + AKI — Inspección de Protección de Datos" : "GDPR + AKI — Data Protection Inspectorate"}</li>
                <li>• {es ? "Ley de Ciberseguridad 2018 / Directiva NIS2 UE transposición" : "Cybersecurity Act 2018 / EU NIS2 Directive transposition"}</li>
                <li>• {es ? "Banco de Estonia (Eesti Pank) — Euro (EUR), zona euro desde 2011" : "Bank of Estonia (Eesti Pank) — Euro (EUR), Eurozone since 2011"}</li>
                <li>• {es ? "OTAN/UE/OCDE/Espacio Schengen — membresías clave" : "NATO/EU/OECD/Schengen Area — key memberships"}</li>
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
              ? "Capacidades de KabatOne para Estonia"
              : "KabatOne Capabilities for Estonia"}
          </h2>
          <p className="text-blue-100/70 mb-10">
            {es
              ? "La plataforma KabatOne ofrece una suite integrada adaptada a los estándares tecnológicos líderes de Estonia: integración con X-Road para interoperabilidad estatal, cumplimiento ISKE, soporte del sistema 112 de Häirekeskus, y capacidades de ciberresiliencia para la nación digital más avanzada de Europa."
              : "The KabatOne platform provides an integrated suite adapted to Estonia's leading technology standards: X-Road integration for state interoperability, ISKE compliance, Häirekeskus 112 system support, and cyber-resilience capabilities for Europe's most advanced digital nation."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  title: es ? "K-Safety — Centro de Comando Digital" : "K-Safety — Digital Command Center",
                  desc: es
                    ? "Panel unificado integrado con X-Road para interoperabilidad con PPA, PäästAmet y KAPO, con visualización de incidentes en tiempo real, gestión de la Liga de Defensa Kaitseliit y alertas de ciberincidentes de CERT-EE."
                    : "Unified dashboard integrated with X-Road for PPA, PäästAmet, and KAPO interoperability, with real-time incident visualization, Kaitseliit Defence League management, and CERT-EE cyber incident alerts.",
                },
                {
                  title: es ? "K-Dispatch — CAD integrado con 112/Häirekeskus" : "K-Dispatch — 112/Häirekeskus-Integrated CAD",
                  desc: es
                    ? "Despacho coordinado integrado con el sistema 112 de Häirekeskus para Policía, Rescate y Ambulancia, con soporte para los 4 prefecturas policiales (Norte, Sur, Este, Oeste) y la gestión de emergencias en islas (Saaremaa/Hiiumaa)."
                    : "Coordinated dispatch integrated with the Häirekeskus 112 system for Police, Rescue, and Ambulance, with support for the 4 police prefectures (North, South, East, West) and island emergency management (Saaremaa/Hiiumaa).",
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
                    ? "Gestión de vídeo para el Puerto de Tallinn, Aeropuerto TLL, puestos fronterizos con Rusia (Narva/Ivangorod, Luhamaa) y la futura valla electrónica inteligente fronteriza, con analítica de IA compatible con los estándares ISKE."
                    : "Video management for Port of Tallinn, TLL Airport, border crossings with Russia (Narva/Ivangorod, Luhamaa), and the future smart electronic border fence, with AI analytics compliant with ISKE standards.",
                },
                {
                  title: es ? "K-Connect — Integración con Ecosistema e-Estonia" : "K-Connect — e-Estonia Ecosystem Integration",
                  desc: es
                    ? "Conexión via X-Road con los registros estatales de Estonia (Registro de Población, Vehículos, Licencias), integración con la identidad digital eID/mID para autenticación de agentes, y compatibilidad con la blockchain KSI de Guardtime para integridad de evidencias."
                    : "X-Road connection to Estonia's state registers (Population, Vehicles, Licences), eID/mID digital identity integration for officer authentication, and Guardtime KSI blockchain compatibility for evidence integrity.",
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
            ? "¿Listo para modernizar la seguridad pública en Estonia?"
            : "Ready to modernize public safety in Estonia?"
        }
        subtitle={
          es
            ? "Hable con nuestro equipo sobre cómo KabatOne puede apoyar a la PPA, la Junta de Rescate y el KAPO con una plataforma compatible con X-Road, ISKE y los estándares de ciberseguridad de Estonia."
            : "Speak with our team about how KabatOne can support the PPA, Rescue Board, and KAPO with a platform compatible with X-Road, ISKE, and Estonia's cybersecurity standards."
        }
      />
      <Footer es={es} />
    </>
  );
}
