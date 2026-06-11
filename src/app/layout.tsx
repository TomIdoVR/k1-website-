import type { Metadata } from 'next'
import { Space_Grotesk, Barlow_Condensed, DM_Mono } from 'next/font/google'
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
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className={`${spaceGrotesk.variable} ${barlowCondensed.variable} ${dmMono.variable}`}>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
