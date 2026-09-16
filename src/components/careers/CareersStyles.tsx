/**
 * Careers styling, built from the homepage v2 language (src/app/[locale]/page.tsx).
 * The `car-*` classes mirror that page's `hp-*` devices — DM Mono eyebrow with a
 * rule and a blinking dot, oversized uppercase Barlow headlines with a gradient
 * span, radial glow, cyan-topped cards, glowing primary button — so careers reads
 * as part of the new site rather than the older industry-page language.
 */
export default function CareersStyles() {
  return (
    <style>{`
      .car-glow {
        position: absolute; bottom: -5%; left: 50%; transform: translateX(-50%);
        width: 130%; height: 70%; pointer-events: none; z-index: 0;
        background: radial-gradient(ellipse at center bottom, rgba(59,130,246,0.08) 0%, rgba(6,182,212,0.04) 28%, transparent 68%);
      }
      @keyframes car-reveal { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes car-blink { 0%,100% { opacity: 1; } 50% { opacity: 0.25; } }

      .car-hero { position: relative; z-index: 10; display: flex; flex-direction: column; align-items: center; text-align: center; padding: 72px 24px 8px; }
      .car-eyebrow {
        display: inline-flex; align-items: center; gap: 12px;
        font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 500;
        letter-spacing: 0.28em; text-transform: uppercase; color: var(--cyan);
        margin-bottom: 28px; animation: car-reveal 0.7s cubic-bezier(0.2,0.8,0.4,1) both; animation-delay: 0.1s;
      }
      .car-eyebrow::before { content: ''; display: block; width: 28px; height: 1px; background: var(--cyan); opacity: 0.7; }
      .car-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 8px var(--cyan); animation: car-blink 2.2s ease-in-out infinite; }

      .car-headline {
        font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
        font-size: clamp(46px, 7vw, 96px); line-height: 0.93; letter-spacing: 0.01em;
        text-transform: uppercase; color: var(--white); margin-bottom: 28px;
        max-width: 900px; text-wrap: balance;
        animation: car-reveal 0.8s cubic-bezier(0.2,0.8,0.4,1) both; animation-delay: 0.22s;
      }
      .car-headline-sm { font-size: clamp(34px, 5vw, 64px); max-width: 1000px; }
      .car-grad { background: linear-gradient(130deg, #60a5fa 10%, #06b6d4 90%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

      .car-sub {
        font-size: 18px; font-weight: 300; line-height: 1.75; color: var(--dim);
        max-width: 640px; margin: 0 auto 38px;
        animation: car-reveal 0.8s cubic-bezier(0.2,0.8,0.4,1) both; animation-delay: 0.36s;
      }

      .car-btn {
        display: inline-flex; align-items: center; gap: 9px;
        background: var(--blue); color: #fff; font-size: 15px; font-weight: 500;
        padding: 15px 34px; border-radius: 8px; text-decoration: none;
        box-shadow: 0 0 44px rgba(24,88,245,0.40), inset 0 1px 0 rgba(255,255,255,0.1);
        transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
      }
      .car-btn:hover { background: var(--blue-light); transform: translateY(-2px); box-shadow: 0 0 64px rgba(24,88,245,0.55), inset 0 1px 0 rgba(255,255,255,0.1); }
      .car-arrow { transition: transform 0.18s; }
      .car-btn:hover .car-arrow { transform: translateX(3px); }
      .car-mailnote { font-size: 13px; color: var(--muted); margin-top: 16px; }
      .car-mailnote a { color: var(--blue-light); text-decoration: underline; }

      .car-badges { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 0; margin: 40px 0 8px; animation: car-reveal 0.8s cubic-bezier(0.2,0.8,0.4,1) both; animation-delay: 0.64s; }
      .car-badge { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 0 34px; border-right: 1px solid var(--border); }
      .car-badge:last-child { border-right: none; }
      .car-badge-k { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--muted); }
      .car-badge-v { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 20px; letter-spacing: 0.02em; color: var(--white); text-transform: uppercase; }

      .car-section { position: relative; z-index: 1; padding: 100px 0 80px; border-top: 1px solid var(--border); }
      .car-section-first { border-top: none; }

      /* Section bands, from the homepage's own treatments: .hp-proof uses
         var(--bg-2) between two rules, and several blocks carry a faint cyan or
         blue wash. Both tokens are theme-aware, so these stay correct in light
         mode (--bg-2 is #f1f5f9 there, not a dark panel). */
      /* Contrast comes from .page-light + .dark-section, the way the homepage
         does it — a light page with dark islands. --bg vs --bg-2 was never a
         usable band: #0f1724 against #0b1220 is 4/255 per channel, invisible.
         .dark-section redefines the whole token set, so text, borders and cards
         flip with it and nothing needs a per-section colour override. */
      .car-hero-wrap { margin-top: -70px; padding-top: 70px; }
      .car-tint-cyan { background-image: linear-gradient(180deg, rgba(6,182,212,0.05) 0%, transparent 72%); }
      .car-tint-blue { background-image: linear-gradient(180deg, rgba(59,130,246,0.06) 0%, transparent 72%); }
      .car-inner { max-width: 1160px; margin: 0 auto; padding: 0 40px; }
      .car-inner-narrow { max-width: 900px; margin: 0 auto; padding: 0 40px; }
      .car-center { text-align: center; }

      .car-label { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--cyan); margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }
      .car-center .car-label { justify-content: center; }
      .car-label-center { justify-content: center; }
      h2.car-center, p.car-center { text-align: center; }
      .car-h2 { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(2rem, 4vw, 3rem); color: var(--white); letter-spacing: -0.01em; line-height: 1.1; margin: 12px 0 16px; text-transform: uppercase; }
      .car-section-sub { font-size: 1rem; color: var(--dim); line-height: 1.7; max-width: 620px; font-weight: 300; }
      .car-center .car-section-sub { margin: 0 auto; }

      .car-stats { display: flex; flex-wrap: wrap; justify-content: center; margin-top: 8px; }
      .car-stat { flex: 1; min-width: 150px; text-align: center; padding: 0 40px; }
      .car-stat-num { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 64px; line-height: 1; }
      .car-stat-label { font-size: 13px; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; color: var(--dim); margin-top: 10px; }

      .car-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 44px; }
      .car-card {
        position: relative; background: var(--card-bg); border: 1px solid var(--border);
        border-top: 2px solid rgba(6,182,212,0.35); border-radius: 12px;
        padding: 28px 24px 32px; overflow: hidden;
        transition: border-color 0.3s, background 0.3s, transform 0.3s;
      }
      .car-card:hover { transform: translateY(-3px); background: var(--card-hover-bg); }
      .car-card-n { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.24em; color: var(--cyan); margin-bottom: 14px; }
      .car-card-h { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 20px; letter-spacing: 0.03em; text-transform: uppercase; color: var(--white); margin-bottom: 10px; }
      .car-card-p { font-size: 14px; font-weight: 300; line-height: 1.7; color: var(--dim); }

      .car-role {
        display: block; text-decoration: none; color: inherit; position: relative;
        background: var(--subtle-bg); border: 1px solid var(--card-border);
        border-left: 2px solid rgba(6,182,212,0.45); border-radius: 12px;
        padding: 32px 34px; overflow: hidden;
        transition: border-color 0.25s, background 0.25s, transform 0.2s;
      }
      .car-role:hover { background: var(--card-hover-bg); transform: translateY(-3px); }
      .car-role-meta { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; }
      .car-role-tag { border: 1px solid var(--border-b); border-radius: 999px; padding: 6px 14px; color: var(--cyan); }
      .car-role-tag-2 { border: 1px solid var(--card-border); border-radius: 999px; padding: 6px 14px; color: var(--muted); }
      .car-role-h { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: clamp(26px, 3vw, 38px); line-height: 1.05; letter-spacing: 0.01em; text-transform: uppercase; color: var(--white); margin-bottom: 14px; }
      .car-role-p { font-size: 15px; font-weight: 300; line-height: 1.7; color: var(--dim); max-width: 780px; margin-bottom: 20px; }
      .car-role-go { font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--blue-light); }

      .car-prose { font-size: 17px; font-weight: 300; line-height: 1.8; color: var(--dim); margin-bottom: 18px; }
      .car-prose-lead { font-size: 19px; color: var(--white); }

      .car-checks { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 14px; margin-top: 36px; }
      .car-check { position: relative; padding: 18px 20px 18px 46px; background: var(--subtle-bg); border: 1px solid var(--card-border); border-radius: 10px; font-size: 15px; font-weight: 300; line-height: 1.65; color: var(--dim); }
      .car-check::before { content: ''; position: absolute; left: 20px; top: 25px; width: 7px; height: 7px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 8px rgba(6,182,212,0.6); }

      .car-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 36px; }
      .car-tag { border: 1px solid var(--card-border); background: var(--subtle-bg); border-radius: 999px; padding: 11px 20px; font-size: 14px; font-weight: 300; color: var(--dim); }

      .car-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin-top: 40px; }
      .car-step { position: relative; padding: 26px 22px 28px; background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; }
      .car-step-n { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 42px; line-height: 1; color: rgba(6,182,212,0.35); margin-bottom: 10px; }
      .car-step-p { font-size: 15px; font-weight: 300; line-height: 1.7; color: var(--dim); }

      /* Form fields.
         --dropdown-bg is NOT redefined by .dark-section, so it inherited
         .page-light's #ffffff while --white became #e6eef8 — near-white text on
         a white field. --glass and --white are both redefined by .dark-section
         and .page-light, so using those keeps contrast correct in either. */
      .car-input {
        width: 100%;
        background: var(--glass);
        border: 1px solid var(--border);
        color: var(--white);
        border-radius: 8px;
        padding: 12px 16px;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 0.92rem;
        outline: none;
        transition: border-color 0.15s, background 0.15s;
      }
      .car-input:focus { border-color: var(--cyan); background: var(--card-hover-bg); }
      .car-input::placeholder { color: var(--muted); opacity: 0.75; }
      .car-input[type="file"] { padding: 10px 14px; cursor: pointer; }
      .car-input[type="file"]::file-selector-button {
        background: var(--glass); border: 1px solid var(--border); color: var(--white);
        border-radius: 6px; padding: 6px 12px; margin-right: 12px; cursor: pointer;
        font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .car-field-label {
        font-family: 'DM Mono', monospace; font-size: 10.5px; font-weight: 500;
        letter-spacing: 0.14em; text-transform: uppercase; color: var(--dim);
        display: block; margin-bottom: 8px;
      }
      .car-field-hint { font-size: 12px; color: var(--muted); margin-top: 7px; }
      .car-field { margin-bottom: 18px; }
      .car-field-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; }

      .car-steps-bar { display: flex; align-items: center; gap: 12px; margin-bottom: 26px; flex-wrap: wrap; }
      .car-step-pip { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--cyan); }
      .car-step-name { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 17px; letter-spacing: 0.03em; text-transform: uppercase; color: var(--white); }
      .car-step-track { flex: 1; min-width: 70px; height: 2px; background: var(--border); border-radius: 2px; overflow: hidden; }
      .car-step-track i { display: block; height: 100%; background: var(--cyan); transition: width 0.3s ease; }

      .car-q { border: 1px solid var(--border); border-radius: 10px; padding: 20px 20px 18px; margin: 0 0 14px; background: var(--glass); }
      .car-q-legend { display: block; padding: 0; font-size: 15px; font-weight: 300; line-height: 1.6; color: var(--white); margin-bottom: 14px; }
      .car-q-n { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.2em; color: var(--cyan); display: block; margin-bottom: 8px; }
      .car-q-opts { display: flex; gap: 10px; }
      .car-q-opt { flex: 0 0 auto; display: inline-flex; align-items: center; gap: 9px; cursor: pointer;
        border: 1px solid var(--border); border-radius: 999px; padding: 9px 20px;
        font-size: 14px; color: var(--dim); transition: border-color 0.15s, color 0.15s, background 0.15s; }
      .car-q-opt:hover { border-color: var(--cyan); color: var(--white); }
      .car-q-opt input { accent-color: var(--cyan); margin: 0; }
      .car-q-opt:has(input:checked) { border-color: var(--cyan); color: var(--white); background: var(--card-hover-bg); }

      .car-btn-ghost { background: none; border: 1px solid var(--border); color: var(--dim); border-radius: 8px;
        padding: 13px 22px; font-size: 14px; cursor: pointer; transition: border-color 0.15s, color 0.15s; }
      .car-btn-ghost:hover { border-color: var(--cyan); color: var(--white); }

      .car-crumb { max-width: 1160px; margin: 0 auto; padding: 18px 40px 0; display: flex; align-items: center; gap: 10px; font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--muted); }
      .car-crumb a { color: var(--muted); text-decoration: none; }
      .car-crumb a:hover { color: var(--cyan); }
      .car-crumb-sep { opacity: 0.35; }
      .car-crumb-now { color: var(--cyan); }

      @media (max-width: 860px) {
        .car-inner, .car-inner-narrow, .car-crumb { padding-left: 20px; padding-right: 20px; }
        .car-section { padding: 72px 0 56px; }
        .car-badge { padding: 0 18px; border-right: none; }
        .car-badges { gap: 22px; }
        .car-stat { padding: 0 16px; flex: 0 0 45%; }
        .car-stat-num { font-size: 48px; }
        .car-role { padding: 26px 22px; }
      }
    `}</style>
  )
}
