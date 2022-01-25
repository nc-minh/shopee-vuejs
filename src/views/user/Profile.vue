<template>
  <div class="profile bg-white p-8">
    <div class="profile__header pb-8">
      <h2 class="profile__header-title text-3xl">Hồ Sơ Của Tôi</h2>
      <div class="profile__header-desc text-2xl">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
    </div>

    <div class="profile__wrapper flex text-2xl pt-8">
      <div class="profile__left flex-1">
        <div class="profile__left__item flex py-8">
          <label for="/" class="profile__left__item-label w-60 text-right">Tên Người Dùng</label>
          <div class="profile__left__item-text flex-1 pl-10">nc-minh</div>
        </div>
        <div class="profile__left__item flex py-8">
          <label for="/" class="profile__left__item-label w-60 text-right">Email</label>
          <div class="profile__left__item-text flex-1 pl-10">nguyencongminh.official@gmail.com</div>
        </div>
        <div class="profile__left__item flex py-8">
          <label for="/" class="profile__left__item-label w-60 text-right">Địa Chỉ</label>
          <div class="profile__left__item-text flex-1 pl-10">đây là địa chỉ nhé</div>
        </div>
      </div>

      <div class="profile__right pl-32">
        <div class="profile__right__avatar flex flex-col items-center justify-center">
          <div :style="url(imgUrl)" class="profile__right__img h-40 w-40 rounded-full bg-cover"></div>
          <button class="profile__right__btn my-4">Chọn Ảnh</button>
          <div class="profile__right__note">Dung lượng file tối đa 1 MB</div>
          <div class="profile__right__note">Định dạng: jpg, png...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Profile',
    setup(){
      var imgUrl = 'https://freenice.net/wp-content/uploads/2021/10/Hinh-ve-don-gian-cute-dang-yeu-va-de-thuc-hien.jpg'

      return{
        imgUrl
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
.profile__header{
  border-bottom: 1px solid #ddd;
}

.profile__right__btn{
  width: 12rem;
  height: 4rem;
  border: 1px solid #ddd;
}

.profile__right__btn:hover{
  background-color: rgba(0, 0, 0, 0.02);
}

.profile__right{
  border-left: 1px solid #ddd;
}
</style>