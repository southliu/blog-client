import { defineConfig } from 'vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import unocss from 'unocss/vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()
      ]
    })
  ],
  server: {
    open: true
  },
});
