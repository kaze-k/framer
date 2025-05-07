import path from "node:path";
import Unocss from "unocss/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  root: process.cwd(),
  base: "/",
  publicDir: "public",
  cacheDir: "node_modules/.vite",
  envDir: "root",
  envPrefix: ["VITE_"],
  appType: "spa",
  logLevel: "info",
  clearScreen: true,
  json: {
    namedExports: true,
    stringify: "auto",
  },
  build: {
    target: "ES2020",
    outDir: "dist",
    assetsDir: "static",
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssTarget: "ES2020",
    cssMinify: "esbuild",
    manifest: "manifest.json",
    emitAssets: true,
    emptyOutDir: true,
    copyPublicDir: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      input: path.resolve(__dirname, "../index.html"),
      cache: true,
      logLevel: "info",
      output: {
        entryFileNames: "scripts/[name]-[hash].js",
        chunkFileNames: "scripts/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash][extname]",
        manualChunks: (id) => {
          if (id.includes("node_modules")) return "vendor";
          path.resolve(process.cwd(), id).replace(path.extname(id), "");
        },
      },
    },
  },
  plugins: [Unocss(), solid()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "#": path.resolve(__dirname, "../types"),
    },
  },
  preview: {
    host: true,
    port: 4174,
    strictPort: true,
    open: false,
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    open: false,
    cors: true,
    hmr: true,
  },
  worker: {
    format: "iife",
  },
});
