<template>
  <component :is="layout">
      <router-view/>
    </component>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { PUBLIC_LAYOUT } from '../src/constants/index'
export default {
  setup() {
    const route = useRoute()
    console.log(route)
    return{
      layout: computed(() => route.meta.layout || PUBLIC_LAYOUT)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
