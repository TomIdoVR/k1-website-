import { MetadataRoute } from 'next'

const baseUrl = 'https://kabatone.com'

const pages = [
  { path: '', priority: 1.0 },
  { path: '/k-dispatch', priority: 0.9 },
  { path: '/k-video', priority: 0.9 },
  { path: '/k-safety', priority: 0.9 },
  { path: '/k-traffic', priority: 0.7 },
  { path: '/k-connect', priority: 0.7 },
  { path: '/industries/public-safety', priority: 0.7 },
  { path: '/industries/municipalities', priority: 0.7 },
  { path: '/industries/airport', priority: 0.7 },
  { path: '/industries/retail', priority: 0.7 },
  { path: '/industries/logistics', priority: 0.7 },
  { path: '/industries/ports', priority: 0.7 },
  { path: '/industries/stadiums', priority: 0.7 },
  { path: '/about', priority: 0.5 },
  { path: '/contact', priority: 0.5 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    entries.push({
      url: `${baseUrl}${page.path}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${page.path}/`,
          es: `${baseUrl}/es${page.path}/`,
          'x-default': `${baseUrl}${page.path}/`,
        },
      },
    })
    entries.push({
      url: `${baseUrl}/es${page.path}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${page.path}/`,
          es: `${baseUrl}/es${page.path}/`,
          'x-default': `${baseUrl}${page.path}/`,
        },
      },
    })
  }

  return entries
}
