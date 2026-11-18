import { test, expect } from '@playwright/test'

// Money pages + one page per template. Each is checked in both locales.
const PATHS = [
  '/',
  '/k-dispatch',
  '/k-video',
  '/k-safety',
  '/k-traffic',
  '/k-connect',
  '/industries/public-safety',
  '/industries/municipalities',
  '/resources',
  '/resources/how-c5-command-centers-work',
  '/about',
  '/contact',
  '/careers',
]
const LOCALES = [
  { name: 'en', prefix: '' },
  { name: 'es', prefix: '/es' },
]

for (const { name, prefix } of LOCALES) {
  for (const path of PATHS) {
    const url = path === '/' ? prefix || '/' : `${prefix}${path}`

    test(`[${name}] ${url} renders cleanly`, async ({ page, baseURL }) => {
      const pageErrors: string[] = []
      const badResponses: string[] = []
      const origin = new URL(baseURL!).origin

      page.on('pageerror', (err) => pageErrors.push(err.message))
      page.on('response', (res) => {
        // Same-origin assets only: third-party scripts (GA, GTM) are out of our hands.
        if (res.url().startsWith(origin) && res.status() >= 400) {
          badResponses.push(`${res.status()} ${res.url()}`)
        }
      })

      const response = await page.goto(url, { waitUntil: 'domcontentloaded' })
      expect(response?.status(), `status for ${url}`).toBe(200)

      await expect(page.locator('html')).toHaveAttribute('lang', name)
      await expect(page).toHaveTitle(/.+/)
      await expect(page.locator('h1')).toHaveCount(1)
      await expect(page.locator('h1')).toBeVisible()

      // Let hydration and lazy assets settle before judging errors.
      await page.waitForLoadState('load')

      expect(pageErrors, 'uncaught JS errors').toEqual([])
      expect(badResponses, 'same-origin 4xx/5xx responses').toEqual([])
    })
  }
}

test('unknown route returns the 404 page, not a 200', async ({ page }) => {
  const response = await page.goto('/this-page-does-not-exist-e2e')
  expect(response?.status()).toBe(404)
})
