# GEO block E baseline — 2026-10-29

First run of the 12 Spanish LATAM CAD buyer questions (block E, CAD plan item #10), taken before
the Norma Técnica 911 page shipped. Run with `--no-write --no-commit` so it does not become the
"latest date" in `geo-results.csv` and distort the weekly comparison; the scheduled 2 Nov run is
the first stored one.

| Engine | Run 1 named | Run 2 named | Named or retrieved (runs 1 / 2) |
|---|---|---|---|
| Claude | 5/12 | 5/12 | 11 / 9 |
| ChatGPT (openai) | 6/12 | 4/12 | 6 / 6 |
| Gemini | 4/12 | 6/12 | 8 / 10 |
| Perplexity | 7/12 | 7/12 | 9 / 9 |
| **Mean** | | **5.5 / 12** | |

For comparison, block D's generic Spanish question "¿Qué es un sistema CAD de despacho de
emergencias?" named KabatOne in 0 of 16 answers (19 and 26 Oct).

Strongest: "¿Qué empresas venden software CAD para centros 911 en México?" (named in 8 of 8).
Weakest: the anexo técnico question, Línea 123 Colombia, ambulance/CRUM dispatch, SISMED911.

Raw run output follows (lines marked NAMED / SOURCE / absent, competitors after "vs:").

```
[claude] run 1: 12 queries
  ✅ NAMED   E  ¿Qué empresas venden software CAD para centros 911  vs: motorola
  ✅ NAMED   E  ¿Qué software de despacho cumple con la Norma Técn  vs: —
  🔗 SOURCE  E  ¿Cuánto cuesta un sistema de despacho 911 para un   vs: centralsquare, hexagon, motorola, tyler technologies
  🔗 SOURCE  E  ¿Qué debe incluir el anexo técnico de una licitaci  vs: —
  ✅ NAMED   E  ¿Cuál es el mejor software para un C5 estatal en M  vs: motorola
  ✅ NAMED   E  alternativas a Zetron, Hexagon y Carbyne para cent  vs: carbyne, centralsquare, hexagon, motorola
  🔗 SOURCE  E  software para centro de mando C4 o C2 municipal     vs: avigilon, genetec, hexagon, milestone
  🔗 SOURCE  E  software para la Línea 123 de emergencias en Colom  vs: carbyne
  ✅ NAMED   E  plataforma de seguridad pública para municipios en  vs: —
  🔗 SOURCE  E  ¿Conviene SISMED911 o un CAD comercial para urgenc  vs: —
  ❌ absent  E  software de despacho de ambulancias y urgencias mé  vs: —
  🔗 SOURCE  E  ¿Cómo integrar el CAD 911 con las cámaras de video  vs: genetec, milestone
[claude] named in answer 5/12 · named or retrieved 11/12
[claude] run 2: 12 queries
  ✅ NAMED   E  ¿Qué empresas venden software CAD para centros 911  vs: motorola
  🔗 SOURCE  E  ¿Qué software de despacho cumple con la Norma Técn  vs: —
  🔗 SOURCE  E  ¿Cuánto cuesta un sistema de despacho 911 para un   vs: centralsquare, hexagon, motorola, tyler technologies
  ❌ absent  E  ¿Qué debe incluir el anexo técnico de una licitaci  vs: —
  ✅ NAMED   E  ¿Cuál es el mejor software para un C5 estatal en M  vs: —
  ✅ NAMED   E  alternativas a Zetron, Hexagon y Carbyne para cent  vs: carbyne, centralsquare, hexagon, motorola
  🔗 SOURCE  E  software para centro de mando C4 o C2 municipal     vs: avigilon, genetec, hexagon, mark43
  🔗 SOURCE  E  software para la Línea 123 de emergencias en Colom  vs: carbyne, hexagon, motorola
  ✅ NAMED   E  plataforma de seguridad pública para municipios en  vs: —
  ❌ absent  E  ¿Conviene SISMED911 o un CAD comercial para urgenc  vs: centralsquare, motorola
  ❌ absent  E  software de despacho de ambulancias y urgencias mé  vs: —
  ✅ NAMED   E  ¿Cómo integrar el CAD 911 con las cámaras de video  vs: —
[claude] named in answer 5/12 · named or retrieved 9/12
[openai] run 1: 12 queries
  ✅ NAMED   E  ¿Qué empresas venden software CAD para centros 911  vs: centralsquare, hexagon, motorola, zuercher
  ✅ NAMED   E  ¿Qué software de despacho cumple con la Norma Técn  vs: carbyne
  ❌ absent  E  ¿Cuánto cuesta un sistema de despacho 911 para un   vs: centralsquare, hexagon, intrado, motorola
  ❌ absent  E  ¿Qué debe incluir el anexo técnico de una licitaci  vs: centralsquare, hexagon, intrado, mark43
  ✅ NAMED   E  ¿Cuál es el mejor software para un C5 estatal en M  vs: avigilon, genetec, motorola
  ✅ NAMED   E  alternativas a Zetron, Hexagon y Carbyne para cent  vs: carbyne, centralsquare, hexagon, motorola
  ❌ absent  E  software para centro de mando C4 o C2 municipal     vs: axon, centralsquare, genetec, hexagon
  ❌ absent  E  software para la Línea 123 de emergencias en Colom  vs: carbyne, motorola, tyler technologies
  ✅ NAMED   E  plataforma de seguridad pública para municipios en  vs: avigilon, carbyne, genetec, hexagon
  ❌ absent  E  ¿Conviene SISMED911 o un CAD comercial para urgenc  vs: centralsquare, hexagon, motorola, spillman
  ❌ absent  E  software de despacho de ambulancias y urgencias mé  vs: —
  ✅ NAMED   E  ¿Cómo integrar el CAD 911 con las cámaras de video  vs: avigilon, centralsquare, genetec, hexagon
[openai] named in answer 6/12 · named or retrieved 6/12
[openai] run 2: 12 queries
  ✅ NAMED   E  ¿Qué empresas venden software CAD para centros 911  vs: motorola
  ✅ NAMED   E  ¿Qué software de despacho cumple con la Norma Técn  vs: carbyne, centralsquare, hexagon, mark43
  ❌ absent  E  ¿Cuánto cuesta un sistema de despacho 911 para un   vs: axon, carbyne, centralsquare, hexagon
  ❌ absent  E  ¿Qué debe incluir el anexo técnico de una licitaci  vs: centralsquare, hexagon, motorola, tyler technologies
  ✅ NAMED   E  ¿Cuál es el mejor software para un C5 estatal en M  vs: avigilon, genetec, milestone, motorola
  🔗 SOURCE  E  alternativas a Zetron, Hexagon y Carbyne para cent  vs: carbyne, centralsquare, hexagon, intrado
  ❌ absent  E  software para centro de mando C4 o C2 municipal     vs: hexagon, motorola, spillman
  ❌ absent  E  software para la Línea 123 de emergencias en Colom  vs: —
  ❌ absent  E  plataforma de seguridad pública para municipios en  vs: avigilon, genetec, hexagon, milestone
  ❌ absent  E  ¿Conviene SISMED911 o un CAD comercial para urgenc  vs: —
  🔗 SOURCE  E  software de despacho de ambulancias y urgencias mé  vs: centralsquare
  ✅ NAMED   E  ¿Cómo integrar el CAD 911 con las cámaras de video  vs: avigilon, centralsquare, genetec, milestone
[openai] named in answer 4/12 · named or retrieved 6/12
[gemini] run 1: 12 queries
  ✅ NAMED   E  ¿Qué empresas venden software CAD para centros 911  vs: carbyne, hexagon, motorola
  ✅ NAMED   E  ¿Qué software de despacho cumple con la Norma Técn  vs: carbyne, centralsquare, hexagon, motorola
  ❌ absent  E  ¿Cuánto cuesta un sistema de despacho 911 para un   vs: centralsquare, hexagon, mark43, motorola
  ❌ absent  E  ¿Qué debe incluir el anexo técnico de una licitaci  vs: carbyne, centralsquare, genetec, hexagon
  ✅ NAMED   E  ¿Cuál es el mejor software para un C5 estatal en M  vs: carbyne, genetec, hexagon, milestone
  🔗 SOURCE  E  alternativas a Zetron, Hexagon y Carbyne para cent  vs: carbyne, hexagon, motorola, zetron
  🔗 SOURCE  E  software para centro de mando C4 o C2 municipal     vs: avigilon, carbyne, genetec, hexagon
  ❌ absent  E  software para la Línea 123 de emergencias en Colom  vs: carbyne, hexagon, motorola
  🔗 SOURCE  E  plataforma de seguridad pública para municipios en  vs: avigilon, carbyne, genetec, hexagon
  ❌ absent  E  ¿Conviene SISMED911 o un CAD comercial para urgenc  vs: centralsquare, hexagon, motorola
  ✅ NAMED   E  software de despacho de ambulancias y urgencias mé  vs: carbyne, hexagon, motorola
  🔗 SOURCE  E  ¿Cómo integrar el CAD 911 con las cámaras de video  vs: avigilon, centralsquare, genetec, hexagon
[gemini] named in answer 4/12 · named or retrieved 8/12
[gemini] 42 grounded searches (3.5 per answer); free tier 5,000/month, then $14 per 1,000
[gemini] run 2: 12 queries
  ✅ NAMED   E  ¿Qué empresas venden software CAD para centros 911  vs: carbyne, hexagon, motorola, spillman
  ✅ NAMED   E  ¿Qué software de despacho cumple con la Norma Técn  vs: carbyne, hexagon, motorola
  🔗 SOURCE  E  ¿Cuánto cuesta un sistema de despacho 911 para un   vs: centralsquare, hexagon, mark43, motorola
  🔗 SOURCE  E  ¿Qué debe incluir el anexo técnico de una licitaci  vs: avigilon, centralsquare, hexagon, mark43
  ✅ NAMED   E  ¿Cuál es el mejor software para un C5 estatal en M  vs: axon, carbyne, genetec, hexagon
  ❌ absent  E  alternativas a Zetron, Hexagon y Carbyne para cent  vs: carbyne, hexagon, motorola, zetron
  ❌ absent  E  software para centro de mando C4 o C2 municipal     vs: carbyne, genetec, hexagon, milestone
  ✅ NAMED   E  software para la Línea 123 de emergencias en Colom  vs: carbyne, hexagon, motorola
  ✅ NAMED   E  plataforma de seguridad pública para municipios en  vs: avigilon, axon, carbyne, genetec
  🔗 SOURCE  E  ¿Conviene SISMED911 o un CAD comercial para urgenc  vs: centralsquare, hexagon, motorola
  ✅ NAMED   E  software de despacho de ambulancias y urgencias mé  vs: carbyne, hexagon
  🔗 SOURCE  E  ¿Cómo integrar el CAD 911 con las cámaras de video  vs: avigilon, axon, centralsquare, fusus
[gemini] named in answer 6/12 · named or retrieved 10/12
[gemini] 64 grounded searches (5.3 per answer); free tier 5,000/month, then $14 per 1,000
[perplexity] run 1: 12 queries
  ✅ NAMED   E  ¿Qué empresas venden software CAD para centros 911  vs: hexagon, motorola
  🔗 SOURCE  E  ¿Qué software de despacho cumple con la Norma Técn  vs: motorola
  ✅ NAMED   E  ¿Cuánto cuesta un sistema de despacho 911 para un   vs: intrado, motorola
  ❌ absent  E  ¿Qué debe incluir el anexo técnico de una licitaci  vs: centralsquare, motorola
  ✅ NAMED   E  ¿Cuál es el mejor software para un C5 estatal en M  vs: —
  ✅ NAMED   E  alternativas a Zetron, Hexagon y Carbyne para cent  vs: centralsquare, intrado, motorola
  ✅ NAMED   E  software para centro de mando C4 o C2 municipal     vs: motorola
  ❌ absent  E  software para la Línea 123 de emergencias en Colom  vs: carbyne, hexagon
  ✅ NAMED   E  plataforma de seguridad pública para municipios en  vs: —
  🔗 SOURCE  E  ¿Conviene SISMED911 o un CAD comercial para urgenc  vs: motorola
  ❌ absent  E  software de despacho de ambulancias y urgencias mé  vs: motorola
  ✅ NAMED   E  ¿Cómo integrar el CAD 911 con las cámaras de video  vs: centralsquare, genetec, hexagon, milestone
[perplexity] named in answer 7/12 · named or retrieved 9/12
[perplexity] reported cost $0.031 ($0.0026 per answer)
[perplexity] run 2: 12 queries
  ✅ NAMED   E  ¿Qué empresas venden software CAD para centros 911  vs: hexagon, motorola
  🔗 SOURCE  E  ¿Qué software de despacho cumple con la Norma Técn  vs: motorola
  ✅ NAMED   E  ¿Cuánto cuesta un sistema de despacho 911 para un   vs: intrado, motorola
  ❌ absent  E  ¿Qué debe incluir el anexo técnico de una licitaci  vs: centralsquare, hexagon, motorola
  ✅ NAMED   E  ¿Cuál es el mejor software para un C5 estatal en M  vs: —
  ✅ NAMED   E  alternativas a Zetron, Hexagon y Carbyne para cent  vs: centralsquare, intrado, motorola
  ✅ NAMED   E  software para centro de mando C4 o C2 municipal     vs: genetec, motorola
  ❌ absent  E  software para la Línea 123 de emergencias en Colom  vs: carbyne, hexagon
  ✅ NAMED   E  plataforma de seguridad pública para municipios en  vs: —
  🔗 SOURCE  E  ¿Conviene SISMED911 o un CAD comercial para urgenc  vs: hexagon, motorola
  ❌ absent  E  software de despacho de ambulancias y urgencias mé  vs: —
  ✅ NAMED   E  ¿Cómo integrar el CAD 911 con las cámaras de video  vs: genetec, hexagon, milestone, motorola
[perplexity] named in answer 7/12 · named or retrieved 9/12
[perplexity] reported cost $0.026 ($0.0022 per answer)
```
