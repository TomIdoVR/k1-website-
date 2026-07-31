/* Route wrapper for the redesigned K-* solution pages.

   The redesign originally rendered SolutionPage bare, which meant the pages
   carried no site navigation, no footer, and no structured data — one internal
   link versus roughly 40 on the live pages, and zero of the three JSON-LD
   blocks each live page emits. Promoting that would have severed internal link
   equity and dropped SoftwareApplication, FAQ and breadcrumb rich results in a
   single deploy.

   This restores parity: same Nav/Footer as every other page, and the same
   three schema blocks, sourced from the existing helpers in src/lib/schema.ts.
   FAQ schema is emitted only when the content file actually renders FAQs, so
   the markup always reflects visible content. */

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { softwareApplicationSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'
import SolutionPage from './SolutionPage'
import type { SolutionContent } from './solution-content'

export default function SolutionRoute({ p, locale }: { p: SolutionContent; locale: string }) {
  const es = locale === 'es'
  const base = es ? `https://kabatone.com/es/${p.seo.slug}` : `https://kabatone.com/${p.seo.slug}`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: p.name, url: `${base}/` },
  ]

  const faqs = p.faqs?.map((f) => ({
    question: es ? f.q.es : f.q.en,
    answer: es ? f.a.es : f.a.en,
  }))

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationSchema(p.name, es ? p.seo.description.es : p.seo.description.en, p.seo.category, base),
          ),
        }}
      />
      {faqs && faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <SolutionPage p={p} es={es} />
      <Footer es={es} />
    </>
  )
}
