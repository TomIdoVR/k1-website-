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
  return generatePageMetadata('publicSafetySoftwareIndonesia', locale)
}

export default async function PublicSafetySoftwareIndonesiaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-indonesia/`
    : `${baseUrl}/resources/public-safety-software-indonesia/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Indonesia' : 'Public Safety Software — Indonesia', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Indonesia?',
      answer: 'Indonesia tiene un sistema de seguridad pública organizado en múltiples niveles bajo el gobierno central. La Polri (Kepolisian Negara Republik Indonesia — Policía Nacional de Indonesia) es la fuerza policial nacional, organizada en 34 Polda (Kepolisian Daerah — Jefaturas Provinciales de Policía) y más de 500 Polres (Kepolisian Resor — Jefaturas de Distrito). El BNPB (Badan Nasional Penanggulangan Bencana — Agencia Nacional para la Gestión de Desastres) coordina la respuesta ante desastres naturales a nivel nacional, con BPBD (Badan Penanggulangan Bencana Daerah) en cada provincia y kabupaten/kota. El BASARNAS (Badan Nasional Pencarian dan Pertolongan — Agencia Nacional de Búsqueda y Rescate) gestiona las operaciones SAR. Los bomberos son el Dinas Pemadam Kebakaran (Damkar), operados por los gobiernos locales (kota/kabupaten). Los servicios de ambulancias son gestionados por el Dinas Kesehatan (servicios de salud municipales) y el PSC 119 (Public Safety Centre 119). Los números de emergencia son 110 (policía), 113 (bomberos), 119 (ambulancias) y 112 (europeo/ASEAN, disponible).',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Indonesia? ¿Qué es el PSC 119?',
      answer: 'Indonesia opera un sistema de emergencias a través de múltiples números: 110 (Polri), 113 (Damkar), 119 (ambulancias/PSC) y 112 (disponible). El PSC 119 (Public Safety Centre 119) es el sistema centralizado de gestión de emergencias médicas del Kementerian Kesehatan (Ministerio de Salud) — equivalente al 112 europeo para emergencias médicas. Los SPGDT (Sistem Penanggulangan Gawat Darurat Terpadu — Sistema Integrado de Gestión de Urgencias) operan a nivel provincial y kabupaten/kota. Las salas de situación de la Polri (Ruang Situasi / Sentra Pelayanan Kepolisian Terpadu — SPKT) gestionan el despacho policial. El BNPB opera el PUSDALOPS (Pusat Pengendalian Operasi — Centro de Control de Operaciones) para coordinar la respuesta ante desastres naturales a nivel nacional. La integración entre la Polri, el BNPB y el PSC 119 es un área de modernización activa en el programa Smart City indonesio. El BMKG (Badan Meteorologi, Klimatologi, dan Geofisika) opera el InaTEWS (Indonesia Tsunami Early Warning System) para alertas de tsunami en tiempo real.',
    },
    {
      question: '¿Cuáles son los retos únicos de la gestión de desastres en Indonesia?',
      answer: 'Indonesia es uno de los países con mayor riesgo de desastres naturales del mundo por su posición en el "Anillo de Fuego" del Pacífico. Los terremotos y tsunamis son la principal amenaza: el tsunami del Océano Índico (2004, 220.000 víctimas), el terremoto de Lombok (2018), el tsunami de Palu (2018, 4.000 víctimas) y el terremoto de Cianjur (2022) evidenciaron la necesidad crítica de sistemas de alerta temprana y despacho multiagencia en tiempo real. Indonesia tiene 147 volcanes activos — el PVMBG (Pusat Vulkanologi dan Mitigasi Bencana Geologi) monitorea el riesgo volcánico. Las inundaciones anuales en Jakarta y Java (banjir) afectan a millones de personas. Indonesia tiene 17.000+ islas habitadas que crean desafíos únicos de comunicación y coordinación para emergencias, especialmente en Papua, Maluku y las Islas Exteriores. El clima tropical con monzones, tifones en el Pacífico Norte y la actividad sísmica crean un entorno de múltiples amenazas concurrentes.',
    },
    {
      question: '¿Cuál es el marco de protección de datos para software de seguridad pública en Indonesia?',
      answer: 'Indonesia promulgó su primera ley integral de protección de datos con la UU PDP (Undang-Undang Perlindungan Data Pribadi — Ley de Protección de Datos Personales No. 27/2022), que entró en vigor plenamente en octubre de 2024 tras un período de transición de 2 años. El órgano supervisor de la UU PDP es el KOMDP (Komite Pelindungan Data Pribadi — Comité de Protección de Datos Personales), bajo el Ministerio de Comunicaciones e Informática (Kominfo — ahora Kementerian Komunikasi dan Digital/Komdigi). La UU PDP es similar al RGPD en muchos aspectos: requiere bases legales para el tratamiento, derechos de los titulares, notificación de brechas y sanciones. Los sistemas de vigilancia de la Polri y los datos del BNPB están sujetos a las regulaciones del KOMDP/Komdigi. La transferencia internacional de datos requiere garantías equivalentes de protección. Los datos biométricos (reconocimiento facial en cámaras CCTV de la Polri) son categoría especial bajo la UU PDP. El Peraturan Pemerintah (PP) sobre seguridad de datos del sector público complementa la UU PDP para los sistemas gubernamentales.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Indonesia?',
      answer: 'La contratación pública en Indonesia se rige por la Peraturan Presiden (Perpres) N° 16/2018 sobre Adquisición de Bienes y Servicios Gubernamentales, modificada por Perpres N° 12/2021. El LKPP (Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah — Agencia de Políticas de Adquisición del Gobierno) es el organismo regulador de las compras públicas. Las licitaciones se publican en el SPSE (Sistem Pengadaan Secara Elektronik — Sistema de Adquisición Electrónica), accesible en lpse.lkpp.go.id. El e-Katalog (Katalog Elektronik LKPP) permite la compra directa sin licitación para categorías preaprobadas — los sistemas TIC de gobierno incluidos. La Polri publica sus propias licitaciones en LPSE Polri. El BNPB y los BPBD provinciales tienen sus propios presupuestos de adquisición. Los proyectos Smart City en las 100 ciudades inteligentes indonesias (Program 100 Kota Cerdas) son financiados por el APBN (Anggaran Pendapatan dan Belanja Negara — Presupuesto Nacional), los APBD provinciales y municipales, y préstamos de bancos multilaterales (ADB, Banco Mundial).',
    },
    {
      question: '¿Cuáles son los requisitos de ciberseguridad para software de seguridad pública en Indonesia?',
      answer: 'La ciberseguridad en Indonesia está coordinada por el BSSN (Badan Siber dan Sandi Negara — Agencia Nacional de Ciberseguridad y Criptografía), creada en 2017. El BSSN emite directrices de seguridad cibernética para infraestructuras críticas de información (IKN — Infrastruktur Kritis Nasional) y opera el IDCERT (Indonesia Computer Emergency Response Team) para respuesta a incidentes. La PP N° 71/2019 (Reglamento sobre Implementación de Sistemas y Transacciones Electrónicas) establece los estándares de seguridad para los sistemas de información del gobierno. Los sistemas de la Polri y el BNPB están clasificados como infraestructuras críticas nacionales y deben cumplir los estándares del BSSN. Perpres N° 82/2022 (Perlindungan Infrastruktur Informasi Kritis) establece el marco de protección de infraestructuras críticas de información. La Polri también tiene la Subdirektorat Siber (Subditsiber) para la investigación de cibercrímenes. Indonesia fue víctima de varios ciberataques de alto perfil contra infraestructuras gubernamentales (PDNS 2024), lo que elevó la prioridad del BSSN.',
    },
    {
      question: '¿Qué proyectos Smart City y de digitalización de la seguridad pública existen en Indonesia?',
      answer: 'Indonesia impulsa la digitalización de la seguridad pública a través del programa 100 Kota Cerdas (100 Smart Cities), el PSN (Proyek Strategis Nasional — Proyectos Estratégicos Nacionales) y la transformación digital del gobierno de Jokowi/Prabowo. Jakarta tiene el JGIS (Jakarta Geographic Information System) y el Command Centre del BPTJ integrado con la Polda Metro Jaya y el BPBD DKI Jakarta para gestión de inundaciones (banjir). Surabaya tiene el Smart City Command Centre integrado con Damkar y la Polrestabes Surabaya. Bandung, Semarang y Makassar tienen centros de control urbano. El programa Safe City de la Polri (Sistem Pengawasan CCTV Terintegrasi) está expandiendo la red de CCTV con reconocimiento facial en ciudades principales. El BNPB moderniza su PUSDALOPS con tecnología GIS/IoT. El BMKG/InaTEWS integra datos sísmicos y de tsunamis en tiempo real con el sistema de alerta nacional INA-EWS. El programa Satu Data Indonesia (One Data Indonesia) impulsa la interoperabilidad de datos entre la Polri, el BNPB, el BASARNAS y los servicios locales.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la Polri, el BNPB y los servicios de emergencias de Indonesia?',
      answer: 'KabatOne integra las capacidades que la Polri, el BNPB, el BASARNAS y el PSC 119 necesitan unificadas: despacho CAD multiagencia compatible con las 34 Polda y los centros PUSDALOPS del BNPB — con integración de radiocomunicaciones digitales (TETRA/PDH) y preparación broadband, coordinación 110/113/119/112, gestión de desastres naturales (InaTEWS tsunamis, terremotos, inundaciones banjir Jakarta), compatible con el sistema SPGDT y los centros PSC 119 (K-Dispatch), gestión de cámaras CCTV de la Polri y sistemas ANPR con analítica IA conforme a la UU PDP No. 27/2022 y el KOMDP/Komdigi — con DPIA, base legal policial y gestión de retención (K-Video), y conciencia situacional GIS en tiempo real para la Polri, el BNPB, el BASARNAS y los BPBD provinciales — con datos InaTEWS/BMKG, niveles de inundación Jakarta, centros Smart City (Jakarta, Surabaya, Bandung) y el programa Satu Data Indonesia (K-Safety). Cloud con cumplimiento UU PDP/KOMDP y BSSN/Perpres 82/2022. Compatible con los marcos de contratación LKPP/SPSE/e-Katalog. Demo adaptada al modelo multiriesgo de Indonesia y la estructura Polda/BPBD.',
    },
  ] : [
    {
      question: 'How is public safety organised in Indonesia?',
      answer: 'Indonesia has a multi-tier public safety system under the central government. The Polri (Kepolisian Negara Republik Indonesia — National Police of Indonesia) is the national police force, organised across 34 Polda (provincial police headquarters) and over 500 Polres (district police headquarters). The BNPB (Badan Nasional Penanggulangan Bencana — National Disaster Management Authority) coordinates disaster response nationally, with BPBD (provincial/district disaster management agencies) in each province and kabupaten/kota. BASARNAS (National Search and Rescue Agency) manages SAR operations. Fire services are the Dinas Pemadam Kebakaran (Damkar), operated by local governments (kota/kabupaten). Ambulance services are managed by Dinas Kesehatan (municipal health services) and the PSC 119 (Public Safety Centre 119). Emergency numbers are 110 (police), 113 (fire), 119 (ambulance/PSC), and 112 (available).',
    },
    {
      question: 'How does emergency dispatch work in Indonesia? What is PSC 119?',
      answer: 'Indonesia operates emergency dispatch through multiple numbers: 110 (Polri), 113 (Damkar), 119 (ambulance/PSC), and 112 (available). PSC 119 (Public Safety Centre 119) is the Ministry of Health centralised medical emergency management system — equivalent to the European 112 for medical emergencies. SPGDT (Integrated Emergency Management Systems) operate at provincial and kabupaten/kota levels. Polri operations rooms (Ruang Situasi / SPKT) handle police dispatch. The BNPB operates PUSDALOPS (Operations Control Centre) to coordinate national disaster response. Integration between Polri, BNPB, and PSC 119 is an active modernisation area in the Indonesian Smart City programme. BMKG (Meteorology, Climatology, and Geophysics Agency) operates InaTEWS (Indonesia Tsunami Early Warning System) for real-time tsunami alerts.',
    },
    {
      question: 'What are the unique challenges of disaster management in Indonesia?',
      answer: 'Indonesia is one of the world\'s highest natural disaster risk countries due to its position on the Pacific "Ring of Fire." Earthquakes and tsunamis are the primary threat: the Indian Ocean tsunami (2004, 220,000 fatalities), Lombok earthquake (2018), Palu tsunami (2018, 4,000 fatalities), and Cianjur earthquake (2022) highlighted the critical need for real-time early warning and multi-agency dispatch systems. Indonesia has 147 active volcanoes monitored by PVMBG. Annual floods in Jakarta and Java (banjir) affect millions. Indonesia has 17,000+ inhabited islands creating unique communication and coordination challenges for emergencies, especially in Papua, Maluku, and the Outer Islands. The tropical climate with monsoons, Pacific typhoons, and seismic activity creates a multi-hazard concurrent environment.',
    },
    {
      question: 'What is the data protection framework for public safety software in Indonesia?',
      answer: 'Indonesia enacted its first comprehensive data protection law with UU PDP (Undang-Undang Perlindungan Data Pribadi — Personal Data Protection Law No. 27/2022), which came fully into force in October 2024 after a 2-year transition. The UU PDP supervisory body is the KOMDP (Komite Pelindungan Data Pribadi — Personal Data Protection Committee), under the Ministry of Communication and Digital (Komdigi, formerly Kominfo). UU PDP is similar to GDPR in many aspects: it requires legal bases for processing, data subject rights, breach notification, and penalties. Polri surveillance systems and BNPB data are subject to KOMDP/Komdigi regulations. International data transfers require equivalent protection guarantees. Biometric data (facial recognition in Polri CCTV cameras) is a special category under UU PDP.',
    },
    {
      question: 'How is public safety software procured in Indonesia?',
      answer: 'Indonesian public procurement is governed by Presidential Regulation (Perpres) No. 16/2018 on Government Procurement, amended by Perpres No. 12/2021. The LKPP (Government Procurement Policy Agency) is the procurement regulator. Tenders are published on the SPSE (Electronic Procurement System), accessible at lpse.lkpp.go.id. The e-Katalog (LKPP Electronic Catalogue) allows direct purchase without tender for pre-approved categories — government ICT systems included. Polri publishes its own tenders on LPSE Polri. BNPB and provincial BPBD have their own procurement budgets. Smart City projects in the 100 Indonesian smart cities (Program 100 Kota Cerdas) are funded by the APBN (National Budget), provincial/municipal APBD, and multilateral bank loans (ADB, World Bank).',
    },
    {
      question: 'What are the cybersecurity requirements for public safety software in Indonesia?',
      answer: 'Indonesian cybersecurity is coordinated by the BSSN (Badan Siber dan Sandi Negara — National Cyber and Crypto Agency), established in 2017. BSSN issues cybersecurity guidelines for Critical National Information Infrastructure (IKN) and operates IDCERT (Indonesia Computer Emergency Response Team). PP No. 71/2019 (Electronic Systems and Transactions) sets security standards for government information systems. Polri and BNPB systems are classified as national critical infrastructure and must comply with BSSN standards. Perpres No. 82/2022 (Critical Information Infrastructure Protection) establishes the framework for CII protection. Indonesia experienced several high-profile cyberattacks on government infrastructure (PDNS 2024), elevating BSSN priority.',
    },
    {
      question: 'Why is KabatOne suited for Indonesian Polri, BNPB, and emergency services?',
      answer: 'KabatOne integrates the capabilities that Polri, BNPB, BASARNAS, and PSC 119 need unified: multi-agency CAD dispatch compatible with all 34 Polda and BNPB PUSDALOPS centres — with digital radiocommunications (TETRA/PDH) integration and broadband readiness, 110/113/119/112 coordination, and natural disaster management (InaTEWS tsunamis, earthquakes, Jakarta banjir floods), compatible with SPGDT and PSC 119 centres (K-Dispatch), Polri CCTV camera and ANPR management with AI analytics compliant with UU PDP No. 27/2022 and KOMDP/Komdigi — with DPIA, police legal basis, and retention management (K-Video), and real-time GIS situational awareness for Polri, BNPB, BASARNAS, and provincial BPBD — with InaTEWS/BMKG data, Jakarta flood levels, Smart City centres (Jakarta, Surabaya, Bandung), and the Satu Data Indonesia programme (K-Safety). Cloud compliant with UU PDP/KOMDP and BSSN/Perpres 82/2022. Compatible with LKPP/SPSE/e-Katalog procurement frameworks. Demo adapted to Indonesia\'s multi-hazard model and Polda/BPBD structure.',
    },
  ]

  const articleHeadline = es
    ? 'Software de Seguridad Pública para Indonesia: Polri, BNPB/InaTEWS, UU PDP y BSSN/Ciberseguridad'
    : 'Public Safety Software for Indonesia: Polri, BNPB/InaTEWS, UU PDP & BSSN Cybersecurity'

  const articleDescription = es
    ? 'Plataforma unificada para la Polri, el BNPB y el PSC 119 — despacho CAD integrado para 34 Polda y gestión de desastres Ring of Fire, gestión de cámaras conforme a UU PDP, y cumplimiento BSSN con procurement LKPP/e-Katalog.'
    : 'Unified platform for Indonesian Polri, BNPB, and PSC 119 — integrated CAD dispatch for 34 Polda and Ring of Fire disaster management, UU PDP-compliant camera management, and BSSN compliance with LKPP/e-Katalog procurement.'

  const challenges = es ? [
    {
      icon: '🌋',
      title: 'Anillo de Fuego: terremotos, tsunamis y volcanes',
      desc: 'Con 147 volcanes activos, alta actividad sísmica y riesgo de tsunamis (Palu 2018, Lombok 2018, Cianjur 2022), Indonesia requiere plataformas de gestión de emergencias integradas con InaTEWS/BMKG, PVMBG y los PUSDALOPS del BNPB para respuesta en tiempo real multiagencia.',
    },
    {
      icon: '🏝️',
      title: '17.000+ islas y 34 Polda — coordinación descentralizada',
      desc: 'La distribución geográfica de 17.000+ islas habitadas y 34 Polda provinciales con autoridades locales autónomas (BPBD, Damkar, Dinas Kesehatan) crea desafíos únicos de coordinación interagencial para emergencias en Papua, Maluku, Kalimantan y las Islas Exteriores.',
    },
    {
      icon: '📋',
      title: 'UU PDP No. 27/2022 (oct. 2024) — primera ley privacidad',
      desc: 'Indonesia implementó su primera ley integral de protección de datos (UU PDP) con vigencia plena en octubre de 2024 — requiriendo cumplimiento urgente para los sistemas CCTV de la Polri con DPIA, base legal y gestión de datos biométricos bajo supervisión del KOMDP/Komdigi.',
    },
    {
      icon: '🏙️',
      title: '100 Kota Cerdas y modernización Smart City',
      desc: 'El programa 100 Smart Cities indonesio está modernizando los centros de comando de seguridad en Jakarta, Surabaya, Bandung, Semarang y Makassar — con requisitos de integración con el programa Satu Data Indonesia, los sistemas CCTV de la Polri y los centros PUSDALOPS del BNPB.',
    },
  ] : [
    {
      icon: '🌋',
      title: 'Ring of Fire: earthquakes, tsunamis and volcanoes',
      desc: 'With 147 active volcanoes, high seismic activity, and tsunami risk (Palu 2018, Lombok 2018, Cianjur 2022), Indonesia requires emergency management platforms integrated with InaTEWS/BMKG, PVMBG, and BNPB PUSDALOPS centres for real-time multi-agency response.',
    },
    {
      icon: '🏝️',
      title: '17,000+ islands and 34 Polda — decentralised coordination',
      desc: 'The geographic distribution of 17,000+ inhabited islands and 34 provincial Polda with autonomous local authorities (BPBD, Damkar, Dinas Kesehatan) creates unique inter-agency coordination challenges for emergencies in Papua, Maluku, Kalimantan, and the Outer Islands.',
    },
    {
      icon: '📋',
      title: 'UU PDP No. 27/2022 (Oct. 2024) — first privacy law',
      desc: 'Indonesia enacted its first comprehensive data protection law (UU PDP) with full enforcement in October 2024 — requiring urgent compliance for Polri CCTV systems with DPIA, legal basis, and biometric data management under KOMDP/Komdigi supervision.',
    },
    {
      icon: '🏙️',
      title: '100 Smart Cities and digital modernisation',
      desc: 'Indonesia\'s 100 Kota Cerdas programme is modernising security command centres in Jakarta, Surabaya, Bandung, Semarang, and Makassar — with integration requirements for the Satu Data Indonesia programme, Polri CCTV systems, and BNPB PUSDALOPS centres.',
    },
  ]

  const stats = es ? [
    { value: '34', label: 'Polda Provinciales / Polri' },
    { value: '110/119', label: 'Números de emergencia' },
    { value: '147', label: 'Volcanes activos' },
    { value: 'UU PDP', label: 'Primera ley privacidad 2024' },
  ] : [
    { value: '34', label: 'Provincial Polda / Polri' },
    { value: '110/119', label: 'Emergency numbers' },
    { value: '147', label: 'Active volcanoes' },
    { value: 'UU PDP', label: 'First privacy law 2024' },
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
            {es ? 'Guía de Mercado · Indonesia' : 'Market Guide · Indonesia'}
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, lineHeight: 1.2, margin: '0 0 20px' }}>
            {es
              ? 'Software de Seguridad Pública para Indonesia'
              : 'Public Safety Software for Indonesia'}
          </h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.9, maxWidth: 680, margin: '0 auto 32px' }}>
            {es
              ? 'Polri, BNPB/InaTEWS, PSC 119, 34 Polda, Anillo de Fuego, UU PDP y BSSN — plataforma unificada para la seguridad pública del mayor archipiélago del mundo.'
              : 'Polri, BNPB/InaTEWS, PSC 119, 34 Polda, Ring of Fire, UU PDP & BSSN — unified platform for the world\'s largest archipelago public safety.'}
          </p>
          <Link
            href="/contact"
            style={{ background: ACCENT, color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}
          >
            {es ? 'Solicitar Demo para Indonesia' : 'Request Indonesia Demo'}
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
            {es ? 'Desafíos del Mercado Indonesio de Seguridad Pública' : 'Indonesian Public Safety Market Challenges'}
          </h2>
          <p style={{ color: '#475569', marginBottom: 36 }}>
            {es
              ? 'La posición de Indonesia en el Anillo de Fuego, su geografía de 17.000+ islas, la primera ley de protección de datos (UU PDP, oct. 2024) y el programa 100 Smart Cities crean un mercado de seguridad pública de alto dinamismo y complejidad única.'
              : 'Indonesia\'s position on the Ring of Fire, its 17,000+ island geography, the first data protection law (UU PDP, Oct. 2024), and the 100 Smart Cities programme create a highly dynamic public safety market with unique complexity.'}
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
            {es ? 'Cómo KabatOne Unifica la Seguridad Pública Indonesa' : 'How KabatOne Unifies Indonesian Public Safety'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
            {[
              {
                title: es ? 'K-Dispatch: Despacho CAD Polri/BNPB/PSC 119' : 'K-Dispatch: Polri/BNPB/PSC 119 CAD Dispatch',
                desc: es
                  ? 'Despacho integrado para las 34 Polda y los PUSDALOPS del BNPB — con integración TETRA/PDH y preparación broadband, coordinación 110/113/119/112, gestión de desastres naturales (InaTEWS tsunamis, terremotos, banjir Jakarta), compatible con SPGDT y PSC 119.'
                  : 'Integrated dispatch for all 34 Polda and BNPB PUSDALOPS centres — with TETRA/PDH integration and broadband readiness, 110/113/119/112 coordination, natural disaster management (InaTEWS tsunamis, earthquakes, Jakarta banjir), compatible with SPGDT and PSC 119.',
              },
              {
                title: es ? 'K-Safety: Ring of Fire y Smart City Indonesia' : 'K-Safety: Ring of Fire and Smart City Indonesia',
                desc: es
                  ? 'Conciencia situacional en tiempo real integrada con InaTEWS/BMKG (tsunamis/sismos), datos PVMBG (volcanes), niveles de inundación Jakarta y centros Smart City (Jakarta JGIS, Surabaya, Bandung) — con coordinación BNPB/BPBD provincial y el programa Satu Data Indonesia.'
                  : 'Real-time situational awareness integrated with InaTEWS/BMKG (tsunamis/earthquakes), PVMBG volcanic data, Jakarta flood levels, and Smart City centres (Jakarta JGIS, Surabaya, Bandung) — with BNPB/provincial BPBD coordination and the Satu Data Indonesia programme.',
              },
              {
                title: es ? 'K-Video: Cámaras Polri conforme a UU PDP' : 'K-Video: Polri Cameras UU PDP-Compliant',
                desc: es
                  ? 'Gestión centralizada de las cámaras CCTV de la Polri y sistemas ANPR con analítica IA conforme a la UU PDP No. 27/2022 y el KOMDP/Komdigi — con DPIA, base legal policial, gestión de retención y cumplimiento BSSN/Perpres 82/2022 para sistemas IKN.'
                  : 'Centralised management of Polri CCTV cameras and ANPR systems with AI analytics compliant with UU PDP No. 27/2022 and KOMDP/Komdigi — with DPIA, police legal basis, retention management, and BSSN/Perpres 82/2022 compliance for IKN systems.',
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
            {es ? 'Preguntas Frecuentes: Seguridad Pública en Indonesia' : 'FAQ: Public Safety in Indonesia'}
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
              { href: '/resources/public-safety-software-singapore', label: es ? 'Singapur' : 'Singapore' },
              { href: '/resources/public-safety-software-india', label: es ? 'India' : 'India' },
              { href: '/resources/public-safety-software-thailand', label: es ? 'Tailandia' : 'Thailand' },
              { href: '/resources/public-safety-software-south-korea', label: es ? 'Corea del Sur' : 'South Korea' },
              { href: '/resources/public-safety-software-australia', label: es ? 'Australia' : 'Australia' },
              { href: '/resources/public-safety-software-japan', label: es ? 'Japón' : 'Japan' },
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
        h2={es ? '¿Listo para Modernizar la Seguridad Pública en Indonesia?' : 'Ready to Modernise Public Safety in Indonesia?'}
        subtitle={es
          ? 'Demo personalizada para la Polri y el BNPB — adaptada a las 34 Polda, gestión de desastres Ring of Fire, 100 Kota Cerdas y cumplimiento UU PDP/BSSN.'
          : 'Personalised demo for Polri and BNPB — tailored to 34 Polda, Ring of Fire disaster management, 100 Kota Cerdas, and UU PDP/BSSN compliance.'}
      />
      <Footer es={es} />
    </>
  )
}
