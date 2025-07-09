use crate::entities::markdown::{ActiveModel, Entity as MarkdownList};
use sea_orm::{ActiveModelTrait, DbConn, EntityTrait, Set};
use tauri::State;

// 获取markdown列表
#[tauri::command]
pub async fn get_markdown_list(
    db: State<'_, DbConn>,
) -> Result<Vec<crate::entities::markdown::MarkdownItem>, String> {
    MarkdownList::find()
        .into_model::<crate::entities::markdown::MarkdownItem>()
        .all(db.inner())
        .await
        .map_err(|e| e.to_string())
}

// 创建markdown
#[tauri::command]
pub async fn create_markdown(
    db: State<'_, DbConn>,
    name: String,
    content: String,
) -> Result<crate::entities::markdown::MarkdownItem, String> {
    let now = chrono::Utc::now().timestamp();
    let new_markdown = ActiveModel {
        name: Set(name),
        content: Set(content),
        created_at: Set(now),
        updated_at: Set(now),
        ..Default::default()
    };

    let result = new_markdown
        .insert(db.inner())
        .await
        .map_err(|e| e.to_string())?;

    Ok(crate::entities::markdown::MarkdownItem {
        id: result.id,
        name: result.name,
        content: result.content,
        created_at: result.created_at,
        updated_at: result.updated_at,
    })
}

// 更新markdown
#[tauri::command]
pub async fn update_markdown(
    db: State<'_, DbConn>,
    id: i64,
    name: String,
    content: String,
) -> Result<crate::entities::markdown::MarkdownItem, String> {
    let markdown = MarkdownList::find_by_id(id)
        .one(db.inner())
        .await
        .map_err(|e| e.to_string())?
        .ok_or_else(|| "Markdown not found".to_string())?;

    let mut markdown: ActiveModel = markdown.into();
    markdown.name = Set(name);
    markdown.content = Set(content);
    markdown.updated_at = Set(chrono::Utc::now().timestamp());

    let result = markdown
        .update(db.inner())
        .await
        .map_err(|e| e.to_string())?;

    Ok(crate::entities::markdown::MarkdownItem {
        id: result.id,
        name: result.name,
        content: result.content,
        created_at: result.created_at,
        updated_at: result.updated_at,
    })
}

// 删除markdown
#[tauri::command]
pub async fn delete_markdown(db: State<'_, DbConn>, id: i64) -> Result<(), String> {
    let markdown = MarkdownList::find_by_id(id)
        .one(db.inner())
        .await
        .map_err(|e| e.to_string())?
        .ok_or_else(|| "Markdown not found".to_string())?;

    let markdown: ActiveModel = markdown.into();
    markdown
        .delete(db.inner())
        .await
        .map_err(|e| e.to_string())?;

    Ok(())
}
