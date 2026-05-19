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
  return generatePageMetadata('publicSafetySoftwareTurkey', locale)
}

export default async function PublicSafetySoftwareTurkeyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-turkey/`
    : `${baseUrl}/resources/public-safety-software-turkey/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Türkiye' : 'Public Safety Software — Türkiye', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Türkiye?',
      answer: 'Türkiye organiza su seguridad pública bajo el Ministerio del Interior (İçişleri Bakanlığı). La Dirección General de Seguridad (EGM — Emniyet Genel Müdürlüğü) es la policía nacional civil, responsable de las zonas urbanas con más de 50,000 habitantes — con ~250,000 efectivos. La Gendarmería (Jandarma Genel Komutanlığı) es una fuerza de gendarmería militarizada responsable de las zonas rurales, bajo el Ministerio del Interior desde 2016 (anteriormente bajo el Ministerio de Defensa). La Guardia Costera (Sahil Güvenlik) opera bajo el Ministerio del Interior. La Agencia de Gestión de Desastres y Emergencias (AFAD — Afet ve Acil Durum Yönetimi Başkanlığı) coordina las emergencias nacionales — terremotos (Türkiye está en una de las zonas sísmicas más activas del mundo), inundaciones y catástrofes. El número de emergencia unificado es 112 desde 2012 — operado por los Centros de Emergencias 112 (112 Acil Çağrı Merkezi) presentes en cada una de las 81 provincias. El Servicio de Inteligencia Nacional (MİT) y la Dirección de Lucha contra el Terrorismo (TEM) operan bajo el Ministerio del Interior.',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Türkiye? ¿Qué son los centros 112 y cómo se integran las fuerzas?',
      answer: 'Türkiye opera el número unificado 112 desde 2012, absorbiendo los anteriores 155 (policía), 156 (gendarmería), 110 (bomberos) y 112 (ambulancias) en un sistema integrado. Los 81 Centros de Emergencias 112 (112 Acil Çağrı Merkezi) — uno por provincia — reciben todas las llamadas de emergencia y despachan a policía (EGM), gendarmería (Jandarma), bomberos (itfaiye), ambulancias (UMKE/112 acil tıp) y el AFAD. Los centros MOBESE (Mobil Elektronik Sistem Entegrasyonu — Sistema de Integración de Video Urbano) son los sistemas de videovigilancia urbana municipal integrados con los centros operativos de la EGM en las grandes ciudades. El sistema KOM (Kaçakçılık ve Organize Suç Şube Müdürlükleri) coordina las operaciones policiales contra el crimen organizado. İstanbul, capital económica con 16 millones de habitantes, tiene el sistema de seguridad urbana más sofisticado de Türkiye — con miles de cámaras MOBESE, ANPR y centros de mando policial avanzados.',
    },
    {
      question: '¿Qué papel juega la gestión de terremotos en la tecnología de seguridad pública turca?',
      answer: 'Türkiye está ubicada en una de las zonas sísmicas más activas del mundo — los terremotos de Kahramanmaraş de febrero de 2023 (Mw 7.8 y 7.7, ~56,000 muertos, el mayor desastre natural del siglo en Türkiye) transformaron la gestión de emergencias. El AFAD fue reforzado masivamente con inversión en sistemas de gestión de catástrofes, comunicaciones de emergencia redundantes (AFAD-NET), sistemas de alerta temprana sísmica, centros de coordinación móviles y plataformas de gestión de información de desastres. El AKOM (Centro de Gestión de Desastres de İstanbul) de la Municipalidad Metropolitana de İstanbul es uno de los más avanzados de Türkiye — con videovigilancia integrada, análisis de riesgo sísmico y sistemas de alerta ciudadana. Las ciudades de alto riesgo sísmico (İstanbul, İzmir, Bursa) tienen planes de resiliencia urbana que incluyen tecnología de gestión de crisis integrada. El AFAD-CIMER gestiona las comunicaciones de crisis ciudadanas.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Türkiye?',
      answer: 'La contratación pública en Türkiye se rige por la Ley de Contratación Pública (Kamu İhale Kanunu — Ley 4734, vigente desde 2002 con modificaciones). Los contratos se publican en la plataforma EKAP (Elektronik Kamu Alımları Platformu — Plataforma Electrónica de Compras Públicas, ekap.kik.gov.tr), gestionada por la Autoridad de Contratación Pública (KİK — Kamu İhale Kurumu). La EGM y la Jandarma licitan directamente sus sistemas tecnológicos bajo el Ministerio del Interior. El AFAD licita los sistemas de gestión de catástrofes. Las Municipalidades Metropolitanas licitan independientemente los sistemas MOBESE y de seguridad urbana. El Ministerio de Salud licita los sistemas de despacho de ambulancias 112. Los contratos de defensa y seguridad sensibles pueden quedar exentos de los procedimientos de licitación ordinarios. Las grandes municipalidades (İstanbul, Ankara, İzmir) tienen sus propios presupuestos de tecnología y son compradores activos de soluciones de seguridad pública.',
    },
    {
      question: '¿Cuáles son los requisitos de protección de datos y ciberseguridad para software policial en Türkiye?',
      answer: 'El software de seguridad pública en Türkiye debe cumplir la Ley de Protección de Datos Personales (KVKK — Kişisel Verilerin Korunması Kanunu, Ley 6698 de 2016). La autoridad supervisora es el KVKK Kurumu (Comité de Protección de Datos Personales). Los sistemas policiales están sujetos adicionalmente a la Ley de Policía (Polis Vazife ve Salahiyet Kanunu), la Ley de Jandarma y las circulares del Ministerio del Interior. Para ciberseguridad, el BTK (Bilgi Teknolojileri ve İletişim Kurumu — Autoridad de Tecnologías de la Información y Comunicación) regula la ciberseguridad junto con el USOM (Ulusal Siber Olaylara Müdahale Merkezi — Centro Nacional de Respuesta a Incidentes Cibernéticos, equivalente al CERT nacional). La Presidencia de Estrategia Digital y Transformación de Türkiye impulsa la digitalización gubernamental. Los sistemas críticos del gobierno deben cumplir el marco de ciberseguridad del BTK/USOM y los estándares ISO 27001 (BGYS). La soberanía de datos — almacenamiento local o en Türkiye — es un requisito creciente para sistemas gubernamentales sensibles.',
    },
    {
      question: '¿Qué son los sistemas MOBESE y cómo funciona la videovigilancia urbana en Türkiye?',
      answer: 'MOBESE (Mobil Elektronik Sistem Entegrasyonu — Sistema de Integración Electrónica Móvil) es el sistema de videovigilancia urbana municipal integrado con la EGM, desarrollado a partir de 2007 en İstanbul y extendido a la mayoría de las grandes ciudades turcas. İstanbul cuenta con miles de cámaras MOBESE integradas en el Centro de Mando Policial de İstanbul (İstanbul Emniyet Müdürlüğü) y el AKOM. Ankara, İzmir, Bursa, Adana y otras ciudades tienen sistemas similares. El sistema TEDES (Trafik Elektronik Denetleme Sistemi) para control de velocidad y el sistema KGYS (Kentsel Güvenlik Yönetim Sistemi — Sistema de Gestión de Seguridad Urbana) complementan el MOBESE. Reconocimiento de matrículas (plaka tanıma) está integrado en las autopistas (OGS/HGS). El sistema POLNET conecta las bases de datos policiales nacionales. La integración de analítica IA en los sistemas MOBESE existentes es la principal tendencia de modernización en las ciudades turcas.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la EGM, la Jandarma, el AFAD 112 y los sistemas MOBESE de Türkiye?',
      answer: 'KabatOne integra las capacidades que la EGM, la Jandarma, el AFAD y las municipalidades turcas necesitan unificadas: despacho CAD multiagencia compatible con los 81 centros 112 provinciales — con clasificación automática de incidentes, asignación de recursos EGM-Jandarma-itfaiye-ambulancias y coordinación AFAD para gestión de terremotos y catástrofes, conforme al modelo turco de despacho unificado (K-Dispatch), gestión unificada de redes MOBESE y sistemas ANPR/plaka tanıma con analítica IA — reconocimiento de placas, detección de comportamientos, búsqueda forense — cumpliendo la KVKK y las directrices del BTK/USOM (K-Video), y conciencia situacional GIS compartida entre EGM, Jandarma, AFAD y municipalidades para coordinación en emergencias sísmicas, operaciones antiterroristas y gestión de grandes eventos urbanos — compatible con las plataformas AKOM (K-Safety). Almacenamiento de datos en Türkiye con cumplimiento KVKK. Demo adaptada al modelo 112 unificado y los sistemas MOBESE/KGYS turcos.',
    },
  ] : [
    {
      question: 'How is public safety organised in Türkiye?',
      answer: 'Türkiye organises its public safety under the Ministry of Interior (İçişleri Bakanlığı). The General Directorate of Security (EGM — Emniyet Genel Müdürlüğü) is the national civil police, responsible for urban areas with over 50,000 inhabitants — with ~250,000 officers. The Gendarmerie (Jandarma Genel Komutanlığı) is a militarised gendarmerie force responsible for rural areas, under the Ministry of Interior since 2016 (previously under the Ministry of Defence). The Coast Guard (Sahil Güvenlik) operates under the Ministry of Interior. The Disaster and Emergency Management Authority (AFAD — Afet ve Acil Durum Yönetimi Başkanlığı) coordinates national emergencies — earthquakes (Türkiye is in one of the world\'s most seismically active zones), floods, and disasters. The unified emergency number is 112 since 2012 — operated by 112 Emergency Call Centres (112 Acil Çağrı Merkezi) in each of the 81 provinces. The National Intelligence Organisation (MİT) and the Counter-Terrorism Department (TEM) operate under the Ministry of Interior.',
    },
    {
      question: 'How does emergency dispatch work in Türkiye? What are the 112 centres and how are forces integrated?',
      answer: 'Türkiye has operated the unified 112 number since 2012, absorbing the former 155 (police), 156 (gendarmerie), 110 (fire), and 112 (ambulance) into an integrated system. The 81 Emergency Centres 112 (112 Acil Çağrı Merkezi) — one per province — receive all emergency calls and dispatch police (EGM), gendarmerie (Jandarma), fire (itfaiye), ambulance (UMKE/112 emergency medicine), and AFAD. MOBESE (Mobil Elektronik Sistem Entegrasyonu — Mobile Electronic System Integration) centres are the municipal urban surveillance systems integrated with EGM operations centres in major cities. The KOM system (Kaçakçılık ve Organize Suç — Smuggling and Organised Crime) coordinates police operations against organised crime. İstanbul, the economic capital with 16 million people, has Türkiye\'s most sophisticated urban security system — thousands of MOBESE cameras, ANPR, and advanced police command centres.',
    },
    {
      question: 'What role does earthquake management play in Turkish public safety technology?',
      answer: 'Türkiye is located in one of the world\'s most seismically active zones — the Kahramanmaraş earthquakes of February 2023 (Mw 7.8 and 7.7, ~56,000 deaths, the worst natural disaster of the century in Türkiye) transformed emergency management. AFAD was massively reinforced with investment in disaster management systems, redundant emergency communications (AFAD-NET), early earthquake warning systems, mobile coordination centres, and disaster information management platforms. The AKOM (İstanbul Disaster Management Centre) of the Metropolitan Municipality of İstanbul is one of Türkiye\'s most advanced — with integrated surveillance, seismic risk analysis, and citizen alert systems. High seismic risk cities (İstanbul, İzmir, Bursa) have urban resilience plans incorporating integrated crisis management technology. AFAD-CIMER manages citizen crisis communications.',
    },
    {
      question: 'How is public safety software procured in Türkiye?',
      answer: 'Turkish public procurement is governed by the Public Procurement Law (Kamu İhale Kanunu — Law 4734, in force since 2002 with amendments). Contracts are published on the EKAP platform (Elektronik Kamu Alımları Platformu — Electronic Public Procurement Platform, ekap.kik.gov.tr), managed by the Public Procurement Authority (KİK — Kamu İhale Kurumu). EGM and Jandarma directly procure their technology systems under the Ministry of Interior. AFAD procures disaster management systems. Metropolitan Municipalities independently procure MOBESE and urban security systems. The Ministry of Health procures 112 ambulance dispatch systems. Sensitive defence and security contracts may be exempt from standard tendering procedures. Major municipalities (İstanbul, Ankara, İzmir) have their own technology budgets and are active buyers of public safety solutions.',
    },
    {
      question: 'What are the data protection and cybersecurity requirements for public safety software in Türkiye?',
      answer: 'Public safety software in Türkiye must comply with the Personal Data Protection Law (KVKK — Kişisel Verilerin Korunması Kanunu, Law 6698 of 2016). The supervisory authority is the KVKK Board (Personal Data Protection Board). Police systems are additionally subject to the Police Duties and Powers Law (Polis Vazife ve Salahiyet Kanunu), the Gendarmerie Law, and Ministry of Interior circulars. For cybersecurity, the BTK (Bilgi Teknolojileri ve İletişim Kurumu — Information Technologies and Communication Authority) regulates cybersecurity alongside the USOM (National Cyber Incident Response Centre — national CERT equivalent). The Presidential Digital Strategy and Transformation drives government digitalisation. Critical government systems must meet BTK/USOM cybersecurity frameworks and ISO 27001 (BGYS) standards. Data sovereignty — local or Turkey-based storage — is an increasingly required standard for sensitive government systems.',
    },
    {
      question: 'What are MOBESE systems and how does urban surveillance work in Türkiye?',
      answer: 'MOBESE (Mobil Elektronik Sistem Entegrasyonu — Mobile Electronic System Integration) is the municipal urban video surveillance system integrated with EGM, developed from 2007 in İstanbul and extended to most major Turkish cities. İstanbul has thousands of MOBESE cameras integrated with the İstanbul Police Command Centre (İstanbul Emniyet Müdürlüğü) and AKOM. Ankara, İzmir, Bursa, Adana, and other cities have similar systems. The TEDES system (traffic electronic monitoring) for speed control and the KGYS (Kentsel Güvenlik Yönetim Sistemi — Urban Security Management System) complement MOBESE. Licence plate recognition (plaka tanıma) is integrated on motorways (OGS/HGS). The POLNET system connects national police databases. Integrating AI analytics into existing MOBESE systems is the primary modernisation trend in Turkish cities.',
    },
    {
      question: 'Why is KabatOne suited for Turkish EGM, Jandarma, AFAD 112, and MOBESE systems?',
      answer: 'KabatOne integrates the capabilities that EGM, Jandarma, AFAD, and Turkish municipalities need unified: multi-agency CAD dispatch compatible with all 81 provincial 112 centres — with automatic incident classification, EGM-Jandarma-itfaiye-ambulance resource assignment, and AFAD coordination for earthquake and disaster management, compliant with the Turkish unified dispatch model (K-Dispatch), unified management of MOBESE networks and ANPR/plaka tanıma systems with AI analytics — plate recognition, behaviour detection, forensic search — meeting KVKK and BTK/USOM guidelines (K-Video), and shared GIS situational awareness across EGM, Jandarma, AFAD, and municipalities for earthquake emergencies, counter-terrorism, and major urban event management — compatible with AKOM platforms (K-Safety). Turkey-based data storage with KVKK compliance. Demo adapted to the Turkish unified 112 model and MOBESE/KGYS systems.',
    },
  ]

  const articleHeadline = es
    ? 'Software de Seguridad Pública para Türkiye: EGM/Jandarma, AFAD 112, MOBESE/KGYS, KVKK y BTK/USOM'
    : 'Public Safety Software for Türkiye: EGM/Jandarma, AFAD 112, MOBESE/KGYS, KVKK & BTK/USOM'

  const articleDescription = es
    ? 'Plataforma unificada para la EGM y la Jandarma turcas, los 81 centros 112 del AFAD y las redes MOBESE municipales — despacho CAD integrado con coordinación sísmica/AFAD, gestión de videovigilância MOBESE y ANPR conforme a KVKK, y cumplimiento de ciberseguridad BTK/USOM.'
    : 'Unified platform for Turkish EGM and Jandarma, 81 AFAD 112 centres, and municipal MOBESE networks — integrated CAD dispatch with seismic/AFAD coordination, MOBESE urban surveillance and ANPR management compliant with KVKK, and BTK/USOM cybersecurity compliance.'

  const challenges = es ? [
    {
      icon: '🚔',
      title: 'Modelo dual EGM/Jandarma y 81 centros 112 unificados',
      desc: 'Coordinar las operaciones de la EGM (zonas urbanas, ~250K) y la Jandarma (zonas rurales) a través de los 81 centros 112 provinciales unificados — el sistema de despacho integrado más grande de la región.',
    },
    {
      icon: '🌍',
      title: 'Gestión de terremotos, AFAD y resiliencia urbana İstanbul',
      desc: 'Integrar el AFAD y el AKOM de İstanbul para la gestión de emergencias sísmicas — el mayor riesgo de Türkiye tras los terremotos de 2023 — con sistemas de alerta temprana, posicionamiento de recursos y coordinación multiagencia en tiempo real.',
    },
    {
      icon: '📷',
      title: 'MOBESE/KGYS, plaka tanıma/ANPR y cumplimiento KVKK',
      desc: 'Gestionar las redes MOBESE y sistemas ANPR (plaka tanıma) de İstanbul y las grandes ciudades con analítica IA, cumpliendo la KVKK (Ley de Protección de Datos) y los requisitos del BTK — con soberanía de datos y almacenamiento en Türkiye.',
    },
    {
      icon: '🔒',
      title: 'KVKK, BTK/USOM, ISO 27001 y soberanía de datos',
      desc: 'Cumplir la KVKK, el marco de ciberseguridad BTK/USOM, ISO 27001 (BGYS) y los requisitos de soberanía de datos del gobierno turco — con almacenamiento local o en nube certificada en Türkiye y procurement vía EKAP/KİK.',
    },
  ] : [
    {
      icon: '🚔',
      title: 'Dual EGM/Jandarma model and 81 unified 112 centres',
      desc: 'Coordinating EGM (urban areas, ~250K officers) and Jandarma (rural areas) operations through 81 unified provincial 112 centres — the largest integrated dispatch system in the region.',
    },
    {
      icon: '🌍',
      title: 'Earthquake management, AFAD, and İstanbul urban resilience',
      desc: 'Integrating AFAD and İstanbul AKOM for seismic emergency management — Türkiye\'s greatest risk after the 2023 earthquakes — with early warning systems, resource positioning, and real-time multi-agency coordination.',
    },
    {
      icon: '📷',
      title: 'MOBESE/KGYS, plaka tanıma/ANPR and KVKK compliance',
      desc: 'Managing MOBESE networks and ANPR (plaka tanıma) systems in İstanbul and major cities with AI analytics, complying with KVKK (Data Protection Law) and BTK requirements — with data sovereignty and Turkey-based storage.',
    },
    {
      icon: '🔒',
      title: 'KVKK, BTK/USOM, ISO 27001 and data sovereignty',
      desc: 'Meeting KVKK, BTK/USOM cybersecurity framework, ISO 27001 (BGYS), and Turkish government data sovereignty requirements — with local or Turkey-certified cloud storage and EKAP/KİK procurement.',
    },
  ]

  const stats = es ? [
    { value: '81', label: 'Centros 112 Provinciales (AFAD)' },
    { value: 'EGM+Jan.', label: '~400K Efectivos (Urbano + Rural)' },
    { value: '85M', label: 'Habitantes, 5ª Ciudad İstanbul 16M' },
    { value: 'MOBESE', label: 'Videovigilancia Urbana Nacional' },
  ] : [
    { value: '81', label: 'Provincial 112 Centres (AFAD)' },
    { value: 'EGM+Jan.', label: '~400K Officers (Urban + Rural)' },
    { value: '85M', label: 'People, İstanbul 5th-largest city 16M' },
    { value: 'MOBESE', label: 'National Urban Surveillance' },
  ]

  const title = es
    ? 'Software de Seguridad Pública para Türkiye'
    : 'Public Safety Software for Türkiye'

  const subtitle = es
    ? 'EGM + Jandarma · AFAD 81 Centros 112 · MOBESE/KGYS · KVKK · BTK/USOM · Gestión de Terremotos · EKAP/KİK'
    : 'EGM + Jandarma · AFAD 81 × 112 Centres · MOBESE/KGYS · KVKK · BTK/USOM · Earthquake Management · EKAP/KİK'

  const intro = es
    ? 'Türkiye — 85 millones de habitantes con İstanbul como una de las 5 ciudades más grandes del mundo — opera el sistema de despacho 112 unificado más grande de la región con 81 centros provinciales coordinando la EGM (~250K agentes urbanos), la Jandarma (rural) y el AFAD (gestión de catástrofes sísmicas). Los sistemas MOBESE de videovigilancia urbana cubren las grandes ciudades con miles de cámaras integradas en los centros de mando de la EGM. KabatOne proporciona la plataforma CAD, vídeo y GIS adaptada al modelo turco 112 unificado, integrada con los sistemas MOBESE/KGYS y conforme a la KVKK con soberanía de datos local.'
    : 'Türkiye — 85 million people with İstanbul as one of the world\'s 5 largest cities — operates the region\'s largest unified 112 dispatch system with 81 provincial centres coordinating EGM (~250K urban officers), Jandarma (rural), and AFAD (seismic disaster management). MOBESE urban surveillance systems cover major cities with thousands of cameras integrated into EGM command centres. KabatOne delivers the CAD, video, and GIS platform adapted to the Turkish unified 112 model, integrated with MOBESE/KGYS systems, and compliant with KVKK with local data sovereignty.'

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleSchema(articleHeadline, articleDescription, pageUrl, '2026-05-19'),
            faqPageSchema(faqs),
            breadcrumbSchema(breadcrumbs),
          ]),
        }}
      />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%)', color: '#fff', padding: '80px 24px 60px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: '#93c5fd', marginBottom: 12 }}>
            {es ? 'Guía de Mercado · Türkiye' : 'Market Guide · Türkiye'}
          </p>
          <h1 style={{ fontSize: 'clamp(28px,5vw,48px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
            {title}
          </h1>
          <p style={{ fontSize: 16, color: '#93c5fd', marginBottom: 24, fontWeight: 500 }}>{subtitle}</p>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: '#cbd5e1', maxWidth: 720 }}>{intro}</p>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/demo" style={{ background: ACCENT, color: '#fff', padding: '12px 28px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
              {es ? 'Solicitar Demo' : 'Request Demo'}
            </Link>
            <Link href={es ? '/es/resources/' : '/resources/'} style={{ border: '1px solid #475569', color: '#cbd5e1', padding: '12px 28px', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>
              {es ? 'Ver Todos los Recursos' : 'View All Resources'}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#f8fafc', padding: '36px 24px', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 24 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: ACCENT }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section style={{ padding: '64px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>
            {es ? 'Desafíos Clave del Mercado Turco' : 'Key Challenges in the Turkish Market'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Los requisitos operativos únicos que definen la seguridad pública en Türkiye.'
              : 'The unique operational requirements that define public safety in Türkiye.'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {challenges.map((c) => (
              <div key={c.title} style={{ border: '1px solid #e2e8f0', borderRadius: 12, padding: '24px', background: '#f8fafc' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How KabatOne Works */}
      <section style={{ padding: '64px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>
            {es ? 'Cómo KabatOne Apoya a los Servicios Turcos de Seguridad Pública' : 'How KabatOne Supports Turkish Public Safety Services'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Una plataforma unificada adaptada al modelo EGM/Jandarma/AFAD, los sistemas MOBESE y la gestión de emergencias sísmicas.'
              : 'One unified platform adapted to the EGM/Jandarma/AFAD model, MOBESE systems, and seismic emergency management.'}
          </p>
          <div style={{ display: 'grid', gap: 20 }}>
            {[
              {
                product: 'K-Dispatch',
                color: '#eff6ff',
                border: '#bfdbfe',
                icon: '🚨',
                title: es ? 'Despacho CAD 112 unificado 81 provincias + coordinación AFAD sísmica' : 'Unified 112 CAD Dispatch 81 Provinces + AFAD Seismic Coordination',
                desc: es
                  ? 'CAD multiagencia compatible con los 81 centros 112 provinciales — clasificación automática de incidentes, asignación de recursos EGM-Jandarma-itfaiye-ambulancias y modo especial de gestión sísmica AFAD con rastreo masivo de recursos y áreas de impacto. Compatible con el sistema POLNET de la EGM y los protocolos de despacho del Ministerio del Interior turco.'
                  : 'Multi-agency CAD compatible with all 81 provincial 112 centres — automatic incident classification, EGM-Jandarma-itfaiye-ambulance resource assignment, and AFAD seismic management mode with mass resource tracking and impact areas. Compatible with EGM\'s POLNET system and Turkish Ministry of Interior dispatch protocols.',
              },
              {
                product: 'K-Video',
                color: '#f0fdf4',
                border: '#bbf7d0',
                icon: '📷',
                title: es ? 'Gestión MOBESE/KGYS, plaka tanıma/ANPR y cumplimiento KVKK' : 'MOBESE/KGYS Management, plaka tanıma/ANPR and KVKK Compliance',
                desc: es
                  ? 'Gestión unificada de redes MOBESE (İstanbul, Ankara, İzmir y otras ciudades) y sistemas ANPR (plaka tanıma) de autopistas con analítica IA — reconocimiento de matrículas, detección de comportamientos, búsqueda forense. Cumplimiento nativo de KVKK: consentimiento, gestión de retención, limitación de finalidad y almacenamiento de datos en Türkiye. Compatible con la integración AKOM de İstanbul.'
                  : 'Unified management of MOBESE networks (İstanbul, Ankara, İzmir, and other cities) and motorway ANPR (plaka tanıma) systems with AI analytics — plate recognition, behaviour detection, forensic search. Native KVKK compliance: consent, retention management, purpose limitation, and Turkey-based data storage. Compatible with İstanbul AKOM integration.',
              },
              {
                product: 'K-Safety',
                color: '#fefce8',
                border: '#fde68a',
                icon: '🗺️',
                title: es ? 'Conciencia situacional GIS para terremotos, AFAD y operaciones İstanbul' : 'GIS Situational Awareness for Earthquakes, AFAD, and İstanbul Operations',
                desc: es
                  ? 'Conciencia situacional GIS compartida entre EGM, Jandarma, AFAD y las grandes municipalidades — con capas de riesgo sísmico del AFAD, posicionamiento en tiempo real de recursos de todos los servicios, integración con el AKOM de İstanbul y los sistemas AFAD-NET. Vista de mando unificada para la gestión de megaterremotos (escenario Mw 7.0+ İstanbul), operaciones antiterroristas y grandes eventos (İstanbul Maratón, Año Nuevo, Boğaziçi Köprüsü festividades).'
                  : 'Shared GIS situational awareness across EGM, Jandarma, AFAD, and major municipalities — with AFAD seismic risk layers, real-time positioning of all service resources, İstanbul AKOM integration, and AFAD-NET systems. Unified command view for megaearthquake management (Mw 7.0+ İstanbul scenario), counter-terrorism, and major events (İstanbul Marathon, New Year, Boğaziçi Bridge festivities).',
              },
            ].map((item) => (
              <div key={item.product} style={{ background: item.color, border: `1px solid ${item.border}`, borderRadius: 12, padding: '24px', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 32, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{ background: ACCENT, color: '#fff', borderRadius: 6, padding: '2px 10px', fontSize: 12, fontWeight: 700 }}>{item.product}</span>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', margin: 0 }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '64px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>
            {es ? 'Preguntas Frecuentes — Seguridad Pública en Türkiye' : 'FAQ — Public Safety in Türkiye'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Respuestas a las preguntas más comunes sobre el mercado turco de seguridad pública.'
              : 'Answers to the most common questions about the Turkish public safety market.'}
          </p>
          <div style={{ display: 'grid', gap: 16 }}>
            {faqs.map((faq) => (
              <div key={faq.question} style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: '20px 24px', background: '#f8fafc' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>{faq.question}</h3>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section style={{ padding: '48px 24px', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: '#0f172a' }}>
            {es ? 'Guías de Mercado Relacionadas' : 'Related Market Guides'}
          </h2>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              { href: es ? '/es/resources/public-safety-software-middle-east/' : '/resources/public-safety-software-middle-east/', label: es ? 'Medio Oriente' : 'Middle East' },
              { href: es ? '/es/resources/public-safety-software-uae/' : '/resources/public-safety-software-uae/', label: es ? 'EAU' : 'UAE' },
              { href: es ? '/es/resources/public-safety-software-saudi-arabia/' : '/resources/public-safety-software-saudi-arabia/', label: es ? 'Arabia Saudita' : 'Saudi Arabia' },
              { href: es ? '/es/resources/public-safety-software-germany/' : '/resources/public-safety-software-germany/', label: es ? 'Alemania' : 'Germany' },
              { href: es ? '/es/resources/public-safety-software-poland/' : '/resources/public-safety-software-poland/', label: es ? 'Polonia' : 'Poland' },
              { href: es ? '/es/resources/public-safety-software-india/' : '/resources/public-safety-software-india/', label: es ? 'India' : 'India' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '8px 16px', fontSize: 14, color: ACCENT, fontWeight: 600, textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        es={es}
        h2={es ? 'Solicita una Demo para la EGM, la Jandarma, el AFAD o las Municipalidades de Türkiye' : 'Request a Demo for Turkish EGM, Jandarma, AFAD, or Municipalities'}
        subtitle={es ? 'KabatOne integra el despacho CAD 112 unificado para los 81 centros provinciales turcos — con coordinación AFAD para gestión de terremotos, gestión de redes MOBESE/KGYS y ANPR conforme a KVKK, y conciencia situacional GIS con capas de riesgo sísmico para el AKOM de İstanbul. Almacenamiento de datos en Türkiye con cumplimiento KVKK y BTK/USOM.' : 'KabatOne integrates unified 112 CAD dispatch for all 81 Turkish provincial centres — with AFAD earthquake management coordination, MOBESE/KGYS and ANPR network management compliant with KVKK, and GIS situational awareness with seismic risk layers for İstanbul AKOM. Turkey-based data storage with KVKK and BTK/USOM compliance.'}
      />
      <Footer es={es} />
    </>
  )
}
