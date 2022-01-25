<template>
    <HomeHeader/>
    <div class="bg-bg">
      <div class="user-wrapper flex mx-w-1200 m-auto py-8">
        <ProfileNav class="w-72"/>
        <div class="user-wrapper__content flex-1">
          <slot/>
        </div>
      </div>
    </div>
    <FooterWrapper/>
</template>

<script>
import HomeHeader from '../components/home-header/HomeHeader.vue'
import FooterWrapper from '../components/home-footer/FooterWrapper.vue'
import ProfileNav from '../components/user/nav/ProfileNav.vue'
export default {
  components: {
    HomeHeader,
    FooterWrapper,
    ProfileNav
  }
}
</script>

<style scoped>
.bg-bg{
  border-bottom: .5rem solid var(--primary-color);
}
</style>