<template>
  <section class="wrapper flex flex-wrap mt-2">
      <div v-for="(item, index) in data" :key="index" class="wrapper__item w-1/6 px-2 mb-4">
          <a href="/" class="wrapper__link h-full w-full flex flex-col items-center bg-white relative text-center">
            <div :style="url(item.url)" class="wrapper__item__img w-full h-4/6 bg-top bg-cover bg-no-repeat"></div>
            <div class="wrapper__item__bottom flex-1 flex flex-col px-4 pb-4">
                <h3 class="wrapper__item__bottom__name flex-1 py-2 text-2xl text-left">{{ item.name }}</h3>
                <div class="wrapper__item__bottom__extra flex items-center justify-between text-2xl pt-2">
                    <div class="wrapper__item__bottom__extra-price text-primary-color">{{ item.price }}</div>
                    <div v-if="item.sold != 0" class="wrapper__item__bottom__extra-sold text-xl">Đã bán {{ item.sold }}</div>
                </div>
            </div>

            <div v-if="item.favorite != false" class="wrapper__link__label-favorite absolute">
                <span>Yêu thích</span>
            </div>
            <div v-if="item.mall != false" class="wrapper__link__label-mall absolute bg-red-color">
                <span>Mall</span>
            </div>
            <div v-if="item.discount != 0" class="wrapper__link__label-discount absolute flex justify-center items-center flex-col bg-yellow-color">
                <span class="text-primary-color">{{ item.discount }}%</span>
                <span class="text-white">GIẢM</span>
            </div>
          </a>
      </div>
  </section>

  <button class="see-more px-52 py-4 bg-white text-2xl my-8">Xem Thêm</button>
</template>

<script>
export default {
    name: 'ProductWrapperItem',
    setup() {
        const data = [
            {
                name: '(Form to) Giày sục n.y siêu phẩm hot nhất năm',
                url: 'https://cf.shopee.vn/file/b4996ba0a0e31580482a401b203a8409_tn',
                favorite: true,
                discount: 0,
                mall: true,
                price: '29.000đ',
                sold: '376'
            },
            {
                name: 'Áo sweater nam nữ from rộng , áo hoodie unisex nhiều chữ Shop Mẹ Bon 89',
                url: 'https://cf.shopee.vn/file/96f1c59d4dc5357d9307ed992e05d82b_tn',
                favorite: false,
                discount: 50,
                mall: false,
                price: '14.000đ',
                sold: '2,6k'
            },
            {
                name: 'Sách - Món quà tặng con - 50 bài thơ+50 bài hát kèm QR code file nghe cho bé 2-8 tuổi - Nguyễn Mai Long (Quà cho con 2)',
                url: 'https://cf.shopee.vn/file/4062dc344358533ecd9247ebfc8c9e78_tn',
                favorite: false,
                discount: 20,
                mall: true,
                price: '156.800đ',
                sold: '6k'
            },
            {
                name: '[CÓ SẴN] Dầu xả Lành thảo dược QUÊ MỘT CỤC',
                url: 'https://cf.shopee.vn/file/0ce67401135a63ea19040bf478f3288c_tn',
                favorite: false,
                discount: 21,
                mall: false,
                price: '149.000đ',
                sold: '11'
            },
            {
                name: 'Áo khoác bomber nam nữ nỉ Kaki unisex form rộng ulzzang Hàn Quốc siêu hot, trẻ trung, năng động',
                url: 'https://cf.shopee.vn/file/955a5ac4ede89dfa4b5e651673033254_tn',
                favorite: false,
                discount: 50,
                mall: false,
                price: '49.500đ',
                sold: '1,8k'
            },
            {
                name: 'Áo mặt cười dáng xuông tay dài',
                url: 'https://cf.shopee.vn/file/c2e4563fb41cde4d14e3e288bf44c0b8_tn',
                favorite: true,
                discount: 0,
                mall: false,
                price: '35.000đ',
                sold: '1,2k'
            },
            {
                name: 'Áo khoác nỉ bomber bóng chày LB 🌸 Áo khoác nam nữ ulzzang Hoddie sweater form rộng thể thao K34',
                url: 'https://cf.shopee.vn/file/6e77099833ddd3dfba500ad9fb1f5269_tn',
                favorite: false,
                discount: 50,
                mall: false,
                price: '12.300đ',
                sold: '3,3k'
            },
            {
                name: 'Máy chơi game Nintendo Switch V2 Animal Crossing, bảo hành 12 tháng kèm quà tặng',
                url: 'https://cf.shopee.vn/file/bb1af8faa83b27b767b078121d27f172_tn',
                favorite: true,
                discount: 34,
                mall: false,
                price: '6.600.000đ',
                sold: '11'
            },
            {
                name: '[ Full Box + Bill 🌺] Giày sneaker 𝐌𝐋𝐁 Boston , NY , LA - Giày độn đế kiểu dáng hàn quốc BẢN ĐẸP',
                url: 'https://cf.shopee.vn/file/1e60a68b08f10b1f7835f70c1a68b063_tn',
                favorite: false,
                discount: 38,
                mall: false,
                price: '49.600đ',
                sold: '237'
            },
            {
                name: 'Áo giữ nhiệt LÓT NỈ cho bạn nữ, mềm, mịn, co giãn',
                url: 'https://cf.shopee.vn/file/bcf2b2930e013c156f6b2178e09e8f53_tn',
                favorite: false,
                discount: 46,
                mall: false,
                price: '16.000đ',
                sold: '7,3k'
            },
            {
                name: 'Clutch Golf Dolo Men PKG01',
                url: 'https://cf.shopee.vn/file/73894e51a48626868f85659adc744a6a_tn',
                favorite: false,
                discount: 0,
                mall: true,
                price: '2.850.000đ',
                sold: '0'
            },
            {
                name: 'ÁO NỈ KHOÁ THÊU LÔ GÔ BÒ TAY CHUN CHỐT GẤU',
                url: 'https://cf.shopee.vn/file/a1d835307a9716eb0f61f7f8cb2c08d7_tn',
                favorite: true,
                discount: 0,
                mall: false,
                price: '55.000đ',
                sold: '1,2k'
            },
            {
                name: '( Phom Bé) Dép Bánh Mì Unisex Hot Hít',
                url: 'https://cf.shopee.vn/file/33a4ce586959857c6465a82c632a592a_tn',
                favorite: false,
                discount: 50,
                mall: false,
                price: '9.999đ',
                sold: '6,2k'
            },
            {
                name: 'Áo hoodie gấu má phính H2Q677',
                url: 'https://cf.shopee.vn/file/6fb1f554c05f637637e91ecd753fe01c_tn',
                favorite: true,
                discount: 0,
                mall: false,
                price: '35.000đ',
                sold: '8,8k'
            }
        ]

        return{
            data
        }
    },
    methods: {
        url: function (url) {
            return `background-image: url(${url});`;
        }
    }
}
</script>

<style scoped>
.wrapper__item{
    height: 29.7rem;
}

.wrapper__link{
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .3);
}

.wrapper__link:hover{
    border: 1px solid var(--primary-color);
    transform: translateY(-2px);
    transition: transform .1s
}

.wrapper__item__bottom__name{
    color: var(--text-color);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}

.wrapper__link__label-favorite{
    top: .5rem;
    left: -.5rem;
    height: 1.6rem;
    width: 6rem;
    background-color: var(--primary-color);
    color: var(--white-color);
    font-size: 1.2rem;
}

.wrapper__link__label-favorite::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    border-top: 3px solid var(--primary-color);
    border-left: 3px solid transparent;
    filter: brightness(60%);
}

.wrapper__link__label-mall{
    top: 2.8rem;
    left: -.5rem;
    height: 1.6rem;
    width: 3rem;
    color: var(--white-color);
    font-size: 1.2rem;
}

.wrapper__link__label-mall::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    border-top: 3px solid var(--primary-color);
    border-left: 3px solid transparent;
    filter: brightness(50%);
}

.wrapper__link__label-discount{
    top: 0;
    right: 0;
    width: 3.2rem;
    height: 3.2rem;
    font-size: 1.2rem;
}

.wrapper__link__label-discount::before {
    content: '';
    position: absolute;
    display: block;
    border-width: 1px 16px 6px;
    border-style: solid;
    bottom: -6px;
    border-color: #ffd839 #ffd839 transparent #ffd839;
}


.see-more{
    border: 1px solid #ddd;
}

.see-more:hover{
    background: rgba(0,0,0,.02);
}
</style>