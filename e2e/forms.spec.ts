import { test, expect } from '@playwright/test'

// Both forms are stubbed at the network layer: the suite must never create a real
// lead in Formspree or send a real application to Slack/email.

const FORMSPREE = '**/formspree.io/f/**'
const CAREERS_API = '**/api/careers/apply'
const JOB = '/careers/tech-lead-next-generation-public-safety-platform'

// A screening question is a <fieldset> in some builds and a div[role=group] in others.
const QUESTION_GROUP = ':is(fieldset, [role="group"]):has(input[type="radio"])'

test.describe('contact form (single step, Formspree)', () => {
  test('submits and shows the confirmation (EN)', async ({ page }) => {
    const posts: string[] = []
    await page.route(FORMSPREE, async (route) => {
      posts.push(route.request().postData() ?? '')
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' })
    })

    await page.goto('/contact')
    const form = page.locator('form:has(select[name="region"])')
    await form.locator('input[name="name"]').fill('E2E Test')
    await form.locator('input[name="email"]').fill('e2e@example.com')
    await form.locator('select[name="region"]').selectOption({ index: 1 })
    await form.locator('textarea[name="message"]').fill('Automated smoke test, please ignore.')
    await form.locator('button[type="submit"]').click()

    await expect(page.getByText('Message Sent!')).toBeVisible()
    expect(posts).toHaveLength(1)
    expect(posts[0]).toContain('e2e@example.com')
  })

  test('shows the Spanish confirmation (ES)', async ({ page }) => {
    await page.route(FORMSPREE, (route) =>
      route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' }),
    )
    await page.goto('/es/contact')
    const form = page.locator('form:has(select[name="region"])')
    await form.locator('input[name="name"]').fill('Prueba E2E')
    await form.locator('input[name="email"]').fill('e2e@example.com')
    await form.locator('select[name="region"]').selectOption({ index: 1 })
    await form.locator('button[type="submit"]').click()
    await expect(page.getByText('¡Mensaje Enviado!')).toBeVisible()
  })

  test('shows an error and keeps the form when Formspree fails', async ({ page }) => {
    await page.route(FORMSPREE, (route) => route.fulfill({ status: 500, body: 'fail' }))
    await page.goto('/contact')
    const form = page.locator('form:has(select[name="region"])')
    await form.locator('input[name="name"]').fill('E2E Test')
    await form.locator('input[name="email"]').fill('e2e@example.com')
    await form.locator('select[name="region"]').selectOption({ index: 1 })
    await form.locator('button[type="submit"]').click()

    await expect(page.getByText(/Something went wrong/)).toBeVisible()
    await expect(form.locator('input[name="email"]')).toHaveValue('e2e@example.com')
  })

  test('required fields block submission', async ({ page }) => {
    let called = false
    await page.route(FORMSPREE, (route) => {
      called = true
      return route.fulfill({ status: 200, body: '{}' })
    })
    await page.goto('/contact')
    await page.locator('form:has(select[name="region"]) button[type="submit"]').click()
    await expect(page.getByText('Message Sent!')).toHaveCount(0)
    expect(called).toBe(false)
  })
})

test.describe('careers application (two steps with screening questions)', () => {
  test('details -> questions -> submit', async ({ page }) => {
    let body = ''
    await page.route(CAREERS_API, async (route) => {
      body = route.request().postData() ?? ''
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' })
    })

    await page.goto(JOB)
    const form = page.locator('form:has(#af-name)')
    await form.locator('#af-name').fill('E2E Candidate')
    await form.locator('#af-email').fill('e2e@example.com')
    await form.locator('#af-cv-link').fill('https://example.com/cv.pdf')

    // Step 1 -> step 2
    await form.locator('button[type="submit"]').click()
    const questions = form.locator(QUESTION_GROUP)
    await expect(questions.first()).toBeVisible()
    expect(await questions.count()).toBeGreaterThanOrEqual(2)

    // Answer every question, then submit.
    for (let i = 0; i < (await questions.count()); i++) {
      await questions.nth(i).getByRole('radio', { name: 'Yes' }).check({ force: true })
    }
    await form.locator('button[type="submit"]').click()

    await expect(page.getByText('Application sent!')).toBeVisible()
    expect(body).toContain('e2e@example.com')
    expect(body).toMatch(/q_greenfield/)
  })

  test('cannot skip a screening question', async ({ page }) => {
    let called = false
    await page.route(CAREERS_API, (route) => {
      called = true
      return route.fulfill({ status: 200, body: '{}' })
    })

    await page.goto(JOB)
    const form = page.locator('form:has(#af-name)')
    await form.locator('#af-name').fill('E2E Candidate')
    await form.locator('#af-email').fill('e2e@example.com')
    await form.locator('#af-cv-link').fill('https://example.com/cv.pdf')
    await form.locator('button[type="submit"]').click()
    await expect(form.locator(QUESTION_GROUP).first()).toBeVisible()

    // Submit with nothing answered.
    await form.locator('button[type="submit"]').click()
    await expect(page.getByText('Application sent!')).toHaveCount(0)
    expect(called).toBe(false)
  })
})
