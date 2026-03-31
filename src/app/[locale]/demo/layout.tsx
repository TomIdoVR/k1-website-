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

            /* ── Mobile responsiveness ── */
            @media (max-width: 768px) {
              /* TopBar */
              .demo-header-row1 { padding: 0 16px !important; height: 52px !important; }
              .demo-incident-badge { display: none !important; }
              .demo-header-row2 { overflow-x: auto !important; justify-content: flex-start !important; padding: 0 12px 8px !important; -ms-overflow-style: none; scrollbar-width: none; }
              .demo-header-row2::-webkit-scrollbar { display: none; }
              .demo-stage-pill { padding: 5px 14px !important; }
              .demo-stage-chevron { display: none !important; }
              .demo-header-row3 { display: none !important; }

              /* ScenarioPlayer main */
              .demo-main { padding-top: 108px !important; }

              /* StageScreen cinematic panel */
              .demo-stage-panel { width: 96vw !important; height: 54vw !important; min-height: 200px !important; max-height: 52vh !important; }

              /* PiP windows */
              .demo-pip { width: 110px !important; }
              .demo-pip-0 { bottom: 8px !important; right: 8px !important; }
              .demo-pip-1 { bottom: 128px !important; right: 8px !important; }

              /* Stage nav buttons — stack vertically */
              .demo-stage-nav { flex-direction: column !important; align-items: stretch !important; gap: 8px !important; padding: 0 16px !important; margin-top: 16px !important; }

              /* SplitLayout */
              .demo-split-root { height: auto !important; overflow: visible !important; margin-bottom: 0 !important; }
              .demo-split-header { padding: 12px 16px 10px !important; }
              .demo-split-eta { display: none !important; }
              .demo-split-body { flex-direction: column !important; overflow: visible !important; }
              .demo-split-left { width: 100% !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06) !important; padding: 12px 16px 0 !important; max-height: 520px !important; }
              .demo-split-right { width: 100% !important; flex: unset !important; }
              .demo-split-units { max-height: 200px !important; }
              .demo-split-map { height: 220px !important; }
              .demo-split-footer { padding: 12px 16px !important; flex-direction: column !important; gap: 8px !important; }
              .demo-split-footer button { justify-content: center !important; }

              /* LearnLayout */
              .demo-learn-root { height: auto !important; overflow: visible !important; margin-bottom: 0 !important; }
              .demo-learn-header { padding: 12px 16px 10px !important; }
              .demo-learn-resolved-badge span:last-child { display: none !important; }
              .demo-learn-body { flex-direction: column !important; overflow: visible !important; }
              .demo-learn-left { width: 100% !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06) !important; max-height: 400px !important; }
              .demo-learn-center { width: 100% !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06) !important; }
              .demo-learn-right { width: 100% !important; }
              .demo-learn-footer { padding: 12px 16px !important; flex-direction: column !important; gap: 8px !important; }
              .demo-learn-footer button, .demo-learn-footer a { justify-content: center !important; }
            }

            @media (max-width: 480px) {
              .demo-header-row1 { height: 48px !important; }
              .demo-stage-pill { padding: 4px 11px !important; font-size: 9px !important; }
              .demo-stage-panel { height: 56vw !important; }
              .demo-pip { display: none !important; }
            }
          `,
        }}
      />
      {children}
    </div>
  )
}
