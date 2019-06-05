<template>
    <div>
        <div class="head">
        	<div @click="back" class="back"><</div>
        	<h3>搜索</h3>
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
        <div class="search">
        	<div>
        	<img src="../assets/image/24.png">
        	</div>
			<input type="" name="" placeholder="搜素商品">
			<button>搜索</button>
        </div>
        <div class="hot">热搜</div>
        <div class="list">
        	<li>Air jorDan</li>
			<li>Yeezy</li>
			<li>华为</li>
			<li>iphone</li>
			<li>Yeezy</li>
			<li>Air jordan</li>
			<li>阿迪达斯Adidas</li>
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
.search{
	div{	
		height:0.6rem;
		widht:0.4rem;
		float:left;
		background:#f6f8f7;
		border-radius:0.3rem 0 0 0.3rem;
		img{
			padding-top:0.15rem;
			float:left;
			widhth:0.28rem;
			height:0.28rem;
			margin-left:0.2rem;
		}
	}
	
	border-radius:0.3rem;
	margin-top:0.44rem;
	margin-left:0.28rem;
	input{
		border-radius:0 0.3rem 0.3rem 0;
		float:left;
		background:green;
		border:0;
		height:0.6rem;
		background:#f6f8f7;
		width:5rem;
		margin-left:0.08rem;
	}
	button{
		font-size:0.24rem;
		width:1.24rem;
		height:0.6rem;
		background:#09c7c7;
		border:0;
		border-radius:0.1rem;
		margin-left:0.15rem;
		color:#fff;
	}
}
.hot{
	margin-left:0.28rem;
	margin-top:0.28rem;
	margin-bottom:0.2rem;
	font-size:0.24rem;
}
.list{
	li{
		margin-right:0.2rem;
		padding-right:0.2rem;
		padding-left:0.2rem;
		margin-left:0.2rem;
		height:0.4rem;
		background:#f6f8f7;
		float:left;
		border-radius:0.2rem;
		text-align:center;
		line-height:0.4rem;
		margin-bottom:0.4rem;
		font-size:0.26rem;
		color:#848787;
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
</style>