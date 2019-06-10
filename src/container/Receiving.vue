<template>
    <div>
        <top></top>
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
	import Top from '../components/common/Top.vue'
    export default {
        name: "Receving",
        components:{
        	'top':Top
    	}
    }
</script>

<style scoped lang="less">
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