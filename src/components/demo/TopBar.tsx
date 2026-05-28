import Image from 'next/image'
import { Link } from '@/i18n/navigation'
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
      className="demo-header"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        background: 'transparent',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
      }}
    >
      {/* ── Row 1: Logo · incident badge · icons ── */}
      <div
        className="demo-header-row1"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 32px',
          height: 72,
          background: 'rgba(16,19,27,0.96)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
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
            className="demo-incident-badge demo-incident-badge-hide"
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
        className="demo-header-row2"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          padding: '8px 0 8px',
          background: '#f1f4f8',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        {STAGES.map((stage, i) => {
          const isActive = stage.id === currentStage
          return (
            <div key={stage.id} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button
                className="demo-stage-pill"
                data-active={isActive ? 'true' : undefined}
                onClick={() => onNavigate(stage.id)}
                style={{
                  padding: '6px 20px',
                  borderRadius: 9999,
                  fontSize: '10px',
                  fontWeight: isActive ? 900 : 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  border: isActive ? 'none' : '1px solid rgba(0,0,0,0.12)',
                  background: isActive ? '#007AFF' : 'rgba(0,0,0,0.04)',
                  color: isActive ? '#fff' : 'rgba(0,0,0,0.38)',
                  boxShadow: isActive ? '0 2px 12px rgba(0,122,255,0.3)' : 'none',
                }}
              >
                {stage.label}
              </button>
              {i < STAGES.length - 1 && (
                <span
                  className="material-symbols-outlined demo-stage-chevron"
                  style={{ color: 'rgba(0,0,0,0.18)', fontSize: 14 }}
                >
                  chevron_right
                </span>
              )}
            </div>
          )
        })}
      </div>

      <style>{`
        .demo-stage-pill:not([data-active="true"]):hover {
          background: rgba(0,0,0,0.09) !important;
          border-color: rgba(0,0,0,0.22) !important;
          color: rgba(0,0,0,0.65) !important;
        }
        .demo-stage-pill:not([data-active="true"]):active {
          background: rgba(0,122,255,0.08) !important;
          border-color: rgba(0,122,255,0.3) !important;
          color: #007AFF !important;
        }
        .demo-stage-pill[data-active="true"]:hover {
          background: #0066dd !important;
          box-shadow: 0 4px 16px rgba(0,122,255,0.45) !important;
        }
        @media (max-width: 768px) {
          .demo-header-row1 { height: 52px !important; padding: 0 16px !important; }
          .demo-incident-badge { padding: 4px 10px !important; }
          .demo-header-row2 { gap: 6px !important; padding: 6px 8px !important; overflow-x: auto; flex-wrap: nowrap; justify-content: flex-start !important; }
          .demo-stage-pill { padding: 4px 12px !important; font-size: 9px !important; }
          .demo-stage-chevron { font-size: 11px !important; }
        }
        @media (max-width: 480px) {
          .demo-header-row2 { display: none !important; }
          .demo-header-row1 { height: 48px !important; }
        }
      `}</style>
    </header>
  )
}
