# Super Android Kotlin Firebase Skill

![Agent Skills](https://img.shields.io/badge/Agent%20Skills-compatible-blue)
![Android](https://img.shields.io/badge/Android-Kotlin-green)
![Firebase](https://img.shields.io/badge/Firebase-ready-orange)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

A modular Agent Skills repository for building, reviewing, refactoring, testing, securing, optimizing and releasing modern Android apps with Kotlin, Jetpack Compose and Firebase.

## What is this?

This is a public, modular Agent Skills package for Android app work. It gives AI coding agents an orchestrator skill plus focused subskills, checklists, templates, examples and validation scripts.

## Who is this for?

- Android developers using Claude Code, Codex, Cursor, Gemini CLI, Android Studio Gemini, Windsurf, OpenCode or compatible agents.
- Teams that want consistent Android/Kotlin/Firebase architecture, testing, security and release guidance.
- Projects using Compose, Material 3, Room, DataStore, Retrofit/Ktor, Hilt/Koin and Firebase.

## Problems this repository solves

- Keeps agents from inventing Android, Compose, Firebase or Gradle APIs.
- Routes work to focused subskills instead of one giant prompt.
- Provides checklists, templates, examples and validation scripts.
- Documents attribution and safety boundaries for an open source skill repo.

## Included skills

Run `node scripts/generate-catalog.mjs` to refresh [CATEGORIES.md](CATEGORIES.md). Current groups include Android platform, Kotlin, UI and Compose, Firebase, build and migration, local data, networking, DI, testing, security, accessibility, debugging, performance, release and review/refactor.

## Specialized skills added in v0.4.0

- `android-navigation-3`: Navigation 3 setup, migration, deep links and back stack.
- `agp9-kotlin-migration`: Safe migration to Android Gradle Plugin 9 and Kotlin tooling.
- `r8-proguard-optimization`: Release shrinking, keep rules and R8 troubleshooting.
- `xml-to-compose-migration`: Incremental migration from XML/ViewBinding to Compose.
- `edge-to-edge-adaptive-ui`: Insets, system bars, tablets, foldables and adaptive UI.
- `firebase-emulator-ci`: Firebase Emulator Suite testing in local and CI environments.
- `firestore-costs-quotas`: Firestore data modeling with cost, quota and listener awareness.
- `workmanager-background-sync`: Background sync, retries, constraints and offline-first jobs.
- `macrobenchmark-baseline-profiles`: Startup, scroll, jank measurement and Baseline Profiles.
- `dependency-upgrade-safety`: Safer dependency upgrades with compatibility checks.

## Installation

This repository is public, so the standard Agent Skills CLI can install it directly.

```bash
npx skills add GDvega/super-android-kotlin-firebase-skill --full-depth
npx skills add GDvega/super-android-kotlin-firebase-skill --full-depth --skill jetpack-compose
npx skills add GDvega/super-android-kotlin-firebase-skill --full-depth --agent codex
npx skills add GDvega/super-android-kotlin-firebase-skill --full-depth --agent cursor
npx skills add GDvega/super-android-kotlin-firebase-skill --full-depth -g
npx skills add GDvega/super-android-kotlin-firebase-skill --full-depth -g -a codex -y
```

## Why --full-depth?

Use `--full-depth` because this repository has a root orchestrator skill plus nested subskills under `skills/`. Without it, the CLI may list only the root `super-android-kotlin-firebase` skill.

## Claude Code

```bash
mkdir -p ~/.claude/skills
cp -R super-android-kotlin-firebase-skill ~/.claude/skills/
```

## Codex

```bash
mkdir -p ~/.codex/skills
cp -R super-android-kotlin-firebase-skill ~/.codex/skills/
```

## Cursor

Use `npx skills add GDvega/super-android-kotlin-firebase-skill --full-depth --agent cursor`, or copy the relevant `SKILL.md` guidance into Cursor project rules if your setup does not load Agent Skills directly.

## Gemini CLI

If your Gemini CLI supports skills, install through a compatible skills location or use:

```bash
cp super-android-kotlin-firebase-skill/GEMINI.md /path/to/android-project/GEMINI.md
```

For Firebase-specific MCP support, also consider:

```bash
gemini extensions install https://github.com/firebase/agent-skills
```

## Android Studio Gemini

Gemini in Android Studio expects skills under `~/.agents/skills`:

```bash
mkdir -p ~/.agents/skills
cp -R super-android-kotlin-firebase-skill ~/.agents/skills/
```

## Windsurf and OpenCode

Use `npx skills add GDvega/super-android-kotlin-firebase-skill --full-depth` when supported. Otherwise, attach `SKILL.md`, `AGENTS.md`, `GEMINI.md` or the relevant subskill file as project instructions.

## Manual installation

Copy this repository to an agent skills directory and restart the agent so it rescans available skills.

## Usage examples

- `Use $super-android-kotlin-firebase to create a new Android app with Compose, Room, Firebase Auth and Firestore.`
- `Use $super-android-kotlin-firebase to review this project for architecture, testing, Firebase rules and release risks.`
- `Use $super-android-kotlin-firebase to fix this Gradle error and explain the smallest safe change.`
- `Use $super-android-kotlin-firebase to optimize this LazyColumn and add validation commands.`

## Repository structure

```text
SKILL.md
agents/
skills/<skill-name>/SKILL.md
skills/<skill-name>/references/
skills/<skill-name>/templates/
checklists/
templates/
examples/
docs/audits/
docs/releases/
scripts/
tests/
.github/workflows/validate.yml
```

The `agents/` directory stores agent-facing metadata, such as display names, short descriptions and default prompts for skill UIs. It does not replace `SKILL.md`; it helps compatible tools present the skill clearly.

## Documentation

- [docs/audits/](docs/audits/) keeps repository audits and local-source review notes.
- [docs/releases/](docs/releases/) keeps historical release notes.
- [CATEGORIES.md](CATEGORIES.md) is generated from the current skill catalog.
- [NOTICE.md](NOTICE.md) documents attribution and source-review boundaries.

## Validation

```bash
node scripts/validate-skills.mjs
node scripts/generate-catalog.mjs
node scripts/check-links.mjs
npm run check
```

## Updating

```bash
git pull
npm run check
```

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md). Keep skills short, actionable and legally clean. Put long details in `references/` and code examples in `templates/`.

## Security

Read [SECURITY.md](SECURITY.md). Never commit service accounts, keystores, tokens, `.env` files, private API keys or production credentials.

## Attribution

This repository is inspired by public Android, Firebase, Kotlin and Agent Skills repositories. See [NOTICE.md](NOTICE.md) for attribution and license notes.

## License

This repository is MIT licensed. See [LICENSE](LICENSE).

## Roadmap

- Keep the skill taxonomy aligned with stable Android, Kotlin, Compose and Firebase patterns.
- Add focused examples when real app workflows expose gaps.
- Keep install commands tested against the current Agent Skills CLI.
- Prefer concise subskills and move long guidance into `references/`.

## Recommended GitHub metadata

Description:
A modular Agent Skills repository for Android, Kotlin, Jetpack Compose and Firebase development.

Topics:
android, kotlin, firebase, jetpack-compose, agent-skills, claude-code, codex, cursor, gemini-cli, android-studio, ai-agents.

## Release

The `v0.4.4` release hardens raw Markdown, YAML and JSON formatting checks for GitHub raw readability.

```bash
git tag v0.4.4
git push origin v0.4.4
```
