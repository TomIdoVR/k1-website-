'use client'

import dynamic from 'next/dynamic'

const SimulatorApp = dynamic(() => import('./SimulatorApp'), { ssr: false })

export default function SimulatorLoader({ es }: { es: boolean }) {
  return <SimulatorApp es={es} />
}
