import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareEswatini", locale);
}

export default async function PublicSafetySoftwareEswatiniPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Eswatini | UMBUTFO/RPM, Monarquía Absoluta, Azúcar y Manufactura – KabatOne"
    : "Public Safety Software for Eswatini | UMBUTFO/RPM, Absolute Monarchy, Sugar & Manufacturing – KabatOne";
  const description = es
    ? "KabatOne entrega plataforma de seguridad pública para las Fuerzas de Defensa de Eswatini (UMBUTFO), Policía Real de Mozambique (RPM), protección de la industria azucarera y manufacturera, y gestión de fronteras con Sudáfrica y Mozambique."
    : "KabatOne delivers public safety platform for Eswatini Defence Force (UMBUTFO), Royal Eswatini Police Service (REPS), sugar and manufacturing industry protection, and border management with South Africa and Mozambique.";
  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-eswatini/"
    : "https://kabatone.com/resources/public-safety-software-eswatini/";

  const faqs = [
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Eswatini?"
        : "What are the main security forces in Eswatini?",
      answer: es
        ? "El UMBUTFO Eswatini Defence Force (UEDF) cuenta con aproximadamente 3,000 efectivos. El Royal Eswatini Police Service (REPS) opera en los 4 tinkhundla/distritos (Hhohho, Manzini, Lubombo, Shiselweni) con ~4,000 agentes. La Agencia Nacional de Seguridad (NSA) coordina la inteligencia. El rey Mswati III gobierna como monarca absoluto desde 1986 — Eswatini (renombrado desde Suazilandia en 2018) es la última monarquía absoluta de Africa. Los partidos políticos están prohibidos. Las protestas pro-democracia de 2021 fueron reprimidas con más de 80 muertos."
        : "The UMBUTFO Eswatini Defence Force (UEDF) numbers approximately 3,000 personnel. The Royal Eswatini Police Service (REPS) operates across 4 tinkhundla/districts (Hhohho, Manzini, Lubombo, Shiselweni) with ~4,000 officers. The National Security Agency (NSA) coordinates intelligence. King Mswati III has governed as absolute monarch since 1986 — Eswatini (renamed from Swaziland in 2018) is Africa's last absolute monarchy. Political parties are banned. Pro-democracy protests in 2021 were suppressed with 80+ deaths.",
    },
    {
      question: es
        ? "¿Cuál es la situación económica y los recursos estratégicos de Eswatini?"
        : "What is the economic situation and strategic resources of Eswatini?",
      answer: es
        ? "Eswatini es uno de los países más industrializados del Africa subsahariana en términos relativos. La economía depende de la Unión Aduanera del Africa Austral (SACU) — los aranceles de SACU representan ~50% de los ingresos fiscales. El azúcar es el principal cultivo de exportación (Royal Swaziland Sugar Corporation/RSSC, Ubombo Sugar/Illovo — Eswatini es el 4to exportador mundial de azúcar por capita). La manufactura textil (con acceso AGOA a EE.UU.) es significativa. El madera/papel (Sappi, SWADE), la mineralia (carbón en Maloma, hierro sin explotar) completan los recursos. PIB per cápita ~$4,200."
        : "Eswatini is one of sub-Saharan Africa's most industrialized countries in relative terms. The economy depends on the Southern African Customs Union (SACU) — SACU tariffs represent ~50% of tax revenues. Sugar is the main export crop (Royal Swaziland Sugar Corporation/RSSC, Ubombo Sugar/Illovo — Eswatini is the world's 4th sugar exporter per capita). Textile manufacturing (with AGOA access to US) is significant. Timber/paper (Sappi, SWADE), minerals (coal at Maloma, unexploited iron) complete the resources. GDP per capita ~$4,200.",
    },
    {
      question: es
        ? "¿Cuáles son los principales desafíos de seguridad de Eswatini?"
        : "What are Eswatini's main security challenges?",
      answer: es
        ? "Eswatini está rodeado por Sudáfrica (260 km de frontera al norte/oeste/sur) y Mozambique (105 km al este). Las rutas de tráfico de drogas y contrabando a través de los corredores sudafricanos son un desafío. La inestabilidad política interna — el movimiento pro-democracia y las protestas recurrentes requieren gestión de orden público. El alto índice de VIH/SIDA (~27% de la población adulta — el más alto del mundo) genera presiones sobre los servicios públicos. Los incendios forestales en las plantaciones de Sappi/SWADE son una amenaza recurrente. La pobreza extrema en zonas rurales (~60% bajo la línea de pobreza) genera tensiones sociales."
        : "Eswatini is surrounded by South Africa (260 km border to north/west/south) and Mozambique (105 km to east). Drug trafficking and smuggling routes through South African corridors are a challenge. Internal political instability — the pro-democracy movement and recurring protests require public order management. High HIV/AIDS rate (~27% of adult population — world's highest) creates public service pressures. Forest fires in Sappi/SWADE plantations are a recurring threat. Extreme rural poverty (~60% below poverty line) generates social tensions.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Eswatini?"
        : "What is the legal and procurement framework in Eswatini?",
      answer: es
        ? "El Public Procurement Act 2011 y la Public Procurement Regulatory Authority (PPRA) rigen las adquisiciones públicas. La Data Protection Act 2022 establece el marco de protección de datos. La ESCOM (Eswatini Communications Commission) regula las telecomunicaciones. La moneda es el Lilangeni (SZL) vinculado al Rand sudafricano (ZAR) bajo el Banco Central de Eswatini (CBE). Eswatini es miembro de SACU, SADC y COMESA. Las principales relaciones comerciales son con Sudáfrica (acceso SACU) y EE.UU. (acceso AGOA). El Banco de Desarrollo de Eswatini (EDB) y el AfDB son financiadores clave."
        : "The Public Procurement Act 2011 and Public Procurement Regulatory Authority (PPRA) govern public procurement. The Data Protection Act 2022 establishes the data protection framework. ESCOM (Eswatini Communications Commission) regulates telecommunications. Currency is the Lilangeni (SZL) pegged to the South African rand (ZAR) under the Central Bank of Eswatini (CBE). Eswatini is a member of SACU, SADC, and COMESA. Main trading relationships are with South Africa (SACU access) and US (AGOA access). Eswatini Development Bank (EDB) and AfDB are key financiers.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Eswatini?"
        : "How does KabatOne support public safety in Eswatini?",
      answer: es
        ? "KabatOne integra vigilancia de vídeo, despacho CAD y awareness situacional para operaciones UEDF/REPS en los 4 distritos/tinkhundla. El sistema de gestión de orden público apoya la coordinación de respuesta ante protestas y disturbios civiles. Los módulos de protección industrial aseguran las operaciones azucareras RSSC/Ubombo y las plantaciones madereras Sappi/SWADE. El sistema de gestión de fronteras cubre los 365 km de frontera total con Sudáfrica y Mozambique. La plataforma de detección de incendios forestales integra analítica de vídeo IA para las plantaciones de pinos de Sappi/SWADE."
        : "KabatOne integrates video surveillance, CAD dispatch, and situational awareness for UEDF/REPS operations across all 4 districts/tinkhundla. The public order management system supports protest and civil unrest response coordination. Industrial protection modules secure RSSC/Ubombo sugar operations and Sappi/SWADE timber plantations. Border management system covers the 365 km total border with South Africa and Mozambique. Forest fire detection platform integrates AI video analytics for Sappi/SWADE pine plantations.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/" },
    { name: es ? "Software de Seguridad Pública para Eswatini" : "Public Safety Software for Eswatini", url: canonical },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Nav />
      <main className="bg-white text-gray-900">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0a0f1e] to-[#1a2744] text-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-blue-400 mb-3">
              {es ? "Eswatini · Africa Austral · Monarquía Absoluta · SACU · Azúcar · Manufactura" : "Eswatini · Southern Africa · Absolute Monarchy · SACU · Sugar · Manufacturing"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es ? "Software de Seguridad Pública para Eswatini" : "Public Safety Software for Eswatini"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {es
                ? "Plataforma unificada para UMBUTFO, Policía Real, protección industrial azucarera/maderera y gestión de fronteras — la última monarquía absoluta de Africa, completamente rodeada por Sudáfrica y Mozambique."
                : "Unified platform for UMBUTFO, Royal Police, sugar/timber industrial protection, and border management — Africa's last absolute monarchy, entirely surrounded by South Africa and Mozambique."}
            </p>
          </div>
        </section>

        {/* Security Forces */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Fuerzas de Seguridad y Contexto Estratégico" : "Security Forces & Strategic Context"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Estructura de Seguridad" : "Security Structure"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>UEDF</strong> — {es ? "UMBUTFO ~3,000 efectivos" : "UMBUTFO ~3,000 personnel"}</li>
                  <li><strong>REPS</strong> — {es ? "Policía Real ~4,000 — 4 distritos/tinkhundla" : "Royal Police ~4,000 — 4 districts/tinkhundla"}</li>
                  <li><strong>NSA</strong> — {es ? "Agencia Nacional de Seguridad" : "National Security Agency"}</li>
                  <li>{es ? "Rey Mswati III — monarca absoluto desde 1986" : "King Mswati III — absolute monarch since 1986"}</li>
                  <li>{es ? "Protestas pro-democracia 2021 — 80+ muertos (orden público crítico)" : "2021 pro-democracy protests — 80+ deaths (critical public order)"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Contexto Estratégico" : "Strategic Context"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? "Última monarquía absoluta de Africa — partidos políticos prohibidos" : "Africa's last absolute monarchy — political parties banned"}</li>
                  <li>{es ? "Rodeado por Sudáfrica (260 km) y Mozambique (105 km)" : "Surrounded by South Africa (260 km) and Mozambique (105 km)"}</li>
                  <li>{es ? "VIH/SIDA ~27% adultos — mayor prevalencia mundial" : "HIV/AIDS ~27% adults — world's highest prevalence"}</li>
                  <li>{es ? "SACU ~50% ingresos fiscales; AGOA acceso EE.UU." : "SACU ~50% tax revenues; AGOA US access"}</li>
                  <li>{es ? "Miembro SACU + SADC + COMESA" : "SACU + SADC + COMESA member"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Economic Infrastructure */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Economía, Recursos y Marco Legal" : "Economy, Resources & Legal Framework"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">{es ? "Recursos Estratégicos" : "Strategic Resources"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Azúcar — RSSC/Ubombo Sugar/Illovo (4to exportador mundial por capita)" : "Sugar — RSSC/Ubombo Sugar/Illovo (world 4th exporter per capita)"}</li>
                  <li>{es ? "Manufactura textil — acceso AGOA (EE.UU.)" : "Textile manufacturing — AGOA access (US)"}</li>
                  <li>{es ? "Madera/papel — Sappi/SWADE plantaciones" : "Timber/paper — Sappi/SWADE plantations"}</li>
                  <li>{es ? "Carbón — Maloma (activo); hierro sin explotar" : "Coal — Maloma (active); iron unexploited"}</li>
                  <li>{es ? "PIB per cápita ~$4,200 (comparativamente alto para región)" : "GDP per capita ~$4,200 (comparatively high for region)"}</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-3">{es ? "Infraestructura" : "Infrastructure"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>King Mswati III Airport (SHO)</li>
                  <li>{es ? "Ferrocarril: Swaziland Railway — Matsapha-Mpaka" : "Railway: Swaziland Railway — Matsapha-Mpaka"}</li>
                  <li>{es ? "Red vial bien desarrollada para Africa subsahariana" : "Well-developed road network for sub-Saharan Africa"}</li>
                  <li>{es ? "SEC — Eswatini Electricity Company (SAPP)" : "SEC — Eswatini Electricity Company (SAPP)"}</li>
                  <li>{es ? "Móvil: MTN/Eswatini Mobile; ESCOM regulador" : "Mobile: MTN/Eswatini Mobile; ESCOM regulator"}</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-900 mb-3">{es ? "Marco Legal" : "Legal Framework"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>PPRA — {es ? "Public Procurement Act 2011" : "Public Procurement Act 2011"}</li>
                  <li>{es ? "Data Protection Act 2022" : "Data Protection Act 2022"}</li>
                  <li>ESCOM — {es ? "regulador telecomunicaciones" : "telecommunications regulator"}</li>
                  <li>CBE — {es ? "Lilangeni (SZL) vinculado ZAR" : "Lilangeni (SZL) pegged to ZAR"}</li>
                  <li>{es ? "EDB/AfDB; SACU/SADC/COMESA" : "EDB/AfDB; SACU/SADC/COMESA"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne Capabilities */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Capacidades KabatOne para Eswatini" : "KabatOne Capabilities for Eswatini"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Orden Público y Protección Industrial" : "Public Order & Industrial Protection"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Sistema de gestión de orden público para coordinación de respuesta UEDF/REPS ante protestas y disturbios civiles en los 4 distritos" : "Public order management system for UEDF/REPS response coordination to protests and civil unrest across all 4 districts"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Módulos de protección industrial para operaciones azucareras RSSC/Ubombo y plantaciones madereras Sappi/SWADE con vigilancia perimetral IA" : "Industrial protection modules for RSSC/Ubombo sugar operations and Sappi/SWADE timber plantations with AI perimeter surveillance"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Plataforma de detección de incendios forestales integrada con analítica de vídeo IA para las extensas plantaciones de pinos — amenaza estacional crítica" : "Forest fire detection platform with AI video analytics for extensive pine plantations — critical seasonal threat"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Gestión de fronteras para los corredores Sudáfrica (260 km: Ngwenya/Lavumisa/Mahamba) y Mozambique (105 km: Lomahasha/Namaacha)" : "Border management for South Africa corridors (260 km: Ngwenya/Lavumisa/Mahamba) and Mozambique (105 km: Lomahasha/Namaacha)"}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Nacional y Operacional" : "National & Operational Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Despacho CAD para UEDF/REPS en los 4 distritos/tinkhundla con gestión de incidentes y coordinación de respuesta de emergencia" : "CAD dispatch for UEDF/REPS across 4 districts/tinkhundla with incident management and emergency response coordination"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Vigilancia de vídeo urbana para Mbabane (capital), Manzini (ciudad más grande) y Matsapha (zona industrial/aeropuerto)" : "Urban video surveillance for Mbabane (capital), Manzini (largest city), and Matsapha (industrial zone/airport)"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Sistema de vigilancia de la mina de carbón Maloma con control de acceso y seguimiento de producción" : "Maloma coal mine surveillance system with access control and production monitoring"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Plataforma cumple con Data Protection Act 2022 y marcos de ciberseguridad de Eswatini" : "Platform complies with Data Protection Act 2022 and Eswatini cybersecurity frameworks"}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">
              {es ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
            </h2>
            <div className="space-y-6">
              {faqs.map((faqItem, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold mb-2">{faqItem.question}</h3>
                  <p className="text-gray-600">{faqItem.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          es={es}
          h2={es ? "¿Listo para modernizar la seguridad pública en Eswatini?" : "Ready to modernize public safety in Eswatini?"}
          subtitle={es ? "Contáctenos para una demostración adaptada a las necesidades de seguridad de Eswatini." : "Contact us for a demonstration tailored to Eswatini's security needs."}
        />
      </main>
      <Footer es={es} />
    </>
  );
}
