import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CEP panels load index.html from disk via file:// — use relative asset paths.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    strictPort: true,
  },
})
