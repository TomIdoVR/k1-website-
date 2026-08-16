/* Locale-aware Link: this 404 lives inside [locale], so "back to home" has to
   return a Spanish visitor to /es rather than dropping them on the English
   homepage. */
import { Link } from '@/i18n/navigation'

export default function NotFound() {
  return (
    <div style={{ background: '#0f1724', color: '#e6eef8', fontFamily: 'sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0 }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '8px' }}>404</h1>
        <p style={{ color: '#6b8aad', marginBottom: '24px' }}>Page not found</p>
        <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>← Back to home</Link>
      </div>
    </div>
  )
}
