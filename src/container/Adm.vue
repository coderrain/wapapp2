<template>
    <div>
        <div class="head">
        	<div @click="back" class="back"><</div>
        	<h3>地址管理</h3>
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