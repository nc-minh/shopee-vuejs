<template>
    <div class="option-banner mt-4 bg-white">
        <ul class="option-banner__list flex justify-between items-center">
            <li v-for="(item, index) in list" :key="index" class="option-banner__item h-full">
                <a href="/" class="option-banner__item__link h-full flex flex-col justify-center items-center">
                    <div :style="url(item.url)" class="option-banner__item__img bg-cover my-4"></div>
                    <span class="option-banner__item__text flex-1 px-2 text-xl">{{ item.text }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'OptionBanner',
    setup() {
        const list = [
            {
                text: 'Tech Zone - Siêu Thị Điện Từ',
                url: 'https://cf.shopee.vn/file/4e32311e7d872547962d1867d39c9027_xhdpi'
            },
            {
                text: 'Gì Cũng Rẻ - Từ 1K',
                url: 'https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi'
            },
            {
                text: 'Hoàn Xu 10% - Đơn Từ 0Đ',
                url: 'https://cf.shopee.vn/file/21a4856d1fecd4eda143748661315dba_xhdpi'
            },
            {
                text: 'Nạp Thẻ, Hóa Đơn & E-voucher',
                url: 'https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi'
            },
            {
                text: 'Freeship Xtra',
                url: 'https://cf.shopee.vn/file/07ee4296b0a33885418670f2e3ffeca0_xhdpi'
            },
            {
                text: 'Hàng Hiệu -50%',
                url: 'https://cf.shopee.vn/file/765ca66457ec08802f74c529f71a99b7_xhdpi'
            },
            {
                text: 'Hàng Quốc Tế',
                url: 'https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi'
            },
            {
                text: 'Shopee Premium',
                url: 'https://cf.shopee.vn/file/0a3e3aa16b083d6b7e2c25a8f2c16731_xhdpi'
            }
        ]

        return{
            list
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
.option-banner__list{
    height: 10.8rem;
}

.option-banner__item{
    width: 15rem;
    height: 10.8rem;
}

.option-banner__item__img{
    width: 4.5rem;
    height: 4.5rem;
}
</style>