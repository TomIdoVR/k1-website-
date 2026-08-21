#!/usr/bin/env python3
"""Flood-fill the flat white canvas of a light 3D-panel hero out to transparency.

The `heroLight` treatment in SolutionPage floats the panels directly on the
hero gradient, which only works if the image ships with an alpha channel. Image
models (and Omer's shared exports) hand back a solid white RGB canvas instead.
This mattes the OUTER background only — a border-seeded flood fill with tolerance
— so white *inside* the panels (labels, UI) is preserved, then feathers the edge
so no white halo survives around the panel silhouettes.

Usage: python3 scripts/matte-hero-transparent.py <in.webp> [out.webp]
"""
import sys
from PIL import Image, ImageDraw, ImageFilter

SENTINEL = (255, 0, 255)   # magenta marker for the filled background
THRESH = 32                 # flood tolerance around near-white
FEATHER = 1.2               # gaussian blur radius on the alpha edge


def main():
    src = sys.argv[1]
    out = sys.argv[2] if len(sys.argv) > 2 else src
    im = Image.open(src).convert("RGB")
    w, h = im.size

    # Flood-fill from a ring of border seeds so the whole connected white
    # background is marked, whichever corner the panels lean toward.
    work = im.copy()
    seeds = []
    step = max(1, w // 40)
    for x in range(0, w, step):
        seeds += [(x, 0), (x, h - 1)]
    step = max(1, h // 40)
    for y in range(0, h, step):
        seeds += [(0, y), (w - 1, y)]
    for s in seeds:
        r, g, b = work.getpixel(s)
        if r > 235 and g > 235 and b > 235:  # only seed on near-white
            ImageDraw.floodfill(work, s, SENTINEL, thresh=THRESH)

    # Build alpha: 0 where sentinel, 255 elsewhere.
    px = work.load()
    alpha = Image.new("L", (w, h), 255)
    ap = alpha.load()
    for y in range(h):
        for x in range(w):
            if px[x, y] == SENTINEL:
                ap[x, y] = 0

    # Feather the edge so panel silhouettes don't keep a hard white fringe.
    alpha = alpha.filter(ImageFilter.GaussianBlur(FEATHER))

    rgba = im.convert("RGBA")
    rgba.putalpha(alpha)
    rgba.save(out, "WEBP", quality=90, method=6)
    print(f"wrote {out}  mode=RGBA size={rgba.size}")


if __name__ == "__main__":
    main()
