# Super Android Kotlin Firebase Skill

Paquete modular de Agent Skills para crear, revisar, refactorizar y escalar apps Android modernas con Kotlin, Jetpack Compose y Firebase.

## Fuentes locales

Este paquete fue rehecho usando:

- Los 36 repos clonados en `repositorios-referencia-super-skill/`.
- Los documentos `repositorios_skills_android_kotlin_firebase.docx` y `repositorios_skills_android_kotlin_firebase_busqueda_ampliada.docx`.
- El mapa `FUENTES_LOCALES.md`, que conecta cada subskill con sus repos de referencia.

Para auditar exactamente que commit se uso, revisa:

```text
repositorios-referencia-super-skill/REPOS_INSTALADOS.md
repositorios-referencia-super-skill/AUDITORIA_REPOS.md
```

## Para quien sirve

- Desarrolladores Android que usan Claude Code, Codex, Cursor, Gemini CLI, Windsurf u OpenCode.
- Equipos que quieren reglas consistentes de arquitectura, seguridad, testing y release.
- Proyectos Android con Kotlin, Compose, Firebase, Room, DataStore, Retrofit/Ktor y CI/CD.

## Instalacion local

Copiar el paquete completo:

```bash
cp -R super-android-kotlin-firebase-skill ~/.codex/skills/
cp -R super-android-kotlin-firebase-skill ~/.claude/skills/
```

Para un proyecto Android, tambien puedes copiar `AGENTS.md` a la raiz del repo:

```bash
cp super-android-kotlin-firebase-skill/AGENTS.md /ruta/a/tu/app/AGENTS.md
```

## Uso con Claude Code

Instala la carpeta en `~/.claude/skills/` y pide:

```text
Usa $super-android-kotlin-firebase para revisar este proyecto Android.
```

## Uso con Codex

Instala la carpeta en `~/.codex/skills/` y pide:

```text
Use $super-android-kotlin-firebase to build this Android feature with Compose, Firebase and tests.
```

## Uso con Cursor, Gemini CLI, Windsurf u OpenCode

Si tu herramienta soporta Agent Skills, importa la carpeta. Si no, pega `SKILL.md` como regla maestra y carga subskills/checklists segun la tarea.

## Uso con Gemini en Android Studio

Gemini en Android Studio espera skills en `~/.agents/skills`.

```bash
mkdir -p ~/.agents/skills
cp -R super-android-kotlin-firebase-skill ~/.agents/skills/
```

Luego pide:

```text
Usa $super-android-kotlin-firebase para revisar este proyecto Android.
```

## Uso con Gemini CLI

Si tu version de Gemini CLI lista skills con `gemini skills list`, copia esta carpeta a un directorio de skills compatible o usa la copia instalada en `~/.agents/skills`.

Tambien puedes usar el archivo `GEMINI.md` incluido en este paquete como instruccion de proyecto:

```bash
cp super-android-kotlin-firebase-skill/GEMINI.md /ruta/a/tu/app/GEMINI.md
```

Para Firebase especifico, la ruta oficial recomendada por Firebase es instalar su extension:

```bash
gemini extensions install https://github.com/firebase/agent-skills
```

Esta super skill complementa esa extension con arquitectura Android, Compose, testing, seguridad y release.

## Uso con Antigravity

Antigravity usa configuracion bajo `~/.gemini/antigravity/`. Para skills:

```bash
mkdir -p ~/.gemini/antigravity/skills
cp -R super-android-kotlin-firebase-skill ~/.gemini/antigravity/skills/
```

## Uso con npx skills

Este paquete local no esta publicado. Si lo publicas en GitHub, una instalacion podria verse asi:

```bash
npx skills add usuario/super-android-kotlin-firebase-skill -g -a codex -y
```

## Estructura

```text
super-android-kotlin-firebase-skill/
  SKILL.md
  skills/*/SKILL.md
  checklists/*.md
  templates/*.md
  examples/*.md
  AGENTS.md
  README.md
  LICENSE
  CHANGELOG.md
```

## Ejemplos de prompts

- `Crea una app Android Kotlin con Jetpack Compose, arquitectura limpia, Room, Firebase Auth y Firestore.`
- `Agrega una pantalla de presupuesto semanal con Compose y ViewModel.`
- `Analiza este proyecto Android y dime problemas de arquitectura, seguridad y testing.`
- `Revisa este error de Gradle/Compose/Firebase y dame solucion paso a paso.`
- `Detecta recomposiciones innecesarias y mejora rendimiento.`
- `Genera pruebas unitarias y Compose UI tests para esta feature.`

## Advertencias de seguridad

- No pegues service accounts, keystores, tokens privados ni secretos en prompts.
- No uses reglas Firebase abiertas en produccion.
- No guardes credenciales bancarias ni datos sensibles sin threat model.
- Revisa scripts de skills comunitarias antes de ejecutarlos.

## Fuentes y atribuciones

Esta super skill esta inspirada en buenas practicas publicas y documentacion de:

- `android/skills`
- `firebase/agent-skills`
- `google/skills`
- `Kotlin/kotlin-agent-skills`
- `android/nowinandroid`
- `android/architecture-samples`
- `android/compose-samples`
- `firebase/quickstart-android`
- `auth0/agent-skills`, `RevenueCat/play-billing-skills`, `GetStream/agent-skills`
- `skydoves/android-testing-skills`, `skydoves/compose-performance-skills`, `aldefy/compose-skill`
- repos comunitarios de Compose, testing, performance y arquitectura Android

El contenido de este paquete esta resumido, reorganizado y adaptado. No copia textualmente contenido protegido de terceros.
