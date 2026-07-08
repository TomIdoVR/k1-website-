#!/usr/bin/env python3
"""
KabatOne — GEO (Generative Engine Optimization) citation monitor.

For each target buyer question, asks Claude *with web search* to answer it, then
checks whether kabatone.com / KabatOne appears in the answer or its citations —
a proxy for "would an AI answer engine cite us?". Logs a dated snapshot and reports
which queries cite KabatOne vs which cite competitors instead.

Usage:
  python3.11 track_geo.py                 # run all queries, append snapshot
  python3.11 track_geo.py --no-write       # report only
  python3.11 track_geo.py --limit 3        # first 3 queries (cheap smoke test)

Cost: one web-search-enabled message per query (~$0.01-0.03 each).
Run weekly (e.g. alongside the Monday weekly agent).
"""
import argparse, csv, os, re, sys
from pathlib import Path
from datetime import datetime

HERE = Path(__file__).parent
HISTORY = HERE / 'geo-history.csv'
QUERIES_FILE = HERE / 'geo-queries.txt'

COMPETITORS = ['genetec', 'milestone', 'motorola', 'avigilon', 'verkada', 'fusus',
               'axon', 'hexagon', 'mark43', 'tyler technologies', 'centralsquare',
               'carbyne', 'rapidsos', 'peregrine', 'flock safety']

def _api_key():
    kf = Path.home() / '.config' / 'claude-seo' / 'anthropic-api-key'
    if kf.exists():
        return kf.read_text().strip()
    return os.environ.get('ANTHROPIC_API_KEY', '')

def ask_with_search(client, model, query):
    """Ask the query with web search on; return (full_text, citation_urls)."""
    resp = client.messages.create(
        model=model,
        max_tokens=1024,
        tools=[{'type': 'web_search_20250305', 'name': 'web_search', 'max_uses': 3}],
        messages=[{'role': 'user',
                   'content': f'{query} Recommend specific vendors/products and cite sources.'}],
    )
    text_parts, urls = [], []
    for block in resp.content:
        btype = getattr(block, 'type', '')
        if btype == 'text':
            text_parts.append(block.text or '')
            for cit in (getattr(block, 'citations', None) or []):
                u = getattr(cit, 'url', None)
                if u:
                    urls.append(u)
        elif btype == 'web_search_tool_result':
            for item in (getattr(block, 'content', None) or []):
                u = getattr(item, 'url', None)
                if u:
                    urls.append(u)
    return ' '.join(text_parts), urls

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--model', default='claude-sonnet-4-6')
    ap.add_argument('--limit', type=int, default=0)
    ap.add_argument('--no-write', action='store_true')
    args = ap.parse_args()

    key = _api_key()
    if not key:
        print('No Anthropic API key (~/.config/claude-seo/anthropic-api-key). Aborting.')
        sys.exit(1)
    try:
        import anthropic
    except ImportError:
        print('anthropic library not installed.'); sys.exit(1)
    client = anthropic.Anthropic(api_key=key)

    queries = [q.strip() for q in QUERIES_FILE.read_text().splitlines()
               if q.strip() and not q.startswith('#')]
    if args.limit:
        queries = queries[:args.limit]

    today = datetime.now().strftime('%Y-%m-%d')
    rows, cited = [], 0
    for q in queries:
        try:
            text, urls = ask_with_search(client, args.model, q)
        except Exception as e:
            print(f'  [error] {q[:50]}: {str(e)[:80]}')
            continue
        blob = (text + ' ' + ' '.join(urls)).lower()
        kabat = ('kabatone' in blob) or any('kabatone.com' in u.lower() for u in urls)
        comps = sorted({c for c in COMPETITORS if c in blob})
        cited += 1 if kabat else 0
        rows.append({'date': today, 'query': q, 'kabatone_cited': 'Y' if kabat else 'N',
                     'competitors': '; '.join(comps)})
        print(f"  {'✅ CITED ' if kabat else '❌ absent'}  {q[:52]:<52}  vs: {', '.join(comps[:4]) or '—'}")

    print(f"\nKabatOne cited in {cited}/{len(rows)} AI answers ({100*cited//max(len(rows),1)}%).")

    if not args.no_write and rows:
        new = not HISTORY.exists()
        with open(HISTORY, 'a', newline='') as f:
            w = csv.DictWriter(f, fieldnames=['date', 'query', 'kabatone_cited', 'competitors'])
            if new:
                w.writeheader()
            for r in rows:
                w.writerow(r)
        print(f'appended {len(rows)} rows -> {HISTORY.name}')

if __name__ == '__main__':
    main()
