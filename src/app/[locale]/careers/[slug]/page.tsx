import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { notFound } from 'next/navigation'
import { breadcrumbSchema, jobPostingSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'
import ApplicationForm from '@/components/careers/ApplicationForm'
import {
  getJob, bulletParts, bulletText,
  type Job, type JobContent, type JobSection,
} from '@/content/jobs'
import '@/components/hero-lab/solution-page.css'
import '@/components/careers/careers.css'

const ACCENT = { '--ac': '#1858f5', '--ac-ink': '#1d4ed8', '--ac-dark': '#6ea8ff' } as CSSProperties

/* Section tones, cycled in order. One navy band lands on the third section —
   the responsibilities cards — mirroring where the solution pages put their own
   dark .sp-features block, so the page has a focal point instead of one flat
   field. White cards read well against it. */
const SECTION_TONES = [
  'crs-band-white',
  'crs-band-cool',
  'crs-band-dark',
  'crs-band-white',
  'crs-band-cool',
  '',
]

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
    if (section.body) for (const p of section.body.split('\n\n')) parts.push(`<p>${escape(p)}</p>`)
    if (section.bullets) {
      parts.push(`<ul>${section.bullets.map((b) => `<li>${escape(bulletText(b))}</li>`).join('')}</ul>`)
    }
  }
  return parts.join('')
}

function SectionBody({ section }: { section: JobSection }) {
  const layout = section.layout ?? 'prose'
  const bullets = section.bullets ?? []

  if (layout === 'cards') {
    return (
      <div className="sp-ben-grid">
        {bullets.map((b, i) => {
          const { title, text } = bulletParts(b)
          return (
            <div className="sp-ben" key={text.slice(0, 40)}>
              <div className="crs-num">{String(i + 1).padStart(2, '0')}</div>
              {title && <h3 className="sp-ben-t">{title}</h3>}
              <p className="sp-ben-d">{text}</p>
            </div>
          )
        })}
      </div>
    )
  }

  if (layout === 'checklist') {
    return (
      <div className="crs-checks">
        {bullets.map(bulletText).map((b) => (
          <div className="crs-check" key={b.slice(0, 40)}>
            <span className="sp-tick">✓</span>
            <span>{b}</span>
          </div>
        ))}
      </div>
    )
  }

  if (layout === 'tags') {
    const chips = bullets.map(bulletText).flatMap((b) =>
      b.replace(/\.$/, '').split(';').map((x) => x.trim()).filter(Boolean)
    )
    return (
      <div className="crs-chips">
        {chips.map((c) => <span className="crs-chip" key={c}>{c}</span>)}
      </div>
    )
  }

  if (layout === 'steps') {
    return (
      <div className="crs-steps">
        {bullets.map(bulletText).map((b, i) => (
          <div className="crs-step" key={b.slice(0, 40)}>
            <div className="crs-step-n">{String(i + 1).padStart(2, '0')}</div>
            <p className="sp-ben-d">{b}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      {section.body?.split('\n\n').map((p) => (
        <p className="crs-prose" key={p.slice(0, 40)}>{p}</p>
      ))}
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

  const t = {
    home: es ? 'Inicio' : 'Home',
    careers: es ? 'Empleos' : 'Careers',
    apply: es ? 'Postularme' : 'Apply for this role',
    backToAll: es ? 'Ver todas las vacantes' : 'See all open positions',
    ctaEyebrow: es ? 'Postúlate' : 'Get in touch',
    ctaH2a: es ? '¿Te interesa' : 'Interested in',
    ctaH2b: es ? 'este rol?' : 'this role?',
    ctaSub: es
      ? 'Cuéntanos quién eres y qué has construido. Leemos todas las candidaturas.'
      : 'Tell us who you are and what you’ve built. We read every application.',
    rows: [
      { k: es ? 'Ubicación' : 'Location', v: location },
      { k: es ? 'Área' : 'Department', v: department },
      { k: es ? 'Reporta a' : 'Reports to', v: reportsTo },
      { k: es ? 'Jornada' : 'Type', v: es ? 'Tiempo completo' : 'Full time' },
    ],
  }

  return (
    <>
      <Nav />
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

      <div className="sp" style={ACCENT}>

        <section className="sp-hero">
          <div className="sp-wrap sp-hero-inner crs-hero-inner">
            <div>
              <div className="sp-eyebrow">{department} · {location}</div>
              <h1 className="sp-h1"><span>{c.title}</span></h1>
              <p className="sp-sub">{c.summary}</p>
              <p className="sp-lede">{c.intro}</p>
              <div className="crs-meta">
                {t.rows.map((r) => (
                  <div key={r.k}>
                    <div className="crs-meta-k">{r.k}</div>
                    <div className="crs-meta-v">{r.v}</div>
                  </div>
                ))}
              </div>
              <div className="sp-ctas">
                <a className="sp-btn" href="#apply">{t.apply} →</a>
              </div>
            </div>
          </div>
        </section>

        {c.sections.map((section, i) => (
          <section
            className={`sp-section ${SECTION_TONES[i % SECTION_TONES.length]}`}
            key={section.heading}
          >
            <div className="sp-wrap">
              <div className="sp-head">
                <div className="sp-section-eyebrow">{String(i + 1).padStart(2, '0')}</div>
                <h2 className="sp-h2">{section.heading}</h2>
              </div>
              <SectionBody section={section} />
            </div>
          </section>
        ))}

        <section className="sp-section crs-band-white" id="apply" style={{ scrollMarginTop: '80px' }}>
          <div className="sp-wrap">
            <div className="sp-head sp-head-c">
              <div className="sp-section-eyebrow">{t.ctaEyebrow}</div>
              <h2 className="sp-h2">{t.ctaH2a} <em>{t.ctaH2b}</em></h2>
              <p className="sp-lede" style={{ marginInline: 'auto' }}>{t.ctaSub}</p>
            </div>
            <div style={{ maxWidth: '760px', margin: '32px auto 0' }}>
              <ApplicationForm
                es={es}
                roleTitle={c.title}
                roleSlug={job.slug}
                questions={job.questions}
              />
            </div>
            <p style={{ textAlign: 'center', marginTop: '26px' }}>
              <Link href="/careers" className="crs-role-go" style={{ textDecoration: 'none' }}>
                ← {t.backToAll}
              </Link>
            </p>
          </div>
        </section>

      </div>
      <Footer es={es} />
    </>
  )
}
