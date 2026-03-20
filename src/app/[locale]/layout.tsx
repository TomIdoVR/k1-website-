import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { Space_Grotesk, Barlow_Condensed } from 'next/font/google'
import { organizationSchema } from '@/lib/schema'
import '../globals.css'

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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return (
    <html lang={locale} className={`${spaceGrotesk.variable} ${barlowCondensed.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <NextIntlClientProvider locale={locale}>
          <main>
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
