'use client';

import React from 'react';

const INPUT_Y  = [52, 137, 222, 307, 392] as const;
const OUTPUT_Y = [120, 222, 324] as const;
const OUT_COLOR: readonly string[] = ['#06d6a0', '#06b6d4', '#06b6d4'];
const OUT_BG:    readonly string[] = ['#0a2218', '#0a1e2a', '#0a1e2a'];

interface NodeDef {
  label: string;
  icon:  React.ReactNode;
  /** pill width in SVG units (default 110 for inputs, 112 for outputs) */
  pillW?: number;
}

interface HubDiagramProps {
  /** Short unique prefix for all SVG defs IDs — must be unique per page */
  uid:     string;
  product: string;
  tagline: string;
  inputs:  NodeDef[];  // exactly 5
  outputs: NodeDef[];  // exactly 3
}

export default function HubDiagram({ uid, product, tagline, inputs, outputs }: HubDiagramProps) {
  return (
    <div style={{ margin: '32px auto 8px', maxWidth: '860px' }}>
      <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg"
           style={{ display: 'block', width: '100%', height: 'auto', overflow: 'visible' }}>
        <defs>
          <filter id={`${uid}-gn`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation={3} result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id={`${uid}-gp`} x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation={6} result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id={`${uid}-gh`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation={14} result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <radialGradient id={`${uid}-hbg`} cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#1a3260"/>
            <stop offset="100%" stopColor="#0b1220"/>
          </radialGradient>
          <radialGradient id={`${uid}-aura`} cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#3b82f6" stopOpacity={0.18}/>
            <stop offset="60%"  stopColor="#3b82f6" stopOpacity={0.05}/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity={0}/>
          </radialGradient>
          {INPUT_Y.map((y, i) => (
            <path key={i} id={`${uid}-s${i + 1}`} d={`M165,${y} L400,225`}/>
          ))}
          {OUTPUT_Y.map((y, i) => (
            <path key={i} id={`${uid}-s${i + 6}`} d={`M400,225 L635,${y}`}/>
          ))}
        </defs>

        {/* Ambient aura */}
        <circle cx={400} cy={225} r={160} fill={`url(#${uid}-aura)`}/>

        {/* Input spokes */}
        <g stroke="#3b82f6" strokeWidth={1.5} strokeOpacity={0.28}>
          {INPUT_Y.map((y, i) => <line key={i} x1={165} y1={y} x2={400} y2={225}/>)}
        </g>

        {/* Output spokes */}
        <g stroke="#06b6d4" strokeWidth={1.5} strokeOpacity={0.28}>
          {OUTPUT_Y.map((y, i) => <line key={i} x1={400} y1={225} x2={635} y2={y}/>)}
        </g>

        {/* Input pulses — travel from source node → hub */}
        {INPUT_Y.map((_, i) => (
          <circle key={i} r={4} fill="#60a5fa" filter={`url(#${uid}-gp)`}>
            <animateMotion dur="2.5s" repeatCount="indefinite" begin={`${-i * 0.5}s`}>
              <mpath href={`#${uid}-s${i + 1}`}/>
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" dur="2.5s"
                     repeatCount="indefinite" begin={`${-i * 0.5}s`}/>
          </circle>
        ))}

        {/* Output pulses — travel from hub → output node */}
        {OUTPUT_Y.map((_, i) => (
          <circle key={i} r={i === 0 ? 5 : 4.5} fill={OUT_COLOR[i]} filter={`url(#${uid}-gp)`}>
            <animateMotion dur="2s" repeatCount="indefinite" begin={`${-(0.3 + i * 0.7)}s`}>
              <mpath href={`#${uid}-s${i + 6}`}/>
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" dur="2s"
                     repeatCount="indefinite" begin={`${-(0.3 + i * 0.7)}s`}/>
          </circle>
        ))}

        {/* Hub — pulsing outer ring + rotating dashed ring + label */}
        <circle cx={400} cy={225} r={75}
                fill={`url(#${uid}-hbg)`} stroke="#3b82f6" strokeWidth={1.5}
                filter={`url(#${uid}-gh)`}>
          <animate attributeName="strokeOpacity" values="0.5;0.85;0.5" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx={400} cy={225} r={60} fill="none"
                stroke="#3b82f6" strokeWidth={0.6} strokeDasharray="4,6">
          <animate attributeName="strokeOpacity" values="0.12;0.38;0.12" dur="3s" repeatCount="indefinite"/>
          <animateTransform attributeName="transform" type="rotate"
                            from="0 400 225" to="360 400 225"
                            dur="25s" repeatCount="indefinite"/>
        </circle>
        <text x={400} y={218} textAnchor="middle"
              fontFamily="Barlow Condensed,sans-serif" fontWeight={800}
              fontSize={20} fill="#e6eef8" letterSpacing={3}>
          {product}
        </text>
        <text x={400} y={238} textAnchor="middle"
              fontFamily="Space Grotesk,sans-serif" fontSize={7}
              fill="#60a5fa" letterSpacing={1.5}>
          {tagline}
        </text>

        {/* Input nodes (left side) */}
        {inputs.map((node, i) => {
          const y  = INPUT_Y[i];
          const pw = node.pillW ?? 110;
          const px = 125 - pw; // right-align pill so it ends 5px before circle edge
          return (
            <g key={i}>
              <circle cx={165} cy={y} r={35}
                      fill="#0d1e38" stroke="#3b82f6" strokeWidth={1.5}
                      strokeOpacity={0.6} filter={`url(#${uid}-gn)`}/>
              <g transform={`translate(165,${y})`}
                 stroke="#60a5fa" strokeWidth={1.6}
                 strokeLinecap="round" strokeLinejoin="round" fill="none">
                {node.icon}
              </g>
              <rect x={px} y={y - 11} width={pw} height={22} rx={11}
                    fill="#111e33" stroke="#3b82f6" strokeWidth={0.5} strokeOpacity={0.4}/>
              <text x={px + pw / 2} y={y + 4.5} textAnchor="middle"
                    fontFamily="Space Grotesk,sans-serif" fontSize={10}
                    fontWeight={500} fill="#9dbdd0">
                {node.label}
              </text>
            </g>
          );
        })}

        {/* Output nodes (right side) */}
        {outputs.map((node, i) => {
          const y   = OUTPUT_Y[i];
          const pw  = node.pillW ?? 112;
          return (
            <g key={i}>
              <circle cx={635} cy={y} r={35}
                      fill="#0d1e38" stroke={OUT_COLOR[i]} strokeWidth={1.5}
                      strokeOpacity={0.65} filter={`url(#${uid}-gn)`}/>
              <g transform={`translate(635,${y})`}
                 stroke={OUT_COLOR[i]} strokeWidth={1.6}
                 strokeLinecap="round" strokeLinejoin="round" fill="none">
                {node.icon}
              </g>
              <rect x={678} y={y - 11} width={pw} height={22} rx={11}
                    fill={OUT_BG[i]} stroke={OUT_COLOR[i]} strokeWidth={0.5} strokeOpacity={0.4}/>
              <text x={678 + pw / 2} y={y + 4.5} textAnchor="middle"
                    fontFamily="Space Grotesk,sans-serif" fontSize={10}
                    fontWeight={500} fill={OUT_COLOR[i]}>
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
