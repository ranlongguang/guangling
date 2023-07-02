import { createRouter, createWebHashHistory } from 'vue-router'
import config from './config.js'
import configGame from './configGame.js'
let search = location.search.split('=')[1];
let routes = search ? config : configGame;
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
