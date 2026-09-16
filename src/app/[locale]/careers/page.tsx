import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { generatePageMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'
import { sortedJobs } from '@/content/jobs'
import ApplicationForm from '@/components/careers/ApplicationForm'
import '@/components/hero-lab/solution-page.css'
import '@/components/careers/careers.css'

// Brand blue, matching the solution pages' accent contract.
const ACCENT = { '--ac': '#1858f5', '--ac-ink': '#1d4ed8', '--ac-dark': '#1858f5' } as CSSProperties

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

  const t = {
    eyebrow: es ? 'Únete al equipo' : 'Join the team',
    h1a: es ? 'Construye sistemas' : 'Build systems',
    h1b: es ? 'que salvan vidas' : 'that save lives',
    sub: es
      ? 'KabatOne desarrolla la plataforma unificada de seguridad pública en la que confían más de 40 ciudades para proteger a más de 73 millones de ciudadanos. El software que escribimos se usa en centros de mando reales, en el peor día de alguien más.'
      : 'KabatOne builds the unified public safety platform that 40+ cities rely on to protect over 73 million citizens. The software we write runs in real command centers, on somebody’s worst day.',
    cta: es ? 'Ver vacantes' : 'See open roles',
    whyEyebrow: es ? 'Por qué KabatOne' : 'Why KabatOne',
    whyH2a: es ? 'Trabajo real,' : 'Real work,',
    whyH2b: es ? 'consecuencias reales' : 'real consequences',
    openEyebrow: es ? 'Vacantes abiertas' : 'Open positions',
    openH2a: es ? 'Posiciones' : 'Available',
    openH2b: es ? 'disponibles' : 'roles',
    openSub: es
      ? 'Contratamos en Israel y México. Cada vacante se publica en el idioma que elijas para el sitio.'
      : 'We hire in Israel and Mexico. Every role is published in whichever language you pick for the site.',
    viewRole: es ? 'Ver vacante' : 'View role',
    emptyT: es ? 'No hay vacantes abiertas' : 'No open positions right now',
    emptyD: es
      ? 'Siempre queremos conocer a buenos ingenieros. Escríbenos y cuéntanos qué construyes.'
      : 'We always want to meet strong engineers. Write to us and tell us what you build.',
    ctaEyebrow: es ? 'Postúlate' : 'Get in touch',
    ctaH2a: es ? '¿No ves' : 'Don’t see',
    ctaH2b: es ? 'tu rol?' : 'your role?',
    ctaSub: es
      ? 'Si crees que deberías trabajar aquí, escríbenos. Cuéntanos qué has construido y qué quieres construir después.'
      : 'If you think you should be working here, write to us. Tell us what you’ve built and what you want to build next.',
  }

  const stats = es
    ? [
        { v: '40+', l: 'Ciudades' },
        { v: '73M+', l: 'Ciudadanos protegidos' },
        { v: '3', l: 'Continentes' },
        { v: '24/7', l: 'Operación crítica' },
      ]
    : [
        { v: '40+', l: 'Cities' },
        { v: '73M+', l: 'Citizens protected' },
        { v: '3', l: 'Continents' },
        { v: '24/7', l: 'Mission-critical uptime' },
      ]

  const reasons = es
    ? [
        { t: 'Misión crítica de verdad', d: 'Despacho de emergencias, video, GIS y sensores en tiempo real. Si el sistema se traba, alguien espera más por una ambulancia. Eso cambia cómo se diseña.' },
        { t: 'Israel y México', d: 'I+D en Israel, desarrollo y operaciones en México, oficina comercial en Nueva Jersey. Equipos distribuidos que entregan a más de 10 países.' },
        { t: 'Ingeniería AI-native', d: 'Trabajamos spec-first, con agentes de codificación bajo revisión humana y compuertas explícitas. La IA hace el trabajo mecánico; las personas deciden.' },
        { t: 'Propiedad real', d: 'Equipos pequeños, alcance grande. Tomas decisiones de arquitectura que sobreviven años de funcionalidades y las firmas con tu nombre.' },
      ]
    : [
        { t: 'Genuinely mission-critical', d: 'Emergency dispatch, video, GIS and sensors in real time. If the system stalls, somebody waits longer for an ambulance. That changes how you design.' },
        { t: 'Israel and Mexico', d: 'R&D in Israel, development and operations in Mexico, commercial office in New Jersey. Distributed teams shipping to 10+ countries.' },
        { t: 'AI-native engineering', d: 'We work spec-first, with coding agents under human review and explicit gates. AI does the mechanical work; people decide.' },
        { t: 'Real ownership', d: 'Small teams, large scope. You make architecture decisions that outlive years of features — and you sign your name to them.' },
      ]

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
      <div className="sp" style={ACCENT}>

        <section className="sp-hero">
          <div className="sp-wrap sp-hero-inner crs-hero-inner">
            <div>
              <div className="sp-eyebrow">{t.eyebrow}</div>
              <h1 className="sp-h1"><span>{t.h1a}</span><span>{t.h1b}</span></h1>
              <p className="sp-sub">{t.sub}</p>
              <div className="sp-ctas">
                <a className="sp-btn" href="#open-positions">{t.cta} →</a>
              </div>
              <div className="crs-stats">
                {stats.map((s) => (
                  <div key={s.l}>
                    <div className="crs-stat-v">{s.v}</div>
                    <div className="crs-stat-l">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sp-section sp-benefits">
          <div className="sp-wrap">
            <div className="sp-head">
              <div className="sp-section-eyebrow">{t.whyEyebrow}</div>
              <h2 className="sp-h2">{t.whyH2a} <em>{t.whyH2b}</em></h2>
            </div>
            <div className="sp-ben-grid">
              {reasons.map((r) => (
                <div className="sp-ben" key={r.t}>
                  <h3 className="sp-ben-t">{r.t}</h3>
                  <p className="sp-ben-d">{r.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sp-section" id="open-positions" style={{ scrollMarginTop: '80px' }}>
          <div className="sp-wrap">
            <div className="sp-head">
              <div className="sp-section-eyebrow">{t.openEyebrow}</div>
              <h2 className="sp-h2">{t.openH2a} <em>{t.openH2b}</em></h2>
              <p className="sp-lede">{t.openSub}</p>
            </div>
            {openings.length === 0 ? (
              <div className="sp-ben">
                <h3 className="sp-ben-t">{t.emptyT}</h3>
                <p className="sp-ben-d">{t.emptyD}</p>
              </div>
            ) : (
              <div className="crs-roles">
                {openings.map((job) => {
                  const c = es ? job.es : job.en
                  return (
                    <Link className="crs-role" key={job.slug} href={`/careers/${job.slug}`}>
                      <div className="crs-role-meta">
                        <span className="crs-tag">{es ? job.department.es : job.department.en}</span>
                        <span className="crs-tag crs-tag-2">{es ? job.location.es : job.location.en}</span>
                      </div>
                      <div className="crs-role-t">{c.title}</div>
                      <p className="crs-role-d">{c.summary}</p>
                      <span className="crs-role-go">{t.viewRole} →</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        <section className="sp-section sp-core">
          <div className="sp-wrap">
            <div className="sp-head sp-head-c">
              <div className="sp-section-eyebrow">{t.ctaEyebrow}</div>
              <h2 className="sp-h2">{t.ctaH2a} <em>{t.ctaH2b}</em></h2>
              <p className="sp-lede" style={{ marginInline: 'auto' }}>{t.ctaSub}</p>
            </div>
            <div style={{ maxWidth: '760px', margin: '32px auto 0' }}>
              <ApplicationForm
                es={es}
                roleTitle={es ? 'Candidatura espontánea' : 'General application'}
                roleSlug="general"
              />
            </div>
          </div>
        </section>

      </div>
      <Footer es={es} />
    </>
  )
}
