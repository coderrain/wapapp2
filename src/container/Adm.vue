<template>
    <div>
       	<top></top>
        <div class="name">
        	<div></div>        	
        	<p>王冉</p>
        	<span class="num">188****1699</span>
        	<span class="address">陕西省西安市长安区韦曲街道长安警苑三单元701室</span>
        	<span class="mup">></span>
        </div>
        <div class="name">
        	<div></div>
        	        	
        	<p>王冉</p>
        	<span class="num">188****1699</span>
        	<span class="address">陕西省西安市长安区韦曲街道长安警苑三单元701室</span>
        	<span class="mup">></span>
        </div>
        <div class="call"></div>
        <div class="new">新增收货地址</div>
    </div>
</template>

<script>
	import Top from '../components/common/Top.vue'
    export default {
        name: "Adm",
        components:{
        	'top':Top
        }
    }
</script>

<style scoped lang="less">
.name{
	margin-top:0.4rem;
	position:relative;
	height:1.51rem;
	p{
		font-weight:700;
		font-size:0.32rem;
		color:#262626;
		padding-top:0.2rem;
		margin-left:0.95rem;
		float:left;
		padding-right:0.3rem;
	}
	.num{
		font-weight:700;
		float:left;
		display:block;
		font-size:0.32rem;
		padding-top:0.2rem;
	}
	.address{
		color:#6c6c6c;
		float:left;
		font-size:0.24rem;
		position:absolute;
		top:0.7rem;
		left:0.95rem;
	}
	.mup{
		margin-top:0.6rem;
		font-size:0.26rem;
		float:right;
		margin-right:0.2rem;
		color:#bcbcbc;
	}
	div{
		border:1px solid #8a8a8a;
		color:#fff;
		border-radius:50%;
		position:absolute;
		top:0.45rem;
		left:0.22rem;
		width:0.44rem;
		height:0.44rem;
	}
}
.call{
	height:7.9rem;
	width:100%;
	background:#f7f7f7;
}
.new{
	margin: 0.14rem 0;
	width:6.5rem;
	margin-left:0.52rem;
	height:0.8rem;
	background:#01bfbf;
	border-radius:0.5rem;
	text-align:center;
	line-height:0.8rem;
	font-size:0.22rem;
	color:#fff;
}
</style>