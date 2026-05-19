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
  return generatePageMetadata("publicSafetySoftwareLuxembourg", locale);
}

export default async function PublicSafetySoftwareLuxembourg({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const schema = [
    articleSchema(
      es
        ? "Software de Seguridad Pública para Luxemburgo | Policía Grand-Ducal, SREL, Aeropuerto Luxembourg y Centro Financiero – KabatOne"
        : "Public Safety Software for Luxembourg | Grand-Ducal Police, SREL, Luxembourg Airport & Financial Center – KabatOne",
      es
        ? "KabatOne ofrece plataforma de seguridad pública para la Policía Grand-Ducal luxemburguesa, SREL inteligencia y Ejército — protección del mayor centro financiero europeo per cápita, seguridad de LuxAir/Cargolux, instituciones UE/NATO y coordinación INTERPOL/Europol."
        : "KabatOne delivers public safety platform for Luxembourg Grand-Ducal Police, SREL intelligence, and Army — protection of Europe's largest per-capita financial center, LuxAir/Cargolux security, EU/NATO institutions, and INTERPOL/Europol coordination.",
      es
        ? "https://kabatone.com/es/resources/public-safety-software-luxembourg/"
        : "https://kabatone.com/resources/public-safety-software-luxembourg/",
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
          ? "Software de Seguridad Pública para Luxemburgo"
          : "Public Safety Software for Luxembourg",
        url: es
          ? "https://kabatone.com/es/resources/public-safety-software-luxembourg/"
          : "https://kabatone.com/resources/public-safety-software-luxembourg/",
      },
    ]),
    faqPageSchema([
      {
        question: es
          ? "¿Cuáles son las principales fuerzas de seguridad de Luxemburgo?"
          : "What are Luxembourg's main security forces?",
        answer: es
          ? "La Policía Grand-Ducal ~1.700 agentes con 4 regiones policiales, SREL (Servicio de Inteligencia del Estado) y el Ejército luxemburgués ~900 activos como miembro fundador de la NATO. La pequeña superficie requiere alta integración interinstitucional."
          : "Grand-Ducal Police ~1,700 officers with 4 police regions, SREL (State Intelligence Service), and Luxembourg Army ~900 active as a founding NATO member. The small area requires high inter-institutional integration.",
      },
      {
        question: es
          ? "¿Por qué Luxemburgo es un centro de seguridad crítico para la UE?"
          : "Why is Luxembourg a critical EU security hub?",
        answer: es
          ? "Luxemburgo alberga el Tribunal de Justicia de la UE, el Tribunal de Cuentas Europeo, la Comisión Europea (DG DIGIT, Eurostat), el cuartel general de Europol conectado, el OTAN SATCEN satélite, y los centros de datos críticos de AWS/Amazon y otras tecnológicas."
          : "Luxembourg hosts the EU Court of Justice, European Court of Auditors, European Commission (DG DIGIT, Eurostat), connected Europol HQ, NATO SATCEN satellite, and critical data centers of AWS/Amazon and other tech companies.",
      },
      {
        question: es
          ? "¿Qué sectores económicos requieren seguridad crítica en Luxemburgo?"
          : "What economic sectors require critical security in Luxembourg?",
        answer: es
          ? "El sector financiero (>200 bancos, mayor centro de fondos de inversión UE con €5T+ AUM), los centros de datos (AWS, OVH, Luxconnect), la siderurgia ArcelorMittal y el hub logístico Cargolux en el aeropuerto son los activos críticos principales."
          : "The financial sector (>200 banks, largest EU investment funds center with €5T+ AUM), data centers (AWS, OVH, Luxconnect), ArcelorMittal steel, and the Cargolux logistics hub at the airport are the main critical assets.",
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
            🇱🇺 {es ? "Europa — Luxemburgo" : "Europe — Luxembourg"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {es
              ? "Software de Seguridad Pública para Luxemburgo"
              : "Public Safety Software for Luxembourg"}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            {es
              ? "Plataforma unificada para la Policía Grand-Ducal, SREL y Ejército — mayor centro financiero UE per cápita, instituciones UE/NATO, Cargolux hub logístico y Aeropuerto Luxembourg."
              : "Unified platform for Grand-Ducal Police, SREL, and Army — EU's largest per-capita financial center, EU/NATO institutions, Cargolux logistics hub, and Luxembourg Airport."}
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              es ? "Policía ~1.7K agentes" : "Police ~1.7K officers",
              es ? "TJUE/Tribunal UE" : "ECJ/EU Institutions",
              es ? "€5T+ Fondos UE" : "€5T+ EU Funds",
              es ? "Cargolux Hub" : "Cargolux Hub",
              es ? "NATO Fundador" : "NATO Founding member",
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
                  <strong>{es ? "Policía Grand-Ducal" : "Grand-Ducal Police"}</strong>{" "}
                  {es
                    ? "~1.700 agentes, 4 regiones, Unidad Especial d'Intervention (UEI)"
                    : "~1,700 officers, 4 regions, Special Intervention Unit (UEI)"}
                </li>
                <li>
                  <strong>SREL</strong>{" "}
                  {es
                    ? "— Servicio de Inteligencia del Estado, contraterrorismo y ciberespionaje"
                    : "— State Intelligence Service, counter-terrorism and cyber espionage"}
                </li>
                <li>
                  <strong>UEI</strong>{" "}
                  {es
                    ? "— Unidad Especial de Intervención, antiterrorismo y rehenes"
                    : "— Special Intervention Unit, counter-terrorism and hostages"}
                </li>
                <li>
                  <strong>{es ? "Policía Judicial" : "Judicial Police"}</strong>{" "}
                  {es
                    ? "— crimen organizado, blanqueo capitales, delitos financieros"
                    : "— organized crime, money laundering, financial crimes"}
                </li>
                <li>
                  <strong>CGDIS</strong>{" "}
                  {es
                    ? "— Cuerpo Gran Ducal de Incendios y Salvamento, emergencias"
                    : "— Grand Ducal Fire and Rescue Corps, emergencies"}
                </li>
                <li>
                  <strong>{es ? "Centro 112" : "112 Center"}</strong>{" "}
                  {es
                    ? "— Despacho emergencias nacional integrado, Kirchberg"
                    : "— National integrated emergency dispatch, Kirchberg"}
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {es ? "Ejército y Cooperación Internacional" : "Army & International Cooperation"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Ejército Luxemburgués" : "Luxembourg Army"}</strong>{" "}
                  {es
                    ? "~900 activos, Regimiento de Infantería, NATO fundador desde 1949"
                    : "~900 active, Infantry Regiment, NATO founding member since 1949"}
                </li>
                <li>
                  <strong>NATO SATCEN</strong>{" "}
                  {es
                    ? "— Centro de Satélites, imagen inteligencia desde Luxemburgo"
                    : "— Satellite Centre, intelligence imagery from Luxembourg"}
                </li>
                <li>
                  <strong>Europol</strong>{" "}
                  {es
                    ? "— Miembro UE pleno, conexión directa NCB Luxemburgo"
                    : "— Full EU member, direct NCB Luxembourg connection"}
                </li>
                <li>
                  <strong>INTERPOL</strong>{" "}
                  {es
                    ? "— NCB Luxemburgo, I-24/7 conectado, delitos financieros"
                    : "— NCB Luxembourg, I-24/7 connected, financial crimes"}
                </li>
                <li>
                  <strong>SatCen/SpaceSec</strong>{" "}
                  {es
                    ? "— Luxemburgo 5to país en sector espacial global, SES/Intelsat"
                    : "— Luxembourg 5th country in global space sector, SES/Intelsat"}
                </li>
                <li>
                  <strong>ENISA</strong>{" "}
                  {es
                    ? "— Agencia Ciberseguridad UE CERT-LU, NIS2 Critical"
                    : "— EU Cybersecurity Agency CERT-LU, NIS2 Critical"}
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
                {es ? "Logística y Transporte" : "Logistics & Transport"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>Cargolux</strong>{" "}
                  {es
                    ? "— mayor aerolínea cargo Europa, hub LUX, ~100 destinos"
                    : "— largest European cargo airline, LUX hub, ~100 destinations"}
                </li>
                <li>
                  <strong>{es ? "Aeropuerto LUX" : "LUX Airport"}</strong>{" "}
                  {es ? "— 4M+ pax + >900K t carga/año" : "— 4M+ pax + >900K t cargo/yr"}
                </li>
                <li>
                  <strong>CFL/Rail</strong>{" "}
                  {es
                    ? "— Ferrocarriles Luxemburgo, 1er país transporte público gratuito 2020"
                    : "— Luxembourg Railways, 1st country free public transport 2020"}
                </li>
                <li>
                  <strong>{es ? "Puerto fluvial Mertert" : "Mertert River Port"}</strong>{" "}
                  {es
                    ? "— acceso Mosela-Rin, carga fluvial Europa"
                    : "— Moselle-Rhine access, European river cargo"}
                </li>
                <li>
                  <strong>{es ? "Tripoint Bélgica-Alemania" : "Belgium-Germany Tripoint"}</strong>{" "}
                  {es
                    ? "— frontera triple, controles Schengen coordinados"
                    : "— triple border, coordinated Schengen controls"}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {es ? "Finanzas y Tecnología" : "Finance & Technology"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "200+ Bancos" : "200+ Banks"}</strong>{" "}
                  {es
                    ? "— Deutsche Bank, BNP, HSBC, SWIFT conectado, €1T+ deposits"
                    : "— Deutsche Bank, BNP, HSBC, SWIFT connected, €1T+ deposits"}
                </li>
                <li>
                  <strong>{es ? "Fondos Inversión €5T+ AUM" : "Investment Funds €5T+ AUM"}</strong>{" "}
                  {es
                    ? "— 2do mayor centro fondos mundo tras EEUU, CSSF regulador"
                    : "— 2nd largest funds center in world after USA, CSSF regulator"}
                </li>
                <li>
                  <strong>ArcelorMittal</strong>{" "}
                  {es
                    ? "— HQ global Luxemburgo, acería Differdange/Belval"
                    : "— Global HQ Luxembourg, Differdange/Belval steel mills"}
                </li>
                <li>
                  <strong>{es ? "Centros de Datos" : "Data Centers"}</strong>{" "}
                  {es
                    ? "— AWS, Google, OVH, Luxconnect, Tier IV certificado"
                    : "— AWS, Google, OVH, Luxconnect, Tier IV certified"}
                </li>
                <li>
                  <strong>SES/Intelsat</strong>{" "}
                  {es
                    ? "— operadores satélite globales HQ, fleet >50 satélites"
                    : "— global satellite operators HQ, fleet >50 satellites"}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {es ? "Marco Legal y Cumplimiento" : "Legal Framework & Compliance"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>GDPR/CNPD</strong>{" "}
                  {es
                    ? "— Commission Nationale pour la Protection des Données"
                    : "— Commission Nationale pour la Protection des Données"}
                </li>
                <li>
                  <strong>CSSF</strong>{" "}
                  {es
                    ? "— Regulador financiero, NIS2 sector financiero crítico"
                    : "— Financial regulator, NIS2 critical financial sector"}
                </li>
                <li>
                  <strong>ILR</strong>{" "}
                  {es
                    ? "— Regulador telecomunicaciones, licencias TETRA/LTE/5G"
                    : "— Telecoms regulator, TETRA/LTE/5G licenses"}
                </li>
                <li>
                  <strong>NIS2/CERT-LU</strong>{" "}
                  {es
                    ? "— Centro Respuesta Incidentes, ENISA conectado"
                    : "— Incident Response Center, ENISA connected"}
                </li>
                <li>
                  <strong>BCE/EUR</strong>{" "}
                  {es
                    ? "— Miembro zona euro fundador, BCL Banco Central"
                    : "— Founding eurozone member, BCL Central Bank"}
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
              ? "Capacidades KabatOne para Luxemburgo"
              : "KabatOne Capabilities for Luxembourg"}
          </h2>
          <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto">
            {es
              ? "Plataforma Avalon protegiendo las instituciones UE/NATO, el centro financiero global y la infraestructura crítica de Luxemburgo."
              : "Avalon platform protecting Luxembourg's EU/NATO institutions, global financial center, and critical infrastructure."}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: es ? "Protección Instituciones UE y NATO" : "EU & NATO Institution Protection",
                desc: es
                  ? "Sistema de seguridad perimetral para el Tribunal de Justicia UE, Tribunal de Cuentas, Comisión Europea (Kirchberg), cuartel NATO y centros de datos críticos — vigilancia CCTV perimetral, control de acceso biométrico, detección de drones y gestión de amenazas internas."
                  : "Perimeter security system for EU Court of Justice, Court of Auditors, European Commission (Kirchberg), NATO headquarters, and critical data centers — perimeter CCTV surveillance, biometric access control, drone detection, and insider threat management.",
                icon: "🏛️",
              },
              {
                title: es ? "Seguridad Centro Financiero y Centros de Datos" : "Financial Center & Data Center Security",
                desc: es
                  ? "Vigilancia integrada para el distrito financiero de Luxemburgo-Ciudad — CCTV en 200+ bancos y fondos, integración con CSSF para alertas AML, coordinación con CERT-LU para ciberincidentes físicos, y seguridad de centros de datos AWS/Google/OVH."
                  : "Integrated surveillance for Luxembourg City financial district — CCTV at 200+ banks and funds, CSSF integration for AML alerts, CERT-LU coordination for physical-cyber incidents, and AWS/Google/OVH data center security.",
                icon: "💰",
              },
              {
                title: es ? "Seguridad Aeropuerto y Cargolux" : "Airport & Cargolux Security",
                desc: es
                  ? "Sistema integral para el Aeropuerto LUX (4M+ pax + 900K t carga) y Cargolux — ANPR en accesos de carga, CCTV en terminal y zona técnica, despacho CAD 112, gestión de incidentes en aeronaves y coordinación con Policía del Aeropuerto."
                  : "Comprehensive system for LUX Airport (4M+ pax + 900K t cargo) and Cargolux — ANPR at cargo access points, CCTV at terminal and technical zone, CAD 112 dispatch, aircraft incident management, and Airport Police coordination.",
                icon: "✈️",
              },
              {
                title: es ? "Cumplimiento CNPD/GDPR y NIS2" : "CNPD/GDPR & NIS2 Compliance",
                desc: es
                  ? "Arquitectura conforme GDPR pleno y CNPD, NIS2 para entidades esenciales con CERT-LU, integración ILR para TETRA/LTE/5G, soporte regulatorio CSSF para sector financiero y cumplimiento NIS2 para centros de datos como infraestructura crítica digital."
                  : "Architecture with full GDPR compliance and CNPD, NIS2 for essential entities with CERT-LU, ILR integration for TETRA/LTE/5G, CSSF regulatory support for financial sector, and NIS2 compliance for data centers as critical digital infrastructure.",
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
                  ? "¿Cuáles son las principales fuerzas de seguridad de Luxemburgo?"
                  : "What are Luxembourg's main security forces?",
                a: es
                  ? "La Policía Grand-Ducal ~1.700 agentes con UEI antiterrorista, SREL inteligencia del Estado y el Ejército ~900 como miembro fundador NATO 1949. La pequeña superficie requiere alta coordinación interinstitucional con Europol, INTERPOL y CERT-LU."
                  : "Grand-Ducal Police ~1,700 officers with UEI counter-terrorism unit, SREL State Intelligence Service, and Army ~900 as NATO founding member 1949. The small territory requires high inter-institutional coordination with Europol, INTERPOL, and CERT-LU.",
              },
              {
                q: es
                  ? "¿Por qué Luxemburgo es un centro de seguridad crítico para la UE?"
                  : "Why is Luxembourg a critical EU security hub?",
                a: es
                  ? "Luxemburgo alberga el Tribunal de Justicia de la UE, el Tribunal de Cuentas Europeo, oficinas de la Comisión Europea, el mayor centro de fondos de inversión europeo (€5T+ AUM), centros de datos críticos y operadores de satélites globales SES/Intelsat."
                  : "Luxembourg hosts the EU Court of Justice, European Court of Auditors, European Commission offices, Europe's largest investment fund center (€5T+ AUM), critical data centers, and global satellite operators SES/Intelsat.",
              },
              {
                q: es
                  ? "¿Qué sectores económicos requieren seguridad crítica en Luxemburgo?"
                  : "What economic sectors require critical security in Luxembourg?",
                a: es
                  ? "El sector financiero (200+ bancos, €5T+ fondos, CSSF), los centros de datos (AWS, Google, OVH), ArcelorMittal HQ global, Cargolux hub logístico y SES/Intelsat satélites son los activos que requieren protección de alto nivel."
                  : "The financial sector (200+ banks, €5T+ funds, CSSF), data centers (AWS, Google, OVH), ArcelorMittal global HQ, Cargolux logistics hub, and SES/Intelsat satellites are the high-protection assets.",
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
            ? "¿Listo para modernizar la seguridad pública de Luxemburgo?"
            : "Ready to modernize Luxembourg's public safety?"
        }
        subtitle={
          es
            ? "KabatOne integra Policía Grand-Ducal, SREL y Ejército en una plataforma unificada — instituciones UE/NATO, centro financiero €5T+, Cargolux, centros de datos críticos y cumplimiento GDPR/NIS2."
            : "KabatOne integrates Grand-Ducal Police, SREL, and Army in one unified platform — EU/NATO institutions, €5T+ financial center, Cargolux, critical data centers, and GDPR/NIS2 compliance."
        }
      />
      <Footer es={es} />
    </>
  );
}
