import { Space_Grotesk, Barlow_Condensed } from 'next/font/google'
import './globals.css'

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
