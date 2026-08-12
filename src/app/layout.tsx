import type { Metadata } from 'next'
import { Space_Grotesk, Barlow_Condensed } from 'next/font/google'
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

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className={`${spaceGrotesk.variable} ${barlowCondensed.variable}`}>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
