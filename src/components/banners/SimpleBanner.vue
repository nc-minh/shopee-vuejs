<template>
    <div class="simple-banner mt-8">
        <a href="/" class="simple-banner__link">
            <img :src="banner.url" :alt="banner.title" class="simple-banner__img">
        </a>
    </div>
</template>

<script>
export default {
    name: 'SimpleBanner',
    setup(){
        const banner = {
            url: 'https://cf.shopee.vn/file/c6fe0ecba380a8534ffdffe9faf3c87f',
            title: 'simple banner'
        }

        return{
            banner
        }
    }
}
</script>

<style>

</style>