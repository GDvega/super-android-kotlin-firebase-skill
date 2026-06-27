# Companion Skills

Companion skills are external Agent Skills that can be installed beside this repository when deeper specialized guidance is useful.

This repository does not vendor or copy those external skills. It references them as optional companions and keeps its own content focused on original Android, Kotlin, Jetpack Compose, Firebase, testing, security, performance and release orchestration.

## How to use companion skills

Use the local skills in this repository first. If a task needs deeper coverage, ask the agent to consult an installed companion skill or install/list it separately.

Companion skills are useful when:

- A Compose task needs deeper Material 3, theming, design-to-code or Compose architecture guidance.
- A test task needs deeper Android or Compose UI testing guidance.
- A performance task needs deeper Compose recomposition, stability or release-mode measurement guidance.
- A platform task needs official Android workflow alignment.
- A repository maintenance task needs broader Agent Skills CLI packaging or installation context.

Always review third-party skills before use. Agent skills can influence tool use and code changes.

## What this repo is not

This repository is not a vendored copy of external catalogs. It does not replace deep specialist sources such as Compose, Android testing, Compose performance or official Android skills.

This repository is an orchestration layer for Android, Kotlin, Jetpack Compose, Firebase, testing, security, performance and release workflows. For deep specialized guidance, it can coordinate with companion skills when installed.

## Recommended install and list commands

Install this repository:

```bash
npx --yes skills@latest add GDvega/super-android-kotlin-firebase-skill --full-depth -g -a codex -y
```

Verify available global skills:

```bash
npx --yes skills@latest list -g
```

Before installing a third-party repository, list what it exposes:

```bash
npx --yes skills@latest add aldefy/compose-skill --list
npx --yes skills@latest add skydoves/android-testing-skills --list
npx --yes skills@latest add skydoves/compose-performance-skills --list
npx --yes skills@latest add android/skills --list
```

If the list output matches what you need, install the companion skill:

```bash
npx --yes skills@latest add aldefy/compose-skill -g -a codex -y
npx --yes skills@latest add skydoves/android-testing-skills -g -a codex -y
npx --yes skills@latest add skydoves/compose-performance-skills -g -a codex -y
npx --yes skills@latest add android/skills -g -a codex -y
```

If a repository does not expose installable skills in the expected structure, do not invent an install command. Use `--list` first and document the result.

## Companion source roles

| Companion source | Recommended role |
|---|---|
| `aldefy/compose-skill` | Deep Jetpack Compose, Material 3, design-to-code, theming and Compose architecture guidance. |
| `skydoves/android-testing-skills` | Deep Android testing, Compose UI testing, semantics, assertions, gestures and test workflow guidance. |
| `skydoves/compose-performance-skills` | Deep Compose performance, recomposition, stability, lazy layout and release-mode measurement guidance. |
| `android/skills` | Official Android workflow guidance for edge-to-edge, adaptive UI, Navigation 3, R8, AGP, testing setup and platform topics. |
| `vercel-labs/skills` | Agent Skills CLI ecosystem, installation, discovery and multi-agent packaging patterns. |

## Reuse boundaries

- Invoke or recommend companion skills when installed.
- Do not copy external `SKILL.md` bodies into this repository.
- Do not copy external scripts, examples, tables or reference guides without preserving the required license notices.
- Prefer original summaries and workflows that fit this repository's Android/Kotlin/Firebase orchestration role.
