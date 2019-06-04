<template>
    <div>
        <div class="head">
        	<div class="back"><</div>
        	<h3>确认订单</h3>
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


</style>