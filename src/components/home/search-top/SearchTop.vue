<template>
  <div class="search-top bg-white mt-8">
      <div class="search-top__header h-24 flex items-center justify-between px-8 text-primary-color">
            <div class="search-top__header--title text-3xl text-gray-600">TÌM KIẾM HÀNG ĐẦU</div>
            <button class="search-top__header--btn text-2xl">
                Xem Thêm
                <i class="far fa-angle-right"></i>
            </button>
      </div>

      <div class="search-top__contains w-full">
          <div class="search-top__contains__wrapper relative overflow-hidden w-full h-full">
              <ul class="search-top__contains__list flex absolute">
                  <li v-for="(item, index) in data" :key="index" class="search-top__contains__item w-1/6 bg-white text-center">
                      <a href="/" class="search-top__contains--link relative flex flex-col w-full h-full p-8">
                        <div class="search-top__contains__item-top flex flex-col justify-center items-center h-3/4 relative">
                            <div :style="url(item.url)" class="search-top__contains__item-top__img h-full w-4/5 bg-cover bg-no-repeat bg-center"></div>
                            <div class="search-top__contains__item-top__content absolute">{{ item.soldRate }}</div>
                        </div>
                        <div class="search-top__contains__item-text flex-1 font-medium text-2xl mt-3">{{ item.name }}</div>
                        <div class="search-top__contains__item-label absolute">TOP</div>
                      </a>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SearchTop',
    setup() {
        const data = [
            {
                name: 'Ốp Lưng Iphone',
                url: 'https://cf.shopee.vn/file/1c23ccb76031614584cbdd977e31bd7a_tn',
                soldRate: 'Bán 193k+/tháng'
            },
            {
                name: 'Quần Ống Rộng Nữ',
                url: 'https://cf.shopee.vn/file/9ec433bca2d7e0f8f6fc2ce1c5097882_tn',
                soldRate: 'Bán 131k+/tháng'
            },
            {
                name: 'Bút Kẻ Mắt Chống Nước',
                url: 'https://cf.shopee.vn/file/bc24d8e6913f0c917cfca3e9a8db0fd2_tn',
                soldRate: '144k+/tháng'
            },
            {
                name: 'Kem Nền Trang Điểm Bb Cream',
                url: 'https://cf.shopee.vn/file/f6e6591832b3f4dfac523956d6141374_tn',
                soldRate: 'Bán 144k+/tháng'
            },
            {
                name: 'Bông Tẩy Trang 3 Lớp Cotton Pads',
                url: 'https://cf.shopee.vn/file/1378b90f69b5e6208e6e4dee751c9093_tn',
                soldRate: 'Bán 99k+/tháng'
            },
            {
                name: 'Áo Thun Polo Nam Ngắn Tay',
                url: 'https://cf.shopee.vn/file/c302abe3c6a17063d1271f46ce542210_tn',
                soldRate: 'Bán 83k+/tháng'
            },
            {
                name: 'Áo Thun Polo Nam Ngắn Tay',
                url: 'https://cf.shopee.vn/file/c302abe3c6a17063d1271f46ce542210_tn',
                soldRate: 'Bán 83k+/tháng'
            }
        ]

        const widthCarousel = (100/6) * data.length

        return{
            data,
            widthCarousel
        }
    },
    methods: {
        url: function(url){
            return `background-image: url(${url});`
        },
        width: function(width){
            return `width: ${width}%;`
        }
    }
}
</script>

<style scoped>
.search-top__header{
    border-bottom: 1px solid #ddd;
}

.search-top__contains{
    height: 29rem;
}

.search-top__contains__list{
    height: 29rem;
    top: 0;
    bottom: 0;
    left: 0;
}

.search-top__contains__item-top__content{
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .3);
    height: 2.5rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 500;
    color: #fff;
}

.search-top__contains__item-label{
    width: 3.2rem;
    height: 3.2rem;
    background-color: #ff7b39;
    line-height: 3.2rem;
    color: #fff;
    font-weight: 600;
    font-size: 1.1rem;
}

.search-top__contains__item-label::after{
    content: '';
    position: absolute;
    display: block;
    border-width: .9rem 1.6rem;
    border-style: solid;
    bottom: -1.8rem;
    border-color: #ff7b39 transparent transparent transparent;
}

/* mobile & tablet */
@media (max-width: 1223px){
    .search-top__contains{
        
    }

    .search-top__contains__item{
        width: 20rem;
    }
}

/* mobile */
@media (max-width: 739px){
    
    
}
</style>