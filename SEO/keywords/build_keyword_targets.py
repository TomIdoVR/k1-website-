#!/usr/bin/env python3
"""
KabatOne — Non-branded keyword target builder.

Pulls Google Search Console query data (90d), filters out branded terms,
scores each keyword by Potential x Winnability, assigns a play type and a
target landing page, and writes a ranked master CSV.

Scoring
-------
  Potential   = GSC impressions (demand we already surface for)
  Winnability = position curve (page-1-but-not-#1 is most winnable)
  Score       = impressions * winnability
  CTR-gap     = expected_ctr(position) - actual_ctr  (underperformers flagged)

Usage:
  python3.11 build_keyword_targets.py            # writes keyword-targets.csv
  python3.11 build_keyword_targets.py --days 90
"""
import argparse, csv, os, sys, re
from pathlib import Path

SEO_SCRIPTS = os.path.expanduser("~/.claude/skills/seo/scripts")
sys.path.insert(0, SEO_SCRIPTS)
from google_auth import get_oauth_credentials, load_config  # noqa
from googleapiclient.discovery import build  # noqa
from datetime import datetime, timedelta

GSC_SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]
PROPERTY = "https://kabatone.com/"
BRAND_RE = re.compile(r"kabat|cityshob|grupo kabat|k-?safety|k-?dispatch|k-?video|k-?traffic|k-?connect", re.I)

# industry CTR-by-position curve (approximate, desktop+mobile blended)
EXP_CTR = {1:0.28,2:0.15,3:0.11,4:0.08,5:0.06,6:0.05,7:0.042,8:0.034,9:0.029,10:0.025}
def expected_ctr(pos):
    p = int(round(pos))
    if p <= 10: return EXP_CTR.get(p, 0.025)
    if p <= 20: return 0.015
    if p <= 30: return 0.008
    if p <= 50: return 0.004
    return 0.002

def winnability(pos):
    if pos <= 3:  return 0.15   # mostly already won
    if pos <= 10: return 1.00   # page 1 — CTR upside
    if pos <= 20: return 0.75   # page 2 — close
    if pos <= 30: return 0.45
    if pos <= 50: return 0.25
    return 0.10

def play_type(impr, pos, ctr, exp):
    if impr < 10: return "Long-tail"
    if pos <= 5 and ctr >= 0.5*exp: return "Won/defend"
    if pos <= 15 and ctr < 0.6*exp: return "CTR fix"      # ranks, under-converts
    if pos <= 20: return "Page-2 push"
    return "Ranking build"

def pull(service, dims, days):
    start = (datetime.now()-timedelta(days=days)).strftime("%Y-%m-%d")
    end   = (datetime.now()-timedelta(days=1)).strftime("%Y-%m-%d")
    rows, start_row = [], 0
    while True:
        resp = service.searchanalytics().query(siteUrl=PROPERTY, body={
            "startDate": start, "endDate": end, "dimensions": dims,
            "rowLimit": 25000, "startRow": start_row,
        }).execute()
        r = resp.get("rows", [])
        rows.extend(r)
        if len(r) < 25000: break
        start_row += 25000
    return rows

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--days", type=int, default=90)
    args = ap.parse_args()

    creds = get_oauth_credentials(GSC_SCOPES)
    service = build("searchconsole", "v1", credentials=creds)

    # query+page for target-page mapping
    qp = pull(service, ["query", "page"], args.days)
    page_for = {}   # query -> (best_page, page_impr)
    for row in qp:
        q, pg = row["keys"][0], row["keys"][1]
        imp = row.get("impressions", 0)
        if q not in page_for or imp > page_for[q][1]:
            page_for[q] = (pg.replace("https://kabatone.com", ""), imp)

    # canonical query rows
    qrows = pull(service, ["query"], args.days)
    items = []
    for row in qrows:
        q = row["keys"][0]
        if BRAND_RE.search(q): continue
        imp = int(row.get("impressions", 0))
        if imp < 3: continue
        clk = int(row.get("clicks", 0))
        pos = float(row.get("position", 99))
        ctr = float(row.get("ctr", 0.0))
        exp = expected_ctr(pos)
        score = imp * winnability(pos)
        items.append({
            "keyword": q, "impressions": imp, "clicks": clk,
            "position": round(pos, 1), "ctr_pct": round(ctr*100, 2),
            "exp_ctr_pct": round(exp*100, 1), "ctr_gap_pct": round(max(0, exp-ctr)*100, 2),
            "score": round(score, 1), "play": play_type(imp, pos, ctr, exp),
            "target_page": page_for.get(q, ("(unmapped)", 0))[0],
        })

    items.sort(key=lambda x: -x["score"])
    for i, it in enumerate(items, 1):
        it["rank"] = i
        it["tier"] = "T1" if i <= 25 else "T2" if i <= 75 else "T3" if i <= 175 else "T4"

    out = Path(__file__).parent / "keyword-targets.csv"
    cols = ["rank","tier","keyword","impressions","clicks","position","ctr_pct",
            "exp_ctr_pct","ctr_gap_pct","score","play","target_page"]
    with open(out, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=cols); w.writeheader()
        for it in items: w.writerow({k: it[k] for k in cols})

    # summary to stdout
    from collections import Counter
    plays = Counter(it["play"] for it in items)
    print(f"wrote {len(items)} non-branded keywords -> {out.name}")
    print(f"total non-branded impressions: {sum(it['impressions'] for it in items)}")
    print("play mix:", dict(plays))
    print("\n=== TOP 25 (T1) ===")
    for it in items[:25]:
        print(f"  #{it['rank']:>2} [{it['play']:<13}] {it['impressions']:>5}imp pos{it['position']:>5} "
              f"ctr{it['ctr_pct']:>4}% score{it['score']:>7}  {it['keyword'][:42]:<42} -> {it['target_page'][:34]}")

if __name__ == "__main__":
    main()
