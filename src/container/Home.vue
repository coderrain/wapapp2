<template>
    <div>
        <h-header></h-header>
		<div class="search">
			<input type="" name="">
		</div>
        	
        <!-- <swiper></swiper>
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
.search{
	height:0.88rem;
	background:#51dfe0;
	input{
	
	}
}
</style>