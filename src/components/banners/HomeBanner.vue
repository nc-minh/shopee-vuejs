<template>
    <div class="w-1200 m-auto pt-10">
        <CarouselBanner/>
        <OptionBanner/>
    </div>
</template>

<script>
import CarouselBanner from './CarouselBanner.vue'
import OptionBanner from './OptionBanner.vue'
export default {
    name: 'HomeBanner',
    components: {
        CarouselBanner,
        OptionBanner
    }
}
</script>

<style>

</style>