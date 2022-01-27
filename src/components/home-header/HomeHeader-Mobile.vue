<template>
  <div class="header__nav__mobile-tablet h-full flex items-center px-4">
      <div class="header__nav__mobile-tablet__search flex flex-1 bg-white h-14 items-center rounded">
          <div class="header__nav__mobile-tablet__search-icon mx-4 text-4xl cursor-pointer">
              <i class="far fa-search"></i>
          </div>
          <input type="text" class="header__nav__mobile-tablet__search-input flex-1 outline-none border-none text-2xl " placeholder="Tìm sản phẩm, tên shop">
          <div class="header__nav__mobile-tablet__search-camera mx-4 text-4xl">
              <i class="far fa-camera"></i>
          </div>
      </div>

      <div class="header__nav__mobile-tablet__cart text-4xl text-white">
          <div class="header__nav__mobile-tablet__cart-icon ml-6 cursor-pointer">
              <i class="far fa-shopping-cart"></i>
          </div>
      </div>

      <div class="header__nav__mobile-tablet__chat text-4xl text-white">
          <div class="header__nav__mobile-tablet__chat-icon ml-6 cursor-pointer">
              <i class="fal fa-comment-dots"></i>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'HomeHeader-Mobile'
}
</script>

<style>

</style>