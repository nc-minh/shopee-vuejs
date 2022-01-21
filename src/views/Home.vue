<template>
  <div class="bg bg-bg">
    <div class="home w-1200 m-auto ">
      <HomeBanner/>
      <HomeCategory/>
      <FlashSale/>
      <MutilSimpleBanner/>
      <Mall/>
    </div>
  </div>
</template>

<script>
import IndexLayout from "@/layouts/IndexLayout.vue"
import HomeBanner from '../components/banners/HomeBanner.vue'
import HomeCategory from '../components/category/HomeCategory.vue'
import FlashSale from '../components/flash-sale/FlashSale.vue'
import MutilSimpleBanner from '../components/banners/Mutil-SimpleBanner.vue'
import Mall from '../components/banners/Mall.vue'
export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeCategory,
    FlashSale,
    MutilSimpleBanner,
    Mall
  },
  created() {
    this.$emit("update:layout", IndexLayout)
  }
}
</script>
