import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './src/main.jsx',
      },
      output: {
        // Configure how assets are handled if needed
      },
    },
    assetsInlineLimit: 4096, // Adjust the limit if necessary
  },
  server: {
    port: 4900, // Set the development server port to 4900
  },
});
