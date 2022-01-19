<template>
    <h1>index layout</h1>
    <HeaderHome/>
    <slot/>
</template>

<script>
import HeaderHome from '../components/HeaderHome.vue'
export default {
  components: {
    HeaderHome
  }
}
</script>