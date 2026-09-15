import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { breadcrumbSchema, jobPostingSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'
import { getJob, type Job, type JobContent } from '@/content/jobs'

function canonicalFor(slug: string, locale: string) {
  return locale === 'es'
    ? `https://kabatone.com/es/careers/${slug}`
    : `https://kabatone.com/careers/${slug}`
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const job = getJob(slug)
  if (!job) return {}

  const es = locale === 'es'
  const c = es ? job.es : job.en
  const location = es ? job.location.es : job.location.en
  const title = `${c.title} — ${location} | KabatOne`
  const enUrl = canonicalFor(slug, 'en')
  const esUrl = canonicalFor(slug, 'es')

  return {
    title,
    description: c.summary,
    alternates: {
      canonical: canonicalFor(slug, locale),
      languages: { en: enUrl, es: esUrl, 'x-default': enUrl },
    },
    openGraph: {
      title,
      description: c.summary,
      url: canonicalFor(slug, locale),
      siteName: 'KabatOne',
      type: 'website',
      locale: es ? 'es_MX' : 'en_US',
      images: [
        {
          url: 'https://kabatone.com/og-default.png',
          width: 1200,
          height: 630,
          alt: 'KabatOne — Public Safety Platform',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: c.summary,
      images: ['https://kabatone.com/og-default.png'],
    },
    robots: { index: true, follow: true },
  }
}

// Google requires JobPosting.description to be the full posting as HTML.
function descriptionHtml(c: JobContent): string {
  const escape = (t: string) =>
    t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  const parts = [`<p>${escape(c.intro)}</p>`]
  for (const section of c.sections) {
    parts.push(`<h3>${escape(section.heading)}</h3>`)
    if (section.body) {
      for (const para of section.body.split('\n\n')) {
        parts.push(`<p>${escape(para)}</p>`)
      }
    }
    if (section.bullets) {
      parts.push(`<ul>${section.bullets.map((b) => `<li>${escape(b)}</li>`).join('')}</ul>`)
    }
  }
  return parts.join('')
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const job: Job | undefined = getJob(slug)
  if (!job) notFound()

  const es = locale === 'es'
  const c = es ? job.es : job.en
  const location = es ? job.location.es : job.location.en
  const department = es ? job.department.es : job.department.en
  const reportsTo = es ? job.reportsTo.es : job.reportsTo.en

  const t = {
    breadcrumbHome: es ? 'Inicio' : 'Home',
    breadcrumbCareers: es ? 'Empleos' : 'Careers',
    location: es ? 'Ubicación' : 'Location',
    department: es ? 'Área' : 'Department',
    reportsTo: es ? 'Reporta a' : 'Reports to',
    apply: es ? 'Postularme' : 'Apply for this role',
    applyNote: es
      ? 'Se abrirá tu cliente de correo con el asunto ya escrito. Adjunta tu CV.'
      : 'Opens your mail client with the subject pre-filled. Attach your CV.',
    backToAll: es ? 'Ver todas las vacantes' : 'See all open positions',
    ctaH2: es ? '¿Te interesa este rol?' : 'Interested in this role?',
    ctaSub: es
      ? 'Envíanos tu CV y una nota breve sobre lo que has construido. Leemos todo.'
      : 'Send us your CV and a short note about what you’ve built. We read everything.',
  }

  const mailto =
    'mailto:careers@kabatone.com?subject=' +
    encodeURIComponent(`${es ? 'Candidatura' : 'Application'}: ${c.title}`)

  const applyButtonStyle = {
    display: 'inline-block', background: 'var(--blue)', color: '#fff',
    padding: '15px 32px', borderRadius: '10px', textDecoration: 'none',
    fontFamily: 'DM Mono, monospace', fontSize: '12px',
    letterSpacing: '0.16em', textTransform: 'uppercase' as const, fontWeight: 500,
  }

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jobPostingSchema({
              title: c.title,
              descriptionHtml: descriptionHtml(c),
              datePosted: job.datePosted,
              validThrough: job.validThrough,
              employmentType: job.employmentType,
              country: job.country,
              region: job.region,
              url: canonicalFor(job.slug, locale),
              department,
              workplace: job.workplace,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
              { name: es ? 'Empleos' : 'Careers', url: es ? 'https://kabatone.com/es/careers' : 'https://kabatone.com/careers' },
              { name: c.title, url: canonicalFor(job.slug, locale) },
            ])
          ),
        }}
      />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── BREADCRUMB ── */}
        <div style={{
          maxWidth: '860px', margin: '0 auto', padding: '20px 40px 0',
          display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap',
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{t.breadcrumbHome}</Link>
          <span style={{ opacity: 0.35 }}>/</span>
          <Link href="/careers" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{t.breadcrumbCareers}</Link>
        </div>

        {/* ── HEADER ── */}
        <header style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 40px 40px' }}>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(38px, 5.5vw, 62px)', lineHeight: 1.02,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '28px',
          }}>
            {c.title}
          </h1>

          <dl style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '18px', margin: '0 0 32px', padding: '24px 0',
            borderTop: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)',
          }}>
            {[
              { label: t.location, value: location },
              { label: t.department, value: department },
              { label: t.reportsTo, value: reportsTo },
            ].map((row) => (
              <div key={row.label}>
                <dt style={{
                  fontFamily: 'DM Mono, monospace', fontSize: '10px',
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--cyan)', marginBottom: '7px',
                }}>
                  {row.label}
                </dt>
                <dd style={{ margin: 0, fontSize: '15px', color: 'var(--white)' }}>{row.value}</dd>
              </div>
            ))}
          </dl>

          <a href={mailto} style={applyButtonStyle}>{t.apply}</a>
          <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '14px' }}>{t.applyNote}</p>
        </header>

        {/* ── BODY ── */}
        <article style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px 72px' }}>
          <p style={{
            fontSize: '18px', lineHeight: 1.75, color: 'var(--white)', marginBottom: '48px',
          }}>
            {c.intro}
          </p>

          {c.sections.map((section) => (
            <section key={section.heading} style={{ marginBottom: '48px' }}>
              <h2 style={{
                fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                fontSize: 'clamp(26px, 3.2vw, 34px)', lineHeight: 1.15,
                color: 'var(--white)', marginBottom: '20px',
              }}>
                {section.heading}
              </h2>

              {section.body?.split('\n\n').map((para) => (
                <p key={para.slice(0, 40)} style={{
                  fontSize: '16px', lineHeight: 1.75, color: 'var(--dim)', marginBottom: '16px',
                }}>
                  {para}
                </p>
              ))}

              {section.bullets && (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {section.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 40)} style={{
                      position: 'relative', paddingLeft: '22px', marginBottom: '14px',
                      fontSize: '16px', lineHeight: 1.7, color: 'var(--dim)',
                    }}>
                      <span style={{
                        position: 'absolute', left: 0, top: '10px',
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: 'var(--cyan)',
                      }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        {/* ── CTA ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px 110px' }}>
          <div style={{
            background: 'var(--card-bg-deep)', border: '1px solid var(--card-border)',
            borderRadius: '18px', padding: 'clamp(32px, 5vw, 52px)', textAlign: 'center',
          }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.6vw, 40px)', lineHeight: 1.05,
              color: 'var(--white)', marginBottom: '14px',
            }}>
              {t.ctaH2}
            </h2>
            <p style={{
              fontSize: '16px', lineHeight: 1.7, color: 'var(--dim)',
              maxWidth: '520px', margin: '0 auto 28px',
            }}>
              {t.ctaSub}
            </p>
            <a href={mailto} style={applyButtonStyle}>{t.apply}</a>
            <div style={{ marginTop: '26px' }}>
              <Link href="/careers" style={{
                fontFamily: 'DM Mono, monospace', fontSize: '11px',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--blue-light)', textDecoration: 'none',
              }}>
                ← {t.backToAll}
              </Link>
            </div>
          </div>
        </section>

      </div>
      <Footer es={es} />
    </>
  )
}
