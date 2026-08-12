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
  return generatePageMetadata("publicSafetySoftwareCyprus", locale);
}

export default async function PublicSafetySoftwareCyprus({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const schema = [
    articleSchema(
      es
        ? "Software de Seguridad Pública para Chipre | Policía/KYP, Puerto de Limassol, EEZ Gasífera y Green Line – KabatOne"
        : "Public Safety Software for Cyprus | Police/KYP, Port of Limassol, Gas EEZ & Green Line – KabatOne",
      es
        ? "KabatOne ofrece plataforma de seguridad pública para la Policía de Chipre, KYP inteligencia y Guardia Nacional — gestión de la Línea Verde ONU, protección de la ZEE gasífera Afrodita/ENI, Puerto de Limassol, bases militares británicas y coordinación Frontex/UE."
        : "KabatOne delivers public safety platform for Cyprus Police, KYP intelligence, and National Guard — UN Green Line management, Aphrodite/ENI gas EEZ protection, Port of Limassol, British military bases, and Frontex/EU coordination.",
      es
        ? "https://kabatone.com/es/resources/public-safety-software-cyprus"
        : "https://kabatone.com/resources/public-safety-software-cyprus",
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
          ? "Software de Seguridad Pública para Chipre"
          : "Public Safety Software for Cyprus",
        url: es
          ? "https://kabatone.com/es/resources/public-safety-software-cyprus"
          : "https://kabatone.com/resources/public-safety-software-cyprus",
      },
    ]),
    faqPageSchema([
      {
        question: es
          ? "¿Cuáles son las principales fuerzas de seguridad de Chipre?"
          : "What are Cyprus's main security forces?",
        answer: es
          ? "La Policía de Chipre ~5.000 agentes, KYP (Servicio Central de Inteligencia), Guardia Nacional (servicio militar obligatorio), Guardia Costera, y las Bases de Soberanía Británica ESBA/WSBA con ~3.000 efectivos militares del Reino Unido."
          : "Cyprus Police ~5,000 officers, KYP (Central Intelligence Service), National Guard (mandatory military service), Coast Guard, and British Sovereign Base Areas ESBA/WSBA with ~3,000 UK military personnel.",
      },
      {
        question: es
          ? "¿Qué es la Línea Verde de la ONU en Chipre?"
          : "What is the UN Green Line in Cyprus?",
        answer: es
          ? "La Línea Verde es la zona de amortiguación de 180 km administrada por UNFICYP desde 1974 que divide Chipre entre la República (sur) y la RTCN (norte no reconocida). La Zona Tampón tiene 3-7 km de anchura y 35.000 personas en Nicosia dividida."
          : "The Green Line is the 180 km buffer zone administered by UNFICYP since 1974 dividing Cyprus between the Republic (south) and the TRNC (unrecognized north). The Buffer Zone is 3-7 km wide with 35,000 people in divided Nicosia.",
      },
      {
        question: es
          ? "¿Qué yacimientos de gas tiene Chipre?"
          : "What gas fields does Cyprus have?",
        answer: es
          ? "La ZEE de Chipre alberga el campo Afrodita (Block 12) con ~4 TCF gas natural operado por Noble Energy/Chevron, y múltiples bloques con ENI, Total, ExxonMobil y Qatar Petroleum. El gasoducto EastMed potencial conectaría con Europa."
          : "Cyprus EEZ hosts the Aphrodite field (Block 12) with ~4 TCF natural gas operated by Noble Energy/Chevron, plus multiple blocks with ENI, Total, ExxonMobil, and Qatar Petroleum. The potential EastMed pipeline would connect to Europe.",
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
            🇨🇾 {es ? "Europa — Chipre" : "Europe — Cyprus"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {es
              ? "Software de Seguridad Pública para Chipre"
              : "Public Safety Software for Cyprus"}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            {es
              ? "Plataforma unificada para la Policía, KYP y Guardia Nacional — Línea Verde ONU 180 km, ZEE gasífera Afrodita/ENI, Puerto Limassol y Bases Soberanía Británica."
              : "Unified platform for Police, KYP, and National Guard — UN Green Line 180 km, Aphrodite/ENI gas EEZ, Port of Limassol, and British Sovereign Base Areas."}
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              es ? "Policía ~5K agentes" : "Police ~5K officers",
              es ? "Línea Verde ONU" : "UN Green Line",
              es ? "ZEE Gasífera Afrodita" : "Aphrodite Gas EEZ",
              es ? "Bases Soberanía RU" : "UK Sovereign Bases",
              es ? "Puerto Limassol" : "Port of Limassol",
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
                  <strong>{es ? "Policía de Chipre" : "Cyprus Police"}</strong>{" "}
                  {es
                    ? "~5.000 agentes, 6 divisiones policiales, Nicosia como centro principal"
                    : "~5,000 officers, 6 police divisions, Nicosia as main hub"}
                </li>
                <li>
                  <strong>KYP</strong>{" "}
                  {es
                    ? "— Servicio Central de Inteligencia, contraterrorismo y espionaje"
                    : "— Central Intelligence Service, counter-terrorism and espionage"}
                </li>
                <li>
                  <strong>MMAD</strong>{" "}
                  {es
                    ? "— Unidad Especial Policía, antiterrorismo e intervención"
                    : "— Police Special Unit, counter-terrorism and intervention"}
                </li>
                <li>
                  <strong>{es ? "Guardia Nacional" : "National Guard"}</strong>{" "}
                  {es
                    ? "— servicio militar obligatorio 14 meses, ~10.000 activos"
                    : "— mandatory 14-month military service, ~10,000 active"}
                </li>
                <li>
                  <strong>{es ? "Guardia Costera" : "Coast Guard"}</strong>{" "}
                  {es
                    ? "— patrulla litoral mediterráneo 648 km, rutas migración"
                    : "— patrol Mediterranean coastline 648 km, migration routes"}
                </li>
                <li>
                  <strong>UNFICYP</strong>{" "}
                  {es
                    ? "— Misión ONU ~900 efectivos, Línea Verde zona tampón 180 km"
                    : "— UN mission ~900 personnel, Green Line buffer zone 180 km"}
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {es ? "Bases Soberanía y Cooperación" : "Sovereign Bases & Cooperation"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>ESBA Akrotiri</strong>{" "}
                  {es
                    ? "— Base Soberanía RU, RAF Akrotiri, operaciones Oriente Medio"
                    : "— UK Sovereign Base, RAF Akrotiri, Middle East operations"}
                </li>
                <li>
                  <strong>WSBA Dhekelia</strong>{" "}
                  {es
                    ? "— Base Soberanía RU, inteligencia SIGINT, ~3.000 militares UK"
                    : "— UK Sovereign Base, SIGINT intelligence, ~3,000 UK military"}
                </li>
                <li>
                  <strong>FRONTEX</strong>{" "}
                  {es
                    ? "— Operación Poseidon, vigilancia rutas migración Mediterráneo Este"
                    : "— Operation Poseidon, Eastern Mediterranean migration routes"}
                </li>
                <li>
                  <strong>EUNAVFOR MED</strong>{" "}
                  {es
                    ? "— Operación Irini, embargo armas Libia, Nicosia HQ apoyo"
                    : "— Operation Irini, Libya arms embargo, Nicosia HQ support"}
                </li>
                <li>
                  <strong>EUROPOL</strong>{" "}
                  {es
                    ? "— Miembro UE pleno, NCB Nicosia, redes blanqueo capitales"
                    : "— Full EU member, NCB Nicosia, money laundering networks"}
                </li>
                <li>
                  <strong>INTERPOL</strong>{" "}
                  {es
                    ? "— Miembro pleno, NCB Nicosia, I-24/7 conectado"
                    : "— Full member, NCB Nicosia, I-24/7 connected"}
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
                {es ? "Puertos y Energía" : "Ports & Energy"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Puerto de Limassol" : "Port of Limassol"}</strong>{" "}
                  {es
                    ? "— mayor puerto Chipre, hub cruceros Mediterráneo Este, DP World"
                    : "— largest Cyprus port, East Mediterranean cruise hub, DP World"}
                </li>
                <li>
                  <strong>{es ? "Campo Afrodita (Block 12)" : "Aphrodite Field (Block 12)"}</strong>{" "}
                  {es
                    ? "— ~4 TCF gas natural, Noble Energy/Chevron, ZEE disputada con Turquía"
                    : "— ~4 TCF natural gas, Noble Energy/Chevron, EEZ disputed with Turkey"}
                </li>
                <li>
                  <strong>ENI/Total Blocks</strong>{" "}
                  {es
                    ? "— Bloques 2/3/8/11, exploraciones prometedoras Mar Mediterráneo"
                    : "— Blocks 2/3/8/11, promising Mediterranean Sea explorations"}
                </li>
                <li>
                  <strong>{es ? "Aeropuerto LCA Larnaca" : "LCA Larnaca Airport"}</strong>{" "}
                  {es ? "— 10M+ pax/año, concesión Hermia/Fraport" : "— 10M+ pax/yr, Hermia/Fraport concession"}
                </li>
                <li>
                  <strong>{es ? "Aeropuerto PFO Pafos" : "PFO Paphos Airport"}</strong>{" "}
                  {es ? "— 4M+ pax/año, turismo occidental" : "— 4M+ pax/yr, western tourism"}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {es ? "Sector Financiero y Turismo" : "Financial Sector & Tourism"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Centro Financiero" : "Financial Center"}</strong>{" "}
                  {es
                    ? "— 200K+ empresas registradas, 3.000+ fondos, hub regional Oriente Medio/Rusia"
                    : "— 200K+ registered companies, 3,000+ funds, regional ME/Russia hub"}
                </li>
                <li>
                  <strong>{es ? "Turismo ~15% PIB" : "Tourism ~15% GDP"}</strong>{" "}
                  {es
                    ? "— 3,5M+ turistas/año, Chipre britáica, residentes dorados"
                    : "— 3.5M+ tourists/yr, British Cyprus, golden residents"}
                </li>
                <li>
                  <strong>{es ? "Limassol Marina" : "Limassol Marina"}</strong>{" "}
                  {es
                    ? "— hub superyates Mediterráneo, residencias lujo"
                    : "— Mediterranean superyacht hub, luxury residences"}
                </li>
                <li>
                  <strong>{es ? "Construcción naval" : "Shipbuilding"}</strong>{" "}
                  {es
                    ? "— flota bajo pabellón chipriota 5ta mayor del mundo"
                    : "— fleet under Cypriot flag 5th largest in world"}
                </li>
                <li>
                  <strong>{es ? "BCE/EUR" : "ECB/EUR"}</strong>{" "}
                  {es
                    ? "— Miembro zona euro desde 2008, Banco Central Chipre"
                    : "— Eurozone member since 2008, Central Bank of Cyprus"}
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
                    ? "— Comisario de Datos Cyprus, ley 125(I)/2018, alineación completa"
                    : "— Cyprus Data Commissioner, law 125(I)/2018, full alignment"}
                </li>
                <li>
                  <strong>{es ? "Ley Contratación 73/2016" : "Procurement Law 73/2016"}</strong>{" "}
                  {es
                    ? "— DEFA sistema e-Procurement, alineado directivas UE 2014"
                    : "— DEFA e-Procurement system, aligned with EU 2014 directives"}
                </li>
                <li>
                  <strong>OCECPR</strong>{" "}
                  {es
                    ? "— Regulador telecomunicaciones Chipre, licencias TETRA/LTE"
                    : "— Cyprus telecoms regulator, TETRA/LTE licenses"}
                </li>
                <li>
                  <strong>NIS2/CyberAct</strong>{" "}
                  {es
                    ? "— DASY Directorio Seguridad Digital, entidades críticas"
                    : "— DASY Digital Security Directorate, critical entities"}
                </li>
                <li>
                  <strong>{es ? "Member UE desde 2004" : "EU member since 2004"}</strong>{" "}
                  {es
                    ? "— miembro pleno, GDPR, directivas de seguridad UE"
                    : "— full member, GDPR, EU security directives"}
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
              ? "Capacidades KabatOne para Chipre"
              : "KabatOne Capabilities for Cyprus"}
          </h2>
          <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto">
            {es
              ? "Plataforma Avalon unificando vigilancia, despacho CAD, seguridad marítima y gestión de la Línea Verde para los complejos desafíos de seguridad de Chipre."
              : "Avalon platform unifying surveillance, CAD dispatch, maritime security, and Green Line management for Cyprus's complex security challenges."}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: es ? "Gestión Línea Verde y Zona Tampón" : "Green Line & Buffer Zone Management",
                desc: es
                  ? "Sistema de vigilancia de los 180 km de la Línea Verde ONU en coordinación con UNFICYP — CCTV en los 9 puntos de cruce habilitados, detección de intrusos en zona tampón, alertas sísmicas de movimiento y dashboard compartido con policía, Guardia Nacional y UNFICYP."
                  : "Surveillance system for the 180 km UN Green Line in coordination with UNFICYP — CCTV at 9 enabled crossing points, buffer zone intrusion detection, seismic movement alerts, and shared dashboard with police, National Guard, and UNFICYP.",
                icon: "🗺️",
              },
              {
                title: es ? "Seguridad ZEE y Costera" : "EEZ & Coastal Security",
                desc: es
                  ? "Vigilancia de la ZEE chipriota con AIS marítimo de largo alcance, integración Guardia Costera, monitorización de los bloques gasíferos Afrodita/ENI/Total, coordinación con EUNAVFOR MED Operation Irini y FRONTEX Poseidon para migración."
                  : "Cyprus EEZ surveillance with long-range maritime AIS, Coast Guard integration, monitoring of Aphrodite/ENI/Total gas blocks, coordination with EUNAVFOR MED Operation Irini and FRONTEX Poseidon for migration.",
                icon: "🌊",
              },
              {
                title: es ? "CCC Nicosia y Puerto Limassol" : "Nicosia CCC & Port of Limassol",
                desc: es
                  ? "Centro de Mando para Nicosia dividida y Puerto de Limassol — integración CCTV multi-división, CAD 112/199 despacho emergencias, seguridad cruceros DP World, gestión de eventos y coordinación con Europol para blanqueo de capitales."
                  : "Command Center for divided Nicosia and Port of Limassol — multi-division CCTV integration, CAD 112/199 emergency dispatch, DP World cruise security, event management, and Europol money laundering coordination.",
                icon: "🏙️",
              },
              {
                title: es ? "Cumplimiento GDPR/Cyprus y NIS2" : "GDPR/Cyprus & NIS2 Compliance",
                desc: es
                  ? "Arquitectura conforme Ley 125(I)/2018 y Comisario de Datos Cyprus, NIS2 implementation con DASY, integración OCECPR para TETRA/LTE, sistema DEFA e-Procurement compatible y cumplimiento directivas UE para miembro pleno desde 2004."
                  : "Architecture compliant with Law 125(I)/2018 and Cyprus Data Commissioner, NIS2 implementation with DASY, OCECPR integration for TETRA/LTE, DEFA e-Procurement compatible system, and EU directive compliance for full member since 2004.",
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
                  ? "¿Cuáles son las principales fuerzas de seguridad de Chipre?"
                  : "What are Cyprus's main security forces?",
                a: es
                  ? "La Policía ~5.000 agentes, KYP inteligencia, Guardia Nacional ~10.000, Guardia Costera, y las Bases de Soberanía Británica ESBA/WSBA con ~3.000 militares UK. UNFICYP de la ONU patrulla la Línea Verde."
                  : "Police ~5,000 officers, KYP intelligence, National Guard ~10,000, Coast Guard, and British Sovereign Base Areas ESBA/WSBA with ~3,000 UK military. UNFICYP from the UN patrols the Green Line.",
              },
              {
                q: es
                  ? "¿Qué es la Línea Verde de la ONU en Chipre?"
                  : "What is the UN Green Line in Cyprus?",
                a: es
                  ? "La Línea Verde es la zona de amortiguación de 180 km administrada por UNFICYP desde 1974, dividiendo Chipre. Nicosia es la última capital dividida de Europa, con 9 puntos de cruce habilitados."
                  : "The Green Line is the 180 km buffer zone administered by UNFICYP since 1974, dividing Cyprus. Nicosia is Europe's last divided capital, with 9 enabled crossing points.",
              },
              {
                q: es
                  ? "¿Qué yacimientos de gas tiene Chipre?"
                  : "What gas fields does Cyprus have?",
                a: es
                  ? "La ZEE chipriota alberga el campo Afrodita (Block 12, ~4 TCF, Noble/Chevron) y múltiples bloques con ENI, Total, ExxonMobil y Qatar Petroleum. Las disputas con Turquía sobre la ZEE crean tensiones geopolíticas."
                  : "Cyprus EEZ hosts Aphrodite field (Block 12, ~4 TCF, Noble/Chevron) and multiple blocks with ENI, Total, ExxonMobil, and Qatar Petroleum. Disputes with Turkey over the EEZ create geopolitical tensions.",
              },
              {
                q: es
                  ? "¿Cómo puede KabatOne gestionar la seguridad de la Línea Verde?"
                  : "How can KabatOne manage Green Line security?",
                a: es
                  ? "KabatOne despliega CCTV en los 9 puntos de cruce habilitados, sensores de movimiento en la zona tampón, integración con el COP de UNFICYP, alertas en tiempo real para la Policía y la Guardia Nacional, y reportes de incidentes compatibles con el protocolo ONU."
                  : "KabatOne deploys CCTV at 9 enabled crossing points, motion sensors in the buffer zone, integration with UNFICYP COP, real-time alerts for Police and National Guard, and UN-protocol-compatible incident reports.",
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
            ? "¿Listo para modernizar la seguridad pública de Chipre?"
            : "Ready to modernize Cyprus's public safety?"
        }
        subtitle={
          es
            ? "KabatOne integra Policía, KYP y Guardia Nacional en una plataforma unificada — Línea Verde ONU, ZEE gasífera, Puerto Limassol, cumplimiento GDPR/NIS2 y coordinación FRONTEX/EUNAVFOR."
            : "KabatOne integrates Police, KYP, and National Guard in one unified platform — UN Green Line, gas EEZ, Port of Limassol, GDPR/NIS2 compliance, and FRONTEX/EUNAVFOR coordination."
        }
      />
      <Footer es={es} />
    </>
  );
}
