import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  /* Required for relative URLs in metadata to resolve. Without it Next falls
     back to the request host, so a relative og:image renders as
     http://localhost:3999/... in dev and can resolve to whatever host served
     the page — and when Next cannot resolve one at all it drops the whole
     openGraph block. */
  metadataBase: new URL('https://kabatone.com'),
  verification: {
    google: 'DTq9cTtA8K66rDO1x_BKB49knpC4BhRobzjiuYtrQk8',
  },
}

/* Pass-through by design. With i18n routing the <html> element lives in
   [locale]/layout.tsx, because that is the first layout that can see the locale
   and therefore the only place lang can be server-rendered correctly. A root
   layout owning <html> sits above the [locale] segment, so it always fell back
   to the default and every Spanish page shipped lang="en".

   Routes outside [locale] — the root not-found and global-error — render their
   own html/body. */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
