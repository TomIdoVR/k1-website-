import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'
import ContactForm from '@/components/ContactForm'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('contact', locale)
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const content = {
    eyebrow: es ? 'Contactanos' : 'Get in Touch',
    h1: es ? 'Habla con Nuestro Equipo de Expertos' : 'Talk to Our Public Safety Experts',
    subtitle: es
      ? 'Ya sea que estes listo para una demo o solo explorando \u2014 estamos aqui. Nuestro equipo generalmente responde dentro de un dia habil.'
      : 'Whether you\u2019re ready for a demo or just exploring \u2014 we\u2019re here. Our team typically responds within one business day.',

    // Form
    formTitle: es ? 'Envianos un Mensaje' : 'Send Us a Message',
    formSub: es ? 'Completa el formulario y la persona indicada se pondra en contacto contigo.' : 'Fill out the form and the right person will get back to you.',
    labelName: es ? 'Nombre Completo' : 'Full Name',
    labelCompany: es ? 'Empresa / Agencia' : 'Company / Agency',
    labelEmail: es ? 'Correo Electronico' : 'Email',
    labelPhone: es ? 'Telefono' : 'Phone',
    labelInterest: es ? 'Me interesa...' : 'I\u2019m interested in\u2026',
    labelMessage: es ? 'Mensaje' : 'Message',
    placeholderName: es ? 'Juan Perez' : 'Jane Smith',
    placeholderCompany: es ? 'Ciudad de Mexico' : 'City of Acme',
    placeholderEmail: es ? 'juan@agencia.gob.mx' : 'jane@agency.gov',
    placeholderPhone: '+1 (555) 000-0000',
    placeholderMessage: es
      ? 'Cuentanos sobre los desafios de tu ciudad o lo que te gustaria ver en una demo...'
      : 'Tell us about your city\u2019s challenges or what you\u2019d like to see in a demo\u2026',
    selectDefault: es ? 'Selecciona un producto o tema' : 'Select a product or topic',
    btnSubmit: es ? 'Enviar Mensaje' : 'Send Message',

    // Sidebar
    responseBadge: es
      ? 'Nuestro equipo esta disponible Lun\u2013Vie y responde dentro de 1 dia habil'
      : 'Our team is available Mon\u2013Fri and responds within 1 business day',
    directContact: es ? 'Contacto Directo' : 'Direct Contact',
    emailLabel: es ? 'Correo' : 'Email',
    phoneLabel: es ? 'Telefono' : 'Phone',
    hqLabel: es ? 'Sede Principal' : 'Headquarters',
    usOfficeLabel: es ? 'Oficina EE.UU.' : 'U.S. Office',
    followUs: es ? 'Siguenos' : 'Follow Us',
    globalPresence: es ? 'Presencia Global' : 'Global Presence',

    // Bottom CTA
    ctaLabel: es ? 'Velo en Vivo' : 'See It Live',
    ctaH2: es ? '\u00BFListo para una Demo Personalizada?' : 'Ready for a Personalized Demo?',
    ctaSub: es
      ? 'Recorre la plataforma KabatOne con uno de nuestros ingenieros de soluciones \u2014 adaptado a los desafios especificos de tu ciudad.'
      : 'Walk through the KabatOne platform with one of our solutions engineers \u2014 tailored to your city\u2019s specific challenges.',
    ctaBtn: es ? 'Solicita una Demo' : 'Request a Demo',
  }

  const selectOptions = es ? [
    { value: 'K-Safety', label: 'K-Safety \u2014 GIS y Conciencia Situacional' },
    { value: 'K-Dispatch', label: 'K-Dispatch \u2014 Despacho de Emergencias' },
    { value: 'K-Traffic', label: 'K-Traffic \u2014 Gestion de Trafico' },
    { value: 'K-Video', label: 'K-Video \u2014 Inteligencia de Video' },
    { value: 'K-Connect', label: 'K-Connect \u2014 Participacion Ciudadana' },
    { value: 'Platform', label: 'Plataforma Completa KabatOne' },
    { value: 'Partnership', label: 'Alianza / Integracion' },
    { value: 'Other', label: 'Otro' },
  ] : [
    { value: 'K-Safety', label: 'K-Safety \u2014 GIS & Situational Awareness' },
    { value: 'K-Dispatch', label: 'K-Dispatch \u2014 Emergency Dispatch' },
    { value: 'K-Traffic', label: 'K-Traffic \u2014 Traffic Management' },
    { value: 'K-Video', label: 'K-Video \u2014 Video Intelligence' },
    { value: 'K-Connect', label: 'K-Connect \u2014 Citizen Engagement' },
    { value: 'Platform', label: 'Full KabatOne Platform' },
    { value: 'Partnership', label: 'Partnership / Integration' },
    { value: 'Other', label: 'Other' },
  ]

  const offices = es ? [
    { flag: '\uD83C\uDDF2\uD83C\uDDFD', name: 'Mexico' },
    { flag: '\uD83C\uDDFA\uD83C\uDDF8', name: 'Estados Unidos' },
    { flag: '\uD83C\uDDEE\uD83C\uDDF1', name: 'Israel' },
    { flag: '\uD83C\uDF0E', name: 'America Latina' },
  ] : [
    { flag: '\uD83C\uDDF2\uD83C\uDDFD', name: 'Mexico' },
    { flag: '\uD83C\uDDFA\uD83C\uDDF8', name: 'United States' },
    { flag: '\uD83C\uDDEE\uD83C\uDDF1', name: 'Israel' },
    { flag: '\uD83C\uDF0E', name: 'Latin America' },
  ]

  return (
    <>
      <Nav />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── PAGE HEADER ── */}
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '80px 40px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              fontFamily: 'DM Mono, monospace', fontSize: '11px', fontWeight: 500,
              letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--cyan)',
              marginBottom: '20px',
            }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: 'var(--cyan)', boxShadow: '0 0 8px var(--cyan)',
                animation: 'contactBlink 2s ease-in-out infinite',
              }} />
              {content.eyebrow}
            </p>
            <h1 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', color: 'var(--white)',
              lineHeight: 1.0, letterSpacing: '-0.01em', marginBottom: '20px',
            }}>
              {content.h1}
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--dim)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65 }}>
              {content.subtitle}
            </p>
          </div>

          {/* ── CONTACT GRID ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '48px', alignItems: 'start' }}>

            {/* FORM */}
            <ContactForm
              es={es}
              labels={{
                formTitle: content.formTitle,
                formSub: content.formSub,
                labelName: content.labelName,
                labelCompany: content.labelCompany,
                labelEmail: content.labelEmail,
                labelPhone: content.labelPhone,
                labelInterest: content.labelInterest,
                labelMessage: content.labelMessage,
                placeholderName: content.placeholderName,
                placeholderCompany: content.placeholderCompany,
                placeholderEmail: content.placeholderEmail,
                placeholderPhone: content.placeholderPhone,
                placeholderMessage: content.placeholderMessage,
                selectDefault: content.selectDefault,
                btnSubmit: content.btnSubmit,
              }}
              selectOptions={selectOptions}
            />

            {/* SIDEBAR */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Response time badge */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '14px 20px',
                background: 'rgba(6,182,212,0.06)', border: '1px solid rgba(6,182,212,0.18)',
                borderRadius: '12px',
              }}>
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: 'var(--cyan)', boxShadow: '0 0 8px var(--cyan)',
                  flexShrink: 0, animation: 'contactBlink 2s ease-in-out infinite',
                }} />
                <div style={{
                  fontFamily: 'DM Mono, monospace', fontSize: '11.5px',
                  color: 'var(--cyan)', letterSpacing: '0.05em', lineHeight: 1.4,
                }}>
                  {content.responseBadge}
                </div>
              </div>

              {/* Direct Contact card */}
              <div style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                borderRadius: '16px', padding: '28px 32px',
              }}>
                <div style={{
                  fontFamily: 'DM Mono, monospace', fontSize: '10px', fontWeight: 500,
                  letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cyan)',
                  marginBottom: '18px',
                }}>
                  {content.directContact}
                </div>

                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '18px' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    color: 'var(--blue-light)',
                  }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '3px' }}>
                      {content.emailLabel}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--white)', fontWeight: 500, lineHeight: 1.45 }}>
                      <a href="mailto:info@kabatone.com" style={{ color: 'var(--white)', textDecoration: 'none' }}>info@kabatone.com</a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '18px' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    color: 'var(--blue-light)',
                  }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.59 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l1.08-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '3px' }}>
                      {content.phoneLabel}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--white)', fontWeight: 500, lineHeight: 1.45 }}>
                      <a href="tel:+525565331725" style={{ color: 'var(--white)', textDecoration: 'none' }}>(52) 55 &ndash; 6533 &ndash; 1725</a>
                    </div>
                  </div>
                </div>

                {/* Headquarters */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '18px' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    color: 'var(--blue-light)',
                  }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '3px' }}>
                      {content.hqLabel}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--white)', fontWeight: 500, lineHeight: 1.45 }}>
                      Blvd. Palmas Hills MZ.1<br />Hacienda de las Palmas<br />Huixquilucan, {es ? 'Mexico' : 'M\u00E9xico'}
                    </div>
                  </div>
                </div>

                {/* U.S. Office */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    color: 'var(--blue-light)',
                  }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '3px' }}>
                      {content.usOfficeLabel}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--white)', fontWeight: 500, lineHeight: 1.45 }}>
                      Cresskill, NJ<br />{es ? 'Estados Unidos' : 'United States'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Follow Us card */}
              <div style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                borderRadius: '16px', padding: '28px 32px',
              }}>
                <div style={{
                  fontFamily: 'DM Mono, monospace', fontSize: '10px', fontWeight: 500,
                  letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cyan)',
                  marginBottom: '18px',
                }}>
                  {content.followUs}
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <a href="https://linkedin.com/company/grupo-kabat" target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '8px 16px', borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)',
                    textDecoration: 'none', color: 'var(--dim)', fontSize: '13px', fontWeight: 500,
                  }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    LinkedIn
                  </a>
                  <a href="https://instagram.com/kabat.one/" target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '8px 16px', borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)',
                    textDecoration: 'none', color: 'var(--dim)', fontSize: '13px', fontWeight: 500,
                  }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    Instagram
                  </a>
                  <a href="https://facebook.com/profile.php?id=61577965919028" target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '8px 16px', borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)',
                    textDecoration: 'none', color: 'var(--dim)', fontSize: '13px', fontWeight: 500,
                  }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    Facebook
                  </a>
                </div>
              </div>

              {/* Global Presence card */}
              <div style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                borderRadius: '16px', padding: '28px 32px',
              }}>
                <div style={{
                  fontFamily: 'DM Mono, monospace', fontSize: '10px', fontWeight: 500,
                  letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cyan)',
                  marginBottom: '18px',
                }}>
                  {content.globalPresence}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {offices.map((office, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      padding: '10px 14px', borderRadius: '9px',
                      background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                    }}>
                      <span style={{ fontSize: '18px', lineHeight: 1 }}>{office.flag}</span>
                      <span style={{ fontSize: '12.5px', fontWeight: 500, color: 'var(--dim)' }}>{office.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── SECTION DIVIDER ── */}
        <div style={{
          height: '1px', margin: '0 40px',
          background: 'linear-gradient(90deg, transparent, var(--border-b), transparent)',
        }} />

        {/* ── BOTTOM CTA ── */}
        <section style={{ padding: '80px 40px 100px', textAlign: 'center' }}>
          <div style={{
            maxWidth: '620px', margin: '0 auto',
            background: 'rgba(255,255,255,0.025)', border: '1px solid var(--border-b)',
            borderRadius: '24px', padding: '56px 48px',
          }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--cyan)', marginBottom: '16px',
            }}>
              {content.ctaLabel}
            </p>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--white)',
              marginBottom: '14px', letterSpacing: '-0.01em', lineHeight: 1.1,
            }}>
              {content.ctaH2}
            </h2>
            <p style={{ color: 'var(--dim)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '32px' }}>
              {content.ctaSub}
            </p>
            <a href="mailto:info@kabatone.com?subject=Demo Request" style={{
              display: 'inline-flex', alignItems: 'center', gap: '9px',
              background: 'var(--blue)', color: 'white',
              fontFamily: 'Space Grotesk, sans-serif', fontSize: '15px', fontWeight: 500,
              padding: '14px 32px', borderRadius: '8px', textDecoration: 'none',
              boxShadow: '0 0 40px rgba(59,130,246,0.38), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}>
              {content.ctaBtn}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </section>

        <Footer es={es} />

        <style>{`
          @keyframes contactBlink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
          @media (max-width: 900px) {
            div[style*="grid-template-columns: 1fr 420px"] {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 640px) {
            div[style*="padding: '80px 40px 0'"],
            div[style*="padding: 80px 40px 0"] {
              padding: 48px 20px 0 !important;
            }
            div[style*="grid-template-columns: 1fr 1fr"][style*="gap: '16px'"],
            div[style*="grid-template-columns: 1fr 1fr"][style*="gap: 16px"] {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 480px) {
            div[style*="padding: '48px'"],
            div[style*="padding: 48px"] {
              padding: 24px 16px !important;
            }
            section[style*="padding: '80px 40px 100px'"],
            section[style*="padding: 80px 40px 100px"] {
              padding: 36px 12px 48px !important;
            }
            div[style*="padding: '56px 48px'"],
            div[style*="padding: 56px 48px"] {
              padding: 36px 20px !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
