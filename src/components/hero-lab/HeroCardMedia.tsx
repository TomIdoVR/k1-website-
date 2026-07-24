import Image from 'next/image'

type HeroCardMediaProps = {
  src: string
  width: number
  height: number
  variant: 'video' | 'gis' | 'evidence' | 'mobile'
}

/** Decorative, overflow-hidden media region sourced from the approved card art. */
export function HeroCardMedia({ src, width, height, variant }: HeroCardMediaProps) {
  return (
    <div className={`hll-card-media hll-card-media--${variant}`} aria-hidden="true">
      <Image
        className="hll-card-media-source"
        src={src}
        alt=""
        width={width}
        height={height}
        sizes="(max-width: 1180px) 260px, 190px"
      />
    </div>
  )
}
