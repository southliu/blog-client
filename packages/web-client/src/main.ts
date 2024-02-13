import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from '~pages'
import 'uno.css';
import './style.css'

export const createApp = ViteSSG(App, {
  base: import.meta.env.BASE_URL,
  routes,
})