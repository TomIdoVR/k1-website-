interface LiveTimestampProps {
  time: string
}

export default function LiveTimestamp({ time }: LiveTimestampProps) {
  return (
    <div
      className="absolute top-4 right-4 z-20 font-mono font-bold"
      style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: '28px',
        color: '#E0ECF8',
        textShadow: '0 0 20px rgba(59,158,255,0.5)',
        letterSpacing: '2px',
      }}
    >
      {time}
    </div>
  )
}
