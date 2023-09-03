/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/vitest-setup.ts",
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/coverage/**",
        "**/public/**",
        "**/vite.config.ts",
        "**/vitest.config.ts",
        "**/src/vitest-setup.ts",
        "**/src/main.tsx",
        "**/src/redux/**",
        "**/src/styles/**",
        "**/src/index.css",
        "**/src/i18n.ts",
        "**/src/constants/**",
        "**/src/types/**",
      ],
    },
  },
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
      "@styles": "/src/styles",
      "@redux": "/src/redux",
    },
  },
  build: {
    minify: "terser",
    terserOptions: {
      format: {
        comments: false,
      },
    },
  },
});
