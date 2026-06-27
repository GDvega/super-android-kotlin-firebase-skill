---
name: play-store-release
description: "Use for Play Store release readiness, signing, release builds, ProGuard/R8, App Bundle, Play Console, privacy policy, Data Safety, testing tracks and billing/subscription checks."
---

# Purpose

Prepare Android apps for release without compromising signing, privacy or runtime correctness.

# When to use

- Preparing release build or App Bundle.
- Reviewing R8/ProGuard.
- Completing Play Console, Data Safety or privacy policy work.
- Checking billing/subscriptions or testing tracks.

# Inputs to inspect

- Release build config and signing approach.
- Permissions, SDKs and data collected.
- R8 rules and crash reporting.
- Play Console rollout plan.

# Required workflow

1. Audit release build and signing without exposing secrets.
2. Build minified release/AAB.
3. Review R8 rules, permissions and SDK disclosures.
4. Check privacy policy and Data Safety consistency.
5. Plan staged rollout and monitoring.

# Rules

- Never commit keystores or signing passwords.
- Do not disable R8 just to hide issues.
- Test release behavior, not only debug.
- Data Safety must match actual collection.
- Use tracks before broad production rollout.

# Related existing skills

## Local skills to invoke

- gradle-build
- r8-proguard-optimization
- security-privacy
- firebase-crashlytics-analytics
- testing

## External companion skills to use when installed

Do not assume these companion skills are installed. Prefer the local skills above first, then consult [Companion Skills](../../docs/COMPANION_SKILLS.md) for install and verification commands.

- android/skills — use for official Android workflow alignment around edge-to-edge, adaptive UI, Navigation 3, R8, AGP or testing setup.
- vercel-labs/skills — use for Agent Skills CLI, packaging and multi-agent installation patterns when repository maintenance guidance is needed.

# Files commonly touched

- `app/build.gradle.kts`
- `proguard-rules.pro`
- `privacy docs`
- `release notes`
- `CI config`

# Commands to validate

```bash
./gradlew bundleRelease
./gradlew assembleRelease
./gradlew test
./gradlew lint
```

# Common mistakes to avoid

- Shipping only debug-tested code.
- Keeping debug logging in release.
- Incorrect Data Safety answers.
- No rollback/monitoring plan.

# Checklist

- AAB builds.
- Signing secrets safe.
- R8 tested.
- Privacy/Data Safety reviewed.
- Rollout and monitoring planned.

# Example prompts

- Use $super-android-kotlin-firebase to prepare my app for Play Store release.
- Use $super-android-kotlin-firebase to review R8 and Data Safety risks.

# Expected response style

Respond with: brief diagnosis, change plan, affected files, code or diff summary, validation commands, tests added or recommended, risks, and next step. For review tasks, lead with findings ordered by severity.

# References

- ../../docs/audits/FUENTES_LOCALES.md
- references/release-readiness.md
- templates/play-release-template.md
