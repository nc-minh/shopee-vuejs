<template>
  <div class="simple-banner mt-8">
        <a href="/" class="simple-banner__link">
            <img :src="banner.url" :alt="banner.title" class="simple-banner__img">
        </a>
    </div>
</template>

<script>
export default {
    name: 'Mutil-SimpleBanner',
    setup(){
        const banner = {
            url: 'https://cf.shopee.vn/file/e661c20e1a3e3844c17e426726cabdfc',
            title: 'mutil - simple banner'
        }

        return{
            banner
        }
    }
}
</script>

<style>

</style>