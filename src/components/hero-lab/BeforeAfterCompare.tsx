'use client'

/* The scroller wrapper for the two before/after panels. Below 1040px
   .ba-compare switches from a CSS grid to a horizontal scroll-snap strip
   (before-after.css) — this component adds the part CSS alone can't: an
   explicit, always-visible pair of arrow buttons.

   A styled-but-native scrollbar was the first attempt, but macOS defaults to
   "show scrollbars: when scrolling" — in a static, non-interacting page that
   renders no scrollbar at all, so there was no visible cue that the strip
   could scroll. Buttons don't depend on an OS preference. */

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'

export default function BeforeAfterCompare({
  children,
  previousLabel,
  nextLabel,
}: {
  children: ReactNode
  previousLabel: string
  nextLabel: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollable, setScrollable] = useState(false)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const measure = useCallback(() => {
    const el = ref.current
    if (!el) return
    setScrollable(el.scrollWidth - el.clientWidth > 1)
    setAtStart(el.scrollLeft <= 1)
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 1)
  }, [])

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

  function go(direction: 1 | -1) {
    ref.current?.scrollBy({ left: direction * ref.current.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className="ba-compare-wrap">
      <div className="ba-compare" ref={ref}>{children}</div>
      {scrollable && (
        <div className="ba-scroll-controls">
          <button type="button" className="ba-scroll-btn ba-scroll-btn--prev" onClick={() => go(-1)} disabled={atStart} aria-label={previousLabel}>
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m12.5 4.5-5 5.5 5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
          </button>
          <button type="button" className="ba-scroll-btn ba-scroll-btn--next" onClick={() => go(1)} disabled={atEnd} aria-label={nextLabel}>
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7.5 4.5 5 5.5-5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
          </button>
        </div>
      )}
    </div>
  )
}
