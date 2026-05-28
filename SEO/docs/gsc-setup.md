# Google Search Console — Service Account Setup

One-time setup so the `kabatone-seo-audit` skill can pull GSC data programmatically.

**Time required:** ~10 minutes
**Cost:** $0 (all APIs used here are free under normal usage)

---

## Step 1 — Create a GCP project (skip if you already have one)

1. Open https://console.cloud.google.com/projectcreate
2. Project name: `kabatone-seo` (or whatever you prefer)
3. Click **Create**. Wait ~30 seconds.
4. Make sure the new project is selected in the project picker at the top.

## Step 2 — Enable the Search Console API

1. Open https://console.cloud.google.com/apis/library/searchconsole.googleapis.com
2. Make sure the right project is selected.
3. Click **Enable**.

(While you're there, optionally also enable: **PageSpeed Insights API**, **Indexing API**, **Web Search Indexing API**. The audit skill uses these if available; without them the audit still works, just with fewer data sources.)

## Step 3 — Create a service account

1. Open https://console.cloud.google.com/iam-admin/serviceaccounts
2. Click **Create Service Account**.
3. Name: `kabatone-seo-reader`
4. ID: leave the auto-generated value
5. Description: `Read-only SEO audit access to kabatone.com GSC property`
6. Click **Create and Continue**.
7. **Grant this service account access to the project** — skip this step (click **Continue**). The service account doesn't need any GCP-level roles.
8. **Grant users access to this service account** — skip this too (click **Done**).

## Step 4 — Download the JSON key

1. In the service accounts list, click the one you just created (`kabatone-seo-reader@kabatone-seo.iam.gserviceaccount.com` or similar).
2. Go to the **Keys** tab.
3. Click **Add Key** → **Create new key** → **JSON** → **Create**.
4. A JSON file downloads automatically. **Treat this file like a password — never commit it.**

## Step 5 — Save the key locally

In a terminal:

```bash
mkdir -p ~/.config/claude-seo
mv ~/Downloads/kabatone-seo-*.json ~/.config/claude-seo/gsc-service-account.json
chmod 600 ~/.config/claude-seo/gsc-service-account.json
```

Verify it's there:

```bash
ls -la ~/.config/claude-seo/gsc-service-account.json
# should show -rw------- (600 permissions)
```

## Step 6 — Grant the service account access to the GSC property

The service account needs to be added as an owner/user on the Search Console property.

1. Copy the service account email — it looks like `kabatone-seo-reader@kabatone-seo.iam.gserviceaccount.com`. You can find it on the service account detail page in GCP, or by running:
   ```bash
   python3 -c "import json; print(json.load(open('$HOME/.config/claude-seo/gsc-service-account.json'))['client_email'])"
   ```
2. Open Search Console: https://search.google.com/search-console
3. Pick the `kabatone.com` property (domain property — `sc-domain:kabatone.com`).
4. Click **Settings** (gear icon, bottom left) → **Users and permissions**.
5. Click **Add user**.
6. Paste the service account email.
7. Permission: **Full** (Owner). Use **Restricted** if you want read-only; Full is recommended so the skill can also pull URL Inspection data.
8. Click **Add**.

## Step 7 — Verify the connection

```bash
python3 ~/.claude/skills/seo/scripts/google_auth.py --check
```

Expected output: `✓ Service account authenticated for GSC property: sc-domain:kabatone.com`

If you see an error:
- **`File not found`** — the JSON isn't where Step 5 put it. Re-check the path.
- **`Permission denied for GSC property`** — Step 6 didn't take effect yet. Wait 1–2 minutes and retry. Make sure you added the right email to the right property.
- **`Search Console API has not been used`** — Step 2 didn't complete. Re-enable the API.

## Step 8 — Run your first audit

```
/kabatone-seo-audit
```

Or in conversation: "run the SEO audit."

The first run takes 3–5 minutes (crawls the site, pulls GSC data, runs GEO citation queries). Subsequent runs are faster because the base claude-seo skill caches non-volatile data.

---

## Security notes

- The JSON key is the equivalent of a password for the service account. Keep it in `~/.config/claude-seo/` (not in the project repo). The skill never reads it from anywhere else.
- The service account has access **only** to the GSC property you explicitly shared with it. It can't see your other Google data, your Gmail, Drive, or other GSC properties.
- To revoke access at any time: remove the user from the GSC property settings, or delete the service account key in GCP.
- The audit skill is **read-only** against GSC — it never submits sitemaps, requests indexing, or modifies anything in your Search Console account.

## What if I don't want to use a service account?

The base `seo-google` skill also supports OAuth flow. Run:

```
/seo google setup
```

and follow the prompts. OAuth is per-user (not per-machine like service accounts), so you'd need to redo it on every machine. Service account is recommended for repeatability.
