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
  return generatePageMetadata("publicSafetySoftwareNorthMacedonia", locale);
}

export default async function PublicSafetySoftwareNorthMacedonia({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const schema = [
    articleSchema(
      es
        ? "Software de Seguridad Pública para Macedonia del Norte | MUP/UBK, Corredor 8/10, Aeropuerto Skopje y NATO – KabatOne"
        : "Public Safety Software for North Macedonia | MUP/UBK, Corridor 8/10, Skopje Airport & NATO – KabatOne",
      es
        ? "KabatOne ofrece plataforma de seguridad pública para el MUP macedonio, UBK inteligencia y Guardia de Fronteras — gestión del Corredor 8 y Corredor 10, candidatura UE 2005/negociaciones 2022, NATO desde 2020 y coordinación FRONTEX/SELEC."
        : "KabatOne delivers public safety platform for Macedonian MUP, UBK intelligence, and Border Police — Corridor 8 and Corridor 10 management, EU candidacy 2005/negotiations 2022, NATO since 2020, and FRONTEX/SELEC coordination.",
      es
        ? "https://kabatone.com/es/resources/public-safety-software-north-macedonia/"
        : "https://kabatone.com/resources/public-safety-software-north-macedonia/",
      "2026-05-19"
    ),
    breadcrumbSchema([
      {
        name: es ? "Inicio" : "Home",
        url: es ? "https://kabatone.com/es/" : "https://kabatone.com/",
      },
      {
        name: es ? "Recursos" : "Resources",
        url: es
          ? "https://kabatone.com/es/resources/"
          : "https://kabatone.com/resources/",
      },
      {
        name: es
          ? "Software de Seguridad Pública para Macedonia del Norte"
          : "Public Safety Software for North Macedonia",
        url: es
          ? "https://kabatone.com/es/resources/public-safety-software-north-macedonia/"
          : "https://kabatone.com/resources/public-safety-software-north-macedonia/",
      },
    ]),
    faqPageSchema([
      {
        question: es
          ? "¿Cuáles son las principales fuerzas de seguridad de Macedonia del Norte?"
          : "What are North Macedonia's main security forces?",
        answer: es
          ? "El MUP (Ministerio del Interior) ~8.500 agentes con Policía Nacional, Policía de Fronteras y UBK (Agencia de Inteligencia y Contrainteligencia), más ARM (Ejército) ~8.000 como miembro NATO desde 2020."
          : "MUP (Ministry of Interior) ~8,500 officers with National Police, Border Police, and UBK (Intelligence and Counter-Intelligence Agency), plus ARM (Army) ~8,000 as NATO member since 2020.",
      },
      {
        question: es
          ? "¿Qué corredores paneuropeos cruzan Macedonia del Norte?"
          : "What Pan-European corridors cross North Macedonia?",
        answer: es
          ? "El Corredor 8 (E65) conecta el Adriático albanés con Bulgaria y el Mar Negro; el Corredor 10 (E75) es el eje norte-sur principal de los Balcanes conectando Serbia con Grecia. Su intersección en Veles hace a Macedonia del Norte un nodo estratégico regional."
          : "Corridor 8 (E65) connects the Albanian Adriatic to Bulgaria and the Black Sea; Corridor 10 (E75) is the main north-south Balkan axis connecting Serbia to Greece. Their intersection at Veles makes North Macedonia a strategic regional node.",
      },
      {
        question: es
          ? "¿Cuál es el progreso de Macedonia del Norte en la adhesión a la UE?"
          : "What is North Macedonia's EU accession progress?",
        answer: es
          ? "Macedonia del Norte es candidata a la UE desde 2005 — la candidatura más antigua de los Balcanes. Las negociaciones de adhesión comenzaron en 2022, co-gestionadas con Albania, con el Cluster de Fundamentos como primera prioridad."
          : "North Macedonia has been an EU candidate since 2005 — the oldest Balkan candidacy. Accession negotiations started in 2022, co-managed with Albania, with the Fundamentals Cluster as first priority.",
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
      <section className="bg-gradient-to-br from-slate-900 via-yellow-950 to-slate-800 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-400/30 rounded-full px-4 py-1.5 text-sm text-yellow-300 mb-6">
            🇲🇰 {es ? "Europa — Macedonia del Norte" : "Europe — North Macedonia"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {es
              ? "Software de Seguridad Pública para Macedonia del Norte"
              : "Public Safety Software for North Macedonia"}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            {es
              ? "Plataforma unificada para el MUP, UBK y Policía de Fronteras — Corredor 8/10, candidatura UE 2005, NATO desde 2020 y coordinación FRONTEX/SELEC."
              : "Unified platform for MUP, UBK, and Border Police — Corridor 8/10 intersection, EU candidacy 2005, NATO since 2020, and FRONTEX/SELEC coordination."}
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              es ? "MUP ~8.5K agentes" : "MUP ~8.5K officers",
              es ? "Corredor 8+10 Veles" : "Corridor 8+10 Veles",
              es ? "NATO desde 2020" : "NATO since 2020",
              es ? "Candidato UE 2005" : "EU Candidate 2005",
              es ? "FRONTEX/SELEC" : "FRONTEX/SELEC",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-yellow-700/30 border border-yellow-500/30 rounded-full px-3 py-1 text-yellow-200"
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
                  <strong>{es ? "MUP (Ministerio Interior)" : "MUP (Ministry of Interior)"}</strong>{" "}
                  {es
                    ? "~8.500 agentes, 8 regiones policiales, Skopje como centro"
                    : "~8,500 officers, 8 police regions, Skopje as center"}
                </li>
                <li>
                  <strong>UBK</strong>{" "}
                  {es
                    ? "— Agencia Inteligencia y Contrainteligencia, servicios de seguridad"
                    : "— Intelligence and Counter-Intelligence Agency, security services"}
                </li>
                <li>
                  <strong>DBK</strong>{" "}
                  {es
                    ? "— Dirección Seguridad y Contrainteligencia, coordinación UBK"
                    : "— Security and Counter-Intelligence Directorate, UBK coordination"}
                </li>
                <li>
                  <strong>{es ? "Policía de Fronteras" : "Border Police"}</strong>{" "}
                  {es
                    ? "— 5 países fronterizos, pasos principales Tabanovce/Bogorodica"
                    : "— 5 bordering countries, main crossings Tabanovce/Bogorodica"}
                </li>
                <li>
                  <strong>TIGER/LYNX</strong>{" "}
                  {es
                    ? "— Unidades especiales antiterrorismo MUP"
                    : "— MUP special anti-terrorism units"}
                </li>
                <li>
                  <strong>{es ? "Centro 112" : "112 Center"}</strong>{" "}
                  {es
                    ? "— Despacho integrado nacional emergencias, Skopje"
                    : "— National integrated emergency dispatch, Skopje"}
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {es ? "Defensa y Cooperación Internacional" : "Defense & International Cooperation"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>ARM/NATO</strong>{" "}
                  {es
                    ? "— Ejército ~8.000, miembro NATO desde 2020, contribuye KFOR Kosovo"
                    : "— Army ~8,000, NATO member since 2020, contributes KFOR Kosovo"}
                </li>
                <li>
                  <strong>FRONTEX</strong>{" "}
                  {es
                    ? "— Acuerdo Estado huésped, operaciones conjuntas ruta balcánica"
                    : "— Host State Agreement, joint Balkan route operations"}
                </li>
                <li>
                  <strong>SELEC</strong>{" "}
                  {es
                    ? "— Miembro pleno, cooperación regional crimen organizado"
                    : "— Full member, regional organized crime cooperation"}
                </li>
                <li>
                  <strong>INTERPOL/Europol</strong>{" "}
                  {es
                    ? "— NCB Skopje, acuerdo operativo Europol"
                    : "— NCB Skopje, Europol operational agreement"}
                </li>
                <li>
                  <strong>OSCE</strong>{" "}
                  {es
                    ? "— Misión Skopje, reforma policial post-conflicto 2001"
                    : "— Skopje Mission, post-2001 conflict police reform"}
                </li>
                <li>
                  <strong>EUBAM</strong>{" "}
                  {es
                    ? "— Asistencia gestión frontera UE, alineación Schengen"
                    : "— EU border management assistance, Schengen alignment"}
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
                {es ? "Corredores y Nodo Veles" : "Corridors & Veles Node"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Corredor 8 E65" : "Corridor 8 E65"}</strong>{" "}
                  {es
                    ? "— Albania-Bulgaria 260 km por Macedonia, Adriático-Mar Negro"
                    : "— Albania-Bulgaria 260 km through Macedonia, Adriatic-Black Sea"}
                </li>
                <li>
                  <strong>{es ? "Corredor 10 E75" : "Corridor 10 E75"}</strong>{" "}
                  {es
                    ? "— Serbia-Grecia 175 km, eje norte-sur principal Balcanes"
                    : "— Serbia-Greece 175 km, main Balkan north-south axis"}
                </li>
                <li>
                  <strong>{es ? "Intersección Veles" : "Veles Intersection"}</strong>{" "}
                  {es
                    ? "— nodo estratégico Corredor 8+10, monitorización crítica"
                    : "— strategic Corridor 8+10 node, critical monitoring point"}
                </li>
                <li>
                  <strong>{es ? "Aeropuerto SKP Alejandro" : "SKP Alexander Airport"}</strong>{" "}
                  {es ? "— 1,5M+ pax/año, en modernización" : "— 1.5M+ pax/yr, modernizing"}
                </li>
                <li>
                  <strong>{es ? "Aeropuerto OHD Ohrid" : "OHD Ohrid Airport"}</strong>{" "}
                  {es ? "— turismo estival, patrimonio UNESCO" : "— summer tourism, UNESCO heritage"}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {es ? "Energía e Industria" : "Energy & Industry"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>ELEM/EVN</strong>{" "}
                  {es
                    ? "— Energetika central lignito REK Bitola ~800 MW"
                    : "— ELEM/EVN lignite power REK Bitola ~800 MW"}
                </li>
                <li>
                  <strong>{es ? "Bucim cobre" : "Bucim copper"}</strong>{" "}
                  {es
                    ? "— mina de cobre y oro, Radoviš, exportación €100M+"
                    : "— copper-gold mine Radoviš, export €100M+"}
                </li>
                <li>
                  <strong>Makstil/DUFERCO</strong>{" "}
                  {es
                    ? "— acería Skopje, laminación en frío, exportación UE"
                    : "— Skopje steel mill, cold rolling, EU export"}
                </li>
                <li>
                  <strong>{es ? "Tabaco/TUTUNSKI" : "Tobacco/TUTUNSKI"}</strong>{" "}
                  {es
                    ? "— Macedonia famosa por tabaco oriental, €100M+ exportación"
                    : "— Macedonia known for Oriental tobacco, €100M+ export"}
                </li>
                <li>
                  <strong>{es ? "Turismo Ohrid" : "Ohrid Tourism"}</strong>{" "}
                  {es
                    ? "— lago UNESCO, 2M turistas/año, patrimonio natural y cultural"
                    : "— UNESCO lake, 2M tourists/yr, natural and cultural heritage"}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {es ? "Marco Legal y Cumplimiento" : "Legal Framework & Compliance"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Ley Datos Personales" : "Personal Data Law"}</strong>{" "}
                  {es
                    ? "— AZLP Agencia Protección Datos, GDPR-alineada"
                    : "— AZLP Data Protection Agency, GDPR-aligned"}
                </li>
                <li>
                  <strong>BPJRM</strong>{" "}
                  {es
                    ? "— Ley Contratación Pública, portal ESPP e-Procurement"
                    : "— Public Procurement Law, ESPP e-Procurement portal"}
                </li>
                <li>
                  <strong>AEK</strong>{" "}
                  {es
                    ? "— Regulador telecomunicaciones, licencias TETRA/LTE"
                    : "— Telecoms regulator, TETRA/LTE licenses"}
                </li>
                <li>
                  <strong>{es ? "Candidato UE 2005" : "EU Candidate 2005"}</strong>{" "}
                  {es
                    ? "— Candidato más antiguo Balcanes, negociaciones 2022 Cluster"
                    : "— Oldest Balkan candidate, 2022 negotiations Cluster"}
                </li>
                <li>
                  <strong>NBRM/MKD</strong>{" "}
                  {es
                    ? "— Banco Nacional, moneda MKD denar, Basel III"
                    : "— National Bank, currency MKD denar, Basel III"}
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
              ? "Capacidades KabatOne para Macedonia del Norte"
              : "KabatOne Capabilities for North Macedonia"}
          </h2>
          <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto">
            {es
              ? "Plataforma Avalon unificando vigilancia, despacho CAD, gestión de corredores y seguridad en el nodo estratégico Balcanes para Macedonia del Norte."
              : "Avalon platform unifying surveillance, CAD dispatch, corridor management, and security at the strategic Balkan node for North Macedonia."}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: es ? "Gestión Nodo Veles y Corredores 8/10" : "Veles Node & Corridor 8/10 Management",
                desc: es
                  ? "Monitorización del nodo estratégico Veles donde se cruzan los Corredores 8 y 10, con ANPR en autopistas, CCTV en pasos fronterizos con Serbia, Kosovo, Albania, Grecia y Bulgaria, y alertas de incidentes en tiempo real."
                  : "Monitoring of the strategic Veles node where Corridors 8 and 10 intersect, with motorway ANPR, CCTV at border crossings with Serbia, Kosovo, Albania, Greece, and Bulgaria, and real-time incident alerts.",
                icon: "🗺️",
              },
              {
                title: es ? "Seguridad de la Ruta Balcánica" : "Balkan Route Security",
                desc: es
                  ? "Sistema integrado para la gestión de la ruta migratoria balcánica — monitorización del Corredor 10 E75, coordinación FRONTEX, alertas IBMS en los cruces principales Tabanovce (Serbia) y Bogorodica (Grecia) con despacho CAD 112."
                  : "Integrated system for Balkan migration route management — Corridor 10 E75 monitoring, FRONTEX coordination, IBMS alerts at main crossings Tabanovce (Serbia) and Bogorodica (Greece) with CAD 112 dispatch.",
                icon: "🛂",
              },
              {
                title: es ? "CCC Skopje y Regiones Policiales" : "Skopje CCC & Police Regions",
                desc: es
                  ? "Centro de Mando para Skopje 600K hab. y 8 regiones policiales — integración CCTV multi-región, CAD 112 despacho emergencias, gestión incidentes, eventos masivos y coordinación con TIGER/LYNX unidades especiales."
                  : "Command Center for Skopje 600K pop. and 8 police regions — multi-region CCTV integration, CAD 112 emergency dispatch, incident management, mass events, and TIGER/LYNX special unit coordination.",
                icon: "🏙️",
              },
              {
                title: es ? "Cumplimiento AZLP y Proceso UE" : "AZLP Compliance & EU Process",
                desc: es
                  ? "Arquitectura conforme Ley de Datos Personales y AZLP, integración AEK para TETRA/LTE, sistema ESPP-compatible y soporte para el Cluster de Fundamentos del proceso de adhesión UE co-gestionado con Albania."
                  : "Architecture compliant with Personal Data Law and AZLP, AEK integration for TETRA/LTE, ESPP-compatible system, and support for the EU accession Fundamentals Cluster co-managed with Albania.",
                icon: "🔒",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gradient-to-br from-slate-50 to-yellow-50 rounded-2xl p-6 border border-slate-200"
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
                  ? "¿Cuáles son las principales fuerzas de seguridad de Macedonia del Norte?"
                  : "What are North Macedonia's main security forces?",
                a: es
                  ? "El MUP ~8.500 agentes con 8 regiones policiales, UBK inteligencia y contrainteligencia, Policía de Fronteras con 5 países limítrofes, y ARM ~8.000 como miembro NATO desde 2020."
                  : "MUP ~8,500 officers with 8 police regions, UBK intelligence and counter-intelligence, Border Police with 5 bordering countries, and ARM ~8,000 as NATO member since 2020.",
              },
              {
                q: es
                  ? "¿Qué corredores paneuropeos cruzan Macedonia del Norte?"
                  : "What Pan-European corridors cross North Macedonia?",
                a: es
                  ? "El Corredor 8 E65 (Albania-Bulgaria) y el Corredor 10 E75 (Serbia-Grecia) se cruzan en Veles — haciendo de Macedonia del Norte un nodo estratégico crítico para el transporte y la seguridad de los Balcanes."
                  : "Corridor 8 E65 (Albania-Bulgaria) and Corridor 10 E75 (Serbia-Greece) intersect at Veles — making North Macedonia a critical strategic transport and security node in the Balkans.",
              },
              {
                q: es
                  ? "¿Cuál es el progreso de Macedonia del Norte en la adhesión a la UE?"
                  : "What is North Macedonia's EU accession progress?",
                a: es
                  ? "Macedonia del Norte es candidata a la UE desde 2005 — la más antigua de los Balcanes. Las negociaciones comenzaron en 2022, co-gestionadas con Albania, con el Cluster de Fundamentos incluyendo estado de derecho y seguridad."
                  : "North Macedonia has been an EU candidate since 2005 — the oldest in the Balkans. Negotiations started in 2022, co-managed with Albania, with the Fundamentals Cluster covering rule of law and security.",
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
            ? "¿Listo para modernizar la seguridad pública de Macedonia del Norte?"
            : "Ready to modernize North Macedonia's public safety?"
        }
        subtitle={
          es
            ? "KabatOne integra MUP, UBK y Policía de Fronteras en una plataforma unificada — nodo Veles Corredor 8/10, ruta balcánica, cumplimiento AZLP/GDPR y soporte para el proceso de adhesión UE."
            : "KabatOne integrates MUP, UBK, and Border Police in one unified platform — Corridor 8/10 Veles node, Balkan route, AZLP/GDPR compliance, and EU accession process support."
        }
      />
      <Footer es={es} />
    </>
  );
}
