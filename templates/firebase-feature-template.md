# Firebase Feature Template

Componentes:

```text
domain/Feature.kt
domain/FeatureRepository.kt
data/firebase/FeatureDocument.kt
data/firebase/FirebaseFeatureDataSource.kt
data/FeatureRepositoryImpl.kt
firestore.rules
test/rules/feature.rules.test.*
```

Checklist:

- Modelo define owner/role.
- Repository oculta SDK.
- Rules validan auth, path, campos y tipos.
- Tests cubren owner allowed, wrong user denied, invalid field denied.
- UI maneja permission denied y offline.

## Variante Storage/Realtime Database

- Para Storage, definir path, metadata, content type, max size y reglas por owner/rol.
- Para Realtime Database, definir paths por access pattern y reglas con `.validate`.
- Probar allow/deny en Emulator Suite antes de presentar como listo para produccion.
