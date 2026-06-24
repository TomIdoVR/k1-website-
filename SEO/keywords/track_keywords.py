#!/usr/bin/env python3
"""
KabatOne — Weekly keyword rank monitor.

Re-pulls GSC positions for the tracked non-branded keywords (T1-T3 from
keyword-targets.csv), appends a dated snapshot to keyword-history.csv, and
reports the biggest week-over-week movers.

Usage:
  python3.11 track_keywords.py                 # snapshot today + show movers
  python3.11 track_keywords.py --no-write       # movers only, don't append
Run weekly (e.g. after the Monday weekly agent).
"""
import argparse, csv, os, sys, re
from pathlib import Path
from datetime import datetime, timedelta

SEO_SCRIPTS = os.path.expanduser("~/.claude/skills/seo/scripts")
sys.path.insert(0, SEO_SCRIPTS)
from google_auth import get_oauth_credentials  # noqa
from googleapiclient.discovery import build  # noqa

GSC_SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]
PROPERTY = "https://kabatone.com/"
HERE = Path(__file__).parent
TARGETS = HERE / "keyword-targets.csv"
HISTORY = HERE / "keyword-history.csv"

def pull_queries(days):
    creds = get_oauth_credentials(GSC_SCOPES)
    service = build("searchconsole", "v1", credentials=creds)
    start = (datetime.now()-timedelta(days=days)).strftime("%Y-%m-%d")
    end   = (datetime.now()-timedelta(days=1)).strftime("%Y-%m-%d")
    rows, sr = [], 0
    while True:
        resp = service.searchanalytics().query(siteUrl=PROPERTY, body={
            "startDate": start, "endDate": end, "dimensions": ["query"],
            "rowLimit": 25000, "startRow": sr}).execute()
        r = resp.get("rows", [])
        rows.extend(r)
        if len(r) < 25000: break
        sr += 25000
    return {row["keys"][0]: row for row in rows}

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--days", type=int, default=28, help="GSC window for the snapshot (default 28)")
    ap.add_argument("--no-write", action="store_true")
    args = ap.parse_args()

    if not TARGETS.exists():
        print("keyword-targets.csv missing — run build_keyword_targets.py first."); sys.exit(1)
    tracked = [r for r in csv.DictReader(open(TARGETS)) if r["tier"] in ("T1","T2","T3")]
    by_kw = {r["keyword"]: r for r in tracked}

    live = pull_queries(args.days)
    today = datetime.now().strftime("%Y-%m-%d")

    snapshot = []
    for kw, meta in by_kw.items():
        row = live.get(kw)
        pos = round(float(row["position"]), 1) if row else None
        imp = int(row["impressions"]) if row else 0
        clk = int(row["clicks"]) if row else 0
        snapshot.append({"date": today, "keyword": kw, "position": pos if pos is not None else "",
                         "impressions": imp, "clicks": clk, "tier": meta["tier"], "play": meta["play"]})

    # append history
    if not args.no_write:
        new = not HISTORY.exists()
        with open(HISTORY, "a", newline="") as f:
            w = csv.DictWriter(f, fieldnames=["date","keyword","position","impressions","clicks","tier","play"])
            if new: w.writeheader()
            for s in snapshot: w.writerow(s)
        print(f"appended {len(snapshot)} rows for {today} -> {HISTORY.name}")

    # movers vs previous snapshot date
    if HISTORY.exists():
        hist = list(csv.DictReader(open(HISTORY)))
        dates = sorted({h["date"] for h in hist})
        if len(dates) >= 2:
            prev, cur = dates[-2], dates[-1]
            pv = {h["keyword"]: h for h in hist if h["date"]==prev}
            cv = {h["keyword"]: h for h in hist if h["date"]==cur}
            movers = []
            for kw, c in cv.items():
                p = pv.get(kw)
                if not p or not c["position"] or not p["position"]: continue
                d = float(p["position"]) - float(c["position"])  # +ve = improved (moved up)
                dclk = int(c["clicks"]) - int(p["clicks"])
                if abs(d) >= 1.0 or dclk != 0:
                    movers.append((d, dclk, kw, p["position"], c["position"]))
            movers.sort(key=lambda x: -x[0])
            print(f"\n=== MOVERS  {prev} -> {cur} ===")
            print("  ▲ improved:")
            for d,dclk,kw,pp,cp in [m for m in movers if m[0]>0][:12]:
                print(f"    +{d:>4.1f}  {pp:>5}->{cp:<5} {('+%d clk'%dclk) if dclk else '':>8}  {kw[:46]}")
            print("  ▼ slipped:")
            for d,dclk,kw,pp,cp in [m for m in movers if m[0]<0][-8:]:
                print(f"    {d:>5.1f}  {pp:>5}->{cp:<5} {('+%d clk'%dclk) if dclk else '':>8}  {kw[:46]}")
        else:
            print(f"\n(only one snapshot ({dates[-1]}) — movers available next week)")

if __name__ == "__main__":
    main()
