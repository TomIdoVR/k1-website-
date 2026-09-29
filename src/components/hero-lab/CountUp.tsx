'use client'

/* A stat that counts up from zero the first time it comes into view.

   The server renders the final value, and that is what stays in the DOM for
   crawlers, no-JS visitors and anyone with reduced motion on — the count is a
   client-side replay of a number that is already there, never the only copy of
   it. `value` is the display string ("73M+", "99.99%", "10,000+", "5/5"); the
   first number in it is animated and everything around it is kept verbatim.

   Two guards stop the replay taking a number away from someone who has already
   read it: an element already on screen once the page has been up a while is
   left alone, and the box width is locked to the final value's width before
   the count starts so a growing number never shoves its neighbours sideways. */

import { useEffect, useRef } from 'react'

const NUM = /^(\D*)(\d[\d,]*(?:\.\d+)?)(.*)$/

export default function CountUp({
  value,
  className,
  delay = 0,
  duration = 1600,
}: {
  value: string
  className?: string
  delay?: number
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    const m = value.match(NUM)
    if (!el || !m) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const r = el.getBoundingClientRect()
    const onScreen = r.top < window.innerHeight && r.bottom > 0
    /* 2.5s covers a real-world production hydration; past that, an on-screen
       number has been read and resetting it to zero would look like a glitch. */
    if (onScreen && performance.now() > 2500) return

    const [, pre, num, post] = m
    const target = parseFloat(num.replace(/,/g, ''))
    const decimals = (num.split('.')[1] || '').length
    const fmt = (n: number) =>
      pre +
      (num.includes(',')
        ? n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
        : n.toFixed(decimals)) +
      post

    el.style.display = 'inline-block'
    el.style.minWidth = `${r.width}px`
    el.textContent = fmt(0)

    let raf = 0
    const run = () => {
      let t0 = 0
      const tick = (t: number) => {
        if (!t0) t0 = t
        const p = Math.min(1, Math.max(0, (t - t0 - delay) / duration))
        const eased = 1 - Math.pow(1 - p, 4)
        el.textContent = p < 1 ? fmt(decimals ? target * eased : Math.round(target * eased)) : value
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect()
          run()
        }
      },
      { threshold: 0.6 },
    )
    io.observe(el)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      el.textContent = value
    }
  }, [value, delay, duration])

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}
