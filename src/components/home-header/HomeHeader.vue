<template>
  <header class="header">
      <nav class="header__nav mx-w-1200 flex justify-between items-center py-3 m-auto">
        <ul class="header__nav__list header__nav__list__left flex items-center text-xl">
          <li class="header__nav__item px-4">
            <router-link class="header__nav__link" to="/about">Kênh Người Bán</router-link>
          </li>
          <li class="header__nav__item px-4">
            <a href="/" class="header__nav__link">Trở Thành Người Bán Shopee</a>
          </li>
          <li class="header__nav__item px-4">
            <router-link class="header__nav__link" to="/">Tải Ứng Dụng</router-link>
          </li>
          <li class="header__nav__item px-4">
            <span href="/" class="header__nav__link__wapper flex items-center">
              <span class="header__nav__item__connect">Kết Nối</span>
              <a class="header__nav__link__a ml-2 text-2xl" href="">
                <i class="fab fa-facebook"></i>
              </a>
              <a class="header__nav__link__a ml-2 text-2xl" href="">
                <i class="fab fa-instagram"></i>
              </a>
            </span>
          </li>
        </ul>

        <ul class="header__nav__list flex items-center text-xl">
          <li class="header__nav__item px-4">
            <a href="/" class="header__nav__link">
              <i class="fal fa-bell text-2xl"></i>
              <span class="pl-2">Thông Báo</span>
            </a>
          </li>
          <li class="header__nav__item px-4">
            <a href="/" class="header__nav__link">
              <i class="fal fa-question-circle text-2xl"></i>
               <span class="pl-2">Hỗ trợ</span>
            </a>
          </li>
          <li class="header__nav__item px-4">
            <a href="/" class="header__nav__link flex items-center">
              <i class="fal fa-globe text-2xl"></i>
                <span class="px-2 header__nav__item__connect">Tiếng Việt</span>
              <i class="far fa-angle-down text-2xl"></i>
            </a>
          </li>
          <li v-if="isLogin" class="header__nav__item header__nav__item__line px-3">
            <router-link class="header__nav__link" to="/register">Đăng Ký</router-link>
          </li>
          <li v-if="isLogin" class="header__nav__item pl-3">
            <router-link class="header__nav__link" to="/login">Đăng Nhập</router-link>
          </li>
          <li class="header__nav__item pl-3 text-2xl">
            <router-link class="header__nav__link header__nav__link--user flex relative" to="/user/account/profile">
              <div class="header__nav__item__avatar w-8 h-8 overflow-hidden rounded-full mr-2">
                <img :src="imgUrl" alt="" class="header__nav__item__avatar-img h-full w-full">
              </div>
              <span>nc-minh</span>

              <div class="header__nav__item--hover absolute w-56 text-black">
                <ul class="header__nav__item--hover__list bg-white text-left">
                  <li class="header__nav__item--hover__item">
                    <a href="/" class="header__nav__item--hover--link py-4 block pl-4 hover:bg-gray-100 hover:text-green-600">Tài khoản của tôi</a>
                  </li>
                  <li class="header__nav__item--hover__item">
                    <a href="/" class="header__nav__item--hover--link py-4 block pl-4 hover:bg-gray-100 hover:text-green-600">Đơn mua</a>
                  </li>
                  <li class="header__nav__item--hover__item">
                    <a href="/" class="header__nav__item--hover--link py-4 block pl-4 hover:bg-gray-100 hover:text-green-600">Đăng xuất</a>
                  </li>
                </ul>
              </div>
            </router-link>
          </li>
        </ul>
      </nav>
      <SearchHeader class="mx-w-1200 m-auto"/>
  </header>
</template>

<script>
import SearchHeader from './SearchHeader.vue'
export default {
  name: 'HeaderHome',
  components: {
    SearchHeader
  },
  setup(){
    var isLogin = false
    var imgUrl = 'https://freenice.net/wp-content/uploads/2021/10/Hinh-ve-don-gian-cute-dang-yeu-va-de-thuc-hien.jpg'

    return{
      isLogin,
      imgUrl
    }
  }
}
</script>

<style scoped>
.header{
  background-color: var(--primary-color);
  height: 11.9rem;
}

.header__nav__list__left > .header__nav__item{
  position: relative;
}

.header__nav__list__left > .header__nav__item:after{
  content: '';
  display: block;
  height: 80%;
  width: 2px;
  right: 0;
  top: 0;
  background-color: var(--line-primary-color);
  position: absolute;
}

.header__nav__link,
.header__nav__link__wapper{
  color: var(--text-white-color);
}

.header__nav__item__wrapper{
  position: relative;
}

.header__nav__link:hover{
  color: var(--text-white-hover-color);
}

.header__nav__item__line{
  position: relative;
}

.header__nav__item__line:before{
  content: '';
  display: block;
  height: 80%;
  width: 1px;
  right: 0;
  top: 0;
  background-color: var(--line-primary-color);
  position: absolute;
}

.header__nav__item__connect{
  position: relative;
  top: 1px;
}

.header__nav__item--hover{
  top: 2.6rem;
  right: 0;
  display: none;
  transform-origin: calc(100% - 3.2rem) top;
  will-change: transform;
  animation: headerNotifyGrowth ease-in .2s;
}

@keyframes headerNotifyGrowth {
    from {
        opacity: 0;
        transform: scale(0);
    } to {
        opacity: 1;
        transform: scale(1);
    }
}

.header__nav__item--hover::before{
    position: absolute;
    top: -2rem;
    right: 2rem;
    content: '';
    display: block;
    border-color: transparent transparent var(--white-color) transparent;
    border-width: 1rem;
    border-style: solid;
}

.header__nav__item--hover::after{
    position: absolute;
    top: -15px;
    right: 0;
    content: '';
    display: block;
    width: 60%;
    height: 16px;
}

.header__nav__link--user:hover > .header__nav__item--hover{
  display: block;
}
</style>