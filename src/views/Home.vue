<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src

import IndexLayout from "@/layouts/IndexLayout.vue"
import LoginLayout from "../layouts/LoginLayout.vue"

export default {
  name: 'Home',
  components: {
  },
  created() {
    this.$emit("update:layout", IndexLayout)
  }
}
</script>
