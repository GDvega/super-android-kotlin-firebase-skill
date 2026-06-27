# External Skill Alignment Final Report

## Summary of risks found

The review found topical overlap with external Android, Compose, testing and performance skill repositories. That overlap is expected because this repository covers the same ecosystem, but the local skills are written as original orchestration workflows.

No copied external skill body, script, long example, source file or reference guide was intentionally found in this pass.

## Skills with higher duplication risk

The highest topical-overlap areas are:

- `jetpack-compose`
- `compose-performance`
- `testing`
- `design-test-gate`
- `context-aware-ui-design`
- `compose-contextual-design-system`
- `screen-ux-audit`
- `ui-state-design`
- `edge-to-edge-adaptive-ui`
- `android-navigation-3`
- `r8-proguard-optimization`
- `agp9-kotlin-migration`

These remain original local skills, but they now route deeper specialist work to companion skills when those are installed.

## What was rewritten

- Added `# Related existing skills` to every local subskill.
- Routed each skill to local companion skills first.
- Added optional external companion skills without vendoring their contents.
- Updated README and root `SKILL.md` to explain companion routing.
- Updated NOTICE with reuse boundaries and external inspiration sources.
- Added a legal and attribution policy for future releases.

## Sources attributed

- `aldefy/compose-skill`
- `skydoves/android-testing-skills`
- `skydoves/compose-performance-skills`
- `android/skills`
- `vercel-labs/skills`
- Android Developers documentation for Compose, Material 3, accessibility, testing, adaptive UI, R8, Navigation and Firebase-related Android guidance where relevant.

## Companion skills recommended

- `aldefy/compose-skill` for deeper Compose, Material 3, design-to-code, theming and architecture guidance.
- `skydoves/android-testing-skills` for deeper Android and Compose UI testing guidance.
- `skydoves/compose-performance-skills` for deeper Compose performance, stability and measurement guidance.
- `android/skills` for official Android workflow alignment.
- `vercel-labs/skills` for Agent Skills CLI and multi-agent packaging patterns.

## What was not copied

- External `SKILL.md` bodies.
- External scripts.
- External README tables.
- External RIGHT/WRONG examples.
- External source files.
- AndroidX or AOSP source excerpts.
- Long external reference guides.

## Validations executed

- `npm ci`
- `npm run validate`
- `npm run catalog`
- `npm run links`
- `npm run check`

## Result of npm run check

```text
> super-android-kotlin-firebase-skill@0.5.1 check
> npm run validate && npm run catalog && npm run links

> super-android-kotlin-firebase-skill@0.5.1 validate
> node scripts/validate-skills.mjs

Skill validation passed.

> super-android-kotlin-firebase-skill@0.5.1 catalog
> node scripts/generate-catalog.mjs

Generated CATEGORIES.md with 37 skills.

> super-android-kotlin-firebase-skill@0.5.1 links
> node scripts/check-links.mjs

Markdown link check passed.
```

## Recommendation for release

Release as `v0.5.1`. The local validation passed, the generated catalog is clean and the repository is ready for GitHub Actions validation after pushing the tag.
