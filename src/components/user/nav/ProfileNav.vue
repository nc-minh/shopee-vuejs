<template>
  <div class="profile-nav">
      <div class="profile-nav__avatart flex items-center justify-start">
          <a href="/" class="profile-nav--link block w-24 h-24 rounded-full overflow-hidden">
            <img :src="imgUrl" alt="" class="profile-nav--link__img w-full h-full">
          </a>
          <div class="profile-nav__link--edit text-2xl ml-4">
              <div class="profile-nav__link--edit__user font-semibold">nc-minh</div>
              <router-link class="profile-nav__link--edit__icon text-text-gray-color-f2" to="/user/account/profile">
                <i class="fas fa-pencil-alt"></i>
                <span>Sửa Hồ Sơ</span>
              </router-link>
          </div>
      </div>

      <ul class="profile-nav__list pt-16 text-2xl">
          <li class="profile-nav__item">
              <div class="profile-nav__item-header py-4">
                  <router-link :class="{'dropdown--open': bindClass(0)}" class="profile-nav__item-header--link" @click="openProfile(), setSelectedItem(0)" to="/user/account/profile">
                    <i class="fal fa-user mr-2 text-blue-700"></i>
                    <span>Tài Khoản Của Tôi</span>
                  </router-link>
              </div>
              <div v-if="isProfile" class="profile-nav__item-dropdown flex flex-col pl-8">
                  <router-link 
                    :to="item.url"
                    :class="{'dropdown--open': isSelectedProfile == index}"
                    v-for="(item, index) in profile"
                    :key="index"
                    @click="setSelectedProfile(index)" 
                    class="profile-nav__item-dropdown--link py-2"
                    >{{ item.name }}</router-link>
              </div>
          </li>
          <li class="profile-nav__item">
              <div :class="{'dropdown--open': bindClass(1)}" class="profile-nav__item-header py-4">
                  <span href="/" class="profile-nav__item-header--link" @click="setSelectedItem(1), CloseDropDown()">
                    <i class="far fa-clipboard-list mr-2 text-blue-700"></i>
                    <span>Đơn Mua</span>
                  </span>
              </div>
          </li>
          <li class="profile-nav__item">
              <div :class="{'dropdown--open': bindClass(2)}" class="profile-nav__item-header py-4">
                  <span href="/" class="profile-nav__item-header--link" @click="openNotify(), setSelectedItem(2)">
                    <i class="fal fa-bell mr-2 text-blue-700"></i>
                    <span>Thông Báo</span>
                  </span>
              </div>
              <div v-if="isNotify" class="profile-nav__item-dropdown flex flex-col pl-8">
                  <div :class="{'dropdown--open': isSelectedNotify == index}" v-for="(item, index) in notify" :key="index" @click="setSelectedNotify(index)" class="profile-nav__item-dropdown--link py-2">{{ item }}</div>
              </div>
          </li>
          <li class="profile-nav__item">
              <div :class="{'dropdown--open': bindClass(3)}" class="profile-nav__item-header py-4">
                  <span href="/" class="profile-nav__item-header--link" @click="setSelectedItem(3), CloseDropDown()">
                    <i class="fal fa-credit-card-front mr-2 text-blue-700"></i>
                    <span>Kho Voucher</span>
                  </span>
              </div>
          </li>
          <li class="profile-nav__item">
              <div :class="{'dropdown--open': bindClass(4)}" class="profile-nav__item-header py-4" @click="setSelectedItem(4), CloseDropDown()">
                  <span href="/" class="profile-nav__item-header--link">
                    <i class="far fa-usd-circle mr-2 text-blue-700"></i>
                    <span>Shopee Xu</span>
                  </span>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'ProfileNav',
    data(){
        return{
            isSelectedProfile: 0,
            isSelectedNotify: 0,
            isProfile: true,
            isNotify: false,
            isSelectedItem: 0
        }
    },
    setup(){
        var imgUrl = 'https://freenice.net/wp-content/uploads/2021/10/Hinh-ve-don-gian-cute-dang-yeu-va-de-thuc-hien.jpg'

        var profile = [
            {
                name: 'Hồ Sơ',
                url: '/user/account/profile'
            },
            {
                name: 'Ngân Hàng',
                url: '/user/account/bank'
            },
            {
                name: 'Địa Chỉ',
                url: '/user/account/address'
            },
            {
                name: 'Đổi Mật Khẩu',
                url: '/user/account/password'
            }
        ]
        var notify = [
            'Cập Nhật Đơn Hàng',
            'Khuyến Mãi',
            'Cập Nhật Ví',
            'Hoạt Động',
            'Cập Nhật Đánh Giá',
            'Cập Nhật Shopee'
        ]

        return{
            imgUrl,
            profile,
            notify
        }
    },
    methods: {
        setSelectedProfile(index){
            this.isSelectedProfile = index
        },
        setSelectedNotify(index){
            this.isSelectedNotify = index
        },
        openProfile(){
            this.isProfile = true
            this.isNotify = false
            this.isSelectedProfile = 0
        },
        openNotify(){
            this.isNotify = true
            this.isProfile = false
            this.isSelectedNotify = 0
        },
        CloseDropDown(){
            this.isNotify = false
            this.isProfile = false
        },
        setSelectedItem(index){
            this.isSelectedItem = index
            console.log(this.isSelectedItem)
        },
        bindClass(index){
            return this.isSelectedItem === index
        }
    }
}
</script>

<style scoped>
.dropdown--open{
    color: var(--primary-color);
}

.profile-nav__item-dropdown--link,
.profile-nav__item-header--link{
    cursor: pointer;
}

.profile-nav__item-dropdown{
    transition: .5s;
}
</style>