# AGENTS.md - Climate Finance Wiki

Instructions for OpenAI Codex agents working on the Climate Finance Wiki project.

For Claude Code, see `CLAUDE.md`.

## What This Project Is

The Climate Finance Wiki is a public hobby website for communications professionals who need to understand climate finance clearly.

This one project includes the Astro site, Obsidian wiki articles, raw climate finance source material, and promotional video folders.

## Expected Structure

```text
climate-finance-wiki/
|-- AGENTS.md
|-- CLAUDE.md
|-- JOURNAL/
|-- docs/agent-rules/
|-- src/
|-- public/
|-- wiki/
|-- raw/
|-- promo/
|-- package.json
`-- astro.config.mjs
```

## Progressive Docs

Load these only when needed:

- Writing standards and article format: `docs/agent-rules/writing-standards.md`
- Curation workflow: `docs/agent-rules/curation-workflow.md`
- Context-control rules: `docs/agent-rules/context-control.md`
- Logging policy: `docs/agent-rules/logging.md`

## Wiki Rules

- Obsidian is the primary authoring/viewing environment for wiki articles.
- Use `[[wikilinks]]` for internal article links.
- Every content decision must pass: "Would a comms professional need to know this to do their job well?"
- Plain English beats technical jargon. Define unavoidable specialist terms.
- Treat `UBIQUITOUS_LANGUAGE.md` as the canonical climate finance glossary.
- Respect the curation gate before building new wiki articles from raw material.

## Site Rules

- The Astro site is the deployed public surface.
- Do not commit `node_modules/`, `dist/`, generated screenshots, local caches, or rendered video outputs unless explicitly requested.
- If site source changes, run or recommend a build check.
- Keep article/source content and rendered site content clearly separated.

## Journaling

For file-changing sessions in this project, update `JOURNAL/YYYY-MM-DD.md` as the final write action.
