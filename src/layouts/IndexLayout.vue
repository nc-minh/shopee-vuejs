<template>
    <HeaderHome/>
    <slot/>
</template>

<script>
import HeaderHome from '../components/headers/HeaderHome.vue'
export default {
  components: {
    HeaderHome
  }
}
</script>