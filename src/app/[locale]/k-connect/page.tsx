import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
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

  return (
    <>
      <Nav />
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
        <section style={{ background: 'var(--bg-2)', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, marginBottom: '12px' }}>{content.benefitsLabel}</p>
            <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '48px' }}>{content.benefitsH2}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {benefits.slice(0, 3).map((b, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '28px 24px', borderTop: `3px solid ${ACCENT}` }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '10px' }}>{b.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.65 }}>{b.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px' }}>
              {benefits.slice(3).map((b, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '28px 24px', borderTop: `3px solid ${ACCENT}` }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '10px' }}>{b.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.65 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- PROCESS DIAGRAM -- */}
        <section style={{ padding: '80px 32px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '48px' }}>{content.processH2}</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              {/* Inputs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {processInputs.map((inp) => (
                  <div key={inp} style={{ background: '#0b1628', border: '1px solid var(--border)', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', color: 'var(--muted)', textAlign: 'center' }}>{inp}</div>
                ))}
              </div>
              {/* Arrow */}
              <div style={{ fontSize: '24px', color: ACCENT }}>&rarr;</div>
              {/* Hub */}
              <div style={{ background: `${ACCENT}18`, border: `2px solid ${ACCENT}`, borderRadius: '16px', padding: '24px 32px', textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: 800, color: ACCENT, fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}>K-CONNECT</div>
                <div style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.2em', marginTop: '4px' }}>
                  {es ? 'CONECTAR \u00b7 COMPARTIR \u00b7 PROTEGER' : 'CONNECT \u00b7 SHARE \u00b7 PROTECT'}
                </div>
              </div>
              {/* Arrow */}
              <div style={{ fontSize: '24px', color: ACCENT }}>&rarr;</div>
              {/* Outputs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {processOutputs.map((out) => (
                  <div key={out} style={{ background: '#0b1628', border: `1px solid ${ACCENT}55`, borderRadius: '8px', padding: '8px 16px', fontSize: '13px', color: ACCENT, textAlign: 'center', fontWeight: 600 }}>{out}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* -- TARGET AUDIENCE -- */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 32px' }}>
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
        <section style={{ padding: '80px 32px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, marginBottom: '12px' }}>{content.intLabel}</p>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif' }}>{content.intH2}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {integrations.map((int, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '28px 24px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '10px' }}>{int.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.65 }}>{int.desc}</p>
                </div>
              ))}
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
