<template>
  <header class="header">
      <nav class="header__nav flex justify-between py-3">
        <ul class="header__nav__list flex text-xl">
          <li class="header__nav__item px-5">
            <router-link class="header__nav__link" to="/about">Kênh Người Bán</router-link>
          </li>
          <li class="header__nav__item px-5">
            <a href="/" class="header__nav__link">Trở Thành Người Bán Shopee</a>
          </li>
          <li class="header__nav__item px-5">
            <a href="/" class="header__nav__link">Tải Ứng Dụng</a>
          </li>
          <li class="header__nav__item px-5">
            <a href="/" class="header__nav__link">Kết Nối</a>
          </li>
        </ul>

        <ul class="header__nav__list flex text-xl">
          <li class="header__nav__item px-5">
            <a href="/" class="header__nav__link">Thông Báo</a>
          </li>
          <li class="header__nav__item px-5">
            <a href="/" class="header__nav__link">Hỗ trợ</a>
          </li>
          <li class="header__nav__item px-5">
            <a href="/" class="header__nav__link">Tiếng Việt</a>
          </li>
          <li class="header__nav__item px-5">
            <a href="/" class="header__nav__link">Đăng Ký</a>
          </li>
        </ul>
      </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderHome'
}
</script>

<style>
  .header{
    background-color: var(--primary-color);
    height: 11.9rem;
  }

  .header__nav__link{
    color: var(--text-white-color);
  }
</style>