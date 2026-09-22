'use client'

import { useEffect } from 'react'
import { captureAttribution } from '@/lib/attribution'

/**
 * Records where this visit came from, once per page load. Mounted in the root
 * layout so a candidate who lands anywhere on the site — not only on a job
 * page — still carries their source into an application. Renders nothing.
 */
export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution()
  }, [])
  return null
}
