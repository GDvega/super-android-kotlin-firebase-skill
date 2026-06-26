---
name: code-review-refactor
description: "Revision y refactor Android: arquitectura, UI, seguridad, performance, refactor paso a paso y evitar cambios gigantes."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/android__skills`
- `repositorios-referencia-super-skill/affaan-m__everything-claude-code`
- `repositorios-referencia-super-skill/JetBrains__skills`
- `repositorios-referencia-super-skill/github__awesome-copilot`

Actuar como arquitecto senior revisando riesgos y proponiendo mejoras verificables.

# Cuando usar

- Code review.
- Refactor.
- Auditoria arquitectura.
- UI/security/performance review.
- Plan incremental.

# Entradas esperadas

- Diff o archivos.
- Objetivo.
- Tests actuales.
- Restricciones.
- Riesgo aceptable.

# Reglas obligatorias

- Findings primero.
- Priorizar severidad.
- No refactor cosmetico grande.
- Proteger comportamiento.
- Agregar tests antes de cambios riesgosos.

# Flujo recomendado

1. Inspeccionar codigo.
2. Listar hallazgos.
3. Elegir primer refactor seguro.
4. Aplicar cambios si se pidio.
5. Verificar.

# Errores comunes a evitar

- Cambios gigantes.
- Opiniones sin evidencia.
- Romper comportamiento.
- Ignorar tests.

# Checklist

- Hallazgos con archivos.
- Plan incremental.
- Tests.
- Riesgos.
- Comandos.

# Ejemplo de uso

Usuario:

```text
Analiza este proyecto Android y dime que problemas de arquitectura, seguridad y testing tiene.
```

Respuesta esperada:

```text
Dare hallazgos priorizados, evidencia, plan de refactor y comandos.
```
