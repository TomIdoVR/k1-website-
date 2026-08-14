'use client'

/* The scroller wrapper for the two before/after panels. Below 1180px
   .ba-compare switches from a CSS grid to a horizontal scroll-snap strip
   (before-after.css) — this component adds the part CSS alone can't: an
   explicit, always-visible control row.

   A styled-but-native scrollbar was the first attempt, but macOS defaults to
   "show scrollbars: when scrolling" — in a static, non-interacting page that
   renders no scrollbar at all, so there was no visible cue that the strip
   could scroll. Buttons don't depend on an OS preference.

   The controls sit in a static row below the strip, with dots between them.
   The strip also follows the active panel's height. Without that measurement,
   flexbox makes it as tall as the much longer console even while the shorter
   fragmented panel is selected, leaving a large empty scroll region. */

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

  const setScrollerHeight = useCallback((panel: HTMLElement | undefined) => {
    const el = ref.current
    if (!el) return

    if (!window.matchMedia('(max-width: 1180px)').matches) {
      el.style.removeProperty('height')
      return
    }

    if (!panel) return
    const height = `${panel.offsetHeight + 14}px`
    if (el.style.height !== height) el.style.height = height
  }, [])

  const syncActivePanelHeight = useCallback((target: number) => {
    const items = panels()
    setScrollerHeight(items[target])
  }, [panels, setScrollerHeight])

  /* Use the panel nearest the strip's centre rather than dividing scrollLeft
     by clientWidth. Each slide deliberately leaves a small next-state peek,
     so its width is not the same as the scroller's width. */
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
    syncActivePanelHeight(best)
  }, [panels, syncActivePanelHeight])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    panels().forEach((panel) => ro.observe(panel))
    const responsive = window.matchMedia('(max-width: 1180px)')
    responsive.addEventListener('change', measure)
    el.addEventListener('scroll', measure, { passive: true })
    return () => {
      ro.disconnect()
      responsive.removeEventListener('change', measure)
      el.removeEventListener('scroll', measure)
    }
  }, [measure, panels])

  function goTo(target: number) {
    const el = ref.current
    const panel = panels()[target]
    if (!el || !panel) return
    setIndex(target)
    syncActivePanelHeight(target)
    el.scrollTo({
      left: panel.offsetLeft,
      behavior: 'smooth',
    })
  }

  const count = panelLabels.length

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
