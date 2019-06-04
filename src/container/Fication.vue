<template>
    <div>
        <div class="head">
        	<div class="back"><</div>
        	<h3>搜索</h3>
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
	                    <p>全部订单</p>
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
        <div class="search">
			<input type="" name="" placeholder="搜素商品">
        </div>
    <div class="main">
    	<div class="list">
    		<ul>
				<li>品牌</li>
				<li>系列</li>
				<li>篮球鞋</li>
				<li>跑鞋</li>
				<li>休闲鞋</li>
				<li>朝服</li>
				<li>手表</li>
				<li>手办</li>
				<li>数码</li>
				<li>运动服</li>
			</ul>
    	</div>
    	<div class="show">
    		<ul>
				<li><img src="../assets/image/25.png"></li>
				<li><img src="../assets/image/26.png"></li>
				<li><img src="../assets/image/27.png"></li>
				<li><img src="../assets/image/28.png"></li>
				<li><img src="../assets/image/29.png"></li>
				<li><img src="../assets/image/30.png"></li>
				<li><img src="../assets/image/31.png"></li>
				<li><img src="../assets/image/32.png"></li>
				<li><img src="../assets/image/33.png"></li>
			</ul>
    	</div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Fication",
        data(){
            return {
                menuIsActive: false
            }
        },
        methods: {
            menuShow(){
                this.menuIsActive = !this.menuIsActive
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
.search{
	border-radius:0.3rem;
	margin-top:0.44rem;
	margin-left:0.28rem;
	height:0.6rem;
	input::-webkit-input-placeholder {
        text-align: center;
    }
	input{
		background:#f6f7f8 url('../assets/image/24.png') no-repeat 2.2rem;
		background-size:0.4rem 0.3rem;
		margin-left:0.6rem;
		border-radius:0.3rem;
		float:left;
		border:0;
		height:0.6rem;
		width:6rem;
	}
	button{
		font-size:0.24rem;
		width:1.24rem;
		height:0.6rem;
		background:#09c7c7;
		border:0;
		border-radius:0.15rem;
		margin-left:0.15rem;
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
            z-index:1000;
            li{
                width:3.16rem;
                height:1.08rem;
                font-size: .36rem;
                color: #282828;
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
 	margin-top:0.1rem;
 	.list{
 		float:left;
 		width:1.85rem;
 		li{
 			width:1.85rem;
 			height:.9rem;
 			background:#eff3f2;
 			font-size:0.35rem;
 			text-align:center;
 			line-height:0.9rem;
 		}
 	}
 	.show{
 		li{
 			float:left;
 			width:1.88rem;
 			height:1.88rem;
 			margin-top:0.51rem;
 			img{
 				width:1.2rem;
 				height:1.2rem;
 				margin-top:0.1rem;
 				margin-left:0.2rem;
 			}
 		}
 	}
 }
</style>