import type { Metadata } from 'next'
import { Space_Grotesk, Barlow_Condensed } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { routing } from '@/i18n/routing'
import { organizationSchema, webSiteSchema } from '@/lib/schema'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import GoogleTagManager, { GoogleTagManagerNoScript } from '@/components/GoogleTagManager'

export const metadata: Metadata = {
  manifest: '/site.webmanifest',
}

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

/* This layout owns <html> so lang can be server-rendered from the route's own
   locale. It used to be set by an inline script — labelled "server-side" but
   actually running in the browser after parse — which left every served
   document with no lang at all for assistive tech and language detection. */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale: rawLocale } = await params
  /* localePrefix is 'as-needed', so English URLs carry no prefix and this
     segment can capture a real path segment instead ("contact", "hero-lab").
     Validate before it reaches lang=, or the document ships lang="contact".
     Mirrors the same guard in src/i18n/request.ts. */
  const locale = (routing.locales as readonly string[]).includes(rawLocale)
    ? rawLocale
    : routing.defaultLocale
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${barlowCondensed.variable}`}
    >
      <body suppressHydrationWarning>
        <a href="#main" className="skip-link">
          {locale === 'es' ? 'Ir al contenido' : 'Skip to content'}
        </a>
        <NextIntlClientProvider locale={locale}>
          <GoogleTagManagerNoScript />
          <GoogleAnalytics />
          <GoogleTagManager />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema()) }}
          />
          <main id="main">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
