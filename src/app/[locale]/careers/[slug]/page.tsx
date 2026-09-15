import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { breadcrumbSchema, jobPostingSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CareersStyles from '@/components/careers/CareersStyles'
import { Link } from '@/i18n/navigation'
import { getJob, APPLY_EMAIL, type Job, type JobContent, type JobSection } from '@/content/jobs'

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
      title, description: c.summary, url: canonicalFor(slug, locale),
      siteName: 'KabatOne', type: 'website', locale: es ? 'es_MX' : 'en_US',
      images: [{ url: 'https://kabatone.com/og-default.png', width: 1200, height: 630, alt: 'KabatOne — Public Safety Platform' }],
    },
    twitter: {
      card: 'summary_large_image', title, description: c.summary,
      images: ['https://kabatone.com/og-default.png'],
    },
    robots: { index: true, follow: true },
  }
}

// Google requires JobPosting.description to be the full posting as HTML.
function descriptionHtml(c: JobContent): string {
  const escape = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const parts = [`<p>${escape(c.intro)}</p>`]
  for (const section of c.sections) {
    parts.push(`<h3>${escape(section.heading)}</h3>`)
    if (section.body) {
      for (const para of section.body.split('\n\n')) parts.push(`<p>${escape(para)}</p>`)
    }
    if (section.bullets) {
      parts.push(`<ul>${section.bullets.map((b) => `<li>${escape(b)}</li>`).join('')}</ul>`)
    }
  }
  return parts.join('')
}

/** Splits a headline so the trailing words can carry the gradient, as on the homepage. */
function splitHeadline(title: string): [string, string] {
  const words = title.split(' ')
  if (words.length < 4) return [title, '']
  const tailCount = Math.min(3, Math.floor(words.length / 3))
  return [words.slice(0, words.length - tailCount).join(' '), words.slice(words.length - tailCount).join(' ')]
}

function SectionBody({ section }: { section: JobSection }) {
  const layout = section.layout ?? 'prose'
  const bullets = section.bullets ?? []

  if (layout === 'cards') {
    return (
      <div className="car-grid">
        {bullets.map((b, i) => {
          const [lead, ...rest] = b.split(': ')
          const hasLead = rest.length > 0
          return (
            <div className="car-card" key={b.slice(0, 40)}>
              <div className="car-card-n">{String(i + 1).padStart(2, '0')}</div>
              {hasLead ? (
                <>
                  <div className="car-card-h">{lead}</div>
                  <p className="car-card-p">{rest.join(': ')}</p>
                </>
              ) : (
                <p className="car-card-p">{b}</p>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  if (layout === 'checklist') {
    return (
      <div className="car-checks">
        {bullets.map((b) => <div className="car-check" key={b.slice(0, 40)}>{b}</div>)}
      </div>
    )
  }

  if (layout === 'tags') {
    // A bullet like "Angular; Kubernetes and Helm; Kafka, Temporal" is a list of
    // separate things, so it reads as separate chips rather than one long pill.
    const chips = bullets.flatMap((b) =>
      b.replace(/\.$/, '').split(';').map((x) => x.trim()).filter(Boolean)
    )
    return (
      <div className="car-tags">
        {chips.map((chip) => <span className="car-tag" key={chip}>{chip}</span>)}
      </div>
    )
  }

  if (layout === 'steps') {
    return (
      <div className="car-steps">
        {bullets.map((b, i) => (
          <div className="car-step" key={b.slice(0, 40)}>
            <div className="car-step-n">{String(i + 1).padStart(2, '0')}</div>
            <p className="car-step-p">{b}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      {section.body?.split('\n\n').map((para) => (
        <p className="car-prose" key={para.slice(0, 40)}>{para}</p>
      ))}
      {bullets.length > 0 && (
        <div className="car-checks">
          {bullets.map((b) => <div className="car-check" key={b.slice(0, 40)}>{b}</div>)}
        </div>
      )}
    </>
  )
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
  const [head, tail] = splitHeadline(c.title)

  const t = {
    home: es ? 'Inicio' : 'Home',
    careers: es ? 'Empleos' : 'Careers',
    location: es ? 'Ubicación' : 'Location',
    department: es ? 'Área' : 'Department',
    reportsTo: es ? 'Reporta a' : 'Reports to',
    type: es ? 'Jornada' : 'Type',
    typeValue: es ? 'Tiempo completo' : 'Full time',
    apply: es ? 'Postularme' : 'Apply for this role',
    applyNote: es
      ? 'Adjunta tu CV. Si el botón no abre tu correo, escríbenos a'
      : 'Attach your CV. If the button doesn’t open your mail app, write to us at',
    backToAll: es ? 'Ver todas las vacantes' : 'See all open positions',
    ctaLabel: es ? 'Postúlate' : 'Get in touch',
    ctaH2: es ? '¿Te Interesa Este Rol?' : 'Interested in This Role?',
    ctaSub: es
      ? 'Envíanos tu CV y una nota breve sobre lo que has construido. Leemos todo.'
      : 'Send us your CV and a short note about what you’ve built. We read everything.',
  }

  const mailto = `mailto:${APPLY_EMAIL}?subject=` +
    encodeURIComponent(`${es ? 'Candidatura' : 'Application'}: ${c.title}`)

  const badges = [
    { k: t.location, v: location },
    { k: t.department, v: department },
    { k: t.reportsTo, v: reportsTo },
    { k: t.type, v: t.typeValue },
  ]

  return (
    <>
      <Nav />
      <CareersStyles />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema({
        title: c.title, descriptionHtml: descriptionHtml(c),
        datePosted: job.datePosted, validThrough: job.validThrough,
        employmentType: job.employmentType, country: job.country, region: job.region,
        url: canonicalFor(job.slug, locale), department, workplace: job.workplace,
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: t.home, url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
        { name: t.careers, url: es ? 'https://kabatone.com/es/careers' : 'https://kabatone.com/careers' },
        { name: c.title, url: canonicalFor(job.slug, locale) },
      ])) }} />

      <div style={{ paddingTop: '70px', position: 'relative', minHeight: '100vh', background: 'var(--bg)', color: 'var(--white)' }}>

        <nav aria-label="Breadcrumb" className="car-crumb">
          <Link href="/">{t.home}</Link>
          <span className="car-crumb-sep">/</span>
          <Link href="/careers">{t.careers}</Link>
          <span className="car-crumb-sep">/</span>
          <span className="car-crumb-now">{department}</span>
        </nav>

        {/* ── HERO ── */}
        <section style={{ position: 'relative', overflow: 'hidden', paddingBottom: '72px' }}>
          <div className="car-glow" />
          <div className="car-hero">
            <div className="car-eyebrow">
              <span className="car-eyebrow-dot" />
              {department} · {location}
            </div>
            <h1 className="car-headline car-headline-sm">
              {head} {tail && <span className="car-grad">{tail}</span>}
            </h1>
            <p className="car-sub">{c.summary}</p>
            <a href={mailto} className="car-btn">
              {t.apply}<span className="car-arrow">→</span>
            </a>
            <p className="car-mailnote">
              {t.applyNote} <a href={mailto}>{APPLY_EMAIL}</a>
            </p>
            <div className="car-badges">
              {badges.map((b) => (
                <div className="car-badge" key={b.k}>
                  <span className="car-badge-k">{b.k}</span>
                  <span className="car-badge-v">{b.v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section className="car-section car-tint-cyan">
          <div className="car-inner-narrow">
            <p className="car-prose car-prose-lead">{c.intro}</p>
          </div>
        </section>

        {/* ── SECTIONS ── */}
        {c.sections.map((section, i) => {
          const wide = section.layout === 'cards' || section.layout === 'steps' || section.layout === 'checklist'
          return (
            <section className={`car-section${i % 2 === 0 ? ' car-band' : ''}`} key={section.heading}>
              <div className={wide ? 'car-inner' : 'car-inner-narrow'}>
                <div className="car-label">{String(i + 1).padStart(2, '0')}</div>
                <h2 className="car-h2">{section.heading}</h2>
                <SectionBody section={section} />
              </div>
            </section>
          )
        })}

        {/* ── CTA ── */}
        <section className="car-section car-tint-blue" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="car-glow" />
          <div className="car-inner car-center" style={{ position: 'relative', zIndex: 1 }}>
            <div className="car-label">{t.ctaLabel}</div>
            <h2 className="car-h2">{t.ctaH2}</h2>
            <p className="car-section-sub" style={{ marginBottom: '34px' }}>{t.ctaSub}</p>
            <a href={mailto} className="car-btn">
              {t.apply}<span className="car-arrow">→</span>
            </a>
            <p className="car-mailnote">
              <a href={mailto}>{APPLY_EMAIL}</a>
            </p>
            <div style={{ marginTop: '30px' }}>
              <Link href="/careers" className="car-role-go" style={{ textDecoration: 'none' }}>
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
