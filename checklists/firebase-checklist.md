# Firebase Checklist

- Firebase BoM y plugins Gradle son compatibles.
- `google-services.json` sigue la politica del proyecto y no contiene secretos privados.
- Ambientes dev/staging/prod estan separados.
- Auth state no se consulta directamente desde UI reutilizable.
- Firestore/Storage rules existen y no estan abiertas.
- Rules validan auth, ownership, roles, campos y tipos.
- Queries necesarias tienen indices documentados.
- Emulator Suite se usa o se documenta por que no.
- Crashlytics/Analytics no reciben PII o datos sensibles.
- Costos de listeners, writes y storage fueron considerados.

- Realtime Database rules validan paths, auth, tipos y roles.
- Storage rules validan owner, path, content type y tamano.
- Remote Config no se usa para decisiones de seguridad.
