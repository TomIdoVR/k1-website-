'use client'

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
  onPrev,
  onNext,
  onRestart,
}: BottomNavProps) {
  const isFirst = currentStageIndex === 0
  const isLast = currentStageIndex === totalStages - 1

  return (
    <>
    <style>{`
      .demo-float-nav {
        position: fixed;
        bottom: 24px;
        right: 28px;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 8px;
        font-family: var(--font-manrope), Manrope, sans-serif;
      }
      .demo-float-prev {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        border: 1px solid rgba(255,255,255,0.1);
        background: rgba(8,16,26,0.72);
        backdrop-filter: blur(20px);
        color: rgba(255,255,255,0.4);
        cursor: pointer;
        transition: all 0.18s;
        font-size: 18px;
      }
      .demo-float-prev:hover {
        border-color: rgba(255,255,255,0.22);
        color: rgba(255,255,255,0.75);
      }
      .demo-float-prev:disabled {
        opacity: 0.22;
        cursor: default;
        pointer-events: none;
      }
      .demo-float-next {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        background: #3B9EFF;
        color: #fff;
        font-family: var(--font-manrope), Manrope, sans-serif;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.18s;
        box-shadow: 0 4px 20px rgba(59,158,255,0.35);
        white-space: nowrap;
      }
      .demo-float-next:hover {
        background: #2d8fe8;
        box-shadow: 0 6px 28px rgba(59,158,255,0.5);
        transform: translateY(-1px);
      }
      .demo-float-restart {
        background: rgba(0,201,138,0.15);
        border: 1px solid rgba(0,201,138,0.4);
        color: #00C98A;
        box-shadow: 0 4px 20px rgba(0,201,138,0.18);
      }
      .demo-float-restart:hover {
        background: rgba(0,201,138,0.25);
        box-shadow: 0 6px 28px rgba(0,201,138,0.3);
      }
      .demo-float-next-arrow {
        width: 26px;
        height: 26px;
        border-radius: 6px;
        background: rgba(255,255,255,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      @media (max-width: 480px) {
        .demo-float-nav { bottom: 16px; right: 16px; }
        .demo-float-next-label { display: none; }
        .demo-float-next { padding: 10px 14px; }
      }
    `}</style>

    <div className="demo-float-nav">
      {/* Prev — small ghost icon */}
      {!isFirst && (
        <button
          className="demo-float-prev"
          onClick={onPrev}
          title={`Previous: ${prevLabel}`}
          aria-label={`Previous: ${prevLabel}`}
        >
          ‹
        </button>
      )}

      {/* Next / Restart — primary action */}
      {isLast ? (
        <button className="demo-float-next demo-float-restart" onClick={onRestart}>
          <div className="demo-float-next-arrow">
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>replay</span>
          </div>
          <span className="demo-float-next-label">RESTART</span>
        </button>
      ) : (
        <button className="demo-float-next" onClick={onNext}>
          <span className="demo-float-next-label">NEXT: {nextLabel}</span>
          <div className="demo-float-next-arrow">
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
          </div>
        </button>
      )}
    </div>
    </>
  )
}
