import type { Metadata } from 'next'
import { metadata as enMetadata } from '@/content/en/metadata'
import { metadata as esMetadata } from '@/content/es/metadata'

type PageKey = keyof typeof enMetadata

// Indexation triage (2026-07-07): non-ICP country pages are set to noindex to reclaim
// crawl budget and lift the site-wide indexed ratio (75% were not indexed). We keep only
// Mexico + LATAM + US/Canada markets indexed; everything else here is noindex,follow.
// See SEO/indexation-triage-plan.md. Reversible — remove a key to re-index it.
export const NOINDEX_KEYS = new Set<string>([
  'publicSafetySoftwareAlbania', 'publicSafetySoftwareAlgeria', 'publicSafetySoftwareAngola',
  'publicSafetySoftwareAustralia', 'publicSafetySoftwareAustria', 'publicSafetySoftwareBahamas',
  'publicSafetySoftwareBangladesh', 'publicSafetySoftwareBarbados', 'publicSafetySoftwareBelgium',
  'publicSafetySoftwareBenin', 'publicSafetySoftwareBosniaHerzegovina', 'publicSafetySoftwareBotswana',
  'publicSafetySoftwareBulgaria', 'publicSafetySoftwareBurkinaFaso', 'publicSafetySoftwareBurundi',
  'publicSafetySoftwareCameroon', 'publicSafetySoftwareCapeVerde', 'publicSafetySoftwareCentralAfricanRepublic',
  'publicSafetySoftwareChad', 'publicSafetySoftwareComoros', 'publicSafetySoftwareCroatia',
  'publicSafetySoftwareCyprus', 'publicSafetySoftwareCzechRepublic', 'publicSafetySoftwareDRC',
  'publicSafetySoftwareDenmark', 'publicSafetySoftwareDjibouti', 'publicSafetySoftwareEgypt',
  'publicSafetySoftwareEquatorialGuinea', 'publicSafetySoftwareEritrea', 'publicSafetySoftwareEstonia',
  'publicSafetySoftwareEswatini', 'publicSafetySoftwareEthiopia', 'publicSafetySoftwareFinland',
  'publicSafetySoftwareFrance', 'publicSafetySoftwareGabon', 'publicSafetySoftwareGambia',
  'publicSafetySoftwareGermany', 'publicSafetySoftwareGhana', 'publicSafetySoftwareGreece',
  'publicSafetySoftwareGuinea', 'publicSafetySoftwareGuineaBissau', 'publicSafetySoftwareHungary',
  'publicSafetySoftwareIceland', 'publicSafetySoftwareIndia', 'publicSafetySoftwareIndonesia',
  'publicSafetySoftwareIraq', 'publicSafetySoftwareIreland', 'publicSafetySoftwareIsrael',
  'publicSafetySoftwareItaly', 'publicSafetySoftwareIvoryCoast', 'publicSafetySoftwareJamaica',
  'publicSafetySoftwareJapan', 'publicSafetySoftwareJordan', 'publicSafetySoftwareKenya',
  'publicSafetySoftwareKuwait', 'publicSafetySoftwareLatvia', 'publicSafetySoftwareLesotho',
  'publicSafetySoftwareLiberia', 'publicSafetySoftwareLibya', 'publicSafetySoftwareLithuania',
  'publicSafetySoftwareLuxembourg', 'publicSafetySoftwareMadagascar', 'publicSafetySoftwareMalawi',
  'publicSafetySoftwareMalaysia', 'publicSafetySoftwareMali', 'publicSafetySoftwareMalta',
  'publicSafetySoftwareMauritania', 'publicSafetySoftwareMauritius', 'publicSafetySoftwareMiddleEast',
  'publicSafetySoftwareMontenegro', 'publicSafetySoftwareMorocco', 'publicSafetySoftwareMozambique',
  'publicSafetySoftwareNamibia', 'publicSafetySoftwareNetherlands', 'publicSafetySoftwareNiger',
  'publicSafetySoftwareNigeria', 'publicSafetySoftwareNorthMacedonia', 'publicSafetySoftwareNorway',
  'publicSafetySoftwareOman', 'publicSafetySoftwarePakistan', 'publicSafetySoftwarePhilippines',
  'publicSafetySoftwarePoland', 'publicSafetySoftwarePortugal', 'publicSafetySoftwareQatar',
  'publicSafetySoftwareRepublicOfCongo', 'publicSafetySoftwareRomania', 'publicSafetySoftwareRwanda',
  'publicSafetySoftwareSaoTomeAndPrincipe', 'publicSafetySoftwareSaudiArabia', 'publicSafetySoftwareSenegal',
  'publicSafetySoftwareSerbia', 'publicSafetySoftwareSeychelles', 'publicSafetySoftwareSierraLeone',
  'publicSafetySoftwareSingapore', 'publicSafetySoftwareSlovakia', 'publicSafetySoftwareSlovenia',
  'publicSafetySoftwareSomalia', 'publicSafetySoftwareSouthAfrica', 'publicSafetySoftwareSouthKorea',
  'publicSafetySoftwareSouthSudan', 'publicSafetySoftwareSpain', 'publicSafetySoftwareSudan',
  'publicSafetySoftwareSweden', 'publicSafetySoftwareSwitzerland', 'publicSafetySoftwareTanzania',
  'publicSafetySoftwareThailand', 'publicSafetySoftwareTogo', 'publicSafetySoftwareTrinidadAndTobago',
  'publicSafetySoftwareTunisia', 'publicSafetySoftwareTurkey', 'publicSafetySoftwareUAE',
  'publicSafetySoftwareUganda', 'publicSafetySoftwareUnitedKingdom', 'publicSafetySoftwareVietnam',
  'publicSafetySoftwareZambia', 'publicSafetySoftwareZimbabwe',
])

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
      index: !NOINDEX_KEYS.has(pageKey as string),
      follow: true,
    },
  }
}
