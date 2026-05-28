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
  return generatePageMetadata("publicSafetySoftwareBosniaHerzegovina", locale);
}

export default async function PublicSafetySoftwareBosniaHerzegovina({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const schema = [
    articleSchema(
      es
        ? "Software de Seguridad Pública para Bosnia y Herzegovina | SIPA/OSA-OBA, Corredor Vc, Puerto de Ploče y Proceso UE – KabatOne"
        : "Public Safety Software for Bosnia and Herzegovina | SIPA/OSA-OBA, Corridor Vc, Port of Ploče & EU Process – KabatOne",
      es
        ? "KabatOne ofrece plataforma de seguridad pública para Bosnia y Herzegovina — SIPA policía estatal, OSA-OBA inteligencia, Corredor Vc Budapest-Ploče, gestión entidades RS/FBiH/Brčko, proceso candidatura UE 2022 y coordinación EUFOR Althea/Frontex."
        : "KabatOne delivers public safety platform for Bosnia and Herzegovina — SIPA state police, OSA-OBA intelligence, Corridor Vc Budapest-Ploče, RS/FBiH/Brčko entity management, EU candidacy process 2022, and EUFOR Althea/Frontex coordination.",
      es
        ? "https://kabatone.com/es/resources/public-safety-software-bosnia-herzegovina/"
        : "https://kabatone.com/resources/public-safety-software-bosnia-herzegovina/",
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
          ? "Software de Seguridad Pública para Bosnia y Herzegovina"
          : "Public Safety Software for Bosnia and Herzegovina",
        url: es
          ? "https://kabatone.com/es/resources/public-safety-software-bosnia-herzegovina/"
          : "https://kabatone.com/resources/public-safety-software-bosnia-herzegovina/",
      },
    ]),
    faqPageSchema([
      {
        question: es
          ? "¿Cuál es la estructura policial de Bosnia y Herzegovina?"
          : "What is the police structure in Bosnia and Herzegovina?",
        answer: es
          ? "Bosnia tiene un sistema policial descentralizado: SIPA (Agencia de Investigaciones y Protección del Estado), dos policías de entidad — Ministerio Interior FBiH y MUP RS — más Policía del Brčko District, con coordinación Dirección de Policía estatal."
          : "Bosnia has a decentralized police system: SIPA (State Investigation and Protection Agency), two entity police forces — MoI FBiH and MUP RS — plus Brčko District Police, coordinated by the State Police Directorate.",
      },
      {
        question: es
          ? "¿Qué es el Corredor Vc y por qué es importante?"
          : "What is Corridor Vc and why is it important?",
        answer: es
          ? "El Corredor Vc es la autopista E73 de 345 km que conecta Budapest con el Puerto de Ploče (Croacia) atravesando Bosnia — eje económico central para la región, con grandes proyectos de infraestructura financiados por UE/China."
          : "Corridor Vc is the 345 km E73 motorway connecting Budapest to Port of Ploče (Croatia) through Bosnia — the central economic axis for the region, with major infrastructure projects funded by EU/China.",
      },
      {
        question: es
          ? "¿Cuál es el estado de Bosnia en su proceso de adhesión a la UE?"
          : "What is Bosnia's status in the EU accession process?",
        answer: es
          ? "Bosnia obtuvo el estatus de candidato oficial a la UE en diciembre 2022. Las negociaciones de adhesión comenzaron en 2024, con el proceso EUFOR Althea continuando como misión de estabilización NATO."
          : "Bosnia received official EU candidate status in December 2022. Accession negotiations began in 2024, with EUFOR Althea continuing as the NATO stabilization mission.",
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
            🇧🇦 {es ? "Europa — Bosnia y Herzegovina" : "Europe — Bosnia and Herzegovina"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {es
              ? "Software de Seguridad Pública para Bosnia y Herzegovina"
              : "Public Safety Software for Bosnia and Herzegovina"}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            {es
              ? "Plataforma unificada para SIPA, OSA-OBA y fuerzas de entidad — Corredor Vc E73, candidatura UE 2022 y coordinación EUFOR Althea/FRONTEX."
              : "Unified platform for SIPA, OSA-OBA, and entity forces — Corridor Vc E73, EU candidacy 2022, and EUFOR Althea/FRONTEX coordination."}
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              es ? "SIPA Policía Estatal" : "SIPA State Police",
              es ? "Corredor Vc E73" : "Corridor Vc E73",
              es ? "Candidato UE 2022" : "EU Candidate 2022",
              es ? "EUFOR Althea" : "EUFOR Althea",
              es ? "Entidades RS/FBiH" : "Entities RS/FBiH",
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
                {es ? "Policía y Agencias de Seguridad" : "Police & Security Agencies"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>SIPA</strong>{" "}
                  {es
                    ? "— Agencia Investigaciones y Protección del Estado, crimen organizado/terrorismo"
                    : "— State Investigation and Protection Agency, organized crime/terrorism"}
                </li>
                <li>
                  <strong>OSA-OBA</strong>{" "}
                  {es
                    ? "— Agencia de Inteligencia y Seguridad, espionaje/contraterrorismo"
                    : "— Intelligence and Security Agency, espionage/counter-terrorism"}
                </li>
                <li>
                  <strong>{es ? "MUP FBiH" : "MoI FBiH"}</strong>{" "}
                  {es
                    ? "— Ministerio Interior Federación BiH, 10 cantones"
                    : "— Ministry of Interior Federation BiH, 10 cantons"}
                </li>
                <li>
                  <strong>{es ? "MUP RS" : "MUP RS"}</strong>{" "}
                  {es
                    ? "— Ministerio Interior República Srpska, control centralizado"
                    : "— Ministry of Interior Republika Srpska, centralized control"}
                </li>
                <li>
                  <strong>{es ? "Policía Brčko" : "Brčko Police"}</strong>{" "}
                  {es
                    ? "— Distrito autónomo con fuerza policial propia"
                    : "— Autonomous district with independent police force"}
                </li>
                <li>
                  <strong>GRANIT</strong>{" "}
                  {es
                    ? "— Unidad de crimen organizado fronterizo, operaciones conjuntas"
                    : "— Cross-border organized crime unit, joint operations"}
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {es ? "Misiones Internacionales y Fronteras" : "International Missions & Borders"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>EUFOR Althea</strong>{" "}
                  {es
                    ? "— Misión UE/NATO ~700 soldados, estabilización post-Dayton"
                    : "— EU/NATO mission ~700 soldiers, post-Dayton stabilization"}
                </li>
                <li>
                  <strong>SFOR/Successor</strong>{" "}
                  {es
                    ? "— Legado NATO, cooperación continuada en seguridad"
                    : "— NATO legacy, continued security cooperation"}
                </li>
                <li>
                  <strong>FRONTEX</strong>{" "}
                  {es
                    ? "— Acuerdo de Estado huésped, vigilancia ruta balcánica"
                    : "— Host State Agreement, Balkan route surveillance"}
                </li>
                <li>
                  <strong>{es ? "Frontera con Croacia" : "Croatia Border"}</strong>{" "}
                  {es
                    ? "— 1.009 km, frontera exterior Schengen/UE desde 2023"
                    : "— 1,009 km, Schengen/EU external border since 2023"}
                </li>
                <li>
                  <strong>{es ? "Frontera con Serbia" : "Serbia Border"}</strong>{" "}
                  {es
                    ? "— 345 km, corredor migratorio activo"
                    : "— 345 km, active migration corridor"}
                </li>
                <li>
                  <strong>INTERPOL</strong>{" "}
                  {es
                    ? "— Miembro pleno, NCB Sarajevo, I-24/7 conectado"
                    : "— Full member, NCB Sarajevo, I-24/7 connected"}
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
                {es ? "Corredores y Transporte" : "Corridors & Transport"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Corredor Vc" : "Corridor Vc"}</strong>{" "}
                  {es
                    ? "— E73 345 km Budapest-Ploče, mayor proyecto infraestructura nacional"
                    : "— E73 345 km Budapest-Ploče, largest national infrastructure project"}
                </li>
                <li>
                  <strong>{es ? "Puerto de Ploče (Croacia)" : "Port of Ploče (Croatia)"}</strong>{" "}
                  {es
                    ? "— salida marítima principal BiH, >5M t/año hinterland"
                    : "— main maritime exit BiH, >5M t/yr hinterland"}
                </li>
                <li>
                  <strong>{es ? "Autopista A1 Sarajevo-Mostar" : "A1 Motorway Sarajevo-Mostar"}</strong>{" "}
                  {es ? "— completada 2022, €1,5B inversión" : "— completed 2022, €1.5B investment"}
                </li>
                <li>
                  <strong>{es ? "Aeropuerto Sarajevo SJJ" : "Sarajevo Airport SJJ"}</strong>{" "}
                  {es ? "— 1,5M pax/año, en expansión" : "— 1.5M pax/yr, expanding"}
                </li>
                <li>
                  <strong>{es ? "Red ferroviaria ŽFBH/ŽRS" : "Railway ŽFBH/ŽRS"}</strong>{" "}
                  {es
                    ? "— dos redes de entidad, integración TEN-T pendiente"
                    : "— two entity networks, TEN-T integration pending"}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {es ? "Energía e Industria" : "Energy & Industry"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Lignito y Carbón" : "Lignite & Coal"}</strong>{" "}
                  {es
                    ? "— reservas 3.900 Mt, Elektroprivreda BiH exporta electricidad"
                    : "— 3,900 Mt reserves, Elektroprivreda BiH exports electricity"}
                </li>
                <li>
                  <strong>ArcelorMittal Zenica</strong>{" "}
                  {es
                    ? "— acería integrada, mayor empleador privado BiH"
                    : "— integrated steel mill, largest private employer BiH"}
                </li>
                <li>
                  <strong>Aluminij Mostar</strong>{" "}
                  {es
                    ? "— fundición aluminio, >100.000 t/año histórico"
                    : "— aluminium smelter, >100,000 t/yr historic"}
                </li>
                <li>
                  <strong>{es ? "Hidroeléctrica Neretva/Drina" : "Hydro Neretva/Drina"}</strong>{" "}
                  {es
                    ? "— ~2 GW capacidad instalada"
                    : "— ~2 GW installed capacity"}
                </li>
                <li>
                  <strong>{es ? "Forestal/Madera" : "Forestry/Timber"}</strong>{" "}
                  {es
                    ? "— 53% territorio forestal, exportaciones €500M+/año"
                    : "— 53% forest territory, exports €500M+/yr"}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {es ? "Marco Legal y Cumplimiento" : "Legal Framework & Compliance"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "Ley de Protección de Datos" : "Data Protection Law"}</strong>{" "}
                  {es
                    ? "— Agencia de Protección de Datos AZLP, GDPR-alineada"
                    : "— Data Protection Agency AZLP, GDPR-aligned"}
                </li>
                <li>
                  <strong>{es ? "Ley de Contratación Pública" : "Public Procurement Law"}</strong>{" "}
                  {es
                    ? "— AJN Agencia de Javnih Nabavki, portal e-Procurement"
                    : "— AJN Agency for Public Procurement, e-Procurement portal"}
                </li>
                <li>
                  <strong>{es ? "Candidato UE 2022" : "EU Candidate 2022"}</strong>{" "}
                  {es
                    ? "— Candidato oficial diciembre 2022, negociaciones 2024"
                    : "— Official candidate December 2022, negotiations 2024"}
                </li>
                <li>
                  <strong>CBBH</strong>{" "}
                  {es
                    ? "— Banco Central BiH, moneda BAM (marco convertible)"
                    : "— Central Bank BiH, currency BAM (convertible mark)"}
                </li>
                <li>
                  <strong>RAK</strong>{" "}
                  {es
                    ? "— Regulatorio de Comunicaciones BiH, licencias TETRA/LTE"
                    : "— Regulatory Agency Communications BiH, TETRA/LTE licenses"}
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
              ? "Capacidades KabatOne para Bosnia y Herzegovina"
              : "KabatOne Capabilities for Bosnia and Herzegovina"}
          </h2>
          <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto">
            {es
              ? "Plataforma Avalon unificando múltiples fuerzas de entidad, despacho CAD y gestión de fronteras para el complejo marco institucional de BiH."
              : "Avalon platform unifying multiple entity forces, CAD dispatch, and border management for BiH's complex institutional framework."}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: es ? "Interoperabilidad Multi-Entidad" : "Multi-Entity Interoperability",
                desc: es
                  ? "Plataforma unificada que conecta SIPA, MUP FBiH, MUP RS y Policía Brčko en una interfaz única — compartición de datos en tiempo real respetando jurisdicciones de entidad, aprobado por el marco constitucional de Dayton."
                  : "Unified platform connecting SIPA, MoI FBiH, MUP RS, and Brčko Police in one interface — real-time data sharing respecting entity jurisdictions, aligned with the Dayton constitutional framework.",
                icon: "🤝",
              },
              {
                title: es ? "Vigilancia Corredor Vc y Fronteras" : "Corridor Vc & Border Surveillance",
                desc: es
                  ? "Monitorización de los 345 km del Corredor Vc E73, gestión de 15+ puestos fronterizos activos con ANPR, CCTV y alertas IBMS, coordinación con FRONTEX en la ruta balcánica y la frontera exterior Schengen de Croacia."
                  : "Monitoring of Corridor Vc E73 345 km, management of 15+ active border posts with ANPR, CCTV, and IBMS alerts, coordination with FRONTEX on the Balkan route and Croatia's Schengen external border.",
                icon: "🛂",
              },
              {
                title: es ? "Centro de Mando Sarajevo" : "Sarajevo Command Center",
                desc: es
                  ? "CCC para Sarajevo y ciudades principales — integración CCTV multi-entidad, CAD 122/123 despacho emergencias, gestión de incidentes en eventos y coordinación con EUFOR Althea y misiones internacionales."
                  : "CCC for Sarajevo and major cities — multi-entity CCTV integration, CAD 122/123 emergency dispatch, event incident management, and coordination with EUFOR Althea and international missions.",
                icon: "🏙️",
              },
              {
                title: es ? "Cumplimiento AZLP y Proceso UE" : "AZLP Compliance & EU Process",
                desc: es
                  ? "Arquitectura GDPR-ready cumpliendo la Ley de Protección de Datos de BiH y supervisión AZLP, integración RAK para comunicaciones TETRA/LTE, y soporte para los capítulos de adhesión UE en seguridad, justicia y asuntos interiores."
                  : "GDPR-ready architecture complying with BiH Data Protection Law and AZLP supervision, RAK integration for TETRA/LTE communications, and support for EU accession chapters on security, justice, and interior affairs.",
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
                  ? "¿Cuál es la estructura policial de Bosnia y Herzegovina?"
                  : "What is the police structure in Bosnia and Herzegovina?",
                a: es
                  ? "Bosnia tiene un sistema policial descentralizado: SIPA (Agencia de Investigaciones y Protección del Estado), dos policías de entidad — Ministerio Interior FBiH y MUP RS — más Policía del Brčko District, coordinadas a nivel estatal por la Dirección de Policía."
                  : "Bosnia has a decentralized police system: SIPA (State Investigation and Protection Agency), two entity police forces — MoI FBiH and MUP RS — plus Brčko District Police, coordinated at state level by the Police Directorate.",
              },
              {
                q: es
                  ? "¿Qué es el Corredor Vc y por qué es importante?"
                  : "What is Corridor Vc and why is it important?",
                a: es
                  ? "El Corredor Vc es la autopista E73 de 345 km que conecta Budapest con el Puerto de Ploče (Croacia) atravesando Bosnia — eje económico central para la región, con proyectos financiados por UE y China."
                  : "Corridor Vc is the 345 km E73 motorway connecting Budapest to Port of Ploče (Croatia) through Bosnia — the central economic axis for the region, with projects funded by EU and China.",
              },
              {
                q: es
                  ? "¿Cuál es el estado de Bosnia en su proceso de adhesión a la UE?"
                  : "What is Bosnia's status in the EU accession process?",
                a: es
                  ? "Bosnia obtuvo el estatus de candidato oficial a la UE en diciembre 2022. Las negociaciones de adhesión comenzaron en 2024, con EUFOR Althea continuando como misión de estabilización."
                  : "Bosnia received official EU candidate status in December 2022. Accession negotiations began in 2024, with EUFOR Althea continuing as the stabilization mission.",
              },
              {
                q: es
                  ? "¿Cómo puede KabatOne gestionar el complejo marco institucional de BiH?"
                  : "How can KabatOne manage BiH's complex institutional framework?",
                a: es
                  ? "KabatOne utiliza una arquitectura multi-tenancy con capas de permisos por jurisdicción, permitiendo a SIPA, MUP FBiH, MUP RS y Policía Brčko trabajar en la misma plataforma respetando la soberanía de cada entidad y el marco constitucional de Dayton."
                  : "KabatOne uses a multi-tenancy architecture with jurisdiction-based permission layers, allowing SIPA, MoI FBiH, MUP RS, and Brčko Police to work on the same platform while respecting each entity's sovereignty and the Dayton constitutional framework.",
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
            ? "¿Listo para unificar la seguridad pública de Bosnia y Herzegovina?"
            : "Ready to unify Bosnia and Herzegovina's public safety?"
        }
        subtitle={
          es
            ? "KabatOne conecta SIPA, MUP FBiH, MUP RS y Policía Brčko en una plataforma unificada — Corredor Vc, gestión de fronteras, cumplimiento AZLP/GDPR y soporte para el proceso de adhesión UE."
            : "KabatOne connects SIPA, MoI FBiH, MUP RS, and Brčko Police in one unified platform — Corridor Vc, border management, AZLP/GDPR compliance, and support for the EU accession process."
        }
      />
      <Footer es={es} />
    </>
  );
}
