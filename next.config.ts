import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  async rewrites() {
    // In dev (Next.js 16 + Turbopack), middleware rewrites don't fire for
    // paths without locale prefix. These rewrites handle the default locale (en).
    return [
      {
        source: '/',
        destination: '/en/',
      },
      {
        source: '/:path((?!en|es|_next|api)[^.]+.*)',
        destination: '/en/:path',
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
