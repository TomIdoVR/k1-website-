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
    """Counts BOTH directions on purpose.

    `git rev-list --count origin/main..origin/nextjs` alone says "production is N commits
    behind" and reads like staleness. It is only half the question: main can carry work
    that never went through nextjs (PRs merged straight to production), in which case the
    branches have diverged and a merge is a real merge, not a promotion.

    This was not hypothetical -- the one-directional check reported "production is 13
    commits behind" while main was simultaneously 163 commits ahead on a separate line at
    a HIGHER version, with 8 files modified on both sides. Acting on the one-way number
    would have merged an older branch into a newer one across the live site."""
    _sh(['git', 'fetch', 'origin', '--quiet'])
    ahead = int(_sh(['git', 'rev-list', '--count', 'origin/main..origin/nextjs']) or 0)
    behind = int(_sh(['git', 'rev-list', '--count', 'origin/nextjs..origin/main']) or 0)
    base = _sh(['git', 'merge-base', 'origin/main', 'origin/nextjs'])
    main_sha = _sh(['git', 'rev-parse', 'origin/main'])
    overlap = []
    if behind:
        mine = set(filter(None, _sh(['git', 'diff', '--name-only',
                                     'origin/main...origin/nextjs']).split('\n')))
        theirs = set(filter(None, _sh(['git', 'diff', '--name-only',
                                       'origin/nextjs...origin/main']).split('\n')))
        overlap = sorted(f for f in (mine & theirs)
                         if f.startswith('src/') or f.endswith('.ts') or f.endswith('.tsx'))
    def _ver(ref):
        out = _sh(['git', 'show', f'{ref}:CHANGELOG.md'])
        m = re.match(r'##\s*\[([^\]]+)\]', out.split('\n')[0]) if out else None
        return m.group(1) if m else '?'
    return {
        'staging_ahead_of_prod': ahead,
        'prod_ahead_of_staging': behind,
        'diverged': bool(behind) and base != main_sha,
        'fast_forward_possible': base == main_sha,
        'overlapping_files': overlap,
        'version_main': _ver('origin/main'),
        'version_nextjs': _ver('origin/nextjs'),
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


def ga4_detail(days=28):
    """Referrer-level detail the channel table cannot show.

    Sessions by channel say whether GEO is working; they cannot say WHICH engine, and
    "AI Assistant" is four very different products in one bucket. The weekly series
    matters as much: a 28-day aggregate hides whether a small channel peaked and is now
    sliding, which is the only shape worth acting on at this base size (G9).

    Builds its client the same way seo_weekly_agent.pull_ga4 does, so there is one auth
    path to keep working.
    """
    try:
        from google.analytics.data_v1beta import BetaAnalyticsDataClient
        from google.analytics.data_v1beta.types import (
            RunReportRequest, DateRange, Dimension, Metric)
        sys.path.insert(0, str(ROOT / 'scripts'))
        from google_auth import get_oauth_credentials
        from seo_weekly_agent import GA4_PROPERTY

        creds = get_oauth_credentials(
            ['https://www.googleapis.com/auth/analytics.readonly'])
        client = BetaAnalyticsDataClient(credentials=creds)

        def run(dims, start, end, limit=200):
            req = RunReportRequest(
                property=GA4_PROPERTY,
                dimensions=[Dimension(name=d) for d in dims],
                metrics=[Metric(name='sessions')],
                date_ranges=[DateRange(start_date=start, end_date=end)], limit=limit)
            return client.run_report(req).rows

        refs = [{'source': r.dimension_values[0].value,
                 'sessions': int(r.metric_values[0].value)}
                for r in run(['sessionSource'], f'{days}daysAgo', 'yesterday')]
        refs.sort(key=lambda x: -x['sessions'])

        AI = ('chatgpt.com', 'gemini.google.com', 'perplexity.ai', 'claude.ai',
              'copilot.microsoft.com', 'copilot.com', 'duck.ai', 'bing.com/chat')
        ai = [r for r in refs if r['source'] in AI]
        tot = sum(r['sessions'] for r in ai) or 1
        for r in ai:
            r['share_pct'] = round(r['sessions'] / tot * 100, 1)

        series = []
        for r in run(['year', 'week', 'sessionDefaultChannelGroup'],
                     '90daysAgo', 'yesterday', limit=500):
            if r.dimension_values[2].value == 'AI Assistant':
                series.append((f"{r.dimension_values[0].value}W{int(r.dimension_values[1].value):02d}",
                               int(r.metric_values[0].value)))
        series.sort()
        return {'top_referrers': refs[:8], 'ai_referrers': ai, 'ai_weekly': series[-13:]}
    except Exception as e:
        return {'error': f'{type(e).__name__}: {e}'}


def repo_health():
    """Countable operational facts that otherwise get remembered, and drift."""
    since = '7 days ago'
    country = len([p for p in glob.glob(
        str(ROOT / 'src' / 'app' / '[[]locale[]]' / 'resources' / '*'))
        if os.path.isdir(p) and re.search(
            r'public-safety-software-|cad-dispatch-software-', os.path.basename(p))])
    guard = None
    plan = ROOT / 'SEO' / 'kabatone-seo-master-plan.md'
    plan_age = None
    if plan.exists():
        m = re.search(r'recorded (\d+)\.', plan.read_text())
        if m:
            guard = int(m.group(1))
        plan_age = (datetime.now()
                    - datetime.fromtimestamp(plan.stat().st_mtime)).days
    return {
        'commits_this_week_nextjs': int(_sh(['git', 'rev-list', '--count',
                                             f'--since={since}', 'origin/nextjs']) or 0),
        'prod_pushes_this_week': int(_sh(['git', 'rev-list', '--count',
                                          f'--since={since}', 'origin/main']) or 0),
        'country_pages': country,
        'country_guardrail': guard,
        'country_over_guardrail': (country - guard) if guard else None,
        'master_plan_age_days': plan_age,
    }


def carry_over():
    """Ages the ledger so escalation is mechanical rather than dependent on someone
    re-reading last week's prose. G5 was aspirational without state: KAB-1721 sat open
    five weeks and only resurfaced by luck."""
    f = ROOT / 'SEO' / 'carry-over.md'
    if not f.exists():
        return {'available': False}
    today = datetime.now().date()
    items, section = [], None
    for line in f.read_text().splitlines():
        low = line.strip().lower()
        if low.startswith('## open'):
            section = 'open'; continue
        if low.startswith('## closed'):
            section = 'closed'; continue
        if section != 'open' or not line.startswith('|'):
            continue
        c = [x.strip() for x in line.strip('|').split('|')]
        if len(c) < 5 or c[0] in ('id', '---') or set(c[0]) <= {'-'}:
            continue
        try:
            raised = datetime.strptime(c[2], '%Y-%m-%d').date()
        except ValueError:
            continue
        weeks = (today - raised).days // 7
        items.append({'id': c[0], 'item': c[1], 'first_raised': c[2], 'owner': c[3],
                      'status': c[4], 'weeks_open': weeks, 'escalate': weeks >= 3})
    items.sort(key=lambda i: -i['weeks_open'])
    return {'available': True, 'items': items,
            'escalated': [i for i in items if i['escalate']],
            'blocked_on_human': [i for i in items if i['status'] == 'blocked']}


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

    cl = d.get('clusters') or {}
    if cl:
        a("\n## Clusters — impressions vs click efficiency\n")
        a("| Cluster | Impressions | Clicks | CTR | Queries |")
        a("|---|---|---|---|---|")
        for name, v in list(cl.items())[:8]:
            a(f"| {name} | {v['impressions']:,} | {v['clicks']} | {v['ctr_pct']}% | {v['queries']} |")
        worst = [ (n,v) for n,v in cl.items() if v['impressions'] >= 2000 and v['ctr_pct'] < 0.2 ]
        if worst:
            a("\n> Impression-rich, click-poor: "
              + ", ".join(f"**{n}** ({v['impressions']:,} impr @ {v['ctr_pct']}%)" for n,v in worst)
              + " — that is where the leak is, and it is a cluster-level problem, not a page one.")

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

    gd = d.get('ga4_detail') or {}
    if gd and not gd.get('error'):
        if gd.get('ai_referrers'):
            a("\n### AI Assistant by engine\n")
            a("| Engine | Sessions | Share |")
            a("|---|---|---|")
            for r in gd['ai_referrers']:
                a(f"| {r['source']} | {r['sessions']} | {r['share_pct']}% |")
            a("\n> The monitor tests Claude with web search. This table is the only evidence "
              "about the engines that actually send traffic — read them together, not "
              "interchangeably (G10).")
        if gd.get('ai_weekly'):
            ser = gd['ai_weekly']
            vals = [v for _, v in ser]
            a(f"\n**AI weekly series (13w):** " + " · ".join(str(v) for v in vals[:-1])
              + f" · _{vals[-1]}*_")
            # The final bucket is the week in progress. Averaging a partial week in
            # manufactures a decline that does not exist -- the exact G9 failure this
            # series was added to prevent. Drop it from the trend, keep it visible.
            complete = vals[:-1]
            a(f"> _*last bucket ({ser[-1][0]}) is the week in progress and is excluded "
              f"from the trend below._")
            if len(complete) >= 6:
                peak = max(complete)
                recent = sum(complete[-3:]) / 3; early = sum(complete[-6:-3]) / 3
                trend = "rising" if recent > early * 1.15 else (
                        "declining" if recent < early * 0.85 else "flat")
                a(f">\n> Peak {peak}; last 3 complete weeks average {recent:.1f} vs prior 3 "
                  f"at {early:.1f} — **{trend}**. On this base, read the series, never the "
                  f"28-day delta alone (G9).")
        if gd.get('top_referrers'):
            a("\n**Top referrers:** " + " · ".join(
                f"{r['source']} {r['sessions']}" for r in gd['top_referrers'][:6]))

    rh = d.get('repo_health') or {}
    if rh:
        a("\n## Operations & health\n")
        a("| Signal | Value | |")
        a("|---|---|---|")
        a(f"| Striking distance (pos 5–15) | {d.get('striking_distance_count','?')} | |")
        a(f"| Commits this week (`nextjs`) | {rh['commits_this_week_nextjs']} | |")
        a(f"| Production pushes this week | {rh['prod_pushes_this_week']} | "
          f"{'⚠️ none' if not rh['prod_pushes_this_week'] else '✅'} |")
        over = rh.get('country_over_guardrail')
        a(f"| Country pages vs guardrail | {rh['country_pages']} vs {rh.get('country_guardrail','?')} | "
          f"{'⚠️ ' + str(over) + ' over' if over and over > 0 else '✅'} |")
        age = rh.get('master_plan_age_days')
        a(f"| Master plan age | {age}d | {'⚠️ stale' if age and age > 14 else '✅'} |")

    s = d['shipping']
    a("\n## Shipping\n")
    a(f"- `nextjs` ahead of `main`: **{s['staging_ahead_of_prod']}** commits "
      f"(staging {s['version_nextjs']})")
    a(f"- `main` ahead of `nextjs`: **{s['prod_ahead_of_staging']}** commits "
      f"(production {s['version_main']})")
    a(f"- Local commits never pushed: **{s['local_unpushed']}**")
    a(f"- Last production commit: `{s['last_prod_commit']}`")
    if s['diverged']:
        a(f"\n> 🔴 **The branches have DIVERGED — this is not a promotion.** `main` carries "
          f"{s['prod_ahead_of_staging']} commits that never went through `nextjs`, so merging "
          f"`nextjs` into `main` merges an older line into a newer one, not newer into older. "
          f"Do not describe production as simply 'behind'.")
        if s['overlapping_files']:
            a(f">\n> **{len(s['overlapping_files'])} source files changed on BOTH sides** — real "
              f"regression risk on the live site:\n>\n"
              + "\n".join(f"> - `{f}`" for f in s['overlapping_files'][:10]))
        a(">\n> Route SEO changes through a PR branched from `main` and resolved against its "
          "newer versions, rather than a direct merge.")
    elif s['staging_ahead_of_prod']:
        a(f"\n> `main` is an ancestor of `nextjs` — a clean fast-forward. "
          f"{s['staging_ahead_of_prod']} commits are built but not live.")
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

    co = d.get('carry_over') or {}
    if co.get('available'):
        a("\n## Carry-over ledger\n")
        if not co['items']:
            a("- Nothing open.")
        else:
            a("| Item | Owner | Weeks | Status | |")
            a("|---|---|---|---|---|")
            for i in co['items']:
                a(f"| {i['id']} — {i['item'][:52]} | {i['owner']} | **{i['weeks_open']}** | "
                  f"{i['status']} | {'🔴' if i['escalate'] else ''} |")
            esc = co['escalated']
            if esc:
                a(f"\n> 🔴 **{len(esc)} item(s) at 3+ weeks unexecuted.** State plainly in the "
                  f"report that these have not moved: "
                  + ", ".join(f"{i['id']} ({i['weeks_open']}w)" for i in esc))
            human = co['blocked_on_human']
            if human:
                a(f"\n> **{len(human)} blocked on a human**, not on work: "
                  + ", ".join(f"{i['id']} → {i['owner']}" for i in human)
                  + ". Distinguish these from not-yet-done in §10.")
        a("\n_Update `SEO/carry-over.md` as part of the report — move shipped items to Closed._")
    else:
        a("\n## Carry-over ledger\n\n- ⚠️ `SEO/carry-over.md` missing — carry-over counts "
          "will be guesswork. Create it.")

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
        'carry_over': carry_over(),
        'ga4_detail': ga4_detail() if ga4 else None,
        'repo_health': repo_health(),
        'striking_distance_count': len([r for r in query_index(cur).values()
                                        if 5 <= r.get('position', 99) <= 15
                                        and r.get('impressions', 0) >= 10]),
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
