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
    colors: {},
  },
  presets: [presetWind3(), presetTypography(), presetAttributify()],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributifyJsx(),
    transformerCompileClass(),
  ],
});
