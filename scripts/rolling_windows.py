#!/usr/bin/env python3.11
"""Daily series with trailing 7-day and 28-day windows for the weekly SEO report.

Pulls daily GSC clicks/impressions and GA4 sessions by channel, then computes, for every
day, the trailing 7-day and 28-day totals and their per-day averages. The weekly report
plots both averages on one axis (a 7-day total is a quarter of a 28-day one, so totals
would not share a scale); tooltips show the totals.

    python3.11 scripts/rolling_windows.py --out SEO/audits/rolling-2026-11-16.json

Direct and Unassigned are left out: both carry the bot signature (~1 session/user,
85%+ bounce), so their windows would chart bot volume, not demand.
"""
import argparse, collections, json, subprocess, sys
from datetime import date, timedelta
from pathlib import Path

HELPERS = Path.home() / '.claude' / 'skills' / 'seo' / 'scripts'
GSC_PROPERTY = 'https://kabatone.com/'
GA4_PROPERTY = 'properties/530090453'
CHANNELS = ['Organic Search', 'AI Assistant', 'Referral']
WINDOWS = (7, 28)


def pull_gsc(start, end):
    r = subprocess.run(['python3.11', str(HELPERS / 'gsc_query.py'), '--property', GSC_PROPERTY,
                        '--start-date', start, '--end-date', end, '--dimensions', 'date',
                        '--limit', '1000', '--json'], capture_output=True, text=True, check=True)
    return {x['keys'][0]: {'clicks': x['clicks'], 'impressions': x['impressions']}
            for x in json.loads(r.stdout)['rows']}


def pull_ga4(start, end):
    sys.path.insert(0, str(HELPERS))
    from google.analytics.data_v1beta import BetaAnalyticsDataClient
    from google.analytics.data_v1beta.types import RunReportRequest, DateRange, Dimension, Metric
    from google_auth import get_oauth_credentials
    client = BetaAnalyticsDataClient(credentials=get_oauth_credentials(
        ['https://www.googleapis.com/auth/analytics.readonly']))
    rep = client.run_report(RunReportRequest(
        property=GA4_PROPERTY, date_ranges=[DateRange(start_date=start, end_date=end)],
        dimensions=[Dimension(name='date'), Dimension(name='sessionDefaultChannelGroup')],
        metrics=[Metric(name='sessions')], limit=100000))
    out = collections.defaultdict(dict)
    for row in rep.rows:
        d, ch = (v.value for v in row.dimension_values)
        out[f'{d[:4]}-{d[4:6]}-{d[6:]}'][ch] = int(row.metric_values[0].value)
    return out


def rolling(daily, last):
    """daily: {date: value}; returns [{date, w7, w28}] for days with a full 28-day history."""
    days = sorted(daily)
    first = date.fromisoformat(days[0])
    rows, d = [], first + timedelta(days=max(WINDOWS) - 1)
    while d <= last:
        row = {'date': d.isoformat()}
        for w in WINDOWS:
            span = [(d - timedelta(days=i)).isoformat() for i in range(w)]
            total = sum(daily.get(s, 0) for s in span)
            row[f'sum{w}'] = total
            row[f'avg{w}'] = round(total / w, 2)
        rows.append(row)
        d += timedelta(days=1)
    return rows


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--out', required=True)
    ap.add_argument('--days', type=int, default=140, help='days of chart shown (plus 27 of history)')
    a = ap.parse_args()
    end = date.today() - timedelta(days=1)
    start = end - timedelta(days=a.days + max(WINDOWS) - 1)
    gsc, ga = pull_gsc(start.isoformat(), end.isoformat()), pull_ga4(start.isoformat(), end.isoformat())
    gsc_last = date.fromisoformat(max(gsc))          # GSC lags ~2 days; never chart missing days as zero
    ga_last = date.fromisoformat(max(ga))
    series = {
        'gsc_clicks': {'label': 'Search clicks (GSC)', 'unit': 'clicks',
                       'rows': rolling({d: v['clicks'] for d, v in gsc.items()}, gsc_last)},
        'gsc_impressions': {'label': 'Search impressions (GSC)', 'unit': 'impressions',
                            'rows': rolling({d: v['impressions'] for d, v in gsc.items()}, gsc_last)},
    }
    for ch in CHANNELS:
        key = 'ga4_' + ch.lower().replace(' ', '_')
        series[key] = {'label': f'{ch} sessions (GA4)', 'unit': 'sessions',
                       'rows': rolling({d: v.get(ch, 0) for d, v in ga.items()}, ga_last)}
    Path(a.out).write_text(json.dumps({'generated': date.today().isoformat(), 'windows': WINDOWS,
                                       'series': series}, indent=1))
    for k, s in series.items():
        r = s['rows'][-1]
        print(f"{k:22} {r['date']}  7d {r['sum7']:>8}  28d {r['sum28']:>8}")


if __name__ == '__main__':
    main()
