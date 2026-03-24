import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { softwareApplicationSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HubDiagram from '@/components/HubDiagram'
import CTASection from '@/components/CTASection'
import PageHero from '@/components/PageHero'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('kConnect', locale)
}

export default async function KConnectPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#22c55e'

  const content = {
    eyebrow: es ? 'Videovigilancia Comunitaria \u00b7 K-Connect' : 'Collaborative Surveillance \u00b7 K-Connect',
    h1: es
      ? 'Plataforma Segura de Videovigilancia Comunitaria'
      : 'Secure Community-Based Video Sharing for Public Safety',
    subtitle: es
      ? 'Conecta c\u00e1maras de negocios y ciudadanos al centro de mando municipal. K-Connect ampl\u00eda la cobertura de vigilancia sin infraestructura adicional.'
      : 'Secure, real-time video sharing and collaboration between private organizations and public safety agencies \u2014 enabling unified situational awareness without boundaries.',
    stat1: { value: es ? 'Interagencial' : 'Cross-Agency', label: es ? 'Compartici\u00f3n' : 'Sharing' },
    stat2: { value: es ? 'Basado en Roles' : 'Role-Based', label: es ? 'Acceso' : 'Access' },
    stat3: { value: es ? 'Tiempo Real' : 'Real-Time', label: es ? 'Monitoreo' : 'Monitoring' },
    cta1: es ? 'Solicita una Demo' : 'Book a Demo',
    cta2: es ? 'Habla con un Experto' : 'Talk to an Expert',
    benefitsLabel: es ? 'Por qu\u00e9 K-Connect' : 'Why K-Connect',
    benefitsH2: es ? 'Interoperabilidad Segura para una Respuesta M\u00e1s R\u00e1pida e Inteligente' : 'Secure Interoperability for Smarter, Faster Response',
    processH2: es ? 'De la Conexi\u00f3n de C\u00e1maras a la Respuesta ante Incidentes' : 'From Camera Connection to Incident Response',
    audienceH2: es ? 'Industrias y Organizaciones que Usan K-Connect' : 'Industries & Organizations Using K-Connect',
    audienceLabel: es ? 'Qui\u00e9n Usa K-Connect' : 'Who Uses K-Connect',
    intH2: es ? 'Plataforma de Integraci\u00f3n Segura para Sistemas Cr\u00edticos de Seguridad P\u00fablica' : 'Secure Integration Platform for Critical Public Safety Systems',
    intLabel: es ? 'Integraciones' : 'Integrations',
    ctaH2: es ? '\u00bfListo para Conectar tu Organizaci\u00f3n?' : 'Ready to Connect Your Organization?',
    ctaSub: es
      ? 'Descubre c\u00f3mo K-Connect conecta tus c\u00e1maras de seguridad con las agencias que protegen tu comunidad.'
      : 'See how K-Connect bridges your security cameras with the agencies that protect your community.',
    ctaContact: es ? 'Contactar Ventas' : 'Contact Sales',
  }

  const benefits = es ? [
    { icon: '\ud83d\udcf9', title: 'Compartici\u00f3n Controlada de Video', desc: 'Comparte c\u00e1maras o transmisiones espec\u00edficas con las fuerzas del orden bajo demanda, con controles granulares de permisos.' },
    { icon: '\u26a1', title: 'Conciencia de Incidentes en Tiempo Real', desc: 'Todas las partes conectadas ven las mismas transmisiones en vivo durante un incidente activo, acelerando la coordinaci\u00f3n.' },
    { icon: '\u221e', title: 'Integraci\u00f3n de Sistemas', desc: 'Se conecta con K-Video, K-Safety y plataformas VMS de terceros \u2014 funciona con la infraestructura existente.' },
    { icon: '\ud83d\udd12', title: 'Privacidad y Cumplimiento', desc: 'Acceso basado en roles, pistas de auditor\u00eda y expiraci\u00f3n autom\u00e1tica de compartici\u00f3n aseguran el cumplimiento regulatorio.' },
    { icon: '\u2699', title: 'Flexibilidad de Despliegue', desc: 'Despliegue en nube, h\u00edbrido o local. Escala desde un solo edificio hasta una red a nivel de ciudad.' },
  ] : [
    { icon: '\ud83d\udcf9', title: 'Controlled Video Sharing', desc: 'Share specific cameras or streams with law enforcement on-demand, with granular permission controls.' },
    { icon: '\u26a1', title: 'Real-Time Incident Awareness', desc: 'All connected parties see the same live feeds during an active incident, accelerating coordination.' },
    { icon: '\u221e', title: 'System Integration', desc: 'Connects with K-Video, K-Safety, and third-party VMS platforms \u2014 works with existing infrastructure.' },
    { icon: '\ud83d\udd12', title: 'Privacy & Compliance', desc: 'Role-based access, audit trails, and automatic sharing expiry ensure full regulatory compliance.' },
    { icon: '\u2699', title: 'Deployment Flexibility', desc: 'Cloud, hybrid, or on-premises deployment. Scales from a single building to a city-wide network.' },
  ]

  const audienceCards = es ? [
    { icon: '\ud83c\udfeb', title: 'Escuelas y Universidades', desc: 'Sistemas de seguridad de campus conectados a las fuerzas del orden locales para una respuesta r\u00e1pida ante emergencias.' },
    { icon: '\ud83c\udfe2', title: 'Negocios y Comercio', desc: 'Redes de vigilancia comercial que comparten transmisiones con agencias de seguridad durante incidentes.' },
    { icon: '\ud83c\udfe0', title: 'Comunidades Residenciales', desc: 'Comunidades cerradas y asociaciones de vecinos conectadas a patrullas locales y polic\u00eda municipal.' },
    { icon: '\ud83c\udfdb', title: 'Instalaciones Gubernamentales', desc: 'Edificios p\u00fablicos compartiendo im\u00e1genes de infraestructura cr\u00edtica con gesti\u00f3n de emergencias.' },
    { icon: '\ud83c\udfdf', title: 'Espacios P\u00fablicos', desc: 'Estadios, centros de tr\u00e1nsito y recintos de eventos con coordinaci\u00f3n de video entre agencias.' },
  ] : [
    { icon: '\ud83c\udfeb', title: 'Schools & Universities', desc: 'Campus security systems connected to local law enforcement for rapid emergency response.' },
    { icon: '\ud83c\udfe2', title: 'Businesses & Retail', desc: 'Commercial surveillance networks that share feeds with security agencies during incidents.' },
    { icon: '\ud83c\udfe0', title: 'Residential Communities', desc: 'Gated communities and HOAs connected to neighborhood patrols and municipal police.' },
    { icon: '\ud83c\udfdb', title: 'Government Facilities', desc: 'Public buildings sharing critical infrastructure footage with emergency management.' },
    { icon: '\ud83c\udfdf', title: 'Public Venues', desc: 'Stadiums, transit hubs, and event centers with seamless agency-to-agency video coordination.' },
  ]

  const integrations = es ? [
    { title: 'Plataformas de Seguridad P\u00fablica', desc: 'Se integra con K-Safety, K-Dispatch y sistemas CAD/RTCC de terceros.' },
    { title: 'Sistemas de Gesti\u00f3n de Video', desc: 'Compatible con los principales proveedores de VMS y fabricantes de c\u00e1maras IP.' },
    { title: 'Comunicaci\u00f3n y Acceso', desc: 'Canales encriptados seguros, SSO, apps m\u00f3viles e integraci\u00f3n con directorio empresarial.' },
  ] : [
    { title: 'Public Safety Platforms', desc: 'Integrates with K-Safety, K-Dispatch, and third-party CAD/RTCC systems.' },
    { title: 'Video Management Systems', desc: 'Compatible with major VMS providers and IP camera manufacturers.' },
    { title: 'Communication & Access', desc: 'Secure encrypted channels, SSO, mobile apps, and enterprise directory integration.' },
  ]

  const processInputs = es
    ? ['C\u00e1maras', 'Organizaciones', 'Permisos', 'Monitoreo IA', 'Feeds de Eventos']
    : ['Cameras', 'Organizations', 'Permissions', 'AI Monitoring', 'Event Feeds']
  const processOutputs = es
    ? ['Fuerzas del Orden', 'Operaciones de Ciudad', 'Pista de Auditor\u00eda']
    : ['Law Enforcement', 'City Operations', 'Audit Trail']

  const connectFaqs = es ? [
    { question: '¿Qué es K-Connect?', answer: 'K-Connect es una plataforma segura de videovigilancia comunitaria que conecta cámaras de negocios, escuelas y ciudadanos al centro de mando municipal. Amplía la cobertura de vigilancia sin infraestructura adicional mediante compartición controlada de video.' },
    { question: '¿Cómo comparten los ciudadanos video con K-Connect?', answer: 'Las organizaciones comparten cámaras o transmisiones específicas con las fuerzas del orden bajo demanda, con controles granulares de permisos. Todas las partes conectadas ven las mismas transmisiones en vivo durante un incidente activo, acelerando la coordinación.' },
    { question: '¿Cumple K-Connect con normas de privacidad?', answer: 'Sí. K-Connect implementa acceso basado en roles, pistas de auditoría completas y expiración automática de compartición para asegurar el cumplimiento regulatorio total. Todos los canales de comunicación están encriptados de extremo a extremo.' },
    { question: '¿Cómo funciona K-Connect con agencias de seguridad pública?', answer: 'K-Connect se integra con K-Safety, K-Dispatch y sistemas CAD/RTCC de terceros. Permite a escuelas, negocios, comunidades residenciales e instalaciones gubernamentales compartir video en tiempo real con las agencias que protegen su comunidad.' },
  ] : [
    { question: 'What is K-Connect?', answer: 'K-Connect is a secure community-based video sharing platform that connects cameras from businesses, schools, and citizens to the municipal command center. It expands surveillance coverage without additional infrastructure through controlled video sharing.' },
    { question: 'How do citizens share video with K-Connect?', answer: 'Organizations share specific cameras or streams with law enforcement on-demand, with granular permission controls. All connected parties see the same live feeds during an active incident, accelerating coordination.' },
    { question: 'Is K-Connect privacy-compliant?', answer: 'Yes. K-Connect implements role-based access, full audit trails, and automatic sharing expiry to ensure complete regulatory compliance. All communication channels are end-to-end encrypted.' },
    { question: 'How does K-Connect work with public safety agencies?', answer: 'K-Connect integrates with K-Safety, K-Dispatch, and third-party CAD/RTCC systems. It enables schools, businesses, residential communities, and government facilities to share real-time video with the agencies that protect their community.' },
  ]

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: 'K-Connect', url: es ? 'https://kabatone.com/es/k-connect/' : 'https://kabatone.com/k-connect/' },
  ]

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema(
          'K-Connect',
          es ? 'Plataforma segura de videovigilancia comunitaria que conecta cámaras de organizaciones privadas con agencias de seguridad pública.' : 'Secure community-based video sharing platform connecting private organizations\' cameras with public safety agencies.',
          'Community Video Sharing Platform',
          'https://kabatone.com/k-connect'
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(connectFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* -- HERO -- */}
        <PageHero
          accent={ACCENT}
          eyebrow={content.eyebrow}
          h1={content.h1}
          subtitle={content.subtitle}
          stats={[content.stat1, content.stat2, content.stat3]}
          cta1={content.cta1}
          cta2={content.cta2}
        >
          {/* Network Mockup */}
          <div style={{ background: '#0b1628', borderRadius: '16px', border: `1px solid ${ACCENT}55`, overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.5)', borderTop: `3px solid ${ACCENT}` }}>
            <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--white)', fontFamily: 'monospace', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {es ? 'Red K-Connect' : 'K-Connect Network'}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', fontWeight: 700, color: ACCENT, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.12em' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: ACCENT, animation: 'pulse 1.2s ease infinite' }} />
                LIVE
              </span>
            </div>
            {/* Network Diagram */}
            <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px', position: 'relative' }}>
              <div style={{ position: 'relative', width: '220px', height: '180px' }}>
                {/* SVG Lines */}
                <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}>
                  {[
                    { x2: '50%', y2: '10%' },
                    { x2: '85%', y2: '25%' },
                    { x2: '85%', y2: '75%' },
                    { x2: '15%', y2: '25%' },
                    { x2: '15%', y2: '75%' },
                  ].map((line, i) => (
                    <line key={i} x1="50%" y1="50%" x2={line.x2} y2={line.y2}
                      stroke="rgba(34,197,94,0.25)" strokeWidth="1" strokeDasharray="4 4">
                      <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="3s" repeatCount="indefinite" />
                    </line>
                  ))}
                </svg>
                {/* Central Hub */}
                <div style={{
                  position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: 'rgba(34,197,94,0.15)', border: `2px solid ${ACCENT}`,
                  boxShadow: `0 0 24px rgba(34,197,94,0.35)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 4,
                }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(34,197,94,0.35)', border: `1px solid ${ACCENT}` }} />
                </div>
                {/* Satellite Nodes */}
                {[
                  { left: '50%', top: '10%', icon: '\ud83c\udfeb', label: es ? 'Escuelas' : 'Schools' },
                  { left: '85%', top: '25%', icon: '\ud83d\udee1\ufe0f', label: es ? 'Polic\u00eda' : 'Police' },
                  { left: '85%', top: '75%', icon: '\ud83d\ude91', label: es ? 'Emergencias' : 'Emergency' },
                  { left: '15%', top: '25%', icon: '\ud83c\udfe2', label: es ? 'Negocios' : 'Business' },
                  { left: '15%', top: '75%', icon: '\ud83c\udfdb\ufe0f', label: es ? 'Gobierno' : 'City Hall' },
                ].map((node, i) => (
                  <div key={i} style={{
                    position: 'absolute', left: node.left, top: node.top,
                    transform: 'translate(-50%, -50%)', width: '32px', height: '32px',
                    borderRadius: '50%', background: 'rgba(11,18,32,0.9)',
                    border: '1px solid rgba(34,197,94,0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 3, fontSize: '14px',
                  }}>
                    {node.icon}
                    <span style={{
                      position: 'absolute', top: '100%', left: '50%',
                      transform: 'translate(-50%, 4px)', fontSize: '8px',
                      color: 'var(--dim)', whiteSpace: 'nowrap', fontFamily: 'monospace',
                      letterSpacing: '0.04em',
                    }}>{node.label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Mockup Footer */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--border)' }}>
              {[
                { val: '14', label: es ? 'Organizaciones' : 'Orgs Connected' },
                { val: '3', label: es ? 'Shares Activos' : 'Active Shares', color: ACCENT },
                { val: es ? 'Seguro' : 'Secure', label: es ? 'Canales Encriptados' : 'Encrypted Channels', color: ACCENT },
              ].map((stat, i) => (
                <div key={i} style={{ padding: '12px 14px', borderRight: i < 2 ? '1px solid var(--border)' : 'none' }}>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: stat.color || 'var(--white)', fontFamily: 'monospace', letterSpacing: '0.02em' }}>{stat.val}</div>
                  <div style={{ fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '2px', fontFamily: 'monospace' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </PageHero>

        {/* -- BENEFITS -- */}
        <section style={{ background: 'var(--bg-2)', padding: '100px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, marginBottom: '12px' }}>{content.benefitsLabel}</p>
            <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '48px' }}>{content.benefitsH2}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {benefits.slice(0, 3).map((b, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border)', borderTop: `2px solid ${ACCENT}`, padding: '28px 24px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: `${ACCENT}18`, border: `1px solid ${ACCENT}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', marginBottom: '16px' }}>{b.icon}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--white)', marginBottom: '10px' }}>{b.title}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.65 }}>{b.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px' }}>
              {benefits.slice(3).map((b, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border)', borderTop: `2px solid ${ACCENT}`, padding: '28px 24px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: `${ACCENT}18`, border: `1px solid ${ACCENT}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', marginBottom: '16px' }}>{b.icon}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--white)', marginBottom: '10px' }}>{b.title}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.65 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- PROCESS DIAGRAM -- */}
        <section style={{ padding: '100px 40px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: 'DM Mono, monospace', fontSize: '11px', fontWeight: 500, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#06b6d4', marginBottom: '18px' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#06b6d4', boxShadow: '0 0 8px #06b6d4', display: 'inline-block' }}/>
              The Process
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '0' }}>{content.processH2}</h2>
            <HubDiagram
              uid="kc"
              product="K-CONNECT"
              tagline="SHARE · MONITOR · RESPOND"
              inputs={[
                { label: 'Campuses',            pillW: 90,  icon: <><rect x="-10" y="-8" width="12" height="16" rx="1"/><rect x="4" y="-4" width="9" height="12" rx="1"/><line x1="-10" y1="8" x2="13" y2="8"/><rect x="-7" y="-4" width="4" height="4" rx="0.5" fill="#60a5fa" stroke="none"/></> },
                { label: 'Universities',        pillW: 105, icon: <><polygon points="0,-12 -13,-4 0,4 13,-4"/><line x1="0" y1="4" x2="0" y2="12"/><line x1="-4" y1="12" x2="4" y2="12"/></> },
                { label: 'Factories',           pillW: 84,  icon: <><rect x="-13" y="-2" width="26" height="10" rx="1"/><rect x="-10" y="-12" width="6" height="10"/><rect x="2" y="-8" width="6" height="6"/><line x1="-13" y1="8" x2="13" y2="8"/></> },
                { label: 'Stores',              pillW: 68,  icon: <><rect x="-12" y="-8" width="24" height="16" rx="2"/><polyline points="-12,-8 -15,-14 15,-14 12,-8"/><rect x="-4" y="0" width="8" height="8" rx="1" fill="#60a5fa" stroke="none"/></> },
                { label: 'Citizens',            pillW: 78,  icon: <><circle cx="0" cy="-8" r="5"/><path d="M-10,14 C-10,4 10,4 10,14"/></> },
                { label: 'Gov. Facilities',     pillW: 112, icon: <><rect x="-13" y="-1" width="26" height="9" rx="0"/><line x1="-10" y1="-1" x2="-10" y2="-9"/><line x1="-3" y1="-1" x2="-3" y2="-9"/><line x1="4" y1="-1" x2="4" y2="-9"/><line x1="11" y1="-1" x2="11" y2="-9"/><polygon points="-15,-9 -1,-16 15,-9"/><line x1="-13" y1="8" x2="13" y2="8"/></> },
              ]}
              outputs={[
                { label: 'Law Enforcement', pillW: 118, icon: <><path d="M0,-14 L10,-8 L10,2 C10,8 5,13 0,15 C-5,13 -10,8 -10,2 L-10,-8 Z"/><line x1="-4" y1="-2" x2="4" y2="-2"/><line x1="0" y1="-6" x2="0" y2="2"/></> },
                { label: 'City Operations',  pillW: 110, icon: <><rect x="-13" y="-6" width="26" height="20" rx="2"/><rect x="-6" y="-13" width="12" height="8" rx="1"/><line x1="-7" y1="14" x2="-7" y2="7"/><line x1="0" y1="14" x2="0" y2="7"/><line x1="7" y1="14" x2="7" y2="7"/></> },
                { label: 'Audit Trail',      pillW: 90,  icon: <><rect x="-10" y="-13" width="20" height="26" rx="2"/><line x1="-5" y1="-6" x2="5" y2="-6"/><line x1="-5" y1="0" x2="5" y2="0"/><polyline points="-5,6 -2,9 5,2"/></> },
              ]}
            />
          </div>
        </section>

        {/* -- TARGET AUDIENCE -- */}
        <section style={{ background: 'var(--bg-2)', padding: '100px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, marginBottom: '12px' }}>{content.audienceLabel}</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif' }}>{content.audienceH2}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {audienceCards.slice(0, 3).map((card, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '14px', border: '1px solid var(--border)', padding: '28px 24px', textAlign: 'center' }}>
                  <span style={{ fontSize: '28px', display: 'block', marginBottom: '14px' }}>{card.icon}</span>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.04em' }}>{card.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.6 }}>{card.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px', maxWidth: '66%', margin: '20px auto 0' }}>
              {audienceCards.slice(3).map((card, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '14px', border: '1px solid var(--border)', padding: '28px 24px', textAlign: 'center' }}>
                  <span style={{ fontSize: '28px', display: 'block', marginBottom: '14px' }}>{card.icon}</span>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.04em' }}>{card.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.6 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- INTEGRATIONS -- */}
        <section style={{ padding: '100px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, marginBottom: '12px' }}>{content.intLabel}</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif' }}>{content.intH2}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {integrations.map((int, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border)', borderTop: `2px solid ${ACCENT}`, padding: '28px 24px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '10px' }}>{int.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.65 }}>{int.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED RESOURCES ── */}
        <section style={{ padding: '64px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: 'var(--cyan)', marginBottom: '24px',
            }}>
              {es ? 'Recursos Relacionados' : 'Related Resources'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <Link href="/resources/what-is-a-public-safety-platform" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
                transition: 'border-color 0.2s',
              }}>
                {es ? '¿Qué es una plataforma de seguridad pública?' : 'What Is a Public Safety Platform?'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
              <Link href="/resources/smart-city-platform-guide" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
                transition: 'border-color 0.2s',
              }}>
                {es ? 'Guía de plataformas de ciudad inteligente' : 'Smart City Platform Guide'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
              <Link href="/resources/public-safety-software-municipalities-mexico" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
                transition: 'border-color 0.2s',
              }}>
                {es ? 'Software de seguridad pública para México' : 'Public Safety Software for Mexico'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                {es ? 'Ver por industria:' : 'Browse by industry:'}
              </span>
              <Link href="/industries/public-safety" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Seguridad Pública' : 'Public Safety'}
              </Link>
              <Link href="/industries/municipalities" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Municipios' : 'Municipalities'}
              </Link>
              <Link href="/industries/stadiums" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Estadios y Recintos' : 'Stadiums & Venues'}
              </Link>
            </div>
          </div>
        </section>

        {/* -- BOTTOM CTA -- */}
        <CTASection
          es={es}
          h2={content.ctaH2}
          subtitle={content.ctaSub}
          cta1={content.cta1}
          cta2={content.ctaContact}
        />

        <Footer es={es} />

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          @media (max-width: 768px) {
            section > div { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </>
  )
}
