---
name: dependency-injection
description: "Dependency Injection Android: Hilt, Koin, modulos, scopes, ViewModel injection y testing con DI."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/android__nowinandroid`
- `repositorios-referencia-super-skill/android__architecture-samples`
- `repositorios-referencia-super-skill/dpconde__claude-android-skill`

Configurar DI de forma simple, testeable y alineada con el proyecto.

# Cuando usar

- Agregar Hilt/Koin.
- Inyectar ViewModel/repository.
- Scopes.
- Testing con fakes.
- Modulos DI.

# Entradas esperadas

- Framework actual.
- Dependencias a inyectar.
- Scopes.
- Build setup.
- Tests.

# Reglas obligatorias

- No mezclar Hilt y Koin sin razon.
- Scopes claros.
- No inyectar Context innecesario.
- Fakes para tests.
- Evitar service locator manual accidental.

# Flujo recomendado

1. Detectar DI actual.
2. Agregar bindings minimos.
3. Conectar ViewModel.
4. Reemplazar en tests.
5. Verificar build.

# Errores comunes a evitar

- Agregar DI para todo.
- Singletons globales mutables.
- Dependencias circulares.
- Romper previews.

# Checklist

- Bindings minimos.
- Scopes correctos.
- ViewModel inyectado.
- Tests posibles.
- Previews no rotas.

# Ejemplo de uso

Usuario:

```text
Agrega Hilt para repositorios y ViewModels.
```

Respuesta esperada:

```text
Revisare setup, agregare modulos minimos y explicare tests con fakes.
```
