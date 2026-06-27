# Historical Source Provenance Final Report

## Audit summary

This audit documents the 36 historical reference repositories used while building this repository up to `v0.4.4`.

The goal was retrospective clarity: record source lineage, attribution boundaries, companion-skill boundaries and technical-reference boundaries without rewriting history.

## Confirmation of historical use

The sources listed in `HISTORICAL_SOURCE_PROVENANCE_V0_4_4.md` were used as inspiration, comparison and reference material up to `v0.4.4`.

This does not mean external content is vendored here. It means those repositories influenced taxonomy, workflow coverage, naming decisions, Android/Kotlin/Firebase/Compose scope, validation ideas, testing coverage, release coverage and security coverage.

## Confirmation about v0.4.4

The `v0.4.4` tag was not moved. Git history was not rewritten. Previous releases were not deleted.

## Repositories with the highest influence

- `android/skills`
- `firebase/agent-skills`
- `firebase/skills`
- `Kotlin/kotlin-agent-skills`
- `aldefy/compose-skill`
- `skydoves/android-testing-skills`
- `skydoves/compose-performance-skills`
- `android/nowinandroid`
- `android/architecture-samples`
- `android/compose-samples`
- `firebase/quickstart-android`
- `vercel-labs/skills`

## Repositories classified as companion skills

- `android/skills`
- `firebase/agent-skills`
- `firebase/skills`
- `Kotlin/kotlin-agent-skills`
- `aldefy/compose-skill`
- `Meet-Miyani/compose-skill`
- `skydoves/android-testing-skills`
- `skydoves/compose-performance-skills`
- `GetStream/agent-skills`
- `JetBrains/skills`
- `google/skills`
- `auth0/agent-skills`
- `RevenueCat/play-billing-skills`
- `wshobson/agents`
- `affaan-m/everything-claude-code`
- `dpconde/claude-android-skill`
- `Drjacky/claude-android-ninja`

Agents should still verify installability with `--list` before installing a companion source that has not been checked in the current environment.

## Repositories classified as technical references

- `AliAsadi/Android-Clean-Architecture`
- `android/ai-samples`
- `android/architecture-components-samples`
- `android/architecture-samples`
- `android/compose-samples`
- `android/nowinandroid`
- `firebase/quickstart-android`
- `genkit-ai/genkit`
- `google/adk-samples`
- `google/agents-cli`
- `googlemaps/android-maps-compose`
- `joreilly/GeminiKMP`
- `skydoves/android-skills-mcp`
- `vercel-labs/skills`

These sources should be used for architecture, SDK usage, sample workflow or tooling understanding. They should not be treated as vendored code.

## Legal risks found

- Several sources are Apache-2.0, so substantial copied material would require preserving license and notice obligations.
- MIT sources still require preserving notices when substantial material is copied.
- `android/ai-samples` did not expose a license file in the local max-depth audit and requires future review before reuse.
- `thebushidocollective/han` uses FSL-1.1-ALv2 and should not be copied from without focused review.
- `vercel-labs/skills` showed MIT via package metadata, not a root license file, in the local audit.

No substantial external `SKILL.md` body, source code, script, detailed example or reference guide was intentionally added during this release.

## Actions taken

- Created `docs/audits/HISTORICAL_SOURCE_PROVENANCE_V0_4_4.md`.
- Created `docs/EXTERNAL_SOURCE_MATRIX.md`.
- Updated `NOTICE.md` with historical source references up to `v0.4.4`.
- Updated `README.md` with historical sources and attribution.
- Updated root `SKILL.md` with historical source awareness.
- Updated `docs/COMPANION_SKILLS.md` to distinguish historical references from companion skills.
- Updated `docs/LEGAL_AND_ATTRIBUTION_POLICY.md` with retrospective provenance rules.
- Updated validation to require the historical provenance documentation.
- Updated package version and changelog to `0.5.2`.

## Result of npm run check

```text
> super-android-kotlin-firebase-skill@0.5.2 check
> npm run validate && npm run catalog && npm run links

> super-android-kotlin-firebase-skill@0.5.2 validate
> node scripts/validate-skills.mjs

Skill validation passed.

> super-android-kotlin-firebase-skill@0.5.2 catalog
> node scripts/generate-catalog.mjs

Generated CATEGORIES.md with 37 skills.

> super-android-kotlin-firebase-skill@0.5.2 links
> node scripts/check-links.mjs

Markdown link check passed.
```

## Release recommendation

Release as `v0.5.2`. The local validation suite passed; publish only after GitHub Actions also passes on `main` and the tag.
