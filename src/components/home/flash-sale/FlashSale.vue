<template>
  <div class="flash-sale mt-8 bg-white">
      <div class="flash-sale__header flex justify-between items-center h-24 px-8">
          <div class="flash-sale__header__title h-full">
              <div class="flash-sale__header__title__wrapper flex justify-center items-center h-full">
                  <div class="flash-sale__header__title__wrapper__header" :style="url(img)"></div>
                  <div class="flash-sale__header__title__wrapper__timer ml-4">
                      <span>01</span>
                      <span>33</span>
                      <span>24</span>
                  </div>
              </div>
          </div>
          <a href="" class="flash-sale__header__link">
              <button class="flash-sale__header__btn text-2xl text-primary-color">
                  Xem Tất Cả
                  <i class="far fa-angle-right text-2xl"></i>
              </button>
          </a>
      </div>

      <FlashSaleList/>
  </div>
</template>

<script>
import FlashSaleList from './FlashSaleList.vue'
export default {
    name: 'FlashSale',
    setup(){
        const img = 'https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/fb1088de81e42c4e538967ec12cb5caa.png'
        return{
            img
        }
    },
    methods: {
        url: function (url) {
            return `background-image: url(${url});`;
        }
    },
    components: {
        FlashSaleList
    }
}
</script>

<style scoped>
.flash-sale__header__title__wrapper__header{
    width: 11.4rem;
    height: 3rem;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.flash-sale__header__title__wrapper__timer span{
    background-color: #000;
    width: 2rem;
    height: 2rem;
    padding: .2rem .4rem;
    margin: 0 .4rem;
    color: #fff;
    font-size: 1.4rem;
}
</style>