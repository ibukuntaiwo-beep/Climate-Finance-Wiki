# Codex Brief — Climate Finance Wiki Landing Redesign

**From:** Fable (Claude Code) — design lead on this project
**To:** OpenAI Codex
**Reporting:** You report to Fable, not directly to the owner. When finished, write `REPORT_CODEX.md` in this folder (format below). If the owner selects one of your designs, Fable will merge it into the Astro site — so your output must be clean enough for another engineer to port.

## The assignment

Produce **4 interactive, self-contained HTML landing-page options** for climatefinancewiki.org. Work in this worktree (branch `design/landing-reimagine`), in this folder:

```
Websites/cfw-landing-redesign/mockups/landing-2026-07/
  codex-option-1.html
  codex-option-2.html
  codex-option-3.html
  codex-option-4.html
  REPORT_CODEX.md
```

You may rename files to `codex-option-1-<slug>.html` style if you add the slug to your report. Do not touch any other files in the repo. If you use skills, use **at most 2 frontend design skills**.

## The vision (owner's words, paraphrased)

- Must feel like a resource made by **the world's leading climate finance organisation** — authority, trust, premium craft.
- Must **NOT** look like a UN website (no flag-blue bureaucracy, no NGO template energy).
- **Not overwhelming. Premium, semi-minimalist.** Do not add text; if you can remove or reduce, do it. The current homepage's flaw is that it does too much (9 stacked sections, 6 category cards, rotating disaster photos).
- Impress the owner. Four options should be four genuinely different design territories, not four variations of one idea.

## Avoid colliding with Fable's four directions

Fable has already taken these territories — explore **different** ones:

1. *The Ledger* — light editorial broadsheet (FT-style serif, cream paper, rust accent, hairline rules).
2. *The Institution* — dark green-charcoal sovereign-capital look, brass accent, monumental serif, Ken Burns tower photo.
3. *The Index* — Swiss typographic archive, Space Grotesk, forest green, interactive category index, near-zero photography.
4. *The Atlas* — light data-forward, Geist, animated canvas "capital flow" lines, teal accent.

Open territories you might consider (not mandatory): museum/exhibition catalogue; cartographic/terrain contour; brutalist-refined concrete; Japanese print minimalism; terminal/annual-report hybrid; dark editorial (dark Ledger counterpart); split-screen duotone photography-led.

## Hard constraints

- One self-contained HTML file per option: vanilla HTML/CSS/JS, Google Fonts `<link>` allowed, **no frameworks, no CDN JS, no build step**.
- **No emojis anywhere.** No pure `#000000`. Max 1 accent color per option, saturation restrained. No "AI purple/blue" gradients, no neon glows. No Inter font. No generic 3-equal-cards feature row.
- Every animation: `transform`/`opacity` only, and fully disabled under `prefers-reduced-motion: reduce`.
- Mobile: single column below 768 px, no horizontal scroll.
- Links point at the live site (`https://climatefinancewiki.org/...`).
- **Images:** only use image URLs you have verified resolve (download and check). Prefer architectural/aerial/infrastructure imagery (capital, geometry, systems) over disaster or generic nature stock. Fewer, more intentional images beat many. These Unsplash IDs are pre-verified by Fable if you want them: `1486406146926-c627a92ad1ab` (dark glass skyscrapers, looking up), `1497435334941-8c899ee9e8e9` (aerial solar farm), `1473341304170-971dccb5ac1e` (electricity pylons at dusk), `1466611653911-95081537e5b7` (wind turbines, dramatic sunset), `1518623489648-a173ef7824f3` (aerial turquoise coastline), `1509391366360-2e959784a276` (solar field, blue sky), `1470071459604-3b5ec3a7fe05` (misty highlands). Format: `https://images.unsplash.com/photo-<ID>?auto=format&fit=crop&w=1600&q=80`.

## Content pack (use these exact strings; do not write new marketing copy)

- Wordmark: **Climate Finance Wiki** · Nav: Topics / News / About / Search
- Brand line: *Making climate finance make sense — for the people who explain it.*
- Hero statement (alternative): *How the world funds its response to climate change.*
- Featured case study: **The First Climate Change Bankruptcy** — "$30 billion in wildfire liabilities destroyed California's largest utility, proving physical climate risk isn't theoretical." → `/case-studies/pge-bankruptcy/`
- Stats: 52 articles · 5 categories · 3 reading trails
- Categories + counts: Concepts 12 · Frameworks 13 · Case Studies 12 · Actors 9 · Instruments 6 (present compactly — an index, not six big cards)
- Trails (each "6 articles · ~35 min"):
  1. **The Greenwashing Trail** — From misleading claims to criminal charges.
  2. **Follow the Money** — How climate finance actually flows, and where it gets stuck.
  3. **Architecture of Climate Policy** — The agreements, taxonomies, and standards that set the rules.
- News (3): "EU Council backs simpler SFDR with three clear fund labels" (Jun 24, 2026 · Regulation) · "GFANZ drops its Paris-alignment requirement; ShareAction pushes back" (Jun 23, 2026) · "Vietnam issues detailed rules for its carbon market" (Jun 15, 2026)
- Credibility: *Built from ICMA Green Bond Principles, UNFCCC reports, SEC enforcement filings, the EU Taxonomy, and IPCC Assessment Reports.*
- Author: *Curated by Ibukun Taiwo — communications professional specialising in climate finance.*
- Footer: © 2026 Red Barrow.

## REPORT_CODEX.md format

For each option: file name, direction name, 2–3 sentences on the concept, fonts + palette used, the one signature interaction, and anything you'd flag for the port to Astro. End with a one-paragraph self-critique: which of your four is strongest and why.

Do not update JOURNAL files — Fable owns session logging for this branch.
