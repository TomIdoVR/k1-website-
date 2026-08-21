import { generatePageMetadata } from "@/lib/metadata";
import { articleSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generatePageMetadata("publicSafetySoftwareCapeVerde", locale);
}

export default async function PublicSafetySoftwareCapeVerdePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const title = es
    ? "Software de Seguridad Pública para Cabo Verde | FACV/PNR, Seguridad Marítima Atlántica, Turismo y ECOWAS – KabatOne"
    : "Public Safety Software for Cape Verde | FACV/PNR, Atlantic Maritime Security, Tourism & ECOWAS – KabatOne";
  const description = es
    ? "KabatOne entrega plataforma de seguridad pública para las Fuerzas Armadas de Cabo Verde (FACV), Policía Nacional, seguridad marítima atlántica, protección del turismo y coordinación ECOWAS — archipiélago estratégico en la encrucijada atlántica."
    : "KabatOne delivers public safety platform for Cape Verde Armed Forces (FACV), National Police, Atlantic maritime security, tourism protection, and ECOWAS coordination — strategic archipelago at the Atlantic crossroads.";
  const canonical = es
    ? "https://kabatone.com/es/resources/public-safety-software-cape-verde"
    : "https://kabatone.com/resources/public-safety-software-cape-verde";

  const faqs = [
    {
      question: es
        ? "¿Cuáles son las principales fuerzas de seguridad en Cabo Verde?"
        : "What are the main security forces in Cape Verde?",
      answer: es
        ? "Las Fuerzas Armadas de Cabo Verde (FACV) cuentan con aproximadamente 1,200-1,500 efectivos (Guarda Nacional, Guardia Costera y componente aéreo). La Policía Nacional de Cabo Verde (PNR) opera en los 22 municipios de las 9 islas habitadas. La Agencia de Seguridad Interna (AISI) y el Serviço de Informações da República de Cabo Verde (SIRP) coordinan la inteligencia. Cabo Verde es una democracia multipartidista estable desde la independencia de Portugal en 1975 — considerada una de las democracias más consolidadas de Africa. El presidente José Maria Neves fue elegido en 2021."
        : "Cape Verde Armed Forces (FACV) number approximately 1,200-1,500 personnel (National Guard, Coast Guard, and air component). The Cape Verde National Police (PNR) operates across 22 municipalities on 9 inhabited islands. The Internal Security Agency (AISI) and State Intelligence Service (SIRP) coordinate intelligence. Cape Verde is a stable multiparty democracy since independence from Portugal in 1975 — considered one of Africa's most consolidated democracies. President José Maria Neves was elected in 2021.",
    },
    {
      question: es
        ? "¿Por qué Cabo Verde es estratégicamente importante en el Atlántico?"
        : "Why is Cape Verde strategically important in the Atlantic?",
      answer: es
        ? "Cabo Verde es un archipiélago de 10 islas (9 habitadas) situado a ~570 km de la costa de Senegal, en la encrucijada de las rutas marítimas y aéreas atlánticas entre Europa, Africa y América. El archipiélago es un nodo de tránsito de narcotráfico (cocaína sudamericana → Europa) — los servicios de inteligencia europeos y la DEA/EE.UU. mantienen presencia significativa. La ZEE de 734,265 km² es una de las más grandes del mundo relativas al territorio. El Puerto de Mindelo (São Vicente) y el Puerto da Praia (Santiago) son puntos de escala para el comercio atlántico. Cabo Verde es también hub de fibra óptica submarina (EllaLink, MainOne)."
        : "Cape Verde is an archipelago of 10 islands (9 inhabited) located ~570 km off the Senegal coast, at the crossroads of Atlantic maritime and air routes between Europe, Africa, and the Americas. The archipelago is a drug trafficking transit node (South American cocaine → Europe) — European intelligence services and US/DEA maintain significant presence. The 734,265 km² EEZ is one of the world's largest relative to territory. Port of Mindelo (São Vicente) and Port of Praia (Santiago) are stopover points for Atlantic trade. Cape Verde is also a submarine fiber optic hub (EllaLink, MainOne).",
    },
    {
      question: es
        ? "¿Cuáles son los recursos económicos y desafíos de Cabo Verde?"
        : "What are Cape Verde's economic resources and challenges?",
      answer: es
        ? "El turismo es el motor económico principal — representa ~25% del PIB y ~70% de las divisas. Las principales islas turísticas son Sal (Santa Maria) y Boa Vista (actividad principalmente de operadores europeos como TUI). Las remesas de la diáspora (~200,000 caboverdianos en Portugal, EE.UU., Países Bajos) representan ~10-15% del PIB. La pesca (ZEE 734,265 km² — atún, langosta) tiene potencial mayor. Los recursos naturales minerales son limitados. El sector de servicios y tecnología (offshore) es emergente — Cabo Verde aspira a ser un hub de servicios financieros y tecnológicos. PIB per cápita ~$4,000."
        : "Tourism is the main economic driver — representing ~25% of GDP and ~70% of foreign exchange. Main tourist islands are Sal (Santa Maria) and Boa Vista (mainly European operators like TUI). Diaspora remittances (~200,000 Cape Verdeans in Portugal, US, Netherlands) represent ~10-15% of GDP. Fishing (734,265 km² EEZ — tuna, lobster) has greater potential. Mineral natural resources are limited. Services and technology (offshore) sector is emerging — Cape Verde aims to be a financial and technology services hub. GDP per capita ~$4,000.",
    },
    {
      question: es
        ? "¿Cuál es el marco legal y de adquisiciones en Cabo Verde?"
        : "What is the legal and procurement framework in Cape Verde?",
      answer: es
        ? "El Código de Contratação Pública (Decreto-Lei n°1/2017) y el ARAP (Autoridade Reguladora das Aquisições Públicas) rigen las adquisiciones. La Lei n°133/V/2001 y la Comissão Nacional de Proteção de Dados (CNPD) regulan la protección de datos. La ANAC (Agência Nacional das Comunicações) supervisa telecomunicaciones. La moneda es el Escudo de Cabo Verde (CVE) vinculado al Euro (tasa fija desde 1998) bajo el Banco de Cabo Verde (BCV). Cabo Verde es miembro de la ECOWAS/CEDEAO, la CPLP y la Unión Africana. Financiadores clave: Banco Mundial (IDA), AfDB, Portugal (Camões/AICEP), MCC, UE."
        : "The Código de Contratação Pública (Decree-Law n°1/2017) and ARAP (Public Procurement Regulatory Authority) govern procurement. Law n°133/V/2001 and the National Data Protection Commission (CNPD) regulate data protection. ANAC (National Communications Agency) supervises telecommunications. Currency is the Cape Verde escudo (CVE) pegged to the Euro (fixed rate since 1998) under the Bank of Cape Verde (BCV). Cape Verde is a member of ECOWAS/CEDEAO, CPLP, and the African Union. Key financiers: World Bank (IDA), AfDB, Portugal (Camões/AICEP), MCC, EU.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad pública en Cabo Verde?"
        : "How does KabatOne support public safety in Cape Verde?",
      answer: es
        ? "KabatOne integra vigilancia de vídeo, despacho CAD y awareness situacional para operaciones FACV/PNR en los 22 municipios de las 9 islas. Los módulos marítimos monitorean la ZEE de 734,265 km², los puertos de Mindelo y Praia, y coordinan con la Guardia Costera contra el narcotráfico atlántico e inmigración irregular. El sistema de seguridad turística protege las zonas de resort de Sal y Boa Vista (economía crítica). La arquitectura multi-isla coordina respuesta entre islas con enlaces de radio y satélite. La plataforma se integra con marcos MAOC-N (Centro de Análisis y Operaciones Marítimas — Narcóticos) y ECOWAS/CRESMAO."
        : "KabatOne integrates video surveillance, CAD dispatch, and situational awareness for FACV/PNR operations across 22 municipalities on all 9 islands. Maritime modules monitor the 734,265 km² EEZ, ports of Mindelo and Praia, and coordinate with Coast Guard against Atlantic drug trafficking and irregular migration. Tourist security system protects resort zones on Sal and Boa Vista (critical economy). Multi-island architecture coordinates inter-island response via radio and satellite links. Platform integrates with MAOC-N (Maritime Analysis and Operations Centre — Narcotics) and ECOWAS/CRESMAO frameworks.",
    },
  ];

  const article = articleSchema(title, description, canonical, "2026-05-19");
  const faqSchema = faqPageSchema(faqs);
  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es" : "https://kabatone.com/" },
    { name: es ? "Recursos" : "Resources", url: es ? "https://kabatone.com/es/resources" : "https://kabatone.com/resources" },
    { name: es ? "Software de Seguridad Pública para Cabo Verde" : "Public Safety Software for Cape Verde", url: canonical },
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
              {es ? "Cabo Verde · Atlántico · Encrucijada Europa-Africa-América · Narcotráfico · Turismo" : "Cape Verde · Atlantic · Europe-Africa-Americas Crossroads · Drug Trafficking · Tourism"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es ? "Software de Seguridad Pública para Cabo Verde" : "Public Safety Software for Cape Verde"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {es
                ? "Plataforma unificada para FACV, Policía Nacional, Guardia Costera y seguridad turística en las 9 islas — archipiélago estratégico en la encrucijada de rutas atlánticas, nodo crítico de narcotráfico entre Sudamérica y Europa."
                : "Unified platform for FACV, National Police, Coast Guard, and tourist security across 9 islands — strategic archipelago at the Atlantic crossroads, critical drug trafficking node between South America and Europe."}
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
                  <li><strong>FACV</strong> — {es ? "~1,200-1,500 efectivos (Guarda Nacional/Guardia Costera/componente aéreo)" : "~1,200-1,500 personnel (National Guard/Coast Guard/air component)"}</li>
                  <li><strong>PNR</strong> — {es ? "Policía Nacional — 22 municipios / 9 islas" : "National Police — 22 municipalities / 9 islands"}</li>
                  <li><strong>AISI/SIRP</strong> — {es ? "Agencia de Seguridad Interna / Servicio de Inteligencia" : "Internal Security Agency / State Intelligence Service"}</li>
                  <li>{es ? "Presidente Neves (2021) — democracia estable desde 1975" : "President Neves (2021) — stable democracy since 1975"}</li>
                  <li>{es ? "DEA/UE/MAOC-N — presencia internacional contra narcotráfico" : "DEA/EU/MAOC-N — international presence against drug trafficking"}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  {es ? "Posición Estratégica Atlántica" : "Atlantic Strategic Position"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{es ? "10 islas (~570 km costa Senegal) — encrucijada Europa/Africa/América" : "10 islands (~570 km off Senegal coast) — Europe/Africa/Americas crossroads"}</li>
                  <li>{es ? "ZEE 734,265 km² — una de las más grandes del mundo relativa al territorio" : "734,265 km² EEZ — one of world's largest relative to territory"}</li>
                  <li>{es ? "Nodo narcotráfico atlántico — cocaína Sudamérica → Europa" : "Atlantic drug trafficking node — South America cocaine → Europe"}</li>
                  <li>{es ? "Hub fibra óptica submarina: EllaLink, MainOne" : "Submarine fiber optic hub: EllaLink, MainOne"}</li>
                  <li>{es ? "CVE vinculado Euro (tasa fija 1998) — estabilidad monetaria" : "CVE pegged to Euro (fixed rate 1998) — monetary stability"}</li>
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
                  <li>{es ? "Turismo — ~25% PIB; ~70% divisas (Sal/Boa Vista TUI/Thomas Cook)" : "Tourism — ~25% GDP; ~70% forex (Sal/Boa Vista TUI/Thomas Cook)"}</li>
                  <li>{es ? "Remesas diáspora Portugal/EE.UU./Países Bajos — ~10-15% PIB" : "Diaspora remittances Portugal/US/Netherlands — ~10-15% GDP"}</li>
                  <li>{es ? "Pesca — ZEE 734K km² (atún/langosta; acuerdos UE/China/Senegal)" : "Fishing — 734K km² EEZ (tuna/lobster; EU/China/Senegal agreements)"}</li>
                  <li>{es ? "Servicios offshore/tecnología — hub emergente" : "Offshore services/technology — emerging hub"}</li>
                  <li>{es ? "Hub fibra óptica submarina atlántica (EllaLink/MainOne)" : "Atlantic submarine fiber optic hub (EllaLink/MainOne)"}</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-3">{es ? "Infraestructura" : "Infrastructure"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{es ? "Puerto de Mindelo (São Vicente) — escala atlántica" : "Port of Mindelo (Sao Vicente) — Atlantic stopover"}</li>
                  <li>{es ? "Puerto da Praia (Santiago) — principal comercial" : "Port of Praia (Santiago) — main commercial port"}</li>
                  <li>Amílcar Cabral Airport (SID) + Nelson Mandela Airport (RAI)</li>
                  <li>{es ? "ELECTRA — electricidad (energías renovables ~60%)" : "ELECTRA — electricity (renewables ~60%)"}</li>
                  <li>{es ? "Móvil: CVMóvel/Unitel T+; ANAC regulador" : "Mobile: CVMóvel/Unitel T+; ANAC regulator"}</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-900 mb-3">{es ? "Marco Legal" : "Legal Framework"}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>ARAP — {es ? "Decreto-Lei n°1/2017 (contratación pública)" : "Decree-Law n°1/2017 (public procurement)"}</li>
                  <li>CNPD — {es ? "Lei n°133/V/2001 (protección datos)" : "Law n°133/V/2001 (data protection)"}</li>
                  <li>BCV — {es ? "Escudo cabo-verdiano (CVE) vinculado Euro" : "Cape Verde escudo (CVE) pegged to Euro"}</li>
                  <li>{es ? "ECOWAS/CPLP/UA" : "ECOWAS/CPLP/AU"}</li>
                  <li>{es ? "BM(IDA)/AfDB/Portugal(Camões)/MCC/UE" : "WB(IDA)/AfDB/Portugal(Camoes)/MCC/EU"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KabatOne Capabilities */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              {es ? "Capacidades KabatOne para Cabo Verde" : "KabatOne Capabilities for Cape Verde"}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Marítima y Anti-Narcotráfico" : "Maritime Security & Anti-Drug Trafficking"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Módulos marítimos para monitoreo de ZEE 734,265 km², puertos de Mindelo y Praia, y coordinación Guardia Costera contra narcotráfico atlántico (cocaína Sudamérica → Europa)" : "Maritime modules for monitoring 734,265 km² EEZ, ports of Mindelo and Praia, and Coast Guard coordination against Atlantic drug trafficking (South America cocaine → Europe)"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Integración con MAOC-N (Maritime Analysis and Operations Centre — Narcotics) y frameworks ECOWAS/CRESMAO para coordinación regional" : "Integration with MAOC-N (Maritime Analysis and Operations Centre — Narcotics) and ECOWAS/CRESMAO frameworks for regional coordination"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Sistema de seguridad turística para zonas de resort de Sal (Santa Maria) y Boa Vista — protección del principal sector económico del país" : "Tourist security system for Sal (Santa Maria) and Boa Vista resort zones — protection of the country's main economic sector"}</span></li>
                  <li className="flex gap-3"><span className="text-blue-600 font-bold">→</span><span>{es ? "Arquitectura multi-isla con coordinación inter-isla mediante radio y enlaces satelitales — respuesta coordinada entre las 9 islas habitadas" : "Multi-island architecture with inter-island coordination via radio and satellite links — coordinated response across all 9 inhabited islands"}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{es ? "Seguridad Nacional y Operacional" : "National & Operational Security"}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Despacho CAD para FACV/PNR en los 22 municipios de las 9 islas con gestión de incidentes y coordinación de emergencias marítimas" : "CAD dispatch for FACV/PNR across 22 municipalities on 9 islands with incident management and maritime emergency coordination"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Vigilancia de vídeo para Praia (capital/Santiago), Mindelo (São Vicente) y los aeropuertos internacionales de Amilcar Cabral (Sal) y Nelson Mandela (Santiago)" : "Video surveillance for Praia (capital/Santiago), Mindelo (Sao Vicente), and Amilcar Cabral (Sal) and Nelson Mandela (Santiago) international airports"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Control de migración irregular — Cabo Verde es punto de tránsito en la ruta atlántica canaria (Africa Occidental → Canarias → Europa)" : "Irregular migration control — Cape Verde is a transit point on the Atlantic Canary route (West Africa → Canary Islands → Europe)"}</span></li>
                  <li className="flex gap-3"><span className="text-green-600 font-bold">→</span><span>{es ? "Plataforma cumple con Lei n°133/V/2001 de protección de datos y frameworks de ciberseguridad de la UE (dado el CVE vinculado al Euro)" : "Platform complies with Law n°133/V/2001 data protection and EU cybersecurity frameworks (given CVE pegged to Euro)"}</span></li>
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
          h2={es ? "¿Listo para modernizar la seguridad pública en Cabo Verde?" : "Ready to modernize public safety in Cape Verde?"}
          subtitle={es ? "Contáctenos para una demostración adaptada a las necesidades de seguridad de Cabo Verde." : "Contact us for a demonstration tailored to Cape Verde's security needs."}
        />
      </main>
      <Footer es={es} />
    </>
  );
}
