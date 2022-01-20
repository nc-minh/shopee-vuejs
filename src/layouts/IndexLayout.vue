<template>
    <HeaderHome/>
    <slot/>
</template>

<script>
import HeaderHome from '../components/headers/HomeHeader.vue'
export default {
  components: {
    HeaderHome
  }
}
</script>