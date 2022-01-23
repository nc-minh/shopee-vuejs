import { defineAsyncComponent } from 'vue'

export function registerGlobalComponents(app){
    //import layout
    app.component('IndexLayout', defineAsyncComponent(() => import('../layouts/IndexLayout.vue')))
    app.component('RegisterLayout', defineAsyncComponent(() => import('../layouts/RegisterLayout.vue')))

    //import library
}