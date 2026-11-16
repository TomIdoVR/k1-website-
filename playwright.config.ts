import { defineConfig, devices } from '@playwright/test'

/**
 * Smoke / regression suite for kabatone.com.
 *
 * Target:
 *   - E2E_BASE_URL set  -> test that deployment (staging, preview or production). No local server.
 *   - E2E_BASE_URL unset -> start `next dev` on :3100 and test that.
 *
 * Deployment-protected previews: set VERCEL_AUTOMATION_BYPASS_SECRET and every request
 * carries the bypass header.
 */
const externalUrl = process.env.E2E_BASE_URL
const baseURL = externalUrl ?? 'http://localhost:3100'
const bypass = process.env.VERCEL_AUTOMATION_BYPASS_SECRET

export default defineConfig({
  testDir: './e2e',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI
    ? [['list'], ['html', { open: 'never' }]]
    : [['list']],
  use: {
    baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    // Hero and section animations must not decide whether a test passes.
    reducedMotion: 'reduce',
    extraHTTPHeaders: bypass
      ? { 'x-vercel-protection-bypass': bypass, 'x-vercel-set-bypass-cookie': 'true' }
      : undefined,
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: externalUrl
    ? undefined
    : {
        command: 'npm run dev -- -p 3100',
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
})
