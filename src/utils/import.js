import { defineAsyncComponent } from 'vue'

export function registerGlobalComponents(app){
    //import layout
    app.component('LoginLayout', defineAsyncComponent(() => import('../layouts/LoginLayout.vue')))
    app.component('IndexLayout', defineAsyncComponent(() => import('../layouts/IndexLayout.vue')))

    //import library
}