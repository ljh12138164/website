use crate::entities::markdown::Entity as MarkdownList;
use sea_orm::{
    sea_query::{self, Alias, Table},
    ConnectionTrait, Database, DbConn, DbErr,
};
use tauri::{AppHandle, Manager};

// 初始化数据库
pub async fn db_init(app_handle: &AppHandle) -> Result<DbConn, DbErr> {
    let db_path = app_handle
        .path()
        // 获取数据库文件路径
        .resolve("sqlite.sqlite", tauri::path::BaseDirectory::AppLocalData)
        .unwrap();

    let db_url = format!("sqlite:{}", db_path.to_str().unwrap());
    let db = Database::connect(&db_url).await?;

    let create_table = Table::create()
        .table(MarkdownList)
        .if_not_exists()
        .col(
            sea_query::ColumnDef::new(Alias::new("id"))
                .integer()
                .not_null()
                .auto_increment()
                .primary_key(),
        )
        .col(sea_query::ColumnDef::new(Alias::new("name")).string())
        .col(sea_query::ColumnDef::new(Alias::new("content")).string())
        .col(
            sea_query::ColumnDef::new(Alias::new("created_at"))
                .big_integer()
                .not_null(),
        )
        .col(
            sea_query::ColumnDef::new(Alias::new("updated_at"))
                .big_integer()
                .not_null(),
        )
        .to_owned();

    let builder = db.get_database_backend();
    db.execute(builder.build(&create_table)).await?;

    Ok(db)
}
