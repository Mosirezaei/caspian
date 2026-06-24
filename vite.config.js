import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  logLevel: 'error',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
  build: {
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false, 
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      },
    },
  },
})
