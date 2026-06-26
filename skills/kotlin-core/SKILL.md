---
name: kotlin-core
description: "Buenas practicas Kotlin para null safety, data/sealed classes, coroutines, Flow, Result, extension functions y manejo de errores."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/Kotlin__kotlin-agent-skills`
- `repositorios-referencia-super-skill/JetBrains__skills`

Evitar Kotlin fragil, APIs inventadas y codigo asincrono inseguro.

# Cuando usar

- Refactor Kotlin.
- Errores de coroutines/Flow.
- Modelar estados o resultados.
- Mejorar manejo de errores.

# Entradas esperadas

- Version Kotlin.
- Codigo actual.
- Dependencias coroutines.
- Necesidad de estado, errores o streams.

# Reglas obligatorias

- No usar GlobalScope.
- No tragar CancellationException.
- Usar nullability explicita.
- Preferir sealed types para estados cerrados.
- Mantener extension functions enfocadas.

# Flujo recomendado

1. Leer codigo y version.
2. Identificar estados/errores.
3. Elegir sealed/Result/domain error.
4. Actualizar tests.
5. Verificar compilacion.

# Errores comunes a evitar

- Usar `!!` por comodidad.
- Lanzar coroutines sin scope.
- Mezclar errores UI con errores domain.
- Crear extensions magicas.

# Checklist

- Null safety clara.
- Scopes correctos.
- Flow testeable.
- Errores modelados.
- Tests sugeridos.

# Ejemplo de uso

Usuario:

```text
Convierte este callback a Flow seguro.
```

Respuesta esperada:

```text
Identificare scope, cancelacion, backpressure y pruebas de Flow antes de cambiar codigo.
```
