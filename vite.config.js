import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE_PATH lets the same build work on a custom domain ("/") or a GitHub Pages project URL ("/repo-name/").
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
})
