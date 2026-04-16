'use client'

/**
 * DetectFlowPanel — renders an n8n-style vertical flowchart describing
 * the system's detection logic for a given scenario. Intended to live on
 * the right half of the DETECT (stage 01) cinematic panel.
 *
 * Visual language:
 *  - dark canvas with a faint dot-grid
 *  - rounded rectangular nodes with an icon tile + title + subtitle
 *  - curved bezier connectors between nodes
 *  - a single "data packet" dot that traverses the chain once on mount
 *  - an optional dimmed "retrospective" branch off a rule-type node
 */

import { useEffect, useState } from 'react'
import type { DetectFlow, DetectFlowNode, DetectFlowNodeType } from '@/data/demo/types'

interface DetectFlowPanelProps {
  flow: DetectFlow
}

// Node-type styling — colour the icon tile + accent bar
const TYPE_STYLE: Record<DetectFlowNodeType, { tile: string; tileBorder: string; iconColor: string; accent: string }> = {
  sensor: { tile: 'rgba(59,158,255,0.14)',  tileBorder: 'rgba(59,158,255,0.45)',  iconColor: '#7ec1ff', accent: '#3B9EFF' },
  ai:     { tile: 'rgba(163,113,247,0.14)', tileBorder: 'rgba(163,113,247,0.45)', iconColor: '#c9adff', accent: '#A371F7' },
  rule:   { tile: 'rgba(0,201,138,0.14)',   tileBorder: 'rgba(0,201,138,0.45)',   iconColor: '#6ef0c0', accent: '#00C98A' },
  event:  { tile: 'rgba(255,69,96,0.16)',   tileBorder: 'rgba(255,69,96,0.5)',    iconColor: '#ff9aa8', accent: '#FF4560' },
  retro:  { tile: 'rgba(120,140,170,0.12)', tileBorder: 'rgba(120,140,170,0.3)',  iconColor: '#9fb2c7', accent: '#78A0B7' },
}

// Fixed node dimensions — the layout is absolute-positioned inside a viewBox
// so the whole flow scales cleanly with the container.
const NODE_W = 220
const NODE_H = 72
const V_GAP  = 46     // vertical gap between nodes
const H_GAP  = 38     // horizontal gap used for the branch offset

// Canvas dimensions are computed per-render from the number of nodes
function computeLayout(flow: DetectFlow) {
  const n = flow.nodes.length
  const hasBranch = !!flow.branch
  // x=0 lives at the left edge; centre the main column, put branch to the right
  const mainX = 24
  const branchX = mainX + NODE_W + H_GAP
  const positions: Record<string, { x: number; y: number }> = {}
  flow.nodes.forEach((node, i) => {
    positions[node.id] = { x: mainX, y: 20 + i * (NODE_H + V_GAP) }
  })
  if (hasBranch && flow.branch) {
    const src = positions[flow.branch.fromNodeId]
    if (src) positions[flow.branch.node.id] = { x: branchX, y: src.y }
  }
  const height = 20 + n * (NODE_H + V_GAP) + 40
  const width  = hasBranch ? branchX + NODE_W + 24 : mainX + NODE_W + 24
  return { positions, width, height, mainX, branchX }
}

export default function DetectFlowPanel({ flow }: DetectFlowPanelProps) {
  const { positions, width, height } = computeLayout(flow)
  const mainNodes = flow.nodes
  const branchNode = flow.branch?.node
  const branchFromId = flow.branch?.fromNodeId

  // Staggered reveal — each node fades in ~300 ms after the previous
  const [visible, setVisible] = useState(0)
  const [packetActive, setPacketActive] = useState(false)
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    mainNodes.forEach((_, i) => {
      timers.push(setTimeout(() => setVisible(v => Math.max(v, i + 1)), 400 + i * 300))
    })
    timers.push(setTimeout(() => setPacketActive(true), 400 + mainNodes.length * 300 + 200))
    return () => { timers.forEach(t => clearTimeout(t)) }
  }, [mainNodes.length])

  // Path helpers — all paths use a soft S-curve between two points
  const curve = (x1: number, y1: number, x2: number, y2: number) => {
    const midY = (y1 + y2) / 2
    return `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: '#0a1520',
        overflow: 'hidden',
      }}
    >
      {/* Dot-grid backdrop */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(173,198,255,0.09) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          backgroundPosition: '0 0',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 85%)',
          pointerEvents: 'none',
        }}
      />

      {/* Header label */}
      <div style={{ position: 'absolute', top: 14, left: 20, right: 20, display: 'flex', alignItems: 'center', gap: 8, zIndex: 5 }}>
        <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#adc6ff' }}>account_tree</span>
        <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#adc6ff' }}>
          Detection Logic
        </span>
        <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right, rgba(173,198,255,0.22), transparent)' }} />
      </div>

      {/* Scrollable flow canvas */}
      <div
        style={{
          position: 'absolute', inset: 0,
          paddingTop: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          overflowY: 'auto',
        }}
      >
        <div style={{ position: 'relative', width, height, minHeight: '100%' }}>
          {/* Connector layer */}
          <svg
            viewBox={`0 0 ${width} ${height}`}
            width={width}
            height={height}
            style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
          >
            <defs>
              <marker id="df-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#3B9EFF" />
              </marker>
              <marker id="df-arrow-retro" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#78A0B7" opacity="0.6" />
              </marker>
            </defs>

            {/* Main chain connectors */}
            {mainNodes.slice(0, -1).map((node, i) => {
              const next = mainNodes[i + 1]
              const a = positions[node.id]
              const b = positions[next.id]
              const x1 = a.x + NODE_W / 2
              const y1 = a.y + NODE_H
              const x2 = b.x + NODE_W / 2
              const y2 = b.y
              const active = visible > i + 1
              return (
                <g key={`edge-${node.id}-${next.id}`} style={{ opacity: active ? 1 : 0, transition: 'opacity 400ms ease' }}>
                  <path d={curve(x1, y1, x2, y2)} stroke="#3B9EFF" strokeOpacity="0.8" strokeWidth={2} fill="none" markerEnd="url(#df-arrow)" />
                </g>
              )
            })}

            {/* Branch connector (dashed, grey) */}
            {branchNode && branchFromId && positions[branchNode.id] && (() => {
              const a = positions[branchFromId]
              const b = positions[branchNode.id]
              const x1 = a.x + NODE_W
              const y1 = a.y + NODE_H / 2
              const x2 = b.x
              const y2 = b.y + NODE_H / 2
              const midX = (x1 + x2) / 2
              const d = `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`
              const active = visible >= mainNodes.findIndex(n => n.id === branchFromId) + 1
              return (
                <g style={{ opacity: active ? 1 : 0, transition: 'opacity 500ms ease' }}>
                  <path d={d} stroke="#78A0B7" strokeOpacity="0.55" strokeWidth={1.5} fill="none" strokeDasharray="4 4" markerEnd="url(#df-arrow-retro)" />
                  {/* "NO MATCH" label along the branch */}
                  <text
                    x={midX}
                    y={(y1 + y2) / 2 - 8}
                    textAnchor="middle"
                    fontFamily="monospace"
                    fontSize="8"
                    fontWeight={800}
                    fill="#9fb2c7"
                    letterSpacing="1.5"
                  >
                    NO MATCH
                  </text>
                </g>
              )
            })()}

            {/* Packet dot — travels node 1 → last main node */}
            {packetActive && mainNodes.length > 1 && (
              <circle r="4" fill="#7ec1ff" filter="drop-shadow(0 0 6px #3B9EFF)">
                <animateMotion
                  dur="1400ms"
                  begin="0s"
                  fill="freeze"
                  path={mainNodes.slice(0, -1).map((node, i) => {
                    const next = mainNodes[i + 1]
                    const a = positions[node.id]
                    const b = positions[next.id]
                    const x1 = a.x + NODE_W / 2
                    const y1 = a.y + NODE_H
                    const x2 = b.x + NODE_W / 2
                    const y2 = b.y
                    return `${i === 0 ? `M ${x1} ${y1}` : ''} C ${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}`
                  }).join(' ')}
                />
              </circle>
            )}
          </svg>

          {/* Nodes */}
          {mainNodes.map((node, i) => (
            <NodeCard
              key={node.id}
              node={node}
              x={positions[node.id].x}
              y={positions[node.id].y}
              visible={visible > i}
              last={i === mainNodes.length - 1}
            />
          ))}
          {branchNode && positions[branchNode.id] && (
            <NodeCard
              node={branchNode}
              x={positions[branchNode.id].x}
              y={positions[branchNode.id].y}
              visible={visible >= mainNodes.findIndex(n => n.id === (branchFromId ?? '')) + 1}
              dim
            />
          )}
        </div>
      </div>
    </div>
  )
}

function NodeCard({
  node, x, y, visible, last, dim,
}: { node: DetectFlowNode; x: number; y: number; visible: boolean; last?: boolean; dim?: boolean }) {
  const s = TYPE_STYLE[node.type]
  return (
    <div
      style={{
        position: 'absolute',
        left: x, top: y,
        width: NODE_W, height: NODE_H,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 12px',
        borderRadius: 10,
        background: dim ? 'rgba(255,255,255,0.025)' : 'rgba(255,255,255,0.04)',
        border: `1px solid ${dim ? 'rgba(173,198,255,0.12)' : 'rgba(173,198,255,0.22)'}`,
        boxShadow: last && visible ? `0 0 28px ${s.accent}40` : 'none',
        opacity: visible ? (dim ? 0.55 : 1) : 0,
        transform: visible ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity 450ms ease, transform 450ms ease, box-shadow 600ms ease',
      }}
    >
      {/* Icon tile */}
      <div
        style={{
          flexShrink: 0,
          width: 40, height: 40,
          borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: s.tile,
          border: `1px solid ${s.tileBorder}`,
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 22, color: s.iconColor }}>{node.icon}</span>
      </div>

      {/* Text block */}
      <div style={{ minWidth: 0, flex: 1 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#e7eefc',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {node.title}
        </div>
        <div
          style={{
            fontSize: 9,
            fontFamily: 'var(--font-space-mono), monospace',
            color: 'rgba(173,198,255,0.7)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            marginTop: 2,
          }}
        >
          {node.subtitle}
        </div>
      </div>

      {/* Right accent bar */}
      <div
        style={{
          width: 3, height: 36,
          borderRadius: 2,
          background: s.accent,
          opacity: dim ? 0.3 : 0.75,
          flexShrink: 0,
        }}
      />
    </div>
  )
}
