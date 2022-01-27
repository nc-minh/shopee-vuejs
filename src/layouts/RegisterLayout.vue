<template>
    <slot/>
    <FooterWrapper/>
</template>

<script>
import HomeFooter from '../components/home-footer/HomeFooter.vue'
import FooterWrapper from '../components/home-footer/FooterWrapper.vue'
export default {
  components: {
    HomeFooter,
    FooterWrapper,
  }
}
</script>