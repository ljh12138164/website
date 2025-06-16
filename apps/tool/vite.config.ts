import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
import qiankun from 'vite-plugin-qiankun';

export default defineConfig({
  base: 'http://localhost:8888',
  server: {
    watch: { usePolling: true },
    hmr: true,
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*', // 主应用获取子应用时跨域响应头
    },
  },
  plugins: [
    // react({
    // reactRefreshHost: 'http://localhost:8888',
    // }),
    qiankun('tool', {
      useDevMode: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@ui': fileURLToPath(
        new URL('../../packages/ui/src/stories', import.meta.url)
      ),
    },
  },
});
