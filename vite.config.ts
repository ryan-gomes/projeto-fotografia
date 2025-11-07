import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  appType: "spa", // 👈 garante fallback automático para rotas SPA
  server: {
    fs: {
      strict: false,
    },
  },
  build: {
    outDir: "dist",
  },
});