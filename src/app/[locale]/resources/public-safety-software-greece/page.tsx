import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareGreece', locale)
}

export default async function PublicSafetySoftwareGreecePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-greece/`
    : `${baseUrl}/resources/public-safety-software-greece/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Grecia' : 'Public Safety Software — Greece', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Grecia?',
      answer: 'Grecia tiene un sistema de seguridad pública centralizado bajo el Ministerio de Protección Ciudadana (Υπουργείο Προστασίας του Πολίτη). La Ελληνική Αστυνομία (ΕΛΑΣ — Policía Helénica) es la fuerza policial nacional, organizada en 13 periferias regionales más la Διεύθυνση Αστυνομίας Αττικής (Policía de Ática). El Πυροσβεστικό Σώμα (Cuerpo de Bomberos) es la fuerza nacional de bomberos, con 99 estaciones locales y coordinación desde la Αρχηγεία Πυροσβεστικού Σώματος (Comandancia General). El ΕΚΑΒ (Εθνικό Κέντρο Άμεσης Βοήθειας — Centro Nacional de Atención de Urgencias) gestiona los servicios de ambulancias y los Κέντρα Λήψης Κλήσεων (centros de despacho 112). El Λιμενικό Σώμα-Ελληνική Ακτοφυλακή (Guardia Costera Helénica) es única en Europa como parte de la estructura de seguridad pública terrestre y marítima. La Γενική Γραμματεία Πολιτικής Προστασίας (ΓΓΠΠ — Secretaría General de Protección Civil) coordina la respuesta ante desastres naturales — especialmente relevante tras los incendios forestales de Matí (2018) y Evros (2023). Los números de emergencia son 100 (policía), 199 (bomberos), 166 (ambulancias) y 112 (europeo unificado).',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Grecia? ¿Qué es la red ΕΣΑΚΤ?',
      answer: 'Grecia opera un sistema de despacho centralizado a través del número único 112 (ΕΚΑΒ gestiona los centros 112) y los números específicos 100 (ΕΛΑΣ), 199 (Πυροσβεστικό Σώμα) y 166 (ΕΚΑΒ). Los Κέντρα Έκτακτης Ανάγκης 112 son los centros integrados de despacho de emergencias. Los centros operativos de la ΕΛΑΣ (Κέντρα Επιχειρήσεων της ΕΛ.ΑΣ) gestionan el despacho policial. El Πυροσβεστικό Σώμα tiene sus propios Κέντρα Επιχειρήσεων para el despacho de bomberos y la coordinación de incendios forestales (κατάσβεση δασικών πυρκαγιών). La red ΕΣΑΚΤ (Εθνικό Σύστημα Ασύρματων Επικοινωνιών — Sistema Nacional de Comunicaciones Inalámbricas) es la red de radiocomunicaciones TETRA para los servicios de seguridad pública griegos. ΕΣΑΚΤ conecta a la policía, bomberos, ΕΚΑΒ y Guardia Costera en todo el territorio continental e insular. La orografía de Grecia — 6.000 islas habitadas/deshabitadas, montañas y costas extensas — presenta desafíos únicos de cobertura y coordinación para la red de emergencias.',
    },
    {
      question: '¿Cuáles son los retos únicos de la gestión de emergencias en Grecia?',
      answer: 'Grecia presenta desafíos únicos en la gestión de emergencias. Los incendios forestales son la principal amenaza: los incendios de Matí (julio 2018, 102 víctimas mortales) y el incendio del Evros (agosto 2023, el mayor de la historia de la UE) evidenciaron la necesidad crítica de mejorar los sistemas de alerta temprana, despacho multiagencia y conciencia situacional en tiempo real. El turismo masivo — más de 30 millones de visitantes anuales — crea picos de demanda estacional extremos en las islas (Creta, Rodas, Corfú, Santorini, Mykonos) que sobrecargan los sistemas de emergencia locales. La extensa frontera terrestre con Turquía, Macedonia del Norte, Bulgaria y Albania y la larga frontera marítima crean necesidades especiales de coordinación entre la ΕΛΑΣ y el Λιμενικό Σώμα. La dispersión geográfica de 6.000 islas (inhabitadas y habitadas) requiere comunicaciones de emergencia satelitales y resilientes. La ΓΓΠΠ coordina planes de respuesta ante terremotos (Grecia es el país con mayor actividad sísmica de Europa), tsunamis y eventos de Defensa Civil.',
    },
    {
      question: '¿Cuál es el marco de protección de datos y ciberseguridad para software de seguridad pública en Grecia?',
      answer: 'Grecia implementó el RGPD de la UE directamente (como miembro UE) con la ley nacional 4624/2019. La Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (ΑΠΔΠΧ — Autoridad de Protección de Datos de Carácter Personal) es la autoridad de control griega del RGPD. Los sistemas policiales están sujetos a la Directiva Policial UE 2016/680 y a la ley griega de implementación. La videovigilancia policial en espacios públicos se rige por el ν. 3917/2011 (cámaras en vías públicas) y el ν. 4921/2022. La Ε.Υ.Π (Εθνική Υπηρεσία Πληροφοριών — Servicio Nacional de Inteligencia) coordina la inteligencia de seguridad. Para ciberseguridad, la ΕΨΑΠΑ (Εθνική Αρχή Κυβερνοασφάλειας — Autoridad Nacional de Ciberseguridad) transpone la Directiva NIS2 bajo el Υπουργείο Ψηφιακής Διακυβέρνησης. La ENISA (Agencia de Ciberseguridad de la UE) tiene su sede en Atenas — lo que hace a Grecia especialmente visible en materia de cumplimiento NIS2. El marco de ciberseguridad griego fue reforzado significativamente tras el incidente de la ΕΛΑΣ en 2023 y los ciberataques a infraestructuras críticas.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Grecia?',
      answer: 'La contratación pública en Grecia se rige por la Ley 4412/2016 (que implementa las directivas europeas 2014/24/UE y 2014/25/UE), modificada por el ν. 4782/2021. Las licitaciones se publican en el ΕΣΗΔΗΣ (Εθνικό Σύστημα Ηλεκτρονικών Δημοσίων Συμβάσεων — Sistema Nacional de Contratos Públicos Electrónicos), el portal electrónico de contratación pública. La ΚΗΜΔΗΣ (Κεντρικό Ηλεκτρονικό Μητρώο Δημοσίων Συμβάσεων) es el registro central de contratos públicos. El Υπουργείο Προστασίας του Πολίτη licita los sistemas de la ΕΛΑΣ y el Πυροσβεστικό Σώμα. El ΕΚΑΒ tiene su propio proceso de licitación para los sistemas de despacho 112. Los fondos del ΕΣΠΑ (Εταιρικό Σύμφωνο για το Πλαίσιο Ανάπτυξης — Fondos Estructurales UE para Grecia) y el Plan de Recuperación y Resiliencia (ΤΑΑ — Ταμείο Ανάκαμψης και Ανθεκτικότητας) co-financian la modernización de la seguridad pública griega. Los contratos grandes (>= umbrales EU) aparecen en TED/OJEU.',
    },
    {
      question: '¿Qué proyectos de digitalización de la seguridad pública y Smart City existen en Grecia?',
      answer: 'Grecia impulsa la digitalización de la seguridad pública con varios proyectos financiados por fondos europeos. El proyecto Safe Attica/Ασφαλής Αττική moderniza los sistemas de videovigilancia de la ΕΛΑΣ en el Área Metropolitana de Atenas. El sistema I-SENSE del ΕΚΑΒ moderniza los centros de despacho 112. El proyecto Wildfirecat mejora los sistemas de detección y gestión de incendios forestales con sensores IoT e IA. La Κεντρική Ένωση Δήμων Ελλάδας (ΚΕΔΕ — Unión Central de Municipios de Grecia) impulsa programas Smart City en municipios como Atenas, Salónica, Patras y Heraklion. El proyecto ΔΕΔΔΗΕ integra datos de la red eléctrica con sistemas de alerta de emergencia. El Εθνικό Κέντρο Πολιτικής Προστασίας (NECC — Centro Nacional de Protección Civil) moderniza los sistemas de alerta temprana para sismos, tsunamis e incendios. Grecia participa en el programa Copernicus (observación terrestre UE) para vigilancia de incendios forestales y catástrofes.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la ΕΛΑΣ, el Πυροσβεστικό Σώμα y el ΕΚΑΒ griegos?',
      answer: 'KabatOne integra las capacidades que la Policía Helénica (ΕΛΑΣ), el Πυροσβεστικό Σώμα, el ΕΚΑΒ y la Guardia Costera necesitan unificadas: despacho CAD multiagencia compatible con los centros 112 del ΕΚΑΒ y los Κέντρα Επιχειρήσεων de la ΕΛΑΣ y el Πυροσβεστικό Σώμα — con integración ΕΣΑΚΤ TETRA y comunicaciones satelitales para las islas, gestión de incendios forestales en tiempo real con analítica GIS integrada con Copernicus/Wildfirecat, y coordinación Guardia Costera-ΕΛΑΣ para fronteras terrestres y marítimas (K-Dispatch), gestión de cámaras urbanas y ANPR con analítica IA conforme a RGPD/ΑΠΔΠΧ y ν. 4921/2022 — con DPIA, base legal policial y gestión de retención (K-Video), y conciencia situacional en tiempo real para la ΓΓΠΠ, el NECC y los Δήμοι durante emergencias sísmicas, incendios forestales y grandes eventos de seguridad (K-Safety). Cloud EU con cumplimiento RGPD/ΑΠΔΠΧ y NIS2/ΕΨΑΠΑ/ENISA. Compatible con el marco ΕΣΗΔΗΣ/ν. 4412/2016 y fondos ΕΣΠΑ/ΤΑΑ. Demo adaptada al modelo griego multiagencia y a los retos insulares y fronterizos.',
    },
  ] : [
    {
      question: 'How is public safety organised in Greece?',
      answer: 'Greece has a centralised public safety system under the Ministry of Citizen Protection (Υπουργείο Προστασίας του Πολίτη). The Ελληνική Αστυνομία (ΕΛΑΣ — Hellenic Police) is the national police force, organised across 13 regional police departments plus the Αττική Police Directorate (Athens). The Πυροσβεστικό Σώμα (Hellenic Fire Service) is the national fire service, with 99 local stations and coordination from the General Command. EKAB (Εθνικό Κέντρο Άμεσης Βοήθειας — National Centre for Emergency Aid) manages ambulance services and the 112 dispatch centres. The Hellenic Coast Guard (Λιμενικό Σώμα-Ελληνική Ακτοφυλακή) is unique in Europe as part of both the maritime and land public safety structure. The General Secretariat for Civil Protection (ΓΓΠΠ) coordinates disaster response — especially relevant after the Mati fires (2018) and Evros fires (2023). Emergency numbers are 100 (police), 199 (fire), 166 (ambulance), and 112 (unified European).',
    },
    {
      question: 'How does emergency dispatch work in Greece? What is the ΕΣΑΚΤ network?',
      answer: 'Greece operates a centralised dispatch system through the unified 112 number (EKAB manages 112 centres) and specific numbers 100 (ΕΛΑΣ), 199 (Πυροσβεστικό Σώμα), and 166 (EKAB). The 112 Emergency Centres (Κέντρα Έκτακτης Ανάγκης 112) are the integrated emergency dispatch centres. Hellenic Police Operations Centres (Κέντρα Επιχειρήσεων της ΕΛ.ΑΣ) handle police dispatch. The Πυροσβεστικό Σώμα has its own Operations Centres for fire dispatch and wildfire coordination (κατάσβεση δασικών πυρκαγιών). The ΕΣΑΚΤ network (Εθνικό Σύστημα Ασύρματων Επικοινωνιών — National Wireless Communications System) is the TETRA radiocommunications network for Greek public safety services. ΕΣΑΚΤ connects police, fire services, EKAB, and the Coast Guard across the entire mainland and island territory. Greece\'s geography — 6,000 inhabited/uninhabited islands, mountains, and extensive coastlines — presents unique coverage and coordination challenges for the emergency communications network.',
    },
    {
      question: 'What are the unique challenges of emergency management in Greece?',
      answer: 'Greece presents unique emergency management challenges. Wildfires are the primary threat: the Mati fires (July 2018, 102 fatalities) and the Evros fire (August 2023, the largest in EU history) highlighted the critical need to improve early warning systems, multi-agency dispatch, and real-time situational awareness. Mass tourism — over 30 million annual visitors — creates extreme seasonal demand peaks on islands (Crete, Rhodes, Corfu, Santorini, Mykonos) that overwhelm local emergency systems. The extensive land borders with Turkey, North Macedonia, Bulgaria, and Albania, and the long maritime border, create special coordination needs between ΕΛΑΣ and the Coast Guard. The geographic dispersion of 6,000 islands requires satellite and resilient emergency communications. ΓΓΠΠ coordinates response plans for earthquakes (Greece is Europe\'s most seismically active country), tsunamis, and Civil Defence events.',
    },
    {
      question: 'What is the data protection and cybersecurity framework for public safety software in Greece?',
      answer: 'Greece implemented EU GDPR directly (as an EU member) through national law 4624/2019. The Hellenic Data Protection Authority (ΑΠΔΠΧ — Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα) is the Greek GDPR supervisory authority. Police systems are subject to EU Law Enforcement Directive 2016/680 and Greek implementation law. Police video surveillance in public spaces is governed by ν. 3917/2011 (public road cameras) and ν. 4921/2022. The National Intelligence Service (ΕΥΠ — Εθνική Υπηρεσία Πληροφοριών) coordinates security intelligence. For cybersecurity, ΕΨΑΠΑ (National Cybersecurity Authority) transposes the NIS2 Directive under the Ministry of Digital Governance. Importantly, ENISA (the EU Cybersecurity Agency) is headquartered in Athens — making Greece especially prominent in NIS2 compliance. The Greek cybersecurity framework was significantly strengthened following the 2023 ΕΛΑΣ incident and cyberattacks on critical infrastructure.',
    },
    {
      question: 'How is public safety software procured in Greece?',
      answer: 'Greek public procurement is governed by Law 4412/2016 (implementing EU directives 2014/24/EU and 2014/25/EU), amended by ν. 4782/2021. Tenders are published on ΕΣΗΔΗΣ (National System for Electronic Public Contracts), the electronic procurement portal. ΚΗΜΔΗΣ (Central Electronic Registry of Public Contracts) is the contracts register. The Ministry of Citizen Protection procures ΕΛΑΣ and Πυροσβεστικό Σώμα systems. EKAB has its own procurement for 112 dispatch systems. ΕΣΠΑ (EU Structural Funds for Greece) and the Recovery and Resilience Fund (ΤΑΑ) co-finance Greek public safety modernisation. Large contracts (at or above EU thresholds) appear on TED/OJEU.',
    },
    {
      question: 'What public safety digitalisation and Smart City projects exist in Greece?',
      answer: 'Greece drives public safety digitalisation through several EU-funded projects. The Safe Attica (Ασφαλής Αττική) project modernises ΕΛΑΣ video surveillance in the Athens Metropolitan Area. The EKAB I-SENSE system modernises 112 dispatch centres. The Wildfirecat project improves wildfire detection and management with IoT sensors and AI. The Central Union of Municipalities (ΚΕΔΕ) drives Smart City programmes in Athens, Thessaloniki, Patras, and Heraklion. The National Civil Protection Centre (NECC) modernises early warning systems for earthquakes, tsunamis, and fires. Greece participates in the Copernicus programme (EU Earth observation) for wildfire and disaster monitoring. ENISA\'s Athens headquarters makes Greece a focal point for European cybersecurity policy and NIS2 implementation.',
    },
    {
      question: 'Why is KabatOne suited for Greek ΕΛΑΣ, Πυροσβεστικό Σώμα, and EKAB?',
      answer: 'KabatOne integrates the capabilities that Hellenic Police (ΕΛΑΣ), Πυροσβεστικό Σώμα, EKAB, and the Coast Guard need unified: multi-agency CAD dispatch compatible with EKAB 112 centres and ΕΛΑΣ/Πυροσβεστικό Σώμα Operations Centres — with ΕΣΑΚΤ TETRA integration and satellite communications for islands, real-time wildfire management with GIS analytics integrated with Copernicus/Wildfirecat, and Coast Guard-ΕΛΑΣ coordination for land and maritime borders (K-Dispatch), urban camera and ANPR management with AI analytics compliant with GDPR/ΑΠΔΠΧ and ν. 4921/2022 — with DPIA, police legal basis, and retention management (K-Video), and real-time situational awareness for ΓΓΠΠ, NECC, and municipalities during seismic emergencies, wildfires, and major security events — with island and seasonal demand scalability (K-Safety). EU cloud with GDPR/ΑΠΔΠΧ and NIS2/ΕΨΑΠΑ/ENISA compliance. Compatible with ΕΣΗΔΗΣ/ν. 4412/2016 and ΕΣΠΑ/ΤΑΑ funding frameworks. Demo adapted to the Greek multi-agency model and island/border challenges.',
    },
  ]

  const articleHeadline = es
    ? 'Software de Seguridad Pública para Grecia: ΕΛΑΣ, Πυροσβεστικό Σώμα, ΕΚΑΒ, ΕΣΑΚΤ TETRA, RGPD/ΑΠΔΠΧ y NIS2/ΕΨΑΠΑ'
    : 'Public Safety Software for Greece: ΕΛΑΣ, Hellenic Fire Service, EKAB, ΕΣΑΚΤ TETRA, GDPR/ΑΠΔΠΧ & NIS2/ΕΨΑΠΑ'

  const articleDescription = es
    ? 'Plataforma unificada para la Policía Helénica, el Πυροσβεστικό Σώμα, el ΕΚΑΒ y la Guardia Costera — despacho CAD integrado con ΕΣΑΚΤ TETRA y gestión de incendios forestales con Copernicus, conforme a RGPD/ΑΠΔΠΧ y NIS2/ΕΨΑΠΑ con fondos ΕΣΠΑ/ΤΑΑ.'
    : 'Unified platform for Hellenic Police, Πυροσβεστικό Σώμα, EKAB, and the Coast Guard — integrated CAD dispatch with ΕΣΑΚΤ TETRA and Copernicus wildfire management, compliant with GDPR/ΑΠΔΠΧ and NIS2/ΕΨΑΠΑ with ΕΣΠΑ/ΤΑΑ funding.'

  const challenges = es ? [
    {
      icon: '🔥',
      title: 'Incendios forestales y gestión de catástrofes naturales',
      desc: 'Grecia enfrenta los incendios forestales más destructivos de la UE (Matí 2018, Evros 2023). La coordinación en tiempo real entre la ΕΛΑΣ, el Πυροσβεστικό Σώμα, la ΓΓΠΠ y los Δήμοι durante incendios, terremotos y tsunamis requiere plataformas de conciencia situacional con integración Copernicus/satélite.',
    },
    {
      icon: '🏝️',
      title: 'Cobertura insular y turismo masivo estacional',
      desc: 'Más de 6.000 islas y 30 millones de turistas anuales crean picos de demanda extremos en sistemas de emergencia. La red ΕΣΑΚΤ TETRA necesita complementarse con comunicaciones satelitales y sistemas escalables para las temporadas de alta afluencia en las islas más visitadas.',
    },
    {
      icon: '🛡️',
      title: 'Fronteras terrestres y marítimas — coordinación ΕΛΑΣ/Λιμενικό',
      desc: 'Las fronteras con Turquía, Bulgaria, Macedonia del Norte y Albania, combinadas con miles de km de costa marítima, requieren coordinación permanente entre la ΕΛΑΣ, el Λιμενικό Σώμα (Guardia Costera) y el ILS (Frontex) — con sistemas de seguimiento de embarcaciones e incidentes fronterizos.',
    },
    {
      icon: '🔒',
      title: 'RGPD/ΑΠΔΠΧ, NIS2/ΕΨΑΠΑ y ENISA en Atenas',
      desc: 'Cumplir el RGPD (ley 4624/2019), ν. 4921/2022 (videovigilancia), NIS2/ΕΨΑΠΑ y los estándares de ENISA (con sede en Atenas) — con fondos ΕΣΠΑ/ΤΑΑ que exigen trazabilidad completa y conformidad con la normativa europea.',
    },
  ] : [
    {
      icon: '🔥',
      title: 'Wildfires and natural disaster management',
      desc: 'Greece faces the EU\'s most destructive wildfires (Mati 2018, Evros 2023). Real-time coordination between ΕΛΑΣ, Πυροσβεστικό Σώμα, ΓΓΠΠ, and municipalities during fires, earthquakes, and tsunamis requires situational awareness platforms with Copernicus/satellite integration.',
    },
    {
      icon: '🏝️',
      title: 'Island coverage and mass seasonal tourism',
      desc: 'Over 6,000 islands and 30 million annual tourists create extreme demand peaks in emergency systems. The ΕΣΑΚΤ TETRA network needs satellite communications and scalable systems to supplement coverage during peak seasons on the most-visited islands.',
    },
    {
      icon: '🛡️',
      title: 'Land and maritime borders — ΕΛΑΣ/Coast Guard coordination',
      desc: 'Borders with Turkey, Bulgaria, North Macedonia, and Albania, combined with thousands of km of maritime coastline, require permanent coordination between ΕΛΑΣ, the Hellenic Coast Guard (Λιμενικό Σώμα), and ILS (Frontex) — with vessel tracking and border incident systems.',
    },
    {
      icon: '🔒',
      title: 'GDPR/ΑΠΔΠΧ, NIS2/ΕΨΑΠΑ and ENISA in Athens',
      desc: 'Complying with GDPR (law 4624/2019), ν. 4921/2022 (video surveillance), NIS2/ΕΨΑΠΑ, and ENISA standards (headquartered in Athens) — with ΕΣΠΑ/ΤΑΑ funds requiring full traceability and compliance with European regulations.',
    },
  ]

  const stats = es ? [
    { value: '13+Ατ', label: 'Regiones policiales ΕΛΑΣ' },
    { value: '100/199/166', label: 'Números de emergencia' },
    { value: 'ΕΣΑΚΤ', label: 'Red TETRA nacional' },
    { value: 'ENISA HQ', label: 'Sede NIS2 UE en Atenas' },
  ] : [
    { value: '13+Att', label: 'ΕΛΑΣ police regions' },
    { value: '100/199/166', label: 'Emergency numbers' },
    { value: 'ΕΣΑΚΤ', label: 'National TETRA network' },
    { value: 'ENISA HQ', label: 'EU NIS2 agency in Athens' },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      articleSchema(articleHeadline, articleDescription, pageUrl, '2026-05-18'),
      faqPageSchema(faqs),
      breadcrumbSchema(breadcrumbs),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Nav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#1e3a5f 0%,#2d6a9f 100%)', color: '#fff', padding: '80px 24px 60px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.75, marginBottom: 14 }}>
            {es ? 'Guía de Mercado · Grecia' : 'Market Guide · Greece'}
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, lineHeight: 1.2, margin: '0 0 20px' }}>
            {es
              ? 'Software de Seguridad Pública para Grecia'
              : 'Public Safety Software for Greece'}
          </h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.9, maxWidth: 680, margin: '0 auto 32px' }}>
            {es
              ? 'ΕΛΑΣ, Πυροσβεστικό Σώμα, ΕΚΑΒ, Guardia Costera, ΕΣΑΚΤ TETRA y NIS2/ΕΨΑΠΑ — plataforma unificada para la seguridad pública helénica.'
              : 'ΕΛΑΣ, Hellenic Fire Service, EKAB, Coast Guard, ΕΣΑΚΤ TETRA & NIS2/ΕΨΑΠΑ — unified platform for Hellenic public safety.'}
          </p>
          <Link
            href="/contact"
            style={{ background: ACCENT, color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}
          >
            {es ? 'Solicitar Demo para Grecia' : 'Request Greece Demo'}
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '28px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px 48px' }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.7rem', fontWeight: 800, color: ACCENT }}>{s.value}</div>
              <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section style={{ padding: '64px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: 12 }}>
            {es ? 'Desafíos del Mercado Griego de Seguridad Pública' : 'Greek Public Safety Market Challenges'}
          </h2>
          <p style={{ color: '#475569', marginBottom: 36 }}>
            {es
              ? 'Los incendios forestales, la geografía insular, las fronteras con Turquía y los Balcanes, el turismo masivo y la presencia de ENISA en Atenas hacen de Grecia un mercado con requerimientos únicos de seguridad pública y tecnología.'
              : 'Wildfires, island geography, borders with Turkey and the Balkans, mass tourism, and ENISA\'s presence in Athens make Greece a market with unique public safety and technology requirements.'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
            {challenges.map((c) => (
              <div key={c.title} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: '24px 20px' }}>
                <div style={{ fontSize: '2rem', marginBottom: 10 }}>{c.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How KabatOne helps */}
      <section style={{ padding: '64px 24px', background: '#f1f5f9' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: 32 }}>
            {es ? 'Cómo KabatOne Unifica la Seguridad Pública Helénica' : 'How KabatOne Unifies Hellenic Public Safety'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
            {[
              {
                title: es ? 'K-Dispatch: Despacho CAD Multiagencia 112' : 'K-Dispatch: Multi-Agency 112 CAD Dispatch',
                desc: es
                  ? 'Despacho integrado compatible con los centros 112 del ΕΚΑΒ y los Κέντρα Επιχειρήσεων de la ΕΛΑΣ y el Πυροσβεστικό Σώμα — con integración ΕΣΑΚΤ TETRA, comunicaciones satelitales para islas y coordinación con el Λιμενικό Σώμα para incidentes costeros.'
                  : 'Integrated dispatch compatible with EKAB 112 centres and ΕΛΑΣ/Πυροσβεστικό Σώμα Operations Centres — with ΕΣΑΚΤ TETRA integration, satellite communications for islands, and Λιμενικό Σώμα coordination for coastal incidents.',
              },
              {
                title: es ? 'K-Safety: Gestión de Incendios Forestales y Sismos' : 'K-Safety: Wildfire and Seismic Event Management',
                desc: es
                  ? 'Conciencia situacional en tiempo real integrada con Copernicus/Wildfirecat para incendios forestales, datos sísmicos del ΟΑΣΠ, alertas de tsunami y coordinación de la ΓΓΠΠ/NECC — con escalabilidad para picos de turismo estacional en islas.'
                  : 'Real-time situational awareness integrated with Copernicus/Wildfirecat for wildfires, ΟΑΣΠ seismic data, tsunami alerts, and ΓΓΠΠ/NECC coordination — with scalability for seasonal tourism peaks on islands.',
              },
              {
                title: es ? 'K-Video: Gestión de Cámaras conforme a RGPD/ΑΠΔΠΧ' : 'K-Video: GDPR/ΑΠΔΠΧ-Compliant Camera Management',
                desc: es
                  ? 'Gestión centralizada de cámaras urbanas y ANPR con analítica IA conforme a RGPD/ν. 4624/2019 y ν. 4921/2022 — con DPIA, supervisión ΑΠΔΠΧ y cumplimiento NIS2/ΕΨΑΠΑ para sistemas clasificados como infraestructura crítica.'
                  : 'Centralised urban camera and ANPR management with AI analytics compliant with GDPR/ν. 4624/2019 and ν. 4921/2022 — with DPIA, ΑΠΔΠΧ oversight, and NIS2/ΕΨΑΠΑ compliance for systems classified as critical infrastructure.',
              },
            ].map((item) => (
              <div key={item.title} style={{ background: '#fff', borderRadius: 12, padding: '24px 20px', boxShadow: '0 1px 4px rgba(0,0,0,.06)' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: ACCENT, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '64px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: 36 }}>
            {es ? 'Preguntas Frecuentes: Seguridad Pública en Grecia' : 'FAQ: Public Safety in Greece'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {faqs.map((faq) => (
              <div key={faq.question} style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20 }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 8 }}>{faq.question}</h3>
                <p style={{ fontSize: '0.92rem', color: '#475569', margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section style={{ padding: '48px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 24 }}>
            {es ? 'Guías de Mercado Relacionadas' : 'Related Market Guides'}
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {[
              { href: '/resources/public-safety-software-italy', label: es ? 'Italia' : 'Italy' },
              { href: '/resources/public-safety-software-turkey', label: es ? 'Turquía' : 'Türkiye' },
              { href: '/resources/public-safety-software-portugal', label: es ? 'Portugal' : 'Portugal' },
              { href: '/resources/public-safety-software-middle-east', label: es ? 'Oriente Medio' : 'Middle East' },
              { href: '/resources/public-safety-software-czech-republic', label: es ? 'República Checa' : 'Czech Republic' },
              { href: '/resources/public-safety-software-spain', label: es ? 'España' : 'Spain' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '8px 18px', fontSize: '0.9rem', color: ACCENT, textDecoration: 'none', fontWeight: 600 }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        es={es}
        h2={es ? '¿Listo para Modernizar la Seguridad Pública en Grecia?' : 'Ready to Modernise Public Safety in Greece?'}
        subtitle={es
          ? 'Demo personalizada para la ΕΛΑΣ y el sistema multiagencia helénico — adaptada a los incendios forestales, las islas, las fronteras y el cumplimiento RGPD/NIS2/ΕΨΑΠΑ.'
          : 'Personalised demo for ΕΛΑΣ and the Hellenic multi-agency system — tailored to wildfires, islands, borders, and GDPR/NIS2/ΕΨΑΠΑ compliance.'}
      />
      <Footer es={es} />
    </>
  )
}
