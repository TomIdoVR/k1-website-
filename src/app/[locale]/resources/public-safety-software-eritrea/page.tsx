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
  return generatePageMetadata("publicSafetySoftwareEritrea", locale);
}

export default async function PublicSafetySoftwareEritreaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const article = articleSchema(
    es
      ? "Software de Seguridad Pública para Eritrea | EDF/EPS, Puerto de Massawa y Seguridad Marítima en el Mar Rojo – KabatOne"
      : "Public Safety Software for Eritrea | EDF/EPS, Port of Massawa & Red Sea Maritime Security – KabatOne",
    es
      ? "KabatOne ofrece plataforma de seguridad pública para las Fuerzas de Defensa de Eritrea, la Policía del Estado de Eritrea, gestión portuaria en Massawa/Assab y seguridad marítima en el Estrecho de Bab-el-Mandeb."
      : "KabatOne delivers public safety platform for the Eritrea Defence Forces, Eritrea State Police, port management at Massawa/Assab, and maritime security across the Red Sea and Bab-el-Mandeb corridor.",
    es
      ? "https://kabatone.com/es/resources/public-safety-software-eritrea"
      : "https://kabatone.com/resources/public-safety-software-eritrea",
    "2026-05-19"
  );

  const faq = faqPageSchema([
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Eritrea?"
        : "What are the main security forces in Eritrea?",
      answer: es
        ? "Las Fuerzas de Defensa de Eritrea (EDF) con aproximadamente 200,000 efectivos y reservistas bajo el Servicio Nacional son la principal fuerza armada. La Policía del Estado de Eritrea (EPS) opera en 6 zonas administrativas. La Guardia Costera patrulla las 2,234 km de costa en el Mar Rojo, incluyendo las Islas Dahlak (más de 200 islas)."
        : "The Eritrea Defence Forces (EDF) with approximately 200,000 personnel and reservists under National Service are the primary armed force. The Eritrea State Police (EPS) operates across 6 administrative zones. The Coast Guard patrols the 2,234 km Red Sea coastline including the Dahlak Archipelago (200+ islands).",
    },
    {
      question: es
        ? "¿Qué infraestructura portuaria tiene Eritrea?"
        : "What port infrastructure does Eritrea have?",
      answer: es
        ? "El Puerto de Massawa es el principal puerto comercial en el Mar Rojo con capacidad de 1.5 millones de toneladas anuales, gestionado por la Eritrea Ports Authority (EPA). El Puerto de Assab, en el sur, fue el principal acceso marítimo de Etiopía antes de 1998 y mantiene potencial estratégico regional. Ambos puertos tienen instalaciones navales militares."
        : "Port of Massawa is the main commercial port on the Red Sea with 1.5 million tonnes annual capacity, managed by Eritrea Ports Authority (EPA). Port of Assab in the south was Ethiopia's main sea access before 1998 and retains regional strategic potential. Both ports have military naval facilities.",
    },
    {
      question: es
        ? "¿Qué riesgos de seguridad enfrenta Eritrea?"
        : "What security risks does Eritrea face?",
      answer: es
        ? "La frontera etíope de 1,033 km permaneció en disputa hasta el Acuerdo de Paz de Jeddah (2018); persisten tensiones residuales. La frontera con Yibuti (Ras Doumeira) disputada desde 2008. La actividad de los hutíes en el Mar Rojo amenaza el tráfico naval. El tráfico de personas hacia Europa atraviesa Eritrea por la ruta Sahara-Mediterráneo. La inseguridad alimentaria afecta a zonas rurales después de la sequía 2022–2023."
        : "The 1,033 km Ethiopian border remained disputed until the Jeddah Peace Agreement (2018); residual tensions persist. The Djibouti border (Ras Doumeira) has been disputed since 2008. Houthi activity in the Red Sea threatens naval traffic. Human trafficking to Europe routes through Eritrea via the Sahara-Mediterranean path. Food insecurity affects rural areas after 2022–2023 drought.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Eritrea?"
        : "What is the legal and procurement framework in Eritrea?",
      answer: es
        ? "Eritrea opera bajo un sistema de gobierno altamente centralizado con el PFDJ como partido único. La Proclamación de Telecomunicaciones N.° 131/2003 y el ERITEC (operador estatal de telecom) regulan las comunicaciones. Las adquisiciones gubernamentales son gestionadas por el Ministerio de Finanzas con fuerte participación de empresas estatales (RSADO, Segen Construction). Los proyectos internacionales involucran a China (EXIM Bank/CCCC) y la OPEP."
        : "Eritrea operates under a highly centralized government with PFDJ as the single party. Proclamation No. 131/2003 on Telecommunications and ERITEC (state telecom operator) govern communications. Government procurement is managed by the Ministry of Finance with heavy state enterprise involvement (RSADO, Segen Construction). International projects involve China (EXIM Bank/CCCC) and OPEC Fund.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Eritrea?"
        : "How does KabatOne support public safety in Eritrea?",
      answer: es
        ? "KabatOne integra sistemas de despacho para la EPS en 6 zonas administrativas, gestión de incidentes para los puertos de Massawa y Assab, coordinación de la Guardia Costera en el Archipiélago Dahlak, y supervisión de fronteras con Etiopía, Djibouti y Sudán con alertas en tiempo real."
        : "KabatOne integrates dispatch systems for EPS across 6 administrative zones, incident management for Massawa and Assab ports, Coast Guard coordination in the Dahlak Archipelago, and border monitoring with Ethiopia, Djibouti, and Sudan with real-time alerts.",
    },
  ]);

  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources" : "https://kabatone.com/resources" },
    {
      name: es ? "Software de Seguridad Pública para Eritrea" : "Public Safety Software for Eritrea",
      url: es ? "https://kabatone.com/es/resources/public-safety-software-eritrea" : "https://kabatone.com/resources/public-safety-software-eritrea",
    },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Nav />
      <main className="bg-white text-gray-900">

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] text-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-3">
              {es ? "Eritrea · Cuerno de África · Mar Rojo" : "Eritrea · Horn of Africa · Red Sea"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {es
                ? "Software de Seguridad Pública para Eritrea"
                : "Public Safety Software for Eritrea"}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {es
                ? "Plataforma modular para las Fuerzas de Defensa de Eritrea, la Policía del Estado (EPS), gestión portuaria en Massawa y Assab, y coordinación marítima a lo largo del Mar Rojo."
                : "Modular platform for the Eritrea Defence Forces, State Police (EPS), port management at Massawa and Assab, and maritime coordination along the Red Sea coastline."}
            </p>
          </div>
        </section>

        {/* Security Forces */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fuerzas de Seguridad" : "Security Forces"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  {es ? "Fuerzas Armadas y Policía" : "Armed Forces & Police"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "Fuerzas de Defensa de Eritrea (EDF)" : "Eritrea Defence Forces (EDF)"}</strong> — {es ? "~200,000 efectivos incluidos reservistas del Servicio Nacional" : "~200,000 personnel including National Service reservists"}</li>
                  <li><strong>{es ? "Policía del Estado de Eritrea (EPS)" : "Eritrea State Police (EPS)"}</strong> — {es ? "6 zonas administrativas: Maekel, Anseba, Debub, Debubawi Keyih Bahri, Gash-Barka, Semenawi Keyih Bahri" : "6 administrative zones: Maekel, Anseba, Debub, Southern Red Sea, Gash-Barka, Northern Red Sea"}</li>
                  <li><strong>{es ? "Guardia Costera de Eritrea" : "Eritrea Coast Guard"}</strong> — {es ? "patrulla 2,234 km de costa; Archipiélago Dahlak 200+ islas" : "patrols 2,234 km coastline; Dahlak Archipelago 200+ islands"}</li>
                  <li><strong>{es ? "Inteligencia Nacional (PFDJ/Seguridad)" : "National Intelligence (PFDJ/Security)"}</strong> — {es ? "inteligencia interna y contraterrorismo" : "internal intelligence and counterterrorism"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  {es ? "Estructura Administrativa" : "Administrative Structure"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "Capital: Asmara" : "Capital: Asmara"}</strong> — {es ? "800,000+ habitantes; base del EDF, ERITEC, ministros" : "800,000+ population; EDF base, ERITEC, ministries"}</li>
                  <li><strong>{es ? "Maekel (Zona Central)" : "Maekel (Central Zone)"}</strong> — {es ? "incluye Asmara; mayor concentración policial" : "includes Asmara; highest police concentration"}</li>
                  <li><strong>{es ? "Semenawi Keyih Bahri (Norte Mar Rojo)" : "Northern Red Sea Zone"}</strong> — {es ? "Massawa; base naval; turismo islas Dahlak" : "Massawa; naval base; Dahlak island tourism"}</li>
                  <li><strong>{es ? "Debubawi Keyih Bahri (Sur Mar Rojo)" : "Southern Red Sea Zone"}</strong> — {es ? "Assab; frontera con Yibuti/Etiopía" : "Assab; Djibouti/Ethiopia border"}</li>
                  <li><strong>{es ? "Gash-Barka" : "Gash-Barka"}</strong> — {es ? "frontera con Sudán/Etiopía; agricultura/minerales" : "Sudan/Ethiopia border; agriculture/minerals"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ports & Maritime */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Puertos e Infraestructura Marítima" : "Ports & Maritime Infrastructure"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  {es ? "Puerto de Massawa" : "Port of Massawa"}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{es ? "Principal puerto comercial en el Mar Rojo" : "Main commercial Red Sea port"}</li>
                  <li>{es ? "Capacidad: 1.5 millones de toneladas/año" : "Capacity: 1.5 million tonnes/year"}</li>
                  <li>{es ? "Eritrea Ports Authority (EPA)" : "Eritrea Ports Authority (EPA)"}</li>
                  <li>{es ? "Puerto histórico — instalado desde el período colonial italiano" : "Historic port — Italian colonial era installation"}</li>
                  <li>{es ? "Base naval militar adyacente" : "Adjacent military naval base"}</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  {es ? "Puerto de Assab" : "Port of Assab"}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{es ? "Sur de Eritrea; acceso estratégico al Cuerno de África" : "Southern Eritrea; strategic Horn of Africa access"}</li>
                  <li>{es ? "Principal salida marítima de Etiopía hasta 1998" : "Ethiopia's main sea outlet until 1998"}</li>
                  <li>{es ? "Refinería de petróleo Assab (capacidad reducida)" : "Assab oil refinery (reduced capacity)"}</li>
                  <li>{es ? "Base militar UAE (arrendada 2015–2021)" : "UAE military base (leased 2015–2021)"}</li>
                  <li>{es ? "Corredor de negociación con Etiopía post-2018" : "Post-2018 Ethiopia negotiation corridor"}</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  {es ? "Seguridad Marítima" : "Maritime Security"}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{es ? "2,234 km de costa en el Mar Rojo" : "2,234 km Red Sea coastline"}</li>
                  <li>{es ? "Archipiélago Dahlak — 200+ islas; pesca y turismo" : "Dahlak Archipelago — 200+ islands; fishing and tourism"}</li>
                  <li>{es ? "Ataques hutíes 2023–2025 al tráfico Red Sea" : "Houthi attacks 2023–2025 on Red Sea shipping"}</li>
                  <li>{es ? "EUNAVFOR Atalanta coordinación regional" : "EUNAVFOR Atalanta regional coordination"}</li>
                  <li>{es ? "Plataformas petrolíferas del Mar Rojo — exploración" : "Red Sea oil platforms — exploration stage"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Borders & Risks */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fronteras y Riesgos Operacionales" : "Borders & Operational Risks"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Fronteras Terrestres" : "Land Borders"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>{es ? "Etiopía — 1,033 km" : "Ethiopia — 1,033 km"}</strong>
                    <p className="text-sm text-gray-600">{es ? "Frontera normalizada desde Jeddah 2018; pasos Zalambessa/Serha/Omhajer/Bure; corredor comercial en desarrollo" : "Normalized since Jeddah 2018; Zalambessa/Serha/Omhajer/Bure crossings; developing trade corridor"}</p>
                  </li>
                  <li>
                    <strong>{es ? "Yibuti — 125 km (Ras Doumeira)" : "Djibouti — 125 km (Ras Doumeira)"}</strong>
                    <p className="text-sm text-gray-600">{es ? "Frontera disputada; desmilitarizada con mediación qatarí desde 2010; tensión residual" : "Disputed border; demilitarized with Qatari mediation since 2010; residual tension"}</p>
                  </li>
                  <li>
                    <strong>{es ? "Sudán — 605 km (Kassala/Gash-Barka)" : "Sudan — 605 km (Kassala/Gash-Barka)"}</strong>
                    <p className="text-sm text-gray-600">{es ? "Refugiados eritreos en Sudán (100,000+); contrabando de armas y personas" : "Eritrean refugees in Sudan (100,000+); weapons and human smuggling"}</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Riesgos y Desafíos" : "Risks & Challenges"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>{es ? "Tráfico de Personas" : "Human Trafficking"}</strong>
                    <p className="text-sm text-gray-600">{es ? "Ruta Eritrea → Sudán → Libia → Mediterráneo; UNHCR gestiona más de 100,000 eritreos en Etiopía/Sudán" : "Eritrea → Sudan → Libya → Mediterranean route; UNHCR manages 100,000+ Eritreans in Ethiopia/Sudan"}</p>
                  </li>
                  <li>
                    <strong>{es ? "Inseguridad Alimentaria" : "Food Insecurity"}</strong>
                    <p className="text-sm text-gray-600">{es ? "Sequía cíclica en Gash-Barka y Debub; WFP/FAO programas de asistencia" : "Cyclical drought in Gash-Barka and Debub; WFP/FAO assistance programs"}</p>
                  </li>
                  <li>
                    <strong>{es ? "Actividad Houthi en Mar Rojo" : "Houthi Red Sea Activity"}</strong>
                    <p className="text-sm text-gray-600">{es ? "Ataques a embarcaciones comerciales 2023–2025; afecta el tráfico portuario de Massawa/Assab" : "Attacks on commercial vessels 2023–2025; affects Massawa/Assab port traffic"}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Legal */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Marco Legal, TIC y Adquisiciones" : "Legal, ICT & Procurement Framework"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Marco Normativo" : "Regulatory Framework"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "Proclamación N.° 131/2003 — Telecomunicaciones" : "Proclamation No. 131/2003 — Telecommunications"}</strong> — {es ? "ERITEC operador estatal; monopolio" : "ERITEC state operator; monopoly"}</li>
                  <li><strong>{es ? "Proclamación N.° 82/1996 — Actividades Comerciales" : "Proclamation No. 82/1996 — Commercial Activities"}</strong> — {es ? "marco para contratos con el gobierno" : "framework for government contracts"}</li>
                  <li><strong>{es ? "Ministerio de Finanzas y Desarrollo Nacional" : "Ministry of Finance and National Development"}</strong> — {es ? "supervisión de adquisiciones y presupuesto" : "procurement oversight and budget"}</li>
                  <li><strong>RSADO / Segen Construction</strong> — {es ? "empresas estatales dominantes en contratos" : "dominant state enterprises in contracts"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Socios Internacionales" : "International Partners"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "China (EXIM Bank / CCCC)" : "China (EXIM Bank / CCCC)"}</strong> — {es ? "infraestructura portuaria y carretera" : "port and road infrastructure"}</li>
                  <li><strong>{es ? "Fondo OPEP para el Desarrollo Internacional" : "OPEC Fund for International Development"}</strong> — {es ? "proyectos de desarrollo rural y agua" : "rural development and water projects"}</li>
                  <li><strong>{es ? "Unión Africana / IGAD" : "African Union / IGAD"}</strong> — {es ? "mediación de paz y coordinación regional" : "peace mediation and regional coordination"}</li>
                  <li><strong>UAE</strong> — {es ? "acuerdos bilaterales y puertos (2015–2021)" : "bilateral agreements and ports (2015–2021)"}</li>
                  <li><strong>{es ? "Acuerdo de Jeddah 2018 (mediado por Arabia Saudita/UAE)" : "Jeddah Agreement 2018 (Saudi/UAE mediated)"}</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne Fit */}
        <section className="py-16 px-6 bg-blue-900 text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Plataforma KabatOne para Eritrea" : "KabatOne Platform for Eritrea"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {es ? "Despacho EPS — 6 Zonas" : "EPS Dispatch — 6 Zones"}
                </h3>
                <p className="text-blue-100 text-sm">
                  {es
                    ? "Centro de despacho unificado para la Policía del Estado en Maekel, Anseba, Debub, Semenawi/Debubawi Keyih Bahri y Gash-Barka con comunicaciones encriptadas."
                    : "Unified dispatch center for State Police across Maekel, Anseba, Debub, Northern/Southern Red Sea, and Gash-Barka zones with encrypted communications."}
                </p>
              </div>
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {es ? "Gestión Portuaria" : "Port Management"}
                </h3>
                <p className="text-blue-100 text-sm">
                  {es
                    ? "Control de incidentes para los puertos de Massawa y Assab (EPA), coordinación de la Guardia Costera en el Archipiélago Dahlak y seguimiento AIS del tráfico naval en el Mar Rojo."
                    : "Incident control for Massawa and Assab ports (EPA), Coast Guard coordination in the Dahlak Archipelago, and AIS vessel tracking in the Red Sea."}
                </p>
              </div>
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {es ? "Fronteras y Migración" : "Borders & Migration"}
                </h3>
                <p className="text-blue-100 text-sm">
                  {es
                    ? "Supervisión de fronteras con Etiopía (Zalambessa/Serha/Omhajer), Sudán (Kassala/Gash-Barka) y Yibuti (Ras Doumeira), con alertas de flujos migratorios y contrabando."
                    : "Border monitoring with Ethiopia (Zalambessa/Serha/Omhajer), Sudan (Kassala/Gash-Barka), and Djibouti (Ras Doumeira), with migration flow and smuggling alerts."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">
              {es ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: es ? "¿Cuáles son las principales fuerzas de seguridad en Eritrea?" : "What are the main security forces in Eritrea?",
                  a: es
                    ? "Las Fuerzas de Defensa de Eritrea (EDF) con ~200,000 efectivos y la Policía del Estado (EPS) en 6 zonas administrativas son las principales instituciones. La Guardia Costera patrulla las 2,234 km de costa en el Mar Rojo y el Archipiélago Dahlak."
                    : "The Eritrea Defence Forces (EDF) with ~200,000 personnel and State Police (EPS) across 6 administrative zones are the primary institutions. The Coast Guard patrols 2,234 km of Red Sea coastline and the Dahlak Archipelago.",
                },
                {
                  q: es ? "¿Qué infraestructura portuaria tiene Eritrea?" : "What port infrastructure does Eritrea have?",
                  a: es
                    ? "El Puerto de Massawa (1.5M toneladas/año, EPA) es el principal puerto comercial. El Puerto de Assab en el sur mantiene potencial estratégico regional y fue la principal salida marítima etíope antes de 1998. Ambos tienen instalaciones navales militares."
                    : "Port of Massawa (1.5M tonnes/year, EPA) is the main commercial port. Port of Assab in the south retains regional strategic potential and was Ethiopia's main sea outlet before 1998. Both have military naval facilities.",
                },
                {
                  q: es ? "¿Qué riesgos de seguridad enfrenta Eritrea?" : "What security risks does Eritrea face?",
                  a: es
                    ? "Tensiones residuales en la frontera etíope post-Jeddah, frontera disputada con Yibuti (Ras Doumeira), tráfico de personas hacia Europa, inseguridad alimentaria en Gash-Barka/Debub, y ataques hutíes 2023–2025 al tráfico naval en el Mar Rojo."
                    : "Residual Ethiopian border tensions post-Jeddah, disputed Djibouti border (Ras Doumeira), human trafficking to Europe, food insecurity in Gash-Barka/Debub, and Houthi 2023–2025 attacks on Red Sea shipping.",
                },
                {
                  q: es ? "¿Cuál es el marco de adquisiciones en Eritrea?" : "What is the procurement framework in Eritrea?",
                  a: es
                    ? "El Ministerio de Finanzas supervisa las adquisiciones con fuerte participación de empresas estatales (RSADO, Segen Construction). Los proyectos internacionales involucran a China (EXIM Bank/CCCC) y el Fondo OPEP. El acceso al mercado es altamente centralizado."
                    : "The Ministry of Finance oversees procurement with heavy state enterprise involvement (RSADO, Segen Construction). International projects involve China (EXIM Bank/CCCC) and OPEC Fund. Market access is highly centralized.",
                },
                {
                  q: es ? "¿Cómo apoya KabatOne la seguridad en Eritrea?" : "How does KabatOne support security in Eritrea?",
                  a: es
                    ? "KabatOne integra despacho para la EPS en 6 zonas, gestión de incidentes en Massawa/Assab, coordinación de la Guardia Costera en el Archipiélago Dahlak y supervisión de fronteras con Etiopía, Sudán y Yibuti."
                    : "KabatOne integrates EPS dispatch across 6 zones, incident management at Massawa/Assab, Coast Guard coordination in the Dahlak Archipelago, and border monitoring with Ethiopia, Sudan, and Djibouti.",
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{q}</h3>
                  <p className="text-gray-700">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          es={es}
          h2={es ? "¿Listo para modernizar la seguridad pública en Eritrea?" : "Ready to modernize public safety in Eritrea?"}
          subtitle={es
            ? "Contáctenos para descubrir cómo KabatOne apoya a la EPS, operaciones portuarias en Massawa y Assab, y coordinación marítima a lo largo del Mar Rojo eritreo."
            : "Contact us to discover how KabatOne supports EPS, port operations at Massawa and Assab, and maritime coordination along Eritrea's Red Sea coastline."}
        />
        <Footer es={es} />
      </main>
    </>
  );
}
