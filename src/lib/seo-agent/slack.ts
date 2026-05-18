import { WebClient, type Block, type KnownBlock } from '@slack/web-api'

function getClient(): WebClient {
  return new WebClient(process.env.SLACK_BOT_TOKEN)
}

export async function replyInThread(
  channel: string,
  threadTs: string,
  text: string
): Promise<void> {
  await getClient().chat.postMessage({ channel, thread_ts: threadTs, text })
}

export async function postApprovalMessage(
  channel: string,
  threadTs: string,
  summary: string,
  actionId: string
): Promise<void> {
  const blocks: (Block | KnownBlock)[] = [
    {
      type: 'section',
      text: { type: 'mrkdwn', text: summary },
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: { type: 'plain_text', text: '✅ Build it', emoji: true },
          style: 'primary',
          action_id: 'approve_big_change',
          value: actionId,
        },
        {
          type: 'button',
          text: { type: 'plain_text', text: '❌ Cancel', emoji: true },
          style: 'danger',
          action_id: 'cancel_big_change',
          value: actionId,
        },
      ],
    },
  ]

  await getClient().chat.postMessage({
    channel,
    thread_ts: threadTs,
    text: summary,
    blocks,
  })
}
