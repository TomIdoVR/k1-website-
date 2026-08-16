#!/usr/bin/env python3
"""Weekly SEO brief — the caller weekly_brief.py defers to.

The collector (weekly_brief.py) owns *data*: auth, GA4, GSC, deterministic
opportunity scoring, one JSON out. This script owns *narrative + presentation*:
it reads that JSON, has an LLM write the Weekly Intelligence and a prioritised
action plan, renders both into a self-contained HTML dashboard, and optionally
commits. Nothing here touches Google or credentials.

Keeping the two apart is the whole point. The old monolith pulled data and
rendered in one process, so a dead OAuth token could run "green" for three
weeks while the real weekly job silently produced nothing. Here the collector
fails loudly on bad auth and this step fails loudly on a missing brief — neither
can mask the other.

No heavy SDKs: the Anthropic call goes over urllib, same as the collector's GSC
calls. --no-ai renders a deterministic brief with zero network and zero key.

Usage:
    # collector first, then the brief off its JSON
    python3 scripts/weekly_brief.py  --out SEO/audits/weekly-2026-08-04.json
    python3 scripts/weekly_report.py --data SEO/audits/weekly-2026-08-04.json

    python3 scripts/weekly_report.py --data wb.json --no-ai     # skip the LLM
    python3 scripts/weekly_report.py --data wb.json --commit    # git add+commit
"""

import argparse
import json
import os
import re
import subprocess
import sys
import urllib.error
import urllib.request
from datetime import datetime
from pathlib import Path

REPO_ROOT = Path(__file__).parent.parent
SCRIPTS = Path(__file__).parent
sys.path.insert(0, str(SCRIPTS))

AUDITS_DIR = REPO_ROOT / 'SEO' / 'audits'
DEFAULT_MODEL = 'claude-sonnet-4-6'
ANTHROPIC_ENDPOINT = 'https://api.anthropic.com/v1/messages'

# Pure markdown→HTML helpers are shape-agnostic, so the brief and the legacy
# report style the same. This is the only thing borrowed from the monolith.
from seo_weekly_agent import format_intelligence_html, format_action_plan_html  # noqa: E402


# ── LLM synthesis ─────────────────────────────────────────────────────────────

SYSTEM = (
    'You are the SEO analyst for kabatone.com, a B2G public-safety software '
    'platform (unified command-and-control; ICP is governments, municipalities '
    'and C2/C5 command centres, strongest in LATAM). You are handed one JSON '
    'blob of the last 28 days of GA4 + Search Console data, already scored. '
    'Write for the CEO: terse, specific, numbers over adjectives, no filler.\n\n'
    'Return EXACTLY two blocks and nothing else:\n\n'
    '<intelligence>\n'
    '3-6 markdown bullets. Lead with the single most important movement this '
    'week (a channel, a cluster, or the AI-Assistant number — that channel is '
    'our only direct read on whether GEO work is landing). Name real figures '
    'and deltas. Bold the numbers with **. No headers.\n'
    '</intelligence>\n\n'
    '<action_plan>\n'
    'Markdown. Each item on its own line, prefixed with a priority tag P0, P1 '
    'or P2 (P0 = do this week). Format: "P0 — <action> (<why, tied to a number '
    'from the data>)". 4-8 items, ordered P0 first. Tie every action to a '
    'specific opportunity query, striking-distance term, or channel shift in '
    'the data.\n'
    '</action_plan>'
)


def _get_anthropic_api_key():
    key = os.environ.get('ANTHROPIC_API_KEY')
    if key:
        return key
    key_file = Path.home() / '.config' / 'claude-seo' / 'anthropic-api-key'
    if key_file.exists():
        return key_file.read_text().strip()
    return None


def _compact_for_llm(data):
    """Trim the collector JSON to what the model needs — keeps the prompt cheap
    and the model focused. Long tails (200-row page lists) add cost, not signal."""
    t, s = data['traffic'], data['search']
    return {
        'period': data['period'],
        'totals': t['totals'],
        'organic': t['organic'],
        'ai_assistant': {'sessions': t['ai_assistant']['sessions'],
                         'weekly': t['ai_assistant']['weekly'][-6:],
                         'pages': t['ai_assistant']['pages'][:5]},
        'channels': t['channels'],
        'weekly_trend': t['weekly_trend'][-8:],
        'top_referrers': t['referrers'][:10],
        'search_totals': s['totals'],
        'search_delta': s['delta'],
        'opportunities': s['opportunities'][:15],
        'striking_distance': s['striking_distance'][:15],
        'clusters': s['clusters'],
        'top_pages': s['pages'][:10],
        'site': data.get('site', {}),
    }


def synthesize(data, model, timeout=120):
    """One Anthropic call → (intelligence_md, action_plan_md). Raises on failure
    so main() can fall back to the deterministic brief rather than ship blank."""
    key = _get_anthropic_api_key()
    if not key:
        raise RuntimeError(
            'No Anthropic key. Set ANTHROPIC_API_KEY or add '
            '~/.config/claude-seo/anthropic-api-key — or run with --no-ai.')

    payload = json.dumps({
        'model': model,
        'max_tokens': 2048,
        'system': SYSTEM,
        'messages': [{
            'role': 'user',
            'content': ('Weekly SEO data for kabatone.com follows. Write the two '
                        'blocks.\n\n```json\n'
                        + json.dumps(_compact_for_llm(data), indent=1)
                        + '\n```'),
        }],
    }).encode()

    req = urllib.request.Request(ANTHROPIC_ENDPOINT, data=payload, headers={
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
    })
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            body = json.load(resp)
    except urllib.error.HTTPError as exc:
        raise RuntimeError(f'Anthropic API {exc.code}: {exc.read().decode()[:300]}')

    text = ''.join(b.get('text', '') for b in body.get('content', []) if b.get('type') == 'text')
    intel = _extract(text, 'intelligence')
    plan = _extract(text, 'action_plan')
    if not intel:
        raise RuntimeError(f'Model returned no <intelligence> block:\n{text[:400]}')
    return intel, plan


def _extract(text, tag):
    m = re.search(rf'<{tag}>(.*?)</{tag}>', text, re.DOTALL)
    return m.group(1).strip() if m else ''


def fallback_brief(data):
    """Deterministic brief — no LLM, no network. Used by --no-ai and whenever
    the LLM step fails, so the report is never blank."""
    t, s = data['traffic'], data['search']
    tot = t['totals']
    org = t['organic']
    org_delta = next((c['delta_pct'] for c in t['channels']
                      if c['channel'] == 'Organic Search'), None)
    ai = t['ai_assistant']['sessions']
    td = tot.get('delta_pct')
    unlock = sum(o.get('potential_clicks', 0) for o in s['opportunities'][:15])

    def d(x):
        return 'n/a' if x is None else f'{x:+.0f}%'

    bullets = [
        f"- Total sessions **{tot['sessions']:,}** ({d(td)} vs prior 28d); "
        f"organic **{org['sessions']:,}** ({d(org_delta)}), **{org['share_pct']}%** of traffic.",
        f"- AI Assistant channel: **{ai:,}** sessions — the direct read on GEO reach.",
        f"- Search: **{s['totals']['clicks']:,}** clicks / **{s['totals']['impressions']:,}** "
        f"impressions, avg position **{s['totals']['avg_position']}**.",
        f"- **{s['striking_distance_count']}** queries in striking distance (pos 5-15); "
        f"top-15 opportunities could unlock **~{unlock}** clicks/mo.",
    ]
    return '\n'.join(bullets), ''


# ── HTML render (against the collector's own JSON shape) ──────────────────────

CSS = """
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{background:#0f1724;color:#e2e8f0;font-family:'Space Grotesk',sans-serif;font-size:14px;line-height:1.6}
.header{background:linear-gradient(135deg,#0f1724 0%,#1e293b 100%);border-bottom:1px solid #1e3a5f;padding:28px 40px}
.header-top{display:flex;align-items:center;gap:16px}
.logo{width:34px;height:34px;background:#06b6d4;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;color:#0f1724;flex-shrink:0}
h1{font-size:20px;font-weight:700;color:#f8fafc}
.tag{display:inline-block;background:rgba(6,182,212,.12);color:#06b6d4;padding:2px 9px;border-radius:20px;font-size:11px;font-weight:600;margin-left:10px}
.subtitle{color:#94a3b8;font-size:12px;margin-top:2px}
.container{max-width:1200px;margin:0 auto;padding:28px 40px}
.kpi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:28px}
.kpi-card{background:#1e293b;border:1px solid #334155;border-radius:12px;padding:18px}
.kpi-label{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:#64748b;margin-bottom:6px}
.kpi-value{font-size:26px;font-weight:700;color:#f8fafc;line-height:1}
.kpi-delta{font-size:12px;font-weight:600;margin-top:5px}
.section{margin-bottom:36px}
.sh{display:flex;align-items:center;gap:10px;margin-bottom:16px;padding-bottom:10px;border-bottom:1px solid #1e3a5f}
.sh-icon{width:28px;height:28px;background:rgba(6,182,212,.12);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
h2{font-size:15px;font-weight:700;color:#f8fafc}
.sh-meta{color:#64748b;font-size:11px;margin-left:auto}
.chart-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:28px}
.chart-card{background:#1e293b;border:1px solid #334155;border-radius:12px;padding:18px}
.ct{font-size:12px;font-weight:600;color:#94a3b8;margin-bottom:14px;text-transform:uppercase;letter-spacing:.07em}
.cw{position:relative;height:210px}
.table-card{background:#1e293b;border:1px solid #334155;border-radius:12px;overflow:hidden}
table{width:100%;border-collapse:collapse}
thead th{background:#0f1724;padding:9px 13px;text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:#64748b;border-bottom:1px solid #334155}
tbody tr{border-bottom:1px solid #1e293b}
tbody tr:last-child{border-bottom:none}
tbody tr:hover{background:rgba(6,182,212,.03)}
tbody td{padding:9px 13px;color:#cbd5e1}
tfoot td{padding:9px 13px;background:#0f1724;border-top:1px solid #334155;font-weight:700;color:#f8fafc}
.footer{background:#0f1724;border-top:1px solid #1e3a5f;padding:18px 40px;text-align:center;color:#475569;font-size:11px}
.footer a{color:#06b6d4;text-decoration:none}
"""

CH_COLORS = {'Organic Search': '#22c55e', 'Direct': '#06b6d4', 'Referral': '#8b5cf6',
             'Organic Social': '#f59e0b', 'AI Assistant': '#a78bfa', 'Unassigned': '#64748b'}
CL_COLORS = ['#22c55e', '#06b6d4', '#8b5cf6', '#ef4444', '#f59e0b', '#10b981', '#f97316', '#a78bfa']


def _dc(delta):
    if delta is None:
        return '#06b6d4'
    return '#22c55e' if delta >= 0 else '#ef4444'


def _delta_str(delta):
    return f'{delta:+.1f}%' if delta is not None else 'new'


def _score_color(score):
    if score >= 50: return '#ef4444'
    if score >= 10: return '#f59e0b'
    if score >= 3:  return '#06b6d4'
    return '#64748b'


def render_html(data, intelligence_html, action_plan_html, model, today_str):
    t, s = data['traffic'], data['search']
    period = data['period']
    period_str = f"{period['start']} – {period['end']} ({period['days']}d)"
    tot = t['totals']
    org = t['organic']
    td = tot.get('delta_pct')
    org_delta = next((c['delta_pct'] for c in t['channels']
                      if c['channel'] == 'Organic Search'), None)
    ai_sessions = t['ai_assistant']['sessions']
    unlock = sum(o.get('potential_clicks', 0) for o in s['opportunities'][:15])
    osh_c = '#22c55e' if org['share_pct'] >= 30 else '#f59e0b'

    # Source rows
    src_rows = ''
    for c in t['channels']:
        delta = c.get('delta_pct')
        arr = '↑' if (delta and delta >= 10) else ('↓' if (delta and delta <= -10) else '→')
        dot = (f'<span style="display:inline-block;width:8px;height:8px;border-radius:50%;'
               f'background:{CH_COLORS.get(c["channel"], "#64748b")};margin-right:8px;'
               f'vertical-align:middle"></span>')
        src_rows += (f'<tr><td>{dot}{c["channel"]}</td>'
                     f'<td style="text-align:right">{c["sessions"]:,}</td>'
                     f'<td style="text-align:right">{c.get("share_pct", 0)}%</td>'
                     f'<td style="text-align:right;color:{_dc(delta)};font-weight:600">{arr} {_delta_str(delta)}</td>'
                     f'<td style="text-align:right;color:#94a3b8">{c.get("prior_sessions", 0):,}</td></tr>\n')

    # Opportunity rows
    opp_rows = ''
    for i, o in enumerate(s['opportunities'][:15], 1):
        gap = max(0.0, o.get('expected_ctr_pct', 0) - o.get('ctr_pct', 0))
        sc_col = _score_color(o.get('score', 0))
        score_span = (f'<span style="background:{sc_col};color:#fff;padding:2px 8px;'
                      f'border-radius:4px;font-weight:700;font-size:12px">{o.get("score", 0):.1f}</span>')
        opp_rows += (f'<tr><td style="color:#64748b;text-align:center">{i}</td>'
                     f'<td style="font-size:12px">{o["query"]}</td>'
                     f'<td style="text-align:right">{o["impressions"]:,}</td>'
                     f'<td style="text-align:right">{o["position"]:.1f}</td>'
                     f'<td style="text-align:right">{o.get("ctr_pct", 0):.1f}%</td>'
                     f'<td style="text-align:right;color:#22c55e">+{gap:.1f}%</td>'
                     f'<td style="text-align:right">{score_span}</td>'
                     f'<td style="text-align:right;color:#94a3b8">+{o.get("potential_clicks", 0)}</td></tr>\n')

    # Striking-distance rows (pos 5-15, one page-2 push from clicks)
    sd_rows = ''
    for i, q in enumerate(s['striking_distance'][:15], 1):
        sd_rows += (f'<tr><td style="color:#64748b;text-align:center">{i}</td>'
                    f'<td style="font-size:12px">{q["query"]}</td>'
                    f'<td style="text-align:right">{q["position"]:.1f}</td>'
                    f'<td style="text-align:right">{q["impressions"]:,}</td>'
                    f'<td style="text-align:right;color:#94a3b8">{q.get("clicks", 0):,}</td>'
                    f'<td style="color:#64748b;font-size:11px">{q.get("cluster", "")}</td></tr>\n')

    # Cluster rows
    cl_items = sorted(s['clusters'].items(), key=lambda kv: -kv[1]['impressions'])
    cl_rows = ''
    for (name, cd), color in zip(cl_items, CL_COLORS * 3):
        ctr = round(cd['clicks'] / cd['impressions'] * 100, 2) if cd['impressions'] else 0
        dot = (f'<span style="display:inline-block;width:10px;height:10px;border-radius:2px;'
               f'background:{color};margin-right:8px;vertical-align:middle"></span>')
        cl_rows += (f'<tr><td>{dot}<strong>{name}</strong></td>'
                    f'<td style="text-align:right">{cd["impressions"]:,}</td>'
                    f'<td style="text-align:right">{cd["clicks"]:,}</td>'
                    f'<td style="text-align:right">{ctr:.2f}%</td>'
                    f'<td style="text-align:right;color:#64748b">{cd["queries"]}</td></tr>\n')

    # Referrer rows
    ref_rows = ''
    for r in t['referrers'][:10]:
        ref_rows += (f'<tr><td style="font-size:12px">{r["source"]}</td>'
                     f'<td style="color:#64748b;font-size:12px">{r["medium"]}</td>'
                     f'<td style="text-align:right">{r["sessions"]:,}</td></tr>\n')

    # Chart data
    weekly = t['weekly_trend']
    wl = json.dumps([f"W{w['week']}" for w in weekly])
    ws = json.dumps([w['sessions'] for w in weekly])
    src_ch = json.dumps([c['channel'] for c in t['channels']])
    src_cv = json.dumps([c['sessions'] for c in t['channels']])
    src_pv = json.dumps([c.get('prior_sessions', 0) for c in t['channels']])
    cl_names = json.dumps([n for n, _ in cl_items])
    cl_impr = json.dumps([cd['impressions'] for _, cd in cl_items])

    intel_block = (
        '<div style="background:#0f1724;border:1px solid #1e3a5f;border-radius:12px;'
        'padding:24px 28px;margin-bottom:28px">'
        '<div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;'
        'padding-bottom:12px;border-bottom:1px solid #1e3a5f">'
        '<span style="font-size:18px">&#x1F9E0;</span>'
        '<span style="font-size:13px;font-weight:700;color:#f8fafc">Weekly Intelligence</span>'
        f'<span style="margin-left:auto;font-size:11px;color:#475569">{model} &middot; {today_str}</span>'
        f'</div>{intelligence_html}</div>')

    action_block = ''
    if action_plan_html:
        action_block = (
            '<div style="background:#0f1724;border:1px solid #1e3a5f;border-radius:12px;'
            'padding:24px 28px;margin-bottom:28px">'
            '<div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;'
            'padding-bottom:12px;border-bottom:1px solid #1e3a5f">'
            '<span style="font-size:18px">&#x1F4CB;</span>'
            '<span style="font-size:13px;font-weight:700;color:#f8fafc">Action Plan</span>'
            f'<span style="margin-left:auto;font-size:11px;color:#475569">{model} &middot; {today_str}</span>'
            f'</div>{action_plan_html}</div>')

    chart_js = (
        "Chart.defaults.color='#94a3b8';Chart.defaults.borderColor='#334155';\n"
        f"new Chart(document.getElementById('weeklyChart'),{{type:'line',data:{{labels:{wl},"
        f"datasets:[{{label:'Sessions',data:{ws},borderColor:'#06b6d4',"
        "backgroundColor:'rgba(6,182,212,0.08)',borderWidth:2,fill:true,tension:0.3,"
        "pointRadius:3,pointBackgroundColor:'#06b6d4'}]},options:{responsive:true,"
        "maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{color:"
        "'rgba(51,65,85,0.5)'},ticks:{color:'#64748b'}},y:{grid:{color:'rgba(51,65,85,0.5)'},"
        "ticks:{color:'#64748b'},beginAtZero:true}}}});\n"
        f"new Chart(document.getElementById('sourcesChart'),{{type:'bar',data:{{labels:{src_ch},"
        f"datasets:[{{label:'Current',data:{src_cv},backgroundColor:'rgba(6,182,212,0.8)',"
        f"borderRadius:4}},{{label:'Prior',data:{src_pv},backgroundColor:'rgba(100,116,139,0.4)',"
        "borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,indexAxis:'y',"
        "plugins:{legend:{labels:{color:'#94a3b8',boxWidth:10}}},scales:{x:{grid:{color:"
        "'rgba(51,65,85,0.5)'},ticks:{color:'#64748b'}},y:{grid:{display:false},ticks:{color:"
        "'#94a3b8'}}}}});\n"
        f"new Chart(document.getElementById('clusterChart'),{{type:'bar',data:{{labels:{cl_names},"
        f"datasets:[{{data:{cl_impr},backgroundColor:{json.dumps(CL_COLORS)},borderRadius:4}}]}},"
        "options:{responsive:true,maintainAspectRatio:false,indexAxis:'y',plugins:{legend:"
        "{display:false}},scales:{x:{grid:{color:'rgba(51,65,85,0.5)'},ticks:{color:'#64748b'}},"
        "y:{grid:{display:false},ticks:{color:'#94a3b8',font:{size:11}}}}}});")

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>KabatOne Weekly Traffic — {today_str}</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>{CSS}</style>
</head>
<body>
<div class="header">
  <div class="header-top">
    <div class="logo">K1</div>
    <div>
      <h1>Weekly Traffic Report<span class="tag">auto-generated</span></h1>
      <div class="subtitle">KabatOne.com &middot; GA4 + GSC &middot; {period_str}</div>
    </div>
  </div>
</div>
<div class="container">

<div class="kpi-grid">
  <div class="kpi-card">
    <div class="kpi-label">Total Sessions</div>
    <div class="kpi-value">{tot['sessions']:,}</div>
    <div class="kpi-delta" style="color:{_dc(td)}">{_delta_str(td)} vs prior</div>
  </div>
  <div class="kpi-card">
    <div class="kpi-label">Organic Sessions</div>
    <div class="kpi-value">{org['sessions']:,}</div>
    <div class="kpi-delta" style="color:{_dc(org_delta)}">{_delta_str(org_delta)} vs prior</div>
  </div>
  <div class="kpi-card">
    <div class="kpi-label">AI Assistant</div>
    <div class="kpi-value" style="color:#a78bfa">{ai_sessions:,}</div>
    <div class="kpi-delta" style="color:#64748b">GEO reach signal</div>
  </div>
  <div class="kpi-card">
    <div class="kpi-label">Opportunity Uplift</div>
    <div class="kpi-value" style="color:#06b6d4">~{unlock}</div>
    <div class="kpi-delta" style="color:#64748b">extra clicks/mo (top 15)</div>
  </div>
</div>

{intel_block}

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
  <div class="sh"><div class="sh-icon">&#x1F310;</div><h2>Traffic Sources</h2><div class="sh-meta">GA4 &middot; all channels</div></div>
  <div class="table-card"><table>
    <thead><tr><th>Channel</th><th style="text-align:right">Sessions</th><th style="text-align:right">Share</th><th style="text-align:right">vs Prior</th><th style="text-align:right">Prior</th></tr></thead>
    <tbody>{src_rows}</tbody>
    <tfoot><tr><td>TOTAL</td><td style="text-align:right">{tot['sessions']:,}</td><td style="text-align:right">100%</td><td style="text-align:right;color:{_dc(td)};font-weight:600">{_delta_str(td)}</td><td style="text-align:right;color:#94a3b8">{tot.get('prior_sessions', 0):,}</td></tr></tfoot>
  </table></div>
</div>

<div class="section">
  <div class="sh"><div class="sh-icon">&#x1F3AF;</div><h2>Keyword Opportunity Stack</h2><div class="sh-meta">GSC &middot; top 15 &middot; ~{unlock} extra clicks/mo</div></div>
  <div class="table-card"><table>
    <thead><tr><th style="text-align:center">#</th><th>Query</th><th style="text-align:right">Impr</th><th style="text-align:right">Pos</th><th style="text-align:right">CTR</th><th style="text-align:right">Gap</th><th style="text-align:right">Score</th><th style="text-align:right">Unlock</th></tr></thead>
    <tbody>{opp_rows}</tbody>
  </table></div>
</div>

<div class="section">
  <div class="sh"><div class="sh-icon">&#x1F4CD;</div><h2>Striking Distance</h2><div class="sh-meta">GSC &middot; pos 5-15 &middot; {s['striking_distance_count']} total</div></div>
  <div class="table-card"><table>
    <thead><tr><th style="text-align:center">#</th><th>Query</th><th style="text-align:right">Pos</th><th style="text-align:right">Impr</th><th style="text-align:right">Clicks</th><th>Cluster</th></tr></thead>
    <tbody>{sd_rows}</tbody>
  </table></div>
</div>

<div class="chart-grid">
  <div class="chart-card">
    <div class="ct">&#x1F50D; Cluster Impressions</div>
    <div class="cw"><canvas id="clusterChart"></canvas></div>
  </div>
  <div class="chart-card">
    <div class="ct">&#x1F517; Top Referrers</div>
    <div class="table-card" style="border:none"><table>
      <thead><tr><th>Source</th><th>Medium</th><th style="text-align:right">Sessions</th></tr></thead>
      <tbody>{ref_rows}</tbody>
    </table></div>
  </div>
</div>

<div class="section">
  <div class="sh"><div class="sh-icon">&#x1F3F7;&#xFE0F;</div><h2>Keyword Cluster Momentum</h2><div class="sh-meta">GSC &middot; {s['query_count']} total queries</div></div>
  <div class="table-card"><table>
    <thead><tr><th>Cluster</th><th style="text-align:right">Impressions</th><th style="text-align:right">Clicks</th><th style="text-align:right">CTR</th><th style="text-align:right">Queries</th></tr></thead>
    <tbody>{cl_rows}</tbody>
  </table></div>
</div>

{action_block}
</div>
<div class="footer">
  Auto-generated {today_str} &middot; <a href="https://kabatone.com">kabatone.com</a> &middot; weekly_report.py
</div>
<script>{chart_js}</script>
</body>
</html>"""


# ── Delivery ──────────────────────────────────────────────────────────────────

def git_commit(files, today_str, summary):
    subprocess.run(['git', '-C', str(REPO_ROOT), 'add', *files], check=True)
    msg = f'Add: weekly traffic report {today_str} — {summary}'
    subprocess.run(['git', '-C', str(REPO_ROOT), 'commit', '-m', msg], check=True)


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    ap = argparse.ArgumentParser(description='Render the weekly SEO brief from collector JSON')
    ap.add_argument('--data', required=True, help='Collector JSON from weekly_brief.py')
    ap.add_argument('--out', help='Output HTML path (default SEO/audits/traffic-<date>.html)')
    ap.add_argument('--model', default=DEFAULT_MODEL, help=f'LLM model (default {DEFAULT_MODEL})')
    ap.add_argument('--no-ai', action='store_true', help='Skip the LLM; deterministic brief only')
    ap.add_argument('--commit', action='store_true', help='git add + commit the HTML')
    ap.add_argument('--quiet', action='store_true')
    args = ap.parse_args()

    def say(m=''):
        if not args.quiet:
            print(m)

    data = json.loads(Path(args.data).read_text())
    today_str = datetime.now().strftime('%Y-%m-%d')
    model = args.model

    if args.no_ai:
        say('Brief: deterministic (--no-ai)')
        intel_md, plan_md = fallback_brief(data)
        model = 'deterministic'
    else:
        try:
            say(f'Brief: {model}...')
            intel_md, plan_md = synthesize(data, model)
        except Exception as exc:
            say(f'  LLM step failed ({exc}) — falling back to deterministic brief.')
            intel_md, plan_md = fallback_brief(data)
            model = 'deterministic (LLM failed)'

    intelligence_html = format_intelligence_html(intel_md)
    action_plan_html = format_action_plan_html(plan_md) if plan_md else ''
    html = render_html(data, intelligence_html, action_plan_html, model, today_str)

    out = Path(args.out) if args.out else AUDITS_DIR / f'traffic-{today_str}.html'
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html, encoding='utf-8')
    say(f'Written: {out}')

    latest = AUDITS_DIR / 'traffic-latest.html'
    if out.parent == AUDITS_DIR:
        if latest.exists() or latest.is_symlink():
            latest.unlink()
        latest.symlink_to(out.name)

    if args.commit:
        tot = data['traffic']['totals']
        summary = f"{tot['sessions']:,} sessions, {model}"
        git_commit([str(out), str(latest)], today_str, summary)
        say('Committed.')

    return 0


if __name__ == '__main__':
    sys.exit(main())
