'use client'

import { useSimulator } from '../SimulatorApp'
import { strings, t } from '@/lib/simulator/i18n'
import { MODULE_COLORS } from '@/lib/simulator/constants'

export default function SummaryScreen() {
  const { dispatch, scenario, es } = useSimulator()

  if (!scenario) return null
  const { summary } = scenario

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '60px 32px 40px',
      maxWidth: 1000,
      margin: '0 auto',
      width: '100%',
    }}>
      {/* Header */}
      <div style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 3,
        textTransform: 'uppercase' as const,
        color: '#22c55e',
        marginBottom: 12,
      }}>
        ✓ {t(strings.summaryTitle, es)}
      </div>
      <h2 style={{
        fontSize: 'clamp(28px, 4vw, 42px)',
        fontWeight: 900,
        color: '#dde2f1',
        textAlign: 'center',
        letterSpacing: -1,
        marginBottom: 8,
        lineHeight: 1.1,
      }}>
        {t(scenario.name, es)}
      </h2>
      <p style={{
        fontSize: 15,
        color: '#bcc9cd',
        textAlign: 'center',
        maxWidth: 500,
        lineHeight: 1.6,
        marginBottom: 40,
      }}>
        {t(strings.summarySubtitle, es)}
      </p>

      {/* KPI row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        width: '100%',
        marginBottom: 40,
      }}>
        <div style={{
          background: '#161c26',
          padding: '24px',
          borderLeft: '4px solid #06b6d4',
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: 'uppercase' as const,
            color: '#64748b',
            marginBottom: 8,
          }}>
            {t(strings.totalResponseTime, es)}
          </div>
          <div style={{
            fontSize: 40,
            fontWeight: 900,
            color: '#4cd7f6',
            letterSpacing: -2,
            fontFamily: 'monospace',
          }}>
            {summary.totalResponseTime}
          </div>
        </div>

        <div style={{
          background: '#161c26',
          padding: '24px',
          borderLeft: '4px solid #22c55e',
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: 'uppercase' as const,
            color: '#64748b',
            marginBottom: 8,
          }}>
            {t(strings.unitsDeployed, es)}
          </div>
          <div style={{
            fontSize: 40,
            fontWeight: 900,
            color: '#22c55e',
            letterSpacing: -2,
          }}>
            {summary.unitsDeployed}
          </div>
        </div>

        <div style={{
          background: '#161c26',
          padding: '24px',
          borderLeft: '4px solid #a855f7',
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: 'uppercase' as const,
            color: '#64748b',
            marginBottom: 8,
          }}>
            {t(strings.slaCompliance, es)}
          </div>
          <div style={{
            fontSize: 40,
            fontWeight: 900,
            color: '#a855f7',
            letterSpacing: -2,
          }}>
            {summary.slaCompliance}
          </div>
        </div>
      </div>

      {/* Module contributions */}
      <div style={{
        width: '100%',
        marginBottom: 32,
      }}>
        <div style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: 'uppercase' as const,
          color: '#64748b',
          marginBottom: 16,
          textAlign: 'center',
        }}>
          {t(strings.moduleContributions, es)}
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 10,
        }}>
          {summary.moduleContributions.map((mod) => (
            <div key={mod.moduleId} style={{
              background: '#0e131e',
              padding: '14px 16px',
              borderLeft: `3px solid ${MODULE_COLORS[mod.moduleId]}`,
            }}>
              <div style={{
                fontSize: 12,
                fontWeight: 700,
                color: MODULE_COLORS[mod.moduleId],
                marginBottom: 4,
              }}>
                {t(mod.label, es)}
              </div>
              <div style={{
                fontSize: 11,
                color: '#bcc9cd',
                lineHeight: 1.4,
              }}>
                {t(mod.description, es)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Recommendations */}
      <div style={{
        width: '100%',
        background: '#161c26',
        padding: '24px',
        borderLeft: '4px solid #06b6d4',
        marginBottom: 40,
      }}>
        <div style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: 'uppercase' as const,
          color: '#64748b',
          marginBottom: 12,
        }}>
          {t(strings.aiRecommendations, es)}
        </div>
        {summary.aiRecommendations.map((rec, i) => (
          <div key={i} style={{
            display: 'flex',
            gap: 10,
            padding: '8px 0',
            borderBottom: i < summary.aiRecommendations.length - 1 ? '1px solid #1e293b' : 'none',
          }}>
            <span style={{ color: '#4cd7f6', fontSize: 12, flexShrink: 0 }}>→</span>
            <span style={{ fontSize: 13, color: '#bcc9cd', lineHeight: 1.4 }}>
              {t(rec, es)}
            </span>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div style={{
        display: 'flex',
        gap: 16,
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <button
          onClick={() => dispatch({ type: 'GO_TO_ENTRY' })}
          style={{
            padding: '14px 32px',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1.5,
            textTransform: 'uppercase' as const,
            background: 'transparent',
            color: '#bcc9cd',
            border: '1px solid #3d494c',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          {t(strings.restartWalkthrough, es)}
        </button>
        <button
          onClick={() => {
            window.location.href = es ? '/es/#solutions' : '/en/#solutions'
          }}
          style={{
            padding: '14px 32px',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1.5,
            textTransform: 'uppercase' as const,
            background: 'transparent',
            color: '#bcc9cd',
            border: '1px solid #3d494c',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          {t(strings.exploreModules, es)}
        </button>
        <button
          onClick={() => {
            window.location.href = es ? '/es/#contact' : '/en/#contact'
          }}
          style={{
            padding: '14px 32px',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1.5,
            textTransform: 'uppercase' as const,
            background: '#06b6d4',
            color: '#003640',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(6,182,212,0.4)',
            transition: 'all 0.2s',
          }}
        >
          {t(strings.bookReview, es)}
        </button>
      </div>
    </div>
  )
}
