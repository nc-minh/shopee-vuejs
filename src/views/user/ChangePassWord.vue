<template>
  <div class="password bg-white p-8">
    <div class="password__header pb-8">
      <div class="password__header-title">
        <h2 class="profile__header-title text-3xl">Đổi Mật Khẩu</h2>
        <div class="profile__header-desc text-2xl">Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</div>
      </div>
    </div>

    <div class="password__content flex items-center justify-center text-2xl">
      <div class="password__content-left py-8 flex flex-col items-center">
        <div class="password__content-left__item flex items-center my-6">
          <label for="currentpassword" class="password__content-left__label w-72 block text-right pr-8">Mật Khẩu Hiện Tại</label>
          <input type="text" name="currentpassword" id="currentpassword" class="password__content-left__input px-4">
        </div>
        <div class="password__content-left__item flex items-center my-6">
          <label for="newpassword" class="password__content-left__label w-72 block text-right pr-8">Mật Khẩu Mới</label>
          <input type="text" name="newpassword" id="newpassword" class="password__content-left__input px-4">
        </div>
        <div class="password__content-left__item flex items-center my-6">
          <label for="confirmpassword" class="password__content-left__label w-72 block text-right pr-8">Xác Nhận Mật Khẩu</label>
          <input type="text" name="confirmpassword" id="confirmpassword" class="password__content-left__input px-4">
        </div>
        <div class="password__content-left__item flex items-center my-6">
          <button class="password__content-left__item-btn bg-primary-color h-16 w-40 text-white relative">Xác Nhận</button>
        </div>
      </div>

      <div class="password__content-right pl-10 relative w-72 h-full">
        <a class="password__content-right__item hover:text-primary-color absolute" href="">Quên mật khẩu?</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.password__header{
  border-bottom: 1px solid #ddd;
}

.password__content-left__input{
  height: 4rem;
  width: 36rem;
  border: 1px solid #ccc;
}

.password__content-right__item{
  top: -11.5rem;
}

.password__content-left__item-btn{
  left: -4rem;
}
</style>