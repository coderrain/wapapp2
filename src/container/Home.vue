<template>
    <div>
        <h-header></h-header>
       <!-- <search></search>
        <swiper></swiper>
        <menu></menu>
        <div></div>
        <list></list>-->
    </div>
</template>

<script>
    import Hheader from '../components/Home/Hheader.vue'
    export default {
        name: "Home",
        components: {
            'h-header': Hheader
        }
    }
</script>

<style scoped>

</style>