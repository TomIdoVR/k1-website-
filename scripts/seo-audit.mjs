#!/usr/bin/env node
/**
 * KabatOne Verge SEO Audit Script
 * Usage: node scripts/seo-audit.mjs [--url https://staging.kabatone.com] [--out scripts/seo-report.json] [--diff]
 *
 * Checks every known route for:
 *  - Title/description presence, length, uniqueness
 *  - OG tags (title, description, image)
 *  - Canonical tag correctness
 *  - H1 presence and uniqueness
 *  - JSON-LD schema validity
 *  - Images with missing alt text
 */

import { writeFileSync, readFileSync, existsSync, readdirSync } from "fs";
import { execFileSync } from "child_process";
import { URL } from "url";

// --- Config ---
const args = process.argv.slice(2);
const getArg = (name, def) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : def; };
const BASE_URL = getArg("--url", "https://staging.kabatone.com");
const OUT_FILE = getArg("--out", "scripts/seo-report.json");
const BASELINE_FILE = getArg("--baseline", "scripts/seo-baseline.json");
const RUNLOG_FILE = getArg("--runlog", "scripts/seo-daily-runlog.txt");
const TODAY = new Date().toISOString().slice(0, 10);
const DIFF_ONLY = args.includes("--diff");
// Report coverage accounting and exit without crawling.
const COVERAGE_ONLY = args.includes("--coverage-only");
// Guard overrides. Each silences one refusal (exit 3) — pass only after
// establishing why the guard is wrong, never to make a red run go green.
const ALLOW_STALE = args.includes("--allow-stale");
const ALLOW_UNSHIPPED = args.includes("--allow-unshipped");
const ALLOW_UNVERIFIED_SYNC = args.includes("--allow-unverified-sync");
const ALLOW_ROUTE_FALLBACK = args.includes("--allow-route-fallback");
const ALLOW_COVERAGE_DROP = args.includes("--allow-coverage-drop");
const EXIT_REFUSED = 3;
const CONCURRENCY = 5;
const MAX_REDIRECTS = 5;
// Hosts that serve the indexed site. Only these are held to "canonical must
// name this host" — staging and preview legitimately carry prod canonicals.
const PROD_HOSTS = new Set(["kabatone.com", "www.kabatone.com"]);

// All known routes (EN locale)
const ROUTES = [
  "/",
  "/k-safety/",
  "/k-dispatch/",
  "/k-video/",
  "/k-traffic/",
  "/k-connect/",
  "/industries/public-safety/",
  "/industries/municipalities/",
  "/industries/airport/",
  "/industries/retail/",
  "/industries/logistics/",
  "/industries/ports/",
  "/industries/stadiums/",
  "/about/",
  "/contact/",
  "/privacy/",
  "/resources/",
  "/resources/what-is-a-public-safety-platform/",
  "/resources/what-is-cad-dispatch-software/",
  "/resources/what-is-emergency-dispatch-software/",
  "/resources/what-is-emergency-management-software/",
  "/resources/what-is-a-command-center/",
  "/resources/what-is-a-real-time-crime-center/",
  "/resources/what-is-a-psap/",
  "/resources/what-is-video-management-software/",
  /* /resources/what-is-video-analytics removed v2.332: 301'd into
     /resources/cctv-video-analytics by the v2.329 consolidation. Left here it
     would make the sitemap-unreachable fallback audit a redirect. */
  "/resources/what-is-incident-management-software/",
  "/resources/what-is-lpr-license-plate-recognition/",
  "/resources/what-is-sensor-fusion/",
  "/resources/what-is-situational-awareness-software/",
  "/resources/what-is-gunshot-detection-software/",
  "/resources/ai-in-public-safety/",
  "/resources/best-public-safety-software/",
  "/resources/psim-vs-unified-platform/",
  "/resources/smart-city-platform-guide/",
  "/resources/build-rtcc-implementation-guide/",
  "/resources/how-c5-command-centers-work/",
  "/resources/c5-command-centers-mexico-2026/",
  "/resources/cad-dispatch-software-latin-america/",
  "/resources/end-of-siloed-response/",
  "/resources/911-call-center-software-guide/",
  "/resources/public-safety-software-argentina/",
  "/resources/public-safety-software-chile/",
  "/resources/public-safety-software-colombia/",
  "/resources/public-safety-software-peru/",
  "/resources/public-safety-software-small-cities/",
  "/resources/public-safety-software-municipalities-mexico/",
  "/resources/rtcc-setup-guide/",
  "/integrations/lpr/",
  "/integrations/face-recognition/",
  "/integrations/sensor-fusion/",
  "/vs/avigilon/",
  "/vs/axon/",
  "/vs/cad/",
  "/vs/carbyne/",
  "/vs/centralsquare/",
  "/vs/fusus/",
  "/vs/genetec/",
  "/vs/hexagon/",
  "/vs/mark43/",
  "/vs/milestone/",
  "/vs/motorola/",
  "/vs/nice-systems/",
  "/vs/palantir/",
  "/vs/peregrine/",
  "/vs/prepared911/",
  "/vs/rapidssos/",
  "/vs/shotspotter/",
  "/vs/tyler-technologies/",
  "/vs/verint/",
  "/vs/verkada/",
];

const TITLE_MIN = 30;
const TITLE_MAX = 70;
const DESC_MIN = 100;
const DESC_MAX = 200;
const DESC_IDEAL_MAX = 160;

// Serialized HTML escapes &, ', ", <, > as entities. Measuring the raw escaped
// string inflates title/description lengths (an apostrophe costs 6 chars, an
// ampersand 5) and produces phantom *_long warnings for metadata that is
// actually within limits. Google measures the decoded text, so we do too.
const NAMED_ENTITIES = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
};

function decodeEntities(str) {
  return str.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, body) => {
    if (body[0] === "#") {
      const code =
        body[1] === "x" || body[1] === "X"
          ? parseInt(body.slice(2), 16)
          : parseInt(body.slice(1), 10);
      if (!Number.isFinite(code) || code < 0 || code > 0x10ffff) return match;
      return String.fromCodePoint(code);
    }
    const named = NAMED_ENTITIES[body.toLowerCase()];
    return named === undefined ? match : named;
  });
}

function extract(html, regex) {
  const m = html.match(regex);
  return m ? decodeEntities(m[1]).trim() : null;
}

function checkPage(url, html) {
  const issues = [];
  const info = {};

  // Title
  const title = extract(html, /<title[^>]*>([^<]+)<\/title>/i);
  info.title = title;
  if (!title) {
    issues.push({ severity: "critical", check: "title_missing", msg: "No <title> tag found" });
  } else {
    if (title.length < TITLE_MIN)
      issues.push({ severity: "warning", check: "title_short", msg: `Title too short (${title.length} chars)` });
    if (title.length > TITLE_MAX)
      issues.push({ severity: "warning", check: "title_long", msg: `Title too long (${title.length} chars, max ${TITLE_MAX})` });
  }

  // Meta description
  const desc =
    extract(html, /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i) ||
    extract(html, /<meta\s+content=["']([^"']*?)["']\s+name=["']description["']/i);
  info.description = desc;
  if (!desc) {
    issues.push({ severity: "critical", check: "desc_missing", msg: "No meta description found" });
  } else {
    if (desc.length < DESC_MIN)
      issues.push({ severity: "warning", check: "desc_short", msg: `Description too short (${desc.length} chars, min ${DESC_MIN})` });
    if (desc.length > DESC_MAX)
      issues.push({ severity: "warning", check: "desc_long", msg: `Description too long (${desc.length} chars, max ${DESC_MAX})` });
    else if (desc.length > DESC_IDEAL_MAX)
      issues.push({ severity: "info", check: "desc_near_max", msg: `Description near limit (${desc.length}/${DESC_IDEAL_MAX} ideal)` });
  }

  // Canonical
  const canonical =
    extract(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i) ||
    extract(html, /<link\s+href=["']([^"']+)["']\s+rel=["']canonical["']/i);
  info.canonical = canonical;
  if (!canonical) {
    issues.push({ severity: "warning", check: "canonical_missing", msg: "No canonical tag found" });
  } else {
    /* Compare the path, not the whole URL. Staging and preview hosts are
       supposed to carry production canonicals, so a host difference there is
       correct, not a defect — comparing full URLs would fire on all 71 staging
       pages every day and bury the real signal. */
    const strip = (u) => { try { return new URL(u).pathname.replace(/\/$/, "") || "/" } catch { return u } };
    if (strip(canonical) !== strip(url)) {
      issues.push({
        severity: "warning",
        check: "canonical_not_self",
        msg: `Canonical path ${strip(canonical)} does not match the audited path ${strip(url)}`,
      });
    } else if (PROD_HOSTS.has(new URL(url).host) && new URL(canonical).host !== new URL(url).host) {
      /* On a production host the canonical must name that same host. This is
         what catches "site serves on www but every canonical says apex". */
      issues.push({
        severity: "warning",
        check: "canonical_host_mismatch",
        msg: `Served on ${new URL(url).host} but canonical claims ${new URL(canonical).host}`,
      });
    }
  }

  // OG tags
  const ogTitle = extract(html, /<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i) ||
                  extract(html, /<meta\s+content=["']([^"']+)["']\s+property=["']og:title["']/i);
  info.ogTitle = ogTitle;
  if (!ogTitle) issues.push({ severity: "warning", check: "og_title_missing", msg: "Missing og:title" });

  const ogDesc = extract(html, /<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i) ||
                 extract(html, /<meta\s+content=["']([^"']+)["']\s+property=["']og:description["']/i);
  info.ogDesc = ogDesc;
  if (!ogDesc) issues.push({ severity: "warning", check: "og_desc_missing", msg: "Missing og:description" });

  const ogImage = extract(html, /<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i) ||
                  extract(html, /<meta\s+content=["']([^"']+)["']\s+property=["']og:image["']/i);
  info.ogImage = ogImage;
  if (!ogImage) issues.push({ severity: "warning", check: "og_image_missing", msg: "Missing og:image" });

  // H1
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
  info.h1Count = h1Count;
  if (h1Count === 0) {
    issues.push({ severity: "warning", check: "h1_missing", msg: "No H1 found" });
  } else if (h1Count > 1) {
    issues.push({ severity: "warning", check: "h1_multiple", msg: `${h1Count} H1 tags found (should be 1)` });
  }

  // JSON-LD
  const jsonLdRe = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let jm;
  let jsonLdCount = 0;
  while ((jm = jsonLdRe.exec(html)) !== null) {
    jsonLdCount++;
    try { JSON.parse(jm[1]); } catch (e) {
      issues.push({ severity: "critical", check: "jsonld_invalid", msg: `Invalid JSON-LD: ${e.message}` });
    }
  }
  info.jsonLdCount = jsonLdCount;
  if (jsonLdCount === 0) {
    issues.push({ severity: "info", check: "jsonld_missing", msg: "No JSON-LD schema found" });
  }

  // Images missing alt
  const imgRe = /<img([^>]+)>/gi;
  let imgMatch;
  let imgTotal = 0;
  let imgNoAlt = 0;
  const noAltSrcs = [];
  while ((imgMatch = imgRe.exec(html)) !== null) {
    imgTotal++;
    const attrs = imgMatch[1];
    if (!/\balt=["'][^"']*["']/i.test(attrs)) {
      imgNoAlt++;
      const srcM = attrs.match(/src=["']([^"']+)["']/i);
      if (srcM && noAltSrcs.length < 5) noAltSrcs.push(srcM[1]);
    }
  }
  info.imgCount = imgTotal;
  info.imgNoAlt = imgNoAlt;
  if (imgNoAlt > 0) {
    issues.push({ severity: "warning", check: "img_alt_missing", msg: `${imgNoAlt}/${imgTotal} images missing alt text`, detail: noAltSrcs });
  }

  return { url, issues, info };
}

/**
 * Follow redirects by hand rather than letting fetch swallow them.
 *
 * `fetch` follows redirects silently, so an audited URL that only reached 200
 * after two hops graded exactly the same as one served directly — which is how
 * the production `307 (apex→www) → 308 (trailing slash) → 200` chain on every
 * indexed URL went unreported for months. The chain is now data the checks can
 * see. See SEO/weekly-report-2026-08-10.md.
 */
async function fetchPage(url, timeout = 20000, retries = 2) {
  let lastError = "";
  for (let attempt = 0; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);
    try {
      const chain = [];
      let current = url;
      let res;
      for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
        res = await fetch(current, {
          signal: controller.signal,
          redirect: "manual",
          headers: { "User-Agent": "KabatOne-Verge-SEO-Audit/1.0" },
        });
        if (res.status < 300 || res.status >= 400) break;
        const location = res.headers.get("location");
        if (!location) break;
        const next = new URL(location, current).href;
        chain.push({ from: current, to: next, status: res.status });
        current = next;
        if (hop === MAX_REDIRECTS) {
          clearTimeout(timer);
          return { ok: false, error: `More than ${MAX_REDIRECTS} redirects`, chain };
        }
      }
      const html = await res.text();
      clearTimeout(timer);
      return { ok: true, status: res.status, html, chain, finalUrl: current };
    } catch (e) {
      clearTimeout(timer);
      lastError = e.message;
      // Retry transient network/abort errors with linear backoff before flagging critical.
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, 500 * (attempt + 1)));
      }
    }
  }
  return { ok: false, error: lastError };
}

/**
 * A URL we publish as canonical — in the sitemap, in a `rel=canonical`, in
 * hreflang — must serve 200 itself. Any hop means Google is asked to crawl one
 * URL and index another.
 */
function checkRedirectChain(url, chain, finalUrl) {
  if (!chain || chain.length === 0) return [];
  const hops = chain.map(h => `${h.status} → ${h.to}`).join(", ");
  return [{
    severity: chain.length > 1 ? "critical" : "warning",
    check: "redirect_chain",
    msg: `${chain.length} redirect${chain.length > 1 ? "s" : ""} before 200 (${hops}). Canonical URLs must serve 200 directly.`,
    finalUrl,
  }];
}

/**
 * The URLs this deployment publishes, read from its own sitemap.
 *
 * Hosts are rewritten to the audited origin: sitemap.ts hard-codes the
 * production origin, so auditing staging would otherwise fetch production and
 * silently grade the wrong site.
 */
async function sitemapUrls(baseUrl) {
  const res = await fetchPage(`${baseUrl}/sitemap.xml`);
  if (!res.ok || res.status >= 400) {
    process.stderr.write(`  ! sitemap unreachable (${res.status || res.error}); falling back to ROUTES\n`);
    return null;
  }
  const locs = [...res.html.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
  if (locs.length === 0) {
    process.stderr.write(`  ! sitemap had no <loc> entries; falling back to ROUTES\n`);
    return null;
  }
  const origin = new URL(baseUrl).origin;
  return [...new Set(locs.map(u => { try { return origin + new URL(u).pathname } catch { return null } }).filter(Boolean))];
}

async function runBatch(urls, batchSize) {
  const results = [];
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(async (url) => {
        const res = await fetchPage(url);
        if (!res.ok || res.status >= 400) {
          return {
            url,
            issues: [{ severity: "critical", check: "http_error", msg: `HTTP ${res.status || "ERR"}: ${res.error || ""}` }],
            info: {},
          };
        }
        const page = checkPage(url, res.html);
        page.issues.unshift(...checkRedirectChain(url, res.chain, res.finalUrl));
        page.info.redirectHops = res.chain.length;
        return page;
      })
    );
    results.push(...batchResults);
    process.stderr.write(`  Audited ${Math.min(i + batchSize, urls.length)}/${urls.length}\r`);
  }
  return results;
}

/* Refuse rather than report. A guard that only warns gets scrolled past: the
   audit's failure mode is not crashing, it is producing a confident number
   about the wrong site. Exit 3 means "did not audit", never "audited clean". */
function refuse(msg, override) {
  process.stderr.write(`\n  REFUSED: ${msg}\n  Override with ${override} only if you have established the guard is wrong.\n\n`);
  process.exit(EXIT_REFUSED);
}

/* A missed day leaves no artifact. Every other guard here protects against a
   confident number about the wrong site; this one protects against no number
   at all, which is worse because nothing surfaces it. When the routine fire
   dies at the adapter (KAB-2694: `adapter_failed ENOTFOUND` on 08-15/16/19,
   16 of 50 runs historically) or the whole instance is down (no routine in the
   company fired 2026-08-05..08-11), the loop simply skips a day and the next
   successful run reports CLEAN as if nothing happened.

   Reports, never refuses: a gap is already in the past, and refusing today's
   audit because yesterday's was missed would turn one missed day into two. */
function checkMissedRuns() {
  if (!existsSync(RUNLOG_FILE)) return null;
  const dates = readFileSync(RUNLOG_FILE, "utf-8")
    .split("\n")
    .map(l => /^(\d{4}-\d{2}-\d{2})\s*\|/.exec(l)?.[1])
    .filter(Boolean)
    .sort();
  const last = dates.at(-1);
  if (!last) return null;
  const DAY = 86400000;
  const gap = Math.round((Date.parse(TODAY) - Date.parse(last)) / DAY) - 1;
  if (gap > 0) {
    process.stderr.write(
      `\n  ! MISSED RUNS: ${gap} day(s) with no audit between ${last} and ${TODAY}.\n` +
      `    Check the routine's run history — a fire ending in anything other than\n` +
      `    'completed' produced no report, so the streak of CLEAN runs is not a\n` +
      `    streak of covered days.\n\n`
    );
  }
  return { lastRun: last, missedDays: Math.max(0, gap) };
}

const git = (...a) => execFileSync("git", a, { encoding: "utf-8" }).trim();

/**
 * The checkout must match what the audited deployment is serving, in BOTH
 * directions:
 *  - behind origin  -> we grade a route list the deployment has moved past
 *                      (KAB-2480: four weeks of false CLEAN off a stale branch)
 *  - ahead of origin -> the deployment has not received our fixes yet, so the
 *                      audit re-flags already-fixed work as live defects
 *                      (KAB-2504: 86 warnings, all of them unpushed v2.317)
 * Only meaningful when auditing a deployed origin; localhost serves the tree.
 */
function checkCheckoutSync() {
  if (/localhost|127\.0\.0\.1/.test(BASE_URL)) return;
  let behind, ahead;
  try {
    git("fetch", "origin", "nextjs", "--quiet");
    [behind, ahead] = git("rev-list", "--left-right", "--count", "origin/nextjs...nextjs")
      .split(/\s+/).map(Number);
  } catch (e) {
    /* Fail CLOSED. This used to warn and return, which meant a broken git made
       the guard silently pass — the run then graded an unverified checkout and
       reported CLEAN. That is the same failure KAB-2480 spent four weeks on,
       just reached through git instead of through a stale branch. A guard that
       cannot run has not passed. (Seen 2026-08-13: one dangling ref under
       refs/codex/ aborted every fetch, and the audit audited anyway.) */
    if (!ALLOW_UNVERIFIED_SYNC) {
      refuse(
        `could not verify the checkout matches ${BASE_URL} (git failed: ${e.message.split("\n")[0]}). ` +
        `An unverifiable checkout is not a synced one — fix git, or the run grades an unknown tree.`,
        "--allow-unverified-sync",
      );
    }
    process.stderr.write(`  ! checkout-sync UNVERIFIED (${e.message.split("\n")[0]}) — proceeding under --allow-unverified-sync\n`);
    return;
  }
  if (behind > 0 && !ALLOW_STALE) {
    refuse(`local nextjs is ${behind} commit(s) BEHIND origin — the route list and metadata here are older than what is deployed.`, "--allow-stale");
  }
  if (ahead > 0 && !ALLOW_UNSHIPPED) {
    refuse(`local nextjs is ${ahead} commit(s) AHEAD of origin — those fixes are not on ${BASE_URL} yet, so every finding would be a false positive. Push and let the deploy finish first.`, "--allow-unshipped");
  }
  process.stderr.write(`  Checkout in sync with origin/nextjs\n`);
}

/* A silent drop in route count is how coverage collapses unnoticed — the run
   still says CLEAN, just about fewer pages. Compare against the last run. */
function checkCoverage(count) {
  if (!existsSync(BASELINE_FILE)) return;
  let prev;
  try { prev = JSON.parse(readFileSync(BASELINE_FILE, "utf-8")).pagesAudited } catch { return }
  if (!prev) return;
  if (count < prev * 0.8 && !ALLOW_COVERAGE_DROP) {
    refuse(`route coverage collapsed: ${count} URLs vs ${prev} last run (${Math.round((count / prev) * 100)}%).`, "--allow-coverage-drop");
  }
}

/* ---------------------------------------------------------------------------
   Coverage accounting (KAB-2507).

   The crawl list comes from the deployed sitemap, and the sitemap is a subset
   of the repo by design: `keepInSitemap` in src/app/sitemap.ts drops non-ICP
   country pages (they are noindex,follow per the 2026-07-07 indexation triage),
   and a handful of routes are deliberately never submitted. So "232 pages
   audited" was true and also only half the repo — a raw page count reads as
   full coverage when it is not.

   This states coverage as a fraction of repo routes and, more importantly,
   forces every uncrawled route to be *explained*. A route that is neither
   noindex-by-policy nor on the off-sitemap allowlist is a real gap — someone
   shipped a page and never added it to sitemap.ts — and it is reported as a
   warning rather than silently absorbed into the denominator. */

const APP_ROUTES_DIR = "src/app/[locale]";
const SITEMAP_SRC = "src/app/sitemap.ts";

/* Routes intentionally absent from sitemap.ts. Each is off-index on purpose:
   internal previews, ad landing pages, and per-contract legal notices that are
   linked directly and must not compete in search. Adding a page here is a
   deliberate act — an unlisted route NOT in this set is flagged. */
const OFF_SITEMAP_ROUTES = new Set([
  "/hero-lab-prev",          // design preview, not public
  "/lp",                     // paid-campaign landing page
  "/legal/911-michoacan",
  /* Per-contract legal notice added by v2.342 (9fa95d9, 2026-08-31), same class
     as 911-michoacan above. Verified live 2026-09-01 before allowlisting: 200 in
     both locales, `noindex, follow`, absent from the served sitemap — the page
     declares its own non-indexation, so listing it would contradict the page. */
  "/legal/sitec-911",
  "/privacy-policy-tamaulipas",
  "/privacy/911-baja-california-sur",
  "/privacy/911-michoacan",
  "/privacy/c5-escudo-pakal",
  /* Video-analytics cluster consolidation (v2.329, 2026-08-28). Both were 301'd
     into /resources/cctv-video-analytics and dropped from sitemap.ts; the page.tsx
     files survive only because next.config redirects shadow them. Verified live:
     single-hop 308 to the winner, 200, both locales. */
  "/resources/what-is-video-analytics",
  "/resources/ai-video-analytics",
]);

const COUNTRY_PAGE_RE = /^\/resources\/public-safety-software-/;

/* Routes on the CURRENT BRANCH, from git rather than the filesystem.
   readdirSync counts any page.tsx sitting in the checkout, including untracked
   files another agent left behind — this repo is one shared checkout worked by
   several agents, and the hero-redesign branch's /hero-lab* pages live here
   permanently as untracked scratch. On 2026-09-01 that put 16 phantom routes
   into the denominator and raised 16 "shipped but not in sitemap" warnings for
   pages that are not on nextjs and not on staging.
   Tracked-only is not just a filter, it is the correct definition: the audit
   grades deployed HTML, staging serves only pushed commits, and step 0b already
   guarantees nothing is unpushed. A route that is not committed cannot be live,
   so calling it an unlisted live route is wrong by construction. */
/* NB: the pathspec is `:(literal)` and the page.tsx match is done in JS. Passing
   a recursive-glob pathspec under the route dir silently returns almost nothing,
   because git pathspecs are globs and `[locale]` reads as a character class
   matching one of l/o/c/a/e. That failure is invisible in the worst way: the
   denominator collapses and the audit prints "100% coverage, 0 unexplained" —
   a clean bill of health from measuring nothing. */
function trackedRouteFiles() {
  try {
    const out = execFileSync(
      "git", ["ls-files", "-z", "--", `:(literal)${APP_ROUTES_DIR}`],
      { encoding: "utf-8" }
    );
    const files = out.split("\0").filter(f => f.endsWith("/page.tsx"));
    /* An empty result is not "no routes on this branch" — it means the pathspec
       matched nothing, which is what the `[locale]` glob bug did. Falling back
       to the filesystem walk is the right recovery (better a noisy denominator
       than none), but it must not be silent: the fallback re-enables exactly
       the untracked-file counting v2.345 removed, and the collapse guard below
       cannot see it, because the guard compares tracked-vs-on-disk and the
       fallback makes those two identical by construction. Verified 2026-09-01
       by reverting the pathspec: 0 tracked files, silent fallback, 16 phantom
       hero-lab routes back in the denominator. */
    if (!files.length) {
      process.stderr.write(
        `  ! tracked-route scan matched 0 files under ${APP_ROUTES_DIR} — falling back to the\n` +
        `    filesystem walk, so untracked files from other branches WILL be counted.\n` +
        `    Check the git pathspec before trusting any coverage number from this run.\n`
      );
      return null;
    }
    return new Set(files);
  } catch {
    process.stderr.write(
      `  ! not a git checkout (or git unavailable) — coverage falls back to the filesystem walk\n`
    );
    return null;
  }
}

function repoRoutes(dir = APP_ROUTES_DIR, prefix = "", tracked = trackedRouteFiles()) {
  if (!existsSync(dir)) return null;
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      const sub = repoRoutes(`${dir}/${entry.name}`, `${prefix}/${entry.name}`, tracked);
      if (sub) out.push(...sub);
    } else if (entry.name === "page.tsx") {
      if (tracked && !tracked.has(`${dir}/${entry.name}`)) continue; // untracked: not on this branch
      out.push(prefix); // "" for the homepage
    }
  }
  return out;
}

/* The paths sitemap.ts lists at all, before keepInSitemap filters them. Parsed
   rather than imported because this is a .mjs script and sitemap.ts is TS. */
function sitemapListedPaths() {
  if (!existsSync(SITEMAP_SRC)) return null;
  const src = readFileSync(SITEMAP_SRC, "utf-8");
  const paths = [...src.matchAll(/\{\s*path:\s*'([^']*)'/g)].map(m => m[1]);
  return paths.length ? new Set(paths) : null;
}

function computeCoverage(crawledUrls) {
  const routes = repoRoutes();
  const listed = sitemapListedPaths();
  if (!routes || !listed) return null;

  /* The tracked-file filter is the coverage denominator, so if it ever breaks
     the audit reports a high coverage % over a tiny route set — "100% of 2 URLs,
     0 unexplained" reads exactly like a clean day. That is what the `[locale]`
     pathspec bug did on first write (see trackedRouteFiles). No existing guard
     caught it: the 80%-of-last-run check watches the CRAWL list, which comes
     from the sitemap and was still a healthy 230. Tracked routes are a subset of
     on-disk routes and in practice nearly all of them, so a large shortfall is a
     scan bug, never a real branch state. Refuse rather than report. */
  const onDisk = repoRoutes(APP_ROUTES_DIR, "", null);
  if (onDisk && routes.length < onDisk.length * 0.5) {
    refuse(
      `git-tracked route scan returned ${routes.length} routes against ${onDisk.length} on disk — ` +
      `the coverage denominator collapsed, and a coverage % over a broken route list is a fake CLEAN.`,
      "--allow-route-fallback"
    );
  }

  const crawled = new Set(crawledUrls.map(u => { try { return new URL(u).pathname } catch { return u } }));
  const isCrawled = p => crawled.has(p) || crawled.has(p === "" ? "/" : `${p}/`) || (p === "" && crawled.has("/"));

  const buckets = { noindexPolicy: [], offSitemap: [], unexplained: [] };
  let covered = 0;
  const repoUrls = [];

  for (const route of routes) {
    for (const path of [route, `/es${route}`]) {
      repoUrls.push(path);
      if (isCrawled(path)) { covered++; continue }
      if (!listed.has(route)) {
        (OFF_SITEMAP_ROUTES.has(route) ? buckets.offSitemap : buckets.unexplained).push(path);
      } else if (COUNTRY_PAGE_RE.test(route)) {
        /* Listed but not emitted: keepInSitemap dropped it as a non-ICP market. */
        buckets.noindexPolicy.push(path);
      } else {
        /* Listed, indexable, and still not served — a stale deploy or a
           sitemap bug. This is the case that must never pass silently. */
        buckets.unexplained.push(path);
      }
    }
  }

  return {
    repoRoutes: routes.length,
    repoUrls: repoUrls.length,
    crawled: crawledUrls.length,
    covered,
    pct: Math.round((covered / repoUrls.length) * 1000) / 10,
    excludedNoindexPolicy: buckets.noindexPolicy.length,
    excludedOffSitemap: buckets.offSitemap.length,
    unexplained: buckets.unexplained.sort(),
  };
}

async function main() {
  const now = new Date().toISOString();
  process.stderr.write(`\nKabatOne Verge SEO Audit - ${BASE_URL}\n`);
  checkCheckoutSync();
  const runlog = checkMissedRuns();

  /* Audit the URL space we actually publish, not `/en/*`.
     `localePrefix: 'as-needed'` serves EN at the root, so every `/en/...` URL
     the audit used to request was a redirect that appears in no sitemap and no
     canonical — it graded a URL space Google never sees, which is the second
     reason the production redirect chain stayed invisible.

     The list comes from the target's own sitemap rather than from a slash
     convention hard-coded here. Whether we publish `/path` or `/path/` is a
     decision that has now changed twice (v2.314 de-slashed everything), and
     each time a hard-coded guess is wrong it either hides a real redirect or
     invents 70 false ones. Asking the deployment what it publishes cannot go
     stale. Falls back to ROUTES if the sitemap is unreachable. */
  const fromSitemap = await sitemapUrls(BASE_URL);
  if (!fromSitemap && !ALLOW_ROUTE_FALLBACK) {
    refuse(`sitemap unreachable at ${BASE_URL}/sitemap.xml — the hard-coded ROUTES fallback covers a fraction of the site and would report a fake CLEAN.`, "--allow-route-fallback");
  }
  const urls = fromSitemap ?? ROUTES.map(r => `${BASE_URL}${r}`);
  checkCoverage(urls.length);
  const coverage = computeCoverage(urls);
  if (coverage) {
    process.stderr.write(
      `Coverage: ${coverage.covered}/${coverage.repoUrls} repo URLs (${coverage.pct}%) — ` +
      `${coverage.excludedNoindexPolicy} noindex-by-policy, ${coverage.excludedOffSitemap} off-sitemap by design, ` +
      `${coverage.unexplained.length} unexplained\n`
    );
    for (const p of coverage.unexplained.slice(0, 20)) {
      process.stderr.write(`  ! uncrawled and unexplained: ${p}\n`);
    }
  } else {
    process.stderr.write(`  ! coverage accounting unavailable (repo route dir or sitemap.ts not readable)\n`);
  }
  /* Coverage is answerable from the sitemap alone — no crawl needed. Useful
     for checking that a newly shipped page is actually in the audited set. */
  if (COVERAGE_ONLY) {
    console.log(JSON.stringify(coverage, null, 2));
    process.exit(coverage && coverage.unexplained.length > 0 ? 1 : 0);
  }
  process.stderr.write(`Routes: ${urls.length} | Concurrency: ${CONCURRENCY}\n\n`);
  const results = await runBatch(urls, CONCURRENCY);

  const allIssues = results.flatMap(r => r.issues.map(i => ({ ...i, page: r.url })));
  /* A shipped page missing from the sitemap is never graded and never crawled
     by Google. It belongs in the issue list, not just in a coverage footnote. */
  for (const path of coverage?.unexplained ?? []) {
    allIssues.push({
      severity: "warning",
      check: "route_not_in_sitemap",
      msg: `Route exists in ${APP_ROUTES_DIR} but is not served by the sitemap, so it is never audited or submitted. Add it to ${SITEMAP_SRC}, or to OFF_SITEMAP_ROUTES in this script if that is deliberate.`,
      page: `${BASE_URL}${path}`,
    });
  }
  const critical = allIssues.filter(i => i.severity === "critical");
  const warnings = allIssues.filter(i => i.severity === "warning");
  const infos = allIssues.filter(i => i.severity === "info");

  const report = {
    runAt: now,
    baseUrl: BASE_URL,
    pagesAudited: results.length,
    coverage,
    summary: {
      critical: critical.length,
      warnings: warnings.length,
      info: infos.length,
      /* Report coverage as a share of known repo routes. A raw page count
         cannot distinguish full coverage from half of it. */
      coveragePct: coverage?.pct ?? null,
      coverageAudited: coverage ? `${coverage.covered}/${coverage.repoUrls}` : null,
      coverageUnexplained: coverage?.unexplained.length ?? null,
      pagesWithIssues: results.filter(r => r.issues.some(i => i.severity !== "info")).length,
      pagesClean: results.filter(r => r.issues.filter(i => i.severity !== "info").length === 0).length,
      /* Days since the last logged run that produced no audit at all. A CLEAN
         report says nothing about the days that never ran — see checkMissedRuns. */
      lastRun: runlog?.lastRun ?? null,
      missedDays: runlog?.missedDays ?? null,
    },
    pages: results,
  };

  // Diff against baseline
  if (DIFF_ONLY && existsSync(BASELINE_FILE)) {
    const baseline = JSON.parse(readFileSync(BASELINE_FILE, "utf-8"));
    const baselineKeys = new Set(
      baseline.pages.flatMap(p => p.issues.map(i => `${p.url}::${i.check}`))
    );
    report.newIssues = allIssues.filter(i => !baselineKeys.has(`${i.page}::${i.check}`));
    report.resolvedIssues = baseline.pages
      .flatMap(p => p.issues.map(i => ({ ...i, page: p.url })))
      .filter(i => !allIssues.some(ni => ni.page === i.page && ni.check === i.check));
    report.summary.newIssues = report.newIssues.length;
    report.summary.resolvedIssues = report.resolvedIssues.length;
  }

  writeFileSync(OUT_FILE, JSON.stringify(report, null, 2));
  writeFileSync(BASELINE_FILE, JSON.stringify(report, null, 2));

  process.stderr.write(`\nAudit complete\n`);
  process.stderr.write(`Pages: ${report.pagesAudited}${coverage ? ` (${coverage.pct}% of ${coverage.repoUrls} repo URLs)` : ""} | Critical: ${critical.length} | Warnings: ${warnings.length} | Info: ${infos.length}\n`);
  process.stderr.write(`Report: ${OUT_FILE}\n\n`);

  // Print summary JSON to stdout for piping
  console.log(JSON.stringify(report.summary, null, 2));

  if (critical.length > 0) process.exit(1);
}

main().catch(e => { console.error(e); process.exit(2); });
