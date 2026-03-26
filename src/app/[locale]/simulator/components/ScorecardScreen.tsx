'use client'

import { useSimulator } from '../SimulatorApp'
import { strings, t } from '@/lib/simulator/i18n'
import TimeComparison from './scorecard/TimeComparison'
import TimeLostChart from './scorecard/TimeLostChart'
import ModuleContributions from './scorecard/ModuleContributions'
import SummaryTable from './scorecard/SummaryTable'

export default function ScorecardScreen() {
  const { dispatch, scenario, es } = useSimulator()
  if (!scenario) return null

  return (
    <div style={{
      flex: 1,
      padding: '48px 24px',
      maxWidth: 800,
      margin: '0 auto',
      width: '100%',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 3,
          color: 'var(--cyan)',
          textTransform: 'uppercase' as const,
          marginBottom: 12,
        }}>
          {t(strings.theEvidence, es)}
        </div>
        <h2 style={{
          fontSize: 28,
          fontWeight: 800,
          color: 'var(--white)',
          marginBottom: 8,
        }}>
          {t(scenario.name, es)}
        </h2>
      </div>

      {/* Time comparison */}
      <TimeComparison scenario={scenario} es={es} />

      {/* Where time was lost */}
      <TimeLostChart breakdown={scenario.timeLostBreakdown} es={es} />

      {/* Module contributions */}
      <ModuleContributions contributions={scenario.moduleContributions} es={es} />

      {/* Summary table */}
      <SummaryTable es={es} />

      {/* Closing statement */}
      <div style={{
        textAlign: 'center',
        padding: '32px 0',
        marginBottom: 32,
      }}>
        <p style={{
          fontSize: 18,
          fontWeight: 600,
          color: 'var(--white)',
          fontStyle: 'italic',
          lineHeight: 1.6,
        }}>
          &ldquo;{t(strings.sameIncident, es)}&rdquo;
        </p>
      </div>

      {/* CTAs */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        justifyContent: 'center',
      }}>
        <button
          onClick={() => dispatch({ type: 'GO_TO_DEEP_DIVE' })}
          style={{
            padding: '12px 28px',
            background: 'var(--blue)',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 700,
            cursor: 'pointer',
            letterSpacing: 0.5,
          }}
        >
          {t(strings.exploreModules, es)}
        </button>
        <a
          href="/contact"
          style={{
            padding: '12px 28px',
            background: 'rgba(6, 182, 212, 0.12)',
            color: 'var(--cyan)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 700,
            cursor: 'pointer',
            letterSpacing: 0.5,
            textDecoration: 'none',
          }}
        >
          {t(strings.bookReview, es)}
        </a>
        <button
          onClick={() => dispatch({ type: 'GO_TO_ENTRY' })}
          style={{
            padding: '12px 28px',
            background: 'rgba(255,255,255,0.04)',
            color: 'var(--muted)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          {t(strings.tryAnother, es)}
        </button>
      </div>
    </div>
  )
}
