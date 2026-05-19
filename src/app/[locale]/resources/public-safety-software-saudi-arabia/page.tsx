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
  return generatePageMetadata('publicSafetySoftwareSaudiArabia', locale)
}

export default async function PublicSafetySoftwareSaudiArabiaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-saudi-arabia/`
    : `${baseUrl}/resources/public-safety-software-saudi-arabia/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Arabia Saudita' : 'Public Safety Software — Saudi Arabia', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Arabia Saudita?',
      answer: 'Arabia Saudita organiza su seguridad pública bajo el Ministerio del Interior (MOI / وزارة الداخلية), que supervisa la Policía Saudita (الشرطة السعودية) organizada en las 13 regiones administrativas del reino. La Dirección General de Seguridad (رئاسة أمن الدولة) cubre inteligencia y contraterrorismo. La Defensa Civil (الدفاع المدني) gestiona los incidentes de incendio, rescate y emergencias industriales. La Policía de Tránsito (المرور) opera bajo el MOI. En 2017, Arabia Saudita adoptó el número unificado 911 para todas las emergencias (policía, bomberos, ambulancias y tráfico), sustituyendo los números separados anteriores. El Consejo de Seguridad Nacional (NSC) coordina la seguridad a nivel nacional. La Guardia Nacional Saudita (SANG) es una fuerza paralela al ejército con responsabilidades de seguridad interna. Los proyectos de ciudades inteligentes de la Visión 2030 —NEOM, The Line, Qiddiya, Diriyah— requieren infraestructura de seguridad pública de última generación.',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Arabia Saudita? ¿Qué es el sistema 911 unificado?',
      answer: 'Arabia Saudita adoptó en 2017 el número único 911 para todas las emergencias — policía, bomberos, emergencias médicas y tráfico — siguiendo el modelo norteamericano. El Centro Nacional de Operaciones de Emergencias 911 (مركز العمليات الطارئة 911) en Riyadh coordina la respuesta a nivel nacional, con centros regionales en las 13 provincias. El sistema 911 de Arabia Saudita es uno de los más avanzados tecnológicamente del mundo: integra despacho CAD con localización GPS, análisis de voz por IA para clasificación de llamadas y pantallas de situación en tiempo real. La Media Luna Roja Saudita (SRCA / الهلال الأحمر السعودي) gestiona las emergencias médicas prehospitalarias. Los megaproyectos de NEOM y The Line incluyen centros de operaciones de seguridad integrados con estándares futuristas de respuesta a emergencias.',
    },
    {
      question: '¿Qué son los proyectos NEOM, The Line y la Visión 2030 en términos de seguridad pública?',
      answer: 'La Visión 2030 del Príncipe Heredero Mohammed bin Salman incluye la mayor inversión per cápita en tecnología de ciudad inteligente y seguridad pública del mundo. NEOM es una ciudad futurista de 26,500 km² en el noroeste de Arabia Saudita con una inversión de +$500,000 millones. The Line, parte de NEOM, es una ciudad lineal de 170 km de longitud sin calles, sin coches y sin emisiones que requerirá sistemas de seguridad pública totalmente autónomos e integrados. Diriyah (nueva capital histórica), Qiddiya (ciudad del entretenimiento) y The Red Sea Project son otros megaproyectos con requisitos avanzados de seguridad pública. La seguridad del Hajj y la Umrah — con hasta 2.5 millones de peregrinos simultáneos en La Meca — es la operación de gestión de multitudes más compleja del mundo y utiliza tecnología de analítica de IA, drones y sistemas de seguimiento. El Programa Nacional de Transformación Digital del gobierno saudita incluye la digitalización completa de los servicios de emergencias.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Arabia Saudita?',
      answer: 'La contratación pública en Arabia Saudita se realiza a través de la plataforma Etimad (منصة اعتماد), el portal electrónico centralizado del gobierno saudita. La Autoridad General de Estadística y el NDMO (National Data Management Office) supervisan los estándares de datos. El MOI y sus dependencias (911, Policía, Defensa Civil) licitan directamente sus proyectos tecnológicos de gran escala. Los proyectos de ciudades inteligentes de NEOM y Diriyah tienen sus propias entidades de adquisición. Los contratos de seguridad pública de gran escala suelen requerir acuerdos de compensación industrial (offset) y cumplimiento de los objetivos de Localización (contenido local saudita) bajo el Marco Saudi Vision 2030. Los proveedores internacionales necesitan generalmente establecer una presencia local en Arabia Saudita — como Joint Venture con un socio saudita o mediante la Saudi Aramco Industrial Zones (SPARK). El programa Saudization (نطاقات, Nitaqat) establece cuotas mínimas de empleados sauditas que los contratistas deben cumplir.',
    },
    {
      question: '¿Cuáles son los requisitos de protección de datos y ciberseguridad para software policial en Arabia Saudita?',
      answer: 'Arabia Saudita promulgó la Ley de Protección de Datos Personales (PDPL / نظام حماية البيانات الشخصية, Royal Decree M/19 of 1443H, 2021) que entró en vigor en 2023. La PDPL establece los principios de finalidad, minimización de datos y derechos del titular, gestionada por el NDMO. Para ciberseguridad, la Autoridad Nacional de Ciberseguridad (NCA / الهيئة الوطنية للأمن السيبراني) establece los controles de ciberseguridad obligatorios a través del Marco de Controles de Ciberseguridad de la NCA (ECC — Essential Cybersecurity Controls) y el marco CITC (Communications and Information Technology Commission) para telecomunicaciones. Los sistemas gubernamentales y de infraestructura crítica deben cumplir el ECC. Los proveedores de cloud para el sector público deben estar registrados en el Cloud Computing Regulatory Framework (CCRF) de la CITC. Los datos de seguridad nacional y sistemas policiales requieren almacenamiento on-premises o en centros de datos certificados en Arabia Saudita (data residency).',
    },
    {
      question: '¿Qué infraestructura de videovigilancia tiene Arabia Saudita y cuáles son los sistemas más destacados?',
      answer: 'Arabia Saudita está construyendo una de las infraestructuras de videovigilancia más avanzadas del mundo como parte de la Visión 2030. Riyadh, Jeddah y Mecca tienen redes extensas de CCTV integradas con los centros de operaciones del MOI. La Mecca y Medina cuentan con sistemas de videovigilancia especializados para la gestión del Hajj y la Umrah — con análisis de multitudes por IA, drones y sistemas de seguimiento de peregrinos. Los megaproyectos de NEOM, The Line y Diriyah incluyen diseños de zero-infrastructure con videovigilancia totalmente integrada y autónoma. El sistema de reconocimiento de matrículas ANPR está desplegado en autopistas y puntos de control en todo el reino. El programa Smart Traffic Saudi (Muroor / المرور) integra cámaras de tráfico, ANPR y gestión de incidentes en una plataforma unificada. La seguridad de los Grand Prix de F1 en Jeddah y los grandes eventos en el Boulevard de Riyadh requieren despliegues temporales masivos de cámaras y analítica de IA.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para el MOI saudita, el sistema 911 unificado y los megaproyectos de la Visión 2030?',
      answer: 'KabatOne integra las funciones que el MOI saudita, los centros 911 regionales y los proyectos de la Visión 2030 gestionan a través de sistemas separados: despacho CAD unificado para el número 911 con clasificación automática de incidentes, asignación de recursos por IA predictiva y coordinación entre policía, bomberos, SRCA/ambulancias y tráfico — compatible con los centros 911 de las 13 regiones (K-Dispatch), gestión de redes de CCTV y analítica de IA para seguridad en megaproyectos (NEOM, The Line, Diriyah) y gestión de multitudes en el Hajj/Umrah — reconocimiento de matrículas ANPR, detección de comportamientos sospechosos, análisis de densidad de multitudes, búsqueda forense — conforme a la PDPL y los controles ECC de la NCA (K-Video), y conciencia situacional GIS multiagencia compartida entre policía, Defensa Civil, SRCA y tráfico para operaciones en eventos masivos y gestión de incidentes en megaproyectos (K-Safety). Data residency en Arabia Saudita, cumplimiento PDPL/ECC/NCA. Soporte para Saudization y localización. Demo adaptada al modelo 911 saudita y los requisitos de los megaproyectos de la Visión 2030.',
    },
  ] : [
    {
      question: 'How is public safety organised in Saudi Arabia?',
      answer: 'Saudi Arabia organises its public safety under the Ministry of Interior (MOI / وزارة الداخلية), which oversees the Saudi Police (الشرطة السعودية) organised across the kingdom\'s 13 administrative regions. The State Security Presidency (رئاسة أمن الدولة) covers intelligence and counter-terrorism. Civil Defence (الدفاع المدني) manages fire, rescue, and industrial emergency incidents. The Traffic Police (المرور) operates under the MOI. In 2017, Saudi Arabia adopted the unified 911 number for all emergencies — police, fire, ambulance, and traffic — replacing separate numbers. The National Security Council (NSC) coordinates security at the national level. The Saudi Arabian National Guard (SANG) is a parallel force to the military with internal security responsibilities. Vision 2030 smart city projects — NEOM, The Line, Qiddiya, Diriyah — require cutting-edge public safety infrastructure.',
    },
    {
      question: 'How does emergency dispatch work in Saudi Arabia? What is the unified 911 system?',
      answer: 'Saudi Arabia adopted the unified 911 number in 2017 for all emergencies — police, fire, medical, and traffic — following the North American model. The National Emergency Operations Centre 911 (مركز العمليات الطارئة 911) in Riyadh coordinates national response, with regional centres in all 13 provinces. Saudi Arabia\'s 911 system is among the world\'s most technologically advanced: it integrates CAD dispatch with GPS location, AI voice analysis for call classification, and real-time situational displays. The Saudi Red Crescent Authority (SRCA / الهلال الأحمر السعودي) manages pre-hospital medical emergencies. The NEOM and The Line megaprojects include integrated security operations centres with futuristic emergency response standards.',
    },
    {
      question: 'What are NEOM, The Line, and Vision 2030 in terms of public safety?',
      answer: 'Crown Prince Mohammed bin Salman\'s Vision 2030 includes the world\'s highest per-capita investment in smart city and public safety technology. NEOM is a futuristic 26,500 km² city in northwestern Saudi Arabia with $500B+ investment. The Line — part of NEOM — is a 170 km linear city with no streets, no cars, and zero emissions that will require fully autonomous and integrated public safety systems. Diriyah (new historic capital), Qiddiya (entertainment city), and The Red Sea Project are other mega-projects with advanced public safety requirements. Hajj and Umrah security — with up to 2.5 million simultaneous pilgrims in Mecca — is the world\'s most complex crowd management operation, using AI analytics, drones, and tracking systems. The government\'s National Digital Transformation Programme includes complete digitisation of emergency services.',
    },
    {
      question: 'How is public safety software procured in Saudi Arabia?',
      answer: 'Government procurement in Saudi Arabia is conducted through the Etimad platform (منصة اعتماد), the centralised government e-procurement portal. The MOI and its subsidiaries (911, Police, Civil Defence) tender large-scale technology projects directly. NEOM and Diriyah smart city projects have their own procurement entities. Large-scale public safety contracts typically require industrial offset agreements and compliance with Localisation (local Saudi content) targets under the Saudi Vision 2030 Framework. International vendors generally need to establish a local presence in Saudi Arabia — as a joint venture with a Saudi partner or through Saudi Aramco Industrial Zones (SPARK). The Saudization programme (نطاقات, Nitaqat) sets minimum Saudi employee quotas that contractors must meet. The LEAP technology conference in Riyadh is the key event for showcasing public safety and smart city solutions.',
    },
    {
      question: 'What are the data protection and cybersecurity requirements for police software in Saudi Arabia?',
      answer: 'Saudi Arabia enacted the Personal Data Protection Law (PDPL / نظام حماية البيانات الشخصية, Royal Decree M/19 of 1443H, 2021), effective 2023. The PDPL establishes purpose limitation, data minimisation, and data subject rights, managed by the NDMO (National Data Management Office). For cybersecurity, the National Cybersecurity Authority (NCA / الهيئة الوطنية للأمن السيبراني) sets mandatory cybersecurity controls through the ECC (Essential Cybersecurity Controls) framework and CITC (Communications and Information Technology Commission) for telecoms. Government and critical infrastructure systems must comply with the ECC. Cloud vendors for the public sector must be registered under the Cloud Computing Regulatory Framework (CCRF) of the CITC. National security and police data requires on-premises storage or certified Saudi data centres (data residency).',
    },
    {
      question: 'What video surveillance infrastructure does Saudi Arabia have and what are the most notable systems?',
      answer: 'Saudi Arabia is building one of the world\'s most advanced video surveillance infrastructures as part of Vision 2030. Riyadh, Jeddah, and Mecca have extensive CCTV networks integrated with MOI operations centres. Mecca and Medina have specialised surveillance systems for Hajj and Umrah crowd management — AI crowd analytics, drones, and pilgrim tracking systems. The NEOM, The Line, and Diriyah megaprojects feature zero-infrastructure designs with fully integrated and autonomous video surveillance. ANPR licence plate recognition is deployed on motorways and checkpoints across the kingdom. The Smart Traffic Saudi programme (Muroor / المرور) integrates traffic cameras, ANPR, and incident management in a unified platform. Security for the Jeddah F1 Grand Prix and major events at Riyadh Boulevard requires massive temporary camera deployments with AI analytics.',
    },
    {
      question: 'Why is KabatOne suited for Saudi MOI, the unified 911 system, and Vision 2030 megaprojects?',
      answer: 'KabatOne integrates the functions that Saudi MOI, regional 911 centres, and Vision 2030 projects manage through separate systems: unified 911 CAD dispatch with automatic incident classification, predictive AI resource assignment, and coordination across police, fire, SRCA ambulances, and traffic for all 13 regional centres (K-Dispatch), CCTV network management and AI analytics for megaproject security (NEOM, The Line, Diriyah) and Hajj/Umrah crowd management — ANPR, suspicious behaviour detection, crowd density analysis, forensic search — compliant with PDPL and NCA ECC controls (K-Video), and shared GIS situational awareness across police, Civil Defence, SRCA, and traffic for major event operations and megaproject incident management (K-Safety). Saudi data residency, PDPL/ECC/NCA compliance. Saudization and localisation support. Demo tailored to the Saudi 911 model and Vision 2030 megaproject requirements.',
    },
  ]

  const challenges = es ? [
    { color: '#3b82f6', title: 'Gestión del Hajj y la Umrah — 2.5M Peregrinos Simultáneos', desc: 'El Hajj anual en La Meca es la operación de gestión de multitudes más compleja del mundo — con hasta 2.5 millones de personas en el mismo espacio geográfico. Los centros de mando necesitan analítica de densidad en tiempo real, drones, ANPR y coordinación multiagencia para prevenir estampidas, detectar emergencias médicas y gestionar incidentes de seguridad.' },
    { color: '#06b6d4', title: 'NEOM y The Line — Seguridad Pública en Megaproyectos sin Precedentes', desc: 'NEOM ($500B+) y The Line (ciudad lineal de 170 km sin coches) requieren sistemas de seguridad pública totalmente autónomos e integrados sin infraestructura tradicional. Los centros de operaciones deben gestionar cámaras autónomas, drones, sensores IoT y coordinación de emergencias sin acceso rodado convencional.' },
    { color: '#8b5cf6', title: 'Sistema 911 Unificado en 13 Regiones — Despacho Multiagencia a Escala Nacional', desc: 'El sistema 911 integra policía, bomberos, SRCA y tráfico en 13 centros regionales con coordinación nacional. Los sistemas CAD deben gestionar millones de llamadas anuales con respuesta en tiempo real, localización GPS, IA de clasificación de llamadas y protocolos específicos para el contexto operativo saudita.' },
    { color: '#f59e0b', title: 'PDPL y NCA ECC — Data Residency y Ciberseguridad Mandatoria', desc: 'Los sistemas policiales y de emergencias sauditas deben cumplir la PDPL 2023, los controles ECC de la NCA y el CCRF para cloud. Los proveedores deben garantizar data residency en Arabia Saudita, cumplimiento de los 114 controles ECC, y soporte para los requisitos de localización (Saudization) en el equipo de implementación.' },
  ] : [
    { color: '#3b82f6', title: 'Hajj and Umrah Management — 2.5M Simultaneous Pilgrims', desc: 'The annual Hajj in Mecca is the world\'s most complex crowd management operation — up to 2.5 million people in the same geographic space. Command centres need real-time crowd density analytics, drones, ANPR, and multi-agency coordination to prevent stampedes, detect medical emergencies, and manage security incidents.' },
    { color: '#06b6d4', title: 'NEOM and The Line — Public Safety in Unprecedented Megaprojects', desc: 'NEOM ($500B+) and The Line (170 km linear city with no cars) require fully autonomous and integrated public safety systems without traditional infrastructure. Operations centres must manage autonomous cameras, drones, IoT sensors, and emergency coordination without conventional road access.' },
    { color: '#8b5cf6', title: 'Unified 911 Across 13 Regions — National-Scale Multi-Agency Dispatch', desc: 'The 911 system integrates police, fire, SRCA, and traffic across 13 regional centres with national coordination. CAD systems must handle millions of annual calls with real-time response, GPS location, AI call classification, and protocols specific to the Saudi operational context.' },
    { color: '#f59e0b', title: 'PDPL and NCA ECC — Mandatory Data Residency and Cybersecurity', desc: 'Saudi police and emergency systems must comply with PDPL 2023, NCA ECC controls, and CCRF for cloud. Vendors must guarantee Saudi data residency, compliance with 114 ECC controls, and support for Saudization requirements in the implementation team.' },
  ]

  const containerStyle: React.CSSProperties = { maxWidth: '860px', margin: '0 auto' }
  const sectionStyle: React.CSSProperties = { padding: '64px 32px' }
  const h2Style: React.CSSProperties = { fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--white)', marginTop: 0, marginBottom: '24px' }
  const pStyle: React.CSSProperties = { fontSize: '15px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, marginBottom: '16px', marginTop: 0 }

  return (
    <>
      <Nav />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        articleSchema(
          es ? 'Software de Seguridad Pública para Arabia Saudita: MOI, 911 Unificado, NEOM, Hajj, PDPL y NCA' : 'Public Safety Software for Saudi Arabia: MOI, Unified 911, NEOM, Hajj, PDPL & NCA',
          es ? 'Plataforma unificada para el MOI saudita, el sistema 911 unificado y los megaproyectos de la Visión 2030 — despacho CAD multiagencia, gestión de 2.5M peregrinos en el Hajj y cumplimiento PDPL/NCA ECC.' : 'Unified platform for Saudi MOI, the unified 911 system, and Vision 2030 megaprojects — multi-agency CAD dispatch, 2.5M Hajj pilgrim management, and PDPL/NCA ECC compliance.',
          pageUrl,
          '2026-05-19'
        )
      ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '24px 32px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '12px', color: 'var(--muted)', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/resources" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Recursos' : 'Resources'}</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>{es ? 'Software de Seguridad Pública — Arabia Saudita' : 'Public Safety Software — Saudi Arabia'}</span>
          </nav>
        </div>

        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Guía de Mercado' : 'Market Guide'}
            </p>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '24px' }}>
              {es
                ? 'Software de Seguridad Pública para Arabia Saudita: MOI, 911 Unificado, NEOM, Hajj, PDPL y NCA'
                : 'Public Safety Software for Saudi Arabia: MOI, Unified 911, NEOM, Hajj, PDPL & NCA'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Arabia Saudita es el mercado de seguridad pública con mayor crecimiento del mundo — el sistema 911 unificado cubre 13 regiones con despacho multiagencia, el Hajj concentra 2.5 millones de peregrinos que requieren la operación de gestión de multitudes más compleja de la historia, y los megaproyectos NEOM ($500B+) y The Line están redefiniendo los estándares de seguridad pública autónoma. KabatOne unifica el despacho CAD, la gestión de CCTV con IA y la conciencia situacional GIS bajo cumplimiento PDPL y los controles ECC de la NCA.'
                : 'Saudi Arabia is the world\'s fastest-growing public safety market — the unified 911 system covers 13 regions with multi-agency dispatch, the Hajj concentrates 2.5 million pilgrims requiring the world\'s most complex crowd management operation, and the NEOM ($500B+) and The Line megaprojects are redefining autonomous public safety standards. KabatOne unifies CAD dispatch, AI CCTV management, and GIS situational awareness under PDPL compliance and NCA ECC controls.'}
            </p>
          </div>
        </section>

        <section style={{ borderTop: '1px solid var(--border)', padding: '40px 32px', background: 'rgba(59,130,246,0.04)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
            {(es ? [
              { value: '13', label: 'Regiones administrativas con centros 911 — despacho unificado policía/bomberos/SRCA/tráfico' },
              { value: '2.5M', label: 'Peregrinos simultáneos en el Hajj — la mayor concentración humana del mundo' },
              { value: '$500B+', label: 'Inversión en NEOM — la mayor inversión en tecnología de ciudad inteligente de la historia' },
              { value: 'Vision 2030', label: 'Programa nacional con la mayor inversión en seguridad pública del mundo en crecimiento' },
            ] : [
              { value: '13', label: 'Administrative regions with 911 centres — unified police/fire/SRCA/traffic dispatch' },
              { value: '2.5M', label: 'Simultaneous Hajj pilgrims — the world\'s largest human concentration' },
              { value: '$500B+', label: 'NEOM investment — the largest smart city technology investment in history' },
              { value: 'Vision 2030', label: 'National programme with the world\'s fastest-growing public safety spend' },
            ]).map((stat, i) => (
              <div key={i}>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: ACCENT, marginBottom: '6px', marginTop: 0 }}>{stat.value}</p>
                <p style={{ fontSize: '12px', fontWeight: 400, color: 'var(--muted)', lineHeight: 1.4, marginBottom: 0 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Retos Operativos para la Seguridad Pública en Arabia Saudita' : 'Operational Challenges for Public Safety in Saudi Arabia'}</h2>
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

        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Cómo KabatOne Responde a los Requisitos del MOI Saudita, el Sistema 911 y los Megaproyectos de la Visión 2030' : 'How KabatOne Addresses Saudi MOI, 911 System, and Vision 2030 Megaproject Requirements'}</h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne está diseñado para los centros 911 de las 13 regiones sauditas, los centros de operaciones de NEOM y los sistemas de seguridad del Hajj que necesitan un dashboard unificado para gestionar el despacho 911 multiagencia, monitorizar redes de CCTV con analítica de IA a escala de megaproyecto y coordinar recursos de policía, Defensa Civil, SRCA y tráfico para las operaciones más complejas del mundo — todo bajo data residency en Arabia Saudita y los controles ECC de la NCA.'
                : 'KabatOne is designed for Saudi Arabia\'s 13 regional 911 centres, NEOM operations centres, and Hajj security systems that need a unified dashboard to manage multi-agency 911 dispatch, monitor CCTV networks with AI analytics at megaproject scale, and coordinate police, Civil Defence, SRCA, and traffic resources for the world\'s most complex operations — all under Saudi data residency and NCA ECC controls.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {(es ? [
                { title: 'Despacho CAD 911 Unificado con IA para Policía, Bomberos, SRCA y Tráfico', desc: 'K-Dispatch gestiona el sistema 911 unificado en las 13 regiones con clasificación automática de incidentes, asignación de recursos por IA predictiva y coordinación en tiempo real entre policía, Defensa Civil, SRCA y tráfico — compatible con los protocolos del Centro Nacional de Operaciones 911 y los centros regionales sauditas.' },
                { title: 'Gestión de CCTV con IA para NEOM, The Line y Seguridad del Hajj', desc: 'K-Video integra redes de cámaras de megaproyectos (NEOM, The Line, Diriyah) y sistemas de seguridad del Hajj/Umrah con analítica de IA avanzada — análisis de densidad de multitudes, ANPR, detección de comportamientos sospechosos, drones integrados — cumpliendo PDPL y los controles ECC de la NCA, con data residency en Arabia Saudita.' },
                { title: 'Conciencia Situacional GIS para Megaproyectos y Eventos Masivos', desc: 'K-Safety proporciona el mapa operativo GIS compartido entre el MOI, la Defensa Civil, la SRCA y la policía de tráfico para eventos masivos (Hajj, Gran Premio F1 de Jeddah, Riyadh Boulevard) y coordinación de emergencias en megaproyectos — con posiciones de unidades, gestión de evacuaciones y análisis de situación para millones de personas.' },
                { title: 'Data Residency Saudi con PDPL/NCA ECC y Soporte Saudization', desc: 'Despliegue on-premises en centros de datos del MOI o cloud certificado en Arabia Saudita. Cumplimiento PDPL (Royal Decree M/19), 114 controles ECC de la NCA y CCRF/CITC. Soporte para requisitos de Saudization (Nitaqat) y localización. Compatible con la plataforma Etimad para licitaciones públicas.' },
              ] : [
                { title: 'Unified 911 CAD Dispatch with AI for Police, Fire, SRCA, and Traffic', desc: 'K-Dispatch manages the unified 911 system across 13 regions with automatic incident classification, predictive AI resource assignment, and real-time coordination between police, Civil Defence, SRCA, and traffic — compatible with Saudi National 911 Operations Centre protocols and regional centres.' },
                { title: 'AI CCTV Management for NEOM, The Line, and Hajj Security', desc: 'K-Video integrates megaproject camera networks (NEOM, The Line, Diriyah) and Hajj/Umrah security systems with advanced AI analytics — crowd density analysis, ANPR, suspicious behaviour detection, integrated drones — compliant with PDPL and NCA ECC controls, with Saudi data residency.' },
                { title: 'GIS Situational Awareness for Megaprojects and Mass Events', desc: 'K-Safety provides the shared GIS operational map across MOI, Civil Defence, SRCA, and traffic police for mass events (Hajj, Jeddah F1 Grand Prix, Riyadh Boulevard) and megaproject emergency coordination — with unit positions, evacuation management, and situational analysis for millions of people.' },
                { title: 'Saudi Data Residency with PDPL/NCA ECC and Saudization Support', desc: 'On-premises deployment in MOI data centres or Saudi-certified cloud. Compliance with PDPL (Royal Decree M/19), 114 NCA ECC controls, and CCRF/CITC. Support for Saudization (Nitaqat) and localisation requirements. Compatible with the Etimad platform for public tenders.' },
              ]).map((item, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px' }}>
                  <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.03em', color: 'var(--white)', marginBottom: '10px', marginTop: 0 }}>{item.title}</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Plataforma KabatOne' : 'KabatOne Platform'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>K-Dispatch · K-Video · K-Safety</h2>
            <p style={{ ...pStyle, marginBottom: '28px' }}>
              {es
                ? 'Los centros 911 regionales, los sistemas de seguridad del Hajj y los centros de operaciones de NEOM pueden desplegar K-Dispatch para despacho 911 unificado con IA, K-Video para gestión de CCTV con analítica avanzada bajo PDPL/NCA ECC y K-Safety para conciencia situacional GIS multiagencia en las operaciones más exigentes del mundo.'
                : 'Saudi Arabia\'s regional 911 centres, Hajj security systems, and NEOM operations centres can deploy K-Dispatch for AI-powered unified 911 dispatch, K-Video for CCTV management with advanced analytics under PDPL/NCA ECC, and K-Safety for multi-agency GIS situational awareness in the world\'s most demanding operations.'}
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

        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '32px' }}>
              {es ? 'Software de Seguridad Pública en Arabia Saudita' : 'Public Safety Software in Saudi Arabia'}
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

        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, marginBottom: '20px' }}>
              {es ? 'Recursos Relacionados' : 'Related Resources'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/resources/public-safety-software-uae', en: 'Public Safety Software for the UAE: Dubai Police IPOC, Safe City & NESA', es: 'Software de Seguridad Pública para los EAU: Dubai Police IPOC, Safe City y NESA' },
                { href: '/resources/public-safety-software-middle-east', en: 'Public Safety Software for the Middle East: Smart City & Safe City', es: 'Software de Seguridad Pública para Medio Oriente: Smart City y Safe City' },
                { href: '/resources/public-safety-software-india', en: 'Public Safety Software for India: Smart Cities & ICCC', es: 'Software de Seguridad Pública para India: Smart Cities e ICCC' },
                { href: '/resources/smart-city-platform-guide', en: 'Smart City Platform Guide', es: 'Guía de Plataformas para Ciudad Inteligente' },
                { href: '/resources/video-analytics-use-cases', en: 'Video Analytics Use Cases for Public Safety', es: 'Casos de Uso de Analítica de Video para Seguridad Pública' },
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

        <CTASection
          es={es}
          h2={es ? 'Solicita una Demo para el MOI Saudita, el Sistema 911 o tu Proyecto NEOM/Visión 2030' : 'Request a Demo for Saudi MOI, the 911 System, or Your NEOM/Vision 2030 Project'}
          subtitle={es ? 'KabatOne integra el despacho 911 unificado con IA, la gestión de CCTV con analítica avanzada para megaproyectos y el Hajj, y la conciencia situacional GIS multiagencia en una plataforma con data residency en Arabia Saudita y cumplimiento PDPL/NCA ECC. Demo adaptada al modelo 911 y los megaproyectos de la Visión 2030.' : 'KabatOne integrates AI-powered unified 911 dispatch, advanced CCTV analytics for megaprojects and Hajj, and multi-agency GIS situational awareness in a single platform with Saudi data residency and PDPL/NCA ECC compliance. Demo tailored to the Saudi 911 model and Vision 2030 megaprojects.'}
        />

        <Footer es={es} />
      </div>
    </>
  )
}
