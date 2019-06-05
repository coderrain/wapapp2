<template>
    <div>
        <div class="head">
        	<div @click="back" class="back"><</div>
        	<h3>商品详情</h3>
        	<div>
				<img @click="menuShow" src="../assets/image/23.png">
        	</div>
        	<div class="menu" v-show="menuIsActive">
	            <ul>
	                <li>
	                    <img src="../assets/image/18.png">
	                    <p><router-link :to="{path:'/my'}">我的</router-link></p>
	                </li>
	                <li>
	                    <img src="../assets/image/19.png">
	                    <p><router-link :to="{path:'/order'}">全部订单</router-link></p>
	                </li>
	                <li>
	                    <img src="../assets/image/20.png">
	                    <p><router-link :to="{path:'/shopcar'}">购物车</router-link></p>
	                </li>
	                <li>
	                    <img src="../assets/image/21.png">
	                    <p>我的消息</p>
	                </li>
	                <li>
	                    <img src="../assets/image/21.png">
	                    <p><router-link :to="{path:'/search'}">跳转search</router-link></p>
	                </li>
	            </ul>
	        </div>	
        </div>
        <div class="black">
        </div>
        <div class="main">
        	<div class="show">
        		<img src="../assets/image/38.png">
        		<div>
	        		<span class="Sone">￥</span>
	        		<span class="Stwo">2989.00</span>
        		</div>
        		<p>选择颜色分类尺码</p>
        		<button>X</button>
        	</div>
        	<h3>鞋码</h3>
        	<div class="num">
        		<ul>
					<li>35</li>
					<li>36</li>
					<li>37</li>
					<li>38</li>
					<li>39</li>
					<li>40</li>
					<li class="four">41</li>
					<li>42</li>
					<li>43</li>
				</ul>
        	</div>
        	<h3>颜色</h3>
        	<div class="col">
        		<div>图片色</div>
        		<div class="zong">棕色</div>
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
        name: "Search",
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
.head{
	position: relative;
	margin-top:0.3rem;
	width:100%;
	height:0.35rem;
	.back{
		font-size:0.36rem;
		color:black;
		float:left;
		line-height:0.36rem;
		margin-left:0.28rem;
		font-weight:700;
	}
	h3{
		text-align: center;
		margin-left:2.9rem;
		font-size:0.32rem;
		float:left;
	}
	img{
		width:0.42rem;
		height:0.39rem;
		float:right;
		margin-right:0.3rem;
	}
}		
.menu{
	margin-top:0.5rem;
    position: absolute;
    right: .28rem;
    width:3.2rem;
    background: #000;
    opacity: 0.8;
    border-radius:0.08rem;
    li{
       width:3.16rem;
       height:1.08rem;
       font-size: .36rem;
       color: #fff;
       p{
        margin-top:0.33rem;
        float:left;
        margin-left:0.38rem;
        border-bottom: 1px solid #ccc;
        padding-bottom:0.30rem;
        width:2rem;
        }
        img{
           float:left;
           margin-left:0.1rem;
           margin-top:0.33rem;
            width:0.38rem;
           height:0.48rem;
           }
           a{
            color:#ccc;
           }
        }
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
.black{
	height:2.48rem;
	opacity:0.7;
	margin-top:0.2rem;
	background: #000 url('../assets/image/37.png') no-repeat center;
	background-size:5rem 2rem;
	z-index:100;
}
.main{
	border-radius:0.3rem 0.3rem 0 0 ;
	.show{
		position: relative;
		height:2.15rem;
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