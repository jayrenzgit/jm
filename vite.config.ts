import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path' // Correct import for path

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // Correct path.resolve usage
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  publicDir: 'public',
  base: '/jm/', // Use your actual repository name here
})
