import path from "path";

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    setupFiles: "./vitest-setup.js",
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@presentation": path.resolve(__dirname, "./src/presentation"),
      "@lib": path.resolve(__dirname, "./src/config/lib"),
      "@components": path.resolve(
        __dirname,
        "./src/presentation/global/components"
      ),
    },
  },
});
