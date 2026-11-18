import { test, expect } from '@playwright/test'

test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true })

for (const path of ['/', '/k-dispatch', '/industries/public-safety', '/contact']) {
  test(`mobile: ${path} has no horizontal scroll and a visible headline`, async ({ page }) => {
    await page.goto(path)
    await expect(page.locator('h1')).toBeVisible()
    await page.waitForLoadState('load')

    const overflow = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
    }))
    expect(overflow.scrollWidth, 'page wider than the viewport').toBeLessThanOrEqual(overflow.innerWidth + 1)
  })
}

test('mobile menu opens and reveals the main links', async ({ page }) => {
  await page.goto('/')

  // The toggle differs between builds: a <summary> labelled "Open menu", or a button
  // with aria-label "Toggle menu". Match either.
  const toggle = page
    .locator('nav summary:has-text("Open menu"), nav [aria-label="Toggle menu"]')
    .first()
  await expect(toggle).toBeVisible()

  // Opening the menu must reveal more navigation controls than the closed bar shows.
  const controls = page.locator('nav :is(a, summary, button):visible')
  const before = await controls.count()
  await toggle.click()
  await expect.poll(() => controls.count()).toBeGreaterThan(before)
})
