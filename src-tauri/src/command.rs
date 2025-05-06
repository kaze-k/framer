use tauri::{AppHandle, Manager, Url};

#[tauri::command]
pub fn navigate(app: AppHandle, label: String, url: Url) -> Result<(), String> {
  let webview = app.get_webview(&label).ok_or("webview not found")?;
  webview.navigate(url).map_err(|e| e.to_string())?;
  Ok(())
}