<template>
    <div class="all">
        <top v-bind:title="title"></top>
        <div v-for="item in list" class="main">
			<div class="shoping">
			<el-checkbox  v-model="item.checked"></el-checkbox>
			<img :src="item.url">
			<span class="desert">{{ item.name }}</span>
        	<div>
				<span>图片色  </span>
				<span> 38</span>
			</div>
			<p>
				<span>￥{{ item.money }}</span>
				
				<span @click="jump(item.id)" class="jum">-</span>
				<span class="num">{{ item.chose }}</span>
				<span @click="add(item.id)" class="add">+</span>
			</p>
			</div>
        </div>
        <div class="foot">
			<div class="election">
				<el-checkbox id="check" v-model="all"></el-checkbox>
				全选
			</div>
			<div class="together">
				<span><i>一共：￥{{ count }}</i></span>
				<div>去结账</div>
			</div>
		</div>	
    </div>
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
				list:[],
				title:"购物车"
			}
		},
		computed:{
			all:{
				get(){
					return this.list.every(item=>{
						return item.checked == true
					})
				},
				set(val){
					this.list = this.list.map(item=>{
						item.checked = val?true:false
						return item;
					})
				}
			},
			count(){
				return this.list.reduce((prev,next)=>{
					if(next.checked){
						return prev + next.money*next.chose
					}else{
						return prev
					}
				},0)
			}
		},
		mounted(){
			this.$axios.get('/api/shopMark/car').then(data=>{
				var result = data.data.data
				this.list = result
				
			})
		},
		methods:{
			add(id){
				this.list[id-1].chose++
			},
			jump(id){
				if(this.list[id-1].chose>0){
					this.list[id-1].chose--
				}
				if(this.list[id-1].chose==0){
					this.list[id-1].chose=0

				}
				
			}
		}
    }
</script>

<style scoped lang="less">
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
			font-size:0.28rem;
			top:1.43rem;
			left:5.8rem;
			font-weight:700;
		}
		.add{
			font-weight:700;
			position:absolute;
			top:1.43rem;
			left:6.7rem;
			font-size:0.28rem;
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
			left:6.3rem;
			font-size:0.35rem;
			color:black;
			margin-bottom:0.1rem;

		}
	}
}
.el-checkbox{
	float:left;
	margin-left:30px;
	margin-top:50px;
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
		#check{
			margin-top:15px;
			margin-left:7px;
			margin-bottom:8px;
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
			float:right;
			width:1.82rem;
			height:0.8rem;
			background:#01bfbf;
			color:#fff;
			border-radius:0.5rem;
			text-align:center;
			line-height:0.8rem;
			margin-top:0.15rem;
			font-size:0.24rem;
		}
	}
}
</style>