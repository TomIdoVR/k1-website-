import type { BigChange } from './types'

const store = new Map<string, BigChange & { channel: string; threadTs: string }>()

export function savePending(
  actionId: string,
  change: BigChange,
  channel: string,
  threadTs: string
): void {
  store.set(actionId, { ...change, channel, threadTs })
}

export function getPending(
  actionId: string
): (BigChange & { channel: string; threadTs: string }) | undefined {
  return store.get(actionId)
}

export function deletePending(actionId: string): void {
  store.delete(actionId)
}
