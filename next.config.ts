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
