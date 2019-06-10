<template>
    <div class="all">
        <top></top>
        <div class="nav">
        	<ul>
				<li @click="all($event)">全部订单</li>
				<li @click="wait(2,$event)">待付款</li>
				<li @click="wait(3,$event)">待收货</li>
				<li @click="wait(1,$event)">已完成</li>
			</ul>
        </div>
        <ul>
        	<li v-for="item in list">
        		<div class="num">
	        	<span>订单编号：{{ item.num}}</span>
	        	<img :src="item.image">
	        	<p>{{ item.state}}</p>
		        </div>
		        <div class="main">
		        	<div class="shoping">
		        	<img :src="item.url">
		        	<span class="desert">{{ item.name }}</span>
		        	<div>
						<span>图片色  </span>
						<span> 38</span>
		        	</div>
		        	<p>
		        		<span>￥</span>
		        		{{ item.monye }}
		        		<strong>x1</strong>
		        	</p>
		        	</div>
		        	<div class="show">
		        		<p>共一件商品 实付款</p>
		        		<span><i>￥</i>{{ item.monye }}</span>
		        		<ul>
							<li>删除订单</li>
							<li class="ok">确认订单</li>
						</ul>
		        	</div>
		        </div>
        	</li>
        </ul>
    </div>
</template>

<script>
 	import Top from '../components/common/Top.vue'
    export default {
        name: "Order",
        components:{
        	'top':Top
        },
        data(){
        	return {
        		list:[]

        	}
        },
        methods:{
        	wait(id){
        		var oLi = event.target.parentNode.children
        		for(var i=0;i<oLi.length;i++){
        			oLi[i].style.color = 'black'
        		}
        		event.target.style.color="#00c0c2"
        		this.$axios.get('/api/shopMark').then(data=>{
        			var result = data.data.data[10].shopcar
        			this.list = []
        			result.map(item=>{
        				if(item.id==id){
        					this.list= item
        					console.log(this.list)
        				}
        			})	
        		})
        	},
        	all(){
        		var oLi = event.target.parentNode.children
        		for(var i=0;i<oLi.length;i++){
        			oLi[i].style.color = 'black'
        		}
        		event.target.style.color="#00c0c2"
        		this.listed=[]
        		this.$axios.get('/api/shopMark').then(data=>{
        		var result = data.data.data[10].shopcar
        		this.list = result
        	})
        	}
        },
        created(){
        	this.all()
        }
    }
</script>

<style scoped lang="less">
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