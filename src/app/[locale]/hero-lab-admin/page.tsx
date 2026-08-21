import type { Metadata } from 'next'
import HeroV1Screenshot from '@/components/hero-lab/HeroV1Screenshot'
import ImageConcepts from '@/components/hero-lab/ImageConcepts'
import '../hero-lab/hero-lab.css'

/* Internal review route for the upgraded admin-console hero. The console is now
   a real HTML/CSS operations surface (HeroConsoleMock) instead of the flat
   concept-4-admin.webp image that read as "too simplified". Noindex, unlinked —
   exists so the board can review "make the admin more professional" before any
   homepage decision. Delete once the call is made. */
export const metadata: Metadata = {
  title: 'Hero Lab — admin console (internal)',
  robots: { index: false, follow: false },
}

export default async function HeroLabAdminPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  return (
    <>
      <HeroV1Screenshot es={es} />
      <ImageConcepts es={es} />
    </>
  )
}
