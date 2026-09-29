'use client'

/* Scroll reveals for the homepage, as one observer rather than a wrapper per
   section.

   The sections stay server components; this renders nothing and only tags
   elements that are *below the fold at mount* — anything already on screen is
   left exactly as the server painted it, so nothing visible ever blinks out and
   back in. Tagged elements get `.rv` (hidden, see home-motion.css) and then
   `.rv-in` once they reach the viewport. With JS off, reduced motion on, or
   before hydration, no element carries `.rv`, so the page is simply static.

   `stagger` spaces siblings that match the same selector: the Nth match inside
   a parent gets --rv-i = N, which the CSS turns into a transition delay.
   `seq` targets are not faded themselves — they get the same classes so the
   CSS can play an internal sequence (the live console) off `.rv-in`. */

import { useEffect } from 'react'

const TARGETS: { sel: string; stagger?: boolean; seq?: boolean }[] = [
  { sel: '.ba-head, .hll-modules-head, .sv-head, .ind-head, .eco-head, .tbd-head, .cust-eyebrow' },
  { sel: '.ba-compare' },
  { sel: '.uc', seq: true },
  { sel: '.cust-hero' },
  { sel: '.cust-impact, .cust-side', stagger: true },
  { sel: '.ind-card', stagger: true },
  { sel: '.ind-more, .eco-disclaimer, .eco-note' },
  { sel: '.eco-group', stagger: true },
  { sel: '.tbd-card', stagger: true },
]

export default function MotionReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const fold = window.innerHeight
    const tagged: Element[] = []

    for (const { sel, stagger, seq } of TARGETS) {
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        if (el.getBoundingClientRect().top < fold) return
        if (stagger && el.parentElement) {
          const peers = Array.from(el.parentElement.children).filter((c) => c.matches(sel))
          el.style.setProperty('--rv-i', String(peers.indexOf(el)))
        }
        el.classList.add(seq ? 'rv-seq' : 'rv')
        tagged.push(el)
      })
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('rv-in')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    tagged.forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])

  return null
}
