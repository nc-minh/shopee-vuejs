<template>
    <div class="w-1200 m-auto pt-10">
        <CarouselBanner/>
        <OptionBanner/>
        <SimpleBanner/>
    </div>
</template>

<script>
import CarouselBanner from './CarouselBanner.vue'
import OptionBanner from './OptionBanner.vue'
import SimpleBanner from './SimpleBanner.vue'
export default {
    name: 'HomeBanner',
    components: {
        CarouselBanner,
        OptionBanner,
        SimpleBanner
    }
}
</script>

<style>

</style>