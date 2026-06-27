# Historical Source Provenance up to v0.4.4

## Purpose

This document records the public repositories reviewed as historical reference sources while this repository was built up to `v0.4.4`.

It is a provenance and attribution audit. It does not rewrite Git history, move old tags or claim that external content is vendored here.

## Scope

The repositories below were used as reference material during the creation of this repo up to `v0.4.4`.

That means:

- They informed structure, taxonomy, workflow coverage, naming decisions, testing, release, security and companion-skill strategy.
- Their content is not assumed to be copied into this repository.
- Not all of them are installable companion skills.
- Some are Agent Skill repositories, some are sample apps, some are SDK/library references, some are indexes and some are agent tooling.
- External `SKILL.md` bodies, source files, scripts, examples and reference guides should not be copied here without preserving required licenses and notices.

## Type legend

- `companion-skill-catalog`: broader skill catalog that may be installable or useful as a companion.
- `single-skill-or-small-skillset`: narrow skill repo or small group of related skills.
- `official-sample-code`: official sample app or sample-code repository.
- `architecture-reference`: app architecture reference.
- `sdk-or-library-reference`: SDK, library or framework reference.
- `agent-tooling-reference`: agent CLI, MCP or tooling reference.
- `awesome-list-or-index`: curated index of skills, agents or examples.
- `docs-or-handbook-reference`: documentation, handbook or checklist-oriented source.
- `unknown-or-review-required`: local evidence was not enough for a confident classification.

## Historical source table

| name | remote | commit auditado | tipo | licencia detectada | rol en el repo | áreas donde influyó | companion | técnica | NOTICE | riesgo dup | acción tomada |
|---|---|---|---|---|---|---|---|---|---|---|---|
| AliAsadi/Android-Clean-Architecture | https://github.com/AliAsadi/Android-Clean-Architecture.git | b8c5952 | architecture-reference | Apache-2.0 | architecture inspiration | clean architecture, layers, repositories | no | yes | yes | low | attributed; no code copied |
| Drjacky/claude-android-ninja | https://github.com/Drjacky/claude-android-ninja.git | f3effab | single-skill-or-small-skillset | Apache-2.0 | Android agent workflow reference | Android review, agent workflow | possible | no | yes | medium | attributed; local wording retained |
| GetStream/agent-skills | https://github.com/GetStream/agent-skills.git | dbca5b7 | companion-skill-catalog | Apache-2.0 | skill structure reference | skill organization, mobile topics | possible | no | yes | medium | attributed; no bodies copied |
| JetBrains/skills | https://github.com/JetBrains/skills.git | 966a14a | companion-skill-catalog | Apache-2.0 per skill dirs | skill ecosystem reference | skill packaging, validation, tooling | possible | no | yes | medium | attributed; no bodies copied |
| Kotlin/kotlin-agent-skills | https://github.com/Kotlin/kotlin-agent-skills.git | 9aea718 | companion-skill-catalog | Apache-2.0 | Kotlin companion reference | Kotlin, Gradle, migration | yes | no | yes | medium | attributed; no bodies copied |
| Meet-Miyani/compose-skill | https://github.com/Meet-Miyani/compose-skill.git | 982c240 | single-skill-or-small-skillset | MIT | Compose reference | Compose, Material 3, UI | possible | no | yes | medium | attributed; no bodies copied |
| RevenueCat/play-billing-skills | https://github.com/RevenueCat/play-billing-skills.git | 85d2933 | companion-skill-catalog | Apache-2.0 | billing/release reference | Play Billing, subscriptions | possible | yes | yes | low | attributed; no scripts copied |
| VoltAgent/awesome-agent-skills | https://github.com/VoltAgent/awesome-agent-skills.git | 934b1e8 | awesome-list-or-index | MIT | discovery reference | skill discovery, taxonomy | no | no | yes | low | attributed as index |
| addyosmani/web-quality-skills | https://github.com/addyosmani/web-quality-skills.git | 95d6e25 | single-skill-or-small-skillset | MIT | quality checklist reference | accessibility, quality, review | possible | no | yes | low | attributed; web-first boundary noted |
| affaan-m/everything-claude-code | https://github.com/affaan-m/everything-claude-code.git | 71d22d0 | companion-skill-catalog | MIT | workflow reference | clean architecture, coroutines, testing | possible | no | yes | medium | attributed; local synthesis kept |
| aldefy/compose-skill | https://github.com/aldefy/compose-skill.git | 6c05a4d | single-skill-or-small-skillset | MIT | Compose companion reference | Compose, Material 3, design systems | yes | no | yes | medium | attributed; no bodies copied |
| android/ai-samples | https://github.com/android/ai-samples.git | 8f47ab7 | official-sample-code | review required | AI sample reference | Android AI, Gemini patterns | no | yes | yes | low | attribution added; license review required |
| android/architecture-components-samples | https://github.com/android/architecture-components-samples.git | e849ce3 | official-sample-code | Apache-2.0 | Android sample reference | lifecycle, Room, architecture | no | yes | yes | low | attributed; no code copied |
| android/architecture-samples | https://github.com/android/architecture-samples.git | ee66e15 | architecture-reference | Apache-2.0 | architecture sample reference | app layers, testing, repositories | no | yes | yes | low | attributed; no code copied |
| android/compose-samples | https://github.com/android/compose-samples.git | bc18264 | official-sample-code | Apache-2.0 | Compose sample reference | Compose UI, state, previews | no | yes | yes | low | attributed; no code copied |
| android/nowinandroid | https://github.com/android/nowinandroid.git | 7d45eae | architecture-reference | Apache-2.0 | production architecture reference | modularization, release, benchmarks | no | yes | yes | low | attributed; no code copied |
| android/skills | https://github.com/android/skills.git | 07302ca | companion-skill-catalog | Apache-2.0 | official companion reference | AGP, R8, Navigation, adaptive UI | yes | yes | yes | medium | attributed; no bodies copied |
| auth0/agent-skills | https://github.com/auth0/agent-skills.git | dc9be33 | companion-skill-catalog | Apache-2.0 | auth skill reference | auth flows, security boundaries | possible | yes | yes | low | attributed; no bodies copied |
| dpconde/claude-android-skill | https://github.com/dpconde/claude-android-skill.git | edfca5e | single-skill-or-small-skillset | MIT | Android agent reference | Android architecture, agent prompts | possible | no | yes | medium | attributed; no bodies copied |
| firebase/agent-skills | https://github.com/firebase/agent-skills.git | 538130c | companion-skill-catalog | Apache-2.0 | Firebase companion reference | Firestore, rules, emulator, AI | yes | yes | yes | medium | attributed; no bodies copied |
| firebase/quickstart-android | https://github.com/firebase/quickstart-android.git | 3dd88e6 | official-sample-code | Apache-2.0 | Firebase sample reference | Firebase setup, SDK usage | no | yes | yes | low | attributed; no code copied |
| firebase/skills | https://github.com/firebase/skills.git | 538130c | companion-skill-catalog | Apache-2.0 | Firebase skill reference | Firebase tooling and skills | yes | yes | yes | medium | attributed; no bodies copied |
| genkit-ai/genkit | https://github.com/genkit-ai/genkit.git | 2fed8df | sdk-or-library-reference | Apache-2.0 | AI backend reference | Genkit, AI flows, backend context | no | yes | yes | low | attributed; no code copied |
| github/awesome-copilot | https://github.com/github/awesome-copilot.git | e9c8e37 | awesome-list-or-index | MIT | ecosystem index reference | agent prompts, discovery | no | no | yes | low | attributed as index |
| google/adk-samples | https://github.com/google/adk-samples.git | aa52544 | official-sample-code | Apache-2.0 | agent sample reference | ADK agents, samples | no | yes | yes | low | attributed; no code copied |
| google/agents-cli | https://github.com/google/agents-cli.git | 7e1f009 | agent-tooling-reference | Apache-2.0 | agent tooling reference | CLI, agent operations | no | yes | yes | low | attributed; no code copied |
| google/skills | https://github.com/google/skills.git | ac00b5e | companion-skill-catalog | Apache-2.0 | Google skill reference | Google Cloud, Gemini, product skills | possible | yes | yes | medium | attributed; no bodies copied |
| googlemaps/android-maps-compose | https://github.com/googlemaps/android-maps-compose.git | ba37c63 | sdk-or-library-reference | Apache-2.0 | Maps Compose reference | maps UI, Compose SDK patterns | no | yes | yes | low | attributed; no code copied |
| joreilly/GeminiKMP | https://github.com/joreilly/GeminiKMP.git | 61f807d | architecture-reference | Apache-2.0 | KMP sample reference | Gemini, KMP, Compose app flow | no | yes | yes | low | attributed; no code copied |
| new-silvermoon/awesome-android-agent-skills | https://github.com/new-silvermoon/awesome-android-agent-skills.git | e5d0275 | awesome-list-or-index | Apache-2.0 | Android skill index reference | skill discovery, Android agents | no | no | yes | low | attributed as index |
| skydoves/android-skills-mcp | https://github.com/skydoves/android-skills-mcp.git | 9f0b0be | agent-tooling-reference | Apache-2.0 with NOTICE | MCP/tooling reference | Android MCP, agent tooling | possible | yes | yes | medium | attributed; no bundled content copied |
| skydoves/android-testing-skills | https://github.com/skydoves/android-testing-skills.git | 8665ed5 | companion-skill-catalog | Apache-2.0 | testing companion reference | unit, Compose UI, semantics tests | yes | yes | yes | medium | attributed; no bodies copied |
| skydoves/compose-performance-skills | https://github.com/skydoves/compose-performance-skills.git | 1b32f81 | companion-skill-catalog | Apache-2.0 | performance companion reference | recomposition, stability, benchmarks | yes | yes | yes | medium | attributed; no bodies copied |
| thebushidocollective/han | https://github.com/thebushidocollective/han.git | 3fc9880 | single-skill-or-small-skillset | FSL-1.1-ALv2 | Compose skill reference | Compose guidance, review only | review first | no | yes | medium | attributed; copy nothing substantial |
| vercel-labs/skills | https://github.com/vercel-labs/skills.git | 9a7d8ac | agent-tooling-reference | MIT via package metadata | CLI ecosystem reference | install, list, global/project usage | possible | yes | yes | low | attributed; no code copied |
| wshobson/agents | https://github.com/wshobson/agents.git | 5cc2549 | companion-skill-catalog | MIT | agent catalog reference | mobile design, agent roles | possible | no | yes | medium | attributed; no bodies copied |

## Notes on license evidence

- `android/ai-samples` did not expose a license file within the local max-depth audit, so it is marked review required.
- `vercel-labs/skills` did not expose a root license file in the local audit; package metadata reported MIT.
- `JetBrains/skills` contains many per-skill Apache-2.0 license files rather than one root license in this local clone.
- `thebushidocollective/han` uses FSL-1.1-ALv2, so this repository should not copy substantial content from it without a dedicated review.

## Final boundary

The action taken for this release is documentation and governance only. No old tags were moved, no Git history was rewritten and no external repository content was intentionally copied into this repo.
