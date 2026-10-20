#!/usr/bin/env python3
"""
KabatOne — GEO (Generative Engine Optimization) citation monitor.

For each target buyer question, asks an AI answer engine *with web search* to answer it,
then checks whether KabatOne appears — and, separately, HOW it appears:

  named_in_answer  KabatOne / K-Dispatch is named in the answer text the buyer reads
  in_source_set    a kabatone.com URL was among the sources the engine retrieved or cited

These are different outcomes. "Retrieved our page, recommended Motorola" is a source-set
hit, not a win. Until 2026-10-05 both scored as one "cited" flag (carry-over GEO-2).

Engines (each optional except Claude, which carries the trend line):
  claude      Anthropic Messages API + web_search tool  — key: ~/.config/claude-seo/anthropic-api-key
  openai      OpenAI Responses API + web_search tool    — key: ~/.config/claude-seo/openai-api-key
  gemini      Gemini API + Google Search grounding      — key: ~/.config/claude-seo/gemini-api-key
  perplexity  Perplexity Agent API (search built in)    — key: ~/.config/claude-seo/perplexity-api-key
An engine with no key file is skipped with a note; it never fails the run.

Outputs:
  geo-results.csv   every engine, every block: date, engine, block, query, named_in_answer,
                    in_source_set, kabatone_url, competitors, run.  The analysis file.
                    `run` numbers repeated samples of the same query on the same date.
  geo-history.csv   LEGACY trend line, unchanged meaning: Claude only, blocks A–C only,
                    kabatone_cited = named OR retrieved. Written at most once per date.

Two runs per date (GEO-8). One answer per query is too noisy to compare week to week: on
2026-10-19 two identical runs 30 minutes apart disagreed on 19 of 160 answers, and ChatGPT
named KabatOne in 5 vs 10 of 40. Each engine now runs the set twice by default; seo_diff.py
reports the average and the range. The legacy trend line uses run 1 only.

Scheduling (GEO-8, PIPE-4). The 07:30 LaunchAgent and the 08:07 orchestrator fallback both call
this script. With four engines x two runs it can outlast 08:07, so the orchestrator's old
"are today's rows written yet?" check fired too early and ran a second full set. Now:
  - a lock file makes a second concurrent invocation exit 0 without running;
  - a date that already has results is skipped unless --force;
  - after a full scheduled run it commits geo-results.csv and geo-history.csv itself, so the
    data never depends on which job happened to run (pass --no-commit to skip).

Usage:
  python3.11 track_geo.py                       # all engines with keys, all blocks, 2 runs, commit
  python3.11 track_geo.py --runs 1 --force      # one extra sample today
  python3.11 track_geo.py --engines claude      # one engine
  python3.11 track_geo.py --blocks D            # one block (e.g. the CAD block)
  python3.11 track_geo.py --no-write --limit 3  # cheap smoke test

Cost: one web-search-enabled request per query per engine. Claude ~$0.01-0.03; OpenAI gpt-5 measured
~$0.16 (1.2M tokens for 31 answers, 2026-10-12), so the default is gpt-5-mini; re-measure after the first run.
"""
import argparse, csv, fcntl, json, os, re, subprocess, sys, urllib.error, urllib.request
from pathlib import Path
from datetime import datetime

HERE = Path(__file__).parent
HISTORY = HERE / 'geo-history.csv'
RESULTS = HERE / 'geo-results.csv'
QUERIES_FILE = HERE / 'geo-queries.txt'
LOCK = HERE / '.track_geo.lock'
REPO_ROOT = HERE.parent.parent
KEY_DIR = Path.home() / '.config' / 'claude-seo'

# Blocks that feed the legacy trend line. Adding a block must never move that line.
LEGACY_BLOCKS = {'A', 'B', 'C'}

COMPETITORS = ['genetec', 'milestone', 'motorola', 'avigilon', 'verkada', 'fusus',
               'axon', 'hexagon', 'mark43', 'tyler technologies', 'centralsquare',
               'carbyne', 'rapidsos', 'peregrine', 'flock safety', 'zuercher', 'intrado',
               'zetron', 'versaterm', 'spillman']

# KabatOne's product names count as being named; the domain alone does not.
_NAMED = re.compile(r'\bkabat\s?one\b|\bk-dispatch\b|\bk-safety\b|\bk-video\b', re.I)
_PROMPT = '{q} Recommend specific vendors/products and cite sources.'

RESULT_FIELDS = ['date', 'engine', 'block', 'query', 'named_in_answer', 'in_source_set',
                 'kabatone_url', 'competitors', 'run']


def ensure_run_column():
    """One-time migration: add `run` to a geo-results.csv written before GEO-8.

    Rows are numbered by occurrence within (date, engine, query), so a date that ran twice
    by accident (2026-10-19) becomes runs 1 and 2 instead of looking like one 80-query run."""
    if not RESULTS.exists():
        return
    with open(RESULTS, newline='') as f:
        rows = list(csv.DictReader(f))
        header = rows[0].keys() if rows else []
    if 'run' in header or not rows:
        return
    seen = {}
    for r in rows:
        k = (r['date'], r['engine'], r['query'])
        seen[k] = seen.get(k, 0) + 1
        r['run'] = str(seen[k])
    with open(RESULTS, 'w', newline='') as f:
        w = csv.DictWriter(f, fieldnames=RESULT_FIELDS)
        w.writeheader()
        w.writerows(rows)
    print(f'{RESULTS.name}: added run column to {len(rows)} existing rows')


def runs_on(date, engine):
    """Highest run number already recorded for this engine on this date (0 if none)."""
    if not RESULTS.exists():
        return 0
    with open(RESULTS, newline='') as f:
        return max((int(r.get('run') or 1) for r in csv.DictReader(f)
                    if r['date'] == date and r['engine'] == engine), default=0)


def commit_results(today):
    """PIPE-4: commit the GEO files from the job itself. Only these two paths are committed,
    whatever else is staged in the checkout."""
    paths = [str(RESULTS), str(HISTORY)]
    git = ['git', '-C', str(REPO_ROOT)]
    if subprocess.run(git + ['diff', '--quiet', 'HEAD', '--'] + paths).returncode == 0:
        print('nothing to commit')
        return
    subprocess.run(git + ['add', '--'] + paths, check=False)
    r = subprocess.run(git + ['commit', '-m', f'SEO: weekly GEO snapshot {today}', '--'] + paths,
                       capture_output=True, text=True)
    print((r.stdout or r.stderr).strip().splitlines()[0] if (r.stdout or r.stderr) else 'commit done')


class FatalEngineError(Exception):
    """Credit, auth or permission failure: applies to every remaining query on this engine."""


def _key(name, env):
    kf = KEY_DIR / name
    if kf.exists():
        return kf.read_text().strip()
    return os.environ.get(env, '')


def load_queries(blocks=None):
    """[(block_letter, query)] from geo-queries.txt; a block starts at '# ── X.'"""
    out, block = [], 'A'
    for line in QUERIES_FILE.read_text().splitlines():
        s = line.strip()
        m = re.match(r'#\s*──\s*([A-Z])\.', s)
        if m:
            block = m.group(1)
            continue
        if s and not s.startswith('#') and (not blocks or block in blocks):
            out.append((block, s))
    return out


def _fatal(msg):
    m = msg.lower()
    return any(s in m for s in ('credit balance', 'insufficient_quota', 'authentication',
                                'invalid api key', 'invalid_api_key', 'permission'))


# ── engines: each factory returns ask(q) -> (answer_text, [urls]), or None if no key ──

def make_claude(model):
    key = _key('anthropic-api-key', 'ANTHROPIC_API_KEY')
    if not key:
        return None
    import anthropic
    # Timeout is load-bearing: launchd won't start a second instance while one runs, so a
    # wedged request would silently block every later Monday. base_url is deliberately NOT
    # pinned -- ANTHROPIC_BASE_URL may point at the local headroom proxy on purpose.
    client = anthropic.Anthropic(api_key=key, timeout=120.0, max_retries=2)

    def ask(q):
        try:
            resp = client.messages.create(
                model=model, max_tokens=1024,
                tools=[{'type': 'web_search_20250305', 'name': 'web_search', 'max_uses': 3}],
                messages=[{'role': 'user', 'content': _PROMPT.format(q=q)}])
        except Exception as e:
            if _fatal(str(e)):
                raise FatalEngineError(str(e))
            raise
        text, urls = [], []
        for b in resp.content:
            t = getattr(b, 'type', '')
            if t == 'text':
                text.append(b.text or '')
                urls += [c.url for c in (getattr(b, 'citations', None) or [])
                         if getattr(c, 'url', None)]
            elif t == 'web_search_tool_result':
                urls += [i.url for i in (getattr(b, 'content', None) or [])
                         if getattr(i, 'url', None)]
        return ' '.join(text), urls
    return ask


def make_openai(model):
    key = _key('openai-api-key', 'OPENAI_API_KEY')
    if not key:
        return None
    import openai
    client = openai.OpenAI(api_key=key, timeout=240.0, max_retries=1)

    def ask(q):
        try:
            # Sources are returned only when asked for; without `include`, in_source_set
            # was always N for OpenAI (verified 2026-10-12: 0 sources vs 160 with it).
            resp = client.responses.create(model=model, tools=[{'type': 'web_search'}],
                                           include=['web_search_call.action.sources'],
                                           reasoning={'effort': 'low'},   # default effort timed out 3 of 10 at 120s
                                           input=_PROMPT.format(q=q))
        except Exception as e:
            if _fatal(str(e)) or getattr(e, 'status_code', 0) in (401, 403, 429):
                raise FatalEngineError(str(e))
            raise
        text, urls = [], []
        for item in (resp.output or []):
            t = getattr(item, 'type', '')
            if t == 'message':
                for c in (item.content or []):
                    text.append(getattr(c, 'text', '') or '')
                    urls += [a.url for a in (getattr(c, 'annotations', None) or [])
                             if getattr(a, 'url', None)]
            elif t == 'web_search_call':
                act = getattr(item, 'action', None)
                urls += [s.url for s in (getattr(act, 'sources', None) or [])
                         if getattr(s, 'url', None)]
        return ' '.join(text), urls
    return ask


def make_perplexity(model):
    """Perplexity Agent API (POST /v1/agent). The old Sonar /chat/completions endpoint was
    retired (403 on 2026-10-12). `model` is a preset name ('fast', ...). Each response carries
    its own cost in usage.cost.total_cost, accumulated in ask.spent."""
    key = _key('perplexity-api-key', 'PERPLEXITY_API_KEY')
    if not key:
        return None

    def ask(q):
        body = json.dumps({'preset': model, 'input': _PROMPT.format(q=q)})
        req = urllib.request.Request('https://api.perplexity.ai/v1/agent',
                                     data=body.encode(), method='POST',
                                     headers={'Authorization': f'Bearer {key}',
                                              'Content-Type': 'application/json'})
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                d = json.load(r)
        except urllib.error.HTTPError as e:
            msg = f'{e.code} {e.read()[:200]!r}'
            if e.code in (401, 402, 403) or _fatal(msg):
                raise FatalEngineError(msg)
            raise RuntimeError(msg)
        ask.spent += ((d.get('usage') or {}).get('cost') or {}).get('total_cost', 0) or 0
        text = ' '.join(c.get('text', '') for o in d.get('output', [])
                        if o.get('type') == 'message' for c in o.get('content', []))
        urls = [x['url'] for o in d.get('output', []) if o.get('type') == 'search_results'
                for x in o.get('results', []) if x.get('url')]
        return text, urls
    ask.spent = 0.0
    return ask


def make_gemini(model):
    """Gemini API with Google Search grounding (Interactions API, POST /v1beta/interactions).
    A proxy for the Gemini app and for AI Overviews, which run on Gemini; not the same product.
    Gemini 3+ bills per search query (5,000/month free, then $14 per 1,000). Sources are the
    url_citation annotations on the model_output text, plus any google_search_result URLs.
    Request/response shape taken from ai.google.dev docs on 2026-10-12; first live call is the test."""
    key = _key('gemini-api-key', 'GEMINI_API_KEY')
    if not key:
        return None

    def ask(q):
        body = json.dumps({'model': model, 'input': _PROMPT.format(q=q),
                           'tools': [{'type': 'google_search'}]})
        req = urllib.request.Request('https://generativelanguage.googleapis.com/v1beta/interactions',
                                     data=body.encode(), method='POST',
                                     headers={'x-goog-api-key': key, 'Content-Type': 'application/json'})
        try:
            with urllib.request.urlopen(req, timeout=180) as r:
                d = json.load(r)
        except urllib.error.HTTPError as e:
            msg = f'{e.code} {e.read()[:300]!r}'
            if e.code in (400, 401, 403) and any(x in msg.lower() for x in
                                                 ('api key', 'api_key', 'permission', 'billing', 'quota')):
                raise FatalEngineError(msg)
            if e.code == 429 and 'quota' in msg.lower():
                raise FatalEngineError(msg)
            raise RuntimeError(msg)
        text, urls = [], []
        for step in (d.get('steps') or []):
            if step.get('type') == 'model_output':
                for c in (step.get('content') or []):
                    if isinstance(c, dict) and c.get('text'):
                        text.append(c['text'])
                    for a in ((c.get('annotations') if isinstance(c, dict) else None) or []):
                        # url is a vertexaisearch.cloud.google.com redirect; the real site is the
                        # annotation `title` (e.g. 'axon.com'). Without this, kabatone.com is invisible.
                        t_ = (a.get('title') or '').strip()
                        if t_ and '.' in t_ and ' ' not in t_:
                            urls.append('https://' + t_)
                        elif a.get('url'):
                            urls.append(a['url'])
        ask.searches += sum(len((st.get('arguments') or {}).get('queries') or [1])
                            for st in (d.get('steps') or []) if st.get('type') == 'google_search_call')
        return ' '.join(text), urls
    ask.searches = 0
    return ask


ENGINES = {'claude': make_claude, 'openai': make_openai, 'perplexity': make_perplexity,
           'gemini': make_gemini}
KEY_FILES = {'claude': 'anthropic-api-key', 'openai': 'openai-api-key',
             'perplexity': 'perplexity-api-key', 'gemini': 'gemini-api-key'}


def classify(text, urls):
    named = bool(_NAMED.search(text or ''))
    hits = [u for u in urls if 'kabatone.com' in (u or '').lower()]
    low = (text or '').lower()
    comps = sorted({c for c in COMPETITORS if re.search(rf'\b{re.escape(c)}\b', low)})
    return named, bool(hits), (hits[0] if hits else ''), comps


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--engines', default='claude,openai,gemini,perplexity')
    ap.add_argument('--blocks', default='', help='e.g. D or A,B,C (default: all)')
    ap.add_argument('--model', default='claude-sonnet-4-6', help='Claude model')
    ap.add_argument('--openai-model', default='gpt-5-mini')  # gpt-5 measured ~$0.16/query on 2026-10-12; mini is the cost-appropriate default
    ap.add_argument('--gemini-model', default='gemini-3.8-flash')
    ap.add_argument('--perplexity-model', default='fast', help='Agent API preset')
    ap.add_argument('--limit', type=int, default=0)
    ap.add_argument('--no-write', action='store_true')
    ap.add_argument('--runs', type=int, default=2, help='samples per query per engine (GEO-8)')
    ap.add_argument('--force', action='store_true',
                    help='run even if today already has results (adds further run numbers)')
    ap.add_argument('--no-commit', action='store_true', help='do not git-commit the GEO files')
    ap.add_argument('--allow-partial', action='store_true',
                    help='write an engine whose run partially failed (default: drop it)')
    args = ap.parse_args()

    # One run at a time. A second invocation (the 08:07 fallback while the 07:30 job is
    # still going) exits cleanly instead of paying for and writing a duplicate set.
    lock = open(LOCK, 'w')
    try:
        fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
    except BlockingIOError:
        print('another track_geo.py run is in progress; skipping')
        sys.exit(0)

    if not args.no_write:
        ensure_run_column()
    today = datetime.now().strftime('%Y-%m-%d')
    if not (args.force or args.no_write) and RESULTS.exists() and any(
            l.startswith(today + ',') for l in RESULTS.read_text().splitlines()):
        print(f'{RESULTS.name} already has {today}; skipping (pass --force for more samples)')
        sys.exit(0)

    blocks = {b.strip().upper() for b in args.blocks.split(',') if b.strip()} or None
    queries = load_queries(blocks)
    if args.limit:
        queries = queries[:args.limit]
    models = {'claude': args.model, 'openai': args.openai_model,
              'perplexity': args.perplexity_model, 'gemini': args.gemini_model}

    all_rows, claude_complete, exit_code = [], False, 0
    for name in [e.strip() for e in args.engines.split(',') if e.strip()]:
        try:
            ask = ENGINES[name](models[name])
        except ImportError as e:
            print(f'\n[{name}] skipped: library missing ({e})')
            continue
        if ask is None:
            print(f'\n[{name}] skipped: no key at {KEY_DIR / KEY_FILES[name]}')
            if name == 'claude':
                exit_code = 1
            continue
        first = runs_on(today, name) + 1
        for run in range(first, first + args.runs):
            print(f'\n[{name}] run {run}: {len(queries)} queries')
            rows, failed = [], 0
            searches0, spent0 = getattr(ask, 'searches', 0), getattr(ask, 'spent', 0)
            for i, (block, q) in enumerate(queries):
                try:
                    text, urls = ask(q)
                except FatalEngineError as e:
                    print(f'  [FATAL] {str(e)[:200]}\n  Aborting {name}: applies to every remaining query.')
                    failed += len(queries) - i
                    break
                except Exception as e:
                    print(f'  [error] {q[:50]}: {str(e)[:120]}')
                    failed += 1
                    continue
                named, retrieved, url, comps = classify(text, urls)
                mark = '✅ NAMED ' if named else ('🔗 SOURCE' if retrieved else '❌ absent')
                print(f"  {mark}  {block}  {q[:50]:<50}  vs: {', '.join(comps[:4]) or '—'}")
                rows.append({'date': today, 'engine': name, 'block': block, 'query': q,
                             'named_in_answer': 'Y' if named else 'N',
                             'in_source_set': 'Y' if retrieved else 'N',
                             'kabatone_url': url, 'competitors': '; '.join(comps),
                             'run': run})
            n = len(rows)
            nm = sum(r['named_in_answer'] == 'Y' for r in rows)
            either = sum('Y' in (r['named_in_answer'], r['in_source_set']) for r in rows)
            print(f'[{name}] named in answer {nm}/{n} · named or retrieved {either}/{n}')
            searches = getattr(ask, 'searches', 0) - searches0
            spent = getattr(ask, 'spent', 0) - spent0
            if searches:
                print(f'[{name}] {searches} grounded searches ({searches / max(n, 1):.1f} per answer); free tier 5,000/month, then $14 per 1,000')
            if spent:
                print(f'[{name}] reported cost ${spent:.3f} (${spent / max(n, 1):.4f} per answer)')
            if failed:
                print(f'[{name}] {failed}/{len(queries)} failed — a partial run distorts the trend.')
                if not args.allow_partial:
                    print(f'[{name}] not written (pass --allow-partial to record it anyway).')
                    if name == 'claude':
                        exit_code = 2
                    continue
            all_rows += rows
            if name == 'claude' and not failed and run == 1:
                claude_complete = True

    if args.no_write or not all_rows:
        sys.exit(exit_code)

    new = not RESULTS.exists()
    with open(RESULTS, 'a', newline='') as f:
        w = csv.DictWriter(f, fieldnames=RESULT_FIELDS)
        if new:
            w.writeheader()
        w.writerows(all_rows)
    print(f'\nappended {len(all_rows)} rows -> {RESULTS.name}')

    # Legacy trend line: Claude, blocks A–C, full set only, one snapshot per date.
    legacy = [r for r in all_rows if r['engine'] == 'claude' and r['block'] in LEGACY_BLOCKS
              and r['run'] == 1]
    already = HISTORY.exists() and any(l.startswith(today + ',')
                                       for l in HISTORY.read_text().splitlines())
    if legacy and already:
        print(f'{HISTORY.name} already has {today}; legacy trend not re-written.')
    elif legacy and claude_complete and not args.limit and not blocks:
        with open(HISTORY, 'a', newline='') as f:
            w = csv.writer(f)
            for r in legacy:
                cited = 'Y' if 'Y' in (r['named_in_answer'], r['in_source_set']) else 'N'
                w.writerow([today, r['query'], cited, r['competitors']])
        print(f'appended {len(legacy)} rows -> {HISTORY.name} (legacy trend)')
    if not args.no_commit and not args.limit and not blocks:
        commit_results(today)
    sys.exit(exit_code)


if __name__ == '__main__':
    main()
