# Contributing

Thanks for improving this skill repository.

## Rules

- Keep each skill focused and actionable.
- Use valid Agent Skills frontmatter with `name` and `description`.
- Put long explanations in `references/`.
- Put reusable code snippets in `templates/`.
- Avoid copying long text from upstream repositories.
- Update `NOTICE.md` when new sources materially influence content.
- Run validation before opening a PR.

## Validation

```bash
node scripts/validate-skills.mjs
node scripts/generate-catalog.mjs
node scripts/check-links.mjs
```
