import type { Metadata } from 'next'
import Privacy911BCS from '@/components/Privacy911BCS'

const APP_NAME = '911 Baja California Sur'
const SLUG = '911-baja-california-sur'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const es = locale === 'es'
  const canonicalEn = `https://kabatone.com/privacy${SLUG}/`
  const canonicalEs = `https://kabatone.com/es/privacy${SLUG}/`

  return {
    title: es
      ? `Aviso de Privacidad — ${APP_NAME} | KabatOne`
      : `Privacy Notice — ${APP_NAME} | KabatOne`,
    description: es
      ? `Aviso de privacidad simplificado de la aplicación ${APP_NAME}, operada por la Secretaría de Seguridad Pública del Estado de Baja California Sur: datos recabados, finalidad, transferencias y derechos ARCO.`
      : `Simplified privacy notice for the ${APP_NAME} app, operated by the Ministry of Public Safety of Baja California Sur: data collected, purpose, transfers, and ARCO rights.`,
    alternates: {
      canonical: es ? canonicalEs : canonicalEn,
      languages: { en: canonicalEn, es: canonicalEs, 'x-default': canonicalEs },
    },
    robots: { index: false, follow: true },
  }
}

export default async function Privacy911BCSPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <Privacy911BCS es={locale === 'es'} />
}
