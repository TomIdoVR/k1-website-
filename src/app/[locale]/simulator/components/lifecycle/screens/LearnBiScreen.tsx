'use client'

import { useSimulator } from '../../../SimulatorApp'
import { t } from '@/lib/simulator/i18n'

export default function LearnBiScreen() {
  const { es } = useSimulator()

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: 16, gap: 12 }}>
      {/* KPI row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, flexShrink: 0 }}>
        {[
          { label: { en: 'Response', es: 'Respuesta' }, value: '00:52', color: '#06b6d4' },
          { label: { en: 'SLA', es: 'SLA' }, value: '98.2%', color: '#22c55e' },
          { label: { en: 'Units', es: 'Unidades' }, value: '3', color: '#a855f7' },
          { label: { en: 'Sources', es: 'Fuentes' }, value: '7', color: '#f97316' },
        ].map((kpi) => (
          <div key={kpi.label.en} style={{
            background: '#242a35', padding: '14px 16px',
            borderLeft: `3px solid ${kpi.color}`,
          }}>
            <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: 2, color: '#64748b', textTransform: 'uppercase' as const, marginBottom: 4 }}>
              {t(kpi.label, es)}
            </div>
            <div style={{ fontSize: 24, fontWeight: 900, color: '#dde2f1' }}>{kpi.value}</div>
          </div>
        ))}
      </div>

      {/* Performance bars + AI insights */}
      <div style={{ flex: 1, display: 'flex', gap: 12, overflow: 'hidden' }}>
        {/* Performance */}
        <div style={{
          flex: 2, background: '#161c26', padding: '16px',
          borderLeft: '4px solid #a855f7',
          display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: '#475569', textTransform: 'uppercase' as const, marginBottom: 14 }}>
            {t({ en: 'PERFORMANCE', es: 'RENDIMIENTO' }, es)}
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            {[
              { label: { en: 'Detection', es: 'Detección' }, value: 95, color: '#06b6d4' },
              { label: { en: 'Analysis', es: 'Análisis' }, value: 88, color: '#2563eb' },
              { label: { en: 'Decision', es: 'Decisión' }, value: 92, color: '#f97316' },
              { label: { en: 'Dispatch', es: 'Despacho' }, value: 97, color: '#ef4444' },
              { label: { en: 'Resolution', es: 'Resolución' }, value: 90, color: '#a855f7' },
            ].map((bar) => (
              <div key={bar.label.en}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 10, color: '#bcc9cd' }}>{t(bar.label, es)}</span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: bar.color }}>{bar.value}%</span>
                </div>
                <div style={{ height: 4, background: '#0e131e' }}>
                  <div style={{
                    width: `${bar.value}%`, height: '100%',
                    background: bar.color, boxShadow: `0 0 6px ${bar.color}30`,
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI insights */}
        <div style={{
          flex: 1, background: '#161c26', padding: '16px',
          borderLeft: '4px solid #06b6d4',
          display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: '#475569', textTransform: 'uppercase' as const, marginBottom: 12 }}>
            {t({ en: 'AI INSIGHTS', es: 'INSIGHTS IA' }, es)}
          </div>
          {[
            { en: 'Add cameras at north entrance', es: 'Agregar cámaras en entrada norte' },
            { en: 'Pre-position rapid response during events', es: 'Pre-posicionar respuesta rápida' },
            { en: 'Update crowd density thresholds', es: 'Actualizar umbrales de densidad' },
          ].map((ins, i) => (
            <div key={i} style={{
              padding: '8px 10px', marginBottom: 6,
              background: '#0e131e', border: '1px solid #1e293b',
              fontSize: 11, color: '#bcc9cd', lineHeight: 1.3,
            }}>
              <span style={{ color: '#4cd7f6', marginRight: 6 }}>→</span>
              {t(ins, es)}
            </div>
          ))}

          <div style={{ flex: 1 }} />

          <div style={{
            padding: '8px', background: '#22c55e10', border: '1px solid #22c55e20',
            fontSize: 10, color: '#22c55e', display: 'flex', alignItems: 'center', gap: 6,
          }}>
            ✓ {t({ en: 'Audit trail generated', es: 'Auditoría generada' }, es)}
          </div>
        </div>
      </div>
    </div>
  )
}
