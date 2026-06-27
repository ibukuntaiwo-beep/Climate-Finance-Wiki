# Curation Workflow

## When the owner adds raw material

This workflow is mandatory before writing any wiki article from new raw material.

### Step 1 — Inventory and curation gate (always first)

1. Read all new raw files.
2. List every topic, concept, and theme found.
3. For each one, make a judgement: **Comms-relevant** or **Specialist-only**?
4. Present this list to the owner for confirmation before proceeding.
5. Only build wiki articles for items marked Comms-relevant.

**Comms-relevant signals:** Can explain to a journalist, client, or executive. Shapes narratives. Affects reputation or public perception. Is something a non-specialist would ask about. Is politically or commercially significant.

**Specialist-only signals:** Requires a financial model to apply. Is a calculation methodology. Is granular regulatory compliance. Would only matter to a portfolio manager or risk analyst.

### Step 2 — Build the wiki

1. Check `_index.md` — what articles already exist? What's missing?
2. Check `wiki-status.json` — confirm the full current state of the wiki.
3. Create or update wiki articles for all approved comms-relevant items.
4. Update `_index.md` with any new articles.
5. Update `wiki-status.json` with new or changed entries.
6. Add backlinks in related existing articles where relevant.

## When the owner asks a question

1. Research the answer using the wiki first.
2. Write a clear answer in a new file: `queries/YYYY-MM-DD_short-title.md`.
3. Link to relevant wiki articles in the answer.
4. Suggest 2–3 follow-up questions at the end.
5. Ask the owner if the answer should be filed back into the wiki as an article.

## When the owner asks for an output

1. Generate the output (summary, comparison, visual brief, talking points, etc.).
2. Save it to `queries/YYYY-MM-DD_short-title.md`.
3. Link to any wiki articles it draws from.
