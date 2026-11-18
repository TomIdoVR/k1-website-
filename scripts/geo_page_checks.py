#!/usr/bin/env python3.11
"""Deterministic page checks for Google AI features and AI-answer hygiene.

Borrowed (logic only, reimplemented) from the G-* checks in Auriti-Labs/geo-optimizer-skill,
each tied to a Google Search Central rule. These are pass/fail hygiene checks, not a GEO
score: that project's own calibration study (341 pages) found its 0-100 score does not
predict Perplexity citations, so we track citations with SEO/geo/track_geo.py and use these
only to catch regressions that would quietly remove a page from Google's AI features.

    python3.11 scripts/geo_page_checks.py                      # every URL in the live sitemap
    python3.11 scripts/geo_page_checks.py --url https://kabatone.com/k-dispatch
    python3.11 scripts/geo_page_checks.py --json SEO/audits/geo-checks-YYYY-MM-DD.json

Exit code 1 if any page FAILs (WARNs do not fail the run).

Checks
  G-INDEX       final status 200; no noindex in meta robots/googlebot or X-Robots-Tag;
                Googlebot allowed by robots.txt
  G-SNIPPET     no nosnippet / max-snippet < 50 (fail); max-image-preview:none (warn);
                data-nosnippet text share > 50% fail, > 10% warn
  G-CANONICAL   exactly one absolute canonical in <head>, equal to the final URL
  G-DATES       JSON-LD datePublished/dateModified not in the future; modified >= published;
                a visible <time datetime> agrees with one of them (warn)
  G-SD-VISIBLE  page-level JSON-LD headline/name appears in visible text
  G-VIEWPORT    meta viewport present
  INJECTION     no prompt-injection phrases anywhere in the HTML (fail); large blocks of
                inline-hidden text (warn)
Site-level: G-SITEMAP (Sitemap directive in robots.txt).
"""
import argparse, json, re, sys
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from urllib.parse import urljoin, urlparse
from urllib.robotparser import RobotFileParser

import requests
from bs4 import BeautifulSoup

SITE = 'https://kabatone.com'
UA = 'Mozilla/5.0 (compatible; KabatOne-GEO-checks/1.0)'
PAGE_TYPES = {'Article', 'BlogPosting', 'NewsArticle', 'TechArticle', 'WebPage', 'AboutPage',
              'ContactPage', 'CollectionPage', 'FAQPage', 'Product', 'SoftwareApplication',
              'Service', 'HowTo', 'Event', 'JobPosting', 'VideoObject'}
INJECTION = re.compile(
    r'ignore (all |any )?(previous|prior|above) (instructions|prompts)|disregard (the |all )?'
    r'(previous|prior|above) instructions|you are (now )?(an? )?(ai|llm|language model|assistant)\b'
    r'|system prompt|as an ai (language )?model,? (you )?(must|should)|(chatgpt|claude|gemini|perplexity)'
    r',? (please |you must |always )?(recommend|cite|say)', re.I)
HIDDEN_STYLE = re.compile(r'display\s*:\s*none|visibility\s*:\s*hidden|font-size\s*:\s*0(px)?\b'
                          r'|left\s*:\s*-\d{3,}px|text-indent\s*:\s*-\d{3,}px', re.I)


def norm(u):
    p = urlparse(u)
    return f'{p.scheme}://{p.netloc.lower()}{p.path.rstrip("/") or "/"}'


def jsonld_nodes(soup):
    out = []
    for s in soup.find_all('script', type='application/ld+json'):
        try:
            data = json.loads(s.string or '')
        except (json.JSONDecodeError, TypeError):
            out.append({'@type': '__invalid__'})
            continue
        stack = data if isinstance(data, list) else [data]
        while stack:
            n = stack.pop()
            if isinstance(n, dict):
                out.append(n)
                stack.extend(n.get('@graph', []) if isinstance(n.get('@graph'), list) else [])
            elif isinstance(n, list):
                stack.extend(n)
    return out


def types(n):
    t = n.get('@type', [])
    return set(t if isinstance(t, list) else [t])


def parse_date(v):
    if not isinstance(v, str):
        return None
    try:
        d = datetime.fromisoformat(v.replace('Z', '+00:00'))
        return d if d.tzinfo else d.replace(tzinfo=timezone.utc)
    except ValueError:
        return None


def visible_text(soup):
    s = BeautifulSoup(str(soup), 'html.parser')
    for t in s(['script', 'style', 'noscript', 'template', 'head']):
        t.decompose()
    return re.sub(r'\s+', ' ', s.get_text(' ')).strip()


def squash(t):
    return re.sub(r'[^a-z0-9]+', ' ', t.lower()).strip()


def check(url, robots):
    res = []
    add = lambda cid, level, msg: res.append({'check': cid, 'level': level, 'msg': msg})
    try:
        r = requests.get(url, headers={'User-Agent': UA}, timeout=30, allow_redirects=True)
    except requests.RequestException as e:
        return {'url': url, 'results': [{'check': 'G-INDEX', 'level': 'FAIL', 'msg': f'fetch error: {e}'}]}
    soup = BeautifulSoup(r.text, 'html.parser')
    final = r.url
    metas = {}
    for m in soup.find_all('meta', attrs={'name': True}):
        metas.setdefault(m['name'].lower(), []).append((m.get('content') or '').lower())
    directives = ','.join(metas.get('robots', []) + metas.get('googlebot', []) +
                          [r.headers.get('X-Robots-Tag', '').lower()])

    # G-INDEX
    if r.status_code != 200:
        add('G-INDEX', 'FAIL', f'final status {r.status_code}')
    if 'noindex' in directives or 'none' in [d.strip() for d in directives.split(',')]:
        add('G-INDEX', 'FAIL', 'noindex directive')
    if not robots.can_fetch('Googlebot', final):
        add('G-INDEX', 'FAIL', 'Googlebot blocked by robots.txt')

    # G-SNIPPET
    if 'nosnippet' in directives:
        add('G-SNIPPET', 'FAIL', 'nosnippet directive')
    m = re.search(r'max-snippet\s*:\s*(-?\d+)', directives)
    if m and 0 <= int(m.group(1)) < 50:
        add('G-SNIPPET', 'FAIL', f'max-snippet:{m.group(1)}')
    if re.search(r'max-image-preview\s*:\s*none', directives):
        add('G-SNIPPET', 'WARN', 'max-image-preview:none')
    vis = visible_text(soup)
    ns = sum(len(e.get_text(' ', strip=True)) for e in soup.select('[data-nosnippet]'))
    if vis:
        share = ns / len(vis)
        if share > 0.5:
            add('G-SNIPPET', 'FAIL', f'data-nosnippet covers {share:.0%} of text')
        elif share > 0.1:
            add('G-SNIPPET', 'WARN', f'data-nosnippet covers {share:.0%} of text')

    # G-CANONICAL
    head = soup.head or soup
    cans = [l.get('href', '') for l in head.find_all('link') if 'canonical' in (l.get('rel') or [])]
    if len(cans) != 1:
        add('G-CANONICAL', 'FAIL', f'{len(cans)} canonical tags in <head>')
    elif not urlparse(cans[0]).scheme:
        add('G-CANONICAL', 'FAIL', f'relative canonical {cans[0]}')
    elif norm(cans[0]) != norm(final):
        add('G-CANONICAL', 'FAIL', f'canonical {cans[0]} != final URL {final}')

    # G-VIEWPORT
    if 'viewport' not in metas:
        add('G-VIEWPORT', 'FAIL', 'no meta viewport')

    # JSON-LD based checks
    nodes = jsonld_nodes(soup)
    if any('__invalid__' in types(n) for n in nodes):
        add('G-SD-VISIBLE', 'FAIL', 'invalid JSON-LD block')
    now = datetime.now(timezone.utc)
    pub = mod = None
    for n in nodes:
        for k in ('datePublished', 'dateModified', 'uploadDate'):
            d = parse_date(n.get(k))
            if d and d > now:
                add('G-DATES', 'FAIL', f'{k} {n.get(k)} is in the future')
        pub = pub or parse_date(n.get('datePublished'))
        mod = mod or parse_date(n.get('dateModified'))
    if pub and mod and mod < pub:
        add('G-DATES', 'FAIL', f'dateModified {mod.date()} before datePublished {pub.date()}')
    times = [parse_date(t.get('datetime')) for t in soup.select('main time[datetime], article time[datetime]')]
    times = [t for t in times if t]
    if times and (pub or mod):
        sd_days = {d.date() for d in (pub, mod) if d}
        if not any(t.date() in sd_days for t in times):
            add('G-DATES', 'WARN', f'visible date(s) {sorted({str(t.date()) for t in times})} '
                                   f'match neither JSON-LD date {sorted(map(str, sd_days))}')

    # G-SD-VISIBLE: page-level entities only (Organization/WebSite/Breadcrumb are site chrome)
    # Exact match in visible text passes. A headline sharing >= 60% of the H1's words is a WARN
    # (usually the SEO <title> reused as the Article headline); less overlap is a FAIL.
    vsq = squash(vis)
    h1 = soup.find('h1')
    h1w = set(squash(h1.get_text(' ')).split()) if h1 else set()
    for n in nodes:
        if not (types(n) & PAGE_TYPES):
            continue
        label = n.get('headline') or n.get('name')
        if isinstance(label, str) and label.strip():
            core = squash(re.split(r'\s[|–—-]\s', label)[0])   # drop " | Kabat One" style suffixes
            if core and core not in vsq:
                kind = '/'.join(sorted(types(n) & PAGE_TYPES))
                overlap = len(h1w & set(core.split())) / len(h1w) if h1w else 0
                if overlap >= 0.6:
                    add('G-SD-VISIBLE', 'WARN', f'{kind} headline "{label[:60]}" differs from H1 '
                                                f'"{h1.get_text(" ", strip=True)[:50]}"')
                else:
                    add('G-SD-VISIBLE', 'FAIL', f'{kind} "{label[:70]}" not in visible text '
                                                f'({overlap:.0%} of H1 words)')

    # INJECTION / hidden text
    raw = soup.get_text(' ')
    for t in soup.find_all(['script'], type='application/ld+json'):
        raw += ' ' + (t.string or '')
    hit = INJECTION.search(raw)
    if hit:
        add('INJECTION', 'FAIL', f'prompt-injection phrase: "{hit.group(0)[:60]}"')
    for e in soup.find_all(style=HIDDEN_STYLE):
        if e.name in ('select', 'option', 'input', 'textarea', 'svg', 'template'):
            continue
        txt = e.get_text(' ', strip=True)
        if len(txt) > 200:
            add('INJECTION', 'WARN', f'{len(txt)} chars of inline-hidden text in <{e.name}>: "{txt[:50]}..."')
            break
    return {'url': url, 'final': final, 'results': res}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--url', action='append', help='check only these URLs (repeatable)')
    ap.add_argument('--site', default=SITE)
    ap.add_argument('--json', help='write full results here')
    ap.add_argument('--workers', type=int, default=8)
    a = ap.parse_args()

    rtxt = requests.get(urljoin(a.site, '/robots.txt'), headers={'User-Agent': UA}, timeout=30).text
    robots = RobotFileParser()
    robots.parse(rtxt.splitlines())
    site_issues = []
    if not re.search(r'^\s*sitemap\s*:', rtxt, re.I | re.M):
        site_issues.append({'check': 'G-SITEMAP', 'level': 'FAIL', 'msg': 'no Sitemap directive in robots.txt'})

    urls = a.url or re.findall(r'<loc>([^<]+)</loc>', requests.get(
        urljoin(a.site, '/sitemap.xml'), headers={'User-Agent': UA}, timeout=30).text)
    with ThreadPoolExecutor(a.workers) as ex:
        pages = list(ex.map(lambda u: check(u, robots), urls))

    fails = warns = 0
    for i in site_issues:
        print(f"{i['level']:4}  {i['check']:12}  (site)  {i['msg']}")
    for p in sorted(pages, key=lambda p: p['url']):
        for i in p['results']:
            fails += i['level'] == 'FAIL'
            warns += i['level'] == 'WARN'
            print(f"{i['level']:4}  {i['check']:12}  {p['url'].replace(a.site, '') or '/'}  {i['msg']}")
    fails += sum(i['level'] == 'FAIL' for i in site_issues)
    clean = sum(not p['results'] for p in pages)
    print(f'\n{len(pages)} pages · {clean} clean · {fails} FAIL · {warns} WARN')
    if a.json:
        with open(a.json, 'w') as f:
            json.dump({'generated': datetime.now(timezone.utc).isoformat(), 'site': site_issues,
                       'pages': pages}, f, indent=1)
    sys.exit(1 if fails else 0)


if __name__ == '__main__':
    main()
