<template>
    <transition name="fade">
    <div>
        <top></top>
        <div class="search">
			<input @keyup="ipt" ref="int" type="" name="" placeholder="搜素商品">
        </div>
    <div class="main">
    	<div class="list">
    		<ul>
				<li @click="fn(item.id,$event)" v-for=" item in brand">
					{{ item.name }}
				</li>
			</ul>
    	</div>
    	<div class="show">
    		<ul>
				<li v-for="item in list">
					<img :src="item.url" alt="">	
					
				</li>
			</ul>
    	</div>
    </div>
    </div>
    </transition>
</template>

<script>
   	import Top from '../components/common/Top.vue'
    export default {
        name: "Fication",
        data(){
        	return {
        		brand:[],
        		list:[]
        	}
        },
        components:{
        	'top':Top,

        },
        created(){
        	this.$axios.get('/api/shopMark').then(data=>{
        		this.brand = data.data.data
        	})
        },
        methods:{
        	fn(item,event){
                this.$axios.get('/api/shopList',{
                    params:{
                        shopId:item
                    }
                }).then(data=>{
                    this.list =  data.data.data
                })  
                var oUl = event.path[1].childNodes
                console.log(oUl)
                oUl.forEach(item=>{
                    item.style.background="#ccc"
                })
                event.target.style.background="#fff"
                oUl.style.background="#red"
        		

        	},
            ipt(){
               this.$axios.get('/api/search',{
                    title:this.$refs.int.value
               }).then(data=>{
                this.list=[]
                var data = data.data.data
                var val = this.$refs.int.value
                data.map(item=>{
                    if(val==item.title){
                        this.list.push(item)
                    }
                })
                    
               })
            }
        }
        	
    }

</script>

<style scoped lang="less">
.fade-enter-active {
    transition: all 1s ease;
}
.fade-leave-active {
    transition: all 1s;
}
.fade-enter, .fade-leave-to{
    transform: translateX(750px);
}
.search{
	border-radius:0.3rem;
	margin-top:0.44rem;
	margin-left:0.28rem;
	height:0.6rem;
	input::-webkit-input-placeholder {
        text-align: center;
    }
	input{
		background:#f6f7f8 url('../assets/image/24.png') no-repeat 2.1rem;
		background-size:0.4rem 0.4rem;
		margin-left:0.6rem;
		border-radius:0.3rem;
		float:left;
		border:0;
		height:0.6rem;
		width:6rem;
	}
	button{
		font-size:0.24rem;
		width:1.24rem;
		height:0.6rem;
		background:#09c7c7;
		border:0;
		border-radius:0.15rem;
		margin-left:0.15rem;
	}
}
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
</style>