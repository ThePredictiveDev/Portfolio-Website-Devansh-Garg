import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// REPLACE 'repo-name' with the actual name of your GitHub repository
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-Website-Devansh-Garg/', 
})
