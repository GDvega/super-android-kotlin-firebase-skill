---
name: firebase-cloud-functions
description: "Cloud Functions para Firebase: callable functions, HTTP functions, triggers, validacion servidor, seguridad, despliegue y testing local."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/firebase__quickstart-android/functions`
- `repositorios-referencia-super-skill/firebase__agent-skills`
- `repositorios-referencia-super-skill/google__skills`

Mover logica confiable al servidor cuando el cliente o rules no bastan.

# Cuando usar

- Callable/HTTP function.
- Triggers Firestore/Auth.
- Validacion servidor.
- Operaciones privilegiadas.
- Testing local.

# Entradas esperadas

- Caso de uso.
- Datos de entrada.
- Auth/roles.
- Emulator config.
- Region/runtime.
- Errores esperados.

# Reglas obligatorias

- Validar input y auth.
- No confiar en cliente.
- No loguear secretos.
- Idempotencia cuando aplique.
- Probar local antes de deploy.

# Flujo recomendado

1. Decidir callable vs HTTP vs trigger.
2. Definir schema input.
3. Implementar validacion.
4. Agregar tests/emulator.
5. Documentar deploy.

# Errores comunes a evitar

- Usar function como bypass inseguro.
- Errores sin codigo.
- No controlar region/costos.
- Deploy sin probar.

# Checklist

- Auth validada.
- Input validado.
- Errores tipados.
- Emulator probado.
- Costos/riesgos anotados.

# Ejemplo de uso

Usuario:

```text
Crea una callable function para validar una invitacion.
```

Respuesta esperada:

```text
Definire contrato, validaciones, seguridad, tests locales y cliente Android.
```
