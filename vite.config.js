import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// REPLACE 'repo-name' with your actual repository name
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/Portfolio-Website-Devansh-Garg/', 
})
