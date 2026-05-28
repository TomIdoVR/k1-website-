import { createHmac, timingSafeEqual } from 'crypto'

export function verifySlackSignature(
  signingSecret: string,
  signature: string,
  timestamp: string,
  rawBody: string
): boolean {
  const now = Math.floor(Date.now() / 1000)
  if (Math.abs(now - parseInt(timestamp, 10)) > 300) return false

  const sigBase = `v0:${timestamp}:${rawBody}`
  const hmac = createHmac('sha256', signingSecret)
  hmac.update(sigBase)
  const expected = `v0=${hmac.digest('hex')}`

  try {
    return timingSafeEqual(Buffer.from(expected), Buffer.from(signature))
  } catch {
    return false
  }
}
