/* Industries — "where Kabat One already operates."
   Ported from the Claude Design project "Kabat One Website"
   (home/industries.jsx + home/industries.css).

   A photo grid with one large lead tile (Public Safety & Emergency
   Communications, spanning two rows) and four supporting tiles, each
   linking to its real industry route.

   Photos are AI-generated stand-ins (the source had empty image-slot
   placeholders — no real photography existed there either) — swap for
   real photography before this ships. */

import Image from 'next/image'
import { Link } from '@/i18n/navigation'

type Loc = { en: string; es: string }

type Industry = {
  key: string
  href: string
  color: string
  img: string
  name: Loc
  alt: Loc
}

const LEAD: Industry = {
  key: 'publicSafety',
  href: '/industries/public-safety',
  color: '#3b82f6',
  img: '/images/industries/public-safety.webp',
  name: { en: 'Public Safety & Emergency Communications', es: 'Seguridad Pública y Emergencias' },
  alt: { en: 'Emergency communications center / video wall', es: 'Centro de comunicaciones de emergencia / videowall' },
}

const REST: Industry[] = [
  {
    key: 'cities', href: '/industries/municipalities', color: '#06b6d4',
    img: '/images/industries/cities.webp',
    name: { en: 'Cities & Municipalities', es: 'Ciudades y Municipios' },
    alt: { en: 'City command center or operations room', es: 'Centro de mando urbano o sala de operaciones' },
  },
  {
    key: 'traffic', href: '/k-traffic', color: '#f59e0b',
    img: '/images/industries/traffic.webp',
    name: { en: 'Transportation & Traffic', es: 'Transporte y Tráfico' },
    alt: { en: 'Traffic control room', es: 'Sala de control de tráfico' },
  },
  {
    key: 'infra', href: '/industries/ports', color: '#0ea5e9',
    img: '/images/industries/infrastructure.webp',
    name: { en: 'Critical Infrastructure', es: 'Infraestructura Crítica' },
    alt: { en: 'Port, airport, or utility operations', es: 'Operaciones de puerto, aeropuerto o servicios' },
  },
  {
    key: 'venues', href: '/industries/stadiums', color: '#ef4444',
    img: '/images/industries/venues.webp',
    name: { en: 'Campuses & Large Venues', es: 'Campus y Grandes Recintos' },
    alt: { en: 'Stadium or campus command post', es: 'Puesto de mando en estadio o campus' },
  },
]

function Tile({ ind, lang, lead }: { ind: Industry; lang: 'en' | 'es'; lead?: boolean }) {
  return (
    <Link
      className={`ind-card${lead ? ' ind-lead' : ''}`}
      href={ind.href}
      style={{ '--ac': ind.color } as React.CSSProperties}
    >
      <Image src={ind.img} alt={ind.alt[lang]} fill sizes={lead ? '(max-width: 720px) 100vw, 50vw' : '(max-width: 720px) 50vw, 25vw'} className="ind-slot" />
      <div className="ind-card-overlay">
        <span className="ind-dot" />
        <h3 className="ind-card-name">{ind.name[lang]}</h3>
        <span className="ind-card-arrow" aria-hidden="true">→</span>
      </div>
    </Link>
  )
}

export default function Industries({ es }: { es: boolean }) {
  const lang = es ? 'es' : 'en'

  return (
    <section className="ind" id="industries">
      <div className="ind-wrap">
        <div className="ind-head">
          <div className="ind-eyebrow">{es ? 'INDUSTRIAS' : 'INDUSTRIES'}</div>
          <h2 className="ind-title">
            {es ? <>Donde Kabat One <em>ya está operando.</em></> : <>Where Kabat One <em>already operates.</em></>}
          </h2>
        </div>

        <div className="ind-grid">
          <Tile ind={LEAD} lang={lang} lead />
          {REST.map((ind) => (
            <Tile key={ind.key} ind={ind} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
