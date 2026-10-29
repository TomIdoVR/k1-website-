# KabatOne Weekly SEO + GEO — 2026-10-28

**Focus:** The third-party listings (GEO-5) still aren't live. All three tasks are past due and nothing is public on G2,
so the one lever that moves AI answers hasn't been pulled. Meanwhile our main CAD page,
`best-cad-dispatch-software`, has lost clicks for three weeks (17 → 14 → 10 → 7). On 10-19 I called its falling
impressions "reallocation". That was wrong. The page's position slipped from 7.9 to 10.3 in the last two weeks,
and it isn't cannibalization. The same listings are the best fix for both.

GSC 28d pull 10-28 (09-29 → 10-26) vs pull 10-19 (09-20 → 10-17), a 9-day gap · GA4 28d vs prior 28d plus 13 weekly
buckets · GEO 4 engines × 40 questions × **2 runs** on 10-26 · previous report `weekly-report-2026-10-19.md`

---

## Scoreboard (GEO + CAD)

| Measure | 10-12 | 10-19 (run 1 / 2) | **10-26 (run 1 / 2)** | Read |
|---|---|---|---|---|
| ChatGPT: questions that name us (of 40) | 8 | 5 / 10 | **9 / 8** | flat, inside last week's range |
| Gemini | 8 | 6 / 9 | **8 / 4** | flat, noisy |
| Perplexity | 3 | 5 / 4 | **5 / 4** | flat |
| Claude | 3 | 3 / 3 | **3 / 3** | flat, stable |
| "What is a C5 command center?" named | 3 of 4 engines | 3 of 4, both runs | **3 of 4, both runs** | ChatGPT, Gemini, Perplexity name us; Claude doesn't |
| `best-cad-dispatch-software` clicks / week (GSC) | W41: 14 | W42: 10 | **W43: 7** | 🔴 three weeks down, position 7.9 → 10.3 |
| AI-referred sessions / week (GA4) | W41: 7 | W42: 4 | **W43: 9** | still low vs 14–15 before W40 |

## 1. Traffic

| Channel | Sessions | Prior | Δ | Users | S/U | Bounce | Read |
|---|---|---|---|---|---|---|---|
| Direct | 2,064 | 1,668 | +24% | 1,938 | 1.07 | 85.2% | ⚠️ bot signature, excluded |
| **Organic Search** | **1,001** | 947 | **+6%** | 719 | 1.39 | 49.5% | healthy |
| Referral | 111 | 90 | +23% | 70 | 1.59 | 45.0% | grupokabat.com 72 |
| Organic Social | 71 | 59 | +20% | 45 | 1.58 | 50.7% | small base; LinkedIn 43 + 19 |
| AI Assistant | 26 | 53 | −51% | 18 | 1.44 | 34.6% | small base, see AI-1 |

**AI-1, still watching.** By ISO week: 10 · 16 · 10 · 10 · 14 · 14 · 15 · 14 · **4 · 7 · 4 · 9** (W33–W43). W43's 9 is the
best of the four low weeks, but it's one week on a base of single digits. ChatGPT 17 sessions, Gemini 9, Perplexity 0. The
diagnosis from 10-19 still stands: not one page, not one engine, not the tag. No further diagnosis spend.

## 2. Search

| Metric | Now | Prior (10-19) | Δ |
|---|---|---|---|
| Clicks | 612 | 649 | −5.7% |
| Impressions | 111,601 | 112,434 | −0.7% |
| CTR | 0.55% | 0.58% | −0.03 pt |
| Avg position | 10.4 | 10.0 | slipped |

The Monday Slack brief reports **+10% clicks**. Both are right: it compares 28 days with the previous 28, while this compares
two overlapping windows 9 days apart. The overlapping comparison shows the most recent change.

**Where the 37 clicks went.** Two pages account for 35:

| Page | Pull 10-19 | Pull 10-28 | Δ | Read |
|---|---|---|---|---|
| `/resources/cctv-video-analytics` | 46 | 28 | −18 | dropped in mid-September (W38) and has held at ~6 a week since; video is in maintenance |
| `/resources/best-cad-dispatch-software` | 60 | 43 | −17 | **new decline, see below** |
| brand (*kabat one*, *kabatone*, *grupo kabat*) | 124 | 114 | −10 | part of last week's LinkedIn-driven gain gave back |

**`best-cad-dispatch-software`: what changed and what didn't**

| Week | W36 | W37 | W38 | W39 | W40 | W41 | W42 | **W43** |
|---|---|---|---|---|---|---|---|---|
| Clicks | 17 | 16 | 8 | 18 | 17 | 14 | 10 | **7** |
| Impressions | 6,052 | 5,570 | 4,188 | 4,312 | 3,520 | 3,767 | 3,066 | **2,795** |
| Position | 9.3 | 9.3 | 9.2 | 8.3 | 8.1 | 7.9 | 8.5 | **10.3** |

- **Correction to 10-19.** I called the falling impressions "reallocation, not decline" because clicks held. Until W41 that
  was right: position *improved* 9.3 → 7.9 while far-off impressions dropped out. Since W41 position has fallen 2.4 places
  and clicks have followed. That's a decline, and it's two weeks old.
- **It isn't cannibalization.** On CAD queries, this page lost 1,234 impressions between the two windows. The new `/vs/` CAD
  pages from PR #28 gained about 45 between them, the homepage gained none, and `what-is-cad-dispatch-software` gained 143.
  PR #28's timing lines up (merged 10-12), but its pages didn't take the traffic.
- **It isn't an update I can find.** I found no reports of an October Google core update; the last reported one was May.
- **The cause isn't visible in our data.** Google hides most of this page's queries: query-level data covers 9 of its 60
  clicks. The likeliest explanation is that competitors gained on the CAD list queries. Third-party lists (GEO-5) are the
  authority that moves both Google and AI answers, which is why GEO-5 is #1 below.

**Opportunities (score-ranked, intent-labelled).** This table changed this week, see SCORER-2 in §6.

| # | Query | Pos | Impr | Qualified potential | Intent |
|---|---|---|---|---|---|
| 1 | que es el c5 | 7.3 | 1,147 | 44 | informational (GEO only) |
| 2 | que es el c5 en mexico | 6.1 | 605 | 35 | informational |
| 3 | c5 que es | 6.5 | 482 | 27 | informational |
| 4 | c5 | 7.7 | 5,310 | **0** | navigational ⛔ |
| 6 | vms | 6.6 | 2,563 | **0** | acronym ⛔ |
| 8 | cctv analytics | 5.2 | 333 | 18 | buyer, AI-Overview block |
| 10 | psap | 5.5 | 1,246 | **0** | acronym ⛔ |
| 11 | centro de mando | 5.8 | 120 | 5 | buyer |
| 12 | carbyne 911 | 7.3 | 126 | 4 | buyer |

**The honest read:** the site has almost no buyer-intent search volume within reach of page one. The largest buyer row is
worth 18 clicks a month. More page tweaks won't move the business; being on the lists buyers and AI engines read will.

**`psap` (last week's P1), closed.** It's real people (41% mobile; US 245, Mexico 240, Spain 192 impressions), landing on
our *what is a PSAP* pages at position 5–6, for **1 click in 1,246 impressions**. That's a definition lookup, the same as `vms`.

**Zero-click page 1:** 25 of 66 (was 24). Six improved position and still got zero clicks: the AI-Overview pattern again, on
the video-analytics block. No snippet rewrites.

## 3. GEO

- **Flat on all four engines,** all inside last week's run-to-run range. That's expected: none of the GEO-5 listings is live
  yet, so nothing has changed that engines read.
- **C5 (GEO-4): named by ChatGPT, Gemini and Perplexity in every run since they were first measured (10-12).** Claude
  retrieves our C5 page but still doesn't name us. There's no measurement from before the C5 fix (PR #21, 09-28) on those
  three engines, so I **can't credit the fix**. What's true today: 3 of 4 engines name KabatOne when asked what a C5 is.
- **Instrument (G10):** four engines' API answers, two runs each. Report the mean and the range, never one run. A move inside the
  range is no change.

## 4. Plan

### P0 — this week

**#1: Get GEO-5 live.** *Owner: Omer (doing it himself, confirmed 10-29). ~2 hours of form-filling. **3 weeks 🔴.***
Status I can verify: all three Second Brain tasks are still open, 4–5 days past due; G2 shows no KabatOne or K-Dispatch
profile; the other directories block automated checks, so their status can't be confirmed from here.
Everything he needs is in the kit (https://claude.ai/artifact/EBXxbGGuXWeakxP6TTT1hR): routes, approved copy in EN and ES, and
the four pitch emails. The pitches are yours to send.
*Why it beats the runner-up:* it's the only identified lever for both problems this week. AI answers build their CAD
vendor lists from these pages, and the same pages are the authority signal Google uses on "best CAD software" queries,
where `best-cad` is slipping. The runner-up, diagnosing `best-cad` further, has no fix available from our side; the data hides
the queries.

**#2: ✅ Done today: the scorer no longer ranks bare acronyms as buyer opportunities (SCORER-2, 4w 🔴, closed).**
`vms`, `psap`, `rtcc` and `lpr` typed on their own drew 5,856 page-one impressions and 11 clicks (0.19%). They now carry a new
intent, `acronym`: visible, qualified potential 0, value 0.2, like `c5`. Exact match only: `vms software` stays a buyer query.
One shared scorer feeds this report, the dashboard and the Slack brief (`weekly_brief.py`), so all three correct at once.
Verified by running the scorer and regenerating the table. **v2.419**

**#3: Merge this week's PR and PR #31.** *Owner: Omer.* My merges are blocked by the permission classifier.
- This week's PR carries the 10-26 GEO and keyword snapshots, which exist only on this Mac, plus the scorer fix.
- PR #31 (retire `nextjs`, retire the daily audit) has been open 14 days. #32 has since used its version number, so it needs
  renumbering first. Say the word and I'll do it.

### P1 — this month

1. **Point the Slack routine at `main` (PIPE-3, 4w 🔴, Omer).** It still checks out `origin/nextjs`, the retired line. So on 10-26
   it reported "GEO monitor 56 days stale" (GEO ran that morning), treated 56 commits on `nextjs` as unshipped work, led with
   `vms`, and couldn't push its artifacts. Two changes to its prompt: check out `origin/main`, and either allow the push or drop
   the commit step. With your OK I'll edit the routine.
2. **`best-cad-dispatch-software`: verdict at the 11-02 pull** *(Claude)*. If W44 is down again, look at who took the page-one
   slots on "best CAD software" and compare their pages with ours. If it recovers, close it.
3. **Mauricio's G2 review requests:** move to after G2 approves the claim (the task is due 10-24, but there's no review link yet).

### P2 — backlog

GEO-3 (8w) · OPS-1 mailer crash (4w) · OPS-2 auto-reload (3w, credit held on 10-26) · AUTH-1 (14w, blocked by design) ·
video/VMS maintenance.

## 5. Operations & health

| Signal | Value | |
|---|---|---|
| Production pushes this week | **0** (last: #32, 10-20) | ⚠️ |
| Local commits not on GitHub | 2 (10-26 GEO + keyword snapshots) | carried by this week's PR |
| Open PRs | #31 (14 days), #26 (superseded by #31; close it) | |
| GEO monitor (`seo-geo`) | ran 10-26, 2 runs × 4 engines, committed locally | ✅ |
| Weekly orchestrator (`seo-weekly`) | ran 10-26, keyword snapshot committed | ✅ |
| Slack brief routine | ran 10-26, posted; reads the retired branch; push blocked | 🔴 PIPE-3 |
| SEO mailer | still crashing (`IndexError`) | ⚠️ OPS-1 |
| Striking distance (p5–15) | 109 (was 87 on 09-28) | — |
| Branches | `nextjs` is retired in practice; `seo_diff.py` on `main` still compares it until #31 merges | |

## 6. Housekeeping

**Shipped:** v2.419, the acronym intent (SCORER-2).

**Refuted or corrected this week**
- **My 10-19 "reallocation" call on `best-cad`:** wrong from W42, with evidence above.
- **`psap` as an opportunity:** a definition lookup, 1 click in 1,246 impressions.
- **Slack brief 10-26:** "GEO 56 days stale" (wrong: GEO ran 10-26); "56 commits not live" (wrong frame: `nextjs` is retired);
  `vms` as top opportunity (refuted and now fixed in the scorer). Its AI −53% matches ours. Its +10% clicks is a different
  window, not a contradiction.

**Carry-over**

| Item | Owner | Weeks | Status |
|---|---|---|---|
| GEO-5 third-party listings | Omer | 3 🔴 | not live; tasks past due |
| PIPE-3 Slack routine on retired branch, push blocked | Omer | 4 🔴 | needs routine edit |
| BRANCH-1 retire `nextjs` (PR #31) | Omer | 3 🔴 | needs renumber + merge |
| OPS-1 mailer crash | Claude | 4 🔴 | open |
| OPS-2 Anthropic auto-reload | Omer | 3 🔴 | credit held 10-26 |
| GEO-3 quoted-literal intent | Claude | 8 🔴 | open |
| AUTH-1 authority program | Omer | 14 🔴 | blocked by design; GEO-5 is its first concrete step |
| CAD-2 `best-cad` decline | Claude | 0 | new, verdict 11-02 |
| AI-1 AI referrals low | Claude | 2 | watching |
| ~~GEO-8 · PIPE-4~~ two runs, self-commit | Claude | 1 | **closed: v2.418 verified on 10-26** |
| GEO-4 C5 named | Claude | — | 3 of 4 engines; Claude still not |
| ~~SCORER-2~~ | Claude | 4 | **closed v2.419** |
| ~~PSAP-1~~ (`psap` check) | Claude | 1 | **closed: definition lookup** |
