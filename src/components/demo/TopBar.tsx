import Image from 'next/image'
import Link from 'next/link'
import type { StageId } from '@/data/demo/types'

const STAGES: { id: StageId; label: string }[] = [
  { id: 'detect', label: 'Detect' },
  { id: 'understand', label: 'Understand' },
  { id: 'decide', label: 'Decide' },
  { id: 'act', label: 'Act' },
  { id: 'learn', label: 'Learn' },
]

export const ALL_MODULES = [
  { icon: 'videocam',   label: 'Video & Analytics', key: 'VIDEO & ANALYTICS' },
  { icon: 'emergency',  label: '911 & Dispatch',     key: '911 & DISPATCH' },
  { icon: 'event',      label: 'Event Management',   key: 'EVENT MANAGEMENT' },
  { icon: 'map',        label: 'GIS',                key: 'GIS & SITUATIONAL AWARENESS' },
  { icon: 'hub',        label: 'Integrations',        key: 'INTEGRATIONS' },
  { icon: 'smartphone', label: 'Responder Apps',      key: 'FIRST RESPONDER APPS' },
  { icon: 'shield',     label: 'Citizen Safety',      key: 'CITIZEN SAFETY' },
  { icon: 'psychology', label: 'AI Engine',           key: 'AI ENGINE' },
  { icon: 'bar_chart',  label: 'BI',                  key: 'BUSINESS INTELLIGENCE' },
]

interface TopBarProps {
  incidentBadge: string
  currentStage: StageId
  onNavigate: (stage: StageId) => void
  activeModules: string[]
}

export default function TopBar({ incidentBadge, currentStage, onNavigate, activeModules }: TopBarProps) {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        background: 'rgba(16,19,27,0.88)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
      }}
    >
      {/* ── Row 1: Logo · incident badge · icons ── */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 32px',
          height: 72,
        }}
      >
        {/* Left: logo + incident badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <Link
            href="/demo"
            style={{
              fontSize: '1.2rem',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: '#adc6ff',
              textDecoration: 'none',
              textShadow: '0 0 12px rgba(75,142,255,0.45)',
            }}
          >
            KabatOne
          </Link>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '6px 16px',
              borderRadius: 9999,
              background: 'rgba(255,180,171,0.06)',
              border: '1px solid rgba(255,180,171,0.2)',
            }}
          >
            <span
              className="animate-pulse"
              style={{
                display: 'inline-block',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#ffb4ab',
              }}
            />
            <span
              style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(224,226,237,0.65)',
              }}
            >
              {incidentBadge.replace(/^[●•]\s*/, '')}
            </span>
          </div>
        </div>

        {/* Right: grid icon + avatar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span
            className="material-symbols-outlined"
            style={{ color: 'rgba(255,255,255,0.35)', fontSize: 20, cursor: 'pointer' }}
          >
            grid_view
          </span>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              flexShrink: 0,
            }}
          >
            <Image
              src="/demo/hub/avatar.jpg"
              alt="Operator"
              width={30}
              height={30}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* ── Row 2: Stage lifecycle pills ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          paddingBottom: 10,
        }}
      >
        {STAGES.map((stage, i) => {
          const isActive = stage.id === currentStage
          return (
            <div key={stage.id} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button
                onClick={() => onNavigate(stage.id)}
                style={{
                  padding: '7px 22px',
                  borderRadius: 9999,
                  fontSize: '10px',
                  fontWeight: isActive ? 900 : 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  border: isActive ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  background: isActive ? '#007AFF' : 'rgba(255,255,255,0.05)',
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.4)',
                  boxShadow: isActive ? '0 0 20px rgba(0,122,255,0.4)' : 'none',
                }}
              >
                {stage.label}
              </button>
              {i < STAGES.length - 1 && (
                <span
                  className="material-symbols-outlined"
                  style={{ color: 'rgba(255,255,255,0.18)', fontSize: 14 }}
                >
                  chevron_right
                </span>
              )}
            </div>
          )
        })}
      </div>

      {/* ── Row 3: Platform modules strip ── */}
      <div
        className="scrollbar-hide"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          paddingBottom: 10,
          paddingLeft: 24,
          paddingRight: 24,
          overflowX: 'auto',
        }}
      >
        {ALL_MODULES.map((m) => {
          const isActive = activeModules.includes(m.key)
          return (
            <div
              key={m.key}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                padding: '4px 11px',
                borderRadius: 9999,
                fontSize: '11px',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'all 0.3s',
                background: isActive ? 'rgba(173,198,255,0.12)' : 'rgba(255,255,255,0.025)',
                border: isActive
                  ? '1px solid rgba(173,198,255,0.3)'
                  : '1px solid rgba(255,255,255,0.05)',
                color: isActive ? '#adc6ff' : 'rgba(193,198,215,0.3)',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 13,
                  color: isActive ? '#adc6ff' : 'rgba(193,198,215,0.22)',
                }}
              >
                {m.icon}
              </span>
              {m.label}
            </div>
          )
        })}
      </div>
    </header>
  )
}
