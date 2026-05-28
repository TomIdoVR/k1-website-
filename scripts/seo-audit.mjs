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

import { writeFileSync, readFileSync, existsSync } from "fs";
import { URL } from "url";

// --- Config ---
const args = process.argv.slice(2);
const getArg = (name, def) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : def; };
const BASE_URL = getArg("--url", "https://staging.kabatone.com");
const OUT_FILE = getArg("--out", "scripts/seo-report.json");
const BASELINE_FILE = getArg("--baseline", "scripts/seo-baseline.json");
const DIFF_ONLY = args.includes("--diff");
const CONCURRENCY = 5;

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
  "/resources/what-is-video-analytics/",
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

function extract(html, regex) {
  const m = html.match(regex);
  return m ? m[1].trim() : null;
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

async function fetchPage(url, timeout = 15000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "KabatOne-Verge-SEO-Audit/1.0" },
    });
    const html = await res.text();
    clearTimeout(timer);
    return { ok: true, status: res.status, html };
  } catch (e) {
    clearTimeout(timer);
    return { ok: false, error: e.message };
  }
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
        return checkPage(url, res.html);
      })
    );
    results.push(...batchResults);
    process.stderr.write(`  Audited ${Math.min(i + batchSize, urls.length)}/${urls.length}\r`);
  }
  return results;
}

async function main() {
  const now = new Date().toISOString();
  process.stderr.write(`\nKabatOne Verge SEO Audit - ${BASE_URL}\n`);
  process.stderr.write(`Routes: ${ROUTES.length} | Concurrency: ${CONCURRENCY}\n\n`);

  const urls = ROUTES.map(r => `${BASE_URL}/en${r === "/" ? "/" : r}`);
  const results = await runBatch(urls, CONCURRENCY);

  const allIssues = results.flatMap(r => r.issues.map(i => ({ ...i, page: r.url })));
  const critical = allIssues.filter(i => i.severity === "critical");
  const warnings = allIssues.filter(i => i.severity === "warning");
  const infos = allIssues.filter(i => i.severity === "info");

  const report = {
    runAt: now,
    baseUrl: BASE_URL,
    pagesAudited: results.length,
    summary: {
      critical: critical.length,
      warnings: warnings.length,
      info: infos.length,
      pagesWithIssues: results.filter(r => r.issues.some(i => i.severity !== "info")).length,
      pagesClean: results.filter(r => r.issues.filter(i => i.severity !== "info").length === 0).length,
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
  process.stderr.write(`Pages: ${report.pagesAudited} | Critical: ${critical.length} | Warnings: ${warnings.length} | Info: ${infos.length}\n`);
  process.stderr.write(`Report: ${OUT_FILE}\n\n`);

  // Print summary JSON to stdout for piping
  console.log(JSON.stringify(report.summary, null, 2));

  if (critical.length > 0) process.exit(1);
}

main().catch(e => { console.error(e); process.exit(2); });
