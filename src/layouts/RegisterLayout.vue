<template>
    <!-- <RegisterHeader/> -->
    <slot/>
    <FooterContact/>
    <FooterBottom/>
</template>

<script>
import HomeFooter from '../components/home-footer/HomeFooter.vue'
// import RegisterHeader from '../components/register-header/RegisterHeader.vue'
import FooterContact from '../components/home-footer/FooterContact.vue'
import FooterBottom from '../components/home-footer/FooterBottom.vue'
export default {
  components: {
    HomeFooter,
    // RegisterHeader,
    FooterContact,
    FooterBottom
  }
}
</script>