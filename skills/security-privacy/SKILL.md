---
name: security-privacy
description: "Seguridad y privacidad: secrets, API keys, Firebase rules, cifrado local, biometrics, minimo privilegio, local-first y datos sensibles."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/android__skills/security`
- `repositorios-referencia-super-skill/firebase__agent-skills/skills/firebase-security-rules-auditor`
- `repositorios-referencia-super-skill/addyosmani__web-quality-skills`

Detectar y reducir riesgos reales en apps Android/Firebase.

# Cuando usar

- Revisar seguridad.
- Datos sensibles.
- Firebase rules para Firestore, Realtime Database y Storage.
- Secrets.
- Biometrics.
- Local encryption.
- Privacy review.

# Entradas esperadas

- Tipos de datos.
- Amenazas.
- Rules.
- Storage.
- Logs.
- Secrets.
- Politica privacidad.

# Reglas obligatorias

- No exfiltrar secretos.
- No reglas abiertas.
- Minimo privilegio.
- No loguear PII.
- Cifrado con threat model.
- Biometrics como UX, no unica seguridad.

# Flujo recomendado

1. Clasificar datos.
2. Buscar secretos/logs.
3. Revisar rules.
4. Proponer mitigaciones.
5. Agregar tests/auditoria.

# Errores comunes a evitar

- Guardar tokens privados en cliente.
- Ocultar bugs con reglas abiertas.
- Confiar solo en UI.
- Copiar secrets a prompts.

# Checklist

- Secrets protegidos.
- Rules auditadas.
- Logs limpios.
- Permisos minimos.
- Riesgos documentados.

# Ejemplo de uso

Usuario:

```text
Audita seguridad de Firestore y datos sensibles.
```

Respuesta esperada:

```text
Revisare rules, paths, roles, logs y dare allow/deny tests.
```
