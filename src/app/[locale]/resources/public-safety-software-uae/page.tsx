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
  return generatePageMetadata('publicSafetySoftwareUAE', locale)
}

export default async function PublicSafetySoftwareUAEPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-uae/`
    : `${baseUrl}/resources/public-safety-software-uae/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Emiratos Árabes Unidos' : 'Public Safety Software — UAE', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en los Emiratos Árabes Unidos?',
      answer: 'Los Emiratos Árabes Unidos son una federación de 7 emiratos, cada uno con su propia fuerza policial autónoma. Las principales son la Policía de Dubai (Dubai Police), la Policía de Abu Dhabi (Abu Dhabi Police — AAD) y la Policía de Sharjah. A nivel federal, el Ministerio del Interior (MOI) coordina la seguridad nacional y supervisa las fuerzas policiales emiratinas. El Servicio General de Inteligencia Estatal (SGIS / Al-Amarat) cubre inteligencia y contraterrorismo. El Servicio de Ambulancias de Dubai (DAS) y el NAMAT (National Ambulance) cubren las emergencias médicas. La Defensa Civil gestiona los incidentes de incendio. El número de emergencia unificado es el 999 para policía y el 998 para la Defensa Civil/bomberos en Dubai. Expo City Dubai y los planes estratégicos de los emiratos impulsan enormes inversiones en tecnología de seguridad pública.',
    },
    {
      question: '¿Qué es el Centro de Operaciones Policiales Integradas (IPOC) de Dubai y cómo funciona?',
      answer: 'El IPOC (Integrated Police Operations Centre) es el centro de operaciones más avanzado de la Policía de Dubai — uno de los más sofisticados del mundo. Integra en un solo dashboard la gestión de más de 50,000 cámaras CCTV, el despacho CAD de todas las patrullas, la analítica de tráfico en tiempo real, el reconocimiento de matrículas (ANPR), la detección de comportamientos sospechosos por IA y la coordinación con las ambulancias del DAS. La Policía de Dubai tiene un mandato estratégico de "Zero Crime" y utiliza IA predictiva para análisis del crimen. El sistema de inteligencia artificial Smart Palm utiliza reconocimiento facial y de vehículos integrado con el IPOC. Abu Dhabi opera el ADPOC (Abu Dhabi Police Operations Centre) con funciones similares bajo la AAD.',
    },
    {
      question: '¿Qué es la iniciativa Safe City en los EAU y cuáles son los proyectos destacados?',
      answer: 'Los EAU son el referente mundial de las iniciativas Safe City. Dubai Safe City (DSC) es el proyecto emblema de la Policía de Dubai — una red de 50,000+ cámaras inteligentes con analítica de IA gestionadas desde el IPOC. Abu Dhabi tiene el proyecto Safe City Abu Dhabi bajo la Policía de Abu Dhabi. Sharjah opera su propia red Safe City. A nivel federal, el programa UAE Smart Government y la visión nacional UAE 2031 impulsan la integración de tecnología de seguridad en todas las ciudades. La World Government Summit en Dubai es un escaparate de las tecnologías de ciudad segura. Los megaproyectos como la Expo City Dubai (legado de la Expo 2020), NEOM y los desarrollos de Abu Dhabi (Yas Island, Saadiyat) requieren soluciones de seguridad pública a gran escala.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en los EAU?',
      answer: 'La contratación pública en los EAU es descentralizada por emirato. Dubai compra a través del Departamento de Finanzas de Dubai (DOF) y el portal de licitaciones electrónicas DubaiTenders. Abu Dhabi usa el Sistema de Información de Contratos del Gobierno (ADPROCURE) bajo la Autoridad de Adquisiciones del Gobierno de Abu Dhabi (GPSA). La Policía de Dubai y la Policía de Abu Dhabi licitan directamente sus proyectos tecnológicos de gran escala (Safe City, IPOC, CAD) con procesos de licitación internacional (ICB). Los proyectos de seguridad pública suelen incluir criterios de Emiratización (porcentaje de ciudadanos emiratíes en la fuerza laboral) y en ocasiones requisitos de transferencia de tecnología. Las empresas internacionales suelen necesitar un agente local registrado (Local Service Agent o LLC) para participar en licitaciones gubernamentales. GITEX Technology Week y la World Police Summit en Dubai son eventos clave para el networking y presentación de soluciones.',
    },
    {
      question: '¿Cuáles son los requisitos de protección de datos y ciberseguridad para software policial en los EAU?',
      answer: 'El marco legal de datos en los EAU está en evolución. La Ley Federal de Protección de Datos Personales (PDPL, Federal Decree-Law No. 45 of 2021) es la ley general de privacidad de los EAU, gestionada por el UAE Data Office. Las zonas francas como el DIFC (Dubai International Financial Centre) y el ADGM (Abu Dhabi Global Market) tienen sus propias regulaciones de privacidad (DIFC DPL, ADGM DPR). Para ciberseguridad, la NESA (National Electronic Security Authority, ahora integrada en la UAE Cybersecurity Council) establece los estándares IAS (Information Assurance Standards) para sistemas gubernamentales. La UAE Cybersecurity Strategy 2031 refuerza los requisitos para infraestructuras críticas. Los sistemas policiales de los EAU requieren generalmente almacenamiento de datos en infraestructura local (data residency en EAU) y certificación de seguridad por la UAE Cybersecurity Council o las autoridades de cada emirato.',
    },
    {
      question: '¿Qué infraestructura de videovigilancia tienen los EAU y cuáles son los sistemas más avanzados?',
      answer: 'Los EAU tienen una de las infraestructuras de videovigilancia más avanzadas y densas del mundo. Dubai Safe City opera más de 50,000 cámaras inteligentes integradas con el IPOC, utilizando analítica de IA para reconocimiento de matrículas, detección de comportamientos y búsqueda forense. Abu Dhabi Safe City tiene una red de densidad similar bajo la Policía de Abu Dhabi. El sistema de reconocimiento facial de la Policía de Dubai ha sido ampliamente publicado como un referente mundial. Sharjah, Ajman y otros emiratos tienen redes Safe City propias. Las cámaras están conectadas a centros de operaciones que integran el despacho CAD, el tráfico y los sistemas de inteligencia criminal en tiempo real. La tecnología proveedora incluye empresas líderes mundiales de videovigilancia y AI analytics. Las nuevas expansiones urbanas (Expo City, Yas Island) requieren integración de decenas de miles de cámaras adicionales.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la Policía de Dubai, la Policía de Abu Dhabi y los proyectos Safe City de los EAU?',
      answer: 'KabatOne integra las funciones que la Policía de Dubai (IPOC), la Policía de Abu Dhabi (ADPOC) y los proyectos Safe City de los EAU gestionan a través de sistemas separados: despacho CAD unificado para las operaciones policiales de Dubai y Abu Dhabi con clasificación automática de incidentes, asignación de recursos por IA y coordinación con ambulancias DAS/NAMAT y Defensa Civil (K-Dispatch), gestión de 50,000+ cámaras inteligentes con analítica de IA — reconocimiento de matrículas ANPR, detección de comportamientos, reconocimiento facial, búsqueda forense — integrada con el IPOC/ADPOC y cumplimiento PDPL/NESA (K-Video), y conciencia situacional GIS compartida entre policía, Defensa Civil, EMS y autoridades de tráfico para coordinación en eventos masivos (Expo City, World Cup de fútbol, F1 Abu Dhabi Grand Prix) (K-Safety). Data residency en EAU, cumplimiento UAE Cybersecurity Council. Demo adaptada al modelo IPOC de Dubai Safe City y la visión UAE 2031.',
    },
  ] : [
    {
      question: 'How is public safety organised in the United Arab Emirates?',
      answer: 'The UAE is a federation of 7 emirates, each with its own autonomous police force. The main forces are Dubai Police, Abu Dhabi Police (AAD), and Sharjah Police. At the federal level, the Ministry of Interior (MOI) coordinates national security and oversees emirate police forces. The State Security Intelligence Service (SSIS) covers intelligence and counter-terrorism. Dubai Ambulance Service (DAS) and NAMAT (National Ambulance) cover medical emergencies. Civil Defence manages fire incidents. The unified emergency number is 999 for police and 998 for Civil Defence/fire in Dubai. Expo City Dubai and emirate strategic plans drive massive public safety technology investments.',
    },
    {
      question: 'What is Dubai\'s Integrated Police Operations Centre (IPOC) and how does it work?',
      answer: 'The IPOC (Integrated Police Operations Centre) is Dubai Police\'s most advanced operations centre — one of the most sophisticated in the world. It integrates in a single dashboard the management of over 50,000 CCTV cameras, CAD dispatch for all patrols, real-time traffic analytics, licence plate recognition (ANPR), AI suspicious behaviour detection, and coordination with DAS ambulances. Dubai Police has a strategic "Zero Crime" mandate and uses predictive AI for crime analysis. The Smart Palm AI system uses facial and vehicle recognition integrated with the IPOC. Abu Dhabi operates the ADPOC (Abu Dhabi Police Operations Centre) with similar capabilities under the AAD.',
    },
    {
      question: 'What is the Safe City initiative in the UAE and what are the key projects?',
      answer: 'The UAE is the global benchmark for Safe City initiatives. Dubai Safe City (DSC) is the flagship project of Dubai Police — a network of 50,000+ smart cameras with AI analytics managed from the IPOC. Abu Dhabi has the Safe City Abu Dhabi project under Abu Dhabi Police. Sharjah operates its own Safe City network. At the federal level, the UAE Smart Government programme and the national UAE 2031 Vision drive security technology integration across all cities. The World Government Summit in Dubai showcases safe city technologies. Mega-projects like Expo City Dubai (Expo 2020 legacy), NEOM, and Abu Dhabi developments (Yas Island, Saadiyat) require large-scale public safety solutions.',
    },
    {
      question: 'How is public safety software procured in the UAE?',
      answer: 'Government procurement in the UAE is decentralised by emirate. Dubai procures through the Dubai Department of Finance (DOF) and the DubaiTenders e-procurement portal. Abu Dhabi uses the Government Contracts Information System (ADPROCURE) under the Abu Dhabi Government Procurement Authority (GPSA). Dubai Police and Abu Dhabi Police tender their large-scale technology projects (Safe City, IPOC, CAD) directly via international competitive bidding (ICB). Public safety projects often include Emiratisation criteria (percentage of UAE national workforce) and sometimes technology transfer requirements. International companies typically need a registered local agent (Local Service Agent or LLC) to participate in government tenders. GITEX Technology Week and the World Police Summit in Dubai are key events for networking and showcasing solutions.',
    },
    {
      question: 'What are the data protection and cybersecurity requirements for police software in the UAE?',
      answer: 'The UAE\'s data legal framework is evolving. The Federal Personal Data Protection Law (PDPL, Federal Decree-Law No. 45 of 2021) is the UAE\'s general privacy law, managed by the UAE Data Office. Free zones like the DIFC (Dubai International Financial Centre) and ADGM (Abu Dhabi Global Market) have their own privacy regulations (DIFC DPL, ADGM DPR). For cybersecurity, NESA (National Electronic Security Authority, now integrated into the UAE Cybersecurity Council) sets IAS (Information Assurance Standards) for government systems. The UAE Cybersecurity Strategy 2031 reinforces requirements for critical infrastructure. UAE police systems generally require data storage on local infrastructure (UAE data residency) and security certification by the UAE Cybersecurity Council or emirate-level authorities.',
    },
    {
      question: 'What video surveillance infrastructure do the UAE have and what are the most advanced systems?',
      answer: 'The UAE has one of the world\'s most advanced and dense video surveillance infrastructures. Dubai Safe City operates over 50,000 smart cameras integrated with the IPOC, using AI analytics for licence plate recognition, behavioural detection, and forensic search. Abu Dhabi Safe City has a similarly dense network under Abu Dhabi Police. Dubai Police\'s facial recognition system has been widely cited as a global benchmark. Sharjah, Ajman, and other emirates have their own Safe City networks. Cameras are connected to operations centres integrating CAD dispatch, traffic, and real-time criminal intelligence systems. Technology providers include world-leading video surveillance and AI analytics companies. New urban expansions (Expo City, Yas Island) require integration of tens of thousands of additional cameras.',
    },
    {
      question: 'Why is KabatOne suited for Dubai Police, Abu Dhabi Police, and UAE Safe City projects?',
      answer: 'KabatOne integrates the functions that Dubai Police (IPOC), Abu Dhabi Police (ADPOC), and UAE Safe City projects manage through separate systems: unified CAD dispatch for Dubai and Abu Dhabi police operations with automatic incident classification, AI resource assignment, and coordination with DAS/NAMAT ambulances and Civil Defence (K-Dispatch), 50,000+ smart camera management with AI analytics — ANPR, behaviour detection, facial recognition, forensic search — integrated with IPOC/ADPOC and compliant with PDPL/NESA (K-Video), and shared GIS situational awareness across police, Civil Defence, EMS, and traffic authorities for major event coordination (Expo City, Football World Cup, F1 Abu Dhabi Grand Prix) (K-Safety). UAE data residency, UAE Cybersecurity Council compliance. Demo tailored to Dubai Safe City\'s IPOC model and UAE 2031 Vision.',
    },
  ]

  const challenges = es ? [
    { color: '#3b82f6', title: '7 Emiratos Autónomos — Coordinación Federación-Emirato', desc: 'Cada emirato opera su propia fuerza policial con sistemas TI independientes. La coordinación entre Dubai Police, Abu Dhabi Police y Sharjah Police en incidentes transfronterizos, eventos masivos y operaciones federales requiere plataformas con capacidad de integración multiagencia a escala de federación.' },
    { color: '#06b6d4', title: 'Safe City 50,000+ Cámaras — Gestión Unificada con IA', desc: 'Los proyectos Safe City de Dubai y Abu Dhabi gestionan decenas de miles de cámaras inteligentes con analítica de IA. La integración de ANPR, reconocimiento facial, detección de comportamientos y búsqueda forense en un VMS unificado bajo los requisitos NESA y PDPL es el reto central de los CISO de las policías emiratinas.' },
    { color: '#8b5cf6', title: 'Eventos Masivos — Expo City, F1, Hajj y Umrah', desc: 'Los EAU organizan regularmente eventos de millones de asistentes. Las operaciones de seguridad para Expo City Dubai, el Gran Premio de Abu Dhabi de F1, la F1 de Dubai y los eventos de la World Police Summit requieren plataformas de coordinación multiagencia con alta disponibilidad y escalabilidad dinámica.' },
    { color: '#f59e0b', title: 'Data Residency EAU — Soberanía de Datos y NESA/PDPL', desc: 'Los sistemas policiales de los EAU requieren almacenamiento de datos en infraestructura local (UAE data residency) y certificación de la UAE Cybersecurity Council. Los proveedores cloud extranjeros deben demostrar cumplimiento PDPL, NESA IAS y capacidad de despliegue en centro de datos certificado en los EAU.' },
  ] : [
    { color: '#3b82f6', title: '7 Autonomous Emirates — Federal-Emirate Coordination', desc: 'Each emirate operates its own police force with independent IT systems. Coordination between Dubai Police, Abu Dhabi Police, and Sharjah Police for cross-border incidents, mass events, and federal operations requires platforms with multi-agency integration at federation scale.' },
    { color: '#06b6d4', title: 'Safe City 50,000+ Cameras — Unified AI Management', desc: 'Dubai and Abu Dhabi Safe City projects manage tens of thousands of smart cameras with AI analytics. Integrating ANPR, facial recognition, behaviour detection, and forensic search in a unified VMS under NESA and PDPL requirements is the central challenge for emirate police CISOs.' },
    { color: '#8b5cf6', title: 'Mass Events — Expo City, F1, and World-Scale Gatherings', desc: 'The UAE regularly hosts events with millions of attendees. Security operations for Expo City Dubai, the Abu Dhabi F1 Grand Prix, Dubai events, and World Police Summit require multi-agency coordination platforms with high availability and dynamic scalability.' },
    { color: '#f59e0b', title: 'UAE Data Residency — Data Sovereignty and NESA/PDPL', desc: 'UAE police systems require data storage on local infrastructure (UAE data residency) and UAE Cybersecurity Council certification. Foreign cloud vendors must demonstrate PDPL and NESA IAS compliance, and the ability to deploy in a UAE-certified data centre.' },
  ]

  const containerStyle: React.CSSProperties = { maxWidth: '860px', margin: '0 auto' }
  const sectionStyle: React.CSSProperties = { padding: '64px 32px' }
  const h2Style: React.CSSProperties = { fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--white)', marginTop: 0, marginBottom: '24px' }
  const pStyle: React.CSSProperties = { fontSize: '15px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, marginBottom: '16px', marginTop: 0 }

  return (
    <>
      <Nav />

      {/* ── Structured Data ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        articleSchema(
          es ? 'Software de Seguridad Pública para los EAU: Dubai Police, IPOC, Safe City 50K+ Cámaras, PDPL y NESA' : 'Public Safety Software for the UAE: Dubai Police, IPOC, Safe City 50K+ Cameras, PDPL & NESA',
          es ? 'Plataforma unificada para la Policía de Dubai, la Policía de Abu Dhabi y los proyectos Safe City de los EAU — despacho CAD IPOC-integrado, 50,000+ cámaras con analítica IA y cumplimiento PDPL/NESA.' : 'Unified platform for Dubai Police, Abu Dhabi Police, and UAE Safe City projects — IPOC-integrated CAD dispatch, 50,000+ cameras with AI analytics, and PDPL/NESA compliance.',
          pageUrl,
          '2026-05-19'
        )
      ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── BREADCRUMB ── */}
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '24px 32px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '12px', color: 'var(--muted)', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/resources" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Recursos' : 'Resources'}</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>{es ? 'Software de Seguridad Pública — Emiratos Árabes Unidos' : 'Public Safety Software — UAE'}</span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Guía de Mercado' : 'Market Guide'}
            </p>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '24px' }}>
              {es
                ? 'Software de Seguridad Pública para los EAU: Dubai Police, IPOC, Safe City 50K+ Cámaras, PDPL y NESA'
                : 'Public Safety Software for the UAE: Dubai Police, IPOC, Safe City 50K+ Cameras, PDPL & NESA'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Los Emiratos Árabes Unidos son el referente mundial de las iniciativas Safe City — Dubai Police gestiona más de 50,000 cámaras inteligentes desde el IPOC con IA y reconocimiento facial, Abu Dhabi Police opera el ADPOC de nivel comparable, y el programa UAE 2031 impulsa la mayor inversión por habitante en tecnología de seguridad pública del mundo. KabatOne unifica el despacho CAD policial, la gestión de cámaras con IA y la conciencia situacional GIS bajo data residency en EAU y cumplimiento PDPL/NESA.'
                : 'The UAE is the global benchmark for Safe City initiatives — Dubai Police manages over 50,000 smart cameras from the AI-powered IPOC with facial recognition, Abu Dhabi Police operates the comparably advanced ADPOC, and the UAE 2031 programme drives the highest per-capita investment in public safety technology in the world. KabatOne unifies police CAD dispatch, AI camera management, and GIS situational awareness under UAE data residency and PDPL/NESA compliance.'}
            </p>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '40px 32px', background: 'rgba(59,130,246,0.04)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
            {(es ? [
              { value: '7', label: 'Emiratos con fuerzas policiales autónomas — Dubai, Abu Dhabi, Sharjah y más' },
              { value: '50K+', label: 'Cámaras inteligentes en Dubai Safe City integradas con el IPOC' },
              { value: '999/998', label: 'Números de emergencia — policía / Defensa Civil y bomberos en Dubai' },
              { value: 'UAE 2031', label: 'Visión nacional con la mayor inversión per cápita en tecnología de seguridad pública' },
            ] : [
              { value: '7', label: 'Emirates with autonomous police forces — Dubai, Abu Dhabi, Sharjah and more' },
              { value: '50K+', label: 'Smart cameras in Dubai Safe City integrated with the IPOC' },
              { value: '999/998', label: 'Emergency numbers — police / Civil Defence and fire in Dubai' },
              { value: 'UAE 2031', label: 'National vision with the highest per-capita investment in public safety technology' },
            ]).map((stat, i) => (
              <div key={i}>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: ACCENT, marginBottom: '6px', marginTop: 0 }}>{stat.value}</p>
                <p style={{ fontSize: '12px', fontWeight: 400, color: 'var(--muted)', lineHeight: 1.4, marginBottom: 0 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 1: Challenges ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Retos Operativos para la Seguridad Pública en los EAU' : 'Operational Challenges for Public Safety in the UAE'}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
              {challenges.map((c, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: `1px solid ${c.color}30`, padding: '24px' }}>
                  <div style={{ width: '32px', height: '3px', background: c.color, borderRadius: '2px', marginBottom: '14px' }} />
                  <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--white)', marginBottom: '10px', marginTop: 0 }}>{c.title}</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 2: How KabatOne Works ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Cómo KabatOne Responde a los Requisitos del IPOC de Dubai Police, ADPOC de Abu Dhabi y los Proyectos Safe City de los EAU' : 'How KabatOne Addresses Dubai Police IPOC, Abu Dhabi ADPOC, and UAE Safe City Project Requirements'}</h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne está diseñado para el IPOC de Dubai Police, el ADPOC de Abu Dhabi Police y los centros de operaciones Safe City de los EAU que necesitan un dashboard unificado para gestionar el despacho policial de todos los emiratos, monitorizar redes de 50,000+ cámaras inteligentes con analítica de IA avanzada y coordinar recursos de múltiples agencias en eventos de escala mundial — todo bajo los requisitos de data residency en EAU, la PDPL y los estándares IAS de la NESA/UAE Cybersecurity Council.'
                : 'KabatOne is designed for Dubai Police\'s IPOC, Abu Dhabi Police\'s ADPOC, and UAE Safe City operations centres that need a unified dashboard to manage emirate-wide police dispatch, monitor 50,000+ smart camera networks with advanced AI analytics, and coordinate multi-agency resources at world-scale events — all under UAE data residency requirements, PDPL, and NESA/UAE Cybersecurity Council IAS standards.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {(es ? [
                { title: 'Despacho CAD IPOC/ADPOC con IA y Coordinación Dubai-Abu Dhabi', desc: 'K-Dispatch gestiona el despacho policial de Dubai (999) y Abu Dhabi con clasificación automática de incidentes, asignación de recursos por IA predictiva y coordinación en tiempo real con ambulancias DAS/NAMAT, Defensa Civil (998) y tráfico RTA — compatible con los flujos operativos del IPOC y el ADPOC.' },
                { title: 'Gestión de 50,000+ Cámaras Safe City con IA PDPL/NESA-Conforme', desc: 'K-Video integra las redes de cámaras Dubai Safe City y Abu Dhabi Safe City con analítica de IA avanzada — ANPR de alta velocidad, reconocimiento facial conforme a la PDPL, detección de comportamientos sospechosos, búsqueda forense por atributos — con controles de acceso por nivel de clasificación y data residency en EAU.' },
                { title: 'Conciencia Situacional GIS para Eventos Masivos y Coordinación Federal', desc: 'K-Safety proporciona el mapa operativo GIS compartido entre Dubai Police, Abu Dhabi Police, Sharjah Police y la Defensa Civil para eventos masivos (Expo City, F1 Abu Dhabi, Dubai Shopping Festival, Año Nuevo en Burj Khalifa) — con posiciones de unidades, gestión de incidentes y protocolos de evacuación para millones de asistentes.' },
                { title: 'Data Residency EAU con Certificación UAE Cybersecurity Council', desc: 'Despliegue on-premises en centro de datos del MOI/policial o en cloud certificado en EAU. Cumplimiento PDPL Federal Decree-Law No. 45 of 2021 y estándares IAS de la NESA/UAE Cybersecurity Council. Compatibilidad con los procesos DubaiTenders y ADPROCURE. Soporte para requerimientos de Emiratización.' },
              ] : [
                { title: 'IPOC/ADPOC CAD Dispatch with AI and Dubai-Abu Dhabi Coordination', desc: 'K-Dispatch manages Dubai (999) and Abu Dhabi police dispatch with automatic incident classification, predictive AI resource assignment, and real-time coordination with DAS/NAMAT ambulances, Civil Defence (998), and RTA traffic — compatible with IPOC and ADPOC operational workflows.' },
                { title: '50,000+ Safe City Camera Management with PDPL/NESA-Compliant AI', desc: 'K-Video integrates Dubai Safe City and Abu Dhabi Safe City camera networks with advanced AI analytics — high-speed ANPR, PDPL-compliant facial recognition, suspicious behaviour detection, attribute-based forensic search — with classification-level access controls and UAE data residency.' },
                { title: 'GIS Situational Awareness for Mass Events and Federal Coordination', desc: 'K-Safety provides the shared GIS operational map across Dubai Police, Abu Dhabi Police, Sharjah Police, and Civil Defence for mass events (Expo City, F1 Abu Dhabi, Dubai Shopping Festival, New Year\'s at Burj Khalifa) — with unit positions, incident management, and evacuation protocols for millions of attendees.' },
                { title: 'UAE Data Residency with UAE Cybersecurity Council Certification', desc: 'On-premises deployment in MOI/police data centres or UAE-certified cloud. Compliance with PDPL Federal Decree-Law No. 45 of 2021 and NESA/UAE Cybersecurity Council IAS standards. Compatibility with DubaiTenders and ADPROCURE procurement processes. Support for Emiratisation requirements.' },
              ]).map((item, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px' }}>
                  <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.03em', color: 'var(--white)', marginBottom: '10px', marginTop: 0 }}>{item.title}</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: Products ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Plataforma KabatOne' : 'KabatOne Platform'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>K-Dispatch · K-Video · K-Safety</h2>
            <p style={{ ...pStyle, marginBottom: '28px' }}>
              {es
                ? 'El IPOC de Dubai Police, el ADPOC de Abu Dhabi Police y los proyectos Safe City de los EAU pueden desplegar K-Dispatch para despacho policial con IA predictiva, K-Video para gestión de 50,000+ cámaras inteligentes con analítica avanzada bajo PDPL/NESA y K-Safety para conciencia situacional GIS multiagencia y coordinación en eventos de escala mundial.'
                : 'Dubai Police\'s IPOC, Abu Dhabi Police\'s ADPOC, and UAE Safe City projects can deploy K-Dispatch for predictive AI police dispatch, K-Video for 50,000+ smart camera management with advanced analytics under PDPL/NESA, and K-Safety for multi-agency GIS situational awareness and world-scale event coordination.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD Dispatch' },
                { href: '/k-video', label: 'K-Video', desc: es ? 'Gestión de CCTV' : 'CCTV Management' },
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'Conciencia Situacional' : 'Situational Awareness' },
              ].map((p) => (
                <Link key={p.href} href={p.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '6px', padding: '10px 16px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: ACCENT }} />
                  {p.label}
                  <span style={{ color: 'var(--muted)', fontSize: '10px', letterSpacing: '0.1em' }}>{p.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '32px' }}>
              {es ? 'Software de Seguridad Pública en los Emiratos Árabes Unidos' : 'Public Safety Software in the United Arab Emirates'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px 28px' }}>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '17px', letterSpacing: '0.02em', textTransform: 'uppercase', marginBottom: '10px', marginTop: '0', color: 'var(--white)' }}>{faq.question}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED RESOURCES ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, marginBottom: '20px' }}>
              {es ? 'Recursos Relacionados' : 'Related Resources'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/resources/public-safety-software-middle-east', en: 'Public Safety Software for the Middle East: Smart City & Safe City', es: 'Software de Seguridad Pública para Medio Oriente: Smart City y Safe City' },
                { href: '/resources/public-safety-software-singapore', en: 'Public Safety Software for Singapore: SPF, SCDF, Smart Nation & PDPA', es: 'Software de Seguridad Pública para Singapur: SPF, SCDF, Smart Nation y PDPA' },
                { href: '/resources/public-safety-software-india', en: 'Public Safety Software for India: Smart Cities & ICCC', es: 'Software de Seguridad Pública para India: Smart Cities e ICCC' },
                { href: '/resources/what-is-video-management-software', en: 'What Is VMS Software? Video Management Guide', es: '¿Qué Es el Software VMS? Guía de Gestión de Video' },
                { href: '/resources/video-analytics-use-cases', en: 'Video Analytics Use Cases for Public Safety', es: 'Casos de Uso de Analítica de Video para Seguridad Pública' },
                { href: '/resources/smart-city-platform-guide', en: 'Smart City Platform Guide', es: 'Guía de Plataformas para Ciudad Inteligente' },
                { href: '/resources/what-is-situational-awareness-software', en: 'What Is Situational Awareness Software?', es: '¿Qué Es el Software de Conciencia Situacional?' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderRadius: '8px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--dim)', fontSize: '15px' }}>
                  <span>{es ? link.es : link.en}</span>
                  <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={es ? 'Solicita una Demo para el IPOC de Dubai Police, el ADPOC de Abu Dhabi o tu Proyecto Safe City en los EAU' : 'Request a Demo for Dubai Police IPOC, Abu Dhabi ADPOC, or Your UAE Safe City Project'}
          subtitle={es ? 'KabatOne integra el despacho policial con IA predictiva, la gestión de 50,000+ cámaras Safe City con analítica avanzada y la conciencia situacional GIS multiagencia en una plataforma con data residency en EAU y cumplimiento PDPL/NESA. Demo adaptada al modelo IPOC de Dubai Safe City y la visión UAE 2031.' : 'KabatOne integrates predictive AI police dispatch, 50,000+ Safe City camera management with advanced analytics, and multi-agency GIS situational awareness in a single platform with UAE data residency and PDPL/NESA compliance. Demo tailored to Dubai Safe City\'s IPOC model and UAE 2031 Vision.'}
        />

        <Footer es={es} />
      </div>
    </>
  )
}
