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
        'es-MX': esPage.canonical,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.canonical,
      siteName: 'KabatOne',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
