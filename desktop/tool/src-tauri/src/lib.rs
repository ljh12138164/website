mod db;
mod entities;
mod server;
use std::env;
use tauri::{async_runtime, Emitter, Manager};

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn open_file(path: String) -> Result<(), String> {
    println!("Opening file: {}", path);
    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_store::Builder::new().build())
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            // 初始化数据库
            match async_runtime::block_on(db::db_init()) {
                Ok(db_conn) => {
                    println!("数据库连接成功");
                    app.manage(db_conn);
                }
                Err(err) => {
                    eprintln!("数据库连接错误: {}", err);
                    // 可以选择退出应用或者继续但不提供数据库功能
                    if let Some(window) = app.get_webview_window("main") {
                        let _ = window.emit("db-error", format!("数据库连接失败: {}", err));
                    }
                }
            }

            // 菜单事件监听
            // 启动参数文件打开
            let args: Vec<String> = env::args().collect();
            if args.len() > 1 {
                let file_path = &args[1];
                if let Some(window) = app.handle().get_webview_window("main") {
                    let _ = window.emit("file-open", file_path.clone());
                }
            }
            Ok(())
        })
        /*
        .on_window_event(|window, event| {
            if let WindowEvent::FileDrop(tauri::FileDropEvent::Dropped(paths)) = event {
                if !paths.is_empty() {
                    if let Some(path) = paths.get(0) {
                        let _ = window.emit("file-open", path.to_string_lossy().to_string());
                    }
                }
            }
        })
        */
        .invoke_handler(tauri::generate_handler![
            greet,
            open_file,
            server::commands::get_markdown_list,
            server::commands::create_markdown,
            server::commands::update_markdown,
            server::commands::delete_markdown,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
