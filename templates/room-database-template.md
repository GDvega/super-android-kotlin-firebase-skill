# Room Database Template

```kotlin
@Entity(tableName = "items")
data class ItemEntity(
    @PrimaryKey val id: String,
    val title: String,
    val updatedAt: Long,
)

@Dao
interface ItemDao {
    @Query("SELECT * FROM items ORDER BY updatedAt DESC")
    fun observeItems(): Flow<List<ItemEntity>>
}
```

Incluye:

- Entity con indices si aplica.
- DAO con Flow para observacion.
- Database con version.
- Migration real, no destructive migration en produccion.
- Repository que mapea entity/domain.
