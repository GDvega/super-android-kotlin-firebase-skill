# External Source Matrix

This matrix distinguishes historical references, optional companion skills and technical references. It prevents the repository from treating every source as an installable skill.

## Historical use before v0.4.4

### 1. Sources used as historical inspiration

- AliAsadi/Android-Clean-Architecture
- Drjacky/claude-android-ninja
- GetStream/agent-skills
- JetBrains/skills
- Kotlin/kotlin-agent-skills
- Meet-Miyani/compose-skill
- RevenueCat/play-billing-skills
- VoltAgent/awesome-agent-skills
- addyosmani/web-quality-skills
- affaan-m/everything-claude-code
- aldefy/compose-skill
- android/ai-samples
- android/architecture-components-samples
- android/architecture-samples
- android/compose-samples
- android/nowinandroid
- android/skills
- auth0/agent-skills
- dpconde/claude-android-skill
- firebase/agent-skills
- firebase/quickstart-android
- firebase/skills
- genkit-ai/genkit
- github/awesome-copilot
- google/adk-samples
- google/agents-cli
- google/skills
- googlemaps/android-maps-compose
- joreilly/GeminiKMP
- new-silvermoon/awesome-android-agent-skills
- skydoves/android-skills-mcp
- skydoves/android-testing-skills
- skydoves/compose-performance-skills
- thebushidocollective/han
- vercel-labs/skills
- wshobson/agents

### 2. Sources suitable as companion skills

- android/skills
- firebase/agent-skills
- firebase/skills
- Kotlin/kotlin-agent-skills
- aldefy/compose-skill
- Meet-Miyani/compose-skill
- skydoves/android-testing-skills
- skydoves/compose-performance-skills
- GetStream/agent-skills
- JetBrains/skills
- google/skills
- auth0/agent-skills
- RevenueCat/play-billing-skills
- wshobson/agents
- affaan-m/everything-claude-code
- dpconde/claude-android-skill
- Drjacky/claude-android-ninja

Use `--list` before installing any external source that has not been verified in the current environment.

### 3. Sources suitable only as technical references

- AliAsadi/Android-Clean-Architecture
- android/ai-samples
- android/architecture-components-samples
- android/architecture-samples
- android/compose-samples
- android/nowinandroid
- firebase/quickstart-android
- genkit-ai/genkit
- google/adk-samples
- google/agents-cli
- googlemaps/android-maps-compose
- joreilly/GeminiKMP
- skydoves/android-skills-mcp
- vercel-labs/skills

These should inform architecture, SDK usage, sample workflows or tooling awareness. They should not be treated as vendored source code.

### 4. Sources suitable only as ecosystem/index references

- VoltAgent/awesome-agent-skills
- github/awesome-copilot
- new-silvermoon/awesome-android-agent-skills

Use these for discovery and taxonomy only. Do not copy indexed third-party content through them.

### 5. Sources requiring future review

- android/ai-samples because no license file was detected in the local max-depth audit.
- thebushidocollective/han because the local license is FSL-1.1-ALv2.
- vercel-labs/skills because MIT was detected through package metadata, not a root license file.
- Any companion skill source before installation in a new agent environment.

## Release rule

Future releases should update this matrix when a new source materially influences skill taxonomy, validation, documentation or companion routing.
