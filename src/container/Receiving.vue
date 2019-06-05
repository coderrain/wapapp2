<template>
    <div>
        <div class="head">
        	<div @click="back" class="back"><</div>
        	<h3>收货地址</h3>
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
   		<div class="main">
   			<div>
   				<span>收货人</span>
				<input type="" name="" placeholder="姓名">
   			</div>
   			<div>
   				<span>联系方式</span>
				<input type="" name="" placeholder="手机号码">
   			</div>
   			<div>
   				<span>所在地址</span>
				<input id="text" type="" name="" placeholder="---省 ---市 ---区">
   			</div>
   			<div>
   				<span>详细地址</span>
				<input type="" name="" placeholder="详细地址需填写楼栋/楼层/房间号">
   			</div>
   			<button>确认</button>
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
        methods:{
            menuShow(){
            console.log(564546)
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
.main{
	height:5.05rem;
	margin-top:0.3rem;
	div{
		height:0.9rem;
		border-bottom: 0.15px solid #bbb7b7;
		line-height:0.9rem;
		font-size:0.28rem;
		color:#adadad;
		span{
			margin-left:0.23rem;
		}
		input{
			float:right;
			width:5.19rem;
			border:0;
			height:0.8rem;
			color:#c2c2c2;
			background:#ffffff;
			font-size:0.28rem;
		}
		#text::-webkit-input-placeholder {
			color: #458dd5;
		}
		
	}
		button{
			width:6.5rem;
			height:0.8rem;
			border:0;
			color:#fff;
			font-size:0.3rem;
			margin-top:0.6rem;
			border-radius:0.5rem;
			background:#01bfbf;
			margin-left:0.53rem;
		}
}
</style>