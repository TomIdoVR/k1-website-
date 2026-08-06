/* Renders its own html/body: this is the not-found for routes outside the
   [locale] segment, and the root layout is now a pass-through that provides
   neither. */
export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
    <div style={{ background: '#0f1724', color: '#e6eef8', fontFamily: 'sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0 }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '8px' }}>404</h1>
        <p style={{ color: '#6b8aad', marginBottom: '24px' }}>Page not found</p>
        <a href="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>← Back to home</a>
          </div>
        </div>
      </body>
    </html>
  )
}
