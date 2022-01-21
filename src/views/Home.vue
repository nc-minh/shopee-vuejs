<template>
  <div class="home bg-bg">
    <HomeBanner/>
    <HomeCategory/>
    <FlashSale/>
  </div>
</template>

<script>
import IndexLayout from "@/layouts/IndexLayout.vue"
import HomeBanner from '../components/banners/HomeBanner.vue'
import HomeCategory from '../components/category/HomeCategory.vue'
import FlashSale from '../components/flash-sale/FlashSale.vue'
export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeCategory,
    FlashSale
  },
  created() {
    this.$emit("update:layout", IndexLayout)
  }
}
</script>
