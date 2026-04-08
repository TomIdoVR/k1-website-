interface ModuleTagsProps {
  modules: string[]
}

export default function ModuleTags({ modules }: ModuleTagsProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span
        className="text-xs font-mono tracking-widest uppercase"
        style={{ color: '#48647A' }}
      >
        SYSTEM MODULES
      </span>
      {modules.map((mod) => (
        <span
          key={mod}
          className="rounded-full px-3 py-1 text-xs font-mono tracking-wider"
          style={{
            background: 'rgba(13,24,37,0.85)',
            border: '1px solid rgba(59,158,255,0.2)',
            color: '#7A9DB8',
          }}
        >
          {mod}
        </span>
      ))}
    </div>
  )
}
