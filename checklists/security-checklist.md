# Security Checklist

- No hay service accounts, private keys, tokens, keystores o passwords en repo.
- API keys publicas estan restringidas cuando aplique.
- Firebase rules aplican minimo privilegio.
- Cliente no decide autorizacion sensible por si solo.
- Logs no contienen PII, tokens, emails sensibles o datos medicos/financieros.
- Storage valida path, auth, tamano y content type cuando sea posible.
- Datos locales sensibles tienen threat model.
- Permisos Android son minimos y explicados.
- Dependencias nuevas fueron justificadas.
- Operaciones destructivas requieren confirmacion o undo.

- `firestore.rules`, `database.rules.json` y `storage.rules` fueron revisados cuando existen.
- Las reglas tienen casos allow/deny para owner, rol incorrecto y usuario anonimo.
