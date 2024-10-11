import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base : './',
  build : {
    outDir : 'dist-web'
  },
  server : {
    port : 5234,
    strictPort: true,
  }
})
