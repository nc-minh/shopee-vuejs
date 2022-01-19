import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/fonts/fontawesome-5.15.4/css/all.min.css'
import './assets/styles/tailwind.css'
import './assets/styles/base.css'

import { registerGlobalComponents  } from './utils/import'

const app = createApp(App)

registerGlobalComponents(app)

app.use(store)
app.use(router)
app.mount('#app')
