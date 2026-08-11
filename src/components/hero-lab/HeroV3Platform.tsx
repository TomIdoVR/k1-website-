import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import HeroLabHeader, { Arrow } from './HeroLabHeader'
import './hero-lab-header.css'
import HeroCardCarousel from './HeroCardCarousel'
import { moduleCards } from './HeroModuleCards'

const T = {
  /* The tagline moved from the H1 into the eyebrow so the H1 can carry the
     phrase the production homepage already ranks on. Nothing is lost visually
     — the two-line gradient treatment still applies to h1a/h1b. */
  eyebrow: { en: 'ONE PLATFORM. TOTAL AWARENESS.', es: 'UNA PLATAFORMA. CONCIENCIA TOTAL.' },
  h1a: { en: 'The Unified Operating System ', es: 'El Sistema Operativo Unificado ' },
  h1b: { en: 'for Public Safety.', es: 'para Seguridad Pública.' },
  sub: {
    en: 'Dispatch, video, GIS, event management, evidence, mobile response and integrations — unified into a single operational platform.',
    es: 'Despacho, video, GIS, gestión de eventos, evidencia, respuesta móvil e integraciones — unificados en una sola plataforma operativa.',
  },
  demo: { en: 'Book a Demo', es: 'Solicita una Demo' },
  watch: { en: 'Watch Overview', es: 'Ver Resumen' },
  stats: [
    { num: '73M+', en: 'Citizens Protected', es: 'Ciudadanos Protegidos', icon: 'people' },
    { num: '40+', en: 'Cities Deployed', es: 'Ciudades Desplegadas', icon: 'city' },
    { num: '99.99%', en: 'Uptime SLA', es: 'Disponibilidad SLA', icon: 'shield' },
  ],
}

function PlatformMark() {
  return (
    <Image
      className="hll-platform-mark"
      src="/images/hero-cards/platform-mark.webp"
      alt=""
      width={1024}
      height={1024}
      priority
    />
  )
}

function HeroActions({ es }: { es: boolean }) {
  const language = es ? 'es' : 'en'
  /* "Watch Overview" is pulled until an actual overview video exists — it
     linked to /demo with nothing to play. T.watch and the .hll-btn-ghost /
     .hll-play styles are left in place so restoring it is a one-liner. */
  return <div className="hll-ctas"><Link className="hll-btn-primary" href="/contact">{T.demo[language]}<Arrow /></Link></div>
}

function StatIcon({ name }: { name: string }) {
  if (name === 'people') return <svg viewBox="0 0 42 42"><circle cx="16" cy="13" r="6" /><path d="M5 36v-5c0-6 5-10 11-10s11 4 11 10v5ZM27 9a5 5 0 0 1 0 10M28 24c5 0 9 4 9 9v3" /></svg>
  if (name === 'city') return <svg viewBox="0 0 42 42"><path d="M8 36V12l13-6 13 6v24M15 16h3M24 16h3M15 23h3M24 23h3M15 30h3M24 30h3" /></svg>
  return <svg viewBox="0 0 42 42"><path d="m21 4 14 5v11c0 9-6 15-14 18C13 35 7 29 7 20V9Z" /><path d="m15 21 4 4 8-9" /></svg>
}

function ProofMetrics({ es }: { es: boolean }) {
  const language = es ? 'es' : 'en'
  return <div className="hll-stats" aria-label={es ? 'Métricas de confianza' : 'Trust metrics'}>{T.stats.map((stat) => <div className="hll-stat" key={stat.num}><span className="hll-stat-icon"><StatIcon name={stat.icon} /></span><span><strong className="hll-stat-num">{stat.num}</strong><small className="hll-stat-label">{stat[language]}</small></span></div>)}</div>
}

/* `modules` controls whether the seven module cards ride in the hero.
   /hero-lab keeps them (default). /hero-lab-story turns them off and renders
   them as their own section further down, leaving the hero free to carry a
   single purpose-built image once that art exists.

   `split` switches the hero from the centred stack to the full-bleed layout:
   the art is a background layer spanning the section and the copy sits on top
   of it. Opt-in and defaulted off so /hero-lab keeps the centred version and
   the two can be compared side by side. The art is one file — swapping it needs
   no code change. */
/* The 2:1 extension of unified-platform.png, not the original. The source render
   is 1.37:1; a hero band is far wider than that, so `cover` on the original had
   to discard over half its height and cut the console. The wide file adds 680px
   of matched pale ground on the left — the side the copy sits on — so the art
   can bleed edge to edge with nothing cropped. The original is kept alongside
   it; drop a genuinely wide render in here when one exists. */
/* The native render, not the 2.25:1 extension. The extension existed to let the
   art `cover` a full-bleed band, but the 768px it added were flat fill — no
   detail — while every real pixel got stretched across the whole width with it.
   That ground is now drawn in CSS instead, so it extends to any width for free
   and the art is only ever asked to cover the part of the frame it actually
   has resolution for. */
const HERO_ART = '/images/hero/unified-platform-art.png'

/* `fill` rather than fixed dimensions: as a background layer the art has to
   cover a box whose aspect ratio is set by the viewport, not by the file. It
   is still the LCP element, so it keeps `priority`, and the box it fills is
   sized by CSS, so there is nothing to shift.

   aria-hidden with an empty alt: the copy on top now carries the meaning, and
   at this size the console is decoration. Announcing a long description of an
   image the user cannot read anything in is noise, not access. */
function HeroArt() {
  return (
    <div className="hsplit-art" aria-hidden="true">
      <Image
        src={HERO_ART}
        alt=""
        width={1536}
        height={1024}
        priority
        sizes="(max-width: 980px) 100vw, 1040px"
      />
    </div>
  )
}

export default function HeroV3Platform({ es, modules = true, split = false }: { es: boolean; modules?: boolean; split?: boolean }) {
  const language = es ? 'es' : 'en'
  const cards = moduleCards(es)

  if (split) {
    return (
      <>
        <HeroLabHeader es={es} />
        <section className="hll-page hll-page--split" aria-labelledby="hll-title">
          <HeroArt />
          <div className="hsplit">
            <div className="hsplit-copy">
              <p className="hll-eyebrow">{T.eyebrow[language]}</p>
              <h1 className="hll-headline" id="hll-title">{T.h1a[language]}<span className="hll-headline-grad">{T.h1b[language]}</span></h1>
              <p className="hll-sub">{T.sub[language]}</p>
              <HeroActions es={es} />
            </div>
          </div>
          <ProofMetrics es={es} />
        </section>
      </>
    )
  }

  return (
    /* The header sits outside .hll-page deliberately. A sticky element cannot
       escape its parent's box, and .hll-page is only the hero section — about
       1537px of a 13884px document — so nesting the header inside it made the
       nav unstick and scroll away as soon as the hero ended. As a sibling it is
       a direct child of <main> and stays pinned for the whole page. It declares
       its own colour tokens and background, so it does not depend on .hll-page. */
    <>
      <HeroLabHeader es={es} />
      <section className="hll-page" aria-labelledby="hll-title">
      <div className="hll-hero-head">
        <p className="hll-eyebrow">{T.eyebrow[language]}</p>
        <h1 className="hll-headline" id="hll-title">{T.h1a[language]}<span className="hll-headline-grad">{T.h1b[language]}</span></h1>
        <p className="hll-sub">{T.sub[language]}</p>
        <HeroActions es={es} />
      </div>
      <div className={modules ? 'hll-platform-stage' : 'hll-platform-stage hll-platform-stage--mark'}>
        <div className="hll-mark" aria-hidden="true"><PlatformMark /></div>
        {modules && (
          <HeroCardCarousel previousLabel={es ? 'Tarjeta anterior' : 'Previous card'} nextLabel={es ? 'Tarjeta siguiente' : 'Next card'} slideLabel={es ? 'Módulos de la plataforma' : 'Platform modules'}>{cards}</HeroCardCarousel>
        )}
      </div>
      <ProofMetrics es={es} />
      </section>
    </>
  )
}
