<template>
    <div class="all">
        <top></top>
        <div v-for="item in list" class="main">
			<div class="shoping">
			<input @click="ipt(item.id)" ref="int" type="checkbox" name="">
			<img :src="item.url">
			<span class="desert">{{ item.name }}</span>
        	<div>
				<span>图片色  </span>
				<span> 38</span>
			</div>
			<p>
				<span>￥{{ item.monye }}</span>
				
				<span @click="del(item.id)" class="jum">-</span>
				<span class="num">{{ item.chose }}</span>
				<span @click="by(item.id)" class="add">+</span>
			</p>
			</div>
        </div>
        <div class="foot">
			<div class="election">
				<input ref="all" @click='fn' type="checkbox" name="" />
				全选
			</div>
			<div class="together">
				<p>共{{ num }}件:</p>
				<span><i>￥{{ money }}</i></span>
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
				money:0,
				num:0
			}
		},
		created(){
			this.$axios.get('/api/shopMark').then(data=>{
				var result = data.data.data[11].shopcar
				this.list = result
			})
			
		},
		methods:{
			ber(id){
				this.num+=this.list[id-1].chose
				this.money+=this.list[id-1].chose*this.list[id-1].monye
			},
			fn(event){
				if(event.target.checked){
					this.$refs.int.map(item=>{
						item.checked='true'
						this.num = this.list.length
					})
				}else{
					this.$refs.int.map(item=>{
						item.checked=''
						this.num=0
					})
				}	
			},
			by(id){
				this.list.map(item=>{
					if(item.id==id){
						item.chose++
					}
				})
				this.ber(id)
			},
			del(id){
				this.list.map(item=>{
					if(item.id==id){
						if(item.chose<=0){
							item.chose=0
						}else{
							item.chose--
						}
						
					}
				})
				this.ber(id)
			},
			ipt(id){
				this.list[id-1].chose=0
				var all = this.$refs.all
				var ipt = this.$refs.int
				if(ipt[0].checked && ipt[1].checked && ipt[2].checked){
					all.checked = 'checked'
				}else{
					all.checked=null
				}
				ipt.map(item=>{
					if(item.checked){
						this.list[id-1].chose=1
					}
					
				})
				this.ber(id)
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