/**
 * Slack Interactive Components handler.
 * Handles ✅/❌ button clicks from big-change previews.
 */

import crypto from "crypto";
import { after } from "next/server";
import { getPending, deletePending } from "@/lib/seo-agent/pending-store";
import { commitFiles } from "@/lib/seo-agent/github";
import { replyInThread } from "@/lib/seo-agent/slack";

async function verifySlackSignature(req: Request, rawBody: string): Promise<boolean> {
  const secret = process.env.SLACK_SIGNING_SECRET;
  if (!secret) return false;

  const timestamp = req.headers.get("x-slack-request-timestamp");
  const signature = req.headers.get("x-slack-signature");
  if (!timestamp || !signature) return false;

  const age = Math.abs(Date.now() / 1000 - parseInt(timestamp, 10));
  if (age > 300) return false;

  const sigBase = `v0:${timestamp}:${rawBody}`;
  const expected =
    "v0=" + crypto.createHmac("sha256", secret).update(sigBase).digest("hex");

  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}

interface SlackInteractivePayload {
  type: string;
  actions?: Array<{ action_id: string; value: string }>;
  container?: { channel_id: string; thread_ts?: string; message_ts?: string };
  channel?: { id: string };
  message?: { thread_ts?: string; ts?: string };
}

async function handleApproval(actionId: string, channel: string, threadTs: string): Promise<void> {
  const pending = getPending(actionId);
  if (!pending) {
    await replyInThread(channel, threadTs, "Sorry, this preview has expired. Please re-run your request.");
    return;
  }

  deletePending(actionId);

  try {
    const sha = await commitFiles(pending.files, pending.commitMessage);
    await replyInThread(
      channel,
      threadTs,
      `Build complete — staging.kabatone.com — commit \`${sha.slice(0, 7)}\``
    );
  } catch (err) {
    await replyInThread(
      channel,
      threadTs,
      `Build failed: ${err instanceof Error ? err.message : String(err)}`
    );
  }
}

async function handleCancel(actionId: string, channel: string, threadTs: string): Promise<void> {
  deletePending(actionId);
  await replyInThread(channel, threadTs, "Cancelled. No changes were made.");
}

export async function POST(req: Request): Promise<Response> {
  const rawBody = await req.text();

  const valid = await verifySlackSignature(req, rawBody);
  if (!valid) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Slack sends interactive payloads as URL-encoded `payload=<JSON>`
  const params = new URLSearchParams(rawBody);
  const payloadStr = params.get("payload");
  if (!payloadStr) {
    return new Response("Bad Request", { status: 400 });
  }

  let payload: SlackInteractivePayload;
  try {
    payload = JSON.parse(payloadStr);
  } catch {
    return new Response("Bad Request", { status: 400 });
  }

  if (payload.type !== "block_actions" || !payload.actions?.length) {
    return new Response("OK", { status: 200 });
  }

  const action = payload.actions[0];
  const actionId = action.value;
  const channel =
    payload.channel?.id ?? payload.container?.channel_id ?? "";
  const threadTs =
    payload.message?.thread_ts ?? payload.message?.ts ?? payload.container?.thread_ts ?? "";

  if (action.action_id === "approve_big_change") {
    after(handleApproval(actionId, channel, threadTs));
  } else if (action.action_id === "cancel_big_change") {
    after(handleCancel(actionId, channel, threadTs));
  }

  // ACK immediately to Slack
  return new Response("", { status: 200 });
}
