# Super Android Kotlin Firebase Skill

![Agent Skills](https://img.shields.io/badge/Agent%20Skills-compatible-blue)
![Android](https://img.shields.io/badge/Android-Kotlin-green)
![Firebase](https://img.shields.io/badge/Firebase-ready-orange)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

A modular Agent Skills repository for building, reviewing, refactoring, testing, securing, optimizing and releasing modern Android apps with Kotlin, Jetpack Compose and Firebase.

## Who this is for

- Android developers using Claude Code, Codex, Cursor, Gemini CLI, Android Studio Gemini, Windsurf, OpenCode or compatible agents.
- Teams that want consistent Android/Kotlin/Firebase architecture, testing, security and release guidance.
- Projects using Compose, Material 3, Room, DataStore, Retrofit/Ktor, Hilt/Koin and Firebase.

## Problems it solves

- Keeps agents from inventing Android, Compose, Firebase or Gradle APIs.
- Routes work to focused subskills instead of one giant prompt.
- Provides checklists, templates, examples and validation scripts.
- Documents attribution and safety boundaries for an open source skill repo.

## Included skills

Run `node scripts/generate-catalog.mjs` to refresh [CATEGORIES.md](CATEGORIES.md). Current groups include Android platform, Kotlin, Compose, Firebase, local data, networking, DI, testing, security, accessibility, debugging, release and review/refactor.

## Installation with npx skills

Because this repository is private, make sure your GitHub CLI/git credentials can read `GDvega/super-android-kotlin-firebase-skill` before running these commands.

```bash
npx skills add GDvega/super-android-kotlin-firebase-skill
npx skills add GDvega/super-android-kotlin-firebase-skill --skill jetpack-compose
npx skills add GDvega/super-android-kotlin-firebase-skill --agent codex
npx skills add GDvega/super-android-kotlin-firebase-skill --agent cursor
npx skills add GDvega/super-android-kotlin-firebase-skill -g
```

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

Use `npx skills add GDvega/super-android-kotlin-firebase-skill --agent cursor`, or copy the relevant `SKILL.md` guidance into Cursor project rules if your setup does not load Agent Skills directly.

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

Use `npx skills add GDvega/super-android-kotlin-firebase-skill` when supported. Otherwise, attach `SKILL.md`, `AGENTS.md`, `GEMINI.md` or the relevant subskill file as project instructions.

## Manual installation

Copy this repository to an agent skills directory and restart the agent so it rescans available skills.

## Example prompts

- `Use $super-android-kotlin-firebase to create a new Android app with Compose, Room, Firebase Auth and Firestore.`
- `Use $super-android-kotlin-firebase to review this project for architecture, testing, Firebase rules and release risks.`
- `Use $super-android-kotlin-firebase to fix this Gradle error and explain the smallest safe change.`
- `Use $super-android-kotlin-firebase to optimize this LazyColumn and add validation commands.`

## Repository structure

```text
SKILL.md
skills/<skill-name>/SKILL.md
skills/<skill-name>/references/
skills/<skill-name>/templates/
checklists/
templates/
examples/
scripts/
tests/
.github/workflows/validate.yml
```

## Updating

```bash
git pull
node scripts/validate-skills.mjs
node scripts/generate-catalog.mjs
node scripts/check-links.mjs
```

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md). Keep skills short, actionable and legally clean. Put long details in `references/` and code examples in `templates/`.

## Security

Read [SECURITY.md](SECURITY.md). Never commit service accounts, keystores, tokens, `.env` files, private API keys or production credentials.

## License and attribution

This repository is MIT licensed. It is inspired by public Android, Firebase, Kotlin and Agent Skills repositories. See [NOTICE.md](NOTICE.md) for attribution and license notes.
