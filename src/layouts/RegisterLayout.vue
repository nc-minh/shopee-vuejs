<template>
    <slot/>
    <HomeFooter/>
</template>

<script>
import HomeFooter from '../components/home-footer/HomeFooter.vue'
export default {
  components: {
    HomeFooter
  }
}
</script>