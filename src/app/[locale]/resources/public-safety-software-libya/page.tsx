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
  return generatePageMetadata("publicSafetySoftwareLibya", locale);
}

export default async function PublicSafetySoftwareLibyaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const article = articleSchema(
    es
      ? "Software de Seguridad Pública para Libia | GNU, LNA y Reconstrucción Post-Conflicto – KabatOne"
      : "Public Safety Software for Libya | GNU, LNA & Post-Conflict Reconstruction – KabatOne",
    es
      ? "KabatOne ofrece plataforma modular de mando y control, protección de infraestructura petrolera y conciencia situacional para el Gobierno de Unidad Nacional de Libia, programas de seguridad en Trípoli/Bengasi y reconstrucción post-conflicto."
      : "KabatOne delivers modular command-and-control, oil infrastructure protection, and situational awareness for Libya's Government of National Unity, Tripoli/Benghazi security programs, and post-conflict reconstruction.",
    es
      ? "https://kabatone.com/es/resources/public-safety-software-libya"
      : "https://kabatone.com/resources/public-safety-software-libya",
    "2026-05-19"
  );

  const faqs = faqPageSchema([
    {
      question: es
        ? "¿Cómo puede KabatOne apoyar la seguridad pública en Libia?"
        : "How can KabatOne support public safety in Libya?",
      answer: es
        ? "KabatOne proporciona CAD/gestión de incidentes modular para los 22 municipios/3 regiones históricas (Tripolitania/Cirenaica/Fezzan), integración con los sistemas humanitarios OCHA/UNSMIL, coordinación de la Policía Judicial GNU y gestión de emergencias en Trípoli/Bengasi/Misrata."
        : "KabatOne provides modular CAD/incident management for all 22 municipalities/3 historical regions (Tripolitania/Cyrenaica/Fezzan), integration with OCHA/UNSMIL humanitarian systems, GNU Judicial Police coordination, and emergency management in Tripoli/Benghazi/Misrata.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad de la infraestructura petrolera de Libia?"
        : "How does KabatOne support Libya's oil infrastructure security?",
      answer: es
        ? "La plataforma monitorea los campos de petróleo de la NOC (Sharara 300K bpd, El Feel, Waha/Oasis, Elephant/Murzuq), el oleoducto Greenstream (gas a Italia), los terminales de exportación Es Sider/Ras Lanuf/Zueitina/Marsa El Brega, y las refinerías de Zawiya/Ras Lanuf con alertas de seguridad perimetral."
        : "The platform monitors NOC oil fields (Sharara 300K bpd, El Feel, Waha/Oasis, Elephant/Murzuq), Greenstream pipeline (gas to Italy), Es Sider/Ras Lanuf/Zueitina/Marsa El Brega export terminals, and Zawiya/Ras Lanuf refineries with perimeter security alerts.",
    },
    {
      question: es
        ? "¿Puede KabatOne integrarse con la gestión humanitaria en Libia?"
        : "Can KabatOne integrate with humanitarian management in Libya?",
      answer: es
        ? "Sí. KabatOne se integra con OCHA/UNSMIL/UNHCR para la gestión de los 188,000+ PDI y los migrantes subsaharianos en centros de detención, el monitoreo de la ruta de migración mediterránea (Trípoli/Zuara-Malta/Lampedusa), y la coordinación FRONTEX/Guardia Costera Italiana."
        : "Yes. KabatOne integrates with OCHA/UNSMIL/UNHCR for management of 188,000+ IDPs and Sub-Saharan migrants in detention centers, Mediterranean migration route monitoring (Tripoli/Zuara-Malta/Lampedusa), and FRONTEX/Italian Coast Guard coordination.",
    },
    {
      question: es
        ? "¿Cómo cumple KabatOne con la normativa de Libia?"
        : "How does KabatOne comply with Libya's regulations?",
      answer: es
        ? "KabatOne se alinea con las directrices de telecomunicaciones de la Autoridad General de Comunicaciones e Informática (AGCI/GICI), los estándares de ciberseguridad del GNU, y los marcos de adquisiciones del Banco Mundial/ONU/USAID para proyectos de reconstrucción y estabilización financiados por donantes."
        : "KabatOne aligns with General Authority for Communications and Informatics (AGCI/GICI) telecommunications guidelines, GNU cybersecurity standards, and World Bank/UN/USAID procurement frameworks for donor-funded reconstruction and stabilisation projects.",
    },
    {
      question: es
        ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Libia?"
        : "What sets KabatOne apart for Libya's border management?",
      answer: es
        ? "KabatOne puede unificar los 6 corredores fronterizos (Túnez/Algeria/Níger/Chad/Sudán/Egipto) con ANPR, listas Interpol/UA/EUTF-Africa, monitoreo de la ruta de tráfico de migrantes Sahel-Mediterráneo, y alertas de contrabando de armas para las Fuerzas de Guardia de Instalaciones Petroleras (OGIG)."
        : "KabatOne can unify 6 border corridors (Tunisia/Algeria/Niger/Chad/Sudan/Egypt) with ANPR, Interpol/AU/EUTF-Africa watchlists, Sahel-Mediterranean migrant trafficking route monitoring, and arms smuggling alerts for the Oil Facilities Guard (OGIG).",
    },
  ]);

  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es" : "https://kabatone.com/" },
    {
      name: es ? "Recursos" : "Resources",
      url: es ? "https://kabatone.com/es/resources" : "https://kabatone.com/resources",
    },
    {
      name: es ? "Software de Seguridad Pública Libia" : "Public Safety Software Libya",
      url: es
        ? "https://kabatone.com/es/resources/public-safety-software-libya"
        : "https://kabatone.com/resources/public-safety-software-libya",
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
              {es ? "Guía de Mercado — Libia" : "Market Guide — Libya"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es
                ? "Software de Seguridad Pública para Libia"
                : "Public Safety Software for Libya"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {es
                ? "Plataforma modular de mando y control, protección de infraestructura petrolera y conciencia situacional para la reconstrucción de la seguridad pública en Libia — desde Trípoli y Bengasi hasta el corredor sahelo-mediterráneo."
                : "Modular command-and-control, oil infrastructure protection, and situational awareness for Libya's public safety reconstruction — from Tripoli and Benghazi to the Sahel-Mediterranean corridor."}
            </p>
          </div>
        </section>

        {/* Security Context */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {es
              ? "Contexto de Seguridad — GNU, LNA y el Proceso de Paz de la ONU"
              : "Security Context — GNU, LNA & UN Peace Process"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Libia opera bajo un proceso político dual: el Gobierno de Unidad Nacional (GNU) con sede en Trípoli, reconocido internacionalmente, y el gobierno del este con el General Haftar y las Fuerzas Armadas Árabes Libias (LNA/LAAF) con sede en Bengasi/Tobruk. El Proceso Político Libio (LPP) de la ONU, facilitado por UNSMIL, busca la unificación institucional y la celebración de elecciones. El Cese al Fuego de 2020 y el GNU de 2021 son pasos clave hacia la estabilización."
              : "Libya operates under a dual political process: the Government of National Unity (GNU) based in Tripoli, internationally recognised, and the eastern government with General Haftar and the Libyan Arab Armed Forces (LNA/LAAF) based in Benghazi/Tobruk. The UN Libyan Political Process (LPP), facilitated by UNSMIL, seeks institutional unification and elections. The 2020 Ceasefire and 2021 GNU are key steps toward stabilisation."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne está posicionado como plataforma de reconstrucción de seguridad pública post-conflicto: modular, escalable y compatible con los estándares de coordinación humanitaria OCHA/UNSMIL, con capacidad de despliegue en Trípoli, Bengasi, Misrata, Sabha y otras ciudades en proceso de estabilización."
              : "KabatOne is positioned as a post-conflict public safety reconstruction platform: modular, scalable, and compatible with OCHA/UNSMIL humanitarian coordination standards, with deployment capacity in Tripoli, Benghazi, Misrata, Sabha, and other stabilising cities."}
          </p>

          {/* Oil Infrastructure */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Infraestructura Petrolera — NOC, Sharara, Greenstream y Terminales del Mediterráneo"
              : "Oil Infrastructure — NOC, Sharara, Greenstream & Mediterranean Terminals"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "La National Oil Corporation (NOC) gestiona la producción de petróleo y gas de Libia (~1.2-1.3 millones de bpd en máximos recientes). Los principales campos incluyen: Sharara (mayor campo de Libia, hasta 300,000 bpd, SW Libia), El Feel (Elephant, Murzuq Basin), Waha/Oasis Complex, Sarir y Messla. El gasoducto Greenstream (550 km submarino) exporta gas a Italia (ENAGAS/ENI), con una capacidad de 8-11 bcm/año."
              : "National Oil Corporation (NOC) manages Libya's oil and gas production (~1.2-1.3 million bpd at recent peaks). Key fields include: Sharara (Libya's largest field, up to 300,000 bpd, SW Libya), El Feel (Elephant, Murzuq Basin), Waha/Oasis Complex, Sarir, and Messla. Greenstream pipeline (550 km submarine) exports gas to Italy (ENAGAS/ENI), with 8-11 bcm/year capacity."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "Los terminales de exportación de crudo incluyen: Es Sider (mayor terminal, 350,000+ bpd), Ras Lanuf, Zueitina, Marsa El Brega y El Hariga (Tobruk). Las Oil Facilities Guard (OGIG/Petroleum Facilities Guard, PFG) protegen estas instalaciones. KabatOne proporciona seguridad perimetral georreferenciada, monitoreo de oleoductos con alertas de intrusión, gestión de incidentes del personal internacional NOC/ENI/BP y coordinación OGIG/PFG."
              : "Crude export terminals include: Es Sider (largest terminal, 350,000+ bpd), Ras Lanuf, Zueitina, Marsa El Brega, and El Hariga (Tobruk). Oil Facilities Guard (OGIG/Petroleum Facilities Guard, PFG) protect these facilities. KabatOne provides georeferenced perimeter security, pipeline monitoring with intrusion alerts, NOC/ENI/BP international staff incident management, and OGIG/PFG coordination."}
          </p>

          {/* Migration */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión Migratoria — Ruta Mediterránea Central y PDI"
              : "Migration Management — Central Mediterranean Route & IDPs"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Libia es el principal punto de partida de la Ruta Migratoria del Mediterráneo Central — la más mortífera del mundo — con decenas de miles de intentos de cruce anualmente hacia Italia (Lampedusa/Sicilia) y Malta. Los principales puntos de salida incluyen Trípoli, Zuara, Misrata y la costa de Sirte. La Guardia Costera Libia, respaldada por la UE/FRONTEX/Italia, realiza operaciones de interceptación en el Mediterráneo."
              : "Libya is the primary departure point for the Central Mediterranean Migration Route — the world's deadliest — with tens of thousands of crossing attempts annually toward Italy (Lampedusa/Sicily) and Malta. Main departure points include Tripoli, Zuara, Misrata, and the Sirte coast. The Libyan Coast Guard, backed by EU/FRONTEX/Italy, conducts interception operations in the Mediterranean."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne integra el monitoreo de la Guardia Costera Libia con feeds de FRONTEX/Guardia Costera Italiana, gestión de los 188,000+ PDI y migrantes en centros de detención con UNHCR/OIM, el Sistema de Monitoreo Migratorio SAR y los protocolos de rescate marítimo coordinados con el MRCC Roma."
              : "KabatOne integrates Libyan Coast Guard monitoring with FRONTEX/Italian Coast Guard feeds, management of 188,000+ IDPs and migrants in detention centers with UNHCR/IOM, SAR Migration Monitoring System, and maritime rescue protocols coordinated with MRCC Rome."}
          </p>

          {/* Border */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión Fronteriza — 6 Países Vecinos y el Corredor Sahel"
              : "Border Management — 6 Neighboring Countries & the Sahel Corridor"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Libia comparte fronteras con 6 países a través de 4,348 km de fronteras terrestres: Túnez al noroeste (Ras Jedir — el cruce más transitado), Argelia al oeste (Debdeb/Ghadamès), Níger al sur (Tummo — ruta de tráfico principal), Chad al sureste (Toummo/Tibesti), Sudán al sureste (frontera poco delimitada) y Egipto al este (Sallum/Msaid — corredor principal). La larga frontera sur con el Sahara es extremadamente porosa y difícil de vigilar."
              : "Libya shares borders with 6 countries across 4,348 km of land borders: Tunisia to the northwest (Ras Jedir — busiest crossing), Algeria to the west (Debdeb/Ghadames), Niger to the south (Tummo — main trafficking route), Chad to the southeast (Toummo/Tibesti), Sudan to the southeast (poorly delimited border), and Egypt to the east (Sallum/Msaid — main corridor). The long southern Saharan border is extremely porous and difficult to monitor."}
          </p>

          {/* Compliance */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Cumplimiento y Reconstrucción — AGCI, ONU/UE y Marcos de Donantes"
              : "Compliance & Reconstruction — AGCI, UN/EU & Donor Frameworks"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Las adquisiciones de seguridad pública en Libia están vinculadas principalmente a proyectos financiados por la ONU (UNSMIL/UNDP), la UE (Fondo Fiduciario de Emergencia para África/EUTF-Africa, Misión IRINI), los EE.UU. (USAID/Departamento de Estado), el Banco Mundial y los donantes bilaterales europeos (Italia, Francia, Alemania, Reino Unido). La General Authority for Communications and Informatics (AGCI/GICI) del GNU regula las telecomunicaciones."
              : "Public safety procurement in Libya is primarily linked to UN-funded projects (UNSMIL/UNDP), EU (EU Trust Fund for Africa/EUTF-Africa, Operation IRINI), US (USAID/State Dept.), World Bank, and European bilateral donors (Italy, France, Germany, UK). GNU's General Authority for Communications and Informatics (AGCI/GICI) regulates telecommunications."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne está estructurado para despliegue bajo marcos de adquisiciones de emergencia ONU/UE/USAID, compatible con los sistemas de coordinación UNSMIL/OCHA, y diseñado para escalar desde operaciones de estabilización de emergencia hacia plataformas de seguridad pública civiles sostenibles bajo la Agenda de Reconstrucción y Estabilización de Libia de la ONU."
              : "KabatOne is structured for deployment under UN/EU/USAID emergency procurement frameworks, compatible with UNSMIL/OCHA coordination systems, and designed to scale from emergency stabilisation operations to sustainable civilian public safety platforms under the UN Libya Reconstruction and Stabilisation Agenda."}
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
                    ? "¿Cómo puede KabatOne apoyar la seguridad pública en Libia?"
                    : "How can KabatOne support public safety in Libya?",
                  a: es
                    ? "KabatOne proporciona CAD modular para 22 municipios/3 regiones, integración OCHA/UNSMIL, coordinación Policía Judicial GNU y gestión de emergencias en Trípoli/Bengasi/Misrata."
                    : "KabatOne provides modular CAD for 22 municipalities/3 regions, OCHA/UNSMIL integration, GNU Judicial Police coordination, and emergency management in Tripoli/Benghazi/Misrata.",
                },
                {
                  q: es
                    ? "¿Cómo apoya KabatOne la seguridad de la infraestructura petrolera de Libia?"
                    : "How does KabatOne support Libya's oil infrastructure security?",
                  a: es
                    ? "La plataforma monitorea NOC Sharara 300K bpd/El Feel/Waha/Oasis, Greenstream pipeline, terminales Es Sider/Ras Lanuf/Zueitina y personal NOC/ENI/BP con seguridad perimetral y coordinación OGIG/PFG."
                    : "The platform monitors NOC Sharara 300K bpd/El Feel/Waha/Oasis, Greenstream pipeline, Es Sider/Ras Lanuf/Zueitina terminals, and NOC/ENI/BP staff with perimeter security and OGIG/PFG coordination.",
                },
                {
                  q: es
                    ? "¿Puede KabatOne integrarse con la gestión humanitaria en Libia?"
                    : "Can KabatOne integrate with humanitarian management in Libya?",
                  a: es
                    ? "Sí. KabatOne integra OCHA/UNSMIL/UNHCR para 188K+ PDI y migrantes detenidos, ruta migratoria Mediterránea Central y coordinación FRONTEX/Guardia Costera Italiana/MRCC Roma."
                    : "Yes. KabatOne integrates OCHA/UNSMIL/UNHCR for 188K+ IDPs and detained migrants, Central Mediterranean migration route, and FRONTEX/Italian Coast Guard/MRCC Rome coordination.",
                },
                {
                  q: es
                    ? "¿Cómo cumple KabatOne con la normativa de Libia?"
                    : "How does KabatOne comply with Libya's regulations?",
                  a: es
                    ? "KabatOne se alinea con AGCI/GICI telecom, estándares GNU y marcos de adquisiciones ONU/UE/USAID/Banco Mundial para proyectos de reconstrucción y estabilización."
                    : "KabatOne aligns with AGCI/GICI telecom, GNU standards, and UN/EU/USAID/World Bank procurement frameworks for reconstruction and stabilisation projects.",
                },
                {
                  q: es
                    ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Libia?"
                    : "What sets KabatOne apart for Libya's border management?",
                  a: es
                    ? "KabatOne puede unificar los 6 corredores (Túnez/Algeria/Níger/Chad/Sudán/Egipto) con ANPR, listas Interpol/UA/EUTF-Africa, monitoreo de la ruta de migración Sahel-Mediterráneo y alertas de contrabando de armas OGIG."
                    : "KabatOne can unify 6 corridors (Tunisia/Algeria/Niger/Chad/Sudan/Egypt) with ANPR, Interpol/AU/EUTF-Africa watchlists, Sahel-Mediterranean migration route monitoring, and OGIG arms smuggling alerts.",
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
              ? "¿Listo para apoyar la seguridad pública y la reconstrucción en Libia?"
              : "Ready to support public safety and reconstruction in Libya?"
          }
          subtitle={
            es
              ? "Hable con nuestros especialistas sobre soluciones modulares para el GNU, la protección de la NOC/Greenstream, la gestión migratoria y los programas UNSMIL/UE."
              : "Speak with our specialists about modular solutions for GNU, NOC/Greenstream protection, migration management, and UNSMIL/EU programs."
          }
        />
      </main>
      <Footer es={es} />
    </>
  );
}
