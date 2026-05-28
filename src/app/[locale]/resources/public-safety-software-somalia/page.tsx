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
  return generatePageMetadata("publicSafetySoftwareSomalia", locale);
}

export default async function PublicSafetySoftwareSomaliaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const article = articleSchema(
    es
      ? "Software de Seguridad Pública para Somalia | SPF, SNA y Gestión Post-Conflicto – KabatOne"
      : "Public Safety Software for Somalia | SPF, SNA & Post-Conflict Management – KabatOne",
    es
      ? "KabatOne ofrece plataforma modular de mando y control, coordinación de operaciones anti-Al-Shabaab y conciencia situacional para la Policía Federal de Somalia, SNA y programas de reconstrucción de la seguridad pública."
      : "KabatOne delivers modular command-and-control, anti-Al-Shabaab operations coordination, and situational awareness for the Somali Federal Police, SNA, and public safety reconstruction programs.",
    es
      ? "https://kabatone.com/es/resources/public-safety-software-somalia/"
      : "https://kabatone.com/resources/public-safety-software-somalia/",
    "2026-05-19"
  );

  const faqs = faqPageSchema([
    {
      question: es
        ? "¿Cómo puede KabatOne apoyar la seguridad pública en Somalia?"
        : "How can KabatOne support public safety in Somalia?",
      answer: es
        ? "KabatOne proporciona CAD/gestión de incidentes modular para las 18 regiones/6 estados federales miembros, coordinación SPF/SNA/ATMIS con inteligencia táctica anti-Al-Shabaab, gestión de los 3+ millones de PDI y plataformas de comunicación de emergencia para Mogadiscio, Bosaso, Kismayo y Baidoa."
        : "KabatOne provides modular CAD/incident management for all 18 regions/6 Federal Member States, SPF/SNA/ATMIS coordination with anti-Al-Shabaab tactical intelligence, management of 3+ million IDPs, and emergency communication platforms for Mogadishu, Bosaso, Kismayo, and Baidoa.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad de infraestructura crítica en Somalia?"
        : "How does KabatOne support critical infrastructure security in Somalia?",
      answer: es
        ? "La plataforma monitorea el Puerto de Mogadiscio (principal puerto del Cuerno de África), el Aeropuerto Internacional Aden Adde (MGQ), las instalaciones offshore de Coastline Exploration/Saudi Aramco, la nueva planta Garowe-Beled Hawo de Jubba Power y las estaciones de telecomunicaciones HORMUUD/SOMTEL en Puntland/Somalilandia."
        : "The platform monitors Mogadishu Port (main Horn of Africa port), Aden Adde International Airport (MGQ), Coastline Exploration/Saudi Aramco offshore facilities, the new Jubba Power Garowe-Beled Hawo plant, and HORMUUD/SOMTEL telecom stations in Puntland/Somaliland.",
    },
    {
      question: es
        ? "¿Puede KabatOne integrarse con la gestión humanitaria en Somalia?"
        : "Can KabatOne integrate with humanitarian management in Somalia?",
      answer: es
        ? "Sí. KabatOne se integra con OCHA/UNHCR/WFP para la gestión de los 3+ millones de PDI, el Sistema de Alerta Temprana de hambruna/inundaciones (FEWS NET/FAO), las inundaciones del Juba/Shabelle/inundaciones repentinas de la temporada de gu, la crisis de sequía y la gestión de refugiados con Kenia/Etiopía/Yemen."
        : "Yes. KabatOne integrates with OCHA/UNHCR/WFP for management of 3+ million IDPs, famine/flood early warning system (FEWS NET/FAO), Juba/Shabelle river flooding/gu season flash floods, drought crisis, and refugee management with Kenya/Ethiopia/Yemen.",
    },
    {
      question: es
        ? "¿Cómo cumple KabatOne con la normativa de Somalia?"
        : "How does KabatOne comply with Somalia's regulations?",
      answer: es
        ? "KabatOne se alinea con las directrices de la Autoridad Nacional de Comunicaciones de Somalia (NCA), los estándares de ciberseguridad del Ministerio de Posts, Telecomunicaciones y Tecnología (MoPTT), y los marcos de adquisiciones del Banco Mundial/PNUD/USAID para proyectos de construcción de estado financiados por donantes."
        : "KabatOne aligns with Somalia National Communications Authority (NCA) guidelines, Ministry of Posts, Telecommunications and Technology (MoPTT) cybersecurity standards, and World Bank/UNDP/USAID procurement frameworks for donor-funded state-building projects.",
    },
    {
      question: es
        ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Somalia?"
        : "What sets KabatOne apart for Somalia's border management?",
      answer: es
        ? "KabatOne puede unificar los 3 corredores fronterizos terrestres (Etiopía/Kenya/Somalilandia-autoproclamada) y la línea costera de 3,330 km (la más larga de África continental) con vigilancia marítima anti-piratería, listas Interpol/IGAD/UA, y protocolos de la Fuerza Naval de la UE (EUNAVFOR Atalanta)."
        : "KabatOne can unify 3 land border corridors (Ethiopia/Kenya/self-declared Somaliland) and the 3,330 km coastline (longest in mainland Africa) with anti-piracy maritime surveillance, Interpol/IGAD/AU watchlists, and EU Naval Force (EUNAVFOR Atalanta) protocols.",
    },
  ]);

  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    {
      name: es ? "Recursos" : "Resources",
      url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/",
    },
    {
      name: es ? "Software de Seguridad Pública Somalia" : "Public Safety Software Somalia",
      url: es
        ? "https://kabatone.com/es/resources/public-safety-software-somalia/"
        : "https://kabatone.com/resources/public-safety-software-somalia/",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <main className="bg-white text-gray-900">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] text-white py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#4fc3f7] text-sm font-semibold uppercase tracking-widest mb-3">
              {es ? "Guía de Mercado — Somalia" : "Market Guide — Somalia"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es
                ? "Software de Seguridad Pública para Somalia"
                : "Public Safety Software for Somalia"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {es
                ? "Plataforma modular de mando y control, coordinación ATMIS/SNA y gestión humanitaria para la reconstrucción de la seguridad pública en Somalia — desde Mogadiscio hasta el Cuerno de África."
                : "Modular command-and-control, ATMIS/SNA coordination, and humanitarian management for Somalia's public safety reconstruction — from Mogadishu to the Horn of Africa."}
            </p>
          </div>
        </section>

        {/* Security Forces */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {es
              ? "SPF, SNA y ATMIS — Construcción de Capacidades Post-Al-Shabaab"
              : "SPF, SNA & ATMIS — Post-Al-Shabaab Capacity Building"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "La Policía Federal de Somalia (SPF) y el Ejército Nacional Somalí (SNA), con más de 20,000 efectivos combinados, son las principales fuerzas de seguridad bajo el Gobierno Federal de Somalia (FGS). La misión de paz de la UA ATMIS (Transition Mission in Somalia, sucesora de AMISOM) y la misión de la UE EUCAP Somalia coordinan con la SNA para las operaciones anti-Al-Shabaab, con plazos de transición hacia la plena responsabilidad somali de la seguridad."
              : "Somalia Federal Police (SPF) and Somali National Army (SNA), with over 20,000 combined personnel, are the main security forces under the Federal Government of Somalia (FGS). AU peacekeeping mission ATMIS (Transition Mission in Somalia, successor to AMISOM) and EU mission EUCAP Somalia coordinate with SNA for anti-Al-Shabaab operations, with transition timelines toward full Somali security responsibility."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "Al-Shabaab controla vastas zonas del sur y centro de Somalia, y realiza atentados en Mogadiscio y otras ciudades. KabatOne proporciona plataformas de C2 modulares para la SPF/SNA con mapas operativos georreferenciados, coordinación segura con ATMIS/EUCAP, comunicaciones cifradas y gestión de logística para unidades en zonas de reconquista."
              : "Al-Shabaab controls vast areas of southern and central Somalia, and carries out attacks in Mogadishu and other cities. KabatOne provides modular C2 platforms for SPF/SNA with georeferenced operational maps, secure coordination with ATMIS/EUCAP, encrypted communications, and logistics management for units in reconquest zones."}
          </p>

          {/* Port & Maritime */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Puerto de Mogadiscio, Piratería y la Línea Costera del Océano Índico"
              : "Mogadishu Port, Piracy & the Indian Ocean Coastline"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Somalia tiene la línea costera más larga de África continental (3,330 km), lo que la convierte en una potencia potencial del Océano Índico. El Puerto de Mogadiscio ha experimentado una rehabilitación significativa (con inversión turca/DP World) y es el principal puerto del Cuerno de África. El Puerto de Bosaso (Puntlandia) y el Puerto de Kismayo (Estado de Jubalandia) son terminales regionales importantes. La piratería somalí, que alcanzó su cénit en 2010-2012, ha sido mayoritariamente suprimida por la Operación EUNAVFOR Atalanta/Combined Maritime Forces."
              : "Somalia has mainland Africa's longest coastline (3,330 km), making it a potential Indian Ocean power. Mogadishu Port has undergone significant rehabilitation (with Turkish/DP World investment) and is the main Horn of Africa port. Bosaso Port (Puntland) and Kismayo Port (Jubaland State) are important regional terminals. Somali piracy, which peaked in 2010-2012, has been largely suppressed by EUNAVFOR Atalanta/Combined Maritime Forces."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne proporciona vigilancia marítima integrada para la Guardia Costera de Somalia (SCMG) con feeds EUNAVFOR Atalanta/CMF, detección AIS de embarcaciones sospechosas, gestión de incidentes en zonas económicas exclusivas (ZEE), y el monitoreo del corredor marítimo del Golfo de Adén/Cuerno de África."
              : "KabatOne provides integrated maritime surveillance for the Somali Coast Guard (SCMG) with EUNAVFOR Atalanta/CMF feeds, AIS detection of suspicious vessels, incident management in Exclusive Economic Zones (EEZ), and monitoring of the Gulf of Aden/Horn of Africa maritime corridor."}
          </p>

          {/* Humanitarian */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión Humanitaria — 3+ Millones de PDI, Hambruna y Sequía"
              : "Humanitarian Management — 3+ Million IDPs, Famine & Drought"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Somalia registra más de 3 millones de desplazados internos (PDI) — una de las mayores crisis de desplazamiento del mundo. El país ha experimentado múltiples amenazas de hambruna (declarada en algunas zonas en 2011 y amenaza persistente en el sur), la mayor sequía en décadas (2021-2023), e inundaciones catastróficas de los ríos Juba y Shabelle durante las temporadas de lluvias (deyr/gu). El sistema de alerta temprana FEWS NET/FAO/FSNAU monitorea la seguridad alimentaria."
              : "Somalia records over 3 million internally displaced persons (IDPs) — one of the world's largest displacement crises. The country has experienced multiple famine threats (declared in some areas in 2011 and persistent threat in the south), the worst drought in decades (2021-2023), and catastrophic Juba and Shabelle river flooding during rainy seasons (deyr/gu). FEWS NET/FAO/FSNAU early warning system monitors food security."}
          </p>

          {/* Oil & Gas */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Petróleo y Gas — Cuenca de Somalia y Potencial Offshore"
              : "Oil & Gas — Somalia Basin & Offshore Potential"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Somalia tiene un significativo potencial de petróleo y gas sin explotar. Las estimaciones geológicas sugieren 30+ mil millones de barriles equivalentes de petróleo. Coastline Exploration, Saudi Aramco y otras empresas han obtenido bloques de exploración. Las zonas de Puntlandia/Mudug/Lamu Basin offshore han mostrado los indicadores más prometedores. El gas natural offshore también es considerable. El Ministerio de Petróleo e Hidrocarburos del FGS gestiona el marco regulatorio bajo la Ley de Petróleo de Somalia 2008."
              : "Somalia has significant untapped oil and gas potential. Geological estimates suggest 30+ billion barrels of oil equivalent. Coastline Exploration, Saudi Aramco, and other companies have obtained exploration blocks. Puntland/Mudug/Lamu Basin offshore zones have shown the most promising indicators. Offshore natural gas is also considerable. FGS Ministry of Petroleum and Hydrocarbons manages the regulatory framework under Somalia Petroleum Law 2008."}
          </p>

          {/* Border */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión Fronteriza — Etiopía, Kenya y Somalilandia"
              : "Border Management — Ethiopia, Kenya & Somaliland"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Somalia comparte fronteras terrestres con Etiopía al noroeste/norte (Tog Wajaale/Jijiga corredor, Belanbale/Dollo Ado corredor humanitario) y Kenya al sur (Liboi/El Wak/Mandera corredor — el cruce más activo). Somalilandia (autoproclamada, con capital Hargeisa) controla el norte de Somalia y administra su propia frontera con Etiopía (Togwajaale) y Djibouti. La cuestión de Somalilandia permanece sin resolver. Puntlandia también tiene grados de autonomía."
              : "Somalia shares land borders with Ethiopia to the northwest/north (Tog Wajaale/Jijiga corridor, Belanbale/Dollo Ado humanitarian corridor) and Kenya to the south (Liboi/El Wak/Mandera corridor — the most active crossing). Somaliland (self-declared, capital Hargeisa) controls northern Somalia and manages its own borders with Ethiopia (Togwajaale) and Djibouti. The Somaliland question remains unresolved. Puntland also has degrees of autonomy."}
          </p>

          {/* Compliance */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Cumplimiento y Adquisiciones — NCA/MoPTT, IGAD y Marcos de Donantes"
              : "Compliance & Procurement — NCA/MoPTT, IGAD & Donor Frameworks"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Las adquisiciones de seguridad pública en Somalia se rigen principalmente por los marcos del Banco Mundial/PNUD/USAID/UE/UA para proyectos financiados por donantes, dado el estado naciente del sistema nacional de adquisiciones. La Autoridad Nacional de Comunicaciones de Somalia (NCA) regula las telecomunicaciones bajo la Ley de Comunicaciones de Somalia 2017. El MoPTT establece estándares de ciberseguridad. Somalia es miembro del IGAD/UA y aplica sus marcos de contratación regional."
              : "Public safety procurement in Somalia is primarily governed by World Bank/UNDP/USAID/EU/AU frameworks for donor-funded projects, given the nascent state of the national procurement system. Somalia National Communications Authority (NCA) regulates telecommunications under Somalia Communications Act 2017. MoPTT sets cybersecurity standards. Somalia is a member of IGAD/AU and applies their regional procurement frameworks."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne está estructurado para despliegue bajo marcos de adquisiciones de emergencia del Banco Mundial/USAID/PNUD/UA, compatible con los sistemas de coordinación OCHA/ATMIS/EUCAP, y diseñado para transición gradual desde operaciones de estabilización de emergencia hacia plataformas de seguridad pública civiles sostenibles bajo los Marcos de Responsabilidad del Plan Nacional de Desarrollo de Somalia (NDP)."
              : "KabatOne is structured for deployment under World Bank/USAID/UNDP/AU emergency procurement frameworks, compatible with OCHA/ATMIS/EUCAP coordination systems, and designed for gradual transition from emergency stabilisation operations to sustainable civilian public safety platforms under Somalia National Development Plan (NDP) Accountability Frameworks."}
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">
              {es ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: es
                    ? "¿Cómo puede KabatOne apoyar la seguridad pública en Somalia?"
                    : "How can KabatOne support public safety in Somalia?",
                  a: es
                    ? "KabatOne proporciona CAD modular para 18 regiones/6 estados federales, coordinación SPF/SNA/ATMIS anti-Al-Shabaab, gestión 3M+ PDI y plataformas de emergencia para Mogadiscio, Bosaso, Kismayo y Baidoa."
                    : "KabatOne provides modular CAD for 18 regions/6 Federal Member States, SPF/SNA/ATMIS anti-Al-Shabaab coordination, 3M+ IDP management, and emergency platforms for Mogadishu, Bosaso, Kismayo, and Baidoa.",
                },
                {
                  q: es
                    ? "¿Cómo apoya KabatOne la seguridad de infraestructura crítica en Somalia?"
                    : "How does KabatOne support critical infrastructure security in Somalia?",
                  a: es
                    ? "La plataforma monitorea Puerto Mogadiscio (rehab turca/DP World), Bosaso Port/Kismayo Port, Aeropuerto MGQ, offshore Coastline Exploration/Saudi Aramco y estaciones telecomunicaciones HORMUUD/SOMTEL con gestión unificada de activos."
                    : "The platform monitors Mogadishu Port (Turkish/DP World rehab), Bosaso/Kismayo ports, MGQ Airport, Coastline Exploration/Saudi Aramco offshore facilities, and HORMUUD/SOMTEL telecom stations with unified asset management.",
                },
                {
                  q: es
                    ? "¿Puede KabatOne integrarse con la gestión humanitaria en Somalia?"
                    : "Can KabatOne integrate with humanitarian management in Somalia?",
                  a: es
                    ? "Sí. KabatOne integra OCHA/UNHCR/WFP para 3M+ PDI, alertas hambruna/sequía FEWS NET/FAO/FSNAU, inundaciones Juba/Shabelle y gestión de refugiados Kenya/Etiopía."
                    : "Yes. KabatOne integrates OCHA/UNHCR/WFP for 3M+ IDPs, FEWS NET/FAO/FSNAU famine/drought alerts, Juba/Shabelle flooding, and Kenya/Ethiopia refugee management.",
                },
                {
                  q: es
                    ? "¿Cómo cumple KabatOne con la normativa de Somalia?"
                    : "How does KabatOne comply with Somalia's regulations?",
                  a: es
                    ? "KabatOne se alinea con NCA/Ley de Comunicaciones 2017, estándares MoPTT ciberseguridad y marcos de adquisiciones Banco Mundial/PNUD/USAID/UA para proyectos de construcción de estado financiados por donantes."
                    : "KabatOne aligns with NCA/Communications Act 2017, MoPTT cybersecurity standards, and World Bank/UNDP/USAID/AU procurement frameworks for donor-funded state-building projects.",
                },
                {
                  q: es
                    ? "¿Qué diferencia a KabatOne en la gestión costera y fronteriza de Somalia?"
                    : "What sets KabatOne apart for Somalia's coastal and border management?",
                  a: es
                    ? "KabatOne unifica 3,330 km de vigilancia costera anti-piratería con feeds EUNAVFOR Atalanta/CMF/AIS, corredores fronterizos Etiopía/Kenya y alertas IGAD/UA para la Guardia Costera SCMG/SPF."
                    : "KabatOne unifies 3,330 km of anti-piracy coastal surveillance with EUNAVFOR Atalanta/CMF/AIS feeds, Ethiopia/Kenya border corridors, and IGAD/AU alerts for SCMG Coast Guard/SPF.",
                },
              ].map(({ q, a }, i) => (
                <details key={i} className="bg-white rounded-lg shadow-sm p-6">
                  <summary className="font-semibold text-lg cursor-pointer">{q}</summary>
                  <p className="mt-3 text-gray-700">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          es={es}
          h2={
            es
              ? "¿Listo para apoyar la seguridad pública y la reconstrucción en Somalia?"
              : "Ready to support public safety and reconstruction in Somalia?"
          }
          subtitle={
            es
              ? "Hable con nuestros especialistas sobre soluciones modulares para la SPF/SNA, ATMIS, vigilancia costera anti-piratería y los programas de construcción de estado del FGS."
              : "Speak with our specialists about modular solutions for SPF/SNA, ATMIS, anti-piracy coastal surveillance, and FGS state-building programs."
          }
        />
      </main>
      <Footer es={es} />
    </>
  );
}
