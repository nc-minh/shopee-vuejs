<template>
  <div class="bg bg-bg">
    <div class="home mx-w-1200 w-984 m-auto ">
      <HomeBanner/>
      <HomeCategory/>
      <FlashSale/>
      <MutilSimpleBanner/>
      <Mall/>
      <SearchTrends/>
      <SearchTop/>
      <Products/>
    </div>
  </div>
</template>

<script>
import HomeBanner from '../components/home/banners/HomeBanner.vue'
import HomeCategory from '../components/home/category/HomeCategory.vue'
import FlashSale from '../components/home/flash-sale/FlashSale.vue'
import MutilSimpleBanner from '../components/home/banners/Mutil-SimpleBanner.vue'
import Mall from '../components/home/banners/Mall.vue'
import SearchTrends from '../components/home/search-trends/SearchTrends.vue'
import SearchTop from '../components/home/search-top/SearchTop.vue'
import Products from '../components/home/products/Products.vue'
export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeCategory,
    FlashSale,
    MutilSimpleBanner,
    Mall,
    SearchTrends,
    SearchTop,
    Products
  }
}
</script>

<style scoped>
.bg{
  background-image: url('https://cf.shopee.vn/file/789323fd44c750feeb24cdcfa62f46fe');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
}
</style>
