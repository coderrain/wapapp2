<template>
    <div class="guar">
        	<h3>保障</h3>
        	<ul>
				<li v-for="item in tee">
					<img :src="item.url">
					{{item.title}}
				</li>
					
			</ul>
			<div class="git" @click="fn">
				完成
			</div>
       
    </div>
</template>

<script>
    export default {
        name: "Guarantee",
		data(){
			return {
				tee:[]
			}
		},
		created(){
			this.$axios.get('/api/search').then(data=>{
				this.tee = data.data.data
				for(var i=0;i<this.tee.length;i++){
					this.tee = this.tee[i]
				}
				this.tee = this.tee.safe
			})
		},
		methods:{
			fn(){
				this.$emit('showdigeo')
				this.$root.$el.style.background='#fff';
			}
		}
    }
</script>

<style scoped lang="less">

.guar{
	border-radius: 0.3rem  0.3rem 0 0;
	width:7.5rem;
	position:fixed;
	bottom:0;
	left:0;
	height:6.6rem;
	z-index:100;
	background:red;
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
.guar{
	background:#fff;
}
</style>