---
name: debugging
description: "Debugging Android: build errors, Gradle sync, Logcat, adb, crashes, ANR, Firebase Crashlytics y reproducciones minimas."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/skydoves__android-testing-skills/adb`
- `repositorios-referencia-super-skill/android__skills/devtools`
- `repositorios-referencia-super-skill/firebase__agent-skills/skills/firebase-crashlytics`

Diagnosticar errores con evidencia y cambios minimos.

# Cuando usar

- Error Gradle.
- Crash.
- ANR.
- Logcat.
- adb.
- Crashlytics.
- Reproduccion minima.

# Entradas esperadas

- Stacktrace completo.
- Comando fallido.
- Versiones.
- Archivo relacionado.
- Pasos de reproduccion.

# Reglas obligatorias

- No adivinar sin leer error.
- Cambiar una causa a la vez.
- No borrar caches como primera opcion permanente.
- Preservar evidencia.
- No ignorar warnings criticos.

# Flujo recomendado

1. Leer error.
2. Identificar primera causa.
3. Ubicar archivo.
4. Aplicar fix minimo.
5. Reejecutar comando.

# Errores comunes a evitar

- Soluciones shotgun.
- Actualizar todo sin compatibilidad.
- Borrar archivos sin confirmar.
- Silenciar errores.

# Checklist

- Causa probable.
- Fix minimo.
- Comando para verificar.
- Riesgo de version.
- Reproduccion documentada.

# Ejemplo de uso

Usuario:

```text
Revisa este error de Gradle/Compose/Firebase y dame solucion paso a paso.
```

Respuesta esperada:

```text
Separare causa raiz de ruido, dare fix minimo y comando exacto.
```
