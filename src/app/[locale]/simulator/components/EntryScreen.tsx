'use client'

import { useSimulator } from '../SimulatorApp'
import { strings, t } from '@/lib/simulator/i18n'
import { scenarioList } from '@/lib/simulator/scenarios'
import ScenarioCard from './entry/ScenarioCard'

export default function EntryScreen() {
  const { state, dispatch, es } = useSimulator()

  const handleSelect = (id: string) => {
    dispatch({ type: 'SELECT_SCENARIO', scenarioId: id })
  }

  const handleRun = () => {
    if (state.selectedScenario) {
      dispatch({ type: 'START_LIFECYCLE' })
    }
  }

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 24px',
      maxWidth: 900,
      margin: '0 auto',
      width: '100%',
    }}>
      {/* Title */}
      <div style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 3,
        textTransform: 'uppercase' as const,
        color: '#4cd7f6',
        marginBottom: 16,
      }}>
        KabatOne
      </div>
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontWeight: 900,
        color: '#dde2f1',
        textAlign: 'center',
        letterSpacing: -1,
        marginBottom: 12,
        lineHeight: 1.1,
      }}>
        {t(strings.title, es)}
      </h1>
      <p style={{
        fontSize: 16,
        color: '#bcc9cd',
        textAlign: 'center',
        maxWidth: 500,
        lineHeight: 1.6,
        marginBottom: 48,
      }}>
        {t(strings.subtitle, es)}
      </p>

      {/* Scenario cards */}
      <div style={{
        fontSize: 13,
        fontWeight: 600,
        color: '#869397',
        letterSpacing: 1,
        textTransform: 'uppercase' as const,
        marginBottom: 20,
      }}>
        {t(strings.chooseScenario, es)}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 16,
        width: '100%',
        marginBottom: 40,
      }}>
        {scenarioList.map((s) => (
          <ScenarioCard
            key={s.id}
            id={s.id}
            icon={s.icon}
            name={s.name}
            description={s.description}
            duration={s.duration}
            available={s.available}
            selected={state.selectedScenario === s.id}
            es={es}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {/* Run button */}
      <button
        onClick={handleRun}
        disabled={!state.selectedScenario}
        style={{
          padding: '16px 56px',
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: 'uppercase' as const,
          background: state.selectedScenario ? '#06b6d4' : 'rgba(6, 182, 212, 0.3)',
          color: '#003640',
          border: 'none',
          borderRadius: 0,
          cursor: state.selectedScenario ? 'pointer' : 'not-allowed',
          transition: 'all 0.2s',
          boxShadow: state.selectedScenario ? '0 0 30px rgba(6, 182, 212, 0.4)' : 'none',
        }}
      >
        ▶ {t(strings.runScenario, es)}
      </button>

      <p style={{
        fontSize: 12,
        color: '#869397',
        marginTop: 16,
      }}>
        {t(strings.durationHint, es)}
      </p>
    </div>
  )
}
