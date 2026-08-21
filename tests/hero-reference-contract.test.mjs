import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const hero = readFileSync('src/components/hero-lab/HeroV3Platform.tsx', 'utf8')
const carousel = readFileSync('src/components/hero-lab/HeroCardCarousel.tsx', 'utf8')
const media = readFileSync('src/components/hero-lab/HeroCardMedia.tsx', 'utf8')
const css = readFileSync('src/app/[locale]/hero-lab/hero-lab-light.css', 'utf8')
/* The seven module cards left the hero when they became their own section, so
   the assertions about them follow them here rather than being deleted. */
const moduleCards = readFileSync('src/components/hero-lab/HeroModuleCards.tsx', 'utf8')

test('the seven reference modules survive, wherever they are rendered', () => {
  for (const label of [
    'CAD / 911',
    'Video & Analytics',
    'GIS / Map',
    'Event Management',
    'Unified Digital Evidence',
    'Mobile Response',
    'Integrations',
  ]) assert.match(moduleCards, new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))

  assert.equal((moduleCards.match(/data-hero-card=/g) ?? []).length, 7)
  /* And they are specifically NOT in the hero any more — that separation is
     the point of the change, so it is worth pinning rather than assuming. */
  assert.equal((hero.match(/data-hero-card=/g) ?? []).length, 0)
})

test('hero carries the approved proof metrics', () => {
  /* 73M+ and 99.99% replaced 70M+ and 99.9%. Both are signed-off public claims,
     so the test tracks the approved values rather than the original ones. */
  assert.match(hero, /num: '73M\+'/)
  assert.match(hero, /num: '40\+'/)
  assert.match(hero, /num: '99\.99%'/)
  /* Guard against the superseded figures reappearing. */
  assert.doesNotMatch(hero, /num: '70M\+'/)
  assert.doesNotMatch(hero, /num: '99\.9%'/)
})

test('four bounded raster visuals ship with the cards, and the hero keeps the 3D mark', () => {
  /* The four card visuals moved with the cards; only the platform mark stayed
     behind in the hero. Each is still asserted, just against its current home. */
  for (const asset of [
    'video-analytics.webp',
    'gis-map.webp',
    'digital-evidence.webp',
    'mobile-apps.webp',
  ]) assert.match(moduleCards, new RegExp(`/images/hero-cards/${asset.replace('.', '\\.')}`))
  assert.match(hero, /\/images\/hero-cards\/platform-mark\.webp/)

  assert.equal((moduleCards.match(/<HeroCardMedia/g) ?? []).length, 4)
  assert.equal((moduleCards.match(/className="hll-card-art /g) ?? []).length, 0)
  assert.match(media, /className={`hll-card-media/)
  assert.match(media, /overflow-hidden media region/i)
})

test('cards share title rhythm and desktop uses a straight equal-height validation row', () => {
  assert.match(css, /\.hll-card-head\s*\{[\s\S]*?height:\s*46px/)
  assert.match(css, /\.hll-card-title\s*\{[\s\S]*?font-size:\s*11px[\s\S]*?line-height:\s*1\.15/)
  assert.match(css, /width:\s*200px;\s*\n\s*height:\s*340px/)
  assert.match(css, /width:\s*286px;\s*\n\s*height:\s*410px/)
  assert.match(css, /Temporary validation row: equal-height cards aligned on one straight baseline/)
  assert.match(css, /Temporary validation row:[\s\S]*?\.hll-platform-stage\s*\{[\s\S]*?height:\s*494px/)
  assert.match(css, /\.hll-cards\s*\{[\s\S]*?align-items:\s*flex-start/)
  assert.match(css, /\.hll-card--cad\s*\{[\s\S]*?height:\s*378px/)
  assert.match(css, /\.hll-card--video\s*\{[\s\S]*?height:\s*378px/)
  assert.match(css, /\.hll-card--gis\s*\{[\s\S]*?height:\s*378px/)
  assert.match(css, /\.hll-card--events\s*\{[\s\S]*?height:\s*378px/)
  assert.match(css, /\.hll-card--ude\s*\{[\s\S]*?height:\s*378px/)
  assert.match(css, /\.hll-card--mobile\s*\{[\s\S]*?height:\s*378px/)
  assert.match(css, /\.hll-card--integrations\s*\{[\s\S]*?height:\s*378px/)
  assert.match(css, /\.hll-card-slot:nth-child\(1\),[\s\S]*?\.hll-card-slot:nth-child\(7\)\s*\{[\s\S]*?transform:\s*translateY\(0\)/)
})

test('all four supplied media crops use padded safe frames', () => {
  assert.match(css, /Padded source crops keep every supplied visual safely inside its frame/)
  assert.match(css, /\.hll-card-media--video\s*\{\s*height:\s*160px/)
  assert.match(css, /\.hll-card-media--gis\s*\{\s*height:\s*134px/)
  assert.match(css, /\.hll-card-media--evidence\s*\{\s*height:\s*142px/)
  assert.match(css, /\.hll-card-media--mobile\s*\{\s*height:\s*184px/)
  assert.doesNotMatch(css, /Padded source crops[\s\S]*?width:\s*147%/)
})

test('carousel exposes accessible controls and keyboard behavior', () => {
  assert.match(carousel, /aria-label=.*Previous/i)
  assert.match(carousel, /aria-label=.*Next/i)
  assert.match(carousel, /aria-current=/)
  assert.match(carousel, /ArrowLeft/)
  assert.match(carousel, /ArrowRight/)
  /* scrollIntoView is gone on purpose. It scrolled one CARD into view, which
     is what produced seven dots and six dead clicks while six of the seven
     cards were already on screen. Paging is now by viewport width via
     scrollTo, so the assertion tracks the new mechanism. */
  assert.match(carousel, /scrollTo\(/)
  assert.doesNotMatch(carousel, /scrollIntoView/)
})

test('carousel page count is guarded against a zero-width viewport', () => {
  /* Regression: pageCount fed Array.from({ length: pageCount }). clientWidth is
     0 before layout, scrollWidth / 0 is Infinity, and Array.from on an infinite
     length throws RangeError — which took the whole route to the error
     boundary in production while the build still passed. The guard must stay. */
  assert.match(carousel, /function pagesIn/)
  assert.match(carousel, /if \(!width\) return 1/)
  /* And no raw division may creep back in outside the helper. */
  const raw = carousel.match(/scrollWidth \/ viewport\.clientWidth/g) ?? []
  assert.equal(raw.length, 0, 'divide by clientWidth only inside pagesIn()')
})

test('carousel pages by viewport, not by card', () => {
  /* The regression this locks down: dots and stops must be derived from how
     many viewport-widths the track occupies, never from cards.length. */
  assert.match(carousel, /pageCount/)
  /* The division now lives in pagesIn(), which is where the zero-width guard
     is; asserting the raw expression here would fight that fix. */
  assert.match(carousel, /Math\.ceil\(viewport\.scrollWidth \/ width\)/)
  assert.match(carousel, /Array\.from\(\{ length: pageCount \}/)
  assert.doesNotMatch(carousel, /length: cards\.length \}/)
})

test('responsive styles provide a desktop stage and mobile snap carousel', () => {
  assert.match(css, /min-height:\s*1024px/)
  assert.match(css, /scroll-snap-type:\s*x mandatory/)
  assert.match(css, /scroll-snap-align:\s*center/)
  assert.match(css, /@media \(max-width:\s*900px\)/)
  assert.match(css, /prefers-reduced-motion:\s*reduce/)
  assert.match(css, /width:\s*200px;\s*\n\s*height:\s*340px/)
  assert.match(css, /width:\s*286px;\s*\n\s*height:\s*410px/)
  assert.match(css, /object-fit:\s*contain/)
})
