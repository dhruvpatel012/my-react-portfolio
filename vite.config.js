import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite build configuration bundling React 19 and Tailwind CSS v4.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
