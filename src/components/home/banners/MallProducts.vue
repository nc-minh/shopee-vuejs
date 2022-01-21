<template>
  <div class="mall-products pt-4 flex">
      <div class="mall-products__banner flex-1 pl-4">
          <a href="/" class="w-full h-full block">
              <div :style="url(img)" class="mall-products__banner__img w-full bg-cover bg-no-repeat"></div>
          </a>
      </div>

      <div class="mall-products__contains flex-2">
          <div class="mall-products__contains__wrapper h-full relative overflow-hidden">
              <ul class="mall-products__contains__list flex h-full absolute">
                  <li v-for="(item, index) in data" :key="index" class="mall-products__contains__item h-full text-red-color">
                      <div class="mall-products__contains__item-group h-1/2 w-80 bg-white">
                          <a href="/" class="mall-products__contains--link w-full h-full flex flex-col items-center">
                            <div :style="url(item.url1)" class="mall-products__contains--img bg-contain bg-no-repeat"></div>
                            <div class="mall-products__contains--text text-3xl flex-1">{{ item.name1 }}</div>
                          </a>
                      </div>
                      <div class="mall-products__contains__item-group h-1/2 w-80 bg-white">
                          <a href="/" class="mall-products__contains--link w-full h-full flex flex-col items-center">
                            <div :style="url(item.url2)" class="mall-products__contains--img bg-contain bg-no-repeat"></div>
                            <div class="mall-products__contains--text text-3xl flex-1">{{ item.name2 }}</div>
                          </a>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'MallProducts',
    setup(props) {
        const img = 'https://cf.shopee.vn/file/3d6f27a870181eea444d6b362b83b337'

        const data = [
            {
                name1: 'Săn sale đón tết',
                url1: 'https://cf.shopee.vn/file/583203f2233878167f525899a3dd5396_xhdpi',
                name2: 'Mua là có quà',
                url2: 'https://cf.shopee.vn/file/ba907953d8ea51dadcea5e396ff284aa_xhdpi'
            },
            {
                name1: 'Siêu sale LG',
                url1: 'https://cf.shopee.vn/file/2d6f9a2a93934ae707035171b2a30f20_xhdpi',
                name2: 'Săn sale đón tết',
                url2: 'https://cf.shopee.vn/file/d2302f611fbe7751b8cda9c7c8fd4be0_xhdpi'
            },
            {
                name1: 'Siêu deal tết 12k',
                url1: 'https://cf.shopee.vn/file/15196326e068bbbae5d3135141e2f366_xhdpi',
                name2: 'Mua là có quà',
                url2: 'https://cf.shopee.vn/file/13b13446ba62038de60bb049fa4ba11a_xhdpi'
            },
            {
                name1: 'Ưu đãi đến 40%',
                url1: 'https://cf.shopee.vn/file/https%3A%2F%2Fcf.shopee.vn%2Ffile%2F6469e30ffbf6ecf04efc183a7d8d0cd7_xhdpi',
                name2: 'Da khỏe sạch mụn',
                url2: 'https://cf.shopee.vn/file/c2092d16572b3128d26a86693b53cc11_xhdpi'
            },
            {
                name1: 'Ưu đãi đến 50%',
                url1: 'https://cf.shopee.vn/file/11d48981edc0a667a5482f77eb130879_xhdpi',
                name2: 'Mua là có quà',
                url2: 'https://cf.shopee.vn/file/85d4488f492ad57e126d16a07625b3c0_xhdpi'
            },
            {
                name1: 'Mua 1 tặng 1',
                url1: 'https://cf.shopee.vn/file/ae84a92ed8e4d399ae927c78a1410fe8_xhdpi',
                name2: 'Mua 1 tặng 6',
                url2: 'https://cf.shopee.vn/file/41f9c28bd8610a625f78114b01970644_xhdpi'
            }
        ]
        return{
            img,
            data
        }
    },
    methods: {
        url: function(url){
            return `background-image: url(${url});`
        }
    }
}
</script>

<style scoped>
.mall-products__banner__img{
    height: 46.4rem;
}

.mall-products__contains--img{
    width: 80%;
    height: 80%;
}

.mall-products__contains__list{
    left: 0;
    top: 0;
    bottom: 0;
}
</style>