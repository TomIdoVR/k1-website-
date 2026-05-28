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
  return generatePageMetadata('publicSafetySoftwareSingapore', locale)
}

export default async function PublicSafetySoftwareSingaporePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-singapore/`
    : `${baseUrl}/resources/public-safety-software-singapore/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Singapur' : 'Public Safety Software — Singapore', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Singapur?',
      answer: 'Singapur opera un sistema de seguridad pública altamente integrado. La Singapore Police Force (SPF) es responsable del mantenimiento del orden público, la prevención del crimen y la respuesta a emergencias policiales. La Singapore Civil Defence Force (SCDF) gestiona las emergencias de incendios, rescate y servicios médicos de emergencia (EMS). Ambas fuerzas dependen del Ministerio del Interior (Ministry of Home Affairs, MHA). La coordinación operativa entre SPF, SCDF y otras agencias de Home Team se realiza a través de centros de mando integrados. Singapur también cuenta con la Singapore Armed Forces (SAF) para defensa y el Singapore Prison Service (SPS). El enfoque "Home Team" integra todas las agencias bajo el MHA con TI y datos compartidos.',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Singapur? ¿Qué son el 999 y el 995?',
      answer: 'Singapur usa dos números de emergencia principales: el 999 para la policía (SPF) y el 995 para incendios y emergencias médicas (SCDF). Los Centros de Operaciones de Policía (Police Operations Command Centre, POCC) reciben las llamadas del 999 y despachan los recursos policiales. El SCDF opera sus propios centros de despacho 995 para bomberos, ambulancias y hazmat. Ambas fuerzas utilizan sistemas CAD avanzados con integración GIS para la asignación de recursos en el denso entorno urbano de Singapur. Los sistemas de Inteligencia Artificial se utilizan activamente para la priorización de llamadas, análisis predictivo de crimen y optimización de recursos de respuesta.',
    },
    {
      question: '¿Qué es el Safe City Test Bed y cómo prueba Singapur la tecnología de seguridad pública?',
      answer: 'Singapur es reconocida mundialmente como un living lab para tecnología de ciudades seguras. El gobierno ha desplegado extensas redes de cámaras con analítica de IA en barrios HDB (Housing Development Board), estaciones MRT, espacios públicos y edificios gubernamentales. La SPF tiene un plan para desplegar 90,000+ cámaras de policía integradas con analítica de IA para 2030. El Safe City Test Bed permite a empresas de tecnología pilotar soluciones en entornos reales de Singapur. GovTech (Government Technology Agency) desarrolla soluciones digitales para las fuerzas de seguridad a través de plataformas como CODEX (Core Operations Development and Technology). La SPF también opera el Police Technology Department para la evaluación e integración de nuevas tecnologías.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Singapur?',
      answer: 'La contratación pública en Singapur se realiza principalmente a través de GeBIZ (Government Electronic Business), el portal centralizado de compras del gobierno de Singapur. Los procedimientos incluyen el Open Tender (para contratos sobre SGD 90,000), el Restricted Tender y el quotation. GovTech actúa como agencia central de TI y puede gestionar licitaciones en nombre de otras agencias. Las soluciones tecnológicas para las fuerzas de seguridad deben cumplir los Singapore Government Digital Standards y pasar evaluaciones de ciberseguridad de la CSA (Cyber Security Agency). El programa GovTech Digital Deployment (CODEX) y los acuerdos GovWallet facilitan la adquisición de tecnología en el ecosistema del gobierno de Singapur. Los contratos con el MHA o sus agencias (SPF, SCDF) suelen incluir requisitos de residencia de datos en Singapur.',
    },
    {
      question: '¿Cuáles son los requisitos de protección de datos y ciberseguridad para software policial en Singapur?',
      answer: 'El software de seguridad pública en Singapur debe cumplir la PDPA (Personal Data Protection Act, 2012, enmendada en 2020 y 2021), que regula la recopilación, uso y divulgación de datos personales. La PDPC (Personal Data Protection Commission) es la autoridad supervisora. Para datos gubernamentales y policiales, se aplica adicionalmente la Government Instruction Manual on IT Management (IM on IT) con clasificaciones de datos (Restricted, Confidential, Secret) y controles de seguridad específicos. La CSA (Cyber Security Agency) establece el marco de ciberseguridad para infraestructuras críticas de información (CII) bajo la Cybersecurity Act 2018. Los datos de seguridad nacional no pueden almacenarse en infraestructuras cloud fuera de Singapur sin aprobación específica — se requiere Government Managed Cloud (GMC) o infraestructura on-premises certificada.',
    },
    {
      question: '¿Qué infraestructura de videovigilancia tiene Singapur y cómo se gestiona?',
      answer: 'Singapur tiene una de las infraestructuras de videovigilancia más avanzadas y densas de Asia. La SPF opera miles de cámaras en HDB estates, vías públicas y espacios comunitarios, con un objetivo de 90,000+ cámaras integradas para 2030. Las cámaras están conectadas a centros de operaciones policiales que utilizan analítica de IA para detección de eventos, reconocimiento de comportamientos y búsqueda forense. El sistema "Police Cameras" integra feeds de múltiples agencias y propietarios de cámaras privadas bajo un protocolo de acceso regulado. La LTA (Land Transport Authority) gestiona cámaras de tráfico en las principales vías. La CAG (Changi Airport Group) opera su propio sistema de seguridad aeroportuaria integrado con las fuerzas de seguridad. El uso de reconocimiento facial está bajo supervisión de la PDPC y requiere evaluación de impacto.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la SPF, SCDF y la visión Smart Nation de Singapur?',
      answer: 'KabatOne integra las funciones que la SPF, SCDF y las agencias de seguridad de Singapur gestionan a través de sistemas separados: despacho CAD con soporte para operaciones policiales 999 y respuestas SCDF 995 desde un dashboard unificado (K-Dispatch), gestión integrada de redes de cámaras de policía y SCDF con analítica de IA — detección de comportamientos, reconocimiento de placas, búsqueda forense — conforme a la PDPA y los estándares de datos gubernamentales (K-Video), y conciencia situacional GIS compartida entre SPF, SCDF y otras agencias del Home Team para coordinación multiagencia (K-Safety). Despliegue on-premises o en Government Managed Cloud (GMC) con cumplimiento PDPA y requisitos CSA. Demo adaptada al contexto de los centros de operaciones del MHA y el ecosistema Smart Nation de Singapur.',
    },
  ] : [
    {
      question: 'How is public safety organised in Singapore?',
      answer: 'Singapore operates a highly integrated public safety system. The Singapore Police Force (SPF) is responsible for maintaining law and order, crime prevention, and responding to police emergencies. The Singapore Civil Defence Force (SCDF) manages fire emergencies, rescue, and emergency medical services (EMS). Both forces fall under the Ministry of Home Affairs (MHA). Operational coordination between SPF, SCDF, and other Home Team agencies takes place through integrated command centres. The "Home Team" approach integrates all agencies under the MHA with shared IT and data. Singapore also has the Singapore Armed Forces (SAF) for defence and the Singapore Prison Service (SPS).',
    },
    {
      question: 'How does emergency dispatch work in Singapore? What are 999 and 995?',
      answer: 'Singapore uses two main emergency numbers: 999 for police (SPF) and 995 for fire and medical emergencies (SCDF). Police Operations Command Centres (POCC) receive 999 calls and dispatch police resources. SCDF operates its own 995 dispatch centres for fire, ambulance, and hazmat. Both forces use advanced CAD systems with GIS integration for resource assignment in Singapore\'s dense urban environment. Artificial intelligence is actively used for call prioritisation, predictive crime analytics, and response resource optimisation.',
    },
    {
      question: 'What is the Safe City Test Bed and how does Singapore test public safety technology?',
      answer: 'Singapore is globally recognised as a living lab for safe city technology. The government has deployed extensive AI-analytics camera networks at HDB (Housing Development Board) estates, MRT stations, public spaces, and government buildings. SPF has a plan to deploy 90,000+ police cameras integrated with AI analytics by 2030. The Safe City Test Bed allows technology companies to pilot solutions in real Singapore environments. GovTech (Government Technology Agency) develops digital solutions for security forces through platforms like CODEX (Core Operations Development and Technology). The SPF also operates a Police Technology Department for evaluating and integrating new technologies.',
    },
    {
      question: 'How do Singapore government agencies procure public safety software?',
      answer: 'Public procurement in Singapore is conducted primarily through GeBIZ (Government Electronic Business), the Singapore government\'s centralised procurement portal. Procedures include Open Tender (for contracts above SGD 90,000), Restricted Tender, and quotation processes. GovTech acts as the central IT agency and can run tenders on behalf of other agencies. Technology solutions for security forces must meet Singapore Government Digital Standards and pass CSA (Cyber Security Agency) security evaluations. GovTech\'s CODEX platform and GovWallet facilitate government technology acquisition. MHA and its agencies (SPF, SCDF) typically require data residency within Singapore for sensitive systems.',
    },
    {
      question: 'What are Singapore\'s data protection and cybersecurity requirements for police software?',
      answer: 'Public safety software in Singapore must comply with the PDPA (Personal Data Protection Act, 2012, amended 2020 and 2021), which governs the collection, use, and disclosure of personal data. The PDPC (Personal Data Protection Commission) is the supervisory authority. For government and police data, the Government Instruction Manual on IT Management (IM on IT) adds data classifications (Restricted, Confidential, Secret) with specific security controls. The CSA (Cyber Security Agency) establishes the cybersecurity framework for Critical Information Infrastructures (CII) under the Cybersecurity Act 2018. National security data cannot be stored in offshore cloud infrastructure without specific approval — Government Managed Cloud (GMC) or certified on-premises infrastructure is required.',
    },
    {
      question: 'What video surveillance infrastructure does Singapore have and how is it managed?',
      answer: 'Singapore has one of Asia\'s most advanced and dense video surveillance infrastructures. SPF operates thousands of cameras at HDB estates, public roads, and community spaces, targeting 90,000+ integrated AI-analytics cameras by 2030. Cameras feed into police operations centres using AI analytics for event detection, behavioural recognition, and forensic search. The "Police Cameras" system integrates feeds from multiple agencies and regulated private camera owners. The LTA (Land Transport Authority) manages traffic cameras on major roads. Changi Airport Group (CAG) operates its own airport security system integrated with security forces. Facial recognition use is under PDPC supervision and requires impact assessment.',
    },
    {
      question: 'Why is KabatOne suited for SPF, SCDF, and Singapore\'s Smart Nation vision?',
      answer: 'KabatOne integrates the functions SPF, SCDF, and Singapore\'s security agencies manage across separate systems: CAD dispatch with support for police 999 and SCDF 995 operations from a unified dashboard (K-Dispatch), integrated management of police and SCDF camera networks with AI analytics — behavioural detection, licence plate recognition, forensic search — compliant with PDPA and government data standards (K-Video), and GIS situational awareness shared across SPF, SCDF, and other Home Team agencies for multi-agency coordination (K-Safety). On-premises or Government Managed Cloud (GMC) deployment with PDPA and CSA compliance. Request a demo tailored to the MHA operations centre and Singapore Smart Nation ecosystem.',
    },
  ]

  const sectionStyle: React.CSSProperties = { borderTop: '1px solid var(--border)', padding: '72px 32px' }
  const containerStyle: React.CSSProperties = { maxWidth: '860px', margin: '0 auto' }
  const h2Style: React.CSSProperties = {
    fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif',
    textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '20px', marginTop: '0',
  }
  const pStyle: React.CSSProperties = { fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.8, marginBottom: '20px' }

  const challenges = es ? [
    {
      title: 'Estándares Smart Nation: Integración Digital con GovTech y CODEX',
      desc: 'Singapur exige que los sistemas de seguridad pública se integren con el ecosistema digital del gobierno — CODEX (plataforma cloud de GovTech), Singapore Government Digital Standards y APIs del Home Team. Los proveedores de tecnología deben pasar evaluaciones de seguridad de la CSA y cumplir los requisitos de residencia de datos antes de poder operar en los sistemas del MHA, SPF o SCDF.',
      color: '#3b82f6',
    },
    {
      title: 'Despacho Multiagencia 999/995: Integración SPF y SCDF en Tiempo Real',
      desc: 'La SPF y la SCDF operan centros de despacho separados (999 y 995) con sistemas CAD distintos. Los incidentes que requieren respuesta conjunta de policía, bomberos y EMS — frecuentes en el entorno urbano denso de Singapur — necesitan plataformas que faciliten la coordinación en tiempo real, la transferencia de datos de incidente y la conciencia situacional compartida sin duplicación manual.',
      color: '#06b6d4',
    },
    {
      title: 'PDPA, CSA y Restricciones de Residencia de Datos para Sistemas Policiales',
      desc: 'Los datos policiales y de seguridad nacional en Singapur están sujetos a clasificaciones gubernamentales estrictas (Restricted/Confidential/Secret), la Cybersecurity Act 2018 y la PDPA (enmendada 2021). Los sistemas cloud fuera de Singapur requieren aprobación específica. Los proveedores deben obtener certificación CSA y cumplir el IM on IT antes de gestionar datos de las fuerzas de seguridad del Home Team.',
      color: '#f59e0b',
    },
    {
      title: '90,000+ Cámaras IA para 2030: Escala, Analítica y Privacidad',
      desc: 'Singapur está desplegando más de 90,000 cámaras de policía integradas con analítica de IA para 2030 — en HDB estates, vías públicas, MRT y espacios comunitarios. Gestionar feeds de video a esta escala, con analítica en tiempo real, búsqueda forense y cumplimiento de la PDPA, requiere plataformas de VMS diseñadas para alta densidad de cámaras y procesamiento de IA distribuido.',
      color: '#ef4444',
    },
  ] : [
    {
      title: 'Smart Nation Standards: Digital Integration with GovTech and CODEX',
      desc: 'Singapore requires public safety systems to integrate with the government digital ecosystem — CODEX (GovTech\'s cloud platform), Singapore Government Digital Standards, and Home Team APIs. Technology vendors must pass CSA security evaluations and meet data residency requirements before operating in MHA, SPF, or SCDF systems.',
      color: '#3b82f6',
    },
    {
      title: 'Multi-Agency 999/995 Dispatch: Real-Time SPF and SCDF Integration',
      desc: 'SPF and SCDF operate separate dispatch centres (999 and 995) with distinct CAD systems. Incidents requiring joint police, fire, and EMS response — frequent in Singapore\'s dense urban environment — need platforms that facilitate real-time coordination, incident data transfer, and shared situational awareness without manual duplication.',
      color: '#06b6d4',
    },
    {
      title: 'PDPA, CSA, and Data Residency Restrictions for Police Systems',
      desc: 'Police and national security data in Singapore are subject to strict government data classifications (Restricted/Confidential/Secret), the Cybersecurity Act 2018, and the PDPA (amended 2021). Offshore cloud systems require specific approval. Vendors must achieve CSA certification and comply with the IM on IT before handling Home Team security force data.',
      color: '#f59e0b',
    },
    {
      title: '90,000+ AI Cameras by 2030: Scale, Analytics, and Privacy',
      desc: 'Singapore is deploying over 90,000 police cameras integrated with AI analytics by 2030 — at HDB estates, public roads, MRT, and community spaces. Managing video feeds at this scale, with real-time analytics, forensic search, and PDPA compliance, requires VMS platforms designed for high-density camera deployments and distributed AI processing.',
      color: '#ef4444',
    },
  ]

  return (
    <>
      <Nav />

      {/* ── Structured Data ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        articleSchema(
          es ? 'Software de Seguridad Pública para Singapur: SPF, SCDF, Smart Nation y PDPA' : 'Public Safety Software for Singapore: SPF, SCDF, Smart Nation & PDPA',
          es ? 'Plataforma unificada para la Singapore Police Force, SCDF y el ecosistema Smart Nation — despacho CAD 999/995, gestión de 90,000+ cámaras con IA y cumplimiento PDPA/CSA.' : 'Unified platform for Singapore Police Force, SCDF, and the Smart Nation ecosystem — 999/995 CAD dispatch, 90,000+ AI camera management, and PDPA/CSA compliance.',
          pageUrl,
          '2026-05-18'
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
            <span style={{ color: 'var(--dim)' }}>{es ? 'Software de Seguridad Pública — Singapur' : 'Public Safety Software — Singapore'}</span>
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
                ? 'Software de Seguridad Pública para Singapur: SPF, SCDF, Smart Nation y PDPA'
                : 'Public Safety Software for Singapore: SPF, SCDF, Smart Nation & PDPA'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Singapur es el referente mundial de ciudad segura inteligente — con 90,000+ cámaras de policía para 2030, un ecosistema GovTech liderado por el gobierno y el enfoque "Home Team" que integra la SPF, la SCDF y otras agencias bajo el Ministerio del Interior. KabatOne unifica el despacho CAD 999/995, la gestión de cámaras con IA y la conciencia situacional GIS en una plataforma con cumplimiento PDPA y requisitos CSA.'
                : 'Singapore is the global benchmark for the intelligent safe city — with 90,000+ police cameras planned by 2030, a GovTech-led government technology ecosystem, and a "Home Team" approach integrating SPF, SCDF, and other agencies under the Ministry of Home Affairs. KabatOne unifies 999/995 CAD dispatch, AI camera management, and GIS situational awareness in a single platform with PDPA and CSA compliance.'}
            </p>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '40px 32px', background: 'rgba(59,130,246,0.04)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
            {(es ? [
              { value: '90K+', label: 'Cámaras de policía integradas con IA planificadas para 2030' },
              { value: '55', label: 'Neighbourhood Police Centres (NPC) en toda la isla' },
              { value: '999/995', label: 'Números de emergencia SPF/SCDF — ciudad-estado 100% urbana' },
              { value: '5.9M', label: 'Habitantes — el mercado más denso de Asia-Pacífico' },
            ] : [
              { value: '90K+', label: 'AI-integrated police cameras planned by 2030' },
              { value: '55', label: 'Neighbourhood Police Centres (NPC) island-wide' },
              { value: '999/995', label: 'SPF/SCDF emergency numbers — 100% urban city-state' },
              { value: '5.9M', label: 'Population — Asia-Pacific\'s densest high-tech market' },
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
            <h2 style={h2Style}>{es ? 'Retos Operativos para la Seguridad Pública en Singapur' : 'Operational Challenges for Public Safety in Singapore'}</h2>
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
            <h2 style={h2Style}>{es ? 'Cómo KabatOne Responde a los Requisitos del Home Team y el Ecosistema Smart Nation' : 'How KabatOne Addresses Home Team and Smart Nation Ecosystem Requirements'}</h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne está diseñado para los centros de operaciones del MHA, SPF y SCDF que necesitan un único dashboard para gestionar llamadas 999/995 simultáneas, monitorear redes de cámaras de policía con analítica de IA y coordinar recursos de múltiples agencias del Home Team sobre un mapa GIS — todo bajo los exigentes requisitos de datos gubernamentales, PDPA y ciberseguridad CSA de los sistemas de información de seguridad de Singapur.'
                : 'KabatOne is designed for MHA, SPF, and SCDF operations centres that need a single dashboard to manage simultaneous 999/995 calls, monitor police camera networks with AI analytics, and coordinate resources from multiple Home Team agencies on a GIS map — all under Singapore\'s demanding government data standards, PDPA, and CSA cybersecurity requirements.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {(es ? [
                { title: 'Despacho CAD 999/995 con Coordinación Home Team', desc: 'K-Dispatch gestiona llamadas simultáneas de SPF (999) y SCDF (995) con clasificación automática de incidentes y asignación de recursos — compatible con los flujos del Police Operations Command Centre (POCC) y los centros de despacho SCDF para coordinación multiagencia sin fricciones.' },
                { title: 'Gestión de 90K+ Cámaras con Analítica IA conforme PDPA', desc: 'K-Video integra redes de cámaras de policía, SCDF y LTA con analítica de IA — reconocimiento de placas, detección de comportamientos en multitudes, búsqueda forense por atributos — con clasificaciones de datos configurables y controles de acceso por nivel de clasificación gubernamental (Restricted/Confidential).' },
                { title: 'Conciencia Situacional GIS Multiagencia del Home Team', desc: 'K-Safety proporciona el mapa operativo GIS compartido entre SPF, SCDF, SAF (cuando se activa) y otras agencias del Home Team — con posiciones de unidades en tiempo real, gestión de incidentes, calor de crimen y coordinación para grandes eventos (National Day Parade, Formula 1 Singapore Grand Prix).' },
                { title: 'On-Premises o GMC con Cumplimiento PDPA y CSA', desc: 'Despliegue on-premises o en Government Managed Cloud (GMC) certificado. Controles de seguridad conformes a la Cybersecurity Act 2018 y el IM on IT. Clasificación y etiquetado de datos para cumplimiento con los niveles de sensibilidad gubernamentales. Integración con el ecosistema CODEX de GovTech.' },
              ] : [
                { title: '999/995 CAD Dispatch with Home Team Coordination', desc: 'K-Dispatch manages simultaneous SPF (999) and SCDF (995) calls with automatic incident classification and resource assignment — compatible with Police Operations Command Centre (POCC) workflows and SCDF dispatch centres for seamless multi-agency coordination.' },
                { title: '90K+ Camera Management with PDPA-Compliant AI Analytics', desc: 'K-Video integrates police, SCDF, and LTA camera networks with AI analytics — licence plate recognition, crowd behaviour detection, attribute-based forensic search — with configurable data classifications and access controls per government classification level (Restricted/Confidential).' },
                { title: 'Multi-Agency Home Team GIS Situational Awareness', desc: 'K-Safety provides the shared GIS operational map across SPF, SCDF, SAF (when activated), and other Home Team agencies — with real-time unit positions, incident management, crime heat mapping, and coordination for major events (National Day Parade, Formula 1 Singapore Grand Prix).' },
                { title: 'On-Premises or GMC with PDPA and CSA Compliance', desc: 'On-premises or Government Managed Cloud (GMC) certified deployment. Security controls compliant with Cybersecurity Act 2018 and IM on IT. Data classification and labelling for government sensitivity level compliance. Integration with GovTech\'s CODEX ecosystem.' },
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
                ? 'Los centros de operaciones de la SPF, SCDF y MHA pueden desplegar K-Dispatch para despacho integrado 999/995, K-Video para gestión de la red de 90K+ cámaras con analítica de IA bajo PDPA/CSA y K-Safety para conciencia situacional GIS compartida entre todas las agencias del Home Team.'
                : 'SPF, SCDF, and MHA operations centres can deploy K-Dispatch for integrated 999/995 dispatch, K-Video for managing the 90K+ camera network with AI analytics under PDPA/CSA, and K-Safety for GIS situational awareness shared across all Home Team agencies.'}
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
              {es ? 'Software de Seguridad Pública en Singapur' : 'Public Safety Software in Singapore'}
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
                { href: '/resources/public-safety-software-australia', en: 'Public Safety Software for Australia: Triple Zero, NGEC & ACSC ISM', es: 'Software de Seguridad Pública para Australia: Triple Zero, NGEC y ACSC ISM' },
                { href: '/resources/public-safety-software-india', en: 'Public Safety Software for India: Smart Cities & ICCC', es: 'Software de Seguridad Pública para India: Smart Cities e ICCC' },
                { href: '/resources/public-safety-software-middle-east', en: 'Public Safety Software for the Middle East', es: 'Software de Seguridad Pública para Medio Oriente' },
                { href: '/resources/public-safety-software-united-kingdom', en: 'Public Safety Software for the United Kingdom', es: 'Software de Seguridad Pública para el Reino Unido' },
                { href: '/resources/what-is-video-management-software', en: 'What Is VMS Software? Video Management Guide', es: '¿Qué Es el Software VMS? Guía de Gestión de Video' },
                { href: '/resources/what-is-situational-awareness-software', en: 'What Is Situational Awareness Software?', es: '¿Qué Es el Software de Conciencia Situacional?' },
                { href: '/resources/smart-city-platform-guide', en: 'Smart City Platform Guide', es: 'Guía de Plataformas para Ciudad Inteligente' },
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
          h2={es ? 'Solicita una Demo para la SPF, SCDF o tu Agencia del Home Team' : 'Request a Demo for SPF, SCDF, or Your Home Team Agency'}
          subtitle={es ? 'KabatOne integra despacho 999/995, gestión de 90K+ cámaras con analítica de IA y conciencia situacional GIS en una plataforma con cumplimiento PDPA y requisitos CSA. Demo adaptada al ecosistema Smart Nation de Singapur.' : 'KabatOne integrates 999/995 dispatch, 90K+ AI camera management, and GIS situational awareness in a single platform with PDPA and CSA compliance. Demo tailored to Singapore\'s Smart Nation ecosystem.'}
        />

        <Footer es={es} />
      </div>
    </>
  )
}
