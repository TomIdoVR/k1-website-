import { Manrope, Space_Mono } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${manrope.variable} ${spaceMono.variable}`}
      style={{ background: '#10131b', minHeight: '100vh' }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
            .material-symbols-outlined {
              font-family: 'Material Symbols Outlined';
              font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
            }
            .scrollbar-hide::-webkit-scrollbar { display: none; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            .glass-panel { background: rgba(16,19,27,0.4); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.05); }
            .stage-transition { transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
          `,
        }}
      />
      {children}
    </div>
  )
}
