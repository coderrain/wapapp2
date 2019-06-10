<template>
    <div>
       
        <div class="main">
        	<div class="show">
        		<img :src="stom.url">
        		<div>
	        		<span class="Sone">￥</span>
	        		<span class="Stwo">{{ stom.price }}</span>
        		</div>
        		<p>选择颜色分类尺码</p>
        		<button v-on:click="fn">X</button>
        	</div>
        	<h3>鞋码</h3>
        	<div class="num">
        		<ul>
        			<li v-for="item in cust">
        				{{ item.size }}
        			</li>
				</ul>
        	</div>
        	<h3>颜色</h3>
        	<div class="col">
        		<div v-for="item in cust">
        			{{ item.col }}
        		</div>
        	</div>
        	<h3>数量</h3>
        	<div class="count">
        		<div class="jup">-</div>
        		<span>1</span>
        		<div class="add">+</div>
        	</div>
        	<div class="foot">
        		<div class="car">加入购物车</div>
        		<div class="by">立即购买</div>
			</div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: "Custom",
		methods:{
			fn(){
				this.$emit('showdigeo')
				this.$root.$el.style.background='#fff';
				
			}
		},
		data(){
			return {
				cust:[],
				stom:[]
			}
		},
		created(){
			this.$axios.get('/api/search').then(data=>{
				this.cust = data.data.data
				for(var i=0;i<this.cust.length;i++){
					this.cust = this.cust[i]
					this.stom = data.data.data[i]
				}
				this.cust = this.cust.type
			})
		}
    }
</script>

<style scoped lang="less">
.main{
	position:fixed;
	left:0;
	bottom:0;
	background:#fff;
	overflow: hidden;
}
.foot{
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
.main{
	width:100%;
	border-radius:0.3rem 0.3rem 0 0 ;
	.show{
		position: relative;
		height:2.15rem;
		width:100%;
		border-radius:0.3rem 0.3rem 0 0 ;
		P{
			position: absolute;
			top:1.57rem;
			left:2.1rem;
			font-size:0.26rem;
			color:#282828;
		}
		img{
			width:1.62rem;
			height:1.62rem;
			border-radius:0.2rem;
			margin-top:0.22rem;
			margin-left:0.24rem;
			float:left;
		}
		div{
			margin-top:1.1rem;
			margin-left:0.2rem;
			float:left;
			.Sone{
				font-size:0.28rem;
				color:#f63131;
			}
			.Stwo{
				font-size:0.38rem;
				color:#f63131;
			}
		}
		button{
			font-size:0.24rem;
			float:right;
			width:0.44rem;
			height:0.44rem;
			border: 1px solid black;
			background:#fff;
			border-radius:50%;
			margin-top:0.18rem;
			margin-right:0.18rem;
		}
	}
	h3{
		font-size:0.28rem;
		color:#434448;
		height:0.68rem;
		line-height:0.68rem;
		margin-left:0.26rem;
	}
	ul{
		height:2rem;
		li{
			width:0.7rem;
			height:0.6rem;
			background:#eff3f2;
			float:left;
			text-align:center;
			line-height:0.6rem;
			margin: 0.2rem 0.2rem;
		}
		.four{
			background:#01bfbf;
			color:#fff;
		}
	}
	.col{
		overflow:hidden;
		margin-left:-0.18rem;
		height:1rem;
		.zong{
			background:#01bfbf;
			color:#fff;
		}
		div{
			width:1.24rem;
			height:0.6rem;
			line-height:0.6rem;
			text-align:center;
			float:left;
			background:#eff3f2;
			margin-top:0.15rem;
			margin-bottom:0.26rem;
			margin-left:0.38rem;
			border-radius:0.1rem;
			color:black;
		}
	}
	.count{
		margin-left:0.24rem;
		height:1.2rem;
		span{
			display:block;
			float:left;
			padding:0 0.3rem;
			line-height:0.44rem;
			font-size:0.34rem;
		}
		div{
			color:#0cbaa3;
			width:0.44rem;
			height:0.44rem;
			background:#d2f2f1;
			font-size:0.5rem;	
			border-radius:50%;
			text-align:center;
			line-height:0.4rem;
			float:left;
		}
		.add{
			background:#01bfbf;
			color:#fff;
		}
	}
	.foot{
		height:0.8rem;
		margin-top:0.55rem;
		width:6.52rem;
		margin-left:0.45rem;
		div{
			font-size:0.28rem;
			width:3.26rem;
			height:0.8rem;
			text-align:center;
			line-height:0.8rem;
			float:left;
		}
		.car{
			color:#01bfbf;
			background:#d2f2f1;
			border-radius:0.5rem 0 0 0.5rem;
		}
		.by{
			color:#fff;
			background:#01bfbf;
			border-radius:0 0.5rem   0.5rem 0;
		}
	}
}
</style>