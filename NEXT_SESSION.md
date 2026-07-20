# Next Session — Resume Here

> Handoff note for the next agent and owner. Last worked: **2026-07-20**.

## Current state

**Climate Finance Wiki is live and in maintenance mode.** The Option 9 redesign is deployed at <https://climatefinancewiki.org/>. The public site contains 52 articles across five categories, 30 glossary terms, five news dispatches, and three guided reading trails.

There is no active expansion project and no known blocker affecting the live site.

## Completed

- Option 9 design system ported across the site and deployed through GitHub Pages.
- Case-study rich-body rendering repaired.
- News section and RSS feed shipped.
- Decorative section numbering removed following owner feedback.
- Merged feature branches and their worktrees removed.
- Unused case-study schema fields and the orphaned `StyleToggle` component retired.
- Nonfunctional email forms removed from the public news pages. RSS remains available.
- README, project status, journal index, and handoff records reconciled on 2026-07-20.

## Owner-controlled backlog

These are possibilities, not pending assignments. Do not begin one without owner confirmation.

1. Choose a regular news-curation cadence.
2. Build an interactive **Cases/Tracker** index.
3. Build a **Tools** pillar such as checklists or calculators.
4. Surface the reading trails as a **Learn** path.
5. Select an email newsletter provider and connect it. Before activation, update the privacy policy to describe email collection and third-party processing.

New news items must pass the curation gate in `docs/agent-rules/curation-workflow.md`.

## How to run and verify

- `npm run dev`
- `npm run build`, then `npm run preview`
- Deployment: push to `main` → `.github/workflows/deploy.yml` → GitHub Pages

Headless-browser note for this machine: use CDP `Emulation.setDeviceMetricsOverride` with `mobile:false` for mobile-width testing; `--window-size` clamps at approximately 492px.

## Agent rule

Treat this project as **live/maintenance** until the owner explicitly activates a backlog item. Do not mistake backlog ideas for current priorities.

For every file-changing session, update `JOURNAL/YYYY-MM-DD.md` as the final write action.
