# Next Session — Resume Here

> Handoff note for the next agent + owner. Last worked: **2026-06-28**.
> Read this first, then prompt the owner about the **Open decisions** below before doing anything.

## Where we are

The **News / curation section** is built, verified against a production build (70 pages, no broken links), and journaled — but **not committed to git**. All files are saved on disk; nothing is lost.

What shipped this session (see `JOURNAL/2026-06-28.md` for the full list):
- `/news/` listing + `/news/<slug>/` item pages (`src/pages/news/`, `src/layouts/NewsLayout.astro`)
- `news` content collection (`src/content.config.ts`) + 5 seed dispatches (`src/content/news/*.md`)
- RSS feed (`src/pages/rss.xml.js`), nav/footer "News" links, homepage "Latest News" strip
- Audience widened to a **broad SEO hub** (owner-approved) — see memory `cfw-audience-broad-seo-hub`.

## Open decisions — prompt the owner about these

1. **Commit & deploy?** Nothing is committed yet. The work is on disk but unversioned. Pushing to `main` auto-deploys to GitHub Pages (`.github/workflows/deploy.yml`) → live at climatefinancewiki.org. Ask before committing; ask again before pushing/deploying.
2. **Newsletter provider.** The subscribe form is UI-only (`action="#"` in `NewsLayout.astro` and `news/index.astro`). To make it real, the owner needs to pick a provider (Buttondown / ConvertKit / Mailchimp) and supply the form endpoint.
3. **More news / cadence.** Only 5 seed dispatches exist. Does the owner want a regular curation rhythm, and should new items go through the curation gate (`docs/agent-rules/curation-workflow.md`)?
4. **Next pillar?** Future SEO pillars imitated from aicopyrightlegal.com, not yet built: interactive **Cases/Tracker** index, a **Tools** pillar (checklists/calculators), surfacing existing reading `trails` (`src/data/trails.ts`) as a **Learn** path.

## How to run / verify
- `npm run dev` (or `npm run build` then `npm run preview`) from `Websites/climate-finance-wiki`.
- Visit `/news/`, click into an item, check the outbound source link + inline wikilinks, and `/rss.xml`.
- Note: in the automated browser sandbox, screenshots stall on `document_idle` (Google Fonts / Cloudflare beacon never settle) — verify via `npm run build` output and the generated HTML in `dist/` instead.

## Reminder
Per project rules, update `JOURNAL/YYYY-MM-DD.md` as the final write action of any file-changing session, and delete/trim this file once its open items are resolved.
