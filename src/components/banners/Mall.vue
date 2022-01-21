<template>
  <div class="mall bg-white mt-8">
    <div class="mall__header border-b-2 border-solid border-gray-200 flex justify-between h-24 items-center px-8">
      <div class="mall__header--left flex items-center">
        <a href="/" class="mall__header--title text-3xl mr-4 text-red-color">SHOPEE MALL</a>
        <ul class="mall__header--highlight flex items-center">
          <li class="mall__header--highlight__item mr-4">
            <i class="far fa-undo-alt text-red-color"></i>
            <span class="ml-2">7 Ngày Miễn Phí Trả Hàng</span>
          </li>
          <li class="mall__header--highlight__item mr-4">
            <i class="fas fa-truck text-red-color"></i>
            <span class="ml-2">Hàng Chính Hãng 100%</span>
          </li>
          <li class="mall__header--highlight__item">
            <i class="far fa-shield-check text-red-color"></i>
            <span class="ml-2">Miễn Phí Vận Chuyển</span>
          </li>
        </ul>
      </div>

      <div class="mall__header--right">
        <button class="mall__header--btn text-2xl text-red-color">
          Xem Tất Cả
          <i class="fas fa-arrow-alt-circle-right"></i>
        </button>
      </div>
    </div>

    <MallProducts/>
  </div>
</template>

<script>
import MallProducts from './MallProducts.vue'
export default {
  name: 'Mall',
  components: {
    MallProducts
  }
}
</script>

<style scoped>
.mall__header--highlight{
  font-size: 1.25rem;
}
</style>>