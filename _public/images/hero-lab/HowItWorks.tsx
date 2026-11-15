'use client'

/* How It Works — lifecycle of one incident.
   Ported from the Claude Design project "Kabat One Website"
   (home/howitworks.jsx + home/howitworks.css), focusing only on this
   section. Five stages, each with its own public-safety scene, a rail that
   fills as you scroll, and progressive left→right activation.

   One deliberate deviation from the source: the section title renders in
   Space Grotesk sentence case rather than Barlow Condensed uppercase, to
   match the already-approved hero on this page. Say the word and I'll
   switch it back to the design's .h-display treatment. */

import { useEffect, useRef, useState } from 'react'

/* Single refined line style, per the source:
   st = structure, ac = live/AI accent, nv = navy fills at low opacity. */
const S = { st: '#1858f5', ac: '#22b8d4', nv: '#14233a' }

const Scene: Record<string, React.ReactNode> = {
  detect: (
    <svg viewBox="0 0 220 240" fill="none" aria-hidden="true">
      {/* converging signal paths */}
      {[[40, 40], [110, 26], [180, 40], [30, 104], [190, 104]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y + 16} C ${x} ${y + 80}, 110 ${y + 92}, 110 174`} stroke={S.st} strokeOpacity="0.22" strokeWidth="1.1" strokeDasharray="3 5" />
      ))}
      {/* CCTV camera */}
      <g transform="translate(40 40)">
        <rect x="-15" y="-14" width="30" height="28" rx="9" fill="#fff" stroke={S.st} strokeOpacity="0.32" />
        <path d="M-8 -3 h10 l4 4 -4 4 h-10 z" fill={S.st} fillOpacity="0.5" />
        <path d="M-8 5 v5" stroke={S.st} strokeOpacity="0.5" strokeWidth="1.4" />
      </g>
      {/* 911 call */}
      <g transform="translate(110 26)">
        <rect x="-15" y="-14" width="30" height="28" rx="9" fill="#fff" stroke={S.st} strokeOpacity="0.32" />
        <path d="M-6 -5 a11 11 0 0 0 11 11 l2 -3 4 2 -1 4 a15 15 0 0 1 -16 -16 l4 -1 2 4 z" fill={S.st} fillOpacity="0.5" />
      </g>
      {/* LPR plate */}
      <g transform="translate(180 40)">
        <rect x="-15" y="-14" width="30" height="28" rx="9" fill="#fff" stroke={S.st} strokeOpacity="0.32" />
        <rect x="-9" y="-4" width="18" height="9" rx="2" stroke={S.ac} strokeWidth="1.5" />
        <path d="M-5 0.5 h3M0 0.5 h3M5 0.5 h1.5" stroke={S.ac} strokeWidth="1.3" strokeLinecap="round" />
      </g>
      {/* citizen SOS */}
      <g transform="translate(30 104)">
        <rect x="-15" y="-14" width="30" height="28" rx="9" fill="#fff" stroke={S.st} strokeOpacity="0.32" />
        <rect x="-6" y="-9" width="12" height="18" rx="3" stroke={S.st} strokeOpacity="0.55" strokeWidth="1.4" />
        <circle cx="0" cy="0" r="2.6" fill="#e0556a" />
      </g>
      {/* IoT sensor */}
      <g transform="translate(190 104)">
        <rect x="-15" y="-14" width="30" height="28" rx="9" fill="#fff" stroke={S.st} strokeOpacity="0.32" />
        <circle cx="0" cy="2" r="2.4" fill={S.st} fillOpacity="0.6" />
        <path d="M-5 -3 a7 7 0 0 1 10 0M-8.5 -6.5 a12 12 0 0 1 17 0" stroke={S.st} strokeOpacity="0.45" strokeWidth="1.3" strokeLinecap="round" />
      </g>
      {/* incident */}
      <circle cx="110" cy="174" r="34" fill={S.st} fillOpacity="0.06" />
      <circle cx="110" cy="174" r="22" fill="#fff" stroke={S.st} strokeOpacity="0.3" />
      <circle cx="110" cy="174" r="8" fill={S.st} />
    </svg>
  ),
  understand: (
    <svg viewBox="0 0 220 240" fill="none" aria-hidden="true">
      {/* stacked GIS planes */}
      {[0, 1].map((i) => (
        <path key={i} d={`M110 ${58 + i * 34} L188 ${100 + i * 34} L110 ${142 + i * 34} L32 ${100 + i * 34} Z`} fill="#fff" fillOpacity="0.9" stroke={S.st} strokeOpacity={0.26 - i * 0.1} strokeWidth="1.1" />
      ))}
      {/* map grid on top plane */}
      <path d="M71 79 L149 121M149 79 L71 121" stroke={S.st} strokeOpacity="0.12" strokeWidth="1" />
      {/* incident pin + related */}
      <circle cx="110" cy="96" r="20" fill={S.ac} fillOpacity="0.1" />
      <path d="M110 86 a7 7 0 0 1 7 7 c0 5-7 12-7 12 s-7-7-7-12 a7 7 0 0 1 7-7z" fill={S.st} />
      <circle cx="84" cy="110" r="3.4" fill={S.ac} fillOpacity="0.85" />
      <circle cx="136" cy="108" r="3.4" fill={S.ac} fillOpacity="0.6" />
      {/* live video tile */}
      <g transform="translate(30 158)">
        <rect width="72" height="48" rx="9" fill="#fff" stroke={S.st} strokeOpacity="0.24" />
        <circle cx="12" cy="11" r="3" fill="#e0556a" />
        <rect x="20" y="8.5" width="18" height="4" rx="2" fill={S.nv} fillOpacity="0.18" />
        <path d="M26 30 l8-8 7 7 5-5 8 9z" fill={S.st} fillOpacity="0.28" />
      </g>
      {/* AI enrichment chip */}
      <g transform="translate(118 158)">
        <rect width="72" height="48" rx="9" fill="#fff" stroke={S.ac} strokeOpacity="0.4" />
        <path d="M20 24 l4-9 4 9 9 4 -9 4 -4 9 -4 -9 -9 -4z" fill={S.ac} fillOpacity="0.55" />
        <rect x="42" y="18" width="20" height="4" rx="2" fill={S.nv} fillOpacity="0.16" />
        <rect x="42" y="27" width="13" height="4" rx="2" fill={S.nv} fillOpacity="0.12" />
      </g>
    </svg>
  ),
  decide: (
    <svg viewBox="0 0 220 240" fill="none" aria-hidden="true">
      {/* recommended workflow — emphasized */}
      <g transform="translate(24 32)">
        <rect width="172" height="52" rx="13" fill="#fff" stroke={S.st} strokeOpacity="0.5" />
        <rect x="-1" y="-1" width="174" height="54" rx="14" stroke={S.st} strokeOpacity="0.12" strokeWidth="4" />
        <path d="M22 26 l4-9 4 9 9 4 -9 4 -4 9 -4 -9 -9 -4z" fill={S.ac} fillOpacity="0.7" />
        <rect x="48" y="16" width="78" height="6" rx="3" fill={S.nv} fillOpacity="0.5" />
        <rect x="48" y="29" width="52" height="5" rx="2.5" fill={S.nv} fillOpacity="0.2" />
        <path d="M142 25 l5 5 8.5 -9.5" stroke={S.ac} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* priority + resource rows */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(24 ${104 + i * 40})`}>
          <rect width="172" height="32" rx="10" fill="#fff" stroke={S.st} strokeOpacity="0.14" />
          <rect x="14" y="12" width="8" height="8" rx="2.5" fill={['#e0556a', '#e0a44e', S.st][i]} fillOpacity={0.75 - i * 0.2} />
          <rect x="32" y="13" width={82 - i * 18} height="5" rx="2.5" fill={S.nv} fillOpacity="0.16" />
          <rect x="132" y="11" width="26" height="10" rx="5" fill={S.st} fillOpacity={0.1 - i * 0.02} />
        </g>
      ))}
    </svg>
  ),
  act: (
    <svg viewBox="0 0 220 240" fill="none" aria-hidden="true">
      {/* live navigation route */}
      <path d="M34 196 C 62 138, 104 164, 124 104 C 138 62, 162 52, 182 46" stroke={S.st} strokeOpacity="0.3" strokeWidth="1.7" strokeDasharray="5 6" />
      <circle cx="182" cy="46" r="11" fill={S.ac} fillOpacity="0.14" />
      <circle cx="182" cy="46" r="5" fill={S.ac} />
      {/* patrol vehicle */}
      <g transform="translate(104 108)">
        <circle r="30" fill={S.st} fillOpacity="0.07" />
        <path d="M-22 4 l4 -11 a5 5 0 0 1 4.6 -3 h26.8 a5 5 0 0 1 4.6 3 l4 11 z" fill="#fff" stroke={S.st} strokeOpacity="0.45" strokeWidth="1.3" />
        <rect x="-22" y="4" width="44" height="9" rx="3.5" fill="#fff" stroke={S.st} strokeOpacity="0.45" strokeWidth="1.3" />
        <rect x="-6" y="-13" width="12" height="4" rx="1.6" fill={S.ac} fillOpacity="0.85" />
        <circle cx="-13" cy="13" r="4" fill={S.nv} fillOpacity="0.62" />
        <circle cx="13" cy="13" r="4" fill={S.nv} fillOpacity="0.62" />
      </g>
      {/* responder mobile app */}
      <g transform="translate(28 34)">
        <rect width="34" height="56" rx="9" fill="#fff" stroke={S.st} strokeOpacity="0.3" />
        <rect x="7" y="10" width="20" height="4" rx="2" fill={S.nv} fillOpacity="0.18" />
        <rect x="7" y="19" width="20" height="16" rx="3" fill={S.st} fillOpacity="0.1" />
        <circle cx="17" cy="27" r="3" fill={S.st} fillOpacity="0.6" />
        <rect x="7" y="41" width="20" height="6" rx="3" fill={S.ac} fillOpacity="0.5" />
      </g>
      {/* multi-agency unit status */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${26 + i * 58} 208)`}>
          <rect width="48" height="17" rx="8.5" fill="#fff" stroke={S.st} strokeOpacity="0.2" />
          <circle cx="12" cy="8.5" r="3.6" fill={[S.st, S.ac, '#22c55e'][i]} fillOpacity="0.8" />
          <rect x="21" y="6.5" width="18" height="4" rx="2" fill={S.nv} fillOpacity="0.15" />
        </g>
      ))}
    </svg>
  ),
  learn: (
    <svg viewBox="0 0 220 240" fill="none" aria-hidden="true">
      {/* evidence sources: bodycam · in-car · CCTV */}
      {['BWC', 'CAR', 'CCTV'].map((t, i) => (
        <g key={t} transform={`translate(${24 + i * 60} 28)`}>
          <rect width="52" height="38" rx="10" fill="#fff" stroke={S.st} strokeOpacity="0.26" />
          {i === 0 && (
            <>
              <rect x="14" y="13" width="18" height="13" rx="3.5" stroke={S.st} strokeOpacity="0.55" strokeWidth="1.4" />
              <circle cx="23" cy="19.5" r="3.4" fill={S.st} fillOpacity="0.5" />
            </>
          )}
          {i === 1 && (
            <>
              <path d="M13 24 l3 -8 h20 l3 8 z" stroke={S.st} strokeOpacity="0.55" strokeWidth="1.4" fill="none" />
              <circle cx="18" cy="26" r="2.4" fill={S.st} fillOpacity="0.5" />
              <circle cx="34" cy="26" r="2.4" fill={S.st} fillOpacity="0.5" />
            </>
          )}
          {i === 2 && (
            <>
              <rect x="13" y="14" width="17" height="12" rx="3" stroke={S.st} strokeOpacity="0.55" strokeWidth="1.4" />
              <path d="M30 18 l8 -3 v10 l-8 -3z" fill={S.st} fillOpacity="0.45" />
            </>
          )}
        </g>
      ))}
      {/* unified evidence timeline */}
      <path d="M26 88 H194" stroke={S.st} strokeOpacity="0.18" strokeWidth="1.2" />
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={44 + i * 44} cy="88" r="4.6" fill="#fff" stroke={S.ac} strokeWidth="1.9" />
      ))}
      {/* performance analytics */}
      <g transform="translate(26 112)">
        <rect width="168" height="102" rx="12" fill="#fff" stroke={S.st} strokeOpacity="0.18" />
        {[26, 44, 36, 60, 78].map((h, i) => (
          <rect key={i} x={22 + i * 28} y={82 - h} width="15" height={h} rx="4" fill={S.st} fillOpacity={0.2 + i * 0.1} />
        ))}
        <path d="M22 58 L50 46 L78 52 L106 34 L134 20" stroke={S.ac} strokeOpacity="0.7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  ),
}

const StageIcon: Record<string, React.ReactNode> = {
  detect: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  understand: (
    <>
      <path d="M9 4 3 6.4v13.2L9 17l6 2.6 6-2.4V4l-6 2.4Z" />
      <path d="M9 4v13M15 6.4v13.2" />
    </>
  ),
  decide: (
    <>
      <path d="M4 6h10M4 12h7M4 18h13" />
      <path d="M15.5 9.5l2.2 2.2 4.3-4.6" />
    </>
  ),
  act: (
    <>
      <path d="M3 17h2l1.6-4.6A3 3 0 0 1 9.4 10h5.2a3 3 0 0 1 2.8 2.4L19 17h2" />
      <circle cx="7.5" cy="17.5" r="1.9" />
      <circle cx="16.5" cy="17.5" r="1.9" />
    </>
  ),
  learn: <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />,
}

type Loc = { en: string; es: string }
type Stage = { key: string; n: string; hero?: boolean; t: Loc; c: Loc; a: Loc }

const STAGES: Stage[] = [
  {
    key: 'detect', n: '01',
    t: { en: 'Detect', es: 'Detectar' },
    c: { en: 'Every signal becomes an event.', es: 'Cada señal se convierte en un evento.' },
    a: { en: 'Cameras, sensors and emergency calls converge into one incident.', es: 'Cámaras, sensores y llamadas de emergencia convergen en un incidente.' },
  },
  {
    key: 'understand', n: '02',
    t: { en: 'Understand', es: 'Comprender' },
    c: { en: 'Context replaces uncertainty.', es: 'El contexto reemplaza la incertidumbre.' },
    a: { en: 'GIS, video and AI create one operational picture.', es: 'GIS, video e IA crean una sola imagen operativa.' },
  },
  {
    key: 'decide', n: '03', hero: true,
    t: { en: 'Decide', es: 'Decidir' },
    c: { en: 'Choose the best response in seconds.', es: 'Elige la mejor respuesta en segundos.' },
    a: { en: 'Priorities, units and recommended workflows surface together.', es: 'Prioridades, unidades y flujos recomendados aparecen juntos.' },
  },
  {
    key: 'act', n: '04',
    t: { en: 'Act', es: 'Actuar' },
    c: { en: 'Coordinate every responder in real time.', es: 'Coordina a cada unidad en tiempo real.' },
    a: { en: 'Dispatch, navigation and agencies stay synchronized.', es: 'Despacho, navegación y agencias se mantienen sincronizados.' },
  },
  {
    key: 'learn', n: '05',
    t: { en: 'Learn', es: 'Aprender' },
    c: { en: 'Every incident improves the next response.', es: 'Cada incidente mejora la siguiente respuesta.' },
    a: { en: 'Evidence, timelines and analytics inform the next response.', es: 'Evidencia, cronologías y analítica informan la siguiente respuesta.' },
  },
]

export default function HowItWorks({ es }: { es: boolean }) {
  const lang = es ? 'es' : 'en'
  const ref = useRef<HTMLDivElement>(null)
  const [prog, setProg] = useState(0)
  const [railY, setRailY] = useState(0)

  // keep the rail exactly on the stage nodes at any width
  useEffect(() => {
    const host = ref.current
    if (!host) return
    const measure = () => {
      const node = host.querySelector<HTMLElement>('.hiw2-node')
      if (node) setRailY(node.offsetTop + node.offsetHeight / 2)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(host)
    window.addEventListener('load', measure)
    return () => { ro.disconnect(); window.removeEventListener('load', measure) }
  }, [])

  // scroll-driven: stages activate sequentially left → right, completed stay lit
  useEffect(() => {
    const host = ref.current
    if (!host) return
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setProg(1); return }
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const r = host.getBoundingClientRect()
        const vh = window.innerHeight || 1
        // 0 when the flow's top reaches ~78% of the viewport, 1 once it has risen past ~32%
        const p = (vh * 0.78 - r.top) / Math.max(r.height * 0.62, 1)
        setProg((v) => Math.max(v, Math.min(1, Math.max(0, p))))
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const n = STAGES.length
  const active = Math.min(n - 1, Math.floor(prog * n))
  const pct = prog >= 1 ? 100 : (active / (n - 1)) * 100
  const flowing = prog >= 1

  return (
    <section className="hiw2" id="how">
      <div className="hiw2-wrap">
        <div className="hiw2-head">
          <div className="hiw2-eyebrow">{es ? 'CÓMO FUNCIONA' : 'HOW IT WORKS'}</div>
          <h2 className="hiw2-title">
            {es ? <>De la detección a <em>resultados más seguros</em></> : <>From detection to <em>safer outcomes</em></>}
          </h2>
          <p className="hiw2-lede">
            {es
              ? 'Cada evento recorre un solo flujo operativo continuo, conectando detección, decisión, respuesta y aprendizaje posterior dentro de una misma plataforma.'
              : 'Every event moves through one continuous operational workflow, connecting detection, decision making, response and post-incident learning inside a single platform.'}
          </p>
        </div>

        <div className="hiw2-flow" ref={ref} style={{ '--rail-y': `${railY}px` } as React.CSSProperties}>
          <div className="hiw2-rail" aria-hidden="true">
            <span className="hiw2-rail-fill" style={{ width: `${pct}%` }} />
            {flowing && <span className="hiw2-pulse" />}
          </div>
          {STAGES.map((s, i) => (
            <div
              className={`hiw2-stage${prog > 0 && active >= i ? ' is-in' : ''}${active === i && !flowing ? ' is-active' : ''}${active > i || flowing ? ' is-done' : ''}${s.hero ? ' is-hero' : ''}`}
              key={s.key}
              style={{ '--d': `${i * 0.05}s` } as React.CSSProperties}
            >
              <div className="hiw2-scene">{Scene[s.key]}</div>
              <span className="hiw2-node" aria-hidden="true" />
              <span className="hiw2-ic" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {StageIcon[s.key]}
                </svg>
              </span>
              <h3 className="hiw2-t">{s.t[lang]}</h3>
              <p className="hiw2-c">{s.c[lang]}</p>
              <p className="hiw2-a">{s.a[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
