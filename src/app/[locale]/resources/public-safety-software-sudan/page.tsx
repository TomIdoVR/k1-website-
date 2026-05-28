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
  return generatePageMetadata("publicSafetySoftwareSudan", locale);
}

export default async function PublicSafetySoftwareSudanPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const article = articleSchema(
    es
      ? "Software de Seguridad Pública para Sudán | SAF, RSF y Gestión de Crisis – KabatOne"
      : "Public Safety Software for Sudan | SAF, RSF & Crisis Management – KabatOne",
    es
      ? "KabatOne ofrece plataforma unificada de mando y control, despacho IA y conciencia situacional para las Fuerzas Armadas Sudanesas, gestión de desastres y programas de reconstrucción en Sudán."
      : "KabatOne delivers unified command-and-control, AI-dispatch, and situational awareness for the Sudanese Armed Forces, disaster management, and reconstruction programs in Sudan.",
    es
      ? "https://kabatone.com/es/resources/public-safety-software-sudan/"
      : "https://kabatone.com/resources/public-safety-software-sudan/",
    "2026-05-19"
  );

  const faqs = faqPageSchema([
    {
      question: es
        ? "¿Cómo puede KabatOne apoyar la reconstrucción de la seguridad pública en Sudán?"
        : "How can KabatOne support public safety reconstruction in Sudan?",
      answer: es
        ? "KabatOne proporciona CAD/gestión de incidentes modular para las 18 estados, integración con sistemas de respuesta humanitaria OCHA/UNHCR para los 10+ millones de PDI, coordinación de corredores humanitarios y plataformas de comunicación de emergencia para Port Sudan y las ciudades que se están reconstruyendo."
        : "KabatOne provides modular CAD/incident management for all 18 states, integration with OCHA/UNHCR humanitarian response systems for 10+ million IDPs, humanitarian corridor coordination, and emergency communication platforms for Port Sudan and rebuilding cities.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad de infraestructura crítica en Sudán?"
        : "How does KabatOne support critical infrastructure security in Sudan?",
      answer: es
        ? "La plataforma monitorea el oleoducto Sudan/Sudán del Sur (1,600 km hasta Port Sudan), la presa de Merowe (1,250 MW en el Nilo), la presa de Sennar/Roseires, el Puerto de Port Sudan (acceso al Mar Rojo), el aeropuerto KRT y las instalaciones de SUDAPET/CNPC."
        : "The platform monitors the Sudan/South Sudan pipeline (1,600 km to Port Sudan), Merowe Dam (1,250 MW on the Nile), Sennar/Roseires dams, Port Sudan (Red Sea access), KRT airport, and SUDAPET/CNPC facilities.",
    },
    {
      question: es
        ? "¿Puede KabatOne integrarse con la gestión humanitaria en Sudán?"
        : "Can KabatOne integrate with humanitarian management in Sudan?",
      answer: es
        ? "Sí. KabatOne se integra con OCHA/UNHCR/WFP para la gestión de los 10+ millones de PDI (la mayor crisis de desplazamiento del mundo en 2024), monitoreo de inundaciones del Nilo/Azul/Blanco, alertas de sequía del Sahel y coordinación de corredores humanitarios con Chad/Egipto/Sudán del Sur."
        : "Yes. KabatOne integrates with OCHA/UNHCR/WFP for management of 10+ million IDPs (the world's largest displacement crisis in 2024), Nile/Blue Nile/White Nile flood monitoring, Sahel drought alerts, and humanitarian corridor coordination with Chad/Egypt/South Sudan.",
    },
    {
      question: es
        ? "¿Cómo cumple KabatOne con la normativa de Sudán?"
        : "How does KabatOne comply with Sudan's regulations?",
      answer: es
        ? "KabatOne está diseñado para alinearse con las leyes de telecomunicaciones de la Autoridad Nacional de Telecomunicaciones de Sudán (NTC), los estándares de ciberseguridad del Consejo de Soberanía de Transición, y los marcos de adquisiciones del Banco Mundial/ONU para proyectos de reconstrucción financiados por donantes."
        : "KabatOne is designed to align with Sudan National Telecommunications Authority (NTC) telecommunications laws, Transitional Sovereignty Council cybersecurity standards, and World Bank/UN procurement frameworks for donor-funded reconstruction projects.",
    },
    {
      question: es
        ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Sudán?"
        : "What sets KabatOne apart for Sudan's border management?",
      answer: es
        ? "KabatOne puede unificar los 7 corredores fronterizos (Egipto/Libia/Chad/CAR/Sudán del Sur/Etiopía/Eritrea) con gestión de flujos de refugiados UNHCR, monitoreo del corredor del Mar Rojo/Port Sudan y coordinación con IGAD/UA para estabilización regional."
        : "KabatOne can unify 7 border corridors (Egypt/Libya/Chad/CAR/South Sudan/Ethiopia/Eritrea) with UNHCR refugee flow management, Red Sea/Port Sudan corridor monitoring, and IGAD/AU coordination for regional stabilization.",
    },
  ]);

  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    {
      name: es ? "Recursos" : "Resources",
      url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/",
    },
    {
      name: es ? "Software de Seguridad Pública Sudán" : "Public Safety Software Sudan",
      url: es
        ? "https://kabatone.com/es/resources/public-safety-software-sudan/"
        : "https://kabatone.com/resources/public-safety-software-sudan/",
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
              {es ? "Guía de Mercado — Sudán" : "Market Guide — Sudan"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es
                ? "Software de Seguridad Pública para Sudán"
                : "Public Safety Software for Sudan"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {es
                ? "Plataforma modular de mando y control, gestión humanitaria y conciencia situacional para la reconstrucción de la seguridad pública en Sudán — desde Port Sudan hasta el corredor del Nilo."
                : "Modular command-and-control, humanitarian management, and situational awareness for Sudan's public safety reconstruction — from Port Sudan to the Nile corridor."}
            </p>
          </div>
        </section>

        {/* Context */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {es
              ? "Contexto de Seguridad — SAF, RSF y la Crisis de 2023"
              : "Security Context — SAF, RSF & the 2023 Crisis"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Desde abril de 2023, Sudán experimenta un conflicto armado entre las Fuerzas Armadas Sudanesas (SAF) y las Fuerzas de Apoyo Rápido (RSF), con combates en Jartum, Darfur Occidental, Kordofán y otras regiones. El conflicto ha generado más de 10 millones de desplazados internos y millones de refugiados en los países vecinos, convirtiendo a Sudán en la mayor crisis de desplazamiento del mundo en 2024. Port Sudan ha emergido como la capital de facto y sede del gobierno transitorio."
              : "Since April 2023, Sudan has experienced armed conflict between the Sudanese Armed Forces (SAF) and the Rapid Support Forces (RSF), with fighting in Khartoum, West Darfur, Kordofan, and other regions. The conflict has generated over 10 million IDPs and millions of refugees in neighboring countries, making Sudan the world's largest displacement crisis in 2024. Port Sudan has emerged as the de facto capital and seat of the transitional government."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne está posicionado como plataforma de reconstrucción de seguridad pública post-conflicto: modular, escalable y compatible con los estándares de coordinación humanitaria de OCHA/UNHCR/WFP, con capacidad de despliegue rápido en ciudades liberadas y zonas de estabilización."
              : "KabatOne is positioned as a post-conflict public safety reconstruction platform: modular, scalable, and compatible with OCHA/UNHCR/WFP humanitarian coordination standards, with rapid deployment capacity in liberated cities and stabilisation zones."}
          </p>

          {/* Humanitarian */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Coordinación Humanitaria — 10+ Millones de PDI y Corredores de Ayuda"
              : "Humanitarian Coordination — 10+ Million IDPs & Aid Corridors"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "OCHA coordina la respuesta humanitaria en Sudán con más de 80 organizaciones internacionales (UNHCR, WFP, UNICEF, MSF, CICR). Los principales corredores humanitarios incluyen: Port Sudan–Jartum (Carretera 1), Port Sudan–Kassala–Gedaref (corredor este), Adré–El Fasher (corredor Chad/Darfur), Renk–Malakal (corredor Sudán del Sur) y los cruces de Qustul/Aswan (Egipto)."
              : "OCHA coordinates humanitarian response in Sudan with over 80 international organizations (UNHCR, WFP, UNICEF, MSF, ICRC). Main humanitarian corridors include: Port Sudan-Khartoum (Highway 1), Port Sudan-Kassala-Gedaref (eastern corridor), Adre-El Fasher (Chad/Darfur corridor), Renk-Malakal (South Sudan corridor), and Qustul/Aswan crossings (Egypt)."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne integra los feeds humanitarios de OCHA/UNHCR/WFP para la gestión de los 10+ millones de PDI, monitoreo de los corredores de ayuda en tiempo real, coordinación de evacuaciones médicas de emergencia, y gestión de campamentos de desplazados en las zonas de Port Sudan/Kassala/Gedaref/Nyala."
              : "KabatOne integrates OCHA/UNHCR/WFP humanitarian feeds for management of 10+ million IDPs, real-time aid corridor monitoring, medical emergency evacuation coordination, and displaced persons camp management in Port Sudan/Kassala/Gedaref/Nyala zones."}
          </p>

          {/* Critical Infrastructure */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Infraestructura Crítica — Nilo, Petróleo y Puerto de Port Sudan"
              : "Critical Infrastructure — Nile, Oil & Port Sudan"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "La presa de Merowe (1,250 MW) sobre el Nilo es la mayor central hidroeléctrica de África Subsahariana. Las presas de Roseires (280 MW), Sennar, Khashm El Girba y Jebel Aulia complementan la red eléctrica nacional gestionada por SEDC/NEC. El oleoducto de exportación de petróleo desde los campos de Sudán del Sur (Greater Nile Petroleum Operating Company, GNPOC) corre 1,610 km desde Unity/Heglig hasta el Terminal de Bashayer en Port Sudan."
              : "Merowe Dam (1,250 MW) on the Nile is Sub-Saharan Africa's largest hydroelectric plant. Roseires (280 MW), Sennar, Khashm El Girba, and Jebel Aulia dams complement the national power grid managed by SEDC/NEC. The oil export pipeline from South Sudan fields (Greater Nile Petroleum Operating Company, GNPOC) runs 1,610 km from Unity/Heglig to Bashayer Terminal at Port Sudan."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "El Puerto de Port Sudan (Mar Rojo) es el único puerto marítimo de Sudán y la puerta de entrada/salida del comercio de toda la región. El Aeropuerto Internacional de Port Sudan (PZU) ha sustituido al Aeropuerto Internacional de Jartum (KRT) como principal punto de entrada aérea durante el conflicto. KabatOne monitorea toda esta infraestructura crítica con gestión unificada de activos y alertas de seguridad."
              : "Port Sudan Port (Red Sea) is Sudan's only seaport and the region's trade gateway. Port Sudan International Airport (PZU) has replaced Khartoum International Airport (KRT) as the main air entry point during the conflict. KabatOne monitors all this critical infrastructure with unified asset management and security alerts."}
          </p>

          {/* Border Management */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión Fronteriza — 7 Países Vecinos y Corredor del Mar Rojo"
              : "Border Management — 7 Neighboring Countries & Red Sea Corridor"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Sudán comparte fronteras con 7 países: Egipto al norte (Qustul/Aswan, corredor de refugiados), Libia al noroeste (frontera porosa del Sahara), Chad al oeste (Adré/Abéché, corredor humanitario de Darfur), República Centroafricana al suroeste, Sudán del Sur al sur (Renk/Juba corredor de petróleo), Etiopía al sureste (Metema/Gallabat), y Eritrea al este (Kassala/Tessenei). La costa del Mar Rojo (700 km) incluye Port Sudan, Suakin y Halaib."
              : "Sudan shares borders with 7 countries: Egypt to the north (Qustul/Aswan, refugee corridor), Libya to the northwest (porous Saharan border), Chad to the west (Adre/Abeche, Darfur humanitarian corridor), CAR to the southwest, South Sudan to the south (Renk/Juba oil corridor), Ethiopia to the southeast (Metema/Gallabat), and Eritrea to the east (Kassala/Tessenei). The Red Sea coast (700 km) includes Port Sudan, Suakin, and Halayeb."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne integra el monitoreo de los 7 corredores fronterizos con gestión de flujos de refugiados UNHCR, alertas de tráfico de armas de la UA/IGAD, seguimiento del corredor de exportación de petróleo Sudán del Sur/Port Sudan y el sistema de vigilancia marítima del Mar Rojo en coordinación con la marina sudanesa."
              : "KabatOne integrates monitoring of all 7 border corridors with UNHCR refugee flow management, AU/IGAD arms trafficking alerts, South Sudan/Port Sudan oil export corridor tracking, and Red Sea maritime surveillance system in coordination with the Sudanese navy."}
          </p>

          {/* Reconstruction */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Reconstrucción Post-Conflicto y Normalización Institucional"
              : "Post-Conflict Reconstruction & Institutional Normalisation"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "La Autoridad Intergubernamental para el Desarrollo (IGAD), la Unión Africana (UA), la Liga Árabe y la comunidad internacional lideran los esfuerzos de mediación y reconstrucción para Sudán. Los marcos de financiamiento incluyen el Banco Mundial/AfDB para infraestructura y reconstrucción, USAID/DFID para estabilización, y la plataforma de coordinación humanitaria OCHA/Cluster System."
              : "The Intergovernmental Authority on Development (IGAD), African Union (AU), Arab League, and international community lead mediation and reconstruction efforts for Sudan. Financing frameworks include World Bank/AfDB for infrastructure and reconstruction, USAID/DFID for stabilisation, and the OCHA/Cluster System humanitarian coordination platform."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne está estructurado para despliegue rápido bajo marcos de adquisiciones de emergencia del Banco Mundial/ONU, compatible con los sistemas de coordinación OCHA/UNDP, y diseñado para escalar desde operaciones humanitarias de emergencia hasta plataformas de seguridad pública civiles a medida que avanza la normalización institucional."
              : "KabatOne is structured for rapid deployment under World Bank/UN emergency procurement frameworks, compatible with OCHA/UNDP coordination systems, and designed to scale from emergency humanitarian operations to civilian public safety platforms as institutional normalisation advances."}
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
                    ? "¿Cómo puede KabatOne apoyar la reconstrucción de la seguridad pública en Sudán?"
                    : "How can KabatOne support public safety reconstruction in Sudan?",
                  a: es
                    ? "KabatOne proporciona CAD modular para las 18 estados, integración OCHA/UNHCR para 10+ millones de PDI, coordinación de corredores humanitarios y plataformas de emergencia para Port Sudan y ciudades en reconstrucción."
                    : "KabatOne provides modular CAD for 18 states, OCHA/UNHCR integration for 10+ million IDPs, humanitarian corridor coordination, and emergency platforms for Port Sudan and rebuilding cities.",
                },
                {
                  q: es
                    ? "¿Cómo apoya KabatOne la seguridad de infraestructura crítica en Sudán?"
                    : "How does KabatOne support critical infrastructure security in Sudan?",
                  a: es
                    ? "La plataforma monitorea Merowe Dam 1,250 MW/Roseires/Sennar, oleoducto GNPOC 1,610 km hasta Port Sudan/Bashayer, Puerto de Port Sudan (único acceso al Mar Rojo) y aeropuerto PZU."
                    : "The platform monitors Merowe Dam 1,250 MW/Roseires/Sennar, GNPOC pipeline 1,610 km to Port Sudan/Bashayer Terminal, Port Sudan (only Red Sea access), and PZU airport.",
                },
                {
                  q: es
                    ? "¿Puede KabatOne integrarse con la gestión humanitaria en Sudán?"
                    : "Can KabatOne integrate with humanitarian management in Sudan?",
                  a: es
                    ? "Sí. KabatOne integra OCHA/UNHCR/WFP para 10+ millones de PDI (mayor crisis desplazamiento mundial 2024), monitoreo de inundaciones del Nilo, alertas del Sahel y corredores humanitarios Chad/Egipto/Sudán del Sur."
                    : "Yes. KabatOne integrates OCHA/UNHCR/WFP for 10+ million IDPs (world's largest displacement crisis 2024), Nile flood monitoring, Sahel drought alerts, and Chad/Egypt/South Sudan humanitarian corridors.",
                },
                {
                  q: es
                    ? "¿Cómo cumple KabatOne con la normativa de Sudán?"
                    : "How does KabatOne comply with Sudan's regulations?",
                  a: es
                    ? "KabatOne se alinea con las leyes de telecomunicaciones NTC, estándares del Consejo de Soberanía de Transición y marcos de adquisiciones Banco Mundial/ONU para proyectos de reconstrucción financiados por donantes."
                    : "KabatOne aligns with NTC telecommunications laws, Transitional Sovereignty Council standards, and World Bank/UN procurement frameworks for donor-funded reconstruction projects.",
                },
                {
                  q: es
                    ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Sudán?"
                    : "What sets KabatOne apart for Sudan's border management?",
                  a: es
                    ? "KabatOne puede unificar los 7 corredores fronterizos (Egipto/Libia/Chad/CAR/Sudán del Sur/Etiopía/Eritrea) con gestión de refugiados UNHCR, monitoreo del Mar Rojo/Port Sudan y coordinación IGAD/UA."
                    : "KabatOne can unify 7 border corridors (Egypt/Libya/Chad/CAR/South Sudan/Ethiopia/Eritrea) with UNHCR refugee management, Red Sea/Port Sudan monitoring, and IGAD/AU coordination.",
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
              ? "¿Listo para apoyar la reconstrucción de la seguridad pública en Sudán?"
              : "Ready to support public safety reconstruction in Sudan?"
          }
          subtitle={
            es
              ? "Hable con nuestros especialistas sobre soluciones modulares para Port Sudan, corredores humanitarios y programas de estabilización financiados por donantes."
              : "Speak with our specialists about modular solutions for Port Sudan, humanitarian corridors, and donor-funded stabilisation programs."
          }
        />
      </main>
      <Footer es={es} />
    </>
  );
}
