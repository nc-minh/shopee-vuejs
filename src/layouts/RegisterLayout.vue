<template>
    <RegisterHeader/>
    <slot/>
    <HomeFooter/>
</template>

<script>
import HomeFooter from '../components/home-footer/HomeFooter.vue'
import RegisterHeader from '../components/register-header/RegisterHeader.vue'
export default {
  components: {
    HomeFooter,
    RegisterHeader
  }
}
</script>