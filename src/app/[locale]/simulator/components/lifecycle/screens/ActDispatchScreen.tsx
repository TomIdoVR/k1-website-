'use client'

import { useSimulator } from '../../../SimulatorApp'
import { t } from '@/lib/simulator/i18n'
import MapView from '../shared/MapView'

export default function ActDispatchScreen() {
  const { es } = useSimulator()

  return (
    <div style={{ height: '100%', display: 'flex', padding: 16, gap: 12 }}>
      {/* Map — dominant */}
      <div style={{ flex: 2 }}>
        <MapView style={{ height: '100%' }} />
      </div>

      {/* Unit cards */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: '#475569', textTransform: 'uppercase' as const }}>
          {t({ en: 'AI-RANKED UNITS', es: 'UNIDADES POR IA' }, es)}
        </div>
        {[
          { id: 'P-104', type: { en: 'Patrol', es: 'Patrulla' }, eta: '2:30', dist: '0.8km', status: 'DISPATCHED', color: '#ef4444' },
          { id: 'P-108', type: { en: 'Patrol', es: 'Patrulla' }, eta: '3:45', dist: '1.2km', status: 'AVAILABLE', color: '#22c55e' },
          { id: 'P-112', type: { en: 'Tactical', es: 'Táctico' }, eta: '5:10', dist: '2.1km', status: 'AVAILABLE', color: '#22c55e' },
        ].map((u, i) => (
          <div key={u.id} style={{
            background: '#1a202a', border: '1px solid #2f3540',
            padding: '12px 14px', position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: -1, left: -1,
              width: 20, height: 20, background: '#ef4444',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, fontWeight: 900, color: '#fff',
            }}>
              {i + 1}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 16 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#dde2f1' }}>{u.id}</div>
                <div style={{ fontSize: 10, color: '#64748b' }}>{t(u.type, es)} · {u.dist}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#dde2f1' }}>ETA {u.eta}</div>
                <span style={{
                  fontSize: 8, fontWeight: 700, letterSpacing: 1,
                  color: u.color, textTransform: 'uppercase' as const,
                }}>
                  {u.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
