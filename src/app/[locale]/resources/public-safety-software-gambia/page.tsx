import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareGambia", locale);
}

export default async function PublicSafetySoftwareGambiaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Gambia | GAF/GPS, Río Gambia, Turismo y Post-Dictadura – KabatOne"
    : "Public Safety Software for Gambia | GAF/GPS, Gambia River, Tourism & Post-Dictatorship – KabatOne";
  const description = es
    ? "KabatOne entrega plataforma de seguridad pública para las Fuerzas Armadas de Gambia (GAF), Servicio de Policía, gestión del Río Gambia, seguridad turística y transición post-dictadura en el país más pequeño del continente africano."
    : "KabatOne delivers public safety platform for Gambia Armed Forces (GAF), Police Service, Gambia River management, tourist security, and post-dictatorship transition in the smallest mainland country in Africa.";
  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-gambia"
    : "https://kabatone.com/resources/public-safety-software-gambia";

  const faqs = [
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Gambia?"
        : "What are the main security forces in Gambia?",
      answer: es
        ? "Las Fuerzas Armadas de Gambia (GAF) cuentan con aproximadamente 800-1,000 efectivos (Ejército, Armada Fluvial, Guardia Nacional). El Servicio de Policía de Gambia (GPS) opera en los 5 divisiones administrativas con ~6,000 agentes. La Agencia de Información e Inteligencia del Estado (SSHFC) fue reestructurada bajo el presidente Adama Barrow (elegido 2016, reelegido 2021) que puso fin a los 22 años de dictadura de Yahya Jammeh. La Comisión de Reconciliación, Reparaciones y Verdad (TRRC 2019-2021) documentó las violaciones del período Jammeh. Gambia ha participado en misiones ECOMIG (ECOWAS)."
        : "The Gambia Armed Forces (GAF) number approximately 800-1,000 personnel (Army, River Navy, National Guard). The Gambia Police Service (GPS) operates across 5 administrative divisions with ~6,000 officers. The State Intelligence Agency (SIA) was restructured under President Adama Barrow (elected 2016, re-elected 2021) who ended Yahya Jammeh's 22-year dictatorship. The Truth, Reconciliation and Reparations Commission (TRRC 2019-2021) documented Jammeh-era violations. Gambia has participated in ECOMIG (ECOWAS) missions.",
    },
    {
      question: es
        ? "¿Cuál es la importancia estratégica del Río Gambia?"
        : "What is the strategic importance of the Gambia River?",
      answer: es
        ? "El Río Gambia fluye de este a oeste a través del país durante ~470 km, dividiendo virtualmente el territorio gambiano en dos partes. El Puerto de Banjul (Gambia Ports Authority) es el único puerto significativo del país y una ruta comercial alternativa para Senegal meridional. El tráfico fluvial es importante para el comercio interior — lanzaderas y barcazas conectan las dos orillas a lo largo del río. La pesca fluvial y marina es una fuente importante de proteína y empleo. El río sirve también como corredor de contrabando potencial desde/hacia Senegal y Guinea-Bissau. Gambia es prácticamente un enclave dentro de Senegal (exceto la costa atlántica de ~80 km)."
        : "The Gambia River flows east to west through the country for ~470 km, virtually dividing the Gambian territory into two parts. Port of Banjul (Gambia Ports Authority) is the country's only significant port and an alternative trade route for southern Senegal. River traffic is important for inland trade — ferries and barges connect both banks along the river. River and marine fishing is an important source of protein and employment. The river also serves as a potential smuggling corridor to/from Senegal and Guinea-Bissau. Gambia is virtually an enclave within Senegal (except the ~80 km Atlantic coast).",
    },
    {
      question: es
        ? "¿Cuáles son los recursos económicos de Gambia?"
        : "What are Gambia's economic resources?",
      answer: es
        ? "El turismo es el sector económico más importante de Gambia — el país es conocido como el 'Smiling Coast of Africa' y atrae principalmente turistas europeos (UK, Escandinavia, Alemania, Países Bajos). El turismo representa ~15-20% del PIB. La reexportación y el comercio informal con Senegal son significativos — Banjul es un hub de comercio regional. El maní (cacahuete) es el principal cultivo de exportación (~80,000 ton/año). La pesca (~65,000 ton/año, importante acceso UE/China). Los envíos de la diáspora (~30% del PIB, principal fuente de divisas). El PIB per cápita es ~$800."
        : "Tourism is Gambia's most important economic sector — the country is known as the 'Smiling Coast of Africa' and attracts mainly European tourists (UK, Scandinavia, Germany, Netherlands). Tourism represents ~15-20% of GDP. Re-export trade and informal commerce with Senegal are significant — Banjul is a regional trade hub. Groundnuts (peanuts) are the main export crop (~80,000 tons/year). Fishing (~65,000 tons/year, important EU/China access). Diaspora remittances (~30% of GDP, main source of foreign exchange). GDP per capita is ~$800.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Gambia?"
        : "What is the legal and procurement framework in Gambia?",
      answer: es
        ? "La Public Procurement Authority (PPA) y la Gambia Public Procurement Act 2014 rigen las adquisiciones públicas. La Data Protection Act 2013 y la Information and Communications Act regulan datos y telecomunicaciones. La Gambia Regulatory Authority (PURA/GRA) supervisa telecomunicaciones. La moneda es el Dalasi gambiano (GMD) bajo el Banco Central de Gambia (CBG). Gambia es miembro de la ECOWAS/CEDEAO, la Unión del Río Gambia (OMVG) y SENEGAMBIA (marco de cooperación con Senegal). Financiadores clave: Banco Mundial (IDA), IsDB (Banco Islámico de Desarrollo), USAID, UE y cooperación china."
        : "The Public Procurement Authority (PPA) and Gambia Public Procurement Act 2014 govern public procurement. The Data Protection Act 2013 and Information and Communications Act regulate data and telecommunications. The Gambia Regulatory Authority (PURA/GRA) supervises telecommunications. Currency is the Gambian dalasi (GMD) under the Central Bank of Gambia (CBG). Gambia is a member of ECOWAS/CEDEAO, the Gambia River Basin Organization (OMVG), and SENEGAMBIA (cooperation framework with Senegal). Key financiers: World Bank (IDA), IsDB (Islamic Development Bank), USAID, EU, and Chinese cooperation.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Gambia?"
        : "How does KabatOne support public safety in Gambia?",
      answer: es
        ? "KabatOne integra vigilancia de vídeo, despacho CAD y awareness situacional para operaciones GAF/GPS en las 5 divisiones. Los módulos de seguridad turística protegen las zonas hoteleras costeras (Bakau, Kololi, Senegambia Strip) que son críticas para la economía. El sistema de seguridad portuaria y fluvial cubre el Puerto de Banjul y los corredores del Río Gambia (lanzaderas, terminales fluviales). Los módulos de gestión de fronteras cubren los 740 km de frontera con Senegal y el corredor Guinea-Bissau. La plataforma de gestión de investigaciones apoya las reformas post-TRRC del sistema de justicia."
        : "KabatOne integrates video surveillance, CAD dispatch, and situational awareness for GAF/GPS operations across all 5 divisions. Tourist security modules protect coastal hotel zones (Bakau, Kololi, Senegambia Strip) critical to the economy. Port and river security system covers Port of Banjul and Gambia River corridors (ferries, river terminals). Border management modules cover the 740 km border with Senegal and Guinea-Bissau corridor. Investigation management platform supports post-TRRC justice system reforms.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources" : "https://kabatone.com/resources" },
    { name: es ? "Software de Seguridad Pública para Gambia" : "Public Safety Software for Gambia", url: canonical },
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
              {es ? "Gambia · Africa Occidental · Smiling Coast · Río Gambia · ECOWAS · Post-Jammeh" : "Gambia · West Africa · Smiling Coast · Gambia River · ECOWAS · Post-Jammeh"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es ? "Software de Seguridad Pública para Gambia" : "Public Safety Software for Gambia"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {es
                ? "Plataforma unificada para GAF, Servicio de Policía, seguridad turística costera y gestión del Río Gambia — el país continental más pequeño de Africa, prácticamente enclavado dentro de Senegal."
                : "Unified platform for GAF, Police Service, coastal tourist security, and Gambia River management — the smallest mainland country in Africa, virtually an enclave within Senegal."}
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
                  <li><strong>GAF</strong> — {es ? "~800-1,000 efectivos (Ejército/Armada Fluvial/Guardia Nacional)" : "~800-1,000 personnel (Army/River Navy/National Guard)"}</li>
                  <li><strong>GPS</strong> — {es ? "Policía ~6,000 — 5 divisiones" : "Police ~6,000 — 5 divisions"}</li>
                  <li><strong>SIA</strong> — {es ? "Agencia de Inteligencia (reestructurada post-Jammeh)" : "State Intelligence Agency (restructured post-Jammeh)"}</li>
                  <li>{es ? "Presidente Barrow (2016/2021) — fin 22 años dictadura Jammeh" : "President Barrow (2016/2021) — ended Jammeh 22-year dictatorship"}</li>
                  <li>{es ? "TRRC 2019-2021 — Comisión Verdad y Reconciliación" : "TRRC 2019-2021 — Truth and Reconciliation Commission"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Posición Estratégica" : "Strategic Position"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? "País continental más pequeño de Africa (11,295 km²)" : "Smallest mainland country in Africa (11,295 km²)"}</li>
                  <li>{es ? "Prácticamente enclavado dentro de Senegal — 740 km frontera / ~80 km costa atlántica" : "Virtually enclosed within Senegal — 740 km border / ~80 km Atlantic coast"}</li>
                  <li>{es ? "Río Gambia ~470 km — divide el país en dos (norte/sur)" : "Gambia River ~470 km — divides country into two (north/south)"}</li>
                  <li>{es ? "Turismo ~15-20% PIB — 'Smiling Coast of Africa'" : "Tourism ~15-20% GDP — 'Smiling Coast of Africa'"}</li>
                  <li>{es ? "Miembro ECOWAS + OMVG (Río Gambia)" : "ECOWAS + OMVG (Gambia River) member"}</li>
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
                <h3 className="font-semibold text-blue-900 mb-3">{es ? "Economía y Recursos" : "Economy & Resources"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Turismo — ~15-20% PIB (europeos UK/Escandinavia/Alemania)" : "Tourism — ~15-20% GDP (European UK/Scandinavia/Germany)"}</li>
                  <li>{es ? "Reexportación/comercio informal con Senegal — hub regional" : "Re-export/informal trade with Senegal — regional hub"}</li>
                  <li>{es ? "Maní (cacahuete) — principal cultivo exportación ~80K ton/año" : "Groundnuts — main export crop ~80K tons/year"}</li>
                  <li>{es ? "Pesca — ~65K ton/año (acuerdos UE/China)" : "Fishing — ~65K tons/year (EU/China agreements)"}</li>
                  <li>{es ? "Remesas diáspora — ~30% PIB (principal fuente divisas)" : "Diaspora remittances — ~30% GDP (main forex source)"}</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-3">{es ? "Infraestructura" : "Infrastructure"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Puerto de Banjul (GPA) — alternativa comercial Senegal sur" : "Port of Banjul (GPA) — southern Senegal trade alternative"}</li>
                  <li>Banjul International Airport (BJL)</li>
                  <li>{es ? "Transbordador Banjul-Barra — cruce principal norte-sur" : "Banjul-Barra Ferry — main north-south crossing"}</li>
                  <li>{es ? "NAWEC — agua/electricidad (cobertura limitada)" : "NAWEC — water/electricity (limited coverage)"}</li>
                  <li>{es ? "Móvil: Africell/QCell; PURA/GRA regulador" : "Mobile: Africell/QCell; PURA/GRA regulator"}</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-900 mb-3">{es ? "Marco Legal" : "Legal Framework"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>PPA — {es ? "Public Procurement Act 2014" : "Public Procurement Act 2014"}</li>
                  <li>{es ? "Data Protection Act 2013" : "Data Protection Act 2013"}</li>
                  <li>CBG — {es ? "Dalasi gambiano (GMD)" : "Gambian dalasi (GMD)"}</li>
                  <li>{es ? "ECOWAS/OMVG/SENEGAMBIA" : "ECOWAS/OMVG/SENEGAMBIA"}</li>
                  <li>{es ? "BM(IDA)/IsDB/USAID/UE/China" : "WB(IDA)/IsDB/USAID/EU/China"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne Capabilities */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Capacidades KabatOne para Gambia" : "KabatOne Capabilities for Gambia"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Turística y Fluvial" : "Tourist & River Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Módulos de seguridad turística para protección de zonas hoteleras costeras (Bakau, Kololi, Senegambia Strip) — sector crítico para la economía nacional (~15-20% PIB)" : "Tourist security modules for coastal hotel zone protection (Bakau, Kololi, Senegambia Strip) — sector critical to the national economy (~15-20% GDP)"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Sistema de seguridad portuaria y fluvial para el Puerto de Banjul (GPA), transbordador Banjul-Barra y corredores del Río Gambia (~470 km)" : "Port and river security system for Port of Banjul (GPA), Banjul-Barra Ferry, and Gambia River corridors (~470 km)"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Sistema de gestión de fronteras para los 740 km de frontera con Senegal (norte/sur/este) y el corredor Guinea-Bissau (sudeste) — control de contrabando y movimientos irregulares" : "Border management system for 740 km Senegal border (north/south/east) and Guinea-Bissau corridor (southeast) — smuggling and irregular movement control"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Plataforma de gestión de investigaciones y registros criminales apoyando las reformas post-TRRC del sistema de justicia y la reconciliación nacional" : "Investigation management and criminal records platform supporting post-TRRC justice system reforms and national reconciliation"}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Nacional y Operacional" : "National & Operational Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Despacho CAD para GAF/GPS en las 5 divisiones con gestión de incidentes y coordinación de respuesta de emergencia" : "CAD dispatch for GAF/GPS across 5 divisions with incident management and emergency response coordination"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Vigilancia de vídeo para Banjul (capital/puerto), Serrekunda (mayor ciudad) y el Aeropuerto Internacional de Banjul (BJL)" : "Video surveillance for Banjul (capital/port), Serrekunda (largest city), and Banjul International Airport (BJL)"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Módulos de migración y anti-trata de personas — Gambia es origen y tránsito de migrantes hacia Europa (ruta atlántica)" : "Migration and anti-trafficking modules — Gambia is origin and transit for migrants to Europe (Atlantic route)"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Integración con marcos ECOMIG/ECOWAS para coordinación regional de seguridad en Africa Occidental" : "Integration with ECOMIG/ECOWAS frameworks for regional security coordination in West Africa"}</span></li>
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
          h2={es ? "¿Listo para modernizar la seguridad pública en Gambia?" : "Ready to modernize public safety in Gambia?"}
          subtitle={es ? "Contáctenos para una demostración adaptada a las necesidades de seguridad de Gambia." : "Contact us for a demonstration tailored to Gambia's security needs."}
        />
      </main>
      <Footer es={es} />
    </>
  );
}
