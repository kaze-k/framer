use tauri::{AppHandle, LogicalPosition, LogicalSize, Manager, Url};
use tauri::webview::WebviewBuilder;
use tauri::WebviewUrl;

#[tauri::command(async)]
pub async fn create_webview(app: AppHandle, label: String, url: String, width: f64, height: f64, x: f64, y: f64) -> Result<String, String> {
  let main_window = app.get_window("main").ok_or("main window does not exist.")?;

  if main_window.webviews().iter().any(|wv| wv.label() == label) {
    return Ok(label);
  }

  let webview = WebviewBuilder::new(
    &label,
    WebviewUrl::External(url.parse::<Url>().map_err(|e| e.to_string())?)
  );

  main_window
    .add_child(
      webview,
      LogicalPosition::new(x, y),
      LogicalSize::new(width, height)
    )
    .map_err(|e| e.to_string())?;

  Ok(label)
}

#[tauri::command]
pub fn navigate(app: AppHandle, label: String, url: Url) -> Result<bool, String> {
  let webview = app.get_webview(&label).ok_or("webview not found")?;
  webview.navigate(url).map_err(|e| e.to_string())?;
  Ok(true)
}

#[tauri::command]
pub fn resize(app: AppHandle, label: String, width: f64, height: f64) -> Result<bool, String> {
  let webview = app.get_webview(&label).ok_or("webview not found")?;
  webview.set_size(LogicalSize::new(width, height)).map_err(|e| e.to_string())?;
  Ok(true)
}