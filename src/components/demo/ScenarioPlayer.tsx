'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import type { ScenarioConfig, StageId } from '@/data/demo/types'
import TopBar from './TopBar'
import BottomNav from './BottomNav'
import StageScreen from './StageScreen'
import ProtocolPanel from './ProtocolPanel'
import SplitLayout from './SplitLayout'
import LearnLayout from './LearnLayout'

const STAGE_IDS: StageId[] = ['detect', 'understand', 'decide', 'act', 'learn']

function isValidStageId(id: string): id is StageId {
  return STAGE_IDS.includes(id as StageId)
}

interface ScenarioPlayerProps {
  scenario: ScenarioConfig
  basePath: string // e.g. '/demo/lpr' or '/demo/violence'
}

export default function ScenarioPlayer({ scenario, basePath }: ScenarioPlayerProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  // Extract locale prefix (e.g. '/en' or '/es') from current URL and prepend to basePath
  const localePrefix = pathname.match(/^\/(en|es)/)?.[0] ?? ''
  const fullBasePath = `${localePrefix}${basePath}`

  const rawStage = searchParams.get('stage') ?? 'detect'
  const initialStage = isValidStageId(rawStage) ? rawStage : 'detect'
  const [currentStageId, setCurrentStageId] = useState<StageId>(initialStage)

  useEffect(() => {
    if (!isValidStageId(rawStage)) {
      router.replace(`${fullBasePath}?stage=detect`)
    }
  }, [rawStage, router, fullBasePath])

  const currentIndex = STAGE_IDS.indexOf(currentStageId)
  const currentStage = scenario.stages[currentIndex]
  const nextStage = currentIndex < scenario.stages.length - 1 ? scenario.stages[currentIndex + 1] : undefined
  const prevStage = currentIndex > 0 ? scenario.stages[currentIndex - 1] : undefined

  const navigateTo = useCallback(
    (stageId: StageId) => {
      setCurrentStageId(stageId)
      router.push(`${fullBasePath}?stage=${stageId}`, { scroll: false })
    },
    [router, fullBasePath]
  )

  const goNext = useCallback(() => { if (nextStage) navigateTo(nextStage.id) }, [nextStage, navigateTo])
  const goPrev = useCallback(() => { if (prevStage) navigateTo(prevStage.id) }, [prevStage, navigateTo])
  const restart = useCallback(() => { navigateTo('detect') }, [navigateTo])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      if (e.key === 'ArrowRight') goNext()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key >= '1' && e.key <= '5') navigateTo(STAGE_IDS[parseInt(e.key) - 1])
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev, navigateTo])

  useEffect(() => {
    if (nextStage?.backgroundImage) {
      const img = new window.Image()
      img.src = nextStage.backgroundImage
    }
  }, [nextStage])

  const isDefaultLayout = currentStage.layout === 'default' || currentStage.layout === 'split' || currentStage.layout === 'learn'

  return (
    <div
      style={{
        background: '#10131b',
        minHeight: '100vh',
        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
        overflowX: 'hidden',
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '-10%',
            width: '40%',
            height: '40%',
            borderRadius: '50%',
            background: 'rgba(173,198,255,0.04)',
            filter: 'blur(120px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            right: '-10%',
            width: '40%',
            height: '40%',
            borderRadius: '50%',
            background: 'rgba(173,198,255,0.04)',
            filter: 'blur(120px)',
          }}
        />
      </div>

      {/* Fixed 3-row header */}
      <TopBar
        incidentBadge={scenario.badgeText}
        currentStage={currentStageId}
        onNavigate={navigateTo}
        activeModules={currentStage.modules}
      />

      {/* Main content — pt-[168px] clears the fixed 3-row header */}
      <main className="demo-main" style={{ position: 'relative', zIndex: 1, paddingTop: '168px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStageId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {currentStage.layout === 'default' && (
              <StageScreen
                stage={currentStage}
                nextStage={nextStage}
                prevStage={prevStage}
                onNext={goNext}
                onPrev={goPrev}
                isFirst={currentIndex === 0}
              />
            )}
            {currentStage.layout === 'protocol' && (
              <ProtocolPanel stage={currentStage} nextStage={nextStage} onNext={goNext} />
            )}
            {currentStage.layout === 'split' && (
              <SplitLayout stage={currentStage} nextStage={nextStage} prevStage={prevStage} onNext={goNext} onPrev={goPrev} />
            )}
            {currentStage.layout === 'learn' && (
              <LearnLayout stage={currentStage} prevStage={prevStage} onPrev={goPrev} onRestart={restart} hubPath={`${localePrefix}/demo`} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* BottomNav only for non-default layouts (protocol / split / learn) */}
      {!isDefaultLayout && (
        <BottomNav
          currentStageIndex={currentIndex}
          totalStages={STAGE_IDS.length}
          prevLabel={prevStage?.label ?? ''}
          nextLabel={nextStage?.label ?? ''}
          nextTeaser={currentStage.nextStageTeaser}
          onPrev={goPrev}
          onNext={goNext}
          onRestart={restart}
        />
      )}
    </div>
  )
}
