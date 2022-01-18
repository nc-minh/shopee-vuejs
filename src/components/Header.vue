<template>
  <h1>đây là header</h1>
  <button @click="change">thay đổi</button>
  <keep-alive>
<component :is="selected"></component>
  </keep-alive>
  {{selected}}
</template>

<script>
import link1 from './link1.vue'
import link2 from './link2.vue'
export default {
    name: 'Header',
    components: {
        link1,link2
    },
    methods: {
        change(){
            console.log('đây là hàm change ở Header')
            this.$emit('eventUp')
        }
    },
    data() {
        return {
            selected: 'link1'
        }
    },
    
  
}
</script>

<style>

</style>