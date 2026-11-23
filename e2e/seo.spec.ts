import { test, expect } from '@playwright/test'

// Guards the invariants the SEO program depends on. Cheap, and the failures
// they catch (a dropped canonical, broken hreflang) are silent in production.

const PAGES = ['/', '/k-dispatch', '/k-video', '/industries/public-safety', '/resources/how-c5-command-centers-work']

for (const path of PAGES) {
  test(`SEO head is intact on ${path} (EN + ES)`, async ({ page }) => {
    await page.goto(path)

    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href')
    expect(canonical, 'canonical').toMatch(/^https:\/\//)

    const hreflangs = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((els) =>
      els.map((e) => e.getAttribute('hreflang')),
    )
    expect(hreflangs).toEqual(expect.arrayContaining(['en', 'es', 'x-default']))

    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.{40,}/)
    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1)

    // Every JSON-LD block must parse, an invalid one silently drops the rich result.
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents()
    expect(blocks.length, 'at least one JSON-LD block').toBeGreaterThan(0)
    for (const raw of blocks) {
      expect(() => JSON.parse(raw), 'JSON-LD parses').not.toThrow()
    }

    // The Spanish twin has its own canonical, distinct from the English one.
    await page.goto(`/es${path === '/' ? '' : path}`)
    const esCanonical = await page.locator('link[rel="canonical"]').getAttribute('href')
    expect(esCanonical, 'ES canonical').toMatch(/^https:\/\//)
    expect(esCanonical).not.toBe(canonical)
  })
}

test('robots.txt, llms.txt and sitemap.xml are served', async ({ request }) => {
  for (const path of ['/robots.txt', '/llms.txt', '/sitemap.xml']) {
    const res = await request.get(path)
    expect(res.status(), path).toBe(200)
  }
})

test('sitemap URLs resolve (sampled)', async ({ request }) => {
  const xml = await (await request.get('/sitemap.xml')).text()
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  expect(locs.length, 'sitemap has URLs').toBeGreaterThan(50)

  // The sitemap hard-codes the production origin; test the same paths on the target under test.
  // Sample ~40 evenly so the whole list is exercised over time without a 250-request run.
  const step = Math.max(1, Math.floor(locs.length / 40))
  const sample = locs.filter((_, i) => i % step === 0)

  const failures: string[] = []
  for (const loc of sample) {
    const { pathname } = new URL(loc)
    const res = await request.get(pathname, { maxRedirects: 5 })
    if (res.status() !== 200) failures.push(`${res.status()} ${pathname}`)
  }
  expect(failures, 'sitemap paths that do not return 200').toEqual([])
})
