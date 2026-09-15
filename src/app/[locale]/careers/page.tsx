import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { Link } from '@/i18n/navigation'
import { sortedJobs, APPLY_EMAIL } from '@/content/jobs'

const ACCENT = '#06b6d4'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('careers', locale)
}

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const openings = sortedJobs()

  const content = {
    eyebrow: es ? 'Únete al Equipo' : 'Join the Team',
    h1: es ? 'Construye Sistemas que Salvan Vidas' : 'Build Systems That Save Lives',
    subtitle: es
      ? 'KabatOne desarrolla la plataforma unificada de seguridad pública en la que confían más de 40 ciudades para proteger a más de 73 millones de ciudadanos. El software que escribimos se usa en centros de mando reales, en el peor día de alguien más.'
      : 'KabatOne builds the unified public safety platform that 40+ cities rely on to protect over 73 million citizens. The software we write runs in real command centers, on somebody’s worst day.',
    heroCta: es ? 'Ver Vacantes' : 'See Open Roles',
    stats: es
      ? [
          { value: '40+', label: 'Ciudades' },
          { value: '73M+', label: 'Ciudadanos' },
          { value: '3', label: 'Continentes' },
        ]
      : [
          { value: '40+', label: 'Cities' },
          { value: '73M+', label: 'Citizens' },
          { value: '3', label: 'Continents' },
        ],
    whyEyebrow: es ? 'Por Qué KabatOne' : 'Why KabatOne',
    whyH2: es ? 'Trabajo Real, Consecuencias Reales' : 'Real Work, Real Consequences',
    whySub: es
      ? 'No construimos dashboards. Construimos los sistemas de los que dependen despachadores y comandantes cuando el tiempo de respuesta se mide en segundos.'
      : 'We don’t build dashboards. We build the systems dispatchers and commanders depend on when response time is measured in seconds.',
    openEyebrow: es ? 'Vacantes Abiertas' : 'Open Positions',
    openH2: es ? 'Posiciones Disponibles' : 'Available Roles',
    openSub: es
      ? 'Contratamos en Israel y México. Cada vacante se publica en el idioma que elijas para el sitio.'
      : 'We hire in Israel and Mexico. Every role is published in whichever language you pick for the site.',
    viewRole: es ? 'Ver vacante' : 'View role',
    emptyTitle: es ? 'No hay vacantes abiertas en este momento' : 'No open positions right now',
    emptyBody: es
      ? 'Siempre queremos conocer a buenos ingenieros. Escríbenos y cuéntanos qué construyes.'
      : 'We always want to meet strong engineers. Write to us and tell us what you build.',
    ctaEyebrow: es ? 'Postúlate' : 'Get in Touch',
    ctaH2: es ? '¿No Ves Tu Rol?' : 'Don’t See Your Role?',
    ctaSub: es
      ? 'Si crees que deberías trabajar aquí, escríbenos. Cuéntanos qué has construido y qué quieres construir después.'
      : 'If you think you should be working here, write to us. Tell us what you’ve built and what you want to build next.',
    ctaBtn: es ? 'Envíanos tu CV' : 'Send Us Your CV',
  }

  const reasons = es
    ? [
        { title: 'Misión Crítica de Verdad', text: 'Despacho de emergencias, video, GIS y sensores en tiempo real. Si el sistema se traba, alguien espera más por una ambulancia. Eso cambia cómo se diseña.' },
        { title: 'Equipos en Israel y México', text: 'I+D en Israel, desarrollo y operaciones en México, oficina comercial en Nueva Jersey. Equipos distribuidos que entregan a más de 10 países.' },
        { title: 'Ingeniería AI-Native', text: 'Trabajamos spec-first, con agentes de codificación bajo revisión humana y compuertas explícitas. La IA hace el trabajo mecánico; las personas deciden.' },
        { title: 'Propiedad Real', text: 'Equipos pequeños, alcance grande. Tomas decisiones de arquitectura que sobreviven años de funcionalidades y las firmas con tu nombre.' },
      ]
    : [
        { title: 'Genuinely Mission-Critical', text: 'Emergency dispatch, video, GIS and sensors in real time. If the system stalls, somebody waits longer for an ambulance. That changes how you design.' },
        { title: 'Teams in Israel and Mexico', text: 'R&D in Israel, development and operations in Mexico, commercial office in New Jersey. Distributed teams shipping to 10+ countries.' },
        { title: 'AI-Native Engineering', text: 'We work spec-first, with coding agents under human review and explicit gates. AI does the mechanical work; people decide.' },
        { title: 'Real Ownership', text: 'Small teams, large scope. You make architecture decisions that outlive years of features — and you sign your name to them.' },
      ]

  const mailto =
    `mailto:${APPLY_EMAIL}?subject=` +
    encodeURIComponent(es ? 'Candidatura espontánea — KabatOne' : 'General application — KabatOne')

  const eyebrowStyle = {
    fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' as const,
    letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px',
  }
  const h2Style = {
    fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800,
    fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase' as const,
    lineHeight: 1.0, marginBottom: '12px',
  }
  const sectionSubStyle = {
    fontSize: '16px', fontWeight: 300, color: 'var(--dim)',
    lineHeight: 1.75, maxWidth: '620px', marginBottom: '52px',
  }

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
              { name: es ? 'Empleos' : 'Careers', url: es ? 'https://kabatone.com/es/careers' : 'https://kabatone.com/careers' },
            ])
          ),
        }}
      />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        <Breadcrumb items={[
          { label: es ? 'Inicio' : 'Home', href: '/' },
          { label: es ? 'Empleos' : 'Careers' },
        ]} />

        {/* ── HERO ── */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 32px 80px' }}>
          <p style={{
            fontSize: '11px', fontWeight: 600, textTransform: 'uppercase',
            letterSpacing: '0.26em', color: ACCENT, marginBottom: '20px',
          }}>
            <span style={{
              display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%',
              background: ACCENT, marginRight: '8px', verticalAlign: 'middle',
            }} />
            {content.eyebrow}
          </p>
          <h1 style={{
            fontSize: 'clamp(38px, 4.5vw, 60px)', fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '0.01em', marginBottom: '24px',
            fontFamily: 'Barlow Condensed, sans-serif',
          }}>
            {content.h1}
          </h1>
          <p style={{
            fontSize: '17px', fontWeight: 300, lineHeight: 1.75,
            color: 'var(--dim)', marginBottom: '40px', maxWidth: '660px',
          }}>
            {content.subtitle}
          </p>
          <div style={{ display: 'flex', gap: '32px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {content.stats.map((s, i) => (
              <div key={s.label} style={{
                borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
                paddingLeft: i > 0 ? '32px' : 0,
              }}>
                <div style={{
                  fontSize: '28px', fontWeight: 700, color: ACCENT,
                  fontFamily: 'Barlow Condensed, sans-serif',
                }}>{s.value}</div>
                <div style={{
                  fontSize: '12px', color: 'var(--muted)',
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#open-positions" style={{
              background: 'var(--blue)', color: '#fff', padding: '14px 28px',
              borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px',
              boxShadow: '0 0 24px rgba(59,130,246,0.4)',
            }}>{content.heroCta}</a>
          </div>
        </section>

        {/* ── WHY ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <p style={eyebrowStyle}>{content.whyEyebrow}</p>
            <h2 style={h2Style}>{content.whyH2}</h2>
            <p style={sectionSubStyle}>{content.whySub}</p>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px',
            }}>
              {reasons.map((r) => (
                <div key={r.title} style={{
                  background: 'var(--card-bg)', border: '1px solid var(--card-border)',
                  borderRadius: '12px', padding: '26px',
                }}>
                  <div style={{
                    width: '28px', height: '3px', background: ACCENT,
                    borderRadius: '2px', marginBottom: '18px',
                  }} />
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '18px', letterSpacing: '0.03em', textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}>
                    {r.title}
                  </h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.7, color: 'var(--dim)' }}>
                    {r.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OPEN POSITIONS ── */}
        <section
          id="open-positions"
          style={{
            borderTop: '1px solid var(--border)', padding: '80px 32px',
            background: 'rgba(255,255,255,0.01)', scrollMarginTop: '70px',
          }}
        >
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <p style={eyebrowStyle}>{content.openEyebrow}</p>
            <h2 style={h2Style}>{content.openH2}</h2>
            <p style={sectionSubStyle}>{content.openSub}</p>

            {openings.length === 0 ? (
              <div style={{
                background: 'var(--card-bg)', border: '1px solid var(--card-border)',
                borderRadius: '12px', padding: '32px',
              }}>
                <h3 style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                  fontSize: '18px', letterSpacing: '0.03em', textTransform: 'uppercase',
                  marginBottom: '8px',
                }}>
                  {content.emptyTitle}
                </h3>
                <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.75, color: 'var(--dim)' }}>
                  {content.emptyBody}
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {openings.map((job) => {
                  const c = es ? job.es : job.en
                  return (
                    <Link
                      key={job.slug}
                      href={`/careers/${job.slug}`}
                      style={{
                        display: 'block', textDecoration: 'none', color: 'inherit',
                        background: 'var(--card-bg)', border: '1px solid var(--card-border)',
                        borderRadius: '12px', padding: '28px 30px',
                      }}
                    >
                      <div style={{
                        display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '14px',
                        fontSize: '11px', fontWeight: 600,
                        letterSpacing: '0.2em', textTransform: 'uppercase',
                      }}>
                        <span style={{
                          color: ACCENT, border: '1px solid var(--border-b)',
                          borderRadius: '999px', padding: '6px 14px',
                        }}>
                          {es ? job.department.es : job.department.en}
                        </span>
                        <span style={{
                          color: 'var(--muted)', border: '1px solid var(--card-border)',
                          borderRadius: '999px', padding: '6px 14px',
                        }}>
                          {es ? job.location.es : job.location.en}
                        </span>
                      </div>
                      <h3 style={{
                        fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                        fontSize: 'clamp(22px, 2.4vw, 28px)', lineHeight: 1.15,
                        letterSpacing: '0.02em', textTransform: 'uppercase',
                        marginBottom: '12px',
                      }}>
                        {c.title}
                      </h3>
                      <p style={{
                        fontSize: '15px', fontWeight: 300, lineHeight: 1.75, color: 'var(--dim)',
                        maxWidth: '760px', marginBottom: '18px',
                      }}>
                        {c.summary}
                      </p>
                      <span style={{
                        fontSize: '11px', fontWeight: 600,
                        letterSpacing: '0.2em', textTransform: 'uppercase',
                        color: 'var(--blue-light)',
                      }}>
                        {content.viewRole} →
                      </span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: '96px 32px', textAlign: 'center' }}>
          <p style={{
            fontSize: '11px', fontWeight: 600, textTransform: 'uppercase',
            letterSpacing: '0.2em', color: 'var(--cyan)', marginBottom: '16px',
          }}>
            {content.ctaEyebrow}
          </p>
          <h2 style={{
            fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800,
            fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '16px',
          }}>
            {content.ctaH2}
          </h2>
          <p style={{
            fontSize: '16px', color: 'var(--dim)', marginBottom: '40px',
            maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto',
          }}>
            {content.ctaSub}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href={mailto} style={{
              background: 'var(--blue)', color: '#fff', padding: '14px 32px',
              borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px',
              boxShadow: '0 0 24px rgba(59,130,246,0.4)',
            }}>
              {content.ctaBtn}
            </a>
          </div>
          {/* The address is shown as text too: a mailto: link opens a blank page
              for anyone whose browser has no mail app registered. */}
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '18px' }}>
            <a href={mailto} style={{ color: 'var(--blue-light)', textDecoration: 'underline' }}>
              {APPLY_EMAIL}
            </a>
          </p>
        </section>

      </div>
      <Footer es={es} />
    </>
  )
}
