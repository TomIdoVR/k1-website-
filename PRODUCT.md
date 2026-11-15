# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** directors of C5 / C4 / 911 emergency centers and state or municipal public security secretaries in Mexico and Latin America. They come to the site while evaluating a platform or shortlisting vendors for a tender, and they need to see quickly that KabatOne can run their call handling, dispatch and command operations, and that it is already proven at their scale.

**Secondary:** system integrators and channel partners (SYM is the parent channel partner) who carry KabatOne into government deals, and technical / IT evaluators who check integrations, deployment and security.

The site is bilingual (EN / ES). Spanish is the language of the core market, and English serves international and Caribbean buyers.

## Product Purpose

KabatOne (K1) is a unified public safety platform. Emergency call handling, computer-aided dispatch, video, GIS, event management, evidence, mobile response and integrations run on one operational platform. The marketing site exists to get qualified government buyers to book a demo, and to make KabatOne the platform that search engines and AI answers name for 911 dispatch and C5 command centers.

Success: demo requests from C5 / 911 / municipal decision makers, plus visibility in Google and AI answers for CAD / 911 dispatch topics.

## Positioning

**CAD-led, with the platform behind it.** Lead with *call handling and dispatch in one platform* (ES: *atención de llamadas de emergencia y despacho en una sola plataforma*, matching the "recepción, atención y despacho" wording of Mexico's 911 Norma Técnica). The reason to choose KabatOne is that video, GIS, traffic, evidence and citizen/responder apps live on the *same* platform, so a call becomes a coordinated response without changing systems.

CAD / K-Dispatch is the company's primary focus for 2027 and beyond.

Approved differentiators, in priority order:
1. Situational awareness: map plus live video and sensors, and caller location generated automatically (no typed address).
2. AI Co-Pilot for both call taker and dispatcher: live call transcription, scenario recommendations, unit dispatch recommendations. Use "AI Co-Pilot" publicly.
3. A smooth handoff from call taking to dispatching, because it's one platform.
4. Integrations: VMS, AVL, sensors (for example LPR and gunshot detection), location services.
5. Apps for first responders and for citizens.
6. Very easy implementation and setup.
7. Cloud, on-premise or hybrid deployment.
8. Multi-language (English listed first).

Terminology: the market uses "CAD" for dispatch only. The comparison side is "separate call handling + CAD" / "separate systems", never "legacy CAD" as the framing. Keep "CAD" in SEO titles and metadata as a secondary term because buyers search for it.

## Operating Context

Buyers run C5 / C4 command centers and 911 centers with video walls, operators by role (call taker, dispatcher, video operator, shift manager), radio, existing VMS and camera estates, and state or municipal procurement and tender processes. Evaluation happens through demos, tenders, integrator recommendations and, more and more, AI-assistant shortlists.

## Capabilities and Constraints

Product line, all on one platform (marketed as solutions):
- **K-Dispatch**: emergency call-taking and dispatch (911 intake, CAD, unit recommendation, audit trail).
- **K-Safety**: command and incident management (GIS operational picture, workflows, multi-agency).
- **K-Video**: video management and analytics (works with existing VMS, AI detection and search).
- **K-Traffic**: intelligent traffic operations (adaptive signals, violations, emergency preemption).
- **K-Connect**: connected private, community and partner cameras with consent-based access.

Platform name for the future unified OS: Avalon (internal; do not use publicly unless told to).

Site: Next.js 15 App Router, TypeScript, EN/ES under `src/app/[locale]/`, deployed on Vercel. `main` serves kabatone.com (production). `nextjs` serves staging and has diverged. The production homepage is `src/components/hero-lab/HomeComposition.tsx`.

Open / to reconcile:
- Deployment wording conflicts across pages ("cloud-native from day one" on comparison pages vs "cloud, on-premises, and hybrid" on K-Dispatch). The approved wording is **cloud, on-premise or hybrid**.
- An "8 to 16 weeks" implementation quote sits awkwardly with "very easy setup."
- The brand name is written both "KabatOne" and "Kabat One" across the site. Not yet decided which is canonical.

## Brand Commitments

- Name: KabatOne (short form K1). Product names use the "K-" prefix.
- The public AI name is **AI Co-Pilot**.
- Voice: serious, operational, mission-critical. B2G buyers, not consumer.
- Approved source for product screenshots and footage: the next-gen platform environment (k1-platform.kabatone.app), including its video-wall camera footage. Seed data must be cleaned before capture.
- Third-party brands appear only as supported or compatible integrations, never as partnerships or endorsements unless an alliance is stated.

## Evidence on Hand

Confirmed by Omer Cnaani (CEO), 2026-10-19, and usable:
- 73M+ citizens protected; 40+ cities deployed.
- SOC 2 Type II certified.
- Dispatch cycle under 90 seconds end to end, vs 4–6 minutes on legacy CAD systems.
- "Trusted by C5 CDMX": the cleared proof line (2026-10-06).
- 99.99% uptime SLA (confirmed 2026-10-20).
- The government / state seals in the homepage customer strip (confirmed 2026-10-20).

**Not verified, do not reuse or extend until confirmed:**
- Michoacán statewide deployment, "10,000+ connected sensors & cameras", and the attributed operator quote (the site itself notes "deployment details subject to customer approval"). Remove from the site.
- Mobile app user counts (1,842 responders / 5,736 citizens) shown in UI mockups.
- Any other performance number not listed above (for example "40% faster").

Never invent customer logos, testimonials, case studies, benchmarks, pricing or certifications.

## Product Principles

1. **The call is the front door.** Every story starts at the emergency call and follows it to the field. Video, GIS and traffic earn their place by what they add to that response.
2. **One platform is the proof, not the slogan.** Show the handoff between roles and systems actually happening, rather than just claiming unification.
3. **Speak the buyer's operating language.** C5, 911, Norma Técnica and tender vocabulary, in Spanish first-class, not translated as an afterthought.
4. **Only claims that can be defended in a tender.** Every number and logo must survive a procurement officer's scrutiny.
5. **Adopt without replacing.** KabatOne joins the cameras, radios and systems an agency already runs.

## Accessibility & Inclusion

Government buyers may require WCAG 2.1 AA conformance in tenders, so treat AA as the floor. Full EN/ES parity is required for every page.
