import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import commonjs from '@rollup/plugin-commonjs'
// @ts-ignore
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@src': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es']
    },
    rollupOptions: {
      plugins: [commonjs(), peerDepsExternal()]
    },
    sourcemap: true,
    target: ['esnext']
  },
  plugins: [react()]
})
