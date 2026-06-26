# Skills Structure Test

Run these commands before every release:

```bash
node scripts/validate-skills.mjs
node scripts/generate-catalog.mjs
node scripts/check-links.mjs
```

Expected result: all commands exit with code 0 and `CATEGORIES.md` is up to date.
