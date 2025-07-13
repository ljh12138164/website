use crate::entities::markdown::Entity as MarkdownList;
use sea_orm::{
    sea_query::{self, Alias, Table},
    ConnectionTrait, Database, DbConn, DbErr,
};
use std::path::PathBuf;

// 初始化数据库
pub async fn db_init() -> Result<DbConn, DbErr> {
    // 使用相对路径"./sqlite.sqlite"
    let db_path = PathBuf::from("./sqlite.sqlite");

    // 打印数据库路径以便调试
    println!("Database path: {}", db_path.display());

    // 检查文件是否存在
    if !db_path.exists() {
        println!("数据库文件不存在：{}", db_path.display());
        println!("将创建新的数据库文件");
    }

    let db_url = format!("sqlite:{}", db_path.to_string_lossy());
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
