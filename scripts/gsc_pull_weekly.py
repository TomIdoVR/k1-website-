#!/usr/bin/env python3.11
"""Weekly GSC pull for the KabatOne SEO program.

Reconstructed 2026-09-08: the original was untracked and lost with the
OneDrive folder. Output shape matches SEO/gsc-fresh-*.json exactly so that
seo_diff.py keeps working.

CTR is kept in PERCENT (0.06 == 0.06%), as in prior pulls.
"""
import argparse, json, subprocess, sys
from datetime import datetime, timedelta
from pathlib import Path

HELPER = Path.home() / '.claude' / 'skills' / 'seo' / 'scripts' / 'gsc_query.py'
PROPERTY = 'https://kabatone.com/'
LAG_DAYS = 2
WINDOW = 28


def q(prop, start, end, dims, limit):
    r = subprocess.run(
        ['python3.11', str(HELPER), '--property', prop,
         '--start-date', start, '--end-date', end,
         '--dimensions', dims, '--limit', str(limit), '--json'],
        capture_output=True, text=True, check=True)
    return json.loads(r.stdout).get('rows', [])


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--out', required=True)
    ap.add_argument('--property', default=PROPERTY)
    ap.add_argument('--days', type=int, default=WINDOW)
    a = ap.parse_args()

    end = (datetime.now() - timedelta(days=LAG_DAYS)).strftime('%Y-%m-%d')
    start = (datetime.now() - timedelta(days=LAG_DAYS + a.days - 1)).strftime('%Y-%m-%d')

    # NB: the API returns rows ordered by clicks desc. The original pull used a
    # 500-row query pool (reproduces striking_distance count exactly) and kept
    # API order for the "top_*_by_impressions" lists -- those are in fact ordered
    # by CLICKS. The names are a legacy misnomer; preserved for comparability.
    queries = q(a.property, start, end, 'query', 500)[:500]
    pages = q(a.property, start, end, 'page', 500)[:500]
    daily = q(a.property, start, end, 'date', 1000)

    clicks = sum(r['clicks'] for r in daily)
    impr = sum(r['impressions'] for r in daily)
    # impression-weighted average position, matching GSC's own aggregation
    avg_pos = (sum(r['position'] * r['impressions'] for r in daily) / impr) if impr else 0.0

    def trim(rows, key, n):
        out = []
        for r in rows[:n]:
            out.append({key: r['keys'][0], 'clicks': r['clicks'],
                        'impressions': r['impressions'],
                        'ctr': round(r['ctr'], 2), 'position': round(r['position'], 1)})
        return out

    sd = [{'query': r['keys'][0], 'clicks': r['clicks'], 'impressions': r['impressions'],
           'ctr': round(r['ctr'], 2), 'position': round(r['position'], 1)}
          for r in queries if 5 <= r['position'] <= 15 and r['impressions'] >= 10]
    sd.sort(key=lambda x: -x['impressions'])

    doc = {
        'meta': {
            'property': a.property,
            'date_range': f'{start} to {end}',
            'days': a.days,
            'pulled_at': datetime.now().strftime('%Y-%m-%d'),
            'data_source': 'Google Search Console API (field data)',
            'lag_note': f'GSC has ~2-3 day lag; data through {end}',
        },
        'totals': {
            'total_clicks': clicks,
            'total_impressions': impr,
            'avg_ctr_pct': round(clicks / impr * 100, 2) if impr else 0.0,
            'avg_position': round(avg_pos, 1),
        },
        'top_queries_by_impressions': trim(queries, 'query', 30),
        'top_pages_by_impressions': trim(pages, 'page', 20),
        'striking_distance': {
            'description': 'Queries with position 5-15 and >= 10 impressions (strong page-1 opportunities)',
            'count': len(sd),
            'rows': sd,
        },
        'daily_trend': [{'date': r['keys'][0], 'clicks': r['clicks'],
                         'impressions': r['impressions'], 'ctr': round(r['ctr'], 2),
                         'position': round(r['position'], 1)}
                        for r in sorted(daily, key=lambda x: x['keys'][0])],
    }
    Path(a.out).write_text(json.dumps(doc, indent=1))
    print(f"wrote {a.out}: {clicks} clicks / {impr} impressions, "
          f"{len(sd)} striking-distance, {len(doc['daily_trend'])} days")


if __name__ == '__main__':
    sys.exit(main())
