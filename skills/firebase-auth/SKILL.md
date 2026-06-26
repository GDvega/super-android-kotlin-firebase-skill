---
name: firebase-auth
description: "Firebase Auth: email/password, Google Sign-In, anonymous auth, perfil de usuario, auth state, errores y seguridad."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/firebase__agent-skills/skills/firebase-auth-basics`
- `repositorios-referencia-super-skill/firebase__quickstart-android/auth`
- `repositorios-referencia-super-skill/auth0__agent-skills`

Implementar autenticacion sin filtrar detalles de seguridad ni acoplar UI al SDK.

# Cuando usar

- Login/signup.
- Google Sign-In.
- Auth state.
- Perfil de usuario.
- Errores Auth.

# Entradas esperadas

- Metodos requeridos.
- Flujo UX.
- Modelo user.
- Reglas de datos asociadas.
- Manejo de sesion.

# Reglas obligatorias

- No guardar passwords.
- No loguear tokens.
- Auth SDK detras de repository.
- Validar reglas por UID.
- Mensajes de error seguros.

# Flujo recomendado

1. Definir flujo.
2. Crear AuthRepository.
3. Exponer auth state.
4. Conectar ViewModel/UI.
5. Agregar tests/fakes.

# Errores comunes a evitar

- Llamar FirebaseAuth desde Composable.
- Confiar solo en UI para autorizacion.
- Mostrar errores internos crudos.
- Persistir tokens manualmente.

# Checklist

- Auth state observable.
- Errores manejados.
- Rules consideradas.
- Fakes para tests.
- UX de sesion clara.

# Ejemplo de uso

Usuario:

```text
Agrega login con Google y email/password.
```

Respuesta esperada:

```text
Creare repository, ViewModel, estados UI y notas de rules sin pedir secretos.
```
