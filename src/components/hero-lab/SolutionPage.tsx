/* Generic solution-page renderer — ported from the Claude Design project
   "Kabat One Website" (home/solution-page.jsx + home/solution-page.css).

   The design read its content off a global `window.SOLPAGE` and localized
   through a global `window.k1tx`; here the content comes in as a prop and
   localization is the local `t` / `tl` helpers. Everything else — section
   order, class names, markup — is a faithful port, so the remaining K-*
   pages can reuse this component with only their own content file.

   Seven sections: hero console, shared-core strip, benefits, feature rows
   (dark), process diagram, integrations, case study (dark). */

import Image from 'next/image'
import type { CSSProperties } from 'react'
import { Link } from '@/i18n/navigation'
import type { Loc, LocList, SolutionContent } from './solution-content'

const t = (v: Loc | string, es: boolean): string => (typeof v === 'string' ? v : es ? v.es : v.en)
const tl = (v: LocList, es: boolean): string[] => (es ? v.es : v.en)

const BENEFIT_ICONS: Record<string, React.ReactNode> = {
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" /><path d="M9 12l2 2 4-4" /></>,
  link: <><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" /></>,
  brain: <><path d="M12 5a3 3 0 0 0-6 0 3 3 0 0 0-1 5.8A3 3 0 0 0 8 16a3 3 0 0 0 4 2.8V5Z" /><path d="M12 5a3 3 0 0 1 6 0 3 3 0 0 1 1 5.8A3 3 0 0 1 16 16a3 3 0 0 1-4 2.8V5Z" /></>,
  scale: <><path d="M12 4v16M6 8h12" /><path d="M3 14l3-6 3 6a3 3 0 0 1-6 0ZM15 14l3-6 3 6a3 3 0 0 1-6 0Z" /></>,
  bolt: <><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></>,
  phone: <><path d="M4 5c0-1 1-2 2-2h2l2 4-2 2a12 12 0 0 0 5 5l2-2 4 2v2c0 1-1 2-2 2A16 16 0 0 1 4 5Z" /></>,
}

const FLOW_ICONS: Record<string, React.ReactNode> = {
  camera: <><rect x="3" y="6" width="12" height="12" rx="2" /><path d="M15 10l6-3v10l-6-3" /></>,
  sensor: <><path d="M12 18v.01" /><path d="M8.5 14.5a5 5 0 0 1 7 0" /><path d="M5.5 11.5a9 9 0 0 1 13 0" /></>,
  access: <><rect x="5" y="3" width="14" height="18" rx="2" /><circle cx="9" cy="8" r="1" /><circle cx="15" cy="8" r="1" /><circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" /><path d="M9 17h6" /></>,
  mobile: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18.5h2" /></>,
  iot: <><circle cx="12" cy="12" r="2" /><path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7" /><path d="M12 14v7" /></>,
  sms: <><path d="M4 5h16v11H9l-5 4V5Z" /><path d="M8 10h8M8 13h5" /></>,
  radio: <><circle cx="12" cy="13" r="2.5" /><path d="M7.5 8.5a6 6 0 0 0 0 9M16.5 8.5a6 6 0 0 1 0 9" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0M16 11a3 3 0 1 0-2-5.2M15.5 20a6 6 0 0 1 5.5-6" /></>,
  chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
  truck: <><rect x="2" y="8" width="12" height="8" rx="1.5" /><path d="M14 11h4l3 3v2h-7z" /><circle cx="6" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" /></>,
  phoneIn: <><path d="M4 5c0-1 1-2 2-2h2l2 4-2 2a12 12 0 0 0 5 5l2-2 4 2v2c0 1-1 2-2 2A16 16 0 0 1 4 5Z" /></>,
  bell: <><path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></>,
  pin: <><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" /><circle cx="12" cy="9" r="2.4" /></>,
  bolt: <><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></>,
}

function BenefitIcon({ k }: { k: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {BENEFIT_ICONS[k]}
    </svg>
  )
}

function FlowIcon({ k }: { k: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {FLOW_ICONS[k]}
    </svg>
  )
}

export default function SolutionPage({ p, es }: { p: SolutionContent; es: boolean }) {
  return (
    <div className="sp" style={{ '--ac': p.accent, '--ac-ink': p.accentInk } as CSSProperties}>
      {/* ── Hero ── */}
      <section className="sp-hero" id="top">
        <div className="sp-hero-bg" aria-hidden="true"><span className="sp-hero-grid" /></div>
        <div className="sp-wrap sp-hero-inner">
          <div className="sp-hero-copy">
            <div className="sp-eyebrow">{t(p.eyebrow, es)}</div>
            <h1 className="sp-h1">
              <span>{t(p.h1a, es)}</span>
              <span className="sp-h1-em">{t(p.h1b, es)}</span>
            </h1>
            <p className="sp-sub">{t(p.sub, es)}</p>
            <div className="sp-ctas">
              <Link className="sp-btn" href="/contact">
                {es ? 'Solicitar Demo' : 'Book a Demo'}
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true"><path d="M3 7.5h8.5M7.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
            <div className="sp-stats">
              {p.stats.map((s, i) => (
                <div className="sp-stat" key={i}>
                  <span className="sp-stat-v">{t(s.v, es)}</span>
                  <span className="sp-stat-l">{t(s.l, es)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sp-hero-visual">
            {/* heroBare: the screenshot supplies its own chrome, so the title
                bar is dropped and the overlays reposition against the image. */}
            <div className={`sp-console${p.heroBare ? ' is-bare' : ''}`}>
              {!p.heroBare && (
                <div className="sp-console-bar">
                  <span className="sp-console-dot" /><span className="sp-console-dot" /><span className="sp-console-dot" />
                  <span className="sp-console-title">{t(p.consoleTitle, es)}</span>
                  <span className="sp-console-live"><span className="sp-live-dot" />LIVE</span>
                </div>
              )}
              <div className="sp-console-body">
                <Image src={p.heroImg} alt={t(p.heroAlt, es)} width={1200} height={800} priority />
                <div className="sp-ov-video">
                  <span className="sp-ov-feed" style={{ backgroundImage: `url(${p.heroVideo.img})` }} aria-hidden="true" />
                  <span className="sp-ov-video-bar">
                    <span className="sp-live-dot" />
                    {t(p.heroVideo.label, es)}
                  </span>
                </div>
                <div className="sp-ov-event">
                  <span className="sp-ov-tag">{t(p.heroEvent.tag, es)}</span>
                  <div className="sp-ov-title">{t(p.heroEvent.title, es)}</div>
                  <div className="sp-ov-loc">{t(p.heroEvent.loc, es)}</div>
                  <div className="sp-ov-rows">
                    {p.heroEvent.rows.map((r, i) => (
                      <div key={i}><span>{t(r.l, es)}</span><b>{t(r.v, es)}</b></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {p.chips?.map((c, i) => (
              <div className={`sp-chip sp-chip-${i + 1}`} key={i}><i style={{ background: c.c }} />{t(c.t, es)}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shared-core strip ── */}
      <section className="sp-core">
        <div className="sp-wrap sp-core-inner">
          <span className="sp-core-label">{t(p.coreLabel, es)}</span>
          <div className="sp-core-chips">
            {tl(p.core, es).map((c, i) => <span key={i}>{c}</span>)}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="sp-section sp-benefits">
        <div className="sp-wrap">
          <div className="sp-head">
            <div className="sp-section-eyebrow">{t(p.benefitsEyebrow, es)}</div>
            <h2 className="sp-h2">{t(p.benefitsH2a, es)} <em>{t(p.benefitsH2b, es)}</em></h2>
          </div>
          <div className="sp-ben-grid">
            {p.benefits.map((b, i) => (
              <div className="sp-ben" key={i}>
                <span className="sp-ben-ic"><BenefitIcon k={b.icon} /></span>
                <h3 className="sp-ben-t">{t(b.t, es)}</h3>
                <p className="sp-ben-d">{t(b.d, es)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature rows (dark moment — screenshots pop) ── */}
      <section className="sp-section sp-features" id="features">
        <div className="sp-wrap">
          <div className="sp-head">
            <div className="sp-section-eyebrow">{t(p.featuresEyebrow, es)}</div>
            <h2 className="sp-h2">{t(p.featuresH2a, es)} <em>{t(p.featuresH2b, es)}</em></h2>
          </div>
          <div className="sp-feat-list">
            {p.features.map((f, i) => (
              <div className={`sp-feat${i % 2 ? ' is-rev' : ''}`} key={i}>
                <div className="sp-feat-shot">
                  <Image src={f.img} alt={t(f.alt, es)} width={1200} height={670} />
                </div>
                <div className="sp-feat-copy">
                  <h3 className="sp-feat-t">{t(f.t, es)}</h3>
                  <p className="sp-feat-d">{t(f.d, es)}</p>
                  <ul className="sp-feat-pts">
                    {tl(f.pts, es).map((pt, j) => (
                      <li key={j}><span className="sp-tick" aria-hidden="true">✓</span>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process diagram ── */}
      <section className="sp-section sp-process">
        <div className="sp-wrap">
          <div className="sp-head sp-head-c">
            <div className="sp-section-eyebrow">{t(p.processEyebrow, es)}</div>
            <h2 className="sp-h2">{t(p.processH2a, es)} <em>{t(p.processH2b, es)}</em></h2>
          </div>
          <div className="sp-flow">
            <div className="sp-flow-col">
              {p.processIn.map((n, i) => (
                <div className="sp-flow-node" key={i} style={{ '--d': `${i * 0.06}s` } as CSSProperties}>
                  <span className="sp-flow-ic"><FlowIcon k={n.k} /></span>
                  <span className="sp-flow-t">{t(n.t, es)}</span>
                </div>
              ))}
            </div>

            <div className="sp-flow-rail" aria-hidden="true"><span /><span /><span /></div>

            <div className="sp-flow-core">
              <div className="sp-flow-core-name">{p.name}</div>
              <div className="sp-flow-core-steps">{tl(p.processCore, es).join(' · ')}</div>
            </div>

            <div className="sp-flow-rail sp-flow-rail-out" aria-hidden="true"><span /><span /><span /></div>

            <div className="sp-flow-col sp-flow-col-out">
              {p.processOut.map((n, i) => (
                <div className="sp-flow-node sp-flow-node-out" key={i} style={{ '--d': `${i * 0.06}s` } as CSSProperties}>
                  <span className="sp-flow-ic"><FlowIcon k={n.k} /></span>
                  <span className="sp-flow-t">{t(n.t, es)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Integrations (light band) ── */}
      <section className="sp-section sp-int">
        <div className="sp-wrap">
          <div className="sp-head">
            <div className="sp-section-eyebrow">{t(p.intEyebrow, es)}</div>
            <h2 className="sp-h2">{t(p.intH2a, es)} <em>{t(p.intH2b, es)}</em></h2>
            <p className="sp-lede">{t(p.intSub, es)}</p>
          </div>
          <div className="sp-int-grid">
            {p.integrations.map((it, i) => (
              <div className="sp-int-card" key={i}>
                <h3>{t(it.t, es)}</h3>
                <p>{t(it.d, es)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case study (dark moment) ── */}
      <section className="sp-case">
        <div className="sp-wrap">
          <div className="sp-section-eyebrow sp-case-eyebrow">{t(p.caseEyebrow, es)}</div>
          <div className="sp-case-grid">
            <div className="sp-case-main">
              <div className="sp-case-metric">{t(p.caseMetric, es)}</div>
              <h2 className="sp-case-metric-l">{t(p.caseMetricL, es)}</h2>
              <div className="sp-case-meta">
                <span className="sp-case-name">{t(p.caseName, es)}</span>
                <span className="sp-case-sep" aria-hidden="true" />
                <span className="sp-case-scope">{t(p.caseScope, es)}</span>
              </div>
              <p className="sp-case-body">{t(p.caseBody, es)}</p>
              <p className="sp-case-note">{t(p.caseNote, es)}</p>
            </div>
            <div className="sp-case-side">
              {p.caseStats.map((s, i) => (
                <div className="sp-case-stat" key={i}>
                  <span className="sp-case-stat-v">{t(s.v, es)}</span>
                  <span className="sp-case-stat-l">{t(s.l, es)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
