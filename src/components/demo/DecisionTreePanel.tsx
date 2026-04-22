'use client'

import { useEffect, useRef, useState } from 'react'
import type { Stage } from '@/data/demo/types'

type DecisionTree = NonNullable<Stage['decisionTree']>

interface Props {
  tree: DecisionTree
}

// Fixed canvas dimensions — content is designed for this, then scaled to fit container
const CANVAS_W = 460
const CANVAS_H = 620

export default function DecisionTreePanel({ tree }: Props) {
  const fitRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = fitRef.current
    if (!el) return
    const measure = () => {
      const availW = el.clientWidth - 8
      const availH = el.clientHeight - 8
      if (availW <= 0 || availH <= 0) return
      const s = Math.min(availW / CANVAS_W, availH / CANVAS_H, 1.2)
      setScale(s > 0.3 ? s : 0.3)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @keyframes dt-node-pulse { 0%,100%{ box-shadow: 0 0 0 1px rgba(59,158,255,0.35), 0 0 18px rgba(59,158,255,0.14);} 50%{ box-shadow: 0 0 0 1px rgba(59,158,255,0.55), 0 0 28px rgba(59,158,255,0.25);} }
        @keyframes dt-rec-glow { 0%,100%{ box-shadow: 0 0 0 1px rgba(16,185,129,0.45), 0 0 28px rgba(16,185,129,0.22);} 50%{ box-shadow: 0 0 0 1px rgba(16,185,129,0.7), 0 0 44px rgba(16,185,129,0.4);} }
        @keyframes dt-arrow { 0%,100%{opacity:0.35} 50%{opacity:0.9} }
      `}</style>

      <div
        ref={fitRef}
        style={{
          flex: 1, minHeight: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: '#060e18',
          overflow: 'hidden',
          fontFamily: 'var(--font-manrope), Manrope, sans-serif',
          padding: 4,
        }}
      >
        {/* Fixed-canvas content — scaled to fit container */}
        <div
          style={{
            width: CANVAS_W,
            height: CANVAS_H,
            flexShrink: 0,
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            display: 'flex', flexDirection: 'column',
          }}
        >
          {/* Header */}
          <div style={{
            flexShrink: 0, padding: '10px 16px 8px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#adc6ff' }}>psychology</span>
            <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#adc6ff' }}>
              Situation Assessment
            </span>
            <span style={{ marginLeft: 'auto', fontSize: 9, fontFamily: 'monospace', color: 'rgba(173,198,255,0.45)', letterSpacing: '0.12em' }}>
              AI ANALYSIS
            </span>
          </div>

          {/* Tree section */}
          <div style={{
            flexShrink: 0, padding: '14px 16px 8px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          }}>
            {tree.tree.map((node, i) => (
              <span key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, width: '100%' }}>
                <TreeNode node={node} isLast={i === tree.tree.length - 1} />
                {i < tree.tree.length - 1 && <TreeArrow />}
              </span>
            ))}
          </div>

          {/* Options section — fills remaining height */}
          <div style={{
            flex: 1, minHeight: 0,
            padding: '10px 16px 14px',
            display: 'flex', flexDirection: 'column',
            overflow: 'hidden',
          }}>
            <div style={{
              flexShrink: 0,
              display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8,
              fontSize: 9, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.7)',
            }}>
              <span style={{ width: 3, height: 11, borderRadius: 2, background: '#10B981' }} />
              AI Recommended Action
            </div>
            <div style={{
              flex: 1, minHeight: 0,
              display: 'grid',
              gridTemplateColumns: tree.options.length === 4 ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(150px, 1fr))',
              gridTemplateRows: tree.options.length === 4 ? 'repeat(2, 1fr)' : 'auto',
              gap: 8,
            }}>
              {tree.options.map((opt) => <OptionCard key={opt.id} opt={opt} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// ────────────────────────────────────────────────────────────────
// Tree node — compact pill
// ────────────────────────────────────────────────────────────────

function TreeNode({ node, isLast }: { node: DecisionTree['tree'][number]; isLast: boolean }) {
  const accent = isLast ? '#FF8C5A' : '#3B9EFF'
  const bg = isLast
    ? 'linear-gradient(160deg, rgba(255,140,90,0.22) 0%, rgba(255,140,90,0.06) 100%)'
    : 'linear-gradient(160deg, rgba(59,158,255,0.18) 0%, rgba(59,158,255,0.04) 100%)'
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '8px 12px', borderRadius: 9,
      background: bg,
      border: `1px solid ${isLast ? 'rgba(255,140,90,0.55)' : 'rgba(59,158,255,0.45)'}`,
      width: '100%',
      animation: !isLast ? 'dt-node-pulse 2.8s ease-in-out infinite' : undefined,
    }}>
      {node.icon && (
        <div style={{
          width: 28, height: 28, borderRadius: 7,
          background: 'rgba(0,0,0,0.25)',
          border: `1px solid ${accent}55`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: 16, color: accent }}>{node.icon}</span>
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 12, fontWeight: 900, color: '#fff',
          letterSpacing: '0.015em', textTransform: 'uppercase', lineHeight: 1.15,
        }}>
          {node.label}
        </div>
        {node.detail && (
          <div style={{
            fontSize: 10, fontWeight: 500, color: 'rgba(255,255,255,0.7)',
            marginTop: 1, lineHeight: 1.3,
          }}>
            {node.detail}
          </div>
        )}
      </div>
    </div>
  )
}

function TreeArrow() {
  return (
    <svg width="14" height="12" viewBox="0 0 18 16" fill="none" style={{ animation: 'dt-arrow 1.6s ease-in-out infinite' }}>
      <path d="M9 1 L9 12" stroke="rgba(173,198,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 10 L9 14 L13 10" stroke="rgba(173,198,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

// ────────────────────────────────────────────────────────────────
// Option card — compact, fills its grid cell
// ────────────────────────────────────────────────────────────────

function OptionCard({ opt }: { opt: DecisionTree['options'][number] }) {
  const rec = !!opt.recommended
  return (
    <div style={{
      position: 'relative',
      display: 'flex', flexDirection: 'column', gap: 6,
      padding: '10px 10px 9px',
      borderRadius: 9,
      background: rec
        ? 'linear-gradient(160deg, rgba(16,185,129,0.16) 0%, rgba(16,185,129,0.02) 100%)'
        : 'rgba(255,255,255,0.03)',
      border: `1px solid ${rec ? 'rgba(16,185,129,0.55)' : 'rgba(255,255,255,0.1)'}`,
      animation: rec ? 'dt-rec-glow 2.4s ease-in-out infinite' : undefined,
      overflow: 'hidden',
      minHeight: 0,
      minWidth: 0,
    }}>
      {rec && (
        <span style={{
          position: 'absolute', top: 6, right: 6,
          display: 'inline-flex', alignItems: 'center', gap: 3,
          padding: '2px 6px', borderRadius: 9999,
          background: 'rgba(16,185,129,0.28)', border: '1px solid rgba(16,185,129,0.6)',
          fontSize: 7, fontWeight: 900, letterSpacing: '0.14em', color: '#10B981',
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: 9 }}>auto_awesome</span>
          Recommended
        </span>
      )}
      <div style={{
        width: 36, height: 36, borderRadius: 8,
        background: rec ? 'rgba(16,185,129,0.2)' : 'rgba(59,158,255,0.12)',
        border: `1px solid ${rec ? 'rgba(16,185,129,0.55)' : 'rgba(59,158,255,0.35)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <span className="material-symbols-outlined" style={{ fontSize: 20, color: rec ? '#10B981' : '#3B9EFF' }}>
          {opt.icon}
        </span>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>
        <div style={{
          fontSize: 11, fontWeight: 900, color: '#fff',
          letterSpacing: '0.015em', textTransform: 'uppercase',
          marginBottom: 3, lineHeight: 1.15,
        }}>
          {opt.title}
        </div>
        <div style={{
          fontSize: 10, fontWeight: 500, color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.3,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {opt.description}
        </div>
      </div>
    </div>
  )
}
