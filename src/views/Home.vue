<template>
  <div class="home bg-bg">
    <HomeBanner/>
  </div>
</template>

<script>
import IndexLayout from "@/layouts/IndexLayout.vue"
import HomeBanner from '../components/banners/HomeBanner.vue'

export default {
  name: 'Home',
  components: {
    HomeBanner
  },
  created() {
    this.$emit("update:layout", IndexLayout)
  }
}
</script>
