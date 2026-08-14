import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const css = readFileSync(new URL('../src/components/hero-lab/before-after.css', import.meta.url), 'utf8')
const component = readFileSync(new URL('../src/components/hero-lab/BeforeAfterCompare.tsx', import.meta.url), 'utf8')

assert.match(
  css,
  /flex:\s*0\s+0\s+calc\(100%\s*-\s*clamp\(/,
  'responsive comparison panels should fill the viewport with only a deliberate next-panel peek',
)

assert.doesNotMatch(
  css,
  /flex:\s*0\s+0\s+440px/,
  'responsive panels must not retain the fixed 440px width that exposes both cards at tablet sizes',
)

assert.match(
  css,
  /container-name:\s*unified-panel/,
  'the unified console should respond to the panel width rather than the viewport width',
)

assert.match(
  css,
  /@container\s+unified-panel\s*\(max-width:\s*540px\)/,
  'the compact console layout should activate from its actual container width',
)

assert.match(
  css,
  /@media\s*\(max-width:\s*1180px\)/,
  'the carousel should remain active until both desktop panels have enough width',
)

assert.match(
  component,
  /matchMedia\('\(max-width:\s*1180px\)'\)/,
  'height synchronization should use the same breakpoint as the CSS carousel',
)

assert.match(
  component,
  /syncActivePanelHeight/,
  'the comparison scroller should synchronize its height to the active panel',
)

assert.match(
  component,
  /style\.height\s*=/,
  'active-panel height synchronization should update the scroller height',
)

assert.match(
  css,
  /@container\s+unified-panel\s*\(max-width:\s*540px\)[\s\S]*?\.uc-col\s*\{\s*display:\s*none;/,
  'phone-sized unified panels should omit the secondary dashboard columns',
)

assert.match(
  css,
  /@container\s+unified-panel\s*\(max-width:\s*540px\)[\s\S]*?\.uc-stats\s*\{\s*display:\s*none;/,
  'phone-sized unified panels should omit the secondary statistics strip',
)

assert.match(
  css,
  /@container\s+unified-panel\s*\(max-width:\s*540px\)[\s\S]*?\.uc-map\s*\{\s*[^}]*height:\s*180px;/,
  'phone-sized unified panels should use the compact map height',
)

assert.match(
  css,
  /@container\s+unified-panel\s*\(max-width:\s*420px\)[\s\S]*?\.ba-verdict--good\s*\{\s*display:\s*none;/,
  'narrow phone panels should omit the redundant unified verdict card',
)

console.log('before/after responsive regression checks passed')
