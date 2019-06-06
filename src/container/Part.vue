<template>
    <div>
        <top></top>
        <div class="logo">
        	<img src="../assets/image/35.png">
        	<ul>
        		<li></li>
				<li></li>
				<li></li>
				<li></li>
        	</ul>
        </div>
        <div class="choice">
        	<h3> Off - White X Nike Air Max 90  THE  TEN 联名沙漠</h3>
        	<span class="money"><span>￥</span>2989.00</span>
        	<span class="people">274人付款</span>
        	<div class="size">
	        	<span class="cho">选择</span>
				<span class="col">选择颜色分类    尺码</span>
				<span class="jump">></span>
        	</div>
        	<div class="size">
	        	<span class="cho">保障</span>
				<span class="col">质量保障·正品保证·多重鉴定·售后保障</span>
				<span class="jump">></span>
        	</div>
        	<div class="size">
	        	<span class="cho">参数</span>
				<span class="col">品牌 闭合方式...</span>
				<span class="jump">></span>
        	</div>
        </div>
        <div class="show">
        	<h3>
        	————	商品详情   ————
        	</h3>
        	<img src="../assets/image/34.png">
        </div>
        <div class="foot">
        	<div class="shop">
        	<img src="../assets/image/36.png">
        	<span>购物车</span>
        	</div>
        	<div class="add">
        	<span class='car'>加入购物车</span>
        	<span class="quite">立即购买</span>
        	</div>
        </div>

    </div>
</template>

<script>
	import Top from '../components/Child/Top.vue'
    export default {
        name: "Search",
        components:{
        	'top':Top
    	}
    }
</script>

<style scoped lang="less">
.logo{
	margin-top:0.24rem;
	img{
		height:2.45rem;
		width:5.03rem;
		margin-top:0.6rem;
		margin-left:1.26rem;
		margin-bottom:1.3rem;
	}
	ul{
		width:1.5rem;
		height:0.2rem;
		margin:0 auto;
		li{
			width:0.2rem;
			height:0.2rem;
			background:#c6c8c7;
			border-radius:50%;
			float:left;
			margin: 0 0.08rem;
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
		background:#f7f7f7;
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
a{
	color:#fff;
}
</style>