import { generatePageMetadata } from '@/lib/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return generatePageMetadata('home', locale)
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return (
    <main style={{ padding: '2rem', minHeight: '100vh' }}>
      <h1>
        KabatOne —{' '}
        {locale === 'es' ? 'Plataforma de Seguridad Pública' : 'Public Safety Platform'}
      </h1>
      <p style={{ marginTop: '1rem', color: 'var(--dim)' }}>Migration in progress.</p>
    </main>
  )
}
