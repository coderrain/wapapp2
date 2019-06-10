<template>
    <div>
        <top></top>
        <div class="name">
        	<p>王冉</p>
			<span class="num">188****1699</span>
        	<span class="address">陕西省西安市长安区韦曲街道长安警苑三单元701室</span>
        	<span class="mup">></span>
        </div>
        <img class="call" src="../assets/image/39.png">
        <div class="main">
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
        <div class="type">
        	<h3>配送方式</h3>
        	<div>
        		<p>快递</p>
        		运费<span>￥0.00</span>
        	</div>
        </div>
        <div class="add">
        	<h3>合计支付</h3>
        	<div>
        		<span>￥2989.00</span>
        	</div>
        </div>
        <div class="bk"></div>
        <div class="foot">
        	<div>
        		<p>实付款:</p>
        		<span>￥2989.00</span>
				<div>确认支付</div>
        	</div>
        </div>
    </div>
</template>

<script>
	import Top from '../components/common/Top.vue'
    export default {
        name: "Payment",
        components:{
        	'top':Top
    	}
    }
</script>

<style scoped lang="less">
.name{
	z-index:0;
	height:1.28rem;
	p{
		font-size:0.26rem;
		color:#262626;
		padding-top:0.28rem;
		margin-left:0.22rem;
		float:left;
		padding-right:0.24rem;
	}
	.num{
		display:block;
		font-size:0.26rem;
		padding-top:0.28rem;
	}
	.address{
		color:#6c6c6c;
		display:block;
		margin-left:0.24rem;
		margin-top:0.18rem;
		float:left;
	}
	.mup{
		font-size:0.36rem;
		float:right;
		margin-right:0.2rem;
		color:#bcbcbc;
	}
}
.call{
	z-index:0;
	height:0.1rem;
	width:7.5rem;
}
.main{
	margin-top:0.2rem;
	margin-bottom:0.2rem;
	height:2rem;
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
		font-weight:700;
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

}
.type{
	margin-top:0.2rem;
	height:1.12rem;
	h3{
		line-height:1.12rem;
		height:1.12rem;
		float:left;
		margin-left:0.2rem;
		color:#6f6f6f;
		font-size:0.26rem;
		
	}
	div{
		margin-right:0.3rem;
		float:right;
		margin-top:0.26rem;
		span{
			font-weight:700;
		}
		p{
			padding-bottom:0.05rem;
			margin-left:0.6rem;
		}
	}

}
.add{
	margin-top:0.2rem;
	height:1.12rem;
	h3{
		line-height:1.12rem;
		height:1.12rem;
		float:left;
		margin-left:0.2rem;
		color:#6f6f6f;
		font-size:0.26rem;
	}
	div{
		margin-left:6.25rem;
		padding-top:0.42rem;
		span{
			font-weight:700;
		}
	}
}
.bk{
	height:5rem;
	background:#f7f7f7;
}
.foot{
	margin-top:0.1rem;
	height:1.12rem;
	position: relative;
	background:#fff;
	div{
		font-size:0.28rem;
		p{
			margin-top:0.42rem;
			margin-left:0.22rem;
			float:left;
		}
		span{
			display:block;
			color:#ff2e3f;
			font-weight:700;
			padding-top:0.42rem;
		}
		div{
			position: absolute;
			top:0.15rem;
			left:5.02rem;
			float:right;
			width:2.2rem;
			height:0.8rem;
			background:#01bfbf;
			border-radius:0.5rem;
			text-align:center;
			line-height:0.8rem;
			color:#fff;
			font-weight:700;
		}
	}
}
</style>