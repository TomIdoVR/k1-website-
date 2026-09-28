#!/usr/bin/env python3
"""Find buyer queries that land on a definitional page instead of a buyer page.

This mechanism has now been confirmed three separate times by hand:

    v2.329/v2.376  video-analytics cluster
    v2.342 (CAD-1) what-is-cad-dispatch-software absorbing CAD buyer queries
    v2.348 (VMS)   what-is-video-management-software ranking 22-24 for
                   "best vms software" at zero clicks, while
                   /resources/best-vms-software did not rank for it at all

Each was found by reading a report and noticing. Three instances of one
mechanism is a pattern, not a coincidence, so this looks for the rest of them
directly instead of waiting to stumble on the fourth.

A collision needs all three of:

  1. the query reads as buyer intent      (query_intent -> 'buyer')
  2. the page Google serves is an explainer  (what-is-* / how-* / que-es-* ...)
  3. a buyer page on the same topic exists   (best-* / vs/* / a product page)

Condition 3 is what separates a collision from an ordinary gap: if no buyer
page exists, the fix is to write one, which is a different piece of work.

Usage:
    python3 scripts/intent_collision.py --days 28
    python3 scripts/intent_collision.py --days 28 --out SEO/audits/intent-collisions-$(date +%F)
"""

import argparse
import json
import re
import sys
from datetime import datetime, timedelta
from pathlib import Path

REPO_ROOT = Path(__file__).parent.parent
SCRIPTS = Path(__file__).parent
sys.path.insert(0, str(SCRIPTS))

from weekly_brief import (  # noqa: E402
    service_account_credentials, access_token, gsc_query, query_intent,
)

ROUTES = REPO_ROOT / 'src' / 'app' / '[locale]'

# Slug prefixes that promise a definition or an explanation, in both locales.
EXPLAINER_PREFIXES = ('what-is', 'how-', 'que-es', 'como-', 'cual-es')
# Slug prefixes that promise a purchase decision.
BUYER_PREFIXES = ('best-', 'top-', 'mejores-', 'mejor-')

# query_intent() returns 'buyer' as its FALLBACK — anything it cannot place
# lands there. That is right for scoring, where a false buyer is cheap, and
# wrong here, where it turns every bare topic term ("video analytics") into a
# collision. A collision claim needs the searcher to be visibly shopping, so
# this asks for an explicit commercial marker instead of trusting the default.
BUYER_MARKERS = (
    'best', 'top', 'vendor', 'vendors', 'provider', 'providers', 'compan',
    'pricing', 'price', 'cost', 'alternative', 'alternatives', 'compare',
    'comparison', ' vs ', 'review', 'reviews', 'buy', 'purchase', 'quote',
    'mejor', 'mejores', 'precio', 'proveedor', 'proveedores', 'comparar',
    'software for', 'platform for', 'solution for', 'system for',
    'software para', 'plataforma para',
)

# An explainer ranked at position 40 is not absorbing the query; it is simply
# present. To claim Google is serving the wrong page it has to actually be the
# page being served. Calibrated at 30 against the known v2.348 case: the
# explainer held position 22-24 for "best vms software", so a cap of 20 --
# the first value tried -- silently excluded the very finding this was built
# to generalise.
MAX_EXPLAINER_POSITION = 30.0


# A query that asks for a definition is not a collision — the explainer is the
# right page for it. This is the only exclusion that is genuinely safe to make
# automatically; everything else is a judgement call, so it gets tiered rather
# than dropped.
DEFINITIONAL_MARKERS = (
    'what is', 'what are', 'what does', 'how does', 'how do', 'how to',
    'que es', 'que son', 'como funciona', 'define', 'definition', 'meaning',
    'tutorial', 'example', 'examples', 'explained', 'significado',
)


def shopping(query):
    """True when the query carries an explicit commercial marker."""
    q = f' {query.lower().strip()} '
    return any(m in q for m in BUYER_MARKERS)


def definitional(query):
    q = f' {query.lower().strip()} '
    return any(m in q for m in DEFINITIONAL_MARKERS)


# Slug words that carry no topic meaning, so they never count toward the
# overlap that decides whether two pages are about the same thing.
STOPWORDS = {
    'what', 'is', 'a', 'an', 'the', 'how', 'work', 'works', 'que', 'es', 'un',
    'una', 'como', 'best', 'top', 'mejores', 'mejor', 'guide', 'for', 'and',
    'de', 'la', 'el', 'los', 'las', 'software', 'vs',
}


def slug_of(url):
    path = re.sub(r'^https?://[^/]+', '', url).strip('/')
    path = re.sub(r'^es/', '', path)
    return path


def is_explainer(url):
    slug = slug_of(url).split('/')[-1]
    return slug.startswith(EXPLAINER_PREFIXES)


def is_buyer_page(url):
    slug = slug_of(url)
    last = slug.split('/')[-1]
    return last.startswith(BUYER_PREFIXES) or slug.startswith('vs/') or slug.startswith('k-')


def topic_tokens(text):
    tokens = re.findall(r'[a-z0-9áéíóúñü]+', text.lower())
    return {t for t in tokens if t not in STOPWORDS and len(t) > 2}


def site_buyer_pages():
    """Buyer-intent routes that actually exist in the repo."""
    pages = []
    resources = ROUTES / 'resources'
    if resources.is_dir():
        pages += [f'/resources/{d.name}' for d in resources.iterdir()
                  if d.is_dir() and d.name.startswith(BUYER_PREFIXES)]
    vs = ROUTES / 'vs'
    if vs.is_dir():
        pages += [f'/vs/{d.name}' for d in vs.iterdir() if d.is_dir()]
    for product in ('k-dispatch', 'k-video', 'k-safety', 'k-traffic'):
        if (ROUTES / product).is_dir():
            pages.append(f'/{product}')
    return sorted(pages)


def best_buyer_match(query, buyer_pages):
    """The existing buyer page whose slug shares the most topic words with the query."""
    qt = topic_tokens(query)
    if not qt:
        return None, 0
    best, best_score = None, 0
    for page in buyer_pages:
        overlap = len(qt & topic_tokens(page.replace('/', ' ').replace('-', ' ')))
        if overlap > best_score:
            best, best_score = page, overlap
    return best, best_score


def collect(token, days, min_impressions, max_position=MAX_EXPLAINER_POSITION):
    end = (datetime.now() - timedelta(days=1)).strftime('%Y-%m-%d')
    start = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')
    rows = gsc_query(token, start, end, ['query', 'page'], limit=25000)

    # Everything each query ranks with, so we can say whether the buyer page
    # is merely behind the explainer or absent from the SERP altogether.
    by_query = {}
    for row in rows:
        query, page = row['keys'][0], row['keys'][1]
        by_query.setdefault(query, []).append({
            'page': page,
            'impressions': int(row.get('impressions', 0)),
            'clicks': int(row.get('clicks', 0)),
            'position': round(row.get('position', 0), 1),
        })

    buyer_pages = site_buyer_pages()
    collisions = []
    for query, hits in by_query.items():
        # Two tiers, not one gate. 'commercial' carries an explicit buying marker
        # and is actionable on sight. 'topic' is a head term with no marker --
        # "vms software" reads as shopping to a human and as nothing in
        # particular to a matcher, and it is also the single largest case in the
        # data (1,191 impressions at position 10.8 on the explainer). Dropping
        # that tier loses the finding; merging it into the first one overstates
        # certainty. v2.348 deliberately left bare topic anchors alone for this
        # exact reason, so the distinction is preserved rather than decided here.
        if query_intent(query) != 'buyer' or definitional(query):
            continue
        explainers = [h for h in hits if is_explainer(h['page'])
                      and h['impressions'] >= min_impressions
                      and 0 < h['position'] <= max_position]
        if not explainers:
            continue
        explainer = max(explainers, key=lambda h: h['impressions'])

        ranking_buyer = [h for h in hits if is_buyer_page(h['page'])]
        target, overlap = best_buyer_match(query, buyer_pages)
        # One shared token is enough: STOPWORDS has already removed 'best',
        # 'software' and friends, so what survives is a real topic word --
        # 'vms', 'cad', 'ng911'. Requiring two rejected "best vms software",
        # the case this detector was built from.
        if not target or overlap < 1:
            continue  # no buyer page on this topic — that is a content gap, not a collision

        rival = max(ranking_buyer, key=lambda h: h['impressions']) if ranking_buyer else None
        collisions.append({
            'query': query,
            'tier': 'commercial' if shopping(query) else 'topic',
            'impressions': explainer['impressions'],
            'clicks': explainer['clicks'],
            'explainer_page': slug_of(explainer['page']),
            'explainer_position': explainer['position'],
            'buyer_page_expected': target,
            'buyer_page_ranking': slug_of(rival['page']) if rival else None,
            'buyer_position': rival['position'] if rival else None,
            'buyer_clicks': rival['clicks'] if rival else 0,
            'severity': (
                'absent' if not rival
                else 'behind' if rival['position'] > explainer['position']
                else 'ahead'
            ),
            # Impressions the explainer collects on a query it cannot convert.
            'stranded_impressions': explainer['impressions'] - explainer['clicks'],
        })

    # Worst first: buyer page missing entirely, then by wasted impressions.
    order = {'absent': 0, 'behind': 1, 'ahead': 2}
    collisions.sort(key=lambda c: (0 if c['tier'] == 'commercial' else 1,
                                   order[c['severity']], -c['stranded_impressions']))
    return {'period': {'start': start, 'end': end, 'days': days},
            'criteria': (f'query_intent=buyer and not definitional, '
                         f'explainer position <= {max_position}, '
                         f'explainer impressions >= {min_impressions}, '
                         f'a buyer page exists on the topic (>=1 shared topic token). '
                         f'Tier 1 additionally carries an explicit buying marker.'),
            'buyer_pages_on_site': len(buyer_pages),
            'queries_examined': len(by_query),
            'collisions': collisions}


def render(result):
    lines = [
        '# Intent collisions — buyer queries landing on explainer pages',
        '',
        f"**Period:** {result['period']['start']} → {result['period']['end']} "
        f"({result['period']['days']} days)",
        f"**Queries examined:** {result['queries_examined']:,} · "
        f"**Buyer pages on site:** {result['buyer_pages_on_site']}",
        '',
    ]
    rows = result['collisions']
    if not rows:
        lines.append('No collisions found.')
        return '\n'.join(lines)

    absent = [c for c in rows if c['severity'] == 'absent']
    behind = [c for c in rows if c['severity'] == 'behind']
    lines += [
        f"**{len(rows)} collisions.** {len(absent)} where the buyer page does not rank at "
        f"all, {len(behind)} where it ranks behind the explainer. "
        f"{sum(c['stranded_impressions'] for c in rows):,} impressions are landing on a "
        'page that answers a different question than the one being asked.',
        '',
        f"**Criteria:** {result.get('criteria', '')}",
        '',
    ]

    def table(subset, title, note):
        block = [f'## {title}', '', note, '',
                 '| Query | Impr | Clicks | Explainer serving it | Pos | '
                 'Buyer page that should | Status |',
                 '|---|---|---|---|---|---|---|']
        for c in subset[:30]:
            status = {'absent': '🔴 not ranking', 'behind': '🟠 behind',
                      'ahead': '🟢 ahead'}[c['severity']]
            if c['severity'] != 'absent':
                status += f" (pos {c['buyer_position']})"
            block.append(
                f"| {c['query']} | {c['impressions']:,} | {c['clicks']} | "
                f"`{c['explainer_page']}` | {c['explainer_position']} | "
                f"`{c['buyer_page_expected']}` | {status} |"
            )
        block.append('')
        return block

    commercial = [c for c in rows if c['tier'] == 'commercial']
    topic = [c for c in rows if c['tier'] == 'topic']
    if commercial:
        lines += table(commercial, f'Tier 1 — explicit buying intent ({len(commercial)})',
                       'The query names a purchase decision outright. Act on these first.')
    if topic:
        lines += table(topic, f'Tier 2 — head terms, no explicit marker ({len(topic)})',
                       'Reads as shopping to a person, ambiguous to a matcher. Judge each '
                       'one; v2.348 deliberately left bare topic anchors alone.')
    return '\n'.join(lines)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--days', type=int, default=28)
    ap.add_argument('--min-impressions', type=int, default=20,
                    help='ignore explainer hits below this (noise floor)')
    ap.add_argument('--max-position', type=float, default=MAX_EXPLAINER_POSITION,
                    help='ignore explainers ranked below this — they are not being served')
    ap.add_argument('--out', help='path stem; writes .json and .md')
    args = ap.parse_args()

    creds = service_account_credentials()
    print(f'Auth: service account ({creds.service_account_email})', file=sys.stderr)
    result = collect(access_token(creds), args.days, args.min_impressions,
                     args.max_position)

    md = render(result)
    if args.out:
        Path(f'{args.out}.json').write_text(json.dumps(result, indent=2, ensure_ascii=False))
        Path(f'{args.out}.md').write_text(md + '\n')
        print(f'Wrote {args.out}.json and {args.out}.md', file=sys.stderr)
    print(md)
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
