# Logging Policy

## Journal

- Use `JOURNAL/YYYY-MM-DD.md` for all Climate Finance Wiki file-changing sessions.
- This includes site, wiki, raw source, launch video, trailer, and other promo work.
- Do not create separate promo journals.
- Do not journal analysis-only or advice-only responses.
- The journal update is the final write action.
- Update `JOURNAL/INDEX.md` whenever a new dated journal file is created.

## Entry Format

```markdown
## YYYY-MM-DD

**Session type:** [New articles / Updates / Query / Output / Curation pass / Promo]

**What changed:**
- Created: [list of new files]
- Updated: [list of modified files]

**Notes:**
[Brief context - what raw material was processed, what the owner asked for, any decisions made]
```

## Error log

- When a command or tooling error occurs, log it in `ERROR_LOG/YYYY-MM-DD.md`.
- Update `ERROR_LOG/INDEX.md` when a new dated error file is created.

### Error entry format

```markdown
## YYYY-MM-DD HH:MM

**Command:** [what was run]
**Error:** [the error message]
**Resolution:** [what fixed it, or "unresolved"]
```
