#!/usr/bin/env python3
"""Static internal-link audit for the App Router site.

Builds the set of valid routes from every page.* under src/app (with the
[locale] segment stripped), then extracts every internal link target in src/**
— covering BOTH `href="/x"` JSX attributes and `href: '/x'` / `to:` / `path:`
object-config entries (the main Nav/Footer define links as data, which an
href="-only scan misses) — and reports any target with no matching route.

Locale prefixes (/en, /es), #anchors, ?queries and asset paths are normalised
out. Run from the repo root: `python3 scripts/audit-internal-links.py`.
"""
import os, re

ROOT = os.getcwd(); APP = os.path.join(ROOT, "src/app")
routes = set()
for dp, dn, fn in os.walk(APP):
    if any(f.startswith("page.") for f in fn):
        rel = os.path.relpath(dp, APP); rel = "/" + rel if rel != "." else "/"
        rel = rel.replace("/[locale]", "") or "/"
        routes.add(rel.rstrip("/") or "/")

# catch href="/x", href='/x', href={`/x`}, href: '/x', to: "/x", path: '/x'
pat = re.compile(r'''(?:href|to|path)\s*[:=]\s*\{?\s*["'`](/[^"'`}\s]*)''')
targets = {}
for dp, dn, fn in os.walk(os.path.join(ROOT, "src")):
    for f in fn:
        if not f.endswith((".tsx",".ts",".jsx",".js")): continue
        p = os.path.join(dp, f)
        try: txt = open(p, encoding="utf-8").read()
        except: continue
        for m in pat.finditer(txt):
            targets.setdefault(m.group(1), set()).add(os.path.relpath(p, ROOT))

def is_asset(h):
    return h.startswith(("/images","/api","/_next","/fonts","/videos","/icons","/logos","/favicon")) or re.search(r'\.\w{2,5}$', h)

broken = {}
for raw, files in targets.items():
    n = raw.split("#")[0].split("?")[0].rstrip("/") or "/"
    if n == "/" or is_asset(n) or "${" in raw or "[" in raw: continue
    parts = n.split("/")
    n2 = ("/" + "/".join(parts[2:])).rstrip("/") if len(parts)>1 and parts[1] in ("en","es") else n
    n2 = n2 or "/"
    if n2 not in routes:
        broken[raw] = sorted(files)

print("ROUTES:", len(routes), " UNIQUE HREFS:", len(targets))
print("\n=== BROKEN ===")
for h in sorted(broken):
    print(f"  {h}")
    for f in broken[h][:8]: print(f"      ← {f}")
if not broken: print("  (none)")
