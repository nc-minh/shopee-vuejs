import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/tailwind.css'
import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './assets/styles/main.css'

createApp(App).use(store).use(router).mount('#app')
