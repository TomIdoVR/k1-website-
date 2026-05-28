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
  return generatePageMetadata("publicSafetySoftwareChad", locale);
}

export default async function PublicSafetySoftwareChadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const article = articleSchema(
    es
      ? "Software de Seguridad Pública para Chad | ANT, MNJTF y Gestión del Lago Chad – KabatOne"
      : "Public Safety Software for Chad | ANT, MNJTF & Lake Chad Management – KabatOne",
    es
      ? "KabatOne ofrece plataforma modular de mando y control, coordinación de la MNJTF contra ISWAP/Boko Haram y conciencia situacional para las Armées Nationales du Tchad, gestión de desastres del Lago Chad y programas de estabilización en Chad."
      : "KabatOne delivers modular command-and-control, MNJTF coordination against ISWAP/Boko Haram, and situational awareness for the Armées Nationales du Tchad, Lake Chad disaster management, and stabilisation programs in Chad.",
    es
      ? "https://kabatone.com/es/resources/public-safety-software-chad/"
      : "https://kabatone.com/resources/public-safety-software-chad/",
    "2026-05-19"
  );

  const faqs = faqPageSchema([
    {
      question: es
        ? "¿Cómo puede KabatOne apoyar la seguridad pública en Chad?"
        : "How can KabatOne support public safety in Chad?",
      answer: es
        ? "KabatOne proporciona CAD/gestión de incidentes modular para las 23 regiones/61 departamentos, coordinación ANT/MNJTF para operaciones anti-ISWAP/Boko Haram en el Lago Chad, gestión de los 600,000+ PDI y plataformas de comunicación de emergencia para N'Djamena, Moundou, Sarh y Abéché."
        : "KabatOne provides modular CAD/incident management for all 23 regions/61 departments, ANT/MNJTF coordination for anti-ISWAP/Boko Haram operations in Lake Chad, management of 600,000+ IDPs, and emergency communication platforms for N'Djamena, Moundou, Sarh, and Abeche.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad de la infraestructura petrolera de Chad?"
        : "How does KabatOne support Chad's oil infrastructure security?",
      answer: es
        ? "La plataforma monitorea los campos de petróleo de Doba (CNPC/Exxon/TOTCO/SHT ~130,000 bpd), el oleoducto Chad-Camerún (COTCO/TOTCO, 1,070 km hasta el Terminal Kome-Kribi 1), la refinería de N'Djamena (SONAREP 1,000 bpd), y la red de oleoductos de la SHT con alertas de seguridad perimetral."
        : "The platform monitors Doba oil fields (CNPC/Exxon/TOTCO/SHT ~130,000 bpd), Chad-Cameroon pipeline (COTCO/TOTCO, 1,070 km to Kome-Kribi 1 Terminal), N'Djamena refinery (SONAREP 1,000 bpd), and SHT pipeline network with perimeter security alerts.",
    },
    {
      question: es
        ? "¿Puede KabatOne integrarse con la gestión de desastres en Chad?"
        : "Can KabatOne integrate with disaster management in Chad?",
      answer: es
        ? "Sí. KabatOne se integra con OCHA/UNHCR/WFP para la gestión de los 600,000+ PDI, el Comité de Urgencia del Lago Chad (CBLT/LCBC), las alertas de desecación del Lago Chad (reducción del 90% desde 1960), inundaciones estacionales del río Chari/Logone y corredores humanitarios con Sudán/CAR/Níger/Camerún."
        : "Yes. KabatOne integrates with OCHA/UNHCR/WFP for management of 600,000+ IDPs, Lake Chad Basin Commission (CBLT/LCBC) emergency committee, Lake Chad desiccation alerts (90% reduction since 1960), seasonal Chari/Logone river flooding, and humanitarian corridors with Sudan/CAR/Niger/Cameroon.",
    },
    {
      question: es
        ? "¿Cómo cumple KabatOne con la normativa de Chad?"
        : "How does KabatOne comply with Chad's regulations?",
      answer: es
        ? "KabatOne se alinea con la Loi 007/PR/2015 du 10 février 2015 portant protection des données à caractère personnel, la Autorité de Régulation des Communications Électroniques et des Postes (ARCEP-Tchad), los estándares del CERT Chad y los marcos de adquisiciones del Banco Mundial/PNUD/UA para proyectos de estabilización financiados por donantes."
        : "KabatOne aligns with Law 007/PR/2015 of 10 February 2015 on personal data protection, Autorité de Régulation des Communications Électroniques et des Postes (ARCEP-Chad), CERT Chad standards, and World Bank/UNDP/AU procurement frameworks for donor-funded stabilisation projects.",
    },
    {
      question: es
        ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Chad?"
        : "What sets KavbatOne apart for Chad's border management?",
      answer: es
        ? "KabatOne puede unificar los 6 corredores fronterizos (Libia/Sudán/CAR/Camerún/Nigeria/Níger) con ANPR, listas Interpol/MNJTF/UA, alertas ISWAP/Boko Haram del Lago Chad y monitoreo del oleoducto Chad-Camerún con gestión unificada ANT/Gendarmerie/MNJTF."
        : "KabatOne can unify 6 border corridors (Libya/Sudan/CAR/Cameroon/Nigeria/Niger) with ANPR, Interpol/MNJTF/AU watchlists, ISWAP/Boko Haram Lake Chad alerts, and Chad-Cameroon pipeline monitoring with unified ANT/Gendarmerie/MNJTF management.",
    },
  ]);

  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    {
      name: es ? "Recursos" : "Resources",
      url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/",
    },
    {
      name: es ? "Software de Seguridad Pública Chad" : "Public Safety Software Chad",
      url: es
        ? "https://kabatone.com/es/resources/public-safety-software-chad/"
        : "https://kabatone.com/resources/public-safety-software-chad/",
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
              {es ? "Guía de Mercado — Chad" : "Market Guide — Chad"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es
                ? "Software de Seguridad Pública para Chad"
                : "Public Safety Software for Chad"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {es
                ? "Plataforma modular de mando y control, coordinación MNJTF y gestión humanitaria para las ANT, la protección de la infraestructura petrolera Doba/oleoducto Chad-Camerún y el corredor del Lago Chad."
                : "Modular command-and-control, MNJTF coordination, and humanitarian management for ANT, Doba oil/Chad-Cameroon pipeline infrastructure protection, and the Lake Chad corridor."}
            </p>
          </div>
        </section>

        {/* Security Forces */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {es
              ? "ANT y MNJTF — Seguridad en 23 Regiones y Operaciones del Lago Chad"
              : "ANT & MNJTF — Security Across 23 Regions & Lake Chad Operations"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Las Armées Nationales du Tchad (ANT), con más de 30,000 efectivos, son el pilar de la seguridad regional del Sahel y el Lago Chad. Chad contribuye de manera desproporcionada a la Fuerza Multinacional Conjunta (MNJTF, compuesta por Nigeria/Chad/Níger/Camerún/Benín) para las operaciones anti-ISWAP/Boko Haram en la cuenca del Lago Chad, y a misiones de paz de la ONU/UA en todo el continente. El presidente Idriss Déby fue asesinado en 2021; su hijo Mahamat Idriss Déby lidera el Conseil Militaire de Transition (CMT)."
              : "Armées Nationales du Tchad (ANT), with over 30,000 troops, are the pillar of Sahel and Lake Chad regional security. Chad contributes disproportionately to the Multinational Joint Task Force (MNJTF, comprising Nigeria/Chad/Niger/Cameroon/Benin) for anti-ISWAP/Boko Haram operations in the Lake Chad Basin, and to UN/AU peacekeeping missions across the continent. President Idriss Deby was killed in 2021; his son Mahamat Idriss Deby leads the Conseil Militaire de Transition (CMT)."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne proporciona plataformas de C2 modulares para las ANT con mapas operativos georreferenciados del teatro del Lago Chad, coordinación segura con las unidades MNJTF de Nigeria/Níger/Camerún/Benín, comunicaciones cifradas y gestión de logística para unidades desplegadas en zonas remotas."
              : "KabatOne provides modular C2 platforms for ANT with georeferenced operational maps of the Lake Chad theater, secure coordination with MNJTF units from Nigeria/Niger/Cameroon/Benin, encrypted communications, and logistics management for units deployed in remote zones."}
          </p>

          {/* Oil Infrastructure */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Infraestructura Petrolera — Doba, Oleoducto Chad-Camerún y SHT"
              : "Oil Infrastructure — Doba, Chad-Cameroon Pipeline & SHT"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Los yacimientos de petróleo de Doba (Grupo Doba — bloques Komé, Bolobo, Miandoum, con producción de ~130,000 bpd en el pico) son operados por el consorcio CNPC/Exxon/SHT. Todo el crudo es exportado a través del oleoducto Chad-Camerún (COTCO/TOTCO, 1,070 km desde Doba hasta el Terminal Kome-Kribi 1 en Camerún). La Société des Hydrocarbures du Tchad (SHT) gestiona los intereses del estado. La refinería de N'Djamena (SONAREP, ampliada) procesa para el mercado interno."
              : "Doba oil fields (Doba Group — Kome, Bolobo, Miandoum blocks, production ~130,000 bpd at peak) are operated by the CNPC/Exxon/SHT consortium. All crude is exported via the Chad-Cameroon pipeline (COTCO/TOTCO, 1,070 km from Doba to Kome-Kribi 1 Terminal in Cameroon). Société des Hydrocarbures du Tchad (SHT) manages state interests. N'Djamena refinery (SONAREP, expanded) processes for the domestic market."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne monitorea los campos de Doba con seguridad perimetral georreferenciada, el oleoducto Chad-Camerún con alertas de intrusión/derrames, gestión de incidentes del personal internacional CNPC/Exxon, y las fuerzas de protección de infraestructura de la SHT/ANT con coordenadas GPS en tiempo real."
              : "KabatOne monitors Doba fields with georeferenced perimeter security, the Chad-Cameroon pipeline with intrusion/spill alerts, CNPC/Exxon international staff incident management, and SHT/ANT infrastructure protection forces with real-time GPS coordinates."}
          </p>

          {/* Lake Chad */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Crisis del Lago Chad — Desecación, CBLT y Refugiados"
              : "Lake Chad Crisis — Desiccation, CBLT & Refugees"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "El Lago Chad ha perdido más del 90% de su superficie desde 1960 (de ~25,000 km² a ~2,000-3,000 km²), lo que ha destruido los medios de vida de más de 30 millones de personas en Nigeria, Níger, Chad y Camerún y es considerado uno de los peores desastres ambientales del mundo. La Comisión de la Cuenca del Lago Chad (CBLT/LCBC) coordina la respuesta multilateral. Los conflictos ISWAP/Boko Haram han exacerbado la crisis humanitaria, con 2.4+ millones de personas desplazadas en torno al lago."
              : "Lake Chad has lost over 90% of its surface area since 1960 (from ~25,000 km² to ~2,000-3,000 km²), destroying the livelihoods of over 30 million people in Nigeria, Niger, Chad, and Cameroon, and is considered one of the world's worst environmental disasters. Lake Chad Basin Commission (CBLT/LCBC) coordinates the multilateral response. ISWAP/Boko Haram conflicts have exacerbated the humanitarian crisis, with 2.4+ million people displaced around the lake."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne integra los feeds de CBLT/LCBC para el monitoreo del nivel del lago, los feeds humanitarios de OCHA/UNHCR/WFP para la gestión de los 600,000+ PDI en Chad, las alertas de inundaciones estacionales del río Chari/Logone, y la coordinación de la MNJTF con los 4 países ribereños para la gestión de emergencias del Lago Chad."
              : "KabatOne integrates CBLT/LCBC feeds for lake-level monitoring, OCHA/UNHCR/WFP humanitarian feeds for management of 600,000+ IDPs in Chad, seasonal Chari/Logone river flood alerts, and MNJTF coordination with all 4 riparian countries for Lake Chad emergency management."}
          </p>

          {/* Border */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión Fronteriza — 6 Países Vecinos y Corredor N'Djamena"
              : "Border Management — 6 Neighboring Countries & N'Djamena Corridor"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Chad comparte fronteras con 6 países: Libia al norte (corredor del Tibesti — tráfico de armas y migrantes), Sudán al este (Adré/Tissi — 600,000+ refugiados sudaneses en Chad), República Centroafricana al sur (Sido/Ndjaména-Bangui corredor), Camerún al suroeste (N'Djamena-Ngaoundéré corredor), Nigeria al suroeste (Lago Chad/N'Guigmi), y Níger al oeste (Ngueli/Diffa corredor MNJTF)."
              : "Chad shares borders with 6 countries: Libya to the north (Tibesti corridor — arms and migrant trafficking), Sudan to the east (Adre/Tissi — 600,000+ Sudanese refugees in Chad), CAR to the south (Sido/Ndjamena-Bangui corridor), Cameroon to the southwest (Ndjamena-Ngaoundere corridor), Nigeria to the southwest (Lake Chad/N'Guigmi), and Niger to the west (Ngueli/Diffa MNJTF corridor)."}
          </p>

          {/* Compliance */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Cumplimiento y Adquisiciones — ARCEP, Marchés Publics y UA"
              : "Compliance & Procurement — ARCEP, Marchés Publics & AU"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Chad aplica la Loi 007/PR/2015 du 10 février 2015 portant protection des données à caractère personnel, supervisada por la Commission Nationale des Données Personnelles (CNDP-Chad). La Autorité de Régulation des Communications Électroniques et des Postes (ARCEP-Tchad) regula las telecomunicaciones. Las adquisiciones públicas se rigen por l'Ordonnance 11/PR/2011 portant règlementation générale des marchés publics, supervisada por la DGMP-Tchad."
              : "Chad enforces Law 007/PR/2015 of 10 February 2015 on personal data protection, overseen by Commission Nationale des Données Personnelles (CNDP-Chad). Autorité de Régulation des Communications Électroniques et des Postes (ARCEP-Chad) regulates telecommunications. Public procurement follows Ordonnance 11/PR/2011 on public procurement regulation, overseen by DGMP-Chad."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "Chad es el principal aliado occidental en la seguridad del Sahel, manteniendo bases militares francesas (Éléments Français au Tchad/EFT, ~1,000 tropas), y es el principal receptor de financiación del Banco Mundial/AfDB, USAID y la UE para la estabilización. KabatOne está estructurado para estos marcos de adquisición de donantes."
              : "Chad is the West's primary Sahel security ally, maintaining French military bases (Éléments Français au Tchad/EFT, ~1,000 troops), and is the primary recipient of World Bank/AfDB, USAID, and EU stabilisation funding. KabatOne is structured for these donor procurement frameworks."}
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
                    ? "¿Cómo puede KabatOne apoyar la seguridad pública en Chad?"
                    : "How can KabatOne support public safety in Chad?",
                  a: es
                    ? "KabatOne proporciona CAD modular para 23 regiones/61 departamentos, coordinación ANT/MNJTF anti-ISWAP/Boko Haram, gestión 600K+ PDI y plataformas de emergencia para N'Djamena, Moundou, Sarh y Abéché."
                    : "KabatOne provides modular CAD for 23 regions/61 departments, ANT/MNJTF anti-ISWAP/Boko Haram coordination, 600K+ IDP management, and emergency platforms for N'Djamena, Moundou, Sarh, and Abeche.",
                },
                {
                  q: es
                    ? "¿Cómo apoya KabatOne la seguridad de la infraestructura petrolera de Chad?"
                    : "How does KabatOne support Chad's oil infrastructure security?",
                  a: es
                    ? "La plataforma monitorea campos Doba CNPC/Exxon ~130K bpd, oleoducto COTCO/TOTCO 1,070 km a Camerún, refinería SONAREP N'Djamena y red SHT con seguridad perimetral y alertas de intrusión/derrames."
                    : "The platform monitors Doba CNPC/Exxon ~130K bpd fields, COTCO/TOTCO pipeline 1,070 km to Cameroon, SONAREP refinery N'Djamena, and SHT network with perimeter security and intrusion/spill alerts.",
                },
                {
                  q: es
                    ? "¿Puede KabatOne integrarse con la gestión de desastres del Lago Chad?"
                    : "Can KabatOne integrate with Lake Chad disaster management?",
                  a: es
                    ? "Sí. KabatOne integra CBLT/LCBC monitoreo del lago, OCHA/UNHCR/WFP para 600K+ PDI y 600K+ refugiados sudaneses, alertas inundaciones Chari/Logone y coordinación MNJTF 4 países ribereños."
                    : "Yes. KabatOne integrates CBLT/LCBC lake monitoring, OCHA/UNHCR/WFP for 600K+ IDPs and 600K+ Sudanese refugees, Chari/Logone flood alerts, and MNJTF coordination with 4 riparian countries.",
                },
                {
                  q: es
                    ? "¿Cómo cumple KabatOne con la normativa de Chad?"
                    : "How does KabatOne comply with Chad's regulations?",
                  a: es
                    ? "KabatOne se alinea con Loi 007/PR/2015/CNDP, ARCEP-Tchad/CERT-Chad, Ordonnance 11/PR/2011/DGMP-Tchad y marcos de adquisiciones Banco Mundial/AfDB/USAID/UE para proyectos de estabilización."
                    : "KabatOne aligns with Law 007/PR/2015/CNDP, ARCEP-Chad/CERT-Chad, Ordonnance 11/PR/2011/DGMP-Chad, and World Bank/AfDB/USAID/EU procurement frameworks for stabilisation projects.",
                },
                {
                  q: es
                    ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Chad?"
                    : "What sets KabatOne apart for Chad's border management?",
                  a: es
                    ? "KabatOne puede unificar los 6 corredores (Libia/Sudán/CAR/Camerún/Nigeria/Níger) con ANPR, listas Interpol/MNJTF/UA, alertas ISWAP/Boko Haram Lago Chad y monitoreo oleoducto Chad-Camerún con ANT/Gendarmerie/MNJTF."
                    : "KabatOne can unify 6 corridors (Libya/Sudan/CAR/Cameroon/Nigeria/Niger) with ANPR, Interpol/MNJTF/AU watchlists, ISWAP/Boko Haram Lake Chad alerts, and Chad-Cameroon pipeline monitoring with ANT/Gendarmerie/MNJTF.",
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
              ? "¿Listo para apoyar la seguridad pública y la estabilización en Chad?"
              : "Ready to support public safety and stabilisation in Chad?"
          }
          subtitle={
            es
              ? "Hable con nuestros especialistas sobre soluciones para las ANT, la MNJTF, la protección del oleoducto Chad-Camerún y la gestión humanitaria del Lago Chad."
              : "Speak with our specialists about solutions for ANT, MNJTF, Chad-Cameroon pipeline protection, and Lake Chad humanitarian management."
          }
        />
      </main>
      <Footer es={es} />
    </>
  );
}
