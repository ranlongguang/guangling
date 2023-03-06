import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from 'particles.vue3'
// import './assets/js/flexible.js'

import './assets/css/base.css'

const app = createApp(App)

app.use(Particles).use(router).mount('#app')
