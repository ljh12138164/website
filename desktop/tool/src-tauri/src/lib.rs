mod db;
mod entities;
mod server;

use tauri::{async_runtime, Manager};

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_store::Builder::new().build())
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            let handle = app.handle().clone();
            app.manage(async_runtime::block_on(db::db_init(&handle)).unwrap());
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            greet,
            server::commands::get_markdown_list,
            server::commands::create_markdown,
            server::commands::update_markdown,
            server::commands::delete_markdown,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
