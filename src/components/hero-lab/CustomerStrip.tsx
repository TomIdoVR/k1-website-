import Image from 'next/image'

/* Customer / agency trust strip — compact auto-scrolling marquee.
   Real official government seals sourced from each agency's own site and
   hosted locally in /public/images/customers/. Some are placeholder-grade
   pending clean crest-only versions (Naucalpan carries a campaign slogan,
   Sinaloa is a faint line-art render). INAMI has no usable asset yet.
   Scoped under .cst- so it composes with the hero's .hll- light theme. */

type Seal = { key: string; src: string; name: string }

const SEALS: Seal[] = [
  { key: 'cdmx', src: '/images/customers/cdmx.webp', name: 'C5 CDMX' },
  { key: 'yucatan', src: '/images/customers/yucatan.webp', name: 'Yucatán' },
  { key: 'durango', src: '/images/customers/durango.webp', name: 'Durango' },
  { key: 'sinaloa', src: '/images/customers/sinaloa.webp', name: 'Sinaloa' },
  { key: 'tamaulipas', src: '/images/customers/tamaulipas.webp', name: 'Tamaulipas' },
  { key: 'jalisco', src: '/images/customers/jalisco.webp', name: 'Jalisco' },
  { key: 'michoacan', src: '/images/customers/michoacan.webp', name: 'Michoacán' },
  { key: 'chiapas', src: '/images/customers/chiapas.webp', name: 'Chiapas' },
  { key: 'puebla', src: '/images/customers/puebla.webp', name: 'Puebla' },
  { key: 'naucalpan', src: '/images/customers/naucalpan.webp', name: 'Naucalpan' },
  { key: 'nayarit', src: '/images/customers/nayarit.webp', name: 'Nayarit' },
]

const T = {
  label: { en: 'TRUSTED BY LEADING AGENCIES', es: 'CONFIADO POR AGENCIAS LÍDERES' },
}

export default function CustomerStrip({ es }: { es: boolean }) {
  const label = T.label[es ? 'es' : 'en']

  return (
    <section className="cst" aria-label={label}>
      <p className="cst-label">{label}</p>

      <div className="cst-mask">
        {/* Track is duplicated so the -50% translate loops seamlessly.
            The clone is aria-hidden so screen readers hear each agency once. */}
        <div className="cst-track">
          {[0, 1].map((copy) => (
            <div className="cst-track-half" key={copy} aria-hidden={copy === 1} style={{ display: 'contents' }}>
              {SEALS.map((s) => (
                <span className="cst-item" key={`${copy}-${s.key}`}>
                  <Image
                    src={s.src}
                    alt={copy === 0 ? `${s.name} — ${es ? 'sello oficial' : 'official seal'}` : ''}
                    width={132}
                    height={42}
                    sizes="132px"
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
