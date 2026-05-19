/**
 * CCR (Claude Code Runner / Paperclip) dispatcher.
 * Creates a new issue/task in Paperclip so the build agent executes the full spec.
 *
 * Required env vars:
 *   PAPERCLIP_API_URL   — base URL of the Paperclip control plane (e.g. https://paperclip.kabatone.com)
 *   PAPERCLIP_API_KEY   — API key for the Paperclip instance
 *   PAPERCLIP_COMPANY_ID — company UUID in Paperclip
 */

export interface CcrPayload {
  title: string;
  fullSpec: string;
  slackChannel: string;
  slackThreadTs: string;
}

export async function fireCcrAgent(payload: CcrPayload): Promise<string> {
  const baseUrl = process.env.PAPERCLIP_API_URL;
  const apiKey = process.env.PAPERCLIP_API_KEY;
  const companyId = process.env.PAPERCLIP_COMPANY_ID;

  if (!baseUrl || !apiKey || !companyId) {
    throw new Error(
      "CCR env vars not set: PAPERCLIP_API_URL, PAPERCLIP_API_KEY, PAPERCLIP_COMPANY_ID"
    );
  }

  const body = {
    title: `[SEO Agent] ${payload.title}`,
    description: `${payload.fullSpec}\n\n---\nSlack thread: channel=${payload.slackChannel} ts=${payload.slackThreadTs}\nAfter completing, post the staging URL back to this thread.`,
    priority: "medium",
    labels: ["seo-agent", "auto-generated"],
  };

  const res = await fetch(`${baseUrl}/api/companies/${companyId}/issues`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Paperclip issue creation failed (${res.status}): ${err}`);
  }

  const data = (await res.json()) as { id?: string; key?: string };
  return data.key ?? data.id ?? "unknown";
}
