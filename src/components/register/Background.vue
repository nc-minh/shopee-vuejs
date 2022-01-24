<template>
    <div class="background bg-primary-color">
        <div :style="url(background)" class="background__img w-full h-full flex justify-end items-center bg-no-repeat bg-center bg-cover m-auto">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Background',
    setup() {
        const background = 'https://cf.shopee.vn/file/85ea8ed2e12c2a5832bc2a77c478eabb'

        return{
            background
        }
    },
    methods: {
        url: function (url) {
            return `background-image: url(${url});`;
        }
    }
}
</script>

<style scoped>
.background{
    height: 60rem;
}

.background__img{
    height: 60rem;
    width: 104rem;
    min-height: 60rem;
}
</style>