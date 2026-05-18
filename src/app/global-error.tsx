'use client'

export default function GlobalError() {
  return (
    <html lang="en">
      <body style={{ background: '#0f1724', color: '#e6eef8', fontFamily: 'sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0 }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Something went wrong</h2>
          <a href="/" style={{ background: '#3b82f6', color: '#fff', padding: '10px 24px', borderRadius: '8px', fontSize: '14px', textDecoration: 'none', display: 'inline-block' }}>
            Back to home
          </a>
        </div>
      </body>
    </html>
  )
}
