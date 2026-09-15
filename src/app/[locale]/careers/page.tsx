import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'
import { sortedJobs } from '@/content/jobs'

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
    breadcrumbHome: es ? 'Inicio' : 'Home',
    breadcrumbCurrent: es ? 'Empleos' : 'Careers',
    eyebrow: es ? 'Únete al Equipo' : 'Join the Team',
    h1: es ? (
      <>Construye Sistemas<br />que Salvan Vidas</>
    ) : (
      <>Build Systems<br />That Save Lives</>
    ),
    subtitle: es
      ? 'KabatOne desarrolla la plataforma unificada de seguridad pública en la que confían más de 40 ciudades para proteger a más de 73 millones de ciudadanos. El software que escribimos se usa en centros de mando reales, en el peor día de alguien más.'
      : 'KabatOne builds the unified public safety platform that 40+ cities rely on to protect over 73 million citizens. The software we write runs in real command centers, on somebody’s worst day.',
    whyEyebrow: es ? 'Por Qué KabatOne' : 'Why KabatOne',
    whyH2: es ? (
      <>Trabajo Real,<br />Consecuencias Reales</>
    ) : (
      <>Real Work,<br />Real Consequences</>
    ),
    openEyebrow: es ? 'Vacantes Abiertas' : 'Open Positions',
    openH2: es ? 'Posiciones Disponibles' : 'Available Roles',
    viewRole: es ? 'Ver vacante' : 'View role',
    emptyTitle: es ? 'No hay vacantes abiertas en este momento' : 'No open positions right now',
    emptyBody: es
      ? 'Siempre queremos conocer a buenos ingenieros. Escríbenos y cuéntanos qué construyes.'
      : 'We always want to meet strong engineers. Write to us and tell us what you build.',
    ctaH2: es ? '¿No ves tu rol?' : 'Don’t see your role?',
    ctaSub: es
      ? 'Si crees que deberías trabajar aquí, escríbenos. Cuéntanos qué has construido y qué quieres construir después.'
      : 'If you think you should be working here, write to us. Tell us what you’ve built and what you want to build next.',
    ctaBtn: es ? 'Envíanos tu CV' : 'Send us your CV',
  }

  const reasons = es
    ? [
        { emoji: '🛰️', color: 'rgba(59,130,246,0.12)', title: 'Misión Crítica de Verdad', text: 'Despacho de emergencias, video, GIS y sensores en tiempo real. Si el sistema falla, alguien espera más por una ambulancia. Eso cambia cómo se diseña.' },
        { emoji: '🌎', color: 'rgba(6,182,212,0.12)', title: 'Equipos en Israel y México', text: 'I+D en Israel, desarrollo y operaciones en México, oficina comercial en Nueva Jersey. Equipos distribuidos que entregan a más de 10 países.' },
        { emoji: '⚡', color: 'rgba(168,85,247,0.12)', title: 'Ingeniería AI-Native', text: 'Trabajamos spec-first con agentes de codificación bajo revisión humana y compuertas claras. La IA hace el trabajo mecánico; las personas deciden.' },
        { emoji: '🧱', color: 'rgba(34,197,94,0.12)', title: 'Propiedad Real', text: 'Equipos pequeños, alcance grande. Tomas decisiones de arquitectura que sobreviven años y las documentas con tu nombre.' },
      ]
    : [
        { emoji: '🛰️', color: 'rgba(59,130,246,0.12)', title: 'Genuinely Mission-Critical', text: 'Emergency dispatch, video, GIS and sensors in real time. If the system stalls, somebody waits longer for an ambulance. That changes how you design.' },
        { emoji: '🌎', color: 'rgba(6,182,212,0.12)', title: 'Teams in Israel and Mexico', text: 'R&D in Israel, development and operations in Mexico, commercial office in New Jersey. Distributed teams shipping to 10+ countries.' },
        { emoji: '⚡', color: 'rgba(168,85,247,0.12)', title: 'AI-Native Engineering', text: 'We work spec-first, with coding agents under human review and explicit gates. AI does the mechanical work; people decide.' },
        { emoji: '🧱', color: 'rgba(34,197,94,0.12)', title: 'Real Ownership', text: 'Small teams, large scope. You make architecture decisions that outlive years of features — and you sign your name to them.' },
      ]

  const mailto =
    'mailto:careers@kabatone.com?subject=' +
    encodeURIComponent(es ? 'Candidatura espontánea — KabatOne' : 'General application — KabatOne')

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

        {/* ── BREADCRUMB ── */}
        <div style={{
          maxWidth: '1160px', margin: '0 auto', padding: '20px 40px 0',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{content.breadcrumbHome}</Link>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: 'var(--blue-light)' }}>{content.breadcrumbCurrent}</span>
        </div>

        {/* ── HERO ── */}
        <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '72px 40px 80px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'var(--cyan)', marginBottom: '20px',
          }}>
            {content.eyebrow}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(52px, 7vw, 80px)', lineHeight: 0.95,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '28px',
          }}>
            {content.h1}
          </h1>
          <p style={{
            fontSize: '17px', lineHeight: 1.7, color: 'var(--dim)', maxWidth: '640px',
          }}>
            {content.subtitle}
          </p>
        </section>

        {/* ── WHY ── */}
        <section style={{
          maxWidth: '1160px', margin: '0 auto', padding: '0 40px 96px',
        }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'var(--cyan)', marginBottom: '16px',
          }}>
            {content.whyEyebrow}
          </p>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(36px, 4.5vw, 52px)', lineHeight: 1.0,
            color: 'var(--white)', marginBottom: '44px',
          }}>
            {content.whyH2}
          </h2>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px',
          }}>
            {reasons.map((r) => (
              <div key={r.title} style={{
                background: 'var(--card-bg)', border: '1px solid var(--card-border)',
                borderRadius: '14px', padding: '28px',
              }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '11px', background: r.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', marginBottom: '18px',
                }}>
                  {r.emoji}
                </div>
                <h3 style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                  fontSize: '22px', color: 'var(--white)', marginBottom: '10px',
                }}>
                  {r.title}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--dim)' }}>{r.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── OPEN POSITIONS ── */}
        <section id="open-positions" style={{
          maxWidth: '1160px', margin: '0 auto', padding: '0 40px 96px',
        }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'var(--cyan)', marginBottom: '16px',
          }}>
            {content.openEyebrow}
          </p>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(36px, 4.5vw, 52px)', lineHeight: 1.0,
            color: 'var(--white)', marginBottom: '36px',
          }}>
            {content.openH2}
          </h2>

          {openings.length === 0 ? (
            <div style={{
              background: 'var(--card-bg)', border: '1px solid var(--card-border)',
              borderRadius: '14px', padding: '36px',
            }}>
              <h3 style={{
                fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                fontSize: '24px', color: 'var(--white)', marginBottom: '10px',
              }}>
                {content.emptyTitle}
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--dim)' }}>{content.emptyBody}</p>
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
                      display: 'block', textDecoration: 'none',
                      background: 'var(--card-bg)', border: '1px solid var(--card-border)',
                      borderRadius: '14px', padding: '30px 32px',
                    }}
                  >
                    <div style={{
                      display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '14px',
                      fontFamily: 'DM Mono, monospace', fontSize: '10px',
                      letterSpacing: '0.16em', textTransform: 'uppercase',
                    }}>
                      <span style={{
                        color: 'var(--cyan)', border: '1px solid var(--border-b)',
                        borderRadius: '999px', padding: '4px 11px',
                      }}>
                        {es ? job.department.es : job.department.en}
                      </span>
                      <span style={{
                        color: 'var(--muted)', border: '1px solid var(--card-border)',
                        borderRadius: '999px', padding: '4px 11px',
                      }}>
                        {es ? job.location.es : job.location.en}
                      </span>
                    </div>
                    <h3 style={{
                      fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                      fontSize: 'clamp(24px, 3vw, 30px)', lineHeight: 1.15,
                      color: 'var(--white)', marginBottom: '12px',
                    }}>
                      {c.title}
                    </h3>
                    <p style={{
                      fontSize: '15px', lineHeight: 1.65, color: 'var(--dim)',
                      maxWidth: '760px', marginBottom: '18px',
                    }}>
                      {c.summary}
                    </p>
                    <span style={{
                      fontFamily: 'DM Mono, monospace', fontSize: '11px',
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: 'var(--blue-light)',
                    }}>
                      {content.viewRole} →
                    </span>
                  </Link>
                )
              })}
            </div>
          )}
        </section>

        {/* ── CTA ── */}
        <section style={{
          maxWidth: '1160px', margin: '0 auto', padding: '0 40px 110px',
        }}>
          <div style={{
            background: 'var(--card-bg-deep)', border: '1px solid var(--card-border)',
            borderRadius: '18px', padding: 'clamp(36px, 6vw, 64px)', textAlign: 'center',
          }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(32px, 4vw, 46px)', lineHeight: 1.05,
              color: 'var(--white)', marginBottom: '16px',
            }}>
              {content.ctaH2}
            </h2>
            <p style={{
              fontSize: '16px', lineHeight: 1.7, color: 'var(--dim)',
              maxWidth: '560px', margin: '0 auto 30px',
            }}>
              {content.ctaSub}
            </p>
            <a
              href={mailto}
              style={{
                display: 'inline-block', background: 'var(--blue)', color: '#fff',
                padding: '15px 32px', borderRadius: '10px', textDecoration: 'none',
                fontFamily: 'DM Mono, monospace', fontSize: '12px',
                letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 500,
              }}
            >
              {content.ctaBtn}
            </a>
          </div>
        </section>

      </div>
      <Footer es={es} />
    </>
  )
}
