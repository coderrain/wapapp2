<template>
    <div>
        <top></top>
        <ul>
			<li class="list">
				<span>头像</span>
				
					<img src="../assets/image/56.png">
					<strong>></strong>
				
			</li>
			<li class="list">
				<span>昵称</span>
				
					<p><router-link :to="{path:'/name'}">大侠</router-link></p>
					<strong>></strong>
				
			</li>
			<li class="list">
				<span>账号</span>
				
					<p>1602788223</p>
					<strong>></strong>
				
			</li>
		</ul>
		<div class="image">
			<div>拍照</div>
			<div>从相册选择</div>
			
		</div>
		<button>取消</button>
    </div>
</template>

<script>
	import Top from '../components/common/Top.vue'
    export default {
        name: "Head",
        components:{
        	'top':Top
        }
    }
</script>

<style scoped lang="less">
ul{
	margin-top:0.2rem;
	background:#7f7f7f;
	height:20rem;
}
.list{
	height:1.1rem;
	width:7.5rem;
	line-height:1.1rem;
	position:relative;
	span{	
		color:black;
		font-weight:700;
		font-size:0.26rem;
		margin-left:0.26rem;
	}
	img{
		width:0.9rem;
		height:0.9rem;
		position:absolute;
		top:0.12rem;
		left:6.08rem;
	}
	strong{
		position:absolute;
		top:0;
		left:7.09rem;
		font-weight:700;
		font-size:0.26rem;
		color:#c2c0c1;

	}
	P{
		position:absolute;
		top:0;
		right:0.5rem;
		color:#c2c0c1;
		font-size:0.22rem;
	}
	a{
		color:#c2c0c1;
	}
}
.image{
	position:fixed;
	left:0.18rem;
	bottom:1.6rem;
	width:7.1rem;
	height:2.28rem;
	background:#fff;
	border-radius:0.1rem;
	div{
		height:1.12rem;
		text-align:center;
		line-height:1.12rem;
		color:black;
		font-size:0.3rem;
	}
	
}
button{
		position:fixed;
		left:0.22rem;
		bottom:0.36rem;
		color:#888888;
		border-radius:0.1rem;
		margin-top:0.12rem;
		width:7.1rem;
		height:1.12rem;
		background:#fff;
	}
a{
	color:#fff;
}
</style>