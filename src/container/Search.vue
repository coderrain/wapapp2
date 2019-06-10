<template>
    <div>
        <top></top>
        <div class="search">
        	<div>
        	<img src="../assets/image/24.png">
        	</div>
			<input ref="ipt" type="" name="" placeholder="搜素商品">
			<button @click="search">搜索</button>
        </div>
        <div class="hot">热搜</div>
        <div class="list">
        	<li v-for="item in hotsearch">
        		<router-link :to="{path:'/search',query:{name: item.name}}">
        			{{ item.name }}
        		</router-link>
        	</li>
        </div>
        <div class="show">
        	<ul>
        		<li v-for="item in listShow">
        			<p>类型:{{ item.title }}</p>
        			<img :src="item.url" alt="">
        			<span>价格:{{ item.price }}</span>
        			<i>{{ item.chose }}人已经购买</i>
        		</li>
        	</ul>
        </div>
    </div>
</template>

<script>
	import Top from '../components/common/Top.vue'
    export default {
		name: "Search",
		data(){
			return{
				hotsearch:[],
				listShow:[]
			}
		},
        components:{
        	'top':Top
    	},
    	created(){
    		this.getList()
    	},
    	methods:{
    		getList(){
    			this.$axios.get('api/shopMark',{
	    			params:{
	    				"search":1
	    			}
	    		}).then(data=>{
	    			this.hotsearch = data.data.data
	    		})
    		},
    		search(){
    			var ipt = this.$refs.ipt.value
    			this.$axios.get('/api/search',{
    				params:{
    						title:ipt
    				}
    			}).then(data=>{
    				console.log(data.data.data)
    				this.listShow=data.data.data
    			})
    		}
    	}
    }
</script>

<style scoped lang="less">
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
		float:left;
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
.show{
	li{
		float:left;
		margin-left:0.2rem;
	}
	float:left;
	img{
		width:1rem;
		height:1rem;
		margin-left:0.2rem;
		float:left;
	}
	p{
		margin: 0.1rem 0;
		margin-left:0.2rem;
		color:red;
		font-size:0.28rem;
	}
	span{
		font-weight:700;
		display:block;
		float:left;
		margin-top:0.2rem;
		font-size:0.26rem;
		margin-left:0.8rem;
	}
	i{
		display: block;
		margin-top:0.8rem;
		margin-left:2rem;
	}
}
</style>