# v0.4.0 - Specialized Android and Firebase implementation skills

This release expands the repository from a broad Android/Kotlin/Firebase skill pack into a more surgical toolkit for workflows where AI coding agents often need stricter guardrails.

## Highlights

- Added `android-navigation-3` for Navigation 3 setup, typed routes, deep links and back stack migration.
- Added `agp9-kotlin-migration` for safer AGP 9, Kotlin, Gradle and version catalog upgrades.
- Added `r8-proguard-optimization` for release shrinking, R8 keep rules and Crashlytics mapping workflows.
- Added `xml-to-compose-migration` for incremental XML/ViewBinding to Compose migrations.
- Added `edge-to-edge-adaptive-ui` for insets, system bars, tablets, foldables and adaptive UI.
- Added `firebase-emulator-ci` for Firebase Emulator Suite and Security Rules validation in CI.
- Added `firestore-costs-quotas` for cost-aware Firestore modeling, listeners, indexes and pagination.
- Added `workmanager-background-sync` for WorkManager background sync, retries and offline-first jobs.
- Added `macrobenchmark-baseline-profiles` for startup, scroll, jank and Baseline Profile workflows.
- Added `dependency-upgrade-safety` for safer Android dependency upgrades and rollback planning.
- Updated validation so new skill folders are discovered dynamically instead of requiring exactly 22 skills.

## Validation

```bash
npm ci
npm run check
```

Expected result:

```text
Skill validation passed.
Generated CATEGORIES.md with 32 skills.
Markdown link check passed.
```

## Recommended installation

```bash
npx skills add GDvega/super-android-kotlin-firebase-skill --full-depth -g -a codex -y
```
