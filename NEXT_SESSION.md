# Next Session — Resume Here

> Handoff note for the next agent + owner. Last worked: **2026-07-18**.

## Where we are

**The Option 9 redesign is live at climatefinancewiki.org** (deployed 2026-07-18, commit `03a4d99`). The whole site — landing, articles, case studies, category indexes, news, start-here, simple pages — now runs the "Option 9 / The Composite" design system (Space Grotesk + JetBrains Mono, forest green on warm paper, hairline rules). The News section shipped in the same push. Full history: `JOURNAL/2026-07-17.md` and `JOURNAL/2026-07-18.md`.

Notable fixes that shipped with it:
- Case-study rich bodies now render (stale `content.config.ts` schema had silently stripped `caseStudy.body` site-wide).
- Landing hero rotates all 4 featured case studies per visit (text + plate image); VW's image replaced with a fitting smog-traffic photo.
- Decorative "NN /" section numbering removed per owner feedback; contextual labels kept.

Design references live in `mockups/` (landing + 6 interior page samples). The redesign branch `design/landing-reimagine` was merged into `main` and has since been deleted along with its worktree (housekeeping done 2026-07-18).

## Open decisions — prompt the owner about these

1. **Newsletter provider.** The subscribe form is still UI-only (`action="#"` in `NewsLayout.astro` and `news/index.astro`). Owner needs to pick a provider (Buttondown / ConvertKit / Mailchimp) and supply the endpoint.
2. **News cadence.** 5 seed dispatches exist. Regular curation rhythm? New items go through the curation gate (`docs/agent-rules/curation-workflow.md`).
3. **Next pillar?** Not yet built: interactive **Cases/Tracker** index, a **Tools** pillar (checklists/calculators), surfacing reading `trails` as a **Learn** path.

_Housekeeping done 2026-07-18: merged `design/landing-reimagine` branch + worktree deleted (also removed stale merged `feature/news-section`); unused `economistBody`/`natureBody` schema fields and the `StyleToggle` component retired. `mockups/` kept as design reference._

## How to run / verify
- `npm run dev` (or `npm run build` then `npm run preview`) from `Websites/climate-finance-wiki`.
- Deploys: push to `main` → `.github/workflows/deploy.yml` → GitHub Pages.
- Headless-browser gotcha on this machine: use CDP `Emulation.setDeviceMetricsOverride` (`mobile:false`) for mobile-width testing; `--window-size` clamps at ~492px.

## Reminder
Per project rules, update `JOURNAL/YYYY-MM-DD.md` as the final write action of any file-changing session, and delete/trim this file once its open items are resolved.
