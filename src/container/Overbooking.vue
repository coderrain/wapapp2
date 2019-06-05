<template>
    <div>
        <div class="head">
        	<div @click="back" class="back"><</div>
        	<h3>确认订单</h3>
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
        <div class="collect">
        	<h3>待收货</h3>
        	<p>下单3-5天可收到货,</p>
        	<p>请您耐心等待</p>
        	<img src="../assets/image/46.png">
        </div>
        <div class="name">
        	<img src="../assets/image/47.png">
        	<p>王冉</p>
        	<span class="num">188****1699</span>
        	<span class="address">陕西省西安市长安区韦曲街道长安警苑三单元701室</span>
        	<span class="mup">></span>
        </div>
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
        <div class="plait">
        	<ul>
				<li>
					<p>订单编号</p>
					<span>12354658708kh</span>
				</li>
				<li>
					<p>创建日期</p>
					<span>2018-08-04 15:36</span>
				</li>
				<li>
					<p>付款时间</p>
					<span>2018-08-04 15:40</span>
				</li>
			</ul>
        </div>
        <div class="foot">
        	<div class="del">删除订单</div>
        	<div class="by">再次购买</div>
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
.collect{
	margin-top:0.2rem;
	height:2.3rem;
	width:100%;
	color:#3ecdb9;
	position:relative;
	h3{
		padding-top:0.66rem;
		margin-left:0.42rem;
		font-size:0.32rem;
		padding-bottom:0.12rem;
	}
	p{
		margin-left:0.42rem;
		font-size:0.28rem;
	}
	img{
		width:2.46rem;
		height:1.53rem;
		position:absolute;
		top:0.4rem;
		left:4.16rem;
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
	z-index:0;
	height:1.28rem;
	img{
		float:left;
		width:0.27rem;
		height:0.34rem;
		margin-top:0.22rem;
		margin-left:0.36rem;
	}
	p{	
		font-weight:700;
		font-size:0.26rem;
		color:#262626;
		padding-top:0.28rem;
		margin-left:0.25rem;
		float:left;
		padding-right:0.24rem;
	}
	.num{
		font-weight:700;
		display:block;
		font-size:0.26rem;
		padding-top:0.28rem;
		margin-left:5.2rem;
	}
	.address{
		color:#6c6c6c;
		display:block;
		margin-left:0.9rem;
		margin-top:0.18rem;
		float:left;
		font-size:0.28rem;
		margin-right:0.6rem;
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
	margin-top:0.4rem;
	margin-bottom:0.4rem;
	height:2rem;
	img{
		width:2.0rem;
		height:1.98rem;
		border-radius:0.1rem;
		margin-left:0.2rem;
		float:left;
	}
	.desert{
		font-weight:700;
		display:block;
		font-size:0.26rem;
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
			font-size:0.2rem;
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
.plait{
	overflow:hidden;
	height:2.52rem;
	width:100%;
	ul{
		height:1.78rem;
		width:100%;
		margin-top:0.26rem;
		li{
			float:left;
			height:0.6rem;
			p{
				float:left;
				font-size:0.28rem;
				color:#595959;
				margin-top:0.18rem;
				margin-bottom:0.18rem;
				margin-left:0.2rem;
			}
			span{
				margin-left:0.6rem;
				font-size:0.26rem;
				color:#595959;
				display:block;
				float:left;
				margin-top:0.22rem;
			}
		}
	}
}
.foot{
	width:100%;
	height:1.1rem;
	position:relative;
	.del{
		position:absolute;
		left:3.17rem;
		top:0.18rem;
		width:1.86rem;
		height:0.8rem;
		background:#f0f2f1;
		color:#adafae;
		border-radius:0.5rem;
		text-align:center;
		line-height:0.8rem;
		font-size:0.3rem;
	}
	.by{
		position:absolute;
		left:5.44rem;
		top:0.18rem;
		width:1.86rem;
		height:0.8rem;
		background:#01bfbf;
		color:#fff;
		border-radius:0.5rem;
		text-align:center;
		line-height:0.8rem;
		font-size:0.3rem;
	}
}
</style>