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
        <ul>
			<li class="list">
				<span>头像</span>
				
					<router-link :to="{path:'/head'}"><img src="../assets/image/56.png"></router-link>
					<strong>></strong>
				
			</li>
			<li class="list">
				<span>昵称</span>
				
					<p><router-link :to="{path:'/name'}">大侠</router-link></p>
					<strong>></strong>
				
			</li>
			<li class="list">
				<span>账号</span>
				
					<p>1602788223</p>
					<strong>></strong>
				
			</li>
		</ul>
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
ul{
	margin-top:0.2rem;
}
.list{
	height:1.1rem;
	width:7.5rem;
	line-height:1.1rem;
	position:relative;
	span{	
		color:black;
		font-weight:700;
		font-size:0.26rem;
		margin-left:0.26rem;
	}
	img{
		width:0.9rem;
		height:0.9rem;
		position:absolute;
		top:0.12rem;
		left:6.08rem;
	}
	strong{
		position:absolute;
		top:0;
		left:7.09rem;
		font-weight:700;
		font-size:0.26rem;
		color:#c2c0c1;

	}
	P{
		position:absolute;
		top:0;
		right:0.5rem;
		color:#c2c0c1;
		font-size:0.22rem;
	}
	a{
		color:#c2c0c1;
	}
	

}
</style>