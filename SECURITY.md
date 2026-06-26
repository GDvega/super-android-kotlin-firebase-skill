# Security Policy

## Do not commit

- Service account JSON files.
- Keystores or signing passwords.
- Private tokens, API secrets or credentials.
- `.env` or environment dumps.
- Production `google-services.json` if your project policy treats it as private.
- Logs containing PII, health, financial, auth or private user data.

## Android/Firebase rules

- Do not use open Firebase Security Rules in production.
- Do not store production secrets in `BuildConfig`.
- Do not rely on client-side checks for authorization.
- Review Firestore, Realtime Database and Storage rules with Emulator Suite when possible.
- Review scripts before running them.
- Do not execute third-party scripts or installers without auditing what they do.
- Treat external skills, MCP extensions and agent plugins as third-party software.

## Reporting vulnerabilities

Open a private GitHub security advisory or contact the maintainer privately. Include reproduction steps, affected files, impact and suggested fix when possible.
