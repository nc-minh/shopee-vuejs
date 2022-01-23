<template>
  <div class="footer-contact pt-20">
      <ul class="footer-contact__list flex pb-14">
          <li class="footer-contact__item w-1/5">
              <h5 class="footer-contact__name mb-4">CHĂM SÓC KHÁCH HÀNG</h5>
              <div class="footer-contact__item-wrapper flex flex-col items-start">
                <a v-for="(item, index) in dataCustomerCare" :key="index" href="/" class="footer-contact--link my-1">{{ item }}</a>
              </div>
          </li>
          <li class="footer-contact__item w-1/5">
              <h5 class="footer-contact__name mb-4">VỀ SHOPEE</h5>
              <div class="footer-contact__item-wrapper flex flex-col items-start">
                <a v-for="(item, index) in dataAboutShopee" :key="index" href="/" class="footer-contact--link my-1">{{ item }}</a>
              </div>
          </li>
          <li class="footer-contact__item w-1/5">
              <div class="footer-contact__item-group">
                <h5 class="footer-contact__name mb-4">THANH TOÁN</h5>
                <div class="footer-contact__item-wrapper flex flex-wrap items-center">
                    <div class="footer-contact--img footer-vn-visa-png"></div>
                    <div class="footer-contact--img footer-vn-mastercard-png"></div>
                    <div class="footer-contact--img footer-vn-jcb-png"></div>
                    <div class="footer-contact--img footer-vn-amex-png"></div>
                    <div class="footer-contact--img footer-vn-vn_cod_footer-png"></div>
                    <div class="footer-contact--img footer-vn-vn_installment_footer-png"></div>
                    <div class="footer-contact--img footer-vn-shopeepay-png"></div>
                </div>
              </div>
              <div class="footer-contact__item-group">
                <h5 class="footer-contact__name mb-4">ĐƠN VỊ VẬN CHUYỂN</h5>
                <div class="footer-contact__item-wrapper flex flex-wrap items-center">
                    <div class="footer-contact--img footer-vn-shopee-express-png"></div>
                    <div class="footer-contact--img footer-vn-ghtk-png"></div>
                    <div class="footer-contact--img footer-vn-ghn-png"></div>
                    <div class="footer-contact--img footer-vn-viettel_post-png"></div>
                    <div class="footer-contact--img footer-vn-vnpost-png"></div>
                    <div class="footer-contact--img footer-vn-vn_jnt_footer-png"></div>
                    <div class="footer-contact--img footer-vn-grab_express-png"></div>
                    <div class="footer-contact--img footer-vn-ninja-van-png"></div>
                    <div class="footer-contact--img footer-vn-best-express-png"></div>
                </div>
              </div>
          </li>
          <li class="footer-contact__item w-1/5">
              <h5 class="footer-contact__name mb-4">THEO DÕI CHÚNG TÔI TRÊN</h5>
              <div class="footer-contact__item-wrapper flex flex-col items-start">
                <a href="/" class="footer-contact--link my-1 flex"><i class="fab fa-facebook icon mr-2"></i>Facebook</a>
                <a href="/" class="footer-contact--link my-1 flex"><i class="fab fa-instagram-square icon mr-2"></i>Instagram</a>
                <a href="/" class="footer-contact--link my-1 flex"><i class="fab fa-linkedin icon mr-2"></i>LinkedIn</a>
              </div>
          </li>
          <li class="footer-contact__item w-1/5">
              <h5 class="footer-contact__name mb-4">TẢI ỨNG DỤNG SHOPEE NGAY THÔI</h5>
              <div class="footer-contact__item-wrapper flex items-center">
                <a href="/" class="footer-contact--link w-40 h-40">
                    <div :style="url(qr)" class="footer-contact--link-qr w-full h-full bg-contain bg-no-repeat bg-center"></div>
                </a>
                <div class="footer-contact--link-wrapper flex-1 ml-2">
                    <a v-for="(item, index) in app" :key="index" href="/">
                        <div :style="url(item)" class="footer-contact--link-img w-36 h-10 bg-contain bg-center bg-no-repeat my-1"></div>
                    </a>
                </div>
              </div>
          </li>
      </ul>

      <div class="footer-contact__area flex justify-between py-16">
          <div class="footer-contact__area-left mr-10">&copy; 2022 Shopee. Tất cả các quyền được bảo lưu.</div>
          <div class="footer-contact__area-right flex flex-wrap justify-center">
              <div class="footer-contact__area-right__name text-right">Quốc gia &amp; Khu vực:</div>
              <a v-for="(item, index) in country" :key="index" href="" class="relative footer-contact__area-right__link">
                  <div class="footer-contact__area-right__item px-2">{{ item }}</div>
              </a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'FooterContact',
    setup(){
        const dataCustomerCare = [
            'Trung Tâm Trợ Giúp',
            'Shopee Blog',
            'Shopee Mall',
            'Hướng Dẫn Mua Hàng',
            'Hướng Dẫn Bán Hàng',
            'Thanh Toán',
            'Shopee Xu',
            'Vận Chuyển',
            'Trả Hàng & Hoàn Tiền',
            'Chăm Sóc Khách Hàng',
            'Chính Sách Bảo Hành'
        ]
        const dataAboutShopee = [
            'Giới Thiệu Về Shopee Việt Nam',
            'Tuyển Dụng',
            'Điều Khoản Shopee',
            'Chính Sách Bảo Mật',
            'Chính Hãng',
            'Chính Hãng',
            'Flash Sales',
            'Chương Trình Tiếp Thị Liên Kết Shopee',
            'Liên Hệ Với Truyền Thông'
        ]

        const dataIcon = 'https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/4bdefde103e8aa245cd17511adde9f89.png'
        const qr = 'https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/d91264e165ed6facc6178994d5afae79.png'
        const app = [
            'https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png',
            'https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png',
            'https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png'
        ]

        const country = [
            'Singapore',
            'Indonesia',
            'Đài Loan',
            'Thái Lan',
            'Malaysia',
            'Việt Nam',
            'Philippines',
            'Brazil',
            'México',
            'Colombia',
            'Chile',
            'Poland',
            'Spain',
            'France',
            'India',
            'Argentina'
        ]

        return{
            dataCustomerCare,
            dataAboutShopee,
            dataIcon,
            qr,
            app,
            country
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
.footer-contact__name{
    text-align: left;
    font-size: 1.3rem;
    font-weight: 600;
}

.footer-contact__item{
    padding-right: 1rem;
}

.footer-contact__item-wrapper{
    font-size: 1.3rem;
    color: rgba(0,0,0,.54);
    width: 20rem;
}

.footer-contact--link{
    text-align: left;
}

.footer-contact--link:hover{
  color: var(--primary-color)
}

.icon{
    font-size: 1.6rem;
}

.footer-contact--img{
    width: 5.5rem;
    height: 2.9rem;
    margin-bottom: .5rem;
    margin-right: .5rem;
    background-image: url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/4bdefde103e8aa245cd17511adde9f89.png');
}

.footer-vn-visa-png{
    background-size: 1347.2727272727273% 983.3333333333334%;
    background-position: 84.6938775510204% 6.289308176100629%;
    height: 1.8rem;
}

.footer-vn-mastercard-png{
    background-size: 1347.2727272727273% 610.3448275862069%;
    background-position: 49.416909620991255% 41.891891891891895%;
}

.footer-vn-jcb-png{
    background-size: 1347.2727272727273% 769.5652173913044%;
    background-position: 38.48396501457726% 38.311688311688314%;
    height: 2rem;
}

.footer-vn-amex-png{
    background-size: 1482% 804.5454545454545%;
    background-position: 1.447178002894356% 6.451612903225806%;
}

.footer-vn-vn_cod_footer-png{
    background-size: 1482% 610.3448275862069%;
    background-position: 59.91316931982634% 63.513513513513516%;
}

.footer-vn-vn_installment_footer-png{
    background-size: 1347.2727272727273% 610.3448275862069%;
    background-position: 19.97084548104956% 66.21621621621621%;
}

.footer-vn-shopeepay-png{
    background-size: 658% 400%;
    background-position: 71.9188767550702% 6.329113924050633%;
}

/*  */
.footer-vn-shopee-express-png{
    background-size: 667.5675675675676% 983.3333333333334%;
    background-position: 65.71428571428571% 35.22012578616352%;
}

.footer-vn-ghtk-png{
    background-size: 1347.2727272727273% 983.3333333333334%;
    background-position: 19.97084548104956% 37.735849056603776%;
}

.footer-vn-ghn-png{
    background-size: 1347.2727272727273% 610.3448275862069%;
    background-position: 9.037900874635568% 40.54054054054054%;
}

.footer-vn-viettel_post-png{
    background-size: 578.90625% 138.28125%;
    background-position: 88.90701468189233% 100%;
}

.footer-vn-vnpost-png{
    background-size: 1347.2727272727273% 655.5555555555555%;
    background-position: 1.4577259475218658% 72.66666666666667%;
}

.footer-vn-vn_jnt_footer-png{
    background-size: 1347.2727272727273% 1106.25%;
    background-position: 95.6268221574344% 6.211180124223603%;
}

.footer-vn-grab_express-png{
    background-size: 552.9850746268656% 610.3448275862069%;
    background-position: 29.9835255354201% 6.756756756756757%;
}

.footer-vn-ninja-van-png{
    background-size: 1235% 680.7692307692307%;
    background-position: 55.947136563876654% 6.622516556291391%;
}

.footer-vn-best-express-png{
    background-size: 1029.1666666666667% 590%;
    background-position: 13.452914798206278% 6.802721088435374%;
}

.footer-contact__area{
    color: rgba(0,0,0,.54);
    font-size: 1.4rem;
    border-top: 1px solid #ccc;
}

.footer-contact__area-right__link::after{
    content: '';
    display: block;
    height: 100%;
    width: 1px;
    background-color: #ccc;
    position: absolute;
    right: 0;
    top: 0;
}
</style>