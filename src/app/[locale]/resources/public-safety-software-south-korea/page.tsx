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
  return generatePageMetadata('publicSafetySoftwareSouthKorea', locale)
}

export default async function PublicSafetySoftwareSouthKoreaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-south-korea/`
    : `${baseUrl}/resources/public-safety-software-south-korea/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Corea del Sur' : 'Public Safety Software — South Korea', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Corea del Sur?',
      answer: 'Corea del Sur opera un sistema policial centralizado bajo la Agencia Nacional de Policía (경찰청, KNP), que supervisa 18 agencias de policía a nivel de Sido (시·도경찰청) correspondientes a las provincias y ciudades metropolitanas. Hay aproximadamente 130,000 agentes de policía. El Centro de Despacho de Emergencias Unificado 112 integra desde 2014 la policía, los bomberos (119) y el servicio de emergencias médicas (EMS) bajo un sistema de despacho unificado, siendo Corea del Sur pionera global en esta integración. Los incendios y emergencias médicas son gestionados por el Servicio Nacional de Bomberos (NFS / 소방청). La Guardia Costera de Corea (해경) cubre emergencias marítimas. El sistema K-Shield y el Centro Nacional de Ciberseguridad (NCSC) coordinan la ciberseguridad de infraestructuras críticas.',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Corea del Sur? ¿Qué es el sistema 112 unificado?',
      answer: 'Corea del Sur tiene uno de los sistemas de despacho más avanzados del mundo. El número 112 unificado (경찰청 112종합상황실) gestiona desde 2014 todas las emergencias — policía, bomberos (anteriormente 119) y EMS — desde un único centro de operaciones integrado, eliminando la fragmentación entre agencias. Cada Sido opera su propio Centro de Situaciones 112 (112종합상황실) con sistemas CAD avanzados y asignación de recursos por IA. Los centros 112 gestionan más de 20 millones de llamadas al año. El sistema de video-112 permite enviar transmisiones en tiempo real desde el lugar del incidente directamente al operador. La integración con el número 119 (bomberos/EMS) continúa para emergencias híbridas. El Proyecto "Policing 4.0" de la KNP incorpora IA, big data y IoT en todos los centros de despacho.',
    },
    {
      question: '¿Qué es la iniciativa Smart Safety City de Corea del Sur?',
      answer: 'Corea del Sur es uno de los líderes mundiales en tecnología de ciudad segura. El Ministerio del Interior y Seguridad (MOIS / 행정안전부) gestiona el programa Smart Safety City que integra redes de CCTV inteligentes, analítica de IA, reconocimiento de matrículas (LPR) y gestión de emergencias en un dashboard unificado. Seoul tiene más de 60,000 cámaras CCTV municipales gestionadas desde el Centro de Control de CCTV de Seoul. Las ciudades utilizan plataformas de videoanalítica para prevención del crimen, gestión del tráfico y respuesta a emergencias. El programa K-City Network conecta los centros de control de seguridad municipales. Corea del Sur también ha desarrollado el sistema ANPR nacional para control de vehículos y búsqueda de fugitivos. El Smart City Hub de Sejong (특별자치도) es el referente nacional para nuevos modelos de ciudad inteligente y segura.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Corea del Sur?',
      answer: 'La contratación pública en Corea del Sur se realiza a través del sistema KONEPS (Korea ON-line E-Procurement System / 나라장터), el portal de compras electrónicas del gobierno. La Agencia de Contratación de Defensa y Administración Pública (PPS / 조달청) gestiona los contratos gubernamentales. Los contratos con la KNP y el NFS se licitan a través de KONEPS con evaluación técnica por parte de los departamentos de TI de cada agencia. Los proveedores de software extranjeros deben registrarse en la PPS y obtener la certificación GS (GS 인증 — Good Software Certification) para sus productos. Los sistemas de cloud para uso gubernamental deben cumplir la certificación CSAP (Cloud Security Assurance Program / 클라우드 보안인증). El Programa de Innovación Digital del Ministerio del Interior (디지털정부 혁신) está modernizando los sistemas de despacho y seguridad pública con fuerte inversión en soluciones basadas en IA y cloud.',
    },
    {
      question: '¿Cuáles son los requisitos de privacidad y ciberseguridad para software policial en Corea del Sur?',
      answer: 'El software de seguridad pública en Corea del Sur debe cumplir la PIPA (Personal Information Protection Act / 개인정보보호법), una de las leyes de privacidad más estrictas de Asia, gestionada por la PIPC (Personal Information Protection Commission / 개인정보보호위원회). La PIPA cubre la recopilación, uso y almacenamiento de datos personales, con requisitos especiales para datos biométricos y de videovigilancia. Los sistemas gubernamentales deben además cumplir la Ley de Seguridad de la Información y Comunicaciones (정보통신망법) y las directrices del NCSC (National Cyber Security Center / 국가사이버안전센터). Los sistemas de videovigilancia pública requieren evaluaciones de impacto de privacidad y registros en la PIPC. Los servicios cloud para administraciones públicas requieren certificación CSAP del KISA (Korea Internet & Security Agency / 한국인터넷진흥원). Los datos de seguridad nacional y policial no pueden ser almacenados fuera de Corea sin aprobación específica.',
    },
    {
      question: '¿Qué infraestructura de videovigilancia tiene Corea del Sur y cómo se gestiona?',
      answer: 'Corea del Sur tiene una de las infraestructuras de CCTV per cápita más densas del mundo. Seoul opera más de 60,000 cámaras CCTV gestionadas desde el Centro de Control Integrado de CCTV de Seoul (서울시 통합관제센터), accesibles por la policía y los servicios de emergencias. Las 18 agencias de policía de Sido gestionan sus propias redes de cámaras de vigilancia policial. Los centros de control integrados (통합관제센터) municipales son el modelo estándar coreano para la gestión unificada de video, tráfico y seguridad pública. El sistema ANPR nacional conecta las cámaras de tráfico con la base de datos de vehículos robados y personas buscadas de la KNP. La videoanalítica con IA — detección de comportamientos sospechosos, reconocimiento facial en entornos específicos, gestión de multitudes en eventos masivos (K-League, K-Pop conciertos) — está regulada por la PIPC.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la KNP, el NFS y los centros de control integrados de Corea del Sur?',
      answer: 'KabatOne integra las funciones que la Agencia Nacional de Policía (KNP), el Servicio Nacional de Bomberos (NFS) y los Centros de Control Integrado municipales de Corea del Sur gestionan a través de sistemas separados: despacho CAD unificado para el sistema 112 integrado con clasificación automática de incidentes y asignación de recursos por IA (K-Dispatch), gestión de redes de CCTV municipales y policiales con analítica de IA — LPR/ANPR, detección de comportamientos, búsqueda forense — conforme a la PIPA y las directrices de la PIPC (K-Video), y conciencia situacional GIS compartida entre policía, bomberos y gobierno municipal (K-Safety). Certificación CSAP y despliegue on-premises o cloud coreano. Integración con KONEPS para licitaciones. Demo adaptada al modelo de Centros de Situaciones 112 y Smart Safety City de Corea del Sur.',
    },
  ] : [
    {
      question: 'How is public safety organised in South Korea?',
      answer: 'South Korea operates a centralised police structure under the Korean National Police Agency (경찰청, KNP), which oversees 18 Sido-level police agencies (시·도경찰청) covering provinces and metropolitan cities. There are approximately 130,000 police officers. Since 2014, the Unified 112 Emergency Dispatch Centre integrates police, fire (119), and emergency medical services (EMS) under a single dispatch system — a global first. Fires and medical emergencies are managed by the National Fire Service (NFS / 소방청). The Korea Coast Guard (해경) covers maritime emergencies. The K-Shield programme and the National Cyber Security Centre (NCSC) coordinate cybersecurity of critical infrastructure.',
    },
    {
      question: 'How does emergency dispatch work in South Korea? What is the unified 112 system?',
      answer: 'South Korea has one of the world\'s most advanced dispatch systems. The unified 112 number (경찰청 112종합상황실) has since 2014 handled all emergencies — police, fire (formerly 119), and EMS — from a single integrated operations centre, eliminating inter-agency fragmentation. Each Sido operates its own 112 Situation Centre (112종합상황실) with advanced CAD systems and AI-driven resource assignment. The 112 centres handle over 20 million calls annually. The Video-112 system enables real-time video streams from incident locations directly to the operator. Integration with 119 (fire/EMS) continues for hybrid emergencies. The KNP\'s "Policing 4.0" project embeds AI, big data, and IoT across all dispatch centres.',
    },
    {
      question: 'What is South Korea\'s Smart Safety City initiative?',
      answer: 'South Korea is a global leader in safe city technology. The Ministry of Interior and Safety (MOIS / 행정안전부) runs the Smart Safety City programme, integrating intelligent CCTV networks, AI analytics, licence plate recognition (LPR), and emergency management in a unified dashboard. Seoul has over 60,000 municipal CCTV cameras managed from the Seoul CCTV Control Centre. Cities use video analytics platforms for crime prevention, traffic management, and emergency response. The K-City Network connects municipal security control centres nationwide. South Korea has also developed a national ANPR system for vehicle tracking and fugitive searches. The Smart City Hub in Sejong Special Self-Governing City is the national reference model for new smart and safe city approaches.',
    },
    {
      question: 'How is public safety software procured in South Korea?',
      answer: 'Government procurement in South Korea is conducted through KONEPS (Korea ON-line E-Procurement System / 나라장터), the government e-procurement portal. The Public Procurement Service (PPS / 조달청) manages public contracts. Contracts with the KNP and NFS are tendered through KONEPS with technical evaluation by each agency\'s IT department. Foreign software vendors must register with PPS and obtain GS (Good Software) Certification (GS 인증) for their products. Cloud systems for government use must comply with the CSAP (Cloud Security Assurance Program / 클라우드 보안인증). The Ministry of Interior\'s Digital Government Innovation programme (디지털정부 혁신) is modernising public safety and dispatch systems with heavy investment in AI and cloud solutions.',
    },
    {
      question: 'What are the privacy and cybersecurity requirements for police software in South Korea?',
      answer: 'Public safety software in South Korea must comply with the PIPA (Personal Information Protection Act / 개인정보보호법), one of Asia\'s strictest privacy laws, managed by the PIPC (Personal Information Protection Commission / 개인정보보호위원회). PIPA covers collection, use, and storage of personal data, with special requirements for biometric and video surveillance data. Government systems must also comply with the Act on Promotion of Information and Communications Network Utilization (정보통신망법) and NCSC (National Cyber Security Centre / 국가사이버안전센터) guidelines. Public surveillance systems require privacy impact assessments and PIPC registration. Cloud services for public administration require CSAP certification from KISA (Korea Internet & Security Agency / 한국인터넷진흥원). National security and police data cannot be stored outside Korea without specific approval.',
    },
    {
      question: 'What video surveillance infrastructure does South Korea have and how is it managed?',
      answer: 'South Korea has one of the densest per-capita CCTV infrastructures in the world. Seoul operates over 60,000 CCTV cameras managed from the Seoul Integrated CCTV Control Centre (서울시 통합관제센터), accessible by police and emergency services. The 18 Sido police agencies manage their own police surveillance camera networks. Municipal integrated control centres (통합관제센터) are the standard Korean model for unified video, traffic, and public safety management. The national ANPR system connects traffic cameras with the KNP\'s stolen vehicle and wanted persons database. AI video analytics — suspicious behaviour detection, facial recognition in specific contexts, crowd management for mass events (K-League, K-Pop concerts) — are regulated by the PIPC.',
    },
    {
      question: 'Why is KabatOne suited for South Korea\'s KNP, NFS, and integrated control centres?',
      answer: 'KabatOne integrates the functions that the Korean National Police Agency (KNP), National Fire Service (NFS), and municipal Integrated Control Centres manage through separate systems: unified CAD dispatch for the integrated 112 system with automatic incident classification and AI-driven resource assignment (K-Dispatch), municipal and police CCTV network management with AI analytics — LPR/ANPR, behavioural detection, forensic search — compliant with PIPA and PIPC guidelines (K-Video), and shared GIS situational awareness across police, fire, and municipal government (K-Safety). CSAP-certified on-premises or Korean cloud deployment. KONEPS procurement integration. Demo tailored to South Korea\'s 112 Situation Centre and Smart Safety City models.',
    },
  ]

  const challenges = es ? [
    { color: '#3b82f6', title: 'Sistema 112 Unificado — Despacho Integrado Policía/Bomberos/EMS', desc: 'Corea del Sur fue pionera en el despacho unificado 112, pero la coordinación entre los Centros de Situaciones de los 18 Sidos, los centros NFS y los sistemas de telecomunicaciones de emergencia sigue requiriendo integración tecnológica avanzada para gestionar más de 20 millones de llamadas anuales.' },
    { color: '#06b6d4', title: 'Red de 60,000+ CCTV — Gestión Unificada y Analítica IA', desc: 'Seoul y las grandes ciudades gestionan decenas de miles de cámaras desde centros integrados (통합관제센터). La integración de analítica de IA —LPR, detección de comportamientos, búsqueda forense— con cumplimiento PIPA/PIPC en redes de cámaras distribuidas es el principal desafío tecnológico.' },
    { color: '#8b5cf6', title: 'Smart Safety City — Interoperabilidad con Ecosistemas K-City', desc: 'El programa Smart Safety City del MOIS requiere plataformas que interoperen con los sistemas K-City municipales, el ANPR nacional, los centros de control de tráfico y las redes IoT de sensores — todo bajo el marco de ciberseguridad NCSC y la certificación cloud CSAP.' },
    { color: '#f59e0b', title: 'Policing 4.0 — Modernización con IA y Big Data', desc: 'El proyecto Policing 4.0 de la KNP está transformando los centros de despacho con IA, big data y análisis predictivo. Los proveedores de software deben demostrar capacidades de IA avanzadas, certificación GS y cumplimiento PIPA para participar en esta modernización de ~130,000 agentes.' },
  ] : [
    { color: '#3b82f6', title: 'Unified 112 System — Integrated Police/Fire/EMS Dispatch', desc: 'South Korea pioneered unified 112 dispatch, but coordination between 18 Sido Situation Centres, NFS centres, and emergency telecoms systems still requires advanced technology integration to manage over 20 million annual calls.' },
    { color: '#06b6d4', title: '60,000+ CCTV Network — Unified Management and AI Analytics', desc: 'Seoul and major cities manage tens of thousands of cameras from integrated control centres (통합관제센터). Integrating AI analytics — LPR, behaviour detection, forensic search — with PIPA/PIPC compliance across distributed camera networks is the primary technology challenge.' },
    { color: '#8b5cf6', title: 'Smart Safety City — Interoperability with K-City Ecosystems', desc: 'The MOIS Smart Safety City programme requires platforms that interoperate with municipal K-City systems, the national ANPR, traffic control centres, and IoT sensor networks — all under the NCSC cybersecurity framework and CSAP cloud certification.' },
    { color: '#f59e0b', title: 'Policing 4.0 — AI and Big Data Modernisation', desc: 'The KNP\'s Policing 4.0 project is transforming dispatch centres with AI, big data, and predictive analytics. Software vendors must demonstrate advanced AI capabilities, GS certification, and PIPA compliance to participate in this modernisation for ~130,000 officers.' },
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
          es ? 'Software de Seguridad Pública para Corea del Sur: KNP, 112 Unificado, Smart Safety City, PIPA y CSAP' : 'Public Safety Software for South Korea: KNP, Unified 112, Smart Safety City, PIPA & CSAP',
          es ? 'Plataforma unificada para la KNP, el NFS y los Centros de Control Integrado de Corea del Sur — despacho CAD 112 unificado, 60,000+ CCTV con analítica IA y cumplimiento PIPA/CSAP.' : 'Unified platform for South Korea\'s KNP, NFS, and Integrated Control Centres — unified 112 CAD dispatch, 60,000+ CCTV with AI analytics, and PIPA/CSAP compliance.',
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
            <span style={{ color: 'var(--dim)' }}>{es ? 'Software de Seguridad Pública — Corea del Sur' : 'Public Safety Software — South Korea'}</span>
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
                ? 'Software de Seguridad Pública para Corea del Sur: KNP, 112 Unificado, Smart Safety City, PIPA y CSAP'
                : 'Public Safety Software for South Korea: KNP, Unified 112, Smart Safety City, PIPA & CSAP'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Corea del Sur es el referente mundial del despacho unificado — el número 112 integra policía, bomberos y EMS desde 2014 en 18 Centros de Situaciones provinciales. Seoul gestiona 60,000+ cámaras CCTV desde centros integrados. El programa Smart Safety City del MOIS y el proyecto Policing 4.0 de la KNP están modernizando toda la infraestructura de seguridad pública. KabatOne unifica el despacho CAD 112, la gestión de CCTV con IA y la conciencia situacional GIS bajo cumplimiento PIPA y certificación CSAP.'
                : 'South Korea is the global benchmark for unified dispatch — the 112 number has integrated police, fire, and EMS since 2014 across 18 provincial Situation Centres. Seoul manages 60,000+ CCTV cameras from integrated control centres. The MOIS Smart Safety City programme and the KNP\'s Policing 4.0 project are modernising the entire public safety infrastructure. KabatOne unifies 112 CAD dispatch, AI CCTV management, and GIS situational awareness under PIPA compliance and CSAP certification.'}
            </p>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '40px 32px', background: 'rgba(59,130,246,0.04)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
            {(es ? [
              { value: '18', label: 'Agencias de policía a nivel de Sido bajo la KNP' },
              { value: '60K+', label: 'Cámaras CCTV gestionadas desde centros integrados solo en Seoul' },
              { value: '112', label: 'Despacho unificado policía/bomberos/EMS — pionero mundial desde 2014' },
              { value: '52M', label: 'Habitantes — mercado de seguridad pública de alta tecnología' },
            ] : [
              { value: '18', label: 'Sido-level police agencies under the KNP' },
              { value: '60K+', label: 'CCTV cameras managed from integrated centres in Seoul alone' },
              { value: '112', label: 'Unified police/fire/EMS dispatch — global pioneer since 2014' },
              { value: '52M', label: 'Population — one of Asia\'s highest-tech public safety markets' },
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
            <h2 style={h2Style}>{es ? 'Retos Operativos para la Seguridad Pública en Corea del Sur' : 'Operational Challenges for Public Safety in South Korea'}</h2>
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
            <h2 style={h2Style}>{es ? 'Cómo KabatOne Responde a los Requisitos de la KNP, el NFS y los Centros Integrados de Corea del Sur' : 'How KabatOne Addresses South Korea\'s KNP, NFS, and Integrated Control Centre Requirements'}</h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne está diseñado para los Centros de Situaciones 112 de los 18 Sidos, los Centros de Control Integrado de CCTV municipales y los centros de despacho del NFS que necesitan un dashboard unificado para gestionar el sistema 112 integrado, monitorizar redes de 60,000+ cámaras con analítica de IA y coordinar recursos de múltiples agencias en el marco del Smart Safety City — todo bajo los requisitos de la PIPA, la PIPC y la certificación CSAP del KISA.'
                : 'KabatOne is designed for the 18 Sido 112 Situation Centres, municipal Integrated CCTV Control Centres, and NFS dispatch centres that need a unified dashboard to manage the integrated 112 system, monitor 60,000+ camera networks with AI analytics, and coordinate multi-agency resources within the Smart Safety City framework — all under PIPA, PIPC, and KISA CSAP certification requirements.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {(es ? [
                { title: 'Despacho CAD 112 Unificado con IA para Policía, Bomberos y EMS', desc: 'K-Dispatch gestiona el sistema 112 unificado con clasificación automática de incidentes, asignación de recursos por IA y coordinación entre los Centros de Situaciones de los 18 Sidos, los centros del NFS y los equipos de EMS — compatible con el modelo Policing 4.0 de la KNP.' },
                { title: 'Gestión de 60,000+ CCTV con Analítica IA conforme PIPA', desc: 'K-Video integra las redes de cámaras municipales, policiales y de tráfico bajo un sistema VMS unificado con analítica de IA — LPR/ANPR, detección de comportamientos sospechosos, gestión de multitudes, búsqueda forense — con controles de privacidad configurables según los requisitos de la PIPC y la PIPA.' },
                { title: 'Conciencia Situacional GIS para Smart Safety City', desc: 'K-Safety proporciona el mapa operativo GIS compartido entre la KNP, el NFS, la Guardia Costera y el gobierno municipal — con posiciones de unidades en tiempo real, gestión de incidentes, integración de alertas IoT del ecosistema K-City y coordinación para grandes eventos (K-League, conciertos K-Pop, eventos oficiales nacionales).' },
                { title: 'Certificación CSAP y Cumplimiento PIPA/NCSC', desc: 'Despliegue on-premises o en cloud coreano certificado CSAP (KISA). Cumplimiento PIPA 2023 y directrices NCSC para infraestructuras críticas. Certificación GS para productos. Compatible con el ecosistema KONEPS para licitaciones públicas y el marco Smart Safety City del MOIS.' },
              ] : [
                { title: 'Unified 112 CAD Dispatch with AI for Police, Fire, and EMS', desc: 'K-Dispatch manages the unified 112 system with automatic incident classification, AI-driven resource assignment, and coordination across 18 Sido Situation Centres, NFS centres, and EMS teams — compatible with the KNP\'s Policing 4.0 model.' },
                { title: '60,000+ CCTV Management with PIPA-Compliant AI Analytics', desc: 'K-Video integrates municipal, police, and traffic camera networks under a unified VMS with AI analytics — LPR/ANPR, suspicious behaviour detection, crowd management, forensic search — with configurable privacy controls per PIPC and PIPA requirements.' },
                { title: 'GIS Situational Awareness for Smart Safety City', desc: 'K-Safety provides the shared GIS operational map across the KNP, NFS, Coast Guard, and municipal government — with real-time unit positions, incident management, K-City IoT alert integration, and coordination for major events (K-League, K-Pop concerts, national official events).' },
                { title: 'CSAP Certification and PIPA/NCSC Compliance', desc: 'On-premises or CSAP-certified (KISA) Korean cloud deployment. PIPA 2023 and NCSC critical infrastructure guideline compliance. GS product certification. Compatible with the KONEPS procurement ecosystem and the MOIS Smart Safety City framework.' },
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
                ? 'Los Centros de Situaciones 112 de Corea del Sur, los Centros de Control Integrado de CCTV y los centros del NFS pueden desplegar K-Dispatch para el despacho unificado 112 con IA, K-Video para la gestión de 60,000+ cámaras con analítica PIPA-conforme y K-Safety para la conciencia situacional GIS compartida en el ecosistema Smart Safety City.'
                : 'South Korea\'s 112 Situation Centres, Integrated CCTV Control Centres, and NFS centres can deploy K-Dispatch for AI-powered unified 112 dispatch, K-Video for 60,000+ camera management with PIPA-compliant analytics, and K-Safety for shared GIS situational awareness within the Smart Safety City ecosystem.'}
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
              {es ? 'Software de Seguridad Pública en Corea del Sur' : 'Public Safety Software in South Korea'}
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
                { href: '/resources/public-safety-software-japan', en: 'Public Safety Software for Japan: NPA, MPD, J-Alert, APPI & Society 5.0', es: 'Software de Seguridad Pública para Japón: NPA, MPD, J-Alert, APPI y Society 5.0' },
                { href: '/resources/public-safety-software-singapore', en: 'Public Safety Software for Singapore: SPF, SCDF, Smart Nation & PDPA', es: 'Software de Seguridad Pública para Singapur: SPF, SCDF, Smart Nation y PDPA' },
                { href: '/resources/public-safety-software-australia', en: 'Public Safety Software for Australia: Triple Zero, NGEC & ACSC ISM', es: 'Software de Seguridad Pública para Australia: Triple Zero, NGEC y ACSC ISM' },
                { href: '/resources/public-safety-software-india', en: 'Public Safety Software for India: Smart Cities & ICCC', es: 'Software de Seguridad Pública para India: Smart Cities e ICCC' },
                { href: '/resources/smart-city-platform-guide', en: 'Smart City Platform Guide', es: 'Guía de Plataformas para Ciudad Inteligente' },
                { href: '/resources/what-is-video-management-software', en: 'What Is VMS Software? Video Management Guide', es: '¿Qué Es el Software VMS? Guía de Gestión de Video' },
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
          h2={es ? 'Solicita una Demo para la KNP, el NFS o tu Centro de Control Integrado' : 'Request a Demo for South Korea\'s KNP, NFS, or Your Integrated Control Centre'}
          subtitle={es ? 'KabatOne integra el despacho 112 unificado, la gestión de 60,000+ CCTV con analítica IA y la conciencia situacional GIS en una plataforma con certificación CSAP, cumplimiento PIPA y compatibilidad KONEPS. Demo adaptada al modelo Smart Safety City y Policing 4.0 de Corea del Sur.' : 'KabatOne integrates unified 112 dispatch, 60,000+ CCTV management with AI analytics, and GIS situational awareness in a single platform with CSAP certification, PIPA compliance, and KONEPS compatibility. Demo tailored to South Korea\'s Smart Safety City and Policing 4.0 model.'}
        />

        <Footer es={es} />
      </div>
    </>
  )
}
