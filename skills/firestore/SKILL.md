---
name: firestore
description: "Cloud Firestore y Realtime Database: modelado, colecciones/documentos, paths, queries, indexes, transactions, batch writes, offline persistence, security rules y costos."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/firebase__agent-skills/skills/firebase-firestore`
- `repositorios-referencia-super-skill/firebase__agent-skills/skills/firebase-security-rules-auditor`
- `repositorios-referencia-super-skill/firebase__quickstart-android/firestore`
- `repositorios-referencia-super-skill/firebase__quickstart-android/database`

Disenar Firestore con acceso, seguridad, queries y costos en mente.

# Cuando usar

- Crear colecciones Firestore o paths Realtime Database.
- Agregar queries.
- Firestore/Realtime Database Security Rules.
- Transactions/batches.
- Offline sync.
- Costos.

# Entradas esperadas

- Entidades.
- Lectores/escritores.
- Queries esperadas.
- Roles.
- Volumen aproximado.
- Rules actuales.

# Reglas obligatorias

- Disenar reglas junto al modelo.
- No confiar en UID cliente.
- Validar campos/tipos.
- Evitar queries caras.
- Usar transactions para invariantes.

# Flujo recomendado

1. Listar access patterns.
2. Proponer paths.
3. Definir indexes.
4. Escribir repository.
5. Escribir rules/tests.

# Errores comunes a evitar

- Subcolecciones sin razon.
- Rules abiertas.
- Consultas sin indice.
- Denormalizar sin documentar.
- Ignorar costos de listeners.

# Checklist

- Access patterns claros.
- Rules least privilege.
- Indexes identificados.
- Offline definido.
- Costos considerados.

# Ejemplo de uso

Usuario:

```text
Disena Firestore para pacientes y cuidadores.
```

Respuesta esperada:

```text
Propondre modelo, roles, rules, queries, indices y pruebas allow/deny.
```
