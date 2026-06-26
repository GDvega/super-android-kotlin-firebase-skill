# Repository Template

```kotlin
interface ItemRepository {
    fun observeItems(): Flow<List<Item>>
    suspend fun refresh(): Result<Unit>
}

class OfflineFirstItemRepository(
    private val local: ItemLocalDataSource,
    private val remote: ItemRemoteDataSource,
) : ItemRepository {
    override fun observeItems(): Flow<List<Item>> =
        local.observeItems().map { entities -> entities.map { it.toDomain() } }

    override suspend fun refresh(): Result<Unit> = runCatching {
        val remoteItems = remote.fetchItems()
        local.upsert(remoteItems.map { it.toEntity() })
    }
}
```
