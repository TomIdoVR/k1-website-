#!/usr/bin/env python3.11
"""
KabatOne — cross-pull SEO/GEO diff.

Everything in the weekly report that requires COMPARING things rather than reading a
single file. That comparison work is where the errors have historically been: movers
hand-diffed between two JSONs, a channel called "declining" off sessions alone while
its user count rose, carry-over counts read out of last week's prose.

It deliberately does not re-implement what already exists -- clusters, opportunity
scoring and the GA4 pull live in seo_weekly_agent.py, and the zero-click block lives in
weekly_brief.py. This imports the shared scorer so a single definition of intent and
expected CTR governs every pipeline.

Usage:
  python3.11 scripts/seo_diff.py                          # newest two SEO/gsc-fresh-*.json
  python3.11 scripts/seo_diff.py --cur A.json --prior B.json
  python3.11 scripts/seo_diff.py --json out.json          # also write machine-readable
  python3.11 scripts/seo_diff.py --no-ga4                 # skip the GA4 pull (offline/fast)
"""
from __future__ import annotations
import argparse, glob, json, os, re, subprocess, sys, collections
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / 'scripts'))
from seo_weekly_agent import expected_ctr, business_value, query_intent, assign_cluster  # noqa: E402

MOVER_MIN_DELTA = 1.5
MOVER_MIN_IMPR = 50
MONEY_PAGES = ('/k-dispatch', '/k-video', '/k-safety', '/k-traffic')


# ---------- loading -------------------------------------------------------------

def _rows(pull, key):
    """GSC pull shapes drifted over time: striking_distance is a dict with a 'rows'
    key, top_queries_by_impressions is a bare list. Normalise both."""
    v = pull.get(key)
    if v is None:
        return []
    return v.get('rows', []) if isinstance(v, dict) else v


def _ctr_fraction(row):
    """Some sections store ctr as a percent (0.07 == 0.07%), others as a fraction.
    Derive it from clicks/impressions instead of trusting the field -- the stored
    value has been wrong in both directions."""
    impr = row.get('impressions') or 0
    return (row.get('clicks', 0) / impr) if impr else 0.0


def query_index(pull):
    idx = {}
    for key in ('striking_distance', 'top_queries_by_impressions'):
        for r in _rows(pull, key):
            q = r.get('query')
            if q and q not in idx:
                idx[q] = r
    return idx


def page_index(pull):
    return {p['page']: p for p in _rows(pull, 'top_pages_by_impressions')}


def newest_pulls(n=2):
    files = sorted(glob.glob(str(ROOT / 'SEO' / 'gsc-fresh-*.json')), reverse=True)
    if len(files) < n:
        sys.exit(f"need {n} SEO/gsc-fresh-*.json pulls, found {len(files)}")
    return files[:n]


# ---------- comparisons ---------------------------------------------------------

def movers(cur, prior):
    ci, pi = query_index(cur), query_index(prior)
    up, down = [], []
    for q, c in ci.items():
        p = pi.get(q)
        if not p or c.get('impressions', 0) < MOVER_MIN_IMPR:
            continue
        delta = round(p['position'] - c['position'], 1)   # positive == improved
        if abs(delta) < MOVER_MIN_DELTA:
            continue
        rec = {'query': q, 'prior_position': p['position'], 'position': c['position'],
               'delta': delta, 'impressions': c['impressions'], 'clicks': c.get('clicks', 0)}
        (up if delta > 0 else down).append(rec)
    up.sort(key=lambda r: -r['delta']); down.sort(key=lambda r: r['delta'])
    return {'up': up, 'down': down}


def page_movers(cur, prior):
    ci, pi = page_index(cur), page_index(prior)
    out = []
    for url, c in ci.items():
        p = pi.get(url)
        if not p:
            continue
        delta = round(p['position'] - c['position'], 1)
        if abs(delta) < MOVER_MIN_DELTA:
            continue
        path = url.replace('https://kabatone.com', '')
        out.append({'page': path, 'prior_position': p['position'], 'position': c['position'],
                    'delta': delta, 'impressions': c.get('impressions', 0),
                    'is_money_page': any(path.rstrip('/').endswith(m) or path.rstrip('/') == m
                                         for m in MONEY_PAGES)})
    out.sort(key=lambda r: r['delta'])
    return out


def zero_click_block(cur, prior):
    """Page-1 queries returning nothing, with position deltas. A query that IMPROVED
    position and still returns zero rules out visibility as the cause -- that is the
    distinction the report hinges on, so it is computed rather than eyeballed."""
    ci, pi = query_index(cur), query_index(prior)
    page1 = [r for r in ci.values() if r.get('position', 99) <= 10]
    zero = [r for r in page1 if not r.get('clicks')]
    rows = []
    for r in sorted(zero, key=lambda x: -x.get('impressions', 0)):
        p = pi.get(r['query'])
        d = round(p['position'] - r['position'], 1) if p else None
        rows.append({'query': r['query'], 'position': r['position'],
                     'prior_position': p['position'] if p else None, 'delta': d,
                     'impressions': r.get('impressions', 0),
                     'improved_but_still_zero': bool(d and d > 0)})
    prior_zero = len([r for r in pi.values()
                      if r.get('position', 99) <= 10 and not r.get('clicks')])
    return {'page1_count': len(page1), 'zero_count': len(zero), 'prior_zero_count': prior_zero,
            'impressions': sum(r.get('impressions', 0) for r in zero),
            'improved_but_still_zero': sum(1 for r in rows if r['improved_but_still_zero']),
            'rows': rows}


def opportunities(cur):
    """Ranked by score, never by raw potential. Navigational queries keep a visible row
    but a qualified potential of 0 -- an unlabelled big number gets narrated as the
    headline no matter where it ranked (see CHANGELOG v2.330)."""
    out = []
    for r in query_index(cur).values():
        impr = r.get('impressions', 0)
        if impr < 50:
            continue
        gap = expected_ctr(r['position']) - _ctr_fraction(r)
        if gap <= 0:
            continue
        intent = query_intent(r['query'])
        pot = int(impr * gap)
        out.append({'query': r['query'], 'position': r['position'], 'impressions': impr,
                    'clicks': r.get('clicks', 0), 'cluster': assign_cluster(r['query']),
                    'intent': intent, 'potential_clicks': pot,
                    'potential_clicks_qualified': 0 if intent == 'navigational' else pot,
                    'score': round(impr * gap * business_value(r['query']), 1)})
    out.sort(key=lambda o: -o['score'])
    return out


def clusters(cur):
    agg = collections.defaultdict(lambda: {'impressions': 0, 'clicks': 0, 'queries': 0})
    for r in query_index(cur).values():
        a = agg[assign_cluster(r['query'])]
        a['impressions'] += r.get('impressions', 0)
        a['clicks'] += r.get('clicks', 0)
        a['queries'] += 1
    for a in agg.values():
        a['ctr_pct'] = round(a['clicks'] / a['impressions'] * 100, 2) if a['impressions'] else 0
    return dict(sorted(agg.items(), key=lambda kv: -kv[1]['impressions']))


def channels(ga4):
    """Sessions alone have produced a false alarm: AI Assistant fell 25% in sessions
    while distinct users ROSE 13%. Always carry users and sessions/user, and flag the
    bot signature (~1 session/user at high bounce) rather than reporting it as growth."""
    out = []
    for ch, d in sorted(ga4['sources_cur'].items(), key=lambda kv: -kv[1]['sessions']):
        prior = ga4['sources_prior'].get(ch, 0)
        spu = round(d['sessions'] / d['users'], 2) if d.get('users') else None
        out.append({
            'channel': ch, 'sessions': d['sessions'], 'prior_sessions': prior,
            'sessions_delta_pct': round((d['sessions'] - prior) / prior * 100, 1) if prior else None,
            'users': d.get('users'), 'sessions_per_user': spu, 'bounce': d.get('bounce'),
            'bot_signature': bool(spu and spu < 1.2 and (d.get('bounce') or 0) >= 65),
            'small_base': d['sessions'] < 100,
        })
    return out


# ---------- repo / live state ---------------------------------------------------

def _sh(cmd):
    try:
        return subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True,
                              timeout=60).stdout.strip()
    except Exception:
        return ''


def shipping():
    _sh(['git', 'fetch', 'origin', '--quiet'])
    return {
        'staging_ahead_of_prod': int(_sh(['git', 'rev-list', '--count',
                                          'origin/main..origin/nextjs']) or 0),
        'local_unpushed': int(_sh(['git', 'rev-list', '--count',
                                   'origin/nextjs..nextjs']) or 0),
        'last_prod_commit': _sh(['git', 'log', 'origin/main', '-1',
                                 '--format=%h %ad %s', '--date=short']),
    }


def canonical_sweep():
    """A sitewide fix can leave stragglers a spot-check never finds, and a canonical
    pointing at a 308 is what actually costs indexing. The bare origin is legitimate."""
    bad = []
    for loc in ('en', 'es'):
        f = ROOT / 'src' / 'content' / loc / 'metadata.ts'
        if not f.exists():
            continue
        for i, line in enumerate(f.read_text().splitlines(), 1):
            m = re.search(r'canonical:\s*"(https://kabatone\.com[^"]*/)"', line)
            if m and m.group(1) != 'https://kabatone.com/':
                bad.append({'file': f"src/content/{loc}/metadata.ts", 'line': i,
                            'canonical': m.group(1)})
    return bad


def geo_freshness():
    csv = ROOT / 'SEO' / 'geo' / 'geo-history.csv'
    if not csv.exists():
        return {'available': False}
    rows = [l.split(',') for l in csv.read_text().strip().splitlines()[1:] if l.strip()]
    by_date = collections.defaultdict(list)
    for r in rows:
        by_date[r[0]].append(r)
    runs = []
    for d in sorted(by_date):
        got = by_date[d]
        cited = sum(1 for r in got if len(r) > 2 and r[2].strip().upper() == 'Y')
        runs.append({'date': d, 'queries': len(got), 'cited': cited,
                     'rate_pct': round(cited / len(got) * 100, 1) if got else 0,
                     'complete': len(got) >= 12})
    last = runs[-1] if runs else None
    age = None
    if last:
        age = (datetime.now(timezone.utc).date()
               - datetime.strptime(last['date'], '%Y-%m-%d').date()).days
    return {'available': True, 'runs': runs, 'last': last, 'age_days': age,
            'complete_runs': [r for r in runs if r['complete']],
            'note': 'track_geo.py asks Claude with web search only -- it is not a '
                    'ChatGPT measurement, and it scores "in retrieved sources" the '
                    'same as "named in the answer".'}


# ---------- render --------------------------------------------------------------

def render(d):
    L = []
    a = L.append
    cm, pm = d['meta']['cur'], d['meta']['prior']
    a(f"# SEO cross-pull diff — {d['meta']['generated']}")
    a(f"\n**Current:** `{cm}`  ·  **Prior:** `{pm}`\n")

    t, tp = d['totals']['cur'], d['totals']['prior']
    a("## Totals\n")
    a("| Metric | Now | Prior | Δ |")
    a("|---|---|---|---|")
    for k, label in (('total_clicks', 'Clicks'), ('total_impressions', 'Impressions'),
                     ('avg_ctr_pct', 'Avg CTR %'), ('avg_position', 'Avg position')):
        now, was = t.get(k), tp.get(k)
        if now is None or was is None:
            continue
        pct = f"{(now-was)/was*100:+.1f}%" if was else "—"
        a(f"| {label} | {now:,} | {was:,} | {pct} |")
    if t.get('total_clicks') and tp.get('total_clicks'):
        cd = (t['total_clicks']-tp['total_clicks'])/tp['total_clicks']
        idd = (t['total_impressions']-tp['total_impressions'])/tp['total_impressions']
        if cd * idd < 0 or abs(cd - idd) > 0.10:
            a(f"\n> Clicks and impressions diverged ({cd:+.0%} vs {idd:+.0%}) — that divergence is the story.")

    z = d['zero_click']
    a(f"\n## Zero-click page-1 block\n")
    a(f"**{z['zero_count']} of {z['page1_count']} page-1 queries return zero clicks** "
      f"({z['impressions']:,} impressions). Prior pull: {z['prior_zero_count']}.")
    if z['improved_but_still_zero']:
        a(f"\n> **{z['improved_but_still_zero']} of them IMPROVED position and still returned zero.** "
          f"Visibility is ruled out — look at SERP-feature absorption, not rankings or snippets.")
    a("\n| Query | Impr | Pos | Prior | Δ |")
    a("|---|---|---|---|---|")
    for r in z['rows'][:12]:
        d_ = f"{r['delta']:+.1f}" if r['delta'] is not None else "new"
        a(f"| {r['query'][:44]} | {r['impressions']:,} | {r['position']} | "
          f"{r['prior_position'] if r['prior_position'] is not None else '—'} | {d_} |")

    a("\n## Opportunities — ranked by score, intent-labelled\n")
    a("| # | Query | Pos | Impr | Potential | Qualified | Intent | Score |")
    a("|---|---|---|---|---|---|---|---|")
    for i, o in enumerate(d['opportunities'][:12], 1):
        flag = " ⛔" if o['intent'] == 'navigational' else ""
        a(f"| {i} | {o['query'][:36]} | {o['position']} | {o['impressions']:,} | "
          f"{o['potential_clicks']} | **{o['potential_clicks_qualified']}** | "
          f"{o['intent']}{flag} | {o['score']} |")
    nav = [o for o in d['opportunities'][:12] if o['intent'] == 'navigational']
    if nav:
        a(f"\n> ⛔ {', '.join(repr(o['query']) for o in nav)} — navigational. Qualified "
          f"potential is 0 by design. Keep the row visible, never headline the raw number.")

    mv = d['movers']
    a(f"\n## Movers (≥{MOVER_MIN_DELTA} positions, ≥{MOVER_MIN_IMPR} impressions)\n")
    a(f"**Up {len(mv['up'])} · Down {len(mv['down'])}**\n")
    for lbl, rows in (('Up 🟢', mv['up'][:6]), ('Down 🔴', mv['down'][:6])):
        if not rows:
            continue
        a(f"**{lbl}**\n")
        a("| Query | Prior | Now | Δ | Impr |")
        a("|---|---|---|---|---|")
        for r in rows:
            a(f"| {r['query'][:40]} | {r['prior_position']} | {r['position']} | "
              f"{r['delta']:+.1f} | {r['impressions']:,} |")
        a("")
    money = [p for p in d['page_movers'] if p['is_money_page'] and p['delta'] < 0]
    if money:
        a("> ⚠️ **Money page declined:** " + ", ".join(
            f"`{p['page']}` {p['prior_position']}→{p['position']} ({p['delta']:+.1f})" for p in money)
          + ". One pull is not a trend — say so, and name it as an escalation trigger for next week.")

    if d.get('channels'):
        a("\n## Channels — users carried alongside sessions\n")
        a("| Channel | Sessions | Prior | Δ | Users | S/U | Bounce | Flag |")
        a("|---|---|---|---|---|---|---|---|")
        for c in d['channels']:
            fl = []
            if c['bot_signature']:
                fl.append('BOT?')
            if c['small_base']:
                fl.append('small base')
            dl = f"{c['sessions_delta_pct']:+.0f}%" if c['sessions_delta_pct'] is not None else "—"
            a(f"| {c['channel']} | {c['sessions']:,} | {c['prior_sessions']:,} | {dl} | "
              f"{c['users']} | {c['sessions_per_user']} | {c['bounce']}% | {' · '.join(fl) or '—'} |")
        for c in d['channels']:
            if (c['sessions_delta_pct'] or 0) < -10 and c['small_base']:
                a(f"\n> **Do not call `{c['channel']}` a decline on sessions alone.** "
                  f"Small base ({c['sessions']} sessions). Check whether distinct users rose; "
                  f"fewer repeat sessions from more people is an improvement.")
            if c['bot_signature']:
                a(f"\n> **`{c['channel']}` shows the bot signature** "
                  f"({c['sessions_per_user']} sessions/user at {c['bounce']}% bounce). "
                  f"Exclude from every conclusion; never report as growth.")

    s = d['shipping']
    a("\n## Shipping\n")
    a(f"- Staging ahead of production: **{s['staging_ahead_of_prod']}** commits")
    a(f"- Local commits never pushed: **{s['local_unpushed']}**")
    a(f"- Last production commit: `{s['last_prod_commit']}`")
    if s['local_unpushed']:
        a(f"\n> **{s['local_unpushed']} commits exist only on this machine.** Unpushed work is "
          f"invisible in every metric and reads identically to work never done.")

    g = d['geo']
    a("\n## GEO\n")
    if not g.get('available'):
        a("- `geo-history.csv` missing.")
    else:
        last = g['last']
        a(f"- Last run **{last['date']}** ({g['age_days']}d ago) — {last['cited']}/{last['queries']} "
          f"cited ({last['rate_pct']}%){'' if last['complete'] else ' — PARTIAL RUN, not comparable'}")
        comp = g['complete_runs']
        if len(comp) >= 2:
            a(f"- Complete runs only: " + " → ".join(f"{r['date']} {r['rate_pct']}%" for r in comp[-4:]))
        if g['age_days'] is not None and g['age_days'] > 10:
            a(f"- ⚠️ **{g['age_days']} days stale** — run `python3.11 SEO/geo/track_geo.py`")
        a(f"- ⚠️ {g['note']}")

    if d['canonical_issues']:
        a("\n## ⚠️ Canonical sweep — stragglers found\n")
        for c in d['canonical_issues']:
            a(f"- `{c['file']}:{c['line']}` → `{c['canonical']}` (points at a 308)")
    else:
        a("\n## Canonical sweep\n\n- ✅ No slashed canonicals outside the bare origin.")

    a("\n---\n\n## Verification gate — clear before publishing\n")
    a("Every claim below is the kind that has shipped wrong before. Check each by "
      "**execution or an explicit history query**, not by recall:\n")
    a("- [ ] Every superlative — *first / never / largest / only / since tracking began* — "
      "checked against the **full** history, not two adjacent pulls")
    a("- [ ] Every 🔴 flag re-verified live; every channel decline checked against **users**, not sessions")
    a("- [ ] Every claim about code behaviour proved by **running** it (G6)")
    a("- [ ] Every recommendation grepped against CHANGELOG + commit **bodies** for prior rejection (G1)")
    a("- [ ] Every 'broken' finding checked against staging — is it already fixed but unshipped? (G2)")
    a("- [ ] Every opportunity carries an intent label; no bare potential-click number (G8)")
    a("- [ ] Every dwell/bounce figure quotes its **session count and window** (G9)")
    a("- [ ] `git fetch` re-run immediately before executing or choosing a version (G7)")
    return "\n".join(L)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--cur'); ap.add_argument('--prior')
    ap.add_argument('--json'); ap.add_argument('--out')
    ap.add_argument('--no-ga4', action='store_true')
    args = ap.parse_args()

    if args.cur and args.prior:
        cf, pf = args.cur, args.prior
    else:
        cf, pf = newest_pulls(2)
    try:
        cur, prior = json.load(open(cf)), json.load(open(pf))
    except FileNotFoundError as e:
        sys.exit(f"pull not found: {e.filename}\n"
                 f"available: {', '.join(os.path.basename(f) for f in sorted(glob.glob(str(ROOT/'SEO'/'gsc-fresh-*.json')), reverse=True)[:5])}")
    except json.JSONDecodeError as e:
        sys.exit(f"pull is not valid JSON ({e}) -- re-run gsc_pull_weekly.py")

    ga4 = None
    if not args.no_ga4:
        try:
            from seo_weekly_agent import pull_ga4
            ga4 = pull_ga4(28)
        except Exception as e:
            print(f"  ! GA4 pull failed ({e}) — channels omitted", file=sys.stderr)

    data = {
        'meta': {'cur': os.path.basename(cf), 'prior': os.path.basename(pf),
                 'generated': datetime.now().strftime('%Y-%m-%d %H:%M')},
        'totals': {'cur': cur.get('totals', {}), 'prior': prior.get('totals', {})},
        'movers': movers(cur, prior),
        'page_movers': page_movers(cur, prior),
        'zero_click': zero_click_block(cur, prior),
        'opportunities': opportunities(cur),
        'clusters': clusters(cur),
        'channels': channels(ga4) if ga4 else None,
        'shipping': shipping(),
        'canonical_issues': canonical_sweep(),
        'geo': geo_freshness(),
    }
    md = render(data)
    if args.out:
        Path(args.out).write_text(md); print(f"wrote {args.out}", file=sys.stderr)
    else:
        print(md)
    if args.json:
        json.dump(data, open(args.json, 'w'), indent=1, default=str)
        print(f"wrote {args.json}", file=sys.stderr)
    return 0


if __name__ == '__main__':
    sys.exit(main())
