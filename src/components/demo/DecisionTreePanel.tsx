'use client'

import type { Stage } from '@/data/demo/types'

type DecisionTree = NonNullable<Stage['decisionTree']>
type Ranked = DecisionTree['ranked'][number]

interface Props {
  tree: DecisionTree
}

const TYPE_META: Record<string, { icon: string; color: string }> = {
  police:   { icon: 'local_police', color: '#3B9EFF' },
  security: { icon: 'security',     color: '#A371F7' },
  k9:       { icon: 'pets',         color: '#F5A524' },
  ems:      { icon: 'ambulance',    color: '#FF4560' },
  fire:     { icon: 'fire_truck',   color: '#FF7A45' },
  default:  { icon: 'shield',       color: '#adc6ff' },
}

export default function DecisionTreePanel({ tree }: Props) {
  return (
    <>
      <style>{`
        @keyframes dt-flow-dash { to { stroke-dashoffset: -16; } }
        @keyframes dt-win-glow { 0%,100%{ box-shadow: 0 0 0 1px rgba(16,185,129,0.45), 0 0 24px rgba(16,185,129,0.22);} 50%{ box-shadow: 0 0 0 1px rgba(16,185,129,0.65), 0 0 36px rgba(16,185,129,0.4);} }
        @keyframes dt-star-spin { 0%{transform:rotate(0)} 100%{transform:rotate(360deg)} }
      `}</style>

      <div style={{
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
          <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#adc6ff' }}>hub</span>
          <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#adc6ff' }}>
            AI Decision Logic
          </span>
          <span style={{ marginLeft: 'auto', fontSize: 9, fontFamily: 'monospace', color: 'rgba(173,198,255,0.45)', letterSpacing: '0.12em' }}>
            WEIGHTED SCORING · v4
          </span>
        </div>

        {/* ── Section 1 — Filter flow (horizontal funnel) ── */}
        <div style={{ flexShrink: 0, padding: '16px 14px 12px' }}>
          <FilterFlow tree={tree} />
        </div>

        {/* ── Section 2 — Ranked candidates ── */}
        <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '6px 14px 10px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8,
            fontSize: 9, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.7)',
          }}>
            <span style={{ width: 3, height: 11, borderRadius: 2, background: '#3B9EFF' }} />
            Ranked Candidates
            <span style={{ fontSize: 8, fontWeight: 600, color: 'rgba(255,255,255,0.4)', marginLeft: 'auto', letterSpacing: '0.1em' }}>
              {tree.ranked.length} FINALISTS · TOP SCORE WINS
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {tree.ranked.map((c) => <CandidateCard key={c.id} c={c} />)}
          </div>
        </div>

        {/* ── Section 3 — Recommendation strip ── */}
        <div style={{
          flexShrink: 0,
          padding: '12px 16px',
          background: 'linear-gradient(90deg, rgba(16,185,129,0.14) 0%, rgba(59,130,246,0.1) 100%)',
          borderTop: '1px solid rgba(16,185,129,0.3)',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'rgba(16,185,129,0.25)', border: '1px solid rgba(16,185,129,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#10B981' }}>bolt</span>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: 9, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#10B981', marginBottom: 2,
            }}>
              Recommendation · Next Action
            </div>
            <div style={{ fontSize: 15, fontWeight: 900, color: '#fff', letterSpacing: '0.01em', fontStyle: 'italic' }}>
              → {tree.recommendation.action}
            </div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>
              {tree.recommendation.detail}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// ────────────────────────────────────────────────────────────────
// Horizontal funnel flow
// ────────────────────────────────────────────────────────────────

function FilterFlow({ tree }: { tree: DecisionTree }) {
  const winner = tree.ranked.find(r => r.winner)?.id ?? '—'
  return (
    <div style={{
      display: 'flex', alignItems: 'stretch', gap: 0,
      overflowX: 'auto',
    }}>
      {/* Start pill */}
      <FlowNode
        title={`${tree.candidates} AVAILABLE`}
        subtitle="Units on duty"
        icon="groups"
        tone="neutral"
      />
      <Connector label="evaluate" />
      {tree.filters.map((f, i) => (
        <span key={f.label} style={{ display: 'flex', alignItems: 'stretch' }}>
          <FilterNode filter={f} />
          {i < tree.filters.length - 1 && <Connector />}
        </span>
      ))}
      <Connector label="score" />
      {/* Winner node */}
      <FlowNode
        title={winner}
        subtitle="AI pick"
        icon="emoji_events"
        tone="winner"
      />
    </div>
  )
}

function FlowNode({ title, subtitle, icon, tone }: { title: string; subtitle: string; icon: string; tone: 'neutral' | 'winner' }) {
  const isWinner = tone === 'winner'
  return (
    <div style={{
      flexShrink: 0,
      minWidth: 88,
      padding: '8px 12px',
      borderRadius: 8,
      background: isWinner
        ? 'linear-gradient(160deg, rgba(16,185,129,0.28) 0%, rgba(16,185,129,0.1) 100%)'
        : 'rgba(59,158,255,0.1)',
      border: `1px solid ${isWinner ? 'rgba(16,185,129,0.65)' : 'rgba(59,158,255,0.35)'}`,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 3,
      ...(isWinner ? { animation: 'dt-win-glow 2.4s ease-in-out infinite' } : {}),
    }}>
      <span className="material-symbols-outlined" style={{
        fontSize: 16,
        color: isWinner ? '#10B981' : '#3B9EFF',
      }}>{icon}</span>
      <div style={{
        fontSize: 11, fontWeight: 900, letterSpacing: '0.06em',
        color: '#fff', fontFamily: 'var(--font-space-mono), monospace',
      }}>{title}</div>
      <div style={{
        fontSize: 8, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
        color: isWinner ? '#10B981' : 'rgba(173,198,255,0.7)',
      }}>{subtitle}</div>
    </div>
  )
}

function FilterNode({ filter }: { filter: DecisionTree['filters'][number] }) {
  return (
    <div style={{
      flexShrink: 0,
      minWidth: 108,
      padding: '8px 10px',
      borderRadius: 8,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      gap: 4,
    }}>
      <div style={{
        fontSize: 9, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
        color: '#adc6ff', textAlign: 'center',
      }}>{filter.label}</div>
      {filter.criterion && (
        <div style={{ fontSize: 8, fontWeight: 500, color: 'rgba(255,255,255,0.45)', textAlign: 'center' }}>
          {filter.criterion}
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 3,
          padding: '2px 6px', borderRadius: 4,
          background: 'rgba(16,185,129,0.18)', border: '1px solid rgba(16,185,129,0.4)',
        }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#10B981' }} />
          <span style={{ fontSize: 10, fontWeight: 900, color: '#10B981', fontFamily: 'var(--font-space-mono), monospace' }}>{filter.passed}</span>
          <span style={{ fontSize: 8, fontWeight: 700, color: 'rgba(16,185,129,0.7)', letterSpacing: '0.08em' }}>PASS</span>
        </div>
        {filter.rejected > 0 && (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 3,
            padding: '2px 6px', borderRadius: 4,
            background: 'rgba(255,69,96,0.12)', border: '1px solid rgba(255,69,96,0.3)',
          }}>
            <span style={{ fontSize: 10, fontWeight: 900, color: '#FF8C8C', fontFamily: 'var(--font-space-mono), monospace' }}>−{filter.rejected}</span>
          </div>
        )}
      </div>
    </div>
  )
}

function Connector({ label }: { label?: string }) {
  return (
    <div style={{
      flexShrink: 0, width: 36,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 2, color: 'rgba(173,198,255,0.5)',
    }}>
      <svg width="36" height="14" viewBox="0 0 36 14" fill="none">
        <line x1="2" y1="7" x2="30" y2="7" stroke="rgba(173,198,255,0.35)" strokeWidth="1.5" strokeDasharray="4 4" style={{ animation: 'dt-flow-dash 1.2s linear infinite' }} />
        <path d="M28 3 L34 7 L28 11" stroke="rgba(173,198,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      {label && (
        <span style={{
          fontSize: 7, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(173,198,255,0.5)',
        }}>{label}</span>
      )}
    </div>
  )
}

// ────────────────────────────────────────────────────────────────
// Ranked candidate card
// ────────────────────────────────────────────────────────────────

function CandidateCard({ c }: { c: Ranked }) {
  const meta = TYPE_META[c.type ?? 'default'] ?? TYPE_META.default
  const win = !!c.winner
  const scoreColor = win ? '#10B981' : c.score >= 70 ? '#3B9EFF' : '#95afc2'

  return (
    <div style={{
      position: 'relative',
      display: 'flex', alignItems: 'stretch',
      background: win
        ? 'linear-gradient(90deg, rgba(16,185,129,0.14) 0%, rgba(16,185,129,0.02) 100%)'
        : 'rgba(255,255,255,0.03)',
      border: `1px solid ${win ? 'rgba(16,185,129,0.5)' : 'rgba(255,255,255,0.08)'}`,
      borderRadius: 8,
      overflow: 'hidden',
      ...(win ? { boxShadow: '0 0 0 1px rgba(16,185,129,0.2), 0 4px 16px rgba(16,185,129,0.12)' } : {}),
    }}>
      {/* Winner rail */}
      {win && (
        <div style={{ width: 3, background: '#10B981', flexShrink: 0 }} />
      )}

      {/* Type icon */}
      <div style={{
        flexShrink: 0, width: 46, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.25)',
        borderRight: '1px solid rgba(255,255,255,0.05)',
      }}>
        <span className="material-symbols-outlined" style={{ fontSize: 22, color: meta.color }}>{meta.icon}</span>
      </div>

      {/* Body */}
      <div style={{ flex: 1, minWidth: 0, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            fontSize: 14, fontWeight: 900, fontStyle: 'italic', color: '#fff',
            fontFamily: 'var(--font-space-mono), monospace', letterSpacing: '-0.01em',
          }}>{c.id}</div>
          {win && (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '2px 7px', borderRadius: 10,
              background: 'rgba(16,185,129,0.25)', border: '1px solid rgba(16,185,129,0.55)',
              fontSize: 8, fontWeight: 900, letterSpacing: '0.16em', color: '#10B981',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 11 }}>emoji_events</span>
              AI PICK
            </span>
          )}
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
            {c.distance && (
              <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-space-mono), monospace' }}>
                {c.distance}
              </span>
            )}
            {c.eta && (
              <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-space-mono), monospace' }}>
                ETA {c.eta}
              </span>
            )}
          </div>
        </div>
        {/* Score bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            flex: 1, height: 6, borderRadius: 3,
            background: 'rgba(255,255,255,0.06)', overflow: 'hidden',
          }}>
            <div style={{
              width: `${c.score}%`, height: '100%', borderRadius: 3,
              background: win
                ? 'linear-gradient(90deg, #10B981 0%, #34D399 100%)'
                : `linear-gradient(90deg, ${scoreColor} 0%, ${scoreColor}88 100%)`,
            }} />
          </div>
          <div style={{
            fontSize: 14, fontWeight: 900, fontStyle: 'italic',
            fontFamily: 'var(--font-space-mono), monospace',
            color: scoreColor, minWidth: 28, textAlign: 'right',
          }}>{c.score}</div>
        </div>
        {c.reason && (
          <div style={{
            fontSize: 10, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.01em',
            lineHeight: 1.35,
          }}>{c.reason}</div>
        )}
      </div>
    </div>
  )
}
