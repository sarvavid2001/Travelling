import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4900, // Set your preferred port
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    rollupOptions: {
      // Ensure image files and other assets are included in the build
      input: {
        main: './src/main.jsx',
      },
      output: {
        // Configure how assets are handled if needed
      },
    },
    // Make sure static assets are correctly resolved
    assetsInlineLimit: 4096, // Example: increase the limit for inline assets if needed
  },
});
