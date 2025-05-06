import { defineConfig, mergeConfig } from "vite";
import type { UserConfig } from "vite";

import baseConfig from "./config/vite.base";
import devConfig from "./config/vite.dev";
import proConfig from "./config/vite.pro";

// https://vite.dev/config/
const viteConfig = ({ mode }: { mode: string }): UserConfig => {
  if (mode === "development") {
    return mergeConfig(baseConfig, devConfig);
  }
  if (mode === "production") {
    return mergeConfig(baseConfig, proConfig);
  }
  return mergeConfig(baseConfig, proConfig);
};

export default defineConfig(viteConfig);
