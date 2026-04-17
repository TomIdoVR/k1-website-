'use client'

import type { Stage } from '@/data/demo/types'

type DecisionTree = NonNullable<Stage['decisionTree']>

interface Props {
  tree: DecisionTree
}

export default function DecisionTreePanel({ tree }: Props) {
  return (
    <>
      <style>{`
        @keyframes dt-node-pulse { 0%,100%{ box-shadow: 0 0 0 1px rgba(59,158,255,0.35), 0 0 18px rgba(59,158,255,0.14);} 50%{ box-shadow: 0 0 0 1px rgba(59,158,255,0.55), 0 0 28px rgba(59,158,255,0.25);} }
        @keyframes dt-rec-glow { 0%,100%{ box-shadow: 0 0 0 1px rgba(16,185,129,0.45), 0 0 28px rgba(16,185,129,0.22);} 50%{ box-shadow: 0 0 0 1px rgba(16,185,129,0.7), 0 0 44px rgba(16,185,129,0.4);} }
        @keyframes dt-arrow { 0%,100%{opacity:0.35} 50%{opacity:0.9} }
        @media (max-width: 768px) {
          .dt-root { overflow: visible !important; }
          .dt-tree-section { padding: 12px 14px 4px !important; gap: 4px !important; }
          .dt-tree-node { min-width: 0 !important; width: 100% !important; max-width: none !important; padding: 8px 12px !important; gap: 10px !important; }
          .dt-tree-node-icon { width: 28px !important; height: 28px !important; }
          .dt-tree-node-label { font-size: 12px !important; }
          .dt-tree-node-detail { font-size: 10px !important; }
          .dt-options-scroll { overflow-y: visible !important; flex: none !important; padding: 10px 14px 16px !important; }
          .dt-option-card { padding: 10px 10px 10px !important; gap: 6px !important; }
          .dt-option-icon { width: 36px !important; height: 36px !important; }
          .dt-option-icon span { font-size: 20px !important; }
          .dt-option-title { font-size: 11px !important; margin-bottom: 2px !important; }
          .dt-option-desc { font-size: 10px !important; }
        }
      `}</style>

      <div className="dt-root" style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        overflow: 'hidden', background: '#060e18',
        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
      }}>
        {/* Header */}
        <div style={{
          flexShrink: 0, padding: '10px 16px 8px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#adc6ff' }}>psychology</span>
          <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#adc6ff' }}>
            What's happening
          </span>
          <span style={{ marginLeft: 'auto', fontSize: 9, fontFamily: 'monospace', color: 'rgba(173,198,255,0.45)', letterSpacing: '0.12em' }}>
            AI ASSIST
          </span>
        </div>

        {/* ── Section 1 — Tiny decision tree (2-3 nodes) ── */}
        <div className="dt-tree-section" style={{ flexShrink: 0, padding: '18px 18px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          {tree.tree.map((node, i) => (
            <span key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <TreeNode node={node} isLast={i === tree.tree.length - 1} />
              {i < tree.tree.length - 1 && <TreeArrow />}
            </span>
          ))}
        </div>

        {/* ── Section 2 — Visual option cards ── */}
        <div className="dt-options-scroll" style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '14px 16px 18px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10,
            fontSize: 9, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.7)',
          }}>
            <span style={{ width: 3, height: 11, borderRadius: 2, background: '#3B9EFF' }} />
            Choose an Action
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: tree.options.length === 4 ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 10,
          }}>
            {tree.options.map((opt) => <OptionCard key={opt.id} opt={opt} />)}
          </div>
        </div>
      </div>
    </>
  )
}

// ────────────────────────────────────────────────────────────────
// Tree node — big, simple, readable pill
// ────────────────────────────────────────────────────────────────

function TreeNode({ node, isLast }: { node: DecisionTree['tree'][number]; isLast: boolean }) {
  const accent = isLast ? '#FF8C5A' : '#3B9EFF'
  const bg = isLast
    ? 'linear-gradient(160deg, rgba(255,140,90,0.22) 0%, rgba(255,140,90,0.06) 100%)'
    : 'linear-gradient(160deg, rgba(59,158,255,0.18) 0%, rgba(59,158,255,0.04) 100%)'
  return (
    <div className="dt-tree-node" style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '10px 16px', borderRadius: 10,
      background: bg,
      border: `1px solid ${isLast ? 'rgba(255,140,90,0.55)' : 'rgba(59,158,255,0.45)'}`,
      minWidth: 240, maxWidth: 360,
      animation: !isLast ? 'dt-node-pulse 2.8s ease-in-out infinite' : undefined,
    }}>
      {node.icon && (
        <div className="dt-tree-node-icon" style={{
          width: 32, height: 32, borderRadius: 8,
          background: 'rgba(0,0,0,0.25)',
          border: `1px solid ${accent}55`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: accent }}>{node.icon}</span>
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="dt-tree-node-label" style={{
          fontSize: 13, fontWeight: 900, color: '#fff',
          letterSpacing: '0.02em', textTransform: 'uppercase', lineHeight: 1.2,
        }}>
          {node.label}
        </div>
        {node.detail && (
          <div className="dt-tree-node-detail" style={{
            fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.7)',
            marginTop: 2,
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
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" style={{ animation: 'dt-arrow 1.6s ease-in-out infinite' }}>
      <path d="M9 1 L9 12" stroke="rgba(173,198,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 10 L9 14 L13 10" stroke="rgba(173,198,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

// ────────────────────────────────────────────────────────────────
// Option card — visual, picks-based
// ────────────────────────────────────────────────────────────────

function OptionCard({ opt }: { opt: DecisionTree['options'][number] }) {
  const rec = !!opt.recommended
  return (
    <div className="dt-option-card" style={{
      position: 'relative',
      display: 'flex', flexDirection: 'column', gap: 8,
      padding: '14px 14px 13px',
      borderRadius: 10,
      background: rec
        ? 'linear-gradient(160deg, rgba(16,185,129,0.16) 0%, rgba(16,185,129,0.02) 100%)'
        : 'rgba(255,255,255,0.03)',
      border: `1px solid ${rec ? 'rgba(16,185,129,0.55)' : 'rgba(255,255,255,0.1)'}`,
      animation: rec ? 'dt-rec-glow 2.4s ease-in-out infinite' : undefined,
      overflow: 'hidden',
    }}>
      {rec && (
        <span style={{
          position: 'absolute', top: 8, right: 8,
          display: 'inline-flex', alignItems: 'center', gap: 4,
          padding: '2px 7px', borderRadius: 9999,
          background: 'rgba(16,185,129,0.28)', border: '1px solid rgba(16,185,129,0.6)',
          fontSize: 7, fontWeight: 900, letterSpacing: '0.18em', color: '#10B981',
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: 10 }}>auto_awesome</span>
          AI PICK
        </span>
      )}
      <div className="dt-option-icon" style={{
        width: 44, height: 44, borderRadius: 10,
        background: rec ? 'rgba(16,185,129,0.2)' : 'rgba(59,158,255,0.12)',
        border: `1px solid ${rec ? 'rgba(16,185,129,0.55)' : 'rgba(59,158,255,0.35)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span className="material-symbols-outlined" style={{ fontSize: 24, color: rec ? '#10B981' : '#3B9EFF' }}>
          {opt.icon}
        </span>
      </div>
      <div>
        <div className="dt-option-title" style={{
          fontSize: 13, fontWeight: 900, color: '#fff',
          letterSpacing: '0.02em', textTransform: 'uppercase',
          marginBottom: 4,
        }}>
          {opt.title}
        </div>
        <div className="dt-option-desc" style={{
          fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.4,
        }}>
          {opt.description}
        </div>
      </div>
    </div>
  )
}
