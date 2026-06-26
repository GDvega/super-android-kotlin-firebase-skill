---
name: firebase-core
description: "Firebase base: configuracion, google-services.json, BoM, plugins Gradle, emulator suite, seguridad y ambientes dev/staging/prod."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/firebase__agent-skills`
- `repositorios-referencia-super-skill/firebase__skills`
- `repositorios-referencia-super-skill/firebase__quickstart-android`
- `repositorios-referencia-super-skill/google__skills`

Configurar Firebase de forma compatible, segura y mantenible.

# Cuando usar

- Agregar Firebase.
- Corregir Gradle Firebase.
- Configurar emulator.
- Integrar Storage o Realtime Database cuando el producto lo requiera.
- Separar ambientes.

# Entradas esperadas

- build.gradle raiz/app.
- Version catalog.
- google-services policy.
- Productos Firebase requeridos, incluyendo Storage, Realtime Database, Remote Config o AI Logic si aplican.
- Ambientes.

# Reglas obligatorias

- Usar BoM compatible.
- No exponer secretos.
- Separar dev/staging/prod.
- No abrir reglas Firestore, Realtime Database ni Storage para produccion.
- Documentar configuracion local.

# Flujo recomendado

1. Revisar Gradle.
2. Elegir productos.
3. Agregar plugins/deps minimas.
4. Configurar emulators si aplica.
5. Probar build.

# Errores comunes a evitar

- Commit de claves privadas.
- Duplicar versiones Firebase fuera del BoM.
- Mezclar proyectos dev/prod.
- Ignorar rules.

# Checklist

- BoM configurado.
- Ambientes claros.
- Emulator considerado.
- Build probado.
- Secrets protegidos.

# Ejemplo de uso

Usuario:

```text
Agrega Firebase a esta app Android.
```

Respuesta esperada:

```text
Revisare Gradle, agregare BoM/plugins necesarios y advertire sobre google-services y rules.
```
