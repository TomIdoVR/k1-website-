interface NextStagePanelProps {
  nextLabel: string
  teaser: string
  onClick: () => void
}

export default function NextStagePanel({ nextLabel, teaser, onClick }: NextStagePanelProps) {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-0 bottom-0 z-10 flex flex-col items-start justify-center gap-3 px-8 text-left transition-all hover:bg-blue-950/30"
      style={{
        width: '240px',
        background: 'linear-gradient(to left, rgba(8,16,26,0.85) 0%, transparent 100%)',
        borderLeft: '1px solid rgba(59,158,255,0.15)',
      }}
    >
      <div className="text-xs font-mono tracking-widest uppercase" style={{ color: '#3B9EFF' }}>
        NEXT STAGE ›
      </div>
      <div
        className="text-2xl font-bold uppercase leading-none"
        style={{
          fontFamily: 'var(--font-barlow-condensed), Barlow Condensed, sans-serif',
          fontStyle: 'italic',
          color: '#E0ECF8',
        }}
      >
        {nextLabel}
      </div>
      <div className="text-xs leading-relaxed" style={{ color: '#48647A' }}>
        {teaser}
      </div>
      <div
        className="mt-2 rounded-full px-3 py-1 text-xs font-mono tracking-wider"
        style={{
          background: 'rgba(59,158,255,0.1)',
          border: '1px solid rgba(59,158,255,0.25)',
          color: '#3B9EFF',
        }}
      >
        CLICK TO ADVANCE
      </div>
    </button>
  )
}
