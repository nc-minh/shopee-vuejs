<template>
  <div class="home bg-bg">
    <HomeBanner/>
    <HomeCategory/>
  </div>
</template>

<script>
import IndexLayout from "@/layouts/IndexLayout.vue"
import HomeBanner from '../components/banners/HomeBanner.vue'
import HomeCategory from '../components/category/HomeCategory.vue'
export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeCategory
  },
  created() {
    this.$emit("update:layout", IndexLayout)
  }
}
</script>
