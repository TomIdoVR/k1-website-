'use client'

import { useEffect, useState } from 'react'

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
  const isLast  = currentStageIndex === totalStages - 1

  // Pulse the NEXT button on the very first stage to hint at it
  const [pulsed, setPulsed] = useState(false)
  useEffect(() => {
    if (isFirst) {
      const t = setTimeout(() => setPulsed(true), 800)
      return () => clearTimeout(t)
    } else {
      setPulsed(false)
    }
  }, [isFirst])

  return (
    <>
    <style>{`
      @keyframes bn-pulse-ring {
        0%   { box-shadow: 0 4px 20px rgba(59,158,255,0.35), 0 0 0 0 rgba(59,158,255,0.55); }
        60%  { box-shadow: 0 4px 20px rgba(59,158,255,0.35), 0 0 0 10px rgba(59,158,255,0); }
        100% { box-shadow: 0 4px 20px rgba(59,158,255,0.35), 0 0 0 0 rgba(59,158,255,0); }
      }

      .demo-float-nav {
        position: fixed;
        bottom: 24px;
        right: 28px;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: var(--font-manrope), Manrope, sans-serif;
      }

      /* ── Step dots ── */
      .bn-dots {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 0 4px;
      }
      .bn-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: rgba(255,255,255,0.18);
        transition: all 0.22s;
        cursor: pointer;
      }
      .bn-dot.active {
        background: #3B9EFF;
        width: 18px;
        border-radius: 3px;
        box-shadow: 0 0 6px rgba(59,158,255,0.55);
      }
      .bn-dot.done {
        background: rgba(59,158,255,0.42);
      }

      /* ── Prev button ── */
      .demo-float-prev {
        display: flex;
        align-items: center;
        gap: 7px;
        padding: 9px 14px;
        border-radius: 10px;
        border: 1px solid rgba(255,255,255,0.13);
        background: rgba(8,16,26,0.72);
        backdrop-filter: blur(20px);
        color: rgba(255,255,255,0.55);
        cursor: pointer;
        transition: all 0.18s;
        font-family: var(--font-manrope), Manrope, sans-serif;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        white-space: nowrap;
      }
      .demo-float-prev:hover {
        border-color: rgba(255,255,255,0.26);
        color: rgba(255,255,255,0.85);
        background: rgba(12,22,36,0.88);
      }
      .demo-float-prev-arrow {
        width: 22px;
        height: 22px;
        border-radius: 5px;
        background: rgba(255,255,255,0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      /* ── Next button ── */
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
        transition: background 0.18s, box-shadow 0.18s, transform 0.18s;
        box-shadow: 0 4px 20px rgba(59,158,255,0.35);
        white-space: nowrap;
      }
      .demo-float-next.pulsing {
        animation: bn-pulse-ring 1.6s ease-out 2;
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

      @media (max-width: 600px) {
        .demo-float-nav { bottom: 16px; right: 16px; gap: 8px; }
        .demo-float-next-label { display: none; }
        .demo-float-prev-label { display: none; }
        .demo-float-next { padding: 10px 14px; }
        .demo-float-prev { padding: 9px 10px; }
        .bn-dots { display: none; }
      }
    `}</style>

    <div className="demo-float-nav">

      {/* ── Prev — labeled, same pill style as Next but dimmer ── */}
      {!isFirst && (
        <button
          className="demo-float-prev"
          onClick={onPrev}
          aria-label={`Previous: ${prevLabel}`}
        >
          <div className="demo-float-prev-arrow">
            <span className="material-symbols-outlined" style={{ fontSize: 13 }}>arrow_back</span>
          </div>
          <span className="demo-float-prev-label">{prevLabel}</span>
        </button>
      )}

      {/* ── Step dots ── */}
      <div className="bn-dots">
        {Array.from({ length: totalStages }).map((_, i) => (
          <div
            key={i}
            className={`bn-dot${i === currentStageIndex ? ' active' : i < currentStageIndex ? ' done' : ''}`}
            title={`Step ${i + 1} of ${totalStages}`}
          />
        ))}
      </div>

      {/* ── Next / Restart ── */}
      {isLast ? (
        <button className="demo-float-next demo-float-restart" onClick={onRestart}>
          <div className="demo-float-next-arrow">
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>replay</span>
          </div>
          <span className="demo-float-next-label">RESTART</span>
        </button>
      ) : (
        <button
          className={`demo-float-next${pulsed ? ' pulsing' : ''}`}
          onClick={onNext}
          onAnimationEnd={() => setPulsed(false)}
        >
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
