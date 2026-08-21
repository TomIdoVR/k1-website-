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
  return generatePageMetadata("publicSafetySoftwareMalta", locale);
}

export default async function PublicSafetySoftwareMalta({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const schema = [
    articleSchema(
      es
        ? "Software de Seguridad Pública para Malta | Policía/Ejército AFM, Puerto Gran Marsaxlokk, Migración Mediterráneo y Frontex – KabatOne"
        : "Public Safety Software for Malta | Police/AFM Army, Grand Harbour Marsaxlokk, Mediterranean Migration & Frontex – KabatOne",
      es
        ? "KabatOne ofrece plataforma de seguridad pública para la Policía maltesa, Fuerzas Armadas AFM y Guardia de Fronteras — gestión del Gran Puerto de La Valeta y Marsaxlokk, ruta migratoria central del Mediterráneo, Schengen y coordinación FRONTEX/Eurosur."
        : "KabatOne delivers public safety platform for Malta Police, Armed Forces AFM, and Border Guard — Grand Harbour Valletta and Marsaxlokk management, Central Mediterranean migration route, Schengen, and FRONTEX/Eurosur coordination.",
      es
        ? "https://kabatone.com/es/resources/public-safety-software-malta"
        : "https://kabatone.com/resources/public-safety-software-malta",
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
          ? "Software de Seguridad Pública para Malta"
          : "Public Safety Software for Malta",
        url: es
          ? "https://kabatone.com/es/resources/public-safety-software-malta"
          : "https://kabatone.com/resources/public-safety-software-malta",
      },
    ]),
    faqPageSchema([
      {
        question: es
          ? "¿Cuáles son las principales fuerzas de seguridad de Malta?"
          : "What are Malta's main security forces?",
        answer: es
          ? "La Policía de Malta ~1.700 agentes, Fuerzas Armadas AFM ~2.000 con Guardia de Fronteras, Guardia Costera y Escuadrón Aéreo, y el Servicio de Seguridad SS (inteligencia). La pequeña superficie (316 km²) requiere coordinación integrada."
          : "Malta Police ~1,700 officers, Armed Forces AFM ~2,000 with Border Guard, Coast Guard, and Air Squadron, and Security Service SS (intelligence). The small area (316 km²) requires integrated coordination.",
      },
      {
        question: es
          ? "¿Por qué Malta es un punto crítico para la migración mediterránea?"
          : "Why is Malta a critical point for Mediterranean migration?",
        answer: es
          ? "Malta está en la Ruta Migratoria Central del Mediterráneo (CMR), con el SAR más grande per cápita del mundo (250.000 km²). Recibe llegadas irregulares desde Libia/Túnez y coordina rescates con FRONTEX, EUNAVFOR MED y Guardia Costera italiana."
          : "Malta sits on the Central Mediterranean Route (CMR), with the largest per-capita SAR zone in the world (250,000 km²). It receives irregular arrivals from Libya/Tunisia and coordinates rescues with FRONTEX, EUNAVFOR MED, and Italian Coast Guard.",
      },
      {
        question: es
          ? "¿Qué importancia tiene el Puerto de Marsaxlokk?"
          : "What is the significance of Marsaxlokk Port?",
        answer: es
          ? "Marsaxlokk es uno de los mayores puertos de transbordo de contenedores del Mediterráneo, operado por Freeport Malta/CMA-CGM, con >3M TEU/año. También alberga las instalaciones de regasificación GNL."
          : "Marsaxlokk is one of the largest Mediterranean container transhipment ports, operated by Freeport Malta/CMA-CGM, with >3M TEU/yr. It also hosts the LNG regasification facilities.",
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
            🇲🇹 {es ? "Europa — Malta" : "Europe — Malta"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {es
              ? "Software de Seguridad Pública para Malta"
              : "Public Safety Software for Malta"}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            {es
              ? "Plataforma unificada para la Policía, AFM y Guardia Costera — Gran Puerto La Valeta, Marsaxlokk >3M TEU, SAR Mediterráneo 250.000 km² y coordinación FRONTEX/Eurosur."
              : "Unified platform for Police, AFM, and Coast Guard — Grand Harbour Valletta, Marsaxlokk >3M TEU, Mediterranean SAR 250,000 km², and FRONTEX/Eurosur coordination."}
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              es ? "Policía ~1.7K agentes" : "Police ~1.7K officers",
              es ? "Marsaxlokk >3M TEU" : "Marsaxlokk >3M TEU",
              es ? "SAR 250K km²" : "SAR 250K km²",
              es ? "Schengen 2007" : "Schengen 2007",
              es ? "FRONTEX/Eurosur" : "FRONTEX/Eurosur",
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
                {es ? "Policía y Seguridad" : "Police & Security"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Policía Malta" : "Malta Police"}</strong>{" "}
                  {es
                    ? "~1.700 agentes, 6 divisiones, CID Crimen Organizado"
                    : "~1,700 officers, 6 divisions, CID Organized Crime"}
                </li>
                <li>
                  <strong>SS</strong>{" "}
                  {es
                    ? "— Security Service, inteligencia y contraterrorismo"
                    : "— Security Service, intelligence and counter-terrorism"}
                </li>
                <li>
                  <strong>AFM ESD</strong>{" "}
                  {es
                    ? "— Escuadrón Explosivos, CBRN y artificieros"
                    : "— Explosive Ordnance Squadron, CBRN and EOD"}
                </li>
                <li>
                  <strong>{es ? "Guardia de Fronteras" : "Border Guard"}</strong>{" "}
                  {es
                    ? "— pasos fronterizos LCA Luqa + puertos La Valeta/Marsaxlokk"
                    : "— border crossings MLA Luqa + Valletta/Marsaxlokk ports"}
                </li>
                <li>
                  <strong>JRCC Malta</strong>{" "}
                  {es
                    ? "— Centro Coordinación Rescate Conjunto, SAR 250.000 km²"
                    : "— Joint Rescue Coordination Center, SAR 250,000 km²"}
                </li>
                <li>
                  <strong>{es ? "Policía Portuaria" : "Port Police"}</strong>{" "}
                  {es
                    ? "— Gran Puerto La Valeta, Senglea, Birgu, Kalkara"
                    : "— Grand Harbour Valletta, Senglea, Birgu, Kalkara"}
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {es ? "Fuerzas Armadas y Cooperación" : "Armed Forces & Cooperation"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>AFM</strong>{" "}
                  {es
                    ? "— Fuerzas Armadas ~2.000: Regimiento de Infantería, Escuadrón Marítimo, Escuadrón Aéreo AS365/King Air"
                    : "— Armed Forces ~2,000: Infantry Regiment, Maritime Squadron, Air Squadron AS365/King Air"}
                </li>
                <li>
                  <strong>FRONTEX</strong>{" "}
                  {es
                    ? "— NCC Malta, Eurosur, operaciones conjuntas Mediterráneo Central"
                    : "— NCC Malta, Eurosur, joint Central Mediterranean operations"}
                </li>
                <li>
                  <strong>EUNAVFOR MED</strong>{" "}
                  {es
                    ? "— Operación Irini, embargo Libia, coordinación SAR"
                    : "— Operation Irini, Libya embargo, SAR coordination"}
                </li>
                <li>
                  <strong>NATO MNBCD</strong>{" "}
                  {es
                    ? "— Guardia Biológica-Química NATO, Malta aportación CBRN"
                    : "— NATO Bio-Chemical Guard, Malta CBRN contribution"}
                </li>
                <li>
                  <strong>Europol/INTERPOL</strong>{" "}
                  {es
                    ? "— Miembro UE pleno, NCB Valletta, redes blanqueo"
                    : "— Full EU member, NCB Valletta, laundering networks"}
                </li>
                <li>
                  <strong>OLAF</strong>{" "}
                  {es
                    ? "— Fraude UE, pasaportes dorados IIP, juego en línea"
                    : "— EU fraud, IIP golden passports, online gaming"}
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
                  <strong>{es ? "Gran Puerto La Valeta" : "Grand Harbour Valletta"}</strong>{" "}
                  {es
                    ? "— cruceros 1M+ pax/año, ferry Sicilia, fragatas NATO"
                    : "— 1M+ cruise pax/yr, Sicily ferries, NATO frigates"}
                </li>
                <li>
                  <strong>Marsaxlokk/Freeport</strong>{" "}
                  {es
                    ? "— CMA-CGM >3M TEU/año, 7to hub transbordador Mediterráneo"
                    : "— CMA-CGM >3M TEU/yr, 7th Mediterranean transhipment hub"}
                </li>
                <li>
                  <strong>{es ? "Terminal GNL Marsaxlokk" : "LNG Terminal Marsaxlokk"}</strong>{" "}
                  {es
                    ? "— regasificación 2017, suministro electricidad nacional"
                    : "— regasification 2017, national electricity supply"}
                </li>
                <li>
                  <strong>{es ? "Aeropuerto MLA Luqa" : "MLA Luqa Airport"}</strong>{" "}
                  {es ? "— 7M+ pax/año, en ampliación" : "— 7M+ pax/yr, expanding"}
                </li>
                <li>
                  <strong>{es ? "Malta Freeport" : "Malta Freeport"}</strong>{" "}
                  {es
                    ? "— ZL/ZE zona logística, depósito aduanero UE"
                    : "— LS/FZ logistics zone, EU customs warehouse"}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {es ? "Economía y Sectores Clave" : "Economy & Key Sectors"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Turismo 15% PIB" : "Tourism 15% GDP"}</strong>{" "}
                  {es
                    ? "— 2,8M turistas/año, cruceros, Patrimonio UNESCO La Valeta"
                    : "— 2.8M tourists/yr, cruises, UNESCO Valletta Heritage"}
                </li>
                <li>
                  <strong>{es ? "Juego en línea iGaming" : "iGaming"}</strong>{" "}
                  {es
                    ? "— hub europeo, 13% PIB, 300+ licencias MGA"
                    : "— European hub, 13% GDP, 300+ MGA licenses"}
                </li>
                <li>
                  <strong>{es ? "Fintech/Cripto" : "Fintech/Crypto"}</strong>{" "}
                  {es
                    ? "— primera jurisdicción cripto regulada UE, MFSA/VFAA"
                    : "— first EU regulated crypto jurisdiction, MFSA/VFAA"}
                </li>
                <li>
                  <strong>{es ? "Farmacéutica" : "Pharmaceutical"}</strong>{" "}
                  {es
                    ? "— Actavis/Teva, exportaciones €1B+/año"
                    : "— Actavis/Teva, exports €1B+/yr"}
                </li>
                <li>
                  <strong>BCE/EUR</strong>{" "}
                  {es
                    ? "— Miembro zona euro desde 2008, CBM Banco Central"
                    : "— Eurozone member since 2008, CBM Central Bank"}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {es ? "Marco Legal y Cumplimiento" : "Legal Framework & Compliance"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>GDPR/EU</strong>{" "}
                  {es
                    ? "— Comisario Información y Protección Datos IDPC, GDPR pleno"
                    : "— Information and Data Protection Commissioner IDPC, full GDPR"}
                </li>
                <li>
                  <strong>{es ? "Ley Compras Públicas" : "Public Procurement Act"}</strong>{" "}
                  {es
                    ? "— DPPF, portal eTenders, directivas UE 2014 alineadas"
                    : "— DPPF, eTenders portal, EU 2014 directives aligned"}
                </li>
                <li>
                  <strong>MCA</strong>{" "}
                  {es
                    ? "— Autoridad Comunicaciones Malta, licencias TETRA/LTE"
                    : "— Malta Communications Authority, TETRA/LTE licenses"}
                </li>
                <li>
                  <strong>NIS2</strong>{" "}
                  {es
                    ? "— Entidades esenciales e importantes, CERT.MT"
                    : "— Essential and important entities, CERT.MT"}
                </li>
                <li>
                  <strong>{es ? "Schengen 2007" : "Schengen 2007"}</strong>{" "}
                  {es
                    ? "— Miembro desde 2007, control frontera exterior Mediterráneo"
                    : "— Member since 2007, Mediterranean external border control"}
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
              ? "Capacidades KabatOne para Malta"
              : "KabatOne Capabilities for Malta"}
          </h2>
          <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto">
            {es
              ? "Plataforma Avalon unificando vigilancia, despacho CAD, seguridad portuaria y SAR mediterráneo para los desafíos de seguridad únicos de Malta."
              : "Avalon platform unifying surveillance, CAD dispatch, port security, and Mediterranean SAR for Malta's unique security challenges."}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: es ? "SAR y Vigilancia Mediterránea" : "Mediterranean SAR & Surveillance",
                desc: es
                  ? "Plataforma integrada para el JRCC Malta y SAR de 250.000 km² — AIS marítimo de largo alcance, integración con activos FRONTEX/AFM, despacho de rescates, dashboards de embarcaciones en peligro y coordinación con Italia, Libia y EUNAVFOR MED."
                  : "Integrated platform for JRCC Malta and 250,000 km² SAR — long-range maritime AIS, FRONTEX/AFM asset integration, rescue dispatch, vessels-in-distress dashboards, and coordination with Italy, Libya, and EUNAVFOR MED.",
                icon: "🌊",
              },
              {
                title: es ? "Seguridad Gran Puerto y Marsaxlokk" : "Grand Harbour & Marsaxlokk Security",
                desc: es
                  ? "Sistema de seguridad para el Gran Puerto de La Valeta (cruceros, fragatas NATO) y el puerto de Marsaxlokk (>3M TEU, GNL) — CCTV en muelles, ANPR en accesos, AIS marítimo, código ISPS y coordinación con Policía Portuaria y AFM."
                  : "Security system for Grand Harbour Valletta (cruises, NATO frigates) and Marsaxlokk port (>3M TEU, LNG) — CCTV on docks, ANPR at access points, maritime AIS, ISPS code compliance, and coordination with Port Police and AFM.",
                icon: "⚓",
              },
              {
                title: es ? "CCC La Valeta y Aeropuerto Luqa" : "Valletta CCC & Luqa Airport",
                desc: es
                  ? "Centro de Mando para La Valeta y el Aeropuerto MLA Luqa (7M+ pax) — integración CCTV multi-sector, CAD 112 despacho emergencias, gestión flujos turísticos, eventos de alta densidad y coordinación con SS inteligencia."
                  : "Command Center for Valletta and MLA Luqa Airport (7M+ pax) — multi-sector CCTV integration, CAD 112 emergency dispatch, tourist flow management, high-density events, and SS intelligence coordination.",
                icon: "🏛️",
              },
              {
                title: es ? "Cumplimiento IDPC/GDPR y NIS2" : "IDPC/GDPR & NIS2 Compliance",
                desc: es
                  ? "Arquitectura conforme GDPR pleno con supervisión IDPC, NIS2 con CERT.MT, integración MCA para TETRA/LTE, portal eTenders compatible y apoyo regulatorio para iGaming/MFSA/cripto con cumplimiento de seguridad de entidades esenciales."
                  : "Architecture with full GDPR compliance under IDPC supervision, NIS2 with CERT.MT, MCA integration for TETRA/LTE, eTenders compatible portal, and regulatory support for iGaming/MFSA/crypto with essential entities security compliance.",
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
                  ? "¿Cuáles son las principales fuerzas de seguridad de Malta?"
                  : "What are Malta's main security forces?",
                a: es
                  ? "La Policía ~1.700 agentes, SS inteligencia, AFM ~2.000 (Regimiento Infantería, Escuadrón Marítimo, Escuadrón Aéreo), Guardia Costera y JRCC Malta para SAR de 250.000 km²."
                  : "Police ~1,700 officers, SS intelligence, AFM ~2,000 (Infantry Regiment, Maritime Squadron, Air Squadron), Coast Guard, and JRCC Malta for 250,000 km² SAR.",
              },
              {
                q: es
                  ? "¿Por qué Malta es un punto crítico para la migración mediterránea?"
                  : "Why is Malta a critical point for Mediterranean migration?",
                a: es
                  ? "Malta tiene la zona SAR más grande per cápita del mundo (250.000 km²) en la Ruta Migratoria Central del Mediterráneo. Su pequeño tamaño y gran zona SAR hacen que los rescates sean una responsabilidad desproporcionada que requiere coordinación con FRONTEX y EUNAVFOR MED."
                  : "Malta has the world's largest per-capita SAR zone (250,000 km²) on the Central Mediterranean Route. Its small size and large SAR zone make rescues a disproportionate responsibility requiring FRONTEX and EUNAVFOR MED coordination.",
              },
              {
                q: es
                  ? "¿Qué importancia tiene el Puerto de Marsaxlokk?"
                  : "What is the significance of Marsaxlokk Port?",
                a: es
                  ? "Marsaxlokk es uno de los mayores puertos de transbordo del Mediterráneo, operado por Freeport Malta/CMA-CGM con >3M TEU/año. También alberga la terminal GNL de regasificación inaugurada en 2017."
                  : "Marsaxlokk is one of the largest Mediterranean transhipment ports, operated by Freeport Malta/CMA-CGM with >3M TEU/yr. It also hosts the LNG regasification terminal opened in 2017.",
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
            ? "¿Listo para modernizar la seguridad pública de Malta?"
            : "Ready to modernize Malta's public safety?"
        }
        subtitle={
          es
            ? "KabatOne integra Policía, AFM y Guardia Costera en una plataforma unificada — Gran Puerto La Valeta, Marsaxlokk >3M TEU, SAR Mediterráneo 250.000 km², cumplimiento GDPR/NIS2 y coordinación FRONTEX/EUNAVFOR."
            : "KabatOne integrates Police, AFM, and Coast Guard in one unified platform — Grand Harbour Valletta, Marsaxlokk >3M TEU, Mediterranean SAR 250,000 km², GDPR/NIS2 compliance, and FRONTEX/EUNAVFOR coordination."
        }
      />
      <Footer es={es} />
    </>
  );
}
