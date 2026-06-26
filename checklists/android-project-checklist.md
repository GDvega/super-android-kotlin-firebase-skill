# Android Project Checklist

- `settings.gradle(.kts)` lista modulos necesarios y nombres coherentes.
- Gradle usa Kotlin DSL o estilo consistente.
- `compileSdk`, `minSdk`, `targetSdk` estan definidos y justificados.
- Manifest no declara permisos innecesarios.
- Permisos runtime tienen flujo UX y fallback.
- App maneja lifecycle, process death y configuracion cuando aplica.
- Edge-to-edge/insets estan resueltos.
- Recursos usan tema y qualifiers cuando hace falta.
- No hay secretos en repo, Gradle, Manifest o resources.
- `./gradlew assembleDebug test lint` o equivalentes estan documentados.
