<template>
    <div>
        <top></top>
        <div class="log">
        	<img src="../assets/image/59.png">
        </div>
        <div class="chon">
        	<div class="name">
        		<img src="../assets/image/60.png">
        		<input ref="username" type="" name="" placeholder="请输入账号">
        	</div>
        	<div class="pass">
        		<img src="../assets/image/61.png">
        		<input ref="password" type="password" name="" placeholder="请输入密码">
        		<span>忘记密码</span>
        	</div>
        	<div class="pass">
        		<img src="../assets/image/61.png">
        		<input ref="test" type="" name="" placeholder="请输入验证码">
        		<span @click="gettest">获取验证码</span>
        	</div>
        	<div class="ok" @click="get">
        		登录
        	</div>
        	<div class="Short">
        		<span class="right">
        		<router-link :to="{path:'/register'}">注册
        		</router-link>
        		</span>
        	</div>
        </div>
    </div>
</template>

<script>
	import Top from '../components/common/Top.vue'
	import { setStrong} from '../base/strong'
    export default {
        name: "Login",
        components:{
        	'top':Top
    	},
    	data(){
    		return {
    			code:''
    		}
    	},
    	methods:{
    		get(){
    			let user = this.$refs.username.value
    			let pass = this.$refs.password.value
    			if(user.length<=0 || pass.length<=0){
    				alert('请填写账号或者密码')
    				return;
    			}
    			this.$axios.post('/api/user/login',{
    					username:user,
    					password:pass,
    					code:this.code
    			}).then(data=>{
    				if(data.data.code==1){
    					setStrong('SetUser',data.data.data[0])
    					this.$router.push('/user')
    				}
    				else{
    					alert('登录失败')
    				}
    				
    			})
    		},
    		gettest(){
    			this.$axios.get('/api/user/code').then(data=>{
    				this.code = data.data
    				alert(this.code)
    			})
    		}
    	}
    }
</script>

<style scoped lang="less">
.log{
	height:2.26rem;
	width:7.5rem;
	margin-top:0.2rem;
	img{
		width:1.7rem;
		height:1.6rem;
		margin-left:2.93rem;
		margin-top:0.37rem;
	}
}
.chon{
	width:6.6rem;
	height:2.07rem;
	margin-left:0.45rem;
	.name{
		width:6.6rem;
		height:0.86rem;
		border-bottom:1px solid #01bfbf;
		img{
			width:0.3rem;
			height:0.3rem;
			margin-top:0.26rem;
			margin-left:0.18rem;
		}
			
		input{
			margin-left:0.15rem;
			width:5.5rem;
			height:0.86rem;
			border:0;
			font-size:0.34rem;
			color:#bfc1c0;

		}
	}
	.pass{
		margin-top:0.36rem;
		width:6.6rem;
		height:0.86rem;
		border-bottom:1px solid #01bfbf;
		img{
			width:0.3rem;
			height:0.3rem;
			margin-top:0.26rem;
			margin-left:0.18rem;
		
		}
		input{
			margin-left:0.15rem;
			width:4.5rem;
			height:0.85rem;
			border:0;
			font-size:0.34rem;
			color:#bfc1c0;
			padding-bottom:0rem;
		}
		span{
			display:block;
			font-size:0.26rem;
			color:#9f9f9f;
			float:right;
			margin-top:0.3rem;
			margin-right:0.16rem;
		}
	}
	input::-webkit-input-placeholder{
   		color:#bcbcbc;
	}
}
.ok{
	width:6.65rem;
	height:0.8rem;
	background:#01bfbf;
	border-radius:0.5rem;
	margin-top:0.6rem;
	font-size:0.34rem;
	text-align:center;
	line-height:0.8rem;
	color:#fff;
}
.Short{
	height:0.82rem;
	width:6.2rem;
	font-size:0.26rem;
	color:#acacac;
	margin-left:0.22rem;
	padding-top:0.3rem;
	a{
		color:#acacac;
	}
	.right{
		float:right;
	}
}
</style>