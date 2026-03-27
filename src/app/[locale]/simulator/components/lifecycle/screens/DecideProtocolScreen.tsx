'use client'

import { useSimulator } from '../../../SimulatorApp'
import { t } from '@/lib/simulator/i18n'

export default function DecideProtocolScreen() {
  const { es } = useSimulator()

  return (
    <div style={{ height: '100%', display: 'flex', padding: 16, gap: 12 }}>
      {/* Left: SLA + Protocol */}
      <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* SLA Timer */}
        <div style={{
          background: '#161c26', padding: '20px',
          borderLeft: '4px solid #f97316',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexShrink: 0,
        }}>
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: '#475569', textTransform: 'uppercase' as const, marginBottom: 4 }}>
              {t({ en: 'SLA COUNTDOWN', es: 'CUENTA REGRESIVA SLA' }, es)}
            </div>
            <div style={{ fontSize: 42, fontWeight: 900, color: '#f97316', letterSpacing: -2, fontFamily: 'monospace' }}>
              04:32
            </div>
          </div>
          <span style={{
            padding: '4px 10px', fontSize: 9, fontWeight: 700, letterSpacing: 1,
            color: '#22c55e', background: '#22c55e10', border: '1px solid #22c55e20',
            textTransform: 'uppercase' as const,
          }}>
            ON TRACK
          </span>
        </div>

        {/* Protocol checklist */}
        <div style={{
          flex: 1, background: '#161c26', padding: '16px',
          borderLeft: '4px solid #f97316',
          display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: '#475569', textTransform: 'uppercase' as const, marginBottom: 12 }}>
            {t({ en: 'RESPONSE PROTOCOL', es: 'PROTOCOLO DE RESPUESTA' }, es)}
          </div>
          {[
            { text: { en: 'Confirm classification', es: 'Confirmar clasificación' }, done: true },
            { text: { en: 'Verify camera coverage', es: 'Verificar cobertura de cámaras' }, done: true },
            { text: { en: 'Dispatch primary unit', es: 'Despachar unidad primaria' }, done: false, current: true },
            { text: { en: 'Alert perimeter units', es: 'Alertar unidades perimetrales' }, done: false },
            { text: { en: 'Notify supervisor', es: 'Notificar supervisor' }, done: false },
          ].map((step, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px',
              borderLeft: step.current ? '3px solid #f97316' : '3px solid transparent',
              background: step.current ? 'rgba(249,115,22,0.06)' : 'transparent',
            }}>
              <div style={{
                width: 16, height: 16, borderRadius: 3,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: step.done ? '#22c55e' : 'transparent',
                border: step.done ? 'none' : step.current ? '2px solid #f97316' : '1px solid #334155',
                fontSize: 10, color: '#fff', fontWeight: 700, flexShrink: 0,
              }}>
                {step.done ? '✓' : ''}
              </div>
              <span style={{
                fontSize: 12, color: step.done ? '#64748b' : '#dde2f1',
                textDecoration: step.done ? 'line-through' : 'none',
              }}>
                {t(step.text, es)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: AI recs */}
      <div style={{
        flex: 1, background: '#161c26', padding: '16px',
        borderLeft: '4px solid #06b6d4',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: '#475569', textTransform: 'uppercase' as const, marginBottom: 12 }}>
          {t({ en: 'AI RECOMMENDATIONS', es: 'RECOMENDACIONES IA' }, es)}
        </div>
        {[
          { text: { en: '2 patrol units for containment', es: '2 patrullas para contención' }, p: 'HIGH' },
          { text: { en: 'Tactical unit on standby', es: 'Unidad táctica en espera' }, p: 'MED' },
          { text: { en: 'Activate extra cameras', es: 'Activar cámaras adicionales' }, p: 'LOW' },
        ].map((rec, i) => (
          <div key={i} style={{
            padding: '8px 10px', marginBottom: 6,
            background: '#0e131e', border: '1px solid #1e293b',
          }}>
            <span style={{
              fontSize: 8, fontWeight: 700, letterSpacing: 1,
              color: rec.p === 'HIGH' ? '#ffb4ab' : rec.p === 'MED' ? '#f97316' : '#475569',
            }}>
              {rec.p}
            </span>
            <div style={{ fontSize: 11, color: '#bcc9cd', marginTop: 2 }}>
              {t(rec.text, es)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
