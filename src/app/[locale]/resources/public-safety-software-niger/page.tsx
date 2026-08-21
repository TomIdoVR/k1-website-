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
  return generatePageMetadata("publicSafetySoftwareNiger", locale);
}

export default async function PublicSafetySoftwareNigerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = locale === "es";

  const article = articleSchema(
    es
      ? "Software de Seguridad Pública para Níger | FAN, AES y Gestión de Crisis Sahel – KabatOne"
      : "Public Safety Software for Niger | FAN, AES & Sahel Crisis Management – KabatOne",
    es
      ? "KabatOne ofrece plataforma modular de mando y control, coordinación antiterrorista y conciencia situacional para las Forces Armées du Niger, gestión de emergencias y programas de estabilización en Níger — el corazón de la AES."
      : "KabatOne delivers modular command-and-control, counter-terrorism coordination, and situational awareness for the Forces Armées du Niger, emergency management, and stabilisation programs in Niger — the heart of the AES.",
    es
      ? "https://kabatone.com/es/resources/public-safety-software-niger"
      : "https://kabatone.com/resources/public-safety-software-niger",
    "2026-05-19"
  );

  const faqs = faqPageSchema([
    {
      question: es
        ? "¿Cómo puede KabatOne apoyar la seguridad pública en Níger?"
        : "How can KabatOne support public safety in Niger?",
      answer: es
        ? "KabatOne proporciona CAD/gestión de incidentes modular para las 8 regiones/63 departamentos, coordinación antiterrorista FAN con inteligencia táctica de JNIM/GSIM/ISWAP, gestión de los 300,000+ PDI y plataformas de comunicación de emergencia para Niamey, Zinder, Maradi, Tahoua y Agadez."
        : "KabatOne provides modular CAD/incident management for all 8 regions/63 departments, FAN counter-terrorism coordination with JNIM/GSIM/ISWAP tactical intelligence, management of 300,000+ IDPs, and emergency communication platforms for Niamey, Zinder, Maradi, Tahoua, and Agadez.",
    },
    {
      question: es
        ? "¿Cómo apoya KabatOne la seguridad de infraestructura crítica en Níger?"
        : "How does KabatOne support critical infrastructure security in Niger?",
      answer: es
        ? "La plataforma monitorea las minas de uranio de Arlit/Akouta (ORANO/SOMAÏR/COMINAK — Níger es el 7mo productor mundial de uranio), los yacimientos de petróleo de Agadem (CNPC/SH/ORLEN ~20,000 bpd), el oleoducto de exportación Agadem-Cotonou (WAPCO, 2,000+ km), la presa de Kandadji (130 MW en construcción) y NIGELEC red eléctrica."
        : "The platform monitors Arlit/Akouta uranium mines (ORANO/SOMAÏR/COMINAK — Niger is the world's 7th largest uranium producer), Agadem oil fields (CNPC/SH/ORLEN ~20,000 bpd), Agadem-Cotonou export pipeline (WAPCO, 2,000+ km), Kandadji Dam (130 MW under construction), and NIGELEC power grid.",
    },
    {
      question: es
        ? "¿Puede KabatOne integrarse con la gestión humanitaria en Níger?"
        : "Can KabatOne integrate with humanitarian management in Niger?",
      answer: es
        ? "Sí. KabatOne se integra con OCHA/UNHCR/WFP para la gestión de los 300,000+ PDI (zonas de Diffa/Tillabéri/Tahoua), alertas FEWS NET de inseguridad alimentaria (uno de los países con mayor inseguridad alimentaria del mundo), el Sistema de Alerta Temprana del Sahel y la coordinación de la AES/G5 Sahel."
        : "Yes. KabatOne integrates with OCHA/UNHCR/WFP for management of 300,000+ IDPs (Diffa/Tillaberi/Tahoua zones), FEWS NET food insecurity alerts (one of the world's highest food insecurity countries), Sahel Early Warning System, and AES/G5 Sahel coordination.",
    },
    {
      question: es
        ? "¿Cómo cumple KabatOne con la normativa de Níger?"
        : "How does KabatOne comply with Niger's regulations?",
      answer: es
        ? "KabatOne se alinea con la Loi 2017-28 du 3 mai 2017 portant Protection des Données Personnelles, la Autorité de Régulation des Postes et Télécommunications du Niger (ARTP), los estándares del CERT Niger y los marcos de adquisiciones del Banco Mundial/PNUD/AES para proyectos de estabilización."
        : "KabatOne aligns with Law 2017-28 of 3 May 2017 on Personal Data Protection, Autorité de Régulation des Postes et Télécommunications du Niger (ARTP), CERT Niger standards, and World Bank/UNDP/AES procurement frameworks for stabilisation projects.",
    },
    {
      question: es
        ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Níger?"
        : "What sets KabatOne apart for Niger's border management?",
      answer: es
        ? "KabatOne puede unificar los 7 corredores fronterizos (Algeria/Libia/Chad/Nigeria/Benín/Burkina Faso/Mali) con ANPR, listas Interpol/AES, alertas ISWAP/JNIM del Lago Chad/Diffa y monitoreo del corredor de uranio Arlit-Agadez-Niamey con gestión unificada FAN/Gendarmerie."
        : "KabatOne can unify 7 border corridors (Algeria/Libya/Chad/Nigeria/Benin/Burkina Faso/Mali) with ANPR, Interpol/AES watchlists, ISWAP/JNIM Lake Chad/Diffa alerts, and Arlit-Agadez-Niamey uranium corridor monitoring with unified FAN/Gendarmerie management.",
    },
  ]);

  const breadcrumb = breadcrumbSchema([
    { name: es ? "Inicio" : "Home", url: es ? "https://kabatone.com/es" : "https://kabatone.com/" },
    {
      name: es ? "Recursos" : "Resources",
      url: es ? "https://kabatone.com/es/resources" : "https://kabatone.com/resources",
    },
    {
      name: es ? "Software de Seguridad Pública Níger" : "Public Safety Software Niger",
      url: es
        ? "https://kabatone.com/es/resources/public-safety-software-niger"
        : "https://kabatone.com/resources/public-safety-software-niger",
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
              {es ? "Guía de Mercado — Níger" : "Market Guide — Niger"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {es
                ? "Software de Seguridad Pública para Níger"
                : "Public Safety Software for Niger"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {es
                ? "Plataforma modular de mando y control, coordinación antiterrorista y gestión humanitaria para las Forces Armées du Niger, los programas AES y la protección de la infraestructura de uranio y petróleo — el corazón del Sahel."
                : "Modular command-and-control, counter-terrorism coordination, and humanitarian management for the Forces Armées du Niger, AES programs, and uranium and oil infrastructure protection — the heart of the Sahel."}
            </p>
          </div>
        </section>

        {/* Security Context */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {es
              ? "Contexto de Seguridad — CNSP/AES, ISWAP y la Triple Frontera"
              : "Security Context — CNSP/AES, ISWAP & the Triple Frontier"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "El golpe de estado de julio de 2023 instaló el Conseil National pour la Sauvegarde de la Patrie (CNSP) bajo el General Tiani, que suspendió la cooperación militar con Francia/UE/CEDEAO y se unió a la Alliance des États du Sahel (AES) con Mali y Burkina Faso. La triple frontera Mali-Burkina Faso-Níger es el epicentro de la actividad del JNIM/GSIM (Al-Qaeda). La zona de Diffa (frontera Nigeria/Lago Chad) enfrenta la amenaza de ISWAP (Estado Islámico, Boko Haram)."
              : "The July 2023 coup installed the Conseil National pour la Sauvegarde de la Patrie (CNSP) under General Tiani, which suspended military cooperation with France/EU/ECOWAS and joined the Alliance of Sahel States (AES) with Mali and Burkina Faso. The Mali-Burkina Faso-Niger triple frontier is the epicenter of JNIM/GSIM (Al-Qaeda) activity. The Diffa zone (Nigeria/Lake Chad border) faces the ISWAP threat (Islamic State, Boko Haram)."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "Las Forces Armées du Niger (FAN), con más de 25,000 efectivos, y la Gendarmerie Nationale conducen operaciones antiterroristas con apoyo ruso (Africa Corps/Wagner) tras la expulsión de las fuerzas francesas (Barkhane) y la misión de la UE EUCAP Sahel Niger. KabatOne proporciona plataformas de C2 modulares adaptadas a las condiciones de conectividad limitada y alta amenaza del Sahel."
              : "Forces Armées du Niger (FAN), with over 25,000 troops, and the Gendarmerie Nationale conduct counter-terrorism operations with Russian support (Africa Corps/Wagner) after the expulsion of French forces (Barkhane) and EU mission EUCAP Sahel Niger. KabatOne provides modular C2 platforms adapted to the Sahel's limited connectivity and high-threat conditions."}
          </p>

          {/* Strategic Resources */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Recursos Estratégicos — Uranio, Petróleo y el Oleoducto Agadem-Cotonou"
              : "Strategic Resources — Uranium, Oil & the Agadem-Cotonou Pipeline"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Níger es el 7mo productor mundial de uranio (~2,000-2,500 toneladas/año). Las minas de Arlit (SOMAÏR/ORANO) y Akouta (COMINAK/ORANO, la más profunda del mundo para uranio) en el norte suministran reactores nucleares franceses y son estratégicamente críticas para la UE. El yacimiento de petróleo de Agadem (CNPC/SH/ORLEN, ~20,000 bpd) tiene el oleoducto más largo del mundo en términos de nuevas construcciones: el Export Pipeline Niger-Benin (WAPCO, 2,000+ km hasta el Puerto de Sémè/Cotonou, Benín), inaugurado en 2024."
              : "Niger is the world's 7th largest uranium producer (~2,000-2,500 tonnes/year). Arlit mines (SOMAÏR/ORANO) and Akouta (COMINAK/ORANO, the world's deepest uranium mine) in the north supply French nuclear reactors and are strategically critical for the EU. Agadem oil field (CNPC/SH/ORLEN, ~20,000 bpd) has the world's longest new-build pipeline: the Niger-Benin Export Pipeline (WAPCO, 2,000+ km to Port of Seme/Cotonou, Benin), inaugurated in 2024."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "KabatOne proporciona seguridad perimetral georreferenciada para las minas de uranio de Arlit/Akouta, el yacimiento de petróleo de Agadem, monitoreo del oleoducto WAPCO con alertas de intrusión/sabotaje, gestión de incidentes del personal internacional ORANO/CNPC/SH, y coordinación FAN para las unidades de protección de infraestructura crítica."
              : "KabatOne provides georeferenced perimeter security for Arlit/Akouta uranium mines, Agadem oil field, WAPCO pipeline monitoring with intrusion/sabotage alerts, ORANO/CNPC/SH international staff incident management, and FAN coordination for critical infrastructure protection units."}
          </p>

          {/* Humanitarian */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión Humanitaria — PDI, Lago Chad y Seguridad Alimentaria"
              : "Humanitarian Management — IDPs, Lake Chad & Food Security"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Níger registra más de 300,000 desplazados internos (PDI), principalmente en las regiones de Diffa (ISWAP/Lago Chad), Tillabéri y Tahoua (JNIM triple frontera). Níger es consistentemente clasificado entre los países más pobres del mundo (IDH: último o antepenúltimo) y uno de los países con mayor inseguridad alimentaria crónica del Sahel. FEWS NET/SAP monitorean la inseguridad alimentaria estacional, especialmente durante la soudure (junio-agosto)."
              : "Niger records over 300,000 internally displaced persons (IDPs), primarily in Diffa (ISWAP/Lake Chad), Tillaberi, and Tahoua (JNIM triple frontier) regions. Niger is consistently ranked among the world's poorest countries (HDI: last or second-to-last) and one of the Sahel's highest chronic food insecurity countries. FEWS NET/SAP monitor seasonal food insecurity, especially during the soudure (June-August)."}
          </p>

          {/* Border */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Gestión Fronteriza — 7 Países Vecinos y Corredor del Uranio"
              : "Border Management — 7 Neighboring Countries & Uranium Corridor"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Níger comparte fronteras con 7 países: Argelia al norte (corredor sahariano Agadez-Tamanrasset), Libia al noreste (frontera porosa del Sahara), Chad al este (Lago Chad/N'Djamena corredor), Nigeria al sur (Maradi/Diffa corredores comerciales y seguridad ISWAP), Benín al sur (corredor Niamey-Cotonou/WAPCO), Burkina Faso al oeste (AES/triple frontera) y Mali al oeste (AES/triple frontera)."
              : "Niger shares borders with 7 countries: Algeria to the north (Agadez-Tamanrasset Saharan corridor), Libya to the northeast (porous Saharan border), Chad to the east (Lake Chad/N'Djamena corridor), Nigeria to the south (Maradi/Diffa trade and ISWAP security corridors), Benin to the south (Niamey-Cotonou/WAPCO corridor), Burkina Faso to the west (AES/triple frontier), and Mali to the west (AES/triple frontier)."}
          </p>

          {/* Compliance */}
          <h2 className="text-3xl font-bold mb-6 mt-12">
            {es
              ? "Cumplimiento y Adquisiciones — ARTP, Marchés Publics y AES"
              : "Compliance & Procurement — ARTP, Marchés Publics & AES"}
          </h2>
          <p className="text-gray-700 mb-4">
            {es
              ? "Níger aplica la Loi 2017-28 du 3 mai 2017 portant Protection des Données à Caractère Personnel, supervisada por la Commission Nationale de l'Informatique et des Libertés (CNIL-Niger). La Autorité de Régulation des Postes et Télécommunications du Niger (ARTP) regula las telecomunicaciones. Las adquisiciones públicas se rigen por la Loi 2012-07 du 28 mars 2012 et ses textes d'application y la Agence de Régulation des Marchés Publics (ARMP-Niger)."
              : "Niger enforces Law 2017-28 of 3 May 2017 on Personal Data Protection, overseen by Commission Nationale de l'Informatique et des Libertés (CNIL-Niger). Autorité de Régulation des Postes et Télécommunications du Niger (ARTP) regulates telecommunications. Public procurement follows Law 2012-07 of 28 March 2012 and implementing texts, overseen by Agence de Régulation des Marchés Publics (ARMP-Niger)."}
          </p>
          <p className="text-gray-700 mb-4">
            {es
              ? "Los proyectos de estabilización en Níger son financiados principalmente por el Banco Mundial, el PNUD, el CNPC/China (a través de la AES), y algunos donantes europeos bajo restricciones post-junta. KabatOne está estructurado para despliegue bajo marcos de adquisición de donantes, compatible con los estándares AES y los protocolos de coordinación humanitaria OCHA/CONASUR."
              : "Stabilisation projects in Niger are primarily funded by the World Bank, UNDP, CNPC/China (through AES), and some European donors under post-junta restrictions. KabatOne is structured for deployment under donor procurement frameworks, compatible with AES standards and OCHA/CONASUR humanitarian coordination protocols."}
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
                    ? "¿Cómo puede KabatOne apoyar la seguridad pública en Níger?"
                    : "How can KabatOne support public safety in Niger?",
                  a: es
                    ? "KabatOne proporciona CAD modular para 8 regiones/63 departamentos, coordinación FAN antiterrorista JNIM/ISWAP, gestión 300K+ PDI y plataformas de emergencia para Niamey, Zinder, Maradi, Tahoua y Agadez."
                    : "KabatOne provides modular CAD for 8 regions/63 departments, FAN counter-terrorism coordination JNIM/ISWAP, 300K+ IDP management, and emergency platforms for Niamey, Zinder, Maradi, Tahoua, and Agadez.",
                },
                {
                  q: es
                    ? "¿Cómo apoya KabatOne la seguridad de infraestructura crítica en Níger?"
                    : "How does KabatOne support critical infrastructure security in Niger?",
                  a: es
                    ? "La plataforma monitorea minas uranio Arlit/Akouta (ORANO/SOMAÏR/COMINAK, 7mo productor mundial), campos petróleo Agadem (CNPC/SH, ~20K bpd), oleoducto WAPCO 2,000+ km a Cotonou (inaugural 2024) y presa Kandadji 130 MW."
                    : "The platform monitors Arlit/Akouta uranium mines (ORANO/SOMAÏR/COMINAK, world 7th producer), Agadem oil fields (CNPC/SH, ~20K bpd), WAPCO pipeline 2,000+ km to Cotonou (inaugurated 2024), and Kandadji Dam 130 MW.",
                },
                {
                  q: es
                    ? "¿Puede KabatOne integrarse con la gestión humanitaria en Níger?"
                    : "Can KabatOne integrate with humanitarian management in Niger?",
                  a: es
                    ? "Sí. KabatOne integra OCHA/UNHCR/WFP para 300K+ PDI Diffa/Tillabéri/Tahoua, FEWS NET/SAP alertas inseguridad alimentaria y coordinación AES/G5 Sahel corredores humanitarios."
                    : "Yes. KabatOne integrates OCHA/UNHCR/WFP for 300K+ IDPs Diffa/Tillaberi/Tahoua, FEWS NET/SAP food insecurity alerts, and AES/G5 Sahel humanitarian corridor coordination.",
                },
                {
                  q: es
                    ? "¿Cómo cumple KabatOne con la normativa de Níger?"
                    : "How does KabatOne comply with Niger's regulations?",
                  a: es
                    ? "KabatOne se alinea con Loi 2017-28/CNIL-Niger, ARTP/CERT-Niger, Loi 2012-07/ARMP-Niger y marcos de adquisiciones Banco Mundial/PNUD/AES para proyectos de estabilización."
                    : "KabatOne aligns with Law 2017-28/CNIL-Niger, ARTP/CERT-Niger, Law 2012-07/ARMP-Niger, and World Bank/UNDP/AES procurement frameworks for stabilisation projects.",
                },
                {
                  q: es
                    ? "¿Qué diferencia a KabatOne en la gestión fronteriza de Níger?"
                    : "What sets KabatOne apart for Niger's border management?",
                  a: es
                    ? "KabatOne puede unificar los 7 corredores (Algeria/Libia/Chad/Nigeria/Benín/Burkina Faso/Mali) con ANPR, listas Interpol/AES, alertas ISWAP Lago Chad/Diffa y JNIM triple frontera, con gestión FAN/Gendarmerie."
                    : "KabatOne can unify 7 corridors (Algeria/Libya/Chad/Nigeria/Benin/Burkina Faso/Mali) with ANPR, Interpol/AES watchlists, ISWAP Lake Chad/Diffa and JNIM triple frontier alerts, with FAN/Gendarmerie management.",
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
              ? "¿Listo para apoyar la seguridad pública y la estabilización en Níger?"
              : "Ready to support public safety and stabilisation in Niger?"
          }
          subtitle={
            es
              ? "Hable con nuestros especialistas sobre soluciones modulares para las FAN, la protección del uranio y el petróleo, la gestión de PDI y los programas AES/G5 Sahel."
              : "Speak with our specialists about modular solutions for FAN, uranium and oil protection, IDP management, and AES/G5 Sahel programs."
          }
        />
      </main>
      <Footer es={es} />
    </>
  );
}
