---
name: android-architecture
description: "Arquitectura Android: Clean Architecture, MVVM, MVI, multimodulo, domain/data/presentation, repositories, use cases, mapping y offline-first."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/android__nowinandroid`
- `repositorios-referencia-super-skill/android__architecture-samples`
- `repositorios-referencia-super-skill/dpconde__claude-android-skill`
- `repositorios-referencia-super-skill/Drjacky__claude-android-ninja`
- `repositorios-referencia-super-skill/AliAsadi__Android-Clean-Architecture`

Disenar o revisar estructura profesional para apps Android reales.

# Cuando usar

- Crear arquitectura.
- Refactor capas.
- Separar modulos.
- Implementar offline-first.
- Revisar repositories/use cases.

# Entradas esperadas

- Arbol de modulos.
- Dependencias.
- Flujos de datos.
- Fuentes local/remota.
- Tests existentes.

# Reglas obligatorias

- UI no conoce SDKs remotos.
- Domain no depende de Android/Firebase.
- Repositories esconden data sources.
- Mappings claros.
- Cambios pequenos.

# Flujo recomendado

1. Mapear arquitectura actual.
2. Detectar acoplamientos.
3. Proponer frontera minima.
4. Refactor con tests.
5. Verificar build.

# Errores comunes a evitar

- Crear capas vacias.
- Cambios gigantes.
- Usar use cases triviales por dogma.
- Romper API publica sin plan.

# Checklist

- Capas claras.
- Dependencias correctas.
- Offline-first si aplica.
- Tests alrededor de logica.
- Plan incremental.

# Ejemplo de uso

Usuario:

```text
Analiza mi proyecto Android y dime que problemas de arquitectura tiene.
```

Respuesta esperada:

```text
Dare hallazgos priorizados, riesgos, archivos y un plan de refactor gradual.
```
