<template>
  <div class="products mt-8">
      <div class="products__header flex pl-8 h-24 text-primary-color bg-white">
          <h2 class="products__header__text text-3xl">GỢI Ý HÔM NAY</h2>
      </div>

      <ProductWrapperItem class="mt-2"/>
  </div>
</template>

<script>
import ProductWrapperItem from './ProductWrapperItem.vue'
export default {
    name: 'Products',
    components: {
        ProductWrapperItem
    }
}
</script>

<style scoped>
.products__header__text{
    height: 100%;
    line-height: 6rem;
    border-bottom: .4rem solid var(--primary-color);
}
</style>