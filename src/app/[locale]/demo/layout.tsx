import { Space_Mono } from 'next/font/google'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={spaceMono.variable}
      style={{ background: '#08101A', minHeight: '100vh', minWidth: '1280px' }}
    >
      {children}
    </div>
  )
}
