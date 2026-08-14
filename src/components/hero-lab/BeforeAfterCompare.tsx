'use client'

/* The scroller wrapper for the two before/after panels. Below 1040px
   .ba-compare switches from a CSS grid to a horizontal scroll-snap strip
   (before-after.css) — this component adds the part CSS alone can't: an
   explicit, always-visible control row.

   A styled-but-native scrollbar was the first attempt, but macOS defaults to
   "show scrollbars: when scrolling" — in a static, non-interacting page that
   renders no scrollbar at all, so there was no visible cue that the strip
   could scroll. Buttons don't depend on an OS preference.

   The buttons then floated at the strip's vertical mid-point, one at each
   edge. Two problems, both visible the moment the panels differ in height:
   the strip is as tall as the console, so beside the much shorter scatter
   panel the left button hung in empty space with nothing under it; and the
   decorative .ba-arrow that rides between the panels landed on the same line,
   giving three circles in a row where only two were interactive. The controls
   now sit as a static centred row below the strip — the same arrangement the
   module carousel above uses — with dots between them, so which panel you are
   on is readable without counting circles. */

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'

export default function BeforeAfterCompare({
  children,
  previousLabel,
  nextLabel,
  panelLabels,
}: {
  children: ReactNode
  previousLabel: string
  nextLabel: string
  panelLabels: string[]
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollable, setScrollable] = useState(false)
  const [index, setIndex] = useState(0)

  const panels = useCallback(
    () => Array.from(ref.current?.querySelectorAll<HTMLElement>('.ba-panel') ?? []),
    [],
  )

  /* Nearest panel centre to the strip's centre, rather than
     round(scrollLeft / clientWidth): the panels are a flat 440px and snap
     centred, so they are not laid out on a clientWidth grid and the division
     drifts by a whole panel on wider screens. */
  const measure = useCallback(() => {
    const el = ref.current
    if (!el) return
    setScrollable(el.scrollWidth - el.clientWidth > 1)
    const mid = el.scrollLeft + el.clientWidth / 2
    let best = 0
    let bestGap = Infinity
    panels().forEach((p, i) => {
      const gap = Math.abs(p.offsetLeft + p.offsetWidth / 2 - mid)
      if (gap < bestGap) {
        bestGap = gap
        best = i
      }
    })
    setIndex(best)
  }, [panels])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    el.addEventListener('scroll', measure, { passive: true })
    return () => {
      ro.disconnect()
      el.removeEventListener('scroll', measure)
    }
  }, [measure])

  function goTo(target: number) {
    const el = ref.current
    const panel = panels()[target]
    if (!el || !panel) return
    el.scrollTo({
      left: panel.offsetLeft - (el.clientWidth - panel.offsetWidth) / 2,
      behavior: 'smooth',
    })
  }

  const count = panels().length || panelLabels.length

  return (
    <div className="ba-compare-wrap">
      <div className="ba-compare" ref={ref}>{children}</div>
      {scrollable && (
        <div className="ba-scroll-controls">
          <button
            type="button"
            className="ba-scroll-btn"
            onClick={() => goTo(index - 1)}
            disabled={index <= 0}
            aria-label={previousLabel}
          >
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m12.5 4.5-5 5.5 5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
          </button>

          <div className="ba-scroll-dots">
            {Array.from({ length: count }, (_, i) => (
              <button
                key={i}
                type="button"
                className="ba-scroll-dot"
                aria-current={i === index}
                aria-label={panelLabels[i] ?? `${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className="ba-scroll-btn"
            onClick={() => goTo(index + 1)}
            disabled={index >= count - 1}
            aria-label={nextLabel}
          >
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7.5 4.5 5 5.5-5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
          </button>
        </div>
      )}
    </div>
  )
}
