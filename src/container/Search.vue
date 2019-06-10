<template>
	<transition name="fade">
    <div>
        <top></top>
        <div class="search">
        	<div>
        	<img src="../assets/image/24.png">
        	</div>
			<input type="" name="" placeholder="搜素商品">
			<button>搜索</button>
        </div>
        <div class="hot">热搜</div>
        <div class="list">
        	<li v-for="item in hotsearch">
        		<router-link :to="{path:'/search',query:{name: item.name}}">
        			{{ item.name }}
        		</router-link>
        	</li>
        </div>
    </div>
    </transition>
</template>

<script>
	import Top from '../components/common/Top.vue'
    export default {
		name: "Search",
		data(){
			return{
				hotsearch:[]
			}
		},
        components:{
        	'top':Top
    	},
    	created(){
    		this.$axios.get('api/shopMark',{
    			params:{
    				"search":1
    			}
    		}).then(data=>{
    			this.hotsearch = data.data.data
    		})

    	}
    }
</script>

<style scoped lang="less">
.fade-enter-active {
	transition: all 1s ease;
}
.fade-leave-active {
	transition: all 1s;
}
.fade-enter, .fade-leave-to{
	transform: translateX(-750px);
}
.search{
	div{	
		height:0.6rem;
		widht:0.4rem;
		float:left;
		background:#f6f8f7;
		border-radius:0.3rem 0 0 0.3rem;
		img{
			padding-top:0.15rem;
			float:left;
			width:0.28rem;
			height:0.28rem;
			margin-left:0.2rem;
		}
	}
	
	border-radius:0.3rem;
	margin-top:0.44rem;
	margin-left:0.28rem;
	input{
		border-radius:0 0.3rem 0.3rem 0;
		float:left;
		background:green;
		border:0;
		height:0.6rem;
		background:#f6f8f7;
		width:5rem;
		margin-left:0.08rem;
	}
	button{
		font-size:0.24rem;
		width:1.24rem;
		height:0.6rem;
		background:#09c7c7;
		border:0;
		border-radius:0.1rem;
		margin-left:0.15rem;
		color:#fff;
	}
}
.hot{
	margin-left:0.28rem;
	margin-top:0.28rem;
	margin-bottom:0.2rem;
	font-size:0.24rem;
}
.list{
	li{
		a{
			margin-right:0.2rem;
			padding-right:0.2rem;
			padding-left:0.2rem;
			margin-left:0.2rem;
			height:0.4rem;
			background:#f6f8f7;
			float:left;
			border-radius:0.2rem;
			text-align:center;
			line-height:0.4rem;
			margin-bottom:0.4rem;
			font-size:0.26rem;
			color:#848787;
		}
		
	}
}
</style>