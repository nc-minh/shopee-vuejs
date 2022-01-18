import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/fonts/fontawesome-5.15.4/css/all.min.css'
import './assets/styles/tailwind.css'
import './assets/styles/base.css'

createApp(App).use(store).use(router).mount('#app')
