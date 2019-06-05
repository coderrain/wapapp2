<template>
    <div id="all">
        <div class="head">
        	<div @click="back" class="back"><</div>
        	<h3>商品详情</h3>
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
        <div class="logo">
        	<img src="../assets/image/42.png">
        	<ul>
        		<li></li>
				<li></li>
				<li></li>
				<li></li>
        	</ul>
        </div>
        <div class="choice">
        	<h3> Off - White X Nike Air Max 90  THE  TEN 联名沙漠</h3>
        </div>
        <div class="guar">
        	<h3>保障</h3>
        	<ul>
				<li><img src="../assets/image/41.png">质量保障</li>
				<li><img src="../assets/image/41.png">正品保证</li>
				<li><img src="../assets/image/41.png">多重鉴定</li>
				<li><img src="../assets/image/41.png">售后保障</li>
			</ul>
			<div class="git">
				完成
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
        methods:{
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
	background:#fff;
	position: relative;
	padding-top:0.3rem;
	padding-bottom:0.5rem;
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
.logo{
	img{
		height:2.45rem;
		width:5.03rem;
		margin-top:0.6rem;
		margin-left:1.26rem;
		margin-bottom:1.3rem;
	}
	ul{
		width:1.5rem;
		height:0.2rem;
		margin:0 auto;
		li{
			width:0.2rem;
			height:0.2rem;
			background:#c6c8c7;
			border-radius:50%;
			float:left;
			margin: 0 0.08rem;
		}
	}
}
.choice{
	h3{
		margin-top:0.5rem;
		font-size:0.3rem;
		font-weight:700;
		margin-left:0.2rem;
		margin-right:0.6rem;
	}		
}
#all{
	background:#7f7f7f;
}
.guar{
	opacity:1;
	border-radius: 0.2rem  0.2rem 0 0;
	width:100%;
	position:fixed;
	bottom:0;
	left:0;
	height:6.6rem;
	h3{
		height:0.58rem;
		line-height:0.58rem;
		margin-left:0.26rem;
		margin-top:0.26rem;
		font-weight:700;
		font-size:0.3rem;

	}
	ul{
		height:3.55rem;
		li{
			img{
				width:0.32rem;
				height:0.32rem;
				margin-left:0.32rem;
				margin-right:0.1rem;
			}
			height:0.86rem;
			line-height:0.86rem;
			color:#8c8c8c;
			font-size:0.28rem;
		}
	}
	.git{
		width:6.57rem;
		height:0.8rem;
		background:#01bfbf;
		border-radius:0.5rem;
		text-align:center;
		line-height:0.8rem;
		color:#fff;
		font-size:0.28rem;
		margin-top:1.24rem;
		margin-left:0.46rem;
	}
}

</style>