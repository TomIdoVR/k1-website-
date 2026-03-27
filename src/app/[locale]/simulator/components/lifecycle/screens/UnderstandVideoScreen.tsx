'use client'

import { useSimulator } from '../../../SimulatorApp'
import { t } from '@/lib/simulator/i18n'

export default function UnderstandVideoScreen() {
  const { es } = useSimulator()

  return (
    <div style={{ height: '100%', display: 'flex', padding: 16, gap: 12 }}>
      {/* Video feed — dominant */}
      <div style={{
        flex: 3,
        background: '#060a10',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(6,182,212,0.2)',
        animation: 'sim-flicker 9s infinite',
      }}>
        {/* Real video — CCTV filtered */}
        <video
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
          autoPlay muted loop playsInline
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%', objectFit: 'cover',
            filter: 'grayscale(0.7) brightness(0.5) contrast(1.6) saturate(0.2)',
          }}
        />

        {/* Scanlines */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.2) 3px, rgba(0,0,0,0.2) 4px)',
          pointerEvents: 'none',
          animation: 'sim-scan 0.12s steps(1) infinite',
        }} />

        {/* Vignette */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 45%, rgba(0,0,0,0.8) 100%)',
          pointerEvents: 'none',
        }} />

        {/* AI bounding boxes */}
        {[
          { top: '26%', left: '28%', w: 54, h: 74, conf: '0.91', delay: '0s' },
          { top: '21%', left: '51%', w: 48, h: 66, conf: '0.87', delay: '0.5s' },
          { top: '33%', left: '68%', w: 43, h: 60, conf: '0.83', delay: '1s' },
        ].map((box, i) => (
          <div key={i} style={{
            position: 'absolute', top: box.top, left: box.left,
            width: box.w, height: box.h,
            border: '1.5px solid rgba(255,180,171,0.75)',
            boxShadow: '0 0 8px rgba(255,180,171,0.3)',
            animation: `sim-box-drift ${3.5 + i * 0.6}s ease-in-out infinite`,
            animationDelay: box.delay,
          }}>
            <span style={{
              position: 'absolute', top: -13, left: 0,
              fontSize: 7, fontWeight: 700, color: '#ffb4ab',
              background: 'rgba(0,0,0,0.8)', padding: '1px 4px', letterSpacing: 0.5,
            }}>
              #{i + 1} · {box.conf}
            </span>
          </div>
        ))}

        {/* Camera label + ALERT badge */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '6px 10px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)',
        }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: '#dde2f1', fontFamily: 'monospace', letterSpacing: 0.5 }}>
            CAM-017
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{
              width: 6, height: 6, borderRadius: 9999,
              background: '#ffb4ab', boxShadow: '0 0 8px #ffb4ab',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: 1.5, color: '#ffb4ab', textTransform: 'uppercase' as const }}>
              ALERT
            </span>
          </div>
        </div>
      </div>

      {/* Compact analysis */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}>
        {[
          { label: { en: 'Subjects', es: 'Sujetos' }, value: '3', color: '#ffb4ab' },
          { label: { en: 'Pattern', es: 'Patrón' }, value: t({ en: 'Escalation', es: 'Escalamiento' }, es), color: '#f97316' },
          { label: { en: 'Confidence', es: 'Confianza' }, value: '94.2%', color: '#4cd7f6' },
        ].map((item) => (
          <div key={item.label.en} style={{
            background: '#161c26', padding: '12px 14px',
            borderLeft: `3px solid ${item.color}`,
          }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 1.5, color: '#475569', textTransform: 'uppercase' as const, marginBottom: 4 }}>
              {t(item.label, es)}
            </div>
            <div style={{ fontSize: 18, fontWeight: 900, color: item.color }}>
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
