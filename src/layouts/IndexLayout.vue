<template>
    <HomeHeader/>
    <slot/>
    <HomeFooter/>
</template>

<script>
import HomeHeader from '../components/home-header/HomeHeader.vue'
import HomeFooter from '../components/home-footer/HomeFooter.vue'
export default {
  components: {
    HomeHeader,
    HomeFooter
  }
}
</script>