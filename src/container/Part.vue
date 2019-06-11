<template>
    <div>
        <top></top>
        <div class="logo">
        	<div class="image">
	        	<mt-swipe :auto="4000">
				  <mt-swipe-item v-for="item in parment">
				  	<img :src="item.url[0]" alt="">
				  </mt-swipe-item>
				</mt-swipe>
			</div>
        </div>
        <div class="choice">
        	<h3></h3>
        	<span class="money"><span>￥{{ ments.price }}</span></span>
        	<span class="people">{{ ments.chose }}人付款</span>
        	<div class="size" @click="showcust">
	        	<span class="cho">选择</span>
				<span class="col">选择颜色分类    尺码</span>
				<span class="jump">></span>
        	</div>
        	<div class="size" @click="showgran">
	        	<span class="cho">保障</span>
				<span class="col">质量保障·正品保证·多重鉴定·售后保障</span>
				<span class="jump">></span>
        	</div>
        	<div class="size" @click="showpara">
	        	<span class="cho">参数</span>
				<span class="col">品牌 闭合方式...</span>
				<span class="jump">></span>
        	</div>
        </div>
        <div class="show">
        	<h3>
        	————	商品详情   ————
        	</h3>
        	<img :src='image[0]'>
        </div>
        <div class="foot">
        	<div class="shop">
        		<router-link :to="{path:'/shopcar'}">
        		<img src="../assets/image/36.png">
        		<span>购物车</span>
        	</router-link>
        	</div>
        	<div class="add">
        	<span class='car'>加入购物车</span>
        	<span class="quite">立即购买</span>
        	</div>
        </div>
		<Guarantee
				v-show="gran"
				v-on:showdigeo="showgran"
				></Guarantee>
		<Parameter
			v-show="para"
			v-on:showdigeo="showpara">
		</Parameter>
		<Custom
			v-show="cust"
			v-on:showdigeo="showcust">
		></Custom>		
    </div>
</template>

<script>
	import Top from '../components/common/Top.vue'
	import Guarantee from '../components/part/Guarantee.vue'
	import Parameter from '../components/part/Parameter.vue'
	import Custom from '../components/part/Custom.vue'
	import Vue from 'vue'
	import { Cell, Checklist } from 'mint-ui';
	Vue.component(Cell.name, Cell);
	Vue.component(Checklist.name, Checklist);
    export default {
        name: "Part",
        components:{
        	'top':Top,
			Guarantee,
			Parameter,
			Custom
        },
        created(){
        	this.$axios.get('/api/search').then(data=>{
        		this.parment = data.data.data
        		for(let i=0;i<this.parment.length;i++){
        			this.image = this.parment[i].url
        			this.ments = this.parment[i]
        			return;
        		}
        	})
        },
		methods:{
			showgran(){
				this.gran = !this.gran;
				this.$root.$el.style.background='#7f7f7f';
			},
			showpara(){
				this.para = !this.para;
				this.$root.$el.style.background='#7f7f7f';
			},
			showcust(){
				this.cust = !this.cust;
				this.$root.$el.style.background='#7f7f7f';
			}

		},
        data(){
            return {
				gran:false,
				para:false,
				cust:false,
				parment:[],
				image:[],
				ments:[]
			}
        }
    }
</script>

<style scoped lang="less">
.logo{
	margin-top:0.24rem;
	.image{
		overflow:hidden;
		height:4rem;
		margin: 0 auto;
		margin-top:0.5rem;
		margin-bottom:0.8rem;
		img{
			margin-top:0.5rem;
			margin-left:0.25rem;
			width:7rem;
			height:3rem;
		}
	}
}
.choice{
	margin: 0 0.2rem;
	h3{
		font-size:0.36rem;
		color:#282828;
		padding-right:0.06rem;
		padding-left:0.06rem;
		padding-top:0.35rem;
		padding-bottom:0.4rem;
	}
	.money{
		span{
			font-size:0.28rem;
			color:#F63131;
		}
			font-size:0.38rem;
			color:#F63131;
		
	}
	.people{
		float:right;
		font-size:0.24rem;
		color:#838383;
	}
	.size{
		margin-top:0.5rem;
		height:1.1rem;
		opacity: 0.7;

		span{
			line-height:1.1rem;
		}
		.cho{
			font-size:0.28rem;
			color:#888888;
		}
		.col{
			font-size:0.28rem;
			color:#282828;
			margin-left:0.4rem;
		}
		.jump{
			float:right;
			margin-right:0.12rem;
			font-size:0.28rem;
		}
	}
}
.show{
	h3{
		line-height:1.1rem;
		height:1.1rem;
		text-align:center;
		font-size:0.28rem;
		color:#888888;
	}
	img{
		width:7.53rem;
		height:3.53rem;
	}
	
}
.foot{
	.shop{
		float:left;
		width:2.36rem;
		height:1.1rem;
		font-size:0.18rem;
		img{
			width:0.4rem;
			height:0.4rem;
			margin-top:0.2rem;
			margin-left:0.96rem;
		}
		span{
			color:#ccc;
			display:block;
			margin-left:0.9rem;
			margin-top:0.1rem;
		}
	}
	height:1.1rem;
	margin-right:0.2rem;
	.add{
		float:left;
		width:4.94rem;
		height:0.8rem;
		margin: 0.1rem auto;
		.car{
			color:#01bfbf;
			border-radius:0.4rem 0 0 0.4rem;
			background:#d2f2f1;
			width:50%;
			display:block;
			float:left;
			text-align:center;
			line-height:0.8rem;
		}
		.quite{
			color:#fff;
			border-radius: 0 0.4rem 0.4rem 0;
			background:#01bfbf;
			width:50%;
			display:block;
			float:left;
			text-align:center;
			line-height:0.8rem;
		}
	}
}
</style>