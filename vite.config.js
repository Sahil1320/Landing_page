
import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),react(),
  ],
  base: process.env.VITE_BASE_PATH || "/Landing_page",
});
