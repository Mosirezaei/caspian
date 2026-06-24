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
    // فعال‌سازی فشرده‌سازی نهایی کدهای CSS و JS
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // حذف تمام console.logها برای افزایش سرعت لود
        drop_debugger: true,
      },
    },
    // تکنیک تقسیم کدها برای لود سریع‌تر صفحات به صورت جداگانه
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // تفکیک پکیج‌های سنگین مثل ری‌اکت از کدهای اصلی پروژه
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('supabase')) return 'vendor-supabase';
            return 'vendor-libs';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // افزایش حد مجاز هشدار سایز چانک‌ها
  },
})
