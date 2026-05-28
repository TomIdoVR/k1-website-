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
  return generatePageMetadata("publicSafetySoftwareSouthSudan", locale);
}

export default async function PublicSafetySoftwareSouthSudanPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const article = articleSchema(
    es
      ? "Software de Seguridad Pública para Sudán del Sur | SSPDF, NSS y Gestión de Crisis – KabatOne"
      : "Public Safety Software for South Sudan | SSPDF, NSS & Crisis Management – KabatOne",
    es
      ? "KabatOne ofrece plataforma modular de mando y control, coordinación humanitaria y conciencia situacional para las fuerzas de seguridad de Sudán del Sur, gestión de desastres y programas de reconstrucción de paz."
      : "KabatOne delivers modular command-and-control, humanitarian coordination, and situational awareness for South Sudan security forces, disaster management, and peacebuilding reconstruction programs.",
    es
      ? "https://kabatone.com/es/resources/public-safety-software-south-sudan/"
      : "https://kabatone.com/resources/public-safety-software-south-sudan/",
    "2026-05-19"
  );

  const faqs = faqPageSchema([
    {
      question: es
        ? "¿Cómo puede KabatOne apoyar la seguridad pública en Sudán del Sur?"
        : "How can KabatOne support public safety in South Sudan?",
      answer: es
        ? "KabatOne proporciona CAD/gestión de incidentes modular para las 10 estados/3 áreas administrativas, integración con los sistemas humanitarios OCHA/UNMISS para los 2+ millones de PDI, coordinación de la Policía Nacional del Sur de Sudán (SSPS) y gestión de emergencias en Juba."
        : "KabatOne provides modular CAD/incident management for all 10 states/3 administrative areas, integration with OCHA/UNMISS humanitarian systems for 2+ million IDPs, South Sudan National Police Service (SSPS) coordination, and emergency management in Juba.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad de la infraestructura petrolera de Sudán del Sur?"
        : "How does KabatOne support South Sudan's oil infrastructure security?",
      answer: es
        ? "La plataforma monitorea los campos de petróleo de Greater Unity (Block 1/2/4/GNPOC), Adar Yale (Block 3/7/WNPOC), Thar Jath y el oleoducto de exportación de 1,610 km a Port Sudan/Bashayer, con gestión unificada de activos y alertas de seguridad de Petrodar/NILEPET."
        : "The platform monitors Greater Unity oil fields (Block 1/2/4/GNPOC), Adar Yale (Block 3/7/WNPOC), Thar Jath, and the 1,610 km export pipeline to Port Sudan/Bashayer Terminal, with unified asset management and Petrodar/NILEPET security alerts.",
    },
    {
      question: es
        ? "¿Puede KabatOne integrarse con la gestión humanitaria en Sudán del Sur?"
        : "Can KabatOne integrate with humanitarian management in South Sudan?",
      answer: es
        ? "Sí. KabatOne se integra con OCHA/UNMISS/UNHCR para la gestión de los 2+ millones de PDI y los refugiados ugandeses/sudaneses, monitoreo de inundaciones del Nilo/Sudd (mayor zona de pantanos de África), alertas de sequía y coordinación de corredores humanitarios con Uganda/Kenya/Etiopía/Sudán."
        : "Yes. KabatOne integrates with OCHA/UNMISS/UNHCR for management of 2+ million IDPs and Ugandan/Sudanese refugees, Nile/Sudd flooding monitoring (Africa's largest wetland), drought alerts, and humanitarian corridor coordination with Uganda/Kenya/Ethiopia/Sudan.",
    },
    {
      question: es
        ? "¿Cómo cumple KabatOne con la normativa de Sudán del Sur?"
        : "How does KabatOne comply with South Sudan's regulations?",
      answer: es
        ? "KabatOne se alinea con las leyes de telecomunicaciones de la Autoridad Nacional de Comunicaciones del Sur de Sudán (SSCA), los estándares de ciberseguridad del Ministerio de Comunicación, y los marcos de adquisiciones del Banco Mundial/USAID/PNUD para proyectos de construcción de paz financiados por donantes."
        : "KabatOne aligns with South Sudan Communications Authority (SSCA) telecommunications laws, Ministry of Communication cybersecurity standards, and World Bank/USAID/UNDP procurement frameworks for donor-funded peacebuilding projects.",
    },
    {
      question: es
        ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Sudán del Sur?"
        : "What sets KabatOne apart for South Sudan's border management?",
      answer: es
        ? "KabatOne puede unificar los 6 corredores fronterizos (Sudan/Uganda/Kenya/Etiopía/DRC/CAR) con gestión de flujos de refugiados UNHCR, monitoreo del corredor de petróleo Juba–Port Sudan, alertas de la UA/IGAD y coordinación con la misión de paz UNMISS."
        : "KabatOne can unify 6 border corridors (Sudan/Uganda/Kenya/Ethiopia/DRC/CAR) with UNHCR refugee flow management, Juba-Port Sudan oil corridor monitoring, AU/IGAD alerts, and coordination with the UNMISS peacekeeping mission.",
    },
  ]);

  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es/" : "https://kabatone.com/" },
    {
      name: es ? "Recursos" : "Resources",
      url: es ? "https://kabatone.com/es/resources/" : "https://kabatone.com/resources/",
    },
    {
      name: es ? "Software de Seguridad Pública Sudán del Sur" : "Public Safety Software South Sudan",
      url: es
        ? "https://kabatone.com/es/resources/public-safety-software-south-sudan/"
        : "https://kabatone.com/resources/public-safety-software-south-sudan/",
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
              {es ? "Guía de Mercado — Sudán del Sur" : "Market Guide — South Sudan"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es
                ? "Software de Seguridad Pública para Sudán del Sur"
                : "Public Safety Software for South Sudan"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {es
                ? "Plataforma modular de mando y control, coordinación humanitaria y conciencia situacional para la SSPS, SSPDF, UNMISS y programas de construcción de paz en el país más joven del mundo."
                : "Modular command-and-control, humanitarian coordination, and situational awareness for SSPS, SSPDF, UNMISS, and peacebuilding programs in the world's youngest country."}
            </p>
          </div>
        </section>

        {/* Security Forces */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {es
              ? "SSPS y SSPDF — Construcción de Capacidades de Seguridad Pública"
              : "SSPS & SSPDF — Public Safety Capacity Building"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "La South Sudan National Police Service (SSPS) opera en los 10 estados y 3 áreas administrativas de Sudán del Sur con más de 40,000 efectivos (muchos sin formación estándar). Las South Sudan People's Defence Forces (SSPDF), surgidas del SPLA tras la independencia de 2011, son responsables de la defensa nacional y apoyan la gestión de crisis. El proceso de paz de Juba (RTGONU, 2018) y el Acuerdo Revitalizado de Paz de 2018 establecen el marco de reforma del sector de seguridad."
              : "South Sudan National Police Service (SSPS) operates across 10 states and 3 administrative areas with over 40,000 officers (many lacking standard training). South Sudan People's Defence Forces (SSPDF), emerging from the SPLA after 2011 independence, are responsible for national defence and crisis management support. The Juba Peace Agreement (RTGONU, 2018) and Revitalised 2018 Peace Agreement establish the security sector reform framework."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne proporciona una plataforma CAD/gestión de incidentes modular diseñada para condiciones de construcción de estado: despliegue rápido, conectividad de baja latencia para zonas con infraestructura limitada, formación integrada y sistemas de despacho simplificados para la SSPS de Juba, Malakal, Wau y Bentiu."
              : "KabatOne provides a modular CAD/incident management platform designed for state-building conditions: rapid deployment, low-latency connectivity for limited-infrastructure zones, integrated training, and simplified dispatch systems for SSPS in Juba, Malakal, Wau, and Bentiu."}
          </p>

          {/* UNMISS */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "UNMISS — Misión de Paz ONU y Coordinación de Protección Civil"
              : "UNMISS — UN Peacekeeping Mission & Civilian Protection Coordination"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "La Misión de las Naciones Unidas en Sudán del Sur (UNMISS) despliega más de 17,000 efectivos (militares, policiales y civiles) en los Protection of Civilian (PoC) sites de Juba, Malakal, Bentiu y otros puntos del país. UNMISS coordina con la SSPS, las SSPDF, OCHA y el sistema de Clusters de la ONU para la gestión de emergencias y la protección de civiles."
              : "United Nations Mission in South Sudan (UNMISS) deploys over 17,000 personnel (military, police, and civilian) at Protection of Civilian (PoC) sites in Juba, Malakal, Bentiu, and other locations. UNMISS coordinates with SSPS, SSPDF, OCHA, and the UN Cluster system for emergency management and civilian protection."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne apoya la coordinación UNMISS con tableros de situación compartidos entre SSPS/SSPDF/UNMISS, gestión de incidentes en los PoC sites, protocolos de evacuación de emergencia y el monitoreo del Acuerdo de Cese al Fuego con feeds en tiempo real de los incidentes de seguridad."
              : "KabatOne supports UNMISS coordination with shared situational dashboards between SSPS/SSPDF/UNMISS, incident management at PoC sites, emergency evacuation protocols, and Ceasefire Agreement monitoring with real-time security incident feeds."}
          </p>

          {/* Oil Infrastructure */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Infraestructura Petrolera — Greater Unity, Adar Yale y Oleoducto a Port Sudan"
              : "Oil Infrastructure — Greater Unity, Adar Yale & Pipeline to Port Sudan"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Sudán del Sur depende del petróleo para más del 90% de sus ingresos gubernamentales. Los principales campos en producción incluyen: Greater Unity (Bloques 1/2/4, GNPOC, producción ~120,000-150,000 bpd), Adar Yale (Bloques 3/7, WNPOC/CNPC), y Thar Jath (Bloque 5A). Todo el crudo se exporta a través del oleoducto de 1,610 km hasta el Terminal de Bashayer/Port Sudan (Sudan), ya que Sudán del Sur no tiene acceso al mar."
              : "South Sudan depends on oil for over 90% of government revenues. Main producing fields include: Greater Unity (Blocks 1/2/4, GNPOC, production ~120,000-150,000 bpd), Adar Yale (Blocks 3/7, WNPOC/CNPC), and Thar Jath (Block 5A). All crude is exported via the 1,610 km pipeline to Bashayer Terminal/Port Sudan (Sudan), as South Sudan is landlocked."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne proporciona seguridad perimetral georreferenciada para los campos petroleros del Alto Nilo/Unity State, monitoreo del oleoducto GNPOC con alertas de intrusión, gestión de incidentes del personal internacional de NILEPET/CNPC/Petrodar, y coordinación con el ejército sudanés para la protección del segmento norte del oleoducto."
              : "KabatOne provides georeferenced perimeter security for Upper Nile/Unity State oil fields, GNPOC pipeline monitoring with intrusion alerts, incident management for NILEPET/CNPC/Petrodar international staff, and coordination with the Sudanese army for protection of the northern pipeline segment."}
          </p>

          {/* Humanitarian */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión Humanitaria — PDI, Sudd y Inundaciones del Nilo"
              : "Humanitarian Management — IDPs, Sudd & Nile Flooding"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Sudán del Sur alberga más de 2 millones de desplazados internos (PDI) y ha generado más de 2.2 millones de refugiados en Uganda (la mayor población de refugiados de África), Sudán, Etiopía, Kenya y DRC. El Gran Sudd — el mayor humedal de África (~57,000 km²) en el Estado de Junqali — experimenta inundaciones catastróficas anuales que desplazan a cientos de miles de personas, especialmente en Junqali, Estado de la Unidad y Alto Nilo."
              : "South Sudan hosts over 2 million internally displaced persons (IDPs) and has generated over 2.2 million refugees in Uganda (Africa's largest refugee population), Sudan, Ethiopia, Kenya, and DRC. The Sudd — Africa's largest wetland (~57,000 km²) in Jonglei State — experiences annual catastrophic flooding displacing hundreds of thousands, especially in Jonglei, Unity State, and Upper Nile."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne integra los feeds de OCHA/UNHCR/WFP para la gestión de los PDI, el monitoreo hidrológico del Nilo Blanco/Sudd con alertas de inundación, la coordinación de corredores humanitarios con Uganda (Nimule/Elegu), Kenya (Nadapal/Lokichoggio) y los sistemas de alerta temprana de IGAD/FEWS NET para la seguridad alimentaria."
              : "KabatOne integrates OCHA/UNHCR/WFP feeds for IDP management, White Nile/Sudd hydrological monitoring with flood alerts, humanitarian corridor coordination with Uganda (Nimule/Elegu), Kenya (Nadapal/Lokichoggio), and IGAD/FEWS NET early warning systems for food security."}
          </p>

          {/* Border */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión Fronteriza — 6 Países Vecinos y Corredor Nilo"
              : "Border Management — 6 Neighboring Countries & Nile Corridor"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Sudán del Sur comparte fronteras con 6 países: Sudan al norte (Renk/Juba, corredor de exportación de petróleo; zona disputada de Abyei), Uganda al sur (Nimule/Elegu — el paso fronterizo más transitado), Kenya al sureste (Nadapal/Lokichoggio), Etiopía al este (Pagak/Gambela corredor), DRC al suroeste (Kaya/Aba corredor) y República Centroafricana al oeste."
              : "South Sudan shares borders with 6 countries: Sudan to the north (Renk/Juba, oil export corridor; disputed Abyei zone), Uganda to the south (Nimule/Elegu — the busiest crossing), Kenya to the southeast (Nadapal/Lokichoggio), Ethiopia to the east (Pagak/Gambela corridor), DRC to the southwest (Kaya/Aba corridor), and Central African Republic to the west."}
          </p>

          {/* Compliance */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Cumplimiento y Adquisiciones — SSCA, Banco Mundial y Marcos de Paz"
              : "Compliance & Procurement — SSCA, World Bank & Peace Frameworks"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Las adquisiciones de seguridad pública en Sudán del Sur se rigen principalmente por los marcos de adquisiciones del Banco Mundial, USAID, PNUD y la UA/IGAD para proyectos financiados por donantes, dado el limitado desarrollo del sistema nacional de adquisiciones. La South Sudan Communications Authority (SSCA) regula las telecomunicaciones. El Marco de Evaluación del Sector de Seguridad de la UA y el RTGONU Reconstituted Joint Monitoring and Evaluation Commission (RJMEC) supervisan el progreso de la reforma del sector de seguridad."
              : "Public safety procurement in South Sudan is primarily governed by World Bank, USAID, UNDP, and AU/IGAD procurement frameworks for donor-funded projects, given the limited development of the national procurement system. South Sudan Communications Authority (SSCA) regulates telecommunications. The AU Security Sector Assessment Framework and RTGONU Reconstituted Joint Monitoring and Evaluation Commission (RJMEC) oversee security sector reform progress."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne está estructurado para despliegue bajo marcos de adquisiciones de emergencia del Banco Mundial/USAID/PNUD, compatible con los sistemas de coordinación OCHA/UNMISS, y diseñado para transición gradual desde operaciones de emergencia humanitaria hacia plataformas de seguridad pública civiles sostenibles a medida que avanza el proceso de paz de Juba."
              : "KabatOne is structured for deployment under World Bank/USAID/UNDP emergency procurement frameworks, compatible with OCHA/UNMISS coordination systems, and designed for gradual transition from humanitarian emergency operations to sustainable civilian public safety platforms as the Juba peace process advances."}
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
                    ? "¿Cómo puede KabatOne apoyar la seguridad pública en Sudán del Sur?"
                    : "How can KabatOne support public safety in South Sudan?",
                  a: es
                    ? "KabatOne proporciona CAD modular para 10 estados/3 áreas administrativas, integración OCHA/UNMISS para 2+ millones de PDI, coordinación SSPS y gestión de emergencias en Juba y principales ciudades."
                    : "KabatOne provides modular CAD for 10 states/3 administrative areas, OCHA/UNMISS integration for 2+ million IDPs, SSPS coordination, and emergency management in Juba and major cities.",
                },
                {
                  q: es
                    ? "¿Cómo apoya KabatOne la seguridad de la infraestructura petrolera?"
                    : "How does KabatOne support oil infrastructure security?",
                  a: es
                    ? "La plataforma monitorea los campos Greater Unity/Adar Yale/Thar Jath, el oleoducto GNPOC 1,610 km a Port Sudan y personal NILEPET/CNPC/Petrodar con seguridad perimetral georreferenciada."
                    : "The platform monitors Greater Unity/Adar Yale/Thar Jath fields, GNPOC pipeline 1,610 km to Port Sudan, and NILEPET/CNPC/Petrodar staff with georeferenced perimeter security.",
                },
                {
                  q: es
                    ? "¿Puede KabatOne integrarse con la gestión humanitaria en Sudán del Sur?"
                    : "Can KabatOne integrate with humanitarian management in South Sudan?",
                  a: es
                    ? "Sí. KabatOne integra OCHA/UNHCR/WFP para 2M+ PDI, monitoreo hidrológico Nilo Blanco/Sudd, corredores Uganda (Nimule)/Kenya (Nadapal) y alertas IGAD/FEWS NET de seguridad alimentaria."
                    : "Yes. KabatOne integrates OCHA/UNHCR/WFP for 2M+ IDPs, White Nile/Sudd hydrological monitoring, Uganda (Nimule)/Kenya (Nadapal) corridors, and IGAD/FEWS NET food security alerts.",
                },
                {
                  q: es
                    ? "¿Cómo cumple KabatOne con la normativa de Sudán del Sur?"
                    : "How does KabatOne comply with South Sudan's regulations?",
                  a: es
                    ? "KabatOne se alinea con SSCA telecom, estándares del Ministerio de Comunicación y marcos de adquisiciones Banco Mundial/USAID/PNUD para proyectos de construcción de paz financiados por donantes."
                    : "KabatOne aligns with SSCA telecom, Ministry of Communication standards, and World Bank/USAID/UNDP procurement frameworks for donor-funded peacebuilding projects.",
                },
                {
                  q: es
                    ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Sudán del Sur?"
                    : "What sets KabatOne apart for South Sudan's border management?",
                  a: es
                    ? "KabatOne puede unificar los 6 corredores fronterizos (Sudan/Uganda/Kenya/Etiopía/DRC/CAR) con gestión de refugiados UNHCR, monitoreo del oleoducto Juba-Port Sudan y coordinación UNMISS/IGAD/UA."
                    : "KabatOne can unify 6 border corridors (Sudan/Uganda/Kenya/Ethiopia/DRC/CAR) with UNHCR refugee management, Juba-Port Sudan pipeline monitoring, and UNMISS/IGAD/AU coordination.",
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
              ? "¿Listo para apoyar la seguridad pública y la construcción de paz en Sudán del Sur?"
              : "Ready to support public safety and peacebuilding in South Sudan?"
          }
          subtitle={
            es
              ? "Hable con nuestros especialistas sobre soluciones modulares para la SSPS, UNMISS, la protección de la infraestructura petrolera y los programas de estabilización."
              : "Speak with our specialists about modular solutions for SSPS, UNMISS, oil infrastructure protection, and stabilisation programs."
          }
        />
      </main>
      <Footer es={es} />
    </>
  );
}
