import path from 'node:path'
import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.4.22'],
  /* Pin the workspace root. Turbopack walks up looking for lockfiles, and a
     stray package-lock.json in the home directory makes it pick that as the
     root — module resolution then fails for everything (tailwindcss first). */
  turbopack: { root: path.resolve(import.meta.dirname) },
  /* Keep preview and branch deploys (k1-redesign.vercel.app, staging.kabatone.com)
     out of the index. Production canonicals pointing at kabatone.com are only a
     hint — they do not stop a crawlable staging host being indexed, and these
     hosts were serving `index, follow` with robots.txt allowing everything.

     Deliberately gated on `=== 'preview'` rather than `!== 'production'`: if
     VERCEL_ENV were ever missing or renamed, the fail-safe must be "stay
     indexable", never "de-index production". Local dev is unaffected either way. */
  async headers() {
    if (process.env.VERCEL_ENV !== 'preview') return []
    return [
      {
        source: '/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
    ],
  },
}

export default withNextIntl(nextConfig)
