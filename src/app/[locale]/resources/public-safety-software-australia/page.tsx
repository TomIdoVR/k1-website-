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
  return generatePageMetadata('publicSafetySoftwareAustralia', locale)
}

export default async function PublicSafetySoftwareAustraliaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-australia/`
    : `${baseUrl}/resources/public-safety-software-australia/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Australia' : 'Public Safety Software — Australia', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Australia?',
      answer: 'Australia opera un sistema federado donde cada uno de los ocho estados y territorios mantiene su propia fuerza policial: NSW Police, Victoria Police, Queensland Police Service, WA Police Force, SAPOL, TAS Police, NT Police y ACT Policing (operada por la AFP). La Policía Federal Australiana (AFP) gestiona crímenes federales y la seguridad del Territorio de la Capital Australiana. Los servicios de emergencias incluyen brigadas de bomberos estatales, ambulancias y la agencia nacional AFAC (Australasian Fire and Emergency Service Authorities Council) para coordinación interestatal.',
    },
    {
      question: '¿Qué es el Triple Zero (000) y cómo funciona el despacho de emergencias en Australia?',
      answer: 'El Triple Zero (000) es el número de emergencias de Australia, equivalente al 911 estadounidense. Las llamadas son atendidas por operadores de telecomunicaciones (Telstra) que las transfieren a los centros de comunicaciones de emergencias (ECC) de cada servicio — policía, bomberos o ambulancia. Los centros de comunicaciones usan sistemas CAD para clasificar incidentes y despachar unidades. Australia está modernizando su infraestructura de emergencias a través del programa eCall y el proyecto Next Generation Emergency Communications (NGEC) hacia comunicaciones IP.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Australia?',
      answer: 'Los organismos gubernamentales australianos adquieren tecnología a través de varios mecanismos: Digital Marketplace del Gobierno Federal (para servicios digitales), paneles ICT de los Departamentos de Estado, licitaciones abiertas bajo el Commonwealth Procurement Rules, y en algunos casos contratos panel estatales como el NSW ICT Services Panel o el QLD Government ICT panel. Los proyectos que manejan datos policiales deben cumplir el Marco de Seguridad de la Información (ISM) del Australian Cyber Security Centre (ACSC).',
    },
    {
      question: '¿Cuáles son los requisitos de privacidad de datos para software de seguridad en Australia?',
      answer: 'El software de seguridad en Australia debe cumplir la Ley de Privacidad de 1988 y los Principios de Privacidad de Australia (APPs), que regulan cómo se recopilan, almacenan, usan y divulgan datos personales. Los servicios de policía operan bajo legislaciones estatales adicionales. Los sistemas de reconocimiento facial y vigilancia biométrica están sujetos a creciente escrutinio regulatorio. El Marco de Seguridad de la Información (ISM) del ACSC define los controles de seguridad para sistemas de información gubernamentales clasificados como OFFICIAL, PROTECTED o HIGHLY PROTECTED.',
    },
    {
      question: '¿Cómo se gestionan las emergencias en áreas remotas y desastres naturales en Australia?',
      answer: 'Australia tiene una de las mayores proporciones de territorio remoto del mundo. Los incendios forestales (bushfires), inundaciones y ciclones tropicales son amenazas recurrentes que requieren coordinación de emergencias entre múltiples jurisdicciones. La Agencia de Gestión de Emergencias de Australia (NEMA) coordina la respuesta nacional. Los centros de operaciones de emergencia (EOC) estatales usan sistemas de conciencia situacional GIS para monitorear incidentes que cruzan fronteras estatales, como los incendios del Black Summer de 2019-2020 que afectaron a múltiples estados.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para los servicios de emergencias australianos?',
      answer: 'KabatOne integra las funciones que los centros de comunicaciones de emergencias australianos gestionan en sistemas separados: despacho CAD con clasificación automática de incidentes (K-Dispatch), gestión de video y analítica de IA (K-Video) y conciencia situacional GIS para coordinación multiagencia (K-Safety). La plataforma admite despliegue on-premises o en la nube australiana para cumplir los requisitos ISM del ACSC. Solicite una demostración adaptada al modelo federado australiano de servicios de emergencias.',
    },
  ] : [
    {
      question: 'How is public safety organised in Australia?',
      answer: 'Australia operates a federated system where each of the eight states and territories maintains its own police force: NSW Police, Victoria Police, Queensland Police Service, WA Police Force, SAPOL, TAS Police, NT Police, and ACT Policing (operated by the AFP). The Australian Federal Police (AFP) handles federal crimes and Australian Capital Territory security. Emergency services include state fire brigades, ambulance services, and the national AFAC (Australasian Fire and Emergency Service Authorities Council) for interstate coordination.',
    },
    {
      question: 'What is Triple Zero (000) and how does emergency dispatch work in Australia?',
      answer: 'Triple Zero (000) is Australia\'s emergency number, equivalent to the US 911. Calls are answered by telecommunications operators (Telstra) who transfer them to each service\'s Emergency Communications Centre (ECC) — police, fire, or ambulance. Communications centres use CAD systems to classify incidents and dispatch units. Australia is modernising its emergency communications infrastructure through the eCall programme and the Next Generation Emergency Communications (NGEC) project toward IP-based communications.',
    },
    {
      question: 'How do Australian government agencies procure public safety software?',
      answer: 'Australian government agencies procure technology through several mechanisms: the Federal Government\'s Digital Marketplace (for digital services), state ICT panels, open tenders under Commonwealth Procurement Rules, and state panel contracts such as the NSW ICT Services Panel or QLD Government ICT panel. Projects handling police data must comply with the Information Security Manual (ISM) from the Australian Cyber Security Centre (ACSC).',
    },
    {
      question: 'What are the data privacy requirements for safety software in Australia?',
      answer: 'Safety software in Australia must comply with the Privacy Act 1988 and the Australian Privacy Principles (APPs), which regulate how personal data is collected, stored, used, and disclosed. Police services also operate under additional state-level legislation. Facial recognition and biometric surveillance systems face increasing regulatory scrutiny. The ACSC\'s Information Security Manual (ISM) defines security controls for government information systems classified as OFFICIAL, PROTECTED, or HIGHLY PROTECTED.',
    },
    {
      question: 'How are remote area emergencies and natural disasters managed in Australia?',
      answer: 'Australia has one of the world\'s highest proportions of remote territory. Bushfires, floods, and tropical cyclones are recurring threats requiring multi-jurisdictional emergency coordination. The National Emergency Management Agency (NEMA) coordinates the national response. State Emergency Operations Centres (EOCs) use GIS situational awareness systems to monitor incidents crossing state boundaries, such as the Black Summer fires of 2019-2020 that affected multiple states.',
    },
    {
      question: 'Why is KabatOne suited for Australian emergency services?',
      answer: 'KabatOne integrates the functions Australian Emergency Communications Centres manage across separate systems — CAD dispatch with automatic incident classification (K-Dispatch), video management and AI analytics (K-Video), and GIS situational awareness for multi-agency coordination (K-Safety) — into a single platform. The platform supports on-premises or Australian cloud deployment to meet ACSC ISM requirements. Request a demo tailored to Australia\'s federated emergency services model.',
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
      title: 'Estructura Federada: 8 Jurisdicciones Independientes',
      desc: 'Cada estado y territorio australiano opera sus propios servicios de policía, bomberos y ambulancia con sistemas y protocolos independientes. La coordinación interestatal — especialmente durante desastres naturales como los incendios Black Summer — requiere plataformas de conciencia situacional capaces de compartir datos en tiempo real entre jurisdicciones.',
      color: '#3b82f6',
    },
    {
      title: 'Modernización Triple Zero y NGEC',
      desc: 'Australia está modernizando su infraestructura de emergencias del sistema analógico hacia comunicaciones IP. El programa Next Generation Emergency Communications (NGEC) requiere que los centros de comunicaciones actualicen su software CAD para soportar llamadas multimedia, datos de localización mejorada y comunicaciones de banda ancha para primeros respondedores.',
      color: '#06b6d4',
    },
    {
      title: 'Seguridad de Datos ISM/ACSC y Privacy Act',
      desc: 'Los sistemas de tecnología policial en Australia deben cumplir el Marco de Seguridad de la Información (ISM) del ACSC, los Principios de Privacidad de Australia (APPs) y legislaciones estatales adicionales. Los proyectos de reconocimiento facial y biometría enfrentan creciente escrutinio regulatorio del OAIC (Oficina del Comisionado de Información de Australia).',
      color: '#f59e0b',
    },
    {
      title: 'Emergencias en Áreas Remotas y Desastres Naturales',
      desc: 'Australia combina megaciudades densas como Sydney y Melbourne con vastas áreas remotas. Los incendios forestales, ciclones e inundaciones requieren coordinación masiva entre múltiples agencias. Las operaciones de emergencia durante el Black Summer (2019-2020) mostraron las limitaciones de sistemas de mando separados entre estados.',
      color: '#ef4444',
    },
  ] : [
    {
      title: 'Federated Structure: 8 Independent Jurisdictions',
      desc: 'Each Australian state and territory operates its own police, fire, and ambulance services with independent systems and protocols. Interstate coordination — especially during natural disasters like the Black Summer fires — requires situational awareness platforms capable of sharing real-time data across jurisdictions.',
      color: '#3b82f6',
    },
    {
      title: 'Triple Zero Modernisation and NGEC',
      desc: 'Australia is modernising its emergency infrastructure from analogue to IP-based communications. The Next Generation Emergency Communications (NGEC) programme requires communications centres to upgrade CAD software to support multimedia calls, enhanced location data, and broadband communications for first responders.',
      color: '#06b6d4',
    },
    {
      title: 'ISM/ACSC Data Security and Privacy Act',
      desc: 'Police technology systems in Australia must comply with the ACSC\'s Information Security Manual (ISM), Australian Privacy Principles (APPs), and additional state legislation. Facial recognition and biometric projects face increasing regulatory scrutiny from the OAIC (Office of the Australian Information Commissioner).',
      color: '#f59e0b',
    },
    {
      title: 'Remote Area Emergencies and Natural Disasters',
      desc: 'Australia combines dense megacities like Sydney and Melbourne with vast remote areas. Bushfires, cyclones, and floods require massive coordination across multiple agencies. Emergency operations during Black Summer (2019-2020) exposed the limitations of separate command systems across states.',
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
          es ? 'Software de Seguridad Pública para Australia: Triple Zero, Policía Estatal y Desastres Naturales' : 'Public Safety Software for Australia: Triple Zero, State Police & Natural Disasters',
          es ? 'Plataforma unificada para servicios de emergencias australianos — despacho Triple Zero con soporte NGEC, analítica de video con IA y cumplimiento ISM/ACSC para policía y gestión de desastres.' : 'Unified platform for Australian emergency services — Triple Zero dispatch with NGEC support, AI video analytics, and ISM/ACSC compliance for police and disaster management.',
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
            <span style={{ color: 'var(--dim)' }}>{es ? 'Software de Seguridad Pública — Australia' : 'Public Safety Software — Australia'}</span>
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
                ? 'Software de Seguridad Pública para Australia: Triple Zero, Policía Estatal y Desastres Naturales'
                : 'Public Safety Software for Australia: Triple Zero, State Police & Natural Disasters'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Australia opera 8 fuerzas policiales estatales independientes, moderniza su sistema de emergencias Triple Zero hacia IP y gestiona algunos de los desastres naturales más complejos del mundo. KabatOne unifica el despacho de emergencias, la gestión de video con analítica de IA y la conciencia situacional multiagencia en una sola plataforma que cumple los requisitos ISM del ACSC.'
                : 'Australia operates 8 independent state police forces, is modernising its Triple Zero emergency system to IP, and manages some of the world\'s most complex natural disasters. KabatOne unifies emergency dispatch, video management with AI analytics, and multi-agency situational awareness in a single platform meeting ACSC ISM requirements.'}
            </p>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '40px 32px', background: 'rgba(59,130,246,0.04)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
            {(es ? [
              { value: '8', label: 'Fuerzas policiales estatales y territoriales' },
              { value: '9.5M+', label: 'Llamadas Triple Zero por año' },
              { value: '3', label: 'Blue-light services coordinados (Policía, Bomberos, Ambulancia)' },
              { value: 'NEMA', label: 'Coordinación nacional de emergencias' },
            ] : [
              { value: '8', label: 'State and territory police forces' },
              { value: '9.5M+', label: 'Triple Zero calls per year' },
              { value: '3', label: 'Blue-light services (Police, Fire, Ambulance)' },
              { value: 'NEMA', label: 'National emergency management coordination' },
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
            <h2 style={h2Style}>{es ? 'Retos Operativos para los Servicios de Emergencias Australianos' : 'Operational Challenges for Australian Emergency Services'}</h2>
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

        {/* ── SECTION 2: How KabatOne Works for Australia ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Cómo KabatOne Responde a los Requisitos Australianos' : 'How KabatOne Addresses Australian Requirements'}</h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne está diseñado para operar en entornos donde múltiples agencias independientes deben coordinar la respuesta a emergencias — desde centros urbanos densos hasta regiones remotas — desde una plataforma unificada.'
                : 'KabatOne is designed to operate in environments where multiple independent agencies must coordinate emergency response — from dense urban centres to remote regions — from a unified platform.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {(es ? [
                { title: 'Despacho Triple Zero Multiagencia', desc: 'K-Dispatch gestiona llamadas de voz y multimedia con triage automático y coordinación simultánea entre policía, bomberos y ambulancia desde una sola interfaz.' },
                { title: 'CCTV y Analítica de Video con IA', desc: 'K-Video integra cámaras ONVIF/RTSP con analítica de IA — ANPR/LPR, detección de comportamiento, búsqueda forense — para centros de comunicaciones urbanos y operaciones de emergencia en áreas remotas.' },
                { title: 'Conciencia Situacional para Desastres', desc: 'K-Safety proporciona el mapa operativo GIS compartido entre agencias estatales durante incendios, inundaciones y ciclones — con posiciones de unidades en tiempo real, alertas de sensores y coordinación NEMA.' },
                { title: 'Cumplimiento ISM/ACSC y Privacidad', desc: 'Despliegue on-premises o en la nube australiana. Controles de seguridad conformes al ISM del ACSC. Configuración de retención de datos bajo los Principios de Privacidad de Australia (APPs).' },
              ] : [
                { title: 'Multi-Agency Triple Zero Dispatch', desc: 'K-Dispatch manages voice and multimedia calls with automatic triage and simultaneous coordination across police, fire, and ambulance from a single interface.' },
                { title: 'CCTV and AI Video Analytics', desc: 'K-Video integrates ONVIF/RTSP cameras with AI analytics — ANPR/LPR, behavioural detection, forensic search — for urban communications centres and remote area emergency operations.' },
                { title: 'Disaster Situational Awareness', desc: 'K-Safety provides the shared GIS operational map across state agencies during bushfires, floods, and cyclones — with real-time unit positions, sensor alerts, and NEMA coordination support.' },
                { title: 'ISM/ACSC and Privacy Compliance', desc: 'On-premises or Australian cloud deployment. Security controls compliant with ACSC ISM. Data retention configuration under the Australian Privacy Principles (APPs).' },
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
                ? 'Los centros de comunicaciones de emergencias australianos pueden desplegar K-Dispatch para despacho Triple Zero y gestión CAD de incidentes, K-Video para gestión de CCTV con analítica de IA y K-Safety para conciencia situacional GIS durante operaciones de emergencia complejas.'
                : 'Australian Emergency Communications Centres can deploy K-Dispatch for Triple Zero dispatch and incident CAD management, K-Video for CCTV management with AI analytics, and K-Safety for GIS situational awareness during complex emergency operations.'}
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
              {es ? 'Software de Seguridad Pública en Australia' : 'Public Safety Software in Australia'}
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
                { href: '/resources/public-safety-software-canada', en: 'Public Safety Software for Canada', es: 'Software de Seguridad Pública para Canadá' },
                { href: '/resources/public-safety-software-united-kingdom', en: 'Public Safety Software for the United Kingdom', es: 'Software de Seguridad Pública para el Reino Unido' },
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
          h2={es ? 'Solicita una Demo para tu Centro de Comunicaciones' : 'Request a Demo for Your Communications Centre'}
          subtitle={es ? 'KabatOne integra despacho Triple Zero, CCTV con analítica de IA y conciencia situacional multiagencia en una sola plataforma. Demo adaptada al contexto australiano.' : 'KabatOne integrates Triple Zero dispatch, CCTV with AI analytics, and multi-agency situational awareness in a single platform. Demo tailored to the Australian context.'}
        />

        <Footer es={es} />
      </div>
    </>
  )
}
