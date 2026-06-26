---
name: gradle-build
description: "Gradle/Build Android: version catalogs, Gradle Kotlin DSL, AGP, Kotlin plugin, Firebase BoM, convention plugins, modularizacion y build variants."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/android__skills/build`
- `repositorios-referencia-super-skill/Kotlin__kotlin-agent-skills/skills/kotlin-tooling-agp9-migration`
- `repositorios-referencia-super-skill/android__nowinandroid/build-logic`

Mantener builds Android reproducibles, compatibles y faciles de escalar.

# Cuando usar

- Gradle sync.
- Actualizar dependencias.
- Version catalogs.
- Convention plugins.
- Build variants.
- Firebase BoM.

# Entradas esperadas

- Archivos Gradle.
- Versiones actuales.
- Error sync/build.
- Modulos.
- Plugins.
- CI tasks.

# Reglas obligatorias

- Revisar compatibilidad antes de actualizar.
- No duplicar versiones con BoM.
- Mantener Kotlin DSL consistente.
- No romper variants/signing.
- Usar convention plugins si el repo los usa.

# Flujo recomendado

1. Inspeccionar settings/build files.
2. Identificar compatibilidad.
3. Cambiar minimo.
4. Sync/build.
5. Documentar impacto.

# Errores comunes a evitar

- Actualizar AGP/Kotlin a ciegas.
- Mezclar Groovy/Kotlin DSL sin razon.
- Dependencias duplicadas.
- Secrets en Gradle.

# Checklist

- Versiones coherentes.
- BoM correcto.
- Variants preservados.
- Build probado.
- CI considerado.

# Ejemplo de uso

Usuario:

```text
Arregla este error de Gradle sync.
```

Respuesta esperada:

```text
Revisare plugins/versiones, aplicare cambio minimo y dare comando de verificacion.
```
