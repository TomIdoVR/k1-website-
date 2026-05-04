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
  { path: '/resources', priority: 0.7 },
  { path: '/resources/rtcc-setup-guide', priority: 0.6 },
  { path: '/resources/ai-in-public-safety', priority: 0.6 },
  { path: '/resources/what-is-a-public-safety-platform', priority: 0.6 },
  { path: '/resources/psim-vs-unified-platform', priority: 0.6 },
  { path: '/resources/how-c5-command-centers-work', priority: 0.6 },
  { path: '/resources/smart-city-platform-guide', priority: 0.6 },
  { path: '/resources/public-safety-software-municipalities-mexico', priority: 0.6 },
  { path: '/resources/end-of-siloed-response', priority: 0.7 },
  { path: '/resources/what-is-cad-dispatch-software', priority: 0.6 },
  { path: '/resources/what-is-video-management-software', priority: 0.6 },
  { path: '/resources/what-is-a-real-time-crime-center', priority: 0.7 },
  { path: '/resources/what-is-situational-awareness-software', priority: 0.6 },
  { path: '/resources/what-is-gunshot-detection-software', priority: 0.6 },
  { path: '/resources/what-is-a-command-center', priority: 0.6 },
  { path: '/resources/what-is-emergency-management-software', priority: 0.6 },
  { path: '/resources/what-is-a-psap', priority: 0.6 },
  { path: '/resources/what-is-emergency-dispatch-software', priority: 0.6 },
  { path: '/resources/what-is-lpr-license-plate-recognition', priority: 0.6 },
  { path: '/resources/what-is-video-analytics', priority: 0.6 },
  { path: '/resources/what-is-sensor-fusion', priority: 0.6 },
  { path: '/resources/c5-command-centers-mexico-2026', priority: 0.7 },
  { path: '/resources/what-is-incident-management-software', priority: 0.6 },
  { path: '/resources/911-call-center-software-guide', priority: 0.7 },
  { path: '/resources/best-public-safety-software', priority: 0.7 },
  { path: '/resources/build-rtcc-implementation-guide', priority: 0.7 },
  { path: '/resources/public-safety-software-colombia', priority: 0.7 },
  { path: '/resources/public-safety-software-peru', priority: 0.7 },
  { path: '/resources/public-safety-software-small-cities', priority: 0.7 },
  { path: '/resources/public-safety-software-chile', priority: 0.7 },
  { path: '/resources/cad-dispatch-software-latin-america', priority: 0.8 },
  { path: '/integrations/lpr', priority: 0.6 },
  { path: '/integrations/face-recognition', priority: 0.6 },
  { path: '/integrations/sensor-fusion', priority: 0.6 },
  { path: '/integrations/access-control', priority: 0.6 },
  { path: '/integrations/drones', priority: 0.6 },
  { path: '/integrations/panic-buttons', priority: 0.6 },
  { path: '/vs/genetec', priority: 0.7 },
  { path: '/vs/milestone', priority: 0.7 },
  { path: '/vs/vms', priority: 0.7 },
  { path: '/vs/motorola', priority: 0.7 },
  { path: '/vs/hexagon', priority: 0.7 },
  { path: '/vs/mark43', priority: 0.7 },
  { path: '/vs/axon', priority: 0.7 },
  { path: '/vs/carbyne', priority: 0.7 },
  { path: '/vs/cad', priority: 0.7 },
  { path: '/vs/fusus', priority: 0.7 },
  { path: '/vs/prepared911', priority: 0.7 },
  { path: '/vs/peregrine', priority: 0.7 },
  { path: '/vs/rapidssos', priority: 0.7 },
  { path: '/vs/avigilon', priority: 0.7 },
  { path: '/vs/verkada', priority: 0.7 },
  { path: '/vs/verint', priority: 0.7 },
  { path: '/vs/nice-systems', priority: 0.7 },
  { path: '/vs/tyler-technologies', priority: 0.7 },
  { path: '/vs/centralsquare', priority: 0.7 },
  { path: '/vs/shotspotter', priority: 0.7 },
  { path: '/vs/palantir', priority: 0.7 },
  { path: '/about', priority: 0.5 },
  { path: '/contact', priority: 0.5 },
  { path: '/privacy', priority: 0.3 },
  { path: '/simulator', priority: 0.8 },
  { path: '/demo', priority: 0.7 },
  { path: '/demo/lpr', priority: 0.7 },
  { path: '/demo/school', priority: 0.7 },
  { path: '/demo/violence', priority: 0.7 },
  { path: '/demo/medical', priority: 0.7 },
  { path: '/demo/access-control', priority: 0.7 },
  // /lp and /privacy-policy-tamaulipas excluded: pages have noindex — sitemap + noindex is contradictory
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
