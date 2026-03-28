import Image from 'next/image'
import Link from 'next/link'

interface TopBarProps {
  incidentBadge: string
}

export default function TopBar({ incidentBadge }: TopBarProps) {
  return (
    <div
      className="sticky top-0 z-50 flex items-center justify-between px-6"
      style={{
        height: '60px',
        background: 'rgba(8,16,26,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/images/logo.png"
          alt="KabatOne"
          width={130}
          height={28}
          className="h-7 w-auto"
          priority
        />
      </Link>

      {/* Incident badge */}
      <div
        className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-mono font-semibold tracking-wider"
        style={{
          background: 'rgba(255,69,96,0.12)',
          border: '1px solid rgba(255,69,96,0.35)',
          color: '#E0ECF8',
        }}
      >
        <span
          className="h-2 w-2 rounded-full animate-pulse"
          style={{ background: '#FF4560' }}
        />
        <span style={{ color: '#E0ECF8', fontSize: '12px' }}>{incidentBadge}</span>
      </div>

      {/* Decorative icons */}
      <div className="flex items-center gap-3">
        {/* Grid icon */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          style={{ color: '#48647A' }}
        >
          <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="11" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="1" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        {/* Avatar */}
        <div
          className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-semibold"
          style={{ background: '#0D1825', border: '1px solid #1A3050', color: '#48647A' }}
        >
          OC
        </div>
      </div>
    </div>
  )
}
