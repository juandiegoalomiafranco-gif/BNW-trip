import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// base: en GitHub Pages el sitio vive en /<repo>/, en Vercel/Netlify en /
export default defineConfig(({ mode }) => ({
  base: loadEnv(mode, process.cwd(), '').VITE_BASE || '/',
  plugins: [react()],
}))
