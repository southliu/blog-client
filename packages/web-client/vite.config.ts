import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import Pages from 'vite-plugin-pages';
import Vue from '@vitejs/plugin-vue';
import unocss from 'unocss/vite';
import VueRouter from 'unplugin-vue-router/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import Layouts from 'vite-plugin-vue-layouts';
import AutoImport from 'unplugin-auto-import/vite';
import { handleEnv } from './build/helper';
import { createProxy } from './build/proxy';
// import { handleEnv, createProxy } from '@south-blog/shared';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = handleEnv(env);
  const { VITE_PROXY } = viteEnv;

  return {
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
      Layouts(),
      Pages({
        extensions: ['vue', 'md'],
      }),
      VueRouter({
        extensions: ['.vue', '.md'],
        dts: 'src/typed-router.d.ts',
      }),
      VitePWA({
        minify: false,
        mode: 'development',
      }),
      AutoImport({
        imports: [
          'vue',
          '@vueuse/head',
          '@vueuse/core',
          VueRouterAutoImports,
          {
            'vue-router/auto': ['useLink'],
          },
        ]
      })
    ],
    resolve: {
      alias: {
        '@': '/src',
        '#': '/types'
      }
    },
    server: {
      open: true,
      proxy: createProxy(VITE_PROXY)
    }
  };
});
