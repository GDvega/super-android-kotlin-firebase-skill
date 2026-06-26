---
name: firebase-crashlytics-analytics
description: "Crashlytics y Analytics: logs, non-fatal errors, eventos, user properties y privacidad."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/firebase__agent-skills/skills/firebase-crashlytics`
- `repositorios-referencia-super-skill/firebase__quickstart-android/crash`
- `repositorios-referencia-super-skill/firebase__quickstart-android/analytics`
- `repositorios-referencia-super-skill/firebase__quickstart-android/perf`

Observar app sin capturar datos sensibles ni crear telemetria ruidosa.

# Cuando usar

- Crashlytics.
- Eventos Analytics.
- Non-fatal errors.
- User properties.
- Privacidad.

# Entradas esperadas

- Eventos deseados.
- Errores criticos.
- Politica de privacidad.
- Datos sensibles.
- Build types.

# Reglas obligatorias

- No loguear datos sensibles.
- Eventos con nombres estables.
- User IDs anonimizados si aplica.
- Diferenciar debug/release.
- No usar Analytics para seguridad.

# Flujo recomendado

1. Definir eventos.
2. Agregar wrappers si conviene.
3. Registrar non-fatals utiles.
4. Verificar privacy.
5. Probar en debug/release.

# Errores comunes a evitar

- Mandar email/telefono/token.
- Eventos sin taxonomia.
- Logs excesivos.
- User property con dato sensible.

# Checklist

- Eventos documentados.
- No PII.
- Non-fatals utiles.
- Build types correctos.
- Opt-out considerado.

# Ejemplo de uso

Usuario:

```text
Agrega Crashlytics y eventos de Analytics para onboarding.
```

Respuesta esperada:

```text
Definire eventos minimos, privacidad, archivos y comandos de verificacion.
```
