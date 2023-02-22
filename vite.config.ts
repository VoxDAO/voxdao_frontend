import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import dynamicImport from "vite-plugin-dynamic-import";
import stylelint from "vite-plugin-stylelint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), dynamicImport(), stylelint()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
