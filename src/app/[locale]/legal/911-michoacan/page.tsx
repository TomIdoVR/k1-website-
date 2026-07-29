import type { Metadata } from 'next'
import LegalSitec911 from '@/components/LegalSitec911'

const APP_NAME = '911 Michoacán'
const SLUG = '911-michoacan'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const es = locale === 'es'
  const canonicalEn = `https://kabatone.com/legal/${SLUG}/`
  const canonicalEs = `https://kabatone.com/es/legal/${SLUG}/`

  return {
    title: es
      ? `Condiciones de Uso y Política de Privacidad — ${APP_NAME} | KabatOne`
      : `Terms of Use & Privacy Policy — ${APP_NAME} | KabatOne`,
    description: es
      ? `Condiciones de Uso y Política de Privacidad de la aplicación de emergencias ${APP_NAME}, desarrollada por Kabat-One Software Ltd.: licencia de uso, contenido del usuario, responsabilidad, datos recopilados y contacto.`
      : `Terms of Use and Privacy Policy for the ${APP_NAME} emergency app, developed by Kabat-One Software Ltd.: license, user content, liability, data collected, and contact.`,
    alternates: {
      canonical: es ? canonicalEs : canonicalEn,
      languages: { en: canonicalEn, es: canonicalEs, 'x-default': canonicalEs },
    },
    robots: { index: false, follow: true },
  }
}

export default async function LegalSitec911Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <LegalSitec911 es={locale === 'es'} />
}
