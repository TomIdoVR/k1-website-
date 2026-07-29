import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.4.22'],
  async redirects() {
    return [
      // Legal page slug renamed sitec-911 → 911-michoacan (Aug 2026).
      // Old URL was given to Google Play — keep it working with a permanent redirect.
      {
        source: '/legal/sitec-911',
        destination: '/legal/911-michoacan',
        permanent: true,
      },
      {
        source: '/es/legal/sitec-911',
        destination: '/es/legal/911-michoacan',
        permanent: true,
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
