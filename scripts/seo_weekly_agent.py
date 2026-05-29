#!/usr/bin/env python3.11
"""
KabatOne Weekly SEO Traffic Agent
Runs every Monday. Pulls GA4 + GSC, scores opportunities, generates HTML dashboard,
commits to git. Uses OAuth credentials from ~/.config/claude-seo/

Usage:
    python3.11 scripts/seo_weekly_agent.py [--dry-run] [--days 28]

Scheduled via macOS LaunchAgent: com.kabatone.seo-weekly.plist
"""

import argparse
import json
import subprocess
import sys
from datetime import datetime, timedelta
from pathlib import Path

REPO_ROOT = Path(__file__).parent.parent
SEO_SKILLS = Path.home() / '.claude' / 'skills' / 'seo' / 'scripts'
AUDITS_DIR = REPO_ROOT / 'SEO' / 'audits'
GA4_PROPERTY = 'properties/530090453'
GSC_PROPERTY = 'https://kabatone.com/'

sys.path.insert(0, str(SEO_SKILLS))

# ── Expected CTR by position ──────────────────────────────────────────────────

def expected_ctr(pos):
    if pos < 2:   return 0.28
    if pos < 3:   return 0.16
    if pos < 4:   return 0.11
    if pos < 5:   return 0.08
    if pos < 7:   return 0.06
    if pos < 10:  return 0.04
    if pos < 13:  return 0.025
    if pos <= 20: return 0.015
    return 0.008

def business_value(query):
    q = query.lower()
    if any(t in q for t in ['dispatch', 'cad', '911', 'k-dispatch']): return 3.0
    if any(t in q for t in ['c5', 'command center', 'centro de mando', 'c4']): return 2.5
    if any(t in q for t in ['video management', 'vms', 'k-video', 'video analytics']): return 2.0
    if any(t in q for t in ['vs', 'alternative', 'compare', 'peregrine', 'motorola']): return 2.0
    if any(t in q for t in ['mexico', 'latam', 'municipal']): return 1.8
    return 1.0

CLUSTERS = {
    'Brand':             ['kabatone', 'kabat one', 'cityshob'],
    'C5 / Command Ctr':  ['c5', 'command center', 'centro de mando', 'c4'],
    'Video / VMS':       ['video management', 'vms', 'video analytics', 'surveillance'],
    'CAD / Dispatch':    ['cad', 'dispatch', '911', 'despacho'],
    'Comparisons':       ['vs', 'alternative', 'compare', 'peregrine', 'motorola'],
    'Country / LATAM':   ['mexico', 'colombia', 'peru', 'latin america', 'municipal'],
    'Emergency Mgmt':    ['emergency management', 'public safety', 'seguridad publica'],
    'AI / Analytics':    ['ai', 'analytics', 'artificial intelligence', 'machine learning'],
}

def assign_cluster(query):
    q = query.lower()
    for name, keywords in CLUSTERS.items():
        if any(k in q for k in keywords):
            return name
    return 'Other'

# ── Data pulls ────────────────────────────────────────────────────────────────

def pull_ga4(days):
    from google.analytics.data_v1beta import BetaAnalyticsDataClient
    from google.analytics.data_v1beta.types import (
        RunReportRequest, DateRange, Dimension, Metric,
        FilterExpression, Filter, OrderBy
    )
    from google_auth import get_oauth_credentials

    creds = get_oauth_credentials(['https://www.googleapis.com/auth/analytics.readonly'])
    client = BetaAnalyticsDataClient(credentials=creds)

    def run(req):
        return client.run_report(req)

    period_cur = DateRange(start_date=f'{days}daysAgo', end_date='yesterday')
    period_prior = DateRange(start_date=f'{days*2}daysAgo', end_date=f'{days+1}daysAgo')
    organic_filter = FilterExpression(filter=Filter(
        field_name='sessionDefaultChannelGroup',
        string_filter=Filter.StringFilter(value='Organic Search')
    ))

    # Sources current
    r = run(RunReportRequest(property=GA4_PROPERTY,
        dimensions=[Dimension(name='sessionDefaultChannelGroup')],
        metrics=[Metric(name='sessions'), Metric(name='totalUsers'), Metric(name='bounceRate')],
        date_ranges=[period_cur]))
    sources_cur = {row.dimension_values[0].value: {
        'sessions': int(row.metric_values[0].value),
        'users': int(row.metric_values[1].value),
        'bounce': round(float(row.metric_values[2].value)*100, 1)
    } for row in r.rows}

    # Sources prior
    r = run(RunReportRequest(property=GA4_PROPERTY,
        dimensions=[Dimension(name='sessionDefaultChannelGroup')],
        metrics=[Metric(name='sessions')],
        date_ranges=[period_prior]))
    sources_prior = {row.dimension_values[0].value: int(row.metric_values[0].value) for row in r.rows}

    # Weekly trend (last 12 weeks)
    r = run(RunReportRequest(property=GA4_PROPERTY,
        dimensions=[Dimension(name='week'), Dimension(name='year')],
        metrics=[Metric(name='sessions')],
        date_ranges=[DateRange(start_date='83daysAgo', end_date='yesterday')],
        order_bys=[OrderBy(dimension=OrderBy.DimensionOrderBy(dimension_name='year')),
                   OrderBy(dimension=OrderBy.DimensionOrderBy(dimension_name='week'))]))
    weekly = sorted([{
        'week': row.dimension_values[0].value,
        'year': row.dimension_values[1].value,
        'sessions': int(row.metric_values[0].value),
    } for row in r.rows], key=lambda x: (x['year'], x['week']))

    # Organic pages current
    r = run(RunReportRequest(property=GA4_PROPERTY,
        dimensions=[Dimension(name='landingPagePlusQueryString')],
        metrics=[Metric(name='sessions'), Metric(name='averageSessionDuration'), Metric(name='bounceRate')],
        date_ranges=[period_cur],
        dimension_filter=organic_filter,
        order_bys=[OrderBy(metric=OrderBy.MetricOrderBy(metric_name='sessions'), desc=True)],
        limit=25))
    pages_cur = {row.dimension_values[0].value: {
        'sessions': int(row.metric_values[0].value),
        'duration': int(float(row.metric_values[1].value)),
        'bounce': round(float(row.metric_values[2].value)*100, 1),
    } for row in r.rows}

    # Organic pages prior
    r = run(RunReportRequest(property=GA4_PROPERTY,
        dimensions=[Dimension(name='landingPagePlusQueryString')],
        metrics=[Metric(name='sessions')],
        date_ranges=[period_prior],
        dimension_filter=organic_filter, limit=50))
    pages_prior = {row.dimension_values[0].value: int(row.metric_values[0].value) for row in r.rows}

    return {
        'sources_cur': sources_cur, 'sources_prior': sources_prior,
        'weekly': weekly,
        'pages_cur': pages_cur, 'pages_prior': pages_prior,
    }

def pull_gsc(days):
    script = str(SEO_SKILLS / 'gsc_query.py')
    today = datetime.now()
    end_cur = (today - timedelta(days=1)).strftime('%Y-%m-%d')
    start_cur = (today - timedelta(days=days)).strftime('%Y-%m-%d')
    r = subprocess.run(
        ['python3.11', script, '--property', GSC_PROPERTY,
         '--start-date', start_cur, '--end-date', end_cur,
         '--dimensions', 'query', '--limit', '1000', '--json'],
        capture_output=True, text=True, check=True)
    data = json.loads(r.stdout)
    # ctr is in 0-100 scale from this script; normalize to 0-1 for scoring
    rows = data.get('rows', [])
    for row in rows:
        row['ctr'] = row['ctr'] / 100.0
    return rows

# ── Analysis ─────────────────────────────────────────────────────────────────

def analyse(gsc_rows, ga4):
    days = 28  # parameter not threaded all the way — fine for weekly
    sources_cur = ga4['sources_cur']
    sources_prior = ga4['sources_prior']
    total_cur = sum(v['sessions'] for v in sources_cur.values())
    total_prior = sum(sources_prior.values())

    # Build sources table
    sources = []
    for ch, data in sorted(sources_cur.items(), key=lambda x: -x[1]['sessions']):
        prior = sources_prior.get(ch, 0)
        delta = round((data['sessions']-prior)/prior*100, 1) if prior > 0 else None
        share = round(data['sessions']/total_cur*100, 1) if total_cur else 0
        sources.append({'channel': ch, 'sessions': data['sessions'], 'share': share,
                        'prior': prior, 'delta': delta, 'users': data['users']})

    # Organic share
    org = sources_cur.get('Organic Search', {}).get('sessions', 0)
    org_share = round(org/total_cur*100, 1) if total_cur else 0
    org_prior = sources_prior.get('Organic Search', 0)
    org_delta = round((org-org_prior)/org_prior*100, 1) if org_prior else None

    # Weekly trend stats
    weekly = ga4['weekly']
    w_sessions = [w['sessions'] for w in weekly]
    w_labels = [f"W{w['week']}" for w in weekly]
    avg_last4 = sum(w_sessions[-4:])/4 if len(w_sessions) >= 4 else 0
    avg_prev4 = sum(w_sessions[-8:-4])/4 if len(w_sessions) >= 8 else 0
    trend_delta = round((avg_last4-avg_prev4)/avg_prev4*100, 1) if avg_prev4 else 0
    trend_dir = 'growing' if trend_delta >= 5 else ('declining' if trend_delta <= -5 else 'flat')

    # Pages combined
    pages = []
    for page, data in ga4['pages_cur'].items():
        prior = ga4['pages_prior'].get(page, 0)
        cur = data['sessions']
        delta = round((cur-prior)/prior*100, 1) if prior > 0 else None
        status = '🆕' if delta is None else ('🟢' if delta >= 20 else ('🔴' if delta <= -20 else '🟡'))
        dur_s = data['duration']
        pages.append({'page': page, 'sessions': cur, 'prior': prior, 'delta': delta,
                      'status': status, 'duration': f"{dur_s//60}:{dur_s%60:02d}",
                      'bounce': data['bounce']})
    pages.sort(key=lambda x: -x['sessions'])

    # Opportunity scoring
    opportunities = []
    for row in gsc_rows:
        q = row.get('query') or row.get('keys', [None])[0]
        if not q: continue
        impr = row.get('impressions', 0)
        pos = row.get('position', 99)
        ctr = row.get('ctr', 0)
        exp = expected_ctr(pos)
        gap = max(0, exp - ctr)
        bv = business_value(q)
        score = round(impr * gap * bv, 1)
        opportunities.append({'query': q, 'impressions': impr, 'position': round(pos,1),
                               'ctr': round(ctr*100,2), 'exp_ctr': round(exp*100,2),
                               'ctr_gap': round(gap*100,2), 'biz_value': bv, 'score': score})
    opportunities.sort(key=lambda x: -x['score'])
    unlockable = int(sum(o['impressions'] * o['ctr_gap']/100 for o in opportunities[:15]))

    # Clusters
    cluster_data = {k: {'impressions':0,'clicks':0,'positions':[],'queries':0} for k in CLUSTERS}
    for row in gsc_rows:
        q = row.get('query') or (row.get('keys',[None])[0] if row.get('keys') else None)
        if not q: continue
        cl = assign_cluster(q)
        if cl not in cluster_data:
            cluster_data[cl] = {'impressions':0,'clicks':0,'positions':[],'queries':0}
        cluster_data[cl]['impressions'] += row.get('impressions',0)
        cluster_data[cl]['clicks'] += int(row.get('clicks',0))
        cluster_data[cl]['positions'].append(row.get('position',0))
        cluster_data[cl]['queries'] += 1
    clusters = {}
    for k, v in cluster_data.items():
        clusters[k] = {
            'impressions': v['impressions'],
            'clicks': v['clicks'],
            'avg_pos': round(sum(v['positions'])/len(v['positions']),1) if v['positions'] else 0,
            'queries': v['queries'],
        }

    return {
        'sources': sources, 'total_cur': total_cur, 'total_prior': total_prior,
        'total_delta': round((total_cur-total_prior)/total_prior*100,1) if total_prior else None,
        'organic': {'sessions': org, 'share': org_share, 'delta': org_delta},
        'weekly_labels': w_labels, 'weekly_sessions': w_sessions,
        'avg_last4': round(avg_last4,1), 'avg_prev4': round(avg_prev4,1),
        'trend_delta': trend_delta, 'trend_dir': trend_dir,
        'pages': pages[:15],
        'opportunities': opportunities[:20],
        'unlockable': unlockable,
        'clusters': clusters,
        'total_gsc_queries': len(gsc_rows),
    }

# ── HTML Report ───────────────────────────────────────────────────────────────

def build_html(a, today_str, period_str):
    def dc(delta):
        if delta is None: return '#06b6d4'
        return '#22c55e' if delta >= 0 else '#ef4444'

    def sc(score):
        if score >= 50: return '#ef4444'
        if score >= 10: return '#f59e0b'
        if score >= 3:  return '#06b6d4'
        return '#64748b'

    CH_COLORS = {
        'Organic Search': '#22c55e', 'Direct': '#06b6d4',
        'Referral': '#8b5cf6', 'Organic Social': '#f59e0b', 'Unassigned': '#64748b',
    }
    CL_COLORS = ['#22c55e','#06b6d4','#8b5cf6','#ef4444','#f59e0b','#10b981','#f97316','#a78bfa']

    def bv_badge(bv):
        c = {3.0:'#ef4444',2.5:'#f59e0b',2.0:'#06b6d4',1.8:'#8b5cf6',1.0:'#64748b'}.get(bv,'#64748b')
        return f'<span style="background:{c};color:#fff;padding:2px 7px;border-radius:4px;font-size:11px;font-weight:700">{bv}x</span>'

    # Source rows
    src_rows = ''
    for s in a['sources']:
        delta = s['delta']
        arr = '↑' if (delta and delta >= 10) else ('↓' if (delta and delta <= -10) else '→')
        d_str = f'{delta:+.1f}%' if delta is not None else 'new'
        dot = f'<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:{CH_COLORS.get(s["channel"],"#64748b")};margin-right:8px;vertical-align:middle"></span>'
        src_rows += f'<tr><td>{dot}{s["channel"]}</td><td style="text-align:right">{s["sessions"]:,}</td><td style="text-align:right">{s["share"]}%</td><td style="text-align:right;color:{dc(delta)};font-weight:600">{arr} {d_str}</td><td style="text-align:right;color:#94a3b8">{s["prior"]:,}</td></tr>\n'

    # Pages rows
    page_rows = ''
    for p in a['pages']:
        delta = p['delta']
        d_str = f'{delta:+.0f}%' if delta is not None else 'new'
        short = p['page'][:52] + ('…' if len(p['page'])>52 else '')
        link = f'<a href="https://kabatone.com{p["page"]}" target="_blank" style="color:#06b6d4;text-decoration:none;font-size:12px">{short}</a>'
        page_rows += f'<tr><td>{p["status"]}</td><td>{link}</td><td style="text-align:right">{p["sessions"]:,}</td><td style="text-align:right;color:{dc(delta)};font-weight:600">{d_str}</td><td style="text-align:right;color:#94a3b8">{p["duration"]}</td><td style="text-align:right;color:#94a3b8">{p["bounce"]}%</td></tr>\n'

    # Opportunity rows
    opp_rows = ''
    for i, o in enumerate(a['opportunities'][:15], 1):
        s_col = sc(o['score'])
        score_span = f'<span style="background:{s_col};color:#fff;padding:2px 8px;border-radius:4px;font-weight:700;font-size:12px">{o["score"]:.1f}</span>'
        opp_rows += f'<tr><td style="color:#64748b;text-align:center">{i}</td><td style="font-size:12px">{o["query"]}</td><td style="text-align:right">{o["impressions"]:,}</td><td style="text-align:right">{o["position"]:.1f}</td><td style="text-align:right">{o["ctr"]:.1f}%</td><td style="text-align:right;color:#22c55e">+{o["ctr_gap"]:.1f}%</td><td style="text-align:right">{score_span}</td><td style="text-align:center">{bv_badge(o["biz_value"])}</td></tr>\n'

    # Cluster rows
    cl_rows = ''
    for (name, data), color in zip(a['clusters'].items(), CL_COLORS):
        ctr = round(data['clicks']/data['impressions']*100, 2) if data['impressions'] else 0
        dot = f'<span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:{color};margin-right:8px;vertical-align:middle"></span>'
        cl_rows += f'<tr><td>{dot}<strong>{name}</strong></td><td style="text-align:right">{data["impressions"]:,}</td><td style="text-align:right">{data["clicks"]:,}</td><td style="text-align:right">{ctr:.2f}%</td><td style="text-align:right">{data["avg_pos"]:.1f}</td><td style="text-align:right;color:#64748b">{data["queries"]}</td></tr>\n'

    org = a['organic']
    td = a['total_delta']
    td_c = dc(td)
    org_d = org['delta']
    osh_c = '#22c55e' if org['share'] >= 30 else '#f59e0b'

    wl = json.dumps(a['weekly_labels'])
    ws = json.dumps(a['weekly_sessions'])
    src_ch = json.dumps([s['channel'] for s in a['sources']])
    src_cv = json.dumps([s['sessions'] for s in a['sources']])
    src_pv = json.dumps([s['prior'] for s in a['sources']])
    cl_names = json.dumps(list(a['clusters'].keys()))
    cl_impr = json.dumps([v['impressions'] for v in a['clusters'].values()])
    cl_pos  = json.dumps([v['avg_pos'] for v in a['clusters'].values()])

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>KabatOne Weekly Traffic — {today_str}</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{{box-sizing:border-box;margin:0;padding:0}}
body{{background:#0f1724;color:#e2e8f0;font-family:'Space Grotesk',sans-serif;font-size:14px;line-height:1.6}}
.header{{background:linear-gradient(135deg,#0f1724 0%,#1e293b 100%);border-bottom:1px solid #1e3a5f;padding:28px 40px}}
.header-top{{display:flex;align-items:center;gap:16px}}
.logo{{width:34px;height:34px;background:#06b6d4;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;color:#0f1724;flex-shrink:0}}
h1{{font-size:20px;font-weight:700;color:#f8fafc}}
.tag{{display:inline-block;background:rgba(6,182,212,.12);color:#06b6d4;padding:2px 9px;border-radius:20px;font-size:11px;font-weight:600;margin-left:10px}}
.subtitle{{color:#94a3b8;font-size:12px;margin-top:2px}}
.container{{max-width:1200px;margin:0 auto;padding:28px 40px}}
.kpi-grid{{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:28px}}
.kpi-card{{background:#1e293b;border:1px solid #334155;border-radius:12px;padding:18px}}
.kpi-label{{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:#64748b;margin-bottom:6px}}
.kpi-value{{font-size:26px;font-weight:700;color:#f8fafc;line-height:1}}
.kpi-delta{{font-size:12px;font-weight:600;margin-top:5px}}
.section{{margin-bottom:36px}}
.sh{{display:flex;align-items:center;gap:10px;margin-bottom:16px;padding-bottom:10px;border-bottom:1px solid #1e3a5f}}
.sh-icon{{width:28px;height:28px;background:rgba(6,182,212,.12);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}}
h2{{font-size:15px;font-weight:700;color:#f8fafc}}
.sh-meta{{color:#64748b;font-size:11px;margin-left:auto}}
.chart-grid{{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:28px}}
.chart-card{{background:#1e293b;border:1px solid #334155;border-radius:12px;padding:18px}}
.ct{{font-size:12px;font-weight:600;color:#94a3b8;margin-bottom:14px;text-transform:uppercase;letter-spacing:.07em}}
.cw{{position:relative;height:210px}}
.table-card{{background:#1e293b;border:1px solid #334155;border-radius:12px;overflow:hidden}}
table{{width:100%;border-collapse:collapse}}
thead th{{background:#0f1724;padding:9px 13px;text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:#64748b;border-bottom:1px solid #334155}}
tbody tr{{border-bottom:1px solid #1e293b}}
tbody tr:last-child{{border-bottom:none}}
tbody tr:hover{{background:rgba(6,182,212,.03)}}
tbody td{{padding:9px 13px;color:#cbd5e1}}
tfoot td{{padding:9px 13px;background:#0f1724;border-top:1px solid #334155;font-weight:700;color:#f8fafc}}
.insight{{background:rgba(6,182,212,.05);border:1px solid rgba(6,182,212,.2);border-left:3px solid #06b6d4;border-radius:0 8px 8px 0;padding:13px 17px;margin-bottom:18px;font-size:13px;color:#94a3b8}}
.insight strong{{color:#f8fafc}}
.footer{{background:#0f1724;border-top:1px solid #1e3a5f;padding:18px 40px;text-align:center;color:#475569;font-size:11px}}
.footer a{{color:#06b6d4;text-decoration:none}}
</style>
</head>
<body>
<div class="header">
  <div class="header-top">
    <div class="logo">K1</div>
    <div>
      <h1>Weekly Traffic Report<span class="tag">auto-generated</span></h1>
      <div class="subtitle">KabatOne.com &middot; GA4 + GSC &middot; {period_str} (28 days)</div>
    </div>
  </div>
</div>
<div class="container">

<div class="kpi-grid">
  <div class="kpi-card">
    <div class="kpi-label">Total Sessions</div>
    <div class="kpi-value">{a['total_cur']:,}</div>
    <div class="kpi-delta" style="color:{td_c}">{('+' if td and td>=0 else '')}{td:.1f}% vs prior</div>
  </div>
  <div class="kpi-card">
    <div class="kpi-label">Organic Sessions</div>
    <div class="kpi-value">{org['sessions']:,}</div>
    <div class="kpi-delta" style="color:{dc(org_d)}">{('+' if org_d and org_d>=0 else '')}{org_d:.1f}% vs prior</div>
  </div>
  <div class="kpi-card">
    <div class="kpi-label">Organic Share</div>
    <div class="kpi-value" style="color:{osh_c}">{org['share']}%</div>
    <div class="kpi-delta" style="color:#64748b">benchmark &ge;30%</div>
  </div>
  <div class="kpi-card">
    <div class="kpi-label">Opportunity Uplift</div>
    <div class="kpi-value" style="color:#06b6d4">~{a['unlockable']}</div>
    <div class="kpi-delta" style="color:#64748b">extra clicks/mo (top 15)</div>
  </div>
</div>

<div class="insight">
  <strong>Weekly pulse — {a['trend_dir']}:</strong> 4-week avg <strong>{a['avg_last4']:.0f}</strong> vs prior <strong>{a['avg_prev4']:.0f}</strong> ({a['trend_delta']:+.1f}%).
  Organic is <strong>{"growing" if org_d and org_d > 10 else ("flat" if org_d and abs(org_d) <= 10 else "declining")}</strong> ({('+' if org_d and org_d >= 0 else '')}{org_d:.0f}%),
  total sessions are <strong>{"up" if td and td > 0 else "down"}</strong> {abs(td):.0f}% overall.
</div>

<div class="chart-grid">
  <div class="chart-card">
    <div class="ct">&#x1F4C8; Weekly Sessions Trend</div>
    <div class="cw"><canvas id="weeklyChart"></canvas></div>
  </div>
  <div class="chart-card">
    <div class="ct">&#x1F4CA; Traffic Source Mix</div>
    <div class="cw"><canvas id="sourcesChart"></canvas></div>
  </div>
</div>

<div class="section">
  <div class="sh"><div class="sh-icon">&#x1F310;</div><h2>Traffic Sources</h2><div class="sh-meta">GA4 &middot; {period_str}</div></div>
  <div class="table-card"><table>
    <thead><tr><th>Channel</th><th style="text-align:right">Sessions</th><th style="text-align:right">Share</th><th style="text-align:right">vs Prior</th><th style="text-align:right">Prior</th></tr></thead>
    <tbody>{src_rows}</tbody>
    <tfoot><tr><td>TOTAL</td><td style="text-align:right">{a['total_cur']:,}</td><td style="text-align:right">100%</td><td style="text-align:right;color:{td_c};font-weight:600">{('+' if td and td>=0 else '')}{td:.1f}%</td><td style="text-align:right;color:#94a3b8">{a['total_prior']:,}</td></tr></tfoot>
  </table></div>
</div>

<div class="section">
  <div class="sh"><div class="sh-icon">&#x1F4C4;</div><h2>Top Organic Landing Pages</h2><div class="sh-meta">GA4 Organic &middot; Top 15</div></div>
  <div class="table-card"><table>
    <thead><tr><th style="width:28px"></th><th>Page</th><th style="text-align:right">Sessions</th><th style="text-align:right">vs Prior</th><th style="text-align:right">Duration</th><th style="text-align:right">Bounce</th></tr></thead>
    <tbody>{page_rows}</tbody>
  </table></div>
</div>

<div class="section">
  <div class="sh"><div class="sh-icon">&#x1F3AF;</div><h2>Keyword Opportunity Stack</h2><div class="sh-meta">GSC &middot; top 15 &middot; ~{a['unlockable']} extra clicks/mo</div></div>
  <div class="table-card"><table>
    <thead><tr><th style="text-align:center">#</th><th>Query</th><th style="text-align:right">Impr</th><th style="text-align:right">Pos</th><th style="text-align:right">CTR</th><th style="text-align:right">Gap</th><th style="text-align:right">Score</th><th style="text-align:center">BV</th></tr></thead>
    <tbody>{opp_rows}</tbody>
  </table></div>
</div>

<div class="chart-grid">
  <div class="chart-card">
    <div class="ct">&#x1F50D; Cluster Impressions</div>
    <div class="cw"><canvas id="clusterImprChart"></canvas></div>
  </div>
  <div class="chart-card">
    <div class="ct">&#x1F4CD; Cluster Avg Position</div>
    <div class="cw"><canvas id="clusterPosChart"></canvas></div>
  </div>
</div>

<div class="section">
  <div class="sh"><div class="sh-icon">&#x1F3F7;&#xFE0F;</div><h2>Keyword Cluster Momentum</h2><div class="sh-meta">GSC &middot; {a['total_gsc_queries']} total queries</div></div>
  <div class="table-card"><table>
    <thead><tr><th>Cluster</th><th style="text-align:right">Impressions</th><th style="text-align:right">Clicks</th><th style="text-align:right">CTR</th><th style="text-align:right">Avg Pos</th><th style="text-align:right">Queries</th></tr></thead>
    <tbody>{cl_rows}</tbody>
  </table></div>
</div>

</div>
<div class="footer">
  Auto-generated {today_str} &middot; <a href="https://kabatone.com">kabatone.com</a> &middot; seo-weekly-agent
</div>
<script>
Chart.defaults.color='#94a3b8';Chart.defaults.borderColor='#334155';
new Chart(document.getElementById('weeklyChart'),{{type:'line',data:{{labels:{wl},datasets:[{{label:'Sessions',data:{ws},borderColor:'#06b6d4',backgroundColor:'rgba(6,182,212,0.08)',borderWidth:2,fill:true,tension:0.3,pointRadius:3,pointBackgroundColor:'#06b6d4'}}]}},options:{{responsive:true,maintainAspectRatio:false,plugins:{{legend:{{display:false}}}},scales:{{x:{{grid:{{color:'rgba(51,65,85,0.5)'}},ticks:{{color:'#64748b'}}}},y:{{grid:{{color:'rgba(51,65,85,0.5)'}},ticks:{{color:'#64748b'}},beginAtZero:true}}}}}}}});
new Chart(document.getElementById('sourcesChart'),{{type:'bar',data:{{labels:{src_ch},datasets:[{{label:'Current',data:{src_cv},backgroundColor:'rgba(6,182,212,0.8)',borderRadius:4}},{{label:'Prior',data:{src_pv},backgroundColor:'rgba(100,116,139,0.4)',borderRadius:4}}]}},options:{{responsive:true,maintainAspectRatio:false,indexAxis:'y',plugins:{{legend:{{labels:{{color:'#94a3b8',boxWidth:10}}}}}},scales:{{x:{{grid:{{color:'rgba(51,65,85,0.5)'}},ticks:{{color:'#64748b'}}}},y:{{grid:{{display:false}},ticks:{{color:'#94a3b8'}}}}}}}}}});
const cc={json.dumps(CL_COLORS)};
new Chart(document.getElementById('clusterImprChart'),{{type:'bar',data:{{labels:{cl_names},datasets:[{{data:{cl_impr},backgroundColor:cc,borderRadius:4}}]}},options:{{responsive:true,maintainAspectRatio:false,indexAxis:'y',plugins:{{legend:{{display:false}}}},scales:{{x:{{grid:{{color:'rgba(51,65,85,0.5)'}},ticks:{{color:'#64748b'}}}},y:{{grid:{{display:false}},ticks:{{color:'#94a3b8',font:{{size:11}}}}}}}}}}}});
new Chart(document.getElementById('clusterPosChart'),{{type:'bar',data:{{labels:{cl_names},datasets:[{{data:{cl_pos},backgroundColor:cc.map(c=>c+'99'),borderColor:cc,borderWidth:1,borderRadius:4}}]}},options:{{responsive:true,maintainAspectRatio:false,indexAxis:'y',plugins:{{legend:{{display:false}},tooltip:{{callbacks:{{label:ctx=>' Pos '+ctx.raw.toFixed(1)}}}}}},scales:{{x:{{grid:{{color:'rgba(51,65,85,0.5)'}},ticks:{{color:'#64748b'}},title:{{display:true,text:'Lower = better',color:'#64748b',font:{{size:11}}}}}},y:{{grid:{{display:false}},ticks:{{color:'#94a3b8',font:{{size:11}}}}}}}}}}}});
</script>
</body>
</html>"""

# ── Git commit ────────────────────────────────────────────────────────────────

def git_commit(files, today_str, summary):
    subprocess.run(['git', '-C', str(REPO_ROOT), 'add'] + files, check=True)
    msg = f'SEO: weekly traffic report {today_str} — {summary}\n\nAuto-generated by seo_weekly_agent.py'
    subprocess.run(['git', '-C', str(REPO_ROOT), 'commit', '-m', msg], check=True)

# ── Main ─────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--dry-run', action='store_true', help='Skip git commit and push')
    parser.add_argument('--days', type=int, default=28)
    args = parser.parse_args()

    today = datetime.now()
    today_str = today.strftime('%Y-%m-%d')
    end = today - timedelta(days=1)
    start = end - timedelta(days=args.days - 1)
    period_str = f"{start.strftime('%b %d')} – {end.strftime('%b %d, %Y')}"

    print(f'[seo-weekly-agent] {today_str} — period: {period_str}')

    print('[1/4] Pulling GA4 data...')
    ga4 = pull_ga4(args.days)

    print('[2/4] Pulling GSC data...')
    gsc_rows = pull_gsc(args.days)
    print(f'      {len(gsc_rows)} queries')

    print('[3/4] Running analysis...')
    analysis = analyse(gsc_rows, ga4)
    org = analysis['organic']
    print(f'      Total sessions: {analysis["total_cur"]:,} ({analysis["total_delta"]:+.1f}%)')
    print(f'      Organic: {org["sessions"]:,} ({org["share"]}%, {org["delta"]:+.1f}%)')
    print(f'      Trend: {analysis["trend_dir"]} ({analysis["trend_delta"]:+.1f}%)')
    print(f'      Top opportunity: {analysis["opportunities"][0]["query"] if analysis["opportunities"] else "n/a"}')
    print(f'      Unlockable clicks: ~{analysis["unlockable"]}/month')

    print('[4/4] Generating outputs...')
    AUDITS_DIR.mkdir(parents=True, exist_ok=True)

    html_path = AUDITS_DIR / f'traffic-{today_str}.html'
    html_path.write_text(build_html(analysis, today_str, period_str), encoding='utf-8')
    print(f'      Written: {html_path}')

    raw_path = AUDITS_DIR / f'raw-ga4-{today_str}.json'
    raw_path.write_text(json.dumps({
        'generated': today.isoformat(), 'period': period_str,
        'ga4_property': GA4_PROPERTY, 'gsc_property': GSC_PROPERTY,
        'sources_cur': ga4['sources_cur'], 'sources_prior': ga4['sources_prior'],
        'weekly': ga4['weekly'], 'pages_cur': ga4['pages_cur'],
    }, indent=2), encoding='utf-8')
    print(f'      Written: {raw_path}')

    # Update latest symlink
    latest = AUDITS_DIR / 'traffic-latest.html'
    if latest.exists() or latest.is_symlink(): latest.unlink()
    latest.symlink_to(html_path.name)

    summary = f'organic {org["sessions"]} sess ({org["delta"]:+.0f}%), {analysis["trend_dir"]}, unlockable ~{analysis["unlockable"]} clicks'

    if args.dry_run:
        print(f'\n[dry-run] Would commit: {html_path.name}, {raw_path.name}')
        print(f'[dry-run] Summary: {summary}')
    else:
        git_commit([str(html_path), str(raw_path)],
                   today_str, summary)
        print(f'\n[✓] Committed. Summary: {summary}')

    print('\n[seo-weekly-agent] Done.')
    return 0

if __name__ == '__main__':
    sys.exit(main())
