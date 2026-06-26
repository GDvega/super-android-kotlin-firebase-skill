---
name: firebase-messaging
description: "Firebase Cloud Messaging: tokens, notifications, data messages, permisos Android 13+, background handling y casos de prueba."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/firebase__quickstart-android/messaging`
- `repositorios-referencia-super-skill/firebase__agent-skills`

Integrar notificaciones push respetando permisos, estados de app y privacidad.

# Cuando usar

- FCM.
- Tokens.
- Notificaciones.
- Data messages.
- Android 13+ POST_NOTIFICATIONS.
- Background handling.

# Entradas esperadas

- Tipo de mensaje.
- Target users/topics.
- Permisos.
- Estados foreground/background.
- Backend/functions.

# Reglas obligatorias

- Pedir permiso contextual.
- No enviar datos sensibles en payload.
- Rotar/actualizar tokens.
- Manejar foreground/background.
- Probar casos reales.

# Flujo recomendado

1. Definir payload.
2. Configurar token handling.
3. Agregar permission flow.
4. Implementar notification display.
5. Probar foreground/background.

# Errores comunes a evitar

- Mandar PHI/secretos en payload.
- Ignorar permiso Android 13.
- Asumir token eterno.
- Duplicar notificaciones.

# Checklist

- Permiso manejado.
- Token actualizado.
- Payload seguro.
- Estados probados.
- Fallback definido.

# Ejemplo de uso

Usuario:

```text
Agrega recordatorios push con FCM.
```

Respuesta esperada:

```text
Revisare permisos, token lifecycle, payload seguro y pruebas de foreground/background.
```
