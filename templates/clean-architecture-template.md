# Clean Architecture Template

```text
presentation -> domain <- data
```

Reglas:

- `presentation` conoce `domain`, no SDKs remotos directamente.
- `domain` no conoce Android, Firebase, Room ni Retrofit.
- `data` implementa contratos y mapea DTO/entity/domain.

Archivos tipicos:

```text
presentation/FeatureViewModel.kt
presentation/FeatureUiState.kt
domain/FeatureRepository.kt
domain/GetFeatureUseCase.kt
data/FeatureRepositoryImpl.kt
data/local/FeatureEntity.kt
data/remote/FeatureDto.kt
```
