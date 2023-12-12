import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/landing-page-sps/",
  plugins: [react()],
})
