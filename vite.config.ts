/* eslint-disable @typescript-eslint/no-explicit-any */
// @typescript-eslint/no-explicit-any
/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '5173'),
    // open: true, отключено, чтобы не открывать браузер при запуске в Docker
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@ui': path.resolve(__dirname, 'src/shared/ui'),
      '@assets': path.resolve(__dirname, 'src/shared/assets'),
      '@features': path.resolve(__dirname, 'src/features'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
} as any);
