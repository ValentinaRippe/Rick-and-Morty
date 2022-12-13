import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://ValentinaRippe.github.io/Rick-and-Morty/',
  plugins: [react()],
})
