---
target: kabatone.com homepage (production)
total_score: 22
max_score: 36
na_heuristics: 7
p0_count: 1
p1_count: 2
target_identity: "url:https://www.kabatone.com/en"
timestamp: 2026-10-19T20-33-57Z
slug: www-kabatone-com-en
---
# Critique: kabatone.com homepage (production main @ e6eaa5b), 2026-10-19
Method: dual-agent (A: design review · B: detector + browser)

## Heuristics: 22/36 (#7 n/a, Persuade). 1:3 2:2 3:3 4:2 5:2 6:3 8:2 9:2 10:3

## Design specificity
Content is specific (K-Dispatch console, 911 to LPR timeline); the structure is a generic SaaS template (the eyebrow / gradient-word H2 / card-grid pattern on 9 of 10 sections). The call-to-dispatch story is missing, as are AI Co-Pilot and automatic caller location. Detector: 19 CSS findings: gradient-text x3 (H1 hero-lab-light.css:275, case-study.css:60, howitworks.css:63), overused Space Grotesk x13 (one decision), side-tab x2 (false positives), bounce-easing x2. The overlay was blocked (the browser pane blocks public-to-localhost requests).

## Priority issues
- P0 Unverified claims: 99.99% uptime in the hero stats, Michoacán case study (10,000+ and the quote), 1,842/5,736 user counts, 11 state seals with only C5 CDMX cleared. Run harden, then clarify.
- P1 Not CAD-led: no call-to-dispatch sequence, AI Co-Pilot and caller location absent, generic smart-city hero art. Run shape, then layout.
- P1 No closing CTA; "Interactive Demo" and "Book a Demo" compete; no sticky CTA on mobile. Run clarify and layout.
- P2 US-coded imagery and addresses ("Main St", US map, US police cars). Run bolder, then polish.
- P2 Mobile: no product above the fold, 18k px long, swipe carousels hide content. Run adapt and distill.

## Persona red flags
- C5 director: unsourced SLA, case study "subject to approval", uncleared seals, no Norma Técnica / data residency / deployment model, no spec sheet.
- Jordan: three framings, two taxonomies, "UDE", "1K" mark.
- Riley: no-JS shows "0+", decorative H4s, H2 that is a stat label, no marquee pause, 4 tap targets under 24px.
- Casey: no product on the first screen, no sticky CTA.

## Minor observations
Eyebrows on every section; disclaimer box louder than its content; H1 wraps to 4 lines at 1440; "Retail/Logistics" dilutes the government positioning; 12px meta text; Kabat One vs KabatOne; H2 size jumps between 50 and 68px.
