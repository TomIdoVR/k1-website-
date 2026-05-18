/**
 * Slack Events API webhook handler.
 * - Verifies HMAC-SHA256 signature
 * - ACKs within 3s
 * - Deduplicates by event_id
 * - Dispatches async processing via next/server `after`
 */

import { after } from "next/server";
import crypto from "crypto";
import { classifyIntent } from "@/lib/seo-agent/intent";
import { patchFile } from "@/lib/seo-agent/github";
import { replyInThread, postApprovalMessage } from "@/lib/seo-agent/slack";
import { assembleContext } from "@/lib/seo-agent/context";
import { savePending } from "@/lib/seo-agent/pending-store";

// In-memory deduplication (per function instance; sufficient for normal Slack retry patterns)
const seenEventIds = new Map<string, number>();
const DEDUP_TTL_MS = 5 * 60 * 1000; // 5 min

function isDuplicate(eventId: string): boolean {
  const now = Date.now();
  // Prune old entries
  for (const [id, ts] of seenEventIds) {
    if (now - ts > DEDUP_TTL_MS) seenEventIds.delete(id);
  }
  if (seenEventIds.has(eventId)) return true;
  seenEventIds.set(eventId, now);
  return false;
}

async function verifySlackSignature(req: Request, rawBody: string): Promise<boolean> {
  const secret = process.env.SLACK_SIGNING_SECRET;
  if (!secret) return false;

  const timestamp = req.headers.get("x-slack-request-timestamp");
  const signature = req.headers.get("x-slack-signature");
  if (!timestamp || !signature) return false;

  // Reject requests older than 5 minutes (replay attack prevention)
  const age = Math.abs(Date.now() / 1000 - parseInt(timestamp, 10));
  if (age > 300) return false;

  const sigBase = `v0:${timestamp}:${rawBody}`;
  const expected =
    "v0=" +
    crypto.createHmac("sha256", secret).update(sigBase).digest("hex");

  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}

async function handleAppMention(event: {
  text: string;
  channel: string;
  ts: string;
  thread_ts?: string;
}): Promise<void> {
  const channel = event.channel;
  const threadTs = event.thread_ts ?? event.ts;

  // Strip the bot mention (@SEO ...) from the message text
  const userMessage = event.text.replace(/<@[A-Z0-9]+>/g, "").trim();

  if (!userMessage) {
    await replyInThread(channel, threadTs, "How can I help with SEO? Ask me anything or say `fix <issue>`.");
    return;
  }

  let context;
  try {
    context = await assembleContext();
  } catch (err) {
    await replyInThread(
      channel,
      threadTs,
      `Sorry, I hit an error assembling context: ${err instanceof Error ? err.message : String(err)}`
    );
    return;
  }

  let result;
  try {
    result = await classifyIntent(userMessage, context, "");
  } catch (err) {
    await replyInThread(
      channel,
      threadTs,
      `Sorry, I hit an error: ${err instanceof Error ? err.message : String(err)}`
    );
    return;
  }

  if (result.type === "question") {
    await replyInThread(channel, threadTs, result.reply);
    return;
  }

  if (result.type === "small_fix" && result.smallFix) {
    try {
      const sha = await patchFile(
        result.smallFix.file,
        result.smallFix.newContent,
        result.smallFix.commitMessage
      );
      await replyInThread(
        channel,
        threadTs,
        `Fixed — staging.kabatone.com — commit \`${sha.slice(0, 7)}\`\n\n_${result.smallFix.description}_`
      );
    } catch (err) {
      await replyInThread(
        channel,
        threadTs,
        `Fix failed: ${err instanceof Error ? err.message : String(err)}`
      );
    }
    return;
  }

  if (result.type === "big_change" && result.bigChange) {
    const actionId = crypto.randomBytes(8).toString("hex");
    savePending(actionId, result.bigChange, channel, threadTs);
    await postApprovalMessage(channel, threadTs, result.bigChange.summary, actionId);
  }
}

export async function POST(req: Request): Promise<Response> {
  const rawBody = await req.text();

  // Verify signature
  const valid = await verifySlackSignature(req, rawBody);
  if (!valid) {
    return new Response("Unauthorized", { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return new Response("Bad Request", { status: 400 });
  }

  // URL verification challenge (Slack one-time handshake)
  if (body.type === "url_verification") {
    return Response.json({ challenge: body.challenge });
  }

  // Deduplicate by event_id
  const eventId = body.event_id as string | undefined;
  if (eventId && isDuplicate(eventId)) {
    return new Response("OK", { status: 200 });
  }

  const event = body.event as
    | { type: string; text: string; channel: string; ts: string; thread_ts?: string }
    | undefined;

  if (event?.type === "app_mention") {
    // ACK immediately, process in background
    after(handleAppMention(event));
  }

  return new Response("OK", { status: 200 });
}
