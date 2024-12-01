/// <reference types="vitest" />

import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@presentation": path.resolve(__dirname, "./src/presentation"),
      "@components": path.resolve(
        __dirname,
        "./src/presentation/global/components"
      ),
    },
  },
});
