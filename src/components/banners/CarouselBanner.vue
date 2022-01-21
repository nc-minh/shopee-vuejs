<template>
  <div class="full-carousel-banner flex">
    <div class="carousel-banner flex-2">
      <div class="carousel-banner__wrapper h-full overflow-hidden relative">
        <button @click="prev(index)" class="carousel-banner__btn-prev">
            <i class="far fa-angle-left"></i>
        </button>
        <ul :style="width" class="carousel-banner__list flex h-full absolute top-0 bottom-0 left-0 right-0">
          <li v-for="(item, index) in sliderContent" :key="index" class="carousel-banner__item w-full">
            <a href="/" class="carousel-banner__item__link h-full block">
              <div class="carousel-banner__item__image bg-cover" :style="url(item.url)"></div>
            </a>
          </li>
        </ul>
        <button @click="next(index)" class="carousel-banner__btn-next">
            <i class="far fa-angle-right"></i>
        </button>
      </div>
    </div>

    <div class="sub-banner flex flex-col ml-2 flex-1">
        <a href="" class="sub-banner__item flex-50% block">
            <div class="sub-banner__item__img h-full"></div>
        </a>
        <a href="" class="sub-banner__item mt-2 flex-50% block">
            <div class="sub-banner__item__img h-full"></div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselBanner",
  data(){
      return{
          quantity: 0,
          style: '',
          index: 0,
          widthSlider: 0
      }
  },
  setup(){

      const sliderContent = [
          {
              url: 'https://cf.shopee.vn/file/7293895c6828864ed379348d329853fc_xxhdpi'
          },
          {
              url: 'https://cf.shopee.vn/file/b109d9f8f6e4d8c065156090e79b4ea1_xxhdpi'
          },
          {
              url: 'https://cf.shopee.vn/file/25642d4097043b1b65ac4c5653e3dd96_xxhdpi'
          },
          {
              url: 'https://cf.shopee.vn/file/558db505b5c1baaeb5a872c9ec0598ca_xxhdpi'
          },
          {
              url: 'https://cf.shopee.vn/file/1eaa243b0d70f4a02d7d1dcd1e35ecad_xxhdpi'
          }
      ]

    var quantity = sliderContent.length
    const length = quantity * 100
    var width = `width: ${length}%;`


    return{
        sliderContent,
        length,
        width,
        quantity
    }

  },
  methods: {
    url: function(url){
        return `background-image: url(${url});`
    },
    next: function(index){

        var width = this.widthSlider
        
        width += (index * 20)
        console.log(width)

        this.widthSlider = width
        
        const carouselBannerList = document.querySelector('.carousel-banner__list')
        carouselBannerList.style.transform = `translateX(${width}%)`

        this.index++
    },
    prev: function(index){
        
        var width = this.widthSlider

        width -= (index * 20)
        console.log(width)

        this.widthSlider = width
        
        const carouselBannerList = document.querySelector('.carousel-banner__list')
        carouselBannerList.style.transform = `translateX(${width}%)`

        this.index--
    }
  }
};
</script>

<style scoped>
.full-carousel-banner{
    height: 23.5rem;
    width: 100%;
}

.carousel-banner__list{
    transition: all 500ms ease 0s;
}

.carousel-banner__item{
    min-height: 23.5rem;
    max-height: 23.5rem;
}

.carousel-banner__item__link{
    width: 100%
}

.carousel-banner__item__image {
  background-image: url("../../assets/images/banner0.png");
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}

.sub-banner__item__img{
    background-image: url("../../assets/images/sub-banner0.png");
    background-repeat: no-repeat;
    background-size: cover;
}

.carousel-banner__btn-prev,
.carousel-banner__btn-next{
    position: absolute;
    z-index: 2;
    width: 3.4rem;
    height: 5.4rem;
    background-color: rgba(0,0,0,.32);
    font-size: 3rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-white-color);
}

.carousel-banner__btn-prev{
    left: 0;   
}

.carousel-banner__btn-next{
    right: 0;
}
</style>