# Writing Standards

## Article format

Every article in `wiki/` must follow this structure:

```markdown
# Article Title

> One-sentence plain-English summary of what this is.

## Overview
2–4 paragraphs. Write like Wikipedia — clear, factual, no fluff. Assume the reader is intelligent but new to this specific topic.

## [Relevant sections based on topic]
Use H2 headings for major sections. Keep paragraphs short.

## Key Facts
Bullet points of the most important numbers, dates, or data points.

## See Also
- [[Related Article 1]]
- [[Related Article 2]]
- [[Related Article 3]]

## Sources
- Source name / document it was compiled from
```

## Writing style

- Plain English first. Define jargon immediately after using it.
- Short paragraphs (3–5 sentences max).
- Active voice.
- No bullet lists where prose flows better.
- Tone: informed and curious, like a smart journalist — not academic, not corporate.
- Never use filler phrases like "it is important to note" or "in conclusion."

## Linking rules

- Every concept mentioned that has (or should have) its own article gets a `[[wikilink]]`.
- Aim for at least 3–5 outbound links per article.
- First mention of a term in an article gets linked; subsequent mentions do not.
- Links should feel natural — invitations to go deeper, not noise.
- Use `[[wikilinks]]` syntax (not standard markdown links) for internal links — Obsidian is the primary viewer.

## Comms-relevance filter

**Include:** Key concepts and terminology (so the owner can write and speak confidently), the landscape of key players and their narratives, what's contested or politically charged, what's emerging or newsworthy, frameworks useful for advising clients, how to spot greenwashing, the "story" behind financial mechanisms.

**Exclude or summarise only:** Technical financial modelling, quantitative methods, portfolio construction methodology, regulatory compliance detail, accounting standards in full — anything that belongs in a specialist's toolkit rather than a communicator's.

## Index file rules

Each topic's `_index.md` is the front page of that topic's wiki. It must:
- Give a 1-paragraph orientation to the entire topic.
- List all articles in the wiki grouped by category, with a one-line description each.
- Be updated every time a new article is added.

## Obsidian compatibility

- All formatting must render correctly in Obsidian.
- Use `[[wikilinks]]` for internal links.
- Images saved locally to `raw/[topic]/images/` when possible.
- Keep folder structure flat — avoid over-nesting.
