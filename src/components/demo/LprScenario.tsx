'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import type { StageId } from '@/data/demo/types'
import { lprScenario } from '@/data/demo/lpr'
import TopBar from './TopBar'
import StageNav from './StageNav'
import BottomNav from './BottomNav'
import StageScreen from './StageScreen'
import ProtocolPanel from './ProtocolPanel'
import SplitLayout from './SplitLayout'
import LearnLayout from './LearnLayout'

const STAGE_IDS: StageId[] = ['detect', 'understand', 'decide', 'act', 'learn']

function isValidStageId(id: string): id is StageId {
  return STAGE_IDS.includes(id as StageId)
}

export default function LprScenario() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const rawStage = searchParams.get('stage') ?? 'detect'
  const initialStage = isValidStageId(rawStage) ? rawStage : 'detect'
  const [currentStageId, setCurrentStageId] = useState<StageId>(initialStage)

  // Redirect to detect if invalid param on mount
  useEffect(() => {
    if (!isValidStageId(rawStage)) {
      router.replace('/demo/lpr?stage=detect')
    }
  }, [rawStage, router])

  const currentIndex = STAGE_IDS.indexOf(currentStageId)
  const currentStage = lprScenario.stages[currentIndex]
  const nextStage = currentIndex < lprScenario.stages.length - 1 ? lprScenario.stages[currentIndex + 1] : undefined
  const prevStage = currentIndex > 0 ? lprScenario.stages[currentIndex - 1] : undefined

  const navigateTo = useCallback(
    (stageId: StageId) => {
      setCurrentStageId(stageId)
      router.push(`/demo/lpr?stage=${stageId}`, { scroll: false })
    },
    [router]
  )

  const goNext = useCallback(() => {
    if (nextStage) navigateTo(nextStage.id)
  }, [nextStage, navigateTo])

  const goPrev = useCallback(() => {
    if (prevStage) navigateTo(prevStage.id)
  }, [prevStage, navigateTo])

  const restart = useCallback(() => {
    navigateTo('detect')
  }, [navigateTo])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return

      if (e.key === 'ArrowRight') goNext()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key >= '1' && e.key <= '5') {
        const idx = parseInt(e.key) - 1
        navigateTo(STAGE_IDS[idx])
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev, navigateTo])

  // Image prefetching
  useEffect(() => {
    // Prefetch next stage image
    if (nextStage?.backgroundImage) {
      const img = new window.Image()
      img.src = nextStage.backgroundImage
    }
  }, [nextStage])

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ background: '#08101A', minWidth: '1280px' }}
    >
      <TopBar incidentBadge={lprScenario.badgeText} />
      <StageNav currentStage={currentStageId} onNavigate={navigateTo} />

      {/* Stage content with fade transition */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStageId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            {currentStage.layout === 'default' && (
              <StageScreen
                stage={currentStage}
                nextStage={nextStage}
                onNext={goNext}
                isFirst={currentIndex === 0}
              />
            )}
            {currentStage.layout === 'protocol' && (
              <ProtocolPanel
                stage={currentStage}
                nextStage={nextStage}
                onNext={goNext}
              />
            )}
            {currentStage.layout === 'split' && (
              <SplitLayout
                stage={currentStage}
                nextStage={nextStage}
                onNext={goNext}
              />
            )}
            {currentStage.layout === 'learn' && (
              <LearnLayout stage={currentStage} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

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
    </div>
  )
}
