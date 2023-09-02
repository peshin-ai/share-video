import babel from '@rollup/plugin-babel';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
    }),
  ],
  build: {},
  resolve: {
    alias: {
      "@components": "/src/components",
      "@utils": "/src/utils",
      // Add more aliases as needed
    },
  },
  server: {
    host: true,
    strictPort: true,
    port: 8080,
  },
});
