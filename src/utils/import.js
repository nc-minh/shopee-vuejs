import { defineAsyncComponent } from 'vue'

export function registerGlobalComponents(app){
    app.component('LoginLayout', defineAsyncComponent(() => import('../layouts/LoginLayout.vue')))
    app.component('IndexLayout', defineAsyncComponent(() => import('../layouts/IndexLayout.vue')))
}