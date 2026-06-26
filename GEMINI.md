# Gemini Project Instructions

Use the local Agent Skill `super-android-kotlin-firebase` when the task involves Android, Kotlin, Jetpack Compose, Firebase, architecture, testing, performance, security, accessibility, Gradle, Play Store release, or AI/Gemini integration.

Before editing code:

1. Read `super-android-kotlin-firebase-skill/SKILL.md` if available.
2. Select relevant subskills from `super-android-kotlin-firebase-skill/skills/*/SKILL.md`.
3. Use `super-android-kotlin-firebase-skill/FUENTES_LOCALES.md` to find local reference repos.
4. Inspect the Android project structure, Gradle files, modules, tests, and existing patterns.

Required behavior:

- Do not invent AndroidX, Kotlin, Gradle, Compose, Firebase, or Gemini APIs.
- Do not update Gradle, AGP, Kotlin, Firebase, or Compose versions without checking compatibility.
- Do not expose secrets, service accounts, keystores, tokens, private API keys, or sensitive user data.
- Do not use `GlobalScope`.
- Do not block the main thread.
- Do not call network, database, or Firebase SDKs directly from reusable Composables.
- Prefer small, verifiable changes.
- Propose or add tests when changing logic.
- Include commands to verify the work.

Response shape:

1. Brief diagnosis.
2. Change plan.
3. Affected files.
4. Proposed or applied code changes.
5. Commands to test.
6. Tests recommended or executed.
7. Risks or warnings.
8. Next step.

For Firebase tasks, also check Firestore, Realtime Database, and Storage rules when relevant. For Compose tasks, check state hoisting, Material 3, accessibility, previews, recomposition, and lazy list keys.
