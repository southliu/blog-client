import { defineConfig } from 'vite';
import { createVitePlugins } from '@south-blog/utils';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: createVitePlugins(),
  server: {
    open: true
  }
});
