# Claude Design Kickoff Brief — KabatOne Homepage Redesign

Paste everything below this line into a new project at claude.ai/design.

---

## What I want

Redesign the homepage of **kabatone.com** — a B2G unified public safety platform (smart city / 911 / C5 command centers) selling to governments and municipalities in LATAM (Mexico-first) and the US. The current site works but feels dense and generic-SaaS. I want a more modern, confident, premium-government-tech feel while keeping conversion focus (demo bookings).

Target audience: municipal decision-makers, C5/C2 center directors, security secretaries, system integrators. They need to feel: credibility, scale, security, and "this is the platform serious cities run on."

## Existing design system (keep or evolve deliberately)

- **Theme:** dark by default — bg `#0f1724`, secondary `#0b1220`, card `rgba(11,18,40,0.85)`
- **Primary:** blue `#2563eb`, light blue `#60a5fa`, cyan accent `#06b6d4`
- **Product accent colors:** K-Dispatch red `#ef4444`, K-Video purple `#a855f7`, K-Connect green `#22c55e`
- **Text:** light `#e6eef8`, muted `#9dbdd0` / `#94a3b8`
- **Fonts:** Space Grotesk (body), Barlow Condensed (headings), DM Mono (labels/eyebrows)
- Repo (for design-system import): https://github.com/TomIdoVR/k1-website-

## Current homepage structure (in order)

1. Fixed nav — Solutions + Industries dropdowns, EN/ES switcher, "Book a Demo" CTA
2. Hero — eyebrow, H1, subtitle, CTA, link to C5 content
3. How It Works
4. Modules section (tabbed product showcase)
5. Integration partner logos (Milestone, Genetec, RapidSOS, Carbyne, Corsight, Motorola, i-Pro)
6. Proof/stats — 40+ cities, 70M citizens protected, 99.9% SLA, 24/7 support
7. Trusted-agencies logo carousel (C5 CDMX, Yucatán, Durango, Sinaloa, Tamaulipas, Jalisco, Michoacán, Chiapas, Puebla…)
8. Products — 5 cards: K-Safety, K-Dispatch, K-Traffic, K-Video, K-Connect
9. Why KabatOne — 4 feature cards (Situational Awareness, Response Time, SOC2 Security, Predictive Intelligence)
10. Industries — 6 cards (Public Safety, Municipalities, Airports, Retail, Logistics/Ports, Stadiums)
11. Final CTA — demo booking
12. Footer

## Constraints

- Tech: Next.js 15 App Router + Tailwind, deployed on Vercel — output must be implementable there
- Bilingual EN/ES — copy lengths differ ~20%, layouts must tolerate longer Spanish strings
- Keep all 12 sections' content intact (SEO-critical) — restructure/merge visually is fine, deleting content is not
- Mobile-first matters: most LATAM government traffic is mobile
- Primary conversion goal: "Book a Demo"

## Ask

Start with 2–3 distinct visual directions for the hero + first screen, then we'll pick one and extend it down the page. When done, I'll hand off to Claude Code for implementation.
