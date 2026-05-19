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
  return generatePageMetadata("publicSafetySoftwareBurkinaFaso", locale);
}

export default async function PublicSafetySoftwareBurkinaFasoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const article = articleSchema(
    es
      ? "Software de Seguridad Pública para Burkina Faso | DGSN, FAN y Gestión de Crisis Sahel – KabatOne"
      : "Public Safety Software for Burkina Faso | DGSN, FAN & Sahel Crisis Management – KabatOne",
    es
      ? "KabatOne ofrece plataforma modular de mando y control, coordinación de operaciones antiterroristas y conciencia situacional para la Police Nationale, Forces Armées Nationales y programas de estabilización del Sahel en Burkina Faso."
      : "KabatOne delivers modular command-and-control, counter-terrorism operations coordination, and situational awareness for the Police Nationale, Forces Armées Nationales, and Sahel stabilisation programs in Burkina Faso.",
    es
      ? "https://kabatone.com/es/resources/public-safety-software-burkina-faso/"
      : "https://kabatone.com/resources/public-safety-software-burkina-faso/",
    "2026-05-19"
  );

  const faqs = faqPageSchema([
    {
      question: es
        ? "¿Cómo puede KabatOne apoyar la seguridad pública en Burkina Faso?"
        : "How can KabatOne support public safety in Burkina Faso?",
      answer: es
        ? "KabatOne proporciona CAD/gestión de incidentes modular para las 13 regiones/45 provincias, coordinación antiterrorista FAN/VDP con inteligencia táctica, gestión de los 2+ millones de PDI y plataformas de comunicación de emergencia para Ouagadougou y las ciudades en las zonas de seguridad."
        : "KabatOne provides modular CAD/incident management for all 13 regions/45 provinces, FAN/VDP counter-terrorism coordination with tactical intelligence, management of 2+ million IDPs, and emergency communication platforms for Ouagadougou and cities in security zones.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad de infraestructura crítica en Burkina Faso?"
        : "How does KabatOne support critical infrastructure security in Burkina Faso?",
      answer: es
        ? "La plataforma monitorea las minas de oro de IAMGOLD Essakane/Hounde/Mana (Burkina Faso es el 4to productor de oro de África), la presa de Bagré (16 MW), SONABEL red eléctrica, el oleoducto de productos refinados desde Costa de Marfil, el corredor ferroviario Abidjan-Ouagadougou-Niger y el aeropuerto de Ouagadougou OUA."
        : "The platform monitors IAMGOLD Essakane/Hounde/Mana gold mines (Burkina Faso is Africa's 4th gold producer), Bagre Dam (16 MW), SONABEL power grid, refined products pipeline from Ivory Coast, Abidjan-Ouagadougou-Niger rail corridor, and Ouagadougou OUA airport.",
    },
    {
      question: es
        ? "¿Puede KabatOne integrarse con la gestión humanitaria en Burkina Faso?"
        : "Can KabatOne integrate with humanitarian management in Burkina Faso?",
      answer: es
        ? "Sí. KabatOne se integra con OCHA/UNHCR/WFP para la gestión de los 2+ millones de PDI (mayor crisis de desplazamiento de África Occidental), el Système d'Alerte Précoce (SAP/CONASUR), alertas FEWS NET de inseguridad alimentaria, la coordinación humanitaria del G5 Sahel y los corredores de ayuda de países vecinos."
        : "Yes. KabatOne integrates with OCHA/UNHCR/WFP for management of 2+ million IDPs (West Africa's largest displacement crisis), the Early Warning System (SAP/CONASUR), FEWS NET food insecurity alerts, G5 Sahel humanitarian coordination, and aid corridors from neighboring countries.",
    },
    {
      question: es
        ? "¿Cómo cumple KabatOne con la normativa de Burkina Faso?"
        : "How does KabatOne comply with Burkina Faso's regulations?",
      answer: es
        ? "KabatOne se alinea con la Loi 010-2004/AN sobre Protección de Datos Personales, la Autorité de Régulation des Communications Électroniques et des Postes (ARCEP), los estándares del CERT Burkina Faso y los marcos de adquisiciones del Banco Mundial/PNUD/G5 Sahel para proyectos de estabilización financiados por donantes."
        : "KabatOne aligns with Law 010-2004/AN on Personal Data Protection, Autorité de Régulation des Communications Électroniques et des Postes (ARCEP), CERT Burkina Faso standards, and World Bank/UNDP/G5 Sahel procurement frameworks for donor-funded stabilisation projects.",
    },
    {
      question: es
        ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Burkina Faso?"
        : "What sets KabatOne apart for Burkina Faso's border management?",
      answer: es
        ? "KabatOne puede unificar los 6 corredores fronterizos (Mali/Níger/Benín/Togo/Ghana/Costa de Marfil) con ANPR, listas Interpol/G5 Sahel/CEDEAO, alertas de JNIM/GSIM/ISGS y monitoreo del corredor Abidjan-Ouagadougou-Niamey con gestión unificada de incidentes."
        : "KabatOne can unify 6 border corridors (Mali/Niger/Benin/Togo/Ghana/Ivory Coast) with ANPR, Interpol/G5 Sahel/ECOWAS watchlists, JNIM/GSIM/ISGS alerts, and Abidjan-Ouagadougou-Niamey corridor monitoring with unified incident management.",
    },
  ]);

  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    {
      name: es ? "Recursos" : "Resources",
      url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/",
    },
    {
      name: es ? "Software de Seguridad Pública Burkina Faso" : "Public Safety Software Burkina Faso",
      url: es
        ? "https://kabatone.com/es/resources/public-safety-software-burkina-faso/"
        : "https://kabatone.com/resources/public-safety-software-burkina-faso/",
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
              {es ? "Guía de Mercado — Burkina Faso" : "Market Guide — Burkina Faso"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es
                ? "Software de Seguridad Pública para Burkina Faso"
                : "Public Safety Software for Burkina Faso"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {es
                ? "Plataforma modular de mando y control, coordinación antiterrorista y gestión humanitaria para las Forces Armées Nationales, los VDP y los programas de estabilización del Sahel en Burkina Faso."
                : "Modular command-and-control, counter-terrorism coordination, and humanitarian management for the Forces Armées Nationales, VDP, and Sahel stabilisation programs in Burkina Faso."}
            </p>
          </div>
        </section>

        {/* Security Context */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {es
              ? "Contexto de Seguridad — JNIM/GSIM/ISGS y la Crisis del Sahel"
              : "Security Context — JNIM/GSIM/ISGS & the Sahel Crisis"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Burkina Faso enfrenta desde 2015 una grave crisis de seguridad provocada por grupos terroristas vinculados a Al-Qaeda (Jama'a Nusrat ul-Islam wa al-Muslimin/JNIM, GSIM) y el Estado Islámico en el Gran Sahara (ISGS/EIGS). Más del 40% del territorio nacional está fuera del control efectivo del gobierno (zonas de inseguridad). El golpe de estado de 2022 instaló la Transition Junta del MPSR-II bajo el Capitán Traoré, que busca apoyos en Rusia/AES (Alliance des États du Sahel con Mali y Níger) tras suspender los acuerdos militares con Francia."
              : "Burkina Faso has faced since 2015 a severe security crisis caused by terrorist groups linked to Al-Qaeda (Jama'a Nusrat ul-Islam wa al-Muslimin/JNIM, GSIM) and the Islamic State in the Greater Sahara (ISGS/EIGS). Over 40% of national territory is outside effective government control (insecurity zones). The 2022 coup installed the MPSR-II Transition Junta under Captain Traore, seeking support from Russia/AES (Alliance of Sahel States with Mali and Niger) after suspending military agreements with France."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "Las Forces Armées Nationales (FAN/FAB), con más de 10,000 efectivos, y los Volontaires pour la Défense de la Patrie (VDP, ~50,000 voluntarios armados) son las principales fuerzas de seguridad. La Police Nationale/Gendarmerie Nationale opera en zonas más seguras. KabatOne proporciona plataformas de C2 modulares adaptadas a condiciones operativas de alta amenaza, conectividad intermitente y capacidades de despliegue rápido en zonas de reconquista."
              : "Forces Armées Nationales (FAN/FAB), with over 10,000 troops, and the Volunteers for the Defence of the Homeland (VDP, ~50,000 armed volunteers) are the main security forces. Police Nationale/Gendarmerie Nationale operates in more secure zones. KabatOne provides modular C2 platforms adapted to high-threat operational conditions, intermittent connectivity, and rapid deployment capacity in reconquest zones."}
          </p>

          {/* Mining Security */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Seguridad Minera — Oro y Recursos Estratégicos"
              : "Mining Security — Gold & Strategic Resources"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Burkina Faso es el 4to productor de oro de África. Los principales yacimientos en operación incluyen: Essakane (IAMGOLD, ~380,000 oz/año), Houndé (Endeavour Mining, ~270,000 oz/año), Mana (Endeavour Mining), Karma (Endeavour), Wahgnion (Endeavour), Boungou y Sanbrado. Las minas de oro son objetivos frecuentes de ataques terroristas y extorsión por grupos yihadistas, lo que ha llevado a la paralización o cierre temporal de varias operaciones."
              : "Burkina Faso is Africa's 4th largest gold producer. Key operating deposits include: Essakane (IAMGOLD, ~380,000 oz/year), Hounde (Endeavour Mining, ~270,000 oz/year), Mana (Endeavour), Karma (Endeavour), Wahgnion (Endeavour), Boungou, and Sanbrado. Gold mines are frequent targets of terrorist attacks and extortion by jihadist groups, leading to temporary shutdown of several operations."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne proporciona seguridad perimetral georreferenciada para los sitios mineros, alertas de intrusión con geofence, gestión de evacuaciones de emergencia del personal internacional, monitoreo del corredor de transporte mineral Ouagadougou–Abidjan y coordinación con las unidades de protección FAN/VDP asignadas a las minas."
              : "KabatOne provides georeferenced perimeter security for mining sites, geofence intrusion alerts, emergency evacuation management for international staff, monitoring of the Ouagadougou-Abidjan mineral transport corridor, and coordination with FAN/VDP protection units assigned to mines."}
          </p>

          {/* Humanitarian */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión Humanitaria — 2+ Millones de PDI y Corredor del Sahel"
              : "Humanitarian Management — 2+ Million IDPs & Sahel Corridor"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Burkina Faso registra más de 2 millones de desplazados internos (PDI) — la mayor crisis de desplazamiento de África Occidental. Las regiones más afectadas son el Sahel, el Centro-Nord, el Este y el Nord. El Conseil National de Secours d'Urgence et de Réhabilitation (CONASUR) coordina la respuesta nacional, con apoyo de OCHA/WFP/UNICEF/UNHCR. El Système d'Alerte Précoce (SAP) monitorea la inseguridad alimentaria en zonas donde más del 40% de la población enfrenta hambre aguda."
              : "Burkina Faso records over 2 million internally displaced persons (IDPs) — West Africa's largest displacement crisis. The most affected regions are Sahel, Centre-Nord, Est, and Nord. Conseil National de Secours d'Urgence et de Réhabilitation (CONASUR) coordinates national response, with OCHA/WFP/UNICEF/UNHCR support. Système d'Alerte Précoce (SAP) monitors food insecurity in zones where over 40% of the population faces acute hunger."}
          </p>

          {/* Border */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión Fronteriza — 6 Países Vecinos y AES/G5 Sahel"
              : "Border Management — 6 Neighboring Countries & AES/G5 Sahel"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Burkina Faso es un país sin litoral que comparte fronteras con 6 países: Mali al noroeste (fronteras porosas con zonas controladas por JNIM/GSIM), Níger al noreste (corredores de AES), Benín al sureste, Togo al sureste, Ghana al sur y Costa de Marfil al suroeste (corredor Abidjan-Ouagadougou). La Alliance des États du Sahel (AES — Burkina Faso, Mali, Níger) representa un nuevo marco de cooperación de seguridad regional post-CEDEAO."
              : "Burkina Faso is landlocked, sharing borders with 6 countries: Mali to the northwest (porous borders with JNIM/GSIM-controlled zones), Niger to the northeast (AES corridors), Benin to the southeast, Togo to the southeast, Ghana to the south, and Ivory Coast to the southwest (Abidjan-Ouagadougou corridor). The Alliance of Sahel States (AES — Burkina Faso, Mali, Niger) represents a new post-ECOWAS regional security cooperation framework."}
          </p>

          {/* Compliance */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Cumplimiento y Adquisiciones — ARCEP, Marchés Publics y G5 Sahel"
              : "Compliance & Procurement — ARCEP, Marchés Publics & G5 Sahel"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Burkina Faso aplica la Loi 010-2004/AN du 20 avril 2004 portant protection des données à caractère personnel, supervisada por la Commission Informatique et Libertés (CIL). La Autorité de Régulation des Communications Électroniques et des Postes (ARCEP) regula las telecomunicaciones. Las adquisiciones públicas se rigen por le Décret 2017-0049/PRES/PM/MINEFID portant Règlementation Générale des Marchés Publics, supervisado por la Direction Générale du Contrôle des Marchés Publics (DGCMP)."
              : "Burkina Faso enforces Law 010-2004/AN of 20 April 2004 on personal data protection, overseen by the Commission Informatique et Libertés (CIL). Autorité de Régulation des Communications Électroniques et des Postes (ARCEP) regulates telecommunications. Public procurement follows Décret 2017-0049/PRES/PM/MINEFID portant Règlementation Générale des Marchés Publics, overseen by Direction Générale du Contrôle des Marchés Publics (DGCMP)."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "Los proyectos de estabilización y seguridad en Burkina Faso son financiados principalmente por el Banco Mundial, el PNUD, USAID, la UE (Plan d'Action Régional Sahel), el Fondo Monetario Internacional (FMI) y los donantes del G5 Sahel/AES. KabatOne está estructurado para despliegue bajo estos marcos de adquisición de donantes, compatible con los estándares de coordinación humanitaria OCHA/CONASUR."
              : "Stabilisation and security projects in Burkina Faso are primarily funded by World Bank, UNDP, USAID, EU (Regional Action Plan Sahel), IMF, and G5 Sahel/AES donors. KabatOne is structured for deployment under these donor procurement frameworks, compatible with OCHA/CONASUR humanitarian coordination standards."}
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
                    ? "¿Cómo puede KabatOne apoyar la seguridad pública en Burkina Faso?"
                    : "How can KabatOne support public safety in Burkina Faso?",
                  a: es
                    ? "KabatOne proporciona CAD modular para 13 regiones/45 provincias, coordinación FAN/VDP antiterrorista, gestión 2+ millones de PDI y plataformas de emergencia para Ouagadougou y zonas de estabilización."
                    : "KabatOne provides modular CAD for 13 regions/45 provinces, FAN/VDP counter-terrorism coordination, 2+ million IDP management, and emergency platforms for Ouagadougou and stabilisation zones.",
                },
                {
                  q: es
                    ? "¿Cómo apoya KabatOne la seguridad minera en Burkina Faso?"
                    : "How does KabatOne support mining security in Burkina Faso?",
                  a: es
                    ? "La plataforma monitorea Essakane/Houndé/Mana/Wahgnion gold mines con seguridad perimetral georreferenciada, gestión de evacuaciones de personal internacional y coordinación FAN/VDP para las unidades de protección minera."
                    : "The platform monitors Essakane/Hounde/Mana/Wahgnion gold mines with georeferenced perimeter security, international staff evacuation management, and FAN/VDP coordination for mining protection units.",
                },
                {
                  q: es
                    ? "¿Puede KabatOne integrarse con la gestión humanitaria en Burkina Faso?"
                    : "Can KabatOne integrate with humanitarian management in Burkina Faso?",
                  a: es
                    ? "Sí. KabatOne integra OCHA/CONASUR/WFP para 2M+ PDI (mayor crisis desplazamiento África Occidental), SAP alertas alimentarias, G5 Sahel/AES coordinación y corredores humanitarios países vecinos."
                    : "Yes. KabatOne integrates OCHA/CONASUR/WFP for 2M+ IDPs (West Africa's largest displacement crisis), SAP food alerts, G5 Sahel/AES coordination, and humanitarian corridors from neighboring countries.",
                },
                {
                  q: es
                    ? "¿Cómo cumple KabatOne con la normativa de Burkina Faso?"
                    : "How does KabatOne comply with Burkina Faso's regulations?",
                  a: es
                    ? "KabatOne se alinea con Loi 010-2004/CIL, ARCEP/CERT-BF, Décret 2017-0049/DGCMP y marcos de adquisiciones Banco Mundial/PNUD/UE/G5 Sahel para proyectos de estabilización."
                    : "KabatOne aligns with Law 010-2004/CIL, ARCEP/CERT-BF, Décret 2017-0049/DGCMP, and World Bank/UNDP/EU/G5 Sahel procurement frameworks for stabilisation projects.",
                },
                {
                  q: es
                    ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Burkina Faso?"
                    : "What sets KabatOne apart for Burkina Faso's border management?",
                  a: es
                    ? "KabatOne puede unificar los 6 corredores (Mali/Níger/Benín/Togo/Ghana/Costa de Marfil) con ANPR, listas Interpol/G5 Sahel/AES/CEDEAO y alertas JNIM/GSIM/ISGS para FAN/Gendarmerie."
                    : "KabatOne can unify 6 corridors (Mali/Niger/Benin/Togo/Ghana/Ivory Coast) with ANPR, Interpol/G5 Sahel/AES/ECOWAS watchlists, and JNIM/GSIM/ISGS alerts for FAN/Gendarmerie.",
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
              ? "¿Listo para apoyar la seguridad pública y la estabilización en Burkina Faso?"
              : "Ready to support public safety and stabilisation in Burkina Faso?"
          }
          subtitle={
            es
              ? "Hable con nuestros especialistas sobre soluciones modulares para las FAN/VDP, la protección de minas de oro, la gestión de PDI y los programas G5 Sahel/AES."
              : "Speak with our specialists about modular solutions for FAN/VDP, gold mine protection, IDP management, and G5 Sahel/AES programs."
          }
        />
      </main>
      <Footer es={es} />
    </>
  );
}
