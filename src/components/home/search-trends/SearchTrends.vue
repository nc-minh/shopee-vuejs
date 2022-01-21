<template>
    <div class="search-trends bg-white mt-8">
        <div class="search-trends__header h-24 flex items-center justify-between px-8 text-primary-color">
            <div class="search-trends__header--title text-3xl text-gray-600">XU HƯỚNG TÌM KIẾM</div>
            <button class="search-trends__header--btn text-xl">
                <i class="far fa-sync"></i>
                Xem Thêm
            </button>
        </div>

        <div class="search-trends__contains">
            <ul class="search-trends__contains__list w-full flex flex-wrap">
                <li v-for="(item, index) in data" :key="index" class="search-trends__contains__item">
                    <a href="/" class="search-trends__contains--link h-full w-full flex items-center">
                        <div class="search-trends__contains__content flex-13">
                            <div class="search-trends__contains__content__name text-2xl">{{ item.name }}</div>
                            <div class="search-trends__contains__content__quantity text-xl text-gray-400">{{ item.quantity }}</div>
                        </div>
                        <div :style="url(item.url)" class="search-trends__contains__img flex-10"></div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchTrends',
    setup(){
        const data = [
            {
                name: 'Son',
                quantity: '769k+ sản phẩm',
                url: 'https://cf.shopee.vn/file/582668129c4b223ad13d8e0977d474c6'
            },
            {
                name: 'Áo Hoodie',
                quantity: '659k+ sản phẩm',
                url: 'https://cf.shopee.vn/file/8f7c06e8c90390c5f507ba0601be6fea'
            },
            {
                name: 'Túi',
                quantity: '3tr+ sản phẩm',
                url: 'https://cf.shopee.vn/file/79fc499c46c9a2c4e49fb4d362e99492'
            },
            {
                name: 'Quần Jean Nữ',
                quantity: '10tr+ sản phẩm',
                url: 'https://cf.shopee.vn/file/1e19f4a58761ab14e21869f4604e565e'
            }
        ]

        return{
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
.search-trends__header{
    border-bottom: 1px solid #ddd;
}

.search-trends__contains__item{
    width: 25%;
    height: 10rem;
    border: 1px solid #ddd;
}

.search-trends__contains__img{
    width: 90%;
    height: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
</style>