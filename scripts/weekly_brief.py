#!/usr/bin/env python3
"""Weekly SEO + traffic data collector.

Emits one JSON file with everything the Monday brief needs: all-channel GA4
traffic, GSC search performance, and deterministic opportunity scoring. No
LLM, no HTML, no git, no Slack — those belong to the caller.

Two things this fixes versus the pipeline it replaces:

1. Service-account auth only. The old path used an OAuth refresh token that
   died three weeks running (and lived in plaintext inside a cloud trigger
   prompt). The service account has no refresh cycle, so that entire class of
   failure disappears. Verified: kabatone-seo-reader@ reads both GA4 and GSC.

2. Non-search traffic is actually reported. The previous GA4 pull hard-filtered
   every page-level query to Organic Search, so Direct — ~63% of sessions —
   showed up as a single number and nothing else. It also hid the
   "AI Assistant" channel, which is the only direct measurement of whether the
   GEO work is landing.

Usage:
    python3 scripts/weekly_brief.py --out SEO/audits/weekly-2026-08-04.json
    python3 scripts/weekly_brief.py --out /tmp/wb.json --days 28 --quiet
"""

import argparse
import json
import os
import subprocess
import sys
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timedelta
from pathlib import Path

REPO_ROOT = Path(__file__).parent.parent
SCRIPTS = Path(__file__).parent
sys.path.insert(0, str(SCRIPTS))

GA4_PROPERTY = 'properties/530090453'
GSC_PROPERTY = 'https://kabatone.com/'
GSC_ENDPOINT = 'https://www.googleapis.com/webmasters/v3/sites/{site}/searchAnalytics/query'

SA_ENV = 'GOOGLE_SERVICE_ACCOUNT_JSON'
SA_FILE = Path.home() / '.config' / 'claude-seo' / 'gsc-service-account.json'

SCOPES = [
    'https://www.googleapis.com/auth/analytics.readonly',
    'https://www.googleapis.com/auth/webmasters.readonly',
]

# Scoring helpers are shared with the dashboard generator so the brief and the
# dashboard can never disagree about what counts as an opportunity.
from seo_weekly_agent import expected_ctr, business_value, assign_cluster  # noqa: E402


# ── Auth ─────────────────────────────────────────────────────────────────────

def service_account_credentials():
    """Service-account creds from env JSON (cloud) or local file (dev).

    Deliberately no OAuth fallback: a silent fallback is what let the broken
    token go unnoticed for three weeks, because the service-account path kept
    the health check green while the real weekly job failed.
    """
    from google.oauth2 import service_account

    raw = os.environ.get(SA_ENV)
    if raw:
        try:
            info = json.loads(raw)
        except json.JSONDecodeError as exc:
            raise SystemExit(f'{SA_ENV} is set but is not valid JSON: {exc}')
        return service_account.Credentials.from_service_account_info(info, scopes=SCOPES)

    if SA_FILE.exists():
        return service_account.Credentials.from_service_account_file(str(SA_FILE), scopes=SCOPES)

    raise SystemExit(
        f'No service-account credentials. Set {SA_ENV} or place the key at {SA_FILE}.'
    )


def access_token(creds):
    """Mint a bearer token for the plain-REST GSC calls."""
    from google.auth.transport.requests import Request
    creds.refresh(Request())
    return creds.token


# ── GA4 ──────────────────────────────────────────────────────────────────────

def pull_ga4(creds, days):
    """All-channel traffic. Nothing here is filtered to Organic Search."""
    from google.analytics.data_v1beta import BetaAnalyticsDataClient
    from google.analytics.data_v1beta.types import (
        RunReportRequest, DateRange, Dimension, Metric, OrderBy,
        FilterExpression, Filter,
    )

    client = BetaAnalyticsDataClient(credentials=creds)
    cur = DateRange(start_date=f'{days}daysAgo', end_date='yesterday')
    prior = DateRange(start_date=f'{days * 2}daysAgo', end_date=f'{days + 1}daysAgo')
    by_sessions = [OrderBy(metric=OrderBy.MetricOrderBy(metric_name='sessions'), desc=True)]

    def report(**kw):
        return client.run_report(RunReportRequest(property=GA4_PROPERTY, **kw)).rows

    # engagementRate/keyEvents are newer metric names and not guaranteed on
    # every property, so degrade rather than fail the whole run.
    channel_dim = [Dimension(name='sessionDefaultChannelGroup')]
    try:
        rows = report(dimensions=channel_dim, date_ranges=[cur], order_bys=by_sessions,
                      metrics=[Metric(name='sessions'), Metric(name='totalUsers'),
                               Metric(name='engagementRate'), Metric(name='keyEvents')])
        rich = True
    except Exception:
        rows = report(dimensions=channel_dim, date_ranges=[cur], order_bys=by_sessions,
                      metrics=[Metric(name='sessions'), Metric(name='totalUsers')])
        rich = False

    channels_cur = {}
    for r in rows:
        entry = {'sessions': int(r.metric_values[0].value),
                 'users': int(r.metric_values[1].value)}
        if rich:
            entry['engagement_rate'] = round(float(r.metric_values[2].value) * 100, 1)
            entry['key_events'] = int(float(r.metric_values[3].value))
        channels_cur[r.dimension_values[0].value] = entry

    channels_prior = {r.dimension_values[0].value: int(r.metric_values[0].value)
                      for r in report(dimensions=channel_dim, date_ranges=[prior],
                                      metrics=[Metric(name='sessions')])}

    total_cur = sum(c['sessions'] for c in channels_cur.values())
    total_prior = sum(channels_prior.values())

    channels = []
    for name, data in sorted(channels_cur.items(), key=lambda kv: -kv[1]['sessions']):
        was = channels_prior.get(name, 0)
        channels.append({
            'channel': name,
            **data,
            'prior_sessions': was,
            'delta_pct': round((data['sessions'] - was) / was * 100, 1) if was else None,
            'share_pct': round(data['sessions'] / total_cur * 100, 1) if total_cur else 0.0,
        })

    # Weekly totals, 12 weeks
    week_dims = [Dimension(name='year'), Dimension(name='week')]
    trend_range = [DateRange(start_date='83daysAgo', end_date='yesterday')]
    weekly = sorted(
        [{'year': r.dimension_values[0].value, 'week': r.dimension_values[1].value,
          'sessions': int(r.metric_values[0].value)}
         for r in report(dimensions=week_dims, date_ranges=trend_range,
                         metrics=[Metric(name='sessions')])],
        key=lambda x: (x['year'], x['week']))

    # Landing pages per channel — the gap in the old organic-only pull
    pages_by_channel = {}
    for r in report(dimensions=channel_dim + [Dimension(name='landingPagePlusQueryString')],
                    metrics=[Metric(name='sessions')], date_ranges=[cur],
                    order_bys=by_sessions, limit=200):
        pages_by_channel.setdefault(r.dimension_values[0].value, []).append(
            {'page': r.dimension_values[1].value, 'sessions': int(r.metric_values[0].value)})
    pages_by_channel = {k: v[:10] for k, v in pages_by_channel.items()}

    # Who actually refers traffic
    referrers = [{'source': r.dimension_values[0].value,
                  'medium': r.dimension_values[1].value,
                  'sessions': int(r.metric_values[0].value)}
                 for r in report(dimensions=[Dimension(name='sessionSource'),
                                             Dimension(name='sessionMedium')],
                                 metrics=[Metric(name='sessions')], date_ranges=[cur],
                                 order_bys=by_sessions, limit=25)]

    # AI Assistant isolated — the closest thing to a GEO scoreboard
    ai_weekly = []
    try:
        ai_filter = FilterExpression(filter=Filter(
            field_name='sessionDefaultChannelGroup',
            string_filter=Filter.StringFilter(value='AI Assistant')))
        ai_weekly = sorted(
            [{'year': r.dimension_values[0].value, 'week': r.dimension_values[1].value,
              'sessions': int(r.metric_values[0].value)}
             for r in report(dimensions=week_dims, date_ranges=trend_range,
                             metrics=[Metric(name='sessions')], dimension_filter=ai_filter)],
            key=lambda x: (x['year'], x['week']))
    except Exception:
        pass  # channel may not exist on every property

    organic = channels_cur.get('Organic Search', {}).get('sessions', 0)

    return {
        'channels': channels,
        'totals': {
            'sessions': total_cur,
            'prior_sessions': total_prior,
            'delta_pct': round((total_cur - total_prior) / total_prior * 100, 1) if total_prior else None,
        },
        'organic': {
            'sessions': organic,
            'share_pct': round(organic / total_cur * 100, 1) if total_cur else 0.0,
        },
        'ai_assistant': {
            'sessions': channels_cur.get('AI Assistant', {}).get('sessions', 0),
            'weekly': ai_weekly,
            'pages': pages_by_channel.get('AI Assistant', []),
        },
        'weekly_trend': weekly,
        'referrers': referrers,
        'pages_by_channel': pages_by_channel,
    }


# ── GSC ──────────────────────────────────────────────────────────────────────

def gsc_query(token, start, end, dimensions, limit=1000):
    url = GSC_ENDPOINT.format(site=urllib.parse.quote(GSC_PROPERTY, safe=''))
    payload = json.dumps({
        'startDate': start, 'endDate': end,
        'dimensions': dimensions, 'rowLimit': limit,
    }).encode()
    req = urllib.request.Request(url, data=payload, headers={
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json',
    })
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            return json.load(resp).get('rows', [])
    except urllib.error.HTTPError as exc:
        body = exc.read().decode()[:300]
        raise SystemExit(
            f'GSC query failed ({exc.code}) for {GSC_PROPERTY}.\n{body}\n\n'
            'If this is a permission error, add the service account as a user on '
            'the property in Search Console > Settings > Users and permissions.'
        )


def pull_gsc(token, days):
    today = datetime.now()
    end_cur = (today - timedelta(days=1)).strftime('%Y-%m-%d')
    start_cur = (today - timedelta(days=days)).strftime('%Y-%m-%d')
    end_prior = (today - timedelta(days=days + 1)).strftime('%Y-%m-%d')
    start_prior = (today - timedelta(days=days * 2)).strftime('%Y-%m-%d')

    # Query rows are for ranking work only — never for totals. GSC anonymises
    # rare queries and omits them from query-dimension results, so summing them
    # undercounts badly (measured: 180 clicks summed vs 427 actual). Totals come
    # from a dimensionless query, which is the only figure that ties out to the
    # Search Console UI. The 25k limit is well above the ~2.6k queries this site
    # returns for a 28-day window, so ranking data isn't truncated either.
    q_cur = gsc_query(token, start_cur, end_cur, ['query'], limit=25000)
    pages = gsc_query(token, start_cur, end_cur, ['page'], limit=100)

    def totals(start, end):
        rows = gsc_query(token, start, end, [], limit=1)
        if not rows:
            return {'clicks': 0, 'impressions': 0, 'ctr_pct': 0.0, 'avg_position': 0.0}
        r = rows[0]
        return {
            'clicks': int(r.get('clicks', 0)),
            'impressions': int(r.get('impressions', 0)),
            'ctr_pct': round(r.get('ctr', 0) * 100, 2),
            'avg_position': round(r.get('position', 0), 1),
        }

    cur_totals, prior_totals = totals(start_cur, end_cur), totals(start_prior, end_prior)

    # Opportunity scoring — impressions x CTR gap x business value.
    opportunities, striking = [], []
    for row in q_cur:
        query = row['keys'][0]
        impressions = row.get('impressions', 0)
        position = row.get('position', 0)
        ctr = row.get('ctr', 0)  # REST API returns 0-1
        gap = max(0.0, expected_ctr(position) - ctr)
        if impressions >= 50 and gap > 0:
            opportunities.append({
                'query': query,
                'cluster': assign_cluster(query),
                'impressions': int(impressions),
                'clicks': int(row.get('clicks', 0)),
                'position': round(position, 1),
                'ctr_pct': round(ctr * 100, 2),
                'expected_ctr_pct': round(expected_ctr(position) * 100, 2),
                'score': round(impressions * gap * business_value(query), 1),
                'potential_clicks': int(impressions * gap),
            })
        if 5 <= position <= 15 and impressions >= 20:
            striking.append({
                'query': query, 'position': round(position, 1),
                'impressions': int(impressions), 'clicks': int(row.get('clicks', 0)),
                'cluster': assign_cluster(query),
            })

    opportunities.sort(key=lambda o: -o['score'])
    striking.sort(key=lambda s: -s['impressions'])

    clusters = {}
    for row in q_cur:
        name = assign_cluster(row['keys'][0])
        c = clusters.setdefault(name, {'clicks': 0, 'impressions': 0, 'queries': 0})
        c['clicks'] += int(row.get('clicks', 0))
        c['impressions'] += int(row.get('impressions', 0))
        c['queries'] += 1

    def pct_delta(now, was):
        return round((now - was) / was * 100, 1) if was else None

    return {
        'totals': cur_totals,
        'prior': prior_totals,
        'delta': {
            'clicks_pct': pct_delta(cur_totals['clicks'], prior_totals['clicks']),
            'impressions_pct': pct_delta(cur_totals['impressions'], prior_totals['impressions']),
        },
        'query_count': len(q_cur),
        'opportunities': opportunities[:20],
        'striking_distance': striking[:30],
        'striking_distance_count': len(striking),
        'clusters': clusters,
        'pages': [{'page': r['keys'][0], 'clicks': int(r.get('clicks', 0)),
                   'impressions': int(r.get('impressions', 0)),
                   'position': round(r.get('position', 0), 1)} for r in pages[:20]],
    }


# ── Repo context ─────────────────────────────────────────────────────────────

def git(*args, default=''):
    try:
        return subprocess.run(['git', '-C', str(REPO_ROOT), *args],
                              capture_output=True, text=True, check=True).stdout.strip()
    except Exception:
        return default


def pull_site_context():
    since = (datetime.now() - timedelta(days=7)).strftime('%Y-%m-%d')
    commits = [c for c in git('log', '--oneline', f'--since={since}').splitlines() if c]
    routes = len(list((REPO_ROOT / 'src' / 'app' / '[locale]').rglob('page.tsx')))
    return {
        'routes': routes,
        'locales': 2,
        'sitemap_urls': routes * 2,
        'commits_this_week': len(commits),
        'recent_commits': commits[:15],
        'branch': git('rev-parse', '--abbrev-ref', 'HEAD', default='unknown'),
    }


# ── Main ─────────────────────────────────────────────────────────────────────

def main():
    ap = argparse.ArgumentParser(description='Collect weekly SEO + traffic data as JSON')
    ap.add_argument('--out', required=True, help='Output JSON path')
    ap.add_argument('--days', type=int, default=28, help='Window size (default 28)')
    ap.add_argument('--quiet', action='store_true', help='Suppress progress output')
    args = ap.parse_args()

    def say(msg=''):
        if not args.quiet:
            print(msg)

    creds = service_account_credentials()
    say(f'Auth: service account ({creds.service_account_email})')

    say('Pulling GA4 (all channels)...')
    traffic = pull_ga4(creds, args.days)

    say('Pulling GSC...')
    search = pull_gsc(access_token(creds), args.days)

    say('Reading repo context...')
    site = pull_site_context()

    end = (datetime.now() - timedelta(days=1)).strftime('%Y-%m-%d')
    start = (datetime.now() - timedelta(days=args.days)).strftime('%Y-%m-%d')

    out = Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps({
        'generated': datetime.now().isoformat(timespec='seconds'),
        'period': {'start': start, 'end': end, 'days': args.days},
        'ga4_property': GA4_PROPERTY,
        'gsc_property': GSC_PROPERTY,
        'traffic': traffic,
        'search': search,
        'site': site,
    }, indent=2))

    delta = traffic['totals']['delta_pct']
    say()
    say(f'Written to: {out}')
    say(f"  Sessions:          {traffic['totals']['sessions']:>7,}"
        + (f'  ({delta:+}% vs prior)' if delta is not None else ''))
    say(f"  Organic:           {traffic['organic']['sessions']:>7,}"
        f"  ({traffic['organic']['share_pct']}% of total)")
    say(f"  AI Assistant:      {traffic['ai_assistant']['sessions']:>7,}")
    say(f"  Clicks:            {search['totals']['clicks']:>7,}")
    say(f"  Impressions:       {search['totals']['impressions']:>7,}")
    say(f"  Avg position:      {search['totals']['avg_position']:>7}")
    say(f"  Striking distance: {search['striking_distance_count']:>7}")
    return 0


if __name__ == '__main__':
    sys.exit(main())
