import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const hero = readFileSync('src/components/hero-lab/HeroV3Platform.tsx', 'utf8')
const carousel = readFileSync('src/components/hero-lab/HeroCardCarousel.tsx', 'utf8')
const media = readFileSync('src/components/hero-lab/HeroCardMedia.tsx', 'utf8')
const css = readFileSync('src/app/[locale]/hero-lab/hero-lab-light.css', 'utf8')

test('hero contains the seven reference modules and approved proof metrics', () => {
  for (const label of [
    'CAD / 911',
    'Video & Analytics',
    'GIS / Map',
    'Event Management',
    'Unified Digital Evidence',
    'Mobile Response',
    'Integrations',
  ]) assert.match(hero, new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))

  assert.equal((hero.match(/data-hero-card=/g) ?? []).length, 7)
  assert.match(hero, /num: '70M\+'/)
  assert.match(hero, /num: '40\+'/)
  assert.match(hero, /num: '99\.9%'/)
})

test('hero uses four bounded raster visuals and the 3D platform mark', () => {
  for (const asset of [
    'video-analytics.webp',
    'gis-map.webp',
    'digital-evidence.webp',
    'mobile-apps.webp',
    'platform-mark.webp',
  ]) assert.match(hero, new RegExp(`/images/hero-cards/${asset.replace('.', '\\.')}`))

  assert.equal((hero.match(/<HeroCardMedia/g) ?? []).length, 4)
  assert.equal((hero.match(/className="hll-card-art /g) ?? []).length, 0)
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
  assert.match(carousel, /scrollIntoView/)
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
