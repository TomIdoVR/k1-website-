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
  return generatePageMetadata('publicSafetySoftwareIndia', locale)
}

export default async function PublicSafetySoftwareIndiaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-india/`
    : `${baseUrl}/resources/public-safety-software-india/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — India' : 'Public Safety Software — India', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en India?',
      answer: 'India opera un sistema de orden público dividido entre el gobierno central y los estados. Cada uno de los 28 estados y 8 territorios de la unión mantiene su propia fuerza policial bajo el IPS (Servicio de Policía de India). Las fuerzas policiales centrales — CRPF, BSF, CISF, ITBP, NSG — operan bajo el Ministerio del Interior (MHA). La coordinación entre fuerzas es gestionada por el NCRB (Oficina Nacional de Registros de Crimen) y el NATGRID para inteligencia y análisis de delitos.',
    },
    {
      question: '¿Qué es el número 112 India y cómo funciona el despacho de emergencias?',
      answer: 'El 112 es el número nacional de emergencias de India, unificando los servicios de policía (100), bomberos (101) y ambulancia (102). El Proyecto 112 India, lanzado en 2019 bajo el MHA, estableció centros ERSS (Emergency Response Support System) en cada estado para atender llamadas multimedia y coordinar el despacho de unidades. Los centros ERSS usan sistemas CAD y plataformas GIS para clasificar incidentes y asignar la respuesta más cercana.',
    },
    {
      question: '¿Qué son los Integrated Command and Control Centers (ICCC) en India?',
      answer: 'Los ICCC son el núcleo tecnológico de la Misión Smart Cities de India, lanzada en 2015. Cada una de las más de 100 Smart Cities tiene mandato de desplegar un ICCC que integre vigilancia CCTV, gestión de tráfico, servicios de emergencia, utilidades urbanas y análisis de datos en tiempo real. Los ICCC operan 24/7 y coordinan múltiples departamentos municipales desde una sala de mando centralizada, siguiendo los estándares del Ministerio de Vivienda y Asuntos Urbanos (MoHUA).',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en India?',
      answer: 'El gobierno indio adquiere tecnología principalmente a través del GEM (Government e-Marketplace) para compras centrales, licitaciones NICSI (National Informatics Centre Services Inc.) para proyectos IT del gobierno central, y procesos de licitación L1 (menor precio) para contratos estatales. Los proyectos Smart City se procesan a través de los SPVs (Special Purpose Vehicles) municipales. El DIPP y el MeitY (Ministerio de Electrónica y TI) tienen políticas de preferencia local bajo el programa Make in India que dan ventaja a proveedores con presencia local.',
    },
    {
      question: '¿Cuáles son los requisitos de privacidad de datos para software de seguridad en India?',
      answer: 'India aprobó la Ley de Protección de Datos Personales Digitales (DPDP) en 2023, que regula el procesamiento de datos personales y requiere consentimiento explícito, mecanismos de cumplimiento de derechos y notificación de brechas. Los sistemas de vigilancia deben cumplir también la Ley IT de 2000 y las reglas de intermediarios. Los proyectos de reconocimiento facial están sujetos a la supervisión del Tribunal Supremo de India y las directrices del UIDAI. Las políticas de localización de datos gubernamentales requieren que ciertos datos permanezcan en servidores ubicados en India.',
    },
    {
      question: '¿Qué proyectos Safe City existen en India y qué tecnología usan?',
      answer: 'India tiene proyectos Safe City en Delhi, Mumbai, Kolkata, Chennai, Bengaluru, Hyderabad, Ahmedabad y Lucknow, financiados por el MHA bajo el Fondo Nirbhaya. Estos proyectos integran redes de CCTV con analítica de IA (reconocimiento facial, LPR, detección de comportamiento), sistemas de despacho de emergencias y centros de mando centralizados. Delhi\'s Safe City project opera más de 300,000 cámaras integradas con el Delhi Police Command Center. Lucknow\'s ICCC es uno de los más completos de India.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para los ICCC y proyectos Safe City de India?',
      answer: 'KabatOne integra exactamente las capacidades que los ICCC de India requieren bajo un solo proveedor: despacho de emergencias 112 con clasificación automática de incidentes (K-Dispatch), gestión de CCTV con analítica de IA — reconocimiento facial, LPR, detección de comportamiento — (K-Video) y conciencia situacional GIS para coordinación multiagencia (K-Safety). La plataforma admite despliegue on-premises para cumplir los requisitos de localización de datos del gobierno indio. Solicite una demostración adaptada al contexto de los proyectos Smart City de India.',
    },
  ] : [
    {
      question: 'How is public safety organised in India?',
      answer: 'India operates a law and order system divided between the central government and the states. Each of the 28 states and 8 union territories maintains its own police force under the IPS (Indian Police Service). Central armed police forces — CRPF, BSF, CISF, ITBP, NSG — operate under the Ministry of Home Affairs (MHA). Inter-force coordination is handled by the NCRB (National Crime Records Bureau) and NATGRID for intelligence and crime analysis.',
    },
    {
      question: 'What is 112 India and how does emergency dispatch work?',
      answer: '112 is India\'s national emergency number, unifying police (100), fire (101), and ambulance (102) services. The 112 India Project, launched in 2019 under MHA, established ERSS (Emergency Response Support System) centres in each state to handle multimedia calls and coordinate unit dispatch. ERSS centres use CAD systems and GIS platforms to classify incidents and assign the nearest response.',
    },
    {
      question: 'What are Integrated Command and Control Centres (ICCCs) in India?',
      answer: 'ICCCs are the technology backbone of India\'s Smart Cities Mission, launched in 2015. Each of the 100+ Smart Cities is mandated to deploy an ICCC integrating CCTV surveillance, traffic management, emergency services, urban utilities, and real-time data analytics. ICCCs operate 24/7 and coordinate multiple municipal departments from a centralised command room, following standards set by the Ministry of Housing and Urban Affairs (MoHUA).',
    },
    {
      question: 'How do Indian government agencies procure public safety software?',
      answer: 'The Indian government procures technology primarily through GEM (Government e-Marketplace) for central purchases, NICSI (National Informatics Centre Services Inc.) tenders for central IT projects, and L1 (lowest-price) bidding processes for state contracts. Smart City projects are processed through municipal SPVs (Special Purpose Vehicles). The Make in India programme gives procurement advantages to vendors with local presence, governed by DIPP and MeitY (Ministry of Electronics & IT) policies.',
    },
    {
      question: 'What are the data privacy requirements for safety software in India?',
      answer: 'India passed the Digital Personal Data Protection (DPDP) Act in 2023, regulating personal data processing and requiring explicit consent, rights compliance mechanisms, and breach notification. Surveillance systems must also comply with the IT Act 2000 and intermediary rules. Facial recognition projects face Supreme Court oversight and UIDAI guidelines. Government data localisation policies require certain data to remain on servers located within India.',
    },
    {
      question: 'What Safe City projects exist in India and what technology do they use?',
      answer: 'India has Safe City projects in Delhi, Mumbai, Kolkata, Chennai, Bengaluru, Hyderabad, Ahmedabad, and Lucknow, funded by MHA under the Nirbhaya Fund. These projects integrate CCTV networks with AI analytics (facial recognition, LPR, behavioural detection), emergency dispatch systems, and centralised command centres. Delhi\'s Safe City project operates over 300,000 cameras integrated with the Delhi Police Command Centre. Lucknow\'s ICCC is among India\'s most comprehensive.',
    },
    {
      question: 'Why is KabatOne suited for Indian ICCCs and Safe City projects?',
      answer: 'KabatOne integrates exactly the capabilities Indian ICCCs require under a single vendor: 112 emergency dispatch with automatic incident classification (K-Dispatch), CCTV management with AI analytics — facial recognition, LPR, behavioural detection — (K-Video), and GIS situational awareness for multi-agency coordination (K-Safety). The platform supports on-premises deployment to meet Indian government data localisation requirements. Request a demo tailored to India\'s Smart City project context.',
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
      title: 'Policía Fragmentada: 28 Estados + Fuerzas Centrales',
      desc: 'India opera 28 fuerzas policiales estatales independientes más múltiples fuerzas armadas centrales (CRPF, BSF, CISF). La coordinación interestatal para crímenes transfronterizos, gestión de disturbios y seguridad de grandes eventos requiere plataformas de conciencia situacional capaces de operar a través de jurisdicciones con protocolos y sistemas diferentes.',
      color: '#3b82f6',
    },
    {
      title: 'Despliegue de ICCC en 100+ Smart Cities',
      desc: 'La Misión Smart Cities de India exige que cada ciudad cuente con un ICCC que integre CCTV, tráfico, servicios de emergencia y análisis urbano en tiempo real. La mayoría de los ICCC operan sistemas fragmentados de múltiples proveedores que dificultan la coordinación de respuesta a emergencias y la gestión unificada del video de vigilancia.',
      color: '#06b6d4',
    },
    {
      title: 'DPDP Act 2023 y Localización de Datos',
      desc: 'La nueva Ley de Protección de Datos Personales Digitales de India impone requisitos de localización de datos, consentimiento explícito y notificación de brechas. Los sistemas de reconocimiento facial en proyectos Safe City enfrentan escrutinio judicial creciente. Los proveedores de tecnología deben garantizar que los datos policiales se almacenen en infraestructura ubicada en territorio indio.',
      color: '#f59e0b',
    },
    {
      title: 'Brecha Urbano-Rural y Desastres Naturales',
      desc: 'India combina megaciudades de 20M+ habitantes como Mumbai y Delhi con 600,000 aldeas rurales. Las inundaciones monzónicas, terremotos (zona sísmica IV en zonas del norte) y ciclones del Golfo de Bengala requieren coordinación multiagencia. Los sistemas de respuesta a emergencias deben escalar desde el nivel municipal al estatal en horas.',
      color: '#ef4444',
    },
  ] : [
    {
      title: 'Fragmented Policing: 28 States + Central Forces',
      desc: 'India operates 28 independent state police forces plus multiple central armed police forces (CRPF, BSF, CISF). Inter-state coordination for cross-border crime, riot management, and large-event security requires situational awareness platforms capable of operating across jurisdictions with different protocols and systems.',
      color: '#3b82f6',
    },
    {
      title: 'ICCC Rollout Across 100+ Smart Cities',
      desc: 'India\'s Smart Cities Mission mandates every city to deploy an ICCC integrating CCTV, traffic, emergency services, and real-time urban analytics. Most ICCCs operate fragmented multi-vendor systems that hinder emergency response coordination and unified surveillance video management.',
      color: '#06b6d4',
    },
    {
      title: 'DPDP Act 2023 and Data Localisation',
      desc: 'India\'s new Digital Personal Data Protection Act imposes data localisation requirements, explicit consent, and breach notification obligations. Facial recognition systems in Safe City projects face increasing judicial scrutiny. Technology vendors must ensure police data is stored on infrastructure located within Indian territory.',
      color: '#f59e0b',
    },
    {
      title: 'Urban-Rural Divide and Natural Disasters',
      desc: 'India combines megacities of 20M+ like Mumbai and Delhi with 600,000 rural villages. Monsoon floods, earthquakes (seismic zone IV in northern regions), and Bay of Bengal cyclones require multi-agency coordination. Emergency response systems must scale from municipal to state level within hours.',
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
          es ? 'Software de Seguridad Pública para India: Smart Cities, ICCC y Emergencias 112' : 'Public Safety Software for India: Smart Cities, ICCC & 112 Emergency',
          es ? 'Plataforma unificada para los ICCC de India y proyectos Safe City — despacho 112, analítica de video con IA y conciencia situacional GIS con cumplimiento DPDP Act 2023 y localización de datos.' : 'Unified platform for India\'s ICCCs and Safe City projects — 112 dispatch, AI video analytics, and GIS situational awareness with DPDP Act 2023 compliance and data localisation.',
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
            <span style={{ color: 'var(--dim)' }}>{es ? 'Software de Seguridad Pública — India' : 'Public Safety Software — India'}</span>
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
                ? 'Software de Seguridad Pública para India: Smart Cities, ICCC y Emergencias 112'
                : 'Public Safety Software for India: Smart Cities, ICCC & 112 Emergency'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'India opera 28 fuerzas policiales estatales independientes, está desplegando más de 100 Integrated Command and Control Centers (ICCC) bajo la Misión Smart Cities y moderniza su sistema de emergencias unificado al 112. KabatOne unifica el despacho de emergencias, la gestión de video con analítica de IA y la conciencia situacional GIS en una plataforma lista para el contexto ICCC indio con localización de datos on-premises.'
                : 'India operates 28 independent state police forces, is deploying 100+ Integrated Command and Control Centres (ICCCs) under the Smart Cities Mission, and is modernising its unified emergency system to 112. KabatOne unifies emergency dispatch, AI video analytics, and GIS situational awareness in a single platform built for India\'s ICCC context with on-premises data localisation.'}
            </p>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '40px 32px', background: 'rgba(59,130,246,0.04)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
            {(es ? [
              { value: '100+', label: 'Smart Cities con mandato ICCC' },
              { value: '28', label: 'Fuerzas policiales estatales + 8 UTs' },
              { value: '112', label: 'Sistema nacional unificado de emergencias' },
              { value: '1.4B', label: 'Habitantes — el mayor mercado de gobierno digital' },
            ] : [
              { value: '100+', label: 'Smart Cities with ICCC mandate' },
              { value: '28', label: 'State police forces + 8 Union Territories' },
              { value: '112', label: 'Unified national emergency number' },
              { value: '1.4B', label: 'Population — world\'s largest digital government market' },
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
            <h2 style={h2Style}>{es ? 'Retos Operativos para la Seguridad Pública en India' : 'Operational Challenges for Public Safety in India'}</h2>
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

        {/* ── SECTION 2: How KabatOne Works for India ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Cómo KabatOne Responde a los Requisitos de los ICCC Indios' : 'How KabatOne Addresses Indian ICCC Requirements'}</h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne está diseñado para integrar múltiples funciones operativas de seguridad pública en un solo dashboard de mando — exactamente el modelo que los ICCC de la Misión Smart Cities de India requieren para gestionar CCTV, despacho de emergencias y análisis urbano en tiempo real desde una sola interfaz.'
                : 'KabatOne is designed to integrate multiple public safety operational functions into a single command dashboard — exactly the model India\'s Smart Cities Mission ICCCs require to manage CCTV, emergency dispatch, and real-time urban analytics from a single interface.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {(es ? [
                { title: 'Despacho 112 con Triage Automático', desc: 'K-Dispatch gestiona llamadas de voz y multimedia con clasificación automática de incidentes y coordinación simultánea entre policía, bomberos y ambulancia — listo para el modelo ERSS del proyecto 112 India.' },
                { title: 'Gestión de CCTV con Analítica de IA', desc: 'K-Video integra redes masivas de cámaras ONVIF/RTSP con IA — reconocimiento facial, LPR/ANPR, detección de comportamiento, alertas perimetrales — para proyectos Safe City y redes de vigilancia urbana de gran escala.' },
                { title: 'Conciencia Situacional GIS Multiagencia', desc: 'K-Safety proporciona el mapa operativo en tiempo real compartido entre múltiples departamentos del ICCC — policía, bomberos, tráfico, utilidades — con posiciones de unidades, alertas de sensores y gestión de incidentes georreferenciada.' },
                { title: 'Localización de Datos On-Premises', desc: 'Despliegue en infraestructura local dentro de India para cumplir los requisitos de localización de datos del DPDP Act 2023 y las políticas del gobierno central. Compatible con data centers NIC y nubes gubernamentales homologadas.' },
              ] : [
                { title: '112 Dispatch with Automatic Triage', desc: 'K-Dispatch manages voice and multimedia calls with automatic incident classification and simultaneous coordination across police, fire, and ambulance — ready for the ERSS model of India\'s 112 project.' },
                { title: 'CCTV Management with AI Analytics', desc: 'K-Video integrates large-scale ONVIF/RTSP camera networks with AI — facial recognition, LPR/ANPR, behavioural detection, perimeter alerts — for Safe City projects and large-scale urban surveillance networks.' },
                { title: 'Multi-Agency GIS Situational Awareness', desc: 'K-Safety provides the real-time operational map shared across multiple ICCC departments — police, fire, traffic, utilities — with unit positions, sensor alerts, and georeferenced incident management.' },
                { title: 'On-Premises Data Localisation', desc: 'Deployment on local infrastructure within India to meet DPDP Act 2023 data localisation requirements and central government policies. Compatible with NIC data centres and approved government clouds.' },
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
                ? 'Los ICCC indios pueden desplegar K-Dispatch para despacho 112 y gestión CAD de incidentes, K-Video para redes masivas de CCTV con analítica de IA y K-Safety para conciencia situacional GIS compartida entre todos los departamentos del centro de mando.'
                : 'Indian ICCCs can deploy K-Dispatch for 112 dispatch and incident CAD management, K-Video for large-scale CCTV networks with AI analytics, and K-Safety for GIS situational awareness shared across all command centre departments.'}
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
              {es ? 'Software de Seguridad Pública en India' : 'Public Safety Software in India'}
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
                { href: '/resources/public-safety-software-united-states', en: 'Public Safety Software for the United States', es: 'Software de Seguridad Pública para EE.UU.' },
                { href: '/resources/public-safety-software-united-kingdom', en: 'Public Safety Software for the United Kingdom', es: 'Software de Seguridad Pública para el Reino Unido' },
                { href: '/resources/public-safety-software-australia', en: 'Public Safety Software for Australia', es: 'Software de Seguridad Pública para Australia' },
                { href: '/resources/public-safety-software-middle-east', en: 'Public Safety Software for the Middle East', es: 'Software de Seguridad Pública para Medio Oriente' },
                { href: '/resources/what-is-video-management-software', en: 'What Is VMS Software? Video Management Guide', es: '¿Qué Es el Software VMS? Guía de Gestión de Video' },
                { href: '/resources/what-is-a-real-time-crime-center', en: 'What Is a Real-Time Crime Center (RTCC)?', es: '¿Qué Es un Centro de Crimen en Tiempo Real (RTCC)?' },
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
          h2={es ? 'Solicita una Demo para tu ICCC o Proyecto Safe City' : 'Request a Demo for Your ICCC or Safe City Project'}
          subtitle={es ? 'KabatOne integra despacho 112, redes masivas de CCTV con analítica de IA y conciencia situacional multiagencia en una plataforma lista para el ICCC de India con localización de datos on-premises.' : 'KabatOne integrates 112 dispatch, large-scale CCTV networks with AI analytics, and multi-agency situational awareness in a single platform built for India\'s ICCC with on-premises data localisation.'}
        />

        <Footer es={es} />
      </div>
    </>
  )
}
