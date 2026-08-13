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

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    /* 1px of tolerance: sub-pixel layout regularly leaves scrollWidth a hair
       over clientWidth with nothing actually clipped. */
    const measure = () => setScrollable(viewport.scrollWidth - viewport.clientWidth > 1)
    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(viewport)
    /* The track too — the viewport can hold its size while the cards inside it
       reflow, and only the track's box changes. */
    const track = viewport.firstElementChild
    if (track) observer.observe(track)
    return () => observer.disconnect()
  }, [cards.length])

  const goTo = useCallback((index: number) => {
    const next = Math.max(0, Math.min(index, cards.length - 1))
    cardRefs.current[next]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
    setActiveIndex(next)
  }, [cards.length])

  const syncActiveCard = useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2
    let closestIndex = 0
    let closestDistance = Number.POSITIVE_INFINITY

    cardRefs.current.forEach((card, index) => {
      if (!card) return
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const distance = Math.abs(cardCenter - viewportCenter)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    setActiveIndex(closestIndex)
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
      goTo(cards.length - 1)
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
          {cards.map((_, index) => (
            <button
              className="hll-carousel-dot"
              type="button"
              key={index}
              aria-label={`${slideLabel} ${index + 1}`}
              aria-current={activeIndex === index ? 'true' : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>

        <button
          className="hll-carousel-arrow hll-carousel-arrow--next"
          type="button"
          aria-label={nextLabel || 'Next card'}
          disabled={activeIndex === cards.length - 1}
          onClick={() => goTo(activeIndex + 1)}
        >
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="m7.5 4.5 5 5.5-5 5.5" />
          </svg>
        </button>
      </div>
      )}

      {/* Announcing "3 / 7" when every card is already on screen describes a
          position the user is not in. */}
      {scrollable && (
        <span className="hll-sr-only" aria-live="polite">
          {slideLabel} {activeIndex + 1} / {cards.length}
        </span>
      )}
    </div>
  )
}
