import { ViteSSG } from 'vite-ssg';
import { setupLayouts } from 'virtual:generated-layouts';
import { routes } from 'vue-router/auto/routes';
import App from './App.vue';
import 'uno.css';
import '../../../shared/styles/index.less';

export const createApp = ViteSSG(App, {
  routes: setupLayouts(routes),
  base: import.meta.env.BASE_URL,
});