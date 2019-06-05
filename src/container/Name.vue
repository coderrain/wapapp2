<template>
    <div>
        <div class="head">
        	<div @click="back" class="back"><</div>
        	<h3>个人中心</h3>
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
        <div class="hello">
        	您好！请输入你要使用的昵称
        </div>
		<input type="" name="" placeholder="请设置昵称">
		<div class="ok">完成</div>
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
.hello{
	width:7.3rem;
	height:0.9rem;
	font-size:0.3rem;
	color:black;
	line-height:0.9rem;
	margin-left:0.2rem;
	margin-top:0.2rem;
}
input{
	border:0;
	width:7.1rem;
	height:0.8rem;
	margin:0 0.15rem;
	background:url('../assets/image/57.png') no-repeat right;
}
input::-webkit-input-placeholder {
    color: #dbdbdb;
    font-size: 0.3rem;
}
 .ok{
 	width:7.12rem;
 	height:0.8rem;
 	background:#01bfbf;
 	color:#fff;
 	margin-left:0.12rem;
 	border-radius:0.5rem;
 	font-size:0.3rem;
 	text-align:center;
 	line-height:0.8rem;
 	margin-top:0.65rem;
 }
</style>