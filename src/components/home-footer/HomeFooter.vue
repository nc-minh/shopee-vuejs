<template>
  <div class="footer-wrapper">
    <div class="footer mx-w-1200 w-984 m-auto pb-20">
      <div class="footer__header flex flex-col items-start justify-center h-80">
        <h2 class="footer__header__title text-4xl font-semibold">SHOPEE - GÌ CŨNG CÓ, MUA HẾT Ở SHOPEE</h2>
        <p class="footer__header__description text-left text-xl py-4">Shopee - ứng dụng mua sắm trực tuyến thú vị,
          tin cậy, an toàn và miễn phí! Shopee là nền 
          tảng giao dịch trực tuyến hàng đầu ở Đông Nam
          Á, Việt Nam, Singapore, Malaysia, Indonesia, Thái Lan, 
          Philipin, Đài loan và Brazil. Với sự đảm bảo của Shopee, bạn sẽ mua hàng 
          trực tuyến an tâm và nhanh chóng hơn bao giờ hết!</p>
          <button class="footer__header__btn text-primary-color text-2xl">
            Xem Thêm 
            <i class="far fa-angle-right ml-2"></i>
          </button>
      </div>

      <div class="footer__category pt-14">
        <h4 class="footer__category__title text-2xl text-left font-semibold">Danh Mục</h4>
        <ul class="footer__category__list flex pt-6">
          <!-- column start -->
          <li v-for="(itemColumn, index) in data" :key="index" class="footer__category__item w-1/5 pr-3">
            <div class="footer__category__wrapper-item">
              <!-- item start -->
              <div v-for="(itemCategory, index) in itemColumn.item" :key="index" class="footer__category__wrapper-contains">
                <div class="footer__category__wrapper-contains__title text-xl font-semibold text-left py-2">{{ itemCategory.categoryName }}</div>
                <li class="footer__category__wrapper-contains__item list-none text-left text-xl">
                  <a v-for="(link, index) in itemCategory.link" :key="index" href="/" class="footer__category__wrapper-contains__link pr-3 relative inline-block">{{ link.linkName }}</a>
                </li>
              </div>
              <!-- item end -->
            </div>
          </li>
          <!-- column end -->
        </ul>
      </div>
    </div>
    <FooterWrapper/>
  </div>
</template>

<script>
import FooterWrapper from './FooterWrapper.vue'
export default {
    name: 'HomeFooter',
    setup(){
      const data = [
        // đây là số cột
        {
          item: [
            // đây là số hàng trong 1 cột
            {
              categoryName: 'THỜI TRANG NAM',
              link: [
                // đây là số link
                {
                  linkName: 'Áo Khoác'
                },
                {
                  linkName: 'Áo Vest và Blazer'
                },
                {
                  linkName: 'Áo Hoodie'
                },
                {
                  linkName: 'Áo Len và Áo Nỉ'
                },
                {
                  linkName: 'Quần Jeans'
                },
                {
                  linkName: 'Quần Dài/Quần Âu'
                },
                {
                  linkName: 'Quần Short'
                },
                {
                  linkName: 'Áo'
                },
                {
                  linkName: 'Áo Ba Lỗ'
                },
                {
                  linkName: 'Đồ Lót'
                },
                {
                  linkName: 'Đồ Ngủ'
                },
                {
                  linkName: 'Bộ Đồ'
                },
                {
                  linkName: 'Vớ/Tất'
                },
                {
                  linkName: 'Trang Phục Truyền Thống'
                },
                {
                  linkName: 'Đồ Hóa Trang'
                },
                {
                  linkName: 'Trang Phục Ngành Nghề'
                },
                {
                  linkName: 'Khác'
                },
                {
                  linkName: 'Trang Sức Nam'
                },
                {
                  linkName: 'Kính Mắt Nam'
                },
                {
                  linkName: 'Thắt Lưng Nam'
                },
                {
                  linkName: 'Cà vạt và Nơ cổ'
                },
                {
                  linkName: 'Phụ Kiện Nam'
                }
              ]
            },
            {
              categoryName: 'NHÀ CỬA & ĐỜI SỐNG',
              link: [
                {
                  linkName: 'Chăn, Ga, Gối và Đệm'
                },
                {
                  linkName: 'Đồ Nội Thất'
                },
                {
                  linkName: 'Trang trí nhà cửa'
                },
                {
                  linkName: 'Dụng cụ và Thiết bị tiện ích'
                },
                {
                  linkName: 'Đồ dùng nhà bếp và hộp đựng thực phẩm'
                },
                {
                  linkName: 'Đèn'
                },
                {
                  linkName: 'Ngoài trời và Sân Vườn'
                },
                {
                  linkName: 'Đồ dùng phòng tắm'
                },
                {
                  linkName: 'Vật phẩm thờ cúng'
                },
                {
                  linkName: 'Đồ trang trí tiệc'
                },
                {
                  linkName: 'Chăm sóc nhà cửa và giặt ủi'
                },
                {
                  linkName: 'Sắp xếp nhà cửa'
                }
              ]
            },
            {
              categoryName: 'ĐỒNG HỒ',
              link: [
                {
                  linkName: 'Đồng hồ nam'
                },
                {
                  linkName: 'Đồng hồ nữ'
                },
                {
                  linkName: 'Bộ đồng hồ và Đồng hồ cặp'
                },
                {
                  linkName: 'Đồng hồ trẻ em'
                },
                {
                  linkName: 'Khác'
                }
              ]
            },
            {
              categoryName: 'PHỤ KIỆN & TRANG SỨC NỮ',
              link: [
                {
                  linkName: 'Nhẫn'
                },
                {
                  linkName: 'Bông tai'
                },
                {
                  linkName: 'Khăn choàng'
                },
                {
                  linkName: 'Gang tay'
                },
                {
                  linkName: 'Phụ kiện tóc'
                },
                {
                  linkName: 'Vòng tay và Lắc tay'
                },
                {
                  linkName: 'Lắc chân'
                },
                {
                  linkName: 'Mũ'
                },
                {
                  linkName: 'Dây chuyền'
                },
                {
                  linkName: 'Kính mắt'
                },
                {
                  linkName: 'Kim loại quý'
                },
                {
                  linkName: 'Thắt lưng'
                },
                {
                  linkName: 'Cà vạt và Nơ cổ'
                },
                {
                  linkName: 'Phụ kiện thêm'
                },
                {
                  linkName: 'Bộ phụ kiện'
                }
              ]
            },
            {
              categoryName: 'BALO & TÚI VÍ NAM',
              link: [
                {
                  linkName: 'Ba lô nam'
                },
                {
                  linkName: 'Ba lô laptop nam'
                },
                {
                  linkName: 'Túi và Cặp đựng laptop'
                },
                {
                  linkName: 'Túi chống sốc laptop nam'
                },
                {
                  linkName: 'Túi tote nam'
                },
                {
                  linkName: 'Cặp xách công sở nam'
                },
                {
                  linkName: 'Ví cầm tay nam'
                },
                {
                  linkName: 'Túi đeo hông và Túi đeo ngực nam'
                },
                {
                  linkName: 'Bóp/Ví nam'
                },
                {
                  linkName: 'Khác'
                }
              ]
            },
            {
              categoryName: 'VOUCHER & DỊCH VỤ',
              link: [
                {
                  linkName: 'Nhà hàng và Ăn uống'
                },
                {
                  linkName: 'Sự kiện và Giải trí'
                },
                {
                  linkName: 'Nạp tiền tài khoản'
                },
                {
                  linkName: 'Sức khỏe và Làm đẹp'
                },
                {
                  linkName: 'Gọi xe'
                },
                {
                  linkName: 'Khóa học'
                },
                {
                  linkName: 'Du lịch và Khách sạn'
                },
                {
                  linkName: 'Mua sắm'
                },
                {
                  linkName: 'Mã quà tặng Shopee'
                },
                {
                  linkName: 'Thanh toán hóa đơn'
                },
                {
                  linkName: 'Dịch vụ khác'
                }
              ]
            }
          ]
        },
        {
          item: [
            {
              categoryName: 'THỜI TRANG NỮ',
              link: [
                {
                  linkName: 'Quần'
                },
                {
                  linkName: 'Quần đùi'
                },
                {
                  linkName: 'Chân váy'
                },
                {
                  linkName: 'Quần jeans'
                },
                {
                  linkName: 'Đầm/Váy'
                },
                {
                  linkName: 'Váy cưới'
                },
                {
                  linkName: 'Đồ liền thân'
                },
                {
                  linkName: 'Áo khoác, Áo choàng và Vest'
                },
                {
                  linkName: 'Áo len và Cardigan'
                },
                {
                  linkName: 'Hoodie và Áo nỉ'
                },
                {
                  linkName: 'Bộ'
                },
                {
                  linkName: 'Đồ lót'
                },
                {
                  linkName: 'Đồ ngủ'
                },
                {
                  linkName: 'Áo'
                },
                {
                  linkName: 'Đồ tập'
                },
                {
                  linkName: 'Đồ bầu'
                },
                {
                  linkName: 'Đồ truyền thống'
                },
                {
                  linkName: 'Đồ hóa trang'
                },
                {
                  linkName: 'Vải'
                },
                {
                  linkName: 'Vớ/Tất'
                },
                {
                  linkName: 'Khác'
                }
              ]
            },
            {
              categoryName: 'THỜI TRANG NỮ',
              link: [
                {
                  linkName: 'Áo Khoác'
                },
                {
                  linkName: 'Áo Vest và Blazer'
                },
                {
                  linkName: 'Áo Hoodie'
                },
                {
                  linkName: 'Áo Len và Áo Nỉ'
                },
                {
                  linkName: 'Quần Jeans'
                },
                {
                  linkName: 'Quần Dài/Quần Âu'
                },
                {
                  linkName: 'Quần Short'
                }
              ]
            },
            {
              categoryName: 'NHÀ CỬA và ĐỜI SỐNG',
              link: [
                {
                  linkName: 'Áo Khoác'
                },
                {
                  linkName: 'Áo Vest và Blazer'
                },
                {
                  linkName: 'Áo Hoodie'
                },
                {
                  linkName: 'Áo Len và Áo Nỉ'
                },
                {
                  linkName: 'Quần Jeans'
                },
                {
                  linkName: 'Quần Dài/Quần Âu'
                },
                {
                  linkName: 'Quần Short'
                }
              ]
            },
            {
              categoryName: 'ĐỒNG HỒ',
              link: [
                {
                  linkName: 'Áo Khoác'
                },
                {
                  linkName: 'Áo Vest và Blazer'
                },
                {
                  linkName: 'Áo Hoodie'
                },
                {
                  linkName: 'Áo Len và Áo Nỉ'
                },
                {
                  linkName: 'Quần Jeans'
                },
                {
                  linkName: 'Quần Dài/Quần Âu'
                },
                {
                  linkName: 'Quần Short'
                }
              ]
            }
          ]
        },
        {
          item: [
            {
              categoryName: 'THỜI TRANG NAM',
              link: [
                {
                  linkName: 'Áo Khoác'
                },
                {
                  linkName: 'Áo Vest và Blazer'
                },
                {
                  linkName: 'Áo Hoodie'
                },
                {
                  linkName: 'Áo Len và Áo Nỉ'
                },
                {
                  linkName: 'Quần Jeans'
                },
                {
                  linkName: 'Quần Dài/Quần Âu'
                },
                {
                  linkName: 'Quần Short'
                }
              ]
            },
            {
              categoryName: 'THỜI TRANG NỮ',
              link: [
                {
                  linkName: 'Áo Khoác'
                },
                {
                  linkName: 'Áo Vest và Blazer'
                },
                {
                  linkName: 'Áo Hoodie'
                },
                {
                  linkName: 'Áo Len và Áo Nỉ'
                },
                {
                  linkName: 'Quần Jeans'
                },
                {
                  linkName: 'Quần Dài/Quần Âu'
                },
                {
                  linkName: 'Quần Short'
                }
              ]
            },
            {
              categoryName: 'NHÀ CỬA và ĐỜI SỐNG',
              link: [
                {
                  linkName: 'Áo Khoác'
                },
                {
                  linkName: 'Áo Vest và Blazer'
                },
                {
                  linkName: 'Áo Hoodie'
                },
                {
                  linkName: 'Áo Len và Áo Nỉ'
                },
                {
                  linkName: 'Quần Jeans'
                },
                {
                  linkName: 'Quần Dài/Quần Âu'
                },
                {
                  linkName: 'Quần Short'
                }
              ]
            },
            {
              categoryName: 'ĐỒNG HỒ',
              link: [
                {
                  linkName: 'Áo Khoác'
                },
                {
                  linkName: 'Áo Vest và Blazer'
                },
                {
                  linkName: 'Áo Hoodie'
                },
                {
                  linkName: 'Áo Len và Áo Nỉ'
                },
                {
                  linkName: 'Quần Jeans'
                },
                {
                  linkName: 'Quần Dài/Quần Âu'
                },
                {
                  linkName: 'Quần Short'
                }
              ]
            }
          ]
        },
        {
          item: [
            {
              categoryName: 'THỜI TRANG NAM',
              link: [
                {
                  linkName: 'Áo Khoác'
                },
                {
                  linkName: 'Áo Vest và Blazer'
                },
                {
                  linkName: 'Áo Hoodie'
                },
                {
                  linkName: 'Áo Len và Áo Nỉ'
                },
                {
                  linkName: 'Quần Jeans'
                },
                {
                  linkName: 'Quần Dài/Quần Âu'
                },
                {
                  linkName: 'Quần Short'
                }
              ]
            },
            {
              categoryName: 'THỜI TRANG NỮ',
              link: [
                {
                  linkName: 'Áo Khoác'
                },
                {
                  linkName: 'Áo Vest và Blazer'
                },
                {
                  linkName: 'Áo Hoodie'
                },
                {
                  linkName: 'Áo Len và Áo Nỉ'
                },
                {
                  linkName: 'Quần Jeans'
                },
                {
                  linkName: 'Quần Dài/Quần Âu'
                },
                {
                  linkName: 'Quần Short'
                }
              ]
            },
            {
              categoryName: 'NHÀ CỬA và ĐỜI SỐNG',
              link: [
                {
                  linkName: 'Áo Khoác'
                },
                {
                  linkName: 'Áo Vest và Blazer'
                },
                {
                  linkName: 'Áo Hoodie'
                },
                {
                  linkName: 'Áo Len và Áo Nỉ'
                },
                {
                  linkName: 'Quần Jeans'
                },
                {
                  linkName: 'Quần Dài/Quần Âu'
                },
                {
                  linkName: 'Quần Short'
                }
              ]
            },
            {
              categoryName: 'ĐỒNG HỒ',
              link: [
                {
                  linkName: 'Áo Khoác'
                },
                {
                  linkName: 'Áo Vest và Blazer'
                },
                {
                  linkName: 'Áo Hoodie'
                },
                {
                  linkName: 'Áo Len và Áo Nỉ'
                },
                {
                  linkName: 'Quần Jeans'
                },
                {
                  linkName: 'Quần Dài/Quần Âu'
                },
                {
                  linkName: 'Quần Short'
                }
              ]
            }
          ]
        },
        {
          item: [
            {
              categoryName: 'THỜI TRANG NAM',
              link: [
                {
                  linkName: 'Áo Khoác'
                },
                {
                  linkName: 'Áo Vest và Blazer'
                },
                {
                  linkName: 'Áo Hoodie'
                },
                {
                  linkName: 'Áo Len và Áo Nỉ'
                },
                {
                  linkName: 'Quần Jeans'
                },
                {
                  linkName: 'Quần Dài/Quần Âu'
                },
                {
                  linkName: 'Quần Short'
                }
              ]
            },
            {
              categoryName: 'THỜI TRANG NỮ',
              link: [
                {
                  linkName: 'Áo Khoác'
                },
                {
                  linkName: 'Áo Vest và Blazer'
                },
                {
                  linkName: 'Áo Hoodie'
                },
                {
                  linkName: 'Áo Len và Áo Nỉ'
                },
                {
                  linkName: 'Quần Jeans'
                },
                {
                  linkName: 'Quần Dài/Quần Âu'
                },
                {
                  linkName: 'Quần Short'
                }
              ]
            },
            {
              categoryName: 'NHÀ CỬA và ĐỜI SỐNG',
              link: [
                {
                  linkName: 'Áo Khoác'
                },
                {
                  linkName: 'Áo Vest và Blazer'
                },
                {
                  linkName: 'Áo Hoodie'
                },
                {
                  linkName: 'Áo Len và Áo Nỉ'
                },
                {
                  linkName: 'Quần Jeans'
                },
                {
                  linkName: 'Quần Dài/Quần Âu'
                },
                {
                  linkName: 'Quần Short'
                }
              ]
            },
            {
              categoryName: 'ĐỒNG HỒ',
              link: [
                {
                  linkName: 'Áo Khoác'
                },
                {
                  linkName: 'Áo Vest và Blazer'
                },
                {
                  linkName: 'Áo Hoodie'
                },
                {
                  linkName: 'Áo Len và Áo Nỉ'
                },
                {
                  linkName: 'Quần Jeans'
                },
                {
                  linkName: 'Quần Dài/Quần Âu'
                },
                {
                  linkName: 'Quần Short'
                }
              ]
            }
          ]
        }
      ]
      return{
        data
      }
    },
    components: {
      FooterWrapper
    }
}
</script>

<style scoped>
.footer-wrapper{
  border-top: .5rem solid var(--primary-color);
}

.footer__header{
  border-bottom: .1rem solid #ccc;
}

.footer__category__wrapper-contains__link{
  color: rgba(0,0,0,.54);
}

.footer__category__wrapper-contains__link:hover{
  color: var(--primary-color)
}

.footer__category__wrapper-contains__link::before{
  position: absolute;
  content: '';
  display: block;
  height: 1.5rem;
  width: 1px;
  background-color: rgb(173, 172, 172);
  right: 0;
  margin: 0 .3rem;
}

.footer__category__wrapper-contains__link:last-child::before{
  display: none;
}

/* mobile & tablet */
@media (max-width: 1023px){
    .footer{
      padding: 1rem 2rem;
    }

    .footer__category{
      display: none;
    }
}

/* mobile */
@media (max-width: 739px){
    
    
}
</style>