---
name: play-store-release
description: "Publicacion Play Store: signing, release build, ProGuard/R8, App Bundle, Play Console, privacy policy, Data Safety y testing tracks."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/android__skills/play`
- `repositorios-referencia-super-skill/RevenueCat__play-billing-skills`
- `repositorios-referencia-super-skill/android__nowinandroid`

Preparar una app Android para release sin descuidar privacidad, signing ni R8.

# Cuando usar

- Release build.
- AAB.
- Signing.
- R8/ProGuard.
- Play Console.
- Data Safety.
- Testing tracks.

# Entradas esperadas

- Build variants.
- Signing config.
- Permisos.
- SDKs.
- Crashlytics.
- Privacy policy.
- Data collected.

# Reglas obligatorias

- No commitear keystores/passwords.
- Probar release build.
- Revisar R8 rules.
- Completar Data Safety honestamente.
- Usar tracks antes de produccion.

# Flujo recomendado

1. Auditar config release.
2. Generar bundle.
3. Probar minified build.
4. Revisar privacidad/permisos.
5. Preparar checklist Play.

# Errores comunes a evitar

- Solo probar debug.
- Desactivar R8 por miedo.
- Ignorar Data Safety.
- Guardar signing secrets en repo.

# Checklist

- AAB genera.
- Release probado.
- R8 revisado.
- Privacy/Data Safety.
- Track definido.

# Ejemplo de uso

Usuario:

```text
Prepara mi app para publicar en Play Store.
```

Respuesta esperada:

```text
Revisare signing, release build, R8, permisos, privacidad y comandos.
```
