# AGENTS.md

Use this repository as an Agent Skills package. Before editing, read `SKILL.md`, select relevant subskills, and run repository validation.

## Editing rules

- Do not copy long upstream content.
- Keep skills short and structured.
- Add references/templates instead of bloating `SKILL.md` files.
- Preserve valid frontmatter.
- Update `CATEGORIES.md` with `node scripts/generate-catalog.mjs`.

## Validation

```bash
node scripts/validate-skills.mjs
node scripts/generate-catalog.mjs
node scripts/check-links.mjs
```
