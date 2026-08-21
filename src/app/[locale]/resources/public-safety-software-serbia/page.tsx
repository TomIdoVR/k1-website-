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
  return generatePageMetadata("publicSafetySoftwareSerbia", locale);
}

export default async function PublicSafetySoftwareSerbia({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const schema = [
    articleSchema(
      es
        ? "Software de Seguridad Pública para Serbia | MUP/BIA, Rio Danubio, Corredor Paneuropeo y Schengen – KabatOne"
        : "Public Safety Software for Serbia | MUP/BIA, Danube River, Pan-European Corridor & Schengen Path – KabatOne",
      es
        ? "KabatOne ofrece plataforma de seguridad pública para el MUP serbio, BIA inteligencia y Policía de Fronteras — gestión Corredor X y VII, protección Puerto de Belgrado y Novi Sad, seguridad Rio Danubio 588 km, proceso candidatura UE/Schengen y coordinación FRONTEX/SELEC."
        : "KabatOne delivers public safety platform for Serbian MUP, BIA intelligence, and Border Police — Corridor X and VII management, Port of Belgrade and Novi Sad protection, Danube 588 km river security, EU/Schengen candidacy process, and FRONTEX/SELEC coordination.",
      es
        ? "https://kabatone.com/es/resources/public-safety-software-serbia"
        : "https://kabatone.com/resources/public-safety-software-serbia",
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
          ? "Software de Seguridad Pública para Serbia"
          : "Public Safety Software for Serbia",
        url: es
          ? "https://kabatone.com/es/resources/public-safety-software-serbia"
          : "https://kabatone.com/resources/public-safety-software-serbia",
      },
    ]),
    faqPageSchema([
      {
        question: es
          ? "¿Cuáles son las principales fuerzas de seguridad de Serbia?"
          : "What are Serbia's main security forces?",
        answer: es
          ? "El MUP (Ministerio del Interior) ~35.000 agentes con Policía Nacional, Gendarmería y BIA (inteligencia interior), además de la Policía de Fronteras y unidades especiales como la SAJ y la JSO."
          : "The MUP (Ministry of Interior) ~35,000 officers with National Police, Gendarmerie, and BIA (domestic intelligence), plus Border Police and special units SAJ and JSO.",
      },
      {
        question: es
          ? "¿Qué infraestructura crítica tiene Serbia?"
          : "What critical infrastructure does Serbia have?",
        answer: es
          ? "El Corredor X (E75/E80) conecta Europa Central con el Mediterráneo; el Corredor VII es el Danubio navegable 588 km; el Puerto de Belgrado y Novi Sad; la Central Nuclear Búlgara de Kozloduy importa electricidad; el NIS/Gazprom suministra gas; y el Aeropuerto de Belgrado BEG Vinci 6M+ pax/año."
          : "Corridor X (E75/E80) connects Central Europe to the Mediterranean; Corridor VII is the navigable Danube 588 km; Port of Belgrade and Novi Sad; Bulgarian Kozloduy nuclear plant imports electricity; NIS/Gazprom gas supply; Belgrade Airport BEG Vinci 6M+ pax/yr.",
      },
      {
        question: es
          ? "¿Cómo gestiona Serbia su candidatura a la UE y Schengen?"
          : "How does Serbia manage its EU/Schengen candidacy?",
        answer: es
          ? "Serbia es candidata oficial a la UE desde 2012 con proceso de adhesión activo. La gestión de fronteras integra IBMS, lectores biométricos y coordinación FRONTEX/SELEC para la convergencia con estándares Schengen."
          : "Serbia has been an official EU candidate since 2012 with active accession process. Border management integrates IBMS, biometric readers, and FRONTEX/SELEC coordination for Schengen standard convergence.",
      },
      {
        question: es
          ? "¿Cómo puede KabatOne integrarse con los sistemas serbios?"
          : "How can KabatOne integrate with Serbian systems?",
        answer: es
          ? "KabatOne se integra con los sistemas CAD/112 del MUP, lectores de matrículas ANPR en los 15 pasos fronterizos principales, el sistema de gestión del tráfico fluvial del Danubio y los sistemas CCTV de Belgrado, cumpliendo ZZPPL (ley de datos personales) y normativa NORA."
          : "KabatOne integrates with MUP CAD/112 systems, ANPR license plate readers at 15 major border crossings, Danube inland waterway traffic management systems, and Belgrade CCTV networks, complying with ZZPPL (personal data law) and NORA regulations.",
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
            🇷🇸 {es ? "Europa — Serbia" : "Europe — Serbia"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {es
              ? "Software de Seguridad Pública para Serbia"
              : "Public Safety Software for Serbia"}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            {es
              ? "Plataforma unificada para el MUP, BIA y Policía de Fronteras — Corredor X/VII, Danubio 588 km, candidatura UE/Schengen y coordinación FRONTEX/SELEC."
              : "Unified platform for MUP, BIA, and Border Police — Corridor X/VII, Danube 588 km, EU/Schengen candidacy, and FRONTEX/SELEC coordination."}
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              es ? "MUP ~35K agentes" : "MUP ~35K officers",
              es ? "Corredor X E75/E80" : "Corridor X E75/E80",
              es ? "Danubio 588 km" : "Danube 588 km",
              es ? "Candidato UE 2012" : "EU Candidate 2012",
              es ? "FRONTEX/SELEC" : "FRONTEX/SELEC",
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
                {es ? "MUP y Fuerzas de Orden" : "MUP & Law Enforcement"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>{es ? "MUP Serbia" : "MUP Serbia"}</strong>{" "}
                  {es
                    ? "~35.000 agentes, 27 subdivisiones distritales"
                    : "~35,000 officers, 27 district subdivisions"}
                </li>
                <li>
                  <strong>{es ? "Gendarmería" : "Gendarmerie"}</strong>{" "}
                  {es
                    ? "unidad paramilitar élite, operaciones antiterroristas"
                    : "paramilitary elite unit, counter-terrorism operations"}
                </li>
                <li>
                  <strong>SAJ</strong>{" "}
                  {es
                    ? "— Unidad Antiterrorista Especial, rehenes/crisis"
                    : "— Special Anti-Terrorist Unit, hostage/crisis"}
                </li>
                <li>
                  <strong>JSO</strong>{" "}
                  {es
                    ? "— Unidad de Operaciones Especiales, operaciones encubiertas"
                    : "— Special Operations Unit, covert operations"}
                </li>
                <li>
                  <strong>{es ? "Policía de Fronteras" : "Border Police"}</strong>{" "}
                  {es
                    ? "15+ pasos fronterizos principales, IBMS biométrico"
                    : "15+ major border crossings, biometric IBMS"}
                </li>
                <li>
                  <strong>BIA</strong>{" "}
                  {es
                    ? "— Inteligencia interior, coordinación SELEC/Europol"
                    : "— Domestic intelligence, SELEC/Europol coordination"}
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {es ? "Defensa y Coordinación Regional" : "Defense & Regional Coordination"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>VSJ</strong>{" "}
                  {es
                    ? "— Ejército serbio ~25.000 activos, neutralidad NATO"
                    : "— Serbian Armed Forces ~25,000 active, NATO neutrality"}
                </li>
                <li>
                  <strong>SELEC</strong>{" "}
                  {es
                    ? "— Centro de Cooperación Policial Sudeste Europa, HQ Bucarest"
                    : "— Southeast European Law Enforcement Centre, HQ Bucharest"}
                </li>
                <li>
                  <strong>FRONTEX</strong>{" "}
                  {es
                    ? "— Acuerdo de Estado huésped, NCC Belgrado, operaciones conjuntas"
                    : "— Host State Agreement, NCC Belgrade, joint operations"}
                </li>
                <li>
                  <strong>OSCE</strong>{" "}
                  {es
                    ? "— Misión en Serbia, reforma policial y rule of law"
                    : "— Mission to Serbia, police reform and rule of law"}
                </li>
                <li>
                  <strong>{es ? "CERK/RESC" : "RESC"}</strong>{" "}
                  {es
                    ? "— Centro de Emergencias 112, despacho integrado nacional"
                    : "— Emergency Center 112, integrated national dispatch"}
                </li>
                <li>
                  <strong>Europol</strong>{" "}
                  {es
                    ? "— Acuerdo operativo, crimen organizado balcánico"
                    : "— Operational agreement, Balkan organized crime"}
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
                  <strong>{es ? "Corredor X" : "Corridor X"}</strong>{" "}
                  {es
                    ? "— E75/E80 1.300 km, Salzburgo-Atenas, tráfico de mercancías y migración"
                    : "— E75/E80 1,300 km, Salzburg-Athens, freight and migration traffic"}
                </li>
                <li>
                  <strong>{es ? "Corredor VII" : "Corridor VII"}</strong>{" "}
                  {es
                    ? "— Danubio navegable 588 km, 7 puertos fluviales"
                    : "— Navigable Danube 588 km, 7 river ports"}
                </li>
                <li>
                  <strong>{es ? "Puerto de Belgrado" : "Port of Belgrade"}</strong>{" "}
                  {es ? "— hub fluvial multi-modal, ~3M t/año" : "— multi-modal river hub, ~3M t/yr"}
                </li>
                <li>
                  <strong>{es ? "Aeropuerto BEG" : "Airport BEG"}</strong>{" "}
                  {es
                    ? "— Nikola Tesla, concesión Vinci 25 años, 6M+ pax/año"
                    : "— Nikola Tesla, Vinci 25-yr concession, 6M+ pax/yr"}
                </li>
                <li>
                  <strong>{es ? "Ferrocarriles serbios" : "Serbian Railways"}</strong>{" "}
                  {es
                    ? "— RS integración red ferroviaria europea TEN-T"
                    : "— ŽS TEN-T European rail network integration"}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {es ? "Energía e Industria" : "Energy & Industry"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>NIS/Gazprom Neft</strong>{" "}
                  {es
                    ? "— refinería Pančevo 4,8M t/año, TurkStream gasducto"
                    : "— Pančevo refinery 4.8M t/yr, TurkStream pipeline"}
                </li>
                <li>
                  <strong>{es ? "EPS Electroenergía" : "EPS Power"}</strong>{" "}
                  {es
                    ? "— 38 plantas térmicas/hidro, ~7 GW capacidad instalada"
                    : "— 38 thermal/hydro plants, ~7 GW installed capacity"}
                </li>
                <li>
                  <strong>{es ? "Mina Jadar (litio)" : "Jadar Mine (lithium)"}</strong>{" "}
                  {es
                    ? "— Rio Tinto, reserva litio más grande Europa, controversia ambiental"
                    : "— Rio Tinto, largest lithium deposit Europe, environmental controversy"}
                </li>
                <li>
                  <strong>{es ? "HBIS Serbia (acero)" : "HBIS Serbia (steel)"}</strong>{" "}
                  {es
                    ? "— Smederevo, antigua US Steel, 6.500 empleados"
                    : "— Smederevo, former US Steel, 6,500 employees"}
                </li>
                <li>
                  <strong>{es ? "Cobre Bor/RTB" : "Copper Bor/RTB"}</strong>{" "}
                  {es
                    ? "— Zijin Mining, 4ta reserva cobre Europa"
                    : "— Zijin Mining, 4th copper reserve Europe"}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {es ? "Marco Legal y Cumplimiento" : "Legal Framework & Compliance"}
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>ZZPPL</strong>{" "}
                  {es
                    ? "— Ley de Protección de Datos Personales 2018, GDPR-alineada, supervisión Poverenik"
                    : "— Personal Data Protection Law 2018, GDPR-aligned, Poverenik supervision"}
                </li>
                <li>
                  <strong>NORA</strong>{" "}
                  {es
                    ? "— Regulador telecomunicaciones, licencias TETRA/radio"
                    : "— Telecoms regulator, TETRA/radio licenses"}
                </li>
                <li>
                  <strong>{es ? "ZJN" : "ZJN"}</strong>{" "}
                  {es
                    ? "— Ley de Contratación Pública, UJNPP portal procurement"
                    : "— Public Procurement Law, UJNPP procurement portal"}
                </li>
                <li>
                  <strong>{es ? "Candidatura UE" : "EU Candidacy"}</strong>{" "}
                  {es
                    ? "— Status candidato oficial 2012, capítulos 23/24 estado de derecho"
                    : "— Official candidate status 2012, chapters 23/24 rule of law"}
                </li>
                <li>
                  <strong>NBS</strong>{" "}
                  {es
                    ? "— Banco Nacional de Serbia, moneda RSD dinar"
                    : "— National Bank of Serbia, currency RSD dinar"}
                </li>
                <li>
                  <strong>CEFTA</strong>{" "}
                  {es
                    ? "— Acuerdo libre comercio Balcanes Occidentales"
                    : "— Western Balkans free trade agreement"}
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
              ? "Capacidades KabatOne para Serbia"
              : "KabatOne Capabilities for Serbia"}
          </h2>
          <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto">
            {es
              ? "Plataforma Avalon unificando vigilancia, despacho CAD, GIS y tráfico para los desafíos de seguridad de Serbia."
              : "Avalon platform unifying surveillance, CAD dispatch, GIS, and traffic for Serbia's security challenges."}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: es ? "Gestión de Fronteras y Corredores" : "Border & Corridor Management",
                desc: es
                  ? "Control inteligente del Corredor X y fronteras con Bosnia, Hungría, Rumanía, Bulgaria, Macedonia, Montenegro y Croacia — ANPR, biometría, alertas IBMS y coordinación FRONTEX en tiempo real."
                  : "Smart control of Corridor X and borders with Bosnia, Hungary, Romania, Bulgaria, Macedonia, Montenegro, and Croatia — ANPR, biometrics, IBMS alerts, and real-time FRONTEX coordination.",
                icon: "🛂",
              },
              {
                title: es ? "Seguridad Fluvial Danubio" : "Danube River Security",
                desc: es
                  ? "Vigilancia del Danubio 588 km con AIS marítimo, cámaras PTZ en los 7 puertos fluviales, detección de embarcaciones no autorizadas y despacho CAD integrado con guardia fluvial del MUP."
                  : "Danube 588 km surveillance with maritime AIS, PTZ cameras at 7 river ports, unauthorized vessel detection, and integrated CAD dispatch with MUP river guard.",
                icon: "🚢",
              },
              {
                title: es ? "CCC de Belgrado y Ciudades" : "Belgrade & City CCC",
                desc: es
                  ? "Centro de Mando y Control para Belgrado 1,7M hab. y Novi Sad — integración CCTV, CAD 112, gestión de incidentes, tráfico urbano y coordinación con centros distritales MUP."
                  : "Command and Control Center for Belgrade 1.7M pop. and Novi Sad — CCTV integration, CAD 112, incident management, urban traffic, and coordination with MUP district centers.",
                icon: "🏙️",
              },
              {
                title: es ? "Cumplimiento UE y ZZPPL" : "EU Compliance & ZZPPL",
                desc: es
                  ? "Arquitectura GDPR-ready con cifrado AES-256, control de acceso biométrico, auditoría conforme ZZPPL/Poverenik, integración TETRA NORA y soporte para capítulos 23/24 del proceso de adhesión UE."
                  : "GDPR-ready architecture with AES-256 encryption, biometric access control, ZZPPL/Poverenik-compliant audit, NORA TETRA integration, and support for EU accession chapters 23/24.",
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
                  ? "¿Cuáles son las principales fuerzas de seguridad de Serbia?"
                  : "What are Serbia's main security forces?",
                a: es
                  ? "El MUP (Ministerio del Interior) ~35.000 agentes con Policía Nacional, Gendarmería y BIA (inteligencia interior), además de la Policía de Fronteras y unidades especiales SAJ y JSO."
                  : "The MUP (Ministry of Interior) ~35,000 officers with National Police, Gendarmerie, and BIA (domestic intelligence), plus Border Police and special units SAJ and JSO.",
              },
              {
                q: es
                  ? "¿Qué infraestructura crítica tiene Serbia?"
                  : "What critical infrastructure does Serbia have?",
                a: es
                  ? "El Corredor X (E75/E80) conecta Europa Central con el Mediterráneo; el Corredor VII es el Danubio navegable 588 km; el Puerto de Belgrado y Novi Sad; NIS/Gazprom refina 4,8M t/año en Pančevo; y el Aeropuerto BEG con 6M+ pax/año."
                  : "Corridor X (E75/E80) connects Central Europe to the Mediterranean; Corridor VII is the navigable Danube 588 km; Port of Belgrade and Novi Sad; NIS/Gazprom refines 4.8M t/yr at Pančevo; and Belgrade Airport BEG with 6M+ pax/yr.",
              },
              {
                q: es
                  ? "¿Cómo gestiona Serbia su candidatura a la UE y Schengen?"
                  : "How does Serbia manage its EU/Schengen candidacy?",
                a: es
                  ? "Serbia es candidata oficial a la UE desde 2012. La gestión de fronteras integra IBMS, biometría y coordinación FRONTEX/SELEC para la convergencia con estándares Schengen, trabajando los capítulos 23 y 24 del acervo comunitario."
                  : "Serbia has been an official EU candidate since 2012. Border management integrates IBMS, biometrics, and FRONTEX/SELEC coordination for Schengen standard convergence, working through chapters 23 and 24 of the EU acquis.",
              },
              {
                q: es
                  ? "¿Cómo puede KabatOne integrarse con los sistemas serbios?"
                  : "How can KabatOne integrate with Serbian systems?",
                a: es
                  ? "KabatOne se integra con los sistemas CAD/112 del MUP, ANPR en los 15 pasos fronterizos principales, gestión del tráfico fluvial del Danubio y CCTV de Belgrado, cumpliendo ZZPPL y normativa NORA."
                  : "KabatOne integrates with MUP CAD/112 systems, ANPR at 15 major border crossings, Danube waterway traffic management, and Belgrade CCTV networks, complying with ZZPPL and NORA regulations.",
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
            ? "¿Listo para modernizar la seguridad pública de Serbia?"
            : "Ready to modernize Serbia's public safety?"
        }
        subtitle={
          es
            ? "KabatOne integra MUP, BIA y Policía de Fronteras en una plataforma unificada — gestión del Corredor X/VII, seguridad fluvial del Danubio, candidatura UE y cumplimiento ZZPPL."
            : "KabatOne integrates MUP, BIA, and Border Police in one unified platform — Corridor X/VII management, Danube river security, EU candidacy support, and ZZPPL compliance."
        }
      />
      <Footer es={es} />
    </>
  );
}
