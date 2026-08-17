'use client'

import {
  Children,
  type KeyboardEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

type HeroCardCarouselProps = {
  children: ReactNode
  previousLabel: string
  nextLabel: string
  slideLabel: string
}

export default function HeroCardCarousel({
  children,
  previousLabel,
  nextLabel,
  slideLabel,
}: HeroCardCarouselProps) {
  const cards = Children.toArray(children)
  const viewportRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])
  const frameRef = useRef<number | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  /* Whether the track actually overflows its viewport. Starts `true` so the
     server-rendered markup matches the client's first render — the alternative
     starts empty and pops the controls in on hydration for the widths that do
     need them, which is the more visible of the two flashes.

     Measured rather than derived from card count: whether seven cards overflow
     depends on the container width, so the same seven scroll at 1180px and fit
     at 1920px. */
  const [scrollable, setScrollable] = useState(true)
  const [pageCount, setPageCount] = useState(1)

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    /* 1px of tolerance: sub-pixel layout regularly leaves scrollWidth a hair
       over clientWidth with nothing actually clipped. */
    const measure = () => {
      setScrollable(viewport.scrollWidth - viewport.clientWidth > 1)
      /* Dots must count pages, not cards, or the fix above is invisible: two
         real stops would still be drawn as seven dots, five of which do
         nothing. Recomputed on resize because the same seven cards are two
         pages at 1440px and seven at 390px. */
      setPageCount(Math.max(1, Math.ceil(viewport.scrollWidth / viewport.clientWidth)))
    }
    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(viewport)
    /* The track too — the viewport can hold its size while the cards inside it
       reflow, and only the track's box changes. */
    const track = viewport.firstElementChild
    if (track) observer.observe(track)
    return () => observer.disconnect()
  }, [cards.length])

  /* Paging is by viewport, not by card, and that is the whole point.

     One stop per card meant seven dots and seven stops while six of the seven
     cards were already on screen. Advancing moved the track by one card width,
     which at that size is a barely-perceptible nudge — so the control looked
     broken: you clicked, clicked again, and nothing appeared to happen until
     the sixth click finally revealed the one card that had been off-screen.

     A page is one viewport width. With seven cards and six visible that is two
     stops, not seven: one click, the last card appears, done. When the cards
     genuinely do not fit (a phone showing one at a time) page count and card
     count converge, so narrow screens behave exactly as before. */
  const goTo = useCallback((targetPage: number) => {
    const viewport = viewportRef.current
    if (!viewport) return
    const last = Math.max(0, Math.ceil(viewport.scrollWidth / viewport.clientWidth) - 1)
    const next = Math.max(0, Math.min(targetPage, last))
    viewport.scrollTo({ left: next * viewport.clientWidth, behavior: 'smooth' })
    setActiveIndex(next)
  }, [])

  const syncActiveCard = useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const maxScroll = viewport.scrollWidth - viewport.clientWidth
    const last = Math.max(0, Math.ceil(viewport.scrollWidth / viewport.clientWidth) - 1)

    /* Derive the page from scrollLeft rather than trusting the last goTo: the
       track can also be moved by swipe, trackpad or keyboard, and scroll-snap
       pulls the final resting position to the nearest card, so it rarely lands
       on an exact multiple of the viewport width. Rounding absorbs that drift.

       The end is special-cased because the final page is usually partial — at
       maxScroll the rounded quotient can still point at the page before it,
       which would leave the "next" arrow enabled with nowhere to go. */
    if (maxScroll <= 1) { setActiveIndex(0); return }
    setActiveIndex(
      viewport.scrollLeft >= maxScroll - 1
        ? last
        : Math.min(last, Math.round(viewport.scrollLeft / viewport.clientWidth)),
    )
  }, [])

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
  }, [])

  function onScroll() {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    frameRef.current = requestAnimationFrame(syncActiveCard)
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(activeIndex - 1)
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(activeIndex + 1)
    }
    if (event.key === 'Home') {
      event.preventDefault()
      goTo(0)
    }
    if (event.key === 'End') {
      event.preventDefault()
      goTo(pageCount - 1)
    }
  }

  return (
    <div className="hll-carousel">
      <div
        ref={viewportRef}
        className="hll-cards-viewport"
        role="region"
        aria-roledescription={scrollable ? 'carousel' : undefined}
        aria-label={slideLabel}
        /* A scroll container that cannot scroll is a dead tab stop, so it only
           takes focus while there is something to reach by keyboard. */
        tabIndex={scrollable ? 0 : undefined}
        onKeyDown={onKeyDown}
        onScroll={onScroll}
      >
        <div className="hll-cards">
          {cards.map((card, index) => (
            <div
              className="hll-card-slot"
              key={index}
              ref={(node) => { cardRefs.current[index] = node }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${slideLabel} ${index + 1} / ${cards.length}`}
            >
              {card}
            </div>
          ))}
        </div>
      </div>

      {scrollable && (
      <div className="hll-carousel-controls" aria-label={slideLabel}>
        <button
          className="hll-carousel-arrow hll-carousel-arrow--previous"
          type="button"
          aria-label={previousLabel || 'Previous card'}
          disabled={activeIndex === 0}
          onClick={() => goTo(activeIndex - 1)}
        >
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="m12.5 4.5-5 5.5 5 5.5" />
          </svg>
        </button>

        <div className="hll-carousel-dots">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              className="hll-carousel-dot"
              type="button"
              key={index}
              aria-label={`${slideLabel} ${index + 1} / ${pageCount}`}
              aria-current={activeIndex === index ? 'true' : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>

        <button
          className="hll-carousel-arrow hll-carousel-arrow--next"
          type="button"
          aria-label={nextLabel || 'Next card'}
          disabled={activeIndex >= pageCount - 1}
          onClick={() => goTo(activeIndex + 1)}
        >
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="m7.5 4.5 5 5.5-5 5.5" />
          </svg>
        </button>
      </div>
      )}

      {/* Announcing "3 / 7" when every card is already on screen describes a
          position the user is not in — and now that a stop is a page rather
          than a card, "/ 7" would also be the wrong denominator: the control
          has as many positions as there are pages. */}
      {scrollable && (
        <span className="hll-sr-only" aria-live="polite">
          {slideLabel} {activeIndex + 1} / {pageCount}
        </span>
      )}
    </div>
  )
}
