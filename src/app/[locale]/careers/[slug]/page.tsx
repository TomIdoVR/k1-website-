import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { breadcrumbSchema, jobPostingSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { Link } from '@/i18n/navigation'
import { getJob, APPLY_EMAIL, type Job, type JobContent } from '@/content/jobs'

const ACCENT = '#06b6d4'

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
    location: es ? 'Ubicación' : 'Location',
    department: es ? 'Área' : 'Department',
    reportsTo: es ? 'Reporta a' : 'Reports to',
    apply: es ? 'Postularme' : 'Apply for This Role',
    applyNote: es
      ? 'Adjunta tu CV. Si el botón no abre tu correo, escríbenos a'
      : 'Attach your CV. If the button doesn’t open your mail app, write to us at',
    backToAll: es ? 'Ver todas las vacantes' : 'See all open positions',
    ctaEyebrow: es ? 'Postúlate' : 'Get in Touch',
    ctaH2: es ? '¿Te Interesa Este Rol?' : 'Interested in This Role?',
    ctaSub: es
      ? 'Envíanos tu CV y una nota breve sobre lo que has construido. Leemos todo.'
      : 'Send us your CV and a short note about what you’ve built. We read everything.',
  }

  const mailto =
    `mailto:${APPLY_EMAIL}?subject=` +
    encodeURIComponent(`${es ? 'Candidatura' : 'Application'}: ${c.title}`)

  const applyButtonStyle = {
    background: 'var(--blue)', color: '#fff', padding: '14px 28px',
    borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px',
    boxShadow: '0 0 24px rgba(59,130,246,0.4)', display: 'inline-block',
  }
  const emailLine = (
    <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '16px' }}>
      {t.applyNote}{' '}
      <a href={mailto} style={{ color: 'var(--blue-light)', textDecoration: 'underline' }}>
        {APPLY_EMAIL}
      </a>
    </p>
  )

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

        <Breadcrumb items={[
          { label: es ? 'Inicio' : 'Home', href: '/' },
          { label: es ? 'Empleos' : 'Careers', href: '/careers' },
          { label: es ? 'Vacante' : 'Role' },
        ]} />

        {/* ── HERO ── */}
        <section style={{ maxWidth: '1160px', margin: '0 auto', padding: '72px 32px 56px' }}>
          <p style={{
            fontSize: '11px', fontWeight: 600, textTransform: 'uppercase',
            letterSpacing: '0.26em', color: ACCENT, marginBottom: '20px',
          }}>
            <span style={{
              display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%',
              background: ACCENT, marginRight: '8px', verticalAlign: 'middle',
            }} />
            {department} · {location}
          </p>
          <h1 style={{
            fontSize: 'clamp(38px, 4.5vw, 60px)', fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '0.01em', marginBottom: '24px',
            fontFamily: 'Barlow Condensed, sans-serif', maxWidth: '900px',
          }}>
            {c.title}
          </h1>
          <p style={{
            fontSize: '17px', fontWeight: 300, lineHeight: 1.75,
            color: 'var(--dim)', marginBottom: '40px', maxWidth: '720px',
          }}>
            {c.intro}
          </p>

          <div style={{
            display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '40px',
            paddingTop: '28px', borderTop: '1px solid var(--border)',
          }}>
            {[
              { label: t.location, value: location },
              { label: t.department, value: department },
              { label: t.reportsTo, value: reportsTo },
            ].map((row, i) => (
              <div key={row.label} style={{
                borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
                paddingLeft: i > 0 ? '32px' : 0,
              }}>
                <div style={{
                  fontSize: '12px', color: 'var(--muted)',
                  textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px',
                }}>
                  {row.label}
                </div>
                <div style={{
                  fontSize: '17px', fontWeight: 700, color: 'var(--white)',
                  fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.02em',
                }}>
                  {row.value}
                </div>
              </div>
            ))}
          </div>

          <a href={mailto} style={applyButtonStyle}>{t.apply}</a>
          {emailLine}
        </section>

        {/* ── BODY ── */}
        <article style={{ borderTop: '1px solid var(--border)', padding: '80px 32px' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            {c.sections.map((section) => (
              <section key={section.heading} style={{ marginBottom: '56px' }}>
                <h2 style={{
                  fontSize: 'clamp(24px, 2.8vw, 34px)', fontWeight: 800,
                  fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase',
                  lineHeight: 1.0, letterSpacing: '0.02em', marginBottom: '20px',
                }}>
                  {section.heading}
                </h2>

                {section.body?.split('\n\n').map((para) => (
                  <p key={para.slice(0, 40)} style={{
                    fontSize: '16px', fontWeight: 300, lineHeight: 1.75,
                    color: 'var(--dim)', marginBottom: '16px',
                  }}>
                    {para}
                  </p>
                ))}

                {section.bullets && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {section.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 40)} style={{
                        position: 'relative', paddingLeft: '22px', marginBottom: '14px',
                        fontSize: '16px', fontWeight: 300, lineHeight: 1.75, color: 'var(--dim)',
                      }}>
                        <span style={{
                          position: 'absolute', left: 0, top: '11px',
                          width: '6px', height: '6px', borderRadius: '50%', background: ACCENT,
                        }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>

        {/* ── CTA ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '96px 32px', textAlign: 'center' }}>
          <p style={{
            fontSize: '11px', fontWeight: 600, textTransform: 'uppercase',
            letterSpacing: '0.2em', color: 'var(--cyan)', marginBottom: '16px',
          }}>
            {t.ctaEyebrow}
          </p>
          <h2 style={{
            fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800,
            fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '16px',
          }}>
            {t.ctaH2}
          </h2>
          <p style={{
            fontSize: '16px', color: 'var(--dim)', marginBottom: '40px',
            maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto',
          }}>
            {t.ctaSub}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href={mailto} style={applyButtonStyle}>{t.apply}</a>
          </div>
          {emailLine}
          <div style={{ marginTop: '28px' }}>
            <Link href="/careers" style={{
              fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--blue-light)', textDecoration: 'none',
            }}>
              ← {t.backToAll}
            </Link>
          </div>
        </section>

      </div>
      <Footer es={es} />
    </>
  )
}
