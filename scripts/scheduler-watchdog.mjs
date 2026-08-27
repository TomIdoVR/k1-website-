#!/usr/bin/env node
/**
 * scheduler-watchdog.mjs — v1.0 (KAB-2909)
 *
 * The out-of-band coverage detector for the daily SEO audit loop.
 *
 * WHY THIS EXISTS
 * ---------------
 * Every detector we had ran inside the thing that dies:
 *
 *   - seo-audit.mjs checkMissedRuns() only speaks when an audit runs.
 *   - routine-health.mjs joins routine run history against the runlog, so a
 *     scheduler outage — which produces zero run rows to join — is invisible
 *     to it *by construction*.
 *
 * So an outage stayed silent for exactly as long as it lasted. The 2026-08-23
 * to 08-26 gap (4 days) surfaced only because a human triggered a recovery run
 * on 08-27.
 *
 * ROOT CAUSE OF THE OUTAGES (established 2026-08-27, KAB-2909)
 * ------------------------------------------------------------
 * Not a scheduler bug and not a crashed process — the whole machine was off.
 * `pmset -g log` shows the MacBook draining on battery through 2026-08-22,
 * hitting Charge:1% and hibernating at 2026-08-23 02:46 +0300, with no further
 * power event until "Wake from Hibernate ... Using AC" at 2026-08-27 11:27
 * +0300. Paperclip's own hourly DB backups corroborate it exactly: last
 * pre-gap backup 2026-08-22 19:10 UTC, first post-gap 2026-08-27 04:29 UTC,
 * nothing in between.
 *
 * That has a hard consequence for this script's design: `launchd` KeepAlive on
 * com.kabatone.paperclip was already correct and made no difference, and any
 * detector living on this Mac is equally dead during the outage. So the
 * watchdog has two legs, and only one of them is truly out-of-band:
 *
 *   LEG 1 — LOCAL, RunAtLoad. Fires on every boot/wake plus every 15 minutes.
 *     It cannot alert *during* a machine-down window, but it converts "silent
 *     until a human happens to notice" into "alerted within a minute of the
 *     machine coming back". That alone would have caught 08-23..08-26 on the
 *     morning of 08-27 without anyone reading a runlog.
 *
 *   LEG 2 — DEAD-MAN PING. Every healthy check pings an external uptime
 *     service (healthchecks.io or equivalent). The service alerts when the
 *     pings *stop*. Because the detector lives off this machine, this is the
 *     only leg that fires while the Mac is dead. It is opt-in: write the check
 *     URL to ~/.config/claude-seo/healthcheck-url and it activates. Absent
 *     that file, leg 2 is reported as INACTIVE — never silently skipped.
 *
 * GROUND TRUTH
 * ------------
 * Coverage is read from the runlog file on disk, not from the Paperclip API.
 * Deliberate: the API is served by the process that dies, so asking it whether
 * the loop is healthy is the exact circular dependency this issue is about.
 * The runlog is a plain file, needs no auth, and is the same artifact the
 * routine itself treats as authoritative.
 *
 * Usage:
 *   node scripts/scheduler-watchdog.mjs [--runlog <path>] [--max-age-hours 36]
 *                                       [--now <ISO>] [--json] [--quiet]
 *                                       [--no-notify] [--no-ping] [--force-alert]
 *
 * Exit codes:
 *   0  OK      — coverage is fresh.
 *   1  STALE   — no runlog line within the threshold. Alert emitted.
 *   2  UNKNOWN — runlog missing or unparseable. Alert emitted; treated as a
 *                fault, not as "fine". A watchdog that goes quiet when it
 *                cannot see is worse than no watchdog.
 */

import { existsSync, readFileSync, writeFileSync, appendFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { homedir } from "node:os";
import { join } from "node:path";

const argv = process.argv.slice(2);
const getArg = (flag, fallback) => {
  const i = argv.indexOf(flag);
  return i !== -1 && argv[i + 1] ? argv[i + 1] : fallback;
};
const hasFlag = f => argv.includes(f);

const REPO = getArg(
  "--repo",
  "/Users/omercnaani/Library/CloudStorage/OneDrive-SYMSERVICIOSINTEGRALESSADECV/Claude/k1 Website"
);
const RUNLOG = getArg("--runlog", join(REPO, "scripts", "seo-daily-runlog.txt"));
const MAX_AGE_HOURS = Number(getArg("--max-age-hours", "36"));
const NOW = new Date(getArg("--now", new Date().toISOString()));
const JSON_OUT = hasFlag("--json");
const QUIET = hasFlag("--quiet");

const STATE_FILE = join(homedir(), ".claude", "tasks", "scheduler-watchdog.state.json");
const LOG_FILE = join(homedir(), ".claude", "tasks", "scheduler-watchdog.log");
const PING_URL_FILE = join(homedir(), ".config", "claude-seo", "healthcheck-url");

/* Re-alerting every 15 minutes during a multi-day gap trains the alert to be
   ignored, which is the failure mode that produced this issue in the first
   place. One alert per 12h per continuous outage. */
const REALERT_COOLDOWN_HOURS = 12;

/* The routine fires at 07:00 UTC and the audit typically lands by ~12:00 UTC.
   Anchoring a logged day at 12:00 UTC — rather than midnight — is what makes a
   36h threshold mean "a full day's fire was missed" instead of "today's fire
   has not finished yet". A day logged at any hour still counts as that day. */
const NOMINAL_RUN_HOUR_UTC = 12;

/**
 * Newest YYYY-MM-DD that has a runlog line, or null.
 *
 * Future-dated lines are excluded rather than trusted. A line dated ahead of
 * now can only come from clock skew or a hand-edited backfill, and taking the
 * raw max would let one such line report the loop as covered indefinitely —
 * a watchdog that can be silenced by a typo. Excluding them is also what makes
 * the script replayable against a past --now for testing.
 */
function lastLoggedDate(asOfDay) {
  if (!existsSync(RUNLOG)) return null;
  const all = readFileSync(RUNLOG, "utf-8")
    .split("\n")
    .map(l => /^(\d{4}-\d{2}-\d{2})\s*\|/.exec(l)?.[1])
    .filter(Boolean)
    .sort();
  const dates = all.filter(d => d <= asOfDay);
  if (all.length && !dates.length) return null;
  return dates.length ? dates[dates.length - 1] : null;
}

function readState() {
  try {
    return JSON.parse(readFileSync(STATE_FILE, "utf-8"));
  } catch {
    return {};
  }
}

function writeState(state) {
  try {
    writeFileSync(STATE_FILE, JSON.stringify(state, null, 2) + "\n");
  } catch (e) {
    say(`WARN: could not write state file (${e.code ?? e.name}) — dedupe disabled this run`);
  }
}

const out = [];
const say = line => out.push(line);

function logLine(line) {
  try {
    appendFileSync(LOG_FILE, `${NOW.toISOString()} ${line}\n`);
  } catch {
    /* The log is a convenience, not the alert. Never let it mask a real one. */
  }
}

/** macOS notification. Best-effort: no GUI session (SSH, boot) means no banner. */
function notify(title, message) {
  if (hasFlag("--no-notify")) return "skipped (--no-notify)";
  try {
    const esc = s => s.replace(/["\\]/g, "\\$&");
    execFileSync("/usr/bin/osascript", [
      "-e",
      `display notification "${esc(message)}" with title "${esc(title)}" sound name "Basso"`,
    ]);
    return "sent";
  } catch (e) {
    return `failed (${e.code ?? e.name})`;
  }
}

/**
 * Leg 2. Ping the external dead-man switch.
 *
 * Only pinged when coverage is fresh — that is the whole point. If the loop is
 * broken but the Mac is alive, the pings must STOP so the external service
 * fires, otherwise this degrades into "the machine is on" monitoring, which we
 * do not need. `/fail` is sent on a stale result so the external alert is
 * immediate rather than waiting out the service's own grace period.
 */
async function deadManPing(healthy) {
  if (hasFlag("--no-ping")) return { status: "skipped (--no-ping)" };
  if (!existsSync(PING_URL_FILE)) {
    return {
      status: "INACTIVE",
      detail:
        `no ${PING_URL_FILE} — machine-down outages stay undetected until the Mac returns. ` +
        `Create a free healthchecks.io check (period 1d, grace 12h) and write its ping URL to that file.`,
    };
  }
  const base = readFileSync(PING_URL_FILE, "utf-8").trim();
  if (!/^https?:\/\//.test(base)) {
    return { status: "ERROR", detail: `ping URL file does not contain an http(s) URL` };
  }
  const url = healthy ? base : `${base.replace(/\/$/, "")}/fail`;
  try {
    const res = await fetch(url, { method: "POST", signal: AbortSignal.timeout(10_000) });
    return { status: res.ok ? "sent" : `HTTP ${res.status}`, target: healthy ? "ping" : "fail" };
  } catch (e) {
    return { status: `failed (${e.code ?? e.name})`, target: healthy ? "ping" : "fail" };
  }
}

/* ---- Evaluate ----------------------------------------------------------- */

const last = lastLoggedDate(NOW.toISOString().slice(0, 10));

let verdict, ageHours = null, detail;

if (!last) {
  verdict = "UNKNOWN";
  detail = existsSync(RUNLOG)
    ? `runlog at ${RUNLOG} has no dated lines`
    : `runlog not found at ${RUNLOG}`;
} else {
  const anchor = new Date(`${last}T${String(NOMINAL_RUN_HOUR_UTC).padStart(2, "0")}:00:00Z`);
  ageHours = (NOW - anchor) / 36e5;
  if (ageHours > MAX_AGE_HOURS) {
    verdict = "STALE";
    const missed = Math.floor(ageHours / 24);
    detail = `last audit ${last} — ${ageHours.toFixed(1)}h ago (~${missed} day${missed === 1 ? "" : "s"} uncovered), threshold ${MAX_AGE_HOURS}h`;
  } else {
    verdict = "OK";
    detail = `last audit ${last} — ${ageHours.toFixed(1)}h ago, under the ${MAX_AGE_HOURS}h threshold`;
  }
}

if (hasFlag("--force-alert")) {
  verdict = verdict === "OK" ? "STALE" : verdict;
  detail = `[--force-alert] ${detail}`;
}

const healthy = verdict === "OK";

/* ---- Act ---------------------------------------------------------------- */

const state = readState();
const lastAlertAt = state.lastAlertAt ? new Date(state.lastAlertAt) : null;
const cooledDown =
  !lastAlertAt || (NOW - lastAlertAt) / 36e5 >= REALERT_COOLDOWN_HOURS;

const ping = await deadManPing(healthy);

let notified = "not needed";
if (!healthy) {
  logLine(`${verdict} — ${detail}`);
  if (cooledDown || hasFlag("--force-alert")) {
    notified = notify(
      "SEO daily audit has stopped",
      `${verdict}: ${detail}. Trigger a recovery audit.`
    );
    state.lastAlertAt = NOW.toISOString();
  } else {
    const nextIn = (REALERT_COOLDOWN_HOURS - (NOW - lastAlertAt) / 36e5).toFixed(1);
    notified = `suppressed — alerted ${lastAlertAt.toISOString()}, next in ${nextIn}h`;
  }
} else if (state.lastAlertAt) {
  /* Coverage recovered. Clear the cooldown so the next outage alerts at once
     instead of inheriting a stale suppression window. */
  delete state.lastAlertAt;
  logLine(`RECOVERED — ${detail}`);
}
state.lastCheckAt = NOW.toISOString();
state.lastVerdict = verdict;
writeState(state);

/* ---- Report ------------------------------------------------------------- */

const result = {
  verdict,
  lastAudit: last,
  ageHours: ageHours === null ? null : Number(ageHours.toFixed(1)),
  maxAgeHours: MAX_AGE_HOURS,
  detail,
  notification: notified,
  deadManPing: ping,
  checkedAt: NOW.toISOString(),
};

if (JSON_OUT) {
  console.log(JSON.stringify(result, null, 2));
} else if (!QUIET || !healthy) {
  say(`SCHEDULER WATCHDOG — ${verdict}`);
  say(`  ${detail}`);
  say(`  notification : ${notified}`);
  say(`  dead-man ping: ${ping.status}${ping.detail ? ` — ${ping.detail}` : ""}`);
  console.log(out.join("\n"));
}

process.exit(verdict === "OK" ? 0 : verdict === "STALE" ? 1 : 2);
