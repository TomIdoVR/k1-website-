import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
    ],
  },
  async redirects() {
    // Remove explicit /en/ prefix — canonical EN URLs have no prefix.
    // This runs AFTER middleware (which doesn't redirect /en/* in as-needed mode)
    // and BEFORE rewrites, so /en/k-dispatch → 308 → /k-dispatch →
    // rewrite → /en/k-dispatch (internal) → App Router. No loop.
    return [
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return {
      // Runs after middleware, before App Router.
      // Internally rewrites EN paths (no locale prefix) to /en/* so that
      // [locale] App Router segment correctly receives 'en'.
      // Middleware (as-needed) does NOT redirect /k-dispatch → it just sets
      // the locale header, so rewrites get their chance to run.
      beforeFiles: [
        {
          source: '/',
          destination: '/en/',
        },
        {
          // Match any path whose first segment is NOT en, es, api, _next, _vercel
          source: '/:path((?!en|es|api|_next|_vercel).+)',
          destination: '/en/:path',
        },
      ],
    }
  },
}

export default withNextIntl(nextConfig)
