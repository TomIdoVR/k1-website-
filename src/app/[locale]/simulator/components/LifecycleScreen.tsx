'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useSimulator } from '../SimulatorApp'
import LifecycleHeader from './lifecycle/LifecycleHeader'
import SideNav from './lifecycle/SideNav'
import StageHeader from './lifecycle/StageHeader'
import NavigationControls from './lifecycle/NavigationControls'
import DetectScreen from './lifecycle/screens/DetectScreen'
import UnderstandVideoScreen from './lifecycle/screens/UnderstandVideoScreen'
import UnderstandGisScreen from './lifecycle/screens/UnderstandGisScreen'
import DecideEventsScreen from './lifecycle/screens/DecideEventsScreen'
import DecideProtocolScreen from './lifecycle/screens/DecideProtocolScreen'
import ActDispatchScreen from './lifecycle/screens/ActDispatchScreen'
import ActResponderScreen from './lifecycle/screens/ActResponderScreen'
import LearnBiScreen from './lifecycle/screens/LearnBiScreen'
import type { LifecycleScreenId } from '@/lib/simulator/types'

const SCREEN_COMPONENTS: Record<LifecycleScreenId, React.ComponentType> = {
  '01-detect': DetectScreen,
  '02a-understand-video': UnderstandVideoScreen,
  '02b-understand-gis': UnderstandGisScreen,
  '03a-decide-events': DecideEventsScreen,
  '03b-decide-protocol': DecideProtocolScreen,
  '04a-act-dispatch': ActDispatchScreen,
  '04b-act-responder': ActResponderScreen,
  '05-learn-bi': LearnBiScreen,
}

export default function LifecycleScreen() {
  const { state, scenario, es } = useSimulator()

  if (!scenario) return null

  const currentIndex = state.lifecycle.currentScreenIndex
  const screenDef = scenario.screens[currentIndex]
  if (!screenDef) return null

  const ScreenComponent = SCREEN_COMPONENTS[screenDef.id]

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: '#050a14',
      overflow: 'hidden',
    }}>
      <LifecycleHeader />

      <div style={{
        display: 'flex',
        flex: 1,
        marginTop: 96,
        overflow: 'hidden',
      }}>
        <SideNav />

        <div style={{
          flex: 1,
          marginLeft: 56,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
          <StageHeader screenDef={screenDef} es={es} />

          <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={screenDef.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{ height: '100%' }}
              >
                <ScreenComponent />
              </motion.div>
            </AnimatePresence>
          </div>

          <NavigationControls />
        </div>
      </div>
    </div>
  )
}
