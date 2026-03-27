import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { organizationSchema, webSiteSchema } from '@/lib/schema'

export const metadata: Metadata = {
  manifest: '/site.webmanifest',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return (
    <NextIntlClientProvider locale={locale}>
      {/* Set lang attribute server-side before React hydrates */}
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang="${locale}"` }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema()) }}
      />
      <main>
        {children}
      </main>
    </NextIntlClientProvider>
  )
}
