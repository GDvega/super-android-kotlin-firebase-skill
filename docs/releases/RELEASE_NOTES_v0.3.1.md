# v0.3.1 - Professional validation and release metadata

This release polishes the repository for public use as a modular Agent Skills package for Android, Kotlin, Jetpack Compose, Firebase and AI-assisted development.

## Highlights

- Cleaned the root `SKILL.md` frontmatter and checklist headings.
- Expanded repository validation coverage.
- Added validation for unclosed Markdown code fences.
- Updated GitHub Actions to Node.js 22.
- Improved installation documentation.
- Strengthened `NOTICE.md` and `SECURITY.md`.

## Validation

```bash
npm ci
npm run check
```

Expected result:

```text
Skill validation passed.
Generated CATEGORIES.md with 22 skills.
Markdown link check passed.
```

## Recommended installation

```bash
npx skills add GDvega/super-android-kotlin-firebase-skill --full-depth -g -a codex -y
```
