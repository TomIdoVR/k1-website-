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
  return generatePageMetadata('publicSafetySoftwarePoland', locale)
}

export default async function PublicSafetySoftwarePolandPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-poland/`
    : `${baseUrl}/resources/public-safety-software-poland/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Polonia' : 'Public Safety Software — Poland', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Polonia?',
      answer: 'Polonia organiza su seguridad pública bajo el Ministerio del Interior y Administración (MSWiA — Ministerstwo Spraw Wewnętrznych i Administracji). La Policja (Policía polaca) es la fuerza principal con ~100,000 agentes organizados en 16 Comandos Regionales (Komendy Wojewódzkie) correspondientes a los voivodatos (provincias). El Komendant Główny Policji (Comandante Jefe de la Policía) es la autoridad nacional. La Straż Pożarna (Servicio de Bomberos del Estado, PSP) gestiona los incendios y rescates técnicos — con 16 comandos regionales paralelos a la policía. El Pogotowie Ratunkowe (Servicio de Ambulancias) depende de los voivodatos. El número de emergencia europeo 112 opera bajo los Centros de Llamadas de Emergencia (Centra Powiadamiania Ratunkowego, CPR) gestionados por los voivodatos con modernización continua bajo el programa e-Call. La Straż Graniczna (Guardia de Fronteras) y la Żandarmeria Wojskowa (Policía Militar) son fuerzas adicionales bajo el MSWiA.',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Polonia? ¿Qué son los CPR y el sistema 112?',
      answer: 'Polonia opera el número europeo único 112 a través de los Centra Powiadamiania Ratunkowego (CPR — Centros de Notificación de Emergencias), uno por voivodato (16 total), gestionados por las administraciones regionales bajo coordinación del MSWiA. Los CPR reciben todas las llamadas de emergencia y las redirigen a la policía (997), bomberos (998), ambulancias (999) o coordinan directamente la respuesta. El programa de modernización del 112 en Polonia ha incorporado sistemas CAD avanzados con localización GNSS y soporte para llamadas de emergencia de vehículos (eCall). El modelo polaco de CPR es un hub de coordinación multiagencia — no despacha directamente sino que activa las cadenas de respuesta de cada servicio. Varsovia, Cracovia, Wroclaw y otras grandes ciudades tienen centros de operaciones policiales con sistemas de despacho propios. La integración tecnológica entre los CPR voivodales y los sistemas policiales es el principal proyecto de digitalización del MSWiA.',
    },
    {
      question: '¿Qué papel juega la digitalización en la seguridad pública polaca y cuáles son los programas clave?',
      answer: 'Polonia está en un proceso activo de digitalización de sus servicios de seguridad pública, con fondos de la UE (Programas Operativos de Cohesión) y el Plan Nacional de Recuperación y Resiliencia (KPO). El programa SESPOL (System Elektronicznych Spraw Policji) digitaliza los sistemas de información policial. El KSIP (Krajowy System Informacyjny Policji) es la base de datos nacional de la policía. El programa CPR 2.0 moderniza los centros 112 con nuevas plataformas CAD, herramientas de IA para clasificación de llamadas y mejores capacidades de geolocalización. Las ciudades polacas, especialmente Varsovia, están implementando sistemas de videovigilancia urbana (miejski monitoring) conectados a centros de operaciones policiales. Poland adopts tecnologías EU-conformes con fuerte influencia de los marcos de NIS2, RODO y los estándares del CERT Polska.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Polonia?',
      answer: 'La contratación pública en Polonia se rige por la Ley de Contratación Pública (PZP — Prawo Zamówień Publicznych), que implementa las directivas europeas de contratación. Los contratos se publican en el Biuletyn Zamówień Publicznych (BZP, portal nacional) y en TED (OJEU) para contratos mayores. La Policja licita directamente sus proyectos tecnológicos a través de la Komenda Główna Policji (KGP). Los CPR y los proyectos de modernización del 112 son licitados por las administraciones voivodales. Los contratos de los grandes proyectos de digitalización (SESPOL, CPR 2.0) son nacionales y se licitan con procedimientos abiertos europeos. Los proveedores extranjeros pueden acceder directamente o a través de socios polacos. Los fondos EU (POPC, KPO) financian gran parte de los proyectos de digitalización de la seguridad pública, con requisitos de transparencia adicionales.',
    },
    {
      question: '¿Cuáles son los requisitos de protección de datos y ciberseguridad para software policial en Polonia?',
      answer: 'El software de seguridad pública en Polonia debe cumplir el RODO (Rozporządzenie o Ochronie Danych Osobowych — RGPD polaco), implementado a través de la Ustawa o ochronie danych osobowych. La autoridad supervisora es la UODO (Urząd Ochrony Danych Osobowych). Los sistemas policiales deben cumplir adicionalmente la Ustawa o Policji (Ley de Policía) y sus reglamentos de datos de investigación criminal. Para ciberseguridad, la Ustawa o Krajowym Systemie Cyberbezpieczeństwa (KSC, Ley del Sistema Nacional de Ciberseguridad) implementa la NIS en Polonia, y la NIS2 está siendo implementada. El CERT Polska (del NASK — Naukowa i Akademicka Sieć Komputerowa) es el CERT nacional. Los sistemas clasificados deben cumplir las normas de la Agencia de Seguridad Interior (ABW). Los servicios cloud para administraciones públicas deben garantizar almacenamiento de datos en la UE y cumplimiento del RODO con evaluaciones de impacto (DPIA).',
    },
    {
      question: '¿Qué infraestructura de videovigilancia tiene Polonia y cómo se gestiona el miejski monitoring?',
      answer: 'Polonia tiene una infraestructura de videovigilancia en rápido crecimiento, principalmente a nivel municipal (miejski monitoring). Varsovia opera miles de cámaras en el espacio público gestionadas desde el Centro de Seguridad Municipal (Centrum Bezpieczeństwa Miasta). Cracovia, Wroclaw, Poznan y otras ciudades importantes tienen sistemas similares conectados a los centros de operaciones de la Policja local. Los sistemas de reconocimiento de matrículas (ANPR) están integrados en las autopistas y puntos de entrada a las ciudades bajo la gestión del GITD (Główny Inspektorat Transportu Drogowego). El sistema de videovigilancia ferroviaria (PKP, metro de Varsovia) opera redes propias. El uso de análisis facial y biometría en videovigilancia pública está sujeto a las restricciones del RODO y requiere base legal específica. Los proyectos de ciudad inteligente (Smart City Warszawa, Smart City Kraków) integran videovigilancia con gestión de tráfico y servicios municipales.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la Policja, los CPR y los servicios de emergencias de Polonia?',
      answer: 'KabatOne integra las funciones que la Policja polaca, los CPR de los 16 voivodatos y la PSP gestionan a través de sistemas separados: despacho CAD unificado compatible con los flujos de los CPR y los centros de operaciones policiales voivodales — con clasificación automática de incidentes y asignación de recursos (K-Dispatch), gestión de redes de miejski monitoring y cámaras policiales con analítica de IA — ANPR, detección de comportamientos, búsqueda forense — conforme al RODO, UODO y la Ley de Policía polaca (K-Video), y conciencia situacional GIS compartida entre Policja, PSP, Pogotowie Ratunkowe y los CPR para coordinación multiagencia (K-Safety). Cloud en UE con cumplimiento RODO/KSC/NIS2. Compatible con los procesos PZP para licitaciones públicas polacas. Demo adaptada al modelo de CPR y los centros de operaciones policiales voivodales.',
    },
  ] : [
    {
      question: 'How is public safety organised in Poland?',
      answer: 'Poland organises its public safety under the Ministry of Interior and Administration (MSWiA — Ministerstwo Spraw Wewnętrznych i Administracji). The Policja (Polish Police) is the primary force with ~100,000 officers organised into 16 Regional Commands (Komendy Wojewódzkie) corresponding to the voivodeships (provinces). The Komendant Główny Policji (Chief Commander of Police) is the national authority. The State Fire Service (Straż Pożarna, PSP) manages fires and technical rescues — with 16 regional commands parallel to the police. The Ambulance Service (Pogotowie Ratunkowe) falls under the voivodeships. The European emergency number 112 operates through Emergency Call Centres (Centra Powiadamiania Ratunkowego, CPR) managed by voivodeships under continuous modernisation via the e-Call programme. The Border Guard (Straż Graniczna) and Military Police (Żandarmeria Wojskowa) are additional forces under MSWiA.',
    },
    {
      question: 'How does emergency dispatch work in Poland? What are the CPR and the 112 system?',
      answer: 'Poland operates the European 112 number through Centra Powiadamiania Ratunkowego (CPR — Emergency Notification Centres), one per voivodeship (16 total), managed by regional administrations under MSWiA coordination. CPR centres receive all emergency calls and redirect them to police (997), fire (998), ambulance (999), or coordinate response directly. Poland\'s 112 modernisation programme has incorporated advanced CAD systems with GNSS positioning and eCall vehicle emergency support. The Polish CPR model is a multi-agency coordination hub — it does not dispatch directly but activates each service\'s response chain. Warsaw, Kraków, Wrocław, and other major cities have police operations centres with dedicated dispatch systems. Technology integration between voivodeship CPRs and police systems is the MSWiA\'s primary digitalisation project.',
    },
    {
      question: 'What role does digitalisation play in Polish public safety and what are the key programmes?',
      answer: 'Poland is in an active process of digitalising its public safety services, with EU funding (Cohesion Operational Programmes) and the National Recovery and Resilience Plan (KPO). The SESPOL programme (System Elektronicznych Spraw Policji) digitalises police information systems. KSIP (Krajowy System Informacyjny Policji) is the national police database. The CPR 2.0 programme modernises 112 centres with new CAD platforms, AI call classification tools, and improved geolocation capabilities. Polish cities, especially Warsaw, are deploying urban surveillance systems (miejski monitoring) connected to police operations centres. Poland adopts EU-compliant technologies with strong influence from NIS2, RODO, and CERT Polska frameworks.',
    },
    {
      question: 'How is public safety software procured in Poland?',
      answer: 'Government procurement in Poland is governed by the Public Procurement Law (PZP — Prawo Zamówień Publicznych), implementing EU procurement directives. Contracts are published on the Biuletyn Zamówień Publicznych (BZP, national portal) and TED (OJEU) for larger contracts. The Policja tenders technology projects directly through the Komenda Główna Policji (KGP). CPR and 112 modernisation projects are tendered by voivodeship administrations. Major digitalisation project contracts (SESPOL, CPR 2.0) are national tenders with open European procedures. Foreign vendors may participate directly or through Polish partners. EU funds (POPC, KPO) finance much of the public safety digitalisation, with additional transparency requirements.',
    },
    {
      question: 'What are the data protection and cybersecurity requirements for police software in Poland?',
      answer: 'Public safety software in Poland must comply with RODO (Rozporządzenie o Ochronie Danych Osobowych — Polish GDPR implementation), enforced through the Ustawa o ochronie danych osobowych. The supervisory authority is UODO (Urząd Ochrony Danych Osobowych). Police systems must additionally comply with the Ustawa o Policji (Police Act) and criminal data regulations. For cybersecurity, the Ustawa o Krajowym Systemie Cyberbezpieczeństwa (KSC, National Cybersecurity System Act) implements NIS in Poland, with NIS2 being implemented. CERT Polska (from NASK) is the national CERT. Classified systems must comply with the Internal Security Agency (ABW) standards. Cloud services for public administrations must guarantee EU data storage and RODO compliance with Data Protection Impact Assessments (DPIA).',
    },
    {
      question: 'What video surveillance infrastructure does Poland have and how is miejski monitoring managed?',
      answer: 'Poland has a rapidly growing video surveillance infrastructure, primarily at the municipal level (miejski monitoring). Warsaw operates thousands of cameras in public spaces managed from the Municipal Security Centre (Centrum Bezpieczeństwa Miasta). Kraków, Wrocław, Poznań, and other major cities have similar systems connected to local Policja operations centres. ANPR licence plate recognition systems are integrated on motorways and city entry points under the GITD (Główny Inspektorat Transportu Drogowego). Railway surveillance (PKP, Warsaw Metro) operates own networks. The use of facial analysis and biometrics in public surveillance is restricted by RODO and requires a specific legal basis. Smart city projects (Smart City Warszawa, Smart City Kraków) integrate surveillance with traffic management and municipal services.',
    },
    {
      question: 'Why is KabatOne suited for the Policja, CPR centres, and Polish emergency services?',
      answer: 'KabatOne integrates the functions that the Polish Policja, 16 voivodeship CPR centres, and PSP manage through separate systems: unified CAD dispatch compatible with CPR and voivodeship police operations centre workflows — with automatic incident classification and resource assignment (K-Dispatch), miejski monitoring and police camera network management with AI analytics — ANPR, behaviour detection, forensic search — compliant with RODO, UODO, and the Polish Police Act (K-Video), and shared GIS situational awareness across Policja, PSP, Pogotowie Ratunkowe, and CPR for multi-agency coordination (K-Safety). EU cloud with RODO/KSC/NIS2 compliance. Compatible with PZP procurement processes. Demo tailored to the CPR model and voivodeship police operations centres.',
    },
  ]

  const challenges = es ? [
    { color: '#3b82f6', title: '16 CPR Voivodales — Integración Multiagencia 112/997/998/999', desc: 'Los 16 Centros de Notificación de Emergencias (CPR) coordinan policía (997), bomberos (998) y ambulancias (999) desde 16 centros provinciales independientes. La integración tecnológica entre los CPR voivodales y los sistemas de despacho de la Policja, la PSP y el Pogotowie es el reto central del programa de digitalización del MSWiA.' },
    { color: '#06b6d4', title: 'Miejski Monitoring — Videovigilancia Municipal Fragmentada', desc: 'Cada municipio opera su propio sistema de CCTV (miejski monitoring) con plataformas diversas y niveles de integración variables con los centros operativos de la Policja regional. La unificación bajo una VMS con analítica de IA debe cumplir el RODO y la Ustawa o Policji para el uso de datos de videovigilancia en investigaciones.' },
    { color: '#8b5cf6', title: 'Fondos EU y KPO — Modernización con Requisitos de Transparencia', desc: 'Los proyectos SESPOL y CPR 2.0 están financiados con fondos EU (POPC, KPO) que imponen requisitos estrictos de transparencia, plazos europeos y evaluaciones de impacto. Los proveedores deben demostrar cumplimiento RODO, KSC/NIS2 y capacidad de integración con los sistemas legacy de la Policja.' },
    { color: '#f59e0b', title: 'RODO/UODO y KSC/NIS2 — Ciberseguridad y Privacidad para Infraestructuras Críticas', desc: 'Los sistemas policiales y de emergencias polacos deben cumplir el RODO (con supervisión de la UODO), la Ley KSC (NIS2 en implementación), las normas ABW para sistemas clasificados y las directrices del CERT Polska. El cloud debe mantener los datos en la UE con DPIAs documentadas.' },
  ] : [
    { color: '#3b82f6', title: '16 Voivodeship CPRs — Multi-Agency 112/997/998/999 Integration', desc: 'The 16 Emergency Notification Centres (CPR) coordinate police (997), fire (998), and ambulance (999) from 16 independent provincial centres. Technology integration between voivodeship CPRs and Policja, PSP, and Pogotowie dispatch systems is the central challenge of the MSWiA digitalisation programme.' },
    { color: '#06b6d4', title: 'Miejski Monitoring — Fragmented Municipal Video Surveillance', desc: 'Each municipality operates its own CCTV system (miejski monitoring) with diverse platforms and varying integration levels with regional Policja operations centres. Unification under an AI analytics VMS must comply with RODO and the Ustawa o Policji for use of surveillance data in investigations.' },
    { color: '#8b5cf6', title: 'EU Funds and KPO — Modernisation with Transparency Requirements', desc: 'SESPOL and CPR 2.0 projects are funded by EU programmes (POPC, KPO) imposing strict transparency requirements, EU timelines, and impact assessments. Vendors must demonstrate RODO, KSC/NIS2 compliance and integration capability with Policja legacy systems.' },
    { color: '#f59e0b', title: 'RODO/UODO and KSC/NIS2 — Cybersecurity and Privacy for Critical Infrastructure', desc: 'Polish police and emergency systems must comply with RODO (UODO supervision), the KSC Act (NIS2 in implementation), ABW standards for classified systems, and CERT Polska guidelines. Cloud must maintain data in the EU with documented DPIAs.' },
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
          es ? 'Software de Seguridad Pública para Polonia: Policja, CPR 112, PSP, RODO y KSC/NIS2' : 'Public Safety Software for Poland: Policja, CPR 112, PSP, RODO & KSC/NIS2',
          es ? 'Plataforma unificada para la Policja, los CPR del 112 y la PSP de Polonia — despacho CAD 16 voivodatos, miejski monitoring con IA y cumplimiento RODO/UODO/KSC.' : 'Unified platform for Poland\'s Policja, 112 CPR centres, and PSP — 16-voivodeship CAD dispatch, miejski monitoring with AI, and RODO/UODO/KSC compliance.',
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
            <span style={{ color: 'var(--dim)' }}>{es ? 'Software de Seguridad Pública — Polonia' : 'Public Safety Software — Poland'}</span>
          </nav>
        </div>

        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Guía de Mercado' : 'Market Guide'}
            </p>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '24px' }}>
              {es
                ? 'Software de Seguridad Pública para Polonia: Policja, CPR 112, PSP, RODO y KSC/NIS2'
                : 'Public Safety Software for Poland: Policja, CPR 112, PSP, RODO & KSC/NIS2'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Polonia es el mayor mercado de Europa Central y Oriental para software de seguridad pública — con ~100,000 agentes de la Policja en 16 voivodatos, 16 Centros CPR que coordinan el 112 nacional y un ambicioso programa de modernización financiado por fondos EU (KPO/POPC). KabatOne unifica el despacho CAD multiagencia, la gestión del miejski monitoring con IA y la conciencia situacional GIS bajo cumplimiento RODO y los requisitos KSC/NIS2.'
                : 'Poland is the largest Central and Eastern European market for public safety software — with ~100,000 Policja officers across 16 voivodeships, 16 CPR centres coordinating the national 112, and an ambitious EU-funded modernisation programme (KPO/POPC). KabatOne unifies multi-agency CAD dispatch, miejski monitoring AI management, and GIS situational awareness under RODO compliance and KSC/NIS2 requirements.'}
            </p>
          </div>
        </section>

        <section style={{ borderTop: '1px solid var(--border)', padding: '40px 32px', background: 'rgba(59,130,246,0.04)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
            {(es ? [
              { value: '16', label: 'Voivodatos con Komendy Wojewódzkie y CPR para coordinación 112' },
              { value: '~100K', label: 'Agentes de la Policja — la mayor fuerza policial de Europa Central' },
              { value: 'KPO', label: 'Plan Nacional de Recuperación con fondos EU para digitalización de seguridad pública' },
              { value: '38M', label: 'Habitantes — mercado de seguridad pública de rápido crecimiento en la UE' },
            ] : [
              { value: '16', label: 'Voivodeships with Komendy Wojewódzkie and CPR for 112 coordination' },
              { value: '~100K', label: 'Policja officers — Central Europe\'s largest police force' },
              { value: 'KPO', label: 'National Recovery Plan with EU funds for public safety digitalisation' },
              { value: '38M', label: 'Population — fast-growing EU public safety market' },
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
            <h2 style={h2Style}>{es ? 'Retos Operativos para la Seguridad Pública en Polonia' : 'Operational Challenges for Public Safety in Poland'}</h2>
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
            <h2 style={h2Style}>{es ? 'Cómo KabatOne Responde a los Requisitos de la Policja, los CPR y la PSP de Polonia' : 'How KabatOne Addresses Poland\'s Policja, CPR Centres, and PSP Requirements'}</h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne está diseñado para los Comandos Voivodales de la Policja, los 16 CPR del 112 y los comandos de la PSP que necesitan un dashboard unificado para gestionar el despacho multiagencia 112/997/998/999, monitorizar redes de miejski monitoring con analítica de IA y coordinar la respuesta de múltiples agencias — todo bajo los requisitos del RODO/UODO, la Ley KSC y los estándares de seguridad de la ABW para sistemas críticos de seguridad pública polaca.'
                : 'KabatOne is designed for Policja Voivodeship Commands, 16 CPR 112 centres, and PSP commands that need a unified dashboard to manage 112/997/998/999 multi-agency dispatch, monitor miejski monitoring networks with AI analytics, and coordinate multi-agency response — all under RODO/UODO, KSC Act, and ABW security standards for Polish public safety critical systems.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {(es ? [
                { title: 'Despacho CAD 112/997/998/999 Compatible con los CPR de los 16 Voivodatos', desc: 'K-Dispatch gestiona el despacho multiagencia 112/997/998/999 con clasificación automática de incidentes, asignación de recursos y coordinación entre los 16 CPR voivodales, los centros de operaciones de la Policja y los comandos de la PSP — compatible con el modelo CPR polaco y los protocolos del MSWiA.' },
                { title: 'Gestión del Miejski Monitoring con Analítica IA RODO-Conforme', desc: 'K-Video integra los sistemas de miejski monitoring municipales y las cámaras policiales voivodales bajo una plataforma VMS unificada con analítica de IA — ANPR, detección de comportamientos sospechosos, búsqueda forense por atributos — con controles de privacidad configurables según el RODO, las guías de la UODO y la Ustawa o Policji.' },
                { title: 'Conciencia Situacional GIS para Coordinación Multiagencia Voivodal', desc: 'K-Safety proporciona el mapa operativo GIS compartido entre la Policja, la PSP y el Pogotowie Ratunkowe para coordinación multiagencia a escala de voivodato — con posiciones de unidades, gestión de incidentes, integración con los CPR y coordinación para grandes eventos (manifestaciones, inundaciones, emergencias industriales).' },
                { title: 'Cloud UE con Cumplimiento RODO/KSC/NIS2 y Compatibilidad PZP', desc: 'Despliegue en cloud en la UE con almacenamiento de datos en Polonia o zona UE. Cumplimiento RODO con DPIAs documentadas, KSC/NIS2 y directrices del CERT Polska. Compatible con los procesos de licitación pública PZP (BZP/TED). Preparado para requisitos de fondos EU (POPC/KPO) de los proyectos CPR 2.0 y SESPOL.' },
              ] : [
                { title: 'CPR-Compatible 112/997/998/999 CAD Dispatch for 16 Voivodeships', desc: 'K-Dispatch manages 112/997/998/999 multi-agency dispatch with automatic incident classification, resource assignment, and coordination between 16 voivodeship CPRs, Policja operations centres, and PSP commands — compatible with the Polish CPR model and MSWiA protocols.' },
                { title: 'Miejski Monitoring Management with RODO-Compliant AI Analytics', desc: 'K-Video integrates municipal miejski monitoring systems and voivodeship police cameras under a unified VMS platform with AI analytics — ANPR, suspicious behaviour detection, attribute-based forensic search — with configurable privacy controls per RODO, UODO guidelines, and the Ustawa o Policji.' },
                { title: 'GIS Situational Awareness for Voivodeship Multi-Agency Coordination', desc: 'K-Safety provides the shared GIS operational map across Policja, PSP, and Pogotowie Ratunkowe for voivodeship-scale multi-agency coordination — with unit positions, incident management, CPR integration, and coordination for major events (demonstrations, floods, industrial emergencies).' },
                { title: 'EU Cloud with RODO/KSC/NIS2 Compliance and PZP Compatibility', desc: 'EU cloud deployment with data storage in Poland or EU zone. RODO compliance with documented DPIAs, KSC/NIS2, and CERT Polska guidelines. Compatible with PZP public procurement processes (BZP/TED). Ready for EU fund requirements (POPC/KPO) of CPR 2.0 and SESPOL projects.' },
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
                ? 'Los Comandos Voivodales de la Policja, los CPR del 112 y los comandos de la PSP pueden desplegar K-Dispatch para despacho 112 multiagencia, K-Video para gestión del miejski monitoring con analítica RODO-conforme y K-Safety para conciencia situacional GIS compartida entre todas las agencias de seguridad pública polacas.'
                : 'Policja Voivodeship Commands, CPR 112 centres, and PSP commands can deploy K-Dispatch for multi-agency 112 dispatch, K-Video for miejski monitoring management with RODO-compliant analytics, and K-Safety for shared GIS situational awareness across all Polish public safety agencies.'}
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
              {es ? 'Software de Seguridad Pública en Polonia' : 'Public Safety Software in Poland'}
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
                { href: '/resources/public-safety-software-germany', en: 'Public Safety Software for Germany: Leitstellen, BOS Digital & DSGVO', es: 'Software de Seguridad Pública para Alemania: Leitstellen, BOS Digital y DSGVO' },
                { href: '/resources/public-safety-software-sweden', en: 'Public Safety Software for Sweden: Polisen, SOS Alarm & RAKEL', es: 'Software de Seguridad Pública para Suecia: Polisen, SOS Alarm y RAKEL' },
                { href: '/resources/public-safety-software-netherlands', en: 'Public Safety Software for the Netherlands: Politie, Meldkamer NL & C2000', es: 'Software de Seguridad Pública para los Países Bajos: Politie, Meldkamer NL y C2000' },
                { href: '/resources/public-safety-software-united-kingdom', en: 'Public Safety Software for the United Kingdom: 999 & Safe City', es: 'Software de Seguridad Pública para el Reino Unido: 999 y Safe City' },
                { href: '/resources/what-is-video-management-software', en: 'What Is VMS Software? Video Management Guide', es: '¿Qué Es el Software VMS? Guía de Gestión de Video' },
                { href: '/resources/what-is-emergency-dispatch-software', en: 'What Is Emergency Dispatch Software?', es: '¿Qué Es el Software de Despacho de Emergencias?' },
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
          h2={es ? 'Solicita una Demo para la Policja, los CPR del 112 o la PSP de Polonia' : 'Request a Demo for Poland\'s Policja, CPR 112 Centres, or PSP'}
          subtitle={es ? 'KabatOne integra el despacho 112/997/998/999 multiagencia compatible con los CPR voivodales, la gestión del miejski monitoring con analítica IA y la conciencia situacional GIS en una plataforma con cumplimiento RODO/KSC y cloud en la UE. Demo adaptada al modelo CPR y los proyectos CPR 2.0/SESPOL.' : 'KabatOne integrates voivodeship CPR-compatible 112/997/998/999 multi-agency dispatch, miejski monitoring AI management, and GIS situational awareness in a single platform with RODO/KSC compliance and EU cloud. Demo tailored to the CPR model and CPR 2.0/SESPOL projects.'}
        />

        <Footer es={es} />
      </div>
    </>
  )
}
