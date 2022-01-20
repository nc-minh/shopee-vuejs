<template>
  <header class="header">
      <nav class="header__nav flex justify-between items-center py-3 w-1200 m-auto">
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
          <li class="header__nav__item header__nav__item__line px-3">
            <a href="/" class="header__nav__link">Đăng Ký</a>
          </li>
          <li class="header__nav__item pl-3">
            <a href="/" class="header__nav__link">Đăng Nhập</a>
          </li>
        </ul>
      </nav>
      <SearchHeader class="w-1200 m-auto"/>
  </header>
</template>

<script>
import SearchHeader from './SearchHeader.vue'
export default {
  name: 'HeaderHome',
  components: {
    SearchHeader
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
</style>