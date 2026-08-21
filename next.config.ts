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
    /* Baseline security headers, on every environment.

       These four are enforced because they cannot break a site that does not
       use the features they restrict, and this one does not: no <iframe>
       embeds anywhere in src, and no geolocation, getUserMedia, mediaDevices,
       PaymentRequest or WebUSB calls. Each was checked before being denied
       rather than copied from a template. */
    const security = [
      /* Stops a browser second-guessing a declared Content-Type, which is the
         vector behind "upload a .jpg, get it executed as script". */
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      /* Clickjacking. frame-ancestors in the CSP below is the modern control,
         but X-Frame-Options is still what older browsers honour. */
      { key: 'X-Frame-Options', value: 'DENY' },
      /* Send the full URL within our own origin, only the origin cross-site,
         and nothing at all when downgrading to http. Referrer data still
         reaches analytics for same-site navigation. */
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()' },
    ]

    /* CSP ships in Report-Only first, deliberately.

       An enforcing CSP that is even slightly wrong takes out GTM, GA, the
       Formspree lead POST, or the fonts — silently, in production, on the
       launch that this policy is meant to protect. Report-Only applies the
       exact same policy and reports violations without blocking anything, so
       the allowlist can be proven against real traffic first.

       The allowlist is built from the hosts actually referenced in src:
       googletagmanager + google-analytics (GTM/GA4), formspree.io (the lead
       form's POST target), fonts.googleapis/gstatic (next/font), unpkg and
       commondatastorage.googleapis.com (demo/simulator assets), the Webflow
       CDN in images.remotePatterns, and api.github.com.

       'unsafe-inline' and 'unsafe-eval' are present because GTM requires
       both and Next injects inline styles; tightening those needs nonces,
       which is a separate piece of work and not a launch blocker.

       TO ENFORCE: rename the key to 'Content-Security-Policy' once the
       report endpoint has been quiet across a normal traffic day. */
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://unpkg.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://cdn.prod.website-files.com https://www.googletagmanager.com https://www.google-analytics.com",
      "media-src 'self' https://commondatastorage.googleapis.com",
      /* Wildcards, not just www.google-analytics.com. GA4 does not post to a
         single host: it picks a regional collector — region1.google-analytics.com
         was observed live — so an allowlist naming only the www host lets the
         page load while quietly dropping every hit. Report-Only caught this
         before it could be enforced; an enforcing policy would have taken out
         analytics in production with no visible symptom. */
      "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://formspree.io https://api.github.com",
      "form-action 'self' https://formspree.io",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join('; ')

    /* vercel.live is the preview feedback toolbar. It is injected only on
       preview deploys, so it is allowed only there rather than widening the
       production policy for something production never loads. */
    const previewCsp = csp
      .replace("script-src 'self'", "script-src 'self' https://vercel.live")
      .concat("; frame-src 'self' https://vercel.live")

    const common = [...security, { key: 'Content-Security-Policy-Report-Only', value: csp }]

    /* Keep preview and branch deploys (k1-redesign.vercel.app, staging.kabatone.com)
       out of the index. Production canonicals pointing at kabatone.com are only a
       hint — they do not stop a crawlable staging host being indexed, and these
       hosts were serving `index, follow` with robots.txt allowing everything.

       Deliberately gated on `=== 'preview'` rather than `!== 'production'`: if
       VERCEL_ENV were ever missing or renamed, the fail-safe must be "stay
       indexable", never "de-index production". Local dev is unaffected either way. */
    const headers =
      process.env.VERCEL_ENV === 'preview'
        ? [
            ...security,
            { key: 'Content-Security-Policy-Report-Only', value: previewCsp },
            { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          ]
        : common

    return [{ source: '/:path*', headers }]
  },
  /* From main. Both sides added a top-level key here and git read the two as
     one conflict; they are unrelated and both are required. Dropping these
     would 404 a URL that was handed to Google Play. */
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
