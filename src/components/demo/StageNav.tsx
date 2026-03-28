'use client'

import type { StageId } from '@/data/demo/types'

interface StageNavProps {
  currentStage: StageId
  onNavigate: (stage: StageId) => void
}

const STAGES: { id: StageId; label: string }[] = [
  { id: 'detect', label: 'DETECT' },
  { id: 'understand', label: 'UNDERSTAND' },
  { id: 'decide', label: 'DECIDE' },
  { id: 'act', label: 'ACT' },
  { id: 'learn', label: 'LEARN' },
]

export default function StageNav({ currentStage, onNavigate }: StageNavProps) {
  return (
    <div
      className="flex items-center justify-center gap-1 px-6 py-3"
      style={{ background: '#08101A', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      {STAGES.map((stage, i) => {
        const isActive = stage.id === currentStage
        return (
          <div key={stage.id} className="flex items-center">
            <button
              onClick={() => onNavigate(stage.id)}
              className="rounded-full px-4 py-1.5 text-xs font-mono font-semibold tracking-widest transition-colors"
              style={
                isActive
                  ? {
                      background: '#3B9EFF',
                      color: '#fff',
                      fontWeight: 600,
                    }
                  : {
                      background: '#0D1825',
                      border: '1px solid #1A3050',
                      color: '#48647A',
                    }
              }
            >
              {stage.label}
            </button>
            {i < STAGES.length - 1 && (
              <span className="mx-1.5 text-xs" style={{ color: '#1A3050' }}>
                ›
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}
