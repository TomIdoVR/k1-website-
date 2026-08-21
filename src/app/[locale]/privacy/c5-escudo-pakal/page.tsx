import type { Metadata } from 'next'
import AppPrivacyPolicy from '@/components/AppPrivacyPolicy'

const APP_NAME = 'C5 Escudo Pakal'
const SLUG = 'c5-escudo-pakal'
const LAST_UPDATED = { en: 'July 2026', es: 'julio 2026' }

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
      ? `Política de Privacidad — ${APP_NAME} | KabatOne`
      : `Privacy Policy — ${APP_NAME} | KabatOne`,
    description: es
      ? `Aviso de privacidad de la aplicación móvil ${APP_NAME}: qué datos recopilamos, cómo los usamos y protegemos, tus derechos ARCO y cómo eliminar tu cuenta.`
      : `Privacy policy for the ${APP_NAME} mobile app: what data we collect, how we use and protect it, your ARCO rights, and how to delete your account.`,
    alternates: {
      canonical: es ? canonicalEs : canonicalEn,
      languages: { en: canonicalEn, es: canonicalEs, 'x-default': canonicalEn },
    },
    robots: { index: false, follow: true },
  }
}

export default async function C5EscudoPakalPrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return (
    <AppPrivacyPolicy
      appName={APP_NAME}
      slug={SLUG}
      lastUpdated={LAST_UPDATED}
      es={locale === 'es'}
    />
  )
}
