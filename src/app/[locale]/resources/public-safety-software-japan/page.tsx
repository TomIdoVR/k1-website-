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
  return generatePageMetadata('publicSafetySoftwareJapan', locale)
}

export default async function PublicSafetySoftwareJapanPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-japan/`
    : `${baseUrl}/resources/public-safety-software-japan/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Japón' : 'Public Safety Software — Japan', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Japón?',
      answer: 'Japón opera un sistema policial de dos niveles: la Agencia Nacional de Policía (NPA / 警察庁) establece las políticas nacionales y coordina las 47 policías prefecturales (都道府県警察), que operan de forma autónoma bajo sus respectivos gobernadores. El Departamento Metropolitano de Policía de Tokio (MPD / 警視庁) es el mayor, con ~47,000 efectivos. El sistema de Koban (交番) —oficinas de policía de barrio— es una parte fundamental del modelo de policía comunitaria japonés con más de 6,000 Koban en todo el país. Los servicios de bomberos y emergencias médicas son gestionados por la Agencia de Gestión de Incendios y Desastres (FDMA / 消防庁) a través de 759 departamentos de bomberos locales. Japón cuenta con ~230,000 agentes de policía y mantiene una de las tasas de criminalidad más bajas del mundo.',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Japón? ¿Qué son el 110 y el 119?',
      answer: 'Japón utiliza dos números de emergencia principales: el 110 para la policía (gestionado por las centrales de comunicaciones prefecturales — 通信指令センター) y el 119 para incendios y emergencias médicas (gestionado por los centros de despacho de los departamentos de bomberos locales bajo la coordinación de la FDMA). Cada prefectura opera su propio Centro de Mando y Comunicaciones (指令センター) con sistemas CAD avanzados. Tokio cuenta con uno de los centros de despacho más sofisticados del mundo en el MPD Communication Center, con integración de IA para priorización de llamadas y asignación de recursos. El número 118 corresponde a emergencias marítimas de la Guardia Costera de Japón (JCG). Los centros de despacho japoneses manejan decenas de millones de llamadas al año con tiempos de respuesta entre los más rápidos del mundo.',
    },
    {
      question: '¿Qué es el sistema J-Alert y cómo funciona la alerta temprana en Japón?',
      answer: 'J-Alert (全国瞬時警報システム — Sistema Nacional de Alerta Inmediata) es el sistema nacional de alerta de emergencias de Japón gestionado por la Agencia de Gestión de Incendios y Desastres. Transmite alertas de desastres naturales (terremotos, tsunamis, erupuciones volcánicas) y amenazas de seguridad nacional (misiles balísticos) directamente a televisores, radios, sistemas de megafonía municipales y teléfonos móviles en segundos. J-Alert se activa desde el Centro de Gestión de Crisis del Gabinete (内閣危機管理センター). Cada municipio debe mantener sistemas de difusión compatibles con J-Alert. Las plataformas de seguridad pública como KabatOne pueden integrarse con las alertas J-Alert para activar automáticamente flujos de respuesta de emergencia y coordinar los recursos de múltiples agencias ante un evento de nivel nacional.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Japón?',
      answer: 'La contratación pública en Japón se realiza a través del Portal de Adquisiciones del Gobierno (調達ポータル) y sistemas de e-Procurement de cada prefectura. La NPA y el Ministerio de Asuntos Internos y Comunicaciones (MIC / 総務省) establecen los estándares tecnológicos para sistemas policiales y de bomberos. Los contratos con organismos nacionales requieren evaluación de seguridad bajo el programa ISMAP (Information system Security Management and Assessment Program) — equivalente japonés de la certificación cloud gubernamental. Las agencias prefecturales licitan de forma independiente; los contratos de sistemas de despacho (指令センターシステム) se renuevan cada 10-15 años con actualizaciones intermedias. El programa "Digital Agency" del gobierno (デジタル庁, DX) está modernizando la TI del sector público y abriendo oportunidades para proveedores internacionales con productos SaaS o cloud certificados ISMAP.',
    },
    {
      question: '¿Cuáles son los requisitos de privacidad y ciberseguridad para software policial en Japón?',
      answer: 'El software de seguridad pública en Japón debe cumplir la APPI (Act on Protection of Personal Information / 個人情報保護法), reformada en 2022, que establece los principios de finalidad, minimización de datos y derechos del interesado. La PPC (Personal Information Protection Commission / 個人情報保護委員会) es la autoridad supervisora. Los sistemas gubernamentales y policiales deben cumplir adicionalmente la Estrategia de Ciberseguridad del Gobierno de Japón y las directrices del NISC (National center of Incident readiness and Strategy for Cybersecurity / 内閣サイバーセキュリティセンター). Los servicios cloud para uso gubernamental requieren registro ISMAP. Los datos de inteligencia policial y los sistemas de comunicaciones de emergencia están sujetos a controles de seguridad adicionales definidos por la NPA. Las cámaras de vigilancia en espacio público requieren cumplir las guías de la PPC sobre biometría y reconocimiento facial.',
    },
    {
      question: '¿Qué infraestructura de videovigilancia tiene Japón y cómo se gestiona?',
      answer: 'Japón tiene una infraestructura de videovigilancia densa y sofisticada, especialmente en entornos urbanos como Tokio, Osaka y Nagoya. El MPD opera miles de cámaras de vigilancia pública (防犯カメラ) integradas con el Centro de Seguridad de Video de la Policía Metropolitana. Los 47 cuerpos prefecturales de policía gestionan sus propias redes de cámaras municipales y viales. La Autopista Metropolitan Expressway y la red ferroviaria (JR, metro) cuentan con sistemas de CCTV de alta densidad conectados a centros de control operativos. La videoanalítica con IA se usa para la detección de eventos en transporte público, la búsqueda forense de sospechosos y el análisis de multitudes en eventos masivos (Osaka Expo 2025, Juegos Olímpicos). El uso de reconocimiento facial está sujeto a las directrices de la PPC y la NPA, con un debate regulatorio en curso sobre su alcance.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la NPA, el MPD, las policías prefecturales y los departamentos de bomberos de Japón?',
      answer: 'KabatOne integra las funciones que las 47 policías prefecturales, el MPD y los 759 departamentos de bomberos de Japón gestionan a través de sistemas separados: despacho CAD unificado para líneas 110 y 119 simultáneas con asignación automática de recursos (K-Dispatch), gestión de redes de cámaras de videovigilancia pública con analítica de IA conforme a la APPI y las directrices de la NPA — reconocimiento de placas, detección de comportamientos, búsqueda forense — (K-Video), y conciencia situacional GIS compartida entre policía, bomberos, gobierno municipal y unidades de respuesta a desastres naturales (K-Safety). Integración con J-Alert para activar flujos de respuesta ante alertas de emergencia nacional. Despliegue on-premises o cloud certificado ISMAP. Demo adaptada al contexto de los Centros de Mando y Comunicaciones prefecturales de Japón y la visión Society 5.0.',
    },
  ] : [
    {
      question: 'How is public safety organised in Japan?',
      answer: 'Japan operates a two-tier police structure: the National Police Agency (NPA / 警察庁) sets national policy and coordinates the 47 prefectural police forces (都道府県警察), which operate autonomously under their respective governors. The Tokyo Metropolitan Police Department (MPD / 警視庁) is the largest, with ~47,000 officers. The Koban (交番) system — community police boxes — is a cornerstone of Japan\'s neighbourhood policing model with over 6,000 Koban nationwide. Fire and emergency medical services are managed by the Fire and Disaster Management Agency (FDMA / 消防庁) through 759 local fire departments. Japan has ~230,000 police officers and maintains one of the world\'s lowest crime rates.',
    },
    {
      question: 'How does emergency dispatch work in Japan? What are 110 and 119?',
      answer: 'Japan uses two main emergency numbers: 110 for police (managed by prefectural Communication Command Centres — 通信指令センター) and 119 for fire and medical emergencies (managed by local fire department dispatch centres under FDMA coordination). Each prefecture operates its own Command and Communication Centre (指令センター) with advanced CAD systems. Tokyo has one of the world\'s most sophisticated dispatch centres at the MPD Communication Center, with AI integration for call prioritisation and resource assignment. Number 118 covers maritime emergencies under the Japan Coast Guard (JCG). Japanese dispatch centres handle tens of millions of calls annually with response times among the fastest globally.',
    },
    {
      question: 'What is J-Alert and how does Japan\'s early warning system work?',
      answer: 'J-Alert (全国瞬時警報システム — National Instant Alert System) is Japan\'s national emergency alert system managed by the Fire and Disaster Management Agency. It transmits alerts for natural disasters (earthquakes, tsunamis, volcanic eruptions) and national security threats (ballistic missiles) directly to televisions, radios, municipal public address systems, and mobile phones within seconds. J-Alert is activated from the Cabinet Crisis Management Centre (内閣危機管理センター). Every municipality must maintain J-Alert-compatible broadcast infrastructure. Public safety platforms like KabatOne can integrate with J-Alert feeds to automatically trigger emergency response workflows and coordinate multi-agency resources during a national-level event.',
    },
    {
      question: 'How is public safety software procured in Japan?',
      answer: 'Government procurement in Japan is conducted through the Government Procurement Portal (調達ポータル) and prefectural e-procurement systems. The NPA and the Ministry of Internal Affairs and Communications (MIC / 総務省) set technology standards for police and fire systems. Contracts with national bodies require security assessment under the ISMAP (Information system Security Management and Assessment Program) — Japan\'s government cloud certification programme. Prefectural agencies tender independently; dispatch system contracts (指令センターシステム) are renewed every 10–15 years with interim upgrades. The government\'s Digital Agency (デジタル庁, DX reform) is modernising public sector IT and opening opportunities for international vendors with ISMAP-certified SaaS or cloud products.',
    },
    {
      question: 'What are the privacy and cybersecurity requirements for police software in Japan?',
      answer: 'Public safety software in Japan must comply with the APPI (Act on Protection of Personal Information / 個人情報保護法), reformed in 2022, establishing purpose limitation, data minimisation, and data subject rights. The PPC (Personal Information Protection Commission / 個人情報保護委員会) is the supervisory authority. Government and police systems must additionally comply with Japan\'s Government Cybersecurity Strategy and NISC (National center of Incident readiness and Strategy for Cybersecurity / 内閣サイバーセキュリティセンター) guidelines. Cloud services for government use require ISMAP registration. Police intelligence data and emergency communication systems are subject to additional NPA-defined security controls. Public surveillance cameras must comply with PPC guidelines on biometrics and facial recognition.',
    },
    {
      question: 'What video surveillance infrastructure does Japan have and how is it managed?',
      answer: 'Japan has dense and sophisticated video surveillance infrastructure, especially in urban environments like Tokyo, Osaka, and Nagoya. The MPD operates thousands of public surveillance cameras (防犯カメラ) integrated with the Metropolitan Police Video Security Centre. All 47 prefectural police forces manage their own municipal and road camera networks. The Metropolitan Expressway and rail network (JR, metro) feature high-density CCTV systems connected to operational control centres. AI video analytics are used for event detection in public transport, forensic suspect search, and crowd analysis at major events (Osaka Expo 2025, Olympic Games). Use of facial recognition is subject to PPC and NPA guidelines, with an ongoing regulatory debate about its scope.',
    },
    {
      question: 'Why is KabatOne suited for Japan\'s NPA, MPD, prefectural police forces, and fire departments?',
      answer: 'KabatOne integrates the functions that Japan\'s 47 prefectural police forces, the MPD, and 759 fire departments manage through separate systems: unified CAD dispatch for simultaneous 110 and 119 lines with automatic resource assignment (K-Dispatch), public surveillance camera network management with AI analytics compliant with APPI and NPA guidelines — licence plate recognition, behavioural detection, forensic search — (K-Video), and shared GIS situational awareness across police, fire, municipal government, and natural disaster response units (K-Safety). Integration with J-Alert to automatically trigger response workflows on national emergency alerts. On-premises or ISMAP-certified cloud deployment. Demo tailored to Japan\'s prefectural Command and Communication Centre context and Society 5.0 vision.',
    },
  ]

  const challenges = es ? [
    { color: '#3b82f6', title: '47 Policías Prefecturales Autónomas — Coordinación Interagencial', desc: 'Con 47 cuerpos prefecturales que operan sistemas propios bajo gobernadores distintos y el MPD de Tokio, los incidentes transfronterizos requieren protocolos de coordinación interagencial que los sistemas silos no pueden gestionar en tiempo real.' },
    { color: '#06b6d4', title: 'Respuesta a Desastres Naturales — Gestión de Crisis Multiagencia', desc: 'Japón sufre terremotos, tsunamis y tifones con regularidad. Las operaciones de respuesta integran policía, bomberos, Fuerzas de Autodefensa y gobierno civil — todas deben operar desde un cuadro situacional unificado durante las primeras horas críticas.' },
    { color: '#8b5cf6', title: 'Modernización del Sistema de Despacho — De los Sistemas Legacy a la IA', desc: 'Los Centros de Mando y Comunicaciones prefecturales (指令センター) operan sistemas instalados hace 10-15 años. La reforma DX del Gobierno Digital está creando demanda para soluciones cloud/SaaS con IA, pero los requisitos de certificación ISMAP son complejos.' },
    { color: '#f59e0b', title: 'Gestión de Cámaras de Vigilancia y Cumplimiento APPI', desc: 'Las redes de cámaras municipales y policiales son extensas pero fragmentadas entre el MPD, las policías prefecturales, las autoridades de transporte y los gobiernos locales. La integración bajo un VMS unificado requiere cumplir la APPI 2022 y las directrices de la PPC sobre videovigilancia y biometría.' },
  ] : [
    { color: '#3b82f6', title: '47 Autonomous Prefectural Police Forces — Inter-Agency Coordination', desc: 'With 47 prefectural forces operating their own systems under separate governors and Tokyo\'s MPD, cross-boundary incidents require inter-agency coordination protocols that siloed systems cannot handle in real time.' },
    { color: '#06b6d4', title: 'Natural Disaster Response — Multi-Agency Crisis Management', desc: 'Japan regularly faces earthquakes, tsunamis, and typhoons. Response operations integrate police, fire, Self-Defence Forces, and civil government — all needing a unified situational picture during the critical first hours.' },
    { color: '#8b5cf6', title: 'Dispatch System Modernisation — From Legacy to AI', desc: 'Prefectural Command and Communication Centres (指令センター) operate systems installed 10–15 years ago. The Government\'s Digital Agency DX reform is creating demand for AI-enabled cloud/SaaS solutions, but ISMAP certification requirements are complex.' },
    { color: '#f59e0b', title: 'Surveillance Camera Management & APPI Compliance', desc: 'Municipal and police camera networks are extensive but fragmented across the MPD, prefectural forces, transport authorities, and local governments. Integrating under a unified VMS requires compliance with APPI 2022 and PPC guidelines on surveillance and biometrics.' },
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
          es ? 'Software de Seguridad Pública para Japón: NPA, MPD, J-Alert, APPI y Society 5.0' : 'Public Safety Software for Japan: NPA, MPD, J-Alert, APPI & Society 5.0',
          es ? 'Plataforma unificada para la NPA, el MPD y las 47 policías prefecturales de Japón — despacho CAD 110/119, integración J-Alert, gestión de cámaras con IA y cumplimiento APPI/ISMAP.' : 'Unified platform for Japan\'s NPA, MPD, and 47 prefectural police forces — 110/119 CAD dispatch, J-Alert integration, AI camera management, and APPI/ISMAP compliance.',
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
            <span style={{ color: 'var(--dim)' }}>{es ? 'Software de Seguridad Pública — Japón' : 'Public Safety Software — Japan'}</span>
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
                ? 'Software de Seguridad Pública para Japón: NPA, MPD, J-Alert, APPI y Society 5.0'
                : 'Public Safety Software for Japan: NPA, MPD, J-Alert, APPI & Society 5.0'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Japón opera 47 policías prefecturales autónomas, el MPD de Tokio con ~47,000 efectivos, 759 departamentos de bomberos bajo la FDMA y el sistema J-Alert de alerta nacional de desastres. La reforma DX del Agencia Digital está abriendo el mercado a plataformas cloud certificadas ISMAP. KabatOne unifica el despacho CAD 110/119, la gestión de cámaras con IA y la conciencia situacional GIS bajo los requisitos de la APPI y el NISC.'
                : 'Japan operates 47 autonomous prefectural police forces, the Tokyo MPD with ~47,000 officers, 759 fire departments under FDMA, and the J-Alert national disaster warning system. The Digital Agency DX reform is opening the market to ISMAP-certified cloud platforms. KabatOne unifies 110/119 CAD dispatch, AI camera management, and GIS situational awareness under APPI and NISC requirements.'}
            </p>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '40px 32px', background: 'rgba(59,130,246,0.04)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
            {(es ? [
              { value: '47', label: 'Cuerpos de policía prefecturales autónomos más el MPD de Tokio' },
              { value: '759', label: 'Departamentos de bomberos locales bajo la FDMA' },
              { value: '110/119', label: 'Números de emergencia — policía / bomberos y ambulancia' },
              { value: '125M', label: 'Habitantes — mercado público altamente tecnificado' },
            ] : [
              { value: '47', label: 'Autonomous prefectural police forces plus Tokyo MPD' },
              { value: '759', label: 'Local fire departments under the FDMA' },
              { value: '110/119', label: 'Emergency numbers — police / fire & ambulance' },
              { value: '125M', label: 'Population — one of Asia\'s most tech-forward public safety markets' },
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
            <h2 style={h2Style}>{es ? 'Retos Operativos para la Seguridad Pública en Japón' : 'Operational Challenges for Public Safety in Japan'}</h2>
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
            <h2 style={h2Style}>{es ? 'Cómo KabatOne Responde a los Requisitos de la NPA, el MPD y los Departamentos de Bomberos de Japón' : 'How KabatOne Addresses Japan\'s NPA, MPD, and Fire Department Requirements'}</h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne está diseñado para los Centros de Mando y Comunicaciones prefecturales (指令センター), el MPD Communication Center y los centros de despacho 119 que necesitan un dashboard unificado para gestionar llamadas 110 y 119 simultáneas, coordinar recursos de múltiples agencias —policía, bomberos, Fuerzas de Autodefensa— durante desastres naturales, y monitorizar redes de cámaras municipales con analítica de IA bajo los requisitos de la APPI, la PPC y el NISC.'
                : 'KabatOne is designed for prefectural Command and Communication Centres (指令センター), the MPD Communication Center, and 119 dispatch centres that need a unified dashboard to manage simultaneous 110 and 119 calls, coordinate multi-agency resources — police, fire, Self-Defence Forces — during natural disasters, and monitor municipal camera networks with AI analytics under APPI, PPC, and NISC requirements.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {(es ? [
                { title: 'Despacho CAD 110/119 con Coordinación Interagencial', desc: 'K-Dispatch gestiona llamadas simultáneas de policía (110) y bomberos/EMS (119) con clasificación automática de incidentes y asignación de recursos — compatible con los flujos de los Centros de Mando prefecturales y los centros de despacho de la FDMA para coordinación sin fricciones entre las 47 prefecturas.' },
                { title: 'Gestión de Cámaras con Analítica IA conforme a APPI y PPC', desc: 'K-Video integra redes de cámaras del MPD, policías prefecturales, LRT y municipios con analítica de IA — reconocimiento de matrículas, detección de comportamientos, búsqueda forense por atributos — con controles de acceso configurables y clasificación de datos según las directrices de la PPC sobre videovigilancia y biometría.' },
                { title: 'Conciencia Situacional GIS para Respuesta a Desastres', desc: 'K-Safety proporciona el mapa operativo GIS compartido entre policía, bomberos, Fuerzas de Autodefensa y gobierno civil durante emergencias — con posiciones de unidades en tiempo real, gestión de incidentes J-Alert, calor de riesgo sísmico/tsunamis y coordinación de evacuaciones masivas para los 125M de habitantes de Japón.' },
                { title: 'Integración J-Alert y Despliegue ISMAP', desc: 'Integración con los feeds J-Alert y el sistema de alerta temprana del Gabinete para activar automáticamente flujos de respuesta de emergencia. Despliegue on-premises o en cloud certificado ISMAP. Cumplimiento APPI 2022 y directrices NISC. Compatible con la arquitectura DX de la Agencia Digital.' },
              ] : [
                { title: '110/119 CAD Dispatch with Inter-Agency Coordination', desc: 'K-Dispatch manages simultaneous police (110) and fire/EMS (119) calls with automatic incident classification and resource assignment — compatible with prefectural Command Centre workflows and FDMA dispatch centres for seamless coordination across all 47 prefectures.' },
                { title: 'AI Camera Management Compliant with APPI and PPC', desc: 'K-Video integrates MPD, prefectural police, LRT, and municipal camera networks with AI analytics — licence plate recognition, behavioural detection, attribute-based forensic search — with configurable access controls and data classification per PPC guidelines on surveillance and biometrics.' },
                { title: 'GIS Situational Awareness for Disaster Response', desc: 'K-Safety provides the shared GIS operational map across police, fire, Self-Defence Forces, and civil government during emergencies — with real-time unit positions, J-Alert incident management, seismic/tsunami risk heat mapping, and mass evacuation coordination for Japan\'s 125M population.' },
                { title: 'J-Alert Integration and ISMAP Deployment', desc: 'Integration with J-Alert feeds and Cabinet early warning systems to automatically trigger emergency response workflows. On-premises or ISMAP-certified cloud deployment. APPI 2022 and NISC guideline compliance. Compatible with the Digital Agency DX architecture.' },
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
                ? 'Los Centros de Mando prefecturales, el MPD Communication Center y los centros de despacho 119 de Japón pueden desplegar K-Dispatch para despacho integrado 110/119 con coordinación interagencial, K-Video para gestión de redes de cámaras con analítica IA bajo APPI y PPC, y K-Safety para conciencia situacional GIS compartida y respuesta integrada ante desastres naturales y J-Alert.'
                : 'Japan\'s prefectural Command Centres, MPD Communication Center, and 119 dispatch centres can deploy K-Dispatch for integrated 110/119 dispatch with inter-agency coordination, K-Video for camera network management with AI analytics under APPI and PPC, and K-Safety for shared GIS situational awareness and integrated response to natural disasters and J-Alert events.'}
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
              {es ? 'Software de Seguridad Pública en Japón' : 'Public Safety Software in Japan'}
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
                { href: '/resources/public-safety-software-singapore', en: 'Public Safety Software for Singapore: SPF, SCDF, Smart Nation & PDPA', es: 'Software de Seguridad Pública para Singapur: SPF, SCDF, Smart Nation y PDPA' },
                { href: '/resources/public-safety-software-australia', en: 'Public Safety Software for Australia: Triple Zero, NGEC & ACSC ISM', es: 'Software de Seguridad Pública para Australia: Triple Zero, NGEC y ACSC ISM' },
                { href: '/resources/public-safety-software-india', en: 'Public Safety Software for India: Smart Cities & ICCC', es: 'Software de Seguridad Pública para India: Smart Cities e ICCC' },
                { href: '/resources/public-safety-software-united-kingdom', en: 'Public Safety Software for the United Kingdom', es: 'Software de Seguridad Pública para el Reino Unido' },
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
          h2={es ? 'Solicita una Demo para la NPA, el MPD o tu Centro de Mando Prefectural' : 'Request a Demo for Japan\'s NPA, MPD, or Your Prefectural Command Centre'}
          subtitle={es ? 'KabatOne integra despacho 110/119, gestión de cámaras con IA y conciencia situacional GIS en una plataforma con integración J-Alert, cumplimiento APPI/NISC y despliegue ISMAP. Demo adaptada al modelo de Centros de Mando prefecturales de Japón y la visión Society 5.0.' : 'KabatOne integrates 110/119 dispatch, AI camera management, and GIS situational awareness in a single platform with J-Alert integration, APPI/NISC compliance, and ISMAP deployment. Demo tailored to Japan\'s prefectural Command Centre model and Society 5.0 vision.'}
        />

        <Footer es={es} />
      </div>
    </>
  )
}
