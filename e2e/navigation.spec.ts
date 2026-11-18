import { test, expect, type Page } from '@playwright/test'

// Collect every internal href inside a container, visible or not (dropdown items
// are hidden until hover but must still resolve).
async function internalHrefs(page: Page, selector: string): Promise<string[]> {
  const hrefs = await page.locator(`${selector} a[href]`).evaluateAll((as) =>
    as.map((a) => a.getAttribute('href') ?? ''),
  )
  return [...new Set(hrefs)].filter(
    (h) => h.startsWith('/') && !h.startsWith('//') && !h.startsWith('/#'),
  )
}

for (const prefix of ['', '/es']) {
  test(`header and footer links resolve (${prefix || 'en'})`, async ({ page, request }) => {
    await page.goto(prefix || '/')
    const hrefs = [...(await internalHrefs(page, 'nav')), ...(await internalHrefs(page, 'footer'))]
    expect(hrefs.length, 'found nav/footer links').toBeGreaterThan(8)

    const failures: string[] = []
    for (const href of [...new Set(hrefs)]) {
      const res = await request.get(href.split('#')[0], { maxRedirects: 5 })
      if (res.status() >= 400) failures.push(`${res.status()} ${href}`)
    }
    expect(failures, 'nav/footer links returning 4xx/5xx').toEqual([])
  })
}

test('language switcher keeps the current page', async ({ page }) => {
  // The EN/ES control is a link on some builds and a button on others, so match either.
  const switcher = (lang: 'EN' | 'ES') =>
    page.locator('nav :is(a, button):visible', { hasText: new RegExp(`^${lang}$`) }).first()

  await page.goto('/k-dispatch')
  await switcher('ES').click()
  await expect(page).toHaveURL(/\/es\/k-dispatch\/?$/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'es')

  await switcher('EN').click()
  await expect(page).toHaveURL(/\/k-dispatch\/?$/)
  await expect(page).not.toHaveURL(/\/es\//)
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
})

test('the nav demo CTA leads to the contact page', async ({ page }) => {
  await page.goto('/')
  await page.locator('nav a[href="/contact"]:visible', { hasText: /book a demo/i }).click()
  await expect(page).toHaveURL(/\/contact\/?$/)
})
