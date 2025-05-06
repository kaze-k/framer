import { defineConfig } from "vite";

export default defineConfig({
  mode: "development",
  css: {
    devSourcemap: true,
  },
  build: {
    sourcemap: true,
    minify: false,
  },
});
