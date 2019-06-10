<template>
	<transition name="fade">
    <div class="all">
        <top></top>
        <div v-for="item in list" class="main">
			<div class="shoping">
			<input ref="int" type="checkbox" name="">
			<img :src="item.url">
			<span class="desert">{{ item.name }}</span>
        	<div>
				<span>图片色  </span>
				<span> 38</span>
			</div>
			<p>
				<span>￥{{ item.monye }}</span>
				
				<span class="jum">-</span>
				<span class="num">1</span>
				<span class="add">+</span>
			</p>
			</div>
        </div>
        <div class="foot">
			<div class="election">
				<input @click='fn' type="checkbox" name="" />
				全选
			</div>
			<div class="together">
				<p>共一件:</p>
				<span><i>￥{{ list.monye }}</i></span>
				<div>去结账</div>
			</div>
		</div>
    </div>
    </transition>
</template>

<script>
	import Top from '../components/common/Top.vue'
    export default {
        name: "Search",
        components:{
        	'top':Top
		},
		data(){
			return {
				list:[]
			}
		},
		created(){
			this.$axios.get('/api/shopMark').then(data=>{
				var result = data.data.data[10].shopcar
				this.list = result
			})
		},
		methods:{
			fn(event){
				if(event.target.checked){
					this.$refs.int.map(item=>{
						item.checked='true'
					})
				}else{
					this.$refs.int.map(item=>{
						item.checked=''
					})
				}
				
			}
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

.main{
	.shoping{
		position:relative;
		height:2rem;
		padding:0;
		margin:0;
		margin-top:0.22rem;
	}
	margin-top:0.5rem;
	margin-bottom:0.2rem;
	img{
		width:2.0rem;
		height:1.98rem;
		border-radius:0.1rem;
		float:left;
	}
	.desert{
		display:block;
		font-weight:700;
		font-size:0.24rem;
		margin-left:3.44rem;
		margin-right:0.6rem;
		padding-top:0.1rem;
	}
	div{
		color:#666666;
		margin-top:0.35rem;
		padding-left:3.44rem;
		font-size:0.26rem;
	}
	p{
		float:left;
		color:#ed3a40;
		font-size:0.3rem;
		margin-left:0.3rem;
		margin-top:0.2rem;
		font-weight:700;
		.jum{
			position:absolute;
			display:block;
			width:0.4rem;
			height:0.4rem;
			background:#d2f2f1;
			color:#00bcc7;
			border-radius:50%;
			float:left;
			text-align:center;
			line-height:0.4rem;
			font-size:0.24rem;
			top:1.43rem;
			left:5.8rem;
		}
		.add{
			position:absolute;
			top:1.43rem;
			left:6.7rem;
			font-size:0.24rem;
			line-height:0.4rem;
			text-align:center;
			border-radius:50%;
			display:block;
			width:0.4rem;
			height:0.4rem;
			background:#00bcc7;
			float:left;
			color:#fff;
		}
		span{
			font-weight:700;
			font-size:0.24rem;
			color:#ed3a40;
		}
		.num{
			position: absolute;
			left:6.4rem;
			font-size:0.35rem;
			color:black;
			margin-bottom:0.1rem;

		}
	}
	input{
		margin:0;
		padding:0;
		width:0.4rem;
		height:0.4rem;
		border-radius:0.5rem;
		float:left;
		border:1px solid black;
		margin-left:0.42rem;
		margin-right:0.22rem;
		margin-top:0.8rem;
	}
}
.foot{
	position:fixed;
	left:0;
	bottom:0;
	width:100%;
	height:1.1rem;
	.election{
		float:left;
		color:#888888;
		font-size:0.24rem;
		width:0.5rem;
		height:1.1rem;
		margin-left:0.2rem;
		input{
			width:0.4rem;
			height:0.4rem;
			border-radius:50%;
			margin-left:0.05rem;
			margin-top:0.24rem;
			margin-bottom:0.1rem;
		}
	}
	.together{
		float:left;
		margin-left:2.2rem;
		width:4.6rem;
		height:1.1rem;
		p{
			margin-top:0.42rem;
			color:#666666;
			font-size:0.28rem;
			float:left;
		}
		span{
			display:block;
			float:left;
			margin-top:0.4rem;
			font-size:0.3rem;
			color:#ee303a;
			i{
				font-style:none;
				font-size:0.26rem;
			}
		}
		div{
			float:left;
			width:1.82rem;
			height:0.8rem;
			background:#01bfbf;
			color:#fff;
			border-radius:0.5rem;
			text-align:center;
			line-height:0.8rem;
			margin-top:0.15rem;
			margin-left:0.22rem;
			font-size:0.24rem;
		}
	}
}
</style>