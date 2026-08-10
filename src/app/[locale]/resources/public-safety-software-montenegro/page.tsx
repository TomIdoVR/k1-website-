import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareMontenegro", locale);
}

export default async function PublicSafetySoftwareMontenegro({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const schema = [
    articleSchema(
      es
        ? "Software de Seguridad Pública para Montenegro | Policía/ANB, Puerto Bar, Autopista Bar-Boljare y NATO – KabatOne"
        : "Public Safety Software for Montenegro | Police/ANB, Port of Bar, Bar-Boljare Highway & NATO – KabatOne",
      es
        ? "KabatOne ofrece plataforma de seguridad pública para la Policía montenegrina, ANB inteligencia y Guardia de Fronteras — gestión del Puerto de Bar y costa adriática 293 km, autopista Bar-Boljare financiada por China, candidatura UE y coordinación NATO/FRONTEX."
        : "KabatOne delivers public safety platform for Montenegrin Police, ANB intelligence, and Border Guard — Port of Bar and Adriatic coast 293 km management, Bar-Boljare highway funded by China, EU candidacy, and NATO/FRONTEX coordination.",
      es
        ? "https://kabatone.com/es/resources/public-safety-software-montenegro"
        : "https://kabatone.com/resources/public-safety-software-montenegro",
      "2026-05-19"
    ),
    breadcrumbSchema([
      {
        name: es ? "Inicio" : "Home",
        url: es ? "https://kabatone.com/es" : "https://kabatone.com/",
      },
      {
        name: es ? "Recursos" : "Resources",
        url: es
          ? "https://kabatone.com/es/resources"
          : "https://kabatone.com/resources",
      },
      {
        name: es
          ? "Software de Seguridad Pública para Montenegro"
          : "Public Safety Software for Montenegro",
        url: es
          ? "https://kabatone.com/es/resources/public-safety-software-montenegro"
          : "https://kabatone.com/resources/public-safety-software-montenegro",
      },
    ]),
    faqPageSchema([
      {
        question: es
          ? "¿Cuáles son las principales fuerzas de seguridad de Montenegro?"
          : "What are Montenegro's main security forces?",
        answer: es
          ? "La Policía de Montenegro ~5.000 agentes con 25 centros policiales, ANB (Agencia Nacional de Seguridad), Guardia de Fronteras y Armada montenegrina como miembro NATO desde 2017."
          : "Montenegro Police ~5,000 officers with 25 police centers, ANB (National Security Agency), Border Guard, and Montenegro Armed Forces as NATO member since 2017.",
      },
      {
        question: es
          ? "¿Qué importancia tiene la autopista Bar-Boljare?"
          : "What is the significance of the Bar-Boljare highway?",
        answer: es
          ? "La autopista Bar-Boljare es un proyecto de €944M financiado por el EXIM Bank de China — tramo inicial de 41 km Smokovac-Uvač inaugurado en 2022. Conectará el Puerto de Bar con Serbia y el interior balcánico."
          : "The Bar-Boljare highway is a €944M project financed by China EXIM Bank — initial 41 km Smokovac-Uvač section opened in 2022. It will connect the Port of Bar to Serbia and the Balkan interior.",
      },
      {
        question: es
          ? "¿Cuál es el progreso de Montenegro en la adhesión a la UE?"
          : "What is Montenegro's EU accession progress?",
        answer: es
          ? "Montenegro es el país más avanzado de los Balcanes Occidentales en el proceso de adhesión UE, con todas las negociaciones de capítulos abiertas desde 2012. Sin embargo, el proceso se ha ralentizado por preocupaciones sobre estado de derecho."
          : "Montenegro is the most advanced Western Balkan country in the EU accession process, with all chapter negotiations opened since 2012. However, the process has slowed due to rule of law concerns.",
      },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-amber-950 to-slate-800 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-400/30 rounded-full px-4 py-1.5 text-sm text-amber-300 mb-6">
            🇲🇪 {es ? "Europa — Montenegro" : "Europe — Montenegro"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {es
              ? "Software de Seguridad Pública para Montenegro"
              : "Public Safety Software for Montenegro"}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            {es
              ? "Plataforma unificada para la Policía, ANB y Guardia de Fronteras — Puerto Bar, costa adriática 293 km, autopista Bar-Boljare y candidatura UE más avanzada de los Balcanes."
              : "Unified platform for Police, ANB, and Border Guard — Port of Bar, Adriatic coast 293 km, Bar-Boljare highway, and the most advanced EU candidacy in the Western Balkans."}
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              es ? "Policía ~5K agentes" : "Police ~5K officers",
              es ? "Puerto Bar Adriático" : "Port of Bar Adriatic",
              es ? "NATO desde 2017" : "NATO since 2017",
              es ? "Candidato UE líder" : "EU Candidate leader",
              es ? "Bar-Boljare EXIM China" : "Bar-Boljare EXIM China",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-amber-700/30 border border-amber-500/30 rounded-full px-3 py-1 text-amber-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Security Forces */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            {es
              ? "Fuerzas de Seguridad y Marco Institucional"
              : "Security Forces & Institutional Framework"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {es ? "Policía e Inteligencia" : "Police & Intelligence"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Policía Montenegro" : "Montenegro Police"}</strong>{" "}
                  {es
                    ? "~5.000 agentes, 25 centros policiales, División Crimen Organizado"
                    : "~5,000 officers, 25 police centers, Organized Crime Division"}
                </li>
                <li>
                  <strong>ANB</strong>{" "}
                  {es
                    ? "— Agencia Nacional de Seguridad, contraterrorismo e inteligencia"
                    : "— National Security Agency, counter-terrorism and intelligence"}
                </li>
                <li>
                  <strong>AKB</strong>{" "}
                  {es
                    ? "— Agencia Contrainteligencia y Seguridad, operaciones encubiertas"
                    : "— Counter-Intelligence and Security Agency, covert operations"}
                </li>
                <li>
                  <strong>SAJ</strong>{" "}
                  {es
                    ? "— Unidad Antiterrorista Especial, rehenes y crisis"
                    : "— Special Anti-Terrorist Unit, hostage and crisis"}
                </li>
                <li>
                  <strong>{es ? "Guardia de Fronteras" : "Border Police"}</strong>{" "}
                  {es
                    ? "— 5 países limítrofes, costa adriática 293 km"
                    : "— 5 bordering countries, Adriatic coast 293 km"}
                </li>
                <li>
                  <strong>{es ? "Guardia Costera" : "Coast Guard"}</strong>{" "}
                  {es
                    ? "— patrullas BAR y Kotor bahías, bahía de Boka Kotorska"
                    : "— BAR and Kotor bay patrols, Bay of Boka Kotorska"}
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {es ? "Defensa y Cooperación Internacional" : "Defense & International Cooperation"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>VCG/NATO</strong>{" "}
                  {es
                    ? "— Fuerzas Armadas ~2.000, miembro NATO desde 2017, contribuye KFOR"
                    : "— Armed Forces ~2,000, NATO member since 2017, contributes KFOR"}
                </li>
                <li>
                  <strong>FRONTEX</strong>{" "}
                  {es
                    ? "— Acuerdo de Estado huésped, vigilancia costa adriática"
                    : "— Host State Agreement, Adriatic coast surveillance"}
                </li>
                <li>
                  <strong>SELEC/INTERPOL</strong>{" "}
                  {es
                    ? "— Miembro pleno, NCB Podgorica, crimen organizado balcánico"
                    : "— Full member, NCB Podgorica, Balkan organized crime"}
                </li>
                <li>
                  <strong>Europol</strong>{" "}
                  {es
                    ? "— Acuerdo operativo, redes narcotráfico Balcanes"
                    : "— Operational agreement, Balkan drug trafficking networks"}
                </li>
                <li>
                  <strong>OSCE</strong>{" "}
                  {es
                    ? "— Misión Montenegro, reforma sector seguridad"
                    : "— Montenegro Mission, security sector reform"}
                </li>
                <li>
                  <strong>MRCC Bar</strong>{" "}
                  {es
                    ? "— Centro Coordinación Rescate Marítimo, Mar Adriático sur"
                    : "— Maritime Rescue Coordination Center, southern Adriatic Sea"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure, Economy & Compliance */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            {es
              ? "Infraestructura, Economía y Marco Legal"
              : "Infrastructure, Economy & Legal Framework"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {es ? "Puertos y Transporte" : "Ports & Transport"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Puerto de Bar" : "Port of Bar"}</strong>{" "}
                  {es
                    ? "— único puerto aguas profundas sur Adriático, 5M t/año, hinterland Serbia"
                    : "— only deep water port south Adriatic, 5M t/yr, Serbia hinterland"}
                </li>
                <li>
                  <strong>{es ? "Autopista Bar-Boljare" : "Bar-Boljare Highway"}</strong>{" "}
                  {es
                    ? "— €944M EXIM China, tramo 41 km Smokovac-Uvač 2022, 170 km planificados"
                    : "— €944M China EXIM, 41 km Smokovac-Uvač section 2022, 170 km planned"}
                </li>
                <li>
                  <strong>{es ? "Kotor Puerto Cruceros" : "Kotor Cruise Port"}</strong>{" "}
                  {es
                    ? "— UNESCO Casco Antiguo, 800K+ pax cruceros/año"
                    : "— UNESCO Old Town, 800K+ cruise pax/yr"}
                </li>
                <li>
                  <strong>{es ? "Aeropuerto TGD Podgorica" : "TGD Podgorica Airport"}</strong>{" "}
                  {es ? "— 1,2M pax/año, ampliación planificada" : "— 1.2M pax/yr, expansion planned"}
                </li>
                <li>
                  <strong>{es ? "Aeropuerto TIV Tivat" : "TIV Tivat Airport"}</strong>{" "}
                  {es ? "— turismo Riviera, 1M+ pax/año verano" : "— Riviera tourism, 1M+ pax/yr summer"}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {es ? "Energía e Industria" : "Energy & Industry"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>KAP/RUSAL</strong>{" "}
                  {es
                    ? "— fundición aluminio Podgorica, cerrada 2013, legado industrial"
                    : "— Podgorica aluminium smelter, closed 2013, industrial legacy"}
                </li>
                <li>
                  <strong>{es ? "Pljevlja Carbón/Termoelektrana" : "Pljevlja Coal/Thermoelectric"}</strong>{" "}
                  {es
                    ? "— ~210 MW lignito, 40% electricidad nacional"
                    : "— ~210 MW lignite, 40% national electricity"}
                </li>
                <li>
                  <strong>{es ? "Hidroeléctrica Piva" : "Piva Hydro"}</strong>{" "}
                  {es
                    ? "— 342 MW, embalse Piva 880M m3"
                    : "— 342 MW, Piva reservoir 880M m3"}
                </li>
                <li>
                  <strong>{es ? "Turismo 25% PIB" : "Tourism 25% GDP"}</strong>{" "}
                  {es
                    ? "— mayor sector, Riviera Budva/Kotor/Porto Montenegro"
                    : "— largest sector, Budva/Kotor Riviera/Porto Montenegro"}
                </li>
                <li>
                  <strong>Porto Montenegro</strong>{" "}
                  {es
                    ? "— marina superyates Tivat, inversión Oleg Deripaska >€1B"
                    : "— Tivat superyacht marina, Oleg Deripaska investment >€1B"}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {es ? "Marco Legal y Cumplimiento" : "Legal Framework & Compliance"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Ley 2012 Datos Personales" : "2012 Personal Data Law"}</strong>{" "}
                  {es
                    ? "— AZLP Agencia Protección Datos, GDPR-alineada"
                    : "— AZLP Data Protection Agency, GDPR-aligned"}
                </li>
                <li>
                  <strong>ZJNR</strong>{" "}
                  {es
                    ? "— Ley Contratación Pública, DZNCP Dirección, portal e-Nabavke"
                    : "— Public Procurement Law, DZNCP Directorate, e-Nabavke portal"}
                </li>
                <li>
                  <strong>EKIP</strong>{" "}
                  {es
                    ? "— Regulador telecomunicaciones, licencias TETRA/LTE"
                    : "— Telecoms regulator, TETRA/LTE licenses"}
                </li>
                <li>
                  <strong>{es ? "Candidato UE líder" : "EU Candidate leader"}</strong>{" "}
                  {es
                    ? "— Todos los capítulos abiertos desde 2012, proceso más avanzado Balcanes"
                    : "— All chapters open since 2012, most advanced Balkan process"}
                </li>
                <li>
                  <strong>CBCG/EUR</strong>{" "}
                  {es
                    ? "— Banco Central, moneda EUR (unilateral), sin BCE"
                    : "— Central Bank, currency EUR (unilateral), non-ECB"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KabatOne Capabilities */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            {es
              ? "Capacidades KabatOne para Montenegro"
              : "KabatOne Capabilities for Montenegro"}
          </h2>
          <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto">
            {es
              ? "Plataforma Avalon unificando vigilancia, despacho CAD, seguridad portuaria y gestión costera para los desafíos de seguridad de Montenegro."
              : "Avalon platform unifying surveillance, CAD dispatch, port security, and coastal management for Montenegro's security challenges."}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: es ? "Seguridad Puerto Bar y Costa" : "Port of Bar & Coastal Security",
                desc: es
                  ? "Sistema integrado para el Puerto de Bar y 293 km de costa adriática — AIS marítimo, cámaras PTZ en bahías, ANPR en accesos portuarios, coordinación MRCC Bar, alertas de embarcaciones en Boka Kotorska y vigilancia de la Riviera turística."
                  : "Integrated system for the Port of Bar and 293 km Adriatic coast — maritime AIS, PTZ cameras in bays, ANPR at port access points, MRCC Bar coordination, vessel alerts in Boka Kotorska, and Riviera tourism surveillance.",
                icon: "⚓",
              },
              {
                title: es ? "Gestión Bar-Boljare y Fronteras" : "Bar-Boljare & Border Management",
                desc: es
                  ? "Monitorización de la autopista Bar-Boljare con ANPR, CCTV en cruces fronterizos con Serbia, Bosnia, Albania, Kosovo y Croacia, coordinación FRONTEX y alertas de IBMS en los principales pasos terrestres."
                  : "Bar-Boljare highway monitoring with ANPR, CCTV at border crossings with Serbia, Bosnia, Albania, Kosovo, and Croatia, FRONTEX coordination, and IBMS alerts at major land crossings.",
                icon: "🛂",
              },
              {
                title: es ? "CCC Podgorica y Destinos Turísticos" : "Podgorica CCC & Tourism Destinations",
                desc: es
                  ? "Centro de Mando para Podgorica y destinos turísticos Budva, Kotor y Tivat — integración CCTV multi-municipio, CAD 112 despacho, gestión de incidentes en temporada alta, eventos masivos y coordinación con guardia costera."
                  : "Command Center for Podgorica and tourism destinations Budva, Kotor, and Tivat — multi-municipality CCTV integration, CAD 112 dispatch, high-season incident management, mass events, and coast guard coordination.",
                icon: "🏖️",
              },
              {
                title: es ? "Cumplimiento AZLP y Proceso UE" : "AZLP Compliance & EU Process",
                desc: es
                  ? "Arquitectura conforme Ley de Datos Personales 2012 y AZLP, integración EKIP para TETRA/LTE, portal e-Nabavke compatible y soporte para el proceso de adhesión UE más avanzado de los Balcanes Occidentales."
                  : "Architecture compliant with 2012 Personal Data Law and AZLP, EKIP integration for TETRA/LTE, e-Nabavke compatible portal, and support for the most advanced Western Balkans EU accession process.",
                icon: "🔒",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-2xl p-6 border border-slate-200"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            {es ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
          </h2>
          <div className="space-y-6">
            {[
              {
                q: es
                  ? "¿Cuáles son las principales fuerzas de seguridad de Montenegro?"
                  : "What are Montenegro's main security forces?",
                a: es
                  ? "La Policía de Montenegro ~5.000 agentes, ANB inteligencia nacional, AKB contrainteligencia, SAJ unidad antiterrorista, Guardia de Fronteras y VCG ~2.000 efectivos como miembro NATO desde 2017."
                  : "Montenegro Police ~5,000 officers, ANB national intelligence, AKB counter-intelligence, SAJ anti-terrorist unit, Border Guard, and VCG ~2,000 personnel as NATO member since 2017.",
              },
              {
                q: es
                  ? "¿Qué importancia tiene la autopista Bar-Boljare?"
                  : "What is the significance of the Bar-Boljare highway?",
                a: es
                  ? "La autopista Bar-Boljare (€944M, EXIM Bank China) conectará el Puerto de Bar con Serbia. El tramo Smokovac-Uvač de 41 km se inauguró en 2022. Transformará la conectividad regional pero ha generado preocupaciones por la deuda con China."
                  : "The Bar-Boljare highway (€944M, China EXIM Bank) will connect the Port of Bar to Serbia. The 41 km Smokovac-Uvač section opened in 2022. It will transform regional connectivity but has raised Chinese debt concerns.",
              },
              {
                q: es
                  ? "¿Cuál es el progreso de Montenegro en la adhesión a la UE?"
                  : "What is Montenegro's EU accession progress?",
                a: es
                  ? "Montenegro es el país más avanzado de los Balcanes Occidentales en el proceso UE, con todos los capítulos de negociación abiertos desde 2012. Sin embargo, los capítulos 23 y 24 (estado de derecho) siguen siendo los más difíciles."
                  : "Montenegro is the most advanced Western Balkan country in the EU process, with all negotiating chapters open since 2012. However, chapters 23 and 24 (rule of law) remain the most challenging.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="bg-white rounded-2xl p-6 border border-slate-200"
              >
                <h3 className="font-semibold text-slate-800 mb-2">{item.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        es={es}
        h2={
          es
            ? "¿Listo para modernizar la seguridad pública de Montenegro?"
            : "Ready to modernize Montenegro's public safety?"
        }
        subtitle={
          es
            ? "KabatOne integra Policía, ANB y Guardia de Fronteras en una plataforma unificada — Puerto Bar, costa adriática 293 km, autopista Bar-Boljare, cumplimiento AZLP/GDPR y soporte para el proceso de adhesión UE."
            : "KabatOne integrates Police, ANB, and Border Guard in one unified platform — Port of Bar, Adriatic coast 293 km, Bar-Boljare highway, AZLP/GDPR compliance, and EU accession process support."
        }
      />
      <Footer es={es} />
    </>
  );
}
