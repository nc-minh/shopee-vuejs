<template>
  <div class="footer-bottom text-text-gray-color pb-10">
      <div class="footer-bottom__header flex justify-center items-center text-xl py-10">
          <div class="footer-bottom__header__item px-2">
              <a href="/" class="footer-bottom__header--link">CHÍNH SÁCH BẢO MẬT</a>
          </div>
          <div class="footer-bottom__header__item px-2">
              <a href="/" class="footer-bottom__header--link">QUY CHẾ HOẠT ĐỘNG</a>
          </div>
          <div class="footer-bottom__header__item px-2">
              <a href="/" class="footer-bottom__header--link">CHÍNH SÁCH VẬN CHUYỂN</a>
          </div>
          <div class="footer-bottom__header__item px-2">
              <a href="/" class="footer-bottom__header--link">CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</a>
          </div>
      </div>
      <div class="footer-bottom__item pb-5">
          <a class="hover:text-primary-color" target="_blank" href="https://github.com/nc-minh/shopee-vuejs">
            <i class="fab fa-github text-7xl"></i>
          </a>
      </div>
      <div class="footer-bottom__item text-xl py-2">Công ty TNHH Shopee</div>
      <div class="footer-bottom__item text-xl py-2">Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</div>
      <div class="footer-bottom__item text-xl py-2">Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)</div>
      <div class="footer-bottom__item text-xl py-2">Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch &amp; Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</div>
      <div class="footer-bottom__item text-xl py-2">&copy; 2022 - Bản quyền thuộc NguyenCongMinh</div>
      <div class="footer-bottom__item text-xl py-2">Đây là bản mang tính chất học tập mọi thắc mắc xin liên hệ thông tin trong <a href="https://github.com/nc-minh/shopee-vuejs" class="hover:text-primary-color">GITHUB</a></div>
      <div class="footer-bottom__item text-xl py-2">This is a learning version, if you have any questions, please contact the information in <a href="https://github.com/nc-minh/shopee-vuejs" class="hover:text-primary-color">GITHUB</a></div>
  </div>
</template>

<script>
export default {
    name: 'FooterBottom'
}
</script>

<style scoped>
.footer-bottom__header__item{
    position: relative;
    padding: 0 1rem;
}

.footer-bottom__header__item::after{
    position: absolute;
    content: '';
    display: block;
    height: 100%;
    width: 1px;
    background-color: #ccc;
    top: 0;
    right: 0;
}

.footer-bottom__header__item:last-child::after{
    display: none;
}
</style>