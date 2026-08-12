import type { Metadata } from 'next'

type Copy = { title: string; description: string }

/**
 * Locale-aware metadata for the /demo pages.
 *
 * These pages live under `[locale]` but declared a static `export const
 * metadata`, which Next evaluates once per module rather than per locale — so
 * `/es/demo/*` served the *English* canonical. That told Google the six Spanish
 * pages were duplicates of the English ones and should not be indexed, on a
 * site where Spanish pages are among the top earners.
 *
 * They keep inline metadata rather than moving to `generatePageMetadata`
 * because that helper hard-codes the shared `og-default.png`, and each scenario
 * has its own social preview image worth keeping.
 *
 * Canonicals are unslashed, matching v2.314.
 */
export function demoMetadata({
  path,
  locale,
  en,
  es,
  ogImage,
}: {
  path: string
  locale: string
  en: Copy
  es: Copy
  ogImage?: string
}): Metadata {
  const isEs = locale === 'es'
  const copy = isEs ? es : en
  const enUrl = `https://kabatone.com${path}`
  const esUrl = `https://kabatone.com/es${path}`
  const url = isEs ? esUrl : enUrl

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: url,
      languages: { en: enUrl, es: esUrl, 'x-default': enUrl },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url,
      siteName: 'KabatOne',
      type: 'website',
      locale: isEs ? 'es_MX' : 'en_US',
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  }
}
