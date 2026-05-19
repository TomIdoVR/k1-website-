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
  return generatePageMetadata("publicSafetySoftwareDjibouti", locale);
}

export default async function PublicSafetySoftwareDjiboutiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const article = articleSchema(
    es
      ? "Software de Seguridad Pública para Yibuti | Gestión Portuaria, Bases Militares y Seguridad Marítima – KabatOne"
      : "Public Safety Software for Djibouti | Port Management, Military Bases & Maritime Security – KabatOne",
    es
      ? "KabatOne ofrece plataforma de seguridad pública para la Policía Nacional de Yibuti, gestión del Puerto de Yibuti, coordinación con Camp Lemonnier (AFRICOM) y seguridad marítima en el Estrecho de Bab-el-Mandeb."
      : "KabatOne delivers public safety platform for the Djibouti National Police, Port of Djibouti management, coordination with Camp Lemonnier (AFRICOM), and maritime security across the Bab-el-Mandeb strait.",
    es
      ? "https://kabatone.com/es/resources/public-safety-software-djibouti/"
      : "https://kabatone.com/resources/public-safety-software-djibouti/",
    "2026-05-19"
  );

  const faq = faqPageSchema([
    {
      question: es
        ? "¿Qué fuerzas de seguridad operan en Yibuti?"
        : "What security forces operate in Djibouti?",
      answer: es
        ? "La Policía Nacional de Yibuti (PNJ), la Gendarmería Nacional, las Fuerzas Armadas de Yibuti (FAD) y el Servicio d'État-Major de Sécurité (SEMSE) son las principales instituciones. Camp Lemonnier alberga aproximadamente 4,000 efectivos de AFRICOM de EE.UU., junto con bases militares francesas (FFDJ ~1,450 efectivos), chinas (Base de Apoyo Logístico de la Marina) y japonesas (JGSDF)."
        : "The Djibouti National Police (PNJ), National Gendarmerie, Djibouti Armed Forces (FAD), and the SEMSE are the primary institutions. Camp Lemonnier hosts approximately 4,000 US AFRICOM personnel, alongside French (FFDJ ~1,450 troops), Chinese (PLA Navy Logistical Support Base), and Japanese (JGSDF) military bases.",
    },
    {
      question: es
        ? "¿Por qué es estratégico el Puerto de Yibuti?"
        : "Why is the Port of Djibouti strategically significant?",
      answer: es
        ? "El Puerto de Yibuti maneja el 95% del comercio exterior de Etiopía y es uno de los puertos más transitados del Cuerno de África. Doraleh Container Terminal (DP World/concesión DCP) procesa más de 1 millón de TEUs anuales, mientras que el Puerto Multipropósito de Doraleh y el Puerto de Tadjourah amplían la capacidad regional. El Estrecho de Bab-el-Mandeb canaliza el 12% del comercio global."
        : "Port of Djibouti handles 95% of Ethiopia's foreign trade and is one of the busiest ports in the Horn of Africa. Doraleh Container Terminal (DP World/DCP concession) processes over 1 million TEUs annually, while Doraleh Multi-Purpose Port and Port of Tadjourah expand regional capacity. The Bab-el-Mandeb strait channels 12% of global trade.",
    },
    {
      question: es
        ? "¿Qué amenazas marítimas enfrenta Yibuti?"
        : "What maritime threats does Djibouti face?",
      answer: es
        ? "La piratería somalí, el contrabando de armas al Yemen, el tráfico de personas desde el Cuerno de África, y los ataques de los hutíes al tráfico en el Mar Rojo son amenazas activas. El EUNAVFOR Atalanta tiene su QG en Djibouti, junto con la Fuerza Combinada de la Tarea 151 (CTF-151) de la Coalición Marítima Combinada. El Sistema AIS regional y MARSIT supervisan el tráfico en el Bab-el-Mandeb."
        : "Somali piracy, weapons smuggling to Yemen, human trafficking from the Horn of Africa, and Houthi attacks on Red Sea shipping are active threats. EUNAVFOR Atalanta has its HQ in Djibouti, alongside Combined Task Force 151 (CTF-151) of the Combined Maritime Forces. Regional AIS networks and MARSIT monitor Bab-el-Mandeb traffic.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal TIC y adquisiciones en Yibuti?"
        : "What is the ICT and procurement legal framework in Djibouti?",
      answer: es
        ? "La Ley de Telecomunicaciones de 2004 y el Código de Procedimiento Penal regulan la seguridad. Djibouti Telecom es el operador estatal de telecomunicaciones. Las adquisiciones públicas se rigen por el Code des Marchés Publics (Décret 2009-0224). Djibouti trabaja con el Banco Mundial, USAID, AMISOM, IGAD y donantes de la UE para proyectos de seguridad."
        : "The 2004 Telecommunications Law and Code of Criminal Procedure govern security. Djibouti Telecom is the state telecom operator. Public procurement follows the Code des Marchés Publics (Décret 2009-0224). Djibouti works with the World Bank, USAID, AMISOM, IGAD, and EU donors for security projects.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad en Yibuti?"
        : "How does KabatOne support security in Djibouti?",
      answer: es
        ? "KabatOne integra comunicaciones multi-fuente para PNJ y gendarmes, despacho para control portuario en Doraleh, y coordinación con las bases multinacionales aliadas. La plataforma Avalon permite conciencia situacional en tiempo real, gestión de incidentes costeros, y supervisión de fronteras terrestres con Etiopía, Somalia y Eritrea."
        : "KabatOne integrates multi-source communications for PNJ and gendarmes, dispatch for Doraleh port control, and coordination with allied multinational bases. The Avalon platform enables real-time situational awareness, coastal incident management, and land border monitoring with Ethiopia, Somalia, and Eritrea.",
    },
  ]);

  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/" },
    {
      name: es ? "Software de Seguridad Pública para Yibuti" : "Public Safety Software for Djibouti",
      url: es ? "https://kabatone.com/es/resources/public-safety-software-djibouti/" : "https://kabatone.com/resources/public-safety-software-djibouti/",
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
              {es ? "Yibuti · Cuerno de África · Bab-el-Mandeb" : "Djibouti · Horn of Africa · Bab-el-Mandeb"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {es
                ? "Software de Seguridad Pública para Yibuti"
                : "Public Safety Software for Djibouti"}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {es
                ? "Plataforma modular para la Policía Nacional de Yibuti, gestión portuaria en Doraleh, coordinación con AFRICOM/FFDJ/PLA y seguridad marítima en el Estrecho de Bab-el-Mandeb."
                : "Modular platform for the Djibouti National Police, Doraleh port control, coordination with AFRICOM/FFDJ/PLA bases, and maritime security across the Bab-el-Mandeb strait."}
            </p>
          </div>
        </section>

        {/* Security Forces */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fuerzas de Seguridad y Presencia Multinacional" : "Security Forces & Multinational Presence"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  {es ? "Fuerzas Nacionales" : "National Forces"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "Policía Nacional de Yibuti (PNJ)" : "Djibouti National Police (PNJ)"}</strong> — {es ? "seguridad urbana, Djiboutiville y distritos" : "urban security, Djiboutiville and districts"}</li>
                  <li><strong>{es ? "Gendarmería Nacional" : "National Gendarmerie"}</strong> — {es ? "zonas rurales, fronteras y seguridad de carreteras" : "rural areas, borders, and road security"}</li>
                  <li><strong>{es ? "Fuerzas Armadas de Yibuti (FAD)" : "Djibouti Armed Forces (FAD)"}</strong> — {es ? "defensa nacional y zonas de exclusión" : "national defense and exclusion zones"}</li>
                  <li><strong>SEMSE</strong> — {es ? "Servicio de seguridad del estado mayor" : "State security intelligence service"}</li>
                  <li><strong>{es ? "Guardia Costera" : "Coast Guard"}</strong> — {es ? "patrulla marítima y SAR en el Golfo de Tadjourah" : "maritime patrol and SAR in Gulf of Tadjourah"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  {es ? "Bases Militares Extranjeras" : "Foreign Military Bases"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "EE.UU. – Camp Lemonnier (AFRICOM)" : "USA – Camp Lemonnier (AFRICOM)"}</strong> — {es ? "~4,000 efectivos, CJTF-HOA, operaciones de drones" : "~4,000 personnel, CJTF-HOA, drone operations"}</li>
                  <li><strong>{es ? "Francia – FFDJ" : "France – FFDJ"}</strong> — {es ? "~1,450 efectivos, 5ème RIAOM, presencia histórica desde 1977" : "~1,450 troops, 5ème RIAOM, historical presence since 1977"}</li>
                  <li><strong>{es ? "China – Base Logística Naval PLA" : "China – PLA Navy Logistical Support Base"}</strong> — {es ? "primera base militar china en el extranjero" : "China's first overseas military base"}</li>
                  <li><strong>{es ? "Japón – JGSDF" : "Japan – JGSDF"}</strong> — {es ? "operaciones anti-piratería en el Índico" : "anti-piracy operations in the Indian Ocean"}</li>
                  <li><strong>EUNAVFOR Atalanta HQ</strong> — {es ? "cuartel general en Yibuti para anti-piratería somalí" : "Djibouti HQ for Somali anti-piracy operations"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Port & Maritime */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Infraestructura Portuaria y Marítima" : "Port & Maritime Infrastructure"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  {es ? "Puerto de Yibuti" : "Port of Djibouti"}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{es ? "Puerto histórico, punto de tránsito para Etiopía" : "Historic port, Ethiopia transit hub"}</li>
                  <li>{es ? "Gestión Doraleh Container Terminal (DCP/DP World)" : "Doraleh Container Terminal (DCP/DP World)"}</li>
                  <li>{es ? "+1M TEUs/año" : "+1M TEUs/year"}</li>
                  <li>{es ? "Puerto Multipropósito de Doraleh (DMT)" : "Doraleh Multi-Purpose Port (DMT)"}</li>
                  <li>{es ? "Corredor Djibouti-Addis (tren electrificado)" : "Djibouti-Addis corridor (electrified rail)"}</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  {es ? "Puerto de Tadjourah y Otros" : "Port of Tadjourah & Others"}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{es ? "Puerto de Tadjourah — potasa de Etiopía" : "Tadjourah Port — Ethiopian potash exports"}</li>
                  <li>{es ? "Puerto de Goubet — infraestructura industrial" : "Goubet Port — industrial infrastructure"}</li>
                  <li>{es ? "Base Naval de Heron — FAD y Guardia Costera" : "Heron Naval Base — FAD and Coast Guard"}</li>
                  <li>{es ? "Aeropuerto Internacional de Djibouti (HADR)" : "Djibouti International Airport (HADR)"}</li>
                  <li>{es ? "Zona Franca Internacional de Djibouti (DIFTZ)" : "Djibouti International Free Trade Zone (DIFTZ)"}</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                  {es ? "Seguridad Marítima" : "Maritime Security"}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>{es ? "Estrecho de Bab-el-Mandeb — 12% del comercio global" : "Bab-el-Mandeb — 12% of global trade"}</li>
                  <li>{es ? "CTF-151 — operaciones anti-piratería" : "CTF-151 — anti-piracy operations"}</li>
                  <li>{es ? "MARSIT / AIS regional surveillance" : "MARSIT / regional AIS surveillance"}</li>
                  <li>{es ? "Ataques hutíes al Mar Rojo 2023–2025" : "Houthi Red Sea attacks 2023–2025"}</li>
                  <li>{es ? "Tráfico de personas Etiopía→Yemen" : "Human trafficking Ethiopia→Yemen corridor"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Borders & Disaster */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fronteras, Desastres y Gestión de Emergencias" : "Borders, Disasters & Emergency Management"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Fronteras Terrestres y Corredores" : "Land Borders & Corridors"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>{es ? "Etiopía — Galafi/Dewele" : "Ethiopia — Galafi/Dewele"}</strong>
                    <p className="text-sm text-gray-600">{es ? "Principal corredor comercial; 95% del comercio exterior etíope" : "Primary trade corridor; 95% of Ethiopian foreign trade"}</p>
                  </li>
                  <li>
                    <strong>{es ? "Somalia — Loyada" : "Somalia — Loyada"}</strong>
                    <p className="text-sm text-gray-600">{es ? "Control migratorio y anti-contrabando; Somalilandia adyacente" : "Migration control and anti-smuggling; Somaliland adjacent"}</p>
                  </li>
                  <li>
                    <strong>{es ? "Eritrea — Ras Doumeira" : "Eritrea — Ras Doumeira"}</strong>
                    <p className="text-sm text-gray-600">{es ? "Frontera disputada; zona desmilitarizada desde 2008" : "Disputed border; demilitarized zone since 2008"}</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Riesgos Naturales y Emergencias" : "Natural Hazards & Emergencies"}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>{es ? "Actividad Volcánica — Erta Ale / Ardoukoba" : "Volcanic Activity — Erta Ale / Ardoukoba"}</strong>
                    <p className="text-sm text-gray-600">{es ? "Rift del Afar; geodesia activa y riesgo sísmico" : "Afar Rift; active geodesy and seismic risk"}</p>
                  </li>
                  <li>
                    <strong>{es ? "Inundaciones en Djiboutiville" : "Flash Flooding in Djiboutiville"}</strong>
                    <p className="text-sm text-gray-600">{es ? "Lluvias estacionales intensas; ANAGED gestiona alerta temprana" : "Intense seasonal rains; ANAGED manages early warning"}</p>
                  </li>
                  <li>
                    <strong>{es ? "Refugiados y Migrantes" : "Refugees & Migrants"}</strong>
                    <p className="text-sm text-gray-600">{es ? "UNHCR gestiona campo Ali Addeh/Holl Holl (50,000+ refugiados somalíes/etíopes)" : "UNHCR manages Ali Addeh/Holl Holl camp (50,000+ Somali/Ethiopian refugees)"}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Legal & Procurement */}
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
                  <li><strong>{es ? "Ley de Telecomunicaciones 2004" : "Telecommunications Law 2004"}</strong> — {es ? "Djibouti Telecom operador estatal" : "Djibouti Telecom state operator"}</li>
                  <li><strong>{es ? "Código de Procedimiento Penal" : "Code of Criminal Procedure"}</strong> — {es ? "evidencia digital y vigilancia" : "digital evidence and surveillance"}</li>
                  <li><strong>{es ? "Décret 2009-0224 — Marchés Publics" : "Décret 2009-0224 — Marchés Publics"}</strong> — {es ? "licitaciones y adquisiciones gubernamentales" : "government tender and procurement"}</li>
                  <li><strong>{es ? "ARMP — Autoridad Reguladora de Compras Públicas" : "ARMP — Public Procurement Regulatory Authority"}</strong> — {es ? "supervisión y publicación de licitaciones" : "oversight and tender publication"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  {es ? "Donantes y Organismos Internacionales" : "Donors & International Partners"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>{es ? "Banco Mundial / IDA" : "World Bank / IDA"}</strong> — {es ? "infraestructura portuaria y gobernanza" : "port infrastructure and governance"}</li>
                  <li><strong>USAID / CJTF-HOA</strong> — {es ? "programas de seguridad y estabilización" : "security and stabilization programs"}</li>
                  <li><strong>{es ? "Unión Europea — EUCAP Somalia" : "European Union — EUCAP Somalia"}</strong> — {es ? "capacitación policía costera" : "coastal police capacity building"}</li>
                  <li><strong>IGAD / UA</strong> — {es ? "coordinación regional Cuerno de África" : "regional Horn of Africa coordination"}</li>
                  <li><strong>{es ? "Cooperación francesa (AFD)" : "French Cooperation (AFD)"}</strong> — {es ? "proyectos de modernización de seguridad" : "security modernization projects"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne Fit */}
        <section className="py-16 px-6 bg-blue-900 text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Plataforma KabatOne para Yibuti" : "KabatOne Platform for Djibouti"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {es ? "Operaciones Portuarias y Costeras" : "Port & Coastal Operations"}
                </h3>
                <p className="text-blue-100 text-sm">
                  {es
                    ? "Centro de comando para Doraleh Container Terminal, despacho de Guardia Costera, integración AIS para rastreo de embarcaciones en Bab-el-Mandeb y coordinación CTF-151/EUNAVFOR."
                    : "Command center for Doraleh Container Terminal, Coast Guard dispatch, AIS integration for vessel tracking in Bab-el-Mandeb, and CTF-151/EUNAVFOR coordination."}
                </p>
              </div>
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {es ? "Coordinación Multi-Base" : "Multi-Base Coordination"}
                </h3>
                <p className="text-blue-100 text-sm">
                  {es
                    ? "Protocolos seguros para gestión de incidentes conjuntos entre PNJ, Gendarmería, FAD y bases aliadas (AFRICOM/FFDJ/PLA). Integración con sistemas NATO y estándares OTAN."
                    : "Secure protocols for joint incident management between PNJ, Gendarmerie, FAD, and allied bases (AFRICOM/FFDJ/PLA). Integration with NATO systems and STANAG standards."}
                </p>
              </div>
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">
                  {es ? "Fronteras y Migración" : "Borders & Migration"}
                </h3>
                <p className="text-blue-100 text-sm">
                  {es
                    ? "Supervisión en tiempo real de pasos fronterizos Galafi/Dewele (Etiopía), Loyada (Somalia) y Ras Doumeira (Eritrea). Gestión de flujos migratorios UNHCR y alertas de contrabando."
                    : "Real-time monitoring of Galafi/Dewele (Ethiopia), Loyada (Somalia), and Ras Doumeira (Eritrea) border crossings. UNHCR migration flow management and smuggling alerts."}
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
                  q: es ? "¿Qué fuerzas de seguridad operan en Yibuti?" : "What security forces operate in Djibouti?",
                  a: es
                    ? "La Policía Nacional de Yibuti (PNJ), la Gendarmería Nacional, las Fuerzas Armadas de Yibuti (FAD) y el SEMSE son las principales instituciones. Camp Lemonnier alberga aproximadamente 4,000 efectivos de AFRICOM de EE.UU., junto con bases militares francesas (FFDJ ~1,450), chinas (Base Naval PLA) y japonesas (JGSDF)."
                    : "The Djibouti National Police (PNJ), National Gendarmerie, Djibouti Armed Forces (FAD), and SEMSE are the primary institutions. Camp Lemonnier hosts approximately 4,000 US AFRICOM personnel, alongside French (FFDJ ~1,450), Chinese (PLA Navy Base), and Japanese (JGSDF) military forces.",
                },
                {
                  q: es ? "¿Por qué es estratégico el Puerto de Yibuti?" : "Why is the Port of Djibouti strategically significant?",
                  a: es
                    ? "El Puerto de Yibuti maneja el 95% del comercio exterior de Etiopía y es uno de los puertos más transitados del Cuerno de África. Doraleh Container Terminal procesa más de 1 millón de TEUs anuales. El Estrecho de Bab-el-Mandeb canaliza el 12% del comercio global."
                    : "Port of Djibouti handles 95% of Ethiopia's foreign trade. Doraleh Container Terminal processes over 1 million TEUs annually. The Bab-el-Mandeb strait channels 12% of global trade.",
                },
                {
                  q: es ? "¿Qué amenazas marítimas enfrenta Yibuti?" : "What maritime threats does Djibouti face?",
                  a: es
                    ? "La piratería somalí, el contrabando de armas al Yemen, el tráfico de personas y los ataques hutíes al tráfico en el Mar Rojo son amenazas activas. El EUNAVFOR Atalanta tiene su QG en Djibouti junto con CTF-151."
                    : "Somali piracy, weapons smuggling to Yemen, human trafficking, and Houthi attacks on Red Sea shipping are active threats. EUNAVFOR Atalanta has its HQ in Djibouti alongside CTF-151.",
                },
                {
                  q: es ? "¿Cuál es el marco de adquisiciones en Yibuti?" : "What is the procurement framework in Djibouti?",
                  a: es
                    ? "Las adquisiciones públicas se rigen por el Code des Marchés Publics (Décret 2009-0224) y supervisadas por la ARMP. Yibuti trabaja con Banco Mundial, USAID, EUCAP, IGAD y AFD para proyectos de seguridad."
                    : "Public procurement follows the Code des Marchés Publics (Décret 2009-0224) overseen by ARMP. Djibouti works with World Bank, USAID, EUCAP, IGAD, and AFD for security projects.",
                },
                {
                  q: es ? "¿Cómo apoya KabatOne la seguridad en Yibuti?" : "How does KabatOne support security in Djibouti?",
                  a: es
                    ? "KabatOne integra comunicaciones multi-fuente para PNJ y gendarmes, despacho para control portuario en Doraleh, y coordinación con bases multinacionales. La plataforma Avalon permite conciencia situacional en tiempo real y gestión de fronteras con Etiopía, Somalia y Eritrea."
                    : "KabatOne integrates multi-source communications for PNJ and gendarmes, dispatch for Doraleh port control, and coordination with multinational bases. The Avalon platform enables real-time situational awareness and border management with Ethiopia, Somalia, and Eritrea.",
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
          h2={es ? "¿Listo para modernizar la seguridad pública en Yibuti?" : "Ready to modernize public safety in Djibouti?"}
          subtitle={es
            ? "Contáctenos para descubrir cómo KabatOne apoya a la PNJ, operaciones portuarias en Doraleh y coordinación multi-base en el Cuerno de África."
            : "Contact us to discover how KabatOne supports PNJ, Doraleh port operations, and multi-base coordination in the Horn of Africa."}
        />
        <Footer es={es} />
      </main>
    </>
  );
}
