<template>
  <div class="flash-sale__carousel">
      <div class="flash-sale__caroudel__wrapper overflow-hidden">
          <ul :style="width" class="flash-sale__caroudel__list flex">
              <li v-for="(item, index) in data" :key="index" class="flash-sale__caroudel__item relative">
                  <a href="" class="flash-sale__caroudel__item--link flex flex-col items-center justify-between h-full">
                      <div :style="url(item.url)" class="flash-sale__caroudel__item__img"></div>
                      <div class="flash-sale__caroudel__item__price flex-1 text-primary-color w-full px-8">
                          <div class="flash-sale__caroudel__item__price--text text-3xl">{{ item.price }} Đ</div>
                          <div class="flash-sale__caroudel__item__price--progress rounded-3xl bg-primary-f1-color overflow-hidden relative">
                              <div :style="widthProgress(item.sold)" class="flash-sale__caroudel__item__price--progress-bar h-full bg-primary-color"></div>
                              <span class="flash-sale__caroudel__item__price--progress__text absolute">{{ item.sold }}%</span>
                          </div>
                      </div>

                      <span class="flash-sale__caroudel__item--discount absolute flex flex-col items-center justify-around text-2xl">
                          <div class="flash-sale__caroudel__item--discount-price text-primary-color">{{ item.discount }}%</div>
                          <div class="flash-sale__caroudel__item--discount-text text-white">GIẢM</div>
                      </span>
                  </a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: 'FlashSaleList',
    setup(){
        const data = [
            {
                url: 'https://cf.shopee.vn/file/cad8c3837049dad307f2670f171fbbfc_tn',
                price: '779000',
                sold: '56',
                discount: '15'
            },
            {
                url: 'https://cf.shopee.vn/file/3a63bfb63ce23489021ed34458c5103d_tn',
                price: '146000',
                sold: '15',
                discount: '65'
            },
            {
                url: 'https://cf.shopee.vn/file/7e320d8797f2392fb7754facf7fe082b_tn',
                price: '199000',
                sold: '99',
                discount: '45'
            },
            {
                url: 'https://cf.shopee.vn/file/6ce50e59466de1cd217c5347f0d0a034_tn',
                price: '15000',
                sold: '12',
                discount: '56'
            },
            {
                url: 'https://cf.shopee.vn/file/569df7ccfe1b74b67b13a5f2b75f6ff0_tn',
                price: '18000',
                sold: '99',
                discount: '99'
            },
            {
                url: 'https://cf.shopee.vn/file/e23de62455eb4fbf4bd5e9ce285d1fdb_tn',
                price: '198000',
                sold: '1',
                discount: '1'
            },
            {
                url: 'https://cf.shopee.vn/file/f6d78d270c5efea3c19b2901de5ee42a_tn',
                price: '99000',
                sold: '5',
                discount: '5'
            }
        ]

        var itemShow = 6
        var quantity = data.length
        const lengthOne = 100 / itemShow
        var width = `width: ${lengthOne * quantity}%;`

        return{
            width,
            data
        }
    },
    methods: {
        url: function (url) {
            return `background-image: url(${url});`;
        },
        widthProgress: function(sold){
            return `width: ${sold}%;`;
        }
    }
}
</script>

<style scoped>
.flash-sale__caroudel__list{
    transition: all 500ms ease 0s;
}

.flash-sale__caroudel__item{
    width: 20rem;
    height: 24rem;
}

.flash-sale__caroudel__item__img{
    width: 80%;
    height: 80%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}

.flash-sale__caroudel__item--link{
    background-color: #ddd8d8;
}

.flash-sale__caroudel__item__price--progress{
    width: 100%;
    height: 1.5rem;
}

.flash-sale__caroudel__item__price--progress-bar{
    /* width: 70%; */
        background-image: linear-gradient(45deg,
            rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,
            rgba(255,255,255,.15) 50%,
            rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    background-size: 1rem 1rem;
}

.flash-sale__caroudel__item__price--progress__text{
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    color: #fff;
    font-size: 1.2rem;
}

.flash-sale__caroudel__item--discount{
    top: 0;
    right: 0;
    width: 4.5rem;
    height: 4.6rem;
    background-color: rgba(255, 216, 57, .8);
}

.flash-sale__caroudel__item--discount::after{
    content: "";
    width: 0;
    height: 0;
    left: 0;
    bottom: -7px;
    position: absolute;
    border-color: transparent rgba(255,212,36,.9);
    border-style: solid;
    border-width: 0 22.5px 8px;
}
</style>