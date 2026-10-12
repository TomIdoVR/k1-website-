// Organization schema for global use
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KabatOne',
    url: 'https://kabatone.com',
    logo: 'https://cdn.prod.website-files.com/67a25cd047d7f58ef27ec3f5/680a90f272b333a28e1a331f_Kabat%20One%20Logo%20horizontal%20v4.png',
    // Leads with dispatch: CAD / K-Dispatch is the 2027+ focus, and this block is emitted
    // site-wide from the layout -- the one entity description every AI crawler reads. (v2.412)
    description: 'KabatOne is a unified public safety platform for governments, municipalities, and emergency response organizations. Its core is K-Dispatch, AI-assisted computer-aided dispatch (CAD) and 911 software for multi-agency police, fire, and EMS response, connected natively to video management, GIS, field operations, and AI analytics in one platform.',
    knowsAbout: [
      'Computer-aided dispatch (CAD)', '911 dispatch', 'NG911', 'Emergency call handling',
      'Multi-agency dispatch', 'C5 command centers', 'Video management systems (VMS)',
      'AI video analytics', 'Real-time crime centers', 'Public safety GIS',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'KabatOne public safety platform',
      itemListElement: [
        ['K-Dispatch', 'https://kabatone.com/k-dispatch', 'AI-assisted CAD and 911 dispatch for police, fire, and EMS'],
        ['K-Safety', 'https://kabatone.com/k-safety', 'Unified situational awareness and operational GIS'],
        ['K-Video', 'https://kabatone.com/k-video', 'Video management (VMS) with AI analytics'],
        ['K-Traffic', 'https://kabatone.com/k-traffic', 'Intelligent traffic management'],
        ['K-Connect', 'https://kabatone.com/k-connect', 'Public-private camera integration'],
      ].map(([name, url, description]) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'SoftwareApplication', name, url, description, applicationCategory: 'BusinessApplication' },
      })),
    },
    foundingDate: '2004',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 80, unitText: 'employees' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cresskill',
      addressRegion: 'NJ',
      addressCountry: 'US',
    },
    areaServed: ['Latin America', 'North America', 'Europe'],
    sameAs: ['https://www.linkedin.com/company/kabatone'],
  }
}

// WebSite schema for sitelinks search box and brand identity
export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'KabatOne',
    url: 'https://kabatone.com',
    publisher: {
      '@type': 'Organization',
      name: 'KabatOne',
      url: 'https://kabatone.com',
    },
    inLanguage: ['en', 'es'],
  }
}

// SoftwareApplication schema for product pages
export function softwareApplicationSchema(
  name: string,
  description: string,
  applicationCategory: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory,
    url,
    operatingSystem: 'Web-based',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Contact for pricing',
    },
    publisher: {
      '@type': 'Organization',
      name: 'KabatOne',
      url: 'https://kabatone.com',
    },
  }
}

// FAQPage schema
export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Article schema for resource/explainer pages
export function articleSchema(
  headline: string,
  description: string,
  url: string,
  datePublished: string = '2026-03-18',
  dateModified: string = datePublished
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: 'KabatOne',
      url: 'https://kabatone.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'KabatOne',
      url: 'https://kabatone.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cdn.prod.website-files.com/67a25cd047d7f58ef27ec3f5/680a90f272b333a28e1a331f_Kabat%20One%20Logo%20horizontal%20v4.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

// BreadcrumbList schema
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// JobPosting schema — makes an open role eligible for the Google Jobs experience.
// `description` must be the full posting as HTML, per Google's requirement.
export function jobPostingSchema(job: {
  title: string
  descriptionHtml: string
  datePosted: string
  validThrough: string
  employmentType: string
  country: string
  region: string
  url: string
  department: string
  workplace: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.descriptionHtml,
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    employmentType: job.employmentType,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'KabatOne',
      sameAs: 'https://kabatone.com',
      logo: 'https://cdn.prod.website-files.com/67a25cd047d7f58ef27ec3f5/680a90f272b333a28e1a331f_Kabat%20One%20Logo%20horizontal%20v4.png',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressRegion: job.region,
        addressCountry: job.country,
      },
    },
    // TELECOMMUTE is for fully-remote roles only. A hybrid role keeps its
    // physical jobLocation and sets no jobLocationType.
    ...(job.workplace === 'REMOTE' ? { jobLocationType: 'TELECOMMUTE' } : {}),
    occupationalCategory: job.department,
    directApply: false,
    url: job.url,
  }
}
