import type { Metadata } from 'next'
import { Space_Grotesk, Barlow_Condensed } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
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
