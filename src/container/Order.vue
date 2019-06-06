<template>
    <div class="all">
        <top></top>
        <div class="nav">
        	<ul>
				<li class="col">全部订单</li>
				<li>待付款</li>
				<li>待收货</li>
				<li>已完成</li>
			</ul>
        </div>
        <div class="num">
	        	<span>订单编号：90128598276</span>
	        	<img src="../assets/image/43.png">
	        	<p>待收货</p>
        </div>
        <div class="main">
        	<div class="shoping">
        	<img src="../assets/image/40.png">
        	<span class="desert">Off-White X Nike Air Max 90 THE TEN 联名 沙漠</span>
        	<div>
				<span>图片色  </span>
				<span> 38</span>
        	</div>
        	<p>
        		<span>￥</span>
        		2989.00
        		<strong>x1</strong>
        	</p>
        	</div>
        	<div class="show">
        		<p>共一件商品 实付款</p>
        		<span><i>￥</i>2989.00</span>
        		<ul>
					<li>删除订单</li>
					<li class="ok">确认订单</li>
				</ul>
        	</div>
        </div>
        <div class="num">
	        <span>订单编号：90128598276</span>
	        <img src="../assets/image/44.png">
	        <p class="over">已完成</p>
        </div>
        <div class="main">
        	<div class="shoping">
        	<img src="../assets/image/40.png">
        	<span class="desert">Off-White X Nike Air Max 90 THE TEN 联名 沙漠</span>
        	<div>
				<span>图片色  </span>
				<span> 38</span>
        	</div>
        	<p>
        		<span>￥</span>
        		2989.00
        		<strong>x1</strong>
        	</p>
        	</div>
        	<div class="show">
        		<p>共一件商品 实付款</p>
        		<span><i>￥</i>2989.00</span>
        		<ul>
					<li>删除订单</li>
					<li class="ok">确认订单</li>
				</ul>
        	</div>
        </div>
        <div class="num">
	        <span>订单编号：90128598276</span>
	        <img src="../assets/image/45.png">
	        <p class="date">代付款</p>
        </div>
    </div>
</template>

<script>
 	import Top from '../components/Child/Top.vue'
    export default {
        name: "Search",
        components:{
        	'top':Top
        },
        data(){
            return {
                menuIsActive: false
            }
        },
        methods: {
            menuShow(){
                this.menuIsActive = !this.menuIsActive
            },
            back(){
            	history.back()
            }
        }
    }
</script>

<style scoped lang="less">
.all{
	background:#f7f7f7;
}
.nav{
	height:0.88rem;
	margin-top:0.26rem;
	ul{
		display: flex;
		margin-left:0.37rem;
	}
	li{
		float:left;
		flex:1;
		line-height:0.88rem;
		font-size:0.28rem;
	}
	.col{
		color:#00c0c2;
	}

}
.num{	
	background:#fff;
	height:0.88rem;
	margin-top:0.18rem;
	span{
		float:left;
		display:block;
		font-size:0.3rem;
		color:#d5d5d5;
		margin-left:0.4rem;
		padding-top:0.3rem;
	}
	img{
		margin-top:0.3rem;
		margin-left:2.2rem;
		float:left;
		width:0.35rem;
		height:0.37rem;
	}
	P{
		float:left;
		margin-left:0.08rem;
		margin-top:0.33rem;
		color:#ffb2b8;
		font-size:0.26rem;
	}
	.over{
		color:#70d9b0;
	}
	.date{
		color:#ff912d;
	}
}
.main{
	.shoping{
		height:2rem;
		padding:0;
		margin:0;
		margin-top:0.22rem;
	}
	margin-top:0.2rem;
	margin-bottom:0.2rem;
	height:3.67rem;
	img{
		width:2.0rem;
		height:1.98rem;
		border-radius:0.1rem;
		margin-left:0.2rem;
		float:left;
	}
	.desert{
		display:block;
		font-size:0.22rem;
		margin-left:2.4rem;
		margin-right:0.6rem;
		padding-top:0.1rem;
	}
	div{
		color:#666666;
		margin-top:0.35rem;
		padding-left:2.42rem;
	}
	p{
		float:left;
		clolr:#252525;
		font-size:0.2rem;
		margin-left:0.2rem;
		margin-top:0.2rem;
		font-weight:700;
		span{
			font-size:0.16rem;
		}
		strong{
			font-weight:400;
			margin-left:3.34rem;
			color:#5f5f5f;
		}
	}
	.show{
		margin:0;
		height:1.68rem;
		padding:0;
		p{
			font-size:0.28rem;
			color:#cecece;
			margin-left:3.22rem;
			margin-top:0.18rem;
		}
		span{
			display:block;
			padding-top:0.18rem;
			color:black;
			font-weight:700;
			font-size:0.28rem;
			margin-left:5.66rem;
			i{
				font-style:none;
				font-size:0.24rem;
			}
		}
		ul{
			margin-left:4.05rem;
			margin-top:0.42rem;
		}
		li{
			width:1.45rem;
			height:0.6rem;
			border-radius:0.5rem;
			background:#d9dada;
			float:left;
			margin-right:0.2rem;
			text-align:center;
			line-height:0.6rem;
			font-size:0.28rem;
			color:#9d9f9e;
		}
		.ok{
			background:#01bfbf;
			color:#fff;
		}
	}

}
a{
	color:#fff;
}

</style>