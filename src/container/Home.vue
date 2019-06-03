<template>
    <div>
        <h-header></h-header>
		<div class="search">
			<input @focus="focusSearch" type="" name="">
			<div class="hot">
				<h3>热搜</h3>
				<span v-for="item in hotSearchList">
					<router-link :to="{path:'/search',query:{name: item.name}}">{{ item.name }}</router-link>
				</span>

			</div>

		</div>
       	<div class="swiper">
			<div class="top"></div>
			<img :src="banner">
       	</div>
        <Menu></Menu>
    </div>
</template>

<script>
    import Hheader from '../components/Home/Hheader.vue'
    import Menu from '../components/Home/Menu.vue'
    export default {
        name: "Home",
        components: {
            'h-header': Hheader,
            'Menu':Menu
        },
		data(){
        	return {
				hotSearchList: [
						{
							name: 'Air Jordan'
						},{
							name: 'Yeezy'
						},{
							name: '华为'
						},{
							name: 'iphone'
						}
				],
				banner: require( '../assets/image/2.png')
			}
		},
		created(){

		},
		methods: {
			focusSearch(){
				this.$router.push('/search')
			}
		}
    }
</script>

<style scoped lang="less">
.search{
	height:1.55rem;
	background:#51dfe0;
	input{
		margin-top:0.15rem;
		margin-bottom:0.06rem;
		height:0.6rem;
		width:6.94rem;
		margin-left:0.28rem;
		border:0;
		border-radius:0.26rem;
	}
	.hot{
		height:0.73rem;
		h3{
			margin-bottom:0.28rem;
			margin-left:0.28rem;
			font-size:0.26rem;
			color:#fff;
			margin-top:0.12rem;
			float:left;
			padding-right:0.12rem;
		}
		span{
			display:block;
			float:left;
			width:1.44rem;
			margin-top:0.06rem;
			margin-left:0.08rem;
			margin-right:0.08rem;
			background:#75e1e1;
			border-radius:0.2rem;
			text-align:center;
			color:#fff;
			height:0.4rem;
			line-height:0.4rem;
		}
	}
}
.swiper{
	position: relative;
	height:2.6rem;
	.top{
		height:1.88rem;
		background:#53dfe0;
		border-radius:0rem 0rem 0.5rem 0.5rem;	
	}
	img{
		border-radius:0.06rem;
		top:0;
		position:absolute;
		height:2.6rem;
		width:7.1rem;
		margin-left:0.2rem;
	}
}
</style>