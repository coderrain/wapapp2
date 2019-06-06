<template>
    <div id="all">
        <top></top>
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
        	<h3>参数</h3>
        	<ul>
				<li>配色<span>棕色/黑色</span></li>
				<li>货号<span>308497-060</span></li>
				<li>官方价格<span>￥1399仅供参考</span></li>
				<li>发售日期<span>2019.05.04</span></li>
			</ul>
			<div class="git">
				完成
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
			margin-left:0.28rem;
			height:0.86rem;
			line-height:0.86rem;
			color:#8c8c8c;
			font-size:0.28rem;
			position: relative;
			span{
				position:absolute;
				left:2.14rem;
			}
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
a{
	color:#fff;
}

</style>