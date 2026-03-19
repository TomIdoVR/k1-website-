// Organization schema for global use
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KabatOne',
    url: 'https://kabatone.com',
    logo: 'https://cdn.prod.website-files.com/67a25cd047d7f58ef27ec3f5/680a90f272b333a28e1a331f_Kabat%20One%20Logo%20horizontal%20v4.png',
    description: 'KabatOne is a public safety and smart city software platform serving governments, municipalities, and emergency response organizations. It provides unified situational awareness by connecting video management, CAD/dispatch, GIS, field operations, and AI analytics in one platform.',
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
