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
    // استفاده از ابزار داخلی و فوق‌سریع esbuild به جای terser
    minify: 'esbuild',
    // تکنیک تقسیم کدها برای لود سریع‌تر صفحات به صورت جداگانه
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // تفکیک پکیج‌های سنگین از کدهای اصلی پروژه
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('supabase')) return 'vendor-supabase';
            return 'vendor-libs';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
