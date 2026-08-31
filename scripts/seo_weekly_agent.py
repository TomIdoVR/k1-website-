#!/usr/bin/env python3.11
"""
KabatOne Weekly SEO Traffic Agent
Runs every Monday. Pulls GA4 + GSC, scores opportunities, calls Claude for
AI-powered conclusions, generates HTML dashboard, commits to git.

Usage:
    python3.11 scripts/seo_weekly_agent.py [--dry-run] [--days 28] [--no-ai]

Scheduled via macOS LaunchAgent: com.kabatone.seo-weekly.plist
"""

import argparse
import json
import re
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

# ── Intent qualification ──────────────────────────────────────────────────────
# Topic vocabulary alone does not make a query valuable. The dominant example is "c5":
# 5,115 impressions at position 8.9, but the sibling queries are "c5 mapa",
# "camaras de videovigilancia c5" (CDMX residents looking for the actual C5 agency),
# "c5 flyover closures" (a Manila highway) and "c5 data centers" (unrelated sense).
# Those clicks are unwinnable and worthless if won. Scoring them as a 2.5x opportunity
# put the site's single largest non-opportunity at the top of the brief every week.

_NON_BUYER = [
    # citizen / civic-service intent
    'mapa', 'map', 'camara', 'camaras', 'cámara', 'cámaras', 'videovigilancia',
    'telefono', 'teléfono', 'numero', 'número', 'denuncia', 'denuncias',
    'tramite', 'trámite', 'horario', 'ubicacion', 'ubicación', 'direccion', 'dirección',
    # jobs
    'empleo', 'vacantes', 'sueldo', 'salario', 'jobs', 'careers',
    # unrelated senses of the same token
    'flyover', 'closure', 'closures', 'traffic update', 'data center', 'data centers',
    'datacenter', 'datacenters',
    # Brand and parent-company lookups. These already convert at ~27% CTR; ranking them
    # as "opportunities" just pushes won traffic to the top of the queue (v2.328).
    'kabatone', 'kabat one', 'kabat', 'cityshob', 'grupo kabat',
]
_BUYER = [
    'software', 'platform', 'plataforma', 'system', 'systems', 'sistema', 'sistemas',
    'solution', 'solutions', 'solucion', 'solución', 'vendor', 'vendors', 'provider',
    'proveedor', 'best', 'top', 'demo', 'pricing', 'precio', 'cost', 'quote',
    'alternative', 'alternatives', 'alternativa', 'vs', 'compare', 'comparison',
    'integration', 'api', 'rfp', 'tender', 'licitacion', 'licitación',
]
_INFORMATIONAL = [
    'what is', 'que es', 'qué es', 'how does', 'how do', 'como funciona',
    'cómo funciona', 'diferencia', 'difference', 'meaning', 'significado',
    # 'significa' is the conjugated form and far more common in real queries than
    # 'significado' — 'que significa c4 y c5' was scoring as a buyer at 2.5x (v2.328).
    'significa', 'significan', 'stands for', 'definition', 'definicion', 'definición',
]
# A query that is only these tokens carries no qualifier and cannot be read as a buyer.
_BARE_TOKENS = {'c5', 'c4', 'cdmx', 'mexico', 'méxico', 'y', 'o', 'de', 'la', 'el', 'un', 'una'}


def _has(query, terms):
    """Word-boundary match. Substring matching wrongly fired 'ai' inside
    'computer aided dispatch' and 'cad' inside 'academic'."""
    q = query.lower()
    return any(re.search(r'\b' + re.escape(t) + r'\b', q) for t in terms)


def query_intent(query):
    """buyer | informational | navigational — whether the searcher could become a customer."""
    q = query.lower().strip()
    if _has(q, _BUYER):
        return 'buyer'
    if _has(q, _NON_BUYER):
        return 'navigational'
    if _has(q, _INFORMATIONAL):
        return 'informational'
    if set(re.findall(r"[a-z0-9áéíóúñü]+", q)) <= _BARE_TOKENS:
        return 'navigational'
    return 'buyer'


def business_value(query):
    intent = query_intent(query)
    # Kept in the ranking so it stays visible and auditable, but never near the top.
    if intent == 'navigational':
        return 0.2
    q = query.lower()
    if _has(q, ['dispatch', 'cad', '911', 'k-dispatch']):                     base = 3.0
    elif _has(q, ['c5', 'command center', 'centro de mando', 'c4']):          base = 2.5
    elif _has(q, ['video management', 'vms', 'k-video', 'video analytics']):  base = 2.0
    elif _has(q, ['vs', 'alternative', 'compare', 'peregrine', 'motorola']):  base = 2.0
    elif _has(q, ['mexico', 'latam', 'municipal']):                           base = 1.8
    else:                                                                     base = 1.0
    # Informational queries earn GEO citations, not clicks.
    if intent == 'informational':
        base *= 0.6
    return round(base, 2)

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
    for name, keywords in CLUSTERS.items():
        if _has(query, keywords):
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

def build_html(a, today_str, period_str, intelligence_html=None, ai_model='AI', action_plan_html=None):
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

    if intelligence_html:
        intelligence_block = f'''<div style="background:#0f1724;border:1px solid #1e3a5f;border-radius:12px;padding:24px 28px;margin-bottom:28px">
  <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #1e3a5f">
    <span style="font-size:18px">&#x1F9E0;</span>
    <span style="font-size:13px;font-weight:700;color:#f8fafc">Weekly Intelligence</span>
    <span style="margin-left:auto;font-size:11px;color:#475569">{ai_model} &middot; {today_str}</span>
  </div>
  {intelligence_html}
</div>'''
    else:
        intelligence_block = f'<div class="insight"><strong>Weekly pulse — {a["trend_dir"]}:</strong> 4-week avg <strong>{a["avg_last4"]:.0f}</strong> vs prior <strong>{a["avg_prev4"]:.0f}</strong> ({a["trend_delta"]:+.1f}%). Organic {("+" if org_d and org_d >= 0 else "")}{org_d:.0f}%, total sessions {"up" if td and td > 0 else "down"} {abs(td):.0f}%.</div>'

    if action_plan_html:
        action_plan_section = f'''<div style="background:#0f1724;border:1px solid #1e3a5f;border-radius:12px;padding:24px 28px;margin-bottom:28px">
  <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #1e3a5f">
    <span style="font-size:18px">&#x1F4CB;</span>
    <span style="font-size:13px;font-weight:700;color:#f8fafc">Full Action Plan</span>
    <span style="margin-left:auto;font-size:11px;color:#475569">{ai_model} &middot; {today_str}</span>
  </div>
  {action_plan_html}
</div>'''
    else:
        action_plan_section = ''

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

{intelligence_block}

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

{action_plan_section}
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

# ── Orchestrator Agent ────────────────────────────────────────────────────────

ORCHESTRATOR_SYSTEM = """You are the weekly SEO analyst for KabatOne — a B2G SaaS public safety \
platform targeting Mexico municipalities and broader LATAM.

## Your workflow

1. Call `pull_and_analyze` to get this week's traffic and keyword data
2. Analyze the results and write both the Weekly Intelligence section AND the Full Action Plan
3. Call `generate_html_report` with your intelligence text, action plan, and the analysis JSON
4. Call `commit_report` unless dry_run was specified — if dry_run, skip it
5. Output a one-line completion status

## Analysis methodology

### Opportunity scoring
score = impressions × ctr_gap × business_value
ctr_gap = expected_ctr(position) - actual_ctr

Expected CTR by position:
pos 1-2→28% | 2-3→16% | 3-4→11% | 4-5→8% | 5-7→6% | 7-10→4% | 10-13→2.5% | 13-20→1.5% | >20→0.8%

Business value multipliers:
- dispatch / cad / 911 / k-dispatch → 3x (core product, highest priority)
- c5 / command center / centro de mando → 2.5x
- video management / vms / video analytics → 2x
- vs / alternative / compare / peregrine / motorola → 2x
- mexico / latam / municipal → 1.8x
- everything else → 1x

### Keyword clusters
Brand | C5/Command Ctr | Video/VMS | CAD/Dispatch | Comparisons | Country/LATAM | Emergency Mgmt | AI/Analytics

### Health benchmarks
- Organic share ≥30% = healthy for B2G SaaS; <25% = flag as critical
- Trend: growing (+5%+ 4w avg), flat (±5%), declining (-5%-)
- Position ≤3 = top of funnel; 4-10 = striking distance; >10 = develop

## KabatOne product & competitive context

Core products:
- K-Dispatch: CAD / 911 dispatch — compete Motorola Solutions CAD (highest BV queries)
- K-Video: AI video analytics + VMS — compete Milestone, Genetec, generic VMS vendors
- K-Safety: GIS situational awareness for Seguridad Pública
- K-Traffic: Intelligent traffic management

Primary market: Mexico municipalities (C5 command centers, Seguridad Pública, SAP)
Secondary: Colombia, Peru, LATAM
Primary SEO competitor: Peregrine (analytics dashboards) — actively appearing alongside KabatOne queries

## Weekly Intelligence format

Write exactly these three sections (use exactly these headers, with ### prefix):

### What changed this week
3 bullets. Each: one specific, quantified observation comparing current vs prior period.
✓ Good: "Organic Search +48% (312→462 sessions) — only growing channel while Direct -29%"
✗ Bad: "Traffic is up" or any vague generality without numbers.

### What's surprising or worth watching
2 bullets. Flag anomalies, unexpected patterns, or anything breaking from the trend.
Can reference cluster-level observations, new pages appearing, queries spiking or dying.

### Top 3 actions this week
Ranked by estimated SEO impact. Each: ≤1 sentence, specific and actionable.
Must name exact query strings, page paths, or cluster names from the data.
Example: "Add FAQ schema to /vs/peregrine/ — 'peregrine analytics dashboards' shows 1,406 impr at pos 9.8 with 0% CTR"

Keep total digest under 250 words. No intro, no preamble, no conclusion — just the three sections.

## Full Action Plan format

After writing the intelligence digest, produce a `action_plan_text` with prioritized actions.
Use exactly these priority headers (### prefix):

### P0 — This Week
Up to 5 actions. These are high-score opportunities + critical fixes. Each action on one line:
`- **[Action title]** | Page: \`/path/\` | Query: \`exact query or cluster\` | ~NNN clicks`
  Then one indented line: `  → What: [specific instruction — what to add, change, create]`

### P1 — This Month
Up to 5 actions. Lower-score opportunities, content gaps, cluster development. Same format.

### P2 — Backlog
Up to 5 actions. Long-term, structural, or speculative. Same format.

Rules for action plan:
- Every action must reference exact data from the analysis (real query strings, real page paths, real positions)
- Every "~NNN clicks" estimate must be calculated from the opportunity scores (impressions × ctr_gap)
- P0 actions must be executable by one person in 1-2 hours
- No generic advice ("improve content quality") — only specific instructions ("add FAQ schema with 3 Q&As targeting 'what is C5 command center'")"""


TOOLS = [
    {
        "name": "pull_and_analyze",
        "description": (
            "Pull GA4 and GSC traffic data for the specified period window, apply KabatOne "
            "opportunity scoring and cluster analysis, compute organic page performance. "
            "Returns the complete analysis dict including: traffic sources, organic metrics, "
            "weekly trend, top organic pages, scored keyword opportunity stack (top 20), "
            "cluster momentum (8 clusters), and page winners/losers."
        ),
        "input_schema": {
            "type": "object",
            "properties": {
                "days": {
                    "type": "integer",
                    "description": "Analysis window in days (default 28)",
                    "default": 28,
                }
            },
            "required": [],
        },
    },
    {
        "name": "generate_html_report",
        "description": (
            "Build the HTML traffic dashboard from the analysis data and your intelligence text. "
            "Saves to SEO/audits/traffic-YYYY-MM-DD.html and updates the traffic-latest.html symlink. "
            "Returns {html_path, json_path}."
        ),
        "input_schema": {
            "type": "object",
            "properties": {
                "analysis_json": {
                    "type": "string",
                    "description": "JSON string of the full analysis dict returned by pull_and_analyze",
                },
                "intelligence_text": {
                    "type": "string",
                    "description": (
                        "Your Weekly Intelligence markdown — exactly three sections: "
                        "### What changed this week, ### What's surprising or worth watching, "
                        "### Top 3 actions this week"
                    ),
                },
                "action_plan_text": {
                    "type": "string",
                    "description": (
                        "Your Full Action Plan markdown — exactly three priority sections: "
                        "### P0 — This Week, ### P1 — This Month, ### P2 — Backlog. "
                        "Each action: bullet with title | Page | Query | ~NNN clicks, "
                        "then indented → What: instruction line."
                    ),
                },
                "today_str": {
                    "type": "string",
                    "description": "Today's date as YYYY-MM-DD",
                },
                "period_str": {
                    "type": "string",
                    "description": "Human-readable period like 'May 13 – Jun 09, 2026'",
                },
            },
            "required": ["analysis_json", "intelligence_text", "action_plan_text", "today_str", "period_str"],
        },
    },
    {
        "name": "commit_report",
        "description": (
            "Git commit the generated HTML and JSON report files. "
            "Call this after generate_html_report unless running in dry-run mode."
        ),
        "input_schema": {
            "type": "object",
            "properties": {
                "html_path": {"type": "string", "description": "Full path to the HTML report file"},
                "json_path": {"type": "string", "description": "Full path to the raw GA4 JSON file"},
                "today_str": {"type": "string", "description": "Date string YYYY-MM-DD"},
                "summary": {
                    "type": "string",
                    "description": "One-line summary of the week's findings for the commit message",
                },
            },
            "required": ["html_path", "json_path", "today_str", "summary"],
        },
    },
]


_session_state: dict = {}


def _get_anthropic_api_key():
    import os
    key = os.environ.get('ANTHROPIC_API_KEY')
    if key:
        return key
    key_file = Path.home() / '.config' / 'claude-seo' / 'anthropic-api-key'
    if key_file.exists():
        return key_file.read_text().strip()
    return None


def _tool_pull_and_analyze(days: int = 28) -> dict:
    print('    [1/2] Pulling GA4...')
    ga4 = pull_ga4(days)
    print('    [2/2] Pulling GSC...')
    gsc_rows = pull_gsc(days)
    print(f'          {len(gsc_rows)} queries')
    analysis = analyse(gsc_rows, ga4)
    _session_state['ga4'] = ga4
    org = analysis['organic']
    print(f'    Sessions: {analysis["total_cur"]:,} ({analysis["total_delta"]:+.1f}%)')
    print(f'    Organic:  {org["sessions"]:,} ({org["share"]}%, {org["delta"]:+.1f}%)')
    print(f'    Trend:    {analysis["trend_dir"]} ({analysis["trend_delta"]:+.1f}%)')
    return analysis


def _tool_generate_html_report(
    analysis_json: str, intelligence_text: str, action_plan_text: str,
    today_str: str, period_str: str
) -> dict:
    analysis = json.loads(analysis_json)
    intelligence_html = format_intelligence_html(intelligence_text)
    action_plan_html = format_action_plan_html(action_plan_text)
    html = build_html(analysis, today_str, period_str, intelligence_html,
                      ai_model='claude-sonnet-4-6', action_plan_html=action_plan_html)
    AUDITS_DIR.mkdir(parents=True, exist_ok=True)
    html_path = AUDITS_DIR / f'traffic-{today_str}.html'
    html_path.write_text(html, encoding='utf-8')
    print(f'    Written: {html_path}')

    ga4 = _session_state.get('ga4', {})
    today_dt = datetime.strptime(today_str, '%Y-%m-%d')
    raw_path = AUDITS_DIR / f'raw-ga4-{today_str}.json'
    raw_path.write_text(json.dumps({
        'generated': today_dt.isoformat(), 'period': period_str,
        'ga4_property': GA4_PROPERTY, 'gsc_property': GSC_PROPERTY,
        'sources_cur': ga4.get('sources_cur', {}),
        'sources_prior': ga4.get('sources_prior', {}),
        'weekly': ga4.get('weekly', []),
        'pages_cur': ga4.get('pages_cur', {}),
    }, indent=2), encoding='utf-8')
    print(f'    Written: {raw_path}')

    latest = AUDITS_DIR / 'traffic-latest.html'
    if latest.exists() or latest.is_symlink():
        latest.unlink()
    latest.symlink_to(html_path.name)

    return {'html_path': str(html_path), 'json_path': str(raw_path)}


def _tool_commit_report(html_path: str, json_path: str, today_str: str, summary: str) -> str:
    git_commit([html_path, json_path], today_str, summary)
    return f'Committed: {Path(html_path).name}, {Path(json_path).name}'


def _run_tool(name: str, args: dict):
    if name == 'pull_and_analyze':
        return _tool_pull_and_analyze(args.get('days', 28))
    if name == 'generate_html_report':
        return _tool_generate_html_report(
            args['analysis_json'], args['intelligence_text'],
            args.get('action_plan_text', ''),
            args['today_str'], args['period_str']
        )
    if name == 'commit_report':
        return _tool_commit_report(
            args['html_path'], args['json_path'], args['today_str'], args['summary']
        )
    raise ValueError(f'Unknown tool: {name}')


MAX_TOOL_ITERATIONS = 20   # backstop: the orchestrator needs ~4 turns in practice
API_MAX_ATTEMPTS = 5       # a single 502 killed the 2026-08-17 run; retry the turn


def _create_with_retry(client, **kwargs):
    """Call messages.create, retrying transient API failures with backoff.

    The SDK already retries 5xx twice internally; this is the outer layer for
    when that budget is exhausted (Anthropic 502s can persist for a minute or
    two). Client errors (4xx other than 429) are re-raised immediately.
    """
    import time
    import anthropic

    for attempt in range(1, API_MAX_ATTEMPTS + 1):
        try:
            return client.messages.create(**kwargs)
        except (anthropic.APIConnectionError, anthropic.RateLimitError) as e:
            err = e
        except anthropic.APIStatusError as e:
            if e.status_code < 500:
                raise
            err = e
        if attempt == API_MAX_ATTEMPTS:
            raise err
        delay = min(60, 5 * 2 ** (attempt - 1))
        print(f'  [retry] {type(err).__name__} — attempt {attempt}/{API_MAX_ATTEMPTS}, '
              f'sleeping {delay}s')
        time.sleep(delay)


def run_orchestrator(dry_run: bool = False, days: int = 28) -> int:
    import anthropic

    api_key = _get_anthropic_api_key()
    if not api_key:
        print(
            'ERROR: No Anthropic API key.\n'
            'Add to ~/.config/claude-seo/anthropic-api-key or set ANTHROPIC_API_KEY.\n'
            'Get a key at console.anthropic.com → API Keys.'
        )
        return 1

    today = datetime.now()
    today_str = today.strftime('%Y-%m-%d')
    end = today - timedelta(days=1)
    start = end - timedelta(days=days - 1)
    period_str = f"{start.strftime('%b %d')} – {end.strftime('%b %d, %Y')}"

    print(f'[seo-weekly-orchestrator] {today_str} — {period_str}')
    print(f'Mode: {"dry-run" if dry_run else "live"} | model: claude-sonnet-4-6')

    client = anthropic.Anthropic(api_key=api_key)
    messages = [{
        'role': 'user',
        'content': (
            f'Run the weekly SEO analysis for kabatone.com. '
            f'Today: {today_str}. Period: {period_str} ({days} days). '
            + ('DRY RUN — generate the report but do NOT call commit_report.'
               if dry_run else 'Commit the report after generating it.')
        ),
    }]

    for iteration in range(1, MAX_TOOL_ITERATIONS + 1):
        response = _create_with_retry(
            client,
            model='claude-sonnet-4-6',
            max_tokens=8192,
            system=ORCHESTRATOR_SYSTEM,
            tools=TOOLS,
            messages=messages,
        )
        messages.append({'role': 'assistant', 'content': response.content})

        if response.stop_reason == 'max_tokens':
            # No tool_use block to answer, so the loop would append a second
            # assistant turn and 400 on the next request. Fail loudly instead.
            print(f'ERROR: hit max_tokens on iteration {iteration} — output truncated. '
                  f'Raise max_tokens and re-run.')
            return 1

        if response.stop_reason == 'end_turn':
            for block in response.content:
                if hasattr(block, 'text'):
                    print(f'\n[✓] {block.text}')
            break

        tool_results = []
        for block in response.content:
            if block.type == 'tool_use':
                safe_args = {k: v for k, v in block.input.items()
                             if k not in ('analysis_json', 'intelligence_text', 'action_plan_text')}
                print(f'  [tool] {block.name}({safe_args})')
                try:
                    result = _run_tool(block.name, block.input)
                    tool_results.append({
                        'type': 'tool_result',
                        'tool_use_id': block.id,
                        'content': json.dumps(result) if not isinstance(result, str) else result,
                    })
                except Exception as e:
                    import traceback
                    err = f'ERROR in {block.name}: {e}\n{traceback.format_exc()}'
                    print(f'  [error] {err}')
                    tool_results.append({
                        'type': 'tool_result',
                        'tool_use_id': block.id,
                        'content': err,
                        'is_error': True,
                    })

        if not tool_results:
            # Neither end_turn nor a tool call — nothing to send back, so
            # looping would append two assistant turns in a row and 400.
            print(f'ERROR: no tool calls and stop_reason={response.stop_reason!r} '
                  f'on iteration {iteration}. Aborting.')
            return 1

        messages.append({'role': 'user', 'content': tool_results})
    else:
        print(f'ERROR: orchestrator did not finish within {MAX_TOOL_ITERATIONS} '
              f'tool iterations. Aborting.')
        return 1

    return 0


def run_no_ai(dry_run: bool = False, days: int = 28):
    """Generate report from raw data only — no LLM call."""
    today = datetime.now()
    today_str = today.strftime('%Y-%m-%d')
    end = today - timedelta(days=1)
    start = end - timedelta(days=days - 1)
    period_str = f"{start.strftime('%b %d')} – {end.strftime('%b %d, %Y')}"

    print(f'[seo-weekly-agent] {today_str} (no-ai)')
    print('[1/3] GA4...')
    ga4 = pull_ga4(days)
    print('[2/3] GSC...')
    gsc_rows = pull_gsc(days)
    print(f'      {len(gsc_rows)} queries')
    print('[3/3] Generating...')
    analysis = analyse(gsc_rows, ga4)
    org = analysis['organic']

    AUDITS_DIR.mkdir(parents=True, exist_ok=True)
    html_path = AUDITS_DIR / f'traffic-{today_str}.html'
    html_path.write_text(build_html(analysis, today_str, period_str), encoding='utf-8')
    raw_path = AUDITS_DIR / f'raw-ga4-{today_str}.json'
    raw_path.write_text(json.dumps({
        'generated': today.isoformat(), 'period': period_str,
        'ga4_property': GA4_PROPERTY, 'gsc_property': GSC_PROPERTY,
        'sources_cur': ga4['sources_cur'], 'sources_prior': ga4['sources_prior'],
        'weekly': ga4['weekly'], 'pages_cur': ga4['pages_cur'],
    }, indent=2), encoding='utf-8')
    latest = AUDITS_DIR / 'traffic-latest.html'
    if latest.exists() or latest.is_symlink():
        latest.unlink()
    latest.symlink_to(html_path.name)

    summary = (f'organic {org["sessions"]} sess ({org["delta"]:+.0f}%), '
               f'{analysis["trend_dir"]}, unlockable ~{analysis["unlockable"]} clicks')
    if dry_run:
        print(f'[dry-run] Would commit: {html_path.name}')
    else:
        git_commit([str(html_path), str(raw_path)], today_str, summary)
        print('[✓] Committed.')


def format_intelligence_html(digest_md):
    """Convert the markdown digest to styled HTML for the report."""
    lines = digest_md.split('\n')
    html_parts = []
    in_list = False

    for line in lines:
        line = line.rstrip()
        if not line:
            if in_list:
                html_parts.append('</ul>')
                in_list = False
            continue
        if line.startswith('### ') or line.startswith('## '):
            if in_list:
                html_parts.append('</ul>')
                in_list = False
            text = line.lstrip('#').strip()
            html_parts.append(
                f'<p style="font-size:11px;font-weight:700;text-transform:uppercase;'
                f'letter-spacing:0.12em;color:#06b6d4;margin:18px 0 8px">'
                f'{text}</p>'
            )
        elif line.startswith('- ') or line.startswith('* '):
            if not in_list:
                html_parts.append('<ul style="list-style:none;padding:0;margin:0">')
                in_list = True
            text = line[2:]
            # Bold anything in **...**
            import re
            text = re.sub(r'\*\*(.+?)\*\*', r'<strong style="color:#f8fafc">\1</strong>', text)
            html_parts.append(
                f'<li style="padding:5px 0 5px 14px;border-left:2px solid #1e3a5f;'
                f'margin-bottom:6px;color:#94a3b8;font-size:13px;line-height:1.6">'
                f'{text}</li>'
            )
        else:
            if in_list:
                html_parts.append('</ul>')
                in_list = False
            import re
            text = re.sub(r'\*\*(.+?)\*\*', r'<strong style="color:#f8fafc">\1</strong>', line)
            html_parts.append(f'<p style="color:#94a3b8;font-size:13px;line-height:1.6">{text}</p>')

    if in_list:
        html_parts.append('</ul>')

    return '\n'.join(html_parts)


def format_action_plan_html(plan_md: str) -> str:
    """Convert action plan markdown to styled HTML with P0/P1/P2 priority badges."""
    import re
    PRIORITY_COLORS = {
        'P0': ('#ef4444', 'rgba(239,68,68,0.12)'),
        'P1': ('#f59e0b', 'rgba(245,158,11,0.12)'),
        'P2': ('#06b6d4', 'rgba(6,182,212,0.12)'),
    }
    lines = plan_md.split('\n')
    html_parts = []
    in_list = False
    current_priority = None

    for line in lines:
        line = line.rstrip()
        if not line:
            if in_list:
                html_parts.append('</ul>')
                in_list = False
            continue

        if line.startswith('### ') or line.startswith('## '):
            if in_list:
                html_parts.append('</ul>')
                in_list = False
            text = line.lstrip('#').strip()
            # Detect P0/P1/P2
            priority = None
            for p in ('P0', 'P1', 'P2'):
                if text.startswith(p):
                    priority = p
                    break
            current_priority = priority
            if priority and priority in PRIORITY_COLORS:
                fg, bg = PRIORITY_COLORS[priority]
                badge = (f'<span style="background:{bg};color:{fg};border:1px solid {fg};'
                         f'padding:2px 8px;border-radius:4px;font-size:11px;font-weight:700;'
                         f'margin-right:8px">{priority}</span>')
                label = text[len(priority):].lstrip(' —–').strip()
                html_parts.append(
                    f'<p style="font-size:12px;font-weight:700;color:#f8fafc;margin:20px 0 10px;'
                    f'display:flex;align-items:center">{badge}{label}</p>'
                )
            else:
                html_parts.append(
                    f'<p style="font-size:11px;font-weight:700;text-transform:uppercase;'
                    f'letter-spacing:0.12em;color:#06b6d4;margin:18px 0 8px">{text}</p>'
                )

        elif line.startswith('  →') or line.startswith('  - '):
            # Indented instruction line
            text = line.strip().lstrip('→').lstrip('- ').strip()
            text = re.sub(r'\*\*(.+?)\*\*', r'<strong style="color:#f8fafc">\1</strong>', text)
            text = re.sub(r'`(.+?)`', r'<code style="background:#1e293b;color:#06b6d4;padding:1px 5px;border-radius:3px;font-size:11px">\1</code>', text)
            html_parts.append(
                f'<div style="padding:4px 0 8px 16px;color:#64748b;font-size:12px;'
                f'border-left:2px solid #334155;margin-left:8px;margin-bottom:4px">{text}</div>'
            )

        elif line.startswith('- ') or line.startswith('* '):
            if not in_list:
                html_parts.append('<ul style="list-style:none;padding:0;margin:0">')
                in_list = True
            text = line[2:]
            # Style | separators as meta info
            parts = text.split(' | ')
            if len(parts) > 1:
                title_part = re.sub(r'\*\*(.+?)\*\*', r'<strong style="color:#f8fafc">\1</strong>', parts[0])
                title_part = re.sub(r'`(.+?)`', r'<code style="background:#1e293b;color:#06b6d4;padding:1px 5px;border-radius:3px;font-size:11px">\1</code>', title_part)
                meta_parts = []
                for meta in parts[1:]:
                    meta = re.sub(r'`(.+?)`', r'<code style="background:#1e293b;color:#06b6d4;padding:1px 5px;border-radius:3px;font-size:11px">\1</code>', meta)
                    meta_parts.append(f'<span style="color:#64748b;font-size:11px">{meta}</span>')
                meta_html = ' <span style="color:#334155">·</span> '.join(meta_parts)
                cell_html = f'{title_part} <span style="color:#334155;margin:0 4px">|</span> {meta_html}'
            else:
                cell_html = re.sub(r'\*\*(.+?)\*\*', r'<strong style="color:#f8fafc">\1</strong>', text)
                cell_html = re.sub(r'`(.+?)`', r'<code style="background:#1e293b;color:#06b6d4;padding:1px 5px;border-radius:3px;font-size:11px">\1</code>', cell_html)

            if current_priority and current_priority in PRIORITY_COLORS:
                border_color = PRIORITY_COLORS[current_priority][0]
            else:
                border_color = '#334155'
            html_parts.append(
                f'<li style="padding:8px 0 4px 14px;border-left:2px solid {border_color};'
                f'margin-bottom:4px;color:#cbd5e1;font-size:13px;line-height:1.5">'
                f'{cell_html}</li>'
            )
        else:
            if in_list:
                html_parts.append('</ul>')
                in_list = False
            text = re.sub(r'\*\*(.+?)\*\*', r'<strong style="color:#f8fafc">\1</strong>', line)
            html_parts.append(f'<p style="color:#94a3b8;font-size:13px;line-height:1.6">{text}</p>')

    if in_list:
        html_parts.append('</ul>')

    return '\n'.join(html_parts)


# ── Git commit ────────────────────────────────────────────────────────────────

def git_commit(files, today_str, summary):
    subprocess.run(['git', '-C', str(REPO_ROOT), 'add'] + files, check=True)
    msg = f'SEO: weekly traffic report {today_str} — {summary}\n\nAuto-generated by seo_weekly_agent.py'
    subprocess.run(['git', '-C', str(REPO_ROOT), 'commit', '-m', msg], check=True)

# ── Main ─────────────────────────────────────────────────────────────────────

def _run_keyword_monitor(dry_run: bool = False, days: int = 28):
    """Weekly non-branded keyword rank snapshot — piggybacks on this scheduled run.
    Isolated in SEO/keywords/track_keywords.py; any failure here is swallowed so it
    can never break the weekly report."""
    script = REPO_ROOT / 'SEO' / 'keywords' / 'track_keywords.py'
    if not script.exists():
        return
    try:
        print('\n[keyword-monitor] snapshotting tracked non-branded keywords...')
        cmd = [sys.executable, str(script), '--days', str(days)]
        if dry_run:
            cmd.append('--no-write')
        subprocess.run(cmd, check=False)
        if not dry_run:
            # Persist the weekly snapshot to the repo (separate commit; failure-safe)
            hist = REPO_ROOT / 'SEO' / 'keywords' / 'keyword-history.csv'
            changed = subprocess.run(
                ['git', '-C', str(REPO_ROOT), 'diff', '--quiet', '--', str(hist)]
            ).returncode != 0
            if changed:
                ds = datetime.now().strftime('%Y-%m-%d')
                subprocess.run(['git', '-C', str(REPO_ROOT), 'add', str(hist)], check=False)
                subprocess.run(
                    ['git', '-C', str(REPO_ROOT), 'commit', '-m',
                     f'SEO: weekly keyword rank snapshot {ds}'], check=False)
                print('[keyword-monitor] committed keyword-history.csv')
    except Exception as e:
        print(f'[keyword-monitor] skipped: {e}')


def _run_geo_monitor(dry_run: bool = False):
    """Weekly GEO citation snapshot — asks Claude + web search the target buyer questions
    and logs whether AI answer engines cite KabatOne vs competitors. Skipped on dry-run
    (it costs API). Isolated in SEO/geo/track_geo.py; failures swallowed so they never
    break the weekly report."""
    if dry_run:
        return
    script = REPO_ROOT / 'SEO' / 'geo' / 'track_geo.py'
    if not script.exists():
        return
    # The dedicated `com.kabatone.seo-geo` LaunchAgent (07:30) owns this run; this
    # step is the fallback for when that job fails. Both firing logged every query
    # twice, doubling paid API spend and corrupting the citation rate. If today's
    # rows are already present, the 07:30 run succeeded and there is nothing to do.
    hist = REPO_ROOT / 'SEO' / 'geo' / 'geo-history.csv'
    today = datetime.now().strftime('%Y-%m-%d')
    try:
        if hist.exists() and any(
                ln.startswith(today + ',') for ln in hist.read_text().splitlines()):
            print(f'[geo-monitor] skipped: {today} rows already logged by com.kabatone.seo-geo')
            return
    except Exception as e:
        print(f'[geo-monitor] freshness check failed, running anyway: {e}')
    try:
        print('\n[geo-monitor] checking AI-answer citations for target queries...')
        subprocess.run([sys.executable, str(script)], check=False)
        changed = subprocess.run(
            ['git', '-C', str(REPO_ROOT), 'diff', '--quiet', '--', str(hist)]
        ).returncode != 0
        if changed:
            ds = datetime.now().strftime('%Y-%m-%d')
            subprocess.run(['git', '-C', str(REPO_ROOT), 'add', str(hist)], check=False)
            subprocess.run(['git', '-C', str(REPO_ROOT), 'commit', '-m',
                            f'SEO: weekly GEO citation snapshot {ds}'], check=False)
            print('[geo-monitor] committed geo-history.csv')
    except Exception as e:
        print(f'[geo-monitor] skipped: {e}')


def main():
    parser = argparse.ArgumentParser(description='KabatOne weekly SEO orchestrator agent')
    parser.add_argument('--dry-run', action='store_true', help='Skip git commit')
    parser.add_argument('--days', type=int, default=28)
    parser.add_argument('--no-ai', action='store_true', help='Skip LLM — raw analysis only')
    args = parser.parse_args()

    exit_code = 0

    # The report step is the most failure-prone (network + LLM). Isolate it so a
    # failure there doesn't also silently skip the two monitors below — that is
    # what wiped the 2026-08-17 run entirely.
    try:
        if args.no_ai:
            run_no_ai(dry_run=args.dry_run, days=args.days)
        else:
            exit_code = run_orchestrator(dry_run=args.dry_run, days=args.days) or 0
    except Exception:
        import traceback
        print('ERROR: report step failed — continuing to monitors.')
        traceback.print_exc()
        exit_code = 1

    # Weekly keyword rank snapshot rides on the same scheduled run (no separate cron)
    for label, fn in (
        ('keyword-monitor', lambda: _run_keyword_monitor(dry_run=args.dry_run, days=args.days)),
        # Weekly GEO citation snapshot (are AI answer engines citing KabatOne?)
        ('geo-monitor', lambda: _run_geo_monitor(dry_run=args.dry_run)),
    ):
        try:
            fn()
        except Exception:
            import traceback
            print(f'ERROR: {label} failed.')
            traceback.print_exc()
            exit_code = 1

    return exit_code


if __name__ == '__main__':
    sys.exit(main())
