<template>
    <div class="bg-bg">
        <FooterContact class="mx-w-1200 w-984 m-auto"/>
    </div>
    <FooterBottom class="mx-w-1200 w-984 m-auto"/>
</template>

<script>
import FooterContact from './FooterContact.vue'
import FooterBottom from './FooterBottom.vue'
export default {
    name: 'FooterWrapper',
    components: {
        FooterContact,
        FooterBottom
    }
}
</script>

<style>

</style>