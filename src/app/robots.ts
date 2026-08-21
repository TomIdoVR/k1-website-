import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Staging (staging.kabatone.com) is a full duplicate of production and was
  // serving `Allow: /`, inviting Google to crawl and consolidate against it.
  // Only an explicit 'preview' signal disallows: production and local dev keep
  // the previous output verbatim, so a missing VERCEL_ENV can never noindex
  // kabatone.com.
  const isPreview = process.env.VERCEL_ENV === 'preview'

  if (isPreview) {
    return {
      rules: { userAgent: '*', disallow: '/' },
    }
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://kabatone.com/sitemap.xml',
  }
}
