import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Scenario Explorer | KabatOne Platform',
  description:
    "Walk through real public safety scenarios and see how KabatOne's unified platform handles incidents end-to-end.",
  alternates: { canonical: 'https://kabatone.com/demo' },
}

/* ── data ── */

const MODULES = [
  { icon: 'videocam', label: 'Video & Analytics' },
  { icon: 'emergency', label: '911 & Dispatch' },
  { icon: 'event', label: 'Event Management' },
  { icon: 'map', label: 'GIS' },
  { icon: 'hub', label: 'Integrations' },
  { icon: 'smartphone', label: 'Responder Apps' },
  { icon: 'shield', label: 'Citizen Safety' },
  { icon: 'psychology', label: 'AI Engine' },
  { icon: 'bar_chart', label: 'BI' },
]

const LIFECYCLE = ['DETECT', 'UNDERSTAND', 'DECIDE', 'ACT', 'LEARN'] as const

const SCENARIOS = [
  {
    num: '01',
    title: 'STOLEN VEHICLE',
    desc: 'LPR detection · AI verification · unit dispatch',
    image: '/demo/hub/scenario-01.jpg',
    href: '/demo/lpr',
    live: true,
  },
  {
    num: '02',
    title: 'VIOLENCE DETECTION',
    desc: 'AI video analytics · threat assessment · response',
    image: '/demo/hub/scenario-02.jpg',
    href: '/demo/violence',
    live: true,
  },
  {
    num: '03',
    title: '911 MEDICAL EMERGENCY',
    desc: 'Call intake · geo-location · priority dispatch',
    image: '/demo/hub/scenario-03.jpg',
    href: '#',
    live: false,
  },
  {
    num: '04',
    title: 'SCHOOL PANIC BUTTON',
    desc: 'Instant lockdown · camera sweep · responder brief',
    image: '/demo/hub/scenario-04.jpg',
    href: '#',
    live: false,
  },
  {
    num: '05',
    title: 'ACCESS CONTROL',
    desc: 'Face recognition · watchlist match · gate denial',
    image: '/demo/hub/scenario-05.jpg',
    href: '#',
    live: false,
  },
]

/* ── page ── */

export default function DemoHubPage() {
  return (
    <div
      style={{
        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
        background: '#10131b',
        color: '#e0e2ed',
      }}
    >
      {/* ─── TopNav ─── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(16,19,27,0.92)',
          borderBottom: '1px solid rgba(49,53,61,0.25)',
          backdropFilter: 'blur(14px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: 1920,
            margin: '0 auto',
            padding: '16px 20px',
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: '#adc6ff',
              textShadow: '0 0 12px rgba(75,142,255,0.45)',
            }}
          >
            KABATONE
          </div>

          {/* Nav links */}
          <nav
            className="demo-hub-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 32,
              fontSize: '0.875rem',
              fontWeight: 500,
            }}
          >
            <span
              style={{
                color: '#4b8eff',
                fontWeight: 700,
                borderBottom: '2px solid #4b8eff',
                paddingBottom: 4,
              }}
            >
              Scenarios
            </span>
            <span style={{ color: '#64748b' }}>Operations</span>
            <span style={{ color: '#64748b' }}>Intelligence</span>
            <span style={{ color: '#64748b' }}>Archive</span>
          </nav>

          {/* Right icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span className="material-symbols-outlined" style={{ color: '#64748b', fontSize: 22 }}>
              notifications
            </span>
            <span className="material-symbols-outlined" style={{ color: '#64748b', fontSize: 22 }}>
              settings
            </span>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1px solid #414755',
                flexShrink: 0,
              }}
            >
              <Image
                src="/demo/hub/avatar.jpg"
                alt="Operator"
                width={36}
                height={36}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* ─── Main ─── */}
      <main
        className="demo-hub-main"
        style={{
          maxWidth: 1920,
          margin: '0 auto',
          padding: '64px 40px 48px',
        }}
      >
        {/* Hero */}
        <section style={{ marginBottom: 56 }}>
          <h1
            style={{
              fontSize: 'clamp(2.75rem, 6.5vw, 6rem)',
              fontWeight: 900,
              fontStyle: 'italic',
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            THE UNIFIED OPERATING SYSTEM{' '}
            <span
              style={{
                color: '#adc6ff',
                textShadow: '0 0 30px rgba(173,198,255,0.25)',
              }}
            >
              FOR PUBLIC SAFETY
            </span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              fontWeight: 300,
              color: '#c1c6d7',
              letterSpacing: '0.02em',
              maxWidth: 720,
              lineHeight: 1.6,
            }}
          >
            One platform. Every scenario.
          </p>
        </section>

        {/* Platform Modules */}
        <section className="scrollbar-hide" style={{ marginBottom: 40, overflowX: 'auto', paddingBottom: 8 }}>
          <p
            style={{
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: '#b0b8c9',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            Platform Modules — the building blocks powering every scenario
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 'max-content' }}>
            {MODULES.map((m) => (
              <div
                key={m.icon}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '10px 18px',
                  borderRadius: 9999,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  background: '#262a32',
                  border: '1px solid rgba(65,71,85,0.15)',
                  whiteSpace: 'nowrap',
                  cursor: 'default',
                  transition: 'background 0.2s',
                }}
              >
                <span className="material-symbols-outlined" style={{ color: '#adc6ff', fontSize: 20 }}>
                  {m.icon}
                </span>
                {m.label}
              </div>
            ))}
          </div>
        </section>

        {/* Incident Lifecycle */}
        <section style={{ marginBottom: 48 }}>
          <p
            style={{
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: '#b0b8c9',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Incident Lifecycle — every scenario follows these five stages
          </p>
          <div
            className="scrollbar-hide"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 0,
              overflowX: 'auto',
              maxWidth: '100%',
              paddingBottom: 4,
            }}
          >
            {LIFECYCLE.map((stage, i) => (
              <div key={stage} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                {/* Stage node */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '12px 20px',
                    borderRadius: 10,
                    border: i === 0
                      ? '1.5px solid #4b8eff'
                      : '1px solid #2a2f3a',
                    background: i === 0
                      ? 'rgba(75,142,255,0.1)'
                      : 'rgba(28,32,39,0.6)',
                  }}
                >
                  {/* Step number */}
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.6875rem',
                      fontWeight: 800,
                      background: i === 0 ? '#4b8eff' : '#2a2f3a',
                      color: i === 0 ? '#fff' : '#8a93a8',
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      color: i === 0 ? '#adc6ff' : '#c1c6d7',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {stage}
                  </span>
                </div>
                {/* Connector arrow */}
                {i < LIFECYCLE.length - 1 && (
                  <div style={{ display: 'flex', alignItems: 'center', padding: '0 6px' }}>
                    <div style={{ width: 24, height: 1.5, background: '#2a2f3a' }} />
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 16, color: '#3a4050', marginLeft: -4 }}
                    >
                      chevron_right
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Scenario CTA */}
        <p
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
            fontWeight: 600,
            color: '#adc6ff',
            marginBottom: 20,
            letterSpacing: '0.01em',
          }}
        >
          Pick a scenario and see it in action &darr;
        </p>

        {/* Scenario Cards */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 20,
          }}
          className="demo-card-grid"
        >
          {SCENARIOS.map((s) => {
            const cardStyle: React.CSSProperties = {
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              overflow: 'hidden',
              borderRadius: 16,
              border: '1px solid rgba(65,71,85,0.12)',
              background: '#1c2027',
              aspectRatio: '3 / 4',
              cursor: s.live ? 'pointer' : 'default',
              opacity: s.live ? 1 : 0.75,
              transition: 'border-color 0.4s, opacity 0.4s',
              textDecoration: 'none',
              color: 'inherit',
            }

            const cardInner = (
              <>
                {/* BG image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt=""
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 1,
                    transition: 'transform 0.7s cubic-bezier(.25,.46,.45,.94)',
                  }}
                  className="group-hover:scale-110"
                />

                {/* Gradient */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 1,
                    background:
                      'linear-gradient(to top, rgba(16,19,27,0.85) 0%, rgba(16,19,27,0.3) 35%, transparent 70%)',
                  }}
                />

                {/* Content */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.625rem',
                      fontWeight: 900,
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      color: '#adc6ff',
                    }}
                  >
                    Scenario {s.num}
                  </span>
                  <h3
                    style={{
                      fontSize: 'clamp(1.15rem, 1.4vw, 1.5rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.15,
                      marginTop: 2,
                      color: '#ffffff',
                      textShadow: '0 1px 4px rgba(0,0,0,0.6)',
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.8125rem',
                      color: '#e0e6f0',
                      textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                      lineHeight: 1.5,
                      marginTop: 2,
                    }}
                  >
                    {s.desc}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      marginTop: 12,
                      fontSize: '0.6875rem',
                      fontWeight: 900,
                      letterSpacing: '0.15em',
                      color: s.live ? '#adc6ff' : '#7a8ea0',
                    }}
                  >
                    {s.live ? 'START' : 'COMING SOON'}
                    {s.live && (
                      <span
                        className="material-symbols-outlined group-hover:translate-x-1"
                        style={{
                          fontSize: 16,
                          transition: 'transform 0.3s',
                          color: '#adc6ff',
                        }}
                      >
                        arrow_forward
                      </span>
                    )}
                  </div>
                </div>
              </>
            )

            return s.live ? (
              <Link key={s.num} href={s.href} className="group" style={cardStyle}>
                {cardInner}
              </Link>
            ) : (
              <div key={s.num} className="group" style={cardStyle}>
                {cardInner}
              </div>
            )
          })}
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer
        style={{
          background: '#0a0e16',
          borderTop: '1px solid rgba(49,53,61,0.12)',
          marginTop: 64,
          padding: '20px 40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: 1920,
            margin: '0 auto',
            fontSize: '0.625rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontWeight: 300,
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <span style={{ color: '#475569' }}>
            © 2025 KabatOne Command &amp; Control. All Systems Operational.
          </span>
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <Link
              href="/privacy-policy"
              style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s' }}
            >
              Privacy Protocol
            </Link>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#adc6ff' }}>
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#adc6ff',
                  animation: 'pulse 2s infinite',
                }}
              />
              System Status
            </span>
          </div>
        </div>
      </footer>

      {/* Responsive grid override */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 1200px) {
              .demo-card-grid { grid-template-columns: repeat(3, 1fr) !important; }
            }
            @media (max-width: 768px) {
              .demo-card-grid { grid-template-columns: repeat(2, 1fr) !important; }
              .demo-hub-nav { display: none !important; }
              .demo-hub-main { padding: 32px 20px 32px !important; }
            }
            @media (max-width: 480px) {
              .demo-card-grid { grid-template-columns: 1fr !important; }
            }
            .group:hover {
              border-color: rgba(75,142,255,0.35) !important;
            }
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.4; }
            }
          `,
        }}
      />
    </div>
  )
}
