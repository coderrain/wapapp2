<template>
    <div>
        <top></top>
        <div class="hello">
        	您好！请输入你要使用的昵称
        </div>
		<input ref="username" type="" name="" placeholder="请设置昵称">
		<div class="ok" @click="fn">完成</div>
    </div>
</template>

<script>
	import Top from '../components/common/Top.vue'
    export default {
        name: "Name",
        components:{
        	'top':Top
    	},
    	methods:{
    		fn(){
    			var user = this.$refs.username.value
    			this.$axios.post('/api/user/resetname',{
    				username:user
    			}).then(data=>{
    				this.$router.push('/ours')
    			})
    		}
    	}
    }
</script>

<style scoped lang="less">
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
 a{
	color:#fff;
}
</style>