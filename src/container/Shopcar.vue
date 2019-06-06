<template>
    <div class="all">
        <div class="head">
			<div @click="back" class="back"><</div>
			<h3>购物车</h3>
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
						<p>购物车</p>
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
        <div class="main">
			<div class="shoping">
			<input type="checkbox" name="">
			<img src="../assets/image/40.png">
			<span class="desert">Off-White X Nike Air Max 90 THE TEN 联名 沙漠</span>
        	<div>
				<span>图片色  </span>
				<span> 38</span>
			</div>
			<p>
				<span>￥</span>
				2989.00
				<span class="jum">-</span>
				<span class="num">1</span>
				<span class="add">+</span>
			</p>
			</div>
        </div>
        <div class="main">
			<div class="shoping">
			<input type="checkbox" name="" style="border-radius:50%;">
			<img src="../assets/image/40.png">
			<span class="desert">Off-White X Nike Air Max 90 THE TEN 联名 沙漠</span>
			<div>
				<span>图片色  </span>
				<span> 38</span>
			</div>
			<p>
				<span>￥</span>
				2989.00
				<span class="jum">-</span>
				<span class="num">1</span>
				<span class="add">+</span>
			</p>
			</div>
        </div>
        <div class="foot">
			<div class="election">
				<input type="checkbox" name="" />
				全选
			</div>
			<div class="together">
				<p>共一件:</p>
				<span><i>￥</i>2989.00</span>
				<div>去结账</div>
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
	overflow:hidden;
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
	z-index:210;
	margin-top:0.5rem;
    position: fixed;
    right: 0.28rem;
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
			margin-left:1.35rem;
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