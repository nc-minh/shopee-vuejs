<template>
  <div class="category w-1200 m-auto mt-10 bg-white">
    <div class="category__top h-24 flex items-center border-b-2 border-solid">
      <div class="category__top__text ml-8 text-3xl">DANH MỤC</div>
    </div>

    <div class="category__wrapper overflow-hidden">
      <ul class="category__wrapper__list flex">
        <li v-for="(item, index) in list" :key="index" class="category__wrapper__item">
          <a href="" class="
              category__wrapper__link
              flex flex-col
              items-center
              justify-center
            "
          >
            <div
              class="category__wrapper__link__img bg-contain bg-no-repeat"
              :style="url(item.url1)"
            ></div>
            <div class="category__wrapper__link__text flex-1 text-xl">
              {{ item.text1 }}
            </div>
          </a>
          <a
            href=""
            class="
              category__wrapper__link
              flex flex-col
              items-center
              justify-center
            "
          >
            <div
              class="category__wrapper__link__img bg-contain bg-no-repeat"
              :style="url(item.url2)"
            ></div>
            <div class="category__wrapper__link__text flex-1 text-xl">
              {{ item.text2 }}
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCategory",
  setup() {
    const list = [
      {
        url1: "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
        text1: "Thời Trang Nam",
        url2: "https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
        text2: "Thời Trang Nữ",
      },
      {
        url1: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
        text1: "Điện Thoại & Phụ Kiện",
        url2: "https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn",
        text2: "Mẹ & Bé",
      },
      {
        url1: "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn",
        text1: "Thiết Bị Điện Tử",
        url2: "https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn",
        text2: "Nhà Cửa & Đời Sống",
      },
      {
        url1: "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
        text1: "Máy Tính & Laptop",
        url2: "https://cf.shopee.vn/file/c765998fda99b2be9eb6e348df29af28_tn",
        text2: "Sắc Đẹp",
      },
      {
        url1: "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn",
        text1: "Máy Ảnh & Máy Quay Phim",
        url2: "https://cf.shopee.vn/file/bf87b50b463f646bb7fb8a1a606d9ed2_tn",
        text2: "Sức Khỏe",
      },
      {
        url1: "https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn",
        text1: "Đồng Hồ",
        url2: "https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn",
        text2: "Giày Dép Nữ",
      },
      {
        url1: "https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn",
        text1: "Giày Dép Nam",
        url2: "https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn",
        text2: "Túi Ví Nữ",
      },
      {
        url1: "https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn",
        text1: "Thiết Bị Điện Gia Dụng",
        url2: "https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn",
        text2: "Phụ Kiện & Trang Sức Nữ",
      },
      {
        url1: "https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn",
        text1: "Thể Thao & Du Lịch",
        url2: "https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn",
        text2: "Bách Hóa Online",
      },
      {
        url1: "https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn",
        text1: "Ô Tô & Xe Máy & Xe Đạp",
        url2: "https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn",
        text2: "Nhà Sách Online",
      },
      {
        url1: "https://cf.shopee.vn/file/18fd9d878ad946db2f1bf4e33760c86f_tn",
        text1: "Balo & Túi Ví Nam",
        url2: "https://cf.shopee.vn/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn",
        text2: "Thời Trang Trẻ Em",
      },
      {
        url1: "https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn",
        text1: "Đồ Chơi",
        url2: "https://cf.shopee.vn/file/cd8e0d2e6c14c4904058ae20821d0763_tn",
        text2: "Giặt Giũ & Chăm Sóc Nhà Cửa",
      },
      {
        url1: "https://cf.shopee.vn/file/cdf21b1bf4bfff257efe29054ecea1ec_tn",
        text1: "Chăm Sóc Thú Cưng",
        url2: "https://cf.shopee.vn/file/b0f78c3136d2d78d49af71dd1c3f38c1_tn",
        text2: "Voucher & Dịch Vụ",
      },
    ];

    return {
      list
    };
  },
  methods: {
    url: function (url) {
      return `background-image: url(${url});`;
    }
  },
  components: {
      
  },
};
</script>

<style scoped>
.category__wrapper__link {
  width: 12rem;
  height: 15rem;
  border: 1px solid #ccc;
}

.category__wrapper__link__img {
  width: 70%;
  height: 70%;
  margin-top: 10%;
}
</style>