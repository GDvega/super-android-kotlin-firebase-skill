---
name: local-data-room-datastore
description: "Datos locales: Room, DAO, entities, migrations, DataStore Preferences/Proto, cache local y sincronizacion."
---

# Proposito



Fuentes locales sugeridas:
- `repositorios-referencia-super-skill/android__architecture-samples`
- `repositorios-referencia-super-skill/android__architecture-components-samples`
- `repositorios-referencia-super-skill/android__nowinandroid/core/database`

Persistir datos localmente con migraciones, Flow y estrategia offline-first.

# Cuando usar

- Room database.
- DAO.
- Migrations.
- DataStore.
- Cache local.
- Sync local/remoto.

# Entradas esperadas

- Modelo de datos.
- Queries locales.
- Version DB.
- Preferencias.
- Sync rules.
- Tests.

# Reglas obligatorias

- No hacer DB en main thread.
- Migraciones explicitas.
- DAO devuelve Flow cuando se observa.
- DataStore para preferencias.
- Repository coordina local/remoto.

# Flujo recomendado

1. Definir entity/dao.
2. Crear migration.
3. Crear repository.
4. Agregar tests Room/DataStore.
5. Verificar sync.

# Errores comunes a evitar

- Borrar DB para migrar.
- Guardar datos relacionales en DataStore.
- Exponer entity a UI sin razon.
- Ignorar conflictos sync.

# Checklist

- Entity/DAO claros.
- Migration segura.
- Flow correcto.
- Repository testeable.
- Offline definido.

# Ejemplo de uso

Usuario:

```text
Agrega cache offline con Room y sincronizacion Firestore.
```

Respuesta esperada:

```text
Separare entity/domain, DAO, repository, sync states y pruebas.
```
