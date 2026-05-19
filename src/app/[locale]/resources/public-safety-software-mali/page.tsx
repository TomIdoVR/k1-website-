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
  return generatePageMetadata("publicSafetySoftwareMali", locale);
}

export default async function PublicSafetySoftwareMaliPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const article = articleSchema(
    es
      ? "Software de Seguridad Pública para Mali | FAMa, JNIM y Gestión de Crisis Sahel – KabatOne"
      : "Public Safety Software for Mali | FAMa, JNIM & Sahel Crisis Management – KabatOne",
    es
      ? "KabatOne ofrece plataforma modular de mando y control, coordinación de operaciones antiterroristas y conciencia situacional para las Forces Armées Maliennes, gestión humanitaria y programas de estabilización del Sahel en Mali."
      : "KabatOne delivers modular command-and-control, counter-terrorism operations coordination, and situational awareness for the Forces Armées Maliennes, humanitarian management, and Sahel stabilisation programs in Mali.",
    es
      ? "https://kabatone.com/es/resources/public-safety-software-mali/"
      : "https://kabatone.com/resources/public-safety-software-mali/",
    "2026-05-19"
  );

  const faqs = faqPageSchema([
    {
      question: es
        ? "¿Cómo puede KabatOne apoyar la seguridad pública en Mali?"
        : "How can KabatOne support public safety in Mali?",
      answer: es
        ? "KabatOne proporciona CAD/gestión de incidentes modular para las 10 regiones/cercles, coordinación antiterrorista FAMa/Fuerzas Wagner con inteligencia táctica, gestión de los 400,000+ PDI y plataformas de comunicación de emergencia para Bamako y las ciudades en las zonas de seguridad del norte/centro."
        : "KabatOne provides modular CAD/incident management for all 10 regions/cercles, FAMa/Wagner Forces counter-terrorism coordination with tactical intelligence, management of 400,000+ IDPs, and emergency communication platforms for Bamako and cities in the northern/central security zones.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad de infraestructura crítica en Mali?"
        : "How does KabatOne support critical infrastructure security in Mali?",
      answer: es
        ? "La plataforma monitorea las minas de oro de Loulo-Gounkoto (Barrick ~700K oz/año), Syama (Resolute), Fekola (B2Gold ~600K oz/año), las presas hidroeléctricas de Sélingué (68 MW)/Manantali (200 MW)/Sotuba, el corredor ferroviario Dakar-Bamako y el aeropuerto de Bamako-Sénou (BKO)."
        : "The platform monitors Loulo-Gounkoto gold mines (Barrick ~700K oz/year), Syama (Resolute), Fekola (B2Gold ~600K oz/year), Selingue (68 MW)/Manantali (200 MW)/Sotuba hydroelectric dams, Dakar-Bamako rail corridor, and Bamako-Senou Airport (BKO).",
    },
    {
      question: es
        ? "¿Puede KabatOne integrarse con la gestión humanitaria en Mali?"
        : "Can KabatOne integrate with humanitarian management in Mali?",
      answer: es
        ? "Sí. KabatOne se integra con OCHA/UNHCR/WFP/MINUSMA-sucesora para la gestión de los 400,000+ PDI, el Sistema de Alerta Temprana del Sahel/FEWS NET, alertas de inundaciones del río Níger/Delta Interior, coordinación de fronteras con Mauritania/Argelia/Níger/Burkina Faso/Costa de Marfil/Guinea/Senegal."
        : "Yes. KabatOne integrates with OCHA/UNHCR/WFP/MINUSMA successor for management of 400,000+ IDPs, Sahel/FEWS NET Early Warning System, Niger River/Inner Delta flood alerts, and border coordination with Mauritania/Algeria/Niger/Burkina Faso/Ivory Coast/Guinea/Senegal.",
    },
    {
      question: es
        ? "¿Cómo cumple KabatOne con la normativa de Mali?"
        : "How does KabatOne comply with Mali's regulations?",
      answer: es
        ? "KabatOne se alinea con la Loi 2013-015/AN-RM del 21 de mayo de 2013 sobre Protección de Datos Personales, la Autorité Malienne de Régulation des Télécommunications et des Postes (AMRTP), los estándares del CERT Mali y los marcos de adquisiciones del Banco Mundial/PNUD/AES para proyectos de estabilización financiados por donantes."
        : "KabatOne aligns with Law 2013-015/AN-RM of 21 May 2013 on Personal Data Protection, Autorité Malienne de Régulation des Télécommunications et des Postes (AMRTP), CERT Mali standards, and World Bank/UNDP/AES procurement frameworks for donor-funded stabilisation projects.",
    },
    {
      question: es
        ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Mali?"
        : "What sets KabatOne apart for Mali's border management?",
      answer: es
        ? "KabatOne puede unificar los 7 corredores fronterizos (Mauritania/Argelia/Níger/Burkina Faso/Costa de Marfil/Guinea/Senegal) con ANPR, listas Interpol/AES, alertas de JNIM/GSIM/ISGS y monitoreo del corredor Bamako-Dakar/Abidjan con gestión unificada FAMa/Gendarmerie."
        : "KabatOne can unify 7 border corridors (Mauritania/Algeria/Niger/Burkina Faso/Ivory Coast/Guinea/Senegal) with ANPR, Interpol/AES watchlists, JNIM/GSIM/ISGS alerts, and Bamako-Dakar/Abidjan corridor monitoring with unified FAMa/Gendarmerie management.",
    },
  ]);

  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    {
      name: es ? "Recursos" : "Resources",
      url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/",
    },
    {
      name: es ? "Software de Seguridad Pública Mali" : "Public Safety Software Mali",
      url: es
        ? "https://kabatone.com/es/resources/public-safety-software-mali/"
        : "https://kabatone.com/resources/public-safety-software-mali/",
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
              {es ? "Guía de Mercado — Mali" : "Market Guide — Mali"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es
                ? "Software de Seguridad Pública para Mali"
                : "Public Safety Software for Mali"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {es
                ? "Plataforma modular de mando y control, coordinación antiterrorista y gestión humanitaria para las FAMa, la Gendarmerie Nationale y los programas de estabilización del Sahel en Mali — desde Bamako hasta el corredor del río Níger."
                : "Modular command-and-control, counter-terrorism coordination, and humanitarian management for FAMa, the Gendarmerie Nationale, and Sahel stabilisation programs in Mali — from Bamako to the Niger River corridor."}
            </p>
          </div>
        </section>

        {/* Security Context */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {es
              ? "Contexto de Seguridad — JNIM/GSIM, AES y la Transición"
              : "Security Context — JNIM/GSIM, AES & the Transition"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Mali enfrenta desde 2012 (caída de Kidal/rebelión MNLA) una grave crisis de seguridad que se ha extendido desde el norte (Kidal/Gao/Timbuktu) hacia el centro (Mopti/Ségou) del país. Los grupos terroristas JNIM (Jama'a Nusrat ul-Islam wa al-Muslimin/Al-Qaeda) y el EIGS/ISGS (Estado Islámico) operan en vastas zonas del país. La Transition Junta del CNSP/Assimi Goïta (golpes de 2020/2021) expulsó las misiones francesas (Barkhane/SABRE) y la misión de paz de la ONU MINUSMA (2023), reemplazando la cooperación occidental con el Grupo Wagner/Africa Corps ruso."
              : "Mali has faced since 2012 (fall of Kidal/MNLA rebellion) a severe security crisis that has spread from the north (Kidal/Gao/Timbuktu) to the center (Mopti/Segou) of the country. Terrorist groups JNIM (Jama'a Nusrat ul-Islam wa al-Muslimin/Al-Qaeda) and EIGS/ISGS (Islamic State) operate in vast areas. The CNSP/Assimi Goita Transition Junta (2020/2021 coups) expelled French missions (Barkhane/SABRE) and UN peacekeeping mission MINUSMA (2023), replacing Western cooperation with Russia's Wagner Group/Africa Corps."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "Las Forces Armées du Mali (FAMa), con más de 20,000 efectivos, y las unidades del Groupe Wagner/Africa Corps (estimados 1,000-1,500) conducen operaciones conjuntas contra el JNIM y el EIGS. La Police Nationale/Gendarmerie Nationale opera principalmente en Bamako y las principales ciudades. KabatOne proporciona plataformas de C2 modulares adaptadas a las condiciones operativas del Sahel."
              : "Forces Armées du Mali (FAMa), with over 20,000 troops, and Wagner Group/Africa Corps units (estimated 1,000-1,500) conduct joint operations against JNIM and EIGS. Police Nationale/Gendarmerie Nationale operates primarily in Bamako and major cities. KabatOne provides modular C2 platforms adapted to Sahel operational conditions."}
          </p>

          {/* Mining */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Seguridad Minera — Oro y Recursos Estratégicos"
              : "Mining Security — Gold & Strategic Resources"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Mali es el 3er productor de oro de África. Los principales yacimientos incluyen: Loulo-Gounkoto (Barrick Gold, ~700,000 oz/año — uno de los mayores complejos de oro de África), Fekola (B2Gold, ~600,000 oz/año), Syama (Resolute Mining), Sadiola Hill, Morila y Tabakoto. Las minas son frecuentes objetivos de ataques del JNIM/GSIM, que imponen extorsión y han causado cierres temporales de operaciones."
              : "Mali is Africa's 3rd largest gold producer. Key deposits include: Loulo-Gounkoto (Barrick Gold, ~700,000 oz/year — one of Africa's largest gold complexes), Fekola (B2Gold, ~600,000 oz/year), Syama (Resolute Mining), Sadiola Hill, Morila, and Tabakoto. Mines are frequent JNIM/GSIM attack targets, which impose extortion and have caused temporary operational closures."}
          </p>

          {/* Humanitarian */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión Humanitaria — PDI, Delta Interior del Níger y Seguridad Alimentaria"
              : "Humanitarian Management — IDPs, Niger Inner Delta & Food Security"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Mali registra más de 400,000 desplazados internos (PDI) y más de 115,000 refugiados malienses en los países vecinos (Mauritania, Níger, Burkina Faso). El Delta Interior del Níger — uno de los ecosistemas de agua dulce más importantes de África — experimenta inundaciones estacionales que afectan a millones de personas. El Système d'Alerte Précoce (SAP) y FEWS NET monitorean la inseguridad alimentaria crónica en el norte/centro."
              : "Mali records over 400,000 internally displaced persons (IDPs) and over 115,000 Malian refugees in neighboring countries (Mauritania, Niger, Burkina Faso). The Niger Inner Delta — one of Africa's most important freshwater ecosystems — experiences seasonal flooding affecting millions. Système d'Alerte Précoce (SAP) and FEWS NET monitor chronic food insecurity in the north/center."}
          </p>

          {/* Infrastructure */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Infraestructura Crítica — Níger, Manantali, Dakar-Bamako y BKO"
              : "Critical Infrastructure — Niger River, Manantali, Dakar-Bamako & BKO"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "La presa de Manantali (200 MW, OMVS — organización transfronteriza con Senegal/Mauritania) y Sélingué (68 MW) son las principales fuentes de hidroelectricidad. EDM-SA gestiona la red eléctrica nacional. El corredor ferroviario Dakar-Bamako (línea histórica de 1,286 km gestionada por TRANSRAIL) es la arteria de comercio exterior. El Aeropuerto Internacional de Bamako-Sénou (BKO) es el principal punto de entrada aéreo."
              : "Manantali Dam (200 MW, OMVS — transboundary organization with Senegal/Mauritania) and Selingue (68 MW) are the main hydroelectricity sources. EDM-SA manages the national power grid. The Dakar-Bamako rail corridor (historic 1,286 km line managed by TRANSRAIL) is the foreign trade artery. Bamako-Senou International Airport (BKO) is the main air entry point."}
          </p>

          {/* Border */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión Fronteriza — 7 Países Vecinos y Corredor Sahel-Mediterráneo"
              : "Border Management — 7 Neighboring Countries & Sahel-Mediterranean Corridor"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Mali es el 8vo país más grande de África y comparte fronteras con 7 países: Mauritania al noroeste, Argelia al noreste (corredor Sahara/ruta de tráfico de armas y drogas), Níger al este (AES), Burkina Faso al sur (AES), Costa de Marfil al suroeste, Guinea al suroeste y Senegal al oeste (corredor Bamako-Dakar). Mali forma parte de la Alliance des États du Sahel (AES) junto con Burkina Faso y Níger — suspendiendo su membresía en la CEDEAO en 2023."
              : "Mali is Africa's 8th largest country and shares borders with 7 countries: Mauritania to the northwest, Algeria to the northeast (Saharan corridor/arms and drugs trafficking route), Niger to the east (AES), Burkina Faso to the south (AES), Ivory Coast to the southwest, Guinea to the southwest, and Senegal to the west (Bamako-Dakar corridor). Mali is part of the Alliance of Sahel States (AES) with Burkina Faso and Niger — suspending ECOWAS membership in 2023."}
          </p>

          {/* Compliance */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Cumplimiento y Adquisiciones — AMRTP, Marchés Publics y AES"
              : "Compliance & Procurement — AMRTP, Marchés Publics & AES"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Mali aplica la Loi 2013-015/AN-RM du 21 mai 2013 portant protection des données à caractère personnel, supervisada por la Commission Nationale de l'Informatique et des Libertés (CNIL-Mali). La Autorité Malienne de Régulation des Télécommunications et des Postes (AMRTP) regula las telecomunicaciones. Las adquisiciones públicas se rigen por el Décret 08-485/P-RM du 11 août 2008 portant procédures de passation, d'exécution et de règlement des marchés publics, supervisado por la Direction Générale des Marchés Publics et des Délégations de Service Public (DGMP-DSP)."
              : "Mali enforces Law 2013-015/AN-RM of 21 May 2013 on personal data protection, overseen by Commission Nationale de l'Informatique et des Libertés (CNIL-Mali). Autorité Malienne de Régulation des Télécommunications et des Postes (AMRTP) regulates telecommunications. Public procurement follows Décret 08-485/P-RM du 11 août 2008 on public procurement procedures, overseen by Direction Générale des Marchés Publics et des Délégations de Service Public (DGMP-DSP)."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "Los proyectos de estabilización en Mali son financiados principalmente por el Banco Mundial, el PNUD, la UE (bajo restricciones post-junta), USAID, el G5 Sahel (suspendido) y la AES. KabatOne está estructurado para despliegue bajo estos marcos, compatible con los estándares de coordinación OCHA/PNUD y los protocolos de la AES."
              : "Stabilisation projects in Mali are primarily funded by the World Bank, UNDP, EU (under post-junta restrictions), USAID, G5 Sahel (suspended), and AES. KabatOne is structured for deployment under these frameworks, compatible with OCHA/UNDP coordination standards and AES protocols."}
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
                    ? "¿Cómo puede KabatOne apoyar la seguridad pública en Mali?"
                    : "How can KabatOne support public safety in Mali?",
                  a: es
                    ? "KabatOne proporciona CAD modular para 10 regiones/cercles, coordinación FAMa antiterrorista, gestión 400K+ PDI y plataformas de emergencia para Bamako y zonas de reconquista norte/centro."
                    : "KabatOne provides modular CAD for 10 regions/cercles, FAMa counter-terrorism coordination, 400K+ IDP management, and emergency platforms for Bamako and northern/central reconquest zones.",
                },
                {
                  q: es
                    ? "¿Cómo apoya KabatOne la seguridad minera en Mali?"
                    : "How does KabatOne support mining security in Mali?",
                  a: es
                    ? "La plataforma monitorea Loulo-Gounkoto ~700K oz/Fekola ~600K oz/Syama gold mines con seguridad perimetral, gestión de evacuaciones de personal Barrick/B2Gold/Resolute y coordinación FAMa."
                    : "The platform monitors Loulo-Gounkoto ~700K oz/Fekola ~600K oz/Syama gold mines with perimeter security, Barrick/B2Gold/Resolute staff evacuation management, and FAMa coordination.",
                },
                {
                  q: es
                    ? "¿Puede KabatOne integrarse con la gestión humanitaria en Mali?"
                    : "Can KabatOne integrate with humanitarian management in Mali?",
                  a: es
                    ? "Sí. KabatOne integra OCHA/UNHCR/WFP para 400K+ PDI, alertas inundaciones Delta Interior Níger, FEWS NET inseguridad alimentaria y coordinación AES/G5 Sahel corredores humanitarios."
                    : "Yes. KabatOne integrates OCHA/UNHCR/WFP for 400K+ IDPs, Niger Inner Delta flood alerts, FEWS NET food insecurity, and AES/G5 Sahel humanitarian corridor coordination.",
                },
                {
                  q: es
                    ? "¿Cómo cumple KabatOne con la normativa de Mali?"
                    : "How does KabatOne comply with Mali's regulations?",
                  a: es
                    ? "KabatOne se alinea con Loi 2013-015/CNIL-Mali, AMRTP/CERT-Mali, Décret 08-485/DGMP-DSP y marcos de adquisiciones Banco Mundial/PNUD/AES para proyectos de estabilización."
                    : "KabatOne aligns with Law 2013-015/CNIL-Mali, AMRTP/CERT-Mali, Décret 08-485/DGMP-DSP, and World Bank/UNDP/AES procurement frameworks for stabilisation projects.",
                },
                {
                  q: es
                    ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Mali?"
                    : "What sets KabatOne apart for Mali's border management?",
                  a: es
                    ? "KabatOne puede unificar los 7 corredores (Mauritania/Argelia/Níger/Burkina Faso/CI/Guinea/Senegal) con ANPR, listas Interpol/AES, alertas JNIM/GSIM/ISGS y monitoreo corredor Bamako-Dakar/Abidjan."
                    : "KabatOne can unify 7 corridors (Mauritania/Algeria/Niger/Burkina Faso/CI/Guinea/Senegal) with ANPR, Interpol/AES watchlists, JNIM/GSIM/ISGS alerts, and Bamako-Dakar/Abidjan corridor monitoring.",
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
              ? "¿Listo para apoyar la seguridad pública y la estabilización en Mali?"
              : "Ready to support public safety and stabilisation in Mali?"
          }
          subtitle={
            es
              ? "Hable con nuestros especialistas sobre soluciones modulares para las FAMa, la protección de minas de oro, la gestión de PDI y los programas AES/G5 Sahel."
              : "Speak with our specialists about modular solutions for FAMa, gold mine protection, IDP management, and AES/G5 Sahel programs."
          }
        />
      </main>
      <Footer es={es} />
    </>
  );
}
