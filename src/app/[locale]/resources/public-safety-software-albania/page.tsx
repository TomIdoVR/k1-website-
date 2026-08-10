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
  return generatePageMetadata("publicSafetySoftwareAlbania", locale);
}

export default async function PublicSafetySoftwareAlbania({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const schema = [
    articleSchema(
      es
        ? "Software de Seguridad Pública para Albania | Policía del Estado/SHISH, Puerto de Durrës, Corredor 8 y NATO – KabatOne"
        : "Public Safety Software for Albania | State Police/SHISH, Port of Durrës, Corridor 8 & NATO – KabatOne",
      es
        ? "KabatOne ofrece plataforma de seguridad pública para la Policía del Estado albanesa, SHISH inteligencia y Guardia de Fronteras — gestión del Corredor 8 y Corredor R7, seguridad del Puerto de Durrës, candidatura UE y coordinación NATO/FRONTEX."
        : "KabatOne delivers public safety platform for Albanian State Police, SHISH intelligence, and Border Guard — Corridor 8 and Corridor R7 management, Port of Durrës security, EU candidacy, and NATO/FRONTEX coordination.",
      es
        ? "https://kabatone.com/es/resources/public-safety-software-albania"
        : "https://kabatone.com/resources/public-safety-software-albania",
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
          ? "Software de Seguridad Pública para Albania"
          : "Public Safety Software for Albania",
        url: es
          ? "https://kabatone.com/es/resources/public-safety-software-albania"
          : "https://kabatone.com/resources/public-safety-software-albania",
      },
    ]),
    faqPageSchema([
      {
        question: es
          ? "¿Cuáles son las principales fuerzas de seguridad de Albania?"
          : "What are Albania's main security forces?",
        answer: es
          ? "La Policía del Estado albanesa ~12.000 agentes con 12 prefecturas, SHISH (Servicio de Inteligencia e Información del Estado), Guardia de Fronteras y Costeras, y las FAA (Fuerzas Armadas) ~9.000 activos como miembro NATO desde 2009."
          : "Albanian State Police ~12,000 officers with 12 prefectures, SHISH (State Intelligence and Information Service), Border and Coast Guard, and FAA (Armed Forces) ~9,000 active as NATO member since 2009.",
      },
      {
        question: es
          ? "¿Qué es el Corredor 8 y su importancia para Albania?"
          : "What is Corridor 8 and its importance to Albania?",
        answer: es
          ? "El Corredor 8 es el eje E80 que conecta el Puerto de Durrës en el Adriático con Sofía y el Mar Negro, atravesando Macedonia del Norte — ruta estratégica para el comercio de los Balcanes Occidentales con Europa Oriental."
          : "Corridor 8 is the E80 axis connecting Port of Durrës on the Adriatic to Sofia and the Black Sea, through North Macedonia — strategic trade route for Western Balkans with Eastern Europe.",
      },
      {
        question: es
          ? "¿Cuál es el estado de Albania como candidato a la UE?"
          : "What is Albania's status as an EU candidate?",
        answer: es
          ? "Albania es candidata oficial a la UE desde 2014. Las negociaciones de adhesión se abrieron en 2022 con los Grupos I y II. El proceso es co-gestionado con Macedonia del Norte en el marco de acceso de los Balcanes Occidentales."
          : "Albania has been an official EU candidate since 2014. Accession negotiations opened in 2022 with Clusters I and II. The process is co-managed with North Macedonia under the Western Balkans accession framework.",
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
      <section className="bg-gradient-to-br from-slate-900 via-red-950 to-slate-800 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-400/30 rounded-full px-4 py-1.5 text-sm text-red-300 mb-6">
            🇦🇱 {es ? "Europa — Albania" : "Europe — Albania"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {es
              ? "Software de Seguridad Pública para Albania"
              : "Public Safety Software for Albania"}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            {es
              ? "Plataforma unificada para la Policía del Estado, SHISH y Guardia de Fronteras — Corredor 8/R7, Puerto de Durrës, candidatura UE y coordinación NATO/FRONTEX."
              : "Unified platform for State Police, SHISH, and Border Guard — Corridor 8/R7, Port of Durrës, EU candidacy, and NATO/FRONTEX coordination."}
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              es ? "Policía ~12K agentes" : "Police ~12K officers",
              es ? "Corredor 8 E80" : "Corridor 8 E80",
              es ? "Puerto Durrës" : "Port of Durrës",
              es ? "NATO desde 2009" : "NATO since 2009",
              es ? "Candidato UE 2014" : "EU Candidate 2014",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-red-700/30 border border-red-500/30 rounded-full px-3 py-1 text-red-200"
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
                  <strong>{es ? "Policía del Estado" : "State Police"}</strong>{" "}
                  {es
                    ? "~12.000 agentes, 12 prefecturas policiales, Tirana como centro principal"
                    : "~12,000 officers, 12 police prefectures, Tirana as main hub"}
                </li>
                <li>
                  <strong>SHISH</strong>{" "}
                  {es
                    ? "— Servicio de Inteligencia e Información del Estado, contraterrorismo"
                    : "— State Intelligence and Information Service, counter-terrorism"}
                </li>
                <li>
                  <strong>{es ? "Guardia de Fronteras" : "Border and Coast Guard"}</strong>{" "}
                  {es
                    ? "— costa adriática/jónica 476 km, 7 cruces terrestres principales"
                    : "— Adriatic/Ionian coast 476 km, 7 main land crossings"}
                </li>
                <li>
                  <strong>RENEA</strong>{" "}
                  {es
                    ? "— Unidad antiterrorista élite, rehenes y CBRN"
                    : "— Elite anti-terrorist unit, hostage and CBRN"}
                </li>
                <li>
                  <strong>{es ? "Policía Judicial" : "Judicial Police"}</strong>{" "}
                  {es
                    ? "— SPAK Fiscalía anticorrupción, GJKKO Tribunal corrupción"
                    : "— SPAK anti-corruption prosecutor, GJKKO corruption court"}
                </li>
                <li>
                  <strong>MRCC Durrës</strong>{" "}
                  {es
                    ? "— Centro de Coordinación de Rescate Marítimo Adriático"
                    : "— Adriatic Maritime Rescue Coordination Center"}
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {es ? "Defensa y Cooperación Internacional" : "Defense & International Cooperation"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>FAA/NATO</strong>{" "}
                  {es
                    ? "— Fuerzas Armadas ~9.000, miembro NATO desde 2009, contribuye KFOR Kosovo"
                    : "— Armed Forces ~9,000, NATO member since 2009, contributes KFOR Kosovo"}
                </li>
                <li>
                  <strong>FRONTEX</strong>{" "}
                  {es
                    ? "— Acuerdo de Estado huésped 2019, operaciones conjuntas Adriático"
                    : "— Host State Agreement 2019, joint Adriatic operations"}
                </li>
                <li>
                  <strong>Europol/INTERPOL</strong>{" "}
                  {es
                    ? "— Acuerdos operativos, crimen organizado albanés diáspora"
                    : "— Operational agreements, Albanian organized crime diaspora"}
                </li>
                <li>
                  <strong>SELEC</strong>{" "}
                  {es
                    ? "— Miembro pleno, cooperación policial regional Balcanes"
                    : "— Full member, regional Balkan police cooperation"}
                </li>
                <li>
                  <strong>OSCE</strong>{" "}
                  {es
                    ? "— Presencia en Albania, reforma policial y estado de derecho"
                    : "— Presence in Albania, police reform and rule of law"}
                </li>
                <li>
                  <strong>EUBAM</strong>{" "}
                  {es
                    ? "— Misión asistencia gestión frontera UE, integración estándares"
                    : "— EU border management assistance mission, standards integration"}
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
                {es ? "Corredores y Puertos" : "Corridors & Ports"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Corredor 8" : "Corridor 8"}</strong>{" "}
                  {es
                    ? "— E80 Durrës-Skopje-Sofía, acceso a Mar Negro"
                    : "— E80 Durrës-Skopje-Sofia, access to Black Sea"}
                </li>
                <li>
                  <strong>{es ? "Corredor R7" : "Corridor R7"}</strong>{" "}
                  {es
                    ? "— SH2 vertical Albania, conexión norte-sur y Kosovo"
                    : "— SH2 Albania vertical, north-south and Kosovo connection"}
                </li>
                <li>
                  <strong>{es ? "Puerto de Durrës" : "Port of Durrës"}</strong>{" "}
                  {es
                    ? "— mayor puerto Albania/Kosovo hinterland, ~4M t/año, ferry Italia"
                    : "— largest port Albania/Kosovo hinterland, ~4M t/yr, Italy ferries"}
                </li>
                <li>
                  <strong>{es ? "Puerto de Vlorë" : "Port of Vlorë"}</strong>{" "}
                  {es
                    ? "— acceso Canal de Otranto, ferry Italia/Grecia"
                    : "— access Strait of Otranto, Italy/Greece ferries"}
                </li>
                <li>
                  <strong>{es ? "Aeropuerto TIA Rinas" : "TIA Rinas Airport"}</strong>{" "}
                  {es
                    ? "— concesión Kastrati/NEC, 4M+ pax/año"
                    : "— Kastrati/NEC concession, 4M+ pax/yr"}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {es ? "Energía e Industria" : "Energy & Industry"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Hidroeléctrica Drin" : "Drin Hydro"}</strong>{" "}
                  {es
                    ? "— Vau i Dejës/Koman/Fierza ~1.350 MW, Albania 95% eléctrica hidro"
                    : "— Vau i Dejës/Koman/Fierza ~1,350 MW, Albania 95% hydro electric"}
                </li>
                <li>
                  <strong>TAP</strong>{" "}
                  {es
                    ? "— Trans Adriatic Pipeline, gas azerbaiyano a Europa, San Foti terminal"
                    : "— Trans Adriatic Pipeline, Azerbaijani gas to Europe, San Foti terminal"}
                </li>
                <li>
                  <strong>Albpetrol</strong>{" "}
                  {es
                    ? "— petróleo onshore Fier/Patos-Marinza, mayor campo terrestre Europa"
                    : "— onshore oil Fier/Patos-Marinza, largest onshore field Europe"}
                </li>
                <li>
                  <strong>{es ? "Cromo Bulqizë" : "Bulqizë Chrome"}</strong>{" "}
                  {es
                    ? "— Albania 2do productor europeo cromo, exportación €200M+"
                    : "— Albania 2nd European chrome producer, export €200M+"}
                </li>
                <li>
                  <strong>{es ? "Diáspora 30% PIB" : "Diaspora 30% GDP"}</strong>{" "}
                  {es
                    ? "— remesas de Italia, Grecia, EEUU, UK"
                    : "— remittances from Italy, Greece, USA, UK"}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {es ? "Marco Legal y Cumplimiento" : "Legal Framework & Compliance"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Ley 9887/2008 Datos" : "Law 9887/2008 Data"}</strong>{" "}
                  {es
                    ? "— Protección Datos Personales, Comisario IDPMP, GDPR-alineada"
                    : "— Personal Data Protection, IDPMP Commissioner, GDPR-aligned"}
                </li>
                <li>
                  <strong>{es ? "Ley 162/2020 Contratación" : "Law 162/2020 Procurement"}</strong>{" "}
                  {es
                    ? "— Contratación Pública, APP Agencia, sistema e-Procurement"
                    : "— Public Procurement, APP Agency, e-Procurement system"}
                </li>
                <li>
                  <strong>AKEP</strong>{" "}
                  {es
                    ? "— Regulador telecomunicaciones, licencias TETRA/LTE seguridad pública"
                    : "— Telecoms regulator, TETRA/LTE public safety licenses"}
                </li>
                <li>
                  <strong>{es ? "Candidato UE 2014" : "EU Candidate 2014"}</strong>{" "}
                  {es
                    ? "— Candidato oficial 2014, negociaciones 2022 Clusters I/II"
                    : "— Official candidate 2014, negotiations 2022 Clusters I/II"}
                </li>
                <li>
                  <strong>BSA/BoA</strong>{" "}
                  {es
                    ? "— Banco de Albania, moneda ALL lek, Basel III"
                    : "— Bank of Albania, currency ALL lek, Basel III"}
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
              ? "Capacidades KabatOne para Albania"
              : "KabatOne Capabilities for Albania"}
          </h2>
          <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto">
            {es
              ? "Plataforma Avalon unificando vigilancia, despacho CAD, gestión portuaria y seguridad de corredores para los desafíos de seguridad albaneses."
              : "Avalon platform unifying surveillance, CAD dispatch, port management, and corridor security for Albanian security challenges."}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: es ? "Seguridad Portuaria y Costera" : "Port & Coastal Security",
                desc: es
                  ? "Sistema integrado para los puertos de Durrës y Vlorë — ANPR en accesos, cámaras PTZ en muelles, AIS marítimo para el Canal de Otranto, alertas de embarcaciones sospechosas y coordinación MRCC Durrës con guardacostas."
                  : "Integrated system for Durrës and Vlorë ports — ANPR at access points, PTZ cameras on docks, maritime AIS for the Strait of Otranto, suspicious vessel alerts, and MRCC Durrës coordination with coast guard.",
                icon: "⚓",
              },
              {
                title: es ? "Gestión Corredor 8 y Fronteras" : "Corridor 8 & Border Management",
                desc: es
                  ? "Monitorización del Corredor 8 E80 con ANPR, CCTV en pasos fronterizos con Montenegro, Kosovo, Macedonia del Norte y Grecia, coordinación FRONTEX y alertas de IBMS biométrico para gestión de la ruta migratoria."
                  : "Corridor 8 E80 monitoring with ANPR, CCTV at border crossings with Montenegro, Kosovo, North Macedonia, and Greece, FRONTEX coordination, and biometric IBMS alerts for migration route management.",
                icon: "🛂",
              },
              {
                title: es ? "Centro de Mando Tirana" : "Tirana Command Center",
                desc: es
                  ? "CCC para Tirana y 12 prefecturas policiales — integración CCTV, CAD 112 despacho, gestión de incidentes, eventos masivos y coordinación con SPAK/GJKKO para operaciones anticorrupción."
                  : "CCC for Tirana and 12 police prefectures — CCTV integration, CAD 112 dispatch, incident management, mass events, and coordination with SPAK/GJKKO for anti-corruption operations.",
                icon: "🏙️",
              },
              {
                title: es ? "Cumplimiento IDPMP y Proceso UE" : "IDPMP Compliance & EU Process",
                desc: es
                  ? "Arquitectura conforme Ley 9887/2008 y supervisión IDPMP, integración AKEP para comunicaciones TETRA/LTE, sistema e-Procurement compatible con APP Albania y soporte para los Clusters I/II del proceso de adhesión UE."
                  : "Architecture compliant with Law 9887/2008 and IDPMP supervision, AKEP integration for TETRA/LTE communications, e-Procurement system compatible with APP Albania, and support for Clusters I/II of the EU accession process.",
                icon: "🔒",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gradient-to-br from-slate-50 to-red-50 rounded-2xl p-6 border border-slate-200"
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
                  ? "¿Cuáles son las principales fuerzas de seguridad de Albania?"
                  : "What are Albania's main security forces?",
                a: es
                  ? "La Policía del Estado albanesa ~12.000 agentes con 12 prefecturas, SHISH inteligencia del Estado, Guardia de Fronteras y Costeras, y FAA ~9.000 activos. Albania es miembro NATO desde 2009."
                  : "Albanian State Police ~12,000 officers with 12 prefectures, SHISH State Intelligence Service, Border and Coast Guard, and FAA ~9,000 active. Albania has been a NATO member since 2009.",
              },
              {
                q: es
                  ? "¿Qué es el Corredor 8 y su importancia para Albania?"
                  : "What is Corridor 8 and its importance to Albania?",
                a: es
                  ? "El Corredor 8 es el eje E80 que conecta el Puerto de Durrës en el Adriático con Sofía y el Mar Negro a través de Macedonia del Norte — ruta estratégica que convierte a Albania en puerta de entrada de los Balcanes."
                  : "Corridor 8 is the E80 axis connecting Port of Durrës on the Adriatic to Sofia and the Black Sea via North Macedonia — the strategic route making Albania the gateway to the Balkans.",
              },
              {
                q: es
                  ? "¿Cuál es el estado de Albania como candidato a la UE?"
                  : "What is Albania's status as an EU candidate?",
                a: es
                  ? "Albania es candidata oficial a la UE desde 2014. Las negociaciones de adhesión se abrieron en 2022 con los Clusters I y II, incluyendo estado de derecho y seguridad como capítulos prioritarios."
                  : "Albania has been an official EU candidate since 2014. Accession negotiations opened in 2022 with Clusters I and II, including rule of law and security as priority chapters.",
              },
              {
                q: es
                  ? "¿Cómo puede KabatOne apoyar la gestión portuaria y costera albanesa?"
                  : "How can KabatOne support Albanian port and coastal management?",
                a: es
                  ? "KabatOne integra el sistema AIS del Canal de Otranto, CCTV en los puertos de Durrës y Vlorë, ANPR en accesos portuarios, gestión de incidentes marítimos con MRCC Durrës y cumplimiento con el código ISPS para seguridad portuaria."
                  : "KabatOne integrates Strait of Otranto AIS system, CCTV at Durrës and Vlorë ports, ANPR at port access points, maritime incident management with MRCC Durrës, and ISPS code compliance for port security.",
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
            ? "¿Listo para modernizar la seguridad pública de Albania?"
            : "Ready to modernize Albania's public safety?"
        }
        subtitle={
          es
            ? "KabatOne integra Policía del Estado, SHISH y Guardia de Fronteras en una plataforma unificada — Corredor 8, seguridad portuaria Durrës/Vlorë, cumplimiento IDPMP/GDPR y soporte para el proceso de adhesión UE."
            : "KabatOne integrates State Police, SHISH, and Border Guard in one unified platform — Corridor 8, Durrës/Vlorë port security, IDPMP/GDPR compliance, and EU accession process support."
        }
      />
      <Footer es={es} />
    </>
  );
}
