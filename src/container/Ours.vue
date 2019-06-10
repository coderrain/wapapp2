<template>
    <div>
        <top></top>
        <ul>
			<li class="list">
				<span>头像</span>
				
					<router-link :to="{path:'/portrait'}"><img src="../assets/image/56.png"></router-link>
					<strong>></strong>
				
			</li>
			<li class="list">
				<span>昵称</span>
				
					<p><router-link :to="{path:'/username'}">{{ name }}</router-link></p>
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
   	import Top from '../components/common/Top.vue'
    export default {
        name: "Ours",
        components:{
        	'top':Top
    	},
    	data(){
    		return {
    			name:''
    		}
    	},
    	created(){
    		this.fn()
    	},
    	methods:{
    		fn(){
    			this.$axios.post('/api/user/resetname').then(data=>{
    				console.log(data)
    				this.name = data.data.username
    			})
    		}
    	}
    }	
</script>

<style scoped lang="less">
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