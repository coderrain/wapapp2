<template>
    <div>
    	<top></top>
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
    	import Top from '../components/Child/Top.vue'
    export default {
        name: "Search",
        components:{
        	'top':Top
        },
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
 .main{
 	margin-top:0.1rem;
 	.list{
 		float:left;
 		width:1.85rem;
 		li{
 			width:1.85rem;
 			height:1rem;
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
 a{
	color:#fff;
}
</style>