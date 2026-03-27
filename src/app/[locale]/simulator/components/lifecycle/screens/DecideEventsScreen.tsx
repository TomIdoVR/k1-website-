'use client'

import { useSimulator } from '../../../SimulatorApp'
import { t } from '@/lib/simulator/i18n'

export default function DecideEventsScreen() {
  const { es } = useSimulator()

  const fields = [
    { label: { en: 'Event ID',   es: 'ID Evento' },   value: { en: 'EVT-2024-0847',         es: 'EVT-2024-0847' } },
    { label: { en: 'Type',       es: 'Tipo' },         value: { en: 'Crowd Disturbance',      es: 'Disturbio en Multitud' } },
    { label: { en: 'Priority',   es: 'Prioridad' },    value: { en: 'P1 — CRITICAL',          es: 'P1 — CRÍTICO' },  highlight: '#ffb4ab' },
    { label: { en: 'Location',   es: 'Ubicación' },    value: { en: 'Main Plaza North',       es: 'Plaza Principal Norte' } },
    { label: { en: 'Source',     es: 'Fuente' },       value: { en: 'AI + CAM-017',           es: 'IA + CAM-017' },  highlight: '#4cd7f6' },
    { label: { en: 'Subjects',   es: 'Sujetos' },      value: { en: '3 flagged',              es: '3 marcados' } },
    { label: { en: 'Threat',     es: 'Amenaza' },      value: { en: '0.91',                   es: '0.91' },          highlight: '#ffb4ab' },
  ]

  const protocol = [
    { text: { en: 'Confirm classification',   es: 'Confirmar clasificación' },          done: true },
    { text: { en: 'Verify camera coverage',   es: 'Verificar cobertura de cámaras' },   done: true },
    { text: { en: 'Dispatch primary unit',    es: 'Despachar unidad primaria' },         done: false, current: true },
    { text: { en: 'Alert perimeter units',    es: 'Alertar unidades perimetrales' },     done: false },
    { text: { en: 'Notify supervisor',        es: 'Notificar supervisor' },              done: false },
  ]

  return (
    <div style={{ height: '100%', display: 'flex', padding: 16, gap: 16 }}>

      {/* ── Left: Incident Form ── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 12,
        }}>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: '#475569', textTransform: 'uppercase' as const }}>
            {t({ en: 'Incident Report', es: 'Reporte de Incidente' }, es)}
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '3px 10px',
            background: 'rgba(255,180,171,0.08)', border: '1px solid rgba(255,180,171,0.25)',
          }}>
            <div style={{
              width: 5, height: 5, borderRadius: 9999,
              background: '#ffb4ab', boxShadow: '0 0 6px #ffb4ab',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 1.5, color: '#ffb4ab', textTransform: 'uppercase' as const }}>
              {t({ en: 'Critical', es: 'Crítico' }, es)}
            </span>
          </div>
        </div>

        {/* Form rows */}
        <div style={{
          background: '#161c26',
          border: '1px solid #1e293b',
          borderLeft: '3px solid #f97316',
          flex: 1,
          overflow: 'hidden',
        }}>
          {fields.map((f, i) => (
            <div key={f.label.en} style={{
              display: 'flex', alignItems: 'center',
              padding: '10px 14px',
              borderBottom: i < fields.length - 1 ? '1px solid #1e293b' : 'none',
              gap: 12,
            }}>
              <span style={{
                fontSize: 10, fontWeight: 700, color: '#475569',
                letterSpacing: 0.5, minWidth: 80, flexShrink: 0,
                textTransform: 'uppercase' as const,
              }}>
                {t(f.label, es)}
              </span>
              <div style={{ flex: 1, height: 1, background: '#1e293b' }} />
              <span style={{
                fontSize: 12, fontWeight: 600,
                color: f.highlight ?? '#dde2f1',
                textAlign: 'right',
              }}>
                {t(f.value, es)}
              </span>
            </div>
          ))}
        </div>

        {/* Auto-populated badge */}
        <div style={{
          marginTop: 8, padding: '7px 12px',
          background: 'rgba(6,182,212,0.04)', border: '1px solid rgba(6,182,212,0.12)',
          fontSize: 10, color: '#4cd7f6',
        }}>
          ✨ {t({ en: 'All fields auto-populated — zero manual entry', es: 'Todos los campos auto-llenados — cero ingreso manual' }, es)}
        </div>
      </div>

      {/* ── Right: Protocol + SLA ── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* SLA row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: '#161c26', padding: '12px 16px',
          borderLeft: '3px solid #f97316',
        }}>
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: '#475569', textTransform: 'uppercase' as const, marginBottom: 2 }}>
              {t({ en: 'SLA Countdown', es: 'SLA Restante' }, es)}
            </div>
            <div style={{ fontSize: 32, fontWeight: 900, color: '#f97316', letterSpacing: -1, fontFamily: 'monospace' }}>
              04:32
            </div>
          </div>
          <span style={{
            fontSize: 9, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' as const,
            color: '#22c55e', background: '#22c55e10', border: '1px solid #22c55e20',
            padding: '4px 10px',
          }}>
            {t({ en: 'On Track', es: 'En Tiempo' }, es)}
          </span>
        </div>

        {/* Protocol checklist */}
        <div style={{
          flex: 1,
          background: '#161c26', borderLeft: '3px solid #f97316',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
        }}>
          <div style={{
            padding: '10px 16px 8px',
            fontSize: 9, fontWeight: 700, letterSpacing: 2, color: '#475569',
            textTransform: 'uppercase' as const,
            borderBottom: '1px solid #1e293b',
          }}>
            {t({ en: 'Response Protocol', es: 'Protocolo de Respuesta' }, es)}
          </div>
          {protocol.map((step, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '11px 16px',
              borderBottom: i < protocol.length - 1 ? '1px solid #1e293b' : 'none',
              background: step.current ? 'rgba(249,115,22,0.05)' : 'transparent',
              borderLeft: step.current ? '2px solid #f97316' : '2px solid transparent',
            }}>
              {/* Checkbox */}
              <div style={{
                width: 16, height: 16, borderRadius: 3, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: step.done ? '#22c55e' : 'transparent',
                border: step.done ? 'none' : step.current ? '2px solid #f97316' : '1px solid #334155',
                fontSize: 10, color: '#fff', fontWeight: 900,
              }}>
                {step.done ? '✓' : ''}
              </div>
              {/* Step number */}
              <span style={{
                fontSize: 9, color: '#334155', fontWeight: 700, minWidth: 14,
              }}>
                {i + 1}
              </span>
              {/* Label */}
              <span style={{
                fontSize: 12,
                color: step.done ? '#475569' : step.current ? '#dde2f1' : '#64748b',
                textDecoration: step.done ? 'line-through' : 'none',
                flex: 1,
              }}>
                {t(step.text, es)}
              </span>
              {step.current && (
                <span style={{
                  fontSize: 8, fontWeight: 700, letterSpacing: 1,
                  color: '#f97316', textTransform: 'uppercase' as const,
                }}>
                  {t({ en: 'Now', es: 'Ahora' }, es)}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
