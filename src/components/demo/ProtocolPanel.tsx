import Image from 'next/image'
import type { Stage } from '@/data/demo/types'
import StageContent from './StageContent'
import NextStagePanel from './NextStagePanel'
import PIPWindow from './PIPWindow'
import ModuleTags from './ModuleTags'

interface ProtocolPanelProps {
  stage: Stage
  nextStage?: Stage
  onNext: () => void
}

export default function ProtocolPanel({ stage, nextStage, onNext }: ProtocolPanelProps) {
  const steps = stage.protocolSteps ?? []

  return (
    <div
      className="relative w-full flex flex-col"
      style={{ height: 'calc(100vh - 168px - 72px)', background: '#08101A', position: 'relative' }}
    >
      {/* Background image */}
      {stage.backgroundImage && (
        <>
          <Image
            src={stage.backgroundImage}
            alt=""
            fill
            style={{ objectFit: 'cover', opacity: 0.5 }}
            sizes="100vw"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,16,26,0.4)', zIndex: 0 }} />
        </>
      )}

      <div className="flex flex-col flex-1 overflow-hidden px-8 pt-8 pb-4" style={{ position: 'relative', zIndex: 1 }}>
        {/* Panel header */}
        <div className="mb-2">
          <div
            className="text-xs font-mono tracking-widest uppercase mb-1"
            style={{ color: '#3B9EFF' }}
          >
            ACTIVE PROTOCOL
          </div>
          <h2
            className="uppercase leading-none"
            style={{
              fontFamily: 'var(--font-barlow-condensed), Barlow Condensed, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#E0ECF8',
            }}
          >
            LPR HIT PROTOCOL · STOLEN VEHICLE · P1
          </h2>
        </div>

        {/* Progress indicator */}
        <div className="mb-6 flex items-center gap-4">
          <span className="text-xs font-mono tracking-wider" style={{ color: '#48647A' }}>
            4 OF 7 STEPS COMPLETE
          </span>
          <div className="flex-1 rounded-full h-1.5" style={{ background: '#0D1825', maxWidth: '200px' }}>
            <div
              className="rounded-full h-1.5"
              style={{ width: '57%', background: '#3B9EFF' }}
            />
          </div>
        </div>

        {/* Protocol steps */}
        <div
          className="flex-1 rounded-lg overflow-hidden"
          style={{ background: 'rgba(13,24,37,0.65)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(8px)' }}
        >
          {steps.map((step, i) => (
            <div
              key={step.id}
              className="flex items-center gap-4 px-6"
              style={{
                minHeight: '56px',
                borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                borderLeft: step.status === 'active' ? '4px solid #3B9EFF' : '4px solid transparent',
                background: step.status === 'active' ? 'rgba(59,158,255,0.06)' : 'transparent',
              }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                {step.status === 'complete' && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" fill="#00C98A" fillOpacity="0.2" stroke="#00C98A" strokeWidth="1.5" />
                    <path d="M6 10l3 3 5-5" stroke="#00C98A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {step.status === 'active' && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" fill="#3B9EFF" fillOpacity="0.15" stroke="#3B9EFF" strokeWidth="1.5" />
                    <path d="M10 7v3l2 2" stroke="#3B9EFF" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
                {step.status === 'pending' && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" stroke="#1A3050" strokeWidth="1.5" />
                  </svg>
                )}
              </div>

              {/* Step number */}
              <span
                className="text-xs font-mono w-4 flex-shrink-0"
                style={{ color: step.status === 'pending' ? '#1A3050' : '#48647A' }}
              >
                {step.id}
              </span>

              {/* Step text */}
              <span
                className="text-sm"
                style={{
                  color:
                    step.status === 'complete'
                      ? '#7A9DB8'
                      : step.status === 'active'
                      ? '#E0ECF8'
                      : '#1A3050',
                  textDecoration: step.status === 'complete' ? 'line-through' : 'none',
                  textDecorationColor: '#48647A',
                }}
              >
                {step.text}
              </span>

              {/* Active badge */}
              {step.status === 'active' && (
                <span
                  className="ml-auto text-xs font-mono font-semibold tracking-wider rounded-full px-2 py-0.5"
                  style={{
                    background: 'rgba(59,158,255,0.15)',
                    border: '1px solid rgba(59,158,255,0.3)',
                    color: '#3B9EFF',
                  }}
                >
                  ACTIVE
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Bottom section: stage content + module tags */}
        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase mb-1" style={{ color: '#3B9EFF' }}>
              {stage.stageLabel}
            </div>
            <h3
              className="uppercase leading-none mb-2"
              style={{
                fontFamily: 'var(--font-barlow-condensed), Barlow Condensed, sans-serif',
                fontSize: '32px',
                fontWeight: 700,
                fontStyle: 'italic',
                color: '#E0ECF8',
              }}
            >
              {stage.headline}
            </h3>
            <p className="text-sm mb-3" style={{ color: '#7A9DB8', maxWidth: '480px' }}>
              {stage.description}
            </p>
            <div className="flex gap-6">
              {stage.dataPoints.map((dp) => (
                <div key={dp.key}>
                  <div className="text-xs font-mono tracking-widest uppercase" style={{ color: '#48647A' }}>
                    {dp.key}
                  </div>
                  <div className="text-sm font-mono font-semibold" style={{ color: '#E0ECF8' }}>
                    {dp.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ModuleTags modules={stage.modules} />
        </div>
      </div>

      {/* PIP Window */}
      {stage.pipImage && stage.pipLabel && (
        <div className="absolute top-8 right-8 z-20">
          <div
            className="overflow-hidden rounded"
            style={{ width: '220px', border: '1.5px solid #3B9EFF', borderRadius: '6px' }}
          >
            <div
              className="flex items-center gap-2 px-3 py-1.5"
              style={{ background: 'rgba(8,16,26,0.9)', borderBottom: '1px solid rgba(59,158,255,0.25)' }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#FF4560' }} />
              <span className="text-xs font-mono tracking-wider" style={{ color: '#E0ECF8' }}>● LIVE</span>
              <span className="ml-auto text-xs font-mono" style={{ color: '#48647A' }}>{stage.pipLabel}</span>
            </div>
            <div
              className="flex items-center justify-center"
              style={{ height: '124px', background: '#0D1825' }}
            >
              <span className="text-xs font-mono" style={{ color: '#48647A' }}>{stage.pipLabel}</span>
            </div>
          </div>
        </div>
      )}

      {/* Next stage panel */}
      {nextStage && (
        <NextStagePanel
          nextLabel={nextStage.label}
          teaser={stage.nextStageTeaser}
          onClick={onNext}
        />
      )}
    </div>
  )
}
