import type { Metadata } from 'next'
import { metadata as enMetadata } from '@/content/en/metadata'
import { metadata as esMetadata } from '@/content/es/metadata'

type PageKey = keyof typeof enMetadata

export function generatePageMetadata(
  pageKey: PageKey,
  locale: string
): Metadata {
  const data = locale === 'es' ? esMetadata : enMetadata
  const page = data[pageKey]
  const enPage = enMetadata[pageKey]
  const esPage = esMetadata[pageKey]

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.canonical,
      languages: {
        'en': enPage.canonical,
        'es': esPage.canonical,
        'x-default': enPage.canonical,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.canonical,
      siteName: 'KabatOne',
      type: 'website',
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      images: [
        {
          url: 'https://kabatone.com/og-default.png',
          width: 1200,
          height: 630,
          alt: 'KabatOne — Public Safety Platform',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: ['https://kabatone.com/og-default.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
