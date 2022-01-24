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

    return{
      layout: computed(() => route.meta.layout || PUBLIC_LAYOUT)
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
