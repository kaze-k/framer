import { invoke } from "@tauri-apps/api/core";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { onMount } from "solid-js";

function Main() {
  let container: HTMLDivElement | undefined;

  onMount(async () => {
    if (!container) return;
    const label = await invoke<string>("create_webview", {
      label: "main-webview",
      url: "about:blank",
      width: container.clientWidth - 20,
      height: container.clientHeight - 20,
      x: 18,
      y: 18,
    });

    if (label) {
      const currentWindow = getCurrentWindow();

      currentWindow.onResized(() => {
        window.addEventListener("resize", async () => {
          await invoke<boolean>("resize", {
            label,
            width: container.clientWidth - 20,
            height: container.clientHeight - 20,
          });
        });
      });

      await invoke<boolean>("navigate", {
        label,
        url: "https://blog.kazes.top",
      });
    }
  });

  return (
    <main flex flex-col w-full h-full>
      <div
        ref={container!}
        bg-bg
        m-2
        flex
        flex-col
        justify-center
        items-center
        h-full
        rounded-xl
      />
    </main>
  );
}

export default Main;
