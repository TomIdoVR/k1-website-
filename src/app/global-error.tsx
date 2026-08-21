'use client'

export default function GlobalError() {
  return (
    <html lang="en">
      <body style={{ background: '#0f1724', color: '#e6eef8', fontFamily: 'sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0 }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Something went wrong</h2>
          {/* Deliberately a plain <a>, not next/link. global-error replaces the
              root layout after a crash that took the app shell down with it; a
              soft client navigation would keep that broken React tree alive.
              A full document load is the recovery, so the rule is disabled here
              rather than satisfied. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" style={{ background: '#3b82f6', color: '#fff', padding: '10px 24px', borderRadius: '8px', fontSize: '14px', textDecoration: 'none', display: 'inline-block' }}>
            Back to home
          </a>
        </div>
      </body>
    </html>
  )
}
