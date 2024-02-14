import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import Pages from 'vite-plugin-pages';
import Vue from '@vitejs/plugin-vue';
import unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()
      ]
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    VitePWA({
      minify: false,
      mode: 'development',
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '#': '/types'
    }
  },
  server: {
    open: true
  }
});
