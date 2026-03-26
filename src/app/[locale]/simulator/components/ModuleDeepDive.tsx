'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSimulator } from '../SimulatorApp'
import { strings, t } from '@/lib/simulator/i18n'
import { MODULE_COLORS, MODULE_NAMES, MODULE_ROLES } from '@/lib/simulator/constants'
import type { ModuleKey, ModuleContribution } from '@/lib/simulator/types'

// Counterfactual descriptions — what happens without each module
const counterfactuals: Record<ModuleKey, { en: string; es: string }> = {
  ai: {
    en: 'Operator must manually monitor all camera feeds — average detection delay: 45 seconds. No auto-correlation of related events.',
    es: 'El operador debe monitorear todas las cámaras manualmente — demora promedio de detección: 45 segundos. Sin auto-correlación de eventos.',
  },
  video: {
    en: 'No AI object detection or auto-focus. Operator searches camera grid manually for incidents. Critical time lost during verification.',
    es: 'Sin detección de objetos IA ni auto-enfoque. El operador busca manualmente en la grilla de cámaras. Tiempo crítico perdido en verificación.',
  },
  gis: {
    en: 'No real-time situational map. Operator types address manually, cross-references units in a separate system. Location errors increase dispatch time.',
    es: 'Sin mapa situacional en tiempo real. El operador escribe la dirección manualmente, cruza datos de unidades en otro sistema. Errores de ubicación aumentan el tiempo.',
  },
  dispatch: {
    en: 'No intelligent unit ranking or one-click dispatch. Operator manually selects units, checks availability across multiple screens.',
    es: 'Sin ranking inteligente de unidades ni despacho con un clic. El operador selecciona unidades manualmente en múltiples pantallas.',
  },
  events: {
    en: 'No auto-created incident records. All fields typed manually, leading to data re-entry errors and missing audit trail.',
    es: 'Sin registros de incidentes auto-creados. Todos los campos escritos manualmente, causando errores de re-ingreso y falta de auditoría.',
  },
  citizen: {
    en: 'No citizen reporting channel. SOS reports and anonymous tips never reach the command center. Critical context lost.',
    es: 'Sin canal de reporte ciudadano. Reportes SOS y denuncias anónimas nunca llegan al centro de mando. Contexto crítico perdido.',
  },
  responder: {
    en: 'No mobile app with full incident context. Field units rely on fragmented radio briefings with incomplete information.',
    es: 'Sin app móvil con contexto completo. Las unidades dependen de briefings de radio fragmentados con información incompleta.',
  },
  bi: {
    en: 'No real-time KPI dashboard. Performance data must be exported manually from each system after the incident.',
    es: 'Sin dashboard de KPIs en tiempo real. Los datos de rendimiento deben exportarse manualmente de cada sistema después del incidente.',
  },
  integrations: {
    en: 'No shared data layer. Every module operates as an island. Data must be re-entered between systems, causing delays and errors.',
    es: 'Sin capa de datos compartida. Cada módulo opera como una isla. Los datos deben re-ingresarse entre sistemas, causando demoras y errores.',
  },
}

export default function ModuleDeepDive() {
  const { dispatch, scenario, es } = useSimulator()
  const [expanded, setExpanded] = useState<ModuleKey | null>(null)

  if (!scenario) return null

  const contributions = scenario.moduleContributions

  return (
    <div style={{
      flex: 1,
      padding: '48px 24px',
      maxWidth: 900,
      margin: '0 auto',
      width: '100%',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 32,
      }}>
        <div>
          <div style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 3,
            color: 'var(--cyan)',
            textTransform: 'uppercase' as const,
            marginBottom: 8,
          }}>
            {t(strings.moduleDeepDive, es)}
          </div>
          <h2 style={{
            fontSize: 24,
            fontWeight: 800,
            color: 'var(--white)',
          }}>
            9 {t({ en: 'Modules. One Platform.', es: 'Módulos. Una Plataforma.' }, es)}
          </h2>
        </div>
        <button
          onClick={() => dispatch({ type: 'GO_TO_SCORECARD' })}
          style={{
            padding: '8px 20px',
            background: 'rgba(255,255,255,0.04)',
            color: 'var(--muted)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            fontSize: 12,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          ← {t(strings.backToResults, es)}
        </button>
      </div>

      {/* 3x3 Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 12,
      }}>
        {contributions.map((c) => {
          const color = MODULE_COLORS[c.moduleId]
          const isExpanded = expanded === c.moduleId

          return (
            <motion.div
              key={c.moduleId}
              layout
              onClick={() => setExpanded(isExpanded ? null : c.moduleId)}
              style={{
                background: 'var(--card-bg)',
                border: `1px solid ${isExpanded ? color + '40' : 'var(--card-border)'}`,
                borderLeft: `3px solid ${color}`,
                borderRadius: 10,
                padding: 16,
                cursor: 'pointer',
                gridColumn: isExpanded ? 'span 3' : 'span 1',
              }}
            >
              {/* Card header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: color,
                }} />
                <span style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color,
                }}>
                  {t(MODULE_NAMES[c.moduleId], es)}
                </span>
              </div>

              <div style={{
                fontSize: 11,
                color: 'var(--dim)',
                marginBottom: 8,
              }}>
                {t(MODULE_ROLES[c.moduleId], es)}
              </div>

              {/* Time saved */}
              <div style={{
                fontSize: 18,
                fontWeight: 800,
                color: 'var(--white)',
                marginBottom: 4,
              }}>
                {t(c.timeSaved, es)}
              </div>
              <div style={{
                fontSize: 10,
                color: 'var(--dim)',
                letterSpacing: 0.5,
              }}>
                {t(strings.timeSaved, es)}
              </div>

              {/* Expanded detail */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{
                      marginTop: 16,
                      paddingTop: 16,
                      borderTop: '1px solid var(--border)',
                    }}>
                      <div style={{
                        fontSize: 12,
                        color: 'var(--muted)',
                        lineHeight: 1.6,
                        marginBottom: 12,
                      }}>
                        {t(c.description, es)}
                      </div>

                      <div style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: 'var(--dim)',
                        marginBottom: 6,
                      }}>
                        {t(strings.stepsInvolved, es)}: {c.stepsInvolved.join(', ')}
                      </div>

                      <div style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: '#ff5263',
                        marginBottom: 4,
                      }}>
                        {t(strings.withoutThisModule, es)}
                      </div>
                      <div style={{
                        fontSize: 12,
                        color: 'var(--muted)',
                        lineHeight: 1.5,
                        fontStyle: 'italic',
                      }}>
                        {t(counterfactuals[c.moduleId], es)}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 12,
        marginTop: 40,
      }}>
        <a
          href="/contact"
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
