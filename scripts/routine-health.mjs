#!/usr/bin/env node
/**
 * routine-health.mjs — v1.0 (KAB-2883)
 *
 * Two jobs, both about fires that die instead of running:
 *
 *  1. IDEMPOTENCY GATE for the catch-up fire. The daily routine fires twice
 *     (07:00 and 13:00 UTC). The 13:00 fire exists solely to recover a morning
 *     fire that died at the adapter. On a normal day the morning fire already
 *     wrote today's runlog line, so the catch-up must cost nothing: this script
 *     exits 10 and the execution issue closes without auditing.
 *
 *  2. HEALTH REPORT. Cross-references the routine's platform run history
 *     against the audit's own artifact (the runlog). A fire that ended in
 *     anything other than `completed` is invisible today — only successful runs
 *     write anything, so a lost day looks exactly like a day that needed no
 *     work. This prints the trailing completed:failed ratio and, more usefully,
 *     the LOST DAYS: dates where a fire happened but no runlog line exists.
 *
 * Why cross-reference rather than just count failed runs: a run marked `failed`
 * whose audit actually completed before the adapter dropped (KAB-2882's first
 * attempt, 6da3aa40) is not a lost day. A run marked `completed` that never
 * logged would be. The runlog is the ground truth for coverage; the run history
 * is the ground truth for reliability. Only the join tells you which days are
 * actually missing.
 *
 * Usage:
 *   node scripts/routine-health.mjs [--routine <id>] [--limit 30]
 *                                   [--runlog scripts/seo-daily-runlog.txt]
 *                                   [--today YYYY-MM-DD] [--json]
 *
 * Exit codes:
 *   0  PROCEED  — today has no runlog entry; this fire should run the audit.
 *   10 NO-OP    — today is already logged; this is a duplicate/catch-up fire.
 *                 Close the execution issue as done without auditing.
 *   2  UNKNOWN  — could not reach the Paperclip API or no runlog. Fails OPEN
 *                 (treat as PROCEED): a missing health check must never be the
 *                 reason a day goes unaudited. The whole point is fewer lost
 *                 days, not a new way to lose one.
 *
 * Health degradation never changes the exit code. It is reported, not enforced
 * — refusing to audit because past fires failed would turn one lost day into
 * two, the same reasoning as checkMissedRuns() in seo-audit.mjs.
 */

import { existsSync, readFileSync } from "node:fs";

const argv = process.argv.slice(2);
const getArg = (flag, fallback) => {
  const i = argv.indexOf(flag);
  return i !== -1 && argv[i + 1] ? argv[i + 1] : fallback;
};
const hasFlag = f => argv.includes(f);

/* The Verge Daily SEO Audit routine. Overridable so this script is reusable
   for the other routines that share the same failure mode. */
const ROUTINE_ID = getArg("--routine", "727e64d4-db33-4549-aa05-39346145e697");
const LIMIT = Number(getArg("--limit", "30"));
const RUNLOG_FILE = getArg("--runlog", "scripts/seo-daily-runlog.txt");
const TODAY = getArg("--today", new Date().toISOString().slice(0, 10));

/* Lost-day detection compares "a fire happened" against "a runlog line exists",
   so it is only valid for the era where logging every run — including a silent
   CLEAN — was actually the rule. Step 6 of the routine ("still append the run")
   only held reliably from 2026-08-12; the runlog before that is sparse (12
   dated lines total, first on 07-22) because successful CLEAN runs legitimately
   exited without logging. Scanning further back reports ~15 days as LOST that
   were audited fine, and an alert that cries wolf that loudly stops being read.
   Fires before this anchor are counted in the ratio but excluded from LOST —
   and the exclusion is printed, never silent. */
const SINCE = getArg("--since", "2026-08-12");
const JSON_OUT = hasFlag("--json");

const API_URL = process.env.PAPERCLIP_API_URL;
const API_KEY = process.env.PAPERCLIP_API_KEY;

const out = [];
const say = line => out.push(line);

/** Dates (YYYY-MM-DD) that have a runlog line. */
function loggedDates() {
  if (!existsSync(RUNLOG_FILE)) return null;
  return new Set(
    readFileSync(RUNLOG_FILE, "utf-8")
      .split("\n")
      .map(l => /^(\d{4}-\d{2}-\d{2})\s*\|/.exec(l)?.[1])
      .filter(Boolean)
  );
}

async function fetchRuns() {
  if (!API_URL || !API_KEY) {
    return { error: "PAPERCLIP_API_URL / PAPERCLIP_API_KEY not set" };
  }
  try {
    const res = await fetch(
      `${API_URL}/api/routines/${ROUTINE_ID}/runs?limit=${LIMIT}`,
      { headers: { Authorization: `Bearer ${API_KEY}` } }
    );
    if (!res.ok) return { error: `HTTP ${res.status} from routine runs API` };
    const body = await res.json();
    const runs = Array.isArray(body) ? body : body.runs;
    if (!Array.isArray(runs)) return { error: "unexpected runs payload shape" };
    return { runs };
  } catch (e) {
    /* Transient connection errors are the very thing this script reports on.
       One dying here must not block the audit — hence fail-open. */
    return { error: `${e.code ?? e.name}: ${e.message}` };
  }
}

const logged = loggedDates();
const { runs, error } = await fetchRuns();

/* ---- 1. Idempotency gate ------------------------------------------------ */

const todayLogged = logged?.has(TODAY) ?? false;

/* ---- 2. Health report --------------------------------------------------- */

let health = null;
if (runs) {
  const completed = runs.filter(r => r.status === "completed").length;
  const failed = runs.length - completed;

  /* Group fires by the day they were triggered — a day can have several fires
     (07:00 + 13:00 catch-up, or a platform retry). A day is LOST only if it
     had at least one fire and produced no runlog line at all. Today is
     excluded: it is legitimately unlogged until this run finishes. */
  const byDay = new Map();
  for (const r of runs) {
    const day = (r.triggeredAt ?? r.createdAt ?? "").slice(0, 10);
    if (!day) continue;
    if (!byDay.has(day)) byDay.set(day, []);
    byDay.get(day).push(r.status);
  }

  const inEra = d => d >= SINCE;
  const excludedDays = [...byDay.keys()].filter(d => !inEra(d)).length;

  const lostDays = logged
    ? [...byDay.keys()]
        .filter(d => d !== TODAY && inEra(d) && !logged.has(d))
        .sort()
    : [];

  const failedDays = [...byDay.entries()]
    .filter(([d, ss]) => d !== TODAY && ss.some(s => s !== "completed"))
    .map(([d, ss]) => {
      const tag = !inEra(d)
        ? " — pre-runlog era, coverage unknown"
        : logged?.has(d)
          ? " — covered anyway"
          : " — LOST";
      return `${d} (${ss.join(",")})${tag}`;
    })
    .sort();

  health = {
    window: runs.length,
    completed,
    failed,
    failureRate: runs.length ? +(failed / runs.length).toFixed(3) : null,
    lostDays,
    failedFires: failedDays,
    lostDayScanSince: SINCE,
    daysExcludedFromLostScan: excludedDays,
  };

  say(`Routine health — trailing ${runs.length} fires: ${completed} completed / ${failed} failed` +
      (runs.length ? ` (${Math.round((failed / runs.length) * 100)}% failure)` : ""));

  if (failedDays.length) {
    say(`  Non-completed fires:`);
    for (const d of failedDays) say(`    - ${d}`);
  } else {
    say(`  No non-completed fires in the window.`);
  }

  if (lostDays.length) {
    say(``);
    say(`  ! LOST DAYS (fired, but no runlog entry — no audit exists for these):`);
    for (const d of lostDays) say(`    - ${d}`);
    say(`    A CLEAN result on a later day says nothing about these.`);
  } else if (logged) {
    say(`  Every day that fired since ${SINCE} has a runlog entry — 0 lost days.`);
  }
  if (excludedDays) {
    say(`  (${excludedDays} day(s) before ${SINCE} excluded from the lost-day scan:`);
    say(`   logging every CLEAN run only became the rule on ${SINCE}, so an absent`);
    say(`   runlog line before that does not imply an absent audit.)`);
  }
} else {
  say(`Routine health: UNAVAILABLE (${error}).`);
  say(`  Proceeding with the audit anyway — a missing health check must not`);
  say(`  become the reason a day goes unaudited.`);
}

/* ---- Verdict ------------------------------------------------------------ */

let code;
let verdict;
if (!logged) {
  code = 2;
  verdict = `UNKNOWN — no runlog at ${RUNLOG_FILE}; cannot tell if ${TODAY} ran. Proceed.`;
} else if (todayLogged) {
  code = 10;
  verdict = `NO-OP — ${TODAY} already has a runlog entry. This is a duplicate or ` +
            `catch-up fire; the day is already covered. Close the execution issue ` +
            `as done WITHOUT running the audit.`;
} else {
  code = 0;
  verdict = `PROCEED — no runlog entry for ${TODAY}. Run the audit.`;
}

say(``);
say(verdict);

if (JSON_OUT) {
  console.log(JSON.stringify({ today: TODAY, todayLogged, code, verdict, health, error: error ?? null }, null, 2));
} else {
  console.log(out.join("\n"));
}

process.exit(code);
