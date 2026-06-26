---
name: android-core
description: "Base Android para estructura de proyecto, Manifest, lifecycle, permisos, recursos, compatibilidad, edge-to-edge, Android Studio y debugging basico."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/android__skills`
- `repositorios-referencia-super-skill/android__architecture-components-samples`
- `repositorios-referencia-super-skill/android__ai-samples`

Guiar decisiones base de una app Android antes de entrar a Compose, Firebase o arquitectura avanzada.

# Cuando usar

- Crear o revisar un proyecto Android.
- Modificar Manifest, permisos, resources o lifecycle.
- Configurar edge-to-edge, compatibilidad o debugging basico.

# Entradas esperadas

- Estructura de modulos.
- Manifest y permisos existentes.
- minSdk/targetSdk/compileSdk.
- Errores de Android Studio, Logcat o adb.

# Reglas obligatorias

- Revisar Manifest antes de agregar permisos.
- Explicar permisos sensibles.
- Respetar lifecycle.
- No bloquear main thread.
- Usar APIs compatibles con minSdk.

# Flujo recomendado

1. Inspeccionar `settings.gradle`, build files y Manifest.
2. Identificar cambios minimos.
3. Aplicar cambio.
4. Probar build/debug.
5. Documentar permisos y riesgos.

# Errores comunes a evitar

- Agregar permisos sin justificar.
- Ignorar target SDK policy.
- Poner trabajo pesado en Activity.
- Tratar warnings de compatibilidad como ruido.

# Checklist

- Manifest consistente.
- Permisos minimos.
- Edge-to-edge probado.
- No hay trabajo bloqueante en UI.
- Comandos de prueba incluidos.

# Ejemplo de uso

Usuario:

```text
Revisa por que mi app no maneja bien permisos y edge-to-edge.
```

Respuesta esperada:

```text
Revisare Manifest, targetSdk, permisos runtime, insets y dare cambios concretos con comandos para probar.
```
