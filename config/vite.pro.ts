import { defineConfig } from "vite";

export default defineConfig({
  mode: "production",
  build: {
    sourcemap: false,
    minify: true,
  },
});
