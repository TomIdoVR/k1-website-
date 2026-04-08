import Image from 'next/image'

interface PIPWindowProps {
  image: string
  label: string
}

export default function PIPWindow({ image, label }: PIPWindowProps) {
  return (
    <div
      className="absolute bottom-4 right-4 z-20 overflow-hidden rounded"
      style={{
        width: '220px',
        border: '1.5px solid #3B9EFF',
        borderRadius: '6px',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-2 px-3 py-1.5"
        style={{ background: 'rgba(8,16,26,0.9)', borderBottom: '1px solid rgba(59,158,255,0.25)' }}
      >
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#FF4560' }} />
        <span className="text-xs font-mono tracking-wider" style={{ color: '#E0ECF8' }}>
          ● LIVE
        </span>
        <span className="ml-auto text-xs font-mono" style={{ color: '#48647A' }}>
          {label}
        </span>
      </div>
      {/* Image */}
      <div className="relative" style={{ aspectRatio: '16/9' }}>
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover"
          sizes="220px"
        />
      </div>
    </div>
  )
}
