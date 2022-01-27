import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/fonts/fontawesome-pro-5.15.3-web/css/all.min.css'
import './assets/styles/tailwind.css'
import './assets/styles/base.css'
import './assets/styles/grid.css'
import './assets/styles/responsive.css'

import { registerGlobalComponents  } from './utils/import'

const app = createApp(App)

registerGlobalComponents(app)

app.use(store)
app.use(router)
app.mount('#app')
