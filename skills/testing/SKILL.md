---
name: testing
description: "Testing Android: unit tests, fake repositories, coroutine tests, Flow tests, Compose UI tests, instrumented tests y Firebase emulator tests."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/skydoves__android-testing-skills`
- `repositorios-referencia-super-skill/android__skills/testing`
- `repositorios-referencia-super-skill/android__architecture-samples`
- `repositorios-referencia-super-skill/firebase__agent-skills`

Crear pruebas con alto valor y baja fragilidad para apps Android reales.

# Cuando usar

- Generar tests.
- Coroutines/Flow tests.
- ViewModel tests.
- Compose UI tests.
- Firebase emulator.
- Instrumented tests.

# Entradas esperadas

- Codigo bajo prueba.
- Frameworks test existentes.
- Gradle tasks.
- Casos de negocio.
- Fakes disponibles.

# Reglas obligatorias

- Testear logica antes que UI.
- Usar virtual time.
- Fakes sobre mocks cuando ayuden.
- No usar sleeps.
- Cubrir error/offline/permission denied.

# Flujo recomendado

1. Identificar comportamiento.
2. Elegir nivel de test.
3. Crear fakes.
4. Escribir assertions de estado.
5. Ejecutar tarea Gradle.

# Errores comunes a evitar

- Tests solo happy path.
- Thread.sleep.
- Mocks excesivos.
- UI tests para logica pura.
- No probar rules.

# Checklist

- Unit tests.
- ViewModel state.
- Flow/coroutine controlado.
- Compose critico.
- Emulator si Firebase.

# Ejemplo de uso

Usuario:

```text
Genera pruebas unitarias y Compose UI tests para esta feature.
```

Respuesta esperada:

```text
Priorizare domain/ViewModel, luego Compose UI del flujo critico y comandos Gradle.
```
