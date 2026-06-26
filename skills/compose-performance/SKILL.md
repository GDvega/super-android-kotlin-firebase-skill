---
name: compose-performance
description: "Rendimiento Compose: recomposition, stability, LazyColumn, derivedStateOf, remember, keys, baseline profiles, tracing y medicion."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/skydoves__compose-performance-skills`
- `repositorios-referencia-super-skill/android__skills/profilers`
- `repositorios-referencia-super-skill/android__nowinandroid/benchmarks`

Encontrar y corregir problemas medibles de performance Compose sin optimizar a ciegas.

# Cuando usar

- Pantallas lentas.
- Scroll con jank.
- Recomposiciones excesivas.
- Listas grandes.
- Baseline profiles.

# Entradas esperadas

- Pantalla afectada.
- Datos de medicion si existen.
- Lazy lists.
- Estado y parametros.
- Tareas benchmark disponibles.

# Reglas obligatorias

- Medir antes de refactor grande.
- Usar keys estables.
- Evitar trabajo pesado en composables.
- No abusar de @Stable.
- Probar cambios.

# Flujo recomendado

1. Reproducir problema.
2. Revisar recomposition/stability.
3. Corregir causas concretas.
4. Ejecutar pruebas/benchmarks.
5. Documentar resultado.

# Errores comunes a evitar

- Agregar remember en todas partes.
- Anotar estabilidad sin contrato.
- Ignorar imagenes grandes.
- Optimizar sin evidencia.

# Checklist

- Keys estables.
- Estado minimo.
- Trabajo pesado fuera de UI.
- Medicion propuesta.
- Riesgos anotados.

# Ejemplo de uso

Usuario:

```text
Detecta recomposiciones innecesarias y mejora rendimiento.
```

Respuesta esperada:

```text
Revisare estado, parametros, lazy lists y propondre cambios medibles con comandos.
```
