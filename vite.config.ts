import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/src': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
    },
    sourcemap: true,
    target: ['ESNext'],
  },
  plugins: [react()],
});