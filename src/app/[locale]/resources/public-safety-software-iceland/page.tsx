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
  return generatePageMetadata("publicSafetySoftwareIceland", locale);
}

export default async function PublicSafetySoftwareIceland({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const schema = [
    articleSchema(
      es
        ? "Software de Seguridad Pública para Islandia | Policía Ríkislögregluþjónn/KÍB, Guardia Costera, Keflavík NATO y Volcanes – KabatOne"
        : "Public Safety Software for Iceland | National Police/KÍB, Coast Guard, Keflavík NATO & Volcanoes – KabatOne",
      es
        ? "KabatOne ofrece plataforma de seguridad pública para la Policía Nacional islandesa, KÍB Inteligencia y Guardia Costera — gestión de riesgos volcánicos Fagradalsfjall/Grindavík, ZEE pesquera 200 nm, Base Keflavík NATO, Corredor Ártico y coordinación FRONTEX/Schengen."
        : "KabatOne delivers public safety platform for Iceland National Police, KÍB Intelligence, and Coast Guard — volcanic risk management Fagradalsfjall/Grindavík, 200 nm fishing EEZ, NATO Keflavík Base, Arctic Corridor, and FRONTEX/Schengen coordination.",
      es
        ? "https://kabatone.com/es/resources/public-safety-software-iceland/"
        : "https://kabatone.com/resources/public-safety-software-iceland/",
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
          ? "Software de Seguridad Pública para Islandia"
          : "Public Safety Software for Iceland",
        url: es
          ? "https://kabatone.com/es/resources/public-safety-software-iceland/"
          : "https://kabatone.com/resources/public-safety-software-iceland/",
      },
    ]),
    faqPageSchema([
      {
        question: es
          ? "¿Cuáles son las principales fuerzas de seguridad de Islandia?"
          : "What are Iceland's main security forces?",
        answer: es
          ? "Islandia es el único país de la NATO sin ejército. Su seguridad recae en la Policía Nacional Ríkislögregluþjónn ~1.500 agentes (único organismo armado), KÍB inteligencia, Guardia Costera y la Viking Squad unidad especial."
          : "Iceland is the only NATO country without a military. Security relies on the National Police Ríkislögregluþjónn ~1,500 officers (the only armed body), KÍB intelligence, Coast Guard, and the Viking Squad special unit.",
      },
      {
        question: es
          ? "¿Cómo gestiona Islandia las erupciones volcánicas?"
          : "How does Iceland manage volcanic eruptions?",
        answer: es
          ? "Islandia tiene 33 sistemas volcánicos activos. El Departamento de Protección Civil y Gestión de Emergencias (Almannavarnir) coordina evacuaciones con sensores sísmicos, monitorización 24/7 del Instituto Meteorológico (IMO) y la Guardia Costera para zonas costeras."
          : "Iceland has 33 active volcanic systems. The Civil Protection and Emergency Management Department (Almannavarnir) coordinates evacuations with seismic sensors, 24/7 monitoring by the Meteorological Office (IMO), and the Coast Guard for coastal zones.",
      },
      {
        question: es
          ? "¿Qué importancia tiene la Base Keflavík para la NATO?"
          : "What is the significance of Keflavík Base for NATO?",
        answer: es
          ? "La Base Keflavík (NASR/NAS Keflavík) es estratégica para la NATO en el Atlántico Norte — controla el paso GIUK (Groenlandia-Islandia-Reino Unido), detecta submarinos rusos y protege las rutas oceánicas. EEUU mantuvo tropas allí hasta 2006; NATO retomó operaciones IAMD en 2016."
          : "Keflavík Base (NASR/NAS Keflavík) is strategic for NATO in the North Atlantic — controls the GIUK gap (Greenland-Iceland-UK), detects Russian submarines, and protects ocean routes. The US kept troops there until 2006; NATO resumed IAMD operations in 2016.",
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
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm text-blue-300 mb-6">
            🇮🇸 {es ? "Europa — Islandia" : "Europe — Iceland"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {es
              ? "Software de Seguridad Pública para Islandia"
              : "Public Safety Software for Iceland"}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            {es
              ? "Plataforma unificada para la Policía Nacional, KÍB y Guardia Costera — 33 volcanes activos, ZEE pesquera 200 nm, Keflavík NATO y Corredor Ártico."
              : "Unified platform for National Police, KÍB, and Coast Guard — 33 active volcanoes, 200 nm fishing EEZ, NATO Keflavík, and Arctic Corridor."}
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              es ? "Policía ~1.5K agentes" : "Police ~1.5K officers",
              es ? "33 Volcanes Activos" : "33 Active Volcanoes",
              es ? "Keflavík NATO GIUK" : "Keflavík NATO GIUK",
              es ? "ZEE 200nm Pesca" : "EEZ 200nm Fishing",
              es ? "Schengen 2001" : "Schengen 2001",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-blue-700/30 border border-blue-500/30 rounded-full px-3 py-1 text-blue-200"
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
                  <strong>{es ? "Policía Nacional (Ríkislögreglan)" : "National Police (Ríkislögreglan)"}</strong>{" "}
                  {es
                    ? "~1.500 agentes, único cuerpo armado del país, 7 divisiones regionales"
                    : "~1,500 officers, country's only armed body, 7 regional divisions"}
                </li>
                <li>
                  <strong>KÍB</strong>{" "}
                  {es
                    ? "— Kæruleyfi Íslands/AESI, Agencia de Inteligencia y Seguridad"
                    : "— AESI, Agency for Intelligence and Security of Iceland"}
                </li>
                <li>
                  <strong>{es ? "Viking Squad" : "Viking Squad"}</strong>{" "}
                  {es
                    ? "— Unidad especial antiterrorismo, rehenes y CBRN"
                    : "— Special anti-terrorism unit, hostage and CBRN"}
                </li>
                <li>
                  <strong>Almannavarnir</strong>{" "}
                  {es
                    ? "— Protección Civil y Gestión Emergencias, volcanes/terremotos"
                    : "— Civil Protection and Emergency Management, volcanoes/earthquakes"}
                </li>
                <li>
                  <strong>IMO</strong>{" "}
                  {es
                    ? "— Instituto Meteorológico Islandia, monitorización sísmica 24/7"
                    : "— Icelandic Meteorological Office, 24/7 seismic monitoring"}
                </li>
                <li>
                  <strong>{es ? "112 Islandia" : "112 Iceland"}</strong>{" "}
                  {es
                    ? "— Despacho emergencias nacional integrado, Reikiavik"
                    : "— National integrated emergency dispatch, Reykjavik"}
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {es ? "Guardia Costera y Cooperación" : "Coast Guard & Cooperation"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Guardia Costera (Landhelgisgæslan)" : "Coast Guard (Landhelgisgæslan)"}</strong>{" "}
                  {es
                    ? "— patrullas ZEE 830.000 km², SAR, helicópteros + buques"
                    : "— EEZ 830,000 km² patrols, SAR, helicopters + vessels"}
                </li>
                <li>
                  <strong>NATO/NASR Keflavík</strong>{" "}
                  {es
                    ? "— Base Keflavík, operaciones IAMD 2016, paso GIUK control"
                    : "— Keflavík Base, IAMD operations 2016, GIUK gap control"}
                </li>
                <li>
                  <strong>FRONTEX</strong>{" "}
                  {es
                    ? "— Acuerdo asociado (no miembro UE), operaciones Atlántico Norte"
                    : "— Associated agreement (non-EU member), North Atlantic operations"}
                </li>
                <li>
                  <strong>INTERPOL/Europol</strong>{" "}
                  {es
                    ? "— NCB Reikiavik, acuerdo cooperativo Europol"
                    : "— NCB Reykjavik, Europol cooperation agreement"}
                </li>
                <li>
                  <strong>{es ? "Consejo Ártico" : "Arctic Council"}</strong>{" "}
                  {es
                    ? "— Miembro fundador, presidencia rotatoria, ruta polar Norte"
                    : "— Founding member, rotating presidency, Northern polar route"}
                </li>
                <li>
                  <strong>EEA/Schengen</strong>{" "}
                  {es
                    ? "— Schengen desde 2001, EEA/EFTA, no miembro UE"
                    : "— Schengen since 2001, EEA/EFTA, non-EU member"}
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
                {es ? "Volcanes y Riesgos Naturales" : "Volcanoes & Natural Hazards"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "33 Sistemas Volcánicos" : "33 Volcanic Systems"}</strong>{" "}
                  {es
                    ? "— Fagradalsfjall 2021/2023/2024, Grindavík evacuaciones"
                    : "— Fagradalsfjall 2021/2023/2024, Grindavík evacuations"}
                </li>
                <li>
                  <strong>{es ? "Eyjafjallajökull" : "Eyjafjallajökull"}</strong>{" "}
                  {es
                    ? "— erupción 2010, cierre espacio aéreo europeo 100K vuelos cancelados"
                    : "— 2010 eruption, European airspace closure 100K flights cancelled"}
                </li>
                <li>
                  <strong>{es ? "Katla/Hekla" : "Katla/Hekla"}</strong>{" "}
                  {es
                    ? "— volcanes de mayor riesgo, evacuación planificada 50K personas"
                    : "— highest risk volcanoes, planned evacuation 50K people"}
                </li>
                <li>
                  <strong>{es ? "Terremotos/Hundafoss" : "Earthquakes/Hundafoss"}</strong>{" "}
                  {es
                    ? "— 600+ terremotos/semana, sensores SÍNET en red nacional"
                    : "— 600+ earthquakes/week, SÍNET sensors on national network"}
                </li>
                <li>
                  <strong>{es ? "Inundaciones Jökulhlaup" : "Jökulhlaup Floods"}</strong>{" "}
                  {es
                    ? "— inundaciones glaciares por erupciones subglaciares"
                    : "— glacial floods from subglacial eruptions"}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {es ? "Energía y Economía" : "Energy & Economy"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Geotérmica 65% calor" : "Geothermal 65% heat"}</strong>{" "}
                  {es
                    ? "— Hellisheiði mayor planta geotérmica Europa, 5 principales plantas"
                    : "— Hellisheiði largest European geothermal plant, 5 main plants"}
                </li>
                <li>
                  <strong>{es ? "Hidráulica 70% electricidad" : "Hydro 70% electricity"}</strong>{" "}
                  {es
                    ? "— 100% energía renovable, Landsvirkjun empresa nacional"
                    : "— 100% renewable energy, Landsvirkjun national company"}
                </li>
                <li>
                  <strong>{es ? "Aluminio/ISAL/ÍSAL" : "Aluminium/ÍSAL"}</strong>{" "}
                  {es
                    ? "— Rio Tinto ÍSAL Straumsvík, Century Aluminum, ~900K t/año"
                    : "— Rio Tinto ÍSAL Straumsvík, Century Aluminum, ~900K t/yr"}
                </li>
                <li>
                  <strong>{es ? "Pesca 35% exportaciones" : "Fishing 35% exports"}</strong>{" "}
                  {es
                    ? "— cuotas MSC, 6to pesquero mundial, ZEE 830.000 km²"
                    : "— MSC quotas, 6th world fishery, EEZ 830,000 km²"}
                </li>
                <li>
                  <strong>{es ? "Turismo 10% PIB" : "Tourism 10% GDP"}</strong>{" "}
                  {es
                    ? "— Aurora Boreal, Geysir, 2M+ turistas/año"
                    : "— Northern Lights, Geysir, 2M+ tourists/yr"}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {es ? "Marco Legal y Cumplimiento" : "Legal Framework & Compliance"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Ley Datos Personales 90/2018" : "Personal Data Act 90/2018"}</strong>{" "}
                  {es
                    ? "— Comisario de Protección Datos (Persónuvernd), GDPR-EEA"
                    : "— Data Protection Commissioner (Persónuvernd), GDPR-EEA"}
                </li>
                <li>
                  <strong>{es ? "Ley Contratación Pública" : "Public Procurement Act"}</strong>{" "}
                  {es
                    ? "— Ríkiskaup (Compras del Estado), portal e-Procurement"
                    : "— Ríkiskaup (State Procurement), e-Procurement portal"}
                </li>
                <li>
                  <strong>PFS</strong>{" "}
                  {es
                    ? "— Autoridad Postal y Telecomunicaciones, licencias TETRA/LTE"
                    : "— Post and Telecom Authority, TETRA/LTE licenses"}
                </li>
                <li>
                  <strong>EEA/EFTA</strong>{" "}
                  {es
                    ? "— Schengen 2001, Espacio Económico Europeo, no miembro UE"
                    : "— Schengen 2001, European Economic Area, non-EU member"}
                </li>
                <li>
                  <strong>CBI/ISK</strong>{" "}
                  {es
                    ? "— Banco Central Islandia, moneda ISK corona islandesa"
                    : "— Central Bank of Iceland, currency ISK Icelandic krona"}
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
              ? "Capacidades KabatOne para Islandia"
              : "KabatOne Capabilities for Iceland"}
          </h2>
          <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto">
            {es
              ? "Plataforma Avalon unificando gestión de riesgos volcánicos, seguridad costera, protección de infraestructura energética y vigilancia ártica para los desafíos únicos de Islandia."
              : "Avalon platform unifying volcanic risk management, coastal security, energy infrastructure protection, and Arctic surveillance for Iceland's unique challenges."}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: es ? "Gestión de Riesgos Volcánicos" : "Volcanic Risk Management",
                desc: es
                  ? "Sistema integrado con el IMO e Almannavarnir — integración de 600+ sensores sísmicos SÍNET, alertas tempranas de erupciones con código de color, coordinación de evacuaciones para Grindavík/Keflavík, mapas de flujos de lava en tiempo real y despacho CAD 112 para emergencias volcánicas."
                  : "Integrated system with IMO and Almannavarnir — integration of 600+ SÍNET seismic sensors, eruption early warnings with color codes, evacuation coordination for Grindavík/Keflavík, real-time lava flow maps, and CAD 112 dispatch for volcanic emergencies.",
                icon: "🌋",
              },
              {
                title: es ? "Vigilancia ZEE y Costera" : "EEZ & Coastal Surveillance",
                desc: es
                  ? "Plataforma de vigilancia para la ZEE de 830.000 km² y 6.000 km de costa — AIS marítimo de largo alcance, integración Guardia Costera, monitorización de cuotas pesqueras, detección de pesca ilegal, SAR ártico y coordinación con la Base Keflavík NATO."
                  : "Surveillance platform for the 830,000 km² EEZ and 6,000 km coastline — long-range maritime AIS, Coast Guard integration, fishing quota monitoring, illegal fishing detection, Arctic SAR, and coordination with NATO Keflavík Base.",
                icon: "🌊",
              },
              {
                title: es ? "CCC Reikiavik y Aeropuerto Keflavík" : "Reykjavik CCC & Keflavík Airport",
                desc: es
                  ? "Centro de Mando para Reikiavik 400K hab. y el Aeropuerto KEF (10M+ pax/año) — integración CCTV multi-región, CAD 112 despacho, gestión de incidentes en aeropuerto, coordinación con Viking Squad y alertas sísmicas en tiempo real para evacuación de la capital."
                  : "Command Center for Reykjavik 400K pop. and KEF Airport (10M+ pax/yr) — multi-region CCTV integration, CAD 112 dispatch, airport incident management, Viking Squad coordination, and real-time seismic alerts for capital evacuation.",
                icon: "🏙️",
              },
              {
                title: es ? "Cumplimiento Persónuvernd/GDPR-EEA" : "Persónuvernd/GDPR-EEA Compliance",
                desc: es
                  ? "Arquitectura conforme Ley de Datos Personales 90/2018 y Comisario Persónuvernd, alineación EEA con GDPR, integración PFS para comunicaciones TETRA/LTE, portal Ríkiskaup-compatible y soporte para la protección de infraestructura crítica energética/volcánica."
                  : "Architecture compliant with Personal Data Act 90/2018 and Persónuvernd Commissioner, EEA alignment with GDPR, PFS integration for TETRA/LTE communications, Ríkiskaup-compatible portal, and support for critical energy/volcanic infrastructure protection.",
                icon: "🔒",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200"
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
                  ? "¿Cuáles son las principales fuerzas de seguridad de Islandia?"
                  : "What are Iceland's main security forces?",
                a: es
                  ? "Islandia es el único país NATO sin ejército. Su seguridad recae en la Policía Nacional Ríkislögreglan ~1.500 agentes (único cuerpo armado), KÍB inteligencia, Guardia Costera para la ZEE y la Viking Squad para antiterrorismo."
                  : "Iceland is the only NATO country without a military. Security relies on National Police Ríkislögreglan ~1,500 officers (the only armed body), KÍB intelligence, Coast Guard for the EEZ, and the Viking Squad for counter-terrorism.",
              },
              {
                q: es
                  ? "¿Cómo gestiona Islandia las erupciones volcánicas?"
                  : "How does Iceland manage volcanic eruptions?",
                a: es
                  ? "Almannavarnir (Protección Civil) coordina las evacuaciones usando datos sísmicos del IMO y 600+ sensores SÍNET. El sistema de alerta incluye código de colores por niveles (verde/amarillo/naranja/rojo) y planes de evacuación específicos para cada zona volcánica."
                  : "Almannavarnir (Civil Protection) coordinates evacuations using seismic data from IMO and 600+ SÍNET sensors. The alert system includes color levels (green/yellow/orange/red) and specific evacuation plans for each volcanic zone.",
              },
              {
                q: es
                  ? "¿Qué importancia tiene la Base Keflavík para la NATO?"
                  : "What is the significance of Keflavík Base for NATO?",
                a: es
                  ? "Keflavík es estratégica para NATO en el Atlántico Norte — controla el paso GIUK (Groenlandia-Islandia-UK) para detectar submarinos rusos. EEUU retiró tropas en 2006; NATO reanudó operaciones IAMD en 2016 ante la renovada amenaza rusa."
                  : "Keflavík is strategic for NATO in the North Atlantic — controls the GIUK gap (Greenland-Iceland-UK) to detect Russian submarines. The US withdrew troops in 2006; NATO resumed IAMD operations in 2016 due to renewed Russian threat.",
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
            ? "¿Listo para modernizar la seguridad pública de Islandia?"
            : "Ready to modernize Iceland's public safety?"
        }
        subtitle={
          es
            ? "KabatOne integra Policía Nacional, KÍB y Guardia Costera en una plataforma unificada — gestión volcánica con IMO/Almannavarnir, ZEE 830.000 km², Keflavík NATO, cumplimiento Persónuvernd/GDPR-EEA y vigilancia ártica."
            : "KabatOne integrates National Police, KÍB, and Coast Guard in one unified platform — volcanic management with IMO/Almannavarnir, 830,000 km² EEZ, NATO Keflavík, Persónuvernd/GDPR-EEA compliance, and Arctic surveillance."
        }
      />
      <Footer es={es} />
    </>
  );
}
