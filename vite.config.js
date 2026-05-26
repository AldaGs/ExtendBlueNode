import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CEP panels load index.html from disk via file:// — use relative asset paths.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Bumping the warning so the (still-monitored) chunk-size warning
    // doesn't drown the build log. Monaco + ReactFlow are split below.
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/monaco-editor')) return 'monaco';
          if (id.includes('node_modules/@monaco-editor')) return 'monaco';
          if (id.includes('node_modules/reactflow')) return 'reactflow';
        },
      },
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
})
