import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Interactive Demo | KabatOne Platform',
  description:
    'Walk through real public safety scenarios and see how KabatOne\'s unified platform handles incidents end-to-end.',
  alternates: {
    canonical: 'https://kabatone.com/demo',
  },
}

const SCENARIOS = [
  {
    id: 'lpr',
    title: 'LPR / Stolen Vehicle',
    description:
      'A vehicle flagged on the regional hotlist triggers an automated response — from ALPR detection to field dispatch in under 10 minutes.',
    modules: ['VIDEO & ANALYTICS', 'GIS', 'AI ENGINE', '911 & DISPATCH'],
    duration: '5 stages · ~3 min',
    status: 'available' as const,
    href: '/demo/lpr',
    badge: '● LIVE DEMO',
    badgeColor: '#00C98A',
  },
  {
    id: 'violence',
    title: 'Violence Detection',
    description: 'AI-powered video analytics detect a fight in progress and trigger a coordinated response.',
    modules: ['VIDEO & ANALYTICS', 'AI ENGINE', '911 & DISPATCH'],
    duration: '5 stages · ~3 min',
    status: 'coming-soon' as const,
    href: '#',
    badge: 'COMING SOON',
    badgeColor: '#48647A',
  },
  {
    id: '911',
    title: '911 Medical Emergency',
    description: 'A 911 call initiates a multi-agency response with live call processing and unit dispatch.',
    modules: ['911 & DISPATCH', 'GIS', 'FIRST RESPONDER APPS'],
    duration: '5 stages · ~3 min',
    status: 'coming-soon' as const,
    href: '#',
    badge: 'COMING SOON',
    badgeColor: '#48647A',
  },
  {
    id: 'panic',
    title: 'School Panic Button',
    description: 'A panic button activation at a school triggers a lockdown protocol with real-time coordination.',
    modules: ['EVENT MANAGEMENT', '911 & DISPATCH', 'INTEGRATIONS'],
    duration: '5 stages · ~3 min',
    status: 'coming-soon' as const,
    href: '#',
    badge: 'COMING SOON',
    badgeColor: '#48647A',
  },
]

export default function DemoHubPage() {
  return (
    <div
      className="flex flex-col min-h-screen px-8 py-12"
      style={{ background: '#08101A', color: '#E0ECF8' }}
    >
      {/* Header */}
      <div className="mb-12 text-center">
        <div
          className="inline-block rounded-full px-4 py-1.5 text-xs font-mono font-semibold tracking-widest uppercase mb-4"
          style={{
            background: 'rgba(59,158,255,0.1)',
            border: '1px solid rgba(59,158,255,0.25)',
            color: '#3B9EFF',
          }}
        >
          SCENARIO EXPLORER
        </div>
        <h1
          className="uppercase leading-none mb-4"
          style={{
            fontFamily: 'var(--font-barlow-condensed), Barlow Condensed, sans-serif',
            fontSize: '64px',
            fontWeight: 700,
            fontStyle: 'italic',
          }}
        >
          INTERACTIVE PLATFORM DEMO
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#7A9DB8' }}>
          Walk through real public safety incidents and see how KabatOne&apos;s 9 integrated modules
          work together from detection to resolution.
        </p>
      </div>

      {/* Scenario cards */}
      <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
        {SCENARIOS.map((scenario) => {
          const isAvailable = scenario.status === 'available'
          return (
            <Link
              key={scenario.id}
              href={scenario.href}
              className={`block rounded-xl p-6 transition-all ${isAvailable ? 'hover:border-blue-500/50 hover:bg-blue-950/20' : 'cursor-default'}`}
              style={{
                background: '#0D1825',
                border: '1px solid rgba(255,255,255,0.07)',
                opacity: isAvailable ? 1 : 0.5,
              }}
              tabIndex={isAvailable ? 0 : -1}
              aria-disabled={!isAvailable}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-mono font-semibold tracking-wider rounded-full px-3 py-1"
                  style={{
                    color: scenario.badgeColor,
                    background: `${scenario.badgeColor}18`,
                    border: `1px solid ${scenario.badgeColor}4D`,
                  }}
                >
                  {scenario.badge}
                </span>
                <span className="text-xs font-mono" style={{ color: '#48647A' }}>
                  {scenario.duration}
                </span>
              </div>

              {/* Title */}
              <h2
                className="uppercase leading-none mb-3"
                style={{
                  fontFamily: 'var(--font-barlow-condensed), Barlow Condensed, sans-serif',
                  fontSize: '28px',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  color: '#E0ECF8',
                }}
              >
                {scenario.title}
              </h2>

              {/* Description */}
              <p className="text-sm mb-4 leading-relaxed" style={{ color: '#7A9DB8' }}>
                {scenario.description}
              </p>

              {/* Module tags */}
              <div className="flex flex-wrap gap-2">
                {scenario.modules.map((mod) => (
                  <span
                    key={mod}
                    className="rounded-full px-3 py-1 text-xs font-mono tracking-wider"
                    style={{
                      background: 'rgba(8,16,26,0.8)',
                      border: '1px solid rgba(59,158,255,0.15)',
                      color: '#48647A',
                    }}
                  >
                    {mod}
                  </span>
                ))}
              </div>

              {isAvailable && (
                <div className="mt-4 text-xs font-mono font-semibold tracking-wider" style={{ color: '#3B9EFF' }}>
                  START SCENARIO →
                </div>
              )}
            </Link>
          )
        })}
      </div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <Link
          href="/"
          className="text-xs font-mono tracking-wider transition-colors hover:text-blue-400"
          style={{ color: '#48647A' }}
        >
          ← Back to KabatOne.com
        </Link>
      </div>
    </div>
  )
}
