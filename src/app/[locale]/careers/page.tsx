import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CareersStyles from '@/components/careers/CareersStyles'
import ApplicationForm from '@/components/careers/ApplicationForm'
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

  const t = {
    home: es ? 'Inicio' : 'Home',
    careers: es ? 'Empleos' : 'Careers',
    eyebrow: es ? 'Únete al Equipo' : 'Join the Team',
    headHead: es ? 'Construye Sistemas Que' : 'Build Systems That',
    headTail: es ? 'Salvan Vidas' : 'Save Lives',
    sub: es
      ? 'KabatOne desarrolla la plataforma unificada de seguridad pública en la que confían más de 40 ciudades para proteger a más de 73 millones de ciudadanos. El software que escribimos se usa en centros de mando reales, en el peor día de alguien más.'
      : 'KabatOne builds the unified public safety platform that 40+ cities rely on to protect over 73 million citizens. The software we write runs in real command centers, on somebody’s worst day.',
    heroCta: es ? 'Ver vacantes' : 'See open roles',
    whyLabel: es ? 'Por Qué KabatOne' : 'Why KabatOne',
    whyH2: es ? 'Trabajo Real, Consecuencias Reales' : 'Real Work, Real Consequences',
    whySub: es
      ? 'No construimos dashboards. Construimos los sistemas de los que dependen despachadores y comandantes cuando el tiempo de respuesta se mide en segundos.'
      : 'We don’t build dashboards. We build the systems dispatchers and commanders depend on when response time is measured in seconds.',
    openLabel: es ? 'Vacantes Abiertas' : 'Open Positions',
    openH2: es ? 'Posiciones Disponibles' : 'Available Roles',
    openSub: es
      ? 'Contratamos en Israel y México. Cada vacante se publica en el idioma que elijas para el sitio.'
      : 'We hire in Israel and Mexico. Every role is published in whichever language you pick for the site.',
    viewRole: es ? 'Ver vacante' : 'View role',
    emptyH: es ? 'No hay vacantes abiertas' : 'No open positions right now',
    emptyP: es
      ? 'Siempre queremos conocer a buenos ingenieros. Escríbenos y cuéntanos qué construyes.'
      : 'We always want to meet strong engineers. Write to us and tell us what you build.',
    ctaLabel: es ? 'Postúlate' : 'Get in touch',
    ctaH2: es ? '¿No Ves Tu Rol?' : 'Don’t See Your Role?',
    ctaSub: es
      ? 'Si crees que deberías trabajar aquí, escríbenos. Cuéntanos qué has construido y qué quieres construir después.'
      : 'If you think you should be working here, write to us. Tell us what you’ve built and what you want to build next.',
  }

  const stats = es
    ? [
        { v: '40+', l: 'Ciudades', c: '#60a5fa' },
        { v: '73M+', l: 'Ciudadanos protegidos', c: '#06b6d4' },
        { v: '3', l: 'Continentes', c: '#a855f7' },
        { v: '24/7', l: 'Operación crítica', c: '#22c55e' },
      ]
    : [
        { v: '40+', l: 'Cities', c: '#60a5fa' },
        { v: '73M+', l: 'Citizens protected', c: '#06b6d4' },
        { v: '3', l: 'Continents', c: '#a855f7' },
        { v: '24/7', l: 'Mission-critical uptime', c: '#22c55e' },
      ]

  const reasons = es
    ? [
        { h: 'Misión Crítica de Verdad', p: 'Despacho de emergencias, video, GIS y sensores en tiempo real. Si el sistema se traba, alguien espera más por una ambulancia. Eso cambia cómo se diseña.' },
        { h: 'Israel y México', p: 'I+D en Israel, desarrollo y operaciones en México, oficina comercial en Nueva Jersey. Equipos distribuidos que entregan a más de 10 países.' },
        { h: 'Ingeniería AI-Native', p: 'Trabajamos spec-first, con agentes de codificación bajo revisión humana y compuertas explícitas. La IA hace el trabajo mecánico; las personas deciden.' },
        { h: 'Propiedad Real', p: 'Equipos pequeños, alcance grande. Tomas decisiones de arquitectura que sobreviven años de funcionalidades y las firmas con tu nombre.' },
      ]
    : [
        { h: 'Genuinely Mission-Critical', p: 'Emergency dispatch, video, GIS and sensors in real time. If the system stalls, somebody waits longer for an ambulance. That changes how you design.' },
        { h: 'Israel and Mexico', p: 'R&D in Israel, development and operations in Mexico, commercial office in New Jersey. Distributed teams shipping to 10+ countries.' },
        { h: 'AI-Native Engineering', p: 'We work spec-first, with coding agents under human review and explicit gates. AI does the mechanical work; people decide.' },
        { h: 'Real Ownership', p: 'Small teams, large scope. You make architecture decisions that outlive years of features — and you sign your name to them.' },
      ]

  return (
    <>
      <Nav />
      <CareersStyles />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: t.home, url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
        { name: t.careers, url: es ? 'https://kabatone.com/es/careers' : 'https://kabatone.com/careers' },
      ])) }} />

      <div className="page-light" style={{ paddingTop: '70px', position: 'relative', minHeight: '100vh', background: 'var(--bg)', color: 'var(--white)' }}>

        <nav aria-label="Breadcrumb" className="car-crumb">
          <Link href="/">{t.home}</Link>
          <span className="car-crumb-sep">/</span>
          <span className="car-crumb-now">{t.careers}</span>
        </nav>

        {/* ── HERO ── */}
        <section className="dark-section car-hero-wrap" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '64px' }}>
          <div className="car-glow" />
          <div className="car-hero">
            <div className="car-eyebrow">
              <span className="car-eyebrow-dot" />
              {t.eyebrow}
            </div>
            <h1 className="car-headline">
              {t.headHead} <span className="car-grad">{t.headTail}</span>
            </h1>
            <p className="car-sub">{t.sub}</p>
            <a href="#open-positions" className="car-btn">
              {t.heroCta}<span className="car-arrow">→</span>
            </a>
            <div className="car-stats" style={{ marginTop: '56px' }}>
              {stats.map((s) => (
                <div className="car-stat" key={s.l}>
                  <div className="car-stat-num" style={{ color: s.c }}>{s.v}</div>
                  <div className="car-stat-label">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY ── */}
        <section className="car-section">
          <div className="car-inner car-center">
            <div className="car-label">{t.whyLabel}</div>
            <h2 className="car-h2">{t.whyH2}</h2>
            <p className="car-section-sub">{t.whySub}</p>
          </div>
          <div className="car-inner">
            <div className="car-grid">
              {reasons.map((r, i) => (
                <div className="car-card" key={r.h}>
                  <div className="car-card-n">{String(i + 1).padStart(2, '0')}</div>
                  <div className="car-card-h">{r.h}</div>
                  <p className="car-card-p">{r.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OPEN POSITIONS ── */}
        <section className="car-section dark-section car-tint-cyan" id="open-positions" style={{ scrollMarginTop: '70px' }}>
          <div className="car-inner car-center">
            <div className="car-label">{t.openLabel}</div>
            <h2 className="car-h2">{t.openH2}</h2>
            <p className="car-section-sub">{t.openSub}</p>
          </div>
          <div className="car-inner" style={{ marginTop: '48px' }}>
            {openings.length === 0 ? (
              <div className="car-card">
                <div className="car-card-h">{t.emptyH}</div>
                <p className="car-card-p">{t.emptyP}</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {openings.map((job) => {
                  const c = es ? job.es : job.en
                  return (
                    <Link className="car-role" key={job.slug} href={`/careers/${job.slug}`}>
                      <div className="car-role-meta">
                        <span className="car-role-tag">{es ? job.department.es : job.department.en}</span>
                        <span className="car-role-tag-2">{es ? job.location.es : job.location.en}</span>
                      </div>
                      <div className="car-role-h">{c.title}</div>
                      <p className="car-role-p">{c.summary}</p>
                      <span className="car-role-go">{t.viewRole} →</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="car-section" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="car-glow" />
          <div className="car-inner-narrow" style={{ position: 'relative', zIndex: 1 }}>
            <div className="car-label car-label-center">{t.ctaLabel}</div>
            <h2 className="car-h2 car-center">{t.ctaH2}</h2>
            <p className="car-section-sub car-center" style={{ margin: '0 auto 36px' }}>{t.ctaSub}</p>
            <ApplicationForm
              es={es}
              roleTitle={es ? 'Candidatura espontánea' : 'General application'}
              roleSlug="general"
            />
          </div>
        </section>

      </div>
      <Footer es={es} />
    </>
  )
}
