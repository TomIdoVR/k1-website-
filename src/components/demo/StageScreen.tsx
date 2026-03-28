import Image from 'next/image'
import type { Stage } from '@/data/demo/types'
import StageContent from './StageContent'
import NextStagePanel from './NextStagePanel'
import PIPWindow from './PIPWindow'
import LiveTimestamp from './LiveTimestamp'
import ModuleTags from './ModuleTags'

interface StageScreenProps {
  stage: Stage
  nextStage?: Stage
  onNext: () => void
  isFirst: boolean
}

export default function StageScreen({ stage, nextStage, onNext, isFirst }: StageScreenProps) {
  return (
    <div className="relative w-full flex flex-col" style={{ height: 'calc(100vh - 60px - 44px - 72px)' }}>
      {/* Background image */}
      {stage.backgroundImage ? (
        <div className="absolute inset-0">
          <Image
            src={stage.backgroundImage}
            alt={stage.stageLabel}
            fill
            className="object-cover"
            priority={isFirst}
            sizes="100vw"
          />
          {/* Dark overlay for readability */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(8,16,26,0.4) 0%, rgba(8,16,26,0.15) 50%, rgba(8,16,26,0.3) 100%)' }}
          />
        </div>
      ) : (
        <div className="absolute inset-0" style={{ background: '#08101A' }} />
      )}

      {/* Live badge — top left */}
      {isFirst && (
        <div
          className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full px-3 py-1.5"
          style={{
            background: 'rgba(255,69,96,0.15)',
            border: '1px solid rgba(255,69,96,0.35)',
          }}
        >
          <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: '#FF4560' }} />
          <span className="text-xs font-mono font-semibold tracking-widest" style={{ color: '#E0ECF8' }}>
            ● LIVE MONITORING ACTIVE
          </span>
        </div>
      )}

      {/* Timestamp — top right */}
      <LiveTimestamp time={stage.timestamp} />

      {/* PIP Window */}
      {stage.pipImage && stage.pipLabel && (
        <PIPWindow image={stage.pipImage} label={stage.pipLabel} />
      )}

      {/* Content overlay — bottom left */}
      <StageContent
        stageLabel={stage.stageLabel}
        headline={stage.headline}
        description={stage.description}
        dataPoints={stage.dataPoints}
      />

      {/* Next stage panel — right side (only if not last) */}
      {nextStage && (
        <NextStagePanel
          nextLabel={nextStage.label}
          teaser={stage.nextStageTeaser}
          onClick={onNext}
        />
      )}

      {/* Module tags — bottom, above BottomNav */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 flex items-center px-8 py-3"
        style={{ background: 'rgba(8,16,26,0.7)' }}
      >
        <ModuleTags modules={stage.modules} />
      </div>
    </div>
  )
}
