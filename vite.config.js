import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: ".", // kořen je aktuální složka (tam musí být index.html)
  build: {
    outDir: "dist",
  },
  plugins: [react()],
})
