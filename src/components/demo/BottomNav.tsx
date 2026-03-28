'use client'

import type { StageId } from '@/data/demo/types'

interface BottomNavProps {
  currentStageIndex: number
  totalStages: number
  prevLabel: string
  nextLabel: string
  nextTeaser: string
  onPrev: () => void
  onNext: () => void
  onRestart: () => void
}

export default function BottomNav({
  currentStageIndex,
  totalStages,
  prevLabel,
  nextLabel,
  nextTeaser,
  onPrev,
  onNext,
  onRestart,
}: BottomNavProps) {
  const isFirst = currentStageIndex === 0
  const isLast = currentStageIndex === totalStages - 1

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-8"
      style={{
        height: '72px',
        background: '#08101A',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Previous */}
      <button
        onClick={onPrev}
        disabled={isFirst}
        className="flex items-center gap-2 text-xs font-mono font-semibold tracking-widest transition-opacity"
        style={{
          color: isFirst ? '#1A3050' : '#48647A',
          cursor: isFirst ? 'default' : 'pointer',
        }}
      >
        ‹ PREVIOUS: {prevLabel}
      </button>

      {/* Center teaser */}
      {!isLast ? (
        <div className="flex flex-col items-center gap-0.5 text-center">
          <span className="text-xs font-mono tracking-widest" style={{ color: '#48647A' }}>
            NEXT STAGE ›
          </span>
          <span className="text-sm font-semibold tracking-wider" style={{ color: '#E0ECF8' }}>
            {nextLabel}
          </span>
          <span className="text-xs" style={{ color: '#48647A' }}>
            {nextTeaser}
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-2" style={{ color: '#00C98A' }}>
          <span className="h-2 w-2 rounded-full" style={{ background: '#00C98A' }} />
          <span className="text-xs font-mono font-semibold tracking-widest">
            LEARNING CYCLE COMPLETE
          </span>
        </div>
      )}

      {/* Next / Restart */}
      {isLast ? (
        <button
          onClick={onRestart}
          className="flex items-center gap-2 rounded px-4 py-2 text-xs font-mono font-semibold tracking-widest transition-colors"
          style={{
            background: 'rgba(59,158,255,0.12)',
            border: '1px solid rgba(59,158,255,0.35)',
            color: '#3B9EFF',
          }}
        >
          RESTART SCENARIO ↺
        </button>
      ) : (
        <button
          onClick={onNext}
          className="flex items-center gap-2 rounded px-4 py-2 text-xs font-mono font-semibold tracking-widest transition-colors hover:bg-blue-600"
          style={{
            background: '#3B9EFF',
            color: '#fff',
          }}
        >
          NEXT: {nextLabel} ›
        </button>
      )}
    </div>
  )
}
