<template>
    <div>
        <div class="head">
        	<div @click="back" class="back"><</div>
        	<h3>我的</h3>
        	<div>
				<img @click="menuShow" src="../assets/image/23.png">
        	</div>
        	<div class="menu" v-show="menuIsActive">
	            <ul>
	                <li>
	                    <img src="../assets/image/18.png">
	                    <p>我的</p>
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
        <div class="name">
        	<div class="my">
        		<img src="../assets/image/48.png">
        		<h3>大侠</h3>
        		<p>1602788223</p>
        		<span><router-link :to="{path:'/ours'}">个人中心 ></router-link></span>
        	</div>
        	<div class="order">
        		<div class="top">
        			<p>我的订单</p>
        			<span>查看全部订单 ></span>
        		</div>
        		<div class="bottom">
        			<ul>
						<li>
							<img src="../assets/image/49.png">
							<p>待付款</p>
						</li>
						<li>
							<img src="../assets/image/50.png">
							<p>待收货</p>
						</li>
						<li>
							<img src="../assets/image/51.png">
							<p>已完成</p>
						</li>
					</ul>

        		</div>
        	</div>
        </div>
        <div class="list">
        	<ul>
				<li>
					<img src="../assets/image/52.png">
					我的消息
					<span>></span>
				</li>
				<li>
					<img src="../assets/image/53.png">
					地址管理
					<span>></span>
				</li>
				<li>
					<img src="../assets/image/54.png">
					在线客服
					<span>></span>
				</li>
				<li>
					<img src="../assets/image/55.png">
					热线电话
					<span>></span>
				</li>
			</ul>
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
.name{
	overflow:hidden;
	border-radius: 0 0 0.4rem 0.4rem;
	margin-top:0.2rem;
	height:4.24rem;
	background:#48d6d7;
	width:100%;
	.my{
		position:relative;
		height:1.54rem;
		width:6.96rem;
		margin: 0 0.26rem;
		padding-top:0.38rem;
		img{
			width:1rem;
			height:1rem;
			float:left;
		}
		h3{
			margin-top:0.16rem;
			margin-left:1.2rem;
			font-size:0.3rem;
			color:#fff;
		}
		p{
			color:#fff;
			margin-top:0.16rem;
			margin-left:1.2rem;
			color:#fff;
			font-size:0.24rem;
		}
		a{
			font-size:0.26rem;
			color:#fff;
			position:absolute;
			top:0.8rem;
			right:0.1rem;;
		}
	}
	.order{
		width:6.96rem;
		height:2.7rem;
		margin: 0 0.26rem;
		.top{
			background:#fff;
			width:6.96rem;
			height:0.96rem;
			p{
				line-height:0.96rem;
				float:left;
				font-size:0.28rem;
				color:black;
				margin-left:0.22rem;
			}
			span{
				float:left;
				display:block;
				font-size:0.24rem;
				color:#d1cbce;
				margin-left:3.7rem;
				margin-top:0.4rem;
			}
		}
		.bottom{
			background:#fff;
			width:100%;
			height:1.74rem;
			li{
				img{
					width:0.7rem;
					height:.45rem;
					margin-top:0.45rem;
					margin-bottom:0.22rem;
				}
				width:0.7rem;
				height:1.74rem;
				float:left;
				font-size:0.23rem;
				margin: 0 0.8rem;
				color:#d4d4d4;
			}
		}
	}
}
.list{
	li{
		height:1.25rem;
		font-size:0.24rem;
		color:black;
		line-height:1.25rem;
		img{
			width:0.34rem;
			height:0.28rem;
			margin-left:0.48rem;
			margin-top:0.45rem;
			float:left;
			margin-right:0.1rem;
		}
		span{
			margin-left:5.05rem;
			color:#d0d0d0;
		}
	}
}
</style>