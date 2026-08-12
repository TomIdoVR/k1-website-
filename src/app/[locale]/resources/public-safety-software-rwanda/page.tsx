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
  return generatePageMetadata("publicSafetySoftwareRwanda", locale);
}

export default async function PublicSafetySoftwareRwandaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const article = articleSchema(
    es
      ? "Software de Seguridad Pública para Ruanda | RNP, RDF y Smart City Kigali – KabatOne"
      : "Public Safety Software for Rwanda | RNP, RDF & Kigali Smart City – KabatOne",
    es
      ? "KabatOne ofrece plataforma unificada de mando y control, despacho IA y conciencia situacional para la Policía Nacional de Ruanda, RDF, gestión de desastres MIDIMAR y programas de ciudad inteligente Kigali."
      : "KabatOne delivers unified command-and-control, AI-dispatch, and situational awareness for Rwanda National Police, RDF, MIDIMAR disaster management, and Kigali Smart City programs.",
    es
      ? "https://kabatone.com/es/resources/public-safety-software-rwanda"
      : "https://kabatone.com/resources/public-safety-software-rwanda",
    "2026-05-19"
  );

  const faqs = faqPageSchema([
    {
      question: es
        ? "¿Qué capacidades ofrece KabatOne a la Policía Nacional de Ruanda?"
        : "What capabilities does KabatOne offer Rwanda National Police?",
      answer: es
        ? "KabatOne proporciona CAD unificado para los 5 provincias/30 distritos/416 sectores, despacho IA que integra Kigali Safe City CCTV, gestión de incidentes transfronterizos y cumplimiento de la Ley de Ciberseguridad 2016/RURA/RwandaCSIRT."
        : "KabatOne provides unified CAD for all 5 provinces/30 districts/416 sectors, AI-dispatch integrating Kigali Safe City CCTV, cross-border incident management, and compliance with the Cybersecurity Law 2016/RURA/RwandaCSIRT.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad de infraestructura crítica en Ruanda?"
        : "How does KabatOne support critical infrastructure security in Rwanda?",
      answer: es
        ? "La plataforma monitorea RECO/REG red eléctrica, Rwandair KGL/aeropuerto BK (en construcción Bugesera), RNRA/ONATRACOM rutas nacionales, y el corredor portuario de Mombasa/Dar es Salaam con gestión unificada de activos."
        : "The platform monitors RECO/REG power grid, Rwandair KGL/Bugesera airport (under construction), RNRA/ONATRACOM road network, and Mombasa/Dar es Salaam port corridor with unified asset management.",
    },
    {
      question: es
        ? "¿Puede KabatOne integrarse con la gestión de desastres de Ruanda?"
        : "Can KabatOne integrate with Rwanda's disaster management?",
      answer: es
        ? "Sí. KabatOne se integra con MIDIMAR/REMA para alertas de inundaciones/deslizamientos en la cadena de volcanes Virunga, monitoreo de los volcanes Karisimbi/Nyiragongo (DRC frontera), y coordinación de emergencias del Lago Kivu gas metano."
        : "Yes. KabatOne integrates with MIDIMAR/REMA for flood/landslide alerts in the Virunga volcanic chain, monitoring of Karisimbi/Nyiragongo (DRC border) volcanoes, and Lake Kivu methane gas emergency coordination.",
    },
    {
      question: es
        ? "¿Cómo cumple KabatOne con la normativa de datos de Ruanda?"
        : "How does KabatOne comply with Rwanda's data regulations?",
      answer: es
        ? "KabatOne se ajusta a la Ley de Protección de Datos y Privacidad N° 058/2021, la Ley de Ciberseguridad N° 014/2016, los estándares NCSA/RwandaCSIRT, y las directrices RURA para telecomunicaciones de seguridad pública."
        : "KabatOne aligns with the Law on Personal Data Protection and Privacy No. 058/2021, Cybersecurity Law No. 014/2016, NCSA/RwandaCSIRT standards, and RURA guidelines for public safety telecommunications.",
    },
    {
      question: es
        ? "¿Qué diferencia a KabatOne en la gestión de fronteras de Ruanda?"
        : "What sets KabatOne apart for Rwanda's border management?",
      answer: es
        ? "KabatOne unifica la inteligencia de los cruces fronterizos de Gatuna/Katuna (Uganda), Rusumo (Tanzania), Akanyaru/Nemba (Burundi) y Goma/Gisenyi (DRC) con reconocimiento de matrículas ANPR, flujos de EAC/AfCFTA y alerta temprana RIM."
        : "KabatOne unifies intelligence from Gatuna/Katuna (Uganda), Rusumo (Tanzania), Akanyaru/Nemba (Burundi), and Goma/Gisenyi (DRC) border crossings with ANPR plate recognition, EAC/AfCFTA trade flows, and RIM early warning.",
    },
  ]);

  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es" : "https://kabatone.com/" },
    {
      name: es ? "Recursos" : "Resources",
      url: es ? "https://kabatone.com/es/resources" : "https://kabatone.com/resources",
    },
    {
      name: es ? "Software de Seguridad Pública Rwanda" : "Public Safety Software Rwanda",
      url: es
        ? "https://kabatone.com/es/resources/public-safety-software-rwanda"
        : "https://kabatone.com/resources/public-safety-software-rwanda",
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
              {es ? "Guía de Mercado — Rwanda" : "Market Guide — Rwanda"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es
                ? "Software de Seguridad Pública para Rwanda"
                : "Public Safety Software for Rwanda"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {es
                ? "Plataforma unificada de mando y control, despacho IA y conciencia situacional para la Policía Nacional de Rwanda, RDF, MIDIMAR y el programa Kigali Smart City — desde la gestión de volcanes Virunga hasta el hub de EAC."
                : "Unified command-and-control, AI-dispatch, and situational awareness for Rwanda National Police, RDF, MIDIMAR disaster management, and the Kigali Smart City program — from Virunga volcano management to the EAC regional hub."}
            </p>
          </div>
        </section>

        {/* Rwanda National Police */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {es
              ? "Policía Nacional de Rwanda (RNP) — Mando Unificado en 5 Provincias"
              : "Rwanda National Police (RNP) — Unified Command Across 5 Provinces"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "La Policía Nacional de Rwanda (RNP) opera en las 5 provincias (Ciudad de Kigali, Norte, Sur, Este, Oeste), 30 distritos y 416 sectores con más de 20,000 efectivos. Sus unidades especializadas incluyen la División de Investigación Criminal (CID), Policía de Tránsito, Policía de Turismo, Unidad de Operaciones Especiales (SOU) y la Unidad Antiterrorista (ATU)."
              : "Rwanda National Police (RNP) operates across 5 provinces (Kigali City, Northern, Southern, Eastern, Western), 30 districts, and 416 sectors with over 20,000 officers. Specialized units include the Criminal Investigation Division (CID), Traffic Police, Tourism Police, Special Operations Unit (SOU), and Anti-Terrorism Unit (ATU)."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne proporciona un CAD/gestión de incidentes unificado que integra los centros de operaciones provinciales con el Centro de Mando Nacional de Kigali, distribución de turnos en tiempo real para los 416 sectores y tableros de inteligencia delictiva conforme a la Estrategia Nacional de Seguridad de Rwanda."
              : "KabatOne provides unified CAD/incident management integrating provincial operations centers with the Kigali National Command Center, real-time shift deployment across all 416 sectors, and crime intelligence dashboards aligned with Rwanda's National Security Strategy."}
          </p>

          {/* RDF */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Rwanda Defence Force (RDF) — Defensa Nacional y Operaciones de Paz"
              : "Rwanda Defence Force (RDF) — National Defence & Peacekeeping Operations"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Las Rwanda Defence Forces (RDF) — Ejército de Rwanda (RA), Fuerza Aérea de Rwanda (RAF) y reservas — protegen las fronteras DRC/Burundi/Uganda/Tanzania y contribuyen con más de 6,000 peacekeepers a misiones de la UA y ONU en Somalia (AMISOM/ATMIS), CAR, Sudán y Mali. La RDF también despliega para respuesta a desastres internos."
              : "Rwanda Defence Forces (RDF) — Rwanda Army (RA), Rwanda Air Force (RAF), and reserves — protect DRC/Burundi/Uganda/Tanzania borders and contribute over 6,000 peacekeepers to AU and UN missions in Somalia (AMISOM/ATMIS), CAR, Sudan, and Mali. RDF also deploys for domestic disaster response."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne apoya las funciones de C2 de la RDF con mapas operativos georreferenciados de las zonas fronterizas, coordinación multiagencia con RNP/DGIE/NSS, comunicaciones seguras y tableros de seguimiento de misiones de paz en el extranjero."
              : "KabatOne supports RDF C2 functions with georeferenced operational maps of border zones, multi-agency coordination with RNP/DGIE/NSS, secure communications, and overseas peacekeeping mission tracking dashboards."}
          </p>

          {/* Disaster Management */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "MIDIMAR/REMA — Gestión de Desastres y Volcanes Virunga"
              : "MIDIMAR/REMA — Disaster Management & Virunga Volcanoes"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "El Ministerio de Gestión de Desastres e Infancia (MIDIMAR) y la Autoridad de Gestión del Entorno de Rwanda (REMA) coordinan respuesta a deslizamientos (Provincia Occidental/Norte), inundaciones del Valle del Rift y amenazas volcánicas. Los volcanes Virunga — incluyendo el Karisimbi (4,507 m) en Rwanda y el Nyiragongo (activo, 3,470 m) al otro lado de la frontera en DRC/Goma — representan riesgos sísmicos y volcánicos para el noroeste de Rwanda."
              : "The Ministry of Disaster Management and Refugee Affairs (MIDIMAR) and Rwanda Environment Management Authority (REMA) coordinate response to landslides (Western/Northern Province), Rift Valley flooding, and volcanic threats. The Virunga volcanoes — including Karisimbi (4,507 m) in Rwanda and Nyiragongo (active, 3,470 m) across the DRC/Goma border — present seismic and volcanic risks to northwestern Rwanda."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "El Lago Kivu almacena grandes reservas de gas metano y CO₂ disuelto en sus aguas; KivuWatt de ContourGlobal genera 25 MW extrayendo este gas. KabatOne integra alertas sísmicas/volcánicas de l'Observatoire Volcanologique de Goma (OVG), monitoreo de niveles del lago, y planes de evacuación de Rubavu/Rusizi con protocolos de respuesta multi-agencia RNP-RDF-MIDIMAR."
              : "Lake Kivu stores large reserves of dissolved methane and CO₂; ContourGlobal KivuWatt generates 25 MW by extracting this gas. KabatOne integrates seismic/volcanic alerts from the Goma Volcanological Observatory (OVG), lake-level monitoring, and Rubavu/Rusizi evacuation plans with RNP-RDF-MIDIMAR multi-agency response protocols."}
          </p>

          {/* Kigali Smart City */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Kigali Smart City — CCTV, Tráfico y Hub Tecnológico de África"
              : "Kigali Smart City — CCTV, Traffic Management & Africa's Tech Hub"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Kigali, clasificada consistentemente como la ciudad más limpia y segura de África, opera un programa Kigali Safe City con miles de cámaras CCTV integradas con RNP, gestión de tráfico inteligente en las principales intersecciones, y la Ciudad Verde de Kigali/KCC como motor del Distrito de Innovación. Rwanda cuenta con más del 95% de cobertura de fibra 4G/LTE a nivel nacional y está desplegando 5G."
              : "Kigali, consistently ranked as Africa's cleanest and safest city, operates a Kigali Safe City program with thousands of CCTV cameras integrated with RNP, smart traffic management at major intersections, and the Kigali Green City/KCC as the engine of the Innovation District. Rwanda has over 95% nationwide 4G/LTE fiber coverage and is deploying 5G."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne se integra con el CCTV de Kigali Safe City para conciencia situacional en tiempo real, correlaciona datos de Intelligent Transport Systems (ITS) para gestión de emergencias de tráfico, y apoya el Kigali Convention Centre (KCC) y eventos del CHOGM/UA con coordinación de seguridad."
              : "KabatOne integrates with Kigali Safe City CCTV for real-time situational awareness, correlates Intelligent Transport Systems (ITS) data for traffic emergency management, and supports the Kigali Convention Centre (KCC) and CHOGM/AU events with security coordination."}
          </p>

          {/* Critical Infrastructure */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Infraestructura Crítica — Energía, Aeropuerto y Corredor EAC"
              : "Critical Infrastructure — Energy, Airport & EAC Corridor"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Rwanda Energy Group (REG)/Energy Utility Corporation (RECO) gestiona la red eléctrica nacional con capacidad instalada de ~260 MW, incluyendo la central hidroeléctrica de Rukarara, Nyabarongo I/II, Jabana II y parques solares Gigawatt Global. El nuevo Aeropuerto Internacional de Bugesera (BK) — diseñado para 1.8 millones de pasajeros inicialmente, con expansión a 14 millones — complementará el Aeropuerto Internacional de Kigali (KGL) como hub de aviación del EAC."
              : "Rwanda Energy Group (REG)/Energy Utility Corporation (RECO) manages the national power grid with ~260 MW installed capacity, including Rukarara hydropower, Nyabarongo I/II, Jabana II, and Gigawatt Global solar parks. The new Bugesera International Airport (BK) — designed for 1.8 million passengers initially, expanding to 14 million — will complement Kigali International Airport (KGL) as the EAC aviation hub."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "La red vial nacional RNRA/ONATRACOM conecta los corredores Kigali–Gatuna (Uganda/EAC), Kigali–Rusumo (Tanzania/TAZARA), Kigali–Akanyaru (Burundi) y Kigali–Goma/Gisenyi (DRC). Rwanda Railways conecta con el Corredor Central Tanzania/Dar es Salaam. KabatOne monitorea estos corredores de transporte críticos con ANPR, video y gestión unificada de activos."
              : "Rwanda's RNRA/ONATRACOM road network connects Kigali–Gatuna (Uganda/EAC), Kigali–Rusumo (Tanzania/TAZARA), Kigali–Akanyaru (Burundi), and Kigali–Goma/Gisenyi (DRC) corridors. Rwanda Railways connects to the Central Corridor Tanzania/Dar es Salaam. KabatOne monitors these critical transport corridors with ANPR, video, and unified asset management."}
          </p>

          {/* Border Management */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión Fronteriza — Gatuna, Rusumo, Akanyaru/Nemba y Goma/Gisenyi"
              : "Border Management — Gatuna, Rusumo, Akanyaru/Nemba & Goma/Gisenyi"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Rwanda comparte fronteras con Uganda al norte (Gatuna/Katuna — uno de los cruces más transitados del EAC), Tanzania al este (Rusumo — corredor Tanzania Northern), Burundi al sur (Akanyaru/Nemba y Kanyaru/Bugarama) y la República Democrática del Congo al oeste (Goma/Gisenyi, Cyangugu/Bukavu y otros cruces del Lago Kivu)."
              : "Rwanda shares borders with Uganda to the north (Gatuna/Katuna — one of the busiest EAC crossings), Tanzania to the east (Rusumo — Tanzania Northern Corridor), Burundi to the south (Akanyaru/Nemba and Kanyaru/Bugarama), and the Democratic Republic of Congo to the west (Goma/Gisenyi, Cyangugu/Bukavu, and other Lake Kivu crossings)."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne integra la Dirección General de Inmigración y Emigración (DGIE) con feeds ANPR en tiempo real, listas de vigilancia compartidas con Interpol/EAC, alerta temprana transfronteriza de Monusco (DRC) y análisis de flujos del Protocolo de Libre Circulación de la EAC."
              : "KabatOne integrates the Directorate General of Immigration and Emigration (DGIE) with real-time ANPR feeds, shared watchlists with Interpol/EAC, cross-border early warning from MONUSCO (DRC), and EAC Free Movement Protocol flow analytics."}
          </p>

          {/* Compliance */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Cumplimiento Normativo — Protección de Datos, Ciberseguridad y Adquisiciones"
              : "Regulatory Compliance — Data Protection, Cybersecurity & Procurement"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Rwanda aplica la Ley N° 058/2021 sobre Protección de Datos Personales y Privacidad, supervisada por la Autoridad Nacional de Ciberseguridad (NCSA) y el Centro de Respuesta a Incidentes de Ciberseguridad de Rwanda (RwandaCSIRT). La Ley de Ciberseguridad N° 014/2016 y las directrices RURA para telecomunicaciones de seguridad pública regulan los despliegues de TIC del gobierno."
              : "Rwanda enforces Law No. 058/2021 on Personal Data Protection and Privacy, overseen by the National Cyber Security Authority (NCSA) and Rwanda Computer Security Incident Response Team (RwandaCSIRT). Cybersecurity Law No. 014/2016 and RURA guidelines for public safety telecommunications govern government ICT deployments."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "Las adquisiciones públicas se rigen por la Ley N° 12/2007 (modificada por la Ley N° 05/2013) y son supervisadas por la Autoridad Pública de Adquisiciones (RPPA), utilizando el Portal de e-Procurement Rwanda. Rwanda se adhiere a los marcos de adquisiciones del Banco Mundial/AfDB para proyectos financiados por donantes alineados con Vision 2050/NST1."
              : "Public procurement follows Law No. 12/2007 (amended by Law No. 05/2013), overseen by the Rwanda Public Procurement Authority (RPPA), using the Rwanda e-Procurement Portal. Rwanda adheres to World Bank/AfDB procurement frameworks for donor-funded projects aligned with Vision 2050/NST1."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne está estructurado para cumplir con los requisitos de soberanía de datos del NCSA, los estándares de cifrado de extremo a extremo, la localización de datos conforme a la Ley N° 058/2021 y los procedimientos de adquisición competitiva de la RPPA para contratos de seguridad pública."
              : "KabatOne is structured to meet NCSA data sovereignty requirements, end-to-end encryption standards, data localisation under Law No. 058/2021, and RPPA competitive procurement procedures for public safety contracts."}
          </p>

          {/* Vision 2050 */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Vision 2050 / NST1 — Rwanda como Hub Digital de África"
              : "Vision 2050 / NST1 — Rwanda as Africa's Digital Hub"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "La Vision 2050 de Rwanda y la Estrategia Nacional de Transformación 1 (NST1 2017-2024) priorizan la digitalización de la seguridad pública, la expansión de la ciudad inteligente de Kigali y el posicionamiento de Rwanda como el líder continental en TIC, fintech y seguridad de datos. Rwanda es miembro fundador del Área de Libre Comercio Continental Africana (AfCFTA) y la Comunidad del África Oriental (EAC), y tiene tratados de libre visado con más de 50 países africanos."
              : "Rwanda's Vision 2050 and National Strategy for Transformation 1 (NST1 2017-2024) prioritise public safety digitalisation, Kigali smart city expansion, and Rwanda's positioning as the continental leader in ICT, fintech, and data security. Rwanda is a founding member of the African Continental Free Trade Area (AfCFTA) and East African Community (EAC), with visa-free treaties with over 50 African countries."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne se alinea con NST1/Vision 2050 como infraestructura digital de seguridad pública de próxima generación, interoperable con el Rwanda Information Society Authority (RISA), el Hub de Innovación Kigali (KIC), el servicio de pago móvil Momo y los estándares de integración de datos del gobierno Rwanda Data Portal."
              : "KabatOne aligns with NST1/Vision 2050 as next-generation public safety digital infrastructure, interoperable with Rwanda Information Society Authority (RISA), Kigali Innovation City (KIC), Momo mobile payment service, and Rwanda Data Portal government data integration standards."}
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
                    ? "¿Qué capacidades ofrece KabatOne a la Policía Nacional de Rwanda?"
                    : "What capabilities does KabatOne offer Rwanda National Police?",
                  a: es
                    ? "KabatOne proporciona CAD unificado para los 5 provincias/30 distritos/416 sectores, despacho IA que integra Kigali Safe City CCTV, gestión de incidentes transfronterizos y cumplimiento de la Ley de Ciberseguridad 2016/RURA/RwandaCSIRT."
                    : "KabatOne provides unified CAD for all 5 provinces/30 districts/416 sectors, AI-dispatch integrating Kigali Safe City CCTV, cross-border incident management, and compliance with Cybersecurity Law 2016/RURA/RwandaCSIRT.",
                },
                {
                  q: es
                    ? "¿Cómo apoya KabatOne la seguridad de infraestructura crítica en Rwanda?"
                    : "How does KabatOne support critical infrastructure security in Rwanda?",
                  a: es
                    ? "La plataforma monitorea RECO/REG red eléctrica, Rwandair KGL/aeropuerto BK (en construcción Bugesera), RNRA/ONATRACOM rutas nacionales, y el corredor portuario de Mombasa/Dar es Salaam con gestión unificada de activos."
                    : "The platform monitors RECO/REG power grid, Rwandair KGL/Bugesera airport under construction, RNRA/ONATRACOM road network, and Mombasa/Dar es Salaam port corridor with unified asset management.",
                },
                {
                  q: es
                    ? "¿Puede KabatOne integrarse con la gestión de desastres de Rwanda?"
                    : "Can KabatOne integrate with Rwanda's disaster management?",
                  a: es
                    ? "Sí. KabatOne se integra con MIDIMAR/REMA para alertas de inundaciones/deslizamientos Virunga, monitoreo de volcanes Karisimbi/Nyiragongo (DRC frontera), y coordinación del gas metano del Lago Kivu."
                    : "Yes. KabatOne integrates with MIDIMAR/REMA for Virunga flood/landslide alerts, Karisimbi/Nyiragongo volcano monitoring (DRC border), and Lake Kivu methane gas emergency coordination.",
                },
                {
                  q: es
                    ? "¿Cómo cumple KabatOne con la normativa de datos de Rwanda?"
                    : "How does KabatOne comply with Rwanda's data regulations?",
                  a: es
                    ? "KabatOne se ajusta a la Ley N° 058/2021 de Protección de Datos, la Ley de Ciberseguridad N° 014/2016, los estándares NCSA/RwandaCSIRT y las directrices RURA para telecomunicaciones de seguridad pública."
                    : "KabatOne aligns with Law No. 058/2021 on Data Protection, Cybersecurity Law No. 014/2016, NCSA/RwandaCSIRT standards, and RURA guidelines for public safety telecommunications.",
                },
                {
                  q: es
                    ? "¿Qué diferencia a KabatOne en la gestión de fronteras de Rwanda?"
                    : "What sets KabatOne apart for Rwanda's border management?",
                  a: es
                    ? "KabatOne unifica la inteligencia de los cruces Gatuna/Katuna (Uganda), Rusumo (Tanzania), Akanyaru/Nemba (Burundi) y Goma/Gisenyi (DRC) con reconocimiento ANPR, flujos EAC/AfCFTA y alerta temprana RIM."
                    : "KabatOne unifies intelligence from Gatuna/Katuna (Uganda), Rusumo (Tanzania), Akanyaru/Nemba (Burundi), and Goma/Gisenyi (DRC) crossings with ANPR recognition, EAC/AfCFTA trade flows, and RIM early warning.",
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
              ? "¿Listo para modernizar la seguridad pública en Rwanda?"
              : "Ready to modernize public safety in Rwanda?"
          }
          subtitle={
            es
              ? "Hable con nuestros especialistas sobre RNP, RDF, MIDIMAR y los programas de ciudad inteligente de Kigali."
              : "Speak with our specialists about RNP, RDF, MIDIMAR, and Kigali's smart city programs."
          }
        />
      </main>
      <Footer es={es} />
    </>
  );
}
