import type { PluginOption } from 'vite';
import { versionUpdatePlugin } from './version';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import unocss from 'unocss/vite';
import react from '@vitejs/plugin-react-swc';

export function createVitePlugins() {
  // 插件参数
  const vitePlugins: PluginOption[] = [
    react(),
    unocss({
      presets: [
        presetUno(), 
        presetAttributify(), 
        presetIcons()
      ]
    }),
    // 版本控制
    versionUpdatePlugin()
  ];

  return vitePlugins;
}
