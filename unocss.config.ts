import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetWind3,
  transformerAttributifyJsx,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: [],
  theme: {
    colors: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      accent: "var(--color-accent)",
      bg: "var(--color-bg)",
      text: "var(--color-text)",
    },
  },
  presets: [presetWind3(), presetTypography(), presetAttributify()],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributifyJsx(),
    transformerCompileClass(),
  ],
});
